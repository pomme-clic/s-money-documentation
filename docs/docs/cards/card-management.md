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
 
### Block card
 
<Highlight type="tip">
 
 You can block or unblock in real time to secure your card if you don't find it
 
</Highlight>

<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

### Update Limits
  
<Highlight type="tip">
 
 You can increase or decrease your limits of payment and/or withdrawal

</Highlight>

<Image src="docs/Card_Self_UpdateLimits.png" alt="usecase 1"/>

### Block VAD
  
<Highlight type="tip">
 
  You can block or unblock in real time if you don't want authorize e-commerce payment
 
</Highlight>

<Image src="docs/Card_Self_VAD.png" alt="usecase 1"/>

### Block foreign Payment and withdrawal
 
<Highlight type="tip">
 
 You can block or unblock in real time if you don't want authorize no-domestic payment or wthdrawal
 
</Highlight>

<Image src="docs/Card_Self_ETR.png" alt="usecase 1"/>

## Context 'Actions in app'
You can manage your card to : 
- display your virtual card
- oppose your card 
- add in Apple wallet by in-app provisionning (sdk)

### Choose or Random PIN

<Highlight type="tip">
 
 You have 2 choices : Random PIN (by default) or WishPIN in order to allow to your end user to define his own PIN code. 
 
</Highlight>

<Image src="docs/Card_PIN.png" alt="usecase 1"/>

<Highlight type="caution">
 
 WishPIN is only possible for mobile app. You have to add our sdk in addition with a TokenCB signature API
 
</Highlight>

### Display your virtual card

<Highlight type="tip">
 
 Once your virtual card is created, you need to get card informations to use in e-commerce for example
 
</Highlight>

<Image src="docs/Card_Display.png" alt="usecase 1"/>

<Highlight type="caution">
 
 To use API Card Display, for PCI compliance, we use a Secure Interface by a sdk
 
</Highlight>

### Oppose your card

<Highlight type="tip">
 
 Oppose a card is block your card definitively. The next step is usually a refabricate or upgrade new card
 
</Highlight>

<Image src="docs/Card_Oppose.png" alt="usecase 1"/>

### Add your card in a Apple wallet since your mobile app

<Highlight type="tip">
 
 In your mobile app, you can add a card to Apple wallet
 
</Highlight>

<Image src="docs/Card_addWallet.png" alt="usecase 1"/>

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
