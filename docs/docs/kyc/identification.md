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

<Highlight>
The Second Payment Services EU Directive (PSD2) requires that such a strong authentication happens, reuniting two criteras amongst three possible.
</Highlight>

<Image src="docs/SCA-regulatory-context.png" alt="usecase 1"/>

### Technical Context

To integrate our solution, you will  our SDK : strong authentication has to take place in a mobile application.

<Image src="docs/SCA-screens.png" alt="usecase 1"/>

<Highlight>
  Should you not have a mobile app : no problem, we have an app for you: <b class="term">Xpollens Authenticator</b> integrates the SDK and can handles strong authentication notifications.
</Highlight>

<Highlight type="tip">
  You define the technical unique identifier of your prospect : the <b class="term">appUserId</b> ; our call-backs will use this same identifier.
</Highlight>

## Straight Through Process

We offer a simple **plug'n'play** webservice giving multiple call-backs so you can easily track your prospect every step of the way.

> Use this feature to identify any relevant individual, from your prospects to your employees or mandated executives.

<Image src="docs/KYC-retail.png" alt="usecase 1"/>

Our onboarding API embeds an Identity Verification Service. We offer a modular approach for verifying the identity of your prospects, where you can select which technological option fits best your needs :


<Highlight type="tip">
If you do not have your own mobile application, we can provide one for you : <b class="term">Xpollens Authenticator</b>. This app will handle both the identification process during KYC, and the strong authentication of any sensitive operation or online purchase that will occur on your customer's account.
</Highlight>

#### Xpollens Authenticator app
<figure class="video_container">
  <iframe src="https://youtu.be/ovGkP9y40NY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>



​/api​/v2.0​/users​/{AppUserId}​/sctinst
<Image src="docs/KYC-regulatory-context.png" alt="usecase 1"/>

Many tasks are performed by our Operational Teams : FICOBA declarations, ACPR reporting, Anti-Monney Laundering checks, Fighting Terrorism, Identity Fraud surveillance, etc. In the unlikely event your prospect raises a flag, our teams will perform adequate actions within 48 hours. All intermediate steps will be visible to you in the call-backs.

<Highlight type="tip">
  Regularly check our webhooks & call-backs to ensure proper communication to your end-customers.
</Highlight>
