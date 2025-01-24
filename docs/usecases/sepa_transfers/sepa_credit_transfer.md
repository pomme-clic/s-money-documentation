# Sepa Credit Transfer (SCT)

SCT transfer is used to send money to a beneficiary defined by an IBAN. You can also define recurring SCT, plan them or ask for its refund.

  
<br/>

* * *

## SEPA zone

The SEPA region consists of 36 European countries, including several countries which are not part of the euro area or the European Union. Also are included all French overseas areas. More information here : https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html

<br/>

* * *

## Create a beneficiary

This endpoint is used to create and associate an external beneficiary account in order to perfom a Sepa Out operation. The BIC and IBAN should be used to create the beneficiary.

```mermaid
sequenceDiagram
Title: Create a beneficiary
autoNumber
Actor User
Participant Partner
Participant XPO
User ->> Partner : Add bank account
Partner ->> XPO : POST /api/sca/v2.0/users/{appUserId}/beneficiary
XPO ->> Partner : http 201 {beneficiaryId}
XPO -->> User: Strong authentication (SCA)
User -->> XPO: SCA validated
XPO -->> Partner : callback 36

Partner -->> User : Notification


```

:::note 
No callback is sent when the beneficiary is created.
:::

API : https://docs.xpollens.com/api/TransferBeneficiary#post-/api/v2.0/users/-appUserId-/beneficiary

  
  <br/><br/>

* * *

## Initiate an SCT OUT

### States diagram

```mermaid
stateDiagram

[*] --> Created : Internal status after first checks <br/> on the SEPA microsverice
Created --> Approved : http 200 <br/> status{Approved}<br/>[synchrone]
[*] --> Rejected: http 400 <br/> status{Rejected}<br/>[synchrone]
Created --> Rejected: http 400 <br/> Refused by the Payment Decision System<br/>[synchrone]  
Approved --> Rejected : Failed or rejected <br/> by the SEPA interbank area <br/> [Callback]
Approved --> Completed : Acknowledgment of issuance <br/> by the interbank system <br/> [Callback]


Approved --> Canceled : Technical error  <br/> Expired after 4 days <br/> [Callback]
[*] --> Canceled: Internal error during the creation <br/> [Callback]


Rejected --> [*]
Completed --> [*]
Canceled --> [*]



```

  

* * *

### Status & balance

<ins>Approved</ins> : Only the authorization balance is debited,  
<ins>Completed</ins> : Both accounting balance and authorisation balance are debited  
<ins>Rejected</ins> : Funds are on the account  
<ins>Canceled</ins> : Funds are on the account

  

* * *

### SCT OUT succeeded

```mermaid
sequenceDiagram

Title: Initiate an SCT OUT
autoNumber
Actor User
Participant Partner
Participant XPO
Participant SEPA interbank area 
User ->> Partner : Initiate an SCT OUT
Partner ->> XPO : POST /api/v2.0/sepa-credit-transfers{beneficaryId}
XPO ->> XPO : Check account existence
XPO ->> XPO : Check beneficiary existence
XPO ->> XPO : Check limits

Note over Partner, XPO: From this step, the transaction is 'Created'.

XPO ->> XPO : Check Payment Decision System

rect rgb(0, 255, 0, 0.1)
XPO ->> Partner : return OK http 201 (status:APPROVED)
XPO -->> Partner : Callback SepaCreditTransferCreatedOrUpdated {status:APPROVED, direction:debit}
end

Partner -->> User : Notification


XPO -->> SEPA interbank area  : Transaction sent to the SEPA interbank area
SEPA interbank area  --) XPO : Transaction validated

rect rgb(0, 255, 0, 0.1)
XPO -->> Partner :Callback SepaCreditTransferCreatedOrUpdated {status:Completed, direction:debit}
end

Partner -->> User : Notification




```

[`POST /api/v2.0/sepa-credit-transfers`](https://docs.xpollens.com/api/TransferSCT#post-/api/v2.0/sepa-credit-transfers)

[`Callback "SepaCreditTransferCreatedOrUpdated"`](https://docs.xpollens.com/api/Callbacks#post-/-SepaCreditTransferCreatedOrUpdated-)

  

* * *

### SCT OUT Rejected
#### SCT OUT Rejected during the controls performed by the SEPA microservice
```mermaid
sequenceDiagram

Title: Initiate an SCT OUT
autoNumber
Actor User
Participant Partner
Participant XPO
Participant SEPA interbank area 
User ->> Partner : Initiate an SCT OUT
Partner ->> XPO : POST /api/v2.0/sepa-credit-transfers
XPO ->> XPO : Check account existence
XPO ->> XPO : Check beneficiary existence
XPO ->> XPO : Check limits

alt when account or Beneficiary does not exist 
    rect rgb(250, 195, 197)
    XPO ->> Partner : return httpStatusCode 40X BadRequest
    end
end

alt when limits reached
    rect rgb(250, 195, 197)
    XPO ->> Partner : return httpStatusCode 40X BadRequest
    end
end

```


#### SCT OUT Rejected during the controls performed by the Payment Decision System 
```mermaid
sequenceDiagram

Title: Initiate an SCT OUT
autoNumber
Actor User
Participant Partner
Participant XPO
Participant SEPA interbank area 
User ->> Partner : Initiate an SCT OUT
Partner ->> XPO : POST /api/v2.0/sepa-credit-transfers
XPO ->> XPO : Check account existence
XPO ->> XPO : Check beneficiary existence
XPO ->> XPO : Check limits


Note over Partner, XPO: From this step, the transaction is created.

XPO ->>  XPO : Check Payment Decision System (PDS)

alt when Autorisation KO - Payment Decision System
    rect rgb(250, 195, 197)
    XPO ->> Partner : return httpStatusCode 400 - status "REJECTED"
    end

XPO -->> Partner :Callback SepaCreditTransferCreatedOrUpdated {status:Rejected, direction:debit}

Partner -->> User : Notification
end

```

#### SCT OUT Rejected by the external bank
```mermaid
sequenceDiagram

Title: Initiate an SCT OUT
autoNumber
Actor User
Participant Partner
Participant XPO
Participant SEPA interbank area 
User ->> Partner : Initiate an SCT OUT
Partner ->> XPO : POST /api/v2.0/sepa-credit-transfers
XPO ->> XPO : Check account existence
XPO ->> XPO : Check beneficiary existence
XPO ->> XPO : Check limits



Note over Partner, XPO: From this step, the transaction is created.

XPO ->>  XPO : Check Payment Decision System (PDS)

rect rgb(0, 255, 0, 0.1)
XPO ->> Partner : return OK http 201 (status:Approved)
XPO -->> Partner : Callback SepaCreditTransferCreatedOrUpdated {status:Approved, direction:debit}
end

Partner -->> User : Notification


alt when PDS checks OK but SCT refused by the SEPA interbank area  
    XPO -->> SEPA interbank area : SCT sent on the SEPA interbank area
    XPO -->> Partner :Callback SepaCreditTransferCreatedOrUpdated {status:Completed, direction:debit}
    
    Note over Partner, SEPA interbank area: As soon as the acknowledgment of issuance is received from the interbank system, the status of the operation is 'Completed'. <br> If the SCT is refused by the external bank, a new SCT is created, named R-transaction.

    
    rect rgb(250, 195, 197)
    SEPA interbank area  -->> XPO: SCT refused
    XPO -->> Partner :Callback SepaCreditTransferCreatedOrUpdated {status:Completed, direction:credit, isRTransaction: true, originOperationId: xxx}
    end
Partner -->> User : Notification
end

```

* * *

#### Error during the POST /api/v2.0/sepa-credit-transfers

| <ins>Status HTTP</ins> | <ins>Error code</ins> | <ins>Reason</ins> | <ins>Definition</ins> | Is the SCT created? |
| --- | --- | --- | --- | --- |
| 400 | 715 | ERR_BENEFECIARY_NOT_FOUND | Beneficiary not found | not created |
| 404 | 147 | ERR_USER_NOTFOUND | User does not existe | not created |
| 400 | 149 | Plafond de transaction atteint | limit reached | not created |
| 500 |     | XPOLLENS INTERNAL ERROR | \*  |  not created   |

* * *

#### SEPA Reject Code, if not R-transaction

In the case the SCT is refused, the attribute `sepaRejectCode` provides some details about the rejection reason.

These reasons are listed in the [documentation](https://docs.xpollens.com/api/TransferSCT#get-/api/v2.0/sepa-credit-transfers/-sepaCreditTransferId-)

  
<br/>

* * *

### SCT OUT Canceled

```mermaid
sequenceDiagram

Title: Initiate an SCT OUT
autoNumber
Actor User
Participant Partner
Participant XPO
Participant SEPA interbank area  
User ->> Partner : Initiate an SCT OUT
Partner ->> XPO : POST /api/v2.0/sepa-credit-transfers
XPO ->> XPO : Check account exitence
XPO ->> XPO : Check beneficiary existence
XPO ->> XPO : Check limits

Note over Partner, XPO: From this step, the transaction is created.

XPO ->>  XPO : Check Payment Decision System (PDS)


alt Error during PDS processing

        rect rgb(250, 195, 197)
        XPO -->> XPO: Error
        XPO -->> Partner :Callback SepaCreditTransferCreatedOrUpdated {status:Canceled, direction:debit}
        end
    Partner -->> User : Notification

else when PDS checks OK but authorisation expires
XPO -->> Partner :Callback SepaCreditTransferCreatedOrUpdated {status:Approved, direction:debit}

    XPO -->> SEPA interbank area : SCT sent on the SEPA interbank area
    rect rgb(250, 195, 197)
        break 4 days
        SEPA interbank area   --) XPO : no acknowledgment of receipt
        end
    XPO -->> XPO: authorisation expires
    XPO -->> Partner :Callback SepaCreditTransferCreatedOrUpdated {status:Canceled, direction:debit}
    end
Partner -->> User : Notification

        

end


```

  
<br/><br/>

* * *

## Receive an SCT IN

### States diagram

```mermaid
stateDiagram
    [*] --> Rejected
    [*] --> Completed
    Rejected --> [*]
    Completed --> [*]


```

* * *

### SCT IN sequence diagram

```mermaid
sequenceDiagram
Title: Receive an SCT IN
autoNumber
Actor External User
Participant External bank
Participant XPO
Participant Partner
Actor Xpollens User

External User ->> External bank : Initiate an SCT OUT
External bank ->> XPO : SEPA interbank area
XPO --) XPO : Does Account Exist
XPO --) XPO : Payment Decision System checks

alt Transaction accepted
rect rgb(0, 255, 0, 0.1)
    XPO --) XPO :Update Operation status "Completed"
    XPO -->> Partner : Callback SepaCreditTransferCreatedOrUpdated  <br/> {direction:credit / status:Completed }
end

else Transaction rejected <br> UnauthorizedAccountStatus/InsufficientFunds/AccountLimitsExceeded/ ...
    rect rgb(250, 195, 197)
        XPO --) XPO :Update Operation status "Rejected"
        XPO -->> Partner : Callback SepaCreditTransferCreatedOrUpdated  <br/> {direction:credit / status:Rejected }
    end
end
Partner --) Xpollens User: Notification


```

[`Callback "SepaCreditTransferCreatedOrUpdated"`](https://docs.xpollens.com/api/Callbacks#post-/-SepaCreditTransferCreatedOrUpdated-)

  
<br/><br/>

* * *

## R-transaction for Sepa Credit Transfer

### Recall SCT OUT

How the partner can do a recall > Zendesk ticket to Xpollens' banking production department

#### Succeeded

```mermaid
sequenceDiagram
Title: Request an Recall SCT OUT
autoNumber
Actor User
Participant Partner
Actor Xpollens/Production Bancaire
Participant XPO
Participant External bank

User --) Partner: Recall request
Partner --) Xpollens/Production Bancaire : Recall request (Zendesk)
Xpollens/Production Bancaire --) XPO : Recall Request 
XPO --) XPO : Check origin operation exist ( Debit )
XPO --) XPO : Check origin operation is successed / Completed
XPO --) XPO : Created recall transaction ( Created / Credit )
XPO --) External bank: Recall
External bank --) XPO : OK
Note over  XPO, External bank: 10 days to answer
XPO -->> Partner : Callback SepaCreditTransferCreatedOrUpdated {status:Completed, isRTransaction:true, direction:credit}
Partner -->> User: Notification




```

- Account credited

#### Failed

```mermaid
sequenceDiagram
Title: Request an Recall SCT OUT
autoNumber
Actor User
Participant Partner
ACTOR Xpollens/Production Bancaire
Participant XPO
Participant External bank
Participant Partner

User --) Partner: Recall request
Partner --) Xpollens/Production Bancaire : Recall request (Zendesk)
 Xpollens/Production Bancaire ->> XPO : Recall Request
XPO --) XPO : Check origin operation exist ( Debit )
XPO --) XPO : Check origin operation is successed / Completed
XPO --) XPO :Created recall transaction ( Created / Credit )
XPO -->> External bank: Recall
External bank -->> XPO : KO
Note over  XPO, External bank: 10 days to answer
XPO -->> Partner : Callback SepaCreditTransferCreatedOrUpdated {status: Rejected, isRTransaction:true}
Partner -->> User: Notification





```

- Account not debited

* * *

### Recall SCT IN

Recall request from an external bank processed by our banking production department

#### Succeeded

```mermaid
sequenceDiagram
Title: Receive an Recall SCT IN
autoNumber
Actor External User
Participant External bank
Actor Xpollens/Production Bancaire
Participant XPO
Participant Partner
Actor Xpollens Enduser

External User -->> Xpollens Enduser: SCT
External User -->> External bank: recall request
External bank -->> Xpollens/Production Bancaire : Recall Approved Request
Xpollens/Production Bancaire -->> Xpollens/Production Bancaire : Reception of Recall
Note over Xpollens/Production Bancaire, XPO: 10 days to answer
Xpollens/Production Bancaire -->> XPO  : Validate Recall

XPO --) XPO : Check origin operation exist ( Credit )
XPO --) XPO : Check origin operation is successed / Completed
XPO --) XPO :Created recall transaction ( Created / Debit )
XPO -->> External bank: OK
XPO -->> Partner : Callback SepaCreditTransferCreatedOrUpdated <br/> {status:Completed, isRTransaction:true, direction:debit}





```

- Account debited


#### Failed

```mermaid
sequenceDiagram
Title: Receive an Recall SCT IN
autoNumber
Actor External User
Participant External bank
Actor Xpollens/Production Bancaire
Participant XPO
Participant Partner
Actor Xpollens Enduser

External User -->> Xpollens Enduser: SCT
External User -->> External bank: recall request
External bank -->> Xpollens/Production Bancaire : Recall Approved Request
Xpollens/Production Bancaire -->> Xpollens/Production Bancaire : Reception of Recall
Note over Xpollens/Production Bancaire, XPO: 10 days to answer
Xpollens/Production Bancaire -->> External bank : Refuse Recall





```

- Account not debited

  
<br/><br/>

* * *

## How to test

### Create a beneficiary

:::warning  Important
Only the ibans of unmocked environment pass the Luhn key checks and can be used.
:::

`POST /api/v2.0/sca/users/{appUserId}/beneficiary`

```json
{
  "displayName": "Compte Xpollens 1",
  "iban": "FR7616528001310000000321058",
  "bic": "SMOEFRP1",
  "firstName": "John",
  "lastName": "Doe",
  "companyName": "Xpollens",
  "zipCode": "75001",
  "email": "john.doe@xpollens.com",
  "phoneNumber": "0123456789"
}

```

**Response**

```json
{
    "id": 1055663,
    "beneficiaryId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "displayName": "Compte Xpollens 1",
    "bic": "SMOEFRP1",
    "iban": "FR7616528001310000000321058",
    "firstName": "John",
    "lastName": "Doe",
    "companyName": "Xpollens",
    "zipCode": "75001",
    "email": "john.doe@xpollens.com",
    "phoneNumber": "0123456789",
    "creationDate": "2024-10-11T08:27:13.16Z",
    "modificationDate": "2024-10-11T08:27:13.16Z"
}

```

**Callback36**

```json
    "Payload": {
        "Header": {
            "AuthenticationId": "53b66cfc-ead2-4f23-910e-3d5b95fd0b1b",
            "Type": 36,
            "AppUserId": "appUserId",
            "AuthenticationResultDate": "2024-10-11T07:58:45+00:00",
            "RequestProcessDate": "2024-10-11T08:27:13.16+00:00",
            "RequestResponseCode": 201,
            "RequestDate": "2024-10-11T07:58:46.621378+00:00",
            "Status": "Succeeded",
            "Reason": null
        },
        "Payload": "{\"id\":1170641,\"beneficiaryId\":\"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\",\"displayName\":\"Compte Xpollens 1\",\"bic\":\"SMOEFRP1\",\"iban\":\"FR7616528001310000000321058\",\"companyName\":\"Xpollens\",\"creationDate\":\"2024-10-11T08:27:13.16Z\",\"modificationDate\":\"2024-10-11T08:27:13.16Z\"}"
    },


```

### Initiate a SCT OUT

`POST /api/v2.0/sepa-credit-transfers`

```json
{
  "sepaCreditTransferId": "partnerOperationId123",
  "accountId": "YourAccountId",
  "creditor": {
    "beneficiaryId": "YourBeneficiaryId"
  },
  "amount": {
    "value": "25.11",
    "currency": "EUR"
  },
  "description": "Sending money with Xpollens",
  "reference": "PartnerInternalReference",
  "expectedExecutionDate": "2024-10-09T13:54:50.5317369+00:00"
}

```

  
<br/>

* * *

### Receive a SCT IN

`POST /v1.1/users/{{appUserId}}/sct/in/registration`

```json
{
  "amountRequest": {
    "value": "20.00", // amount
    "currency": "EUR"
  },
  "executionDate": "2024-07-18T15:06:56.619276+02:00",
  "externalBankAccountModel": {
    "thirdPartyIban": "FR7616528000510000001751068",
    "thirdPartyBIC": "SMOEFRP1",
    "thirdPartyFullName": "John Doe"
  },
  "partnerOperationId": "310a8513-fa13-43cb-bb2b-2f7e49112315_20240719_1",
  "message": "Sending money through SCT",
  "motif": "Sending money with Xpollens"
}
```

  
<br/><br/>

* * *

## FAQ

### FAQ1: What is the SCT description sent to the SEPA interbank area and visible in the external application ?
The attribute named `description` is the one sent to the SEPA interbank area and visible in the external application.

The `reference` attribute, on the other hand, is only visible to you and not shared externally.

In some cases, the external application may not display the description. Unfortunately, this is beyond our control.

### FAQ2: How long does it take to receive an SCT?
SCTs are typically received within 2 working days.

### FAQ3: Is a callback received when a beneficiary is created?
Our application does not have a dedicated callback for beneficiary creations. 
The information is sent through the SCA webhook (36).
