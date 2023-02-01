"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32275],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(25773),a=(n(27378),n(35318));const r={},o="Gitlab CI/CD",s={unversionedId:"general/Continuous Integration/gitlab-ci",id:"version-0.5.0/general/Continuous Integration/gitlab-ci",title:"Gitlab CI/CD",description:"The askui library can be integrated into a Gitlab CI/CD Pipeline.",source:"@site/versioned_docs/version-0.5.0/general/04-Continuous Integration/gitlab-ci.md",sourceDirName:"general/04-Continuous Integration",slug:"/general/Continuous Integration/gitlab-ci",permalink:"/docs/0.5.0/general/Continuous Integration/gitlab-ci",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.5.0/general/04-Continuous Integration/gitlab-ci.md",tags:[],version:"0.5.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"askui UI Controller Docker Images",permalink:"/docs/0.5.0/general/Continuous Integration/askui-ui-controller-docker-images"},next:{title:"Annotate Image",permalink:"/docs/0.5.0/general/Tooling/annotate-image"}},l={},c=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"How This Configuration Works",id:"how-this-configuration-works",level:3},{value:"Testing Inside Gitlab-CI",id:"testing-inside-gitlab-ci",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab-cicd"},"Gitlab CI/CD"),(0,a.kt)("p",null,"The askui library can be integrated into a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci"},"Gitlab CI/CD Pipeline"),"."),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"The example below is a basic CI/CD pipeline definition (",(0,a.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),") with one ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," stage and a ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," job within it to run tests with the askui library. It assumes you have set up a project with the askui library as described under ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.5.0/general/Getting%20Started/write-your-first-automation"},"Getting Started"),"."),(0,a.kt)("p",null,"Besides that, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<docker_image_path>")," needs to be replaced by ",(0,a.kt)("a",{parentName:"p",href:"./askui-ui-controller-docker-images"},"one of our Docker Images"),". Moreover, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<alias_name>")," should replaced by a name that will be used to access the service from the job's container (see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/services/#define-services-in-the-gitlab-ciyml-file"},"Services in Gitlab"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"stages:\n  - test\n\ntest:\n  stage: test\n  image: node:16.13\n  before_script:\n    - npm ci\n  services:\n    - name: <docker_image_path>\n      alias: <alias_name>\n  script:\n    - npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts \n")),(0,a.kt)("h3",{id:"how-this-configuration-works"},"How This Configuration Works"),(0,a.kt)("p",null,"On push to the repository on Gitlab, a Gitlab-hosted Linux instance will start and execute the stages."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The code of your project is checked out."),(0,a.kt)("li",{parentName:"ul"},"Scripts within the stages will be executed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pull the image for the service."),(0,a.kt)("li",{parentName:"ul"},"Installs npm dependencies including askui."),(0,a.kt)("li",{parentName:"ul"},"Starts testing.")))),(0,a.kt)("h3",{id:"testing-inside-gitlab-ci"},"Testing Inside Gitlab-CI"),(0,a.kt)("p",null,"The main difference between ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.5.0/general/Getting%20Started/write-your-first-automation"},"the first test suite using askui example")," and tests inside Gitlab-CI is the askui server URL. Using Gitlab services, the askui server URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<alias_name>:6769")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:6769"),". To have a test that can work locally and inside the Gitlab CI we suggest that you create the client like in the following example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const uiControllerUrlHost = process.env.CI_JOB_ID ? '<alias_name>' : '127.0.0.1';\naui = await UiControlClient.build({\n  uiControllerUrl: `http://${uiControllerUrlHost}:6769`,\n});\n")))}p.isMDXComponent=!0}}]);