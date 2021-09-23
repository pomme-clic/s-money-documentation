import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Unpaid Operations

<Highlight>

In some case of transaction, the account balance might not be sufficiant, for example when an offline Card transaction or a Payin contestation (money might be spent..).
We propose a unpaid mechanism to ensure payment of this kind of operation.

</Highlight>

<Highlight type="tip">

The mechanism is based on automated P2P that create debt on the customer account and  ability for Client to recover the money.

</Highlight>


<Highlight type="danger">

Even if it is rare case, you, as client, will have to cover and recover your client debt. But do not worry all the necessay API are available.

</Highlight>

---

## Endpoints

Within our Debt API you will be able to manage your client debt follow-up and recovery.


More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
