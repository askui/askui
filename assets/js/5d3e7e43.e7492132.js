"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6156],{97436:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(17624),s=i(4552);const r={displayed_sidebar:"apiSidebar"},a="withTextRegex",o={id:"api/Element-Descriptions/withtextregex",title:"withTextRegex",description:"production",source:"@site/versioned_docs/version-0.12.2/api/03-Element-Descriptions/withtextregex.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/withtextregex",permalink:"/docs/0.12.2/api/Element-Descriptions/withtextregex",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/api/03-Element-Descriptions/withtextregex.md",tags:[],version:"0.12.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"withText",permalink:"/docs/0.12.2/api/Element-Descriptions/withtext"},next:{title:"above",permalink:"/docs/0.12.2/api/Relations/above"}},c={},d=[];function p(e){const t={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"withtextregex",children:"withTextRegex"}),"\n",(0,n.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Filters for texts, which match the regex pattern."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"'The rain in Spain' === withTextRegex('\\b[Ss]\\w+') => true\n'The rain in Portugal' === withTextRegex('\\b[Ss]\\w+') => false\n'The rain in switzerland' === withTextRegex('\\b[Ss]\\w+') => true\n\n// this filters any text that contains 'pie' or 'cake' or 'Pie' or 'Cake'\nawait aui.get().text().withTextRegex('.*([Pp]ie|[Cc]ake).*').exec();\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(50264).c+"",width:"800",height:"946"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"@param {string} regex_pattern - A regex pattern"}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},50264:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/withTextRegex-befaab3dfd28cf7228c0ef43ceaa6952.gif"},4552:(e,t,i)=>{i.d(t,{I:()=>o,M:()=>a});var n=i(11504);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);