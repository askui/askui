"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7856],{64012:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(17624),t=n(4552);const i={sidebar_position:4},r="Windows",l={id:"general/Troubleshooting/windows",title:"Windows",description:"AskUI Controller Not Responding to Instructions",source:"@site/docs/general/07-Troubleshooting/windows.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/windows",permalink:"/docs/next/general/Troubleshooting/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/07-Troubleshooting/windows.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Linux",permalink:"/docs/next/general/Troubleshooting/linux"},next:{title:"macOS",permalink:"/docs/next/general/Troubleshooting/mac-os"}},c={},a=[{value:"AskUI Controller Not Responding to Instructions",id:"askui-controller-not-responding-to-instructions",level:2},{value:"Execution Policy in PowerShell Blocks Commands",id:"execution-policy-in-powershell-blocks-commands",level:2},{value:"AskUI Controller",id:"askui-controller",level:2}];function d(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(o.h2,{id:"askui-controller-not-responding-to-instructions",children:"AskUI Controller Not Responding to Instructions"}),"\n",(0,s.jsxs)(o.p,{children:["A possible solution is to start the ",(0,s.jsx)(o.strong,{children:"AskUI Controller"})," as administrator:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Right-Click the application and click ",(0,s.jsx)(o.strong,{children:"Run as administrator"})]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsxs)(o.em,{children:["Background: When you start the ",(0,s.jsx)(o.strong,{children:"AskUI Controller"})," and during the execution another process is started AND it is an admin process, the controller stops executing instructions."]})}),"\n",(0,s.jsx)(o.h2,{id:"execution-policy-in-powershell-blocks-commands",children:"Execution Policy in PowerShell Blocks Commands"}),"\n",(0,s.jsxs)(o.p,{children:["When you try to execute commands inside ",(0,s.jsx)(o.em,{children:"PowerShell"})," it may not be possible due to a restrictive ",(0,s.jsx)(o.a,{href:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.4",children:(0,s.jsx)(o.em,{children:"Execution Policy"})}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["You can set the ",(0,s.jsx)(o.em,{children:"Execution Policy"})," inside the PowerShell with the following command if you have the necessary permissions:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"Set-ExecutionPolicy unrestricted\n"})}),"\n",(0,s.jsx)(o.h2,{id:"askui-controller",children:"AskUI Controller"}),"\n",(0,s.jsx)(o.p,{children:"On Windows, the AskUI Controller may not terminate after each execution. This may lead to problems when using the AskUI Controller in a pipeline like a pipeline's run not coming to an end."}),"\n",(0,s.jsxs)(o.p,{children:["In this case you can force termination of the AskUI Controller. The ",(0,s.jsx)(o.code,{children:"UiController.stop()"})," takes an optional boolean argument which is set to ",(0,s.jsx)(o.code,{children:"false"})," by default. If we pass ",(0,s.jsx)(o.code,{children:"true"})," to the ",(0,s.jsx)(o.code,{children:"UiController.stop()"})," method, e.g., ",(0,s.jsx)(o.code,{children:"uiController.stop(true)"}),", we kill the AskUI Controller process."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-typescript",children:"await uiController.stop(true);\n"})}),"\n",(0,s.jsxs)(o.p,{children:["If you are using the Jest framework to execute your instructions, you can also force Jest to exit as described on our ",(0,s.jsx)(o.a,{href:"/docs/next/general/Troubleshooting/jest",children:"Jest-Troubleshooting page"}),". This option terminates all processes which were set up and didn't close properly. The first option explicitly stops the AskUI Controller."]})]})}function h(e={}){const{wrapper:o}={...(0,t.M)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,o,n)=>{n.d(o,{I:()=>l,M:()=>r});var s=n(11504);const t={},i=s.createContext(t);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);