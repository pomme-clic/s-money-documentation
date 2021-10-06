import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'





# Know Your Customer




## Context

### Regulatory Context

All banks are subject to a number of regulations concerning customer onboarding ; Banking-as-a-Service does not escape this rule. We manage this compliance for you : our **Onboarding API** webservice embeds the required Identity Verification service as well as all other regulatory requirements.

<Image src="docs/KYC-regulatory-context.png" alt="usecase 1"/>

Many tasks are performed by our Operational Teams : FICOBA declarations, ACPR reporting, Anti-Monney Laundering checks, Fighting Terrorism, Identity Fraud surveillance, etc. In the unlikely event your prospect raises a flag, our teams will perform adequate actions within a limited timeframe. All intermediate steps will be visible to you in the callbacks.

<Highlight type="tip">
  Regularly check our webhooks & received callbacks to ensure proper communication to your end-customers.
</Highlight>

### Technical Context & Customer Experience

To integrate our solution, you will need both our API and our SDK : part of the onboarding process has to take place in a mobile application.

<Image src="docs/KYC-screens.png" alt="usecase 1"/>

<Highlight>
If you do not have a mobile app : no problem, we have an app for you: <b class="term">Xpollens Authenticator</b> integrates the SDK and can fits perfectly in your onboarding process.
</Highlight>

<Highlight type="tip">
  You define the unique identifier of your prospect : the <b class="term">appUserId</b> ; our callbacks will use this same identifier.
</Highlight>

## Straight Through Process

We offer a simple **plug'n'play** webservice giving multiple call-backs so you can easily track your prospect every step of the way.

> Use this feature to identify any relevant individual, from your prospects to your employees or mandated executives.

<Image src="docs/KYC-retail.png" alt="usecase 1"/>

Our onboarding API embeds an Identity Verification Service. We offer a modular approach for verifying the identity of your prospects, where you can select which technological option fits best your needs :
  
### OPTION 1: Facial Recognition

Xpollens can easily parameterize our webview to include Facial Biometry for your customers. They will be required to show an ID document, and then perform a short selfie video. Validation of the identity will then take 3 to 6 minutes ; our callback will let you know asap. In the mean time, you can proceed with the next steps of your funnel.

<Highlight>
  Our biometry systems are <b class="term">compliant with Data Protection Regulations</b>. We are supervised on this specific feature by CNIL (GDPR & Biometry) and by ANSSI (EIDAS & Identity Management).
</Highlight>

<Highlight type="tip">
  If your end-customer does not want to perform the facial scan, it does not matter : he/she can refuse, and we will automatically perform another option.
</Highlight>

<Highlight type="caution">
  <b class="term">This option can only occur on a mobile phone</b>, via an app. If your onboarding process started on Internet, you can use the QR Code our callback #35 gives you to move from the web to your mobile app.
</Highlight>

### OPTION 2: SEPA Instant Transfer IN

In this option, an IBAN is booked for your end-customer, onto which he/she can send money. Our algorithm performs the required identity-checks to ensure proper identity confirmation, and then automatically opens the account.

<Highlight>
  This option is compatible with tranditionnal 48 hours SEPA SCT IN as well.
</Highlight>

<Highlight type="tip">
  We can also provide a Payment Initiation Service, which can significantly reduce onboarding TLT as well as create a wow-effect. Should you be interested, ask our Sales team.
</Highlight>

<Highlight type="caution">
  Accounts are setup with limits. Should incoming transfers be above limits, transfers will be rejected. Identity-check will not be performed if transfer is rejected.
</Highlight>

### OPTION 3: Coming soon...

More to come : We're working hard to find more options for you, always with the best Customer Experience in mind and Straight Through processing. Stay tuned !




## SDK Features

Part of the on-boarding process happens on a mobile app ; our solution is **omnichannel**, so don't worry. Here are the functions you need to integrate in our SDK to make the onboarding process work. Please note that security features are managed using a security-wallet that is constructed specifically for your end-user, on his/her mobile phone, inside his/her mobile app.

Here are the steps your mobile application should follow when it's launched by an end-user :
<details>
    <summary>1. LOADING BLOCK: Check proper binding of the user's security-wallet.</summary>
        <div>When your app opens, your code must check if a security-wallet is binded to the user's phone or not. This step is important to determine if it's a first download process or not. Please note that Xpollens has already created a security wallet for your end user. No need to create one.</div><br/>
</details>
<details>
    <summary>2. PROVISIONNING BLOCK: If no security wallet is binded, check identity and bind one.</summary>
        <div>This binding is performed by using the Activation Code and the Identification Webview URL.
          - Scan QR Code
          - Define Secret Code
          - Check Identity using webview
        </div><br/>
</details>
<details>
    <summary>3. MAIN BLOCK: If security wallet is binded to phone, open home screen.</summary>
        <div>Your main screen can open up.</div>
</details>
<br/>

<Highlight type="tip">
  If you do not have a mobile app, we can provide your customers with <b class="term">Xpollens Authenticator</b>.
</Highlight>

### Scan QR Code

Once a new user downloads your mobile application, you will need to match this user with the user you already know. This can be done via the ``` PROVISIONNING BLOCK ``` of our SDK, using our **Activation Code**, handed to you in our **Call-Back Type 35**. This should happen quite early in your process, as it will secure your mobile app and ensure we can contact your customer by push-notifications.

>
> **Managing the multi-channel capability**
>
> - If the on-boarding process started on the web, the Activation Code can be displayed on a regular webpage so that it can be scanned from your mobile app.
> - If the on-boarding process started on your mobile app, the Activation Code does not need to be shown to your prospect : you can feed it directly to our SDK in the background.
> 

Here is the payload you'll get from our callback type 35 :
```json
"Payload": {
        "type": "35",
        "AppUserId": "e87bd13dJ",
        "ActivationCode": "f825f1646665490aa7ef7942c6f2f159",
        "ErrorMessage": null
        }
```

> 
> **Concerning the PROVISIONNING BLOCK**
> 
> - Make sure you request proper access to both front & back cameras : Scanning QR Code requires camera, and Identification Webview requires selfie camera.
> - Code depends on OS. Please refer to full documentation (requires an NDA to be signed), thank you for your understanding.
> 


### Obtain Secret Code

This screen is automatically prompted by our SDK whenever you trigger the binding of a new security-wallet on the device. It currently contains 5 digits, and it is not stored anywhere but the user's device.

### Get Webview URL

This step is performed by prompting the webview inside your screen. This webview's URL can be obtained using the ``` getIssuerData() ``` feature of our SDK.

Example:
```
https://pad-staging.api-ot.com/api/v2/static/dist/index.html?technicalId=DC0A9829DF8D544A581292D8CE6C4C48FCEC14A07DDD4F0C8A1B9CFD8487711CB7A49C47047521DF3C9967215B5D7937310E26743193A7D5431AB2DA9A27AFE4&token=J5Ti9Y9p
```

### Close Webview URL

You will know when to close the webview when the URL changes, adding a ``` #SUCCESS ``` at the end.

Example:
```
https://pad-staging.api-ot.com/api/v2/static/dist/index.html?technicalId=DC0A9829DF8D544A581292D8CE6C4C48FCEC14A07DDD4F0C8A1B9CFD8487711CB7A49C47047521DF3C9967215B5D7937310E26743193A7D5431AB2DA9A27AFE4&token=J5Ti9Y9p#SUCCESS
```

<Highlight>
Even if the identification is not a success, you will still get the same outcome tag, for security purposes. However in case the identification process fails, Xpollens will automatically kill the security-wallet of your end-user, who will not be able to perform any strong authentication. Her/His KYC will be considered "incomplete", and her/his account will remain unusable until proper identification is performed.
</Highlight>

<Highlight type="tip">
Because we use Strong Authentication as a means of e-Signature, you must please refer to the Strong Authentication section in this documentation to finalize this integration. Signing the Terms & Conditions as well as the Tax Declaration Form will generate such SCA notifications.
</Highlight>




## API Endpoints

Here are the webservices you need to integrate in our API Gateway to properly operate the onboarding process.

>
> **Example of a straight-through onboarding process**
> 
> 1. POST api/v1.1/users/{appUserId}
> 2. POST api/v2.0/users/{appUserId}/declarative
> 3. PATCH api/v1.1/user/{appUserId}/fatcaEai _(will trigger an SCA notification)_
> 4. POST api/v2.0/users/{appUserId}/cgu _(will trigger an SCA notification)_
> 


### POST User (Create)

Most information is updatable for as long as user is a **prospect**, except for critical indentification data. As soon as KYC is validated, some of her/his data will be locked or subject to adequate justification.
More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v2.0/migrationProxy" path="/api​/v1.1​/users​/{appUserId}" method="post"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Users#post-/api/v1.1/users/-AppUserId-"
  label="Try it out"
/>

### GET User (Read)

This endpoint allows you to read the data you have sent.
More information regarding this endpoint in the [API reference](/api/Users)

<Endpoint apiUrl="/v2.0/migrationProxy" path="/api​/v2.0​/users​/{appUserId}​/declarative" method="get"/>

<!-- https://api.xpollens.com/swagger/index.html?urls.primaryName=User%20%26%20Usermanagment%20API%20-%20v2.0#/User/get_api_v2_0_users__AppUserId__declarative -->
<!-- <Endpoint apiUrl="/v2.0/migrationProxy" path="/api​/v2.0​/users​/{AppUserId}​/declarative" method="get"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Users#get-/api/v2.0/users/-AppUserId-/declarative"
  label="Try it out"
/>

### PUT User (Update)

All information is updatable without any constraint, for as long as user is a **prospect**. As soon as KYC is validated, some of her/his data will be locked.
More information regarding this endpoint in the [API reference](/api/Users)

<Endpoint apiUrl="/v2.0/migrationProxy" path="/api​/v2.0​/users​/{appUserId}​/declarative" method="put"/>

<!-- https://api.xpollens.com/swagger/index.html?urls.primaryName=User%20%26%20Usermanagment%20API%20-%20v2.0#/User/put_api_v2_0_users__AppUserId__declarative -->
<!-- <Endpoint apiUrl="/v2.0/migrationProxy" path="/api​/v2.0​/users​/{appUserId}​/declarative" method="put"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Users#put-/api/v2.0/users/-AppUserId-/declarative"
  label="Try it out"
/>

### DELETE User (Delete)

This action is not possible.
More information regarding this endpoint in the [API reference](/api/Users)

<Highlight>
Purge of all prospects is performed after 90 days. All webview links and QR Codes will expire after this duration, and personal data will be removed.
</Highlight>

### PATCH FatcaEai

Use this endpoint to transmit to Xpollens the required tax information from your end user.
More information regarding this endpoint in the [API reference](/api/Compliance)

<Highlight>
This will trigger a Strong Authentication notification to your end-user.
</Highlight>

<Endpoint apiUrl="/v1.1/migrationProxy" path="/api​/v1.1​/user​/{AppUserId}​/fatcaEai" method="patch"/>

<!-- https://api.xpollens.com/swagger/index.html?urls.primaryName=User%20%26%20Usermanagment%20API%20-%20v2.0#/User/patch_api_v1_1_user__AppUserId__fatcaEai -->
<!-- <Endpoint apiUrl="/v1.1/migrationProxy" path="/api​/v1.1​/user​/{AppUserId}​/fatcaEai" method="patch"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Compliance#patch-/api/v2.1/user/-appUserId-/fatcaEai"
  label="Try it out"
/>

### POST CGU

Use this endpoint to inform Xpollens that your prospect has accepted Terms & Conditions of the Payment Services you are offering thanks to Xpollens.
More information regarding this endpoint in the [API reference](/api/Users)

<Highlight>
This will trigger a Strong Authentication notification to your end-user.
</Highlight>

<Endpoint apiUrl="/v1.1/migrationProxy" path="/api​/v2.0​/users​/{AppUserId}​/cgu" method="post"/>

<!-- https://api.xpollens.com/swagger/index.html?urls.primaryName=User%20%26%20Usermanagment%20API%20-%20v2.0#/User/post_api_v2_0_users__AppUserId__cgu -->
<!-- <Endpoint apiUrl="/v2.0/migrationProxy" path="/api​/v2.0​/users​/{AppUserId}​/cgu" method="post"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Users#post-/api/v2.0/users/-AppUserId-/cgu"
  label="Try it out"
/>
