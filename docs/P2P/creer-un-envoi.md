---
title: Créer un envoi
hide_table_of_contents: true
---

# Créer un envoi

This is my **first Docusaurus document**!

![image name](/img/docusaurus.png)

```jsx
console.log('test)
```

## Use-case h2

| Column 1    | Column 2    | Column3     |
| ----------- | ----------- | ----------- |
| Content 1.1 | Content 2.1 | Content 3.1 |
| Content 1.2 | Content 2.2 | Content 3.2 |
| Content 1.3 | Content 2.3 | Content 3.3 |

## Titre h2

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'py', },
{ label: 'Java', value: 'java', },
]
}>
<TabItem value="js">

```js
function helloWorld() {
  console.log("Hello, world!");
}
```

</TabItem>
<TabItem value="py">

```py
def hello_world():
  print 'Hello, world!'
```

</TabItem>
<TabItem value="java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>
