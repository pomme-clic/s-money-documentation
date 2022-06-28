import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# SEPA and instant payment

## SEPA zone


The SEPA region consists of 36 European countries, including several countries which are not part of the euro area or the European Union. Also are included all French Overseas areas. More information here : https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html


Two protocols are being used on this system to wire money : SCT and instant SCT.
SCT stands for Sepa Credit Transfer and exists since the creation of the Euro.


Instant SCT is an improved version of the existing SCT that has been launched in 2018.
It comes with a few limitations : 
- Euro only
- Maximal amount for the wire transfer : 100 000 €
- Execution delay : 10 seconds maximum
- Immediate credit 
- Irrevocable
- No service interruption (operations can be processed all week)



---

## SCT transfer

SCT transfer is used to send money to a beneficiary defined by an IBAN. You can also define recurring SCT, plan them and ask for a its refund.

<Image src="docs/SCA-SCTOUT.png" alt="usecase 1"/>


<Highlight type="tip">

If you want to define recurring transfer or plan a transfer you can just use the same API with additional informations.

</Highlight>

<Highlight type="caution">

To make a transfer, the beneficiary has to exist in the system.

</Highlight>

<Highlight type="danger">

SEPA transfer can be refused due to user account thresholds.

</Highlight>
## Endpoints

You must use the SCT API that includes amount and beneficiary ID.

More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/sct" method="post"/>

## Instant payment

Instant transfer is used to send money within seconds to a beneficiary with an eligible IBAN. You can also ask for the list of instant transfer for a user on a period of time.

<Image src="docs/IP_OUT_EN.png" alt="usecase 1"/>

<Highlight>

The SEPA instant payment can be used in EUR only. The transfer is done within seconds.
  
</Highlight>

<Highlight type="tip">

Up to 90% of French banks can receive instant payments. In EURO Zone, this proportion is lower.

</Highlight>

<Highlight type="caution">

To make a transfer, the beneficiary has to exist in the system and must be eligible to the SEPA Instant Credit Transfer method.

</Highlight>

<Highlight type="danger">

Instant transfer can be refused due to the user thresholds.

</Highlight>

---

## Endpoints

You must use the Instant Payment API that includes amount and the beneficiary ID to send Instant Payment.

More information regarding this endpoint in the [API reference.](/api/SCTinst)

<Endpoint apiUrl="/v2.0/Transfers.InstantPayment" path="/api/v2.0/users/{AppUserId}/sctinst" method="post"/>

You can also have details of the received Instant Payment.

<Endpoint apiUrl="/v2.0/Transfers.InstantPayment" path="/api/v2.0/users/{AppUserId}/sctinst/{orderid}" method="get"/>

---
## Recall

For both SCT and instant SCT, all the recall operation are available :

- Recall SCT OUT et IP OUT : in case you as partner would like to recall a SCT or IP out (you have 10 days..).
- RFRO SCT OUT et IP OUT : in case a user would like to recall a SCT or IP out (wrong amount, wrong beneficiary,..) (the user has 13 months).
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
