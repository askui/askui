---
displayed_sidebar: apiSidebar
---
# waitFor
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Waits for `<delayInMs>` ms, e.g., 1000 ms. The exact delay may be a little longer than `<delayInMs>` but never shorter than that.

**Examples:**
```typescript
await aui.waitFor(500).exec();
```

   * @param {number} delayInMs - The delay in ms to wait for.
