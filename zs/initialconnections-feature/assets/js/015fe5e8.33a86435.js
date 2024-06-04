"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7682],{10175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const r={description:"Detect the MetaMask Ethereum provider object.",sidebar_position:1},s="Detect MetaMask",a={id:"how-to/connect/detect-metamask",title:"Detect MetaMask",description:"Detect the MetaMask Ethereum provider object.",source:"@site/wallet/how-to/connect/detect-metamask.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/detect-metamask",permalink:"/zs/initialconnections-feature/wallet/how-to/connect/detect-metamask",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/detect-metamask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Detect the MetaMask Ethereum provider object.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Connect to MetaMask",permalink:"/zs/initialconnections-feature/wallet/how-to/connect/"},next:{title:"Access a user's accounts",permalink:"/zs/initialconnections-feature/wallet/how-to/connect/access-accounts"}},c={},d=[{value:"Steps",id:"steps",level:2},{value:"1. Install <code>@metamask/detect-provider</code>",id:"1-install-metamaskdetect-provider",level:3},{value:"2. Detect the provider",id:"2-detect-the-provider",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"detect-metamask",children:"Detect MetaMask"}),"\n",(0,o.jsxs)(t.admonition,{title:"Important",type:"caution",children:[(0,o.jsxs)(t.p,{children:["This page describes the legacy method of connecting to MetaMask using ",(0,o.jsx)(t.code,{children:"window.ethereum"}),".\nWe recommend ",(0,o.jsx)(t.a,{href:"/zs/initialconnections-feature/wallet/how-to/connect/",children:"connecting to MetaMask using EIP-6963"})," instead."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"})," introduces an alternative wallet detection\nmechanism to the ",(0,o.jsx)(t.code,{children:"window.ethereum"})," injected provider.\nThis alternative mechanism enables dapps to support ",(0,o.jsx)(t.a,{href:"/zs/initialconnections-feature/wallet/concepts/wallet-interoperability",children:"wallet interoperability"}),"\nby discovering multiple injected wallet providers in a user's browser."]})]}),"\n",(0,o.jsxs)(t.p,{children:["The presence of the MetaMask Ethereum provider object, ",(0,o.jsx)(t.code,{children:"window.ethereum"}),", in a user's browser\nindicates an Ethereum user."]}),"\n",(0,o.jsx)(t.p,{children:"To demonstrate this, verify whether your browser is running MetaMask by copying and pasting the following\ncode snippet into your browser's developer console:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'if (typeof window.ethereum !== "undefined") {\n  console.log("MetaMask is installed!");\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can use the ",(0,o.jsx)(t.a,{href:"https://github.com/MetaMask/detect-provider",children:(0,o.jsx)(t.code,{children:"@metamask/detect-provider"})})," module to\ndetect the MetaMask Ethereum provider."]}),"\n",(0,o.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(t.h3,{id:"1-install-metamaskdetect-provider",children:["1. Install ",(0,o.jsx)(t.code,{children:"@metamask/detect-provider"})]}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})," to install\n",(0,o.jsx)(t.code,{children:"@metamask/detect-provider"})," in your project directory:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm i @metamask/detect-provider\n"})}),"\n",(0,o.jsx)(t.h3,{id:"2-detect-the-provider",children:"2. Detect the provider"}),"\n",(0,o.jsxs)(t.p,{children:["For example, the following code detects the provider using ",(0,o.jsx)(t.code,{children:"@metamask/detect-provider"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'// This function detects most providers injected at window.ethereum.\nimport detectEthereumProvider from "@metamask/detect-provider";\n\n// This returns the provider, or null if it wasn\'t detected.\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n  // From now on, this should always be true:\n  // provider === window.ethereum\n  startApp(provider); // Initialize your dapp.\n} else {\n  console.log("Please install MetaMask!");\n}\n\nfunction startApp(provider) {\n  // If the provider returned by detectEthereumProvider isn\'t the same as window.ethereum, something\n  // is overwriting it \u2013 perhaps another wallet. See the "Connect to MetaMask" guide for detecting\n  // and connecting to multiple wallets.\n  if (provider !== window.ethereum) {\n    console.error("Do you have multiple wallets installed?");\n  }\n  // Access the decentralized web!\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);