---
displayed_sidebar: apiSidebar
---
# withText

Filters for similar (doesn't need to be a 100% equal) text.

**Examples:** 
```typescript
'text' === withText('text') => true
'test' === withText('text') => true
'Test' === withText('text') => true
'Text' === withText('text') => true
'TEXT' === withText('text') => true
'texst' === withText('text') => true
'texts' === withText('text') => true

'atebxtc' === withText('text') => false
'other' === withText('text') => false
```

   * @param {string} text - A text to be matched.