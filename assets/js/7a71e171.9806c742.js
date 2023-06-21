"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8761],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),h=o,d=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(25773),o=(n(27378),n(35318));const i={sidebar_position:1},r="Custom Elements",l={unversionedId:"general/Tutorials/custom-element",id:"version-0.10.5/general/Tutorials/custom-element",title:"Custom Elements",description:"Important: This increases the runtime quite a bit. So use it only if absolutely necessary.",source:"@site/versioned_docs/version-0.10.5/general/06-Tutorials/custom-element.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/custom-element",permalink:"/docs/general/Tutorials/custom-element",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/general/06-Tutorials/custom-element.md",tags:[],version:"0.10.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Tutorials",permalink:"/docs/general/Tutorials/"},next:{title:"Automate Multiple Devices",permalink:"/docs/general/Tutorials/multi-device"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Understanding the <code>customElement()</code> in askui",id:"understanding-the-customelement-in-askui",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Two Things to be Aware of When Using <code>customElement()</code>",id:"two-things-to-be-aware-of-when-using-customelement",level:3},{value:"Capture the Custom Element",id:"capture-the-custom-element",level:2},{value:"Write the askui Code",id:"write-the-askui-code",level:2},{value:"Breaking Down the Code",id:"breaking-down-the-code",level:2},{value:"1) Open the Web Browser and Go To the Desired Website",id:"1-open-the-web-browser-and-go-to-the-desired-website",level:3},{value:"2) Search for the Location",id:"2-search-for-the-location",level:3},{value:"Drag the Human Icon to the Desired Location",id:"drag-the-human-icon-to-the-desired-location",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:m};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-elements"},"Custom Elements"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Important"),": This increases the runtime quite a bit. So use it only if absolutely necessary.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Custom Element Selection")," is a feature in askui that enables you to create custom element-descriptions for elements on the screen, instead of relying on the standard element-descriptions provided such as ",(0,o.kt)("strong",{parentName:"p"},"Button"),", ",(0,o.kt)("strong",{parentName:"p"},"Textfield"),", etc."),(0,o.kt)("p",null,"With this feature, you can define a custom element-descriptions based on how the element is displayed on the screen. This can be particularly useful in situations where standard element-descriptions are unreliable due to the non-standard properties of the element. It provides greater flexibility and control, allowing you to tailor the automation to meet the specific needs of your application."),(0,o.kt)("p",null,"Here we will demonstrate how to use a custom element to explore Google Street View."),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("video",{controls:!0},(0,o.kt)("source",{src:"https://d2dnep8p8ldagm.cloudfront.net/assets/docs/blog_customElement_askui_google_street_view.mp4"})),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"askui")," - Follow ",(0,o.kt)("a",{parentName:"li",href:"https://docs.askui.com/docs/general/Getting%20Started/getting-started"},"this tutorial")," if you haven't installed it yet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Web Browser")," - We use Safari in this demonstration, but you can use any web browser you have.")),(0,o.kt)("h2",{id:"understanding-the-customelement-in-askui"},"Understanding the ",(0,o.kt)("inlineCode",{parentName:"h2"},"customElement()")," in askui"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"customElement()")," is an element to look for on the screen that is defined by the user with a given image.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Example of customElement()\n\nawait aui\n    .click()\n    .customElement({\n        customImage: './logo.png', // required\n        name: 'myLogo', // optional\n        threshold: 0.9, // optional, defaults to 0.9\n        rotationDegreePerStep: 0, // optional, defaults to 0\n        imageCompareFormat: 'grayscale', // optional, defaults to 'grayscale'\n    })\n    .exec();\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"customImage")," (",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"string"),", required"),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A cropped image in the form of a base64 string or file path."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," (",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"string"),", optional"),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A unique name that can be used for filtering for the custom element. If not given, any text inside the custom image will be detected via OCR."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"threshold")," (",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"number"),", optional"),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A threshold for how much a UI element needs to be similar to the custom element as defined. Takes values between ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0")," (== all elements are recognized as the custom element which is probably not what you want) and ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0")," (== elements need to look exactly like the ",(0,o.kt)("inlineCode",{parentName:"li"},"customImage")," which is unlikely to be achieved as even minor differences count). Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.9"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rotationDegreePerStep")," (",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"number"),", optional"),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Step size in rotation degree. Rotates the custom image by this step size until 360\xb0 is exceeded. The range is from ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"360"),". Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"imageCompareFormat")," (",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"'RGB' | 'grayscale'"),", optional"),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The color compare style. ",(0,o.kt)("inlineCode",{parentName:"li"},"grayscale")," compares the brightness of each pixel whereas ",(0,o.kt)("inlineCode",{parentName:"li"},"RGB")," compares all three color. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"grayscale"),".")))),(0,o.kt)("h3",{id:"two-things-to-be-aware-of-when-using-customelement"},"Two Things to be Aware of When Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"customElement()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1) Create the Custom Image by Cropping it From The Actual Screen")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To find a matching element from the screen, the custom image ",(0,o.kt)("strong",{parentName:"li"},"must be the same as it is displayed on the screen.")," By saying ",(0,o.kt)("em",{parentName:"li"},"same")," in this sense, includes the ",(0,o.kt)("strong",{parentName:"li"},"size, rotation as well as the overlapping object,")," if there is any. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"match-cases",src:n(47360).Z,width:"2500",height:"873"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Note the ",(0,o.kt)("strong",{parentName:"p"},"left-bottom case")," of the illustration. A rotated element can be also matched, but ",(0,o.kt)("strong",{parentName:"p"},"only if")," everything else except the rotation are staying the same as it is displayed on the screen. If you can assure that your custom image is exactly the same as it is displayed on the screen + if you know the degree of the rotation, then you could consider using the ",(0,o.kt)("strong",{parentName:"p"},"rotationDegreePerStep")," parameter. And because askui will try to rotate the custom element for the whole revolution, a divisor of the rotated degree could be also used, e.g in the illustrated case, we can use not only ",(0,o.kt)("inlineCode",{parentName:"p"},"90")," but also ",(0,o.kt)("inlineCode",{parentName:"p"},"45"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"30"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"15"),", etc. But since smaller degrees will require more iteration steps, it will increase the runtime by a notable amount.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The simplest way")," to accomplish it might be ",(0,o.kt)("strong",{parentName:"p"},"to screen capture and crop the desired image from your screen directly.")," In Windows and macOS, you can use the built-in screen capture tool:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Windows: Press ",(0,o.kt)("inlineCode",{parentName:"li"},"windows")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"s")," (Windows 10 or higher)"),(0,o.kt)("li",{parentName:"ul"},"macOS: Press ",(0,o.kt)("inlineCode",{parentName:"li"},"cmd")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"4")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In both cases, you will be asked to select a certain portion of the screen. On Windows, the captured image will be stored in the clipboard, so you will need to save it to an image file. On macOS, the image will be saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Desktop")," by default."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2) The Time of the Execution will Increase by a Notable Amount")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To examine whether the custom image matches the given screen, askui iterates through the whole pixels of the given screen as well as the custom image. So it is likely to increase the runtime by a notable amount. Therefore, if the task could be accomplished with other element-descriptions such as ",(0,o.kt)("inlineCode",{parentName:"li"},"icon()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"button()"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"text()"),", then it's maybe better to avoid using the ",(0,o.kt)("inlineCode",{parentName:"li"},"customElement()"),".")),(0,o.kt)("h2",{id:"capture-the-custom-element"},"Capture the Custom Element"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In this demonstration, we will search for a certain area in ",(0,o.kt)("strong",{parentName:"li"},"Google Street View"),". This can be enabled by pressing a button ",(0,o.kt)("strong",{parentName:"li"},"at the right corner of the ",(0,o.kt)("a",{parentName:"strong",href:"https://maps.google.com"},"Google Maps")),":")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"button",src:n(6214).Z,width:"186",height:"304"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Can you see the yellow tiny human in the corner? We need an image of this human figure to interact with it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Let's make a screen capture of it. It shall look like this:\n",(0,o.kt)("img",{alt:"human-figure",src:n(15619).Z,width:"42",height:"48"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then save the image in your project's root directory with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"human-figure.png"),". The file tree of your project's root directory will be like this:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"project_root/\n\u251c\u2500 node_modules/\n\u251c\u2500 test/\n\u251c\u2500 package.json\n\u251c\u2500 tsconfig.json\n\u251c\u2500 human-figure.png\n")),(0,o.kt)("h2",{id:"write-the-askui-code"},"Write the askui Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are prepared with the image above, let's jump into our code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { aui } from './helper/jest.setup';\n\ndescribe('Explore the world in google maps', ()=>{\n\n  it('open web browser and go to  google maps', async ()=>{\n\n    // open the start menu/spotlight to search for the web browser\n    await aui.pressTwoKeys('command', 'space').exec(); // for macOS\n    // await aui.pressKey('command').exec(); // for Windows\n    await aui.waitFor(250).exec(); // wait for the start menu to open\n\n    await aui.type('safari').exec(); // type the name of the web browser\n    // await aui.type('chrome').exec(); // if you are using another web browser, replace the name to it\n    await aui.pressKey('enter').exec(); // open the web browser\n    await aui.waitFor(1000).exec(); // wait for the web browser to open\n\n    await aui.type('https://maps.google.com').exec(); // type the url of the website\n    await aui.pressKey('enter').exec(); // open the website\n    await aui.waitFor(1000).exec(); // wait for the website to load\n\n  });\n\n  it('search for a location', async ()=>{\n    \n    await aui.type('machu picchu').exec(); // type the name of the location\n    await aui.pressKey('enter').exec(); // search for the location\n    await aui.waitFor(2000).exec(); // wait for the map to load\n    await aui.pressKey(',').exec(); // hide the side panel\n\n  });\n\n  it('enable street view', async ()=>{\n\n    // now we look for our custom element on the map\n    // move the mouse to the custom element\n    await aui.moveMouseTo()\n        .customElement({\n            customImage: \"./human-figure.png\",\n            name: \"street-view-icon\",\n            threshold: 0.9,\n        })\n        .exec();\n\n    // click and hold on the custom element\n    await aui.mouseToggleDown().exec();\n\n    // drag the custom element(our human) to the location we want to explore\n    // note the offset of -50 pixels along the y axis\n    // we drag the human 10 pixels higher than the location Aguas Calientes\n    await aui.moveMouseRelativelyTo(0, -10).text().withText('Aguas Calientes').exec();\n\n    // release the mouse button\n    await aui.mouseToggleUp().exec();\n  });\n});  \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After successfully running the code, you will be able to see the landscape of ",(0,o.kt)("strong",{parentName:"p"},"Machu Picchu"),", the most iconic citadel of the lost empire Inca.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is possible that you end up with a plain ",(0,o.kt)("strong",{parentName:"p"},"Google Map")," without having the ",(0,o.kt)("strong",{parentName:"p"},"Street View")," enabled. It might be caused by various reasons, but the most likely scenario is due to the different resolutions of the screen (your display can have a different resolution than mine). You could try to ",(0,o.kt)("strong",{parentName:"p"},"adjust the amount of the pixel offset")," that is given to the ",(0,o.kt)("inlineCode",{parentName:"p"},"moveMouseRelativelyTo()"),", for example, try with ",(0,o.kt)("inlineCode",{parentName:"p"},"moveMouseRelativelyTo(-5, -15)"),"."))),(0,o.kt)("h2",{id:"breaking-down-the-code"},"Breaking Down the Code"),(0,o.kt)("h3",{id:"1-open-the-web-browser-and-go-to-the-desired-website"},"1) Open the Web Browser and Go To the Desired Website"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One notable part of this step is the ",(0,o.kt)("inlineCode",{parentName:"li"},"waitFor()")," after each execution. We have used it in three different lines of this code block. Check out the respective parts and adjust the amount of time to wait until the process is finished. It may take more or less time depending on the condition of your device and internet connection:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('open web browser and go to  google maps', async ()=>{\n    // open the start menu/spotlight to search for the web browser\n    await aui.pressTwoKeys('command', 'space').exec(); // for macOS\n    // await aui.pressKey('command').exec(); // for Windows\n    await aui.waitFor(250).exec(); // wait for the start menu to open\n\n    await aui.type('safari').exec(); // type the name of the web browser\n    await aui.pressKey('enter').exec(); // open the web browser\n    await aui.waitFor(1000).exec(); // wait for the web browser to open\n\n    await aui.type('https://maps.google.com').exec(); // type the url of the website\n    await aui.pressKey('enter').exec(); // open the website\n    await aui.waitFor(1000).exec(); // wait for the website to load\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Also, don't forget to change the key to press and the name of the web browser based on your condition.")),(0,o.kt)("h3",{id:"2-search-for-the-location"},"2) Search for the Location"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here we type our desired keyword into the textfield of Google Maps. As the textfield gets focused automatically, we can directly type in the keyword to the textfield:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('search for a location', async ()=>{\n\n    await aui.type('machu picchu').exec(); // type the name of the location\n    await aui.pressKey('enter').exec(); // search for the location\n    await aui.waitFor(2000).exec(); // wait for the map to load\n    await aui.pressKey(',').exec(); // hide the side panel\n\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note that we also press the ",(0,o.kt)("inlineCode",{parentName:"li"},","),"(comma) key to hide the side panel of Google Maps. This is for hiding unnecessary information from the screen.")),(0,o.kt)("h2",{id:"drag-the-human-icon-to-the-desired-location"},"Drag the Human Icon to the Desired Location"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Finally, we drag our human, which we defined as our ",(0,o.kt)("strong",{parentName:"li"},"Custom Element"),", to the desired location."),(0,o.kt)("li",{parentName:"ul"},"Firstly, we move the mouse cursor to our custom element."),(0,o.kt)("li",{parentName:"ul"},"For dragging the mouse, we use the ",(0,o.kt)("inlineCode",{parentName:"li"},"mouseToggleDown()")," to ",(0,o.kt)("strong",{parentName:"li"},"press-and-hold")," the mouse left button."),(0,o.kt)("li",{parentName:"ul"},"After that, we move the mouse to the desired location."),(0,o.kt)("li",{parentName:"ul"},"Thereafter, we use ",(0,o.kt)("inlineCode",{parentName:"li"},"mouseToggleUp()")," to ",(0,o.kt)("strong",{parentName:"li"},"release")," the mouse button.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('enable street view', async ()=>{\n\n    // now we look for our custom element on the map\n    // move the mouse to the custom element\n    await aui.moveMouseTo()\n        .customElement({\n            customImage: \"./human-figure.png\",\n            name: \"maps\",\n            threshold: 0.9,\n        })\n        .exec();\n\n    // click and hold on the custom element\n    await aui.mouseToggleDown().exec();\n\n    // drag the custom element(our human) to the location we want to explore\n    // note the offset of -10 pixels in the y axis\n    // we drag the human to 10 pixels higher than the location Aguas Calientes\n    await aui.moveMouseRelativelyTo(0,-10).text().withText('Aguas Calientes').exec();\n\n    // release the mouse button\n    await aui.mouseToggleUp().exec();\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note the optional parameters for the ",(0,o.kt)("inlineCode",{parentName:"li"},"customElement()"),", especially the ",(0,o.kt)("inlineCode",{parentName:"li"},"threshold")," that is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.9"),"."),(0,o.kt)("li",{parentName:"ul"},"This parameter can be set from ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0")," up to ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0.0")," will consider every element on the screen as matched with the given image."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1.0")," will examine the given elements as strict as possible, so you might end up without any matching element found."))),(0,o.kt)("li",{parentName:"ul"},"So, the best scenario to set the ",(0,o.kt)("inlineCode",{parentName:"li"},"threshold")," might be:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1) Make the custom image to be as precise as possible (cropping from the screen)."),(0,o.kt)("li",{parentName:"ul"},"2) Keep the ",(0,o.kt)("inlineCode",{parentName:"li"},"threshold")," relatively higher, but below ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0"))))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"If you plan to program an automation where you have elements with non-standard properties, you might want to consider using the custom element feature of askui. But as mentioned above, keep in mind that, as a trade-off, it consumes more time than other features. Taking it into account, using a custom element to interact with the given UI can be a huge help, especially if the element lacks standard properties such as tag or appearance. "),(0,o.kt)("p",null,"If you got any issues while following this article, don't hesitate to ask for help in our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/Gu35zMGxbx"},"Discord Community!")," We are more than glad to hear about your experience and help!"))}p.isMDXComponent=!0},6214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/google-map-ui-92d55ad00f4d1c1c58176dd74a10f2fa.png"},47360:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/heart-custom-element-description-274479153c49c98b2f11564168d067a9.jpg"},15619:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);