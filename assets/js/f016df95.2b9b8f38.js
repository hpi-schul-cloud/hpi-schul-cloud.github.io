"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[2857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),w=o,m=p["".concat(c,".").concat(w)]||p[w]||d[w]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=w;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},6243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l="Local setup",i={unversionedId:"services/tldraw/Local setup",id:"services/tldraw/Local setup",title:"Local setup",description:"To run tldraw locally:",source:"@site/docs/services/tldraw/Local setup.md",sourceDirName:"services/tldraw",slug:"/services/tldraw/Local setup",permalink:"/docs/services/tldraw/Local setup",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/services/tldraw/Local setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/docs/services/tldraw/How it works"},next:{title:"Technical details",permalink:"/docs/services/tldraw/Technical details"}},c={},s=[{value:"To run tldraw locally:",id:"to-run-tldraw-locally",level:3},{value:"Create new whiteboard:",id:"create-new-whiteboard",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-setup"},"Local setup"),(0,o.kt)("h3",{id:"to-run-tldraw-locally"},"To run tldraw locally:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run all of the apps needed for schulcloud like mongodb, backend, frontend, file storage etc."),(0,o.kt)("li",{parentName:"ol"},"Run redis i.e. in a docker container, it will work on localhost:6379 by default which is what the REDIS_URI env var is set to"),(0,o.kt)("li",{parentName:"ol"},"On schulcloud-server repo: npm run nest:start:tldraw:dev"),(0,o.kt)("li",{parentName:"ol"},"On tldraw-client repo: npm run dev")),(0,o.kt)("h3",{id:"create-new-whiteboard"},"Create new whiteboard:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to a course"),(0,o.kt)("li",{parentName:"ol"},"Go to 'Column board'"),(0,o.kt)("li",{parentName:"ol"},"Create a new card and a new 'Whiteboard' element within it, then click it"),(0,o.kt)("li",{parentName:"ol"},"A new browser tab with URL like: http://localhost:4000/tldraw?roomName=65c37329b2f97cc714d31c00 will open"),(0,o.kt)("li",{parentName:"ol"},"Change the port part from 4000 to 3046, which is the default port of tldraw-client app"),(0,o.kt)("li",{parentName:"ol"},"You should see a working tldraw whiteboard now")))}d.isMDXComponent=!0}}]);