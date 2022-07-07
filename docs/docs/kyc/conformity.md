import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'




# Compliance

## Context

As a part of BPCE group, Xpollens is following the BPCE compliance group directives. 
Here after is an introduction of the different processes involved.

## PEP and Sanction control

### Politically Exposed People (PEP)
Those people, Politically Exposed Persons (PEPs), hold a crucial position in public and are vulnerable to financial crime.

### Sanction People or organization
Those persons, organizations or governments may have the potential to be involved in the financial activities which are:  
- Terrorism financing
- Trafficking of narcotics
- Violation of human rights
- Money laundering
- Proliferation of weapons
- Violation of international contracts

### Xpollens controls
Xpollens performs both initial checks when the customer onboards and periodically during the customer contract.
The identity is checked against international lists for both PEP and Sanction.
Effects could be block the account or to get additional information from the customer.

---

## Scoring 
Xpollens performs a scoring calculation based on customers informations.
Main effect from a customer relationship perspective is the time between 2 KYC updates and differenciation in Banking activity controls.

---

## Tax information control

### Process introduction
To support governments to fight against tax evasion, financial institutions must implement solutions to collect a valid and credible self-certification in which their customers declare their tax information. 

Xpollens is following the FATCA (Foreign Account Tax Compliance Act) and CRS (Common Reporting Standard) regulations and Xpollens does collect  the tax information self-certification at the onboarding but also periodically or following an event, for update.

### Physical Person detailled process
At the onboarding, the tax informations and US relation are asked and are mandatories.
Our customer can prodvide up to 3 tax countries and Tax Idenfication Numbers (TIN).

<Highlight>
See below that Xpollens fully automizes the self-certification generation, for very large majority of the Physical Person customers, no need to upload any document. 
</Highlight>

Here after are two examples :
- First a non US customer providing its taxation information correctly in coherency with its personal informations.

<Image src="docs/Compliance-Tax-Info-NonUS.png" alt="usecase 1"/>

- Second an american customer providing its taxation information correctly in coherency with its personal informations.

<Image src="docs/Compliance-Tax-Info-US.png" alt="usecase 2"/>

### Businesses detailled process
Under construction and available soon

## Endpoints

You can provide tax information for check using this API :

<Endpoint apiUrl="/v2.1/compliance" path="/api/v2.1/user/{appUserId}/fatcaEai" method="patch"/>


If additionnal FATCA/CRS documents are required, the documents can be sent here using this API:

<Endpoint apiUrl="/v2.0/kyc.usermanagment" path="/api/v2.0/users/{appUserId}/fatca/attachments" method="post"/>

***

Once the Tax info has been validated, for physiccal persons you can retrieve the self certification here. This document should be available for the user at any time :

<Endpoint apiUrl="/v2.1/compliance" path="/api/v2.1/user/{appUserId}/self-certification" method="get"/> 

---

## AML/FT control
XPollens is processing operation screening and monitoring to secure the customers and fight against Money Laundering and terrorism Financing..
For example, operations IN coming from sensible geographies will be blocked or operation out to sensitive people..

---

## Endpoints

You can retrieve all the user compliance informations through a single API :

<Endpoint apiUrl="/v2.1/compliance" path="/api/v2.1/user/compliance/{appUserId}" method="get"/>

More information regarding this endpoint in the [API reference.](/api/Compliance)
