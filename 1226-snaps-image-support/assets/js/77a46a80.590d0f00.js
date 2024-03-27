"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6423],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),s=a(84287);const o={description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},p="Snaps quickstart",i={unversionedId:"get-started/quickstart",id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started quickly using the create-snap starter kit.",source:"@site/snaps/get-started/quickstart.md",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/1226-snaps-image-support/snaps/get-started/quickstart",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Install MetaMask Flask",permalink:"/1226-snaps-image-support/snaps/get-started/install-flask"},next:{title:"Learn",permalink:"/1226-snaps-image-support/snaps/learn"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the Snap",id:"start-the-snap",level:2},{value:"Connect to the Snap",id:"connect-to-the-snap",level:2},{value:"Customize the Snap",id:"customize-the-snap",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-quickstart"},"Snaps quickstart"),(0,r.kt)("p",null,"Get started creating your own Snap.\nUse the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit to initialize a Snap monorepo project built with TypeScript and React.\nSee the following video demo:"),(0,r.kt)(s.Z,{url:"https://www.youtube.com/embed/qZRAryYwgdg?si=CeImIULgH3iD-FF0",mdxType:"YoutubeEmbed"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,r.kt)("li",{parentName:"ul"},"A text editor (for example, ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node")," version 20.11 or later"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,r.kt)("h2",{id:"create-the-project"},"Create the project"),(0,r.kt)("p",null,"Create a new Snap project using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap your-snap-name\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @metamask/create-snap your-snap-name\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap your-snap-name\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/learn/about-snaps/files"},"Snaps files")," to learn about your Snap project files."),(0,r.kt)("h2",{id:"start-the-snap"},"Start the Snap"),(0,r.kt)("p",null,"From the root of the newly created project, install the project dependencies using Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,r.kt)("p",null,"You may get a warning like the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n')),(0,r.kt)("p",null,"You can fix this by running the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run allow-scripts auto\n")),(0,r.kt)("p",null,"Start the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,r.kt)("p",null,"You are now serving the Snap at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8080"))," and its front-end dapp at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8000")),"."),(0,r.kt)("h2",{id:"connect-to-the-snap"},"Connect to the Snap"),(0,r.kt)("p",null,"On the front-end dapp, select the ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button and the MetaMask Flask extension pops up and\nrequires you to approve the Snap's permissions."),(0,r.kt)("p",null,"Once connected, select the ",(0,r.kt)("strong",{parentName:"p"},"Send message")," button to display a custom message within a confirmation\ndialog in MetaMask Flask."),(0,r.kt)("h2",{id:"customize-the-snap"},"Customize the Snap"),(0,r.kt)("p",null,"Open the project in a text editor.\nYou can customize your Snap by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/snap/src")," folder."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," contains an example request that uses the\n",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/reference/snaps-api#snapdialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," method to display a custom confirmation screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { panel, text } from "@metamask/snaps-sdk";\n\n/**\n * Handle incoming JSON-RPC requests, sent through wallet_invokeSnap.\n *\n * @param args - The request handler arguments as an object.\n * @param args.origin - The origin of the request, e.g., the website that invoked the Snap.\n * @param args.request - A validated JSON-RPC request object.\n * @returns The result of snap_dialog.\n * @throws If the request method is not valid for this Snap.\n */\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n    origin,\n    request,\n}) => {\n    switch (request.method) {\n        case "hello":\n            return snap.request({\n                method: "snap_dialog",\n                params: {\n                    type: "confirmation",\n                    content: panel([\n                        text(`Hello, **${origin}**!`),\n                        text("This custom confirmation is just for display purposes."),\n                        text(\n                            "But you can edit the Snap source code to make it do something, if you want to!",\n                        ),\n                    ]),\n                },\n            });\n        default:\n            throw new Error("Method not found.");\n    }\n};\n')),(0,r.kt)("p",null,"Edit the text in any ",(0,r.kt)("inlineCode",{parentName:"p"},"text()")," component and select the ",(0,r.kt)("strong",{parentName:"p"},"Reconnect")," button\non the front-end to re-install the Snap."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask Flask automatically re-installs locally hosted Snaps whenever it receives a connection request for them.")),(0,r.kt)("p",null,"The next time you select the ",(0,r.kt)("strong",{parentName:"p"},"Send message")," button, you see the updated text in the confirmation dialog."),(0,r.kt)("p",null,"You've now successfully connected, installed, interacted with, and customized your Snap!"),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To learn more about the Snaps system, review ",(0,r.kt)("a",{parentName:"li",href:"/snaps/learn/about-snaps"},"fundamental Snaps concepts"),"\nand try the ",(0,r.kt)("a",{parentName:"li",href:"/snaps/learn/tutorials"},"Snaps tutorials"),"."),(0,r.kt)("li",{parentName:"ul"},"To implement specific features and use cases, see the ",(0,r.kt)("a",{parentName:"li",href:"/snaps/features"},"Snaps feature guides"),"."),(0,r.kt)("li",{parentName:"ul"},"To follow best practices for developing a Snap, see the ",(0,r.kt)("a",{parentName:"li",href:"/snaps/how-to"},"Snaps how-to guides"),".")))}d.isMDXComponent=!0},84287:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);const r={wrapper:"wrapper_iojS"};function s(e){return n.createElement("div",{className:r.wrapper},n.createElement("iframe",{src:e.url,allowFullScreen:!0}))}}}]);