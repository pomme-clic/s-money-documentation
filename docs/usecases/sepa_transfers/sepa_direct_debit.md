# Sepa Direct Debit (SDD)

SEPA Direct Debit (SDD) is a pull-based payment scheme that allows a creditor to debit a debtor's bank account. Similarly to other SEPA transfers, an SDD requires the IBAN (and occasionally the BIC) of both the sender and the recipient's bank accounts. However, it differs from other SEPA transfers in that the roles are reversed: the recipient of the funds is the one who must request the money transfer from the sender.

SEPA Direct Debit is only available in Euros and can be used for both one-off transactions and recurring payments. It is often used for recurrent payments so that customers can avoid missing payments and being charged additional fees.  
The debtor must sign a valid SDD mandate to authorize the creditor to withdraw the money from the debtor's account. Additionally, there are other rules governing SDDs, such as pre-notifications, refunds, returns, etc.

Xpollens provides a complete solution to create mandates and manage Sepa Direct Debit (SDD). If you already have a Sepa Creditor ID (SCI), you will be able to use it to direct debit your customer. If not, we can provide you with one within 48 hours.

<br/> <br/>

## General sequence diagram

```mermaid
sequenceDiagram
Title: Create an SDD
autoNumber
Actor User
Participant Partner
Participant XPO

Note over Partner, XPO: Create a mandate
Partner ->> XPO : POST /api/v1.1/users/{appuserId}/mandates
XPO ->> Partner :return OK (201)

Partner -->> User: Sign the mandate
User -->> Partner: Signature


Note over Partner, XPO: Activate the mandate
Partner ->> XPO : PUT /api/v1.1/users/{appuserId}/mandates/activate
XPO ->> Partner :return OK (200)


Note over Partner, XPO: Create an SDD OUT
Partner ->> XPO : POST /api/v1.1/users/{userId}/payins/directdebits
XPO ->> Partner :return OK (201)
XPO -->> Partner: callback 18 {status 0}

Note over Partner, XPO: Completion of the SDD on the settlement date
XPO -->> Partner: callback 18 {status 0}



```

<br/><br/>

* * *

## Mandate

The mandate creation is a prerequesite to create an SDD (see "State diagram for an SDD OUT").

### State diagram for a mandate

```mermaid
stateDiagram
    [*] --> Created : when created
    Created --> Validated: when activated
    Validated --> Revoked : when revoked
    Revoked --> [*]
        [*] --> Failed: creation failed
        Failed --> [*]


```

| **Status Name** | **Status Id** |
| :--- | :--- |
| Created | 2   |
| Validated | 3   |
| Revoked | 4   |
| Failed | 6   |

> Note: Xpollens does not create a document for the mandate. If you want to display a document to your customers, you must create it.

<br/> 

* * *

### Mandate creation

[POST /api/v1.1/users/{appuserId}/mandates](https://docs.xpollens.com/api/TransferSDD#post-/api/v1.1/users/-appuserId-/mandates)

To use this mandate and create and SDD, the mandate must be activated.

<br/> 

* * *

### Mandate activation

[PUT /api/v1.1/users/{appuserId}/mandates/activate](https://docs.xpollens.com/api/TransferSDD#put-/api/v1.1/users/-appuserId-/mandates/activate)

```mermaid
sequenceDiagram
Title: Create an SDD
autoNumber
Actor User
Participant Partner
Participant XPO

Note over Partner, XPO: Create a mandate
Partner -->> User: Sign the mandate
User -->> Partner: Signature
Partner ->> XPO : POST /api/v1.1/users/{appuserId}/mandates
XPO ->> Partner :return OK (201)

Note over Partner, XPO: Activate the mandate
Partner ->> XPO : PUT /api/v1.1/users/{appuserId}/mandates/activate
XPO ->> Partner :return OK (201)


```

<br/> 

* * *
### Mandate revocation

#### Why and when

The mandate can not be modified. As a consequence, if a modification is needed, you must

- revoke the mandate
- create a new one

#### Impacts

The revocation of the mandate does not cancel already scheduled SDDs.

<br/> 

* * *
### What happens if the end user revokes the mandate from their external bank?  
Xpollens is not aware that all SDDs have been opposed and that the mandate has been revoked.  
However, we receive rejections for all direct debit attempts.



<br/> <br/> 

* * *

## Sepa Direct Debit OUT (SDD OUT)

An SDD out is an SDD that debits an external account to credit the Xpollens account.

### State diagram for an SDD OUT

```mermaid
stateDiagram-v2
    [*] --> Created  : internal status
    Created --> Pending : http 201
    Created --> Rejected:  rejected by The Payment Decision System
    Pending --> Rejected : /- rejected by BPCE <br/> /- rejected by the Interbank_market <br/> /- rejected by the external bank
        Pending --> Succeeded : accepted
        Pending --> Canceled: cancel between creation and paymentDate
		Succeeded --> Refunded: refunded SDD 
		Rejected --> [*]
		Refunded --> [*]
        Succeeded --> [*]
        Canceled --> [*]

```

| **Status Name** | **Status Id** |
| :--- | :--- |
| Created | Internal |
| Pending | 0 | 
| Succeeded | 1 |
| Refunded | 2 |
| Rejected | 3 |
| Canceled | 5 |

<br/>

* * *

### Sequence diagram for an SDD OUT

```mermaid
sequenceDiagram
Title: Create an SDD
autoNumber
Actor User
Participant Partner
Participant XPO
Participant BPCE
Participant Interbank_market

Note over Partner, XPO: Create an SDD OUT
Partner ->> XPO : POST /api/v1.1/users/{userId}/payins/directdebits
XPO ->> BPCE: create SDD
XPO -->> Partner: callback 18 {status 0}


Note over XPO, Interbank_market: Every working day 21h (FR)
BPCE -->> XPO : SDDs sent {executionDate}
XPO -->> Interbank_market: SDD sent

Note over Partner, Interbank_market: On the executionDate
XPO -->> Partner: callback 18 {status 1}

```

<br/>

### paymentDate / executionDate

The `paymentDate` is the payment date expected by the partner (or its enduser) and entered in the request POST.  
This date is sent to Base Mandat, which gives us the real date: the `executionDate`. This information is returned by the GET.

These `executionDate` can be different from the `paymentDate` if:

- the `paymentDate` is a day during a week-end or a day off. In this case, the `executionDate` is the next working day.
- the `paymentDate` is between today (D) and strictly less than D+3. In this case, the `executionDate` is automatically the first working day >= {paymentDate + 3 days}.

> Note: the `paymentDate` can not be in the past.

An SDD can only be created a maximum of 14 days before the `paymentDate`.
Therefore, you need to manage the debit schedule on your side to create the SDDs in a timely manner.

### Rule
To schedule multiple SDDs in parallel for the same mandate, the first SDD must be finalized. This occurs as soon as its status changes to "1."

<br/><br/>

* * *

## Sepa Direct Debit IN (SDD IN)

An SDD in is an SDD that debits the Xpollens account to credit an external account. The mandate is owned by the external bank.

### Sequence diagram for an SDD IN

```mermaid
sequenceDiagram
Title: Create an SDD
autoNumber
Actor User
Participant Partner
Participant XPO
Participant Interbank_market 

Note over Partner, Interbank_market : Receive an SDD IN
Interbank_market ->> XPO : SDD 
XPO -->> XPO: internal controls
XPO -->> Partner: Callback 19
Partner -->> User: notification


```

<br/>

* * *

### State diagram for an SDD IN

```mermaid
stateDiagram-v2
    [*] -->  Succeeded
        [*] --> Refunded
    	[*] --> Rejected
        Rejected --> [*]
        Refunded --> [*]
		Succeeded --> [*]
Rejected


```

| **Status Name** | **Status Id** |
| :--- | :--- |
| Succedeed | 1 |
| Refunded | 2 |
| Rejected | 3 |

  <br/>

* * *

## API & technical items

### POST /api/v1.1/users/{appuserId}/mandates

`uniqueMandateReference` (umr): to use for mandate activation and revocation, and for get mandate  
`id`: to use for SDD OUT creation

### POST /api/v1.1/users/{userId}/payins/directdebits

`orderId`: unique reference
`userId`: can only be one of your internal account  
`amount`: cents
`motif`: description visible in the external app

### Error for a mandate creation

| **Use case** | **HTTP code** | **Code** | **Response** |
| :--- | :--- | :--- | :--- |
| Technical error on our supplier side | 400 | 1056 | {"Code": 1056,  <br/>"ErrorMessage": "Erreur creation mandat.",  <br/>"Title": "L'opération ne peut pas aboutir",  <br/>"Priority": 2,  <br/>"Date": "2024-05-28T12:56:13.9122356Z",  <br/> "OperationId":"81e6a6e9b12064e14d636477904fb621"}|


<br/>

* * *

### Error for a SDD OUT creation

| **Use case** | **Transaction** | **HTTP code** | **Code** | **Response** |
| :--- | :--- | :--- | :--- | :--- |
| orderId already exists | Not created | 400 | 710 | {"Code": 710,  <br/>"ErrorMessage": "Opération déjà existante.",  <br/>"Title": "L'opération ne peut pas aboutir",8  <br/>"Priority": 2,  <br/>"Date": "2024-05-22T14:36:43.3317607Z",  <br/>"OperationId": "7bf9a2a1de20f2be1ccb56c89475dd8a"} |
| Invalid Mandate | Created | 400 | 1025 | {  <br/>"Code": 1025,  <br/>"ErrorMessage": "Le status du mandat est invalid",  <br/>"Title": "L'opération ne peut pas aboutir",  <br/>"Priority": 2,  <br/>"Date": "2024-05-22T14:44:21.8696087Z",  <br/>"OperationId": "5a2894dfc63eb5e2f94d0f5f2362d961"} |
| Can not created 2 SDD | Created | 400 | 1026 | {  <br/>"Code": 1026,  <br/>"ErrorMessage": "Une erreur technique est survenue, veuillez réessayer. Si l'erreur persiste, contactez le support client S-money.",  <br/>"Title": "Erreur technique",  <br/>"Priority": 2,  <br/>"Date": "2024-05-22T14:44:21.8696087Z",  <br/>"OperationId": "5a2894dfc63eb5e2f94d0f5f2362d961"} |
| Action not authorized | Created | 401 | 362 | {  <br/>"Code": 362,  <br/>"ErrorMessage": "Opération non autorisée",  <br/>"Title": "",  <br/>"Priority": 2,  <br/>"Date": "2024-05-22T14:35:52.4521289Z",  <br/>"OperationId": "fe02aa2ac8481ec53707dd003aca72be"} |
| SDD created in the past | Not created | 400 | 715 | {"Code": 715,  <br/>"ErrorMessage": "Paramètre(s) d'appel invalide(s). Invalid date",  <br/>"Title": "L'opération ne peut pas aboutir",  <br/>"Priority": 2,  <br/>"Date": "2024-05-28T12:47:33.1807154Z",  <br/>"OperationId":"98139f1c201f12b510c6e8fb8d431bed"} |
| Limit reached | Created | 400 | 149 | {"Code": 362,  <br/>"ErrorMessage": "Plafond de transaction atteint",  <br/>"Title": "Opération non autorisée",  <br/>"Priority": 2,  <br/>"Date": "2024-05-28T12:47:33.1807154Z",  <br/>"OperationId":"98139f1c201f12b510c6e8fb8d431bed"} |
| Insufficient balance | Created | 400 | 362 | {"Code": 362,  <br/>"ErrorMessage": "Opération non autorisée",  <br/>"Title": "",  <br/>"Priority": 2,  <br/>"Date": "2024-05-28T12:47:33.1807154Z",  <br/>"OperationId":"98139f1c201f12b510c6e8fb8d431bed"} |

<br/>

* * *

### Error for a mandate revocation

| **Use case** | **HTTP code** | **Code** | **Response** |
| :--- | :--- | :--- | :--- |
| Revocation in the futur | 400 | 1   | {"Code": 1,  <br/>"ErrorMessage": "Une erreur technique est survenue, veuillez réessayer. Si l’erreur persiste, contactez le support client S-money. The mandate is just allowed to be revoked in the current date.",  <br/>"Title": "Erreur technique",  <br/>"Priority": 2,  <br/>"Date": "2024-05-28T12:57:56.1073723Z",  <br/>"OperationId": "ef85ecfe6c6f83a48115046f930f86b4"} |
  
<br/><br/>

* * *

## R-transactions
Some direct debit transactions require exception handling, because one of the parties involved does not or cannot process the collection in the
normal way. This exception handling involves the sending of messages called R-transactions because their names all start with an R: Refusals,
Rejects, Returns, Refunds, Reversals. The definitions of the various SDD R-transactions are outlined this document	:
https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2024-11/EPC173-14%20v8.0%20Guidance%20on%20Reason%20Codes%20for%20SDD%20R-transactions.pdf


### General scheme

```mermaid
sequenceDiagram
Participant Before
Participant D-14
Participant D-1 bank business day
Participant D Payment Date
Participant D5 bank business day
Participant D8 weeks
Participant D13 months

Before -->> D-1 bank business day: Revocation by creditor
D-14 -->> D Payment Date: Request for cancellation from creditor's bank
D-14 -->> D Payment Date: Reject from the debitor's bank
D-14 -->> D Payment Date: Refusal from the debitor's bank

D Payment Date -->> D5 bank business day : Reversal by Creditor
D Payment Date -->> D5 bank business day : Return
D Payment Date -->> D8 weeks : Request for refund
D8 weeks -->> D13 months : Request for refund for <br/>an unauthorized transaction

```

Reject example: account closed
Refusal by debtor example: the user debited by the SDD OUT refused 

Reversal by creditor example: external bank debit error.
Return example: insufficient balance

<br/>

* * *

### General sequence diagram
In the case of a reject or a refusal the day or after the paymentDate, a new operation is created: this operation is named R-transaction. 
Each of these two operations has an independent status diagram, but the R-transaction is linked to the original operation through the field `refundReference`.

### Case refund after the payment date

```mermaid
sequenceDiagram
Title: R-transaction for a completed SDD OUT
autoNumber
Participant Partner
Participant XPO
Participant External_bank


Partner -->> XPO : SDD OUT {reference:X}
XPO -->> External_bank: SDD OUT
XPO -->> Partner: Callback 18 {reference:X, status 1}

Note over Partner, External_bank : Refund
External_bank -->> XPO: R-transaction refund
XPO -->> Partner: Callback 18 {reference:X,status:2, refundReference:Y}

```
The refund operation has a status 1.

:::note
No callback is sent for the refund operation.

As a result, when refundReference is not empty, you must perform a GET request on the refund operation to retrieve the details.
:::


### Case reject or refusal after the payment date

```mermaid
sequenceDiagram
Title: R-transaction for a completed SDD OUT
autoNumber
Participant Partner
Participant XPO
Participant External_bank


Partner -->> XPO : SDD OUT {reference:X}
XPO -->> External_bank: SDD OUT
XPO -->> Partner: Callback 18 {reference:X, status:0}

Note over Partner, External_bank : Reject
External_bank -->> XPO: R-transaction reject
XPO -->> Partner: Callback 18 {reference:X, status 3,refundReference:Y}

```
The refund operation has a status 1.

:::note
No callback is sent for the refund operation.

As a result, when refundReference is not empty, you must perform a GET request on the refund operation to retrieve the details.
:::

In this case, Xpollens can not refuse to reimburse the external bank.

<br/>

* * *

### sepaReasonCode & sepaReason
These attributes are visible in callbacks 18 and 19. They are filled when the SDD is refused and a R-transaction 

Please referee to this link, page 5, to find all code, definition and associated use cases.
https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2024-11/EPC173-14%20v8.0%20Guidance%20on%20Reason%20Codes%20for%20SDD%20R-transactions.pdf

<br/>

* * *

## FAQ

### FAQ 1 : Can we refuse an SDD IN?
Currently, Xpollens platform can not refuse an SDD IN.

### FAQ 2 : How to simulate an SDD IN?
Ask your Customer Integration Manager to create one.
