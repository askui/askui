---
sidebar_position: 10
---

# Zip Images and Upload to Google Drive on Windows

This tutorial will show you how to zip files on your file system and then upload them to Google Drive with AskUI.

<video controls>
  <source src="https://d2dnep8p8ldagm.cloudfront.net/assets/docs/compress_photos_and_upload_them_on_google_drive_with_askui.mp4"/>
</video>

## Setup

* Follow the <a href="../Getting%20Started/getting-started" target="_blank">AskUI installation guide and write your first instruction</a>
* Create a folder named _askui_ on your desktop and put some files into it
* If you have multiple screens, configure the used display by setting the display variable at `test/helper/jest.setup.js`

## Prerequisites

:::info

* You are working from Windows Operating System
* Create a folder _askui_ on your desktop
* Copy some images to it
* Change the view mode of the folder to _miniature_ so the images show a little preview
* You have to be logged in into your Google Account
* Link to a Google Drive Folder
* Desktop icon with the name _Google Chrome_ that opens Google Chrome

:::

## Code

After running the `npx askui init` command as described in the setup you will have a file `test/my-first-askui-test-suite.test.ts`. In this file, add a new workflow (`it`-code-block) inside the body of the callback passed to the `describe` function:

```ts
describe(/* a string identifying the AskUI suite */, () => {
    ... (other workflows)

    it('Should upload screenshots folder on google drive', async () => {

    });
});
```

## Open the Folder AskUI
Next, we want to click on the folder where our images are stored and open it.

```ts
await aui.click().text('askui').exec();
await aui.mouseDoubleLeftClick().exec();
```

## Select All Images and Zip Them
Select the first image and then use the shortcut `Ctrl + A` to select all images in the folder.

```ts
// The text to insert here should be something in the opened explorer window.
// Usually there is 'This PC' or 'Quick Access' there.
// Watch the video if you are not sure how the element-descriptor works.
await aui.click().image().nearestTo().text('This PC').exec();
await aui.pressTwoKeys('control', 'A').exec();

await aui.mouseRightClick().exec();
await aui.click().text('Compress to Zip file').exec();
await aui.type('askui screenshots').exec();
await aui.pressKey('enter').exec();
```

## Open Google Chrome
Now we minimize the window and find the shortcut with the word _Google_ on the desktop.
The mouse pointer moves to it and double-clicks to open it.

```ts
await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();
await aui.click().text('Google').exec();
await aui.mouseDoubleLeftClick().exec();
```

## Navigate to Google Drive
After opening Chrome the Google search page appears if you do not use profiles. The Google Drive-Link will be typed into the search field and thus opened when _Enter_-Key is pressed.

Do not forget to replace `<Your Google drive link to the folder>`!

```ts
// Omit this step if you do not use profiles in chrome
await aui.click().text('<Your profile>').nearestTo().text('work').exec();

await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text('Search Google or type a URL').exec();
await aui.pressKey('enter').exec();
```

## Find Zip-File and Upload
Within the Google Drive folder, a mouse-right-click opens the context menu. There we click on _File upload_, navigate to our zip-file location and upload it.

```ts
await aui.mouseRightClick().exec();
await aui.click().text('File upload').exec();
await aui.click().text('Desktop').exec();
await aui.click().text('askui').exec();
await aui.pressKey('enter').exec();
await aui.click().text('askui screenshots').exec();
await aui.click().text('Open').exec();
```

## Complete Code
```ts
describe(/* a string identifying the AskUI suite */, () => {

    it('Should upload screenshots folder on google drive', async () => {
        await aui.click().text('askui').exec();
        await aui.mouseDoubleLeftClick().exec();

        // The text to insert here should be something in the opened explorer window.
        // Usually there is 'This PC' or 'Quick Access' there.
        // Watch the video if you are not sure how the selector works.
        await aui.click().image().nearestTo().text('This PC').exec();
        await aui.pressTwoKeys('control', 'A').exec();

        await aui.mouseRightClick().exec();
        await aui.click().text('Compress to Zip file').exec();
        await aui.type('askui screenshots').exec();
        await aui.pressKey('enter').exec();

        await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();
        await aui.click().text('Google').exec();
        await aui.mouseDoubleLeftClick().exec();

        // Omit this step if you do not use profiles in chrome
        await aui.click().text('<Your profile>').nearestTo().text('work').exec();
        await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text('Search Google or type a URL').exec();
        await aui.pressKey('enter').exec();

        await aui.mouseRightClick().exec();
        await aui.click().text('File upload').exec();
        await aui.click().text('Desktop').exec();
        await aui.click().text('askui').exec();
        await aui.pressKey('enter').exec();
        await aui.click().text('askui screenshots').exec();
        await aui.click().text('Open').exec();
    });
});
```

To run this automation use the `npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts` command.

If you have a recurring or persisting issue, don’t hesitate to [ask the community](https://bit.ly/3ekHnGR) for help. You can be sure that your questions will be answered there. We’re excited to hear about how you apply AskUI to your projects.

If you have any feature requests, please feel free to [post them in our Featurebase board](https://bit.ly/3AP20T7).

Best regards and happy automating!