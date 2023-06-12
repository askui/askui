"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46120],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const i={displayed_sidebar:"apiSidebar"},o="containsText",s={unversionedId:"api/Element-Descriptions/containstext",id:"version-0.10.2/api/Element-Descriptions/containstext",title:"containsText",description:"production",source:"@site/versioned_docs/version-0.10.2/api/03-Element-Descriptions/containstext.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/containstext",permalink:"/docs/api/Element-Descriptions/containstext",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.2/api/03-Element-Descriptions/containstext.md",tags:[],version:"0.10.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},p=[],l={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"containstext"},"containsText"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Filters for text containing the text provided as an argument."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"'This is a text' === containsText('text') => true\n'This is a text' === containsText('other text') => false\n'This is a text' === containsText('other') => false\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28414).Z,width:"640",height:"360"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {string} text - A text to be matched.")))}u.isMDXComponent=!0},28414:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/containsText-a48575b52706cf0ed5894bdaf9229852.gif"}}]);