import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Know Your Individual

## Context

### Regulatory Context
All banks are subject to a number of regulations concerning customer onboarding ; Banking-as-a-Service does not escape this rule. We manage this compliance for you : our **CreateUser** webservice embeds the required Identity Verification service as well as all other regulatory requirements.

<Image src="docs/KYC-regulatory-context.png" alt="usecase 1"/>

Many tasks are performed by our Operational Teams : FICOBA declarations, ACPR reporting, Anti-Monney Laundering checks, Fighting Terrorism, Identity Fraud surveillance, etc. In the unlikely event your prospect raises a flag, our teams will perform adequate actions within 48 hours. All intermediate steps will be visible to you in the call-backs.

<Highlight type="tip">
  Regularly check our webhooks & call-backs to ensure proper communication to your end-customers.
</Highlight>

### Technical Context
To integrate our solution, you will need both our API and our SDK : part of the onboarding process has to take place in a mobile application.

<Image src="docs/KYC-screens.png" alt="usecase 1"/>

<Highlight>
  Should you not have a mobile app : no problem, we have an app for you, **Xpollens Authenticator** integrates the SDK and can fit perfectly in your onboarding process.
</Highlight>

<Highlight type="tip">
  You define the technical unique identifier of your prospect : the **appUserId** ; our call-backs will give you back this same identified.
</Highlight>

## Straight Through Process

We offer a simple **plug'n'play** webservice giving multiple call-backs so you can easily track your prospect every step of the way.

<Image src="docs/KYC-retail.png" alt="usecase 1"/>

Our onboarding API embeds an Identity Verification Service. We offer a modular approach for verifying the identity of your prospects, where you can select which technological option fits best your needs :
  
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
  Accounts are setup with limits. Should incoming transfers be above limits, transfers will be rejected. Name-check will not be performed if transfer is rejected.
</Highlight>

### SEPA Instant Pay OUT
We will send money on your behalf to your end-customers (less than 1€). Amount will be random, and your end-customer will be required to indicate the amount he/she has received. If the given amount is right, identity will be confirmed.

<Highlight>
  Destination accounts must be personnal accounts ; we perform a name-check on this external account, and payment will be unauthorized should names differ.
</Highlight>

### Account Agregation
Your end-customer will be required to enter credentials of his other bank. Based on our name-check algorithm, this agregation will enable 

<Highlight>
  An extra Agregation Service Provider needs to be integrated in your front-end. Should you be interested, please ask our Sales team.
</Highlight>

### More to come
We're working hard to find more options for you, always with the best Customer Experience in mind and Straight Through processing. Stay tuned !

---

## SDK Functions

Here are the functions you need to integrate in our SDK to make the onboarding process work.

### Scan QR Code



### Get Webview URL



### Electronic Signature

Because we use Strong Authentication as a means of e-Signature, you must please refer to the Strong Authentication section in this documentation to finalize this integration. Signing the Terms & Conditions as well as the Tax Declaration Form will generate such SCA notifications.

## API Endpoints

Here are the webservices you need to integrate in our API Gateway to properly operate the onboarding process.

### POST User

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

More information regarding this endpoint in the [API reference](/api/api1)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- https://api.xpollens.com/swagger/index.html?urls.primaryName=User%20%26%20Usermanagment%20API%20-%20v1.1#/User/post_api_v2_0_users__AppUserId__declarative -->
<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/api1"
  label="Try it out"
/>

### PUT User

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>

---
