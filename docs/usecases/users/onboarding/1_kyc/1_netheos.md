# KYC Netheos

The provider used by Xpollens is Netheos.
This documentation is available here: https://integration-api.ekeynox.net/docs/integration/latest/en/intro/

* * *

## KYC Workflow

### KYC Status definition

The KYC status represents the progress of the user's KYC. This status includes the state of progress on all due diligences.

* * *
### KYC State Diagram

```mermaid
stateDiagram
    [*] --> Initialized
		state fork_state <<fork>>
    Initialized --> Pending : If case was created by KYC provider
    Pending --> fork_state
    fork_state -->	Incomplete : At least one diligence has been received by the provider
		fork_state --> AwaintingExpertise : All diligences are "validated" and "FinalDecision" = pending
	  fork_state --> FraudSuspicion : Decision = "KOFraud"
	  
	  state fork_state2 <<fork>>
	  Incomplete -->  fork_state2
	  fork_state2 --> Complete : All expected diligences are "Validated" and Decision "OK"
	  fork_state2 --> FraudSuspicion : Decision = "KOFraud"
	  fork_state2 --> AwaintingExpertise : All diligences are "validated" and "FinalDecision" = pending
	  
	  AwaintingExpertise --> Complete : "FinalDecision" = OK	  
	  AwaintingExpertise --> Incomplete : All expected diligences are not 'Validated' AND   
	  AwaintingExpertise --> FraudSuspicion : "FinalDecision" = KOFraud	  
	  


    FraudSuspicion --> [*]
    Complete --> [*]

```

* * *
### KYC Sequence diagram

```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO
User ->> Partner : Account creation requested<br/>appUserId<br/>civility<br/>lastName<br/>...
Partner ->> XPO : POST / api/v2.0/users
XPO -->> Partner: HTTP/201
XPO --) Partner : Callback 34<br/>userRecordStatus :Initialized
XPO --) Partner : Callback 45<br/>Account Status :Initialized
Partner -->> User : Display KYC workflow choice<br/>(depends on partner implementation)
User -->> Partner: Choose KYC Workflow<br/>(depends on partner implementation)
Partner ->> XPO: POST /api/v3.0/user/{appUserId}/kyc/demand<br/>workflowCode: Electronic_Sign|Identity
XPO -->> Partner : HTTP/201
XPO --) Partner : Callback 4 - KYC Demand<br/>status:PENDING
XPO --) Partner : Callback 48 - Web View URL
XPO --) Partner : Callback 35 - SCA Wallet Initialization
alt using the webview
    Partner -->> User : Display WebViewURL <br/> Electronic_sign: ID & selfie <br/> Identity: ID
else using API, identity workflow only
    Partner -->> User : Request for identity document upload
    
end
```

<br/><br/>

>**Note**<br/>
> Wokflow parameterization has to be made upstream during the environment parameterization. Partner choice is then taken into account by XPollens for global workflow parameterization. The XPollens recommandations by order of preference are as follow :
><br/>
 > 1- Electronic signature + Identity (in fallback) <br/>
 > 2- Electronic signature alone (in this case the user has no choice but to use the selfie) <br/>
 > 3- Identity alone (not recommended) 

<br/>

>**Note**<br/>
>**⚠ XPollens recommend to use the `Identity` workflow only in fallback when the user is not able to complete the Electronic signature workflow** 

<br/>

> **Remark**<br/>
> Steps 6 and 7 are optionnal and depends on partner implementation

* * *
### APIs, callbacks and technical items

#### `POST /api/v3.0/user/{appUserId}/kyc/demand`
***Description***

This API is dedicated to the new KYC solution.
It enables the creation of the KYC demand with a specific workflow.

***Prerequisite***

Prerequisites to call this endpoint are : 

- User must exist. 
- KYC demand doesn't exit.

***Body parameter***

```json
{
  "workflowCode": "string"
}
```

***Parameters***

| Name | In  | Type | Required | Description |
| --- | --- | --- | --- | --- |
| appUserId | path | string | true | <details><summary>User identifier of partner</summary><br/><summary>Format</summary> Min 9 characters, max 30 characters<br/><summary>Accepted characters</summary> 0-9 a-z A-Z\_-.!()<br/><summary>Example</summary> ABCDEFGHI or A1B2C3d4f5g678901234567890123</details> |
| CorrId | header | string | false | Correlation Id |
| body | body | [CreateKycDemand](#schemacreatekycdemand) | true | Information needed to provided |

> Example responses
> 400 Response
> 
> ```json
> {
>   "message": "string"
> }
> ```

<br/>

***Responses***

| Status | Meaning | Description | Schema |
| --- | --- | --- | --- |
| 201 | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created | None |
| 400 | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | <details><summary>Bad Request :</summary><br/>\- The appUserId field is required.<br/>\- The WorkflowCode field is required.<br/>\- The User's KYC demand already exists<br/>\- WorkflowCode does not exist in referential</details> | [ErrorResponse](#schemaerrorresponse) |
| 404 | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Not Found | [ErrorResponse](#schemaerrorresponse) |
| 405 | [Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5) | Operation not allowed | [ErrorResponse](#schemaerrorresponse) |
| 500 | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server Error | [ErrorResponse](#schemaerrorresponse) |

***Schemas***

* *CreateKycDemand*

```json
{
  "workflowCode": "string"
}
```

***Properties*** 

| Name | Type | Required | Restrictions | Description |
| --- | --- | --- | --- | --- |
| workflowCode | string | true | none | **workflowCode**<br/>*Worflow of the KYC process.*<br/>Possible values:<br/><br/>\- Electronic\_Sign<br/>\- Identity |

***ErrorResponse***

```json
{
  "message": "string"
}

```

***Error Properties***

| Name | Type | Required | Restrictions | Description |
| --- | --- | --- | --- | --- |
| message | string | true | none | none |

<br/>

* * *
#### [`GET /api/v2.0/users/{appUserId}/kyc/demand`](https://docs.xpollens.com/api/KYC#get-/api/v2.0/users/-appUserId-/kyc/demand)

***Description***

This API retrieves the KYC demand that contains the KYC diligences received and their status.

***Prerequisite***

The KYC demand must exists.

* * *
#### Callback type 4 - [`#04 - KYC demand`](https://docs.xpollens.com/api/callbacks#post-/-callback04-V2.0Url-)

***Description***

Callback received in case of status change in the KYC demand

* * *
### Workflow change

During user onboarding it is possible for the user to switch from the `Electronic_Signature` workflow to the `Identity` workflow (this way only, it is not possible to switch from `Identity` to `Electronic_Signature`).
This is possible as long as the user has not completed the Selfie+ID step in the `Electronic_Signature` workflow.
To handle the switch of workflow, partner should call the `PUT /api/v3.0/users/{appUserId}/kyc/demand` by specifying the new workflow in the payload.

> Exemple
> 
> ```json
> PATCH /api/v3.0/users/{appUserId}/kyc/demand
> {
>      "workflowCode" : "Identity"
> }
> ```

<br/>

> Conversely, it is impossible to switch from the `Identity` workflow to the `Electronic_Signature` workflow.

* * *

## Due diligence Workflow
### Due Diligence types

For the `Electronic_Signature` workflow, the due diligences expected are :

1- Identity document & selfie<br/>
2- Electronic signature

For the `Identity` workflow, the due diligences expected are :

1- Identity document<br/>
2- Sepa Credit Transfer IN (this sepa transfer could be an instant payment, a standard one)

For these two workflows, when configuring your environment, you can choose to accept one or more of the following forms of identification:

* ID card
* passport
* resident permit

Identity checks are subject to SLAs: 5 minutes maximum in 90% of cases.

* * *
### Due Diligence state diagram
#### Diligence Status (webview mode):

```mermaid
stateDiagram
state fork_state <<fork>>
state fork_state2 <<fork>>

  [*] --> fork_state
 fork_state --> To_Review_Manually: provider needs to check manually the diligence
 fork_state --> Validated: provider valides diligence 
 
 To_Review_Manually --> fork_state2
	fork_state2--> Refused: provider rejects the diligence after manual check
	fork_state2--> Validated: provider validates the diligence after manual check
```

* * *
#### Diligence Status (API mode):

```mermaid
stateDiagram
state fork_state <<fork>>
state fork_state2 <<fork>>

  [*] --> Received
  Received --> fork_state
  fork_state --> To_Review_Manually: Diligence needs manual review
  fork_state --> Validated : provider valides diligence
  
  To_Review_Manually --> fork_state2
  fork_state2 --> Validated: provider validates the diligence after manual check
 fork_state2 --> Refused: provider rejects validates the diligence after manual check
   fork_state --> Refused: provider refuses diligence

```

<br/>

> Each time the status of a due diligence changes, a callback 4 is sent.

* * *

### Due Diligence sequence diagram : case electronic\_sign

#### Best scenario: due diligences validated

```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO
Partner -->> XPO: POST /api/v3.0/user/{appUserId}/kyc/demand<br/>workflowCode: Electronic_Sign
XPO -->> Partner : HTTP/201
XPO --) Partner : Callback 4 - KYC Demand<br/>status:PENDING <br/> expectedDiligences{type,possibleDiligenceSubTypes}
XPO --) Partner : Callback 48 - Web View URL
XPO --) Partner : Callback 35 - SCA Wallet Initialization
Partner -->> User : Display WebViewURL
User -->> XPO : Identity document
User -->> XPO : Liveness
XPO --) Partner : Callback 4 - KYC Demand<br/>status:Incomplete <br/>receivedDiligences{diligenceType, status:To_Review_Manually}
break Controls (5mins)
    XPO --> XPO: Controls (5mins) 
end
XPO --) Partner : Callback 4 - KYC Demand<br/>status:Incomplete <br/>receivedDiligences[{diligenceType Identity, status:Validated}],<br/>expectedDiligences [{diligenceType Complementary: ESIGN}]

Partner -->> User : Display WebViewURL for CGU signature
XPO -->> User : SMS sent for strong authentification
User -->> XPO : CGU signature
XPO --) Partner : Callback 4 - KYC Demand<br/>status:Complete
```

<br/>
<br/>

>**Note**  
>The strong authentification code expires after 10 minutes. A second SMS is sent after the first expires.

*  * *
### Due Diligence sequence diagram : case identity

Two important pieces of information about workflow:

- the identity document can be sent either via the webview or the API
- the cgu must be signed by API

#### Best scenario: due diligences validated

```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO
Partner -->> XPO: POST /api/v3.0/user/{appUserId}/kyc/demand<br/>workflowCode: Identity
XPO -->> Partner : HTTP/201
XPO --) Partner : Callback 4 - KYC Demand<br/>status:PENDING <br/> expectedDiligences{type,possibleDiligenceSubTypes}
XPO --) Partner : Callback 48 - Web View URL
XPO --) Partner : Callback 35 - SCA Wallet Initialization
par
	alt Webview
		Partner -->> User : Display WebViewURL
		User -->> XPO : Identity document
	else API
		User -->> XPO : POST /api/v2.0/users/{appUserId}/kyc/attachments
	end
	XPO --) Partner : Callback 4 - KYC Demand<br/>status:Incomplete <br/>receivedDiligences{diligenceType, status:To_Review_Manually}
	break Controls (5mins)
		XPO --> XPO: Controls (5mins) 
	end
	XPO --) Partner : Callback 34 - KYC Demand<br/>status:Incomplete <br/>receivedDiligences[{diligenceType Identity, status:Validated}],<br/>expectedDiligences [{diligenceType Complementary}]
	Partner -->> User: display IBAN & RIB
	User -->> XPO: Sepa Credit Transfer
	XPO --) Partner : Callback 31 - KYC complementary diligence
	XPO --) Partner : Callback 4 - KYC Demand<br/>status:Complete 
and
	Partner --) Partner : SCA Wallet Initialization <br/> -with Entrust
end
Note over User, Partner: Note: for the identity workflow, <br/> the CGU validation has to be done by <br/> API to validate the userRecordStatus
Partner -->> User : Display CGU
User -->> Partner : Validate CGU
Partner -->> XPO: POST /api/sca/v2.0/users/{AppUserId}/cgu
XPO --) Partner : Callback 34 - userRecordStatus: Validated

```

* * *

### Due Diligence SCT IN
The minimum and maximum amount of the Sepa Credit Transfer (as a diligence) is set when the environment is created.
Usally, the minimum amout is 1€ and the maximum amount 1000€.

In order to be accepted, the issuer of the SCT must be the same person as the account holder.
To achieve this, the account from which the transfer is made must be in the customer's first and last name. 
Depending on the degree of consistency between the two names, the stagecoach may be validated, manually reviewed by an operator or rejected.

This due diligence process takes much longer, with the SCT taking around 2 working days to be transmitted from the issuing bank to Xpollens.


```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO

	Partner -->> User: display IBAN & RIB
	User -->> XPO: Sepa Credit Transfer
	XPO --) Partner : Callback 31 - KYC complementary diligence {status: Validated}

```

* * *

### Due Diligence sequence diagram : refused

#### Due diligence ID refused : issue during the identity document checks

```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO
break Identity controls (5mins)
    XPO --> XPO: Identity controls (5mins) 
end
XPO --) Partner : Callback 4 - KYC Demand<br/>status:Incomplete <br/>receivedDiligences[{reason, diligenceType Identity, status:Refused}]

alt Electronic_sign
    XPO --) Partner : Callback 48 - Web View URL
    Note over User, Partner: new attempt with <br/>the same WebViewURL
    Partner -->> User : Display WebViewURL
    User -->> XPO : Identity document
    
else Identity
    alt Webview
        User -->> XPO : Identity document
    else API
        User -->> XPO : POST /api/v2.0/users/{appUserId}/kyc/attachments
    end
end


```

<br/><br/>

> The `WebViewUrl` remains the same for the next attempt(s).

<br/>

| **KO quality** |
| :--- |
| Poor quality of document |
| Document badly framed |
| Missing document page |
| Expired document |
| Restricted country |
| Document type not allowed |
| Poor quality of biometry |

<br/>

| **Error when providing an identity document via API. (Workflow: Identity)** |
| :--- |
| Document is too large |
| The document is empty |
| The lines of the MRZ (identity documents) are not valid. |
| The document could not be read (corrupted file) |
| Image is too blurry |
| Image is not contrasted enough |
| Image is too small (does not contain enough pixels) |
| The image is too big (contains too many pixels) |
| Processed image is binarised, but the server does not accept them |
| The font of the text in an image is too small to be read. |
| The document received does not match the expected one. |
| The type of document received is not recognized. |
| The image processing system did not respond. |
| No text found in the document |
| Participant's name not found in document |
| The date of the document was not found. |
| The document is too old. |
| The country of issue of the document is not allowed. |
| The document has expired. |
| MRZ lines not found in the identity document |
| The first name of the MRZ does not match the name on the face of the identity document. |
| Document number of the ZRM does not match the number on the face of the identity document |
| The date of birth of the MRZ does not match the date of birth on the face of the identity |
| Document expiry date could not be read (only for identity documents) |
| The same file has already been submitted: same participant and same file or same type of document requested and same data read |
| Expiration date is not consistent with the MRZ |

* * *
#### Due diligence ID refused: inconsistency between the data declared and the data on the identity document

Use the `PUT /api/v2.0/users/{appUserId}` to modify the wrong data.


```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO

loop

break Identity controls (5mins)
    XPO --> XPO: Identity controls (5mins) 
end
XPO --) Partner : Callback 4 - KYC Demand<br/>status:Incomplete <br/>receivedDiligences[{reason, diligenceType Identity, status:Refused}]

Partner -->> User: Checking declared information
User -->> Partner: Forwarding information  
Partner -->> XPO: PUT /api/v2.0/users/{appUserId}
Note over User, XPO: automatic relaunches the check with <br/> the identity document and the selfie

end

XPO --) Partner : Callback 4 - KYC Demand<br/>status:Incomplete <br/>receivedDiligences[{diligenceType Identity, status:Validated}],



```

  
* * *
**Error codes**

| **Inconsistency between the data declared and the information on the identity document** |
| :--- |
| Inconsistent birthDate between ID document and user’s information |
| Inconsistent fullName between ID document and user’s information |
| Inconsistent birthName between ID document and user’s information |
| Inconsistent lastName between ID document and user’s information |
| Inconsistent firstName between ID document and user’s information |
| Data inversion: birthName and lastName |
| Inconsistent civility between ID document and user’s information |
| Data inversion: firstName and lastName |

&nbsp;

  
* * *
#### Due diligence ID refused: diligence type undefined
In some cases, the Netheos robot is unable to recognise the type of identity document sent to it (e.g. the user sends an image containing the front and back of their identity document).
The diligence status changes to "refused", and callback 4 is sent as follows: 

```json
{
    "Payload": {
        "type": "4",
        "status": "Incomplete",
        "appUserId": "68968-1694163949661",
        "kycLevel": "High",
        "workflowCode": "Electronic_Sign",
        "receivedDiligences": [
            {
                "diligenceType": "UNDEFINED",
                "status": "Refused",
                "attachments": [
                    {
                        "FileName": "name1.jpg",
                        "AttachmentKey": "xxx"
                    },
                    {
                        "FileName": "name2.jpg",
                        "AttachmentKey": "yyy"
                    }
                ]
            },
            {
                "diligenceType": "SELFIE",
                "status": "Refused",
                "attachments": [
                    {
                        "FileName": "name3.jpg",
                        "AttachmentKey": "zzz"
                    }
                ]
            }
        ],
        "expectedDiligences": [
            {
                "type": "Identity",
                "expectedCount": 1,
                "possibleDiligenceSubTypes": [
                    "ID_CARD",
                    "PASSPORT",
                    "RES_CARD"
                ]
            },
            {
                "type": "Complementary",
                "expectedCount": 1,
                "possibleDiligenceSubTypes": [
                    "SCTIN",
                    "DELEGATED_COMPLEMENTARY_DILIGENCE",
                    "ESIGN"
                ]
            }
        ]
    },
}
```

* * *
#### Due diligence SCT IN refused: inconsistency between the data declared and the data on the identity document

```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO

	Partner -->> User: display IBAN & RIB
	User -->> XPO: Sepa Credit Transfer
	XPO --) Partner : Callback 31 - KYC complementary diligence {status: Refused}
	Partner -->> User: ask for a new SCT IN 
	User -->> XPO: Sepa Credit Transfer
	XPO --) Partner : Callback 31 - KYC complementary diligence {status: Validated}

```

  <br/><br/>

| **Error** |
| :--- |
| The beneficiary's name is different from the transmitter's name |

* * *
### Fraud suspicion

```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO
break Controls (5mins)
    XPO --> XPO: Controls (5mins) 
end
XPO --) Partner : Callback 4 - KYC Demand<br/>status:FraudSuspiscion <br/>receivedDiligences[{reason:"", diligenceType Identity, status:Refused}]

XPO --) Partner : Callback 34<br/>userRecordStatus : Refused
Note over User, XPO: Onboarding refused.<br/> The user can not try again.



```

* * *

### APIs, callbacks & technical items
#### WebView integration

##### Parent Page integration (mandatory)

The Netheos Web Page can be displayed using the `webviewUrl` or `url`?token=`token` URL.
**But** as the partner will have to handle some specific **javascript** event, it is mandatory to implement the following code in the parent page to display the URL :

```html
<iframe id="signbook" scrolling="no" frameBorder="no" width="100%" allow="microphone; camera"></iframe>
<script src="https://integration-api.ekeynox.net/contract/signbook/v3/script/signbook.js"></script>
<script type="text/javascript">
    window.onload = function () {
        var signbook = new NthSignbook({
            iframeSelectorId: 'signbook',
            url: 'https://api.ekeynox.net/contract/signbook/signbook.html',
            options: {
                renderMode: 'pretty'
            },
            token: '20140917_7HJOLUbtlKET2iQwBGtN7QkkzFgg2r'
        });
    }
</script>
```

  <br/>

>**Note** 
>See the full Netheos Documentation here : [https://integration-api.ekeynox.net/docs/integration/latest/integration\_signbook\_v3/](https://integration-api.ekeynox.net/docs/integration/latest/integration_signbook_v3/)

* * *
#### Javascript Events handling

##### Identity check events

When identity check is completed (10 min max), an "identity" type event will be sent to the main page.

> Exemple :

```javascript
event = {
   type: "identity",
   state: "WAITING",
   ok: true
}
```

> This event should be handled as in the exemple below :

```javascsript
window.addEventListener('message', function(evt){
    var msg = JSON.parse(evt.data);
    if (msg && msg.type === 'identity') {
        console.log('message: ',msg);
    }
}, false);
```

* * *
##### Electronic Signature Event handling

The same way, once an electronic signature is performed, a `clientFileEvent` will be sent with `accepted` status.

* * *

#### Upload ID document by API

The `Identity` workflow can also be processed by API.
It will require to send the ID Documents using the `post /api/v2.0/users/{appUserId}/kyc/attachments` API.

>**Note** 
>In this case, it is not neccessary to handle the webview URL provided in callback 48. 

<br/>

>**Note 2** 
>`Ìdentity` workflow requires an addionnal identity verification diligence. The additionnal diligence supported by XPollens in an incoming money transfer originating from an account owned by the user (name, firstname, .. are checked at the receipt of the money transfer by XPollens) 

* * *
#### Callbacks type 4

Each time the status of a due diligence changes, a callback 4 is sent.
This callback is composed of `expectedDiligences` and `receivedDiligences`, so you can see the progress of the items sent.

* * *
##### KYC Status Pending, no due diligence sent

> Body parameter

```json
        "type": "4",
        "status": "Pending",
        "appUserId": "appUserId-1",
        "kycLevel": "High",
        "workflowCode": "Electronic_Sign",
        "expectedDiligences": [
            {
                "type": "Identity",
                "expectedCount": 1,
                "possibleDiligenceSubTypes": [
                    "ID_CARD",
                    "PASSPORT",
                    "RES_CARD"
                ]
            },
            {
                "type": "Complementary",
                "expectedCount": 1,
                "possibleDiligenceSubTypes": [
                    "SCTIN",
                    "DELEGATED_COMPLEMENTARY_DILIGENCE",
                    "ESIGN"
                ]
            }
        ]
```

<br/>

>**Note** 
>`possibleDiligenceSubTypes` as `expectedDiligences` depend on the environment parameterization. 

* * *
##### KYC Status "Incomplete", the identity document and the selfie have been sent

> Body parameter

```json
        "type": "4",
        "status": "Incomplete",
        "appUserId": "appUserId-1",
        "kycLevel": "High",
        "workflowCode": "Electronic_Sign",
        "receivedDiligences": [
            {
                "diligenceType": "ID_CARD",
                "status": "To_Review_Manually",
                "attachments": [
                    {
                        "FileName": "ID_CARD_FRONTSIDE",
                        "AttachmentKey": "d84c3525-d037-4e81-8b95-668c4de2340f"
                    },
                    {
                        "FileName": "ID_CARD_BACKSIDE",
                        "AttachmentKey": "96306caa-cc48-4aa4-8403-6055d92b629f"
                    },
                ]
            },
            {
                "diligenceType": "SELFIE",
                "status": "To_Review_Manually",
                "attachments": [
                    {
                        "FileName": "SELFIE_1",
                        "AttachmentKey": "dc840307-de7d-419b-b05d-222bda4ec0d4"
                    },
                ]
            }
        ],
                "expectedDiligences": [
            {
                "type": "Complementary",
                "expectedCount": 1,
                "possibleDiligenceSubTypes": [
                    "SCTIN",
                    "DELEGATED_COMPLEMENTARY_DILIGENCE",
                    "ESIGN"
                ]
            }
        ]
    },

```

* * *
##### KYC Status "Complete", all due diligences are validated

When all due diligence has been completed, the KYC status changes to "Completed".

```json
"Payload": {
        "type": "4",
        "status": "Complete",
        "appUserId": "appUserId-1",
        "diligences": [
            {
                "reason": "",
                "diligenceType": "ID_CARD",
                "status": "Validated"
            },
            {
                "reason": null,
                "diligenceType": "SELFIE",
                "status": "Validated"
            },
            {
                "reason": null,
                "diligenceType": "ESIGN",
                "status": "Validated"
            }
        ]
    },
```

* * *
##### KYC Status "Refused"

The identity document status and the selfie status are not always the same.
The identity document is checked in several stages:

- the data on the post kyc/demand and the card are automatically checked. If an error occurs here, the status of the ID document is changed to refused, regardless of the selfie.
- automatically, checks are carried out on the quality of the document, the legibility of the photo, etc.
- manually, an operator completes the check.
    If a refusal occurs during these last two phases, the status of the stagecoach will be identical.

Each time a diligence is refused, a `reason` is added to the callback.

```json
  "Payload": {
        "type": "4",
        "status": "Incomplete",
        "appUserId": "appUserId-1",
        "kycLevel": "High",
        "workflowCode": "Electronic_Sign",
        "receivedDiligences": [
            {
                "reason": "",
                "diligenceType": "ID_CARD",
                "status": "Refused",
                "attachments": [
                    {
                        "FileName": "ID_CARD_FRONTSIDE",
                        "AttachmentKey": "d84c3525-d037-4e81-8b95-668c4de2340f"
                    },
                    {
                        "FileName": "ID_CARD_BACKSIDE",
                        "AttachmentKey": "96306caa-cc48-4aa4-8403-6055d92b629f"
                    },
                ]
            },
            {
                "diligenceType": "SELFIE",
                "status": "Validated",
                "attachments": [
                    {
                        "FileName": "SELFIE_1",
                        "AttachmentKey": "dc840307-de7d-419b-b05d-222bda4ec0d4"
                    }
                ]
            }
        ],
      "expectedDiligences": [
            {
                "type": "Identity",
                "expectedCount": 1,
                "possibleDiligenceSubTypes": [
                    "ID_CARD",
                    "PASSPORT",
                    "RES_CARD"
                ]
            },
            {
                "type": "Complementary",
                "expectedCount": 1,
                "possibleDiligenceSubTypes": [
                    "ESIGN"
                ]
            }
        ]
    },

```

* * *

#### Callback 48 - WebView URL

The new [callback 48](https://docs.xpollens.com/api/callbacks#post-/-callback48Url-) will contain required information to display the KYC Web View URL to the user.
The format of the new callback is the following :

`POST /{callback48Url}`


> **Remark**
> 
> 1.  The `webviewUrl` is the concatenation of the `url` value and `token` value with the following format: `url`?token= `token`
> 2.  The `WebViewUrl` contained if the callback #35 is deprecated.

* * *

## FAQ
### FAQ1: Is the webview display customisable?

R: Partially: [https://integration-api.ekeynox.net/docs/integration/latest/integration\_signbook\_v3/#parametrage-de-lapparence-du-facematch-video](https://integration-api.ekeynox.net/docs/integration/latest/integration_signbook_v3/#parametrage-de-lapparence-du-facematch-video)

* * *
### FAQ2: Do I have to send the second and third first names?
R: Yes, separated by spaces.

* * *
### FAQ3: Are all telephone numbers accepted? 
R: Yes, provided that the operator is not blacklisted.

* * *
### FAQ4: when can I display my customer's iban?
R: The iban should only be displayed:
- as part of the Eletronic-sign workflow, the user is validated (userRecordStatus validated).
- as part of the Identity workflow, the identity check part is validated.

* * *

## How to test

This annexe describes available mocks on **test environment** for test and integrate the KYC functionnality.
Each mocked test case is based on the provided email adress for the user :

`Radical.email+alias_code+autre_alias@email.fr`

> Alias allows the partner to simulate one or more behaviour.
> Alias ordering is not relevant
> At the minimum, the alias for the live check must be present.

### Available mocks

| Alias | Decription |
| --- | --- |
| LC\_ACCEPTED | Accepted Live Check |
| LC\_FRAUD | Rejected Live Check / Reason code "Fraud Suspicion" |
| LC\_EXPIRED | Rejected Live Check / Reason code "Other reason" |
| LC\_DOC\_EXPIRED | Rejected Live Check / Reason Code : "Expired Document" |
| LC\_DOC\_QUALITY | Rejected Live Check / Reason Code : "Document Quality is insufficient" |
| LC\_BIO\_QUALITY | Rejected Live Check / Reason Code : "Liveness Quality is insufficient" |
| LC\_DOC\_RECEIPT | Rejected Live Check / Reason Code : "Présence du récépissé seul" |
| LC\_DOC\_MISSING | Rejected Live Check / Reason Code : "Recto or Verso of id document is missing" |
| LC\_DOC\_FRAMED | Rejected Live Check / Reason Code : "Truncated Document" |
| LC\_DOC\_UNSUPPORTED | Rejected Live Check / Reason Code : "Not supported Document" |
| LC\_DOC\_UNAUTHORIZED | Rejected Live Check / Reason Code : "Document country not supported" |
| LC\_OTHER | Rejected Live Check / Reason Code : "Other reason" |