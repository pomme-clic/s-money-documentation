import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'





# Know your customer




## Context

### Regulatory context

All banks are subject to a number of regulations concerning customer onboarding ; Banking-as-a-Service does not escape this rule. We manage this compliance for you : our **Onboarding API** webservice embeds the required Identity Verification service as well as all other regulatory requirements.

<Image src="docs/KYC-regulatory-context.png" alt="usecase 1"/>

Many tasks are performed by our Operational Teams : FICOBA declarations, ACPR reporting, Anti-Monney Laundering checks, Fighting Terrorism, Identity Fraud surveillance, etc. In the unlikely event your prospect raises a flag, our teams will perform adequate actions within a limited timeframe. All intermediate steps will be visible to you in the callbacks.

<Highlight type="tip">
  Regularly check our webhooks & received callbacks to ensure proper communication to your end-customers.
</Highlight>

### Technical context & customer experience

To integrate our solution, you will need both our API and our SDK : part of the onboarding process has to take place in a mobile application.

<Image src="docs/KYC-screens.png" alt="usecase 1"/>

<Highlight>
If you do not have a mobile app : no problem, we have an app for you: <b class="term">Xpollens Authenticator</b> integrates the SDK and can fits perfectly in your onboarding process.
</Highlight>

<Highlight type="tip">
  You define the unique identifier of your prospect : the <b class="term">appUserId</b> ; our callbacks will use this same identifier.
</Highlight>

### Our modular KYC process

Creating a prospect requires one initial step followed by five to six verifications steps that can be set in whatever order you prefer. Arange your onboarding wireframe in the way that suits you best, and call our appropriate endpoints in whatever order you prefer : account will be opened only when all steps are clear.

<Image src="docs/KYC-process.png" alt="usecase 1"/>

<br/>
Once you assemble the modules in the process you like best, you will want to track statuses of your onboarding. Here are the status diagrams that will help you communicate appropriately to your end customers :

<Image src="docs/KYC-statuses-diagram.png" alt="usecase 1"/>

<br/>

## Simple Plug & Play endpoints

We offer a simple **plug'n'play** webservice giving multiple call-backs so you can easily track your prospect every step of the way.

> Use this feature to identify any relevant individual, from your prospects to your employees or mandated executives.

<Image src="docs/KYC-retail.png" alt="usecase 1"/>

Our onboarding API embeds an Identity Verification Service. We offer a modular approach for verifying the identity of your prospects, where you can select which technological option fits best your needs :
  
### Option 1: facial recognition

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

### Option 2: SEPA Instant Credit Transfer IN (SCT Inst)

In this option, an IBAN is booked for your end-customer, onto which he/she can send money. Our algorithm performs the required identity-checks to ensure proper identity confirmation, and then automatically opens the account.

<Highlight>
  This option is compatible with traditionnal 48 hours SEPA SCT IN as well.
</Highlight>

<Highlight type="tip">
  We can also provide a Payment Initiation Service Provider (PISP), which can significantly reduce onboarding TLT as well as create a wow-effect. Should you be interested, ask our Sales team.
</Highlight>

<Highlight type="caution">
  Accounts are setup with limits. Should incoming transfers be above limits, transfers will be rejected. Identity-check will not be performed if transfer is rejected.
</Highlight>

### OPTION 3: Coming soon...

More to come : We're working hard to find more options for you, always with the best Customer Experience in mind and Straight Through processing. Stay tuned !


## SDK features

Part of the on-boarding process happens on a mobile app ; our solution is **omnichannel**, so don't worry. Here are the functions you need to integrate in our SDK to make the onboarding process work. Please note that security features are managed using a security-wallet that is constructed specifically for your end-user, on his/her mobile phone, inside his/her mobile app.

Here are the steps your mobile application should follow when it's launched by an end-user :

<details>
    <summary>1. LOADING: Check proper binding of the user's security-wallet.</summary>
        <div>When your app opens, your code must check if a security-wallet is binded to the user's phone or not. This step is important to determine if it's a first download process or not. Please note that Xpollens has already created a security wallet for your end user. No need to create one.</div><br/>
</details>
<details>
    <summary>2. PROVISIONNING: If no security wallet is binded, check identity and bind one.</summary>
        <div>This binding is performed by using the Activation Code and the Identification Webview URL.
          - Scan QR Code
          - Define Secret Code
          - Check Identity using webview
        </div><br/>
</details>
<details>
    <summary>3. MAIN: If security wallet is binded to phone, open home screen.</summary>
        <div>Your main screen can open up.</div>
</details>
<br/>

<Highlight type="tip">
  If you do not have a mobile app, we can provide your customers with <b class="term">Xpollens Authenticator</b>.
</Highlight>

### Loading: Check security-wallet's state

Once a new user downloads your mobile application, you will need to check if his/her app is already securely binded or not. This can be achieved by looking at the ```state```  property of the security wallet. More info regarding this feature in the [SDK documentation](https://doc.antelop-solutions.com/latest/wallet/sdk/wallet_management.html).

The SDK feature you can use to check the wallet State is the ``` walletManager.connect() ```.

### Loading: Check device elligibility

If the wallet ``` State ``` is ``` onProvisioningRequired ``` then an initializing is required. If not, then you can skip very step and go directly to your Home Page. More info regarding this feature in the [SDK documentation](https://doc.antelop-solutions.com/latest/wallet/general/getting-started.html).

The SDK feature to initialize the device binding is ``` walletProvisioning.initialize() ```.

### Loading: Obtain access to both webcams of the smartphone

The app will require accessing both webcams, for scanning QR Code and Identity documentation, and possibly for performing a selfie. Please refer to Apple & Google Coding Rulebooks.

### Provisionning: Input Activation Code

You will then need to match this user with the user you already know. This can be done via the ``` PROVISIONNING BLOCK ``` of our SDK, using our **Activation Code**, handed to you in our **Callback Type 35**. If your customer is moving from laptop to smartphone, the **Activation Code** obtained on the laptop can be transformed into a QR Code, which can then be scanned from the smartphone. This should happen quite early in your process, as it will secure your mobile app and ensure we can contact your customer by push-notifications.

The SDK feature you are looking for to trigger the security-wallet and start the device-binding is the ``` walletProvisioning.launch( activationCode ) ```.

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
> - Make sure you request proper access to both front & back cameras : Scanning QR Code requires camera, and Identification Webview requires selfie camera.
> - Code depends on OS. Please refer to full documentation (requires an NDA to be signed), thank you for your understanding.
> 


### Provisionning: Secret code

This screen is automatically prompted by our SDK whenever you trigger the binding of a new security-wallet on the device. It currently contains 5 digits, and it is not stored anywhere but the user's device.

### Provisionning: Get webview URL

This step is performed by prompting the webview inside your screen. This webview's URL can be obtained using the ``` getIssuerData() ``` feature of our SDK.

Example:
```
https://pad-staging.api-ot.com/api/v2/static/dist/index.html?technicalId=DC0A9829DF8D544A581292D8CE6C4C48FCEC14A07DDD4F0C8A1B9CFD8487711CB7A49C47047521DF3C9967215B5D7937310E26743193A7D5431AB2DA9A27AFE4&token=J5Ti9Y9p
```

To then show this webview to your end-user, you must iframe it in your app, allowing access to both cameras, and also allowing fullscreen.

Example:
```
<iframe src="https://pad-staging.api-ot.com/api/v2/static/dist/index.html?technicalId=DC0A9829DF8D544A581292D8CE6C4C48FCEC14A07DDD4F0C8A1B9CFD8487711CB7A49C47047521DF3C9967215B5D7937310E26743193A7D5431AB2DA9A27AFE4&token=J5Ti9Y9p"  allow="camera;fullscreen" allowfullscreen="true" style="width: 100vw; height: 100vh;" frameborder="0"></iframe>
```


### Main: Close webview URL

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

### Main: Home Page

You can finally navigate to your app's Home Page.


## API endpoints

Here are the webservices you need to integrate in our API Gateway to properly operate the onboarding process.

>
> **Example of a straight-through onboarding process**
> 
> 1. POST api/v1.1/users/{appUserId}  &nbsp;&nbsp;&nbsp; _this will create the prospect_
> 2. POST api/v2.0/users/{appUserId}/declarative  &nbsp;&nbsp;&nbsp; _this update specific data of the prospect_
> 3. PATCH api/v2.1/user/{appUserId}/fatcaEai  &nbsp;&nbsp;&nbsp; _this will update the required tax information of the prospect ; an SCA will be automatically triggred_
> 4. POST api/v2.0/users/{appUserId}/cgu  &nbsp;&nbsp;&nbsp; _this will log the timestamp of user's acceptance of T&Cs ; an SCA will be automatically triggred_
> 

### POST User (Create)

Most information is updatable for as long as user is a **prospect**, except for critical identification data. As soon as KYC is validated, some of her/his data will be locked or subject to adequate justification.
More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v2.0/user.usermanagment" path="/api/v2.0/users" method="post"/>

<br/>
Once you create a ```User```, you should start looking up for the following callbacks:

- **Callback type 34** will give you the overall status of the onboarding of your end user.

```json
"Payload": {
      "type": "34",
      "appUserid": "z32er24f4",
      "publicUserCode": "1234der14ft2",
      "userRecordStatus": "InProgress"
}
```

> 
> The ```publicUserCode``` will be useful when you will need to manipulate encrypted payloads (such as PIN or PAN). Please refer to this section if you want to learn more.
> 

<br/>

- **Callback type 4** will give you detailed information on each diligence happening during the KYC of your end user.

```json
"Payload": {
      "type": "4",
      "status": "Incomplete",
      "appUserId": "559d7e85J",
      "diligences": [{
          "reason": "",
          "diligenceType": "ID_CARD",
          "status": "Validated"
          }]
 }
```

<br/>

- **Callback type 35** will give your the ```ActivationCode``` required to bind securely your end-user's device:

```json
"Payload": {
        "type": "35",
        "AppUserId": "e87bd13dJ",
        "ActivationCode": "f825f1646665490aa7ef7942c6f2f159",
        "ErrorMessage": null
        }
```

<Cta
  context="doc"
  ui="button"
  link="/api/Core#post-/api/v1.1/users"
  label="Try it out"
/>

### GET User (Read)

This endpoint allows you to read the data you have sent.
More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users" method="get"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Core#get-/api/v1.1/users"
  label="Try it out"
/>

### PUT User (Update)

Some information is updatable without any constraint, for as long as user is a **prospect**. As soon as KYC is validated, some of her/his data will be locked. Identification data is locked once inputed, unless a specific update process is performed, involving some justification.
More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v2.0/user.usermanagment" path="/api/v2.0/users/{AppUserId}/declarative" method="post"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Users#put-/api/v2.0/users/-AppUserId-/declarative"
  label="Try it out"
/>

### DELETE User (Delete)

This action is not possible.
More information regarding this endpoint in the [API reference.](/api/Core)

<Highlight>
Purge of all prospects is performed after 90 days. All webview links and QR Codes will expire after this duration, and personal data will be removed.
</Highlight>

### PATCH FatcaEai

Use this endpoint to transmit to Xpollens the required tax information from your end user.
More information regarding this endpoint in the [API reference.](/api/Compliance)

<Highlight>
This will trigger a Strong Authentication notification to your end-user.
</Highlight>

<Endpoint apiUrl="/v2.1/compliance" path="/api/v2.1/user/{appUserId}/fatcaEai" method="patch"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Compliance#patch-/api/v1.1/user/-appUserId-/fatcaEai"
  label="Try it out"
/>

### POST CGU

Use this endpoint to inform Xpollens that your prospect has accepted Terms & Conditions of the Payment Services you are offering thanks to Xpollens.
More information regarding this endpoint in the [API reference.](/api/Users)

<Highlight>
This will trigger a Strong Authentication notification to your end-user.
</Highlight>

<Endpoint apiUrl="/v2.0/user.usermanagment" path="/api/v2.0/users/{AppUserId}/cgu" method="post"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Users#post-/api/v2.0/users/-AppUserId-/cgu"
  label="Try it out"
/>
