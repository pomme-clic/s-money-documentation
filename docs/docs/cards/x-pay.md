import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

## What is X-Pay?

X-Pay allows your customers to pay instantly using their smartphone. They can make fast, secure purchases in stores, apps, online. Wherever they see these symbols:

<Image src="docs/Card_Symbol_Contactless+Apple-Pay.png" alt="Contactless and Apple Pay symbols"/>

---

## Wallet enrollment flows

Two flows are employed for X-Pay enrollment:

### Flow 1: Enrollment starts from X-Pay wallet

This flow is also known as **In-App Verification**.

1. Scan or enter card details
2. Accept Terms & Conditions
3. Strong authentication with the partner app

This last step is skipped if X-Pay provider trusts the end-user (Green path).

### Flow 2: Enrollment starts from partner app

This flow is also known as **In-App Provisionning** or **Push Provisionning**.

1. Open the partner app
2. Go to card management section
3. Click on "Add to Apple Wallet", "Add to Google Wallet" or "Add to Samsung Wallet"
4. Accept Terms & Conditions

## Xpollens functional coverage

Xpollens supports the following enrollment flows:

| X-Pay provider | Enrollment from X-Pay wallet <br /> (also known as *In-App Verification*) | Enrollment from partner app <br/> (also known as *In-App Provisionning* <br /> or *Push Provisionning*) |
|:---|:---|:---|
| **Apple Pay**  |✔️Supported |✔️Supported     |
| **Google Wallet** |✔️Supported |⌛ Coming soon <br /> (scheduled: end of 2023) |
| **Samsung Wallet**|✔️Supported |❌Not supported |

Xpollens does not support other X-Pay providers such as Garmin Pay, FitBit, Alipay, WeChat.

<Cta
  context="doc"
  ui="button"
  link="/use-cases/xpay/X-Pay"
  label="Detailed X-Pay documentation"
/>
