---
displayed_sidebar: apiSidebar
custom_edit_url: null
---
# containsText

Filters for text containing the text provided as an argument.

**Examples:** 
```typescript
'This is an text' === containsText('text') => true
'This is an text' === containsText('other text') => false
'This is an text' === containsText('other') => false
```

   * @param {string} text - A text to be matched.
