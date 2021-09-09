import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Topup Card

<Image src="docs/usecase-exemple-00.jpg" alt="usecase 1"/>

<Highlight>

##### Note neutre

Money from Card Top Up will be available immediatly

</Highlight>

<Highlight type="tip">

##### Tip

Card Top Up is avalable with VISA and Mastercard but other payment methods will be available soon

</Highlight>

<Highlight type="caution">

##### Caution

Any Card Top Up will be secured within 3DS 

</Highlight>

---

## Endpoints

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
