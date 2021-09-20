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

### Wish or Random PIN

<Highlight type="tip">
 
 You have 2 choices : Random PIN (by default, no need to implement anything) or Wish PIN in order to allow to your end user to define his own PIN code. 
 
</Highlight>

<Image src="docs/PIn_Define.png" alt="usecase 1"/>

<Highlight>
 
 You have to choose by parameter if you propose a journey with random or wishPIN

</Highlight>

<Highlight type="caution">
 
 WishPIN is only possible for mobile app. You have to add our sdk in addition with a TokenCB signature API
 
</Highlight>
--
### Order a virtual card

<Highlight type="tip">
 
 When your end user order a virtual card, he can use it instantly in e-commerce or add in a wallet xpay for point of sale.
 
</Highlight>

<Image src="docs/vCard_Order.png" alt="usecase 1"/>

<Highlight>
  
 Obviously there is not random or wish PIN with a virtual card

</Highlight>

### Order a temporary virtual card

<Highlight type="tip">
 
 You want a physical card but you don't want or can't to wait. You order a temporary virtual card.
 
</Highlight>

<Image src="docs/Card_2_Order.png" alt="usecase 1"/>
<Highlight type="tip">
 
 2 interesting usecase :  
 
 1- In subscription for waiting your physical card. 
 
 2- In emergency, you are not in your country but in holidays, you blocked your card (for stolen or lost reason) and you can order an emergency virtual card waiting your new physical card.
 
</Highlight>
<Highlight>
  
 Obviously there is not random or wish PIN with a virtual card

</Highlight>

<Highlight type="caution">
 
 You have to order a virtual card first and then use a other endpoint to materialize your virtual with the same data cards
 
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
