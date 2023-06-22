"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39484],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(25773),a=(n(27378),n(35318));const o={sidebar_position:2},l="Relational Element-Descriptions",r={unversionedId:"general/Guides/guide-relational-element-descriptions",id:"version-0.10.5/general/Guides/guide-relational-element-descriptions",title:"Relational Element-Descriptions",description:"A common problem while writing instructions which one encounters is interacting with elements which share the same text.",source:"@site/versioned_docs/version-0.10.5/general/03-Guides/guide-relational-element-descriptions.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/guide-relational-element-descriptions",permalink:"/docs/general/Guides/guide-relational-element-descriptions",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/general/03-Guides/guide-relational-element-descriptions.md",tags:[],version:"0.10.5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"How askui Works",permalink:"/docs/general/Guides/guide-how-askui-works"},next:{title:"Text Element-Descriptions",permalink:"/docs/general/Guides/guide-text-element-descriptions"}},s={},c=[{value:"Selecting an Element by Visual Relation",id:"selecting-an-element-by-visual-relation",level:2},{value:"above()",id:"above",level:2},{value:"below()",id:"below",level:2},{value:"contains()",id:"contains",level:2},{value:"in()",id:"in",level:2},{value:"leftOf() and rightOf()",id:"leftof-and-rightof",level:2},{value:"nearestTo()",id:"nearestto",level:2},{value:"Additional Considerations About the Distance Metric",id:"additional-considerations-about-the-distance-metric",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relational-element-descriptions"},"Relational Element-Descriptions"),(0,a.kt)("p",null,"A common problem while writing instructions which one encounters is interacting with elements which share the same text."),(0,a.kt)("p",null,"An example can be seen when you interactively annotate your Visual Studio Code Editor.\nNotice that the magnifying glass icon and many other elements throughout the UI share the same name:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Icon mobile annotation one.",src:n(55372).Z,width:"788",height:"164"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Icon mobile annotation one.",src:n(41853).Z,width:"624",height:"198"})),(0,a.kt)("p",null,"To ensure you\u2019re able to instruct askui to select the correct element, the use of relational element-descriptions can be employed.\nRelational element-descriptions describe the element relative to other elements in the UI."),(0,a.kt)("h2",{id:"selecting-an-element-by-visual-relation"},"Selecting an Element by Visual Relation"),(0,a.kt)("p",null,"After reading the next section you will know how to use the full power of all the relational element-descriptions. Additionally, you learn what pitfalls you can fall into and how to avoid them in the future."),(0,a.kt)("p",null,"We will use the ",(0,a.kt)("a",{parentName:"p",href:"https://selectorshub.com/xpath-practice-page/"},"Selectorshub practice page")," for the demonstration."),(0,a.kt)("p",null,"We\u2019ll discuss the following relational element-descriptions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#above"},"above()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#below"},"below()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#contains"},"contains()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#in"},"in()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#leftof-and-rightof"},"leftOf()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#leftof-and-rightof"},"rightOf()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nearestto"},"nearestTo()"))),(0,a.kt)("h2",{id:"above"},"above()"),(0,a.kt)("p",null,"When you want to click on a textfield and it is above an element, like for example a button with the text Submit. You can do it with ",(0,a.kt)("inlineCode",{parentName:"p"},"above()"),". The following code snippet moves the mouse to the textfield above the ",(0,a.kt)("em",{parentName:"p"},"Submit"),"-button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .click()\n  .textfield()\n  .above()\n  .button()\n  .withText('Submit')\n  .exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"above",src:n(6550).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"below"},"below()"),(0,a.kt)("p",null,"When you want to select a textfield you can do so by finding the correct label, which is often above the textfield. The following code snippet moves the mouse to the textfield below the text ",(0,a.kt)("em",{parentName:"p"},"Mobile Number"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .textfield()\n  .below()\n  .text()\n  .withText('Mobile Number')\n  .exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"below",src:n(43978).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"contains"},"contains()"),(0,a.kt)("p",null,"For selecting an element, that contains another element, ",(0,a.kt)("inlineCode",{parentName:"p"},"contains()")," is the right candidate. It is especially useful if you want to select a textfield with a placeholder text inside it. The text inside the textfield is annotated as an element itself."),(0,a.kt)("p",null,"If you have problems with selecting a specific element, always run ",(0,a.kt)("inlineCode",{parentName:"p"},"annotate()")," to create a screenshot of all the annotations or use ",(0,a.kt)("inlineCode",{parentName:"p"},"annotateInteractively()")," to see if you need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"contains()"),"."),(0,a.kt)("p",null,"The following snippet moves the mouse to a textfield based on its placeholder text ",(0,a.kt)("em",{parentName:"p"},"First Crush")," which is contained in the textfield:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .textfield()\n  .contains()\n  .text()\n  .withText('First Crush')\n  .exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"contains",src:n(63283).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"in"},"in()"),(0,a.kt)("p",null,"When you want to target an element that is inside another element you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"in()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"--------------------\n|     outerEl      |\n|  --------------  |\n|  |  innerEl   |  |\n|  --------------  |\n|                  |\n--------------------\n")),(0,a.kt)("p",null,"The following code snippet moves the mouse pointer to the text of the first textfield askui found:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .text()\n  .in()\n  .textfield()\n  .exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"in",src:n(28186).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"leftof-and-rightof"},"leftOf() and rightOf()"),(0,a.kt)("p",null,"If you want to select an element based on its location left or right of another element you have to use ",(0,a.kt)("inlineCode",{parentName:"p"},"leftOf()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rightOf()")," respectively."),(0,a.kt)("p",null,"\ud83d\udca1 If you do not specify another element-description like ",(0,a.kt)("inlineCode",{parentName:"p"},"withText()")," then you will get the nearest element. Otherwise, askui retrieves the nearest element that matches the element-description!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .text()\n  .leftOf()\n  .text()\n  .withText('Denmark')\n  .exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"leftof",src:n(22087).Z,width:"1920",height:"1080"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .text()\n  .rightOf()\n  .text()\n  .withExactText('Joe Root')\n  .exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"leftof",src:n(92015).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"nearestto"},"nearestTo()"),(0,a.kt)("p",null,"Filtering with the ",(0,a.kt)("inlineCode",{parentName:"p"},"nearestTo()")," will return the element nearest to another element. This is useful when the direction is not clear on where to search. Especially responsive designs are prone to wrap elements into a new line where ",(0,a.kt)("inlineCode",{parentName:"p"},"leftOf()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightOf()")," would fail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .textfield()\n  .nearestTo()\n  .text()\n  .withTextRegex('User Em*')\n  .exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"nearestto",src:n(15878).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"additional-considerations-about-the-distance-metric"},"Additional Considerations About the Distance Metric"),(0,a.kt)("p",null,"The distance is not entirely based on physical distance. If you use an additional element-description like ",(0,a.kt)("inlineCode",{parentName:"p"},"withText()")," it optimizes to find the best match. It also considers special cases, for example, modal dialogs. Therefore the element selected by askui might sometimes be wrong from a user's point of view."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"moveMouseTo()")," like in the following example to see what element an instruction targets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .textfield()\n  .above()\n  .button()\n  .withText('Submit')\n  .exec()\n")))}d.isMDXComponent=!0},6550:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/above-dc81b84a9b34574ec4f2751a6a13ea86.gif"},43978:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/below-167d0bdcc85218d9a5f6b9c4a6a6761e.gif"},63283:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/contains-092964bf7692f6d8114d6016661d6760.gif"},28186:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/in-dc3fb4817216d048579435358280132f.gif"},22087:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/leftOf-d2505e3702e9d77123f23dab54271821.gif"},15878:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/nearestTo-dec2bcd81d965c45a30127b3ee771bc6.gif"},92015:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"},55372:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/relational_selectors_same_icon1-3583aa6ca6c211148d995fc843e7487c.png"},41853:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/relational_selectors_same_icon2-a52291bccba1da0e71acf8b4533ac9e5.png"}}]);