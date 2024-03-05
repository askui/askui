"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23600],{96340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(17624),a=n(4552);const r={sidebar_position:6},s="Flutter Sample Android App",o={id:"general/Tutorials/flutter-android-sample-app",title:"Flutter Sample Android App",description:"This tutorial shows how to use AskUI to automate an Android app built with Flutter. We provide the source code for the Flutter demo app used in this tutorial (GitHub repository). Set up the demo app by following the instructions below. This tutorial assumes that you already have your Android device prepared. It can be a real Android device or an Android Emulator.",source:"@site/versioned_docs/version-0.16.0/general/06-Tutorials/flutter-android-sample-app.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/flutter-android-sample-app",permalink:"/docs/general/Tutorials/flutter-android-sample-app",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.16.0/general/06-Tutorials/flutter-android-sample-app.md",tags:[],version:"0.16.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Web Search on Android",permalink:"/docs/general/Tutorials/android-search-in-browser"},next:{title:"Google Cat Image Search",permalink:"/docs/general/Tutorials/google-cat-search"}},c={},l=[{value:"Live Demo in Action (playback speed x3)",id:"live-demo-in-action-playback-speed-x3",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Build and Run Flutter Demo App",id:"1-build-and-run-flutter-demo-app",level:3},{value:"3. Setup AskUI",id:"3-setup-askui",level:2},{value:"Breaking Down the AskUI Code",id:"breaking-down-the-askui-code",level:2},{value:"0. General Tips for Using AskUI as a More Friendly Tool:",id:"0-general-tips-for-using-askui-as-a-more-friendly-tool",level:2},{value:"1. Click and Type",id:"1-click-and-type",level:3},{value:"Datepicker",id:"datepicker",level:2},{value:"Take a Picture with the Camera",id:"take-a-picture-with-the-camera",level:2},{value:"Complete AskUI Code",id:"complete-askui-code",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"flutter-sample-android-app",children:"Flutter Sample Android App"}),"\n",(0,i.jsxs)(t.p,{children:["This tutorial shows how to use AskUI to automate an Android app built with ",(0,i.jsx)(t.a,{href:"https://flutter.dev/",children:"Flutter"}),". We provide the source code for the Flutter demo app used in this tutorial (",(0,i.jsx)(t.a,{href:"https://github.com/askui/flutter-example-automation",children:"GitHub repository"}),"). Set up the demo app by following the instructions below. This tutorial assumes that you already have your Android device prepared. It can be a real Android device or an Android Emulator."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["If you haven't set up your Android device or Emulator yet, ",(0,i.jsx)(t.a,{href:"/docs/general/Executing%20Automations/mobile-automation#android",children:"follow this tutorial"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"This tutorial includes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Build and Run the Flutter Demo App"}),"\n",(0,i.jsx)(t.li,{children:"Set up the ADBKeyboard"}),"\n",(0,i.jsx)(t.li,{children:"Click/Touch Automation"}),"\n",(0,i.jsx)(t.li,{children:"Type Automation"}),"\n",(0,i.jsx)(t.li,{children:"Swipe Automation"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"live-demo-in-action-playback-speed-x3",children:"Live Demo in Action (playback speed x3)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Flutter sample app in action",src:n(85958).c+"",width:"500",height:"1150"})}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.p,{children:["The source code for the Flutter demo app used in this tutorial is provided in ",(0,i.jsx)(t.a,{href:"https://github.com/askui/flutter-example-automation",children:"this repository"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"1-build-and-run-flutter-demo-app",children:"1. Build and Run Flutter Demo App"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.flutter.dev/get-started/install",children:"Install Flutter"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Clone ",(0,i.jsx)(t.a,{href:"https://github.com/askui/flutter-example-automation",children:"this repository"})," and run ",(0,i.jsx)(t.code,{children:"flutter create demo_app"})," within the directory:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/askui/flutter-example-automation\ncd flutter-example-automation\nflutter create demo_app\ncd demo_app\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Install dependencies for the Flutter demo app:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# run this command inside the flutter project\n# directory `demo_app/`\nflutter pub add camera intl\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["To use the camera, we need to set the ",(0,i.jsx)(t.code,{children:"minSdkVersion"})," in ",(0,i.jsx)(t.code,{children:"android/app/build.gradle"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:"// inside the 'android/app/build.gradle' \n// set the 'minSdkVersion' to 21\ndefault config {\n  ...\n  minSdkVersion 21\n  ...\n}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["(optional) The app is ready to be built but will throw deprecation warnings. If you want to clear the deprecation warnings, follow this step (",(0,i.jsx)(t.a,{href:"https://github.com/flutter/flutter/issues/89578#issuecomment-945916643",children:"See also this issue."}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# change the respective part inside the 'pubspec.yaml'\ndependencies:\n  camera:\n    git:\n      url: https://github.com/flutter/plugins\n      path: packages/camera/camera\n      ref: 9e46048ad2e1f085c1e8f6c77391fa52025e681f\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Run the Android Emulator."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Run the demo app:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"flutter run\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now you should see the demo app running on your Android device."}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Setup ADBKeyboard\nIn this example, we are going to automate the typing on the Android device. To let AskUI fluently type as desired, we will use a virtual keyboard that handles the keyboard input via adb: ",(0,i.jsx)(t.a,{href:"https://github.com/senzhk/ADBKeyBoard",children:"ADBKeyboard.apk"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u200d"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Download the ADBKeyboard package (Important: Version 2.0): ",(0,i.jsx)(t.a,{href:"https://github.com/senzhk/ADBKeyBoard/releases/tag/v2.0",children:"Link to GitHub Repository"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Unzip it."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Find your device:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# Make sure that your Android device is connected, and the USB debugging mode is enabled\nadb devices\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"Install the ADBKeyboard on the device:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# inside ADBKeyBoard-2.0/\nadb -s <your device id> install ADBKeyboard.apk\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsx)(t.li,{children:"Configure the ADB Keyboard:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# inside ADBKeyBoard-2.0/\nadb -s <your device id> shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"Enable the ADB Keyboard:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# inside ADBKeyBoard-2.0/\nadb -s <your device id> shell ime enable com.android.adbkeyboard/.AdbIME\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"7",children:["\n",(0,i.jsx)(t.li,{children:"To check if it is enabled:"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Click on a textfield in an app and see if the ",(0,i.jsx)(t.code,{children:"ADB Keyboard {ON}"})," notification is shown at the bottom of the screen."]}),"\n",(0,i.jsx)(t.h2,{id:"3-setup-askui",children:"3. Setup AskUI"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Setup AskUI by following the ",(0,i.jsx)(t.a,{href:"/docs/general/Getting%20Started/Installing%20AskUI/getting-started",children:"Getting Started Guide"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["We need to run the AskUI Controller directly with an extra argument to specify the runtime mode, as the current version of AskUI(version 0.7.2) doesn't provide the API for running it with the runtime argument yet.\nFrom within your npm project path, go to the directory that contains the ",(0,i.jsx)(t.code,{children:"askui-ui-controller"})," binary:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cd <YOUR_PROJECT_DIRECTORY>/node_modules/askui/dist/release/latest/<YOUR_PLATFORM>\n./askui-ui-controller -r android\n# for example, macOS: cd node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app/Contents/MacOS/./askui-ui-controller -r android\n# If you can't find the binary as described above,\n# then you might have AskUI freshly installed and haven't run it yet.\n# The binary gets downloaded as the AskUI code runs.\n# Run the command below to run the AskUI code:\nnpm run askui\n"})}),"\n",(0,i.jsx)(t.p,{children:"If you got them both (emulator and AskUI Controller) running, then we are ready to go for the UI automation."}),"\n",(0,i.jsxs)(t.p,{children:["\u200d\n3) You need to deactivate a few lines of the code in ",(0,i.jsx)(t.code,{children:"test/helpers/askui-helper.ts"})," that is running the AskUI Controller, because we are already running it manually in the previous step:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// file location: test/helpers/askui-helper.ts\n// comment out every line that uses uiController\n\nimport { UiControlClient, UiController } from 'askui';\n\n// uiController: UiController;\n\nlet aui: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n    //   uiController = new UiController({\n    //     /**\n    //      * Select the display you want to run your tests on, display 0 is your main display;\n    //      * ignore if you have only one display\n    //      */\n    //     display: 0,\n    //   });\n\n    //   await uiController.start();\n\n    aui = await UiControlClient.build({\n        credentials:{\n            workspaceId: 'YOUR_WORKSPACEID_FROM_ASKUI_STUDIO',\n            token: 'YOUR_TOKEN_FROM_ASKUI_STUDIO',\n        }\n    });\n\n    await aui.connect();\n});\n\nafterAll(async () => {\n    //   await uiController.stop();\n\n    aui.disconnect();\n});\n\nexport { aui };\n"})}),"\n",(0,i.jsx)(t.h2,{id:"breaking-down-the-askui-code",children:"Breaking Down the AskUI Code"}),"\n",(0,i.jsxs)(t.p,{children:["This chapter will walk you through the provided ",(0,i.jsx)(t.code,{children:"askui-test/demo-automation.ts"})," step by step.\nThe code is divided into three parts, and each part automates a different tab within the demo app:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Outline tab"}),": Find a textfield and type in characters."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Datepicker tab"}),": Select a desired date within the date picker widget."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Camera tab"}),": Open the camera and push the record button."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"0-general-tips-for-using-askui-as-a-more-friendly-tool",children:"0. General Tips for Using AskUI as a More Friendly Tool:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Try to annotate : Use ",(0,i.jsx)(t.code,{children:"await aui.annotateInteractively()"})," or ",(0,i.jsx)(t.code,{children:"await aui.annotate()"})," in order to see how AskUI is understanding the visible elements on your screen. By using ",(0,i.jsx)(t.code,{children:"await aui.annotate()"}),", the result of the annotation will be saved in the folder ",(0,i.jsx)(t.code,{children:"report/"})," as an HTML file."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Be aware of the screen size of your device"}),": AskUI understands your application based on the screen shown and captured. Therefore, on some occasions, you may want to know your screen size to e.g. properly scroll or swipe within your application. You may need to change the numbers for the ",(0,i.jsx)(t.code,{children:"input swipe"})," command within the provided code so that it suits the screen size of your device."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Try to select the elements by their text"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"tip: If you are using a device with a bigger screen e.g. Tablet, then the screen of your device (real Android device or emulator) might be big enough to see the whole page without scrolling."})}),"\n",(0,i.jsx)(t.h3,{id:"1-click-and-type",children:"1. Click and Type"}),"\n",(0,i.jsxs)(t.p,{children:["The code is within the file ",(0,i.jsx)(t.code,{children:"askui-test/demo-automation.ts"}),". Copy and paste the code into your AskUI code."]}),"\n",(0,i.jsx)(t.p,{children:"We start the run from the very first tab of our demo app."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"First tab of the demo app",src:n(71287).c+"",width:"400",height:"920"})}),"\n",(0,i.jsx)(t.p,{children:"To type into a textfield, we first need to get focus on the desired textfield. We can achieve it by running the code below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// click on the textfield and type characters\n// repeat this as many times as the textfields\nawait aui.click().text('Enter your username').exec();\nawait aui.type('askui').exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:"As we have multiple of textfields in our demo app, we can iterate the same procedure for each of them:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// click on the textfield and type characters\n// repeat this as many times as the textfields\nawait aui.click().text('Enter your username').exec();\nawait aui.type('askui').exec();\n\n// click and type the email address\nawait aui.click().text('Enter your email').exec();\nawait aui.type('askui@askui.com').exec();\n\n// Click and type the address\nawait aui.click().text('Enter your address').exec();\nawait aui.type('Haid-und-Neu-Stra\xdfe 18').exec();\n\n// Pressing enter is the equivalent of pressing the return button on the on-screen-keyboard\n// This gets rid of the focus from the textfield\nawait aui.pressAndroidKey('enter').exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:"After filling up the textfields, we can push the buttons at the bottom of the page:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// Press the 'Submit' button\nawait aui.click().text('Submit').exec();\n\n// We will have a popup window that has two buttons. Press the 'Refuse' button\nawait aui.click().text('Refuse').exec();\n\n// Here we press multiple toggle buttons one by one\nawait aui.click().text('Banana').exec();\nawait aui.click().text('Mango').exec();\nawait aui.click().text('Sunny').exec();\nawait aui.click().text('Rainy').exec();\nawait aui.click().text('Windy').exec();\n\n// Attention for swiping!\n/*  Swipe/scroll within the page\n  - execOnShell() can run shell commands within the device via adb.\n  - Note that, you have to adjust the four numeric parameters,\n          in order to make it fit to your device's screen.\n  - The syntax is:\n      input swipe <startX> <startY> <endX> <endY>\n  - Depending on the screen size of your device,\n          the coordinates should stay within the scrollable/swipeable area of the app.\n          i.e. the 'Tabbar' at the top of the demo app is not scrollable.\n*/\n\n// Here we swipe the page two times in a row\nawait aui.execOnShell('input swipe 1000 1000 100 1000').exec();\nawait aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"datepicker",children:"Datepicker"}),"\n",(0,i.jsx)(t.p,{children:"After running the code above, we should see the demo app swiped to the Datepicker tab."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Datepicker tab of the demo app",src:n(66264).c+"",width:"400",height:"920"})}),"\n",(0,i.jsx)(t.p,{children:"First, we select and type characters into two different textfields:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// First, we type in the desired values into the textfields.\nawait aui.click().text('Title').exec();\nawait aui.type('My vacation plan').exec();\nawait aui.click().text('Description').exec();\nawait aui.type('0. Drink a lot of water').exec();\nawait aui.pressAndroidKey('tab').exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:"Thereafter, we interact with two different date picker widgets that are represented with edit buttons:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// Second, we select a desired date from the Datepicker widget.\n// Notice how we select the icon 'chevron right/left' to shift the calendar month.\nawait aui.click().text('edit').nearestTo().text('Depature').exec(); // this will open up the calendar\nawait aui.click().icon().withText('chevron right').exec();\n\n// within the calendar, we push the > icon on the top right corner\nawait aui.click().icon().withText('chevron right').exec();\nawait aui.click().text('7').exec(); // select 7\nawait aui.click().text('ok').exec(); // then, press OK\n\n// Repeat the step for the next Datepicker widget.\nawait aui.click().text('edit').nearestTo().text('Return').exec();\nawait aui.click().icon().withText('chevron right').exec();\nawait aui.click().icon().withText('chevron right').exec();\nawait aui.click().icon().withText('chevron right').exec();\nawait aui.click().text('5').exec();\nawait aui.click().text('ok').exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:"Let's go further below to the bottom of the page, and then interact with more interfaces:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// click and check the checkbox\nawait aui.click().checkboxUnchecked().nearestTo().text('Brushed Teeth').exec();\n\n// finally, we turn on the switch\nawait aui.click().switchDisabled().nearestTo().text('Enable feature').exec();\n\n// Swipe the page to the Camera tab\nawait aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"take-a-picture-with-the-camera",children:"Take a Picture with the Camera"}),"\n",(0,i.jsxs)(t.p,{children:["In the final tab ",(0,i.jsx)(t.strong,{children:"Camera"}),", we can launch the device's camera and take a picture by pressing the record button.\n\u200d\n",(0,i.jsx)(t.img,{alt:"Camera tab of the demo app",src:n(60984).c+"",width:"400",height:"920"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// Click on the button 'Take a Picture', then it will launch the camera\nawait aui.click().button().contains().text('Take a Picture').exec();\n\n// Notice how we select the record button.\n// Our demo-app intends to have the record button in a circular shape.\n// So we can look for an icon which is a 'circle'\n// It might be different in other applications.\nawait aui.click().icon().containsText('circle').exec();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"complete-askui-code",children:"Complete AskUI Code"}),"\n",(0,i.jsx)(t.p,{children:"This is the complete code that runs AskUI to automate our workflow:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n    xit('annotate', async () => {\n        await aui.annotateInteractively();\n    });\n\n    it('should fill up the textfields and push buttons', async () => {\n        // click on the textfield and type characters\n        // repeat this as many times as the textfields\n        await aui.click().text('Enter your username').exec();\n        await aui.type('askui').exec();\n\n        // click on the textfield and type the email        \n        await aui.click().text('Enter your email').exec();\n        await aui.type('askui@askui.com').exec();\n\n        // Click and type the address\n        await aui.click().text('Enter your address').exec();\n        await aui.type('Haid-und-Neu-Stra\xdfe 18').exec();\n\n        // Pressing enter is the equivelant to pressing the return button on the on-screen-keyboard\n        // This gets rid of the focus from the textfield\n        await aui.pressAndroidKey('enter').exec();\n\n        // Press the 'Submit' button\n        await aui.click().text('Submit').exec();\n\n        // We will have a popup window that has two buttons. Press the 'Refuse' button\n        await aui.click().text('Refuse').exec();\n\n        // Here we press multiple of toggle buttons one by one\n        await aui.click().text('Banana').exec();\n        await aui.click().text('Mango').exec();\n        await aui.click().text('Sunny').exec();\n        await aui.click().text('Rainy').exec();\n        await aui.click().text('Windy').exec();\n\n\n        // Attention for swiping!\n        /*  Swipe/scroll within the page\n            - execOnShell() can run shell commands within the device via adb.\n            - Note that, you have to adjust the four numeric parameters,\n            in order to make it fit to your device's screen.\n            - The syntax is:\n                input swipe <startX> <startY> <endX> <endY>\n            - Depending on the screen size of your device,\n            the coordinates should stay within the scrollable/swipeable area of the app.\n            i.e. the 'Tabbar' at the top of the demo app is not scrollable.\n        */\n\n        // Here we swipe the page two times in a row\n        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n    });\n\n\n    it('should pick the dates', async () => {\n        // First, we type in the desired values into the textfields.\n        await aui.click().text('Title').exec();\n        await aui.type('My vacation plan').exec();\n        await aui.click().text('Description').exec();\n        await aui.type('0. Drink a lot of water').exec();\n        await aui.pressAndroidKey('tab').exec();\n\n        // Second, we select a desired date from the Datepicker widget.\n        // Notice how we select the icon 'chevron right/left' to shift the calendar month.\n        await aui.click().text('edit').nearestTo().text('Depature').exec(); // this will open up the calendar\n        await aui.click().icon().withText('chevron right').exec(); // within the calendar, we push the > icon on the top right corner\n        await aui.click().icon().withText('chevron right').exec();\n        await aui.click().text('7').exec(); // select 7\n        await aui.click().text('ok').exec(); // then, press OK\n\n\n        // Repeat the step for the next Datepicker widget.\n        await aui.click().text('edit').nearestTo().text('Return').exec();\n        await aui.click().icon().withText('chevron right').exec();\n        await aui.click().icon().withText('chevron right').exec();\n        await aui.click().icon().withText('chevron right').exec();\n        await aui.click().text('5').exec();\n        await aui.click().text('ok').exec();\n\n        // click and check the checkbox\n        await aui.click().checkboxUnchecked().nearestTo().text('Brushed Teeth').exec();\n\n        // finally, we turn on the switch\n        await aui.click().switchDisabled().nearestTo().text('Enable feature').exec();\n\n        // Swipe the page to the Camera tab\n        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n\n    });\n\n    it('should take a picture', async ()=>{\n        // Click on the button 'Take a Picture', then it will launch the camera\n        await aui.click().button().contains().text('Take a Picture').exec();\n\n        // Notice how we select the record button.\n        // Our demo-app intends to have the record button in a circular shape.\n        // So we can look for an icon which is a 'circle'\n        // It might be different in other applications.\n        await aui.click().icon().containsText('circle').exec();\n    });\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"After following through this tutorial, you should be able to automate the interaction with the provided demo app. Although this example specifically provides a demo app built with Flutter, the overall method of using AskUI should also work with any mobile app running on an Android device."}),"\n",(0,i.jsxs)(t.p,{children:["If you got an issue while following this example, or in case you would like to share your use case, don't hesitate to join our ",(0,i.jsx)(t.a,{href:"https://app.outverse.com/askui/community/home",children:"community on Outverse"}),"!"]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},85958:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/flutter-sample-app-tutorial-inaction-fast-37aaf824b73d76a71f33e14caff6ea6d.gif"},71287:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/flutter-sample-app-first-tab-32e06ede2d0c14a60a842a8847dfffc9.jpeg"},66264:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/flutter-sample-app-second-tab-datepicker-959286810e6ec154cae2251afaa31f4e.jpeg"},60984:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/flutter-sample-app-third-tab-camera-bb636ef6dfebae3212373ca1dcec6b28.jpeg"},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>s});var i=n(11504);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);