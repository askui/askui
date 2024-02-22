---
displayed_sidebar: apiSidebar
---
# withExactText
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for equal text.

**Note:** This should be only used in cases where the similarity
 comparison of \{@link FluentFilters.withText()} allows not for a
 specific enough filtering (too many similar elements).

**Examples:** 
```typescript
'text' === withExactText('text') => true
'test' === withExactText('text') => false
'other' === withExactText('text') => false

await aui.moveMouseTo().text().withExactText('Basketball').exec()
```

![](/img/gif/withExactText.gif)

   * @param \{string} text - A text to be matched.
