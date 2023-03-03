---
displayed_sidebar: apiSidebar
---
# withExactText

<span class="theme-doc-version-badge badge badge--secondary"></span>

Filters for equal text.

**Note:** This should be only used in cases where the similarity
 comparison of {@link FluentFilters.withText()} allows not for
 specific enough filtering (too many elements).

**Examples:** 
```typescript
'text' === withExactText('text') => true
'test' === withExactText('text') => false
'other' === withExactText('text') => false

await aui.moveMouseTo().text().withExactText('Password').exec()
```

   * @param {string} text - A text to be matched.
