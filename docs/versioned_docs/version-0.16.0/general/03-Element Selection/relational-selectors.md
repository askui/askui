---
sidebar_position: 3
---

# Filtering Elements by Proximity

A common problem while writing instructions which one encounters is interacting with elements which share the same text.

An example can be seen when you interactively annotate your Visual Studio Code Editor.
Notice that the magnifying glass icon and many other elements throughout the UI share the same name:

![Icon mobile annotation one.](images/relational_selectors_same_icon1.png)


![Icon mobile annotation one.](images/relational_selectors_same_icon2.png)

To ensure you’re able to instruct AskUI to select the correct element, the use of relational element-descriptions can be employed.
Relational element-descriptions describe the element relative to other elements in the UI.

## Selecting an Element by Visual Relation
After reading the next section you will know how to use the full power of all the relational element-descriptions. Additionally, you learn what pitfalls you can fall into and how to avoid them in the future.

We will use the [Selectorshub practice page](https://selectorshub.com/xpath-practice-page/) for the demonstration.

We’ll discuss the following relational element-descriptions:

- [above()](#above)
- [below()](#below)
- [contains()](#contains)
- [in()](#in)
- [leftOf()](#leftof-and-rightof)
- [rightOf()](#leftof-and-rightof)
- [nearestTo()](#nearestto)

## above()

When you want to click on a textfield and it is above an element, like for example a button with the text Submit. You can do it with `above()`. The following code snippet moves the mouse to the textfield above the *Submit*-button:

```ts
await aui
  .click()
  .textfield()
  .above()
  .button()
  .withText('Submit')
  .exec();
```
![above](/img/gif/above.gif)


## below()

When you want to select a textfield you can do so by finding the correct label, which is often above the textfield. The following code snippet moves the mouse to the textfield below the text *Mobile Number*:

```ts
await aui
  .moveMouseTo()
  .textfield()
  .below()
  .text()
  .withText('Mobile Number')
  .exec();
```

![below](/img/gif/below.gif)

## contains()

For selecting an element, that contains another element, `contains()` is the right candidate. It is especially useful if you want to select a textfield with a placeholder text inside it. The text inside the textfield is annotated as an element itself.

If you have problems with selecting a specific element, always run `annotate()` to create a screenshot of all the annotations or use `annotateInteractively()` to see if you need to use `contains()`.

The following snippet moves the mouse to a textfield based on its placeholder text *First Crush* which is contained in the textfield:

```ts
await aui
  .moveMouseTo()
  .textfield()
  .contains()
  .text()
  .withText('First Crush')
  .exec();
```

![contains](/img/gif/contains.gif)

## in()

When you want to target an element that is inside another element you can use `in()`.

```ts
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------
```

The following code snippet moves the mouse pointer to the text of the first textfield AskUI found:

```ts
await aui
  .moveMouseTo()
  .text()
  .in()
  .textfield()
  .exec();
```

![in](/img/gif/in.gif)

## leftOf() and rightOf()
If you want to select an element based on its location left or right of another element you have to use `leftOf()` or `rightOf()` respectively.

💡 If you do not specify another element-description like `withText()` then you will get the nearest element. Otherwise, AskUI retrieves the nearest element that matches the element-description!

```ts
await aui
  .moveMouseTo()
  .text()
  .leftOf()
  .text()
  .withText('Denmark')
  .exec();
```

![leftof](/img/gif/leftOf.gif)

```ts
await aui
  .moveMouseTo()
  .text()
  .rightOf()
  .text()
  .withExactText('Joe Root')
  .exec();
```

![leftof](/img/gif/rightOf.gif)


## nearestTo()

Filtering with the `nearestTo()` will return the element nearest to another element. This is useful when the direction is not clear on where to search. Especially responsive designs are prone to wrap elements into a new line where `leftOf()` and `rightOf()` would fail.

```ts
await aui
  .moveMouseTo()
  .textfield()
  .nearestTo()
  .text()
  .withTextRegex('User Em*')
  .exec();
```

![nearestto](/img/gif/nearestTo.gif)

## Additional Considerations About the Distance Metric
The distance is not entirely based on physical distance. If you use an additional element-description like `withText()` it optimizes to find the best match. It also considers special cases, for example, modal dialogs. Therefore the element selected by AskUI might sometimes be wrong from a user's point of view.

You can use `moveMouseTo()` like in the following example to see what element an instruction targets.

```ts
await aui
  .moveMouseTo()
  .textfield()
  .above()
  .button()
  .withText('Submit')
  .exec()
```

