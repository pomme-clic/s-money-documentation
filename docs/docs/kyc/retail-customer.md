import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Create User 

<Image src="docs/KYC-retail.png" alt="usecase 1"/>

## Choose how you want to make your best first impression

Our onboarding API offers a modular approach where you can select which technological option fits best your needs :
  
### Facial Recognition
Using a simple parameter, you can activate our Facial Biometry webview. Your customers will be required to show an ID document, and then perform a short selfie video. Validation of the identity will then take 2 minutes ; our call-back will let you know asap. In the mean time, you can proceed with the next steps of your funnel.

<Highlight>
  Our biometry systems are compliant with all Data Protection Regulations. We are supervised on this specific feature by CNIL (GDPR & Biometry) and by ANSSI (EIDAS & Identity Management).
</Highlight>

<Highlight type="tip">
  If your end-customer does not want to perform the facial scan, it does not matter : he/she can refuse, and we will automatically perform another option.
</Highlight>

<Highlight type="caution">
  This option can only occur on a mobile phone, via an app. If your onboarding process started on Internet, you can use the QR Code our call-back #35 gives you to move from the web to your mobile app.
</Highlight>

### SEPA Instant Transfer IN
In this option, an IBAN is booked for your end-customer, onto which he/she can send money. Our algorithm performs the required name-checks to ensure proper identity confirmation, and then automatically opens the account.

<Highlight>
  This option is compatible with tranditionnal 48 hours SEPA SCT IN as well.
</Highlight>

<Highlight type="tip">
  We can also provide a Payment Initiation Service, which can significantly reduce onboarding TLT as well as create a wow-effect. Should you be interested, ask our Sales team.
</Highlight>

<Highlight type="caution">
  Accounts are setup with limits. Should incoming transfers be above or below limits, transfers will be rejected. Name-check will not be performed if transfer does not effectively reach the account.
</Highlight>

### SEPA Instant Transfer OUT
We will send money on your behalf to your end-customers (less than 1€). Amount will be random, and your end-customer will be required to indicate the amount he/she has received. If the given amount is right, identity will be confirmed.

<Highlight type="caution">
  Destination accounts must be personnal accounts ; we perform a name-check on this external account, and payment will be unauthorized should names differ.
</Highlight>

### Account Agregation
Your end-customer will be required to enter credentials of his other bank. Based on our name-check algorithm, this agregation will enable 

<Highlight>
  This option requires more integration work on your side, as an extra Agregation Service Provider needs to be integrated in your front-end. Should you be interested, please ask our Sales team.
</Highlight>

---

Lorem ipsum je suis le manager de create a card
## Transfert d'argent P2P

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

## Endpoints

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

### Hmac adapter 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

More information regarding this endpoint in the [API reference](/api/api1)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/api1"
  label="Try it out"
/>

### Hmac adapter 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
