---
displayed_sidebar: apiSidebar
---
# notExists

<span class="theme-doc-version-badge badge badge--secondary"></span>

Expects that filtered element does not exist.

Always use together with `expect()`.

**Note** Throws an error and stops the execution when the element is found. You can catch the error and decide what to do as in the examples below.

**Examples:**
```typescript
// Stops execution at this point when the element exists.
await aui.expect().text().withText('Login').notExists().exec()

// This will catch the error and log a message
// But the execution will continue afterwards
try {
    await aui.expect().text().withText('Login').notExists().exec()
} catch (error) {
    console.log("Too bad we could find the element!");
}
```

