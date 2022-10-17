import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Account management 

## What does IBAN mean ?

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
All the xpollens accounts come with an IBAN. It can be your own (if you have a financial agreement) or a Xpollens one. For more information, please contact our sales team.
</Highlight>

<Highlight type="tip">
We propose both individual and professional accounts.
All the accounts we provide are currently in Euro only. Other european currency will come soon, ask us for more details.
</Highlight>


 Our API offers the ability to manage all aspects of the account.
 From getting the balance of the account to set the different limits of transactions : you can adapt the account to your use cases.
 
More information regarding this endpoint in the [API reference.](/api/Core)

You can setup account limitations here : 

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/limits" method="put"/>

---

## Balance management

Based on your customer risk management you can sometimes allow customers to spend more than its customer balance.

<Highlight type="caution">

Please note that any additional balance will be automatically covered by you as partner. 
 
</Highlight>

You can setup an additional balance here : 

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/additionalBalance" method="put"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

---

## Closure management

You can ask for account closure following your customer request or if your customer doesn't, for example, follow your service rules.
In the first case the effective closure will take 30 days, in the second the closure will take 60 days.
For more details on how the operations will be managed during this period, do not hesitate to contact us.

<Highlight type="caution">

Please note that account closure can only be asked on null balance account (ie : the account owner might payout the remaining amount for its closing request to be agreed)
 
</Highlight>

You can view current account closures here : 

<Endpoint apiUrl="/v2.0/AccountManagement" path="/api/v2.0/accounts/{accountId}/AccountClosureRequest" method="get"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>


