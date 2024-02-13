"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5480],{14844:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=i(17624),r=i(4552);const s={},t="Remote Device Controller",l={id:"api/Remote-Device-Controller",title:"Remote Device Controller",description:"The remote device controller is currently in preview release and only works on Windows and for Android devices controlled from a Windows machine.",source:"@site/versioned_docs/version-0.13.1/api/09-Remote-Device-Controller.md",sourceDirName:"api",slug:"/api/Remote-Device-Controller",permalink:"/docs/api/Remote-Device-Controller",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/api/09-Remote-Device-Controller.md",tags:[],version:"0.13.1",sidebarPosition:9,frontMatter:{},sidebar:"apiSidebar",previous:{title:"askui UI Controller",permalink:"/docs/api/Configuration/askui-ui-controller"},next:{title:"Supported Keys",permalink:"/docs/api/Supported-Keys"}},d={},c=[{value:"Introduction &amp; Setup",id:"introduction--setup",level:2},{value:"Installer",id:"installer",level:3},{value:"Manual Update of Remote Device Controller",id:"manual-update-of-remote-device-controller",level:3},{value:"Features",id:"features",level:2},{value:"Type Like a Human",id:"type-like-a-human",level:3},{value:"Android on Windows",id:"android-on-windows",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Mouse Movement",id:"mouse-movement",level:3},{value:"Log Files",id:"log-files",level:3},{value:"Android",id:"android",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"remote-device-controller",children:"Remote Device Controller"}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["The remote device controller is currently in ",(0,o.jsx)(n.strong,{children:"preview"})," release and only works on ",(0,o.jsx)(n.strong,{children:"Windows"})," and for ",(0,o.jsx)(n.strong,{children:"Android"})," devices controlled from a ",(0,o.jsx)(n.strong,{children:"Windows"})," machine."]}),(0,o.jsxs)(n.p,{children:["The installer only works on ",(0,o.jsx)(n.strong,{children:"Windows"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"introduction--setup",children:"Introduction & Setup"}),"\n",(0,o.jsx)(n.h3,{id:"installer",children:"Installer"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download the installer from ",(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/preview/v23.10.01/askui+Installer.exe",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Start the installer and follow the installation process."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: Installation requires administrator rights."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a new AskUI project as ",(0,o.jsx)(n.a,{href:"/docs/general/Getting%20Started/getting-started",children:"described in our documentation"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Open file ",(0,o.jsx)(n.code,{children:"test/helpers/askui-helper.ts"})," in the AskUI project."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Remove ",(0,o.jsx)(n.code,{children:"await uiController.start();"})," in ",(0,o.jsx)(n.code,{children:"beforeAll"})," function."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Remove ",(0,o.jsx)(n.code,{children:"await uiController.stop();"})," in ",(0,o.jsx)(n.code,{children:"afterAll"})," function."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Start the installed ",(0,o.jsx)(n.strong,{children:"Remote Device Controller"})," manually and select the screen you want to use."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: Either through the start menu, desktop shortcut or the executable in the install directory."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"You should be good to go now to run your workflows as described in documentation."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: Ensure that the ",(0,o.jsx)(n.strong,{children:"Remote Device Controller"})," is running before you start a workflow."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"manual-update-of-remote-device-controller",children:"Manual Update of Remote Device Controller"}),"\n",(0,o.jsx)(n.p,{children:"Make use of our preview build to use the latest features by following the mentioned steps below."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Go to function ",(0,o.jsx)(n.code,{children:"beforeAll"})," there you must modify in file ",(0,o.jsx)(n.code,{children:"test/helpers/askui-helper.ts"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure that you have the required import ",(0,o.jsx)(n.code,{children:"UiController"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"import { UiController } from 'askui';"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Also add the global variable if it is missing:"}),"\n",(0,o.jsx)(n.p,{children:"let uiController: UiController;"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Modify the creation of ",(0,o.jsx)(n.code,{children:"uiController"})," in file ",(0,o.jsx)(n.code,{children:"test/helpers/jest.setup.ts"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"uiController = new UiController({\n/**"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Select the display you want to run your tests on, display 0 is your main display;"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'ignore if you have only one display\n*/\ndisplay: <YOUR_DISPLAY_ID>,\nbinaryVersion: "tdk-23.10.1-preview-release-1"\n});'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: The ui controller creation starts typically with ",(0,o.jsx)(n.code,{children:"uiController = await UiController({ ..."})," but the instance name might be different."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"\\<YOUR_DISPLAY_ID>"})," with the display (starting with 0 for the first display) that you want to use:"]}),"\n",(0,o.jsx)(n.p,{children:"display: <YOUR_DISPLAY_ID>,"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure that the controller gets started before the UI controller client tries (",(0,o.jsx)(n.code,{children:"aui"}),") to connect. Therefore the last two lines of the function should do:"]}),"\n",(0,o.jsx)(n.p,{children:"await uiController.start();\nawait aui.connect();"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: The ui controller client creation starts typically with ",(0,o.jsx)(n.code,{children:"aui = await UiControlClient.build({ ..."})," but the instance name might be different."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure that in function ",(0,o.jsx)(n.code,{children:"afterAll"})," the controller gets stopped after the ui controller client closes the connection:"]}),"\n",(0,o.jsx)(n.p,{children:"aui.disconnect();\nawait uiController.stop(true);"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"You should be good to go now to run your workflows as described in documentation."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: New features are only supported on Windows 10/11."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,o.jsx)(n.h3,{id:"type-like-a-human",children:"Type Like a Human"}),"\n",(0,o.jsx)(n.p,{children:"Together with the asynchronous execution of actions we also introduce natural typing. The\nfirst iteration of this feature uses the typical typing speed of a human."}),"\n",(0,o.jsx)(n.h3,{id:"android-on-windows",children:"Android on Windows"}),"\n",(0,o.jsxs)(n.p,{children:["AskUI automation works on an Android device that is controlled from a Windows machine. It allows you to run a workflow on an Android device, including recording the session. Instructions how to setup the Android workflow can be found in our ",(0,o.jsx)(n.a,{href:"/docs/general/Executing%20Automations/mobile-automation#android",children:"documentation"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Please also read the knows issues section since this is just a preview feature."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,o.jsx)(n.h3,{id:"mouse-movement",children:"Mouse Movement"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You may encounter issues when mouse pointer acceleration is enabled."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"log-files",children:"Log Files"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Log files are stored under ",(0,o.jsx)(n.code,{children:"<YOUR_USER_FOLDER>/.askui/"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Recording on an Android device is not stable."}),"\n",(0,o.jsx)(n.li,{children:"Recorded resolution might be lower than the device resolution."}),"\n",(0,o.jsx)(n.li,{children:"Recorded video might be empty or single frame in cases no screen updates occurred during recording."}),"\n",(0,o.jsx)(n.li,{children:"We don't support landscape mode on Android."}),"\n",(0,o.jsx)(n.li,{children:"Devices with high DPI screen might not work as expected."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>t});var o=i(11504);const r={},s=o.createContext(r);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);