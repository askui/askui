"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32997],{35318:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(d,r(r({ref:t},h),{},{components:n})):a.createElement(d,r({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(25773),i=(n(27378),n(35318));const o={sidebar_position:3},r="Text Element-Descriptions",s={unversionedId:"general/Guides/guide-text-element-descriptions",id:"version-0.10.1/general/Guides/guide-text-element-descriptions",title:"Text Element-Descriptions",description:"When using askui for automated tests, text elements are playing a big role, since they typically appear more distinctively than other elements such as icons or text fields. Hence, knowing the benefits of using different text element-description can become critical in scaffolding a robust set of instructions.",source:"@site/versioned_docs/version-0.10.1/general/03-Guides/guide-text-element-descriptions.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/guide-text-element-descriptions",permalink:"/docs/0.10.1/general/Guides/guide-text-element-descriptions",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.1/general/03-Guides/guide-text-element-descriptions.md",tags:[],version:"0.10.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Relational Element-Descriptions",permalink:"/docs/0.10.1/general/Guides/guide-relational-element-descriptions"},next:{title:"Recommended Practices",permalink:"/docs/0.10.1/general/Guides/recommended-practices"}},l={},c=[{value:"Basic Text Matching",id:"basic-text-matching",level:2},{value:"Match a Sub-string within a Text",id:"match-a-sub-string-within-a-text",level:2},{value:"Match the Exact Text",id:"match-the-exact-text",level:2},{value:"Match Text with Regular Expression",id:"match-text-with-regular-expression",level:2}],h={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text-element-descriptions"},"Text Element-Descriptions"),(0,i.kt)("p",null,"When using askui for automated tests, text elements are playing a big role, since they typically appear more distinctively than other elements such as icons or text fields. Hence, knowing the benefits of using different text element-description can become critical in scaffolding a robust set of instructions."),(0,i.kt)("p",null,"askui provides four different element-descriptions to handle text elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"containsText()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withExactText()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withText()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withTextRegex()"))),(0,i.kt)("p",null,"For a convenient demonstration, we will use a ",(0,i.kt)("a",{parentName:"p",href:"https://gallery.flutter.dev/#/demo"},"Flutter web demo")," provided by Flutter. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"basic-text-matching"},"Basic Text Matching"),(0,i.kt)("p",null,"The simplest way to interact with a text element is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()"),". Go to the demo app page and run the code below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui.moveMouseTo().text().withText('matrial').exec();\nawait aui.mouseLeftClick().exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"withText",src:n(2699).Z,width:"640",height:"360"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," tries to find a text that matches the whole sequence. In most cases, you will want to stick to this method, as it supports ",(0,i.kt)("strong",{parentName:"p"},"Fuzzy Matching")," and tolerates misspelled text. ",(0,i.kt)("strong",{parentName:"p"},"Note that the above example code has two typos"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"matrial")," doesn't match the text in the demo app, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),", although askui will find the text element that roughly matches the text on the screen."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"match-a-sub-string-within-a-text"},"Match a Sub-string within a Text"),(0,i.kt)("p",null,"Even though the ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," is handy and quite reliable, you might face a case where you know only a fraction of the text element that you want to interact with. In such a case, ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()")," is the element-description you might want to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui.moveMouseTo().text().containsText('Bottom').exec();\nawait aui.mouseLeftClick().exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"containsText",src:n(28414).Z,width:"640",height:"360"})),(0,i.kt)("p",null,"Be aware that even if the ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()")," also supports ",(0,i.kt)("strong",{parentName:"p"},"Fuzzy Matching"),", it won't match the whole sequence by just a few characters. Try to use this code with the given demo app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// this will fail\nawait aui.moveMouseTo().text().containsText('Bottm').exec(); \n")),(0,i.kt)("p",null,"You will notice that askui fails to match the given text ",(0,i.kt)("inlineCode",{parentName:"p"},"Bottm"),", whereas this code will work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// this will succeed\nawait aui.moveMouseTo().text().containsText('Bottm appbar').exec();\n\n// this will also succeed\nawait aui.moveMouseTo().text().containsText('Bottom').exec(); \n")),(0,i.kt)("p",null,"The biggest difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()")," is whether it matches the text as a whole sequence or not. Matching many texts with a repeating affix could be a practical use case for the ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()"),"."),(0,i.kt)("p",null,"It is recommended to experiment enough with these element-descriptions to find a better option that suits your specific case, since it's not easy to predict if the given text can be fuzzy-matched with target texts."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"match-the-exact-text"},"Match the Exact Text"),(0,i.kt)("p",null,"If you already know what text you are looking for, or if there are too many similar text elements, you can use the element-description ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()"),"."),(0,i.kt)("p",null,"From the main page of the demo app, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"Data tables"),". You will see a table with different foods given with nutrition factors for each of them."),(0,i.kt)("p",null,"Let's say that we want to click on the items that has exactly ",(0,i.kt)("strong",{parentName:"p"},"25.0 gm of Fat"),". In our demo app, only the ",(0,i.kt)("strong",{parentName:"p"},"Doughnut")," is the matching item. Run this code and see how ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," matches the text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\n// Use this helper function to calculate the centroid of the detected elements.\nfunction getCentroid(element: any): any {\n    let x = (element.bndbox.xmax - element.bndbox.xmin) / 2.0 + element.bndbox.xmin;\n    let y = (element.bndbox.ymax - element.bndbox.ymin) / 2.0 + element.bndbox.ymin;\n    return { x: x, y: y };\n}\n\n// Find all the text elements that matches '25.0'\nconst elts = await aui.get().text().withText('25.0').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<elts.length; ++i){\n    const centroid = getCentroid(elts[i]);\n    await aui.moveMouse(Math.round(centroid.x), Math.round(centroid.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"withText2",src:n(78916).Z,width:"960",height:"1139"})),(0,i.kt)("p",null,"You will see that askui clicks not only the ",(0,i.kt)("strong",{parentName:"p"},"25.0")," but also the ",(0,i.kt)("strong",{parentName:"p"},"26.0"),", which is the fat of the ",(0,i.kt)("strong",{parentName:"p"},"Apple pie"),". The result of this test code may differ in your case, because of the different screen resolution and the rendered-size of the demo app."),(0,i.kt)("p",null,"It will give you a clear idea where you will need to use the element-description ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()"),". Try to run the same code after replacing the ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Find all the text elements that matches '25.0' exactly\nconst elts = await aui.get().text().withExactText('25.0').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<elts.length; ++i){\n    const centroid = getCentroid(elts[i]);\n    await aui.moveMouse(Math.round(centroid.x), Math.round(centroid.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"withExactText",src:n(65047).Z,width:"800",height:"396"})),(0,i.kt)("h2",{id:"match-text-with-regular-expression"},"Match Text with Regular Expression"),(0,i.kt)("p",null,"The element-description ",(0,i.kt)("inlineCode",{parentName:"p"},"withTextRegex()")," supports ",(0,i.kt)("strong",{parentName:"p"},"Regular Expression")," to match any text in the most flexible way. Although it might be tricky to use regex due to its esoteric appearance, it is maybe one of the most versatile solutions when it comes to character matching."),(0,i.kt)("p",null,"On the same page of the demo app, let's say that we want to click on the items whose Calorie is between 300 and 500 ",(0,i.kt)("inlineCode",{parentName:"p"},"(cal>=300 && cal<500)"),". Since regex doesn't support numeric comparison, we will try to match the digits in a sequence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Find all the text that matches the expression\nconst cals = await aui.get().text().withTextRegex('[3-4][0-9]{2}').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<cals.length; ++i){\n    const coord = getCentroid(cals[i]);\n    console.log(cals[i].text, coord);\n    await aui.moveMouse(Math.round(coord.x), Math.round(coord.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"withTextRegex",src:n(33536).Z,width:"800",height:"946"})),(0,i.kt)("p",null,"The regular expression ",(0,i.kt)("inlineCode",{parentName:"p"},"[3-4][0-9]{2}")," means,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[3-4]"),": Match one character between 3 and 4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[0-9]"),": Match one character between 0 and 9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"{2}"),": Repeat the previous expression (","[0-9]",") two times.")),(0,i.kt)("p",null,"As the result, it will try to match every text that has a sequence starting with the digit 3 or 4, and then has any two digits in a row."))}p.isMDXComponent=!0},28414:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/containsText-a48575b52706cf0ed5894bdaf9229852.gif"},65047:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/withExactText-d8a72ea69921c5687967b22664579a36.gif"},2699:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/withText-89a3b4d3a0254f057f1f6ee3d9220b11.gif"},78916:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/withText2-eb58c4cd466392c600a0d956b2efab6d.gif"},33536:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/withTextRegex-befaab3dfd28cf7228c0ef43ceaa6952.gif"}}]);