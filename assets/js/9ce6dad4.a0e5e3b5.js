"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85897],{21019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(85893),a=t(11151);const r={sidebar_position:5},i="Scraping and Storing Elements",o={id:"general/Element Selection/scraping-and-storing-lements",title:"Scraping and Storing Elements",description:"In this guide you will learn how to extract elements and their values out of your User Interface.",source:"@site/versioned_docs/version-0.12.1/general/03-Element Selection/scraping-and-storing-lements.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/scraping-and-storing-lements",permalink:"/docs/0.12.1/general/Element Selection/scraping-and-storing-lements",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.1/general/03-Element Selection/scraping-and-storing-lements.md",tags:[],version:"0.12.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Prompt Selectors",permalink:"/docs/0.12.1/general/Element Selection/prompt-selectors"},next:{title:"Tables",permalink:"/docs/0.12.1/general/Element Selection/tables"}},l={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Extract the Value",id:"extract-the-value",level:2},{value:"Use Extracted Value as Input",id:"use-extracted-value-as-input",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"scraping-and-storing-elements",children:"Scraping and Storing Elements"}),"\n",(0,s.jsx)(n.p,{children:"In this guide you will learn how to extract elements and their values out of your User Interface."}),"\n",(0,s.jsx)(n.p,{children:"We will also cover on how to use the extracted information in your code, so you can introduce real interactivity into your workflow."}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/0.12.1/api/Getters/get",children:"get()"}),"-Instruction returns an array of all the elements it found. It looks like this example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:" console output: [\n  DetectedElement {\n     name: 'TEXT',\n     text: 'Sign In',\n     bndbox: BoundingBox {\n        xmin: 1128.2720982142857,\n        ymin: 160.21332310267857,\n        xmax: 1178.8204241071428,\n        ymax: 180.83512834821428\n     }\n   },\n   ...\n ]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Usually you do not want every element from your UI returned. So you pair it with an element-selector:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const textFieldText = \n  await aui\n    .get()\n    .text()\n    .in()\n    .textfield()\n    .exec();\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"[\n  DetectedElement {\n    name: 'text',\n    text: 'Search',\n    bndbox: BoundingBox { xmin: 488, ymin: 138, xmax: 548, ymax: 164 },\n    colors: [ '', '', '' ]\n  }\n]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"extract-the-value",children:"Extract the Value"}),"\n",(0,s.jsxs)(n.p,{children:["You can extract the value by reading the ",(0,s.jsx)(n.code,{children:"text"}),"-property of the ",(0,s.jsx)(n.code,{children:"DetectedElement"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Notice: ",(0,s.jsx)(n.code,{children:"textFieldText"})," is an array. You have to iterate over it or use an index to access the ",(0,s.jsx)(n.code,{children:"DetectedElement"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Access by index\n// textFieldTextValue gets the value 'Search'\nconst textFieldTextValue = textFieldText?.[0]?.text;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"use-extracted-value-as-input",children:"Use Extracted Value as Input"}),"\n",(0,s.jsx)(n.p,{children:"You can use the extracted value as input for another textfield for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'await aui\n  .typeIn(textFieldTextValue)\n  .textfield()\n  .contains()\n  .text()\n  .withText("AskUI")\n  .exec();\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(67294);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);