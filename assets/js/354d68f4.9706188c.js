"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40924],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(25773),i=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},o="text",c={unversionedId:"api/Element-Descriptions/text",id:"api/Element-Descriptions/text",title:"text",description:"production",source:"@site/docs/api/03-Element-Descriptions/text.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/text",permalink:"/docs/next/api/Element-Descriptions/text",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/03-Element-Descriptions/text.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"table",permalink:"/docs/next/api/Element-Descriptions/table"},next:{title:"textfield",permalink:"/docs/next/api/Element-Descriptions/textfield"}},p={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text"},"text"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Filters for an UI element 'text'."),(0,i.kt)("p",null,"Often combined with the filter ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," as shown in the below examples.\nSee also the filters ",(0,i.kt)("inlineCode",{parentName:"p"},"withTextRegex()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.click().text().withText('Password').exec();\nawait aui.click().text().withExactText('Username').exec();\nawait aui.click().text().withTextRegex('\\b[Ss]\\w+').exec();\n")))}u.isMDXComponent=!0}}]);