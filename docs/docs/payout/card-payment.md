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

## Context Authorizations

Toutes les cartes émises sont des cartes à autorisation systématique. Cela signifie qu'à l'usage, une demande d'autorisation est envoyée à Xpollens afin de savoir si le paiement peut être délivré ou non. Xpollens vérifie si le contexte du paiement est cohérent avec le profil de la carte : 
- Est ce le bon code PIN, 
- est ce que la carte est active, 
- est ce que les plafonds ou le solde sont suffisants, 
- est ce un pays, un type de paiement ou un marchand autorisé
- ....

Xpollens teste beaucoup de paramètres en temps réel et répond au marchand en signifiant la réponse qui a été émise à son partenaire

All cards issued are systematic authorization cards. This means that in use, an authorization request is sent to Xpollens in order to know whether the payment can be issued or not. Xpollens checks if the payment context is consistent with the card profile:
- Is this the correct PIN code,
- is the card active,
- are the ceilings or the balance sufficient,
- is it a country, a payment type, a merchant authorized
- ....

Xpollens tests a lot of parameters in real time and responds to the merchant by indicating the response that was sent to his partner

## Context Clearing

Depending on the card profile, you may have offline transactions....

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


The cards/{{AppCardId}}/limits API allows you to retrieve the payment and withdrawal limits for a card as well as the outstanding amounts

<Image src="docs/CardOP_Limits.png" alt="usecase 1"/>

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
