import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# X-Pay 

## Context Enrolment

There are 2 methods to add your card to a wallet : 

- inapp verification method (update of SMS journey)
- inapp provisioning method

The first is the usual method which consists since  : 

- iOS (for Apple Pay)
- app Samsung Pay
- app Garmin Pay (coming soon)
- app Google Pay (coming soon)

The cardholder starts enrolment by entering his card informations and then he valids/confirms into his mobile app with a SCA (Strong Customer Authentication).

The second is mandatory with Apple (for the moment). It's a method without entering your informations card. It consists to start in your app (with SCA) with only button click by provisioning data cards, then, to valid Terms and Conditions and to finish in your app.

---

### Add your card in a Apple wallet since your mobile app

 In your mobile app, you can add a card to Apple wallet

<Image src="docs/Card_addWallet.png" alt="usecase 1"/>

#### sdk

More information regarding this sdk in the .....

<Highlight type="caution">

##### Caution

Before display the button "Add to wallet", you have to verifiy if this card is not already present in wallet and if the phone or iOS is compatible

</Highlight>

---

### Confirm your card enrolment by wallet provider

You start your enrolment since wallet provider and you confirm into your app

<Image src="docs/Card_verifWallet.png" alt="usecase 1"/>

#### endpoint

More information regarding this endpoint in the [API reference XPAY](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/{tokenvalue}" method="get"/>
---

## Context token

### token details

<Highlight type="tip">
 
 token in detail
 
</Highlight>

#### endpoint

More information regarding this endpoint in the [API reference XPAY](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/{tokenvalue}" method="get"/>

---

### tokens of card

<Highlight type="tip">
 
 all token by card
 
</Highlight>

#### endpoint

More information regarding this endpoint in the [API reference XPAY](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/card/{cardExternalRef}" method="get"/>

---

<Highlight>

##### Note neutre

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

<Highlight type="tip">

##### Tip

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

<Highlight type="danger">

##### Danger

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

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

<Cta
  context="doc"
  ui="button"
  link="/api/Xpay"
  label="Try it out"
/>
