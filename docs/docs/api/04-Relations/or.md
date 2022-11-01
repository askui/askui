---
displayed_sidebar: apiSidebar
---
# or

Logic or operator

**Examples:**
```typescript 
scene 1
--------------  --------------
|  button    |  |  icon   |
--------------  --------------

scene 2
--------------  --------------
|  button    |  |  text   |
--------------  --------------

// In case, that your reference element can have multiple values
// in this example, the element right of the button can be either icon or text
// you can use the or relation, so your teststep is valid for both scenes
...button().rightOf().icon().or().text()
// Returns button for both cases
```

