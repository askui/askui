"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70949],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(25773),i=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},o="text",c={unversionedId:"api/Element-Descriptions/text",id:"version-0.10.2/api/Element-Descriptions/text",title:"text",description:"production",source:"@site/versioned_docs/version-0.10.2/api/03-Element-Descriptions/text.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/text",permalink:"/docs/0.10.2/api/Element-Descriptions/text",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.2/api/03-Element-Descriptions/text.md",tags:[],version:"0.10.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text"},"text"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Filters for an UI element 'text'."),(0,i.kt)("p",null,"Often combined with other element-descriptions like ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," as shown in the below examples.\nCheck out the element-descriptions ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"withTextRegex()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()")," for more detail."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.click().text().withText('Password').exec();\nawait aui.click().text().withExactText('Username').exec();\nawait aui.click().text().withTextRegex('\\b[Ss]\\w+').exec();\n\n// Assertion is possible like this:\n// Check if there is any text on the screen\nawait aui.expect().text().notExists().exec();\n")))}u.isMDXComponent=!0}}]);