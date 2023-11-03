---
sidebar_position: 5
---

# Web Search on Android

In this tutorial, we will automate web searching on Android devices. This tutorial assumes that you have already set up your Android Development Environment. If you haven't set it up yet, you can check out our [Setup Android tutorial](../06-Tutorials/setup-android.md#android-automation).

If you have already set up your development environment, go directly to [3. Automate Web Searching](#3-automate-web-searching)

**Index**

[1. Prepare the AskUI Development Environment](#1-prepare-the-askui-development-environment)  
[2. Try Annotation](#2-try-annotating)  
[3. Automate Web Searching](#3-automate-web-searching)  
[4. Complete AskUI Code](#4-complete-askui-code)  
[5. Conclusion](#5-conclusion)  



------

## Requirements
- **Android Studio** or **Android SDK Command-line Tools** installed (See [Setup Android tutorial](../06-Tutorials/setup-android.md#android-automation)).
- (optional) Android device, if you want to run your app on a real device.

------

## 1. Prepare the AskUI Development Environment

### Install and initialize AskUI

Please follow the [Getting Started](../02-Getting%20Started/getting-started.md) tutorial.

**Configure AskUI for Android**

We need to run the UiController manually with an extra argument to specify the runtime mode, as the current version of AskUI doesn't provide the API for running it with the runtime option yet:

```bash
# first, go to the folder that contains the binary
cd <YOUR_PROJECT_DIRECTORY>/node_modules/askui/dist/release/latest/<YOUR_PLATFORM>

# for example, Mac OS
cd node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app/Contents/MacOS/

# then run it
./askui-ui-controller -r android

# If you can't find the binary as described above,
# then you might have AskUI freshly installed and haven't run it yet.
# The binary gets downloaded as the AskUI code runs the first time.
# Run the command below to run the AskUI code:
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts
```

If the UiController starts, it will display the log of it on the shell. We can leave it in the background, and prepare a new terminal window for the next step.

💡*If you got any errors after running the binary, please check if your android device/emulator is properly connected and recognized by the Android Debug Bridge `adb` by using this command: `adb devices`. You should see a list of recognized devices.*


Next, we have to change a few lines of the generated code, as the code ships with the part that creates another **UiController** instance.

Go to `helper/jest.setup.ts` and comment out every line that is using `uiController`:

```ts
import { UiControlClient, UiController } from 'askui';

// Server for controlling the operating system
// let uiController: UiController;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
//   uiController = new UiController({
//     /**
//      * Select the display you want to run your tests on, display 0 is your main display;
//      * ignore if you have only one display
//      */
//     display: 0,
//   });

//   await uiController.start();

  aui = await UiControlClient.build({
    credentials: {
      workspaceId: myworkspaceid,
      token: mytoken,
    }
  });

  await aui.connect();
});

afterAll(async () => {
  //   await uiController.stop();

  aui.close();
});

export { aui };
```

------

## 2. Try Annotating
Make sure that your Android device is connected, or if you are using the Android Emulator, make sure that it is open and running on your local machine.

**AskUI** provides a feature where you can monitor how the visible elements are understood by **AskUI**. Try to change the code within `test/my-first-askui-test-suite.test.ts` to the following:
```ts
import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should show the annotation', async () => {
    await aui.annotateInteractively();
  });
});
```

and run,
```bash
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts
```

![annotated-chrome](images/annotation-chrome.png)


💡 **Annotation is Interactive**
*Try to hover your mouse on the red bounding box. It will let you know how to manipulate that element via AskUI*

## 3. Automate Web Searching
Now we are good to go for the actual automation process.
The automation consist of three steps:

1. Open Chrome
2. Select the search bar and type 'spacecraft'
3. Click on the desired search result

### 1) Open Chrome
To open Chrome, we first have to figure out how we can let **AskUI** know where to click on.

As we can see in the annotated image above, the Chrome icon is recognized as an `icon: undo`. Indeed, we could also tell **AskUI** to select the `icon: undo`, but we will try to do it in a more precise way.

What we're gonna do is:

**(1) Select the search bar**

**(2) Type 'chrome'**

**(3) Select the icon above the text 'chrome'**

This approach will give us a more consistent result because typing "chrome" in the search bar will give us a more understandable visual element.

Try to change your code according to this:

```ts
import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should open chrome', async () => {

    await aui.click().textfield().exec();

    // Type the desired keyword into the search bar
    await aui.type('chrome').exec();

    // We wait for 1500 milliseconds, to make sure that the search result 
    // has been loaded before AskUI start to look for the search result. 
    await aui.waitFor(1500).exec(); 

    // Then click the icon that is above the text 'chrome'
    await aui.click().icon().above().text('chrome').exec();
  });
});
```

and run,

```bash
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts
```

Now you will be able to see that Chrome has been opened.

### 2) Select the Search Bar and Type 'spacecraft'
Let's select the search bar of chrome, and type our desired keyword in there.

![chrome-main-page](images/chrome-main.png)

Add this code block to the bottom of our code:

```ts
// We first look for the search bar. Depending on the system language of your device, the default text within the search bar may differ.
await aui.click().text('search or type web address').exec();

// Type our desired keyword and hit enter
await aui.type('spacecraft').exec();
await aui.pressAndroidKey('enter').exec();
```

In some cases, when searching in Google, you will be asked to give consent for the cookies.
To avoid our execution from failing, we have to examine whether we got a pop-up for the cookie consent or not:

```ts
try {
    // The 'expect()' examines whether a specific element is detected or not.
    // An instruction starting with 'expect()' must always end with 'exists()' or 'notExists()'
    await aui.expect().text().containsText('cookies').notExists().exec();
} catch (error) {
    await aui.click().text('read more').exec();
    await aui.waitFor(1000).exec(); // wait until the scrolling animation has been finished
    await aui.click().text('accept all').exec();
}
// From here, we can write our next instructions
```

### 3) Click on the Desired Search Result

![search-result-spacecraft](images/search-result.png)

After clearing the cookie consent pop-up, we can see and click our desired search result. In our case, we will look for the result from Wikipedia:

```ts
// We ask the AskUI to click the text that contains 'wikipedia',
// which is the text that is nearest to the text containing 'wikipedia.org'
await aui.click()
    .text()
    .containsText('wikipedia')
    .nearestTo()
    .text()
    .containsText('wikipedia.org')
    .exec();
```

Pay attention to the relational element-description `nearestTo()` that is interconnecting two different text elements.

**AskUI** offers several **Relational Element-Descriptions**, which enable you to select the desired element by their screen position:

- [above()](https://docs.askui.com/docs/api/Relations/above)
- [below()](https://docs.askui.com/docs/api/Relations/below)
- [contains()](https://docs.askui.com/docs/api/Relations/contains)
- [in()](https://docs.askui.com/docs/api/Relations/in)
- [leftOf()](https://docs.askui.com/docs/api/Relations/leftof)
- [rightOf()](https://docs.askui.com/docs/api/Relations/rightof)
- [nearestTo()](https://docs.askui.com/docs/api/Relations/nearestto)

💡 **About withText() and containsText():**

You might wonder how `withText()` and `containsText()` differ. `withText()` tries to match the given text as the whole sequence, whereas `containsText()` tries to match the given text as a sub-text within the elements. Generally speaking, `containsText()` can be handier to match the text roughly, but you might face a case where you want to find a specific text as a whole sequence.

------

## 4. Complete AskUI Code
```ts
import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should search spacecraft in chrome', async () => {
    
    await aui.click().textfield().exec();    

    // Type the desired keyword into the search bar
    await aui.type('chrome').exec();
    // We wait for 1500 miliseconds, to make sure that the search result has been loaded before AskUI start to look for the search result. 
    await aui.waitFor(1500).exec(); 
    // Then click the icon that is above the text 'chrome'
    await aui.click().icon().above().text('chrome').exec();

    // We wait the Chrome app to be launched
    await aui.waitFor(1500).exec();

    // We first look for the search bar. Depending on the system language of your device, the default text within the search bar may differ.
    await aui.click().text('search or type web address').exec();

    // Type our desired keyword and hit enter
    await aui.type('spacecraft').exec();
    await aui.pressAndroidKey('enter').exec();

    // We wait for the search result to be loaded
    await aui.waitFor(3000).exec();

    try {
        // The 'expect()' examines whether a specific element is detected or not.
        // An instruction starting with 'expect()' must always end with 'exists()' or 'notExists()'
        await aui.expect().text().containsText('cookies').notExists().exec();
    } catch (error) {
        await aui.click().text('read more').exec();
        await aui.waitFor(1000).exec(); // wait until the scrolling animation has been finished
        await aui.click().text('accept all').exec();
    }

    // We ask the AskUI to click the text that contains 'wikipedia' which is the text that is nearest to the text containing 'wikipedia.org'
    await aui.click().text().containsText('wikipedia').nearestTo().text().containsText('wikipedia.org').exec();
  });
});
```

------

## 5. Conclusion

We have covered a use case of AskUI to automate web searching in Android devices. If you got any issues while following the instruction, feel free to ask in our [Outverse-Community](https://app.outverse.com/askui/community/home)!
