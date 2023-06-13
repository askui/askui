---
displayed_sidebar: apiSidebar
---
# text
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an UI element 'text'.

Often combined with other element-descriptions like `withText()` as shown in the below examples.
Check out the element-descriptions `withText()`, `withTextRegex()` and `withExactText()` for more detail.

**Examples:**
```typescript
await aui.click().text().withText('Password').exec();
await aui.click().text().withExactText('Username').exec();
await aui.click().text().withTextRegex('\b[Ss]\w+').exec();

// Assertion is possible like this:
// Check if there is any text on the screen
await aui.expect().text().notExists().exec();
```

