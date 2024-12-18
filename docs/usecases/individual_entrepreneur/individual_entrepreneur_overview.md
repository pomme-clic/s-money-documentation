# Individual Entrepreneur
The Individual Entrepreneur (EI) is a legal status that does not create a separate legal entity distinct from the entrepreneur. The entrepreneur operates in their own name, with no distinction between their person and their business. Here are the key features:

- Single ownership → One person owns and operates the business;
- No share capital;
- No need to draft bylaws;
- Limited liability to professional assets;
- Tax regime: Personal Income Tax (IR), with the option to choose Corporate - Income Tax (IS);
- Social regime: Non-salaried worker.
- Individual entrepreneurs are recognized as natural persons by the ACPR.

<br/>

* * *
## Global overview

![9f8efb411c4d495ebd6faf302a5b1bbf.png](../../../../_resources/9f8efb411c4d495ebd6faf302a5b1bbf.png)

The individual entrepreneur onboarding is composed by the following steps:
- KYB
- Facta eai
- PPE & sanction filtering

<br/><br/>

* * *

## Diagram & status

### Status diagram for an IndividualEntrepreneur
```mermaid
stateDiagram

[*] --> Initialized
Initialized	--> InProgress

InProgress --> Validated
InProgress --> Refused

Refused --> [*]
Validated --> [*]
```

This status is retreived by the  `recordStatus` .

<br/>

* * *

### Sequence diagram

```mermaid
sequenceDiagram
Title: EI creation
autoNumber
Participant Partner
Participant XPO
Participant Provider as Service Provider

Partner ->> XPO : POST /api/v3.0/individual-entrepreneurs

XPO -->> Partner: Callback IndividualEntrepreneurCreatedOrUpdated {recordStatus: "Initialized"}
XPO -->> Partner: callback 45 {accountStatus: "Initialized"}

Note over Partner, Provider: KYB creation

Partner ->> XPO : POST /api/v3.0/users/{individualEntrepreneurId}/kyc/demand
XPO -->> Partner: Callback 4 {status: "Initialized",<br/> Identity <br/>Complementary <br/>Existence proof  }
XPO -->> Partner: Callback IndividualEntrepreneurCreatedOrUpdated {recordStatus: "InProgress"}
XPO -->> Partner: Callback 48 {url, token}

Note over Partner, Provider: KYB - Identity validation (worfklow e_sign)
rect rgb(104, 180, 255, 0.1)
	Partner ->> Provider : Identity scan
	Partner ->> Provider: Facial scan
	Provider -->> XPO: Identity validated

	XPO -->> Partner: Callback 4 {status: "BeingReceived"<br/> Identity:"Validated"}
end

par Internal action
Note over Partner, Provider: Screening PPE/sanction
rect rgb(104, 180, 255, 0.1)
	break 4 mins
		XPO -->> XPO: filtering
	end
	XPO -->> Partner: Callback PoliticallyExposedPersonStatusCreatedOrUpdated {status: ""}
end

and

Note over Partner, Provider: KYB - Existence proof checks
rect rgb(104, 180, 255, 0.1)
	Partner ->> XPO: POST  /api/v3.0/users/{individualEntrepreneurId}/kyc/attachments (Existence proof)
end

Note over Partner, XPO: FACTA EAI
rect rgb(104, 180, 255, 0.1)
	Partner ->> XPO : PATCH /api/v3.0/users/{individualEntrepreneurId}/fatca-eai
	XPO -->> Partner: Callback 44 {fatcaEaiStatus:"OK"}
end

end

XPO -->> Partner: Callback 4 {status: "FullyReceived"<br/> Identity:"validated" <br/> Existence proof:"Received"}

Note over Partner, Provider: KYB - global checks
rect rgb(104, 180, 255, 0.1)
	XPO -->> Provider: certification of the demand
	break
		Provider -->> Provider: X minutes
	end
end



XPO -->> Partner: Callback 4 {status: "Pending"<br/> Identity:"validated" <br/> Existence proof:"Validated"}

Note over Partner, Provider: KYB-  Complementary diligence
rect rgb(104, 180, 255, 0.1)
	Partner ->> Provider : Electronic sign
end

XPO -->> Partner: Callback 4 {status: "FullyReceived"<br/> Identity:'Validated' <br/> Existence proof:'Validated'<br/>Complementary:'Validated'}


XPO -->> Partner: Callback IndividualEntrepreneurCreatedOrUpdated {recordStatus: "Validated"}

```


<br/><br/>

* * *

## API & callback
### API
POST /api/V3.0/individual-entrepreneurs

```json
{
    "individualEntrepreneurId":"1234123412",
    "company" : {
        "registrationNumber":"1231223",
        "registrationCountry":"FR",
        "creationDate":"2024-09-26",
        "companyName":"Mon EI",
        "tradeName":"Mon EI",
        "businessActivityCode":"25.50A",
        "legalForm":"1000",
        "vatNumber":"FR32400000000",
        "annualTurnOver":"3",
        "address" : {
            "street":"1 rue de Paris",
            "zipCode":"75009",
            "city":"Paris",
            "country":"FR",
            "supplementIn":"test",
            "supplementOut":"test",
            "area":"FR"
        }
    },
    "profile" : {
        "civility":"Mrs",
        "firstname":"Corinne",
        "lastName":"Berthier",
        "birthName":"Berthier",
        "birthDate":"1965-12-06",
        "birthCity":"Paris",
        "birthZipCode":"75009",
        "birthCountry":"FR",
        "nationality":"FR",
        "phoneNumber":"+33652927234",
        "email":"Corinne.Berthier@xpollens.com",
        "address" : {
            "street":"1 rue de Paris",
            "zipCode":"75009",
            "city":"Paris",
            "country":"FR",
            "supplementIn":"Test",
            "supplementOut":"Test",
            "area":"Test"
        }
    }
}
```

### Callback
individualEntrepreneurCreatedOrUpdated
```json
{
    "type": "IndividualEntrepreneurCreatedOrUpdated",
	"individualEntrepreneurId": "7e4c54dd58a4J",
	"recordStatus": "InProgress", 
    "IdentificationLevel": "None",
    "OnboardingDate": "2024-08-06T08:55:49.3066667", 
    "LastUpdate": "2024-08-06T09:02:00.9678393Z",
    "company": {
        "registrationNumber": "881676191",
        "registrationCountry": "FR",
        "companyName": TEST EI,
        "tradeName": "TEST EI",
        "legalForm": "1000",
        "creationDate": "2024-09-26",
        "businessActivityCode": "25.50A",
        "vatNumber": "FR32400000000",
        "annualTurnOver": "3",
        "address": {
            "city": "Paris",
            "street": "1 rue de Paris",
            "zipCode": "75009",
            "supplementIn": "test",
            "supplementOut": "test",
            "area": "FR",
            "country": "FR"
        }
    },
	"profile": {
        "civility": "Mrs",
        "lastName": "Berthier",
        "firstName": "TEST EI",
        "birthName": "Berthier",
        "birthDate": "1965-06-12",
        "birthCity": "Paris",
        "birthZipCode": "75009",
        "birthCountry": "FR",
        "nationality": "FR",
        "address": {
            "city": "Paris",
            "street": "1 rue de Paris",
            "zipCode": "75009",
            "supplementIn": "Test",
            "supplementOut": "Test",
            "area": "Test",
            "country": "FR"
        },
        "email": "corinne.berthier@xpollens.com",
        "phoneNumber": "+33612312312"
	}
}
```
