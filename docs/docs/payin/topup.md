import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Topup Card

<Image src="docs/usecase-exemple-00.jpg" alt="usecase 1"/>

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
 
<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

<Highlight type="tip">
 
 You can block or unblock in real time to secure your card if you don't find it
 
</Highlight>

---

### Update Limits
  
<Image src="docs/Card_Self_UpdateLimits.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

<Highlight type="tip">
 
 You can increase or decrease your limits of payment and/or withdrawal

</Highlight>


<Highlight>

##### Note neutre

Money from Card Top Up will be available immediatly

</Highlight>

<Highlight type="tip">

##### Tip

Card Top Up is avalable with VISA and Mastercard but other payment methods will be available soon

</Highlight>

<Highlight type="caution">

##### Caution

Any Card Top Up will be secured within 3DS 

</Highlight>

---

## Endpoints

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
