import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Beneficiaries

<Image src="docs/usecase-exemple-00.jpg" alt="usecase 1"/>

<Highlight>

##### Note neutre

Adding a beneficiary is necessary to ask for money transfer 

</Highlight>

<Highlight type="tip">

##### Tip

Retrieving beneficiaries list of a user is available within API  

</Highlight>

<Highlight type="caution">

##### Caution

IBAN format is checked when adding beneficiary and tranfer to the beneficiary is avalaible with no delay

</Highlight>

---

## Endpoints

More information regarding this endpoint in the [API reference](/api/api1)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/api1"
  label="Try it out"
/>
