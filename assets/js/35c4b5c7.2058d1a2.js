"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80418],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(d,r(r({ref:t},h),{},{components:a})):n.createElement(d,r({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(25773),i=(a(27378),a(35318));const o={},r="Selecting an Element with Text",l={unversionedId:"general/Best Practice/selecting-with-text",id:"version-0.7.0/general/Best Practice/selecting-with-text",title:"Selecting an Element with Text",description:"A human usually needs only the written text or visual properties of elements to understand a graphical user interface. The askui library provides multiple methods to interact with text of the UI.",source:"@site/versioned_docs/version-0.7.0/general/03-Best Practice/selecting-with-text.md",sourceDirName:"general/03-Best Practice",slug:"/general/Best Practice/selecting-with-text",permalink:"/docs/general/Best Practice/selecting-with-text",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.0/general/03-Best Practice/selecting-with-text.md",tags:[],version:"0.7.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Selecting an Element by Visual Relation",permalink:"/docs/general/Best Practice/selecting-by-visual-relation"},next:{title:"Speed Up Execution",permalink:"/docs/general/Best Practice/speed_up_execution"}},s={},c=[{value:"Basic Text Matching",id:"basic-text-matching",level:2},{value:"Match a Sub-string within a Text",id:"match-a-sub-string-within-a-text",level:2},{value:"Match the Exact Text",id:"match-the-exact-text",level:2},{value:"Match Text with Regular Expression",id:"match-text-with-regular-expression",level:2},{value:"Keep Reading",id:"keep-reading",level:2}],h={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"selecting-an-element-with-text"},"Selecting an Element with Text"),(0,i.kt)("p",null,"A human usually needs only the written text or visual properties of elements to understand a graphical user interface. The askui library provides multiple methods to interact with text of the UI."),(0,i.kt)("p",null,"When using askui for automated tests, text elements are playing a big role, since they typically appear more distinctively than other elements such as icons or text fields. Hence, knowing the benefits of using different text filters can become critical in scaffolding a robust test suite."),(0,i.kt)("p",null,"askui provides four different methods to handle text elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"containsText()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withExactText()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withText()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withTextRegex()"))),(0,i.kt)("p",null,"For a convenient demonstration, we will use a ",(0,i.kt)("a",{parentName:"p",href:"https://gallery.flutter.dev/#/demo"},"Flutter web demo")," provided by Flutter. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"basic-text-matching"},"Basic Text Matching"),(0,i.kt)("p",null,"The simplest way to interact with a text element is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()"),". Go to the demo app page and run the code below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui.moveMouseTo().text().withText('matrial').exec();\nawait aui.mouseLeftClick().exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"withText",src:a(2699).Z,width:"640",height:"360"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," tries to find a text that matches the whole sequence. In most test cases, you will want to stick to this method, as it supports ",(0,i.kt)("strong",{parentName:"p"},"Fuzzy Matching")," and tolerates misspelled text. ",(0,i.kt)("strong",{parentName:"p"},"Note that the above example code has two typos"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"matrial")," doesn't match the text in the demo app, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),", although askui will find the text element that roughly matches the text on the screen."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"match-a-sub-string-within-a-text"},"Match a Sub-string within a Text"),(0,i.kt)("p",null,"Even though the method ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," is handy and quite reliable, you might face a test case where you know only a fraction of the text element that you want to interact with. In such a case, ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()")," is the method you might want to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui.moveMouseTo().text().containsText('Bottom').exec();\nawait aui.mouseLeftClick().exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"containsText",src:a(28414).Z,width:"640",height:"360"})),(0,i.kt)("p",null,"Be aware that even if the method ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()")," also supports ",(0,i.kt)("strong",{parentName:"p"},"Fuzzy Matching"),", it won't match the whole sequence by just a few characters. Try to use this code with the given demo app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// this will fail\nawait aui.moveMouseTo().text().containsText('Bottm').exec(); \n")),(0,i.kt)("p",null,"You will notice that askui fails to match the given text ",(0,i.kt)("inlineCode",{parentName:"p"},"Bottm"),", whereas this code will work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// this will success\nawait aui.moveMouseTo().text().containsText('Bottm appbar').exec(); \n// this will also success\nawait aui.moveMouseTo().text().containsText('Bottom').exec(); \n")),(0,i.kt)("p",null,"The biggest difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()")," is whether it matches the text as a whole sequence or not. Matching many texts with a repeating affix could be a practical use case for the ",(0,i.kt)("inlineCode",{parentName:"p"},"containsText()"),"."),(0,i.kt)("p",null,"It is recommended to experiment enough with these methods to find a better option that suits your specific case, since it's not easy to predict if the given text can be fuzzy-matched with target texts."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"match-the-exact-text"},"Match the Exact Text"),(0,i.kt)("p",null,"If you already know what text you are looking for, or if there are too many similar text elements, we could use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()"),"."),(0,i.kt)("p",null,"From the main page of the demo app, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"Data tables"),". You will see a table with different foods given with nutrition factors for each of them."),(0,i.kt)("p",null,"Let's say that we want to click on the items that has exactly ",(0,i.kt)("strong",{parentName:"p"},"25.0 gm of Fat"),". In our demo app, only the ",(0,i.kt)("strong",{parentName:"p"},"Doughnut")," is the matching item. Run this code and see how ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," matches the text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\n// Use this helper function to calculate the centroid of the detected elements.\nfunction getCentroid(element: any): any {\n    let x = (element.bndbox.xmax - element.bndbox.xmin) / 2.0 + element.bndbox.xmin;\n    let y = (element.bndbox.ymax - element.bndbox.ymin) / 2.0 + element.bndbox.ymin;\n    return { x: x, y: y };\n}\n\n// Find all the text elements that matches '25.0'\nconst elts = await aui.get().text().withText('25.0').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<elts.length; ++i){\n    const centroid = getCentroid(elts[i]);\n    await aui.moveMouse(Math.round(centroid.x), Math.round(centroid.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"withText2",src:a(78916).Z,width:"960",height:"1139"})),(0,i.kt)("p",null,"You will see that askui clicks not only the ",(0,i.kt)("strong",{parentName:"p"},"25.0")," but also the ",(0,i.kt)("strong",{parentName:"p"},"26.0"),", which is the fat of the ",(0,i.kt)("strong",{parentName:"p"},"Apple pie"),". The result of this test code may differ in your case, because of the different screen resolution and the rendered-size of the demo app."),(0,i.kt)("p",null,"It will give you a clear idea where you will need to use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()"),". Try to run the same code after replacing the ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"withExactText()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Find all the text elements that matches '25.0' exactly\nconst elts = await aui.get().text().withExactText('25.0').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<elts.length; ++i){\n    const centroid = getCentroid(elts[i]);\n    await aui.moveMouse(Math.round(centroid.x), Math.round(centroid.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"withExactText",src:a(65047).Z,width:"960",height:"1139"})),(0,i.kt)("h2",{id:"match-text-with-regular-expression"},"Match Text with Regular Expression"),(0,i.kt)("p",null,"The method ",(0,i.kt)("inlineCode",{parentName:"p"},"withTextRegex()")," supports ",(0,i.kt)("strong",{parentName:"p"},"Regular Expression")," to match any text in the most flexible way. Although it might be tricky to use regex due to its esoteric appearance, it is maybe one of the best solution when it comes to character matching."),(0,i.kt)("p",null,"On the same page of the demo app, let's say that we want to click on the items whose Calorie is between 300 and 500 ",(0,i.kt)("inlineCode",{parentName:"p"},"(cal>=300 && cal<500)"),". Since regex doesn't support numeric comparison, we will try to match the digits in a sequence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Find all the text that matches the expression\nconst cals = await aui.get().text().withTextRegex('[3-4][0-9]{2}').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<cals.length; ++i){\n    const coord = getCentroid(cals[i]);\n    console.log(cals[i].text, coord);\n    await aui.moveMouse(Math.round(coord.x), Math.round(coord.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"withTextRegex",src:a(33536).Z,width:"960",height:"1139"})),(0,i.kt)("p",null,"The regular expression ",(0,i.kt)("inlineCode",{parentName:"p"},"[3-4][0-9]{2}")," means,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[3-4]"),": Match one character between 3 and 4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[0-9]"),": Match one character between 0 and 9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"{2}"),": Repeat the previous expression (","[0-9]",") two times.")),(0,i.kt)("p",null,"As the result, it will try to match every text that has a sequence starting with the digit 3 or 4, and then has any two digits in a row."),(0,i.kt)("h2",{id:"keep-reading"},"Keep Reading"),(0,i.kt)("p",null,"Check out other articles to discover more about askui:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Best Practices")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Best%20Practice/selecting-with-text"},"Selecting an Element with Text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Best%20Practice/speed_up_execution"},"Speed Up Execution"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tutorials")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Tutorials/google-cat-search"},"Search Image in Google")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Tutorials/shop-demo"},"Login at an Online Shop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Tutorials/spotify-tutorial"},"Automate Spotify on Desktop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Tutorials/zip-images-upload-googledrive-windows"},"Upload a Zip File to Google Drive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Tutorials/android-search-in-browser"},"Automate an Android App"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Continuous Integration")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Continuous%20Integration/askui-ui-controller-docker-images"},"askui UI Controller Docker Images")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/Continuous%20Integration/gitlab-ci"},"Gitlab CI/CD"))))}p.isMDXComponent=!0},28414:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/containsText-a48575b52706cf0ed5894bdaf9229852.gif"},65047:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/withExactText-22d137a43ea2ecff93238b9208ef3a85.gif"},2699:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/withText-89a3b4d3a0254f057f1f6ee3d9220b11.gif"},78916:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/withText2-eb58c4cd466392c600a0d956b2efab6d.gif"},33536:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/withTextRegex-dae763b2b7d9a7fd5de63184a595907a.gif"}}]);