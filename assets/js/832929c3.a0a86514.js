"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40888],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},27829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},i="moveMouse",s={unversionedId:"api/Commands/movemouse",id:"version-0.6.0/api/Commands/movemouse",title:"moveMouse",description:"Moves the mouse to the absolute x and y coordinates.",source:"@site/versioned_docs/version-0.6.0/api/02-Commands/movemouse.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/movemouse",permalink:"/docs/0.6.0/api/Commands/movemouse",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.6.0/api/02-Commands/movemouse.md",tags:[],version:"0.6.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"movemouse"},"moveMouse"),(0,o.kt)("p",null,"Moves the mouse to the absolute x and y coordinates."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param {number} x_coordinate - A (positive/negative) x coordinate."),(0,o.kt)("li",{parentName:"ul"},"@param {number} y_coordinate - A (positive/negative) y coordinate.")))}m.isMDXComponent=!0}}]);