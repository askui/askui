"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59042],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>S,default:()=>P,frontMatter:()=>E,metadata:()=>A,toc:()=>C});var a=n(25773),r=n(27378),i=n(35318),o=n(38944),s=n(22792),l=n(35331),u=n(22256),c=n(25859),p=n(82537);function m(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=k({queryString:n,groupId:a}),[c,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??c;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var y=n(77524);const b="tabList_J5MA",g="tabItem_l0OV";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,o.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function x(e){const t=(0,y.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}const I="tabItem_wHwb";function T(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(I,a),hidden:n},t)}const E={sidebar_position:7},S="Write Your First Instruction",A={unversionedId:"general/Getting Started/write-your-first-instruction",id:"general/Getting Started/write-your-first-instruction",title:"Write Your First Instruction",description:"What you will learn",source:"@site/docs/general/02-Getting Started/write-your-first-instruction.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/write-your-first-instruction",permalink:"/docs/next/general/Getting Started/write-your-first-instruction",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/02-Getting Started/write-your-first-instruction.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Enterprise Checklist",permalink:"/docs/next/general/Getting Started/enterprise-checklist"},next:{title:"How AskUI Works",permalink:"/docs/next/general/Getting Started/guide-how-askui-works"}},O={},C=[{value:"Run Your First Instruction",id:"run-your-first-instruction",level:2},{value:"Step 1: Execute an (Interactive) Annotation",id:"step-1-execute-an-interactive-annotation",level:3},{value:"Step 2: Extract the Element-Description",id:"step-2-extract-the-element-description",level:3},{value:"Step 3: Execute an Instruction",id:"step-3-execute-an-instruction",level:3},{value:"What other instructions are available?",id:"what-other-instructions-are-available",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"AskUI moves to the wrong element?",id:"askui-moves-to-the-wrong-element",level:3},{value:"Technical",id:"technical",level:3},{value:"Where to Go Next?",id:"where-to-go-next",level:2},{value:"Tutorials",id:"tutorials",level:3},{value:"Annotation",id:"annotation",level:3}],j={toc:C};function P(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"write-your-first-instruction"},"Write Your First Instruction"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"What you will learn"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Run your first instruction"),(0,i.kt)("li",{parentName:"ul"},"Troubleshooting any issues"),(0,i.kt)("li",{parentName:"ul"},"Where to go next"))),(0,i.kt)("h2",{id:"run-your-first-instruction"},"Run Your First Instruction"),(0,i.kt)("p",null,"Writing and executing an instruction in AskUI can be done in three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Execute an (interactive) annotation."),(0,i.kt)("li",{parentName:"ol"},"Extract from the (interactive) annotation the element-description which identifies target element."),(0,i.kt)("li",{parentName:"ol"},"Execute an instruction to control the keyboard and mouse to take action on target element.")),(0,i.kt)("h3",{id:"step-1-execute-an-interactive-annotation"},"Step 1: Execute an (Interactive) Annotation"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Before executing the instructions, open ",(0,i.kt)("inlineCode",{parentName:"p"},"askui_example/my-first-askui-test-suite.test.ts")," on your main display. The code in this file is shown below."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Windows Users")),(0,i.kt)("p",{parentName:"admonition"},"Please use ",(0,i.kt)("inlineCode",{parentName:"p"},"annotate()")," as outlined in the code below. The interactive annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"aui.annotateInteractively()")," currently leads to an error on Windows."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"macOS Users")),(0,i.kt)("p",{parentName:"admonition"},"Some users have reported instability running AskUI on macOS with external displays and/or ",(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/en-gb/guide/mac-help/mh14112/mac"},"virtual desktops (called Spaces)"),". If you experience similar issues, please disconnect external displays and close virtual desktops, or see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/general/Integrations/containers"},"documentation on running AskUI in Docker"),".")),(0,i.kt)(x,{mdxType:"Tabs"},(0,i.kt)(T,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"import { aui } from './helpers/askui-helper';\n\ndescribe('jest with askui', () => {\n  it('should generate an (interactive) annotation', async () => {\n    // Use annotate() to create an annotated HTML file\n    // of your screen that is saved under <project_root>/report\n    await aui.annotate();\n  });\n});\n"))),(0,i.kt)(T,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"import { aui } from './helpers/askui-helper';\n\ndescribe('jest with askui', () => {\n  it('should generate an (interactive) annotation', async () => {\n    await aui.annotateInteractively();\n  });\n});\n"))),(0,i.kt)(T,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"import { aui } from './helpers/askui-helper';\n\ndescribe('jest with askui', () => {\n  it('should generate an (interactive) annotation', async () => {\n    await aui.annotateInteractively();\n  });\n});\n")))),(0,i.kt)("p",null,"To execute the instructions, enter into your terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run askui\n")),(0,i.kt)("p",null,"A few seconds later an (interactive) annotation will be generated."),(0,i.kt)("p",null,"If you\u2019d like a longer explanation as to what an (interactive) annotation is, read about it here. ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/general/Element%20Selection/annotations-and-screenshots"},"Explanation of (Interactive) Annotations")),(0,i.kt)("h3",{id:"step-2-extract-the-element-description"},"Step 2: Extract the Element-Description"),(0,i.kt)("p",null,"Extract from the (interactive) annotation the element-description which identifies target element.\nLocate any element you\u2019d like the mouse to move to and copy the element-description by clicking on it:\nClicking an element will copy this element-description, which we can then use in the step 3."),(0,i.kt)("p",null,"To close out the interactive annotation, use ",(0,i.kt)("inlineCode",{parentName:"p"},"CMD/CTRL + W")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ESC"),"."),(0,i.kt)("h3",{id:"step-3-execute-an-instruction"},"Step 3: Execute an Instruction"),(0,i.kt)("p",null,"Add this instruction code block to the describe block in your test file just under your (interactive) annotation instruction, taking note to also add your copied element-description from the annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"it('should click on my element', async () => {\n  await aui\n    .click()\n    // <INSERT YOUR COPIED ELEMENT-DESCRIPTION HERE AND UNCOMMENT THIS AND THE NEXT LINE>\n    // .exec();\n});\n")),(0,i.kt)("p",null,"Be sure to ",(0,i.kt)("inlineCode",{parentName:"p"},"xit")," out the (interactive) annotation, as that is no longer needed. The final version should look like this, taking exception of course to whatever element-description text you chose:"),(0,i.kt)(x,{mdxType:"Tabs"},(0,i.kt)(T,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"describe('jest with askui', () => {\n\n  xit('should generate an (interactive) annotation', async () => {\n    // Use annotate() to create an annotated HTML file\n    // of your screen that is saved under <project_root>/report\n    await aui.annotate();\n  });\n\n  it('should click on my element', async () => {\n    await aui\n      .click()\n      .text(\"node_nodu\")\n      .exec();\n  });\n});\n"))),(0,i.kt)(T,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"describe('jest with askui', () => {\n\n  xit('should generate an (interactive) annotation', async () => {\n    await aui.annotateInteractively();\n  });\n\n  it('should click on my element', async () => {\n    await aui\n      .click()\n      .text(\"node_nodu\")\n      .exec();\n  });\n});\n"))),(0,i.kt)(T,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"describe('jest with askui', () => {\n\n  xit('should generate an (interactive) annotation', async () => {\n    await aui.annotateInteractively();\n  });\n\n  it('should click on my element', async () => {\n    await aui\n      .click()\n      .text(\"node_nodu\")\n      .exec();\n  });\n});\n")))),(0,i.kt)("p",null,"As before, run your code with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run askui"),"."),(0,i.kt)("p",null,"You should see AskUI take over your mouse, mouse over the element you chose and click."),(0,i.kt)("p",null,"Congratulations! You\u2019ve just built your first instruction using AskUI. \ud83c\udf89"),(0,i.kt)("h3",{id:"what-other-instructions-are-available"},"What other instructions are available?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/API/table-of-contents#actions"},"Actions API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/API/table-of-contents#element-descriptions"},"Element-Descriptions API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/API/table-of-contents#relations"},"Relations API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/API/table-of-contents#checks"},"Checks API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/API/table-of-contents#getters"},"Getters API"))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"askui-moves-to-the-wrong-element"},"AskUI moves to the wrong element?"),(0,i.kt)("p",null,"Have a look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/general/Element%20Selection/relational-selectors"},"Relational Selectors")," to select elements via a visual relation instead."),(0,i.kt)("h3",{id:"technical"},"Technical"),(0,i.kt)("p",null,"For technical problems with the execution, take a look at our ",(0,i.kt)("a",{parentName:"p",href:"https://docs.askui.com/docs/general/Troubleshooting/"},"Troubleshooting page")),(0,i.kt)("h2",{id:"where-to-go-next"},"Where to Go Next?"),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"https://app.outverse.com/askui/community/home"},"Outverse-Community")," is there to help you out!"),(0,i.kt)("h3",{id:"tutorials"},"Tutorials"),(0,i.kt)("p",null,"If you are unsure on how/what to do yet, try to follow our tutorials. They cover some of use cases of AskUI in depth:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/general/Tutorials/google-cat-search"},"Search Image in Google")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/general/Tutorials/shop-demo"},"Login at an Online Shop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/general/Tutorials/spotify-tutorial"},"Automate Spotify on Desktop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/general/Tutorials/android-search-in-browser"},"Automate an Android App"))),(0,i.kt)("h3",{id:"annotation"},"Annotation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/general/Element%20Selection/annotations-and-screenshots"},"Debug with Annotation")," to learn how to use the ",(0,i.kt)("strong",{parentName:"li"},"Image Annotation Feature"),".")))}P.isMDXComponent=!0}}]);