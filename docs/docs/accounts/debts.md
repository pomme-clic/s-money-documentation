import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Debt Management

## Client debts

<Highlight>

In some transactions, the account balance might go negative; for example when an offline card transaction or a payin contestation (money might be spent...).
We offer a debt management mechanism to ensure payment of this kind of operation.

</Highlight>

<Highlight type="tip">

The mechanism is based on an automated P2P (see [here](/docs/payments/P2P)) that creates a debt on the customer account and the ability for the client to recover the missing amount.
Debt can be created following many operation types : an offline card operation, a P2P billing, a contestation after a card top-up, after a SCT IN recall or an ATM withdrawal.

</Highlight>

Here is an example of an ATM withdrawal with FX Change : 

<Image src="docs/ATMDEBT.png" alt="usecase 1"/>

<Highlight type="danger">

Even if it is a rare occurence, you, as partner, will have to cover and recover your client debt.

</Highlight>

---

## Endpoints

With our debt API, you will be able to manage your client debt follow-up and recovery.

To retrieve the customer debt :

<Endpoint apiUrl="/v1.1/AccountManagement" path="/api/v1.1/clientdebts" method="get"/>

Once you recover modify the customer debt :
  
- The remaining amount :
 
<Endpoint apiUrl="/v1.1/AccountManagement" path="/api/v1.1/clientdebts/{orderid}/remainingdebtamount" method="put"/> 

- The remaining status :

<Endpoint apiUrl="/v1.1/AccountManagement" path="/api/v1.1/clientdebts/{orderid}/status" method="put"/> 


More information regarding this endpoint in the [API reference](/api/Core)

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/AccountsOperations"
  label="Try it out"
/>
