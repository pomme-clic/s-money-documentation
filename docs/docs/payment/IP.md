import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# SEPA and instant payment

## SEPA zone

<Highlight>

The SEPA region consists of 36 European countries, including several countries which are not part of the euro area or the European Union. Also are included all French Overseas areas. More information here : https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html

</Highlight>

<Highlight type="tip">

If you want to define recurring transfer or plan a transfer you can just use the same API with additional informations.

</Highlight>

<Highlight type="caution">

To make a transfer, the beneficiary has to exist in the system.

</Highlight>

<Highlight type="danger">

SEPA transfer can be refused due to the user thresholds.

</Highlight>

---

## SCT transfer

SCT transfer is used to send money to a beneficiary defined by an IBAN. You can also define recurring SCT, plan them, ask for refund.

<Image src="docs/SEPA OUT_EN.png" alt="usecase 1"/>

## Endpoints

You must use the SCT API in including amount and beneficiary's ID

More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/sct" method="post"/>

## Instant payment

Instant transfer is used to send money within seconds to a beneficiary defined by an IBAN and eligible. You can also ask for the list of instant transfer for a user on a period of time.

<Image src="docs/IP OUT_EN.png" alt="usecase 1"/>

<Highlight>

The SEPA instant payment can be used in EUR only. The transfer is done within seconds.
  
</Highlight>

<Highlight type="tip">

Up to 90% of french banks can receive instant payment. In EURO Zone, this proportion is lower.

</Highlight>

<Highlight type="caution">

To make a transfer, the beneficiary has to exist in the system and must be elligible to Instant Payment.

</Highlight>

<Highlight type="danger">

Instant transfer can be refused due to the user thresholds.

</Highlight>

---

## Endpoints

You must use the Instant Payment API in including amount and beneficiary's ID

More information regarding this endpoint in the [API reference.](/api/SCTinst)

<Endpoint apiUrl="/v2.0/Transfers.InstantPayment" path="/api/v2.0/users/{AppUserId}/sctinst" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v2.0/users/{userid}/cards/{id}" method="delete"/> -->

---
## Recall

For both Payment and instant payment, all the recall operation are available :

- Recall SCT OUT et IP OUT : in case you as partner would like to recall SCT or IP out (you have 10 days..).
- RFRO SCT OUT et IP OUT : in case a user would like to recall SCT or IP out (wrong amount, wrong beneficiary,..) (the user has 13 months).
- Recall/RFRO SCT IN / IP : the user might have receive a payment but the sender can contest the sending up to 13 months after.

These recall features are not available through API but soon. Nevertheless you will be informed of recall operations through callbacks.

<Highlight type="danger">

The recall feature may create client debt that will need to be covered by you as partner.

</Highlight>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v2.0/users/{userid}/cards/{id}" method="delete"/> -->

---



<Cta
  context="doc"
  ui="button"
  link="/api/SCTInst"
  label="Try it out"
/>
