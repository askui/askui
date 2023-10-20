"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78708],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(25773),i=(n(27378),n(35318));const a={sidebar_position:2},r="Multi Device Automation",l={unversionedId:"general/Executing Automations/multi-device-automation",id:"version-0.12.2/general/Executing Automations/multi-device-automation",title:"Multi Device Automation",description:"This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this tutorial, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android.",source:"@site/versioned_docs/version-0.12.2/general/04-Executing Automations/multi-device-automation.md",sourceDirName:"general/04-Executing Automations",slug:"/general/Executing Automations/multi-device-automation",permalink:"/docs/general/Executing Automations/multi-device-automation",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/general/04-Executing Automations/multi-device-automation.md",tags:[],version:"0.12.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Single Device Automation",permalink:"/docs/general/Executing Automations/single-device-automation"},next:{title:"Web Automation",permalink:"/docs/general/Executing Automations/web-automation"}},s={},c=[{value:"1. Download and Prepare the <code>askui-ui-controller</code> Binary for Each Device",id:"1-download-and-prepare-the-askui-ui-controller-binary-for-each-device",level:2},{value:"Android Only:",id:"android-only",level:3},{value:"2. Configure the <code>jest.setup.ts</code>",id:"2-configure-the-jestsetupts",level:2},{value:"3. Run the Controller on Each Device",id:"3-run-the-controller-on-each-device",level:2},{value:"Android Only:",id:"android-only-1",level:3},{value:"4. Write the AskUI Code",id:"4-write-the-askui-code",level:2},{value:"5. Run the Code",id:"5-run-the-code",level:2},{value:"6. Conclusion",id:"6-conclusion",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-device-automation"},"Multi Device Automation"),(0,i.kt)("p",null,"This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this tutorial, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android."),(0,i.kt)("p",null,"\ud83d\udccc ",(0,i.kt)("em",{parentName:"p"},"The following tutorial assumes that you have already installed and set up the AskUI library on your local device. The code for the configuration is based on the generated code. See ",(0,i.kt)("a",{parentName:"em",href:"/docs/general/Getting%20Started/write-your-first-instruction"},"Getting Started")," for more details.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"multi-device-automation",src:n(8028).Z,width:"1280",height:"882"})),(0,i.kt)("h2",{id:"1-download-and-prepare-the-askui-ui-controller-binary-for-each-device"},"1. Download and Prepare the ",(0,i.kt)("inlineCode",{parentName:"h2"},"askui-ui-controller")," Binary for Each Device"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the binary/binaries for the respective platform(s):","  ",(0,i.kt)("a",{parentName:"li",href:"https://files.askui.com/releases/askui-ui-controller/latest/win32/x64/askui-ui-controller.exe"},"Windows")," | ",(0,i.kt)("a",{parentName:"li",href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg"},"macOS(intel)")," | ",(0,i.kt)("a",{parentName:"li",href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg"},"macOS(silicon)")," | ",(0,i.kt)("a",{parentName:"li",href:"https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage"},"Linux"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"macOS")," and ",(0,i.kt)("strong",{parentName:"p"},"Linux")," only: If you downloaded the ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-ui-controller")," manually from the link above, you have to make it executable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"macOS"),": Mount the downloaded ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-ui-controller.dmg")," by double-clicking it and copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-ui-controller.app")," to wherever you want to store it. Then, the executable binary will be within the ",(0,i.kt)("inlineCode",{parentName:"p"},".app")," package:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"askui-ui-controller.app/Contents/MacOS/askui-ui-controller\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Linux"),": Run the command below to make it executable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x askui-ui-controller.AppImage\n")))),(0,i.kt)("p",null,"If the remote devices runs Android, see ",(0,i.kt)("a",{parentName:"p",href:"#android-only"},"Android Only"),"."),(0,i.kt)("h3",{id:"android-only"},"Android Only:"),(0,i.kt)("p",null,"Prepare your Android device with ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/Executing%20Automations/mobile-automation#android"},"this tutorial"),"."),(0,i.kt)("p",null,"Use the commands below, if you want to connect your Android device via ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," wirelessly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Connect the Android device with a\n# USB cable, and run this command:\n\n# Run this command to confirm that your\n# Android device is discoverable\nadb devices # will print the <device-id>\n\n# replace <device-id> with your device-id\nadb -s <device-id> tcpip 9000\n\n# replace the <local-ip-address>\nadb -s <device-id> connect <local-ip-address>:9000\n\n# Run this command, if you want to check the local\n# ip address of the android device\nadb -s <device-id> shell ip -f inet addr show wlan0\n\n# Now you can disconnect the USB cable from the Android device.\n# Confirm that the Android device is recognised by adb wirelessly.\nadb devices\n")),(0,i.kt)("h2",{id:"2-configure-the-jestsetupts"},"2. Configure the ",(0,i.kt)("inlineCode",{parentName:"h2"},"jest.setup.ts")),(0,i.kt)("p",null,"Figure out the local IP address of the remote device, and then change the ",(0,i.kt)("inlineCode",{parentName:"p"},"<local-ip-address>")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.setup.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { UiControlClient, UiController } from 'askui';\n\nlet localDevice: UiControlClient;\nlet remoteDevice: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n\n// Get your AskUI credentials from https://app.askui.com/workspaces\nconst credentials = {\n    workspaceId: '<your-workspace-id>',\n    token: '<your-token>',\n}\n\n// This client will communicate with\n// the controller running on this local device.\nlocalDevice = await UiControlClient.build({ \n    uiControllerUrl: \"ws://127.0.0.1:6769\",\n    credentials: credentials,\n});\n\nawait localDevice.connect();\n\n// This client will communicate with\n// the controller running on the remote device.\n// Replace the <local-ip-address>\n// In case of Android device, replace it with 127.0.0.1\nremoteDevice = await UiControlClient.build({    \n    uiControllerUrl: \"ws://<local-ip-address>:6769\", \n    credentials: credentials,\n});\n\nawait remoteDevice.connect();\n});\n\nafterAll(async () => {\n    localDevice.close();\n    remoteDevice.close();\n});\n\nexport { localDevice, remoteDevice };\n")),(0,i.kt)("h2",{id:"3-run-the-controller-on-each-device"},"3. Run the Controller on Each Device"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Change to the directory of the ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-ui-controller")," binary first: See ",(0,i.kt)("a",{parentName:"p",href:"#1-download-and-prepare-the-askui-ui-controller-binary-for-each-device"},"Download and Prepare step"),".")),(0,i.kt)("p",null,"Run the binary ",(0,i.kt)("em",{parentName:"p"},"AskUI UI Controller")," on the local and remote devices with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows powershell\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m\n\n# Windows cmd\nstart askui-ui-controller.exe --host 0.0.0.0 -d 0 -m\n\n# macOS\n./askui-ui-controller --host 0.0.0.0 -d 0 -m\n\n# Linux\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m    \n")),(0,i.kt)("p",null,"If running successfully, you should see the logs printed on the terminal, e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[2023-01-02 17:31:19.634 +0100] DEBUG (AskuiUiController): Window is minimized.\n[2023-01-02 17:31:19.639 +0100] INFO (AskuiUiController): Selecting display number 0.\n[2023-01-02 17:31:19.641 +0100] INFO (AskuiUiController): Successfully started.\n")),(0,i.kt)("h3",{id:"android-only-1"},"Android Only:"),(0,i.kt)("p",null,"If your remote device is an Android device, run the ",(0,i.kt)("em",{parentName:"p"},"AskUI UI Controller")," on the ",(0,i.kt)("strong",{parentName:"p"},"local device (desktop)")," with an extra option as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows powershell\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\n\n# Windows cmd\nstart askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\n\n# macOS\n./askui-ui-controller --host 0.0.0.0 -d 0 -m -r android\n\n# Linux\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m -r android\n")),(0,i.kt)("p",null,"Make sure that your local device (desktop) is running ",(0,i.kt)("strong",{parentName:"p"},"TWO DIFFERENT ",(0,i.kt)("inlineCode",{parentName:"strong"},"askui-ui-controller")),", if you want to control the local device and the Android device at the same time."),(0,i.kt)("h2",{id:"4-write-the-askui-code"},"4. Write the AskUI Code"),(0,i.kt)("p",null,"Write the AskUI code in ",(0,i.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { localDevice, remoteDevice } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n    it('should work with multiple devices', async () => {\n        const everyElement_remote = await remoteDevice.getAll().exec();\n        console.log(everyElement_remote);\n\n        await localDevice.moveMouse(500,500).exec();\n        const everyElement_local = await localDevice.getAll().exec();\n        console.log(everyElement_local);\n    });\n});\n")),(0,i.kt)("h2",{id:"5-run-the-code"},"5. Run the Code"),(0,i.kt)("p",null,"Run the command below to run the AskUI code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n")),(0,i.kt)("h2",{id:"6-conclusion"},"6. Conclusion"),(0,i.kt)("p",null,"Now you should be able to automate multiple devices in the network. If you got any issues while following this tutorial, don't hesitate to ask our ",(0,i.kt)("a",{parentName:"p",href:"https://app.outverse.com/askui/community/home"},"Outverse-Community"),"!"))}d.isMDXComponent=!0},8028:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/multi-device-diagram-7c1be1770bde1ca3f564d30461460510.png"}}]);