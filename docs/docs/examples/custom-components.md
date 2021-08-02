---
title: Custom components
---

[Preview](https://develop--s-money-documentation-site.netlify.app/docs/examples/custom-components)

Imports statements can just be called once, on top of document.

## Optimized images

```markdown
import Image from '@theme/Image';

<Image src="docs/usecase-exemple-00.jpg" alt="usecase 1"/>
```

import Image from '@theme/Image';

<Image src="docs/usecase-exemple-00.jpg" alt="usecase 1"/>

---

## Highlights

Accepted type props: neutral | tip | caution | danger

```markdown
import Highlight from '@theme/Highlight';

<Highlight>

##### Neutral

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>
```

import Highlight from '@theme/Highlight';

<Highlight>

##### Neutral

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

</Highlight>

---

## Endpoints

```markdown
import Endpoint from "@theme/Endpoint"

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>
```

import Endpoint from "@theme/Endpoint"

<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>

---

## Ctas

```markdown
import Cta from '@theme/Cta'

<Cta
  context="doc"
  ui="button"
  link="/api/api1"
  label="Try it out"
/>
```

import Cta from '@theme/Cta'

<Cta
  context="doc"
  ui="button"
  link="/api/api1"
  label="Try it out"
/>
