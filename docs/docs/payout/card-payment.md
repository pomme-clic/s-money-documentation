import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'


# Card Payment

The cardholder use his card or his mobile to pay in merchant (shop, online or automate) or to withdraw cash. 
First, in real time, Merchant PSP (Payment Service Provider) and his bank call Xpollens to ask authorization to deliver payment. 
you have an exchange between cardholder and merchant. 
After, in second time, one or more day after, merchant bank proceeds a clearing and send an order of settlement to Xpollens.

<Image src="docs/CardOP_Payment.png" alt="usecase 1"/>

## HUB Transactions

Our HUB receives all banking transactions, processes the corresponding events and returns them according to the type of operation.
In real time, the IAS (Issuer Authorization Server) part manages authorization or adjustment requests that come to us from acquirers and also types of events such as card opposition.
A posteriori, the HUB also receives the settlements resulting from clearing and other types of operations linked to the life cycle of the operation following a cardholder dispute.

---

### Context Authorizations (IAS)

All cards issued are systematic authorization cards. This means that in use, an authorization request is sent to Xpollens in order to know whether the payment can be issued or not. Xpollens checks if the payment context is consistent with the card profile:
- Is this the correct PIN code,
- is the card active,
- are the ceilings or the balance sufficient,
- is it a country, a payment type, a merchant authorized
- ....

Xpollens tests a lot of parameters in real time and responds to the merchant by indicating the response that was sent to his partner

--- 

### Endpoints

More information regarding this endpoint in the [API reference](/api/Core)

#### Get Card Operations

This API allows to retrieve a user's card transactions, with or without date criteria. The search period cannot exceed 7 days. Without date criteria, the api returns the complete list of operations.

<!-- 
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations" method="get"/> 
-->

#### Get Clearing Report

The cardoperations/clearingreport API is generated each time the transaction file transmitted by our Core Banking is received and processed.

<Highlight type="caution">

##### Caution

Partner must have the reference file he wants to retrieve (the reference is transmitted via callback 24 received before)

</Highlight>

<!--
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/cardoperations/clearingreport/{clearingfileid}" method="get"/>
-->

#### Get Card Limits

This API allows you to retrieve the payment and withdrawal limits for a card as well as the outstanding amounts

<Image src="docs/CardOP_Limits.png" alt="usecase 1"/>

<!--
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/cards/{appcardid}/limits" method="get"/>
-->

#### Get Card Operation Description

This API is used to retrieve the operation details.

<!--
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations/{orderid}" method="get"/>
-->

#### Get Card Operation Messages Description

This API is used to retrieve the details of the authorization message

<!--
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations/{orderid}/messages" method="get"/>
-->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
