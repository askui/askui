"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72079],{63032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=t(85893),i=t(11151);const o={displayed_sidebar:"apiSidebar"},r="customElement",l={id:"api/Element-Descriptions/customelement",title:"customElement",description:"production",source:"@site/versioned_docs/version-0.12.1/api/03-Element-Descriptions/customelement.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/customelement",permalink:"/docs/0.12.1/api/Element-Descriptions/customelement",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.1/api/03-Element-Descriptions/customelement.md",tags:[],version:"0.12.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"containsText",permalink:"/docs/0.12.1/api/Element-Descriptions/containstext"},next:{title:"element",permalink:"/docs/0.12.1/api/Element-Descriptions/element"}},c={},a=[];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"customelement",children:"customElement"}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["Filters for a 'custom element', that is a UI element which is defined by providing an image and other parameters such as degree of rotation. It allows filtering for a UI element that is not recognized by our machine learning models by default. It can also be used for pixel assertions of elements using classical ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Template_matching",children:"template matching"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["See the tutorial - ",(0,s.jsx)(n.a,{href:"/docs/0.12.1/general/Element%20Selection/text-and-element-selectors",children:"Custom Element"})," for more detail."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await aui\n    .click()\n    .customElement({\n        customImage: './logo.png', // required\n        name: 'myLogo', // optional\n        threshold: 0.9, // optional, defaults to 0.9\n        rotationDegreePerStep: 0, // optional, defaults to 0\n        imageCompareFormat: 'grayscale', // optional, defaults to 'grayscale'\n        // mask:{x:0, y:0}[] // optional, a polygon to match only a certain area of the custom element\n    })\n    .exec();\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"customImage"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"string"}),", required"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A cropped image in the form of a base64 string or file path."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"string"}),", optional"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A unique name that can be used for filtering for the custom element. If not given, any text inside the custom image will be detected via OCR."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"threshold"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"number"}),", optional"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A threshold for how much a UI element needs to be similar to the custom element as defined. Takes values between ",(0,s.jsx)(n.code,{children:"0.0"})," (== all elements are recognized as the custom element which is probably not what you want) and ",(0,s.jsx)(n.code,{children:"1.0"})," (== elements need to look exactly like the ",(0,s.jsx)(n.code,{children:"customImage"})," which is unlikely to be achieved as even minor differences count). Defaults to ",(0,s.jsx)(n.code,{children:"0.9"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"rotationDegreePerStep"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"number"}),", optional"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Step size in rotation degree. Rotates the custom image by this step size until 360\xb0 is exceeded. The range is from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"360"}),". Defaults to ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"imageCompareFormat"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"'RGB' | 'grayscale'"}),", optional"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The color compare style. 'greyscale' compares the brightness of each pixel whereas 'RGB' compares all three color. Defaults to 'grayscale'."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@param {CustomElementJson} customElement - The custom element to filter for."}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);