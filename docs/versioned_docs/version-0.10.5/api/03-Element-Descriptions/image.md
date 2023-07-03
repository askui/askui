---
displayed_sidebar: apiSidebar
---
# image
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for a UI element 'image'.

**Examples:**
```typescript
// Works if there is only one image visible on the screen
await aui.click().image().exec();

// Works if you have an image with
// a text below
await aui.click().image().above().text('Automating WebGL').exec();
```
![](/img/gif/image.gif)
