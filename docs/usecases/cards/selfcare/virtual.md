# Virtual Cards Selfcare
This document applies for **virtual cards**.

* * *
## Card activation
Virtuel cards are created with the status "activated".
Therefore, they can be used immediately.

### API, Callbacks & technical items
When a virtual card is created, **no** `Callback #21` is sent. It is therefore important to integrate the information on the partner side if necessary. 

* * *
## Card cancellation
The card cancellation is available as soon as the card is created.

* * *
## Card opposition
The card opposition is available as soon as the card is created.

### Status
As soon as the card is opposed, the status changed to "OPPOSED". This information is sent thourgh the `Callback #21`.

This action is immediate and irreversible.

If a new card is needed, POST /api/v3.0/cards has to be used (renvoyer vers le use case création de carte)

### API, Callbacks & technical items
[POST /api/v3.0/cards/{cardId}/oppose](https://docs.xpollens.com/api/CardFactory#post-/api/v3.0/cards/-cardId-/oppose)

* * *
## Card expiration
The card's validity period is configured when the environment is created. This information is shared with VISA.

As soon as the card expires, the status changes to "EXPIRED" and a `Callback #21` is sent.

The card renewal is automatic. As a new card is ordered, a `Callback #21` is received. All details are available through the API GET /api/v3.0/cards 


* * *
## Selcare 
## Limits
The only limit for virtual cards is the payment limit.
As DAB withdrawals are not possible, the withdrawal limit is set to €0 by default and cannot be changed.

For the payment limit, 2 values are configured when environments are created:
1- the default amount
2- the maximum amount
Customisation by user is then carried out via API (or webdesk).

#### Payment limits
The payment limit is 30 calendar days.
Update this limit: PUT /api/v2.0/card/{cardExternalRef}
Retrieve the limit value and the used allowance: GET /api/v1.1/cards/{appcardid}/limits

### Temporary blocking
Please note: temporary blocking is not a change in card status, but in one of its attributes. Therefore, changing the boolean does not send a callback 21. The request response has to be integrated in the partner's refential.

#### API
PATCH /api/v3.0/cards/selfcare/{cardId} : field isFrozen.
GET /api/v3.0/cards/{cardId} : field isFrozen.

#### Webdesk
A card can be blocked temporary through the webdesk for profil "senior operator".


### Geoblocking
Please note: temporary blocking is not a change in card status, but in one of its attributes. Therefore, changing the boolean does not send a callback 21. 

#### API
PATCH /api/v3.0/cards/selfcare/{cardId}: isInternationalPaymentEnabled
GET /api/v3.0/cards/{cardId}: isInternationalPaymentEnabled

#### Webdesk
This feature is also available through the webdesk for profil "senior operator"


### VAD
The VAD is activated by default in the configuration of your environments. If you don't want it to be available when the card is created, you need to call up the api to change the Boolean value.

PATCH /api/v3.0/cards/selfcare/{cardId}: isEcomPaymentEnabled
GET /api/v3.0/cards/{cardId}: isEcomPaymentEnabled
 
### PIN
Virtual cards do not have a pin code. So there is no get pin.
If the route is called, an error 500 is returned.

### Card display: pan, cvv and expiry date
Refer to the section for physical card

* * *
## Ephemeral virtual card
Ephemeral virtual cards are virtual cards issued on the fly and then cancelled after use.

* * *
## How to test


* * *
## FAQ
### FAQ1: 
