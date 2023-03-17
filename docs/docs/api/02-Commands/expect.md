---
displayed_sidebar: apiSidebar
---
# expect

Throws an error when an element specified by a filter `exists` or `notExists`.

Use the structure `expect().<your filter>.(exists()|notExists())` as shown in the examples below.

**Examples:**
```typescript 
await aui.expect().text().withText('Login').exists().exec()
await aui.expect().text().withText('Login').notExists().exec()
```

