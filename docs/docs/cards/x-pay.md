import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# X-Pay 


## Wallet Enrolment

There are 2 methods to add your card to a wallet : 

- inapp verification method _(update of SMS OTP journey)_
- inapp provisioning method

The first is the usual method which consists since  : 

> - iOS (for Apple Pay)
> - app Samsung Pay
> - app Google Pay _(coming soon)_
> - app Garmin Pay _(coming soon)_

The cardholder starts enrolment by entering his card informations and then he valids/confirms into his mobile app with a SCA (Strong Customer Authentication).

The second, mandatory for any wallet provider, it's a method without entering your informations card. It's strongly recommended for virtual cards. 
It consists to start in your app (with SCA) with only button click by provisioning data cards then to valid Terms and Conditions and to finish in your app.

---

### Confirm your card enrolment by wallet provider

You start your enrolment since wallet provider and you confirm into your app

<Image src="docs/Card_verifWallet.png" alt="usecase 1"/>


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

### Add your card in a Apple wallet since your mobile app

In your mobile app, you can add a card to Apple wallet

<Image src="docs/Card_addWallet.png" alt="usecase 1"/>


#### SDK for provisioning

More information regarding the specifications in our SDK

<Highlight type="caution">

##### Caution

Before display the button "Add to wallet", you have to verify if this card **is not already present** in wallet and **if the phone or iOS is compatible**.

</Highlight>

---

## About Token

### TOKEN DETAILS

In order to obtain the token details for a specific token.


<!--
#### endpoint

More information regarding this endpoint in the [API reference](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/{tokenvalue}" method="get"/>

-->

``` GET ```/api/v2.0/token/{tokenValue}

``` RESPONSE ```
```json
{"cardExternalRef": "string",         Max 50 char example "GOLDCARDCONSUMER", [=appCardId]
    "tokens": 
     {
      "tokenValue": "string",               Max 32 char value "4642353030722754",
      "tokenReferenceId": "string",         Max 50 char example "DNITHE382003555876588856",
      "tokenRequestorId": "string",         Max 11 char example "40010030273",
      "tokenExpiryDate": "string",          Max 07 char example "11-2023",
      "tokenState": "string",               Max 11 char example "ACTIVATED",
      "tokenType": "string",                Max 14 char example "SECURE_ELEMENT",
      "tokenDeactivationDate": "DateTime",              example "2020-12-10T08:20:29.7441719",
      "tokenUpdateDate": "DateTime",                    example "2020-12-28T16:54:50.6544932",
      "deviceInformation": 
      {
        "secureElementId": "string",          Max 50 char example "044125A3342A80014272043036932204E3F73BB08847E90B",
        "deviceType": "string",               Max 50 char example "02",
        "deviceNumber": "string",             Max 50 char example "33660710408",
      }
     }
}
```
> - ``` tokenValue ``` : Value of a token. 
> - ``` tokenReferenceId ``` : Unique ID for the token associated with the PAN. Visa will always return this value
> - ``` tokenRequestorId ``` : ID assigned to the Initiator of the token Request. Visa will always return this value
> - ``` tokenExpiryDate ``` : Expiration date assigned for the token
> - ``` tokenState ``` : Valid values are : ACTIVATED SUSPENDED DEACTIVATED INACTIVE
> - ``` tokenType ``` : Valid Token Types are : UNKNOWN CARD_ON_FILE SECURE_ELEMENT HCE QUICK_READ 
> - ``` tokenDeactivationDate ``` : Token deactivation date
> - ``` tokenUpdateDate ``` : Date of token update
> - ``` secureElementId ``` : Represents the device ID
> - ``` deviceType ``` : Type of device are : 00 = Unknown 01 = Mobile Phone 02 = Tablet 03= Watch 04= Mobile Phone or Tablet 05 through 99 are undefined
> - ``` deviceNumber ``` : This will be the full mobile number; in other cases, only the last 4 digits of the mobile number will be provided.



### TOKENS' LIST of a CARD

In order to retrieve the list of tokens for a specific card. data in response are the same of token's details
<!--
#### endpoint
=======
---

### Token's list of card

More information regarding this endpoint in the [API reference](/api/Xpay)

<Endpoint apiUrl="/v2.0/Xpay" path="/api/v2.0/token/card/{cardExternalRef}" method="get"/>
-->


``` GET ```/api/v2.0/token/card/{cardExternalRef}

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
