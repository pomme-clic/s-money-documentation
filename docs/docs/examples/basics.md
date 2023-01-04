---
title: Markdown basics
---

[Preview](https://develop--s-money-documentation-site.netlify.app/docs/examples/basics)

## Headers

H1 is either provided by title attribute from frontmatter, or by explicitely write it inside document.

H2 and H3 are levels that will feed the Table of content. There is no subsequent styled header levels. Use paragraphs or emphases for an additionnal level.

```markdown
# H1

## H2

### H3
```

# H1

## H2

### H3

---

## Paragraphs

```markdown
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Text emphasis

```markdown
_Italic_

**Emphasis**

**_Emphased italic_**
```

_Italic_

**Emphasis**

**_Emphased italic_**

---

## Lists

```markdown
1. First ordered item
2. Another item

- First unordered item
- Another item
```

1. First ordered item
2. Another item

- First unordered item
- Another item
ztifhs
---

## Links

```markdown
[Link to internal page](/docs/examples/basics)
[Link to external page](https://www.xpollens.com)
[Link to page anchor](#headers)
```

[Link to internal page](/docs/examples/basics)

[Link to external page](https://www.xpollens.com)

[Link to page anchor](#headers)

---

## Inline codes

```markdown
Inline `code`
```

Inline `code`

## Code blocks

````markdown
```javascript
var s = 'JavaScript syntax highlighting'
alert(s)
```
````

```javascript
var s = 'JavaScript syntax highlighting'
alert(s)
```

## Horizontal dividers

```markdown
---
```

---

## Images

For larger optimized assets, use the dedicated custom Image component.

```markdown
![img alt](/img/content/docs/examples/docusaurus.png)
```

![img alt](/img/content/docs/examples/docusaurus.png)
