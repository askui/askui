"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57253],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(25773),i=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},o="withTextRegex",s={unversionedId:"api/Element-Descriptions/withtextregex",id:"version-0.11.4/api/Element-Descriptions/withtextregex",title:"withTextRegex",description:"production",source:"@site/versioned_docs/version-0.11.4/api/03-Element-Descriptions/withtextregex.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/withtextregex",permalink:"/docs/0.11.4/api/Element-Descriptions/withtextregex",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.4/api/03-Element-Descriptions/withtextregex.md",tags:[],version:"0.11.4",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},p=[],l={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withtextregex"},"withTextRegex"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Filters for texts, which match the regex pattern."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"'The rain in Spain' === withTextRegex('\\b[Ss]\\w+') => true\n'The rain in Portugal' === withTextRegex('\\b[Ss]\\w+') => false\n'The rain in switzerland' === withTextRegex('\\b[Ss]\\w+') => true\n\n// this filters any text that contains 'pie' or 'cake' or 'Pie' or 'Cake'\nawait aui.get().text().withTextRegex('.*([Pp]ie|[Cc]ake).*').exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(33536).Z,width:"800",height:"946"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {string} regex_pattern - A regex pattern")))}u.isMDXComponent=!0},33536:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/withTextRegex-befaab3dfd28cf7228c0ef43ceaa6952.gif"}}]);