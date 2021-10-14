import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Beneficiaries management

A beneficiary is a recipient of money transfer you want to make. It can be a person, a firm or even the state. 
All beneficiaries are constituted with a bank account reference and their name.

## Adding a beneficiary


Adding a beneficiary is necessary to make a money transfer.


<Image src="docs/BENEFICIARYMANAGEMENT.png" alt="usecase 1"/>


Retrieving a user beneficiaries list of a user is possible with the dedicated API.


<Highlight type="caution">

When a beneficiary is created, its IBAN is automatically checked and a transfer to it unlocked immediatly. Only SEPA and French overseas IBAN will be authorized.

</Highlight>

---

## Endpoints

You can add a beneficiary using this API :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/sca/v1.1/users/{appuserid}/bankaccounts" method="post"/>

You can retrieve the list of a user beneficiaries here :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v2.0/beneficiaries?userId={userid}&beneficiaryId={id}" method="get"/>

More information regarding this endpoint in the [API reference.](/api/Core)

