"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16161],{36500:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=n(17624),s=n(4552);const r={sidebar_position:4},i="Windows",l={id:"general/Troubleshooting/windows",title:"Windows",description:"AskUI UI Controller",source:"@site/versioned_docs/version-0.12.2/general/07-Troubleshooting/windows.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/windows",permalink:"/docs/0.12.2/general/Troubleshooting/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/general/07-Troubleshooting/windows.md",tags:[],version:"0.12.2",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Linux",permalink:"/docs/0.12.2/general/Troubleshooting/linux"},next:{title:"macOS",permalink:"/docs/0.12.2/general/Troubleshooting/mac-os"}},c={},a=[{value:"AskUI UI Controller",id:"askui-ui-controller",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(o.h2,{id:"askui-ui-controller",children:"AskUI UI Controller"}),"\n",(0,t.jsx)(o.p,{children:"On Windows, the AskUI UI Controller may not terminate after each execution. This may lead to problems when using the AskUI UI Controller in a pipeline like a pipeline's run not coming to an end."}),"\n",(0,t.jsxs)(o.p,{children:["In this case you can force termination of the AskUI UI Controller. The ",(0,t.jsx)(o.code,{children:"UiController.stop()"})," takes an optional boolean argument which is set to ",(0,t.jsx)(o.code,{children:"false"})," by default. If we pass ",(0,t.jsx)(o.code,{children:"true"})," to the ",(0,t.jsx)(o.code,{children:"UiController.stop()"})," method, e.g., ",(0,t.jsx)(o.code,{children:"uiController.stop(true)"}),", we kill the AskUI UI Controller process."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"await uiController.stop(true);\n"})}),"\n",(0,t.jsxs)(o.p,{children:["If you are using the Jest framework to execute your instructions, you can also force Jest to exit as described on our ",(0,t.jsx)(o.a,{href:"/docs/0.12.2/general/Troubleshooting/jest",children:"Jest-Troubleshooting page"}),". This option terminates all processes which were set up and didn't close properly. The first option explicitly stops the AskUI UI Controller."]})]})}function u(e={}){const{wrapper:o}={...(0,s.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,o,n)=>{n.d(o,{I:()=>l,M:()=>i});var t=n(11504);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);