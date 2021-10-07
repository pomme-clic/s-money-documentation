import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# P2P and Client Debt

## P2P



<Highlight>

P2P is a way to transfer money from a customer to another. The transfer is made immediatly

</Highlight>

<Image src="docs/P2P.png" alt="usecase 1"/>

<Highlight type="tip">

Specialized P2P are also available for customer billing. Billing can be done one by one or a mass P2P can be done also (ask our commercial team)

</Highlight>

<Highlight type="caution">

Different option of the P2P can be used when issued by the partner for example in case if billing : no account limitation verification, this option may create a cutomer debt if the balance is not sufficiant.

</Highlight>

## Endpoints

Within our P2P API you will be able to transfer money immediatly to another customer or to your commission account.

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/payments" method="post"/>

More information regarding this endpoint in the [API reference](/api/Core)

---
## Client Debt

<Highlight>

In some case of transaction, the account balance might not be sufficiant, for example when an offline Card transaction or a Payin contestation (money might be spent..).
We propose a unpaid mechanism to ensure payment of this kind of operation.

</Highlight>

<Image src="docs/Debt.png" alt="usecase 1"/>

<Highlight type="tip">

The mechanism is based on automated P2P that create debt on the customer account and  ability for Client to recover the money.

</Highlight>


<Highlight type="danger">

Even if it is rare case, you, as client, will have to cover and recover your client debt. But do not worry all the necessay API are available.

</Highlight>

---

## Endpoints

Within our Debt API you will be able to manage your client debt follow-up and recovery.

To retrieve the customer debt :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/clientdebts" method="get"/>

Once you recover modify the customer debt :
  
- The remaining amount :
 
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/clientdebts/{orderid}/remainingdebtamount" method="get"/> 

- The remaining status :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/clientdebts/{orderid}/status" method="get"/> 


More information regarding this endpoint in the [API reference](/api/Core)

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
