---
displayed_sidebar: apiSidebar
---
# withText
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

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

// usually false
'atebxtc' === withText('text') => false
'other' === withText('text') => false
```
![](/img/gif/withText.gif)

   * @param \{string} text - A text to be matched.
