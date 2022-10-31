---
displayed_sidebar: apiSidebar
custom_edit_url: null
---
# and

Logic and operator

**Examples:**
```typescript 
 --------------------------   --------------------------
 | icon user colored black |  | icon  user colored red |
 --------------------------   --------------------------
await aui.click().icon().withText('user').exec()
// clicks on one of the icons, because they share the same text 
// you can combine filters with the and relation and specifiy exactly which icon you want
await aui.click().icon().withText('user').and().colored('red').exec()
// clicks on the right icon although both icons have the same text
```

