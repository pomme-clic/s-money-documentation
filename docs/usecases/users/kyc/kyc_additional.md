# Additional information 
## Workflow change 

During user onboarding it is  possible for the user to switch from the `Electronic_Signature` workflow to the `Identity` workflow (one way only, it is not possible to switch from `Identity` to `Electronic_Signature`).
This is possible as long as the user has not completed the Selfie+ID step in the `Electronic_Signature` workflow.
To handle the switch of workflow, partner should call the `PUT /api/v3.0/users/{appUserId}/kyc/demand` by specifying the new workflow in the payload.

> Exemple
> ```json
> PATCH /api/v3.0/users/{appUserId}/kyc/demand
> {
>	 "workflowCode" : "Identity"
> }
> ```

* * *

## Upload ID document by API

The `Identity` workflow can also be processed by API.
It will require to send the ID Documents using the `post /api/v2.0/users/{appUserId}/kyc/attachments` API.

> Note
> In this case, it is not neccessary to handle the webview URL provided in callback 48.

> Note 2
> `Ìdentity` workflow requires an addionnal identity verification diligence. 
> The additionnal diligence supported by XPollens in an incoming money transfer originating from an account owned by the user (name, firstname, .. are checked at the receipt of the money transfer by XPollens)