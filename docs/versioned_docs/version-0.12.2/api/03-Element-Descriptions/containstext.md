---
displayed_sidebar: apiSidebar
---
# containsText
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for text containing the text provided as an argument.

**Examples:** 
```typescript
'This is a text' === containsText('text') => true
'This is a text' === containsText('other text') => false
'This is a text' === containsText('other') => false
```
![](/img/gif/containsText.gif)

   * @param \{string} text - A text to be matched.
