import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# P2P 

## What is a P2P transfer ?

P2P transfer translates to "Peer to Peer transfer". It's a way to transfer money from one of your customer to another one.
This method of transfer exists to avoid processing by the banking network since both customer are hosted on the same platform.

### Advantages of P2P transfers 
Making a P2P instead of a classic Sepa Credit Transfer (SCT) has several pros :
 - The transfer is made immediatly. No need to suffer the banking network delay.
 - The transfer is free. No banking network means no fees.


The only condition is to have both the payer and the payee registered on your platform.


<Image src="docs/P2P_EN.png" alt="usecase 1"/>


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

<Endpoint apiUrl="/v1.1/Transfers.Bib" path="/api/v1.1/users/{userid}/payments" method="post"/>

More information regarding this endpoint in the [API reference.](/api/SDD)

<Cta
  context="doc"
  ui="button"
  link="/api/SDD"
  label="Try it out"
/>
