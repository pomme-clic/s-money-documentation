# KYC delegation - with ID document - for physical person business case B2C

The KYC delegation is applicable only under specific conditions.
Please confirm its feasibility with your Customer Project Manager.	

<br/>

* * *


# Sequence diagram

```mermaid
sequenceDiagram
Title: User onboarding
autoNumber
Participant Partner
Participant XPO

Note over Partner, XPO: User creation

Partner ->> XPO : POST api/v2.0/users
XPO -->> Partner: HTTP/201
XPO --) Partner : Callback 34<br/>userRecordStatus :Initialized
XPO --) Partner : Callback 45<br/>Account Status :Initialized

rect rgb(104, 180, 255, 0.1)
Note over Partner, XPO: KYC demand
    XPO ->> XPO : Automatically created
    XPO --) Partner : Callback 34<br/>userRecordStatus : InProgress

    XPO --) Partner : Callback 4 - KYC Demand<br/>status:Initialized
end

rect rgb(104, 180, 255, 0.1)
Note over Partner, XPO: KYC identity
  Partner ->> XPO : POST api/v3.0/users/{appUserId}/kyc/third-party-introduction-diligence 
    Partner ->> XPO : POST api/v3.0/users/{appUserId}/kyc/attachments
    XPO --) Partner : Callback 4 - KYC Demand<br/>{status: Pending, identity validated}
end

rect rgb(104, 180, 255, 0.1)
Note over Partner, XPO: KYC complementary diligence -- See API details below --

Partner ->> XPO : POST /v2.0/users/{{appuserid}}/kyc/complementarydiligence
XPO --) Partner : Callback 4 - KYC Demand<br/>status:Complete, Identity: validated, <br/>complementary diligence: validated}

end



Note over Partner, XPO: FATCA EAI -- See dedicated section --

    Partner ->> XPO : PATCH /api/sca/v3.0/users/{appUserId}/fatca-eai
    XPO --) Partner : Callback 44<br/>fatcaEaiStatus: OK

rect rgb(104, 180, 255, 0.1)
    Note over Partner, XPO: Filtering -- See dedicated section --
    XPO --) Partner : Callback PoliticallyExposedPersonStatusCreatedOrUpdated <br/>results of PPE filtering 
end


Note over Partner, XPO: Declaratives -- See dedicated section --
    Partner ->> XPO : POST /api/v2.0/users/{appUserId}/declarative


rect rgb(104, 180, 255, 0.1)
Note over Partner, XPO: CGU -- See dedicated section --
    Partner ->> XPO : POST /api/sca/v2.0/users/{AppUserId}/cgu
	
end

XPO --) Partner : Callback 34<br/>userRecordStatus : Validated
XPO --) Partner : Callback 45<br/>Account Status : Activated





```

<br/>

* * *

# API details for the delegated identity

POST {{URLT}}/api/v3.0/users/{{appUserId}}/kyc/third-party-introduction-diligence

```json
 {
 "type": "55"
}
```

RESPONSE 200

OK

<br/>


* * *

# API details for complementarydiligence

POST /v2.0/users/{{appuserid}}/kyc/complementarydiligence

```json
{
 "Type" : 53,
 "Status" : "Validated",
 "Reason" : "None"
}
```

RESPONSE

```json
{
 "type": "TIERCE_INTRODUCTION",
 "status": "Validated",
 "reason": "None",
 "creationDate": "2023-12-01T23:18:20",
 "lastUpdate": "2023-12-01T23:18:20"
}
```

<br/>

* * *