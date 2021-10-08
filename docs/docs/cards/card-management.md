import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Card Management


## Selfcare

You can manage your card with a selfcare in order to update some specifications, like : 
> - block and unblock your card
> - update limits for payment or withdrawal
> - block or unblock VAD payment
> - block or unblock non domestic payment or withdrawal
> - oppose your card


### Block card
 
<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

<br/>

<Highlight type="tip">
 
 You can block or unblock in real time to secure your card if you don't find it
 
</Highlight>

---

### Update Limits
  
<Image src="docs/Card_Self_UpdateLimits.png" alt="usecase 1"/>

<!--

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

-->

<Highlight type="tip">
 
 You can increase or decrease your limits of payment and/or withdrawal

</Highlight>

---


### Block VAD
  
<Image src="docs/Card_Self_VAD.png" alt="usecase 1"/>

<!--

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

-->

<Highlight type="tip">
 
  You can block or unblock in real time if you don't want authorize e-commerce payment
 
</Highlight>

---

### Block foreign Payment and withdrawal
 
<Image src="docs/Card_Self_ETR.png" alt="usecase 1"/>

<!--

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

-->

<Highlight type="tip">
 
 You can block or unblock in real time if you don't want authorize foreigner payment or wthdrawal
 
</Highlight>

---

#### ``` PUT ``` /api/v2.0/card/{cardExternalRef}

```json
Update card data
{
"globalLimitAtmSelected": "integer"┃null,         constraints: Max 32 chars
"globalLimitPaymentSelected": "integer"┃null,     constraints: Max 32 chars    
"cardBlocked": "boolean"┃null,            
"isVadBlocked": "boolean"┃null,                   
"foreignPaymentBlocked": "boolean"┃null,                             
}
```

> - ``` globalLimitAtmSelected ``` : It’s a card withdrawal limit on seven slippery days (card created with default limits defined in the offer). 
> - ``` globalLimitPaymentSelected ``` : It’s a card payment limit on thirty slippery days (Value in euros).
> - ``` cardBlocked ``` : Allow to block or unblock the card. If the card is blocked, no transaction is allowed.
> - ``` isVadBlocked ``` : Allow to block or unblock the card's internet, MOTO payment transaction.
>  - ``` foreignPaymentBlocked ``` : Allow to block or unblock the card's foreign payment.

<br/>

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

---

### Oppose your card

<Image src="docs/Card_Oppose.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}/oppose" method="patch"/>

<Highlight type="Danger">
 
 Oppose a card is equal to block your card definitively.
 
</Highlight>

<Highlight>
 
 The next step is usually a refabricate or upgrade new card. See in Issue a card Section
 
</Highlight>

---

## Display your card

You can : 

> - display your PIN code
> - display your virtual card

---

### Display your PIN code

<Image src="docs/Card_PIN.png" alt="usecase 1"/>

<Highlight type="tip">
 
 If you don't remember, you can display your PIN code
 
</Highlight>

<Highlight type="caution">
 
 To use API Informations Display, for PCI compliance, we use a Secure Interface by a sdk
 
</Highlight>

---

### Display your virtual card

<Image src="docs/Card_Display.png" alt="usecase 1"/>

<Highlight type="tip">
 
 Once your virtual card is created, you need to get card informations to use in e-commerce for example
 
</Highlight>

<Highlight type="caution">
 
 To use API Card Display, for PCI compliance, we use a Secure Interface by a sdk
 
</Highlight>

---

<Highlight>
 
 You can add in Apple wallet by in-app provisionning (sdk) - See how in [Xpay](./x-pay.md) section
 
</Highlight>

<Cta
  context="doc"
  ui="button"
  link="/api/CardFactory"
  label="Try it out"
/>
