import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# User Onboarding Introduction
This documentation applies to the creation of a particular user in the contexte of payment accounts.
* * *
## User status diagram: UserRecordStatus
The userRecordStatus is the user's highest status level. It includes:
- the KYC status,
- the CGU validation,
- the PEP Sanction filtering status, 
- the FACTA/EAI status.

```mermaid
stateDiagram
    [*] --> Initialized: User created
    Initialized --> InProgress : At least one of the expected onboarding step is done
	  	note left of InProgress: Onboarding steps <br/>  - KYC demande <br/> - Declaratives <br/> - PPE/Sanction <br/> - Facta/Eai <br/> - CGU

    InProgress --> Refused : If (Sanction = true and/or PPE = true) <br/> and finalDecision = false
		InProgress --> WithoutKYC : If accountType = Electronic_money <br/> and declarative info is received

	  WithoutKYC --> Refused : If (Sanction = true and/or PPE = true) <br/>  and finalDecision = false
	  InProgress --> Validated : If accountType <> Electronic_money <br/> and all expected onboarding step are validated
	  WithoutKYC --> Validated : If accountType = Electronic_money <br/> and kycStatus = Complete <br/> and PPE/Sanction = false
	  
    Refused --> [*]
    Validated --> [*]
		note right of Validated: PPE/sanction is "OK" if  <br/> - PPE false and Saction = false  <br/> - PPE and/or Sanction = true and finalDecision = true 
```

<br/>

* * *
## User & Account
A user can have several accounts. This is why there is a distinction between accounts and users.
Today, the creation of a user automatically generates the creation of an account.

In the future, these two actions will be decoupled: the account should be created once the user has been created.

<br/>

* * *
## User sequence diagram
### Eletronic_sign workflow
```mermaid
flowchart LR
	Create_User --> KYC
	Create_User --> Wallet_initialization 
	KYC --> CGU 
	KYC --> FACTA/EAI/Declaratives
	Wallet_initialization  --> FACTA/EAI/Declaratives
	KYC --> Filtering
	CGU --> User_validated
  FACTA/EAI/Declaratives --> User_validated
	Filtering --> User_validated
```

* * *
### Identity workflow
```mermaid
flowchart LR
	Create_User --> KYC
	Create_User --> Wallet_initialization
	Wallet_initialization  --> CGU
	Wallet_initialization  --> FACTA/EAI/Declaratives
	KYC --> CGU 
	KYC --> FACTA/EAI/Declaratives
	KYC --> Filtering
	CGU --> User_validated
	FACTA/EAI/Declaratives --> User_validated
	Filtering --> User_validated
```

* * *
### Detailed user onboarding sequence diagram

```mermaid
sequenceDiagram
Title: User onboarding
autoNumber
Participant User
Participant Partner
Participant XPO

Note over User, XPO: User creation

User ->> Partner : Account creation requested<br/>appUserId<br/>civility<br/>lastName<br/>...
Partner ->> XPO : POST / api/v2.0/users
XPO -->> Partner: HTTP/201
XPO --) Partner : Callback 34<br/>userRecordStatus :Initialized
XPO --) Partner : Callback 45<br/>Account Status :Initialized

rect rgb(104, 180, 255, 0.1)
Note over User, XPO: KYC -- See dedicated section --

XPO --) Partner : Callback 4<br/> KYC status Complete
XPO --) Partner : Callback 34<br/>userRecordStatus :InProgress
end

XPO --) Partner : Callback 35<br/>Strong authentication enrollment [Note1]

rect rgb(104, 180, 255, 0.1)
Note over User, XPO: CGU -- See dedicated section --
alt Eletronic_sign <br/> CGU included in the KYC workflow
else Identity
	User --) Partner: CGU validated
	Partner --) XPO : POST /api/sca/v2.0/users/{AppUserId}/cgu
	XPO --) Partner : Callback 4<br/>KYCStatus : Complete
end

XPO --) Partner : Callback 34<br/>userRecordStatus : InProgress
end

rect rgb(104, 180, 255, 0.1)
Note over User, XPO: FATCA EAI -- See dedicated section --
par Declarative informations
	User --) Partner: Declarative 
	Partner --) XPO : POST /api/v2.0/users/{AppUserId}/declarative
	XPO --) XPO : Callback 32<br/>Internal
and Fatca eai
	User --) Partner: Americaness & Tin info 
	Partner --) XPO : PATCH /api/sca/v2.1/user/{appUserId}/fatcaEai
	XPO --) Partner : Callback 44<br/>fatcaEaiStatus: OK
end
end

rect rgb(104, 180, 255, 0.1)
	Note over User, XPO: Filtering -- See dedicated section --
	XPO --) Partner : Callback PoliticallyExposedPersonStatusCreatedOrUpdated <br/>results of PPE filtering and penalties
end
XPO --) Partner : Callback 34<br/>userRecordStatus : Validated
XPO --) Partner : Callback 45<br/>Account Status : Activated
```

<br/>

> **Note**<br/>
> The strong authentication wallet initialization is not a prerequisite for KYC validation if the choosen workflow is "electronic_sign". It can be done at any time after the user has been created.<br/>
> Otherwise (if the workflow is "identity"), the wallet initialization is a prerequesite to sign CGU, and as a consequence a prerequesite to validate the user status.<br/>
> This callback is received as soon as the KYC demand is created.<br/>
> However, it is necessary for user validation, as sending FATCA/EAI information requires strong authentication.<br/>

<br/>

* * *
## APIs, callbacks and technical items
### Create a user
[`POST /api/v2.0/users`](https://docs.xpollens.com/api/Users#post-/api/v2.0/users)
* * *
### Create a KYC demand
`POST /api/v3.0/users/{appUserId}/kyc/demand`
* * *
### Save User declarative
[`POST /api/v2.0/users/{AppUserId}/declarative`](https://docs.xpollens.com/api/Users#post-/api/v2.0/users/-AppUserId-/declarative)
* * *
### Create and update FATCA information for a Customer
[`PATCH /api/sca/v2.1/user/{appUserId}/fatcaEai`](https://docs.xpollens.com/api/Compliance#patch-/api/v2.1/user/-appUserId-/fatcaEai)
* * *
### Callbacks
[`Callback 34`](https://docs.xpollens.com/api/callbacks#post-/-callback34Url-)

[`Callback 4`](https://docs.xpollens.com/api/callbacks#post-/-callback04-V2.0Url-)

[`Callback 44`](https://docs.xpollens.com/api/callbacks#post-/-callback44Url-)

* * *
### CGU
For the Electronic_Sign worlfklow, the CGU are signed through the webview.
For the Identity workflow, the CGU are signed though the dedicated API. 