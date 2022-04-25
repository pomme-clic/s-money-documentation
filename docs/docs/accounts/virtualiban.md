import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Virtual IBAN

A Virtual Iban (VIBAN) is a secondary account identifier.  
The VIBAN is linked to an existing account and can be used to receive or send payments from an existing account. 
The VIBAN can be used to mask the original account IBAN.

In its first version, the Xpollens VIBAN feature will allow creation of VIBANs, reception and sending of funds from VIBANs.

<Highlight>

Once you have an account and its IBAN, you can create as many VIBANs as you like. 
For example, to supply dedicated account details to your customer and to better lettering your incoming payment. 

</Highlight>

<Highlight type="tip">

The VIBAN is an additional identifier for your account. Incoming and outgoing payment will credit or debit your account : there is no account balance associated to VIBANs. 

</Highlight>

---
## Virtual Iban creation and utilization

As a product or service supplier, you can letter your client payment in supplying a VIBAN to each of your customer or for each payment.

<Image src="docs/Account-Virtual-Iban.png" alt="usecase 1"/>

---

## Endpoints


API definition coming soon

More information regarding this endpoint in the [API reference](/api/Core)

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
