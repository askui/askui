"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46327],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(25773),i=(t(27378),t(35318));const o={displayed_sidebar:"apiSidebar"},a="in",s={unversionedId:"api/Relations/in",id:"version-0.12.1/api/Relations/in",title:"in",description:"production",source:"@site/versioned_docs/version-0.12.1/api/04-Relations/in.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/in",permalink:"/docs/api/Relations/in",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.1/api/04-Relations/in.md",tags:[],version:"0.12.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},c=[],p={toc:c};function u(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"in"},"in"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Filters for an element inside another element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------------\n|     outerEl      |\n|  --------------  |\n|  |  innerEl   |  |\n|  --------------  |\n|                  |\n--------------------\n\n// Returns innerEl because innerEl is inside outerEl\n...innerEl().in().outerEl()\n// Returns nothing because innerEl is not inside outerEl\n...outerEl().in().innerEl()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(28186).Z,width:"1920",height:"1080"})))}u.isMDXComponent=!0},28186:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/in-dc3fb4817216d048579435358280132f.gif"}}]);