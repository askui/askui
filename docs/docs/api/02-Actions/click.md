---
displayed_sidebar: apiSidebar
---
# click 
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Mouse left-clicks/taps on the filtered element by moving the mouse cursor to the filtered element first.

If you need a simple mouseleftclick/tap only, use `mouseLeftClick`.

**Example:**
```typescript 
await aui.click().button().withText('Google Search').exec();
```

![](/img/gif/click.gif)

