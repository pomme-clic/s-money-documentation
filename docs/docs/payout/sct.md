import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# SEPA transfer

<Highlight>

##### Note neutre

The SEPA region consists of 36 European countries, including several countries which are not part of the euro area or the European Union. Also are included all French Overseas areas. More information here : https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html

</Highlight>

<Image src="docs/SEPA OUT_EN.png" alt="usecase 1"/>

<Highlight type="tip">

##### Tip

If you want to define recurring transfer or plan a transfer you can just use the same API with additional informations.

</Highlight>

<Highlight type="caution">

##### Caution

To make a transfer, the beneficiary has to exist in the system.

</Highlight>

<Highlight type="danger">

##### Danger
SEPA transfer can be refused due to the user thresholds.

</Highlight>

---

## SCT transfer

SCT transfer is used to send money to a beneficiary defined by an IBAN. You can also define recurring SCT, plan them, ask for refund.

## Endpoints

You must use the SCT API in including amount and beneficiary's ID

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
