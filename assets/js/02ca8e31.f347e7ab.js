"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4959],{91105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(85893),s=t(11151);const i={sidebar_position:3},r="Linux",l={id:"general/Troubleshooting/linux",title:"Linux",description:"Wayland",source:"@site/docs/general/07-Troubleshooting/linux.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/linux",permalink:"/docs/next/general/Troubleshooting/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/07-Troubleshooting/linux.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Jest",permalink:"/docs/next/general/Troubleshooting/jest"},next:{title:"Windows",permalink:"/docs/next/general/Troubleshooting/windows"}},a={},u=[{value:"Wayland",id:"wayland",level:2},{value:"libfuse2",id:"libfuse2",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"linux",children:"Linux"}),"\n",(0,o.jsx)(n.h2,{id:"wayland",children:"Wayland"}),"\n",(0,o.jsx)(n.p,{children:"We do not yet support the windowing system Wayland for any Linux distribution. So you\nare going to see multiple errors when trying to run AskUI instructions or may not even be able to\nstart the UI Controller."}),"\n",(0,o.jsx)(n.p,{children:"You can check if you are running on Wayland with"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"echo $XDG_SESSION_TYPE\n"})}),"\n",(0,o.jsx)(n.p,{children:'If it says "wayland", you guessed it, you are running on Wayland.'}),"\n",(0,o.jsxs)(n.p,{children:["As a solution, you can switch to Xorg instead of Wayland\n(",(0,o.jsx)(n.a,{href:"https://www.maketecheasier.com/switch-xorg-wayland-ubuntu1710/",children:"how to switch to Xorg"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"libfuse2",children:"libfuse2"}),"\n",(0,o.jsx)(n.p,{children:"If you are using Ubuntu 22.04 or later, you need to install libfuse before using AskUI lib\nsince it's no longer installed by default."}),"\n",(0,o.jsx)(n.p,{children:"libfuse2 can be installed with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update\nsudo apt-get install libfuse2\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var o=t(67294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);