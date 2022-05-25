import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# X-Pay 


## Wallet enrolment

There are 2 methods to add your card to a wallet : 
- inapp verification method _(update of SMS OTP journey)_
- inapp provisioning method

The first is the usual method which consists in : 

- iOS (for Apple Pay)
- app Samsung Pay
- app Google Pay _(coming soon)_
- app Garmin Pay _(coming soon)_

<br/>

The cardholder starts enrolment by entering his card informations and then he valids/confirms into his mobile app with a SCA (Strong Customer Authentication).

The second, mandatory for any wallet provider, it's a method without entering your informations card. It's strongly recommended for virtual cards. 
It consists to start in your app (with SCA) with only button click by provisioning data cards then to valid Terms and Conditions and to finish in your app.

### Confirm your card

You start your enrolment since wallet provider...

<Image src="docs/Card_verifWallet.png" alt="usecase 1"/>

... and you confirm into your app

#### CALLBACK type 25

```json
"id" :                  "long", 	internal Id,                    example "637588383208269600"
"reference" : 	        "String",	cardExternalRef (appCardId),    example "QA_qual29_CP"	
"secureElementId" : 	"String",	deviceID,                       example "44125A3342A80014272043036932204E3F73BB08847E90B"
"type" : 	            "Integer",	                                value   "25" 	
"tokenValue" :          "String",   token,                          example	"4642353030549437"	
"tokenReferenceID" : 	"String",	Unique ID for token,            example "DNITHE382003555876588856" 	
"tokenRequestorID" :  	"String",   ID assigned,                    example "40010030273" 	
"status" :              "String",   token's status,                 example "A"	
"messageReasonCode" :   "String",	steps of TLCM,	                example "1400"
```

<br/>

<!--

More information regarding this endpoint in the [API reference](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/card/{cardExternalRef}/inappverifactivation" method="post"/>

-->

``` POST ```/api/v2.0/token/{cardExternalRef}/xpayinappverifactivation
```json
{
"tokenReferenceID": "string",         Max 50 char example "DNITHE382003555876588856", [REQUIRED]
"tokenRequestorID": "string",         Max 11 char example "40010030273",              [REQUIRED]
}
```
**RESPONSE OK/KO**

---

### Add your card in-app

In your mobile app, you can add a card to wallet

<Image src="docs/Card_addWallet.png" alt="usecase 1"/>


#### SDK for provisioning

More information regarding the specifications in our SDK

<Highlight type="caution">

##### Caution

Before display the button "Add to wallet", you have to verify if this card **is not already present** in wallet and **if the phone or OS is compatible**.

</Highlight>

---

## About token

Here is token life cycle (TLC). Your token has a own life but it is linked to his card too. So Card Life Cycle (CLC) act on the TLC.

<Image src="docs/Xpay_TokenStatus.png" alt="usecase 1"/>

### Token details

In order to obtain the token details for a specific token.

<!--
#### endpoint
More information regarding this endpoint in the [API reference](/api/Xpay)
<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/{tokenvalue}" method="get"/>
-->

``` GET ```/api/v2.0/token/{tokenValue}
```json
{
"tokenValue": "string",                     Max 32 char example "4642353030722754",
}
```
``` RESPONSE ```
```json
{"cardExternalRef": "string",               Max 50 char example "GOLDCARDCONSUMER", [=appCardId]
    "tokens": 
     {
      "tokenValue": "string",               Max 32 char example "4642353030722754",
      "tokenReferenceId": "string",         Max 50 char example "DNITHE382003555876588856",
      "tokenRequestorId": "string",         Max 11 char example "40010030273",
      "tokenExpiryDate": "string",          Max 07 char example "11-2023",
      "tokenState": "string",               Max 11 char example "ACTIVATED",
      "tokenType": "string",                Max 14 char example "SECURE_ELEMENT",
      "tokenDeactivationDate": "DateTime",              example "2020-12-10T08:20:29.7441719",
      "tokenUpdateDate": "DateTime",                    example "2020-12-28T16:54:50.6544932",
      "deviceInformation": 
      {
        "secureElementId": "string",        Max 50 char example "044125A3342A80014272043036932204E3F73BB08847E90B",
        "deviceType": "string",             Max 50 char example "02",
        "deviceNumber": "string",           Max 50 char example "33660710408",
      }
     }
}
```
> - ``` tokenValue ``` : Value of a token. 
> - ``` tokenReferenceId ``` : Unique ID for the token associated with the PAN.
> - ``` tokenRequestorId ``` : ID assigned to the Initiator of the token Request.
> - ``` tokenExpiryDate ``` : Expiration date assigned for the token
> - ``` tokenState ``` : state example ACTIVATED or SUSPENDED 
> - ``` tokenType ``` : Valid Token Types like SECURE_ELEMENT
> - ``` tokenDeactivationDate ``` : Token deactivation date
> - ``` tokenUpdateDate ``` : Date of token update
> - ``` secureElementId ``` : Represents the device ID
> - ``` deviceType ``` : Type of device like : MobilePhone or Tablet or Watch
> - ``` deviceNumber ``` : This will be the full mobile number



### Token's list of a card

In order to retrieve the list of tokens for a specific card. data in response are the same of token's details

<!--
#### endpoint

More information regarding this endpoint in the [API reference](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/card/{cardExternalRef}" method="get"/>
-->


``` GET ```/api/v2.0/token/card/{cardExternalRef}
```json
{
"cardExternalRef": "string",         Max 50 char example "GOLDCARDCONSUMER", [=appCardId]
}
```
``` RESPONSE ```
```json
[
        {
            "tokenValue": "4642353030722754",
            "tokenReferenceId": "DNITHE382003555876588856",
            "tokenRequestorId": "40010030273",
            "tokenExpiryDate": "11-2023",
            "tokenState": "ACTIVATED",
            "tokenType": "SECURE_ELEMENT",
            "tokenDeactivationDate": null,
            "tokenUpdateDate": "2020-12-28T16:54:50.6544932",
            "deviceInformation": {
                "secureElementId": null,
                "deviceType": null,
                "deviceNumber": null
            }
        },
        {
            "tokenValue": "4642353030898951",
            "tokenReferenceId": "DNITHE382003555876588857",
            "tokenRequestorId": "40010030273",
            "tokenExpiryDate": "10-2023",
            "tokenState": "INACTIVE",
            "tokenType": "SECURE_ELEMENT",
            "tokenDeactivationDate": null,
            "tokenUpdateDate": "2020-12-28T16:56:46.0778228",
            "deviceInformation": {
                "secureElementId": null,
                "deviceType": null,
                "deviceNumber": null
            }
        },

]

```

---

<Cta
  context="doc"
  ui="button"
  link="/api/Xpay"
  label="Try it out"
/>
