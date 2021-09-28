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

### Sensitive Operations



### Xpollens Authenticator app

Should you need our on-the-shelf mobile application, it is ready for your end users.

<figure class="video_container">
  <iframe src="https://youtu.be/ovGkP9y40NY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

<Image src="docs/SCA-xpollens-authenticator.png" alt="usecase 1"/>


​/api​/v2.0​/users​/{AppUserId}​/sctinst

