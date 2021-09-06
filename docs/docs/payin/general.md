import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# General

<Image src="docs/usecase-exemple-00.jpg" alt="usecase 1"/>

---
<Highlight>

##### Note neutre

Any operation, per type, period,... on the user account can be retrieve within API.

</Highlight>
  
</Highlight>

<Highlight type="tip">

##### Tip

All Payin operatiosn are screened by our LAB/FT solution and can be rejected.

</Highlight>
---

Any user getting a Payin can be informed of the operation through a specialized CallBack.

## CallBack

Each type of Payin has its own callback providing details on the operation and the user account update.

## Endpoints

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

