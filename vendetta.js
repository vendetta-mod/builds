"use strict";(()=>{var On=Object.defineProperty;var c=(e,t)=>()=>(e&&(t=e(e=0)),t);var w=(e,t)=>{for(var r in t)On(e,r,{get:t[r],enumerable:!0})};var qe={};w(qe,{find:()=>q,findAll:()=>Pe,findByDisplayName:()=>ae,findByDisplayNameAll:()=>$n,findByName:()=>kn,findByNameAll:()=>jn,findByProps:()=>m,findByPropsAll:()=>Un,findByStoreName:()=>Ie,modules:()=>Xe});function Sr(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}var Tr,Xe,q,Pe,Nr,Ae,Vn,m,Un,kn,jn,ae,$n,Ie,C=c(()=>{"use strict";for(let e in window.modules){let t=Number(e),r=window.modules[t]?.publicModule?.exports;if(!r||r===window||r.proxygone===null){Sr(t);continue}}Tr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return function(r){let n=[];for(let o in e){let a=Number(o),i=e[a]?.publicModule?.exports;if(!e[a].isInitialized)try{__r(a)}catch{}if(!i){Sr(a);continue}try{if(i.default&&i.__esModule&&r(i.default)){if(t)return i.default;n.push(i.default)}if(r(i)){if(t)return i;n.push(i)}}catch(u){console.error(`Failed to filter modules... ${u.stack||u.toString()}`)}}if(!t)return n}},Xe=window.modules,q=Tr(Xe,!0),Pe=Tr(Xe),Nr=function(e){return function(t){return e.every(function(r){return t[r]!==void 0})}},Ae=function(e,t){return t?function(r){return r?.name===e}:function(r){return r?.default?.name===e}},Vn=function(e){return function(t){return t.getName&&t.getName.length===0&&t.getName()===e}},m=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return q(Nr(t))},Un=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Pe(Nr(t))},kn=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return q(Ae(e,t))},jn=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Pe(Ae(e,t))},ae=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return q(Ae(e,t))},$n=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Pe(Ae(e,t))},Ie=function(e){return q(Vn(e))}});var Qe,O,Be=c(()=>{Qe=["a","b","i"],O=new Map});function Dr(e,t,r,n,o){let a=O.get(t)?.[e];if(!a)return o?Reflect.construct(t[e],r,n):t[e].apply(n,r);for(let f of a.b.values()){let h=f.call(n,r);Array.isArray(h)&&(r=h)}let i=function(){for(var f=arguments.length,h=new Array(f),R=0;R<f;R++)h[R]=arguments[R];return o?Reflect.construct(a.o,h,n):a.o.apply(n,h)};for(let f of a.i.values()){let h=i;i=function(){for(var R=arguments.length,oe=new Array(R),S=0;S<R;S++)oe[S]=arguments[S];return f.call(n,oe,h)}}let u=i(...r);for(let f of a.a.values())u=f.call(n,r,u)??u;return u}var Pr=c(()=>{Be()});function Ze(e,t,r,n){let o=O.get(e),a=o?.[t];return a?.[n].has(r)?(a[n].delete(r),Qe.every(function(i){return a[i].size===0})&&(Reflect.defineProperty(e,t,{value:a.o,writable:!0,configurable:!0})||(e[t]=a.o),delete o[t]),Object.keys(o).length==0&&O.delete(e),!0):!1}function Ar(){for(let[e,t]of O.entries())for(let r in t)for(let n of Qe)for(let o of t[r]?.[n].keys()??[])Ze(e,r,o,n)}var et=c(()=>{Be()});function Ce(e){return function(t,r,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(typeof r[t]!="function")throw new Error(`${t} is not a function in ${r.constructor.name}`);O.has(r)||O.set(r,{});let a=O.get(r);if(!a[t]){let f=r[t];a[t]={o:f,b:new Map,i:new Map,a:new Map};let h=function(S,B,X){let Fn=Dr(t,r,B,S,X);return o&&u(),Fn},R=new Proxy(f,{apply:function(S,B,X){return h(B,X,!1)},construct:function(S,B){return h(f,B,!0)},get:function(S,B,X){return B=="toString"?f.toString.bind(f):Reflect.get(S,B,X)}});Reflect.defineProperty(r,t,{value:R,configurable:!0,writable:!0})||(r[t]=R)}let i=Symbol(),u=function(){return Ze(r,t,i,e)};return a[t][e].set(i,n),u}}var Ir=c(()=>{Pr();Be();et()});var rt={};w(rt,{after:()=>N,before:()=>Hn,instead:()=>tt,unpatchAll:()=>Ar});var Hn,tt,N,nt=c(()=>{Ir();et();Hn=Ce("b"),tt=Ce("i"),N=Ce("a")});var Br,Q=c(()=>{"use strict";nt();nt();Br={...rt}});function at(){return{listeners:Object.values(ot).reduce(function(e,t){return e[t]=new Set,e},{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){var r=this;let n=function(o,a){r.off(o,n),t(o,a)};this.on(e,n)},emit(e,t){for(let r of this.listeners[e])r(e,t)}}}var ot,Cr=c(()=>{"use strict";(function(e){e.GET="GET",e.SET="SET",e.DEL="DEL"})(ot||(ot={}))});var Mr,fe,z,me,Lr=c(()=>{"use strict";d();Mr=window.nativeModuleProxy.MMKVManager,fe=window.nativeModuleProxy.DCDFileManager,z=function(e){return{get:async function(){return JSON.parse(await Mr.getItem(e)??"{}")},set:function(t){return Mr.setItem(e,JSON.stringify(t))}}},me=function(e){let t=s.Platform.select({default:function(n){return n},ios:function(n){return`Documents/${n}`}}),r;return{get:async function(){let n=`${fe.getConstants().DocumentsDirPath}/${e}`;return!r&&!await fe.fileExists(n)?(r=!0,fe.writeFile("documents",t(e),"{}","utf8")):JSON.parse(await fe.readFile(n,"utf8"))},set:function(n){return void fe.writeFile("documents",t(e),JSON.stringify(n),"utf8")}}}});var it={};w(it,{awaitSyncWrapper:()=>de,createFileBackend:()=>me,createMMKVBackend:()=>z,createProxy:()=>Vr,createStorage:()=>U,useProxy:()=>D,wrapSync:()=>W});function Vr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=at();function r(n,o){return new Proxy(n,{get(a,i){if(i===Fr)return t;let u=[...o,i],f=a[i];return f!=null?(t.emit("GET",{path:u,value:f}),typeof f=="object"?r(f,u):f):f},set(a,i,u){return a[i]=u,t.emit("SET",{path:[...o,i],value:u}),!0},deleteProperty(a,i){let u=delete a[i];return u&&t.emit("DEL",{path:[...o,i]}),u}})}return{proxy:r(e,[]),emitter:t}}function D(e){let t=e[Fr],[,r]=React.useReducer(function(n){return~n},0);return React.useEffect(function(){let n=function(){return r()};return t.on("SET",n),t.on("DEL",n),function(){t.off("SET",n),t.off("DEL",n)}},[]),e}async function U(e){let t=await e.get(),{proxy:r,emitter:n}=Vr(t),o=function(){return e.set(r)};return n.on("SET",o),n.on("DEL",o),r}function W(e){let t,r=[],n=function(o){return t?o():r.push(o)};return e.then(function(o){t=o,r.forEach(function(a){return a()})}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(function(o){return[o,function(a){for(var i=arguments.length,u=new Array(i>1?i-1:0),f=1;f<i;f++)u[f-1]=arguments[f];return Reflect[o](t??a,...u)}]})),get(o,a,i){return a===Or?n:Reflect.get(t??o,a,i)}})}var $o,Fr,Or,de,V=c(()=>{"use strict";Cr();Lr();$o=window.nativeModuleProxy.MMKVManager,Fr=Symbol("emitter accessor"),Or=Symbol("wrapSync promise accessor");de=function(e){return new Promise(function(t){return e[Or](t)})}});function ct(e,t,r,n){if(!(n>r.maxDepth)&&e){try{if(t(e))return e}catch{}if(Array.isArray(e)){for(let o of e)if(!(typeof o!="object"||o===null))try{let a=ct(o,t,r,n+1);if(a)return a}catch{}}else if(typeof e=="object"){for(let o of Object.keys(e))if(!(typeof e[o]!="object"||e[o]===null)&&!(r.walkable.length&&!r.walkable.includes(o))&&!r.ignore.includes(o))try{let a=ct(e[o],t,r,n+1);if(a)return a}catch{}}}}function Me(e,t){let{walkable:r=[],ignore:n=[],maxDepth:o=100}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return ct(e,t,{walkable:r,ignore:n,maxDepth:o},0)}var st=c(()=>{"use strict"});function Le(e,t){return Me(e,t,{walkable:["props","children","child","sibling"]})}var lt=c(()=>{"use strict";st()});async function K(e,t){let r=await fetch(e,t);if(!r.ok)throw new Error("Request returned non-ok");return r}var ut=c(()=>{"use strict"});function ft(e){return Object.isFrozen(e)?Object.assign({},e):e}var Ur=c(()=>{"use strict"});var mt={};w(mt,{findInReactTree:()=>Le,findInTree:()=>Me,safeFetch:()=>K,unfreeze:()=>ft});var dt=c(()=>{lt();st();ut();Ur()});var Et={};w(Et,{fetchTheme:()=>ge,getCurrentTheme:()=>Rt,initThemes:()=>yt,installTheme:()=>gt,removeTheme:()=>ht,selectTheme:()=>Fe,themes:()=>x,updateThemes:()=>jr});async function pt(e){if(typeof e!="object")throw new Error("Theme must be an object");await me("vendetta_theme.json").set(e)}function kr(e){if(Y.valid(e))return Y(e).hex();let t=Number(s.processColor(e));return Y.rgb(t>>16&255,t>>8&255,t&255,t>>24&255).hex()}function Gn(e){if(e.semanticColors){let t=e.semanticColors;for(let r in t)for(let n in t[r])t[r][n]=kr(t[r][n])}if(e.rawColors){let t=e.rawColors;for(let r in t)e.rawColors[r]=kr(t[r]);s.Platform.OS==="android"&&zn(t)}return e}function zn(e){let t={BLACK_ALPHA_60:["BLACK",.6],BRAND_NEW_360_ALPHA_20:["BRAND_360",.2],BRAND_NEW_360_ALPHA_25:["BRAND_360",.25],BRAND_NEW_500_ALPHA_20:["BRAND_500",.2],PRIMARY_DARK_500_ALPHA_20:["PRIMARY_500",.2],PRIMARY_DARK_700_ALPHA_60:["PRIMARY_700",.6],STATUS_GREEN_500_ALPHA_20:["GREEN_500",.2],STATUS_RED_500_ALPHA_20:["RED_500",.2]};for(let r in t){let[n,o]=t[r];e[n]&&(e[r]=Y(e[n]).alpha(o).hex())}}async function ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;try{r=await(await K(e,{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch theme at ${e}`)}x[e]={id:e,selected:t,data:Gn(r)},t&&pt(x[e])}async function gt(e){if(typeof e!="string"||e in x)throw new Error("Theme already installed");await ge(e)}async function Fe(e){if(e==="default")return await pt({});let t=Object.values(x).find(function(r){return r.selected})?.id;t&&(x[t].selected=!1),x[e].selected=!0,await pt(x[e])}async function ht(e){let t=x[e];return t.selected&&await Fe("default"),delete x[e],t.selected}function Rt(){let e=window.__vendetta_loader?.features?.themes?.prop;return e&&window[e]||null}async function jr(){await de(x);let e=Rt();await Promise.allSettled(Object.keys(x).map(function(t){return ge(t,e?.id===t)}))}async function yt(){let e=Rt();if(!e)return;let t=pe.default.unsafe_rawColors;pe.default.unsafe_rawColors=new Proxy(t,{get:function(r,n){return e?e.data?.rawColors?.[n]??Reflect.get(t,n):Reflect.get(t,n)}}),tt("resolveSemanticColor",pe.default.meta,function(r,n){if(!e)return n(...r);let[o,a]=r,[i,u]=$r(o,a),f=o==="amoled"?2:o==="light"?1:0,h=e.data?.semanticColors?.[i]?.[f];if(h)return h;let R=e.data?.rawColors?.[u.raw];return R?u.opacity===1?R:Y(R).alpha(u.opacity).hex():n(...r)}),await jr()}function $r(e,t){let r=t[$r._sym??=Object.getOwnPropertySymbols(t)[0]],n=pe.SemanticColor[r];return[r,n[e.toLowerCase()]]}var oa,x,ie=c(()=>{"use strict";d();Q();he();V();dt();oa=window.nativeModuleProxy.DCDFileManager,x=W(U(z("VENDETTA_THEMES")))});var Re,s,Z,pe,Y,he=c(()=>{"use strict";ie();Re=function(e){return Object.values(window.modules).find(function(t){return t?.publicModule.exports?.[e]})?.publicModule?.exports};window.React=Re("createElement");s=Re("AppRegistry"),Z=Re("AbortCodes"),pe=Re("SemanticColor"),Y=Re("brewer");if(window.__vendetta_loader?.features.themes)try{yt()}catch(e){console.error("[Vendetta] Failed to initialize themes...",e)}});var vt={};w(vt,{Flux:()=>Xn,FluxDispatcher:()=>ke,NavigationNative:()=>k,React:()=>ee,ReactNative:()=>s,assets:()=>ye,channels:()=>Wn,chroma:()=>Y,clipboard:()=>L,commands:()=>Ue,constants:()=>Z,i18n:()=>Oe,invites:()=>Kn,moment:()=>xt,navigation:()=>Yn,navigationStack:()=>Jn,stylesheet:()=>M,toasts:()=>wt,url:()=>Ve});var Wn,Oe,Ve,wt,M,L,ye,Kn,Ue,Yn,Jn,k,Xn,ke,ee,xt,d=c(()=>{"use strict";C();he();he();he();Wn=m("getVoiceChannelId"),Oe=m("Messages"),Ve=m("openURL","openDeeplink"),wt=q(function(e){return e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop}),M=m("createThemedStyleSheet"),L=m("setString","getString","hasString"),ye=m("registerAsset"),Kn=m("acceptInviteAndTransitionToInviteChannel"),Ue=m("getBuiltInCommands"),Yn=m("pushLazy"),Jn=m("createStackNavigator"),k=m("NavigationContainer"),Xn=m("connectStores"),ke=m("_currentDispatchActionType"),ee=window.React,xt=m("isMoment")});var _t={};w(_t,{all:()=>j,find:()=>qn,getAssetByID:()=>Zn,getAssetByName:()=>Qn,getAssetIDByName:()=>l,patchAssets:()=>bt});function bt(){let e=N("registerAsset",ye,function(t,r){let n=t[0];j[n.name]={...n,id:r}});for(let t=1;;t++){let r=ye.getAssetByID(t);if(!r)break;j[r.name]||(j[r.name]={...r,id:t})}return e}var j,qn,Qn,Zn,l,v=c(()=>{"use strict";d();Q();j={};qn=function(e){return Object.values(j).find(e)},Qn=function(e){return j[e]},Zn=function(e){return ye.getAssetByID(e)},l=function(e){return j[e]?.id}});var St={};w(St,{showToast:()=>g});var g,te=c(()=>{"use strict";d();g=function(e,t){return wt.open({content:e,source:t})}});var Tt,eo,T,ce=c(()=>{"use strict";C();Tt=m("setLogFn").default,eo=new Tt("Vendetta"),T=eo});var At={};w(At,{connectToDebugger:()=>Nt,getDebugInfo:()=>Pt,patchLogHook:()=>Dt,socket:()=>P,versionHash:()=>je});function Nt(e){if(P!==void 0&&P.readyState!==WebSocket.CLOSED&&P.close(),!e){g("Invalid debugger URL!",l("Small"));return}P=new WebSocket(`ws://${e}`),P.addEventListener("open",function(){return g("Connected to debugger.",l("Check"))}),P.addEventListener("message",function(t){try{(0,eval)(t.data)}catch(r){console.error(r)}}),P.addEventListener("error",function(t){console.log(`Debugger error: ${t.message}`),g("An error occurred with the debugger connection!",l("Small"))})}function Dt(){let e=N("nativeLoggingHook",globalThis,function(t){P?.readyState===WebSocket.OPEN&&P.send(JSON.stringify({message:t[0],level:t[1]})),T.log(t[0])});return function(){P&&P.close(),e()}}function Pt(){let e=s.NativeModules.InfoDictionaryManager,t=s.NativeModules.DCDDeviceManager,r=window.HermesInternal.getRuntimeProperties(),n=r["OSS Release Version"],o="for RN ",a=s.Platform.constants,i=a.reactNativeVersion;return{vendetta:{version:je,loader:window.__vendetta_loader?.name??"Unknown"},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:n.startsWith(o)?n.substring(o.length):`${i.major}.${i.minor}.${i.patch}`},hermes:{version:n,buildType:r.Build,bytecodeVersion:r["Bytecode Version"]},...s.Platform.select({android:{os:{name:"Android",version:a.Release,sdk:a.Version}},ios:{os:{name:a.systemName,version:a.osVersion}}}),...s.Platform.select({android:{device:{manufacturer:a.Manufacturer,brand:a.Brand,model:a.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var P,je,Ee=c(()=>{"use strict";d();Q();v();te();ce();je="0bf2b58"});var Bt={};w(Bt,{patchCommands:()=>It,registerCommand:()=>to});function It(){let e=N("getBuiltInCommands",Ue,function(t,r){return r.concat(we)});return function(){we=[],e()}}function to(e){let t=Ue.getBuiltInCommands(1,!0,!1);t.sort(function(n,o){return parseInt(o.id)-parseInt(n.id)});let r=t[t.length-1];return e.id=(parseInt(r.id,10)-1).toString(),we.push(e),function(){return we=we.filter(function(n){let{id:o}=n;return o!==e.id})}}var we,Ct=c(()=>{"use strict";d();Q();we=[]});var Vt={};w(Vt,{evalPlugin:()=>Hr,fetchPlugin:()=>$e,getSettings:()=>Ot,initPlugins:()=>Ft,installPlugin:()=>Mt,plugins:()=>y,removePlugin:()=>Lt,startPlugin:()=>xe,stopPlugin:()=>ve});async function $e(e){e.endsWith("/")||(e+="/");let t=y[e],r;try{r=await(await K(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let n;if(t?.manifest.hash!==r.hash)try{n=await(await K(e+(r.main||"index.js"),{cache:"no-store"})).text()}catch{}if(!n&&!t)throw new Error(`Failed to fetch JS for ${e}`);y[e]={id:e,manifest:r,enabled:t?.enabled??!1,update:t?.update??!0,js:n??t.js}}async function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in y)throw new Error("Plugin already installed");await $e(e),t&&await xe(e)}async function Hr(e){let t={...window.vendetta,plugin:{id:e.id,manifest:e.manifest,storage:await U(z(e.id))},logger:new Tt(`Vendetta \xBB ${e.manifest.name}`)},r=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,n=(0,eval)(r)(t),o=typeof n=="function"?n():n;return o.default||o}async function xe(e){e.endsWith("/")||(e+="/");let t=y[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let r=await Hr(t);re[e]=r,r.onLoad?.(),t.enabled=!0}catch(r){T.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,r);try{re[t.id]?.onUnload?.()}catch(n){T.error(`Plugin ${t.id} errored whilst unloading`,n)}delete re[e],t.enabled=!1}}function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;e.endsWith("/")||(e+="/");let r=y[e],n=re[e];if(!r)throw new Error("Attempted to stop non-existent plugin");if(!n)throw new Error("Attempted to stop a non-started plugin");try{n.onUnload?.()}catch(o){T.error(`Plugin ${r.id} errored whilst unloading`,o)}delete re[e],t&&(r.enabled=!1)}function Lt(e){e.endsWith("/")||(e+="/"),y[e].enabled&&ve(e),delete y[e]}async function Ft(){await de(y);let e=Object.keys(y);return await Promise.allSettled(e.filter(function(t){return y[t].enabled&&y[t].update}).map(function(t){return $e(t)})),await Promise.allSettled(e.filter(function(t){return y[t].enabled}).map(function(t){return xe(t)})),e.filter(function(t){return!y[t].enabled&&y[t].update}).forEach(function(t){return $e(t)}),ro}var y,re,ro,Ot,se=c(()=>{"use strict";V();ce();ut();y=W(U(z("VENDETTA_PLUGINS"))),re={};ro=function(){return Object.keys(re).forEach(function(e){return ve(e,!1)})},Ot=function(e){return re[e]?.settings}});function Ut(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Gr=c(()=>{});function zr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function kt(e,t,r){return t&&zr(e.prototype,t),r&&zr(e,r),e}var Wr=c(()=>{});function jt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Kr=c(()=>{});function $t(e,t){return $t=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},$t(e,t)}function Ht(e,t){return $t(e,t)}var Yr=c(()=>{});function Gt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ht(e,t)}var Jr=c(()=>{Yr()});function zt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Xr=c(()=>{});function Wt(e){return Wt=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Wt(e)}function He(e){return Wt(e)}var qr=c(()=>{});function Kt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Qr=c(()=>{});function Yt(e){return e&&e.constructor===Symbol?"symbol":typeof e}var Zr=c(()=>{});function Jt(e,t){return t&&(Yt(t)==="object"||typeof t=="function")?t:Kt(e)}var en=c(()=>{Qr();Zr()});function Xt(e){var t=zt();return function(){var n=He(e),o;if(t){var a=He(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return Jt(this,o)}}var tn=c(()=>{Xr();qr();en()});function le(e){let{label:t,icon:r,noPadding:n=!1,noAnimation:o=!1,children:a}=e,[i,u]=React.useState(!0);return React.createElement(React.Fragment,null,React.createElement(p.FormRow,{label:t,leading:r&&React.createElement(p.FormRow.Icon,{source:l(r)}),trailing:React.createElement(p.FormRow.Arrow,{style:{transform:[{rotate:`${i?180:90}deg`}]}}),onPress:function(){u(!i),o||s.LayoutAnimation.configureNext(s.LayoutAnimation.Presets.easeInEaseOut)}}),!i&&React.createElement(React.Fragment,null,React.createElement(p.FormDivider,null),React.createElement(s.View,{style:!n&&{paddingHorizontal:15}},a)))}var rn=c(()=>{"use strict";A();v();d()});var Zt={};w(Zt,{Alert:()=>Qt,ErrorBoundary:()=>E,Forms:()=>p,General:()=>no,Search:()=>qt,Summary:()=>le});var p,no,qt,Qt,A=c(()=>{"use strict";C();rn();J();p=m("Form","FormSection"),no=m("Button","Text","View"),qt=ae("StaticSearchBarContainer"),Qt=m("alertDarkStyles","alertLightStyles").default});var er={};w(er,{rawColors:()=>oo,semanticColors:()=>$});var nn,$,oo,be=c(()=>{"use strict";C();d();nn=m("colors","meta"),$=Z.ThemeColorMap??nn?.colors,oo=Z.Colors??nn?.unsafe_rawColors});var Ge,tr,ao,E,J=c(()=>{"use strict";Gr();Wr();Kr();Jr();tn();d();C();A();be();Ge=m("Looks","Colors","Sizes"),tr=M.createThemedStyleSheet({view:{flex:1,flexDirection:"column",margin:10},title:{fontSize:20,textAlign:"center",marginBottom:5},codeblock:{fontFamily:Z.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,fontSize:12,backgroundColor:$.BACKGROUND_SECONDARY,padding:5,borderRadius:5,marginBottom:5}}),E=function(e){"use strict";Gt(r,e);var t=Xt(r);function r(n){Ut(this,r);var o;return o=t.call(this,n),o.state={hasErr:!1},o}return kt(r,[{key:"render",value:function(){var o=this;return this.state.hasErr?ee.createElement(s.ScrollView,{style:tr.view},ee.createElement(p.FormText,{style:tr.title},"Uh oh."),ee.createElement(p.FormText,{style:tr.codeblock},this.state.errText),ee.createElement(Ge,{color:Ge.Colors.RED,size:Ge.Sizes.MEDIUM,look:Ge.Looks.FILLED,onPress:function(){return o.setState({hasErr:!1,errText:void 0})},text:"Retry"})):this.props.children}}]),r}(ao=ee.Component);jt(E,"getDerivedStateFromError",function(e){return{hasErr:!0,errText:e.message}})});var b,F,_e=c(()=>{"use strict";V();b=W(U(z("VENDETTA_SETTINGS"))),F=W(U(me("vendetta_loader.json")))});function nr(){let e=k.useNavigation();return D(b),React.createElement(E,null,React.createElement(io,{key:"Vendetta",title:"Vendetta"},React.createElement(I,{label:"General",leading:React.createElement(I.Icon,{source:l("settings")}),trailing:I.Arrow,onPress:function(){return e.push("VendettaSettings")}}),React.createElement(rr,null),React.createElement(I,{label:"Plugins",leading:React.createElement(I.Icon,{source:l("debug")}),trailing:I.Arrow,onPress:function(){return e.push("VendettaPlugins")}}),window.__vendetta_loader?.features.themes&&React.createElement(React.Fragment,null,React.createElement(rr,null),React.createElement(I,{label:"Themes",leading:React.createElement(I.Icon,{source:l("ic_theme_24px")}),trailing:I.Arrow,onPress:function(){return e.push("VendettaThemes")}})),b.developerSettings&&React.createElement(React.Fragment,null,React.createElement(rr,null),React.createElement(I,{label:"Developer",leading:React.createElement(I.Icon,{source:l("ic_progress_wrench_24px")}),trailing:I.Arrow,onPress:function(){return e.push("VendettaDeveloper")}}))))}var I,io,rr,on=c(()=>{"use strict";d();A();v();V();_e();({FormRow:I,FormSection:io,FormDivider:rr}=p)});var cr={};w(cr,{DISCORD_SERVER:()=>or,GITHUB:()=>ar,HTTP_REGEX:()=>ir});var or,ar,ir,ze=c(()=>{"use strict";or="https://discord.gg/n9QQ4XhhJP",ar="https://github.com/vendetta-mod",ir=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/});function sr(e){let{title:t,confirmText:r,confirmColor:n,onConfirm:o,cancelText:a,placeholder:i,initialValue:u=""}=e,[f,h]=React.useState(u),[R,oe]=React.useState("");function S(){Promise.resolve(o(f)).then(function(){an.close()}).catch(function(X){oe(X.message)})}return React.createElement(Qt,{title:t,confirmText:r,confirmColor:n,isConfirmButtonDisabled:R.length!==0,onConfirm:S,cancelText:a,onCancel:function(){return an.close()}},React.createElement(co,{placeholder:i,value:f,onChangeText:function(B){h(B),R&&oe("")},returnKeyType:"done",onSubmitEditing:S,error:R,autoFocus:!0,showBorder:!0,style:{paddingVertical:5,alignSelf:"stretch",paddingHorizontal:0}}))}var co,an,cn=c(()=>{"use strict";C();A();({FormInput:co}=p),an=m("openLazy","close")});var ur={};w(ur,{showConfirmationAlert:()=>ue,showCustomAlert:()=>ln,showInputAlert:()=>lr});function ue(e){let t=e;return typeof e.content=="string"?t.body=e.content:t.children=e.content,delete t.content,sn.show(t)}var sn,ln,lr,Se=c(()=>{"use strict";C();cn();sn=m("openLazy","close");ln=function(e,t){return sn.openLazy({importer:async function(){return function(){return React.createElement(e,t)}}})},lr=function(e){return ln(sr,e)}});function We(e){let{alertTitle:t,installFunction:r}=e;return React.createElement(s.TouchableOpacity,{onPress:function(){return L.getString().then(function(n){return lr({title:t,initialValue:ir.test(n)?n:"",placeholder:"https://example.com/",onConfirm:function(o){return r(o)},confirmText:"Install",confirmColor:void 0,cancelText:"Cancel"})})}},React.createElement(s.Image,{style:so.icon,source:l("ic_add_24px")}))}var so,un=c(()=>{"use strict";d();ze();Se();v();be();so=M.createThemedStyleSheet({icon:{marginRight:10,tintColor:$.HEADER_PRIMARY}})});function Ke(e){let{label:t,version:r,icon:n}=e;return React.createElement(fn,{label:t,leading:React.createElement(fn.Icon,{source:l(n)}),trailing:React.createElement(lo,null,r),onPress:function(){L.setString(`${t} - ${r}`),g("Copied version to clipboard.",l("toast_copy_link"))}})}var fn,lo,mn=c(()=>{"use strict";d();v();te();A();({FormRow:fn,FormText:lo}=p)});function mr(){D(b);let e=[{label:"Vendetta",version:_.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${_.discord.version} (${_.discord.build})`,icon:"Discord"},{label:"React",version:_.react.version,icon:"ic_category_16px"},{label:"React Native",version:_.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:_.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Loader",version:_.vendetta.loader,icon:"ic_download_24px"},{label:"Operating System",version:`${_.os.name} ${_.os.version}`,icon:"ic_cog_24px"},..._.os.sdk?[{label:"SDK",version:_.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:_.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:_.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:_.device.model,icon:"ic_phonelink_24px"},{label:s.Platform.select({android:"Codename",ios:"Machine ID"}),version:_.device.codename,icon:"ic_compose_24px"}];return React.createElement(E,null,React.createElement(s.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(fr,{title:"Links",titleStyleType:"no_border"},React.createElement(H,{label:"Discord Server",leading:React.createElement(H.Icon,{source:l("Discord")}),trailing:H.Arrow,onPress:function(){return Ve.openDeeplink(or)}}),React.createElement(Te,null),React.createElement(H,{label:"GitHub",leading:React.createElement(H.Icon,{source:l("img_account_sync_github_white")}),trailing:H.Arrow,onPress:function(){return Ve.openURL(ar)}})),React.createElement(fr,{title:"Actions"},React.createElement(H,{label:"Reload Discord",leading:React.createElement(H.Icon,{source:l("ic_message_retry")}),onPress:function(){return s.NativeModules.BundleUpdaterManager.reload()}}),React.createElement(Te,null),React.createElement(uo,{label:"Developer Settings",leading:React.createElement(H.Icon,{source:l("ic_progress_wrench_24px")}),value:b.developerSettings,onValueChange:function(r){b.developerSettings=r}})),React.createElement(fr,{title:"Info"},React.createElement(le,{label:"Versions",icon:"ic_information_filled_24px"},e.map(function(r,n){return React.createElement(React.Fragment,null,React.createElement(Ke,{label:r.label,version:r.version,icon:r.icon}),n!==e.length-1&&React.createElement(Te,null))})),React.createElement(Te,null),React.createElement(le,{label:"Platform",icon:"ic_mobile_device"},t.map(function(r,n){return React.createElement(React.Fragment,null,React.createElement(Ke,{label:r.label,version:r.version,icon:r.icon}),n!==t.length-1&&React.createElement(Te,null))})))))}var H,uo,fr,Te,_,dn=c(()=>{"use strict";d();v();A();ze();Ee();V();_e();mn();J();({FormRow:H,FormSwitchRow:uo,FormSection:fr,FormDivider:Te}=p),_=Pt()});var ne,pn,gn,hn,dr=c(()=>{(function(e){e.BRAND="brand",e.RED="red",e.GREEN="green",e.PRIMARY="primary",e.TRANSPARENT="transparent",e.GREY="grey",e.LIGHTGREY="lightgrey",e.WHITE="white",e.LINK="link"})(ne||(ne={}));(function(e){e[e.BUILT_IN=0]="BUILT_IN",e[e.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",e[e.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",e[e.BOT=3]="BOT",e[e.PLACEHOLDER=4]="PLACEHOLDER"})(pn||(pn={}));(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER=6]="USER",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(gn||(gn={}));(function(e){e[e.CHAT=1]="CHAT",e[e.USER=2]="USER",e[e.MESSAGE=3]="MESSAGE"})(hn||(hn={}))});function Ne(e){let t=e.toggleValue??!1;return React.createElement(s.View,{style:[Ye.card,{marginTop:e.index===0?10:0}]},React.createElement(pr,{style:Ye.header,label:e.headerLabel,leading:e.headerIcon&&React.createElement(pr.Icon,{source:l(e.headerIcon)}),trailing:e.toggleType==="switch"?React.createElement(fo,{style:s.Platform.OS==="android"&&{marginVertical:-15},value:e.toggleValue,onValueChange:e.onToggleChange}):React.createElement(s.Pressable,{onPress:function(){t=!t,e.onToggleChange?.(t)}},React.createElement(mo,{selected:e.toggleValue}))}),React.createElement(pr,{label:e.descriptionLabel,trailing:React.createElement(s.View,{style:Ye.actions},e.actions?.map(function(r){let{icon:n,onPress:o}=r;return React.createElement(s.TouchableOpacity,{onPress:o},React.createElement(s.Image,{style:Ye.icon,source:l(n)}))}))}))}var pr,fo,mo,Ye,gr=c(()=>{"use strict";d();A();v();be();({FormRow:pr,FormSwitch:fo,FormRadio:mo}=p),Ye=M.createThemedStyleSheet({card:{backgroundColor:$?.BACKGROUND_SECONDARY,borderRadius:5,marginHorizontal:10,marginBottom:10},header:{padding:0,backgroundColor:$?.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:$?.INTERACTIVE_NORMAL}})});function hr(e){let{plugin:t,index:r}=e,n=Ot(t.id),o=k.useNavigation(),[a,i]=React.useState(!1);return a?null:React.createElement(Ne,{index:r,headerLabel:`${t.manifest.name} by ${t.manifest.authors.map(function(u){return u.name}).join(", ")}`,headerIcon:t.manifest.vendetta?.icon||"ic_application_command_24px",toggleType:"switch",toggleValue:t.enabled,onToggleChange:function(u){try{u?xe(t.id):ve(t.id)}catch(f){g(f.message,l("Small"))}},descriptionLabel:t.manifest.description,actions:[{icon:"ic_message_delete",onPress:function(){return ue({title:"Wait!",content:`Are you sure you wish to delete ${t.manifest.name}?`,confirmText:"Delete",cancelText:"Cancel",confirmColor:ne.RED,onConfirm:function(){try{Lt(t.id),i(!0)}catch(u){g(u.message,l("Small"))}}})}},{icon:"copy",onPress:function(){L.setString(t.id),g("Copied plugin URL to clipboard.",l("toast_copy_link"))}},{icon:t.update?"Check":"Small",onPress:function(){t.update=!t.update,g(`${t.update?"Enabled":"Disabled"} updates for ${t.manifest.name}.`,l("toast_image_saved"))}},...n?[{icon:"settings",onPress:function(){return o.push("VendettaCustomPage",{title:t.manifest.name,render:n})}}]:[]]})}var Rn=c(()=>{"use strict";dr();d();v();te();Se();se();gr()});function Rr(){return D(y),React.createElement(E,null,React.createElement(s.View,{style:{flex:1}},React.createElement(s.FlatList,{data:Object.values(y),renderItem:function(e){let{item:t,index:r}=e;return React.createElement(hr,{plugin:t,index:r})},keyExtractor:function(e){return e.id}})))}var yn=c(()=>{"use strict";d();V();se();Rn();J()});async function En(e,t){await Fe(e?t:"default"),s.NativeModules.BundleUpdaterManager.reload()}function yr(e){let{theme:t,index:r}=e,[n,o]=React.useState(!1);if(n)return null;let a=t.data.authors;return React.createElement(Ne,{index:r,headerLabel:`${t.data.name} ${a?`by ${a.map(function(i){return i.name}).join(", ")}`:""}`,descriptionLabel:t.data.description??"No description.",toggleType:"radio",toggleValue:t.selected,onToggleChange:function(i){En(i,t.id)},actions:[{icon:"ic_message_delete",onPress:function(){return ue({title:"Wait!",content:`Are you sure you wish to delete ${t.data.name}?`,confirmText:"Delete",cancelText:"Cancel",confirmColor:ne.RED,onConfirm:function(){ht(t.id).then(function(i){o(!0),i&&En(!1,t.id)}).catch(function(i){g(i.message,l("Small"))})}})}},{icon:"copy",onPress:function(){L.setString(t.id),g("Copied theme URL to clipboard.",l("toast_copy_link"))}},{icon:"ic_sync_24px",onPress:function(){ge(t.id).then(function(){t.selected?ue({title:"Theme refetched",content:"A reload is required to see the changes. Do you want to reload now?",confirmText:"Reload",cancelText:"Cancel",confirmColor:ne.RED,onConfirm:function(){return s.NativeModules.BundleUpdaterManager.reload()}}):g("Successfully refetched theme.",l("toast_image_saved"))}).catch(function(){g("Failed to refetch theme!",l("Small"))})}}]})}var wn=c(()=>{"use strict";dr();d();ie();v();Se();te();gr()});function Er(){return D(x),React.createElement(E,null,React.createElement(s.View,{style:{flex:1}},React.createElement(s.FlatList,{data:Object.values(x),renderItem:function(e){let{item:t,index:r}=e;return React.createElement(yr,{theme:t,index:r})},keyExtractor:function(e){return e.id}})))}var xn=c(()=>{"use strict";ie();V();d();J();wn()});function xr(){let e=k.useNavigation();return D(b),D(F),React.createElement(E,null,React.createElement(s.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(wr,{title:"Debug",titleStyleType:"no_border"},React.createElement(bn,{value:b.debuggerUrl,onChange:function(t){return b.debuggerUrl=t},placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(Je,null),React.createElement(G,{label:"Connect to debug websocket",leading:React.createElement(G.Icon,{source:l("copy")}),onPress:function(){return Nt(b.debuggerUrl)}}),window.__vendetta_rdc&&React.createElement(React.Fragment,null,React.createElement(Je,null),React.createElement(G,{label:"Connect to React DevTools",leading:React.createElement(G.Icon,{source:l("ic_badge_staff")}),onPress:function(){return window.__vendetta_rdc?.connectToDevTools({host:b.debuggerUrl.split(":")?.[0],resolveRNStyle:s.StyleSheet.flatten})}}))),window.__vendetta_loader?.features.loaderConfig&&React.createElement(wr,{title:"Loader config"},React.createElement(vn,{label:"Load from custom url",subLabel:"Load Vendetta from a custom endpoint.",leading:React.createElement(G.Icon,{source:l("copy")}),value:F.customLoadUrl.enabled,onValueChange:function(t){F.customLoadUrl.enabled=t}}),React.createElement(Je,null),F.customLoadUrl.enabled&&React.createElement(React.Fragment,null,React.createElement(bn,{value:F.customLoadUrl.url,onChange:function(t){return F.customLoadUrl.url=t},placeholder:"http://localhost:4040/vendetta.js",title:"VENDETTA URL"}),React.createElement(Je,null)),window.__vendetta_loader.features.devtools&&React.createElement(vn,{label:"Load React DevTools",subLabel:`Version: ${window.__vendetta_loader.features.devtools.version}`,leading:React.createElement(G.Icon,{source:l("ic_badge_staff")}),value:F.loadReactDevTools,onValueChange:function(t){F.loadReactDevTools=t}})),React.createElement(wr,{title:"Other"},React.createElement(G,{label:"Asset Browser",leading:React.createElement(G.Icon,{source:l("ic_media_upload")}),trailing:G.Arrow,onPress:function(){return e.push("VendettaAssetBrowser")}}))))}var wr,G,vn,bn,Je,_n=c(()=>{"use strict";d();A();v();Ee();V();_e();J();({FormSection:wr,FormRow:G,FormSwitchRow:vn,FormInput:bn,FormDivider:Je}=p)});function vr(e){let{asset:t}=e;return React.createElement(po,{label:`${t.name} - ${t.id}`,trailing:React.createElement(s.Image,{source:t.id,style:go.asset}),onPress:function(){L.setString(t.name),g("Copied asset name to clipboard.",l("toast_copy_link"))}})}var po,go,Sn=c(()=>{"use strict";d();te();v();A();({FormRow:po}=p),go=M.createThemedStyleSheet({asset:{width:32,height:32}})});function br(){let[e,t]=React.useState("");return React.createElement(E,null,React.createElement(s.View,{style:{flex:1}},React.createElement(qt,{style:Ro.search,onChangeText:function(r){return t(r)},placeholder:"Search"}),React.createElement(s.FlatList,{data:Object.values(j).filter(function(r){return r.name.includes(e)||r.id.toString()===e}),renderItem:function(r){let{item:n}=r;return React.createElement(React.Fragment,null,React.createElement(vr,{asset:n}),React.createElement(ho,null))},keyExtractor:function(r){return r.name}})))}var ho,Ro,Tn=c(()=>{"use strict";d();v();A();J();Sn();({FormDivider:ho}=p),Ro=M.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}})});function _r(){let e=new Array;return e.push(N("default",yo,function(t,r){return{...r,VendettaSettings:{title:"Vendetta",render:mr},VendettaPlugins:{title:"Plugins",render:Rr,headerRight:function(){return React.createElement(We,{alertTitle:"Install Plugin",installFunction:Mt})}},VendettaThemes:{title:"Themes",render:Er,headerRight:function(){return React.createElement(We,{alertTitle:"Install Theme",installFunction:gt})}},VendettaDeveloper:{title:"Developer",render:xr},VendettaAssetBrowser:{title:"Asset Browser",render:br},VendettaCustomPage:{title:"Vendetta Page",render:function(n){let{render:o,...a}=n,i=k.useNavigation();return React.useEffect(function(){return a&&i.setOptions(a)}),React.createElement(E,null,React.createElement(o,null))}}}})),N("default",Eo,function(t,r){let n=Le(r.props.children,function(o){return o.type&&o.type.name==="UserSettingsOverview"});e.push(N("renderSupportAndAcknowledgements",n.type.prototype,function(o,a){let{props:{children:i}}=a,u=i.findIndex(function(f){return f?.type?.name==="UploadLogsButton"});u!==-1&&i.splice(u,1)})),e.push(N("render",n.type.prototype,function(o,a){let{props:{children:i}}=a,u=[Oe.Messages.BILLING_SETTINGS,Oe.Messages.PREMIUM_SETTINGS],f=i.findIndex(function(h){return u.includes(h.props.title)});i.splice(f===-1?4:f,0,React.createElement(nr,null))}))},!0),function(){return e.forEach(function(t){return t()})}}var yo,Eo,Nn=c(()=>{"use strict";d();C();Q();se();ie();lt();J();on();un();dn();yn();xn();_n();Tn();yo=ae("getScreens",!1),Eo=ae("UserSettingsOverviewWrapper",!1)});function Pn(e){let{locale:t}=e;try{let r=xo.theme||"dark";wo.overrideTheme(r),Dn&&vo.useAMOLEDTheme===2&&Dn.setAMOLEDThemeEnabled(!0)}catch(r){T.error("Failed to fix theme...",r)}try{xt.locale(t.toLowerCase())}catch(r){T.error("Failed to fix timestamps...",r)}ke.unsubscribe("I18N_LOAD_SUCCESS",Pn)}function An(){return ke.subscribe("I18N_LOAD_SUCCESS",Pn)}var wo,Dn,xo,vo,In=c(()=>{"use strict";d();C();ce();wo=m("updateTheme","overrideTheme"),Dn=m("setAMOLEDThemeEnabled"),xo=Ie("ThemeStore"),vo=Ie("UnsyncedUserSettingsStore")});function De(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];let o={...e};return r.forEach(function(a){return delete o[a]}),o}async function Bn(e){return{patcher:De(Br,"unpatchAll"),metro:{...qe,common:{...vt}},constants:cr,utils:mt,debug:De(At,"versionHash","patchLogHook"),ui:{components:Zt,toasts:St,alerts:ur,assets:_t,...er},plugins:De(Vt,"initPlugins"),themes:De(Et,"initThemes"),commands:De(Bt,"patchCommands"),storage:it,settings:b,loader:{identity:window.__vendetta_loader,config:F},logger:T,version:je,unload:function(){e.filter(function(t){return typeof t=="function"}).forEach(function(t){return t()}),delete window.vendetta}}}var Cn=c(()=>{"use strict";Q();ce();_e();ze();Ee();se();ie();Ct();V();C();d();A();te();Se();v();be();dt()});var Mn={};w(Mn,{default:()=>bo});async function bo(){let e=await Promise.all([Dt(),bt(),It(),An(),_r()]);window.vendetta=await Bn(e),e.push(await Ft()),T.log("Vendetta is ready!")}var Ln=c(()=>{"use strict";Ee();Ct();se();v();Nn();In();ce();Cn()});console.log("Hello from Vendetta!");(async function(){try{await(await Promise.resolve().then(()=>(Ln(),Mn))).default()}catch(e){let t=[`Failed to load Vendetta!
`,`Build Number: ${nativeModuleProxy.InfoDictionaryManager.Build}`,"Vendetta: 0bf2b58",e?.stack||e.toString()].join(`
`);alert(t),console.error(e?.stack||e.toString())}})();})();
//# sourceURL=Vendetta
