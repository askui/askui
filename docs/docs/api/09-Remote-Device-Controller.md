# Remote Device Controller

:::caution

The remote device controller is currently in __preview__ release and only works on __Windows__ and for __Android__ devices controlled from a __Windows__ machine.

The installer only works on __Windows__.

:::

## Introduction & Setup

### Installer

1. Download the installer from [here](https://files.askui.com/releases/preview/v23.10.01/askui+Installer.exe).

2. Start the installer and follow the installation process.
    > Note: Installation requires administrator rights.

3. Create a new AskUI project as [described in our documentation](../general/02-Getting%20Started/getting-started.md).

4. Open file `test/helpers/askui-helper.ts` in the AskUI project.

5. Remove `await uiController.start();` in `beforeAll` function.

6. Remove `await uiController.stop();` in `afterAll` function.

7. Start the installed __Remote Device Controller__ manually and select the screen you want to use. 
    > Note: Either through the start menu, desktop shortcut or the executable in the install directory.

8. You should be good to go now to run your workflows as described in documentation.
    > Note: Ensure that the __Remote Device Controller__ is running before you start a workflow.

### Manual Update of Remote Device Controller

Make use of our preview build to use the latest features by following the mentioned steps below.

1. Go to function `beforeAll` there you must modify in file `test/helpers/askui-helper.ts`.

2. Ensure that you have the required import `UiController`.

        import { UiController } from 'askui';

3. Also add the global variable if it is missing:

        let uiController: UiController;

4. Modify the creation of `uiController` in file `test/helpers/jest.setup.ts`:

        uiController = new UiController({
          /**
            * Select the display you want to run your tests on, display 0 is your main display;
            * ignore if you have only one display
            */
          display: <YOUR_DISPLAY_ID>,
          binaryVersion: "tdk-23.10.1-preview-release-1"
        });

   > Note: The ui controller creation starts typically with `uiController = await UiController({ ...` but the instance name might be different.

5. Replace `<YOUR_DISPLAY_ID>` with the display (starting with 0 for the first display) that you want to use:

        display: <YOUR_DISPLAY_ID>,

6. Ensure that the controller gets started before the UI controller client tries (`aui`) to connect. Therefore the last two lines of the function should do:

       await uiController.start();
       await aui.connect();

    > Note: The ui controller client creation starts typically with `aui = await UiControlClient.build({ ...` but the instance name might be different.

7. Ensure that in function `afterAll` the controller gets stopped after the ui controller client closes the connection:

        aui.disconnect();
        await uiController.stop(true);

8. You should be good to go now to run your workflows as described in documentation.

> Note: New features are only supported on Windows 10/11.

## Features

### Type Like a Human
Together with the asynchronous execution of actions we also introduce natural typing. The 
first iteration of this feature uses the typical typing speed of a human.

### Android on Windows
AskUI automation works on an Android device that is controlled from a Windows machine. It allows you to run a workflow on an Android device, including recording the session. Instructions how to setup the Android workflow can be found in our [documentation](../general/04-Executing%20Automations/mobile-automation.md#android-automation]).

> Please also read the knows issues section since this is just a preview feature.

## Known Issues

### Mouse Movement
- You may encounter issues when mouse pointer acceleration is enabled.

### Log Files
- Log files are stored under `<YOUR_USER_FOLDER>/.askui/`.

### Android
- Recording on an Android device is not stable.
- Recorded resolution might be lower than the device resolution.
- Recorded video might be empty or single frame in cases no screen updates occurred during recording.
- We don't support landscape mode on Android.
- Devices with high DPI screen might not work as expected.
