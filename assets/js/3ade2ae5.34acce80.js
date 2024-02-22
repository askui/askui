"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59248],{47920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=t(17624),i=t(4552),r=t(86212),a=t(22440);const s={sidebar_position:2},l="Automating Multiple Devices",c={id:"general/Executing Automations/multi-device-automation",title:"Automating Multiple Devices",description:"This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this page, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android.",source:"@site/docs/general/04-Executing Automations/multi-device-automation.md",sourceDirName:"general/04-Executing Automations",slug:"/general/Executing Automations/multi-device-automation",permalink:"/docs/next/general/Executing Automations/multi-device-automation",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/04-Executing Automations/multi-device-automation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Annotations, Screenshots and Videos",permalink:"/docs/next/general/Element Selection/annotations-and-screenshots"},next:{title:"Extracting Element Data",permalink:"/docs/next/general/Element Selection/scraping-and-storing-lements"}},d={},u=[{value:"Automate Remote Devices Running on Windows, Linux or macOS",id:"automate-remote-devices-running-on-windows-linux-or-macos",level:2},{value:"1. Download and Prepare the AskUI Controller Binary for Each Device",id:"1-download-and-prepare-the-askui-controller-binary-for-each-device",level:3},{value:"2. Run the Controller on Each Device",id:"2-run-the-controller-on-each-device",level:3},{value:"3. Configure the <code>askui-helper.ts</code>",id:"3-configure-the-askui-helperts",level:3},{value:"Automate Remote Device(s) Running on Android",id:"automate-remote-devices-running-on-android",level:2},{value:"1. Prepare Your Android Device(s)",id:"1-prepare-your-android-devices",level:3},{value:"2. Start AskUI Controller for Each Device",id:"2-start-askui-controller-for-each-device",level:3},{value:"3. Configure the <code>askui-helper.ts</code>",id:"3-configure-the-askui-helperts-1",level:3},{value:"Write the AskUI Code",id:"write-the-askui-code",level:2},{value:"Run the Code",id:"run-the-code",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"automating-multiple-devices",children:"Automating Multiple Devices"}),"\n",(0,o.jsx)(n.p,{children:"This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this page, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android."}),"\n",(0,o.jsxs)(n.p,{children:["\ud83d\udccc ",(0,o.jsxs)(n.em,{children:["The following tutorial assumes that you have already installed and set up the AskUI library on your local device. The code for the configuration is based on the generated code. See ",(0,o.jsx)(n.a,{href:"/docs/next/general/Getting%20Started/write-your-first-instruction",children:"Getting Started"})," for more details."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"multi-device-automation",src:t(39564).c+"",width:"1280",height:"882"})}),"\n",(0,o.jsx)(n.h2,{id:"automate-remote-devices-running-on-windows-linux-or-macos",children:"Automate Remote Devices Running on Windows, Linux or macOS"}),"\n",(0,o.jsx)(n.h3,{id:"1-download-and-prepare-the-askui-controller-binary-for-each-device",children:"1. Download and Prepare the AskUI Controller Binary for Each Device"}),"\n",(0,o.jsx)(n.p,{children:"Download the binary for the respective platform and install it on the device(s) you want to automate remotely:"}),"\n",(0,o.jsxs)(r.c,{children:[(0,o.jsx)(a.c,{value:"windows",label:"Windows",default:!0,children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started",children:"Windows - Please use the AskUI Installer from our Getting Started"})})}),(0,o.jsxs)(a.c,{value:"linux",label:"Linux",default:!0,children:[(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["For Linux you have to make the downloaded ",(0,o.jsx)(n.em,{children:"AppImage"})," executable:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"chmod +x askui-ui-controller.AppImage\n"})})]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage",children:"Linux"})})]}),(0,o.jsxs)(a.c,{value:"macos",label:"macOS",default:!0,children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"macOS"})," After installation to ",(0,o.jsx)(n.code,{children:"Applications"})," remove the quarantine flag with the following command run from a terminal: ",(0,o.jsx)(n.code,{children:"xattr -d com.apple.quarantine /Applications/askui-ui-controller.app"})]})}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg",children:"macOS(Intel)"})," |\n",(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg",children:"macOS(Apple silicon)"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"2-run-the-controller-on-each-device",children:"2. Run the Controller on Each Device"}),"\n",(0,o.jsxs)(n.p,{children:["Run the ",(0,o.jsx)(n.em,{children:"AskUI Controller"})," on the remote devices with the following command:"]}),"\n",(0,o.jsxs)(r.c,{children:[(0,o.jsx)(a.c,{value:"windows",label:"Windows",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Activate AskUI Development Environment (ADE) first\nAskUI-RunController --host 0.0.0.0 -p 6769 -d 0 -m\n"})})}),(0,o.jsxs)(a.c,{value:"linux",label:"Linux",default:!0,children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Change to the directory of the ",(0,o.jsx)(n.code,{children:"askui-ui-controller"})," binary first: See ",(0,o.jsx)(n.a,{href:"#1-download-and-prepare-the-askui-ui-controller-binary-for-each-device",children:"Download and Prepare step"}),"."]})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Linux\n./askui-ui-controller.AppImage --host 0.0.0.0 -p 6769 -d 0 -m\n"})})]}),(0,o.jsxs)(a.c,{value:"macos",label:"macOS",default:!0,children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Change to the directory of the ",(0,o.jsx)(n.code,{children:"askui-ui-controller"})," binary first: See ",(0,o.jsx)(n.a,{href:"#1-download-and-prepare-the-askui-ui-controller-binary-for-each-device",children:"Download and Prepare step"}),"."]})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# macOS\n/Applications/askui-ui-controller.app/Contents/MacOS/askui-ui-controller --host 0.0.0.0 -p 6769 -d 0 -m\n"})})]})]}),"\n",(0,o.jsx)(n.p,{children:"If running successfully, you should see the logs printed on the terminal, e.g:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[2023-01-02 17:31:19.634 +0100] DEBUG (AskuiUiController): Window is minimized.\n[2023-01-02 17:31:19.639 +0100] INFO (AskuiUiController): Selecting display number 0.\n[2023-01-02 17:31:19.641 +0100] INFO (AskuiUiController): Successfully started.\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"3-configure-the-askui-helperts",children:["3. Configure the ",(0,o.jsx)(n.code,{children:"askui-helper.ts"})]}),"\n",(0,o.jsxs)(n.p,{children:["Figure out the local IP address of the remote device(s), and then change the ",(0,o.jsx)(n.code,{children:"<ip-address-remote-device*>"})," in the ",(0,o.jsx)(n.code,{children:"askui-helper.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { UiControlClient, UiController } from 'askui';\n\nlet remoteDevice1: UiControlClient;\nlet remoteDevice2: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n\n    // Get your AskUI credentials from https://app.askui.com/workspaces\n    const credentials = {\n        workspaceId: '<your-workspace-id>',\n        token: '<your-token>',\n    }\n\n    // This client will communicate with\n    // the controller running on the remote device 1.\n    // Replace the <ip-address-remote-device1>\n    // with the IP from remote device 1\n    remoteDevice1 = await UiControlClient.build({ \n        uiControllerUrl: \"ws://<ip-address-remote-device2>:6769\",\n        credentials,\n    });\n\n    await remoteDevice1.connect();\n\n    // This client will communicate with\n    // the controller running on the remote device 2.\n    // Replace the <ip-address-remote-device2>\n    // with the IP from remote device 2\n    remoteDevice2 = await UiControlClient.build({    \n        uiControllerUrl: \"ws://<ip-address-remote-device2>:6769\", \n        credentials,\n    });\n\n    await remoteDevice2.connect();\n\n    // Add more UiControlClients for more devices\n});\n\nafterAll(async () => {\n    remoteDevice1.close();\n    remoteDevice2.close();\n});\n\nexport { remoteDevice1, remoteDevice2 };\n"})}),"\n",(0,o.jsx)(n.h2,{id:"automate-remote-devices-running-on-android",children:"Automate Remote Device(s) Running on Android"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["Automating a remote Android device works differently than automating a Windows, Linux or macOS remote device.\nYour local machine communicates with the remote Android device over the ",(0,o.jsx)(n.em,{children:"Android Debug Bridge"}),"."]}),(0,o.jsxs)(n.p,{children:["Thus the AskUI Controller runs on your local machine and ",(0,o.jsx)(n.strong,{children:"not"})," on the remote Android device!"]})]}),"\n",(0,o.jsxs)(n.p,{children:["Also ",(0,o.jsx)(n.a,{href:"https://github.com/askui/askui-example-android-multi-device",children:"check out our example repository"})," to see the setup in action \ud83d\ude42."]}),"\n",(0,o.jsx)(n.h3,{id:"1-prepare-your-android-devices",children:"1. Prepare Your Android Device(s)"}),"\n",(0,o.jsxs)(n.p,{children:["Prepare your remote Android device(s) with ",(0,o.jsx)(n.a,{href:"/docs/next/general/Executing%20Automations/mobile-automation#android",children:"this tutorial"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Use the commands below, if you want to connect an Android device via ",(0,o.jsx)(n.code,{children:"adb"})," wirelessly:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Connect the Android device with a\n# USB cable, and run this command:\n\n# Run this command to confirm that your\n# Android device is discoverable\nadb devices # will print the <device-id>\n\n# Replace <device-id> with your device-id\n# This sets the port the adb is listening\n# on for commands.\n#\n# IMPORTANT:\n# Set this to a different port for each device\n# you connect!\nadb -s <device-id> tcpip 9000\n\n# Replace the <local-ip-address>\n# In this example localhost: 127.0.0.1\nadb -s <device-id> connect <local-ip-address>:9000\n\n# Run this command, if you want to check the local\n# ip address of the android device\nadb -s <device-id> shell ip -f inet addr show wlan0\n\n# Now you can disconnect the USB cable from the Android device.\n# Confirm that the Android device is recognised by adb wirelessly.\nadb devices\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-start-askui-controller-for-each-device",children:"2. Start AskUI Controller for Each Device"}),"\n",(0,o.jsxs)(n.p,{children:["You ",(0,o.jsx)(n.strong,{children:"must"})," start a separate AskUI Controller for each Android device you are automating. The ",(0,o.jsx)(n.code,{children:"-p"})," argument sets the port the AskUI Controller is listening on for commands. Choose a different one for each device."]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"-d"})," flag specifies to which device a AskUI Controller instance connects (Read on how it works!)."]}),(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"adb devices"})," in a terminal to get a list of connected devices. In the following example, if you want to connect to ",(0,o.jsx)(n.code,{children:"emulator-1"})," you use ",(0,o.jsx)(n.code,{children:"-d 0"})," and for ",(0,o.jsx)(n.code,{children:"emulator-2"})," you use ",(0,o.jsx)(n.code,{children:"-d 1"}),"."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ adb devices\nemulator-1 device product:sdk_google_phone_x86_64 model:Android_SDK_built_for_x86_64 device:generic_x86_64\nemulator-2 device product:sdk_google_phone_x86 model:Android_SDK_built_for_x86 device:generic_x86\n"})})]}),"\n",(0,o.jsxs)(r.c,{children:[(0,o.jsxs)(a.c,{value:"windows",label:"Windows",default:!0,children:[(0,o.jsxs)(n.p,{children:["Set a different port for each AskUI Controller and specify which Android device to connect to with the ",(0,o.jsx)(n.code,{children:"-d"})," flag."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Activate AskUI Development Environment (ADE) first\n# Connects to the first device returned by 'adb devices'\nAskUI-RunController --host 0.0.0.0 -p 6769 -d 0 -m\n\n# Connects to the second device returned by 'adb devices'\nAskUI-RunController --host 0.0.0.0 -p 6770 -d 1 -m\n"})})]}),(0,o.jsxs)(a.c,{value:"linux",label:"Linux",default:!0,children:[(0,o.jsxs)(n.p,{children:["Set a different port for each AskUI Controller and specify which Android device to connect to with the ",(0,o.jsx)(n.code,{children:"-d"})," flag."]}),(0,o.jsx)(n.p,{children:"Open a new terminal for each AskUI Controller instance as it gets started in the foreground."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Connects to the first device returned by 'adb devices'\n./askui-ui-controller.AppImage --host -p 6769 0.0.0.0 -d 0 -m -r android\n\n# Connects to the second device returned by 'adb devices'\n./askui-ui-controller.AppImage --host -p 6770 0.0.0.0 -d 1 -m -r android\n"})})]}),(0,o.jsxs)(a.c,{value:"macos",label:"macOS",default:!0,children:[(0,o.jsxs)(n.p,{children:["Set a different port for each AskUI Controller and specify which Android device to connect to with the ",(0,o.jsx)(n.code,{children:"-d"})," flag."]}),(0,o.jsx)(n.p,{children:"Open a new terminal for each AskUI Controller instance as it gets started in the foreground."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Connects to the first device returned by 'adb devices'\n/Applications/askui-ui-controller.app/Contents/MacOS/askui-ui-controller --host 0.0.0.0 -p 6769 -d 0 -m -r android\n\n# Connects to the second device returned by 'adb devices'\n/Applications/askui-ui-controller.app/Contents/MacOS/askui-ui-controller --host 0.0.0.0 -p 6770 -d 1 -m -r android\n"})})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"3-configure-the-askui-helperts-1",children:["3. Configure the ",(0,o.jsx)(n.code,{children:"askui-helper.ts"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { UiControlClient } from 'askui';\n\n// Client is necessary to use the askui API\nlet auiAndroidDevice1: UiControlClient;\nlet auiAndroidDevice2: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\n// Get your AskUI credentials from https://app.askui.com/workspaces\nconst credentials = {\n    workspaceId: '<your-workspace-id>',\n    token: '<your-token>',\n}\n\nbeforeAll(async () => {\n\n  // Connects to AskUI Controller 1 (emulator-1)\n  remoteDevice1 = await UiControlClient.build({\n    uiControllerUrl: \"ws://127.0.0.1:6769\",\n    credentials,\n  });\n  await remoteDevice1.connect();\n  \n  // Connects to AskUI Controller 2 (emulator-2)\n  remoteDevice2 = await UiControlClient.build({\n    uiControllerUrl: \"ws://127.0.0.1:6770\",\n    credentials,\n  });\n  \n  await remoteDevice2.connect();\n});\n\n...\n\nafterAll(async () => {\n  remoteDevice1.disconnect();\n  remoteDevice2.disconnect();\n});\n\nexport { remoteDevice1, remoteDevice2 };\n"})}),"\n",(0,o.jsx)(n.h2,{id:"write-the-askui-code",children:"Write the AskUI Code"}),"\n",(0,o.jsxs)(n.p,{children:["Write the AskUI code in ",(0,o.jsx)(n.code,{children:"test/my-first-askui-test-suite.test.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { remoteDevice1, remoteDevice2 } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n    it('should work with multiple devices', async () => {\n        const everyElementRemote1 = await remoteDevice1.getAll().exec();\n        console.log(everyElementRemote1);\n\n        await localDevice.moveMouse(500,500).exec();\n        const everyElementRemote2 = await remoteDevice2.getAll().exec();\n        console.log(everyElementRemote2);\n    });\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"run-the-code",children:"Run the Code"}),"\n",(0,o.jsx)(n.p,{children:"Run the command below to run the AskUI code:"}),"\n",(0,o.jsxs)(r.c,{children:[(0,o.jsxs)(a.c,{value:"windows",label:"Windows",default:!0,children:[(0,o.jsxs)(n.p,{children:["Switch into ADE by running ",(0,o.jsx)(n.code,{children:"askui-shell"})," in a Command Prompt first."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"AskUI-RunProject\n"})})]}),(0,o.jsx)(a.c,{value:"linux",label:"Linux",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm run askui\n"})})}),(0,o.jsx)(a.c,{value:"macOS",label:"macOS",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm run askui\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["Now you should be able to automate multiple devices in the network. If you got any issues while following this tutorial, don't hesitate to ask our ",(0,o.jsx)(n.a,{href:"https://app.outverse.com/askui/community/home",children:"Outverse-Community"}),"!"]})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},22440:(e,n,t)=>{t.d(n,{c:()=>a});t(11504);var o=t(34064);const i={tabItem:"tabItem_Ymn6"};var r=t(17624);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.c)(i.tabItem,a),hidden:t,children:n})}},86212:(e,n,t)=>{t.d(n,{c:()=>k});var o=t(11504),i=t(34064),r=t(77288),a=t(55592),s=t(83472),l=t(95068),c=t(30604),d=t(46432);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.Uz)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._M)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[a,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,u]=p({queryString:t,groupId:i}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.IN)(t);return[i,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),x=(()=>{const e=c??v;return m({value:e,tabValues:r})?e:null})();(0,s.c)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(89788);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(17624);function j(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.MV)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==o&&(c(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.c)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.c)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=v(e);return(0,g.jsxs)("div",{className:(0,i.c)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function k(e){const n=(0,f.c)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},39564:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/multi-device-diagram-7c1be1770bde1ca3f564d30461460510.png"},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>a});var o=t(11504);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);