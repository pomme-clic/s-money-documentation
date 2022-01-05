import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Card management


## List of cards

You can retrieve all cards by holder. For example, in your journey, you can provide all cards to your holder in order he manages each one.

<Image src="docs/Card_List.png" alt="usecase 1"/>

#### ``` GET ``` /api/v2.0/holder/{holderExternalRef}

This API allows to retrieve the list of his cards for a specific holder

```json
 {
  "holderExternalRef": "string"     [required]; Partner's holder reference 
 }
```

``` RESPONSE ``` is an array with label, card reference and other informations to identify each card and some details below
```json
 { 
  "creationDate" :                   "datetime"  Creation date
  "expiryDate":                      "string"    Expiration date.
  "visualCodeSelected":              "string"    Visual code selected.
  "isBlocked":                       "boolean"   Is card blocked
  "globalLimitAtmSelected":          "integer"   Global Atm limit
  "globalLimitPaymentSelected":      "integer"   Global Payment limit
  "uniqueId":                        "string"    Unique Id.
  "bankId":                          "integer"   Bank Id value.
  "hint":                            "string"    The pan hint value of the card.
  "partnerCode":                     "string"    Gets or sets the partner code.
  "offerPartnerCode":                "string"    Gets or sets the offer partner code.
  "wishPin":                         "boolean"   Gets or sets a value indicating whether [wish pin].
  "oldExternalRef":                  "string"    Gets or sets the old external reference.
  "isVadBlocked":                    "boolean"   Gets or sets a value indicating whether this instance is vad blocked.
  "isGeoBlocked":                    "boolean"   Gets or sets a value indicating whether this instance is geo blocked.
  "holderExternalRef":               "string"    Gets or sets the holder external reference.
  "oppositionReasonCode":            "string"    Restricted values of opposition reason code are:
  "cancellationReasonCode":          "string"    Restricted values of cancellation reason code are:
  "isNfcActivated":                  "boolean"   Is Nfc activated.
  "isPaymentAllowed":                "boolean"   Is Payment allowed.
  "isAtmWithdrawalAllowed":          "boolean"   Is Atm Withdrawal allowed.
  "isQuasiCashAllowed":              "boolean"   Is Quasi cash allowed.
  "isWithdrawalAtTheCounterAllowed": "boolean"   Is Withdrawal at the counter allowed.
 }
```
<br/>


## Card Details

#### ``` GET ``` /api/v2.0/card/{cardExternalRef}

This API allows to retrieve all details for a specific card

```json
 {
  "cardExternalRef": "string"     [required]; Partner's holder reference 
 }
```

``` RESPONSE ``` is an array with label, card reference and other informations to identify the card and provide some details below
```json
 { 
  "oppositionReasonCode":            "string"    Restricted values of opposition reason code are:
  "creationDate" :                   "datetime"  Creation date
  "expiryDate":                      "string"    Expiration date.
  "visualCodeSelected":              "string"    Visual code selected.
  "isBlocked":                       "boolean"   Is card blocked
  "globalLimitAtmSelected":          "integer"   Global Atm limit
  "globalLimitPaymentSelected":      "integer"   Global Payment limit
  "holderExternalRef":               "string"    Holder code
  "holderFirstName":                 "string"    Holder first name
  "holderLastName":                  "string"    Holder last name
  "holderEmail":                     "string"    Holder email
  "holderPhoneNumber":               "string"    Holder phone number
  "offerPartnerCode":                "string"    Offer partner code
  "partnerCode":                     "string"    Partner code
  "uniqueId":                        "string"    Unique Id.
  "bankId":                          "integer"   Bank Id value.
  "hint":                            "string"    The pan hint value of the card.
  "isGeoBlocked":                    "boolean"   is geo blocked.
  "isVadBlocked":                    "boolean"   is vad blocked.
  "wishPin":                         "boolean"   use random PIN.
  "oldExternalRef":                  "string"    Gets or sets the old external reference.
  "cancellationReasonCode":          "string"    Restricted values of cancellation reason code are:
  "isNfcActivated":                  "boolean"   Is Nfc activated.
  "isPaymentAllowed":                "boolean"   Is Payment allowed.
  "isAtmWithdrawalAllowed":          "boolean"   Is Atm Withdrawal allowed.
  "isQuasiCashAllowed":              "boolean"   Is Quasi cash allowed.
  "isWithdrawalAtTheCounterAllowed": "boolean"   Is Withdrawal at the counter allowed.
 }
```
<br/>

---

## Selfcare

You can manage your card with a selfcare in order to update some specifications like : 

- block and unblock your card
- update limits for payment or withdrawal
- block or unblock online payment
- block or unblock non domestic payment or withdrawal
- oppose your card

You can add in wallet by in-app provisionning (sdk) - See how in [Xpay](./x-pay.md) section.


### Block card
 
<Image src="docs/Card_Self_Verrou.png" alt="usecase 1"/>


<Highlight type="tip">
 
 You can block or unblock in real time to secure your card if you don't find it.
 
</Highlight>


### Update limits
  
<Image src="docs/Card_Self_UpdateLimits.png" alt="usecase 1"/>

<!--
#### Endpoint
More information regarding this endpoint in the [API reference](/api/CardFactory)
<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>
-->

<Highlight type="tip">
 
 You can increase or decrease your limits of payment and/or withdrawal.

</Highlight>


### Block online/MOTO payments

  
<Image src="docs/Card_Self_VAD.png" alt="usecase 1"/>

online : e-commerce and MOTO : Mail Order Telephone Order
<!--
#### Endpoint
More information regarding this endpoint in the [API reference](/api/CardFactory)
<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>
-->

<Highlight type="tip">
 
  You can block or unblock in real time if you don't want authorize e-commerce payment.
 
</Highlight>

### Block foreign payments and withdrawal
 
<Image src="docs/Card_Self_ETR.png" alt="usecase 1"/>

<!--
#### Endpoint
More information regarding this endpoint in the [API reference](/api/CardFactory)
<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>
-->

<Highlight type="tip">
 
 You can block or unblock in real time if you don't want to authorize foreigner payments or withdrawal.
 
</Highlight>

---

#### ``` PUT ``` /api/v2.0/card/{cardExternalRef}

```json
Update card data
{
"globalLimitAtmSelected": "integer"┃null,         constraints: Max 32 chars
"globalLimitPaymentSelected": "integer"┃null,     constraints: Max 32 chars    
"cardBlocked": "boolean"┃null,            
"isVadBlocked": "boolean"┃null,                   
"foreignPaymentBlocked": "boolean"┃null,                             
}
```

> - ``` globalLimitAtmSelected ``` : It’s a card withdrawal limit on seven slippery days (card created with default limits defined in the offer). 
> - ``` globalLimitPaymentSelected ``` : It’s a card payment limit on thirty slippery days (Value in euros).
> - ``` cardBlocked ``` : Allow to block or unblock the card. If the card is blocked, no transaction is allowed.
> - ``` isVadBlocked ``` : Allow to block or unblock the card's internet, MOTO payment transaction.
> - ``` foreignPaymentBlocked ``` : Allow to block or unblock the card's foreign payment.

<br/>

<!--
More information regarding this endpoint in the [API reference](/api/CardFactory)
<Endpoint apiUrl="/v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}" method="put"/>
-->


---


### Oppose your card

<Image src="docs/Card_Oppose.png" alt="usecase 1"/>

#### Endpoint

More information regarding this endpoint in the [API reference.](/api/CardFactory)
<!--
<Endpoint apiUrl="v2.0/cardfactory" path="/api​/v2.0​/card/{cardExternalRef}/oppose" method="patch"/>
-->

<Highlight type="danger">
 
Oppose a card is equal to block your card definitively.
 
</Highlight>

<Highlight>
 
 The next step is usually a refabricate or upgrade new card. See in Issue a card Section
 
</Highlight>


---

## Display your card

You can : 

- display your PIN code
- display your virtual card

<Image src="docs/Card_Display_SCA.png" alt="usecase 1"/>

<br/>

<Highlight type="caution">
 
 To use API Informations Display, for PCI compliance, we use a secure interface by a SDK.
 
</Highlight>

<br/>

### Display your PIN code

 
If you don't remember, you can display your PIN code.

#### ``` GET ``` /api/v2.0/secure/{cardExternalRef}/pin

```json
retrieve card pin code
{
"partnerCode": "string"┃null,     [required]; the partner code
"ExternalRef": "string"┃null,     [required]; unique card reference 
"ChannelCode": "string"┃null,     [required]; defines a device type like a mobile(66), internet(04)  
}
```

<br/>


### Display your virtual card

This feature is important to use your card to pay online. Once your virtual card is created, you need to get card informations to use in e-commerce for example.

#### ``` GET ``` /api/v2.0/secure/{cardExternalRef}/pin

```json
retrieve card pin code
{
"partnerCode": "string"┃null,     [required]; the partner code
"ExternalRef": "string"┃null,     [required]; unique card reference  -(PAN Privatif par exemple)
"ChannelCode": "string"┃null,     [required]; defines a device type like a mobile(66), internet(04)  
}
```

---


<Cta
  context="doc"
  ui="button"
  link="/api/CardFactory"
  label="Try it out"
/>
