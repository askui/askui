"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39202],{37217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(85893),s=t(11151);const r={displayed_sidebar:"apiSidebar"},i="or",a={id:"api/Relations/or",title:"or",description:"production",source:"@site/versioned_docs/version-0.12.0/api/04-Relations/or.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/or",permalink:"/docs/0.12.0/api/Relations/or",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.0/api/04-Relations/or.md",tags:[],version:"0.12.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"nearestTo",permalink:"/docs/0.12.0/api/Relations/nearestto"},next:{title:"rightOf",permalink:"/docs/0.12.0/api/Relations/rightof"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"or",children:"or"}),"\n",(0,o.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.p,{children:"Logic or operator"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"scene 1\n--------------  ---------------\n|  button    |  |  icon       |\n--------------  ---------------\n\nscene 2\n--------------  ---------------\n|  button    |  |  text       |\n--------------  ---------------\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In case, that your reference element can have multiple values, in the following example, the element right of the button can be either icon or text.\nYou can use ",(0,o.jsxs)(n.strong,{children:["the ",(0,o.jsx)(n.code,{children:"or()"})," relation"]}),", so your instruction is valid for both scenes"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const button = await aui.get().button().rightOf().icon().or().text().exec();\nconsole.log(button);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Returns the same button for both cases"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:" console output: [\n  DetectedElement {\n     name: 'BUTTON',\n     text: 'button',\n     bndbox: BoundingBox {\n        xmin: 900,\n        ymin: 910,\n        xmax: 920,\n        ymax: 930\n     }\n  }\n ]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);