"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={description:"Detect the MetaMask Ethereum provider object.",sidebar_position:1},i="Detect MetaMask",s={unversionedId:"how-to/connect/detect-metamask",id:"how-to/connect/detect-metamask",title:"Detect MetaMask",description:"Detect the MetaMask Ethereum provider object.",source:"@site/wallet/how-to/connect/detect-metamask.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/detect-metamask",permalink:"/855-nodejs-modules/wallet/how-to/connect/detect-metamask",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/detect-metamask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Detect the MetaMask Ethereum provider object.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Connect to MetaMask",permalink:"/855-nodejs-modules/wallet/how-to/connect/"},next:{title:"Access a user's accounts",permalink:"/855-nodejs-modules/wallet/how-to/connect/access-accounts"}},c={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Install <code>@metamask/detect-provider</code>",id:"1-install-metamaskdetect-provider",level:3},{value:"2. Detect the provider",id:"2-detect-the-provider",level:3}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"detect-metamask"},"Detect MetaMask"),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page describes the legacy method of connecting to MetaMask using ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum"),".\nWe recommend ",(0,o.kt)("a",{parentName:"p",href:"/855-nodejs-modules/wallet/how-to/connect/"},"connecting to MetaMask using EIP-6963")," instead."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963")," introduces an alternative wallet detection\nmechanism to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,o.kt)("a",{parentName:"p",href:"/855-nodejs-modules/wallet/concepts/wallet-interoperability"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.")),(0,o.kt)("p",null,"The presence of the MetaMask Ethereum provider object, ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum"),", in a user's browser\nindicates an Ethereum user."),(0,o.kt)("p",null,"To demonstrate this, verify whether your browser is running MetaMask by copying and pasting the following\ncode snippet into your browser's developer console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'if (typeof window.ethereum !== "undefined") {\n    console.log("MetaMask is installed!");\n}\n')),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," module to\ndetect the MetaMask Ethereum provider."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-install-metamaskdetect-provider"},"1. Install ",(0,o.kt)("inlineCode",{parentName:"h3"},"@metamask/detect-provider")),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," to install\n",(0,o.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider")," in your project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/detect-provider\n")),(0,o.kt)("h3",{id:"2-detect-the-provider"},"2. Detect the provider"),(0,o.kt)("p",null,"For example, the following code detects the provider using ",(0,o.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// This function detects most providers injected at window.ethereum.\nimport detectEthereumProvider from "@metamask/detect-provider";\n\n// This returns the provider, or null if it wasn\'t detected.\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n    // From now on, this should always be true:\n    // provider === window.ethereum\n    startApp(provider); // Initialize your dapp.\n} else {\n    console.log("Please install MetaMask!");\n}\n\nfunction startApp(provider) {\n    // If the provider returned by detectEthereumProvider isn\'t the same as window.ethereum, something\n    // is overwriting it \u2013 perhaps another wallet. See the "Connect to MetaMask" guide for detecting\n    // and connecting to multiple wallets.\n    if (provider !== window.ethereum) {\n        console.error("Do you have multiple wallets installed?");\n    }\n    // Access the decentralized web!\n}\n')))}m.isMDXComponent=!0}}]);