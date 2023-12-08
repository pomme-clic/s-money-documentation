# Know Your Customer
The new XPollens KYC partner (Netheos) induce some minor changes in the way the KYC should be handled.

* **A new version 3.0 of `POST /api/v3.0/users/{appUserId}/kyc/demand` API**
	* KYC demand were automatically created with the old workflow. It is now mandatory that the partner calls this API to trigger the KYC demand. And it is now possible for the partner to handle several KYC workflows (Identity+Qualified signature or Identity+SCT-IN), the new API will allow the partner, depending on user choice to trigger one workflow or another.

* **A new Callback (48) to received the required information to build the WebView URL that will handle the KYC user journey.**
	* Previously, the WebView URL was sent back through the Entrust SDK and the callback 35 along with the Strong Authentication Wallet  intialisation code. These two steps have now been decoupled so that the Wallet initialisation code is still sent through the callback 35 and the KYC WebView URL is sent through the new callback 48.

* **A new version v2.0 of Callback 4 - KYC Demand**
	* This new callback will contain an additional `expectedDiligences` along with `receivedDiligences`so that the partner is aware of what diligences are expected for the user onboarding.


* * *
