---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automating Multiple Devices

This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this page, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android.

📌 *The following tutorial assumes that you have already installed and set up the AskUI library on your local device. The code for the configuration is based on the generated code. See [Getting Started](../01-Getting%20Started/write-your-first-instruction.md) for more details.*

![multi-device-automation](images/multi-device-diagram.png)

## Automate Remote Devices Running on Windows, Linux or macOS

### 1. Download and Prepare the AskUI Controller Binary for Each Device

Download the binary for the respective platform and install it on the device(s) you want to automate remotely:

<Tabs>
  <TabItem value="windows" label="Windows" default>

[Windows - Please use the AskUI Installer from our Getting Started](../01-Getting%20Started/Installing%20AskUI/getting-started.md)

  </TabItem>
  <TabItem value="linux" label="Linux" default>

:::info
For Linux you have to make the downloaded _AppImage_ executable:

```bash
chmod +x askui-ui-controller.AppImage
```
:::

[Linux](https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage)

  </TabItem>
  <TabItem value="macos" label="macOS" default>    

:::info

**macOS** After installation to `Applications` remove the quarantine flag with the following command run from a terminal: `xattr -d com.apple.quarantine /Applications/askui-ui-controller.app`

:::

[macOS(Intel)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg) |
[macOS(Apple silicon)](https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg)

  </TabItem>
</Tabs>


### 2. Run the Controller on Each Device
Run the *AskUI Controller* on the remote devices with the following command:

<Tabs>
  <TabItem value="windows" label="Windows" default>

```bash
# Activate AskUI Development Environment (ADE) first
AskUI-RunController --host 0.0.0.0 -p 6769 -d 0 -m
```

  </TabItem>
  <TabItem value="linux" label="Linux" default>

:::info
Change to the directory of the `askui-ui-controller` binary first: See [Download and Prepare step](#1-download-and-prepare-the-askui-ui-controller-binary-for-each-device).
:::

```bash
# Linux
./askui-ui-controller.AppImage --host 0.0.0.0 -p 6769 -d 0 -m
```

  </TabItem>
  <TabItem value="macos" label="macOS" default>    

:::info
Change to the directory of the `askui-ui-controller` binary first: See [Download and Prepare step](#1-download-and-prepare-the-askui-ui-controller-binary-for-each-device).
:::

```bash
# macOS
/Applications/askui-ui-controller.app/Contents/MacOS/askui-ui-controller --host 0.0.0.0 -p 6769 -d 0 -m
```

  </TabItem>
</Tabs>

If running successfully, you should see the logs printed on the terminal, e.g:

```bash
[2023-01-02 17:31:19.634 +0100] DEBUG (AskuiUiController): Window is minimized.
[2023-01-02 17:31:19.639 +0100] INFO (AskuiUiController): Selecting display number 0.
[2023-01-02 17:31:19.641 +0100] INFO (AskuiUiController): Successfully started.
```

### 3. Configure the `askui-helper.ts`

Figure out the local IP address of the remote device(s), and then change the `<ip-address-remote-device*>` in the `askui-helper.ts`:

```ts
import { UiControlClient, UiController } from 'askui';

let remoteDevice1: UiControlClient;
let remoteDevice2: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {

    // Get your AskUI credentials from https://app.askui.com/workspaces
    const credentials = {
        workspaceId: '<your-workspace-id>',
        token: '<your-token>',
    }

    // This client will communicate with
    // the controller running on the remote device 1.
    // Replace the <ip-address-remote-device1>
    // with the IP from remote device 1
    remoteDevice1 = await UiControlClient.build({ 
        uiControllerUrl: "ws://<ip-address-remote-device2>:6769",
        credentials,
    });

    await remoteDevice1.connect();

    // This client will communicate with
    // the controller running on the remote device 2.
    // Replace the <ip-address-remote-device2>
    // with the IP from remote device 2
    remoteDevice2 = await UiControlClient.build({    
        uiControllerUrl: "ws://<ip-address-remote-device2>:6769", 
        credentials,
    });

    await remoteDevice2.connect();

    // Add more UiControlClients for more devices
});

afterAll(async () => {
    remoteDevice1.close();
    remoteDevice2.close();
});

export { remoteDevice1, remoteDevice2 };
```

## Automate Remote Device(s) Running on Android

:::info
Automating a remote Android device works differently than automating a Windows, Linux or macOS remote device.
Your local machine communicates with the remote Android device over the _Android Debug Bridge_.

Thus the AskUI Controller runs on your local machine and __not__ on the remote Android device!
:::

Also [check out our example repository](https://github.com/askui/askui-example-android-multi-device) to see the setup in action 🙂.

### 1. Prepare Your Android Device(s)

Prepare your remote Android device(s) with [this tutorial](mobile-automation.md#android).

Use the commands below, if you want to connect an Android device via `adb` wirelessly:

```bash
# Connect the Android device with a
# USB cable, and run this command:

# Run this command to confirm that your
# Android device is discoverable
adb devices # will print the <device-id>

# Replace <device-id> with your device-id
# This sets the port the adb is listening
# on for commands.
#
# IMPORTANT:
# Set this to a different port for each device
# you connect!
adb -s <device-id> tcpip 9000

# Replace the <local-ip-address>
# In this example localhost: 127.0.0.1
adb -s <device-id> connect <local-ip-address>:9000

# Run this command, if you want to check the local
# ip address of the android device
adb -s <device-id> shell ip -f inet addr show wlan0

# Now you can disconnect the USB cable from the Android device.
# Confirm that the Android device is recognised by adb wirelessly.
adb devices
```

### 2. Start AskUI Controller for Each Device
You __must__ start a separate AskUI Controller for each Android device you are automating. The `-p` argument sets the port the AskUI Controller is listening on for commands. Choose a different one for each device.

:::tip

The `-d` flag specifies to which device a AskUI Controller instance connects (Read on how it works!).

Run `adb devices` in a terminal to get a list of connected devices. In the following example, if you want to connect to `emulator-1` you use `-d 0` and for `emulator-2` you use `-d 1`.

```bash
$ adb devices
emulator-1 device product:sdk_google_phone_x86_64 model:Android_SDK_built_for_x86_64 device:generic_x86_64
emulator-2 device product:sdk_google_phone_x86 model:Android_SDK_built_for_x86 device:generic_x86
```

:::

<Tabs>
  <TabItem value="windows" label="Windows" default>

Set a different port for each AskUI Controller and specify which Android device to connect to with the `-d` flag.

```bash
# Activate AskUI Development Environment (ADE) first
# Connects to the first device returned by 'adb devices'
AskUI-RunController --host 0.0.0.0 -p 6769 -d 0 -m

# Connects to the second device returned by 'adb devices'
AskUI-RunController --host 0.0.0.0 -p 6770 -d 1 -m
```

  </TabItem>
  <TabItem value="linux" label="Linux" default>

Set a different port for each AskUI Controller and specify which Android device to connect to with the `-d` flag.

Open a new terminal for each AskUI Controller instance as it gets started in the foreground.

```bash
# Connects to the first device returned by 'adb devices'
./askui-ui-controller.AppImage --host -p 6769 0.0.0.0 -d 0 -m -r android

# Connects to the second device returned by 'adb devices'
./askui-ui-controller.AppImage --host -p 6770 0.0.0.0 -d 1 -m -r android
```

  </TabItem>
  <TabItem value="macos" label="macOS" default>    

Set a different port for each AskUI Controller and specify which Android device to connect to with the `-d` flag.

Open a new terminal for each AskUI Controller instance as it gets started in the foreground.

```bash
# Connects to the first device returned by 'adb devices'
/Applications/askui-ui-controller.app/Contents/MacOS/askui-ui-controller --host 0.0.0.0 -p 6769 -d 0 -m -r android

# Connects to the second device returned by 'adb devices'
/Applications/askui-ui-controller.app/Contents/MacOS/askui-ui-controller --host 0.0.0.0 -p 6770 -d 1 -m -r android
```

  </TabItem>
</Tabs>

### 3. Configure the `askui-helper.ts`

```typescript
import { UiControlClient } from 'askui';

// Client is necessary to use the askui API
let auiAndroidDevice1: UiControlClient;
let auiAndroidDevice2: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

// Get your AskUI credentials from https://app.askui.com/workspaces
const credentials = {
    workspaceId: '<your-workspace-id>',
    token: '<your-token>',
}

beforeAll(async () => {

  // Connects to AskUI Controller 1 (emulator-1)
  remoteDevice1 = await UiControlClient.build({
    uiControllerUrl: "ws://127.0.0.1:6769",
    credentials,
  });
  await remoteDevice1.connect();
  
  // Connects to AskUI Controller 2 (emulator-2)
  remoteDevice2 = await UiControlClient.build({
    uiControllerUrl: "ws://127.0.0.1:6770",
    credentials,
  });
  
  await remoteDevice2.connect();
});

...

afterAll(async () => {
  remoteDevice1.disconnect();
  remoteDevice2.disconnect();
});

export { remoteDevice1, remoteDevice2 };
```

## Write the AskUI Code

Write the AskUI code in `test/my-first-askui-test-suite.test.ts`:

```ts
import { remoteDevice1, remoteDevice2 } from './helper/jest.setup';

describe('jest with askui', () => {
    it('should work with multiple devices', async () => {
        const everyElementRemote1 = await remoteDevice1.getAll().exec();
        console.log(everyElementRemote1);

        await localDevice.moveMouse(500,500).exec();
        const everyElementRemote2 = await remoteDevice2.getAll().exec();
        console.log(everyElementRemote2);
    });
});
```

## Run the Code

Run the command below to run the AskUI code:

<Tabs>
  <TabItem value="windows" label="Windows" default>
  Switch into ADE by running `askui-shell` in a Command Prompt first.
  ```shell
  AskUI-RunProject
  ```
  </TabItem>
  <TabItem value="linux" label="Linux" default>
  ```shell
  npm run askui
  ```
  </TabItem>
  <TabItem value="macOS" label="macOS" default>
  ```shell
  npm run askui
  ```
  </TabItem>
</Tabs>

## Conclusion
Now you should be able to automate multiple devices in the network. If you got any issues while following this tutorial, don't hesitate to ask our [Outverse-Community](https://app.outverse.com/askui/community/home)!
