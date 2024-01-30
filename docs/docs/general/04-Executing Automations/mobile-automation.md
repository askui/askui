---
sidebar_position: 4
title: Mobile Automation
---
**Index**

[Android Automation](#android)

[iOS Automation](#ios-automation)

## Android

In this tutorial, we will walk you through how to set up an Android device for automating mobile apps running on Android devices (physical or emulated).

### Requirements
- Android device: real or emulated.

#### Set up a Real Android Device
This part is for setting up a real Android device. If you want to use an Android emulator instead, then you can skip it and go directly to the next step.

To use additional development features in an Android device, you need to enable the `Developer Options` within the device. To enable the `Developer Options`, tap the `Build Number` option 7 times. You can find this option in one of the following locations, depending on your Android version:

- Android 9 (API level 28) and higher: `Settings` > `About Phone` > `Build Number`
- Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): `Settings` > `System` > `About Phone` > `Build Number`
- Android 7.1 (API level 25) and lower: `Settings` > `About Phone` > `Build Number`

After enabling the `Developer Options`, you can enable the `USB debugging` option. This option will allow the Android Studio and other SDK tools to recognize your Android device via USB. To enable USB debugging, toggle the USB debugging option in the Developer Options menu. You can find this option in one of the following locations, depending on your Android version:

- Android 9 (API level 28) and higher: `Settings` > `System` > `Advanced` > `Developer Options` > `USB debugging`
- Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): `Settings` > `System` > `Developer Options` > `USB debugging`
- Android 7.1 (API level 25) and lower: `Settings` > `Developer Options` > `USB debugging`

### Install Android SDK Command-line Tools
Download the **SDK Platform-Tools** from the [official site](https://developer.android.com/studio/releases/platform-tools).

Unzip the .zip file. You can find the **adb** binary within the extracted directory.

```bash
cd platform-tools
# Show every available Android devices
./adb devices
```

:::info
The command `adb` is usually not added to your `$PATH` and will not be available globally. Please [follow the official docs](https://developer.android.com/tools#environment-variables) to set it up.
:::

### 3. Set Up the ADBKeyboard

Until now, you have prepared your Android device and now you are ready to go for automating our Android app. But before you jump into this phase, you will set up one more utility that will make the procedure easier.

[ADBKeyboard](https://github.com/senzhk/ADBKeyBoard) is a virtual keyboard that can be installed on Android devices. It enables us to type within the Android device by issuing commands via adb.

One noticeable advantage of using ADBKeyboard is that it can also handle base64 encoding, which becomes handy if you want to type Unicode characters such as emojis:fire: For more details about this virtual keyboard, [see here](https://github.com/senzhk/ADBKeyBoard/blob/master/README.md).

To install the ADBKeyboard on your device,

1. Download the ADBKeyboard package from [this GitHub Repository](https://github.com/senzhk/ADBKeyBoard/releases/tag/v2.0) *(Important: Version 2.0)*
2. Unzip it.
3. Find your device:

    ```bash
    # make sure that your Android device is connected.
    # in case of using the emulator, it should be running
    adb devices
    ```
    
4. Install the ADBKeyboard on the device:

    ```bash
    # inside ADBKeyBoard-2.0/
    adb -s <your device id> install ADBKeyboard.apk
    ```
    
5. Configure the ADB Keyboard:

    ```bash
    adb -s <your device id> shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME
    ```
    
6. Enable the ADBKeyboard:

    ```bash
    adb -s <your device id> shell ime enable com.android.adbkeyboard/.AdbIME
    ```
    
7. To check if it is enabled:
Click on a textfield in an app and see if the `ADB Keyboard {ON}` notification is shown at the bottom of the screen.

### 4. Done

We are finally done with the preparation for automating apps running on Android devices.

You can now try your setup in our [Automate Web Search on Android Devices Tutorial](../06-Tutorials/android-search-in-browser.md).

If you have a recurring or persisting issue while following this tutorial, don’t hesitate to ask the [Outverse-Community](https://app.outverse.com/askui/community/home) for help!

## iOS Automation

:::caution

This page is currently under construction. If you have any questions, please feel free to reach out to info@askui.com or book a meeting with Jonas [over Calendly](https://calendly.com/jonas-menesklou/digital-get-to-know).

:::
