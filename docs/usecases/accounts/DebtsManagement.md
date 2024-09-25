# Debt Management
A debt is created as soon as the authorization balance goes negative. As a consequence, debts can only be created on offline transaction and P2P.

:::warning  It is important to note that the debt carries two concepts:

- the creation of an internal transfert **completed** to cover the balance shortfall
- and the notion of debt owed by the end user to the partner, with its own status.  
    <br/>
:::

* * *
## Attibute definition

The `DebtCreatedOrUpdated` callback is received in 2 cases:  

1- a debt was created  
2- an existing debt changed  
  The `remainingAmount` or/and the `recoveryStatus` changed.

<br/>  

The `internalDebtTransfer` is dedicated to the internal transfer created from the P&L account to the enduser's account to cover the balance shortfall.

* * *
## Debt operation in the webdesk
A line labeled "Debt" is created when the debt is initiated. This line simultaneously represents the InternalDebtTransfer and the current status of the debt.

The operation status is "Completed" even if the debt status (visible in the Webdesk) initially shows as "In Progress."

  
<br/>

* * *
## Debt creation use cases

### Internal transfer

When the `processUnpaid` attribute is set to true, if the amount of the internal transfer exceeds the account balance, a debt is created.

Example:

```mermaid
sequenceDiagram
autoNumber

Participant Partner
Participant XPO

Note over Partner, XPO: Accounting balance 20€ <br/> Authorisation balance 20€ <br/> Total debt: 0€


Partner ->> XPO: POST /api/v2.0/internal-transfers <br/> {amount: 30€, processUnpaid = true}
XPO ->> Partner: HTTP/200
XPO -->> Partner: Callback InternalTransfer

Note over Partner, XPO: The authorization balance can NOT be negative.<br/> A debt is created,  with <br/> debt amount = inital P2P amount - authorisation balance

XPO ->> XPO: Internal debt transfer <br/> {accountId:partner's profit&loss account, <br/>recipient: user, <br/>amount: 10€}
XPO -->> Partner: Callback InternalDebtTransferCreated


XPO ->> XPO: Debt Creation
XPO -->> Partner: Callback DebtCreatedOrUpdated

Note over Partner, XPO: Accounting balance 0€ <br/> Authorisation balance 0€ <br/> Total debt: 10€






```

 <br/>


* * *

### Offline operations

```mermaid
sequenceDiagram
autoNumber

Participant Merchant
Actor User
Participant Partner
Participant XPO

Note over Merchant, XPO: Accounting balance 20€ <br/> Authorisation balance 20€ <br/> Total debt: 0€

User ->> Merchant : Offline Transaction 30€

break wainting for the clearing
    Merchant-->>XPO: Clearing
end
XPO -->> Partner: Callback CardOperationCreatedOrUpdated

Note over Partner, XPO: The authorization balance can NOT be negative. <br/> A debt is created,  with <br/> debt amount = clearing amount - authorisation balance
XPO ->> XPO: Internal debt transfer <br/> {accountId:partner's profit&loss account, <br/>recipient: user, <br/>amount: 10€}
XPO -->> Partner: Callback InternalDebtTransferCreated
XPO ->> XPO: Debt Creation
XPO -->> Partner: Callback DebtCreatedOrUpdated

Note over Partner, XPO: Accounting balance 0€ <br/> Authorisation balance 0€ <br/> Total debt: 10€


```

### Note about offline operation (refer to the dedicated topic for more details)

#### Card X0X

X0X cards have **almost** systematic authorisation.  
Exceptions are made in certain cases:

- parking
- toll
- aircraft

In these cases, if the tpe does not request authorisation, the transactions will still be accepted.

#### Card X2X

X2X cards are systematic authorisation cards. This information is written directly onto the chip. It will therefore be impossible to make payments on tpe that do not require authorisation.

#### Forced operation on the TPE

Despite this feature of the chip, there are POS terminals that allow you to force the operation offline.  
In this case, no preventive action is possible on the Xpollens side: the transaction is carried out, the compensation is received and deducted from the enduser's account.

* * *

### R-transactions

#### Recall SDD OUT during the first 8 weeks afer the payment date

If an SDD credited to the Xpollens account is recalled by the debtor bank within 8 weeks, Xpollens is obliged to return the funds regardless of the account balance. This can therefore create a debt.

 <br/>  

* * *

## Debt recovery

The management of debt collection is entirely up to you. You can debit the account, adjust the remaining balance, or update the debt status as needed. Xpollens does not take any action.

It is important to note that debts must be closed **transaction by transaction** (debt by debt).

### Debt recovery: as soon as the account balance is positive, recovered with fund recovery

Here is a proposed debt recovering sequence:

- As soon as funds are deposited into the account
- Review the outstanding debts
- Recover as much as possible while there are funds available

<br/>

```mermaid
sequenceDiagram
autoNumber

Actor User
Participant Partner
Participant XPO

Note over User, XPO: Accounting balance 0€ <br/> Authorisation balance 0€ <br/> Total debt: X€

User ->> XPO : bank account loading (topup, sct in, ip in, ...)
XPO -->> Partner: Callback associated to the transaction type

Partner ->> Partner: existing open debts ?<br/> (internal request in your backend)

alt Level 1: If existing open debt(s)
    Partner ->> XPO : GET /api/v3.0/debts {userId}
    XPO -->> Partner: list debt amounts {remainingAmount, recoveryStatus}
    
    alt Level 2: as long as sum open debt amounts != 0€ & user balance > 0€
                    
                    loop Level 3: Recover the funds & close the debt.
                        Partner ->> XPO: POST /api/v2.0/internal-transfers <br/>{accountId: userId, recipient: partner's P&L account, amount = Y} 
                        XPO -->> Partner: Callback InternalTransfer
                        Partner ->> XPO: PATCH /api/v3.0/debts/{debtId} <br/>  {remainingAmount:0,  status: ClosedWithRecovery}
                        XPO -->> Partner: Callback DebtCreatedOrUpdated

                    end

        else Level 2: when sum open debt amounts = 0€ or user balance = 0€, stop the loop

else Level 1: No open debt
end

end
 




```

<br/>

The debt must be recorded in the partner's accounts.

* * *
### Transaction in to monitor to recover debt

- Top-up card
- SCT IN & IP IN
- SCT OUT cancellation
- Refund SCT OUT & IP OUT
- SDD OUT
- SDD IN refund
- SDD OUT cancellation
- Card operation IN
- Card authorisation expiration

* * *

### Debt recovery: recovey without fund recovery

You can decide to close the debt without recovering the funds. The losses will then be your responsibility.

```mermaid
sequenceDiagram
autoNumber

Actor User
Participant Partner
Participant XPO

Note over User, XPO: Accounting balance 0€ <br/> Authorisation balance 0€ <br/> Total debt: X€

    Partner ->> XPO : GET /api/v3.0/debts/{debtId}
    XPO -->> Partner: debt {remainingAmount, recoveryStatus}
    
                        Partner ->> XPO: PATCH /api/v3.0/debts/{debtId} <br/>  {remainingAmount:X,  status: ClosedWithoutRecovery}
                        XPO -->> Partner: Callback DebtCreatedOrUpdated

Note over User, XPO: loop if you want to close more than 1 debt without recovery



```

  <br/>
 

* * *

## Technical information

### Internal Debt transfer

The payload is essentially the same as for internal transfer.

In the doc.xpollens, go to Accounts > Accounts statements > v3.0  
[GET /api/v3.0/internal-debt-transfers/{id}](https://docs.xpollens.com/api/AccountStatements#get-/api/v3.0/internal-debt-transfers/-id-)

About the callback  
[InternalDebtTransferCreated](https://docs.xpollens.com/api/Callbacks#post-/-InternalDebtTransferCreated-)

### Debt

In the doc.xpollens, go to Accounts > Accounts Management > v3.0 > Debt

Get a debt by a debt public Id  
[GET /api/v3.0/debts/{debtId}](https://docs.xpollens.com/api/Accounts#get-/api/v3.0/debts/-debtId-)

Get a partial list of debts  
[GET /api/v3.0/debts](https://docs.xpollens.com/api/Accounts#get-/api/v3.0/debts)

Modify a debt  
[PATCH /api/v3.0/debts/{debtId}](https://docs.xpollens.com/api/Accounts#patch-/api/v3.0/debts/-debtId-)

* * *
## Best pratice: how to display debt in your app

### Display a debt balance in addition to the account balance

```mermaid
sequenceDiagram
autoNumber

Actor User
Participant Partner
Participant XPO

Note over User, XPO: Accounting balance 0€ <br/> Authorisation balance 0€ <br/> debt Balance: X€

User ->> Partner : display account balance

Partner ->> XPO : GET /api/v2.0/accounts/{accountId}
XPO ->> Partner : {availableBalance= 0€}

Partner ->> Partner: existing debt? Yes
Partner ->> XPO : GET /api/v3.0/accounts/{accountId}/debt-balance
XPO -->> Partner: value (X)

Partner ->> User: display 2 balances separately: account balance & debt balance



```

   <br/>


* * *

## Debt displayed on account statements

The amount of the debt is not shown on the account statement.

The InternalDebtTransfer as the InternalTransfer are marked "Paiement" in the bank statement.

* * *
## How to test

### Create a debt with a P2P - example Account management fees

1- GET /api/v3.0/accounts/{accountId}

```json
{
    [...]
    "authorizationBalance": "authorizationBalance",
    [...]
}

```

2- Create a P2P that respects the limits, with an amount greater than the balance

POST /api/v2.0/internal-transfers

```json
"Payload": {
  "internalTransferId": "ExternalP2PRef",
  "accountId": {accountId},
  "amount": {
    "value": authorizationBalance+1,
    "currency": "EUR"
  },
  "recipient": {
    "accountId": "Profit_and_lost_accountId"
  },
  "extraDatas": {
    "description": "Custom description",
    "label1": "Label",
    "label2": "SubLabel",
    "label3": "Tag"
  },
  "processUnpaid": true,
    
}
```

3- You receive the callback

```json
{
  "type": "DebtCreatedOrUpdated",
  "data": {
    "debtId": debtId,
    "originTransactionId": "ExternalP2PRef",
    "accountId": {accountId},
    "accountHolderId": {appuserId},
    "creationDate": "YYYY-MM-DDTHH:MM:SS.000Z",
    "amount": {
      "value": "1.00",
      "currency": "EUR"
    },
    "remainingAmount": {
      "value": "1.00",
      "currency": "EUR"
    },
    "recoveryStatus": "InProgress"
  }
}
```

* * *
### Create a debt with an offline operation

1- GET /api/v3.0/accounts/{accountId}

```json
{
    [...]
    "authorizationBalance": "authorizationBalance",
    [...]
}

```

2- Create an offline operation that respects the limits, with an amount greater than the balance  
POST {{URLT}}/v2.0/card-operations/simulate-offline-settlement

```json
{
  "cardId": {{cardId}},
  "amount": {
    "value": authorizationBalance+1,
    "currency": "EUR"
  },
  "operationDate": "2024-07-02T07:23:36.915Z",
  "direction": "Debit", // Debit Credit
  "merchantName": "Discraft Disc",
  "merchantCategoryCode": "5941"
}
```

3- You receive the callback

```json
{
  "type": "DebtCreatedOrUpdated",
  "data": {
    "debtId": debtId,
    "originTransactionId": "x",
    "accountId": {accountId},
    "accountHolderId": {appuserId},
    "creationDate": "YYYY-MM-DDTHH:MM:SS.000Z",
    "amount": {
      "value": "1.00",
      "currency": "EUR"
    },
    "remainingAmount": {
      "value": "1.00",
      "currency": "EUR"
    },
    "recoveryStatus": "InProgress"
  }
}
```

* * *
## FAQ