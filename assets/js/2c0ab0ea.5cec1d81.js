"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44248],{6824:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=o(17624),s=o(4552);const i={sidebar_position:3},r="Linux",l={id:"general/Troubleshooting/linux",title:"Linux",description:"Wayland",source:"@site/versioned_docs/version-0.13.1/general/07-Troubleshooting/linux.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/linux",permalink:"/docs/general/Troubleshooting/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/07-Troubleshooting/linux.md",tags:[],version:"0.13.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Jest",permalink:"/docs/general/Troubleshooting/jest"},next:{title:"macOS",permalink:"/docs/general/Troubleshooting/mac-os"}},a={},u=[{value:"Wayland",id:"wayland",level:2},{value:"libfuse2",id:"libfuse2",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"linux",children:"Linux"}),"\n",(0,t.jsx)(n.h2,{id:"wayland",children:"Wayland"}),"\n",(0,t.jsx)(n.p,{children:"We do not yet support the windowing system Wayland for any Linux distribution. So you\nare going to see multiple errors when trying to run AskUI instructions or may not even be able to\nstart the AskUI Controller."}),"\n",(0,t.jsx)(n.p,{children:"You can check if you are running on Wayland with"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"echo $XDG_SESSION_TYPE\n"})}),"\n",(0,t.jsx)(n.p,{children:'If it says "wayland", you guessed it, you are running on Wayland.'}),"\n",(0,t.jsxs)(n.p,{children:["As a solution, you can switch to Xorg instead of Wayland\n(",(0,t.jsx)(n.a,{href:"https://www.maketecheasier.com/switch-xorg-wayland-ubuntu1710/",children:"how to switch to Xorg"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"libfuse2",children:"libfuse2"}),"\n",(0,t.jsx)(n.p,{children:"If you are using Ubuntu 22.04 or later, you need to install libfuse before using AskUI lib\nsince it's no longer installed by default."}),"\n",(0,t.jsx)(n.p,{children:"libfuse2 can be installed with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update\nsudo apt-get install libfuse2\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>l,M:()=>r});var t=o(11504);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);