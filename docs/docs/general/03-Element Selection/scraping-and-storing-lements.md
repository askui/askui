---
sidebar_position: 5
---

# Scraping and Storing Elements

In this guide you will learn how to extract elements and their values out of your User Interface.

We will also cover on how to use the extracted information in your code, so you can introduce real interactivity into your workflow.

## Basic Usage
The [get()](../../api/06-Getters/get.md)-Instruction returns an array of all the elements it found. It looks like this example:

```text 
 console output: [
  DetectedElement {
     name: 'TEXT',
     text: 'Sign In',
     bndbox: BoundingBox {
        xmin: 1128.2720982142857,
        ymin: 160.21332310267857,
        xmax: 1178.8204241071428,
        ymax: 180.83512834821428
     }
   },
   ...
 ]
```

Usually you do not want every element from your UI returned. So you pair it with an element-selector:

```typescript
const textFieldText = 
  await aui
    .get()
    .text()
    .in()
    .textfield()
    .exec();
```



```text
[
  DetectedElement {
    name: 'text',
    text: 'Search',
    bndbox: BoundingBox { xmin: 488, ymin: 138, xmax: 548, ymax: 164 },
    colors: [ '', '', '' ]
  }
]
```

## Extract the Value
You can extract the value by reading the `text`-property of the `DetectedElement`.

**Notice: `textFieldText` is an array. You have to iterate over it or use an index to access the `DetectedElement`.**

```typescript
// Access by index
// textFieldTextValue gets the value 'Search'
const textFieldTextValue = textFieldText?.[0]?.text;
```

## Use Extracted Value as Input
You can use the extracted value as input for another textfield for example:

```typescript
await aui
  .typeIn(textFieldTextValue)
  .textfield()
  .contains()
  .text()
  .withText("AskUI")
  .exec();
```


