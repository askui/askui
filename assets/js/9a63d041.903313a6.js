"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80963],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=o,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},52456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(25773),o=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},i="below",l={unversionedId:"api/Relations/below",id:"version-0.11.6/api/Relations/below",title:"below",description:"production",source:"@site/versioned_docs/version-0.11.6/api/04-Relations/below.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/below",permalink:"/docs/0.11.6/api/Relations/below",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.6/api/04-Relations/below.md",tags:[],version:"0.11.6",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"below"},"below"),(0,o.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Filters for an element below another element."),(0,o.kt)("p",null,"Takes an optional parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," to select the ",(0,o.kt)("inlineCode",{parentName:"p"},"nth")," element (starting with 0)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------\n|    text    |\n--------------\n--------------\n|   button0  |\n--------------\n--------------\n|   button1  |\n--------------\n\n// Returns button0 because button0 is the first button below text\n...button().below().text()\n...button().below(0).text()\n// Returns button1 because button1  is the second button below text\n...button().below(1).text()\n// Returns no element because text is above button\n...text().below().button()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43978).Z,width:"1920",height:"1080"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param {number} ","[optionalIndex=0]"," - element index")))}u.isMDXComponent=!0},43978:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/below-167d0bdcc85218d9a5f6b9c4a6a6761e.gif"}}]);