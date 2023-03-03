---
displayed_sidebar: apiSidebar
---
# expect

<span class="theme-doc-version-badge badge badge--secondary"></span>

Expects a condition, e.g., `exists()` or `notExits()`.

**Examples:**
```typescript 
await aui.expect().text().withText('Login').exists().exec()
await aui.expect().text().withText('Login').notExists().exec()
```

