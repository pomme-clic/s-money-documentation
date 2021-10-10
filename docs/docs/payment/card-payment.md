import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'


# Card payment

The cardholder use his card or his mobile to pay in merchant (shop, online or automate) or to withdraw cash.
First, in real time, Merchant PSP (Payment Service Provider) and his bank call Xpollens to ask authorization to deliver payment. You have an exchange between cardholder and merchant.
After, in second time, one or more day after, merchant bank proceeds a clearing and send an order of settlement to Xpollens.


<Image src="docs/CardOP_Payment.png" alt="usecase 1"/>

## Payment transactions

Our HUB receives all banking transactions, processes the corresponding events and returns them according to the type of operation.
In real time, the IAS (Issuer Authorization Server) part manages authorization or adjustment requests that come to us from acquirers and also types of events such as card opposition. 

A posteriori, the HUB also receives the settlements resulting from clearing and other types of operations linked to the life cycle of the operation following a cardholder dispute.

### Authorization (IAS)

All cards issued are systematic authorization cards.
This means that in use, an authorization request is sent to Xpollens in order to know whether the payment can be issued or not.
Xpollens checks if the payment context is consistent with the card profile :

- Is this the correct PIN code,
- is the card active,
- are the ceilings or the balance sufficient,
- is it a country, a payment type, or a merchant authorized _(list, exception, selfcare, ...)_
- ....

Xpollens tests a lot of parameters in real time and responds to the merchant by indicating the response that was sent to his partner

### Clearing 

We merge the set of authorizations with the corresponding settlements. 
The transactions received in the clearing allow you to obtain the real exchange value of the transaction (which is not necessarily the same that was authorized). 
And more, sometimes there were certain conditions to be offline transactions.

--- 

## API & callbacks

### Callback

We provide you with 2 callbacks allowing you to retrieve the processing information of authorization requests made in real time as well as the processing of settlements carried out a posteriori by sending from fellow banks.


These callback contain different types of events corresponding to the operation. This allows you to manage smart automation such as notifying a user of his transaction (refusal or approval) but also for example to manage your transactions and your reconciliations yourself, etc.

#### type 20 _(authorization)_

This callback is sent in the following cases :
- processing an authorization message _(agreement or refusal)_
- expiry of authorization after 7 or 31 days
- total or partial adjustment of an authorization

It is the most important for you. You can follow activity and exchange with your enduser in real time.

```json
 {  
  "Id":                                     "long"     internal Id
  "reference" :                             "String"   Operation OrderID
  "type" :                                  "int"      Callback Type = 20
  "appCardId" :                             "String"   reference of the card given by the partner
  "transactionAmount" :                     "decimal"  amount in local currency
  "currencyCodeTransaction" :               "string"   currency transaction
  "cardHolderBillingAmount" : 	             "decimal"  Amount in euro
  "cardHolderBillingConversionRate" :       "decimal"  Exchange rate
  "availableBalance" :                      "decimal"  balance after authorization
  "actionCode" : 	                          "int"      response codes
  "merchantType" :                          "int"      merchant category code
  "cardAcceptorIdentificationCodeName" :    "string"   merchant information
  "status" :                                "int"	     Operations status
  "ert" :                                   "int"      transaction context 
  "cardDataInputMode" :                     "int"      how to use the card
  "tokenRequestorID" :                      "int"      determines a payment that uses a token
  "terminalCountryCode" :                   "int"      country reference where payment took place
  "userid" :                                "string"	  reference of the user given by the partner
  "executedDate" :                          "DateTime" Executed date of the operation
 }
}
```

#### type 24 _(clearing)_

This callback is sent when clearing process is finished for you. You receive a reference and you can retrieve your settlement in clearing report.

```json
{
"id	        "long"	   internal Id
"reference	 "String"	 Batch file reference to retrieve the operations of the clearing report with the API
"type	      "Int"	    Callbacks card clearing = 24
}
```

### Get clearing report

The cardoperations/clearingreport API is generated each time the transaction file transmitted by our Core Banking is received and processed.

``` GET ```/api/v1.1/cardoperations/clearingreport/{clearingfileid}

``` RESPONSE ```
```json
 { 
"authorization_reference" : "string"     Authorization unique reference
"card_identifier" :         "string"     Thirdparty card ID
"amount" :                  "integer"    Transaction amount (in cents)
"date" :                    "datetime"   Date and Time the authorization was processed by Xpollens
"merchant_name" :           "string"     Card acceptor Name
"merchant_category_code" :  "integer"    It allows to identify the merchant
"financial_network_code" :  "string"     Cards network
"original_amount" :         "integer"    Amount before exchange,in the smallest currency division
"currency" :                "string"     Currency code ISO 4217
"exchange_rate" :           "number"     Exchange rate,1 if euro
"name":                     "string"     Merchant name
"street":                   "string"     Merchant adress
"city":                     "string"     Merchant city
"type_code" :               "string"     Transaction description
"pos_entry_mode" :          "string"     POS capability ISO8583
"operation_type" :          "integer"    Values of operation's type 
"operation_status" :        "integer"    Values of operation's status 
"service_fee" :             "integer"    Service fee amount in cents
"direction" :               "integer"    Values of operation's direction for the user 
"clearing_date" :           "datetime"   Date and time (ZT) the operation was processed
}
```

<Highlight type="caution">

##### Caution

Partner must have the reference file he wants to retrieve (the reference is transmitted via callback 24 received before)

</Highlight>

<!--
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/cardoperations/clearingreport/{clearingfileid}" method="get"/>
-->

### Card limits

This API allows you to retrieve the payment and withdrawal limits for a card as well as the outstanding amounts

<Image src="docs/CardOP_Limits.png" alt="usecase 1"/>

``` GET ```/api/v1.1/cards/{appcardid}/limits
```json
{
"AppCardId": "string",         Max 255 char example "Card123", [REQUIRED]
}
```
``` RESPONSE ```
```json
{
    "AppCardId" :                  "string"        
    "CardLimits" : {
        "Transaction":             "int"    Not used
        "ATMWeeklyAllowance" :     "number" ATM weekly limit (value in cents)
        "ATMWeeklyUsedAllowance" : "number" Amount used in withdrawal over the last 7 days
        "MonthlyAllowance" :       "number" Monthly payment limit (value in cents)
        "MonthlyUsedAllowance" :   "number" Amount used in payment over the last 30 days
                  }
}
```

<!--
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/cards/{appcardid}/limits" method="get"/>
-->

### Endpoints Details

#### Get card operations

This API allows to retrieve a user's card transactions, with or without date criteria. Without date criteria, the api returns the complete list of operations.

<!-- 
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations" method="get"/> 
-->

#### Get card operation description

This API is used to retrieve the operation details.

<!--
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations/{orderid}" method="get"/>
-->

#### Get card operation messages description

This API is used to retrieve the details of the authorization message

<!--
<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cardoperations/{orderid}/messages" method="get"/>
-->

--- 

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
