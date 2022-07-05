"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78124],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(27378);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var f=n.createContext({}),c=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(f.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,f=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=l,m=u["".concat(f,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=u;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(25773),l=(r(27378),r(35318));const o={displayed_sidebar:"apiSidebar",custom_edit_url:null},a="leftOf",i={unversionedId:"api/Relations/leftof",id:"version-0.2.1/api/Relations/leftof",title:"leftOf",description:"Filters for an element left of another element.",source:"@site/versioned_docs/version-0.2.1/api/04-Relations/leftof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/leftof",permalink:"/docs/0.2.1/api/Relations/leftof",draft:!1,editUrl:null,tags:[],version:"0.2.1",frontMatter:{displayed_sidebar:"apiSidebar",custom_edit_url:null},sidebar:"apiSidebar"},f={},c=[],p={toc:c};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"leftof"},"leftOf"),(0,l.kt)("p",null,"Filters for an element left of another element."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------  --------------\n|  leftEl    |  |  rightEl   |\n--------------  --------------\n\n// Returns leftEl because leftEl is left of rightEl\n...leftEl().leftOf().rightEl()\n// Returns no element because rightEl is left of leftEl\n...rightEl().leftOf().leftEl()\n")))}s.isMDXComponent=!0}}]);