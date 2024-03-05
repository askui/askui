---
displayed_sidebar: apiSidebar
---
# pressKey
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Press one keys like `del`

**Operating system specific mappings:**
1. Windows: `command`-key maps to `windows`-key

**Example:**
```typescript
await aui.pressKey('tab').exec();
```
![](/img/gif/pressKey.gif)

   * @param \{PC_AND_MODIFIER_KEY} key - A key
