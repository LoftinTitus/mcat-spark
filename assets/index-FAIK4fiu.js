var pp=e=>{throw TypeError(e)};var El=(e,n,t)=>n.has(e)||pp("Cannot "+t);var D=(e,n,t)=>(El(e,n,"read from private field"),t?t.call(e):n.get(e)),le=(e,n,t)=>n.has(e)?pp("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t),Z=(e,n,t,r)=>(El(e,n,"write to private field"),r?r.call(e,t):n.set(e,t),t),je=(e,n,t)=>(El(e,n,"access private method"),t);var ms=(e,n,t,r)=>({set _(i){Z(e,n,i,t)},get _(){return D(e,n,r)}});function Ub(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ua(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sm={exports:{}},Va={},am={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=Symbol.for("react.element"),Vb=Symbol.for("react.portal"),Gb=Symbol.for("react.fragment"),qb=Symbol.for("react.strict_mode"),$b=Symbol.for("react.profiler"),Kb=Symbol.for("react.provider"),Qb=Symbol.for("react.context"),Yb=Symbol.for("react.forward_ref"),Xb=Symbol.for("react.suspense"),Jb=Symbol.for("react.memo"),Zb=Symbol.for("react.lazy"),fp=Symbol.iterator;function ex(e){return e===null||typeof e!="object"?null:(e=fp&&e[fp]||e["@@iterator"],typeof e=="function"?e:null)}var lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cm=Object.assign,um={};function Ui(e,n,t){this.props=e,this.context=n,this.refs=um,this.updater=t||lm}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dm(){}dm.prototype=Ui.prototype;function _u(e,n,t){this.props=e,this.context=n,this.refs=um,this.updater=t||lm}var ju=_u.prototype=new dm;ju.constructor=_u;cm(ju,Ui.prototype);ju.isPureReactComponent=!0;var hp=Array.isArray,pm=Object.prototype.hasOwnProperty,Hu={current:null},fm={key:!0,ref:!0,__self:!0,__source:!0};function hm(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)pm.call(n,r)&&!fm.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:rs,type:e,key:o,ref:s,props:i,_owner:Hu.current}}function nx(e,n){return{$$typeof:rs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Bu(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function tx(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var mp=/\/+/g;function Al(e,n){return typeof e=="object"&&e!==null&&e.key!=null?tx(""+e.key):n.toString(36)}function Bs(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case rs:case Vb:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Al(s,0):r,hp(i)?(t="",e!=null&&(t=e.replace(mp,"$&/")+"/"),Bs(i,n,t,"",function(c){return c})):i!=null&&(Bu(i)&&(i=nx(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(mp,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",hp(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Al(o,a);s+=Bs(o,n,t,l,i)}else if(l=ex(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Al(o,a++),s+=Bs(o,n,t,l,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function gs(e,n,t){if(e==null)return e;var r=[],i=0;return Bs(e,r,"","",function(o){return n.call(t,o,i++)}),r}function rx(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Ws={transition:null},ix={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:Hu};function mm(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:gs,forEach:function(e,n,t){gs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return gs(e,function(){n++}),n},toArray:function(e){return gs(e,function(n){return n})||[]},only:function(e){if(!Bu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Ui;re.Fragment=Gb;re.Profiler=$b;re.PureComponent=_u;re.StrictMode=qb;re.Suspense=Xb;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix;re.act=mm;re.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cm({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Hu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)pm.call(n,l)&&!fm.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:rs,type:e.type,key:i,ref:o,props:r,_owner:s}};re.createContext=function(e){return e={$$typeof:Qb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kb,_context:e},e.Consumer=e};re.createElement=hm;re.createFactory=function(e){var n=hm.bind(null,e);return n.type=e,n};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:Yb,render:e}};re.isValidElement=Bu;re.lazy=function(e){return{$$typeof:Zb,_payload:{_status:-1,_result:e},_init:rx}};re.memo=function(e,n){return{$$typeof:Jb,type:e,compare:n===void 0?null:n}};re.startTransition=function(e){var n=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=n}};re.unstable_act=mm;re.useCallback=function(e,n){return Je.current.useCallback(e,n)};re.useContext=function(e){return Je.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};re.useEffect=function(e,n){return Je.current.useEffect(e,n)};re.useId=function(){return Je.current.useId()};re.useImperativeHandle=function(e,n,t){return Je.current.useImperativeHandle(e,n,t)};re.useInsertionEffect=function(e,n){return Je.current.useInsertionEffect(e,n)};re.useLayoutEffect=function(e,n){return Je.current.useLayoutEffect(e,n)};re.useMemo=function(e,n){return Je.current.useMemo(e,n)};re.useReducer=function(e,n,t){return Je.current.useReducer(e,n,t)};re.useRef=function(e){return Je.current.useRef(e)};re.useState=function(e){return Je.current.useState(e)};re.useSyncExternalStore=function(e,n,t){return Je.current.useSyncExternalStore(e,n,t)};re.useTransition=function(){return Je.current.useTransition()};re.version="18.3.1";am.exports=re;var w=am.exports;const B=Ua(w),gm=Ub({__proto__:null,default:B},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox=w,sx=Symbol.for("react.element"),ax=Symbol.for("react.fragment"),lx=Object.prototype.hasOwnProperty,cx=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ux={key:!0,ref:!0,__self:!0,__source:!0};function ym(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)lx.call(n,r)&&!ux.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:sx,type:e,key:o,ref:s,props:i,_owner:cx.current}}Va.Fragment=ax;Va.jsx=ym;Va.jsxs=ym;sm.exports=Va;var k=sm.exports,vm={exports:{}},Cn={},bm={exports:{}},xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,M){var x=N.length;N.push(M);e:for(;0<x;){var K=x-1>>>1,q=N[K];if(0<i(q,M))N[K]=M,N[x]=q,x=K;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],x=N.pop();if(x!==M){N[0]=x;e:for(var K=0,q=N.length,S=q>>>1;K<S;){var Q=2*(K+1)-1,de=N[Q],oe=Q+1,ie=N[oe];if(0>i(de,x))oe<q&&0>i(ie,de)?(N[K]=ie,N[oe]=x,K=oe):(N[K]=de,N[Q]=x,K=Q);else if(oe<q&&0>i(ie,x))N[K]=ie,N[oe]=x,K=oe;else break e}}return M}function i(N,M){var x=N.sortIndex-M.sortIndex;return x!==0?x:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,p=null,f=3,d=!1,v=!1,m=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var M=t(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=N)r(c),M.sortIndex=M.expirationTime,n(l,M);else break;M=t(c)}}function C(N){if(m=!1,y(N),!v)if(t(l)!==null)v=!0,G(E);else{var M=t(c);M!==null&&$(C,M.startTime-N)}}function E(N,M){v=!1,m&&(m=!1,h(R),R=-1),d=!0;var x=f;try{for(y(M),p=t(l);p!==null&&(!(p.expirationTime>M)||N&&!F());){var K=p.callback;if(typeof K=="function"){p.callback=null,f=p.priorityLevel;var q=K(p.expirationTime<=M);M=e.unstable_now(),typeof q=="function"?p.callback=q:p===t(l)&&r(l),y(M)}else r(l);p=t(l)}if(p!==null)var S=!0;else{var Q=t(c);Q!==null&&$(C,Q.startTime-M),S=!1}return S}finally{p=null,f=x,d=!1}}var P=!1,A=null,R=-1,L=5,O=-1;function F(){return!(e.unstable_now()-O<L)}function I(){if(A!==null){var N=e.unstable_now();O=N;var M=!0;try{M=A(!0,N)}finally{M?V():(P=!1,A=null)}}else P=!1}var V;if(typeof g=="function")V=function(){g(I)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,W=z.port2;z.port1.onmessage=I,V=function(){W.postMessage(null)}}else V=function(){b(I,0)};function G(N){A=N,P||(P=!0,V())}function $(N,M){R=b(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||d||(v=!0,G(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var x=f;f=M;try{return N()}finally{f=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var x=f;f=N;try{return M()}finally{f=x}},e.unstable_scheduleCallback=function(N,M,x){var K=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?K+x:K):x=K,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=x+q,N={id:u++,callback:M,priorityLevel:N,startTime:x,expirationTime:q,sortIndex:-1},x>K?(N.sortIndex=x,n(c,N),t(l)===null&&N===t(c)&&(m?(h(R),R=-1):m=!0,$(C,x-K))):(N.sortIndex=q,n(l,N),v||d||(v=!0,G(E))),N},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(N){var M=f;return function(){var x=f;f=M;try{return N.apply(this,arguments)}finally{f=x}}}})(xm);bm.exports=xm;var dx=bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=w,Sn=dx;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wm=new Set,Ro={};function $r(e,n){Mi(e,n),Mi(e+"Capture",n)}function Mi(e,n){for(Ro[e]=n,e=0;e<n.length;e++)wm.add(n[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=Object.prototype.hasOwnProperty,fx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gp={},yp={};function hx(e){return vc.call(yp,e)?!0:vc.call(gp,e)?!1:fx.test(e)?yp[e]=!0:(gp[e]=!0,!1)}function mx(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gx(e,n,t,r){if(n===null||typeof n>"u"||mx(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ze(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];_e[n]=new Ze(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wu=/[\-:]([a-z])/g;function Uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wu,Uu);_e[n]=new Ze(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wu,Uu);_e[n]=new Ze(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wu,Uu);_e[n]=new Ze(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vu(e,n,t,r){var i=_e.hasOwnProperty(n)?_e[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gx(n,t,i,r)&&(t=null),r||i===null?hx(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Mt=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),ri=Symbol.for("react.portal"),ii=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),km=Symbol.for("react.provider"),Sm=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),$u=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Cm=Symbol.for("react.offscreen"),vp=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=vp&&e[vp]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Tl;function fo(e){if(Tl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Tl=n&&n[1]||""}return`
`+Tl+e}var Nl=!1;function Rl(e,n){if(!e||Nl)return"";Nl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?fo(e):""}function yx(e){switch(e.tag){case 5:return fo(e.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ii:return"Fragment";case ri:return"Portal";case bc:return"Profiler";case Gu:return"StrictMode";case xc:return"Suspense";case wc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sm:return(e.displayName||"Context")+".Consumer";case km:return(e._context.displayName||"Context")+".Provider";case qu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $u:return n=e.displayName||null,n!==null?n:kc(e.type)||"Memo";case Gt:n=e._payload,e=e._init;try{return kc(e(n))}catch{}}return null}function vx(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(n);case 8:return n===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bx(e){var n=Pm(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vs(e){e._valueTracker||(e._valueTracker=bx(e))}function Em(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Pm(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sc(e,n){var t=n.checked;return Se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function bp(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=pr(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Am(e,n){n=n.checked,n!=null&&Vu(e,"checked",n,!1)}function Cc(e,n){Am(e,n);var t=pr(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Pc(e,n.type,t):n.hasOwnProperty("defaultValue")&&Pc(e,n.type,pr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xp(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Pc(e,n,t){(n!=="number"||oa(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ho=Array.isArray;function mi(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+pr(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ec(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return Se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wp(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(ho(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pr(t)}}function Tm(e,n){var t=pr(n.value),r=pr(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function kp(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Nm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ac(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Nm(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,Rm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Io(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xx=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(e){xx.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),yo[n]=yo[e]})});function Im(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||yo.hasOwnProperty(e)&&yo[e]?(""+n).trim():n+"px"}function Dm(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Im(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var wx=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tc(e,n){if(n){if(wx[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function Nc(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ic=null,gi=null,yi=null;function Sp(e){if(e=ss(e)){if(typeof Ic!="function")throw Error(_(280));var n=e.stateNode;n&&(n=Qa(n),Ic(e.stateNode,e.type,n))}}function Mm(e){gi?yi?yi.push(e):yi=[e]:gi=e}function Om(){if(gi){var e=gi,n=yi;if(yi=gi=null,Sp(e),n)for(e=0;e<n.length;e++)Sp(n[e])}}function Lm(e,n){return e(n)}function Fm(){}var Il=!1;function zm(e,n,t){if(Il)return e(n,t);Il=!0;try{return Lm(e,n,t)}finally{Il=!1,(gi!==null||yi!==null)&&(Fm(),Om())}}function Do(e,n){var t=e.stateNode;if(t===null)return null;var r=Qa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var Dc=!1;if(At)try{var no={};Object.defineProperty(no,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Dc=!1}function kx(e,n,t,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var vo=!1,sa=null,aa=!1,Mc=null,Sx={onError:function(e){vo=!0,sa=e}};function Cx(e,n,t,r,i,o,s,a,l){vo=!1,sa=null,kx.apply(Sx,arguments)}function Px(e,n,t,r,i,o,s,a,l){if(Cx.apply(this,arguments),vo){if(vo){var c=sa;vo=!1,sa=null}else throw Error(_(198));aa||(aa=!0,Mc=c)}}function Kr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Cp(e){if(Kr(e)!==e)throw Error(_(188))}function Ex(e){var n=e.alternate;if(!n){if(n=Kr(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Cp(i),e;if(o===r)return Cp(i),n;o=o.sibling}throw Error(_(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=o;break}if(a===r){s=!0,r=i,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,r=i;break}if(a===r){s=!0,r=o,t=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function jm(e){return e=Ex(e),e!==null?Hm(e):null}function Hm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Hm(e);if(n!==null)return n;e=e.sibling}return null}var Bm=Sn.unstable_scheduleCallback,Pp=Sn.unstable_cancelCallback,Ax=Sn.unstable_shouldYield,Tx=Sn.unstable_requestPaint,Ae=Sn.unstable_now,Nx=Sn.unstable_getCurrentPriorityLevel,Qu=Sn.unstable_ImmediatePriority,Wm=Sn.unstable_UserBlockingPriority,la=Sn.unstable_NormalPriority,Rx=Sn.unstable_LowPriority,Um=Sn.unstable_IdlePriority,Ga=null,ut=null;function Ix(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Ga,e,void 0,(e.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Ox,Dx=Math.log,Mx=Math.LN2;function Ox(e){return e>>>=0,e===0?32:31-(Dx(e)/Mx|0)|0}var xs=64,ws=4194304;function mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ca(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=mo(a):(o&=s,o!==0&&(r=mo(o)))}else s=t&~i,s!==0?r=mo(s):o!==0&&(r=mo(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-$n(n),i=1<<t,r|=e[t],n&=~i;return r}function Lx(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fx(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-$n(o),a=1<<s,l=i[s];l===-1?(!(a&t)||a&r)&&(i[s]=Lx(a,n)):l<=n&&(e.expiredLanes|=a),o&=~a}}function Oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vm(){var e=xs;return xs<<=1,!(xs&4194240)&&(xs=64),e}function Dl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function is(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$n(n),e[n]=t}function zx(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-$n(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Yu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-$n(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ue=0;function Gm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qm,Xu,$m,Km,Qm,Lc=!1,ks=[],rr=null,ir=null,or=null,Mo=new Map,Oo=new Map,$t=[],_x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(e,n){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function to(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ss(n),n!==null&&Xu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function jx(e,n,t,r,i){switch(n){case"focusin":return rr=to(rr,e,n,t,r,i),!0;case"dragenter":return ir=to(ir,e,n,t,r,i),!0;case"mouseover":return or=to(or,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Mo.set(o,to(Mo.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Oo.set(o,to(Oo.get(o)||null,e,n,t,r,i)),!0}return!1}function Ym(e){var n=Rr(e.target);if(n!==null){var t=Kr(n);if(t!==null){if(n=t.tag,n===13){if(n=_m(t),n!==null){e.blockedOn=n,Qm(e.priority,function(){$m(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Us(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Fc(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Rc=r,t.target.dispatchEvent(r),Rc=null}else return n=ss(t),n!==null&&Xu(n),e.blockedOn=t,!1;n.shift()}return!0}function Ap(e,n,t){Us(e)&&t.delete(n)}function Hx(){Lc=!1,rr!==null&&Us(rr)&&(rr=null),ir!==null&&Us(ir)&&(ir=null),or!==null&&Us(or)&&(or=null),Mo.forEach(Ap),Oo.forEach(Ap)}function ro(e,n){e.blockedOn===n&&(e.blockedOn=null,Lc||(Lc=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Hx)))}function Lo(e){function n(i){return ro(i,e)}if(0<ks.length){ro(ks[0],e);for(var t=1;t<ks.length;t++){var r=ks[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rr!==null&&ro(rr,e),ir!==null&&ro(ir,e),or!==null&&ro(or,e),Mo.forEach(n),Oo.forEach(n),t=0;t<$t.length;t++)r=$t[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(t=$t[0],t.blockedOn===null);)Ym(t),t.blockedOn===null&&$t.shift()}var vi=Mt.ReactCurrentBatchConfig,ua=!0;function Bx(e,n,t,r){var i=ue,o=vi.transition;vi.transition=null;try{ue=1,Ju(e,n,t,r)}finally{ue=i,vi.transition=o}}function Wx(e,n,t,r){var i=ue,o=vi.transition;vi.transition=null;try{ue=4,Ju(e,n,t,r)}finally{ue=i,vi.transition=o}}function Ju(e,n,t,r){if(ua){var i=Fc(e,n,t,r);if(i===null)Wl(e,n,r,da,t),Ep(e,r);else if(jx(i,e,n,t,r))r.stopPropagation();else if(Ep(e,r),n&4&&-1<_x.indexOf(e)){for(;i!==null;){var o=ss(i);if(o!==null&&qm(o),o=Fc(e,n,t,r),o===null&&Wl(e,n,r,da,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wl(e,n,r,null,t)}}var da=null;function Fc(e,n,t,r){if(da=null,e=Ku(r),e=Rr(e),e!==null)if(n=Kr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=_m(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return da=e,null}function Xm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nx()){case Qu:return 1;case Wm:return 4;case la:case Rx:return 16;case Um:return 536870912;default:return 16}default:return 16}}var er=null,Zu=null,Vs=null;function Jm(){if(Vs)return Vs;var e,n=Zu,t=n.length,r,i="value"in er?er.value:er.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return Vs=i.slice(e,1<r?1-r:void 0)}function Gs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function Tp(){return!1}function Pn(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ss:Tp,this.isPropagationStopped=Tp,this}return Se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),n}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=Pn(Vi),os=Se({},Vi,{view:0,detail:0}),Ux=Pn(os),Ml,Ol,io,qa=Se({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(Ml=e.screenX-io.screenX,Ol=e.screenY-io.screenY):Ol=Ml=0,io=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),Np=Pn(qa),Vx=Se({},qa,{dataTransfer:0}),Gx=Pn(Vx),qx=Se({},os,{relatedTarget:0}),Ll=Pn(qx),$x=Se({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),Kx=Pn($x),Qx=Se({},Vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yx=Pn(Qx),Xx=Se({},Vi,{data:0}),Rp=Pn(Xx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ew={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nw(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ew[e])?!!n[e]:!1}function nd(){return nw}var tw=Se({},os,{key:function(e){if(e.key){var n=Jx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(e){return e.type==="keypress"?Gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rw=Pn(tw),iw=Se({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=Pn(iw),ow=Se({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),sw=Pn(ow),aw=Se({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),lw=Pn(aw),cw=Se({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uw=Pn(cw),dw=[9,13,27,32],td=At&&"CompositionEvent"in window,bo=null;At&&"documentMode"in document&&(bo=document.documentMode);var pw=At&&"TextEvent"in window&&!bo,Zm=At&&(!td||bo&&8<bo&&11>=bo),Dp=" ",Mp=!1;function eg(e,n){switch(e){case"keyup":return dw.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oi=!1;function fw(e,n){switch(e){case"compositionend":return ng(n);case"keypress":return n.which!==32?null:(Mp=!0,Dp);case"textInput":return e=n.data,e===Dp&&Mp?null:e;default:return null}}function hw(e,n){if(oi)return e==="compositionend"||!td&&eg(e,n)?(e=Jm(),Vs=Zu=er=null,oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zm&&n.locale!=="ko"?null:n.data;default:return null}}var mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mw[e.type]:n==="textarea"}function tg(e,n,t,r){Mm(r),n=pa(n,"onChange"),0<n.length&&(t=new ed("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var xo=null,Fo=null;function gw(e){fg(e,0)}function $a(e){var n=li(e);if(Em(n))return e}function yw(e,n){if(e==="change")return n}var rg=!1;if(At){var Fl;if(At){var zl="oninput"in document;if(!zl){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),zl=typeof Lp.oninput=="function"}Fl=zl}else Fl=!1;rg=Fl&&(!document.documentMode||9<document.documentMode)}function Fp(){xo&&(xo.detachEvent("onpropertychange",ig),Fo=xo=null)}function ig(e){if(e.propertyName==="value"&&$a(Fo)){var n=[];tg(n,Fo,e,Ku(e)),zm(gw,n)}}function vw(e,n,t){e==="focusin"?(Fp(),xo=n,Fo=t,xo.attachEvent("onpropertychange",ig)):e==="focusout"&&Fp()}function bw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $a(Fo)}function xw(e,n){if(e==="click")return $a(n)}function ww(e,n){if(e==="input"||e==="change")return $a(n)}function kw(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:kw;function zo(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!vc.call(n,i)||!Qn(e[i],n[i]))return!1}return!0}function zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,n){var t=zp(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zp(t)}}function og(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?og(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function sg(){for(var e=window,n=oa();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=oa(e.document)}return n}function rd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Sw(e){var n=sg(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&og(t.ownerDocument.documentElement,t)){if(r!==null&&rd(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=_p(t,o);var s=_p(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cw=At&&"documentMode"in document&&11>=document.documentMode,si=null,zc=null,wo=null,_c=!1;function jp(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_c||si==null||si!==oa(r)||(r=si,"selectionStart"in r&&rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&zo(wo,r)||(wo=r,r=pa(zc,"onSelect"),0<r.length&&(n=new ed("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=si)))}function Cs(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ai={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},_l={},ag={};At&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function Ka(e){if(_l[e])return _l[e];if(!ai[e])return e;var n=ai[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ag)return _l[e]=n[t];return e}var lg=Ka("animationend"),cg=Ka("animationiteration"),ug=Ka("animationstart"),dg=Ka("transitionend"),pg=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,n){pg.set(e,n),$r(n,[e])}for(var jl=0;jl<Hp.length;jl++){var Hl=Hp[jl],Pw=Hl.toLowerCase(),Ew=Hl[0].toUpperCase()+Hl.slice(1);vr(Pw,"on"+Ew)}vr(lg,"onAnimationEnd");vr(cg,"onAnimationIteration");vr(ug,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(dg,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Bp(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Px(r,n,void 0,e),e.currentTarget=null}function fg(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Bp(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Bp(i,a,c),o=l}}}if(aa)throw e=Mc,aa=!1,Mc=null,e}function ye(e,n){var t=n[Uc];t===void 0&&(t=n[Uc]=new Set);var r=e+"__bubble";t.has(r)||(hg(n,e,2,!1),t.add(r))}function Bl(e,n,t){var r=0;n&&(r|=4),hg(t,e,r,n)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[Ps]){e[Ps]=!0,wm.forEach(function(t){t!=="selectionchange"&&(Aw.has(t)||Bl(t,!1,e),Bl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ps]||(n[Ps]=!0,Bl("selectionchange",!1,n))}}function hg(e,n,t,r){switch(Xm(n)){case 1:var i=Bx;break;case 4:i=Wx;break;default:i=Ju}t=i.bind(null,n,t,e),i=void 0,!Dc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Wl(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Rr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}zm(function(){var c=o,u=Ku(t),p=[];e:{var f=pg.get(e);if(f!==void 0){var d=ed,v=e;switch(e){case"keypress":if(Gs(t)===0)break e;case"keydown":case"keyup":d=rw;break;case"focusin":v="focus",d=Ll;break;case"focusout":v="blur",d=Ll;break;case"beforeblur":case"afterblur":d=Ll;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=sw;break;case lg:case cg:case ug:d=Kx;break;case dg:d=lw;break;case"scroll":d=Ux;break;case"wheel":d=uw;break;case"copy":case"cut":case"paste":d=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Ip}var m=(n&4)!==0,b=!m&&e==="scroll",h=m?f!==null?f+"Capture":null:f;m=[];for(var g=c,y;g!==null;){y=g;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,h!==null&&(C=Do(g,h),C!=null&&m.push(jo(g,C,y)))),b)break;g=g.return}0<m.length&&(f=new d(f,v,null,t,u),p.push({event:f,listeners:m}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",f&&t!==Rc&&(v=t.relatedTarget||t.fromElement)&&(Rr(v)||v[Tt]))break e;if((d||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,d?(v=t.relatedTarget||t.toElement,d=c,v=v?Rr(v):null,v!==null&&(b=Kr(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(d=null,v=c),d!==v)){if(m=Np,C="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(m=Ip,C="onPointerLeave",h="onPointerEnter",g="pointer"),b=d==null?f:li(d),y=v==null?f:li(v),f=new m(C,g+"leave",d,t,u),f.target=b,f.relatedTarget=y,C=null,Rr(u)===c&&(m=new m(h,g+"enter",v,t,u),m.target=y,m.relatedTarget=b,C=m),b=C,d&&v)n:{for(m=d,h=v,g=0,y=m;y;y=ei(y))g++;for(y=0,C=h;C;C=ei(C))y++;for(;0<g-y;)m=ei(m),g--;for(;0<y-g;)h=ei(h),y--;for(;g--;){if(m===h||h!==null&&m===h.alternate)break n;m=ei(m),h=ei(h)}m=null}else m=null;d!==null&&Wp(p,f,d,m,!1),v!==null&&b!==null&&Wp(p,b,v,m,!0)}}e:{if(f=c?li(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var E=yw;else if(Op(f))if(rg)E=ww;else{E=bw;var P=vw}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=xw);if(E&&(E=E(e,c))){tg(p,E,t,u);break e}P&&P(e,f,c),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&Pc(f,"number",f.value)}switch(P=c?li(c):window,e){case"focusin":(Op(P)||P.contentEditable==="true")&&(si=P,zc=c,wo=null);break;case"focusout":wo=zc=si=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,jp(p,t,u);break;case"selectionchange":if(Cw)break;case"keydown":case"keyup":jp(p,t,u)}var A;if(td)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else oi?eg(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Zm&&t.locale!=="ko"&&(oi||R!=="onCompositionStart"?R==="onCompositionEnd"&&oi&&(A=Jm()):(er=u,Zu="value"in er?er.value:er.textContent,oi=!0)),P=pa(c,R),0<P.length&&(R=new Rp(R,e,null,t,u),p.push({event:R,listeners:P}),A?R.data=A:(A=ng(t),A!==null&&(R.data=A)))),(A=pw?fw(e,t):hw(e,t))&&(c=pa(c,"onBeforeInput"),0<c.length&&(u=new Rp("onBeforeInput","beforeinput",null,t,u),p.push({event:u,listeners:c}),u.data=A))}fg(p,n)})}function jo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function pa(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Do(e,t),o!=null&&r.unshift(jo(e,o,i)),o=Do(e,n),o!=null&&r.push(jo(e,o,i))),e=e.return}return r}function ei(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wp(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Do(t,o),l!=null&&s.unshift(jo(t,l,a))):i||(l=Do(t,o),l!=null&&s.push(jo(t,l,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Tw=/\r\n?/g,Nw=/\u0000|\uFFFD/g;function Up(e){return(typeof e=="string"?e:""+e).replace(Tw,`
`).replace(Nw,"")}function Es(e,n,t){if(n=Up(n),Up(e)!==n&&t)throw Error(_(425))}function fa(){}var jc=null,Hc=null;function Bc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,Rw=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(e){return Vp.resolve(null).then(e).catch(Dw)}:Wc;function Dw(e){setTimeout(function(){throw e})}function Ul(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Lo(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Lo(n)}function sr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Gp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Gi=Math.random().toString(36).slice(2),at="__reactFiber$"+Gi,Ho="__reactProps$"+Gi,Tt="__reactContainer$"+Gi,Uc="__reactEvents$"+Gi,Mw="__reactListeners$"+Gi,Ow="__reactHandles$"+Gi;function Rr(e){var n=e[at];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Tt]||t[at]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Gp(e);e!==null;){if(t=e[at])return t;e=Gp(e)}return n}e=t,t=e.parentNode}return null}function ss(e){return e=e[at]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function li(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Qa(e){return e[Ho]||null}var Vc=[],ci=-1;function br(e){return{current:e}}function ve(e){0>ci||(e.current=Vc[ci],Vc[ci]=null,ci--)}function he(e,n){ci++,Vc[ci]=e.current,e.current=n}var fr={},Ve=br(fr),sn=br(!1),Br=fr;function Oi(e,n){var t=e.type.contextTypes;if(!t)return fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function an(e){return e=e.childContextTypes,e!=null}function ha(){ve(sn),ve(Ve)}function qp(e,n,t){if(Ve.current!==fr)throw Error(_(168));he(Ve,n),he(sn,t)}function mg(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(_(108,vx(e)||"Unknown",i));return Se({},t,r)}function ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Br=Ve.current,he(Ve,e),he(sn,sn.current),!0}function $p(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=mg(e,n,Br),r.__reactInternalMemoizedMergedChildContext=e,ve(sn),ve(Ve),he(Ve,e)):ve(sn),he(sn,t)}var kt=null,Ya=!1,Vl=!1;function gg(e){kt===null?kt=[e]:kt.push(e)}function Lw(e){Ya=!0,gg(e)}function xr(){if(!Vl&&kt!==null){Vl=!0;var e=0,n=ue;try{var t=kt;for(ue=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}kt=null,Ya=!1}catch(i){throw kt!==null&&(kt=kt.slice(e+1)),Bm(Qu,xr),i}finally{ue=n,Vl=!1}}return null}var ui=[],di=0,ga=null,ya=0,Tn=[],Nn=0,Wr=null,Ct=1,Pt="";function Ar(e,n){ui[di++]=ya,ui[di++]=ga,ga=e,ya=n}function yg(e,n,t){Tn[Nn++]=Ct,Tn[Nn++]=Pt,Tn[Nn++]=Wr,Wr=e;var r=Ct;e=Pt;var i=32-$n(r)-1;r&=~(1<<i),t+=1;var o=32-$n(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ct=1<<32-$n(n)+i|t<<i|r,Pt=o+e}else Ct=1<<o|t<<i|r,Pt=e}function id(e){e.return!==null&&(Ar(e,1),yg(e,1,0))}function od(e){for(;e===ga;)ga=ui[--di],ui[di]=null,ya=ui[--di],ui[di]=null;for(;e===Wr;)Wr=Tn[--Nn],Tn[Nn]=null,Pt=Tn[--Nn],Tn[Nn]=null,Ct=Tn[--Nn],Tn[Nn]=null}var wn=null,bn=null,xe=!1,qn=null;function vg(e,n){var t=In(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Kp(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,wn=e,bn=sr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,wn=e,bn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Wr!==null?{id:Ct,overflow:Pt}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=In(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,wn=e,bn=null,!0):!1;default:return!1}}function Gc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qc(e){if(xe){var n=bn;if(n){var t=n;if(!Kp(e,n)){if(Gc(e))throw Error(_(418));n=sr(t.nextSibling);var r=wn;n&&Kp(e,n)?vg(r,t):(e.flags=e.flags&-4097|2,xe=!1,wn=e)}}else{if(Gc(e))throw Error(_(418));e.flags=e.flags&-4097|2,xe=!1,wn=e}}}function Qp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wn=e}function As(e){if(e!==wn)return!1;if(!xe)return Qp(e),xe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Bc(e.type,e.memoizedProps)),n&&(n=bn)){if(Gc(e))throw bg(),Error(_(418));for(;n;)vg(e,n),n=sr(n.nextSibling)}if(Qp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){bn=sr(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}bn=null}}else bn=wn?sr(e.stateNode.nextSibling):null;return!0}function bg(){for(var e=bn;e;)e=sr(e.nextSibling)}function Li(){bn=wn=null,xe=!1}function sd(e){qn===null?qn=[e]:qn.push(e)}var Fw=Mt.ReactCurrentBatchConfig;function oo(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function Ts(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Yp(e){var n=e._init;return n(e._payload)}function xg(e){function n(h,g){if(e){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function t(h,g){if(!e)return null;for(;g!==null;)n(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=ur(h,g),h.index=0,h.sibling=null,h}function o(h,g,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,g,y,C){return g===null||g.tag!==6?(g=Xl(y,h.mode,C),g.return=h,g):(g=i(g,y),g.return=h,g)}function l(h,g,y,C){var E=y.type;return E===ii?u(h,g,y.props.children,C,y.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gt&&Yp(E)===g.type)?(C=i(g,y.props),C.ref=oo(h,g,y),C.return=h,C):(C=Js(y.type,y.key,y.props,null,h.mode,C),C.ref=oo(h,g,y),C.return=h,C)}function c(h,g,y,C){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Jl(y,h.mode,C),g.return=h,g):(g=i(g,y.children||[]),g.return=h,g)}function u(h,g,y,C,E){return g===null||g.tag!==7?(g=Hr(y,h.mode,C,E),g.return=h,g):(g=i(g,y),g.return=h,g)}function p(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Xl(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ys:return y=Js(g.type,g.key,g.props,null,h.mode,y),y.ref=oo(h,null,g),y.return=h,y;case ri:return g=Jl(g,h.mode,y),g.return=h,g;case Gt:var C=g._init;return p(h,C(g._payload),y)}if(ho(g)||eo(g))return g=Hr(g,h.mode,y,null),g.return=h,g;Ts(h,g)}return null}function f(h,g,y,C){var E=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(h,g,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ys:return y.key===E?l(h,g,y,C):null;case ri:return y.key===E?c(h,g,y,C):null;case Gt:return E=y._init,f(h,g,E(y._payload),C)}if(ho(y)||eo(y))return E!==null?null:u(h,g,y,C,null);Ts(h,y)}return null}function d(h,g,y,C,E){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(y)||null,a(g,h,""+C,E);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ys:return h=h.get(C.key===null?y:C.key)||null,l(g,h,C,E);case ri:return h=h.get(C.key===null?y:C.key)||null,c(g,h,C,E);case Gt:var P=C._init;return d(h,g,y,P(C._payload),E)}if(ho(C)||eo(C))return h=h.get(y)||null,u(g,h,C,E,null);Ts(g,C)}return null}function v(h,g,y,C){for(var E=null,P=null,A=g,R=g=0,L=null;A!==null&&R<y.length;R++){A.index>R?(L=A,A=null):L=A.sibling;var O=f(h,A,y[R],C);if(O===null){A===null&&(A=L);break}e&&A&&O.alternate===null&&n(h,A),g=o(O,g,R),P===null?E=O:P.sibling=O,P=O,A=L}if(R===y.length)return t(h,A),xe&&Ar(h,R),E;if(A===null){for(;R<y.length;R++)A=p(h,y[R],C),A!==null&&(g=o(A,g,R),P===null?E=A:P.sibling=A,P=A);return xe&&Ar(h,R),E}for(A=r(h,A);R<y.length;R++)L=d(A,h,R,y[R],C),L!==null&&(e&&L.alternate!==null&&A.delete(L.key===null?R:L.key),g=o(L,g,R),P===null?E=L:P.sibling=L,P=L);return e&&A.forEach(function(F){return n(h,F)}),xe&&Ar(h,R),E}function m(h,g,y,C){var E=eo(y);if(typeof E!="function")throw Error(_(150));if(y=E.call(y),y==null)throw Error(_(151));for(var P=E=null,A=g,R=g=0,L=null,O=y.next();A!==null&&!O.done;R++,O=y.next()){A.index>R?(L=A,A=null):L=A.sibling;var F=f(h,A,O.value,C);if(F===null){A===null&&(A=L);break}e&&A&&F.alternate===null&&n(h,A),g=o(F,g,R),P===null?E=F:P.sibling=F,P=F,A=L}if(O.done)return t(h,A),xe&&Ar(h,R),E;if(A===null){for(;!O.done;R++,O=y.next())O=p(h,O.value,C),O!==null&&(g=o(O,g,R),P===null?E=O:P.sibling=O,P=O);return xe&&Ar(h,R),E}for(A=r(h,A);!O.done;R++,O=y.next())O=d(A,h,R,O.value,C),O!==null&&(e&&O.alternate!==null&&A.delete(O.key===null?R:O.key),g=o(O,g,R),P===null?E=O:P.sibling=O,P=O);return e&&A.forEach(function(I){return n(h,I)}),xe&&Ar(h,R),E}function b(h,g,y,C){if(typeof y=="object"&&y!==null&&y.type===ii&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ys:e:{for(var E=y.key,P=g;P!==null;){if(P.key===E){if(E=y.type,E===ii){if(P.tag===7){t(h,P.sibling),g=i(P,y.props.children),g.return=h,h=g;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gt&&Yp(E)===P.type){t(h,P.sibling),g=i(P,y.props),g.ref=oo(h,P,y),g.return=h,h=g;break e}t(h,P);break}else n(h,P);P=P.sibling}y.type===ii?(g=Hr(y.props.children,h.mode,C,y.key),g.return=h,h=g):(C=Js(y.type,y.key,y.props,null,h.mode,C),C.ref=oo(h,g,y),C.return=h,h=C)}return s(h);case ri:e:{for(P=y.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(h,g.sibling),g=i(g,y.children||[]),g.return=h,h=g;break e}else{t(h,g);break}else n(h,g);g=g.sibling}g=Jl(y,h.mode,C),g.return=h,h=g}return s(h);case Gt:return P=y._init,b(h,g,P(y._payload),C)}if(ho(y))return v(h,g,y,C);if(eo(y))return m(h,g,y,C);Ts(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(h,g.sibling),g=i(g,y),g.return=h,h=g):(t(h,g),g=Xl(y,h.mode,C),g.return=h,h=g),s(h)):t(h,g)}return b}var Fi=xg(!0),wg=xg(!1),va=br(null),ba=null,pi=null,ad=null;function ld(){ad=pi=ba=null}function cd(e){var n=va.current;ve(va),e._currentValue=n}function $c(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function bi(e,n){ba=e,ad=pi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(on=!0),e.firstContext=null)}function Mn(e){var n=e._currentValue;if(ad!==e)if(e={context:e,memoizedValue:n,next:null},pi===null){if(ba===null)throw Error(_(308));pi=e,ba.dependencies={lanes:0,firstContext:e}}else pi=pi.next=e;return n}var Ir=null;function ud(e){Ir===null?Ir=[e]:Ir.push(e)}function kg(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ud(n)):(t.next=i.next,i.next=t),n.interleaved=t,Nt(e,r)}function Nt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var qt=!1;function dd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ar(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Nt(e,t)}return i=r.interleaved,i===null?(n.next=n,ud(r)):(n.next=i.next,i.next=n),r.interleaved=n,Nt(e,t)}function qs(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yu(e,t)}}function Xp(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function xa(e,n,t,r){var i=e.updateQueue;qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,d=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,m=a;switch(f=n,d=t,m.tag){case 1:if(v=m.payload,typeof v=="function"){p=v.call(d,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,f=typeof v=="function"?v.call(d,p,f):v,f==null)break e;p=Se({},p,f);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else d={eventTime:d,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=d,l=p):u=u.next=d,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Vr|=s,e.lanes=s,e.memoizedState=p}}function Jp(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var as={},dt=br(as),Bo=br(as),Wo=br(as);function Dr(e){if(e===as)throw Error(_(174));return e}function pd(e,n){switch(he(Wo,n),he(Bo,e),he(dt,as),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ac(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ac(n,e)}ve(dt),he(dt,n)}function zi(){ve(dt),ve(Bo),ve(Wo)}function Cg(e){Dr(Wo.current);var n=Dr(dt.current),t=Ac(n,e.type);n!==t&&(he(Bo,e),he(dt,t))}function fd(e){Bo.current===e&&(ve(dt),ve(Bo))}var we=br(0);function wa(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gl=[];function hd(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var $s=Mt.ReactCurrentDispatcher,ql=Mt.ReactCurrentBatchConfig,Ur=0,ke=null,Ie=null,Oe=null,ka=!1,ko=!1,Uo=0,zw=0;function He(){throw Error(_(321))}function md(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Qn(e[t],n[t]))return!1;return!0}function gd(e,n,t,r,i,o){if(Ur=o,ke=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$s.current=e===null||e.memoizedState===null?Bw:Ww,e=t(r,i),ko){o=0;do{if(ko=!1,Uo=0,25<=o)throw Error(_(301));o+=1,Oe=Ie=null,n.updateQueue=null,$s.current=Uw,e=t(r,i)}while(ko)}if($s.current=Sa,n=Ie!==null&&Ie.next!==null,Ur=0,Oe=Ie=ke=null,ka=!1,n)throw Error(_(300));return e}function yd(){var e=Uo!==0;return Uo=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ke.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function On(){if(Ie===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=Oe===null?ke.memoizedState:Oe.next;if(n!==null)Oe=n,Ie=e;else{if(e===null)throw Error(_(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Oe===null?ke.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Vo(e,n){return typeof n=="function"?n(e):n}function $l(e){var n=On(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Ur&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,ke.lanes|=u,Vr|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Qn(r,n.memoizedState)||(on=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Vr|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Kl(e){var n=On(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Qn(o,n.memoizedState)||(on=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Pg(){}function Eg(e,n){var t=ke,r=On(),i=n(),o=!Qn(r.memoizedState,i);if(o&&(r.memoizedState=i,on=!0),r=r.queue,vd(Ng.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Oe!==null&&Oe.memoizedState.tag&1){if(t.flags|=2048,Go(9,Tg.bind(null,t,r,i,n),void 0,null),Le===null)throw Error(_(349));Ur&30||Ag(t,n,i)}return i}function Ag(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ke.updateQueue,n===null?(n={lastEffect:null,stores:null},ke.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Tg(e,n,t,r){n.value=t,n.getSnapshot=r,Rg(n)&&Ig(e)}function Ng(e,n,t){return t(function(){Rg(n)&&Ig(e)})}function Rg(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Qn(e,t)}catch{return!0}}function Ig(e){var n=Nt(e,1);n!==null&&Kn(n,e,1,-1)}function Zp(e){var n=tt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},n.queue=e,e=e.dispatch=Hw.bind(null,ke,e),[n.memoizedState,e]}function Go(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ke.updateQueue,n===null?(n={lastEffect:null,stores:null},ke.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Dg(){return On().memoizedState}function Ks(e,n,t,r){var i=tt();ke.flags|=e,i.memoizedState=Go(1|n,t,void 0,r===void 0?null:r)}function Xa(e,n,t,r){var i=On();r=r===void 0?null:r;var o=void 0;if(Ie!==null){var s=Ie.memoizedState;if(o=s.destroy,r!==null&&md(r,s.deps)){i.memoizedState=Go(n,t,o,r);return}}ke.flags|=e,i.memoizedState=Go(1|n,t,o,r)}function ef(e,n){return Ks(8390656,8,e,n)}function vd(e,n){return Xa(2048,8,e,n)}function Mg(e,n){return Xa(4,2,e,n)}function Og(e,n){return Xa(4,4,e,n)}function Lg(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fg(e,n,t){return t=t!=null?t.concat([e]):null,Xa(4,4,Lg.bind(null,n,e),t)}function bd(){}function zg(e,n){var t=On();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&md(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function _g(e,n){var t=On();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&md(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function jg(e,n,t){return Ur&21?(Qn(t,n)||(t=Vm(),ke.lanes|=t,Vr|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,on=!0),e.memoizedState=t)}function _w(e,n){var t=ue;ue=t!==0&&4>t?t:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),n()}finally{ue=t,ql.transition=r}}function Hg(){return On().memoizedState}function jw(e,n,t){var r=cr(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Bg(e))Wg(n,t);else if(t=kg(e,n,t,r),t!==null){var i=Xe();Kn(t,e,r,i),Ug(t,n,r)}}function Hw(e,n,t){var r=cr(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bg(e))Wg(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,a=o(s,t);if(i.hasEagerState=!0,i.eagerState=a,Qn(a,s)){var l=n.interleaved;l===null?(i.next=i,ud(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=kg(e,n,i,r),t!==null&&(i=Xe(),Kn(t,e,r,i),Ug(t,n,r))}}function Bg(e){var n=e.alternate;return e===ke||n!==null&&n===ke}function Wg(e,n){ko=ka=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ug(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yu(e,t)}}var Sa={readContext:Mn,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Bw={readContext:Mn,useCallback:function(e,n){return tt().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:ef,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ks(4194308,4,Lg.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ks(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ks(4,2,e,n)},useMemo:function(e,n){var t=tt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=tt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=jw.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var n=tt();return e={current:e},n.memoizedState=e},useState:Zp,useDebugValue:bd,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=Zp(!1),n=e[0];return e=_w.bind(null,e[1]),tt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ke,i=tt();if(xe){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),Le===null)throw Error(_(349));Ur&30||Ag(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,ef(Ng.bind(null,r,o,e),[e]),r.flags|=2048,Go(9,Tg.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=tt(),n=Le.identifierPrefix;if(xe){var t=Pt,r=Ct;t=(r&~(1<<32-$n(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Uo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=zw++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ww={readContext:Mn,useCallback:zg,useContext:Mn,useEffect:vd,useImperativeHandle:Fg,useInsertionEffect:Mg,useLayoutEffect:Og,useMemo:_g,useReducer:$l,useRef:Dg,useState:function(){return $l(Vo)},useDebugValue:bd,useDeferredValue:function(e){var n=On();return jg(n,Ie.memoizedState,e)},useTransition:function(){var e=$l(Vo)[0],n=On().memoizedState;return[e,n]},useMutableSource:Pg,useSyncExternalStore:Eg,useId:Hg,unstable_isNewReconciler:!1},Uw={readContext:Mn,useCallback:zg,useContext:Mn,useEffect:vd,useImperativeHandle:Fg,useInsertionEffect:Mg,useLayoutEffect:Og,useMemo:_g,useReducer:Kl,useRef:Dg,useState:function(){return Kl(Vo)},useDebugValue:bd,useDeferredValue:function(e){var n=On();return Ie===null?n.memoizedState=e:jg(n,Ie.memoizedState,e)},useTransition:function(){var e=Kl(Vo)[0],n=On().memoizedState;return[e,n]},useMutableSource:Pg,useSyncExternalStore:Eg,useId:Hg,unstable_isNewReconciler:!1};function Bn(e,n){if(e&&e.defaultProps){n=Se({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Kc(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Se({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ja={isMounted:function(e){return(e=e._reactInternals)?Kr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Xe(),i=cr(e),o=Et(r,i);o.payload=n,t!=null&&(o.callback=t),n=ar(e,o,i),n!==null&&(Kn(n,e,i,r),qs(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Xe(),i=cr(e),o=Et(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=ar(e,o,i),n!==null&&(Kn(n,e,i,r),qs(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Xe(),r=cr(e),i=Et(t,r);i.tag=2,n!=null&&(i.callback=n),n=ar(e,i,r),n!==null&&(Kn(n,e,r,t),qs(n,e,r))}};function nf(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!zo(t,r)||!zo(i,o):!0}function Vg(e,n,t){var r=!1,i=fr,o=n.contextType;return typeof o=="object"&&o!==null?o=Mn(o):(i=an(n)?Br:Ve.current,r=n.contextTypes,o=(r=r!=null)?Oi(e,i):fr),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ja,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function tf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ja.enqueueReplaceState(n,n.state,null)}function Qc(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},dd(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Mn(o):(o=an(n)?Br:Ve.current,i.context=Oi(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Kc(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ja.enqueueReplaceState(i,i.state,null),xa(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _i(e,n){try{var t="",r=n;do t+=yx(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Ql(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Yc(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Vw=typeof WeakMap=="function"?WeakMap:Map;function Gg(e,n,t){t=Et(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Pa||(Pa=!0,su=r),Yc(e,n)},t}function qg(e,n,t){t=Et(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Yc(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Yc(e,n),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function rf(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Vw;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=i0.bind(null,e,n,t),n.then(e,e))}function of(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function sf(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Et(-1,1),n.tag=2,ar(t,n,1))),t.lanes|=1),e)}var Gw=Mt.ReactCurrentOwner,on=!1;function Qe(e,n,t,r){n.child=e===null?wg(n,null,t,r):Fi(n,e.child,t,r)}function af(e,n,t,r,i){t=t.render;var o=n.ref;return bi(n,i),r=gd(e,n,t,r,o,i),t=yd(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Rt(e,n,i)):(xe&&t&&id(n),n.flags|=1,Qe(e,n,r,i),n.child)}function lf(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Ad(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,$g(e,n,o,r,i)):(e=Js(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:zo,t(s,r)&&e.ref===n.ref)return Rt(e,n,i)}return n.flags|=1,e=ur(o,r),e.ref=n.ref,e.return=n,n.child=e}function $g(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(zo(o,r)&&e.ref===n.ref)if(on=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(on=!0);else return n.lanes=e.lanes,Rt(e,n,i)}return Xc(e,n,t,r,i)}function Kg(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(hi,yn),yn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,he(hi,yn),yn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,he(hi,yn),yn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,he(hi,yn),yn|=r;return Qe(e,n,i,t),n.child}function Qg(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Xc(e,n,t,r,i){var o=an(t)?Br:Ve.current;return o=Oi(n,o),bi(n,i),t=gd(e,n,t,r,o,i),r=yd(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Rt(e,n,i)):(xe&&r&&id(n),n.flags|=1,Qe(e,n,t,i),n.child)}function cf(e,n,t,r,i){if(an(t)){var o=!0;ma(n)}else o=!1;if(bi(n,i),n.stateNode===null)Qs(e,n),Vg(n,t,r),Qc(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var l=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=Mn(c):(c=an(t)?Br:Ve.current,c=Oi(n,c));var u=t.getDerivedStateFromProps,p=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&tf(n,s,r,c),qt=!1;var f=n.memoizedState;s.state=f,xa(n,r,s,i),l=n.memoizedState,a!==r||f!==l||sn.current||qt?(typeof u=="function"&&(Kc(n,t,u,r),l=n.memoizedState),(a=qt||nf(n,t,a,r,f,l,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Sg(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Bn(n.type,a),s.props=c,p=n.pendingProps,f=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=Mn(l):(l=an(t)?Br:Ve.current,l=Oi(n,l));var d=t.getDerivedStateFromProps;(u=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||f!==l)&&tf(n,s,r,l),qt=!1,f=n.memoizedState,s.state=f,xa(n,r,s,i);var v=n.memoizedState;a!==p||f!==v||sn.current||qt?(typeof d=="function"&&(Kc(n,t,d,r),v=n.memoizedState),(c=qt||nf(n,t,c,r,f,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Jc(e,n,t,r,o,i)}function Jc(e,n,t,r,i,o){Qg(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&$p(n,t,!1),Rt(e,n,o);r=n.stateNode,Gw.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=Fi(n,e.child,null,o),n.child=Fi(n,null,a,o)):Qe(e,n,a,o),n.memoizedState=r.state,i&&$p(n,t,!0),n.child}function Yg(e){var n=e.stateNode;n.pendingContext?qp(e,n.pendingContext,n.pendingContext!==n.context):n.context&&qp(e,n.context,!1),pd(e,n.containerInfo)}function uf(e,n,t,r,i){return Li(),sd(i),n.flags|=256,Qe(e,n,t,r),n.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xg(e,n,t){var r=n.pendingProps,i=we.current,o=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(we,i&1),e===null)return qc(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=nl(s,r,0,null),e=Hr(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=eu(t),n.memoizedState=Zc,e):xd(n,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qw(e,n,s,r,a,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ur(a,o):(o=Hr(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?eu(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=Zc,r}return o=e.child,e=o.sibling,r=ur(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function xd(e,n){return n=nl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ns(e,n,t,r){return r!==null&&sd(r),Fi(n,e.child,null,t),e=xd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qw(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=Ql(Error(_(422))),Ns(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=nl({mode:"visible",children:r.children},i,0,null),o=Hr(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Fi(n,e.child,null,s),n.child.memoizedState=eu(s),n.memoizedState=Zc,o);if(!(n.mode&1))return Ns(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=Ql(o,r,void 0),Ns(e,n,s,r)}if(a=(s&e.childLanes)!==0,on||a){if(r=Le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(e,i),Kn(r,e,i,-1))}return Ed(),r=Ql(Error(_(421))),Ns(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=o0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,bn=sr(i.nextSibling),wn=n,xe=!0,qn=null,e!==null&&(Tn[Nn++]=Ct,Tn[Nn++]=Pt,Tn[Nn++]=Wr,Ct=e.id,Pt=e.overflow,Wr=n),n=xd(n,r.children),n.flags|=4096,n)}function df(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),$c(e.return,n,t)}function Yl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Jg(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(Qe(e,n,r.children,t),r=we.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,t,n);else if(e.tag===19)df(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(we,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&wa(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Yl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&wa(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Yl(n,!0,t,null,o);break;case"together":Yl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Qs(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vr|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=ur(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ur(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function $w(e,n,t){switch(n.tag){case 3:Yg(n),Li();break;case 5:Cg(n);break;case 1:an(n.type)&&ma(n);break;case 4:pd(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;he(va,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),n.flags|=128,null):t&n.child.childLanes?Xg(e,n,t):(he(we,we.current&1),e=Rt(e,n,t),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Jg(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return n.lanes=0,Kg(e,n,t)}return Rt(e,n,t)}var Zg,nu,ey,ny;Zg=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};nu=function(){};ey=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Dr(dt.current);var o=null;switch(t){case"input":i=Sc(e,i),r=Sc(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=Ec(e,i),r=Ec(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fa)}Tc(t,r);var s;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ro.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(o||(o=[]),o.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ye("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};ny=function(e,n,t,r){t!==r&&(n.flags|=4)};function so(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Kw(e,n,t){var r=n.pendingProps;switch(od(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(n),null;case 1:return an(n.type)&&ha(),Be(n),null;case 3:return r=n.stateNode,zi(),ve(sn),ve(Ve),hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(As(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,qn!==null&&(cu(qn),qn=null))),nu(e,n),Be(n),null;case 5:fd(n);var i=Dr(Wo.current);if(t=n.type,e!==null&&n.stateNode!=null)ey(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return Be(n),null}if(e=Dr(dt.current),As(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[at]=n,r[Ho]=o,e=(n.mode&1)!==0,t){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<go.length;i++)ye(go[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":bp(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":wp(r,o),ye("invalid",r)}Tc(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Es(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Es(r.textContent,a,e),i=["children",""+a]):Ro.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ye("scroll",r)}switch(t){case"input":vs(r),xp(r,o,!0);break;case"textarea":vs(r),kp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fa)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nm(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[at]=n,e[Ho]=r,Zg(e,n,!1,!1),n.stateNode=e;e:{switch(s=Nc(t,r),t){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<go.length;i++)ye(go[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":bp(e,r),i=Sc(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ye("invalid",e);break;case"textarea":wp(e,r),i=Ec(e,r),ye("invalid",e);break;default:i=r}Tc(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Dm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rm(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Io(e,l):typeof l=="number"&&Io(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ro.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ye("scroll",e):l!=null&&Vu(e,o,l,s))}switch(t){case"input":vs(e),xp(e,r,!1);break;case"textarea":vs(e),kp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mi(e,!!r.multiple,o,!1):r.defaultValue!=null&&mi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fa)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Be(n),null;case 6:if(e&&n.stateNode!=null)ny(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=Dr(Wo.current),Dr(dt.current),As(n)){if(r=n.stateNode,t=n.memoizedProps,r[at]=n,(o=r.nodeValue!==t)&&(e=wn,e!==null))switch(e.tag){case 3:Es(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Es(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[at]=n,n.stateNode=r}return Be(n),null;case 13:if(ve(we),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&bn!==null&&n.mode&1&&!(n.flags&128))bg(),Li(),n.flags|=98560,o=!1;else if(o=As(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[at]=n}else Li(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Be(n),o=!1}else qn!==null&&(cu(qn),qn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||we.current&1?Me===0&&(Me=3):Ed())),n.updateQueue!==null&&(n.flags|=4),Be(n),null);case 4:return zi(),nu(e,n),e===null&&_o(n.stateNode.containerInfo),Be(n),null;case 10:return cd(n.type._context),Be(n),null;case 17:return an(n.type)&&ha(),Be(n),null;case 19:if(ve(we),o=n.memoizedState,o===null)return Be(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)so(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=wa(e),s!==null){for(n.flags|=128,so(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return he(we,we.current&1|2),n.child}e=e.sibling}o.tail!==null&&Ae()>ji&&(n.flags|=128,r=!0,so(o,!1),n.lanes=4194304)}else{if(!r)if(e=wa(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),so(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!xe)return Be(n),null}else 2*Ae()-o.renderingStartTime>ji&&t!==1073741824&&(n.flags|=128,r=!0,so(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Ae(),n.sibling=null,t=we.current,he(we,r?t&1|2:t&1),n):(Be(n),null);case 22:case 23:return Pd(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?yn&1073741824&&(Be(n),n.subtreeFlags&6&&(n.flags|=8192)):Be(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function Qw(e,n){switch(od(n),n.tag){case 1:return an(n.type)&&ha(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zi(),ve(sn),ve(Ve),hd(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return fd(n),null;case 13:if(ve(we),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));Li()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ve(we),null;case 4:return zi(),null;case 10:return cd(n.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Rs=!1,Ue=!1,Yw=typeof WeakSet=="function"?WeakSet:Set,U=null;function fi(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Pe(e,n,r)}else t.current=null}function tu(e,n,t){try{t()}catch(r){Pe(e,n,r)}}var pf=!1;function Xw(e,n){if(jc=ua,e=sg(),rd(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,l=-1,c=0,u=0,p=e,f=null;n:for(;;){for(var d;p!==t||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(d=p.firstChild)!==null;)f=p,p=d;for(;;){if(p===e)break n;if(f===t&&++c===i&&(a=s),f===o&&++u===r&&(l=s),(d=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=d}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Hc={focusedElem:e,selectionRange:t},ua=!1,U=n;U!==null;)if(n=U,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,U=e;else for(;U!==null;){n=U;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,b=v.memoizedState,h=n.stateNode,g=h.getSnapshotBeforeUpdate(n.elementType===n.type?m:Bn(n.type,m),b);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(C){Pe(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,U=e;break}U=n.return}return v=pf,pf=!1,v}function So(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tu(n,t,o)}i=i.next}while(i!==r)}}function Za(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ru(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ty(e){var n=e.alternate;n!==null&&(e.alternate=null,ty(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[at],delete n[Ho],delete n[Uc],delete n[Mw],delete n[Ow])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ry(e){return e.tag===5||e.tag===3||e.tag===4}function ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ry(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=fa));else if(r!==4&&(e=e.child,e!==null))for(iu(e,n,t),e=e.sibling;e!==null;)iu(e,n,t),e=e.sibling}function ou(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ou(e,n,t),e=e.sibling;e!==null;)ou(e,n,t),e=e.sibling}var Fe=null,Gn=!1;function Ht(e,n,t){for(t=t.child;t!==null;)iy(e,n,t),t=t.sibling}function iy(e,n,t){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Ga,t)}catch{}switch(t.tag){case 5:Ue||fi(t,n);case 6:var r=Fe,i=Gn;Fe=null,Ht(e,n,t),Fe=r,Gn=i,Fe!==null&&(Gn?(e=Fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Fe.removeChild(t.stateNode));break;case 18:Fe!==null&&(Gn?(e=Fe,t=t.stateNode,e.nodeType===8?Ul(e.parentNode,t):e.nodeType===1&&Ul(e,t),Lo(e)):Ul(Fe,t.stateNode));break;case 4:r=Fe,i=Gn,Fe=t.stateNode.containerInfo,Gn=!0,Ht(e,n,t),Fe=r,Gn=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&tu(t,n,s),i=i.next}while(i!==r)}Ht(e,n,t);break;case 1:if(!Ue&&(fi(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Pe(t,n,a)}Ht(e,n,t);break;case 21:Ht(e,n,t);break;case 22:t.mode&1?(Ue=(r=Ue)||t.memoizedState!==null,Ht(e,n,t),Ue=r):Ht(e,n,t);break;default:Ht(e,n,t)}}function hf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Yw),n.forEach(function(r){var i=s0.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function jn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,Gn=!1;break e;case 3:Fe=a.stateNode.containerInfo,Gn=!0;break e;case 4:Fe=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Fe===null)throw Error(_(160));iy(o,s,i),Fe=null,Gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Pe(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)oy(n,e),n=n.sibling}function oy(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jn(n,e),nt(e),r&4){try{So(3,e,e.return),Za(3,e)}catch(m){Pe(e,e.return,m)}try{So(5,e,e.return)}catch(m){Pe(e,e.return,m)}}break;case 1:jn(n,e),nt(e),r&512&&t!==null&&fi(t,t.return);break;case 5:if(jn(n,e),nt(e),r&512&&t!==null&&fi(t,t.return),e.flags&32){var i=e.stateNode;try{Io(i,"")}catch(m){Pe(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Am(i,o),Nc(a,s);var c=Nc(a,o);for(s=0;s<l.length;s+=2){var u=l[s],p=l[s+1];u==="style"?Dm(i,p):u==="dangerouslySetInnerHTML"?Rm(i,p):u==="children"?Io(i,p):Vu(i,u,p,c)}switch(a){case"input":Cc(i,o);break;case"textarea":Tm(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var d=o.value;d!=null?mi(i,!!o.multiple,d,!1):f!==!!o.multiple&&(o.defaultValue!=null?mi(i,!!o.multiple,o.defaultValue,!0):mi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ho]=o}catch(m){Pe(e,e.return,m)}}break;case 6:if(jn(n,e),nt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Pe(e,e.return,m)}}break;case 3:if(jn(n,e),nt(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(m){Pe(e,e.return,m)}break;case 4:jn(n,e),nt(e);break;case 13:jn(n,e),nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sd=Ae())),r&4&&hf(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(Ue=(c=Ue)||u,jn(n,e),Ue=c):jn(n,e),nt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(p=U=u;U!==null;){switch(f=U,d=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:fi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(m){Pe(r,t,m)}}break;case 5:fi(f,f.return);break;case 22:if(f.memoizedState!==null){gf(p);continue}}d!==null?(d.return=f,U=d):gf(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Im("display",s))}catch(m){Pe(e,e.return,m)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(m){Pe(e,e.return,m)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jn(n,e),nt(e),r&4&&hf(e);break;case 21:break;default:jn(n,e),nt(e)}}function nt(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ry(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Io(i,""),r.flags&=-33);var o=ff(e);ou(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ff(e);iu(e,a,s);break;default:throw Error(_(161))}}catch(l){Pe(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jw(e,n,t){U=e,sy(e)}function sy(e,n,t){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Rs;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=Rs;var c=Ue;if(Rs=s,(Ue=l)&&!c)for(U=i;U!==null;)s=U,l=s.child,s.tag===22&&s.memoizedState!==null?yf(i):l!==null?(l.return=s,U=l):yf(i);for(;o!==null;)U=o,sy(o),o=o.sibling;U=i,Rs=a,Ue=c}mf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):mf(e)}}function mf(e){for(;U!==null;){var n=U;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ue||Za(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ue)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Bn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Jp(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Jp(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ue||n.flags&512&&ru(n)}catch(f){Pe(n,n.return,f)}}if(n===e){U=null;break}if(t=n.sibling,t!==null){t.return=n.return,U=t;break}U=n.return}}function gf(e){for(;U!==null;){var n=U;if(n===e){U=null;break}var t=n.sibling;if(t!==null){t.return=n.return,U=t;break}U=n.return}}function yf(e){for(;U!==null;){var n=U;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Za(4,n)}catch(l){Pe(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(l){Pe(n,i,l)}}var o=n.return;try{ru(n)}catch(l){Pe(n,o,l)}break;case 5:var s=n.return;try{ru(n)}catch(l){Pe(n,s,l)}}}catch(l){Pe(n,n.return,l)}if(n===e){U=null;break}var a=n.sibling;if(a!==null){a.return=n.return,U=a;break}U=n.return}}var Zw=Math.ceil,Ca=Mt.ReactCurrentDispatcher,wd=Mt.ReactCurrentOwner,Dn=Mt.ReactCurrentBatchConfig,se=0,Le=null,Re=null,ze=0,yn=0,hi=br(0),Me=0,qo=null,Vr=0,el=0,kd=0,Co=null,rn=null,Sd=0,ji=1/0,wt=null,Pa=!1,su=null,lr=null,Is=!1,nr=null,Ea=0,Po=0,au=null,Ys=-1,Xs=0;function Xe(){return se&6?Ae():Ys!==-1?Ys:Ys=Ae()}function cr(e){return e.mode&1?se&2&&ze!==0?ze&-ze:Fw.transition!==null?(Xs===0&&(Xs=Vm()),Xs):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Xm(e.type)),e):1}function Kn(e,n,t,r){if(50<Po)throw Po=0,au=null,Error(_(185));is(e,t,r),(!(se&2)||e!==Le)&&(e===Le&&(!(se&2)&&(el|=t),Me===4&&Kt(e,ze)),ln(e,r),t===1&&se===0&&!(n.mode&1)&&(ji=Ae()+500,Ya&&xr()))}function ln(e,n){var t=e.callbackNode;Fx(e,n);var r=ca(e,e===Le?ze:0);if(r===0)t!==null&&Pp(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Pp(t),n===1)e.tag===0?Lw(vf.bind(null,e)):gg(vf.bind(null,e)),Iw(function(){!(se&6)&&xr()}),t=null;else{switch(Gm(r)){case 1:t=Qu;break;case 4:t=Wm;break;case 16:t=la;break;case 536870912:t=Um;break;default:t=la}t=hy(t,ay.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ay(e,n){if(Ys=-1,Xs=0,se&6)throw Error(_(327));var t=e.callbackNode;if(xi()&&e.callbackNode!==t)return null;var r=ca(e,e===Le?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Aa(e,r);else{n=r;var i=se;se|=2;var o=cy();(Le!==e||ze!==n)&&(wt=null,ji=Ae()+500,jr(e,n));do try{t0();break}catch(a){ly(e,a)}while(!0);ld(),Ca.current=o,se=i,Re!==null?n=0:(Le=null,ze=0,n=Me)}if(n!==0){if(n===2&&(i=Oc(e),i!==0&&(r=i,n=lu(e,i))),n===1)throw t=qo,jr(e,0),Kt(e,r),ln(e,Ae()),t;if(n===6)Kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!e0(i)&&(n=Aa(e,r),n===2&&(o=Oc(e),o!==0&&(r=o,n=lu(e,o))),n===1))throw t=qo,jr(e,0),Kt(e,r),ln(e,Ae()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:Tr(e,rn,wt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(n=Sd+500-Ae(),10<n)){if(ca(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wc(Tr.bind(null,e,rn,wt),n);break}Tr(e,rn,wt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-$n(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zw(r/1960))-r,10<r){e.timeoutHandle=Wc(Tr.bind(null,e,rn,wt),r);break}Tr(e,rn,wt);break;case 5:Tr(e,rn,wt);break;default:throw Error(_(329))}}}return ln(e,Ae()),e.callbackNode===t?ay.bind(null,e):null}function lu(e,n){var t=Co;return e.current.memoizedState.isDehydrated&&(jr(e,n).flags|=256),e=Aa(e,n),e!==2&&(n=rn,rn=t,n!==null&&cu(n)),e}function cu(e){rn===null?rn=e:rn.push.apply(rn,e)}function e0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Qn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Kt(e,n){for(n&=~kd,n&=~el,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-$n(n),r=1<<t;e[t]=-1,n&=~r}}function vf(e){if(se&6)throw Error(_(327));xi();var n=ca(e,0);if(!(n&1))return ln(e,Ae()),null;var t=Aa(e,n);if(e.tag!==0&&t===2){var r=Oc(e);r!==0&&(n=r,t=lu(e,r))}if(t===1)throw t=qo,jr(e,0),Kt(e,n),ln(e,Ae()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Tr(e,rn,wt),ln(e,Ae()),null}function Cd(e,n){var t=se;se|=1;try{return e(n)}finally{se=t,se===0&&(ji=Ae()+500,Ya&&xr())}}function Gr(e){nr!==null&&nr.tag===0&&!(se&6)&&xi();var n=se;se|=1;var t=Dn.transition,r=ue;try{if(Dn.transition=null,ue=1,e)return e()}finally{ue=r,Dn.transition=t,se=n,!(se&6)&&xr()}}function Pd(){yn=hi.current,ve(hi)}function jr(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Rw(t)),Re!==null)for(t=Re.return;t!==null;){var r=t;switch(od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ha();break;case 3:zi(),ve(sn),ve(Ve),hd();break;case 5:fd(r);break;case 4:zi();break;case 13:ve(we);break;case 19:ve(we);break;case 10:cd(r.type._context);break;case 22:case 23:Pd()}t=t.return}if(Le=e,Re=e=ur(e.current,null),ze=yn=n,Me=0,qo=null,kd=el=Vr=0,rn=Co=null,Ir!==null){for(n=0;n<Ir.length;n++)if(t=Ir[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}Ir=null}return e}function ly(e,n){do{var t=Re;try{if(ld(),$s.current=Sa,ka){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ka=!1}if(Ur=0,Oe=Ie=ke=null,ko=!1,Uo=0,wd.current=null,t===null||t.return===null){Me=1,qo=n,Re=null;break}e:{var o=e,s=t.return,a=t,l=n;if(n=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var d=of(s);if(d!==null){d.flags&=-257,sf(d,s,a,o,n),d.mode&1&&rf(o,c,n),n=d,l=c;var v=n.updateQueue;if(v===null){var m=new Set;m.add(l),n.updateQueue=m}else v.add(l);break e}else{if(!(n&1)){rf(o,c,n),Ed();break e}l=Error(_(426))}}else if(xe&&a.mode&1){var b=of(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),sf(b,s,a,o,n),sd(_i(l,a));break e}}o=l=_i(l,a),Me!==4&&(Me=2),Co===null?Co=[o]:Co.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var h=Gg(o,l,n);Xp(o,h);break e;case 1:a=l;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lr===null||!lr.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var C=qg(o,a,n);Xp(o,C);break e}}o=o.return}while(o!==null)}dy(t)}catch(E){n=E,Re===t&&t!==null&&(Re=t=t.return);continue}break}while(!0)}function cy(){var e=Ca.current;return Ca.current=Sa,e===null?Sa:e}function Ed(){(Me===0||Me===3||Me===2)&&(Me=4),Le===null||!(Vr&268435455)&&!(el&268435455)||Kt(Le,ze)}function Aa(e,n){var t=se;se|=2;var r=cy();(Le!==e||ze!==n)&&(wt=null,jr(e,n));do try{n0();break}catch(i){ly(e,i)}while(!0);if(ld(),se=t,Ca.current=r,Re!==null)throw Error(_(261));return Le=null,ze=0,Me}function n0(){for(;Re!==null;)uy(Re)}function t0(){for(;Re!==null&&!Ax();)uy(Re)}function uy(e){var n=fy(e.alternate,e,yn);e.memoizedProps=e.pendingProps,n===null?dy(e):Re=n,wd.current=null}function dy(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Qw(t,n),t!==null){t.flags&=32767,Re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Re=null;return}}else if(t=Kw(t,n,yn),t!==null){Re=t;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);Me===0&&(Me=5)}function Tr(e,n,t){var r=ue,i=Dn.transition;try{Dn.transition=null,ue=1,r0(e,n,t,r)}finally{Dn.transition=i,ue=r}return null}function r0(e,n,t,r){do xi();while(nr!==null);if(se&6)throw Error(_(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(zx(e,o),e===Le&&(Re=Le=null,ze=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Is||(Is=!0,hy(la,function(){return xi(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Dn.transition,Dn.transition=null;var s=ue;ue=1;var a=se;se|=4,wd.current=null,Xw(e,t),oy(t,e),Sw(Hc),ua=!!jc,Hc=jc=null,e.current=t,Jw(t),Tx(),se=a,ue=s,Dn.transition=o}else e.current=t;if(Is&&(Is=!1,nr=e,Ea=i),o=e.pendingLanes,o===0&&(lr=null),Ix(t.stateNode),ln(e,Ae()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pa)throw Pa=!1,e=su,su=null,e;return Ea&1&&e.tag!==0&&xi(),o=e.pendingLanes,o&1?e===au?Po++:(Po=0,au=e):Po=0,xr(),null}function xi(){if(nr!==null){var e=Gm(Ea),n=Dn.transition,t=ue;try{if(Dn.transition=null,ue=16>e?16:e,nr===null)var r=!1;else{if(e=nr,nr=null,Ea=0,se&6)throw Error(_(331));var i=se;for(se|=4,U=e.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(U=c;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:So(8,u,o)}var p=u.child;if(p!==null)p.return=u,U=p;else for(;U!==null;){u=U;var f=u.sibling,d=u.return;if(ty(u),u===c){U=null;break}if(f!==null){f.return=d,U=f;break}U=d}}}var v=o.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var b=m.sibling;m.sibling=null,m=b}while(m!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:So(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,U=h;break e}U=o.return}}var g=e.current;for(U=g;U!==null;){s=U;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,U=y;else e:for(s=g;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Za(9,a)}}catch(E){Pe(a,a.return,E)}if(a===s){U=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,U=C;break e}U=a.return}}if(se=i,xr(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Ga,e)}catch{}r=!0}return r}finally{ue=t,Dn.transition=n}}return!1}function bf(e,n,t){n=_i(t,n),n=Gg(e,n,1),e=ar(e,n,1),n=Xe(),e!==null&&(is(e,1,n),ln(e,n))}function Pe(e,n,t){if(e.tag===3)bf(e,e,t);else for(;n!==null;){if(n.tag===3){bf(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){e=_i(t,e),e=qg(n,e,1),n=ar(n,e,1),e=Xe(),n!==null&&(is(n,1,e),ln(n,e));break}}n=n.return}}function i0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Xe(),e.pingedLanes|=e.suspendedLanes&t,Le===e&&(ze&t)===t&&(Me===4||Me===3&&(ze&130023424)===ze&&500>Ae()-Sd?jr(e,0):kd|=t),ln(e,n)}function py(e,n){n===0&&(e.mode&1?(n=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):n=1);var t=Xe();e=Nt(e,n),e!==null&&(is(e,n,t),ln(e,t))}function o0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),py(e,t)}function s0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),py(e,t)}var fy;fy=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||sn.current)on=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return on=!1,$w(e,n,t);on=!!(e.flags&131072)}else on=!1,xe&&n.flags&1048576&&yg(n,ya,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Qs(e,n),e=n.pendingProps;var i=Oi(n,Ve.current);bi(n,t),i=gd(null,n,r,e,i,t);var o=yd();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,an(r)?(o=!0,ma(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dd(n),i.updater=Ja,n.stateNode=i,i._reactInternals=n,Qc(n,r,e,t),n=Jc(null,n,r,!0,o,t)):(n.tag=0,xe&&o&&id(n),Qe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Qs(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=l0(r),e=Bn(r,e),i){case 0:n=Xc(null,n,r,e,t);break e;case 1:n=cf(null,n,r,e,t);break e;case 11:n=af(null,n,r,e,t);break e;case 14:n=lf(null,n,r,Bn(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),Xc(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),cf(e,n,r,i,t);case 3:e:{if(Yg(n),e===null)throw Error(_(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Sg(e,n),xa(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=_i(Error(_(423)),n),n=uf(e,n,r,t,i);break e}else if(r!==i){i=_i(Error(_(424)),n),n=uf(e,n,r,t,i);break e}else for(bn=sr(n.stateNode.containerInfo.firstChild),wn=n,xe=!0,qn=null,t=wg(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Li(),r===i){n=Rt(e,n,t);break e}Qe(e,n,r,t)}n=n.child}return n;case 5:return Cg(n),e===null&&qc(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Bc(r,i)?s=null:o!==null&&Bc(r,o)&&(n.flags|=32),Qg(e,n),Qe(e,n,s,t),n.child;case 6:return e===null&&qc(n),null;case 13:return Xg(e,n,t);case 4:return pd(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Fi(n,null,r,t):Qe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),af(e,n,r,i,t);case 7:return Qe(e,n,n.pendingProps,t),n.child;case 8:return Qe(e,n,n.pendingProps.children,t),n.child;case 12:return Qe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,he(va,r._currentValue),r._currentValue=s,o!==null)if(Qn(o.value,s)){if(o.children===i.children&&!sn.current){n=Rt(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Et(-1,t&-t),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),$c(o.return,t,n),a.lanes|=t;break}l=l.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),$c(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Qe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,bi(n,t),i=Mn(i),r=r(i),n.flags|=1,Qe(e,n,r,t),n.child;case 14:return r=n.type,i=Bn(r,n.pendingProps),i=Bn(r.type,i),lf(e,n,r,i,t);case 15:return $g(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Bn(r,i),Qs(e,n),n.tag=1,an(r)?(e=!0,ma(n)):e=!1,bi(n,t),Vg(n,r,i),Qc(n,r,i,t),Jc(null,n,r,!0,e,t);case 19:return Jg(e,n,t);case 22:return Kg(e,n,t)}throw Error(_(156,n.tag))};function hy(e,n){return Bm(e,n)}function a0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(e,n,t,r){return new a0(e,n,t,r)}function Ad(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l0(e){if(typeof e=="function")return Ad(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qu)return 11;if(e===$u)return 14}return 2}function ur(e,n){var t=e.alternate;return t===null?(t=In(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Js(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")Ad(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ii:return Hr(t.children,i,o,n);case Gu:s=8,i|=8;break;case bc:return e=In(12,t,n,i|2),e.elementType=bc,e.lanes=o,e;case xc:return e=In(13,t,n,i),e.elementType=xc,e.lanes=o,e;case wc:return e=In(19,t,n,i),e.elementType=wc,e.lanes=o,e;case Cm:return nl(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case km:s=10;break e;case Sm:s=9;break e;case qu:s=11;break e;case $u:s=14;break e;case Gt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=In(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Hr(e,n,t,r){return e=In(7,e,r,n),e.lanes=t,e}function nl(e,n,t,r){return e=In(22,e,r,n),e.elementType=Cm,e.lanes=t,e.stateNode={isHidden:!1},e}function Xl(e,n,t){return e=In(6,e,null,n),e.lanes=t,e}function Jl(e,n,t){return n=In(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function c0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Td(e,n,t,r,i,o,s,a,l){return e=new c0(e,n,t,a,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=In(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(o),e}function u0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ri,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function my(e){if(!e)return fr;e=e._reactInternals;e:{if(Kr(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(an(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(an(t))return mg(e,t,n)}return n}function gy(e,n,t,r,i,o,s,a,l){return e=Td(t,r,!0,e,i,o,s,a,l),e.context=my(null),t=e.current,r=Xe(),i=cr(t),o=Et(r,i),o.callback=n??null,ar(t,o,i),e.current.lanes=i,is(e,i,r),ln(e,r),e}function tl(e,n,t,r){var i=n.current,o=Xe(),s=cr(i);return t=my(t),n.context===null?n.context=t:n.pendingContext=t,n=Et(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=ar(i,n,s),e!==null&&(Kn(e,i,s,o),qs(e,i,s)),s}function Ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Nd(e,n){xf(e,n),(e=e.alternate)&&xf(e,n)}function d0(){return null}var yy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rd(e){this._internalRoot=e}rl.prototype.render=Rd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));tl(e,n,null,null)};rl.prototype.unmount=Rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gr(function(){tl(null,e,null,null)}),n[Tt]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Km();e={blockedOn:null,target:e,priority:n};for(var t=0;t<$t.length&&n!==0&&n<$t[t].priority;t++);$t.splice(t,0,e),t===0&&Ym(e)}};function Id(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wf(){}function p0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ta(s);o.call(c)}}var s=gy(n,r,e,0,null,!1,!1,"",wf);return e._reactRootContainer=s,e[Tt]=s.current,_o(e.nodeType===8?e.parentNode:e),Gr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ta(l);a.call(c)}}var l=Td(e,0,!1,null,null,!1,!1,"",wf);return e._reactRootContainer=l,e[Tt]=l.current,_o(e.nodeType===8?e.parentNode:e),Gr(function(){tl(n,l,t,r)}),l}function ol(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ta(s);a.call(l)}}tl(n,s,e,i)}else s=p0(t,n,e,i,r);return Ta(s)}qm=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=mo(n.pendingLanes);t!==0&&(Yu(n,t|1),ln(n,Ae()),!(se&6)&&(ji=Ae()+500,xr()))}break;case 13:Gr(function(){var r=Nt(e,1);if(r!==null){var i=Xe();Kn(r,e,1,i)}}),Nd(e,1)}};Xu=function(e){if(e.tag===13){var n=Nt(e,134217728);if(n!==null){var t=Xe();Kn(n,e,134217728,t)}Nd(e,134217728)}};$m=function(e){if(e.tag===13){var n=cr(e),t=Nt(e,n);if(t!==null){var r=Xe();Kn(t,e,n,r)}Nd(e,n)}};Km=function(){return ue};Qm=function(e,n){var t=ue;try{return ue=e,n()}finally{ue=t}};Ic=function(e,n,t){switch(n){case"input":if(Cc(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Qa(r);if(!i)throw Error(_(90));Em(r),Cc(r,i)}}}break;case"textarea":Tm(e,t);break;case"select":n=t.value,n!=null&&mi(e,!!t.multiple,n,!1)}};Lm=Cd;Fm=Gr;var f0={usingClientEntryPoint:!1,Events:[ss,li,Qa,Mm,Om,Cd]},ao={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h0={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jm(e),e===null?null:e.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ds.isDisabled&&Ds.supportsFiber)try{Ga=Ds.inject(h0),ut=Ds}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;Cn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(n))throw Error(_(200));return u0(e,n,null,t)};Cn.createRoot=function(e,n){if(!Id(e))throw Error(_(299));var t=!1,r="",i=yy;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Td(e,1,!1,null,null,t,!1,r,i),e[Tt]=n.current,_o(e.nodeType===8?e.parentNode:e),new Rd(n)};Cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=jm(n),e=e===null?null:e.stateNode,e};Cn.flushSync=function(e){return Gr(e)};Cn.hydrate=function(e,n,t){if(!il(n))throw Error(_(200));return ol(null,e,n,!0,t)};Cn.hydrateRoot=function(e,n,t){if(!Id(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=yy;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=gy(n,null,e,1,t??null,i,!1,o,s),e[Tt]=n.current,_o(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new rl(n)};Cn.render=function(e,n,t){if(!il(n))throw Error(_(200));return ol(null,e,n,!1,t)};Cn.unmountComponentAtNode=function(e){if(!il(e))throw Error(_(40));return e._reactRootContainer?(Gr(function(){ol(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};Cn.unstable_batchedUpdates=Cd;Cn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!il(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ol(e,n,t,!1,r)};Cn.version="18.3.1-next-f1338f8080-20240426";function vy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vy)}catch(e){console.error(e)}}vy(),vm.exports=Cn;var ls=vm.exports;const by=Ua(ls);var xy,kf=ls;xy=kf.createRoot,kf.hydrateRoot;const m0=1,g0=1e6;let Zl=0;function y0(){return Zl=(Zl+1)%Number.MAX_SAFE_INTEGER,Zl.toString()}const ec=new Map,Sf=e=>{if(ec.has(e))return;const n=setTimeout(()=>{ec.delete(e),Eo({type:"REMOVE_TOAST",toastId:e})},g0);ec.set(e,n)},v0=(e,n)=>{switch(n.type){case"ADD_TOAST":return{...e,toasts:[n.toast,...e.toasts].slice(0,m0)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(t=>t.id===n.toast.id?{...t,...n.toast}:t)};case"DISMISS_TOAST":{const{toastId:t}=n;return t?Sf(t):e.toasts.forEach(r=>{Sf(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===t||t===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return n.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(t=>t.id!==n.toastId)}}},Zs=[];let ea={toasts:[]};function Eo(e){ea=v0(ea,e),Zs.forEach(n=>{n(ea)})}function b0({...e}){const n=y0(),t=i=>Eo({type:"UPDATE_TOAST",toast:{...i,id:n}}),r=()=>Eo({type:"DISMISS_TOAST",toastId:n});return Eo({type:"ADD_TOAST",toast:{...e,id:n,open:!0,onOpenChange:i=>{i||r()}}}),{id:n,dismiss:r,update:t}}function x0(){const[e,n]=w.useState(ea);return w.useEffect(()=>(Zs.push(n),()=>{const t=Zs.indexOf(n);t>-1&&Zs.splice(t,1)}),[e]),{...e,toast:b0,dismiss:t=>Eo({type:"DISMISS_TOAST",toastId:t})}}function De(e,n,{checkForDefaultPrevented:t=!0}={}){return function(i){if(e==null||e(i),t===!1||!i.defaultPrevented)return n==null?void 0:n(i)}}function Cf(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function wy(...e){return n=>{let t=!1;const r=e.map(i=>{const o=Cf(i,n);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Cf(e[i],null)}}}}function Yn(...e){return w.useCallback(wy(...e),e)}function sl(e,n=[]){let t=[];function r(o,s){const a=w.createContext(s),l=t.length;t=[...t,s];const c=p=>{var h;const{scope:f,children:d,...v}=p,m=((h=f==null?void 0:f[e])==null?void 0:h[l])||a,b=w.useMemo(()=>v,Object.values(v));return k.jsx(m.Provider,{value:b,children:d})};c.displayName=o+"Provider";function u(p,f){var m;const d=((m=f==null?void 0:f[e])==null?void 0:m[l])||a,v=w.useContext(d);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${o}\``)}return[c,u]}const i=()=>{const o=t.map(s=>w.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return w.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,w0(i,...n)]}function w0(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const p=l(o)[`__scope${c}`];return{...a,...p}},{});return w.useMemo(()=>({[`__scope${n.scopeName}`]:s}),[s])}};return t.scopeName=n.scopeName,t}function uu(e){const n=k0(e),t=w.forwardRef((r,i)=>{const{children:o,...s}=r,a=w.Children.toArray(o),l=a.find(C0);if(l){const c=l.props.children,u=a.map(p=>p===l?w.Children.count(c)>1?w.Children.only(null):w.isValidElement(c)?c.props.children:null:p);return k.jsx(n,{...s,ref:i,children:w.isValidElement(c)?w.cloneElement(c,void 0,u):null})}return k.jsx(n,{...s,ref:i,children:o})});return t.displayName=`${e}.Slot`,t}function k0(e){const n=w.forwardRef((t,r)=>{const{children:i,...o}=t;if(w.isValidElement(i)){const s=E0(i),a=P0(o,i.props);return i.type!==w.Fragment&&(a.ref=r?wy(r,s):s),w.cloneElement(i,a)}return w.Children.count(i)>1?w.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var ky=Symbol("radix.slottable");function S0(e){const n=({children:t})=>k.jsx(k.Fragment,{children:t});return n.displayName=`${e}.Slottable`,n.__radixId=ky,n}function C0(e){return w.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ky}function P0(e,n){const t={...n};for(const r in n){const i=e[r],o=n[r];/^on[A-Z]/.test(r)?i&&o?t[r]=(...a)=>{const l=o(...a);return i(...a),l}:i&&(t[r]=i):r==="style"?t[r]={...i,...o}:r==="className"&&(t[r]=[i,o].filter(Boolean).join(" "))}return{...e,...t}}function E0(e){var r,i;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function A0(e){const n=e+"CollectionProvider",[t,r]=sl(n),[i,o]=t(n,{collectionRef:{current:null},itemMap:new Map}),s=m=>{const{scope:b,children:h}=m,g=B.useRef(null),y=B.useRef(new Map).current;return k.jsx(i,{scope:b,itemMap:y,collectionRef:g,children:h})};s.displayName=n;const a=e+"CollectionSlot",l=uu(a),c=B.forwardRef((m,b)=>{const{scope:h,children:g}=m,y=o(a,h),C=Yn(b,y.collectionRef);return k.jsx(l,{ref:C,children:g})});c.displayName=a;const u=e+"CollectionItemSlot",p="data-radix-collection-item",f=uu(u),d=B.forwardRef((m,b)=>{const{scope:h,children:g,...y}=m,C=B.useRef(null),E=Yn(b,C),P=o(u,h);return B.useEffect(()=>(P.itemMap.set(C,{ref:C,...y}),()=>void P.itemMap.delete(C))),k.jsx(f,{[p]:"",ref:E,children:g})});d.displayName=u;function v(m){const b=o(e+"CollectionConsumer",m);return B.useCallback(()=>{const g=b.collectionRef.current;if(!g)return[];const y=Array.from(g.querySelectorAll(`[${p}]`));return Array.from(b.itemMap.values()).sort((P,A)=>y.indexOf(P.ref.current)-y.indexOf(A.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:s,Slot:c,ItemSlot:d},v,r]}var T0=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],dn=T0.reduce((e,n)=>{const t=uu(`Primitive.${n}`),r=w.forwardRef((i,o)=>{const{asChild:s,...a}=i,l=s?t:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),k.jsx(l,{...a,ref:o})});return r.displayName=`Primitive.${n}`,{...e,[n]:r}},{});function Sy(e,n){e&&ls.flushSync(()=>e.dispatchEvent(n))}function hr(e){const n=w.useRef(e);return w.useEffect(()=>{n.current=e}),w.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function N0(e,n=globalThis==null?void 0:globalThis.document){const t=hr(e);w.useEffect(()=>{const r=i=>{i.key==="Escape"&&t(i)};return n.addEventListener("keydown",r,{capture:!0}),()=>n.removeEventListener("keydown",r,{capture:!0})},[t,n])}var R0="DismissableLayer",du="dismissableLayer.update",I0="dismissableLayer.pointerDownOutside",D0="dismissableLayer.focusOutside",Pf,Cy=w.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Dd=w.forwardRef((e,n)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=e,c=w.useContext(Cy),[u,p]=w.useState(null),f=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,d]=w.useState({}),v=Yn(n,A=>p(A)),m=Array.from(c.layers),[b]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),h=m.indexOf(b),g=u?m.indexOf(u):-1,y=c.layersWithOutsidePointerEventsDisabled.size>0,C=g>=h,E=O0(A=>{const R=A.target,L=[...c.branches].some(O=>O.contains(R));!C||L||(i==null||i(A),s==null||s(A),A.defaultPrevented||a==null||a())},f),P=L0(A=>{const R=A.target;[...c.branches].some(O=>O.contains(R))||(o==null||o(A),s==null||s(A),A.defaultPrevented||a==null||a())},f);return N0(A=>{g===c.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},f),w.useEffect(()=>{if(u)return t&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Pf=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),Ef(),()=>{t&&c.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=Pf)}},[u,f,t,c]),w.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),Ef())},[u,c]),w.useEffect(()=>{const A=()=>d({});return document.addEventListener(du,A),()=>document.removeEventListener(du,A)},[]),k.jsx(dn.div,{...l,ref:v,style:{pointerEvents:y?C?"auto":"none":void 0,...e.style},onFocusCapture:De(e.onFocusCapture,P.onFocusCapture),onBlurCapture:De(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:De(e.onPointerDownCapture,E.onPointerDownCapture)})});Dd.displayName=R0;var M0="DismissableLayerBranch",Py=w.forwardRef((e,n)=>{const t=w.useContext(Cy),r=w.useRef(null),i=Yn(n,r);return w.useEffect(()=>{const o=r.current;if(o)return t.branches.add(o),()=>{t.branches.delete(o)}},[t.branches]),k.jsx(dn.div,{...e,ref:i})});Py.displayName=M0;function O0(e,n=globalThis==null?void 0:globalThis.document){const t=hr(e),r=w.useRef(!1),i=w.useRef(()=>{});return w.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let l=function(){Ey(I0,t,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(n.removeEventListener("click",i.current),i.current=l,n.addEventListener("click",i.current,{once:!0})):l()}else n.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{n.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),n.removeEventListener("pointerdown",o),n.removeEventListener("click",i.current)}},[n,t]),{onPointerDownCapture:()=>r.current=!0}}function L0(e,n=globalThis==null?void 0:globalThis.document){const t=hr(e),r=w.useRef(!1);return w.useEffect(()=>{const i=o=>{o.target&&!r.current&&Ey(D0,t,{originalEvent:o},{discrete:!1})};return n.addEventListener("focusin",i),()=>n.removeEventListener("focusin",i)},[n,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Ef(){const e=new CustomEvent(du);document.dispatchEvent(e)}function Ey(e,n,t,{discrete:r}){const i=t.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&i.addEventListener(e,n,{once:!0}),r?Sy(i,o):i.dispatchEvent(o)}var F0=Dd,z0=Py,mr=globalThis!=null&&globalThis.document?w.useLayoutEffect:()=>{},_0="Portal",Ay=w.forwardRef((e,n)=>{var a;const{container:t,...r}=e,[i,o]=w.useState(!1);mr(()=>o(!0),[]);const s=t||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?by.createPortal(k.jsx(dn.div,{...r,ref:n}),s):null});Ay.displayName=_0;function j0(e,n){return w.useReducer((t,r)=>n[t][r]??t,e)}var Md=e=>{const{present:n,children:t}=e,r=H0(n),i=typeof t=="function"?t({present:r.isPresent}):w.Children.only(t),o=Yn(r.ref,B0(i));return typeof t=="function"||r.isPresent?w.cloneElement(i,{ref:o}):null};Md.displayName="Presence";function H0(e){const[n,t]=w.useState(),r=w.useRef(null),i=w.useRef(e),o=w.useRef("none"),s=e?"mounted":"unmounted",[a,l]=j0(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return w.useEffect(()=>{const c=Ms(r.current);o.current=a==="mounted"?c:"none"},[a]),mr(()=>{const c=r.current,u=i.current;if(u!==e){const f=o.current,d=Ms(c);e?l("MOUNT"):d==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&f!==d?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),mr(()=>{if(n){let c;const u=n.ownerDocument.defaultView??window,p=d=>{const m=Ms(r.current).includes(d.animationName);if(d.target===n&&m&&(l("ANIMATION_END"),!i.current)){const b=n.style.animationFillMode;n.style.animationFillMode="forwards",c=u.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=b)})}},f=d=>{d.target===n&&(o.current=Ms(r.current))};return n.addEventListener("animationstart",f),n.addEventListener("animationcancel",p),n.addEventListener("animationend",p),()=>{u.clearTimeout(c),n.removeEventListener("animationstart",f),n.removeEventListener("animationcancel",p),n.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[n,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:w.useCallback(c=>{r.current=c?getComputedStyle(c):null,t(c)},[])}}function Ms(e){return(e==null?void 0:e.animationName)||"none"}function B0(e){var r,i;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var W0=gm[" useInsertionEffect ".trim().toString()]||mr;function U0({prop:e,defaultProp:n,onChange:t=()=>{},caller:r}){const[i,o,s]=V0({defaultProp:n,onChange:t}),a=e!==void 0,l=a?e:i;{const u=w.useRef(e!==void 0);w.useEffect(()=>{const p=u.current;p!==a&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,r])}const c=w.useCallback(u=>{var p;if(a){const f=G0(u)?u(e):u;f!==e&&((p=s.current)==null||p.call(s,f))}else o(u)},[a,e,o,s]);return[l,c]}function V0({defaultProp:e,onChange:n}){const[t,r]=w.useState(e),i=w.useRef(t),o=w.useRef(n);return W0(()=>{o.current=n},[n]),w.useEffect(()=>{var s;i.current!==t&&((s=o.current)==null||s.call(o,t),i.current=t)},[t,i]),[t,r,o]}function G0(e){return typeof e=="function"}var q0=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),$0="VisuallyHidden",al=w.forwardRef((e,n)=>k.jsx(dn.span,{...e,ref:n,style:{...q0,...e.style}}));al.displayName=$0;var K0=al,Od="ToastProvider",[Ld,Q0,Y0]=A0("Toast"),[Ty,i2]=sl("Toast",[Y0]),[X0,ll]=Ty(Od),Ny=e=>{const{__scopeToast:n,label:t="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[a,l]=w.useState(null),[c,u]=w.useState(0),p=w.useRef(!1),f=w.useRef(!1);return t.trim()||console.error(`Invalid prop \`label\` supplied to \`${Od}\`. Expected non-empty \`string\`.`),k.jsx(Ld.Provider,{scope:n,children:k.jsx(X0,{scope:n,label:t,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:w.useCallback(()=>u(d=>d+1),[]),onToastRemove:w.useCallback(()=>u(d=>d-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:f,children:s})})};Ny.displayName=Od;var Ry="ToastViewport",J0=["F8"],pu="toast.viewportPause",fu="toast.viewportResume",Iy=w.forwardRef((e,n)=>{const{__scopeToast:t,hotkey:r=J0,label:i="Notifications ({hotkey})",...o}=e,s=ll(Ry,t),a=Q0(t),l=w.useRef(null),c=w.useRef(null),u=w.useRef(null),p=w.useRef(null),f=Yn(n,p,s.onViewportChange),d=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=s.toastCount>0;w.useEffect(()=>{const b=h=>{var y;r.length!==0&&r.every(C=>h[C]||h.code===C)&&((y=p.current)==null||y.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),w.useEffect(()=>{const b=l.current,h=p.current;if(v&&b&&h){const g=()=>{if(!s.isClosePausedRef.current){const P=new CustomEvent(pu);h.dispatchEvent(P),s.isClosePausedRef.current=!0}},y=()=>{if(s.isClosePausedRef.current){const P=new CustomEvent(fu);h.dispatchEvent(P),s.isClosePausedRef.current=!1}},C=P=>{!b.contains(P.relatedTarget)&&y()},E=()=>{b.contains(document.activeElement)||y()};return b.addEventListener("focusin",g),b.addEventListener("focusout",C),b.addEventListener("pointermove",g),b.addEventListener("pointerleave",E),window.addEventListener("blur",g),window.addEventListener("focus",y),()=>{b.removeEventListener("focusin",g),b.removeEventListener("focusout",C),b.removeEventListener("pointermove",g),b.removeEventListener("pointerleave",E),window.removeEventListener("blur",g),window.removeEventListener("focus",y)}}},[v,s.isClosePausedRef]);const m=w.useCallback(({tabbingDirection:b})=>{const g=a().map(y=>{const C=y.ref.current,E=[C,...d1(C)];return b==="forwards"?E:E.reverse()});return(b==="forwards"?g.reverse():g).flat()},[a]);return w.useEffect(()=>{const b=p.current;if(b){const h=g=>{var E,P,A;const y=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!y){const R=document.activeElement,L=g.shiftKey;if(g.target===b&&L){(E=c.current)==null||E.focus();return}const I=m({tabbingDirection:L?"backwards":"forwards"}),V=I.findIndex(z=>z===R);nc(I.slice(V+1))?g.preventDefault():L?(P=c.current)==null||P.focus():(A=u.current)==null||A.focus()}};return b.addEventListener("keydown",h),()=>b.removeEventListener("keydown",h)}},[a,m]),k.jsxs(z0,{ref:l,role:"region","aria-label":i.replace("{hotkey}",d),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&k.jsx(hu,{ref:c,onFocusFromOutsideViewport:()=>{const b=m({tabbingDirection:"forwards"});nc(b)}}),k.jsx(Ld.Slot,{scope:t,children:k.jsx(dn.ol,{tabIndex:-1,...o,ref:f})}),v&&k.jsx(hu,{ref:u,onFocusFromOutsideViewport:()=>{const b=m({tabbingDirection:"backwards"});nc(b)}})]})});Iy.displayName=Ry;var Dy="ToastFocusProxy",hu=w.forwardRef((e,n)=>{const{__scopeToast:t,onFocusFromOutsideViewport:r,...i}=e,o=ll(Dy,t);return k.jsx(al,{"aria-hidden":!0,tabIndex:0,...i,ref:n,style:{position:"fixed"},onFocus:s=>{var c;const a=s.relatedTarget;!((c=o.viewport)!=null&&c.contains(a))&&r()}})});hu.displayName=Dy;var cs="Toast",Z0="toast.swipeStart",e1="toast.swipeMove",n1="toast.swipeCancel",t1="toast.swipeEnd",My=w.forwardRef((e,n)=>{const{forceMount:t,open:r,defaultOpen:i,onOpenChange:o,...s}=e,[a,l]=U0({prop:r,defaultProp:i??!0,onChange:o,caller:cs});return k.jsx(Md,{present:t||a,children:k.jsx(o1,{open:a,...s,ref:n,onClose:()=>l(!1),onPause:hr(e.onPause),onResume:hr(e.onResume),onSwipeStart:De(e.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:De(e.onSwipeMove,c=>{const{x:u,y:p}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:De(e.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:De(e.onSwipeEnd,c=>{const{x:u,y:p}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),l(!1)})})})});My.displayName=cs;var[r1,i1]=Ty(cs,{onClose(){}}),o1=w.forwardRef((e,n)=>{const{__scopeToast:t,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:p,onSwipeCancel:f,onSwipeEnd:d,...v}=e,m=ll(cs,t),[b,h]=w.useState(null),g=Yn(n,z=>h(z)),y=w.useRef(null),C=w.useRef(null),E=i||m.duration,P=w.useRef(0),A=w.useRef(E),R=w.useRef(0),{onToastAdd:L,onToastRemove:O}=m,F=hr(()=>{var W;(b==null?void 0:b.contains(document.activeElement))&&((W=m.viewport)==null||W.focus()),s()}),I=w.useCallback(z=>{!z||z===1/0||(window.clearTimeout(R.current),P.current=new Date().getTime(),R.current=window.setTimeout(F,z))},[F]);w.useEffect(()=>{const z=m.viewport;if(z){const W=()=>{I(A.current),c==null||c()},G=()=>{const $=new Date().getTime()-P.current;A.current=A.current-$,window.clearTimeout(R.current),l==null||l()};return z.addEventListener(pu,G),z.addEventListener(fu,W),()=>{z.removeEventListener(pu,G),z.removeEventListener(fu,W)}}},[m.viewport,E,l,c,I]),w.useEffect(()=>{o&&!m.isClosePausedRef.current&&I(E)},[o,E,m.isClosePausedRef,I]),w.useEffect(()=>(L(),()=>O()),[L,O]);const V=w.useMemo(()=>b?Hy(b):null,[b]);return m.viewport?k.jsxs(k.Fragment,{children:[V&&k.jsx(s1,{__scopeToast:t,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:V}),k.jsx(r1,{scope:t,onClose:F,children:ls.createPortal(k.jsx(Ld.ItemSlot,{scope:t,children:k.jsx(F0,{asChild:!0,onEscapeKeyDown:De(a,()=>{m.isFocusedToastEscapeKeyDownRef.current||F(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:k.jsx(dn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":m.swipeDirection,...v,ref:g,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:De(e.onKeyDown,z=>{z.key==="Escape"&&(a==null||a(z.nativeEvent),z.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:De(e.onPointerDown,z=>{z.button===0&&(y.current={x:z.clientX,y:z.clientY})}),onPointerMove:De(e.onPointerMove,z=>{if(!y.current)return;const W=z.clientX-y.current.x,G=z.clientY-y.current.y,$=!!C.current,N=["left","right"].includes(m.swipeDirection),M=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,x=N?M(0,W):0,K=N?0:M(0,G),q=z.pointerType==="touch"?10:2,S={x,y:K},Q={originalEvent:z,delta:S};$?(C.current=S,Os(e1,p,Q,{discrete:!1})):Af(S,m.swipeDirection,q)?(C.current=S,Os(Z0,u,Q,{discrete:!1}),z.target.setPointerCapture(z.pointerId)):(Math.abs(W)>q||Math.abs(G)>q)&&(y.current=null)}),onPointerUp:De(e.onPointerUp,z=>{const W=C.current,G=z.target;if(G.hasPointerCapture(z.pointerId)&&G.releasePointerCapture(z.pointerId),C.current=null,y.current=null,W){const $=z.currentTarget,N={originalEvent:z,delta:W};Af(W,m.swipeDirection,m.swipeThreshold)?Os(t1,d,N,{discrete:!0}):Os(n1,f,N,{discrete:!0}),$.addEventListener("click",M=>M.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),s1=e=>{const{__scopeToast:n,children:t,...r}=e,i=ll(cs,n),[o,s]=w.useState(!1),[a,l]=w.useState(!1);return c1(()=>s(!0)),w.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:k.jsx(Ay,{asChild:!0,children:k.jsx(al,{...r,children:o&&k.jsxs(k.Fragment,{children:[i.label," ",t]})})})},a1="ToastTitle",Oy=w.forwardRef((e,n)=>{const{__scopeToast:t,...r}=e;return k.jsx(dn.div,{...r,ref:n})});Oy.displayName=a1;var l1="ToastDescription",Ly=w.forwardRef((e,n)=>{const{__scopeToast:t,...r}=e;return k.jsx(dn.div,{...r,ref:n})});Ly.displayName=l1;var Fy="ToastAction",zy=w.forwardRef((e,n)=>{const{altText:t,...r}=e;return t.trim()?k.jsx(jy,{altText:t,asChild:!0,children:k.jsx(Fd,{...r,ref:n})}):(console.error(`Invalid prop \`altText\` supplied to \`${Fy}\`. Expected non-empty \`string\`.`),null)});zy.displayName=Fy;var _y="ToastClose",Fd=w.forwardRef((e,n)=>{const{__scopeToast:t,...r}=e,i=i1(_y,t);return k.jsx(jy,{asChild:!0,children:k.jsx(dn.button,{type:"button",...r,ref:n,onClick:De(e.onClick,i.onClose)})})});Fd.displayName=_y;var jy=w.forwardRef((e,n)=>{const{__scopeToast:t,altText:r,...i}=e;return k.jsx(dn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:n})});function Hy(e){const n=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&n.push(r.textContent),u1(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&n.push(s)}else n.push(...Hy(r))}}),n}function Os(e,n,t,{discrete:r}){const i=t.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});n&&i.addEventListener(e,n,{once:!0}),r?Sy(i,o):i.dispatchEvent(o)}var Af=(e,n,t=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return n==="left"||n==="right"?o&&r>t:!o&&i>t};function c1(e=()=>{}){const n=hr(e);mr(()=>{let t=0,r=0;return t=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(n)),()=>{window.cancelAnimationFrame(t),window.cancelAnimationFrame(r)}},[n])}function u1(e){return e.nodeType===e.ELEMENT_NODE}function d1(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function nc(e){const n=document.activeElement;return e.some(t=>t===n?!0:(t.focus(),document.activeElement!==n))}var p1=Ny,By=Iy,Wy=My,Uy=Oy,Vy=Ly,Gy=zy,qy=Fd;function $y(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=$y(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ky(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=$y(e))&&(r&&(r+=" "),r+=n);return r}const Tf=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Nf=Ky,f1=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return Nf(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:o}=n,s=Object.keys(i).map(c=>{const u=t==null?void 0:t[c],p=o==null?void 0:o[c];if(u===null)return null;const f=Tf(u)||Tf(p);return i[c][f]}),a=t&&Object.entries(t).reduce((c,u)=>{let[p,f]=u;return f===void 0||(c[p]=f),c},{}),l=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:p,className:f,...d}=u;return Object.entries(d).every(v=>{let[m,b]=v;return Array.isArray(b)?b.includes({...o,...a}[m]):{...o,...a}[m]===b})?[...c,p,f]:c},[]);return Nf(e,s,l,t==null?void 0:t.class,t==null?void 0:t.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qy=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=w.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>w.createElement("svg",{ref:l,...m1,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Qy("lucide",i),...a},[...s.map(([c,u])=>w.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(e,n)=>{const t=w.forwardRef(({className:r,...i},o)=>w.createElement(g1,{ref:o,iconNode:n,className:Qy(`lucide-${h1(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=mt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=mt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=mt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=mt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=mt("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=mt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=mt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=mt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=mt("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=mt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),zd="-",x1=e=>{const n=k1(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const a=s.split(zd);return a[0]===""&&a.length!==1&&a.shift(),Zy(a,n)||w1(s)},getConflictingClassGroupIds:(s,a)=>{const l=t[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},Zy=(e,n)=>{var s;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),i=r?Zy(e.slice(1),r):void 0;if(i)return i;if(n.validators.length===0)return;const o=e.join(zd);return(s=n.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},If=/^\[(.+)\]$/,w1=e=>{if(If.test(e)){const n=If.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},k1=e=>{const{theme:n,prefix:t}=e,r={nextPart:new Map,validators:[]};return C1(Object.entries(e.classGroups),t).forEach(([o,s])=>{gu(s,r,o,n)}),r},gu=(e,n,t,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?n:Df(n,i);o.classGroupId=t;return}if(typeof i=="function"){if(S1(i)){gu(i(r),n,t,r);return}n.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([o,s])=>{gu(s,Df(n,o),t,r)})})},Df=(e,n)=>{let t=e;return n.split(zd).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},S1=e=>e.isThemeGetter,C1=(e,n)=>n?e.map(([t,r])=>{const i=r.map(o=>typeof o=="string"?n+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[n+s,a])):o);return[t,i]}):e,P1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const i=(o,s)=>{t.set(o,s),n++,n>e&&(n=0,r=t,t=new Map)};return{get(o){let s=t.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){t.has(o)?t.set(o,s):i(o,s)}}},ev="!",E1=e=>{const{separator:n,experimentalParseClassName:t}=e,r=n.length===1,i=n[0],o=n.length,s=a=>{const l=[];let c=0,u=0,p;for(let b=0;b<a.length;b++){let h=a[b];if(c===0){if(h===i&&(r||a.slice(b,b+o)===n)){l.push(a.slice(u,b)),u=b+o;continue}if(h==="/"){p=b;continue}}h==="["?c++:h==="]"&&c--}const f=l.length===0?a:a.substring(u),d=f.startsWith(ev),v=d?f.substring(1):f,m=p&&p>u?p-u:void 0;return{modifiers:l,hasImportantModifier:d,baseClassName:v,maybePostfixModifierPosition:m}};return t?a=>t({className:a,parseClassName:s}):s},A1=e=>{if(e.length<=1)return e;const n=[];let t=[];return e.forEach(r=>{r[0]==="["?(n.push(...t.sort(),r),t=[]):t.push(r)}),n.push(...t.sort()),n},T1=e=>({cache:P1(e.cacheSize),parseClassName:E1(e),...x1(e)}),N1=/\s+/,R1=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:i}=n,o=[],s=e.trim().split(N1);let a="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:u,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:d}=t(c);let v=!!d,m=r(v?f.substring(0,d):f);if(!m){if(!v){a=c+(a.length>0?" "+a:a);continue}if(m=r(f),!m){a=c+(a.length>0?" "+a:a);continue}v=!1}const b=A1(u).join(":"),h=p?b+ev:b,g=h+m;if(o.includes(g))continue;o.push(g);const y=i(m,v);for(let C=0;C<y.length;++C){const E=y[C];o.push(h+E)}a=c+(a.length>0?" "+a:a)}return a};function I1(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=nv(n))&&(r&&(r+=" "),r+=t);return r}const nv=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=nv(e[r]))&&(t&&(t+=" "),t+=n);return t};function D1(e,...n){let t,r,i,o=s;function s(l){const c=n.reduce((u,p)=>p(u),e());return t=T1(c),r=t.cache.get,i=t.cache.set,o=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=R1(l,t);return i(l,u),u}return function(){return o(I1.apply(null,arguments))}}const ge=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},tv=/^\[(?:([a-z-]+):)?(.+)\]$/i,M1=/^\d+\/\d+$/,O1=new Set(["px","full","screen"]),L1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,F1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,z1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,_1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,j1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,bt=e=>wi(e)||O1.has(e)||M1.test(e),Bt=e=>qi(e,"length",$1),wi=e=>!!e&&!Number.isNaN(Number(e)),tc=e=>qi(e,"number",wi),lo=e=>!!e&&Number.isInteger(Number(e)),H1=e=>e.endsWith("%")&&wi(e.slice(0,-1)),ee=e=>tv.test(e),Wt=e=>L1.test(e),B1=new Set(["length","size","percentage"]),W1=e=>qi(e,B1,rv),U1=e=>qi(e,"position",rv),V1=new Set(["image","url"]),G1=e=>qi(e,V1,Q1),q1=e=>qi(e,"",K1),co=()=>!0,qi=(e,n,t)=>{const r=tv.exec(e);return r?r[1]?typeof n=="string"?r[1]===n:n.has(r[1]):t(r[2]):!1},$1=e=>F1.test(e)&&!z1.test(e),rv=()=>!1,K1=e=>_1.test(e),Q1=e=>j1.test(e),Y1=()=>{const e=ge("colors"),n=ge("spacing"),t=ge("blur"),r=ge("brightness"),i=ge("borderColor"),o=ge("borderRadius"),s=ge("borderSpacing"),a=ge("borderWidth"),l=ge("contrast"),c=ge("grayscale"),u=ge("hueRotate"),p=ge("invert"),f=ge("gap"),d=ge("gradientColorStops"),v=ge("gradientColorStopPositions"),m=ge("inset"),b=ge("margin"),h=ge("opacity"),g=ge("padding"),y=ge("saturate"),C=ge("scale"),E=ge("sepia"),P=ge("skew"),A=ge("space"),R=ge("translate"),L=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",ee,n],I=()=>[ee,n],V=()=>["",bt,Bt],z=()=>["auto",wi,ee],W=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",ee],x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[wi,ee];return{cacheSize:500,separator:":",theme:{colors:[co],spacing:[bt,Bt],blur:["none","",Wt,ee],brightness:K(),borderColor:[e],borderRadius:["none","","full",Wt,ee],borderSpacing:I(),borderWidth:V(),contrast:K(),grayscale:M(),hueRotate:K(),invert:M(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[H1,Bt],inset:F(),margin:F(),opacity:K(),padding:I(),saturate:K(),scale:K(),sepia:M(),skew:K(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",ee]}],container:["container"],columns:[{columns:[Wt]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...W(),ee]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",lo,ee]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ee]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",lo,ee]}],"grid-cols":[{"grid-cols":[co]}],"col-start-end":[{col:["auto",{span:["full",lo,ee]},ee]}],"col-start":[{"col-start":z()}],"col-end":[{"col-end":z()}],"grid-rows":[{"grid-rows":[co]}],"row-start-end":[{row:["auto",{span:[lo,ee]},ee]}],"row-start":[{"row-start":z()}],"row-end":[{"row-end":z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ee]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ee]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ee,n]}],"min-w":[{"min-w":[ee,n,"min","max","fit"]}],"max-w":[{"max-w":[ee,n,"none","full","min","max","fit","prose",{screen:[Wt]},Wt]}],h:[{h:[ee,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ee,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ee,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ee,n,"auto","min","max","fit"]}],"font-size":[{text:["base",Wt,Bt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",tc]}],"font-family":[{font:[co]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ee]}],"line-clamp":[{"line-clamp":["none",wi,tc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",bt,ee]}],"list-image":[{"list-image":["none",ee]}],"list-style-type":[{list:["none","disc","decimal",ee]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",bt,Bt]}],"underline-offset":[{"underline-offset":["auto",bt,ee]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...W(),U1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",W1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},G1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[d]}],"gradient-via":[{via:[d]}],"gradient-to":[{to:[d]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[bt,ee]}],"outline-w":[{outline:[bt,Bt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[bt,Bt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Wt,q1]}],"shadow-color":[{shadow:[co]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...$(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Wt,ee]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[y]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ee]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",ee]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",ee]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[lo,ee]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ee]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ee]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ee]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[bt,Bt,tc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},X1=D1(Y1);function un(...e){return X1(Ky(e))}const J1=p1,iv=w.forwardRef(({className:e,...n},t)=>k.jsx(By,{ref:t,className:un("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...n}));iv.displayName=By.displayName;const Z1=f1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),ov=w.forwardRef(({className:e,variant:n,...t},r)=>k.jsx(Wy,{ref:r,className:un(Z1({variant:n}),e),...t}));ov.displayName=Wy.displayName;const ek=w.forwardRef(({className:e,...n},t)=>k.jsx(Gy,{ref:t,className:un("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...n}));ek.displayName=Gy.displayName;const sv=w.forwardRef(({className:e,...n},t)=>k.jsx(qy,{ref:t,className:un("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...n,children:k.jsx(mu,{className:"h-4 w-4"})}));sv.displayName=qy.displayName;const av=w.forwardRef(({className:e,...n},t)=>k.jsx(Uy,{ref:t,className:un("text-sm font-semibold",e),...n}));av.displayName=Uy.displayName;const lv=w.forwardRef(({className:e,...n},t)=>k.jsx(Vy,{ref:t,className:un("text-sm opacity-90",e),...n}));lv.displayName=Vy.displayName;function nk(){const{toasts:e}=x0();return k.jsxs(J1,{children:[e.map(function({id:n,title:t,description:r,action:i,...o}){return k.jsxs(ov,{...o,children:[k.jsxs("div",{className:"grid gap-1",children:[t&&k.jsx(av,{children:t}),r&&k.jsx(lv,{children:r})]}),i,k.jsx(sv,{})]},n)}),k.jsx(iv,{})]})}var Mf=["light","dark"],tk="(prefers-color-scheme: dark)",rk=w.createContext(void 0),ik={setTheme:e=>{},themes:[]},ok=()=>{var e;return(e=w.useContext(rk))!=null?e:ik};w.memo(({forcedTheme:e,storageKey:n,attribute:t,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:s,attrs:a,nonce:l})=>{let c=o==="system",u=t==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${t}',s='setAttribute';`,p=i?Mf.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=(v,m=!1,b=!0)=>{let h=s?s[v]:v,g=m?v+"|| ''":`'${h}'`,y="";return i&&b&&!m&&Mf.includes(v)&&(y+=`d.style.colorScheme = '${v}';`),t==="class"?m||h?y+=`c.add(${g})`:y+="null":h&&(y+=`d[s](n,${g})`),y},d=e?`!function(){${u}${f(e)}}()`:r?`!function(){try{${u}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${c})){var t='${tk}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}${c?"":"else{"+f(o,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${n}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}else{${f(o,!1,!1)};}${p}}catch(t){}}();`;return w.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:d}})});var sk=e=>{switch(e){case"success":return ck;case"info":return dk;case"warning":return uk;case"error":return pk;default:return null}},ak=Array(12).fill(0),lk=({visible:e,className:n})=>B.createElement("div",{className:["sonner-loading-wrapper",n].filter(Boolean).join(" "),"data-visible":e},B.createElement("div",{className:"sonner-spinner"},ak.map((t,r)=>B.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),ck=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),uk=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),dk=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),pk=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),fk=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},B.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),B.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),hk=()=>{let[e,n]=B.useState(document.hidden);return B.useEffect(()=>{let t=()=>{n(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),e},yu=1,mk=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}),this.publish=e=>{this.subscribers.forEach(n=>n(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var n;let{message:t,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((n=e.id)==null?void 0:n.length)>0?e.id:yu++,o=this.toasts.find(a=>a.id===i),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),o?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...e,id:i,title:t}),{...a,...e,id:i,dismissible:s,title:t}):a):this.addToast({title:t,...r,dismissible:s,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(n=>{this.subscribers.forEach(t=>t({id:n.id,dismiss:!0}))}),this.subscribers.forEach(n=>n({id:e,dismiss:!0})),e),this.message=(e,n)=>this.create({...n,message:e}),this.error=(e,n)=>this.create({...n,message:e,type:"error"}),this.success=(e,n)=>this.create({...n,type:"success",message:e}),this.info=(e,n)=>this.create({...n,type:"info",message:e}),this.warning=(e,n)=>this.create({...n,type:"warning",message:e}),this.loading=(e,n)=>this.create({...n,type:"loading",message:e}),this.promise=(e,n)=>{if(!n)return;let t;n.loading!==void 0&&(t=this.create({...n,promise:e,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));let r=e instanceof Promise?e:e(),i=t!==void 0,o,s=r.then(async l=>{if(o=["resolve",l],B.isValidElement(l))i=!1,this.create({id:t,type:"default",message:l});else if(yk(l)&&!l.ok){i=!1;let c=typeof n.error=="function"?await n.error(`HTTP error! status: ${l.status}`):n.error,u=typeof n.description=="function"?await n.description(`HTTP error! status: ${l.status}`):n.description;this.create({id:t,type:"error",message:c,description:u})}else if(n.success!==void 0){i=!1;let c=typeof n.success=="function"?await n.success(l):n.success,u=typeof n.description=="function"?await n.description(l):n.description;this.create({id:t,type:"success",message:c,description:u})}}).catch(async l=>{if(o=["reject",l],n.error!==void 0){i=!1;let c=typeof n.error=="function"?await n.error(l):n.error,u=typeof n.description=="function"?await n.description(l):n.description;this.create({id:t,type:"error",message:c,description:u})}}).finally(()=>{var l;i&&(this.dismiss(t),t=void 0),(l=n.finally)==null||l.call(n)}),a=()=>new Promise((l,c)=>s.then(()=>o[0]==="reject"?c(o[1]):l(o[1])).catch(c));return typeof t!="string"&&typeof t!="number"?{unwrap:a}:Object.assign(t,{unwrap:a})},this.custom=(e,n)=>{let t=(n==null?void 0:n.id)||yu++;return this.create({jsx:e(t),id:t,...n}),t},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},tn=new mk,gk=(e,n)=>{let t=(n==null?void 0:n.id)||yu++;return tn.addToast({title:e,...n,id:t}),t},yk=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",vk=gk,bk=()=>tn.toasts,xk=()=>tn.getActiveToasts();Object.assign(vk,{success:tn.success,info:tn.info,warning:tn.warning,error:tn.error,custom:tn.custom,message:tn.message,promise:tn.promise,dismiss:tn.dismiss,loading:tn.loading},{getHistory:bk,getToasts:xk});function wk(e,{insertAt:n}={}){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}wk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ls(e){return e.label!==void 0}var kk=3,Sk="32px",Ck="16px",Of=4e3,Pk=356,Ek=14,Ak=20,Tk=200;function Hn(...e){return e.filter(Boolean).join(" ")}function Nk(e){let[n,t]=e.split("-"),r=[];return n&&r.push(n),t&&r.push(t),r}var Rk=e=>{var n,t,r,i,o,s,a,l,c,u,p;let{invert:f,toast:d,unstyled:v,interacting:m,setHeights:b,visibleToasts:h,heights:g,index:y,toasts:C,expanded:E,removeToast:P,defaultRichColors:A,closeButton:R,style:L,cancelButtonStyle:O,actionButtonStyle:F,className:I="",descriptionClassName:V="",duration:z,position:W,gap:G,loadingIcon:$,expandByDefault:N,classNames:M,icons:x,closeButtonAriaLabel:K="Close toast",pauseWhenPageIsHidden:q}=e,[S,Q]=B.useState(null),[de,oe]=B.useState(null),[ie,qe]=B.useState(!1),[$e,en]=B.useState(!1),[fn,Ot]=B.useState(!1),[Zn,Xr]=B.useState(!1),[Jr,Sr]=B.useState(!1),[Zr,Cr]=B.useState(0),[yt,Zi]=B.useState(0),Pr=B.useRef(d.duration||z||Of),hs=B.useRef(null),vt=B.useRef(null),Sl=y===0,Cl=y+1<=h,T=d.type,H=d.dismissible!==!1,X=d.className||"",te=d.descriptionClassName||"",ae=B.useMemo(()=>g.findIndex(J=>J.toastId===d.id)||0,[g,d.id]),hn=B.useMemo(()=>{var J;return(J=d.closeButton)!=null?J:R},[d.closeButton,R]),et=B.useMemo(()=>d.duration||z||Of,[d.duration,z]),mn=B.useRef(0),En=B.useRef(0),Lt=B.useRef(0),Te=B.useRef(null),[Ft,Ln]=W.split("-"),up=B.useMemo(()=>g.reduce((J,pe,be)=>be>=ae?J:J+pe.height,0),[g,ae]),dp=hk(),Bb=d.invert||f,Pl=T==="loading";En.current=B.useMemo(()=>ae*G+up,[ae,up]),B.useEffect(()=>{Pr.current=et},[et]),B.useEffect(()=>{qe(!0)},[]),B.useEffect(()=>{let J=vt.current;if(J){let pe=J.getBoundingClientRect().height;return Zi(pe),b(be=>[{toastId:d.id,height:pe,position:d.position},...be]),()=>b(be=>be.filter(Fn=>Fn.toastId!==d.id))}},[b,d.id]),B.useLayoutEffect(()=>{if(!ie)return;let J=vt.current,pe=J.style.height;J.style.height="auto";let be=J.getBoundingClientRect().height;J.style.height=pe,Zi(be),b(Fn=>Fn.find(zn=>zn.toastId===d.id)?Fn.map(zn=>zn.toastId===d.id?{...zn,height:be}:zn):[{toastId:d.id,height:be,position:d.position},...Fn])},[ie,d.title,d.description,b,d.id]);let zt=B.useCallback(()=>{en(!0),Cr(En.current),b(J=>J.filter(pe=>pe.toastId!==d.id)),setTimeout(()=>{P(d)},Tk)},[d,P,b,En]);B.useEffect(()=>{if(d.promise&&T==="loading"||d.duration===1/0||d.type==="loading")return;let J;return E||m||q&&dp?(()=>{if(Lt.current<mn.current){let pe=new Date().getTime()-mn.current;Pr.current=Pr.current-pe}Lt.current=new Date().getTime()})():Pr.current!==1/0&&(mn.current=new Date().getTime(),J=setTimeout(()=>{var pe;(pe=d.onAutoClose)==null||pe.call(d,d),zt()},Pr.current)),()=>clearTimeout(J)},[E,m,d,T,q,dp,zt]),B.useEffect(()=>{d.delete&&zt()},[zt,d.delete]);function Wb(){var J,pe,be;return x!=null&&x.loading?B.createElement("div",{className:Hn(M==null?void 0:M.loader,(J=d==null?void 0:d.classNames)==null?void 0:J.loader,"sonner-loader"),"data-visible":T==="loading"},x.loading):$?B.createElement("div",{className:Hn(M==null?void 0:M.loader,(pe=d==null?void 0:d.classNames)==null?void 0:pe.loader,"sonner-loader"),"data-visible":T==="loading"},$):B.createElement(lk,{className:Hn(M==null?void 0:M.loader,(be=d==null?void 0:d.classNames)==null?void 0:be.loader),visible:T==="loading"})}return B.createElement("li",{tabIndex:0,ref:vt,className:Hn(I,X,M==null?void 0:M.toast,(n=d==null?void 0:d.classNames)==null?void 0:n.toast,M==null?void 0:M.default,M==null?void 0:M[T],(t=d==null?void 0:d.classNames)==null?void 0:t[T]),"data-sonner-toast":"","data-rich-colors":(r=d.richColors)!=null?r:A,"data-styled":!(d.jsx||d.unstyled||v),"data-mounted":ie,"data-promise":!!d.promise,"data-swiped":Jr,"data-removed":$e,"data-visible":Cl,"data-y-position":Ft,"data-x-position":Ln,"data-index":y,"data-front":Sl,"data-swiping":fn,"data-dismissible":H,"data-type":T,"data-invert":Bb,"data-swipe-out":Zn,"data-swipe-direction":de,"data-expanded":!!(E||N&&ie),style:{"--index":y,"--toasts-before":y,"--z-index":C.length-y,"--offset":`${$e?Zr:En.current}px`,"--initial-height":N?"auto":`${yt}px`,...L,...d.style},onDragEnd:()=>{Ot(!1),Q(null),Te.current=null},onPointerDown:J=>{Pl||!H||(hs.current=new Date,Cr(En.current),J.target.setPointerCapture(J.pointerId),J.target.tagName!=="BUTTON"&&(Ot(!0),Te.current={x:J.clientX,y:J.clientY}))},onPointerUp:()=>{var J,pe,be,Fn;if(Zn||!H)return;Te.current=null;let zn=Number(((J=vt.current)==null?void 0:J.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),_t=Number(((pe=vt.current)==null?void 0:pe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Er=new Date().getTime()-((be=hs.current)==null?void 0:be.getTime()),_n=S==="x"?zn:_t,jt=Math.abs(_n)/Er;if(Math.abs(_n)>=Ak||jt>.11){Cr(En.current),(Fn=d.onDismiss)==null||Fn.call(d,d),oe(S==="x"?zn>0?"right":"left":_t>0?"down":"up"),zt(),Xr(!0),Sr(!1);return}Ot(!1),Q(null)},onPointerMove:J=>{var pe,be,Fn,zn;if(!Te.current||!H||((pe=window.getSelection())==null?void 0:pe.toString().length)>0)return;let _t=J.clientY-Te.current.y,Er=J.clientX-Te.current.x,_n=(be=e.swipeDirections)!=null?be:Nk(W);!S&&(Math.abs(Er)>1||Math.abs(_t)>1)&&Q(Math.abs(Er)>Math.abs(_t)?"x":"y");let jt={x:0,y:0};S==="y"?(_n.includes("top")||_n.includes("bottom"))&&(_n.includes("top")&&_t<0||_n.includes("bottom")&&_t>0)&&(jt.y=_t):S==="x"&&(_n.includes("left")||_n.includes("right"))&&(_n.includes("left")&&Er<0||_n.includes("right")&&Er>0)&&(jt.x=Er),(Math.abs(jt.x)>0||Math.abs(jt.y)>0)&&Sr(!0),(Fn=vt.current)==null||Fn.style.setProperty("--swipe-amount-x",`${jt.x}px`),(zn=vt.current)==null||zn.style.setProperty("--swipe-amount-y",`${jt.y}px`)}},hn&&!d.jsx?B.createElement("button",{"aria-label":K,"data-disabled":Pl,"data-close-button":!0,onClick:Pl||!H?()=>{}:()=>{var J;zt(),(J=d.onDismiss)==null||J.call(d,d)},className:Hn(M==null?void 0:M.closeButton,(i=d==null?void 0:d.classNames)==null?void 0:i.closeButton)},(o=x==null?void 0:x.close)!=null?o:fk):null,d.jsx||w.isValidElement(d.title)?d.jsx?d.jsx:typeof d.title=="function"?d.title():d.title:B.createElement(B.Fragment,null,T||d.icon||d.promise?B.createElement("div",{"data-icon":"",className:Hn(M==null?void 0:M.icon,(s=d==null?void 0:d.classNames)==null?void 0:s.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||Wb():null,d.type!=="loading"?d.icon||(x==null?void 0:x[T])||sk(T):null):null,B.createElement("div",{"data-content":"",className:Hn(M==null?void 0:M.content,(a=d==null?void 0:d.classNames)==null?void 0:a.content)},B.createElement("div",{"data-title":"",className:Hn(M==null?void 0:M.title,(l=d==null?void 0:d.classNames)==null?void 0:l.title)},typeof d.title=="function"?d.title():d.title),d.description?B.createElement("div",{"data-description":"",className:Hn(V,te,M==null?void 0:M.description,(c=d==null?void 0:d.classNames)==null?void 0:c.description)},typeof d.description=="function"?d.description():d.description):null),w.isValidElement(d.cancel)?d.cancel:d.cancel&&Ls(d.cancel)?B.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||O,onClick:J=>{var pe,be;Ls(d.cancel)&&H&&((be=(pe=d.cancel).onClick)==null||be.call(pe,J),zt())},className:Hn(M==null?void 0:M.cancelButton,(u=d==null?void 0:d.classNames)==null?void 0:u.cancelButton)},d.cancel.label):null,w.isValidElement(d.action)?d.action:d.action&&Ls(d.action)?B.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||F,onClick:J=>{var pe,be;Ls(d.action)&&((be=(pe=d.action).onClick)==null||be.call(pe,J),!J.defaultPrevented&&zt())},className:Hn(M==null?void 0:M.actionButton,(p=d==null?void 0:d.classNames)==null?void 0:p.actionButton)},d.action.label):null))};function Lf(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Ik(e,n){let t={};return[e,n].forEach((r,i)=>{let o=i===1,s=o?"--mobile-offset":"--offset",a=o?Ck:Sk;function l(c){["top","right","bottom","left"].forEach(u=>{t[`${s}-${u}`]=typeof c=="number"?`${c}px`:c})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(c=>{r[c]===void 0?t[`${s}-${c}`]=a:t[`${s}-${c}`]=typeof r[c]=="number"?`${r[c]}px`:r[c]}):l(a)}),t}var Dk=w.forwardRef(function(e,n){let{invert:t,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:o,closeButton:s,className:a,offset:l,mobileOffset:c,theme:u="light",richColors:p,duration:f,style:d,visibleToasts:v=kk,toastOptions:m,dir:b=Lf(),gap:h=Ek,loadingIcon:g,icons:y,containerAriaLabel:C="Notifications",pauseWhenPageIsHidden:E}=e,[P,A]=B.useState([]),R=B.useMemo(()=>Array.from(new Set([r].concat(P.filter(q=>q.position).map(q=>q.position)))),[P,r]),[L,O]=B.useState([]),[F,I]=B.useState(!1),[V,z]=B.useState(!1),[W,G]=B.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),$=B.useRef(null),N=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),M=B.useRef(null),x=B.useRef(!1),K=B.useCallback(q=>{A(S=>{var Q;return(Q=S.find(de=>de.id===q.id))!=null&&Q.delete||tn.dismiss(q.id),S.filter(({id:de})=>de!==q.id)})},[]);return B.useEffect(()=>tn.subscribe(q=>{if(q.dismiss){A(S=>S.map(Q=>Q.id===q.id?{...Q,delete:!0}:Q));return}setTimeout(()=>{by.flushSync(()=>{A(S=>{let Q=S.findIndex(de=>de.id===q.id);return Q!==-1?[...S.slice(0,Q),{...S[Q],...q},...S.slice(Q+1)]:[q,...S]})})})}),[]),B.useEffect(()=>{if(u!=="system"){G(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?G("dark"):G("light")),typeof window>"u")return;let q=window.matchMedia("(prefers-color-scheme: dark)");try{q.addEventListener("change",({matches:S})=>{G(S?"dark":"light")})}catch{q.addListener(({matches:Q})=>{try{G(Q?"dark":"light")}catch(de){console.error(de)}})}},[u]),B.useEffect(()=>{P.length<=1&&I(!1)},[P]),B.useEffect(()=>{let q=S=>{var Q,de;i.every(oe=>S[oe]||S.code===oe)&&(I(!0),(Q=$.current)==null||Q.focus()),S.code==="Escape"&&(document.activeElement===$.current||(de=$.current)!=null&&de.contains(document.activeElement))&&I(!1)};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[i]),B.useEffect(()=>{if($.current)return()=>{M.current&&(M.current.focus({preventScroll:!0}),M.current=null,x.current=!1)}},[$.current]),B.createElement("section",{ref:n,"aria-label":`${C} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},R.map((q,S)=>{var Q;let[de,oe]=q.split("-");return P.length?B.createElement("ol",{key:q,dir:b==="auto"?Lf():b,tabIndex:-1,ref:$,className:a,"data-sonner-toaster":!0,"data-theme":W,"data-y-position":de,"data-lifted":F&&P.length>1&&!o,"data-x-position":oe,style:{"--front-toast-height":`${((Q=L[0])==null?void 0:Q.height)||0}px`,"--width":`${Pk}px`,"--gap":`${h}px`,...d,...Ik(l,c)},onBlur:ie=>{x.current&&!ie.currentTarget.contains(ie.relatedTarget)&&(x.current=!1,M.current&&(M.current.focus({preventScroll:!0}),M.current=null))},onFocus:ie=>{ie.target instanceof HTMLElement&&ie.target.dataset.dismissible==="false"||x.current||(x.current=!0,M.current=ie.relatedTarget)},onMouseEnter:()=>I(!0),onMouseMove:()=>I(!0),onMouseLeave:()=>{V||I(!1)},onDragEnd:()=>I(!1),onPointerDown:ie=>{ie.target instanceof HTMLElement&&ie.target.dataset.dismissible==="false"||z(!0)},onPointerUp:()=>z(!1)},P.filter(ie=>!ie.position&&S===0||ie.position===q).map((ie,qe)=>{var $e,en;return B.createElement(Rk,{key:ie.id,icons:y,index:qe,toast:ie,defaultRichColors:p,duration:($e=m==null?void 0:m.duration)!=null?$e:f,className:m==null?void 0:m.className,descriptionClassName:m==null?void 0:m.descriptionClassName,invert:t,visibleToasts:v,closeButton:(en=m==null?void 0:m.closeButton)!=null?en:s,interacting:V,position:q,style:m==null?void 0:m.style,unstyled:m==null?void 0:m.unstyled,classNames:m==null?void 0:m.classNames,cancelButtonStyle:m==null?void 0:m.cancelButtonStyle,actionButtonStyle:m==null?void 0:m.actionButtonStyle,removeToast:K,toasts:P.filter(fn=>fn.position==ie.position),heights:L.filter(fn=>fn.position==ie.position),setHeights:O,expandByDefault:o,gap:h,loadingIcon:g,expanded:F,pauseWhenPageIsHidden:E,swipeDirections:e.swipeDirections})})):null}))});const Mk=({...e})=>{const{theme:n="system"}=ok();return k.jsx(Dk,{theme:n,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},Ok=["top","right","bottom","left"],gr=Math.min,vn=Math.max,Ia=Math.round,Fs=Math.floor,pt=e=>({x:e,y:e}),Lk={left:"right",right:"left",bottom:"top",top:"bottom"},Fk={start:"end",end:"start"};function vu(e,n,t){return vn(e,gr(n,t))}function It(e,n){return typeof e=="function"?e(n):e}function Dt(e){return e.split("-")[0]}function $i(e){return e.split("-")[1]}function _d(e){return e==="x"?"y":"x"}function jd(e){return e==="y"?"height":"width"}const zk=new Set(["top","bottom"]);function ct(e){return zk.has(Dt(e))?"y":"x"}function Hd(e){return _d(ct(e))}function _k(e,n,t){t===void 0&&(t=!1);const r=$i(e),i=Hd(e),o=jd(i);let s=i==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[o]>n.floating[o]&&(s=Da(s)),[s,Da(s)]}function jk(e){const n=Da(e);return[bu(e),n,bu(n)]}function bu(e){return e.replace(/start|end/g,n=>Fk[n])}const Ff=["left","right"],zf=["right","left"],Hk=["top","bottom"],Bk=["bottom","top"];function Wk(e,n,t){switch(e){case"top":case"bottom":return t?n?zf:Ff:n?Ff:zf;case"left":case"right":return n?Hk:Bk;default:return[]}}function Uk(e,n,t,r){const i=$i(e);let o=Wk(Dt(e),t==="start",r);return i&&(o=o.map(s=>s+"-"+i),n&&(o=o.concat(o.map(bu)))),o}function Da(e){return e.replace(/left|right|bottom|top/g,n=>Lk[n])}function Vk(e){return{top:0,right:0,bottom:0,left:0,...e}}function cv(e){return typeof e!="number"?Vk(e):{top:e,right:e,bottom:e,left:e}}function Ma(e){const{x:n,y:t,width:r,height:i}=e;return{width:r,height:i,top:t,left:n,right:n+r,bottom:t+i,x:n,y:t}}function _f(e,n,t){let{reference:r,floating:i}=e;const o=ct(n),s=Hd(n),a=jd(s),l=Dt(n),c=o==="y",u=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,f=r[a]/2-i[a]/2;let d;switch(l){case"top":d={x:u,y:r.y-i.height};break;case"bottom":d={x:u,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:p};break;case"left":d={x:r.x-i.width,y:p};break;default:d={x:r.x,y:r.y}}switch($i(n)){case"start":d[s]-=f*(t&&c?-1:1);break;case"end":d[s]+=f*(t&&c?-1:1);break}return d}const Gk=async(e,n,t)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=t,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(n));let c=await s.getElementRects({reference:e,floating:n,strategy:i}),{x:u,y:p}=_f(c,r,l),f=r,d={},v=0;for(let m=0;m<a.length;m++){const{name:b,fn:h}=a[m],{x:g,y,data:C,reset:E}=await h({x:u,y:p,initialPlacement:r,placement:f,strategy:i,middlewareData:d,rects:c,platform:s,elements:{reference:e,floating:n}});u=g??u,p=y??p,d={...d,[b]:{...d[b],...C}},E&&v<=50&&(v++,typeof E=="object"&&(E.placement&&(f=E.placement),E.rects&&(c=E.rects===!0?await s.getElementRects({reference:e,floating:n,strategy:i}):E.rects),{x:u,y:p}=_f(c,f,l)),m=-1)}return{x:u,y:p,placement:f,strategy:i,middlewareData:d}};async function $o(e,n){var t;n===void 0&&(n={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:f=!1,padding:d=0}=It(n,e),v=cv(d),b=a[f?p==="floating"?"reference":"floating":p],h=Ma(await o.getClippingRect({element:(t=await(o.isElement==null?void 0:o.isElement(b)))==null||t?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),g=p==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),C=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},E=Ma(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:y,strategy:l}):g);return{top:(h.top-E.top+v.top)/C.y,bottom:(E.bottom-h.bottom+v.bottom)/C.y,left:(h.left-E.left+v.left)/C.x,right:(E.right-h.right+v.right)/C.x}}const qk=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=n,{element:c,padding:u=0}=It(e,n)||{};if(c==null)return{};const p=cv(u),f={x:t,y:r},d=Hd(i),v=jd(d),m=await s.getDimensions(c),b=d==="y",h=b?"top":"left",g=b?"bottom":"right",y=b?"clientHeight":"clientWidth",C=o.reference[v]+o.reference[d]-f[d]-o.floating[v],E=f[d]-o.reference[d],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let A=P?P[y]:0;(!A||!await(s.isElement==null?void 0:s.isElement(P)))&&(A=a.floating[y]||o.floating[v]);const R=C/2-E/2,L=A/2-m[v]/2-1,O=gr(p[h],L),F=gr(p[g],L),I=O,V=A-m[v]-F,z=A/2-m[v]/2+R,W=vu(I,z,V),G=!l.arrow&&$i(i)!=null&&z!==W&&o.reference[v]/2-(z<I?O:F)-m[v]/2<0,$=G?z<I?z-I:z-V:0;return{[d]:f[d]+$,data:{[d]:W,centerOffset:z-W-$,...G&&{alignmentOffset:$}},reset:G}}}),$k=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=n,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...b}=It(e,n);if((t=o.arrow)!=null&&t.alignmentOffset)return{};const h=Dt(i),g=ct(a),y=Dt(a)===a,C=await(l.isRTL==null?void 0:l.isRTL(c.floating)),E=f||(y||!m?[Da(a)]:jk(a)),P=v!=="none";!f&&P&&E.push(...Uk(a,m,v,C));const A=[a,...E],R=await $o(n,b),L=[];let O=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&L.push(R[h]),p){const z=_k(i,s,C);L.push(R[z[0]],R[z[1]])}if(O=[...O,{placement:i,overflows:L}],!L.every(z=>z<=0)){var F,I;const z=(((F=o.flip)==null?void 0:F.index)||0)+1,W=A[z];if(W&&(!(p==="alignment"?g!==ct(W):!1)||O.every(N=>N.overflows[0]>0&&ct(N.placement)===g)))return{data:{index:z,overflows:O},reset:{placement:W}};let G=(I=O.filter($=>$.overflows[0]<=0).sort(($,N)=>$.overflows[1]-N.overflows[1])[0])==null?void 0:I.placement;if(!G)switch(d){case"bestFit":{var V;const $=(V=O.filter(N=>{if(P){const M=ct(N.placement);return M===g||M==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(M=>M>0).reduce((M,x)=>M+x,0)]).sort((N,M)=>N[1]-M[1])[0])==null?void 0:V[0];$&&(G=$);break}case"initialPlacement":G=a;break}if(i!==G)return{reset:{placement:G}}}return{}}}};function jf(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function Hf(e){return Ok.some(n=>e[n]>=0)}const Kk=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:t}=n,{strategy:r="referenceHidden",...i}=It(e,n);switch(r){case"referenceHidden":{const o=await $o(n,{...i,elementContext:"reference"}),s=jf(o,t.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Hf(s)}}}case"escaped":{const o=await $o(n,{...i,altBoundary:!0}),s=jf(o,t.floating);return{data:{escapedOffsets:s,escaped:Hf(s)}}}default:return{}}}}},uv=new Set(["left","top"]);async function Qk(e,n){const{placement:t,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=Dt(t),a=$i(t),l=ct(t)==="y",c=uv.has(s)?-1:1,u=o&&l?-1:1,p=It(n,e);let{mainAxis:f,crossAxis:d,alignmentAxis:v}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof v=="number"&&(d=a==="end"?v*-1:v),l?{x:d*u,y:f*c}:{x:f*c,y:d*u}}const Yk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:i,y:o,placement:s,middlewareData:a}=n,l=await Qk(n,e);return s===((t=a.offset)==null?void 0:t.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},Xk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:i}=n,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:b=>{let{x:h,y:g}=b;return{x:h,y:g}}},...l}=It(e,n),c={x:t,y:r},u=await $o(n,l),p=ct(Dt(i)),f=_d(p);let d=c[f],v=c[p];if(o){const b=f==="y"?"top":"left",h=f==="y"?"bottom":"right",g=d+u[b],y=d-u[h];d=vu(g,d,y)}if(s){const b=p==="y"?"top":"left",h=p==="y"?"bottom":"right",g=v+u[b],y=v-u[h];v=vu(g,v,y)}const m=a.fn({...n,[f]:d,[p]:v});return{...m,data:{x:m.x-t,y:m.y-r,enabled:{[f]:o,[p]:s}}}}}},Jk=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:t,y:r,placement:i,rects:o,middlewareData:s}=n,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=It(e,n),u={x:t,y:r},p=ct(i),f=_d(p);let d=u[f],v=u[p];const m=It(a,n),b=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const y=f==="y"?"height":"width",C=o.reference[f]-o.floating[y]+b.mainAxis,E=o.reference[f]+o.reference[y]-b.mainAxis;d<C?d=C:d>E&&(d=E)}if(c){var h,g;const y=f==="y"?"width":"height",C=uv.has(Dt(i)),E=o.reference[p]-o.floating[y]+(C&&((h=s.offset)==null?void 0:h[p])||0)+(C?0:b.crossAxis),P=o.reference[p]+o.reference[y]+(C?0:((g=s.offset)==null?void 0:g[p])||0)-(C?b.crossAxis:0);v<E?v=E:v>P&&(v=P)}return{[f]:d,[p]:v}}}},Zk=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){var t,r;const{placement:i,rects:o,platform:s,elements:a}=n,{apply:l=()=>{},...c}=It(e,n),u=await $o(n,c),p=Dt(i),f=$i(i),d=ct(i)==="y",{width:v,height:m}=o.floating;let b,h;p==="top"||p==="bottom"?(b=p,h=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(h=p,b=f==="end"?"top":"bottom");const g=m-u.top-u.bottom,y=v-u.left-u.right,C=gr(m-u[b],g),E=gr(v-u[h],y),P=!n.middlewareData.shift;let A=C,R=E;if((t=n.middlewareData.shift)!=null&&t.enabled.x&&(R=y),(r=n.middlewareData.shift)!=null&&r.enabled.y&&(A=g),P&&!f){const O=vn(u.left,0),F=vn(u.right,0),I=vn(u.top,0),V=vn(u.bottom,0);d?R=v-2*(O!==0||F!==0?O+F:vn(u.left,u.right)):A=m-2*(I!==0||V!==0?I+V:vn(u.top,u.bottom))}await l({...n,availableWidth:R,availableHeight:A});const L=await s.getDimensions(a.floating);return v!==L.width||m!==L.height?{reset:{rects:!0}}:{}}}};function cl(){return typeof window<"u"}function Ki(e){return dv(e)?(e.nodeName||"").toLowerCase():"#document"}function kn(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function gt(e){var n;return(n=(dv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function dv(e){return cl()?e instanceof Node||e instanceof kn(e).Node:!1}function Xn(e){return cl()?e instanceof Element||e instanceof kn(e).Element:!1}function ft(e){return cl()?e instanceof HTMLElement||e instanceof kn(e).HTMLElement:!1}function Bf(e){return!cl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof kn(e).ShadowRoot}const eS=new Set(["inline","contents"]);function us(e){const{overflow:n,overflowX:t,overflowY:r,display:i}=Jn(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!eS.has(i)}const nS=new Set(["table","td","th"]);function tS(e){return nS.has(Ki(e))}const rS=[":popover-open",":modal"];function ul(e){return rS.some(n=>{try{return e.matches(n)}catch{return!1}})}const iS=["transform","translate","scale","rotate","perspective"],oS=["transform","translate","scale","rotate","perspective","filter"],sS=["paint","layout","strict","content"];function Bd(e){const n=Wd(),t=Xn(e)?Jn(e):e;return iS.some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||oS.some(r=>(t.willChange||"").includes(r))||sS.some(r=>(t.contain||"").includes(r))}function aS(e){let n=yr(e);for(;ft(n)&&!Hi(n);){if(Bd(n))return n;if(ul(n))return null;n=yr(n)}return null}function Wd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const lS=new Set(["html","body","#document"]);function Hi(e){return lS.has(Ki(e))}function Jn(e){return kn(e).getComputedStyle(e)}function dl(e){return Xn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function yr(e){if(Ki(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Bf(e)&&e.host||gt(e);return Bf(n)?n.host:n}function pv(e){const n=yr(e);return Hi(n)?e.ownerDocument?e.ownerDocument.body:e.body:ft(n)&&us(n)?n:pv(n)}function Ko(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const i=pv(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=kn(i);if(o){const a=xu(s);return n.concat(s,s.visualViewport||[],us(i)?i:[],a&&t?Ko(a):[])}return n.concat(i,Ko(i,[],t))}function xu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function fv(e){const n=Jn(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const i=ft(e),o=i?e.offsetWidth:t,s=i?e.offsetHeight:r,a=Ia(t)!==o||Ia(r)!==s;return a&&(t=o,r=s),{width:t,height:r,$:a}}function Ud(e){return Xn(e)?e:e.contextElement}function ki(e){const n=Ud(e);if(!ft(n))return pt(1);const t=n.getBoundingClientRect(),{width:r,height:i,$:o}=fv(n);let s=(o?Ia(t.width):t.width)/r,a=(o?Ia(t.height):t.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const cS=pt(0);function hv(e){const n=kn(e);return!Wd()||!n.visualViewport?cS:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function uS(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==kn(e)?!1:n}function qr(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const i=e.getBoundingClientRect(),o=Ud(e);let s=pt(1);n&&(r?Xn(r)&&(s=ki(r)):s=ki(e));const a=uS(o,t,r)?hv(o):pt(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,u=i.width/s.x,p=i.height/s.y;if(o){const f=kn(o),d=r&&Xn(r)?kn(r):r;let v=f,m=xu(v);for(;m&&r&&d!==v;){const b=ki(m),h=m.getBoundingClientRect(),g=Jn(m),y=h.left+(m.clientLeft+parseFloat(g.paddingLeft))*b.x,C=h.top+(m.clientTop+parseFloat(g.paddingTop))*b.y;l*=b.x,c*=b.y,u*=b.x,p*=b.y,l+=y,c+=C,v=kn(m),m=xu(v)}}return Ma({width:u,height:p,x:l,y:c})}function Vd(e,n){const t=dl(e).scrollLeft;return n?n.left+t:qr(gt(e)).left+t}function mv(e,n,t){t===void 0&&(t=!1);const r=e.getBoundingClientRect(),i=r.left+n.scrollLeft-(t?0:Vd(e,r)),o=r.top+n.scrollTop;return{x:i,y:o}}function dS(e){let{elements:n,rect:t,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=gt(r),a=n?ul(n.floating):!1;if(r===s||a&&o)return t;let l={scrollLeft:0,scrollTop:0},c=pt(1);const u=pt(0),p=ft(r);if((p||!p&&!o)&&((Ki(r)!=="body"||us(s))&&(l=dl(r)),ft(r))){const d=qr(r);c=ki(r),u.x=d.x+r.clientLeft,u.y=d.y+r.clientTop}const f=s&&!p&&!o?mv(s,l,!0):pt(0);return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+u.x+f.x,y:t.y*c.y-l.scrollTop*c.y+u.y+f.y}}function pS(e){return Array.from(e.getClientRects())}function fS(e){const n=gt(e),t=dl(e),r=e.ownerDocument.body,i=vn(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),o=vn(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let s=-t.scrollLeft+Vd(e);const a=-t.scrollTop;return Jn(r).direction==="rtl"&&(s+=vn(n.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function hS(e,n){const t=kn(e),r=gt(e),i=t.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const c=Wd();(!c||c&&n==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}const mS=new Set(["absolute","fixed"]);function gS(e,n){const t=qr(e,!0,n==="fixed"),r=t.top+e.clientTop,i=t.left+e.clientLeft,o=ft(e)?ki(e):pt(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,c=r*o.y;return{width:s,height:a,x:l,y:c}}function Wf(e,n,t){let r;if(n==="viewport")r=hS(e,t);else if(n==="document")r=fS(gt(e));else if(Xn(n))r=gS(n,t);else{const i=hv(e);r={x:n.x-i.x,y:n.y-i.y,width:n.width,height:n.height}}return Ma(r)}function gv(e,n){const t=yr(e);return t===n||!Xn(t)||Hi(t)?!1:Jn(t).position==="fixed"||gv(t,n)}function yS(e,n){const t=n.get(e);if(t)return t;let r=Ko(e,[],!1).filter(a=>Xn(a)&&Ki(a)!=="body"),i=null;const o=Jn(e).position==="fixed";let s=o?yr(e):e;for(;Xn(s)&&!Hi(s);){const a=Jn(s),l=Bd(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&mS.has(i.position)||us(s)&&!l&&gv(e,s))?r=r.filter(u=>u!==s):i=a,s=yr(s)}return n.set(e,r),r}function vS(e){let{element:n,boundary:t,rootBoundary:r,strategy:i}=e;const s=[...t==="clippingAncestors"?ul(n)?[]:yS(n,this._c):[].concat(t),r],a=s[0],l=s.reduce((c,u)=>{const p=Wf(n,u,i);return c.top=vn(p.top,c.top),c.right=gr(p.right,c.right),c.bottom=gr(p.bottom,c.bottom),c.left=vn(p.left,c.left),c},Wf(n,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function bS(e){const{width:n,height:t}=fv(e);return{width:n,height:t}}function xS(e,n,t){const r=ft(n),i=gt(n),o=t==="fixed",s=qr(e,!0,o,n);let a={scrollLeft:0,scrollTop:0};const l=pt(0);function c(){l.x=Vd(i)}if(r||!r&&!o)if((Ki(n)!=="body"||us(i))&&(a=dl(n)),r){const d=qr(n,!0,o,n);l.x=d.x+n.clientLeft,l.y=d.y+n.clientTop}else i&&c();o&&!r&&i&&c();const u=i&&!r&&!o?mv(i,a):pt(0),p=s.left+a.scrollLeft-l.x-u.x,f=s.top+a.scrollTop-l.y-u.y;return{x:p,y:f,width:s.width,height:s.height}}function rc(e){return Jn(e).position==="static"}function Uf(e,n){if(!ft(e)||Jn(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return gt(e)===t&&(t=t.ownerDocument.body),t}function yv(e,n){const t=kn(e);if(ul(e))return t;if(!ft(e)){let i=yr(e);for(;i&&!Hi(i);){if(Xn(i)&&!rc(i))return i;i=yr(i)}return t}let r=Uf(e,n);for(;r&&tS(r)&&rc(r);)r=Uf(r,n);return r&&Hi(r)&&rc(r)&&!Bd(r)?t:r||aS(e)||t}const wS=async function(e){const n=this.getOffsetParent||yv,t=this.getDimensions,r=await t(e.floating);return{reference:xS(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function kS(e){return Jn(e).direction==="rtl"}const SS={convertOffsetParentRelativeRectToViewportRelativeRect:dS,getDocumentElement:gt,getClippingRect:vS,getOffsetParent:yv,getElementRects:wS,getClientRects:pS,getDimensions:bS,getScale:ki,isElement:Xn,isRTL:kS};function vv(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function CS(e,n){let t=null,r;const i=gt(e);function o(){var a;clearTimeout(r),(a=t)==null||a.disconnect(),t=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const c=e.getBoundingClientRect(),{left:u,top:p,width:f,height:d}=c;if(a||n(),!f||!d)return;const v=Fs(p),m=Fs(i.clientWidth-(u+f)),b=Fs(i.clientHeight-(p+d)),h=Fs(u),y={rootMargin:-v+"px "+-m+"px "+-b+"px "+-h+"px",threshold:vn(0,gr(1,l))||1};let C=!0;function E(P){const A=P[0].intersectionRatio;if(A!==l){if(!C)return s();A?s(!1,A):r=setTimeout(()=>{s(!1,1e-7)},1e3)}A===1&&!vv(c,e.getBoundingClientRect())&&s(),C=!1}try{t=new IntersectionObserver(E,{...y,root:i.ownerDocument})}catch{t=new IntersectionObserver(E,y)}t.observe(e)}return s(!0),o}function PS(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=Ud(e),u=i||o?[...c?Ko(c):[],...Ko(n)]:[];u.forEach(h=>{i&&h.addEventListener("scroll",t,{passive:!0}),o&&h.addEventListener("resize",t)});const p=c&&a?CS(c,t):null;let f=-1,d=null;s&&(d=new ResizeObserver(h=>{let[g]=h;g&&g.target===c&&d&&(d.unobserve(n),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var y;(y=d)==null||y.observe(n)})),t()}),c&&!l&&d.observe(c),d.observe(n));let v,m=l?qr(e):null;l&&b();function b(){const h=qr(e);m&&!vv(m,h)&&t(),m=h,v=requestAnimationFrame(b)}return t(),()=>{var h;u.forEach(g=>{i&&g.removeEventListener("scroll",t),o&&g.removeEventListener("resize",t)}),p==null||p(),(h=d)==null||h.disconnect(),d=null,l&&cancelAnimationFrame(v)}}const ES=Yk,AS=Xk,TS=$k,NS=Zk,RS=Kk,Vf=qk,IS=Jk,DS=(e,n,t)=>{const r=new Map,i={platform:SS,...t},o={...i.platform,_c:r};return Gk(e,n,{...i,platform:o})};var MS=typeof document<"u",OS=function(){},na=MS?w.useLayoutEffect:OS;function Oa(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,i;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!Oa(e[r],n[r]))return!1;return!0}if(i=Object.keys(e),t=i.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,i[r]))return!1;for(r=t;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!Oa(e[o],n[o]))return!1}return!0}return e!==e&&n!==n}function bv(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Gf(e,n){const t=bv(e);return Math.round(n*t)/t}function ic(e){const n=w.useRef(e);return na(()=>{n.current=e}),n}function LS(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=e,[u,p]=w.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[f,d]=w.useState(r);Oa(f,r)||d(r);const[v,m]=w.useState(null),[b,h]=w.useState(null),g=w.useCallback(N=>{N!==P.current&&(P.current=N,m(N))},[]),y=w.useCallback(N=>{N!==A.current&&(A.current=N,h(N))},[]),C=o||v,E=s||b,P=w.useRef(null),A=w.useRef(null),R=w.useRef(u),L=l!=null,O=ic(l),F=ic(i),I=ic(c),V=w.useCallback(()=>{if(!P.current||!A.current)return;const N={placement:n,strategy:t,middleware:f};F.current&&(N.platform=F.current),DS(P.current,A.current,N).then(M=>{const x={...M,isPositioned:I.current!==!1};z.current&&!Oa(R.current,x)&&(R.current=x,ls.flushSync(()=>{p(x)}))})},[f,n,t,F,I]);na(()=>{c===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,p(N=>({...N,isPositioned:!1})))},[c]);const z=w.useRef(!1);na(()=>(z.current=!0,()=>{z.current=!1}),[]),na(()=>{if(C&&(P.current=C),E&&(A.current=E),C&&E){if(O.current)return O.current(C,E,V);V()}},[C,E,V,O,L]);const W=w.useMemo(()=>({reference:P,floating:A,setReference:g,setFloating:y}),[g,y]),G=w.useMemo(()=>({reference:C,floating:E}),[C,E]),$=w.useMemo(()=>{const N={position:t,left:0,top:0};if(!G.floating)return N;const M=Gf(G.floating,u.x),x=Gf(G.floating,u.y);return a?{...N,transform:"translate("+M+"px, "+x+"px)",...bv(G.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:M,top:x}},[t,a,G.floating,u.x,u.y]);return w.useMemo(()=>({...u,update:V,refs:W,elements:G,floatingStyles:$}),[u,V,W,G,$])}const FS=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:i}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?Vf({element:r.current,padding:i}).fn(t):{}:r?Vf({element:r,padding:i}).fn(t):{}}}},zS=(e,n)=>({...ES(e),options:[e,n]}),_S=(e,n)=>({...AS(e),options:[e,n]}),jS=(e,n)=>({...IS(e),options:[e,n]}),HS=(e,n)=>({...TS(e),options:[e,n]}),BS=(e,n)=>({...NS(e),options:[e,n]}),WS=(e,n)=>({...RS(e),options:[e,n]}),US=(e,n)=>({...FS(e),options:[e,n]});var VS="Arrow",xv=w.forwardRef((e,n)=>{const{children:t,width:r=10,height:i=5,...o}=e;return k.jsx(dn.svg,{...o,ref:n,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:k.jsx("polygon",{points:"0,0 30,0 15,10"})})});xv.displayName=VS;var GS=xv;function qS(e){const[n,t]=w.useState(void 0);return mr(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=e.offsetWidth,a=e.offsetHeight;t({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else t(void 0)},[e]),n}var wv="Popper",[kv,Sv]=sl(wv),[o2,Cv]=kv(wv),Pv="PopperAnchor",Ev=w.forwardRef((e,n)=>{const{__scopePopper:t,virtualRef:r,...i}=e,o=Cv(Pv,t),s=w.useRef(null),a=Yn(n,s);return w.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:k.jsx(dn.div,{...i,ref:a})});Ev.displayName=Pv;var Gd="PopperContent",[$S,KS]=kv(Gd),Av=w.forwardRef((e,n)=>{var ie,qe,$e,en,fn,Ot;const{__scopePopper:t,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:p="partial",hideWhenDetached:f=!1,updatePositionStrategy:d="optimized",onPlaced:v,...m}=e,b=Cv(Gd,t),[h,g]=w.useState(null),y=Yn(n,Zn=>g(Zn)),[C,E]=w.useState(null),P=qS(C),A=(P==null?void 0:P.width)??0,R=(P==null?void 0:P.height)??0,L=r+(o!=="center"?"-"+o:""),O=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},F=Array.isArray(c)?c:[c],I=F.length>0,V={padding:O,boundary:F.filter(YS),altBoundary:I},{refs:z,floatingStyles:W,placement:G,isPositioned:$,middlewareData:N}=LS({strategy:"fixed",placement:L,whileElementsMounted:(...Zn)=>PS(...Zn,{animationFrame:d==="always"}),elements:{reference:b.anchor},middleware:[zS({mainAxis:i+R,alignmentAxis:s}),l&&_S({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?jS():void 0,...V}),l&&HS({...V}),BS({...V,apply:({elements:Zn,rects:Xr,availableWidth:Jr,availableHeight:Sr})=>{const{width:Zr,height:Cr}=Xr.reference,yt=Zn.floating.style;yt.setProperty("--radix-popper-available-width",`${Jr}px`),yt.setProperty("--radix-popper-available-height",`${Sr}px`),yt.setProperty("--radix-popper-anchor-width",`${Zr}px`),yt.setProperty("--radix-popper-anchor-height",`${Cr}px`)}}),C&&US({element:C,padding:a}),XS({arrowWidth:A,arrowHeight:R}),f&&WS({strategy:"referenceHidden",...V})]}),[M,x]=Rv(G),K=hr(v);mr(()=>{$&&(K==null||K())},[$,K]);const q=(ie=N.arrow)==null?void 0:ie.x,S=(qe=N.arrow)==null?void 0:qe.y,Q=(($e=N.arrow)==null?void 0:$e.centerOffset)!==0,[de,oe]=w.useState();return mr(()=>{h&&oe(window.getComputedStyle(h).zIndex)},[h]),k.jsx("div",{ref:z.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:$?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:de,"--radix-popper-transform-origin":[(en=N.transformOrigin)==null?void 0:en.x,(fn=N.transformOrigin)==null?void 0:fn.y].join(" "),...((Ot=N.hide)==null?void 0:Ot.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:k.jsx($S,{scope:t,placedSide:M,onArrowChange:E,arrowX:q,arrowY:S,shouldHideArrow:Q,children:k.jsx(dn.div,{"data-side":M,"data-align":x,...m,ref:y,style:{...m.style,animation:$?void 0:"none"}})})})});Av.displayName=Gd;var Tv="PopperArrow",QS={top:"bottom",right:"left",bottom:"top",left:"right"},Nv=w.forwardRef(function(n,t){const{__scopePopper:r,...i}=n,o=KS(Tv,r),s=QS[o.placedSide];return k.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:k.jsx(GS,{...i,ref:t,style:{...i.style,display:"block"}})})});Nv.displayName=Tv;function YS(e){return e!==null}var XS=e=>({name:"transformOrigin",options:e,fn(n){var b,h,g;const{placement:t,rects:r,middlewareData:i}=n,s=((b=i.arrow)==null?void 0:b.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[c,u]=Rv(t),p={start:"0%",center:"50%",end:"100%"}[u],f=(((h=i.arrow)==null?void 0:h.x)??0)+a/2,d=(((g=i.arrow)==null?void 0:g.y)??0)+l/2;let v="",m="";return c==="bottom"?(v=s?p:`${f}px`,m=`${-l}px`):c==="top"?(v=s?p:`${f}px`,m=`${r.floating.height+l}px`):c==="right"?(v=`${-l}px`,m=s?p:`${d}px`):c==="left"&&(v=`${r.floating.width+l}px`,m=s?p:`${d}px`),{data:{x:v,y:m}}}});function Rv(e){const[n,t="center"]=e.split("-");return[n,t]}var JS=Ev,ZS=Av,eC=Nv,[pl,s2]=sl("Tooltip",[Sv]),qd=Sv(),Iv="TooltipProvider",nC=700,qf="tooltip.open",[tC,Dv]=pl(Iv),Mv=e=>{const{__scopeTooltip:n,delayDuration:t=nC,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=e,s=w.useRef(!0),a=w.useRef(!1),l=w.useRef(0);return w.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),k.jsx(tC,{scope:n,isOpenDelayedRef:s,delayDuration:t,onOpen:w.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:w.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:w.useCallback(c=>{a.current=c},[]),disableHoverableContent:i,children:o})};Mv.displayName=Iv;var Ov="Tooltip",[a2,fl]=pl(Ov),wu="TooltipTrigger",rC=w.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,i=fl(wu,t),o=Dv(wu,t),s=qd(t),a=w.useRef(null),l=Yn(n,a,i.onTriggerChange),c=w.useRef(!1),u=w.useRef(!1),p=w.useCallback(()=>c.current=!1,[]);return w.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),k.jsx(JS,{asChild:!0,...s,children:k.jsx(dn.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:De(e.onPointerMove,f=>{f.pointerType!=="touch"&&!u.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:De(e.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:De(e.onPointerDown,()=>{i.open&&i.onClose(),c.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:De(e.onFocus,()=>{c.current||i.onOpen()}),onBlur:De(e.onBlur,i.onClose),onClick:De(e.onClick,i.onClose)})})});rC.displayName=wu;var iC="TooltipPortal",[l2,oC]=pl(iC,{forceMount:void 0}),Bi="TooltipContent",Lv=w.forwardRef((e,n)=>{const t=oC(Bi,e.__scopeTooltip),{forceMount:r=t.forceMount,side:i="top",...o}=e,s=fl(Bi,e.__scopeTooltip);return k.jsx(Md,{present:r||s.open,children:s.disableHoverableContent?k.jsx(Fv,{side:i,...o,ref:n}):k.jsx(sC,{side:i,...o,ref:n})})}),sC=w.forwardRef((e,n)=>{const t=fl(Bi,e.__scopeTooltip),r=Dv(Bi,e.__scopeTooltip),i=w.useRef(null),o=Yn(n,i),[s,a]=w.useState(null),{trigger:l,onClose:c}=t,u=i.current,{onPointerInTransitChange:p}=r,f=w.useCallback(()=>{a(null),p(!1)},[p]),d=w.useCallback((v,m)=>{const b=v.currentTarget,h={x:v.clientX,y:v.clientY},g=dC(h,b.getBoundingClientRect()),y=pC(h,g),C=fC(m.getBoundingClientRect()),E=mC([...y,...C]);a(E),p(!0)},[p]);return w.useEffect(()=>()=>f(),[f]),w.useEffect(()=>{if(l&&u){const v=b=>d(b,u),m=b=>d(b,l);return l.addEventListener("pointerleave",v),u.addEventListener("pointerleave",m),()=>{l.removeEventListener("pointerleave",v),u.removeEventListener("pointerleave",m)}}},[l,u,d,f]),w.useEffect(()=>{if(s){const v=m=>{const b=m.target,h={x:m.clientX,y:m.clientY},g=(l==null?void 0:l.contains(b))||(u==null?void 0:u.contains(b)),y=!hC(h,s);g?f():y&&(f(),c())};return document.addEventListener("pointermove",v),()=>document.removeEventListener("pointermove",v)}},[l,u,s,c,f]),k.jsx(Fv,{...e,ref:o})}),[aC,lC]=pl(Ov,{isInside:!1}),cC=S0("TooltipContent"),Fv=w.forwardRef((e,n)=>{const{__scopeTooltip:t,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=e,l=fl(Bi,t),c=qd(t),{onClose:u}=l;return w.useEffect(()=>(document.addEventListener(qf,u),()=>document.removeEventListener(qf,u)),[u]),w.useEffect(()=>{if(l.trigger){const p=f=>{const d=f.target;d!=null&&d.contains(l.trigger)&&u()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[l.trigger,u]),k.jsx(Dd,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:u,children:k.jsxs(ZS,{"data-state":l.stateAttribute,...c,...a,ref:n,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[k.jsx(cC,{children:r}),k.jsx(aC,{scope:t,isInside:!0,children:k.jsx(K0,{id:l.contentId,role:"tooltip",children:i||r})})]})})});Lv.displayName=Bi;var zv="TooltipArrow",uC=w.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,i=qd(t);return lC(zv,t).isInside?null:k.jsx(eC,{...i,...r,ref:n})});uC.displayName=zv;function dC(e,n){const t=Math.abs(n.top-e.y),r=Math.abs(n.bottom-e.y),i=Math.abs(n.right-e.x),o=Math.abs(n.left-e.x);switch(Math.min(t,r,i,o)){case o:return"left";case i:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function pC(e,n,t=5){const r=[];switch(n){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function fC(e){const{top:n,right:t,bottom:r,left:i}=e;return[{x:i,y:n},{x:t,y:n},{x:t,y:r},{x:i,y:r}]}function hC(e,n){const{x:t,y:r}=e;let i=!1;for(let o=0,s=n.length-1;o<n.length;s=o++){const a=n[o],l=n[s],c=a.x,u=a.y,p=l.x,f=l.y;u>r!=f>r&&t<(p-c)*(r-u)/(f-u)+c&&(i=!i)}return i}function mC(e){const n=e.slice();return n.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),gC(n)}function gC(e){if(e.length<=1)return e.slice();const n=[];for(let r=0;r<e.length;r++){const i=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}n.pop();const t=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}var yC=Mv,_v=Lv;const vC=yC,bC=w.forwardRef(({className:e,sideOffset:n=4,...t},r)=>k.jsx(_v,{ref:r,sideOffset:n,className:un("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));bC.displayName=_v.displayName;var hl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ml=typeof window>"u"||"Deno"in globalThis;function Wn(){}function xC(e,n){return typeof e=="function"?e(n):e}function wC(e){return typeof e=="number"&&e>=0&&e!==1/0}function kC(e,n){return Math.max(e+(n||0)-Date.now(),0)}function ku(e,n){return typeof e=="function"?e(n):e}function SC(e,n){return typeof e=="function"?e(n):e}function $f(e,n){const{type:t="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(s){if(r){if(n.queryHash!==$d(s,n.options))return!1}else if(!Yo(n.queryKey,s))return!1}if(t!=="all"){const l=n.isActive();if(t==="active"&&!l||t==="inactive"&&l)return!1}return!(typeof a=="boolean"&&n.isStale()!==a||i&&i!==n.state.fetchStatus||o&&!o(n))}function Kf(e,n){const{exact:t,status:r,predicate:i,mutationKey:o}=e;if(o){if(!n.options.mutationKey)return!1;if(t){if(Qo(n.options.mutationKey)!==Qo(o))return!1}else if(!Yo(n.options.mutationKey,o))return!1}return!(r&&n.state.status!==r||i&&!i(n))}function $d(e,n){return((n==null?void 0:n.queryKeyHashFn)||Qo)(e)}function Qo(e){return JSON.stringify(e,(n,t)=>Su(t)?Object.keys(t).sort().reduce((r,i)=>(r[i]=t[i],r),{}):t)}function Yo(e,n){return e===n?!0:typeof e!=typeof n?!1:e&&n&&typeof e=="object"&&typeof n=="object"?Object.keys(n).every(t=>Yo(e[t],n[t])):!1}function jv(e,n){if(e===n)return e;const t=Qf(e)&&Qf(n);if(t||Su(e)&&Su(n)){const r=t?e:Object.keys(e),i=r.length,o=t?n:Object.keys(n),s=o.length,a=t?[]:{},l=new Set(r);let c=0;for(let u=0;u<s;u++){const p=t?u:o[u];(!t&&l.has(p)||t)&&e[p]===void 0&&n[p]===void 0?(a[p]=void 0,c++):(a[p]=jv(e[p],n[p]),a[p]===e[p]&&e[p]!==void 0&&c++)}return i===s&&c===i?e:a}return n}function Qf(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Su(e){if(!Yf(e))return!1;const n=e.constructor;if(n===void 0)return!0;const t=n.prototype;return!(!Yf(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Yf(e){return Object.prototype.toString.call(e)==="[object Object]"}function CC(e){return new Promise(n=>{setTimeout(n,e)})}function PC(e,n,t){return typeof t.structuralSharing=="function"?t.structuralSharing(e,n):t.structuralSharing!==!1?jv(e,n):n}function EC(e,n,t=0){const r=[...e,n];return t&&r.length>t?r.slice(1):r}function AC(e,n,t=0){const r=[n,...e];return t&&r.length>t?r.slice(0,-1):r}var Kd=Symbol();function Hv(e,n){return!e.queryFn&&(n!=null&&n.initialPromise)?()=>n.initialPromise:!e.queryFn||e.queryFn===Kd?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Mr,Qt,Pi,Jh,TC=(Jh=class extends hl{constructor(){super();le(this,Mr);le(this,Qt);le(this,Pi);Z(this,Pi,n=>{if(!ml&&window.addEventListener){const t=()=>n();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){D(this,Qt)||this.setEventListener(D(this,Pi))}onUnsubscribe(){var n;this.hasListeners()||((n=D(this,Qt))==null||n.call(this),Z(this,Qt,void 0))}setEventListener(n){var t;Z(this,Pi,n),(t=D(this,Qt))==null||t.call(this),Z(this,Qt,n(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(n){D(this,Mr)!==n&&(Z(this,Mr,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(t=>{t(n)})}isFocused(){var n;return typeof D(this,Mr)=="boolean"?D(this,Mr):((n=globalThis.document)==null?void 0:n.visibilityState)!=="hidden"}},Mr=new WeakMap,Qt=new WeakMap,Pi=new WeakMap,Jh),Bv=new TC,Ei,Yt,Ai,Zh,NC=(Zh=class extends hl{constructor(){super();le(this,Ei,!0);le(this,Yt);le(this,Ai);Z(this,Ai,n=>{if(!ml&&window.addEventListener){const t=()=>n(!0),r=()=>n(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){D(this,Yt)||this.setEventListener(D(this,Ai))}onUnsubscribe(){var n;this.hasListeners()||((n=D(this,Yt))==null||n.call(this),Z(this,Yt,void 0))}setEventListener(n){var t;Z(this,Ai,n),(t=D(this,Yt))==null||t.call(this),Z(this,Yt,n(this.setOnline.bind(this)))}setOnline(n){D(this,Ei)!==n&&(Z(this,Ei,n),this.listeners.forEach(r=>{r(n)}))}isOnline(){return D(this,Ei)}},Ei=new WeakMap,Yt=new WeakMap,Ai=new WeakMap,Zh),La=new NC;function RC(){let e,n;const t=new Promise((i,o)=>{e=i,n=o});t.status="pending",t.catch(()=>{});function r(i){Object.assign(t,i),delete t.resolve,delete t.reject}return t.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},t.reject=i=>{r({status:"rejected",reason:i}),n(i)},t}function IC(e){return Math.min(1e3*2**e,3e4)}function Wv(e){return(e??"online")==="online"?La.isOnline():!0}var Uv=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function oc(e){return e instanceof Uv}function Vv(e){let n=!1,t=0,r=!1,i;const o=RC(),s=m=>{var b;r||(f(new Uv(m)),(b=e.abort)==null||b.call(e))},a=()=>{n=!0},l=()=>{n=!1},c=()=>Bv.isFocused()&&(e.networkMode==="always"||La.isOnline())&&e.canRun(),u=()=>Wv(e.networkMode)&&e.canRun(),p=m=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,m),i==null||i(),o.resolve(m))},f=m=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,m),i==null||i(),o.reject(m))},d=()=>new Promise(m=>{var b;i=h=>{(r||c())&&m(h)},(b=e.onPause)==null||b.call(e)}).then(()=>{var m;i=void 0,r||(m=e.onContinue)==null||m.call(e)}),v=()=>{if(r)return;let m;const b=t===0?e.initialPromise:void 0;try{m=b??e.fn()}catch(h){m=Promise.reject(h)}Promise.resolve(m).then(p).catch(h=>{var P;if(r)return;const g=e.retry??(ml?0:3),y=e.retryDelay??IC,C=typeof y=="function"?y(t,h):y,E=g===!0||typeof g=="number"&&t<g||typeof g=="function"&&g(t,h);if(n||!E){f(h);return}t++,(P=e.onFail)==null||P.call(e,t,h),CC(C).then(()=>c()?void 0:d()).then(()=>{n?f(h):v()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():d().then(v),o)}}var DC=e=>setTimeout(e,0);function MC(){let e=[],n=0,t=a=>{a()},r=a=>{a()},i=DC;const o=a=>{n?e.push(a):i(()=>{t(a)})},s=()=>{const a=e;e=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{t(l)})})})};return{batch:a=>{let l;n++;try{l=a()}finally{n--,n||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{t=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var Ye=MC(),Or,em,Gv=(em=class{constructor(){le(this,Or)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),wC(this.gcTime)&&Z(this,Or,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(ml?1/0:5*60*1e3))}clearGcTimeout(){D(this,Or)&&(clearTimeout(D(this,Or)),Z(this,Or,void 0))}},Or=new WeakMap,em),Ti,Lr,An,Fr,We,ns,zr,Un,xt,nm,OC=(nm=class extends Gv{constructor(n){super();le(this,Un);le(this,Ti);le(this,Lr);le(this,An);le(this,Fr);le(this,We);le(this,ns);le(this,zr);Z(this,zr,!1),Z(this,ns,n.defaultOptions),this.setOptions(n.options),this.observers=[],Z(this,Fr,n.client),Z(this,An,D(this,Fr).getQueryCache()),this.queryKey=n.queryKey,this.queryHash=n.queryHash,Z(this,Ti,FC(this.options)),this.state=n.state??D(this,Ti),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var n;return(n=D(this,We))==null?void 0:n.promise}setOptions(n){this.options={...D(this,ns),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&D(this,An).remove(this)}setData(n,t){const r=PC(this.state.data,n,this.options);return je(this,Un,xt).call(this,{data:r,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),r}setState(n,t){je(this,Un,xt).call(this,{type:"setState",state:n,setStateOptions:t})}cancel(n){var r,i;const t=(r=D(this,We))==null?void 0:r.promise;return(i=D(this,We))==null||i.cancel(n),t?t.then(Wn).catch(Wn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(D(this,Ti))}isActive(){return this.observers.some(n=>SC(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Kd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>ku(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!kC(this.state.dataUpdatedAt,n)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(t=D(this,We))==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(t=D(this,We))==null||t.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),D(this,An).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(t=>t!==n),this.observers.length||(D(this,We)&&(D(this,zr)?D(this,We).cancel({revert:!0}):D(this,We).cancelRetry()),this.scheduleGc()),D(this,An).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||je(this,Un,xt).call(this,{type:"invalidate"})}fetch(n,t){var c,u,p;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(D(this,We))return D(this,We).continueRetry(),D(this,We).promise}if(n&&this.setOptions(n),!this.options.queryFn){const f=this.observers.find(d=>d.options.queryFn);f&&this.setOptions(f.options)}const r=new AbortController,i=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(Z(this,zr,!0),r.signal)})},o=()=>{const f=Hv(this.options,t),v=(()=>{const m={client:D(this,Fr),queryKey:this.queryKey,meta:this.meta};return i(m),m})();return Z(this,zr,!1),this.options.persister?this.options.persister(f,v,this):f(v)},a=(()=>{const f={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:D(this,Fr),state:this.state,fetchFn:o};return i(f),f})();(c=this.options.behavior)==null||c.onFetch(a,this),Z(this,Lr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&je(this,Un,xt).call(this,{type:"fetch",meta:(p=a.fetchOptions)==null?void 0:p.meta});const l=f=>{var d,v,m,b;oc(f)&&f.silent||je(this,Un,xt).call(this,{type:"error",error:f}),oc(f)||((v=(d=D(this,An).config).onError)==null||v.call(d,f,this),(b=(m=D(this,An).config).onSettled)==null||b.call(m,this.state.data,f,this)),this.scheduleGc()};return Z(this,We,Vv({initialPromise:t==null?void 0:t.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:f=>{var d,v,m,b;if(f===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(h){l(h);return}(v=(d=D(this,An).config).onSuccess)==null||v.call(d,f,this),(b=(m=D(this,An).config).onSettled)==null||b.call(m,f,this.state.error,this),this.scheduleGc()},onError:l,onFail:(f,d)=>{je(this,Un,xt).call(this,{type:"failed",failureCount:f,error:d})},onPause:()=>{je(this,Un,xt).call(this,{type:"pause"})},onContinue:()=>{je(this,Un,xt).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),D(this,We).start()}},Ti=new WeakMap,Lr=new WeakMap,An=new WeakMap,Fr=new WeakMap,We=new WeakMap,ns=new WeakMap,zr=new WeakMap,Un=new WeakSet,xt=function(n){const t=r=>{switch(n.type){case"failed":return{...r,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...LC(r.data,this.options),fetchMeta:n.meta??null};case"success":return Z(this,Lr,void 0),{...r,data:n.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=n.error;return oc(i)&&i.revert&&D(this,Lr)?{...D(this,Lr),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...n.state}}};this.state=t(this.state),Ye.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),D(this,An).notify({query:this,type:"updated",action:n})})},nm);function LC(e,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Wv(n.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function FC(e){const n=typeof e.initialData=="function"?e.initialData():e.initialData,t=n!==void 0,r=t?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var it,tm,zC=(tm=class extends hl{constructor(n={}){super();le(this,it);this.config=n,Z(this,it,new Map)}build(n,t,r){const i=t.queryKey,o=t.queryHash??$d(i,t);let s=this.get(o);return s||(s=new OC({client:n,queryKey:i,queryHash:o,options:n.defaultQueryOptions(t),state:r,defaultOptions:n.getQueryDefaults(i)}),this.add(s)),s}add(n){D(this,it).has(n.queryHash)||(D(this,it).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const t=D(this,it).get(n.queryHash);t&&(n.destroy(),t===n&&D(this,it).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Ye.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return D(this,it).get(n)}getAll(){return[...D(this,it).values()]}find(n){const t={exact:!0,...n};return this.getAll().find(r=>$f(t,r))}findAll(n={}){const t=this.getAll();return Object.keys(n).length>0?t.filter(r=>$f(n,r)):t}notify(n){Ye.batch(()=>{this.listeners.forEach(t=>{t(n)})})}onFocus(){Ye.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Ye.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},it=new WeakMap,tm),ot,Ke,_r,st,Vt,rm,_C=(rm=class extends Gv{constructor(n){super();le(this,st);le(this,ot);le(this,Ke);le(this,_r);this.mutationId=n.mutationId,Z(this,Ke,n.mutationCache),Z(this,ot,[]),this.state=n.state||jC(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){D(this,ot).includes(n)||(D(this,ot).push(n),this.clearGcTimeout(),D(this,Ke).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){Z(this,ot,D(this,ot).filter(t=>t!==n)),this.scheduleGc(),D(this,Ke).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){D(this,ot).length||(this.state.status==="pending"?this.scheduleGc():D(this,Ke).remove(this))}continue(){var n;return((n=D(this,_r))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var o,s,a,l,c,u,p,f,d,v,m,b,h,g,y,C,E,P,A,R;const t=()=>{je(this,st,Vt).call(this,{type:"continue"})};Z(this,_r,Vv({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(L,O)=>{je(this,st,Vt).call(this,{type:"failed",failureCount:L,error:O})},onPause:()=>{je(this,st,Vt).call(this,{type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>D(this,Ke).canRun(this)}));const r=this.state.status==="pending",i=!D(this,_r).canStart();try{if(r)t();else{je(this,st,Vt).call(this,{type:"pending",variables:n,isPaused:i}),await((s=(o=D(this,Ke).config).onMutate)==null?void 0:s.call(o,n,this));const O=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,n));O!==this.state.context&&je(this,st,Vt).call(this,{type:"pending",context:O,variables:n,isPaused:i})}const L=await D(this,_r).start();return await((u=(c=D(this,Ke).config).onSuccess)==null?void 0:u.call(c,L,n,this.state.context,this)),await((f=(p=this.options).onSuccess)==null?void 0:f.call(p,L,n,this.state.context)),await((v=(d=D(this,Ke).config).onSettled)==null?void 0:v.call(d,L,null,this.state.variables,this.state.context,this)),await((b=(m=this.options).onSettled)==null?void 0:b.call(m,L,null,n,this.state.context)),je(this,st,Vt).call(this,{type:"success",data:L}),L}catch(L){try{throw await((g=(h=D(this,Ke).config).onError)==null?void 0:g.call(h,L,n,this.state.context,this)),await((C=(y=this.options).onError)==null?void 0:C.call(y,L,n,this.state.context)),await((P=(E=D(this,Ke).config).onSettled)==null?void 0:P.call(E,void 0,L,this.state.variables,this.state.context,this)),await((R=(A=this.options).onSettled)==null?void 0:R.call(A,void 0,L,n,this.state.context)),L}finally{je(this,st,Vt).call(this,{type:"error",error:L})}}finally{D(this,Ke).runNext(this)}}},ot=new WeakMap,Ke=new WeakMap,_r=new WeakMap,st=new WeakSet,Vt=function(n){const t=r=>{switch(n.type){case"failed":return{...r,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...r,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:n.error,failureCount:r.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=t(this.state),Ye.batch(()=>{D(this,ot).forEach(r=>{r.onMutationUpdate(n)}),D(this,Ke).notify({mutation:this,type:"updated",action:n})})},rm);function jC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var St,Vn,ts,im,HC=(im=class extends hl{constructor(n={}){super();le(this,St);le(this,Vn);le(this,ts);this.config=n,Z(this,St,new Set),Z(this,Vn,new Map),Z(this,ts,0)}build(n,t,r){const i=new _C({mutationCache:this,mutationId:++ms(this,ts)._,options:n.defaultMutationOptions(t),state:r});return this.add(i),i}add(n){D(this,St).add(n);const t=zs(n);if(typeof t=="string"){const r=D(this,Vn).get(t);r?r.push(n):D(this,Vn).set(t,[n])}this.notify({type:"added",mutation:n})}remove(n){if(D(this,St).delete(n)){const t=zs(n);if(typeof t=="string"){const r=D(this,Vn).get(t);if(r)if(r.length>1){const i=r.indexOf(n);i!==-1&&r.splice(i,1)}else r[0]===n&&D(this,Vn).delete(t)}}this.notify({type:"removed",mutation:n})}canRun(n){const t=zs(n);if(typeof t=="string"){const r=D(this,Vn).get(t),i=r==null?void 0:r.find(o=>o.state.status==="pending");return!i||i===n}else return!0}runNext(n){var r;const t=zs(n);if(typeof t=="string"){const i=(r=D(this,Vn).get(t))==null?void 0:r.find(o=>o!==n&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Ye.batch(()=>{D(this,St).forEach(n=>{this.notify({type:"removed",mutation:n})}),D(this,St).clear(),D(this,Vn).clear()})}getAll(){return Array.from(D(this,St))}find(n){const t={exact:!0,...n};return this.getAll().find(r=>Kf(t,r))}findAll(n={}){return this.getAll().filter(t=>Kf(n,t))}notify(n){Ye.batch(()=>{this.listeners.forEach(t=>{t(n)})})}resumePausedMutations(){const n=this.getAll().filter(t=>t.state.isPaused);return Ye.batch(()=>Promise.all(n.map(t=>t.continue().catch(Wn))))}},St=new WeakMap,Vn=new WeakMap,ts=new WeakMap,im);function zs(e){var n;return(n=e.options.scope)==null?void 0:n.id}function Xf(e){return{onFetch:(n,t)=>{var u,p,f,d,v;const r=n.options,i=(f=(p=(u=n.fetchOptions)==null?void 0:u.meta)==null?void 0:p.fetchMore)==null?void 0:f.direction,o=((d=n.state.data)==null?void 0:d.pages)||[],s=((v=n.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let m=!1;const b=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(n.signal.aborted?m=!0:n.signal.addEventListener("abort",()=>{m=!0}),n.signal)})},h=Hv(n.options,n.fetchOptions),g=async(y,C,E)=>{if(m)return Promise.reject();if(C==null&&y.pages.length)return Promise.resolve(y);const A=(()=>{const F={client:n.client,queryKey:n.queryKey,pageParam:C,direction:E?"backward":"forward",meta:n.options.meta};return b(F),F})(),R=await h(A),{maxPages:L}=n.options,O=E?AC:EC;return{pages:O(y.pages,R,L),pageParams:O(y.pageParams,C,L)}};if(i&&o.length){const y=i==="backward",C=y?BC:Jf,E={pages:o,pageParams:s},P=C(r,E);a=await g(E,P,y)}else{const y=e??o.length;do{const C=l===0?s[0]??r.initialPageParam:Jf(r,a);if(l>0&&C==null)break;a=await g(a,C),l++}while(l<y)}return a};n.options.persister?n.fetchFn=()=>{var m,b;return(b=(m=n.options).persister)==null?void 0:b.call(m,c,{client:n.client,queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},t)}:n.fetchFn=c}}}function Jf(e,{pages:n,pageParams:t}){const r=n.length-1;return n.length>0?e.getNextPageParam(n[r],n,t[r],t):void 0}function BC(e,{pages:n,pageParams:t}){var r;return n.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,n[0],n,t[0],t):void 0}var Ce,Xt,Jt,Ni,Ri,Zt,Ii,Di,om,WC=(om=class{constructor(e={}){le(this,Ce);le(this,Xt);le(this,Jt);le(this,Ni);le(this,Ri);le(this,Zt);le(this,Ii);le(this,Di);Z(this,Ce,e.queryCache||new zC),Z(this,Xt,e.mutationCache||new HC),Z(this,Jt,e.defaultOptions||{}),Z(this,Ni,new Map),Z(this,Ri,new Map),Z(this,Zt,0)}mount(){ms(this,Zt)._++,D(this,Zt)===1&&(Z(this,Ii,Bv.subscribe(async e=>{e&&(await this.resumePausedMutations(),D(this,Ce).onFocus())})),Z(this,Di,La.subscribe(async e=>{e&&(await this.resumePausedMutations(),D(this,Ce).onOnline())})))}unmount(){var e,n;ms(this,Zt)._--,D(this,Zt)===0&&((e=D(this,Ii))==null||e.call(this),Z(this,Ii,void 0),(n=D(this,Di))==null||n.call(this),Z(this,Di,void 0))}isFetching(e){return D(this,Ce).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return D(this,Xt).findAll({...e,status:"pending"}).length}getQueryData(e){var t;const n=this.defaultQueryOptions({queryKey:e});return(t=D(this,Ce).get(n.queryHash))==null?void 0:t.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),t=D(this,Ce).build(this,n),r=t.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&t.isStaleByTime(ku(n.staleTime,t))&&this.prefetchQuery(n),Promise.resolve(r))}getQueriesData(e){return D(this,Ce).findAll(e).map(({queryKey:n,state:t})=>{const r=t.data;return[n,r]})}setQueryData(e,n,t){const r=this.defaultQueryOptions({queryKey:e}),i=D(this,Ce).get(r.queryHash),o=i==null?void 0:i.state.data,s=xC(n,o);if(s!==void 0)return D(this,Ce).build(this,r).setData(s,{...t,manual:!0})}setQueriesData(e,n,t){return Ye.batch(()=>D(this,Ce).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,n,t)]))}getQueryState(e){var t;const n=this.defaultQueryOptions({queryKey:e});return(t=D(this,Ce).get(n.queryHash))==null?void 0:t.state}removeQueries(e){const n=D(this,Ce);Ye.batch(()=>{n.findAll(e).forEach(t=>{n.remove(t)})})}resetQueries(e,n){const t=D(this,Ce);return Ye.batch(()=>(t.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const t={revert:!0,...n},r=Ye.batch(()=>D(this,Ce).findAll(e).map(i=>i.cancel(t)));return Promise.all(r).then(Wn).catch(Wn)}invalidateQueries(e,n={}){return Ye.batch(()=>(D(this,Ce).findAll(e).forEach(t=>{t.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const t={...n,cancelRefetch:n.cancelRefetch??!0},r=Ye.batch(()=>D(this,Ce).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,t);return t.throwOnError||(o=o.catch(Wn)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(Wn)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const t=D(this,Ce).build(this,n);return t.isStaleByTime(ku(n.staleTime,t))?t.fetch(n):Promise.resolve(t.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Wn).catch(Wn)}fetchInfiniteQuery(e){return e.behavior=Xf(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Wn).catch(Wn)}ensureInfiniteQueryData(e){return e.behavior=Xf(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return La.isOnline()?D(this,Xt).resumePausedMutations():Promise.resolve()}getQueryCache(){return D(this,Ce)}getMutationCache(){return D(this,Xt)}getDefaultOptions(){return D(this,Jt)}setDefaultOptions(e){Z(this,Jt,e)}setQueryDefaults(e,n){D(this,Ni).set(Qo(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...D(this,Ni).values()],t={};return n.forEach(r=>{Yo(e,r.queryKey)&&Object.assign(t,r.defaultOptions)}),t}setMutationDefaults(e,n){D(this,Ri).set(Qo(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...D(this,Ri).values()],t={};return n.forEach(r=>{Yo(e,r.mutationKey)&&Object.assign(t,r.defaultOptions)}),t}defaultQueryOptions(e){if(e._defaulted)return e;const n={...D(this,Jt).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=$d(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Kd&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...D(this,Jt).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){D(this,Ce).clear(),D(this,Xt).clear()}},Ce=new WeakMap,Xt=new WeakMap,Jt=new WeakMap,Ni=new WeakMap,Ri=new WeakMap,Zt=new WeakMap,Ii=new WeakMap,Di=new WeakMap,om),UC=w.createContext(void 0),VC=({client:e,children:n})=>(w.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),k.jsx(UC.Provider,{value:e,children:n}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Xo.apply(this,arguments)}var tr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tr||(tr={}));const Zf="popstate";function GC(e){e===void 0&&(e={});function n(r,i){let{pathname:o,search:s,hash:a}=r.location;return Cu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Fa(i)}return $C(n,t,null,e)}function Ee(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function qv(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function qC(){return Math.random().toString(36).substr(2,8)}function eh(e,n){return{usr:e.state,key:e.key,idx:n}}function Cu(e,n,t,r){return t===void 0&&(t=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Qi(n):n,{state:t,key:n&&n.key||r||qC()})}function Fa(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Qi(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function $C(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=tr.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(Xo({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function p(){a=tr.Pop;let b=u(),h=b==null?null:b-c;c=b,l&&l({action:a,location:m.location,delta:h})}function f(b,h){a=tr.Push;let g=Cu(m.location,b,h);c=u()+1;let y=eh(g,c),C=m.createHref(g);try{s.pushState(y,"",C)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(C)}o&&l&&l({action:a,location:m.location,delta:1})}function d(b,h){a=tr.Replace;let g=Cu(m.location,b,h);c=u();let y=eh(g,c),C=m.createHref(g);s.replaceState(y,"",C),o&&l&&l({action:a,location:m.location,delta:0})}function v(b){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof b=="string"?b:Fa(b);return g=g.replace(/ $/,"%20"),Ee(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let m={get action(){return a},get location(){return e(i,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Zf,p),l=b,()=>{i.removeEventListener(Zf,p),l=null}},createHref(b){return n(i,b)},createURL:v,encodeLocation(b){let h=v(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:d,go(b){return s.go(b)}};return m}var nh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nh||(nh={}));function KC(e,n,t){return t===void 0&&(t="/"),QC(e,n,t,!1)}function QC(e,n,t,r){let i=typeof n=="string"?Qi(n):n,o=Wi(i.pathname||"/",t);if(o==null)return null;let s=$v(e);YC(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=aP(o);a=oP(s[l],c,r)}return a}function $v(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=dr([r,l.relativePath]),u=t.concat(l);o.children&&o.children.length>0&&(Ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$v(o.children,n,u,c)),!(o.path==null&&!o.index)&&n.push({path:c,score:rP(c,o.index),routesMeta:u})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Kv(o.path))i(o,s,l)}),n}function Kv(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Kv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function YC(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:iP(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const XC=/^:[\w-]+$/,JC=3,ZC=2,eP=1,nP=10,tP=-2,th=e=>e==="*";function rP(e,n){let t=e.split("/"),r=t.length;return t.some(th)&&(r+=tP),n&&(r+=ZC),t.filter(i=>!th(i)).reduce((i,o)=>i+(XC.test(o)?JC:o===""?eP:nP),r)}function iP(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function oP(e,n,t){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=o==="/"?n:n.slice(o.length)||"/",p=za({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!p&&c&&t&&!r[r.length-1].route.index&&(p=za({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:dr([o,p.pathname]),pathnameBase:dP(dr([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=dr([o,p.pathnameBase]))}return s}function za(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=sP(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,p)=>{let{paramName:f,isOptional:d}=u;if(f==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const v=a[p];return d&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function sP(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),qv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function aP(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return qv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Wi(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function lP(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Qi(e):e;return{pathname:t?t.startsWith("/")?t:cP(t,n):n,search:pP(r),hash:fP(i)}}function cP(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function sc(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uP(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Qv(e,n){let t=uP(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Yv(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Qi(e):(i=Xo({},e),Ee(!i.pathname||!i.pathname.includes("?"),sc("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),sc("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),sc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=t;else{let p=n.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}a=p>=0?n[p]:"/"}let l=lP(i,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),dP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hP(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xv=["post","put","patch","delete"];new Set(Xv);const mP=["get",...Xv];new Set(mP);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Jo.apply(this,arguments)}const gl=w.createContext(null),Jv=w.createContext(null),wr=w.createContext(null),yl=w.createContext(null),Qr=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Zv=w.createContext(null);function gP(e,n){let{relative:t}=n===void 0?{}:n;ds()||Ee(!1);let{basename:r,navigator:i}=w.useContext(wr),{hash:o,pathname:s,search:a}=vl(e,{relative:t}),l=s;return r!=="/"&&(l=s==="/"?r:dr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ds(){return w.useContext(yl)!=null}function Yi(){return ds()||Ee(!1),w.useContext(yl).location}function eb(e){w.useContext(wr).static||w.useLayoutEffect(e)}function yP(){let{isDataRoute:e}=w.useContext(Qr);return e?RP():vP()}function vP(){ds()||Ee(!1);let e=w.useContext(gl),{basename:n,future:t,navigator:r}=w.useContext(wr),{matches:i}=w.useContext(Qr),{pathname:o}=Yi(),s=JSON.stringify(Qv(i,t.v7_relativeSplatPath)),a=w.useRef(!1);return eb(()=>{a.current=!0}),w.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=Yv(c,JSON.parse(s),o,u.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:dr([n,p.pathname])),(u.replace?r.replace:r.push)(p,u.state,u)},[n,r,s,o,e])}function vl(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=w.useContext(wr),{matches:i}=w.useContext(Qr),{pathname:o}=Yi(),s=JSON.stringify(Qv(i,r.v7_relativeSplatPath));return w.useMemo(()=>Yv(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function bP(e,n){return xP(e,n)}function xP(e,n,t,r){ds()||Ee(!1);let{navigator:i}=w.useContext(wr),{matches:o}=w.useContext(Qr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Yi(),u;if(n){var p;let b=typeof n=="string"?Qi(n):n;l==="/"||(p=b.pathname)!=null&&p.startsWith(l)||Ee(!1),u=b}else u=c;let f=u.pathname||"/",d=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");d="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=KC(e,{pathname:d}),m=PP(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:dr([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:dr([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,t,r);return n&&m?w.createElement(yl.Provider,{value:{location:Jo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tr.Pop}},m):m}function wP(){let e=NP(),n=hP(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:i},t):null,null)}const kP=w.createElement(wP,null);class SP extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(Qr.Provider,{value:this.props.routeContext},w.createElement(Zv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CP(e){let{routeContext:n,match:t,children:r}=e,i=w.useContext(gl);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Qr.Provider,{value:n},r)}function PP(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let u=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);u>=0||Ee(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let p=s[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=u),p.route.id){let{loaderData:f,errors:d}=t,v=p.route.loader&&f[p.route.id]===void 0&&(!d||d[p.route.id]===void 0);if(p.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,p,f)=>{let d,v=!1,m=null,b=null;t&&(d=a&&p.route.id?a[p.route.id]:void 0,m=p.route.errorElement||kP,l&&(c<0&&f===0?(v=!0,b=null):c===f&&(v=!0,b=p.route.hydrateFallbackElement||null)));let h=n.concat(s.slice(0,f+1)),g=()=>{let y;return d?y=m:v?y=b:p.route.Component?y=w.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=u,w.createElement(CP,{match:p,routeContext:{outlet:u,matches:h,isDataRoute:t!=null},children:y})};return t&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?w.createElement(SP,{location:t.location,revalidation:t.revalidation,component:m,error:d,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var nb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nb||{}),_a=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_a||{});function EP(e){let n=w.useContext(gl);return n||Ee(!1),n}function AP(e){let n=w.useContext(Jv);return n||Ee(!1),n}function TP(e){let n=w.useContext(Qr);return n||Ee(!1),n}function tb(e){let n=TP(),t=n.matches[n.matches.length-1];return t.route.id||Ee(!1),t.route.id}function NP(){var e;let n=w.useContext(Zv),t=AP(_a.UseRouteError),r=tb(_a.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function RP(){let{router:e}=EP(nb.UseNavigateStable),n=tb(_a.UseNavigateStable),t=w.useRef(!1);return eb(()=>{t.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Jo({fromRouteId:n},o)))},[e,n])}function IP(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ti(e){Ee(!1)}function DP(e){let{basename:n="/",children:t=null,location:r,navigationType:i=tr.Pop,navigator:o,static:s=!1,future:a}=e;ds()&&Ee(!1);let l=n.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:o,static:s,future:Jo({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Qi(r));let{pathname:u="/",search:p="",hash:f="",state:d=null,key:v="default"}=r,m=w.useMemo(()=>{let b=Wi(u,l);return b==null?null:{location:{pathname:b,search:p,hash:f,state:d,key:v},navigationType:i}},[l,u,p,f,d,v,i]);return m==null?null:w.createElement(wr.Provider,{value:c},w.createElement(yl.Provider,{children:t,value:m}))}function MP(e){let{children:n,location:t}=e;return bP(Pu(n),t)}new Promise(()=>{});function Pu(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...n,i];if(r.type===w.Fragment){t.push.apply(t,Pu(r.props.children,o));return}r.type!==ti&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Pu(r.props.children,o)),t.push(s)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ja.apply(this,arguments)}function rb(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function OP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function LP(e,n){return e.button===0&&(!n||n==="_self")&&!OP(e)}const FP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],_P="6";try{window.__reactRouterVersion=_P}catch{}const jP=w.createContext({isTransitioning:!1}),HP="startTransition",rh=gm[HP];function BP(e){let{basename:n,children:t,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=GC({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},u=w.useCallback(p=>{c&&rh?rh(()=>l(p)):l(p)},[l,c]);return w.useLayoutEffect(()=>s.listen(u),[s,u]),w.useEffect(()=>IP(r),[r]),w.createElement(DP,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:s,future:r})}const WP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ib=w.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u,viewTransition:p}=n,f=rb(n,FP),{basename:d}=w.useContext(wr),v,m=!1;if(typeof c=="string"&&UP.test(c)&&(v=c,WP))try{let y=new URL(window.location.href),C=c.startsWith("//")?new URL(y.protocol+c):new URL(c),E=Wi(C.pathname,d);C.origin===y.origin&&E!=null?c=E+C.search+C.hash:m=!0}catch{}let b=gP(c,{relative:i}),h=qP(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:i,viewTransition:p});function g(y){r&&r(y),y.defaultPrevented||h(y)}return w.createElement("a",ja({},f,{href:v||b,onClick:m||o?r:g,ref:t,target:l}))}),VP=w.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,viewTransition:c,children:u}=n,p=rb(n,zP),f=vl(l,{relative:p.relative}),d=Yi(),v=w.useContext(Jv),{navigator:m,basename:b}=w.useContext(wr),h=v!=null&&$P(f)&&c===!0,g=m.encodeLocation?m.encodeLocation(f).pathname:f.pathname,y=d.pathname,C=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),C=C?C.toLowerCase():null,g=g.toLowerCase()),C&&b&&(C=Wi(C,b)||C);const E=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let P=y===g||!s&&y.startsWith(g)&&y.charAt(E)==="/",A=C!=null&&(C===g||!s&&C.startsWith(g)&&C.charAt(g.length)==="/"),R={isActive:P,isPending:A,isTransitioning:h},L=P?r:void 0,O;typeof o=="function"?O=o(R):O=[o,P?"active":null,A?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(R):a;return w.createElement(ib,ja({},p,{"aria-current":L,className:O,ref:t,style:F,to:l,viewTransition:c}),typeof u=="function"?u(R):u)});var Eu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Eu||(Eu={}));var ih;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ih||(ih={}));function GP(e){let n=w.useContext(gl);return n||Ee(!1),n}function qP(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=n===void 0?{}:n,l=yP(),c=Yi(),u=vl(e,{relative:s});return w.useCallback(p=>{if(LP(p,t)){p.preventDefault();let f=r!==void 0?r:Fa(c)===Fa(u);l(e,{replace:f,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,u,r,i,t,e,o,s,a])}function $P(e,n){n===void 0&&(n={});let t=w.useContext(jP);t==null&&Ee(!1);let{basename:r}=GP(Eu.useViewTransitionState),i=vl(e,{relative:n.relative});if(!t.isTransitioning)return!1;let o=Wi(t.currentLocation.pathname,r)||t.currentLocation.pathname,s=Wi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return za(i.pathname,s)!=null||za(i.pathname,o)!=null}const KP=[{to:"/",icon:v1,label:"Home"},{to:"/flashcards",icon:Jy,label:"Cards"},{to:"/questions",icon:Xy,label:"Questions"},{to:"/summaries",icon:Yy,label:"Review"}];function QP(){return k.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm",children:k.jsx("div",{className:"flex items-center justify-around px-2 py-2 pb-[env(safe-area-inset-bottom)]",children:KP.map(e=>k.jsxs(VP,{to:e.to,end:e.to==="/",className:({isActive:n})=>un("flex flex-col items-center gap-1 px-4 py-2 text-muted-foreground transition-colors min-w-[64px]",n&&"text-primary"),children:[k.jsx(e.icon,{className:"h-6 w-6"}),k.jsx("span",{className:"text-xs font-medium",children:e.label})]},e.to))})})}function Zo({children:e,title:n,subtitle:t}){return k.jsxs("div",{className:"min-h-screen pb-20",children:[(n||t)&&k.jsxs("header",{className:"sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm px-4 py-4",children:[n&&k.jsx("h1",{className:"text-xl font-semibold font-serif",children:n}),t&&k.jsx("p",{className:"text-sm text-muted-foreground mt-0.5",children:t})]}),k.jsx("main",{className:"px-4 py-4",children:e}),k.jsx(QP,{})]})}const YP=[{to:"/flashcards",icon:Jy,title:"Flashcards",description:"Review key concepts with tap-to-flip cards",color:"text-section-chem"},{to:"/questions",icon:Xy,title:"Question Bank",description:"Practice with MCAT-style questions",color:"text-section-bio"},{to:"/summaries",icon:Yy,title:"Quick Review",description:"High-yield topic summaries",color:"text-section-psych"}],XP=()=>k.jsx(Zo,{children:k.jsxs("div",{className:"max-w-lg mx-auto",children:[k.jsxs("div",{className:"text-center py-8",children:[k.jsx("h1",{className:"text-3xl font-bold font-serif mb-2",children:"MCAT Prep"}),k.jsx("p",{className:"text-muted-foreground",children:"Free study tools for premed students"})]}),k.jsx("div",{className:"space-y-3 mb-8",children:YP.map(e=>k.jsxs(ib,{to:e.to,className:"flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors",children:[k.jsx("div",{className:`flex items-center justify-center w-12 h-12 rounded-lg bg-muted ${e.color}`,children:k.jsx(e.icon,{className:"h-6 w-6"})}),k.jsxs("div",{children:[k.jsx("h2",{className:"font-semibold",children:e.title}),k.jsx("p",{className:"text-sm text-muted-foreground",children:e.description})]})]},e.to))}),k.jsxs("div",{className:"rounded-xl border border-border bg-card p-5",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[k.jsx(y1,{className:"h-4 w-4 text-section-cars"}),k.jsx("h3",{className:"font-semibold text-sm",children:"About This App"})]}),k.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"This is a free, open resource for students preparing for the MCAT. No accounts, no ads, no paywalls. Just study tools."}),k.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed mt-2",children:"Content covers all four sections: Chemical & Physical Foundations, Biological & Biochemical Foundations, Psychological & Social Foundations, and Critical Analysis & Reasoning Skills."})]}),k.jsx("p",{className:"text-center text-xs text-muted-foreground mt-8",children:"Study hard. You've got this."})]})});function JP({front:e,back:n}){const[t,r]=w.useState(!1);return k.jsx("div",{className:"perspective w-full cursor-pointer",onClick:()=>r(!t),role:"button","aria-label":t?"Show question":"Show answer",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),r(!t))},children:k.jsxs("div",{className:un("flip-card-inner relative w-full min-h-[280px]",t&&"flipped"),children:[k.jsxs("div",{className:"flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm",children:[k.jsx("span",{className:"text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide",children:"Question"}),k.jsx("p",{className:"text-lg font-medium text-center leading-relaxed",children:e}),k.jsx("span",{className:"absolute bottom-4 text-xs text-muted-foreground",children:"Tap to flip"})]}),k.jsxs("div",{className:"flip-card-back absolute inset-0 flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm overflow-auto",children:[k.jsx("span",{className:"text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide",children:"Answer"}),k.jsx("div",{className:"flex-1 text-sm leading-relaxed whitespace-pre-wrap",children:n}),k.jsx("span",{className:"text-xs text-muted-foreground mt-4 text-center",children:"Tap to flip back"})]})]})})}const ZP=[{id:"chem",label:"Chem/Phys",color:"border-section-chem text-section-chem"},{id:"bio",label:"Bio/Biochem",color:"border-section-bio text-section-bio"},{id:"psych",label:"Psych/Soc",color:"border-section-psych text-section-psych"},{id:"cars",label:"CARS",color:"border-section-cars text-section-cars"}];function eE({value:e,onChange:n}){return k.jsx("div",{className:"flex flex-wrap gap-2",children:ZP.map(t=>k.jsx("button",{onClick:()=>n(t.id),className:un("px-4 py-2 rounded-full text-sm font-medium border-2 transition-all",e===t.id?un(t.color,"bg-opacity-10"):"border-border text-muted-foreground hover:border-muted-foreground"),children:t.label},t.id))})}const nE=[{id:"chem-1",front:"What is the Henderson-Hasselbalch equation?",back:`pH = pKa + log([A⁻]/[HA])

Used to calculate the pH of a buffer solution. [A⁻] is the conjugate base concentration, [HA] is the weak acid concentration.`},{id:"chem-2",front:"Define electronegativity",back:`The ability of an atom to attract electrons toward itself in a chemical bond.

Trend: Increases left→right across a period, decreases down a group. Fluorine is most electronegative (4.0).`},{id:"chem-3",front:"What is Coulomb's Law?",back:`F = kq₁q₂/r²

The electrostatic force between two charges is proportional to the product of charges and inversely proportional to the square of distance.`},{id:"chem-4",front:"Define enthalpy (H)",back:`The total heat content of a system at constant pressure.

ΔH < 0: exothermic (releases heat)
ΔH > 0: endothermic (absorbs heat)`},{id:"chem-5",front:"What is Le Chatelier's Principle?",back:`When a system at equilibrium is disturbed, it shifts to counteract the change.

• Add reactant → shifts right
• Remove product → shifts right
• Increase pressure → shifts toward fewer moles of gas`},{id:"chem-6",front:"What are the SUVAT kinematic equations?",back:`For constant acceleration:

1. v = u + at
2. s = ut + ½at²
3. v² = u² + 2as
4. s = ½(u + v)t

Where: s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time`},{id:"chem-7",front:"State Newton's Three Laws of Motion",back:`1st Law (Inertia): An object at rest stays at rest, and an object in motion stays in motion at constant velocity unless acted upon by a net force.

2nd Law: F = ma (Force equals mass times acceleration)

3rd Law: For every action, there is an equal and opposite reaction.`},{id:"chem-8",front:"Define work, energy, and power",back:`Work (W): Energy transfer by a force. W = Fd cosθ (Joules)

Energy (E): Capacity to do work (Joules)
• KE = ½mv²
• PE = mgh

Power (P): Rate of doing work. P = W/t or P = Fv (Watts = J/s)`},{id:"chem-9",front:"What is the Law of Conservation of Energy?",back:`Energy cannot be created or destroyed, only transformed from one form to another.

Total mechanical energy: E = KE + PE = constant (in absence of friction)

mgh₁ + ½mv₁² = mgh₂ + ½mv₂²`},{id:"chem-10",front:"What are the SI units for key mechanics quantities?",back:`• Distance/displacement: meter (m)
• Velocity: m/s
• Acceleration: m/s²
• Force: Newton (N) = kg·m/s²
• Work/Energy: Joule (J) = N·m
• Power: Watt (W) = J/s
• Mass: kilogram (kg)`},{id:"chem-11",front:"What is the work-energy theorem?",back:`The net work done on an object equals its change in kinetic energy.

W_net = ΔKE = ½mv_f² - ½mv_i²

If only conservative forces act: W_net = -ΔPE`},{id:"chem-12",front:"Define momentum and impulse",back:`Momentum: p = mv (kg·m/s)

Impulse: J = Δp = FΔt

Conservation of momentum: In isolated system, total momentum before = total momentum after

m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f`},{id:"chem-13",front:"What is the equation for pressure in static fluids?",back:`P = ρgh

Where:
• P = pressure (Pa or N/m²)
• ρ = fluid density (kg/m³)
• g = gravitational acceleration (9.8 m/s²)
• h = depth below surface (m)

Total pressure: P_total = P_atm + ρgh`},{id:"chem-14",front:"State Bernoulli's equation",back:`P + ½ρv² + ρgh = constant

For horizontal flow (h constant):
P₁ + ½ρv₁² = P₂ + ½ρv₂²

Key insight: Higher velocity → lower pressure

Applies to: Ideal, incompressible, non-viscous fluid flow`},{id:"chem-15",front:"What is the continuity equation for fluid flow?",back:`A₁v₁ = A₂v₂ (for incompressible fluids)

Or: Q = Av = constant

Where:
• A = cross-sectional area
• v = flow velocity
• Q = volumetric flow rate

Smaller area → higher velocity`},{id:"chem-16",front:"State Poiseuille's law for viscous flow",back:`Q = πr⁴ΔP / 8ηL

Where:
• Q = flow rate
• r = radius (most important: r⁴!)
• ΔP = pressure difference
• η = viscosity
• L = length

Key: Flow rate ∝ r⁴ (doubling radius increases flow 16×)`},{id:"chem-17",front:"State Archimedes' Principle",back:`Buoyant force equals the weight of displaced fluid.

F_b = ρ_fluid × V_displaced × g

Floating: F_b = weight of object
Sinking: F_b < weight of object
Rising: F_b > weight of object

ρ_object < ρ_fluid → object floats`},{id:"chem-18",front:"When do you use each fluid mechanics equation?",back:`P = ρgh: Static fluids, depth problems

Bernoulli: Energy conservation in flowing fluids, relates P, v, and h

Continuity: Conservation of mass, changing pipe diameter

Poiseuille: Viscous flow in tubes, resistance to flow

Archimedes: Buoyancy, floating/sinking problems`},{id:"chem-19",front:"State Ohm's Law and the power law",back:`Ohm's Law: V = IR
• V = voltage (volts)
• I = current (amperes)
• R = resistance (ohms, Ω)

Power: P = IV = I²R = V²/R
• P = power (watts)

Energy: E = Pt = IVt (joules)`},{id:"chem-20",front:"How do resistors combine in series vs parallel?",back:`Series (same current):
R_total = R₁ + R₂ + R₃ + ...

Parallel (same voltage):
1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...

For two in parallel:
R_total = (R₁R₂)/(R₁ + R₂)`},{id:"chem-21",front:"How do capacitors combine in series vs parallel?",back:`Capacitors are OPPOSITE of resistors:

Parallel (same voltage):
C_total = C₁ + C₂ + C₃ + ...

Series (same charge):
1/C_total = 1/C₁ + 1/C₂ + 1/C₃ + ...

Capacitor energy: U = ½CV² = ½QV`},{id:"chem-22",front:"What is Coulomb's constant and when is it used?",back:`k = 9.0 × 10⁹ N·m²/C²

Used in Coulomb's Law:
F = kq₁q₂/r²

Also in electric field:
E = kq/r²

Electric potential:
V = kq/r`},{id:"chem-23",front:"What is Faraday's constant?",back:`F = 96,485 C/mol e⁻ (≈ 96,500 C/mol)

Represents charge per mole of electrons.

Used in electrochemistry:
• Q = nF (charge = moles e⁻ × Faraday constant)
• ΔG° = -nFE°_cell
• In Nernst equation`},{id:"chem-24",front:"State the Nernst equation",back:`E_cell = E°_cell - (RT/nF)ln(Q)

Or at 25°C:
E_cell = E°_cell - (0.0592/n)log(Q)

Where:
• E°_cell = standard cell potential
• n = moles of electrons transferred
• Q = reaction quotient

At equilibrium: E_cell = 0, Q = K`},{id:"chem-25",front:"What are key electrochemistry relationships?",back:`ΔG° = -nFE°_cell
• Positive E°_cell → negative ΔG° → spontaneous

E°_cell = E°_cathode - E°_anode
• Reduction at cathode (gains e⁻)
• Oxidation at anode (loses e⁻)

Current and mass:
m = (It × M)/(nF)`},{id:"chem-26",front:"What is the wave equation?",back:`v = fλ

Where:
• v = wave speed (m/s)
• f = frequency (Hz)
• λ = wavelength (m)

For all waves: light, sound, water, etc.

Speed of light: c = 3.0 × 10⁸ m/s
Speed of sound in air: ~340 m/s`},{id:"chem-27",front:"What is the decibel scale for sound intensity?",back:`β = 10 log(I/I₀)

Where:
• β = sound level (dB)
• I = intensity (W/m²)
• I₀ = 10⁻¹² W/m² (threshold of hearing)

Key: Every 10 dB increase = 10× intensity increase
Every 3 dB increase ≈ 2× intensity increase`},{id:"chem-28",front:"State the Doppler effect formula",back:`f_observed = f_source × [(v ± v_observer)/(v ∓ v_source)]

Approaching:
• Observer moving toward source: + in numerator
• Source moving toward observer: - in denominator
• Result: higher frequency

Receding: opposite signs, lower frequency`},{id:"chem-29",front:"State Snell's Law for refraction",back:`n₁sinθ₁ = n₂sinθ₂

Where:
• n = index of refraction (n = c/v)
• θ = angle from normal

Bending toward normal: n₁ < n₂ (e.g., air → water)
Bending away from normal: n₁ > n₂

Critical angle: sinθ_c = n₂/n₁`},{id:"chem-30",front:"What is the mirror/lens equation?",back:`1/f = 1/d_o + 1/d_i

Where:
• f = focal length
• d_o = object distance
• d_i = image distance

Sign conventions:
• f: + for converging (concave mirror/convex lens), - for diverging
• d_i: + for real image, - for virtual image`},{id:"chem-31",front:"What is the magnification equation?",back:`m = -d_i/d_o = h_i/h_o

Where:
• m = magnification
• h_i = image height
• h_o = object height

m > 0: upright image
m < 0: inverted image
|m| > 1: enlarged
|m| < 1: reduced`},{id:"chem-32",front:"What are the key optics sign conventions?",back:`Focal length (f):
• Concave mirror (converging): +
• Convex mirror (diverging): -
• Convex lens (converging): +
• Concave lens (diverging): -

Image distance (d_i):
• Real image (same side as light): +
• Virtual image (opposite side): -

Magnification:
• Upright: +
• Inverted: -`},{id:"chem-33",front:"What are key physical constants?",back:`Speed of light: c = 3.0 × 10⁸ m/s

Planck's constant: h = 6.626 × 10⁻³⁴ J·s

Avogadro's number: NA = 6.022 × 10²³ mol⁻¹

Gas constant: R = 8.314 J/(mol·K) = 0.0821 L·atm/(mol·K)

Gravity: g = 9.8 m/s²`},{id:"chem-34",front:"What is the photon energy equation?",back:`E = hf = hc/λ

Where:
• E = energy (joules)
• h = Planck's constant (6.626 × 10⁻³⁴ J·s)
• f = frequency (Hz)
• λ = wavelength (m)

Higher frequency/shorter wavelength → higher energy`},{id:"chem-35",front:"Define atomic number and mass number",back:`Atomic number (Z):
• Number of protons
• Defines the element
• Equals number of electrons in neutral atom

Mass number (A):
• Total protons + neutrons
• A = Z + N

Isotopes: Same Z, different A (different neutrons)`},{id:"chem-36",front:"What are the periodic trends for electronegativity?",back:`Electronegativity (ability to attract electrons):

Increases: left → right across period
Decreases: down a group

Most electronegative: F (4.0)
Least electronegative: Fr, Cs

Trend follows: F > O > N > Cl`},{id:"chem-37",front:"What are the periodic trends for ionization energy?",back:`Ionization energy (energy to remove an electron):

Increases: left → right across period
Decreases: down a group

Highest: Noble gases (He, Ne)
Lowest: Alkali metals (Li, Na, K)

Exceptions: Groups 3 & 6 slightly lower than expected`},{id:"chem-38",front:"What are the types of radioactive decay?",back:`Alpha (α): ⁴₂He nucleus emitted
• Mass decreases by 4, atomic # by 2
• Low penetration (paper stops it)

Beta (β⁻): Electron emitted, neutron → proton
• Mass unchanged, atomic # increases by 1

Beta (β⁺): Positron emitted, proton → neutron
• Mass unchanged, atomic # decreases by 1

Gamma (γ): High-energy photon
• No change in mass or atomic #
• High penetration (lead needed)`},{id:"chem-39",front:"What is the half-life decay law?",back:`N = N₀e⁻λt  or  N = N₀(½)^(t/t₁/₂)

Where:
• N = amount remaining
• N₀ = initial amount
• λ = decay constant
• t = time elapsed
• t₁/₂ = half-life

Relationship: t₁/₂ = ln(2)/λ ≈ 0.693/λ

After n half-lives: N = N₀/(2ⁿ)`},{id:"chem-40",front:"What are other key periodic trends?",back:`Atomic radius:
• Decreases left → right (more protons pull electrons closer)
• Increases down group (more electron shells)

Electron affinity:
• Generally increases left → right
• Noble gases near zero (stable)

Metallic character:
• Decreases left → right
• Increases down group`}],tE=[{id:"bio-1",front:"List all 20 amino acids with 1-letter and 3-letter codes",back:`Nonpolar: G-Gly, A-Ala, V-Val, L-Leu, I-Ile, M-Met, P-Pro, F-Phe, W-Trp

Polar: S-Ser, T-Thr, C-Cys, Y-Tyr, N-Asn, Q-Gln

Acidic: D-Asp, E-Glu

Basic: K-Lys, R-Arg, H-His

Mnemonic: GAVLIMPFW / STCYNQ / DE / KRH`},{id:"bio-2",front:"Classify amino acids: Nonpolar (hydrophobic)",back:`Glycine (G): Smallest, most flexible
Alanine (A): Simple methyl side chain
Valine (V): Branched, hydrophobic
Leucine (L): Branched, hydrophobic
Isoleucine (I): Branched, hydrophobic
Methionine (M): Contains sulfur, hydrophobic
Proline (P): Cyclic, helix breaker
Phenylalanine (F): Aromatic ring
Tryptophan (W): Largest, aromatic, UV absorbing`},{id:"bio-3",front:"Classify amino acids: Polar (uncharged)",back:`Serine (S): -OH group, can be phosphorylated
Threonine (T): -OH group, can be phosphorylated
Cysteine (C): -SH group, forms disulfide bonds
Tyrosine (Y): Aromatic with -OH, can be phosphorylated, UV absorbing
Asparagine (N): Amide side chain
Glutamine (Q): Amide side chain, longer than Asn

All have polar groups but are uncharged at pH 7`},{id:"bio-4",front:"Classify amino acids: Acidic (negatively charged)",back:`Aspartate/Aspartic acid (D):
• Side chain: -COO⁻ at pH 7
• pKa ~3.9
• Negatively charged in physiological pH

Glutamate/Glutamic acid (E):
• Side chain: -COO⁻ at pH 7
• pKa ~4.2
• One carbon longer than Asp
• Negatively charged in physiological pH`},{id:"bio-5",front:"Classify amino acids: Basic (positively charged)",back:`Lysine (K):
• -NH₃⁺ at pH 7, pKa ~10.5
• Positively charged at physiological pH

Arginine (R):
• Guanidinium group, pKa ~12.5
• Always positively charged
• Strongest base

Histidine (H):
• Imidazole ring, pKa ~6.0
• Can be + or neutral near pH 7
• Important in enzyme active sites`},{id:"bio-6",front:"What are special properties of Proline?",back:`• Cyclic structure: Side chain bonds back to backbone N
• Restricts rotation → reduces flexibility
• Helix breaker: Cannot form proper α-helix
• Beta-turn former: Common in loops/turns
• Creates kinks in protein structure
• Only amino acid where backbone N is part of ring (imino acid)`},{id:"bio-7",front:"What are special properties of Cysteine?",back:`• Contains thiol (-SH) group
• Forms disulfide bonds (Cys-S-S-Cys)
• Stabilizes tertiary/quaternary structure
• Oxidation of 2 Cys → cystine (disulfide bridge)
• Important for protein stability
• Can be oxidized/reduced
• pKa ~8.3`},{id:"bio-8",front:"What are special properties of Glycine?",back:`• Smallest amino acid (R = H)
• Most flexible: No side chain restricts rotation
• Achiral: No stereocenter
• Fits in tight spaces
• Common in collagen (every 3rd position)
• Not hydrophobic despite being nonpolar
• Allows tight turns in protein structure`},{id:"bio-9",front:"What amino acids absorb UV light at 280 nm?",back:`Aromatic amino acids:

Tryptophan (W): Strongest absorber
Tyrosine (Y): Moderate absorber
Phenylalanine (F): Weak absorber

Used to:
• Measure protein concentration (A280)
• Track proteins in chromatography
• Detect aromatic residues

W > Y >> F in absorption strength`},{id:"bio-10",front:"What are key pKa values for amino acids?",back:`α-COOH: ~2.2 (all amino acids)
α-NH₃⁺: ~9.5 (all amino acids)

Side chains:
Asp (D): ~3.9
Glu (E): ~4.2
His (H): ~6.0 (critical!)
Cys (C): ~8.3
Lys (K): ~10.5
Arg (R): ~12.5

Histidine's pKa near pH 7 makes it key in catalysis!`},{id:"bio-11",front:"What is the isoelectric point (pI)?",back:`pI: pH where amino acid has net charge of zero

Calculation:
• Neutral AA: pI = (pKa₁ + pKa₂)/2
• Acidic AA: pI = (pKa₁ + pKa_R)/2 (lower pI)
• Basic AA: pI = (pKa₂ + pKa_R)/2 (higher pI)

At pH < pI: net positive charge
At pH > pI: net negative charge
At pH = pI: zwitterion, no net charge`},{id:"bio-12",front:"Which amino acids can be phosphorylated?",back:`Serine (S) - most common
Threonine (T)
Tyrosine (Y)

All have -OH groups on side chains

Phosphorylation:
• Adds negative charge (PO₄²⁻)
• Regulates protein activity
• Key in signal transduction
• Reversible (kinases add, phosphatases remove)
• Changes protein conformation`},{id:"bio-13",front:"What are the four levels of protein structure?",back:`Primary (1°): Amino acid sequence (peptide bonds)

Secondary (2°): Local folding
• α-helix, β-sheet, turns
• H-bonds between backbone atoms

Tertiary (3°): Overall 3D shape
• Interactions between side chains
• Disulfide bonds, hydrophobic interactions

Quaternary (4°): Multiple subunits
• Hemoglobin (4 subunits)`},{id:"bio-14",front:"What stabilizes protein structure?",back:`Primary: Peptide bonds (covalent)

Secondary: H-bonds (backbone C=O to N-H)

Tertiary:
• Disulfide bonds (Cys-Cys, covalent)
• Hydrophobic interactions (nonpolar AA)
• H-bonds (polar AA)
• Ionic/salt bridges (charged AA)
• Van der Waals forces

Quaternary: Same as tertiary between subunits`},{id:"bio-15",front:"Describe α-helix structure",back:`• Right-handed coil
• 3.6 residues per turn
• H-bonds: C=O of residue n to N-H of residue n+4
• R groups point outward
• Proline breaks helices
• Common in transmembrane proteins
• Stabilized by backbone H-bonds
• Compact, rod-like structure`},{id:"bio-16",front:"Describe β-sheet structure",back:`• Extended zigzag strands
• H-bonds between adjacent strands
• R groups alternate up/down

Parallel: N→C same direction
• Less stable

Antiparallel: N→C opposite directions
• More stable
• Stronger H-bonds

Found in silk fibroin, immunoglobulins`},{id:"bio-17",front:"What determines amino acid properties at different pH?",back:`At low pH (<2):
• All groups protonated
• Net positive charge

At physiological pH (~7):
• COO⁻ and NH₃⁺ (zwitterion)
• Side chains depend on pKa

At high pH (>11):
• All groups deprotonated
• Net negative charge

pH < pKa: protonated
pH > pKa: deprotonated`},{id:"bio-18",front:"What are essential vs non-essential amino acids?",back:`Essential (must be obtained from diet):
PVT TIM HALL
• Phe, Val, Thr, Trp, Ile, Met, His, Arg*, Leu, Lys

*Arg: conditionally essential

Non-essential (body can synthesize):
• Ala, Asn, Asp, Cys, Glu, Gln, Gly, Pro, Ser, Tyr

Deficiency of essential AA → protein malnutrition`},{id:"bio-19",front:"What are aromatic amino acids and their properties?",back:`Phenylalanine (F):
• Benzene ring
• Hydrophobic
• Essential

Tyrosine (Y):
• Benzene with -OH
• Polar, can H-bond
• Phosphorylation site
• Precursor to dopamine, epinephrine

Tryptophan (W):
• Indole ring (largest AA)
• Hydrophobic
• Essential
• Precursor to serotonin, melatonin
• Strongest UV absorber`},{id:"bio-20",front:"What causes protein denaturation?",back:`Factors:
• Heat: Disrupts H-bonds, hydrophobic interactions
• pH extremes: Changes ionization states
• Chemicals: Urea, detergents disrupt interactions
• Heavy metals: React with side chains

Result:
• Loss of 2°, 3°, 4° structure
• Primary structure intact
• Loss of function
• Usually irreversible (e.g., cooking egg)
• Sometimes reversible (renaturation)`},{id:"bio-21",front:"Describe the lac operon",back:`Inducible operon in E. coli for lactose metabolism.

• Repressor normally blocks transcription
• Lactose (inducer) binds repressor → releases from operator
• Low glucose + lactose present → CAP activates transcription`},{id:"bio-22",front:"What is the function of the nephron?",back:`Functional unit of the kidney:

1. Glomerulus: Filtration
2. PCT: Reabsorption (glucose, amino acids, Na⁺)
3. Loop of Henle: Concentration gradient
4. DCT: Fine-tuning (aldosterone, ADH)
5. Collecting duct: Final concentration`},{id:"bio-23",front:"What is the Michaelis-Menten equation?",back:`v = (Vmax[S]) / (Km + [S])

Where:
• v = reaction velocity
• Vmax = maximum velocity
• [S] = substrate concentration
• Km = Michaelis constant

At [S] = Km: v = Vmax/2
At [S] >> Km: v ≈ Vmax (zero-order)
At [S] << Km: v ≈ (Vmax/Km)[S] (first-order)`},{id:"bio-24",front:"What is Vmax in enzyme kinetics?",back:`Vmax: Maximum reaction velocity when enzyme is saturated with substrate

Characteristics:
• All active sites occupied
• Rate plateaus, no longer increases with [S]
• Depends on [enzyme]
• Vmax = kcat[E]total
• Units: typically μmol/min or mM/s

Reached when [S] >> Km`},{id:"bio-25",front:"What is Km in enzyme kinetics?",back:`Km: Michaelis constant, substrate concentration at half Vmax

Interpretation:
• Measure of enzyme-substrate affinity
• Low Km = high affinity (enzyme binds substrate easily)
• High Km = low affinity (need more substrate)
• Units: concentration (mM, μM)

Km ≈ (k-1 + kcat)/k1 for simple reactions`},{id:"bio-26",front:"What is kcat (turnover number)?",back:`kcat: Number of substrate molecules converted per enzyme per unit time at saturation

kcat = Vmax / [E]total

Characteristics:
• Measure of catalytic efficiency
• Units: s⁻¹ (per second)
• Independent of enzyme concentration

Catalytic efficiency: kcat/Km
• Higher = better enzyme
• Units: M⁻¹s⁻¹`},{id:"bio-27",front:"What is the Lineweaver-Burk plot?",back:`Double reciprocal plot: 1/v vs 1/[S]

1/v = (Km/Vmax)(1/[S]) + 1/Vmax

Key features:
• y-intercept = 1/Vmax
• x-intercept = -1/Km
• Slope = Km/Vmax

Advantage: Linear, easier to determine Vmax and Km
Disadvantage: Distorts error at low [S]`},{id:"bio-28",front:"Define competitive inhibition",back:`Inhibitor competes with substrate for active site

Effects:
• ↑ Km (appears lower affinity)
• Vmax unchanged
• Can be overcome by ↑[S]

Lineweaver-Burk:
• Same y-intercept
• Different x-intercept (less negative)
• Increased slope

Example: Statins compete with HMG-CoA`},{id:"bio-29",front:"Define noncompetitive inhibition",back:`Inhibitor binds allosteric site, works whether substrate is bound or not

Effects:
• Km unchanged (affinity same)
• ↓ Vmax (fewer functional enzymes)
• Cannot be overcome by ↑[S]

Lineweaver-Burk:
• Same x-intercept
• Different y-intercept (higher)
• Increased slope

Example: Heavy metals binding to enzyme`},{id:"bio-30",front:"Define uncompetitive inhibition",back:`Inhibitor binds only to enzyme-substrate complex (ES)

Effects:
• ↓ Km (appears higher affinity)
• ↓ Vmax
• Cannot be overcome by ↑[S]
• Km/Vmax ratio stays constant

Lineweaver-Burk:
• Parallel lines (same slope)
• Different intercepts

Less common, seen in multi-substrate reactions`},{id:"bio-31",front:"Define irreversible (suicide) inhibition",back:`Inhibitor covalently binds and permanently inactivates enzyme

Characteristics:
• Time-dependent
• Cannot be overcome by ↑[S]
• ↓ Vmax (permanently reduces active enzyme)
• Requires new enzyme synthesis

Examples:
• Aspirin (irreversibly inhibits COX)
• Penicillin (inhibits transpeptidase)
• Organophosphates (inhibit acetylcholinesterase)`},{id:"bio-32",front:"Compare all inhibition types: Effects on Km and Vmax",back:`Competitive:
• Km: ↑ (lower apparent affinity)
• Vmax: unchanged
• Overcome by ↑[S]

Noncompetitive:
• Km: unchanged
• Vmax: ↓
• Cannot overcome

Uncompetitive:
• Km: ↓
• Vmax: ↓
• Parallel L-B lines

Irreversible:
• Km: unchanged
• Vmax: ↓
• Permanent`},{id:"bio-33",front:"What are Lineweaver-Burk plot changes for each inhibitor?",back:`No inhibitor: Normal line

Competitive:
• Same y-intercept (1/Vmax)
• Different x-intercept (less negative)
• Lines intersect on y-axis

Noncompetitive:
• Different y-intercept (higher)
• Same x-intercept (-1/Km)
• Lines intersect on x-axis

Uncompetitive:
• Parallel lines
• Different intercepts on both axes`},{id:"bio-34",front:"What are the 6 major enzyme classes?",back:`1. Oxidoreductases: Redox reactions (e.g., dehydrogenases, oxidases)

2. Transferases: Transfer functional groups (e.g., kinases, transaminases)

3. Hydrolases: Break bonds with water (e.g., peptidases, lipases)

4. Lyases: Add/remove groups to form double bonds (e.g., decarboxylases)

5. Isomerases: Rearrange atoms (e.g., racemases, mutases)

6. Ligases: Form bonds with ATP (e.g., DNA ligase, synthetases)`},{id:"bio-35",front:"What are examples of oxidoreductases?",back:`Function: Catalyze oxidation-reduction reactions

Examples:
• Dehydrogenases: Remove H (lactate dehydrogenase)
• Reductases: Add electrons (ribonucleotide reductase)
• Oxidases: Use O₂ as electron acceptor (cytochrome oxidase)
• Peroxidases: Use H₂O₂ (glutathione peroxidase)

Cofactors: NAD⁺, NADP⁺, FAD, FMN

EC class: 1.x.x.x`},{id:"bio-36",front:"What are examples of transferases?",back:`Function: Transfer functional groups between molecules

Examples:
• Kinases: Transfer phosphate groups (hexokinase, protein kinases)
• Transaminases: Transfer amino groups (ALT, AST)
• Methyltransferases: Transfer methyl groups
• Acyltransferases: Transfer acyl groups

Often use ATP or coenzymes

EC class: 2.x.x.x`},{id:"bio-37",front:"What are examples of hydrolases?",back:`Function: Cleave bonds using water

Examples:
• Peptidases/proteases: Break peptide bonds (trypsin, pepsin)
• Lipases: Break ester bonds in lipids
• Nucleases: Break phosphodiester bonds in DNA/RNA
• Phosphatases: Remove phosphate groups
• Glycosidases: Break glycosidic bonds

EC class: 3.x.x.x`},{id:"bio-38",front:"What are examples of lyases?",back:`Function: Add or remove groups to form/break double bonds (non-hydrolytic)

Examples:
• Decarboxylases: Remove CO₂ (pyruvate decarboxylase)
• Aldolases: Aldol cleavage (fructose-1,6-bisphosphate aldolase)
• Synthases: Form double bonds (citrate synthase)*
• Dehydratases: Remove H₂O (enolase)

*Note: Synthases (lyases) ≠ Synthetases (ligases)

EC class: 4.x.x.x`},{id:"bio-39",front:"What are examples of isomerases?",back:`Function: Rearrange atoms within a molecule

Examples:
• Racemases: Interconvert stereoisomers
• Epimerases: Change configuration at one carbon
• Mutases: Move functional groups (phosphoglucomutase)
• Isomerases: Structural rearrangements (glucose-6-phosphate isomerase)

No net change in molecular formula

EC class: 5.x.x.x`},{id:"bio-40",front:"What are examples of ligases?",back:`Function: Form bonds using ATP energy

Examples:
• Synthetases: Join molecules (aminoacyl-tRNA synthetase, ATP synthase*)
• Carboxylases: Add CO₂ (pyruvate carboxylase)
• DNA ligase: Join DNA fragments
• RNA ligase: Join RNA fragments

Require ATP (or GTP) hydrolysis

*ATP synthase is actually a special case

EC class: 6.x.x.x`},{id:"bio-41",front:"What factors affect enzyme activity?",back:`Temperature:
• ↑ temp → ↑ rate (up to optimum ~37°C)
• Too high → denaturation

pH:
• Each enzyme has optimal pH
• Extremes denature or change ionization

Substrate concentration:
• Follows Michaelis-Menten kinetics

Enzyme concentration:
• Directly proportional to rate

Cofactors/Coenzymes:
• Required for activity

Inhibitors/Activators:
• Regulate activity`},{id:"bio-42",front:"What is allosteric regulation?",back:`Binding of molecule at site other than active site changes enzyme activity

Positive regulation:
• Activator binds → ↑ activity
• Shifts curve left (↓ Km)

Negative regulation:
• Inhibitor binds → ↓ activity
• Shifts curve right (↑ Km)

Cooperativity:
• Sigmoidal curve (not hyperbolic)
• Binding of one substrate affects others

Example: Hemoglobin, phosphofructokinase`},{id:"bio-43",front:"What is the central dogma of molecular biology?",back:`DNA → RNA → Protein

DNA is transcribed to mRNA in the nucleus, mRNA is translated to protein at ribosomes.

Exceptions: Reverse transcriptase (RNA→DNA), RNA replication in RNA viruses.`},{id:"bio-44",front:"What are purines vs pyrimidines?",back:`Purines (double ring, larger):
• Adenine (A)
• Guanine (G)

Pyrimidines (single ring, smaller):
• Cytosine (C)
• Thymine (T) - DNA only
• Uracil (U) - RNA only

Mnemonic: PURe As Gold (purines), CUT the PY (pyrimidines)`},{id:"bio-45",front:"What are the base-pairing rules and hydrogen bonds?",back:`DNA/RNA base pairing:
• A-T (DNA): 2 hydrogen bonds
• A-U (RNA): 2 hydrogen bonds
• G-C: 3 hydrogen bonds

Key points:
• G-C pairs are stronger (3 H-bonds vs 2)
• Higher G-C content → higher melting temperature
• Complementary and antiparallel strands`},{id:"bio-46",front:"Compare DNA vs RNA structure",back:`DNA:
• Double-stranded helix
• Deoxyribose sugar (no 2'-OH)
• Thymine (T)
• More stable
• Stores genetic info

RNA:
• Usually single-stranded
• Ribose sugar (has 2'-OH)
• Uracil (U) instead of T
• Less stable (2'-OH reactive)
• Various functions (mRNA, tRNA, rRNA)`},{id:"bio-47",front:"What is DNA replication and when does it occur?",back:`Process: DNA → DNA (making identical copies)

When: S phase of cell cycle

Key features:
• Semi-conservative (each new DNA has 1 old + 1 new strand)
• Bidirectional from origin
• 5' → 3' synthesis only
• Requires RNA primer
• Leading strand continuous, lagging strand discontinuous (Okazaki fragments)`},{id:"bio-48",front:"What is the role of DNA helicase?",back:`Function: Unwinds and separates double helix by breaking H-bonds between base pairs

Creates:
• Replication fork
• Two template strands
• Single-stranded DNA for polymerase

Works with:
• SSB proteins (stabilize single strands)
• Topoisomerase (relieves tension)`},{id:"bio-49",front:"What is the role of DNA polymerase?",back:`Function: Synthesizes new DNA strand

Key properties:
• Adds nucleotides 5' → 3' direction only
• Requires 3'-OH group (can't start de novo)
• Needs RNA primer to begin
• Has 3' → 5' exonuclease activity (proofreading)

Types:
• DNA pol III (main synthesis in prokaryotes)
• DNA pol I (removes primers, fills gaps)`},{id:"bio-50",front:"Why is an RNA primer needed for DNA replication?",back:`DNA polymerase CANNOT start synthesis de novo

Reason:
• DNA pol requires existing 3'-OH group
• Can only extend, not initiate

Solution:
• Primase synthesizes short RNA primer (~10 nt)
• Provides 3'-OH for DNA pol to extend
• RNA primer later removed by DNA pol I
• Gap filled and sealed by ligase

High-yield: DNA pol limitation!`},{id:"bio-51",front:"What is the role of DNA ligase?",back:`Function: Seals breaks in sugar-phosphate backbone

Specifically:
• Joins Okazaki fragments on lagging strand
• Seals gaps after RNA primer removal
• Forms phosphodiester bonds
• Requires ATP (in eukaryotes) or NAD⁺ (in prokaryotes)

Essential for completing replication`},{id:"bio-52",front:"What is the role of topoisomerase?",back:`Function: Relieves tension from unwinding DNA helix

Mechanism:
• Cuts one or both DNA strands temporarily
• Allows strand rotation
• Relieves supercoiling ahead of replication fork
• Re-ligates strands

Without it: DNA would become too tangled to replicate

Target of antibiotics (e.g., fluoroquinolones)`},{id:"bio-53",front:"What are leading vs lagging strands?",back:`Leading strand:
• Synthesized continuously 5' → 3'
• Same direction as replication fork movement
• Only one RNA primer needed

Lagging strand:
• Synthesized discontinuously 5' → 3'
• Opposite direction to fork movement
• Multiple RNA primers needed
• Creates Okazaki fragments (~100-200 nt)
• Fragments joined by ligase`},{id:"bio-54",front:"What is transcription and where does it occur?",back:`Process: DNA → RNA (making RNA copy)

Location: Nucleus (eukaryotes), cytoplasm (prokaryotes)

Steps:
1. Initiation: RNA pol binds promoter
2. Elongation: RNA synthesized 5' → 3'
3. Termination: Release at terminator sequence

Key: Only one DNA strand transcribed (template/antisense strand)`},{id:"bio-55",front:"What is the role of RNA polymerase?",back:`Function: Synthesizes RNA from DNA template

Key properties:
• Does NOT require primer (unlike DNA pol!)
• Synthesizes 5' → 3'
• Unwinds DNA locally
• No proofreading (higher error rate)
• Uses ribonucleotides (A, U, G, C)
• Reads template strand 3' → 5'

Eukaryotes: RNA pol II for mRNA`},{id:"bio-56",front:"What are promoters and their function?",back:`Promoter: DNA sequence where transcription begins

Prokaryotes:
• -10 box (TATAAT) - Pribnow box
• -35 box
• Recognized by sigma factor + RNA pol

Eukaryotes:
• TATA box (~-25)
• CAAT box, GC box
• Recognized by transcription factors + RNA pol II

Upstream of gene, not transcribed`},{id:"bio-57",front:"What is RNA splicing (post-transcriptional processing)?",back:`Process: Removing introns and joining exons from pre-mRNA

Steps:
1. Pre-mRNA contains exons + introns
2. Spliceosome removes introns
3. Exons ligated together → mature mRNA
4. Also: 5' cap added, 3' poly-A tail added

Key:
• Only in eukaryotes
• Introns removed, exons expressed
• Alternative splicing → multiple proteins from one gene`},{id:"bio-58",front:"What are introns vs exons?",back:`Exons:
• EXpressed sequences
• Remain in mature mRNA
• Code for protein

Introns:
• INtervening sequences
• Removed during splicing
• Not translated

Mnemonic: EXons are EXpressed, INtrons are IN the trash

Alternative splicing: Different exon combinations → protein diversity`},{id:"bio-59",front:"What is translation and where does it occur?",back:`Process: mRNA → Protein

Location: Ribosomes (cytoplasm or ER)

Steps:
1. Initiation: Ribosome binds mRNA at start codon
2. Elongation: Amino acids added one by one
3. Termination: Stop codon reached, protein released

Key: Codons read 5' → 3', protein synthesized N → C terminus`},{id:"bio-60",front:"What are the ribosome sites (A, P, E)?",back:`A site (Aminoacyl):
• Accepts incoming charged tRNA
• New amino acid enters here

P site (Peptidyl):
• Holds tRNA with growing peptide chain
• Peptide bond forms between P and A

E site (Exit):
• Discharged tRNA exits here

Flow: tRNA enters A → moves to P → exits through E`},{id:"bio-61",front:"What are start and stop codons?",back:`Start codon:
• AUG (codes for Methionine)
• Translation begins here
• All proteins start with Met (often removed later)

Stop codons (no tRNA binds):
• UAA, UAG, UGA
• Signal translation termination
• Release factors bind instead

Mnemonic: U Are Away, U Are Gone, U Go Away`},{id:"bio-62",front:"What is the genetic code and its properties?",back:`Genetic code: 64 codons (4³) code for 20 amino acids

Properties:
• Universal (nearly all organisms use same code)
• Degenerate/redundant (multiple codons per AA)
• Unambiguous (each codon = only 1 AA)
• Non-overlapping (read in triplets)
• Wobble at 3rd position (relaxed base pairing)

61 sense codons, 3 stop codons`},{id:"bio-63",front:"Compare transcription vs translation",back:`Transcription (DNA → RNA):
• In nucleus (eukaryotes)
• RNA polymerase
• No primer needed
• Template: DNA
• Product: mRNA

Translation (RNA → Protein):
• At ribosome
• Ribosome + tRNA
• Requires start codon
• Template: mRNA
• Product: polypeptide

Both 5' → 3' synthesis direction`},{id:"bio-64",front:"What is a Punnett square and how do you use it?",back:`Tool to predict offspring genotypes from parental crosses

Steps:
1. Write one parent's alleles on top
2. Write other parent's alleles on side
3. Fill boxes by combining alleles
4. Count ratios

Example: Aa × Aa
→ 1 AA : 2 Aa : 1 aa (genotype)
→ 3 dominant : 1 recessive (phenotype)

Monohybrid: 3:1 ratio; Dihybrid: 9:3:3:1 ratio`},{id:"bio-65",front:"What are dominant vs recessive inheritance patterns?",back:`Dominant:
• Expressed with one copy (Aa or AA)
• Capital letter (A)
• Masks recessive allele
• Example: Huntington's disease

Recessive:
• Requires two copies (aa) to be expressed
• Lowercase letter (a)
• Masked by dominant
• Example: Cystic fibrosis, sickle cell

Heterozygote (Aa): Carrier for recessive trait`},{id:"bio-66",front:"What is incomplete dominance?",back:`Neither allele is fully dominant; heterozygote shows intermediate phenotype

Example: Flower color
• RR = red
• WW = white
• RW = pink (blend)

Cross RW × RW:
→ 1 RR : 2 RW : 1 WW
→ 1 red : 2 pink : 1 white (1:2:1 ratio)

Genotype ratio = phenotype ratio`},{id:"bio-67",front:"What is codominance?",back:`Both alleles fully expressed in heterozygote (no blending)

Example: ABO blood type
• Iᴬ and Iᴮ both expressed
• Iᴬ Iᴮ = AB blood type (both antigens)

Other example: Roan coat in cattle (red + white patches)

Difference from incomplete dominance:
• Codominance: Both traits visible
• Incomplete: Blended/intermediate trait`},{id:"bio-68",front:"What is the monohybrid cross ratio?",back:`Cross: Heterozygote × Heterozygote (Aa × Aa)

Genotype ratio: 1:2:1
• 1 AA : 2 Aa : 1 aa

Phenotype ratio: 3:1
• 3 dominant : 1 recessive

Probabilities:
• Dominant phenotype: 3/4 (75%)
• Recessive phenotype: 1/4 (25%)
• Heterozygote: 1/2 (50%)`},{id:"bio-69",front:"What is the dihybrid cross ratio?",back:`Cross: AaBb × AaBb (two traits, both heterozygous)

Phenotype ratio: 9:3:3:1
• 9 both dominant (A_B_)
• 3 first dominant, second recessive (A_bb)
• 3 first recessive, second dominant (aaB_)
• 1 both recessive (aabb)

Requires: Independent assortment of genes

Genotype: 16 possible combinations`},{id:"bio-70",front:"What is a test cross?",back:`Cross an unknown genotype with homozygous recessive (aa)

Purpose: Determine if unknown is AA or Aa

Results:
• If all offspring dominant → unknown was AA
• If ~50% dominant, 50% recessive → unknown was Aa

Example:
• A_ × aa
• If AA × aa → all Aa (dominant)
• If Aa × aa → 1 Aa : 1 aa`},{id:"bio-71",front:"State the Hardy-Weinberg equation",back:`Allele frequencies: p + q = 1
• p = frequency of dominant allele (A)
• q = frequency of recessive allele (a)

Genotype frequencies: p² + 2pq + q² = 1
• p² = frequency of AA
• 2pq = frequency of Aa
• q² = frequency of aa

Used to calculate allele/genotype frequencies in populations`},{id:"bio-72",front:"What are the Hardy-Weinberg assumptions?",back:`Population must have:
1. No mutations (no new alleles)
2. Random mating (no mate preference)
3. No gene flow (no migration in/out)
4. Large population (no genetic drift)
5. No natural selection (all genotypes equal fitness)

If assumptions met → allele frequencies constant
If violated → evolution occurs`},{id:"bio-73",front:"How do you use Hardy-Weinberg to calculate carrier frequency?",back:`For recessive trait:

Given: Disease frequency (q²)
1. Calculate q = √(q²)
2. Calculate p = 1 - q
3. Carrier frequency = 2pq

Example: Disease affects 1/10,000
• q² = 0.0001
• q = 0.01
• p = 0.99
• 2pq = 2(0.99)(0.01) ≈ 0.02 or 1/50

Carriers much more common than affected!`},{id:"bio-74",front:"What is sex-linked inheritance?",back:`Genes on sex chromosomes (usually X chromosome)

X-linked recessive:
• Males (XY) need only 1 copy to be affected
• Females (XX) need 2 copies (rare)
• Affected males > affected females
• Example: Hemophilia, color blindness

Pattern:
• Carrier mother × normal father
• 50% sons affected, 50% daughters carriers`},{id:"bio-75",front:"What causes sickle cell disease (classic MCAT example)?",back:`Single amino acid mutation in β-globin gene:
• Position 6: Glu → Val
• GAG → GTG (DNA)
• Glutamic acid (polar, negative) → Valine (nonpolar)

Result:
• Abnormal hemoglobin (HbS)
• Hydrophobic patch → aggregation
• RBCs sickle-shaped
• Vascular occlusion, pain, anemia

Inheritance: Autosomal recessive
Heterozygote advantage: Protection from malaria`},{id:"bio-76",front:"What is the heterozygote advantage in sickle cell?",back:`Genotypes:
• HbA/HbA: Normal, susceptible to malaria
• HbA/HbS: Carrier, mild sickling, resistant to malaria
• HbS/HbS: Sickle cell disease, severe

Heterozygote (carrier) has advantage:
• Protection from malaria
• No severe sickle cell
• Higher fitness in malaria-endemic regions

Explains high frequency in Africa
Example of balancing selection`},{id:"bio-77",front:"Compare DNA replication, transcription, and translation enzymes",back:`Replication (DNA → DNA):
• Helicase, DNA polymerase, primase, ligase, topoisomerase
• Needs primer, 5' → 3'

Transcription (DNA → RNA):
• RNA polymerase
• No primer needed, 5' → 3'

Translation (RNA → Protein):
• Ribosome, tRNA, aminoacyl-tRNA synthetase
• Start codon needed

All synthesize 5' → 3' (or N → C for protein)`},{id:"bio-78",front:"What is the key difference between DNA and RNA polymerase?",back:`DNA polymerase:
• REQUIRES 3'-OH (needs primer)
• Cannot start de novo
• Has proofreading (3' → 5' exonuclease)
• Lower error rate
• Synthesizes DNA

RNA polymerase:
• Does NOT require primer
• Can start de novo
• No proofreading
• Higher error rate
• Synthesizes RNA

High-yield: DNA pol needs primer, RNA pol doesn't!`},{id:"bio-79",front:"What is glycolysis and where does it occur?",back:`Glycolysis: Breakdown of glucose (6C) into 2 pyruvate (3C)

Location: Cytosol

Conditions: Aerobic or anaerobic

Net yield per glucose:
• 2 ATP (4 produced - 2 invested)
• 2 NADH
• 2 pyruvate

Phases:
1. Energy investment (uses 2 ATP)
2. Energy payoff (produces 4 ATP, 2 NADH)`},{id:"bio-80",front:"What are the 10 steps of glycolysis?",back:`Energy investment phase:
1. Glucose → G6P (hexokinase, uses ATP)
2. G6P → F6P (phosphoglucose isomerase)
3. F6P → F-1,6-BP (phosphofructokinase-1, uses ATP, RATE-LIMITING)
4. F-1,6-BP → DHAP + G3P (aldolase)
5. DHAP → G3P (triose phosphate isomerase)

Energy payoff phase (×2):
6. G3P → 1,3-BPG (G3P dehydrogenase, makes NADH)
7. 1,3-BPG → 3PG (phosphoglycerate kinase, makes ATP)
8. 3PG → 2PG (phosphoglycerate mutase)
9. 2PG → PEP (enolase)
10. PEP → pyruvate (pyruvate kinase, makes ATP)`},{id:"bio-81",front:"What is the rate-limiting step of glycolysis?",back:`Step 3: Fructose-6-phosphate → Fructose-1,6-bisphosphate

Enzyme: Phosphofructokinase-1 (PFK-1)

Regulation:
Activated by:
• AMP, ADP (low energy)
• Fructose-2,6-bisphosphate

Inhibited by:
• ATP (high energy)
• Citrate (abundant TCA intermediates)
• H⁺ (low pH)

Most important regulatory step!`},{id:"bio-82",front:"What are the irreversible steps of glycolysis?",back:`3 irreversible steps (kinases using ATP):

1. Glucose → G6P
• Hexokinase (or glucokinase in liver/pancreas)

2. F6P → F-1,6-BP
• Phosphofructokinase-1 (PFK-1, rate-limiting)

3. PEP → Pyruvate
• Pyruvate kinase

These are also the regulated steps!
Gluconeogenesis bypasses these with different enzymes.`},{id:"bio-83",front:"What is the fate of pyruvate?",back:`Depends on oxygen availability:

Aerobic conditions:
• Pyruvate → Acetyl-CoA (in mitochondria)
• Pyruvate dehydrogenase complex
• Produces NADH, CO₂
• Enters TCA cycle

Anaerobic conditions:
• Pyruvate → Lactate (muscle, RBCs)
• Lactate dehydrogenase
• Regenerates NAD⁺ for glycolysis

Or:
• Pyruvate → Ethanol (yeast fermentation)`},{id:"bio-84",front:"What is the TCA cycle (Krebs cycle) and where does it occur?",back:`TCA cycle: Oxidizes acetyl-CoA to CO₂, generates electron carriers

Location: Mitochondrial matrix

Per acetyl-CoA:
• 3 NADH
• 1 FADH₂
• 1 GTP (or ATP)
• 2 CO₂

Per glucose (2 acetyl-CoA):
• 6 NADH
• 2 FADH₂
• 2 GTP
• 4 CO₂

Requires oxygen (aerobic only)`},{id:"bio-85",front:"What are the 8 steps of the TCA cycle?",back:`Mnemonic: "Citrate Is Krebs' Starting Substrate For Making Oxaloacetate"

1. Acetyl-CoA + Oxaloacetate → Citrate (citrate synthase)
2. Citrate → Isocitrate (aconitase)
3. Isocitrate → α-Ketoglutarate (isocitrate dehydrogenase, NADH, CO₂)
4. α-Ketoglutarate → Succinyl-CoA (α-ketoglutarate dehydrogenase, NADH, CO₂)
5. Succinyl-CoA → Succinate (succinyl-CoA synthetase, GTP)
6. Succinate → Fumarate (succinate dehydrogenase, FADH₂)
7. Fumarate → Malate (fumarase)
8. Malate → Oxaloacetate (malate dehydrogenase, NADH)`},{id:"bio-86",front:"What are the rate-limiting steps of the TCA cycle?",back:`3 key regulatory enzymes:

1. Isocitrate dehydrogenase (Step 3)
• Activated by: ADP, Ca²⁺
• Inhibited by: ATP, NADH

2. α-Ketoglutarate dehydrogenase (Step 4)
• Inhibited by: Succinyl-CoA, NADH, ATP

3. Citrate synthase (Step 1)
• Inhibited by: Citrate, ATP, NADH

All respond to energy status!`},{id:"bio-87",front:"What is the pyruvate dehydrogenase complex?",back:`Function: Converts pyruvate → acetyl-CoA (links glycolysis to TCA)

Location: Mitochondrial matrix

Reaction:
Pyruvate + CoA + NAD⁺ → Acetyl-CoA + NADH + CO₂

Irreversible and highly regulated!

Activated by:
• Ca²⁺, ADP, NAD⁺, CoA

Inhibited by:
• Acetyl-CoA, NADH, ATP

Cofactors: TPP (B₁), lipoic acid, CoA (B₅), FAD (B₂), NAD⁺ (B₃)`},{id:"bio-88",front:"What is the electron transport chain and where is it located?",back:`ETC: Series of protein complexes that transfer electrons and pump protons

Location: Inner mitochondrial membrane

Complexes:
• Complex I: NADH dehydrogenase (pumps 4 H⁺)
• Complex II: Succinate dehydrogenase (no pumping)
• Complex III: Cytochrome bc₁ (pumps 4 H⁺)
• Complex IV: Cytochrome c oxidase (pumps 2 H⁺)

Electron carriers: NADH, FADH₂ → O₂ (final acceptor)

Creates proton gradient for ATP synthesis`},{id:"bio-89",front:"What is oxidative phosphorylation?",back:`Process: ATP synthesis using proton gradient from ETC

Enzyme: ATP synthase (Complex V)

Location: Inner mitochondrial membrane

Mechanism:
• Protons flow down gradient through ATP synthase
• Drives phosphorylation: ADP + Pi → ATP

Yield:
• 1 NADH → ~2.5 ATP
• 1 FADH₂ → ~1.5 ATP

Requires O₂ as final electron acceptor!`},{id:"bio-90",front:"What is the total ATP yield from glucose oxidation?",back:`Complete oxidation of 1 glucose:

Glycolysis: 2 ATP + 2 NADH
Pyruvate → Acetyl-CoA: 2 NADH
TCA cycle: 2 GTP + 6 NADH + 2 FADH₂

Total electron carriers:
• 10 NADH × 2.5 ATP = 25 ATP
• 2 FADH₂ × 1.5 ATP = 3 ATP
• 4 ATP (substrate-level)

Theoretical max: ~32 ATP
Actual yield: ~30-32 ATP

(Old estimate was 38, now adjusted for transport costs)`},{id:"bio-91",front:"Where do metabolic pathways occur? (cytosol vs mitochondria)",back:`Cytosol:
• Glycolysis
• Pentose phosphate pathway
• Fatty acid synthesis
• Gluconeogenesis

Mitochondrial matrix:
• TCA cycle
• Pyruvate dehydrogenase
• β-oxidation
• Ketogenesis

Inner mitochondrial membrane:
• ETC
• ATP synthase
• Fatty acid transport (carnitine shuttle)`},{id:"bio-92",front:"What is gluconeogenesis and where does it occur?",back:`Gluconeogenesis: Synthesis of glucose from non-carbohydrate sources

Location: Liver (primarily), kidney, small intestine

Substrates:
• Lactate (Cori cycle)
• Amino acids (except Leu, Lys)
• Glycerol (from fat)
• Propionyl-CoA

NOT from: Acetyl-CoA (fatty acids) - irreversible

Cost: 6 ATP per glucose

Occurs during: Fasting, starvation, exercise`},{id:"bio-93",front:"How does gluconeogenesis bypass glycolysis irreversible steps?",back:`Glycolysis vs Gluconeogenesis enzymes:

1. Pyruvate → PEP:
• Bypass: Pyruvate carboxylase + PEPCK
• (2 steps, uses ATP and GTP)

2. F-1,6-BP → F6P:
• Bypass: Fructose-1,6-bisphosphatase

3. G6P → Glucose:
• Bypass: Glucose-6-phosphatase
• (Only in liver/kidney - allows glucose release)

7 of 10 steps shared, 3 require new enzymes!`},{id:"bio-94",front:"How are glycolysis and gluconeogenesis regulated?",back:`Reciprocal regulation (opposite effects):

Key regulator: Fructose-2,6-bisphosphate (F-2,6-BP)

Fed state (high insulin):
• ↑ F-2,6-BP
• Activates PFK-1 (glycolysis)
• Inhibits F-1,6-BPase (gluconeogenesis)

Fasting state (high glucagon):
• ↓ F-2,6-BP
• Inhibits PFK-1
• Activates F-1,6-BPase

Prevents futile cycles!`},{id:"bio-95",front:"What is β-oxidation and where does it occur?",back:`β-oxidation: Breakdown of fatty acids to acetyl-CoA

Location: Mitochondrial matrix

Process:
• Fatty acid (cytosol) → Acyl-CoA
• Carnitine shuttle into mitochondria
• Repeated cycles remove 2C as acetyl-CoA

4 steps per cycle: "Cut Fat Every Meal"
1. Oxidation (FAD → FADH₂)
2. Hydration
3. Oxidation (NAD⁺ → NADH)
4. Thiolysis (release acetyl-CoA)

For 16C palmitate: 7 cycles, 8 acetyl-CoA`},{id:"bio-96",front:"What is the ATP yield from β-oxidation?",back:`Example: Palmitate (16C fatty acid)

β-oxidation:
• 7 cycles (for 16C)
• 8 acetyl-CoA
• 7 FADH₂ × 1.5 = 10.5 ATP
• 7 NADH × 2.5 = 17.5 ATP

TCA cycle (8 acetyl-CoA):
• 8 × 12 = 96 ATP

Total: ~129 ATP
Minus 2 ATP for activation = ~127 ATP

Fats yield MORE ATP per carbon than glucose!`},{id:"bio-97",front:"What is the carnitine shuttle?",back:`Function: Transports long-chain fatty acids into mitochondria

Steps:
1. Fatty acid + CoA → Acyl-CoA (cytosol)
2. Acyl-CoA + Carnitine → Acyl-carnitine (CPT I)
3. Transport across inner membrane
4. Acyl-carnitine → Acyl-CoA + Carnitine (CPT II, matrix)

Key enzyme: CPT I (carnitine palmitoyltransferase I)
• Inhibited by malonyl-CoA (fatty acid synthesis marker)
• Prevents simultaneous synthesis and breakdown

Deficiency: Cannot oxidize fats, hypoglycemia`},{id:"bio-98",front:"What is the pentose phosphate pathway (PPP)?",back:`PPP: Alternative glucose oxidation pathway

Location: Cytosol

Purposes:
1. Produce NADPH (reducing power)
• Fatty acid synthesis
• Detoxification (glutathione)
• Respiratory burst in phagocytes

2. Produce ribose-5-phosphate
• Nucleotide synthesis

No ATP produced!

Phases:
• Oxidative (irreversible, makes NADPH)
• Non-oxidative (reversible, rearranges sugars)`},{id:"bio-99",front:"What is the oxidative phase of the PPP?",back:`Oxidative phase: G6P → Ribulose-5-P + 2 NADPH + CO₂

Key steps:
1. G6P → 6-Phosphogluconolactone
• G6P dehydrogenase (rate-limiting!)
• Produces NADPH

2. 6-Phosphogluconolactone → 6-Phosphogluconate

3. 6-Phosphogluconate → Ribulose-5-P
• Produces NADPH + CO₂

Regulation: G6P dehydrogenase
• Inhibited by NADPH (product inhibition)
• Activated by NADP⁺`},{id:"bio-100",front:"What is the difference between NADH and NADPH?",back:`Both are electron carriers, different roles:

NADH (from NAD⁺):
• Used in catabolism (breakdown)
• Glycolysis, TCA cycle, β-oxidation
• Oxidized in ETC to make ATP
• Energy production

NADPH (from NADP⁺):
• Used in anabolism (synthesis)
• Fatty acid synthesis, cholesterol synthesis
• Detoxification (glutathione, P450)
• Reducing power for biosynthesis

Source of NADPH: PPP, malic enzyme`},{id:"bio-101",front:"Compare key regulatory enzymes across metabolic pathways",back:`Glycolysis:
• Phosphofructokinase-1 (PFK-1) - rate-limiting

Gluconeogenesis:
• Fructose-1,6-bisphosphatase

TCA cycle:
• Isocitrate dehydrogenase
• α-Ketoglutarate dehydrogenase

β-oxidation:
• Carnitine palmitoyltransferase I (CPT I)

PPP:
• G6P dehydrogenase

Fatty acid synthesis:
• Acetyl-CoA carboxylase

All respond to energy/substrate availability!`},{id:"bio-102",front:"What is substrate-level vs oxidative phosphorylation?",back:`Substrate-level phosphorylation:
• Direct transfer of Pi to ADP
• Enzyme-catalyzed
• Independent of O₂
• Examples:
  - Glycolysis: PGK, pyruvate kinase
  - TCA: Succinyl-CoA synthetase

Oxidative phosphorylation:
• Uses ETC proton gradient
• ATP synthase
• Requires O₂
• Most ATP made this way

Glycolysis uses substrate-level; ETC uses oxidative`},{id:"bio-103",front:"What are key cofactors in metabolism?",back:`Vitamin-derived cofactors:

NAD⁺/NADH: B₃ (niacin)
• Glycolysis, TCA, ETC

FAD/FADH₂: B₂ (riboflavin)
• TCA, ETC, β-oxidation

CoA: B₅ (pantothenic acid)
• Acetyl-CoA, fatty acid metabolism

TPP: B₁ (thiamine)
• Pyruvate dehydrogenase, α-ketoglutarate DH

Biotin: B₇
• Carboxylation reactions (pyruvate carboxylase)

B vitamins are essential for energy metabolism!`},{id:"bio-104",front:"What happens in anaerobic conditions?",back:`Without O₂:

Glycolysis continues:
• Makes 2 ATP (substrate-level)
• Makes 2 NADH

NADH cannot be oxidized in ETC:
• Must regenerate NAD⁺ for glycolysis
• Pyruvate → Lactate (lactate dehydrogenase)
• NADH → NAD⁺

Lactate buildup:
• Lowers pH (lactic acidosis)
• Causes muscle fatigue
• Cori cycle transports to liver

TCA and ETC shut down (need O₂)`},{id:"bio-105",front:"What is the Cori cycle?",back:`Function: Recycle lactate from muscle to glucose in liver

Steps:
1. Muscle: Glucose → Lactate (anaerobic glycolysis)
2. Lactate transported to liver via blood
3. Liver: Lactate → Pyruvate → Glucose (gluconeogenesis)
4. Glucose returned to muscle via blood

Importance:
• Prevents lactate buildup
• Maintains glucose supply during exercise
• Net cost: 4 ATP (2 made in muscle, 6 used in liver)

Similar: Alanine cycle (uses amino acids)`},{id:"bio-106",front:"What are peptide vs steroid hormones?",back:`Peptide hormones (water-soluble):
• Made from amino acids
• Cannot cross membrane
• Bind surface receptors
• Use second messengers (cAMP, IP₃, Ca²⁺)
• Fast action (seconds-minutes)
• Examples: Insulin, glucagon, ACTH, growth hormone

Steroid hormones (lipid-soluble):
• Derived from cholesterol
• Cross membrane easily
• Bind intracellular receptors
• Affect gene transcription
• Slow action (hours-days)
• Examples: Cortisol, testosterone, estrogen, aldosterone, vitamin D`},{id:"bio-107",front:"What are the major second messenger systems?",back:`cAMP pathway:
• G-protein coupled receptor (GPCR)
• Activates adenylyl cyclase
• ATP → cAMP → activates protein kinase A (PKA)
• Examples: Glucagon, epinephrine (β-receptors)

IP₃/DAG pathway:
• GPCR activates phospholipase C
• PIP₂ → IP₃ + DAG
• IP₃ releases Ca²⁺ from ER
• DAG activates protein kinase C (PKC)
• Examples: Epinephrine (α₁-receptors), oxytocin

Ca²⁺: Universal messenger, triggers many responses`},{id:"bio-108",front:"Describe insulin: source, type, target, effects",back:`Source: Pancreatic β-cells (islets of Langerhans)

Type: Peptide hormone

Trigger: High blood glucose (fed state)

Targets: Liver, muscle, adipose tissue

Effects (anabolic - storage):
• ↑ Glucose uptake (GLUT4 in muscle/adipose)
• ↑ Glycogen synthesis (liver, muscle)
• ↑ Fatty acid synthesis
• ↑ Protein synthesis
• ↓ Gluconeogenesis
• ↓ Glycogenolysis

Result: ↓ Blood glucose`},{id:"bio-109",front:"Describe glucagon: source, type, target, effects",back:`Source: Pancreatic α-cells (islets of Langerhans)

Type: Peptide hormone

Trigger: Low blood glucose (fasting state)

Target: Primarily liver

Effects (catabolic - mobilization):
• ↑ Glycogenolysis (breaks down glycogen)
• ↑ Gluconeogenesis
• ↑ Lipolysis (fat breakdown)
• ↑ Ketogenesis
• ↓ Glycogen synthesis
• ↓ Glycolysis

Mechanism: cAMP pathway

Result: ↑ Blood glucose`},{id:"bio-110",front:"Compare insulin vs glucagon effects",back:`Insulin (fed state):
• ↓ Blood glucose
• Anabolic (storage)
• ↑ Glycogen synthesis
• ↑ Fat synthesis
• ↑ Protein synthesis
• ↓ Gluconeogenesis

Glucagon (fasting state):
• ↑ Blood glucose
• Catabolic (mobilization)
• ↑ Glycogenolysis
• ↑ Gluconeogenesis
• ↑ Lipolysis
• ↑ Ketogenesis

Opposite effects - maintain glucose homeostasis!`},{id:"bio-111",front:"Describe cortisol: source, type, target, effects",back:`Source: Adrenal cortex (zona fasciculata)

Type: Steroid hormone (glucocorticoid)

Trigger: Stress, low blood glucose, ACTH

Targets: Widespread (liver, muscle, adipose, immune)

Effects:
• ↑ Blood glucose (gluconeogenesis)
• ↑ Protein breakdown (muscle)
• ↑ Lipolysis
• Anti-inflammatory (↓ immune response)
• ↓ Bone formation
• ↑ Stress response

Regulation: HPA axis (hypothalamus-pituitary-adrenal)`},{id:"bio-112",front:"Describe epinephrine: source, type, target, effects",back:`Source: Adrenal medulla

Type: Catecholamine (amino acid derivative, acts like peptide)

Trigger: Stress, fight-or-flight

Targets: Heart, blood vessels, liver, muscle, lungs

Effects:
• ↑ Heart rate and contractility
• ↑ Blood pressure
• ↑ Glycogenolysis (liver, muscle)
• ↑ Gluconeogenesis
• ↑ Lipolysis
• Bronchodilation
• Vasodilation (muscle) / vasoconstriction (GI)

Mechanism: cAMP (β-receptors), IP₃ (α-receptors)

Result: ↑ Blood glucose, ↑ energy availability`},{id:"bio-113",front:"Describe thyroid hormones (T3/T4): source, type, effects",back:`Source: Thyroid gland (follicular cells)

Type: Amino acid derivative (acts like steroid)
• T4 (thyroxine): 4 iodines, more abundant
• T3 (triiodothyronine): 3 iodines, more active

Trigger: TSH from pituitary

Targets: Nearly all cells

Effects:
• ↑ Basal metabolic rate (BMR)
• ↑ O₂ consumption
• ↑ Heat production
• ↑ Heart rate
• Essential for growth and development
• CNS development in fetus

Regulation: HPT axis (hypothalamus-pituitary-thyroid)`},{id:"bio-114",front:"What is the hypothalamic-pituitary-thyroid (HPT) axis?",back:`Hypothalamus:
→ TRH (thyrotropin-releasing hormone)

Anterior pituitary:
→ TSH (thyroid-stimulating hormone)

Thyroid gland:
→ T3/T4 (thyroid hormones)

Negative feedback:
• T3/T4 ↓ TRH and TSH release
• Maintains thyroid hormone levels

Disorders:
• Hypothyroidism: Low T3/T4, high TSH
• Hyperthyroidism: High T3/T4, low TSH (unless pituitary tumor)`},{id:"bio-115",front:"What is the hypothalamic-pituitary-adrenal (HPA) axis?",back:`Hypothalamus:
→ CRH (corticotropin-releasing hormone)

Anterior pituitary:
→ ACTH (adrenocorticotropic hormone)

Adrenal cortex:
→ Cortisol (glucocorticoid)

Negative feedback:
• Cortisol ↓ CRH and ACTH release
• Circadian rhythm (peaks in morning)

Stress response:
• HPA axis activated
• ↑ Cortisol for sustained stress response
• Complements epinephrine (acute stress)`},{id:"bio-116",front:"What is the hypothalamic-pituitary-gonadal (HPG) axis?",back:`Hypothalamus:
→ GnRH (gonadotropin-releasing hormone)

Anterior pituitary:
→ FSH and LH (follicle-stimulating hormone, luteinizing hormone)

Gonads:
→ Sex steroids (testosterone, estrogen, progesterone)

Negative feedback:
• Sex steroids ↓ GnRH, FSH, LH

Males:
• FSH → spermatogenesis
• LH → testosterone production

Females:
• FSH → follicle development
• LH → ovulation, progesterone production`},{id:"bio-117",front:"Describe growth hormone (GH): source, type, effects",back:`Source: Anterior pituitary (somatotrophs)

Type: Peptide hormone

Trigger: GHRH (growth hormone-releasing hormone)

Targets: Liver, bone, muscle, adipose

Direct effects:
• ↑ Lipolysis
• ↑ Blood glucose (anti-insulin)

Indirect effects (via IGF-1 from liver):
• ↑ Bone growth
• ↑ Muscle growth
• ↑ Protein synthesis

Regulation:
• GHRH stimulates
• Somatostatin (GHIH) inhibits
• Negative feedback by IGF-1`},{id:"bio-118",front:"Describe prolactin: source, type, effects",back:`Source: Anterior pituitary (lactotrophs)

Type: Peptide hormone

Targets: Mammary glands

Effects:
• ↑ Milk production (lactation)
• ↓ GnRH (suppresses reproduction during breastfeeding)

Regulation (unique!):
• Inhibited by dopamine from hypothalamus
• Stimulated by TRH, suckling

Note: Only anterior pituitary hormone primarily under inhibitory control`},{id:"bio-119",front:"What hormones are released by the posterior pituitary?",back:`Posterior pituitary stores and releases (made in hypothalamus):

Oxytocin:
• Uterine contractions during labor
• Milk ejection reflex
• Social bonding
• Positive feedback loop in labor

ADH (Vasopressin):
• ↑ Water reabsorption (collecting duct)
• ↑ Blood pressure (vasoconstriction at high doses)
• Released when: dehydration, ↓ blood volume, ↑ osmolarity
• Target: V2 receptors in kidney

Both are peptide hormones`},{id:"bio-120",front:"Describe aldosterone: source, type, target, effects",back:`Source: Adrenal cortex (zona glomerulosa)

Type: Steroid hormone (mineralocorticoid)

Trigger: Low blood pressure, angiotensin II, high K⁺

Target: Kidney (distal tubule, collecting duct)

Effects:
• ↑ Na⁺ reabsorption
• ↑ K⁺ excretion
• ↑ H⁺ excretion
• ↑ Water reabsorption (follows Na⁺)

Result: ↑ Blood volume, ↑ blood pressure

Regulation: RAAS (renin-angiotensin-aldosterone system)`},{id:"bio-121",front:"What is the RAAS system?",back:`Renin-Angiotensin-Aldosterone System:

Low blood pressure detected:
→ Kidney releases renin
→ Renin converts angiotensinogen → angiotensin I
→ ACE (lungs) converts angiotensin I → angiotensin II

Angiotensin II effects:
• Vasoconstriction (↑ blood pressure)
• Stimulates aldosterone release
• Stimulates ADH release
• ↑ Thirst

Aldosterone:
• ↑ Na⁺/water reabsorption
• ↑ Blood volume

Result: Restored blood pressure`},{id:"bio-122",front:"Describe parathyroid hormone (PTH): source, target, effects",back:`Source: Parathyroid glands (chief cells)

Type: Peptide hormone

Trigger: Low blood Ca²⁺

Targets: Bone, kidney, intestine (indirect)

Effects:
• ↑ Blood Ca²⁺
• ↓ Blood phosphate

Mechanism:
• Bone: ↑ osteoclast activity (Ca²⁺ release)
• Kidney: ↑ Ca²⁺ reabsorption, ↓ PO₄³⁻ reabsorption
• Kidney: ↑ Vitamin D activation
• Intestine: ↑ Ca²⁺ absorption (via vitamin D)

Opposite of calcitonin`},{id:"bio-123",front:"Describe calcitonin: source, target, effects",back:`Source: Thyroid gland (parafollicular C cells)

Type: Peptide hormone

Trigger: High blood Ca²⁺

Target: Bone

Effects:
• ↓ Blood Ca²⁺
• ↓ Osteoclast activity
• ↑ Ca²⁺ deposition in bone

Note: Less important than PTH in humans

Mnemonic: Calci-TONE-in TONES down calcium

Opposite of PTH`},{id:"bio-124",front:"Compare PTH vs Calcitonin vs Vitamin D",back:`PTH (↑ when Ca²⁺ low):
• ↑ Bone resorption
• ↑ Kidney Ca²⁺ reabsorption
• ↑ Vitamin D activation
• Result: ↑ Blood Ca²⁺

Calcitonin (↑ when Ca²⁺ high):
• ↓ Bone resorption
• Result: ↓ Blood Ca²⁺

Vitamin D (active form: calcitriol):
• ↑ Intestinal Ca²⁺ absorption
• ↑ Bone resorption (with PTH)
• Result: ↑ Blood Ca²⁺

All regulate Ca²⁺ homeostasis`},{id:"bio-125",front:"Describe testosterone: source, type, effects",back:`Source: Testes (Leydig cells)

Type: Steroid hormone (androgen)

Trigger: LH from pituitary

Targets: Multiple tissues

Effects:
• Male secondary sexual characteristics
• Spermatogenesis (with FSH)
• ↑ Muscle mass
• ↑ Bone density
• ↑ Libido
• Deepening voice
• Facial/body hair

Conversion: Can be converted to:
• DHT (dihydrotestosterone, more potent)
• Estradiol (aromatase in adipose)`},{id:"bio-126",front:"Describe estrogen and progesterone: source, type, effects",back:`Estrogen (estradiol):
Source: Ovaries (follicles), adipose
Type: Steroid
Effects:
• Female secondary sexual characteristics
• Endometrial growth (proliferative phase)
• Bone density
• LH surge (positive feedback at high levels)

Progesterone:
Source: Corpus luteum (after ovulation)
Type: Steroid
Effects:
• Maintains endometrium (secretory phase)
• ↑ Basal body temperature
• Inhibits uterine contractions
• Prepares for pregnancy

Both regulated by HPG axis`},{id:"bio-127",front:"What are the phases of the menstrual cycle?",back:`Follicular phase (Days 1-14):
• FSH stimulates follicle development
• Follicle produces estrogen
• Endometrium proliferates
• Ends with LH surge

Ovulation (Day 14):
• LH surge triggers ovulation
• Follicle releases egg

Luteal phase (Days 15-28):
• Corpus luteum forms from follicle
• Produces progesterone (and estrogen)
• Endometrium becomes secretory
• If no pregnancy: corpus luteum degenerates
• Hormone drop → menstruation

Menstruation: Shedding of endometrium`},{id:"bio-128",front:"What is negative vs positive feedback in hormones?",back:`Negative feedback (most common):
• Hormone inhibits its own production
• Maintains homeostasis
• Examples:
  - T3/T4 ↓ TSH
  - Cortisol ↓ ACTH
  - Testosterone ↓ LH
  - High glucose ↓ glucagon

Positive feedback (rare):
• Hormone enhances its own production
• Amplifies response
• Examples:
  - Oxytocin in labor (stronger contractions → more oxytocin)
  - Estrogen LH surge (ovulation)

Positive feedback is self-limiting (ends when stimulus removed)`},{id:"bio-129",front:"What are the major hormones from the anterior pituitary?",back:`Mnemonic: FLAT PEG

FSH: Follicle-stimulating hormone
• Gonads (spermatogenesis, follicle development)

LH: Luteinizing hormone
• Gonads (testosterone, ovulation, progesterone)

ACTH: Adrenocorticotropic hormone
• Adrenal cortex (cortisol)

TSH: Thyroid-stimulating hormone
• Thyroid (T3/T4)

Prolactin:
• Mammary glands (milk production)

Endorphins:
• Pain relief, pleasure

GH: Growth hormone
• Liver (IGF-1), bone, muscle

All peptide hormones!`},{id:"bio-130",front:"What hormones does the adrenal gland produce?",back:`Adrenal cortex (steroid hormones):
Mnemonic: "GFR" for zones (superficial → deep)

Zona Glomerulosa: Mineralocorticoids
• Aldosterone (Na⁺/K⁺ balance)

Zona Fasciculata: Glucocorticoids
• Cortisol (stress, glucose metabolism)

Zona Reticularis: Androgens
• DHEA, androstenedione (sex hormones)

Adrenal medulla (catecholamines):
• Epinephrine (80%)
• Norepinephrine (20%)
• Fight-or-flight response

Mnemonic: "Salt, Sugar, Sex" = Aldosterone, Cortisol, Androgens`},{id:"bio-131",front:"Compare endocrine vs paracrine vs autocrine signaling",back:`Endocrine:
• Hormone released into bloodstream
• Acts on distant target cells
• Systemic effects
• Examples: Insulin, thyroid hormones

Paracrine:
• Signaling molecule acts on nearby cells
• Local effects only
• Examples: Histamine, growth factors, neurotransmitters (at synapse)

Autocrine:
• Cell signals itself
• Same cell produces and responds
• Examples: IL-2 in T cells, prostaglandins

All use receptors and signaling cascades`},{id:"bio-132",front:"What are key hormone receptor types?",back:`G-protein coupled receptors (GPCRs):
• Peptide hormones
• 7 transmembrane domains
• Second messengers (cAMP, IP₃)
• Examples: Glucagon, epinephrine, ADH

Receptor tyrosine kinases (RTKs):
• Growth factors
• Autophosphorylation
• Examples: Insulin, IGF-1, EGF

Intracellular receptors:
• Steroid/thyroid hormones
• In cytoplasm or nucleus
• Act as transcription factors
• Examples: Cortisol, estrogen, T3/T4

Ion channel receptors:
• Neurotransmitters`},{id:"bio-133",front:"What are the key differences between prokaryotes and eukaryotes?",back:`Prokaryotes (bacteria, archaea):
• No nucleus (nucleoid region)
• No membrane-bound organelles
• Smaller ribosomes (70S: 30S + 50S)
• Circular DNA
• No histones (usually)
• Cell wall (peptidoglycan in bacteria)
• Simpler, smaller (1-10 μm)

Eukaryotes (animals, plants, fungi, protists):
• Membrane-bound nucleus
• Membrane-bound organelles
• Larger ribosomes (80S: 40S + 60S)
• Linear DNA with histones
• Larger, more complex (10-100 μm)`},{id:"bio-134",front:"What is the structure and function of the nucleus?",back:`Structure:
• Double membrane (nuclear envelope)
• Nuclear pores (transport in/out)
• Nucleolus (ribosome assembly)
• Chromatin (DNA + histones)

Function:
• Houses genetic material (DNA)
• Site of transcription (DNA → RNA)
• Site of ribosome assembly (nucleolus)
• Protects DNA

Nuclear pores:
• Allow mRNA, tRNA, ribosomes out
• Allow transcription factors, histones in

ONLY in eukaryotes!`},{id:"bio-135",front:"What is the structure and function of mitochondria?",back:`Structure:
• Double membrane (outer + inner)
• Inner membrane: cristae (folds) with ETC
• Matrix: contains TCA cycle enzymes
• Own circular DNA (maternal inheritance)
• Own 70S ribosomes

Function:
• Cellular respiration
• ATP production (oxidative phosphorylation)
• TCA cycle (matrix)
• ETC and ATP synthase (inner membrane)

Endosymbiotic theory: Evolved from bacteria

Found in ALL eukaryotic cells`},{id:"bio-136",front:"What is the structure and function of the endoplasmic reticulum?",back:`Rough ER (RER):
• Studded with ribosomes
• Protein synthesis and modification
• Makes membrane proteins and secreted proteins
• Post-translational modifications

Smooth ER (SER):
• No ribosomes
• Lipid synthesis (phospholipids, steroids)
• Ca²⁺ storage (sarcoplasmic reticulum in muscle)
• Detoxification (liver)
• Carbohydrate metabolism

Both continuous with nuclear envelope
ONLY in eukaryotes`},{id:"bio-137",front:"What is the structure and function of the Golgi apparatus?",back:`Structure:
• Stacks of flattened membrane sacs (cisternae)
• Cis face (receives from ER)
• Trans face (ships to destinations)

Function:
• Modifies proteins from ER
• Glycosylation (adds sugars)
• Sorts and packages proteins
• Forms vesicles for transport
• Makes lysosomes

Pathway: RER → Golgi → Vesicles → Destination

Destinations: Plasma membrane, secretion, lysosomes`},{id:"bio-138",front:"What is the structure and function of lysosomes?",back:`Structure:
• Membrane-bound vesicle
• Contains hydrolytic enzymes (acid hydrolases)
• Acidic interior (pH ~5)

Function:
• Intracellular digestion
• Break down: Damaged organelles, pathogens, macromolecules
• Autophagy (recycle cell components)
• Apoptosis (programmed cell death)

Formation: Budded from trans-Golgi

Storage diseases: Deficient lysosomal enzymes (Tay-Sachs, Gaucher)

ONLY in animal cells (plants use vacuoles)`},{id:"bio-139",front:"What is the structure and function of peroxisomes?",back:`Structure:
• Single membrane-bound organelle
• Contains oxidative enzymes

Function:
• Break down fatty acids (β-oxidation)
• Detoxification (alcohol, toxins)
• H₂O₂ production and breakdown
  - Oxidase enzymes produce H₂O₂
  - Catalase breaks down H₂O₂ → H₂O + O₂
• Synthesize plasmalogens (lipids)

Key enzyme: Catalase (very fast, breaks down H₂O₂)

Found in liver and kidney (high detox activity)`},{id:"bio-140",front:"What is the structure and function of ribosomes?",back:`Structure:
• RNA + protein complex
• Two subunits (large + small)

Prokaryotes: 70S (30S + 50S)
Eukaryotes: 80S (40S + 60S)
• Cytoplasmic (free): 80S
• ER-bound: 80S
• Mitochondria/chloroplasts: 70S (prokaryotic origin)

Function:
• Protein synthesis (translation)
• Links amino acids via peptide bonds
• Reads mRNA codons

Free ribosomes: Cytoplasmic proteins
Bound ribosomes: Membrane/secreted proteins`},{id:"bio-141",front:"What is the structure and function of the cytoskeleton?",back:`Three main components:

Microfilaments (actin, 7 nm):
• Cell shape and movement
• Muscle contraction
• Cytokinesis (cleavage furrow)

Intermediate filaments (8-10 nm):
• Structural support
• Anchor organelles
• Examples: Keratin, neurofilaments

Microtubules (tubulin, 25 nm):
• Cell shape, intracellular transport
• Chromosome separation (spindle fibers)
• Cilia and flagella movement
• Tracks for motor proteins (kinesin, dynein)

ONLY in eukaryotes (prokaryotes have simpler proteins)`},{id:"bio-142",front:"What are centrioles and centrosomes?",back:`Centrioles:
• Cylinder of 9 triplet microtubules
• Two perpendicular centrioles = centrosome

Centrosome:
• Microtubule organizing center (MTOC)
• Duplicates before cell division
• Moves to opposite poles
• Forms mitotic spindle

Function:
• Organize microtubules
• Form spindle apparatus in mitosis
• Template for cilia/flagella (basal bodies)

Found in animal cells (most plants lack centrioles)`},{id:"bio-143",front:"What are cilia and flagella?",back:`Structure:
• 9+2 arrangement: 9 doublet microtubules + 2 central
• Basal body (9 triplets, like centriole)
• Motor protein: Dynein (ATP-powered)
• Plasma membrane covering

Cilia:
• Short, numerous
• Coordinated beating
• Examples: Respiratory tract, fallopian tubes

Flagella:
• Long, few (usually 1-2)
• Whip-like motion
• Example: Sperm

Prokaryotic flagella: Different! Made of flagellin protein, rotates`},{id:"bio-144",front:"What is the structure and function of chloroplasts?",back:`Structure:
• Double membrane (outer + inner)
• Thylakoids: Membrane sacs (light reactions)
• Grana: Stacks of thylakoids
• Stroma: Fluid (Calvin cycle)
• Own circular DNA, 70S ribosomes

Function:
• Photosynthesis
• Light reactions (thylakoid membrane): ATP, NADPH
• Calvin cycle (stroma): Fixes CO₂ → glucose

Endosymbiotic theory: Evolved from cyanobacteria

ONLY in plants and algae`},{id:"bio-145",front:"What is the structure and function of vacuoles?",back:`Structure:
• Large membrane-bound sac
• Filled with cell sap (water + dissolved substances)

Central vacuole (plants):
• Very large (up to 90% of cell volume)
• Turgor pressure (keeps plant rigid)
• Storage (water, ions, pigments, toxins)
• Waste disposal (like lysosome)
• Growth (cell enlargement)

Contractile vacuole (protists):
• Pumps out excess water
• Osmoregulation

Food vacuole:
• Temporary, digestion`},{id:"bio-146",front:"What is the structure and function of the cell wall?",back:`Plant cell wall:
• Made of cellulose (polysaccharide)
• Rigid, provides structural support
• Prevents osmotic lysis
• Primary wall (thin, flexible)
• Secondary wall (thick, rigid, lignin)
• Plasmodesmata: Channels between cells

Bacterial cell wall:
• Made of peptidoglycan
• Gram-positive: Thick peptidoglycan
• Gram-negative: Thin peptidoglycan + outer membrane

Fungal cell wall:
• Made of chitin

No cell wall in animal cells!`},{id:"bio-147",front:"What is the plasma membrane structure?",back:`Fluid mosaic model:

Phospholipid bilayer:
• Hydrophilic heads (outside)
• Hydrophobic tails (inside)
• Selectively permeable
• Fluid (lipids move laterally)

Embedded proteins:
• Integral proteins: Span membrane (channels, transporters)
• Peripheral proteins: Surface (signaling, support)

Cholesterol (animals):
• Modulates fluidity
• ↓ Fluidity at high temp, ↑ at low temp

Carbohydrates:
• Glycoproteins, glycolipids (cell recognition)`},{id:"bio-148",front:"Compare passive vs active transport",back:`Passive transport (no ATP):
• Down concentration gradient
• Simple diffusion: Small, nonpolar (O₂, CO₂)
• Facilitated diffusion: Channels/carriers (glucose, ions)
• Osmosis: Water movement

Active transport (requires ATP):
• Against concentration gradient
• Primary: Direct ATP use (Na⁺/K⁺-ATPase)
• Secondary: Uses gradient from primary (Na⁺-glucose cotransporter)

Bulk transport:
• Endocytosis: Into cell (phagocytosis, pinocytosis)
• Exocytosis: Out of cell (secretion)`},{id:"bio-149",front:"What is the Na⁺/K⁺-ATPase pump?",back:`Function: Maintains ion gradients across plasma membrane

Mechanism:
• 3 Na⁺ out, 2 K⁺ in (per ATP)
• Electrogenic (creates charge difference)
• Primary active transport

Result:
• High K⁺ inside, high Na⁺ outside
• Maintains resting potential (-70 mV)
• Creates gradients for secondary active transport

Importance:
• Nerve impulses
• Muscle contraction
• Cell volume regulation
• Secondary active transport

Uses ~30% of cell's ATP!`},{id:"bio-150",front:"What are the types of cell junctions?",back:`Tight junctions (animals):
• Seal cells together
• Prevent leakage between cells
• Example: Intestinal epithelium

Desmosomes (anchoring junctions):
• Anchor cells together
• Provide mechanical strength
• Intermediate filaments
• Example: Skin, heart muscle

Gap junctions (animals):
• Allow communication between cells
• Small molecules, ions pass through
• Connexon proteins
• Example: Heart muscle (coordinated contraction)

Plasmodesmata (plants):
• Channels through cell walls
• Cytoplasm continuous between cells`},{id:"bio-151",front:"What is the endomembrane system?",back:`Integrated system of organelles:

Components:
• Nuclear envelope
• Endoplasmic reticulum (RER, SER)
• Golgi apparatus
• Lysosomes
• Vesicles
• Plasma membrane

Function:
• Synthesize, modify, package, transport proteins and lipids

Pathway for secreted proteins:
1. Ribosomes → RER (synthesis)
2. RER → Golgi (vesicles)
3. Golgi → modification
4. Trans-Golgi → vesicles
5. Vesicles → plasma membrane (exocytosis)

Excludes: Mitochondria, chloroplasts, peroxisomes`},{id:"bio-152",front:"What is the secretory pathway?",back:`Pathway for protein secretion:

1. Signal sequence on mRNA
2. Ribosome binds signal recognition particle (SRP)
3. SRP directs ribosome to RER
4. Protein synthesized into ER lumen
5. Signal sequence cleaved
6. Protein folded and modified in ER
7. Vesicles bud from ER → Golgi
8. Golgi modifies (glycosylation)
9. Vesicles bud from trans-Golgi
10. Vesicles fuse with plasma membrane
11. Exocytosis releases protein

Examples: Antibodies, insulin, digestive enzymes`},{id:"bio-153",front:"What is endosymbiotic theory?",back:`Theory: Mitochondria and chloroplasts evolved from prokaryotes

Evidence:
• Double membrane (from engulfing)
• Own circular DNA (like bacteria)
• 70S ribosomes (prokaryotic type)
• Binary fission (divide independently)
• Own transcription/translation machinery
• Similar size to bacteria

Origin:
• Mitochondria: From aerobic bacteria (α-proteobacteria)
• Chloroplasts: From cyanobacteria

Process: Endocytosis of bacteria → symbiotic relationship → organelle`},{id:"bio-154",front:"What organelles are found in plant vs animal cells?",back:`Plant cells ONLY:
• Cell wall (cellulose)
• Central vacuole (large)
• Chloroplasts (photosynthesis)
• Plasmodesmata

Animal cells ONLY:
• Centrioles
• Lysosomes (plants use vacuole)

Both have:
• Nucleus, mitochondria, ER, Golgi
• Ribosomes, plasma membrane
• Cytoskeleton, peroxisomes

Key difference: Plants are autotrophs (make own food), animals are heterotrophs`},{id:"bio-155",front:"What are the stages of the cell cycle?",back:`Interphase (90% of cycle):
• G1: Cell growth, normal functions
• S: DNA synthesis (replication)
• G2: Preparation for mitosis, organelle replication

M phase (mitosis + cytokinesis):
• Prophase
• Metaphase
• Anaphase
• Telophase
• Cytokinesis

G0 (quiescent):
• Non-dividing state
• Some cells permanently (neurons)
• Some re-enter (liver cells)

Checkpoints: G1/S, G2/M, metaphase (ensure proper division)`},{id:"bio-156",front:"What are the phases of mitosis?",back:`Prophase:
• Chromatin condenses → chromosomes (2 sister chromatids)
• Centrioles move to poles
• Nuclear envelope breaks down
• Spindle apparatus forms

Metaphase:
• Chromosomes align at cell equator (metaphase plate)
• Kinetochores attach to spindle fibers
• Checkpoint: All attached?

Anaphase:
• Sister chromatids separate → opposite poles
• Spindle fibers shorten

Telophase:
• Chromosomes decondense
• Nuclear envelopes reform
• Spindle disappears

Cytokinesis:
• Cleavage furrow (animals) or cell plate (plants)
• Cytoplasm divides`},{id:"bio-157",front:"Compare mitosis vs meiosis",back:`Mitosis:
• 1 division → 2 diploid (2n) cells
• Genetically identical to parent
• Somatic cells (body cells)
• Growth, repair, asexual reproduction

Meiosis:
• 2 divisions → 4 haploid (n) cells
• Genetically different (crossing over, independent assortment)
• Gametes (sex cells)
• Sexual reproduction

Meiosis I: Homologous pairs separate (reductional)
Meiosis II: Sister chromatids separate (like mitosis)

Increases genetic diversity!`},{id:"bio-158",front:"What is apoptosis?",back:`Apoptosis: Programmed cell death (controlled)

Characteristics:
• Cell shrinks
• Chromatin condenses
• DNA fragmentation
• Membrane blebs
• Apoptotic bodies formed
• Phagocytosed (no inflammation)

Triggers:
• Developmental signals
• DNA damage (p53 pathway)
• Lack of growth signals
• Caspases (proteases) execute

Vs Necrosis (uncontrolled):
• Cell swells and bursts
• Inflammation
• Pathological`},{id:"bio-159",front:"What are viruses and their basic structure?",back:`Viruses: Obligate intracellular parasites (NOT cells, not alive)

Basic structure:
• Nucleic acid core (DNA or RNA, never both)
• Protein coat (capsid)
• Some have envelope (lipid membrane from host)

Key features:
• Cannot reproduce independently
• No ribosomes, no metabolism
• Must infect host cell to replicate
• Very small (20-300 nm)

Classification:
• DNA vs RNA
• Single-stranded (ss) vs double-stranded (ds)
• Enveloped vs non-enveloped
• (+) sense vs (-) sense RNA`},{id:"bio-160",front:"What is the lytic vs lysogenic cycle?",back:`Lytic cycle (virulent):
1. Attachment (bind host receptors)
2. Penetration (inject DNA)
3. Biosynthesis (hijack host machinery)
4. Assembly (new virions formed)
5. Lysis (cell bursts, viruses released)

Result: Host cell destroyed

Lysogenic cycle (temperate):
1. Virus integrates into host chromosome (prophage)
2. Replicated with host DNA
3. Can remain dormant for generations
4. Triggered to enter lytic cycle (stress, UV)

Example: Lambda phage, HIV (provirus)

Lysogenic → Lytic when induced`},{id:"bio-161",front:"What are retroviruses?",back:`Retroviruses: RNA viruses that reverse transcribe into DNA

Key features:
• (+) sense ssRNA genome
• Reverse transcriptase enzyme
• Integrase enzyme
• Enveloped

Replication:
1. RNA genome enters cell
2. Reverse transcriptase: RNA → DNA
3. Integrase: DNA integrates into host chromosome (provirus)
4. Host transcribes viral genes
5. New virions assembled and bud off

Example: HIV (Human Immunodeficiency Virus)

Challenge: High mutation rate, drug resistance`},{id:"bio-162",front:"What is HIV and how does it work?",back:`HIV: Retrovirus that infects CD4⁺ T cells

Structure:
• (+) ssRNA (2 copies)
• Reverse transcriptase
• Envelope with gp120 (binds CD4)

Life cycle:
1. gp120 binds CD4 and co-receptor (CCR5/CXCR4)
2. Fusion and entry
3. Reverse transcription (RNA → DNA)
4. Integration into host genome
5. Transcription and translation
6. Assembly and budding

Progression:
• HIV → AIDS (when CD4⁺ count drops)
• Opportunistic infections

Treatment: HAART (antiretrovirals)`},{id:"bio-163",front:"Compare DNA viruses vs RNA viruses",back:`DNA viruses:
• Usually dsDNA
• Replicate in nucleus (use host DNA pol)
• More stable, lower mutation rate
• Examples: Herpes, Pox, Adeno, Papilloma

RNA viruses:
• Can be ssRNA or dsRNA
• Usually replicate in cytoplasm
• RNA-dependent RNA polymerase (error-prone)
• High mutation rate
• Examples: Influenza, polio, hepatitis C, SARS-CoV-2, HIV

Exception: Poxvirus (DNA, replicates in cytoplasm)

RNA viruses mutate faster → hard to develop vaccines/drugs`},{id:"bio-164",front:"What are (+) sense vs (-) sense RNA viruses?",back:`(+) sense RNA:
• Can be directly translated by ribosomes
• Acts like mRNA
• Examples: Polio, Hepatitis A, C, SARS-CoV-2, HIV

(-) sense RNA:
• Complementary to mRNA
• Must be transcribed to (+) sense first
• Must carry RNA polymerase
• Examples: Influenza, measles, Ebola, rabies

Mnemonic: (+) = Positive = can Proceed to translation
(-) = Negative = Needs conversion first`},{id:"bio-165",front:"What are prions?",back:`Prions: Infectious proteins (NO nucleic acid!)

Structure:
• Misfolded protein (PrP^Sc)
• Normal form: PrP^C (cellular)
• Infectious form: PrP^Sc (scrapie)

Mechanism:
• PrP^Sc induces PrP^C to misfold
• Chain reaction of misfolding
• Accumulates in brain tissue
• Forms plaques

Diseases:
• Creutzfeldt-Jakob disease (CJD)
• Mad cow disease (BSE)
• Kuru (human)
• Fatal familial insomnia

Characteristics:
• Not destroyed by heat, radiation, proteases
• Very slow progression (years)
• Always fatal`},{id:"bio-166",front:"What are viroids?",back:`Viroids: Infectious RNA (NO protein coat!)

Structure:
• Small, circular ssRNA
• No capsid, no envelope
• 200-400 nucleotides

Characteristics:
• Smallest known infectious agents
• Infect ONLY plants
• Replicate using host enzymes
• Cause disease by unknown mechanism
• May interfere with gene regulation

Examples:
• Potato spindle tuber viroid
• Citrus exocortis viroid

Different from: Viruses (have protein), prions (protein only)`},{id:"bio-167",front:"What are plasmids?",back:`Plasmids: Extra-chromosomal DNA in bacteria

Characteristics:
• Small, circular dsDNA
• Replicate independently of chromosome
• Not essential for survival (usually)
• Can be transferred between bacteria

Types:
• Resistance (R) plasmids: Antibiotic resistance genes
• Fertility (F) plasmids: Enable conjugation
• Virulence plasmids: Toxins, adhesion factors

Importance:
• Horizontal gene transfer
• Antibiotic resistance spread
• Genetic engineering (cloning vectors)

Conjugation: F⁺ donor → F⁻ recipient via pilus`},{id:"bio-168",front:"What are transposons?",back:`Transposons: "Jumping genes" - mobile DNA elements

Types:
• Simple (insertion sequences): Only transposase gene
• Complex (composite): Carry other genes (e.g., antibiotic resistance)

Mechanism:
1. Transposase enzyme cuts DNA
2. Transposon moves to new location
3. Inserts into genome

Effects:
• Can disrupt genes
• Cause mutations
• Chromosomal rearrangements
• Spread antibiotic resistance

Found in: Prokaryotes and eukaryotes

Barbara McClintock: Discovered in corn (Nobel Prize)`},{id:"bio-169",front:"What are the key structures of bacterial cells?",back:`Essential structures:
• Cell wall (peptidoglycan)
• Plasma membrane
• Cytoplasm
• Nucleoid (circular DNA)
• Ribosomes (70S)

Additional structures:
• Capsule: Polysaccharide layer (protection, virulence)
• Flagella: Motility (flagellin protein)
• Pili/Fimbriae: Adhesion, conjugation
• Plasmids: Extra DNA
• Endospores: Dormant, heat-resistant

No nucleus, no membrane-bound organelles!`},{id:"bio-170",front:"What is the bacterial cell wall structure?",back:`Peptidoglycan (murein):
• Sugars: NAM and NAG alternating
• Cross-linked by peptide bridges
• Provides rigidity, shape
• Prevents osmotic lysis

Gram-positive:
• Thick peptidoglycan layer (20-80 nm)
• Teichoic acids
• No outer membrane
• Purple/blue with Gram stain

Gram-negative:
• Thin peptidoglycan (2-3 nm)
• Outer membrane (lipopolysaccharide, LPS)
• Periplasmic space
• Pink/red with Gram stain
• LPS = endotoxin (triggers immune response)`},{id:"bio-171",front:"What are bacterial endospores?",back:`Endospores: Dormant, highly resistant bacterial structures

Formed by: Some Gram-positive bacteria (Bacillus, Clostridium)

Structure:
• Thick protein coat
• Low water content
• DNA protected
• Metabolically inactive

Resistance to:
• Heat (boiling, autoclaving needed: 121°C)
• Desiccation
• Radiation
• Chemicals
• Extreme pH

Germination: Returns to vegetative state when conditions favorable

Examples:
• Bacillus anthracis (anthrax)
• Clostridium tetani (tetanus)
• Clostridium botulinum (botulism)`},{id:"bio-172",front:"What are the phases of bacterial growth?",back:`Batch culture growth curve:

1. Lag phase:
• Adaptation to environment
• Synthesize enzymes
• Little/no cell division

2. Log (exponential) phase:
• Rapid, constant division
• Maximum growth rate
• Cells most vulnerable to antibiotics

3. Stationary phase:
• Growth rate = death rate
• Nutrient depletion
• Waste accumulation
• Secondary metabolites produced

4. Death phase:
• Death rate > growth rate
• Nutrients exhausted
• Toxic waste buildup

Generation time: Time for population to double`},{id:"bio-173",front:"What are bacterial nutritional requirements?",back:`Energy source:
• Phototrophs: Light
• Chemotrophs: Chemical oxidation

Carbon source:
• Autotrophs: CO₂
• Heterotrophs: Organic compounds

Combinations:
• Photoautotrophs: Light + CO₂ (cyanobacteria)
• Photoheterotrophs: Light + organics (some bacteria)
• Chemoautotrophs: Chemicals + CO₂ (some bacteria)
• Chemoheterotrophs: Organics for both (most bacteria, animals)

Oxygen requirements:
• Obligate aerobes: Require O₂
• Obligate anaerobes: Killed by O₂
• Facultative anaerobes: O₂ preferred but not required
• Aerotolerant: Don't use O₂ but tolerate it
• Microaerophiles: Low O₂ required`},{id:"bio-174",front:"What is bacterial conjugation?",back:`Conjugation: Horizontal gene transfer between bacteria

Requirements:
• Donor cell (F⁺, has F plasmid)
• Recipient cell (F⁻, no F plasmid)
• Sex pilus

Process:
1. Pilus extends from F⁺ to F⁻
2. Cells brought together
3. F plasmid copied (rolling circle replication)
4. Copy transferred through pilus
5. F⁻ becomes F⁺

Hfr strains:
• F plasmid integrated into chromosome
• Can transfer chromosomal DNA
• Allows genetic mapping

Importance: Spreads antibiotic resistance!`},{id:"bio-175",front:"What is bacterial transformation?",back:`Transformation: Uptake of naked DNA from environment

Natural competence:
• Some bacteria naturally take up DNA
• Examples: Streptococcus, Bacillus, Haemophilus

Process:
1. DNA released from dead/lysed bacteria
2. Competent cell binds DNA
3. DNA enters cell
4. Integrates into chromosome OR
5. Remains as plasmid

Artificial transformation:
• Heat shock or electroporation
• Used in genetic engineering

Griffith's experiment (1928):
• First demonstration with Streptococcus pneumoniae
• Smooth (S) vs Rough (R) strains`},{id:"bio-176",front:"What is bacterial transduction?",back:`Transduction: DNA transfer via bacteriophage (virus)

Generalized transduction:
• Random bacterial DNA packaged into phage
• Phage injects DNA into new host
• Can transfer any gene
• Lytic cycle error

Specialized transduction:
• Specific genes near prophage integration site
• Lysogenic cycle
• Prophage excision takes adjacent genes
• Only genes near integration site

Importance:
• Horizontal gene transfer
• Can transfer virulence genes
• Used in genetic research

Example: Diphtheria toxin transferred by phage`},{id:"bio-177",front:"Compare the three types of bacterial gene transfer",back:`Transformation:
• Uptake of naked DNA from environment
• Cell must be competent
• Can be natural or artificial

Conjugation:
• Direct cell-to-cell contact
• Requires pilus (F plasmid)
• Transfers plasmids or chromosomal DNA
• "Bacterial sex"

Transduction:
• DNA transfer via bacteriophage
• Generalized (random) or specialized (specific)
• Phage carries bacterial DNA

All three:
• Horizontal gene transfer
• Increase genetic diversity
• Spread antibiotic resistance`},{id:"bio-178",front:"What is quorum sensing in bacteria?",back:`Quorum sensing: Cell density-dependent gene regulation

Mechanism:
1. Bacteria produce signaling molecules (autoinducers)
2. At low density: Signals diffuse away
3. At high density: Signals accumulate
4. Signals bind receptors
5. Triggers gene expression changes

Regulated behaviors:
• Biofilm formation
• Bioluminescence (Vibrio)
• Virulence factor production
• Sporulation
• Antibiotic production

Importance:
• Coordinated group behavior
• Pathogenesis
• Potential antibiotic targets

Example: Pseudomonas biofilms in cystic fibrosis`},{id:"bio-179",front:"What are biofilms?",back:`Biofilms: Communities of bacteria encased in polysaccharide matrix

Formation:
1. Attachment to surface
2. Colonization (growth)
3. Matrix production (extracellular polymeric substance, EPS)
4. Maturation (3D structure, water channels)
5. Dispersal (release bacteria to colonize elsewhere)

Characteristics:
• Extremely resistant to antibiotics (1000× more)
• Protected from immune system
• Nutrient gradients create diverse microenvironments
• Cell-to-cell communication (quorum sensing)

Clinical importance:
• Chronic infections (cystic fibrosis, UTIs)
• Medical devices (catheters, implants)
• Dental plaque
• ~80% of chronic bacterial infections`},{id:"bio-180",front:"What is bacterial chemotaxis?",back:`Chemotaxis: Directed movement toward/away from chemicals

Mechanism:
1. Chemoreceptors detect attractants or repellents
2. Signal transduction pathway
3. Controls flagellar rotation

Flagellar motion:
• Counterclockwise: Run (straight movement)
• Clockwise: Tumble (random reorientation)

Behavior:
Toward attractant (food):
• Longer runs, fewer tumbles
• Net movement toward source

Away from repellent (toxin):
• Shorter runs, more tumbles
• Net movement away

Example: E. coli moving toward glucose`},{id:"bio-181",front:"What are bacterial virulence factors?",back:`Virulence factors: Molecules that help bacteria cause disease

Adhesion factors:
• Pili, fimbriae
• Attach to host cells

Invasion factors:
• Enzymes that break down tissues
• Example: Collagenase, hyaluronidase

Toxins:
• Exotoxins: Secreted proteins (botulinum, diphtheria)
• Endotoxins: LPS from Gram-negative cell wall

Immune evasion:
• Capsule (prevents phagocytosis)
• Protein A (binds antibodies backwards)
• Antigenic variation

Siderophores:
• Scavenge iron from host

Biofilm formation:
• Protection from antibiotics/immunity`},{id:"bio-182",front:"Compare exotoxins vs endotoxins",back:`Exotoxins (secreted):
• Proteins
• Both Gram-positive and Gram-negative
• Heat-labile (destroyed by heat)
• Highly toxic (small amounts)
• Specific effects
• Can be converted to toxoids (vaccines)
• Examples: Botulinum, tetanus, diphtheria, cholera

Endotoxins (cell wall component):
• Lipopolysaccharide (LPS)
• Gram-negative ONLY
• Heat-stable
• Less toxic (large amounts needed)
• General effects (fever, shock)
• No toxoid possible
• Released when bacteria die
• Triggers massive immune response (septic shock)`},{id:"bio-183",front:"What are antibiotics and their mechanisms?",back:`Cell wall synthesis inhibitors:
• Penicillins, cephalosporins (β-lactams): Block peptidoglycan cross-linking
• Vancomycin: Blocks peptidoglycan assembly
• Target: Actively growing bacteria

Protein synthesis inhibitors:
• Aminoglycosides (30S): Streptomycin
• Tetracyclines (30S)
• Chloramphenicol (50S)
• Macrolides (50S): Erythromycin

Nucleic acid synthesis:
• Fluoroquinolones: DNA gyrase (topoisomerase)
• Rifampin: RNA polymerase

Metabolic pathways:
• Sulfonamides: Folic acid synthesis
• Trimethoprim: Folic acid synthesis

Bactericidal: Kill bacteria
Bacteriostatic: Inhibit growth`},{id:"bio-184",front:"What are mechanisms of antibiotic resistance?",back:`Enzymatic degradation:
• β-lactamases: Destroy β-lactam antibiotics
• Aminoglycoside-modifying enzymes

Target modification:
• Alter ribosomal binding site
• Alter penicillin-binding proteins (PBPs)
• Methylate rRNA (macrolide resistance)

Reduced permeability:
• Decreased porin expression
• Gram-negative outer membrane

Efflux pumps:
• Pump antibiotic out of cell
• Multiple drug resistance (MDR) pumps

Bypass pathways:
• Alternative metabolic pathway
• Sulfonamide resistance

Acquisition:
• Plasmids (conjugation)
• Transformation, transduction
• Mutations

Prevention: Appropriate use, combination therapy`}],rE=[{id:"psych-1",front:"What is operant conditioning?",back:`Learning through consequences (Skinner).

• Positive reinforcement: Add pleasant stimulus
• Negative reinforcement: Remove unpleasant stimulus
• Positive punishment: Add unpleasant stimulus
• Negative punishment: Remove pleasant stimulus`},{id:"psych-2",front:"Describe Piaget's stages of cognitive development",back:`1. Sensorimotor (0-2): Object permanence
2. Preoperational (2-7): Egocentrism, symbolic thinking
3. Concrete operational (7-11): Conservation, logical thought
4. Formal operational (12+): Abstract reasoning`},{id:"psych-3",front:"What is the bystander effect?",back:`The more people present during an emergency, the less likely any individual is to help.

Causes:
• Diffusion of responsibility
• Pluralistic ignorance
• Evaluation apprehension`},{id:"psych-4",front:"Define fundamental attribution error",back:`The tendency to overattribute others' behavior to internal/dispositional factors while underestimating situational factors.

Example: Assuming someone who cuts you off in traffic is a bad driver rather than having an emergency.`},{id:"psych-5",front:"What is the difference between prejudice, discrimination, and stereotypes?",back:`Stereotype: Cognitive belief about a group (generalization)

Prejudice: Affective/emotional attitude toward a group

Discrimination: Behavioral action against a group

All three are related but distinct components of bias.`},{id:"psych-6",front:"What is classical conditioning? (Pavlov)",back:`Classical conditioning: Learning through association (Ivan Pavlov)

Key terms:
• Unconditioned stimulus (UCS): Naturally triggers response (food)
• Unconditioned response (UCR): Natural response (salivation)
• Conditioned stimulus (CS): Neutral → triggers response (bell)
• Conditioned response (CR): Learned response (salivation to bell)

Process:
1. Before: UCS → UCR (food → salivation)
2. During: CS + UCS → UCR (bell + food → salivation)
3. After: CS → CR (bell → salivation)

Pavlov's dogs: Famous experiment demonstrating this`},{id:"psych-7",front:"What are key phenomena in classical conditioning?",back:`Acquisition: Learning the association (CS + UCS repeatedly paired)

Extinction: CR decreases when CS presented without UCS

Spontaneous recovery: CR reappears after extinction period

Generalization: CR to similar stimuli (Little Albert & white objects)

Discrimination: Distinguish between similar stimuli

Higher-order conditioning: CS becomes UCS for new learning

Example: Bell → food (1st order), then light → bell (2nd order)`},{id:"psych-8",front:"What is operant conditioning in detail? (Skinner)",back:`Operant conditioning: Learning through consequences (B.F. Skinner)

Reinforcement: Increases behavior
• Positive: Add pleasant stimulus (praise, food)
• Negative: Remove aversive stimulus (turn off alarm)

Punishment: Decreases behavior
• Positive: Add aversive stimulus (spanking, shock)
• Negative: Remove pleasant stimulus (take away phone)

Skinner box: Apparatus with lever, food dispenser, shock grid

Key: Timing matters! Immediate consequences most effective`},{id:"psych-9",front:"What are reinforcement schedules?",back:`Continuous: Every response reinforced (fast learning, fast extinction)

Partial (intermittent): Some responses reinforced (slower learning, slower extinction)

Fixed ratio (FR): After set # of responses
• High response rate, post-reinforcement pause
• Example: Paid per 10 items produced

Variable ratio (VR): After unpredictable # of responses
• Highest, steadiest response rate, most resistant to extinction
• Example: Slot machines, gambling

Fixed interval (FI): After set time period
• Scalloped pattern (slow → fast as time approaches)
• Example: Weekly paycheck

Variable interval (VI): After unpredictable time
• Steady, moderate rate
• Example: Pop quizzes`},{id:"psych-10",front:"What is shaping and chaining?",back:`Shaping: Reinforcing successive approximations to desired behavior
• Break complex behavior into steps
• Reinforce each step closer to goal
• Example: Teaching animal to press lever (approach → touch → press)

Chaining: Linking simple behaviors into complex sequence
• Each behavior becomes cue for next
• Backward chaining: Start with last step
• Forward chaining: Start with first step
• Example: Getting dressed (socks → pants → shirt)

Both used in training and behavior modification`},{id:"psych-11",front:"Describe Piaget's cognitive development stages in detail",back:`Jean Piaget - Stages of cognitive development:

1. Sensorimotor (0-2 years):
• Object permanence (9-12 months)
• Learn through senses and motor actions
• Stranger anxiety develops

2. Preoperational (2-7 years):
• Symbolic thinking, pretend play
• Egocentrism (can't take others' perspective)
• Lack conservation (can't understand same quantity in different forms)
• Centration (focus on one aspect)
• Irreversibility

3. Concrete operational (7-11 years):
• Conservation mastered
• Logical thinking about concrete objects
• Classification, seriation
• Reversibility

4. Formal operational (12+ years):
• Abstract reasoning
• Hypothetical thinking
• Metacognition`},{id:"psych-12",front:"What is Erikson's psychosocial development theory?",back:`Erik Erikson - 8 stages of psychosocial development (crises):

1. Trust vs Mistrust (0-1): Caregiver reliability
2. Autonomy vs Shame/Doubt (1-3): Independence
3. Initiative vs Guilt (3-6): Taking initiative
4. Industry vs Inferiority (6-12): Competence
5. Identity vs Role Confusion (12-18): Self-concept
6. Intimacy vs Isolation (20s): Close relationships
7. Generativity vs Stagnation (40s-50s): Contributing to society
8. Integrity vs Despair (65+): Life reflection

Each crisis must be resolved for healthy development
Unlike Freud, focuses on social relationships across lifespan`},{id:"psych-13",front:"What is Kohlberg's moral development theory?",back:`Lawrence Kohlberg - 3 levels of moral reasoning (6 stages):

Pre-conventional (childhood):
1. Punishment avoidance: Avoid punishment
2. Self-interest: What's in it for me?

Conventional (adolescence/adult):
3. Interpersonal accord: Please others, "good boy/girl"
4. Law and order: Follow rules/authority

Post-conventional (some adults):
5. Social contract: Laws flexible, individual rights
6. Universal principles: Abstract justice, human rights

Based on Heinz dilemma (steal drug to save wife?)
Criticism: Male-biased (Gilligan's care ethics)`},{id:"psych-14",front:"Describe Freud's psychoanalytic theory",back:`Sigmund Freud - Psychoanalytic theory:

Personality structure:
• Id: Primitive, unconscious, pleasure principle (I want!)
• Ego: Conscious, reality principle, mediator (realistic)
• Superego: Moral conscience, internalized rules (should/shouldn't)

Defense mechanisms:
• Repression, denial, projection, displacement, sublimation, rationalization, reaction formation

Psychosexual stages: Oral, anal, phallic, latency, genital

Unconsciousness: Most mental processes hidden

Dream analysis, free association: Access unconscious

Criticisms: Not empirically testable, male-focused`},{id:"psych-15",front:"What are Freud's psychosexual stages?",back:`Sigmund Freud - Psychosexual stages:

1. Oral (0-1): Pleasure from mouth (sucking, biting)
• Fixation: Overeating, smoking, nail-biting

2. Anal (1-3): Pleasure from bowel control
• Fixation: Anal-retentive (orderly) or anal-expulsive (messy)

3. Phallic (3-6): Oedipus/Electra complex
• Boys: Desire mother, fear father (castration anxiety)
• Girls: Desire father, penis envy
• Fixation: Sexual identity issues

4. Latency (6-puberty): Sexual feelings dormant
• Focus on skills, friendships

5. Genital (puberty+): Mature sexual relationships
• If earlier stages resolved, healthy sexuality

Fixations occur if needs unmet/over-satisfied`},{id:"psych-16",front:"What are Freud's defense mechanisms?",back:`Defense mechanisms: Unconscious strategies to reduce anxiety (Freud)

Repression: Push threatening thoughts to unconscious (most basic)

Denial: Refuse to acknowledge reality

Projection: Attribute own unacceptable feelings to others

Displacement: Redirect feelings to safer target (kick dog after bad day)

Sublimation: Channel impulses into socially acceptable activities (most mature)

Rationalization: Create logical excuses for behavior

Reaction formation: Act opposite to true feelings

Regression: Revert to childlike behaviors

Intellectualization: Focus on facts to avoid emotions`},{id:"psych-17",front:"What is Maslow's hierarchy of needs?",back:`Abraham Maslow - Hierarchy of needs (pyramid):

Deficiency needs (bottom → up):
1. Physiological: Food, water, sleep, shelter
2. Safety: Security, stability, protection
3. Love/Belonging: Relationships, acceptance, intimacy
4. Esteem: Achievement, recognition, respect

Growth needs:
5. Self-actualization: Realize full potential, creativity, meaning

Key principles:
• Lower needs must be met before higher
• Self-actualization: Peak experiences, acceptance, spontaneity
• Only ~2% reach self-actualization

Humanistic psychology: Focus on human potential and growth`},{id:"psych-18",front:"What are the Big Five personality traits?",back:`Big Five (OCEAN or CANOE):

Openness:
• Imagination, creativity, curiosity
• Low: Practical, conventional

Conscientiousness:
• Organization, responsibility, self-discipline
• Low: Impulsive, disorganized

Extraversion:
• Sociability, assertiveness, energy
• Low: Introverted, reserved

Agreeableness:
• Compassion, cooperation, trust
• Low: Competitive, skeptical

Neuroticism:
• Emotional instability, anxiety, moodiness
• Low: Calm, stable (emotional stability)

Most widely accepted trait model
Fairly stable across lifespan
Genetic and environmental influences`},{id:"psych-19",front:"What was Pavlov's dogs experiment?",back:`Ivan Pavlov (1890s) - Classical conditioning:

Setup:
• Dogs naturally salivate to food (UCS → UCR)
• Rang bell before presenting food
• Repeated pairings

Result:
• Dogs salivated to bell alone (CS → CR)
• Demonstrated learned associations

Importance:
• Foundation of behaviorism
• Showed learning could be studied scientifically
• Applied to phobias, advertising, therapy

Accidental discovery: Noticed dogs salivating before food arrived`},{id:"psych-20",front:"What was Watson's Little Albert experiment?",back:`John B. Watson & Rosalie Rayner (1920):

Setup:
• 9-month-old Albert shown white rat (neutral)
• Loud noise (UCS) paired with rat → fear (UCR)
• Repeated pairings

Result:
• Albert feared rat alone (CS → CR)
• Generalized to white rabbit, dog, fur coat, Santa beard
• Demonstrated conditioned emotional response

Importance:
• Showed phobias can be learned
• Led to behavior therapy

Ethical issues:
• No consent, distressed child, never deconditioned
• Would not be approved today`},{id:"psych-21",front:"What was Milgram's obedience study?",back:`Stanley Milgram (1961) - Obedience to authority:

Setup:
• Participant = "teacher," confederate = "learner"
• Teacher gives shocks for wrong answers (fake shocks)
• Experimenter prods teacher to continue
• Shocks increased to 450V ("XXX Danger")

Results:
• 65% went to maximum voltage
• Many protested but continued when told to

Conclusion:
• People obey authority even against conscience
• Situational factors > personality

Relevance: Understanding Holocaust, Abu Ghraib

Ethical concerns: Deception, psychological distress`},{id:"psych-22",front:"What was Zimbardo's Stanford Prison Experiment?",back:`Philip Zimbardo (1971) - Power of social roles:

Setup:
• Basement transformed into mock prison
• 24 students randomly assigned: guards or prisoners
• Planned for 2 weeks

Results:
• Guards became abusive, prisoners passive/distressed
• Stopped after 6 days due to ethical concerns
• Some guards sadistic, prisoners had breakdowns

Conclusion:
• Social situations powerfully shape behavior
• Good people can do bad things in certain roles
• Deindividuation: Loss of self-awareness in groups

Relevance: Prison reform, military behavior

Controversies: Ethical issues, demand characteristics`},{id:"psych-23",front:"What was Asch's conformity study?",back:`Solomon Asch (1951) - Conformity to group pressure:

Setup:
• Line judgment task (obviously different lengths)
• 1 real participant, 7 confederates
• Confederates gave wrong answers

Results:
• 75% conformed at least once
• 37% average conformity rate
• Control: <1% error when alone

Factors increasing conformity:
• Group size (up to 3-4 people)
• Unanimity (one dissenter drastically reduces conformity)
• Public response
• Difficult task

Conclusion:
• People conform to avoid rejection (normative influence)
• Even when obviously wrong`},{id:"psych-24",front:"What was Bandura's Bobo doll experiment?",back:`Albert Bandura (1961) - Observational learning/social learning:

Setup:
• Children watched adult model interact with Bobo doll
• Aggressive group: Model hit, kicked doll
• Non-aggressive group: Model played calmly
• Control: No model

Results:
• Aggressive group imitated aggression
• Reproduced specific behaviors and words
• Boys more physically aggressive

Conclusion:
• Learning occurs through observation (not just reinforcement)
• Children imitate adult behavior
• Challenged behaviorism (internal mental processes matter)

Implications: Media violence effects, modeling in education`},{id:"psych-25",front:"What was Harlow's monkey study?",back:`Harry Harlow (1950s-60s) - Attachment and contact comfort:

Setup:
• Infant rhesus monkeys separated from mothers
• Two surrogate mothers: Wire (with food) vs cloth (no food)
• Observed preference and behavior

Results:
• Monkeys preferred cloth mother despite wire having food
• Clung to cloth mother when frightened
• Used cloth mother as secure base

Conclusion:
• Contact comfort > food for attachment
• Challenged Freudian view (attachment based on feeding)
• Importance of touch for development

Long-term effects:
• Isolated monkeys: Social deficits, abnormal behavior
• Critical periods for social development

Ethical issues: Animal suffering`},{id:"psych-26",front:"What are the major schools of psychology?",back:`Structuralism (Wundt, Titchener):
• Elements of consciousness via introspection
• First psychology lab (1879)

Functionalism (James):
• How mental processes help adapt
• Influenced by Darwin

Behaviorism (Watson, Skinner):
• Observable behavior only
• Classical and operant conditioning

Psychoanalytic (Freud):
• Unconscious processes, childhood

Humanistic (Maslow, Rogers):
• Human potential, self-actualization
• Free will, personal growth

Cognitive:
• Mental processes (memory, thinking)
• Information processing

Biological/Neuroscience:
• Brain, genes, neurotransmitters`},{id:"psych-27",front:"What is Carl Rogers' person-centered theory?",back:`Carl Rogers - Person-centered/humanistic approach:

Key concepts:
• Self-concept: How we view ourselves
• Ideal self: Who we want to be
• Congruence: Match between self and ideal self
• Incongruence: Mismatch causes anxiety

Unconditional positive regard:
• Accept person without judgment
• Essential for growth and self-actualization

Actualizing tendency:
• Innate drive toward growth and potential
• Healthy when not blocked

Therapy approach:
• Empathy, genuineness, unconditional positive regard
• Client-centered (not directive)
• Reflective listening

Vs Freud: Optimistic, conscious > unconscious, present > past`},{id:"psych-28",front:"Compare nature vs nurture perspectives",back:`Nature (nativist, biological):
• Genetics, heredity, evolution
• Instincts, maturation
• Examples: Chomsky (language), evolutionary psychology

Nurture (empiricist, environmental):
• Experience, learning, culture
• Environment shapes development
• Examples: Behaviorism (Skinner), social learning (Bandura)

Modern view: Interaction (both/and):
• Genes and environment interact
• Epigenetics: Environment affects gene expression
• Diathesis-stress model: Genetic predisposition + environment
• Twin studies, adoption studies separate influences

Most traits: Heritability estimates (e.g., IQ ~50%, schizophrenia ~80%)`},{id:"psych-29",front:"What is Vygotsky's sociocultural theory?",back:`Lev Vygotsky - Sociocultural cognitive development:

Zone of Proximal Development (ZPD):
• Gap between: What child can do alone vs with guidance
• Learning occurs in this zone

Scaffolding:
• Temporary support from more knowledgeable other
• Gradually removed as child masters skill
• Like building scaffold

Private speech:
• Self-talk to guide behavior
• Becomes internalized as thought

Cultural tools:
• Language, symbols, technology
• Culture shapes cognition

Vs Piaget:
• Social interaction crucial (not individual discovery)
• Continuous (not stages)
• Culture-specific development`},{id:"psych-30",front:"What is attachment theory? (Bowlby & Ainsworth)",back:`John Bowlby - Attachment theory:
• Evolutionary basis: Survival
• Critical period: First 2 years
• Secure base for exploration

Mary Ainsworth - Strange Situation procedure:

Secure attachment (65%):
• Distressed when mother leaves
• Comforted by her return
• Uses as secure base
• Parent: Responsive, consistent

Insecure-avoidant (20%):
• Little distress when mother leaves
• Avoids/ignores upon return
• Parent: Unresponsive, rejecting

Insecure-resistant/ambivalent (10-15%):
• Very distressed when mother leaves
• Resists comfort but seeks proximity
• Parent: Inconsistent

Disorganized (5-10%):
• Contradictory behaviors, confusion
• Parent: Frightening, abusive`},{id:"psych-31",front:"Define culture and its components",back:`Culture: Shared beliefs, values, behaviors, and material objects of a group

Components:

Material culture:
• Physical objects (tools, art, buildings, technology)

Nonmaterial culture:
• Values: Shared beliefs about what's good/bad
• Norms: Rules for behavior
• Beliefs: Ideas about how world works
• Language: Symbols and communication
• Symbols: Things that represent ideas

Culture is:
• Learned (not innate)
• Shared (group phenomenon)
• Transmitted across generations
• Adaptive (changes over time)`},{id:"psych-32",front:"What are social norms?",back:`Social norms: Rules/expectations for behavior in society

Types:

Folkways:
• Informal norms, customs
• Minor violations (mild disapproval)
• Example: Table manners, dress codes

Mores ("mor-ays"):
• Important norms, moral significance
• Violations cause strong reaction
• Example: Theft, cheating, lying

Taboos:
• Strongest norms, forbidden behaviors
• Severe punishment if violated
• Example: Incest, cannibalism

Laws:
• Formal norms, codified
• Official sanctions for violations
• Example: Murder, assault, tax evasion

Sanctions: Rewards (positive) or punishments (negative) for norm compliance/violation`},{id:"psych-33",front:"Define social roles and role conflict",back:`Social role: Expected behaviors associated with a status/position

Role conflict:
• Incompatible demands from different roles
• Example: Parent role vs employee role (child sick, big meeting)

Role strain:
• Tension within single role
• Example: Professor must teach AND publish

Role exit:
• Disengaging from social role
• Example: Retirement, divorce

Ascribed role:
• Assigned at birth, involuntary
• Example: Son, daughter, age, race

Achieved role:
• Earned through effort/choice
• Example: Doctor, spouse, athlete`},{id:"psych-34",front:"What is ethnocentrism vs cultural relativism?",back:`Ethnocentrism:
• Judging other cultures by standards of own culture
• Viewing own culture as superior
• Can lead to prejudice, conflict
• Example: "Their food is gross" (American judging insects as food)

Cultural relativism:
• Understanding cultures in their own context
• Suspending judgment
• No culture inherently superior/inferior
• Example: Understanding arranged marriage in cultural context

Challenge of cultural relativism:
• What about harmful practices?
• Limits: Universal human rights

Key: Ethnocentrism judges, cultural relativism seeks to understand`},{id:"psych-35",front:"What is socialization?",back:`Socialization: Process of learning culture and becoming member of society

Primary socialization (childhood):
• Family most important
• Learn language, norms, values
• Identity formation

Secondary socialization (throughout life):
• School, peers, media, workplace
• Learn new roles

Agents of socialization:
• Family (most important early)
• School (education, social skills)
• Peers (conformity, identity)
• Media (values, stereotypes)
• Religion (morals, meaning)
• Workplace (adult roles)

Resocialization:
• Discarding old behaviors, learning new
• Example: Prison, military, rehab (total institutions)`},{id:"psych-36",front:"What are social institutions?",back:`Social institutions: Organized systems that meet basic societal needs

Major institutions:
1. Family: Reproduction, socialization, emotional support
2. Education: Knowledge transmission, socialization, social mobility
3. Religion: Meaning, morals, community, social cohesion
4. Economy: Production/distribution of goods, employment
5. Government: Social order, laws, public services
6. Healthcare: Health maintenance, disease treatment
7. Media: Information, entertainment, socialization

Characteristics:
• Stable patterns over time
• Establish norms and values
• Meet fundamental needs
• Interconnected (changes in one affect others)`},{id:"psych-37",front:"Describe the family as a social institution",back:`Family: Primary social institution

Functions:
• Reproduction (biological continuity)
• Socialization (primary agent)
• Emotional support and intimacy
• Economic support
• Social status transmission
• Regulation of sexual behavior

Family types:
• Nuclear: Parents and children
• Extended: Multiple generations, relatives
• Single-parent, blended, cohabiting, same-sex

Patterns:
• Endogamy: Marry within group
• Exogamy: Marry outside group
• Monogamy: One spouse
• Polygamy: Multiple spouses

Changes: Smaller families, later marriage, more diversity`},{id:"psych-38",front:"Describe education as a social institution",back:`Education: Institution for systematic knowledge transmission

Manifest functions (intended):
• Transmit knowledge and skills
• Prepare for workforce
• Socialization (norms, values)
• Social integration
• Cultural innovation

Latent functions (unintended):
• Childcare (parents can work)
• Mate selection (meet partners)
• Social networking
• Keeping youth out of job market

Hidden curriculum:
• Unspoken lessons (obedience, competition, punctuality)
• Reproduce social inequalities

Tracking: Grouping by ability (can perpetuate inequality)

Credentialism: Emphasis on degrees over actual skills`},{id:"psych-39",front:"Describe religion as a social institution",back:`Religion: System of beliefs and practices about the sacred

Functions (Durkheim):
• Social cohesion (shared beliefs unite)
• Social control (moral guidelines)
• Meaning and purpose (explains existence)
• Emotional support (comfort in crisis)

Types:
• Monotheism: One god (Christianity, Islam, Judaism)
• Polytheism: Multiple gods (Hinduism, Ancient Greek)
• Animism: Spirits in nature
• Atheism: No god belief
• Agnosticism: Unknown/unknowable

Secularization: Decline in religious influence in modern society

Fundamentalism: Literal interpretation, return to traditional values`},{id:"psych-40",front:"Describe healthcare as a social institution",back:`Healthcare: Institution for health maintenance and disease treatment

Functions:
• Treat illness and injury
• Prevent disease (public health)
• Promote health and wellness
• Medical research and innovation
• Legitimize sick role

Sick role (Parsons):
• Not responsible for illness
• Exempt from normal obligations
• Must try to get well
• Must seek competent help

Medicalization:
• Defining non-medical issues as medical problems
• Example: Childbirth, aging, ADHD, alcoholism
• Increases medical control

Healthcare disparities:
• SES, race, geography affect access and outcomes`},{id:"psych-41",front:"Describe economy and government as social institutions",back:`Economy: System for production, distribution, consumption

Types:
• Capitalism: Private ownership, free market, profit
• Socialism: Collective ownership, planned economy
• Mixed economy: Combines elements (most modern nations)

Functions:
• Produce goods and services
• Distribute resources
• Provide employment
• Generate wealth

Government: Institution for power and authority

Functions:
• Maintain order (laws, police)
• Protect citizens (military, defense)
• Provide public goods (roads, schools)
• Regulate economy
• Resolve conflicts
• Represent citizens

Types: Democracy, monarchy, dictatorship, oligarchy`},{id:"psych-42",front:"Define social capital",back:`Social capital: Resources available through social networks and relationships

Types:

Bonding capital:
• Strong ties within homogeneous groups
• Example: Family, close friends
• Emotional support, trust

Bridging capital:
• Weak ties across diverse groups
• Example: Acquaintances, professional contacts
• Information, opportunities

Linking capital:
• Connections to people in power
• Access to institutions, resources

Benefits:
• Job opportunities ("who you know")
• Information access
• Social support
• Social mobility

Inequality: Wealthy/privileged have more social capital`},{id:"psych-43",front:"Define cultural capital",back:`Cultural capital: Knowledge, skills, education, advantages from one's social class (Bourdieu)

Types:

Embodied:
• Internalized knowledge and dispositions
• Example: Language skills, manners, tastes

Objectified:
• Physical cultural goods
• Example: Books, art, instruments

Institutionalized:
• Academic credentials, degrees
• Example: Diplomas, certificates

Reproduction of inequality:
• Upper class passes cultural capital to children
• Schools reward dominant culture
• Working class lacks cultural capital for success

Habitus: Ingrained habits, skills, dispositions from social class`},{id:"psych-44",front:"What is the difference between race and ethnicity?",back:`Race:
• Social construct based on physical characteristics
• No biological basis (genetic variation within > between races)
• Example: White, Black, Asian
• Imposed by others, external
• Used for classification, often linked to power/oppression

Ethnicity:
• Shared culture, ancestry, language, traditions
• Based on cultural heritage, not physical traits
• Example: Hispanic, Italian-American, Irish
• Self-identified, internal
• Can choose emphasis

Key differences:
• Race: Physical, social construct, imposed
• Ethnicity: Cultural, heritage, self-identified

Both are social categories, not biological facts`},{id:"psych-45",front:"Compare prejudice, discrimination, and racism",back:`Prejudice:
• Negative attitudes/beliefs about group
• Cognitive and affective (thoughts and feelings)
• Example: "All elderly are forgetful"

Discrimination:
• Unfair treatment based on group membership
• Behavioral (actions)
• Example: Not hiring someone due to age

Relationship: Prejudice (attitude) → Discrimination (behavior)

Racism:
• Prejudice + power
• Institutional: Systems disadvantage certain races
• Individual: Personal bias and actions
• Systemic: Embedded in social structures

Stereotype: Oversimplified beliefs about group (cognitive component of prejudice)`},{id:"psych-46",front:"What is social stratification?",back:`Social stratification: Hierarchical ranking of people in society

Systems:

Caste:
• Ascribed status, birth determines position
• No mobility
• Example: Traditional India

Class:
• Based on wealth, income, education, occupation
• Some mobility possible
• Example: Modern Western societies

Social class categories:
• Upper class: Wealth, power, prestige
• Middle class: Comfortable, educated
• Working class: Manual labor, less secure
• Lower class: Poverty, limited opportunities

Meritocracy ideal: Position based on ability and effort (vs reality of structural barriers)`},{id:"psych-47",front:"Define social mobility",back:`Social mobility: Movement between social classes

Types:

Vertical mobility:
• Upward: Move to higher class (rags to riches)
• Downward: Move to lower class (bankruptcy)

Horizontal mobility:
• Change position without changing class
• Example: Teacher → nurse (same middle class)

Intergenerational:
• Child's class compared to parents'
• Measure of opportunity

Intragenerational:
• Individual's mobility within lifetime
• Career advancement

Structural mobility:
• Due to societal changes (economy, technology)
• Example: Industrial Revolution

American Dream: Belief in upward mobility through hard work (vs reality of barriers)`},{id:"psych-48",front:"What is socioeconomic status (SES)?",back:`Socioeconomic status (SES): Social standing based on economic and social factors

Components:
• Income: Money earned
• Wealth: Total assets (savings, property)
• Education: Credentials, knowledge
• Occupation: Prestige, skill level

Impact on life outcomes:
• Health (SES gradient: higher SES → better health)
• Education (resources, expectations)
• Life expectancy
• Criminal justice involvement
• Stress levels
• Access to opportunities

Inequality:
• Growing wealth gap
• Intergenerational transmission
• Structural barriers to mobility`},{id:"psych-49",front:"Define various -isms: Sexism, ageism, ableism",back:`Sexism:
• Prejudice/discrimination based on sex/gender
• Institutional: Gender wage gap, glass ceiling
• Patriarchy: Male dominance in society

Ageism:
• Prejudice/discrimination based on age
• Often targets elderly (stereotypes: frail, forgetful)
• Also affects young (inexperienced, entitled)
• Mandatory retirement, age-based hiring

Ableism:
• Prejudice/discrimination against people with disabilities
• Assumes able-bodied is normal/superior
• Physical barriers, social exclusion
• Examples: Inaccessible buildings, employment discrimination

All involve:
• Stereotypes, prejudice, discrimination
• Systemic/institutional components
• Power and privilege`},{id:"psych-50",front:"What is intersectionality?",back:`Intersectionality: Overlapping social identities create unique experiences of discrimination (Kimberlé Crenshaw)

Key idea:
• Identities (race, class, gender, sexuality, disability, etc.) interact
• Can't understand one identity in isolation
• Multiple oppressions compound

Example:
• Black woman experiences racism AND sexism
• Not simply addition, but unique experience
• "Double jeopardy" or "triple jeopardy"

Implications:
• Need intersectional approach to inequality
• One-size-fits-all solutions don't work
• Must consider multiple identities

Matrix of domination: Interlocking systems of oppression (race, class, gender)`},{id:"psych-51",front:"What is the difference between equality and equity?",back:`Equality:
• Same treatment for everyone
• Equal access, opportunities
• "Everyone gets the same thing"
• May not address systemic disadvantages

Equity:
• Fair treatment based on needs
• Addresses historical disadvantages
• "Everyone gets what they need"
• Aims for equal outcomes, not just opportunities

Visual metaphor: People watching over fence
• Equality: Same-height boxes (tall person doesn't need, short can't see)
• Equity: Different boxes based on height (everyone can see)

Affirmative action: Equity-based policy

Meritocracy vs equity: Tension between "fairness" definitions`},{id:"psych-52",front:"Define in-group vs out-group",back:`In-group:
• Group to which person belongs
• "Us," "we"
• Loyalty, favoritism, positive bias
• Example: Your family, your college, your country

Out-group:
• Group to which person doesn't belong
• "Them," "they"
• Stereotyping, prejudice, discrimination
• Example: Rival school, opposing team, other religion

In-group bias (favoritism):
• Favor in-group members
• Allocate more resources to in-group
• See in-group as more diverse, complex

Out-group homogeneity:
• "They all look the same"
• See out-group as more similar than in-group

Minimal group paradigm: Even arbitrary groups show bias`},{id:"psych-53",front:"What is assimilation vs multiculturalism?",back:`Assimilation:
• Minority groups adopt dominant culture
• "Melting pot" metaphor
• Give up original culture/identity
• Example: Immigrants learning English, adopting American customs
• Criticism: Erases cultural diversity, pressure to conform

Multiculturalism:
• Maintain distinct cultural identities
• "Salad bowl" or "mosaic" metaphor
• Diversity valued and preserved
• Example: Bilingual education, cultural celebrations
• Goal: Unity without uniformity

Segregation:
• Physical/social separation of groups
• Can be de jure (legal) or de facto (practice)

Integration:
• Different groups interact as equals
• Mix without losing identity`},{id:"psych-54",front:"What is deviance?",back:`Deviance: Violation of social norms

Key points:
• Socially constructed (varies by culture, time)
• Not inherently good/bad
• Can be positive (innovation, activism)

Types:
• Formal deviance: Violates laws (crime)
• Informal deviance: Violates social norms (rudeness)

Functions (Durkheim):
• Clarifies norms (shows boundaries)
• Strengthens social bonds (unite against deviant)
• Promotes social change (challenge unjust norms)

Labeling theory:
• Deviance is socially defined
• Label creates deviant identity
• Self-fulfilling prophecy

Stigma: Negative label that affects identity and opportunities`},{id:"psych-55",front:"What is medicalization and sick role?",back:`Medicalization: Process of defining non-medical problems as medical conditions

Examples:
• Childbirth (home → hospital)
• Mental health (sadness → depression)
• Behavior (misbehavior → ADHD)
• Aging, baldness, erectile dysfunction

Consequences:
• Medical control increases
• Pharmaceutical solutions
• Reduces personal responsibility
• Can reduce stigma OR increase stigma

Sick role (Parsons):
Rights:
• Exempt from normal responsibilities
• Not held responsible for condition

Obligations:
• Must want to get well
• Must seek competent medical help
• Must comply with treatment

Legitimizes illness, but also social control`},{id:"psych-56",front:"What is major depressive disorder (MDD)?",back:`Major depressive disorder: Persistent depressed mood and loss of interest

Key symptoms (5+ for 2+ weeks):
• Depressed mood most of the day
• Anhedonia (loss of pleasure/interest)
• Significant weight/appetite change
• Insomnia or hypersomnia
• Psychomotor agitation or retardation
• Fatigue, loss of energy
• Feelings of worthlessness or guilt
• Decreased concentration
• Recurrent thoughts of death/suicide

Mnemonic: SIG E CAPS
(Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidal ideation)

Neurotransmitters: ↓ Serotonin, ↓ Norepinephrine, ↓ Dopamine

Treatment: SSRIs, SNRIs, psychotherapy`},{id:"psych-57",front:"What is bipolar I vs bipolar II disorder?",back:`Bipolar I disorder:
• At least one manic episode (7+ days)
• May have depressive episodes
• Severe impairment, may require hospitalization

Bipolar II disorder:
• At least one hypomanic episode (4+ days)
• At least one major depressive episode
• NO full manic episodes
• Less severe than Bipolar I

Manic episode:
• Elevated/irritable mood
• Increased energy, activity
• Decreased need for sleep
• Grandiosity, racing thoughts
• Impulsive behavior (spending, sex)
• Distractibility

Hypomania: Less severe, shorter, no major impairment

Neurotransmitters: Dopamine, norepinephrine dysregulation

Treatment: Mood stabilizers (lithium, valproate), antipsychotics`},{id:"psych-58",front:"What is schizophrenia?",back:`Schizophrenia: Chronic psychotic disorder with distorted thinking and perception

Positive symptoms (added experiences):
• Delusions (false fixed beliefs)
• Hallucinations (usually auditory)
• Disorganized speech/thought (word salad, loose associations)
• Disorganized or catatonic behavior

Negative symptoms (diminished experiences):
• Flat affect (reduced emotional expression)
• Avolition (lack of motivation)
• Alogia (poverty of speech)
• Anhedonia (inability to feel pleasure)
• Social withdrawal

Cognitive symptoms: Impaired attention, memory, executive function

Dopamine hypothesis: ↑ Dopamine (particularly D2 receptors)

Treatment: Antipsychotics (block D2 receptors), psychosocial support`},{id:"psych-59",front:"What are the different types of delusions?",back:`Delusions: Fixed false beliefs despite contradictory evidence

Types:

Persecutory:
• Belief of being harmed, followed, conspired against
• Most common type

Grandiose:
• Exaggerated sense of importance, power, knowledge
• "I am God" or "I can fly"

Referential:
• Belief that events/objects have special personal meaning
• TV talking to you, song lyrics about you

Erotomanic:
• Belief someone (often famous) is in love with you

Jealous:
• Unfounded belief partner is unfaithful

Somatic:
• Belief about bodily functions/sensations
• "I have cancer" despite tests showing otherwise

Common in: Schizophrenia, delusional disorder, bipolar (manic)`},{id:"psych-60",front:"What is generalized anxiety disorder (GAD)?",back:`GAD: Excessive worry about various events/activities for 6+ months

Key symptoms:
• Excessive anxiety and worry (most days)
• Difficulty controlling worry
• Restlessness, feeling on edge
• Easily fatigued
• Difficulty concentrating
• Irritability
• Muscle tension
• Sleep disturbance

Impairment: Significant distress or functional impairment

Vs normal worry: More intense, pervasive, distressing, harder to control

Neurotransmitters: ↓ GABA (inhibitory), ↑ Norepinephrine

Treatment: SSRIs, SNRIs, buspirone, CBT (cognitive-behavioral therapy)`},{id:"psych-61",front:"What is panic disorder?",back:`Panic disorder: Recurrent unexpected panic attacks + persistent concern about attacks

Panic attack (4+ symptoms, peak within 10 min):
• Palpitations, pounding heart
• Sweating
• Trembling or shaking
• Shortness of breath, choking sensation
• Chest pain or discomfort
• Nausea, abdominal distress
• Dizziness, lightheadedness
• Chills or heat sensations
• Paresthesias (numbness/tingling)
• Derealization or depersonalization
• Fear of losing control or "going crazy"
• Fear of dying

Panic disorder requires:
• Recurrent unexpected panic attacks
• 1+ month of worry about future attacks OR maladaptive behavior change

Treatment: SSRIs, benzodiazepines (short-term), CBT`},{id:"psych-62",front:"What are phobias and social anxiety disorder?",back:`Specific phobia:
• Intense fear of specific object/situation
• Fear disproportionate to danger
• Avoidance or intense distress
• Examples: Heights, spiders, blood, flying

Social anxiety disorder (social phobia):
• Intense fear of social situations
• Fear of scrutiny, judgment, embarrassment
• Avoidance of social situations
• Impacts work, school, relationships
• Examples: Public speaking, eating in front of others, meeting new people

Agoraphobia:
• Fear of situations where escape is difficult
• Public transit, open spaces, crowds, being outside home alone
• Often (not always) associated with panic disorder

Treatment: Exposure therapy, CBT, SSRIs (for social anxiety)`},{id:"psych-63",front:"What is obsessive-compulsive disorder (OCD)?",back:`OCD: Obsessions and/or compulsions causing distress and time consumption (1+ hour/day)

Obsessions:
• Intrusive, unwanted thoughts/images/urges
• Cause anxiety/distress
• Person tries to suppress or neutralize
• Examples: Contamination, harm, symmetry, forbidden thoughts

Compulsions:
• Repetitive behaviors or mental acts
• Performed to reduce obsession-related anxiety
• Not realistically connected to feared event OR excessive
• Examples: Washing, checking, counting, arranging, repeating

Insight: Most recognize obsessions/compulsions are excessive

Neurobiology: ↓ Serotonin, orbitofrontal cortex hyperactivity

Treatment: SSRIs (high dose), ERP (exposure and response prevention therapy)`},{id:"psych-64",front:"What is post-traumatic stress disorder (PTSD)?",back:`PTSD: Develops after exposure to traumatic event (actual/threatened death, serious injury, sexual violence)

Symptom clusters (4):

1. Intrusion (re-experiencing):
• Intrusive memories, nightmares
• Flashbacks, dissociative reactions
• Intense distress at reminders

2. Avoidance:
• Avoid trauma-related thoughts/feelings
• Avoid external reminders (people, places, activities)

3. Negative alterations in cognition/mood:
• Can't remember parts of trauma
• Negative beliefs, persistent negative emotions
• Diminished interest, detachment
• Inability to experience positive emotions

4. Arousal/reactivity changes:
• Irritability, hypervigilance
• Exaggerated startle response
• Concentration problems, sleep disturbance

Duration: 1+ month

Treatment: Trauma-focused CBT, EMDR, SSRIs/SNRIs`},{id:"psych-65",front:"What are the personality disorder clusters?",back:`DSM-5 organizes 10 personality disorders into 3 clusters:

Cluster A (Odd/Eccentric):
• Paranoid: Distrust, suspiciousness
• Schizoid: Detached, restricted emotions
• Schizotypal: Eccentric behavior, cognitive/perceptual distortions

Cluster B (Dramatic/Emotional/Erratic):
• Antisocial: Disregard for others' rights, deceitful, impulsive
• Borderline: Instability in relationships, self-image, emotions; impulsivity
• Histrionic: Excessive emotionality, attention-seeking
• Narcissistic: Grandiosity, need for admiration, lack of empathy

Cluster C (Anxious/Fearful):
• Avoidant: Social inhibition, feelings of inadequacy
• Dependent: Submissive, clingy, fear of separation
• Obsessive-compulsive: Perfectionism, control (vs OCD: has obsessions/compulsions)

Key: Pervasive, inflexible patterns causing distress/impairment`},{id:"psych-66",front:"What is borderline personality disorder (BPD)?",back:`BPD: Pattern of instability in relationships, self-image, emotions, and marked impulsivity

Key features (5+ needed):
• Frantic efforts to avoid abandonment (real/imagined)
• Unstable, intense relationships (idealization ↔ devaluation)
• Identity disturbance (unstable self-image)
• Impulsivity in 2+ areas (spending, sex, substance, binge eating, reckless driving)
• Recurrent suicidal behavior, gestures, self-harm
• Affective instability (mood swings)
• Chronic feelings of emptiness
• Inappropriate intense anger, difficulty controlling
• Transient stress-related paranoia or dissociation

Mnemonic: IMPULSIVE

Neurobiology: Serotonin dysregulation, prefrontal cortex dysfunction

Treatment: DBT (dialectical behavior therapy), mentalization-based therapy`},{id:"psych-67",front:"What is antisocial personality disorder (ASPD)?",back:`ASPD: Pervasive pattern of disregard for and violation of others' rights (18+ years, evidence since age 15)

Key features (3+ needed):
• Failure to conform to laws (repeated arrests)
• Deceitfulness (lying, aliases, conning)
• Impulsivity, failure to plan ahead
• Irritability and aggressiveness (fights, assaults)
• Reckless disregard for safety of self/others
• Consistent irresponsibility (work, finances)
• Lack of remorse (indifferent, rationalizes)

Conduct disorder: Required before age 15

Psychopathy vs ASPD:
• Psychopathy: Personality trait (lack empathy, charm, manipulative)
• ASPD: Clinical diagnosis (behavioral pattern)
• All psychopaths meet ASPD, not all ASPD are psychopaths

Treatment: Difficult, no proven effective treatment`},{id:"psych-68",front:"What are eating disorders?",back:`Anorexia nervosa:
• Restriction of intake → low body weight
• Intense fear of gaining weight
• Distorted body image
• Types: Restricting vs binge-eating/purging

Bulimia nervosa:
• Recurrent binge eating (large amount, loss of control)
• Compensatory behaviors (purging, fasting, excessive exercise)
• 1+/week for 3+ months
• Self-evaluation unduly influenced by body shape/weight

Binge eating disorder:
• Recurrent binge eating
• NO regular compensatory behaviors
• Distress about binging

Complications: Electrolyte imbalance, cardiac issues, osteoporosis

Neurotransmitters: Serotonin dysregulation

Treatment: Nutritional rehabilitation, psychotherapy, SSRIs (bulimia)`},{id:"psych-69",front:"What is ADHD?",back:`ADHD: Persistent pattern of inattention and/or hyperactivity-impulsivity

Inattention symptoms (6+ for children, 5+ for adults):
• Fails to give close attention to details
• Difficulty sustaining attention
• Doesn't listen when spoken to directly
• Doesn't follow through on tasks
• Difficulty organizing
• Avoids tasks requiring sustained mental effort
• Loses things
• Easily distracted
• Forgetful

Hyperactivity-impulsivity symptoms (6+/5+):
• Fidgets, squirms
• Leaves seat inappropriately
• Runs/climbs inappropriately (restless in adults)
• Can't engage in quiet activities
• "On the go," "driven by motor"
• Talks excessively
• Blurts out answers
• Difficulty waiting turn
• Interrupts or intrudes

Types: Inattentive, hyperactive-impulsive, combined

Neurobiology: ↓ Dopamine, ↓ Norepinephrine

Treatment: Stimulants (methylphenidate, amphetamines), behavioral therapy`},{id:"psych-70",front:"What is autism spectrum disorder (ASD)?",back:`ASD: Persistent deficits in social communication/interaction + restricted, repetitive behaviors

Social communication deficits (all 3):
• Social-emotional reciprocity (back-and-forth conversation)
• Nonverbal communication (eye contact, body language, gestures)
• Developing/maintaining relationships

Restricted, repetitive patterns (2+ of 4):
• Stereotyped/repetitive speech, motor movements, object use
• Insistence on sameness, routines, rituals
• Highly restricted, fixated interests
• Hyper- or hypo-reactivity to sensory input

Onset: Early developmental period

Severity levels: 1 (requiring support) to 3 (requiring very substantial support)

Neurobiology: Complex, genetic and environmental factors

Treatment: Behavioral interventions (ABA), social skills training, speech therapy`},{id:"psych-71",front:"What is dissociative identity disorder (DID)?",back:`DID (formerly multiple personality disorder): Two or more distinct personality states

Key features:
• 2+ distinct identities/personality states
• Recurrent gaps in memory (daily events, important personal info, traumatic events)
• Identities have own memories, behaviors, relationships
• Distress or functional impairment
• Not part of cultural/religious practice
• Not due to substance or medical condition

Associated with:
• History of severe childhood trauma (abuse)
• Dissociation as coping mechanism

Other dissociative disorders:
• Dissociative amnesia: Memory loss (often traumatic)
• Depersonalization/derealization disorder: Feeling detached from self/surroundings

Controversy: Validity debated, rare, often misdiagnosed

Treatment: Psychotherapy (integrate identities), trauma-focused therapy`},{id:"psych-72",front:"What is substance use disorder?",back:`Substance use disorder: Problematic pattern of substance use causing impairment/distress

Criteria (2+ in 12 months):
• Larger amounts/longer than intended
• Persistent desire/unsuccessful efforts to cut down
• Great deal of time obtaining/using/recovering
• Craving
• Failure to fulfill major obligations
• Continued use despite social/interpersonal problems
• Important activities given up
• Use in physically hazardous situations
• Continued despite knowledge of physical/psychological problems
• Tolerance (need more for same effect)
• Withdrawal (characteristic symptoms when stopping)

Severity: Mild (2-3), moderate (4-5), severe (6+)

Dependence: Physical (tolerance, withdrawal) vs psychological (craving)

Treatment: Detox, behavioral therapy, support groups, medications (naltrexone, methadone, buprenorphine)`},{id:"psych-73",front:"What are neurotransmitter imbalances in mental disorders?",back:`Depression:
• ↓ Serotonin, ↓ Norepinephrine, ↓ Dopamine
• Treatment: SSRIs, SNRIs

Schizophrenia:
• ↑ Dopamine (mesolimbic pathway: positive symptoms)
• ↓ Dopamine (mesocortical: negative symptoms)
• Treatment: Antipsychotics (D2 antagonists)

Anxiety:
• ↓ GABA (inhibitory), ↑ Norepinephrine
• Treatment: SSRIs, benzodiazepines (GABA agonists)

Bipolar:
• Dopamine and norepinephrine dysregulation
• Treatment: Mood stabilizers, antipsychotics

ADHD:
• ↓ Dopamine, ↓ Norepinephrine
• Treatment: Stimulants (increase dopamine/norepinephrine)

OCD:
• ↓ Serotonin
• Treatment: SSRIs (high dose)`},{id:"psych-74",front:"What are common psychotropic medication classes?",back:`Antidepressants:
• SSRIs: Selective serotonin reuptake inhibitors (fluoxetine, sertraline)
• SNRIs: Serotonin-norepinephrine reuptake inhibitors (venlafaxine, duloxetine)
• TCAs: Tricyclic antidepressants (amitriptyline) - older, more side effects
• MAOIs: Monoamine oxidase inhibitors (phenelzine) - dietary restrictions

Antipsychotics:
• Typical (1st gen): D2 antagonists (haloperidol) - more extrapyramidal symptoms
• Atypical (2nd gen): Serotonin-dopamine antagonists (risperidone, olanzapine) - fewer EPS

Anxiolytics:
• Benzodiazepines: GABA agonists (alprazolam, lorazepam) - addictive, short-term
• Buspirone: Non-benzodiazepine, serotonin partial agonist

Mood stabilizers:
• Lithium, valproate, carbamazepine (bipolar)

Stimulants:
• Methylphenidate, amphetamines (ADHD)`},{id:"psych-75",front:"What are DSM-5 disorder categories?",back:`Major DSM-5 categories:

Neurodevelopmental: ADHD, ASD, intellectual disability

Schizophrenia spectrum: Schizophrenia, schizoaffective, delusional disorder

Bipolar and related: Bipolar I, II, cyclothymic

Depressive: MDD, persistent depressive disorder (dysthymia)

Anxiety: GAD, panic disorder, phobias, separation anxiety

OCD and related: OCD, body dysmorphic disorder, hoarding

Trauma/stressor-related: PTSD, acute stress disorder, adjustment disorders

Dissociative: DID, dissociative amnesia, depersonalization/derealization

Somatic symptom: Illness anxiety, conversion disorder

Feeding/eating: Anorexia, bulimia, binge eating

Substance-related: Substance use disorders, substance-induced

Personality: Clusters A, B, C (10 disorders)`},{id:"psych-76",front:"What is the biopsychosocial model?",back:`Biopsychosocial model: Mental disorders result from interaction of biological, psychological, and social factors

Biological factors:
• Genetics, heredity
• Neurotransmitter imbalances
• Brain structure/function
• Physical health, hormones
• Prenatal factors

Psychological factors:
• Cognition, beliefs, interpretations
• Coping skills
• Personality traits
• Early life experiences
• Trauma

Social factors:
• Family dynamics, relationships
• Socioeconomic status
• Culture, ethnicity
• Social support
• Life stressors

Diathesis-stress model:
• Predisposition (biological vulnerability) + stress (environmental trigger) → disorder

Holistic approach vs single-cause explanations`},{id:"psych-77",front:"What are positive vs negative symptoms in schizophrenia?",back:`Positive symptoms (added experiences):
• Hallucinations (usually auditory: hearing voices)
• Delusions (paranoid, grandiose, referential)
• Disorganized speech (loose associations, word salad, neologisms)
• Disorganized or catatonic behavior
• Better response to antipsychotics
• Associated with ↑ dopamine

Negative symptoms (diminished experiences):
• Flat affect (reduced emotional expression)
• Avolition (lack of motivation, self-care)
• Alogia (poverty of speech, brief replies)
• Anhedonia (inability to feel pleasure)
• Social withdrawal
• Poorer prognosis
• Less responsive to typical antipsychotics
• Associated with ↓ dopamine (mesocortical pathway)

Cognitive symptoms: Attention, memory, executive function deficits`},{id:"psych-78",front:"What is the difference between psychosis and neurosis?",back:`Psychosis:
• Loss of contact with reality
• Hallucinations, delusions
• Disorganized thinking/speech
• Insight impaired (don't recognize as abnormal)
• Examples: Schizophrenia, severe bipolar (manic), substance-induced psychosis

Neurosis (outdated term, not in DSM-5):
• Distress but reality testing intact
• Anxiety, depression, obsessions
• Insight preserved (recognize symptoms as problematic)
• Examples: Anxiety disorders, mild-moderate depression, OCD

Key distinction: Reality testing
• Psychosis: Impaired
• Neurosis: Intact

Functional impairment: Both can have, but psychosis typically more severe`},{id:"psych-79",front:"What is functionalism (structural functionalism)?",back:`Functionalism: Society as interconnected system where parts work together for stability (Émile Durkheim, Talcott Parsons)

Key concepts:
• Society like organism: Each part has function
• Institutions maintain social order and meet needs
• Consensus and shared values hold society together
• Focus on stability, equilibrium, cohesion

Manifest functions: Intended, recognized consequences
• Example: Education transmits knowledge

Latent functions: Unintended, unrecognized consequences
• Example: Schools provide childcare, networking

Dysfunctions: Parts that disrupt stability
• Example: Crime, poverty

Criticism: Ignores conflict, inequality, assumes status quo is good`},{id:"psych-80",front:"What is conflict theory?",back:`Conflict theory: Society characterized by competition for limited resources and power (Karl Marx, Max Weber)

Key concepts:
• Inequality is central feature of society
• Dominant groups exploit subordinate groups
• Social order maintained through coercion, not consensus
• Social change driven by conflict
• Focus on power, inequality, competition

Marx - Class conflict:
• Bourgeoisie (owners) vs proletariat (workers)
• Economic base shapes society
• Revolution necessary for change

Weber - Multiple sources of inequality:
• Class (economic), status (prestige), power (political)

Modern applications: Feminism, critical race theory

Vs functionalism: Conflict (change, inequality) vs stability (consensus, order)`},{id:"psych-81",front:"What is symbolic interactionism?",back:`Symbolic interactionism: Society created through everyday social interactions and shared meanings (George Herbert Mead, Herbert Blumer)

Key concepts:
• Micro-level focus (individual interactions)
• People act based on meanings they assign to things
• Meanings arise through social interaction
• Meanings modified through interpretation
• Symbols (language, gestures) crucial

Looking-glass self (Cooley):
• Self-concept based on how we think others see us
1. Imagine how we appear to others
2. Imagine their judgment
3. Develop self-feeling

Dramaturgical approach (Goffman):
• Life as theater, people perform roles
• Front stage (public) vs backstage (private)
• Impression management

Vs macro theories: Focus on meaning and interaction, not large structures`},{id:"psych-82",front:"What is social constructionism?",back:`Social constructionism: Reality is socially created through language, interaction, and agreement (Berger & Luckmann)

Key concepts:
• Knowledge and reality are socially constructed
• No objective "truth," only socially agreed-upon meanings
• Categories (gender, race, illness) are social constructs
• Language creates and maintains reality
• Focus on how categories are created and maintained

Examples:
• Gender: Not biological, but social expectations and performances
• Race: No biological basis, socially created categories
• Mental illness: What counts as "disorder" varies by culture/time
• Childhood: Not universal, invented in modern period

Objectification: Social constructs treated as objective reality

Related to symbolic interactionism but emphasizes cultural/historical context`},{id:"psych-83",front:"Compare the major sociological theories",back:`Functionalism (Durkheim):
• Macro-level
• Society as organism, parts serve functions
• Focus: Stability, consensus, order
• Criticism: Ignores conflict and change

Conflict theory (Marx, Weber):
• Macro-level
• Competition for resources, power
• Focus: Inequality, coercion, change
• Criticism: Overemphasizes conflict

Symbolic interactionism (Mead, Blumer):
• Micro-level
• Shared meanings through interaction
• Focus: Individual agency, meaning, symbols
• Criticism: Ignores larger structures

Social constructionism (Berger & Luckmann):
• Micro/macro
• Reality socially created
• Focus: How categories constructed
• Criticism: Extreme relativism

MCAT: Know theorist names and key focus!`},{id:"psych-84",front:"What is the difference between micro and macro sociology?",back:`Micro-level sociology:
• Small-scale, individual interactions
• Face-to-face encounters, small groups
• How people create and interpret meaning
• Theories: Symbolic interactionism, social constructionism, exchange theory
• Example studies: Conversation analysis, impression management, daily routines

Macro-level sociology:
• Large-scale, societal structures and institutions
• Social patterns, cultural systems
• How structures shape individual behavior
• Theories: Functionalism, conflict theory, structural theories
• Example studies: Inequality, institutions, social movements, globalization

Meso-level (middle):
• Organizations, communities
• Bridge between micro and macro

MCAT: Most questions about macro theories, but understand both levels`},{id:"psych-85",front:"Define fertility rate and related demographic measures",back:`Crude birth rate (CBR):
• Number of live births per 1,000 people per year
• Doesn't account for age/sex structure

Total fertility rate (TFR):
• Average number of children woman will have in lifetime
• More accurate than CBR
• Replacement level: ~2.1 (maintains population)

General fertility rate:
• Births per 1,000 women of childbearing age (15-44)

Age-specific fertility rate:
• Births per 1,000 women in specific age group

Factors affecting fertility:
• Education (higher → lower fertility)
• Urbanization (urban → lower)
• Women's workforce participation
• Access to contraception
• Cultural/religious norms`},{id:"psych-86",front:"Define mortality rate and related demographic measures",back:`Crude death rate (CDR):
• Number of deaths per 1,000 people per year

Age-specific mortality rate:
• Deaths per 1,000 people in specific age group

Infant mortality rate:
• Deaths of infants <1 year per 1,000 live births
• Key indicator of population health
• Sensitive to healthcare quality, sanitation

Life expectancy:
• Average number of years person expected to live
• At birth or at specific age
• Higher in developed countries

Mortality vs morbidity:
• Mortality: Death
• Morbidity: Disease, illness

Factors: Healthcare, nutrition, sanitation, disease, violence`},{id:"psych-87",front:"What is the demographic transition model?",back:`Demographic transition model: Population changes as country develops

Stage 1 (Pre-industrial):
• High birth rate, high death rate
• Stable, low population
• Example: Pre-modern societies

Stage 2 (Developing):
• High birth rate, declining death rate
• Population explosion
• Better healthcare, nutrition
• Example: Many Sub-Saharan African countries

Stage 3 (Developed):
• Declining birth rate, low death rate
• Population growth slows
• Urbanization, education, contraception
• Example: India, Mexico

Stage 4 (Post-industrial):
• Low birth rate, low death rate
• Stable or declining population
• Example: US, Europe, Japan

Stage 5 (hypothetical):
• Very low birth rate, low death rate
• Population decline
• Example: Japan, some European countries`},{id:"psych-88",front:"Define migration and related concepts",back:`Migration: Movement of people between geographic locations

Immigration: Moving INTO a country
Emigration: Moving OUT OF a country

Net migration rate:
• (Immigrants - Emigrants) per 1,000 people
• Can be positive or negative

Types:

Internal migration:
• Within same country
• Rural → urban (urbanization)

International migration:
• Between countries

Voluntary migration:
• Choice (jobs, education, lifestyle)

Forced migration:
• Refugees (persecution, war)
• Internally displaced persons (IDPs)

Push factors: Reasons to leave (poverty, war, persecution)
Pull factors: Reasons to go (jobs, freedom, education)`},{id:"psych-89",front:"What is population growth rate?",back:`Population growth rate: Change in population size over time

Formula:
Growth rate = (Birth rate - Death rate) + Net migration

Natural increase:
• Birth rate - Death rate (excludes migration)
• If positive: population growing
• If negative: population declining

Doubling time:
• Years for population to double
• Rule of 70: 70 / growth rate %
• Example: 2% growth → 35 years to double

World population:
• Currently ~8 billion
• Growing fastest in developing countries
• Slowing in developed countries

Zero population growth (ZPG):
• Birth rate = death rate (no net migration)
• Stable population size`},{id:"psych-90",front:"Define age cohorts and population pyramids",back:`Age cohort: Group of people born in same time period

Generations:
• Baby Boomers (1946-1964)
• Generation X (1965-1980)
• Millennials/Gen Y (1981-1996)
• Generation Z (1997-2012)

Population pyramid:
• Graph showing age-sex structure
• X-axis: Population (males left, females right)
• Y-axis: Age groups

Shapes:

Expanding (pyramid):
• Wide base, narrow top
• High birth rate, young population
• Developing countries

Constrictive (barrel):
• Narrow base, wider middle
• Low birth rate, aging population
• Developed countries (US, Europe)

Stationary (rectangle):
• Even distribution
• Stable population

Dependency ratio: (Youth + elderly) / Working-age population`},{id:"psych-91",front:"What is urbanization?",back:`Urbanization: Increasing proportion of population living in cities

Causes:
• Rural-to-urban migration (jobs, services, education)
• Natural increase in cities
• Reclassification of rural areas

Consequences:

Positive:
• Economic development, innovation
• Better healthcare, education access
• Cultural diversity
• Economies of scale

Negative:
• Overcrowding, slums
• Pollution, traffic
• Loss of community
• Strain on infrastructure
• Urban sprawl

Megacities: Cities with >10 million people

Suburbanization: Movement from cities to suburbs

Gentrification: Wealthy move into poor neighborhoods, displace residents`},{id:"psych-92",front:"What is the Gini coefficient?",back:`Gini coefficient: Measure of income/wealth inequality in population

Scale: 0 to 1 (or 0% to 100%)
• 0 = Perfect equality (everyone has same income)
• 1 = Perfect inequality (one person has all income)

Interpretation:
• Lower = more equal
• Higher = more unequal

Visual: Lorenz curve
• X-axis: Cumulative % of population
• Y-axis: Cumulative % of income
• Diagonal line = perfect equality
• Actual curve below diagonal
• Gini = area between curve and diagonal

Examples:
• Nordic countries: ~0.25-0.30 (more equal)
• US: ~0.41 (less equal)
• South Africa: ~0.63 (very unequal)

High Gini associated with: Social unrest, health problems, lower mobility`},{id:"psych-93",front:"What is the poverty line and related concepts?",back:`Poverty line (poverty threshold):
• Minimum income needed to meet basic needs
• Varies by country, family size
• US: ~$30,000/year for family of 4 (2025)

Absolute poverty:
• Lack of basic necessities (food, water, shelter)
• World Bank: <$2.15/day (extreme poverty)

Relative poverty:
• Income below certain % of median income
• Example: <50% of median income
• Reflects inequality within society

Poverty rate:
• % of population below poverty line

Federal Poverty Level (FPL):
• Official US poverty measure
• Used for program eligibility (Medicaid, SNAP)

Factors: Education, employment, discrimination, family structure, location

Consequences: Poor health, limited education, food insecurity, stress`},{id:"psych-94",front:"What are types of social mobility (review)?",back:`Vertical mobility:
• Upward: Move to higher class
• Downward: Move to lower class

Horizontal mobility:
• Change position, same class level

Intergenerational mobility:
• Compare child's class to parents'
• Measure of social fluidity
• US has lower mobility than believed

Intragenerational mobility:
• Individual's mobility within lifetime

Structural mobility:
• Due to changes in economy/society
• Example: Industrialization creates new jobs

Exchange mobility:
• Some move up, others move down
• Net position stays same

Barriers: Education access, discrimination, social capital, geographic location`},{id:"psych-95",front:"What is the difference between sex and gender?",back:`Sex:
• Biological characteristics
• Chromosomes (XX, XY), hormones, anatomy
• Categories: Male, female, intersex
• Assigned at birth

Gender:
• Social and cultural roles, behaviors, expressions
• Gender identity: Internal sense of being male, female, both, neither
• Gender expression: How one presents gender (clothes, behavior)
• Social construct, varies across cultures and time
• Spectrum, not binary

Gender roles:
• Society's expectations for men vs women
• Learned through socialization

Transgender: Gender identity differs from sex assigned at birth
Cisgender: Gender identity matches sex assigned at birth

Key: Sex is biological (though even this is complex), gender is social/cultural`},{id:"psych-96",front:"What is the sick role (Parsons) in detail?",back:`Sick role: Social expectations when ill (Talcott Parsons)

Rights (exemptions):
1. Not responsible for being sick
• Illness is beyond person's control
• Not blamed for condition

2. Exempt from normal social responsibilities
• Can miss work, school
• Relieved of family duties temporarily

Obligations (expectations):
3. Must want to get well
• Recovery is obligation
• Can't enjoy being sick

4. Must seek competent medical help
• See doctor, follow treatment
• Comply with medical advice

Legitimation: Doctor legitimizes sick role

Criticism:
• Assumes acute illness (not chronic)
• Western medical model
• Ignores patient agency
• Doesn't fit stigmatized illnesses
• Power imbalance (doctor authority)`},{id:"psych-97",front:"What is the health belief model?",back:`Health belief model: Explains health behaviors based on beliefs and perceptions

Components:

Perceived susceptibility:
• "How likely am I to get this disease?"

Perceived severity:
• "How serious would it be if I got it?"

Perceived threat:
• Susceptibility × severity

Perceived benefits:
• "Will this behavior help?"
• Pros of taking action

Perceived barriers:
• "What's stopping me?"
• Cost, inconvenience, pain, fear

Cues to action:
• Triggers to prompt behavior
• Symptoms, media, advice from others

Self-efficacy:
• "Can I do this?"
• Confidence in ability to take action

Likelihood of action:
• High when: High threat, high benefits, low barriers, high self-efficacy`},{id:"psych-98",front:"What are health disparities?",back:`Health disparities: Preventable differences in health outcomes between groups

Dimensions:
• Race/ethnicity: Minorities have worse outcomes
• Socioeconomic status: Lower SES → worse health
• Geography: Rural vs urban, regional differences
• Gender: Different life expectancies, conditions
• Sexual orientation: LGBTQ+ face discrimination
• Disability: Access barriers

Social determinants of health:
• Education, income, employment
• Housing, neighborhood
• Food security
• Healthcare access
• Social support
• Discrimination, stress

Examples:
• Black maternal mortality 2-3× higher than white
• Life expectancy lower in poor counties
• Rural areas lack healthcare facilities

Solutions: Address structural inequalities, improve access, cultural competence`}],iE=[{id:"cars-1",front:"What is the main idea of a passage?",back:`The central argument or thesis the author is making.

To find it:
• Read the first and last paragraphs carefully
• Identify what claim the author is defending
• Look for repeated concepts or themes`},{id:"cars-2",front:"How do you identify author's tone?",back:`Look for:
• Word choice (positive/negative connotations)
• Use of qualifiers ("perhaps," "certainly")
• Rhetorical devices
• Treatment of opposing views

Common tones: Critical, objective, skeptical, enthusiastic, dismissive`},{id:"cars-3",front:"What is an inference question asking?",back:`What can be logically concluded from the passage that isn't explicitly stated.

The answer must be:
• Supported by passage evidence
• Not a direct quote
• A logical extension of stated ideas`},{id:"cars-4",front:"How do you approach 'strengthen/weaken' questions?",back:`1. Identify the author's argument
2. Find the conclusion and premises
3. For strengthen: Find answer that adds support
4. For weaken: Find answer that challenges a premise or conclusion

Look for assumptions the argument relies on.`},{id:"cars-5",front:"What is the difference between explicit and implicit information?",back:`Explicit: Directly stated in the passage. Can be found by looking back at text.

Implicit: Implied but not directly stated. Requires drawing logical conclusions from what IS stated.`},{id:"cars-6",front:"What are Main Idea questions and their clue words?",back:`What they ask: The central thesis or primary purpose of the passage.

Clue words:
• "main idea"
• "primary purpose"
• "central thesis"
• "author's main point"
• "passage is primarily about"

Strategy: Focus on intro/conclusion, identify what author is arguing overall.`},{id:"cars-7",front:"What are Detail questions and their clue words?",back:`What they ask: Specific information explicitly stated in the passage.

Clue words:
• "according to the passage"
• "the author states"
• "the passage indicates"
• "which of the following is mentioned"
• Line/paragraph references

Strategy: Scan back to relevant section, find exact match.`},{id:"cars-8",front:"What are Inference questions and their clue words?",back:`What they ask: What is implied but NOT explicitly stated.

Clue words:
• "infer"
• "suggest"
• "imply"
• "most likely"
• "probably"
• "it can be concluded"

Strategy: Answer must be supported by passage but not directly quoted. Look for logical extensions.`},{id:"cars-9",front:"What are Tone/Attitude questions and their clue words?",back:`What they ask: The author's attitude or emotional stance toward the subject.

Clue words:
• "author's tone"
• "author's attitude"
• "author views"
• "author would describe as"

Strategy: Analyze word choice, qualifiers, treatment of opposing views. Avoid extreme answers.`},{id:"cars-10",front:"What are Strengthen/Weaken questions and their clue words?",back:`What they ask: Which answer would support or undermine the author's argument.

Clue words:
• "strengthen"
• "support"
• "weaken"
• "undermine"
• "challenge"
• "which would most call into question"

Strategy: Identify the argument's assumptions and key premises.`},{id:"cars-11",front:"What are Function questions and their clue words?",back:`What they ask: Why the author included a specific detail or paragraph.

Clue words:
• "in order to"
• "the purpose of"
• "the author mentions X to"
• "function of"
• "serves to"

Strategy: Look at context before/after. How does it relate to main argument?`},{id:"cars-12",front:"What are Application questions and their clue words?",back:`What they ask: Apply passage concepts to new situations.

Clue words:
• "similar to"
• "analogous to"
• "would be most like"
• "consistent with"
• "which scenario"

Strategy: Identify the principle/pattern in passage, find answer matching that pattern.`},{id:"cars-13",front:"What are Structure questions and their clue words?",back:`What they ask: How the passage is organized or how paragraphs relate.

Clue words:
• "organization"
• "structure"
• "relationship between paragraphs"
• "author's method"
• "passage proceeds by"

Strategy: Map the passage flow. Note transitions and how ideas build.`},{id:"cars-14",front:"How do you quickly identify question types?",back:`Look for key verbs:
• States/mentions → Detail
• Infer/suggest/imply → Inference
• Main/primary/central → Main Idea
• Tone/attitude → Tone
• Strengthen/weaken → Strengthen/Weaken
• In order to/purpose → Function
• Similar/analogous → Application

First word/phrase usually signals the type!`},{id:"cars-15",front:"What's the difference between Inference and Detail questions?",back:`Detail: Answer IS in the passage
• Look for direct match
• Often has line references
• "According to passage"

Inference: Answer is NOT directly stated
• Must be logically derived
• Supported but implicit
• "Passage suggests/implies"

Key: If you can quote it directly → Detail. If you must interpret → Inference.`},{id:"cars-16",front:"Define argument, premise, and conclusion",back:`Argument: A claim supported by reasoning.

Premise: Evidence or reasons supporting the conclusion. Look for "because," "since," "given that."

Conclusion: The main claim being argued. Look for "therefore," "thus," "consequently," "it follows that."

Example: "Since exercise improves health (premise), people should exercise regularly (conclusion)."`},{id:"cars-17",front:"What is an assumption in an argument?",back:`An unstated premise that must be true for the argument to work.

To find assumptions:
• Identify the gap between premises and conclusion
• Ask: "What must be true for this to make sense?"
• Negation test: If assumption is false, does argument fall apart?

Example: "John is tall, so he plays basketball" assumes tall people play basketball.`},{id:"cars-18",front:"What is an analogy as a rhetorical device?",back:`Comparing two things to explain or support a point.

Purpose:
• Clarify complex ideas
• Persuade by showing similarity
• Make abstract concrete

Example: "The brain is like a computer" suggests similar processing functions.

Weakness: Analogies can oversimplify or have limited applicability.`},{id:"cars-19",front:"What is a counterargument?",back:`Acknowledging and addressing opposing viewpoints.

Signals:
• "Critics argue..."
• "Some claim..."
• "However..."
• "On the other hand..."

Purpose:
• Show awareness of other perspectives
• Strengthen own argument by refuting alternatives
• Demonstrate fairness

Strong arguments address counterarguments.`},{id:"cars-20",front:"What is irony as a rhetorical device?",back:`Expressing meaning opposite to literal words, or when outcome contradicts expectations.

Types:
• Verbal: Saying opposite of what you mean (sarcasm)
• Situational: Outcome opposite of what's expected
• Dramatic: Reader knows something character doesn't

Purpose: Highlight contradictions, create emphasis, critique.`},{id:"cars-21",front:"How do you identify author's tone through word choice?",back:`Positive tone words:
• Optimistic, enthusiastic, supportive, admiring, praiseworthy

Negative tone words:
• Critical, skeptical, dismissive, cynical, condescending

Neutral tone words:
• Objective, analytical, informative, descriptive

Look for:
• Adjectives ("remarkable" vs "questionable")
• Qualifiers ("certainly" vs "allegedly")
• Loaded language vs neutral terms`},{id:"cars-22",front:"What are common rhetorical strategies for persuasion?",back:`Ethos (credibility):
• Cite experts, credentials
• Build trust

Pathos (emotion):
• Appeal to feelings, values
• Use vivid examples

Logos (logic):
• Use facts, statistics, reasoning
• Build logical chain

Also: Repetition, rhetorical questions, appeals to authority, emotional language.`},{id:"cars-23",front:"How do you detect bias in a passage?",back:`Look for:
• One-sided presentation (ignores alternatives)
• Loaded language (emotional words)
• Overgeneralizations ("always," "never")
• Cherry-picked evidence
• Unstated assumptions
• Dismissive treatment of opposing views

Neutral passages:
• Present multiple viewpoints
• Use objective language
• Acknowledge limitations`},{id:"cars-24",front:"What are transition words and why do they matter?",back:`Contrast: however, but, yet, although, despite
→ Signals shift or opposing view

Support: furthermore, moreover, additionally, also
→ Adds evidence

Cause/Effect: therefore, thus, consequently, because, since
→ Shows logical relationship

Example: for instance, such as, specifically
→ Provides illustration

Transitions guide you through argument structure!`},{id:"cars-25",front:"What is point of view and how does it affect meaning?",back:`First person (I/we): Personal, subjective, possibly biased

Second person (you): Direct, instructional, engaging

Third person (he/she/they): More objective, distanced

Effect on meaning:
• "I believe X" = personal opinion
• "Studies show X" = objective claim
• "You should X" = directive

Author's choice reveals stance and intended relationship with reader.`},{id:"cars-26",front:"Define: Ambiguous, Anachronism, Antithesis",back:`Ambiguous: Unclear, having multiple possible meanings
• "The statement was ambiguous and open to interpretation."

Anachronism: Something out of its proper time period
• "A cellphone in a medieval painting is an anachronism."

Antithesis: Direct opposite or contrast
• "Love is the antithesis of hate."`},{id:"cars-27",front:"Define: Arbitrary, Candid, Categorical",back:`Arbitrary: Based on random choice rather than reason
• "The decision seemed arbitrary and without justification."

Candid: Frank, honest, straightforward
• "She gave a candid assessment of the situation."

Categorical: Absolute, unqualified, without exceptions
• "He gave a categorical denial of the allegations."`},{id:"cars-28",front:"Define: Corollary, Dichotomy, Discrepancy",back:`Corollary: A natural consequence or result
• "Higher taxes are a corollary of increased government spending."

Dichotomy: Division into two contrasting parts
• "The dichotomy between theory and practice."

Discrepancy: Difference or inconsistency between things
• "There was a discrepancy between the two accounts."`},{id:"cars-29",front:"Define: Dogmatic, Empirical, Erudite",back:`Dogmatic: Asserting opinions as facts, inflexible
• "His dogmatic approach left no room for debate."

Empirical: Based on observation or experiment, not theory
• "Empirical evidence supports the hypothesis."

Erudite: Scholarly, showing great knowledge
• "The erudite professor quoted extensively from classical texts."`},{id:"cars-30",front:"Define: Esoteric, Inherent, Juxtapose",back:`Esoteric: Understood by few, specialized, obscure
• "The paper contained esoteric terminology."

Inherent: Existing as a natural or essential part
• "Risk is inherent in any investment."

Juxtapose: Place side by side for contrast
• "The author juxtaposes wealth and poverty."`},{id:"cars-31",front:"Define: Negligible, Normative, Paradox",back:`Negligible: So small as to be insignificant
• "The effect was negligible and hardly worth noting."

Normative: Establishing a standard or norm
• "The study took a normative approach to ethics."

Paradox: Self-contradictory statement that may be true
• "The paradox of choice: more options can make decision harder."`},{id:"cars-32",front:"Define: Pragmatic, Precedent, Preclude",back:`Pragmatic: Practical, focused on results rather than theory
• "She took a pragmatic approach to solving the problem."

Precedent: An earlier event serving as an example
• "The case set a legal precedent."

Preclude: Make impossible, prevent
• "His injury precluded him from competing."`},{id:"cars-33",front:"Define: Redundant, Salient, Specious",back:`Redundant: Unnecessary repetition, superfluous
• "The phrase was redundant and could be removed."

Salient: Most noticeable or important
• "The salient feature of the argument was its simplicity."

Specious: Superficially plausible but actually wrong
• "His specious reasoning was full of logical flaws."`},{id:"cars-34",front:"Define: Substantiate, Tenuous, Ubiquitous",back:`Substantiate: Provide evidence to support a claim
• "The theory was substantiated by multiple studies."

Tenuous: Weak, flimsy, not well-established
• "The connection between the two events was tenuous."

Ubiquitous: Present everywhere, widespread
• "Smartphones are ubiquitous in modern society."`},{id:"cars-35",front:"Define: Viable, Vindicate, Zealous",back:`Viable: Capable of working successfully, feasible
• "The plan was economically viable."

Vindicate: Clear of blame, prove to be right
• "New evidence vindicated his theory."

Zealous: Showing great enthusiasm or devotion
• "She was a zealous advocate for the cause."`}],oE={chem:nE,bio:tE,psych:rE,cars:iE},sE=()=>{const[e,n]=w.useState("chem"),[t,r]=w.useState(0),[i,o]=w.useState(!1),s=w.useMemo(()=>{const f=oE[e];return i?[...f].sort(()=>Math.random()-.5):f},[e,i]),a=s[t],l=f=>{n(f),r(0)},c=()=>{r(f=>f>0?f-1:s.length-1)},u=()=>{r(f=>f<s.length-1?f+1:0)},p=()=>{o(!i),r(0)};return k.jsx(Zo,{title:"Flashcards",subtitle:"Tap card to flip",children:k.jsxs("div",{className:"max-w-lg mx-auto space-y-6",children:[k.jsx(eE,{value:e,onChange:l}),k.jsxs("div",{className:"flex items-center justify-between text-sm text-muted-foreground",children:[k.jsxs("span",{children:["Card ",t+1," of ",s.length]}),k.jsxs("button",{onClick:p,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-colors ${i?"border-primary text-primary":"border-border hover:border-muted-foreground"}`,children:[k.jsx(b1,{className:"h-4 w-4"}),k.jsx("span",{children:"Shuffle"})]})]}),a&&k.jsx(JP,{front:a.front,back:a.back}),k.jsxs("div",{className:"flex items-center justify-between gap-4",children:[k.jsxs("button",{onClick:c,className:"flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors",children:[k.jsx(Na,{className:"h-5 w-5"}),k.jsx("span",{className:"font-medium",children:"Previous"})]}),k.jsxs("button",{onClick:u,className:"flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors",children:[k.jsx("span",{className:"font-medium",children:"Next"}),k.jsx(Ra,{className:"h-5 w-5"})]})]})]})})};function oh({question:e,options:n,correctIndex:t,explanation:r}){const[i,o]=w.useState(null),[s,a]=w.useState(!1),l=p=>{s||(o(p),a(!0))},c=()=>{o(null),a(!1)},u=i===t;return k.jsxs("div",{className:"rounded-xl border border-border bg-card p-5 shadow-sm",children:[k.jsx("p",{className:"text-base font-medium leading-relaxed mb-5",children:e}),k.jsx("div",{className:"space-y-2.5",children:n.map((p,f)=>{const d=i===f,v=f===t;let m="border-border bg-background hover:bg-accent";return s&&(v?m="border-green-500 bg-green-50 dark:bg-green-950/30":d&&!v?m="border-red-500 bg-red-50 dark:bg-red-950/30":m="border-border bg-muted/50 opacity-60"),k.jsxs("button",{onClick:()=>l(f),disabled:s,className:un("w-full flex items-start gap-3 p-3.5 rounded-lg border text-left transition-colors",m),children:[k.jsx("span",{className:"flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-current text-xs font-medium",children:String.fromCharCode(65+f)}),k.jsx("span",{className:"flex-1 text-sm leading-relaxed",children:p}),s&&v&&k.jsx(Rf,{className:"h-5 w-5 text-green-600 flex-shrink-0"}),s&&d&&!v&&k.jsx(mu,{className:"h-5 w-5 text-red-600 flex-shrink-0"})]},f)})}),s&&k.jsxs("div",{className:"mt-5 space-y-4",children:[k.jsx("div",{className:un("flex items-center gap-2 p-3 rounded-lg",u?"bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-200":"bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-200"),children:u?k.jsxs(k.Fragment,{children:[k.jsx(Rf,{className:"h-5 w-5"}),k.jsx("span",{className:"font-medium",children:"Correct!"})]}):k.jsxs(k.Fragment,{children:[k.jsx(mu,{className:"h-5 w-5"}),k.jsx("span",{className:"font-medium",children:"Incorrect"})]})}),k.jsxs("div",{className:"p-4 rounded-lg bg-muted/50",children:[k.jsx("p",{className:"text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2",children:"Explanation"}),k.jsx("p",{className:"text-sm leading-relaxed",children:r})]}),k.jsx("button",{onClick:c,className:"w-full py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors",children:"Try Again"})]})]})}const aE={chem:"Chem/Phys",bio:"Bio/Biochem",psych:"Psych/Soc",cars:"CARS"},lE={chem:"bg-section-chem",bio:"bg-section-bio",psych:"bg-section-psych",cars:"bg-section-cars"};function Ha({section:e,className:n}){return k.jsx("span",{className:un("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white",lE[e],n),children:aE[e]})}const cE=[{id:"fs-1",section:"chem",question:"A buffer solution contains 0.2 M acetic acid (pKa = 4.76) and 0.3 M sodium acetate. What is the pH of this solution?",options:["4.58","4.76","4.94","5.18"],correctIndex:2,explanation:"Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 4.76 + log(0.3/0.2) = 4.76 + log(1.5) = 4.76 + 0.18 = 4.94"},{id:"fs-2",section:"chem",question:"Which of the following will increase the rate of an enzyme-catalyzed reaction?",options:["Adding a competitive inhibitor","Increasing substrate concentration (when [S] << Km)","Decreasing temperature","Adding a non-competitive inhibitor"],correctIndex:1,explanation:"When [S] << Km, the reaction rate is highly dependent on substrate concentration. Increasing [S] will increase the rate until the enzyme becomes saturated."},{id:"fs-3",section:"bio",question:"During which phase of the cell cycle does DNA replication occur?",options:["G1 phase","S phase","G2 phase","M phase"],correctIndex:1,explanation:"S phase (Synthesis phase) is when DNA replication occurs. G1 is growth before synthesis, G2 is preparation for mitosis, and M phase is mitosis itself."},{id:"fs-4",section:"bio",question:"Which hormone is released in response to low blood glucose?",options:["Insulin","Glucagon","Cortisol","Both B and C"],correctIndex:3,explanation:"Both glucagon and cortisol respond to low blood glucose. Glucagon is released from pancreatic alpha cells and promotes glycogenolysis. Cortisol promotes gluconeogenesis. Insulin is released in response to HIGH blood glucose."},{id:"fs-5",section:"psych",question:"A child who has learned to fear dogs after being bitten now also fears cats. This is an example of:",options:["Stimulus discrimination","Stimulus generalization","Extinction","Spontaneous recovery"],correctIndex:1,explanation:"Stimulus generalization occurs when a conditioned response is elicited by stimuli similar to the conditioned stimulus. The fear response has generalized from dogs to cats."},{id:"fs-6",section:"psych",question:"According to the James-Lange theory of emotion:",options:["Emotions and physiological responses occur simultaneously","Physiological arousal precedes the emotional experience","Cognitive appraisal determines the emotion","Emotions are primarily determined by facial expressions"],correctIndex:1,explanation:"James-Lange theory proposes that physiological arousal comes first, and we interpret this arousal as an emotion. Example: 'I'm trembling, therefore I must be afraid.'"}],uE=[{id:"passage-1",section:"bio",title:"Enzyme Kinetics Study",passage:`Researchers studied an enzyme that catalyzes the conversion of substrate X to product Y. They measured initial reaction velocities at various substrate concentrations in the presence and absence of an unknown inhibitor.

In the absence of inhibitor, the enzyme showed a Km of 2.5 mM and a Vmax of 100 μmol/min. When the inhibitor was added at a concentration of 1 mM, the apparent Km increased to 5.0 mM while Vmax remained unchanged at 100 μmol/min.

The researchers also noted that adding excess substrate could overcome the inhibitory effect, restoring the reaction rate to near-normal levels.`,questions:[{id:"passage-1-q1",question:"Based on the data, what type of inhibition is described?",options:["Competitive inhibition","Non-competitive inhibition","Uncompetitive inhibition","Mixed inhibition"],correctIndex:0,explanation:"Competitive inhibition is characterized by increased Km (reduced apparent affinity) with unchanged Vmax. The inhibitor competes with substrate for the active site, and can be overcome by excess substrate."},{id:"passage-1-q2",question:"At what substrate concentration would the reaction velocity be 50% of Vmax in the presence of the inhibitor?",options:["2.5 mM","5.0 mM","7.5 mM","10.0 mM"],correctIndex:1,explanation:"The reaction velocity equals 50% of Vmax when [S] = Km. With the inhibitor present, the apparent Km is 5.0 mM, so 50% Vmax occurs at 5.0 mM substrate."}]},{id:"passage-2",section:"chem",title:"Acid-Base Equilibrium",passage:`A student prepared a series of buffer solutions using phosphoric acid (H₃PO₄) and its conjugates. Phosphoric acid is a triprotic acid with the following pKa values:

pKa1 = 2.15 (H₃PO₄/H₂PO₄⁻)
pKa2 = 7.20 (H₂PO₄⁻/HPO₄²⁻)
pKa3 = 12.35 (HPO₄²⁻/PO₄³⁻)

The student wanted to prepare a buffer at physiological pH (7.4) for use in a biochemistry experiment. She mixed appropriate amounts of sodium dihydrogen phosphate (NaH₂PO₄) and disodium hydrogen phosphate (Na₂HPO₄).`,questions:[{id:"passage-2-q1",question:"Which conjugate pair is most appropriate for a buffer at pH 7.4?",options:["H₃PO₄/H₂PO₄⁻","H₂PO₄⁻/HPO₄²⁻","HPO₄²⁻/PO₄³⁻","Any of the above would work equally well"],correctIndex:1,explanation:"A buffer works best when pH is within 1 unit of pKa. The H₂PO₄⁻/HPO₄²⁻ system with pKa2 = 7.20 is closest to pH 7.4, making it the best choice for physiological buffers."},{id:"passage-2-q2",question:"To achieve pH 7.4, what should be the ratio of [HPO₄²⁻]/[H₂PO₄⁻]?",options:["0.63","1.0","1.58","2.51"],correctIndex:2,explanation:"Using Henderson-Hasselbalch: 7.4 = 7.20 + log([HPO₄²⁻]/[H₂PO₄⁻]). So log(ratio) = 0.20, and ratio = 10^0.20 ≈ 1.58"}]}],sh={freestanding:cE,passages:uE},dE=()=>{const[e,n]=w.useState("freestanding"),[t,r]=w.useState(0),[i,o]=w.useState(0),[s,a]=w.useState(0),l=sh.freestanding,c=sh.passages,u=l[t],p=c[i],f=p==null?void 0:p.questions[s],d=()=>{r(h=>h<l.length-1?h+1:0)},v=()=>{r(h=>h>0?h-1:l.length-1)},m=()=>{s<p.questions.length-1?a(h=>h+1):i<c.length-1?(o(h=>h+1),a(0)):(o(0),a(0))},b=()=>{s>0?a(h=>h-1):i>0?(o(h=>h-1),a(c[i-1].questions.length-1)):(o(c.length-1),a(c[c.length-1].questions.length-1))};return k.jsx(Zo,{title:"Question Bank",subtitle:"Practice MCAT-style questions",children:k.jsxs("div",{className:"max-w-lg mx-auto space-y-6",children:[k.jsxs("div",{className:"flex rounded-lg border border-border overflow-hidden",children:[k.jsx("button",{onClick:()=>n("freestanding"),className:`flex-1 py-2.5 text-sm font-medium transition-colors ${e==="freestanding"?"bg-primary text-primary-foreground":"bg-card hover:bg-accent"}`,children:"Freestanding"}),k.jsx("button",{onClick:()=>n("passages"),className:`flex-1 py-2.5 text-sm font-medium transition-colors ${e==="passages"?"bg-primary text-primary-foreground":"bg-card hover:bg-accent"}`,children:"Passage-Based"})]}),e==="freestanding"&&u&&k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx(Ha,{section:u.section}),k.jsxs("span",{className:"text-sm text-muted-foreground",children:[t+1," / ",l.length]})]}),k.jsx(oh,{question:u.question,options:u.options,correctIndex:u.correctIndex,explanation:u.explanation},u.id),k.jsxs("div",{className:"flex items-center justify-between gap-4",children:[k.jsxs("button",{onClick:v,className:"flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors",children:[k.jsx(Na,{className:"h-5 w-5"}),k.jsx("span",{className:"font-medium",children:"Previous"})]}),k.jsxs("button",{onClick:d,className:"flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors",children:[k.jsx("span",{className:"font-medium",children:"Next"}),k.jsx(Ra,{className:"h-5 w-5"})]})]})]}),e==="passages"&&p&&f&&k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx(Ha,{section:p.section}),k.jsxs("span",{className:"text-sm text-muted-foreground",children:["Passage ",i+1,", Q",s+1]})]}),k.jsxs("div",{className:"rounded-xl border border-border bg-card p-5",children:[k.jsx("h3",{className:"font-semibold font-serif mb-3",children:p.title}),k.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap",children:p.passage})]}),k.jsx(oh,{question:f.question,options:f.options,correctIndex:f.correctIndex,explanation:f.explanation},f.id),k.jsxs("div",{className:"flex items-center justify-between gap-4",children:[k.jsxs("button",{onClick:b,className:"flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors",children:[k.jsx(Na,{className:"h-5 w-5"}),k.jsx("span",{className:"font-medium",children:"Previous"})]}),k.jsxs("button",{onClick:m,className:"flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors",children:[k.jsx("span",{className:"font-medium",children:"Next"}),k.jsx(Ra,{className:"h-5 w-5"})]})]})]})]})})},ah=[{id:"chem-acids-bases",section:"chem",topic:"Acids and Bases",content:`## Acids and Bases

### Key Definitions
- **Arrhenius**: Acids produce H⁺, bases produce OH⁻
- **Brønsted-Lowry**: Acids are proton donors, bases are proton acceptors
- **Lewis**: Acids are electron pair acceptors, bases are electron pair donors

### Strong vs Weak
**Strong Acids** (completely dissociate):
- HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄

**Strong Bases**:
- Group 1 hydroxides (NaOH, KOH)
- Heavy Group 2 hydroxides (Ca(OH)₂, Ba(OH)₂)

### Important Equations
\`\`\`
pH = -log[H⁺]
pOH = -log[OH⁻]
pH + pOH = 14 (at 25°C)
Ka × Kb = Kw = 10⁻¹⁴
\`\`\`

### Henderson-Hasselbalch
\`\`\`
pH = pKa + log([A⁻]/[HA])
\`\`\`
Use for buffer calculations. Buffer works best when pH = pKa ± 1.

### Titration Curves
- **Equivalence point**: moles acid = moles base
- **Half-equivalence point**: pH = pKa (for weak acid)
- Strong acid + strong base → pH 7 at equivalence
- Weak acid + strong base → pH > 7 at equivalence`},{id:"chem-thermodynamics",section:"chem",topic:"Thermodynamics",content:`## Thermodynamics

### First Law
Energy is conserved: ΔU = q + w
- q = heat
- w = work = -PΔV (for expansion)

### Enthalpy (H)
- ΔH < 0: exothermic
- ΔH > 0: endothermic
- ΔH°rxn = Σ ΔH°f(products) - Σ ΔH°f(reactants)

### Entropy (S)
Measure of disorder
- ΔS > 0: more disorder (favorable)
- Increases with: more moles of gas, higher T, phase transitions (s→l→g)

### Gibbs Free Energy
\`\`\`
ΔG = ΔH - TΔS
\`\`\`
- ΔG < 0: spontaneous
- ΔG > 0: non-spontaneous
- ΔG = 0: equilibrium

### Relationship to K
\`\`\`
ΔG° = -RT ln K
\`\`\`
- K > 1: ΔG° < 0 (products favored)
- K < 1: ΔG° > 0 (reactants favored)`},{id:"bio-cell-respiration",section:"bio",topic:"Cellular Respiration",content:`## Cellular Respiration

### Overview
Glucose + O₂ → CO₂ + H₂O + ATP

Total yield: ~30-32 ATP per glucose

### 1. Glycolysis (Cytoplasm)
- Glucose → 2 Pyruvate
- Net: 2 ATP + 2 NADH
- Anaerobic (doesn't require O₂)
- Regulated by PFK-1 (rate-limiting step)

### 2. Pyruvate Oxidation (Mitochondrial Matrix)
- Pyruvate → Acetyl-CoA + CO₂
- Produces 2 NADH (per glucose)

### 3. Citric Acid Cycle (Matrix)
Per glucose:
- 2 ATP (via GTP)
- 6 NADH
- 2 FADH₂
- 4 CO₂

### 4. Electron Transport Chain (Inner Membrane)
- NADH → 2.5 ATP each
- FADH₂ → 1.5 ATP each
- O₂ is final electron acceptor → H₂O

### Key Points
- Cyanide inhibits Complex IV
- Oligomycin inhibits ATP synthase
- Uncouplers (DNP) allow H⁺ leak → heat, no ATP`},{id:"bio-genetics",section:"bio",topic:"Genetics Essentials",content:`## Genetics Essentials

### Central Dogma
DNA → RNA → Protein

### DNA Replication
- Semiconservative
- 5' to 3' synthesis
- Leading strand: continuous
- Lagging strand: Okazaki fragments
- Key enzymes: Helicase, Primase, DNA Pol III, Ligase

### Transcription
**Prokaryotes**: No processing needed
**Eukaryotes**: 
- 5' cap (7-methylguanosine)
- 3' poly-A tail
- Splicing (remove introns, keep exons)

### Translation
- Start codon: AUG (Met)
- Stop codons: UAA, UAG, UGA
- Wobble: 3rd position of codon less specific

### Mendelian Genetics
- Dominant masks recessive
- Law of Segregation: alleles separate in meiosis
- Law of Independent Assortment: genes on different chromosomes

### Non-Mendelian Patterns
- Incomplete dominance: heterozygote intermediate
- Codominance: both alleles expressed (blood types)
- X-linked: more common in males
- Epistasis: one gene affects another`},{id:"psych-learning",section:"psych",topic:"Learning and Memory",content:`## Learning and Memory

### Classical Conditioning (Pavlov)
- Unconditioned stimulus (US) → Unconditioned response (UR)
- US + Neutral stimulus → Conditioned stimulus (CS)
- CS → Conditioned response (CR)

**Key Terms:**
- Acquisition: learning the association
- Extinction: CR fades without US
- Spontaneous recovery: CR returns after rest
- Generalization: respond to similar stimuli
- Discrimination: distinguish between stimuli

### Operant Conditioning (Skinner)
| Type | Effect | Example |
|------|--------|---------|
| Positive reinforcement | Add good → ↑ behavior | Give treat |
| Negative reinforcement | Remove bad → ↑ behavior | Stop alarm |
| Positive punishment | Add bad → ↓ behavior | Give detention |
| Negative punishment | Remove good → ↓ behavior | Take phone |

### Memory Types
**Sensory Memory**
- Iconic (visual): ~0.5 sec
- Echoic (auditory): ~3-4 sec

**Short-term/Working Memory**
- ~20 sec, 7±2 items
- Maintenance rehearsal keeps info

**Long-term Memory**
- Explicit (declarative): episodic, semantic
- Implicit (non-declarative): procedural, priming`},{id:"psych-social",section:"psych",topic:"Social Psychology",content:`## Social Psychology

### Attribution
**Internal (dispositional)**: behavior due to personality
**External (situational)**: behavior due to circumstances

**Fundamental Attribution Error**: Overattribute others' behavior to internal factors

**Self-serving bias**: Attribute success to self, failure to situation

### Social Influence
**Conformity** (Asch): changing behavior to match group
**Obedience** (Milgram): following authority
**Compliance**: agreeing to requests

Techniques:
- Foot-in-the-door: small request → big request
- Door-in-the-face: big request (refused) → small request

### Group Dynamics
- **Social facilitation**: perform better on easy tasks with others
- **Social loafing**: less effort in groups
- **Groupthink**: desire for harmony → poor decisions
- **Deindividuation**: lose self-awareness in crowds

### Attitudes
**Components**: Affective, Behavioral, Cognitive (ABC)

**Cognitive Dissonance**: discomfort from conflicting attitudes/behaviors
→ Change attitude or behavior to reduce

### Stereotypes, Prejudice, Discrimination
- Stereotype: cognitive (beliefs)
- Prejudice: affective (feelings)
- Discrimination: behavioral (actions)`},{id:"cars-strategy",section:"cars",topic:"CARS Strategy Guide",content:`## CARS Strategy Guide

### Reading Strategy
1. **First read**: Get main idea, author's tone
2. **Don't memorize**: You can look back
3. **Mark key points**: Topic sentences, conclusions
4. **~4 min per passage**, ~10 min total per passage set

### Main Idea Questions
- What is the author arguing?
- Look at intro and conclusion
- Must be supported throughout passage

### Detail Questions
- Look back at passage
- Answer will be directly stated
- Watch for paraphrasing

### Inference Questions
- Not directly stated but logically follows
- Must be supported by evidence
- Don't go too far beyond text

### Author's Tone/Attitude
Clues:
- Word choice (connotation)
- Treatment of opposing views
- Use of qualifiers

Common tones: Critical, Skeptical, Supportive, Objective, Dismissive

### Strengthen/Weaken Questions
1. Identify the argument
2. Find the conclusion
3. Find the evidence/premises
4. Look for assumptions
5. Choose answer that supports or attacks

### Common Wrong Answer Types
- Too extreme
- Out of scope
- Opposite of correct
- Half right/half wrong
- True but doesn't answer question`}];function pE(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const fE=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,hE=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,mE={};function lh(e,n){return(mE.jsx?hE:fE).test(e)}const gE=/[ \t\n\f\r]/g;function yE(e){return typeof e=="object"?e.type==="text"?ch(e.value):!1:ch(e)}function ch(e){return e.replace(gE,"")===""}class ps{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}ps.prototype.normal={};ps.prototype.property={};ps.prototype.space=void 0;function ob(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new ps(t,r,n)}function Au(e){return e.toLowerCase()}class pn{constructor(n,t){this.attribute=t,this.property=n}}pn.prototype.attribute="";pn.prototype.booleanish=!1;pn.prototype.boolean=!1;pn.prototype.commaOrSpaceSeparated=!1;pn.prototype.commaSeparated=!1;pn.prototype.defined=!1;pn.prototype.mustUseProperty=!1;pn.prototype.number=!1;pn.prototype.overloadedBoolean=!1;pn.prototype.property="";pn.prototype.spaceSeparated=!1;pn.prototype.space=void 0;let vE=0;const ne=Yr(),Ne=Yr(),Tu=Yr(),j=Yr(),fe=Yr(),Si=Yr(),gn=Yr();function Yr(){return 2**++vE}const Nu=Object.freeze(Object.defineProperty({__proto__:null,boolean:ne,booleanish:Ne,commaOrSpaceSeparated:gn,commaSeparated:Si,number:j,overloadedBoolean:Tu,spaceSeparated:fe},Symbol.toStringTag,{value:"Module"})),ac=Object.keys(Nu);class Qd extends pn{constructor(n,t,r,i){let o=-1;if(super(n,t),uh(this,"space",i),typeof r=="number")for(;++o<ac.length;){const s=ac[o];uh(this,ac[o],(r&Nu[s])===Nu[s])}}}Qd.prototype.defined=!0;function uh(e,n,t){t&&(e[n]=t)}function Xi(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const o=new Qd(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),n[r]=o,t[Au(r)]=r,t[Au(o.attribute)]=r}return new ps(n,t,e.space)}const sb=Xi({properties:{ariaActiveDescendant:null,ariaAtomic:Ne,ariaAutoComplete:null,ariaBusy:Ne,ariaChecked:Ne,ariaColCount:j,ariaColIndex:j,ariaColSpan:j,ariaControls:fe,ariaCurrent:null,ariaDescribedBy:fe,ariaDetails:null,ariaDisabled:Ne,ariaDropEffect:fe,ariaErrorMessage:null,ariaExpanded:Ne,ariaFlowTo:fe,ariaGrabbed:Ne,ariaHasPopup:null,ariaHidden:Ne,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:fe,ariaLevel:j,ariaLive:null,ariaModal:Ne,ariaMultiLine:Ne,ariaMultiSelectable:Ne,ariaOrientation:null,ariaOwns:fe,ariaPlaceholder:null,ariaPosInSet:j,ariaPressed:Ne,ariaReadOnly:Ne,ariaRelevant:null,ariaRequired:Ne,ariaRoleDescription:fe,ariaRowCount:j,ariaRowIndex:j,ariaRowSpan:j,ariaSelected:Ne,ariaSetSize:j,ariaSort:null,ariaValueMax:j,ariaValueMin:j,ariaValueNow:j,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function ab(e,n){return n in e?e[n]:n}function lb(e,n){return ab(e,n.toLowerCase())}const bE=Xi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Si,acceptCharset:fe,accessKey:fe,action:null,allow:null,allowFullScreen:ne,allowPaymentRequest:ne,allowUserMedia:ne,alt:null,as:null,async:ne,autoCapitalize:null,autoComplete:fe,autoFocus:ne,autoPlay:ne,blocking:fe,capture:null,charSet:null,checked:ne,cite:null,className:fe,cols:j,colSpan:null,content:null,contentEditable:Ne,controls:ne,controlsList:fe,coords:j|Si,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ne,defer:ne,dir:null,dirName:null,disabled:ne,download:Tu,draggable:Ne,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ne,formTarget:null,headers:fe,height:j,hidden:Tu,high:j,href:null,hrefLang:null,htmlFor:fe,httpEquiv:fe,id:null,imageSizes:null,imageSrcSet:null,inert:ne,inputMode:null,integrity:null,is:null,isMap:ne,itemId:null,itemProp:fe,itemRef:fe,itemScope:ne,itemType:fe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ne,low:j,manifest:null,max:null,maxLength:j,media:null,method:null,min:null,minLength:j,multiple:ne,muted:ne,name:null,nonce:null,noModule:ne,noValidate:ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ne,optimum:j,pattern:null,ping:fe,placeholder:null,playsInline:ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ne,referrerPolicy:null,rel:fe,required:ne,reversed:ne,rows:j,rowSpan:j,sandbox:fe,scope:null,scoped:ne,seamless:ne,selected:ne,shadowRootClonable:ne,shadowRootDelegatesFocus:ne,shadowRootMode:null,shape:null,size:j,sizes:null,slot:null,span:j,spellCheck:Ne,src:null,srcDoc:null,srcLang:null,srcSet:null,start:j,step:null,style:null,tabIndex:j,target:null,title:null,translate:null,type:null,typeMustMatch:ne,useMap:null,value:Ne,width:j,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:fe,axis:null,background:null,bgColor:null,border:j,borderColor:null,bottomMargin:j,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ne,declare:ne,event:null,face:null,frame:null,frameBorder:null,hSpace:j,leftMargin:j,link:null,longDesc:null,lowSrc:null,marginHeight:j,marginWidth:j,noResize:ne,noHref:ne,noShade:ne,noWrap:ne,object:null,profile:null,prompt:null,rev:null,rightMargin:j,rules:null,scheme:null,scrolling:Ne,standby:null,summary:null,text:null,topMargin:j,valueType:null,version:null,vAlign:null,vLink:null,vSpace:j,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ne,disableRemotePlayback:ne,prefix:null,property:null,results:j,security:null,unselectable:null},space:"html",transform:lb}),xE=Xi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:gn,accentHeight:j,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:j,amplitude:j,arabicForm:null,ascent:j,attributeName:null,attributeType:null,azimuth:j,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:j,by:null,calcMode:null,capHeight:j,className:fe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:j,diffuseConstant:j,direction:null,display:null,dur:null,divisor:j,dominantBaseline:null,download:ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:j,enableBackground:null,end:null,event:null,exponent:j,externalResourcesRequired:null,fill:null,fillOpacity:j,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Si,g2:Si,glyphName:Si,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:j,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:j,horizOriginX:j,horizOriginY:j,id:null,ideographic:j,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:j,k:j,k1:j,k2:j,k3:j,k4:j,kernelMatrix:gn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:j,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:j,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:j,overlineThickness:j,paintOrder:null,panose1:null,path:null,pathLength:j,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:fe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:j,pointsAtY:j,pointsAtZ:j,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:gn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:gn,rev:gn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:gn,requiredFeatures:gn,requiredFonts:gn,requiredFormats:gn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:j,specularExponent:j,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:j,strikethroughThickness:j,string:null,stroke:null,strokeDashArray:gn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:j,strokeOpacity:j,strokeWidth:null,style:null,surfaceScale:j,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:gn,tabIndex:j,tableValues:null,target:null,targetX:j,targetY:j,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:gn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:j,underlineThickness:j,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:j,values:null,vAlphabetic:j,vMathematical:j,vectorEffect:null,vHanging:j,vIdeographic:j,version:null,vertAdvY:j,vertOriginX:j,vertOriginY:j,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:j,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ab}),cb=Xi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),ub=Xi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:lb}),db=Xi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),wE={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},kE=/[A-Z]/g,dh=/-[a-z]/g,SE=/^data[-\w.:]+$/i;function CE(e,n){const t=Au(n);let r=n,i=pn;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&SE.test(n)){if(n.charAt(4)==="-"){const o=n.slice(5).replace(dh,EE);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=n.slice(4);if(!dh.test(o)){let s=o.replace(kE,PE);s.charAt(0)!=="-"&&(s="-"+s),n="data"+s}}i=Qd}return new i(r,n)}function PE(e){return"-"+e.toLowerCase()}function EE(e){return e.charAt(1).toUpperCase()}const AE=ob([sb,bE,cb,ub,db],"html"),Yd=ob([sb,xE,cb,ub,db],"svg");function TE(e){return e.join(" ").trim()}var Xd={},ph=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,NE=/\n/g,RE=/^\s*/,IE=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,DE=/^:\s*/,ME=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,OE=/^[;\s]*/,LE=/^\s+|\s+$/g,FE=`
`,fh="/",hh="*",Nr="",zE="comment",_E="declaration";function jE(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(v){var m=v.match(NE);m&&(t+=m.length);var b=v.lastIndexOf(FE);r=~b?v.length-b:r+v.length}function o(){var v={line:t,column:r};return function(m){return m.position=new s(v),c(),m}}function s(v){this.start=v,this.end={line:t,column:r},this.source=n.source}s.prototype.content=e;function a(v){var m=new Error(n.source+":"+t+":"+r+": "+v);if(m.reason=v,m.filename=n.source,m.line=t,m.column=r,m.source=e,!n.silent)throw m}function l(v){var m=v.exec(e);if(m){var b=m[0];return i(b),e=e.slice(b.length),m}}function c(){l(RE)}function u(v){var m;for(v=v||[];m=p();)m!==!1&&v.push(m);return v}function p(){var v=o();if(!(fh!=e.charAt(0)||hh!=e.charAt(1))){for(var m=2;Nr!=e.charAt(m)&&(hh!=e.charAt(m)||fh!=e.charAt(m+1));)++m;if(m+=2,Nr===e.charAt(m-1))return a("End of comment missing");var b=e.slice(2,m-2);return r+=2,i(b),e=e.slice(m),r+=2,v({type:zE,comment:b})}}function f(){var v=o(),m=l(IE);if(m){if(p(),!l(DE))return a("property missing ':'");var b=l(ME),h=v({type:_E,property:mh(m[0].replace(ph,Nr)),value:b?mh(b[0].replace(ph,Nr)):Nr});return l(OE),h}}function d(){var v=[];u(v);for(var m;m=f();)m!==!1&&(v.push(m),u(v));return v}return c(),d()}function mh(e){return e?e.replace(LE,Nr):Nr}var HE=jE,BE=ia&&ia.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xd,"__esModule",{value:!0});Xd.default=UE;const WE=BE(HE);function UE(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,WE.default)(e),i=typeof n=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?n(s,a,o):a&&(t=t||{},t[s]=a)}),t}var bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.camelCase=void 0;var VE=/^--[a-zA-Z0-9_-]+$/,GE=/-([a-z])/g,qE=/^[^-]+$/,$E=/^-(webkit|moz|ms|o|khtml)-/,KE=/^-(ms)-/,QE=function(e){return!e||qE.test(e)||VE.test(e)},YE=function(e,n){return n.toUpperCase()},gh=function(e,n){return"".concat(n,"-")},XE=function(e,n){return n===void 0&&(n={}),QE(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(KE,gh):e=e.replace($E,gh),e.replace(GE,YE))};bl.camelCase=XE;var JE=ia&&ia.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ZE=JE(Xd),eA=bl;function Ru(e,n){var t={};return!e||typeof e!="string"||(0,ZE.default)(e,function(r,i){r&&i&&(t[(0,eA.camelCase)(r,n)]=i)}),t}Ru.default=Ru;var nA=Ru;const tA=Ua(nA),pb=fb("end"),Jd=fb("start");function fb(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function rA(e){const n=Jd(e),t=pb(e);if(n&&t)return{start:n,end:t}}function Ao(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?yh(e.position):"start"in e||"end"in e?yh(e):"line"in e||"column"in e?Iu(e):""}function Iu(e){return vh(e&&e.line)+":"+vh(e&&e.column)}function yh(e){return Iu(e&&e.start)+"-"+Iu(e&&e.end)}function vh(e){return e&&typeof e=="number"?e:1}class Ge extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},s=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof n=="string"?i=n:!o.cause&&n&&(s=!0,i=n.message,o.cause=n),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Ao(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ge.prototype.file="";Ge.prototype.name="";Ge.prototype.reason="";Ge.prototype.message="";Ge.prototype.stack="";Ge.prototype.column=void 0;Ge.prototype.line=void 0;Ge.prototype.ancestors=void 0;Ge.prototype.cause=void 0;Ge.prototype.fatal=void 0;Ge.prototype.place=void 0;Ge.prototype.ruleId=void 0;Ge.prototype.source=void 0;const Zd={}.hasOwnProperty,iA=new Map,oA=/[A-Z]/g,sA=new Set(["table","tbody","thead","tfoot","tr"]),aA=new Set(["td","th"]),hb="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function lA(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=gA(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=mA(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Yd:AE,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},o=mb(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function mb(e,n,t){if(n.type==="element")return cA(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return uA(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return pA(e,n,t);if(n.type==="mdxjsEsm")return dA(e,n);if(n.type==="root")return fA(e,n,t);if(n.type==="text")return hA(e,n)}function cA(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Yd,e.schema=i),e.ancestors.push(n);const o=yb(e,n.tagName,!1),s=yA(e,n);let a=np(e,n);return sA.has(n.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!yE(l):!0})),gb(e,s,o,n),ep(s,a),e.ancestors.pop(),e.schema=r,e.create(n,o,s,t)}function uA(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}es(e,n.position)}function dA(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);es(e,n.position)}function pA(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Yd,e.schema=i),e.ancestors.push(n);const o=n.name===null?e.Fragment:yb(e,n.name,!0),s=vA(e,n),a=np(e,n);return gb(e,s,o,n),ep(s,a),e.ancestors.pop(),e.schema=r,e.create(n,o,s,t)}function fA(e,n,t){const r={};return ep(r,np(e,n)),e.create(n,e.Fragment,r,t)}function hA(e,n){return n.value}function gb(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function ep(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function mA(e,n,t){return r;function r(i,o,s,a){const c=Array.isArray(s.children)?t:n;return a?c(o,s,a):c(o,s)}}function gA(e,n){return t;function t(r,i,o,s){const a=Array.isArray(o.children),l=Jd(r);return n(i,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function yA(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Zd.call(n.properties,i)){const o=bA(e,i,n.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&aA.has(n.tagName)?r=a:t[s]=a}}if(r){const o=t.style||(t.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function vA(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(t,e.evaluater.evaluateExpression(a.argument))}else es(e,n.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else es(e,n.position);else o=r.value===null?!0:r.value;t[i]=o}return t}function np(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:iA;for(;++r<n.children.length;){const o=n.children[r];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const c=i.get(l)||0;s=l+"-"+c,i.set(l,c+1)}}const a=mb(e,o,s);a!==void 0&&t.push(a)}return t}function bA(e,n,t){const r=CE(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?pE(t):TE(t)),r.property==="style"){let i=typeof t=="object"?t:xA(e,String(t));return e.stylePropertyNameCase==="css"&&(i=wA(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?wE[r.property]||r.property:r.attribute,t]}}function xA(e,n){try{return tA(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Ge("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=hb+"#cannot-parse-style-attribute",i}}function yb(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let o=-1,s;for(;++o<i.length;){const a=lh(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=lh(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Zd.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);es(e)}function es(e,n){const t=new Ge("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=hb+"#cannot-handle-mdx-estrees-without-createevaluater",t}function wA(e){const n={};let t;for(t in e)Zd.call(e,t)&&(n[kA(t)]=e[t]);return n}function kA(e){let n=e.replace(oA,SA);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function SA(e){return"-"+e.toLowerCase()}const lc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},CA={};function PA(e,n){const t=CA,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return vb(e,r,i)}function vb(e,n,t){if(EA(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return bh(e.children,n,t)}return Array.isArray(e)?bh(e,n,t):""}function bh(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=vb(e[i],n,t);return r.join("")}function EA(e){return!!(e&&typeof e=="object")}const xh=document.createElement("i");function tp(e){const n="&"+e+";";xh.innerHTML=n;const t=xh.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function ht(e,n,t,r){const i=e.length;let o=0,s;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)s=Array.from(r),s.unshift(n,t),e.splice(...s);else for(t&&e.splice(n,t);o<r.length;)s=r.slice(o,o+1e4),s.unshift(n,0),e.splice(...s),o+=1e4,n+=1e4}function Rn(e,n){return e.length>0?(ht(e,e.length,0,n),e):n}const wh={}.hasOwnProperty;function AA(e){const n={};let t=-1;for(;++t<e.length;)TA(n,e[t]);return n}function TA(e,n){let t;for(t in n){const i=(wh.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t];let s;if(o)for(s in o){wh.call(i,s)||(i[s]=[]);const a=o[s];NA(i[s],Array.isArray(a)?a:a?[a]:[])}}}function NA(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);ht(e,0,0,r)}function bb(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Ci(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const lt=kr(/[A-Za-z]/),xn=kr(/[\dA-Za-z]/),RA=kr(/[#-'*+\--9=?A-Z^-~]/);function Du(e){return e!==null&&(e<32||e===127)}const Mu=kr(/\d/),IA=kr(/[\dA-Fa-f]/),DA=kr(/[!-/:-@[-`{-~]/);function Y(e){return e!==null&&e<-2}function cn(e){return e!==null&&(e<0||e===32)}function ce(e){return e===-2||e===-1||e===32}const MA=kr(new RegExp("\\p{P}|\\p{S}","u")),OA=kr(/\s/);function kr(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Ji(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const o=e.charCodeAt(t);let s="";if(o===37&&xn(e.charCodeAt(t+1))&&xn(e.charCodeAt(t+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(t+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(n.push(e.slice(r,t),encodeURIComponent(s)),r=t+i+1,s=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function me(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return ce(l)?(e.enter(t),a(l)):n(l)}function a(l){return ce(l)&&o++<i?(e.consume(l),a):(e.exit(t),n(l))}}const LA={tokenize:FA};function FA(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),me(e,n,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return Y(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const zA={tokenize:_A},kh={tokenize:jA};function _A(e){const n=this,t=[];let r=0,i,o,s;return a;function a(y){if(r<t.length){const C=t[r];return n.containerState=C[1],e.attempt(C[0].continuation,l,c)(y)}return c(y)}function l(y){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&g();const C=n.events.length;let E=C,P;for(;E--;)if(n.events[E][0]==="exit"&&n.events[E][1].type==="chunkFlow"){P=n.events[E][1].end;break}h(r);let A=C;for(;A<n.events.length;)n.events[A][1].end={...P},A++;return ht(n.events,E+1,0,n.events.slice(C)),n.events.length=A,c(y)}return a(y)}function c(y){if(r===t.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return v(y);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(kh,u,p)(y)}function u(y){return i&&g(),h(r),f(y)}function p(y){return n.parser.lazy[n.now().line]=r!==t.length,s=n.now().offset,v(y)}function f(y){return n.containerState={},e.attempt(kh,d,v)(y)}function d(y){return r++,t.push([n.currentConstruct,n.containerState]),f(y)}function v(y){if(y===null){i&&g(),h(0),e.consume(y);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),m(y)}function m(y){if(y===null){b(e.exit("chunkFlow"),!0),h(0),e.consume(y);return}return Y(y)?(e.consume(y),b(e.exit("chunkFlow")),r=0,n.interrupt=void 0,a):(e.consume(y),m)}function b(y,C){const E=n.sliceStream(y);if(C&&E.push(null),y.previous=o,o&&(o.next=y),o=y,i.defineSkip(y.start),i.write(E),n.parser.lazy[y.start.line]){let P=i.events.length;for(;P--;)if(i.events[P][1].start.offset<s&&(!i.events[P][1].end||i.events[P][1].end.offset>s))return;const A=n.events.length;let R=A,L,O;for(;R--;)if(n.events[R][0]==="exit"&&n.events[R][1].type==="chunkFlow"){if(L){O=n.events[R][1].end;break}L=!0}for(h(r),P=A;P<n.events.length;)n.events[P][1].end={...O},P++;ht(n.events,R+1,0,n.events.slice(A)),n.events.length=P}}function h(y){let C=t.length;for(;C-- >y;){const E=t[C];n.containerState=E[1],E[0].exit.call(n,e)}t.length=y}function g(){i.write([null]),o=void 0,i=void 0,n.containerState._closeFlow=void 0}}function jA(e,n,t){return me(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Sh(e){if(e===null||cn(e)||OA(e))return 1;if(MA(e))return 2}function rp(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(n=o(n,t),r.push(o))}return n}const Ou={name:"attention",resolveAll:HA,tokenize:BA};function HA(e,n){let t=-1,r,i,o,s,a,l,c,u;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[t][1].start};Ch(p,-l),Ch(f,l),s={type:l>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:f},o={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[t][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=Rn(c,[["enter",e[r][1],n],["exit",e[r][1],n]])),c=Rn(c,[["enter",i,n],["enter",s,n],["exit",s,n],["enter",o,n]]),c=Rn(c,rp(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),c=Rn(c,[["exit",o,n],["enter",a,n],["exit",a,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(u=2,c=Rn(c,[["enter",e[t][1],n],["exit",e[t][1],n]])):u=0,ht(e,r-1,t-r+3,c),t=r+c.length-u-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function BA(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Sh(r);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const c=e.exit("attentionSequence"),u=Sh(l),p=!u||u===2&&i||t.includes(l),f=!i||i===2&&u||t.includes(r);return c._open=!!(o===42?p:p&&(i||!f)),c._close=!!(o===42?f:f&&(u||!p)),n(l)}}function Ch(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const WA={name:"autolink",tokenize:UA};function UA(e,n,t){let r=0;return i;function i(d){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(d){return lt(d)?(e.consume(d),s):d===64?t(d):c(d)}function s(d){return d===43||d===45||d===46||xn(d)?(r=1,a(d)):c(d)}function a(d){return d===58?(e.consume(d),r=0,l):(d===43||d===45||d===46||xn(d))&&r++<32?(e.consume(d),a):(r=0,c(d))}function l(d){return d===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),n):d===null||d===32||d===60||Du(d)?t(d):(e.consume(d),l)}function c(d){return d===64?(e.consume(d),u):RA(d)?(e.consume(d),c):t(d)}function u(d){return xn(d)?p(d):t(d)}function p(d){return d===46?(e.consume(d),r=0,u):d===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),n):f(d)}function f(d){if((d===45||xn(d))&&r++<63){const v=d===45?f:p;return e.consume(d),v}return t(d)}}const xl={partial:!0,tokenize:VA};function VA(e,n,t){return r;function r(o){return ce(o)?me(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||Y(o)?n(o):t(o)}}const xb={continuation:{tokenize:qA},exit:$A,name:"blockQuote",tokenize:GA};function GA(e,n,t){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return t(s)}function o(s){return ce(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(s))}}function qA(e,n,t){const r=this;return i;function i(s){return ce(s)?me(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(xb,n,t)(s)}}function $A(e){e.exit("blockQuote")}const wb={name:"characterEscape",tokenize:KA};function KA(e,n,t){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return DA(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(o)}}const kb={name:"characterReference",tokenize:QA};function QA(e,n,t){const r=this;let i=0,o,s;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),l}function l(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,s=xn,u(p))}function c(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=IA,u):(e.enter("characterReferenceValue"),o=7,s=Mu,u(p))}function u(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return s===xn&&!tp(r.sliceSerialize(f))?t(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return s(p)&&i++<o?(e.consume(p),u):t(p)}}const Ph={partial:!0,tokenize:XA},Eh={concrete:!0,name:"codeFenced",tokenize:YA};function YA(e,n,t){const r=this,i={partial:!0,tokenize:E};let o=0,s=0,a;return l;function l(P){return c(P)}function c(P){const A=r.events[r.events.length-1];return o=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,a=P,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(P)}function u(P){return P===a?(s++,e.consume(P),u):s<3?t(P):(e.exit("codeFencedFenceSequence"),ce(P)?me(e,p,"whitespace")(P):p(P))}function p(P){return P===null||Y(P)?(e.exit("codeFencedFence"),r.interrupt?n(P):e.check(Ph,m,C)(P)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(P))}function f(P){return P===null||Y(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(P)):ce(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),me(e,d,"whitespace")(P)):P===96&&P===a?t(P):(e.consume(P),f)}function d(P){return P===null||Y(P)?p(P):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(P))}function v(P){return P===null||Y(P)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(P)):P===96&&P===a?t(P):(e.consume(P),v)}function m(P){return e.attempt(i,C,b)(P)}function b(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),h}function h(P){return o>0&&ce(P)?me(e,g,"linePrefix",o+1)(P):g(P)}function g(P){return P===null||Y(P)?e.check(Ph,m,C)(P):(e.enter("codeFlowValue"),y(P))}function y(P){return P===null||Y(P)?(e.exit("codeFlowValue"),g(P)):(e.consume(P),y)}function C(P){return e.exit("codeFenced"),n(P)}function E(P,A,R){let L=0;return O;function O(W){return P.enter("lineEnding"),P.consume(W),P.exit("lineEnding"),F}function F(W){return P.enter("codeFencedFence"),ce(W)?me(P,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(W):I(W)}function I(W){return W===a?(P.enter("codeFencedFenceSequence"),V(W)):R(W)}function V(W){return W===a?(L++,P.consume(W),V):L>=s?(P.exit("codeFencedFenceSequence"),ce(W)?me(P,z,"whitespace")(W):z(W)):R(W)}function z(W){return W===null||Y(W)?(P.exit("codeFencedFence"),A(W)):R(W)}}}function XA(e,n,t){const r=this;return i;function i(s){return s===null?t(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?t(s):n(s)}}const cc={name:"codeIndented",tokenize:ZA},JA={partial:!0,tokenize:eT};function ZA(e,n,t){const r=this;return i;function i(c){return e.enter("codeIndented"),me(e,o,"linePrefix",5)(c)}function o(c){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?s(c):t(c)}function s(c){return c===null?l(c):Y(c)?e.attempt(JA,s,l)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||Y(c)?(e.exit("codeFlowValue"),s(c)):(e.consume(c),a)}function l(c){return e.exit("codeIndented"),n(c)}}function eT(e,n,t){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?t(s):Y(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):me(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(s):Y(s)?i(s):t(s)}}const nT={name:"codeText",previous:rT,resolve:tT,tokenize:iT};function tT(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function rT(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function iT(e,n,t){let r=0,i,o;return s;function s(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),l(p))}function l(p){return p===null?t(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),l):p===96?(o=e.enter("codeTextSequence"),i=0,u(p)):Y(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),l):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||Y(p)?(e.exit("codeTextData"),l(p)):(e.consume(p),c)}function u(p){return p===96?(e.consume(p),i++,u):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(p)):(o.type="codeTextData",c(p))}}class oT{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&uo(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),uo(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),uo(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);uo(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);uo(this.left,t.reverse())}}}function uo(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Sb(e){const n={};let t=-1,r,i,o,s,a,l,c;const u=new oT(e);for(;++t<u.length;){for(;t in n;)t=n[t];if(r=u.get(t),t&&r[1].type==="chunkFlow"&&u.get(t-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,sT(u,t)),t=n[t],c=!0);else if(r[1]._container){for(o=t,i=void 0;o--;)if(s=u.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(u.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...u.get(i)[1].start},a=u.slice(i,t),a.unshift(r),u.splice(i,t-i+1,a))}}return ht(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!c}function sT(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const o=[];let s=t._tokenizer;s||(s=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],c={};let u,p,f=-1,d=t,v=0,m=0;const b=[m];for(;d;){for(;e.get(++i)[1]!==d;);o.push(i),d._tokenizer||(u=r.sliceStream(d),d.next||u.push(null),p&&s.defineSkip(d.start),d._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(u),d._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),p=d,d=d.next}for(d=t;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(m=f+1,b.push(m),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(s.events=[],d?(d._tokenizer=void 0,d.previous=void 0):b.pop(),f=b.length;f--;){const h=a.slice(b[f],b[f+1]),g=o.pop();l.push([g,g+h.length-1]),e.splice(g,2,h)}for(l.reverse(),f=-1;++f<l.length;)c[v+l[f][0]]=v+l[f][1],v+=l[f][1]-l[f][0]-1;return c}const aT={resolve:cT,tokenize:uT},lT={partial:!0,tokenize:dT};function cT(e){return Sb(e),e}function uT(e,n){let t;return r;function r(a){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):Y(a)?e.check(lT,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),n(a)}function s(a){return e.consume(a),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function dT(e,n,t){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),me(e,o,"linePrefix")}function o(s){if(s===null||Y(s))return t(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(s):e.interrupt(r.parser.constructs.flow,t,n)(s)}}function Cb(e,n,t,r,i,o,s,a,l){const c=l||Number.POSITIVE_INFINITY;let u=0;return p;function p(h){return h===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(h),e.exit(o),f):h===null||h===32||h===41||Du(h)?t(h):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),m(h))}function f(h){return h===62?(e.enter(o),e.consume(h),e.exit(o),e.exit(i),e.exit(r),n):(e.enter(a),e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===62?(e.exit("chunkString"),e.exit(a),f(h)):h===null||h===60||Y(h)?t(h):(e.consume(h),h===92?v:d)}function v(h){return h===60||h===62||h===92?(e.consume(h),d):d(h)}function m(h){return!u&&(h===null||h===41||cn(h))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),n(h)):u<c&&h===40?(e.consume(h),u++,m):h===41?(e.consume(h),u--,m):h===null||h===32||h===40||Du(h)?t(h):(e.consume(h),h===92?b:m)}function b(h){return h===40||h===41||h===92?(e.consume(h),m):m(h)}}function Pb(e,n,t,r,i,o){const s=this;let a=0,l;return c;function c(d){return e.enter(r),e.enter(i),e.consume(d),e.exit(i),e.enter(o),u}function u(d){return a>999||d===null||d===91||d===93&&!l||d===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?t(d):d===93?(e.exit(o),e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):Y(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),p(d))}function p(d){return d===null||d===91||d===93||Y(d)||a++>999?(e.exit("chunkString"),u(d)):(e.consume(d),l||(l=!ce(d)),d===92?f:p)}function f(d){return d===91||d===92||d===93?(e.consume(d),a++,p):p(d)}}function Eb(e,n,t,r,i,o){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),s=f===40?41:f,l):t(f)}function l(f){return f===s?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),n):(e.enter(o),c(f))}function c(f){return f===s?(e.exit(o),l(s)):f===null?t(f):Y(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),me(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===s||f===null||Y(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?p:u)}function p(f){return f===s||f===92?(e.consume(f),u):u(f)}}function To(e,n){let t;return r;function r(i){return Y(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):ce(i)?me(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const pT={name:"definition",tokenize:hT},fT={partial:!0,tokenize:mT};function hT(e,n,t){const r=this;let i;return o;function o(d){return e.enter("definition"),s(d)}function s(d){return Pb.call(r,e,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function a(d){return i=Ci(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),l):t(d)}function l(d){return cn(d)?To(e,c)(d):c(d)}function c(d){return Cb(e,u,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function u(d){return e.attempt(fT,p,p)(d)}function p(d){return ce(d)?me(e,f,"whitespace")(d):f(d)}function f(d){return d===null||Y(d)?(e.exit("definition"),r.parser.defined.push(i),n(d)):t(d)}}function mT(e,n,t){return r;function r(a){return cn(a)?To(e,i)(a):t(a)}function i(a){return Eb(e,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return ce(a)?me(e,s,"whitespace")(a):s(a)}function s(a){return a===null||Y(a)?n(a):t(a)}}const gT={name:"hardBreakEscape",tokenize:yT};function yT(e,n,t){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return Y(o)?(e.exit("hardBreakEscape"),n(o)):t(o)}}const vT={name:"headingAtx",resolve:bT,tokenize:xT};function bT(e,n){let t=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},o={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},ht(e,r,t-r+1,[["enter",i,n],["enter",o,n],["exit",o,n],["exit",i,n]])),e}function xT(e,n,t){let r=0;return i;function i(u){return e.enter("atxHeading"),o(u)}function o(u){return e.enter("atxHeadingSequence"),s(u)}function s(u){return u===35&&r++<6?(e.consume(u),s):u===null||cn(u)?(e.exit("atxHeadingSequence"),a(u)):t(u)}function a(u){return u===35?(e.enter("atxHeadingSequence"),l(u)):u===null||Y(u)?(e.exit("atxHeading"),n(u)):ce(u)?me(e,a,"whitespace")(u):(e.enter("atxHeadingText"),c(u))}function l(u){return u===35?(e.consume(u),l):(e.exit("atxHeadingSequence"),a(u))}function c(u){return u===null||u===35||cn(u)?(e.exit("atxHeadingText"),a(u)):(e.consume(u),c)}}const wT=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ah=["pre","script","style","textarea"],kT={concrete:!0,name:"htmlFlow",resolveTo:PT,tokenize:ET},ST={partial:!0,tokenize:TT},CT={partial:!0,tokenize:AT};function PT(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function ET(e,n,t){const r=this;let i,o,s,a,l;return c;function c(S){return u(S)}function u(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),p}function p(S){return S===33?(e.consume(S),f):S===47?(e.consume(S),o=!0,m):S===63?(e.consume(S),i=3,r.interrupt?n:x):lt(S)?(e.consume(S),s=String.fromCharCode(S),b):t(S)}function f(S){return S===45?(e.consume(S),i=2,d):S===91?(e.consume(S),i=5,a=0,v):lt(S)?(e.consume(S),i=4,r.interrupt?n:x):t(S)}function d(S){return S===45?(e.consume(S),r.interrupt?n:x):t(S)}function v(S){const Q="CDATA[";return S===Q.charCodeAt(a++)?(e.consume(S),a===Q.length?r.interrupt?n:I:v):t(S)}function m(S){return lt(S)?(e.consume(S),s=String.fromCharCode(S),b):t(S)}function b(S){if(S===null||S===47||S===62||cn(S)){const Q=S===47,de=s.toLowerCase();return!Q&&!o&&Ah.includes(de)?(i=1,r.interrupt?n(S):I(S)):wT.includes(s.toLowerCase())?(i=6,Q?(e.consume(S),h):r.interrupt?n(S):I(S)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(S):o?g(S):y(S))}return S===45||xn(S)?(e.consume(S),s+=String.fromCharCode(S),b):t(S)}function h(S){return S===62?(e.consume(S),r.interrupt?n:I):t(S)}function g(S){return ce(S)?(e.consume(S),g):O(S)}function y(S){return S===47?(e.consume(S),O):S===58||S===95||lt(S)?(e.consume(S),C):ce(S)?(e.consume(S),y):O(S)}function C(S){return S===45||S===46||S===58||S===95||xn(S)?(e.consume(S),C):E(S)}function E(S){return S===61?(e.consume(S),P):ce(S)?(e.consume(S),E):y(S)}function P(S){return S===null||S===60||S===61||S===62||S===96?t(S):S===34||S===39?(e.consume(S),l=S,A):ce(S)?(e.consume(S),P):R(S)}function A(S){return S===l?(e.consume(S),l=null,L):S===null||Y(S)?t(S):(e.consume(S),A)}function R(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||cn(S)?E(S):(e.consume(S),R)}function L(S){return S===47||S===62||ce(S)?y(S):t(S)}function O(S){return S===62?(e.consume(S),F):t(S)}function F(S){return S===null||Y(S)?I(S):ce(S)?(e.consume(S),F):t(S)}function I(S){return S===45&&i===2?(e.consume(S),G):S===60&&i===1?(e.consume(S),$):S===62&&i===4?(e.consume(S),K):S===63&&i===3?(e.consume(S),x):S===93&&i===5?(e.consume(S),M):Y(S)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(ST,q,V)(S)):S===null||Y(S)?(e.exit("htmlFlowData"),V(S)):(e.consume(S),I)}function V(S){return e.check(CT,z,q)(S)}function z(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),W}function W(S){return S===null||Y(S)?V(S):(e.enter("htmlFlowData"),I(S))}function G(S){return S===45?(e.consume(S),x):I(S)}function $(S){return S===47?(e.consume(S),s="",N):I(S)}function N(S){if(S===62){const Q=s.toLowerCase();return Ah.includes(Q)?(e.consume(S),K):I(S)}return lt(S)&&s.length<8?(e.consume(S),s+=String.fromCharCode(S),N):I(S)}function M(S){return S===93?(e.consume(S),x):I(S)}function x(S){return S===62?(e.consume(S),K):S===45&&i===2?(e.consume(S),x):I(S)}function K(S){return S===null||Y(S)?(e.exit("htmlFlowData"),q(S)):(e.consume(S),K)}function q(S){return e.exit("htmlFlow"),n(S)}}function AT(e,n,t){const r=this;return i;function i(s){return Y(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):t(s)}function o(s){return r.parser.lazy[r.now().line]?t(s):n(s)}}function TT(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(xl,n,t)}}const NT={name:"htmlText",tokenize:RT};function RT(e,n,t){const r=this;let i,o,s;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),l}function l(x){return x===33?(e.consume(x),c):x===47?(e.consume(x),E):x===63?(e.consume(x),y):lt(x)?(e.consume(x),R):t(x)}function c(x){return x===45?(e.consume(x),u):x===91?(e.consume(x),o=0,v):lt(x)?(e.consume(x),g):t(x)}function u(x){return x===45?(e.consume(x),d):t(x)}function p(x){return x===null?t(x):x===45?(e.consume(x),f):Y(x)?(s=p,$(x)):(e.consume(x),p)}function f(x){return x===45?(e.consume(x),d):p(x)}function d(x){return x===62?G(x):x===45?f(x):p(x)}function v(x){const K="CDATA[";return x===K.charCodeAt(o++)?(e.consume(x),o===K.length?m:v):t(x)}function m(x){return x===null?t(x):x===93?(e.consume(x),b):Y(x)?(s=m,$(x)):(e.consume(x),m)}function b(x){return x===93?(e.consume(x),h):m(x)}function h(x){return x===62?G(x):x===93?(e.consume(x),h):m(x)}function g(x){return x===null||x===62?G(x):Y(x)?(s=g,$(x)):(e.consume(x),g)}function y(x){return x===null?t(x):x===63?(e.consume(x),C):Y(x)?(s=y,$(x)):(e.consume(x),y)}function C(x){return x===62?G(x):y(x)}function E(x){return lt(x)?(e.consume(x),P):t(x)}function P(x){return x===45||xn(x)?(e.consume(x),P):A(x)}function A(x){return Y(x)?(s=A,$(x)):ce(x)?(e.consume(x),A):G(x)}function R(x){return x===45||xn(x)?(e.consume(x),R):x===47||x===62||cn(x)?L(x):t(x)}function L(x){return x===47?(e.consume(x),G):x===58||x===95||lt(x)?(e.consume(x),O):Y(x)?(s=L,$(x)):ce(x)?(e.consume(x),L):G(x)}function O(x){return x===45||x===46||x===58||x===95||xn(x)?(e.consume(x),O):F(x)}function F(x){return x===61?(e.consume(x),I):Y(x)?(s=F,$(x)):ce(x)?(e.consume(x),F):L(x)}function I(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),i=x,V):Y(x)?(s=I,$(x)):ce(x)?(e.consume(x),I):(e.consume(x),z)}function V(x){return x===i?(e.consume(x),i=void 0,W):x===null?t(x):Y(x)?(s=V,$(x)):(e.consume(x),V)}function z(x){return x===null||x===34||x===39||x===60||x===61||x===96?t(x):x===47||x===62||cn(x)?L(x):(e.consume(x),z)}function W(x){return x===47||x===62||cn(x)?L(x):t(x)}function G(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),n):t(x)}function $(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),N}function N(x){return ce(x)?me(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):M(x)}function M(x){return e.enter("htmlTextData"),s(x)}}const ip={name:"labelEnd",resolveAll:OT,resolveTo:LT,tokenize:FT},IT={tokenize:zT},DT={tokenize:_T},MT={tokenize:jT};function OT(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&ht(e,0,e.length,t),e}function LT(e,n){let t=e.length,r=0,i,o,s,a;for(;t--;)if(i=e[t][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=t);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},u={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,n],["enter",c,n]],a=Rn(a,e.slice(o+1,o+r+3)),a=Rn(a,[["enter",u,n]]),a=Rn(a,rp(n.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),n)),a=Rn(a,[["exit",u,n],e[s-2],e[s-1],["exit",c,n]]),a=Rn(a,e.slice(s+1)),a=Rn(a,[["exit",l,n]]),ht(e,o,e.length,a),e}function FT(e,n,t){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?p(f):(s=r.parser.defined.includes(Ci(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),l):t(f)}function l(f){return f===40?e.attempt(IT,u,s?u:p)(f):f===91?e.attempt(DT,u,s?c:p)(f):s?u(f):p(f)}function c(f){return e.attempt(MT,u,p)(f)}function u(f){return n(f)}function p(f){return o._balanced=!0,t(f)}}function zT(e,n,t){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return cn(p)?To(e,o)(p):o(p)}function o(p){return p===41?u(p):Cb(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function s(p){return cn(p)?To(e,l)(p):u(p)}function a(p){return t(p)}function l(p){return p===34||p===39||p===40?Eb(e,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):u(p)}function c(p){return cn(p)?To(e,u)(p):u(p)}function u(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),n):t(p)}}function _T(e,n,t){const r=this;return i;function i(a){return Pb.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Ci(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(a):t(a)}function s(a){return t(a)}}function jT(e,n,t){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),n):t(o)}}const HT={name:"labelStartImage",resolveAll:ip.resolveAll,tokenize:BT};function BT(e,n,t){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):t(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const WT={name:"labelStartLink",resolveAll:ip.resolveAll,tokenize:UT};function UT(e,n,t){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):n(s)}}const uc={name:"lineEnding",tokenize:VT};function VT(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),me(e,n,"linePrefix")}}const ta={name:"thematicBreak",tokenize:GT};function GT(e,n,t){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),s(c)}function s(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),l(c)):r>=3&&(c===null||Y(c))?(e.exit("thematicBreak"),n(c)):t(c)}function l(c){return c===i?(e.consume(c),r++,l):(e.exit("thematicBreakSequence"),ce(c)?me(e,a,"whitespace")(c):a(c))}}const nn={continuation:{tokenize:QT},exit:XT,name:"list",tokenize:KT},qT={partial:!0,tokenize:JT},$T={partial:!0,tokenize:YT};function KT(e,n,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(d){const v=r.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||d===r.containerState.marker:Mu(d)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),d===42||d===45?e.check(ta,t,c)(d):c(d);if(!r.interrupt||d===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(d)}return t(d)}function l(d){return Mu(d)&&++s<10?(e.consume(d),l):(!r.interrupt||s<2)&&(r.containerState.marker?d===r.containerState.marker:d===41||d===46)?(e.exit("listItemValue"),c(d)):t(d)}function c(d){return e.enter("listItemMarker"),e.consume(d),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||d,e.check(xl,r.interrupt?t:u,e.attempt(qT,f,p))}function u(d){return r.containerState.initialBlankLine=!0,o++,f(d)}function p(d){return ce(d)?(e.enter("listItemPrefixWhitespace"),e.consume(d),e.exit("listItemPrefixWhitespace"),f):t(d)}function f(d){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(d)}}function QT(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(xl,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,me(e,n,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!ce(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt($T,n,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,me(e,e.attempt(nn,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function YT(e,n,t){const r=this;return me(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?n(o):t(o)}}function XT(e){e.exit(this.containerState.type)}function JT(e,n,t){const r=this;return me(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!ce(o)&&s&&s[1].type==="listItemPrefixWhitespace"?n(o):t(o)}}const Th={name:"setextUnderline",resolveTo:ZT,tokenize:eN};function ZT(e,n){let t=e.length,r,i,o;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!o&&e[t][1].type==="definition"&&(o=t);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,n]),e.splice(o+1,0,["exit",e[r][1],n]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,n]),e}function eN(e,n,t){const r=this;let i;return o;function o(c){let u=r.events.length,p;for(;u--;)if(r.events[u][1].type!=="lineEnding"&&r.events[u][1].type!=="linePrefix"&&r.events[u][1].type!=="content"){p=r.events[u][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=c,s(c)):t(c)}function s(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),ce(c)?me(e,l,"lineSuffix")(c):l(c))}function l(c){return c===null||Y(c)?(e.exit("setextHeadingLine"),n(c)):t(c)}}const nN={tokenize:tN};function tN(e){const n=this,t=e.attempt(xl,r,e.attempt(this.parser.constructs.flowInitial,i,me(e,e.attempt(this.parser.constructs.flow,i,e.attempt(aT,i)),"linePrefix")));return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const rN={resolveAll:Tb()},iN=Ab("string"),oN=Ab("text");function Ab(e){return{resolveAll:Tb(e==="text"?sN:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],o=t.attempt(i,s,a);return s;function s(u){return c(u)?o(u):a(u)}function a(u){if(u===null){t.consume(u);return}return t.enter("data"),t.consume(u),l}function l(u){return c(u)?(t.exit("data"),o(u)):(t.consume(u),l)}function c(u){if(u===null)return!0;const p=i[u];let f=-1;if(p)for(;++f<p.length;){const d=p[f];if(!d.previous||d.previous.call(r,r.previous))return!0}return!1}}}function Tb(e){return n;function n(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(t,r):t}}function sN(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let o=i.length,s=-1,a=0,l;for(;o--;){const c=i[o];if(typeof c=="string"){for(s=c.length;c.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(c===-2)l=!0,a++;else if(c!==-1){o++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(a=0),a){const c={type:t===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(t,0,["enter",c,n],["exit",c,n]),t+=2)}t++}return e}const aN={42:nn,43:nn,45:nn,48:nn,49:nn,50:nn,51:nn,52:nn,53:nn,54:nn,55:nn,56:nn,57:nn,62:xb},lN={91:pT},cN={[-2]:cc,[-1]:cc,32:cc},uN={35:vT,42:ta,45:[Th,ta],60:kT,61:Th,95:ta,96:Eh,126:Eh},dN={38:kb,92:wb},pN={[-5]:uc,[-4]:uc,[-3]:uc,33:HT,38:kb,42:Ou,60:[WA,NT],91:WT,92:[gT,wb],93:ip,95:Ou,96:nT},fN={null:[Ou,rN]},hN={null:[42,95]},mN={null:[]},gN=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:hN,contentInitial:lN,disable:mN,document:aN,flow:uN,flowInitial:cN,insideSpan:fN,string:dN,text:pN},Symbol.toStringTag,{value:"Module"}));function yN(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let s=[],a=[];const l={attempt:A(E),check:A(P),consume:g,enter:y,exit:C,interrupt:A(P,{interrupt:!0})},c={code:null,containerState:{},defineSkip:m,events:[],now:v,parser:e,previous:null,sliceSerialize:f,sliceStream:d,write:p};let u=n.tokenize.call(c,l);return n.resolveAll&&o.push(n),c;function p(F){return s=Rn(s,F),b(),s[s.length-1]!==null?[]:(R(n,0),c.events=rp(o,c.events,c),c.events)}function f(F,I){return bN(d(F),I)}function d(F){return vN(s,F)}function v(){const{_bufferIndex:F,_index:I,line:V,column:z,offset:W}=r;return{_bufferIndex:F,_index:I,line:V,column:z,offset:W}}function m(F){i[F.line]=F.column,O()}function b(){let F;for(;r._index<s.length;){const I=s[r._index];if(typeof I=="string")for(F=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===F&&r._bufferIndex<I.length;)h(I.charCodeAt(r._bufferIndex));else h(I)}}function h(F){u=u(F)}function g(F){Y(F)?(r.line++,r.column=1,r.offset+=F===-3?2:1,O()):F!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=F}function y(F,I){const V=I||{};return V.type=F,V.start=v(),c.events.push(["enter",V,c]),a.push(V),V}function C(F){const I=a.pop();return I.end=v(),c.events.push(["exit",I,c]),I}function E(F,I){R(F,I.from)}function P(F,I){I.restore()}function A(F,I){return V;function V(z,W,G){let $,N,M,x;return Array.isArray(z)?q(z):"tokenize"in z?q([z]):K(z);function K(oe){return ie;function ie(qe){const $e=qe!==null&&oe[qe],en=qe!==null&&oe.null,fn=[...Array.isArray($e)?$e:$e?[$e]:[],...Array.isArray(en)?en:en?[en]:[]];return q(fn)(qe)}}function q(oe){return $=oe,N=0,oe.length===0?G:S(oe[N])}function S(oe){return ie;function ie(qe){return x=L(),M=oe,oe.partial||(c.currentConstruct=oe),oe.name&&c.parser.constructs.disable.null.includes(oe.name)?de():oe.tokenize.call(I?Object.assign(Object.create(c),I):c,l,Q,de)(qe)}}function Q(oe){return F(M,x),W}function de(oe){return x.restore(),++N<$.length?S($[N]):G}}}function R(F,I){F.resolveAll&&!o.includes(F)&&o.push(F),F.resolve&&ht(c.events,I,c.events.length-I,F.resolve(c.events.slice(I),c)),F.resolveTo&&(c.events=F.resolveTo(c.events,c))}function L(){const F=v(),I=c.previous,V=c.currentConstruct,z=c.events.length,W=Array.from(a);return{from:z,restore:G};function G(){r=F,c.previous=I,c.currentConstruct=V,c.events.length=z,a=W,O()}}function O(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function vN(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,o=n.end._bufferIndex;let s;if(t===i)s=[e[t].slice(r,o)];else{if(s=e.slice(t,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function bN(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const o=e[t];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=n?" ":"	";break}case-1:{if(!n&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function xN(e){const r={constructs:AA([gN,...(e||{}).extensions||[]]),content:i(LA),defined:[],document:i(zA),flow:i(nN),lazy:{},string:i(iN),text:i(oN)};return r;function i(o){return s;function s(a){return yN(r,o,a)}}}function wN(e){for(;!Sb(e););return e}const Nh=/[\0\t\n\r]/g;function kN(){let e=1,n="",t=!0,r;return i;function i(o,s,a){const l=[];let c,u,p,f,d;for(o=n+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),p=0,n="",t&&(o.charCodeAt(0)===65279&&p++,t=void 0);p<o.length;){if(Nh.lastIndex=p,c=Nh.exec(o),f=c&&c.index!==void 0?c.index:o.length,d=o.charCodeAt(f),!c){n=o.slice(p);break}if(d===10&&p===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),p<f&&(l.push(o.slice(p,f)),e+=f-p),d){case 0:{l.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,l.push(-2);e++<u;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return a&&(r&&l.push(-5),n&&l.push(n),l.push(null)),l}}const SN=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function CN(e){return e.replace(SN,PN)}function PN(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return bb(t.slice(o?2:1),o?16:10)}return tp(t)||e}const Nb={}.hasOwnProperty;function EN(e,n,t){return typeof n!="string"&&(t=n,n=void 0),AN(t)(wN(xN(t).document().write(kN()(e,n,!0))))}function AN(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(yt),autolinkProtocol:L,autolinkEmail:L,atxHeading:o(Jr),blockQuote:o(en),characterEscape:L,characterReference:L,codeFenced:o(fn),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(fn,s),codeText:o(Ot,s),codeTextData:L,data:L,codeFlowValue:L,definition:o(Zn),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(Xr),hardBreakEscape:o(Sr),hardBreakTrailing:o(Sr),htmlFlow:o(Zr,s),htmlFlowData:L,htmlText:o(Zr,s),htmlTextData:L,image:o(Cr),label:s,link:o(yt),listItem:o(Pr),listItemValue:f,listOrdered:o(Zi,p),listUnordered:o(Zi),paragraph:o(hs),reference:S,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Jr),strong:o(vt),thematicBreak:o(Cl)},exit:{atxHeading:l(),atxHeadingSequence:E,autolink:l(),autolinkEmail:$e,autolinkProtocol:qe,blockQuote:l(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:de,characterReferenceMarkerNumeric:de,characterReferenceValue:oe,characterReference:ie,codeFenced:l(b),codeFencedFence:m,codeFencedFenceInfo:d,codeFencedFenceMeta:v,codeFlowValue:O,codeIndented:l(h),codeText:l(W),codeTextData:O,data:O,definition:l(),definitionDestinationString:C,definitionLabelString:g,definitionTitleString:y,emphasis:l(),hardBreakEscape:l(I),hardBreakTrailing:l(I),htmlFlow:l(V),htmlFlowData:O,htmlText:l(z),htmlTextData:O,image:l($),label:M,labelText:N,lineEnding:F,link:l(G),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Q,resourceDestinationString:x,resourceTitleString:K,resource:q,setextHeading:l(R),setextHeadingLineSequence:A,setextHeadingText:P,strong:l(),thematicBreak:l()}};Rb(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(T){let H={type:"root",children:[]};const X={stack:[H],tokenStack:[],config:n,enter:a,exit:c,buffer:s,resume:u,data:t},te=[];let ae=-1;for(;++ae<T.length;)if(T[ae][1].type==="listOrdered"||T[ae][1].type==="listUnordered")if(T[ae][0]==="enter")te.push(ae);else{const hn=te.pop();ae=i(T,hn,ae)}for(ae=-1;++ae<T.length;){const hn=n[T[ae][0]];Nb.call(hn,T[ae][1].type)&&hn[T[ae][1].type].call(Object.assign({sliceSerialize:T[ae][2].sliceSerialize},X),T[ae][1])}if(X.tokenStack.length>0){const hn=X.tokenStack[X.tokenStack.length-1];(hn[1]||Rh).call(X,void 0,hn[0])}for(H.position={start:Ut(T.length>0?T[0][1].start:{line:1,column:1,offset:0}),end:Ut(T.length>0?T[T.length-2][1].end:{line:1,column:1,offset:0})},ae=-1;++ae<n.transforms.length;)H=n.transforms[ae](H)||H;return H}function i(T,H,X){let te=H-1,ae=-1,hn=!1,et,mn,En,Lt;for(;++te<=X;){const Te=T[te];switch(Te[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Te[0]==="enter"?ae++:ae--,Lt=void 0;break}case"lineEndingBlank":{Te[0]==="enter"&&(et&&!Lt&&!ae&&!En&&(En=te),Lt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Lt=void 0}if(!ae&&Te[0]==="enter"&&Te[1].type==="listItemPrefix"||ae===-1&&Te[0]==="exit"&&(Te[1].type==="listUnordered"||Te[1].type==="listOrdered")){if(et){let Ft=te;for(mn=void 0;Ft--;){const Ln=T[Ft];if(Ln[1].type==="lineEnding"||Ln[1].type==="lineEndingBlank"){if(Ln[0]==="exit")continue;mn&&(T[mn][1].type="lineEndingBlank",hn=!0),Ln[1].type="lineEnding",mn=Ft}else if(!(Ln[1].type==="linePrefix"||Ln[1].type==="blockQuotePrefix"||Ln[1].type==="blockQuotePrefixWhitespace"||Ln[1].type==="blockQuoteMarker"||Ln[1].type==="listItemIndent"))break}En&&(!mn||En<mn)&&(et._spread=!0),et.end=Object.assign({},mn?T[mn][1].start:Te[1].end),T.splice(mn||te,0,["exit",et,Te[2]]),te++,X++}if(Te[1].type==="listItemPrefix"){const Ft={type:"listItem",_spread:!1,start:Object.assign({},Te[1].start),end:void 0};et=Ft,T.splice(te,0,["enter",Ft,Te[2]]),te++,X++,En=void 0,Lt=!0}}}return T[H][1]._spread=hn,X}function o(T,H){return X;function X(te){a.call(this,T(te),te),H&&H.call(this,te)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(T,H,X){this.stack[this.stack.length-1].children.push(T),this.stack.push(T),this.tokenStack.push([H,X||void 0]),T.position={start:Ut(H.start),end:void 0}}function l(T){return H;function H(X){T&&T.call(this,X),c.call(this,X)}}function c(T,H){const X=this.stack.pop(),te=this.tokenStack.pop();if(te)te[0].type!==T.type&&(H?H.call(this,T,te[0]):(te[1]||Rh).call(this,T,te[0]));else throw new Error("Cannot close `"+T.type+"` ("+Ao({start:T.start,end:T.end})+"): it’s not open");X.position.end=Ut(T.end)}function u(){return PA(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(T){if(this.data.expectingFirstListItemValue){const H=this.stack[this.stack.length-2];H.start=Number.parseInt(this.sliceSerialize(T),10),this.data.expectingFirstListItemValue=void 0}}function d(){const T=this.resume(),H=this.stack[this.stack.length-1];H.lang=T}function v(){const T=this.resume(),H=this.stack[this.stack.length-1];H.meta=T}function m(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){const T=this.resume(),H=this.stack[this.stack.length-1];H.value=T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const T=this.resume(),H=this.stack[this.stack.length-1];H.value=T.replace(/(\r?\n|\r)$/g,"")}function g(T){const H=this.resume(),X=this.stack[this.stack.length-1];X.label=H,X.identifier=Ci(this.sliceSerialize(T)).toLowerCase()}function y(){const T=this.resume(),H=this.stack[this.stack.length-1];H.title=T}function C(){const T=this.resume(),H=this.stack[this.stack.length-1];H.url=T}function E(T){const H=this.stack[this.stack.length-1];if(!H.depth){const X=this.sliceSerialize(T).length;H.depth=X}}function P(){this.data.setextHeadingSlurpLineEnding=!0}function A(T){const H=this.stack[this.stack.length-1];H.depth=this.sliceSerialize(T).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function L(T){const X=this.stack[this.stack.length-1].children;let te=X[X.length-1];(!te||te.type!=="text")&&(te=Sl(),te.position={start:Ut(T.start),end:void 0},X.push(te)),this.stack.push(te)}function O(T){const H=this.stack.pop();H.value+=this.sliceSerialize(T),H.position.end=Ut(T.end)}function F(T){const H=this.stack[this.stack.length-1];if(this.data.atHardBreak){const X=H.children[H.children.length-1];X.position.end=Ut(T.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(H.type)&&(L.call(this,T),O.call(this,T))}function I(){this.data.atHardBreak=!0}function V(){const T=this.resume(),H=this.stack[this.stack.length-1];H.value=T}function z(){const T=this.resume(),H=this.stack[this.stack.length-1];H.value=T}function W(){const T=this.resume(),H=this.stack[this.stack.length-1];H.value=T}function G(){const T=this.stack[this.stack.length-1];if(this.data.inReference){const H=this.data.referenceType||"shortcut";T.type+="Reference",T.referenceType=H,delete T.url,delete T.title}else delete T.identifier,delete T.label;this.data.referenceType=void 0}function $(){const T=this.stack[this.stack.length-1];if(this.data.inReference){const H=this.data.referenceType||"shortcut";T.type+="Reference",T.referenceType=H,delete T.url,delete T.title}else delete T.identifier,delete T.label;this.data.referenceType=void 0}function N(T){const H=this.sliceSerialize(T),X=this.stack[this.stack.length-2];X.label=CN(H),X.identifier=Ci(H).toLowerCase()}function M(){const T=this.stack[this.stack.length-1],H=this.resume(),X=this.stack[this.stack.length-1];if(this.data.inReference=!0,X.type==="link"){const te=T.children;X.children=te}else X.alt=H}function x(){const T=this.resume(),H=this.stack[this.stack.length-1];H.url=T}function K(){const T=this.resume(),H=this.stack[this.stack.length-1];H.title=T}function q(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function Q(T){const H=this.resume(),X=this.stack[this.stack.length-1];X.label=H,X.identifier=Ci(this.sliceSerialize(T)).toLowerCase(),this.data.referenceType="full"}function de(T){this.data.characterReferenceType=T.type}function oe(T){const H=this.sliceSerialize(T),X=this.data.characterReferenceType;let te;X?(te=bb(H,X==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):te=tp(H);const ae=this.stack[this.stack.length-1];ae.value+=te}function ie(T){const H=this.stack.pop();H.position.end=Ut(T.end)}function qe(T){O.call(this,T);const H=this.stack[this.stack.length-1];H.url=this.sliceSerialize(T)}function $e(T){O.call(this,T);const H=this.stack[this.stack.length-1];H.url="mailto:"+this.sliceSerialize(T)}function en(){return{type:"blockquote",children:[]}}function fn(){return{type:"code",lang:null,meta:null,value:""}}function Ot(){return{type:"inlineCode",value:""}}function Zn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Xr(){return{type:"emphasis",children:[]}}function Jr(){return{type:"heading",depth:0,children:[]}}function Sr(){return{type:"break"}}function Zr(){return{type:"html",value:""}}function Cr(){return{type:"image",title:null,url:"",alt:null}}function yt(){return{type:"link",title:null,url:"",children:[]}}function Zi(T){return{type:"list",ordered:T.type==="listOrdered",start:null,spread:T._spread,children:[]}}function Pr(T){return{type:"listItem",spread:T._spread,checked:null,children:[]}}function hs(){return{type:"paragraph",children:[]}}function vt(){return{type:"strong",children:[]}}function Sl(){return{type:"text",value:""}}function Cl(){return{type:"thematicBreak"}}}function Ut(e){return{line:e.line,column:e.column,offset:e.offset}}function Rb(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Rb(e,r):TN(e,r)}}function TN(e,n){let t;for(t in n)if(Nb.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Rh(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Ao({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Ao({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Ao({start:n.start,end:n.end})+") is still open")}function NN(e){const n=this;n.parser=t;function t(r){return EN(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function RN(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function IN(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function DN(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function MN(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function ON(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function LN(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=Ji(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(n,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(n,c),e.applyData(n,c)}function FN(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function zN(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Ib(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function _N(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Ib(e,n);const i={src:Ji(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,o),e.applyData(n,o)}function jN(e,n){const t={src:Ji(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function HN(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function BN(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Ib(e,n);const i={href:Ji(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function WN(e,n){const t={href:Ji(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function UN(e,n,t){const r=e.all(n),i=t?VN(t):Db(n),o={},s=[];if(typeof n.checked=="boolean"){const u=r[0];let p;u&&u.type==="element"&&u.tagName==="p"?p=u:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const u=r[a];(i||a!==0||u.type!=="element"||u.tagName!=="p")&&s.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!i?s.push(...u.children):s.push(u)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:s};return e.patch(n,c),e.applyData(n,c)}function VN(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=Db(t[r])}return n}function Db(e){const n=e.spread;return n??e.children.length>1}function GN(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,o),e.applyData(n,o)}function qN(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function $N(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function KN(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function QN(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],s),i.push(s)}if(t.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},a=Jd(n.children[1]),l=pb(n.children[n.children.length-1]);a&&l&&(s.position={start:a,end:l}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,o),e.applyData(n,o)}function YN(e,n,t){const r=t?t.children:void 0,o=(r?r.indexOf(n):1)===0?"th":"td",s=t&&t.type==="table"?t.align:void 0,a=s?s.length:n.children.length;let l=-1;const c=[];for(;++l<a;){const p=n.children[l],f={},d=s?s[l]:void 0;d&&(f.align=d);let v={type:"element",tagName:o,properties:f,children:[]};p&&(v.children=e.all(p),e.patch(p,v),v=e.applyData(p,v)),c.push(v)}const u={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(n,u),e.applyData(n,u)}function XN(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Ih=9,Dh=32;function JN(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const o=[];for(;r;)o.push(Mh(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return o.push(Mh(n.slice(i),i>0,!1)),o.join("")}function Mh(e,n,t){let r=0,i=e.length;if(n){let o=e.codePointAt(r);for(;o===Ih||o===Dh;)r++,o=e.codePointAt(r)}if(t){let o=e.codePointAt(i-1);for(;o===Ih||o===Dh;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function ZN(e,n){const t={type:"text",value:JN(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function eR(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const nR={blockquote:RN,break:IN,code:DN,delete:MN,emphasis:ON,footnoteReference:LN,heading:FN,html:zN,imageReference:_N,image:jN,inlineCode:HN,linkReference:BN,link:WN,listItem:UN,list:GN,paragraph:qN,root:$N,strong:KN,table:QN,tableCell:XN,tableRow:YN,text:ZN,thematicBreak:eR,toml:_s,yaml:_s,definition:_s,footnoteDefinition:_s};function _s(){}const Mb=-1,wl=0,No=1,Ba=2,op=3,sp=4,ap=5,lp=6,Ob=7,Lb=8,Oh=typeof self=="object"?self:globalThis,tR=(e,n)=>{const t=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=n[i];switch(o){case wl:case Mb:return t(s,i);case No:{const a=t([],i);for(const l of s)a.push(r(l));return a}case Ba:{const a=t({},i);for(const[l,c]of s)a[r(l)]=r(c);return a}case op:return t(new Date(s),i);case sp:{const{source:a,flags:l}=s;return t(new RegExp(a,l),i)}case ap:{const a=t(new Map,i);for(const[l,c]of s)a.set(r(l),r(c));return a}case lp:{const a=t(new Set,i);for(const l of s)a.add(r(l));return a}case Ob:{const{name:a,message:l}=s;return t(new Oh[a](l),i)}case Lb:return t(BigInt(s),i);case"BigInt":return t(Object(BigInt(s)),i);case"ArrayBuffer":return t(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return t(new DataView(a),s)}}return t(new Oh[o](s),i)};return r},Lh=e=>tR(new Map,e)(0),ni="",{toString:rR}={},{keys:iR}=Object,po=e=>{const n=typeof e;if(n!=="object"||!e)return[wl,n];const t=rR.call(e).slice(8,-1);switch(t){case"Array":return[No,ni];case"Object":return[Ba,ni];case"Date":return[op,ni];case"RegExp":return[sp,ni];case"Map":return[ap,ni];case"Set":return[lp,ni];case"DataView":return[No,t]}return t.includes("Array")?[No,t]:t.includes("Error")?[Ob,t]:[Ba,t]},js=([e,n])=>e===wl&&(n==="function"||n==="symbol"),oR=(e,n,t,r)=>{const i=(s,a)=>{const l=r.push(s)-1;return t.set(a,l),l},o=s=>{if(t.has(s))return t.get(s);let[a,l]=po(s);switch(a){case wl:{let u=s;switch(l){case"bigint":a=Lb,u=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);u=null;break;case"undefined":return i([Mb],s)}return i([a,u],s)}case No:{if(l){let f=s;return l==="DataView"?f=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(s)),i([l,[...f]],s)}const u=[],p=i([a,u],s);for(const f of s)u.push(o(f));return p}case Ba:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(n&&"toJSON"in s)return o(s.toJSON());const u=[],p=i([a,u],s);for(const f of iR(s))(e||!js(po(s[f])))&&u.push([o(f),o(s[f])]);return p}case op:return i([a,s.toISOString()],s);case sp:{const{source:u,flags:p}=s;return i([a,{source:u,flags:p}],s)}case ap:{const u=[],p=i([a,u],s);for(const[f,d]of s)(e||!(js(po(f))||js(po(d))))&&u.push([o(f),o(d)]);return p}case lp:{const u=[],p=i([a,u],s);for(const f of s)(e||!js(po(f)))&&u.push(o(f));return p}}const{message:c}=s;return i([a,{name:l,message:c}],s)};return o},Fh=(e,{json:n,lossy:t}={})=>{const r=[];return oR(!(n||t),!!n,new Map,r)(e),r},Wa=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Lh(Fh(e,n)):structuredClone(e):(e,n)=>Lh(Fh(e,n));function sR(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function aR(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function lR(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||sR,r=e.options.footnoteBackLabel||aR,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[l]);if(!c)continue;const u=e.all(c),p=String(c.identifier).toUpperCase(),f=Ji(p.toLowerCase());let d=0;const v=[],m=e.footnoteCounts.get(p);for(;m!==void 0&&++d<=m;){v.length>0&&v.push({type:"text",value:" "});let g=typeof t=="string"?t:t(l,d);typeof g=="string"&&(g={type:"text",value:g}),v.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+f+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,d),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const b=u[u.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const g=b.children[b.children.length-1];g&&g.type==="text"?g.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...v)}else u.push(...v);const h={type:"element",tagName:"li",properties:{id:n+"fn-"+f},children:e.wrap(u,!0)};e.patch(c,h),a.push(h)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Wa(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Fb=function(e){if(e==null)return pR;if(typeof e=="function")return kl(e);if(typeof e=="object")return Array.isArray(e)?cR(e):uR(e);if(typeof e=="string")return dR(e);throw new Error("Expected function, string, or object as test")};function cR(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Fb(e[t]);return kl(r);function r(...i){let o=-1;for(;++o<n.length;)if(n[o].apply(this,i))return!0;return!1}}function uR(e){const n=e;return kl(t);function t(r){const i=r;let o;for(o in e)if(i[o]!==n[o])return!1;return!0}}function dR(e){return kl(n);function n(t){return t&&t.type===e}}function kl(e){return n;function n(t,r,i){return!!(fR(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function pR(){return!0}function fR(e){return e!==null&&typeof e=="object"&&"type"in e}const zb=[],hR=!0,zh=!1,mR="skip";function gR(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const o=Fb(i),s=r?-1:1;a(e,void 0,[])();function a(l,c,u){const p=l&&typeof l=="object"?l:{};if(typeof p.type=="string"){const d=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(d?"<"+d+">":""))+")"})}return f;function f(){let d=zb,v,m,b;if((!n||o(l,c,u[u.length-1]||void 0))&&(d=yR(t(l,u)),d[0]===zh))return d;if("children"in l&&l.children){const h=l;if(h.children&&d[0]!==mR)for(m=(r?h.children.length:-1)+s,b=u.concat(h);m>-1&&m<h.children.length;){const g=h.children[m];if(v=a(g,m,b)(),v[0]===zh)return v;m=typeof v[1]=="number"?v[1]:m+s}}return d}}}function yR(e){return Array.isArray(e)?e:typeof e=="number"?[hR,e]:e==null?zb:[e]}function _b(e,n,t,r){let i,o,s;typeof n=="function"&&typeof t!="function"?(o=void 0,s=n,i=t):(o=n,s=t,i=r),gR(e,o,a,i);function a(l,c){const u=c[c.length-1],p=u?u.children.indexOf(l):void 0;return s(l,p,u)}}const Lu={}.hasOwnProperty,vR={};function bR(e,n){const t=n||vR,r=new Map,i=new Map,o=new Map,s={...nR,...t.handlers},a={all:c,applyData:wR,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:t,patch:xR,wrap:SR};return _b(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const p=u.type==="definition"?r:i,f=String(u.identifier).toUpperCase();p.has(f)||p.set(f,u)}}),a;function l(u,p){const f=u.type,d=a.handlers[f];if(Lu.call(a.handlers,f)&&d)return d(a,u,p);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in u){const{children:m,...b}=u,h=Wa(b);return h.children=a.all(u),h}return Wa(u)}return(a.options.unknownHandler||kR)(a,u,p)}function c(u){const p=[];if("children"in u){const f=u.children;let d=-1;for(;++d<f.length;){const v=a.one(f[d],u);if(v){if(d&&f[d-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=_h(v.value)),!Array.isArray(v)&&v.type==="element")){const m=v.children[0];m&&m.type==="text"&&(m.value=_h(m.value))}Array.isArray(v)?p.push(...v):p.push(v)}}}return p}}function xR(e,n){e.position&&(n.position=rA(e))}function wR(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const s="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:s}}t.type==="element"&&o&&Object.assign(t.properties,Wa(o)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function kR(e,n){const t=n.data||{},r="value"in n&&!(Lu.call(t,"hProperties")||Lu.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function SR(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function _h(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function jh(e,n){const t=bR(e,n),r=t.one(e,void 0),i=lR(t),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function CR(e,n){return e&&"run"in e?async function(t,r){const i=jh(t,{file:r,...n});await e.run(i,r)}:function(t,r){return jh(t,{file:r,...e||n})}}function Hh(e){if(e)throw e}var ra=Object.prototype.hasOwnProperty,jb=Object.prototype.toString,Bh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Uh=function(n){return typeof Array.isArray=="function"?Array.isArray(n):jb.call(n)==="[object Array]"},Vh=function(n){if(!n||jb.call(n)!=="[object Object]")return!1;var t=ra.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&ra.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||ra.call(n,i)},Gh=function(n,t){Bh&&t.name==="__proto__"?Bh(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},qh=function(n,t){if(t==="__proto__")if(ra.call(n,t)){if(Wh)return Wh(n,t).value}else return;return n[t]},PR=function e(){var n,t,r,i,o,s,a=arguments[0],l=1,c=arguments.length,u=!1;for(typeof a=="boolean"&&(u=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<c;++l)if(n=arguments[l],n!=null)for(t in n)r=qh(a,t),i=qh(n,t),a!==i&&(u&&i&&(Vh(i)||(o=Uh(i)))?(o?(o=!1,s=r&&Uh(r)?r:[]):s=r&&Vh(r)?r:{},Gh(a,{name:t,newValue:e(u,s,i)})):typeof i<"u"&&Gh(a,{name:t,newValue:i}));return a};const dc=Ua(PR);function Fu(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ER(){const e=[],n={run:t,use:r};return n;function t(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(l,...c){const u=e[++o];let p=-1;if(l){s(l);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,u?AR(u,a)(...c):s(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function AR(e,n){let t;return r;function r(...s){const a=e.length>s.length;let l;a&&s.push(i);try{l=e.apply(this,s)}catch(c){const u=c;if(a&&t)throw u;return i(u)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(s,...a){t||(t=!0,n(s,...a))}function o(s){i(null,s)}}const rt={basename:TR,dirname:NR,extname:RR,join:IR,sep:"/"};function TR(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');fs(e);let t=0,r=-1,i=e.length,o;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let s=-1,a=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===n.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return t===r?r=s:r<0&&(r=e.length),e.slice(t,r)}function NR(e){if(fs(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function RR(e){fs(e);let n=e.length,t=-1,r=0,i=-1,o=0,s;for(;n--;){const a=e.codePointAt(n);if(a===47){if(s){r=n+1;break}continue}t<0&&(s=!0,t=n+1),a===46?i<0?i=n:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function IR(...e){let n=-1,t;for(;++n<e.length;)fs(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":DR(t)}function DR(e){fs(e);const n=e.codePointAt(0)===47;let t=MR(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function MR(e,n){let t="",r=0,i=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=s,o=0;continue}}else if(t.length>0){t="",r=0,i=s,o=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,s):t=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return t}function fs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const OR={cwd:LR};function LR(){return"/"}function zu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function FR(e){if(typeof e=="string")e=new URL(e);else if(!zu(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return zR(e)}function zR(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const pc=["history","path","basename","stem","extname","dirname"];class Hb{constructor(n){let t;n?zu(n)?t={path:n}:typeof n=="string"||_R(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":OR.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<pc.length;){const o=pc[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)pc.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?rt.basename(this.path):void 0}set basename(n){hc(n,"basename"),fc(n,"basename"),this.path=rt.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?rt.dirname(this.path):void 0}set dirname(n){$h(this.basename,"dirname"),this.path=rt.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?rt.extname(this.path):void 0}set extname(n){if(fc(n,"extname"),$h(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=rt.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){zu(n)&&(n=FR(n)),hc(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?rt.basename(this.path,this.extname):void 0}set stem(n){hc(n,"stem"),fc(n,"stem"),this.path=rt.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Ge(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function fc(e,n){if(e&&e.includes(rt.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+rt.sep+"`")}function hc(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function $h(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function _R(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const jR=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},HR={}.hasOwnProperty;class cp extends jR{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ER()}copy(){const n=new cp;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(dc(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(yc("data",this.frozen),this.namespace[n]=t,this):HR.call(this.namespace,n)&&this.namespace[n]||void 0:n?(yc("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Hs(n),r=this.parser||this.Parser;return mc("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),mc("process",this.parser||this.Parser),gc("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,s){const a=Hs(n),l=r.parse(a);r.run(l,a,function(u,p,f){if(u||!p||!f)return c(u);const d=p,v=r.stringify(d,f);UR(v)?f.value=v:f.result=v,c(u,f)});function c(u,p){u||!p?s(u):o?o(p):t(void 0,p)}}}processSync(n){let t=!1,r;return this.freeze(),mc("processSync",this.parser||this.Parser),gc("processSync",this.compiler||this.Compiler),this.process(n,i),Qh("processSync","process",t),r;function i(o,s){t=!0,Hh(o),r=s}}run(n,t,r){Kh(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const l=Hs(t);i.run(n,l,c);function c(u,p,f){const d=p||n;u?a(u):s?s(d):r(void 0,d,f)}}}runSync(n,t){let r=!1,i;return this.run(n,t,o),Qh("runSync","run",r),i;function o(s,a){Hh(s),i=a,r=!0}}stringify(n,t){this.freeze();const r=Hs(t),i=this.compiler||this.Compiler;return gc("stringify",i),Kh(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(yc("use",this.frozen),n!=null)if(typeof n=="function")l(n,t);else if(typeof n=="object")Array.isArray(n)?a(n):s(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function o(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[u,...p]=c;l(u,p)}else s(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function s(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=dc(!0,i.settings,c.settings))}function a(c){let u=-1;if(c!=null)if(Array.isArray(c))for(;++u<c.length;){const p=c[u];o(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,u){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===c){f=p;break}if(f===-1)r.push([c,...u]);else if(u.length>0){let[d,...v]=u;const m=r[f][1];Fu(m)&&Fu(d)&&(d=dc(!0,m,d)),r[f]=[c,d,...v]}}}}const BR=new cp().freeze();function mc(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function gc(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function yc(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Kh(e){if(!Fu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Qh(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Hs(e){return WR(e)?e:new Hb(e)}function WR(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function UR(e){return typeof e=="string"||VR(e)}function VR(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const GR="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Yh=[],Xh={allowDangerousHtml:!0},qR=/^(https?|ircs?|mailto|xmpp)$/i,$R=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function KR(e){const n=QR(e),t=YR(e);return XR(n.runSync(n.parse(t),t),e)}function QR(e){const n=e.rehypePlugins||Yh,t=e.remarkPlugins||Yh,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Xh}:Xh;return BR().use(NN).use(t).use(CR,r).use(n)}function YR(e){const n=e.children||"",t=new Hb;return typeof n=="string"&&(t.value=n),t}function XR(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,o=n.disallowedElements,s=n.skipHtml,a=n.unwrapDisallowed,l=n.urlTransform||JR;for(const u of $R)Object.hasOwn(n,u.from)&&(""+u.from+(u.to?"use `"+u.to+"` instead":"remove it")+GR+u.id,void 0);return _b(e,c),lA(e,{Fragment:k.Fragment,components:i,ignoreInvalidStyle:!0,jsx:k.jsx,jsxs:k.jsxs,passKeys:!0,passNode:!0});function c(u,p,f){if(u.type==="raw"&&f&&typeof p=="number")return s?f.children.splice(p,1):f.children[p]={type:"text",value:u.value},p;if(u.type==="element"){let d;for(d in lc)if(Object.hasOwn(lc,d)&&Object.hasOwn(u.properties,d)){const v=u.properties[d],m=lc[d];(m===null||m.includes(u.tagName))&&(u.properties[d]=l(String(v||""),d,u))}}if(u.type==="element"){let d=t?!t.includes(u.tagName):o?o.includes(u.tagName):!1;if(!d&&r&&typeof p=="number"&&(d=!r(u,p,f)),d&&f&&typeof p=="number")return a&&u.children?f.children.splice(p,1,...u.children):f.children.splice(p,1),p}}}function JR(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||qR.test(e.slice(0,n))?e:""}const ZR=()=>{const[e,n]=w.useState("all"),[t,r]=w.useState(null),i=e==="all"?ah:ah.filter(s=>s.section===e),o=[{id:"all",label:"All"},{id:"chem",label:"Chem/Phys"},{id:"bio",label:"Bio/Biochem"},{id:"psych",label:"Psych/Soc"},{id:"cars",label:"CARS"}];return t?k.jsx(Zo,{children:k.jsxs("div",{className:"max-w-lg mx-auto",children:[k.jsxs("button",{onClick:()=>r(null),className:"flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4",children:[k.jsx(Na,{className:"h-4 w-4"}),"Back to summaries"]}),k.jsx("div",{className:"mb-4",children:k.jsx(Ha,{section:t.section})}),k.jsx("article",{className:"prose prose-sm prose-slate dark:prose-invert max-w-none",children:k.jsx(KR,{components:{h2:({children:s})=>k.jsx("h2",{className:"text-xl font-bold font-serif mt-0 mb-4",children:s}),h3:({children:s})=>k.jsx("h3",{className:"text-base font-semibold mt-6 mb-2",children:s}),p:({children:s})=>k.jsx("p",{className:"text-sm leading-relaxed mb-3",children:s}),ul:({children:s})=>k.jsx("ul",{className:"text-sm space-y-1 mb-4 list-disc pl-5",children:s}),ol:({children:s})=>k.jsx("ol",{className:"text-sm space-y-1 mb-4 list-decimal pl-5",children:s}),li:({children:s})=>k.jsx("li",{className:"leading-relaxed",children:s}),code:({children:s})=>k.jsx("code",{className:"text-xs bg-muted px-1.5 py-0.5 rounded font-mono",children:s}),pre:({children:s})=>k.jsx("pre",{className:"text-xs bg-muted p-3 rounded-lg overflow-x-auto mb-4",children:s}),table:({children:s})=>k.jsx("div",{className:"overflow-x-auto mb-4",children:k.jsx("table",{className:"text-sm w-full border-collapse",children:s})}),th:({children:s})=>k.jsx("th",{className:"text-left p-2 border-b border-border font-medium",children:s}),td:({children:s})=>k.jsx("td",{className:"p-2 border-b border-border",children:s}),strong:({children:s})=>k.jsx("strong",{className:"font-semibold",children:s})},children:t.content})})]})}):k.jsx(Zo,{title:"Quick Review",subtitle:"High-yield topic summaries",children:k.jsxs("div",{className:"max-w-lg mx-auto space-y-6",children:[k.jsx("div",{className:"flex flex-wrap gap-2",children:o.map(s=>k.jsx("button",{onClick:()=>n(s.id),className:`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${e===s.id?"border-primary bg-primary text-primary-foreground":"border-border hover:border-muted-foreground"}`,children:s.label},s.id))}),k.jsx("div",{className:"space-y-2",children:i.map(s=>k.jsxs("button",{onClick:()=>r(s),className:"w-full flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors text-left",children:[k.jsxs("div",{className:"flex-1 min-w-0",children:[k.jsx("div",{className:"flex items-center gap-2 mb-1",children:k.jsx(Ha,{section:s.section,className:"text-[10px] px-2 py-0"})}),k.jsx("h3",{className:"font-medium truncate",children:s.topic})]}),k.jsx(Ra,{className:"h-5 w-5 text-muted-foreground flex-shrink-0"})]},s.id))}),i.length===0&&k.jsx("p",{className:"text-center text-muted-foreground py-8",children:"No summaries found for this section."})]})})},e2=()=>{const e=Yi();return w.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),k.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:k.jsxs("div",{className:"text-center",children:[k.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),k.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),k.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},n2=new WC;function t2(){return k.jsx(VC,{client:n2,children:k.jsx(vC,{children:k.jsxs(BP,{basename:"/mcat-spark",children:[k.jsx(nk,{}),k.jsx(Mk,{}),k.jsxs(MP,{children:[k.jsx(ti,{path:"/",element:k.jsx(XP,{})}),k.jsx(ti,{path:"/flashcards",element:k.jsx(sE,{})}),k.jsx(ti,{path:"/questions",element:k.jsx(dE,{})}),k.jsx(ti,{path:"/summaries",element:k.jsx(ZR,{})}),k.jsx(ti,{path:"*",element:k.jsx(e2,{})})]})]})})})}xy(document.getElementById("root")).render(k.jsx(w.StrictMode,{children:k.jsx(t2,{})}));
