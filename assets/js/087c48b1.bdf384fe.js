"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65197],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(g,l(l({ref:t},p),{},{components:n})):o.createElement(g,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(25773),i=(n(27378),n(35318));const a={sidebar_position:8},l="Online Shop Login",r={unversionedId:"general/Tutorials/shop-demo",id:"version-0.12.2/general/Tutorials/shop-demo",title:"Online Shop Login",description:"The following tutorial shows how to automate the login process of a simple demo online shop.",source:"@site/versioned_docs/version-0.12.2/general/06-Tutorials/shop-demo.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/shop-demo",permalink:"/docs/general/Tutorials/shop-demo",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/general/06-Tutorials/shop-demo.md",tags:[],version:"0.12.2",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Google Cat Image Search",permalink:"/docs/general/Tutorials/google-cat-search"},next:{title:"Like on Spotify Desktop App",permalink:"/docs/general/Tutorials/spotify-tutorial"}},s={},c=[{value:"Setup",id:"setup",level:2},{value:"Code",id:"code",level:2},{value:"1. Open the Demo Shop",id:"1-open-the-demo-shop",level:3},{value:"2. Navigate to the Login Dialog",id:"2-navigate-to-the-login-dialog",level:3},{value:"3. Fill out Login Information",id:"3-fill-out-login-information",level:3},{value:"4. Click on Login Button",id:"4-click-on-login-button",level:3},{value:"5. Check whether Login worked &amp; Log out",id:"5-check-whether-login-worked--log-out",level:3},{value:"Result",id:"result",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"online-shop-login"},"Online Shop Login"),(0,i.kt)("p",null,"The following tutorial shows how to automate the login process of a simple demo online shop."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow the ",(0,i.kt)("a",{href:"../Getting%20Started/getting-started",target:"_blank"},"AskUI installation guide and write your first instruction")),(0,i.kt)("li",{parentName:"ul"},"Open a browser on your screen",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you have multiple screens, configure the used display by setting the display variable at ",(0,i.kt)("inlineCode",{parentName:"li"},"test/helper/jest.setup.js"))))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("p",null,"After running the ",(0,i.kt)("inlineCode",{parentName:"p"},"npx askui init")," command as described in the setup you will have a file ",(0,i.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts"),". In this file add a new workflow (",(0,i.kt)("inlineCode",{parentName:"p"},"it"),"-code-block) inside the body of the callback passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"describe(/* a string identifying the test suite */, () => {\n    ... (other workflows)\n\n    it('Should log into account', async () => {\n\n    });\n});\n")),(0,i.kt)("h3",{id:"1-open-the-demo-shop"},"1. Open the Demo Shop"),(0,i.kt)("p",null,"First we need to open the demo shop in the browser.\nFor that we open the browser and then type the URL into the search bar and hit enter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    // First open the browser.\n    // If it is already open it should focus the current window\n    // macOS: open -a 'Google Chrome'\n    // Windows: start chrome\n    await aui.execOnShell(\"start chrome\").exec();\n\n    // Open a new tab\n    // macOS: command + t\n    // windows: control + t\n    await aui.pressTwoKeys('control', 't').exec();\n\n    // Click the textfield or URL bar that contains\n    // the text 'Search Google or type a URL'\n    await aui.click()\n      .text()\n      .withText('Search Google or type a URL').exec();\n\n    // Type the text into the focused element\n    await aui.type('https://askui-demo-shop-6e358.web.app/').exec();\n\n    // Navigate to the website\n    await aui.pressKey('enter').exec();\n});\n")),(0,i.kt)("p",null,"When you run this code with ",(0,i.kt)("inlineCode",{parentName:"p"},"npx jest --config ./test/jest.config.ts"),", you should see the demo online shop opening in the browser you opened."),(0,i.kt)("h3",{id:"2-navigate-to-the-login-dialog"},"2. Navigate to the Login Dialog"),(0,i.kt)("p",null,"Next, to open the login dialog, we need to click the text login at the top of the page. We can do this with the following instruction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    ...\n    await aui.click().text('Login').exec();\n});\n")),(0,i.kt)("h3",{id:"3-fill-out-login-information"},"3. Fill out Login Information"),(0,i.kt)("p",null,"After opening the login dialog, we need to enter an email address and a password. For this we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeIn")," action. After filling in an email address, depending on the browser used the textfield may open an auto-complete drop-down that overlaps with the password field:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Overlap",src:n(72263).Z,width:"636",height:"259"})),(0,i.kt)("p",null,'To keep the password field visible, we have to hide the auto-complete drop-down. In order to do this, we have to blur the email input field. We do this by clicking on the headline of the page ("Login"). Afterwards, we can type into the password field.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    ...\n    await aui.typeIn('test@askui.com').textfield().contains().text('Email Address').exec();\n    await aui.click().text('Login').above().textfield().exec();\n    await aui.typeIn('passwort').textfield().contains().text('Password').exec();\n});\n")),(0,i.kt)("h3",{id:"4-click-on-login-button"},"4. Click on Login Button"),(0,i.kt)("p",null,"After filling in email and password, we need to click the login button. The following instruction does that for us:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    ...\n    await aui.click().button().contains().text('Log in').exec();\n});\n")),(0,i.kt)("h3",{id:"5-check-whether-login-worked--log-out"},"5. Check whether Login worked & Log out"),(0,i.kt)("p",null,'Finally, we need to check whether the login worked. We can do this by checking if the text "Logout ',(0,i.kt)("a",{parentName:"p",href:"mailto:test@askui.com"},"test@askui.com"),'" is displayed in the header as this is only displayed if we are logged in. We complete the workflow by logging out so that the workflow can easily be rerun without having to log out manually.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    ...\n    await aui.expect().text('Logout test@askui.com').exists().exec();\n    await aui.click().text('Logout test@askui.com').exec();\n});\n")),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("p",null,"The following code block shows the finished code for the login of the web shop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('Should log into account', async () => {\n    // First open the browser.\n    // If it is already open it should focus the current window\n    // macOS: open -a 'Google Chrome'\n    // Windows: start chrome\n    await aui.execOnShell(\"start chrome\").exec();\n\n    // Open a new tab\n    // macOS: command + t\n    // windows: control + t\n    await aui.pressTwoKeys('control', 't').exec();\n\n    // Click the textfield or URL bar that contains\n    // the text 'Search Google or type a URL'\n    await aui.click()\n      .text()\n      .withText('Search Google or type a URL').exec();\n\n    // Type the text into the focused element\n    await aui.type('https://askui-demo-shop-6e358.web.app/').exec();\n\n    // Navigate to the website\n    await aui.pressKey('enter').exec();\n    await aui.click().text('Login').exec();\n    await aui.typeIn('test@askui.com').textfield().contains().text('Email Address').exec();\n    await aui.click().text('Login').above().textfield().exec();\n    await aui.typeIn('passwort').textfield().contains().text('Password').exec();\n    await aui.click().button().contains().text('Log in').exec();\n    await aui.expect().text('test@askui.com').exists().exec();\n    await aui.click().text('Logout test@askui.com').exec();\n});\n")),(0,i.kt)("p",null,"To run this code use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts ")," command."))}u.isMDXComponent=!0},72263:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login_overlap-921106721ef24aae573bbe95725ebf68.png"}}]);