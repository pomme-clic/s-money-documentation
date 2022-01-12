---
title: Callbacks
sidebar_label: Callbacks
hide_table_of_contents: true
---

# Callback list

import Rapidoc from "@theme/Rapidoc"

import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'


<div id="Callbacks Webhook_3433" align="center" x:publishsource="Excel">

<table border="0" cellpadding="0" cellspacing="0" width="1033" class="xl653433" style="border-collapse:collapse;table-layout:fixed;width:774pt">
 <colgroup><col class="xl653433" width="109" style="mso-width-source:userset;mso-width-alt:
 3868;width:82pt">
 <col class="xl653433" width="234" style="mso-width-source:userset;mso-width-alt:
 8305;width:175pt">
 <col class="xl653433" width="228" style="mso-width-source:userset;mso-width-alt:
 8106;width:171pt">
 <col class="xl653433" width="43" style="mso-width-source:userset;mso-width-alt:
 1536;width:32pt">
 <col class="xl653433" width="419" style="mso-width-source:userset;mso-width-alt:
 14904;width:314pt">
 </colgroup><tbody><tr height="28" style="height:21.0pt">
  <td height="28" class="xl633433" width="109" style="height:21.0pt;width:82pt">Callback
  type</td>
  <td class="xl643433" width="234" style="width:175pt">Callback context</td>
  <td class="xl633433" width="228" style="width:171pt">Parameters (Payload Details)</td>
  <td class="xl633433" width="43" style="width:32pt">Type</td>
  <td class="xl643433" width="419" style="width:314pt">Description</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="6" height="442" class="xl763433" style="border-bottom:1.0pt solid black;
  height:331.8pt">1</td>
  <td rowspan="6" class="xl773433" style="border-bottom:1.0pt solid black">TopUp</td>
  <td class="xl663433" style="border-left:none">id</td>
  <td class="xl663433" style="border-left:none">String</td>
  <td class="xl673433" width="419" style="border-left:none;width:314pt">Identifiant
  de la transaction</td>
 </tr>
 <tr height="173" style="height:129.6pt">
  <td height="173" class="xl683433" style="height:129.6pt;border-top:none;
  border-left:none">error</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Code d’erreur pour les paiements échoués, 0 si aucune
  erreur.<br>
    Référentiels des statuts : <br>
    0 = 0XXX operation succeeded or still processing<br>
    10 = 1XXX operation rejected because of bad request configuration<br>
    11 = 2XXX operation rejected because of bad reference usage<br>
    12 = 3XXX operation rejected because of bad account configuration<br>
    13 = 4XXX operation rejected because of the bank or the supplier<br>
    14 = 5XXX operation rejected because of a system error<br>
    15 = 6XXX operation rejected because of anti-fraud engine</td>
 </tr>
 <tr height="192" style="height:144.0pt">
  <td height="192" class="xl683433" style="height:144.0pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction<br>
    Référentiels des statuts : <br>
    -1 = unknow<br>
    0 = waiting<br>
    1 = completed<br>
    2 = refunded<br>
    3 = refused<br>
    4 = Waiting for validation<br>
    5 = Cancelled<br>
    6 = Waiting to be sent</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">type</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">initialOrderID</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction initiale</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">amount</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Montant de la transaction</td>
 </tr>
 <tr height="19" style="mso-height-source:userset;height:14.4pt">
  <td rowspan="6" height="653" class="xl763433" style="border-bottom:1.0pt solid black;
  height:490.2pt;border-top:none">4</td>
  <td rowspan="6" class="xl823433" width="234" style="border-bottom:1.0pt solid black;
  border-top:none;width:175pt"><font class="font73433">KYC demand</font><font class="font63433"><br>
    Sent everytime the status of the KYC demand is updated</font></td>
  <td class="xl663433" style="border-top:none;border-left:none">type</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Callback type = 4</td>
 </tr>
 <tr height="96" style="height:72.0pt">
  <td height="96" class="xl683433" style="height:72.0pt;border-top:none;border-left:
  none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt"><font class="font53433">status of the KYC demand :</font><font class="font03433"><br>
    Initialized<br>
    Incomplete<br>
    Complete<br>
    Pending</font></td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">appUserId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The user's unique identifier</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">diligences -&gt; reason</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The reason of acceptance or rejection of the diligence :</td>
 </tr>
 <tr height="422" style="height:316.8pt">
  <td height="422" class="xl683433" style="height:316.8pt;border-top:none;
  border-left:none">diligences -&gt; diligenceType</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt"><font class="font53433">type of the diligence :</font><font class="font03433"><br>
    ID_CARD<br>
    PASSPORT<br>
    VETERAN_CARD<br>
    MILITARY_ID<br>
    RES_CARD<br>
    EMPL_CONTRACT<br>
    PAYSLIP<br>
    CESU<br>
    PENSION_RET<br>
    STUDENT_ID<br>
    TAX_NOTICE<br>
    INCOME_TAX<br>
    ASDIR<br>
    RSA<br>
    RMI<br>
    DIS_CERTIF<br>
    PROOF_FAM_ALLOW<br>
    ACC_STAT<br>
    SCTIN<br>
    ACC_AGG<br>
    SELFIE</font></td>
 </tr>
 <tr height="78" style="height:58.2pt">
  <td height="78" class="xl703433" style="height:58.2pt;border-top:none;border-left:
  none">diligences -&gt; Status</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt"><font class="font53433">status of the diligence</font><font class="font03433"> :<br>
    Validated<br>
    Refused<br>
    To_Review_Manually</font></td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="3" height="58" class="xl763433" style="border-bottom:1.0pt solid black;
  height:43.8pt;border-top:none">5</td>
  <td rowspan="3" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">Enregistrement de carte bancaire</td>
  <td class="xl663433" style="border-top:none;border-left:none">type</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">id</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appcardid de la carte enregistrée</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur qui a enregistré la carte</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="5" height="192" class="xl763433" style="border-bottom:1.0pt solid black;
  height:144.6pt;border-top:none">16</td>
  <td rowspan="5" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">SCTIn</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">reference</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="115" style="height:86.4pt">
  <td height="115" class="xl683433" style="height:86.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction. <br>
    Référentiel des statuts : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Pending = 0,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Succeeded = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Refund = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Failed = 3</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="5" height="192" class="xl763433" style="border-bottom:1.0pt solid black;
  height:144.6pt;border-top:none">17</td>
  <td rowspan="5" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">SCTOut</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">reference</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="115" style="height:86.4pt">
  <td height="115" class="xl683433" style="height:86.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction. <br>
    Référentiel des statuts : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Pending = 0,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Succeeded = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Refund = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Failed = 3</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="5" height="192" class="xl763433" style="border-bottom:1.0pt solid black;
  height:144.6pt;border-top:none">18</td>
  <td rowspan="5" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">SDDOut</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">reference</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="115" style="height:86.4pt">
  <td height="115" class="xl683433" style="height:86.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction. <br>
    Référentiel des statuts : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Pending = 0,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Succeeded = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Refund = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Failed = 3</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="5" height="192" class="xl763433" style="border-bottom:1.0pt solid black;
  height:144.6pt;border-top:none">19</td>
  <td rowspan="5" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">SDDIn</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">reference</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="115" style="height:86.4pt">
  <td height="115" class="xl683433" style="height:86.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction. <br>
    Référentiel des statuts : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Pending = 0,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Succeeded = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Refund = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Failed = 3</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="19" height="534" class="xl763433" style="border-bottom:1.0pt solid black;
  height:403.8pt;border-top:none">20</td>
  <td rowspan="19" class="xl823433" width="234" style="border-bottom:1.0pt solid black;
  border-top:none;width:175pt"><font class="font73433">Card Operation</font><font class="font63433"> Status change</font></td>
  <td class="xl663433" style="border-top:none;border-left:none">Id</td>
  <td class="xl663433" style="border-top:none;border-left:none">long</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">S-money internal Id</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">reference</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Operation OrderID</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">type</td>
  <td class="xl683433" style="border-top:none;border-left:none">&nbsp;</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Callback Type = 20</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">appCardId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">reference of the card given by the partner</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">transactionAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">decima<span style="display:none">l</span></td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">amount in local currency (euro or foreign currency)</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">currencyCodeTransaction</td>
  <td class="xl683433" style="border-top:none;border-left:none">string</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">currency transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">cardHolderBillingAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">decima<span style="display:none">l</span></td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Amount in euro (used for foreign currency transactions)</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">cardHolderBillingConversionRate</td>
  <td class="xl683433" style="border-top:none;border-left:none">decima<span style="display:none">l</span></td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Exchange rate (used for foreign currency transactions)</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">availableBalance</td>
  <td class="xl683433" style="border-top:none;border-left:none">decima<span style="display:none">l</span></td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">balance after authorization</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">actionCode</td>
  <td class="xl683433" style="border-top:none;border-left:none">int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">response codes (authorization and reasons for refusal)</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">merchantType</td>
  <td class="xl683433" style="border-top:none;border-left:none">int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">merchant category code</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">cardAcceptorIdentificationCodeName</td>
  <td class="xl683433" style="border-top:none;border-left:none">string</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">merchant information = name, adress</td>
 </tr>
 <tr height="134" style="height:100.8pt">
  <td height="134" class="xl683433" style="height:100.8pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">Int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Operations status<br>
    0 = Waiting<br>
    1 = Completed<br>
    2 = Refunded<br>
    3 = Failed<br>
    5 = Cancelled<br>
    7 = Expired</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">ert</td>
  <td class="xl683433" style="border-top:none;border-left:none">&nbsp;</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">transaction context <br>
    (more details on the codification in Chapter 2.5)</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">cardDataInputMode</td>
  <td class="xl683433" style="border-top:none;border-left:none">&nbsp;</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">how to use the card<br>
    (more details on the codification in Chapter 2.5)</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">tokenRequestorID</td>
  <td class="xl683433" style="border-top:none;border-left:none">&nbsp;</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">determines a payment that uses a token (such as XPAY)<br>
    (more details on the codification in Chapter 2.5)</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">terminalCountryCode</td>
  <td class="xl683433" style="border-top:none;border-left:none">&nbsp;</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">country reference where payment took place</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">string</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">reference of the user given by the partner</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">executedDate</td>
  <td class="xl703433" style="border-top:none;border-left:none">DateTi<span style="display:none">me</span></td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Executed date of the operation</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="7" height="709" class="xl763433" style="border-bottom:1.0pt solid black;
  height:533.4pt;border-top:none">21</td>
  <td rowspan="7" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">Card creation (or card change status)<span style="mso-spacerun:yes">&nbsp;</span></td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">Int</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Xpollens' internal and technical card identifier</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">reference</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Reference or Alias of the card (Called also AppCardId)</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">type</td>
  <td class="xl683433" style="border-top:none;border-left:none">Int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">21' is the callback type when the card is ordered or it's status
  has changed<span style="mso-spacerun:yes">&nbsp;</span></td>
 </tr>
 <tr height="134" style="height:100.8pt">
  <td height="134" class="xl683433" style="height:100.8pt;border-top:none;
  border-left:none">cardType</td>
  <td class="xl683433" style="border-top:none;border-left:none">Int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type of the card ordered. <br>
    Here are the different types that the card can have:<br>
    1 = Classic virtual<br>
    2 = Classic physical<br>
    3 = Premium virtual<br>
    4 = Premium physical<br>
    </td>
 </tr>
 <tr height="134" style="height:100.8pt">
  <td height="134" class="xl683433" style="height:100.8pt;border-top:none;
  border-left:none">action</td>
  <td class="xl683433" style="border-top:none;border-left:none">Int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Actions done on the card.<br>
    Here are the different values of actions.<br>
    0 = Creation<br>
    1 = Cancellation <br>
    2 = Refabrication<br>
    3 = Renewal ( Not used yet)<br>
    4 = Update<span style="mso-spacerun:yes">&nbsp;</span></td>
 </tr>
 <tr height="211" style="height:158.4pt">
  <td height="211" class="xl683433" style="height:158.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">Int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Status of the card.<br>
    Here are the different stauts that the card can have:<br>
    0 = Ordered<br>
    1 = Sent<br>
    2 = Activated<br>
    3 = Expired (Not used yet)<br>
    4 = Opposed<br>
    5= Failed<br>
    6=Deactivated<br>
    7=Cancelled<br>
    </td>
 </tr>
 <tr height="154" style="height:115.8pt">
  <td height="154" class="xl703433" style="height:115.8pt;border-top:none;
  border-left:none">opposedReason</td>
  <td class="xl703433" style="border-top:none;border-left:none">Int</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Reason on card's opposition, this field is different than '0'
  only when the card is opposed.<br>
    Here are the different reasons for card's opposition: <br>
    07 = special conditions<br>
    34 = Suspected fraud<br>
    41 = Lost<br>
    43 = Stolen<br>
    </td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="3" height="77" class="xl763433" style="border-bottom:1.0pt solid black;
  height:58.2pt;border-top:none">24</td>
  <td rowspan="3" class="xl823433" width="234" style="border-bottom:1.0pt solid black;
  border-top:none;width:175pt"><font class="font73433">Card Operation Clearing</font><font class="font63433"> processing Id</font></td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">long</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">S-money internal Id</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">reference</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Batch file reference to retrieve the operations of the clearing
  report with the API</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">Int</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Callbacks card clearing = 24</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="9" height="537" class="xl763433" style="border-bottom:1.0pt solid black;
  height:403.8pt;border-top:none">25</td>
  <td rowspan="9" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">Token life cycle management (or token status change )<span style="mso-spacerun:yes">&nbsp;</span></td>
  <td class="xl663433" style="border-top:none;border-left:none">&nbsp;id</td>
  <td class="xl663433" style="border-top:none;border-left:none">int</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Xpollens' internal and technical card identifier</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">reference</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Reference or Alias of the card (Called also AppCardId)</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">type</td>
  <td class="xl683433" style="border-top:none;border-left:none">int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">25' is the callback type sent when the Token is created or
  changes it's status</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">tokenValue</td>
  <td class="xl683433" style="border-top:none;border-left:none">int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Value of the token</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">tokenReferenceID</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Value returned by VISA, it's an unique ID for the Token
  associated with the PAN (Card)</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">tokenRequestorID</td>
  <td class="xl683433" style="border-top:none;border-left:none">int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Value returned by VISA, it's anID assigned to the Initiator of
  the Token Request</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">panReferenceId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Value returned by VISA refers to the pan</td>
 </tr>
 <tr height="154" style="height:115.2pt">
  <td height="154" class="xl683433" style="height:115.2pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Status of the token.<br>
    Here are the different values that the token can have:<br>
    A = Active for payment<br>
    I = Inactive (not active yet) for payment<br>
    S = Temporaly Suspended for payment<br>
    D = Permanently Deactivated for Payment<br>
    <br>
    </td>
 </tr>
 <tr height="193" style="height:144.6pt">
  <td height="193" class="xl703433" style="height:144.6pt;border-top:none;
  border-left:none">messageReasonCode</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl723433" width="419" style="border-top:none;border-left:none;
  width:314pt">Reason of the reception of this callback. it will be equal to
  1400 (Token creation) or null<br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    </td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="4" height="77" class="xl763433" style="border-bottom:1.0pt solid black;
  height:58.2pt;border-top:none">29</td>
  <td rowspan="4" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">P2P</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">receiver</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">appaccountid du bénéficiaire de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">sender</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">appaccountid de l'emetteur de la transaction</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="mso-height-source:userset;height:14.4pt">
  <td rowspan="12" height="384" class="xl763433" style="border-bottom:1.0pt solid black;
  height:288.6pt;border-top:none">31</td>
  <td rowspan="12" class="xl853433" width="234" style="border-bottom:1.0pt solid black;
  border-top:none;width:175pt">KYC complementary diligence SCT_IN /
  InstanPayment</td>
  <td class="xl663433" style="border-top:none;border-left:none">type</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Callback type = 31</td>
 </tr>
 <tr height="77" style="height:57.6pt">
  <td height="77" class="xl683433" style="height:57.6pt;border-top:none;border-left:
  none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The status of the diligence :<br>
    Validated<br>
    Refused<br>
    To_Review_Manually</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">appUserId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The user's unique identifier</td>
 </tr>
 <tr height="58" style="height:43.2pt">
  <td height="58" class="xl683433" style="height:43.2pt;border-top:none;border-left:
  none">diligenceType</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The type of the diligence :<br>
    SCT_In<br>
    InstantPayment_In</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">reason</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The reason of acceptance or rejection of the diligence</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">amount</td>
  <td class="xl683433" style="border-top:none;border-left:none">Int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The amount of the money in</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">transferDate</td>
  <td class="xl683433" style="border-top:none;border-left:none">Date</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The date of the money in transfer</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">transmitterFullName</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The firstname and lastname (and birthname if existing) of the
  transmitter</td>
 </tr>
 <tr height="58" style="height:43.2pt">
  <td height="58" class="xl683433" style="height:43.2pt;border-top:none;border-left:
  none">operationType</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The type of the operation :<br>
    SCT_In<br>
    InstantPayment_In</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">orderId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The operation's unique identifier</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">score -&gt; name</td>
  <td class="xl683433" style="border-top:none;border-left:none">Int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The result of the identity matching algorithm (between 0 and 1)</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">score -&gt; firstname</td>
  <td class="xl703433" style="border-top:none;border-left:none">Int</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">The result of the identity matching algorithm (between 0 and 1)</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="4" height="96" class="xl763433" style="border-bottom:1.0pt solid black;
  height:72.6pt;border-top:none">32</td>
  <td rowspan="4" class="xl823433" width="234" style="border-bottom:1.0pt solid black;
  border-top:none;width:175pt"><font class="font73433">Risk Level</font><font class="font63433"> change</font></td>
  <td class="xl663433" style="border-top:none;border-left:none">&nbsp;eventDate</td>
  <td class="xl663433" style="border-top:none;border-left:none">Date</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Date of the risk level event change</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">appUserId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Xpollens Customer Identifier given by the partner</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">riskLevel</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Level of customer risk based on several criteria. Can be Low,
  Medium or high</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Callback Type=32</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="9" height="191" class="xl763433" style="border-bottom:1.0pt solid black;
  height:144.6pt;border-top:none">33</td>
  <td rowspan="9" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">Client debt created<span style="mso-spacerun:yes">&nbsp;</span></td>
  <td class="xl663433" style="border-top:none;border-left:none">type</td>
  <td class="xl663433" style="border-top:none;border-left:none">string</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">33 : is the code of the callback dedicated to a debt creation</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">Date</td>
  <td class="xl683433" style="border-top:none;border-left:none">dateti<span style="display:none">me</span></td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Date of origin operation creation</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">id</td>
  <td class="xl683433" style="border-top:none;border-left:none">string</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Id of the origin operation</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">char</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The user technical identification</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">originAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">long</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The amount of principal operation</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">int</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Status of the debt (In progress,closed with recovery or closed
  without recovery)</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">debtAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">long</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The principal amount of a debt</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">debtReason</td>
  <td class="xl683433" style="border-top:none;border-left:none">string</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Functional cases leading to a debt creation ( P2P, CardOperation
  ,JRI)</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">lossAndProfitBalance</td>
  <td class="xl703433" style="border-top:none;border-left:none">long</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">The amount of loss and profit account after the debt creation.</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="4" height="173" class="xl763433" style="border-bottom:1.0pt solid black;
  height:130.2pt;border-top:none">34</td>
  <td rowspan="4" class="xl883433" style="border-bottom:1.0pt solid black;
  border-top:none">User's onboarding state (called <font class="font73433">user
  record</font><font class="font63433">)</font></td>
  <td class="xl663433" style="border-top:none;border-left:none">type</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Callback type = 34</td>
 </tr>
 <tr height="96" style="height:72.0pt">
  <td height="96" class="xl683433" style="height:72.0pt;border-top:none;border-left:
  none">userRecordStatus</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The status of the user record :<br>
    1	Initialized <br>
    2	InProgress<br>
    4	Validated<br>
    5	Refused</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">appUserId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The user's unique identifier</td>
 </tr>
 <tr height="39" style="height:29.4pt">
  <td height="39" class="xl703433" style="height:29.4pt;border-top:none;border-left:
  none">publicUserCode</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Corresponds to issuerClientID at Antelop. It is used to create
  the wallet at Antelop</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="6" height="442" class="xl763433" style="border-bottom:1.0pt solid black;
  height:331.8pt;border-top:none">37</td>
  <td rowspan="6" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">Refund TopUp</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="173" style="height:129.6pt">
  <td height="173" class="xl683433" style="height:129.6pt;border-top:none;
  border-left:none">error</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Code d’erreur pour les paiements échoués, 0 si aucune
  erreur.<br>
    Référentiels des statuts : <br>
    0 = 0XXX operation succeeded or still processing<br>
    10 = 1XXX operation rejected because of bad request configuration<br>
    11 = 2XXX operation rejected because of bad reference usage<br>
    12 = 3XXX operation rejected because of bad account configuration<br>
    13 = 4XXX operation rejected because of the bank or the supplier<br>
    14 = 5XXX operation rejected because of a system error<br>
    15 = 6XXX operation rejected because of anti-fraud engine</td>
 </tr>
 <tr height="192" style="height:144.0pt">
  <td height="192" class="xl683433" style="height:144.0pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction<br>
    Référentiels des statuts : <br>
    -1 = unknow<br>
    0 = waiting<br>
    1 = completed<br>
    2 = refunded<br>
    3 = refused<br>
    4 = Waiting for validation<br>
    5 = Cancelled<br>
    6 = Waiting to be sent</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">type</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">initialOrderID</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction initiale</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">amount</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Montant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="7" height="230" class="xl763433" style="border-bottom:1.0pt solid black;
  height:173.4pt;border-top:none">38</td>
  <td rowspan="7" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none"><span style="mso-spacerun:yes">&nbsp;</span>InstantPaymentIn</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">orderId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">operationAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Montant de la transaction</td>
 </tr>
 <tr height="115" style="height:86.4pt">
  <td height="115" class="xl683433" style="height:86.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction. <br>
    Référentiel des statuts : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Pending = 0,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Succeeded = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Refund = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Failed = 3</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">rejectReason</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Motif du rejet, en cas de rejet de la transaction</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="7" height="230" class="xl763433" style="border-bottom:1.0pt solid black;
  height:173.4pt;border-top:none">39</td>
  <td rowspan="7" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">InstantPaymentOut</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">orderId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">operationAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Montant de la transaction</td>
 </tr>
 <tr height="115" style="height:86.4pt">
  <td height="115" class="xl683433" style="height:86.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction. <br>
    Référentiel des statuts : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Pending = 0,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Succeeded = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Refund = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Failed = 3</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">rejectReason</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Motif du rejet, en cas de rejet de la transaction</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="7" height="249" class="xl763433" style="border-bottom:1.0pt solid black;
  height:187.8pt;border-top:none">40</td>
  <td rowspan="7" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">FundReservation</td>
  <td class="xl663433" style="border-top:none;border-left:none">type</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">operationId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">orderId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">operationAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Montant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">authorizationBalanceAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Solde d'autorisation</td>
 </tr>
 <tr height="135" style="height:101.4pt">
  <td height="135" class="xl703433" style="height:101.4pt;border-top:none;
  border-left:none">dispositionCheckStatusId</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut du DispositionCheck.<br>
    Référentiel des status : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp; </span>NotReceived = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp; </span>Requested = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp; </span>Authorized = 3,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp; </span>Refused = 10,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp; </span>Canceled = 11</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="7" height="230" class="xl763433" style="border-bottom:1.0pt solid black;
  height:173.4pt;border-top:none">41</td>
  <td rowspan="7" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">RecallInstantPaymentIn</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">orderId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">operationAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Montant de la transaction</td>
 </tr>
 <tr height="115" style="height:86.4pt">
  <td height="115" class="xl683433" style="height:86.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction. <br>
    Référentiel des statuts : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Pending = 0,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Succeeded = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Refund = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Failed = 3</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">rejectReason</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Motif du rejet, en cas de rejet de la transaction</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="7" height="230" class="xl763433" style="border-bottom:1.0pt solid black;
  height:173.4pt;border-top:none">42</td>
  <td rowspan="7" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">RecallInstantPaymentOut</td>
  <td class="xl663433" style="border-top:none;border-left:none">id</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identifiant de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">orderId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Orderid de la transaction</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">userid</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Appuserid de l'utilisateur</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">operationAmount</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Montant de la transaction</td>
 </tr>
 <tr height="115" style="height:86.4pt">
  <td height="115" class="xl683433" style="height:86.4pt;border-top:none;
  border-left:none">status</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Statut de la transaction. <br>
    Référentiel des statuts : <br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Pending = 0,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Succeeded = 1,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Refund = 2,<br>
    <span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Failed = 3</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">rejectReason</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Motif du rejet, en cas de rejet de la transaction</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">type</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
  <td class="xl713433" width="419" style="border-top:none;border-left:none;
  width:314pt">Type du callback</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td rowspan="23" height="553" class="xl763433" style="border-bottom:1.0pt solid black;
  height:418.2pt;border-top:none">43</td>
  <td rowspan="23" class="xl773433" style="border-bottom:1.0pt solid black;
  border-top:none">legalEntity</td>
  <td class="xl663433" style="border-top:none;border-left:none">type</td>
  <td class="xl663433" style="border-top:none;border-left:none">String</td>
  <td class="xl673433" width="419" style="border-top:none;border-left:none;
  width:314pt">Callback type = 43</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">legalEntityId</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The legal entity's unique identifier</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">RegistrationNumber</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Identification number of the legal entity<br>
    It's the Sirène if the legal Entity is registered in France</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">RegistrationCountry</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The registration country of the legal entity (Code ISO 3166-1)</td>
 </tr>
 <tr height="58" style="height:43.2pt">
  <td height="58" class="xl683433" style="height:43.2pt;border-top:none;border-left:
  none">LegalEntityCreationStatus</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The legal entity's creation status :<br>
    Succeeded<br>
    Failed</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">RegistrationCity</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The legal entity's registration city</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">CompanyName</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The name of the legal entity</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">TradeName</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The commercial name of the legal entity</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">NaceCode</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Legal entity's type of economical activity</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">LegalForm</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Legal entity's legal form</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">CreationDate</td>
  <td class="xl683433" style="border-top:none;border-left:none">Date</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The creation date of the legal entity</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">legalEntityRecordStatus</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">The onboarding status of the legal entity</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">TurnOver</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Turn Over N-1</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">HighFinancialIncome</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">High Financial Income<br>
    Value: "True" , "False"</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">ListedInStockMarkets</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Listed In Stock Markets <br>
    Value: "True" , "False"</td>
 </tr>
 <tr height="38" style="height:28.8pt">
  <td height="38" class="xl683433" style="height:28.8pt;border-top:none;border-left:
  none">Regulated</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td class="xl693433" width="419" style="border-top:none;border-left:none;
  width:314pt">Regulated <br>
    Value: "True" , "False"</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">Address -&gt; Street</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
  <td rowspan="7" class="xl733433" width="419" style="border-bottom:1.0pt solid black;
  border-top:none;width:314pt">The address informations of the legal entity</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">Address -&gt; SupplementIn</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">Address -&gt; SupplementOut</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">Address -&gt; Area</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">Address -&gt; ZipCode</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
 </tr>
 <tr height="19" style="height:14.4pt">
  <td height="19" class="xl683433" style="height:14.4pt;border-top:none;border-left:
  none">Address -&gt; City</td>
  <td class="xl683433" style="border-top:none;border-left:none">String</td>
 </tr>
 <tr height="20" style="height:15.0pt">
  <td height="20" class="xl703433" style="height:15.0pt;border-top:none;border-left:
  none">Address -&gt; Country</td>
  <td class="xl703433" style="border-top:none;border-left:none">String</td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0" style="display:none">
  <td width="109" style="width:82pt"></td>
  <td width="234" style="width:175pt"></td>
  <td width="228" style="width:171pt"></td>
  <td width="43" style="width:32pt"></td>
  <td width="419" style="width:314pt"></td>
 </tr>
 <!--[endif]-->
</tbody></table>

</div>
