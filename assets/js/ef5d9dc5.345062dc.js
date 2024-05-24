"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[4028],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(o,".").concat(m)]||p[m]||u[m]||s;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={},i="Technical details",l={unversionedId:"services/tldraw/Technical details",id:"services/tldraw/Technical details",title:"Technical details",description:"Backend",source:"@site/docs/services/tldraw/Technical details.md",sourceDirName:"services/tldraw",slug:"/services/tldraw/Technical details",permalink:"/docs/services/tldraw/Technical details",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/services/tldraw/Technical details.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local setup",permalink:"/docs/services/tldraw/Local setup"}},o={},d=[{value:"Backend",id:"backend",level:2},{value:"Tldraw-server code structure",id:"tldraw-server-code-structure",level:3},{value:"Frontend",id:"frontend",level:2},{value:"Key Files",id:"key-files",level:3},{value:"Frontend Technologies",id:"frontend-technologies",level:3},{value:"State Managment",id:"state-managment",level:3},{value:"useTldrawUiSanitizer.ts",id:"usetldrawuisanitizerts",level:4},{value:"Event Handling",id:"event-handling",level:4},{value:"Useful links",id:"useful-links",level:4}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"technical-details"},"Technical details"),(0,n.kt)("h2",{id:"backend"},"Backend"),(0,n.kt)("p",null,"We are using pure Web Sockets implementation to establish connection between client and server. The reason why we used pure websockets is because tldraw-client is using y-websockets from Yjs library, that does not connect with socket.io web sockets. We also have to implement broadcasting mechanism to provide stateless solution. To achive that goal we decided to use Redis. We used ioredis library to connect to our Redis instance. Everytime user make some changes at first it is handled to the server instance that he is connected to an then this change is send to the channel with the name of the board and servers that also operate that board are listening on this channel so they can recive messages from other servers and provide those changes to users that are connected to this pod. We added the same mechanism for awareness channel so every user from every pod can see other users cursours."),(0,n.kt)("p",null,"Tldraw is deployed as a separate application from schoulcloud-server working on the same namespace as schoulcloud-server. On the backend side we have added couple new resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tldraw-deployment - deployment for tldraw-server's instances."),(0,n.kt)("li",{parentName:"ul"},"tldraw-server-svc - service for tldraw-service to communicate with tldraw-client (WS) and schoulcloud-server (management e.g. deletion of data)"),(0,n.kt)("li",{parentName:"ul"},"tldraw-svc-monitor - service to collect metrics from tldraw. Apart from typical metrics like request time we also added two application-level metrics:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sc_tldraw_users - number of active users on boards"),(0,n.kt)("li",{parentName:"ul"},"sc_tldraw_boards - number of active boards"))),(0,n.kt)("li",{parentName:"ul"},"tldraw-ingress - for steering web external traffic to tldraw-server (for now management rules in tldraw-server-svc are closed from external clients) ")),(0,n.kt)("h3",{id:"tldraw-server-code-structure"},"Tldraw-server code structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tldraw.ws.service.ts - main service responsible for establishing web socket connection as well as saving data to database. Responsibe for Redis communication."),(0,n.kt)("li",{parentName:"ul"},"tldraw.controller.ts - controller that expose HTTP deletion method outside the tldraw-server application."),(0,n.kt)("li",{parentName:"ul"},"tldraw.server.ts - service used by TldrawController."),(0,n.kt)("li",{parentName:"ul"},"y-mongodb.ts - main adapter to connect with mongodb, provides transaction mechanism, calucalate diffs between revision and to apply updates."),(0,n.kt)("li",{parentName:"ul"},"tldraw-board.repo.ts - repository object to connect TldrawWsService and YMongodb."),(0,n.kt)("li",{parentName:"ul"},"tldraw.repo.ts - repository used by TldrawService to find and delete boards from database."),(0,n.kt)("li",{parentName:"ul"},"ws-shared-doc.do.ts - main structure representing tldraw drawing during web socket communication. it holds all the web-socket addresses that are connected to this board, so we can inform all the connected clients about changes.  "),(0,n.kt)("li",{parentName:"ul"},"tldraw-drawing.entity.ts - object representing tldraw drawingn entity in database."),(0,n.kt)("li",{parentName:"ul"},"metrics.service.ts - service resonsible for storing application-level metrics.")),(0,n.kt)("p",null,"On the backend side we are also using Yjs library to store tldraw board in memory and to calculate diffs after the board is changed."),(0,n.kt)("h2",{id:"frontend"},"Frontend"),(0,n.kt)("h3",{id:"key-files"},"Key Files"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"stores/setup.ts \u2013 this file provides a real-time collaboration environment for a drawing application using the WebSocket and Yjs libraries."),(0,n.kt)("li",{parentName:"ul"},"hooks/useMultiplayerState.ts \u2013 custom hook for managing multiplayer state."),(0,n.kt)("li",{parentName:"ul"},"App.tsx \u2013 main application component integrating Tldraw and multiplayer state.")),(0,n.kt)("h3",{id:"frontend-technologies"},"Frontend Technologies"),(0,n.kt)("p",null,"The frontend of the project is built using React and leverages various libraries and tools for enhanced functionality. Here is an overview of the key frontend technologies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React: A JavaScript library for building user interfaces."),(0,n.kt)("li",{parentName:"ul"},"Yjs: A real-time collaboration framework for synchronizing shared state."),(0,n.kt)("li",{parentName:"ul"},"Tldraw: A library for drawing functionalities in the application. We use the old version of tldraw:  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tldraw/tldraw-v1"},"https://github.com/tldraw/tldraw-v1"),", after the tldraw team releases the official update of the new version, we will work on the new version and integrate it with the needs of our users. ")),(0,n.kt)("h3",{id:"state-managment"},"State Managment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Yjs is integrated into the project for real-time collaboration. The central state (shapes, bindings, assets) is managed using Yjs maps."),(0,n.kt)("li",{parentName:"ol"},"store.ts handles the configuration of Yjs, WebSocket connections, and provides centralized maps for shapes, bindings, and assets"),(0,n.kt)("li",{parentName:"ol"},"useMultiplayerState.ts -This hook manages the multiplayer state, including loading rooms, handling file system operations, and updating Yjs maps:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Mounting and handling changes in Tldraw App."),(0,n.kt)("li",{parentName:"ul"},"Presence management and user updates."),(0,n.kt)("li",{parentName:"ul"},"File system operations like opening and saving projects.")))),(0,n.kt)("h4",{id:"usetldrawuisanitizerts"},"useTldrawUiSanitizer.ts"),(0,n.kt)("p",null,"This hook is designed to observe changes in the DOM, specifically targeting certain buttons and a horizontal rule (< hr>), and hides them if they match a specific ID pattern. We hide this elements and left just only Language and Keyboard shortcuts."),(0,n.kt)("h4",{id:"event-handling"},"Event Handling"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"onMount: Handles mounting of the Tldraw app."),(0,n.kt)("li",{parentName:"ul"},"onChangePage: Manages page changes and updates Yjs maps."),(0,n.kt)("li",{parentName:"ul"},"onUndo and onRedo: Handle undo and redo operations."),(0,n.kt)("li",{parentName:"ul"},"onChangePresence: Manages presence changes in the collaborative environment."),(0,n.kt)("li",{parentName:"ul"},"onAssetCreate: This function is triggered when a user attempts to upload an asset (like an image or a file).")),(0,n.kt)("h4",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://tldraw.dev/"},"https://tldraw.dev/"),"  - documentation for the new version of tldraw")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://old.tldraw.com/"},"https://old.tldraw.com/")," - tldraw live application")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/tldraw/tldraw-v1"},"https://github.com/tldraw/tldraw-v1")," - tldraw v1 repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/MaxNoetzold/y-mongodb-provider"},"https://github.com/MaxNoetzold/y-mongodb-provider")," - code from this package was used to add mongodb as a persistence to tldraw")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/SBBEVCA4PG"},"https://discord.com/invite/SBBEVCA4PG")," discord channel with open questions and answers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://grafana.dbildungscloud.dev/d/b6b28b2b-3129-4772-8102-e32981d2c2e3/devops-tldraw-metrics?orgId=1&refresh=1m&var-source=sc-dev-dbc&var-env=main&var-env=tldraw-debugging"},"https://grafana.dbildungscloud.dev/d/b6b28b2b-3129-4772-8102-e32981d2c2e3/devops-tldraw-metrics?orgId=1&refresh=1m&var-source=sc-dev-dbc&var-env=main&var-env=tldraw-debugging")," - grafana v")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://grafana.dbildungscloud.org/d/b6b28b2b-3129-4772-8102-e32981d2c2e0/devops-tldraw?orgId=1&from=now-6h&to=now&refresh=1m"},"https://grafana.dbildungscloud.org/d/b6b28b2b-3129-4772-8102-e32981d2c2e0/devops-tldraw?orgId=1&from=now-6h&to=now&refresh=1m")," - grafana metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/nimeshnayaju/yjs-tldraw"},"https://github.com/nimeshnayaju/yjs-tldraw")," - yjs with tldraw POC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/yjs/y-websocket/tree/master/bin"},"https://github.com/yjs/y-websocket/tree/master/bin")," - yjs/y-websocket repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/erdtool/yjs-scalable-ws-backend/tree/main"},"https://github.com/erdtool/yjs-scalable-ws-backend/tree/main")," - Yjs scalable WS backend with redis example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://teamchat.dbildungscloud.de/channel/G9hJWv92zXEESKK3X"},"https://teamchat.dbildungscloud.de/channel/G9hJWv92zXEESKK3X"),' - rocketchat discussion "tldraw syncronisation for release again"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://teamchat.dbildungscloud.de/group/SagK4sCyujhu6yZr8"},"https://teamchat.dbildungscloud.de/group/SagK4sCyujhu6yZr8"),' - rocketchat discussion "Tldraw deployment"s'))))}u.isMDXComponent=!0}}]);