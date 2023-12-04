"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29361],{24074:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(85893),i=t(11151);const s={displayed_sidebar:"apiSidebar"},a="and",c={id:"api/Relations/and",title:"and",description:"Logic and operator",source:"@site/versioned_docs/version-0.7.2/api/04-Relations/and.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/and",permalink:"/docs/0.7.2/api/Relations/and",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.2/api/04-Relations/and.md",tags:[],version:"0.7.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"above",permalink:"/docs/0.7.2/api/Relations/above"},next:{title:"below",permalink:"/docs/0.7.2/api/Relations/below"}},r={},d=[];function l(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"and",children:"and"}),"\n",(0,o.jsx)(e.p,{children:"Logic and operator"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"example scene: \n ---------------   ----------------\n |  icon user  |   |  icon search |\n ---------------   ----------------```\n```typescript \nconst icons = await aui.get().icon().exec();\nconsole.log(icons);\n"})}),"\n",(0,o.jsx)(e.p,{children:"Using only the filter icon, the get command will return both icons"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"console output: [\n  DetectedElement {\n     name: 'ICON',\n     text: 'user',\n     bndbox: BoundingBox {\n        xmin: 1000,\n        ymin: 1010,\n        xmax: 1020,\n        ymax: 1030\n     }\n  },\n  DetectedElement {\n     name: 'ICON',\n     text: 'search',\n     bndbox: BoundingBox {\n        xmin: 900,\n        ymin: 910,\n        xmax: 920,\n        ymax: 930\n     }\n  }\n ]\n"})}),"\n",(0,o.jsxs)(e.p,{children:["You can combine filters with ",(0,o.jsxs)(e.strong,{children:["the ",(0,o.jsx)(e.code,{children:"and()"})," relation"]})," and specify exactly which icon you want"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"const icons = await aui.get().icon().and().withText('user').exec()\nconsole.log(icons)\n"})}),"\n",(0,o.jsx)(e.p,{children:"The get command returns only the user icon although both elements are icons"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:" console output: [\n  DetectedElement {\n     name: 'ICON',\n     text: 'user',\n     bndbox: BoundingBox {\n        xmin: 900,\n        ymin: 910,\n        xmax: 920,\n        ymax: 930\n     }\n  }\n ]\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>a});var o=t(67294);const i={},s=o.createContext(i);function a(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);