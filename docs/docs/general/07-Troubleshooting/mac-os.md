# macOS

## Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting

![macOS empty screen captured](./macos-empty-screen.png)

macOS sometimes does not recognize an installation of askui UI Controller and, therefore,
does not give it proper permissions although it looks like it. 

You can fix this, by heading 
over to *System Preferences > Security & Privacy*.
Open the *Privacy* tab and check if you can find the *askui-ui-controller* (originally, it
was called *controlui-server* so depending on your version you may see that 
name) under *Screen Recording* and *Accessibility*. 

If yes, revoke its permissions by unchecking 
the corresponding checkboxes and removing the application  from each list by clicking the minus 
(*-*) button.

![macOS Privacy settings](./macos-privacy-settings.png)

Head over to the installation of the askui UI Controller. If you did not install it manually, 
you can find it under `node_modules/askui/dist/release/<version>/darwin`. 
`<version>` may be `latest` or a semantic version like `v0.8.0`. In there, you should find 
corresponding `.app` directory which is your installation of the askui UI Controller.
Start it by double-clicking it in the *Finder*. The application should ask for 
*Screen Recording* permissions which you have to grant for it to work. You should 
remove every reference to `UiController` from the tests, test helper files etc. so that 
the lib does not override the installation or tries to start it automatically. Now, you can 
run your tests starting the askui UI Controller manually each time. On the first run,
you are going to be asked for *Accessibility* permissions 
which you also have to grant. After that, your test should run flawlessly as and you should 
be able to capture what is shown on the screen as well as execute commands.

We are actively searching for a solution to improve the current state of affairs but Apple
does not make it easy (which is good for your privacy but not so much for automation frameworks). 
But be sure that we keep trying ;) 
