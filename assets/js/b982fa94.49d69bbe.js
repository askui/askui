"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84684],{66860:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=s(17624),r=s(4552);const l={title:"2024.01.31 | AskUI Suite & Installer",slug:"release-2024-02-07",authors:["dominiquemader","leonmeier"],tags:["AskUI Development Environment (ADE)","AskUI Runner","AskUI Controller"],hide_table_of_contents:!1},t=void 0,o={permalink:"/release-notes/release-2024-02-07",source:"@site/blog/2024-02-07/2024-02-07.md",title:"2024.01.31 | AskUI Suite & Installer",description:"Introduction",date:"2024-02-07T00:00:00.000Z",formattedDate:"February 7, 2024",tags:[{label:"AskUI Development Environment (ADE)",permalink:"/release-notes/tags/ask-ui-development-environment-ade"},{label:"AskUI Runner",permalink:"/release-notes/tags/ask-ui-runner"},{label:"AskUI Controller",permalink:"/release-notes/tags/ask-ui-controller"}],readingTime:2.48,hasTruncateMarker:!1,authors:[{name:"Dominique Mader",title:"Head of Software Engineering",email:"dominique.mader@askui.com",imageURL:"/img/dominiquemader.jpeg",key:"dominiquemader"},{name:"Leon Meier",title:"Head of Product",email:"leon.meier@askui.com",imageURL:"/img/leonmeier.jpeg",key:"leonmeier"}],frontMatter:{title:"2024.01.31 | AskUI Suite & Installer",slug:"release-2024-02-07",authors:["dominiquemader","leonmeier"],tags:["AskUI Development Environment (ADE)","AskUI Runner","AskUI Controller"],hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"2024.01.31 | OCR Model Enhancement",permalink:"/release-notes/release-2024-01-31"}},d={authorsImageUrls:[void 0,void 0]},a=[{value:"Introduction",id:"introduction",level:2},{value:"General",id:"general",level:2},{value:"<strong>Installer for Windows</strong>",id:"installer-for-windows",level:3},{value:"New Features",id:"new-features",level:2},{value:"In Preview",id:"in-preview",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Changes",id:"changes",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Installation Dependencies",id:"installation-dependencies",level:3},{value:"<strong>Mouse Movement</strong>",id:"mouse-movement",level:3},{value:"<strong>Log Files</strong>",id:"log-files",level:3},{value:"<strong>Android</strong>",id:"android",level:3},{value:"Versions",id:"versions",level:2},{value:"Components and Packages",id:"components-and-packages",level:3},{value:"3rd Party Versions",id:"3rd-party-versions",level:3},{value:"Recommended First-Time User Journey",id:"recommended-first-time-user-journey",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"AskUI  offers a hassle-free installation experience for its products via a user-friendly installer. This installer facilitates the seamless installation of AskUI products with just a few clicks."}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.h3,{id:"installer-for-windows",children:(0,i.jsx)(n.strong,{children:"Installer for Windows"})}),"\n",(0,i.jsx)(n.p,{children:"The installer contains a number of new and modified dialogs. Furthermore, it contains additional components."}),"\n",(0,i.jsxs)(n.p,{children:["More information can be found ",(0,i.jsx)(n.a,{href:"../../docs/general/Getting%20Started/Installing%20AskUI/getting-started",children:"here"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,i.jsx)(n.p,{children:"We introduced a couple of new features."}),"\n",(0,i.jsx)(n.h3,{id:"in-preview",children:"In Preview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../../docs/general/Components/AskUI-Development-Environment",children:"AskUI Development Environment (ADE)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Introduces environment management"}),"\n",(0,i.jsx)(n.li,{children:"Project management"}),"\n",(0,i.jsx)(n.li,{children:"Dependency installation"}),"\n",(0,i.jsx)(n.li,{children:"Shell"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../docs/general/Components/AskUI-Runner",children:"AskUI Runner"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../docs/general/Components/AskUI-Controller",children:"AskUI Controller"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,i.jsx)(n.p,{children:"No functional improvements were made."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"changes",children:"Changes"}),"\n",(0,i.jsxs)(n.p,{children:["AskUI Controller logs into ",(0,i.jsx)(n.code,{children:"~/.askui/"})," folder."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(n.p,{children:"CO-594: Caused issues in certain multi-display scenarios with mouse movement."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,i.jsx)(n.h3,{id:"installation-dependencies",children:"Installation Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AskUI Development Kit (former AskUI-Lib) is not included in the installer. It will be downloaded during the setup process."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"mouse-movement",children:(0,i.jsx)(n.strong,{children:"Mouse Movement"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You may encounter issues when mouse pointer acceleration is enabled."}),"\n",(0,i.jsx)(n.li,{children:"There might be issues with the mouse movement when it tries to move to invalid coordinates."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"log-files",children:(0,i.jsx)(n.strong,{children:"Log Files"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Log files diskspace usage increased. They are stored in ",(0,i.jsx)(n.code,{children:"~/.askui/"})," and can be deleted if that causes any issues."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"android",children:(0,i.jsx)(n.strong,{children:"Android"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Recording on an Android device is not stable."}),"\n",(0,i.jsx)(n.li,{children:"Recorded resolution might be lower than the device resolution."}),"\n",(0,i.jsx)(n.li,{children:"Recorded video might be empty or single frame in cases no screen updates occurred during recording."}),"\n",(0,i.jsx)(n.li,{children:"We don't support landscape mode on Android."}),"\n",(0,i.jsx)(n.li,{children:"Devices with high DPI screen might not work as expected."}),"\n",(0,i.jsx)(n.li,{children:"Video recording on MacOS is not supported."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"versions",children:"Versions"}),"\n",(0,i.jsx)(n.h3,{id:"components-and-packages",children:"Components and Packages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["AskUI Controller","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AskUI Controller: v0.2.0.0 Preview"}),"\n",(0,i.jsx)(n.li,{children:"AskUI Legacy UI Controller: 0.13.0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"AskUI Runner: 0.1.4"}),"\n",(0,i.jsx)(n.li,{children:"AskUI Development Environment (ADE)"}),"\n",(0,i.jsx)(n.li,{children:"AskUI Development Kit (ADK)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3rd-party-versions",children:"3rd Party Versions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Node.JS: 21.0.0"}),"\n",(0,i.jsx)(n.li,{children:"PowerShell 7.3.8"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"recommended-first-time-user-journey",children:"Recommended First-Time User Journey"}),"\n",(0,i.jsx)(n.p,{children:"To ensure a smooth onboarding experience, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Download and Install:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Download and install the installer"}),"\n",(0,i.jsx)(n.li,{children:"Run the installer."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Initialization:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the Command Prompt."}),"\n",(0,i.jsxs)(n.li,{children:["Type ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"askui-shell"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configuration (First-Time Usage):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure AskUI settings:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Type ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"AskUI-SetSettings -WorkspaceId <askui_workspace_id> -Token <askui_token>"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional for Proxy Users) Type ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"AskUI-SetSettings -HttpProxy <http_proxy_address> -HttpsProxy <https_proxy_address>"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Verify Settings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"AskUI-ShowSettings"})})," to verify the configured settings."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create a New Project:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a new project by typing ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"AskUI-NewProject"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start AskUI Controller:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["Note: You can skip this if you selected ",(0,i.jsx)(n.strong,{children:"Launch AskUI Controller"})," at the installation wizard."]})}),"\n",(0,i.jsxs)(n.li,{children:["Start the AskUI Controller in background mode by typing ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"AskUI-StartController -RunInBackground"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Project Editing (Optional):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the project directory and starts editing the project."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"You have to disable mouse acceleration for the AskUI Controller to work properly!"})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Run the Project:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the project by typing ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"AskUI-RunProject"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By following these steps, the user can efficiently set up AskUI Suite, configure essential settings, and seamlessly create and run projects."})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>t});var i=s(11504);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);