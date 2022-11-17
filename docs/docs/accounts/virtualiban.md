import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Virtual IBAN

A Virtual Iban (VIBAN) is a secondary account identifier. It follows all rules of the IBAN definition and has the same caracteristics of a classic IBAN (country code, bank code, branch code).
The VIBAN is linked to a main account and is identified by its own IBAN and can be used to receive incoming SEPA or Instant Payments. 
The VIBAN can also be used to mask and secure the original account IBAN (your creditor does not know your main IBAN) or to identify the payment issuer.

For now, the Xpollens VIBAN feature will allow the creation of VIBANs, reception of funds through a VIBAN and identification of the operations received through a VIBAN.

<Image src="docs/Account-Virtual-Iban-scheme.png" alt="usecase 1"/>

<Highlight>

Once you have an account, you can create as many VIBANs as you like. 
You can then supply dedicated VIBANs to your stakeholders and easily letter incoming payments by finding VIBAN into the operations details.

</Highlight>

<Highlight type="tip">

The VIBAN is an additional identifier for your account. Incoming payment will credit your account balance: there is no balance associated to VIBANs but you can list the payment received on your VIBAN. 

</Highlight>

---
## Virtual Iban creation and usage

As a product or service supplier, you can letter your client payments by supplying a VIBAN to each of your customer or for each payment. 
You will soon be able to parameter your VIBAN : activation/deactivation (payment will be agreed on or rejected), associate an IBAN with an issuer (if you receive payment from another, payment will be rejected),...  please contact us for more information on the dedicated roadmap.

<Image src="docs/Account-Virtual-Iban.png" alt="usecase 1"/>

---

## Endpoints

You must use the Virtual Iban API to generate one or to retrieve the account information and then the operations details API to know who sends you a payment.

Obtain a VIBAN and its ID by using the following endpoint :

<Endpoint apiUrl="/v2.0/AccountManagement" path="/api/v2.0/virtual-ibans" method="post"/>

Retrieve the account informations of a defined VIBAN ID :

<Endpoint apiUrl="/v2.0/AccountManagement" path="/api/v2.0/virtual-ibans/{virtualIbanId}" method="get"/>



To know who sends you a payment, the VIBAN ID is available into the SEPA and Instant Payment operation details :

For instant Payment : <Endpoint apiUrl="/v2.0/Transfers.InstantPayment" path="/api/v2.0/users/{AppUserId}/sctinst/{orderid}" method="get"/>

For SEPA transfer :  <Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/sct" method="get"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
