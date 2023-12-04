"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95934],{75404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=i(85893),n=i(11151);const s={sidebar_position:9},a="Like on Spotify Desktop App",l={id:"general/Tutorials/spotify-tutorial",title:"Like on Spotify Desktop App",description:"The following tutorial shows how to automate a desktop application. As an example we will automatically to like songs in the Spotify desktop application.",source:"@site/versioned_docs/version-0.8.0/general/06-Tutorials/spotify-tutorial.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/spotify-tutorial",permalink:"/docs/0.8.0/general/Tutorials/spotify-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.8.0/general/06-Tutorials/spotify-tutorial.md",tags:[],version:"0.8.0",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Online Shop Login",permalink:"/docs/0.8.0/general/Tutorials/shop-demo"},next:{title:"Zip Images and Upload to Google Drive on Windows",permalink:"/docs/0.8.0/general/Tutorials/zip-images-upload-googledrive-windows"}},r={},c=[{value:"Setup",id:"setup",level:2},{value:"Code",id:"code",level:2},{value:"1. Navigate to the Search Page",id:"1-navigate-to-the-search-page",level:3},{value:"2. Search for a Song",id:"2-search-for-a-song",level:3},{value:"3. Open Menu for a Song",id:"3-open-menu-for-a-song",level:3},{value:"4. Check Whether the Song was Added to Liked Songs",id:"4-check-whether-the-song-was-added-to-liked-songs",level:3},{value:"5. Remove Song from Like Songs",id:"5-remove-song-from-like-songs",level:3},{value:"Result",id:"result",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"like-on-spotify-desktop-app",children:"Like on Spotify Desktop App"}),"\n",(0,o.jsx)(t.p,{children:"The following tutorial shows how to automate a desktop application. As an example we will automatically to like songs in the Spotify desktop application."}),"\n",(0,o.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Follow the ",(0,o.jsx)("a",{href:"../Getting%20Started/getting-started",target:"_blank",children:"askui installation guide and write your first instruction"})]}),"\n",(0,o.jsxs)(t.li,{children:["Open the Spotify desktop application on your screen","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you have multiple screens, configure the used display by setting the display variable at ",(0,o.jsx)(t.code,{children:"test/helper/jest.setup.js"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,o.jsxs)(t.p,{children:["After running the ",(0,o.jsx)(t.code,{children:"npx askui init"})," command as described in the setup you will have a file ",(0,o.jsx)(t.code,{children:"test/my-first-askui-test-suite.test.ts"}),". In this file add a new workflow (",(0,o.jsx)(t.code,{children:"it"}),"-code-block) inside the body of the callback passed to the ",(0,o.jsx)(t.code,{children:"describe"})," function:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"describe(/* a string identifying the test suite */, () => {\n    ... (other tests)\n\n    it('should like Spotify song', async () => {\n\n    });\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"1-navigate-to-the-search-page",children:"1. Navigate to the Search Page"}),"\n",(0,o.jsx)(t.p,{children:"First, we need to open the search page where we can look for a song:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('should like Spotify song', async () => {\n    await aui.click().icon().withText('search').exec();\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"2-search-for-a-song",children:"2. Search for a Song"}),"\n",(0,o.jsx)(t.p,{children:"Then we can use the search field (a textfield) to search a song:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('should like Spotify song', async () => {\n    ...\n    await aui.typeIn('Bohemian Rhapsody').textfield().exec();\n    await aui.pressKey('enter').exec();\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"3-open-menu-for-a-song",children:"3. Open Menu for a Song"}),"\n",(0,o.jsx)(t.p,{children:"On the search result page we need to right click a song to open the menu for the song:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('should like Spotify song', async () => {\n    ...\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Save to your Liked Songs').exec();\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:'As the text "Bohemian Rhapsody" is present on the page multiple times, we are specifying the position of the text we want to click further by saying that it is the one below the text "Songs".'}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsx)(t.p,{children:"We expect that the song has not yet been liked (although we totally understand if this is the case - we like it, too \ud83d\ude09 - but just for the sake of this workflow, let's unlike it or use another song)."})}),"\n",(0,o.jsx)(t.h3,{id:"4-check-whether-the-song-was-added-to-liked-songs",children:"4. Check Whether the Song was Added to Liked Songs"}),"\n",(0,o.jsx)(t.p,{children:"Finally, we want to check whether the song was actually added to the liked songs:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('should like Spotify song', async () => {\n    ...\n    await aui.click().text().withText('Liked Songs').exec();\n    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"5-remove-song-from-like-songs",children:"5. Remove Song from Like Songs"}),"\n",(0,o.jsx)(t.p,{children:"To be able to run the workflow again, it is necessary to reset the state of Spotify, or more specifically, your liked songs. One option would be to add the following instructions to your code in order to remove the song from the liked songs."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('should like Spotify song', async () => {\n    ...\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Remove from your Liked Songs').exec();\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,o.jsx)(t.p,{children:"The following code block shows the complete code for the Spotify automation:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('should like Spotify song', async () => {\n    await aui.click().icon().withText('search').exec();\n    await aui.typeIn('Bohemian Rhapsody').textfield().exec();\n    await aui.pressKey('enter').exec();\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Save to your Liked Songs').exec();\n    await aui.click().text().withText('Liked Songs').exec();\n    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Remove from your Liked Songs').exec();\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To run this workflow use the ",(0,o.jsx)(t.code,{children:"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts "})," command."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>a});var o=i(67294);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);