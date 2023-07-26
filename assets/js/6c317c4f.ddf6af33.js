"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63348],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const o={displayed_sidebar:"apiSidebar"},i="customElement",l={unversionedId:"api/Element-Descriptions/customelement",id:"version-0.10.1/api/Element-Descriptions/customelement",title:"customElement",description:"production",source:"@site/versioned_docs/version-0.10.1/api/03-Element-Descriptions/customelement.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/customelement",permalink:"/docs/0.10.1/api/Element-Descriptions/customelement",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.1/api/03-Element-Descriptions/customelement.md",tags:[],version:"0.10.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},m={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customelement"},"customElement"),(0,r.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Filters for a 'custom element', that is a UI element which is defined by providing an image and other parameters such as degree of rotation. It allows filtering for a UI element that is not recognized by our machine learning models by default. It can also be used for pixel assertions of elements using classical ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Template_matching"},"template matching"),"."),(0,r.kt)("p",null,"See the tutorial - ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.1/general/Tutorials/custom-element"},"Custom Element")," for more detail."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui\n    .click()\n    .customElement({\n        customImage: './logo.png', // required\n        name: 'myLogo', // optional\n        threshold: 0.9, // optional, defaults to 0.9\n        rotationDegreePerStep: 0, // optional, defaults to 0\n        imageCompareFormat: 'grayscale', // optional, defaults to 'grayscale'\n        // mask:{x:0, y:0}[] // optional, a polygon to match only a certain area of the custom element\n    })\n    .exec();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"customImage")," (",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"string"),", required"),"):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A cropped image in the form of a base64 string or file path."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"name")," (",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"string"),", optional"),"):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A unique name that can be used for filtering for the custom element. If not given, any text inside the custom image will be detected via OCR."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"threshold")," (",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"number"),", optional"),"):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A threshold for how much a UI element needs to be similar to the custom element as defined. Takes values between ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0")," (== all elements are recognized as the custom element which is probably not what you want) and ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0")," (== elements need to look exactly like the ",(0,r.kt)("inlineCode",{parentName:"li"},"customImage")," which is unlikely to be achieved as even minor differences count). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.9"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"rotationDegreePerStep")," (",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"number"),", optional"),"):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Step size in rotation degree. Rotates the custom image by this step size until 360\xb0 is exceeded. The range is from ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"360"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"imageCompareFormat")," (",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"'RGB' | 'grayscale'"),", optional"),"):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The color compare style. 'greyscale' compares the brightness of each pixel whereas 'RGB' compares all three color. Defaults to 'grayscale'.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@param {CustomElementJson} customElement - The custom element to filter for.")))))}c.isMDXComponent=!0}}]);