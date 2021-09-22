import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Card LifeCycle

Here, we are talking about product and card life cycle.

The card offer is defined by a product :
- funding source : debit, prepaid,...
- for who : consumer, business, corporate ...
- what : classic, gold, Infinite

And by a type of card : 
- physical or virtual card, 
- token (xPay) 
- wearable (keyring, bracelet..)

---

## Order context

Here you are some ordering examples

### Order a physical card

<Image src="docs/Card_Order.png" alt="usecase 1"/>

#### endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="​/api​/v2.0​/card" method="post"/>

---

### Wish or Random PIN

<Image src="docs/PIn_Define.png" alt="usecase 1"/>

#### sdk

More information regarding this sdk in the [Card Companion SDK](./CardCompanion_SDK.pdf)

<Highlight>
 
 You have 2 choices : Random PIN (by default, no need to implement anything) or Wish PIN in order to allow to your end user to define his own PIN code. 
 
</Highlight>

<Highlight type="caution">
 
 WishPIN is only possible for mobile app. You have to add our sdk in addition with a TokenCB signature API
 
</Highlight>

---

### Order a virtual card

<Image src="docs/vCard_Order.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="​/api​/v2.0​/card" method="post"/>

<Highlight type="tip">
 
 When your end user order a virtual card, he can use it instantly in e-commerce or add in a wallet xpay for point of sale.
 
</Highlight>

<Highlight>
  
 Obviously there is not random or wish PIN with a virtual card

</Highlight>

---

## Manage context

Here you are some examples of life cycle management

### Cancel a card

For specific cases, you can use a cancellation card.

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api/v2.0/card/{cardExternalRef}/cancel" method="patch"/>

<Highlight type="caution">
 
 DO NOT USE for an account closure because cancellation card is embedded
 
</Highlight>

---

### Refabricate a card

<Image src="docs/Card_Refabricate.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/refabricate" method="post"/>

<Highlight type="tip">
 
 When your end user opposed his card, you can just refabricate.
 
</Highlight>

--- 

<Cta
  context="doc"
  ui="button"
  link="/api/CardFactory"
  label="Try it out"
/>
