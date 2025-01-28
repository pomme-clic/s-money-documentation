# Instant Payment (IP)

## Create a beneficiary

Before being able to perform an **instant transfer**, it is necessary to add the transfer recipient to one's list of beneficiaries.

The [Create a beneficiary](/api/TransferBeneficiary#post-/api/v2.0/users/-appUserId-/beneficiary) endpoint is used in order to create and associate an external beneficiary account in order to perfom a Sepa Out operation.

* The BIC (Bank Identifier Code) is optionnal to add a beneficiary.
* The IBAN (International Bank Account Number) is mandatory to create the beneficiary

  
The following sequence diagram shows the API workflow to add a beneficiary :

  
<br/><br/>  

```mermaid
sequenceDiagram
Title: Create a beneficiary
autoNumber
Actor User
Participant Partner
Participant XPO
Participant sca as SCA Partner
User ->> Partner : Add bank account
Partner ->> XPO : post /api/sca/v2.0/users/{appUserId}/beneficiary
XPO -->> Partner :return OK (201)
XPO ->> sca : Authentication<br/>requested
Partner -->> User : Authentication required<br/>{authenticationId}
sca -->> User : Authentication push notification request
User ->> sca : Authentication
sca -->> XPO : Authentication<br/>result
XPO -->> XPO : Authentication OK
XPO --) Partner : Callback 36<br/>{beneficiaryId}

```

  

:::warning  Important  
When the **add beneficiary** feature is triggered by a manual action from an end user, it is mandatory to use the **sca** route to add a beneficiary as user authentication is required for security / compliance reasons.  
:::

::: note  **API reference**  
API : https://docs.xpollens.com/api/TransferBeneficiary#tag--Beneficiary  
:::

* * *

## Initiate an IP OUT

### State diagram

```mermaid
stateDiagram
[*] --> Created: http 200 <br/> [synch]
Created --> Approved: *Internal status* <br/> transaction validated by <br/> the Payment Decision system
Approved --> Completed : Checks between XPO and <br/> BPCE OK <br/> [Callback]
Approved --> Rejected : Checks between XPO and <br/> BPCE KO <br/>[Callback]
Completed --> [*]
Rejected --> [*]



```

* * *

### IP OUT succeeded

```mermaid
sequenceDiagram

Title: Initiate an IP OUT
autoNumber
Actor User
Participant Partner
Participant XPO
Participant BPCE PS
User ->> Partner : Initiate an IP OUT
Partner ->> XPO : post /api/v3.0/sepa-instant-payments
XPO --) XPO : Check Beneficiary exist and active
XPO --) XPO : Check RefBip eligibility
XPO --) XPO : Check Payment allowed amount
XPO --) XPO : Create transaction

rect rgb(0, 255, 0, 0.1)
XPO ->> Partner :return OK http 201 (status:Created)
Note over XPO, BPCE PS: Checks between XPO and BPCE PS <br/> Need to answer in less than 8 secondes
XPO --) BPCE PS : Processing
BPCE PS --)XPO : IP accepted
XPO -->> Partner :Callback InstantPaymentCreatedOrUpdated {status:Completed, direction:debit}
end
Partner -->> User : Notification

```

  

[`POST /api/v3.0/sepa-instant-payments`](https://docs.xpollens.com/api/SCTINST#post-/api/v3.0/sepa-instant-payments)

[`Callback "InstantPaymentCreatedOrUpdated"`](https://docs.xpollens.com/api/Callbacks#post-/-InstantPaymentCreatedOrUpdated-)

##### Succeeded during the post sepa-instant-payments Check Eligibility

Synchrone reponse

```mermaid
stateDiagram
[*] --> Created: http 200



```

##### Succeeded during the process between Xpollens and BPCE PS

Asynchrone reponse

```mermaid
stateDiagram
     Created --> Completed



```

* * *

### IP OUT failed

```mermaid
sequenceDiagram
Title: Initiate an IP OUT
autoNumber
Actor User
Participant Partner
Participant XPO
Participant BPCE PS
User ->> Partner : Initiate an IP OUT
Partner ->> XPO : post /api/v3.0/sepa-instant-payments
XPO --) XPO : Check Beneficiary exist and active
XPO --) XPO : Check RefBip eligibility
XPO --) XPO : Check Payment allowed amount
XPO --) XPO : Create transaction 


alt Synchronous checks KO
        rect rgb(255, 0, 0, 0.1)
    XPO ->> Partner : http 40x
    Partner -->> User : Notification
        end
        
else Checks KO between XPO and BPCE PS
	rect rgb(0, 255, 0, 0.1)
			XPO ->> Partner : http 201
	end

   rect rgb(255, 0, 0, 0.1)
    Note over XPO, BPCE PS: Checks between XPO and BPCE PS <br/> Need to answer in less than 8 secondes
    XPO --) BPCE PS : Processing
    BPCE PS --)XPO : IP Rejected
    XPO -->> Partner : Callback InstantPaymentCreatedOrUpdated {status:Rejected}
   end
        
end

Partner -->> User : Notification



```

  

#### Failed during the post sepa-instant-payments

| <ins>Status HTTP</ins> | <ins>Error code</ins> | <ins>Reason</ins> | <ins>Definition</ins> |
| --- | --- | --- | --- |
| 400 | 715 | ERR_API_PARAMETER_INVALID | **Non éligble à l'ip** |
| 404 | 147 | ERR_USER_NOTFOUND | \*  |
| 404 | 302 | ERR_IBAN_NOT_FOUND | \*  |
| 201 |     |     | **Created** |
| 500 |     | XPOLLENS INTERNAL ERROR | \*  |

  

#### Failed during the process between Xpollens and BPCE PS

| <ins>Status</ins> | <ins>SepaRejectCode</ins> | <ins>sepaRejectReason</ins> |
| --- | --- | --- |
| Rejected | 500 | Reason not communicated, please contact Xpollens |
| Rejected | AB05 | Transaction stopped due to timeout at the creditor agent |
| Rejected | AB06 | Transaction stopped due to timeout at the Instructed Agent |
| Rejected | AB07 | Agent of message is not online. Generic usage if it cannot be determined who exactly is not online |
| Rejected | AB08 | Creditor Agent is not online |
| Rejected | AB09 | Transaction stopped due to error at the Creditor Agent |
| Rejected | AB10 | Transaction stopped due to error at the Instructed Agent |
| Rejected | AC01 | Account identifier invalid or incorrect (i.e. invalid IBAN or account number does not exist) |
| Rejected | AC04 | Account closed |
| Rejected | AC06 | Account blocked |
| Rejected | AG01 | Credit transfer forbidden on this account |
| Rejected | AAM02 | Not allowed amount |
| Rejected | AM04 | Insufficient funds on the account |
| Rejected | AM05 | Duplicate payment |
| Rejected | AM09 | Wrong amount |
| Rejected | CNOR | Beneficiary bank is not registered under this BIC in the CSM |
| Rejected | FF01 | Operation/transaction code |
| Rejected | FRAD | Fraudulent originated (instant) credit transfer |
| Rejected | ISSUE-DISPCHECK-TIMEOUT-RESPONSE | Timeout on PSP communication, please retry |
| Rejected | MS01 | Reason not specified |
| Rejected | MS02 | By order of the Beneficiary |
| Rejected | MS03 | Reason not specified, please contact Xpollens |
| Rejected | RR02 | Missing Debtor’s Name Or Address |
| Rejected | RR04 | Regulatory Reason |
| Rejected | TM01 | Time-out – maximum execution time has been exceeded |

  
<br/>

* * *

## Receive an IP IN

Xpollens is **eligible** to instant payment.

```mermaid
sequenceDiagram
Title: Receive an IP IN
autoNumber
Actor External User
Participant Counter part Bank
Participant XPO
Participant Partner
Actor Xpollens User
External User ->> Counter part Bank : Initiate an IP OUT
Counter part Bank->> External User  : Retour OK
Counter part Bank ->> XPO : IP for Xpollens
Note over XPO, Counter part Bank: Checks between XPO and BPCE PS <br/> Need to answer in less than 8 secondes
XPO --) XPO : Create Transaction / Created/type Credit )
XPO --) XPO : Check Payment allowed ammount
XPO --) XPO : Update Transaction ( Authorized / Approved ) 
XPO --) Counter part Bank: IP validation (AccountingEvent / AEC02)
XPO -->> Partner : Callback InstantPaymentCreatedOrUpdated  <br/> {status:Completed / direction:credit}
Partner --) Xpollens User: Notification



```

- [`Callback "InstantPaymentCreatedOrUpdated"`](https://docs.xpollens.com/api/Callbacks#post-/-InstantPaymentCreatedOrUpdated-)

* * *

## Recall IP

### Recall IP OUT

How the partner can do a recall > Zendesk ticket to Xpollens' banking production department

#### Succeeded

```mermaid
sequenceDiagram
Title: Request an Recall IP OUT
autoNumber
Actor User
Participant Partner
Actor Xpollens/Production Bancaire
Participant XPO
Participant Counter part Bank

User --) Partner: Recall request
Partner --) Xpollens/Production Bancaire : Recall request (Zendesk)
Xpollens/Production Bancaire --) XPO : Recall Request 
XPO --) XPO : Check initial operation exist ( Debit )
XPO --) XPO : Check initial operation is successed / Completed
XPO --) XPO : Created recall transaction ( Created / Credit )
XPO --) Counter part Bank: Recall
Counter part Bank --) XPO : OK
Note over  XPO, Counter part Bank: 10 days to answer
XPO -->> Partner : Callback InstantPaymentCreatedOrUpdated {status:Completed, isRTransaction:true, direction:credit}
Partner -->> User: Notification



```

- Account credited
- [`Callback "InstantPaymentCreatedOrUpdated"`](https://docs.xpollens.com/api/Callbacks#post-/-InstantPaymentCreatedOrUpdated-)

#### Failed

```mermaid
sequenceDiagram
Title: Request an Recall IP OUT
autoNumber
Actor User
Participant Partner
ACTOR Xpollens/Production Bancaire
Participant XPO
Participant Counter part Bank
Participant Partner

User --) Partner: Recall request
Partner --) Xpollens/Production Bancaire : Recall request (Zendesk)
 Xpollens/Production Bancaire ->> XPO : Recall Request
XPO --) XPO : Check initial operation exist ( Debit )
XPO --) XPO : Check initial operation is successed / Completed
XPO --) XPO :Created recall transaction ( Created / Credit )
XPO ->> Counter part Bank: Recall
Counter part Bank ->> XPO : KO
Note over  XPO, Counter part Bank: 10 days to answer
XPO -->> Partner : Callback InstantPaymentCreatedOrUpdated {status: Rejected, isRTransaction:true}
Partner -->> User: Notification




```

- Account not debited
- [`Callback "InstantPaymentCreatedOrUpdated"`](https://docs.xpollens.com/api/Callbacks#post-/-InstantPaymentCreatedOrUpdated-)

  

* * *

### Recall IP IN

Recall request from an external bank processed by our banking production department

#### Succeeded

```mermaid
sequenceDiagram
Title: Receive an Recall IP IN
autoNumber
Actor External User
Participant Counter part Bank
Actor Xpollens/Production Bancaire
Participant XPO
Participant Partner
Actor Xpollens Enduser

External User -->> Xpollens Enduser: Instant Payment
External User -->> Counter part Bank: recall request
Counter part Bank  ->> Xpollens/Production Bancaire : Recall Approved Request
Xpollens/Production Bancaire ->> Xpollens/Production Bancaire : Reception of Recall
Note over Xpollens/Production Bancaire, XPO: 10 days to answer
Xpollens/Production Bancaire ->> XPO  : Validate Recall

XPO --) XPO : Check initial operation exist ( Credit )
XPO --) XPO : Check initial operation is successed / Completed
XPO --) XPO :Created recall transaction ( Created / Debit )
XPO -->> Counter part Bank: OK
XPO -->> Partner : Callback InstantPaymentCreatedOrUpdated  <br/> {status:Completed, isRTransaction:true, direction:debit}




```

- Account debited
- [`Callback "InstantPaymentCreatedOrUpdated"`](https://docs.xpollens.com/api/Callbacks#post-/-InstantPaymentCreatedOrUpdated-)

#### Failed

```mermaid
sequenceDiagram
Title: Receive an Recall IP IN
autoNumber
Actor External User
Participant Counter part Bank
Actor Xpollens/Production Bancaire
Participant XPO
Participant Partner
Actor Xpollens Enduser

External User -->> Xpollens Enduser: Instant Payment
External User -->> Counter part Bank: recall request
Counter part Bank  ->> Xpollens/Production Bancaire : Recall Approved Request
Xpollens/Production Bancaire -->> Xpollens/Production Bancaire : Reception of Recall
Note over Xpollens/Production Bancaire, XPO: 10 days to answer
Xpollens/Production Bancaire -->> Counter part Bank  : Refuse Recall




```

- Account not debited

  
<br/>

* * *

## How to test

### IP OUT

/!\ Only the ibans of unmocked environment pass the Luhn key checks and can be used.

`POST /api/v2.0/users/{appUserId}/beneficiary`

```json
{
  "displayName": "Compte Xpollens 1",
  "iban": "FR7630001007941234567890185",
  "bic": "SMOEFRP1",
  "firstName": "John",
  "lastName": "Doe",
  "companyName": "Xpollens",
  "zipCode": "75001",
  "email": "john.doe@xpollens.com",
  "phoneNumber": "0123456789"
}

```

**Response**

```json
{
[...]
"beneficiaryId": "YourBeneficiaryId",
[...]
}

```

`POST /api/v3.0/sepa-instant-payments`

```json
{
  "sepaInstantPaymentId": "Ip-out-1",
  "accountId": "account-partner-reference",
  "creditor": {
    "beneficiaryId": "YourBeneficiaryId"
  },
  "amount": {
    "value": "5.00",
    "currency": "EUR"
  },
  "reference": "Reference-Ip-Out",
  "description": "Ip-Out-Description"
}

```


 <br/> 

* * *

### IP IN

Simulator to come, to create cases ask your Customer Integration Manager.

### IP OUT

Simulator to come, to create cases ask your Customer Integration Manager.

<br/>

* * *

## FAQ

*Coming soon*
