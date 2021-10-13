import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# P2P and client debt

## What is a P2P transfer ?




P2P transfer translates to "Peer to Peer transfer". It's a way to transfer money from one of your customer to another one of yours.
This method of transfer exists to avoid processing by the banking network since both customer are hosted on the same platform.

### Advantages of P2P transfers 
Making a P2P instead of a classic Sepa Credit Transfer (SCT) has several pros :
 - The transfer is made immediatly. No need to suffer the banking network delay.
 - The transfer is free. No banking network means no fees.


The only condition is to have both the payer and the payee registered on your platform.


<Image src="docs/P2P.png" alt="usecase 1"/>


<!---  

<Highlight type="tip">

Specialized P2P are also available for customer billing. Billing can be done one by one or a mass P2P can be done also (ask our commercial team)

</Highlight>
--->
<Highlight type="caution">

Different options of P2P can be used when issued by the partner for example in case of billing : no account limitation verification, this option may create a customer debt if the balance is not sufficient.

</Highlight>

## Endpoints

Within our P2P API you will be able to transfer money immediatly to another customer or to your commission account.

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/payments" method="post"/>

More information regarding this endpoint in the [API reference.](/api/Core)

---
## Client debt

<Highlight>

In some case of transaction, the account balance might not be sufficient, for example when an offline Card transaction or a payin contestation (money might be spent..).
We propose a unpaid mechanism to ensure payment of this kind of operation.

</Highlight>

<Highlight type="tip">

The mechanism is based on automated P2P that create debt on the customer account and  ability for Client to recover the money.
Debt could be created following many operation type : an Offline Card operation, a P2P billing, a contestation after a Card Top Up, after a SCT IN recall, an ATM withdrawal in currency.

</Highlight>

Here is the example of an ATM withdrawal with FX Change : 

<Image src="docs/ATMDEBT.png" alt="usecase 1"/>

<Highlight type="danger">

Even if it is rare case, you, as client, will have to cover and recover your client debt. But do not worry all the necessary APIs are available.

</Highlight>

---

## Endpoints

Within our debt API you will be able to manage your client debt follow-up and recovery.

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
