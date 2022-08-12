import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Mandate and SDD

## Sepa Direct Debit (SDD)

### What is SEPA Direct Debit?

SEPA Direct Debit (SDD) is a pull-based payment scheme that allows a creditor to debit a debtor's bank account. Similarly to other SEPA transfers, an SDD requires the IBAN (and occasionally the BIC) of both the sender and the recipient's bank accounts. However, it differs from other SEPA transfers in that the roles are reversed: the recipient of the funds is the one who must request the money transfer from the sender.  

SEPA Direct Debit is only available in Euros and can be used for both one-off transactions and recurring payments. It is often used for recurrent payments so that customers can avoid missing payments and being charged additional fees.  
The debtor must sign a valid SDD mandate to authorize the creditor to withdraw the money from the debtor's account. Additionally, there are other rules governing SDDs, such as pre-notifications, refunds, returns, etc.  

Xpollens provides a complete solution to create mandates and manage Sepa Direct Debit (SDD). You will be able to direct debit your customer with your SCI (Sepa Creditor ID).  
If needed, we can also provide if necessary a SCI within 48 hours. 


<Image src="docs/MANDATE.png" alt="usecase 1"/>


There are two payment schemes under SDD:  

- SEPA Direct Debit Core scheme: available to both businesses and retail customers.
- SEPA Direct Debit Business to Business (B2B) scheme: available only to businesses.


<Highlight type="tip">

Only the CORE scheme is available for now but it can be used between businesses. For more information let's have a look here : https://www.europeanpaymentscouncil.eu/what-we-do/sepa-direct-debit

</Highlight>

<Highlight type="tip">

You have to have your own signature solution or ask us for using our Strong Customer Authentication(SCA). 
  
</Highlight>

<Highlight type="caution">

SDD for payin are only available in EUR.

</Highlight>

<Highlight type="danger">

Do not forget to have a SCI since it's required to be identified on the debtor banking side.

</Highlight>

---


## Endpoints

You must use the Mandate and SDD API that includes amount and the beneficiary ID.

More information regarding this endpoint in the [API reference.](/api/SDD)

To create a Mandate you have in a second step to make it being signed and activate :

<Endpoint apiUrl="/v1.1/Transfers.Bib" path="/api/v1.1/users/{appuserId}/mandates" method="post"/>

To ask for a Sepa Direct Debit related to a Mandate :

<Endpoint apiUrl="/v1.1/Transfers.Bib" path="/api/v1.1/users/{userId}/payins/directdebits" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v2.0/users/{userid}/cards/{id}" method="delete"/> -->

---
## Recall

Next releases will able to create recurring, planified SDD, B2B Mandate and will provide a complete UX through our WebApp.

