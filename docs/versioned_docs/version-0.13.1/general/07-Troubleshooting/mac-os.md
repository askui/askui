---
sidebar_position: 5
---

# macOS

## Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting

![macOS empty screen captured](./macos-empty-screen.png)

Our UiController needs the permission for *Screen Recording* and *Accessibility* on macOS.

Here is a step-by-step guide on how to fix missing permissions:

1. Head over to *System Preferences > Security & Privacy*.
Open the *Privacy* tab and check if you can find the *askui-ui-controller* under *Screen Recording* and *Accessibility* (See next picture for reference). 

![macOS Privacy settings](./macos-privacy-settings.png)

1.1 If *askui-ui-controller* does NOT have the permissions, give it to it and restart your workflow. Make sure to reopen your terminal you run workflow from. If it still does not work go on with step 1.2 below.

1.2. If *askui-ui-controller* has the permissions, revoke them by unchecking the corresponding checkboxes and removing the application from each list by clicking the minus (*-*) button.

2. By default AskUI starts the UiController in the background which sometimes messes up the permissions. Now you will start the UiController manually which triggers the permission prompt of macOS. Therefore you need to execute the UiController executable that was downloaded into your AskUI project when you ran your workflow.
Head over to the folder where your initialized AskUI. Navigate to `node_modules/askui/dist/release/<version>/darwin`. 
`<version>` may be `latest` or a semantic version like `v0.8.0`. In there, you should find a ``askui-controller.app` directory which is your installation of the AskUI UI Controller. Open the `askui-controller.app` directory in your *Finder* by right-clicking it and select *Reveal in Finder* (See screenshot below). Then start it by double-clicking it in the *Finder*.

![Installation folder of askui-ui-controller](./macos-askui-ui-controller-installation-folder.png)

The application should ask for *Screen Recording* permissions which you have to grant for it to work.

We are actively searching for a solution to improve the current state of affairs but Apple
does not make it easy (which is good for your privacy but not so much for automation frameworks). 
But be sure that we keep trying!

## Mouse Cursor Not Moving as Expected

Apple devices that have a display manufactured by Apple, i.e., Macbook, iMac have a so-called Retina Display, and they have a higher pixel density. 

To use the actions such as `moveMouse()` or `moveMouseRelatively()`, the **coordinates should be doubled** in order to move the mouse cursor as expected.

For example, let's say that your screen resolution is of 1920x1080. If you want to move the mouse cursor to the middle of the screen, the correct numeric arguments are as such:

```javascript
await aui.moveMouse(1920,1080).exec();
```

The coordinate of the middle of the screen is (960,540). But if you use these numbers, it will move the cursor only half of the expected distance.
