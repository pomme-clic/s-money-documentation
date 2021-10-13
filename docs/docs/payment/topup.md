import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Topup card


## Xpollens shop integration

First you have to integrate a Xpollens shop with our "company brother" Dalenys to provide some fieds in your app in order to customer can entry data cards.

### Hosted fields with Dalenys

<Image src="docs/PayOUT_HostedFields.png" alt="usecase 1"/>

In this picture, Xpollens is your Shop.

> 1. You display a payment page including a payment form, except that the bankcard input fields are replaced by hosted-fields containers. These containers could be any HTML tag: div, p, span… the hosted-fields JavaScript library injects Dalenys-hosted iframes in these containers, each containing the card data input fields;
> 2. At the submit process, you should call the createToken method of the hosted-fields library which will trigger the tokenization of the cardholder data (card number, expiry date and cryptogram);
> 3. If the tokenization is successful, you must add the received token to your form submission request (e.g. by adding a hidden input);
> 4. You can submit the payment form to your own server by calling API Xpollens **Create a topup with 3DSv2**
> 5. Xpollens sends a HTTPS POST request to our classical server to server endpoint: https://secure-test.dalenys.com/front/service/rest/process. The requests should contain the token instead of the cardholder data;
> 6. The Dalenys platform sends a request to the bank network and waits for the result.
> 7. Xpollens receives the result in the request response and answers you wtih callback.
> 8. In parallel, the transaction result is confirmed by a notification request sent to the merchant’s NOTIFICATION_URL containing the transaction’s parameters (among which EXECCODE and TRANSACTIONID).  


More information regarding this endpoint in the [Hosted Fields by Dalenys](https://developer.dalenys.com/integration-modes/hosted-fields.html)

---

## Features with Xpollens shop

### Create a topup with 3DSv2

**Create a top up with 3DSV2**

This endpoint is used to create top up request with 3DSV2. The holder of the Xpollens account can add money to his Xpollens account using his bank card. Thus, he will debit his bank account and credit his Xpollens account with the topup.
If fees must be attached to this transaction, you can fill in the "Fee" parameter in the body of the request with the amount of the fees. The bank card holder will be debited for the "Amount+Fee".

<Image src="docs/Topup_Create3DS.png" alt="usecase 1"/>

**Card registration during payment**

To register the bank card during payment, you must, in the body of the request, in the "Card" parameter, specify the "AppCardId" parameter. It will be this "AppCardId" which will be called later for the top up oneclik. If there is no need to register the bank card during payment, then you should not specify "AppCardId". This parameter is optional.

<Image src="docs/Topup_RegisterCard.png" alt="usecase 1"/>

**Top up Oneclick with 3DSV2**

To create a top up oneclick, you must, in the body of the request, add and fill in the "AppCardId" parameter instead of the "HFToken" parameter". This will allow you to directly call the previously registered bank card.

#### Endpoint

More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/payins/cardpayments" method="post"/>

---

### Get all registered banks cards
  
The service is used to retrieve all existing bank cards already registered for a dedicated user. All information associated to the card will be displayed

#### Endpoint

More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/cards/registered" method="get"/>

---

### Get all top up
  
This endpoint is used by a dedicated user, to consult the list of top up operations, executed from his Xpollens account.

#### Endpoint

More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/payins/cardpayments" method="get"/>

---

### Get top up by orderId
  
This endpoint is used by a dedicated user, to consult a specific top up operation, by the orderid.

#### Endpoint

More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/payins/cardpayments/{id}" method="get"/>

---

### Refund a top up
  
A refund operation enables you to credit funds back to a end-user following a previous debit. A refund transaction **is always linked to a successsful payment or capture transaction which it requires the original TOP UP**.

This endpoint is used to refund a top up. It is possible to fully or partially refund an operation. You can refund several times a same debit transaction, but the sum of all the refund operations can’t be higher that the original debit amount.

By using this feature, the bank card holder will be refunded directly to his bank card, and the Xpollens account will be debited for the amount to be refunded. If there was a fee charged during the topup, then the fee will also be refunded to the bank card holder, and the Xpollens Partner's commission account will be debited with the amount of the commission to be refunded.

The amount of a refund transaction can be different from the original debit transaction but can not be higher. So the amount specified in the body of the request corresponds to the amount to be refund. The fee specified in the body of the request corresponds to the fee to be refund. Each amount must be less than or equal to the initial amount of the topup. 

The orderid specified in the body of the request corresponds to a new orderid designating the refund operation.

#### Endpoint

More information regarding this endpoint in the [API reference.](/api/Core)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api/v1.1/users/{userid}/payins/cardpayments/{id}/payments/{paymentid}/refunds" method="post"/>

---

<Cta
  context="doc"
  ui="button"
  link="/api/Core"
  label="Try it out"
/>
