"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53394],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),u=i,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(25773),i=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},o="textfield",l={unversionedId:"api/Element-Descriptions/textfield",id:"version-0.11.2/api/Element-Descriptions/textfield",title:"textfield",description:"production",source:"@site/versioned_docs/version-0.11.2/api/03-Element-Descriptions/textfield.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/textfield",permalink:"/docs/0.11.2/api/Element-Descriptions/textfield",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.2/api/03-Element-Descriptions/textfield.md",tags:[],version:"0.11.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"textfield"},"textfield"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Filters for a UI element 'textfield'."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Works if there is only one textfield visible on the screen\nawait aui.typeIn('Oh yeah').textfield().exec();\n\n// Works if you have a labeled textfield\n// Label is above the textfield\nawait aui.typeIn('Oh yeah').textfield().below().text('E-Mail Address').exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(13968).Z,width:"840",height:"400"})))}d.isMDXComponent=!0},13968:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/textfield-dd1bd807482f3274d655a36436f5925f.gif"}}]);