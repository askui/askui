"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16177],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(25773),a=(n(27378),n(35318));const o={displayed_sidebar:"apiSidebar"},i="element",s={unversionedId:"api/Element-Descriptions/element",id:"version-0.11.5/api/Element-Descriptions/element",title:"element",description:"production",source:"@site/versioned_docs/version-0.11.5/api/03-Element-Descriptions/element.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/element",permalink:"/docs/api/Element-Descriptions/element",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.5/api/03-Element-Descriptions/element.md",tags:[],version:"0.11.5",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},l=[],p={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"element"},"element"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Filters for any UI element on the screen. Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"element()")," itself doesn't describe any particular property of the element, in most cases, it must be used in combination with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Relations/above"},"relational descriptions")," such as ",(0,a.kt)("inlineCode",{parentName:"p"},"above()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"below()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"nearestTo()")," etc."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.moveMouseTo().element().below().text('Layers').exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(13272).Z,width:"398",height:"400"})))}m.isMDXComponent=!0},13272:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/element-068ea757cca6bb302459d218eff75420.gif"}}]);