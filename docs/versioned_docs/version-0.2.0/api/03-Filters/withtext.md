---
displayed_sidebar: apiSidebar
custom_edit_url: null
---
# withText

Filters for similar (doesn't need to be a 100% equal) text.

**Examples:** 
```typescript
'text' === withText('text') => true
'test' === withText('text') => true
'other' === withText('text') => false
```

   * @param {string} text - A text to be matched.
