import Image from '@theme/Image';
import Highlight from '@theme/Highlight';
import Endpoint from "@theme/Endpoint"
import Cta from '@theme/Cta'

# Overview

The Xpollens API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Xpollens API in a dedicated sandbox mode, which does not affect your live data or interact with the banking networks.
See with your Xpollens representative to gain access to your dedicated Sandbox and API keys.

## Service Blueprint

Most of presented use cases are illustrated by a design blueprint. It gives an overview of what a feature does and illustrates the function of several APIs.
The goal is to present developers and product teams to understand what the APIs can offer and how our platform can be integrated with your use cases.

<Image src="docs/Overview-example.png" alt="usecase 1"/>

## Ressources

<Highlight>

##### Note neutre

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

<Highlight type="tip">

##### Tip

If you want to provide a virtual card, temporary (emergency use case for example) or permanent, you can just use the same API with the virtual product card

</Highlight>

<Highlight type="caution">

##### Caution

To create a card the user (= cardholder) has to exist in the system

</Highlight>

<Highlight type="danger">

##### Danger

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue.

## Transfert d'argent P2P

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

## Endpoints

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

### Hmac adapter 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.

More information regarding this endpoint in the [API reference](/api/api1)

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

<!-- <Endpoint apiUrl="/v1.0/migrationProxy" path="​/api/v1.0/users/{userid}/cards/{id}" method="delete"/> -->

<Cta
  context="doc"
  ui="button"
  link="/api/api1"
  label="Try it out"
/>

### Hmac adapter 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
