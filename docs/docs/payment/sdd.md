import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Mandate and SDD

## Sepa Direct Debit (SDD)


Xpollens provides a complete solution to create mandates and to ask for payin Sepa Direct Debit (SDD). You will be to Direct Debit your customer within your ICS. We can also provide if necessary a SCI (Sepa Creditor Id) within 48 hours. 


<Image src="docs/MANDATE.png" alt="usecase 1"/>



<Highlight type="tip">

Available Mandate are CORE but can be used between Businesses. For more information let's have a look here : https://www.europeanpaymentscouncil.eu/what-we-do/sepa-direct-debit

</Highlight>

<Highlight type="tip">

You can use your own signature solution or ask us for using our Strong Customer Authentication(SCA). 
  
</Highlight>

<Highlight type="caution">

SDD for payin are only available in EUR.

</Highlight>

<Highlight type="danger">

Do not forget to have a SCI since it's required if you want to be identified on Debtor banking account side.

</Highlight>

---


## Endpoints

You must use the Mandate and SDD API that includes amount and the beneficiary ID.

More information regarding this endpoint in the [API reference.](/api/SDD)

To create a Mandate you hace the nto activate :

<Endpoint apiUrl="/v1.1/Transfers.Bib" path="/api/v1.1/users/{appuserId}/mandates" method="post"/>

To ask for a Sepa Direct Debit related to a Mandate :

<Endpoint apiUrl="/v1.1/Transfers.Bib" path="/api/v1.1/users/{userId}/payins/directdebits" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v2.0/users/{userid}/cards/{id}" method="delete"/> -->

---
## Recall

Next releases will able to create recurring, planified SDD, B2B Mandate and will provide a complete UX through our WebApp.

