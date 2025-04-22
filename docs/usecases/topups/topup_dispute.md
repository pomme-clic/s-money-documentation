# Top-up chargeback

<br/>

* * *

## Sequence diagram
```mermaid
sequenceDiagram

Title: general workflow
autoNumber
Actor User
Participant Partner
Participant XPO
Participant ExternalBank

User ->> Partner : Top-up on my Xpollens account
Partner ->> XPO : Top-up on the Xpollens account

Note over User, Externalbank: Top-up chargeback process
User -->> ExternalBank: chargeback requested
ExternalBank -->> ExternalBank : chargeback accepted
ExternalBank -->> XPO: reimbursement requested
XPO -->> ExternalBank: reimbursement completed
XPO -->> Partner: callback ChargebackCompleted {chargebackId}

Partner -->> XPO: Get v1.1/topups/chargebacks/{chargebackId}


```

<br/>

* * *
## State diagram

```mermaid
stateDiagram
[*] --> Completed
Completed --> [*]

```

<br/>


* * *
## Callback ChargebackCompleted
Here is an example of a chargeback callback

```json
    "Payload": {
        "type": "ChargebackCompleted",
        "data": {
            "chargebackId": "3exxxxxf6-75a0-4ea7-9b53-a6dxxxxxc09",
            "initialTopUpId": "4axxxxx5d5-2719-4f0d-96f2-7xxxxxf651",
            "status": "Completed",
            "amount": {
                "value": "30.00",
                "currency": "EUR"
            },
            "chargebackReason": "CardHolderDisputeDefectiveNotAsDescribe",
            "createdDate": "2025-02-03T10:46:12.92"
        }
    }
```

* * *

## How to test
Use the endpoint post v1.1/topups/{orderId}/simulate-chargeback

<br/>

* * *

## FAQ
### FAQ1: Can we refuse a unpaid card top-up?
No. If the top-up chargeback is validated by the external bank, Xpollens must reimburse the amount. In this case, a chargeback is processed.

