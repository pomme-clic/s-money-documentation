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

#### endpoint ``` POST ``` /api/v2.0/card

```json
Create card data
{
"offerPartnerCode*": "string",  [Required] 
"holderExternalRef*": "string", [Required] 
"cardExternalRef*": "string",   [Required]  Constraints: Max 50 chars 
"visualCodeSelected": "string"┃null,        Constraints: Max 10 chars
"label": "string"┃null,                     Constraints: Max 50 chars 
"wishPin": "boolean"┃null, 
"isNfcActivated": "boolean"┃null, 

}
```

> - ``` offerPartnerCode ``` : The Partner's offer code provided by Xpollens. 
> - ``` holderExternalRef ``` : The user/holder's reference attributed by the partner (holderExternalRef = appUserId).
> - ``` cardExternalRef ``` : The card's reference attributed by the partner
> - ``` visualCodeSelected ``` : The partner can define one or several visual codes for the same offer (same product). If the attribute is not entered when ordering the card, then the visual code defined by default in the offer will be selected for the card.
>  - ``` label ``` : The name or partner's reference of the card.
>  - ``` wishPin ``` : The Partner can choose to create the card with or without wishpin (If the partner 's offer doesn't support it, then the PIN will be randomly generated). If the attribute is not entered when ordering the card, and defined by default in the offer, then the card will be created with a pin chosen by the holder.
> - ``` isNfcActivated ```  : The Partner can choose to create the card with or without NFC (If its' by default deactivated in the offer, then the card will be created without NFC).If the attribute is not entered when ordering the card, and activated by default in the offer, then the NFC will be activated for the card.

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="​/api​/v2.0​/card" method="post"/>


---

### Wish or Random PIN

<Image src="docs/PIn_Define.png" alt="usecase 1"/>

#### sdk

More information regarding this sdk in the [Card Companion SDK](./CardCompanion_SDK.pdf)

<Highlight>
 
 Remember you have 2 choices : Random PIN (by default, no need to implement anything) or Wish PIN in order to allow to your end user to define his own PIN code. 
 
</Highlight>

<Highlight type="caution">
 
 WishPIN is <b class="term">only possible for mobile app</b>. <b class="term">You have to add our sdk in addition with a TokenCB signature API</b>
 
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
  
 Obviously there is <b class="term">no PIN with a virtual card</b>

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
