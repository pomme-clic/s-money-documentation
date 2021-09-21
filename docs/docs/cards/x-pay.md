import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# X-Pay 

### Add your card in a Apple wallet since your mobile app

<Highlight type="tip">
 
 In your mobile app, you can add a card to Apple wallet
 
</Highlight>

<Image src="docs/Card_addWallet.png" alt="usecase 1"/>

### Confirm your card enrolment by wallet provider

<Highlight type="tip">
 
 You start your enrolment since wallet provider and you confirm into your app
 
</Highlight>

### token details

<Highlight type="tip">
 
 token in detail
 
</Highlight>

### tokens of card

<Highlight type="tip">
 
 all token by card
 
</Highlight>


<Highlight>

##### Note neutre

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

<Highlight type="tip">

##### Tip

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

<Highlight type="caution">

##### Caution

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

<Highlight type="danger">

##### Danger

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

---

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

### Endpoint

More information regarding this endpoint in the [API reference](/api/CardFactory)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>

---



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue.

## Transfert d'argent P2P

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

## Endpoints

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

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
