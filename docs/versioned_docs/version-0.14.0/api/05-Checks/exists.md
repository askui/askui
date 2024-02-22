---
displayed_sidebar: apiSidebar
---
# exists
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Expects that filtered element exists.

Always use together with `expect()`.

**Note** Throws an error and stops the execution when the element is not found. You can catch the error and decide what to do as in the examples below.

**Examples:**
```typescript
// Stops execution at this point when the element does not exist.
await aui.expect().text('Login').exists().exec()

// This will catch the error and log a message
// But the execution will continue afterwards
try {
    await aui.expect().text('Login').exists().exec()
} catch (error) {
    console.log('Too bad we could not find the element!');
}
```

