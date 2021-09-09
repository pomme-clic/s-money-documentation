import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Issue a card
Here, we are talking about product and card life cycle.
## Context
The card offer is defined by a product:
- funding source : debit, prepaid,...
- for who : consumer, business
- what : classic, gold

And by a type of card: physical or virtual card, virtual card, token (xPay) or a wearable

## Order some cards
Below is an example of UX following a first card order, with the possibility of ordering a "waiting" virtual card:

<Image src="docs/Card_Order.png" alt="usecase 1"/>

<Highlight>
You can just order only a virtual card too or use a virtual card for emergency mode
</Highlight>

### Endpoint

## Cancel a card

### Hmac adapter 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

More information regarding this endpoint in the [API reference](/api/api1)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/api1"
  label="Try it out"
/>

