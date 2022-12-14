"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75503],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,v=c["".concat(s,".").concat(d)]||c[d]||p[d]||a;return r?o.createElement(v,i(i({ref:t},u),{},{components:r})):o.createElement(v,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},93488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=r(25773),n=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},i="moveMouseRelativelyTo",l={unversionedId:"api/Commands/movemouserelativelyto",id:"api/Commands/movemouserelativelyto",title:"moveMouseRelativelyTo",description:"Moves the mouse relatively to an element in the direction.",source:"@site/docs/api/02-Commands/movemouserelativelyto.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/movemouserelativelyto",permalink:"/docs/next/api/Commands/movemouserelativelyto",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/02-Commands/movemouserelativelyto.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"moveMouseRelatively",permalink:"/docs/next/api/Commands/movemouserelatively"},next:{title:"moveMouseTo",permalink:"/docs/next/api/Commands/movemouseto"}},s={},m=[],u={toc:m};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"movemouserelativelyto"},"moveMouseRelativelyTo"),(0,n.kt)("p",null,"Moves the mouse relatively to an element in the direction.\nThis can be used when the mouse should not hover over an element anymore."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// Move mouse 30 pixels below button\nawait aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@param {number} x_offset - A (positive/negative) x direction."),(0,n.kt)("li",{parentName:"ul"},"@param {number} y_offset - A (positive/negative) y direction.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(32523).Z,width:"1920",height:"1080"})))}p.isMDXComponent=!0},32523:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/moveMouseRelativelyTo-8b410256841490fe7c1a0d454702cd63.gif"}}]);