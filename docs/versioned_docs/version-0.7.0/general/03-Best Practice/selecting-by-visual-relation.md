# Selecting an Element by Visual Relation

Relational selectors can be difficult and sometimes confusing to work with at first. Sometimes it is even not clear why a specific element will not be selected or why the selector does not seem to work.

After reading this tutorial you will know how to use the full power of all the relational selectors. Additionally, you learn what pitfalls you can fall into and how to avoid them in the future.

We will use the [Selectorshub practice page](https://selectorshub.com/xpath-practice-page/) for the demonstration.

In this article we’ll discuss the following relational selectors:

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

The following snippet moves the mouse to a textfield based on its placeholder text First Crush which is contained in the textfield:

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

When you want to target an element that is inside another element you can use in().

```ts
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------
```

The following code snippet moves the mouse pointer to the text of the first textfield askui found:

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

💡 If you do not specify another filter like `withText()` then you will get the nearest element. Otherwise, askui retrieves the nearest element that matches the filter!

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

Filtering with the `nearestTo()` filter will return the element nearest to another element. This is useful when the direction is not clear on where to search. Especially responsive designs are prone to wrap elements into a new line where `leftOf()` and `rightOf()` would fail.

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
The distance is not entirely based on physical distance. If you use an additional filter like `withText()` it optimizes to find the best match. It also considers special cases, for example, modal dialogs. Therefore the element selected by askui might sometimes be wrong from a user's point of view.

You can use `moveMouseTo()` like in the following example to see what element a command targets.

```ts
await aui
  .moveMouseTo()
  .textfield()
  .above()
  .button()
  .withText('Submit')
  .exec()
```

## Keep Reading

Check out other articles to discover more about askui:

**Best Practices**
- [Selecting an Element with Text](./selecting-with-text.md)
- [Speed Up Execution](./speed_up_execution.md)

**Tutorials**

- [Search Image in Google](../06-Tutorials/google-cat-search.md)
- [Login at an Online Shop](../06-Tutorials/shop-demo.md)
- [Automate Spotify on Desktop](../06-Tutorials/spotify-tutorial.md)
- [Upload a Zip File to Google Drive](../06-Tutorials/zip-images-upload-googledrive-windows.md)
- [Automate an Android App](../06-Tutorials/android-search-in-browser.md)

**Continuous Integration**

- [askui UI Controller Docker Images](../04-Continuous%20Integration/askui-ui-controller-docker-images.md)
- [Gitlab CI/CD](../04-Continuous%20Integration/gitlab-ci.md)
