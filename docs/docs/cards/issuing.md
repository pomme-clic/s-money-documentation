import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Issue a card
Here, we are talking about product and card life cycle.

## Context
The card offer is defined by a product:
- funding source : debit, prepaid,...
- for who : consumer, business, ...
- what : classic, gold, Infinite

And by a type of card : 
- physical or virtual card, 
- virtual card or token (xPay) 
- wearable (keyring, bracelet..)

### Order a physical card

<Highlight type="tip">
 
 Below is an example of UX following a first physical card order with option random or wish PIN
 
</Highlight>

<Image src="docs/Card_Order.png" alt="usecase 1"/>

### Choose or Random PIN

<Highlight type="tip">
 
 You have 2 choices : Random PIN (by default) or WishPIN in order to allow to your end user to define his own PIN code. 
 
</Highlight>

<Image src="docs/Pin_Define.png" alt="usecase 1"/>

<Highlight>
 
 You have to choose by parameter if you propose a journey with random or wishPIN

</Highlight>



### Endpoint

## Cancel a card

### Hmac adapter 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
