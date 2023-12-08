# Filtering
Filtering is used to control the presence of users on PEP or sanctions lists.

* * *
## Filtering start
The filtering is launched as soon as the identity document is validated.
The maximum treatment time is 8 minutes, if no hits appear.
If a hit appears, an operator has to manually validate the accuracy of the hit before the workflow can continue.

* * *

## Filtering results

Xpollens results are shared through the attributs "IsPoliticallyExposedPerson" in the callback named `PoliticallyExposedPersonStatusCreatedOrUpdated`.

It is important to note that the filtering is done automatically, but that the decision to enter into a relationship following a hit is manual. The delay is therefore longer in this case.

* * *
## Filtering sequence diagram
As soon as the identity is validated, the Political Exposed Person filtering starts. 

### Best scenario
```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO

XPO --) Partner : Callback 4 - KYC Demand<br/>status:Completed <br/>receivedDiligences[{diligenceType Identity, status:Validated}],<br/>expectedDiligences [{diligenceType Complementary}, status:XXX]
XPO --) XPO: filtering [5 to 8 minutes]

alt PPE Sanction is false
    XPO --) Partner : Callback PoliticallyExposedPersonStatusCreatedOrUpdated - results of PPE filtering and penalties <br/> {isPoliticallyExposedPerson:false,<br/> finalDecisionPep:null}
	note over Partner, XPO: onboarding process continues

else Hit PEP or sanction
note over Partner, XPO: manual process 
end
```

* * *
### Hit PEP
```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO
Title Hit PEP

XPO --) XPO: filtering [5 to 8 minutes]
break Waiting for internal decision
 	XPO-->XPO: Hit analysis
end

alt PEP false
    XPO --) Partner : Callback PoliticallyExposedPersonStatusCreatedOrUpdated - results of PPE filtering and penalties <br/> {isPoliticallyExposedPerson:false,<br/> finalDecisionPep:null}

else PEP true, but continuing the relationship
        XPO --) Partner : Callback PoliticallyExposedPersonStatusCreatedOrUpdated - results of PPE filtering and penalties <br/> {isPoliticallyExposedPerson:true,<br/> finalDecisionPep:null}
		XPO --) User: Request for additional document
		User --) XPO: Document completed
        XPO --)XPO: Internal validation <br/> finalDecisionPep:true
        XPO --) Partner : Callback PoliticallyExposedPersonStatusCreatedOrUpdated - results of PPE filtering and penalties <br/> {isPoliticallyExposedPerson:true,<br/> finalDecisionPep:true}
	Partner ->> XPO: GET /api/v2.1/user/compliance/{appUserId}
	XPO --) Partner: AntiMoneyLaundering{PPE: true, LastUpdate: date}	

else PEP true, and end of relationship
    XPO --) Partner : Callback PoliticallyExposedPersonStatusCreatedOrUpdated - results of PPE filtering and penalties <br/> {isPoliticallyExposedPerson:true,<br/> finalDecisionPep:null}
    XPO --)XPO: Final decision false
    XPO --) Partner : Callback PoliticallyExposedPersonStatusCreatedOrUpdated - results of PPE filtering and penalties <br/> {isPoliticallyExposedPerson:true,<br/> finalDecisionPep:false}
    XPO --) Partner : Callback 34 - UserRecordStatus: Refused
	Partner ->> XPO: GET /api/v2.1/user/compliance/{appUserId}
    XPO --) Partner : response AntiMoneyLaundering {PPE: true, LastUpdate}

end
```

<br/>

> **Note**<br/>
> The user is contacted directly by Xpollens to request additional documents.
> * [Formulaire_Client_PPE_v4.pdf](../_resources/Formulaire_Client_PPE_v4.pdf)

<br/>

If the PEP document is not received within 3 weeks, the account will be permanently blocked.

As long as the hit is being processed, the user's status will remain at InProgress; and as long as the status is in progress, the customer cannot carry out transactions or receive money.

* * *
### Hit Sanction

```mermaid
sequenceDiagram
autoNumber
Participant User
Participant Partner
Participant XPO
Title Hit Sanction

XPO --) XPO: filtering [5 to 8 minutes]
alt hit Sanction, final decision true (relationship accepted)
		XPO --)XPO: Internal validation: validated
   Note over User, XPO: onboarding can continue

else hit Sanction, final decision false (relationship refused)
		XPO --)XPO: Internal validation: refused
		XPO --) Partner : Callback 34 - User Onboarding<br/>status:Refused
	Note over User, XPO: end of the relationship
end
```

<br/>

Unlike PPE filtering, if a hit sanction is proven, the contact is irremediably refused.

* * *
## APIs, callbacks and technical items

### GET /api/v2.1/user/compliance/{appUserId}
[`GET /api/v2.1/user/compliance/{appUserId}`](https://docs.xpollens.com/api/Compliance#get-/api/v2.1/user/compliance/-appUserId-)

### Callback

[PoliticallyExposedPersonStatusCreatedOrUpdated](https://docs.xpollens.com/api/callbacks/#post-/PoliticallyExposedPersonStatusCreatedOrUpdated)

* * *

## How to test
As a customer, you don't have the power to independently test the creation of hit PPE and the processing of these hits. 
Ask your Customer Integration manager to support you.


* * *

## FAQ