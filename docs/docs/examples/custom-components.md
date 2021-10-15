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

<b>Lorem Ipsum</b> sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et

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
  link="/api/Core"
  label="Try it out"
/>

---

## Local Video player

```markdown
import VideoPlayer from '@theme/VideoPlayer'

<!-- Remote -->
<VideoPlayer type="remote" src="https://www.youtube.com/watch?v=XQxk7SE_apQ" width="1280" height="720"/>

<!-- Local -->
<VideoPlayer type="local" src="docs/xpollens-authenticator.mp4" width="496" height="1080"/>
```

import VideoPlayer from '@theme/VideoPlayer'

<VideoPlayer type="remote" src="https://www.youtube.com/watch?v=XQxk7SE_apQ" width="1280" height="720"/>

<VideoPlayer type="local" src="docs/xpollens-authenticator.mp4" width="496" height="1080"/>
