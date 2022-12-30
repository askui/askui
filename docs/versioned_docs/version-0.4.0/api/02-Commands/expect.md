---
displayed_sidebar: apiSidebar
---
# expect

Expects a condition, e.g., `exists()` or `notExits()`.

**Examples:**
```typescript 
await aui.expect().text().withText('Login').exists().exec()
await aui.expect().text().withText('Login').notExists().exec()
```

