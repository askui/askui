"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34546],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(25773),r=(n(27378),n(35318));const i={sidebar_position:5},o="Web Search on Android",s={unversionedId:"general/Tutorials/android-search-in-browser",id:"version-0.10.1/general/Tutorials/android-search-in-browser",title:"Web Search on Android",description:"In this tutorial, we will automate web searching on Android devices. This tutorial assumes that you have already set up your Android Development Environment. If you haven't set it up yet, you can check out our Setup Android tutorial.",source:"@site/versioned_docs/version-0.10.1/general/06-Tutorials/android-search-in-browser.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/android-search-in-browser",permalink:"/docs/0.10.1/general/Tutorials/android-search-in-browser",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.1/general/06-Tutorials/android-search-in-browser.md",tags:[],version:"0.10.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Setting up Android Devices",permalink:"/docs/0.10.1/general/Tutorials/setup-android"},next:{title:"Flutter Sample Android App",permalink:"/docs/0.10.1/general/Tutorials/flutter-android-sample-app"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"1. Prepare the AskUI Development Environment",id:"1-prepare-the-askui-development-environment",level:2},{value:"Install and initialize AskUI",id:"install-and-initialize-askui",level:3},{value:"2. Try Annotating",id:"2-try-annotating",level:2},{value:"3. Automate Web Searching",id:"3-automate-web-searching",level:2},{value:"1) Open Chrome",id:"1-open-chrome",level:3},{value:"2) Select the Search Bar and Type &#39;spacecraft&#39;",id:"2-select-the-search-bar-and-type-spacecraft",level:3},{value:"3) Click on the Desired Search Result",id:"3-click-on-the-desired-search-result",level:3},{value:"4. Complete AskUI Code",id:"4-complete-askui-code",level:2},{value:"5. Conclusion",id:"5-conclusion",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-search-on-android"},"Web Search on Android"),(0,r.kt)("p",null,"In this tutorial, we will automate web searching on Android devices. This tutorial assumes that you have already set up your Android Development Environment. If you haven't set it up yet, you can check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.1/general/Tutorials/setup-android#android-automation"},"Setup Android tutorial"),"."),(0,r.kt)("p",null,"If you have already set up your development environment, go directly to ",(0,r.kt)("a",{parentName:"p",href:"#3-automate-web-searching"},"3. Automate Web Searching")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Index")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#1-prepare-the-askui-development-environment"},"1. Prepare the AskUI Development Environment"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"#2-try-annotating"},"2. Try Annotation"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"#3-automate-web-searching"},"3. Automate Web Searching"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"#4-complete-askui-code"},"4. Complete AskUI Code"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"#5-conclusion"},"5. Conclusion"),"  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Android Studio")," or ",(0,r.kt)("strong",{parentName:"li"},"Android SDK Command-line Tools")," installed (See ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.10.1/general/Tutorials/setup-android#android-automation"},"Setup Android tutorial"),")."),(0,r.kt)("li",{parentName:"ul"},"(optional) Android device, if you want to run your app on a real device.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-prepare-the-askui-development-environment"},"1. Prepare the AskUI Development Environment"),(0,r.kt)("h3",{id:"install-and-initialize-askui"},"Install and initialize AskUI"),(0,r.kt)("p",null,"Please follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.1/general/Getting%20Started/getting-started"},"Getting Started")," tutorial."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure AskUI for Android")),(0,r.kt)("p",null,"We need to run the UiController manually with an extra argument to specify the runtime mode, as the current version of AskUI doesn't provide the API for running it with the runtime option yet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# first, go to the folder that contains the binary\ncd <YOUR_PROJECT_DIRECTORY>/node_modules/askui/dist/release/latest/<YOUR_PLATFORM>\n\n# for example, Mac OS\ncd node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app/Contents/MacOS/\n\n# then run it\n./askui-ui-controller -r android\n\n# If you can't find the binary as described above,\n# then you might have AskUI freshly installed and haven't run it yet.\n# The binary gets downloaded as the AskUI code runs the first time.\n# Run the command below to run the AskUI code:\nnpx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n")),(0,r.kt)("p",null,"If the UiController starts, it will display the log of it on the shell. We can leave it in the background, and prepare a new terminal window for the next step."),(0,r.kt)("p",null,"\ud83d\udca1",(0,r.kt)("em",{parentName:"p"},"If you got any errors after running the binary, please check if your android device/emulator is properly connected and recognized by the Android Debug Bridge ",(0,r.kt)("inlineCode",{parentName:"em"},"adb")," by using this command: ",(0,r.kt)("inlineCode",{parentName:"em"},"adb devices"),". You should see a list of recognized devices.")),(0,r.kt)("p",null,"Next, we have to change a few lines of the generated code, as the code ships with the part that creates another ",(0,r.kt)("strong",{parentName:"p"},"UiController")," instance."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"helper/jest.setup.ts")," and comment out every line that is using ",(0,r.kt)("inlineCode",{parentName:"p"},"uiController"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { UiControlClient, UiController } from 'askui';\n\n// Server for controlling the operating system\n// let uiController: UiController;\n\n// Client is necessary to use the askui API\n// eslint-disable-next-line import/no-mutable-exports\nlet aui: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n//   uiController = new UiController({\n//     /**\n//      * Select the display you want to run your tests on, display 0 is your main display;\n//      * ignore if you have only one display\n//      */\n//     display: 0,\n//   });\n\n//   await uiController.start();\n\n  aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: myworkspaceid,\n      token: mytoken,\n    }\n  });\n\n  await aui.connect();\n});\n\nafterAll(async () => {\n//   await uiController.stop();\n\n  aui.close();\n});\n\nexport { aui };\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-try-annotating"},"2. Try Annotating"),(0,r.kt)("p",null,"Make sure that your Android device is connected, or if you are using the Android Emulator, make sure that it is open and running on your local machine."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AskUI")," provides a feature where you can monitor how the visible elements are understood by ",(0,r.kt)("strong",{parentName:"p"},"AskUI"),". Try to change the code within ",(0,r.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts")," to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should show the annotation', async () => {\n    await aui.annotateInteractively();\n  });\n});\n")),(0,r.kt)("p",null,"and run,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"annotated-chrome",src:n(29714).Z,width:"600",height:"1386"})),(0,r.kt)("p",null,"\ud83d\udca1 ",(0,r.kt)("strong",{parentName:"p"},"Annotation is Interactive"),"\n",(0,r.kt)("em",{parentName:"p"},"Try to hover your mouse on the red bounding box. It will let you know how to manipulate that element via AskUI")),(0,r.kt)("h2",{id:"3-automate-web-searching"},"3. Automate Web Searching"),(0,r.kt)("p",null,"Now we are good to go for the actual automation process.\nThe automation consist of three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Chrome"),(0,r.kt)("li",{parentName:"ol"},"Select the search bar and type 'spacecraft'"),(0,r.kt)("li",{parentName:"ol"},"Click on the desired search result")),(0,r.kt)("h3",{id:"1-open-chrome"},"1) Open Chrome"),(0,r.kt)("p",null,"To open Chrome, we first have to figure out how we can let ",(0,r.kt)("strong",{parentName:"p"},"AskUI")," know where to click on."),(0,r.kt)("p",null,"As we can see in the annotated image above, the Chrome icon is recognized as an ",(0,r.kt)("inlineCode",{parentName:"p"},"icon: undo"),". Indeed, we could also tell ",(0,r.kt)("strong",{parentName:"p"},"AskUI")," to select the ",(0,r.kt)("inlineCode",{parentName:"p"},"icon: undo"),", but we will try to do it in a more precise way."),(0,r.kt)("p",null,"What we're gonna do is:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(1) Select the search bar")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(2) Type 'chrome'")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(3) Select the icon above the text 'chrome'")),(0,r.kt)("p",null,'This approach will give us a more consistent result because typing "chrome" in the search bar will give us a more understandable visual element.'),(0,r.kt)("p",null,"Try to change your code according to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should open chrome', async () => {\n\n    await aui.click().textfield().exec();\n\n    // Type the desired keyword into the search bar\n    await aui.type('chrome').exec();\n\n    // We wait for 1500 milliseconds, to make sure that the search result \n    // has been loaded before AskUI start to look for the search result. \n    await aui.waitFor(1500).exec(); \n\n    // Then click the icon that is above the text 'chrome'\n    await aui.click().icon().above().text('chrome').exec();\n  });\n});\n")),(0,r.kt)("p",null,"and run,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n")),(0,r.kt)("p",null,"Now you will be able to see that Chrome has been opened."),(0,r.kt)("h3",{id:"2-select-the-search-bar-and-type-spacecraft"},"2) Select the Search Bar and Type 'spacecraft'"),(0,r.kt)("p",null,"Let's select the search bar of chrome, and type our desired keyword in there."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chrome-main-page",src:n(99568).Z,width:"600",height:"1373"})),(0,r.kt)("p",null,"Add this code block to the bottom of our code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// We first look for the search bar. Depending on the system language of your device, the default text within the search bar may differ.\nawait aui.click().text('search or type web address').exec();\n\n// Type our desired keyword and hit enter\nawait aui.type('spacecraft').exec();\nawait aui.pressAndroidKey('enter').exec();\n")),(0,r.kt)("p",null,"In some cases, when searching in Google, you will be asked to give consent for the cookies.\nTo avoid our execution from failing, we have to examine whether we got a pop-up for the cookie consent or not:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n    // The 'expect()' examines whether a specific element is detected or not.\n    // An instruction starting with 'expect()' must always end with 'exists()' or 'notExists()'\n    await aui.expect().text().containsText('cookies').notExists().exec();\n} catch (error) {\n    await aui.click().text('read more').exec();\n    await aui.waitFor(1000).exec(); // wait until the scrolling animation has been finished\n    await aui.click().text('accept all').exec();\n}\n// From here, we can write our next instructions\n")),(0,r.kt)("h3",{id:"3-click-on-the-desired-search-result"},"3) Click on the Desired Search Result"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"search-result-spacecraft",src:n(33530).Z,width:"600",height:"1373"})),(0,r.kt)("p",null,"After clearing the cookie consent pop-up, we can see and click our desired search result. In our case, we will look for the result from Wikipedia:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// We ask the AskUI to click the text that contains 'wikipedia',\n// which is the text that is nearest to the text containing 'wikipedia.org'\nawait aui.click()\n    .text()\n    .containsText('wikipedia')\n    .nearestTo()\n    .text()\n    .containsText('wikipedia.org')\n    .exec();\n")),(0,r.kt)("p",null,"Pay attention to the relational element-description ",(0,r.kt)("inlineCode",{parentName:"p"},"nearestTo()")," that is interconnecting two different text elements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AskUI")," offers several ",(0,r.kt)("strong",{parentName:"p"},"Relational Element-Descriptions"),", which enable you to select the desired element by their screen position:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.askui.com/docs/api/Relations/above"},"above()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.askui.com/docs/api/Relations/below"},"below()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.askui.com/docs/api/Relations/contains"},"contains()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.askui.com/docs/api/Relations/in"},"in()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.askui.com/docs/api/Relations/leftof"},"leftOf()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.askui.com/docs/api/Relations/rightof"},"rightOf()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.askui.com/docs/api/Relations/nearestto"},"nearestTo()"))),(0,r.kt)("p",null,"\ud83d\udca1 ",(0,r.kt)("strong",{parentName:"p"},"About withText() and containsText():")),(0,r.kt)("p",null,"You might wonder how ",(0,r.kt)("inlineCode",{parentName:"p"},"withText()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"containsText()")," differ. ",(0,r.kt)("inlineCode",{parentName:"p"},"withText()")," tries to match the given text as the whole sequence, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"containsText()")," tries to match the given text as a sub-text within the elements. Generally speaking, ",(0,r.kt)("inlineCode",{parentName:"p"},"containsText()")," can be handier to match the text roughly, but you might face a case where you want to find a specific text as a whole sequence."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4-complete-askui-code"},"4. Complete AskUI Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should search spacecraft in chrome', async () => {\n    \n    await aui.click().textfield().exec();    \n\n    // Type the desired keyword into the search bar\n    await aui.type('chrome').exec();\n    // We wait for 1500 miliseconds, to make sure that the search result has been loaded before AskUI start to look for the search result. \n    await aui.waitFor(1500).exec(); \n    // Then click the icon that is above the text 'chrome'\n    await aui.click().icon().above().text('chrome').exec();\n\n    // We wait the Chrome app to be launched\n    await aui.waitFor(1500).exec();\n\n    // We first look for the search bar. Depending on the system language of your device, the default text within the search bar may differ.\n    await aui.click().text('search or type web address').exec();\n\n    // Type our desired keyword and hit enter\n    await aui.type('spacecraft').exec();\n    await aui.pressAndroidKey('enter').exec();\n\n    // We wait for the search result to be loaded\n    await aui.waitFor(3000).exec();\n\n    try {\n        // The 'expect()' examines whether a specific element is detected or not.\n        // An instruction starting with 'expect()' must always end with 'exists()' or 'notExists()'\n        await aui.expect().text().containsText('cookies').notExists().exec();\n    } catch (error) {\n        await aui.click().text('read more').exec();\n        await aui.waitFor(1000).exec(); // wait until the scrolling animation has been finished\n        await aui.click().text('accept all').exec();\n    }\n\n    // We ask the AskUI to click the text that contains 'wikipedia' which is the text that is nearest to the text containing 'wikipedia.org'\n    await aui.click().text().containsText('wikipedia').nearestTo().text().containsText('wikipedia.org').exec();\n  });\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"5-conclusion"},"5. Conclusion"),(0,r.kt)("p",null,"We have covered a use case of AskUI to automate web searching in Android devices. If you got any issues while following the instruction, feel free to ask in our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/Gu35zMGxbx"},"Discord"),"!"))}p.isMDXComponent=!0},29714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/annotation-chrome-46e87cbace798b3fa4297a88a33863e9.png"},99568:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chrome-main-d9fee1233fe042983eb2f0c6fad8090b.png"},33530:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-result-27de309a46eec5fe671e882d87c03ef9.png"}}]);