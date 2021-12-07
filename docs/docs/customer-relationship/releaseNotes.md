import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Changelog

Xpollens changelog since September 2021

---
## December 2021
**Transfers** :
- Added the Outgoing Sepa Direct Debit feature to our platform. We can now operate SDD both ways (incoming (already existing) and outgoing (new)).  
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
- Added a WishPIN endpoint (GET/api​/v2.0​/tokensignature) to get authentication data required to display PIN  
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
