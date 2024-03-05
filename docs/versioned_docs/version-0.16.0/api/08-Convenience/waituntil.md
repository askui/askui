---
displayed_sidebar: apiSidebar
---
# waitUntil
<span class="theme-doc-version-badge badge badge--secondary">production</span><br/><br/>

Wait until an AskUICommand does not fail.

Use it to wait for an element to appear like this:

**Examples:** 
```typescript
await waitUntil(aui.expect().text('Github').exists());
```

   * @param \{Executable} AskUICommand
   * @param \{number} maxTry - Number of maximum retries
   * @param \{number} waitTime - Time in milliseconds
