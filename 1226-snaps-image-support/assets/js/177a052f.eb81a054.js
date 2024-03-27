"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4467],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(f,o(o({ref:n},m),{},{components:t})):a.createElement(f,o({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={description:"Learn about the Snaps execution environment.",sidebar_position:3},o="Snaps execution environment",s={unversionedId:"learn/about-snaps/execution-environment",id:"learn/about-snaps/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/learn/about-snaps/execution-environment.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/execution-environment",permalink:"/1226-snaps-image-support/snaps/learn/about-snaps/execution-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/execution-environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps files",permalink:"/1226-snaps-image-support/snaps/learn/about-snaps/files"},next:{title:"Tutorials",permalink:"/1226-snaps-image-support/snaps/learn/tutorials"}},p={},l=[{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],m={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,r.kt)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,r.kt)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThis allows MetaMask to restrict access to global JavaScript APIs and to isolate a Snap's code from\nother parts of the application."),(0,r.kt)("p",null,"This environment does not have a DOM, Node.js built-ins, or platform-specific APIs other than the\ndefault ",(0,r.kt)("inlineCode",{parentName:"p"},"snap")," global and MetaMask's ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A Snap can access the ",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/learn/about-snaps/apis#snaps-api"},"Snaps API")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"snap")," global, and the\n",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/learn/about-snaps/apis#metamask-json-rpc-api"},"MetaMask JSON-RPC API")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global.\nTo access the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global, a Snap must request the\n",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/reference/permissions#endowmentethereum-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission.")),(0,r.kt)("p",null,"Almost all\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"standard JavaScript globals"),"\nthat are also in Node.js are available to Snaps.\nThis includes globals such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Math"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,r.kt)("p",null,"The following globals are also available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," (with the\n",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/snaps/reference/permissions#endowmentnetwork-access"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"clearTimeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"clearInterval")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WebAssembly")," (with the\n",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/snaps/reference/permissions#endowmentwebassembly"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:webassembly"))," permission)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"TextDecoder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atob")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"btoa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"URL"))),(0,r.kt)("p",null,"The execution environment is designed to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prevent Snaps from influencing any other running code, including MetaMask itself.\nThat is, it prevents all Snaps from polluting the global environment and malicious Snaps from\nstealing from users."),(0,r.kt)("li",{parentName:"ul"},"Prevent Snaps from accessing sensitive JavaScript global APIs (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,r.kt)("li",{parentName:"ul"},'Be "fully virtualizable," or platform-independent.')),(0,r.kt)("p",null,"This allows you to safely execute Snaps anywhere, without the Snap needing to worry about where and\nhow it's executed."),(0,r.kt)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)")," is a subset of\nJavaScript designed to enable mutually suspicious programs to execute in the same JavaScript process\n(or the same ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"JavaScript strict mode"),"."))}u.isMDXComponent=!0}}]);