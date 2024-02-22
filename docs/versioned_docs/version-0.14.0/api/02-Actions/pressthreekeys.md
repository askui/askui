---
displayed_sidebar: apiSidebar
---
# pressThreeKeys
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Press three keys like `CTRL+ALT+DEL`

**Operating system specific mappings:**
1. Windows: `command`-key maps to `windows`-key

**Example:**
```typescript
await aui.pressThreeKeys('control', 'command' 'space').exec();
```

![](/img/gif/pressThreeKeys.gif)

   * @param \{MODIFIER_KEY} first_key - A modifier key
   * @param \{MODIFIER_KEY} second_key - A modifier key
   * @param \{PC_KEY} third_key - A key
