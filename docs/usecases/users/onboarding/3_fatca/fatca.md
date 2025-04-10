# FATCA / EAI

To fight against tax evasion, the government has asked financial institutions to implement solutions to collect and verify their customers' tax information. This is the role of FatacaEai Feature, which consists of verifying FATCA information and related documents at the onboarding phase, analyzing the FATCA information versus the customer banking usage during the relationship and finally reporting to tax institutions.

The facta eai status is part of the user status.

**<u>Definitions</u>**  <br/>
**FATCA** (Foreign Account Tax Compliance Act) is a mandatory reporting resulting from a US law to combat tax evasion by US taxpayers.

**EAI** (Échange automatique d'informations) : For countries that have signed an agreement to prevent tax evasion.  
https://www.oecd.org/tax/automaticexchange.htm

<br/><br/>

* * *

## Fatca Eai sequence diagram

```mermaid
sequenceDiagram
Title: Fatca EAI
autonumber
Actor User
participant Partner
participant XPO

Note over User, XPO: User creation
Note over User, XPO: KYC demand
Note over User, XPO: Wallet_initialization for Strong Customer Authentication

User ->> Partner : Gathering key information<br/> isUSPerson <br/> taxInformation
Partner ->>  User : Strong authentication required
User ->> Partner: Strong authentication validated

Partner ->>  XPO : PATCH/api/sca/v3.0/users/{appUserId}/fatca-eai
alt Data Validated
    XPO --) Partner : Callback 44<br/>fatcaEaiStatus: OK
else Additional information required
    XPO --) Partner : Callback 44<br/>fatcaEaiStatus:NOK <br/> diligences{files, status}
    Partner --) User: Display expected documents
    User --) Partner: Upload expected documents
    Partner ->>  XPO : POST /api/v2.0/users/{appUserId}/fatca/attachments
    XPO --) Partner : Callback 44<br/>fatcaEaiStatus:OK <br/> diligences{files, status OK}
end
Partner ->>  XPO : GET /api/v3.0/users/{appUserId}/fatca-eai
XPO --) Partner : FatcaEai {isUSPerson, taxInformation,<br/> taxIdentificationNumberStatus, vraisemblanceStatus, <br/> fatcaEaiStatus}


```

### Fatca Eai steps

The FatcaEai functionality consists of a 3-step process:

- Collection of the customer's tax information
- Validation of the consistency/likelihood of the tax information, document analysis (scope of the KYC brigade) and Fatca validation
- Display of Fatca self-certification

<br/><br/>

* * *

## Collect Customer Tax Information

`PATCH /api/sca/v3.0/users/{appUserId}/fatca-eai`

A customer can declare the maximum of three tax countries along with their respective tax identification numbers.

At this stage, we perform some basic checks to ensure that the mandatory fields are filled in and that the TIN is correct according to the format (combination of numbers, letters, and characters) given by the tax country

For each TIN provided by the customer, an action takes place to verify its format and coherence considering the tax country associated to it.

The TIN is optional if:

- Taxcountry = FR
- Taxcountry = Country where TIN is optional (see appendix)
- Taxcountry is not EAI member  
    For all other cases, the TIN is mandator

	Find the list of TINs on this page: [http9s://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/](https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/)

<br/><br/>

* * *

## Fatca Eai status diagram: Tax Information Consistency / Vraisemblance

The first step is to check whether the user has declared himself to be an American. If so, documents are requested.

The second step includes the consistency validation among client’s identity information, his currently country of residence and tax countries inserted. It’s also called Vraissemblance (French for likelihood, apperance of truth).

A synchronous response of the API PATCH fatcaEai allows to see the results of these controls and to know what the required document is.

When the controls fail, the customer will need to provide document(s) to justify and support his tax declaration :

- W9 = required when the customer tax declaration is related with USA
- W8-Ben = required to declare that an USA citizen or resident is not an USA contributor
- Other documentation = required to justify and support his tax declaration

It’s important to mention that “Vraissemblance checks” do not verify the information inside any document, it is done by an agent.

To follow the evolution of this entire Fatca process, the field fatcaEaiStatus is updated .  
The field fatcaEaiStatus can have 3 possibles values:

- enum 0 = NOK,
- enum 1 = Pending,
- enum 2 = OK

![fatca status.png](../_resources/fatca%20status.png)

### FatcaEaiStatus OK

If the user is not American, and all the checks are good, then the status is validated.  
[`Callback #44`](https://docs.xpollens.com/api/callbacks#post-/-callback44Url-) is sent with the `fatcaEaiStatus` OK.

The `GET /api/v3.0/users/{appUserId}/fatca-eai` allows you to return:

- `taxIdentificationNumberStatus` OK
- `vraisemblanceStatus` OK
- `fatcaEaiStatus` OK

### FatcaEaiStatus NOK

Otherwise, [`Callback #44`](https://docs.xpollens.com/api/callbacks#post-/-callback44Url-) describes the expected document(s).  
The user needs to upload documents, using a dedicated endpoint [`POST /api/v2.0/users/{appUserId}/fatca/attachments`](https://docs.xpollens.com/api/KYC#post-/api/v2.0/users/-appUserId-/fatca/attachments)  
Important to mention that the vraissemblance value does not change, **even if** FatcaEaiStatus changes for OK.

The diligences have 3 statuts: Validated/ To\_Review\_Manually/Refused

| ExpectedDiligence | Diligence1Status | Diligence2Status\_or\_Diligence3Status | FatcaEaiStatus |
| --- | --- | --- | --- |
| 1   | No Diligence Received | NA  | NOK |
| 1   | To Review Manually | NA  | Pending |
| 1   | Refused | NA  | NOK |
| 1   | Validated | NA  | OK  |
| 2 or 3 | No Diligence Received | No Diligence Received | NOK |
| 2 or 3 | To Review Manually | No Diligence Received | Pending |
| 2 or 3 | Refused | No Diligence Received | NOK |
| 2 or 3 | Validated | No Diligence Received | Pending |
| 2 or 3 | To Review Manually | To Review Manually | Pending |
| 2 or 3 | To Review Manually | Validated | Pending |
| 2 or 3 | Validated | Validated | OK |
| 2 or 3 | Refused | Refused | NOK |
| 2 or 3 | Refused | Validated | NOK |

### W8 or W9 as FATCA attachments

If W8 or W9 are expected, here are the templates:

- W8:https://www.irs.gov/forms-pubs/about-form-w-8-ben
	- [fw8ben.pdf](../_resources/fw8ben.pdf)

- W9: https://www.irs.gov/forms-pubs/about-form-w-9
	- [fw9.pdf](../_resources/fw9.pdf)

### Other Document for EAI

In the EAI process, when an "other document" is requested, it is necessary to ask the customer to justify the difference between its country of residence and the country in which it pays tax.  
This explanation are given in a text document which is sent by API to Xpollens.

Once the explanation has been received, it is studied by the Xpollens Middle Office team, who will indicate which document is required.

In most cases, an employee will be asked to provide proof of tax assessment, while a student will be asked to provide a school leaving certificate.

<br/><br/>

* * *

## Display fatca eai certification

The partner must make this document available for the customer at any time once the onboarding path has been confirmed. This certification is not archived in Xpollens DB, it is generated everytime a partner asks for it.

[`GET /api/v2.1/user/{appUserId}/self-certification`](https://docs.xpollens.com/api/Compliance#get-/api/v2.1/user/-appUserId-/self-certification)

<br/><br/>

* * *

## APIs, callbacks and technical items

### [`PATCH /api/sca/v2.1/user/{appUserId}/fatcaEai`](https://docs.xpollens.com/api/Compliance#patch-/api/v2.1/user/-appUserId-/fatcaEai)

The strong authentication is mandatory for Agent Partners.

### [`GET /api/v2.1/user/compliance/{appUserId}`](https://docs.xpollens.com/api/Compliance#get-/api/v2.1/user/compliance/-appUserId-)

### [`GET /api/v2.1/user/{appUserId}/self-certification`](https://docs.xpollens.com/api/Compliance#get-/api/v2.1/user/-appUserId-/self-certification)

### [`POST /api/v2.0/users/{appUserId}/fatca/attachments`](https://docs.xpollens.com/api/KYC#post-/api/v2.0/users/-appUserId-/fatca/attachments)

### [`Callback 44`](https://docs.xpollens.com/api/Callbacks#post-/-callback44Url-)

### Logo
A partner logo is required for the self-certification file. It must have the following format: 100px x 372px (19,3mm x 74,2mm)

<br/><br/>

* * *

## FAQ
*Coming soon*

<br/><br/>

* * *

## How to test FATCA/EAI

Let see some examples:

| User Personal Data | User Fatceai input data | User FatcaEai result | Comments |
| --- | --- | --- | --- |
| User birth country: FR <br/> User Country of Residence: PT | 1st tax country: PT <br/>2nd tax country: null <br/>3rd tax country: null | Vraisemblance status: OK &lt;br&gt;Fatcaeai status: OK |     |
| User birth country: US <br/>User Country of Residence: FR | 1st tax country: US <br/> 2nd tax country: FR <br/> 3rd tax country: null | Vraisemblance status: OK <br/> Fatcaeai status: NOK | W9 document it’s required when the customer tax declaration is related with US |
| User birth country: FR <br/> User Country of Residence: US | 1st tax country: US <br/> 2nd tax country: FR <br/> 3rd tax country: null | Vraisemblance status: OK <br/> Fatcaeai status: NOK | W9 document it’s required when the user tax declaration is related with US. |
| User birth country: US <br/> User Country of Residence: FR | 1st tax country: PT <br/> 2nd tax country: FR <br/> 3rd tax country: IT | Vraisemblance status: NOK <br/> Fatcaeai status: NOK | The customer is a US citizen, but he did not declare US on his taxes. <br/> W8-Ben is required to declare that the customer is not an US contributor |
| User birth country: US <br/> User Country of Residence: FR | 1st tax country: US <br/> 2nd tax country: null <br/> 3rd tax country: null | Vraisemblance status: NOK <br/> Fatcaeai status: NOK | W9 document it’s required when the user tax declaration is related with US. <br/> Other documentation is required to justify and support his tax declaration |
| User birth country: FR <br/> User Country of Residence: FR | 1st tax country: PT <br/> 2nd tax country: IT &lt;br&gt;3rd tax country: null | Vraisemblance status: NOK <br/> Fatcaeai status: NOK | The customer works in France, but he did not declare France on his taxes. <br/> Other documentation is required to justify and support his tax declaration. |

In pre-production, it is necessary to synchronise with the customer integration manager for end-to-end tests, with sandbox review carried out on request.

<br/><br/>

* * *

## Appendix: Tin required
| CountryName | CountryIsoCode | IsTaxIdentificationNumberRequired |
| --- | --- | --- |
|ANDORRE|AD|1|
|ANGUILLA|AI|0|
|ALBANIE|AL|1|
|ARMENIE|AM|0|
|ARGENTINE|AR|0|
|AUTRICHE|AT|0|
|AUSTRALIE|AU|0|
|ARUBA|AW|0|
|AZERBAIJAN|AZ|0|
|ILE DE LA BARBADE|BB|0|
|BELGIQUE|BE|1|
|BULGARIE|BG|1|
|BRUNEI DARUSSALAM|BN|1|
|BRESIL|BR|1|
|BELIZE|BZ|0|
|CANADA |CA|1|
|SUISSE|CH|1|
|CHILI|CL|0|
|CHINE|CN|1|
|COLOMBIE|CO|1|
|COSTA RICA|CR|1|
|CHYPRE|CY|0|
|TCHEQUE, REPUBLIQUE|CZ|1|
|ALLEMAGNE|DE|1|
|DANEMARK|DK|1|
|DOMINIQUE|DM|0|
|EQUATEUR|EC|0|
|ESTONIE|EE|1|
|ESPAGNE|ES|1|
|FINLANDE|FI|1|
|FEROE, ILES|FO|1|
|FRANCE|FR|0|
|ROYAUME-UNI|GB|1|
|GRENADE|GD|0|
|GEORGIE|GE|1|
|GUERNESEY|GG|1|
|GHANA|GH|0|
|GIBRALTAR|GI|1|
|GROENLAND|GL|1|
|GRECE|GR|1|
|HONG KONG|HK|1|
|CROATIE|HR|1|
|HONGRIE|HU|1|
|INDONESIE|ID|0|
|IRLANDE|IE|1|
|ISRAEL|IL|1|
|ILE DE MAN|IM|1|
|INDE|IN|1|
|ISLANDE|IS|1|
|ITALIE|IT|1|
|JERSEY|JE|1|
|JAMAIQUE|JM|0|
|JAPON|JP|1|
|KENYA|KE|0|
|COREE, REPUBLIQUE DE|KR|1|
|KOWEIT (ETAT DU) |KW|1|
|KAZAKHSTAN|KZ|0|
|SAINTE-LUCIE|LC|0|
|LIECHTENSTEIN|LI|1|
|LITUANIE|LT|1|
|LUXEMBOURG|LU|1|
|LETTONIE|LV|1|
|MOLDAVIE|MD|0|
|MARSHALL, ILES|MH|1|
|MACAO|MO|0|
|MALTE|MT|1|
|MAURICE|MU|0|
|MALDIVES|MV|0|
|MEXIQUE|MX|1|
|MALAISIE|MY|1|
|NIGERIA|NG|1|
|PAYS-BAS|NL|1|
|NORVEGE|NO|1|
|NAURU|NR|1|
|NOUVELLE-ZELANDE|NZ|1|
|PANAMA|PA|1|
|PEROU|PE|0|
|PAKISTAN|PK|0|
|POLOGNE|PL|1|
|PORTUGAL|PT|1|
|QATAR|QA|0|
|ROUMANIE|RO|1|
|RUSSIE, FEDERATION DE|RU|1|
|ARABIE SAOUDITE|SA|1|
|SEYCHELLES|SC|1|
|SUEDE|SE|1|
|SINGAPOUR|SG|1|
|SLOVENIE|SI|1|
|SLOVAQUIE|SK|1|
|SAINT-MARIN|SM|1|
|SAINT-MARTIN (PARTIE NEERLANDAISE)|SX|1|
|TURQUIE|TR|1|
|TRINITE-ET-TOBAGO|TT|0|
|ETATS-UNIS|US|1|
|URUGUAY|UY|1|
|VANUATU|VU|0|
|AFRIQUE DU SUD|ZA|0|

<br/><br/>

* * *

## Declaratives
The declaration of information relating to income, assets and economic activity is mandatory in order to finalise the user's status.

<br/><br/>

* * *

## What to declare
The user's declarative informations are mandatory during the onboarding of a client. It includes :
- Economic activity
- Income
- Asset


[`POST /api/v2.0/users/{AppUserId}/declarative`](https://docs.xpollens.com/api/Users#put-/api/v2.0/users/-appUserId-)

List of economicActivityCode:
|economicActivityCode|EconomicActivityLabel|EconomicActivityLabelFr|
|---|---|---|
|11|FarmersonSmallFarms|AgriculteursPetitesExploitations|
|12|FarmersOnAverageExploitation|AgriculteursExploitationsMoyennes|
|13|FarmersonLargeFarm|AgriculteursGrandesExploitations|
|21|Craftsmen|Artisans|
|22|merchantsAndSimilar|CommerçantsEtSimilaires|
|23|EntrepreneursOfTenOrMoreEmployees|EntrepreneursDixSalariésOuPlus|
|31|LiberalPrefessions|ProfessionsLibérales|
|33|PublicServicemanagers|CadresDeLaFonctionPublique|
|34|ProfessorsAndScientificProfessions|ProfesseursEtProfessionsScientifiques|
|35|InformationProfessionsArtsAndEntertainement|ProfessionsDeL'InformationDesArtsEtDuSpectacle|
|37|CorporateAndCommercialExecutives|CadresEtDirigeantsCommerciaux|
|38|EngineersAndTechnicalExecutives|IngénieursEtCadresTechniques|
|42|SchoolTeachersTeachersAndTheLike|EnseignantsEtPersonnelsDeL'Éducation|
|43|IntermediateProfessionsOfHealthAndSocialWork|ProfessionsIntermédiairesDeLaSantéEtDuSocial|
|44|ClergyAndReligious|ClergéEtReligieux|
|45|AdministrativeIntermediateProfessionsOfThePublicService|ProfessionsIntermédiairesAdministrativesDeLaFonctionPublique|
|46|IntermediateAdministrativeAndCommercialProfessionsBusiness|ProfessionsIntermédiairesAdministrativesEtCommercialesDesEntreprises|
|47|Technicians|Techniciens|
|48|FormenAndSupervisors|ContremaîtresEtSuperviseurs|
|52|CivilianAndPublicServiceEmployees|EmployésCivilsEtDeLaFonctionPublique|
|53|PoliceAndMilitary|PoliciersEtMilitaires|
|54|CorporateAdministrativeEmployees|EmployésAdministratifsDesEntreprises|
|55|TradeEmployees|EmployésDuCommerce|
|56|PersonalDirectServicesToIndividuals|Services à la personne|
|62|SkilledWorkersOfIndustrialType|OuvriersQualifiésDeTypeIndustriel|
|63|SkilledCraftsmen|ArtisansQualifiés|
|64|Heaters|Manutentionnaires|
|65|SkilledWorkersInHandlingWarehousingAndTransport|OuvriersQualifiésDeLaManutentionDuStockageEtDuTransport|
|67|UnskilledIndustrialWorkers|OuvriersNonQualifiésDeTypeIndustriel|
|68|UnskilledWorkersOfTheCraftType|OuvriersNonQualifiésDeTypeArtisanal|
|69|AgriculturalWorkers|TravailleursAgricoles|
|71|FormerFarmers|RetraitésAgriculteurs|
|72|FormerCraftsmenTradersEntrepreneurs|RetraitésArtisansCommerçantsEntrepreneurs|
|74|FormerExecutives|RetraitésCadres|
|75|FormerIntermediateProfessions|RetraitésProfessionsIntermédiaires|
|77|FormerEmployees|RetraitésEmployés|
|78|OldWorkers|RetraitésOuvriers|
|81|UnemployedWhoHaveNeverWorked|ChômeursN'ayantJamaisTravaillé|
|83|MilitaryContigent|ContingentMilitaire|
|84|Students|Étudiants|
|85|VariousPersonsWithoutProfessionalActivityUnderSixtyYears|DiversSansActivitéProfessionnelleMoinsDeSoixanteAns|
|86|VariousPersonsWithoutProfessionalActivitySixtyYearsOldAndOver|DiversSansActivitéProfessionnelleSoixanteAnsEtPlus|



<br/><br/>

* * *
## Retrieve user declarative data

[`GET /api/v2.0/users/{AppUserId}/declarative`](https://docs.xpollens.com/api/Users#get-/api/v2.0/users/-AppUserId-/declarative)

<br/><br/>

* * *

## Update user declarative data

[`PUT /api/v2.0/users/{AppUserId}/declarative`](https://docs.xpollens.com/api/Users#put-/api/v2.0/users/-AppUserId-/declarative)

<br/>

* * *
