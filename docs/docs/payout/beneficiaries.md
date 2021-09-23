import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Beneficiaries

<Image src="docs/beneficiary management.png" alt="usecase 1"/>

<Highlight>

Adding of a beneficiary is necessary to ask for money transfer 

</Highlight>

<Highlight type="tip">

Retrieving beneficiaries list of a user is available within API  

</Highlight>

<Highlight type="caution">

IBAN format is checked when adding beneficiary and tranfer to the beneficiary is avalaible with no delay

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
