---
displayed_sidebar: apiSidebar
---
# expect

<<<<<<< HEAD
<span class="theme-doc-version-badge badge badge--secondary"></span>

Expects a condition, e.g., `exists()` or `notExits()`.
=======
Throws an error when an element specified by a filter `exists` or `notExists`.

Use the structure `expect().<your filter>.(exists()|notExists())` as shown in the examples below.
>>>>>>> main

**Examples:**
```typescript 
await aui.expect().text().withText('Login').exists().exec()
await aui.expect().text().withText('Login').notExists().exec()
```

