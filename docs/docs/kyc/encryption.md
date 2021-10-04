import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'





# Sensitive Data Encryption





## Context

### Identity Theft & Fraudulous Payments

The payment industry is the favorite target of fraudsters, who try to obtain card numbers or identity documents and use it to pay without the real owner's knowledge. Hackers have creative tricks to reach their goal, and so must the payment industry continuously work to fight back.

<Highlight>
  Our technology is here to help you fight this situation, and give your end-customer the peace of mind your business requires.
  To enable this, Xpollens uses encrypted payloads, and a specific SDK called ```Secure Interface```.
</Highlight>

<Image src="docs/SCA-getPIN.png" alt="usecase 1"/>
<Image src="docs/SCA-getPAN.png" alt="usecase 1"/>

### Customer Experience -vs- Security PCI-DSS

Your end-customer will want to access some of his very sensitive data directly on his selfcare :
- his card PIN
- his card number, expiry date, CVV2 code
- his account IBAN

These data are subject to a specific regulation, PCI-DSS.

> You do not need to become PCI-DSS compliant. Our solution is compliant and packaged inside our ```Secure Interface``` : you will never manipulate unencrypted sensitive data.

<Highlight type="tip">
Screen mirroring, screenshots, malware, spyware, jailbreak, code change : our Secure Interface is there to ensure these types of hack will not occur on your end-customer's device.
</Highlight>




## SDK Secure Interface

To ensure end-to-end encryption, some payloads will be fully encrypted. You will **not** have the keys to decrypt such payloads, and you will have to use our SDK to encrypt the payload directly on your end-user's device.

> Note that you will not have access to your end-user's data ; only her/him will have the possibility to see the data.

<Image src="docs/SCA-encryption-basics.png" alt="usecase 1"/>

<Highlight type="caution">
<b class="term">Our Secure Interface SDK documentation is subject to Non-Disclosure Agreement, please talk to your Sales Representative.</b>
</Highlight>
