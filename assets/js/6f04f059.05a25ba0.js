"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87654],{33218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(85893),o=n(11151);const i={sidebar_position:5},r="Taking Screenshots",a={id:"general/Guides/taking-screenshots",title:"Taking Screenshots",description:"If you want to see what askui sees at a specific point in the execution you can use TypeScript to create a screenshot. Here is a code-snippet you can copy and paste into your code that saves an image with the name screenshot.png to the root-folder of your project.",source:"@site/versioned_docs/version-0.8.0/general/03-Guides/taking-screenshots.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/taking-screenshots",permalink:"/docs/0.8.0/general/Guides/taking-screenshots",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.8.0/general/03-Guides/taking-screenshots.md",tags:[],version:"0.8.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Recommended Practices",permalink:"/docs/0.8.0/general/Guides/recommended-practices"},next:{title:"Assertions",permalink:"/docs/0.8.0/general/Guides/assertions"}},c={},d=[];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"taking-screenshots",children:"Taking Screenshots"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to see what askui sees at a specific point in the execution you can use TypeScript to create a screenshot. Here is a code-snippet you can copy and paste into your code that saves an image with the name ",(0,s.jsx)(t.strong,{children:"screenshot.png"})," to the root-folder of your project."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Do not forget the import mentioned at the start of the snippet!"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// Add this to the start of your askui-file containing your workflows/instructions\nimport * as fs from 'fs';\n\n// First, get all the information from the annotation\n// This will also save an interactive HTML file to the 'report/' folder\nconst annotation = await aui.annotate();\n\n// The screenshot is contained as a string in 'base64' format\n// Create a buffer with the base64 image\nlet buf = Buffer.from(annotation.image.split('base64,')[1], 'base64');\n\n// Write the file \nfs.writeFileSync(\"./test.png\", buf);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);