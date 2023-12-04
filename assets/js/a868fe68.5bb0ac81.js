"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12093],{9540:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(85893),n=t(11151);const s={sidebar_position:10},a="Zip Images and Upload to Google Drive on Windows",l={id:"general/Tutorials/zip-images-upload-googledrive-windows",title:"Zip Images and Upload to Google Drive on Windows",description:"This tutorial will show you how to zip files on your file system and then upload them to Google Drive with askui.",source:"@site/versioned_docs/version-0.10.5/general/06-Tutorials/zip-images-upload-googledrive-windows.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/zip-images-upload-googledrive-windows",permalink:"/docs/0.10.5/general/Tutorials/zip-images-upload-googledrive-windows",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/general/06-Tutorials/zip-images-upload-googledrive-windows.md",tags:[],version:"0.10.5",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Like on Spotify Desktop App",permalink:"/docs/0.10.5/general/Tutorials/spotify-tutorial"},next:{title:"Troubleshooting",permalink:"/docs/0.10.5/general/Troubleshooting/"}},r={},c=[{value:"Setup",id:"setup",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code",id:"code",level:2},{value:"Open the Folder askui",id:"open-the-folder-askui",level:2},{value:"Select All Images and Zip Them",id:"select-all-images-and-zip-them",level:2},{value:"Open Google Chrome",id:"open-google-chrome",level:2},{value:"Navigate to Google Drive",id:"navigate-to-google-drive",level:2},{value:"Find Zip-File and Upload",id:"find-zip-file-and-upload",level:2},{value:"Complete Code",id:"complete-code",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"zip-images-and-upload-to-google-drive-on-windows",children:"Zip Images and Upload to Google Drive on Windows"}),"\n",(0,o.jsx)(i.p,{children:"This tutorial will show you how to zip files on your file system and then upload them to Google Drive with askui."}),"\n",(0,o.jsx)("video",{controls:!0,children:(0,o.jsx)("source",{src:"https://d2dnep8p8ldagm.cloudfront.net/assets/docs/compress_photos_and_upload_them_on_google_drive_with_askui.mp4"})}),"\n",(0,o.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Follow the ",(0,o.jsx)("a",{href:"../Getting%20Started/getting-started",target:"_blank",children:"askui installation guide and write your first instruction"})]}),"\n",(0,o.jsxs)(i.li,{children:["Create a folder named ",(0,o.jsx)(i.em,{children:"askui"})," on your desktop and put some files into it"]}),"\n",(0,o.jsxs)(i.li,{children:["If you have multiple screens, configure the used display by setting the display variable at ",(0,o.jsx)(i.code,{children:"test/helper/jest.setup.js"})]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"You are working from Windows Operating System"}),"\n",(0,o.jsxs)(i.li,{children:["Create a folder ",(0,o.jsx)(i.em,{children:"askui"})," on your desktop"]}),"\n",(0,o.jsx)(i.li,{children:"Copy some images to it"}),"\n",(0,o.jsxs)(i.li,{children:["Change the view mode of the folder to ",(0,o.jsx)(i.em,{children:"miniature"})," so the images show a little preview"]}),"\n",(0,o.jsx)(i.li,{children:"You have to be logged in into your Google Account"}),"\n",(0,o.jsx)(i.li,{children:"Link to a Google Drive Folder"}),"\n",(0,o.jsxs)(i.li,{children:["Desktop icon with the name ",(0,o.jsx)(i.em,{children:"Google Chrome"})," that opens Google Chrome"]}),"\n"]})}),"\n",(0,o.jsx)(i.h2,{id:"code",children:"Code"}),"\n",(0,o.jsxs)(i.p,{children:["After running the ",(0,o.jsx)(i.code,{children:"npx askui init"})," command as described in the setup you will have a file ",(0,o.jsx)(i.code,{children:"test/my-first-askui-test-suite.test.ts"}),". In this file, add a new workflow (",(0,o.jsx)(i.code,{children:"it"}),"-code-block) inside the body of the callback passed to the ",(0,o.jsx)(i.code,{children:"describe"})," function:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-ts",children:"describe(/* a string identifying the askui suite */, () => {\n    ... (other workflows)\n\n    it('Should upload screenshots folder on google drive', async () => {\n\n    });\n});\n"})}),"\n",(0,o.jsx)(i.h2,{id:"open-the-folder-askui",children:"Open the Folder askui"}),"\n",(0,o.jsx)(i.p,{children:"Next, we want to click on the folder where our images are stored and open it."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-ts",children:"await aui.click().text('askui').exec();\nawait aui.mouseDoubleLeftClick().exec();\n"})}),"\n",(0,o.jsx)(i.h2,{id:"select-all-images-and-zip-them",children:"Select All Images and Zip Them"}),"\n",(0,o.jsxs)(i.p,{children:["Select the first image and then use the shortcut ",(0,o.jsx)(i.code,{children:"Ctrl + A"})," to select all images in the folder."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-ts",children:"// The text to insert here should be something in the opened explorer window.\n// Usually there is 'This PC' or 'Quick Access' there.\n// Watch the video if you are not sure how the element-descriptor works.\nawait aui.click().image().nearestTo().text('This PC').exec();\nawait aui.pressTwoKeys('control', 'A').exec();\n\nawait aui.mouseRightClick().exec();\nawait aui.click().text('Compress to Zip file').exec();\nawait aui.type('askui screenshots').exec();\nawait aui.pressKey('enter').exec();\n"})}),"\n",(0,o.jsx)(i.h2,{id:"open-google-chrome",children:"Open Google Chrome"}),"\n",(0,o.jsxs)(i.p,{children:["Now we minimize the window and find the shortcut with the word ",(0,o.jsx)(i.em,{children:"Google"})," on the desktop.\nThe mouse pointer moves to it and double-clicks to open it."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-ts",children:"await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();\nawait aui.click().text('Google').exec();\nawait aui.mouseDoubleLeftClick().exec();\n"})}),"\n",(0,o.jsx)(i.h2,{id:"navigate-to-google-drive",children:"Navigate to Google Drive"}),"\n",(0,o.jsxs)(i.p,{children:["After opening Chrome the Google search page appears if you do not use profiles. The Google Drive-Link will be typed into the search field and thus opened when ",(0,o.jsx)(i.em,{children:"Enter"}),"-Key is pressed."]}),"\n",(0,o.jsxs)(i.p,{children:["Do not forget to replace ",(0,o.jsx)(i.code,{children:"<Your Google drive link to the folder>"}),"!"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-ts",children:"// Omit this step if you do not use profiles in chrome\nawait aui.click().text('<Your profile>').nearestTo().text('work').exec();\n\nawait aui.typeIn('<Your Google drive link to the folder').textfield().contains().text('Search Google or type a URL').exec();\nawait aui.pressKey('enter').exec();\n"})}),"\n",(0,o.jsx)(i.h2,{id:"find-zip-file-and-upload",children:"Find Zip-File and Upload"}),"\n",(0,o.jsxs)(i.p,{children:["Within the Google Drive folder, a mouse-right-click opens the context menu. There we click on ",(0,o.jsx)(i.em,{children:"File upload"}),", navigate to our zip-file location and upload it."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-ts",children:"await aui.mouseRightClick().exec();\nawait aui.click().text('File upload').exec();\nawait aui.click().text('Desktop').exec();\nawait aui.click().text('askui').exec();\nawait aui.pressKey('enter').exec();\nawait aui.click().text('askui screenshots').exec();\nawait aui.click().text('Open').exec();\n"})}),"\n",(0,o.jsx)(i.h2,{id:"complete-code",children:"Complete Code"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-ts",children:"describe(/* a string identifying the askui suite */, () => {\n\n    it('Should upload screenshots folder on google drive', async () => {\n        await aui.click().text('askui').exec();\n        await aui.mouseDoubleLeftClick().exec();\n\n        // The text to insert here should be something in the opened explorer window.\n        // Usually there is 'This PC' or 'Quick Access' there.\n        // Watch the video if you are not sure how the selector works.\n        await aui.click().image().nearestTo().text('This PC').exec();\n        await aui.pressTwoKeys('control', 'A').exec();\n\n        await aui.mouseRightClick().exec();\n        await aui.click().text('Compress to Zip file').exec();\n        await aui.type('askui screenshots').exec();\n        await aui.pressKey('enter').exec();\n\n        await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();\n        await aui.click().text('Google').exec();\n        await aui.mouseDoubleLeftClick().exec();\n\n        // Omit this step if you do not use profiles in chrome\n        await aui.click().text('<Your profile>').nearestTo().text('work').exec();\n        await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text('Search Google or type a URL').exec();\n        await aui.pressKey('enter').exec();\n\n        await aui.mouseRightClick().exec();\n        await aui.click().text('File upload').exec();\n        await aui.click().text('Desktop').exec();\n        await aui.click().text('askui').exec();\n        await aui.pressKey('enter').exec();\n        await aui.click().text('askui screenshots').exec();\n        await aui.click().text('Open').exec();\n    });\n});\n"})}),"\n",(0,o.jsxs)(i.p,{children:["To run this automation use the ",(0,o.jsx)(i.code,{children:"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts"})," command."]}),"\n",(0,o.jsxs)(i.p,{children:["If you have a recurring or persisting issue, don\u2019t hesitate to ",(0,o.jsx)(i.a,{href:"https://bit.ly/3ekHnGR",children:"ask the community"})," for help. You can be sure that your questions will be answered there. We\u2019re excited to hear about how you apply askui to your projects."]}),"\n",(0,o.jsxs)(i.p,{children:["If you have any feature requests, please feel free to ",(0,o.jsx)(i.a,{href:"https://bit.ly/3AP20T7",children:"post them in our Featurebase board"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"Best regards and happy automating!"})]})}function u(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>a});var o=t(67294);const n={},s=o.createContext(n);function a(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);