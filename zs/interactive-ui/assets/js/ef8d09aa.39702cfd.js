"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[582],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=t(87462),r=(t(67294),t(3905)),i=t(65488),s=t(85162);const o={description:"See the Snaps entry points reference."},l="Snaps entry points",p={unversionedId:"reference/entry-points",id:"reference/entry-points",title:"Snaps entry points",description:"See the Snaps entry points reference.",source:"@site/snaps/reference/entry-points.md",sourceDirName:"reference",slug:"/reference/entry-points",permalink:"/zs/interactive-ui/snaps/reference/entry-points",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/entry-points.md",tags:[],version:"current",frontMatter:{description:"See the Snaps entry points reference."},sidebar:"snapsSidebar",previous:{title:"Snaps API",permalink:"/zs/interactive-ui/snaps/reference/snaps-api"},next:{title:"Snaps permissions",permalink:"/zs/interactive-ui/snaps/reference/permissions"}},m={},u=[{value:"<code>onRpcRequest</code>",id:"onrpcrequest",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"<code>onTransaction</code>",id:"ontransaction",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Transaction severity level",id:"transaction-severity-level",level:3},{value:"<code>onCronjob</code>",id:"oncronjob",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>onInstall</code>",id:"oninstall",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>onUpdate</code>",id:"onupdate",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>onHomePage</code>",id:"onhomepage",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>onSignature</code>",id:"onsignature",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-6",level:4},{value:"<code>onUserInput</code>",id:"onuserinput",level:2}],c={toc:u},d="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-entry-points"},"Snaps entry points"),(0,r.kt)("p",null,"Snaps can expose the following entry points."),(0,r.kt)("h2",{id:"onrpcrequest"},(0,r.kt)("inlineCode",{parentName:"h2"},"onRpcRequest")),(0,r.kt)("p",null,"To implement a ",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API")," to communicate with\ndapps and other Snaps, a Snap must expose the ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest")," entry point.\nWhenever the Snap receives a JSON-RPC request, MetaMask calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest")," handler method."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/permissions#endowmentrpc"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission.")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin")," - The origin as a string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," - The JSON-RPC request.")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"A promise containing the return of the implemented method."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  switch (request.method) {\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n"))),(0,r.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")))),(0,r.kt)("h2",{id:"ontransaction"},(0,r.kt)("inlineCode",{parentName:"h2"},"onTransaction")),(0,r.kt)("p",null,"To provide transaction insights before a user signs a transaction, a Snap must expose the\n",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," entry point.\nWhenever there's a contract interaction, and a transaction is submitted using the MetaMask\nextension, MetaMask calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," handler method.\nMetaMask passes the raw unsigned transaction payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/permissions#endowmenttransaction-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:transaction-insight"))," permission.")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction")," - The raw transaction payload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId")," - The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md"},"CAIP-2"),"\nchain ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactionOrigin")," - The transaction origin if\n",(0,r.kt)("a",{parentName:"li",href:"/zs/interactive-ui/snaps/reference/permissions#endowmenttransaction-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"allowTransactionOrigin"))," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"A content object displayed using ",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/features/custom-ui"},"custom UI"),", alongside the confirmation\nfor the transaction that ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," was called with."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("h1",{id:"typescript"},"TypeScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { panel, heading, text } from '@metamask/snaps-sdk';\nimport type { OnTransactionHandler } from '@metamask/snaps-sdk';\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Transaction Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ])\n  };\n};\n"))),(0,r.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { panel, heading, text } from '@metamask/snaps-sdk';\n\nmodule.exports.onTransaction = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Transaction Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ])\n  };\n};\n")))),(0,r.kt)("h3",{id:"transaction-severity-level"},"Transaction severity level"),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("p",null,"This feature enables transaction insight Snaps to return an optional severity level of ",(0,r.kt)("inlineCode",{parentName:"p"},"critical"),".\nMetaMask shows a modal with the warning before the user can confirm the transaction.\nUsing the previous example for ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction"),", the following code adds a single line to return an\ninsight with the severity level ",(0,r.kt)("inlineCode",{parentName:"p"},"critical"),": "),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("h1",{id:"typescript-1"},"TypeScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { OnTransactionHandler } from '@metamask/snaps-sdk';\nimport { panel, heading, text } from '@metamask/snaps-sdk';\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Transaction Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ]),\n    // highlight-next-line\n    severity: 'critical'\n  };\n};\n"))),(0,r.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { panel, heading, text } from '@metamask/snaps-sdk';\n\nmodule.exports.onTransaction = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Transaction Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ]),\n    // highlight-next-line\n    severity: 'critical'\n  };\n};\n")))),(0,r.kt)("h2",{id:"oncronjob"},(0,r.kt)("inlineCode",{parentName:"h2"},"onCronjob")),(0,r.kt)("p",null,"To run periodic actions for the user (cron jobs), a Snap must expose the ",(0,r.kt)("inlineCode",{parentName:"p"},"onCronjob")," entry point.\nMetaMask calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"onCronjob")," handler method at the specified times with the specified payloads\ndefined in the ",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/permissions#endowmentcronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onCronjob")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/permissions#endowmentcronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission.")),(0,r.kt)("admonition",{title:"Access data from cron jobs",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When accessing encrypted data from cron jobs using ",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/snaps-api#snap_managestate"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_manageState")),",\nMetaMask requires the user to enter their password if the wallet is locked.\nThis interaction can be confusing to the user, since the Snap accesses the data in the background\nwithout the user being aware."),(0,r.kt)("p",{parentName:"admonition"},"If your Snap's cron job does not need to access sensitive data, store that data in unencrypted state\nby setting ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when using ",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/snaps-api#snap_managestate"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_manageState")),".")),(0,r.kt)("p",null,"If the cron job's logic requires access to encrypted state, you can use\n",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/snaps-api#snap_getclientstatus"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_getClientStatus"))," to ensure that MetaMask is\nunlocked before accessing state.\nThis will prevent an unexpected password request popup, improving the user's experience."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,"An object containing an RPC request specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("h1",{id:"typescript-2"},"TypeScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { OnCronjobHandler } from '@metamask/snaps-sdk';\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case 'exampleMethodOne':\n      return snap.request({\n        method: 'snap_notify',\n        params: {\n          type: 'inApp',\n          message: `Hello, world!`,\n        },\n      });\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n"))),(0,r.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports.onCronjob = async ({ request }) => {\n  switch (request.method) {\n    case 'exampleMethodOne':\n      return snap.request({\n        method: 'snap_notify',\n        params: {\n          type: 'inApp',\n          message: `Hello, world!`,\n        },\n      });\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")))),(0,r.kt)("h2",{id:"oninstall"},(0,r.kt)("inlineCode",{parentName:"h2"},"onInstall")),(0,r.kt)("p",null,"To run an action on installation, a Snap must expose the ",(0,r.kt)("inlineCode",{parentName:"p"},"onInstall")," entry point.\nMetaMask calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"onInstall")," handler method after the Snap is installed successfully. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onInstall")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/permissions#endowmentlifecycle-hooks"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:lifecycle-hooks"))," permission.")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("h1",{id:"typescript-3"},"TypeScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { OnInstallHandler } from '@metamask/snaps-sdk';\nimport { heading, panel, text } from '@metamask/snaps-sdk';\n\nexport const onInstall: OnInstallHandler = async () => {\n  await snap.request({\n    method: 'snap_dialog',\n    params: {\n      type: 'alert',\n      content: panel([\n        heading('Thank you for installing my Snap'),\n        text(\n          'To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).',\n        ),\n      ]),\n    },\n  });\n};\n"))),(0,r.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { heading, panel, text } from '@metamask/snaps-sdk';\n\nmodule.exports.onInstall = async () => {\n  await snap.request({\n    method: 'snap_dialog',\n    params: {\n      type: 'alert',\n      content: panel([\n        heading('Thank you for installing my Snap'),\n        text(\n          'To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).',\n        ),\n      ]),\n    },\n  });\n};\n")))),(0,r.kt)("h2",{id:"onupdate"},(0,r.kt)("inlineCode",{parentName:"h2"},"onUpdate")),(0,r.kt)("p",null,"To run an action on update, a Snap must expose the ",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdate")," entry point.\nMetaMask calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdate")," handler method after the Snap is updated successfully. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdate")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/permissions#endowmentlifecycle-hooks"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:lifecycle-hooks"))," permission.")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { OnUpdateHandler } from '@metamask/snaps-sdk';\nimport { heading, panel, text } from '@metamask/snaps-sdk';\n\nexport const onUpdate: OnUpdateHandler = async () => {\n  await snap.request({\n    method: 'snap_dialog',\n    params: {\n      type: 'alert',\n      content: panel([\n        heading('Thank you for updating my Snap'),\n        text(\n          'New features added in this version:',\n        ),\n        text(\n          'Added a dialog that appears when updating'\n        ), \n      ]),\n    },\n  });\n};\n"))),(0,r.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { heading, panel, text } from '@metamask/snaps-sdk';\n\nmodule.exports.onUpdate = async () => {\n  await snap.request({\n    method: 'snap_dialog',\n    params: {\n      type: 'alert',\n      content: panel([\n        heading('Thank you for updating my Snap'),\n        text(\n          'New features added in this version:',\n        ),\n        text(\n          'Added a dialog that appears when updating'\n        ), \n      ]),\n    },\n  });\n};\n")))),(0,r.kt)("h2",{id:"onhomepage"},(0,r.kt)("inlineCode",{parentName:"h2"},"onHomePage")),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("p",null,"To build an embedded UI in MetaMask that any user can access through the Snaps menu, a Snap must\nexpose the ",(0,r.kt)("inlineCode",{parentName:"p"},"onHomePage")," entry point.\nMetaMask calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"onHomePage")," handler method when the user selects the Snap name in the Snaps menu."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onHomePage")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/permissions#endowmentpage-home"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:page-home"))," permission.")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"A content object displayed using ",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/features/custom-ui"},"custom UI"),"."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { OnHomePageHandler } from '@metamask/snaps-sdk';\nimport { panel, text, heading } from '@metamask/snaps-sdk';\n\nexport const onHomePage: OnHomePageHandler = async () => {\n  return {\n    content: panel([\n      heading('Hello world!'),\n      text('Welcome to my Snap home page!'),\n    ]),\n  };\n};\n"))),(0,r.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { panel, text, heading } from '@metamask/snaps-sdk';\n\nmodule.exports.onHomePage = async () => {\n  return {\n    content: panel([\n      heading('Hello world!'),\n      text('Welcome to my Snap home page!'),\n    ]),\n  };\n};\n")))),(0,r.kt)("h2",{id:"onsignature"},(0,r.kt)("inlineCode",{parentName:"h2"},"onSignature")),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("p",null,"To provide signature insights before a user signs a message, a Snap must export ",(0,r.kt)("inlineCode",{parentName:"p"},"onSignature"),".\nWhenever any of the message signature methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4"),", MetaMask calls this method.\nMetaMask passes the raw unsigned signature payload to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onSignature")," handler method."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onSignature")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/reference/permissions#endowmentsignature-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:signature-insight"))," permission.")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signature")," - The raw signature payload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signatureOrigin")," - The signature origin if\n",(0,r.kt)("a",{parentName:"li",href:"/zs/interactive-ui/snaps/reference/permissions#endowmentsignature-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"allowSignatureOrigin"))," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("inlineCode",{parentName:"li"},"severity")," property that, if present, must be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"SeverityLevel.Critical")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"content")," object displayed using ",(0,r.kt)("a",{parentName:"li",href:"/zs/interactive-ui/snaps/features/custom-ui"},"custom UI"),' after the user presses the "Sign" button. At this time due to limitations of MetaMask\'s signature confirmation UI, the content will only be displayed if the ',(0,r.kt)("inlineCode",{parentName:"li"},"severity")," property is present and set to ",(0,r.kt)("inlineCode",{parentName:"li"},"SeverityLevel.Critical"),".")),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"TypeScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OnSignatureHandler, SeverityLevel } from '@metamask/snaps-types';\nimport { panel, heading, text } from '@metamask/snaps-ui';\n\nexport const onSignature: OnSignatureHandler = async ({\n  signature,\n  signatureOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Signature Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ]),\n    severity: SeverityLevel.Critical\n  };\n};\n"))),(0,r.kt)(s.Z,{label:"JavaScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { SeverityLevel } from '@metamask/snaps-sdk';\nimport { panel, heading, text } from '@metamask/snaps-ui';\n\nmodule.exports.onSignature = async ({\n  signature,\n  signatureOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Signature Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ]),\n    severity: SeverityLevel.Critical\n  };\n};\n")))),(0,r.kt)("h2",{id:"onuserinput"},(0,r.kt)("inlineCode",{parentName:"h2"},"onUserInput")),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("p",null,"To respond to events in ",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/features/interactive-ui"},"interactive UI"),", a Snap must expose the ",(0,r.kt)("inlineCode",{parentName:"p"},"onUserInput")," entry point.\nMetaMask calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"onUserInput")," entry point when an event occurs in ",(0,r.kt)("a",{parentName:"p",href:"/zs/interactive-ui/snaps/features/interactive-ui"},"interactive UI"),"."),(0,r.kt)("p",null,"This entry point receives an object with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the interface that received user input."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event")," - An object describing the user input event, with:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - The type of the event, either ",(0,r.kt)("inlineCode",{parentName:"li"},"'ButtonClickEvent'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"'FormSubmitEvent'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - The name of the object that the event happened on"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," - Only passed when the ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"'FormSubmitEvent'"),". An object where the keys are the input names in the form, and the values are what the user typed in those fields.")))))}h.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),r=t(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),r=t(67294),i=t(86010),s=t(12466),o=t(70989),l=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:m}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),a=m[t].value;a!==o&&(c(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},m.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>u.push(e),onKeyDown:h,onClick:d},s,{className:(0,i.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":o===n})}),t??n)})))}function u(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function c(e){const n=(0,o.Y)(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",p.tabList)},r.createElement(m,(0,a.Z)({},e,n)),r.createElement(u,(0,a.Z)({},e,n)))}function d(e){const n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},70989:(e,n,t)=>{t.d(n,{Y:()=>c});var a=t(67294),r=t(16550),i=t(91980),s=t(67392),o=t(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function c(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=u({queryString:t,groupId:r}),[h,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),g=(()=>{const e=c??h;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),k(e)}),[d,k,i]),tabValues:i}}}}]);