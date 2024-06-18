"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[77985],{45531:(e,r,n)=>{n.d(r,{Ay:()=>c,RM:()=>a});var t=n(74848),s=n(28453);const a=[];function o(e){const r={p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(r.p,{children:"Returns the current gas price in wei."})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},3435:(e,r,n)=>{n.d(r,{Ay:()=>c,RM:()=>a});var t=n(74848),s=n(28453);const a=[];function o(e){const r={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(r.p,{children:["Replace ",(0,t.jsx)(r.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(r.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},12993:(e,r,n)=>{n.d(r,{Ay:()=>c,RM:()=>a});var t=n(74848),s=n(28453);const a=[];function o(e){const r={p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(r.p,{children:"None."})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},90828:(e,r,n)=>{n.d(r,{Ay:()=>u,RM:()=>c});var t=n(74848),s=n(28453),a=n(11470),o=n(19365);const c=[];function i(e){const r={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsx)(a.A,{children:(0,t.jsx)(o.A,{value:"JSON",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x6bcc886e7"\n}\n'})})})})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},53564:(e,r,n)=>{n.d(r,{Ay:()=>c,RM:()=>a});var t=n(74848),s=n(28453);const a=[];function o(e){const r={p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(r.p,{children:"A hexadecimal equivalent of an integer representing the current gas price in wei."})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},19090:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>x});var t=n(74848),s=n(28453),a=n(11470),o=n(19365),c=n(45531),i=n(12993),u=n(53564),l=n(3435);function d(e){const r={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"cURL",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl https://arbitrum-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_gasPrice","params": [],"id":1}\'\n'})})}),(0,t.jsx)(o.A,{value:"WSS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'wscat -c wss://arbitrum-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_gasPrice","params": [],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var h=n(90828);const m={title:"eth_gasPrice"},f=void 0,b={id:"reference/arbitrum/json-rpc-methods/eth_gasprice",title:"eth_gasPrice",description:"Parameters",source:"@site/services/reference/arbitrum/json-rpc-methods/eth_gasprice.mdx",sourceDirName:"reference/arbitrum/json-rpc-methods",slug:"/reference/arbitrum/json-rpc-methods/eth_gasprice",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_gasprice",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/arbitrum/json-rpc-methods/eth_gasprice.mdx",tags:[],version:"current",frontMatter:{title:"eth_gasPrice"},sidebar:"servicesSidebar",previous:{title:"eth_feeHistory",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_feehistory"},next:{title:"eth_getBalance",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_getbalance"}},v={},x=[...c.RM,{value:"Parameters",id:"parameters",level:2},...i.RM,{value:"Returns",id:"returns",level:2},...u.RM,{value:"Example",id:"example",level:2},...l.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function j(e){const r={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(r.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(r.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(h.Ay,{})]})}function g(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var t=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>R});var t=n(96540),s=n(18215),a=n(23104),o=n(56347),c=n(205),i=n(57485),u=n(31682),l=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,a=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[u,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,l.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function j(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),l=e=>{const r=e.currentTarget,n=i.indexOf(r),s=c[n].value;s!==t&&(u(r),o(s))},d=e=>{let r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:c.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:l,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...r,...e}),(0,x.jsx)(g,{...r,...e})]})}function R(e){const r=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(96540);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);