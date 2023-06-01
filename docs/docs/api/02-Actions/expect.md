---
displayed_sidebar: apiSidebar
---
# expect
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Expects a condition, e.g., `exists()` or `notExits()`.

Use the structure `expect().<your filter>.(exists()|notExists())` as shown in the examples below.

**Examples:**
```typescript 
await aui.expect().text().withText('Login').exists().exec()
await aui.expect().text().withText('Login').notExists().exec()
```

