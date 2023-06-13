"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59060],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(25773),o=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},i="nearestTo",s={unversionedId:"api/Relations/nearestto",id:"version-0.10.2/api/Relations/nearestto",title:"nearestTo",description:"production",source:"@site/versioned_docs/version-0.10.2/api/04-Relations/nearestto.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/nearestto",permalink:"/docs/0.10.2/api/Relations/nearestto",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.2/api/04-Relations/nearestto.md",tags:[],version:"0.10.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},p=[],l={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nearestto"},"nearestTo"),(0,o.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Filters for an element nearest to another element."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------\n|  button 1  |\n--------------\n--------------\n|   text     |\n--------------\n              \n              \n              \n--------------\n|  button 2  |\n--------------\n\n// Returns button 1 because button 1 is nearer to the text than button 2\n...button().nearestTo().text()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(15878).Z,width:"1920",height:"1080"})))}u.isMDXComponent=!0},15878:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nearestTo-dec2bcd81d965c45a30127b3ee771bc6.gif"}}]);