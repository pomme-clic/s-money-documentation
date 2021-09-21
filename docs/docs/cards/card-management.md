import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Card Management

Here, we are talking about how you can manage your cards.

## Context 'Selfcare'
You can manage your card with a selfcare in order to update some specifications, like : 
- block and unblock your card
- update limits for payment or withdrawal
- block or unblock VAD payment
- block or unblock non domestic payment or withdrawal

---

### Block card
 
<Highlight type="tip">
 
 You can block or unblock in real time to secure your card if you don't find it
 
</Highlight>

<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

---

### Update Limits
  
<Highlight type="tip">
 
 You can increase or decrease your limits of payment and/or withdrawal

</Highlight>

<Image src="docs/Card_Self_UpdateLimits.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

---

### Block VAD
  
<Highlight type="tip">
 
  You can block or unblock in real time if you don't want authorize e-commerce payment
 
</Highlight>

<Image src="docs/Card_Self_VAD.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

---

### Block foreign Payment and withdrawal
 
<Highlight type="tip">
 
 You can block or unblock in real time if you don't want authorize foreigner payment or wthdrawal
 
</Highlight>

<Image src="docs/Card_Self_ETR.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

---

## Context 'Actions in app'
You can manage your card to : 
- display your PIN code
- display your virtual card
- oppose your card 

<Highlight>
 
 You can add in Apple wallet by in-app provisionning (sdk) - See how in xpay section
 
</Highlight>

---

### Display your PIN code

<Highlight type="tip">
 
 If you don't remember, you can display your PIN code
 
</Highlight>

<Image src="docs/Card_PIN.png" alt="usecase 1"/>

<Highlight type="caution">
 
 To use API Informations Display, for PCI compliance, we use a Secure Interface by a sdk
 
</Highlight>

---

### Display your virtual card

<Highlight type="tip">
 
 Once your virtual card is created, you need to get card informations to use in e-commerce for example
 
</Highlight>

<Image src="docs/Card_Display.png" alt="usecase 1"/>

<Highlight type="caution">
 
 To use API Card Display, for PCI compliance, we use a Secure Interface by a sdk
 
</Highlight>

---

### Oppose your card

<Highlight type="Danger">
 
 Oppose a card is equal to block your card definitively.
 
</Highlight>

<Image src="docs/Card_Oppose.png" alt="usecase 1"/>

<Highlight>
 
 The next step is usually a refabricate or upgrade new card. See in Issue a card Section
 
</Highlight>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}/oppose" method="patch"/>

<Cta
  context="doc"
  ui="button"
  link="/api/CardFactory"
  label="Try it out"
/>
