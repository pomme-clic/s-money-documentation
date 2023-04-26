import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'





# Strong customer authentication 


## Context

### Regulatory context

Authentication is required for your end-customers if you are on the Retail B2C market ; it is also required for all key individuals of your professional customers, if you are on the Corporates B2B market. Strong Customer Authentication will occur in two situations :  


> - Online Card Payments
> - Sensitive Operations

<Highlight>
The Second Payment Services EU Directive (PSD2) requires that such a strong authentication happens, reuniting two criteras amongst three possible.
</Highlight>

<Image src="docs/SCA-regulatory-context.png" alt="usecase 1"/>

### Technical context & customer experience

To integrate our solution, you will require our SDK : strong authentication has to take place in a mobile application. You can find more infos on our sdk **[here](./StrongAuthentication.pdf)**.

<Image src="docs/SCA-screens.png" alt="usecase 1"/>

<Highlight type="tip">
  Should you not have a mobile app : no problem, we have an app for you: <b class="term">Xpollens Authenticator</b> integrates the SDK and can handles strong authentication notifications.
</Highlight>

Here is a list of main Sensitive Operations. This is list is not exhaustive and may be subject to change.

<Image src="docs/SCA-sensitive-operations.png" alt="usecase 1"/>




## SCA compliant by design

Just plug to our API and we ensure compliance with PSD2 : if the operation is sensitive, your end user will receive a push notification in your mobile app. Execution of the sensitive operation will be conditionned by the proper strong authentication of your end user.

> If more than one person has mandate over the payment account, by default only the person initiating the operation will be notified.

<Image src="docs/SCA-flowchart-virement.png" alt="usecase 1"/>

### Sensitive operations & SDK integration

By triggering a sensitive operation endpoint, a push notification will be generated, by our backend, onto your end user's smartphone : our back-end will find your end user's mobile application and trigger the **authentication request**. You must therefore code the reception of such notifications using the SDK.

Here is a list of all ``` RAW_LIST ``` messages you can receive:

| Sensitive Operation          | "message"                       | "format"  | "title"                                          | "value"                                                                  |
| ---------------------------- | ------------------------------- | --------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| Add a beneficiairy           | Ajout d’un Bénéficiaire         | RAW\_LIST | Nom:<br />IBAN:                                  | %Nom\_Bénéficiaire<br />%IBAN\_Masqué\_Bénéficiaire                      |
| Modify a bénéficiary         | Modification d’un Bénéficiaire  | RAW\_LIST | Nom:<br />IBAN:                                  | %Nom\_Bénéficiaire<br />%IBAN\_Masqué\_Bénéficiaire                      |
| Read account's information   | Consultations des opérations    | RAW\_LIST | Compte:                                          | %Nom\_Partenaire                                                         |
| Set an immédiate transfer    | Virement immédiat               | RAW\_LIST | Montant:<br />Bénéficiaire:                      | %Montant %Devise<br />%Nom\_Bénéficiaire                                 |
| Set a future dated transfer  | Virement planifié               | RAW\_LIST | Montant:<br />Bénéficiaire:<br />Date planifiée: | %Montant %Devise<br />%Nom\_Bénéficiaire<br /> %Date\_Future             |
| Set a recurrent transfer     | Virement récurrent              | RAW\_LIST | Montant:<br />Bénéficiaire:<br />Récurrence:     | %Montant %Devise<br />%Nom\_Bénéficiaire<br />Tous les %Quantile du mois |
| Order a new card             | Commande d’une Carte            | RAW\_LIST | Type:                                            | Carte VISA %Type %Nom\_Partenaire                                        |
| Modify personal data         | Modification Donnée Personnelle | RAW\_LIST | Rue:                                             | %adresse                                                                 |
| Accept Terms & Conditions    | Acceptation des CGU             | RAW\_LIST | Compte:                                          | %Nom\_Partenaire                                                         |
| Sign FATCA/EAI certification | Déclaratifs Fiscaux             | RAW\_LIST | Compte:                                          | %Nom\_Partenaire                                                         |
| Read PIN                     | Affichage Code PIN              | RAW\_LIST | Carte:                                           | %Nom\_Partenaire                                                         |
| Choose PIN                   | Choix d’un nouveau Code PIN     | RAW\_LIST | Carte:                                           | %Nom\_Partenaire                                                         |
| Read PAN, DLV & CVV2         | Affichage de votre Carte        | RAW\_LIST | Carte:                                           | %Nom\_Partenaire                                                         |

<Highlight type="caution">
Your customer's security-wallet must be active and properly binded for the authentication request to reach her/his mobile app.
</Highlight>

#### Initiate SEPA Instant Credit Transfer OUT

Your customer may initiate a pay-out, which will trigger an authentication request.
More information regarding this endpoint in the [API reference.](/api/SCTINST)

<Endpoint apiUrl="/v2.0/Transfers.InstantPayment" path="/api/v2.0/users/{AppUserId}/sctinst" method="post"/>

<Cta
  context="doc"
  ui="button"
  link="/api/SCTINST#post-/api/v2.0/users/-AppUserId-/sctinst"
  label="Try it out"
/>
<br/>

In your mobile application, the notification will be received in the following ``` RAW_LIST ``` format:

```json
{
  "notificationMessage": "Une opération sensible requiert votre validation",
  "message": "Opération sensible à confirmer",
  "format":"RAW_LIST",
  "data":[
      {"title": "Opération \n ", "value":"Virement"},
      {"title": "Date \n ", "value": "17/01/2022"},
      {"title": "Montant \n ", "value": "15,00 €"},
      {"title": "Bénéficiaire \n ", "value": "Sylvie"}
  ]
}
```

#### Modify personal data

Your customer may modify some of his personal data, which will trigger an authentication request.
More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v2.0/user.usermanagment" path="/api/v2.0/users/{AppUserId}" method="put"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Core#put-/api/v1.1/users/-userid-"
  label="Try it out"
/>
<br/>

In your mobile application, the notification will be received in the following ``` RAW_LIST ``` format:
```json
{
  "notificationMessage": "Une opération sensible requiert votre validation",
  "message": "Opération sensible à confirmer",
  "format":"RAW_LIST",
  "data":[
      {"title": "Opération \n ", "value":"Donnée Personnelle"},
      {"title": "Rue \n ", "value": "28 rue de Pont l'Abbé"},
      {"title": "Code Postal \n ", "value": "29 000"},
      {"title": "Ville \n ", "value": "Quimper"}
  ]
}
```

### Internet payment  & SDK integration

This feature is already embeded in the Xpollens API plateform. Whenever your customer will use her/his card to pay online, a push notification will be sent onto her/his phone in the same manner as above.

You can test using our Test Merchant website, once you have created and activated a ```Card``` on a proper ```User``` whose device has been properly binded (mobileID check).

<Cta
  context="doc"
  ui="button"
  link="https://ssl-liv-u6f-fo-acs-ve-nps.wlp-acs.com/acs-protocol-2-test-service/#!/appBased"
  label="Try it out"
/>
<br/>

You must code the reception of such online card payments notifications. Here is the ``` PURCHASE ``` format you will receive:
```json
{
  "notificationMessage": "Une opération sensible requiert votre validation",
  "message": "Paiement en ligne à confirmer",
  "format":"PURCHASE",
  "amount":"74,12 €",
  "merchant":"WWW.OUI.SNCF"
}
```

## Adding a new device (soon to come)

It is possible to add as many devices as your end-user wants. Each time, a securing process will occur, requiring a new ``` Activation Code ``` and the scanning of an Identity document.

<Image src="docs/SCA-new-qr-code.png" alt="usecase 1"/>

<br/>

Here is the payload you must watch out for from our **callback type 35** :

```
"Payload": {
        "type": "35",
        "AppUserId": "e87bd13dJ",
        "ActivationCode": "f825f1646665490aa7ef7942c6f2f159",
        "ErrorMessage": null,
        }
```

This activation code must either be shown on screen and then flashed (web2app) or be handed in the background directly inside the app. You must then obtain a webview URL using the ``` getIssuerData() ``` feature of our SDK.

Example of webview URL you may obtain:
```
https://pad-staging.api-ot.com/api/v2/static/dist/index.html?technicalId=DC0A9829DF8D544A581292D8CE6C4C48FCEC14A07DDD4F0C8A1B9CFD8487711CB7A49C47047521DF3C9967215B5D7937310E26743193A7D5431AB2DA9A27AFE4&token=J5Ti9Y9p
```

You will know when to close the webview when the URL changes, adding a ``` #SUCCESS ``` at the end.

Example:
```
https://pad-staging.api-ot.com/api/v2/static/dist/index.html?technicalId=DC0A9829DF8D544A581292D8CE6C4C48FCEC14A07DDD4F0C8A1B9CFD8487711CB7A49C47047521DF3C9967215B5D7937310E26743193A7D5431AB2DA9A27AFE4&token=J5Ti9Y9p#SUCCESS
```



## Xpollens Authenticator app

Should you need our on-the-shelf mobile application, it is ready for your end users, accessible in the **Apple Store** and **Google Play Store**.

<Image src="docs/SCA-xpollens-authenticator.png" alt="usecase 1"/>

<!-- iframe width="675" height="380" src="https://youtu.be/ovGkP9y40NY" -->
