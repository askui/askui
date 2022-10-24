---
displayed_sidebar: apiSidebar
custom_edit_url: null
---
# get

Returns an array with all filtered detected elements.
A detected element has the following properties:
- `name` of the element
- `text` content of element
- `colors` of element
- `bndbox`: location of element described with coordinates of a bounding box

**Examples:**
```typescript 
const icon = await aui.get().icon().withText("care left").exec();

```

'Return value':
```typescript 
[
    DetectedElement {
            name: 'ICON',
            text: 'caret left',
            colors: [ 'black', 'black', 'gray' ],
            bndbox: BoundingBox {
            xmin: 3749.806138392857,
            ymin: 1948.1609933035716,
            xmax: 3773.3209821428572,
            ymax: 1963.8654575892858
            }
        }
]
```

