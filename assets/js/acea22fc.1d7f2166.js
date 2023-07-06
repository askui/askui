"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29751],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(25773),a=(n(27378),n(35318));const i={displayed_sidebar:"apiSidebar"},o="matching",c={unversionedId:"api/Element-Descriptions/matching",id:"version-0.10.5/api/Element-Descriptions/matching",title:"matching",description:"experimental",source:"@site/versioned_docs/version-0.10.5/api/03-Element-Descriptions/matching.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/matching",permalink:"/docs/0.10.5/api/Element-Descriptions/matching",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/api/03-Element-Descriptions/matching.md",tags:[],version:"0.10.5",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},s=[{value:"What Should I Write as Matching Text",id:"what-should-i-write-as-matching-text",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"matching"},"matching"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--secondary"},"experimental"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Filters elements based on a textual description."),(0,a.kt)("h2",{id:"what-should-i-write-as-matching-text"},"What Should I Write as Matching Text"),(0,a.kt)("p",null,"The text description inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"matching()")," should describe the element visually.\nIt understands color, some famous company/product names, general descriptions."),(0,a.kt)("p",null,"It sometimes requires a bit of playing to find a matching description:\nE.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"puzzle piece")," can fail here while ",(0,a.kt)("inlineCode",{parentName:"p"},"an icon showing a puzzle piece")," might work.\nGenerally the more detail the better."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.click().matching('a mask on purple background and a firefox logo').exec()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {string} text - A description of the target element.")))}u.isMDXComponent=!0}}]);