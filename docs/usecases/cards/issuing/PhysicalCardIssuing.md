# Physical card issuance
This document applies for **Physical Card Order **.

* * *
## Prerequisites
The prerequisites to call this endpoint are:

- Client Authentication.
- Offer partner code.
- Cardholder existence.
- Account existence.

<br/>

* * *
## Diagram & status for a physical card

### States diagram for a physical cardOrder
```mermaid
stateDiagram
state fork_state <<fork>>

[*] --> Pending
Pending --> Published : Order sent to the manufacturer
Pending --> Canceled : Order canceled
Published --> fork_state
fork_state --> Shipped : Order sent to the enduser
fork_state --> Rejected: Order failed <br/> ReconciliationWhispin-Card failed 

Shipped --> [*]
Rejected --> [*]
Canceled --> [*]

```

<br/>

* * *

### States diagram for physical cards
```mermaid
stateDiagram
state fork_state <<fork>>
state fork_state2 <<fork>>

  [*] --> Ordered_(deprecated)
  Ordered_(deprecated) --> fork_state
  fork_state --> Cancelled
  fork_state --> Sent: mailed by the manufacturer

  
  Sent --> fork_state2
  Sent --> Activated

  Activated --> fork_state2
  fork_state2 --> Cancelled
  fork_state2 --> Opposed
  fork_state2 --> Expired
  fork_state2 --> Deactivated

  fork_state --> Failed_(deprecated) : pin not matched

  Expired --> [*]
	Cancelled --> [*]
	Opposed --> [*]
	Failed_(deprecated) --> [*]
	Deactivated --> [*]
```
<br/>

> Deactivated for remanufacturing

<br/>

* * *

### Objectf Order vs. object Card

Two objects exist when ordering a card:

- The `Order` object tracks the card order from placement to shipment.
- Once the card has been produced, the `Card` object appears and takes over, managing the card throughout its lifecycle.

As a result, use the `Order` object from order placement to shipment, and the `Card` object thereafter.

<br/>
<br/>

* * *

## Order a physical card with individual delivery

### Order a physical card: sequence diagram for production and unmocked environment
**Physical card order process (Ramdom PIN)**

```mermaid
sequenceDiagram
Title: Physical card order process (Ramdom PIN)
autoNumber
Participant Partner
Participant XPO
Participant BPCE

Partner ->> XPO : Order a physical card (POST /api/v3.0/cards/physical)
XPO --) XPO : Create the card order
XPO ->> Partner :return OK (201)
XPO -->> Partner : Send CardOrderCreatedOrUpdated (status:Pending)

XPO --) BPCE : Generate the file all days at 6:30 Pm (paris time)
XPO -->> Partner : Send CardOrderCreatedOrUpdated (status:Published)

alt BPCE Processing is KO
%%note over BPCE: BPCE Processing is KO
	rect rgb(255, 0, 0, 0.1)
		BPCE --) BPCE : If order Processing KO
		BPCE -->> XPO : Send reject file
		XPO --) XPO : Integrate, process the reject file. <br/> And change status
		XPO -->> Partner : Send CardOrderCreatedOrUpdated (status:Rejected)
	end
	
else BPCE Processing is OK
	rect rgb(0, 255, 0, 0.1)
		BPCE --) BPCE :  If order Processing OK 
		BPCE -->> XPO : Send return file
		XPO --) XPO : Integrate, process the return file. <br/> And change status (Status: Shipped)
		XPO -->> Partner : Send CardOrderCreatedOrUpdated (status:Shipped)
		XPO -->> Partner : Send CardCreatedOrUpdated (status:Sent)
	end
end
```

<br/>

* * *
**Physical card order process ( Wishpin )**

```mermaid
sequenceDiagram
Title: Physical card order process ( Wishpin )
autoNumber
Participant Partner
Participant XPO
Participant Thales
Participant BPCE

Partner ->> XPO : Order a physical card <br/>  (POST /api/v3.0/cards)
XPO ->> Partner :return OK (201) {cardId}
XPO -->> Partner : Send CardOrderCreatedOrUpdated ( status:Pending)

par Whispin choice

alt Wishpin

	Partner ->> XPO : GET /api/v2.0/tokensignature/{cardExternalRef} <br/> where cardExternalRef = cardId
	XPO -->> Partner: tokensignature outputs <br/> (see section Get the tokensignature)
	Partner -->> Partner: create token,  where token inputs  = tokensignature outputs  <br/> (see section tokensignature and token mapping) <br/><br/> create signature  <br/> (see section Token and Signature CB compliant) <br/>
	Partner -->> Thales : definePINToken {token, signature} 
	Thales -->> BPCE : Acknowledgement of receipt of the wishpin
	BPCE --) BPCE : Waiting for the matching between card order and whispin <br/> if matching isn't validated within 4 days , <br/>the creation is failed.
	end
	
	and Card order

	XPO ->> BPCE : Generate the file all days at 6:30 Pm ( paris time)
	XPO -->> Partner : Send CardOrderCreatedOrUpdated ( status:Published)

end

alt BPCE Processing is KO
%%note over BPCE: BPCE Processing is KO
	rect rgb(255, 0, 0, 0.1)
		BPCE --) BPCE : If order Processing KO
		BPCE -->> XPO : Send reject file
		XPO --) XPO : Integrate, process the reject file. <br/> And change status
		XPO -->> Partner : Send CardOrderCreatedOrUpdated (status:Rejected)
	end
	
else BPCE Processing is OK
	rect rgb(0, 255, 0, 0.1)
		BPCE --) BPCE :  If order Processing OK 
		BPCE -->> XPO : Send return file
		XPO --) XPO : Integrate, process the return file. <br/> And change status (Status: Shipped)
		XPO -->> Partner : Send CardOrderCreatedOrUpdated (status:Shipped)
		XPO -->> Partner : Send CardCreatedOrUpdated (status:Sent)
	end
end
```
<br/>

> ⚠ If you are using the wishpin, you have 4 days to send the pin associated to your card.<br/>
> Otherwise, the card order will fail at BPCE PS. The webhook `CardOrderCreatedOrUpdated` is received, status "failed"

<br/>



* * *

### Order a physical card: sequence diagram for **mocked** environment
In mocked environment, card oredering is mocked. As a consequence:

- the card is immediately created, and you receive immediately the webhook `CardOrderCreatedOrUpdated` with the status Shipped.
- the card is immediately created, and you receive immediately the webhook `CardCreatedOrUpdated` with the status Sent.

* * *
**Physical card order process (Applies to Random PIN and Wish PIN)**
```mermaid
sequenceDiagram
Title: Physical card order process (Applies to Random PIN and WishPIN)
autoNumber
Participant Partner
Participant XPO
Participant BPCE

Partner ->> XPO : Order a physical card (POST /api/v3.0/cards/physical )
XPO ->> Partner :return OK (201)
XPO -->> Partner : CardOrderCreatedOrUpdated ( status: Shipped)
XPO -->> Partner : CardCreatedOrUpdated ( status: Sent)
```

<br/>

* * *
### Delivery address
You can have your card delivered to an address different from your residential one.

That's why the POST /api/v3.0/cards/physical API includes the `deliveryAddress` field.

If the end user prefers to receive their card at their residential address, they should provide their residential details in this field.

<br/>

* * *
### Cancel a card
Card creation can only be canceled before 6:00 PM on the day of ordering.

After this deadline, the card will still be canceled, but it will be manufactured and shipped to the end user, arriving in a canceled state.

<br/> 

* * *
## Deliver cards to a delivery point
*This method is only available for physcial cards with random pin.*

Cards can be shipped in bulk and delivered to a designated delivery point.


```mermaid
sequenceDiagram
Title: Physical card order process (Applies to Random PIN and WishPIN)
autoNumber
Actor Enduser
Participant Partner
Participant XPO
Participant BPCE

Note over Partner, BPCE: Delivery point creation
XPO -->> XPO: delivery point creation
XPO -->> Partner: DeliveryPointCreatedOrUpdated {deliveryPointId}
Partner -->> XPO: GET /api/v3.0/delivery-points

Note over Enduser, XPO: Collect cards on the delivery point
loop card creation by endusers
	Enduser -->> Partner: card creation
	Partner -->> XPO: POST /api/v3.0/cards/physical {deliveryPointId: X}
	XPO -->> Partner: CardOrderCreatedOrUpdated {status: Pending, cardOrderId}
end

Note over Enduser, BPCE: Sent orders to the manufacturer
Partner -->> XPO: GET /api/v3.0/card-orders/{cardOrderId}
Partner -->> XPO: POST /api/v3.0/card-orders/publish {deliveryPointId}{deliveryPointId}
XPO -->> BPCE: 6:30 PM Sent orders

loop For each card order
	XPO -->> Partner: CardOrderCreatedOrUpdated {status: Published}
end

Note over Enduser, BPCE: Card shipment
loop For each card order and card created
	XPO -->> Partner: CardOrderCreatedOrUpdated {status: Shipped}
	XPO -->> Partner: CardCreatedOrUpdated {status: Sent}

end


```

The card and its order are linked by the attribute `cardid`.
All cards created on the same delivery are visible through the `cardOrderId`.

:::note
If a new delivery point needs to be created, request it via a Zendesk ticket.
:::


<br/>

* * *
## Multiple holding of physical cards
The multiple holding of physical cards is prohibited: it is not possible to order more than one physical card for the same bank account.

Any new card request will be automatically declined if a card already exists on the account with one of the following statuses: "ordered," "sent," or "activated."

From a technical standpoint, the API will return a 400 error with the following message: "Card can't be ordered because an active card is already attached to this account."

Note: This restriction does not apply to virtual cards.

<br/> <br/>

* * *

## Wishpin process
### Description
The WishPIN Xpollens solution complies with the new BPCE security standards.

Solution relies on 

* the `tokensignature` API [see here](https://docs.xpollens.com/api/CardSecure#get-/api/v2.0/tokensignature/-cardExternalRef-)
* an **SDK** provided by Thales

Ask your Customer Integration Manager to provide the SDK and its documentation.



<br/>

Functional principle is as follows : 

* To define his/her PIN, the user first create its card by specifying wishPIN is needed (`haswishpin:true`).  
* The card’s creation returns a card reference (cardExternalRef or AppCardId). 
* This reference should be passed to the signature service and finally to the WishPIN SDK along with the signature.
* The defined PIN is then sent in real time to Thales through the SDK and then sent from Thales to BPCE/PS.
* Card order and WishPIN are then reconciled then the card is sent for customization.

<br/>

**SDK**<br/>
The PIN code entered by the end user in the partner mobile application is sent in real time to the Thales PIN definition platform. PIN codes are stored cyphered on the platform then sent by batch on a daily basis to BPCE to reconciliate Cards and PIN <br/>

> **4 days max after which the WISHPIN request is rejected the reconciliation is not possible**

<br/>

**API Signature**<br/>
Partner authentication toward PIN processor will be done against a BPCEPS/HSM token and then sent with the corresponding signature by the SDK.

<br/>

* * *
### Order the card with wishpin
The first step required to set up a card with user-selected PIN is to order the card, specifying the use of the wishPIN in the API call.

> Example
> `POST /api/v3.0/cards.physical`
> ```json
> {
>  "cardId": "{{cardExternalRef}}",
>  "cardholderId": "{{appUserId}}",
>  "accountId": "{{accountId}}",
>  "offerPartnerCode": "{{cardOffer}}",
>  "hasWishpin": true,
>  "isNfcDisabled": false,
>  "visualCode": "{{cardVisual}}"
> }
> ```


* * *
### Get the `tokensignature`
Once the card order has been performed, it is mandatory to retrieve some secure card token information that will be shared with Thales through the provided SDK so that it can handle the PIN request.

For this, the `GET api/v2.0/tokensignature/{{cardExternalRef}}` has to be called by the partner.

> Example
> `GET api/v2.0/tokensignature/{{cardExternalRef}}`
>
> **Response**
> ```json
> {
>   "certificate_alias": "natixis.dev",
>   "token_signature": "{{tokensignature}}",
>    "card_unique_id": "1652800161toJDcN2SIkChUg1yc9ZEiQ",
>    "transaction_id": "efe4a0303caf4e868392e8652e929d81",
>    "transaction_timespan": "1702994478"
>}
>```



**Information returned by the `tokensignature` API will have be passed to the Thales SDK.**

<br/>

* * *
### Thales SDK
Chapter 5.6.1 and 6.4 of the SDK documentation describes the format of the expected fields used to build the input JSON `token` to the `definePINToken` method of the SDK.

<br/><br/>

**⬛ `definePINToken` method (§5.6.1)**


| Name | Type | Description | 
| ---- | ---- | ----------- |
| context | Context | The Android application context |
|hostURL | String | The back-end URL from Digital PIN solution provided by the project manager|
|token | String | The token is a message in JSON format containing information relative to the bank and cardholder.<br/>Token in JSON format as described in the section:<br/>§6.4 Token and Signature |
|signature | String | The signature computed over the token for verification.<br/>Generation is explained in the following section of the document:<br/>§6.4 Token and Signature | 
| pinValue | String |PIN in clear format (e.g. 1234)|

<br/>

> **Note**<br/>
> `HostURL` for test/sandbox environment : https://digitalpindef-app.eservices-lab.gemalto.com/pd/NATIXIS<br/>
> `HostURL` for production environment : https://digitalpindef-app.gemalto.com/pd/NATIXIS/

<br/><br/>

**⬛ `token` format (§6.4)**

**Token Format**<br/>
Token is used in PIN Distribution and PIN Definition schemes to provide information about the cardholder and the request.

The token shall comply with this format:

```json
{
    "IdBEL": "IdBEL",
    "IdFournisseur": "IdFournisseur",
    "IdPorteur": "IdPorteur",
    "IdTransaction": "IdTransaction",
    "SignatureCertAlias": "SignatureCertAlias",
    "Timestamp": "Timestamp",
    "Type": "Type"
}
```

Besides, the token MUST NOT be modified at all after it is signed. Otherwise, the signature verification may fail.
The token shall only be composed with alphanumeric characters: [a-zA-Z0-9].<br/><br/>

**⬛ Token and Signature CB compliant**<br/>
The token must be formatted as a JSON message and needs to contain the following information:

- `IdBEL`: Customer unique Identifier.
- `IdFournisseur`: Unique identifier of the service provider used during authentication.
- `IdPorteur`: Unique ID (uid) of the cardholder retrieving his PIN. Same unique id used during provisioning step.
- `IdTransaction`: Unique identifier of the transaction. All request following will be rejected if they use the same idTransaction.
- `Timestamp`: Timestamp in UNIX format (unit second) generated for each transaction.
- `Type`: Transaction type: Only 02 is used and supported in Xpollens context for PIN definition
- `SignatureCertAlias`: alias of the certificate used to sign the token – Optional –

* * *
#### `tokensignature` and `token` mapping
The information retrieved from the `tokensignature` API have to be mapped to the expected JSON `token` used in `definePINToken` SDK method.

The mapping table is as follow :

| `tokensignature` | `definePINToken` parameter | Example Value | Description |
|:----------------:|:--------------------------:|:-----:|:------------|
| N/A              | `IdBEL`                    | 30007 |Customer unique Identifier (XPollens/Fixed Value) |
| N/A              | `IdFournisseur`            | TH    | THALES SUPPLIER ID |
| `card_unique_id` | `IdPorteur`                | 1652800161toJDcN2SIkChUg1yc9ZEiQ | XPollens Card Id shared with<br/>Thales and BPCE |
| `transaction_id` | `IdTransaction`            | efe4a0303caf4e868392e8652e929d81 | XPollens issued wishPIN transaction id |
| `certificate_alias` | `SignatureCertAlias`    | natixis.dev | alias/identifier of used certificate to cypher the PIN<br/>* natixis.dev for test/sandbox environment<br/>* certificat.thales.api.pin.2022 for production environment |
| `transaction_timespan` | `Timestamp`          | 1702994478 | XPollens issued WishPIN request timestamp |
| N/A              | `Type`                    | 02 | Constant : 02 for PIN definition |

* * *
#### Calling the `definePINToken` SDK method
Once the `token` is built from the information returned by `tokensignature` API. The `definePINToken` has to be called in the partner application.

> **Note**
> The `definePINToken` call shall not be initiated from the main UI thread but from its own thread.

<br/>

> Example : Android simple implementation
> ```java
> button.setOnClickListener {
>  val hostUrl: String = "https://digitalpindef-app.eservices-lab.gemalto.com/pd/NATIXIS/"
>  var token: String =  "\"IdBEL\":\"30007\",\"IdPorteur\":\"\${idPorteur.toString()}\",\"IdFournisseur\":\"TH\",\"IdTransaction\":\"\${idTrans.toString()}\",\"Timestamp\":\"\${timestamp.toString()}\",\"Type\":\"02\",\"SignatureCertAlias\":\"natixis.dev\"}"
>  var signature: String = "\${signature.toString()}"
>  val pinValue: String = "\${pin.toString()}"
>  val executionResponse = definePINToken(applicationContext,hostUrl, token, signature, pinValue)
>  var result = false
>  if (executionResponse.errorCode == "0") {
>  // The PIN was set properly for the given cardholder
>  result = true
>  } else {
>  // An issue occurred, handle the error code
>  Log.d("\[CCSDK\]", "\[DefinePin\]Response: " + executionResponse);
>  result = false
>  }        
>}
> ```

<br/><br/>

* * *

## Configuration when creating the environment
### Random pin or wishpin?
Random pin: the pin is chosen at random when the card is created.
Wishpin: the enduser can choose its own pin. The enduser has 4 days to do so, otherwise the card creation fails.

If the configuration is 'Random Pin', then you have no choice but to go random pin.
If the configuration is 'Wishpin', then you have the choice of the pin type when using the endpoint.

### Card validity period
The card's validity period is fixed and is set when the environment is created. This information is shared with BPCE PS.

### Card offers and visual codes
```json
{
  "cardId": "my_card_reference",
  "cardholderId": "145644-060820-USER-8550478",
  "accountId": "145644-060820-ACCOUNT-8550478",
  "offerPartnerCode": "DemoClassicPhysicalDebitVISA",
  "hasWishpin": true,
  "isNfcDisabled": false,
  "visualCode": "NOCP"
}
```
<br/>

The card offer allows you to find out the type of card you want (classic, premier, etc.) and its characteristics.
This information is an input for card creation.

For each offer, you can have several visuals. All these visuals are validated with BPCE PS and VISA and then configured at Xpollens.
* * *
### Pan ranges
They are chosen by Xpollens and validated with BPCE PS.

<br/>
<br/>

* * *
## API, Callback & technical items
### Card order 
POST /api/v3.0/cards/physical

### Callbacks
CardOrderCreatedOrUpdated
CardCreatedOrUpdated

### SDK Thales

| SDK & Documentation   |
| -- |
| Ask your Customer Integration Manager to get SDKs and documentation |


* * *
## FAQ
### Why isn't the order protected by an SCA?
Placing an order is not a sensitive operation; therefore, the endpoint does not include /sca/.
However, card activation is a sensitive operation. Whether the activation is done physically or virtually, strong authentication is required—using the PIN in the first case and a secret code for online activation.
