"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51518],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(25773),r=(n(27378),n(35318));const a={},o="Gitlab CI/CD",s={unversionedId:"general/Continuous Integration/gitlab-ci",id:"version-v0.10.1/general/Continuous Integration/gitlab-ci",title:"Gitlab CI/CD",description:"The askui library can be integrated into a Gitlab CI/CD Pipeline.",source:"@site/versioned_docs/version-v0.10.1/general/04-Continuous Integration/gitlab-ci.md",sourceDirName:"general/04-Continuous Integration",slug:"/general/Continuous Integration/gitlab-ci",permalink:"/docs/v0.10.1/general/Continuous Integration/gitlab-ci",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-v0.10.1/general/04-Continuous Integration/gitlab-ci.md",tags:[],version:"v0.10.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"askui UI Controller Docker Images",permalink:"/docs/v0.10.1/general/Continuous Integration/askui-ui-controller-docker-images"},next:{title:"Annotation",permalink:"/docs/v0.10.1/general/Tooling/annotation"}},l={},c=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"How This Configuration Works",id:"how-this-configuration-works",level:3},{value:"Testing Inside Gitlab-CI",id:"testing-inside-gitlab-ci",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gitlab-cicd"},"Gitlab CI/CD"),(0,r.kt)("p",null,"The askui library can be integrated into a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci"},"Gitlab CI/CD Pipeline"),"."),(0,r.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,r.kt)("p",null,"The example below is a basic CI/CD pipeline definition (",(0,r.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),") with one ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," stage and a ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," job within it to run instructions with the askui library. It assumes you have set up a project with the askui library as described under ",(0,r.kt)("a",{parentName:"p",href:"/docs/v0.10.1/general/Getting%20Started/write-your-first-instruction"},"Getting Started"),"."),(0,r.kt)("p",null,"Besides that, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<docker_image_path>")," needs to be replaced by ",(0,r.kt)("a",{parentName:"p",href:"./askui-ui-controller-docker-images"},"one of our Docker Images"),". Moreover, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<alias_name>")," should be replaced by a name that will be used to access the service from the job's container (see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/services/#define-services-in-the-gitlab-ciyml-file"},"Services in Gitlab"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"stages:\n  - test\n\ntest:\n  stage: test\n  image: node:16.13\n  before_script:\n    - npm ci\n  services:\n    - name: <docker_image_path>\n      alias: <alias_name>\n  script:\n    - npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts \n")),(0,r.kt)("h3",{id:"how-this-configuration-works"},"How This Configuration Works"),(0,r.kt)("p",null,"On push to the repository on Gitlab, a Gitlab-hosted Linux instance will start and execute the stages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The code of your project is checked out."),(0,r.kt)("li",{parentName:"ul"},"Scripts within the stages will be executed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pull the image for the service."),(0,r.kt)("li",{parentName:"ul"},"Installs npm dependencies including askui."),(0,r.kt)("li",{parentName:"ul"},"Starts askui.")))),(0,r.kt)("h3",{id:"testing-inside-gitlab-ci"},"Testing Inside Gitlab-CI"),(0,r.kt)("p",null,"The main difference between ",(0,r.kt)("a",{parentName:"p",href:"/docs/v0.10.1/general/Getting%20Started/write-your-first-instruction"},"the first instruction using askui example")," and instructions inside Gitlab-CI is the askui server URL. Using Gitlab services, the askui server URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<alias_name>:6769")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:6769"),". To have askui instructions that can work locally and inside the Gitlab CI we suggest that you create the client like in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const uiControllerUrlHost = process.env.CI_JOB_ID ? '<alias_name>' : '127.0.0.1';\naui = await UiControlClient.build({\n  uiControllerUrl: `http://${uiControllerUrlHost}:6769`,\n});\n")))}p.isMDXComponent=!0}}]);