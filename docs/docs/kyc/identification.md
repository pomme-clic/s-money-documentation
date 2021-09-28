import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'





# Authentication 





## Context

### Regulatory Context

Authentication is required for your end-customers if you are on the Retail B2C market ; it is also required for all key individuals of your professional customers, if you are on the Corporates B2B market. Strong Customer Authentication will occur in two situations :

> - Online Card Payments
> - Sensitive Operations

<br/>
<Highlight>
The Second Payment Services EU Directive (PSD2) requires that such a strong authentication happens, reuniting two criteras amongst three possible.
</Highlight>

<Image src="docs/SCA-regulatory-context.png" alt="usecase 1"/>

### Technical Context & Customer Experience

To integrate our solution, you will require our SDK : strong authentication has to take place in a mobile application.

<Image src="docs/SCA-screens.png" alt="usecase 1"/>

<Highlight type="tip">
  Should you not have a mobile app : no problem, we have an app for you: <b class="term">Xpollens Authenticator</b> integrates the SDK and can handles strong authentication notifications.
</Highlight>

Here is a list of main Sensitive Operations. This is list is not exhaustive and may be subject to change.

<Image src="docs/SCA-sensitive-operations.png" alt="usecase 1"/>




## SCA compliant by Design

Just plug to our API and we ensure compliance with PSD2 : if the operation is sensitive, your end user will receive a push notification in your mobile app. Execution of the sensitive operation will be conditionned by the proper strong authentication of your end user.

> If more than one person has mandate over the payment account, by default only the person initiating the operation will be notified.

<Image src="docs/SCA-flowchart-virement.png" alt="usecase 1"/>

### Sensitive Operations & SDK integration

You may call the SCT Inst endpoint, for example. By triggering such a sensitive operation, you will generate a push notification onto your end user's smartphone : our back-end will find your end user's mobile application (if it has been securely binded during KYC), and trigger the **authentication request**.

Therefore, in your mobile application, you must code the reception of such notifications. Here is the ```RAW_LIST``` format you will receive:
```json
{
  "notificationMessage": "Une opération sensible requiert votre validation",
  "message": "Opération sensible à confirmer",
   "format":"RAW_LIST"
   "data":[
      {"title": "Opération \n ", "value":"Virement"},
      {"title": "Date \n ", "value": "13/01/2021"},
      {"title": "Montant \n ", "value": "15,00 €"},
      {"title": "Bénéficiaire \n ", "value": "Sylvie"}
   ]
}
```

<Endpoint apiUrl="/v2.0/migrationProxy" path="​/api​/v2.0​/users​/{AppUserId}​/sctinst" method="post"/>

<!-- https://api.xpollens.com/swagger/index.html?urls.primaryName=User%20%26%20Usermanagment%20API%20-%20v2.0#/User/post_api_v2_0_users__AppUserId__cgu -->
<!-- <Endpoint apiUrl="/v2.0/migrationProxy" path="​/api​/v2.0​/users​/{AppUserId}​/sctinst" method="post"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>

### Internet Payment  & SDK integration

This feature is already embeded in the Xpollens API plateform. Whenever your customer will use her/his card to pay online, a push notification will be sent onto her/his phone in the same manner as above.

You must code the reception of such notifications. Here is the ```PURCHASE``` format you will receive:
```json
{
  "notificationMessage": "Une opération sensible requiert votre validation",
  "message": "Paiement en ligne à confirmer",
  "format":"PURCHASE",
  "amount":"74,12 €",
  "merchant":"WWW.OUI.SNCF"
}
```

## Xpollens Authenticator app

Should you need our on-the-shelf mobile application, it is ready for your end users, accessible in the **Apple Store** and **Google Play Store**.

<Image src="docs/SCA-xpollens-authenticator.png" alt="usecase 1"/>
</br>
<iframe width="675" height="380" src="https://youtu.be/ovGkP9y40NY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

