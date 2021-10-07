import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Beneficiaries Management

<Highlight>

Adding of a beneficiary is necessary to ask for money transfer.

</Highlight>

<Image src="docs/BENEFICIARYMANAGEMENT.png" alt="usecase 1"/>

<Highlight type="tip">

Retrieving beneficiaries list of a user is available within API.

</Highlight>

<Highlight type="caution">

IBAN format is checked when adding beneficiary and tranfer to the beneficiary is avalaible with no delay. Only SEPA IBAN will be authorized (and French overseas).

</Highlight>

---

## Endpoints

You can add a beneficiary using this API :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/sca/v1.1/users/{appuserid}/bankaccounts" method="post"/>

You can retrieve the list of a user beneficiaries here :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v2.0/beneficiaries?userId={userid}&beneficiaryId={id}" method="get"/>

More information regarding this endpoint in the [API reference](/api/Core)


<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
