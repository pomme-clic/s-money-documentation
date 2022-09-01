import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Changelog

Xpollens changelog since September 2021

---
## August 2022
**Cards**:

WishPIN:
- Updated the WishPIN token output to ease integration

**Compliance**:

FATCA/EAI:
- Upgraded our engine to improve detection
- Added error messages. More [here](/api/Compliance).

**Account**:

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
- EndPoints User v2.0 (POST/PUT/GET) are now available and work as intended (data is available in V1.1 endpoints)
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
**Card** :
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
More here : [SDD API](/api/SDD)

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
