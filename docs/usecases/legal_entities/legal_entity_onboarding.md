# Purpose
The purpose of this document is to describe the workflow / steps required to create a Legal Entity / Company / Professional User, using the XPollens API.
Those steps have to be achieved using the **XPollens APIs** and **XPollens Callbacks**.

* * *
# Reference

:::note  Legal Entity Creation XPollens APIs
* Initiate the creation of a Legal Entity (**mandatory**)
	* https://docs.xpollens.com/api/Users#post-/api/v2.0/legalentities
* Sign the service Terms & conditions (**param**)
	* https://docs.xpollens.com/api/Users#post-/api/v2.0/users/-AppUserId-/cgu
* Provide FATCA information (**param**)
	* https://docs.xpollens.com/api/Compliance#patch-/api/v3.0/users/-appUserId-/fatca-eai
* Provide FATCA documents (**param**)
	* https://docs.xpollens.com/api/KYC#get-/api/v3.0/users/-AppUserId-/fatca/attachments/-Key-
* Provide Benefical owners declarative (***optional***)
	* https://docs.xpollens.com/api/Users#patch-/api/v2.0/users/-appUserId-/beneficial-owner-declarative
:::

:::note  Legal Entity Management XPollens APIs
* Retrieve Legal Entity details
	* https://docs.xpollens.com/api/Users#get-/api/v2.0/legalentities
* Update Legal Entity information
	* https://docs.xpollens.com/api/Users#put-/api/v2.0/legalentities/-legalEntityId-
:::

:::note  Representatives XPollens APIs 
* Create user representative (mandated, legal representative, Beneficial owner) (**mandatory**)
	* https://docs.xpollens.com/api/Users#post-/api/v2.0/users
* Sign the Terms & Conditions (**param**)
	* https://docs.xpollens.com/api/Users#post-/api/v2.0/users/-AppUserId-/cgu
* Provide FATCA information (**param**)
	* https://docs.xpollens.com/api/Compliance#patch-/api/v3.0/users/-appUserId-/fatca-eai
* Provide FATCA documents (**param**)
	* https://docs.xpollens.com/api/KYC#get-/api/v3.0/users/-AppUserId-/fatca/attachments/-Key-
* Create a KYC demand (***param***)
	* https://docs.xpollens.com/api/KYC#post-/api/v3.0/users/-appUserId-/kyc/demand
* Upload KYC diligence (***param***)
	* https://docs.xpollens.com/api/KYC#post-/api/v3.0/users/-appUserId-/kyc/attachments
* Provide beneficial owner declaratives (***optional***)
	* https://docs.xpollens.com/api/Users#patch-/api/v2.0/users/-appUserId-/beneficial-owner-declarative
* Provide User Declaratives (**param**)
	* https://docs.xpollens.com/api/Users#post-/api/v2.0/users/-AppUserId-/declarative
:::

:::note  XPollens Callbacks
| Scope | Documentation link | Purpose | Trigger |
| ----- | ------------------ | ------- | ------- |
| Legal Entity creation | https://docs.xpollens.com/api/Callbacks#post-/-callback43Url- | Provide information on legal entity | on status change |
| Legal Entity KYB | https://docs.xpollens.com/api/Callbacks#post-/-callback46Url- | Provide information on legal entity KYB demand | on KYB demand status change |
| Legal entity & User FATCA information | https://docs.xpollens.com/api/Callbacks#post-/-callback44Url- | Provide information on FATCA declaration | on FATCA status change |
| Legal Entity Account Creation | https://docs.xpollens.com/api/Callbacks#post-/-callback45Url- | Provide information on legal entity Bank Account | on account status change |
| Representative creation | https://docs.xpollens.com/api/Callbacks#post-/-callback34Url- | Provide information on user representative onboarding status | on user representative status change |
| Representative KYC | https://docs.xpollens.com/api/Callbacks#post-/-callback04-V2.0Url- | Provide information on user representative KYC status | on status change |
| Representative Risk level | https://docs.xpollens.com/api/Callbacks#post-/-callback32Url- | Provide information on representative risk level | on risk level change |
| Representative PEP | https://docs.xpollens.com/api/Callbacks#post-/PoliticallyExposedPersonStatusCreatedOrUpdated | Provide information on representative political exposition | on political exposition change |
| Representive KYC | https://docs.xpollens.com/api/Callbacks#post-/-callback48Url- | Provide webview URL for representative KYC verification | at KYC demand creation |
:::

* * *
# Legal Entity Creation
## Introduction
XPollens provides all necessary APIs to onboard legal entities.
Depending on the partner setup, the steps to onboard a company can be either mandatory or optional.
The onboarding workflow needs to be discussed between XPollens and the partner prior the integration phase begins.
This document will cover the most complete onboarding use case when all steps are required  to complete the onboarding.

* * *
## Onboarding workflow
### Legal Entity creation
#### User Flow
:::note  
The following forms are provided as examples to illustrate the information required for onboarding.
:::
Choose your country
![091ea5c8f793f6019190bbf461abd961.png](./_resources/1.png)

Fill in required information
![480c47622c43fd76e26df57d2ba9b615.png](./_resources/2.png)

:::note  Note
Company detailed information are not mandatory when registering a French Entity.
All company details will be automatically retrieved from official government data.
:::

* * *
#### French Registered Entity Creation Workflow
In order to register a **french** entity, the following information are required :

* `LegalEntityId`
* `RegistrationNumber` (SIREN)
* `RegistrationCountry` (FR)
* `TurnOver`
* `Currency`
* `HighFinancialIncome`
* `ListedInStockMarkets`
* `isRegulated`

All other information is automatically retrieved through official government  APIs form the company identification number (`SIREN`) :

* **`CompanyName`**
* **`TradeName`**
* **`NaceCode`**
* **`LegalForm`**
* **`CreationDate`**
* **`Address`**

* * *
```mermaid
%%{init: { 'sequence': {'messageAlign': 'center','noteFontSize':'12px','messageFontSize':'14px'} }}%%
sequenceDiagram
	Title: Create legalEntity
	autonumber
	actor le as Legal Entity
	note left of le : Legal Entity Creation<br/>registration of legalEntity = "FR"
	participant pbe as Partner Backend
	participant xbe as XPollens API Gateway
	le ->>+ pbe : Onboarding
rect rgb(250,200,200)
		note right of le: USER MANAGEMENT
		rect rgb(255,255,255)
			pbe ->>+xbe : POST api/v2.0/legalentities<br/>LegalEntityId<br/>RegistrationNumber(SIREN)<br/>RegistrationCountry<br/>TurnOver<br/>Currency<br/>HighFinancialIncome<br/>ListedInStockMarkets<br/>isRegulated<br/>
			xbe --)- pbe : HTTP/202
		end
		note over pbe : legalentity async<br/>creation inprogress
		xbe-)pbe : ⟳ Send Callback 43
		note over pbe,xbe : LegalEntity Info<br/>"LegalEntityRecordStatus":"Initialized"
	end
	rect rgb(180,250,180)
		note right of le: KYB Management
		xbe-)pbe: ⟳ Send Callback 46
		note over pbe,xbe : "KycStatus":"Initialized"
	end	
	rect rgb(180,180,240)
		note left of user: Account Management
		xbe-)pbe: ⟳ Send Callback 45
		note over pbe,xbe : "AppUserId":":AppUserId:"<br/>"AccountId":":AccountId:"<br/>"AccountStatus":"Initialized"
		opt Check Account Creation
			pbe->>+xbe: GET api/v2.0/Accounts/:accountId:
			xbe-->>-pbe : Account Information
			note over pbe,xbe : "iBan":":IBAN:"<br/>"AccountStatus":":AccountStatus:"<br/>etc ...
		end
	end	
```

* * *
#### Foreign Registered Entity Creation Workflow
Foreign companies information can not be retrieved automatically,  the following information have to be provided manually.

* **`CompanyName`**
* **`TradeName`**
* **`NaceCode`**
* **`LegalForm`**
* **`CreationDate`**
* **`Address`**

* * *

```mermaid
%%{init: { 'sequence': {'messageAlign': 'center','noteFontSize':'12px','messageFontSize':'14px'} }}%%
sequenceDiagram
	Title: Create legalEntity
	autonumber
	actor le as Legal Entity
	note left of le : Legal Entity Creation<br/>registration of legalEntity <> "FR"
	participant pbe as Partner Backend
	participant xbe as XPollens API Gateway
	le ->>+ pbe : Onboarding
rect rgb(250,200,200)
		note right of le: USER MANAGEMENT
		rect rgb(255,255,255)
			pbe ->>+xbe : POST api/v2.0/legalentities<br/>LegalEntityId<br/>RegistrationNumber(SIREN)<br/>RegistrationCountry<br/>TurnOver<br/>Currency<br/>HighFinancialIncome<br/>ListedInStockMarkets<br/>isRegulated<br/>CompanyName<br/>TradeName<br/>NaceCode<br/>LegalForm<br/>CreationDate<br/>Address<br/>
			xbe --)- pbe : HTTP/202
		end
		note over pbe : legalentity async<br/>creation inprogress
		xbe-)pbe : ⟳ Send Callback 43
		note over pbe,xbe : LegalEntity Info<br/>"LegalEntityRecordStatus":"Initialized"
	end
	rect rgb(180,250,180)
		note right of le: KYB Management
		xbe-)pbe: ⟳ Send Callback 46
		note over pbe,xbe : "KycStatus":"Initialized"
	end	
	rect rgb(180,180,240)
		note left of user: Account Management
		xbe-)pbe: ⟳ Send Callback 45
		note over pbe,xbe : "AppUserId":":AppUserId:"<br/>"AccountId":":AccountId:"<br/>"AccountStatus":"Initialized"
		opt Check Account Creation
			pbe->>+xbe: GET api/v2.0/Accounts/:accountId:
			xbe-->>-pbe : Account Information
			note over pbe,xbe : "iBan":":IBAN:"<br/>"AccountStatus":":AccountStatus:"<br/>etc ...
		end
	end	
```

* * *
#### Callbacks
Once the `POST api/v2.0/legalentities` is called, it will return an empty `HTTP 202` response.
Partner will then receive information about the legal entity with the following callbacks :

* Callback 43 (Legal Entity Creation)
```json
{
	"type": "43",
	...
	"legalEntityCreationStatus": "Succeeded",
	...
	"legalEntityRecordStatus": "Initialized",
	...
	"identificationLevel": "None"
}
```
* Callback 45 (Legal Entity Account Creation)
```json
{
	"type": "45",
	...
	"accountStatus": "Initialized"
}
```
* Callback 46 (KYB demand creation)
```json
{
"type": "46",
"status": "Initialized",
"expectedDiligences": [
		{
			"type": "Existence_Proof",
			"expectedCount": 2,
			"possibleDiligenceSubTypes": [
				"COMPANY_STATUTES",
				"KBIS",
				"OTHER_EXISTENCE_PROOF"
			]
		},
		{
			"type": "Economic_Activity_Evidence",
			"expectedCount": 1,
			"possibleDiligenceSubTypes": [
				"BALANCE_SHEET",
				"TAX_REPORT",
				"OTHER_ECONOMIC_ACTIVITY_EVIDENCE"
			]
		}
	]
}
```

* * *
### Legal Entity KYB
#### Requested Diligences
The list of requested diligences will be retrieved through the **callback #46** that is received by the partner after le legal Entity creation has been initiated.

Depending on the context, company form, .. one to several documents can be requested from the following :

| Type | #ID| Value                       | Meaning                                           |
| ---- | -- | --------------------------- | --------------------------------------------------|
| ExistenceProof | 25 | COMPANY_STATUTES                 | Statuts of the company |
| ^^ | 26 | KBIS | French KBIS document|
| ^^ | 27 | EXTRACT_D1 | D1 Extract |
| ^^ | 28 | PREFECTURE_RECEIPT | |
| ^^ | 29 | RNSC_CERTIFICATE | |
| ^^ | 30 | ANAH_FORM | |
| ^^ | 31 | OTHER_EXISTENCE_PROOF | |
| ^^ | 43 | OFFICIAL_NEWSPAPER_EXTRACT | |
| ^^ | 44 | FINESS_NOTICE | |
| ^^ | 45 | BUSINESS_CARD | |
| ^^ | 46 | MSA_CERTIFICATE | |
| ^^ | 47 | ORDER_CERTIFICATE | |
| ^^ | 48 | ENIM_CERTIFICATE | |
| EconomicActivityEvidence | 25 | BALANCE_SHEET | |
| ^^ | 34 | TAX_REPORT | |
| ^^ | 35 | OTHER_ECONOMIC_ACTIVITY_EVIDENCE | |
| UboDeclarationForm | 36 | UBO_DECLARATION_FORM | A UBO declaration is a legal document that gives you current, accurate, and reliable information about the true beneficial owners of a corporate company all within your own portal account or integrated API. The legally binding document is signed by a verified authorized person.<br/>Key Attributes in a UBO Declaration<br/><ul><li>Declaration with Verified Electronic Signature</li><li>Signer Name</li><li>Signed at Time and Date</li><li>Signature</li></ul>               | |
* * *
#### User Flow
After the partner received the callback 46 with the list of expected documents. 
The next step consist in asking the user to upload these documents.

![27f0bf070326fa5aa63b8119d2f150c4.png](./_resources/3.png)

* * *
#### KYB demand completness state diagram
For each diligence received from our partner, xpollens calculates the KYB demand completeness.

The demand is considered fully received (legal entity kycDemandStatus = Fully_received) if:

1. All expected diligences are received successfully (for legal entity and contributors)
2. KYC demand(s) of legal representative are complete (With OneyTrust)
3. KYC demand(s) of beneficial owners are fully_received (identity received)
4. All expected fatca diligences received (legal entity fatcaDemandStatus = fully_received) 

```mermaid
stateDiagram-v2
		direction TB
		initialized
		being_received
		fully_received
	  pending
	  incomplete
	  complete
   
		note right of pending
			awaiting external partner\nvalidation
		end note
   
   [*] --> initialized : on user creation
   initialized --> being_received : first diligence received
   initialized --> pending : first KYC received \nthrough OT
   being_received --> fully_received : all expected diligences received
   fully_received --> fully_received : Failure sending to external\n partner for validation
   fully_received --> pending : Diligences have been \nsent succcessfully\nto external partner for validation
   pending --> complete : All diligences \nhave been validated
   pending --> incomplete : missing or \nincorrect diligence
   incomplete --> pending : manual review ok
   incomplete --> complete : All diligences \nhave been validated
   complete --> [*]
   
   
```

* * *
#### KYB diligence status state diagram
```mermaid
stateDiagram-v2
		direction TB
		received
		to_review_manually
	  refused
	  validated
 
   [*] --> received : XPO receives diligence
   received --> to_review_manually: Diligence needs \nmanual review
   received --> refused: diligence sent \nto provider and response KO
   to_review_manually --> refused: response KO \nafter manual review
   to_review_manually --> validated: response OK \nafter manual review
   received --> validated: diligence sent \nto provider and response OK
   refused --> [*]
   validated --> [*]
   
   
```

* * *
#### KYB diligence sequence diagram
##### Existence proofs
```mermaid
%%{init: { 'sequence': {'messageAlign': 'center','noteFontSize':'12px','messageFontSize':'14px'} }}%%
sequenceDiagram
	Title: KYB Diligences
	autonumber
	note left of le : Legal Entity KYB Diligences
	participant le as Legal Entity
	participant pbe as Partner Backend
	participant xbe as XPollens API Gateway
	rect rgb(180,250,180)
		note right of le: Existence Proofs<br/>2 documents required between<br/>25 	COMPANY_STATUTES<br/>26 KBIS,27 EXTRACT_D1<br/>28 PREFECTURE_RECEIPT<br/>29 RNSC_CERTIFICATE<br/>30 ANAH_FORM<br/>31 OTHER_EXISTENCE_PROOF
		le ->>+ pbe : Upload Diligences
		loop until minimum required diligences is reached
		 rect rgb(255,255,255)
			 pbe ->>+xbe : POST api/v2.0/users/:appUserId:/kyc/attachments
			end
			rect rgb(255,255,255)
			  xbe -->>- pbe : HTTP/201<br/>type/status/files
			end
			rect rgb(130,200,130)
					note right of le: KYB Management
					xbe-)pbe: ⟳ Send Callback 46<br/>KYB Demand
					note over pbe,xbe : "KycStatus":"Initialized" || "Being_received"
			end			
			rect rgb(250,180,180)
				note right of le: USER MANAGEMENT
				xbe-)pbe : ⟳ Send Callback 43<br/>Legal Entity Updated
				note over pbe,xbe : LegalEntity Info<br/>"LegalEntityRecordStatus":"inprogress"
			end			
		end
	end	
```

* * *
##### Address proof
```mermaid
%%{init: { 'sequence': {'messageAlign': 'center','noteFontSize':'12px','messageFontSize':'14px'} }}%%
sequenceDiagram
	Title: KYB Diligences
	autonumber
	note left of le : Legal Entity KYB Diligences
	participant le as Legal Entity
	participant pbe as Partner Backend
	participant xbe as XPollens API Gateway
	rect rgb(180,250,180)
		note right of le:Address Proofs<br/>1 document required between<br/>26 KBIS<br/>30 ANAH_FORM<br/>32 INVOICE
		le ->>+ pbe : Upload Diligences
		loop until minimum required diligences is reached
		 rect rgb(255,255,255)
				pbe ->>+xbe : POST api/v2.0/users/:appUserId:/kyc/attachments
			end
			rect rgb(255,255,255)
				xbe -->>- pbe : HTTP/201<br/>type/status/files
			end
			rect rgb(130,200,130)
					note right of le: KYB Management
					xbe-)pbe: ⟳ Send Callback 46<br/>KYB Demand
					note over pbe,xbe : "KycStatus":"Being_received"
			end			
			rect rgb(250,180,180)
				note right of le: USER MANAGEMENT
				xbe-)pbe : ⟳ Send Callback 43<br/>Legal Entity Updated
				note over pbe,xbe : LegalEntity Info<br/>"LegalEntityRecordStatus":"inprogress"
			end			
		end
	end	
```

* * *
##### Economic Activity Evidences
```mermaid
%%{init: { 'sequence': {'messageAlign': 'center','noteFontSize':'12px','messageFontSize':'14px'} }}%%
sequenceDiagram
	Title: KYB Diligences
	autonumber
	note left of le : Legal Entity KYB Diligences
	participant le as Legal Entity
	participant pbe as Partner Backend
	participant xbe as XPollens API Gateway
	rect rgb(180,250,180)
		note right of le:Economic Activity Evidence<br/>1 document required between<br/>34 TAX REPORT<br/>33 BALANCE SHEET<br/>35 OTHER_ECONOMIC_ACTIVITY_EVIDENCE
		le ->>+ pbe : Upload Diligences
		loop until minimum required diligences is reached
			rect rgb(255,255,255)
				pbe ->>+xbe : POST api/v2.0/users/:appUserId:/kyc/attachments
			end
			rect rgb(255,255,255)
				xbe -->>- pbe : HTTP/201<br/>type/status/files
			end
			rect rgb(130,200,130)
					note right of le: KYB Management
					xbe-)pbe: ⟳ Send Callback 46<br/>KYB Demand
					note over pbe,xbe : "KycStatus":"Being_received"
			end			
			rect rgb(250,180,180)
				note right of le: USER MANAGEMENT
				xbe-)pbe : ⟳ Send Callback 43<br/>Legal Entity Updated
				note over pbe,xbe : LegalEntity Info<br/>"LegalEntityRecordStatus":"inprogress"
			end			
		end
	end	
```

* * *
##### All diligences received / KYB complete
```mermaid
%%{init: { 'sequence': {'messageAlign': 'center','noteFontSize':'12px','messageFontSize':'14px'} }}%%
sequenceDiagram
	Title: KYB Diligences
	autonumber
	note left of le : Legal Entity KYB Diligences
	participant le as Legal Entity
	participant pbe as Partner Backend
	participant xbe as XPollens API Gateway
	rect rgb(180,250,180)
		rect rgb(130,200,130)
				note right of le: KYB Management
				xbe-)pbe: ⟳ Send Callback 46<br/>KYB Demand
				note over pbe,xbe : "KycStatus":"FullyReceived"
		end			
		rect rgb(130,200,130)
				note right of le: KYB Management
				note right of le: All diligences have been<br/>validated by XPO provider
				xbe-)pbe: ⟳ Send Callback 46<br/>KYB Demand
				note over pbe,xbe : "KycStatus":"Complete"
		end			
	end	
```

* * *
#### Sending diligence
The `POST api/v2.0/users/{{legalEntityId}}/kyc/attachments` API will be used to send required diligence to XPollens.

:::note 
The type and number of expected diligences is contained in the callback 46 received by the partner
The API has to be called for each expected diligence by the partner
:::

The callback 46 will inform the partner at each change of the KYB status, providing information on received diligences and their status :

```json
{
    "type": "46",
    "status": "FullyReceived",
    "legalEntityId": "LEGAL_ENTITY_NAME",
    "receivedDiligences": [{
            "diligenceType": "COMPANY_STATUTES",
            "status": "Received",
            "attachments": [{
                    "fileName": "statutes.png",
                    "attachmentKey": "36973678-8763-4e3d-89c4-51448d4e2ad2"
                }
            ]
        }, {
            "diligenceType": "KBIS",
            "status": "Received",
            "attachments": [{
                    "fileName": "kbis.png",
                    "attachmentKey": "157b4121-9a84-4181-b9d2-57e84211548a"
                }
            ]
        }, {
            "diligenceType": "BALANCE_SHEET",
            "status": "Received",
            "attachments": [{
                    "fileName": "balance.png",
                    "attachmentKey": "8c8a55f0-cb9d-454a-8643-0e89e3fda433"
                }
            ]
        }
    ]
}
```

```json
{
    "type": "46",
    "status": "Pending",
    "legalEntityId": "LEGAL_ENTITY_NAME",
    "receivedDiligences": [{
            "diligenceType": "COMPANY_STATUTES",
            "status": "To_Review_Manually",
            "attachments": [{
                    "fileName": "statutes.png",
                    "attachmentKey": "36973678-8763-4e3d-89c4-51448d4e2ad2"
                }
            ]
        }, {
            "diligenceType": "KBIS",
            "status": "To_Review_Manually",
            "attachments": [{
                    "fileName": "kbis.png",
                    "attachmentKey": "157b4121-9a84-4181-b9d2-57e84211548a"
                }
            ]
        }, {
            "diligenceType": "BALANCE_SHEET",
            "status": "To_Review_Manually",
            "attachments": [{
                    "fileName": "balance.png",
                    "attachmentKey": "8c8a55f0-cb9d-454a-8643-0e89e3fda433"
                }
            ]
        }
    ]
}
```

:::warning  IMPORTANT
The review of diligences can take up to several days in case additional controls are needed.
:::

:::note  KYB completion
The KYB final status will be obtained only once the contributors KYC have been also validated.
:::

* * *
### Legal Entity FATCA/EAI
After all KYB steps have been performed, the user has to provide FATCA/EAI information of the legal entity.
The `PATCH api/v2.1/user/{{legalEntityId}}/fatcaEai` has to be called by the partner for FATCA declaration.
Depending on the company country of operation, additional documents may be requested. 
These documents can be provided via the `api/v3.0/users/{{legalEntityId}}/fatca/attachments` API.

The list of documents that wen be requested is as follow : 

| Id                       | Code                                           | Description |
| --------------------------- | --------------------------------------------------|----|
| 22                 | FATCA_W9 | W9  Form |
| 23                 | FATCA_W8-BEN | W8-Ben Form | 
| 24               | FATCA-OTHER | 	Other personal FATCA supported documents | 
| 38               | FATCA_CERTIFICATION_FORM | Signed FATCA self-certification document |
| 39               | FATCA_W8-BEN-E | The W8-BEN-E document. Required only for legal entities |

* * *
#### User Flow
Asking for FATCA/EAI declarative information :

![589cc80e776a89b18af60872886cb935.png](./_resources/4.png)

Upload required documents :

![bd6bf8b293d1035529635bff1d9a5949.png](./_resources/5.png)

* * *
#### FATCA validation sequence diagram

```mermaid
%%{init: { 'sequence': {'messageAlign': 'center','noteFontSize':'12px','messageFontSize':'14px'} }}%%
sequenceDiagram
	Title: Accept CGUs
	autonumber
	note left of le : Legal Entity FATCA
	participant le as Legal Entity
	participant pbe as Partner Backend
	participant xbe as XPollens API Gateway
	rect rgb(250,180,180)
		note right of le: USER MANAGEMENT
		le ->>+ pbe : Initiate FATCA declaration
		rect rgb(255,255,255)
			pbe ->>+xbe : PATCH api/v2.0/users/:legalEntityId:/fatcaeai
			xbe --)- pbe : HTTP/201
		end
		note over pbe : Returns required documents list
		rect rgb(180,250,180)
			note right of le: KYB Management
			xbe-)pbe: ⟳ Send Callback 44<br/>FATCA Demand
			note over pbe,xbe : "fatcaeaistatus":"NOK"
		end					
		rect rgb(255,255,255)
			pbe ->>+xbe : POST api/v2.0/users/:legalEntityId:/fatca/attachments
			xbe --)- pbe : HTTP/200
		end
		note over pbe : upload required documents list
		rect rgb(180,250,180)
			note right of le: KYB Management
			xbe-)pbe: ⟳ Send Callback 44<br/>FATCA Demand
			note over pbe,xbe : "fatcaeaistatus":"OK"
		end	
		xbe-)pbe : ⟳ Send Callback 43<br/>Legal Entity Creation or Update
		note over pbe,xbe : LegalEntity Info<br/>"LegalEntityRecordStatus":"in_progress"
	end
```

* * *
#### Sending diligence
The `POST api/v2.0/users/{{legalEntityId}}/fatca/attachments` API will be used to send required diligence to XPollens.

:::note 
The type and number of expected diligences is contained in the callback 44 received by the partner
The API has to be called for each expected diligence by the partner
:::

The callback 44 will inform the partner at each change of the FATCA status, providing information on received diligences and their status :

* Pending FATCA
```json
{
    "appUserId": "LEGAL_ENTITY_NAME",
    "diligences": [{
            "files": [
                "FATCA_W8-BEN.pdf"
            ],
            "status": "Awaiting",
            "reason": null
        }
    ],
    "fatcaEaiStatus": "Pending",
    "date": "2023-04-29T09:59:49",
    "type": "44"
}
```

* Ongoing FATCA
```json
{
    "appUserId": "LEGAL_ENTITY_NAME",
    "diligences": [{
            "files": [
                "FATCA_W8-BEN.pdf"
            ],
            "status": "Received",
            "reason": null
        }
    ],
    "fatcaEaiStatus": "Pending",
    "date": "2023-04-29T09:59:49",
    "type": "44"
}
```

* Validated FATCA
```json
{
    "appUserId": "LEGAL_ENTITY_NAME",
    "diligences": [{
            "files": [
                "FATCA_W8-BEN.pdf"
            ],
            "status": "Validated",
            "reason": null
        }
    ],
    "fatcaEaiStatus": "OK",
    "date": "2024-04-29T10:09:52",
    "type": "44"
}
```
* * *
## Representatives creation
Once all the previous steps have been performed to onboard the legal entity, the user has to provide information on company contributors.
### Roles
3 roles can be defined for the relation between contributors and the legal enity :

* Mandated
* LegalRepresentative
* BeneficialOwner

:::warning  IMPORTANT
**At least one user should have the Mandated role (this user can be the legal representative or one of the beneficial owners)**
:::

* * *
### User creation
#### User Flow
Each of the  legal entity contributor has to provide some information and diligences about their identity.
The first step of the user onboarding consists in providing personnal information about the user and then create the user with the `POST api/v2.0/users` APIs.

![bfa481888258f1401cec6f26b4e9dd3f.png](./_resources/6.png)

#### More information
You can refer to the Usedrf onboarding available documentation here : https://docs.xpollens.com/usecases/users/onboarding/user_onboarding

* * *
## Legal Entity T&C validation
The last required steps to onboard the legal entity once all other steps are completed and validated is to sign the Terms & Conditions.
After presenting the terms and conditions to the company representative, you have to call the `POST /api/v2.0/users/{{legalEntityId}}/cgu` APIs to  formalize the acceptance of the terms and conditions.

***
# Concluding remarks
After all those steps have been perform, the legal enity account is fully operationnal.

:::note
Please note that the workflow introduce in this document contains all the required steps to onboard a legal entity with the default requirements and environment parameterization.

Depending on the use case, the XPollens API flexibility allows for several other workflow to be operated.
:::