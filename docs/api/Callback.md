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

| Context           | Value | field                                           | Example                                                                                                                                                                                                                                                        |
| ----------------- | ----- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Topup CB          | 1     |                                                 |                                                                                                                                                                                                                                                                |
| Kyc               | 4     | KYC result                                      |                                                                                                                                                                                                                                                                |
| SDD IN            | 7     |                                                 |                                                                                                                                                                                                                                                                |
| SCT IN            | 8     |                                                 |                                                                                                                                                                                                                                                                |
| SDD               | 9     |                                                 |                                                                                                                                                                                                                                                                |
| CreateRib         | 10    |                                                 |                                                                                                                                                                                                                                                                |
| Money return      | 11    |                                                 |                                                                                                                                                                                                                                                                |
| ?                 | 14    |                                                 |                                                                                                                                                                                                                                                                |
| FreezeUser        | 15    | Frozen account                                  |                                                                                                                                                                                                                                                                |
| SCTIn             | 16    | SCT IN                                          |                                                                                                                                                                                                                                                                |
| SCTOut            | 17    | SCT OUT                                         |                                                                                                                                                                                                                                                                |
| SDDIn             | 18    | SDD IN                                          |                                                                                                                                                                                                                                                                |
| CardOperations    | 20    | Card operations                                 |                                                                                                                                                                                                                                                                |
| Card              | 21    | Card status                                     |                                                                                                                                                                                                                                                                |
| CardClearingReady | 24    | Card clearing                                   |                                                                                                                                                                                                                                                                |
| TokenCallback     | 25    | VISA token status                               |                                                                                                                                                                                                                                                                |
| Risk Level        | 32    | Risklevel                                       |                                                                                                                                                                                                                                                                |
| Client debt       | 33    | Client debt created                             | {"type": 29,"date": "2020-10-14T21:25:36.6789579+00:00","id": "P2PE2E5ARh4ERfR-VL-wF2J","userId": "75c03e11J","amount": 110,"status": 0,"remainingAmount": 10,"debtReason": "P2P","lossAndProfitBalance": 674.24}, |
| User              | 34    | dossier Client (USer Record)                    |
| SCA               | 35    | Strong authentication - wallet Creation         |
| SCA               | 36    | Strong authentication - Authentication callback |
| TopUp Refund      | 37    | TopUp Refund                                    |
| SCT IN            | 38    |  InstantPaymentIn                               |
| SCT OUT           | 39    | InstantPaymentOut                               |
| ?                 | 40    | FundReservation                                 |
| ?                 | 41    |  Account                                        |                                                                                                                                                                                                                                                                |
| Money return      | 42    | RecallInstantPaymentOut                         |
