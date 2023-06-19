---
displayed_sidebar: apiSidebar
---
# text
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an UI element 'text'.

Takes an optional parameter to filter for a specific text.
See the examples below.

See also the filters `withTextRegex()` and `withExactText()`

**Examples:**
```typescript
await aui.click().text().exec();
await aui.click().text('Username').exec();
await aui.click().text().withTextRegex('\b[Ss]\w+').exec();
```

   * @param {string} [text] - A text to be matched.
