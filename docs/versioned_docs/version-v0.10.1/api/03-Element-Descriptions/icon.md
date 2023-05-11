---
displayed_sidebar: apiSidebar
---
# icon
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for a UI element 'icon'.

You can combine it with the element-description 'withText()' to look for a specific icon.

**Examples:** 
```typescript
await aui.click().icon().withText('camera').exec();
```
![](/img/gif/icon.gif)

**Note:** This is an alpha feature. The prediction of the icon name is sometimes unstable. Use custom elements as an alternative.

