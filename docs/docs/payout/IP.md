import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Instant transfer

<Image src="docs/usecase-exemple-00.jpg" alt="usecase 1"/>

<Highlight>

##### Note neutre

The SEPA instant payment can be used in EUR only. The transfer is done within seconds.
  
</Highlight>

<Highlight type="tip">

##### Tip

Up to 90% of french banks can receive instant payment. In EURO Zone, this proportion is lower.

</Highlight>

<Highlight type="caution">

##### Caution

To make a transfer, the beneficiary has to exist in the system and must be elligible to Instant Payment.

</Highlight>

<Highlight type="danger">

##### Danger
Instant transfer can be refused due to the user thresholds.

</Highlight>

---

## Instant transfer

Instant transfer is used to send money within seconds to a beneficiary defined by an IBAN and elligible. You can also ask for the list of instant transfer for a user on a period of time.

## Endpoints

You must use the Instant Payment API in including amount and beneficiary's ID

More information regarding this endpoint in the [API reference](/api/api1)

<Endpoint apiUrl="/v2.0/migrationProxy" path="/api​/v2.0​/users​/sctinst" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v2.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/api1"
  label="Try it out"
/>
