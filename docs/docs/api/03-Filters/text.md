---
displayed_sidebar: apiSidebar
---
# text

 <span class="theme-doc-version-badge badge badge--success">production</span> 
Filters for an UI element 'text'.

Often combined with the filter `withText()` as shown in the below examples.
See also the filters `withTextRegex()` and `withExactText()`

**Examples:**
```typescript
await aui.click().text().withText('Password').exec();
await aui.click().text().withExactText('Username').exec();
await aui.click().text().withTextRegex('\b[Ss]\w+').exec();
```

