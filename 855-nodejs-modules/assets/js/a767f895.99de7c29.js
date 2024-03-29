"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={description:"Learn about wallet interoperability.",sidebar_position:6},o="Wallet interoperability",l={unversionedId:"concepts/wallet-interoperability",id:"concepts/wallet-interoperability",title:"Wallet interoperability",description:"Learn about wallet interoperability.",source:"@site/wallet/concepts/wallet-interoperability.md",sourceDirName:"concepts",slug:"/concepts/wallet-interoperability",permalink:"/855-nodejs-modules/wallet/concepts/wallet-interoperability",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-interoperability.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Learn about wallet interoperability.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Signing methods",permalink:"/855-nodejs-modules/wallet/concepts/signing-methods"},next:{title:"Smart contracts",permalink:"/855-nodejs-modules/wallet/concepts/smart-contracts"}},p={},s=[{value:"EIP-6963 interfaces",id:"eip-6963-interfaces",level:2},{value:"Provider info",id:"provider-info",level:3},{value:"Provider detail",id:"provider-detail",level:3},{value:"Announce and request events",id:"announce-and-request-events",level:3},{value:"Third-party library support",id:"third-party-library-support",level:2},{value:"MIPD Store",id:"mipd-store",level:3},{value:"MetaMask SDK support",id:"metamask-sdk-support",level:2},{value:"Wallet support",id:"wallet-support",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet-interoperability"},"Wallet interoperability"),(0,r.kt)("p",null,"A web dapp can integrate with multiple installed browser wallets simultaneously by adding support for\n",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an alternative wallet detection\nmechanism to the ",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/wallet/concepts/wallet-api#ethereum-provider-api"},(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum"))," injected provider.\nThis mechanism is enabled by using the standardized interfaces defined by EIP-6963."),(0,r.kt)("p",null,"The following is a demo of the user experience of detecting multiple wallets, showing the data\nprovided from each installed wallet:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"100%",controls:!0},(0,r.kt)("source",{src:"/eip-6963.mp4"}))),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/wallet/how-to/connect/"},"connect to MetaMask using EIP-6963")," and see the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963/tree/main"},"EIP-6963 Vite React + TypeScript demo"),"\nfor more information."),(0,r.kt)("h2",{id:"eip-6963-interfaces"},"EIP-6963 interfaces"),(0,r.kt)("p",null,"Wallets that support EIP-6963 implement and expose the following standardized interfaces.\nWhen ",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/wallet/how-to/connect/"},"connecting to MetaMask using EIP-6963"),", it's important to review\nand understand these interfaces."),(0,r.kt)("h3",{id:"provider-info"},"Provider info"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#provider-info"},(0,r.kt)("inlineCode",{parentName:"a"},"EIP6963ProviderInfo"))," interface\nrepresents the assets needed to display a wallet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid")," - The wallet ID (",(0,r.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc4122"},"UUIDv4"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - A human-readable name of the wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"icon")," - A ",(0,r.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc3986"},"URI")," pointing to an icon of the wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rdns")," - The wallet's domain name.")),(0,r.kt)("h3",{id:"provider-detail"},"Provider detail"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#provider-detail"},(0,r.kt)("inlineCode",{parentName:"a"},"EIP6963ProviderDetail"))," interface\nrepresents additional metadata about the wallet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info")," - The ",(0,r.kt)("a",{parentName:"li",href:"#provider-info"},(0,r.kt)("inlineCode",{parentName:"a"},"EIP6963ProviderInfo")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provider")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"EIP1193Provider")," defined by ",(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),".")),(0,r.kt)("h3",{id:"announce-and-request-events"},"Announce and request events"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#announce-and-request-events"},(0,r.kt)("inlineCode",{parentName:"a"},"EIP6963AnnounceProviderEvent")),"\ninterface announces an event dispatched by the wallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface EIP6963AnnounceProviderEvent extends CustomEvent {\n    type: "eip6963:announceProvider";\n    detail: EIP6963ProviderDetail;\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#announce-and-request-events"},(0,r.kt)("inlineCode",{parentName:"a"},"EIP6963RequestProviderEvent")),"\ninterface requests an event dispatched by a dapp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface EIP6963RequestProviderEvent extends Event {\n    type: "eip6963:requestProvider";\n}\n')),(0,r.kt)("h2",{id:"third-party-library-support"},"Third-party library support"),(0,r.kt)("p",null,"The following third-party libraries support EIP-6963:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wagmi.sh"},"Wagmi 2+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.walletconnect.com/web3modal/about"},"Web3Modal 3+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wevm/mipd"},"MIPD Store")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rainbowkit.com/"},"RainbowKit"))),(0,r.kt)("h3",{id:"mipd-store"},"MIPD Store"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wevm/mipd"},"MIPD Store")," stores the wallet providers and enables you to\nsubscribe to the store and retrieve the providers.\nUnlike ",(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh"},"Wagmi")," and ",(0,r.kt)("a",{parentName:"p",href:"https://onboard.blocknative.com/"},"Web3-Onboard"),", which are\nlibraries that provide components and connectors for multiple wallets and depend on MetaMask SDK for\nintegration, the MIPD Store is a utility library that makes it easier to work with EIP-6963 and\nsupports TypeScript types."),(0,r.kt)("h2",{id:"metamask-sdk-support"},"MetaMask SDK support"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask SDK does not support connecting to non-MetaMask wallets via EIP-6963.\nIf you intend to support discovery of other wallets, we recommend using other methods of adding\nEIP-6963 support such as ",(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh"},"Wagmi 2+"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/wallet/how-to/use-sdk/javascript/"},"MetaMask JavaScript SDK")," automatically checks\nfor the presence of the MetaMask extension via EIP-6963.\nThis eliminates the need for manual configuration or detection methods, simplifying the initial\nsetup process for both developers and users."),(0,r.kt)("p",null,"By adhering to the standards set by EIP-6963, the SDK unambiguously identifies and connects to\nMetaMask, resolving potential conflicts that might arise with other wallet extensions, ensuring a\nmore stable and reliable interaction for users."),(0,r.kt)("p",null,"The SDK is also being integrated into ",(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"Wagmi 2+"),", which supports EIP-6963.\nThe SDK on its own supports connecting ",(0,r.kt)("em",{parentName:"p"},"only")," to MetaMask via EIP-6963, so if you intend to support\ndiscovery of other wallets, we recommend using other methods of adding EIP-6963 support, such as\nWagmi 2+."),(0,r.kt)("h2",{id:"wallet-support"},"Wallet support"),(0,r.kt)("p",null,"The EIP-6963 alternative discovery mechanism works for wallets that have implemented support for EIP-6963.\nThis includes MetaMask, Coinbase, Trust Wallet, OKX, and other major wallets.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WalletConnect/EIP6963/blob/master/src/utils/constants.ts"},"list of wallets that support EIP-6963"),"."),(0,r.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,r.kt)("p",null,"Dapps that do not support EIP-6963 can still\n",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/wallet/how-to/connect/detect-metamask"},"detect MetaMask using the ",(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum")," provider"),".\nHowever, we recommend adding support to improve the user experience for multiple installed wallets.\nRead more about ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#backwards-compatibility"},"EIP-6963 backwards compatibility"),"."))}u.isMDXComponent=!0}}]);