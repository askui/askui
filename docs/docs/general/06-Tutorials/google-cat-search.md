# Google Cat Search Tutorial

The following tutorial shows you how to search for cat images on Google image search.

## Setup

* Follow the <a href="../Getting%20Started/getting-started" target="_blank">complete askui installation guide and write your first test</a>
* Open a Chrome browser window on your screen
  * If you have multiple screens, configure the used display by setting the display variable in `test/helper/jest.setup.js`

## Setting Up a Test Suite

💭 Let’s say we’re on [google.com](http://google.com) and we want to **search for an image of a cat and then download it to our computer**.

First, we break this task down into steps that a user would take. Then we can recreate those steps in code.

1. Go to Google Search page 
2. Go to google images
3. Type “cat” in the search bar
4. Select image
5. Right-click + save the image

Let us first get an annotated screenshot, where all of the on-screen elements are enclosed within **annotated bounding boxes**. This will help us select the correct elements in our test case.

Open the file _test/my-first-askui-test-suite.test.ts_ and replace the *it*-code block starting in line 4 with the following code:

```typescript
it('annotate', async () => {
    await aui.annotate()
});
```

Run the test from your terminal to create an annotated screenshot. It will appear the folder _report_ in your project folder.

```shell
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts
```

If you want to annotate interactively change it to the following:

```typescript
it('annotate', async () => {

    // Hit 'Esc' to stop the annotation
    // when you are done
    await aui.annotateInteractively()
});
```

📌 The annotations are basically the substitute for IDs in selector-based testing. 
You can click on them to copy them into your clipboard.

If you are having problems with the test execution, [have a look at our Troubleshooting page](../07-Troubleshooting/index.md).

## Writing and Debugging a Test Case

Now we can start to write our test case, by locating the elements and then executing an action on them. Remember the steps, that we wanted to recreate?

1. Go to Google Search page 
2. Go to google images
3. Type “cat” in the search bar
4. Select image
5. Right-click + save the image

:::tip

Make sure to open your browser on the configured display before test execution and move your mouse over the browser window!

:::

In the end, your test case looks like this.

```typescript
import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should find a cat image and save it', async () => {

    // Make sure the browser window has focus
    await aui.mouseLeftClick().exec();

    // Open a new tab with keyboard shortcut
    // MacOS: command + t
    // Windows: control + T
    // Linux: control + t
    await aui
      .pressTwoKeys('command', 't')
      .exec();

    // type google.com into browser bar
    await aui
      .typeIn('google.com')
      .text()
      .withText('Search Google or type a URL')
      .exec();

    // Hit enter key
    await aui
      .pressKey('enter')
      .exec();

    // Click the Images-text to the right of Gmail
    await aui
      .click()
      .text().withTextRegex("Image*")
      .rightOf()
      .text().withText("Gmail")
      .exec();

    // Type in cat into search field
    // Notice: withText does not have to be 100% equal
    await aui
      .typeIn("cat")
      .textfield()
      .below()
      .logo().withText("G00g.e")
      .exec();

    await aui
      .pressKey('enter')
      .exec();

    // HINT
    //     withText might need to be changed depending
    //     on your search results!
    await aui
      .moveMouseTo()
      .image()
      .above()
      .text()
      .withText("pet guru Yuki Hattori explaiinICats")
      .exec();

    // Save the image with right click
    await aui
      .mouseRightClick()
      .exec()

    // Find the right dialog entry
    await aui
      .click()
      .text()
      .withText('save image as')
      .exec();

    // Save it
    // If it does not work because the button is not found
    // Remove the '.button()'
    await aui
      .click()
      .button()
      .withText("Save")
      .exec();
  });
});
```

## Debugging

It’s possible that you’ll run into problems with locating elements. For example, when creating the tutorial, we first tried to locate the image nearest to the image title, like this:

```typescript
await aui
    .moveMouseTo()
    .image()
    .nearestTo()
    .text()
    .withText("pet guru Yuki Hattori explaiinICats")
    .exec()
```

But it turns out, that the AI uses a different metric for measuring distance between elements, which is why our script failed the first time. Then we substituted this function for _above()_, which fixed the problem for us.

Another problem regarding font-size occurred with the _Images_ button. The AI recognized _Image_ with a **s** missing at the end. That is why we switched from _withText('Images') to _withTextRegex('Image*')_.

```typescript
await aui
    .click()
    .text().withTextRegex("Image*")
    .rightOf()
    .text().withText("Gmail")
    .exec();
```

It is always a good idea to try to play around with the functions and see if you can tackle the problem from a different angle.

If you have a recurring or persisting issue, don’t hesitate to [ask the community](https://bit.ly/3ekHnGR) for help. You can be sure that your questions will be answered there. We’re excited to hear about how you apply askui to your projects.

If you have any feature requests, please feel free to [post them in our Featurebase board](https://bit.ly/3AP20T7).

Best regards and happy testing!