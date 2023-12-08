# KYC API 

## POST /api/v3.0/user/{appUserId}/kyc/demand 

`POST /api/v3.0/users/{appUserId}/kyc/demand`


**<u>Description</u>**

This API is dedicated to the new KYC solution.
It enables the creation of the KYC demand with a specific workflow.

<br/>

**<u>Prerequisite</u>** 

Prerequisites to call this endpoint are : 

- User must exist.
- KYC demand doesn't exit.

> Body parameter

```json
{
  "workflowCode": "string"
}
```

**Parameters**

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appUserId|path|string|true|User identifier of partner<br/>Format : Min 9 characters, max 30 characters<br/><br/>Accepted characters : 0-9 a-z A-Z_-.!() |
|CorrId|header|string|false|Correlation Id|
|body|body|[CreateKycDemand](#schemacreatekycdemand)|true|Information needed to provided|


> Example responses

> 400 Response
> ```json
> {
>   "message": "string"
> }
> ```

**Responses**

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|<details><summary>Bad Request :</summary><br/>- The appUserId field is required.<br/>- The WorkflowCode field is required.<br/>- The User's KYC demand already exists<br/>- WorkflowCode does not exist in referential</details>|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[ErrorResponse](#schemaerrorresponse)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Operation not allowed|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server Error|[ErrorResponse](#schemaerrorresponse)|

**Schemas**

**CreateKycDemand**

```json
{
  "workflowCode": "string"
}

```

**Properties**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowCode|string|true|none|**workflowCode**<br/>*Worflow of the KYC process.*<br/><br/>Possible values:<ul><li> Electronic_Sign</li><li>Identity</li></ul>|

**ErrorResponse**

```json
{
  "message": "string"
}

```

**Properties**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

* * *

## Callback 48 - WebView URL
The new callback 48 will contain required information to display the KYC Web View URL to the user.
The format of the new callback is the following :

`POST /{callback48Url}`

> Body parameter

```json
{
  "type": "48",
  "appUserId": "QsmzNIwZm",
  "webviewUrl": "https://integration-api.ekeynox.net/contract/signbook/signbook.html?token=20240512_UIj93FVbtEt2ZFQ2go47TkTBL1Q5n4z",
  "url": "https://integration-api.ekeynox.net/contract/signbook/signbook.html",
  "token": "20240512_UIj93FVbtEt2ZFQ2go47TkTBL1Q5n4z"
}
```

<h3 id="#48---webview-url-(netheos)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|callback example|
|» type|body|string|false|the callback type|
|» appUserId|body|string|false|User unique identifier|
|» webviewUrl|body|string|false|the webview URL that enables the upload of diligences|
|» url|body|string|false|the root URL|
|» token|body|string|false|token param used to distinguish between users|

<h3 id="#48---webview-url-(netheos)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Your server implementation should return this HTTP status code if the data was received successfully|None|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Your server should return this HTTP status code if no longer interested in further updates|None|

> **Remark**
> 1. The `webviewUrl` will contain the concatenated value of `url` and `token` and may be deprecated (redundancy) in the future.
> 2. The `WebViewUrl` contained if the callback #35 is deprecated.

* * *