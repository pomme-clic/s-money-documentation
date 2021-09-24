import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# X-Pay 

## Context Enrolment

There are 2 methods to add your card to a wallet : 

- inapp verification method _(update of SMS journey)_
- inapp provisioning method

The first is the usual method which consists since  : 

- iOS (for Apple Pay)
- app Samsung Pay
- app Garmin Pay _(coming soon)_
- app Google Pay _(coming soon)_

The cardholder starts enrolment by entering his card informations and then he valids/confirms into his mobile app with a SCA (Strong Customer Authentication).

The second is mandatory with Apple (for the moment). It's a method without entering your informations card. 
It consists to start in your app (with SCA) with only button click by provisioning data cards then to valid Terms and Conditions and to finish in your app.

---

### Confirm your card enrolment by wallet provider

You start your enrolment since wallet provider and you confirm into your app

<Image src="docs/Card_verifWallet.png" alt="usecase 1"/>

#### endpoint

More information regarding this endpoint in the [API reference](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/card/{cardExternalRef}/inappverifactivation" method="post"/>

---

### Add your card in a Apple wallet since your mobile app

In your mobile app, you can add a card to Apple wallet

<Image src="docs/Card_addWallet.png" alt="usecase 1"/>

#### sdk

More information regarding this sdk _coming soon_

<Highlight type="caution">

##### Caution

Before display the button "Add to wallet", you have to verify if this card **is not already present** in wallet and **if the phone or iOS is compatible**.

</Highlight>

---

## Context token

### Token details

#### endpoint

More information regarding this endpoint in the [API reference](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/{tokenvalue}" method="get"/>

---

### Token's List of card

#### endpoint

More information regarding this endpoint in the [API reference](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/card/{cardExternalRef}" method="get"/>

---

<Cta
  context="doc"
  ui="button"
  link="/api/Xpay"
  label="Try it out"
/>
