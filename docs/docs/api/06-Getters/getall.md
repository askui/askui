---
displayed_sidebar: apiSidebar
custom_edit_url: null
---
# getAll

Returns an array with all detected elements.
A detected element has the following properties:
- `name` of the element
- `text` content of element
- `colors` of element
- `bndbox`: location of element described with coordinates of a bounding box

**Examples:**
```typescript 

const detectedElements = await aui.getAll().exec()
```

'Return value':
```typescript 
[
    DetectedElement {
        name: 'TEXT',
        text: 'name!IcoN',
        colors: [ 'black', 'black', 'gray' ],
        bndbox: BoundingBox {
          xmin: 1615.2803571428572,
          ymin: 1012.0542689732143,
          xmax: 1815.2658482142858,
          ymax: 1034.2363560267856
        }
      },
      DetectedElement {
        name: 'ICON',
        text: 'briefcase',
        colors: [ 'gray', 'gray', 'black' ],
        bndbox: BoundingBox {
          xmin: 376.26868024553573,
          ymin: 830.4529017857143,
          xmax: 406.13659319196427,
          ymax: 854.7277064732143
        }
      },
      ...
]
```

