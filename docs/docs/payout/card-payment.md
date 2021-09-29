import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'


# Card Payment

Here, we are talking about how xxxxxxxxxxxxxxx

## Context 'Selfcare'

You can manage your card with a selfcare in order to update some specifications, like : 
- block and unblock your card
- update limits for payment or withdrawal
- block or unblock VAD payment
- block or unblock non domestic payment or withdrawal

---

### Get Clearing Report

Description
The cardoperations/clearingreport API is generated each time the transaction file transmitted by Natixis is received and processed.

<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

<Highlight type="caution">

##### Caution

Partner must have the reference file he wants to retrieve (the reference is transmitted via callback 24)

</Highlight>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/cardoperations/clearingreport/{clearingfileid}" method="get"/>

---

### Get Card Limits

Description
The cards/{{AppCardId}}/limits API allows you to retrieve the payment and withdrawal limits for a card as well as the outstanding amounts

<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/cards/{appcardid}/limits" method="get"/>

---

### Get Card Operations

Description

The users/{{appUserId}}/cardoperations API allows to retrieve a user's card transactions, with or without date criteria. The search period cannot exceed 7 days. Without date criteria, the api returns the complete list of operations.

<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations" method="get"/>

<Highlight type="caution">

##### Caution

Partner must have the reference of the file containing the operations

</Highlight>

---

### Get Card Operation Description

Description
This cardoperations/{{orderId}} API is used to retrieve the operation details.

<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations/{orderid}" method="get"/>

---

### Get Card Operation Messages Description

Description
This api is used to retrieve the details of the authorization message

<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations/{orderid}/messages" method="get"/>

---

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
