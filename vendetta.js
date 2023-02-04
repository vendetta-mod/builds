"use strict";(()=>{var At=Object.defineProperty;var T=(e,t)=>{for(var o in t)At(e,o,{get:t[o],enumerable:!0})};var Me={};T(Me,{connectToDebugger:()=>De,getDebugInfo:()=>Ce,patchLogHook:()=>Ne,socket:()=>w,versionHash:()=>ne});var Te={};T(Te,{Flux:()=>Ct,FluxDispatcher:()=>oe,NavigationNative:()=>G,React:()=>Mt,ReactNative:()=>m,assets:()=>$,channels:()=>Nt,clipboard:()=>Se,constants:()=>q,i18n:()=>te,invites:()=>we,navigation:()=>C,navigationStack:()=>xe,stylesheet:()=>p,toasts:()=>ve,url:()=>be});var ye={};T(ye,{find:()=>k,findAll:()=>he,findByDisplayName:()=>B,findByDisplayNameAll:()=>Dt,findByProps:()=>d,findByPropsAll:()=>_t,findByStoreName:()=>ee,modules:()=>ge});var Q=e=>Object.values(window.modules).find(t=>t.publicModule.exports?.[e]).publicModule.exports;window.React=Q("createElement");var m=Q("Text"),q=Q("ThemeColorMap"),Z=Q("isMoment");function it(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t].publicModule.exports;if(!o||o===window||o.proxygone===null){it(t);continue}}var st=(e,t=!1)=>o=>{let r=[],n=Z?.locale();for(let i in e){let a=Number(i),s=e[a].publicModule.exports;if(!e[a].isInitialized)try{__r(a),n&&n!==Z.locale()&&Z.locale(n)}catch{}if(!s){it(a);continue}try{if(s.default&&s.__esModule&&o(s.default)){if(t)return s.default;r.push(s.default)}if(o(s)){if(t)return s;r.push(s)}}catch(l){console.error(`Failed to getModule... ${l.stack||l.toString()}`)}}if(!t)return r},ge=window.modules,k=st(ge,!0),he=st(ge),at=e=>t=>e.every(o=>t[o]!==void 0),ct=(e,t)=>t?o=>o.name===e:o=>o?.default?.name===e,d=(...e)=>k(at(e)),_t=(...e)=>he(at(e)),B=(e,t=!0)=>k(ct(e,t)),Dt=(e,t=!0)=>he(ct(e,t)),ee=e=>k(t=>t.getName?.()===e);var Nt=d("getVoiceChannelId"),te=d("Messages"),be=d("openURL"),ve=k(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),p=d("createThemedStyleSheet"),Se=d("setString","getString","hasString"),$=d("registerAsset"),we=d("acceptInviteAndTransitionToInviteChannel"),C=d("pushLazy"),xe=d("createStackNavigator"),G=d("NavigationContainer"),Ct=d("connectStores"),oe=d("_currentDispatchActionType"),Mt=window.React;var Ie={};T(Ie,{after:()=>S,before:()=>Ft,instead:()=>Ot,unpatchAll:()=>mt});var Re=["a","b","i"],R=new Map;function lt(e,t,o,r,n){let i=R.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let l of i.b.values()){let v=l.call(r,o);Array.isArray(v)&&(o=v)}let a=(...l)=>n?Reflect.construct(i.o,l,r):i.o.apply(r,l);for(let l of i.i.values()){let v=a;a=(...D)=>l.call(r,D,v)}let s=a(...o);for(let l of i.a.values())s=l.call(r,o,s)??s;return s}function Ee(e,t,o,r){let n=R.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),Re.every(a=>i[a].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&R.delete(e),!0):!1}function mt(){for(let[e,t]of R.entries())for(let o in t)for(let r of Re)for(let n of t[o]?.[r].keys()??[])Ee(e,o,n,r)}var re=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);R.has(o)||R.set(o,{});let i=R.get(o);if(!i[t]){let l=o[t];i[t]={o:l,b:new Map,i:new Map,a:new Map};let v=(x,N,U)=>{let Pt=lt(t,o,N,x,U);return n&&s(),Pt},D=new Proxy(l,{apply:(x,N,U)=>v(N,U,!1),construct:(x,N)=>v(l,N,!0),get:(x,N,U)=>N=="toString"?l.toString.bind(l):Reflect.get(x,N,U)});Reflect.defineProperty(o,t,{value:D,configurable:!0,writable:!0})||(o[t]=D)}let a=Symbol(),s=()=>Ee(o,t,a,e);return i[t][e].set(a,r),s};var Ft=re("b"),Ot=re("i"),S=re("a");var dt={...Ie};var Ae={};T(Ae,{all:()=>E,find:()=>Lt,getAssetByID:()=>Bt,getAssetByName:()=>kt,getAssetIDByName:()=>c,patchAssets:()=>Pe});var E={};function Pe(){let e=S("registerAsset",$,(t,o)=>{let r=t[0];E[r.name]={...r,id:o}});for(let t=1;;t++){let o=$.getAssetByID(t);if(!o)break;E[o.name]||(E[o.name]={...o,id:t})}return e}var Lt=e=>Object.values(E).find(e),kt=e=>E[e],Bt=e=>$.getAssetByID(e),c=e=>E[e]?.id;var _e={};T(_e,{showToast:()=>u});function u(e,t){return ve.open({content:e,source:t})}var Vt=d("setLogFn").default,jt=new Vt("Vendetta"),g=jt;var w;function De(e){if(w!==void 0&&w.readyState!==WebSocket.CLOSED&&w.close(),e===""){u("Invalid debugger URL!",c("Small"));return}w=new WebSocket(`ws://${e}`),w.addEventListener("open",()=>u("Connected to debugger.",c("Check"))),w.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),w.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),u("An error occurred with the debugger connection!",c("Small"))})}function Ne(){let e=S("nativeLoggingHook",globalThis,t=>{w?.readyState===WebSocket.OPEN&&w.send(JSON.stringify({message:t[0],level:t[1]})),g.log(t[0])});return()=>{w&&w.close(),e()}}var ne="4108275";function Ce(){let e=m.NativeModules.InfoDictionaryManager,t=m.NativeModules.DCDDeviceManager,o=window.HermesInternal.getRuntimeProperties(),r=o["OSS Release Version"],n="for RN ",i=m.Platform.constants,a=i.reactNativeVersion;return{vendetta:{version:ne},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:r.startsWith(n)?r.substring(n.length):`${a.major}.${a.minor}.${a.patch}`},hermes:{version:r,buildType:o.Build,bytecodeVersion:o["Bytecode Version"]},...m.Platform.select({android:{os:{name:"Android",version:i.Release,sdk:i.Version}},ios:{os:{name:i.systemName,version:i.osVersion}}}),...m.Platform.select({android:{device:{manufacturer:i.Manufacturer,brand:i.Brand,model:i.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var Oe={};T(Oe,{patchCommands:()=>Fe,registerCommand:()=>Ut});var pt=d("getBuiltInCommands"),H=[];function Fe(){let e=S("getBuiltInCommands",pt,(t,o)=>o.concat(H));return()=>{H=[],e()}}function Ut(e){let t=pt.getBuiltInCommands(1,!0,!1);t.sort(function(r,n){return parseInt(n.id)-parseInt(r.id)});let o=t[t.length-1];return e.id=(parseInt(o.id,10)-1).toString(),H.push(e),()=>H=H.filter(({id:r})=>r!==e.id)}var Ge={};T(Ge,{evalPlugin:()=>bt,fetchPlugin:()=>ie,getSettings:()=>se,initPlugins:()=>$e,plugins:()=>y,removePlugin:()=>Ue,showSettings:()=>ae,startPlugin:()=>z,stopPlugin:()=>Y});var Be={};T(Be,{awaitSyncWrapper:()=>ke,createProxy:()=>ht,createStorage:()=>V,useProxy:()=>I,wrapSync:()=>K});var $t=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL"});function Le(){return{listeners:Object.values($t).reduce((e,t)=>(e[t]=new Set,e),{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){let o=(r,n)=>{this.off(r,o),t(r,n)};this.on(e,o)},emit(e,t){for(let o of this.listeners[e])o(e,t)}}}var ft=m.NativeModules.MMKVManager,ut=Symbol("emitter accessor"),gt=Symbol("wrapSync promise accessor");function ht(e={}){let t=Le();function o(r,n){return new Proxy(r,{get(i,a){if(a===ut)return t;let s=[...n,a],l=i[a];return l!=null?(t.emit("GET",{path:s,value:l}),typeof l=="object"?o(l,s):l):l},set(i,a,s){return i[a]=s,t.emit("SET",{path:[...n,a],value:s}),!0},deleteProperty(i,a){let s=delete i[a];return s&&t.emit("DEL",{path:[...n,a]}),s}})}return{proxy:o(e,[]),emitter:t}}function I(e){let t=e[ut],[,o]=React.useReducer(r=>~r,0);return React.useEffect(()=>{let r=()=>o();return t.on("SET",r),t.on("DEL",r),()=>{t.off("SET",r),t.off("DEL",r)}},[]),e}async function V(e){let t=JSON.parse(await ft.getItem(e)??"{}"),{proxy:o,emitter:r}=ht(t),n=()=>ft.setItem(e,JSON.stringify(o));return r.on("SET",n),r.on("DEL",n),o}function K(e){let t,o=[],r=n=>t?n():o.push(n);return e.then(n=>{t=n,o.forEach(i=>i())}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(n=>[n,(i,...a)=>Reflect[n](t??i,...a)])),get(n,i,a){return i===gt?r:Reflect.get(t??n,i,a)}})}var ke=e=>new Promise(t=>e[gt](t));var je={};T(je,{Forms:()=>f,General:()=>W,Search:()=>Ve});var f=d("Form","FormSection"),W=d("Button","Text","View"),Ve=B("StaticSearchBarContainer");var j=p.createThemedStyleSheet({container:{backgroundColor:p.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:1},card:{backgroundColor:p.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:p.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:p.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:p.ThemeColorMap.HEADER_PRIMARY},headerTitle:{fontFamily:q.Fonts.PRIMARY_BOLD,color:p.ThemeColorMap.HEADER_PRIMARY},backIcon:{tintColor:p.ThemeColorMap.INTERACTIVE_ACTIVE,marginLeft:15,marginRight:20}}),yt=xe.createStackNavigator(),{TouchableOpacity:Gt,Image:Ht}=W;function J({name:e,children:t}){return React.createElement(G.NavigationContainer,{independent:!0},React.createElement(yt.Navigator,{initialRouteName:e,style:j.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:j.card,headerStyle:j.header,headerTitleContainerStyle:j.headerTitleContainer}},React.createElement(yt.Screen,{name:e,component:t,options:{headerTitleStyle:j.headerTitle,headerLeft:()=>React.createElement(Gt,{onPress:()=>C.pop()},React.createElement(Ht,{style:j.backIcon,source:c("back-icon")}))}})))}var y=K(V("VENDETTA_PLUGINS")),M={};async function ie(e,t=!0){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in y)throw new Error("Plugin ID invalid or taken");let o;try{o=await(await fetch(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;try{r=await(await fetch(e+(o.main||"index.js"),{cache:"no-store"})).text()}catch{throw new Error(`Failed to fetch JS for ${e}`)}if(r.length===0)throw new Error(`Failed to fetch JS for ${e}`);y[e]={id:e,manifest:o,enabled:!1,update:!0,js:r},t&&await z(e)}async function bt(e){let t={...window.vendetta,plugin:{manifest:e.manifest,storage:await V(e.id),showSettings:()=>ae(e)}},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}async function z(e){let t=y[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=await bt(t);M[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){g.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{M[t.id]?.onUnload?.()}catch(r){g.error(`Plugin ${t.id} errored whilst unloading`,r)}delete M[e],t.enabled=!1}}function Y(e,t=!0){let o=y[e],r=M[e];if(!o)throw new Error("Attempted to stop non-existent plugin");if(!r)throw new Error("Attempted to stop a non-started plugin");try{M[o.id]?.onUnload?.()}catch(n){g.error(`Plugin ${o.id} errored whilst unloading`,n)}delete M[e],t&&(o.enabled=!1)}function Ue(e){y[e].enabled&&Y(e),delete y[e]}async function $e(){await ke(y);let e=Object.keys(y);await Promise.allSettled(e.map(t=>ie(t,!1)));for(let t of e.filter(o=>y[o].enabled))z(t);return Kt}var Kt=()=>Object.keys(y).forEach(e=>Y(e,!1)),se=e=>M[e]?.settings;function ae(e){let t=se(e.id);if(!t)return g.error(`Plugin ${e.id} is not loaded or has no settings`);C.push(J,{name:e.manifest.name,children:t})}function X(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function a(s,l,{walkable:v=[],ignore:D=[]}={}){if(i+=1,!(i>n)){if(typeof l=="string"){if(s.hasOwnProperty(l))return s[l]}else if(l(s))return s;if(s){if(Array.isArray(s))for(let L of s){let x=a(L,l,{walkable:v,ignore:D});if(x)return x}else if(typeof s=="object"){for(let L of Object.keys(s))if(!(v!=null&&v.includes(L))&&!D.includes(L))try{let x=a(s[L],l,{walkable:v,ignore:D});if(x)return x}catch{}}}}}return a(e,t,{walkable:o,ignore:r})}var ce=(e,t)=>X(e,t,{walkable:["props","children","child","sibling"]});var h=K(V("VENDETTA_SETTINGS"));var{FormRow:P,FormSection:Wt,FormDivider:vt}=f;function He(){let e=G.useNavigation();return I(h),React.createElement(Wt,{key:"Vendetta",title:"Vendetta"},React.createElement(P,{label:"General",leading:React.createElement(P.Icon,{source:c("settings")}),trailing:P.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(vt,null),React.createElement(P,{label:"Plugins",leading:React.createElement(P.Icon,{source:c("debug")}),trailing:P.Arrow,onPress:()=>e.push("VendettaPlugins")}),h.developerSettings&&React.createElement(React.Fragment,null,React.createElement(vt,null),React.createElement(P,{label:"Developer",leading:React.createElement(P.Icon,{source:c("ic_progress_wrench_24px")}),trailing:P.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var Je={};T(Je,{DISCORD_SERVER:()=>Ke,GITHUB:()=>We});var Ke="n9QQ4XhhJP",We="https://github.com/vendetta-mod";function A(e){try{Se.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}var{FormRow:St,FormText:Jt}=f;function le({label:e,version:t,icon:o}){return React.createElement(St,{label:e,leading:React.createElement(St.Icon,{source:c(o)}),trailing:React.createElement(Jt,null,t),onPress:()=>{A(`${e} - ${t}`),u("Copied version to clipboard.",c("toast_copy_link"))}})}var{FormRow:_,FormSwitchRow:zt,FormSection:me,FormDivider:de}=f,b=Ce();function ze(){I(h);let e=[{label:"Vendetta",version:b.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${b.discord.version} (${b.discord.build})`,icon:"Discord"},{label:"React",version:b.react.version,icon:"ic_category_16px"},{label:"React Native",version:b.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:b.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Operating System",version:`${b.os.name} ${b.os.version}`,icon:"ic_cog_24px"},...b.os.sdk?[{label:"SDK",version:b.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:b.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:b.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:b.device.model,icon:"ic_phonelink_24px"},{label:m.Platform.select({android:"Codename",ios:"Machine ID"}),version:b.device.codename,icon:"ic_compose_24px"}];return React.createElement(m.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(me,{title:"Links",titleStyleType:"no_border"},React.createElement(_,{label:"Discord Server",leading:React.createElement(_.Icon,{source:c("Discord")}),trailing:_.Arrow,onPress:()=>we.acceptInviteAndTransitionToInviteChannel({inviteKey:Ke})}),React.createElement(de,null),React.createElement(_,{label:"GitHub",leading:React.createElement(_.Icon,{source:c("img_account_sync_github_white")}),trailing:_.Arrow,onPress:()=>be.openURL(We)})),React.createElement(me,{title:"Versions"},e.map(o=>React.createElement(React.Fragment,null,React.createElement(le,{label:o.label,version:o.version,icon:o.icon}),React.createElement(de,null)))),React.createElement(me,{title:"Platform Info"},t.map(o=>React.createElement(React.Fragment,null,React.createElement(le,{label:o.label,version:o.version,icon:o.icon}),React.createElement(de,null)))),React.createElement(me,{title:"Actions"},React.createElement(_,{label:"Reload Discord",leading:React.createElement(_.Icon,{source:c("ic_message_retry")}),onPress:()=>m.NativeModules.BundleUpdaterManager.reload()}),React.createElement(de,null),React.createElement(zt,{label:"Developer Settings",leading:React.createElement(_.Icon,{source:c("ic_progress_wrench_24px")}),value:h.developerSettings,onValueChange:o=>{h.developerSettings=o}})))}var{FormRow:Ye,FormSwitch:Yt}=f,{TouchableOpacity:pe,Image:fe}=W,F=p.createThemedStyleSheet({card:{backgroundColor:p.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:5,margin:10,marginTop:0},header:{backgroundColor:p.ThemeColorMap.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{justifyContent:"flex-end",flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:p.ThemeColorMap.INTERACTIVE_NORMAL}});function Xe({plugin:e}){let[t,o]=React.useState(!1);return t?null:React.createElement(m.View,{style:F.card},React.createElement(Ye,{style:F.header,label:`${e.manifest.name} by ${e.manifest.authors.map(r=>r.name).join(", ")}`,leading:React.createElement(Ye.Icon,{source:c(e.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(Yt,{value:e.enabled,onValueChange:r=>{r?z(e.id):Y(e.id)}})}),React.createElement(Ye,{label:e.manifest.description,trailing:React.createElement(m.View,{style:F.actions},React.createElement(pe,{onPress:()=>{Ue(e.id),o(!0)}},React.createElement(fe,{style:F.icon,source:c("ic_message_delete")})),React.createElement(pe,{onPress:()=>{A(e.id),u("Copied plugin URL to clipboard.",c("toast_copy_link"))}},React.createElement(fe,{style:F.icon,source:c("copy")})),React.createElement(pe,{onPress:()=>{e.update=!e.update,u(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,c("toast_image_saved"))}},React.createElement(fe,{style:F.icon,source:c(e.update?"Check":"Small")})),se(e.id)&&React.createElement(pe,{onPress:()=>ae(e)},React.createElement(fe,{style:F.icon,source:c("settings")})))}))}var{FormInput:Xt,FormRow:wt}=f;function Qe(){I(y);let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(Xt,{value:e,onChange:o=>t(o),placeholder:"https://example.com/",title:"PLUGIN URL"}),React.createElement(wt,{label:"Install plugin",leading:React.createElement(wt.Icon,{source:c("ic_add_18px")}),onPress:()=>{ie(e).then(()=>{t("")}).catch(o=>{u(o.message,c("Small"))})}}),React.createElement(m.FlatList,{style:{marginTop:10},data:Object.values(y),renderItem:({item:o})=>React.createElement(Xe,{plugin:o}),keyExtractor:o=>o.id}))}var{FormRow:Qt}=f,qt=p.createThemedStyleSheet({asset:{width:32,height:32}});function qe({asset:e}){return React.createElement(Qt,{label:`${e.name} - ${e.id}`,trailing:React.createElement(m.Image,{source:e.id,style:qt.asset}),onPress:()=>{A(e.name),u("Copied asset name to clipboard.",c("toast_copy_link"))}})}var{FormDivider:Zt}=f,eo=p.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function Ze(){let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(Ve,{style:eo.search,onChangeText:o=>t(o),placeholder:"Search"}),React.createElement(m.FlatList,{data:Object.values(E).filter(o=>o.name.includes(e)||o.id.toString()===e),renderItem:({item:o})=>React.createElement(React.Fragment,null,React.createElement(qe,{asset:o}),React.createElement(Zt,null)),keyExtractor:o=>o.name}))}var{FormSection:xt,FormRow:O,FormInput:to,FormDivider:Tt}=f;function et(){return I(h),React.createElement(m.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(xt,{title:"Debug",titleStyleType:"no_border"},React.createElement(to,{value:h.debuggerUrl,onChange:e=>h.debuggerUrl=e,placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(Tt,null),React.createElement(O,{label:"Connect to debug websocket",leading:React.createElement(O.Icon,{source:c("copy")}),onPress:()=>De(h.debuggerUrl)}),React.createElement(Tt,null),window.__vendetta_rdc&&React.createElement(O,{label:"Connect to React DevTools",leading:React.createElement(O.Icon,{source:c("ic_badge_staff")}),onPress:()=>{try{window.__vendetta_rdc?.connectToDevTools({host:h.debuggerUrl.split(":")?.[0],resolveRNStyle:m.StyleSheet.flatten})}catch(e){g.error("Failed to connect to React DevTools!",e),u("Failed to connect to React DevTools!",c("Small"))}}})),React.createElement(xt,{title:"Other"},React.createElement(O,{label:"Asset Browser",leading:React.createElement(O.Icon,{source:c("ic_media_upload")}),trailing:O.Arrow,onPress:()=>C.push(J,{name:"Asset Browser",children:Ze})})))}var oo=B("getScreens",!1),ro=B("UserSettingsOverviewWrapper",!1);function tt(){let e=new Array;return e.push(S("default",oo,(t,o)=>({...o,VendettaSettings:{title:"Vendetta",render:ze},VendettaPlugins:{title:"Plugins",render:Qe},VendettaDeveloper:{title:"Developer",render:et}}))),S("default",ro,(t,o)=>{let r=ce(o.props.children,n=>n.type&&n.type.name==="UserSettingsOverview");e.push(S("renderSupportAndAcknowledgements",r.type.prototype,(n,{props:{children:i}})=>{let a=i.findIndex(s=>s?.type?.name==="UploadLogsButton");a!==-1&&i.splice(a,1)})),e.push(S("render",r.type.prototype,(n,{props:{children:i}})=>{let a=[te.Messages.BILLING_SETTINGS,te.Messages.PREMIUM_SETTINGS],s=i.findIndex(l=>a.includes(l.props.title));i.splice(s===-1?4:s,0,React.createElement(He,null))}))},!0),()=>e.forEach(t=>t())}var no=d("updateTheme","overrideTheme"),Rt=d("setAMOLEDThemeEnabled"),Et=ee("ThemeStore"),io=ee("UnsyncedUserSettingsStore");function It(){let e=Et.theme||"dark";no.overrideTheme(e),Rt&&io.useAMOLEDTheme===2&&Rt.setAMOLEDThemeEnabled(!0),oe.unsubscribe("I18N_LOAD_START",It)}function ot(){try{Et&&oe.subscribe("I18N_LOAD_START",It)}catch(e){g.error("Failed to fix theme...",e)}}function rt(e){return Object.isFrozen(e)?Object.assign({},e):e}function ue(e,...t){let o={...e};return t.forEach(r=>delete o[r]),o}async function nt(e){return{patcher:ue(dt,"unpatchAll"),metro:{...ye,common:{...Te}},constants:{...Je},utils:{copyText:A,findInReactTree:ce,findInTree:X,unfreeze:rt},debug:ue(Me,"versionHash","patchLogHook"),ui:{components:je,toasts:_e,assets:Ae},plugins:ue(Ge,"initPlugins"),commands:ue(Oe,"patchCommands"),storage:Be,settings:h,logger:g,version:ne,unload:()=>{e.filter(t=>typeof t=="function").forEach(t=>t()),delete window.vendetta}}}console.log("Hello from Vendetta!");async function so(){try{let e=await Promise.all([Ne(),Pe(),Fe(),ot(),tt()]);window.vendetta=await nt(e),e.push(await $e()),g.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}}so();})();
//# sourceURL=Vendetta