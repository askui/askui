---
sidebar_position: 2
---

# Multi Device Automation

This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this tutorial, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android.

📌 *The following tutorial assumes that you have already installed and set up the AskUI library on your local device. The code for the configuration is based on the generated code. See [Getting Started](../02-Getting%20Started/write-your-first-instruction.md) for more details.*

![multi-device-automation](images/multi-device-diagram.png)

## 1. Download and Prepare the `askui-ui-controller` Binary for Each Device

- Download the binary/binaries for the respective platform(s):

    :::info
    **macOS** After installation to `Applications` remove the quarantine flag with the following command run from a terminal: `xattr -d com.apple.quarantine /Applications/askui-ui-controller.app`
    :::
    
    [Windows](https://files.askui.com/releases/askui-ui-controller/latest/win32/x64/askui-ui-controller.exe) | [macOS(intel)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg) | [macOS(silicon)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg) | [Linux](https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage)

**macOS** and **Linux** only: If you downloaded the `askui-ui-controller` manually from the link above, you have to make it executable.

- **macOS**: Mount the downloaded `askui-ui-controller.dmg` by double-clicking it and copy the `askui-ui-controller.app` to wherever you want to store it. Then, the executable binary will be within the `.app` package:

    ```bash
    askui-ui-controller.app/Contents/MacOS/askui-ui-controller
    ```
- **Linux**: Run the command below to make it executable:

    ```bash
    chmod +x askui-ui-controller.AppImage
    ```

If the remote devices runs Android, see [Android Only](#android-only).

### Android Only:

Prepare your Android device with [this tutorial](mobile-automation.md#android).

Use the commands below, if you want to connect your Android device via `adb` wirelessly:

```bash
# Connect the Android device with a
# USB cable, and run this command:

# Run this command to confirm that your
# Android device is discoverable
adb devices # will print the <device-id>

# replace <device-id> with your device-id
adb -s <device-id> tcpip 9000

# replace the <local-ip-address>
adb -s <device-id> connect <local-ip-address>:9000

# Run this command, if you want to check the local
# ip address of the android device
adb -s <device-id> shell ip -f inet addr show wlan0

# Now you can disconnect the USB cable from the Android device.
# Confirm that the Android device is recognised by adb wirelessly.
adb devices
```

## 2. Configure the `jest.setup.ts`

Figure out the local IP address of the remote device, and then change the `<local-ip-address>` of the `jest.setup.ts`:

```ts
import { UiControlClient, UiController } from 'askui';

let localDevice: UiControlClient;
let remoteDevice: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {

// Get your AskUI credentials from https://app.askui.com/workspaces
const credentials = {
    workspaceId: '<your-workspace-id>',
    token: '<your-token>',
}

// This client will communicate with
// the controller running on this local device.
localDevice = await UiControlClient.build({ 
    uiControllerUrl: "ws://127.0.0.1:6769",
    credentials: credentials,
});

await localDevice.connect();

// This client will communicate with
// the controller running on the remote device.
// Replace the <local-ip-address>
// In case of Android device, replace it with 127.0.0.1
remoteDevice = await UiControlClient.build({    
    uiControllerUrl: "ws://<local-ip-address>:6769", 
    credentials: credentials,
});

await remoteDevice.connect();
});

afterAll(async () => {
    localDevice.close();
    remoteDevice.close();
});

export { localDevice, remoteDevice };
```


## 3. Run the Controller on Each Device

:::danger
Change to the directory of the `askui-ui-controller` binary first: See [Download and Prepare step](#1-download-and-prepare-the-askui-ui-controller-binary-for-each-device).
:::

Run the binary *AskUI UI Controller* on the local and remote devices with the following command:

```bash
# Windows powershell
.\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m

# Windows cmd
start askui-ui-controller.exe --host 0.0.0.0 -d 0 -m

# macOS
./askui-ui-controller --host 0.0.0.0 -d 0 -m

# Linux
./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m    
```

If running successfully, you should see the logs printed on the terminal, e.g:

```bash
[2023-01-02 17:31:19.634 +0100] DEBUG (AskuiUiController): Window is minimized.
[2023-01-02 17:31:19.639 +0100] INFO (AskuiUiController): Selecting display number 0.
[2023-01-02 17:31:19.641 +0100] INFO (AskuiUiController): Successfully started.
```

### Android Only:
If your remote device is an Android device, run the *AskUI UI Controller* on the **local device (desktop)** with an extra option as shown below:

```bash
# Windows powershell
.\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android

# Windows cmd
start askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android

# macOS
./askui-ui-controller --host 0.0.0.0 -d 0 -m -r android

# Linux
./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m -r android
```

Make sure that your local device (desktop) is running **TWO DIFFERENT `askui-ui-controller`**, if you want to control the local device and the Android device at the same time.

## 4. Write the AskUI Code

Write the AskUI code in `test/my-first-askui-test-suite.test.ts`:

```ts
import { localDevice, remoteDevice } from './helper/jest.setup';

describe('jest with askui', () => {
    it('should work with multiple devices', async () => {
        const everyElement_remote = await remoteDevice.getAll().exec();
        console.log(everyElement_remote);

        await localDevice.moveMouse(500,500).exec();
        const everyElement_local = await localDevice.getAll().exec();
        console.log(everyElement_local);
    });
});
```

## 5. Run the Code

Run the command below to run the AskUI code:

```bash
npm run askui
```

## 6. Conclusion
Now you should be able to automate multiple devices in the network. If you got any issues while following this tutorial, don't hesitate to ask our [Outverse-Community](https://app.outverse.com/askui/community/home)!
