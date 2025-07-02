# Account closure - deprecated
You can ask for an account closure following your customer request or if your customer doesn't, for example, follow your service rules. In the first case the effective closure will take 30 days, in the second the closure will take 60 days. 

:::note
Please note that an account closure can only be asked on a null balance account (ie : the account owner might payout the remaining balance for its closing request to be agreed)
:::

:::note
To allow sandbox testing, the closing delay time in production is immediate. As a consequence, the `expectedCloseDate`  is set to the date of the closure request.  
<br/>

>To achieve "Closed" status, the following prerequisites must be met:
>- All operations must have a final status (i.e., all card authorizations are either completed or expired).
>- The account balance must be €0, both in terms of authorization balance and accounting balance.
:::


:::warning  Important
A request to close an account is irreversible. 
:::

* * *
## State diagram

```mermaid
stateDiagram

state fork_state <<fork>>
Initialized	--> fork_state
Activated --> fork_state

fork_state --> ClosureRequested : closure request received
ClosureRequested --> PendingClosure: Card cancellation validated
PendingClosure --> Closed: 30 days / 60 days later
Closed --> [*]
```

<br/>

* * *
## Flowchart

```mermaid
flowchart TD
A[Closure requested] --> B{"Authorization 
Balance = 0€ ?"} 
B-- Yes --> C[ClosureRequested]
B-- No -->D[Refused]
C-- Card cancellation -->E[PendingClosure]
E-- 30/60 days --> F{"Accounting 
Balance = 0€ ?"}
F-- Yes --> H{"Existing 
closing SCT ?"}
H-- No -->I[Closed]
H-- Yes -->J{"Transfer 
deposited 
in the bank ?"}
J-- Yes -->K[Closed]
J-- No <br/> every day -->F{"Accounting 
Balance = 0€ ?"}
F-- No -->L{"Existing 
beneficiaryAccountId 
in the closure request ?"}
L-- No -->N[zendesk]
L-- Yes -->M["SCT created"]
M-->F
```

* * *
## Account status PendingClosure
To initiate an account closure, the balance must be empty.
If this is not the case, it is necessary to make a call beforehand:
- add a beneficiary
- SCT OUT 


```mermaid
sequenceDiagram
Title: Create a closure account request
autoNumber
Participant Partner
Participant XPO

alt Balance != 0
Partner ->> XPO : Post /api/sca/v2.0/users/{appUserId}/beneficiary
XPO -->> Partner :return OK (201)

alt Standard SCT
	Partner ->> XPO : POST /api/v2.0/sepa-credit-transfers 
	XPO -->> Partner: callback SepaCreditTransferCreatedOrUpdated
else Instant Payment
autonumber 3
	Partner ->> XPO : POST /api/v3.0/sepa-instant-payments
	XPO -->> Partner: callback InstantPaymentCreatedOrUpdated
end
end

Partner ->> XPO : POST /api/v3.0/accounts/{accountId}/closure-request
XPO -->> Partner: callback 45 {accountStatus:ClosureRequested}

XPO ->> XPO : card(s) cancellation
XPO -->> Partner: callback 21 {status:cancelled}
XPO -->> Partner: callback 45 {accountStatus:PendingClosure}

```
<br/>

As soon as the account statut is PendingClosure, the account is frozen

<br/><br/>

* * *

## Transaction accepted or refused during the PendingClosure period
<br/>

| **Type of transaction** | **Acceptation** |
| --- | --- |
| SCT OUT | Refused |
| SCT IN | Refused |
| Recall SCT OUT | Accepted |
| Recall SCT IN | Refused |
| IP IN | Refused |
| IP OUT | Refused  |
| Recall IP IN | Refused |
| Recall IP OUT | Refused |
| SDD IN | Refused  |
| SDD OUT | Refused |
| Top-up | Refused |
| Refund Top-up | Refused |
| Top-up contestation | Accepted |
| Card out authorisation | Refused |
| Card out settlement | Accepted |
| Card out offline | Accepted |
| Card in (card out refund) | Accepted |
| Card out contestation | Accepted |
| P2P | Refused |
| Debt | Accepted |
| Corrective operation (internal XPO) | Accepted |

<br/>

:::note
If charges are to be levied, it is important to do so before the account closure request
:::

<br/>

* * *
## Account closed
### Case: account balance is 0 or beneficiaryAccountId available  
30 / 60 days later, the account automatically changes from PendingClosure to Closed.
If the holder's balance has been credited during this period, all funds are automatically sent to the  `beneficiaryAccountId`  indicated in the request made for the closure-request.

```mermaid
sequenceDiagram
Title: Close the account
autoNumber
Actor User
Participant Partner
Participant XPO

alt Balance != 0
	XPO -->> User: SCT {beneficiaryAccountId}
	XPO -->> Partner: callback SepaCreditTransferCreatedOrUpdated
end
XPO -->> XPO: Account closure
XPO -->> Partner: callback 45 {accountStatus:Closed}


```

<br/><br/>

### Case: missing beneficiaryAccountId and Non-Zero Balance During Account Closure Request

After the 30/60 days, when the closure is requested, but the `beneficiaryAccountId` is either not available or not provided, and the account still has a non-zero balance, it becomes impossible to execute the SCT OUT.

The affected account IDs are included in a specialized report listing all accounts that cannot be closed due to missing IBAN information.

Then next steps are manual: 
- A Zendesk ticket is created and sent to you, containing the list of accounts requiring the IBAN.
- As a partner, you contact your end users to request the necessary IBAN information.
- Once retrieved, you update the Zendesk ticket with the required IBANs.
- The banking team then processes a corrective SCT to transfer the remaining balance.

```mermaid
sequenceDiagram
Title: Close the account
autoNumber
Actor User
Participant Partner
Participant XPO


XPO -->> Partner: zendesk
Partner  -->> User: iban requested
User -->> Partner : iban completed
Partner -->> XPO: zendesk completed

XPO -->> XPO: manual actions to add beneficiary and create SCT OUT

XPO -->> Partner: callback SepaCreditTransferCreatedOrUpdated {"direction": "Debit", "isCorrective": true}

XPO -->> XPO: Account closure
XPO -->> Partner: callback 45 {accountStatus:Closed}


```


:::note
Corrective SCT operations are only available for Xpollens teams.
:::

<br/><br/>

## Transaction accepted or refused as soon as the account is closed
<br/>

| **Type of transaction** | **Acceptation** |
| --- | --- |
| SCT OUT | Refused |
| SCT IN | Refused |
| Recall SCT OUT | Refused |
| Recall SCT IN | Refused |
| IP IN | Refused |
| IP OUT | Refused  |
| Recall IP IN | Refused |
| Recall IP OUT | Refused |
| SDD IN | Refused  |
| SDD OUT | Refused |
| Top-up | Refused |
| Refund Top-up | Refused |
| Top-up contestation | Charged to the Xpollens's holding account |
| Card out authorisation | Refused |
| Late card out settlement | Charged to the Xpollens's holding account |
| Card out offline |Charged to the Xpollens's holding account |
| Card in (card out refund) | Charged to the Xpollens's holding account|
| Card out contestation | Charged to the Xpollens's holding account |
| P2P | Refused |
| Debt | Charged to the Xpollens's outstanding account |
| Corrective operation (internal XPO) | Accepted |

<br/>

:::note
Operations credited in the Xpollens's outstanding account are refunded manually to the enduser.
:::

<br/><br/>

## Suspended operations
In the event of receiving a credit or debit transaction on a closed account, the transaction is created with a "Suspended" status. The end user's account is not debited or credited; instead, the partner's suspense account is impacted.

```mermaid
sequenceDiagram
Title: Transaction on a closed account	
autoNumber
Actor User
Participant Partner
Participant XPO
Participant BPCE

Note over Partner, XPO: Account closed
BPCE -->> XPO: operation
XPO -->> Partner: callback CardOperationCreatedOrUpdated {"status": "Suspended", <br>"cardOperationType": "CardPayment"}

```

<br/><br/>


* * *
## Technical items
### Closure request
[POST /api/v3.0/accounts/{accountId}/closure-request](https://docs.xpollens.com/api/Accounts#post-/api/v3.0/accounts/-accountId-/closure-request)

:::warning  **Important Note**
> - if the end user is a prospect, with no funds in their bank account: you can use the API without the `beneficiaryAccountId` .
> 
> - if the  enduser's account is validated or has funds, the request must include the `beneficiaryAccountId` . Without this, the account can never be closed, as the account balance will never be €0. 
:::

<br/>
In the case that the external account used to receive the funds is frozen / blocked / closed / ..., the funds cannot be returned.
In this case, a manual intervention by Xpollens will be necessary to return the accounts to another account. 

<br/>

* * *
## Best pratices

### Collect debts before closing the account 
Commission cannot be taken out once the account has been closed.
It is therefore essential to collect debts before closing the account. 

### Remove the charges taken from these accounts in the batches
Commission cannot be taken out once the account has been closed.
It is therefore essential that accounts in ClosureRequested, Pendingclosure and Closed status are **removed from the fee-taking batches**.

<br/>

* * *
## FAQ

### FAQ1: What should your application do when a customer requests account closure?
When a customer initiates an account closure request, your application should immediately restrict access to the following functionalities:

- SEPA Transfers: Block both standard SEPA Credit Transfers (SCT) and Instant Payments (IP).
- Card Creation: Disable the ability to request or issue new cards
- Mandate & SDD Creation: Prevent the creation of new mandates and SEPA Direct Debits (SDD).

If a request is made to any of these functionalities after the account closure request, a 40x error will be returned.



<br/>

### FAQ2: When is the latest account statement available?
The last account statement is generated in the first few days after the account status is changed to Closed.
