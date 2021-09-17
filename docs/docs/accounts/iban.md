import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# IBAN

The IBAN (International Bank Account Number) is the unique identifier of the User Account.  
The IBAN uniquely identifies an individual account, at a specific financial institution, in a particular country. 

Depending on your contract with us, you will be provided of a Xpollens IBAN or an IBAN based on your bank identification number.

<Highlight>

##### Note neutre

Once a user is created, you will ask for an account creation and will recieve an IBAN .

</Highlight>

<Highlight type="tip">

##### Tip
IBAN is the ISO 13616 international standard for numbering bank accounts.
Many information on IBAN from European Central Bank can be found here : 
https://www.ecb.europa.eu/paym/integration/retail/sepa/iban/html/index.en.html


</Highlight>

<Highlight type="caution">

##### Caution

Carefull, IBAN length are depending on countries. For France, the IBAN is up to 27.

</Highlight>

<Highlight type="danger">

##### Danger

Also, french overseas territories have IBAN with FR but not all. You can have : GF, GP, MQ, RE, PF, TF, YT, NC, BL, MF 
(French part), PM, WF

</Highlight>

---

## Endpoints

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.



More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
