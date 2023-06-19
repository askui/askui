"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31143],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(25773),i=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},o="rightOf",l={unversionedId:"api/Relations/rightof",id:"api/Relations/rightof",title:"rightOf",description:"production",source:"@site/docs/api/04-Relations/rightof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/rightof",permalink:"/docs/next/api/Relations/rightof",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/04-Relations/rightof.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"or",permalink:"/docs/next/api/Relations/or"},next:{title:"exists",permalink:"/docs/next/api/Checks/exists"}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rightof"},"rightOf"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Filters for an element right of another element."),(0,i.kt)("p",null,"Takes an optional parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," to select the ",(0,i.kt)("inlineCode",{parentName:"p"},"nth")," element (starting with 0)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------  --------------  --------------\n|  leftEl    |  |  rightEl0  |  |  rightEl1  |\n--------------  --------------  --------------\n\n// Returns rightEl0 because rightEl0 is the first element right of leftEl\n...rightEl().rightOf().leftEl()\n...rightEl().rightOf(0).leftEl()\n// Returns rightEl1 because rightEl1 is the second element right of leftEl\n...rightEl().rightOf(1).leftEl()\n// Returns no element because leftEl is left of rightEl\n...leftEl().rightOf().rightEl()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(92015).Z,width:"1920",height:"1080"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {number} ","[optionalIndex=0]"," - element index")))}u.isMDXComponent=!0},92015:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"}}]);