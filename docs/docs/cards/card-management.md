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
 
<Highlight type="tip">

 ##### Tip

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

<Highlight type="tip">

 ##### Block card
 You can block or unblock in real time to secure your card if you don't find it

</Highlight>

<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>

### Update limits
Below is an example of use case to update limits of your card :

<Image src="docs/Card_Self_UpdateLimits.png" alt="usecase 1"/>

<Highlight>
You can increase or decrease your limits of payment and/or withdrawal
</Highlight>

### Block/Unblock VAD
Below is a use case to (un)block VAD :

<Image src="docs/Card_Self_VAD.png" alt="usecase 1"/>

<Highlight>
You can block or unblock in real time if you don't want authorize e-commerce payment
</Highlight>

### Block/Unblock non-domectic country
Below is a use case to (un)block non-domestic payments or withdrawal :

<Image src="docs/Card_Self_ETR.png" alt="usecase 1"/>

<Highlight>
You can block or unblock in real time if you don't want authorize no-domestic payment or wthdrawal
</Highlight>

## Context 'Actions in app'
You can manage your card to : 
- define your PIN code (sdk)
- display your virtual card
- oppose your card 
- add in Apple wallet by in-app provisionning (sdk)

### Choose your PIN
Below is a use case to define your own PIN code :

### Display your virtual card
Below is a use case to display informations of your virtual card :

### Oppose your card
Below is a use case to block your card definitively :

### Add your card in a Apple wallet since your mobile app
Below is a use case to add your card in Apple Pay since your mobile app :

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
