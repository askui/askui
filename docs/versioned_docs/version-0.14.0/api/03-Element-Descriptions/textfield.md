---
displayed_sidebar: apiSidebar
---
# textfield
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for a UI element 'textfield'.

**Examples:**
```typescript
// Works if there is only one textfield visible on the screen
await aui.typeIn('Oh yeah').textfield().exec();

// Works if you have a labeled textfield
// Label is above the textfield
await aui.typeIn('Oh yeah').textfield().below().text('E-Mail Address').exec();
```

![](/img/gif/textfield.gif)

