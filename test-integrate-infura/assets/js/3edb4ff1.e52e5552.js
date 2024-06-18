"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[48700],{12745:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>a});var t=r(74848),s=r(28453);const a=[];function o(e){const n={p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(n.p,{children:"Returns historical gas information, allowing you to track trends over time."})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},55061:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>a});var t=r(74848),s=r(28453);const a=[];function o(e){const n={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},79291:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>a});var t=r(74848),s=r(28453);const a=[];function o(e){const n={code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blockCount"}),": (integer) Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. If blocks in the specified block range are not available, then only the fee history for available blocks is returned."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"newestBlock"}),": (string) Integer representing the highest number block of the requested range, or one of the string tags ",(0,t.jsx)(n.code,{children:"latest"}),", ",(0,t.jsx)(n.code,{children:"earliest"}),", or ",(0,t.jsx)(n.code,{children:"pending"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"array"})," of ",(0,t.jsx)(n.code,{children:"integers"}),": (optional) A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used."]}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},5094:(e,n,r)=>{r.d(n,{Ay:()=>l,RM:()=>i});var t=r(74848),s=r(28453),a=r(11470),o=r(19365);const i=[];function c(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsx)(a.A,{children:(0,t.jsx)(o.A,{value:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "result": {\n        "baseFeePerGas": [\n            "0x3da8e7618",\n            "0x3e1ba3b1b",\n            "0x3dfd72b90",\n            "0x3d64eee76",\n            "0x3d4da2da0",\n            "0x3ccbcac6b"\n        ],\n        "gasUsedRatio": [\n            0.5290747666666666,\n            0.49240453333333334,\n            0.4615576,\n            0.49407083333333335,\n            0.4669053\n        ],\n        "oldestBlock": "0xfab8ac",\n        "reward": [\n            [\n                "0x59682f00",\n                "0x59682f00"\n            ],\n            [\n                "0x59682f00",\n                "0x59682f00"\n            ],\n            [\n                "0x3b9aca00",\n                "0x59682f00"\n            ],\n            [\n                "0x510b0870",\n                "0x59682f00"\n            ],\n            [\n                "0x3b9aca00",\n                "0x59682f00"\n            ]\n        ]\n    },\n    "id": 0\n}\n'})})})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6350:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>a});var t=r(74848),s=r(28453);const a=[];function o(e){const n={a:"a",code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"oldestBlock"}),": Lowest number block of the returned range expressed as a hexadecimal number."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"baseFeePerGas"}),": An array of block base fees per gas, including an extra block value. The extra value is the next block after the newest block in the returned range. Returns zeroes for blocks created before ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP-1559"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gasUsedRatio"}),": An array of block gas used ratios. These are calculated as the ratio of ",(0,t.jsx)(n.code,{children:"gasUsed"})," and ",(0,t.jsx)(n.code,{children:"gasLimit"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reward"}),": An array of effective priority fee per gas data points from a single block. All zeroes are returned if the block is empty."]}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},99075:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>g,frontMatter:()=>f,metadata:()=>b,toc:()=>j});var t=r(74848),s=r(28453),a=r(11470),o=r(19365),i=r(12745),c=r(79291),l=r(6350),u=r(55061);function d(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://arbitrum-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"id": 1, "jsonrpc": "2.0", "method": "eth_feeHistory", "params": ["0x5", "latest", [20,30]] }\'\n'})})}),(0,t.jsx)(o.A,{value:"WSS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://arbitrum-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_feeHistory","params":["0x5", "latest", []],"id":1}\'\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var p=r(5094);const f={title:"eth_feeHistory"},m=void 0,b={id:"reference/arbitrum/json-rpc-methods/eth_feehistory",title:"eth_feeHistory",description:"Parameters",source:"@site/services/reference/arbitrum/json-rpc-methods/eth_feehistory.mdx",sourceDirName:"reference/arbitrum/json-rpc-methods",slug:"/reference/arbitrum/json-rpc-methods/eth_feehistory",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_feehistory",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/arbitrum/json-rpc-methods/eth_feehistory.mdx",tags:[],version:"current",frontMatter:{title:"eth_feeHistory"},sidebar:"servicesSidebar",previous:{title:"eth_estimateGas",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_estimategas"},next:{title:"eth_gasPrice",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_gasprice"}},x={},j=[...i.RM,{value:"Parameters",id:"parameters",level:2},...c.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function v(e){const n={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(p.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(96540),s=r(18215),a=r(23104),o=r(56347),i=r(205),c=r(57485),l=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[l,d]=f({queryString:r,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),x=(()=>{const e=l??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),s=i[r].value;s!==t&&(l(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);