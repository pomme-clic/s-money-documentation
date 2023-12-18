# Cards Issuing
This document applies for **Physical and Vitual cards Order **.
* * *
## Prerequisites
The prerequisites to call this endpoint are:

- Client Authentication.
- Offer partner code.
- Cardholder existence.
- Account existence.
* * *
## Diagram & statuses

### Order a card: sequence diagram for production and unmocked environment
**Physical card order process (Ramdom PIN)**

```mermaid
sequenceDiagram
Title: Physical card order process (Ramdom PIN)
autoNumber
Participant Partner
Participant XPO
Participant BPCE

Partner ->> XPO : Order a physical card (POST /api/v3.0/cards )
XPO --) XPO : Create the card ( Status:ORDERED)
XPO ->> Partner :return OK (201)
XPO --) BPCE : Generate the file all days at 6:30 Pm ( paris time)
XPO -->> Partner : Send callback 21 ( status:Ordered)

rect rgb(255, 0, 0, 0.3)
BPCE --) BPCE : If order Processing KO
end

BPCE -->> XPO : Send reject file
XPO --) XPO : Integrate, process the reject file. <br/> And change status ( Status:Failed )
XPO -->> Partner : Send callback 21 ( Status: Failed)

rect rgb(0, 255, 0, 0.3)
	BPCE --) BPCE :  If order Processing OK 
end

BPCE -->> XPO : Send return file
XPO --) XPO : Intégrate, process the return file. <br/> And change status ( Status: SENT )
XPO -->> Partner : Send callback 21 ( Status:SENT)
```
* * *
**Physical card order process ( Wishpin )**

```mermaid
sequenceDiagram
Title: Physical card order process ( Wishpin )
autoNumber
Participant Partner
Participant XPO
Participant Thales
Participant BPCE

Partner ->> XPO : Order a physical card <br/>  (POST /api/v3.0/cards)
XPO ->> Partner :return OK (201)
XPO --) XPO : Create the card ( Status:ORDERED)


alt Wishpin
Partner ->> Thales : GET /api/v2.0/tokensignature/{cardExternalRef}
Thales -->> BPCE : Acknowledgement of receipt of the wishpin
BPCE --) BPCE : Wainting for the matching between card order and whispin <br/> if matching isn't validated within 4 days , <br/>the creation is failed.
end

XPO ->> BPCE : Generate the file all days at 6:30 Pm ( paris time)
XPO -->> Partner : Send callback 21 ( status:Ordered)

rect rgb(255, 0, 0, 0.2)
BPCE --) BPCE : If order Processing KO
end
BPCE -->> XPO : Send reject file
XPO --) XPO : Intégrate, process the reject file. <br/> And change status ( Status:Failed )
XPO -->> Partner : Send callback 21 ( Status: 5 'failed')
rect rgb(0, 255, 0, 0.2)
BPCE --) BPCE : If order Processing OK
end
BPCE -->> XPO : Send return file
XPO --) XPO : Intégrate, process the return file. <br/> And change status ( Status: Sent)
XPO -->> Partner : Send callback 21 ( Status:1 'sent')
```
<br/>

> ⚠ If you are using the wishpin, you have 4 days to send the pin associated to your card.<br/>
> Otherwise, the card order will fail at BPCE PS, and a callback 21 is received with the status "5" (failed).

* * *
**Virtual card order process**

```mermaid
sequenceDiagram
Title Virtual card order process 
autoNumber
Participant Partner
Participant XPO
Participant BPCE

Partner ->> XPO : Order a virtual card <br/> POST /api/v3.0/cards
XPO --) XPO : Create the card (Status:Activated)
XPO ->> Partner :return OK (201)
XPO ->> BPCE : CardStatus: ACTIVATED 'cardCreaedOrUpdated'

```
<br/>

> ⚠ Note: no callback 21 is sent when the virtual card is issued. <br/>
> The synchronous response has to be treated immediatly.

* * *
### Order a card: sequence diagram for **mocked** environment
In mocked environment, card oredering is mocked. As a consequence:

- card status changes immediately from ordered to sent
- callback 21 for creation is immediately received

* * *
**Physical card order process (as for Ramdom PIN than Wishpin)**
```mermaid
sequenceDiagram
Title: Physical card order process (as for Ramdom PIN than Wishpin)
autoNumber
Participant Partner
Participant XPO
Participant BPCE

Partner ->> XPO : Order a physical card (POST /api/v3.0/cards )
XPO --) XPO : Create the card ( Status:ORDERED)
XPO ->> Partner :return OK (201)
XPO -->> Partner : Send callback 21 ( status: Ordered)
XPO -->> Partner : Send callback 21 ( status: Sent)
```
<br/>

For virtual card, the sequence diagram remains the same.

**Virtual card order process**

```mermaid
sequenceDiagram
Title Virtual card order process 
autoNumber
Participant Partner
Participant XPO
Participant BPCE

Partner ->> XPO : Order a virtual card <br/> POST /api/v3.0/cards
XPO --) XPO : Create the card (Status:Activated)
XPO ->> Partner :return OK (201)
XPO ->> BPCE : CardStatus: ACTIVATED 'cardCreaedOrUpdated'

```
* * *
### States diagram for physical cards
```mermaid
stateDiagram
state fork_state <<fork>>
state fork_state2 <<fork>>
state fork_state3 <<fork>>

  [*] --> Ordered
  Ordered --> fork_state
  fork_state --> Cancelled
  fork_state --> Sent: mailed by the manufacturer

  
  Sent --> fork_state2
  Sent --> Activated
  fork_state2 --> Cancelled
  fork_state2 --> Opposed
  fork_state2 --> Expired
	fork_state2 --> Deactivated

  Activated --> fork_state3
  fork_state3 --> Cancelled
  fork_state3 --> Opposed
  fork_state3 --> Expired
  fork_state3 --> Deactivated

  fork_state --> Failed : pin not matched

  Expired --> [*]
	Cancelled --> [*]
	Opposed --> [*]
	Failed --> [*]
	Deactivated --> [*]
```
<br/>

> Deactivated for remanufacturing

* * *
### States diagram for virtual cards
```mermaid
stateDiagram
state fork_state3 <<fork>>

  Activated --> fork_state3
  fork_state3 --> Canceled
  fork_state3 --> Opposed
  fork_state3 --> Expired 

  Expired --> [*]
	Canceled --> [*]
	Opposed --> [*]

```
* * *
## Wishpin process
*Coming soon* 
* * *
## Configuration when creating the environment
### Random pin or wishpin?
Random pin: the pin is chosen at random when the card is created.
Wishpin: the enduser can choose its own pin. The enduser has 4 days to do so, otherwise the card creation fails.

If the configuration is 'Random Pin', then you have no choice but to go random pin.
If the configuration is 'Wishpin', then you have the choice of the pin type when using the endpoint.

### Card validity period
The card's validity period is fixed and is set when the environment is created. This information is shared with BPCE PS.

### Card offers and visual codes
```json
{
  "cardId": "my_card_reference",
  "cardholderId": "145644-060820-USER-8550478",
  "accountId": "145644-060820-ACCOUNT-8550478",
  "offerPartnerCode": "DemoClassicPhysicalDebitVISA",
  "hasWishpin": true,
  "isNfcDisabled": false,
  "visualCode": "NOCP"
}
```
<br/>

The card offer allows you to find out the type of card you want (classic, premier, etc.) and its characteristics.
This information is an input for card creation.

For each offer, you can have several visuals. All these visuals are validated with BPCE PS and VISA and then configured at Xpollens.
* * *
### Pan ranges
They are chosen by Xpollens and validated with BPCE PS.
* * *
## API, Callback & technical items
### Card order 
[`POST /api/v3.0/cards`](https://docs.xpollens.com/api/CardFactory#post-/api/v3.0/cards)
/!\ When ordering a virtual card, the wishpin and nfc attributes must be removed from the request.

### SDK Thales
*coming soon*

* * *
## How to test
### Create a virtual card
```json
POST /api/v3.0/cards
{
    "cardId": "yourCardId",
    "cardholderId": "yourCardHolderId",
    "accountId": "yourAccountId",
    "offerPartnerCode":"yourOfferPartnerCode",
    "visualCode": "yourVisualCode"
}
```