import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Changelog

Xpollens changelog since September 2021

---
# Release Note

## Jan 2024 - S82

:::note Release S81
Due to the end-of-year freeze, there was no S81 release  
:::

**⬛️ CARD OPERATION**<br/><br/>
▸ Manage two authorizations at the same time  
▸ Implement retry policy for reversal case  
▸ Fix implementation for duplicate card opposition for unknown cards  

**⬛️ WEB DESK**<br/><br/>
**Debt Management**  
▸ Display debt information on the target operation list  
▸ Card ordering refactoring (Target)  

**⬛️ CARD ISSUING**<br/><br/>
**Top Up refactoring**  
▸ Target Top Up core management has been deployed
* Top up creation  
* Retrieve Top Up details  
* Get All Top Ups for one user  
* Refund a Top Up  
* Get all top up cards registered by user  
* Delete registered top up cards<br/>  

:::note v1.1 endpoints
There is no impact on exposed endpoints for now (v1.1)
:::

▸ Refactoring of associated callbacks so that they are now centralized by the webhook manager.  

**⬛️ PAYMENT OPERATION**<br/>    
**Sepa Direct Debit refactoring (TARGET)**    
▸SDD core refactoring (TARGET)  
▸Legacy API (v1.1) retro-compatibility (SDD IN-OUT, Mandate management)  

:::note API V2.0
New API v2.0 will be delivered in the next release  
:::

**⬛️ Anti-Fraud and Compliance**<br/><br/> 
▸Add `RiskAnalysisStatus` field in the `PoliticallyExposedPersonStatusCreatedOrUpdated` callback  
▸Show user’s full address residence in FATCA’s self-certification  


## Dec 2023 - S80

**⬛ USER & KYC**<br/><br/>
**Multiple legal representatives** <br/>
▸ New role "Mandated" available for KYB user creation (`POST USER`)<br/>
▸ Add new rule to validate legal entity onboarding and put legalentity identification level to full when one mandated has validated his onboarding (and if all other step has been performed)<br/>
▸ Update rule to to validate legal entity onboarding and put legal entity identification level to full when all the legal representative have validated their onboarding<br/>
▸ Update rule to to validate legal entity onboarding and put legal entity identification level to full when all beneficial owner have validated their onboarding<br/>

**⬛️ CARD OPERATION**<br/><br/>
▸ Fix authorization expiration when many authorizations are created at the same time for the same card<br/>
▸ Response time optmization<br/>

**⬛️ WEB DESK**<br/><br/>
**Multi Account**<br/>
▸ Display card list per account<br/>
▸ Improvement on card list and detail pages (adding information and improving display)<br/><br/>
**Operations**<br/>
▸ Add the direction on operations lists and export.<br/>

**⬛️ PAYMENT OPERATION**<br/><br/>
**Sepa Credit Transfer refactoring (TARGET)**<br/>
▸ Delivery of the new SCT based on new Core Banking System (v2.0).<br/>
▸ SCT in/out v1.1 (retro-compatibility) targetization (Endpoints+Callbacks)<br/>
▸ SCT IN/OUT R-transaction (recall, return) targetization<br/>

## Sept-Oct-Nov 2023 - S77/78/79
**⬛️ USER & KYC**<br/><br/>
**Handling the case of electronic signature refusal.**<br/>
A problem has been identified in case the end user refuse to sign the T&C in an electronic signature workflow. 
The refusal of the signature results in the closure of the user account, which should not be the case. An ongoing (unfinished) enhancement is in progress to address this situation and allow a user to continue their onboarding process even in the event of a refusal to sign the terms and conditions<br/><br/>
**Handling the KYC case expiration**<br/>
A problem has been identified in the case where a KYC (Know Your Customer) file initiated more than 90 days ago results in a blockage of the process for the end user. <br/>
An ongoing enhancement is underway to address this issue and allow the user to restart their KYC process beyond the 90-day validity period of a KYC file.<br/><br/>
**New "Third Party Introduction" complementary diligence type**<br/>
Creation diligence subtype Tierce Introduction. This new subtype will be available on partner config (for authorized partners only) and will allow a partner to autovalidate the KYC through a new `complementarydiligence` endpoint.<br/><br/>
**Add document type "Other" for KYB and KYC**<br/>
Partner will be allowed to send multiple type of document regroup in an Other category.
No impact on the KYC process, it's just informative doc. Endpoint to be used is still POST `Attachments`.
<br/>

**⬛ CARD OPERATION**<br/><br/>
**Exposition of the new V1.1 card operation endpoints**<br/> 
All existing APIs now point to the new Core Banking System. This change is seamless and fully backward-compatible for partners but ensures greater stability and scalability, laying the groundwork for the upcoming arrival of new card operation endpoints.<br/><br/>
**Optimization of response times for a card authorization request**<br/>
Several performance improvement have been delivered on the card authorization response time.
<br/>

**⬛ WEB DESK**<br/><br/>
**Kyc**<br/>
▸ Display proof file document in the KYC detail for each customer on the Webdesk<br/>
▸ Display "report" file in the proof file document type<br/>
▸ Adding status “rejected” for KYC demand status on the KYC diligences<br/><br/> 

**Operation list**<br/>
▸ Date and hours of operation target are now display depending of the system date of the computer.<br/>
▸ In france, the date and hours will be display in UTC 	+1 or 2 (depending winter or summer)<br/>
▸ Operation search is also based on the same concept<br/>
▸ Change the label of tag P2P target for "label"<br/><br/>  

**Multi-Account**<br/> 
First components delivered for multi-account management on the webdesk. 
These enhancements will be available only with the full multi-account management scheduled for Q1 2024.<br/><br/>

**️P2P**<br/>
Added the ability to perform peer-to-peer transfers from account to account within a partner scope.
<br/><br/>

**⬛ ️PAYMENT OPERATION**<br/><br/>
**Instant Payment** <br/>
▸ New endpoints v3.0 on full target system delivered. <br/>
▸ Old enpoints v2.0 fully backward compatibles 

## August 2023 - S75

**Users & KYC**
* Netheos integration
	* Block user information update once the KYC is validated. (It should not be possible to update user data once the KYC is validated)

**Anti Fraud and Compliance**
* PEP / AML screening refactoring
	* Refactoring of the entire internal process for PEP and AML screening
	* New callback `PoliticallyExposedPersonStatusCreatedOrUpdated` exposed to partners.

**Card operation**
* Refactoring and improvement of IAS (Issuer Authorization Server)
	* Performance improvements
	* Reliability improvements

⚠ Important note : The new IAS will be activated during the month of September.

**Web desk**
* Performance and reliability improvement of SEPA related functionnalities
* Displaying authorization and accounting balance on the account list
* Add of account balance in search criteriae
* Add account list export functionnality
* Clear text IBAN display in account list
* Other performance and reliability improvements

**Bug Fixing**
* Fix a problem where callback 4 (KYC) was not sent to the partner after the KYC was rejected
* Fix a problem where the bankstatement API returned not result
* Fix an issue where it was not possible to activate a card after receiving it in a specific scenario where user updated his/her personnal information after having ordered a card.

## July 2023 - S74

**Webdesk**
* New "ACCOUNT" list webpage
  * All accounts type are now listed in a new "ACCOUNT" web page
	  * End user accounts
	  * Professional accounts
	  * Internal accounts

**Users & KYC**
* Netheos integration
	* Allow update of user personnal information to trigger automatic KYC controls again after a case has been refused
	* Update of callback 4 to take into account when personnal information update is required


**Bug Fixing**
* Fix a problem with the field `reference` of a sepa credit transfer was not returned by the the API.
* Fix a problem with card operations missing from the bank account statements when they span across two months.
* Fix a problem when trying to get an internal account by API returned an error 500.

## July 2023

**Webdesk**

The latest release of Webdesk introduces a new account list feature that allows users to view and interact with a list of accounts and their associated event targets. The account list is presented on a dedicated page, which includes a search bar, filters, pagination, and displays all types of accounts (pro, part, partner) in a single consolidated view.

**Bug Fixing**

- Inconsistent balances due to IP Out: Resolved an issue where balances were displaying inaccurately as a result of IP Out activities.
- Exporting Operations Failure: Fixed a bug that prevented the successful download of Excel files when exporting operations.
- Loss and Profit Account Retrieval Issue: Addressed an problem that made it impossible to retrieve loss and profit account information.
- Missing data in GET /api/v2.0/webhooks: Fixed an issue where setting the "remove" parameter to false in the mentioned API call was not returning any data.
- Internal Routing Error in POST /api/sca/v3.0/cards/{appUserId}: Resolved a routing issue in the mentioned API call, ensuring proper functionality.
- 500 Error in Account List with Account ID search: Fixed a bug that caused a 500 error when attempting to search for an account using the Account ID field in the account list.

## June 2023

**USER & KYC**

Netheos integration

- Implemented callback 48 that provides the Webview URL to the partner.
- Workflow Identity: Implemented API to send identity diligence.
- Added functionality to retrieve the proof file of the case.
- Resolved issue where cases were rejected due to poor quality of documents. Users can now re-upload the documents.

**Bug Fixing**

**Failed Top Up Failure Callback not sent since 31/01/2023**
- Fixed the issue causing the failure of sending the Top Up Failure Callback. Callbacks will now be sent correctly for any failed top-up transactions.

**Client Account Activated with Non-KYC Client's Limits**
- Fixed the issue causing client accounts to be activated with the limits of a non-KYC client. Activated client accounts will now have the appropriate limits based on their KYC status.

**Failed Callbacks for SCT/SDD/P2P Transactions**
- Resolved the problem causing failed callbacks for SCT, SDD, and P2P transactions. Callbacks will now be successfully triggered for these transaction types.

**Partner unable to update an Account with Existing Phone Number**
- Corrected the uniqueness rule in the PUT/user when a partner wants to update an account with an existing phone number.

**SCT in sandbox simulator has changed**

Old route: ```POST /api/v1.1/api/sct/in/registration```

New route: ```POST /api/v1.1/users/{userid}/sct/in/registration```

New requestBody:

```json

{

  "amountRequest": {

    "value": "1000.15",

    "currency": "EUR"

  },

  "executionDate": "2023-05-31T10:07:10.3255134+02:00",

  "externalBankAccountModel": {

    "thirdPartyIban": "FR7616528000510000001751068",

    "thirdPartyBIC": "SMOEFRP1",

    "thirdPartyFullName": "John Doe"

  },

  "partnerOperationId": "b27a5243-e041-413c-84fe-c42104d4e688",

  "message": "Sending money through SCT",

  "motif": "Sending money with Xpollens"

}

```


## May 2023

**Webdesk**

- Implemented 4 eyes validation for enhanced security and control.
- Task orders are now sorted from oldest to newest, providing a better user experience and easier access to the most recent tasks.

**Anti Money Laundering**

- Improved scoring and compliance with French regulation


**Bug Fixing**

- Fixed an issue with the filter "GET SCT" for operations on VIRTUAL IBAN, which was previously not functional.
- Resolved an error where a "CardActivated" event was triggered for a card that was still in the "Ordered" status.
- Addressed the issue where a "Result Code 400" error occurred when attempting to update a user's phone number in the PUT User v2.0 endpoint, indicating that the phone number was already in use by the same user.
- Fixed the malfunctioning search filters in the Users management section, ensuring all filters now work correctly.
- Resolved the problem with Scoring Endpoints not functioning properly in the Integration environment, allowing for accurate scoring operations.
- Fixed the functionality issues with Card creation Classic Physical in V1.1 and Get card detail in V1.1 endpoints, ensuring they now work correctly.
- Updated the Roles technical with IsReadOnly=1 to ensure the appropriate permissions and restrictions are applied to technical roles.

## April 2023

**Profile Management**

Profile page rights management improvement.
Avoid inconsistency between parent page rights and children page rights.

**Cards Operation**

Added a merchant label for offline card operations on the operation list for card operation details.
Merchant labels are now displayed for both online and offline operations.

**Internal Transfer(P2P)**

Added two new attributes `label` and `subLabel` to display additionnal information on each P2P detail.

**Users (phone number)**

Phone numbers format is checked against E.164 normalization (https://www.itu.int/rec/T-REC-E.164/).
In case of invalid format, user creation will be rejected.

Endpoints concerned
* `POST /api/v2.0/users`
* `POST /api/v1.1/users`
* `PUT /api/v2.0/users/{appUserId}`
* `PUT /api/v1.1/users/{appUserId}`

**Users (address)**

Endpoints v2.0 - address fields such as `street`, and `city` have a maximum character length. See details: https://docs.xpollens.com/api/Users

Endpoints v1.1 - address field `street` can exceed 38 char length, but is truncated to 38 chars by Xpollens card service.

Endpoints concerned:
* `POST /api/v2.0/users`
* `PUT /api/v2.0/users/{appUserId}`
* `POST /api/v1.1/users`
* `PUT /api/v1.1/users/{appUserId}`

**Legal Entity**

`legalForm` and `highFinancialIncome` can now be updated with endpoint `PUT /api/v2.0/legalentities/{legalEntityId}`.

**Card Display**

The PAN can now be copied to the clipboard.


## March 2023
**User onboarding**
- Partners can now send diligence files 
- Improvement KYB demand (KYC for businesses) in status "Awaiting Expertise" 

**Transaction management**
- Internal transfers (P2P) *can* be managed with new endpoints: 
	- ``POST /api/v2.0/users/{accountPartnerReference}/internal-transfer``
	- ``GET /api/v2.0/users/{accountPartnerReference}/internal-transfer/{reference}``
	- ``GET /api/v2.0/users/{accountPartnerReference}/internal-transfer``
- Internal transfers (P2P) now allow for a new extra data, see fields ``label`` and ``subLabel``

## February 2023
**Partner Portal**
- permissions (none, read or write) can now be managed on a per-page basis


## January 2023
**Partner Portal**
- Adding of an access activity log feature (Audit Track)
- Display SDD related to each mandate

**E-Money MVP**
- New version of GET / Accounts API (v2.1) to retrieve account service type (E-Money, Payment Account)
- New account types (Current Account, Trust Account, Savings Account, ..)

**X-Pay**
- Token authorization request (TAR) workflow update
	- No update of the authorization balance at TAR reception
	- No callback #20 sent when TAR is received
	
**SDD**
- Add of unique mandat reference filter in GET /api/v1.1/users/{userid}/sdd API

	   
				   
## November 2022
**Accounts**:
- Deployed the new virtual IBAN feature. You can now create multiple "throwable" IBANs to identify incoming fluxes or to not expose your main IBAN. Documentation on the different use cases enabled can be found [here](/docs/accounts/virtualiban). Technical documentation is [here](/api/accounts).

**Sandbox**:
- Upgraded our sandbox environnement realism by adding simulators for processing of interchange fees and clearing report generation.

**Onboarding**:
- Added a new status "Fraud_Suspicion" & "AwaitingExpertise" for the onboarding process. This change is not reflected in the [callback 4](/api/Callbacks#post-/-callback04Url-) to avoid breaking change in already existing implementation.
- Added an automatic refusal process for users identified as fraudster.

**Operations**:
- Added a [new endpoint](/api/TransferSDD) to revoke a mandate. This new revokation info is also now available in the **GET** method for SDD status. We also added the Appuserid in both responses of the POST and GET methods for SDD. 
- Made an evolution on the callbacks #1 & #5. These callback are now in a JSON body format instead of the old URL Query format. The URL Query format is now **deprecated** and will be decommissioned as soon as all clients made the changes on their side. 

**Partner Portal**:
- Displaying now in plain text the IBAN all across the Partner Portal
- Added a new button to freeze/unfreeze accounts
- Added a few alert messages to improve user experience
- UI improvements on FATCA & KYC screens
- **FOR PECI clients ONLY**: Webdesk users can now access a new screen called "TO DO" that enable them to validate the "SCT IN" type of diligence.

## October 2022
**Card Operations**:
- Set up a new bus between Clearing & existing Operations µService to avoid competitive access ations for high volumes of Card Operations 
- Miscellaneous optimizations related to high volumetry

**WebDesk**:
- The Partner Portal has been migrated to a more stable technical infrastructure that host both our back office and our clients. It's now called Webdesk to represent both of use cases.
- Added status pending for FATCA demand for a better tracking of demand status 

## September 2022
**Users**:

Re-upload of a KYC diligence:
- We now allow to re-upload a KYC diligence in case of failed KYC.


## August 2022
**Cards**:

WishPIN:
- Updated the WishPIN token output to ease integration

**Compliance**:

FATCA/EAI:
- Upgraded our engine to improve detection
- Added error messages. More [here](/api/Compliance).

**Accounts**:

Account closure: 
- Automated the account closure process by updating the endpoint for the Webdesk portal. To help you reduce the customer lifecycle management, closing an account **is now a full-automated process at Xpollens** when using the action button on EPv4/BOv2. 
- Small reminder :  
· Incoming and outgoing transactions for the "closure requested" and "pending closure" status are automatically blocked (except SCT Out and IP Out)  
· When an account is going to be closed, an SCT OUT is triggered when the account balance is > 0€  
· A Return SCT Out is authorized if a the recipient bank returns the money

*Friendly reminder : closing an account is only possible when the account has no more money in it.*


## July 2022
**Users**:

New validation rules on email:
- If email domain is part of a disposable service, error message: "Invalid e-mail"  
- Email must be unique, unless userRecordStatus = "Refused"

Split User/Account:
- User v2.0 endPoints (POST/PUT/GET) are now available (data is still available in V1.1 endpoints)
- Callback 45 is sent when an account is created (automatic when creating a user)
- New endpoint GET /api/v2.0/accounts/{accountId}


## June 2022
**Cards**:
- Added a new endpoint to display CVX2, PAN and Expiry date of a card. 
Please note that this endpoint replaces unused endpoints ``GET /api/v2.0/pan/{cardExternalRef}`` and ``POST	/api/v2.0/cvx2/{cardExternalRef}`` which will be deprecated.
More [here](/api/cardsecure/#get-/api/v2.0/carddisplay/-cardExternalRef-).

**Callbacks**:
- Added 2 new keys: ``sepaReason`` and ``sepaReasonCode`` in JSON payload of callbacks types 16, 17, 18, 19 (SEPA Direct Debits, SEPA Credit Transfer).
More [here](/api/Callbacks).

**Partner portal**:
- UI Improvement of SCT Out
- UI Improvement of card oppose


## May 2022
**Cards** :
- New type of VISA card is now available for issuing : the VISA Infinite. You can issue via the same [endpoint](/api/CardFactory).  
- OTP SMS for Macbook enrolment (Xpay) : We developed a new «OTP SMS» Cardholder verification method for Macbook enrolment. The OTP is sent to the partner through a new [Callback «type 26»](/api/Callbacks#post-/-callback26Url-)

**Onboarding** :
- Multiple wallet can now be attached to a single user. More [here](/api/kyc).
- New PAN copy feature available in the dedicated SDK
- Enrichment of the callback 20 and the GET KYC demand responses

## April 2022
**Partner Portal** :
- We switched the chronological sorting value for card operations. We now use the operation value (time when payment is accepted) instead of the execution value (time when payment is cleared)  
- By the way, these values are accessible and integrated into the [history items](/api/Core) endpoint. (Fields : OperationCreationDate vs ExecutionDate)  
- We eased user experience by switching most used search fields to the top and displaying the search criteria in the same order as in the customer list  
- We also further optimize the export features for operation list  


## Mars 2022
**Cards** :
- A new endpoint  for token Activation in the In-App6 verification workflow has been delivered. More [HERE](/api/xpay).
- We have integrated the alias related to the subscription mode for recurring payment. You can now add the subscription mode to your one click payment method. More [HERE](/api/Core).

**Partner Portal** :
- Improved the export process  

## February 2022
**Partner portal** :
- Added a card cancellation process through the partner portal. You can now cancel a card (if a customer no longer want it for instance) via two simple clicks on your web interface.  

**Users** :
- Improved the v2.0/users POST API endpoint to adapt age of majority according to the user’s country   

## January 2022
**Partner portal** :
- A new profile management module has been added to our Webportal. Partners can now create their own profile with associated rights to tailor access to their own needs.  
- Lifted the limit of displayed transactions to 300 (instead of the previous 150)  
- Improved some labels to be clearer  

**Users** :
- Added the GET method to fetch legal entities  
- Implemented the FATCA process and exposed dedicated endpoints. You can find more [here](/api/kyc)  

## December 2021
**Transfers** :
- Added the Outgoing Sepa Direct Debit feature to our platform. We can now operate SDD both ways (incoming (already existing) and outgoing (new))  
You can now present and manage SDDs, mandates dynamically via our APIs.  
More here : [SDD API](/api/TransferSDD)

**Cards** :
- New validity date for Xpay token. The token is now deleted if not activated for the last 30 days.  

## November 2021
**Onboarding** :  
- Added the EAI/CRS autocertification pdf generation. You can now have your own logo and disclaimer for this document  
- Excluded the complete KYC demands from the SCT diligence cancelation process  

**Cards** :
- Created two new endpoints to display sensitive card infos :  
GET PIN endpoint  
GET CVV + PAN endpoint  
All these new endpoint require to have the SCA SDK installed  
- Improved SDK in-app provisioning stability and performance  
- Added a WishPIN endpoint (GET/api​/v2.0​/tokensignature) to get authentication data  
- Modified the getCVV2 method to be reachable for physical and virtual cards  
- Added two endpoints to display card infos to our client in agent mode  
For PIN:  
GET/api/sca/normal/v2.0/{appUserId}/pin/{cardExternalRef}?channelCode={channelCode}  
For PAN and expiry date :  
GET/api/sca/normal/v2.0/{appUserId}/carddisplay/{cardExternalRef} ?channelCode={channelCode}  

**Transfers** :
- Significantly improved mass P2P calls efficiency  
- Automatized the reject of blocked SCT IN when time limit is reached  

**Partner Portal :**
- Extended the debt management capabilities by adding ATM withdrawals debt management  
## October 2021
**Transfers :**
- Added the French overseas transfer protocol. You can now transfer fund from/to overseas department
**Cards :**
- Improved virtual cards API stability. No impact on existing APIs
**Partner Portal :**
- Added the display of Instant Payment Diligence  
- Improved display of transactions. You can now view 150 transactions instead of 50  
- Corrected cards action buttons display when one was not authorised to see it  
- Added the coma "," character in the list of forbidden character  
- Corrected some error messages  
- Aesthetics changes to improve user comfort  
## September 2021

**Cards:**
- Created a Get Card cumulated values endpoint to check cumulated values for both payments and withdrawals

**Onboarding :**
- Improved the SCT Diligency algorithm to boost matching performance

**Partner Portal :**
- Multiple QOL improvements :  
- Displayed a generic error if an error occured during the limit modification on a card  
- Added new history Items type (16 & 17)  
- Added BIC information on the SCT/IP details  
- Showed new compliance informations (FATCA/EAI)  
- Allowed the orderid search without the operation type in transaction list  
- Added the coma (,) in the list of forbidden character for the names search field  
- Added “Clear all filters" button in the operations page 
