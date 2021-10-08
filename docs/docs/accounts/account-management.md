import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Account management 

## What does IBAN means ?

The IBAN (International Bank Account Number) is the unique identifier of the User Account.  
The IBAN uniquely identifies an individual account, at a specific financial institution, in a particular country. 
IBAN is the ISO 13616 international standard for numbering bank accounts.
Many information on IBAN from European Central Bank can be found here : 
https://www.ecb.europa.eu/paym/integration/retail/sepa/iban/html/index.en.html


Once a user is created, an account can be created and will be attributed with an IBAN .


<Highlight type="caution">

IBAN length varies by country. For France, the IBAN is up to 27.
Also, french overseas territories have IBAN with FR but not all. 
You can also have these codes : GF, GP, MQ, RE, PF, TF, YT, NC, BL, MF(French part), PM and WF.

</Highlight>

---

## Account management

<Highlight>
All the xpollens accounts comes with an IBAN. It can be your own (if you have a financial agreement) or a Xpollens one. For more information, please contact our sales team.
</Highlight>

<Highlight type="tip">
We propose both individual and professional accounts.
All the accounts we provide are currently in Euro only.
</Highlight>


 Our API offers the ability to manage all aspects of the account.
 From getting the balance of the account to set the different limits of transactions, the API adapts to your use cases.
 
More information regarding this endpoint in the [API reference](/api/Core)

You can setup account limitations here : 

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/limits" method="put"/>

You can retrieve account balances here :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{appUserId}/balance" method="get"/>

---

## Operations management

You can access all your customer account operations but also your own account operations. 

You can find more here : 

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/historyitems" method="get"/>


---

## Balance management


Based on your customer risk management you can sometimes allow customer to spend more than its customer balance.


<Highlight type="caution">

Please note that any additional balance will be automatically covered by you as partner. 
 
</Highlight>

You can setup an addtional balance here : 

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/additionalBalance" method="put"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>


