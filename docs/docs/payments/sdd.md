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

Xpollens provides a complete solution to create mandates and manage Sepa Direct Debit (SDD). If you already have a Sepa Creditor ID (SCI), you will be able to use it to direct debit your customer. If not, we can provide you with one within 48 hours. 


<Image src="docs/MANDATE.png" alt="usecase 1"/>


There are two payment schemes under SDD:  

- SEPA Direct Debit Core scheme: available to both businesses and retail customers.
- SEPA Direct Debit Business to Business (B2B) scheme: available only to businesses.


<Highlight type="tip">

Only the CORE scheme is available for now but it can be used between businesses. For more information let's have a look here : https://www.europeanpaymentscouncil.eu/what-we-do/sepa-direct-debit

</Highlight>

<Highlight type="tip">

For the mandate signature process, we can provide a strong customer authentication tool if needed.
  
</Highlight>


<Highlight type="danger">

Do not forget to have a SCI since it's required to be identified on the debtor banking side.

</Highlight>

---


## Endpoints

### Mandate creation

First, you have to create a mandate with debtor account informations (BIC, IBAN, etc...).

<Endpoint apiUrl="/v1.1/Transfers.Bib" path="/api/v1.1/users/{appuserId}/mandates" method="post"/>

### Mandate activation

Second, you must make your debtor sign the mandate and inform Xpollens of the process completion.

<Endpoint apiUrl="/v1.1/Transfers.Bib" path="/api/v1.1/users/{appuserId}/mandates/activate" method="put"/>

### Direct Debit creation

Thirdly, you can start to direct debit the debtor (one or multiple time) with detailing the account informations where the funds go and the date of the payment.

<Endpoint apiUrl="/v1.1/Transfers.Bib" path="/api/v1.1/users/{userId}/payins/directdebits" method="post"/>

<Highlight type="danger">

The payment date must be set 3 working days in the future. Less than that will result in an error.

</Highlight>

More information regarding these endpoints in the [API reference.](/api/SDD)


---
## Roadmap

Next releases will able to create recurring, planned SDD, B2B mandates and will provide a complete UX through our Business Portal.

