import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Debt Management

## Client debt

<Highlight>

In some cases of transaction, the account balance might not be sufficient, for example when an offline Card transaction or a payin contestation (money might be spent...).
We propose a debt management mechanism to ensure payment of this kind of operation.

</Highlight>

<Highlight type="tip">

The mechanism is based on automated P2P (see [here](docs/payments/P2P) that creates debt on the customer account and the ability for the Client to recover the missing amount.
Debt could be created following many operation types : an Offline Card operation, a P2P billing, a contestation after a Card Top Up, after a SCT IN recall, an ATM withdrawal in currency.

</Highlight>

Here is the example of an ATM withdrawal with FX Change : 

<Image src="docs/ATMDEBT.png" alt="usecase 1"/>

<Highlight type="danger">

Even if it is a rare occurence, you, as client, will have to cover and recover your client debt.

</Highlight>

---

## Endpoints

Within our debt API you will be able to manage your client debt follow-up and recovery.

To retrieve the customer debt :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/clientdebts" method="get"/>

Once you recover modify the customer debt :
  
- The remaining amount :
 
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/clientdebts/{orderid}/remainingdebtamount" method="put"/> 

- The remaining status :

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/clientdebts/{orderid}/status" method="put"/> 


More information regarding this endpoint in the [API reference](/api/Core)

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
