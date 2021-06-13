---
sidebar_label: "Hello"
id: my-doc-id
title: Hello
description: My document description
slug: /yoyo
---

# Hello

This is my **first Docusaurus document**!

[go to intro](./intro)

[go to test page](/test)

![image name](/img/docusaurus.png)

```jsx title="test"
console.log('test)
```

import Test from '../src/components/Test.js'

<Test />

yo ?

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="apple"
values={[
{label: 'Apple', value: 'apple'},
{label: 'Orange', value: 'orange'},
{label: 'Banana', value: 'banana'},
]}>
<TabItem value="apple">This is an apple 🍎</TabItem>
<TabItem value="orange">This is an orange 🍊</TabItem>
<TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>;

yo ?
