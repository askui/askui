---
sidebar_position: 5
---

# macOS

## Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting

![macOS empty screen captured](./macos-empty-screen.png)

macOS sometimes does not recognize an installation of an AskUI UI Controller and, therefore,
does not give it proper permissions although it looks like it. 

You can fix this, by heading 
over to *System Preferences > Security & Privacy*.
Open the *Privacy* tab and check if you can find the *askui-ui-controller* under *Screen Recording* and *Accessibility*. 

If yes, revoke its permissions by unchecking 
the corresponding checkboxes and removing the application from each list by clicking the minus 
(*-*) button.

![macOS Privacy settings](./macos-privacy-settings.png)

Head over to the installation of the AskUI UI Controller. If you did not install it manually, 
you can find it under `node_modules/askui/dist/release/<version>/darwin`. 
`<version>` may be `latest` or a semantic version like `v0.8.0`. In there, you should find 
corresponding `.app` directory which is your installation of the AskUI UI Controller.
Start it by double-clicking it in the *Finder*.

The application should ask for 
*Screen Recording* permissions which you have to grant for it to work. You should 
remove every reference to `UiController` in your `helper/jest.setup.ts` so that 
the AskUI lib does not override the installation or tries to start it automatically.

Now, you can 
run your instructions starting the AskUI UI Controller manually each time. On the first run,
you are going to be asked for *Accessibility* permissions 
which you also have to grant. After that, your instructions should run flawlessly as and you should 
be able to capture what is shown on the screen as well as execute instructions.

We are actively searching for a solution to improve the current state of affairs but Apple
does not make it easy (which is good for your privacy but not so much for automation frameworks). 
But be sure that we keep trying ;) 


## Mouse Cursor Not Moving as Expected

Apple devices that have a display manufactured by Apple, i.e., Macbook, iMac have a so-called Retina Display, and they have a higher pixel density. 

To use the actions such as `moveMouse()` or `moveMouseRelatively()`, the **coordinates should be doubled** in order to move the mouse cursor as expected.

For example, let's say that your screen resolution is of 1920x1080. If you want to move the mouse cursor to the middle of the screen, the correct numeric arguments are as such:

```javascript
await aui.moveMouse(1920,1080).exec();
```

The coordinate of the middle of the screen is (960,540). But if you use these numbers, it will move the cursor only half of the expected distance.
