import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Virtual IBAN

A Virtual Iban (VIBAN) is a secondary account identifier.  
The VIBAN is linked to an existing account identified by its IBAN and can be used to receive SEPA or Instant Payement from an external account in your account. 
The VIBAN can be used to mask and securize the original account IBAN or to identified the payment issuer or a payment.

In its first version, the Xpollens VIBAN feature will allow the creation of VIBANs, reception of funds through a VIBAN and identification of the operations received through a VIBAN.

<Image src="docs/Account-Virtual-Iban-scheme.png" alt="usecase 1"/>

<Highlight>

Once you have an account and its IBAN, you can create as many VIBANs as you like. 
You can then supply dedicated VIBAN to your stakeholders and letter easily their incoming payment in finding VIBAN into the operations details.

</Highlight>

<Highlight type="tip">

The VIBAN is an additional identifier for your account. Incoming payment will credit your account balance: there is no balance associated to VIBANs but you can list the payment received on your VIBAN. 

</Highlight>

---
## Virtual Iban creation and usage

As a product or service supplier, you can letter your client payment by supplying a VIBAN to each of your customer or for each payment. 
You will be soon able to parameter your VIBAN : activate/deactivate (payment will be agreed or rejected), associate an IBAN of the issuer (if you receive payment from another, payment will be rejected),...  please contact us for more information on our roadmap.

<Image src="docs/Account-Virtual-Iban.png" alt="usecase 1"/>

---

## Endpoints

You must use the Virtual Iban API to generate one or to retrieve the account information and then the operations detail API to know who sends you a payment.

Obtain a VIBAN and its ID by using the following End Point :

<Endpoint apiUrl="/v2.0/virtual-ibans" path="/api/v2.0/virtual-ibans/{AccountId}" method="post"/>

Retrieve the account informations of a defined VIBAN ID.

<Endpoint apiUrl="/v2.0/virtual-ibans" path="/api/v2.0/virtual-ibans/{virtualIbanId}" method="get"/>

Soon, an API to get the operations received on a particular VIBAN ID.


To know who sends you a payment and why, the VIBAN ID is available into the SEPA and Instant Payment operation details :

For instant Payment : <Endpoint apiUrl="/v2.0/Transfers.InstantPayment" path="/api/v2.0/users/{AppUserId}/sctinst/{orderid}" method="get"/>

For SEPA transfer :  <Endpoint apiUrl="/v1.1/users" path="/api/v1.1/users/{AppUserId}/sct/{orderid}" method="get"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
