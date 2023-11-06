"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7824],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},i="moveMouseRelatively",s={unversionedId:"api/Actions/movemouserelatively",id:"version-0.13.0/api/Actions/movemouserelatively",title:"moveMouseRelatively",description:"production",source:"@site/versioned_docs/version-0.13.0/api/02-Actions/movemouserelatively.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/movemouserelatively",permalink:"/docs/0.13.0/api/Actions/movemouserelatively",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.0/api/02-Actions/movemouserelatively.md",tags:[],version:"0.13.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"movemouserelatively"},"moveMouseRelatively"),(0,o.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Moves the mouse from the current position (relative) in x and y direction."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"macOS only"),": Due to the higher pixel density of the ",(0,o.kt)("strong",{parentName:"p"},"retina display"),", the input coordinates must be ",(0,o.kt)("strong",{parentName:"p"},"doubled")," in order to move the mouse as expected. For example, if you want to move the mouse for 100 pixels, use 200.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.moveMouseRelatively(0, 50).exec();\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(12382).Z,width:"800",height:"460"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param {number} x_offset - A (positive/negative) x direction."),(0,o.kt)("li",{parentName:"ul"},"@param {number} y_offset - A (positive/negative) y direction.")))}u.isMDXComponent=!0},12382:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/moveMouseRelatively-b6e5bab1e8e138041c8a1f11c4120afe.gif"}}]);