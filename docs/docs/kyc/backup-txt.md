# RETAIL

### POST User (Create)

Most information is updatable for as long as user is a **prospect**, except for critical indentification data. As soon as KYC is validated, some of her/his data will be locked or subject to adequate justification.
More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users" method="post"/>

Once you create a ```User```, you should start looking up for the following call backs:
- **Callback type 34** will give you the overall status of the onboarding of your end user.
```json
"Payload": {
      "type": "34",
      "appUserid": "z32er24f4",
      "publicUserCode": "1234der14ft2",
      "userRecordStatus": "InProgress"
}
```

> 
> The ```publicUserCode``` will be useful when you will need to manipulate encrypted payloads (such as PIN or PAN). Please refer to this section if you want to learn more.
> 

- **Callback type 4** will give you detailed information on each diligence happening during he KYC of your end user.
```json
"Payload": {
      "type": "4",
      "status": "Incomplete",
      "appUserId": "559d7e85J",
      "diligences": [
          {
          "reason": "",
          "diligenceType": "ID_CARD",
          "status": "Validated"
          }
      ]
 }
```

- **Callback type 35** will give your the ```ActivationCode``` required to bind securely your end-user's device:
```json
"Payload": {
        "type": "35",
        "AppUserId": "e87bd13dJ",
        "ActivationCode": "f825f1646665490aa7ef7942c6f2f159",
        "ErrorMessage": null
        }
```

<Cta
  context="doc"
  ui="button"
  link="/api/Core#post-/api/v1.1/users"
  label="Try it out"
/>

### GET User (Read)

This endpoint allows you to read the data you have sent.
More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users" method="get"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Core#get-/api/v1.1/users"
  label="Try it out"
/>

### PUT User (Update)

Some information is updatable without any constraint, for as long as user is a **prospect**. As soon as KYC is validated, some of her/his data will be locked. Identification data is locked once inputed, unless a specific update process is performed, involving some justification.
More information regarding this endpoint in the [API reference](/api/Core)

<Endpoint apiUrl="/v2.0/user.usermanagment" path="/api/v2.0/users/{AppUserId}/declarative" method="post"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Users#put-/api/v2.0/users/-AppUserId-/declarative"
  label="Try it out"
/>

### DELETE User (Delete)

This action is not possible.
More information regarding this endpoint in the [API reference](/api/Core)

<Highlight>
Purge of all prospects is performed after 90 days. All webview links and QR Codes will expire after this duration, and personal data will be removed.
</Highlight>

### PATCH FatcaEai

Use this endpoint to transmit to Xpollens the required tax information from your end user.
More information regarding this endpoint in the [API reference](/api/Compliance)

<Highlight>
This will trigger a Strong Authentication notification to your end-user.
</Highlight>

<Endpoint apiUrl="/v2.1/compliance" path="/api/v2.1/user/{appUserId}/fatcaEai" method="patch"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Compliance#patch-/api/v1.1/user/-appUserId-/fatcaEai"
  label="Try it out"
/>

### POST CGU

Use this endpoint to inform Xpollens that your prospect has accepted Terms & Conditions of the Payment Services you are offering thanks to Xpollens.
More information regarding this endpoint in the [API reference](/api/Users)

<Highlight>
This will trigger a Strong Authentication notification to your end-user.
</Highlight>

<Endpoint apiUrl="/v2.0/user.usermanagment" path="/api/v2.0/users/{AppUserId}/cgu" method="post"/>

<Cta
  context="doc"
  ui="button"
  link="/api/Users#post-/api/v2.0/users/-AppUserId-/cgu"
  label="Try it out"
/>



# SCA

<Endpoint apiUrl="/v2.0/Transfers.InstantPayment" path="/api/v2.0/users/{AppUserId}/sctinst" method="post"/>

<Cta
  context="doc"
  ui="button"
  link="/api/SCTINST#post-/api/v2.0/users/-AppUserId-/sctinst"
  label="Try it out"
/>




<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}" method="put"/>

<Cta
  context="doc"
  ui="button"
  link="api/Core#put-/api/v1.1/users/-userid-"
  label="Try it out"
/>
