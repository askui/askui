"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58832],{36228:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=i(17624),s=i(4552);const r={displayed_sidebar:"apiSidebar"},a="withText",c={id:"api/Element-Descriptions/withtext",title:"withText",description:"production",source:"@site/versioned_docs/version-0.13.1/api/03-Element-Descriptions/withtext.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/withtext",permalink:"/docs/0.13.1/api/Element-Descriptions/withtext",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/api/03-Element-Descriptions/withtext.md",tags:[],version:"0.13.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"withExactText",permalink:"/docs/0.13.1/api/Element-Descriptions/withexacttext"},next:{title:"withTextRegex",permalink:"/docs/0.13.1/api/Element-Descriptions/withtextregex"}},o={},l=[];function x(t){const e={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"withtext",children:"withText"}),"\n",(0,n.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(e.p,{children:"Filters for similar -- meaning >70% similar -- text."}),"\n",(0,n.jsx)(e.p,{children:"Takes an optional parameter to specify the similarity. Usually you need the optional parameter for long texts you want to match precisely."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.em,{children:["We use ",(0,n.jsx)(e.a,{href:"https://maxbachmann.github.io/RapidFuzz/Usage/fuzz.html#ratio",children:"RapidFuzz"})," which calculates the similarity like this:"]})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"1 - (distance / (lengthString1 + lengthString2))"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-typescript",children:"'text' === withText('text') => true\n'test' === withText('text') => true\n'Test' === withText('text') => true\n'Text' === withText('text') => true\n'TEXT' === withText('text') => true\n'texst' === withText('text') => true\n'texts' === withText('text') => true\n\n'atebxtc' === withText('text') => false\n'other' === withText('text') => false\n\n// optional parameter: similarity_score\n'978-0-201-00650-6' == withText(\"978-0-201-00\", 90) => false with 82.76 < 90 similarity\n'978-0-201-00650-6' == withText(\"978-0-201-00650\", 90) => true with 93.75 > 90 similarity\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(3451).c+"",width:"640",height:"360"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"@param {string} text - A text to be matched."}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,s.M)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(x,{...t})}):x(t)}},3451:(t,e,i)=>{i.d(e,{c:()=>n});const n=i.p+"assets/images/withText-89a3b4d3a0254f057f1f6ee3d9220b11.gif"},4552:(t,e,i)=>{i.d(e,{I:()=>c,M:()=>a});var n=i(11504);const s={},r=n.createContext(s);function a(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);