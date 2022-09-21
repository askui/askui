---
displayed_sidebar: apiSidebar
---
# withExactText

Filters for equal text.

**Note:** This should be only used in cases where the similarity
 comparison of {@link FluentFilters.withText()} allows not for
 specific enough filtering (too many elements).

**Examples:** 
```typescript
'text' === withExactText('text') => true
'test' === withExactText('text') => false
'other' === withExactText('text') => false
```

   * @param {string} text - A text to be matched.
