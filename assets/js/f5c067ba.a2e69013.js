"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1517],{65486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(85893),o=t(11151);const a={sidebar_position:7},s="Google Cat Image Search",r={id:"general/Tutorials/google-cat-search",title:"Google Cat Image Search",description:"The following tutorial shows you how to search for cat images on Google Image Search with AskUI.",source:"@site/versioned_docs/version-0.12.2/general/06-Tutorials/google-cat-search.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/google-cat-search",permalink:"/docs/0.12.2/general/Tutorials/google-cat-search",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/general/06-Tutorials/google-cat-search.md",tags:[],version:"0.12.2",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Flutter Sample Android App",permalink:"/docs/0.12.2/general/Tutorials/flutter-android-sample-app"},next:{title:"Online Shop Login",permalink:"/docs/0.12.2/general/Tutorials/shop-demo"}},l={},c=[{value:"Setup",id:"setup",level:2},{value:"Setting Up AskUI",id:"setting-up-askui",level:2},{value:"Writing and Debugging an AskUI Workflow",id:"writing-and-debugging-an-askui-workflow",level:2},{value:"Debugging",id:"debugging",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"google-cat-image-search",children:"Google Cat Image Search"}),"\n",(0,i.jsx)(n.p,{children:"The following tutorial shows you how to search for cat images on Google Image Search with AskUI."}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Follow one of the two options under ",(0,i.jsx)("a",{href:"../Getting%20Started/start",target:"_blank",children:"Start to install AskUI"})]}),"\n",(0,i.jsxs)(n.li,{children:["Open a Chrome browser window on your screen","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you have multiple screens, configure the used display by setting the display variable in ",(0,i.jsx)(n.code,{children:"test/helper/jest.setup.js"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-askui",children:"Setting Up AskUI"}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udcad Let\u2019s say we\u2019re on ",(0,i.jsx)(n.a,{href:"http://google.com",children:"google.com"})," and we want to ",(0,i.jsx)(n.strong,{children:"search for an image of a cat and then download it to our computer"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"First, we break this task down into steps that a user would take. Then we can recreate those steps with AskUI instructions in code."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Go to Google Search page"}),"\n",(0,i.jsx)(n.li,{children:"Go to google images"}),"\n",(0,i.jsx)(n.li,{children:"Type \u201ccat\u201d in the search bar"}),"\n",(0,i.jsx)(n.li,{children:"Select image"}),"\n",(0,i.jsx)(n.li,{children:"Right-click + save the image"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Let us first get an annotated screenshot, where all of the on-screen elements are enclosed within ",(0,i.jsx)(n.strong,{children:"annotated bounding boxes"}),". This will help us select the correct elements with our instructions."]}),"\n",(0,i.jsxs)(n.p,{children:["Open the file ",(0,i.jsx)(n.em,{children:"test/my-first-askui-test-suite.test.ts"})," and replace the ",(0,i.jsx)(n.em,{children:"it"}),"-code block starting in line 4 with the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"it('annotate', async () => {\n    await aui.annotate()\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Run the code from your terminal to create an annotated screenshot. A folder ",(0,i.jsx)(n.em,{children:"report"})," in your project folder will appear."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm run askui\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you want to annotate interactively change it to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"it('annotate', async () => {\n\n    // Hit 'Esc' to stop the annotation\n    // when you are done\n    await aui.annotateInteractively()\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ud83d\udccc The annotations are basically the substitute for IDs in selector-based frameworks.\nYou can click on them to copy them into your clipboard."}),"\n",(0,i.jsxs)(n.p,{children:["If you are having problems with the execution, ",(0,i.jsx)(n.a,{href:"/docs/0.12.2/general/Troubleshooting/",children:"have a look at our Troubleshooting page"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"writing-and-debugging-an-askui-workflow",children:"Writing and Debugging an AskUI Workflow"}),"\n",(0,i.jsx)(n.p,{children:"Now we can start to write our workflow, by locating the elements and then executing an instruction on them.\nRemember the steps, that we wanted to recreate?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Go to Google Search page"}),"\n",(0,i.jsx)(n.li,{children:"Go to google images"}),"\n",(0,i.jsx)(n.li,{children:"Type \u201ccat\u201d in the search bar"}),"\n",(0,i.jsx)(n.li,{children:"Select image"}),"\n",(0,i.jsx)(n.li,{children:"Right-click + save the image"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Make sure to open your browser on the configured display before the execution and move your mouse over the browser window immediately after starting the execution!"})}),"\n",(0,i.jsx)(n.p,{children:"In the end, your code for the workflow looks like this."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should find a cat image and save it', async () => {\n\n    // Make sure the browser window has focus\n    await aui.mouseLeftClick().exec();\n\n    // Open a new tab with keyboard shortcut\n    // MacOS: command + t\n    // Windows: control + T\n    // Linux: control + t\n    await aui\n      .pressTwoKeys('command', 't')\n      .exec();\n\n    // type google.com into browser bar\n    await aui\n      .typeIn('google.com')\n      .text()\n      .withText('Search Google or type a URL')\n      .exec();\n\n    // Hit enter key\n    await aui\n      .pressKey('enter')\n      .exec();\n\n    // Click the Images-text to the right of Gmail\n    await aui\n      .click()\n      .text().withTextRegex(\"Image*\")\n      .rightOf()\n      .text(\"Gmail\")\n      .exec();\n\n    // Type in cat into search field\n    // Notice: withText does not have to be 100% equal\n    await aui\n      .typeIn(\"cat\")\n      .textfield()\n      .contains()\n      .icon().withText('microphone')\n      .exec();\n\n    await aui\n      .pressKey('enter')\n      .exec();\n\n    // HINT\n    //     withText might need to be changed depending\n    //     on your search results!\n    await aui\n      .moveMouseTo()\n      .image()\n      .above()\n      .text()\n      .withText(\"pet guru Yuki Hattori explaiinICats\")\n      .exec();\n\n    // Save the image with right click\n    await aui\n      .mouseRightClick()\n      .exec()\n\n    // Find the right dialog entry\n    await aui\n      .click()\n      .text()\n      .withText('save image as')\n      .exec();\n\n    // Save it\n    // If it does not work because the button is not found\n    // Remove the '.button()'\n    await aui\n      .click()\n      .button()\n      .withText(\"Save\")\n      .exec();\n  });\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,i.jsx)(n.p,{children:"It\u2019s possible that you\u2019ll run into problems with locating elements. For example, when creating the tutorial, we first tried to locate the image nearest to the image title, like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'await aui\n    .moveMouseTo()\n    .image()\n    .nearestTo()\n    .text()\n    .withText("pet guru Yuki Hattori explaiinICats")\n    .exec()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["But it turns out, that our model uses a different metric for measuring distance between elements, which is why our workflow failed the first time. Then we substituted this function for ",(0,i.jsx)(n.em,{children:"above()"}),", which fixed the problem for us."]}),"\n",(0,i.jsxs)(n.p,{children:["Another problem regarding font-size occurred with the ",(0,i.jsx)(n.em,{children:"Images"})," button. The model recognized ",(0,i.jsx)(n.em,{children:"Image"})," with an ",(0,i.jsx)(n.strong,{children:"s"})," missing at the end. That is why we switched from _withText('Images') to ",(0,i.jsx)(n.em,{children:"withTextRegex('Image*')"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'await aui\n    .click()\n    .text().withTextRegex("Image*")\n    .rightOf()\n    .text("Gmail")\n    .exec();\n'})}),"\n",(0,i.jsx)(n.p,{children:"It is always a good idea to try to play around with the functions and see if you can tackle the problem from a different angle."}),"\n",(0,i.jsxs)(n.p,{children:["If you have a recurring or persisting issue, don\u2019t hesitate to ",(0,i.jsx)(n.a,{href:"https://bit.ly/3ekHnGR",children:"ask the community"})," for help. You can be sure that your questions will be answered there. We\u2019re excited to hear about how you apply AskUI to your projects."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have any feature requests, please feel free to ",(0,i.jsx)(n.a,{href:"https://bit.ly/3AP20T7",children:"post them in our Featurebase board"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Best regards and happy automating!"})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);