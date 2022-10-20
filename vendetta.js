"use strict";(()=>{var ne=Object.defineProperty;var P=(e,o)=>{for(var t in o)ne(e,t,{get:o[t],enumerable:!0})};var B={};P(B,{after:()=>y,before:()=>ie,instead:()=>se,unpatchAll:()=>q});var T=["a","b","i"],m=new Map;function J(e,o,t,n,c){let s=m.get(o)?.[e];if(!s)return c?Reflect.construct(o[e],t,n):o[e].apply(n,t);for(let i of s.b.values()){let p=i.call(n,t);Array.isArray(p)&&(t=p)}let a=(...i)=>c?Reflect.construct(s.o,i,n):s.o.apply(n,i);for(let i of s.i.values()){let p=a;a=(...u)=>i.call(n,u,p)}let r=a(...t);for(let i of s.a.values())r=i.call(n,t,r)??r;return r}function V(e,o,t,n){let c=m.get(e),s=c?.[o];return s?.[n].has(t)?(s[n].delete(t),T.every(a=>s[a].size===0)&&(Reflect.defineProperty(e,o,{value:s.o,writable:!0,configurable:!0})||(e[o]=s.o),delete c[o]),Object.keys(c).length==0&&m.delete(e),!0):!1}function q(){for(let[e,o]of m.entries())for(let t in o)for(let n of T)for(let c of o[t]?.[n].keys()??[])V(e,t,c,n)}var k=e=>(o,t,n,c=!1)=>{if(typeof t[o]!="function")throw new Error(`${o} is not a function in ${t.constructor.name}`);m.has(t)||m.set(t,{});let s=m.get(t);if(!s[o]){let i=t[o];s[o]={o:i,b:new Map,i:new Map,a:new Map};let p=(f,g,v)=>{let re=J(o,t,g,f,v);return c&&r(),re},u=new Proxy(i,{apply:(f,g,v)=>p(g,v,!1),construct:(f,g)=>p(i,g,!0),get:(f,g,v)=>g=="toString"?i.toString.bind(i):Reflect.get(f,g,v)});Reflect.defineProperty(t,o,{value:u,configurable:!0,writable:!0})||(t[o]=u)}let a=Symbol(),r=()=>V(t,o,a,e);return s[o][e].set(a,n),r};var ie=k("b"),se=k("i"),y=k("a");var K={...B};var R={};P(R,{filterModules:()=>A,find:()=>j,findAll:()=>D,findByDisplayName:()=>M,findByDisplayNameAll:()=>le,findByProps:()=>d,findByPropsAll:()=>ae,modules:()=>L});var x;function Q(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let o=Number(e),t=window.modules[o].publicModule.exports;if(!x&&t&&t.isMoment&&(x=t),!t||t===window||t.proxygone===null){Q(o);continue}}var A=(e,o=!1)=>t=>{let n=[],c=x?.locale();for(let s in e){let a=Number(s),r=e[a].publicModule.exports;if(!e[a].isInitialized)try{__r(a),c&&c!==x.locale()&&x.locale(c)}catch{}if(!r){Q(a);continue}try{if(r.default&&r.__esModule&&t(r.default)){if(o)return r.default;n.push(r.default)}if(t(r)){if(o)return r;n.push(r)}}catch(i){console.error(`Failed to getModule... ${i.stack||i.toString()}`)}}if(!o)return n},L=window.modules,j=A(L,!0),D=A(L),X=e=>o=>e.every(t=>o[t]!==void 0),Y=(e,o)=>o?t=>t.name===e:t=>t?.default?.name===e,d=(...e)=>j(X(e)),ae=(...e)=>D(X(e)),M=(e,o=!0)=>j(Y(e,o)),le=(e,o=!0)=>D(Y(e,o));var ce=d("setLogFn").default,pe=new ce("Vendetta"),w=pe;var _={};P(_,{AsyncStorage:()=>me,Constants:()=>de,React:()=>l,ReactNative:()=>F,channels:()=>fe,i18n:()=>I});var de=d("API_HOST"),fe=d("getVoiceChannelId"),I=d("Messages"),l=d("createElement"),F=d("Text","Image"),me=d("setItem");function E(e,o,{walkable:t=[],ignore:n=[],maxDepth:c=100}={}){let s=0;function a(r,i,{walkable:p=[],ignore:u=[]}={}){if(s+=1,!(s>c)){if(typeof i=="string"){if(r.hasOwnProperty(i))return r[i]}else if(i(r))return r;if(!!r){if(Array.isArray(r))for(let h of r){let f=a(h,i,{walkable:p,ignore:u});if(f)return f}else if(typeof r=="object"){for(let h of Object.keys(r))if(!(p!=null&&p.includes(h))&&!u.includes(h))try{let f=a(r[h],i,{walkable:p,ignore:u});if(f)return f}catch{}}}}}return a(e,o,{walkable:t,ignore:n})}function $(e,o){return E(e,o,{walkable:["props","children","child","sibling"]})}var b,ue=eval;function Z(e){b!==void 0&&b.readyState!==WebSocket.CLOSED&&b.close(),b=new WebSocket(`ws://${e}`),b.addEventListener("message",o=>{try{console.log(ue(o.data))}catch(t){console.error(t)}})}function ee(){y("nativeLoggingHook",globalThis,(e,o)=>{b?.readyState===WebSocket.OPEN&&b.send(JSON.stringify({message:e[0],level:e[1]})),w.log(e[0])})}var S=d("FormSection");var{FormRow:ge,FormText:ye}=S;function U({label:e,version:o}){return l.createElement(ge,{label:e,trailing:()=>l.createElement(ye,null,o)})}var{FormRow:O,FormSection:H,FormInput:be}=S,W=window.HermesInternal.getRuntimeProperties(),G=F.Platform.constants.reactNativeVersion;function N(){let[e,o]=l.useState(""),t=[{label:"Discord",version:F.NativeModules.InfoDictionaryManager.Version},{label:"React",version:l.version},{label:"React Native",version:`${G.major||0}.${G.minor||0}.${G.patch||0}`},{label:"Hermes",version:`${W["OSS Release Version"]} ${W.Build}`},{label:"Bytecode",version:W["Bytecode Version"]}];return l.createElement(l.Fragment,null,l.createElement(H,{title:"Debug",android_noDivider:!0},l.createElement(be,{value:e,onChange:n=>o(n),title:"DEBUGGER URL"})),l.createElement(H,{title:"Actions"},l.createElement(O,{label:"Reload Discord",trailing:O.Arrow,onPress:()=>F.NativeModules.BundleUpdaterManager.reload()}),l.createElement(O,{label:"Connect to debug websocket",trailing:O.Arrow,onPress:()=>Z(e)})),l.createElement(H,{title:"Versions"},t.map(n=>l.createElement(U,{label:n.label,version:n.version}))))}var{FormRow:oe,FormSection:he}=S;function C({navigation:e}){return l.createElement(he,{key:"Vendetta",title:"Vendetta"},l.createElement(oe,{label:"Settings",trailing:oe.Arrow,onPress:()=>e.push("VendettaSettings")}))}var Se=M("getScreens",!1),ve=M("UserSettingsOverviewWrapper",!1);function z(){let e=y("default",Se,(t,n)=>({...n,VendettaSettings:{title:"Vendetta Settings",render:N}})),o=y("default",ve,(t,n)=>{o();let c=$(n.props.children,s=>s.type&&s.type.name==="UserSettingsOverview");y("renderSupportAndAcknowledgements",c.type.prototype,(s,{props:{children:a}})=>{let r=a.findIndex(i=>i?.type?.name==="UploadLogsButton");r!==-1&&a.splice(r,1)}),y("render",c.type.prototype,(s,{props:{children:a}})=>{let r=[I.Messages.BILLING_SETTINGS,I.Messages.PREMIUM_SETTINGS],i=a.findIndex(p=>r.includes(p.props.title));a.splice(i===-1?4:i,0,l.createElement(C,{navigation:c.props.navigation}))})})}console.log("Hello from Vendetta!");var te=!1;try{z(),ee(),window.vendetta={patcher:K,metro:{...R,common:_},logger:w}}catch(e){te=!0,alert(`Vendetta failed to initialize...
${e.stack||e.toString()}`)}te||w.log("Vendetta is ready!");})();
//# sourceURL=Vendetta