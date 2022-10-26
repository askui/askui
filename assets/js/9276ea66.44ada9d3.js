"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46553],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={displayed_sidebar:"apiSidebar"},i="waitFor",s={unversionedId:"api/Commands/waitfor",id:"version-0.4.0/api/Commands/waitfor",title:"waitFor",description:"Waits for ` ms, e.g., 1000 ms. The exact delay may be a little longer than ` but never shorter than that.",source:"@site/versioned_docs/version-0.4.0/api/02-Commands/waitfor.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/waitfor",permalink:"/docs/api/Commands/waitfor",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.4.0/api/02-Commands/waitfor.md",tags:[],version:"0.4.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"waitfor"},"waitFor"),(0,a.kt)("p",null,"Waits for ",(0,a.kt)("inlineCode",{parentName:"p"},"<delayInMs>")," ms, e.g., 1000 ms. The exact delay may be a little longer than ",(0,a.kt)("inlineCode",{parentName:"p"},"<delayInMs>")," but never shorter than that."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {number} delayInMs - The delay in ms to wait for.")))}d.isMDXComponent=!0}}]);