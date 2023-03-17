---
displayed_sidebar: apiSidebar
---
# checkbox

Filters for a UI element 'checkbox' checked or unchecked.

**Examples:** 
```typescript
// Works if there is only one checkbox visible on the screen
await aui.click().checkbox().exec();

// Works if you have a labeled checkbox
// Label on the right side
await aui.click().checkbox().leftOf().text().withText('The label text').exec();
```
