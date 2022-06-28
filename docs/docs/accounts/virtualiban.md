import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Virtual IBAN

A Virtual Iban (VIBAN) is a secondary account identifier.  
The VIBAN is linked to an existing account identified by its IBAN and can be used to receive SEPA or Instant Payement from an external account in your account. 
The VIBAN can be used to mask and securize the original account IBAN or to identified the payment issuer or a payment.

In its first version, the Xpollens VIBAN feature will allow the creation of VIBANs, reception of funds on a VIBAN and identification of operation received on a VIBAN.

<Highlight>

Once you have an account and its IBAN, you can create as many VIBANs as you like. 
For example, you can supply dedicated account details to your customer and to better lettering your incoming payment in finding VIBAN into the operations details.

</Highlight>

<Highlight type="tip">

The VIBAN is an additional identifier for your account. Incoming payment will credit your account balance : There is no balance associated to VIBANs but you can list the payment received on your VIBAN. 

</Highlight>

---
## Virtual Iban creation and usage

As a product or service supplier, you can letter your client payment by supplying a VIBAN to each of your customer or for each payment. 
You will be soon able to parameter your VIBAN : activate/deactivate (payment will be agreed or rejected), associate an IBAN of the issuer (if you receive payment from another, payment will be rejected),...  please contact us for more information on our roadmap.

<Image src="docs/Account-Virtual-Iban.png" alt="usecase 1"/>

---

## Endpoints

You must use the Virtual Iban API to generate one or to retrieve the account information.

More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v2.0/virtual-ibans" path="/api/v2.0/virtual-ibans/{AccountId}" method="post"/>

<Endpoint apiUrl="/v2.0/virtual-ibans" path="/api/v2.0/virtual-ibans/{virtualIbanId}" method="get"/>

Soon, an API to get the operations received on a particular VIBAN.

VIBAN is available into the SEPA and Instant Payment operation details :

For instant Payment : <Endpoint apiUrl="/v2.0/users" path="/api/v2.0/users/{AppUserId}/sctinst/{orderid}" method="get"/>

For SEPA transfer :  <Endpoint apiUrl="/v2.0/users" path="/api/v2.0/users/{AppUserId}/sctinst/{orderid}" method="get"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
