"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(n),g=a,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},o="Getting started",c={unversionedId:"schulcloud-client/Getting started",id:"schulcloud-client/Getting started",title:"Getting started",description:"Make sure to have the following software installed",source:"@site/docs/schulcloud-client/Getting started.md",sourceDirName:"schulcloud-client",slug:"/schulcloud-client/Getting started",permalink:"/docs/schulcloud-client/Getting started",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/schulcloud-client/Getting started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"schulcloud-client",permalink:"/docs/category/schulcloud-client"},next:{title:"schulcloud-server",permalink:"/docs/category/schulcloud-server"}},u={},i=[],s={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"Make sure to have the following software installed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"node 18")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:hpi-schul-cloud/schulcloud-client.git\n")),(0,a.kt)("p",null,"Install the packages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd schulcloud-client\nnpm ci\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,a.kt)("p",null,"The last step is to start the dev server with."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run watch\n")),(0,a.kt)("p",null,"If you want to change the instance you need to set an env variable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'declare -x SC_THEME="n21"\nnode node_modules/gulp/bin/gulp.js clear-cache && node node_modules/gulp/bin/gulp.js\nnpm run watch\n')))}d.isMDXComponent=!0}}]);