# Zip Images and Upload them to Google Drive on Windows OS Tutorial

This tutorial will show you how to zip files on your filesystem and then upload them to Google Drive.

<div class="cookieconsent-optout-marketing">
  Please <a href="javascript:Cookiebot.renew()">accept marketing-cookies</a> to watch this video.
</div>
<div class="cookieconsent-optin-marketing">
  <a href="javascript:rerunCookieConsentScripts()">Please click to watch this video.</a>
</div>
<iframe width="560" height="315" data-cookieblock-src="https://www.youtube-nocookie.com/embed/i3M5SPYQTKI&embedded=true" data-cookieconsent="marketing" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Setup

* Follow the <a href="../Getting%20Started/getting-started" target="_blank">complete askui installation guide and write your first test</a>
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

## Test

After running the `npx askui init` command as described in the setup you will have a file `test/my-first-askui-test-suite.test.ts`. In this file, add a new test inside the body of the callback passed to the `describe` function:

```ts
describe(/* a string identifying the test suite */, () => {
    ... (other tests)

    it('Should upload screenshots folder on google drive', async () => {

    });
});
```

## Open the Folder askui
Next, we want to click on the folder where our images are stored and open it.

```ts
await aui.click().text().withText('askui').exec();
await aui.mouseDoubleLeftClick().exec();
```

## Select All Images and Zip Them
Select the first image and then use the shortcut `Ctrl + A` to select all images in the folder.

```ts
// The text to insert here should be something in the opened explorer window.
// Usually there is 'This PC' or 'Quick Access' there.
// Watch the video if you are not sure how the selector works.
await aui.click().image().nearestTo().text().withText('This PC').exec();
await aui.pressTwoKeys('control', 'A').exec();

await aui.mouseRightClick().exec();
await aui.click().text().withText('Compress to Zip file').exec();
await aui.type('askui screenshots').exec();
await aui.pressKey('enter').exec();
```

## Open Google Chrome
Now we minimize the window and find the shortcut with the word _Google_ on the desktop.
The mouse pointer moves to it and double-clicks to open it.

```ts
await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();
await aui.click().text().withText('Google').exec();
await aui.mouseDoubleLeftClick().exec();
```

## Navigate to Google Drive
After opening Chrome the Google search page appears if you do not use profiles. The Google Drive-Link will be typed into the search field and thus opened when _Enter_-Key is pressed.

Do not forget to replace `<Your Google drive link to the folder`!

```ts
// Omit this step if you do not use profiles in chrome
await aui.click().text().withText('<Your profile>').nearestTo().text().withText('work').exec();

await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text().withText('Search Google or type a URL').exec();
await aui.pressKey('enter').exec();
```

## Find Zip-File and Upload
Within the Google Drive folder, a mouse-right-click opens the context menu. There we click on _File upload_, navigate to our zip-file location and upload it.

```ts
await aui.mouseRightClick().exec();
await aui.click().text().withText('File upload').exec();
await aui.click().text().withText('Desktop').exec();
await aui.click().text().withText('askui').exec();
await aui.pressKey('enter').exec();
await aui.click().text().withText('askui screenshots').exec();
await aui.click().text().withText('Open').exec();
```

## Complete Code
```ts
describe(/* a string identifying the test suite */, () => {

    it('Should upload screenshots folder on google drive', async () => {
        await aui.click().text().withText('askui').exec();
        await aui.mouseDoubleLeftClick().exec();

        // The text to insert here should be something in the opened explorer window.
        // Usually there is 'This PC' or 'Quick Access' there.
        // Watch the video if you are not sure how the selector works.
        await aui.click().image().nearestTo().text().withText('This PC').exec();
        await aui.pressTwoKeys('control', 'A').exec();

        await aui.mouseRightClick().exec();
        await aui.click().text().withText('Compress to Zip file').exec();
        await aui.type('askui screenshots').exec();
        await aui.pressKey('enter').exec();

        await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();
        await aui.click().text().withText('Google').exec();
        await aui.mouseDoubleLeftClick().exec();

        // Omit this step if you do not use profiles in chrome
        await aui.click().text().withText('<Your profile>').nearestTo().text().withText('work').exec();
        await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text().withText('Search Google or type a URL').exec();
        await aui.pressKey('enter').exec();

        await aui.mouseRightClick().exec();
        await aui.click().text().withText('File upload').exec();
        await aui.click().text().withText('Desktop').exec();
        await aui.click().text().withText('askui').exec();
        await aui.pressKey('enter').exec();
        await aui.click().text().withText('askui screenshots').exec();
        await aui.click().text().withText('Open').exec();
    });
});
```

To run this automation use the `npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts` command.

If you have a recurring or persisting issue, don’t hesitate to [ask the community](https://bit.ly/3ekHnGR) for help. You can be sure that your questions will be answered there. We’re excited to hear about how you apply askui to your projects.

If you have any feature requests, please feel free to [post them in our Featurebase board](https://bit.ly/3AP20T7).

Best regards and happy testing!