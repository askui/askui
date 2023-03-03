---
displayed_sidebar: apiSidebar
---
# containsText

<span class="theme-doc-version-badge badge badge--secondary"></span>

Filters for text containing the text provided as an argument.

**Examples:** 
```typescript
'This is an text' === containsText('text') => true
'This is an text' === containsText('other text') => false
'This is an text' === containsText('other') => false
```
![](/img/gif/containsText.gif)

   * @param {string} text - A text to be matched.
