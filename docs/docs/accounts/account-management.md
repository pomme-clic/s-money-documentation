import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Account Management 

## IBAN

The IBAN (International Bank Account Number) is the unique identifier of the User Account.  
The IBAN uniquely identifies an individual account, at a specific financial institution, in a particular country. 

Depending on your contract with us, you will be provided of a Xpollens IBAN or an IBAN based on your bank identification number.

<Highlight>

Once a user is created, you will ask for an account creation and will recieve an IBAN .

</Highlight>

<Highlight type="tip">

IBAN is the ISO 13616 international standard for numbering bank accounts.
Many information on IBAN from European Central Bank can be found here : 
https://www.ecb.europa.eu/paym/integration/retail/sepa/iban/html/index.en.html


</Highlight>

<Highlight type="caution">

Carefull, IBAN length are depending on countries. For France, the IBAN is up to 27.

</Highlight>

<Highlight type="danger">

Also, french overseas territories have IBAN with FR but not all. You can have : GF, GP, MQ, RE, PF, TF, YT, NC, BL, MF 
(French part), PM, WF

</Highlight>

---

## Account Management

<Highlight>

All the xpollens accounts have IBAN. It can be your own (if you have agreement) or an Xpollens one. For more information, contact our sales team.

</Highlight>

<Highlight type="tip">

We propose individual but also professional accounts.  All of the account we provide are in Euro but soon available in many other currencies.

</Highlight>

<Highlight type="tip">

 Our API gives the ability to get the balance, transactions of an account and to set it up (limition of Payin, Pay out, per period,..)

</Highlight>

---


More information regarding this endpoint in the [API reference](/api/Core)

You can Set Up the account limitation here : 

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/limits" method="put"/>

You can retrieve the account balance here :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{appUserId}/balancel" method="get"/>

---

## Balance Management

<Highlight>

Base on your customer risk management you can allow cutomer to spend more than its customer balance.

</Highlight>

<Highlight type="caution">

The additional balance will be automatically covered by you as a partner... 
 
</Highlight>

You can Set Up an addtional balance here : 

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/additionalBalance" method="put"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>


