function Ax(e,n){for(var i=0;i<n.length;i++){const l=n[i];if(typeof l!="string"&&!Array.isArray(l)){for(const s in l)if(s!=="default"&&!(s in e)){const c=Object.getOwnPropertyDescriptor(l,s);c&&Object.defineProperty(e,s,c.get?c:{enumerable:!0,get:()=>l[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function B0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yd={exports:{}},xl={};var Hp;function Rx(){if(Hp)return xl;Hp=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(l,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var g in s)g!=="key"&&(c[g]=s[g])}else c=s;return s=c.ref,{$$typeof:e,type:l,key:f,ref:s!==void 0?s:null,props:c}}return xl.Fragment=n,xl.jsx=i,xl.jsxs=i,xl}var Up;function _x(){return Up||(Up=1,yd.exports=Rx()),yd.exports}var ie=_x(),vd={exports:{}},pe={};var Gp;function Nx(){if(Gp)return pe;Gp=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function v(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,O={};function _(w,B,Z){this.props=w,this.context=B,this.refs=O,this.updater=Z||C}_.prototype.isReactComponent={},_.prototype.setState=function(w,B){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,B,"setState")},_.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function F(){}F.prototype=_.prototype;function I(w,B,Z){this.props=w,this.context=B,this.refs=O,this.updater=Z||C}var N=I.prototype=new F;N.constructor=I,E(N,_.prototype),N.isPureReactComponent=!0;var P=Array.isArray,A={H:null,A:null,T:null,S:null,V:null},$=Object.prototype.hasOwnProperty;function Q(w,B,Z,X,oe,be){return Z=be.ref,{$$typeof:e,type:w,key:B,ref:Z!==void 0?Z:null,props:be}}function Y(w,B){return Q(w.type,B,void 0,void 0,void 0,w.props)}function J(w){return typeof w=="object"&&w!==null&&w.$$typeof===e}function K(w){var B={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Z){return B[Z]})}var de=/\/+/g;function te(w,B){return typeof w=="object"&&w!==null&&w.key!=null?K(""+w.key):B.toString(36)}function ke(){}function Ce(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ke,ke):(w.status="pending",w.then(function(B){w.status==="pending"&&(w.status="fulfilled",w.value=B)},function(B){w.status==="pending"&&(w.status="rejected",w.reason=B)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function re(w,B,Z,X,oe){var be=typeof w;(be==="undefined"||be==="boolean")&&(w=null);var me=!1;if(w===null)me=!0;else switch(be){case"bigint":case"string":case"number":me=!0;break;case"object":switch(w.$$typeof){case e:case n:me=!0;break;case y:return me=w._init,re(me(w._payload),B,Z,X,oe)}}if(me)return oe=oe(w),me=X===""?"."+te(w,0):X,P(oe)?(Z="",me!=null&&(Z=me.replace(de,"$&/")+"/"),re(oe,B,Z,"",function(W){return W})):oe!=null&&(J(oe)&&(oe=Y(oe,Z+(oe.key==null||w&&w.key===oe.key?"":(""+oe.key).replace(de,"$&/")+"/")+me)),B.push(oe)),1;me=0;var Et=X===""?".":X+":";if(P(w))for(var H=0;H<w.length;H++)X=w[H],be=Et+te(X,H),me+=re(X,B,Z,be,oe);else if(H=v(w),typeof H=="function")for(w=H.call(w),H=0;!(X=w.next()).done;)X=X.value,be=Et+te(X,H++),me+=re(X,B,Z,be,oe);else if(be==="object"){if(typeof w.then=="function")return re(Ce(w),B,Z,X,oe);throw B=String(w),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return me}function D(w,B,Z){if(w==null)return w;var X=[],oe=0;return re(w,X,"","",function(be){return B.call(Z,be,oe++)}),X}function G(w){if(w._status===-1){var B=w._result;B=B(),B.then(function(Z){(w._status===0||w._status===-1)&&(w._status=1,w._result=Z)},function(Z){(w._status===0||w._status===-1)&&(w._status=2,w._result=Z)}),w._status===-1&&(w._status=0,w._result=B)}if(w._status===1)return w._result.default;throw w._result}var ae=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ee(){}return pe.Children={map:D,forEach:function(w,B,Z){D(w,function(){B.apply(this,arguments)},Z)},count:function(w){var B=0;return D(w,function(){B++}),B},toArray:function(w){return D(w,function(B){return B})||[]},only:function(w){if(!J(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},pe.Component=_,pe.Fragment=i,pe.Profiler=s,pe.PureComponent=I,pe.StrictMode=l,pe.Suspense=h,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,pe.__COMPILER_RUNTIME={__proto__:null,c:function(w){return A.H.useMemoCache(w)}},pe.cache=function(w){return function(){return w.apply(null,arguments)}},pe.cloneElement=function(w,B,Z){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var X=E({},w.props),oe=w.key,be=void 0;if(B!=null)for(me in B.ref!==void 0&&(be=void 0),B.key!==void 0&&(oe=""+B.key),B)!$.call(B,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&B.ref===void 0||(X[me]=B[me]);var me=arguments.length-2;if(me===1)X.children=Z;else if(1<me){for(var Et=Array(me),H=0;H<me;H++)Et[H]=arguments[H+2];X.children=Et}return Q(w.type,oe,void 0,void 0,be,X)},pe.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},pe.createElement=function(w,B,Z){var X,oe={},be=null;if(B!=null)for(X in B.key!==void 0&&(be=""+B.key),B)$.call(B,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(oe[X]=B[X]);var me=arguments.length-2;if(me===1)oe.children=Z;else if(1<me){for(var Et=Array(me),H=0;H<me;H++)Et[H]=arguments[H+2];oe.children=Et}if(w&&w.defaultProps)for(X in me=w.defaultProps,me)oe[X]===void 0&&(oe[X]=me[X]);return Q(w,be,void 0,void 0,null,oe)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(w){return{$$typeof:g,render:w}},pe.isValidElement=J,pe.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:G}},pe.memo=function(w,B){return{$$typeof:p,type:w,compare:B===void 0?null:B}},pe.startTransition=function(w){var B=A.T,Z={};A.T=Z;try{var X=w(),oe=A.S;oe!==null&&oe(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ee,ae)}catch(be){ae(be)}finally{A.T=B}},pe.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},pe.use=function(w){return A.H.use(w)},pe.useActionState=function(w,B,Z){return A.H.useActionState(w,B,Z)},pe.useCallback=function(w,B){return A.H.useCallback(w,B)},pe.useContext=function(w){return A.H.useContext(w)},pe.useDebugValue=function(){},pe.useDeferredValue=function(w,B){return A.H.useDeferredValue(w,B)},pe.useEffect=function(w,B,Z){var X=A.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(w,B)},pe.useId=function(){return A.H.useId()},pe.useImperativeHandle=function(w,B,Z){return A.H.useImperativeHandle(w,B,Z)},pe.useInsertionEffect=function(w,B){return A.H.useInsertionEffect(w,B)},pe.useLayoutEffect=function(w,B){return A.H.useLayoutEffect(w,B)},pe.useMemo=function(w,B){return A.H.useMemo(w,B)},pe.useOptimistic=function(w,B){return A.H.useOptimistic(w,B)},pe.useReducer=function(w,B,Z){return A.H.useReducer(w,B,Z)},pe.useRef=function(w){return A.H.useRef(w)},pe.useState=function(w){return A.H.useState(w)},pe.useSyncExternalStore=function(w,B,Z){return A.H.useSyncExternalStore(w,B,Z)},pe.useTransition=function(){return A.H.useTransition()},pe.version="19.1.0",pe}var Wp;function mf(){return Wp||(Wp=1,vd.exports=Nx()),vd.exports}var Oe=mf();const zx=B0(Oe),$p=Ax({__proto__:null,default:zx},[Oe]);var xd={exports:{}},Sl={},Sd={exports:{}},wd={};var Yp;function Ix(){return Yp||(Yp=1,(function(e){function n(D,G){var ae=D.length;D.push(G);e:for(;0<ae;){var ee=ae-1>>>1,w=D[ee];if(0<s(w,G))D[ee]=G,D[ae]=w,ae=ee;else break e}}function i(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var G=D[0],ae=D.pop();if(ae!==G){D[0]=ae;e:for(var ee=0,w=D.length,B=w>>>1;ee<B;){var Z=2*(ee+1)-1,X=D[Z],oe=Z+1,be=D[oe];if(0>s(X,ae))oe<w&&0>s(be,X)?(D[ee]=be,D[oe]=ae,ee=oe):(D[ee]=X,D[Z]=ae,ee=Z);else if(oe<w&&0>s(be,ae))D[ee]=be,D[oe]=ae,ee=oe;else break e}}return G}function s(D,G){var ae=D.sortIndex-G.sortIndex;return ae!==0?ae:D.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();e.unstable_now=function(){return f.now()-g}}var h=[],p=[],y=1,x=null,v=3,C=!1,E=!1,O=!1,_=!1,F=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(D){for(var G=i(p);G!==null;){if(G.callback===null)l(p);else if(G.startTime<=D)l(p),G.sortIndex=G.expirationTime,n(h,G);else break;G=i(p)}}function A(D){if(O=!1,P(D),!E)if(i(h)!==null)E=!0,$||($=!0,te());else{var G=i(p);G!==null&&re(A,G.startTime-D)}}var $=!1,Q=-1,Y=5,J=-1;function K(){return _?!0:!(e.unstable_now()-J<Y)}function de(){if(_=!1,$){var D=e.unstable_now();J=D;var G=!0;try{e:{E=!1,O&&(O=!1,I(Q),Q=-1),C=!0;var ae=v;try{t:{for(P(D),x=i(h);x!==null&&!(x.expirationTime>D&&K());){var ee=x.callback;if(typeof ee=="function"){x.callback=null,v=x.priorityLevel;var w=ee(x.expirationTime<=D);if(D=e.unstable_now(),typeof w=="function"){x.callback=w,P(D),G=!0;break t}x===i(h)&&l(h),P(D)}else l(h);x=i(h)}if(x!==null)G=!0;else{var B=i(p);B!==null&&re(A,B.startTime-D),G=!1}}break e}finally{x=null,v=ae,C=!1}G=void 0}}finally{G?te():$=!1}}}var te;if(typeof N=="function")te=function(){N(de)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Ce=ke.port2;ke.port1.onmessage=de,te=function(){Ce.postMessage(null)}}else te=function(){F(de,0)};function re(D,G){Q=F(function(){D(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(D){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ae=v;v=G;try{return D()}finally{v=ae}},e.unstable_requestPaint=function(){_=!0},e.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ae=v;v=D;try{return G()}finally{v=ae}},e.unstable_scheduleCallback=function(D,G,ae){var ee=e.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ee+ae:ee):ae=ee,D){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=ae+w,D={id:y++,callback:G,priorityLevel:D,startTime:ae,expirationTime:w,sortIndex:-1},ae>ee?(D.sortIndex=ae,n(p,D),i(h)===null&&D===i(p)&&(O?(I(Q),Q=-1):O=!0,re(A,ae-ee))):(D.sortIndex=w,n(h,D),E||C||(E=!0,$||($=!0,te()))),D},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(D){var G=v;return function(){var ae=v;v=G;try{return D.apply(this,arguments)}finally{v=ae}}}})(wd)),wd}var Kp;function Vx(){return Kp||(Kp=1,Sd.exports=Ix()),Sd.exports}var Cd={exports:{}},wt={};var Xp;function qx(){if(Xp)return wt;Xp=1;var e=mf();function n(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(h,p,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:x==null?null:""+x,children:h,containerInfo:p,implementation:y}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,wt.createPortal=function(h,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return c(h,p,null,y)},wt.flushSync=function(h){var p=f.T,y=l.p;try{if(f.T=null,l.p=2,h)return h()}finally{f.T=p,l.p=y,l.d.f()}},wt.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,l.d.C(h,p))},wt.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},wt.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var y=p.as,x=g(y,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?l.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:C}):y==="script"&&l.d.X(h,{crossOrigin:x,integrity:v,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wt.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=g(p.as,p.crossOrigin);l.d.M(h,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&l.d.M(h)},wt.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,x=g(y,p.crossOrigin);l.d.L(h,y,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wt.preloadModule=function(h,p){if(typeof h=="string")if(p){var y=g(p.as,p.crossOrigin);l.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else l.d.m(h)},wt.requestFormReset=function(h){l.d.r(h)},wt.unstable_batchedUpdates=function(h,p){return h(p)},wt.useFormState=function(h,p,y){return f.H.useFormState(h,p,y)},wt.useFormStatus=function(){return f.H.useHostTransitionStatus()},wt.version="19.1.0",wt}var Zp;function Fx(){if(Zp)return Cd.exports;Zp=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Cd.exports=qx(),Cd.exports}var Qp;function Dx(){if(Qp)return Sl;Qp=1;var e=Vx(),n=mf(),i=Fx();function l(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var a=t,o=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(o=a.return),t=a.return;while(t)}return a.tag===3?o:null}function f(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(l(188))}function h(t){var a=t.alternate;if(!a){if(a=c(t),a===null)throw Error(l(188));return a!==t?null:t}for(var o=t,r=a;;){var u=o.return;if(u===null)break;var d=u.alternate;if(d===null){if(r=u.return,r!==null){o=r;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===o)return g(u),t;if(d===r)return g(u),a;d=d.sibling}throw Error(l(188))}if(o.return!==r.return)o=u,r=d;else{for(var m=!1,b=u.child;b;){if(b===o){m=!0,o=u,r=d;break}if(b===r){m=!0,r=u,o=d;break}b=b.sibling}if(!m){for(b=d.child;b;){if(b===o){m=!0,o=d,r=u;break}if(b===r){m=!0,r=d,o=u;break}b=b.sibling}if(!m)throw Error(l(189))}}if(o.alternate!==r)throw Error(l(190))}if(o.tag!==3)throw Error(l(188));return o.stateNode.current===o?t:a}function p(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=p(t),a!==null)return a;t=t.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=de&&t[de]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Symbol.for("react.client.reference");function Ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ke?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case _:return"Profiler";case O:return"StrictMode";case A:return"Suspense";case $:return"SuspenseList";case J:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case N:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case P:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return a=t.displayName||null,a!==null?a:Ce(t.type)||"Memo";case Y:a=t._payload,t=t._init;try{return Ce(t(a))}catch{}}return null}var re=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ee=[],w=-1;function B(t){return{current:t}}function Z(t){0>w||(t.current=ee[w],ee[w]=null,w--)}function X(t,a){w++,ee[w]=t.current,t.current=a}var oe=B(null),be=B(null),me=B(null),Et=B(null);function H(t,a){switch(X(me,a),X(be,t),X(oe,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?bp(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=bp(a),t=yp(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(oe),X(oe,t)}function W(){Z(oe),Z(be),Z(me)}function ve(t){t.memoizedState!==null&&X(Et,t);var a=oe.current,o=yp(a,t.type);a!==o&&(X(be,t),X(oe,o))}function ze(t){be.current===t&&(Z(oe),Z(be)),Et.current===t&&(Z(Et),hl._currentValue=ae)}var Ge=Object.prototype.hasOwnProperty,Ke=e.unstable_scheduleCallback,Ft=e.unstable_cancelCallback,di=e.unstable_shouldYield,So=e.unstable_requestPaint,Zt=e.unstable_now,lu=e.unstable_getCurrentPriorityLevel,wo=e.unstable_ImmediatePriority,$l=e.unstable_UserBlockingPriority,In=e.unstable_NormalPriority,Yl=e.unstable_LowPriority,fi=e.unstable_IdlePriority,c1=e.log,d1=e.unstable_setDisableYieldValue,Co=null,Dt=null;function Ja(t){if(typeof c1=="function"&&d1(t),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Co,t)}catch{}}var Mt=Math.clz32?Math.clz32:m1,f1=Math.log,g1=Math.LN2;function m1(t){return t>>>=0,t===0?32:31-(f1(t)/g1|0)|0}var Kl=256,Xl=4194304;function Vn(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zl(t,a,o){var r=t.pendingLanes;if(r===0)return 0;var u=0,d=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~d,r!==0?u=Vn(r):(m&=b,m!==0?u=Vn(m):o||(o=b&~t,o!==0&&(u=Vn(o))))):(b=r&~d,b!==0?u=Vn(b):m!==0?u=Vn(m):o||(o=r&~t,o!==0&&(u=Vn(o)))),u===0?0:a!==0&&a!==u&&(a&d)===0&&(d=u&-u,o=a&-a,d>=o||d===32&&(o&4194048)!==0)?a:u}function Eo(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function h1(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eg(){var t=Kl;return Kl<<=1,(Kl&4194048)===0&&(Kl=256),t}function tg(){var t=Xl;return Xl<<=1,(Xl&62914560)===0&&(Xl=4194304),t}function ru(t){for(var a=[],o=0;31>o;o++)a.push(t);return a}function Oo(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function p1(t,a,o,r,u,d){var m=t.pendingLanes;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=o,t.entangledLanes&=o,t.errorRecoveryDisabledLanes&=o,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,z=t.hiddenUpdates;for(o=m&~o;0<o;){var M=31-Mt(o),j=1<<M;b[M]=0,S[M]=-1;var V=z[M];if(V!==null)for(z[M]=null,M=0;M<V.length;M++){var q=V[M];q!==null&&(q.lane&=-536870913)}o&=~j}r!==0&&ag(t,r,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(m&~a))}function ag(t,a,o){t.pendingLanes|=a,t.suspendedLanes&=~a;var r=31-Mt(a);t.entangledLanes|=a,t.entanglements[r]=t.entanglements[r]|1073741824|o&4194090}function ng(t,a){var o=t.entangledLanes|=a;for(t=t.entanglements;o;){var r=31-Mt(o),u=1<<r;u&a|t[r]&a&&(t[r]|=a),o&=~u}}function su(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function uu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ig(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Dp(t.type))}function b1(t,a){var o=G.p;try{return G.p=t,a()}finally{G.p=o}}var en=Math.random().toString(36).slice(2),xt="__reactFiber$"+en,Tt="__reactProps$"+en,gi="__reactContainer$"+en,cu="__reactEvents$"+en,y1="__reactListeners$"+en,v1="__reactHandles$"+en,og="__reactResources$"+en,To="__reactMarker$"+en;function du(t){delete t[xt],delete t[Tt],delete t[cu],delete t[y1],delete t[v1]}function mi(t){var a=t[xt];if(a)return a;for(var o=t.parentNode;o;){if(a=o[gi]||o[xt]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(t=wp(t);t!==null;){if(o=t[xt])return o;t=wp(t)}return a}t=o,o=t.parentNode}return null}function hi(t){if(t=t[xt]||t[gi]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function ko(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(l(33))}function pi(t){var a=t[og];return a||(a=t[og]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function lt(t){t[To]=!0}var lg=new Set,rg={};function qn(t,a){bi(t,a),bi(t+"Capture",a)}function bi(t,a){for(rg[t]=a,t=0;t<a.length;t++)lg.add(a[t])}var x1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sg={},ug={};function S1(t){return Ge.call(ug,t)?!0:Ge.call(sg,t)?!1:x1.test(t)?ug[t]=!0:(sg[t]=!0,!1)}function Ql(t,a,o){if(S1(a))if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var r=a.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+o)}}function Jl(t,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+o)}}function Ia(t,a,o,r){if(r===null)t.removeAttribute(o);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttributeNS(a,o,""+r)}}var fu,cg;function yi(t){if(fu===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);fu=a&&a[1]||"",cg=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fu+t+cg}var gu=!1;function mu(t,a){if(!t||gu)return"";gu=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(a){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(q){var V=q}Reflect.construct(t,[],j)}else{try{j.call()}catch(q){V=q}t.call(j.prototype)}}else{try{throw Error()}catch(q){V=q}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(q){if(q&&V&&typeof q.stack=="string")return[q.stack,V.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=r.DetermineComponentFrameRoot(),m=d[0],b=d[1];if(m&&b){var S=m.split(`
`),z=b.split(`
`);for(u=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;u<z.length&&!z[u].includes("DetermineComponentFrameRoot");)u++;if(r===S.length||u===z.length)for(r=S.length-1,u=z.length-1;1<=r&&0<=u&&S[r]!==z[u];)u--;for(;1<=r&&0<=u;r--,u--)if(S[r]!==z[u]){if(r!==1||u!==1)do if(r--,u--,0>u||S[r]!==z[u]){var M=`
`+S[r].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=r&&0<=u);break}}}finally{gu=!1,Error.prepareStackTrace=o}return(o=t?t.displayName||t.name:"")?yi(o):""}function w1(t){switch(t.tag){case 26:case 27:case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 15:return mu(t.type,!1);case 11:return mu(t.type.render,!1);case 1:return mu(t.type,!0);case 31:return yi("Activity");default:return""}}function dg(t){try{var a="";do a+=w1(t),t=t.return;while(t);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fg(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function C1(t){var a=fg(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),r=""+t[a];if(!t.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return u.call(this)},set:function(m){r=""+m,d.call(this,m)}}),Object.defineProperty(t,a,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function er(t){t._valueTracker||(t._valueTracker=C1(t))}function gg(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var o=a.getValue(),r="";return t&&(r=fg(t)?t.checked?"true":"false":t.value),t=r,t!==o?(a.setValue(t),!0):!1}function tr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var E1=/[\n"\\]/g;function Jt(t){return t.replace(E1,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function hu(t,a,o,r,u,d,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),a!=null?m==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Qt(a)):t.value!==""+Qt(a)&&(t.value=""+Qt(a)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),a!=null?pu(t,m,Qt(a)):o!=null?pu(t,m,Qt(o)):r!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Qt(b):t.removeAttribute("name")}function mg(t,a,o,r,u,d,m,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),a!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||a!=null))return;o=o!=null?""+Qt(o):"",a=a!=null?""+Qt(a):o,b||a===t.value||(t.value=a),t.defaultValue=a}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m)}function pu(t,a,o){a==="number"&&tr(t.ownerDocument)===t||t.defaultValue===""+o||(t.defaultValue=""+o)}function vi(t,a,o,r){if(t=t.options,a){a={};for(var u=0;u<o.length;u++)a["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=a.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&r&&(t[o].defaultSelected=!0)}else{for(o=""+Qt(o),a=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}a!==null||t[u].disabled||(a=t[u])}a!==null&&(a.selected=!0)}}function hg(t,a,o){if(a!=null&&(a=""+Qt(a),a!==t.value&&(t.value=a),o==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=o!=null?""+Qt(o):""}function pg(t,a,o,r){if(a==null){if(r!=null){if(o!=null)throw Error(l(92));if(re(r)){if(1<r.length)throw Error(l(93));r=r[0]}o=r}o==null&&(o=""),a=o}o=Qt(a),t.defaultValue=o,r=t.textContent,r===o&&r!==""&&r!==null&&(t.value=r)}function xi(t,a){if(a){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=a;return}}t.textContent=a}var O1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bg(t,a,o){var r=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?r?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":r?t.setProperty(a,o):typeof o!="number"||o===0||O1.has(a)?a==="float"?t.cssFloat=o:t[a]=(""+o).trim():t[a]=o+"px"}function yg(t,a,o){if(a!=null&&typeof a!="object")throw Error(l(62));if(t=t.style,o!=null){for(var r in o)!o.hasOwnProperty(r)||a!=null&&a.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in a)r=a[u],a.hasOwnProperty(u)&&o[u]!==r&&bg(t,u,r)}else for(var d in a)a.hasOwnProperty(d)&&bg(t,d,a[d])}function bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var T1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ar(t){return k1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var yu=null;function vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Si=null,wi=null;function vg(t){var a=hi(t);if(a&&(t=a.stateNode)){var o=t[Tt]||null;e:switch(t=a.stateNode,a.type){case"input":if(hu(t,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Jt(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var r=o[a];if(r!==t&&r.form===t.form){var u=r[Tt]||null;if(!u)throw Error(l(90));hu(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(a=0;a<o.length;a++)r=o[a],r.form===t.form&&gg(r)}break e;case"textarea":hg(t,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&vi(t,!!o.multiple,a,!1)}}}var xu=!1;function xg(t,a,o){if(xu)return t(a,o);xu=!0;try{var r=t(a);return r}finally{if(xu=!1,(Si!==null||wi!==null)&&(Br(),Si&&(a=Si,t=wi,wi=Si=null,vg(a),t)))for(a=0;a<t.length;a++)vg(t[a])}}function Ao(t,a){var o=t.stateNode;if(o===null)return null;var r=o[Tt]||null;if(r===null)return null;o=r[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(l(231,a,typeof o));return o}var Va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Va)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Su=!1}var tn=null,wu=null,nr=null;function Sg(){if(nr)return nr;var t,a=wu,o=a.length,r,u="value"in tn?tn.value:tn.textContent,d=u.length;for(t=0;t<o&&a[t]===u[t];t++);var m=o-t;for(r=1;r<=m&&a[o-r]===u[d-r];r++);return nr=u.slice(t,1<r?1-r:void 0)}function ir(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function or(){return!0}function wg(){return!1}function kt(t){function a(o,r,u,d,m){this._reactName=o,this._targetInst=u,this.type=r,this.nativeEvent=d,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(o=t[b],this[b]=o?o(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?or:wg,this.isPropagationStopped=wg,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),a}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lr=kt(Fn),_o=y({},Fn,{view:0,detail:0}),A1=kt(_o),Cu,Eu,No,rr=y({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Cu=t.screenX-No.screenX,Eu=t.screenY-No.screenY):Eu=Cu=0,No=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Cg=kt(rr),R1=y({},rr,{dataTransfer:0}),_1=kt(R1),N1=y({},_o,{relatedTarget:0}),Ou=kt(N1),z1=y({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),I1=kt(z1),V1=y({},Fn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q1=kt(V1),F1=y({},Fn,{data:0}),Eg=kt(F1),D1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L1(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=P1[t])?!!a[t]:!1}function Tu(){return L1}var B1=y({},_o,{key:function(t){if(t.key){var a=D1[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=ir(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?ir(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ir(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j1=kt(B1),H1=y({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Og=kt(H1),U1=y({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),G1=kt(U1),W1=y({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=kt(W1),Y1=y({},rr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K1=kt(Y1),X1=y({},Fn,{newState:0,oldState:0}),Z1=kt(X1),Q1=[9,13,27,32],ku=Va&&"CompositionEvent"in window,zo=null;Va&&"documentMode"in document&&(zo=document.documentMode);var J1=Va&&"TextEvent"in window&&!zo,Tg=Va&&(!ku||zo&&8<zo&&11>=zo),kg=" ",Ag=!1;function Rg(t,a){switch(t){case"keyup":return Q1.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ci=!1;function e2(t,a){switch(t){case"compositionend":return _g(a);case"keypress":return a.which!==32?null:(Ag=!0,kg);case"textInput":return t=a.data,t===kg&&Ag?null:t;default:return null}}function t2(t,a){if(Ci)return t==="compositionend"||!ku&&Rg(t,a)?(t=Sg(),nr=wu=tn=null,Ci=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Tg&&a.locale!=="ko"?null:a.data;default:return null}}var a2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ng(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!a2[t.type]:a==="textarea"}function zg(t,a,o,r){Si?wi?wi.push(r):wi=[r]:Si=r,a=$r(a,"onChange"),0<a.length&&(o=new lr("onChange","change",null,o,r),t.push({event:o,listeners:a}))}var Io=null,Vo=null;function n2(t){fp(t,0)}function sr(t){var a=ko(t);if(gg(a))return t}function Ig(t,a){if(t==="change")return a}var Vg=!1;if(Va){var Au;if(Va){var Ru="oninput"in document;if(!Ru){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),Ru=typeof qg.oninput=="function"}Au=Ru}else Au=!1;Vg=Au&&(!document.documentMode||9<document.documentMode)}function Fg(){Io&&(Io.detachEvent("onpropertychange",Dg),Vo=Io=null)}function Dg(t){if(t.propertyName==="value"&&sr(Vo)){var a=[];zg(a,Vo,t,vu(t)),xg(n2,a)}}function i2(t,a,o){t==="focusin"?(Fg(),Io=a,Vo=o,Io.attachEvent("onpropertychange",Dg)):t==="focusout"&&Fg()}function o2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sr(Vo)}function l2(t,a){if(t==="click")return sr(a)}function r2(t,a){if(t==="input"||t==="change")return sr(a)}function s2(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Pt=typeof Object.is=="function"?Object.is:s2;function qo(t,a){if(Pt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var o=Object.keys(t),r=Object.keys(a);if(o.length!==r.length)return!1;for(r=0;r<o.length;r++){var u=o[r];if(!Ge.call(a,u)||!Pt(t[u],a[u]))return!1}return!0}function Mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pg(t,a){var o=Mg(t);t=0;for(var r;o;){if(o.nodeType===3){if(r=t+o.textContent.length,t<=a&&r>=a)return{node:o,offset:a-t};t=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Mg(o)}}function Lg(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Lg(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Bg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=tr(t.document);a instanceof t.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)t=a.contentWindow;else break;a=tr(t.document)}return a}function _u(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var u2=Va&&"documentMode"in document&&11>=document.documentMode,Ei=null,Nu=null,Fo=null,zu=!1;function jg(t,a,o){var r=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;zu||Ei==null||Ei!==tr(r)||(r=Ei,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&qo(Fo,r)||(Fo=r,r=$r(Nu,"onSelect"),0<r.length&&(a=new lr("onSelect","select",null,a,o),t.push({event:a,listeners:r}),a.target=Ei)))}function Dn(t,a){var o={};return o[t.toLowerCase()]=a.toLowerCase(),o["Webkit"+t]="webkit"+a,o["Moz"+t]="moz"+a,o}var Oi={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionrun:Dn("Transition","TransitionRun"),transitionstart:Dn("Transition","TransitionStart"),transitioncancel:Dn("Transition","TransitionCancel"),transitionend:Dn("Transition","TransitionEnd")},Iu={},Hg={};Va&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Mn(t){if(Iu[t])return Iu[t];if(!Oi[t])return t;var a=Oi[t],o;for(o in a)if(a.hasOwnProperty(o)&&o in Hg)return Iu[t]=a[o];return t}var Ug=Mn("animationend"),Gg=Mn("animationiteration"),Wg=Mn("animationstart"),c2=Mn("transitionrun"),d2=Mn("transitionstart"),f2=Mn("transitioncancel"),$g=Mn("transitionend"),Yg=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function ca(t,a){Yg.set(t,a),qn(a,[t])}var Kg=new WeakMap;function ea(t,a){if(typeof t=="object"&&t!==null){var o=Kg.get(t);return o!==void 0?o:(a={value:t,source:a,stack:dg(a)},Kg.set(t,a),a)}return{value:t,source:a,stack:dg(a)}}var ta=[],Ti=0,qu=0;function ur(){for(var t=Ti,a=qu=Ti=0;a<t;){var o=ta[a];ta[a++]=null;var r=ta[a];ta[a++]=null;var u=ta[a];ta[a++]=null;var d=ta[a];if(ta[a++]=null,r!==null&&u!==null){var m=r.pending;m===null?u.next=u:(u.next=m.next,m.next=u),r.pending=u}d!==0&&Xg(o,u,d)}}function cr(t,a,o,r){ta[Ti++]=t,ta[Ti++]=a,ta[Ti++]=o,ta[Ti++]=r,qu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Fu(t,a,o,r){return cr(t,a,o,r),dr(t)}function ki(t,a){return cr(t,null,null,a),dr(t)}function Xg(t,a,o){t.lanes|=o;var r=t.alternate;r!==null&&(r.lanes|=o);for(var u=!1,d=t.return;d!==null;)d.childLanes|=o,r=d.alternate,r!==null&&(r.childLanes|=o),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&a!==null&&(u=31-Mt(o),t=d.hiddenUpdates,r=t[u],r===null?t[u]=[a]:r.push(a),a.lane=o|536870912),d):null}function dr(t){if(50<rl)throw rl=0,jc=null,Error(l(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ai={};function g2(t,a,o,r){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,a,o,r){return new g2(t,a,o,r)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qa(t,a){var o=t.alternate;return o===null?(o=Lt(t.tag,a,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=a,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&65011712,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,a=t.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o.refCleanup=t.refCleanup,o}function Zg(t,a){t.flags&=65011714;var o=t.alternate;return o===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=o.childLanes,t.lanes=o.lanes,t.child=o.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=o.memoizedProps,t.memoizedState=o.memoizedState,t.updateQueue=o.updateQueue,t.type=o.type,a=o.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function fr(t,a,o,r,u,d){var m=0;if(r=t,typeof t=="function")Du(t)&&(m=1);else if(typeof t=="string")m=hx(t,o,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case J:return t=Lt(31,o,a,u),t.elementType=J,t.lanes=d,t;case E:return Pn(o.children,u,d,a);case O:m=8,u|=24;break;case _:return t=Lt(12,o,a,u|2),t.elementType=_,t.lanes=d,t;case A:return t=Lt(13,o,a,u),t.elementType=A,t.lanes=d,t;case $:return t=Lt(19,o,a,u),t.elementType=$,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:case N:m=10;break e;case I:m=9;break e;case P:m=11;break e;case Q:m=14;break e;case Y:m=16,r=null;break e}m=29,o=Error(l(130,t===null?"null":typeof t,"")),r=null}return a=Lt(m,o,a,u),a.elementType=t,a.type=r,a.lanes=d,a}function Pn(t,a,o,r){return t=Lt(7,t,r,a),t.lanes=o,t}function Mu(t,a,o){return t=Lt(6,t,null,a),t.lanes=o,t}function Pu(t,a,o){return a=Lt(4,t.children!==null?t.children:[],t.key,a),a.lanes=o,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Ri=[],_i=0,gr=null,mr=0,aa=[],na=0,Ln=null,Fa=1,Da="";function Bn(t,a){Ri[_i++]=mr,Ri[_i++]=gr,gr=t,mr=a}function Qg(t,a,o){aa[na++]=Fa,aa[na++]=Da,aa[na++]=Ln,Ln=t;var r=Fa;t=Da;var u=32-Mt(r)-1;r&=~(1<<u),o+=1;var d=32-Mt(a)+u;if(30<d){var m=u-u%5;d=(r&(1<<m)-1).toString(32),r>>=m,u-=m,Fa=1<<32-Mt(a)+u|o<<u|r,Da=d+t}else Fa=1<<d|o<<u|r,Da=t}function Lu(t){t.return!==null&&(Bn(t,1),Qg(t,1,0))}function Bu(t){for(;t===gr;)gr=Ri[--_i],Ri[_i]=null,mr=Ri[--_i],Ri[_i]=null;for(;t===Ln;)Ln=aa[--na],aa[na]=null,Da=aa[--na],aa[na]=null,Fa=aa[--na],aa[na]=null}var Ot=null,$e=null,Re=!1,jn=null,ya=!1,ju=Error(l(519));function Hn(t){var a=Error(l(418,""));throw Po(ea(a,t)),ju}function Jg(t){var a=t.stateNode,o=t.type,r=t.memoizedProps;switch(a[xt]=t,a[Tt]=r,o){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(o=0;o<ul.length;o++)we(ul[o],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":we("invalid",a),mg(a,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),er(a);break;case"select":we("invalid",a);break;case"textarea":we("invalid",a),pg(a,r.value,r.defaultValue,r.children),er(a)}o=r.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||r.suppressHydrationWarning===!0||pp(a.textContent,o)?(r.popover!=null&&(we("beforetoggle",a),we("toggle",a)),r.onScroll!=null&&we("scroll",a),r.onScrollEnd!=null&&we("scrollend",a),r.onClick!=null&&(a.onclick=Yr),a=!0):a=!1,a||Hn(t)}function em(t){for(Ot=t.return;Ot;)switch(Ot.tag){case 5:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:Ot=Ot.return}}function Do(t){if(t!==Ot)return!1;if(!Re)return em(t),Re=!0,!1;var a=t.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=t.type,o=!(o!=="form"&&o!=="button")||id(t.type,t.memoizedProps)),o=!o),o&&$e&&Hn(t),em(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(o=t.data,o==="/$"){if(a===0){$e=fa(t.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;t=t.nextSibling}$e=null}}else a===27?(a=$e,yn(t.type)?(t=sd,sd=null,$e=t):$e=a):$e=Ot?fa(t.stateNode.nextSibling):null;return!0}function Mo(){$e=Ot=null,Re=!1}function tm(){var t=jn;return t!==null&&(_t===null?_t=t:_t.push.apply(_t,t),jn=null),t}function Po(t){jn===null?jn=[t]:jn.push(t)}var Hu=B(null),Un=null,Ma=null;function an(t,a,o){X(Hu,a._currentValue),a._currentValue=o}function Pa(t){t._currentValue=Hu.current,Z(Hu)}function Uu(t,a,o){for(;t!==null;){var r=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,r!==null&&(r.childLanes|=a)):r!==null&&(r.childLanes&a)!==a&&(r.childLanes|=a),t===o)break;t=t.return}}function Gu(t,a,o,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var m=u.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=u;for(var S=0;S<a.length;S++)if(b.context===a[S]){d.lanes|=o,b=d.alternate,b!==null&&(b.lanes|=o),Uu(d.return,o,t),r||(m=null);break e}d=b.next}}else if(u.tag===18){if(m=u.return,m===null)throw Error(l(341));m.lanes|=o,d=m.alternate,d!==null&&(d.lanes|=o),Uu(m,o,t),m=null}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===t){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}}function Lo(t,a,o,r){t=null;for(var u=a,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var m=u.alternate;if(m===null)throw Error(l(387));if(m=m.memoizedProps,m!==null){var b=u.type;Pt(u.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(u===Et.current){if(m=u.alternate,m===null)throw Error(l(387));m.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(hl):t=[hl])}u=u.return}t!==null&&Gu(a,t,o,r),a.flags|=262144}function hr(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gn(t){Un=t,Ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function St(t){return am(Un,t)}function pr(t,a){return Un===null&&Gn(t),am(t,a)}function am(t,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Ma===null){if(t===null)throw Error(l(308));Ma=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Ma=Ma.next=a;return o}var m2=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(o,r){t.push(r)}};this.abort=function(){a.aborted=!0,t.forEach(function(o){return o()})}},h2=e.unstable_scheduleCallback,p2=e.unstable_NormalPriority,nt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new m2,data:new Map,refCount:0}}function Bo(t){t.refCount--,t.refCount===0&&h2(p2,function(){t.controller.abort()})}var jo=null,$u=0,Ni=0,zi=null;function b2(t,a){if(jo===null){var o=jo=[];$u=0,Ni=Kc(),zi={status:"pending",value:void 0,then:function(r){o.push(r)}}}return $u++,a.then(nm,nm),a}function nm(){if(--$u===0&&jo!==null){zi!==null&&(zi.status="fulfilled");var t=jo;jo=null,Ni=0,zi=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function y2(t,a){var o=[],r={status:"pending",value:null,reason:null,then:function(u){o.push(u)}};return t.then(function(){r.status="fulfilled",r.value=a;for(var u=0;u<o.length;u++)(0,o[u])(a)},function(u){for(r.status="rejected",r.reason=u,u=0;u<o.length;u++)(0,o[u])(void 0)}),r}var im=D.S;D.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&b2(t,a),im!==null&&im(t,a)};var Wn=B(null);function Yu(){var t=Wn.current;return t!==null?t:je.pooledCache}function br(t,a){a===null?X(Wn,Wn.current):X(Wn,a.pool)}function om(){var t=Yu();return t===null?null:{parent:nt._currentValue,pool:t}}var Ho=Error(l(460)),lm=Error(l(474)),yr=Error(l(542)),Ku={then:function(){}};function rm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vr(){}function sm(t,a,o){switch(o=t[o],o===void 0?t.push(a):o!==a&&(a.then(vr,vr),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,cm(t),t;default:if(typeof a.status=="string")a.then(vr,vr);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=a,t.status="pending",t.then(function(r){if(a.status==="pending"){var u=a;u.status="fulfilled",u.value=r}},function(r){if(a.status==="pending"){var u=a;u.status="rejected",u.reason=r}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,cm(t),t}throw Uo=a,Ho}}var Uo=null;function um(){if(Uo===null)throw Error(l(459));var t=Uo;return Uo=null,t}function cm(t){if(t===Ho||t===yr)throw Error(l(483))}var nn=!1;function Xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function on(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ln(t,a,o){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var u=r.pending;return u===null?a.next=a:(a.next=u.next,u.next=a),r.pending=a,a=dr(t),Xg(t,null,o),a}return cr(t,r,a,o),dr(t)}function Go(t,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var r=a.lanes;r&=t.pendingLanes,o|=r,a.lanes=o,ng(t,o)}}function Qu(t,a){var o=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,o===r)){var u=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var m={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?u=d=m:d=d.next=m,o=o.next}while(o!==null);d===null?u=d=a:d=d.next=a}else u=d=a;o={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:r.shared,callbacks:r.callbacks},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=a:t.next=a,o.lastBaseUpdate=a}var Ju=!1;function Wo(){if(Ju){var t=zi;if(t!==null)throw t}}function $o(t,a,o,r){Ju=!1;var u=t.updateQueue;nn=!1;var d=u.firstBaseUpdate,m=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var S=b,z=S.next;S.next=null,m===null?d=z:m.next=z,m=S;var M=t.alternate;M!==null&&(M=M.updateQueue,b=M.lastBaseUpdate,b!==m&&(b===null?M.firstBaseUpdate=z:b.next=z,M.lastBaseUpdate=S))}if(d!==null){var j=u.baseState;m=0,M=z=S=null,b=d;do{var V=b.lane&-536870913,q=V!==b.lane;if(q?(Ee&V)===V:(r&V)===V){V!==0&&V===Ni&&(Ju=!0),M!==null&&(M=M.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var he=t,se=b;V=a;var Me=o;switch(se.tag){case 1:if(he=se.payload,typeof he=="function"){j=he.call(Me,j,V);break e}j=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=se.payload,V=typeof he=="function"?he.call(Me,j,V):he,V==null)break e;j=y({},j,V);break e;case 2:nn=!0}}V=b.callback,V!==null&&(t.flags|=64,q&&(t.flags|=8192),q=u.callbacks,q===null?u.callbacks=[V]:q.push(V))}else q={lane:V,tag:b.tag,payload:b.payload,callback:b.callback,next:null},M===null?(z=M=q,S=j):M=M.next=q,m|=V;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;q=b,b=q.next,q.next=null,u.lastBaseUpdate=q,u.shared.pending=null}}while(!0);M===null&&(S=j),u.baseState=S,u.firstBaseUpdate=z,u.lastBaseUpdate=M,d===null&&(u.shared.lanes=0),mn|=m,t.lanes=m,t.memoizedState=j}}function dm(t,a){if(typeof t!="function")throw Error(l(191,t));t.call(a)}function fm(t,a){var o=t.callbacks;if(o!==null)for(t.callbacks=null,t=0;t<o.length;t++)dm(o[t],a)}var Ii=B(null),xr=B(0);function gm(t,a){t=Wa,X(xr,t),X(Ii,a),Wa=t|a.baseLanes}function ec(){X(xr,Wa),X(Ii,Ii.current)}function tc(){Wa=xr.current,Z(Ii),Z(xr)}var rn=0,ye=null,Fe=null,Qe=null,Sr=!1,Vi=!1,$n=!1,wr=0,Yo=0,qi=null,v2=0;function Xe(){throw Error(l(321))}function ac(t,a){if(a===null)return!1;for(var o=0;o<a.length&&o<t.length;o++)if(!Pt(t[o],a[o]))return!1;return!0}function nc(t,a,o,r,u,d){return rn=d,ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,D.H=t===null||t.memoizedState===null?Xm:Zm,$n=!1,d=o(r,u),$n=!1,Vi&&(d=hm(a,o,r,u)),mm(t),d}function mm(t){D.H=Ar;var a=Fe!==null&&Fe.next!==null;if(rn=0,Qe=Fe=ye=null,Sr=!1,Yo=0,qi=null,a)throw Error(l(300));t===null||rt||(t=t.dependencies,t!==null&&hr(t)&&(rt=!0))}function hm(t,a,o,r){ye=t;var u=0;do{if(Vi&&(qi=null),Yo=0,Vi=!1,25<=u)throw Error(l(301));if(u+=1,Qe=Fe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}D.H=T2,d=a(o,r)}while(Vi);return d}function x2(){var t=D.H,a=t.useState()[0];return a=typeof a.then=="function"?Ko(a):a,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(ye.flags|=1024),a}function ic(){var t=wr!==0;return wr=0,t}function oc(t,a,o){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~o}function lc(t){if(Sr){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Sr=!1}rn=0,Qe=Fe=ye=null,Vi=!1,Yo=wr=0,qi=null}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ye.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function Je(){if(Fe===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var a=Qe===null?ye.memoizedState:Qe.next;if(a!==null)Qe=a,Fe=t;else{if(t===null)throw ye.alternate===null?Error(l(467)):Error(l(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Qe===null?ye.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(t){var a=Yo;return Yo+=1,qi===null&&(qi=[]),t=sm(qi,t,a),a=ye,(Qe===null?a.memoizedState:Qe.next)===null&&(a=a.alternate,D.H=a===null||a.memoizedState===null?Xm:Zm),t}function Cr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ko(t);if(t.$$typeof===N)return St(t)}throw Error(l(438,String(t)))}function sc(t){var a=null,o=ye.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var r=ye.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(a={data:r.data.map(function(u){return u.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=rc(),ye.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(t),r=0;r<t;r++)o[r]=K;return a.index++,o}function La(t,a){return typeof a=="function"?a(t):a}function Er(t){var a=Je();return uc(a,Fe,t)}function uc(t,a,o){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=o;var u=t.baseQueue,d=r.pending;if(d!==null){if(u!==null){var m=u.next;u.next=d.next,d.next=m}a.baseQueue=u=d,r.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{a=u.next;var b=m=null,S=null,z=a,M=!1;do{var j=z.lane&-536870913;if(j!==z.lane?(Ee&j)===j:(rn&j)===j){var V=z.revertLane;if(V===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),j===Ni&&(M=!0);else if((rn&V)===V){z=z.next,V===Ni&&(M=!0);continue}else j={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(b=S=j,m=d):S=S.next=j,ye.lanes|=V,mn|=V;j=z.action,$n&&o(d,j),d=z.hasEagerState?z.eagerState:o(d,j)}else V={lane:j,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(b=S=V,m=d):S=S.next=V,ye.lanes|=j,mn|=j;z=z.next}while(z!==null&&z!==a);if(S===null?m=d:S.next=b,!Pt(d,t.memoizedState)&&(rt=!0,M&&(o=zi,o!==null)))throw o;t.memoizedState=d,t.baseState=m,t.baseQueue=S,r.lastRenderedState=d}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function cc(t){var a=Je(),o=a.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=t;var r=o.dispatch,u=o.pending,d=a.memoizedState;if(u!==null){o.pending=null;var m=u=u.next;do d=t(d,m.action),m=m.next;while(m!==u);Pt(d,a.memoizedState)||(rt=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),o.lastRenderedState=d}return[d,r]}function pm(t,a,o){var r=ye,u=Je(),d=Re;if(d){if(o===void 0)throw Error(l(407));o=o()}else o=a();var m=!Pt((Fe||u).memoizedState,o);m&&(u.memoizedState=o,rt=!0),u=u.queue;var b=vm.bind(null,r,u,t);if(Xo(2048,8,b,[t]),u.getSnapshot!==a||m||Qe!==null&&Qe.memoizedState.tag&1){if(r.flags|=2048,Fi(9,Or(),ym.bind(null,r,u,o,a),null),je===null)throw Error(l(349));d||(rn&124)!==0||bm(r,a,o)}return o}function bm(t,a,o){t.flags|=16384,t={getSnapshot:a,value:o},a=ye.updateQueue,a===null?(a=rc(),ye.updateQueue=a,a.stores=[t]):(o=a.stores,o===null?a.stores=[t]:o.push(t))}function ym(t,a,o,r){a.value=o,a.getSnapshot=r,xm(a)&&Sm(t)}function vm(t,a,o){return o(function(){xm(a)&&Sm(t)})}function xm(t){var a=t.getSnapshot;t=t.value;try{var o=a();return!Pt(t,o)}catch{return!0}}function Sm(t){var a=ki(t,2);a!==null&&Gt(a,t,2)}function dc(t){var a=At();if(typeof t=="function"){var o=t;if(t=o(),$n){Ja(!0);try{o()}finally{Ja(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},a}function wm(t,a,o,r){return t.baseState=o,uc(t,Fe,typeof r=="function"?r:La)}function S2(t,a,o,r,u){if(kr(t))throw Error(l(485));if(t=a.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){d.listeners.push(m)}};D.T!==null?o(!0):d.isTransition=!1,r(d),o=a.pending,o===null?(d.next=a.pending=d,Cm(a,d)):(d.next=o.next,a.pending=o.next=d)}}function Cm(t,a){var o=a.action,r=a.payload,u=t.state;if(a.isTransition){var d=D.T,m={};D.T=m;try{var b=o(u,r),S=D.S;S!==null&&S(m,b),Em(t,a,b)}catch(z){fc(t,a,z)}finally{D.T=d}}else try{d=o(u,r),Em(t,a,d)}catch(z){fc(t,a,z)}}function Em(t,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(r){Om(t,a,r)},function(r){return fc(t,a,r)}):Om(t,a,o)}function Om(t,a,o){a.status="fulfilled",a.value=o,Tm(a),t.state=o,a=t.pending,a!==null&&(o=a.next,o===a?t.pending=null:(o=o.next,a.next=o,Cm(t,o)))}function fc(t,a,o){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do a.status="rejected",a.reason=o,Tm(a),a=a.next;while(a!==r)}t.action=null}function Tm(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function km(t,a){return a}function Am(t,a){if(Re){var o=je.formState;if(o!==null){e:{var r=ye;if(Re){if($e){t:{for(var u=$e,d=ya;u.nodeType!==8;){if(!d){u=null;break t}if(u=fa(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$e=fa(u.nextSibling),r=u.data==="F!";break e}}Hn(r)}r=!1}r&&(a=o[0])}}return o=At(),o.memoizedState=o.baseState=a,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:km,lastRenderedState:a},o.queue=r,o=$m.bind(null,ye,r),r.dispatch=o,r=dc(!1),d=bc.bind(null,ye,!1,r.queue),r=At(),u={state:a,dispatch:null,action:t,pending:null},r.queue=u,o=S2.bind(null,ye,u,d,o),u.dispatch=o,r.memoizedState=t,[a,o,!1]}function Rm(t){var a=Je();return _m(a,Fe,t)}function _m(t,a,o){if(a=uc(t,a,km)[0],t=Er(La)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var r=Ko(a)}catch(m){throw m===Ho?yr:m}else r=a;a=Je();var u=a.queue,d=u.dispatch;return o!==a.memoizedState&&(ye.flags|=2048,Fi(9,Or(),w2.bind(null,u,o),null)),[r,d,t]}function w2(t,a){t.action=a}function Nm(t){var a=Je(),o=Fe;if(o!==null)return _m(a,o,t);Je(),a=a.memoizedState,o=Je();var r=o.queue.dispatch;return o.memoizedState=t,[a,r,!1]}function Fi(t,a,o,r){return t={tag:t,create:o,deps:r,inst:a,next:null},a=ye.updateQueue,a===null&&(a=rc(),ye.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=t.next=t:(r=o.next,o.next=t,t.next=r,a.lastEffect=t),t}function Or(){return{destroy:void 0,resource:void 0}}function zm(){return Je().memoizedState}function Tr(t,a,o,r){var u=At();r=r===void 0?null:r,ye.flags|=t,u.memoizedState=Fi(1|a,Or(),o,r)}function Xo(t,a,o,r){var u=Je();r=r===void 0?null:r;var d=u.memoizedState.inst;Fe!==null&&r!==null&&ac(r,Fe.memoizedState.deps)?u.memoizedState=Fi(a,d,o,r):(ye.flags|=t,u.memoizedState=Fi(1|a,d,o,r))}function Im(t,a){Tr(8390656,8,t,a)}function Vm(t,a){Xo(2048,8,t,a)}function qm(t,a){return Xo(4,2,t,a)}function Fm(t,a){return Xo(4,4,t,a)}function Dm(t,a){if(typeof a=="function"){t=t();var o=a(t);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Mm(t,a,o){o=o!=null?o.concat([t]):null,Xo(4,4,Dm.bind(null,a,t),o)}function gc(){}function Pm(t,a){var o=Je();a=a===void 0?null:a;var r=o.memoizedState;return a!==null&&ac(a,r[1])?r[0]:(o.memoizedState=[t,a],t)}function Lm(t,a){var o=Je();a=a===void 0?null:a;var r=o.memoizedState;if(a!==null&&ac(a,r[1]))return r[0];if(r=t(),$n){Ja(!0);try{t()}finally{Ja(!1)}}return o.memoizedState=[r,a],r}function mc(t,a,o){return o===void 0||(rn&1073741824)!==0?t.memoizedState=a:(t.memoizedState=o,t=Hh(),ye.lanes|=t,mn|=t,o)}function Bm(t,a,o,r){return Pt(o,a)?o:Ii.current!==null?(t=mc(t,o,r),Pt(t,a)||(rt=!0),t):(rn&42)===0?(rt=!0,t.memoizedState=o):(t=Hh(),ye.lanes|=t,mn|=t,a)}function jm(t,a,o,r,u){var d=G.p;G.p=d!==0&&8>d?d:8;var m=D.T,b={};D.T=b,bc(t,!1,a,o);try{var S=u(),z=D.S;if(z!==null&&z(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var M=y2(S,r);Zo(t,a,M,Ut(t))}else Zo(t,a,r,Ut(t))}catch(j){Zo(t,a,{then:function(){},status:"rejected",reason:j},Ut())}finally{G.p=d,D.T=m}}function C2(){}function hc(t,a,o,r){if(t.tag!==5)throw Error(l(476));var u=Hm(t).queue;jm(t,u,a,ae,o===null?C2:function(){return Um(t),o(r)})}function Hm(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:ae},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:o},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Um(t){var a=Hm(t).next.queue;Zo(t,a,{},Ut())}function pc(){return St(hl)}function Gm(){return Je().memoizedState}function Wm(){return Je().memoizedState}function E2(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var o=Ut();t=on(o);var r=ln(a,t,o);r!==null&&(Gt(r,a,o),Go(r,a,o)),a={cache:Wu()},t.payload=a;return}a=a.return}}function O2(t,a,o){var r=Ut();o={lane:r,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},kr(t)?Ym(a,o):(o=Fu(t,a,o,r),o!==null&&(Gt(o,t,r),Km(o,a,r)))}function $m(t,a,o){var r=Ut();Zo(t,a,o,r)}function Zo(t,a,o,r){var u={lane:r,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(kr(t))Ym(a,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var m=a.lastRenderedState,b=d(m,o);if(u.hasEagerState=!0,u.eagerState=b,Pt(b,m))return cr(t,a,u,0),je===null&&ur(),!1}catch{}if(o=Fu(t,a,u,r),o!==null)return Gt(o,t,r),Km(o,a,r),!0}return!1}function bc(t,a,o,r){if(r={lane:2,revertLane:Kc(),action:r,hasEagerState:!1,eagerState:null,next:null},kr(t)){if(a)throw Error(l(479))}else a=Fu(t,o,r,2),a!==null&&Gt(a,t,2)}function kr(t){var a=t.alternate;return t===ye||a!==null&&a===ye}function Ym(t,a){Vi=Sr=!0;var o=t.pending;o===null?a.next=a:(a.next=o.next,o.next=a),t.pending=a}function Km(t,a,o){if((o&4194048)!==0){var r=a.lanes;r&=t.pendingLanes,o|=r,a.lanes=o,ng(t,o)}}var Ar={readContext:St,use:Cr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe},Xm={readContext:St,use:Cr,useCallback:function(t,a){return At().memoizedState=[t,a===void 0?null:a],t},useContext:St,useEffect:Im,useImperativeHandle:function(t,a,o){o=o!=null?o.concat([t]):null,Tr(4194308,4,Dm.bind(null,a,t),o)},useLayoutEffect:function(t,a){return Tr(4194308,4,t,a)},useInsertionEffect:function(t,a){Tr(4,2,t,a)},useMemo:function(t,a){var o=At();a=a===void 0?null:a;var r=t();if($n){Ja(!0);try{t()}finally{Ja(!1)}}return o.memoizedState=[r,a],r},useReducer:function(t,a,o){var r=At();if(o!==void 0){var u=o(a);if($n){Ja(!0);try{o(a)}finally{Ja(!1)}}}else u=a;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=O2.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var a=At();return t={current:t},a.memoizedState=t},useState:function(t){t=dc(t);var a=t.queue,o=$m.bind(null,ye,a);return a.dispatch=o,[t.memoizedState,o]},useDebugValue:gc,useDeferredValue:function(t,a){var o=At();return mc(o,t,a)},useTransition:function(){var t=dc(!1);return t=jm.bind(null,ye,t.queue,!0,!1),At().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,o){var r=ye,u=At();if(Re){if(o===void 0)throw Error(l(407));o=o()}else{if(o=a(),je===null)throw Error(l(349));(Ee&124)!==0||bm(r,a,o)}u.memoizedState=o;var d={value:o,getSnapshot:a};return u.queue=d,Im(vm.bind(null,r,d,t),[t]),r.flags|=2048,Fi(9,Or(),ym.bind(null,r,d,o,a),null),o},useId:function(){var t=At(),a=je.identifierPrefix;if(Re){var o=Da,r=Fa;o=(r&~(1<<32-Mt(r)-1)).toString(32)+o,a="«"+a+"R"+o,o=wr++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=v2++,a="«"+a+"r"+o.toString(32)+"»";return t.memoizedState=a},useHostTransitionStatus:pc,useFormState:Am,useActionState:Am,useOptimistic:function(t){var a=At();a.memoizedState=a.baseState=t;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=bc.bind(null,ye,!0,o),o.dispatch=a,[t,a]},useMemoCache:sc,useCacheRefresh:function(){return At().memoizedState=E2.bind(null,ye)}},Zm={readContext:St,use:Cr,useCallback:Pm,useContext:St,useEffect:Vm,useImperativeHandle:Mm,useInsertionEffect:qm,useLayoutEffect:Fm,useMemo:Lm,useReducer:Er,useRef:zm,useState:function(){return Er(La)},useDebugValue:gc,useDeferredValue:function(t,a){var o=Je();return Bm(o,Fe.memoizedState,t,a)},useTransition:function(){var t=Er(La)[0],a=Je().memoizedState;return[typeof t=="boolean"?t:Ko(t),a]},useSyncExternalStore:pm,useId:Gm,useHostTransitionStatus:pc,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,a){var o=Je();return wm(o,Fe,t,a)},useMemoCache:sc,useCacheRefresh:Wm},T2={readContext:St,use:Cr,useCallback:Pm,useContext:St,useEffect:Vm,useImperativeHandle:Mm,useInsertionEffect:qm,useLayoutEffect:Fm,useMemo:Lm,useReducer:cc,useRef:zm,useState:function(){return cc(La)},useDebugValue:gc,useDeferredValue:function(t,a){var o=Je();return Fe===null?mc(o,t,a):Bm(o,Fe.memoizedState,t,a)},useTransition:function(){var t=cc(La)[0],a=Je().memoizedState;return[typeof t=="boolean"?t:Ko(t),a]},useSyncExternalStore:pm,useId:Gm,useHostTransitionStatus:pc,useFormState:Nm,useActionState:Nm,useOptimistic:function(t,a){var o=Je();return Fe!==null?wm(o,Fe,t,a):(o.baseState=t,[t,o.queue.dispatch])},useMemoCache:sc,useCacheRefresh:Wm},Di=null,Qo=0;function Rr(t){var a=Qo;return Qo+=1,Di===null&&(Di=[]),sm(Di,t,a)}function Jo(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function _r(t,a){throw a.$$typeof===x?Error(l(525)):(t=Object.prototype.toString.call(a),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Qm(t){var a=t._init;return a(t._payload)}function Jm(t){function a(k,T){if(t){var R=k.deletions;R===null?(k.deletions=[T],k.flags|=16):R.push(T)}}function o(k,T){if(!t)return null;for(;T!==null;)a(k,T),T=T.sibling;return null}function r(k){for(var T=new Map;k!==null;)k.key!==null?T.set(k.key,k):T.set(k.index,k),k=k.sibling;return T}function u(k,T){return k=qa(k,T),k.index=0,k.sibling=null,k}function d(k,T,R){return k.index=R,t?(R=k.alternate,R!==null?(R=R.index,R<T?(k.flags|=67108866,T):R):(k.flags|=67108866,T)):(k.flags|=1048576,T)}function m(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function b(k,T,R,L){return T===null||T.tag!==6?(T=Mu(R,k.mode,L),T.return=k,T):(T=u(T,R),T.return=k,T)}function S(k,T,R,L){var ne=R.type;return ne===E?M(k,T,R.props.children,L,R.key):T!==null&&(T.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Y&&Qm(ne)===T.type)?(T=u(T,R.props),Jo(T,R),T.return=k,T):(T=fr(R.type,R.key,R.props,null,k.mode,L),Jo(T,R),T.return=k,T)}function z(k,T,R,L){return T===null||T.tag!==4||T.stateNode.containerInfo!==R.containerInfo||T.stateNode.implementation!==R.implementation?(T=Pu(R,k.mode,L),T.return=k,T):(T=u(T,R.children||[]),T.return=k,T)}function M(k,T,R,L,ne){return T===null||T.tag!==7?(T=Pn(R,k.mode,L,ne),T.return=k,T):(T=u(T,R),T.return=k,T)}function j(k,T,R){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Mu(""+T,k.mode,R),T.return=k,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case v:return R=fr(T.type,T.key,T.props,null,k.mode,R),Jo(R,T),R.return=k,R;case C:return T=Pu(T,k.mode,R),T.return=k,T;case Y:var L=T._init;return T=L(T._payload),j(k,T,R)}if(re(T)||te(T))return T=Pn(T,k.mode,R,null),T.return=k,T;if(typeof T.then=="function")return j(k,Rr(T),R);if(T.$$typeof===N)return j(k,pr(k,T),R);_r(k,T)}return null}function V(k,T,R,L){var ne=T!==null?T.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ne!==null?null:b(k,T,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case v:return R.key===ne?S(k,T,R,L):null;case C:return R.key===ne?z(k,T,R,L):null;case Y:return ne=R._init,R=ne(R._payload),V(k,T,R,L)}if(re(R)||te(R))return ne!==null?null:M(k,T,R,L,null);if(typeof R.then=="function")return V(k,T,Rr(R),L);if(R.$$typeof===N)return V(k,T,pr(k,R),L);_r(k,R)}return null}function q(k,T,R,L,ne){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return k=k.get(R)||null,b(T,k,""+L,ne);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case v:return k=k.get(L.key===null?R:L.key)||null,S(T,k,L,ne);case C:return k=k.get(L.key===null?R:L.key)||null,z(T,k,L,ne);case Y:var xe=L._init;return L=xe(L._payload),q(k,T,R,L,ne)}if(re(L)||te(L))return k=k.get(R)||null,M(T,k,L,ne,null);if(typeof L.then=="function")return q(k,T,R,Rr(L),ne);if(L.$$typeof===N)return q(k,T,R,pr(T,L),ne);_r(T,L)}return null}function he(k,T,R,L){for(var ne=null,xe=null,le=T,fe=T=0,ut=null;le!==null&&fe<R.length;fe++){le.index>fe?(ut=le,le=null):ut=le.sibling;var Ae=V(k,le,R[fe],L);if(Ae===null){le===null&&(le=ut);break}t&&le&&Ae.alternate===null&&a(k,le),T=d(Ae,T,fe),xe===null?ne=Ae:xe.sibling=Ae,xe=Ae,le=ut}if(fe===R.length)return o(k,le),Re&&Bn(k,fe),ne;if(le===null){for(;fe<R.length;fe++)le=j(k,R[fe],L),le!==null&&(T=d(le,T,fe),xe===null?ne=le:xe.sibling=le,xe=le);return Re&&Bn(k,fe),ne}for(le=r(le);fe<R.length;fe++)ut=q(le,k,fe,R[fe],L),ut!==null&&(t&&ut.alternate!==null&&le.delete(ut.key===null?fe:ut.key),T=d(ut,T,fe),xe===null?ne=ut:xe.sibling=ut,xe=ut);return t&&le.forEach(function(Cn){return a(k,Cn)}),Re&&Bn(k,fe),ne}function se(k,T,R,L){if(R==null)throw Error(l(151));for(var ne=null,xe=null,le=T,fe=T=0,ut=null,Ae=R.next();le!==null&&!Ae.done;fe++,Ae=R.next()){le.index>fe?(ut=le,le=null):ut=le.sibling;var Cn=V(k,le,Ae.value,L);if(Cn===null){le===null&&(le=ut);break}t&&le&&Cn.alternate===null&&a(k,le),T=d(Cn,T,fe),xe===null?ne=Cn:xe.sibling=Cn,xe=Cn,le=ut}if(Ae.done)return o(k,le),Re&&Bn(k,fe),ne;if(le===null){for(;!Ae.done;fe++,Ae=R.next())Ae=j(k,Ae.value,L),Ae!==null&&(T=d(Ae,T,fe),xe===null?ne=Ae:xe.sibling=Ae,xe=Ae);return Re&&Bn(k,fe),ne}for(le=r(le);!Ae.done;fe++,Ae=R.next())Ae=q(le,k,fe,Ae.value,L),Ae!==null&&(t&&Ae.alternate!==null&&le.delete(Ae.key===null?fe:Ae.key),T=d(Ae,T,fe),xe===null?ne=Ae:xe.sibling=Ae,xe=Ae);return t&&le.forEach(function(kx){return a(k,kx)}),Re&&Bn(k,fe),ne}function Me(k,T,R,L){if(typeof R=="object"&&R!==null&&R.type===E&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case v:e:{for(var ne=R.key;T!==null;){if(T.key===ne){if(ne=R.type,ne===E){if(T.tag===7){o(k,T.sibling),L=u(T,R.props.children),L.return=k,k=L;break e}}else if(T.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Y&&Qm(ne)===T.type){o(k,T.sibling),L=u(T,R.props),Jo(L,R),L.return=k,k=L;break e}o(k,T);break}else a(k,T);T=T.sibling}R.type===E?(L=Pn(R.props.children,k.mode,L,R.key),L.return=k,k=L):(L=fr(R.type,R.key,R.props,null,k.mode,L),Jo(L,R),L.return=k,k=L)}return m(k);case C:e:{for(ne=R.key;T!==null;){if(T.key===ne)if(T.tag===4&&T.stateNode.containerInfo===R.containerInfo&&T.stateNode.implementation===R.implementation){o(k,T.sibling),L=u(T,R.children||[]),L.return=k,k=L;break e}else{o(k,T);break}else a(k,T);T=T.sibling}L=Pu(R,k.mode,L),L.return=k,k=L}return m(k);case Y:return ne=R._init,R=ne(R._payload),Me(k,T,R,L)}if(re(R))return he(k,T,R,L);if(te(R)){if(ne=te(R),typeof ne!="function")throw Error(l(150));return R=ne.call(R),se(k,T,R,L)}if(typeof R.then=="function")return Me(k,T,Rr(R),L);if(R.$$typeof===N)return Me(k,T,pr(k,R),L);_r(k,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,T!==null&&T.tag===6?(o(k,T.sibling),L=u(T,R),L.return=k,k=L):(o(k,T),L=Mu(R,k.mode,L),L.return=k,k=L),m(k)):o(k,T)}return function(k,T,R,L){try{Qo=0;var ne=Me(k,T,R,L);return Di=null,ne}catch(le){if(le===Ho||le===yr)throw le;var xe=Lt(29,le,null,k.mode);return xe.lanes=L,xe.return=k,xe}}}var Mi=Jm(!0),eh=Jm(!1),ia=B(null),va=null;function sn(t){var a=t.alternate;X(it,it.current&1),X(ia,t),va===null&&(a===null||Ii.current!==null||a.memoizedState!==null)&&(va=t)}function th(t){if(t.tag===22){if(X(it,it.current),X(ia,t),va===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(va=t)}}else un()}function un(){X(it,it.current),X(ia,ia.current)}function Ba(t){Z(ia),va===t&&(va=null),Z(it)}var it=B(0);function Nr(t){for(var a=t;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||rd(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function yc(t,a,o,r){a=t.memoizedState,o=o(r,a),o=o==null?a:y({},a,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var vc={enqueueSetState:function(t,a,o){t=t._reactInternals;var r=Ut(),u=on(r);u.payload=a,o!=null&&(u.callback=o),a=ln(t,u,r),a!==null&&(Gt(a,t,r),Go(a,t,r))},enqueueReplaceState:function(t,a,o){t=t._reactInternals;var r=Ut(),u=on(r);u.tag=1,u.payload=a,o!=null&&(u.callback=o),a=ln(t,u,r),a!==null&&(Gt(a,t,r),Go(a,t,r))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var o=Ut(),r=on(o);r.tag=2,a!=null&&(r.callback=a),a=ln(t,r,o),a!==null&&(Gt(a,t,o),Go(a,t,o))}};function ah(t,a,o,r,u,d,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,d,m):a.prototype&&a.prototype.isPureReactComponent?!qo(o,r)||!qo(u,d):!0}function nh(t,a,o,r){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,r),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,r),a.state!==t&&vc.enqueueReplaceState(a,a.state,null)}function Yn(t,a){var o=a;if("ref"in a){o={};for(var r in a)r!=="ref"&&(o[r]=a[r])}if(t=t.defaultProps){o===a&&(o=y({},o));for(var u in t)o[u]===void 0&&(o[u]=t[u])}return o}var zr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ih(t){zr(t)}function oh(t){console.error(t)}function lh(t){zr(t)}function Ir(t,a){try{var o=t.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(r){setTimeout(function(){throw r})}}function rh(t,a,o){try{var r=t.onCaughtError;r(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xc(t,a,o){return o=on(o),o.tag=3,o.payload={element:null},o.callback=function(){Ir(t,a)},o}function sh(t){return t=on(t),t.tag=3,t}function uh(t,a,o,r){var u=o.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;t.payload=function(){return u(d)},t.callback=function(){rh(a,o,r)}}var m=o.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){rh(a,o,r),typeof u!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function k2(t,a,o,r,u){if(o.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(a=o.alternate,a!==null&&Lo(a,o,u,!0),o=ia.current,o!==null){switch(o.tag){case 13:return va===null?Uc():o.alternate===null&&Ye===0&&(Ye=3),o.flags&=-257,o.flags|=65536,o.lanes=u,r===Ku?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([r]):a.add(r),Wc(t,r,u)),!1;case 22:return o.flags|=65536,r===Ku?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([r])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([r]):o.add(r)),Wc(t,r,u)),!1}throw Error(l(435,o.tag))}return Wc(t,r,u),Uc(),!1}if(Re)return a=ia.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=u,r!==ju&&(t=Error(l(422),{cause:r}),Po(ea(t,o)))):(r!==ju&&(a=Error(l(423),{cause:r}),Po(ea(a,o))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=ea(r,o),u=xc(t.stateNode,r,u),Qu(t,u),Ye!==4&&(Ye=2)),!1;var d=Error(l(520),{cause:r});if(d=ea(d,o),ll===null?ll=[d]:ll.push(d),Ye!==4&&(Ye=2),a===null)return!0;r=ea(r,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,t=u&-u,o.lanes|=t,t=xc(o.stateNode,r,t),Qu(o,t),!1;case 1:if(a=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(hn===null||!hn.has(d))))return o.flags|=65536,u&=-u,o.lanes|=u,u=sh(u),uh(u,t,o,r),Qu(o,u),!1}o=o.return}while(o!==null);return!1}var ch=Error(l(461)),rt=!1;function ft(t,a,o,r){a.child=t===null?eh(a,null,o,r):Mi(a,t.child,o,r)}function dh(t,a,o,r,u){o=o.render;var d=a.ref;if("ref"in r){var m={};for(var b in r)b!=="ref"&&(m[b]=r[b])}else m=r;return Gn(a),r=nc(t,a,o,m,d,u),b=ic(),t!==null&&!rt?(oc(t,a,u),ja(t,a,u)):(Re&&b&&Lu(a),a.flags|=1,ft(t,a,r,u),a.child)}function fh(t,a,o,r,u){if(t===null){var d=o.type;return typeof d=="function"&&!Du(d)&&d.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=d,gh(t,a,d,r,u)):(t=fr(o.type,null,r,a,a.mode,u),t.ref=a.ref,t.return=a,a.child=t)}if(d=t.child,!Ac(t,u)){var m=d.memoizedProps;if(o=o.compare,o=o!==null?o:qo,o(m,r)&&t.ref===a.ref)return ja(t,a,u)}return a.flags|=1,t=qa(d,r),t.ref=a.ref,t.return=a,a.child=t}function gh(t,a,o,r,u){if(t!==null){var d=t.memoizedProps;if(qo(d,r)&&t.ref===a.ref)if(rt=!1,a.pendingProps=r=d,Ac(t,u))(t.flags&131072)!==0&&(rt=!0);else return a.lanes=t.lanes,ja(t,a,u)}return Sc(t,a,o,r,u)}function mh(t,a,o){var r=a.pendingProps,u=r.children,d=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((a.flags&128)!==0){if(r=d!==null?d.baseLanes|o:o,t!==null){for(u=a.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;a.childLanes=d&~r}else a.childLanes=0,a.child=null;return hh(t,a,r,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&br(a,d!==null?d.cachePool:null),d!==null?gm(a,d):ec(),th(a);else return a.lanes=a.childLanes=536870912,hh(t,a,d!==null?d.baseLanes|o:o,o)}else d!==null?(br(a,d.cachePool),gm(a,d),un(),a.memoizedState=null):(t!==null&&br(a,null),ec(),un());return ft(t,a,u,o),a.child}function hh(t,a,o,r){var u=Yu();return u=u===null?null:{parent:nt._currentValue,pool:u},a.memoizedState={baseLanes:o,cachePool:u},t!==null&&br(a,null),ec(),th(a),t!==null&&Lo(t,a,r,!0),null}function Vr(t,a){var o=a.ref;if(o===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(l(284));(t===null||t.ref!==o)&&(a.flags|=4194816)}}function Sc(t,a,o,r,u){return Gn(a),o=nc(t,a,o,r,void 0,u),r=ic(),t!==null&&!rt?(oc(t,a,u),ja(t,a,u)):(Re&&r&&Lu(a),a.flags|=1,ft(t,a,o,u),a.child)}function ph(t,a,o,r,u,d){return Gn(a),a.updateQueue=null,o=hm(a,r,o,u),mm(t),r=ic(),t!==null&&!rt?(oc(t,a,d),ja(t,a,d)):(Re&&r&&Lu(a),a.flags|=1,ft(t,a,o,d),a.child)}function bh(t,a,o,r,u){if(Gn(a),a.stateNode===null){var d=Ai,m=o.contextType;typeof m=="object"&&m!==null&&(d=St(m)),d=new o(r,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vc,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=r,d.state=a.memoizedState,d.refs={},Xu(a),m=o.contextType,d.context=typeof m=="object"&&m!==null?St(m):Ai,d.state=a.memoizedState,m=o.getDerivedStateFromProps,typeof m=="function"&&(yc(a,o,m,r),d.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(m=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),m!==d.state&&vc.enqueueReplaceState(d,d.state,null),$o(a,r,d,u),Wo(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),r=!0}else if(t===null){d=a.stateNode;var b=a.memoizedProps,S=Yn(o,b);d.props=S;var z=d.context,M=o.contextType;m=Ai,typeof M=="object"&&M!==null&&(m=St(M));var j=o.getDerivedStateFromProps;M=typeof j=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=a.pendingProps!==b,M||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||z!==m)&&nh(a,d,r,m),nn=!1;var V=a.memoizedState;d.state=V,$o(a,r,d,u),Wo(),z=a.memoizedState,b||V!==z||nn?(typeof j=="function"&&(yc(a,o,j,r),z=a.memoizedState),(S=nn||ah(a,o,S,r,V,z,m))?(M||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=r,a.memoizedState=z),d.props=r,d.state=z,d.context=m,r=S):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),r=!1)}else{d=a.stateNode,Zu(t,a),m=a.memoizedProps,M=Yn(o,m),d.props=M,j=a.pendingProps,V=d.context,z=o.contextType,S=Ai,typeof z=="object"&&z!==null&&(S=St(z)),b=o.getDerivedStateFromProps,(z=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==j||V!==S)&&nh(a,d,r,S),nn=!1,V=a.memoizedState,d.state=V,$o(a,r,d,u),Wo();var q=a.memoizedState;m!==j||V!==q||nn||t!==null&&t.dependencies!==null&&hr(t.dependencies)?(typeof b=="function"&&(yc(a,o,b,r),q=a.memoizedState),(M=nn||ah(a,o,M,r,V,q,S)||t!==null&&t.dependencies!==null&&hr(t.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,q,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,q,S)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===t.memoizedProps&&V===t.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&V===t.memoizedState||(a.flags|=1024),a.memoizedProps=r,a.memoizedState=q),d.props=r,d.state=q,d.context=S,r=M):(typeof d.componentDidUpdate!="function"||m===t.memoizedProps&&V===t.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&V===t.memoizedState||(a.flags|=1024),r=!1)}return d=r,Vr(t,a),r=(a.flags&128)!==0,d||r?(d=a.stateNode,o=r&&typeof o.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,t!==null&&r?(a.child=Mi(a,t.child,null,u),a.child=Mi(a,null,o,u)):ft(t,a,o,u),a.memoizedState=d.state,t=a.child):t=ja(t,a,u),t}function yh(t,a,o,r){return Mo(),a.flags|=256,ft(t,a,o,r),a.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(t){return{baseLanes:t,cachePool:om()}}function Ec(t,a,o){return t=t!==null?t.childLanes&~o:0,a&&(t|=oa),t}function vh(t,a,o){var r=a.pendingProps,u=!1,d=(a.flags&128)!==0,m;if((m=d)||(m=t!==null&&t.memoizedState===null?!1:(it.current&2)!==0),m&&(u=!0,a.flags&=-129),m=(a.flags&32)!==0,a.flags&=-33,t===null){if(Re){if(u?sn(a):un(),Re){var b=$e,S;if(S=b){e:{for(S=b,b=ya;S.nodeType!==8;){if(!b){b=null;break e}if(S=fa(S.nextSibling),S===null){b=null;break e}}b=S}b!==null?(a.memoizedState={dehydrated:b,treeContext:Ln!==null?{id:Fa,overflow:Da}:null,retryLane:536870912,hydrationErrors:null},S=Lt(18,null,null,0),S.stateNode=b,S.return=a,a.child=S,Ot=a,$e=null,S=!0):S=!1}S||Hn(a)}if(b=a.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return rd(b)?a.lanes=32:a.lanes=536870912,null;Ba(a)}return b=r.children,r=r.fallback,u?(un(),u=a.mode,b=qr({mode:"hidden",children:b},u),r=Pn(r,u,o,null),b.return=a,r.return=a,b.sibling=r,a.child=b,u=a.child,u.memoizedState=Cc(o),u.childLanes=Ec(t,m,o),a.memoizedState=wc,r):(sn(a),Oc(a,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(d)a.flags&256?(sn(a),a.flags&=-257,a=Tc(t,a,o)):a.memoizedState!==null?(un(),a.child=t.child,a.flags|=128,a=null):(un(),u=r.fallback,b=a.mode,r=qr({mode:"visible",children:r.children},b),u=Pn(u,b,o,null),u.flags|=2,r.return=a,u.return=a,r.sibling=u,a.child=r,Mi(a,t.child,null,o),r=a.child,r.memoizedState=Cc(o),r.childLanes=Ec(t,m,o),a.memoizedState=wc,a=u);else if(sn(a),rd(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var z=m.dgst;m=z,r=Error(l(419)),r.stack="",r.digest=m,Po({value:r,source:null,stack:null}),a=Tc(t,a,o)}else if(rt||Lo(t,a,o,!1),m=(o&t.childLanes)!==0,rt||m){if(m=je,m!==null&&(r=o&-o,r=(r&42)!==0?1:su(r),r=(r&(m.suspendedLanes|o))!==0?0:r,r!==0&&r!==S.retryLane))throw S.retryLane=r,ki(t,r),Gt(m,t,r),ch;b.data==="$?"||Uc(),a=Tc(t,a,o)}else b.data==="$?"?(a.flags|=192,a.child=t.child,a=null):(t=S.treeContext,$e=fa(b.nextSibling),Ot=a,Re=!0,jn=null,ya=!1,t!==null&&(aa[na++]=Fa,aa[na++]=Da,aa[na++]=Ln,Fa=t.id,Da=t.overflow,Ln=a),a=Oc(a,r.children),a.flags|=4096);return a}return u?(un(),u=r.fallback,b=a.mode,S=t.child,z=S.sibling,r=qa(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,z!==null?u=qa(z,u):(u=Pn(u,b,o,null),u.flags|=2),u.return=a,r.return=a,r.sibling=u,a.child=r,r=u,u=a.child,b=t.child.memoizedState,b===null?b=Cc(o):(S=b.cachePool,S!==null?(z=nt._currentValue,S=S.parent!==z?{parent:z,pool:z}:S):S=om(),b={baseLanes:b.baseLanes|o,cachePool:S}),u.memoizedState=b,u.childLanes=Ec(t,m,o),a.memoizedState=wc,r):(sn(a),o=t.child,t=o.sibling,o=qa(o,{mode:"visible",children:r.children}),o.return=a,o.sibling=null,t!==null&&(m=a.deletions,m===null?(a.deletions=[t],a.flags|=16):m.push(t)),a.child=o,a.memoizedState=null,o)}function Oc(t,a){return a=qr({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function qr(t,a){return t=Lt(22,t,null,a),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tc(t,a,o){return Mi(a,t.child,null,o),t=Oc(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function xh(t,a,o){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a),Uu(t.return,a,o)}function kc(t,a,o,r,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:r,tail:o,tailMode:u}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=o,d.tailMode=u)}function Sh(t,a,o){var r=a.pendingProps,u=r.revealOrder,d=r.tail;if(ft(t,a,r.children,o),r=it.current,(r&2)!==0)r=r&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xh(t,o,a);else if(t.tag===19)xh(t,o,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(X(it,r),u){case"forwards":for(o=a.child,u=null;o!==null;)t=o.alternate,t!==null&&Nr(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=a.child,a.child=null):(u=o.sibling,o.sibling=null),kc(a,!1,u,o,d);break;case"backwards":for(o=null,u=a.child,a.child=null;u!==null;){if(t=u.alternate,t!==null&&Nr(t)===null){a.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}kc(a,!0,o,null,d);break;case"together":kc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ja(t,a,o){if(t!==null&&(a.dependencies=t.dependencies),mn|=a.lanes,(o&a.childLanes)===0)if(t!==null){if(Lo(t,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(l(153));if(a.child!==null){for(t=a.child,o=qa(t,t.pendingProps),a.child=o,o.return=a;t.sibling!==null;)t=t.sibling,o=o.sibling=qa(t,t.pendingProps),o.return=a;o.sibling=null}return a.child}function Ac(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&hr(t)))}function A2(t,a,o){switch(a.tag){case 3:H(a,a.stateNode.containerInfo),an(a,nt,t.memoizedState.cache),Mo();break;case 27:case 5:ve(a);break;case 4:H(a,a.stateNode.containerInfo);break;case 10:an(a,a.type,a.memoizedProps.value);break;case 13:var r=a.memoizedState;if(r!==null)return r.dehydrated!==null?(sn(a),a.flags|=128,null):(o&a.child.childLanes)!==0?vh(t,a,o):(sn(a),t=ja(t,a,o),t!==null?t.sibling:null);sn(a);break;case 19:var u=(t.flags&128)!==0;if(r=(o&a.childLanes)!==0,r||(Lo(t,a,o,!1),r=(o&a.childLanes)!==0),u){if(r)return Sh(t,a,o);a.flags|=128}if(u=a.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),X(it,it.current),r)break;return null;case 22:case 23:return a.lanes=0,mh(t,a,o);case 24:an(a,nt,t.memoizedState.cache)}return ja(t,a,o)}function wh(t,a,o){if(t!==null)if(t.memoizedProps!==a.pendingProps)rt=!0;else{if(!Ac(t,o)&&(a.flags&128)===0)return rt=!1,A2(t,a,o);rt=(t.flags&131072)!==0}else rt=!1,Re&&(a.flags&1048576)!==0&&Qg(a,mr,a.index);switch(a.lanes=0,a.tag){case 16:e:{t=a.pendingProps;var r=a.elementType,u=r._init;if(r=u(r._payload),a.type=r,typeof r=="function")Du(r)?(t=Yn(r,t),a.tag=1,a=bh(null,a,r,t,o)):(a.tag=0,a=Sc(null,a,r,t,o));else{if(r!=null){if(u=r.$$typeof,u===P){a.tag=11,a=dh(null,a,r,t,o);break e}else if(u===Q){a.tag=14,a=fh(null,a,r,t,o);break e}}throw a=Ce(r)||r,Error(l(306,a,""))}}return a;case 0:return Sc(t,a,a.type,a.pendingProps,o);case 1:return r=a.type,u=Yn(r,a.pendingProps),bh(t,a,r,u,o);case 3:e:{if(H(a,a.stateNode.containerInfo),t===null)throw Error(l(387));r=a.pendingProps;var d=a.memoizedState;u=d.element,Zu(t,a),$o(a,r,null,o);var m=a.memoizedState;if(r=m.cache,an(a,nt,r),r!==d.cache&&Gu(a,[nt],o,!0),Wo(),r=m.element,d.isDehydrated)if(d={element:r,isDehydrated:!1,cache:m.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=yh(t,a,r,o);break e}else if(r!==u){u=ea(Error(l(424)),a),Po(u),a=yh(t,a,r,o);break e}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$e=fa(t.firstChild),Ot=a,Re=!0,jn=null,ya=!0,o=eh(a,null,r,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Mo(),r===u){a=ja(t,a,o);break e}ft(t,a,r,o)}a=a.child}return a;case 26:return Vr(t,a),t===null?(o=Tp(a.type,null,a.pendingProps,null))?a.memoizedState=o:Re||(o=a.type,t=a.pendingProps,r=Kr(me.current).createElement(o),r[xt]=a,r[Tt]=t,mt(r,o,t),lt(r),a.stateNode=r):a.memoizedState=Tp(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return ve(a),t===null&&Re&&(r=a.stateNode=Cp(a.type,a.pendingProps,me.current),Ot=a,ya=!0,u=$e,yn(a.type)?(sd=u,$e=fa(r.firstChild)):$e=u),ft(t,a,a.pendingProps.children,o),Vr(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Re&&((u=r=$e)&&(r=ax(r,a.type,a.pendingProps,ya),r!==null?(a.stateNode=r,Ot=a,$e=fa(r.firstChild),ya=!1,u=!0):u=!1),u||Hn(a)),ve(a),u=a.type,d=a.pendingProps,m=t!==null?t.memoizedProps:null,r=d.children,id(u,d)?r=null:m!==null&&id(u,m)&&(a.flags|=32),a.memoizedState!==null&&(u=nc(t,a,x2,null,null,o),hl._currentValue=u),Vr(t,a),ft(t,a,r,o),a.child;case 6:return t===null&&Re&&((t=o=$e)&&(o=nx(o,a.pendingProps,ya),o!==null?(a.stateNode=o,Ot=a,$e=null,t=!0):t=!1),t||Hn(a)),null;case 13:return vh(t,a,o);case 4:return H(a,a.stateNode.containerInfo),r=a.pendingProps,t===null?a.child=Mi(a,null,r,o):ft(t,a,r,o),a.child;case 11:return dh(t,a,a.type,a.pendingProps,o);case 7:return ft(t,a,a.pendingProps,o),a.child;case 8:return ft(t,a,a.pendingProps.children,o),a.child;case 12:return ft(t,a,a.pendingProps.children,o),a.child;case 10:return r=a.pendingProps,an(a,a.type,r.value),ft(t,a,r.children,o),a.child;case 9:return u=a.type._context,r=a.pendingProps.children,Gn(a),u=St(u),r=r(u),a.flags|=1,ft(t,a,r,o),a.child;case 14:return fh(t,a,a.type,a.pendingProps,o);case 15:return gh(t,a,a.type,a.pendingProps,o);case 19:return Sh(t,a,o);case 31:return r=a.pendingProps,o=a.mode,r={mode:r.mode,children:r.children},t===null?(o=qr(r,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=qa(t.child,r),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return mh(t,a,o);case 24:return Gn(a),r=St(nt),t===null?(u=Yu(),u===null&&(u=je,d=Wu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=o),u=d),a.memoizedState={parent:r,cache:u},Xu(a),an(a,nt,u)):((t.lanes&o)!==0&&(Zu(t,a),$o(a,null,null,o),Wo()),u=t.memoizedState,d=a.memoizedState,u.parent!==r?(u={parent:r,cache:r},a.memoizedState=u,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=u),an(a,nt,r)):(r=d.cache,an(a,nt,r),r!==u.cache&&Gu(a,[nt],o,!0))),ft(t,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(l(156,a.tag))}function Ha(t){t.flags|=4}function Ch(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Np(a)){if(a=ia.current,a!==null&&((Ee&4194048)===Ee?va!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||a!==va))throw Uo=Ku,lm;t.flags|=8192}}function Fr(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?tg():536870912,t.lanes|=a,ji|=a)}function el(t,a){if(!Re)switch(t.tailMode){case"hidden":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var r=null;o!==null;)o.alternate!==null&&(r=o),o=o.sibling;r===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var a=t.alternate!==null&&t.alternate.child===t.child,o=0,r=0;if(a)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=o,a}function R2(t,a,o){var r=a.pendingProps;switch(Bu(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(a),null;case 1:return We(a),null;case 3:return o=a.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Pa(nt),W(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Do(a)?Ha(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,tm())),We(a),null;case 26:return o=a.memoizedState,t===null?(Ha(a),o!==null?(We(a),Ch(a,o)):(We(a),a.flags&=-16777217)):o?o!==t.memoizedState?(Ha(a),We(a),Ch(a,o)):(We(a),a.flags&=-16777217):(t.memoizedProps!==r&&Ha(a),We(a),a.flags&=-16777217),null;case 27:ze(a),o=me.current;var u=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==r&&Ha(a);else{if(!r){if(a.stateNode===null)throw Error(l(166));return We(a),null}t=oe.current,Do(a)?Jg(a):(t=Cp(u,r,o),a.stateNode=t,Ha(a))}return We(a),null;case 5:if(ze(a),o=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==r&&Ha(a);else{if(!r){if(a.stateNode===null)throw Error(l(166));return We(a),null}if(t=oe.current,Do(a))Jg(a);else{switch(u=Kr(me.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?u.createElement("select",{is:r.is}):u.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?u.createElement(o,{is:r.is}):u.createElement(o)}}t[xt]=a,t[Tt]=r;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=t;e:switch(mt(t,o,r),o){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ha(a)}}return We(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==r&&Ha(a);else{if(typeof r!="string"&&a.stateNode===null)throw Error(l(166));if(t=me.current,Do(a)){if(t=a.stateNode,o=a.memoizedProps,r=null,u=Ot,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[xt]=a,t=!!(t.nodeValue===o||r!==null&&r.suppressHydrationWarning===!0||pp(t.nodeValue,o)),t||Hn(a)}else t=Kr(t).createTextNode(r),t[xt]=a,a.stateNode=t}return We(a),null;case 13:if(r=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Do(a),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(l(318));if(u=a.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[xt]=a}else Mo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;We(a),u=!1}else u=tm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return a.flags&256?(Ba(a),a):(Ba(a),null)}if(Ba(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=r!==null,t=t!==null&&t.memoizedState!==null,o){r=a.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool);var d=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==u&&(r.flags|=2048)}return o!==t&&o&&(a.child.flags|=8192),Fr(a,a.updateQueue),We(a),null;case 4:return W(),t===null&&Jc(a.stateNode.containerInfo),We(a),null;case 10:return Pa(a.type),We(a),null;case 19:if(Z(it),u=a.memoizedState,u===null)return We(a),null;if(r=(a.flags&128)!==0,d=u.rendering,d===null)if(r)el(u,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(d=Nr(t),d!==null){for(a.flags|=128,el(u,!1),t=d.updateQueue,a.updateQueue=t,Fr(a,t),a.subtreeFlags=0,t=o,o=a.child;o!==null;)Zg(o,t),o=o.sibling;return X(it,it.current&1|2),a.child}t=t.sibling}u.tail!==null&&Zt()>Pr&&(a.flags|=128,r=!0,el(u,!1),a.lanes=4194304)}else{if(!r)if(t=Nr(d),t!==null){if(a.flags|=128,r=!0,t=t.updateQueue,a.updateQueue=t,Fr(a,t),el(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Re)return We(a),null}else 2*Zt()-u.renderingStartTime>Pr&&o!==536870912&&(a.flags|=128,r=!0,el(u,!1),a.lanes=4194304);u.isBackwards?(d.sibling=a.child,a.child=d):(t=u.last,t!==null?t.sibling=d:a.child=d,u.last=d)}return u.tail!==null?(a=u.tail,u.rendering=a,u.tail=a.sibling,u.renderingStartTime=Zt(),a.sibling=null,t=it.current,X(it,r?t&1|2:t&1),a):(We(a),null);case 22:case 23:return Ba(a),tc(),r=a.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(a.flags|=8192):r&&(a.flags|=8192),r?(o&536870912)!==0&&(a.flags&128)===0&&(We(a),a.subtreeFlags&6&&(a.flags|=8192)):We(a),o=a.updateQueue,o!==null&&Fr(a,o.retryQueue),o=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==o&&(a.flags|=2048),t!==null&&Z(Wn),null;case 24:return o=null,t!==null&&(o=t.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Pa(nt),We(a),null;case 25:return null;case 30:return null}throw Error(l(156,a.tag))}function _2(t,a){switch(Bu(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Pa(nt),W(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return ze(a),null;case 13:if(Ba(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(l(340));Mo()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Z(it),null;case 4:return W(),null;case 10:return Pa(a.type),null;case 22:case 23:return Ba(a),tc(),t!==null&&Z(Wn),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Pa(nt),null;case 25:return null;default:return null}}function Eh(t,a){switch(Bu(a),a.tag){case 3:Pa(nt),W();break;case 26:case 27:case 5:ze(a);break;case 4:W();break;case 13:Ba(a);break;case 19:Z(it);break;case 10:Pa(a.type);break;case 22:case 23:Ba(a),tc(),t!==null&&Z(Wn);break;case 24:Pa(nt)}}function tl(t,a){try{var o=a.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var u=r.next;o=u;do{if((o.tag&t)===t){r=void 0;var d=o.create,m=o.inst;r=d(),m.destroy=r}o=o.next}while(o!==u)}}catch(b){Pe(a,a.return,b)}}function cn(t,a,o){try{var r=a.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var d=u.next;r=d;do{if((r.tag&t)===t){var m=r.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,u=a;var S=o,z=b;try{z()}catch(M){Pe(u,S,M)}}}r=r.next}while(r!==d)}}catch(M){Pe(a,a.return,M)}}function Oh(t){var a=t.updateQueue;if(a!==null){var o=t.stateNode;try{fm(a,o)}catch(r){Pe(t,t.return,r)}}}function Th(t,a,o){o.props=Yn(t.type,t.memoizedProps),o.state=t.memoizedState;try{o.componentWillUnmount()}catch(r){Pe(t,a,r)}}function al(t,a){try{var o=t.ref;if(o!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof o=="function"?t.refCleanup=o(r):o.current=r}}catch(u){Pe(t,a,u)}}function xa(t,a){var o=t.ref,r=t.refCleanup;if(o!==null)if(typeof r=="function")try{r()}catch(u){Pe(t,a,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(u){Pe(t,a,u)}else o.current=null}function kh(t){var a=t.type,o=t.memoizedProps,r=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break e;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}catch(u){Pe(t,t.return,u)}}function Rc(t,a,o){try{var r=t.stateNode;Z2(r,t.type,o,a),r[Tt]=a}catch(u){Pe(t,t.return,u)}}function Ah(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&yn(t.type)||t.tag===4}function _c(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ah(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&yn(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nc(t,a,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(t,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(t),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Yr));else if(r!==4&&(r===27&&yn(t.type)&&(o=t.stateNode,a=null),t=t.child,t!==null))for(Nc(t,a,o),t=t.sibling;t!==null;)Nc(t,a,o),t=t.sibling}function Dr(t,a,o){var r=t.tag;if(r===5||r===6)t=t.stateNode,a?o.insertBefore(t,a):o.appendChild(t);else if(r!==4&&(r===27&&yn(t.type)&&(o=t.stateNode),t=t.child,t!==null))for(Dr(t,a,o),t=t.sibling;t!==null;)Dr(t,a,o),t=t.sibling}function Rh(t){var a=t.stateNode,o=t.memoizedProps;try{for(var r=t.type,u=a.attributes;u.length;)a.removeAttributeNode(u[0]);mt(a,r,o),a[xt]=t,a[Tt]=o}catch(d){Pe(t,t.return,d)}}var Ua=!1,Ze=!1,zc=!1,_h=typeof WeakSet=="function"?WeakSet:Set,st=null;function N2(t,a){if(t=t.containerInfo,ad=ts,t=Bg(t),_u(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var r=o.getSelection&&o.getSelection();if(r&&r.rangeCount!==0){o=r.anchorNode;var u=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var m=0,b=-1,S=-1,z=0,M=0,j=t,V=null;t:for(;;){for(var q;j!==o||u!==0&&j.nodeType!==3||(b=m+u),j!==d||r!==0&&j.nodeType!==3||(S=m+r),j.nodeType===3&&(m+=j.nodeValue.length),(q=j.firstChild)!==null;)V=j,j=q;for(;;){if(j===t)break t;if(V===o&&++z===u&&(b=m),V===d&&++M===r&&(S=m),(q=j.nextSibling)!==null)break;j=V,V=j.parentNode}j=q}o=b===-1||S===-1?null:{start:b,end:S}}else o=null}o=o||{start:0,end:0}}else o=null;for(nd={focusedElem:t,selectionRange:o},ts=!1,st=a;st!==null;)if(a=st,t=a.child,(a.subtreeFlags&1024)!==0&&t!==null)t.return=a,st=t;else for(;st!==null;){switch(a=st,d=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,o=a,u=d.memoizedProps,d=d.memoizedState,r=o.stateNode;try{var he=Yn(o.type,u,o.elementType===o.type);t=r.getSnapshotBeforeUpdate(he,d),r.__reactInternalSnapshotBeforeUpdate=t}catch(se){Pe(o,o.return,se)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,o=t.nodeType,o===9)ld(t);else if(o===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=a.sibling,t!==null){t.return=a.return,st=t;break}st=a.return}}function Nh(t,a,o){var r=o.flags;switch(o.tag){case 0:case 11:case 15:dn(t,o),r&4&&tl(5,o);break;case 1:if(dn(t,o),r&4)if(t=o.stateNode,a===null)try{t.componentDidMount()}catch(m){Pe(o,o.return,m)}else{var u=Yn(o.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(u,a,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Pe(o,o.return,m)}}r&64&&Oh(o),r&512&&al(o,o.return);break;case 3:if(dn(t,o),r&64&&(t=o.updateQueue,t!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{fm(t,a)}catch(m){Pe(o,o.return,m)}}break;case 27:a===null&&r&4&&Rh(o);case 26:case 5:dn(t,o),a===null&&r&4&&kh(o),r&512&&al(o,o.return);break;case 12:dn(t,o);break;case 13:dn(t,o),r&4&&Vh(t,o),r&64&&(t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(o=L2.bind(null,o),ix(t,o))));break;case 22:if(r=o.memoizedState!==null||Ua,!r){a=a!==null&&a.memoizedState!==null||Ze,u=Ua;var d=Ze;Ua=r,(Ze=a)&&!d?fn(t,o,(o.subtreeFlags&8772)!==0):dn(t,o),Ua=u,Ze=d}break;case 30:break;default:dn(t,o)}}function zh(t){var a=t.alternate;a!==null&&(t.alternate=null,zh(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&du(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ue=null,Rt=!1;function Ga(t,a,o){for(o=o.child;o!==null;)Ih(t,a,o),o=o.sibling}function Ih(t,a,o){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Co,o)}catch{}switch(o.tag){case 26:Ze||xa(o,a),Ga(t,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ze||xa(o,a);var r=Ue,u=Rt;yn(o.type)&&(Ue=o.stateNode,Rt=!1),Ga(t,a,o),dl(o.stateNode),Ue=r,Rt=u;break;case 5:Ze||xa(o,a);case 6:if(r=Ue,u=Rt,Ue=null,Ga(t,a,o),Ue=r,Rt=u,Ue!==null)if(Rt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(o.stateNode)}catch(d){Pe(o,a,d)}else try{Ue.removeChild(o.stateNode)}catch(d){Pe(o,a,d)}break;case 18:Ue!==null&&(Rt?(t=Ue,Sp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,o.stateNode),vl(t)):Sp(Ue,o.stateNode));break;case 4:r=Ue,u=Rt,Ue=o.stateNode.containerInfo,Rt=!0,Ga(t,a,o),Ue=r,Rt=u;break;case 0:case 11:case 14:case 15:Ze||cn(2,o,a),Ze||cn(4,o,a),Ga(t,a,o);break;case 1:Ze||(xa(o,a),r=o.stateNode,typeof r.componentWillUnmount=="function"&&Th(o,a,r)),Ga(t,a,o);break;case 21:Ga(t,a,o);break;case 22:Ze=(r=Ze)||o.memoizedState!==null,Ga(t,a,o),Ze=r;break;default:Ga(t,a,o)}}function Vh(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vl(t)}catch(o){Pe(a,a.return,o)}}function z2(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new _h),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new _h),a;default:throw Error(l(435,t.tag))}}function Ic(t,a){var o=z2(t);a.forEach(function(r){var u=B2.bind(null,t,r);o.has(r)||(o.add(r),r.then(u,u))})}function Bt(t,a){var o=a.deletions;if(o!==null)for(var r=0;r<o.length;r++){var u=o[r],d=t,m=a,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(yn(b.type)){Ue=b.stateNode,Rt=!1;break e}break;case 5:Ue=b.stateNode,Rt=!1;break e;case 3:case 4:Ue=b.stateNode.containerInfo,Rt=!0;break e}b=b.return}if(Ue===null)throw Error(l(160));Ih(d,m,u),Ue=null,Rt=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)qh(a,t),a=a.sibling}var da=null;function qh(t,a){var o=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bt(a,t),jt(t),r&4&&(cn(3,t,t.return),tl(3,t),cn(5,t,t.return));break;case 1:Bt(a,t),jt(t),r&512&&(Ze||o===null||xa(o,o.return)),r&64&&Ua&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(o=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=o===null?r:o.concat(r))));break;case 26:var u=da;if(Bt(a,t),jt(t),r&512&&(Ze||o===null||xa(o,o.return)),r&4){var d=o!==null?o.memoizedState:null;if(r=t.memoizedState,o===null)if(r===null)if(t.stateNode===null){e:{r=t.type,o=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":d=u.getElementsByTagName("title")[0],(!d||d[To]||d[xt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(r),u.head.insertBefore(d,u.querySelector("head > title"))),mt(d,r,o),d[xt]=t,lt(d),r=d;break e;case"link":var m=Rp("link","href",u).get(r+(o.href||""));if(m){for(var b=0;b<m.length;b++)if(d=m[b],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){m.splice(b,1);break t}}d=u.createElement(r),mt(d,r,o),u.head.appendChild(d);break;case"meta":if(m=Rp("meta","content",u).get(r+(o.content||""))){for(b=0;b<m.length;b++)if(d=m[b],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){m.splice(b,1);break t}}d=u.createElement(r),mt(d,r,o),u.head.appendChild(d);break;default:throw Error(l(468,r))}d[xt]=t,lt(d),r=d}t.stateNode=r}else _p(u,t.type,t.stateNode);else t.stateNode=Ap(u,r,t.memoizedProps);else d!==r?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,r===null?_p(u,t.type,t.stateNode):Ap(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Rc(t,t.memoizedProps,o.memoizedProps)}break;case 27:Bt(a,t),jt(t),r&512&&(Ze||o===null||xa(o,o.return)),o!==null&&r&4&&Rc(t,t.memoizedProps,o.memoizedProps);break;case 5:if(Bt(a,t),jt(t),r&512&&(Ze||o===null||xa(o,o.return)),t.flags&32){u=t.stateNode;try{xi(u,"")}catch(q){Pe(t,t.return,q)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,Rc(t,u,o!==null?o.memoizedProps:u)),r&1024&&(zc=!0);break;case 6:if(Bt(a,t),jt(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,o=t.stateNode;try{o.nodeValue=r}catch(q){Pe(t,t.return,q)}}break;case 3:if(Qr=null,u=da,da=Xr(a.containerInfo),Bt(a,t),da=u,jt(t),r&4&&o!==null&&o.memoizedState.isDehydrated)try{vl(a.containerInfo)}catch(q){Pe(t,t.return,q)}zc&&(zc=!1,Fh(t));break;case 4:r=da,da=Xr(t.stateNode.containerInfo),Bt(a,t),jt(t),da=r;break;case 12:Bt(a,t),jt(t);break;case 13:Bt(a,t),jt(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Pc=Zt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ic(t,r)));break;case 22:u=t.memoizedState!==null;var S=o!==null&&o.memoizedState!==null,z=Ua,M=Ze;if(Ua=z||u,Ze=M||S,Bt(a,t),Ze=M,Ua=z,jt(t),r&8192)e:for(a=t.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,u&&(o===null||S||Ua||Ze||Kn(t)),o=null,a=t;;){if(a.tag===5||a.tag===26){if(o===null){S=o=a;try{if(d=S.stateNode,u)m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=S.stateNode;var j=S.memoizedProps.style,V=j!=null&&j.hasOwnProperty("display")?j.display:null;b.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(q){Pe(S,S.return,q)}}}else if(a.tag===6){if(o===null){S=a;try{S.stateNode.nodeValue=u?"":S.memoizedProps}catch(q){Pe(S,S.return,q)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}r&4&&(r=t.updateQueue,r!==null&&(o=r.retryQueue,o!==null&&(r.retryQueue=null,Ic(t,o))));break;case 19:Bt(a,t),jt(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ic(t,r)));break;case 30:break;case 21:break;default:Bt(a,t),jt(t)}}function jt(t){var a=t.flags;if(a&2){try{for(var o,r=t.return;r!==null;){if(Ah(r)){o=r;break}r=r.return}if(o==null)throw Error(l(160));switch(o.tag){case 27:var u=o.stateNode,d=_c(t);Dr(t,d,u);break;case 5:var m=o.stateNode;o.flags&32&&(xi(m,""),o.flags&=-33);var b=_c(t);Dr(t,b,m);break;case 3:case 4:var S=o.stateNode.containerInfo,z=_c(t);Nc(t,z,S);break;default:throw Error(l(161))}}catch(M){Pe(t,t.return,M)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Fh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Fh(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function dn(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Nh(t,a.alternate,a),a=a.sibling}function Kn(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:cn(4,a,a.return),Kn(a);break;case 1:xa(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&Th(a,a.return,o),Kn(a);break;case 27:dl(a.stateNode);case 26:case 5:xa(a,a.return),Kn(a);break;case 22:a.memoizedState===null&&Kn(a);break;case 30:Kn(a);break;default:Kn(a)}t=t.sibling}}function fn(t,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var r=a.alternate,u=t,d=a,m=d.flags;switch(d.tag){case 0:case 11:case 15:fn(u,d,o),tl(4,d);break;case 1:if(fn(u,d,o),r=d,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(z){Pe(r,r.return,z)}if(r=d,u=r.updateQueue,u!==null){var b=r.stateNode;try{var S=u.shared.hiddenCallbacks;if(S!==null)for(u.shared.hiddenCallbacks=null,u=0;u<S.length;u++)dm(S[u],b)}catch(z){Pe(r,r.return,z)}}o&&m&64&&Oh(d),al(d,d.return);break;case 27:Rh(d);case 26:case 5:fn(u,d,o),o&&r===null&&m&4&&kh(d),al(d,d.return);break;case 12:fn(u,d,o);break;case 13:fn(u,d,o),o&&m&4&&Vh(u,d);break;case 22:d.memoizedState===null&&fn(u,d,o),al(d,d.return);break;case 30:break;default:fn(u,d,o)}a=a.sibling}}function Vc(t,a){var o=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==o&&(t!=null&&t.refCount++,o!=null&&Bo(o))}function qc(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Bo(t))}function Sa(t,a,o,r){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Dh(t,a,o,r),a=a.sibling}function Dh(t,a,o,r){var u=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a,o,r),u&2048&&tl(9,a);break;case 1:Sa(t,a,o,r);break;case 3:Sa(t,a,o,r),u&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Bo(t)));break;case 12:if(u&2048){Sa(t,a,o,r),t=a.stateNode;try{var d=a.memoizedProps,m=d.id,b=d.onPostCommit;typeof b=="function"&&b(m,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Pe(a,a.return,S)}}else Sa(t,a,o,r);break;case 13:Sa(t,a,o,r);break;case 23:break;case 22:d=a.stateNode,m=a.alternate,a.memoizedState!==null?d._visibility&2?Sa(t,a,o,r):nl(t,a):d._visibility&2?Sa(t,a,o,r):(d._visibility|=2,Pi(t,a,o,r,(a.subtreeFlags&10256)!==0)),u&2048&&Vc(m,a);break;case 24:Sa(t,a,o,r),u&2048&&qc(a.alternate,a);break;default:Sa(t,a,o,r)}}function Pi(t,a,o,r,u){for(u=u&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var d=t,m=a,b=o,S=r,z=m.flags;switch(m.tag){case 0:case 11:case 15:Pi(d,m,b,S,u),tl(8,m);break;case 23:break;case 22:var M=m.stateNode;m.memoizedState!==null?M._visibility&2?Pi(d,m,b,S,u):nl(d,m):(M._visibility|=2,Pi(d,m,b,S,u)),u&&z&2048&&Vc(m.alternate,m);break;case 24:Pi(d,m,b,S,u),u&&z&2048&&qc(m.alternate,m);break;default:Pi(d,m,b,S,u)}a=a.sibling}}function nl(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=t,r=a,u=r.flags;switch(r.tag){case 22:nl(o,r),u&2048&&Vc(r.alternate,r);break;case 24:nl(o,r),u&2048&&qc(r.alternate,r);break;default:nl(o,r)}a=a.sibling}}var il=8192;function Li(t){if(t.subtreeFlags&il)for(t=t.child;t!==null;)Mh(t),t=t.sibling}function Mh(t){switch(t.tag){case 26:Li(t),t.flags&il&&t.memoizedState!==null&&bx(da,t.memoizedState,t.memoizedProps);break;case 5:Li(t);break;case 3:case 4:var a=da;da=Xr(t.stateNode.containerInfo),Li(t),da=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=il,il=16777216,Li(t),il=a):Li(t));break;default:Li(t)}}function Ph(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function ol(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var r=a[o];st=r,Bh(r,t)}Ph(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lh(t),t=t.sibling}function Lh(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&cn(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,Mr(t)):ol(t);break;default:ol(t)}}function Mr(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var r=a[o];st=r,Bh(r,t)}Ph(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:cn(8,a,a.return),Mr(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,Mr(a));break;default:Mr(a)}t=t.sibling}}function Bh(t,a){for(;st!==null;){var o=st;switch(o.tag){case 0:case 11:case 15:cn(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var r=o.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Bo(o.memoizedState.cache)}if(r=o.child,r!==null)r.return=o,st=r;else e:for(o=t;st!==null;){r=st;var u=r.sibling,d=r.return;if(zh(r),r===o){st=null;break e}if(u!==null){u.return=d,st=u;break e}st=d}}}var I2={getCacheForType:function(t){var a=St(nt),o=a.data.get(t);return o===void 0&&(o=t(),a.data.set(t,o)),o}},V2=typeof WeakMap=="function"?WeakMap:Map,Ve=0,je=null,Se=null,Ee=0,qe=0,Ht=null,gn=!1,Bi=!1,Fc=!1,Wa=0,Ye=0,mn=0,Xn=0,Dc=0,oa=0,ji=0,ll=null,_t=null,Mc=!1,Pc=0,Pr=1/0,Lr=null,hn=null,gt=0,pn=null,Hi=null,Ui=0,Lc=0,Bc=null,jh=null,rl=0,jc=null;function Ut(){if((Ve&2)!==0&&Ee!==0)return Ee&-Ee;if(D.T!==null){var t=Ni;return t!==0?t:Kc()}return ig()}function Hh(){oa===0&&(oa=(Ee&536870912)===0||Re?eg():536870912);var t=ia.current;return t!==null&&(t.flags|=32),oa}function Gt(t,a,o){(t===je&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(Gi(t,0),bn(t,Ee,oa,!1)),Oo(t,o),((Ve&2)===0||t!==je)&&(t===je&&((Ve&2)===0&&(Xn|=o),Ye===4&&bn(t,Ee,oa,!1)),wa(t))}function Uh(t,a,o){if((Ve&6)!==0)throw Error(l(327));var r=!o&&(a&124)===0&&(a&t.expiredLanes)===0||Eo(t,a),u=r?D2(t,a):Gc(t,a,!0),d=r;do{if(u===0){Bi&&!r&&bn(t,a,0,!1);break}else{if(o=t.current.alternate,d&&!q2(o)){u=Gc(t,a,!1),d=!1;continue}if(u===2){if(d=a,t.errorRecoveryDisabledLanes&d)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){a=m;e:{var b=t;u=ll;var S=b.current.memoizedState.isDehydrated;if(S&&(Gi(b,m).flags|=256),m=Gc(b,m,!1),m!==2){if(Fc&&!S){b.errorRecoveryDisabledLanes|=d,Xn|=d,u=4;break e}d=_t,_t=u,d!==null&&(_t===null?_t=d:_t.push.apply(_t,d))}u=m}if(d=!1,u!==2)continue}}if(u===1){Gi(t,0),bn(t,a,0,!0);break}e:{switch(r=t,d=u,d){case 0:case 1:throw Error(l(345));case 4:if((a&4194048)!==a)break;case 6:bn(r,a,oa,!gn);break e;case 2:_t=null;break;case 3:case 5:break;default:throw Error(l(329))}if((a&62914560)===a&&(u=Pc+300-Zt(),10<u)){if(bn(r,a,oa,!gn),Zl(r,0,!0)!==0)break e;r.timeoutHandle=vp(Gh.bind(null,r,o,_t,Lr,Mc,a,oa,Xn,ji,gn,d,2,-0,0),u);break e}Gh(r,o,_t,Lr,Mc,a,oa,Xn,ji,gn,d,0,-0,0)}}break}while(!0);wa(t)}function Gh(t,a,o,r,u,d,m,b,S,z,M,j,V,q){if(t.timeoutHandle=-1,j=a.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(ml={stylesheets:null,count:0,unsuspend:px},Mh(a),j=yx(),j!==null)){t.cancelPendingCommit=j(Qh.bind(null,t,a,d,o,r,u,m,b,S,M,1,V,q)),bn(t,d,m,!z);return}Qh(t,a,d,o,r,u,m,b,S)}function q2(t){for(var a=t;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var r=0;r<o.length;r++){var u=o[r],d=u.getSnapshot;u=u.value;try{if(!Pt(d(),u))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function bn(t,a,o,r){a&=~Dc,a&=~Xn,t.suspendedLanes|=a,t.pingedLanes&=~a,r&&(t.warmLanes|=a),r=t.expirationTimes;for(var u=a;0<u;){var d=31-Mt(u),m=1<<d;r[d]=-1,u&=~m}o!==0&&ag(t,o,a)}function Br(){return(Ve&6)===0?(sl(0),!1):!0}function Hc(){if(Se!==null){if(qe===0)var t=Se.return;else t=Se,Ma=Un=null,lc(t),Di=null,Qo=0,t=Se;for(;t!==null;)Eh(t.alternate,t),t=t.return;Se=null}}function Gi(t,a){var o=t.timeoutHandle;o!==-1&&(t.timeoutHandle=-1,J2(o)),o=t.cancelPendingCommit,o!==null&&(t.cancelPendingCommit=null,o()),Hc(),je=t,Se=o=qa(t.current,null),Ee=a,qe=0,Ht=null,gn=!1,Bi=Eo(t,a),Fc=!1,ji=oa=Dc=Xn=mn=Ye=0,_t=ll=null,Mc=!1,(a&8)!==0&&(a|=a&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=a;0<r;){var u=31-Mt(r),d=1<<u;a|=t[u],r&=~d}return Wa=a,ur(),o}function Wh(t,a){ye=null,D.H=Ar,a===Ho||a===yr?(a=um(),qe=3):a===lm?(a=um(),qe=4):qe=a===ch?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ht=a,Se===null&&(Ye=1,Ir(t,ea(a,t.current)))}function $h(){var t=D.H;return D.H=Ar,t===null?Ar:t}function Yh(){var t=D.A;return D.A=I2,t}function Uc(){Ye=4,gn||(Ee&4194048)!==Ee&&ia.current!==null||(Bi=!0),(mn&134217727)===0&&(Xn&134217727)===0||je===null||bn(je,Ee,oa,!1)}function Gc(t,a,o){var r=Ve;Ve|=2;var u=$h(),d=Yh();(je!==t||Ee!==a)&&(Lr=null,Gi(t,a)),a=!1;var m=Ye;e:do try{if(qe!==0&&Se!==null){var b=Se,S=Ht;switch(qe){case 8:Hc(),m=6;break e;case 3:case 2:case 9:case 6:ia.current===null&&(a=!0);var z=qe;if(qe=0,Ht=null,Wi(t,b,S,z),o&&Bi){m=0;break e}break;default:z=qe,qe=0,Ht=null,Wi(t,b,S,z)}}F2(),m=Ye;break}catch(M){Wh(t,M)}while(!0);return a&&t.shellSuspendCounter++,Ma=Un=null,Ve=r,D.H=u,D.A=d,Se===null&&(je=null,Ee=0,ur()),m}function F2(){for(;Se!==null;)Kh(Se)}function D2(t,a){var o=Ve;Ve|=2;var r=$h(),u=Yh();je!==t||Ee!==a?(Lr=null,Pr=Zt()+500,Gi(t,a)):Bi=Eo(t,a);e:do try{if(qe!==0&&Se!==null){a=Se;var d=Ht;t:switch(qe){case 1:qe=0,Ht=null,Wi(t,a,d,1);break;case 2:case 9:if(rm(d)){qe=0,Ht=null,Xh(a);break}a=function(){qe!==2&&qe!==9||je!==t||(qe=7),wa(t)},d.then(a,a);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:rm(d)?(qe=0,Ht=null,Xh(a)):(qe=0,Ht=null,Wi(t,a,d,7));break;case 5:var m=null;switch(Se.tag){case 26:m=Se.memoizedState;case 5:case 27:var b=Se;if(!m||Np(m)){qe=0,Ht=null;var S=b.sibling;if(S!==null)Se=S;else{var z=b.return;z!==null?(Se=z,jr(z)):Se=null}break t}}qe=0,Ht=null,Wi(t,a,d,5);break;case 6:qe=0,Ht=null,Wi(t,a,d,6);break;case 8:Hc(),Ye=6;break e;default:throw Error(l(462))}}M2();break}catch(M){Wh(t,M)}while(!0);return Ma=Un=null,D.H=r,D.A=u,Ve=o,Se!==null?0:(je=null,Ee=0,ur(),Ye)}function M2(){for(;Se!==null&&!di();)Kh(Se)}function Kh(t){var a=wh(t.alternate,t,Wa);t.memoizedProps=t.pendingProps,a===null?jr(t):Se=a}function Xh(t){var a=t,o=a.alternate;switch(a.tag){case 15:case 0:a=ph(o,a,a.pendingProps,a.type,void 0,Ee);break;case 11:a=ph(o,a,a.pendingProps,a.type.render,a.ref,Ee);break;case 5:lc(a);default:Eh(o,a),a=Se=Zg(a,Wa),a=wh(o,a,Wa)}t.memoizedProps=t.pendingProps,a===null?jr(t):Se=a}function Wi(t,a,o,r){Ma=Un=null,lc(a),Di=null,Qo=0;var u=a.return;try{if(k2(t,u,a,o,Ee)){Ye=1,Ir(t,ea(o,t.current)),Se=null;return}}catch(d){if(u!==null)throw Se=u,d;Ye=1,Ir(t,ea(o,t.current)),Se=null;return}a.flags&32768?(Re||r===1?t=!0:Bi||(Ee&536870912)!==0?t=!1:(gn=t=!0,(r===2||r===9||r===3||r===6)&&(r=ia.current,r!==null&&r.tag===13&&(r.flags|=16384))),Zh(a,t)):jr(a)}function jr(t){var a=t;do{if((a.flags&32768)!==0){Zh(a,gn);return}t=a.return;var o=R2(a.alternate,a,Wa);if(o!==null){Se=o;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=t}while(a!==null);Ye===0&&(Ye=5)}function Zh(t,a){do{var o=_2(t.alternate,t);if(o!==null){o.flags&=32767,Se=o;return}if(o=t.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(t=t.sibling,t!==null)){Se=t;return}Se=t=o}while(t!==null);Ye=6,Se=null}function Qh(t,a,o,r,u,d,m,b,S){t.cancelPendingCommit=null;do Hr();while(gt!==0);if((Ve&6)!==0)throw Error(l(327));if(a!==null){if(a===t.current)throw Error(l(177));if(d=a.lanes|a.childLanes,d|=qu,p1(t,o,d,m,b,S),t===je&&(Se=je=null,Ee=0),Hi=a,pn=t,Ui=o,Lc=d,Bc=u,jh=r,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,j2(In,function(){return np(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||r){r=D.T,D.T=null,u=G.p,G.p=2,m=Ve,Ve|=4;try{N2(t,a,o)}finally{Ve=m,G.p=u,D.T=r}}gt=1,Jh(),ep(),tp()}}function Jh(){if(gt===1){gt=0;var t=pn,a=Hi,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=D.T,D.T=null;var r=G.p;G.p=2;var u=Ve;Ve|=4;try{qh(a,t);var d=nd,m=Bg(t.containerInfo),b=d.focusedElem,S=d.selectionRange;if(m!==b&&b&&b.ownerDocument&&Lg(b.ownerDocument.documentElement,b)){if(S!==null&&_u(b)){var z=S.start,M=S.end;if(M===void 0&&(M=z),"selectionStart"in b)b.selectionStart=z,b.selectionEnd=Math.min(M,b.value.length);else{var j=b.ownerDocument||document,V=j&&j.defaultView||window;if(V.getSelection){var q=V.getSelection(),he=b.textContent.length,se=Math.min(S.start,he),Me=S.end===void 0?se:Math.min(S.end,he);!q.extend&&se>Me&&(m=Me,Me=se,se=m);var k=Pg(b,se),T=Pg(b,Me);if(k&&T&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==T.node||q.focusOffset!==T.offset)){var R=j.createRange();R.setStart(k.node,k.offset),q.removeAllRanges(),se>Me?(q.addRange(R),q.extend(T.node,T.offset)):(R.setEnd(T.node,T.offset),q.addRange(R))}}}}for(j=[],q=b;q=q.parentNode;)q.nodeType===1&&j.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<j.length;b++){var L=j[b];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}ts=!!ad,nd=ad=null}finally{Ve=u,G.p=r,D.T=o}}t.current=a,gt=2}}function ep(){if(gt===2){gt=0;var t=pn,a=Hi,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=D.T,D.T=null;var r=G.p;G.p=2;var u=Ve;Ve|=4;try{Nh(t,a.alternate,a)}finally{Ve=u,G.p=r,D.T=o}}gt=3}}function tp(){if(gt===4||gt===3){gt=0,So();var t=pn,a=Hi,o=Ui,r=jh;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?gt=5:(gt=0,Hi=pn=null,ap(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(hn=null),uu(o),a=a.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Co,a,void 0,(a.current.flags&128)===128)}catch{}if(r!==null){a=D.T,u=G.p,G.p=2,D.T=null;try{for(var d=t.onRecoverableError,m=0;m<r.length;m++){var b=r[m];d(b.value,{componentStack:b.stack})}}finally{D.T=a,G.p=u}}(Ui&3)!==0&&Hr(),wa(t),u=t.pendingLanes,(o&4194090)!==0&&(u&42)!==0?t===jc?rl++:(rl=0,jc=t):rl=0,sl(0)}}function ap(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Bo(a)))}function Hr(t){return Jh(),ep(),tp(),np()}function np(){if(gt!==5)return!1;var t=pn,a=Lc;Lc=0;var o=uu(Ui),r=D.T,u=G.p;try{G.p=32>o?32:o,D.T=null,o=Bc,Bc=null;var d=pn,m=Ui;if(gt=0,Hi=pn=null,Ui=0,(Ve&6)!==0)throw Error(l(331));var b=Ve;if(Ve|=4,Lh(d.current),Dh(d,d.current,m,o),Ve=b,sl(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Co,d)}catch{}return!0}finally{G.p=u,D.T=r,ap(t,a)}}function ip(t,a,o){a=ea(o,a),a=xc(t.stateNode,a,2),t=ln(t,a,2),t!==null&&(Oo(t,2),wa(t))}function Pe(t,a,o){if(t.tag===3)ip(t,t,o);else for(;a!==null;){if(a.tag===3){ip(a,t,o);break}else if(a.tag===1){var r=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){t=ea(o,t),o=sh(2),r=ln(a,o,2),r!==null&&(uh(o,r,a,t),Oo(r,2),wa(r));break}}a=a.return}}function Wc(t,a,o){var r=t.pingCache;if(r===null){r=t.pingCache=new V2;var u=new Set;r.set(a,u)}else u=r.get(a),u===void 0&&(u=new Set,r.set(a,u));u.has(o)||(Fc=!0,u.add(o),t=P2.bind(null,t,a,o),a.then(t,t))}function P2(t,a,o){var r=t.pingCache;r!==null&&r.delete(a),t.pingedLanes|=t.suspendedLanes&o,t.warmLanes&=~o,je===t&&(Ee&o)===o&&(Ye===4||Ye===3&&(Ee&62914560)===Ee&&300>Zt()-Pc?(Ve&2)===0&&Gi(t,0):Dc|=o,ji===Ee&&(ji=0)),wa(t)}function op(t,a){a===0&&(a=tg()),t=ki(t,a),t!==null&&(Oo(t,a),wa(t))}function L2(t){var a=t.memoizedState,o=0;a!==null&&(o=a.retryLane),op(t,o)}function B2(t,a){var o=0;switch(t.tag){case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(a),op(t,o)}function j2(t,a){return Ke(t,a)}var Ur=null,$i=null,$c=!1,Gr=!1,Yc=!1,Zn=0;function wa(t){t!==$i&&t.next===null&&($i===null?Ur=$i=t:$i=$i.next=t),Gr=!0,$c||($c=!0,U2())}function sl(t,a){if(!Yc&&Gr){Yc=!0;do for(var o=!1,r=Ur;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var d=0;else{var m=r.suspendedLanes,b=r.pingedLanes;d=(1<<31-Mt(42|t)+1)-1,d&=u&~(m&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,up(r,d))}else d=Ee,d=Zl(r,r===je?d:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(d&3)===0||Eo(r,d)||(o=!0,up(r,d));r=r.next}while(o);Yc=!1}}function H2(){lp()}function lp(){Gr=$c=!1;var t=0;Zn!==0&&(Q2()&&(t=Zn),Zn=0);for(var a=Zt(),o=null,r=Ur;r!==null;){var u=r.next,d=rp(r,a);d===0?(r.next=null,o===null?Ur=u:o.next=u,u===null&&($i=o)):(o=r,(t!==0||(d&3)!==0)&&(Gr=!0)),r=u}sl(t)}function rp(t,a){for(var o=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var m=31-Mt(d),b=1<<m,S=u[m];S===-1?((b&o)===0||(b&r)!==0)&&(u[m]=h1(b,a)):S<=a&&(t.expiredLanes|=b),d&=~b}if(a=je,o=Ee,o=Zl(t,t===a?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,o===0||t===a&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ft(r),t.callbackNode=null,t.callbackPriority=0;if((o&3)===0||Eo(t,o)){if(a=o&-o,a===t.callbackPriority)return a;switch(r!==null&&Ft(r),uu(o)){case 2:case 8:o=$l;break;case 32:o=In;break;case 268435456:o=fi;break;default:o=In}return r=sp.bind(null,t),o=Ke(o,r),t.callbackPriority=a,t.callbackNode=o,a}return r!==null&&r!==null&&Ft(r),t.callbackPriority=2,t.callbackNode=null,2}function sp(t,a){if(gt!==0&&gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var o=t.callbackNode;if(Hr()&&t.callbackNode!==o)return null;var r=Ee;return r=Zl(t,t===je?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Uh(t,r,a),rp(t,Zt()),t.callbackNode!=null&&t.callbackNode===o?sp.bind(null,t):null)}function up(t,a){if(Hr())return null;Uh(t,a,!0)}function U2(){ex(function(){(Ve&6)!==0?Ke(wo,H2):lp()})}function Kc(){return Zn===0&&(Zn=eg()),Zn}function cp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ar(""+t)}function dp(t,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,t.id&&o.setAttribute("form",t.id),a.parentNode.insertBefore(o,a),t=new FormData(t),o.parentNode.removeChild(o),t}function G2(t,a,o,r,u){if(a==="submit"&&o&&o.stateNode===u){var d=cp((u[Tt]||null).action),m=r.submitter;m&&(a=(a=m[Tt]||null)?cp(a.formAction):m.getAttribute("formAction"),a!==null&&(d=a,m=null));var b=new lr("action","action",null,r,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Zn!==0){var S=m?dp(u,m):new FormData(u);hc(o,{pending:!0,data:S,method:u.method,action:d},null,S)}}else typeof d=="function"&&(b.preventDefault(),S=m?dp(u,m):new FormData(u),hc(o,{pending:!0,data:S,method:u.method,action:d},d,S))},currentTarget:u}]})}}for(var Xc=0;Xc<Vu.length;Xc++){var Zc=Vu[Xc],W2=Zc.toLowerCase(),$2=Zc[0].toUpperCase()+Zc.slice(1);ca(W2,"on"+$2)}ca(Ug,"onAnimationEnd"),ca(Gg,"onAnimationIteration"),ca(Wg,"onAnimationStart"),ca("dblclick","onDoubleClick"),ca("focusin","onFocus"),ca("focusout","onBlur"),ca(c2,"onTransitionRun"),ca(d2,"onTransitionStart"),ca(f2,"onTransitionCancel"),ca($g,"onTransitionEnd"),bi("onMouseEnter",["mouseout","mouseover"]),bi("onMouseLeave",["mouseout","mouseover"]),bi("onPointerEnter",["pointerout","pointerover"]),bi("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function fp(t,a){a=(a&4)!==0;for(var o=0;o<t.length;o++){var r=t[o],u=r.event;r=r.listeners;e:{var d=void 0;if(a)for(var m=r.length-1;0<=m;m--){var b=r[m],S=b.instance,z=b.currentTarget;if(b=b.listener,S!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=z;try{d(u)}catch(M){zr(M)}u.currentTarget=null,d=S}else for(m=0;m<r.length;m++){if(b=r[m],S=b.instance,z=b.currentTarget,b=b.listener,S!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=z;try{d(u)}catch(M){zr(M)}u.currentTarget=null,d=S}}}}function we(t,a){var o=a[cu];o===void 0&&(o=a[cu]=new Set);var r=t+"__bubble";o.has(r)||(gp(a,t,2,!1),o.add(r))}function Qc(t,a,o){var r=0;a&&(r|=4),gp(o,t,r,a)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function Jc(t){if(!t[Wr]){t[Wr]=!0,lg.forEach(function(o){o!=="selectionchange"&&(Y2.has(o)||Qc(o,!1,t),Qc(o,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Wr]||(a[Wr]=!0,Qc("selectionchange",!1,a))}}function gp(t,a,o,r){switch(Dp(a)){case 2:var u=Sx;break;case 8:u=wx;break;default:u=gd}o=u.bind(null,a,o,t),u=void 0,!Su||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(a,o,{capture:!0,passive:u}):t.addEventListener(a,o,!0):u!==void 0?t.addEventListener(a,o,{passive:u}):t.addEventListener(a,o,!1)}function ed(t,a,o,r,u){var d=r;if((a&1)===0&&(a&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var b=r.stateNode.containerInfo;if(b===u)break;if(m===4)for(m=r.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===u)return;m=m.return}for(;b!==null;){if(m=mi(b),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){r=d=m;continue e}b=b.parentNode}}r=r.return}xg(function(){var z=d,M=vu(o),j=[];e:{var V=Yg.get(t);if(V!==void 0){var q=lr,he=t;switch(t){case"keypress":if(ir(o)===0)break e;case"keydown":case"keyup":q=j1;break;case"focusin":he="focus",q=Ou;break;case"focusout":he="blur",q=Ou;break;case"beforeblur":case"afterblur":q=Ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=_1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=G1;break;case Ug:case Gg:case Wg:q=I1;break;case $g:q=$1;break;case"scroll":case"scrollend":q=A1;break;case"wheel":q=K1;break;case"copy":case"cut":case"paste":q=q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Og;break;case"toggle":case"beforetoggle":q=Z1}var se=(a&4)!==0,Me=!se&&(t==="scroll"||t==="scrollend"),k=se?V!==null?V+"Capture":null:V;se=[];for(var T=z,R;T!==null;){var L=T;if(R=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||R===null||k===null||(L=Ao(T,k),L!=null&&se.push(cl(T,L,R))),Me)break;T=T.return}0<se.length&&(V=new q(V,he,null,o,M),j.push({event:V,listeners:se}))}}if((a&7)===0){e:{if(V=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",V&&o!==yu&&(he=o.relatedTarget||o.fromElement)&&(mi(he)||he[gi]))break e;if((q||V)&&(V=M.window===M?M:(V=M.ownerDocument)?V.defaultView||V.parentWindow:window,q?(he=o.relatedTarget||o.toElement,q=z,he=he?mi(he):null,he!==null&&(Me=c(he),se=he.tag,he!==Me||se!==5&&se!==27&&se!==6)&&(he=null)):(q=null,he=z),q!==he)){if(se=Cg,L="onMouseLeave",k="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(se=Og,L="onPointerLeave",k="onPointerEnter",T="pointer"),Me=q==null?V:ko(q),R=he==null?V:ko(he),V=new se(L,T+"leave",q,o,M),V.target=Me,V.relatedTarget=R,L=null,mi(M)===z&&(se=new se(k,T+"enter",he,o,M),se.target=R,se.relatedTarget=Me,L=se),Me=L,q&&he)t:{for(se=q,k=he,T=0,R=se;R;R=Yi(R))T++;for(R=0,L=k;L;L=Yi(L))R++;for(;0<T-R;)se=Yi(se),T--;for(;0<R-T;)k=Yi(k),R--;for(;T--;){if(se===k||k!==null&&se===k.alternate)break t;se=Yi(se),k=Yi(k)}se=null}else se=null;q!==null&&mp(j,V,q,se,!1),he!==null&&Me!==null&&mp(j,Me,he,se,!0)}}e:{if(V=z?ko(z):window,q=V.nodeName&&V.nodeName.toLowerCase(),q==="select"||q==="input"&&V.type==="file")var ne=Ig;else if(Ng(V))if(Vg)ne=r2;else{ne=o2;var xe=i2}else q=V.nodeName,!q||q.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?z&&bu(z.elementType)&&(ne=Ig):ne=l2;if(ne&&(ne=ne(t,z))){zg(j,ne,o,M);break e}xe&&xe(t,V,z),t==="focusout"&&z&&V.type==="number"&&z.memoizedProps.value!=null&&pu(V,"number",V.value)}switch(xe=z?ko(z):window,t){case"focusin":(Ng(xe)||xe.contentEditable==="true")&&(Ei=xe,Nu=z,Fo=null);break;case"focusout":Fo=Nu=Ei=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,jg(j,o,M);break;case"selectionchange":if(u2)break;case"keydown":case"keyup":jg(j,o,M)}var le;if(ku)e:{switch(t){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ci?Rg(t,o)&&(fe="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(fe="onCompositionStart");fe&&(Tg&&o.locale!=="ko"&&(Ci||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ci&&(le=Sg()):(tn=M,wu="value"in tn?tn.value:tn.textContent,Ci=!0)),xe=$r(z,fe),0<xe.length&&(fe=new Eg(fe,t,null,o,M),j.push({event:fe,listeners:xe}),le?fe.data=le:(le=_g(o),le!==null&&(fe.data=le)))),(le=J1?e2(t,o):t2(t,o))&&(fe=$r(z,"onBeforeInput"),0<fe.length&&(xe=new Eg("onBeforeInput","beforeinput",null,o,M),j.push({event:xe,listeners:fe}),xe.data=le)),G2(j,t,z,o,M)}fp(j,a)})}function cl(t,a,o){return{instance:t,listener:a,currentTarget:o}}function $r(t,a){for(var o=a+"Capture",r=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ao(t,o),u!=null&&r.unshift(cl(t,u,d)),u=Ao(t,a),u!=null&&r.push(cl(t,u,d))),t.tag===3)return r;t=t.return}return[]}function Yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function mp(t,a,o,r,u){for(var d=a._reactName,m=[];o!==null&&o!==r;){var b=o,S=b.alternate,z=b.stateNode;if(b=b.tag,S!==null&&S===r)break;b!==5&&b!==26&&b!==27||z===null||(S=z,u?(z=Ao(o,d),z!=null&&m.unshift(cl(o,z,S))):u||(z=Ao(o,d),z!=null&&m.push(cl(o,z,S)))),o=o.return}m.length!==0&&t.push({event:a,listeners:m})}var K2=/\r\n?/g,X2=/\u0000|\uFFFD/g;function hp(t){return(typeof t=="string"?t:""+t).replace(K2,`
`).replace(X2,"")}function pp(t,a){return a=hp(a),hp(t)===a}function Yr(){}function De(t,a,o,r,u,d){switch(o){case"children":typeof r=="string"?a==="body"||a==="textarea"&&r===""||xi(t,r):(typeof r=="number"||typeof r=="bigint")&&a!=="body"&&xi(t,""+r);break;case"className":Jl(t,"class",r);break;case"tabIndex":Jl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jl(t,o,r);break;case"style":yg(t,r,d);break;case"data":if(a!=="object"){Jl(t,"data",r);break}case"src":case"href":if(r===""&&(a!=="a"||o!=="href")){t.removeAttribute(o);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=ar(""+r),t.setAttribute(o,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(a!=="input"&&De(t,a,"name",u.name,u,null),De(t,a,"formEncType",u.formEncType,u,null),De(t,a,"formMethod",u.formMethod,u,null),De(t,a,"formTarget",u.formTarget,u,null)):(De(t,a,"encType",u.encType,u,null),De(t,a,"method",u.method,u,null),De(t,a,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(o);break}r=ar(""+r),t.setAttribute(o,r);break;case"onClick":r!=null&&(t.onclick=Yr);break;case"onScroll":r!=null&&we("scroll",t);break;case"onScrollEnd":r!=null&&we("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(o=r.__html,o!=null){if(u.children!=null)throw Error(l(60));t.innerHTML=o}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}o=ar(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""+r):t.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,""):t.removeAttribute(o);break;case"capture":case"download":r===!0?t.setAttribute(o,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(o,r):t.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(o,r):t.removeAttribute(o);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(o):t.setAttribute(o,r);break;case"popover":we("beforetoggle",t),we("toggle",t),Ql(t,"popover",r);break;case"xlinkActuate":Ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ia(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ia(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ia(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ia(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ql(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=T1.get(o)||o,Ql(t,o,r))}}function td(t,a,o,r,u,d){switch(o){case"style":yg(t,r,d);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(o=r.__html,o!=null){if(u.children!=null)throw Error(l(60));t.innerHTML=o}}break;case"children":typeof r=="string"?xi(t,r):(typeof r=="number"||typeof r=="bigint")&&xi(t,""+r);break;case"onScroll":r!=null&&we("scroll",t);break;case"onScrollEnd":r!=null&&we("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Yr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rg.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(u=o.endsWith("Capture"),a=o.slice(2,u?o.length-7:void 0),d=t[Tt]||null,d=d!=null?d[o]:null,typeof d=="function"&&t.removeEventListener(a,d,u),typeof r=="function")){typeof d!="function"&&d!==null&&(o in t?t[o]=null:t.hasAttribute(o)&&t.removeAttribute(o)),t.addEventListener(a,r,u);break e}o in t?t[o]=r:r===!0?t.setAttribute(o,""):Ql(t,o,r)}}}function mt(t,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",t),we("load",t);var r=!1,u=!1,d;for(d in o)if(o.hasOwnProperty(d)){var m=o[d];if(m!=null)switch(d){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,a));default:De(t,a,d,m,o,null)}}u&&De(t,a,"srcSet",o.srcSet,o,null),r&&De(t,a,"src",o.src,o,null);return;case"input":we("invalid",t);var b=d=m=u=null,S=null,z=null;for(r in o)if(o.hasOwnProperty(r)){var M=o[r];if(M!=null)switch(r){case"name":u=M;break;case"type":m=M;break;case"checked":S=M;break;case"defaultChecked":z=M;break;case"value":d=M;break;case"defaultValue":b=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(l(137,a));break;default:De(t,a,r,M,o,null)}}mg(t,d,b,S,z,m,u,!1),er(t);return;case"select":we("invalid",t),r=m=d=null;for(u in o)if(o.hasOwnProperty(u)&&(b=o[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":m=b;break;case"multiple":r=b;default:De(t,a,u,b,o,null)}a=d,o=m,t.multiple=!!r,a!=null?vi(t,!!r,a,!1):o!=null&&vi(t,!!r,o,!0);return;case"textarea":we("invalid",t),d=u=r=null;for(m in o)if(o.hasOwnProperty(m)&&(b=o[m],b!=null))switch(m){case"value":r=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(l(91));break;default:De(t,a,m,b,o,null)}pg(t,r,u,d),er(t);return;case"option":for(S in o)o.hasOwnProperty(S)&&(r=o[S],r!=null)&&(S==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":De(t,a,S,r,o,null));return;case"dialog":we("beforetoggle",t),we("toggle",t),we("cancel",t),we("close",t);break;case"iframe":case"object":we("load",t);break;case"video":case"audio":for(r=0;r<ul.length;r++)we(ul[r],t);break;case"image":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"embed":case"source":case"link":we("error",t),we("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(r=o[z],r!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,a));default:De(t,a,z,r,o,null)}return;default:if(bu(a)){for(M in o)o.hasOwnProperty(M)&&(r=o[M],r!==void 0&&td(t,a,M,r,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(r=o[b],r!=null&&De(t,a,b,r,o,null))}function Z2(t,a,o,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,m=null,b=null,S=null,z=null,M=null;for(q in o){var j=o[q];if(o.hasOwnProperty(q)&&j!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":S=j;default:r.hasOwnProperty(q)||De(t,a,q,null,r,j)}}for(var V in r){var q=r[V];if(j=o[V],r.hasOwnProperty(V)&&(q!=null||j!=null))switch(V){case"type":d=q;break;case"name":u=q;break;case"checked":z=q;break;case"defaultChecked":M=q;break;case"value":m=q;break;case"defaultValue":b=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,a));break;default:q!==j&&De(t,a,V,q,r,j)}}hu(t,m,b,S,z,M,d,u);return;case"select":q=m=b=V=null;for(d in o)if(S=o[d],o.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":q=S;default:r.hasOwnProperty(d)||De(t,a,d,null,r,S)}for(u in r)if(d=r[u],S=o[u],r.hasOwnProperty(u)&&(d!=null||S!=null))switch(u){case"value":V=d;break;case"defaultValue":b=d;break;case"multiple":m=d;default:d!==S&&De(t,a,u,d,r,S)}a=b,o=m,r=q,V!=null?vi(t,!!o,V,!1):!!r!=!!o&&(a!=null?vi(t,!!o,a,!0):vi(t,!!o,o?[]:"",!1));return;case"textarea":q=V=null;for(b in o)if(u=o[b],o.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:De(t,a,b,null,r,u)}for(m in r)if(u=r[m],d=o[m],r.hasOwnProperty(m)&&(u!=null||d!=null))switch(m){case"value":V=u;break;case"defaultValue":q=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==d&&De(t,a,m,u,r,d)}hg(t,V,q);return;case"option":for(var he in o)V=o[he],o.hasOwnProperty(he)&&V!=null&&!r.hasOwnProperty(he)&&(he==="selected"?t.selected=!1:De(t,a,he,null,r,V));for(S in r)V=r[S],q=o[S],r.hasOwnProperty(S)&&V!==q&&(V!=null||q!=null)&&(S==="selected"?t.selected=V&&typeof V!="function"&&typeof V!="symbol":De(t,a,S,V,r,q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in o)V=o[se],o.hasOwnProperty(se)&&V!=null&&!r.hasOwnProperty(se)&&De(t,a,se,null,r,V);for(z in r)if(V=r[z],q=o[z],r.hasOwnProperty(z)&&V!==q&&(V!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(l(137,a));break;default:De(t,a,z,V,r,q)}return;default:if(bu(a)){for(var Me in o)V=o[Me],o.hasOwnProperty(Me)&&V!==void 0&&!r.hasOwnProperty(Me)&&td(t,a,Me,void 0,r,V);for(M in r)V=r[M],q=o[M],!r.hasOwnProperty(M)||V===q||V===void 0&&q===void 0||td(t,a,M,V,r,q);return}}for(var k in o)V=o[k],o.hasOwnProperty(k)&&V!=null&&!r.hasOwnProperty(k)&&De(t,a,k,null,r,V);for(j in r)V=r[j],q=o[j],!r.hasOwnProperty(j)||V===q||V==null&&q==null||De(t,a,j,V,r,q)}var ad=null,nd=null;function Kr(t){return t.nodeType===9?t:t.ownerDocument}function bp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yp(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function id(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var od=null;function Q2(){var t=window.event;return t&&t.type==="popstate"?t===od?!1:(od=t,!0):(od=null,!1)}var vp=typeof setTimeout=="function"?setTimeout:void 0,J2=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(t){return xp.resolve(null).then(t).catch(tx)}:vp;function tx(t){setTimeout(function(){throw t})}function yn(t){return t==="head"}function Sp(t,a){var o=a,r=0,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(0<r&&8>r){o=r;var m=t.ownerDocument;if(o&1&&dl(m.documentElement),o&2&&dl(m.body),o&4)for(o=m.head,dl(o),m=o.firstChild;m;){var b=m.nextSibling,S=m.nodeName;m[To]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=b}}if(u===0){t.removeChild(d),vl(a);return}u--}else o==="$"||o==="$?"||o==="$!"?u++:r=o.charCodeAt(0)-48;else r=0;o=d}while(o);vl(a)}function ld(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":ld(o),du(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}t.removeChild(o)}}function ax(t,a,o,r){for(;t.nodeType===1;){var u=o;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[To])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=fa(t.nextSibling),t===null)break}return null}function nx(t,a,o){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=fa(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ix(t,a){var o=t.ownerDocument;if(t.data!=="$?"||o.readyState==="complete")a();else{var r=function(){a(),o.removeEventListener("DOMContentLoaded",r)};o.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function fa(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}var sd=null;function wp(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return t;a--}else o==="/$"&&a++}t=t.previousSibling}return null}function Cp(t,a,o){switch(a=Kr(o),t){case"html":if(t=a.documentElement,!t)throw Error(l(452));return t;case"head":if(t=a.head,!t)throw Error(l(453));return t;case"body":if(t=a.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function dl(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);du(t)}var la=new Map,Ep=new Set;function Xr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $a=G.d;G.d={f:ox,r:lx,D:rx,C:sx,L:ux,m:cx,X:fx,S:dx,M:gx};function ox(){var t=$a.f(),a=Br();return t||a}function lx(t){var a=hi(t);a!==null&&a.tag===5&&a.type==="form"?Um(a):$a.r(t)}var Ki=typeof document>"u"?null:document;function Op(t,a,o){var r=Ki;if(r&&typeof a=="string"&&a){var u=Jt(a);u='link[rel="'+t+'"][href="'+u+'"]',typeof o=="string"&&(u+='[crossorigin="'+o+'"]'),Ep.has(u)||(Ep.add(u),t={rel:t,crossOrigin:o,href:a},r.querySelector(u)===null&&(a=r.createElement("link"),mt(a,"link",t),lt(a),r.head.appendChild(a)))}}function rx(t){$a.D(t),Op("dns-prefetch",t,null)}function sx(t,a){$a.C(t,a),Op("preconnect",t,a)}function ux(t,a,o){$a.L(t,a,o);var r=Ki;if(r&&t&&a){var u='link[rel="preload"][as="'+Jt(a)+'"]';a==="image"&&o&&o.imageSrcSet?(u+='[imagesrcset="'+Jt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(u+='[imagesizes="'+Jt(o.imageSizes)+'"]')):u+='[href="'+Jt(t)+'"]';var d=u;switch(a){case"style":d=Xi(t);break;case"script":d=Zi(t)}la.has(d)||(t=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:t,as:a},o),la.set(d,t),r.querySelector(u)!==null||a==="style"&&r.querySelector(fl(d))||a==="script"&&r.querySelector(gl(d))||(a=r.createElement("link"),mt(a,"link",t),lt(a),r.head.appendChild(a)))}}function cx(t,a){$a.m(t,a);var o=Ki;if(o&&t){var r=a&&typeof a.as=="string"?a.as:"script",u='link[rel="modulepreload"][as="'+Jt(r)+'"][href="'+Jt(t)+'"]',d=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Zi(t)}if(!la.has(d)&&(t=y({rel:"modulepreload",href:t},a),la.set(d,t),o.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(gl(d)))return}r=o.createElement("link"),mt(r,"link",t),lt(r),o.head.appendChild(r)}}}function dx(t,a,o){$a.S(t,a,o);var r=Ki;if(r&&t){var u=pi(r).hoistableStyles,d=Xi(t);a=a||"default";var m=u.get(d);if(!m){var b={loading:0,preload:null};if(m=r.querySelector(fl(d)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":a},o),(o=la.get(d))&&ud(t,o);var S=m=r.createElement("link");lt(S),mt(S,"link",t),S._p=new Promise(function(z,M){S.onload=z,S.onerror=M}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Zr(m,a,r)}m={type:"stylesheet",instance:m,count:1,state:b},u.set(d,m)}}}function fx(t,a){$a.X(t,a);var o=Ki;if(o&&t){var r=pi(o).hoistableScripts,u=Zi(t),d=r.get(u);d||(d=o.querySelector(gl(u)),d||(t=y({src:t,async:!0},a),(a=la.get(u))&&cd(t,a),d=o.createElement("script"),lt(d),mt(d,"link",t),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(u,d))}}function gx(t,a){$a.M(t,a);var o=Ki;if(o&&t){var r=pi(o).hoistableScripts,u=Zi(t),d=r.get(u);d||(d=o.querySelector(gl(u)),d||(t=y({src:t,async:!0,type:"module"},a),(a=la.get(u))&&cd(t,a),d=o.createElement("script"),lt(d),mt(d,"link",t),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(u,d))}}function Tp(t,a,o,r){var u=(u=me.current)?Xr(u):null;if(!u)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Xi(o.href),o=pi(u).hoistableStyles,r=o.get(a),r||(r={type:"style",instance:null,count:0,state:null},o.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){t=Xi(o.href);var d=pi(u).hoistableStyles,m=d.get(t);if(m||(u=u.ownerDocument||u,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,m),(d=u.querySelector(fl(t)))&&!d._p&&(m.instance=d,m.state.loading=5),la.has(t)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},la.set(t,o),d||mx(u,t,o,m.state))),a&&r===null)throw Error(l(528,""));return m}if(a&&r!==null)throw Error(l(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Zi(o),o=pi(u).hoistableScripts,r=o.get(a),r||(r={type:"script",instance:null,count:0,state:null},o.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function Xi(t){return'href="'+Jt(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function kp(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function mx(t,a,o,r){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?r.loading=1:(a=t.createElement("link"),r.preload=a,a.addEventListener("load",function(){return r.loading|=1}),a.addEventListener("error",function(){return r.loading|=2}),mt(a,"link",o),lt(a),t.head.appendChild(a))}function Zi(t){return'[src="'+Jt(t)+'"]'}function gl(t){return"script[async]"+t}function Ap(t,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var r=t.querySelector('style[data-href~="'+Jt(o.href)+'"]');if(r)return a.instance=r,lt(r),r;var u=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),lt(r),mt(r,"style",u),Zr(r,o.precedence,t),a.instance=r;case"stylesheet":u=Xi(o.href);var d=t.querySelector(fl(u));if(d)return a.state.loading|=4,a.instance=d,lt(d),d;r=kp(o),(u=la.get(u))&&ud(r,u),d=(t.ownerDocument||t).createElement("link"),lt(d);var m=d;return m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),mt(d,"link",r),a.state.loading|=4,Zr(d,o.precedence,t),a.instance=d;case"script":return d=Zi(o.src),(u=t.querySelector(gl(d)))?(a.instance=u,lt(u),u):(r=o,(u=la.get(d))&&(r=y({},o),cd(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),lt(u),mt(u,"link",r),t.head.appendChild(u),a.instance=u);case"void":return null;default:throw Error(l(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(r=a.instance,a.state.loading|=4,Zr(r,o.precedence,t));return a.instance}function Zr(t,a,o){for(var r=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,d=u,m=0;m<r.length;m++){var b=r[m];if(b.dataset.precedence===a)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(t,a.firstChild))}function ud(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function cd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Qr=null;function Rp(t,a,o){if(Qr===null){var r=new Map,u=Qr=new Map;u.set(o,r)}else u=Qr,r=u.get(o),r||(r=new Map,u.set(o,r));if(r.has(t))return r;for(r.set(t,null),o=o.getElementsByTagName(t),u=0;u<o.length;u++){var d=o[u];if(!(d[To]||d[xt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var m=d.getAttribute(a)||"";m=t+m;var b=r.get(m);b?b.push(d):r.set(m,[d])}}return r}function _p(t,a,o){t=t.ownerDocument||t,t.head.insertBefore(o,a==="title"?t.querySelector("head > title"):null)}function hx(t,a,o){if(o===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Np(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ml=null;function px(){}function bx(t,a,o){if(ml===null)throw Error(l(475));var r=ml;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Xi(o.href),d=t.querySelector(fl(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Jr.bind(r),t.then(r,r)),a.state.loading|=4,a.instance=d,lt(d);return}d=t.ownerDocument||t,o=kp(o),(u=la.get(u))&&ud(o,u),d=d.createElement("link"),lt(d);var m=d;m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),mt(d,"link",o),a.instance=d}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(r.count++,a=Jr.bind(r),t.addEventListener("load",a),t.addEventListener("error",a))}}function yx(){if(ml===null)throw Error(l(475));var t=ml;return t.stylesheets&&t.count===0&&dd(t,t.stylesheets),0<t.count?function(a){var o=setTimeout(function(){if(t.stylesheets&&dd(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o)}}:null}function Jr(){if(this.count--,this.count===0){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var es=null;function dd(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,es=new Map,a.forEach(vx,t),es=null,Jr.call(t))}function vx(t,a){if(!(a.state.loading&4)){var o=es.get(t);if(o)var r=o.get(null);else{o=new Map,es.set(t,o);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var m=u[d];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(o.set(m.dataset.precedence,m),r=m)}r&&o.set(null,r)}u=a.instance,m=u.getAttribute("data-precedence"),d=o.get(m)||r,d===r&&o.set(null,u),o.set(m,u),this.count++,r=Jr.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),a.state.loading|=4}}var hl={$$typeof:N,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function xx(t,a,o,r,u,d,m,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.hiddenUpdates=ru(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function zp(t,a,o,r,u,d,m,b,S,z,M,j){return t=new xx(t,a,o,m,b,S,z,j),a=1,d===!0&&(a|=24),d=Lt(3,null,null,a),t.current=d,d.stateNode=t,a=Wu(),a.refCount++,t.pooledCache=a,a.refCount++,d.memoizedState={element:r,isDehydrated:o,cache:a},Xu(d),t}function Ip(t){return t?(t=Ai,t):Ai}function Vp(t,a,o,r,u,d){u=Ip(u),r.context===null?r.context=u:r.pendingContext=u,r=on(a),r.payload={element:o},d=d===void 0?null:d,d!==null&&(r.callback=d),o=ln(t,r,a),o!==null&&(Gt(o,t,a),Go(o,t,a))}function qp(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<a?o:a}}function fd(t,a){qp(t,a),(t=t.alternate)&&qp(t,a)}function Fp(t){if(t.tag===13){var a=ki(t,67108864);a!==null&&Gt(a,t,67108864),fd(t,67108864)}}var ts=!0;function Sx(t,a,o,r){var u=D.T;D.T=null;var d=G.p;try{G.p=2,gd(t,a,o,r)}finally{G.p=d,D.T=u}}function wx(t,a,o,r){var u=D.T;D.T=null;var d=G.p;try{G.p=8,gd(t,a,o,r)}finally{G.p=d,D.T=u}}function gd(t,a,o,r){if(ts){var u=md(r);if(u===null)ed(t,a,r,as,o),Mp(t,r);else if(Ex(u,t,a,o,r))r.stopPropagation();else if(Mp(t,r),a&4&&-1<Cx.indexOf(t)){for(;u!==null;){var d=hi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var m=Vn(d.pendingLanes);if(m!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var S=1<<31-Mt(m);b.entanglements[1]|=S,m&=~S}wa(d),(Ve&6)===0&&(Pr=Zt()+500,sl(0))}}break;case 13:b=ki(d,2),b!==null&&Gt(b,d,2),Br(),fd(d,2)}if(d=md(r),d===null&&ed(t,a,r,as,o),d===u)break;u=d}u!==null&&r.stopPropagation()}else ed(t,a,r,null,o)}}function md(t){return t=vu(t),hd(t)}var as=null;function hd(t){if(as=null,t=mi(t),t!==null){var a=c(t);if(a===null)t=null;else{var o=a.tag;if(o===13){if(t=f(a),t!==null)return t;t=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return as=t,null}function Dp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lu()){case wo:return 2;case $l:return 8;case In:case Yl:return 32;case fi:return 268435456;default:return 32}default:return 32}}var pd=!1,vn=null,xn=null,Sn=null,pl=new Map,bl=new Map,wn=[],Cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mp(t,a){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":pl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(a.pointerId)}}function yl(t,a,o,r,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:a,domEventName:o,eventSystemFlags:r,nativeEvent:d,targetContainers:[u]},a!==null&&(a=hi(a),a!==null&&Fp(a)),t):(t.eventSystemFlags|=r,a=t.targetContainers,u!==null&&a.indexOf(u)===-1&&a.push(u),t)}function Ex(t,a,o,r,u){switch(a){case"focusin":return vn=yl(vn,t,a,o,r,u),!0;case"dragenter":return xn=yl(xn,t,a,o,r,u),!0;case"mouseover":return Sn=yl(Sn,t,a,o,r,u),!0;case"pointerover":var d=u.pointerId;return pl.set(d,yl(pl.get(d)||null,t,a,o,r,u)),!0;case"gotpointercapture":return d=u.pointerId,bl.set(d,yl(bl.get(d)||null,t,a,o,r,u)),!0}return!1}function Pp(t){var a=mi(t.target);if(a!==null){var o=c(a);if(o!==null){if(a=o.tag,a===13){if(a=f(o),a!==null){t.blockedOn=a,b1(t.priority,function(){if(o.tag===13){var r=Ut();r=su(r);var u=ki(o,r);u!==null&&Gt(u,o,r),fd(o,r)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ns(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var o=md(t.nativeEvent);if(o===null){o=t.nativeEvent;var r=new o.constructor(o.type,o);yu=r,o.target.dispatchEvent(r),yu=null}else return a=hi(o),a!==null&&Fp(a),t.blockedOn=o,!1;a.shift()}return!0}function Lp(t,a,o){ns(t)&&o.delete(a)}function Ox(){pd=!1,vn!==null&&ns(vn)&&(vn=null),xn!==null&&ns(xn)&&(xn=null),Sn!==null&&ns(Sn)&&(Sn=null),pl.forEach(Lp),bl.forEach(Lp)}function is(t,a){t.blockedOn===a&&(t.blockedOn=null,pd||(pd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ox)))}var os=null;function Bp(t){os!==t&&(os=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){os===t&&(os=null);for(var a=0;a<t.length;a+=3){var o=t[a],r=t[a+1],u=t[a+2];if(typeof r!="function"){if(hd(r||o)===null)continue;break}var d=hi(o);d!==null&&(t.splice(a,3),a-=3,hc(d,{pending:!0,data:u,method:o.method,action:r},r,u))}}))}function vl(t){function a(S){return is(S,t)}vn!==null&&is(vn,t),xn!==null&&is(xn,t),Sn!==null&&is(Sn,t),pl.forEach(a),bl.forEach(a);for(var o=0;o<wn.length;o++){var r=wn[o];r.blockedOn===t&&(r.blockedOn=null)}for(;0<wn.length&&(o=wn[0],o.blockedOn===null);)Pp(o),o.blockedOn===null&&wn.shift();if(o=(t.ownerDocument||t).$$reactFormReplay,o!=null)for(r=0;r<o.length;r+=3){var u=o[r],d=o[r+1],m=u[Tt]||null;if(typeof d=="function")m||Bp(o);else if(m){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,m=d[Tt]||null)b=m.formAction;else if(hd(u)!==null)continue}else b=m.action;typeof b=="function"?o[r+1]=b:(o.splice(r,3),r-=3),Bp(o)}}}function bd(t){this._internalRoot=t}ls.prototype.render=bd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(l(409));var o=a.current,r=Ut();Vp(o,r,t,a,null,null)},ls.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Vp(t.current,2,null,t,null,null),Br(),a[gi]=null}};function ls(t){this._internalRoot=t}ls.prototype.unstable_scheduleHydration=function(t){if(t){var a=ig();t={blockedOn:null,target:t,priority:a};for(var o=0;o<wn.length&&a!==0&&a<wn[o].priority;o++);wn.splice(o,0,t),o===0&&Pp(t)}};var jp=n.version;if(jp!=="19.1.0")throw Error(l(527,jp,"19.1.0"));G.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=h(a),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Tx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rs.isDisabled&&rs.supportsFiber)try{Co=rs.inject(Tx),Dt=rs}catch{}}return Sl.createRoot=function(t,a){if(!s(t))throw Error(l(299));var o=!1,r="",u=ih,d=oh,m=lh,b=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks)),a=zp(t,1,!1,null,null,o,r,u,d,m,b,null),t[gi]=a.current,Jc(t),new bd(a)},Sl.hydrateRoot=function(t,a,o){if(!s(t))throw Error(l(299));var r=!1,u="",d=ih,m=oh,b=lh,S=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(r=!0),o.identifierPrefix!==void 0&&(u=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(m=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(S=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),a=zp(t,1,!0,a,o??null,r,u,d,m,b,S,z),a.context=Ip(null),o=a.current,r=Ut(),r=su(r),u=on(r),u.callback=null,ln(o,u,r),o=r,a.current.lanes=o,Oo(a,o),wa(a),t[gi]=a.current,Jc(t),new ls(a)},Sl.version="19.1.0",Sl}var Jp;function Mx(){if(Jp)return xd.exports;Jp=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),xd.exports=Dx(),xd.exports}var Px=Mx();function j0(e){var n=Object.create(null);return function(i){return n[i]===void 0&&(n[i]=e(i)),n[i]}}var Lx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Bx=j0(function(e){return Lx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function jx(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function Hx(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var Ux=(function(){function e(i){var l=this;this._insertTag=function(s){var c;l.tags.length===0?l.insertionPoint?c=l.insertionPoint.nextSibling:l.prepend?c=l.container.firstChild:c=l.before:c=l.tags[l.tags.length-1].nextSibling,l.container.insertBefore(s,c),l.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(l){l.forEach(this._insertTag)},n.insert=function(l){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Hx(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var c=jx(s);try{c.insertRule(l,c.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(l));this.ctr++},n.flush=function(){this.tags.forEach(function(l){var s;return(s=l.parentNode)==null?void 0:s.removeChild(l)}),this.tags=[],this.ctr=0},e})(),Ct="-ms-",Ns="-moz-",_e="-webkit-",H0="comm",hf="rule",pf="decl",Gx="@import",U0="@keyframes",Wx="@layer",$x=Math.abs,js=String.fromCharCode,Yx=Object.assign;function Kx(e,n){return bt(e,0)^45?(((n<<2^bt(e,0))<<2^bt(e,1))<<2^bt(e,2))<<2^bt(e,3):0}function G0(e){return e.trim()}function Xx(e,n){return(e=n.exec(e))?e[0]:e}function Ne(e,n,i){return e.replace(n,i)}function $d(e,n){return e.indexOf(n)}function bt(e,n){return e.charCodeAt(n)|0}function ql(e,n,i){return e.slice(n,i)}function Ea(e){return e.length}function bf(e){return e.length}function ss(e,n){return n.push(e),e}function Zx(e,n){return e.map(n).join("")}var Hs=1,go=1,W0=0,Vt=0,tt=0,po="";function Us(e,n,i,l,s,c,f){return{value:e,root:n,parent:i,type:l,props:s,children:c,line:Hs,column:go,length:f,return:""}}function wl(e,n){return Yx(Us("",null,null,"",null,null,0),e,{length:-e.length},n)}function Qx(){return tt}function Jx(){return tt=Vt>0?bt(po,--Vt):0,go--,tt===10&&(go=1,Hs--),tt}function Kt(){return tt=Vt<W0?bt(po,Vt++):0,go++,tt===10&&(go=1,Hs++),tt}function ka(){return bt(po,Vt)}function xs(){return Vt}function jl(e,n){return ql(po,e,n)}function Fl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $0(e){return Hs=go=1,W0=Ea(po=e),Vt=0,[]}function Y0(e){return po="",e}function Ss(e){return G0(jl(Vt-1,Yd(e===91?e+2:e===40?e+1:e)))}function eS(e){for(;(tt=ka())&&tt<33;)Kt();return Fl(e)>2||Fl(tt)>3?"":" "}function tS(e,n){for(;--n&&Kt()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return jl(e,xs()+(n<6&&ka()==32&&Kt()==32))}function Yd(e){for(;Kt();)switch(tt){case e:return Vt;case 34:case 39:e!==34&&e!==39&&Yd(tt);break;case 40:e===41&&Yd(e);break;case 92:Kt();break}return Vt}function aS(e,n){for(;Kt()&&e+tt!==57;)if(e+tt===84&&ka()===47)break;return"/*"+jl(n,Vt-1)+"*"+js(e===47?e:Kt())}function nS(e){for(;!Fl(ka());)Kt();return jl(e,Vt)}function iS(e){return Y0(ws("",null,null,null,[""],e=$0(e),0,[0],e))}function ws(e,n,i,l,s,c,f,g,h){for(var p=0,y=0,x=f,v=0,C=0,E=0,O=1,_=1,F=1,I=0,N="",P=s,A=c,$=l,Q=N;_;)switch(E=I,I=Kt()){case 40:if(E!=108&&bt(Q,x-1)==58){$d(Q+=Ne(Ss(I),"&","&\f"),"&\f")!=-1&&(F=-1);break}case 34:case 39:case 91:Q+=Ss(I);break;case 9:case 10:case 13:case 32:Q+=eS(E);break;case 92:Q+=tS(xs()-1,7);continue;case 47:switch(ka()){case 42:case 47:ss(oS(aS(Kt(),xs()),n,i),h);break;default:Q+="/"}break;case 123*O:g[p++]=Ea(Q)*F;case 125*O:case 59:case 0:switch(I){case 0:case 125:_=0;case 59+y:F==-1&&(Q=Ne(Q,/\f/g,"")),C>0&&Ea(Q)-x&&ss(C>32?tb(Q+";",l,i,x-1):tb(Ne(Q," ","")+";",l,i,x-2),h);break;case 59:Q+=";";default:if(ss($=eb(Q,n,i,p,y,s,g,N,P=[],A=[],x),c),I===123)if(y===0)ws(Q,n,$,$,P,c,x,g,A);else switch(v===99&&bt(Q,3)===110?100:v){case 100:case 108:case 109:case 115:ws(e,$,$,l&&ss(eb(e,$,$,0,0,s,g,N,s,P=[],x),A),s,A,x,g,l?P:A);break;default:ws(Q,$,$,$,[""],A,0,g,A)}}p=y=C=0,O=F=1,N=Q="",x=f;break;case 58:x=1+Ea(Q),C=E;default:if(O<1){if(I==123)--O;else if(I==125&&O++==0&&Jx()==125)continue}switch(Q+=js(I),I*O){case 38:F=y>0?1:(Q+="\f",-1);break;case 44:g[p++]=(Ea(Q)-1)*F,F=1;break;case 64:ka()===45&&(Q+=Ss(Kt())),v=ka(),y=x=Ea(N=Q+=nS(xs())),I++;break;case 45:E===45&&Ea(Q)==2&&(O=0)}}return c}function eb(e,n,i,l,s,c,f,g,h,p,y){for(var x=s-1,v=s===0?c:[""],C=bf(v),E=0,O=0,_=0;E<l;++E)for(var F=0,I=ql(e,x+1,x=$x(O=f[E])),N=e;F<C;++F)(N=G0(O>0?v[F]+" "+I:Ne(I,/&\f/g,v[F])))&&(h[_++]=N);return Us(e,n,i,s===0?hf:g,h,p,y)}function oS(e,n,i){return Us(e,n,i,H0,js(Qx()),ql(e,2,-2),0)}function tb(e,n,i,l){return Us(e,n,i,pf,ql(e,0,l),ql(e,l+1,-1),l)}function so(e,n){for(var i="",l=bf(e),s=0;s<l;s++)i+=n(e[s],s,e,n)||"";return i}function lS(e,n,i,l){switch(e.type){case Wx:if(e.children.length)break;case Gx:case pf:return e.return=e.return||e.value;case H0:return"";case U0:return e.return=e.value+"{"+so(e.children,l)+"}";case hf:e.value=e.props.join(",")}return Ea(i=so(e.children,l))?e.return=e.value+"{"+i+"}":""}function rS(e){var n=bf(e);return function(i,l,s,c){for(var f="",g=0;g<n;g++)f+=e[g](i,l,s,c)||"";return f}}function sS(e){return function(n){n.root||(n=n.return)&&e(n)}}var uS=function(n,i,l){for(var s=0,c=0;s=c,c=ka(),s===38&&c===12&&(i[l]=1),!Fl(c);)Kt();return jl(n,Vt)},cS=function(n,i){var l=-1,s=44;do switch(Fl(s)){case 0:s===38&&ka()===12&&(i[l]=1),n[l]+=uS(Vt-1,i,l);break;case 2:n[l]+=Ss(s);break;case 4:if(s===44){n[++l]=ka()===58?"&\f":"",i[l]=n[l].length;break}default:n[l]+=js(s)}while(s=Kt());return n},dS=function(n,i){return Y0(cS($0(n),i))},ab=new WeakMap,fS=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var i=n.value,l=n.parent,s=n.column===l.column&&n.line===l.line;l.type!=="rule";)if(l=l.parent,!l)return;if(!(n.props.length===1&&i.charCodeAt(0)!==58&&!ab.get(l))&&!s){ab.set(n,!0);for(var c=[],f=dS(i,c),g=l.props,h=0,p=0;h<f.length;h++)for(var y=0;y<g.length;y++,p++)n.props[p]=c[h]?f[h].replace(/&\f/g,g[y]):g[y]+" "+f[h]}}},gS=function(n){if(n.type==="decl"){var i=n.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(n.return="",n.value="")}};function K0(e,n){switch(Kx(e,n)){case 5103:return _e+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _e+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+e+Ns+e+Ct+e+e;case 6828:case 4268:return _e+e+Ct+e+e;case 6165:return _e+e+Ct+"flex-"+e+e;case 5187:return _e+e+Ne(e,/(\w+).+(:[^]+)/,_e+"box-$1$2"+Ct+"flex-$1$2")+e;case 5443:return _e+e+Ct+"flex-item-"+Ne(e,/flex-|-self/,"")+e;case 4675:return _e+e+Ct+"flex-line-pack"+Ne(e,/align-content|flex-|-self/,"")+e;case 5548:return _e+e+Ct+Ne(e,"shrink","negative")+e;case 5292:return _e+e+Ct+Ne(e,"basis","preferred-size")+e;case 6060:return _e+"box-"+Ne(e,"-grow","")+_e+e+Ct+Ne(e,"grow","positive")+e;case 4554:return _e+Ne(e,/([^-])(transform)/g,"$1"+_e+"$2")+e;case 6187:return Ne(Ne(Ne(e,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),e,"")+e;case 5495:case 3959:return Ne(e,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return Ne(Ne(e,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+Ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_e+e+e;case 4095:case 3583:case 4068:case 2532:return Ne(e,/(.+)-inline(.+)/,_e+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ea(e)-1-n>6)switch(bt(e,n+1)){case 109:if(bt(e,n+4)!==45)break;case 102:return Ne(e,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+Ns+(bt(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~$d(e,"stretch")?K0(Ne(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(bt(e,n+1)!==115)break;case 6444:switch(bt(e,Ea(e)-3-(~$d(e,"!important")&&10))){case 107:return Ne(e,":",":"+_e)+e;case 101:return Ne(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+_e+(bt(e,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+Ct+"$2box$3")+e}break;case 5936:switch(bt(e,n+11)){case 114:return _e+e+Ct+Ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _e+e+Ct+Ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _e+e+Ct+Ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return _e+e+Ct+e+e}return e}var mS=function(n,i,l,s){if(n.length>-1&&!n.return)switch(n.type){case pf:n.return=K0(n.value,n.length);break;case U0:return so([wl(n,{value:Ne(n.value,"@","@"+_e)})],s);case hf:if(n.length)return Zx(n.props,function(c){switch(Xx(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return so([wl(n,{props:[Ne(c,/:(read-\w+)/,":"+Ns+"$1")]})],s);case"::placeholder":return so([wl(n,{props:[Ne(c,/:(plac\w+)/,":"+_e+"input-$1")]}),wl(n,{props:[Ne(c,/:(plac\w+)/,":"+Ns+"$1")]}),wl(n,{props:[Ne(c,/:(plac\w+)/,Ct+"input-$1")]})],s)}return""})}},hS=[mS],pS=function(n){var i=n.key;if(i==="css"){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(O){var _=O.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(O),O.setAttribute("data-s",""))})}var s=n.stylisPlugins||hS,c={},f,g=[];f=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(O){for(var _=O.getAttribute("data-emotion").split(" "),F=1;F<_.length;F++)c[_[F]]=!0;g.push(O)});var h,p=[fS,gS];{var y,x=[lS,sS(function(O){y.insert(O)})],v=rS(p.concat(s,x)),C=function(_){return so(iS(_),v)};h=function(_,F,I,N){y=I,C(_?_+"{"+F.styles+"}":F.styles),N&&(E.inserted[F.name]=!0)}}var E={key:i,sheet:new Ux({key:i,container:f,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:c,registered:{},insert:h};return E.sheet.hydrate(g),E},Ed={exports:{}},Ie={};var nb;function bS(){if(nb)return Ie;nb=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,i=e?Symbol.for("react.portal"):60106,l=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,f=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,E=e?Symbol.for("react.lazy"):60116,O=e?Symbol.for("react.block"):60121,_=e?Symbol.for("react.fundamental"):60117,F=e?Symbol.for("react.responder"):60118,I=e?Symbol.for("react.scope"):60119;function N(A){if(typeof A=="object"&&A!==null){var $=A.$$typeof;switch($){case n:switch(A=A.type,A){case h:case p:case l:case c:case s:case x:return A;default:switch(A=A&&A.$$typeof,A){case g:case y:case E:case C:case f:return A;default:return $}}case i:return $}}}function P(A){return N(A)===p}return Ie.AsyncMode=h,Ie.ConcurrentMode=p,Ie.ContextConsumer=g,Ie.ContextProvider=f,Ie.Element=n,Ie.ForwardRef=y,Ie.Fragment=l,Ie.Lazy=E,Ie.Memo=C,Ie.Portal=i,Ie.Profiler=c,Ie.StrictMode=s,Ie.Suspense=x,Ie.isAsyncMode=function(A){return P(A)||N(A)===h},Ie.isConcurrentMode=P,Ie.isContextConsumer=function(A){return N(A)===g},Ie.isContextProvider=function(A){return N(A)===f},Ie.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===n},Ie.isForwardRef=function(A){return N(A)===y},Ie.isFragment=function(A){return N(A)===l},Ie.isLazy=function(A){return N(A)===E},Ie.isMemo=function(A){return N(A)===C},Ie.isPortal=function(A){return N(A)===i},Ie.isProfiler=function(A){return N(A)===c},Ie.isStrictMode=function(A){return N(A)===s},Ie.isSuspense=function(A){return N(A)===x},Ie.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===l||A===p||A===c||A===s||A===x||A===v||typeof A=="object"&&A!==null&&(A.$$typeof===E||A.$$typeof===C||A.$$typeof===f||A.$$typeof===g||A.$$typeof===y||A.$$typeof===_||A.$$typeof===F||A.$$typeof===I||A.$$typeof===O)},Ie.typeOf=N,Ie}var ib;function yS(){return ib||(ib=1,Ed.exports=bS()),Ed.exports}var Od,ob;function vS(){if(ob)return Od;ob=1;var e=yS(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[e.ForwardRef]=l,c[e.Memo]=s;function f(E){return e.isMemo(E)?s:c[E.$$typeof]||n}var g=Object.defineProperty,h=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,v=Object.prototype;function C(E,O,_){if(typeof O!="string"){if(v){var F=x(O);F&&F!==v&&C(E,F,_)}var I=h(O);p&&(I=I.concat(p(O)));for(var N=f(E),P=f(O),A=0;A<I.length;++A){var $=I[A];if(!i[$]&&!(_&&_[$])&&!(P&&P[$])&&!(N&&N[$])){var Q=y(O,$);try{g(E,$,Q)}catch{}}}}return E}return Od=C,Od}vS();var xS=!0;function X0(e,n,i){var l="";return i.split(" ").forEach(function(s){e[s]!==void 0?n.push(e[s]+";"):s&&(l+=s+" ")}),l}var yf=function(n,i,l){var s=n.key+"-"+i.name;(l===!1||xS===!1)&&n.registered[s]===void 0&&(n.registered[s]=i.styles)},vf=function(n,i,l){yf(n,i,l);var s=n.key+"-"+i.name;if(n.inserted[i.name]===void 0){var c=i;do n.insert(i===c?"."+s:"",c,n.sheet,!0),c=c.next;while(c!==void 0)}};function SS(e){for(var n=0,i,l=0,s=e.length;s>=4;++l,s-=4)i=e.charCodeAt(l)&255|(e.charCodeAt(++l)&255)<<8|(e.charCodeAt(++l)&255)<<16|(e.charCodeAt(++l)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,n=(i&65535)*1540483477+((i>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(s){case 3:n^=(e.charCodeAt(l+2)&255)<<16;case 2:n^=(e.charCodeAt(l+1)&255)<<8;case 1:n^=e.charCodeAt(l)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var wS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},CS=/[A-Z]|^ms/g,ES=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Z0=function(n){return n.charCodeAt(1)===45},lb=function(n){return n!=null&&typeof n!="boolean"},Td=j0(function(e){return Z0(e)?e:e.replace(CS,"-$&").toLowerCase()}),rb=function(n,i){switch(n){case"animation":case"animationName":if(typeof i=="string")return i.replace(ES,function(l,s,c){return Oa={name:s,styles:c,next:Oa},s})}return wS[n]!==1&&!Z0(n)&&typeof i=="number"&&i!==0?i+"px":i};function Dl(e,n,i){if(i==null)return"";var l=i;if(l.__emotion_styles!==void 0)return l;switch(typeof i){case"boolean":return"";case"object":{var s=i;if(s.anim===1)return Oa={name:s.name,styles:s.styles,next:Oa},s.name;var c=i;if(c.styles!==void 0){var f=c.next;if(f!==void 0)for(;f!==void 0;)Oa={name:f.name,styles:f.styles,next:Oa},f=f.next;var g=c.styles+";";return g}return OS(e,n,i)}case"function":{if(e!==void 0){var h=Oa,p=i(e);return Oa=h,Dl(e,n,p)}break}}var y=i;if(n==null)return y;var x=n[y];return x!==void 0?x:y}function OS(e,n,i){var l="";if(Array.isArray(i))for(var s=0;s<i.length;s++)l+=Dl(e,n,i[s])+";";else for(var c in i){var f=i[c];if(typeof f!="object"){var g=f;n!=null&&n[g]!==void 0?l+=c+"{"+n[g]+"}":lb(g)&&(l+=Td(c)+":"+rb(c,g)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&(n==null||n[f[0]]===void 0))for(var h=0;h<f.length;h++)lb(f[h])&&(l+=Td(c)+":"+rb(c,f[h])+";");else{var p=Dl(e,n,f);switch(c){case"animation":case"animationName":{l+=Td(c)+":"+p+";";break}default:l+=c+"{"+p+"}"}}}return l}var sb=/label:\s*([^\s;{]+)\s*(;|$)/g,Oa;function xf(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var l=!0,s="";Oa=void 0;var c=e[0];if(c==null||c.raw===void 0)l=!1,s+=Dl(i,n,c);else{var f=c;s+=f[0]}for(var g=1;g<e.length;g++)if(s+=Dl(i,n,e[g]),l){var h=c;s+=h[g]}sb.lastIndex=0;for(var p="",y;(y=sb.exec(s))!==null;)p+="-"+y[1];var x=SS(s)+p;return{name:x,styles:s,next:Oa}}var TS=function(n){return n()},Q0=$p.useInsertionEffect?$p.useInsertionEffect:!1,J0=Q0||TS,ub=Q0||Oe.useLayoutEffect,ey=Oe.createContext(typeof HTMLElement<"u"?pS({key:"css"}):null);ey.Provider;var Sf=function(n){return Oe.forwardRef(function(i,l){var s=Oe.useContext(ey);return n(i,s,l)})},wf=Oe.createContext({}),Cf={}.hasOwnProperty,Kd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",kS=function(n,i){var l={};for(var s in i)Cf.call(i,s)&&(l[s]=i[s]);return l[Kd]=n,l},AS=function(n){var i=n.cache,l=n.serialized,s=n.isStringTag;return yf(i,l,s),J0(function(){return vf(i,l,s)}),null},RS=Sf(function(e,n,i){var l=e.css;typeof l=="string"&&n.registered[l]!==void 0&&(l=n.registered[l]);var s=e[Kd],c=[l],f="";typeof e.className=="string"?f=X0(n.registered,c,e.className):e.className!=null&&(f=e.className+" ");var g=xf(c,void 0,Oe.useContext(wf));f+=n.key+"-"+g.name;var h={};for(var p in e)Cf.call(e,p)&&p!=="css"&&p!==Kd&&(h[p]=e[p]);return h.className=f,i&&(h.ref=i),Oe.createElement(Oe.Fragment,null,Oe.createElement(AS,{cache:n,serialized:g,isStringTag:typeof s=="string"}),Oe.createElement(s,h))}),_S=RS,cb=function(n,i){var l=arguments;if(i==null||!Cf.call(i,"css"))return Oe.createElement.apply(void 0,l);var s=l.length,c=new Array(s);c[0]=_S,c[1]=kS(n,i);for(var f=2;f<s;f++)c[f]=l[f];return Oe.createElement.apply(null,c)};(function(e){var n;n||(n=e.JSX||(e.JSX={}))})(cb||(cb={}));var db=Sf(function(e,n){var i=e.styles,l=xf([i],void 0,Oe.useContext(wf)),s=Oe.useRef();return ub(function(){var c=n.key+"-global",f=new n.sheet.constructor({key:c,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy}),g=!1,h=document.querySelector('style[data-emotion="'+c+" "+l.name+'"]');return n.sheet.tags.length&&(f.before=n.sheet.tags[0]),h!==null&&(g=!0,h.setAttribute("data-emotion",c),f.hydrate([h])),s.current=[f,g],function(){f.flush()}},[n]),ub(function(){var c=s.current,f=c[0],g=c[1];if(g){c[1]=!1;return}if(l.next!==void 0&&vf(n,l.next,!0),f.tags.length){var h=f.tags[f.tags.length-1].nextElementSibling;f.before=h,f.flush()}n.insert("",l,f,!1)},[n,l.name]),null});function NS(...e){return function(...i){e.forEach(l=>l?.(...i))}}const zS=(...e)=>e.map(n=>n?.trim?.()).filter(Boolean).join(" "),IS=/^on[A-Z]/;function VS(...e){let n={};for(let i of e){for(let l in n){if(IS.test(l)&&typeof n[l]=="function"&&typeof i[l]=="function"){n[l]=NS(n[l],i[l]);continue}if(l==="className"||l==="class"){n[l]=zS(n[l],i[l]);continue}if(l==="style"){n[l]=Object.assign({},n[l]??{},i[l]??{});continue}n[l]=i[l]!==void 0?i[l]:n[l]}for(let l in i)n[l]===void 0&&(n[l]=i[l])}return n}function qS(e,n){if(e!=null){if(typeof e=="function"){e(n);return}try{e.current=n}catch{throw new Error(`Cannot assign value '${n}' to ref '${e}'`)}}}function FS(...e){return n=>{e.forEach(i=>{qS(i,n)})}}function Hl(e){const n=Object.assign({},e);for(let i in n)n[i]===void 0&&delete n[i];return n}const uo=(...e)=>e.filter(Boolean).map(n=>n.trim()).join(" ");function DS(e){return e.default||e}const zt=e=>e!=null&&typeof e=="object"&&!Array.isArray(e),Ra=e=>typeof e=="string",Ef=e=>typeof e=="function";function MS(e){const n=Oe.version;return!Ra(n)||n.startsWith("18.")?e?.ref:e?.props?.ref}const ty=(...e)=>{const n=e.reduce((i,l)=>(l?.forEach(s=>i.add(s)),i),new Set([]));return Array.from(n)};function PS(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function LS(e={}){const{name:n,strict:i=!0,hookName:l="useContext",providerName:s="Provider",errorMessage:c,defaultValue:f}=e,g=Oe.createContext(f);g.displayName=n;function h(){const p=Oe.useContext(g);if(!p&&i){const y=new Error(c??PS(l,s));throw y.name="ContextError",Error.captureStackTrace?.(y,h),y}return p}return[g.Provider,h,g]}const[BS,ay]=LS({name:"ChakraContext",strict:!0,providerName:"<ChakraProvider />"});function jS(e){const{value:n,children:i}=e;return ie.jsxs(BS,{value:n,children:[!n._config.disableLayers&&ie.jsx(db,{styles:n.layers.atRule}),ie.jsx(db,{styles:n._global}),i]})}const HS=(e,n)=>{const i={},l={},s=Object.keys(e);for(const c of s)n(c)?l[c]=e[c]:i[c]=e[c];return[l,i]},co=(e,n)=>{const i=Ef(n)?n:l=>n.includes(l);return HS(e,i)},US=new Set(["htmlWidth","htmlHeight","htmlSize","htmlTranslate"]);function GS(e){return typeof e=="string"&&US.has(e)}function WS(e,n,i){const{css:l,isValidProperty:s}=ay(),{children:c,...f}=e,g=Oe.useMemo(()=>{const[v,C]=co(f,I=>i(I,n.variantKeys)),[E,O]=co(C,n.variantKeys),[_,F]=co(O,s);return{forwardedProps:v,variantProps:E,styleProps:_,elementProps:F}},[n.variantKeys,i,f,s]),{css:h,...p}=g.styleProps,y=Oe.useMemo(()=>{const v={...g.variantProps};return n.variantKeys.includes("colorPalette")||(v.colorPalette=f.colorPalette),n.variantKeys.includes("orientation")||(v.orientation=f.orientation),n(v)},[n,g.variantProps,f.colorPalette,f.orientation]);return{styles:Oe.useMemo(()=>l(y,...$S(h),p),[l,y,h,p]),props:{...g.forwardedProps,...g.elementProps,children:c}}}const $S=e=>(Array.isArray(e)?e:[e]).filter(Boolean).flat(),YS=DS(Bx),KS=YS,XS=e=>e!=="theme",ZS=(e,n,i)=>{let l;if(n){const s=n.shouldForwardProp;l=e.__emotion_forwardProp&&s?c=>e.__emotion_forwardProp(c)&&s(c):s}return typeof l!="function"&&i&&(l=e.__emotion_forwardProp),l};let QS=typeof document<"u";const fb=({cache:e,serialized:n,isStringTag:i})=>{yf(e,n,i);const l=J0(()=>vf(e,n,i));if(!QS&&l!==void 0){let s=n.name,c=n.next;for(;c!==void 0;)s=uo(s,c.name),c=c.next;return ie.jsx("style",{"data-emotion":uo(e.key,s),dangerouslySetInnerHTML:{__html:l},nonce:e.sheet.nonce})}return null},gb={path:["d"],text:["x","y"],circle:["cx","cy","r"],rect:["width","height","x","y","rx","ry"],ellipse:["cx","cy","rx","ry"],g:["transform"],stop:["offset","stopOpacity"]},JS=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e3=(e,n={},i={})=>{if(JS(gb,e)){i.forwardProps||(i.forwardProps=[]);const p=gb[e];i.forwardProps=ty([...i.forwardProps,...p])}const l=e.__emotion_real===e,s=l&&e.__emotion_base||e;let c,f;i!==void 0&&(c=i.label,f=i.target);let g=[];const h=Sf((p,y,x)=>{const{cva:v,isValidProperty:C}=ay(),E=n.__cva__?n:v(n),O=n3(e.__emotion_cva,E),_=re=>(D,G)=>re.includes(D)?!0:!G?.includes(D)&&!C(D);!i.shouldForwardProp&&i.forwardProps&&(i.shouldForwardProp=_(i.forwardProps));const F=(re,D)=>{const G=typeof e=="string"&&e.charCodeAt(0)>96?KS:XS,ae=!D?.includes(re)&&!C(re);return G(re)&&ae},I=ZS(e,i,l)||F,N=Oe.useMemo(()=>Object.assign({},i.defaultProps,Hl(p)),[p]),{props:P,styles:A}=WS(N,O,I);let $="",Q=[A],Y=P;if(P.theme==null){Y={};for(let re in P)Y[re]=P[re];Y.theme=Oe.useContext(wf)}typeof P.className=="string"?$=X0(y.registered,Q,P.className):P.className!=null&&($=uo($,P.className));const J=xf(g.concat(Q),y.registered,Y);J.styles&&($=uo($,`${y.key}-${J.name}`)),f!==void 0&&($=uo($,f));const K=!I("as");let de=K&&P.as||s,te={};for(let re in P)if(!(K&&re==="as")){if(GS(re)){const D=re.replace("html","").toLowerCase();te[D]=P[re];continue}I(re)&&(te[re]=P[re])}let ke=$.trim();ke?te.className=ke:Reflect.deleteProperty(te,"className"),te.ref=x;const Ce=i.forwardAsChild||i.forwardProps?.includes("asChild");if(P.asChild&&!Ce){const re=Oe.isValidElement(P.children)?Oe.Children.only(P.children):Oe.Children.toArray(P.children).find(Oe.isValidElement);if(!re)throw new Error("[chakra-ui > factory] No valid child found");de=re.type,te.children=null,Reflect.deleteProperty(te,"asChild"),te=VS(te,re.props),te.ref=FS(x,MS(re))}return te.as&&Ce?(te.as=void 0,ie.jsxs(Oe.Fragment,{children:[ie.jsx(fb,{cache:y,serialized:J,isStringTag:typeof de=="string"}),ie.jsx(de,{asChild:!0,...te,children:ie.jsx(P.as,{children:te.children})})]})):ie.jsxs(Oe.Fragment,{children:[ie.jsx(fb,{cache:y,serialized:J,isStringTag:typeof de=="string"}),ie.jsx(de,{...te})]})});return h.displayName=c!==void 0?c:`chakra(${typeof s=="string"?s:s.displayName||s.name||"Component"})`,h.__emotion_real=h,h.__emotion_base=s,h.__emotion_forwardProp=i.shouldForwardProp,h.__emotion_cva=n,Object.defineProperty(h,"toString",{value(){return`.${f}`}}),h},kd=e3.bind(),Ad=new Map,t3=new Proxy(kd,{apply(e,n,i){return kd(...i)},get(e,n){return Ad.has(n)||Ad.set(n,kd(n)),Ad.get(n)}}),a3=t3,n3=(e,n)=>e&&!n?e:!e&&n?n:e.merge(n);function Rd(e){return e==null?[]:Array.isArray(e)?e:[e]}var zl=e=>e[0],Of=e=>e[e.length-1],i3=(e,n)=>e.indexOf(n)!==-1,ii=(e,...n)=>e.concat(n),li=(e,...n)=>e.filter(i=>!n.includes(i)),oo=e=>Array.from(new Set(e)),_d=(e,n)=>{const i=new Set(n);return e.filter(l=>!i.has(l))},mo=(e,n)=>i3(e,n)?li(e,n):ii(e,n);function ny(e,n,i={}){const{step:l=1,loop:s=!0}=i,c=n+l,f=e.length,g=f-1;return n===-1?l>0?0:g:c<0?s?g:0:c>=f?s?0:n>f?f:n:c}function o3(e,n,i={}){return e[ny(e,n,i)]}function l3(e,n,i={}){const{step:l=1,loop:s=!0}=i;return ny(e,n,{step:-l,loop:s})}function r3(e,n,i={}){return e[l3(e,n,i)]}function mb(e,n){return e.reduce(([i,l],s)=>(n(s)?i.push(s):l.push(s),[i,l]),[[],[]])}var hb=e=>e?.constructor.name==="Array",s3=(e,n)=>{if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(!ma(e[i],n[i]))return!1;return!0},ma=(e,n)=>{if(Object.is(e,n))return!0;if(e==null&&n!=null||e!=null&&n==null)return!1;if(typeof e?.isEqual=="function"&&typeof n?.isEqual=="function")return e.isEqual(n);if(typeof e=="function"&&typeof n=="function")return e.toString()===n.toString();if(hb(e)&&hb(n))return s3(Array.from(e),Array.from(n));if(typeof e!="object"||typeof n!="object")return!1;const i=Object.keys(n??Object.create(null)),l=i.length;for(let s=0;s<l;s++)if(!Reflect.has(e,i[s]))return!1;for(let s=0;s<l;s++){const c=i[s];if(!ma(e[c],n[c]))return!1}return!0},Al=e=>Array.isArray(e),u3=e=>e===!0||e===!1,iy=e=>e!=null&&typeof e=="object",oi=e=>iy(e)&&!Al(e),oy=e=>typeof e=="function",c3=e=>e==null,kn=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),d3=e=>Object.prototype.toString.call(e),ly=Function.prototype.toString,f3=ly.call(Object),g3=e=>{if(!iy(e)||d3(e)!="[object Object]"||p3(e))return!1;const n=Object.getPrototypeOf(e);if(n===null)return!0;const i=kn(n,"constructor")&&n.constructor;return typeof i=="function"&&i instanceof i&&ly.call(i)==f3},m3=e=>typeof e=="object"&&e!==null&&"$$typeof"in e&&"props"in e,h3=e=>typeof e=="object"&&e!==null&&"__v_isVNode"in e,p3=e=>m3(e)||h3(e),b3=()=>{},Xd=(...e)=>(...n)=>{e.forEach(function(i){i?.(...n)})};function Ka(e,n,...i){if(e in n){const s=n[e];return oy(s)?s(...i):s}const l=new Error(`No matching key: ${JSON.stringify(e)} in ${JSON.stringify(Object.keys(n))}`);throw Error.captureStackTrace?.(l,Ka),l}var ry=(e,n)=>{try{return e()}catch(i){return i instanceof Error&&Error.captureStackTrace?.(i,ry),n?.()}},{floor:sy,abs:pb,round:Gs,min:y3,max:v3,pow:x3,sign:S3}=Math,Zd=e=>Number.isNaN(e),Nn=e=>Zd(e)?0:e,uy=(e,n)=>(e%n+n)%n,w3=(e,n)=>(e%n+n)%n,C3=(e,n)=>Nn(e)>=n,E3=(e,n)=>Nn(e)<=n,O3=(e,n,i)=>{const l=Nn(e),s=n==null||l>=n,c=i==null||l<=i;return s&&c},T3=(e,n,i)=>Gs((Nn(e)-n)/i)*i+n,It=(e,n,i)=>y3(v3(Nn(e),n),i),k3=(e,n,i)=>(Nn(e)-n)/(i-n),A3=(e,n,i,l)=>It(T3(e*(i-n)+n,n,l),n,i),bb=(e,n)=>{let i=e,l=n.toString(),s=l.indexOf("."),c=s>=0?l.length-s:0;if(c>0){let f=x3(10,c);i=Gs(i*f)/f}return i},Nd=(e,n)=>typeof n=="number"?sy(e*n+.5)/n:Gs(e),yb=(e,n,i,l)=>{const s=n!=null?Number(n):0,c=Number(i),f=(e-s)%l;let g=pb(f)*2>=l?e+S3(f)*(l-pb(f)):e-f;if(g=bb(g,l),!Zd(s)&&g<s)g=s;else if(!Zd(c)&&g>c){const h=sy((c-s)/l),p=s+h*l;g=h<=0||p<s?c:p}return bb(g,l)},He=(e,n=0,i=10)=>{const l=Math.pow(i,n);return Gs(e*l)/l},vb=e=>{if(!Number.isFinite(e))return 0;let n=1,i=0;for(;Math.round(e*n)/n!==e;)n*=10,i+=1;return i},cy=(e,n,i)=>{let l=n==="+"?e+i:e-i;if(e%1!==0||i%1!==0){const s=10**Math.max(vb(e),vb(i));e=Math.round(e*s),i=Math.round(i*s),l=n==="+"?e+i:e-i,l/=s}return l},R3=(e,n)=>cy(Nn(e),"+",n),_3=(e,n)=>cy(Nn(e),"-",n);function dy(e){if(!g3(e)||e===void 0)return e;const n=Reflect.ownKeys(e).filter(l=>typeof l=="string"),i={};for(const l of n){const s=e[l];s!==void 0&&(i[l]=dy(s))}return i}function N3(e,n=Object.is){let i={...e};const l=new Set,s=y=>(l.add(y),()=>l.delete(y)),c=()=>{l.forEach(y=>y())};return{subscribe:s,get:y=>i[y],set:(y,x)=>{n(i[y],x)||(i[y]=x,c())},update:y=>{let x=!1;for(const v in y){const C=y[v];C!==void 0&&!n(i[v],C)&&(i[v]=C,x=!0)}x&&c()},snapshot:()=>({...i})}}function fy(...e){e.length===1?e[0]:e[1],e.length===2&&e[0]}function z3(e,n){if(e==null)throw new Error(n())}function I3(e){if(!e)return;const n=e.selectionStart??0,i=e.selectionEnd??0;Math.abs(i-n)===0&&n===0&&e.setSelectionRange(e.value.length,e.value.length)}var xb=e=>Math.max(0,Math.min(1,e)),V3=(e,n)=>e.map((i,l)=>e[(Math.max(n,0)+l)%e.length]),q3=()=>{},Ws=e=>typeof e=="object"&&e!==null,F3=2147483647,D3=1,M3=9,P3=11,qt=e=>Ws(e)&&e.nodeType===D3&&typeof e.nodeName=="string",gy=e=>Ws(e)&&e.nodeType===M3,L3=e=>Ws(e)&&e===e.window,my=e=>qt(e)?e.localName||"":"#document";function B3(e){return["html","body","#document"].includes(my(e))}var j3=e=>Ws(e)&&e.nodeType!==void 0,Ml=e=>j3(e)&&e.nodeType===P3&&"host"in e,H3=e=>qt(e)&&e.localName==="input",U3=e=>qt(e)?e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0:!1,G3=/(textarea|select)/;function W3(e){if(e==null||!qt(e))return!1;try{return H3(e)&&e.selectionStart!=null||G3.test(e.localName)||e.isContentEditable||e.getAttribute("contenteditable")==="true"||e.getAttribute("contenteditable")===""}catch{return!1}}function ri(e,n){if(!e||!n||!qt(e)||!qt(n))return!1;const i=n.getRootNode?.();if(e===n||e.contains(n))return!0;if(i&&Ml(i)){let l=n;for(;l;){if(e===l)return!0;l=l.parentNode||l.host}}return!1}function Qa(e){return gy(e)?e:L3(e)?e.document:e?.ownerDocument??document}function $3(e){return Qa(e).documentElement}function vt(e){return Ml(e)?vt(e.host):gy(e)?e.defaultView??window:qt(e)?e.ownerDocument?.defaultView??window:window}function Y3(e){if(my(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Ml(e)&&e.host||$3(e);return Ml(n)?n.host:n}var zd=new WeakMap;function K3(e){return zd.has(e)||zd.set(e,vt(e).getComputedStyle(e)),zd.get(e)}var $s=()=>typeof document<"u";function X3(){return navigator.userAgentData?.platform??navigator.platform}function Z3(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(({brand:n,version:i})=>`${n}/${i}`).join(" "):navigator.userAgent}var Tf=e=>$s()&&e.test(X3()),hy=e=>$s()&&e.test(Z3()),Q3=e=>$s()&&e.test(navigator.vendor),Sb=()=>$s()&&!!navigator.maxTouchPoints,J3=()=>Tf(/^iPhone/i),e5=()=>Tf(/^iPad/i)||Ys()&&navigator.maxTouchPoints>1,kf=()=>J3()||e5(),t5=()=>Ys()||kf(),Ys=()=>Tf(/^Mac/i),py=()=>t5()&&Q3(/apple/i),a5=()=>hy(/Firefox/i),n5=()=>hy(/Android/i);function i5(e){return e.composedPath?.()??e.nativeEvent?.composedPath?.()}function An(e){return i5(e)?.[0]??e.target}function o5(e){return u5(e).isComposing||e.keyCode===229}function l5(e){return e.pointerType===""&&e.isTrusted?!0:n5()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}var r5=e=>e.button===2||Ys()&&e.ctrlKey&&e.button===0,s5=e=>"touches"in e&&e.touches.length>0;function u5(e){return e.nativeEvent??e}function c5(e,n="client"){const i=s5(e)?e.touches[0]||e.changedTouches[0]:e;return{x:i[`${n}X`],y:i[`${n}Y`]}}var yt=(e,n,i,l)=>{const s=typeof e=="function"?e():e;return s?.addEventListener(n,i,l),()=>{s?.removeEventListener(n,i,l)}};function d5(e,n){const{type:i="HTMLInputElement",property:l="value"}=n,s=vt(e)[i].prototype;return Object.getOwnPropertyDescriptor(s,l)??{}}function f5(e){if(e.localName==="input")return"HTMLInputElement";if(e.localName==="textarea")return"HTMLTextAreaElement";if(e.localName==="select")return"HTMLSelectElement"}function Ks(e,n,i="value"){if(!e)return;const l=f5(e);l&&d5(e,{type:l,property:i}).set?.call(e,n),e.setAttribute(i,n)}function g5(e,n){const{value:i,bubbles:l=!0}=n;if(!e)return;const s=vt(e);e instanceof s.HTMLInputElement&&(Ks(e,`${i}`),e.dispatchEvent(new s.Event("input",{bubbles:l})))}function m5(e){return h5(e)?e.form:e.closest("form")}function h5(e){return e.matches("textarea, input, select, button")}function p5(e,n){if(!e)return;const i=m5(e),l=s=>{s.defaultPrevented||n()};return i?.addEventListener("reset",l,{passive:!0}),()=>i?.removeEventListener("reset",l)}function b5(e,n){const i=e?.closest("fieldset");if(!i)return;n(i.disabled);const l=vt(i),s=new l.MutationObserver(()=>n(i.disabled));return s.observe(i,{attributes:!0,attributeFilter:["disabled"]}),()=>s.disconnect()}function Af(e,n){if(!e)return;const{onFieldsetDisabledChange:i,onFormReset:l}=n,s=[p5(e,l),b5(e,i)];return()=>s.forEach(c=>c?.())}var y5=e=>qt(e)&&e.tagName==="IFRAME",v5=e=>parseInt(e.getAttribute("tabindex")||"0",10)<0,by="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";function Rf(e){return!e||e.closest("[inert]")?!1:e.matches(by)&&U3(e)}function yy(e,n){if(!e)return[];const l=Array.from(e.querySelectorAll(by)).filter(x5);return l.forEach((s,c)=>{if(y5(s)&&s.contentDocument){const f=s.contentDocument.body,g=yy(f);l.splice(c,1,...g)}}),l.length,l}function x5(e){return e!=null&&e.tabIndex>0?!0:Rf(e)&&!v5(e)}function _f(e){const{root:n,getInitialEl:i,filter:l,enabled:s=!0}=e;if(!s)return;let c=null;if(c||(c=typeof i=="function"?i():i),c||(c=n?.querySelector("[data-autofocus],[autofocus]")),!c){const f=yy(n);c=l?f.filter(l)[0]:f[0]}return c||n||void 0}function vy(e){const n=new Set;function i(l){const s=globalThis.requestAnimationFrame(l);n.add(()=>globalThis.cancelAnimationFrame(s))}return i(()=>i(e)),function(){n.forEach(s=>s())}}function Te(e){let n;const i=globalThis.requestAnimationFrame(()=>{n=e()});return()=>{globalThis.cancelAnimationFrame(i),n?.()}}function S5(e,n,i){const l=Te(()=>{e.removeEventListener(n,s,!0),i()}),s=()=>{l(),i()};return e.addEventListener(n,s,{once:!0,capture:!0}),l}function w5(e,n){if(!e)return;const{attributes:i,callback:l}=n,s=e.ownerDocument.defaultView||window,c=new s.MutationObserver(f=>{for(const g of f)g.type==="attributes"&&g.attributeName&&i.includes(g.attributeName)&&l(g)});return c.observe(e,{attributes:!0,attributeFilter:i}),()=>c.disconnect()}function Xs(e,n){const{defer:i}=n,l=i?Te:c=>c(),s=[];return s.push(l(()=>{const c=typeof e=="function"?e():e;s.push(w5(c,n))})),()=>{s.forEach(c=>c?.())}}function xy(e){const n=()=>{const i=vt(e);e.dispatchEvent(new i.MouseEvent("click"))};a5()?S5(e,"keyup",n):queueMicrotask(n)}function zs(e){const n=Y3(e);return B3(n)?Qa(n).body:qt(n)&&Nf(n)?n:zs(n)}function Sy(e,n=[]){const i=zs(e),l=i===e.ownerDocument.body,s=vt(i);return l?n.concat(s,s.visualViewport||[],Nf(i)?i:[]):n.concat(i,Sy(i,[]))}var C5=/auto|scroll|overlay|hidden|clip/,E5=new Set(["inline","contents"]);function Nf(e){const n=vt(e),{overflow:i,overflowX:l,overflowY:s,display:c}=n.getComputedStyle(e);return C5.test(i+s+l)&&!E5.has(c)}function O5(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Is(e,n){const{rootEl:i,...l}=n||{};!e||!i||!Nf(i)||!O5(i)||e.scrollIntoView(l)}function wy(e,n){const{left:i,top:l,width:s,height:c}=n.getBoundingClientRect(),f={x:e.x-i,y:e.y-l},g={x:xb(f.x/s),y:xb(f.y/c)};function h(p={}){const{dir:y="ltr",orientation:x="horizontal",inverted:v}=p,C=typeof v=="object"?v.x:v,E=typeof v=="object"?v.y:v;return x==="horizontal"?y==="rtl"||C?1-g.x:g.x:E?1-g.y:g.y}return{offset:f,percent:g,getPercentValue:h}}function T5(e,n){const i=e.body,l="pointerLockElement"in e||"mozPointerLockElement"in e,s=()=>!!e.pointerLockElement;function c(){}function f(h){s(),console.error("PointerLock error occurred:",h),e.exitPointerLock()}if(!l)return;try{i.requestPointerLock()}catch{}const g=[yt(e,"pointerlockchange",c,!1),yt(e,"pointerlockerror",f,!1)];return()=>{g.forEach(h=>h()),e.exitPointerLock()}}var lo="default",Qd="",Cs=new WeakMap;function k5(e={}){const{target:n,doc:i}=e,l=i??document,s=l.documentElement;return kf()?(lo==="default"&&(Qd=s.style.webkitUserSelect,s.style.webkitUserSelect="none"),lo="disabled"):n&&(Cs.set(n,n.style.userSelect),n.style.userSelect="none"),()=>A5({target:n,doc:l})}function A5(e={}){const{target:n,doc:i}=e,s=(i??document).documentElement;if(kf()){if(lo!=="disabled")return;lo="restoring",setTimeout(()=>{vy(()=>{lo==="restoring"&&(s.style.webkitUserSelect==="none"&&(s.style.webkitUserSelect=Qd||""),Qd="",lo="default")})},300)}else if(n&&Cs.has(n)){const c=Cs.get(n);n.style.userSelect==="none"&&(n.style.userSelect=c??""),n.getAttribute("style")===""&&n.removeAttribute("style"),Cs.delete(n)}}function Cy(e={}){const{defer:n,target:i,...l}=e,s=n?Te:f=>f(),c=[];return c.push(s(()=>{const f=typeof i=="function"?i():i;c.push(k5({...l,target:f}))})),()=>{c.forEach(f=>f?.())}}function R5(e,n){const{onPointerMove:i,onPointerUp:l}=n,c=[yt(e,"pointermove",f=>{const g=c5(f),h=Math.sqrt(g.x**2+g.y**2),p=f.pointerType==="touch"?10:5;if(!(h<p)){if(f.pointerType==="mouse"&&f.button===0){l();return}i({point:g,event:f})}},!1),yt(e,"pointerup",l,!1),yt(e,"pointercancel",l,!1),yt(e,"contextmenu",l,!1),Cy({doc:e})];return()=>{c.forEach(f=>f())}}function Vs(e,n){return Array.from(e?.querySelectorAll(n)??[])}function _5(e,n){return e?.querySelector(n)??null}var zf=e=>e.id;function N5(e,n,i=zf){return e.find(l=>i(l)===n)}function If(e,n,i=zf){const l=N5(e,n,i);return l?e.indexOf(l):-1}function z5(e,n,i=!0){let l=If(e,n);return l=i?(l+1)%e.length:Math.min(l+1,e.length-1),e[l]}function I5(e,n,i=!0){let l=If(e,n);return l===-1?i?e[e.length-1]:null:(l=i?(l-1+e.length)%e.length:Math.max(0,l-1),e[l])}var V5=e=>e.split("").map(n=>{const i=n.charCodeAt(0);return i>0&&i<128?n:i>=128&&i<=255?`/x${i.toString(16)}`.replace("/","\\"):""}).join("").trim(),q5=e=>V5(e.dataset?.valuetext??e.textContent??""),F5=(e,n)=>e.trim().toLowerCase().startsWith(n.toLowerCase());function D5(e,n,i,l=zf){const s=i?If(e,i,l):-1;let c=i?V3(e,s):e;return n.length===1&&(c=c.filter(g=>l(g)!==i)),c.find(g=>F5(q5(g),n))}function M5(e,n){if(!e)return q3;const i=Object.keys(n).reduce((l,s)=>(l[s]=e.style.getPropertyValue(s),l),{});return Object.assign(e.style,n),()=>{Object.assign(e.style,i),e.style.length===0&&e.removeAttribute("style")}}function P5(e,n){const{state:i,activeId:l,key:s,timeout:c=350,itemToId:f}=n,g=i.keysSoFar+s,p=g.length>1&&Array.from(g).every(E=>E===g[0])?g[0]:g;let y=e.slice();const x=D5(y,p,l,f);function v(){clearTimeout(i.timer),i.timer=-1}function C(E){i.keysSoFar=E,v(),E!==""&&(i.timer=+setTimeout(()=>{C(""),v()},c))}return C(g),x}var Pl=Object.assign(P5,{defaultOptions:{keysSoFar:"",timer:-1},isValidEvent:L5});function L5(e){return e.key.length===1&&!e.ctrlKey&&!e.metaKey}function B5(e,n,i){const{signal:l}=n;return[new Promise((f,g)=>{const h=setTimeout(()=>{g(new Error(`Timeout of ${i}ms exceeded`))},i);l.addEventListener("abort",()=>{clearTimeout(h),g(new Error("Promise aborted"))}),e.then(p=>{l.aborted||(clearTimeout(h),f(p))}).catch(p=>{l.aborted||(clearTimeout(h),g(p))})}),()=>n.abort()]}function j5(e,n){const{timeout:i,rootNode:l}=n,s=vt(l),c=Qa(l),f=new s.AbortController;return B5(new Promise(g=>{const h=e();if(h){g(h);return}const p=new s.MutationObserver(()=>{const y=e();y&&y.isConnected&&(p.disconnect(),g(y))});p.observe(c.body,{childList:!0,subtree:!0})}),f,i)}function wb(e,n,i){let l=[],s;return c=>{const f=e(c);return(f.length!==l.length||f.some((h,p)=>!ma(l[p],h)))&&(l=f,s=n(...f)),s}}function zn(){return{and:(...e)=>function(i){return e.every(l=>i.guard(l))},or:(...e)=>function(i){return e.some(l=>i.guard(l))},not:e=>function(i){return!i.guard(e)}}}function Ey(){return{guards:zn(),createMachine:e=>e,choose:e=>function({choose:i}){return i(e)?.actions}}}var ce=()=>e=>Array.from(new Set(e)),ue=(e,n=[])=>({parts:(...i)=>{if(H5(n))return ue(e,i);throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?")},extendWith:(...i)=>ue(e,[...n,...i]),omit:(...i)=>ue(e,n.filter(l=>!i.includes(l))),rename:i=>ue(i,n),keys:()=>n,build:()=>[...new Set(n)].reduce((i,l)=>Object.assign(i,{[l]:{selector:[`&[data-scope="${Qi(e)}"][data-part="${Qi(l)}"]`,`& [data-scope="${Qi(e)}"][data-part="${Qi(l)}"]`].join(", "),attrs:{"data-scope":Qi(e),"data-part":Qi(l)}}}),{})}),Qi=e=>e.replace(/([A-Z])([A-Z])/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),H5=e=>e.length===0,Oy=ue("collapsible").parts("root","trigger","content","indicator");Oy.build();ce()(["dir","disabled","getRootNode","id","ids","onExitComplete","onOpenChange","defaultOpen","open"]);var U5=Object.defineProperty,G5=(e,n,i)=>n in e?U5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,Vf=(e,n,i)=>G5(e,n+"",i),W5=(e,n)=>{if(Object.keys(e).length!==Object.keys(n).length)return!1;for(let i in e)if(e[i]!==n[i])return!1;return!0},qf=class{toHexInt(){return this.toFormat("rgba").toHexInt()}getChannelValue(e){if(e in this)return this[e];throw new Error("Unsupported color channel: "+e)}getChannelValuePercent(e,n){const i=n??this.getChannelValue(e),{minValue:l,maxValue:s}=this.getChannelRange(e);return k3(i,l,s)}getChannelPercentValue(e,n){const{minValue:i,maxValue:l,step:s}=this.getChannelRange(e),c=A3(n,i,l,s);return yb(c,i,l,s)}withChannelValue(e,n){const{minValue:i,maxValue:l}=this.getChannelRange(e);if(e in this){let s=this.clone();return s[e]=It(n,i,l),s}throw new Error("Unsupported color channel: "+e)}getColorAxes(e){let{xChannel:n,yChannel:i}=e,l=n||this.getChannels().find(f=>f!==i),s=i||this.getChannels().find(f=>f!==l),c=this.getChannels().find(f=>f!==l&&f!==s);return{xChannel:l,yChannel:s,zChannel:c}}incrementChannel(e,n){const{minValue:i,maxValue:l,step:s}=this.getChannelRange(e),c=yb(It(this.getChannelValue(e)+n,i,l),i,l,s);return this.withChannelValue(e,c)}decrementChannel(e,n){return this.incrementChannel(e,-n)}isEqual(e){return W5(this.toJSON(),e.toJSON())&&this.getChannelValue("alpha")===e.getChannelValue("alpha")}},$5=/^#[\da-f]+$/i,Y5=/^rgba?\((.*)\)$/,K5=/[^#]/gi,Ty=class Es extends qf{constructor(n,i,l,s){super(),this.red=n,this.green=i,this.blue=l,this.alpha=s}static parse(n){let i=[];if($5.test(n)&&[4,5,7,9].includes(n.length)){const s=(n.length<6?n.replace(K5,"$&$&"):n).slice(1).split("");for(;s.length>0;)i.push(parseInt(s.splice(0,2).join(""),16));i[3]=i[3]!==void 0?i[3]/255:void 0}const l=n.match(Y5);return l?.[1]&&(i=l[1].split(",").map(s=>Number(s.trim())).map((s,c)=>It(s,0,c<3?255:1))),i.length<3?void 0:new Es(i[0],i[1],i[2],i[3]??1)}toString(n){switch(n){case"hex":return"#"+(this.red.toString(16).padStart(2,"0")+this.green.toString(16).padStart(2,"0")+this.blue.toString(16).padStart(2,"0")).toUpperCase();case"hexa":return"#"+(this.red.toString(16).padStart(2,"0")+this.green.toString(16).padStart(2,"0")+this.blue.toString(16).padStart(2,"0")+Math.round(this.alpha*255).toString(16).padStart(2,"0")).toUpperCase();case"rgb":return`rgb(${this.red}, ${this.green}, ${this.blue})`;case"css":case"rgba":return`rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;case"hsl":return this.toHSL().toString("hsl");case"hsb":return this.toHSB().toString("hsb");default:return this.toFormat(n).toString(n)}}toFormat(n){switch(n){case"rgba":return this;case"hsba":return this.toHSB();case"hsla":return this.toHSL();default:throw new Error("Unsupported color conversion: rgb -> "+n)}}toHexInt(){return this.red<<16|this.green<<8|this.blue}toHSB(){const n=this.red/255,i=this.green/255,l=this.blue/255,s=Math.min(n,i,l),c=Math.max(n,i,l),f=c-s,g=c===0?0:f/c;let h=0;if(f!==0){switch(c){case n:h=(i-l)/f+(i<l?6:0);break;case i:h=(l-n)/f+2;break;case l:h=(n-i)/f+4;break}h/=6}return new Mf(He(h*360,2),He(g*100,2),He(c*100,2),He(this.alpha,2))}toHSL(){const n=this.red/255,i=this.green/255,l=this.blue/255,s=Math.min(n,i,l),c=Math.max(n,i,l),f=(c+s)/2,g=c-s;let h=-1,p=-1;if(g===0)h=p=0;else{switch(p=g/(f<.5?c+s:2-c-s),c){case n:h=(i-l)/g+(i<l?6:0);break;case i:h=(l-n)/g+2;break;case l:h=(n-i)/g+4;break}h/=6}return new Df(He(h*360,2),He(p*100,2),He(f*100,2),He(this.alpha,2))}clone(){return new Es(this.red,this.green,this.blue,this.alpha)}getChannelFormatOptions(n){switch(n){case"red":case"green":case"blue":return{style:"decimal"};case"alpha":return{style:"percent"};default:throw new Error("Unknown color channel: "+n)}}formatChannelValue(n,i){let l=this.getChannelFormatOptions(n),s=this.getChannelValue(n);return new Intl.NumberFormat(i,l).format(s)}getChannelRange(n){switch(n){case"red":case"green":case"blue":return{minValue:0,maxValue:255,step:1,pageSize:17};case"alpha":return{minValue:0,maxValue:1,step:.01,pageSize:.1};default:throw new Error("Unknown color channel: "+n)}}toJSON(){return{r:this.red,g:this.green,b:this.blue,a:this.alpha}}getFormat(){return"rgba"}getChannels(){return Es.colorChannels}};Vf(Ty,"colorChannels",["red","green","blue"]);var Ff=Ty,X5=/hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/,ky=class Os extends qf{constructor(n,i,l,s){super(),this.hue=n,this.saturation=i,this.lightness=l,this.alpha=s}static parse(n){let i;if(i=n.match(X5)){const[l,s,c,f]=(i[1]??i[2]).split(",").map(g=>Number(g.trim().replace("%","")));return new Os(uy(l,360),It(s,0,100),It(c,0,100),It(f??1,0,1))}}toString(n){switch(n){case"hex":return this.toRGB().toString("hex");case"hexa":return this.toRGB().toString("hexa");case"hsl":return`hsl(${this.hue}, ${He(this.saturation,2)}%, ${He(this.lightness,2)}%)`;case"css":case"hsla":return`hsla(${this.hue}, ${He(this.saturation,2)}%, ${He(this.lightness,2)}%, ${this.alpha})`;case"hsb":return this.toHSB().toString("hsb");case"rgb":return this.toRGB().toString("rgb");default:return this.toFormat(n).toString(n)}}toFormat(n){switch(n){case"hsla":return this;case"hsba":return this.toHSB();case"rgba":return this.toRGB();default:throw new Error("Unsupported color conversion: hsl -> "+n)}}toHSB(){let n=this.saturation/100,i=this.lightness/100,l=i+n*Math.min(i,1-i);return n=l===0?0:2*(1-i/l),new Mf(He(this.hue,2),He(n*100,2),He(l*100,2),He(this.alpha,2))}toRGB(){let n=this.hue,i=this.saturation/100,l=this.lightness/100,s=i*Math.min(l,1-l),c=(f,g=(f+n/30)%12)=>l-s*Math.max(Math.min(g-3,9-g,1),-1);return new Ff(Math.round(c(0)*255),Math.round(c(8)*255),Math.round(c(4)*255),He(this.alpha,2))}clone(){return new Os(this.hue,this.saturation,this.lightness,this.alpha)}getChannelFormatOptions(n){switch(n){case"hue":return{style:"unit",unit:"degree",unitDisplay:"narrow"};case"saturation":case"lightness":case"alpha":return{style:"percent"};default:throw new Error("Unknown color channel: "+n)}}formatChannelValue(n,i){let l=this.getChannelFormatOptions(n),s=this.getChannelValue(n);return(n==="saturation"||n==="lightness")&&(s/=100),new Intl.NumberFormat(i,l).format(s)}getChannelRange(n){switch(n){case"hue":return{minValue:0,maxValue:360,step:1,pageSize:15};case"saturation":case"lightness":return{minValue:0,maxValue:100,step:1,pageSize:10};case"alpha":return{minValue:0,maxValue:1,step:.01,pageSize:.1};default:throw new Error("Unknown color channel: "+n)}}toJSON(){return{h:this.hue,s:this.saturation,l:this.lightness,a:this.alpha}}getFormat(){return"hsla"}getChannels(){return Os.colorChannels}};Vf(ky,"colorChannels",["hue","saturation","lightness"]);var Df=ky,Z5=/hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/,Ay=class Ts extends qf{constructor(n,i,l,s){super(),this.hue=n,this.saturation=i,this.brightness=l,this.alpha=s}static parse(n){let i;if(i=n.match(Z5)){const[l,s,c,f]=(i[1]??i[2]).split(",").map(g=>Number(g.trim().replace("%","")));return new Ts(uy(l,360),It(s,0,100),It(c,0,100),It(f??1,0,1))}}toString(n){switch(n){case"css":return this.toHSL().toString("css");case"hex":return this.toRGB().toString("hex");case"hexa":return this.toRGB().toString("hexa");case"hsb":return`hsb(${this.hue}, ${He(this.saturation,2)}%, ${He(this.brightness,2)}%)`;case"hsba":return`hsba(${this.hue}, ${He(this.saturation,2)}%, ${He(this.brightness,2)}%, ${this.alpha})`;case"hsl":return this.toHSL().toString("hsl");case"rgb":return this.toRGB().toString("rgb");default:return this.toFormat(n).toString(n)}}toFormat(n){switch(n){case"hsba":return this;case"hsla":return this.toHSL();case"rgba":return this.toRGB();default:throw new Error("Unsupported color conversion: hsb -> "+n)}}toHSL(){let n=this.saturation/100,i=this.brightness/100,l=i*(1-n/2);return n=l===0||l===1?0:(i-l)/Math.min(l,1-l),new Df(He(this.hue,2),He(n*100,2),He(l*100,2),He(this.alpha,2))}toRGB(){let n=this.hue,i=this.saturation/100,l=this.brightness/100,s=(c,f=(c+n/60)%6)=>l-i*l*Math.max(Math.min(f,4-f,1),0);return new Ff(Math.round(s(5)*255),Math.round(s(3)*255),Math.round(s(1)*255),He(this.alpha,2))}clone(){return new Ts(this.hue,this.saturation,this.brightness,this.alpha)}getChannelFormatOptions(n){switch(n){case"hue":return{style:"unit",unit:"degree",unitDisplay:"narrow"};case"saturation":case"brightness":case"alpha":return{style:"percent"};default:throw new Error("Unknown color channel: "+n)}}formatChannelValue(n,i){let l=this.getChannelFormatOptions(n),s=this.getChannelValue(n);return(n==="saturation"||n==="brightness")&&(s/=100),new Intl.NumberFormat(i,l).format(s)}getChannelRange(n){switch(n){case"hue":return{minValue:0,maxValue:360,step:1,pageSize:15};case"saturation":case"brightness":return{minValue:0,maxValue:100,step:1,pageSize:10};case"alpha":return{minValue:0,maxValue:1,step:.01,pageSize:.1};default:throw new Error("Unknown color channel: "+n)}}toJSON(){return{h:this.hue,s:this.saturation,b:this.brightness,a:this.alpha}}getFormat(){return"hsba"}getChannels(){return Ts.colorChannels}};Vf(Ay,"colorChannels",["hue","saturation","brightness"]);var Mf=Ay,Q5="aliceblue:f0f8ff,antiquewhite:faebd7,aqua:00ffff,aquamarine:7fffd4,azure:f0ffff,beige:f5f5dc,bisque:ffe4c4,black:000000,blanchedalmond:ffebcd,blue:0000ff,blueviolet:8a2be2,brown:a52a2a,burlywood:deb887,cadetblue:5f9ea0,chartreuse:7fff00,chocolate:d2691e,coral:ff7f50,cornflowerblue:6495ed,cornsilk:fff8dc,crimson:dc143c,cyan:00ffff,darkblue:00008b,darkcyan:008b8b,darkgoldenrod:b8860b,darkgray:a9a9a9,darkgreen:006400,darkkhaki:bdb76b,darkmagenta:8b008b,darkolivegreen:556b2f,darkorange:ff8c00,darkorchid:9932cc,darkred:8b0000,darksalmon:e9967a,darkseagreen:8fbc8f,darkslateblue:483d8b,darkslategray:2f4f4f,darkturquoise:00ced1,darkviolet:9400d3,deeppink:ff1493,deepskyblue:00bfff,dimgray:696969,dodgerblue:1e90ff,firebrick:b22222,floralwhite:fffaf0,forestgreen:228b22,fuchsia:ff00ff,gainsboro:dcdcdc,ghostwhite:f8f8ff,gold:ffd700,goldenrod:daa520,gray:808080,green:008000,greenyellow:adff2f,honeydew:f0fff0,hotpink:ff69b4,indianred:cd5c5c,indigo:4b0082,ivory:fffff0,khaki:f0e68c,lavender:e6e6fa,lavenderblush:fff0f5,lawngreen:7cfc00,lemonchiffon:fffacd,lightblue:add8e6,lightcoral:f08080,lightcyan:e0ffff,lightgoldenrodyellow:fafad2,lightgrey:d3d3d3,lightgreen:90ee90,lightpink:ffb6c1,lightsalmon:ffa07a,lightseagreen:20b2aa,lightskyblue:87cefa,lightslategray:778899,lightsteelblue:b0c4de,lightyellow:ffffe0,lime:00ff00,limegreen:32cd32,linen:faf0e6,magenta:ff00ff,maroon:800000,mediumaquamarine:66cdaa,mediumblue:0000cd,mediumorchid:ba55d3,mediumpurple:9370d8,mediumseagreen:3cb371,mediumslateblue:7b68ee,mediumspringgreen:00fa9a,mediumturquoise:48d1cc,mediumvioletred:c71585,midnightblue:191970,mintcream:f5fffa,mistyrose:ffe4e1,moccasin:ffe4b5,navajowhite:ffdead,navy:000080,oldlace:fdf5e6,olive:808000,olivedrab:6b8e23,orange:ffa500,orangered:ff4500,orchid:da70d6,palegoldenrod:eee8aa,palegreen:98fb98,paleturquoise:afeeee,palevioletred:d87093,papayawhip:ffefd5,peachpuff:ffdab9,peru:cd853f,pink:ffc0cb,plum:dda0dd,powderblue:b0e0e6,purple:800080,rebeccapurple:663399,red:ff0000,rosybrown:bc8f8f,royalblue:4169e1,saddlebrown:8b4513,salmon:fa8072,sandybrown:f4a460,seagreen:2e8b57,seashell:fff5ee,sienna:a0522d,silver:c0c0c0,skyblue:87ceeb,slateblue:6a5acd,slategray:708090,snow:fffafa,springgreen:00ff7f,steelblue:4682b4,tan:d2b48c,teal:008080,thistle:d8bfd8,tomato:ff6347,turquoise:40e0d0,violet:ee82ee,wheat:f5deb3,white:ffffff,whitesmoke:f5f5f5,yellow:ffff00,yellowgreen:9acd32",J5=e=>{const n=new Map,i=e.split(",");for(let l=0;l<i.length;l++){const[s,c]=i[l].split(":");n.set(s,`#${c}`),s.includes("gray")&&n.set(s.replace("gray","grey"),`#${c}`)}return n},Cb=J5(Q5),qs=e=>{if(Cb.has(e))return qs(Cb.get(e));const n=Ff.parse(e)||Mf.parse(e)||Df.parse(e);if(!n){const i=new Error("Invalid color value: "+e);throw Error.captureStackTrace?.(i,qs),i}return n};const ew=["top","right","bottom","left"],Rn=Math.min,Yt=Math.max,Fs=Math.round,us=Math.floor,Aa=e=>({x:e,y:e}),tw={left:"right",right:"left",bottom:"top",top:"bottom"},aw={start:"end",end:"start"};function Jd(e,n,i){return Yt(e,Rn(n,i))}function Xa(e,n){return typeof e=="function"?e(n):e}function Za(e){return e.split("-")[0]}function bo(e){return e.split("-")[1]}function Pf(e){return e==="x"?"y":"x"}function Lf(e){return e==="y"?"height":"width"}const nw=new Set(["top","bottom"]);function Ta(e){return nw.has(Za(e))?"y":"x"}function Bf(e){return Pf(Ta(e))}function iw(e,n,i){i===void 0&&(i=!1);const l=bo(e),s=Bf(e),c=Lf(s);let f=s==="x"?l===(i?"end":"start")?"right":"left":l==="start"?"bottom":"top";return n.reference[c]>n.floating[c]&&(f=Ds(f)),[f,Ds(f)]}function ow(e){const n=Ds(e);return[ef(e),n,ef(n)]}function ef(e){return e.replace(/start|end/g,n=>aw[n])}const Eb=["left","right"],Ob=["right","left"],lw=["top","bottom"],rw=["bottom","top"];function sw(e,n,i){switch(e){case"top":case"bottom":return i?n?Ob:Eb:n?Eb:Ob;case"left":case"right":return n?lw:rw;default:return[]}}function uw(e,n,i,l){const s=bo(e);let c=sw(Za(e),i==="start",l);return s&&(c=c.map(f=>f+"-"+s),n&&(c=c.concat(c.map(ef)))),c}function Ds(e){return e.replace(/left|right|bottom|top/g,n=>tw[n])}function cw(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ry(e){return typeof e!="number"?cw(e):{top:e,right:e,bottom:e,left:e}}function Ms(e){const{x:n,y:i,width:l,height:s}=e;return{width:l,height:s,top:i,left:n,right:n+l,bottom:i+s,x:n,y:i}}function Tb(e,n,i){let{reference:l,floating:s}=e;const c=Ta(n),f=Bf(n),g=Lf(f),h=Za(n),p=c==="y",y=l.x+l.width/2-s.width/2,x=l.y+l.height/2-s.height/2,v=l[g]/2-s[g]/2;let C;switch(h){case"top":C={x:y,y:l.y-s.height};break;case"bottom":C={x:y,y:l.y+l.height};break;case"right":C={x:l.x+l.width,y:x};break;case"left":C={x:l.x-s.width,y:x};break;default:C={x:l.x,y:l.y}}switch(bo(n)){case"start":C[f]-=v*(i&&p?-1:1);break;case"end":C[f]+=v*(i&&p?-1:1);break}return C}const dw=async(e,n,i)=>{const{placement:l="bottom",strategy:s="absolute",middleware:c=[],platform:f}=i,g=c.filter(Boolean),h=await(f.isRTL==null?void 0:f.isRTL(n));let p=await f.getElementRects({reference:e,floating:n,strategy:s}),{x:y,y:x}=Tb(p,l,h),v=l,C={},E=0;for(let O=0;O<g.length;O++){const{name:_,fn:F}=g[O],{x:I,y:N,data:P,reset:A}=await F({x:y,y:x,initialPlacement:l,placement:v,strategy:s,middlewareData:C,rects:p,platform:f,elements:{reference:e,floating:n}});y=I??y,x=N??x,C={...C,[_]:{...C[_],...P}},A&&E<=50&&(E++,typeof A=="object"&&(A.placement&&(v=A.placement),A.rects&&(p=A.rects===!0?await f.getElementRects({reference:e,floating:n,strategy:s}):A.rects),{x:y,y:x}=Tb(p,v,h)),O=-1)}return{x:y,y:x,placement:v,strategy:s,middlewareData:C}};async function Ll(e,n){var i;n===void 0&&(n={});const{x:l,y:s,platform:c,rects:f,elements:g,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:y="viewport",elementContext:x="floating",altBoundary:v=!1,padding:C=0}=Xa(n,e),E=Ry(C),_=g[v?x==="floating"?"reference":"floating":x],F=Ms(await c.getClippingRect({element:(i=await(c.isElement==null?void 0:c.isElement(_)))==null||i?_:_.contextElement||await(c.getDocumentElement==null?void 0:c.getDocumentElement(g.floating)),boundary:p,rootBoundary:y,strategy:h})),I=x==="floating"?{x:l,y:s,width:f.floating.width,height:f.floating.height}:f.reference,N=await(c.getOffsetParent==null?void 0:c.getOffsetParent(g.floating)),P=await(c.isElement==null?void 0:c.isElement(N))?await(c.getScale==null?void 0:c.getScale(N))||{x:1,y:1}:{x:1,y:1},A=Ms(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({elements:g,rect:I,offsetParent:N,strategy:h}):I);return{top:(F.top-A.top+E.top)/P.y,bottom:(A.bottom-F.bottom+E.bottom)/P.y,left:(F.left-A.left+E.left)/P.x,right:(A.right-F.right+E.right)/P.x}}const fw=e=>({name:"arrow",options:e,async fn(n){const{x:i,y:l,placement:s,rects:c,platform:f,elements:g,middlewareData:h}=n,{element:p,padding:y=0}=Xa(e,n)||{};if(p==null)return{};const x=Ry(y),v={x:i,y:l},C=Bf(s),E=Lf(C),O=await f.getDimensions(p),_=C==="y",F=_?"top":"left",I=_?"bottom":"right",N=_?"clientHeight":"clientWidth",P=c.reference[E]+c.reference[C]-v[C]-c.floating[E],A=v[C]-c.reference[C],$=await(f.getOffsetParent==null?void 0:f.getOffsetParent(p));let Q=$?$[N]:0;(!Q||!await(f.isElement==null?void 0:f.isElement($)))&&(Q=g.floating[N]||c.floating[E]);const Y=P/2-A/2,J=Q/2-O[E]/2-1,K=Rn(x[F],J),de=Rn(x[I],J),te=K,ke=Q-O[E]-de,Ce=Q/2-O[E]/2+Y,re=Jd(te,Ce,ke),D=!h.arrow&&bo(s)!=null&&Ce!==re&&c.reference[E]/2-(Ce<te?K:de)-O[E]/2<0,G=D?Ce<te?Ce-te:Ce-ke:0;return{[C]:v[C]+G,data:{[C]:re,centerOffset:Ce-re-G,...D&&{alignmentOffset:G}},reset:D}}}),gw=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var i,l;const{placement:s,middlewareData:c,rects:f,initialPlacement:g,platform:h,elements:p}=n,{mainAxis:y=!0,crossAxis:x=!0,fallbackPlacements:v,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:O=!0,..._}=Xa(e,n);if((i=c.arrow)!=null&&i.alignmentOffset)return{};const F=Za(s),I=Ta(g),N=Za(g)===g,P=await(h.isRTL==null?void 0:h.isRTL(p.floating)),A=v||(N||!O?[Ds(g)]:ow(g)),$=E!=="none";!v&&$&&A.push(...uw(g,O,E,P));const Q=[g,...A],Y=await Ll(n,_),J=[];let K=((l=c.flip)==null?void 0:l.overflows)||[];if(y&&J.push(Y[F]),x){const Ce=iw(s,f,P);J.push(Y[Ce[0]],Y[Ce[1]])}if(K=[...K,{placement:s,overflows:J}],!J.every(Ce=>Ce<=0)){var de,te;const Ce=(((de=c.flip)==null?void 0:de.index)||0)+1,re=Q[Ce];if(re&&(!(x==="alignment"?I!==Ta(re):!1)||K.every(ae=>Ta(ae.placement)===I?ae.overflows[0]>0:!0)))return{data:{index:Ce,overflows:K},reset:{placement:re}};let D=(te=K.filter(G=>G.overflows[0]<=0).sort((G,ae)=>G.overflows[1]-ae.overflows[1])[0])==null?void 0:te.placement;if(!D)switch(C){case"bestFit":{var ke;const G=(ke=K.filter(ae=>{if($){const ee=Ta(ae.placement);return ee===I||ee==="y"}return!0}).map(ae=>[ae.placement,ae.overflows.filter(ee=>ee>0).reduce((ee,w)=>ee+w,0)]).sort((ae,ee)=>ae[1]-ee[1])[0])==null?void 0:ke[0];G&&(D=G);break}case"initialPlacement":D=g;break}if(s!==D)return{reset:{placement:D}}}return{}}}};function kb(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function Ab(e){return ew.some(n=>e[n]>=0)}const mw=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:i}=n,{strategy:l="referenceHidden",...s}=Xa(e,n);switch(l){case"referenceHidden":{const c=await Ll(n,{...s,elementContext:"reference"}),f=kb(c,i.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:Ab(f)}}}case"escaped":{const c=await Ll(n,{...s,altBoundary:!0}),f=kb(c,i.floating);return{data:{escapedOffsets:f,escaped:Ab(f)}}}default:return{}}}}},_y=new Set(["left","top"]);async function hw(e,n){const{placement:i,platform:l,elements:s}=e,c=await(l.isRTL==null?void 0:l.isRTL(s.floating)),f=Za(i),g=bo(i),h=Ta(i)==="y",p=_y.has(f)?-1:1,y=c&&h?-1:1,x=Xa(n,e);let{mainAxis:v,crossAxis:C,alignmentAxis:E}=typeof x=="number"?{mainAxis:x,crossAxis:0,alignmentAxis:null}:{mainAxis:x.mainAxis||0,crossAxis:x.crossAxis||0,alignmentAxis:x.alignmentAxis};return g&&typeof E=="number"&&(C=g==="end"?E*-1:E),h?{x:C*y,y:v*p}:{x:v*p,y:C*y}}const pw=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var i,l;const{x:s,y:c,placement:f,middlewareData:g}=n,h=await hw(n,e);return f===((i=g.offset)==null?void 0:i.placement)&&(l=g.arrow)!=null&&l.alignmentOffset?{}:{x:s+h.x,y:c+h.y,data:{...h,placement:f}}}}},bw=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:i,y:l,placement:s}=n,{mainAxis:c=!0,crossAxis:f=!1,limiter:g={fn:_=>{let{x:F,y:I}=_;return{x:F,y:I}}},...h}=Xa(e,n),p={x:i,y:l},y=await Ll(n,h),x=Ta(Za(s)),v=Pf(x);let C=p[v],E=p[x];if(c){const _=v==="y"?"top":"left",F=v==="y"?"bottom":"right",I=C+y[_],N=C-y[F];C=Jd(I,C,N)}if(f){const _=x==="y"?"top":"left",F=x==="y"?"bottom":"right",I=E+y[_],N=E-y[F];E=Jd(I,E,N)}const O=g.fn({...n,[v]:C,[x]:E});return{...O,data:{x:O.x-i,y:O.y-l,enabled:{[v]:c,[x]:f}}}}}},yw=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:i,y:l,placement:s,rects:c,middlewareData:f}=n,{offset:g=0,mainAxis:h=!0,crossAxis:p=!0}=Xa(e,n),y={x:i,y:l},x=Ta(s),v=Pf(x);let C=y[v],E=y[x];const O=Xa(g,n),_=typeof O=="number"?{mainAxis:O,crossAxis:0}:{mainAxis:0,crossAxis:0,...O};if(h){const N=v==="y"?"height":"width",P=c.reference[v]-c.floating[N]+_.mainAxis,A=c.reference[v]+c.reference[N]-_.mainAxis;C<P?C=P:C>A&&(C=A)}if(p){var F,I;const N=v==="y"?"width":"height",P=_y.has(Za(s)),A=c.reference[x]-c.floating[N]+(P&&((F=f.offset)==null?void 0:F[x])||0)+(P?0:_.crossAxis),$=c.reference[x]+c.reference[N]+(P?0:((I=f.offset)==null?void 0:I[x])||0)-(P?_.crossAxis:0);E<A?E=A:E>$&&(E=$)}return{[v]:C,[x]:E}}}},vw=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){var i,l;const{placement:s,rects:c,platform:f,elements:g}=n,{apply:h=()=>{},...p}=Xa(e,n),y=await Ll(n,p),x=Za(s),v=bo(s),C=Ta(s)==="y",{width:E,height:O}=c.floating;let _,F;x==="top"||x==="bottom"?(_=x,F=v===(await(f.isRTL==null?void 0:f.isRTL(g.floating))?"start":"end")?"left":"right"):(F=x,_=v==="end"?"top":"bottom");const I=O-y.top-y.bottom,N=E-y.left-y.right,P=Rn(O-y[_],I),A=Rn(E-y[F],N),$=!n.middlewareData.shift;let Q=P,Y=A;if((i=n.middlewareData.shift)!=null&&i.enabled.x&&(Y=N),(l=n.middlewareData.shift)!=null&&l.enabled.y&&(Q=I),$&&!v){const K=Yt(y.left,0),de=Yt(y.right,0),te=Yt(y.top,0),ke=Yt(y.bottom,0);C?Y=E-2*(K!==0||de!==0?K+de:Yt(y.left,y.right)):Q=O-2*(te!==0||ke!==0?te+ke:Yt(y.top,y.bottom))}await h({...n,availableWidth:Y,availableHeight:Q});const J=await f.getDimensions(g.floating);return E!==J.width||O!==J.height?{reset:{rects:!0}}:{}}}};function Zs(){return typeof window<"u"}function yo(e){return Ny(e)?(e.nodeName||"").toLowerCase():"#document"}function Xt(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function za(e){var n;return(n=(Ny(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Ny(e){return Zs()?e instanceof Node||e instanceof Xt(e).Node:!1}function ha(e){return Zs()?e instanceof Element||e instanceof Xt(e).Element:!1}function _a(e){return Zs()?e instanceof HTMLElement||e instanceof Xt(e).HTMLElement:!1}function Rb(e){return!Zs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Xt(e).ShadowRoot}const xw=new Set(["inline","contents"]);function Ul(e){const{overflow:n,overflowX:i,overflowY:l,display:s}=pa(e);return/auto|scroll|overlay|hidden|clip/.test(n+l+i)&&!xw.has(s)}const Sw=new Set(["table","td","th"]);function ww(e){return Sw.has(yo(e))}const Cw=[":popover-open",":modal"];function Qs(e){return Cw.some(n=>{try{return e.matches(n)}catch{return!1}})}const Ew=["transform","translate","scale","rotate","perspective"],Ow=["transform","translate","scale","rotate","perspective","filter"],Tw=["paint","layout","strict","content"];function jf(e){const n=Hf(),i=ha(e)?pa(e):e;return Ew.some(l=>i[l]?i[l]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!n&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!n&&(i.filter?i.filter!=="none":!1)||Ow.some(l=>(i.willChange||"").includes(l))||Tw.some(l=>(i.contain||"").includes(l))}function kw(e){let n=_n(e);for(;_a(n)&&!ho(n);){if(jf(n))return n;if(Qs(n))return null;n=_n(n)}return null}function Hf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Aw=new Set(["html","body","#document"]);function ho(e){return Aw.has(yo(e))}function pa(e){return Xt(e).getComputedStyle(e)}function Js(e){return ha(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function _n(e){if(yo(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Rb(e)&&e.host||za(e);return Rb(n)?n.host:n}function zy(e){const n=_n(e);return ho(n)?e.ownerDocument?e.ownerDocument.body:e.body:_a(n)&&Ul(n)?n:zy(n)}function Bl(e,n,i){var l;n===void 0&&(n=[]),i===void 0&&(i=!0);const s=zy(e),c=s===((l=e.ownerDocument)==null?void 0:l.body),f=Xt(s);if(c){const g=tf(f);return n.concat(f,f.visualViewport||[],Ul(s)?s:[],g&&i?Bl(g):[])}return n.concat(s,Bl(s,[],i))}function tf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Iy(e){const n=pa(e);let i=parseFloat(n.width)||0,l=parseFloat(n.height)||0;const s=_a(e),c=s?e.offsetWidth:i,f=s?e.offsetHeight:l,g=Fs(i)!==c||Fs(l)!==f;return g&&(i=c,l=f),{width:i,height:l,$:g}}function Uf(e){return ha(e)?e:e.contextElement}function fo(e){const n=Uf(e);if(!_a(n))return Aa(1);const i=n.getBoundingClientRect(),{width:l,height:s,$:c}=Iy(n);let f=(c?Fs(i.width):i.width)/l,g=(c?Fs(i.height):i.height)/s;return(!f||!Number.isFinite(f))&&(f=1),(!g||!Number.isFinite(g))&&(g=1),{x:f,y:g}}const Rw=Aa(0);function Vy(e){const n=Xt(e);return!Hf()||!n.visualViewport?Rw:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function _w(e,n,i){return n===void 0&&(n=!1),!i||n&&i!==Xt(e)?!1:n}function si(e,n,i,l){n===void 0&&(n=!1),i===void 0&&(i=!1);const s=e.getBoundingClientRect(),c=Uf(e);let f=Aa(1);n&&(l?ha(l)&&(f=fo(l)):f=fo(e));const g=_w(c,i,l)?Vy(c):Aa(0);let h=(s.left+g.x)/f.x,p=(s.top+g.y)/f.y,y=s.width/f.x,x=s.height/f.y;if(c){const v=Xt(c),C=l&&ha(l)?Xt(l):l;let E=v,O=tf(E);for(;O&&l&&C!==E;){const _=fo(O),F=O.getBoundingClientRect(),I=pa(O),N=F.left+(O.clientLeft+parseFloat(I.paddingLeft))*_.x,P=F.top+(O.clientTop+parseFloat(I.paddingTop))*_.y;h*=_.x,p*=_.y,y*=_.x,x*=_.y,h+=N,p+=P,E=Xt(O),O=tf(E)}}return Ms({width:y,height:x,x:h,y:p})}function eu(e,n){const i=Js(e).scrollLeft;return n?n.left+i:si(za(e)).left+i}function qy(e,n){const i=e.getBoundingClientRect(),l=i.left+n.scrollLeft-eu(e,i),s=i.top+n.scrollTop;return{x:l,y:s}}function Nw(e){let{elements:n,rect:i,offsetParent:l,strategy:s}=e;const c=s==="fixed",f=za(l),g=n?Qs(n.floating):!1;if(l===f||g&&c)return i;let h={scrollLeft:0,scrollTop:0},p=Aa(1);const y=Aa(0),x=_a(l);if((x||!x&&!c)&&((yo(l)!=="body"||Ul(f))&&(h=Js(l)),_a(l))){const C=si(l);p=fo(l),y.x=C.x+l.clientLeft,y.y=C.y+l.clientTop}const v=f&&!x&&!c?qy(f,h):Aa(0);return{width:i.width*p.x,height:i.height*p.y,x:i.x*p.x-h.scrollLeft*p.x+y.x+v.x,y:i.y*p.y-h.scrollTop*p.y+y.y+v.y}}function zw(e){return Array.from(e.getClientRects())}function Iw(e){const n=za(e),i=Js(e),l=e.ownerDocument.body,s=Yt(n.scrollWidth,n.clientWidth,l.scrollWidth,l.clientWidth),c=Yt(n.scrollHeight,n.clientHeight,l.scrollHeight,l.clientHeight);let f=-i.scrollLeft+eu(e);const g=-i.scrollTop;return pa(l).direction==="rtl"&&(f+=Yt(n.clientWidth,l.clientWidth)-s),{width:s,height:c,x:f,y:g}}const _b=25;function Vw(e,n){const i=Xt(e),l=za(e),s=i.visualViewport;let c=l.clientWidth,f=l.clientHeight,g=0,h=0;if(s){c=s.width,f=s.height;const y=Hf();(!y||y&&n==="fixed")&&(g=s.offsetLeft,h=s.offsetTop)}const p=eu(l);if(p<=0){const y=l.ownerDocument,x=y.body,v=getComputedStyle(x),C=y.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,E=Math.abs(l.clientWidth-x.clientWidth-C);E<=_b&&(c-=E)}else p<=_b&&(c+=p);return{width:c,height:f,x:g,y:h}}const qw=new Set(["absolute","fixed"]);function Fw(e,n){const i=si(e,!0,n==="fixed"),l=i.top+e.clientTop,s=i.left+e.clientLeft,c=_a(e)?fo(e):Aa(1),f=e.clientWidth*c.x,g=e.clientHeight*c.y,h=s*c.x,p=l*c.y;return{width:f,height:g,x:h,y:p}}function Nb(e,n,i){let l;if(n==="viewport")l=Vw(e,i);else if(n==="document")l=Iw(za(e));else if(ha(n))l=Fw(n,i);else{const s=Vy(e);l={x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}}return Ms(l)}function Fy(e,n){const i=_n(e);return i===n||!ha(i)||ho(i)?!1:pa(i).position==="fixed"||Fy(i,n)}function Dw(e,n){const i=n.get(e);if(i)return i;let l=Bl(e,[],!1).filter(g=>ha(g)&&yo(g)!=="body"),s=null;const c=pa(e).position==="fixed";let f=c?_n(e):e;for(;ha(f)&&!ho(f);){const g=pa(f),h=jf(f);!h&&g.position==="fixed"&&(s=null),(c?!h&&!s:!h&&g.position==="static"&&!!s&&qw.has(s.position)||Ul(f)&&!h&&Fy(e,f))?l=l.filter(y=>y!==f):s=g,f=_n(f)}return n.set(e,l),l}function Mw(e){let{element:n,boundary:i,rootBoundary:l,strategy:s}=e;const f=[...i==="clippingAncestors"?Qs(n)?[]:Dw(n,this._c):[].concat(i),l],g=f[0],h=f.reduce((p,y)=>{const x=Nb(n,y,s);return p.top=Yt(x.top,p.top),p.right=Rn(x.right,p.right),p.bottom=Rn(x.bottom,p.bottom),p.left=Yt(x.left,p.left),p},Nb(n,g,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function Pw(e){const{width:n,height:i}=Iy(e);return{width:n,height:i}}function Lw(e,n,i){const l=_a(n),s=za(n),c=i==="fixed",f=si(e,!0,c,n);let g={scrollLeft:0,scrollTop:0};const h=Aa(0);function p(){h.x=eu(s)}if(l||!l&&!c)if((yo(n)!=="body"||Ul(s))&&(g=Js(n)),l){const C=si(n,!0,c,n);h.x=C.x+n.clientLeft,h.y=C.y+n.clientTop}else s&&p();c&&!l&&s&&p();const y=s&&!l&&!c?qy(s,g):Aa(0),x=f.left+g.scrollLeft-h.x-y.x,v=f.top+g.scrollTop-h.y-y.y;return{x,y:v,width:f.width,height:f.height}}function Id(e){return pa(e).position==="static"}function zb(e,n){if(!_a(e)||pa(e).position==="fixed")return null;if(n)return n(e);let i=e.offsetParent;return za(e)===i&&(i=i.ownerDocument.body),i}function Dy(e,n){const i=Xt(e);if(Qs(e))return i;if(!_a(e)){let s=_n(e);for(;s&&!ho(s);){if(ha(s)&&!Id(s))return s;s=_n(s)}return i}let l=zb(e,n);for(;l&&ww(l)&&Id(l);)l=zb(l,n);return l&&ho(l)&&Id(l)&&!jf(l)?i:l||kw(e)||i}const Bw=async function(e){const n=this.getOffsetParent||Dy,i=this.getDimensions,l=await i(e.floating);return{reference:Lw(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:l.width,height:l.height}}};function jw(e){return pa(e).direction==="rtl"}const Hw={convertOffsetParentRelativeRectToViewportRelativeRect:Nw,getDocumentElement:za,getClippingRect:Mw,getOffsetParent:Dy,getElementRects:Bw,getClientRects:zw,getDimensions:Pw,getScale:fo,isElement:ha,isRTL:jw};function My(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function Uw(e,n){let i=null,l;const s=za(e);function c(){var g;clearTimeout(l),(g=i)==null||g.disconnect(),i=null}function f(g,h){g===void 0&&(g=!1),h===void 0&&(h=1),c();const p=e.getBoundingClientRect(),{left:y,top:x,width:v,height:C}=p;if(g||n(),!v||!C)return;const E=us(x),O=us(s.clientWidth-(y+v)),_=us(s.clientHeight-(x+C)),F=us(y),N={rootMargin:-E+"px "+-O+"px "+-_+"px "+-F+"px",threshold:Yt(0,Rn(1,h))||1};let P=!0;function A($){const Q=$[0].intersectionRatio;if(Q!==h){if(!P)return f();Q?f(!1,Q):l=setTimeout(()=>{f(!1,1e-7)},1e3)}Q===1&&!My(p,e.getBoundingClientRect())&&f(),P=!1}try{i=new IntersectionObserver(A,{...N,root:s.ownerDocument})}catch{i=new IntersectionObserver(A,N)}i.observe(e)}return f(!0),c}function Gw(e,n,i,l){l===void 0&&(l={});const{ancestorScroll:s=!0,ancestorResize:c=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:h=!1}=l,p=Uf(e),y=s||c?[...p?Bl(p):[],...Bl(n)]:[];y.forEach(F=>{s&&F.addEventListener("scroll",i,{passive:!0}),c&&F.addEventListener("resize",i)});const x=p&&g?Uw(p,i):null;let v=-1,C=null;f&&(C=new ResizeObserver(F=>{let[I]=F;I&&I.target===p&&C&&(C.unobserve(n),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var N;(N=C)==null||N.observe(n)})),i()}),p&&!h&&C.observe(p),C.observe(n));let E,O=h?si(e):null;h&&_();function _(){const F=si(e);O&&!My(O,F)&&i(),O=F,E=requestAnimationFrame(_)}return i(),()=>{var F;y.forEach(I=>{s&&I.removeEventListener("scroll",i),c&&I.removeEventListener("resize",i)}),x?.(),(F=C)==null||F.disconnect(),C=null,h&&cancelAnimationFrame(E)}}const Ww=pw,$w=bw,Yw=gw,Kw=vw,Xw=mw,Zw=fw,Qw=yw,Jw=(e,n,i)=>{const l=new Map,s={platform:Hw,...i},c={...s.platform,_c:l};return dw(e,n,{...s,platform:c})};function Ib(e=0,n=0,i=0,l=0){if(typeof DOMRect=="function")return new DOMRect(e,n,i,l);const s={x:e,y:n,width:i,height:l,top:n,right:e+i,bottom:n+l,left:e};return{...s,toJSON:()=>s}}function e6(e){if(!e)return Ib();const{x:n,y:i,width:l,height:s}=e;return Ib(n,i,l,s)}function t6(e,n){return{contextElement:qt(e)?e:void 0,getBoundingClientRect:()=>{const i=e,l=n?.(i);return l||!i?e6(l):i.getBoundingClientRect()}}}var Vb=e=>({variable:e,reference:`var(${e})`}),Py={transformOrigin:Vb("--transform-origin"),arrowOffset:Vb("--arrow-offset")},a6=e=>e==="top"||e==="bottom"?"y":"x";function n6(e,n){return{name:"transformOrigin",fn(i){const{elements:l,middlewareData:s,placement:c,rects:f,y:g}=i,h=c.split("-")[0],p=a6(h),y=s.arrow?.x||0,x=s.arrow?.y||0,v=n?.clientWidth||0,C=n?.clientHeight||0,E=y+v/2,O=x+C/2,_=Math.abs(s.shift?.y||0),F=f.reference.height/2,I=C/2,N=e.offset?.mainAxis??e.gutter,P=typeof N=="number"?N+I:N??I,A=_>P,$={top:`${E}px calc(100% + ${P}px)`,bottom:`${E}px ${-P}px`,left:`calc(100% + ${P}px) ${O}px`,right:`${-P}px ${O}px`}[h],Q=`${E}px ${f.reference.y+F-g}px`,Y=!!e.overlap&&p==="y"&&A;return l.floating.style.setProperty(Py.transformOrigin.variable,Y?Q:$),{data:{transformOrigin:Y?Q:$}}}}}var i6={name:"rects",fn({rects:e}){return{data:e}}},o6=e=>{if(e)return{name:"shiftArrow",fn({placement:n,middlewareData:i}){if(!i.arrow)return{};const{x:l,y:s}=i.arrow,c=n.split("-")[0];return Object.assign(e.style,{left:l!=null?`${l}px`:"",top:s!=null?`${s}px`:"",[c]:`calc(100% + ${Py.arrowOffset.reference})`}),{}}}};function l6(e){const[n,i]=e.split("-");return{side:n,align:i,hasAlign:i!=null}}function r6(e){return e.split("-")[0]}var s6={strategy:"absolute",placement:"bottom",listeners:!0,gutter:8,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,overflowPadding:8,arrowPadding:4};function qb(e,n){const i=e.devicePixelRatio||1;return Math.round(n*i)/i}function Gf(e){return typeof e=="function"?e():e==="clipping-ancestors"?"clippingAncestors":e}function u6(e,n,i){const l=e||n.createElement("div");return Zw({element:l,padding:i.arrowPadding})}function c6(e,n){if(!c3(n.offset??n.gutter))return Ww(({placement:i})=>{const l=(e?.clientHeight||0)/2,s=n.offset?.mainAxis??n.gutter,c=typeof s=="number"?s+l:s??l,{hasAlign:f}=l6(i),g=f?void 0:n.shift,h=n.offset?.crossAxis??g;return dy({crossAxis:h,mainAxis:c,alignmentAxis:n.shift})})}function d6(e){if(!e.flip)return;const n=Gf(e.boundary);return Yw({...n?{boundary:n}:void 0,padding:e.overflowPadding,fallbackPlacements:e.flip===!0?void 0:e.flip})}function f6(e){if(!e.slide&&!e.overlap)return;const n=Gf(e.boundary);return $w({...n?{boundary:n}:void 0,mainAxis:e.slide,crossAxis:e.overlap,padding:e.overflowPadding,limiter:Qw()})}function g6(e){return Kw({padding:e.overflowPadding,apply({elements:n,rects:i,availableHeight:l,availableWidth:s}){const c=n.floating,f=Math.round(i.reference.width),g=Math.round(i.reference.height);s=Math.floor(s),l=Math.floor(l),c.style.setProperty("--reference-width",`${f}px`),c.style.setProperty("--reference-height",`${g}px`),c.style.setProperty("--available-width",`${s}px`),c.style.setProperty("--available-height",`${l}px`)}})}function m6(e){if(e.hideWhenDetached)return Xw({strategy:"referenceHidden",boundary:Gf(e.boundary)??"clippingAncestors"})}function h6(e){return e?e===!0?{ancestorResize:!0,ancestorScroll:!0,elementResize:!0,layoutShift:!0}:e:{}}function p6(e,n,i={}){const l=t6(e,i.getAnchorRect);if(!n||!l)return;const s=Object.assign({},s6,i),c=n.querySelector("[data-part=arrow]"),f=[c6(c,s),d6(s),f6(s),u6(c,n.ownerDocument,s),o6(c),n6({gutter:s.gutter,offset:s.offset,overlap:s.overlap},c),g6(s),m6(s),i6],{placement:g,strategy:h,onComplete:p,onPositioned:y}=s,x=async()=>{if(!l||!n)return;const O=await Jw(l,n,{placement:g,middleware:f,strategy:h});p?.(O),y?.({placed:!0});const _=vt(n),F=qb(_,O.x),I=qb(_,O.y);n.style.setProperty("--x",`${F}px`),n.style.setProperty("--y",`${I}px`),s.hideWhenDetached&&(O.middlewareData.hide?.referenceHidden?(n.style.setProperty("visibility","hidden"),n.style.setProperty("pointer-events","none")):(n.style.removeProperty("visibility"),n.style.removeProperty("pointer-events")));const N=n.firstElementChild;if(N){const P=K3(N);n.style.setProperty("--z-index",P.zIndex)}},v=async()=>{i.updatePosition?(await i.updatePosition({updatePosition:x,floatingElement:n}),y?.({placed:!0})):await x()},C=h6(s.listeners),E=s.listeners?Gw(l,n,v,C):b3;return v(),()=>{E?.(),y?.({placed:!1})}}function ba(e,n,i={}){const{defer:l,...s}=i,c=l?Te:g=>g(),f=[];return f.push(c(()=>{const g=typeof e=="function"?e():e,h=typeof n=="function"?n():n;f.push(p6(g,h,s))})),()=>{f.forEach(g=>g?.())}}function b6(e){const n={each(i){for(let l=0;l<e.frames?.length;l+=1){const s=e.frames[l];s&&i(s)}},addEventListener(i,l,s){return n.each(c=>{try{c.document.addEventListener(i,l,s)}catch{}}),()=>{try{n.removeEventListener(i,l,s)}catch{}}},removeEventListener(i,l,s){n.each(c=>{try{c.document.removeEventListener(i,l,s)}catch{}})}};return n}function y6(e){const n=e.frameElement!=null?e.parent:null;return{addEventListener:(i,l,s)=>{try{n?.addEventListener(i,l,s)}catch{}return()=>{try{n?.removeEventListener(i,l,s)}catch{}}},removeEventListener:(i,l,s)=>{try{n?.removeEventListener(i,l,s)}catch{}}}}var Fb="pointerdown.outside",Db="focus.outside";function v6(e){for(const n of e)if(qt(n)&&Rf(n))return!0;return!1}var Ly=e=>"clientY"in e;function x6(e,n){if(!Ly(n)||!e)return!1;const i=e.getBoundingClientRect();return i.width===0||i.height===0?!1:i.top<=n.clientY&&n.clientY<=i.top+i.height&&i.left<=n.clientX&&n.clientX<=i.left+i.width}function S6(e,n){return e.y<=n.y&&n.y<=e.y+e.height&&e.x<=n.x&&n.x<=e.x+e.width}function Mb(e,n){if(!n||!Ly(e))return!1;const i=n.scrollHeight>n.clientHeight,l=i&&e.clientX>n.offsetLeft+n.clientWidth,s=n.scrollWidth>n.clientWidth,c=s&&e.clientY>n.offsetTop+n.clientHeight,f={x:n.offsetLeft,y:n.offsetTop,width:n.clientWidth+(i?16:0),height:n.clientHeight+(s?16:0)},g={x:e.clientX,y:e.clientY};return S6(f,g)?l||c:!1}function w6(e,n){const{exclude:i,onFocusOutside:l,onPointerDownOutside:s,onInteractOutside:c,defer:f}=n;if(!e)return;const g=Qa(e),h=vt(e),p=b6(h),y=y6(h);function x(I,N){if(!qt(N)||!N.isConnected||ri(e,N)||x6(e,I))return!1;const P=g.querySelector(`[aria-controls="${e.id}"]`);if(P){const $=zs(P);if(Mb(I,$))return!1}const A=zs(e);return Mb(I,A)?!1:!i?.(N)}const v=new Set,C=Ml(e?.getRootNode());function E(I){function N(P){const A=f&&!Sb()?Te:Y=>Y(),$=P??I,Q=$?.composedPath?.()??[$?.target];A(()=>{const Y=C?Q[0]:An(I);if(!(!e||!x(I,Y))){if(s||c){const J=Xd(s,c);e.addEventListener(Fb,J,{once:!0})}Pb(e,Fb,{bubbles:!1,cancelable:!0,detail:{originalEvent:$,contextmenu:r5($),focusable:v6(Q),target:Y}})}})}I.pointerType==="touch"?(v.forEach(P=>P()),v.add(yt(g,"click",N,{once:!0})),v.add(y.addEventListener("click",N,{once:!0})),v.add(p.addEventListener("click",N,{once:!0}))):N()}const O=new Set,_=setTimeout(()=>{O.add(yt(g,"pointerdown",E,!0)),O.add(y.addEventListener("pointerdown",E,!0)),O.add(p.addEventListener("pointerdown",E,!0))},0);function F(I){(f?Te:P=>P())(()=>{const P=An(I);if(!(!e||!x(I,P))){if(l||c){const A=Xd(l,c);e.addEventListener(Db,A,{once:!0})}Pb(e,Db,{bubbles:!1,cancelable:!0,detail:{originalEvent:I,contextmenu:!1,focusable:Rf(P),target:P}})}})}return Sb()||(O.add(yt(g,"focusin",F,!0)),O.add(y.addEventListener("focusin",F,!0)),O.add(p.addEventListener("focusin",F,!0))),()=>{clearTimeout(_),v.forEach(I=>I()),O.forEach(I=>I())}}function C6(e,n){const{defer:i}=n,l=i?Te:c=>c(),s=[];return s.push(l(()=>{const c=typeof e=="function"?e():e;s.push(w6(c,n))})),()=>{s.forEach(c=>c?.())}}function Pb(e,n,i){const l=e.ownerDocument.defaultView||window,s=new l.CustomEvent(n,i);return e.dispatchEvent(s)}function E6(e,n){const i=l=>{l.key==="Escape"&&(l.isComposing||n?.(l))};return yt(Qa(e),"keydown",i,{capture:!0})}var Lb="layer:request-dismiss",sa={layers:[],branches:[],count(){return this.layers.length},pointerBlockingLayers(){return this.layers.filter(e=>e.pointerBlocking)},topMostPointerBlockingLayer(){return[...this.pointerBlockingLayers()].slice(-1)[0]},hasPointerBlockingLayer(){return this.pointerBlockingLayers().length>0},isBelowPointerBlockingLayer(e){const n=this.indexOf(e),i=this.topMostPointerBlockingLayer()?this.indexOf(this.topMostPointerBlockingLayer()?.node):-1;return n<i},isTopMost(e){return this.layers[this.count()-1]?.node===e},getNestedLayers(e){return Array.from(this.layers).slice(this.indexOf(e)+1)},isInNestedLayer(e,n){return this.getNestedLayers(e).some(i=>ri(i.node,n))},isInBranch(e){return Array.from(this.branches).some(n=>ri(n,e))},add(e){this.layers.push(e),this.syncLayerIndex()},addBranch(e){this.branches.push(e)},remove(e){const n=this.indexOf(e);n<0||(n<this.count()-1&&this.getNestedLayers(e).forEach(l=>sa.dismiss(l.node,e)),this.layers.splice(n,1),this.syncLayerIndex())},removeBranch(e){const n=this.branches.indexOf(e);n>=0&&this.branches.splice(n,1)},syncLayerIndex(){this.layers.forEach((e,n)=>{e.node.style.setProperty("--layer-index",`${n}`)})},indexOf(e){return this.layers.findIndex(n=>n.node===e)},dismiss(e,n){const i=this.indexOf(e);if(i===-1)return;const l=this.layers[i];T6(e,Lb,s=>{l.requestDismiss?.(s),s.defaultPrevented||l?.dismiss()}),O6(e,Lb,{originalLayer:e,targetLayer:n,originalIndex:i,targetIndex:n?this.indexOf(n):-1}),this.syncLayerIndex()},clear(){this.remove(this.layers[0].node)}};function O6(e,n,i){const l=e.ownerDocument.defaultView||window,s=new l.CustomEvent(n,{cancelable:!0,bubbles:!0,detail:i});return e.dispatchEvent(s)}function T6(e,n,i){e.addEventListener(n,i,{once:!0})}var Bb;function jb(){sa.layers.forEach(({node:e})=>{e.style.pointerEvents=sa.isBelowPointerBlockingLayer(e)?"none":"auto"})}function k6(e){e.style.pointerEvents=""}function A6(e,n){const i=Qa(e),l=[];return sa.hasPointerBlockingLayer()&&!i.body.hasAttribute("data-inert")&&(Bb=document.body.style.pointerEvents,queueMicrotask(()=>{i.body.style.pointerEvents="none",i.body.setAttribute("data-inert","")})),n?.forEach(s=>{const[c,f]=j5(()=>{const g=s();return qt(g)?g:null},{timeout:1e3});c.then(g=>l.push(M5(g,{pointerEvents:"auto"}))),l.push(f)}),()=>{sa.hasPointerBlockingLayer()||(queueMicrotask(()=>{i.body.style.pointerEvents=Bb,i.body.removeAttribute("data-inert"),i.body.style.length===0&&i.body.removeAttribute("style")}),l.forEach(s=>s()))}}function R6(e,n){const{warnOnMissingNode:i=!0}=n;if(i&&!e){fy("[@zag-js/dismissable] node is `null` or `undefined`");return}if(!e)return;const{onDismiss:l,onRequestDismiss:s,pointerBlocking:c,exclude:f,debug:g}=n,h={dismiss:l,node:e,pointerBlocking:c,requestDismiss:s};sa.add(h),jb();function p(E){const O=An(E.detail.originalEvent);sa.isBelowPointerBlockingLayer(e)||sa.isInBranch(O)||(n.onPointerDownOutside?.(E),n.onInteractOutside?.(E),!E.defaultPrevented&&(g&&console.log("onPointerDownOutside:",E.detail.originalEvent),l?.()))}function y(E){const O=An(E.detail.originalEvent);sa.isInBranch(O)||(n.onFocusOutside?.(E),n.onInteractOutside?.(E),!E.defaultPrevented&&(g&&console.log("onFocusOutside:",E.detail.originalEvent),l?.()))}function x(E){sa.isTopMost(e)&&(n.onEscapeKeyDown?.(E),!E.defaultPrevented&&l&&(E.preventDefault(),l()))}function v(E){if(!e)return!1;const O=typeof f=="function"?f():f,_=Array.isArray(O)?O:[O],F=n.persistentElements?.map(I=>I()).filter(qt);return F&&_.push(...F),_.some(I=>ri(I,E))||sa.isInNestedLayer(e,E)}const C=[c?A6(e,n.persistentElements):void 0,E6(e,x),C6(e,{exclude:v,onFocusOutside:y,onPointerDownOutside:p,defer:n.defer})];return()=>{sa.remove(e),jb(),k6(e),C.forEach(E=>E?.())}}function Gl(e,n){const{defer:i}=n,l=i?Te:c=>c(),s=[];return s.push(l(()=>{const c=oy(e)?e():e;s.push(R6(c,n))})),()=>{s.forEach(c=>c?.())}}var By=ue("color-picker",["root","label","control","trigger","positioner","content","area","areaThumb","valueText","areaBackground","channelSlider","channelSliderLabel","channelSliderTrack","channelSliderThumb","channelSliderValueText","channelInput","transparencyGrid","swatchGroup","swatchTrigger","swatchIndicator","swatch","eyeDropperTrigger","formatTrigger","formatSelect"]);By.build();var _6=e=>e.ids?.hiddenInput??`color-picker:${e.id}:hidden-input`,N6=e=>e.ids?.control??`color-picker:${e.id}:control`,z6=e=>e.ids?.trigger??`color-picker:${e.id}:trigger`,I6=e=>e.ids?.content??`color-picker:${e.id}:content`,V6=e=>e.ids?.positioner??`color-picker:${e.id}:positioner`,q6=e=>e.ids?.formatSelect??`color-picker:${e.id}:format-select`,F6=e=>e.ids?.area??`color-picker:${e.id}:area`,D6=e=>e.ids?.areaThumb??`color-picker:${e.id}:area-thumb`,M6=(e,n)=>e.ids?.channelSliderTrack?.(n)??`color-picker:${e.id}:slider-track:${n}`,P6=(e,n)=>e.ids?.channelSliderThumb?.(n)??`color-picker:${e.id}:slider-thumb:${n}`,ks=e=>e.getById(I6(e)),L6=e=>e.getById(D6(e)),B6=(e,n)=>e.getById(P6(e,n)),j6=e=>e.getById(q6(e)),Hb=e=>e.getById(_6(e)),H6=e=>e.getById(F6(e)),U6=(e,n,i)=>{const l=H6(e);if(!l)return;const{getPercentValue:s}=wy(n,l);return{x:s({dir:i,orientation:"horizontal"}),y:s({orientation:"vertical"})}},G6=e=>e.getById(N6(e)),Vd=e=>e.getById(z6(e)),W6=e=>e.getById(V6(e)),$6=(e,n)=>e.getById(M6(e,n)),Y6=(e,n,i,l)=>{const s=$6(e,i);if(!s)return;const{getPercentValue:c}=wy(n,s);return{x:c({dir:l,orientation:"horizontal"}),y:c({orientation:"vertical"})}},K6=e=>[...Vs(ks(e),"input[data-channel]"),...Vs(G6(e),"input[data-channel]")];function X6(e,n){if(n==null)return"";if(n==="hex")return e.toString("hex");if(n==="css")return e.toString("css");if(n in e)return e.getChannelValue(n).toString();const i=e.getFormat()==="hsla";switch(n){case"hue":return i?e.toFormat("hsla").getChannelValue("hue").toString():e.toFormat("hsba").getChannelValue("hue").toString();case"saturation":return i?e.toFormat("hsla").getChannelValue("saturation").toString():e.toFormat("hsba").getChannelValue("saturation").toString();case"lightness":return e.toFormat("hsla").getChannelValue("lightness").toString();case"brightness":return e.toFormat("hsba").getChannelValue("brightness").toString();case"red":case"green":case"blue":return e.toFormat("rgba").getChannelValue(n).toString();default:return e.getChannelValue(n).toString()}}var Ub=e=>qs(e),Z6=/^[0-9a-fA-F]{3,8}$/;function Q6(e){return Z6.test(e)}function J6(e){return e.startsWith("#")?e:Q6(e)?`#${e}`:e}var{and:eC}=zn();eC("isOpenControlled","closeOnSelect");function Gb(e,n,i){const l=K6(e);Te(()=>{l.forEach(s=>{const c=s.dataset.channel;Ks(s,X6(i||n,c))})})}function tC(e,n){const i=j6(e);i&&Te(()=>Ks(i,n))}ce()(["closeOnSelect","dir","disabled","format","defaultFormat","getRootNode","id","ids","initialFocusEl","inline","name","positioning","onFocusOutside","onFormatChange","onInteractOutside","onOpenChange","onPointerDownOutside","onValueChange","onValueChangeEnd","defaultOpen","open","positioning","required","readOnly","value","defaultValue","invalid","openAutoFocus"]);ce()(["xChannel","yChannel"]);ce()(["channel","orientation"]);ce()(["value","disabled"]);ce()(["value","respectAlpha"]);ce()(["size"]);var jy=ue("accordion").parts("root","item","itemTrigger","itemContent","itemIndicator");jy.build();var Hy=e=>e.ids?.root??`accordion:${e.id}`,Uy=(e,n)=>e.ids?.itemTrigger?.(n)??`accordion:${e.id}:trigger:${n}`,aC=e=>e.getById(Hy(e)),tu=e=>{const i=`[aria-controls][data-ownedby='${CSS.escape(Hy(e))}']:not([disabled])`;return Vs(aC(e),i)},nC=e=>zl(tu(e)),iC=e=>Of(tu(e)),oC=(e,n)=>z5(tu(e),Uy(e,n)),lC=(e,n)=>I5(tu(e),Uy(e,n)),{and:rC,not:sC}=zn();rC("isExpanded","canToggle"),sC("isExpanded");ce()(["collapsible","dir","disabled","getRootNode","id","ids","multiple","onFocusChange","onValueChange","orientation","value","defaultValue"]);ce()(["value","disabled"]);var Rl=(e,n)=>({x:e,y:n});function uC(e){const{x:n,y:i,width:l,height:s}=e,c=n+l/2,f=i+s/2;return{x:n,y:i,width:l,height:s,minX:n,minY:i,maxX:n+l,maxY:i+s,midX:c,midY:f,center:Rl(c,f)}}function cC(e){const n=Rl(e.minX,e.minY),i=Rl(e.maxX,e.minY),l=Rl(e.maxX,e.maxY),s=Rl(e.minX,e.maxY);return{top:n,right:i,bottom:l,left:s}}function dC(e,n){const i=uC(e),{top:l,right:s,left:c,bottom:f}=cC(i),[g]=n.split("-");return{top:[c,l,s,f],right:[l,s,f,c],bottom:[l,c,f,s],left:[s,l,c,f]}[g]}function fC(e,n){const{x:i,y:l}=n;let s=!1;for(let c=0,f=e.length-1;c<e.length;f=c++){const g=e[c].x,h=e[c].y,p=e[f].x,y=e[f].y;h>l!=y>l&&i<(p-g)*(l-h)/(y-h)+g&&(s=!s)}return s}var Gy=ue("avatar").parts("root","image","fallback");Gy.build();ce()(["dir","id","ids","onStatusChange","getRootNode"]);function gC(e){return!(e.metaKey||!Ys()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}var mC=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function hC(e,n,i){const l=i?An(i):null,s=vt(l);return e=e||l instanceof s.HTMLInputElement&&!mC.has(l?.type)||l instanceof s.HTMLTextAreaElement||l instanceof s.HTMLElement&&l.isContentEditable,!(e&&n==="keyboard"&&i instanceof s.KeyboardEvent&&!Reflect.has(pC,i.key))}var ci=null,af=new Set,Il=new Map,ui=!1,nf=!1,pC={Tab:!0,Escape:!0};function au(e,n){for(let i of af)i(e,n)}function Ps(e){ui=!0,gC(e)&&(ci="keyboard",au("keyboard",e))}function ua(e){ci="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(ui=!0,au("pointer",e))}function Wy(e){l5(e)&&(ui=!0,ci="virtual")}function $y(e){const n=An(e);n===vt(n)||n===Qa(n)||(!ui&&!nf&&(ci="virtual",au("virtual",e)),ui=!1,nf=!1)}function Yy(){ui=!1,nf=!0}function bC(e){if(typeof window>"u"||Il.get(vt(e)))return;const n=vt(e),i=Qa(e);let l=n.HTMLElement.prototype.focus;function s(){ci="virtual",au("virtual",null),ui=!0,l.apply(this,arguments)}Object.defineProperty(n.HTMLElement.prototype,"focus",{configurable:!0,value:s}),i.addEventListener("keydown",Ps,!0),i.addEventListener("keyup",Ps,!0),i.addEventListener("click",Wy,!0),n.addEventListener("focus",$y,!0),n.addEventListener("blur",Yy,!1),typeof n.PointerEvent<"u"?(i.addEventListener("pointerdown",ua,!0),i.addEventListener("pointermove",ua,!0),i.addEventListener("pointerup",ua,!0)):(i.addEventListener("mousedown",ua,!0),i.addEventListener("mousemove",ua,!0),i.addEventListener("mouseup",ua,!0)),n.addEventListener("beforeunload",()=>{yC(e)},{once:!0}),Il.set(n,{focus:l})}var yC=(e,n)=>{const i=vt(e),l=Qa(e);Il.has(i)&&(i.HTMLElement.prototype.focus=Il.get(i).focus,l.removeEventListener("keydown",Ps,!0),l.removeEventListener("keyup",Ps,!0),l.removeEventListener("click",Wy,!0),i.removeEventListener("focus",$y,!0),i.removeEventListener("blur",Yy,!1),typeof i.PointerEvent<"u"?(l.removeEventListener("pointerdown",ua,!0),l.removeEventListener("pointermove",ua,!0),l.removeEventListener("pointerup",ua,!0)):(l.removeEventListener("mousedown",ua,!0),l.removeEventListener("mousemove",ua,!0),l.removeEventListener("mouseup",ua,!0)),Il.delete(i))};function Wb(){return ci==="keyboard"}function vC(e={}){const{isTextInput:n,autoFocus:i,onChange:l,root:s}=e;bC(s),l?.({isFocusVisible:i||Wb(),modality:ci});const c=(f,g)=>{hC(!!n,f,g)&&l?.({isFocusVisible:Wb(),modality:f})};return af.add(c),()=>{af.delete(c)}}var Ky=ue("checkbox").parts("root","label","control","indicator");Ky.build();ce()(["defaultChecked","checked","dir","disabled","form","getRootNode","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]);const xC=Ky.extendWith("group");var Xy=ue("clipboard").parts("root","control","trigger","indicator","input","label");Xy.build();ce()(["getRootNode","id","ids","value","defaultValue","timeout","onStatusChange","onValueChange"]);ce()(["copied"]);const SC=By.extendWith("view");var wC=Object.defineProperty,CC=(e,n,i)=>n in e?wC(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,U=(e,n,i)=>CC(e,typeof n!="symbol"?n+"":n,i),As={itemToValue(e){return typeof e=="string"?e:oi(e)&&kn(e,"value")?e.value:""},itemToString(e){return typeof e=="string"?e:oi(e)&&kn(e,"label")?e.label:As.itemToValue(e)},isItemDisabled(e){return oi(e)&&kn(e,"disabled")?!!e.disabled:!1}},nu=class Zy{constructor(n){this.options=n,U(this,"items"),U(this,"indexMap",null),U(this,"copy",i=>new Zy({...this.options,items:i??[...this.items]})),U(this,"isEqual",i=>ma(this.items,i.items)),U(this,"setItems",i=>this.copy(i)),U(this,"getValues",(i=this.items)=>{const l=[];for(const s of i){const c=this.getItemValue(s);c!=null&&l.push(c)}return l}),U(this,"find",i=>{if(i==null)return null;const l=this.indexOf(i);return l!==-1?this.at(l):null}),U(this,"findMany",i=>{const l=[];for(const s of i){const c=this.find(s);c!=null&&l.push(c)}return l}),U(this,"at",i=>{if(!this.options.groupBy&&!this.options.groupSort)return this.items[i]??null;let l=0;const s=this.group();for(const[,c]of s)for(const f of c){if(l===i)return f;l++}return null}),U(this,"sortFn",(i,l)=>{const s=this.indexOf(i),c=this.indexOf(l);return(s??0)-(c??0)}),U(this,"sort",i=>[...i].sort(this.sortFn.bind(this))),U(this,"getItemValue",i=>i==null?null:this.options.itemToValue?.(i)??As.itemToValue(i)),U(this,"getItemDisabled",i=>i==null?!1:this.options.isItemDisabled?.(i)??As.isItemDisabled(i)),U(this,"stringifyItem",i=>i==null?null:this.options.itemToString?.(i)??As.itemToString(i)),U(this,"stringify",i=>i==null?null:this.stringifyItem(this.find(i))),U(this,"stringifyItems",(i,l=", ")=>{const s=[];for(const c of i){const f=this.stringifyItem(c);f!=null&&s.push(f)}return s.join(l)}),U(this,"stringifyMany",(i,l)=>this.stringifyItems(this.findMany(i),l)),U(this,"has",i=>this.indexOf(i)!==-1),U(this,"hasItem",i=>i==null?!1:this.has(this.getItemValue(i))),U(this,"group",()=>{const{groupBy:i,groupSort:l}=this.options;if(!i)return[["",[...this.items]]];const s=new Map;this.items.forEach((f,g)=>{const h=i(f,g);s.has(h)||s.set(h,[]),s.get(h).push(f)});let c=Array.from(s.entries());return l&&c.sort(([f],[g])=>{if(typeof l=="function")return l(f,g);if(Array.isArray(l)){const h=l.indexOf(f),p=l.indexOf(g);return h===-1?1:p===-1?-1:h-p}return l==="asc"?f.localeCompare(g):l==="desc"?g.localeCompare(f):0}),c}),U(this,"getNextValue",(i,l=1,s=!1)=>{let c=this.indexOf(i);if(c===-1)return null;for(c=s?Math.min(c+l,this.size-1):c+l;c<=this.size&&this.getItemDisabled(this.at(c));)c++;return this.getItemValue(this.at(c))}),U(this,"getPreviousValue",(i,l=1,s=!1)=>{let c=this.indexOf(i);if(c===-1)return null;for(c=s?Math.max(c-l,0):c-l;c>=0&&this.getItemDisabled(this.at(c));)c--;return this.getItemValue(this.at(c))}),U(this,"indexOf",i=>{if(i==null)return-1;if(!this.options.groupBy&&!this.options.groupSort)return this.items.findIndex(l=>this.getItemValue(l)===i);if(!this.indexMap){this.indexMap=new Map;let l=0;const s=this.group();for(const[,c]of s)for(const f of c){const g=this.getItemValue(f);g!=null&&this.indexMap.set(g,l),l++}}return this.indexMap.get(i)??-1}),U(this,"getByText",(i,l)=>{const s=l!=null?this.indexOf(l):-1,c=i.length===1;for(let f=0;f<this.items.length;f++){const g=this.items[(s+f+1)%this.items.length];if(!(c&&this.getItemValue(g)===l)&&!this.getItemDisabled(g)&&EC(this.stringifyItem(g),i))return g}}),U(this,"search",(i,l)=>{const{state:s,currentValue:c,timeout:f=350}=l,g=s.keysSoFar+i,p=g.length>1&&Array.from(g).every(E=>E===g[0])?g[0]:g,y=this.getByText(p,c),x=this.getItemValue(y);function v(){clearTimeout(s.timer),s.timer=-1}function C(E){s.keysSoFar=E,v(),E!==""&&(s.timer=+setTimeout(()=>{C(""),v()},f))}return C(g),x}),U(this,"update",(i,l)=>{let s=this.indexOf(i);return s===-1?this:this.copy([...this.items.slice(0,s),l,...this.items.slice(s+1)])}),U(this,"upsert",(i,l,s="append")=>{let c=this.indexOf(i);return c===-1?(s==="append"?this.append:this.prepend)(l):this.copy([...this.items.slice(0,c),l,...this.items.slice(c+1)])}),U(this,"insert",(i,...l)=>this.copy(Cl(this.items,i,...l))),U(this,"insertBefore",(i,...l)=>{let s=this.indexOf(i);if(s===-1)if(this.items.length===0)s=0;else return this;return this.copy(Cl(this.items,s,...l))}),U(this,"insertAfter",(i,...l)=>{let s=this.indexOf(i);if(s===-1)if(this.items.length===0)s=0;else return this;return this.copy(Cl(this.items,s+1,...l))}),U(this,"prepend",(...i)=>this.copy(Cl(this.items,0,...i))),U(this,"append",(...i)=>this.copy(Cl(this.items,this.items.length,...i))),U(this,"filter",i=>{const l=this.items.filter((s,c)=>i(this.stringifyItem(s),c,s));return this.copy(l)}),U(this,"remove",(...i)=>{const l=i.map(s=>typeof s=="string"?s:this.getItemValue(s));return this.copy(this.items.filter(s=>{const c=this.getItemValue(s);return c==null?!1:!l.includes(c)}))}),U(this,"move",(i,l)=>{const s=this.indexOf(i);return s===-1?this:this.copy(cs(this.items,[s],l))}),U(this,"moveBefore",(i,...l)=>{let s=this.items.findIndex(f=>this.getItemValue(f)===i);if(s===-1)return this;let c=l.map(f=>this.items.findIndex(g=>this.getItemValue(g)===f)).sort((f,g)=>f-g);return this.copy(cs(this.items,c,s))}),U(this,"moveAfter",(i,...l)=>{let s=this.items.findIndex(f=>this.getItemValue(f)===i);if(s===-1)return this;let c=l.map(f=>this.items.findIndex(g=>this.getItemValue(g)===f)).sort((f,g)=>f-g);return this.copy(cs(this.items,c,s+1))}),U(this,"reorder",(i,l)=>this.copy(cs(this.items,[i],l))),U(this,"compareValue",(i,l)=>{const s=this.indexOf(i),c=this.indexOf(l);return s<c?-1:s>c?1:0}),U(this,"range",(i,l)=>{let s=[],c=i;for(;c!=null;){if(this.find(c)&&s.push(c),c===l)return s;c=this.getNextValue(c)}return[]}),U(this,"getValueRange",(i,l)=>i&&l?this.compareValue(i,l)<=0?this.range(i,l):this.range(l,i):[]),U(this,"toString",()=>{let i="";for(const l of this.items){const s=this.getItemValue(l),c=this.stringifyItem(l),f=this.getItemDisabled(l),g=[s,c,f].filter(Boolean).join(":");i+=g+","}return i}),U(this,"toJSON",()=>({size:this.size,first:this.firstValue,last:this.lastValue})),this.items=[...n.items]}get size(){return this.items.length}get firstValue(){let n=0;for(;this.getItemDisabled(this.at(n));)n++;return this.getItemValue(this.at(n))}get lastValue(){let n=this.size-1;for(;this.getItemDisabled(this.at(n));)n--;return this.getItemValue(this.at(n))}*[Symbol.iterator](){yield*this.items}},EC=(e,n)=>!!e?.toLowerCase().startsWith(n.toLowerCase());function Cl(e,n,...i){return[...e.slice(0,n),...i,...e.slice(n)]}function cs(e,n,i){n=[...n].sort((s,c)=>s-c);const l=n.map(s=>e[s]);for(let s=n.length-1;s>=0;s--)e=[...e.slice(0,n[s]),...e.slice(n[s]+1)];return i=Math.max(0,i-n.filter(s=>s<i).length),[...e.slice(0,i),...l,...e.slice(i)]}function Qy(e,n,i){for(let l=0;l<n.length;l++)e=i.getChildren(e,n.slice(l+1))[n[l]];return e}function OC(e){const n=TC(e),i=[],l=new Set;for(const s of n){const c=s.join();l.has(c)||(l.add(c),i.push(s))}return i}function Jy(e,n){for(let i=0;i<Math.min(e.length,n.length);i++){if(e[i]<n[i])return-1;if(e[i]>n[i])return 1}return e.length-n.length}function TC(e){return e.sort(Jy)}function kC(e,n){let i;return $t(e,{...n,onEnter:(l,s)=>{if(n.predicate(l,s))return i=l,"stop"}}),i}function AC(e,n){const i=[];return $t(e,{onEnter:(l,s)=>{n.predicate(l,s)&&i.push(l)},getChildren:n.getChildren}),i}function $b(e,n){let i;return $t(e,{onEnter:(l,s)=>{if(n.predicate(l,s))return i=[...s],"stop"},getChildren:n.getChildren}),i}function RC(e,n){let i=n.initialResult;return $t(e,{...n,onEnter:(l,s)=>{i=n.nextResult(i,l,s)}}),i}function _C(e,n){return RC(e,{...n,initialResult:[],nextResult:(i,l,s)=>(i.push(...n.transform(l,s)),i)})}function NC(e,n){const{predicate:i,create:l,getChildren:s}=n,c=(f,g)=>{const h=s(f,g),p=[];h.forEach((C,E)=>{const O=[...g,E],_=c(C,O);_&&p.push(_)});const y=g.length===0,x=i(f,g),v=p.length>0;return y||x||v?l(f,p,g):null};return c(e,[])||l(e,[],[])}function zC(e,n){const i=[];let l=0;const s=new Map,c=new Map;return $t(e,{getChildren:n.getChildren,onEnter:(f,g)=>{s.has(f)||s.set(f,l++);const h=n.getChildren(f,g);h.forEach(C=>{c.has(C)||c.set(C,f),s.has(C)||s.set(C,l++)});const p=h.length>0?h.map(C=>s.get(C)):void 0,y=c.get(f),x=y?s.get(y):void 0,v=s.get(f);i.push({...f,_children:p,_parent:x,_index:v})}}),i}function IC(e,n){return{type:"insert",index:e,nodes:n}}function VC(e){return{type:"remove",indexes:e}}function Wf(){return{type:"replace"}}function ev(e){return[e.slice(0,-1),e[e.length-1]]}function tv(e,n,i=new Map){const[l,s]=ev(e);for(let f=l.length-1;f>=0;f--){const g=l.slice(0,f).join();i.get(g)?.type!=="remove"&&i.set(g,Wf())}const c=i.get(l.join());return c?.type==="remove"?i.set(l.join(),{type:"removeThenInsert",removeIndexes:c.indexes,insertIndex:s,insertNodes:n}):i.set(l.join(),IC(s,n)),i}function av(e){const n=new Map,i=new Map;for(const l of e){const s=l.slice(0,-1).join(),c=i.get(s)??[];c.push(l[l.length-1]),i.set(s,c.sort((f,g)=>f-g))}for(const l of e)for(let s=l.length-2;s>=0;s--){const c=l.slice(0,s).join();n.has(c)||n.set(c,Wf())}for(const[l,s]of i)n.set(l,VC(s));return n}function qC(e,n){const i=new Map,[l,s]=ev(e);for(let c=l.length-1;c>=0;c--){const f=l.slice(0,c).join();i.set(f,Wf())}return i.set(l.join(),{type:"removeThenInsert",removeIndexes:[s],insertIndex:s,insertNodes:[n]}),i}function iu(e,n,i){return FC(e,{...i,getChildren:(l,s)=>{const c=s.join();switch(n.get(c)?.type){case"replace":case"remove":case"removeThenInsert":case"insert":return i.getChildren(l,s);default:return[]}},transform:(l,s,c)=>{const f=c.join(),g=n.get(f);switch(g?.type){case"remove":return i.create(l,s.filter((y,x)=>!g.indexes.includes(x)),c);case"removeThenInsert":const h=s.filter((y,x)=>!g.removeIndexes.includes(x)),p=g.removeIndexes.reduce((y,x)=>x<y?y-1:y,g.insertIndex);return i.create(l,Yb(h,p,0,...g.insertNodes),c);case"insert":return i.create(l,Yb(s,g.index,0,...g.nodes),c);case"replace":return i.create(l,s,c);default:return l}}})}function Yb(e,n,i,...l){return[...e.slice(0,n),...l,...e.slice(n+i)]}function FC(e,n){const i={};return $t(e,{...n,onLeave:(l,s)=>{const c=[0,...s],f=c.join(),g=n.transform(l,i[f]??[],s),h=c.slice(0,-1).join(),p=i[h]??[];p.push(g),i[h]=p}}),i[""][0]}function DC(e,n){const{nodes:i,at:l}=n;if(l.length===0)throw new Error("Can't insert nodes at the root");const s=tv(l,i);return iu(e,s,n)}function MC(e,n){if(n.at.length===0)return n.node;const i=qC(n.at,n.node);return iu(e,i,n)}function PC(e,n){if(n.indexPaths.length===0)return e;for(const l of n.indexPaths)if(l.length===0)throw new Error("Can't remove the root node");const i=av(n.indexPaths);return iu(e,i,n)}function LC(e,n){if(n.indexPaths.length===0)return e;for(const c of n.indexPaths)if(c.length===0)throw new Error("Can't move the root node");if(n.to.length===0)throw new Error("Can't move nodes to the root");const i=OC(n.indexPaths),l=i.map(c=>Qy(e,c,n)),s=tv(n.to,l,av(i));return iu(e,s,n)}function $t(e,n){const{onEnter:i,onLeave:l,getChildren:s}=n;let c=[],f=[{node:e}];const g=n.reuseIndexPath?()=>c:()=>c.slice();for(;f.length>0;){let h=f[f.length-1];if(h.state===void 0){const y=i?.(h.node,g());if(y==="stop")return;h.state=y==="skip"?-1:0}const p=h.children||s(h.node,g());if(h.children||(h.children=p),h.state!==-1){if(h.state<p.length){let x=h.state;c.push(x),f.push({node:p[x]}),h.state=x+1;continue}if(l?.(h.node,g())==="stop")return}c.pop(),f.pop()}}var nv=class iv{constructor(n){this.options=n,U(this,"rootNode"),U(this,"isEqual",i=>ma(this.rootNode,i.rootNode)),U(this,"getNodeChildren",i=>this.options.nodeToChildren?.(i)??ao.nodeToChildren(i)??[]),U(this,"resolveIndexPath",i=>typeof i=="string"?this.getIndexPath(i):i),U(this,"resolveNode",i=>{const l=this.resolveIndexPath(i);return l?this.at(l):void 0}),U(this,"getNodeChildrenCount",i=>this.options.nodeToChildrenCount?.(i)??ao.nodeToChildrenCount(i)),U(this,"getNodeValue",i=>this.options.nodeToValue?.(i)??ao.nodeToValue(i)),U(this,"getNodeDisabled",i=>this.options.isNodeDisabled?.(i)??ao.isNodeDisabled(i)),U(this,"stringify",i=>{const l=this.findNode(i);return l?this.stringifyNode(l):null}),U(this,"stringifyNode",i=>this.options.nodeToString?.(i)??ao.nodeToString(i)),U(this,"getFirstNode",(i=this.rootNode)=>{let l;return $t(i,{getChildren:this.getNodeChildren,onEnter:(s,c)=>{if(!l&&c.length>0&&!this.getNodeDisabled(s))return l=s,"stop"}}),l}),U(this,"getLastNode",(i=this.rootNode,l={})=>{let s;return $t(i,{getChildren:this.getNodeChildren,onEnter:(c,f)=>{if(!this.isSameNode(c,i)){if(l.skip?.({value:this.getNodeValue(c),node:c,indexPath:f}))return"skip";f.length>0&&!this.getNodeDisabled(c)&&(s=c)}}}),s}),U(this,"at",i=>Qy(this.rootNode,i,{getChildren:this.getNodeChildren})),U(this,"findNode",(i,l=this.rootNode)=>kC(l,{getChildren:this.getNodeChildren,predicate:s=>this.getNodeValue(s)===i})),U(this,"findNodes",(i,l=this.rootNode)=>{const s=new Set(i.filter(c=>c!=null));return AC(l,{getChildren:this.getNodeChildren,predicate:c=>s.has(this.getNodeValue(c))})}),U(this,"sort",i=>i.reduce((l,s)=>{const c=this.getIndexPath(s);return c&&l.push({value:s,indexPath:c}),l},[]).sort((l,s)=>Jy(l.indexPath,s.indexPath)).map(({value:l})=>l)),U(this,"getIndexPath",i=>$b(this.rootNode,{getChildren:this.getNodeChildren,predicate:l=>this.getNodeValue(l)===i})),U(this,"getValue",i=>{const l=this.at(i);return l?this.getNodeValue(l):void 0}),U(this,"getValuePath",i=>{if(!i)return[];const l=[];let s=[...i];for(;s.length>0;){const c=this.at(s);c&&l.unshift(this.getNodeValue(c)),s.pop()}return l}),U(this,"getDepth",i=>$b(this.rootNode,{getChildren:this.getNodeChildren,predicate:s=>this.getNodeValue(s)===i})?.length??0),U(this,"isSameNode",(i,l)=>this.getNodeValue(i)===this.getNodeValue(l)),U(this,"isRootNode",i=>this.isSameNode(i,this.rootNode)),U(this,"contains",(i,l)=>!i||!l?!1:l.slice(0,i.length).every((s,c)=>i[c]===l[c])),U(this,"getNextNode",(i,l={})=>{let s=!1,c;return $t(this.rootNode,{getChildren:this.getNodeChildren,onEnter:(f,g)=>{if(this.isRootNode(f))return;const h=this.getNodeValue(f);if(l.skip?.({value:h,node:f,indexPath:g}))return h===i&&(s=!0),"skip";if(s&&!this.getNodeDisabled(f))return c=f,"stop";h===i&&(s=!0)}}),c}),U(this,"getPreviousNode",(i,l={})=>{let s,c=!1;return $t(this.rootNode,{getChildren:this.getNodeChildren,onEnter:(f,g)=>{if(this.isRootNode(f))return;const h=this.getNodeValue(f);if(l.skip?.({value:h,node:f,indexPath:g}))return"skip";if(h===i)return c=!0,"stop";this.getNodeDisabled(f)||(s=f)}}),c?s:void 0}),U(this,"getParentNodes",i=>{const l=this.resolveIndexPath(i)?.slice();if(!l)return[];const s=[];for(;l.length>0;){l.pop();const c=this.at(l);c&&!this.isRootNode(c)&&s.unshift(c)}return s}),U(this,"getDescendantNodes",(i,l)=>{const s=this.resolveNode(i);if(!s)return[];const c=[];return $t(s,{getChildren:this.getNodeChildren,onEnter:(f,g)=>{g.length!==0&&(!l?.withBranch&&this.isBranchNode(f)||c.push(f))}}),c}),U(this,"getDescendantValues",(i,l)=>this.getDescendantNodes(i,l).map(c=>this.getNodeValue(c))),U(this,"getParentIndexPath",i=>i.slice(0,-1)),U(this,"getParentNode",i=>{const l=this.resolveIndexPath(i);return l?this.at(this.getParentIndexPath(l)):void 0}),U(this,"visit",i=>{const{skip:l,...s}=i;$t(this.rootNode,{...s,getChildren:this.getNodeChildren,onEnter:(c,f)=>{if(!this.isRootNode(c))return l?.({value:this.getNodeValue(c),node:c,indexPath:f})?"skip":s.onEnter?.(c,f)}})}),U(this,"getPreviousSibling",i=>{const l=this.getParentNode(i);if(!l)return;const s=this.getNodeChildren(l);let c=i[i.length-1];for(;--c>=0;){const f=s[c];if(!this.getNodeDisabled(f))return f}}),U(this,"getNextSibling",i=>{const l=this.getParentNode(i);if(!l)return;const s=this.getNodeChildren(l);let c=i[i.length-1];for(;++c<s.length;){const f=s[c];if(!this.getNodeDisabled(f))return f}}),U(this,"getSiblingNodes",i=>{const l=this.getParentNode(i);return l?this.getNodeChildren(l):[]}),U(this,"getValues",(i=this.rootNode)=>_C(i,{getChildren:this.getNodeChildren,transform:s=>[this.getNodeValue(s)]}).slice(1)),U(this,"isValidDepth",(i,l)=>l==null?!0:typeof l=="function"?l(i.length):i.length===l),U(this,"isBranchNode",i=>this.getNodeChildren(i).length>0||this.getNodeChildrenCount(i)!=null),U(this,"getBranchValues",(i=this.rootNode,l={})=>{let s=[];return $t(i,{getChildren:this.getNodeChildren,onEnter:(c,f)=>{if(f.length===0)return;const g=this.getNodeValue(c);if(l.skip?.({value:g,node:c,indexPath:f}))return"skip";this.isBranchNode(c)&&this.isValidDepth(f,l.depth)&&s.push(this.getNodeValue(c))}}),s}),U(this,"flatten",(i=this.rootNode)=>zC(i,{getChildren:this.getNodeChildren})),U(this,"_create",(i,l)=>this.getNodeChildren(i).length>0||l.length>0?{...i,children:l}:{...i}),U(this,"_insert",(i,l,s)=>this.copy(DC(i,{at:l,nodes:s,getChildren:this.getNodeChildren,create:this._create}))),U(this,"copy",i=>new iv({...this.options,rootNode:i})),U(this,"_replace",(i,l,s)=>this.copy(MC(i,{at:l,node:s,getChildren:this.getNodeChildren,create:this._create}))),U(this,"_move",(i,l,s)=>this.copy(LC(i,{indexPaths:l,to:s,getChildren:this.getNodeChildren,create:this._create}))),U(this,"_remove",(i,l)=>this.copy(PC(i,{indexPaths:l,getChildren:this.getNodeChildren,create:this._create}))),U(this,"replace",(i,l)=>this._replace(this.rootNode,i,l)),U(this,"remove",i=>this._remove(this.rootNode,i)),U(this,"insertBefore",(i,l)=>this.getParentNode(i)?this._insert(this.rootNode,i,l):void 0),U(this,"insertAfter",(i,l)=>{if(!this.getParentNode(i))return;const c=[...i.slice(0,-1),i[i.length-1]+1];return this._insert(this.rootNode,c,l)}),U(this,"move",(i,l)=>this._move(this.rootNode,i,l)),U(this,"filter",i=>{const l=NC(this.rootNode,{predicate:i,getChildren:this.getNodeChildren,create:this._create});return this.copy(l)}),U(this,"toJSON",()=>this.getValues(this.rootNode)),this.rootNode=n.rootNode}},ao={nodeToValue(e){return typeof e=="string"?e:oi(e)&&kn(e,"value")?e.value:""},nodeToString(e){return typeof e=="string"?e:oi(e)&&kn(e,"label")?e.label:ao.nodeToValue(e)},isNodeDisabled(e){return oi(e)&&kn(e,"disabled")?!!e.disabled:!1},nodeToChildren(e){return e.children},nodeToChildrenCount(e){if(oi(e)&&kn(e,"childrenCount"))return e.childrenCount}},Ji=new WeakMap,ds=new WeakMap,fs={},qd=0,ov=e=>e&&(e.host||ov(e.parentNode)),BC=(e,n)=>n.map(i=>{if(e.contains(i))return i;const l=ov(i);return l&&e.contains(l)?l:(console.error("[zag-js > ariaHidden] target",i,"in not contained inside",e,". Doing nothing"),null)}).filter(i=>!!i),jC=new Set(["script","output","status","next-route-announcer"]),HC=e=>jC.has(e.localName)||e.role==="status"||e.hasAttribute("aria-live")?!0:e.matches("[data-live-announcer]"),UC=(e,n)=>{const{parentNode:i,markerName:l,controlAttribute:s}=n,c=BC(i,Array.isArray(e)?e:[e]);fs[l]||(fs[l]=new WeakMap);const f=fs[l],g=[],h=new Set,p=new Set(c),y=v=>{!v||h.has(v)||(h.add(v),y(v.parentNode))};c.forEach(y);const x=v=>{!v||p.has(v)||Array.prototype.forEach.call(v.children,C=>{if(h.has(C))x(C);else try{if(HC(C))return;const O=C.getAttribute(s)==="true",_=(Ji.get(C)||0)+1,F=(f.get(C)||0)+1;Ji.set(C,_),f.set(C,F),g.push(C),_===1&&O&&ds.set(C,!0),F===1&&C.setAttribute(l,""),O||C.setAttribute(s,"true")}catch(E){console.error("[zag-js > ariaHidden] cannot operate on ",C,E)}})};return x(i),h.clear(),qd++,()=>{g.forEach(v=>{const C=Ji.get(v)-1,E=f.get(v)-1;Ji.set(v,C),f.set(v,E),C||(ds.has(v)||v.removeAttribute(s),ds.delete(v)),E||v.removeAttribute(l)}),qd--,qd||(Ji=new WeakMap,Ji=new WeakMap,ds=new WeakMap,fs={})}},GC=e=>(Array.isArray(e)?e[0]:e).ownerDocument.body,WC=(e,n=GC(e),i="data-aria-hidden")=>{if(n)return UC(e,{parentNode:n,markerName:i,controlAttribute:"aria-hidden"})},$C=e=>{const n=requestAnimationFrame(()=>e());return()=>cancelAnimationFrame(n)};function YC(e,n={}){const{defer:i=!0}=n,l=i?$C:c=>c(),s=[];return s.push(l(()=>{const f=(typeof e=="function"?e():e).filter(Boolean);f.length!==0&&s.push(WC(f))})),()=>{s.forEach(c=>c?.())}}var lv=ue("combobox").parts("root","clearTrigger","content","control","input","item","itemGroup","itemGroupLabel","itemIndicator","itemText","label","list","positioner","trigger");lv.build();var rv=e=>new nu(e);rv.empty=()=>new nu({items:[]});var KC=e=>e.ids?.control??`combobox:${e.id}:control`,XC=e=>e.ids?.input??`combobox:${e.id}:input`,ZC=e=>e.ids?.content??`combobox:${e.id}:content`,QC=e=>e.ids?.positioner??`combobox:${e.id}:popper`,JC=e=>e.ids?.trigger??`combobox:${e.id}:toggle-btn`,e9=e=>e.ids?.clearTrigger??`combobox:${e.id}:clear-btn`,On=e=>e.getById(ZC(e)),no=e=>e.getById(XC(e)),Kb=e=>e.getById(QC(e)),Xb=e=>e.getById(KC(e)),_l=e=>e.getById(JC(e)),Zb=e=>e.getById(e9(e)),El=(e,n)=>{if(n==null)return null;const i=`[role=option][data-value="${CSS.escape(n)}"]`;return _5(On(e),i)},Qb=e=>{const n=no(e);e.isActiveElement(n)||n?.focus({preventScroll:!0})},t9=e=>{const n=_l(e);e.isActiveElement(n)||n?.focus({preventScroll:!0})},{guards:a9,createMachine:n9,choose:i9}=Ey(),{and:ct,not:Wt}=a9;n9({props({props:e}){return{loopFocus:!0,openOnClick:!1,defaultValue:[],closeOnSelect:!e.multiple,allowCustomValue:!1,inputBehavior:"none",selectionBehavior:e.multiple?"clear":"replace",openOnKeyPress:!0,openOnChange:!0,composite:!0,navigate({node:n}){xy(n)},collection:rv.empty(),...e,positioning:{placement:"bottom",sameWidth:!0,...e.positioning},translations:{triggerLabel:"Toggle suggestions",clearTriggerLabel:"Clear value",...e.translations}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"suggesting":"idle"},context({prop:e,bindable:n,getContext:i,getEvent:l}){return{currentPlacement:n(()=>({defaultValue:void 0})),value:n(()=>({defaultValue:e("defaultValue"),value:e("value"),isEqual:ma,hash(s){return s.join(",")},onChange(s){const c=i(),f=c.get("selectedItems"),g=e("collection"),h=s.map(p=>f.find(x=>g.getItemValue(x)===p)||g.find(p));c.set("selectedItems",h),e("onValueChange")?.({value:s,items:h})}})),highlightedValue:n(()=>({defaultValue:e("defaultHighlightedValue")||null,value:e("highlightedValue"),onChange(s){const c=e("collection").find(s);e("onHighlightChange")?.({highlightedValue:s,highlightedItem:c})}})),inputValue:n(()=>{let s=e("inputValue")||e("defaultInputValue")||"";const c=e("defaultValue")||e("value")||[];if(!s.trim()&&!e("multiple")){const f=e("collection").stringifyMany(c);s=Ka(e("selectionBehavior"),{preserve:s||f,replace:f,clear:""})}return{defaultValue:s,value:e("inputValue"),onChange(f){const g=l(),h=(g.previousEvent||g).src;e("onInputValueChange")?.({inputValue:f,reason:h})}}}),highlightedItem:n(()=>{const s=e("highlightedValue");return{defaultValue:e("collection").find(s)}}),selectedItems:n(()=>{const s=e("value")||e("defaultValue")||[];return{defaultValue:e("collection").findMany(s)}})}},computed:{isInputValueEmpty:({context:e})=>e.get("inputValue").length===0,isInteractive:({prop:e})=>!(e("readOnly")||e("disabled")),autoComplete:({prop:e})=>e("inputBehavior")==="autocomplete",autoHighlight:({prop:e})=>e("inputBehavior")==="autohighlight",hasSelectedItems:({context:e})=>e.get("value").length>0,valueAsString:({context:e,prop:n})=>n("collection").stringifyItems(e.get("selectedItems")),isCustomValue:({context:e,computed:n})=>e.get("inputValue")!==n("valueAsString")},watch({context:e,prop:n,track:i,action:l,send:s}){i([()=>e.hash("value")],()=>{l(["syncSelectedItems"])}),i([()=>e.get("inputValue")],()=>{l(["syncInputValue"])}),i([()=>e.get("highlightedValue")],()=>{l(["syncHighlightedItem","autofillInputValue"])}),i([()=>n("open")],()=>{l(["toggleVisibility"])}),i([()=>n("collection").toString()],()=>{s({type:"CHILDREN_CHANGE"})})},on:{"SELECTED_ITEMS.SYNC":{actions:["syncSelectedItems"]},"HIGHLIGHTED_VALUE.SET":{actions:["setHighlightedValue"]},"HIGHLIGHTED_VALUE.CLEAR":{actions:["clearHighlightedValue"]},"ITEM.SELECT":{actions:["selectItem"]},"ITEM.CLEAR":{actions:["clearItem"]},"VALUE.SET":{actions:["setValue"]},"INPUT_VALUE.SET":{actions:["setInputValue"]},"POSITIONING.SET":{actions:["reposition"]}},entry:i9([{guard:"autoFocus",actions:["setInitialFocus"]}]),states:{idle:{tags:["idle","closed"],entry:["scrollContentToTop","clearHighlightedValue"],on:{"CONTROLLED.OPEN":{target:"interacting"},"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.FOCUS":{target:"focused"},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{target:"focused",actions:["clearInputValue","clearSelectedItems","setInitialFocus"]}}},focused:{tags:["focused","closed"],entry:["scrollContentToTop","clearHighlightedValue"],on:{"CONTROLLED.OPEN":[{guard:"isChangeEvent",target:"suggesting"},{target:"interacting"}],"INPUT.CHANGE":[{guard:ct("isOpenControlled","openOnChange"),actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{guard:"openOnChange",target:"suggesting",actions:["setInputValue","invokeOnOpen","highlightFirstItemIfNeeded"]},{actions:["setInputValue"]}],"LAYER.INTERACT_OUTSIDE":{target:"idle"},"INPUT.ESCAPE":{guard:ct("isCustomValue",Wt("allowCustomValue")),actions:["revertInputValue"]},"INPUT.BLUR":{target:"idle"},"INPUT.CLICK":[{guard:"isOpenControlled",actions:["highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstSelectedItem","invokeOnOpen"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["setInitialFocus","highlightFirstSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_DOWN":[{guard:ct("isOpenControlled","autoComplete"),actions:["invokeOnOpen"]},{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{guard:"isOpenControlled",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightFirstOrSelectedItem","invokeOnOpen"]}],"INPUT.ARROW_UP":[{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{guard:"autoComplete",target:"interacting",actions:["invokeOnOpen"]},{target:"interacting",actions:["highlightLastOrSelectedItem","invokeOnOpen"]},{target:"interacting",actions:["highlightLastOrSelectedItem","invokeOnOpen"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"interacting",actions:["invokeOnOpen"]}],"VALUE.CLEAR":{actions:["clearInputValue","clearSelectedItems"]}}},interacting:{tags:["open","focused"],entry:["setInitialFocus"],effects:["scrollToHighlightedItem","trackDismissableLayer","trackPlacement","hideOtherElements"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"focused",actions:["setFinalFocus"]},{target:"idle"}],CHILDREN_CHANGE:[{guard:"isHighlightedItemRemoved",actions:["clearHighlightedValue"]},{actions:["scrollToHighlightedItem"]}],"INPUT.HOME":{actions:["highlightFirstItem"]},"INPUT.END":{actions:["highlightLastItem"]},"INPUT.ARROW_DOWN":[{guard:ct("autoComplete","isLastItemHighlighted"),actions:["clearHighlightedValue","scrollContentToTop"]},{actions:["highlightNextItem"]}],"INPUT.ARROW_UP":[{guard:ct("autoComplete","isFirstItemHighlighted"),actions:["clearHighlightedValue"]},{actions:["highlightPrevItem"]}],"INPUT.ENTER":[{guard:ct("isOpenControlled","isCustomValue",Wt("hasHighlightedItem"),Wt("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:ct("isCustomValue",Wt("hasHighlightedItem"),Wt("allowCustomValue")),target:"focused",actions:["revertInputValue","invokeOnClose"]},{guard:ct("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"INPUT.CHANGE":[{guard:"autoComplete",target:"suggesting",actions:["setInputValue"]},{target:"suggesting",actions:["clearHighlightedValue","setInputValue"]}],"ITEM.POINTER_MOVE":{actions:["setHighlightedValue"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedValue"]},"ITEM.CLICK":[{guard:ct("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],"LAYER.ESCAPE":[{guard:ct("isOpenControlled","autoComplete"),actions:["syncInputValue","invokeOnClose"]},{guard:"autoComplete",target:"focused",actions:["syncInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"LAYER.INTERACT_OUTSIDE":[{guard:ct("isOpenControlled","isCustomValue",Wt("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:ct("isCustomValue",Wt("allowCustomValue")),target:"idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"idle",actions:["invokeOnClose"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]}},suggesting:{tags:["open","focused"],effects:["trackDismissableLayer","scrollToHighlightedItem","trackPlacement","hideOtherElements"],entry:["setInitialFocus"],on:{"CONTROLLED.CLOSE":[{guard:"restoreFocus",target:"focused",actions:["setFinalFocus"]},{target:"idle"}],CHILDREN_CHANGE:[{guard:"autoHighlight",actions:["highlightFirstItem"]},{guard:"isHighlightedItemRemoved",actions:["clearHighlightedValue"]}],"INPUT.ARROW_DOWN":{target:"interacting",actions:["highlightNextItem"]},"INPUT.ARROW_UP":{target:"interacting",actions:["highlightPrevItem"]},"INPUT.HOME":{target:"interacting",actions:["highlightFirstItem"]},"INPUT.END":{target:"interacting",actions:["highlightLastItem"]},"INPUT.ENTER":[{guard:ct("isOpenControlled","isCustomValue",Wt("hasHighlightedItem"),Wt("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:ct("isCustomValue",Wt("hasHighlightedItem"),Wt("allowCustomValue")),target:"focused",actions:["revertInputValue","invokeOnClose"]},{guard:ct("isOpenControlled","closeOnSelect"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","setFinalFocus"]},{actions:["selectHighlightedItem"]}],"INPUT.CHANGE":{actions:["setInputValue"]},"LAYER.ESCAPE":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"ITEM.POINTER_MOVE":{target:"interacting",actions:["setHighlightedValue"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedValue"]},"LAYER.INTERACT_OUTSIDE":[{guard:ct("isOpenControlled","isCustomValue",Wt("allowCustomValue")),actions:["revertInputValue","invokeOnClose"]},{guard:ct("isCustomValue",Wt("allowCustomValue")),target:"idle",actions:["revertInputValue","invokeOnClose"]},{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"idle",actions:["invokeOnClose"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose"]}],"ITEM.CLICK":[{guard:ct("isOpenControlled","closeOnSelect"),actions:["selectItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectItem","invokeOnClose","setFinalFocus"]},{actions:["selectItem"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","setFinalFocus"]}],"VALUE.CLEAR":[{guard:"isOpenControlled",actions:["clearInputValue","clearSelectedItems","invokeOnClose"]},{target:"focused",actions:["clearInputValue","clearSelectedItems","invokeOnClose","setFinalFocus"]}]}}},implementations:{guards:{isInputValueEmpty:({computed:e})=>e("isInputValueEmpty"),autoComplete:({computed:e,prop:n})=>e("autoComplete")&&!n("multiple"),autoHighlight:({computed:e})=>e("autoHighlight"),isFirstItemHighlighted:({prop:e,context:n})=>e("collection").firstValue===n.get("highlightedValue"),isLastItemHighlighted:({prop:e,context:n})=>e("collection").lastValue===n.get("highlightedValue"),isCustomValue:({computed:e})=>e("isCustomValue"),allowCustomValue:({prop:e})=>!!e("allowCustomValue"),hasHighlightedItem:({context:e})=>e.get("highlightedValue")!=null,closeOnSelect:({prop:e})=>!!e("closeOnSelect"),isOpenControlled:({prop:e})=>e("open")!=null,openOnChange:({prop:e,context:n})=>{const i=e("openOnChange");return u3(i)?i:!!i?.({inputValue:n.get("inputValue")})},restoreFocus:({event:e})=>e.restoreFocus==null?!0:!!e.restoreFocus,isChangeEvent:({event:e})=>e.previousEvent?.type==="INPUT.CHANGE",autoFocus:({prop:e})=>!!e("autoFocus"),isHighlightedItemRemoved:({prop:e,context:n})=>!e("collection").has(n.get("highlightedValue"))},effects:{trackDismissableLayer({send:e,prop:n,scope:i}){return n("disableLayer")?void 0:Gl(()=>On(i),{defer:!0,exclude:()=>[no(i),_l(i),Zb(i)],onFocusOutside:n("onFocusOutside"),onPointerDownOutside:n("onPointerDownOutside"),onInteractOutside:n("onInteractOutside"),onEscapeKeyDown(s){s.preventDefault(),s.stopPropagation(),e({type:"LAYER.ESCAPE",src:"escape-key"})},onDismiss(){e({type:"LAYER.INTERACT_OUTSIDE",src:"interact-outside",restoreFocus:!1})}})},hideOtherElements({scope:e}){return YC([no(e),On(e),_l(e),Zb(e)])},trackPlacement({context:e,prop:n,scope:i}){const l=()=>Xb(i)||_l(i),s=()=>Kb(i);return e.set("currentPlacement",n("positioning").placement),ba(l,s,{...n("positioning"),defer:!0,onComplete(c){e.set("currentPlacement",c.placement)}})},scrollToHighlightedItem({context:e,prop:n,scope:i,event:l}){const s=no(i);let c=[];const f=p=>{const y=l.current().type.includes("POINTER"),x=e.get("highlightedValue");if(y||!x)return;const v=On(i),C=n("scrollToIndexFn");if(C){const _=n("collection").indexOf(x);C({index:_,immediate:p,getElement:()=>El(i,x)});return}const E=El(i,x),O=Te(()=>{Is(E,{rootEl:v,block:"nearest"})});c.push(O)},g=Te(()=>f(!0));c.push(g);const h=Xs(s,{attributes:["aria-activedescendant"],callback:()=>f(!1)});return c.push(h),()=>{c.forEach(p=>p())}}},actions:{reposition({context:e,prop:n,scope:i,event:l}){ba(()=>Xb(i),()=>Kb(i),{...n("positioning"),...l.options,defer:!0,listeners:!1,onComplete(f){e.set("currentPlacement",f.placement)}})},setHighlightedValue({context:e,event:n}){n.value!=null&&e.set("highlightedValue",n.value)},clearHighlightedValue({context:e}){e.set("highlightedValue",null)},selectHighlightedItem(e){const{context:n,prop:i}=e,l=i("collection"),s=n.get("highlightedValue");if(!s||!l.has(s))return;const c=i("multiple")?mo(n.get("value"),s):[s];i("onSelect")?.({value:c,itemValue:s}),n.set("value",c);const f=Ka(i("selectionBehavior"),{preserve:n.get("inputValue"),replace:l.stringifyMany(c),clear:""});n.set("inputValue",f)},scrollToHighlightedItem({context:e,prop:n,scope:i}){vy(()=>{const l=e.get("highlightedValue");if(l==null)return;const s=El(i,l),c=On(i),f=n("scrollToIndexFn");if(f){const g=n("collection").indexOf(l);f({index:g,immediate:!0,getElement:()=>El(i,l)});return}Is(s,{rootEl:c,block:"nearest"})})},selectItem(e){const{context:n,event:i,flush:l,prop:s}=e;i.value!=null&&l(()=>{const c=s("multiple")?mo(n.get("value"),i.value):[i.value];s("onSelect")?.({value:c,itemValue:i.value}),n.set("value",c);const f=Ka(s("selectionBehavior"),{preserve:n.get("inputValue"),replace:s("collection").stringifyMany(c),clear:""});n.set("inputValue",f)})},clearItem(e){const{context:n,event:i,flush:l,prop:s}=e;i.value!=null&&l(()=>{const c=li(n.get("value"),i.value);n.set("value",c);const f=Ka(s("selectionBehavior"),{preserve:n.get("inputValue"),replace:s("collection").stringifyMany(c),clear:""});n.set("inputValue",f)})},setInitialFocus({scope:e}){Te(()=>{Qb(e)})},setFinalFocus({scope:e}){Te(()=>{_l(e)?.dataset.focusable==null?Qb(e):t9(e)})},syncInputValue({context:e,scope:n,event:i}){const l=no(n);l&&(l.value=e.get("inputValue"),queueMicrotask(()=>{i.current().type!=="INPUT.CHANGE"&&I3(l)}))},setInputValue({context:e,event:n}){e.set("inputValue",n.value)},clearInputValue({context:e}){e.set("inputValue","")},revertInputValue({context:e,prop:n,computed:i}){const l=n("selectionBehavior"),s=Ka(l,{replace:i("hasSelectedItems")?i("valueAsString"):"",preserve:e.get("inputValue"),clear:""});e.set("inputValue",s)},setValue(e){const{context:n,flush:i,event:l,prop:s}=e;i(()=>{n.set("value",l.value);const c=Ka(s("selectionBehavior"),{preserve:n.get("inputValue"),replace:s("collection").stringifyMany(l.value),clear:""});n.set("inputValue",c)})},clearSelectedItems(e){const{context:n,flush:i,prop:l}=e;i(()=>{n.set("value",[]);const s=Ka(l("selectionBehavior"),{preserve:n.get("inputValue"),replace:l("collection").stringifyMany([]),clear:""});n.set("inputValue",s)})},scrollContentToTop({prop:e,scope:n}){const i=e("scrollToIndexFn");if(i){const l=e("collection").firstValue;i({index:0,immediate:!0,getElement:()=>El(n,l)})}else{const l=On(n);if(!l)return;l.scrollTop=0}},invokeOnOpen({prop:e,event:n}){const i=Jb(n);e("onOpenChange")?.({open:!0,reason:i})},invokeOnClose({prop:e,event:n}){const i=Jb(n);e("onOpenChange")?.({open:!1,reason:i})},highlightFirstItem({context:e,prop:n,scope:i}){(On(i)?queueMicrotask:Te)(()=>{const s=n("collection").firstValue;s&&e.set("highlightedValue",s)})},highlightFirstItemIfNeeded({computed:e,action:n}){e("autoHighlight")&&n(["highlightFirstItem"])},highlightLastItem({context:e,prop:n,scope:i}){(On(i)?queueMicrotask:Te)(()=>{const s=n("collection").lastValue;s&&e.set("highlightedValue",s)})},highlightNextItem({context:e,prop:n}){let i=null;const l=e.get("highlightedValue"),s=n("collection");l?(i=s.getNextValue(l),!i&&n("loopFocus")&&(i=s.firstValue)):i=s.firstValue,i&&e.set("highlightedValue",i)},highlightPrevItem({context:e,prop:n}){let i=null;const l=e.get("highlightedValue"),s=n("collection");l?(i=s.getPreviousValue(l),!i&&n("loopFocus")&&(i=s.lastValue)):i=s.lastValue,i&&e.set("highlightedValue",i)},highlightFirstSelectedItem({context:e,prop:n}){Te(()=>{const[i]=n("collection").sort(e.get("value"));i&&e.set("highlightedValue",i)})},highlightFirstOrSelectedItem({context:e,prop:n,computed:i}){Te(()=>{let l=null;i("hasSelectedItems")?l=n("collection").sort(e.get("value"))[0]:l=n("collection").firstValue,l&&e.set("highlightedValue",l)})},highlightLastOrSelectedItem({context:e,prop:n,computed:i}){Te(()=>{const l=n("collection");let s=null;i("hasSelectedItems")?s=l.sort(e.get("value"))[0]:s=l.lastValue,s&&e.set("highlightedValue",s)})},autofillInputValue({context:e,computed:n,prop:i,event:l,scope:s}){const c=no(s),f=i("collection");if(!n("autoComplete")||!c||!l.keypress)return;const g=f.stringify(e.get("highlightedValue"));Te(()=>{c.value=g||e.get("inputValue")})},syncSelectedItems(e){queueMicrotask(()=>{const{context:n,prop:i}=e,l=i("collection"),s=n.get("value"),c=s.map(g=>n.get("selectedItems").find(p=>l.getItemValue(p)===g)||l.find(g));n.set("selectedItems",c);const f=Ka(i("selectionBehavior"),{preserve:n.get("inputValue"),replace:l.stringifyMany(s),clear:""});n.set("inputValue",f)})},syncHighlightedItem({context:e,prop:n}){const i=n("collection").find(e.get("highlightedValue"));e.set("highlightedItem",i)},toggleVisibility({event:e,send:n,prop:i}){n({type:i("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});function Jb(e){return(e.previousEvent||e).src}ce()(["allowCustomValue","autoFocus","closeOnSelect","collection","composite","defaultHighlightedValue","defaultInputValue","defaultOpen","defaultValue","dir","disabled","disableLayer","form","getRootNode","highlightedValue","id","ids","inputBehavior","inputValue","invalid","loopFocus","multiple","name","navigate","onFocusOutside","onHighlightChange","onInputValueChange","onInteractOutside","onOpenChange","onOpenChange","onPointerDownOutside","onSelect","onValueChange","open","openOnChange","openOnClick","openOnKeyPress","placeholder","positioning","readOnly","required","scrollToIndexFn","selectionBehavior","translations","value"]);ce()(["htmlFor"]);ce()(["id"]);ce()(["item","persistFocus"]);const o9=lv.extendWith("empty");var $f=ue("dialog").parts("trigger","backdrop","positioner","content","title","description","closeTrigger");$f.build();ce()(["aria-label","closeOnEscape","closeOnInteractOutside","dir","finalFocusEl","getRootNode","getRootNode","id","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","onRequestDismiss","defaultOpen","open","persistentElements","preventScroll","restoreFocus","role","trapFocus"]);var sv=ue("editable").parts("root","area","label","preview","input","editTrigger","submitTrigger","cancelTrigger","control");sv.build();ce()(["activationMode","autoResize","dir","disabled","finalFocusEl","form","getRootNode","id","ids","invalid","maxLength","name","onEditChange","onFocusOutside","onInteractOutside","onPointerDownOutside","onValueChange","onValueCommit","onValueRevert","placeholder","readOnly","required","selectOnFocus","edit","defaultEdit","submitMode","translations","defaultValue","value"]);const uv=ue("field").parts("root","errorText","helperText","input","label","select","textarea","requiredIndicator");uv.build();const cv=ue("fieldset").parts("root","errorText","helperText","legend");cv.build();var dv=ue("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger");dv.build();ce()(["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","dir","directory","disabled","getRootNode","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","required","transformFiles","translations","validate"]);ce()(["file"]);var fv=ue("hoverCard").parts("arrow","arrowTip","trigger","positioner","content");fv.build();var l9=e=>e.ids?.trigger??`hover-card:${e.id}:trigger`,r9=e=>e.ids?.content??`hover-card:${e.id}:content`,s9=e=>e.ids?.positioner??`hover-card:${e.id}:popper`,Fd=e=>e.getById(l9(e)),u9=e=>e.getById(r9(e)),e0=e=>e.getById(s9(e)),{not:gs,and:t0}=zn();t0("isOpenControlled",gs("isPointer")),gs("isPointer"),t0("isOpenControlled",gs("isPointer")),gs("isPointer");ce()(["closeDelay","dir","getRootNode","id","ids","disabled","onOpenChange","defaultOpen","open","openDelay","positioning","onInteractOutside","onPointerDownOutside","onFocusOutside"]);var gv=ue("tree-view").parts("branch","branchContent","branchControl","branchIndentGuide","branchIndicator","branchText","branchTrigger","item","itemIndicator","itemText","label","nodeCheckbox","root","tree");gv.build();var mv=e=>new nv(e);mv.empty=()=>new nv({rootNode:{children:[]}});var c9=(e,n)=>e.ids?.node?.(n)??`tree:${e.id}:node:${n}`,Qn=(e,n)=>{n!=null&&e.getById(c9(e,n))?.focus()};function d9(e,n,i){const l=e.getDescendantValues(n),s=l.every(c=>i.includes(c));return oo(s?li(i,...l):ii(i,...l))}function ms(e,n){const{context:i,prop:l,refs:s}=e;if(!l("loadChildren")){i.set("expandedValue",O=>oo(ii(O,...n)));return}const c=i.get("loadingStatus"),[f,g]=mb(n,O=>c[O]==="loaded");if(f.length>0&&i.set("expandedValue",O=>oo(ii(O,...f))),g.length===0)return;const h=l("collection"),[p,y]=mb(g,O=>{const _=h.findNode(O);return h.getNodeChildren(_).length>0});if(p.length>0&&i.set("expandedValue",O=>oo(ii(O,...p))),y.length===0)return;i.set("loadingStatus",O=>({...O,...y.reduce((_,F)=>({..._,[F]:"loading"}),{})}));const x=y.map(O=>{const _=h.getIndexPath(O),F=h.getValuePath(_),I=h.findNode(O);return{id:O,indexPath:_,valuePath:F,node:I}}),v=s.get("pendingAborts"),C=l("loadChildren");z3(C,()=>"[zag-js/tree-view] `loadChildren` is required for async expansion");const E=x.map(({id:O,indexPath:_,valuePath:F,node:I})=>{const N=v.get(O);N&&(N.abort(),v.delete(O));const P=new AbortController;return v.set(O,P),C({valuePath:F,indexPath:_,node:I,signal:P.signal})});Promise.allSettled(E).then(O=>{const _=[],F=[],I=i.get("loadingStatus");let N=l("collection");O.forEach((P,A)=>{const{id:$,indexPath:Q,node:Y,valuePath:J}=x[A];P.status==="fulfilled"?(I[$]="loaded",_.push($),N=N.replace(Q,{...Y,children:P.value})):(v.delete($),Reflect.deleteProperty(I,$),F.push({node:Y,error:P.reason,indexPath:Q,valuePath:J}))}),i.set("loadingStatus",I),_.length&&(i.set("expandedValue",P=>oo(ii(P,..._))),l("onLoadChildrenComplete")?.({collection:N})),F.length&&l("onLoadChildrenError")?.({nodes:F})})}function En(e){const{prop:n,context:i}=e;return function({indexPath:s}){return n("collection").getValuePath(s).slice(0,-1).some(f=>!i.get("expandedValue").includes(f))}}var{and:Ca}=zn();Ca("isMultipleSelection","moveFocus"),Ca("isShiftKey","isMultipleSelection"),Ca("isShiftKey","isMultipleSelection"),Ca("isBranchFocused","isBranchExpanded"),Ca("isShiftKey","isMultipleSelection"),Ca("isShiftKey","isMultipleSelection"),Ca("isCtrlKey","isMultipleSelection"),Ca("isShiftKey","isMultipleSelection"),Ca("isCtrlKey","isMultipleSelection"),Ca("isShiftKey","isMultipleSelection");ce()(["ids","collection","dir","expandedValue","expandOnClick","defaultFocusedValue","focusedValue","getRootNode","id","onExpandedChange","onFocusChange","onSelectionChange","checkedValue","selectedValue","selectionMode","typeahead","defaultExpandedValue","defaultSelectedValue","defaultCheckedValue","onCheckedChange","onLoadChildrenComplete","onLoadChildrenError","loadChildren"]);ce()(["node","indexPath"]);var hv=ue("listbox").parts("label","input","item","itemText","itemIndicator","itemGroup","itemGroupLabel","content","root","valueText");hv.build();ce()(["collection","defaultHighlightedValue","defaultValue","dir","disabled","deselectable","disallowSelectAll","getRootNode","highlightedValue","id","ids","loopFocus","onHighlightChange","onSelect","onValueChange","orientation","scrollToIndexFn","selectionMode","selectOnHighlight","typeahead","value"]);ce()(["item","highlightOnHover"]);ce()(["id"]);ce()(["htmlFor"]);const f9=hv.extendWith("empty");var pv=ue("menu").parts("arrow","arrowTip","content","contextTrigger","indicator","item","itemGroup","itemGroupLabel","itemIndicator","itemText","positioner","separator","trigger","triggerItem");pv.build();var bv=e=>e.ids?.trigger??`menu:${e.id}:trigger`,g9=e=>e.ids?.contextTrigger??`menu:${e.id}:ctx-trigger`,yv=e=>e.ids?.content??`menu:${e.id}:content`,m9=e=>e.ids?.positioner??`menu:${e.id}:popper`,of=(e,n)=>`${e.id}/${n}`,Jn=e=>e?.dataset.value??null,Tn=e=>e.getById(yv(e)),a0=e=>e.getById(m9(e)),hs=e=>e.getById(bv(e)),h9=(e,n)=>n?e.getById(of(e,n)):null,Dd=e=>e.getById(g9(e)),Wl=e=>{const i=`[role^="menuitem"][data-ownedby=${CSS.escape(yv(e))}]:not([data-disabled])`;return Vs(Tn(e),i)},p9=e=>zl(Wl(e)),b9=e=>Of(Wl(e)),Yf=(e,n)=>n?e.id===n||e.dataset.value===n:!1,y9=(e,n)=>{const i=Wl(e),l=i.findIndex(s=>Yf(s,n.value));return o3(i,l,{loop:n.loop??n.loopFocus})},v9=(e,n)=>{const i=Wl(e),l=i.findIndex(s=>Yf(s,n.value));return r3(i,l,{loop:n.loop??n.loopFocus})},x9=(e,n)=>{const i=Wl(e),l=i.find(s=>Yf(s,n.value));return Pl(i,{state:n.typeaheadState,key:n.key,activeId:l?.id??null})},S9=e=>!!e?.getAttribute("role")?.startsWith("menuitem")&&!!e?.hasAttribute("aria-controls"),w9="menu:select";function C9(e,n){if(!e)return;const i=vt(e),l=new i.CustomEvent(w9,{detail:{value:n}});e.dispatchEvent(l)}var{not:ra,and:eo,or:E9}=zn();ra("isSubmenu"),E9("isOpenAutoFocusEvent","isArrowDownEvent"),eo(ra("isTriggerItem"),"isOpenControlled"),ra("isTriggerItem"),eo("isSubmenu","isOpenControlled"),ra("isPointerSuspended"),eo(ra("isPointerSuspended"),ra("isTriggerItem")),eo(ra("isTriggerItemHighlighted"),ra("isHighlightedItemEditable"),"closeOnSelect","isOpenControlled"),eo(ra("isTriggerItemHighlighted"),ra("isHighlightedItemEditable"),"closeOnSelect"),eo(ra("isTriggerItemHighlighted"),ra("isHighlightedItemEditable"));function n0(e){let n=e.parent;for(;n&&n.context.get("isSubmenu");)n=n.refs.get("parent");n?.send({type:"CLOSE"})}function O9(e,n){return e?fC(e,n):!1}function T9(e,n,i){const l=Object.keys(e).length>0;if(!n)return null;if(!l)return of(i,n);for(const s in e){const c=e[s],f=bv(c.scope);if(f===n)return f}return of(i,n)}ce()(["anchorPoint","aria-label","closeOnSelect","composite","defaultHighlightedValue","defaultOpen","dir","getRootNode","highlightedValue","id","ids","loopFocus","navigate","onEscapeKeyDown","onFocusOutside","onHighlightChange","onInteractOutside","onOpenChange","onPointerDownOutside","onRequestDismiss","onSelect","open","positioning","typeahead"]);ce()(["closeOnSelect","disabled","value","valueText"]);ce()(["htmlFor"]);ce()(["id"]);ce()(["checked","closeOnSelect","disabled","onCheckedChange","type","value","valueText"]);let Md=new Map,lf=!1;try{lf=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let Ls=!1;try{Ls=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const vv={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class k9{format(n){let i="";if(!lf&&this.options.signDisplay!=null?i=R9(this.numberFormatter,this.options.signDisplay,n):i=this.numberFormatter.format(n),this.options.style==="unit"&&!Ls){var l;let{unit:s,unitDisplay:c="short",locale:f}=this.resolvedOptions();if(!s)return i;let g=(l=vv[s])===null||l===void 0?void 0:l[c];i+=g[f]||g.default}return i}formatToParts(n){return this.numberFormatter.formatToParts(n)}formatRange(n,i){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(n,i);if(i<n)throw new RangeError("End date must be >= start date");return`${this.format(n)} – ${this.format(i)}`}formatRangeToParts(n,i){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(n,i);if(i<n)throw new RangeError("End date must be >= start date");let l=this.numberFormatter.formatToParts(n),s=this.numberFormatter.formatToParts(i);return[...l.map(c=>({...c,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...s.map(c=>({...c,source:"endRange"}))]}resolvedOptions(){let n=this.numberFormatter.resolvedOptions();return!lf&&this.options.signDisplay!=null&&(n={...n,signDisplay:this.options.signDisplay}),!Ls&&this.options.style==="unit"&&(n={...n,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),n}constructor(n,i={}){this.numberFormatter=A9(n,i),this.options=i}}function A9(e,n={}){let{numberingSystem:i}=n;if(i&&e.includes("-nu-")&&(e.includes("-u-")||(e+="-u-"),e+=`-nu-${i}`),n.style==="unit"&&!Ls){var l;let{unit:f,unitDisplay:g="short"}=n;if(!f)throw new Error('unit option must be provided with style: "unit"');if(!(!((l=vv[f])===null||l===void 0)&&l[g]))throw new Error(`Unsupported unit ${f} with unitDisplay = ${g}`);n={...n,style:"decimal"}}let s=e+(n?Object.entries(n).sort((f,g)=>f[0]<g[0]?-1:1).join():"");if(Md.has(s))return Md.get(s);let c=new Intl.NumberFormat(e,n);return Md.set(s,c),c}function R9(e,n,i){if(n==="auto")return e.format(i);if(n==="never")return e.format(Math.abs(i));{let l=!1;if(n==="always"?l=i>0||Object.is(i,0):n==="exceptZero"&&(Object.is(i,-0)||Object.is(i,0)?i=Math.abs(i):l=i>0),l){let s=e.format(-i),c=e.format(i),f=s.replace(c,"").replace(/\u200e|\u061C/,"");return[...f].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),s.replace(c,"!!!").replace(f,"+").replace("!!!",c)}else return e.format(i)}}const _9=new RegExp("^.*\\(.*\\).*$"),N9=["latn","arab","hanidec","deva","beng","fullwide"];class xv{parse(n){return Pd(this.locale,this.options,n).parse(n)}isValidPartialNumber(n,i,l){return Pd(this.locale,this.options,n).isValidPartialNumber(n,i,l)}getNumberingSystem(n){return Pd(this.locale,this.options,n).options.numberingSystem}constructor(n,i={}){this.locale=n,this.options=i}}const i0=new Map;function Pd(e,n,i){let l=o0(e,n);if(!e.includes("-nu-")&&!l.isValidPartialNumber(i)){for(let s of N9)if(s!==l.options.numberingSystem){let c=o0(e+(e.includes("-u-")?"-nu-":"-u-nu-")+s,n);if(c.isValidPartialNumber(i))return c}}return l}function o0(e,n){let i=e+(n?Object.entries(n).sort((s,c)=>s[0]<c[0]?-1:1).join():""),l=i0.get(i);return l||(l=new z9(e,n),i0.set(i,l)),l}class z9{parse(n){let i=this.sanitize(n);if(this.symbols.group&&(i=Ol(i,this.symbols.group,"")),this.symbols.decimal&&(i=i.replace(this.symbols.decimal,".")),this.symbols.minusSign&&(i=i.replace(this.symbols.minusSign,"-")),i=i.replace(this.symbols.numeral,this.symbols.index),this.options.style==="percent"){let f=i.indexOf("-");i=i.replace("-",""),i=i.replace("+","");let g=i.indexOf(".");g===-1&&(g=i.length),i=i.replace(".",""),g-2===0?i=`0.${i}`:g-2===-1?i=`0.0${i}`:g-2===-2?i="0.00":i=`${i.slice(0,g-2)}.${i.slice(g-2)}`,f>-1&&(i=`-${i}`)}let l=i?+i:NaN;if(isNaN(l))return NaN;if(this.options.style==="percent"){var s,c;let f={...this.options,style:"decimal",minimumFractionDigits:Math.min(((s=this.options.minimumFractionDigits)!==null&&s!==void 0?s:0)+2,20),maximumFractionDigits:Math.min(((c=this.options.maximumFractionDigits)!==null&&c!==void 0?c:0)+2,20)};return new xv(this.locale,f).parse(new k9(this.locale,f).format(l))}return this.options.currencySign==="accounting"&&_9.test(n)&&(l=-1*l),l}sanitize(n){return n=n.replace(this.symbols.literals,""),this.symbols.minusSign&&(n=n.replace("-",this.symbols.minusSign)),this.options.numberingSystem==="arab"&&(this.symbols.decimal&&(n=n.replace(",",this.symbols.decimal),n=n.replace("،",this.symbols.decimal)),this.symbols.group&&(n=Ol(n,".",this.symbols.group))),this.options.locale==="fr-FR"&&this.symbols.group&&(n=Ol(n," ",this.symbols.group),n=Ol(n,/\u00A0/g,this.symbols.group)),n}isValidPartialNumber(n,i=-1/0,l=1/0){return n=this.sanitize(n),this.symbols.minusSign&&n.startsWith(this.symbols.minusSign)&&i<0?n=n.slice(this.symbols.minusSign.length):this.symbols.plusSign&&n.startsWith(this.symbols.plusSign)&&l>0&&(n=n.slice(this.symbols.plusSign.length)),this.symbols.group&&n.startsWith(this.symbols.group)||this.symbols.decimal&&n.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(this.symbols.group&&(n=Ol(n,this.symbols.group,"")),n=n.replace(this.symbols.numeral,""),this.symbols.decimal&&(n=n.replace(this.symbols.decimal,"")),n.length===0)}constructor(n,i={}){this.locale=n,i.roundingIncrement!==1&&i.roundingIncrement!=null&&(i.maximumFractionDigits==null&&i.minimumFractionDigits==null?(i.maximumFractionDigits=0,i.minimumFractionDigits=0):i.maximumFractionDigits==null?i.maximumFractionDigits=i.minimumFractionDigits:i.minimumFractionDigits==null&&(i.minimumFractionDigits=i.maximumFractionDigits)),this.formatter=new Intl.NumberFormat(n,i),this.options=this.formatter.resolvedOptions(),this.symbols=V9(n,this.formatter,this.options,i);var l,s;this.options.style==="percent"&&(((l=this.options.minimumFractionDigits)!==null&&l!==void 0?l:0)>18||((s=this.options.maximumFractionDigits)!==null&&s!==void 0?s:0)>18)&&console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")}}const l0=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]),I9=[0,4,2,1,11,20,3,7,100,21,.1,1.1];function V9(e,n,i,l){var s,c,f,g;let h=new Intl.NumberFormat(e,{...i,minimumSignificantDigits:1,maximumSignificantDigits:21,roundingIncrement:1,roundingPriority:"auto",roundingMode:"halfExpand"}),p=h.formatToParts(-10000.111),y=h.formatToParts(10000.111),x=I9.map(K=>h.formatToParts(K));var v;let C=(v=(s=p.find(K=>K.type==="minusSign"))===null||s===void 0?void 0:s.value)!==null&&v!==void 0?v:"-",E=(c=y.find(K=>K.type==="plusSign"))===null||c===void 0?void 0:c.value;!E&&(l?.signDisplay==="exceptZero"||l?.signDisplay==="always")&&(E="+");let _=(f=new Intl.NumberFormat(e,{...i,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(K=>K.type==="decimal"))===null||f===void 0?void 0:f.value,F=(g=p.find(K=>K.type==="group"))===null||g===void 0?void 0:g.value,I=p.filter(K=>!l0.has(K.type)).map(K=>r0(K.value)),N=x.flatMap(K=>K.filter(de=>!l0.has(de.type)).map(de=>r0(de.value))),P=[...new Set([...I,...N])].sort((K,de)=>de.length-K.length),A=P.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${P.join("|")}|[\\p{White_Space}]`,"gu"),$=[...new Intl.NumberFormat(i.locale,{useGrouping:!1}).format(9876543210)].reverse(),Q=new Map($.map((K,de)=>[K,de])),Y=new RegExp(`[${$.join("")}]`,"g");return{minusSign:C,plusSign:E,decimal:_,group:F,literals:A,numeral:Y,index:K=>String(Q.get(K))}}function Ol(e,n,i){return e.replaceAll?e.replaceAll(n,i):e.split(n).join(i)}function r0(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var Sv=ue("numberInput").parts("root","label","input","control","valueText","incrementTrigger","decrementTrigger","scrubber");Sv.build();var q9=e=>e.ids?.input??`number-input:${e.id}:input`,F9=e=>e.ids?.incrementTrigger??`number-input:${e.id}:inc`,D9=e=>e.ids?.decrementTrigger??`number-input:${e.id}:dec`,wv=e=>`number-input:${e.id}:cursor`,ps=e=>e.getById(q9(e)),M9=e=>e.getById(F9(e)),P9=e=>e.getById(D9(e)),Cv=e=>e.getDoc().getElementById(wv(e)),L9=(e,n)=>{let i=null;return n==="increment"&&(i=M9(e)),n==="decrement"&&(i=P9(e)),i},B9=(e,n)=>{if(!py())return U9(e,n),()=>{Cv(e)?.remove()}},j9=e=>{const n=e.getDoc(),i=n.documentElement,l=n.body;return l.style.pointerEvents="none",i.style.userSelect="none",i.style.cursor="ew-resize",()=>{l.style.pointerEvents="",i.style.userSelect="",i.style.cursor="",i.style.length||i.removeAttribute("style"),l.style.length||l.removeAttribute("style")}},H9=(e,n)=>{const{point:i,isRtl:l,event:s}=n,c=e.getWin(),f=Nd(s.movementX,c.devicePixelRatio),g=Nd(s.movementY,c.devicePixelRatio);let h=f>0?"increment":f<0?"decrement":null;l&&h==="increment"&&(h="decrement"),l&&h==="decrement"&&(h="increment");const p={x:i.x+f,y:i.y+g},y=c.innerWidth,x=Nd(7.5,c.devicePixelRatio);return p.x=w3(p.x+x,y)-x,{hint:h,point:p}},U9=(e,n)=>{const i=e.getDoc(),l=i.createElement("div");l.className="scrubber--cursor",l.id=wv(e),Object.assign(l.style,{width:"15px",height:"15px",position:"fixed",pointerEvents:"none",left:"0px",top:"0px",zIndex:F3,transform:n?`translate3d(${n.x}px, ${n.y}px, 0px)`:void 0,willChange:"transform"}),l.innerHTML=`
      <svg width="46" height="15" style="left: -15.5px; position: absolute; top: 0; filter: drop-shadow(rgba(0, 0, 0, 0.4) 0px 1px 1.1px);">
        <g transform="translate(2 3)">
          <path fill-rule="evenodd" d="M 15 4.5L 15 2L 11.5 5.5L 15 9L 15 6.5L 31 6.5L 31 9L 34.5 5.5L 31 2L 31 4.5Z" style="stroke-width: 2px; stroke: white;"></path>
          <path fill-rule="evenodd" d="M 15 4.5L 15 2L 11.5 5.5L 15 9L 15 6.5L 31 6.5L 31 9L 34.5 5.5L 31 2L 31 4.5Z"></path>
        </g>
      </svg>`,i.body.appendChild(l)};function G9(e){if(!(!e||e.ownerDocument.activeElement!==e))try{const{selectionStart:n,selectionEnd:i,value:l}=e,s=l.substring(0,n),c=l.substring(i);return{start:n,end:i,value:l,beforeTxt:s,afterTxt:c}}catch{}}function W9(e,n){if(!(!e||e.ownerDocument.activeElement!==e)){if(!n){e.setSelectionRange(e.value.length,e.value.length);return}try{const{value:i}=e,{beforeTxt:l="",afterTxt:s="",start:c}=n;let f=i.length;if(i.endsWith(s))f=i.length-s.length;else if(i.startsWith(l))f=l.length;else if(c!=null){const g=l[c-1],h=i.indexOf(g,c-1);h!==-1&&(f=h+1)}e.setSelectionRange(f,f)}catch{}}}var $9=(e,n={})=>new Intl.NumberFormat(e,n),Y9=(e,n={})=>new xv(e,n),Ld=(e,n)=>{const{prop:i,computed:l}=n;return i("formatOptions")?e===""?Number.NaN:l("parser").parse(e):parseFloat(e)},ei=(e,n)=>{const{prop:i,computed:l}=n;return Number.isNaN(e)?"":i("formatOptions")?l("formatter").format(e):e.toString()},K9=(e,n)=>{let i=e!==void 0&&!Number.isNaN(e)?e:1;return n?.style==="percent"&&(e===void 0||Number.isNaN(e))&&(i=.01),i},{choose:X9,guards:Z9,createMachine:Q9}=Ey(),{not:s0,and:u0}=Z9;Q9({props({props:e}){const n=K9(e.step,e.formatOptions);return{dir:"ltr",locale:"en-US",focusInputOnChange:!0,clampValueOnBlur:!e.allowOverflow,allowOverflow:!1,inputMode:"decimal",pattern:"-?[0-9]*(.[0-9]+)?",defaultValue:"",step:n,min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,spinOnPress:!0,...e,translations:{incrementLabel:"increment value",decrementLabel:"decrease value",...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:n,getComputed:i}){return{value:n(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(l){const s=i(),c=Ld(l,{computed:s,prop:e});e("onValueChange")?.({value:l,valueAsNumber:c})}})),hint:n(()=>({defaultValue:null})),scrubberCursorPoint:n(()=>({defaultValue:null,hash(l){return l?`x:${l.x}, y:${l.y}`:""}})),fieldsetDisabled:n(()=>({defaultValue:!1}))}},computed:{isRtl:({prop:e})=>e("dir")==="rtl",valueAsNumber:({context:e,computed:n,prop:i})=>Ld(e.get("value"),{computed:n,prop:i}),formattedValue:({computed:e,prop:n})=>ei(e("valueAsNumber"),{computed:e,prop:n}),isAtMin:({computed:e,prop:n})=>E3(e("valueAsNumber"),n("min")),isAtMax:({computed:e,prop:n})=>C3(e("valueAsNumber"),n("max")),isOutOfRange:({computed:e,prop:n})=>!O3(e("valueAsNumber"),n("min"),n("max")),isValueEmpty:({context:e})=>e.get("value")==="",isDisabled:({prop:e,context:n})=>!!e("disabled")||n.get("fieldsetDisabled"),canIncrement:({prop:e,computed:n})=>e("allowOverflow")||!n("isAtMax"),canDecrement:({prop:e,computed:n})=>e("allowOverflow")||!n("isAtMin"),valueText:({prop:e,context:n})=>e("translations").valueText?.(n.get("value")),formatter:wb(({prop:e})=>[e("locale"),e("formatOptions")],(e,n)=>$9(e,n)),parser:wb(({prop:e})=>[e("locale"),e("formatOptions")],(e,n)=>Y9(e,n))},watch({track:e,action:n,context:i,computed:l,prop:s}){e([()=>i.get("value"),()=>s("locale")],()=>{n(["syncInputElement"])}),e([()=>l("isOutOfRange")],()=>{n(["invokeOnInvalid"])}),e([()=>i.hash("scrubberCursorPoint")],()=>{n(["setVirtualCursorPosition"])})},effects:["trackFormControl"],on:{"VALUE.SET":{actions:["setRawValue"]},"VALUE.CLEAR":{actions:["clearValue"]},"VALUE.INCREMENT":{actions:["increment"]},"VALUE.DECREMENT":{actions:["decrement"]}},states:{idle:{on:{"TRIGGER.PRESS_DOWN":[{guard:"isTouchPointer",target:"before:spin",actions:["setHint"]},{target:"before:spin",actions:["focusInput","invokeOnFocus","setHint"]}],"SCRUBBER.PRESS_DOWN":{target:"scrubbing",actions:["focusInput","invokeOnFocus","setHint","setCursorPoint"]},"INPUT.FOCUS":{target:"focused",actions:["focusInput","invokeOnFocus"]}}},focused:{tags:["focus"],effects:["attachWheelListener"],on:{"TRIGGER.PRESS_DOWN":[{guard:"isTouchPointer",target:"before:spin",actions:["setHint"]},{target:"before:spin",actions:["focusInput","setHint"]}],"SCRUBBER.PRESS_DOWN":{target:"scrubbing",actions:["focusInput","setHint","setCursorPoint"]},"INPUT.ARROW_UP":{actions:["increment"]},"INPUT.ARROW_DOWN":{actions:["decrement"]},"INPUT.HOME":{actions:["decrementToMin"]},"INPUT.END":{actions:["incrementToMax"]},"INPUT.CHANGE":{actions:["setValue","setHint"]},"INPUT.BLUR":[{guard:u0("clampValueOnBlur",s0("isInRange")),target:"idle",actions:["setClampedValue","clearHint","invokeOnBlur"]},{guard:s0("isInRange"),target:"idle",actions:["setFormattedValue","clearHint","invokeOnBlur","invokeOnInvalid"]},{target:"idle",actions:["setFormattedValue","clearHint","invokeOnBlur"]}],"INPUT.ENTER":{actions:["setFormattedValue","clearHint","invokeOnBlur"]}}},"before:spin":{tags:["focus"],effects:["trackButtonDisabled","waitForChangeDelay"],entry:X9([{guard:"isIncrementHint",actions:["increment"]},{guard:"isDecrementHint",actions:["decrement"]}]),on:{CHANGE_DELAY:{target:"spinning",guard:u0("isInRange","spinOnPress")},"TRIGGER.PRESS_UP":[{guard:"isTouchPointer",target:"focused",actions:["clearHint"]},{target:"focused",actions:["focusInput","clearHint"]}]}},spinning:{tags:["focus"],effects:["trackButtonDisabled","spinValue"],on:{SPIN:[{guard:"isIncrementHint",actions:["increment"]},{guard:"isDecrementHint",actions:["decrement"]}],"TRIGGER.PRESS_UP":{target:"focused",actions:["focusInput","clearHint"]}}},scrubbing:{tags:["focus"],effects:["activatePointerLock","trackMousemove","setupVirtualCursor","preventTextSelection"],on:{"SCRUBBER.POINTER_UP":{target:"focused",actions:["focusInput","clearCursorPoint"]},"SCRUBBER.POINTER_MOVE":[{guard:"isIncrementHint",actions:["increment","setCursorPoint"]},{guard:"isDecrementHint",actions:["decrement","setCursorPoint"]}]}}},implementations:{guards:{clampValueOnBlur:({prop:e})=>e("clampValueOnBlur"),spinOnPress:({prop:e})=>!!e("spinOnPress"),isInRange:({computed:e})=>!e("isOutOfRange"),isDecrementHint:({context:e,event:n})=>(n.hint??e.get("hint"))==="decrement",isIncrementHint:({context:e,event:n})=>(n.hint??e.get("hint"))==="increment",isTouchPointer:({event:e})=>e.pointerType==="touch"},effects:{waitForChangeDelay({send:e}){const n=setTimeout(()=>{e({type:"CHANGE_DELAY"})},300);return()=>clearTimeout(n)},spinValue({send:e}){const n=setInterval(()=>{e({type:"SPIN"})},50);return()=>clearInterval(n)},trackFormControl({context:e,scope:n}){const i=ps(n);return Af(i,{onFieldsetDisabledChange(l){e.set("fieldsetDisabled",l)},onFormReset(){e.set("value",e.initial("value"))}})},setupVirtualCursor({context:e,scope:n}){const i=e.get("scrubberCursorPoint");return B9(n,i)},preventTextSelection({scope:e}){return j9(e)},trackButtonDisabled({context:e,scope:n,send:i}){const l=e.get("hint"),s=L9(n,l);return Xs(s,{attributes:["disabled"],callback(){i({type:"TRIGGER.PRESS_UP",src:"attr"})}})},attachWheelListener({scope:e,send:n,prop:i}){const l=ps(e);if(!l||!e.isActiveElement(l)||!i("allowMouseWheel"))return;function s(c){c.preventDefault();const f=Math.sign(c.deltaY)*-1;f===1?n({type:"VALUE.INCREMENT"}):f===-1&&n({type:"VALUE.DECREMENT"})}return yt(l,"wheel",s,{passive:!1})},activatePointerLock({scope:e}){if(!py())return T5(e.getDoc())},trackMousemove({scope:e,send:n,context:i,computed:l}){const s=e.getDoc();function c(g){const h=i.get("scrubberCursorPoint"),p=l("isRtl"),y=H9(e,{point:h,isRtl:p,event:g});y.hint&&n({type:"SCRUBBER.POINTER_MOVE",hint:y.hint,point:y.point})}function f(){n({type:"SCRUBBER.POINTER_UP"})}return Xd(yt(s,"mousemove",c,!1),yt(s,"mouseup",f,!1))}},actions:{focusInput({scope:e,prop:n}){if(!n("focusInputOnChange"))return;const i=ps(e);e.isActiveElement(i)||Te(()=>i?.focus({preventScroll:!0}))},increment({context:e,event:n,prop:i,computed:l}){let s=R3(l("valueAsNumber"),n.step??i("step"));i("allowOverflow")||(s=It(s,i("min"),i("max"))),e.set("value",ei(s,{computed:l,prop:i}))},decrement({context:e,event:n,prop:i,computed:l}){let s=_3(l("valueAsNumber"),n.step??i("step"));i("allowOverflow")||(s=It(s,i("min"),i("max"))),e.set("value",ei(s,{computed:l,prop:i}))},setClampedValue({context:e,prop:n,computed:i}){const l=It(i("valueAsNumber"),n("min"),n("max"));e.set("value",ei(l,{computed:i,prop:n}))},setRawValue({context:e,event:n,prop:i,computed:l}){let s=Ld(n.value,{computed:l,prop:i});i("allowOverflow")||(s=It(s,i("min"),i("max"))),e.set("value",ei(s,{computed:l,prop:i}))},setValue({context:e,event:n}){const i=n.target?.value??n.value;e.set("value",i)},clearValue({context:e}){e.set("value","")},incrementToMax({context:e,prop:n,computed:i}){const l=ei(n("max"),{computed:i,prop:n});e.set("value",l)},decrementToMin({context:e,prop:n,computed:i}){const l=ei(n("min"),{computed:i,prop:n});e.set("value",l)},setHint({context:e,event:n}){e.set("hint",n.hint)},clearHint({context:e}){e.set("hint",null)},invokeOnFocus({computed:e,prop:n}){n("onFocusChange")?.({focused:!0,value:e("formattedValue"),valueAsNumber:e("valueAsNumber")})},invokeOnBlur({computed:e,prop:n}){n("onFocusChange")?.({focused:!1,value:e("formattedValue"),valueAsNumber:e("valueAsNumber")})},invokeOnInvalid({computed:e,prop:n,event:i}){if(i.type==="INPUT.CHANGE")return;const l=e("valueAsNumber")>n("max")?"rangeOverflow":"rangeUnderflow";n("onValueInvalid")?.({reason:l,value:e("formattedValue"),valueAsNumber:e("valueAsNumber")})},syncInputElement({context:e,event:n,computed:i,scope:l}){const s=n.type.endsWith("CHANGE")?e.get("value"):i("formattedValue"),c=ps(l),f=G9(c);Te(()=>{Ks(c,s),W9(c,f)})},setFormattedValue({context:e,computed:n}){e.set("value",n("formattedValue"))},setCursorPoint({context:e,event:n}){e.set("scrubberCursorPoint",n.point)},clearCursorPoint({context:e}){e.set("scrubberCursorPoint",null)},setVirtualCursorPosition({context:e,scope:n}){const i=Cv(n),l=e.get("scrubberCursorPoint");!i||!l||(i.style.transform=`translate3d(${l.x}px, ${l.y}px, 0px)`)}}}});ce()(["allowMouseWheel","allowOverflow","clampValueOnBlur","dir","disabled","focusInputOnChange","form","formatOptions","getRootNode","id","ids","inputMode","invalid","locale","max","min","name","onFocusChange","onValueChange","onValueInvalid","pattern","required","readOnly","spinOnPress","step","translations","value","defaultValue"]);var Ev=ue("pinInput").parts("root","label","input","control");Ev.build();ce()(["autoFocus","blurOnComplete","count","defaultValue","dir","disabled","form","getRootNode","id","ids","invalid","mask","name","onValueChange","onValueComplete","onValueInvalid","otp","pattern","placeholder","readOnly","required","selectOnFocus","translations","type","value"]);var Ov=ue("popover").parts("arrow","arrowTip","anchor","trigger","indicator","positioner","content","title","description","closeTrigger");Ov.build();ce()(["autoFocus","closeOnEscape","closeOnInteractOutside","dir","getRootNode","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","onRequestDismiss","defaultOpen","open","persistentElements","portalled","positioning"]);var Kf=ue("progress").parts("root","label","track","range","valueText","view","circle","circleTrack","circleRange");Kf.build();ce()(["dir","getRootNode","id","ids","max","min","orientation","translations","value","onValueChange","defaultValue","formatOptions","locale"]);var Tv=ue("qr-code").parts("root","frame","pattern","overlay","downloadTrigger");Tv.build();ce()(["ids","defaultValue","value","id","encoding","dir","getRootNode","onValueChange","pixelSize"]);var Xf=ue("radio-group").parts("root","label","item","itemText","itemControl","indicator");Xf.build();ce()(["dir","disabled","form","getRootNode","id","ids","name","onValueChange","orientation","readOnly","value","defaultValue"]);ce()(["value","disabled","invalid"]);var kv=ue("rating-group").parts("root","label","item","control");kv.build();ce()(["allowHalf","autoFocus","count","dir","disabled","form","getRootNode","id","ids","name","onHoverChange","onValueChange","required","readOnly","translations","value","defaultValue"]);ce()(["index"]);var Av=ue("scroll-area").parts("root","viewport","content","scrollbar","thumb","corner");Av.build();ce()(["dir","getRootNode","ids","id"]);const Rv=Xf.rename("segment-group");Rv.build();var _v=ue("select").parts("label","positioner","trigger","indicator","clearTrigger","item","itemText","itemIndicator","itemGroup","itemGroupLabel","list","content","root","control","valueText");_v.build();var Nv=e=>new nu(e);Nv.empty=()=>new nu({items:[]});var J9=e=>e.ids?.content??`select:${e.id}:content`,e4=e=>e.ids?.trigger??`select:${e.id}:trigger`,t4=e=>e.ids?.clearTrigger??`select:${e.id}:clear-trigger`,a4=(e,n)=>e.ids?.item?.(n)??`select:${e.id}:option:${n}`,n4=e=>e.ids?.hiddenSelect??`select:${e.id}:select`,i4=e=>e.ids?.positioner??`select:${e.id}:positioner`,Bd=e=>e.getById(n4(e)),Tl=e=>e.getById(J9(e)),bs=e=>e.getById(e4(e)),o4=e=>e.getById(t4(e)),c0=e=>e.getById(i4(e)),jd=(e,n)=>n==null?null:e.getById(a4(e,n)),{and:kl,not:ti,or:l4}=zn();l4("isTriggerArrowDownEvent","isTriggerEnterEvent"),kl(ti("multiple"),"hasSelectedItems"),ti("multiple"),kl(ti("multiple"),"hasSelectedItems"),ti("multiple"),ti("multiple"),ti("multiple"),ti("multiple"),kl("closeOnSelect","isOpenControlled"),kl("hasHighlightedItem","loop","isLastItemHighlighted"),kl("hasHighlightedItem","loop","isFirstItemHighlighted");function d0(e){const n=e.restoreFocus??e.previousEvent?.restoreFocus;return n==null||!!n}ce()(["closeOnSelect","collection","composite","defaultHighlightedValue","defaultOpen","defaultValue","deselectable","dir","disabled","form","getRootNode","highlightedValue","id","ids","invalid","loopFocus","multiple","name","onFocusOutside","onHighlightChange","onInteractOutside","onOpenChange","onPointerDownOutside","onSelect","onValueChange","open","positioning","readOnly","required","scrollToIndexFn","value"]);ce()(["item","persistFocus"]);ce()(["id"]);ce()(["htmlFor"]);var zv=ue("slider").parts("root","label","thumb","valueText","track","range","control","markerGroup","marker","draggingIndicator");zv.build();ce()(["aria-label","aria-labelledby","dir","disabled","form","getAriaValueText","getRootNode","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value","defaultValue"]);ce()(["index","name"]);var Iv=ue("switch").parts("root","label","control","thumb");Iv.build();ce()(["checked","defaultChecked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]);var Vv=ue("tooltip").parts("trigger","arrow","arrowTip","positioner","content");Vv.build();var r4=e=>e.ids?.trigger??`tooltip:${e.id}:trigger`,s4=e=>e.ids?.positioner??`tooltip:${e.id}:popper`,Hd=e=>e.getById(r4(e)),f0=e=>e.getById(s4(e)),ai=N3({id:null}),{and:u4,not:g0}=zn();u4("noVisibleTooltip",g0("hasPointerMoveOpened")),g0("hasPointerMoveOpened");ce()(["aria-label","closeDelay","closeOnEscape","closeOnPointerDown","closeOnScroll","closeOnClick","dir","disabled","getRootNode","id","ids","interactive","onOpenChange","defaultOpen","open","openDelay","positioning"]);function qv(e,n=[]){const i=Object.assign({},e);for(const l of n)l in i&&delete i[l];return i}const c4=(e,n)=>{if(!e||typeof e!="string")return{invalid:!0,value:e};const[i,l]=e.split("/");if(!i||!l||i==="currentBg")return{invalid:!0,value:i};const s=n(`colors.${i}`),c=n.raw(`opacity.${l}`)?.value;if(!c&&isNaN(Number(l)))return{invalid:!0,value:i};const f=c?Number(c)*100+"%":`${l}%`,g=s??i;return{invalid:!1,color:g,value:`color-mix(in srgb, ${g} ${f}, transparent)`}},Be=e=>(n,i)=>{const l=i.utils.colorMix(n);if(l.invalid)return{[e]:n};const s="--mix-"+e;return{[s]:l.value,[e]:`var(${s}, ${l.color})`}};function rf(e){if(e===null||typeof e!="object")return e;if(Array.isArray(e))return e.map(i=>rf(i));const n=Object.create(Object.getPrototypeOf(e));for(const i of Object.keys(e))n[i]=rf(e[i]);return n}function sf(e,n){if(n==null)return e;for(const i of Object.keys(n))if(!(n[i]===void 0||i==="__proto__"))if(!zt(e[i])&&zt(n[i]))Object.assign(e,{[i]:n[i]});else if(e[i]&&zt(n[i]))sf(e[i],n[i]);else if(Array.isArray(n[i])&&Array.isArray(e[i])){let l=0;for(;l<n[i].length;l++)zt(e[i][l])&&zt(n[i][l])?sf(e[i][l],n[i][l]):e[i][l]=n[i][l]}else Object.assign(e,{[i]:n[i]});return e}function vo(e,...n){for(const i of n)sf(e,i);return e}const uf=e=>e!=null;function Na(e,n,i={}){const{stop:l,getKey:s}=i;function c(f,g=[]){if(zt(f)||Array.isArray(f)){const h={};for(const[p,y]of Object.entries(f)){const x=s?.(p,y)??p,v=[...g,x];if(l?.(f,v))return n(f,g);const C=c(y,v);uf(C)&&(h[x]=C)}return h}return n(f,g)}return c(e)}function d4(e,n){return Array.isArray(e)?e.map(i=>uf(i)?n(i):i):zt(e)?Na(e,i=>n(i)):uf(e)?n(e):e}const ys=["value","type","description"],f4=e=>e&&typeof e=="object"&&!Array.isArray(e),Fv=(...e)=>{const n=vo({},...e.map(rf));return n.theme?.tokens&&Na(n.theme.tokens,i=>{const c=Object.keys(i).filter(g=>!ys.includes(g)).length>0,f=ys.some(g=>i[g]!=null);return c&&f&&(i.DEFAULT||(i.DEFAULT={}),ys.forEach(g=>{var h;i[g]!=null&&((h=i.DEFAULT)[g]||(h[g]=i[g]),delete i[g])})),i},{stop(i){return f4(i)&&Object.keys(i).some(l=>ys.includes(l)||l!==l.toLowerCase()&&l!==l.toUpperCase())}}),n},g4=e=>e,ot=e=>e,ge=e=>e,m4=e=>e,h4=e=>e,xo=e=>e,p4=e=>e,b4=e=>e,y4=e=>e;function Dv(){const e=n=>n;return new Proxy(e,{get(){return e}})}const at=Dv(),Zf=Dv(),Mv=e=>e,v4=/[^a-zA-Z0-9_\u0081-\uffff-]/g;function x4(e){return`${e}`.replace(v4,n=>`\\${n}`)}const S4=/[A-Z]/g;function w4(e){return e.replace(S4,n=>`-${n.toLowerCase()}`)}function Pv(e,n={}){const{fallback:i="",prefix:l=""}=n,s=w4(["-",l,x4(e)].filter(Boolean).join("-"));return{var:s,ref:`var(${s}${i?`, ${i}`:""})`}}const C4=e=>/^var\(--.+\)$/.test(e),dt=(e,n)=>n!=null?`${e}(${n})`:n,ni=e=>{if(C4(e)||e==null)return e;const n=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||n?`${e}deg`:e},m0=e=>({values:["outside","inside","mixed","none"],transform(n,{token:i}){const l=i("colors.colorPalette.focusRing");return{inside:{"--focus-ring-color":l,[e]:{outlineOffset:"0px",outlineWidth:"var(--focus-ring-width, 1px)",outlineColor:"var(--focus-ring-color)",outlineStyle:"var(--focus-ring-style, solid)",borderColor:"var(--focus-ring-color)"}},outside:{"--focus-ring-color":l,[e]:{outlineWidth:"var(--focus-ring-width, 2px)",outlineOffset:"var(--focus-ring-offset, 2px)",outlineStyle:"var(--focus-ring-style, solid)",outlineColor:"var(--focus-ring-color)"}},mixed:{"--focus-ring-color":l,[e]:{outlineWidth:"var(--focus-ring-width, 3px)",outlineStyle:"var(--focus-ring-style, solid)",outlineColor:"color-mix(in srgb, var(--focus-ring-color), transparent 60%)",borderColor:"var(--focus-ring-color)"}},none:{"--focus-ring-color":l,[e]:{outline:"none"}}}[n]??{}}}),E4=Be("borderColor"),Ya=e=>({transition:e,transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"}),O4=g4({hover:["@media (hover: hover)","&:is(:hover, [data-hover]):not(:disabled, [data-disabled])"],active:"&:is(:active, [data-active]):not(:disabled, [data-disabled], [data-state=open])",focus:"&:is(:focus, [data-focus])",focusWithin:"&:is(:focus-within, [data-focus-within])",focusVisible:"&:is(:focus-visible, [data-focus-visible])",disabled:"&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])",visited:"&:visited",target:"&:target",readOnly:"&:is([data-readonly], [aria-readonly=true], [readonly])",readWrite:"&:read-write",empty:"&:is(:empty, [data-empty])",checked:"&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])",enabled:"&:enabled",expanded:"&:is([aria-expanded=true], [data-expanded], [data-state=expanded])",highlighted:"&[data-highlighted]",complete:"&[data-complete]",incomplete:"&[data-incomplete]",dragging:"&[data-dragging]",before:"&::before",after:"&::after",firstLetter:"&::first-letter",firstLine:"&::first-line",marker:"&::marker",selection:"&::selection",file:"&::file-selector-button",backdrop:"&::backdrop",first:"&:first-of-type",last:"&:last-of-type",notFirst:"&:not(:first-of-type)",notLast:"&:not(:last-of-type)",only:"&:only-child",even:"&:nth-of-type(even)",odd:"&:nth-of-type(odd)",peerFocus:".peer:is(:focus, [data-focus]) ~ &",peerHover:".peer:is(:hover, [data-hover]):not(:disabled, [data-disabled]) ~ &",peerActive:".peer:is(:active, [data-active]):not(:disabled, [data-disabled]) ~ &",peerFocusWithin:".peer:focus-within ~ &",peerFocusVisible:".peer:is(:focus-visible, [data-focus-visible]) ~ &",peerDisabled:".peer:is(:disabled, [disabled], [data-disabled]) ~ &",peerChecked:".peer:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) ~ &",peerInvalid:".peer:is(:invalid, [data-invalid], [aria-invalid=true]) ~ &",peerExpanded:".peer:is([aria-expanded=true], [data-expanded], [data-state=expanded]) ~ &",peerPlaceholderShown:".peer:placeholder-shown ~ &",groupFocus:".group:is(:focus, [data-focus]) &",groupHover:".group:is(:hover, [data-hover]):not(:disabled, [data-disabled]) &",groupActive:".group:is(:active, [data-active]):not(:disabled, [data-disabled]) &",groupFocusWithin:".group:focus-within &",groupFocusVisible:".group:is(:focus-visible, [data-focus-visible]) &",groupDisabled:".group:is(:disabled, [disabled], [data-disabled]) &",groupChecked:".group:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) &",groupExpanded:".group:is([aria-expanded=true], [data-expanded], [data-state=expanded]) &",groupInvalid:".group:invalid &",indeterminate:"&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])",required:"&:is([data-required], [aria-required=true])",valid:"&:is([data-valid], [data-state=valid])",invalid:"&:is([data-invalid], [aria-invalid=true], [data-state=invalid])",autofill:"&:autofill",inRange:"&:is(:in-range, [data-in-range])",outOfRange:"&:is(:out-of-range, [data-outside-range])",placeholder:"&::placeholder, &[data-placeholder]",placeholderShown:"&:is(:placeholder-shown, [data-placeholder-shown])",pressed:"&:is([aria-pressed=true], [data-pressed])",selected:"&:is([aria-selected=true], [data-selected])",grabbed:"&:is([aria-grabbed=true], [data-grabbed])",underValue:"&[data-state=under-value]",overValue:"&[data-state=over-value]",atValue:"&[data-state=at-value]",default:"&:default",optional:"&:optional",open:"&:is([open], [data-open], [data-state=open])",closed:"&:is([closed], [data-closed], [data-state=closed])",fullscreen:"&:is(:fullscreen, [data-fullscreen])",loading:"&:is([data-loading], [aria-busy=true])",hidden:"&:is([hidden], [data-hidden])",current:"&[data-current]",currentPage:"&[aria-current=page]",currentStep:"&[aria-current=step]",today:"&[data-today]",unavailable:"&[data-unavailable]",rangeStart:"&[data-range-start]",rangeEnd:"&[data-range-end]",now:"&[data-now]",topmost:"&[data-topmost]",motionReduce:"@media (prefers-reduced-motion: reduce)",motionSafe:"@media (prefers-reduced-motion: no-preference)",print:"@media print",landscape:"@media (orientation: landscape)",portrait:"@media (orientation: portrait)",dark:".dark &, .dark .chakra-theme:not(.light) &",light:":root &, .light &",osDark:"@media (prefers-color-scheme: dark)",osLight:"@media (prefers-color-scheme: light)",highContrast:"@media (forced-colors: active)",lessContrast:"@media (prefers-contrast: less)",moreContrast:"@media (prefers-contrast: more)",ltr:"[dir=ltr] &",rtl:"[dir=rtl] &",scrollbar:"&::-webkit-scrollbar",scrollbarThumb:"&::-webkit-scrollbar-thumb",scrollbarTrack:"&::-webkit-scrollbar-track",horizontal:"&[data-orientation=horizontal]",vertical:"&[data-orientation=vertical]",icon:"& :where(svg)",starting:"@starting-style"}),ro=Pv("bg-currentcolor"),h0=e=>e===ro.ref||e==="currentBg",Le=e=>({...e("colors"),currentBg:ro}),T4=Mv({conditions:O4,utilities:{background:{values:Le,shorthand:["bg"],transform(e,n){if(h0(n.raw))return{background:ro.ref};const i=Be("background")(e,n);return{...i,[ro.var]:i?.background}}},backgroundColor:{values:Le,shorthand:["bgColor"],transform(e,n){if(h0(n.raw))return{backgroundColor:ro.ref};const i=Be("backgroundColor")(e,n);return{...i,[ro.var]:i?.backgroundColor}}},backgroundSize:{shorthand:["bgSize"]},backgroundPosition:{shorthand:["bgPos"]},backgroundRepeat:{shorthand:["bgRepeat"]},backgroundAttachment:{shorthand:["bgAttachment"]},backgroundClip:{shorthand:["bgClip"],values:["text"],transform(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}}},backgroundGradient:{shorthand:["bgGradient"],values(e){return{...e("gradients"),"to-t":"linear-gradient(to top, var(--gradient))","to-tr":"linear-gradient(to top right, var(--gradient))","to-r":"linear-gradient(to right, var(--gradient))","to-br":"linear-gradient(to bottom right, var(--gradient))","to-b":"linear-gradient(to bottom, var(--gradient))","to-bl":"linear-gradient(to bottom left, var(--gradient))","to-l":"linear-gradient(to left, var(--gradient))","to-tl":"linear-gradient(to top left, var(--gradient))"}},transform(e){return{"--gradient-stops":"var(--gradient-from), var(--gradient-to)","--gradient":"var(--gradient-via-stops, var(--gradient-stops))",backgroundImage:e}}},gradientFrom:{values:Le,transform:Be("--gradient-from")},gradientTo:{values:Le,transform:Be("--gradient-to")},gradientVia:{values:Le,transform(e,n){return{...Be("--gradient-via")(e,n),"--gradient-via-stops":"var(--gradient-from), var(--gradient-via), var(--gradient-to)"}}},backgroundImage:{values(e){return{...e("gradients"),...e("assets")}},shorthand:["bgImg","bgImage"]},border:{values:"borders"},borderTop:{values:"borders"},borderLeft:{values:"borders"},borderBlockStart:{values:"borders"},borderRight:{values:"borders"},borderBottom:{values:"borders"},borderBlockEnd:{values:"borders"},borderInlineStart:{values:"borders",shorthand:["borderStart"]},borderInlineEnd:{values:"borders",shorthand:["borderEnd"]},borderInline:{values:"borders",shorthand:["borderX"]},borderBlock:{values:"borders",shorthand:["borderY"]},borderColor:{values:Le,transform:Be("borderColor")},borderTopColor:{values:Le,transform:Be("borderTopColor")},borderBlockStartColor:{values:Le,transform:Be("borderBlockStartColor")},borderBottomColor:{values:Le,transform:Be("borderBottomColor")},borderBlockEndColor:{values:Le,transform:Be("borderBlockEndColor")},borderLeftColor:{values:Le,transform:Be("borderLeftColor")},borderInlineStartColor:{values:Le,shorthand:["borderStartColor"],transform:Be("borderInlineStartColor")},borderRightColor:{values:Le,transform:Be("borderRightColor")},borderInlineEndColor:{values:Le,shorthand:["borderEndColor"],transform:Be("borderInlineEndColor")},borderStyle:{values:"borderStyles"},borderTopStyle:{values:"borderStyles"},borderBlockStartStyle:{values:"borderStyles"},borderBottomStyle:{values:"borderStyles"},borderBlockEndStyle:{values:"borderStyles"},borderInlineStartStyle:{values:"borderStyles",shorthand:["borderStartStyle"]},borderInlineEndStyle:{values:"borderStyles",shorthand:["borderEndStyle"]},borderLeftStyle:{values:"borderStyles"},borderRightStyle:{values:"borderStyles"},borderRadius:{values:"radii",shorthand:["rounded"]},borderTopLeftRadius:{values:"radii",shorthand:["roundedTopLeft"]},borderStartStartRadius:{values:"radii",shorthand:["roundedStartStart","borderTopStartRadius"]},borderEndStartRadius:{values:"radii",shorthand:["roundedEndStart","borderBottomStartRadius"]},borderTopRightRadius:{values:"radii",shorthand:["roundedTopRight"]},borderStartEndRadius:{values:"radii",shorthand:["roundedStartEnd","borderTopEndRadius"]},borderEndEndRadius:{values:"radii",shorthand:["roundedEndEnd","borderBottomEndRadius"]},borderBottomLeftRadius:{values:"radii",shorthand:["roundedBottomLeft"]},borderBottomRightRadius:{values:"radii",shorthand:["roundedBottomRight"]},borderInlineStartRadius:{values:"radii",property:"borderRadius",shorthand:["roundedStart","borderStartRadius"],transform:e=>({borderStartStartRadius:e,borderEndStartRadius:e})},borderInlineEndRadius:{values:"radii",property:"borderRadius",shorthand:["roundedEnd","borderEndRadius"],transform:e=>({borderStartEndRadius:e,borderEndEndRadius:e})},borderTopRadius:{values:"radii",property:"borderRadius",shorthand:["roundedTop"],transform:e=>({borderTopLeftRadius:e,borderTopRightRadius:e})},borderBottomRadius:{values:"radii",property:"borderRadius",shorthand:["roundedBottom"],transform:e=>({borderBottomLeftRadius:e,borderBottomRightRadius:e})},borderLeftRadius:{values:"radii",property:"borderRadius",shorthand:["roundedLeft"],transform:e=>({borderTopLeftRadius:e,borderBottomLeftRadius:e})},borderRightRadius:{values:"radii",property:"borderRadius",shorthand:["roundedRight"],transform:e=>({borderTopRightRadius:e,borderBottomRightRadius:e})},borderWidth:{values:"borderWidths"},borderBlockStartWidth:{values:"borderWidths"},borderTopWidth:{values:"borderWidths"},borderBottomWidth:{values:"borderWidths"},borderBlockEndWidth:{values:"borderWidths"},borderRightWidth:{values:"borderWidths"},borderInlineWidth:{values:"borderWidths",shorthand:["borderXWidth"]},borderInlineStartWidth:{values:"borderWidths",shorthand:["borderStartWidth"]},borderInlineEndWidth:{values:"borderWidths",shorthand:["borderEndWidth"]},borderLeftWidth:{values:"borderWidths"},borderBlockWidth:{values:"borderWidths",shorthand:["borderYWidth"]},color:{values:Le,transform:Be("color")},fill:{values:Le,transform:Be("fill")},stroke:{values:Le,transform:Be("stroke")},accentColor:{values:Le,transform:Be("accentColor")},divideX:{values:{type:"string"},transform(e){return{"& > :not(style, [hidden]) ~ :not(style, [hidden])":{borderInlineStartWidth:e,borderInlineEndWidth:"0px"}}}},divideY:{values:{type:"string"},transform(e){return{"& > :not(style, [hidden]) ~ :not(style, [hidden])":{borderTopWidth:e,borderBottomWidth:"0px"}}}},divideColor:{values:Le,transform(e,n){return{"& > :not(style, [hidden]) ~ :not(style, [hidden])":E4(e,n)}}},divideStyle:{property:"borderStyle",transform(e){return{"& > :not(style, [hidden]) ~ :not(style, [hidden])":{borderStyle:e}}}},boxShadow:{values:"shadows",shorthand:["shadow"]},boxShadowColor:{values:Le,transform:Be("--shadow-color"),shorthand:["shadowColor"]},mixBlendMode:{shorthand:["blendMode"]},backgroundBlendMode:{shorthand:["bgBlendMode"]},opacity:{values:"opacity"},filter:{transform(e){return e!=="auto"?{filter:e}:{filter:"var(--blur) var(--brightness) var(--contrast) var(--grayscale) var(--hue-rotate) var(--invert) var(--saturate) var(--sepia) var(--drop-shadow)"}}},blur:{values:"blurs",transform:e=>({"--blur":dt("blur",e)})},brightness:{transform:e=>({"--brightness":dt("brightness",e)})},contrast:{transform:e=>({"--contrast":dt("contrast",e)})},grayscale:{transform:e=>({"--grayscale":dt("grayscale",e)})},hueRotate:{transform:e=>({"--hue-rotate":dt("hue-rotate",ni(e))})},invert:{transform:e=>({"--invert":dt("invert",e)})},saturate:{transform:e=>({"--saturate":dt("saturate",e)})},sepia:{transform:e=>({"--sepia":dt("sepia",e)})},dropShadow:{transform:e=>({"--drop-shadow":dt("drop-shadow",e)})},backdropFilter:{transform(e){return e!=="auto"?{backdropFilter:e}:{backdropFilter:"var(--backdrop-blur) var(--backdrop-brightness) var(--backdrop-contrast) var(--backdrop-grayscale) var(--backdrop-hue-rotate) var(--backdrop-invert) var(--backdrop-opacity) var(--backdrop-saturate) var(--backdrop-sepia)"}}},backdropBlur:{values:"blurs",transform:e=>({"--backdrop-blur":dt("blur",e)})},backdropBrightness:{transform:e=>({"--backdrop-brightness":dt("brightness",e)})},backdropContrast:{transform:e=>({"--backdrop-contrast":dt("contrast",e)})},backdropGrayscale:{transform:e=>({"--backdrop-grayscale":dt("grayscale",e)})},backdropHueRotate:{transform:e=>({"--backdrop-hue-rotate":dt("hue-rotate",ni(e))})},backdropInvert:{transform:e=>({"--backdrop-invert":dt("invert",e)})},backdropOpacity:{transform:e=>({"--backdrop-opacity":dt("opacity",e)})},backdropSaturate:{transform:e=>({"--backdrop-saturate":dt("saturate",e)})},backdropSepia:{transform:e=>({"--backdrop-sepia":dt("sepia",e)})},flexBasis:{values:"sizes"},gap:{values:"spacing"},rowGap:{values:"spacing",shorthand:["gapY"]},columnGap:{values:"spacing",shorthand:["gapX"]},flexDirection:{shorthand:["flexDir"]},gridGap:{values:"spacing"},gridColumnGap:{values:"spacing"},gridRowGap:{values:"spacing"},outlineColor:{values:Le,transform:Be("outlineColor")},focusRing:m0("&:is(:focus, [data-focus])"),focusVisibleRing:m0("&:is(:focus-visible, [data-focus-visible])"),focusRingColor:{values:Le,transform:Be("--focus-ring-color")},focusRingOffset:{values:"spacing",transform:e=>({"--focus-ring-offset":e})},focusRingWidth:{values:"borderWidths",property:"outlineWidth",transform:e=>({"--focus-ring-width":e})},focusRingStyle:{values:"borderStyles",property:"outlineStyle",transform:e=>({"--focus-ring-style":e})},aspectRatio:{values:"aspectRatios"},width:{values:"sizes",shorthand:["w"]},inlineSize:{values:"sizes"},height:{values:"sizes",shorthand:["h"]},blockSize:{values:"sizes"},boxSize:{values:"sizes",property:"width",transform:e=>({width:e,height:e})},minWidth:{values:"sizes",shorthand:["minW"]},minInlineSize:{values:"sizes"},minHeight:{values:"sizes",shorthand:["minH"]},minBlockSize:{values:"sizes"},maxWidth:{values:"sizes",shorthand:["maxW"]},maxInlineSize:{values:"sizes"},maxHeight:{values:"sizes",shorthand:["maxH"]},maxBlockSize:{values:"sizes"},hideFrom:{values:"breakpoints",transform:(e,{raw:n,token:i})=>({[i.raw(`breakpoints.${n}`)?`@breakpoint ${n}`:`@media screen and (min-width: ${e})`]:{display:"none"}})},hideBelow:{values:"breakpoints",transform(e,{raw:n,token:i}){return{[i.raw(`breakpoints.${n}`)?`@breakpoint ${n}Down`:`@media screen and (max-width: ${e})`]:{display:"none"}}}},overscrollBehavior:{shorthand:["overscroll"]},overscrollBehaviorX:{shorthand:["overscrollX"]},overscrollBehaviorY:{shorthand:["overscrollY"]},scrollbar:{values:["visible","hidden"],transform(e){switch(e){case"visible":return{msOverflowStyle:"auto",scrollbarWidth:"auto","&::-webkit-scrollbar":{display:"block"}};case"hidden":return{msOverflowStyle:"none",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}};default:return{}}}},scrollbarColor:{values:Le,transform:Be("scrollbarColor")},scrollbarGutter:{values:"spacing"},scrollbarWidth:{values:"sizes"},scrollMargin:{values:"spacing"},scrollMarginTop:{values:"spacing"},scrollMarginBottom:{values:"spacing"},scrollMarginLeft:{values:"spacing"},scrollMarginRight:{values:"spacing"},scrollMarginX:{values:"spacing",transform:e=>({scrollMarginLeft:e,scrollMarginRight:e})},scrollMarginY:{values:"spacing",transform:e=>({scrollMarginTop:e,scrollMarginBottom:e})},scrollPadding:{values:"spacing"},scrollPaddingTop:{values:"spacing"},scrollPaddingBottom:{values:"spacing"},scrollPaddingLeft:{values:"spacing"},scrollPaddingRight:{values:"spacing"},scrollPaddingInline:{values:"spacing",shorthand:["scrollPaddingX"]},scrollPaddingBlock:{values:"spacing",shorthand:["scrollPaddingY"]},scrollSnapType:{values:{none:"none",x:"x var(--scroll-snap-strictness)",y:"y var(--scroll-snap-strictness)",both:"both var(--scroll-snap-strictness)"}},scrollSnapStrictness:{values:["mandatory","proximity"],transform:e=>({"--scroll-snap-strictness":e})},scrollSnapMargin:{values:"spacing"},scrollSnapMarginTop:{values:"spacing"},scrollSnapMarginBottom:{values:"spacing"},scrollSnapMarginLeft:{values:"spacing"},scrollSnapMarginRight:{values:"spacing"},listStylePosition:{shorthand:["listStylePos"]},listStyleImage:{values:"assets",shorthand:["listStyleImg"]},position:{shorthand:["pos"]},zIndex:{values:"zIndex"},inset:{values:"spacing"},insetInline:{values:"spacing",shorthand:["insetX"]},insetBlock:{values:"spacing",shorthand:["insetY"]},top:{values:"spacing"},insetBlockStart:{values:"spacing"},bottom:{values:"spacing"},insetBlockEnd:{values:"spacing"},left:{values:"spacing"},right:{values:"spacing"},insetInlineStart:{values:"spacing",shorthand:["insetStart"]},insetInlineEnd:{values:"spacing",shorthand:["insetEnd"]},ring:{transform(e){return{"--ring-offset-shadow":"var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color)","--ring-shadow":"var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color)","--ring-width":e,boxShadow:"var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)"}}},ringColor:{values:Le,transform:Be("--ring-color")},ringOffset:{transform:e=>({"--ring-offset-width":e})},ringOffsetColor:{values:Le,transform:Be("--ring-offset-color")},ringInset:{transform:e=>({"--ring-inset":e})},margin:{values:"spacing",shorthand:["m"]},marginTop:{values:"spacing",shorthand:["mt"]},marginBlockStart:{values:"spacing"},marginRight:{values:"spacing",shorthand:["mr"]},marginBottom:{values:"spacing",shorthand:["mb"]},marginBlockEnd:{values:"spacing"},marginLeft:{values:"spacing",shorthand:["ml"]},marginInlineStart:{values:"spacing",shorthand:["ms","marginStart"]},marginInlineEnd:{values:"spacing",shorthand:["me","marginEnd"]},marginInline:{values:"spacing",shorthand:["mx","marginX"]},marginBlock:{values:"spacing",shorthand:["my","marginY"]},padding:{values:"spacing",shorthand:["p"]},paddingTop:{values:"spacing",shorthand:["pt"]},paddingRight:{values:"spacing",shorthand:["pr"]},paddingBottom:{values:"spacing",shorthand:["pb"]},paddingBlockStart:{values:"spacing"},paddingBlockEnd:{values:"spacing"},paddingLeft:{values:"spacing",shorthand:["pl"]},paddingInlineStart:{values:"spacing",shorthand:["ps","paddingStart"]},paddingInlineEnd:{values:"spacing",shorthand:["pe","paddingEnd"]},paddingInline:{values:"spacing",shorthand:["px","paddingX"]},paddingBlock:{values:"spacing",shorthand:["py","paddingY"]},textDecoration:{shorthand:["textDecor"]},textDecorationColor:{values:Le,transform:Be("textDecorationColor")},textShadow:{values:"shadows"},transform:{transform:e=>{let n=e;return e==="auto"&&(n="translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0)) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))"),e==="auto-gpu"&&(n="translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))"),{transform:n}}},skewX:{transform:e=>({"--skew-x":ni(e)})},skewY:{transform:e=>({"--skew-y":ni(e)})},scaleX:{transform:e=>({"--scale-x":e})},scaleY:{transform:e=>({"--scale-y":e})},scale:{transform(e){return e!=="auto"?{scale:e}:{scale:"var(--scale-x, 1) var(--scale-y, 1)"}}},spaceXReverse:{values:{type:"boolean"},transform(e){return{"& > :not(style, [hidden]) ~ :not(style, [hidden])":{"--space-x-reverse":e?"1":void 0}}}},spaceX:{property:"marginInlineStart",values:"spacing",transform:e=>({"& > :not(style, [hidden]) ~ :not(style, [hidden])":{"--space-x-reverse":"0",marginInlineStart:`calc(${e} * calc(1 - var(--space-x-reverse)))`,marginInlineEnd:`calc(${e} * var(--space-x-reverse))`}})},spaceYReverse:{values:{type:"boolean"},transform(e){return{"& > :not(style, [hidden]) ~ :not(style, [hidden])":{"--space-y-reverse":e?"1":void 0}}}},spaceY:{property:"marginTop",values:"spacing",transform:e=>({"& > :not(style, [hidden]) ~ :not(style, [hidden])":{"--space-y-reverse":"0",marginTop:`calc(${e} * calc(1 - var(--space-y-reverse)))`,marginBottom:`calc(${e} * var(--space-y-reverse))`}})},rotate:{transform(e){return e!=="auto"?{rotate:ni(e)}:{rotate:"var(--rotate-x, 0) var(--rotate-y, 0) var(--rotate-z, 0)"}}},rotateX:{transform(e){return{"--rotate-x":ni(e)}}},rotateY:{transform(e){return{"--rotate-y":ni(e)}}},translate:{transform(e){return e!=="auto"?{translate:e}:{translate:"var(--translate-x) var(--translate-y)"}}},translateX:{values:"spacing",transform:e=>({"--translate-x":e})},translateY:{values:"spacing",transform:e=>({"--translate-y":e})},transition:{values:["all","common","colors","opacity","position","backgrounds","size","shadow","transform"],transform(e){switch(e){case"all":return Ya("all");case"position":return Ya("left, right, top, bottom, inset-inline, inset-block");case"colors":return Ya("color, background-color, border-color, text-decoration-color, fill, stroke");case"opacity":return Ya("opacity");case"shadow":return Ya("box-shadow");case"transform":return Ya("transform");case"size":return Ya("width, height");case"backgrounds":return Ya("background, background-color, background-image, background-position");case"common":return Ya("color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter");default:return{transition:e}}}},transitionDuration:{values:"durations"},transitionProperty:{values:{common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, translate, transform",colors:"background-color, border-color, color, fill, stroke",size:"width, height",position:"left, right, top, bottom, inset-inline, inset-block",background:"background, background-color, background-image, background-position"}},transitionTimingFunction:{values:"easings"},animation:{values:"animations"},animationDuration:{values:"durations"},animationDelay:{values:"durations"},animationTimingFunction:{values:"easings"},fontFamily:{values:"fonts"},fontSize:{values:"fontSizes"},fontWeight:{values:"fontWeights"},lineHeight:{values:"lineHeights"},letterSpacing:{values:"letterSpacings"},textIndent:{values:"spacing"},truncate:{values:{type:"boolean"},transform(e){return e===!0?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:{}}},lineClamp:{transform(e){return e==="none"?{WebkitLineClamp:"unset"}:{overflow:"hidden",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical",textWrap:"wrap"}}},borderSpacing:{values:e=>({...e("spacing"),auto:"var(--border-spacing-x, 0) var(--border-spacing-y, 0)"})},borderSpacingX:{values:"spacing",transform(e){return{"--border-spacing-x":e}}},borderSpacingY:{values:"spacing",transform(e){return{"--border-spacing-y":e}}},srOnly:{values:{type:"boolean"},transform(e){return k4[e]||{}}},debug:{values:{type:"boolean"},transform(e){return e?{outline:"1px solid blue !important","& > *":{outline:"1px solid red !important"}}:{}}},caretColor:{values:Le,transform:Be("caretColor")},cursor:{values:"cursor"}}}),k4={true:{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},false:{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto",whiteSpace:"normal"}};var A4="",R4=A4.split(","),_4="WebkitAppearance,WebkitBorderBefore,WebkitBorderBeforeColor,WebkitBorderBeforeStyle,WebkitBorderBeforeWidth,WebkitBoxReflect,WebkitLineClamp,WebkitMask,WebkitMaskAttachment,WebkitMaskClip,WebkitMaskComposite,WebkitMaskImage,WebkitMaskOrigin,WebkitMaskPosition,WebkitMaskPositionX,WebkitMaskPositionY,WebkitMaskRepeat,WebkitMaskRepeatX,WebkitMaskRepeatY,WebkitMaskSize,WebkitOverflowScrolling,WebkitTapHighlightColor,WebkitTextFillColor,WebkitTextStroke,WebkitTextStrokeColor,WebkitTextStrokeWidth,WebkitTouchCallout,WebkitUserModify,WebkitUserSelect,accentColor,alignContent,alignItems,alignSelf,alignTracks,all,anchorName,anchorScope,animation,animationComposition,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationRange,animationRangeEnd,animationRangeStart,animationTimeline,animationTimingFunction,appearance,aspectRatio,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundSize,blockSize,border,borderBlock,borderBlockColor,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBlockStyle,borderBlockWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderEndEndRadius,borderEndStartRadius,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInline,borderInlineColor,borderInlineEnd,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderInlineStyle,borderInlineWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStartEndRadius,borderStartStartRadius,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxAlign,boxDecorationBreak,boxDirection,boxFlex,boxFlexGroup,boxLines,boxOrdinalGroup,boxOrient,boxPack,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,captionSide,caret,caretColor,caretShape,clear,clip,clipPath,clipRule,color,colorInterpolationFilters,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicBlockSize,containIntrinsicHeight,containIntrinsicInlineSize,containIntrinsicSize,containIntrinsicWidth,container,containerName,containerType,content,contentVisibility,counterIncrement,counterReset,counterSet,cursor,cx,cy,d,direction,display,dominantBaseline,emptyCells,fieldSizing,fill,fillOpacity,fillRule,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,floodColor,floodOpacity,font,fontFamily,fontFeatureSettings,fontKerning,fontLanguageOverride,fontOpticalSizing,fontPalette,fontSize,fontSizeAdjust,fontSmooth,fontStretch,fontStyle,fontSynthesis,fontSynthesisPosition,fontSynthesisSmallCaps,fontSynthesisStyle,fontSynthesisWeight,fontVariant,fontVariantAlternates,fontVariantCaps,fontVariantEastAsian,fontVariantEmoji,fontVariantLigatures,fontVariantNumeric,fontVariantPosition,fontVariationSettings,fontWeight,forcedColorAdjust,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,hangingPunctuation,height,hyphenateCharacter,hyphenateLimitChars,hyphens,imageOrientation,imageRendering,imageResolution,imeMode,initialLetter,initialLetterAlign,inlineSize,inset,insetBlock,insetBlockEnd,insetBlockStart,insetInline,insetInlineEnd,insetInlineStart,interpolateSize,isolation,justifyContent,justifyItems,justifySelf,justifyTracks,left,letterSpacing,lightingColor,lineBreak,lineClamp,lineHeight,lineHeightStep,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlock,marginBlockEnd,marginBlockStart,marginBottom,marginInline,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marginTrim,marker,markerEnd,markerMid,markerStart,mask,maskBorder,maskBorderMode,maskBorderOutset,maskBorderRepeat,maskBorderSlice,maskBorderSource,maskBorderWidth,maskClip,maskComposite,maskImage,maskMode,maskOrigin,maskPosition,maskRepeat,maskSize,maskType,masonryAutoFlow,mathDepth,mathShift,mathStyle,maxBlockSize,maxHeight,maxInlineSize,maxLines,maxWidth,minBlockSize,minHeight,minInlineSize,minWidth,mixBlendMode,objectFit,objectPosition,offset,offsetAnchor,offsetDistance,offsetPath,offsetPosition,offsetRotate,opacity,order,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowBlock,overflowClipBox,overflowClipMargin,overflowInline,overflowWrap,overflowX,overflowY,overlay,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInline,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,page,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,positionAnchor,positionArea,positionTry,positionTryFallbacks,positionTryOrder,positionVisibility,printColorAdjust,quotes,r,resize,right,rotate,rowGap,rubyAlign,rubyMerge,rubyPosition,rx,ry,scale,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginBottom,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockEnd,scrollPaddingBlockStart,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapCoordinate,scrollSnapDestination,scrollSnapPointsX,scrollSnapPointsY,scrollSnapStop,scrollSnapType,scrollSnapTypeX,scrollSnapTypeY,scrollTimeline,scrollTimelineAxis,scrollTimelineName,scrollbarColor,scrollbarGutter,scrollbarWidth,shapeImageThreshold,shapeMargin,shapeOutside,shapeRendering,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,tabSize,tableLayout,textAlign,textAlignLast,textAnchor,textBox,textBoxEdge,textBoxTrim,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkip,textDecorationSkipInk,textDecorationStyle,textDecorationThickness,textEmphasis,textEmphasisColor,textEmphasisPosition,textEmphasisStyle,textIndent,textJustify,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textSpacingTrim,textTransform,textUnderlineOffset,textUnderlinePosition,textWrap,textWrapMode,textWrapStyle,timelineScope,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionBehavior,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,translate,unicodeBidi,userSelect,vectorEffect,verticalAlign,viewTimeline,viewTimelineAxis,viewTimelineInset,viewTimelineName,viewTransitionName,visibility,whiteSpace,whiteSpaceCollapse,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,x,y,zIndex,zoom,alignmentBaseline,baselineShift,colorInterpolation,colorRendering,glyphOrientationVertical",N4=_4.split(",").concat(R4),z4=new Map(N4.map(e=>[e,!0]));function I4(e){const n=Object.create(null);return i=>(n[i]===void 0&&(n[i]=e(i)),n[i])}var V4=/&|@/,q4=I4(e=>z4.has(e)||e.startsWith("--")||V4.test(e));function Lv(e,n){const i={};return Na(e,(l,s)=>{l&&(i[s.join(".")]=l.value)},{stop:n}),i}var Ud,p0;function F4(){if(p0)return Ud;p0=1,Ud=c,c.default=c,c.stable=p,c.stableStringify=p;var e="[...]",n="[Circular]",i=[],l=[];function s(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function c(v,C,E,O){typeof O>"u"&&(O=s()),g(v,"",0,[],void 0,0,O);var _;try{l.length===0?_=JSON.stringify(v,C,E):_=JSON.stringify(v,x(C),E)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;i.length!==0;){var F=i.pop();F.length===4?Object.defineProperty(F[0],F[1],F[3]):F[0][F[1]]=F[2]}}return _}function f(v,C,E,O){var _=Object.getOwnPropertyDescriptor(O,E);_.get!==void 0?_.configurable?(Object.defineProperty(O,E,{value:v}),i.push([O,E,C,_])):l.push([C,E,v]):(O[E]=v,i.push([O,E,C]))}function g(v,C,E,O,_,F,I){F+=1;var N;if(typeof v=="object"&&v!==null){for(N=0;N<O.length;N++)if(O[N]===v){f(n,v,C,_);return}if(typeof I.depthLimit<"u"&&F>I.depthLimit){f(e,v,C,_);return}if(typeof I.edgesLimit<"u"&&E+1>I.edgesLimit){f(e,v,C,_);return}if(O.push(v),Array.isArray(v))for(N=0;N<v.length;N++)g(v[N],N,N,O,v,F,I);else{var P=Object.keys(v);for(N=0;N<P.length;N++){var A=P[N];g(v[A],A,N,O,v,F,I)}}O.pop()}}function h(v,C){return v<C?-1:v>C?1:0}function p(v,C,E,O){typeof O>"u"&&(O=s());var _=y(v,"",0,[],void 0,0,O)||v,F;try{l.length===0?F=JSON.stringify(_,C,E):F=JSON.stringify(_,x(C),E)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;i.length!==0;){var I=i.pop();I.length===4?Object.defineProperty(I[0],I[1],I[3]):I[0][I[1]]=I[2]}}return F}function y(v,C,E,O,_,F,I){F+=1;var N;if(typeof v=="object"&&v!==null){for(N=0;N<O.length;N++)if(O[N]===v){f(n,v,C,_);return}try{if(typeof v.toJSON=="function")return}catch{return}if(typeof I.depthLimit<"u"&&F>I.depthLimit){f(e,v,C,_);return}if(typeof I.edgesLimit<"u"&&E+1>I.edgesLimit){f(e,v,C,_);return}if(O.push(v),Array.isArray(v))for(N=0;N<v.length;N++)y(v[N],N,N,O,v,F,I);else{var P={},A=Object.keys(v).sort(h);for(N=0;N<A.length;N++){var $=A[N];y(v[$],$,N,O,v,F,I),P[$]=v[$]}if(typeof _<"u")i.push([_,C,v]),_[C]=P;else return P}O.pop()}}function x(v){return v=typeof v<"u"?v:function(C,E){return E},function(C,E){if(l.length>0)for(var O=0;O<l.length;O++){var _=l[O];if(_[1]===C&&_[0]===E){E=_[2],l.splice(O,1);break}}return v.call(this,C,E)}}return Ud}var D4=F4();const M4=B0(D4),ga=e=>{const n=Object.create(null);function i(...l){const s=l.map(c=>M4(c)).join("|");return n[s]===void 0&&(n[s]=e(...l)),n[s]}return i},Bv=16,Bs="px",Qf="em",Vl="rem";function jv(e=""){const n=new RegExp(String.raw`-?\d+(?:\.\d+|\d*)`),i=new RegExp(`${Bs}|${Qf}|${Vl}`);return e.match(new RegExp(`${n.source}(${i.source})`))?.[1]}function Hv(e=""){if(typeof e=="number")return`${e}px`;const n=jv(e);if(!n||n===Bs)return e;if(n===Qf||n===Vl)return`${parseFloat(e)*Bv}${Bs}`}function Uv(e=""){const n=jv(e);if(!n||n===Vl)return e;if(n===Qf)return`${parseFloat(e)}${Vl}`;if(n===Bs)return`${parseFloat(e)/Bv}${Vl}`}const P4=e=>e.charAt(0).toUpperCase()+e.slice(1);function L4(e){const n=B4(e),i=Object.fromEntries(n);function l(v){return i[v]}function s(v){return to(l(v))}function c(){const v=Object.keys(i),C=j4(v),E=v.flatMap(O=>{const _=l(O),F=[`${O}Down`,to({max:Rs(_.min)})],I=[O,to({min:_.min})],N=[`${O}Only`,s(O)];return[I,N,F]}).filter(([,O])=>O!=="").concat(C.map(([O,_])=>{const F=l(O),I=l(_);return[`${O}To${P4(_)}`,to({min:F.min,max:Rs(I.min)})]}));return Object.fromEntries(E)}function f(){const v=c();return Object.fromEntries(Object.entries(v))}const g=f(),h=v=>g[v];function p(){return["base",...Object.keys(i)]}function y(v){return to({min:l(v).min})}function x(v){return to({max:Rs(l(v).min)})}return{values:Object.values(i),only:s,keys:p,conditions:g,getCondition:h,up:y,down:x}}function Rs(e){const n=parseFloat(Hv(e)??"")-.04;return Uv(`${n}px`)}function B4(e){return Object.entries(e).sort(([,i],[,l])=>parseInt(i,10)<parseInt(l,10)?-1:1).map(([i,l],s,c)=>{let f=null;return s<=c.length-1&&(f=c[s+1]?.[1]),f!=null&&(f=Rs(f)),[i,{name:i,min:Uv(l),max:f}]})}function j4(e){const n=[];return e.forEach((i,l)=>{let s=l;s++;let c=e[s];for(;c;)n.push([i,c]),s++,c=e[s]}),n}function to({min:e,max:n}){return e==null&&n==null?"":["@media screen",e&&`(min-width: ${e})`,n&&`(max-width: ${n})`].filter(Boolean).join(" and ")}const H4=(e,n)=>Object.fromEntries(Object.entries(e).map(([i,l])=>n(i,l))),U4=e=>{const{breakpoints:n,conditions:i={}}=e,l=H4(i,(y,x)=>[`_${y}`,x]),s=Object.assign({},l,n.conditions);function c(){return Object.keys(s)}function f(y){return c().includes(y)||/^@|&|&$/.test(y)||y.startsWith("_")}function g(y){return y.filter(x=>x!=="base").sort((x,v)=>{const C=f(x),E=f(v);return C&&!E?1:!C&&E?-1:0})}function h(y){return y.startsWith("@breakpoint")?n.getCondition(y.replace("@breakpoint ","")):y}function p(y){return Reflect.get(s,y)||y}return{keys:c,sort:g,has:f,resolve:p,breakpoints:n.keys(),expandAtRule:h}},Gv=e=>({minMax:new RegExp(`(!?\\(\\s*min(-device-)?-${e})(.|
)+\\(\\s*max(-device)?-${e}`,"i"),min:new RegExp(`\\(\\s*min(-device)?-${e}`,"i"),maxMin:new RegExp(`(!?\\(\\s*max(-device)?-${e})(.|
)+\\(\\s*min(-device)?-${e}`,"i"),max:new RegExp(`\\(\\s*max(-device)?-${e}`,"i")}),G4=Gv("width"),W4=Gv("height"),Wv=e=>({isMin:w0(e.minMax,e.maxMin,e.min),isMax:w0(e.maxMin,e.minMax,e.max)}),{isMin:cf,isMax:b0}=Wv(G4),{isMin:df,isMax:y0}=Wv(W4),v0=/print/i,x0=/^print$/i,$4=/(-?\d*\.?\d+)(ch|em|ex|px|rem)/,Y4=/(\d)/,Nl=Number.MAX_VALUE,K4={ch:8.8984375,em:16,rem:16,ex:8.296875,px:1};function S0(e){const n=$4.exec(e)||(cf(e)||df(e)?Y4.exec(e):null);if(!n)return Nl;if(n[0]==="0")return 0;const i=parseFloat(n[1]),l=n[2];return i*(K4[l]||1)}function w0(e,n,i){return l=>e.test(l)||!n.test(l)&&i.test(l)}function X4(e,n){const i=v0.test(e),l=x0.test(e),s=v0.test(n),c=x0.test(n);return i&&s?!l&&c?1:l&&!c?-1:e.localeCompare(n):i?1:s?-1:null}const Z4=ga((e,n)=>{const i=X4(e,n);if(i!==null)return i;const l=cf(e)||df(e),s=b0(e)||y0(e),c=cf(n)||df(n),f=b0(n)||y0(n);if(l&&f)return-1;if(s&&c)return 1;const g=S0(e),h=S0(n);return g===Nl&&h===Nl?e.localeCompare(n):g===Nl?1:h===Nl?-1:g!==h?g>h?s?-1:1:s?1:-1:e.localeCompare(n)});function C0(e){return e.sort(([n],[i])=>Z4(n,i))}function $v(e){const n=[],i=[],l={};for(const[f,g]of Object.entries(e))f.startsWith("@media")?n.push([f,g]):f.startsWith("@container")?i.push([f,g]):zt(g)?l[f]=$v(g):l[f]=g;const s=C0(n),c=C0(i);return{...l,...Object.fromEntries(s),...Object.fromEntries(c)}}const Yv=/\s*!(important)?/i,Q4=e=>Ra(e)?Yv.test(e):!1,J4=e=>Ra(e)?e.replace(Yv,"").trim():e;function Kv(e){const{transform:n,conditions:i,normalize:l}=e,s=a8(e);return ga(function(...f){const g=s(...f),h=l(g),p=Object.create(null);return Na(h,(y,x)=>{const v=Q4(y);if(y==null)return;const[C,...E]=i.sort(x).map(i.resolve);v&&(y=J4(y));let O=n(C,y)??Object.create(null);O=Na(O,_=>Ra(_)&&v?`${_} !important`:_,{getKey:_=>i.expandAtRule(_)}),e8(p,E.flat(),O)}),$v(p)})}function e8(e,n,i){let l=e;for(const s of n)s&&(l[s]||(l[s]=Object.create(null)),l=l[s]);vo(l,i)}function t8(...e){return e.filter(n=>zt(n)&&Object.keys(Hl(n)).length>0)}function a8(e){function n(i){const l=t8(...i);return l.length===1?l:l.map(s=>e.normalize(s))}return ga(function(...l){return vo({},...n(l))})}const Xv=e=>({base:{},variants:{},defaultVariants:{},compoundVariants:[],...e});function n8(e){const{css:n,conditions:i,normalize:l,layers:s}=e;function c(g={}){const{base:h,variants:p,defaultVariants:y,compoundVariants:x}=Xv(g),v=Kv({conditions:i,normalize:l,transform(I,N){return p[I]?.[N]}}),C=(I={})=>{const N=l({...y,...Hl(I)});let P={...h};vo(P,v(N));const A=f(x,N);return s.wrap("recipes",n(P,A))},E=Object.keys(p),O=I=>{const N=qv(I,["recipe"]),[P,A]=co(N,E);return E.includes("colorPalette")||(P.colorPalette=I.colorPalette||y.colorPalette),E.includes("orientation")&&(A.orientation=I.orientation),[P,A]},_=Object.fromEntries(Object.entries(p).map(([I,N])=>[I,Object.keys(N)]));return Object.assign(I=>n(C(I)),{className:g.className,__cva__:!0,variantMap:_,variantKeys:E,raw:C,config:g,splitVariantProps:O,merge(I){return c(i8(e)(this,I))}})}function f(g,h){let p={};return g.forEach(y=>{Object.entries(y).every(([v,C])=>v==="css"?!0:(Array.isArray(C)?C:[C]).some(O=>h[v]===O))&&(p=n(p,y.css))}),p}return c}function i8(e){const{css:n}=e;return function(l,s){const c=Xv(s.config),f=ty(l.variantKeys,Object.keys(s.variants)),g=n(l.base,c.base),h=Object.fromEntries(f.map(v=>[v,n(l.config.variants[v],c.variants[v])])),p=vo(l.config.defaultVariants,c.defaultVariants),y=[...l.compoundVariants,...c.compoundVariants];return{className:uo(l.className,s.className),base:g,variants:h,defaultVariants:p,compoundVariants:y}}}const o8={reset:"reset",base:"base",tokens:"tokens",recipes:"recipes"},E0={reset:0,base:1,tokens:2,recipes:3};function l8(e){const n=e.layers??o8,l=Object.values(n).sort((s,c)=>E0[s]-E0[c]);return{names:l,atRule:`@layer ${l.join(", ")};`,wrap(s,c){return e.disableLayers?c:{[`@layer ${n[s]}`]:c}}}}function r8(e){const{utility:n,normalize:i}=e,{hasShorthand:l,resolveShorthand:s}=n;return function(c){return Na(c,i,{stop:f=>Array.isArray(f),getKey:l?s:void 0})}}function s8(e){const{preflight:n}=e;if(!n)return{};const{scope:i="",level:l="parent"}=zt(n)?n:{};let s="";i&&l==="parent"?s=`${i} `:i&&l==="element"&&(s=`&${i}`);const c={"*":{margin:"0px",padding:"0px",font:"inherit",wordWrap:"break-word",WebkitTapHighlightColor:"transparent"},"*, *::before, *::after, *::backdrop":{boxSizing:"border-box",borderWidth:"0px",borderStyle:"solid",borderColor:"var(--global-color-border, currentColor)"},hr:{height:"0px",color:"inherit",borderTopWidth:"1px"},body:{minHeight:"100dvh",position:"relative"},img:{borderStyle:"none"},"img, svg, video, canvas, audio, iframe, embed, object":{display:"block",verticalAlign:"middle"},iframe:{border:"none"},"img, video":{maxWidth:"100%",height:"auto"},"p, h1, h2, h3, h4, h5, h6":{overflowWrap:"break-word"},"ol, ul":{listStyle:"none"},"code, kbd, pre, samp":{fontSize:"1em"},"button, [type='button'], [type='reset'], [type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},"button, input, optgroup, select, textarea":{color:"inherit"},"button, select":{textTransform:"none"},table:{textIndent:"0px",borderColor:"inherit",borderCollapse:"collapse"},"*::placeholder":{opacity:"unset",color:"#9ca3af",userSelect:"none"},textarea:{resize:"vertical"},summary:{display:"list-item"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},dialog:{padding:"0px"},a:{color:"inherit",textDecoration:"inherit"},"abbr:where([title])":{textDecoration:"underline dotted"},"b, strong":{fontWeight:"bolder"},"code, kbd, samp, pre":{fontSize:"1em","--font-mono-fallback":"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'",fontFamily:"var(--global-font-mono, var(--font-mono-fallback))"},'input[type="text"], input[type="email"], input[type="search"], input[type="password"]':{WebkitAppearance:"none",MozAppearance:"none"},"input[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration, ::-webkit-search-cancel-button":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button':{height:"auto"},"input[type='number']":{MozAppearance:"textfield"},":-moz-ui-invalid":{boxShadow:"none"},":-moz-focusring":{outline:"auto"},"[hidden]:where(:not([hidden='until-found']))":{display:"none !important"}},f={[i||"html"]:{lineHeight:1.5,"--font-fallback":"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",WebkitTextSizeAdjust:"100%",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",textRendering:"optimizeLegibility",touchAction:"manipulation",MozTabSize:"4",tabSize:"4",fontFamily:"var(--global-font-body, var(--font-fallback))"}};if(l==="element"){const g=Object.entries(c).reduce((h,[p,y])=>(h[p]={[s]:y},h),{});Object.assign(f,g)}else s?f[s]=c:Object.assign(f,c);return f}function u8(e){const{conditions:n,isValidProperty:i}=e;return function(s){return Na(s,c=>c,{getKey:(c,f)=>zt(f)&&!n.has(c)&&!i(c)?c8(c).map(g=>"&"+g).join(", "):c})}}function c8(e){const n=[];let i=0,l="",s=!1;for(let c=0;c<e.length;c++){const f=e[c];if(f==="\\"&&!s){s=!0,l+=f;continue}if(s){s=!1,l+=f;continue}f==="("?i++:f===")"&&i--,f===","&&i===0?(n.push(l.trim()),l=""):l+=f}return l&&n.push(l.trim()),n}const d8=(e={})=>{const n=s=>({base:e.base?.[s]??{},variants:{},defaultVariants:e.defaultVariants??{},compoundVariants:e.compoundVariants?f8(e.compoundVariants,s):[]}),l=(e.slots??[]).map(s=>[s,n(s)]);for(const[s,c]of Object.entries(e.variants??{}))for(const[f,g]of Object.entries(c))l.forEach(([h,p])=>{var y;(y=p.variants)[s]??(y[s]={}),p.variants[s][f]=g[h]??{}});return Object.fromEntries(l)},f8=(e,n)=>e.filter(i=>i.css[n]).map(i=>({...i,css:i.css[n]}));function g8(e){const{cva:n}=e;return function(l={}){const s=Object.entries(d8(l)).map(([x,v])=>[x,n(v)]);function c(x){const v=s.map(([C,E])=>[C,E(x)]);return Object.fromEntries(v)}const f=l.variants??{},g=Object.keys(f);function h(x){const v=qv(x,["recipe"]),[C,E]=co(v,g);return g.includes("colorPalette")||(C.colorPalette=x.colorPalette||l.defaultVariants?.colorPalette),g.includes("orientation")&&(E.orientation=x.orientation),[C,E]}const p=Object.fromEntries(Object.entries(f).map(([x,v])=>[x,Object.keys(v)]));let y={};return l.className&&(y=Object.fromEntries(l.slots.map(x=>[x,`${l.className}__${x}`]))),Object.assign(c,{variantMap:p,variantKeys:g,splitVariantProps:h,classNameMap:y})}}const m8=()=>e=>Array.from(new Set(e)),h8=/([\0-\x1f\x7f]|^-?\d)|^-$|^-|[^\x80-\uFFFF\w-]/g,p8=function(e,n){return n?e==="\0"?"�":e==="-"&&e.length===1?"\\-":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16):"\\"+e},Zv=e=>(e+"").replace(h8,p8),Qv=(e,n)=>{let i="",l=0,s="char",c="",f="";const g=[];for(;l<e.length;){const h=e[l];if(h==="{"){const y=e.indexOf("}",l);if(y===-1)break;const x=e.slice(l+1,y),v=n(x);i+=v??x,l=y+1;continue}if(s==="token"&&h===","){e[l]===""&&l++,s="fallback",g.push(s);const y=n(c);y?.endsWith(")")&&(i+=y.slice(0,-1)),c="",f="";continue}if(s==="fallback"&&f+h===", var("){const v=b8(e.slice(l+1))+l+1,C=e.slice(l+1,v);if(v===-1)break;i+=", var("+C+")",l=v+1,s=g.pop()??s,f="";continue}if(s==="token"||s==="fallback"){if(l++,h===")"){s=g.pop()??s??"char",f+=h;const y=c&&(n(c)??Zv(c));if(f){if(f=f.slice(1).trim(),!f.startsWith("token(")&&f.endsWith(")")&&(f=f.slice(0,-1)),f.includes("token(")){const v=Qv(f,n);v&&(f=v.slice(0,-1))}else if(f){const v=n(f);v&&(f=v)}}const x=i.at(-1);f?x?.trim()?i+=y.slice(0,-1)+(", "+f+")"):i+=f:i+=y||")",c="",f="",s="char";continue}s==="token"&&(c+=h),s==="fallback"&&(f+=h);continue}const p=e.indexOf("token(",l);if(p!==-1){const y=p+6;i+=e.slice(l,p),l=y,s="token",g.push(s);continue}i+=h,l++}return i},b8=e=>{let n=0;const i=["("];for(;n<e.length;){const l=e[n];if(l==="(")i.push(l);else if(l===")"&&(i.pop(),i.length===0))return n;n++}return n};function Jv(e){const n={};return e.forEach((i,l)=>{i instanceof Map?n[l]=Object.fromEntries(i):n[l]=i}),n}const e1=/({([^}]*)})/g,y8=/[{}]/g,v8=/\w+\.\w+/,t1=e=>{if(!Ra(e))return[];const n=e.match(e1);return n?n.map(i=>i.replace(y8,"")).map(i=>i.trim()):[]},x8=e=>e1.test(e);function a1(e){if(!e.extensions?.references)return e.extensions?.cssVar?.ref??e.value;const n=e.extensions.references??{};return e.value=Object.keys(n).reduce((i,l)=>{const s=n[l];if(s.extensions.conditions)return i;const c=a1(s);return i.replace(`{${l}}`,c)},e.value),delete e.extensions.references,e.value}function n1(e){return zt(e)&&e.reference?e.reference:String(e)}const ou=(e,...n)=>n.map(n1).join(` ${e} `).replace(/calc/g,""),O0=(...e)=>`calc(${ou("+",...e)})`,T0=(...e)=>`calc(${ou("-",...e)})`,ff=(...e)=>`calc(${ou("*",...e)})`,k0=(...e)=>`calc(${ou("/",...e)})`,A0=e=>{const n=n1(e);return n!=null&&!Number.isNaN(parseFloat(n))?String(n).startsWith("-")?String(n).slice(1):`-${n}`:ff(n,-1)},io=Object.assign(e=>({add:(...n)=>io(O0(e,...n)),subtract:(...n)=>io(T0(e,...n)),multiply:(...n)=>io(ff(e,...n)),divide:(...n)=>io(k0(e,...n)),negate:()=>io(A0(e)),toString:()=>e.toString()}),{add:O0,subtract:T0,multiply:ff,divide:k0,negate:A0}),S8={enforce:"pre",transform(e){const{prefix:n,allTokens:i,formatCssVar:l,formatTokenName:s,registerToken:c}=e;i.filter(({extensions:g})=>g.category==="spacing").forEach(g=>{const h=g.path.slice(),p=l(h,n);if(Ra(g.value)&&g.value==="0rem")return;const y=structuredClone(g);Object.assign(y.extensions,{negative:!0,prop:`-${g.extensions.prop}`,originalPath:h}),y.value=io.negate(p.ref);const x=y.path[y.path.length-1];x!=null&&(y.path[y.path.length-1]=`-${x}`),y.path&&(y.name=s(y.path)),c(y)})}},w8=new Set(["spacing","sizes","borderWidths","fontSizes","radii"]),C8={enforce:"post",transform(e){e.allTokens.filter(i=>w8.has(i.extensions.category)&&!i.extensions.negative).forEach(i=>{Object.assign(i.extensions,{pixelValue:Hv(i.value)})})}},E8={enforce:"post",transform(e){const{allTokens:n,registerToken:i,formatTokenName:l}=e,s=n.filter(({extensions:g})=>g.category==="colors"),c=new Map,f=new Map;s.forEach(g=>{const{colorPalette:h}=g.extensions;h&&(h.keys.forEach(p=>{c.set(l(p),p)}),h.roots.forEach(p=>{const y=l(p),x=f.get(y)||[];if(x.push(g),f.set(y,x),g.extensions.default&&p.length===1){const v=h.keys[0]?.filter(Boolean);if(!v.length)return;const C=p.concat(v);c.set(l(C),[])}}))}),c.forEach(g=>{const h=["colors","colorPalette",...g].filter(Boolean),p=l(h),y=l(h.slice(1));i({name:p,value:p,originalValue:p,path:h,extensions:{condition:"base",originalPath:h,category:"colors",prop:y,virtual:!0}},"pre")})}},O8={enforce:"post",transform(e){e.allTokens=e.allTokens.filter(n=>n.value!=="")}},T8=[S8,E8,C8,O8],k8={type:"extensions",enforce:"pre",name:"tokens/css-var",transform(e,n){const{prefix:i,formatCssVar:l}=n,{negative:s,originalPath:c}=e.extensions,f=s?c:e.path;return{cssVar:l(f.filter(Boolean),i)}}},A8={enforce:"post",type:"value",name:"tokens/conditionals",transform(e,n){const{prefix:i,formatCssVar:l}=n,s=t1(e.value);return s.length&&s.forEach(c=>{const f=l(c.split("."),i);e.value=e.value.replace(`{${f.ref}}`,f)}),e.value}},R8={type:"extensions",enforce:"pre",name:"tokens/colors/colorPalette",match(e){return e.extensions.category==="colors"&&!e.extensions.virtual},transform(e,n){let i=e.path.slice();if(i.pop(),i.shift(),i.length===0){const g=[...e.path];g.shift(),i=g}if(i.length===0)return{};const l=i.reduce((g,h,p,y)=>{const x=y.slice(0,p+1);return g.push(x),g},[]),s=i[0],c=n.formatTokenName(i),f=e.path.slice(e.path.indexOf(s)+1).reduce((g,h,p,y)=>(g.push(y.slice(p)),g),[]);return f.length===0&&f.push([""]),{colorPalette:{value:c,roots:l,keys:f}}}},_8=[k8,A8,R8],R0=e=>zt(e)&&Object.prototype.hasOwnProperty.call(e,"value");function N8(e){return e?{breakpoints:d4(e,n=>({value:n})),sizes:Object.fromEntries(Object.entries(e).map(([n,i])=>[`breakpoint-${n}`,{value:i}]))}:{breakpoints:{},sizes:{}}}function z8(e){const{prefix:n="",tokens:i={},semanticTokens:l={},breakpoints:s={}}=e,c=H=>H.join("."),f=(H,W)=>Pv(H.join("-"),{prefix:W}),g=[],h=new Map,p=new Map,y=new Map,x=new Map,v=new Map,C=new Map,E=new Map,O=new Map,_=[];function F(H,W){g.push(H),h.set(H.name,H),W&&O.forEach(ve=>{ve.enforce===W&&w(ve,H)})}const I=N8(s),N=Hl({...i,breakpoints:I.breakpoints,sizes:{...i.sizes,...I.sizes}});function P(){Na(N,(H,W)=>{const ve=W.includes("DEFAULT");W=_0(W);const ze=W[0],Ge=c(W),Ke=Ra(H)?{value:H}:H,Ft={value:Ke.value,originalValue:Ke.value,name:Ge,path:W,extensions:{condition:"base",originalPath:W,category:ze,prop:c(W.slice(1))}};ve&&(Ft.extensions.default=!0),F(Ft)},{stop:R0}),Na(l,(H,W)=>{const ve=W.includes("DEFAULT");W=i1(_0(W));const ze=W[0],Ge=c(W),Ke=Ra(H.value)?{value:{base:H.value}}:H,Ft={value:Ke.value.base||"",originalValue:Ke.value.base||"",name:Ge,path:W,extensions:{originalPath:W,category:ze,conditions:Ke.value,condition:"base",prop:c(W.slice(1))}};ve&&(Ft.extensions.default=!0),F(Ft)},{stop:R0})}function A(H){return h.get(H)}function $(H){const{condition:W}=H.extensions;W&&(p.has(W)||p.set(W,new Set),p.get(W).add(H))}function Q(H){const{category:W,prop:ve}=H.extensions;W&&(E.has(W)||E.set(W,new Map),E.get(W).set(ve,H))}function Y(H){const{condition:W,negative:ve,virtual:ze,cssVar:Ge}=H.extensions;ve||ze||!W||!Ge||(y.has(W)||y.set(W,new Map),y.get(W).set(Ge.var,H.value))}function J(H){const{category:W,prop:ve,cssVar:ze,negative:Ge}=H.extensions;if(!W)return;C.has(W)||C.set(W,new Map);const Ke=Ge?H.extensions.conditions?H.originalValue:H.value:ze.ref;C.get(W).set(ve,Ke),v.set([W,ve].join("."),Ke)}function K(H){const{colorPalette:W,virtual:ve,default:ze}=H.extensions;!W||ve||W.roots.forEach(Ge=>{const Ke=c(Ge);x.has(Ke)||x.set(Ke,new Map);const Ft=V8([...H.path],[...Ge]),di=c(Ft),So=A(di);if(!So||!So.extensions.cssVar)return;const{var:Zt}=So.extensions.cssVar;if(x.get(Ke).set(Zt,H.extensions.cssVar.ref),ze&&Ge.length===1){const lu=c(["colors","colorPalette"]),wo=A(lu);if(!wo)return;const $l=c(H.path),In=A($l);if(!In)return;const Yl=W.keys[0]?.filter(Boolean);if(!Yl.length)return;const fi=c(Ge.concat(Yl));x.has(fi)||x.set(fi,new Map),x.get(fi).set(wo.extensions.cssVar.var,In.extensions.cssVar.ref)}})}let de={};function te(){g.forEach(H=>{$(H),Q(H),Y(H),J(H),K(H)}),de=Jv(C)}const ke=(H,W)=>{if(!H||typeof H!="string")return{invalid:!0,value:H};const[ve,ze]=H.split("/");if(!ve||!ze)return{invalid:!0,value:ve};const Ge=W(ve),Ke=A(`opacity.${ze}`)?.value;if(!Ke&&isNaN(Number(ze)))return{invalid:!0,value:ve};const Ft=Ke?Number(Ke)*100+"%":`${ze}%`,di=Ge??ve;return{invalid:!1,color:di,value:`color-mix(in srgb, ${di} ${Ft}, transparent)`}},Ce=ga((H,W)=>v.get(H)??W),re=ga(H=>de[H]||null),D=ga(H=>Qv(H,W=>{if(!W)return;if(W.includes("/")){const ze=ke(W,Ge=>Ce(Ge));if(ze.invalid)throw new Error("Invalid color mix at "+W+": "+ze.value);return ze.value}const ve=Ce(W);return ve||(v8.test(W)?Zv(W):W)})),G={prefix:n,allTokens:g,tokenMap:h,registerToken:F,getByName:A,formatTokenName:c,formatCssVar:f,flatMap:v,cssVarMap:y,categoryMap:E,colorPaletteMap:x,getVar:Ce,getCategoryValues:re,expandReferenceInValue:D};function ae(...H){H.forEach(W=>{O.set(W.name,W)})}function ee(...H){_.push(...H)}function w(H,W){if(W.extensions.references||Ef(H.match)&&!H.match(W))return;const ze=(Ge=>H.transform(Ge,G))(W);switch(!0){case H.type==="extensions":Object.assign(W.extensions,ze);break;case H.type==="value":W.value=ze;break;default:W[H.type]=ze;break}}function B(H){_.forEach(W=>{W.enforce===H&&W.transform(G)})}function Z(H){O.forEach(W=>{W.enforce===H&&g.forEach(ve=>{w(W,ve)})})}function X(){g.forEach(H=>{const W=I8(H);!W||W.length===0||W.forEach(ve=>{F(ve)})})}function oe(H){return t1(H).map(ve=>A(ve)).filter(Boolean)}function be(){g.forEach(H=>{if(!x8(H.value))return;const W=oe(H.value);H.extensions.references=W.reduce((ve,ze)=>(ve[ze.name]=ze,ve),{})})}function me(){g.forEach(H=>{a1(H)})}function Et(){B("pre"),Z("pre"),X(),be(),me(),B("post"),Z("post"),te()}return P(),ae(..._8),ee(...T8),Et(),G}function _0(e){return e[0]==="DEFAULT"?e:e.filter(n=>n!=="DEFAULT")}function i1(e){return e.filter(n=>n!=="base")}function I8(e){if(!e.extensions.conditions)return;const{conditions:n}=e.extensions,i=[];return Na(n,(l,s)=>{const c=i1(s);if(!c.length)return;const f=structuredClone(e);f.value=l,f.extensions.condition=c.join(":"),i.push(f)}),i}function V8(e,n){const i=e.findIndex((l,s)=>n.every((c,f)=>e[s+f]===c));return i===-1||(e.splice(i,n.length),e.splice(i,0,"colorPalette")),e}m8()(["aspectRatios","zIndex","opacity","colors","fonts","fontSizes","fontWeights","lineHeights","letterSpacings","sizes","shadows","spacing","radii","cursor","borders","borderWidths","borderStyles","durations","easings","animations","blurs","gradients","breakpoints","assets"]);function q8(e){return Object.fromEntries(Object.entries(e).map(([n,i])=>[n,i]))}function F8(e){const n=q8(e.config),i=e.tokens,l=new Map,s=new Map;function c(Y,J){n[Y]=J,f(Y,J)}const f=(Y,J)=>{const K=O(J);K&&(s.set(Y,K),x(Y,J))},g=()=>{for(const[Y,J]of Object.entries(n))J&&f(Y,J)},h=()=>{for(const[Y,J]of Object.entries(n)){const{shorthand:K}=J??{};if(!K)continue;(Array.isArray(K)?K:[K]).forEach(te=>l.set(te,Y))}},p=()=>{const Y=Jv(i.colorPaletteMap);c("colorPalette",{values:Object.keys(Y),transform:ga(J=>Y[J])})},y=new Map,x=(Y,J)=>{if(!J)return;const K=O(J,te=>`type:Tokens["${te}"]`);if(typeof K=="object"&&K.type){y.set(Y,new Set([`type:${K.type}`]));return}if(K){const te=new Set(Object.keys(K));y.set(Y,te)}const de=y.get(Y)??new Set;J.property&&y.set(Y,de.add(`CssProperties["${J.property}"]`))},v=()=>{for(const[Y,J]of Object.entries(n))J&&x(Y,J)},C=(Y,J)=>{const K=y.get(Y)??new Set;y.set(Y,new Set([...K,...J]))},E=()=>{const Y=new Map;for(const[J,K]of y.entries()){if(K.size===0){Y.set(J,["string"]);continue}const de=Array.from(K).map(te=>te.startsWith("CssProperties")?te:te.startsWith("type:")?te.replace("type:",""):JSON.stringify(te));Y.set(J,de)}return Y},O=(Y,J)=>{const{values:K}=Y,de=te=>{const ke=J?.(te);return ke?{[ke]:ke}:void 0};return Ra(K)?de?.(K)??i.getCategoryValues(K)??{}:Array.isArray(K)?K.reduce((te,ke)=>(te[ke]=ke,te),{}):Ef(K)?K(J?de:i.getCategoryValues):K},_=ga((Y,J)=>({[Y]:Y.startsWith("--")?i.getVar(J,J):J})),F=Object.assign(i.getVar,{raw:Y=>i.getByName(Y)}),I=ga((Y,J)=>{const K=A(Y);Ra(J)&&!J.includes("_EMO_")&&(J=i.expandReferenceInValue(J));const de=n[K];if(!de)return _(K,J);const te=s.get(K)?.[J];if(!de.transform)return _(Y,te??J);const ke=Ce=>c4(Ce,F);return de.transform(te??J,{raw:J,token:F,utils:{colorMix:ke}})});function N(){h(),p(),g(),v()}N();const P=l.size>0,A=ga(Y=>l.get(Y)??Y);return{keys:()=>[...Array.from(l.keys()),...Object.keys(n)],hasShorthand:P,transform:I,shorthands:l,resolveShorthand:A,register:c,getTypes:E,addPropertyType:C}}const Nt={};function D8(...e){const n=Fv(...e),{theme:i={},utilities:l={},globalCss:s={},cssVarsRoot:c=":where(:root, :host)",cssVarsPrefix:f="chakra",preflight:g}=n,h=l8(n),p=z8({breakpoints:i.breakpoints,tokens:i.tokens,semanticTokens:i.semanticTokens,prefix:f}),y=L4(i.breakpoints??Nt),x=U4({conditions:n.conditions??Nt,breakpoints:y}),v=F8({config:l,tokens:p});function C(){const{textStyles:ee,layerStyles:w,animationStyles:B}=i,Z=Hl({textStyle:ee,layerStyle:w,animationStyle:B});for(const[X,oe]of Object.entries(Z)){const be=Lv(oe??Nt,o1);v.register(X,{values:Object.keys(be),transform(me){return N(be[me])}})}}C(),v.addPropertyType("animationName",Object.keys(i.keyframes??Nt));const E=new Set(["css",...v.keys(),...x.keys()]),O=ga(ee=>E.has(ee)||q4(ee)),_=ee=>Array.isArray(ee)?ee.reduce((w,B,Z)=>{const X=x.breakpoints[Z];return B!=null&&(w[X]=B),w},{}):ee,F=r8({utility:v,normalize:_}),I=u8({conditions:x,isValidProperty:O}),N=Kv({transform:v.transform,conditions:x,normalize:F}),P=n8({css:N,conditions:x,normalize:F,layers:h}),A=g8({cva:P});function $(){const ee={};for(const[w,B]of p.cssVarMap.entries()){const Z=Object.fromEntries(B);if(Object.keys(Z).length===0)continue;const X=w==="base"?c:x.resolve(w),oe=X.startsWith("@"),be=N(I({[X]:oe?{[c]:Z}:Z}));vo(ee,be)}return h.wrap("tokens",ee)}function Q(){const ee=Object.fromEntries(Object.entries(i.keyframes??Nt).map(([B,Z])=>[`@keyframes ${B}`,Z])),w=Object.assign({},ee,N(I(s)));return h.wrap("base",w)}function Y(ee){return co(ee,O)}function J(){const ee=s8({preflight:g});return h.wrap("reset",ee)}const K=M8(p),de=(ee,w)=>K.get(ee)?.value||w;de.var=(ee,w)=>K.get(ee)?.variable||w;function te(ee,w){return i.recipes?.[ee]??w}function ke(ee,w){return i.slotRecipes?.[ee]??w}function Ce(ee){return Object.hasOwnProperty.call(i.recipes??Nt,ee)}function re(ee){return Object.hasOwnProperty.call(i.slotRecipes??Nt,ee)}function D(ee){return Ce(ee)||re(ee)}const G=[J(),Q(),$()],ae={layerStyles:Gd(i.layerStyles??Nt),textStyles:Gd(i.textStyles??Nt),animationStyles:Gd(i.animationStyles??Nt),tokens:N0(p,Object.keys(i.tokens??Nt),(ee,w)=>!ee.extensions.conditions&&!w.includes("colorPalette")),semanticTokens:N0(p,Object.keys(i.semanticTokens??Nt),ee=>!!ee.extensions.conditions),keyframes:z0(i.keyframes??Nt),breakpoints:z0(i.breakpoints??Nt)};return{$$chakra:!0,_config:n,_global:G,breakpoints:y,tokens:p,conditions:x,utility:v,token:de,properties:E,layers:h,isValidProperty:O,splitCssProps:Y,normalizeValue:_,getTokenCss:$,getGlobalCss:Q,getPreflightCss:J,css:N,cva:P,sva:A,getRecipe:te,getSlotRecipe:ke,hasRecipe:D,isRecipe:Ce,isSlotRecipe:re,query:ae}}function M8(e){const n=new Map;return e.allTokens.forEach(i=>{const{cssVar:l,virtual:s,conditions:c}=i.extensions,f=c||s?l.ref:i.value;n.set(i.name,{value:f,variable:l.ref})}),n}const o1=e=>zt(e)&&"value"in e,Gd=e=>({list(){return Object.keys(Lv(e,o1))},search(n){return this.list().filter(i=>i.includes(n))}}),N0=(e,n,i)=>({categoryKeys:n,list(l){return Array.from(e.categoryMap.get(l)?.entries()??[]).reduce((s,[c,f])=>(i(f,c)&&s.push(c),s),[])},search(l,s){return this.list(l).filter(c=>c.includes(s))}}),z0=e=>({list(){return Object.keys(e)},search(n){return this.list().filter(i=>i.includes(n))}}),P8={sm:"480px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},Wd="var(--chakra-empty,/*!*/ /*!*/)",L8=h4({"*":{fontFeatureSettings:'"cv11"',"--ring-inset":Wd,"--ring-offset-width":"0px","--ring-offset-color":"#fff","--ring-color":"rgba(66, 153, 225, 0.6)","--ring-offset-shadow":"0 0 #0000","--ring-shadow":"0 0 #0000",...Object.fromEntries(["brightness","contrast","grayscale","hue-rotate","invert","saturate","sepia","drop-shadow"].map(e=>[`--${e}`,Wd])),...Object.fromEntries(["blur","brightness","contrast","grayscale","hue-rotate","invert","opacity","saturate","sepia"].map(e=>[`--backdrop-${e}`,Wd])),"--global-font-mono":"fonts.mono","--global-font-body":"fonts.body","--global-color-border":"colors.border"},html:{color:"fg",bg:"bg",lineHeight:"1.5",colorPalette:"gray"},"*::placeholder, *[data-placeholder]":{color:"fg.muted/80"},"*::selection":{bg:"colorPalette.emphasized/80"}}),B8=y4({"fill.muted":{value:{background:"colorPalette.muted",color:"colorPalette.fg"}},"fill.subtle":{value:{background:"colorPalette.subtle",color:"colorPalette.fg"}},"fill.surface":{value:{background:"colorPalette.subtle",color:"colorPalette.fg",boxShadow:"0 0 0px 1px var(--shadow-color)",boxShadowColor:"colorPalette.muted"}},"fill.solid":{value:{background:"colorPalette.solid",color:"colorPalette.contrast"}},"outline.subtle":{value:{color:"colorPalette.fg",boxShadow:"inset 0 0 0px 1px var(--shadow-color)",boxShadowColor:"colorPalette.subtle"}},"outline.solid":{value:{borderWidth:"1px",borderColor:"colorPalette.solid",color:"colorPalette.fg"}},"indicator.bottom":{value:{position:"relative","--indicator-color-fallback":"colors.colorPalette.solid",_before:{content:'""',position:"absolute",bottom:"var(--indicator-offset-y, 0)",insetInline:"var(--indicator-offset-x, 0)",height:"var(--indicator-thickness, 2px)",background:"var(--indicator-color, var(--indicator-color-fallback))"}}},"indicator.top":{value:{position:"relative","--indicator-color-fallback":"colors.colorPalette.solid",_before:{content:'""',position:"absolute",top:"var(--indicator-offset-y, 0)",insetInline:"var(--indicator-offset-x, 0)",height:"var(--indicator-thickness, 2px)",background:"var(--indicator-color, var(--indicator-color-fallback))"}}},"indicator.start":{value:{position:"relative","--indicator-color-fallback":"colors.colorPalette.solid",_before:{content:'""',position:"absolute",insetInlineStart:"var(--indicator-offset-x, 0)",insetBlock:"var(--indicator-offset-y, 0)",width:"var(--indicator-thickness, 2px)",background:"var(--indicator-color, var(--indicator-color-fallback))"}}},"indicator.end":{value:{position:"relative","--indicator-color-fallback":"colors.colorPalette.solid",_before:{content:'""',position:"absolute",insetInlineEnd:"var(--indicator-offset-x, 0)",insetBlock:"var(--indicator-offset-y, 0)",width:"var(--indicator-thickness, 2px)",background:"var(--indicator-color, var(--indicator-color-fallback))"}}},disabled:{value:{opacity:"0.5",cursor:"not-allowed"}},none:{value:{}}}),j8=b4({"slide-fade-in":{value:{transformOrigin:"var(--transform-origin)","&[data-placement^=top]":{animationName:"slide-from-bottom, fade-in"},"&[data-placement^=bottom]":{animationName:"slide-from-top, fade-in"},"&[data-placement^=left]":{animationName:"slide-from-right, fade-in"},"&[data-placement^=right]":{animationName:"slide-from-left, fade-in"}}},"slide-fade-out":{value:{transformOrigin:"var(--transform-origin)","&[data-placement^=top]":{animationName:"slide-to-bottom, fade-out"},"&[data-placement^=bottom]":{animationName:"slide-to-top, fade-out"},"&[data-placement^=left]":{animationName:"slide-to-right, fade-out"},"&[data-placement^=right]":{animationName:"slide-to-left, fade-out"}}},"scale-fade-in":{value:{transformOrigin:"var(--transform-origin)",animationName:"scale-in, fade-in"}},"scale-fade-out":{value:{transformOrigin:"var(--transform-origin)",animationName:"scale-out, fade-out"}}}),Jf=ot({className:"chakra-badge",base:{display:"inline-flex",alignItems:"center",borderRadius:"l2",gap:"1",fontWeight:"medium",fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap",userSelect:"none"},variants:{variant:{solid:{bg:"colorPalette.solid",color:"colorPalette.contrast"},subtle:{bg:"colorPalette.subtle",color:"colorPalette.fg"},outline:{color:"colorPalette.fg",shadow:"inset 0 0 0px 1px var(--shadow-color)",shadowColor:"colorPalette.muted"},surface:{bg:"colorPalette.subtle",color:"colorPalette.fg",shadow:"inset 0 0 0px 1px var(--shadow-color)",shadowColor:"colorPalette.muted"},plain:{color:"colorPalette.fg"}},size:{xs:{textStyle:"2xs",px:"1",minH:"4"},sm:{textStyle:"xs",px:"1.5",minH:"5"},md:{textStyle:"sm",px:"2",minH:"6"},lg:{textStyle:"sm",px:"2.5",minH:"7"}}},defaultVariants:{variant:"subtle",size:"sm"}}),H8=ot({className:"chakra-button",base:{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",borderRadius:"l2",whiteSpace:"nowrap",verticalAlign:"middle",borderWidth:"1px",borderColor:"transparent",cursor:"button",flexShrink:"0",outline:"0",lineHeight:"1.2",isolation:"isolate",fontWeight:"medium",transitionProperty:"common",transitionDuration:"moderate",focusVisibleRing:"outside",_disabled:{layerStyle:"disabled"},_icon:{flexShrink:"0"}},variants:{size:{"2xs":{h:"6",minW:"6",textStyle:"xs",px:"2",gap:"1",_icon:{width:"3.5",height:"3.5"}},xs:{h:"8",minW:"8",textStyle:"xs",px:"2.5",gap:"1",_icon:{width:"4",height:"4"}},sm:{h:"9",minW:"9",px:"3.5",textStyle:"sm",gap:"2",_icon:{width:"4",height:"4"}},md:{h:"10",minW:"10",textStyle:"sm",px:"4",gap:"2",_icon:{width:"5",height:"5"}},lg:{h:"11",minW:"11",textStyle:"md",px:"5",gap:"3",_icon:{width:"5",height:"5"}},xl:{h:"12",minW:"12",textStyle:"md",px:"5",gap:"2.5",_icon:{width:"5",height:"5"}},"2xl":{h:"16",minW:"16",textStyle:"lg",px:"7",gap:"3",_icon:{width:"6",height:"6"}}},variant:{solid:{bg:"colorPalette.solid",color:"colorPalette.contrast",borderColor:"transparent",_hover:{bg:"colorPalette.solid/90"},_expanded:{bg:"colorPalette.solid/90"}},subtle:{bg:"colorPalette.subtle",color:"colorPalette.fg",borderColor:"transparent",_hover:{bg:"colorPalette.muted"},_expanded:{bg:"colorPalette.muted"}},surface:{bg:"colorPalette.subtle",color:"colorPalette.fg",shadow:"0 0 0px 1px var(--shadow-color)",shadowColor:"colorPalette.muted",_hover:{bg:"colorPalette.muted"},_expanded:{bg:"colorPalette.muted"}},outline:{borderWidth:"1px",borderColor:"colorPalette.muted",color:"colorPalette.fg",_hover:{bg:"colorPalette.subtle"},_expanded:{bg:"colorPalette.subtle"}},ghost:{bg:"transparent",color:"colorPalette.fg",_hover:{bg:"colorPalette.subtle"},_expanded:{bg:"colorPalette.subtle"}},plain:{color:"colorPalette.fg"}}},defaultVariants:{size:"md",variant:"solid"}}),ht=ot({className:"chakra-checkmark",base:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:"0",color:"white",borderWidth:"1px",borderColor:"transparent",borderRadius:"l1",cursor:"checkbox",focusVisibleRing:"outside",_icon:{boxSize:"full"},_invalid:{colorPalette:"red",borderColor:"border.error"},_disabled:{opacity:"0.5",cursor:"disabled"}},variants:{size:{xs:{boxSize:"3"},sm:{boxSize:"4"},md:{boxSize:"5",p:"0.5"},lg:{boxSize:"6",p:"0.5"}},variant:{solid:{borderColor:"border.emphasized","&:is([data-state=checked], [data-state=indeterminate])":{bg:"colorPalette.solid",color:"colorPalette.contrast",borderColor:"colorPalette.solid"}},outline:{borderColor:"border","&:is([data-state=checked], [data-state=indeterminate])":{color:"colorPalette.fg",borderColor:"colorPalette.solid"}},subtle:{bg:"colorPalette.muted",borderColor:"colorPalette.muted","&:is([data-state=checked], [data-state=indeterminate])":{color:"colorPalette.fg"}},plain:{"&:is([data-state=checked], [data-state=indeterminate])":{color:"colorPalette.fg"}},inverted:{borderColor:"border",color:"colorPalette.fg","&:is([data-state=checked], [data-state=indeterminate])":{borderColor:"colorPalette.solid"}}},filled:{true:{bg:"bg"}}},defaultVariants:{variant:"solid",size:"md"}}),{variants:U8,defaultVariants:G8}=Jf,W8=ot({className:"chakra-code",base:{fontFamily:"mono",alignItems:"center",display:"inline-flex",borderRadius:"l2"},variants:U8,defaultVariants:G8}),l1=ot({className:"color-swatch",base:{boxSize:"var(--swatch-size)",shadow:"inset 0 0 0 1px rgba(0, 0, 0, 0.1)","--checker-size":"8px","--checker-bg":"colors.bg","--checker-fg":"colors.bg.emphasized",background:"linear-gradient(var(--color), var(--color)), repeating-conic-gradient(var(--checker-fg) 0%, var(--checker-fg) 25%, var(--checker-bg) 0%, var(--checker-bg) 50%) 0% 50% / var(--checker-size) var(--checker-size) !important",display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:"0"},variants:{size:{"2xs":{"--swatch-size":"sizes.3.5"},xs:{"--swatch-size":"sizes.4"},sm:{"--swatch-size":"sizes.4.5"},md:{"--swatch-size":"sizes.5"},lg:{"--swatch-size":"sizes.6"},xl:{"--swatch-size":"sizes.7"},"2xl":{"--swatch-size":"sizes.8"},inherit:{"--swatch-size":"inherit"},full:{"--swatch-size":"100%"}},shape:{square:{borderRadius:"none"},circle:{borderRadius:"full"},rounded:{borderRadius:"l1"}}},defaultVariants:{size:"md",shape:"rounded"}}),$8=ot({className:"chakra-container",base:{position:"relative",maxWidth:"8xl",w:"100%",mx:"auto",px:{base:"4",md:"6",lg:"8"}},variants:{centerContent:{true:{display:"flex",flexDirection:"column",alignItems:"center"}},fluid:{true:{maxWidth:"full"}}}}),Y8=ot({className:"chakra-heading",base:{fontFamily:"heading",fontWeight:"semibold"},variants:{size:{xs:{textStyle:"xs"},sm:{textStyle:"sm"},md:{textStyle:"md"},lg:{textStyle:"lg"},xl:{textStyle:"xl"},"2xl":{textStyle:"2xl"},"3xl":{textStyle:"3xl"},"4xl":{textStyle:"4xl"},"5xl":{textStyle:"5xl"},"6xl":{textStyle:"6xl"},"7xl":{textStyle:"7xl"}}},defaultVariants:{size:"xl"}}),K8=ot({className:"chakra-icon",base:{display:"inline-block",lineHeight:"1em",flexShrink:"0",color:"currentcolor",verticalAlign:"middle"},variants:{size:{inherit:{},xs:{boxSize:"3"},sm:{boxSize:"4"},md:{boxSize:"5"},lg:{boxSize:"6"},xl:{boxSize:"7"},"2xl":{boxSize:"8"}}},defaultVariants:{size:"inherit"}}),et=ot({className:"chakra-input",base:{width:"100%",minWidth:"0",outline:"0",position:"relative",appearance:"none",textAlign:"start",borderRadius:"l2",_disabled:{layerStyle:"disabled"},height:"var(--input-height)",minW:"var(--input-height)","--focus-color":"colors.colorPalette.focusRing","--error-color":"colors.border.error",_invalid:{focusRingColor:"var(--error-color)",borderColor:"var(--error-color)"}},variants:{size:{"2xs":{textStyle:"xs",px:"2","--input-height":"sizes.7"},xs:{textStyle:"xs",px:"2","--input-height":"sizes.8"},sm:{textStyle:"sm",px:"2.5","--input-height":"sizes.9"},md:{textStyle:"sm",px:"3","--input-height":"sizes.10"},lg:{textStyle:"md",px:"4","--input-height":"sizes.11"},xl:{textStyle:"md",px:"4.5","--input-height":"sizes.12"},"2xl":{textStyle:"lg",px:"5","--input-height":"sizes.16"}},variant:{outline:{bg:"transparent",borderWidth:"1px",borderColor:"border",focusVisibleRing:"inside",focusRingColor:"var(--focus-color)"},subtle:{borderWidth:"1px",borderColor:"transparent",bg:"bg.muted",focusVisibleRing:"inside",focusRingColor:"var(--focus-color)"},flushed:{bg:"transparent",borderBottomWidth:"1px",borderBottomColor:"border",borderRadius:"0",px:"0",_focusVisible:{borderColor:"var(--focus-color)",boxShadow:"0px 1px 0px 0px var(--focus-color)",_invalid:{borderColor:"var(--error-color)",boxShadow:"0px 1px 0px 0px var(--error-color)"}}}}},defaultVariants:{size:"md",variant:"outline"}}),X8=ot({className:"chakra-input-addon",base:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap",alignSelf:"stretch",borderRadius:"l2"},variants:{size:et.variants.size,variant:{outline:{borderWidth:"1px",borderColor:"border",bg:"bg.muted"},subtle:{borderWidth:"1px",borderColor:"transparent",bg:"bg.emphasized"},flushed:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}},defaultVariants:{size:"md",variant:"outline"}}),Z8=ot({className:"chakra-kbd",base:{display:"inline-flex",alignItems:"center",fontWeight:"medium",fontFamily:"mono",flexShrink:"0",whiteSpace:"nowrap",wordSpacing:"-0.5em",userSelect:"none",px:"1",borderRadius:"l2"},variants:{variant:{raised:{bg:"colorPalette.subtle",color:"colorPalette.fg",borderWidth:"1px",borderBottomWidth:"2px",borderColor:"colorPalette.muted"},outline:{borderWidth:"1px",color:"colorPalette.fg"},subtle:{bg:"colorPalette.muted",color:"colorPalette.fg"},plain:{color:"colorPalette.fg"}},size:{sm:{textStyle:"xs",height:"4.5"},md:{textStyle:"sm",height:"5"},lg:{textStyle:"md",height:"6"}}},defaultVariants:{size:"md",variant:"raised"}}),Q8=ot({className:"chakra-link",base:{display:"inline-flex",alignItems:"center",outline:"none",gap:"1.5",cursor:"pointer",borderRadius:"l1",focusRing:"outside"},variants:{variant:{underline:{color:"colorPalette.fg",textDecoration:"underline",textUnderlineOffset:"3px",textDecorationColor:"currentColor/20"},plain:{color:"colorPalette.fg",_hover:{textDecoration:"underline",textUnderlineOffset:"3px",textDecorationColor:"currentColor/20"}}}},defaultVariants:{variant:"plain"}}),J8=ot({className:"chakra-mark",base:{bg:"transparent",color:"inherit",whiteSpace:"nowrap"},variants:{variant:{subtle:{bg:"colorPalette.subtle",color:"inherit"},solid:{bg:"colorPalette.solid",color:"colorPalette.contrast"},text:{fontWeight:"medium"},plain:{}}}}),pt=ot({className:"chakra-radiomark",base:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,verticalAlign:"top",color:"white",borderWidth:"1px",borderColor:"transparent",borderRadius:"full",cursor:"radio",_focusVisible:{outline:"2px solid",outlineColor:"colorPalette.focusRing",outlineOffset:"2px"},_invalid:{colorPalette:"red",borderColor:"red.500"},_disabled:{opacity:"0.5",cursor:"disabled"},"& .dot":{height:"100%",width:"100%",borderRadius:"full",bg:"currentColor",scale:"0.4"}},variants:{variant:{solid:{borderWidth:"1px",borderColor:"border.emphasized",_checked:{bg:"colorPalette.solid",color:"colorPalette.contrast",borderColor:"colorPalette.solid"}},subtle:{borderWidth:"1px",bg:"colorPalette.muted",borderColor:"colorPalette.muted",color:"transparent",_checked:{color:"colorPalette.fg"}},outline:{borderWidth:"1px",borderColor:"inherit",_checked:{color:"colorPalette.fg",borderColor:"colorPalette.solid"},"& .dot":{scale:"0.6"}},inverted:{bg:"bg",borderWidth:"1px",borderColor:"inherit",_checked:{color:"colorPalette.solid",borderColor:"currentcolor"}}},size:{xs:{boxSize:"3"},sm:{boxSize:"4"},md:{boxSize:"5"},lg:{boxSize:"6"}},filled:{true:{bg:"bg"}}},defaultVariants:{variant:"solid",size:"md"}}),eE=ot({className:"chakra-separator",base:{display:"block",borderColor:"border"},variants:{variant:{solid:{borderStyle:"solid"},dashed:{borderStyle:"dashed"},dotted:{borderStyle:"dotted"}},orientation:{vertical:{borderInlineStartWidth:"var(--separator-thickness)"},horizontal:{borderTopWidth:"var(--separator-thickness)"}},size:{xs:{"--separator-thickness":"0.5px"},sm:{"--separator-thickness":"1px"},md:{"--separator-thickness":"2px"},lg:{"--separator-thickness":"3px"}}},defaultVariants:{size:"sm",variant:"solid",orientation:"horizontal"}}),tE=ot({className:"chakra-skeleton",base:{},variants:{loading:{true:{borderRadius:"l2",boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none",flexShrink:"0","&::before, &::after, *":{visibility:"hidden"}},false:{background:"unset",animation:"fade-in var(--fade-duration, 0.1s) ease-out !important"}},variant:{pulse:{background:"bg.emphasized",animation:"pulse",animationDuration:"var(--duration, 1.2s)"},shine:{"--animate-from":"200%","--animate-to":"-200%","--start-color":"colors.bg.muted","--end-color":"colors.bg.emphasized",backgroundImage:"linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))",backgroundSize:"400% 100%",animation:"bg-position var(--duration, 5s) ease-in-out infinite"},none:{animation:"none"}}},defaultVariants:{variant:"pulse",loading:!0}}),aE=ot({className:"chakra-skip-nav",base:{display:"inline-flex",bg:"bg.panel",padding:"2.5",borderRadius:"l2",fontWeight:"semibold",focusVisibleRing:"outside",textStyle:"sm",userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focusVisible:{clip:"auto",width:"auto",height:"auto",position:"fixed",top:"6",insetStart:"6"}}}),nE=ot({className:"chakra-spinner",base:{display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderWidth:"2px",borderRadius:"full",width:"var(--spinner-size)",height:"var(--spinner-size)",animation:"spin",animationDuration:"slowest","--spinner-track-color":"transparent",borderBottomColor:"var(--spinner-track-color)",borderInlineStartColor:"var(--spinner-track-color)"},variants:{size:{inherit:{"--spinner-size":"1em"},xs:{"--spinner-size":"sizes.3"},sm:{"--spinner-size":"sizes.4"},md:{"--spinner-size":"sizes.5"},lg:{"--spinner-size":"sizes.8"},xl:{"--spinner-size":"sizes.10"}}},defaultVariants:{size:"md"}}),iE=ot({className:"chakra-textarea",base:{width:"100%",minWidth:"0",outline:"0",position:"relative",appearance:"none",textAlign:"start",borderRadius:"l2",_disabled:{layerStyle:"disabled"},"--focus-color":"colors.colorPalette.focusRing","--error-color":"colors.border.error",_invalid:{focusRingColor:"var(--error-color)",borderColor:"var(--error-color)"}},variants:{size:{xs:{textStyle:"xs",px:"2",py:"1.5",scrollPaddingBottom:"1.5"},sm:{textStyle:"sm",px:"2.5",py:"2",scrollPaddingBottom:"2"},md:{textStyle:"sm",px:"3",py:"2",scrollPaddingBottom:"2"},lg:{textStyle:"md",px:"4",py:"3",scrollPaddingBottom:"3"},xl:{textStyle:"md",px:"4.5",py:"3.5",scrollPaddingBottom:"3.5"}},variant:{outline:{bg:"transparent",borderWidth:"1px",borderColor:"border",focusVisibleRing:"inside"},subtle:{borderWidth:"1px",borderColor:"transparent",bg:"bg.muted",focusVisibleRing:"inside"},flushed:{bg:"transparent",borderBottomWidth:"1px",borderBottomColor:"border",borderRadius:"0",px:"0",_focusVisible:{borderColor:"var(--focus-color)",boxShadow:"0px 1px 0px 0px var(--focus-color)"}}}},defaultVariants:{size:"md",variant:"outline"}}),oE={badge:Jf,button:H8,code:W8,container:$8,heading:Y8,input:et,inputAddon:X8,kbd:Z8,link:Q8,mark:J8,separator:eE,skeleton:tE,skipNavLink:aE,spinner:nE,textarea:iE,icon:K8,checkmark:ht,radiomark:pt,colorSwatch:l1},lE=Zf.colors({bg:{DEFAULT:{value:{_light:"{colors.white}",_dark:"{colors.black}"}},subtle:{value:{_light:"{colors.gray.50}",_dark:"{colors.gray.950}"}},muted:{value:{_light:"{colors.gray.100}",_dark:"{colors.gray.900}"}},emphasized:{value:{_light:"{colors.gray.200}",_dark:"{colors.gray.800}"}},inverted:{value:{_light:"{colors.black}",_dark:"{colors.white}"}},panel:{value:{_light:"{colors.white}",_dark:"{colors.gray.950}"}},error:{value:{_light:"{colors.red.50}",_dark:"{colors.red.950}"}},warning:{value:{_light:"{colors.orange.50}",_dark:"{colors.orange.950}"}},success:{value:{_light:"{colors.green.50}",_dark:"{colors.green.950}"}},info:{value:{_light:"{colors.blue.50}",_dark:"{colors.blue.950}"}}},fg:{DEFAULT:{value:{_light:"{colors.black}",_dark:"{colors.gray.50}"}},muted:{value:{_light:"{colors.gray.600}",_dark:"{colors.gray.400}"}},subtle:{value:{_light:"{colors.gray.400}",_dark:"{colors.gray.500}"}},inverted:{value:{_light:"{colors.gray.50}",_dark:"{colors.black}"}},error:{value:{_light:"{colors.red.500}",_dark:"{colors.red.400}"}},warning:{value:{_light:"{colors.orange.600}",_dark:"{colors.orange.300}"}},success:{value:{_light:"{colors.green.600}",_dark:"{colors.green.300}"}},info:{value:{_light:"{colors.blue.600}",_dark:"{colors.blue.300}"}}},border:{DEFAULT:{value:{_light:"{colors.gray.200}",_dark:"{colors.gray.800}"}},muted:{value:{_light:"{colors.gray.100}",_dark:"{colors.gray.900}"}},subtle:{value:{_light:"{colors.gray.50}",_dark:"{colors.gray.950}"}},emphasized:{value:{_light:"{colors.gray.300}",_dark:"{colors.gray.700}"}},inverted:{value:{_light:"{colors.gray.800}",_dark:"{colors.gray.200}"}},error:{value:{_light:"{colors.red.500}",_dark:"{colors.red.400}"}},warning:{value:{_light:"{colors.orange.500}",_dark:"{colors.orange.400}"}},success:{value:{_light:"{colors.green.500}",_dark:"{colors.green.400}"}},info:{value:{_light:"{colors.blue.500}",_dark:"{colors.blue.400}"}}},gray:{contrast:{value:{_light:"{colors.white}",_dark:"{colors.black}"}},fg:{value:{_light:"{colors.gray.800}",_dark:"{colors.gray.200}"}},subtle:{value:{_light:"{colors.gray.100}",_dark:"{colors.gray.900}"}},muted:{value:{_light:"{colors.gray.200}",_dark:"{colors.gray.800}"}},emphasized:{value:{_light:"{colors.gray.300}",_dark:"{colors.gray.700}"}},solid:{value:{_light:"{colors.gray.900}",_dark:"{colors.white}"}},focusRing:{value:{_light:"{colors.gray.400}",_dark:"{colors.gray.400}"}}},red:{contrast:{value:{_light:"white",_dark:"white"}},fg:{value:{_light:"{colors.red.700}",_dark:"{colors.red.300}"}},subtle:{value:{_light:"{colors.red.100}",_dark:"{colors.red.900}"}},muted:{value:{_light:"{colors.red.200}",_dark:"{colors.red.800}"}},emphasized:{value:{_light:"{colors.red.300}",_dark:"{colors.red.700}"}},solid:{value:{_light:"{colors.red.600}",_dark:"{colors.red.600}"}},focusRing:{value:{_light:"{colors.red.500}",_dark:"{colors.red.500}"}}},orange:{contrast:{value:{_light:"white",_dark:"black"}},fg:{value:{_light:"{colors.orange.700}",_dark:"{colors.orange.300}"}},subtle:{value:{_light:"{colors.orange.100}",_dark:"{colors.orange.900}"}},muted:{value:{_light:"{colors.orange.200}",_dark:"{colors.orange.800}"}},emphasized:{value:{_light:"{colors.orange.300}",_dark:"{colors.orange.700}"}},solid:{value:{_light:"{colors.orange.600}",_dark:"{colors.orange.500}"}},focusRing:{value:{_light:"{colors.orange.500}",_dark:"{colors.orange.500}"}}},green:{contrast:{value:{_light:"white",_dark:"white"}},fg:{value:{_light:"{colors.green.700}",_dark:"{colors.green.300}"}},subtle:{value:{_light:"{colors.green.100}",_dark:"{colors.green.900}"}},muted:{value:{_light:"{colors.green.200}",_dark:"{colors.green.800}"}},emphasized:{value:{_light:"{colors.green.300}",_dark:"{colors.green.700}"}},solid:{value:{_light:"{colors.green.600}",_dark:"{colors.green.600}"}},focusRing:{value:{_light:"{colors.green.500}",_dark:"{colors.green.500}"}}},blue:{contrast:{value:{_light:"white",_dark:"white"}},fg:{value:{_light:"{colors.blue.700}",_dark:"{colors.blue.300}"}},subtle:{value:{_light:"{colors.blue.100}",_dark:"{colors.blue.900}"}},muted:{value:{_light:"{colors.blue.200}",_dark:"{colors.blue.800}"}},emphasized:{value:{_light:"{colors.blue.300}",_dark:"{colors.blue.700}"}},solid:{value:{_light:"{colors.blue.600}",_dark:"{colors.blue.600}"}},focusRing:{value:{_light:"{colors.blue.500}",_dark:"{colors.blue.500}"}}},yellow:{contrast:{value:{_light:"black",_dark:"black"}},fg:{value:{_light:"{colors.yellow.800}",_dark:"{colors.yellow.300}"}},subtle:{value:{_light:"{colors.yellow.100}",_dark:"{colors.yellow.900}"}},muted:{value:{_light:"{colors.yellow.200}",_dark:"{colors.yellow.800}"}},emphasized:{value:{_light:"{colors.yellow.300}",_dark:"{colors.yellow.700}"}},solid:{value:{_light:"{colors.yellow.300}",_dark:"{colors.yellow.300}"}},focusRing:{value:{_light:"{colors.yellow.500}",_dark:"{colors.yellow.500}"}}},teal:{contrast:{value:{_light:"white",_dark:"white"}},fg:{value:{_light:"{colors.teal.700}",_dark:"{colors.teal.300}"}},subtle:{value:{_light:"{colors.teal.100}",_dark:"{colors.teal.900}"}},muted:{value:{_light:"{colors.teal.200}",_dark:"{colors.teal.800}"}},emphasized:{value:{_light:"{colors.teal.300}",_dark:"{colors.teal.700}"}},solid:{value:{_light:"{colors.teal.600}",_dark:"{colors.teal.600}"}},focusRing:{value:{_light:"{colors.teal.500}",_dark:"{colors.teal.500}"}}},purple:{contrast:{value:{_light:"white",_dark:"white"}},fg:{value:{_light:"{colors.purple.700}",_dark:"{colors.purple.300}"}},subtle:{value:{_light:"{colors.purple.100}",_dark:"{colors.purple.900}"}},muted:{value:{_light:"{colors.purple.200}",_dark:"{colors.purple.800}"}},emphasized:{value:{_light:"{colors.purple.300}",_dark:"{colors.purple.700}"}},solid:{value:{_light:"{colors.purple.600}",_dark:"{colors.purple.600}"}},focusRing:{value:{_light:"{colors.purple.500}",_dark:"{colors.purple.500}"}}},pink:{contrast:{value:{_light:"white",_dark:"white"}},fg:{value:{_light:"{colors.pink.700}",_dark:"{colors.pink.300}"}},subtle:{value:{_light:"{colors.pink.100}",_dark:"{colors.pink.900}"}},muted:{value:{_light:"{colors.pink.200}",_dark:"{colors.pink.800}"}},emphasized:{value:{_light:"{colors.pink.300}",_dark:"{colors.pink.700}"}},solid:{value:{_light:"{colors.pink.600}",_dark:"{colors.pink.600}"}},focusRing:{value:{_light:"{colors.pink.500}",_dark:"{colors.pink.500}"}}},cyan:{contrast:{value:{_light:"white",_dark:"white"}},fg:{value:{_light:"{colors.cyan.700}",_dark:"{colors.cyan.300}"}},subtle:{value:{_light:"{colors.cyan.100}",_dark:"{colors.cyan.900}"}},muted:{value:{_light:"{colors.cyan.200}",_dark:"{colors.cyan.800}"}},emphasized:{value:{_light:"{colors.cyan.300}",_dark:"{colors.cyan.700}"}},solid:{value:{_light:"{colors.cyan.600}",_dark:"{colors.cyan.600}"}},focusRing:{value:{_light:"{colors.cyan.500}",_dark:"{colors.cyan.500}"}}}}),rE=Zf.radii({l1:{value:"{radii.xs}"},l2:{value:"{radii.sm}"},l3:{value:"{radii.md}"}}),sE=Zf.shadows({xs:{value:{_light:"0px 1px 2px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/20}",_dark:"0px 1px 1px {black/64}, 0px 0px 1px inset {colors.gray.300/20}"}},sm:{value:{_light:"0px 2px 4px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",_dark:"0px 2px 4px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"}},md:{value:{_light:"0px 4px 8px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",_dark:"0px 4px 8px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"}},lg:{value:{_light:"0px 8px 16px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",_dark:"0px 8px 16px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"}},xl:{value:{_light:"0px 16px 24px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",_dark:"0px 16px 24px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"}},"2xl":{value:{_light:"0px 24px 40px {colors.gray.900/16}, 0px 0px 1px {colors.gray.900/30}",_dark:"0px 24px 40px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"}},inner:{value:{_light:"inset 0 2px 4px 0 {black/5}",_dark:"inset 0 2px 4px 0 black"}},inset:{value:{_light:"inset 0 0 0 1px {black/5}",_dark:"inset 0 0 0 1px {colors.gray.300/5}"}}}),uE=jy.extendWith("itemBody"),cE=ue("action-bar").parts("positioner","content","separator","selectionTrigger","closeTrigger"),dE=ue("alert").parts("title","description","root","indicator","content"),fE=ue("breadcrumb").parts("link","currentLink","item","list","root","ellipsis","separator"),gE=ue("blockquote").parts("root","icon","content","caption"),mE=ue("card").parts("root","header","body","footer","title","description"),hE=ue("checkbox-card",["root","control","label","description","addon","indicator","content"]),pE=ue("data-list").parts("root","item","itemLabel","itemValue"),bE=$f.extendWith("header","body","footer","backdrop"),yE=$f.extendWith("header","body","footer","backdrop"),vE=sv.extendWith("textarea"),xE=ue("empty-state",["root","content","indicator","title","description"]),SE=uv.extendWith("requiredIndicator"),wE=cv.extendWith("content"),CE=dv.extendWith("itemContent","dropzoneContent","fileText"),EE=ue("list").parts("root","item","indicator"),OE=pv.extendWith("itemCommand"),TE=ue("select").parts("root","field","indicator"),kE=Ov.extendWith("header","body","footer"),r1=Xf.extendWith("itemAddon","itemIndicator"),AE=r1.extendWith("itemContent","itemDescription"),RE=kv.extendWith("itemIndicator"),_E=_v.extendWith("indicatorGroup"),NE=o9.extendWith("indicatorGroup","empty"),zE=zv.extendWith("markerIndicator"),IE=ue("stat").parts("root","label","helpText","valueText","valueUnit","indicator"),VE=ue("status").parts("root","indicator"),qE=ue("steps",["root","list","item","trigger","indicator","separator","content","title","description","nextTrigger","prevTrigger","progress"]),FE=Iv.extendWith("indicator"),DE=ue("table").parts("root","header","body","row","columnHeader","cell","footer","caption"),ME=ue("toast").parts("root","title","description","indicator","closeTrigger","actionTrigger"),PE=ue("tabs").parts("root","trigger","list","content","contentGroup","indicator"),LE=ue("tag").parts("root","label","closeTrigger","startElement","endElement"),BE=ue("timeline").parts("root","item","content","separator","indicator","connector","title","description"),jE=SC.extendWith("channelText"),HE=ue("code-block",["root","content","title","header","footer","control","overlay","code","codeText","copyTrigger","copyIndicator","collapseTrigger","collapseIndicator","collapseText"]);Xy.extendWith("valueText");const UE=f9,GE=ge({className:"chakra-accordion",slots:uE.keys(),base:{root:{width:"full","--accordion-radius":"radii.l2"},item:{overflowAnchor:"none"},itemTrigger:{display:"flex",alignItems:"center",textAlign:"start",width:"full",outline:"0",gap:"3",fontWeight:"medium",borderRadius:"var(--accordion-radius)",_focusVisible:{outline:"2px solid",outlineColor:"colorPalette.focusRing"},_disabled:{layerStyle:"disabled"}},itemBody:{pt:"var(--accordion-padding-y)",pb:"calc(var(--accordion-padding-y) * 2)"},itemContent:{overflow:"hidden",borderRadius:"var(--accordion-radius)",_open:{animationName:"expand-height, fade-in",animationDuration:"moderate"},_closed:{animationName:"collapse-height, fade-out",animationDuration:"moderate"}},itemIndicator:{transition:"rotate 0.2s",transformOrigin:"center",color:"fg.subtle",_open:{rotate:"180deg"},_icon:{width:"1.2em",height:"1.2em"}}},variants:{variant:{outline:{item:{borderBottomWidth:"1px"}},subtle:{itemTrigger:{px:"var(--accordion-padding-x)"},itemContent:{px:"var(--accordion-padding-x)"},item:{borderRadius:"var(--accordion-radius)",_open:{bg:"colorPalette.subtle"}}},enclosed:{root:{borderWidth:"1px",borderRadius:"var(--accordion-radius)",divideY:"1px",overflow:"hidden"},itemTrigger:{px:"var(--accordion-padding-x)"},itemContent:{px:"var(--accordion-padding-x)"},item:{_open:{bg:"bg.subtle"}}},plain:{}},size:{sm:{root:{"--accordion-padding-x":"spacing.3","--accordion-padding-y":"spacing.2"},itemTrigger:{textStyle:"sm",py:"var(--accordion-padding-y)"}},md:{root:{"--accordion-padding-x":"spacing.4","--accordion-padding-y":"spacing.2"},itemTrigger:{textStyle:"md",py:"var(--accordion-padding-y)"}},lg:{root:{"--accordion-padding-x":"spacing.4.5","--accordion-padding-y":"spacing.2.5"},itemTrigger:{textStyle:"lg",py:"var(--accordion-padding-y)"}}}},defaultVariants:{size:"md",variant:"outline"}}),WE=ge({className:"chakra-action-bar",slots:cE.keys(),base:{positioner:{position:"fixed",display:"flex",justifyContent:"center",pointerEvents:"none",insetInline:"0",top:"unset",bottom:"calc(env(safe-area-inset-bottom) + 20px)"},content:{bg:"bg.panel",shadow:"md",display:"flex",alignItems:"center",gap:"3",borderRadius:"l3",py:"2.5",px:"3",pointerEvents:"auto",translate:"calc(-1 * var(--scrollbar-width) / 2) 0px",_open:{animationName:"slide-from-bottom, fade-in",animationDuration:"moderate"},_closed:{animationName:"slide-to-bottom, fade-out",animationDuration:"faster"}},separator:{width:"1px",height:"5",bg:"border"},selectionTrigger:{display:"inline-flex",alignItems:"center",gap:"2",alignSelf:"stretch",textStyle:"sm",px:"4",py:"1",borderRadius:"l2",borderWidth:"1px",borderStyle:"dashed"}}}),$E=ge({slots:dE.keys(),className:"chakra-alert",base:{root:{width:"full",display:"flex",alignItems:"flex-start",position:"relative",borderRadius:"l3"},title:{fontWeight:"medium"},description:{display:"inline"},indicator:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:"0",width:"1em",height:"1em",_icon:{boxSize:"full"}},content:{display:"flex",flex:"1",gap:"1"}},variants:{status:{info:{root:{colorPalette:"blue"}},warning:{root:{colorPalette:"orange"}},success:{root:{colorPalette:"green"}},error:{root:{colorPalette:"red"}},neutral:{root:{colorPalette:"gray"}}},inline:{true:{content:{display:"inline-flex",flexDirection:"row",alignItems:"center"}},false:{content:{display:"flex",flexDirection:"column"}}},variant:{subtle:{root:{bg:"colorPalette.subtle",color:"colorPalette.fg"}},surface:{root:{bg:"colorPalette.subtle",color:"colorPalette.fg",shadow:"inset 0 0 0px 1px var(--shadow-color)",shadowColor:"colorPalette.muted"},indicator:{color:"colorPalette.fg"}},outline:{root:{color:"colorPalette.fg",shadow:"inset 0 0 0px 1px var(--shadow-color)",shadowColor:"colorPalette.muted"},indicator:{color:"colorPalette.fg"}},solid:{root:{bg:"colorPalette.solid",color:"colorPalette.contrast"},indicator:{color:"colorPalette.contrast"}}},size:{sm:{root:{gap:"2",px:"3",py:"3",textStyle:"xs"},indicator:{textStyle:"lg"}},md:{root:{gap:"3",px:"4",py:"4",textStyle:"sm"},indicator:{textStyle:"xl"}},lg:{root:{gap:"3",px:"4",py:"4",textStyle:"md"},indicator:{textStyle:"2xl"}}}},defaultVariants:{status:"info",variant:"subtle",size:"md",inline:!1}}),YE=ge({slots:Gy.keys(),className:"chakra-avatar",base:{root:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:"medium",position:"relative",verticalAlign:"top",flexShrink:"0",userSelect:"none",width:"var(--avatar-size)",height:"var(--avatar-size)",fontSize:"var(--avatar-font-size)",borderRadius:"var(--avatar-radius)","&[data-group-item]":{borderWidth:"2px",borderColor:"bg"}},image:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"var(--avatar-radius)"},fallback:{lineHeight:"1",textTransform:"uppercase",fontWeight:"medium",fontSize:"var(--avatar-font-size)",borderRadius:"var(--avatar-radius)"}},variants:{size:{full:{root:{"--avatar-size":"100%","--avatar-font-size":"100%"}},"2xs":{root:{"--avatar-font-size":"fontSizes.2xs","--avatar-size":"sizes.6"}},xs:{root:{"--avatar-font-size":"fontSizes.xs","--avatar-size":"sizes.8"}},sm:{root:{"--avatar-font-size":"fontSizes.sm","--avatar-size":"sizes.9"}},md:{root:{"--avatar-font-size":"fontSizes.md","--avatar-size":"sizes.10"}},lg:{root:{"--avatar-font-size":"fontSizes.md","--avatar-size":"sizes.11"}},xl:{root:{"--avatar-font-size":"fontSizes.lg","--avatar-size":"sizes.12"}},"2xl":{root:{"--avatar-font-size":"fontSizes.xl","--avatar-size":"sizes.16"}}},variant:{solid:{root:{bg:"colorPalette.solid",color:"colorPalette.contrast"}},subtle:{root:{bg:"colorPalette.muted",color:"colorPalette.fg"}},outline:{root:{color:"colorPalette.fg",borderWidth:"1px",borderColor:"colorPalette.muted"}}},shape:{square:{},rounded:{root:{"--avatar-radius":"radii.l3"}},full:{root:{"--avatar-radius":"radii.full"}}},borderless:{true:{root:{"&[data-group-item]":{borderWidth:"0px"}}}}},defaultVariants:{size:"md",shape:"full",variant:"subtle"}}),KE=ge({className:"chakra-blockquote",slots:gE.keys(),base:{root:{position:"relative",display:"flex",flexDirection:"column",gap:"2"},caption:{textStyle:"sm",color:"fg.muted"},icon:{boxSize:"5"}},variants:{justify:{start:{root:{alignItems:"flex-start",textAlign:"start"}},center:{root:{alignItems:"center",textAlign:"center"}},end:{root:{alignItems:"flex-end",textAlign:"end"}}},variant:{subtle:{root:{paddingX:"5",borderStartWidth:"4px",borderStartColor:"colorPalette.muted"},icon:{color:"colorPalette.fg"}},solid:{root:{paddingX:"5",borderStartWidth:"4px",borderStartColor:"colorPalette.solid"},icon:{color:"colorPalette.solid"}},plain:{root:{paddingX:"5"},icon:{color:"colorPalette.solid"}}}},defaultVariants:{variant:"subtle",justify:"start"}}),XE=ge({className:"chakra-breadcrumb",slots:fE.keys(),base:{list:{display:"flex",alignItems:"center",wordBreak:"break-word",color:"fg.muted",listStyle:"none"},link:{outline:"0",textDecoration:"none",borderRadius:"l1",focusRing:"outside",display:"inline-flex",alignItems:"center",gap:"2"},item:{display:"inline-flex",alignItems:"center"},separator:{color:"fg.muted",opacity:"0.8",_icon:{boxSize:"1em"},_rtl:{rotate:"180deg"}},ellipsis:{display:"inline-flex",alignItems:"center",justifyContent:"center",_icon:{boxSize:"1em"}}},variants:{variant:{underline:{link:{color:"colorPalette.fg",textDecoration:"underline",textUnderlineOffset:"0.2em",textDecorationColor:"colorPalette.muted"},currentLink:{color:"colorPalette.fg"}},plain:{link:{color:"fg.muted",_hover:{color:"fg"}},currentLink:{color:"fg"}}},size:{sm:{list:{gap:"1",textStyle:"xs"}},md:{list:{gap:"1.5",textStyle:"sm"}},lg:{list:{gap:"2",textStyle:"md"}}}},defaultVariants:{variant:"plain",size:"md"}}),ZE=ge({className:"chakra-card",slots:mE.keys(),base:{root:{display:"flex",flexDirection:"column",position:"relative",minWidth:"0",wordWrap:"break-word",borderRadius:"l3",color:"fg",textAlign:"start"},title:{fontWeight:"semibold"},description:{color:"fg.muted",fontSize:"sm"},header:{paddingInline:"var(--card-padding)",paddingTop:"var(--card-padding)",display:"flex",flexDirection:"column",gap:"1.5"},body:{padding:"var(--card-padding)",flex:"1",display:"flex",flexDirection:"column"},footer:{display:"flex",alignItems:"center",gap:"2",paddingInline:"var(--card-padding)",paddingBottom:"var(--card-padding)"}},variants:{size:{sm:{root:{"--card-padding":"spacing.4"},title:{textStyle:"md"}},md:{root:{"--card-padding":"spacing.6"},title:{textStyle:"lg"}},lg:{root:{"--card-padding":"spacing.7"},title:{textStyle:"xl"}}},variant:{elevated:{root:{bg:"bg.panel",boxShadow:"md"}},outline:{root:{bg:"bg.panel",borderWidth:"1px",borderColor:"border"}},subtle:{root:{bg:"bg.muted"}}}},defaultVariants:{variant:"outline",size:"md"}}),QE=ge({slots:xC.keys(),className:"chakra-checkbox",base:{root:{display:"inline-flex",gap:"2",alignItems:"center",verticalAlign:"top",position:"relative"},control:ht.base,label:{fontWeight:"medium",userSelect:"none",_disabled:{opacity:"0.5"}}},variants:{size:{xs:{root:{gap:"1.5"},label:{textStyle:"xs"},control:ht.variants?.size?.xs},sm:{root:{gap:"2"},label:{textStyle:"sm"},control:ht.variants?.size?.sm},md:{root:{gap:"2.5"},label:{textStyle:"sm"},control:ht.variants?.size?.md},lg:{root:{gap:"3"},label:{textStyle:"md"},control:ht.variants?.size?.lg}},variant:{outline:{control:ht.variants?.variant?.outline},solid:{control:ht.variants?.variant?.solid},subtle:{control:ht.variants?.variant?.subtle}}},defaultVariants:{variant:"solid",size:"md"}}),JE=ge({slots:hE.keys(),className:"chakra-checkbox-card",base:{root:{display:"flex",flexDirection:"column",userSelect:"none",position:"relative",borderRadius:"l2",flex:"1",focusVisibleRing:"outside",_disabled:{opacity:"0.8"},_invalid:{outline:"2px solid",outlineColor:"border.error"}},control:{display:"inline-flex",flex:"1",position:"relative",borderRadius:"inherit",justifyContent:"var(--checkbox-card-justify)",alignItems:"var(--checkbox-card-align)"},label:{fontWeight:"medium",display:"flex",alignItems:"center",gap:"2",flex:"1",_disabled:{opacity:"0.5"}},description:{opacity:"0.64",textStyle:"sm",_disabled:{opacity:"0.5"}},addon:{_disabled:{opacity:"0.5"}},indicator:ht.base,content:{display:"flex",flexDirection:"column",flex:"1",gap:"1",justifyContent:"var(--checkbox-card-justify)",alignItems:"var(--checkbox-card-align)"}},variants:{size:{sm:{root:{textStyle:"sm"},control:{padding:"3",gap:"1.5"},addon:{px:"3",py:"1.5",borderTopWidth:"1px"},indicator:ht.variants?.size.sm},md:{root:{textStyle:"sm"},control:{padding:"4",gap:"2.5"},addon:{px:"4",py:"2",borderTopWidth:"1px"},indicator:ht.variants?.size.md},lg:{root:{textStyle:"md"},control:{padding:"4",gap:"3.5"},addon:{px:"4",py:"2",borderTopWidth:"1px"},indicator:ht.variants?.size.lg}},variant:{surface:{root:{borderWidth:"1px",borderColor:"border",_checked:{bg:"colorPalette.subtle",color:"colorPalette.fg",borderColor:"colorPalette.muted"},_disabled:{bg:"bg.muted"}},indicator:ht.variants?.variant.solid},subtle:{root:{bg:"bg.muted"},control:{_checked:{bg:"colorPalette.muted",color:"colorPalette.fg"}},indicator:ht.variants?.variant.plain},outline:{root:{borderWidth:"1px",borderColor:"border",_checked:{boxShadow:"0 0 0 1px var(--shadow-color)",boxShadowColor:"colorPalette.solid",borderColor:"colorPalette.solid"}},indicator:ht.variants?.variant.solid},solid:{root:{borderWidth:"1px",_checked:{bg:"colorPalette.solid",color:"colorPalette.contrast",borderColor:"colorPalette.solid"}},indicator:ht.variants?.variant.inverted}},justify:{start:{root:{"--checkbox-card-justify":"flex-start"}},end:{root:{"--checkbox-card-justify":"flex-end"}},center:{root:{"--checkbox-card-justify":"center"}}},align:{start:{root:{"--checkbox-card-align":"flex-start"},content:{textAlign:"start"}},end:{root:{"--checkbox-card-align":"flex-end"},content:{textAlign:"end"}},center:{root:{"--checkbox-card-align":"center"},content:{textAlign:"center"}}},orientation:{vertical:{control:{flexDirection:"column"}},horizontal:{control:{flexDirection:"row"}}}},defaultVariants:{size:"md",variant:"outline",align:"start",orientation:"horizontal"}}),e7=ge({slots:HE.keys(),className:"code-block",base:{root:{colorPalette:"gray",rounded:"var(--code-block-radius)",overflow:"hidden",bg:"bg",color:"fg",borderWidth:"1px","--code-block-max-height":"320px","--code-block-bg":"colors.bg","--code-block-fg":"colors.fg","--code-block-obscured-opacity":"0.5","--code-block-obscured-blur":"1px","--code-block-line-number-width":"sizes.3","--code-block-line-number-margin":"spacing.4","--code-block-highlight-bg":"{colors.teal.focusRing/20}","--code-block-highlight-border":"colors.teal.focusRing","--code-block-highlight-added-bg":"{colors.green.focusRing/20}","--code-block-highlight-added-border":"colors.green.focusRing","--code-block-highlight-removed-bg":"{colors.red.focusRing/20}","--code-block-highlight-removed-border":"colors.red.focusRing"},header:{display:"flex",alignItems:"center",gap:"2",position:"relative",px:"var(--code-block-padding)",minH:"var(--code-block-header-height)",mb:"calc(var(--code-block-padding) / 2 * -1)"},title:{display:"inline-flex",alignItems:"center",gap:"1.5",flex:"1",color:"fg.muted"},control:{gap:"1.5",display:"inline-flex",alignItems:"center"},footer:{display:"flex",alignItems:"center",justifyContent:"center",gap:"2",px:"var(--code-block-padding)",minH:"var(--code-block-header-height)"},content:{position:"relative",colorScheme:"dark",overflow:"hidden",borderBottomRadius:"var(--code-block-radius)",maxHeight:"var(--code-block-max-height)","& ::selection":{bg:"blue.500/40"},_expanded:{maxHeight:"unset"}},overlay:{"--bg":"{colors.black/50}",display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"4",bgImage:"linear-gradient(0deg,var(--bg) 25%,transparent 100%)",color:"white",minH:"5rem",pos:"absolute",bottom:"0",insetInline:"0",zIndex:"1",fontWeight:"medium",_expanded:{display:"none"}},code:{fontFamily:"mono",lineHeight:"tall",whiteSpace:"pre",counterReset:"line 0"},codeText:{px:"var(--code-block-padding)",py:"var(--code-block-padding)",position:"relative",display:"block",width:"100%","&[data-has-focused]":{"& [data-line]:not([data-focused])":{transitionProperty:"opacity, filter",transitionDuration:"moderate",transitionTimingFunction:"ease-in-out",opacity:"var(--code-block-obscured-opacity)",filter:"blur(var(--code-block-obscured-blur))"},"&:hover":{"--code-block-obscured-opacity":"1","--code-block-obscured-blur":"0px"}},"&[data-has-line-numbers][data-plaintext]":{paddingInlineStart:"calc(var(--code-block-line-number-width) + var(--code-block-line-number-margin) + var(--code-block-padding))"},"& [data-line]":{position:"relative","--highlight-bg":"var(--code-block-highlight-bg)","--highlight-border":"var(--code-block-highlight-border)","&[data-highlight], &[data-diff]":{display:"inline-block",width:"full","&:after":{content:"''",display:"block",position:"absolute",insetStart:"calc(var(--code-block-padding) * -1)",insetEnd:"0px",width:"calc(100% + var(--code-block-padding) * 2)",height:"100%",bg:"var(--highlight-bg)",borderStartWidth:"2px",borderStartColor:"var(--highlight-border)"}},"&[data-diff='added']":{"--highlight-bg":"var(--code-block-highlight-added-bg)","--highlight-border":"var(--code-block-highlight-added-border)"},"&[data-diff='removed']":{"--highlight-bg":"var(--code-block-highlight-removed-bg)","--highlight-border":"var(--code-block-highlight-removed-border)"}},"&[data-word-wrap]":{"&[data-plaintext], & [data-line]":{whiteSpace:"pre-wrap",wordBreak:"break-all"}},"&[data-has-line-numbers]":{"--content":"counter(line)","& [data-line]:before":{content:"var(--content)",counterIncrement:"line",width:"var(--code-block-line-number-width)",marginRight:"var(--code-block-line-number-margin)",display:"inline-block",textAlign:"end",userSelect:"none",opacity:.4},"& [data-diff='added']:before":{content:"'+'"},"& [data-diff='removed']:before":{content:"'-'"}}}},variants:{size:{sm:{root:{"--code-block-padding":"spacing.4","--code-block-radius":"radii.md","--code-block-header-height":"sizes.8"},title:{textStyle:"xs"},code:{fontSize:"xs"}},md:{root:{"--code-block-padding":"spacing.4","--code-block-radius":"radii.lg","--code-block-header-height":"sizes.10"},title:{textStyle:"xs"},code:{fontSize:"sm"}},lg:{root:{"--code-block-padding":"spacing.5","--code-block-radius":"radii.xl","--code-block-header-height":"sizes.12"},title:{textStyle:"sm"},code:{fontSize:"sm"}}}},defaultVariants:{size:"md"}}),t7=ge({slots:Oy.keys(),className:"chakra-collapsible",base:{content:{overflow:"hidden",_open:{animationName:"expand-height, fade-in",animationDuration:"moderate"},_closed:{animationName:"collapse-height, fade-out",animationDuration:"moderate"}}}}),a7=ge({className:"colorPicker",slots:jE.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"1.5"},label:{color:"fg",fontWeight:"medium",textStyle:"sm",_disabled:{opacity:"0.5"}},valueText:{textAlign:"start"},control:{display:"flex",alignItems:"center",flexDirection:"row",gap:"2",position:"relative"},swatchTrigger:{display:"flex",alignItems:"center",justifyContent:"center"},trigger:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",flexShrink:"0",gap:"2",textStyle:"sm",minH:"var(--input-height)",minW:"var(--input-height)",px:"1",rounded:"l2",_disabled:{opacity:"0.5"},"--focus-color":"colors.colorPalette.focusRing","&:focus-visible":{borderColor:"var(--focus-color)",outline:"1px solid var(--focus-color)"},"&[data-fit-content]":{"--input-height":"unset",px:"0",border:"0"}},content:{display:"flex",flexDirection:"column",bg:"bg.panel",borderRadius:"l3",boxShadow:"lg",width:"64",p:"4",gap:"3",zIndex:"dropdown",_open:{animationStyle:"slide-fade-in",animationDuration:"fast"},_closed:{animationStyle:"slide-fade-out",animationDuration:"faster"}},area:{height:"180px",borderRadius:"l2",overflow:"hidden"},areaThumb:{borderRadius:"full",height:"var(--thumb-size)",width:"var(--thumb-size)",borderWidth:"2px",borderColor:"white",shadow:"sm",focusVisibleRing:"mixed",focusRingColor:"white"},areaBackground:{height:"full"},channelSlider:{borderRadius:"l2",flex:"1"},channelSliderTrack:{height:"var(--slider-height)",borderRadius:"inherit",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"},channelText:{textStyle:"xs",color:"fg.muted",fontWeight:"medium",textTransform:"capitalize"},swatchGroup:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"2"},swatch:{...l1.base,borderRadius:"l1"},swatchIndicator:{color:"white",rounded:"full"},channelSliderThumb:{borderRadius:"full",height:"var(--thumb-size)",width:"var(--thumb-size)",borderWidth:"2px",borderColor:"white",shadow:"sm",transform:"translate(-50%, -50%)",focusVisibleRing:"outside",focusRingOffset:"1px"},channelInput:{...et.base,"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0}},formatSelect:{textStyle:"xs",textTransform:"uppercase",borderWidth:"1px",minH:"6",focusRing:"inside",rounded:"l2"},transparencyGrid:{borderRadius:"l2"},view:{display:"flex",flexDirection:"column",gap:"2"}},variants:{size:{"2xs":{channelInput:et.variants?.size?.["2xs"],swatch:{"--swatch-size":"sizes.4.5"},trigger:{"--input-height":"sizes.7"},area:{"--thumb-size":"sizes.3"},channelSlider:{"--slider-height":"sizes.3","--thumb-size":"sizes.3"}},xs:{channelInput:et.variants?.size?.xs,swatch:{"--swatch-size":"sizes.5"},trigger:{"--input-height":"sizes.8"},area:{"--thumb-size":"sizes.3.5"},channelSlider:{"--slider-height":"sizes.3.5","--thumb-size":"sizes.3.5"}},sm:{channelInput:et.variants?.size?.sm,swatch:{"--swatch-size":"sizes.6"},trigger:{"--input-height":"sizes.9"},area:{"--thumb-size":"sizes.3.5"},channelSlider:{"--slider-height":"sizes.3.5","--thumb-size":"sizes.3.5"}},md:{channelInput:et.variants?.size?.md,swatch:{"--swatch-size":"sizes.7"},trigger:{"--input-height":"sizes.10"},area:{"--thumb-size":"sizes.3.5"},channelSlider:{"--slider-height":"sizes.3.5","--thumb-size":"sizes.3.5"}},lg:{channelInput:et.variants?.size?.lg,swatch:{"--swatch-size":"sizes.7"},trigger:{"--input-height":"sizes.11"},area:{"--thumb-size":"sizes.3.5"},channelSlider:{"--slider-height":"sizes.3.5","--thumb-size":"sizes.3.5"}},xl:{channelInput:et.variants?.size?.xl,swatch:{"--swatch-size":"sizes.8"},trigger:{"--input-height":"sizes.12"},area:{"--thumb-size":"sizes.3.5"},channelSlider:{"--slider-height":"sizes.3.5","--thumb-size":"sizes.3.5"}},"2xl":{channelInput:et.variants?.size?.["2xl"],swatch:{"--swatch-size":"sizes.10"},trigger:{"--input-height":"sizes.16"},area:{"--thumb-size":"sizes.3.5"},channelSlider:{"--slider-height":"sizes.3.5","--thumb-size":"sizes.3.5"}}},variant:{outline:{channelInput:et.variants?.variant?.outline,trigger:{borderWidth:"1px"}},subtle:{channelInput:et.variants?.variant?.subtle,trigger:{borderWidth:"1px",borderColor:"transparent",bg:"bg.muted"}}}},defaultVariants:{size:"md",variant:"outline"}}),n7=ge({className:"chakra-combobox",slots:NE.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"1.5",width:"full"},label:{fontWeight:"medium",userSelect:"none",textStyle:"sm",_disabled:{layerStyle:"disabled"}},input:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"bg.panel",width:"full",minH:"var(--combobox-input-height)",px:"var(--combobox-input-padding-x)","--input-height":"var(--combobox-input-height)",borderRadius:"l2",outline:0,userSelect:"none",textAlign:"start",_placeholderShown:{color:"fg.muted"},_disabled:{layerStyle:"disabled"},"--focus-color":"colors.colorPalette.focusRing","--error-color":"colors.border.error",_invalid:{focusRingColor:"var(--error-color)",borderColor:"var(--error-color)"}},trigger:{display:"inline-flex",alignItems:"center",justifyContent:"center","--input-height":"var(--combobox-input-height)"},clearTrigger:{color:"fg.muted",pointerEvents:"auto",focusVisibleRing:"inside",focusRingWidth:"2px",rounded:"l1"},control:{pos:"relative"},indicatorGroup:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1",pos:"absolute",insetEnd:"0",top:"0",bottom:"0",px:"var(--combobox-input-padding-x)",_icon:{boxSize:"var(--combobox-indicator-size)"},"[data-disabled] &":{opacity:.5}},content:{background:"bg.panel",display:"flex",flexDirection:"column",zIndex:"dropdown",borderRadius:"l2",outline:0,maxH:"96",overflowY:"auto",boxShadow:"md",_open:{animationStyle:"slide-fade-in",animationDuration:"fast"},_closed:{animationStyle:"slide-fade-out",animationDuration:"0s"},"&[data-empty]:not(:has([data-scope=combobox][data-part=empty]))":{opacity:0}},item:{position:"relative",userSelect:"none",display:"flex",alignItems:"center",gap:"2",py:"var(--combobox-item-padding-y)",px:"var(--combobox-item-padding-x)",cursor:"option",justifyContent:"space-between",flex:"1",textAlign:"start",borderRadius:"l1",_highlighted:{bg:"bg.emphasized/60"},_disabled:{pointerEvents:"none",opacity:"0.5"},_icon:{boxSize:"var(--combobox-indicator-size)"}},empty:{py:"var(--combobox-item-padding-y)",px:"var(--combobox-item-padding-x)"},itemText:{flex:"1"},itemGroup:{pb:"var(--combobox-item-padding-y)",_last:{pb:"0"}},itemGroupLabel:{fontWeight:"medium",py:"var(--combobox-item-padding-y)",px:"var(--combobox-item-padding-x)"}},variants:{variant:{outline:{input:{bg:"transparent",borderWidth:"1px",borderColor:"border",focusVisibleRing:"inside"}},subtle:{input:{borderWidth:"1px",borderColor:"transparent",bg:"bg.muted",focusVisibleRing:"inside"}},flushed:{input:{bg:"transparent",borderBottomWidth:"1px",borderBottomColor:"border",borderRadius:"0",px:"0",_focusVisible:{borderColor:"var(--focus-color)",boxShadow:"0px 1px 0px 0px var(--focus-color)"}},indicatorGroup:{px:"0"}}},size:{xs:{root:{"--combobox-input-height":"sizes.8","--combobox-input-padding-x":"spacing.2","--combobox-indicator-size":"sizes.3.5"},input:{textStyle:"xs"},content:{"--combobox-item-padding-x":"spacing.1.5","--combobox-item-padding-y":"spacing.1","--combobox-indicator-size":"sizes.3.5",p:"1",textStyle:"xs"},trigger:{textStyle:"xs",gap:"1"}},sm:{root:{"--combobox-input-height":"sizes.9","--combobox-input-padding-x":"spacing.2.5","--combobox-indicator-size":"sizes.4"},input:{textStyle:"sm"},content:{"--combobox-item-padding-x":"spacing.2","--combobox-item-padding-y":"spacing.1.5","--combobox-indicator-size":"sizes.4",p:"1",textStyle:"sm"},trigger:{textStyle:"sm",gap:"1"}},md:{root:{"--combobox-input-height":"sizes.10","--combobox-input-padding-x":"spacing.3","--combobox-indicator-size":"sizes.4"},input:{textStyle:"sm"},content:{"--combobox-item-padding-x":"spacing.2","--combobox-item-padding-y":"spacing.1.5","--combobox-indicator-size":"sizes.4",p:"1",textStyle:"sm"},itemIndicator:{display:"flex",alignItems:"center",justifyContent:"center"},trigger:{textStyle:"sm",gap:"2"}},lg:{root:{"--combobox-input-height":"sizes.12","--combobox-input-padding-x":"spacing.4","--combobox-indicator-size":"sizes.5"},input:{textStyle:"md"},content:{"--combobox-item-padding-y":"spacing.2","--combobox-item-padding-x":"spacing.3","--combobox-indicator-size":"sizes.5",p:"1.5",textStyle:"md"},trigger:{textStyle:"md",py:"3",gap:"2"}}}},defaultVariants:{size:"md",variant:"outline"}}),i7=ge({slots:pE.keys(),className:"chakra-data-list",base:{itemLabel:{display:"flex",alignItems:"center",gap:"1"},itemValue:{display:"flex",minWidth:"0",flex:"1"}},variants:{orientation:{horizontal:{root:{display:"flex",flexDirection:"column"},item:{display:"inline-flex",alignItems:"center",gap:"4"},itemLabel:{minWidth:"120px"}},vertical:{root:{display:"flex",flexDirection:"column"},item:{display:"flex",flexDirection:"column",gap:"1"}}},size:{sm:{root:{gap:"3"},item:{textStyle:"xs"}},md:{root:{gap:"4"},item:{textStyle:"sm"}},lg:{root:{gap:"5"},item:{textStyle:"md"}}},variant:{subtle:{itemLabel:{color:"fg.muted"}},bold:{itemLabel:{fontWeight:"medium"},itemValue:{color:"fg.muted"}}}},defaultVariants:{size:"md",orientation:"vertical",variant:"subtle"}}),o7=ge({slots:bE.keys(),className:"chakra-dialog",base:{backdrop:{bg:"blackAlpha.500",pos:"fixed",left:0,top:0,w:"100dvw",h:"100dvh",zIndex:"var(--z-index)",_open:{animationName:"fade-in",animationDuration:"slow"},_closed:{animationName:"fade-out",animationDuration:"moderate"}},positioner:{display:"flex",width:"100dvw",height:"100dvh",position:"fixed",left:0,top:0,"--dialog-z-index":"zIndex.modal",zIndex:"calc(var(--dialog-z-index) + var(--layer-index, 0))",justifyContent:"center",overscrollBehaviorY:"none"},content:{display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,borderRadius:"l3",textStyle:"sm",my:"var(--dialog-margin, var(--dialog-base-margin))","--dialog-z-index":"zIndex.modal",zIndex:"calc(var(--dialog-z-index) + var(--layer-index, 0))",bg:"bg.panel",boxShadow:"lg",_open:{animationDuration:"moderate"},_closed:{animationDuration:"faster"}},header:{display:"flex",gap:"2",flex:0,px:"6",pt:"6",pb:"4"},body:{flex:"1",px:"6",pt:"2",pb:"6"},footer:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"3",px:"6",pt:"2",pb:"4"},title:{textStyle:"lg",fontWeight:"semibold"},description:{color:"fg.muted"},closeTrigger:{pos:"absolute",top:"2",insetEnd:"2"}},variants:{placement:{center:{positioner:{alignItems:"center"},content:{"--dialog-base-margin":"auto",mx:"auto"}},top:{positioner:{alignItems:"flex-start"},content:{"--dialog-base-margin":"spacing.16",mx:"auto"}},bottom:{positioner:{alignItems:"flex-end"},content:{"--dialog-base-margin":"spacing.16",mx:"auto"}}},scrollBehavior:{inside:{positioner:{overflow:"hidden"},content:{maxH:"calc(100% - 7.5rem)"},body:{overflow:"auto"}},outside:{positioner:{overflow:"auto",pointerEvents:"auto"}}},size:{xs:{content:{maxW:"sm"}},sm:{content:{maxW:"md"}},md:{content:{maxW:"lg"}},lg:{content:{maxW:"2xl"}},xl:{content:{maxW:"4xl"}},cover:{positioner:{padding:"10"},content:{width:"100%",height:"100%","--dialog-margin":"0"}},full:{content:{maxW:"100dvw",minH:"100dvh","--dialog-margin":"0",borderRadius:"0"}}},motionPreset:{scale:{content:{_open:{animationName:"scale-in, fade-in"},_closed:{animationName:"scale-out, fade-out"}}},"slide-in-bottom":{content:{_open:{animationName:"slide-from-bottom, fade-in"},_closed:{animationName:"slide-to-bottom, fade-out"}}},"slide-in-top":{content:{_open:{animationName:"slide-from-top, fade-in"},_closed:{animationName:"slide-to-top, fade-out"}}},"slide-in-left":{content:{_open:{animationName:"slide-from-left, fade-in"},_closed:{animationName:"slide-to-left, fade-out"}}},"slide-in-right":{content:{_open:{animationName:"slide-from-right, fade-in"},_closed:{animationName:"slide-to-right, fade-out"}}},none:{}}},defaultVariants:{size:"md",scrollBehavior:"outside",placement:"top",motionPreset:"scale"}}),l7=ge({slots:yE.keys(),className:"chakra-drawer",base:{backdrop:{bg:"blackAlpha.500",pos:"fixed",insetInlineStart:0,top:0,w:"100vw",h:"100dvh",zIndex:"overlay",_open:{animationName:"fade-in",animationDuration:"slow"},_closed:{animationName:"fade-out",animationDuration:"moderate"}},positioner:{display:"flex",width:"100vw",height:"100dvh",position:"fixed",insetInlineStart:0,top:0,zIndex:"modal",overscrollBehaviorY:"none"},content:{display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,zIndex:"modal",textStyle:"sm",maxH:"100dvh",color:"inherit",bg:"bg.panel",boxShadow:"lg",_open:{animationDuration:"slowest",animationTimingFunction:"ease-in-smooth"},_closed:{animationDuration:"slower",animationTimingFunction:"ease-in-smooth"}},header:{display:"flex",alignItems:"center",gap:"2",flex:0,px:"6",pt:"6",pb:"4"},body:{px:"6",py:"2",flex:"1",overflow:"auto"},footer:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"3",px:"6",pt:"2",pb:"4"},title:{flex:"1",textStyle:"lg",fontWeight:"semibold"},description:{color:"fg.muted"},closeTrigger:{pos:"absolute",top:"3",insetEnd:"2"}},variants:{size:{xs:{content:{maxW:"xs"}},sm:{content:{maxW:"md"}},md:{content:{maxW:"lg"}},lg:{content:{maxW:"2xl"}},xl:{content:{maxW:"4xl"}},full:{content:{maxW:"100vw",h:"100dvh"}}},placement:{start:{positioner:{justifyContent:"flex-start",alignItems:"stretch"},content:{_open:{animationName:{base:"slide-from-left-full, fade-in",_rtl:"slide-from-right-full, fade-in"}},_closed:{animationName:{base:"slide-to-left-full, fade-out",_rtl:"slide-to-right-full, fade-out"}}}},end:{positioner:{justifyContent:"flex-end",alignItems:"stretch"},content:{_open:{animationName:{base:"slide-from-right-full, fade-in",_rtl:"slide-from-left-full, fade-in"}},_closed:{animationName:{base:"slide-to-right-full, fade-out",_rtl:"slide-to-left-full, fade-out"}}}},top:{positioner:{justifyContent:"stretch",alignItems:"flex-start"},content:{maxW:"100%",_open:{animationName:"slide-from-top-full, fade-in"},_closed:{animationName:"slide-to-top-full, fade-out"}}},bottom:{positioner:{justifyContent:"stretch",alignItems:"flex-end"},content:{maxW:"100%",_open:{animationName:"slide-from-bottom-full, fade-in"},_closed:{animationName:"slide-to-bottom-full, fade-out"}}}},contained:{true:{positioner:{padding:"4"},content:{borderRadius:"l3"}}}},defaultVariants:{size:"xs",placement:"end"}}),I0=xo({fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent",borderRadius:"l2"}),r7=ge({slots:vE.keys(),className:"chakra-editable",base:{root:{display:"inline-flex",alignItems:"center",position:"relative",gap:"1.5",width:"full"},preview:{...I0,py:"1",px:"1",display:"inline-flex",alignItems:"center",transitionProperty:"common",transitionDuration:"moderate",cursor:"text",_hover:{bg:"bg.muted"},_disabled:{userSelect:"none"}},input:{...I0,outline:"0",py:"1",px:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",focusVisibleRing:"inside",focusRingWidth:"2px",_placeholder:{opacity:.6}},control:{display:"inline-flex",alignItems:"center",gap:"1.5"}},variants:{size:{sm:{root:{textStyle:"sm"},preview:{minH:"8"},input:{minH:"8"}},md:{root:{textStyle:"sm"},preview:{minH:"9"},input:{minH:"9"}},lg:{root:{textStyle:"md"},preview:{minH:"10"},input:{minH:"10"}}}},defaultVariants:{size:"md"}}),s7=ge({slots:xE.keys(),className:"chakra-empty-state",base:{root:{width:"full"},content:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},indicator:{display:"flex",alignItems:"center",justifyContent:"center",color:"fg.subtle",_icon:{boxSize:"1em"}},title:{fontWeight:"semibold"},description:{textStyle:"sm",color:"fg.muted"}},variants:{size:{sm:{root:{px:"4",py:"6"},title:{textStyle:"md"},content:{gap:"4"},indicator:{textStyle:"2xl"}},md:{root:{px:"8",py:"12"},title:{textStyle:"lg"},content:{gap:"6"},indicator:{textStyle:"4xl"}},lg:{root:{px:"12",py:"16"},title:{textStyle:"xl"},content:{gap:"8"},indicator:{textStyle:"6xl"}}}},defaultVariants:{size:"md"}}),u7=ge({className:"chakra-field",slots:SE.keys(),base:{requiredIndicator:{color:"fg.error",lineHeight:"1"},root:{display:"flex",width:"100%",position:"relative",gap:"1.5"},label:{display:"flex",alignItems:"center",textAlign:"start",textStyle:"sm",fontWeight:"medium",gap:"1",userSelect:"none",_disabled:{opacity:"0.5"}},errorText:{display:"inline-flex",alignItems:"center",fontWeight:"medium",gap:"1",color:"fg.error",textStyle:"xs"},helperText:{color:"fg.muted",textStyle:"xs"}},variants:{orientation:{vertical:{root:{flexDirection:"column",alignItems:"flex-start"}},horizontal:{root:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},label:{flex:"0 0 var(--field-label-width, 80px)"}}}},defaultVariants:{orientation:"vertical"}}),c7=ge({className:"fieldset",slots:wE.keys(),base:{root:{display:"flex",flexDirection:"column",width:"full"},content:{display:"flex",flexDirection:"column",width:"full"},legend:{color:"fg",fontWeight:"medium",_disabled:{opacity:"0.5"}},helperText:{color:"fg.muted",textStyle:"sm"},errorText:{display:"inline-flex",alignItems:"center",color:"fg.error",gap:"2",fontWeight:"medium",textStyle:"sm"}},variants:{size:{sm:{root:{spaceY:"2"},content:{gap:"1.5"},legend:{textStyle:"sm"}},md:{root:{spaceY:"4"},content:{gap:"4"},legend:{textStyle:"sm"}},lg:{root:{spaceY:"6"},content:{gap:"4"},legend:{textStyle:"md"}}}},defaultVariants:{size:"md"}}),d7=ge({className:"chakra-file-upload",slots:CE.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"4",width:"100%",alignItems:"flex-start"},label:{fontWeight:"medium",textStyle:"sm"},dropzone:{background:"bg",borderRadius:"l3",borderWidth:"2px",borderStyle:"dashed",display:"flex",alignItems:"center",flexDirection:"column",gap:"4",justifyContent:"center",minHeight:"2xs",px:"3",py:"2",transition:"backgrounds",focusVisibleRing:"outside",_hover:{bg:"bg.subtle"},_dragging:{bg:"colorPalette.subtle",borderStyle:"solid",borderColor:"colorPalette.solid"}},dropzoneContent:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"1",textStyle:"sm"},item:{pos:"relative",textStyle:"sm",animationName:"fade-in",animationDuration:"moderate",background:"bg",borderRadius:"l2",borderWidth:"1px",width:"100%",display:"flex",alignItems:"center",gap:"3",p:"4"},itemGroup:{width:"100%",display:"flex",flexDirection:"column",gap:"3",_empty:{display:"none"}},itemName:{color:"fg",fontWeight:"medium",lineClamp:"1"},itemContent:{display:"flex",flexDirection:"column",gap:"0.5",flex:"1"},itemSizeText:{color:"fg.muted",textStyle:"xs"},itemDeleteTrigger:{display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-start",boxSize:"5",p:"2px",color:"fg.muted",cursor:"button"},itemPreview:{color:"fg.muted",_icon:{boxSize:"4.5"}}},defaultVariants:{}}),f7=ge({className:"chakra-hover-card",slots:fv.keys(),base:{content:{position:"relative",display:"flex",flexDirection:"column",textStyle:"sm","--hovercard-bg":"colors.bg.panel",bg:"var(--hovercard-bg)",boxShadow:"lg",maxWidth:"80",borderRadius:"l3",zIndex:"popover",transformOrigin:"var(--transform-origin)",outline:"0",_open:{animationStyle:"slide-fade-in",animationDuration:"fast"},_closed:{animationStyle:"slide-fade-out",animationDuration:"faster"}},arrow:{"--arrow-size":"sizes.3","--arrow-background":"var(--hovercard-bg)"},arrowTip:{borderTopWidth:"0.5px",borderInlineStartWidth:"0.5px"}},variants:{size:{xs:{content:{padding:"3"}},sm:{content:{padding:"4"}},md:{content:{padding:"5"}},lg:{content:{padding:"6"}}}},defaultVariants:{size:"md"}}),g7=ge({className:"chakra-list",slots:EE.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"var(--list-gap)","& :where(ul, ol)":{marginTop:"var(--list-gap)"}},item:{whiteSpace:"normal",display:"list-item"},indicator:{marginEnd:"2",minHeight:"1lh",flexShrink:0,display:"inline-block",verticalAlign:"middle"}},variants:{variant:{marker:{root:{listStyle:"revert"},item:{_marker:{color:"fg.subtle"}}},plain:{item:{alignItems:"flex-start",display:"inline-flex"}}},align:{center:{item:{alignItems:"center"}},start:{item:{alignItems:"flex-start"}},end:{item:{alignItems:"flex-end"}}}},defaultVariants:{variant:"marker"}}),m7=ge({className:"chakra-listbox",slots:UE.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"1.5",width:"full"},content:{display:"flex",maxH:"96",p:"1",gap:"1",textStyle:"sm",outline:"none",scrollPadding:"1",_horizontal:{flexDirection:"row",overflowX:"auto"},_vertical:{flexDirection:"column",overflowY:"auto"},"--listbox-item-padding-x":"spacing.2","--listbox-item-padding-y":"spacing.1.5"},item:{position:"relative",userSelect:"none",display:"flex",alignItems:"center",gap:"2",cursor:"pointer",justifyContent:"space-between",flex:"1",textAlign:"start",borderRadius:"l1",py:"var(--listbox-item-padding-y)",px:"var(--listbox-item-padding-x)",_highlighted:{outline:"2px solid",outlineColor:"border.emphasized"},_disabled:{pointerEvents:"none",opacity:"0.5"}},empty:{py:"var(--listbox-item-padding-y)",px:"var(--listbox-item-padding-x)"},itemText:{flex:"1"},itemGroup:{mt:"1.5",_first:{mt:"0"}},itemGroupLabel:{py:"1.5",px:"2",fontWeight:"medium"},label:{fontWeight:"medium",userSelect:"none",textStyle:"sm",_disabled:{layerStyle:"disabled"}},valueText:{lineClamp:"1",maxW:"80%"},itemIndicator:{display:"flex",alignItems:"center",justifyContent:"center",_icon:{boxSize:"4"}}},variants:{variant:{subtle:{content:{bg:"bg.panel",borderWidth:"1px",borderRadius:"l2"},item:{_hover:{bg:"bg.emphasized/60"},_selected:{bg:"bg.muted"}}},solid:{content:{bg:"bg.panel",borderWidth:"1px",borderRadius:"l2"},item:{_selected:{bg:"colorPalette.solid",color:"colorPalette.contrast"}}},plain:{}}},defaultVariants:{variant:"subtle"}}),h7=ge({className:"chakra-menu",slots:OE.keys(),base:{content:{outline:0,bg:"bg.panel",boxShadow:"lg",color:"fg",maxHeight:"var(--available-height)","--menu-z-index":"zIndex.dropdown",zIndex:"calc(var(--menu-z-index) + var(--layer-index, 0))",borderRadius:"l2",overflow:"hidden",overflowY:"auto",_open:{animationStyle:"slide-fade-in",animationDuration:"fast"},_closed:{animationStyle:"slide-fade-out",animationDuration:"faster"}},item:{textDecoration:"none",color:"fg",userSelect:"none",borderRadius:"l1",width:"100%",display:"flex",cursor:"menuitem",alignItems:"center",textAlign:"start",position:"relative",flex:"0 0 auto",outline:0,_disabled:{layerStyle:"disabled"},"&[data-type]":{ps:"8"}},itemText:{flex:"1"},itemIndicator:{position:"absolute",insetStart:"2",transform:"translateY(-50%)",top:"50%"},itemGroupLabel:{px:"2",py:"1.5",fontWeight:"semibold",textStyle:"sm"},indicator:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:"0"},itemCommand:{opacity:"0.6",textStyle:"xs",ms:"auto",ps:"4",letterSpacing:"widest",fontFamily:"inherit"},separator:{height:"1px",bg:"bg.muted",my:"1",mx:"-1"}},variants:{variant:{subtle:{item:{_highlighted:{bg:"bg.emphasized/60"}}},solid:{item:{_highlighted:{bg:"colorPalette.solid",color:"colorPalette.contrast"}}}},size:{sm:{content:{minW:"8rem",padding:"1",scrollPadding:"1"},item:{gap:"1",textStyle:"xs",py:"1",px:"1.5"}},md:{content:{minW:"8rem",padding:"1.5",scrollPadding:"1.5"},item:{gap:"2",textStyle:"sm",py:"1.5",px:"2"}}}},defaultVariants:{size:"md",variant:"subtle"}}),_s=ge({className:"chakra-select",slots:_E.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"1.5",width:"full"},trigger:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"full",minH:"var(--select-trigger-height)","--input-height":"var(--select-trigger-height)",px:"var(--select-trigger-padding-x)",borderRadius:"l2",userSelect:"none",textAlign:"start",focusVisibleRing:"inside",_placeholderShown:{color:"fg.muted/80"},_disabled:{layerStyle:"disabled"},_invalid:{borderColor:"border.error"}},indicatorGroup:{display:"flex",alignItems:"center",gap:"1",pos:"absolute",insetEnd:"0",top:"0",bottom:"0",px:"var(--select-trigger-padding-x)",pointerEvents:"none"},indicator:{display:"flex",alignItems:"center",justifyContent:"center",color:{base:"fg.muted",_disabled:"fg.subtle",_invalid:"fg.error"}},content:{background:"bg.panel",display:"flex",flexDirection:"column",zIndex:"dropdown",borderRadius:"l2",outline:0,maxH:"96",overflowY:"auto",boxShadow:"md",_open:{animationStyle:"slide-fade-in",animationDuration:"fast"},_closed:{animationStyle:"slide-fade-out",animationDuration:"fastest"}},item:{position:"relative",userSelect:"none",display:"flex",alignItems:"center",gap:"2",cursor:"option",justifyContent:"space-between",flex:"1",textAlign:"start",borderRadius:"l1",_highlighted:{bg:"bg.emphasized/60"},_disabled:{pointerEvents:"none",opacity:"0.5"},_icon:{width:"4",height:"4"}},control:{pos:"relative"},itemText:{flex:"1"},itemGroup:{_first:{mt:"0"}},itemGroupLabel:{py:"1",fontWeight:"medium"},label:{fontWeight:"medium",userSelect:"none",textStyle:"sm",_disabled:{layerStyle:"disabled"}},valueText:{lineClamp:"1",maxW:"80%"},clearTrigger:{color:"fg.muted",pointerEvents:"auto",focusVisibleRing:"inside",focusRingWidth:"2px",rounded:"l1"}},variants:{variant:{outline:{trigger:{bg:"transparent",borderWidth:"1px",borderColor:"border",_expanded:{borderColor:"border.emphasized"}}},subtle:{trigger:{borderWidth:"1px",borderColor:"transparent",bg:"bg.muted"}}},size:{xs:{root:{"--select-trigger-height":"sizes.8","--select-trigger-padding-x":"spacing.2"},content:{p:"1",gap:"1",textStyle:"xs"},trigger:{textStyle:"xs",gap:"1"},item:{py:"1",px:"2"},itemGroupLabel:{py:"1",px:"2"},indicator:{_icon:{width:"3.5",height:"3.5"}}},sm:{root:{"--select-trigger-height":"sizes.9","--select-trigger-padding-x":"spacing.2.5"},content:{p:"1",textStyle:"sm"},trigger:{textStyle:"sm",gap:"1"},indicator:{_icon:{width:"4",height:"4"}},item:{py:"1",px:"1.5"},itemGroup:{mt:"1"},itemGroupLabel:{py:"1",px:"1.5"}},md:{root:{"--select-trigger-height":"sizes.10","--select-trigger-padding-x":"spacing.3"},content:{p:"1",textStyle:"sm"},itemGroup:{mt:"1.5"},item:{py:"1.5",px:"2"},itemIndicator:{display:"flex",alignItems:"center",justifyContent:"center"},itemGroupLabel:{py:"1.5",px:"2"},trigger:{textStyle:"sm",gap:"2"},indicator:{_icon:{width:"4",height:"4"}}},lg:{root:{"--select-trigger-height":"sizes.12","--select-trigger-padding-x":"spacing.4"},content:{p:"1.5",textStyle:"md"},itemGroup:{mt:"2"},item:{py:"2",px:"3"},itemGroupLabel:{py:"2",px:"3"},trigger:{textStyle:"md",py:"3",gap:"2"},indicator:{_icon:{width:"5",height:"5"}}}}},defaultVariants:{size:"md",variant:"outline"}}),p7=ge({className:"chakra-native-select",slots:TE.keys(),base:{root:{height:"fit-content",display:"flex",width:"100%",position:"relative"},field:{width:"100%",minWidth:"0",outline:"0",appearance:"none",borderRadius:"l2","--error-color":"colors.border.error","--input-height":"var(--select-field-height)",height:"var(--select-field-height)",_disabled:{layerStyle:"disabled"},_invalid:{focusRingColor:"var(--error-color)",borderColor:"var(--error-color)"},focusVisibleRing:"inside",lineHeight:"normal","& > option, & > optgroup":{bg:"bg"}},indicator:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)",height:"100%",color:"fg.muted",_disabled:{opacity:"0.5"},_invalid:{color:"fg.error"},_icon:{width:"1em",height:"1em"}}},variants:{variant:{outline:{field:_s.variants?.variant.outline.trigger},subtle:{field:_s.variants?.variant.subtle.trigger},plain:{field:{bg:"transparent",color:"fg",focusRingWidth:"2px"}}},size:{xs:{root:{"--select-field-height":"sizes.8"},field:{textStyle:"xs",ps:"2",pe:"6"},indicator:{textStyle:"sm",insetEnd:"1.5"}},sm:{root:{"--select-field-height":"sizes.9"},field:{textStyle:"sm",ps:"2.5",pe:"8"},indicator:{textStyle:"md",insetEnd:"2"}},md:{root:{"--select-field-height":"sizes.10"},field:{textStyle:"sm",ps:"3",pe:"8"},indicator:{textStyle:"lg",insetEnd:"2"}},lg:{root:{"--select-field-height":"sizes.11"},field:{textStyle:"md",ps:"4",pe:"8"},indicator:{textStyle:"xl",insetEnd:"3"}},xl:{root:{"--select-field-height":"sizes.12"},field:{textStyle:"md",ps:"4.5",pe:"10"},indicator:{textStyle:"xl",insetEnd:"3"}}}},defaultVariants:_s.defaultVariants});function gf(e,n){const i={};for(const l in e){const s=n(l,e[l]);i[s[0]]=s[1]}return i}const V0=xo({display:"flex",justifyContent:"center",alignItems:"center",flex:"1",userSelect:"none",cursor:"button",lineHeight:"1",color:"fg.muted","--stepper-base-radius":"radii.l1","--stepper-radius":"calc(var(--stepper-base-radius) + 1px)",_icon:{boxSize:"1em"},_disabled:{opacity:"0.5"},_hover:{bg:"bg.muted"},_active:{bg:"bg.emphasized"}}),b7=ge({className:"chakra-number-input",slots:Sv.keys(),base:{root:{position:"relative",zIndex:"0",isolation:"isolate"},input:{...et.base,verticalAlign:"top",pe:"calc(var(--stepper-width) + 0.5rem)"},control:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",width:"var(--stepper-width)",height:"calc(100% - 2px)",zIndex:"1",borderStartWidth:"1px",divideY:"1px"},incrementTrigger:{...V0,borderTopEndRadius:"var(--stepper-radius)"},decrementTrigger:{...V0,borderBottomEndRadius:"var(--stepper-radius)"},valueText:{fontWeight:"medium",fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}},variants:{size:{xs:{input:et.variants.size.xs,control:{fontSize:"2xs","--stepper-width":"sizes.4"}},sm:{input:et.variants.size.sm,control:{fontSize:"xs","--stepper-width":"sizes.5"}},md:{input:et.variants.size.md,control:{fontSize:"sm","--stepper-width":"sizes.6"}},lg:{input:et.variants.size.lg,control:{fontSize:"sm","--stepper-width":"sizes.6"}}},variant:gf(et.variants.variant,(e,n)=>[e,{input:n}])},defaultVariants:{size:"md",variant:"outline"}}),{variants:q0,defaultVariants:y7}=et,v7=ge({className:"chakra-pin-input",slots:Ev.keys(),base:{input:{...et.base,textAlign:"center",width:"var(--input-height)"},control:{display:"inline-flex",gap:"2",isolation:"isolate"}},variants:{size:gf(q0.size,(e,n)=>[e,{input:{...n,px:"1"}}]),variant:gf(q0.variant,(e,n)=>[e,{input:n}]),attached:{true:{control:{gap:"0",spaceX:"-1px"},input:{_notFirst:{borderStartRadius:"0"},_notLast:{borderEndRadius:"0"},_focusVisible:{zIndex:"1"}}}}},defaultVariants:y7}),x7=ge({className:"chakra-popover",slots:kE.keys(),base:{content:{position:"relative",display:"flex",flexDirection:"column",textStyle:"sm","--popover-bg":"colors.bg.panel",bg:"var(--popover-bg)",boxShadow:"lg","--popover-size":"sizes.xs","--popover-mobile-size":"calc(100dvw - 1rem)",width:{base:"min(var(--popover-mobile-size), var(--popover-size))",sm:"var(--popover-size)"},borderRadius:"l3","--popover-z-index":"zIndex.popover",zIndex:"calc(var(--popover-z-index) + var(--layer-index, 0))",outline:"0",transformOrigin:"var(--transform-origin)",maxHeight:"var(--available-height)",_open:{animationStyle:"scale-fade-in",animationDuration:"fast"},_closed:{animationStyle:"scale-fade-out",animationDuration:"faster"}},header:{paddingInline:"var(--popover-padding)",paddingTop:"var(--popover-padding)"},body:{padding:"var(--popover-padding)",flex:"1"},footer:{display:"flex",alignItems:"center",paddingInline:"var(--popover-padding)",paddingBottom:"var(--popover-padding)"},arrow:{"--arrow-size":"sizes.3","--arrow-background":"var(--popover-bg)"},arrowTip:{borderTopWidth:"1px",borderInlineStartWidth:"1px"}},variants:{size:{xs:{content:{"--popover-padding":"spacing.3"}},sm:{content:{"--popover-padding":"spacing.4"}},md:{content:{"--popover-padding":"spacing.5"}},lg:{content:{"--popover-padding":"spacing.6"}}}},defaultVariants:{size:"md"}}),S7=ge({slots:Kf.keys(),className:"chakra-progress",base:{root:{textStyle:"sm",position:"relative"},track:{overflow:"hidden",position:"relative"},range:{display:"flex",alignItems:"center",justifyContent:"center",transitionProperty:"width, height",transitionDuration:"slow",height:"100%",bgColor:"var(--track-color)",_indeterminate:{"--animate-from-x":"-40%","--animate-to-x":"100%",position:"absolute",willChange:"left",minWidth:"50%",animation:"position 1s ease infinite normal none running",backgroundImage:"linear-gradient(to right, transparent 0%, var(--track-color) 50%, transparent 100%)"}},label:{display:"inline-flex",fontWeight:"medium",alignItems:"center",gap:"1"},valueText:{textStyle:"xs",lineHeight:"1",fontWeight:"medium"}},variants:{variant:{outline:{track:{shadow:"inset",bgColor:"bg.muted"},range:{bgColor:"colorPalette.solid"}},subtle:{track:{bgColor:"colorPalette.muted"},range:{bgColor:"colorPalette.solid/72"}}},shape:{square:{},rounded:{track:{borderRadius:"l1"}},full:{track:{borderRadius:"full"}}},striped:{true:{range:{backgroundImage:"linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent)",backgroundSize:"var(--stripe-size) var(--stripe-size)","--stripe-size":"1rem","--stripe-color":{_light:"rgba(255, 255, 255, 0.3)",_dark:"rgba(0, 0, 0, 0.3)"}}}},animated:{true:{range:{"--animate-from":"var(--stripe-size)",animation:"bg-position 1s linear infinite"}}},size:{xs:{track:{h:"1.5"}},sm:{track:{h:"2"}},md:{track:{h:"2.5"}},lg:{track:{h:"3"}},xl:{track:{h:"4"}}}},defaultVariants:{variant:"outline",size:"md",shape:"rounded"}}),w7=ge({className:"chakra-progress-circle",slots:Kf.keys(),base:{root:{display:"inline-flex",textStyle:"sm",position:"relative"},circle:{_indeterminate:{animation:"spin 2s linear infinite"}},circleTrack:{"--track-color":"colors.colorPalette.muted",stroke:"var(--track-color)"},circleRange:{stroke:"colorPalette.solid",transitionProperty:"stroke-dashoffset, stroke-dasharray",transitionDuration:"0.6s",_indeterminate:{animation:"circular-progress 1.5s linear infinite"}},label:{display:"inline-flex"},valueText:{lineHeight:"1",fontWeight:"medium",letterSpacing:"tight",fontVariantNumeric:"tabular-nums"}},variants:{size:{xs:{circle:{"--size":"24px","--thickness":"4px"},valueText:{textStyle:"2xs"}},sm:{circle:{"--size":"32px","--thickness":"5px"},valueText:{textStyle:"2xs"}},md:{circle:{"--size":"40px","--thickness":"6px"},valueText:{textStyle:"xs"}},lg:{circle:{"--size":"48px","--thickness":"7px"},valueText:{textStyle:"sm"}},xl:{circle:{"--size":"64px","--thickness":"8px"},valueText:{textStyle:"sm"}}}},defaultVariants:{size:"md"}}),C7=ge({slots:Tv.keys(),className:"chakra-qr-code",base:{root:{position:"relative",width:"fit-content","--qr-code-overlay-size":"calc(var(--qr-code-size) / 3)"},frame:{width:"var(--qr-code-size)",height:"var(--qr-code-size)",fill:"currentColor"},overlay:{display:"flex",alignItems:"center",justifyContent:"center",width:"var(--qr-code-overlay-size)",height:"var(--qr-code-overlay-size)",padding:"1",bg:"bg",rounded:"l1"}},variants:{size:{"2xs":{root:{"--qr-code-size":"40px"}},xs:{root:{"--qr-code-size":"64px"}},sm:{root:{"--qr-code-size":"80px"}},md:{root:{"--qr-code-size":"120px"}},lg:{root:{"--qr-code-size":"160px"}},xl:{root:{"--qr-code-size":"200px"}},"2xl":{root:{"--qr-code-size":"240px"}},full:{root:{"--qr-code-size":"100%"}}}},defaultVariants:{size:"md"}}),E7=ge({className:"chakra-radio-card",slots:AE.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"1.5",isolation:"isolate"},item:{flex:"1",display:"flex",flexDirection:"column",userSelect:"none",position:"relative",borderRadius:"l2",_focus:{bg:"colorPalette.muted/20"},_disabled:{opacity:"0.8",borderColor:"border.disabled"},_checked:{zIndex:"1"}},label:{display:"inline-flex",fontWeight:"medium",textStyle:"sm",_disabled:{opacity:"0.5"}},itemText:{fontWeight:"medium",flex:"1"},itemDescription:{opacity:"0.64",textStyle:"sm"},itemControl:{display:"inline-flex",flex:"1",pos:"relative",rounded:"inherit",justifyContent:"var(--radio-card-justify)",alignItems:"var(--radio-card-align)",_disabled:{bg:"bg.muted"}},itemIndicator:pt.base,itemAddon:{roundedBottom:"inherit",_disabled:{color:"fg.muted"}},itemContent:{display:"flex",flexDirection:"column",flex:"1",gap:"1",justifyContent:"var(--radio-card-justify)",alignItems:"var(--radio-card-align)"}},variants:{size:{sm:{item:{textStyle:"sm"},itemControl:{padding:"3",gap:"1.5"},itemAddon:{px:"3",py:"1.5",borderTopWidth:"1px"},itemIndicator:pt.variants?.size.sm},md:{item:{textStyle:"sm"},itemControl:{padding:"4",gap:"2.5"},itemAddon:{px:"4",py:"2",borderTopWidth:"1px"},itemIndicator:pt.variants?.size.md},lg:{item:{textStyle:"md"},itemControl:{padding:"4",gap:"3.5"},itemAddon:{px:"4",py:"2",borderTopWidth:"1px"},itemIndicator:pt.variants?.size.lg}},variant:{surface:{item:{borderWidth:"1px",_checked:{bg:"colorPalette.subtle",color:"colorPalette.fg",borderColor:"colorPalette.muted"}},itemIndicator:pt.variants?.variant.solid},subtle:{item:{bg:"bg.muted"},itemControl:{_checked:{bg:"colorPalette.muted",color:"colorPalette.fg"}},itemIndicator:pt.variants?.variant.outline},outline:{item:{borderWidth:"1px",_checked:{boxShadow:"0 0 0 1px var(--shadow-color)",boxShadowColor:"colorPalette.solid",borderColor:"colorPalette.solid"}},itemIndicator:pt.variants?.variant.solid},solid:{item:{borderWidth:"1px",_checked:{bg:"colorPalette.solid",color:"colorPalette.contrast",borderColor:"colorPalette.solid"}},itemIndicator:pt.variants?.variant.inverted}},justify:{start:{item:{"--radio-card-justify":"flex-start"}},end:{item:{"--radio-card-justify":"flex-end"}},center:{item:{"--radio-card-justify":"center"}}},align:{start:{item:{"--radio-card-align":"flex-start"},itemControl:{textAlign:"start"}},end:{item:{"--radio-card-align":"flex-end"},itemControl:{textAlign:"end"}},center:{item:{"--radio-card-align":"center"},itemControl:{textAlign:"center"}}},orientation:{vertical:{itemControl:{flexDirection:"column"}},horizontal:{itemControl:{flexDirection:"row"}}}},defaultVariants:{size:"md",variant:"outline",align:"start",orientation:"horizontal"}}),O7=ge({className:"chakra-radio-group",slots:r1.keys(),base:{item:{display:"inline-flex",alignItems:"center",position:"relative",fontWeight:"medium",_disabled:{cursor:"disabled"}},itemControl:pt.base,label:{userSelect:"none",textStyle:"sm",_disabled:{opacity:"0.5"}}},variants:{variant:{outline:{itemControl:pt.variants?.variant?.outline},subtle:{itemControl:pt.variants?.variant?.subtle},solid:{itemControl:pt.variants?.variant?.solid}},size:{xs:{item:{textStyle:"xs",gap:"1.5"},itemControl:pt.variants?.size?.xs},sm:{item:{textStyle:"sm",gap:"2"},itemControl:pt.variants?.size?.sm},md:{item:{textStyle:"sm",gap:"2.5"},itemControl:pt.variants?.size?.md},lg:{item:{textStyle:"md",gap:"3"},itemControl:pt.variants?.size?.lg}}},defaultVariants:{size:"md",variant:"solid"}}),T7=ge({className:"chakra-rating-group",slots:RE.keys(),base:{root:{display:"inline-flex"},control:{display:"inline-flex",alignItems:"center"},item:{display:"inline-flex",alignItems:"center",justifyContent:"center",userSelect:"none"},itemIndicator:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"1em",height:"1em",position:"relative","--clip-path":{base:"inset(0 50% 0 0)",_rtl:"inset(0 0 0 50%)"},_icon:{stroke:"currentColor",width:"100%",height:"100%",display:"inline-block",flexShrink:0,position:"absolute",left:0,top:0},"& [data-bg]":{color:"bg.emphasized"},"& [data-fg]":{color:"transparent"},"&[data-highlighted]:not([data-half])":{"& [data-fg]":{color:"colorPalette.solid"}},"&[data-half]":{"& [data-fg]":{color:"colorPalette.solid",clipPath:"var(--clip-path)"}}}},variants:{size:{xs:{item:{textStyle:"sm"}},sm:{item:{textStyle:"md"}},md:{item:{textStyle:"xl"}},lg:{item:{textStyle:"2xl"}}}},defaultVariants:{size:"md"}}),k7=ge({className:"chakra-scroll-area",slots:Av.keys(),base:{root:{display:"flex",flexDirection:"column",width:"100%",height:"100%",position:"relative",overflow:"hidden","--scrollbar-margin":"2px","--scrollbar-click-area":"calc(var(--scrollbar-size) + calc(var(--scrollbar-margin) * 2))"},viewport:{display:"flex",flexDirection:"column",height:"100%",width:"100%",borderRadius:"inherit",WebkitOverflowScrolling:"touch",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},content:{minWidth:"100%"},scrollbar:{display:"flex",userSelect:"none",touchAction:"none",borderRadius:"full",colorPalette:"gray",transition:"opacity 150ms 300ms",position:"relative",margin:"var(--scrollbar-margin)","&:not([data-overflow-x], [data-overflow-y])":{display:"none"},bg:"{colors.colorPalette.solid/10}","--thumb-bg":"{colors.colorPalette.solid/25}","&:is(:hover, :active)":{"--thumb-bg":"{colors.colorPalette.solid/50}"},_before:{content:'""',position:"absolute"},_vertical:{width:"var(--scrollbar-size)",flexDirection:"column","&::before":{width:"var(--scrollbar-click-area)",height:"100%",insetInlineStart:"calc(var(--scrollbar-margin) * -1)"}},_horizontal:{height:"var(--scrollbar-size)",flexDirection:"row","&::before":{height:"var(--scrollbar-click-area)",width:"100%",top:"calc(var(--scrollbar-margin) * -1)"}}},thumb:{borderRadius:"inherit",bg:"var(--thumb-bg)",transition:"backgrounds",_vertical:{width:"full"},_horizontal:{height:"full"}},corner:{bg:"bg.muted",margin:"var(--scrollbar-margin)",opacity:0,transition:"opacity 150ms 300ms","&[data-hover]":{transitionDelay:"0ms",opacity:1}}},variants:{variant:{hover:{scrollbar:{opacity:"0","&[data-hover], &[data-scrolling]":{opacity:"1",transitionDuration:"faster",transitionDelay:"0ms"}}},always:{scrollbar:{opacity:"1"}}},size:{xs:{root:{"--scrollbar-size":"sizes.1"}},sm:{root:{"--scrollbar-size":"sizes.1.5"}},md:{root:{"--scrollbar-size":"sizes.2"}},lg:{root:{"--scrollbar-size":"sizes.3"}}}},defaultVariants:{size:"md",variant:"hover"}}),A7=ge({className:"chakra-segment-group",slots:Rv.keys(),base:{root:{"--segment-radius":"radii.l2",borderRadius:"l2",display:"inline-flex",boxShadow:"inset",minW:"max-content",textAlign:"center",position:"relative",isolation:"isolate",bg:"bg.muted",_vertical:{flexDirection:"column"}},item:{display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",fontSize:"sm",position:"relative",color:"fg",borderRadius:"var(--segment-radius)",_disabled:{opacity:"0.5"},"&:has(input:focus-visible)":{focusRing:"outside"},_before:{content:'""',position:"absolute",bg:"border",transition:"opacity 0.2s"},_horizontal:{_before:{insetInlineStart:0,insetBlock:"1.5",width:"1px"}},_vertical:{_before:{insetBlockStart:0,insetInline:"1.5",height:"1px"}},"& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type":{_before:{opacity:"0"}},"&[data-state=checked][data-ssr]":{shadow:"sm",bg:"bg",borderRadius:"var(--segment-radius)"}},indicator:{shadow:"sm",pos:"absolute",bg:{_light:"bg",_dark:"bg.emphasized"},width:"var(--width)",height:"var(--height)",top:"var(--top)",left:"var(--left)",zIndex:-1,borderRadius:"var(--segment-radius)"}},variants:{size:{xs:{item:{textStyle:"xs",px:"3",gap:"1",height:"6"}},sm:{item:{textStyle:"sm",px:"4",gap:"2",height:"8"}},md:{item:{textStyle:"sm",px:"4",gap:"2",height:"10"}},lg:{item:{textStyle:"md",px:"4.5",gap:"3",height:"11"}}}},defaultVariants:{size:"md"}}),R7=ge({className:"chakra-slider",slots:zE.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"1",textStyle:"sm",position:"relative",isolation:"isolate",touchAction:"none"},label:{fontWeight:"medium",textStyle:"sm"},control:{display:"inline-flex",alignItems:"center",position:"relative"},track:{overflow:"hidden",borderRadius:"full",flex:"1"},range:{width:"inherit",height:"inherit",_disabled:{bg:"border.emphasized!"}},markerGroup:{position:"absolute!",zIndex:"1"},marker:{"--marker-bg":{base:"white",_underValue:"colors.bg"},display:"flex",alignItems:"center",gap:"calc(var(--slider-thumb-size) / 2)",color:"fg.muted",textStyle:"xs"},markerIndicator:{width:"var(--slider-marker-size)",height:"var(--slider-marker-size)",borderRadius:"full",bg:"var(--marker-bg)"},thumb:{width:"var(--slider-thumb-size)",height:"var(--slider-thumb-size)",display:"flex",alignItems:"center",justifyContent:"center",outline:0,zIndex:"2",borderRadius:"full",_focusVisible:{ring:"2px",ringColor:"colorPalette.focusRing",ringOffset:"2px",ringOffsetColor:"bg"}}},variants:{size:{sm:{root:{"--slider-thumb-size":"sizes.4","--slider-track-size":"sizes.1.5","--slider-marker-center":"6px","--slider-marker-size":"sizes.1","--slider-marker-inset":"3px"}},md:{root:{"--slider-thumb-size":"sizes.5","--slider-track-size":"sizes.2","--slider-marker-center":"8px","--slider-marker-size":"sizes.1","--slider-marker-inset":"4px"}},lg:{root:{"--slider-thumb-size":"sizes.6","--slider-track-size":"sizes.2.5","--slider-marker-center":"9px","--slider-marker-size":"sizes.1.5","--slider-marker-inset":"5px"}}},variant:{outline:{track:{shadow:"inset",bg:"bg.emphasized/72"},range:{bg:"colorPalette.solid"},thumb:{borderWidth:"2px",borderColor:"colorPalette.solid",bg:"bg",_disabled:{bg:"border.emphasized",borderColor:"border.emphasized"}}},solid:{track:{bg:"colorPalette.subtle",_disabled:{bg:"bg.muted"}},range:{bg:"colorPalette.solid"},thumb:{bg:"colorPalette.solid",_disabled:{bg:"border.emphasized"}}}},orientation:{vertical:{root:{display:"inline-flex"},control:{flexDirection:"column",height:"100%",minWidth:"var(--slider-thumb-size)","&[data-has-mark-label], &:has(.chakra-slider__marker-label)":{marginEnd:"4"}},track:{width:"var(--slider-track-size)"},thumb:{left:"50%",translate:"-50% 0"},markerGroup:{insetStart:"var(--slider-marker-center)",insetBlock:"var(--slider-marker-inset)"},marker:{flexDirection:"row"}},horizontal:{control:{flexDirection:"row",width:"100%",minHeight:"var(--slider-thumb-size)","&[data-has-mark-label], &:has(.chakra-slider__marker-label)":{marginBottom:"4"}},track:{height:"var(--slider-track-size)"},thumb:{top:"50%",translate:"0 -50%"},markerGroup:{top:"var(--slider-marker-center)",insetInline:"var(--slider-marker-inset)"},marker:{flexDirection:"column"}}}},defaultVariants:{size:"md",variant:"outline",orientation:"horizontal"}}),_7=ge({className:"chakra-stat",slots:IE.keys(),base:{root:{display:"flex",flexDirection:"column",gap:"1",position:"relative",flex:"1"},label:{display:"inline-flex",gap:"1.5",alignItems:"center",color:"fg.muted",textStyle:"sm"},helpText:{color:"fg.muted",textStyle:"xs"},valueUnit:{color:"fg.muted",textStyle:"xs",fontWeight:"initial",letterSpacing:"initial"},valueText:{verticalAlign:"baseline",fontWeight:"semibold",letterSpacing:"tight",fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums",display:"inline-flex",gap:"1"},indicator:{display:"inline-flex",alignItems:"center",justifyContent:"center",marginEnd:1,"& :where(svg)":{w:"1em",h:"1em"},"&[data-type=up]":{color:"fg.success"},"&[data-type=down]":{color:"fg.error"}}},variants:{size:{sm:{valueText:{textStyle:"xl"}},md:{valueText:{textStyle:"2xl"}},lg:{valueText:{textStyle:"3xl"}}}},defaultVariants:{size:"md"}}),N7=ge({className:"chakra-status",slots:VE.keys(),base:{root:{display:"inline-flex",alignItems:"center",gap:"2"},indicator:{width:"0.64em",height:"0.64em",flexShrink:0,borderRadius:"full",forcedColorAdjust:"none",bg:"colorPalette.solid"}},variants:{size:{sm:{root:{textStyle:"xs"}},md:{root:{textStyle:"sm"}},lg:{root:{textStyle:"md"}}}},defaultVariants:{size:"md"}}),z7=ge({className:"chakra-steps",slots:qE.keys(),base:{root:{display:"flex",width:"full"},list:{display:"flex",justifyContent:"space-between","--steps-gutter":"spacing.3","--steps-thickness":"2px"},title:{fontWeight:"medium",color:"fg"},description:{color:"fg.muted"},separator:{bg:"border",flex:"1"},indicator:{display:"flex",justifyContent:"center",alignItems:"center",flexShrink:"0",borderRadius:"full",fontWeight:"medium",width:"var(--steps-size)",height:"var(--steps-size)",_icon:{flexShrink:"0",width:"var(--steps-icon-size)",height:"var(--steps-icon-size)"}},item:{position:"relative",display:"flex",gap:"3",flex:"1 0 0","&:last-of-type":{flex:"initial","& [data-part=separator]":{display:"none"}}},trigger:{display:"flex",alignItems:"center",gap:"3",textAlign:"start",focusVisibleRing:"outside",borderRadius:"l2"},content:{focusVisibleRing:"outside"}},variants:{orientation:{vertical:{root:{flexDirection:"row",height:"100%"},list:{flexDirection:"column",alignItems:"flex-start"},separator:{position:"absolute",width:"var(--steps-thickness)",height:"100%",maxHeight:"calc(100% - var(--steps-size) - var(--steps-gutter) * 2)",top:"calc(var(--steps-size) + var(--steps-gutter))",insetStart:"calc(var(--steps-size) / 2 - 1px)"},item:{alignItems:"flex-start"}},horizontal:{root:{flexDirection:"column",width:"100%"},list:{flexDirection:"row",alignItems:"center"},separator:{width:"100%",height:"var(--steps-thickness)",marginX:"var(--steps-gutter)"},item:{alignItems:"center"}}},variant:{solid:{indicator:{_incomplete:{borderWidth:"var(--steps-thickness)"},_current:{bg:"colorPalette.muted",borderWidth:"var(--steps-thickness)",borderColor:"colorPalette.solid",color:"colorPalette.fg"},_complete:{bg:"colorPalette.solid",borderColor:"colorPalette.solid",color:"colorPalette.contrast"}},separator:{_complete:{bg:"colorPalette.solid"}}},subtle:{indicator:{_incomplete:{bg:"bg.muted"},_current:{bg:"colorPalette.muted",color:"colorPalette.fg"},_complete:{bg:"colorPalette.emphasized",color:"colorPalette.fg"}},separator:{_complete:{bg:"colorPalette.emphasized"}}}},size:{xs:{root:{gap:"2.5"},list:{"--steps-size":"sizes.6","--steps-icon-size":"sizes.3.5",textStyle:"xs"},title:{textStyle:"sm"}},sm:{root:{gap:"3"},list:{"--steps-size":"sizes.8","--steps-icon-size":"sizes.4",textStyle:"xs"},title:{textStyle:"sm"}},md:{root:{gap:"4"},list:{"--steps-size":"sizes.10","--steps-icon-size":"sizes.4",textStyle:"sm"},title:{textStyle:"sm"}},lg:{root:{gap:"6"},list:{"--steps-size":"sizes.11","--steps-icon-size":"sizes.5",textStyle:"md"},title:{textStyle:"md"}}}},defaultVariants:{size:"md",variant:"solid",orientation:"horizontal"}}),I7=ge({slots:FE.keys(),className:"chakra-switch",base:{root:{display:"inline-flex",gap:"2.5",alignItems:"center",position:"relative",verticalAlign:"middle","--switch-diff":"calc(var(--switch-width) - var(--switch-height))","--switch-x":{base:"var(--switch-diff)",_rtl:"calc(var(--switch-diff) * -1)"}},label:{lineHeight:"1",userSelect:"none",fontSize:"sm",fontWeight:"medium",_disabled:{opacity:"0.5"}},indicator:{position:"absolute",height:"var(--switch-height)",width:"var(--switch-height)",fontSize:"var(--switch-indicator-font-size)",fontWeight:"medium",flexShrink:0,userSelect:"none",display:"grid",placeContent:"center",transition:"inset-inline-start 0.12s ease",insetInlineStart:"calc(var(--switch-x) - 2px)",_checked:{insetInlineStart:"2px"}},control:{display:"inline-flex",gap:"0.5rem",flexShrink:0,justifyContent:"flex-start",cursor:"switch",borderRadius:"full",position:"relative",width:"var(--switch-width)",height:"var(--switch-height)",transition:"backgrounds",_disabled:{opacity:"0.5",cursor:"not-allowed"},_invalid:{outline:"2px solid",outlineColor:"border.error",outlineOffset:"2px"}},thumb:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transitionProperty:"translate",transitionDuration:"fast",borderRadius:"inherit",_checked:{translate:"var(--switch-x) 0"}}},variants:{variant:{solid:{control:{borderRadius:"full",bg:"bg.emphasized",focusVisibleRing:"outside",_checked:{bg:"colorPalette.solid"}},thumb:{bg:"white",width:"var(--switch-height)",height:"var(--switch-height)",scale:"0.8",boxShadow:"sm",_checked:{bg:"colorPalette.contrast"}}},raised:{control:{borderRadius:"full",height:"calc(var(--switch-height) / 2)",bg:"bg.muted",boxShadow:"inset",_checked:{bg:"colorPalette.solid/60"}},thumb:{width:"var(--switch-height)",height:"var(--switch-height)",position:"relative",top:"calc(var(--switch-height) * -0.25)",bg:"white",boxShadow:"xs",focusVisibleRing:"outside",_checked:{bg:"colorPalette.solid"}}}},size:{xs:{root:{"--switch-width":"sizes.6","--switch-height":"sizes.3","--switch-indicator-font-size":"fontSizes.xs"}},sm:{root:{"--switch-width":"sizes.8","--switch-height":"sizes.4","--switch-indicator-font-size":"fontSizes.xs"}},md:{root:{"--switch-width":"sizes.10","--switch-height":"sizes.5","--switch-indicator-font-size":"fontSizes.sm"}},lg:{root:{"--switch-width":"sizes.12","--switch-height":"sizes.6","--switch-indicator-font-size":"fontSizes.md"}}}},defaultVariants:{variant:"solid",size:"md"}}),V7=ge({className:"chakra-table",slots:DE.keys(),base:{root:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full",textAlign:"start",verticalAlign:"top"},row:{_selected:{bg:"colorPalette.subtle"}},cell:{textAlign:"start",alignItems:"center"},columnHeader:{fontWeight:"medium",textAlign:"start",color:"fg"},caption:{fontWeight:"medium",textStyle:"xs"},footer:{fontWeight:"medium"}},variants:{interactive:{true:{body:{"& tr":{_hover:{bg:"colorPalette.subtle"}}}}},stickyHeader:{true:{header:{"& :where(tr)":{top:"var(--table-sticky-offset, 0)",position:"sticky",zIndex:1}}}},striped:{true:{row:{"&:nth-of-type(odd) td":{bg:"bg.muted"}}}},showColumnBorder:{true:{columnHeader:{"&:not(:last-of-type)":{borderInlineEndWidth:"1px"}},cell:{"&:not(:last-of-type)":{borderInlineEndWidth:"1px"}}}},variant:{line:{columnHeader:{borderBottomWidth:"1px"},cell:{borderBottomWidth:"1px"},row:{bg:"bg"}},outline:{root:{boxShadow:"0 0 0 1px {colors.border}",overflow:"hidden"},columnHeader:{borderBottomWidth:"1px"},header:{bg:"bg.muted"},row:{"&:not(:last-of-type)":{borderBottomWidth:"1px"}},footer:{borderTopWidth:"1px"}}},size:{sm:{root:{textStyle:"sm"},columnHeader:{px:"2",py:"2"},cell:{px:"2",py:"2"}},md:{root:{textStyle:"sm"},columnHeader:{px:"3",py:"3"},cell:{px:"3",py:"3"}},lg:{root:{textStyle:"md"},columnHeader:{px:"4",py:"3"},cell:{px:"4",py:"3"}}}},defaultVariants:{variant:"line",size:"md"}}),q7=ge({slots:PE.keys(),className:"chakra-tabs",base:{root:{"--tabs-trigger-radius":"radii.l2",position:"relative",_horizontal:{display:"block"},_vertical:{display:"flex"}},list:{display:"inline-flex",position:"relative",isolation:"isolate","--tabs-indicator-shadow":"shadows.xs","--tabs-indicator-bg":"colors.bg",minH:"var(--tabs-height)",_horizontal:{flexDirection:"row"},_vertical:{flexDirection:"column"}},trigger:{outline:"0",minW:"var(--tabs-height)",height:"var(--tabs-height)",display:"flex",alignItems:"center",fontWeight:"medium",position:"relative",cursor:"button",gap:"2",_focusVisible:{zIndex:1,outline:"2px solid",outlineColor:"colorPalette.focusRing"},_disabled:{cursor:"not-allowed",opacity:.5}},content:{focusVisibleRing:"inside",_horizontal:{width:"100%",pt:"var(--tabs-content-padding)"},_vertical:{height:"100%",ps:"var(--tabs-content-padding)"}},indicator:{width:"var(--width)",height:"var(--height)",borderRadius:"var(--tabs-indicator-radius)",bg:"var(--tabs-indicator-bg)",shadow:"var(--tabs-indicator-shadow)",zIndex:-1}},variants:{fitted:{true:{list:{display:"flex"},trigger:{flex:1,textAlign:"center",justifyContent:"center"}}},justify:{start:{list:{justifyContent:"flex-start"}},center:{list:{justifyContent:"center"}},end:{list:{justifyContent:"flex-end"}}},size:{sm:{root:{"--tabs-height":"sizes.9","--tabs-content-padding":"spacing.3"},trigger:{py:"1",px:"3",textStyle:"sm"}},md:{root:{"--tabs-height":"sizes.10","--tabs-content-padding":"spacing.4"},trigger:{py:"2",px:"4",textStyle:"sm"}},lg:{root:{"--tabs-height":"sizes.11","--tabs-content-padding":"spacing.4.5"},trigger:{py:"2",px:"4.5",textStyle:"md"}}},variant:{line:{list:{display:"flex",borderColor:"border",_horizontal:{borderBottomWidth:"1px"},_vertical:{borderEndWidth:"1px"}},trigger:{color:"fg.muted",_disabled:{_active:{bg:"initial"}},_selected:{color:"fg",_horizontal:{layerStyle:"indicator.bottom","--indicator-offset-y":"-1px","--indicator-color":"colors.colorPalette.solid"},_vertical:{layerStyle:"indicator.end","--indicator-offset-x":"-1px"}}}},subtle:{trigger:{borderRadius:"var(--tabs-trigger-radius)",color:"fg.muted",_selected:{bg:"colorPalette.subtle",color:"colorPalette.fg"}}},enclosed:{list:{bg:"bg.muted",padding:"1",borderRadius:"l3",minH:"calc(var(--tabs-height) - 4px)"},trigger:{justifyContent:"center",color:"fg.muted",borderRadius:"var(--tabs-trigger-radius)",_selected:{bg:"bg",color:"colorPalette.fg",shadow:"xs"}}},outline:{list:{"--line-thickness":"1px","--line-offset":"calc(var(--line-thickness) * -1)",borderColor:"border",display:"flex",_horizontal:{_before:{content:'""',position:"absolute",bottom:"0px",width:"100%",borderBottomWidth:"var(--line-thickness)",borderBottomColor:"border"}},_vertical:{_before:{content:'""',position:"absolute",insetInline:"var(--line-offset)",height:"calc(100% - calc(var(--line-thickness) * 2))",borderEndWidth:"var(--line-thickness)",borderEndColor:"border"}}},trigger:{color:"fg.muted",borderWidth:"1px",borderColor:"transparent",_selected:{bg:"currentBg",color:"colorPalette.fg"},_horizontal:{borderTopRadius:"var(--tabs-trigger-radius)",marginBottom:"var(--line-offset)",marginEnd:{_notLast:"var(--line-offset)"},_selected:{borderColor:"border",borderBottomColor:"transparent"}},_vertical:{borderStartRadius:"var(--tabs-trigger-radius)",marginEnd:"var(--line-offset)",marginBottom:{_notLast:"var(--line-offset)"},_selected:{borderColor:"border",borderEndColor:"transparent"}}}},plain:{trigger:{color:"fg.muted",_selected:{color:"colorPalette.fg"},borderRadius:"var(--tabs-trigger-radius)","&[data-selected][data-ssr]":{bg:"var(--tabs-indicator-bg)",shadow:"var(--tabs-indicator-shadow)",borderRadius:"var(--tabs-indicator-radius)"}}}}},defaultVariants:{size:"md",variant:"line"}}),vs=Jf.variants?.variant,F7=ge({slots:LE.keys(),className:"chakra-tag",base:{root:{display:"inline-flex",alignItems:"center",verticalAlign:"top",maxWidth:"100%",userSelect:"none",borderRadius:"l2",focusVisibleRing:"outside"},label:{lineClamp:"1"},closeTrigger:{display:"flex",alignItems:"center",justifyContent:"center",outline:"0",borderRadius:"l1",color:"currentColor",focusVisibleRing:"inside",focusRingWidth:"2px"},startElement:{flexShrink:0,boxSize:"var(--tag-element-size)",ms:"var(--tag-element-offset)","&:has([data-scope=avatar])":{boxSize:"var(--tag-avatar-size)",ms:"calc(var(--tag-element-offset) * 1.5)"},_icon:{boxSize:"100%"}},endElement:{flexShrink:0,boxSize:"var(--tag-element-size)",me:"var(--tag-element-offset)",_icon:{boxSize:"100%"},"&:has(button)":{ms:"calc(var(--tag-element-offset) * -1)"}}},variants:{size:{sm:{root:{px:"1.5",minH:"4.5",gap:"1","--tag-avatar-size":"spacing.3","--tag-element-size":"spacing.3","--tag-element-offset":"-2px"},label:{textStyle:"xs"}},md:{root:{px:"1.5",minH:"5",gap:"1","--tag-avatar-size":"spacing.3.5","--tag-element-size":"spacing.3.5","--tag-element-offset":"-2px"},label:{textStyle:"xs"}},lg:{root:{px:"2",minH:"6",gap:"1.5","--tag-avatar-size":"spacing.4.5","--tag-element-size":"spacing.4","--tag-element-offset":"-3px"},label:{textStyle:"sm"}},xl:{root:{px:"2.5",minH:"8",gap:"1.5","--tag-avatar-size":"spacing.6","--tag-element-size":"spacing.4.5","--tag-element-offset":"-4px"},label:{textStyle:"sm"}}},variant:{subtle:{root:vs?.subtle},solid:{root:vs?.solid},outline:{root:vs?.outline},surface:{root:vs?.surface}}},defaultVariants:{size:"md",variant:"surface"}}),D7=ge({slots:BE.keys(),className:"chakra-timeline",base:{root:{display:"flex",flexDirection:"column",width:"full","--timeline-thickness":"1px","--timeline-gutter":"4px"},item:{display:"flex",position:"relative",alignItems:"flex-start",flexShrink:0,gap:"4",_last:{"& :where(.chakra-timeline__separator)":{display:"none"}}},separator:{position:"absolute",borderStartWidth:"var(--timeline-thickness)",ms:"calc(-1 * var(--timeline-thickness) / 2)",insetInlineStart:"calc(var(--timeline-indicator-size) / 2)",insetBlock:"0",borderColor:"border"},indicator:{outline:"2px solid {colors.bg}",position:"relative",flexShrink:"0",boxSize:"var(--timeline-indicator-size)",fontSize:"var(--timeline-font-size)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"full",fontWeight:"medium"},connector:{alignSelf:"stretch",position:"relative"},content:{pb:"6",display:"flex",flexDirection:"column",width:"full",gap:"2"},title:{display:"flex",fontWeight:"medium",flexWrap:"wrap",gap:"1.5",alignItems:"center",mt:"var(--timeline-margin)"},description:{color:"fg.muted",textStyle:"xs"}},variants:{variant:{subtle:{indicator:{bg:"colorPalette.muted"}},solid:{indicator:{bg:"colorPalette.solid",color:"colorPalette.contrast"}},outline:{indicator:{bg:"currentBg",borderWidth:"1px",borderColor:"colorPalette.muted"}},plain:{}},size:{sm:{root:{"--timeline-indicator-size":"sizes.4","--timeline-font-size":"fontSizes.2xs"},title:{textStyle:"xs"}},md:{root:{"--timeline-indicator-size":"sizes.5","--timeline-font-size":"fontSizes.xs"},title:{textStyle:"sm"}},lg:{root:{"--timeline-indicator-size":"sizes.6","--timeline-font-size":"fontSizes.xs"},title:{mt:"0.5",textStyle:"sm"}},xl:{root:{"--timeline-indicator-size":"sizes.8","--timeline-font-size":"fontSizes.sm"},title:{mt:"1.5",textStyle:"sm"}}}},defaultVariants:{size:"md",variant:"solid"}}),M7=ge({slots:ME.keys(),className:"chakra-toast",base:{root:{width:"full",display:"flex",alignItems:"flex-start",position:"relative",gap:"3",py:"4",ps:"4",pe:"6",borderRadius:"l2",translate:"var(--x) var(--y)",scale:"var(--scale)",zIndex:"var(--z-index)",height:"var(--height)",opacity:"var(--opacity)",willChange:"translate, opacity, scale",transition:"translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms",transitionTimingFunction:"cubic-bezier(0.21, 1.02, 0.73, 1)",_closed:{transition:"translate 400ms, scale 400ms, opacity 200ms",transitionTimingFunction:"cubic-bezier(0.06, 0.71, 0.55, 1)"},bg:"bg.panel",color:"fg",boxShadow:"xl","--toast-trigger-bg":"colors.bg.muted","&[data-type=warning]":{bg:"orange.solid",color:"orange.contrast","--toast-trigger-bg":"{white/10}","--toast-border-color":"{white/40}"},"&[data-type=success]":{bg:"green.solid",color:"green.contrast","--toast-trigger-bg":"{white/10}","--toast-border-color":"{white/40}"},"&[data-type=error]":{bg:"red.solid",color:"red.contrast","--toast-trigger-bg":"{white/10}","--toast-border-color":"{white/40}"}},title:{fontWeight:"medium",textStyle:"sm",marginEnd:"2"},description:{display:"inline",textStyle:"sm",opacity:"0.8"},indicator:{flexShrink:"0",boxSize:"5"},actionTrigger:{textStyle:"sm",fontWeight:"medium",height:"8",px:"3",borderRadius:"l2",alignSelf:"center",borderWidth:"1px",borderColor:"var(--toast-border-color, inherit)",transition:"background 200ms",_hover:{bg:"var(--toast-trigger-bg)"}},closeTrigger:{position:"absolute",top:"1",insetEnd:"1",padding:"1",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"{currentColor/60}",borderRadius:"l2",textStyle:"md",transition:"background 200ms",_icon:{boxSize:"1em"}}}}),P7=ge({slots:Vv.keys(),className:"chakra-tooltip",base:{content:{"--tooltip-bg":"colors.bg.inverted",bg:"var(--tooltip-bg)",color:"fg.inverted",px:"2.5",py:"1",borderRadius:"l2",fontWeight:"medium",textStyle:"xs",boxShadow:"md",maxW:"xs",zIndex:"tooltip",transformOrigin:"var(--transform-origin)",_open:{animationStyle:"scale-fade-in",animationDuration:"fast"},_closed:{animationStyle:"scale-fade-out",animationDuration:"fast"}},arrow:{"--arrow-size":"sizes.2","--arrow-background":"var(--tooltip-bg)"},arrowTip:{borderTopWidth:"1px",borderInlineStartWidth:"1px",borderColor:"var(--tooltip-bg)"}}}),F0=xo({display:"flex",alignItems:"center",gap:"var(--tree-item-gap)",rounded:"l2",userSelect:"none",position:"relative","--tree-depth":"calc(var(--depth) - 1)","--tree-indentation-offset":"calc(var(--tree-indentation) * var(--tree-depth))","--tree-icon-offset":"calc(var(--tree-icon-size) * var(--tree-depth) * 0.5)","--tree-offset":"calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + var(--tree-icon-offset))",ps:"var(--tree-offset)",pe:"var(--tree-padding-inline)",py:"var(--tree-padding-block)",focusVisibleRing:"inside",focusRingColor:"border.emphasized",focusRingWidth:"2px","&:hover, &:focus-visible":{bg:"bg.muted"},_disabled:{layerStyle:"disabled"}}),D0=xo({flex:"1"}),M0=xo({_selected:{bg:"colorPalette.subtle",color:"colorPalette.fg"}}),P0=xo({_selected:{layerStyle:"fill.solid"}}),L7=ge({slots:gv.keys(),className:"chakra-tree-view",base:{root:{width:"full",display:"flex",flexDirection:"column",gap:"2"},tree:{display:"flex",flexDirection:"column","--tree-item-gap":"spacing.2",_icon:{boxSize:"var(--tree-icon-size)"}},label:{fontWeight:"medium",textStyle:"sm"},branch:{position:"relative"},branchContent:{position:"relative"},branchIndentGuide:{height:"100%",width:"1px",bg:"border",position:"absolute","--tree-depth":"calc(var(--depth) - 1)","--tree-indentation-offset":"calc(var(--tree-indentation) * var(--tree-depth))","--tree-offset":"calc(var(--tree-padding-inline) + var(--tree-indentation-offset))","--tree-icon-offset":"calc(var(--tree-icon-size) * 0.5 * var(--depth))",insetInlineStart:"calc(var(--tree-offset) + var(--tree-icon-offset))",zIndex:"1"},branchIndicator:{color:"fg.muted",transformOrigin:"center",transitionDuration:"normal",transitionProperty:"transform",transitionTimingFunction:"default",_open:{transform:"rotate(90deg)"}},branchTrigger:{display:"inline-flex",alignItems:"center",justifyContent:"center"},branchControl:F0,item:F0,itemText:D0,branchText:D0,nodeCheckbox:{display:"inline-flex"}},variants:{size:{md:{tree:{textStyle:"sm","--tree-indentation":"spacing.4","--tree-padding-inline":"spacing.3","--tree-padding-block":"spacing.1.5","--tree-icon-size":"spacing.4"}},sm:{tree:{textStyle:"sm","--tree-indentation":"spacing.4","--tree-padding-inline":"spacing.3","--tree-padding-block":"spacing.1","--tree-icon-size":"spacing.3"}},xs:{tree:{textStyle:"xs","--tree-indentation":"spacing.4","--tree-padding-inline":"spacing.2","--tree-padding-block":"spacing.1","--tree-icon-size":"spacing.3"}}},variant:{subtle:{branchControl:M0,item:M0},solid:{branchControl:P0,item:P0}},animateContent:{true:{branchContent:{_open:{animationName:"expand-height, fade-in",animationDuration:"moderate"},_closed:{animationName:"collapse-height, fade-out",animationDuration:"moderate"}}}}},defaultVariants:{size:"md",variant:"subtle"}}),B7={accordion:GE,actionBar:WE,alert:$E,avatar:YE,blockquote:KE,breadcrumb:XE,card:ZE,checkbox:QE,checkboxCard:JE,codeBlock:e7,collapsible:t7,dataList:i7,dialog:o7,drawer:l7,editable:r7,emptyState:s7,field:u7,fieldset:c7,fileUpload:d7,hoverCard:f7,list:g7,listbox:m7,menu:h7,nativeSelect:p7,numberInput:b7,pinInput:v7,popover:x7,progress:S7,progressCircle:w7,radioCard:E7,radioGroup:O7,ratingGroup:T7,scrollArea:k7,segmentGroup:A7,select:_s,combobox:n7,slider:R7,stat:_7,steps:z7,switch:I7,table:V7,tabs:q7,tag:F7,toast:M7,tooltip:P7,status:N7,timeline:D7,colorPicker:a7,qrCode:C7,treeView:L7},j7=p4({"2xs":{value:{fontSize:"2xs",lineHeight:"0.75rem"}},xs:{value:{fontSize:"xs",lineHeight:"1rem"}},sm:{value:{fontSize:"sm",lineHeight:"1.25rem"}},md:{value:{fontSize:"md",lineHeight:"1.5rem"}},lg:{value:{fontSize:"lg",lineHeight:"1.75rem"}},xl:{value:{fontSize:"xl",lineHeight:"1.875rem"}},"2xl":{value:{fontSize:"2xl",lineHeight:"2rem"}},"3xl":{value:{fontSize:"3xl",lineHeight:"2.375rem"}},"4xl":{value:{fontSize:"4xl",lineHeight:"2.75rem",letterSpacing:"-0.025em"}},"5xl":{value:{fontSize:"5xl",lineHeight:"3.75rem",letterSpacing:"-0.025em"}},"6xl":{value:{fontSize:"6xl",lineHeight:"4.5rem",letterSpacing:"-0.025em"}},"7xl":{value:{fontSize:"7xl",lineHeight:"5.75rem",letterSpacing:"-0.025em"}},none:{value:{}},label:{value:{fontSize:"sm",lineHeight:"1.25rem",fontWeight:"medium"}}}),H7=at.animations({spin:{value:"spin 1s linear infinite"},ping:{value:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"},pulse:{value:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"},bounce:{value:"bounce 1s infinite"}}),U7=at.aspectRatios({square:{value:"1 / 1"},landscape:{value:"4 / 3"},portrait:{value:"3 / 4"},wide:{value:"16 / 9"},ultrawide:{value:"18 / 5"},golden:{value:"1.618 / 1"}}),G7=at.blurs({none:{value:" "},sm:{value:"4px"},md:{value:"8px"},lg:{value:"12px"},xl:{value:"16px"},"2xl":{value:"24px"},"3xl":{value:"40px"},"4xl":{value:"64px"}}),W7=at.borders({xs:{value:"0.5px solid"},sm:{value:"1px solid"},md:{value:"2px solid"},lg:{value:"4px solid"},xl:{value:"8px solid"}}),$7=at.colors({transparent:{value:"transparent"},current:{value:"currentColor"},black:{value:"#09090B"},white:{value:"#FFFFFF"},whiteAlpha:{50:{value:"rgba(255, 255, 255, 0.04)"},100:{value:"rgba(255, 255, 255, 0.06)"},200:{value:"rgba(255, 255, 255, 0.08)"},300:{value:"rgba(255, 255, 255, 0.16)"},400:{value:"rgba(255, 255, 255, 0.24)"},500:{value:"rgba(255, 255, 255, 0.36)"},600:{value:"rgba(255, 255, 255, 0.48)"},700:{value:"rgba(255, 255, 255, 0.64)"},800:{value:"rgba(255, 255, 255, 0.80)"},900:{value:"rgba(255, 255, 255, 0.92)"},950:{value:"rgba(255, 255, 255, 0.95)"}},blackAlpha:{50:{value:"rgba(0, 0, 0, 0.04)"},100:{value:"rgba(0, 0, 0, 0.06)"},200:{value:"rgba(0, 0, 0, 0.08)"},300:{value:"rgba(0, 0, 0, 0.16)"},400:{value:"rgba(0, 0, 0, 0.24)"},500:{value:"rgba(0, 0, 0, 0.36)"},600:{value:"rgba(0, 0, 0, 0.48)"},700:{value:"rgba(0, 0, 0, 0.64)"},800:{value:"rgba(0, 0, 0, 0.80)"},900:{value:"rgba(0, 0, 0, 0.92)"},950:{value:"rgba(0, 0, 0, 0.95)"}},gray:{50:{value:"#fafafa"},100:{value:"#f4f4f5"},200:{value:"#e4e4e7"},300:{value:"#d4d4d8"},400:{value:"#a1a1aa"},500:{value:"#71717a"},600:{value:"#52525b"},700:{value:"#3f3f46"},800:{value:"#27272a"},900:{value:"#18181b"},950:{value:"#111111"}},red:{50:{value:"#fef2f2"},100:{value:"#fee2e2"},200:{value:"#fecaca"},300:{value:"#fca5a5"},400:{value:"#f87171"},500:{value:"#ef4444"},600:{value:"#dc2626"},700:{value:"#991919"},800:{value:"#511111"},900:{value:"#300c0c"},950:{value:"#1f0808"}},orange:{50:{value:"#fff7ed"},100:{value:"#ffedd5"},200:{value:"#fed7aa"},300:{value:"#fdba74"},400:{value:"#fb923c"},500:{value:"#f97316"},600:{value:"#ea580c"},700:{value:"#92310a"},800:{value:"#6c2710"},900:{value:"#3b1106"},950:{value:"#220a04"}},yellow:{50:{value:"#fefce8"},100:{value:"#fef9c3"},200:{value:"#fef08a"},300:{value:"#fde047"},400:{value:"#facc15"},500:{value:"#eab308"},600:{value:"#ca8a04"},700:{value:"#845209"},800:{value:"#713f12"},900:{value:"#422006"},950:{value:"#281304"}},green:{50:{value:"#f0fdf4"},100:{value:"#dcfce7"},200:{value:"#bbf7d0"},300:{value:"#86efac"},400:{value:"#4ade80"},500:{value:"#22c55e"},600:{value:"#16a34a"},700:{value:"#116932"},800:{value:"#124a28"},900:{value:"#042713"},950:{value:"#03190c"}},teal:{50:{value:"#f0fdfa"},100:{value:"#ccfbf1"},200:{value:"#99f6e4"},300:{value:"#5eead4"},400:{value:"#2dd4bf"},500:{value:"#14b8a6"},600:{value:"#0d9488"},700:{value:"#0c5d56"},800:{value:"#114240"},900:{value:"#032726"},950:{value:"#021716"}},blue:{50:{value:"#eff6ff"},100:{value:"#dbeafe"},200:{value:"#bfdbfe"},300:{value:"#a3cfff"},400:{value:"#60a5fa"},500:{value:"#3b82f6"},600:{value:"#2563eb"},700:{value:"#173da6"},800:{value:"#1a3478"},900:{value:"#14204a"},950:{value:"#0c142e"}},cyan:{50:{value:"#ecfeff"},100:{value:"#cffafe"},200:{value:"#a5f3fc"},300:{value:"#67e8f9"},400:{value:"#22d3ee"},500:{value:"#06b6d4"},600:{value:"#0891b2"},700:{value:"#0c5c72"},800:{value:"#134152"},900:{value:"#072a38"},950:{value:"#051b24"}},purple:{50:{value:"#faf5ff"},100:{value:"#f3e8ff"},200:{value:"#e9d5ff"},300:{value:"#d8b4fe"},400:{value:"#c084fc"},500:{value:"#a855f7"},600:{value:"#9333ea"},700:{value:"#641ba3"},800:{value:"#4a1772"},900:{value:"#2f0553"},950:{value:"#1a032e"}},pink:{50:{value:"#fdf2f8"},100:{value:"#fce7f3"},200:{value:"#fbcfe8"},300:{value:"#f9a8d4"},400:{value:"#f472b6"},500:{value:"#ec4899"},600:{value:"#db2777"},700:{value:"#a41752"},800:{value:"#6d0e34"},900:{value:"#45061f"},950:{value:"#2c0514"}}}),Y7=at.cursor({button:{value:"pointer"},checkbox:{value:"default"},disabled:{value:"not-allowed"},menuitem:{value:"default"},option:{value:"default"},radio:{value:"default"},slider:{value:"default"},switch:{value:"pointer"}}),K7=at.durations({fastest:{value:"50ms"},faster:{value:"100ms"},fast:{value:"150ms"},moderate:{value:"200ms"},slow:{value:"300ms"},slower:{value:"400ms"},slowest:{value:"500ms"}}),X7=at.easings({"ease-in":{value:"cubic-bezier(0.42, 0, 1, 1)"},"ease-out":{value:"cubic-bezier(0, 0, 0.58, 1)"},"ease-in-out":{value:"cubic-bezier(0.42, 0, 0.58, 1)"},"ease-in-smooth":{value:"cubic-bezier(0.32, 0.72, 0, 1)"}}),Z7=at.fontSizes({"2xs":{value:"0.625rem"},xs:{value:"0.75rem"},sm:{value:"0.875rem"},md:{value:"1rem"},lg:{value:"1.125rem"},xl:{value:"1.25rem"},"2xl":{value:"1.5rem"},"3xl":{value:"1.875rem"},"4xl":{value:"2.25rem"},"5xl":{value:"3rem"},"6xl":{value:"3.75rem"},"7xl":{value:"4.5rem"},"8xl":{value:"6rem"},"9xl":{value:"8rem"}}),Q7=at.fontWeights({thin:{value:"100"},extralight:{value:"200"},light:{value:"300"},normal:{value:"400"},medium:{value:"500"},semibold:{value:"600"},bold:{value:"700"},extrabold:{value:"800"},black:{value:"900"}}),L0='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',J7=at.fonts({heading:{value:`Inter, ${L0}`},body:{value:`Inter, ${L0}`},mono:{value:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'}}),eO=m4({spin:{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},pulse:{"50%":{opacity:"0.5"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}},"bg-position":{from:{backgroundPosition:"var(--animate-from, 1rem) 0"},to:{backgroundPosition:"var(--animate-to, 0) 0"}},position:{from:{insetInlineStart:"var(--animate-from-x)",insetBlockStart:"var(--animate-from-y)"},to:{insetInlineStart:"var(--animate-to-x)",insetBlockStart:"var(--animate-to-y)"}},"circular-progress":{"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100%"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260%"}},"expand-height":{from:{height:"0"},to:{height:"var(--height)"}},"collapse-height":{from:{height:"var(--height)"},to:{height:"0"}},"expand-width":{from:{width:"0"},to:{width:"var(--width)"}},"collapse-width":{from:{height:"var(--width)"},to:{height:"0"}},"fade-in":{from:{opacity:0},to:{opacity:1}},"fade-out":{from:{opacity:1},to:{opacity:0}},"slide-from-left-full":{from:{translate:"-100% 0"},to:{translate:"0 0"}},"slide-from-right-full":{from:{translate:"100% 0"},to:{translate:"0 0"}},"slide-from-top-full":{from:{translate:"0 -100%"},to:{translate:"0 0"}},"slide-from-bottom-full":{from:{translate:"0 100%"},to:{translate:"0 0"}},"slide-to-left-full":{from:{translate:"0 0"},to:{translate:"-100% 0"}},"slide-to-right-full":{from:{translate:"0 0"},to:{translate:"100% 0"}},"slide-to-top-full":{from:{translate:"0 0"},to:{translate:"0 -100%"}},"slide-to-bottom-full":{from:{translate:"0 0"},to:{translate:"0 100%"}},"slide-from-top":{"0%":{translate:"0 -0.5rem"},to:{translate:"0"}},"slide-from-bottom":{"0%":{translate:"0 0.5rem"},to:{translate:"0"}},"slide-from-left":{"0%":{translate:"-0.5rem 0"},to:{translate:"0"}},"slide-from-right":{"0%":{translate:"0.5rem 0"},to:{translate:"0"}},"slide-to-top":{"0%":{translate:"0"},to:{translate:"0 -0.5rem"}},"slide-to-bottom":{"0%":{translate:"0"},to:{translate:"0 0.5rem"}},"slide-to-left":{"0%":{translate:"0"},to:{translate:"-0.5rem 0"}},"slide-to-right":{"0%":{translate:"0"},to:{translate:"0.5rem 0"}},"scale-in":{from:{scale:"0.95"},to:{scale:"1"}},"scale-out":{from:{scale:"1"},to:{scale:"0.95"}}}),tO=at.letterSpacings({tighter:{value:"-0.05em"},tight:{value:"-0.025em"},wide:{value:"0.025em"},wider:{value:"0.05em"},widest:{value:"0.1em"}}),aO=at.lineHeights({shorter:{value:1.25},short:{value:1.375},moderate:{value:1.5},tall:{value:1.625},taller:{value:2}}),nO=at.radii({none:{value:"0"},"2xs":{value:"0.0625rem"},xs:{value:"0.125rem"},sm:{value:"0.25rem"},md:{value:"0.375rem"},lg:{value:"0.5rem"},xl:{value:"0.75rem"},"2xl":{value:"1rem"},"3xl":{value:"1.5rem"},"4xl":{value:"2rem"},full:{value:"9999px"}}),s1=at.spacing({.5:{value:"0.125rem"},1:{value:"0.25rem"},1.5:{value:"0.375rem"},2:{value:"0.5rem"},2.5:{value:"0.625rem"},3:{value:"0.75rem"},3.5:{value:"0.875rem"},4:{value:"1rem"},4.5:{value:"1.125rem"},5:{value:"1.25rem"},6:{value:"1.5rem"},7:{value:"1.75rem"},8:{value:"2rem"},9:{value:"2.25rem"},10:{value:"2.5rem"},11:{value:"2.75rem"},12:{value:"3rem"},14:{value:"3.5rem"},16:{value:"4rem"},20:{value:"5rem"},24:{value:"6rem"},28:{value:"7rem"},32:{value:"8rem"},36:{value:"9rem"},40:{value:"10rem"},44:{value:"11rem"},48:{value:"12rem"},52:{value:"13rem"},56:{value:"14rem"},60:{value:"15rem"},64:{value:"16rem"},72:{value:"18rem"},80:{value:"20rem"},96:{value:"24rem"}}),iO=at.sizes({"3xs":{value:"14rem"},"2xs":{value:"16rem"},xs:{value:"20rem"},sm:{value:"24rem"},md:{value:"28rem"},lg:{value:"32rem"},xl:{value:"36rem"},"2xl":{value:"42rem"},"3xl":{value:"48rem"},"4xl":{value:"56rem"},"5xl":{value:"64rem"},"6xl":{value:"72rem"},"7xl":{value:"80rem"},"8xl":{value:"90rem"}}),oO=at.sizes({max:{value:"max-content"},min:{value:"min-content"},fit:{value:"fit-content"},prose:{value:"60ch"},full:{value:"100%"},dvh:{value:"100dvh"},svh:{value:"100svh"},lvh:{value:"100lvh"},dvw:{value:"100dvw"},svw:{value:"100svw"},lvw:{value:"100lvw"},vw:{value:"100vw"},vh:{value:"100vh"}}),lO=at.sizes({"1/2":{value:"50%"},"1/3":{value:"33.333333%"},"2/3":{value:"66.666667%"},"1/4":{value:"25%"},"3/4":{value:"75%"},"1/5":{value:"20%"},"2/5":{value:"40%"},"3/5":{value:"60%"},"4/5":{value:"80%"},"1/6":{value:"16.666667%"},"2/6":{value:"33.333333%"},"3/6":{value:"50%"},"4/6":{value:"66.666667%"},"5/6":{value:"83.333333%"},"1/12":{value:"8.333333%"},"2/12":{value:"16.666667%"},"3/12":{value:"25%"},"4/12":{value:"33.333333%"},"5/12":{value:"41.666667%"},"6/12":{value:"50%"},"7/12":{value:"58.333333%"},"8/12":{value:"66.666667%"},"9/12":{value:"75%"},"10/12":{value:"83.333333%"},"11/12":{value:"91.666667%"}}),rO=at.sizes({...iO,...s1,...lO,...oO}),sO=at.zIndex({hide:{value:-1},base:{value:0},docked:{value:10},dropdown:{value:1e3},sticky:{value:1100},banner:{value:1200},overlay:{value:1300},modal:{value:1400},popover:{value:1500},skipNav:{value:1600},toast:{value:1700},tooltip:{value:1800},max:{value:2147483647}}),uO={aspectRatios:U7,animations:H7,blurs:G7,borders:W7,colors:$7,durations:K7,easings:X7,fonts:J7,fontSizes:Z7,fontWeights:Q7,letterSpacings:tO,lineHeights:aO,radii:nO,spacing:s1,sizes:rO,zIndex:sO,cursor:Y7},cO={colors:lE,shadows:sE,radii:rE},dO="chakra",fO=":where(html, .chakra-theme)",gO=Mv({preflight:!0,cssVarsPrefix:dO,cssVarsRoot:fO,globalCss:L8,theme:{breakpoints:P8,keyframes:eO,tokens:uO,semanticTokens:cO,recipes:oE,slotRecipes:B7,textStyles:j7,layerStyles:B8,animationStyles:j8}}),mO=Fv(T4,gO),hO=D8(mO),u1=a3("div",{base:{display:"flex",alignItems:"center",justifyContent:"center"},variants:{inline:{true:{display:"inline-flex"}}}});u1.displayName="Center";const pO=JSON.parse(`{
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {},
  "hits": [
    {
      "recipe": {
        "label": "Paleo Chocolate Covered Caramels",
        "image": "https://media.wincacademy.nl/react/images/final-project/chocolate-caramel.jpeg",
        "url": "http://ourfineday.com/happy-birthday-travis-and-a-recipe-for-chocolate-covered-chocolates/",
        "yield": 12,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 cup honey",
          "1 1/2 Tbsp almond butter",
          "3 tsp butter or coconut butter for dairy free",
          "1 tsp water",
          "1/2 tsp vanilla",
          "1 cup chocolate chips",
          "1/2 tsp coconut oil"
        ],
        "ingredients": [
          {
            "text": "1/2 cup honey",
            "quantity": 0.5,
            "measure": "cup",
            "food": "honey",
            "weight": 169.5,
            "foodCategory": null,
            "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
            "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
          },
          {
            "text": "1 1/2 Tbsp almond butter",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "almond butter",
            "weight": 24,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "3 tsp butter or coconut butter for dairy free",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "coconut butter",
            "weight": 14.000000000710095,
            "foodCategory": null,
            "foodId": "food_bkx1ggcaouz8qob002t72ay33jbo",
            "image": "https://www.edamam.com/food-img/0d0/0d0a27d667f0b7930bdda17da8ea7dc7.jpg"
          },
          {
            "text": "1 tsp water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "water",
            "weight": 4.928921594,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1/2 tsp vanilla",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 cup chocolate chips",
            "quantity": 1,
            "measure": "cup",
            "food": "chocolate chips",
            "weight": 224,
            "foodCategory": "chocolate",
            "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
            "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
          },
          {
            "text": "1/2 tsp coconut oil",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "coconut oil",
            "weight": 2.25,
            "foodCategory": "Oils",
            "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
            "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
          }
        ],
        "calories": 1912.5630000050721,
        "totalWeight": 440.7789215947101,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1912.5630000050721,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.8976600004565,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 35.34678,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4121600000000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.917509999999998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.307704,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 301.1664500001775,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 290.8074500001014,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.359000000076083,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 280.61185,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 279.283,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.247360000050723,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 33.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.71615686414296,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 353.66886764782004,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 70.65128921593998,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 270.768,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.668120000018259,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.1653028921594002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 128.826,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.1915,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.010071,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.291765,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.97122,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.065946,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 16.11,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 16.11,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.812424999999999,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.01125,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 38.766272672406004,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Grilled Pork Chops with Chipotle Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg",
        "url": "https://grumpyshoneybunch.com/2009/07/grilled-pork-chops-chipotle-sauce.html",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "* 8 pork chops",
          "* 1/2 cup sugar free ketchup",
          "* 1/3 cup Seasoned Rice Vinegar, original",
          "* 1/3 cup Swerve Brown Sweetener",
          "* 1 Tablespoon ground cumin",
          "* 1 teaspoons chipotle chili powder"
        ],
        "ingredients": [
          {
            "text": "* 8 pork chops",
            "quantity": 8,
            "measure": "<unit>",
            "food": "pork chops",
            "weight": 1592,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "* 1/2 cup sugar free ketchup",
            "quantity": 0.5,
            "measure": "cup",
            "food": "ketchup",
            "weight": 120,
            "foodCategory": "condiments and sauces",
            "foodId": "food_au7jthtab0n3era9uue8pauakroe",
            "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
          },
          {
            "text": "* 1/3 cup Seasoned Rice Vinegar, original",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Seasoned Rice Vinegar",
            "weight": 79.66666666666666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bhk02bwbp4x7kkbeajj2pbnj15cp",
            "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
          },
          {
            "text": "* 1/3 cup Swerve Brown Sweetener",
            "quantity": 0.3333333333333333,
            "measure": "<unit>",
            "food": "Sweetener",
            "weight": 0.3333333333333333,
            "foodCategory": "sugars",
            "foodId": "food_b3755atafogvz2ac74adra225skl",
            "image": "https://www.edamam.com/food-img/0e3/0e3edc39fe123b516c4c758f4f09e99f.jpg"
          },
          {
            "text": "* 1 Tablespoon ground cumin",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cumin",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "* 1 teaspoons chipotle chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          }
        ],
        "calories": 2875.644,
        "totalWeight": 1800.7,
        "totalTime": 0,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2875.644,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.59936,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 47.823934,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.46464,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 57.431257,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.406902,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 37.914233333333335,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 35.984633333333335,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.9296,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.455763333333334,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.28396666666666665,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 332.3863533333334,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1098.48,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2056.899,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 390.8266666666667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 443.5663333333334,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6015.86,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.057766666666668,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.8184,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3402.8933333333334,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 106.92099999999999,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 5.400899999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 7.77883,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.25308,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 107.68321999999998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.368478,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.155999999999999,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 12.155999999999999,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 8.4376,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 7.96,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.89198,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.7779,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1267.3743166666668,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Slow Cooker Turkey Dip Sandwiches recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/turkey-sandwich.jpeg",
        "url": "http://www.bobbiskozykitchen.com/2015/03/slow-cooker-turkey-dip-sandwiches.html",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "7 tablespoons room temperature unsalted butter, divided",
          "3 tablespoons fresh thyme leaves, chopped",
          "4 cloves garlic, minced",
          "1 lemon, zested",
          "kosher salt",
          "cracked black pepper",
          "1 large onion, chopped",
          "1/2 cup chicken stock",
          "3 tablespoons Worcestershire sauce",
          "1 (4-pound) bone-in turkey breast",
          "4 demi French baguettes, sliced in half",
          "12 slices Swiss Cheese"
        ],
        "ingredients": [
          {
            "text": "7 tablespoons room temperature unsalted butter, divided",
            "quantity": 7,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 99.39999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3 tablespoons fresh thyme leaves, chopped",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "fresh thyme",
            "weight": 7.19999999951308,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "4 cloves garlic, minced",
            "quantity": 4,
            "measure": "clove",
            "food": "garlic",
            "weight": 12,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lemon, zested",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 58,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "kosher salt",
            "weight": 23.087816879997078,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "cracked black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 11.543908439998539,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 large onion, chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup chicken stock",
            "quantity": 0.5,
            "measure": "cup",
            "food": "chicken stock",
            "weight": 120,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "3 tablespoons Worcestershire sauce",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Worcestershire sauce",
            "weight": 51,
            "foodCategory": "canned soup",
            "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
            "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
          },
          {
            "text": "1 (4-pound) bone-in turkey breast",
            "quantity": 4,
            "measure": "pound",
            "food": "turkey breast",
            "weight": 1814.36948,
            "foodCategory": "Poultry",
            "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
            "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
          },
          {
            "text": "4 demi French baguettes, sliced in half",
            "quantity": 4,
            "measure": "<unit>",
            "food": "baguettes",
            "weight": 1200,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
            "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
          },
          {
            "text": "12 slices Swiss Cheese",
            "quantity": 12,
            "measure": "slice",
            "food": "Swiss Cheese",
            "weight": 336,
            "foodCategory": "Cheese",
            "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
            "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
          }
        ],
        "calories": 8031.129285423905,
        "totalWeight": 3859.513388439512,
        "totalTime": 375,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "sandwiches"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8031.129285423905,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 320.02449516153575,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 149.01005856668252,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.318332,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.9322608345712,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.1734542374286,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 687.3825694472602,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 652.6279606120087,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.75460883525146,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 74.95002101401599,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 585.4535633416888,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1587.8361458,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 9117.120975567957,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3727.6667435472214,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 970.9018911116184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7255.567006164616,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 73.40638389343889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 53.81769326282717,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 6386.241884854681,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1476.3375059176406,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.98119999922044,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.893574289674964,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.318519446989704,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 145.90443453746033,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.910386927158704,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2227.9697416745803,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 859.9697416745806,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 804,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 18.2496966344,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.171,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.426336647775984,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 44.209378116277605,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2031.4894896573069,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Blueberry Basil Margarita Cocktail recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/blueberry-margarita.jpeg",
        "url": "http://drinkwire.liquor.com/post/blueberry-basil-margarita-cocktail-recipe/",
        "yield": 4,
        "dietLabels": [
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Alcohol-Cocktail"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2.0 oz. Tres Agaves Blanco Tequila",
          "1.0 oz. agave nectar",
          "12-15 blueberries",
          "1 lime squeezed",
          "A couple sprigs of basil"
        ],
        "ingredients": [
          {
            "text": "2.0 oz. Tres Agaves Blanco Tequila",
            "quantity": 2,
            "measure": "ounce",
            "food": "Tequila",
            "weight": 56.69904625,
            "foodCategory": "liquors and cocktails",
            "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
            "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
          },
          {
            "text": "1.0 oz. agave nectar",
            "quantity": 1,
            "measure": "ounce",
            "food": "agave nectar",
            "weight": 28.349523125,
            "foodCategory": "sugar syrups",
            "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
            "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
          },
          {
            "text": "12-15 blueberries",
            "quantity": 13.5,
            "measure": "<unit>",
            "food": "blueberries",
            "weight": 18.360000000000003,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 lime squeezed",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "A couple sprigs of basil",
            "quantity": 2,
            "measure": "sprig",
            "food": "basil",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          }
        ],
        "calories": 243.539632975,
        "totalWeight": 174.408569375,
        "totalTime": 15,
        "cuisineType": [
          "world"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "alcohol cocktail"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 243.539632975,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.22018800000000005,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.0215208,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.0248792,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.07921560000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.37380157500001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 27.57568541875001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7981161562500003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.101117418750007,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 20.128161418750004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7308640000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.2505904625000004,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 30.291600000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.681600000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 95.41118092500001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.6028876185,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.1581556185,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 18.771161850000006,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.450800000000001,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.997920000000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.031655142775000006,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.026235561850000005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.25419567601250004,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0451241904625,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 9.181600000000001,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 9.181600000000001,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.28405199999999997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.537480000000002,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 116.03912080250001,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Potato Gratin",
        "image": "https://media.wincacademy.nl/react/images/final-project/potatoes-gratin.webp",
        "url": "http://www.cookstr.com/recipes/potato-gratin-2",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup milk",
          "1 cup heavy cream",
          "2 cups finely sliced leeks, white part only",
          "1 tablespoon roasted garlic purée (see note)",
          "1 tablespoon chopped rosemary leaves",
          "Pinch freshly ground nutmeg",
          "Coarse salt and freshly ground white pepper to taste",
          "5 tablespoons unsalted butter, at room temperature",
          "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices"
        ],
        "ingredients": [
          {
            "text": "1 cup milk",
            "quantity": 1,
            "measure": "cup",
            "food": "milk",
            "weight": 244,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 cup heavy cream",
            "quantity": 1,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 238,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 cups finely sliced leeks, white part only",
            "quantity": 2,
            "measure": "cup",
            "food": "leeks",
            "weight": 178,
            "foodCategory": "vegetables",
            "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
            "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
          },
          {
            "text": "1 tablespoon roasted garlic purée (see note)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "garlic",
            "weight": 8.499999999856291,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tablespoon chopped rosemary leaves",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "rosemary",
            "weight": 1.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
            "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
          },
          {
            "text": "Pinch freshly ground nutmeg",
            "quantity": 1,
            "measure": "pinch",
            "food": "ground nutmeg",
            "weight": 0.14583333352071937,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
            "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 13.304075000000262,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "white pepper",
            "weight": 0,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
            "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
          },
          {
            "text": "5 tablespoons unsalted butter, at room temperature",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices",
            "quantity": 4,
            "measure": "<unit>",
            "food": "Yukon Gold potatoes",
            "weight": 1476,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 2739.76762500077,
        "totalWeight": 2229.800431236176,
        "totalTime": 120,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2739.76762500077,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 155.63557208340066,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 96.38664016671514,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.32738,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 42.400860833339344,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.873602416666964,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 304.67288125004484,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 268.54834791667554,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.12453333336929,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 37.54896041667083,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.259086666668466,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 503.11,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5156.393388500102,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 753.6314368300897,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 435.86342097933505,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7098.92778449897,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.712683506415825,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.138100014571826,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1287.6176250001793,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1726.289291666676,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 316.5869749999608,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4738665833336944,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2360371249999487,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.685738375001428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.0317103333318585,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.14883333347143,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.14883333347143,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6471,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.9030000000000005,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.132799999999884,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 125.16649999999754,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1690.0881846123998,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Seafood Casserole",
        "image": "https://media.wincacademy.nl/react/images/final-project/seafood-casserol.jpeg",
        "url": "http://www.bigoven.com/recipe/Seafood-Casserole/296427",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "6 oz pasta or noodles",
          "1/2 cup mayonnaise or salad dressing",
          "1/2 cup white wine",
          "1 can condensed cream of mushroom soup",
          "1 cup cheddar cheese",
          "1/2 tsp dry mustard",
          "8 oz, can tuna, shrimp or crab",
          "1 cup breadcrumbs"
        ],
        "ingredients": [
          {
            "text": "6 oz pasta or noodles",
            "quantity": 6,
            "measure": "ounce",
            "food": "pasta",
            "weight": 170.09713875,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup mayonnaise or salad dressing",
            "quantity": 0.5,
            "measure": "cup",
            "food": "salad dressing",
            "weight": 125,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a67f1v3boelh4wasob4qib34t5bv",
            "image": "https://www.edamam.com/food-img/241/24178db68d42001caf980f8f209534cb.jpg"
          },
          {
            "text": "1/2 cup white wine",
            "quantity": 0.5,
            "measure": "cup",
            "food": "white wine",
            "weight": 117.6,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "1 can condensed cream of mushroom soup",
            "quantity": 1,
            "measure": "can",
            "food": "condensed cream of mushroom soup",
            "weight": 303,
            "foodCategory": "canned soup",
            "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
            "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
          },
          {
            "text": "1 cup cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/2 tsp dry mustard",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dry mustard",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
            "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
          },
          {
            "text": "8 oz, can tuna, shrimp or crab",
            "quantity": 8,
            "measure": "ounce",
            "food": "can tuna",
            "weight": 226.796185,
            "foodCategory": "canned seafood",
            "foodId": "food_a0jj77zb6yprvtasct45abh6qkxp",
            "image": "https://www.edamam.com/food-img/b53/b53adeb03d265a094fb598dd89f33450.jpg"
          },
          {
            "text": "1 cup breadcrumbs",
            "quantity": 1,
            "measure": "cup",
            "food": "breadcrumbs",
            "weight": 108,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          }
        ],
        "calories": 2690.7571038625,
        "totalWeight": 1183.49332375,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2690.7571038625,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 134.158510171125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 42.130519024687494,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6305059237000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.1820880252125,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.719843295,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 233.57303350462502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.026925064625,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.546108440000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.141053604625,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.85426525700001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 216.28662660000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4312.022405275,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1212.5197505875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 248.9446060875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1392.0777905625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.290660619250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.592083332875001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1541.4582893875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.79535145,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.071,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.351416280375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3694170786500002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 34.31560067035,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2685977671750002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 259.985332375,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 109.86533237500001,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 88.56,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.322902717500002,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.11955422,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.379734263125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 194.99208950874998,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 668.15201569525,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Green coconut curry with salmon",
        "image": "https://media.wincacademy.nl/react/images/final-project/coconut-curry-salmon.jpeg",
        "url": "http://www.aliceincookingland.com/recipe/green-coconut-curry-salmon/",
        "yield": 18,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 1/2 lb salmon",
          "1 zuchinni finely chopped",
          "2 green peppers",
          "2 cloves garlic diced",
          "1 lb mushrooms sliced",
          "2 heads baby bok choy cut into fourths",
          "3 tsp ginger finely grated",
          "4 tbsp grapeseed oil",
          "2 14-oz cans coconut milk",
          "4 tbsp green curry paste",
          "2 tbsp fish sauce",
          "1 lime juiced",
          "1/2 cup fresh basil chopped",
          "2 green onions sliced",
          "1 tsp salt",
          "1 tsp pepper",
          "1 package Aisian noodles we used Soba"
        ],
        "ingredients": [
          {
            "text": "1 1/2 lb salmon",
            "quantity": 1.5,
            "measure": "pound",
            "food": "salmon",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bhncugnadgibupafbeeapbislbom",
            "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
          },
          {
            "text": "1 zuchinni finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "zuchinni",
            "weight": 196,
            "foodCategory": "vegetables",
            "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
            "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
          },
          {
            "text": "2 green peppers",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green peppers",
            "weight": 232.57777777777778,
            "foodCategory": "vegetables",
            "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
            "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
          },
          {
            "text": "2 cloves garlic diced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lb mushrooms sliced",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 heads baby bok choy cut into fourths",
            "quantity": 2,
            "measure": "head",
            "food": "bok choy",
            "weight": 151.99999999999983,
            "foodCategory": "vegetables",
            "foodId": "food_bq7w3usaxapk30b8utp6lasy79lv",
            "image": "https://www.edamam.com/food-img/c76/c7698a4dc6baecd186476820b6b91cdc.jpg"
          },
          {
            "text": "3 tsp ginger finely grated",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "ginger",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "4 tbsp grapeseed oil",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "grapeseed oil",
            "weight": 54.4,
            "foodCategory": "Oils",
            "foodId": "food_br8vwihb5tm7wybd4ppzjaox5089",
            "image": "https://www.edamam.com/food-img/88b/88bb3399c7bf214d2bce6bd86780eaf2.jpg"
          },
          {
            "text": "2 14-oz cans coconut milk",
            "quantity": 28,
            "measure": "ounce",
            "food": "coconut milk",
            "weight": 793.7866475000001,
            "foodCategory": "non-dairy beverages",
            "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
            "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
          },
          {
            "text": "4 tbsp green curry paste",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "curry paste",
            "weight": 64,
            "foodCategory": "condiments and sauces",
            "foodId": "food_aojdol2are6zg7af2nincbe87jot",
            "image": "https://www.edamam.com/food-img/b6a/b6a9ebae5850f42eca0253827603ef9c.jpg"
          },
          {
            "text": "2 tbsp fish sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "fish sauce",
            "weight": 36,
            "foodCategory": "canned soup",
            "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
            "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
          },
          {
            "text": "1 lime juiced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "1/2 cup fresh basil chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "fresh basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "2 green onions sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green onions",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tsp pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 2.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package Aisian noodles we used Soba",
            "quantity": 1,
            "measure": "package",
            "food": "noodles",
            "weight": 340,
            "foodCategory": "grains",
            "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
            "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
          }
        ],
        "calories": 5112.068417170556,
        "totalWeight": 3132.645350277778,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5112.068417170556,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 336.96978048289225,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 181.28297571055614,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2074,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.68709068526722,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.26260006699724,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 328.1063749712389,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 297.98885939653667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.11751557470222,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.25989848546667,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 230.65632545302884,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 665.70150452552,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6120.048996514333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 673.4619165553777,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 988.5084524161775,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8413.89930292511,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 51.18356467470444,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.335398636711112,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3885.2424455315554,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 246.90042395519998,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 345.5847355913334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.220408624813333,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.799611279027777,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 114.07125079756834,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.403383890282219,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1891.6150528181777,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 732.2150528181777,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 683.4000000000001,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 23.33407684378,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.9271847400000002,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 44.03291935599778,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 218.48374043807544,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2193.2876144164557,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Vegan Herb Crackers recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/herb-crackers.jpeg",        
        "url": "https://elanaspantry.com/herb-crackers/",
        "yield": 15,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "2 cups blanched almond flour (not almond meal)",
          "¾ teaspoon celtic sea salt",
          "2 tablespoons herbes de provence",
          "1 tablespoon olive oil",
          "2 tablespoons water"
        ],
        "ingredients": [
          {
            "text": "2 cups blanched almond flour (not almond meal)",
            "quantity": 2,
            "measure": "cup",
            "food": "blanched almond flour",
            "weight": 224,
            "foodCategory": "grains",
            "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
            "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
          },
          {
            "text": "¾ teaspoon celtic sea salt",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "sea salt",
            "weight": 3.6406250001846567,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons herbes de provence",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "herbes de provence",
            "weight": 5.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons water",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "water",
            "weight": 29.573529562,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1445.316,
        "totalWeight": 274.08661383452016,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1445.316,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.81162,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.739500000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 9.875115000000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.484865,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.10236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 20.920359999999995,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.182000000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.8203400000000025,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 50.60074000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 633.6317435258399,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 260.2693461122648,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 12.191866138345203,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1675.5672467418017,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.174523178099317,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.33829043722872015,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1074.4284000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.260000000000002,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.7,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.027702000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.021546000000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.26676000000000005,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.029700000000000008,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.796000000000001,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14.796000000000001,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.34117,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.71000000000001,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 29.967842200983043,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Baked Chicken Parm",
        "image": "https://media.wincacademy.nl/react/images/final-project/baked-chicken-parm.jpeg",
        "url": "https://food52.com/recipes/17016-baked-chicken-parm",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon oil",
          "1 1/2 cup panko",
          "1/2 cup grated parmesan cheese",
          "1/4 teaspoon salt",
          "1/4 teaspoon ground black pepper",
          "1/8 teaspoon garlic powder",
          "1 teaspoon dried italian seasoning",
          "2 large eggs",
          "2 large boneless, skinless chicken breast halves",
          "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
          "2 cups purchased marinara sauce",
          "4 servings angel hair pasta, prepared according to package instructions"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 1/2 cup panko",
            "quantity": 1.5,
            "measure": "cup",
            "food": "panko",
            "weight": 90,
            "foodCategory": "grains",
            "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
            "image": null
          },
          {
            "text": "1/2 cup grated parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon ground black pepper",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 0.575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1/8 teaspoon garlic powder",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "garlic powder",
            "weight": 0.3875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1 teaspoon dried italian seasoning",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "italian seasoning",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "2 large eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 100,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 large boneless, skinless chicken breast halves",
            "quantity": 2,
            "measure": "half",
            "food": "boneless, skinless chicken breast",
            "weight": 217.5,
            "foodCategory": "Poultry",
            "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
            "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
          },
          {
            "text": "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 66,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 cups purchased marinara sauce",
            "quantity": 2,
            "measure": "cup",
            "food": "marinara sauce",
            "weight": 528,
            "foodCategory": "canned soup",
            "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
            "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
          },
          {
            "text": "4 servings angel hair pasta, prepared according to package instructions",
            "quantity": 4,
            "measure": "serving",
            "food": "angel hair pasta",
            "weight": 1200,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 6118.390125,
        "totalWeight": 2293.315625,
        "totalTime": 116,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6118.390125,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.64538593750002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.6237216875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.913065,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.21728721875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 17.610497531249997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1004.0793118749999,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 952.744961875,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 51.33435000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 65.13982125000001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 276.6349159375,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 659.2151250000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4683.3015000000005,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1981.3793750000002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 857.972,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5363.8595000000005,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.297121875000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 25.1352396875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3941.5084375,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.0112187500001,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.06465,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5054243437500001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.42291875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 62.323053718749996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.66494884375,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.59959375,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.59959375,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.8197875000000003,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.767765625,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.466153125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 106.57482812500001,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 863.4466100000002,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Parmesan grissini",
        "image": "https://media.wincacademy.nl/react/images/final-project/parmesan-grissini.jpeg",
        "url": "https://www.goodfood.com.au/recipes/parmesan-grissini-20121001-33zi8",
        "yield": 6,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon (3 g) instant dried yeast",
          "a pinch of caster (superfine) sugar",
          "1 tablespoon extra virgin olive oil",
          "250 g (9 oz/2 cups) white strong flour",
          "60 g (2¼ oz/⅔ cup) grated parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon (3 g) instant dried yeast",
            "quantity": 3,
            "measure": "gram",
            "food": "yeast",
            "weight": 3,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "a pinch of caster (superfine) sugar",
            "quantity": 1,
            "measure": "pinch",
            "food": "sugar",
            "weight": 0.2604166669968817,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 tablespoon extra virgin olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "extra virgin olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "250 g (9 oz/2 cups) white strong flour",
            "quantity": 250,
            "measure": "gram",
            "food": "flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "60 g (2¼ oz/⅔ cup) grated parmesan cheese",
            "quantity": 60,
            "measure": "gram",
            "food": "parmesan cheese",
            "weight": 60,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 1275.297812501278,
        "totalWeight": 326.7604166669969,
        "totalTime": 90,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "biscuits and cookies"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1275.297812501278,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 31.676299999999998,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.12761,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.705504999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.7950150000000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.2039645836635,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 186.64696458366348,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.557,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.414895833662888,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.25989583366288793,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 48.48819999999999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.8,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 832.40260416667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 748.93760416667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.02,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 351.4902083333399,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.557830208333498,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6382260416667,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 705.51,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 124.19999999999999,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.009,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6530999999999999,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4192494791667294,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.4936,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.20959999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 139.39999999999998,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 139.39999999999998,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.7221,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.3,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.21925,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.909,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 47.4484520833334,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Easy Chili Almonds recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/easy-chili-almonds.jpeg",
        "url": "http://www.pumpkinnspice.com/2017/02/05/easy-chili-almonds/",
        "yield": 2,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups California Almonds",
          "1 tablespoon olive oil",
          "1 1/2 teaspoons chili powder",
          "1 tablespoon kosher salt",
          "2 tablespoons fresh cilantro, chopped"
        ],
        "ingredients": [
          {
            "text": "2 cups California Almonds",
            "quantity": 2,
            "measure": "cup",
            "food": "Almonds",
            "weight": 286,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons chili powder",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 4.050000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "1 tablespoon kosher salt",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons fresh cilantro, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "cilantro",
            "weight": 1.999999999966186,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1787.160999999992,
        "totalWeight": 307.0732646524249,
        "totalTime": 10,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1787.160999999992,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 156.88853999999984,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.837790999999994,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.042899999999999994,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.22114049999989,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 37.00658799999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 63.71924999999876,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 26.50384999999971,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 37.21539999999905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.749594999999704,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.07672999999927,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 710.5504139999216,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 784.5455835165673,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 778.7697326465158,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2186.0318611720204,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.427276773352515,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.108873264652289,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1388.7699999999836,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.80149999988606,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.5683499999908702,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5977649999999773,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.2959899999999447,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.839559999999622,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.47960699999994966,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.21399999997902,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.21399999997902,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 76.83371999999916,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.60784999989518,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 14.895221529273739,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Korean Seasoned Potatoes (감자 조&",
        "image": "https://media.wincacademy.nl/react/images/final-project/korean-potatoes.webp",
        "url": "http://www.food.com/recipe/korean-seasoned-potatoes-44048-51088-51312-390718",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium potatoes",
          "2 tablespoons soy sauce",
          "2 teaspoons sugar (or sweetener of your choice)",
          "1 teaspoon garlic, minced",
          "2 teaspoons sesame seeds",
          "1 -2 teaspoon sesame seed oil",
          "4 tablespoons scallions, minced"
        ],
        "ingredients": [
          {
            "text": "2 medium potatoes",
            "quantity": 2,
            "measure": "<unit>",
            "food": "potatoes",
            "weight": 426,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "2 tablespoons soy sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "soy sauce",
            "weight": 32,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
          },
          {
            "text": "2 teaspoons sugar (or sweetener of your choice)",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 8.4,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 teaspoon garlic, minced",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 2.8,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons sesame seeds",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sesame seeds",
            "weight": 6.000000000304327,
            "foodCategory": "plant-based protein",
            "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
            "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
          },
          {
            "text": "1 -2 teaspoon sesame seed oil",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "4 tablespoons scallions, minced",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "scallions",
            "weight": 24,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          }
        ],
        "calories": 483.3900000017438,
        "totalWeight": 505.9500000003043,
        "totalTime": 20,
        "cuisineType": [
          "south east asian",
          "korean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 483.3900000017438,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.35560000015116,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.058849500021172,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.026662500000000002,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.440138000057089,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.498037000066261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 88.49240000007136,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 77.47360000003545,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.018800000035911,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.439200000000914,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 8.3832,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.891080000053957,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1788.3800000000335,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 142.6120000029672,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 148.2200000010682,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2038.376000001424,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.06680000004428,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.105720000023585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 346.8440000019142,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 89.3076,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.41762000000240723,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.22781600000075167,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.60926000001374,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.4006800000024042,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 93.9040000002952,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 93.9040000002952,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3703900000007612,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.63435,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 384.2389200000143,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Oven Baked Mexican Rice recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/mexican-rice.webp",
        "url": "http://keciasflavorbreakthrough.com/oven-baked-mexican-rice/",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup whole grain rice",
          "2 cup chicken or vegetable broth",
          "1 cup tomato sauce",
          "6 scallions chopped, divided",
          "1 jalapeno pepper, seeds, veins removed and diced",
          "½ bell pepper diced",
          "1 clove garlic minced",
          "½ cup frozen sweet corn kernels, thawed",
          "1 tsp cilantro",
          "2 tsp cumin",
          "1 tsp chili powder",
          "2 tsp salt",
          "1/2 cup shredded cheddar or Mexican blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 cup whole grain rice",
            "quantity": 1,
            "measure": "cup",
            "food": "whole grain rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
          },
          {
            "text": "2 cup chicken or vegetable broth",
            "quantity": 2,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 454,
            "foodCategory": "Vegan products",
            "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
            "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
          },
          {
            "text": "1 cup tomato sauce",
            "quantity": 1,
            "measure": "cup",
            "food": "tomato sauce",
            "weight": 245,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 scallions chopped, divided",
            "quantity": 6,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 90,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 jalapeno pepper, seeds, veins removed and diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "jalapeno pepper",
            "weight": 14,
            "foodCategory": "vegetables",
            "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
            "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
          },
          {
            "text": "½ bell pepper diced",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "bell pepper",
            "weight": 59.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 clove garlic minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "½ cup frozen sweet corn kernels, thawed",
            "quantity": 0.5,
            "measure": "cup",
            "food": "corn kernels",
            "weight": 70.5,
            "foodCategory": "vegetables",
            "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
            "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
          },
          {
            "text": "1 tsp cilantro",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "cilantro",
            "weight": 0.33333333335024,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          },
          {
            "text": "2 tsp cumin",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1 tsp chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 cup shredded cheddar or Mexican blend cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mexican blend cheese",
            "weight": 56,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 1123.0241452052305,
        "totalWeight": 1192.4077378998313,
        "totalTime": 50,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1123.0241452052305,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 24.70364773767342,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.97607104170667,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.384159168186714,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.43750068367334,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 192.94110791691398,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.34687236822018,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.594235548693803,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.516731647060148,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 36.73504390126037,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2765.5383320000396,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 612.3098797637601,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 393.489078675556,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2051.7486483513735,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.424348741549686,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.386391343193232,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 969.6826463092882,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 365.3858809112703,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 129.28132405812454,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0456329733333447,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6373697849600275,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.972286409053524,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.7363836725666917,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 160.10624152709713,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.89624152709712,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.6890773940000001,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28166164000000005,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.9083901328137545,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 211.47728196646577,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 922.7590471832152,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Swedish Pancakes",
        "image": "https://media.wincacademy.nl/react/images/final-project/swedish-pancakes.webp",
        "url": "http://scratchthiswithsandy.com/2014/01/19/swedish-pancakes/",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "* 4 egg",
          "* 2 cup milk",
          "* 3/4 cup flour",
          "* 1 tbl sugar",
          "* pinch of salt",
          "* 2 tbl melted butter"
        ],
        "ingredients": [
          {
            "text": "* 4 egg",
            "quantity": 4,
            "measure": "<unit>",
            "food": "egg",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "* 2 cup milk",
            "quantity": 2,
            "measure": "cup",
            "food": "milk",
            "weight": 488,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "* 3/4 cup flour",
            "quantity": 0.75,
            "measure": "cup",
            "food": "flour",
            "weight": 93.75,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "* 1 tbl sugar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "sugar",
            "weight": 12.4999999997887,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "* pinch of salt",
            "quantity": 1,
            "measure": "pinch",
            "food": "salt",
            "weight": 0.380208333815447,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "* 2 tbl melted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          }
        ],
        "calories": 1136.8929999991822,
        "totalWeight": 795.030208333604,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "pancake"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1136.8929999991822,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 56.171189999999996,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.211744500000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9963119999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 16.3058465,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.489919499999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 108.71756499978872,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 106.18631499978872,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.53125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 38.02556499978912,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 12.474999999789123,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.900975,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 749.6999999999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 606.5651460201889,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 668.8547500001135,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.63680208333815,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 988.9289166667011,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.266459687501484,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.707840208333794,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 858.546,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 693.9359999999999,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.40719999999999995,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.66029099999996,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.747123,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5101819999999999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.467,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.467,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.77508,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 10.21,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.86273,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.24925,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 577.3256204166676,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Pizza with taleggio, prosciutto and pear",
        "image": "https://media.wincacademy.nl/react/images/final-project/pizza-pear.jpeg",
        "url": "https://www.goodfood.com.au/recipes/pizza-with-taleggio-prosciutto-and-pear-20111018-29wks",
        "yield": 12,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500g flour",
          "1 tbsp instant yeast",
          "1 tsp salt",
          "300ml warm water",
          "2 tbsp olive oil",
          "For the topping",
          "1-2 tbsp olive oil",
          "300g taleggio",
          "8 slices prosciutto",
          "2 pears, finely sliced",
          "handful fresh rocket"
        ],
        "ingredients": [
          {
            "text": "500g flour",
            "quantity": 500,
            "measure": "gram",
            "food": "flour",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1 tbsp instant yeast",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "yeast",
            "weight": 12,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "300ml warm water",
            "quantity": 300,
            "measure": "milliliter",
            "food": "water",
            "weight": 300,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1-2 tbsp olive oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 20.25,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "300g taleggio",
            "quantity": 300,
            "measure": "gram",
            "food": "taleggio",
            "weight": 300,
            "foodCategory": "Cheese",
            "foodId": "food_b6s9dpea421339bjgiudnaoxh7nl",
            "image": "https://www.edamam.com/food-img/419/419fc950e8f2a589a11d63efb28b8bef.jpg"
          },
          {
            "text": "8 slices prosciutto",
            "quantity": 8,
            "measure": "slice",
            "food": "prosciutto",
            "weight": 120,
            "foodCategory": "cured meats",
            "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
            "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
          },
          {
            "text": "2 pears, finely sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pears",
            "weight": 372.8888888888889,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "handful fresh rocket",
            "quantity": 1,
            "measure": "handful",
            "food": "rocket",
            "weight": 2.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
            "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
          }
        ],
        "calories": 3623.8616666666667,
        "totalWeight": 1654.638888888889,
        "totalTime": 120,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3623.8616666666667,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 136.36574444444446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 56.61658555555556,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.39480416666666,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.733648055555555,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 445.1186277777778,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 416.7910722222223,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.327555555555556,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.137916666666676,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.66970000000003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 300,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5793.4688888888895,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1301.6325,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.75722222222225,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2264.848611111111,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.404700000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.379438888888888,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2085.086666666667,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 729.7038888888889,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.445222222222224,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.729046666666667,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.533501111111111,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.229176111111112,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6949627777777776,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 631.3272222222222,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 631.3272222222222,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.9644,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2800000000000002,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.504591666666666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 55.11461111111112,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 897.795861111111,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Strawberry Cheesecake recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/strawberry-cheesecake.webp",
        "url": "http://allrecipes.com/recipe/222588/strawberry-cheesecake/",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/4 cups graham cracker crumbs",
          "1/4 cup white sugar",
          "2 teaspoons ground cinnamon",
          "1/3 cup butter, melted",
          "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
          "1 tablespoon cornstarch",
          "3 (8 ounce) packages cream cheese, softened",
          "1 (14 ounce) can sweetened condensed milk",
          "1/4 cup lemon juice",
          "1/2 teaspoon vanilla extract",
          "3 eggs",
          "1 tablespoon water (optional)"
        ],
        "ingredients": [
          {
            "text": "1 1/4 cups graham cracker crumbs",
            "quantity": 1.25,
            "measure": "cup",
            "food": "cracker crumbs",
            "weight": 65,
            "foodCategory": "crackers",
            "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
            "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
          },
          {
            "text": "1/4 cup white sugar",
            "quantity": 0.25,
            "measure": "cup",
            "food": "white sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 teaspoons ground cinnamon",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "1/3 cup butter, melted",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "butter",
            "weight": 75.66666666666666,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
            "quantity": 20,
            "measure": "ounce",
            "food": "strawberries",
            "weight": 566.9904625,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "1 tablespoon cornstarch",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cornstarch",
            "weight": 7.999999999864745,
            "foodCategory": null,
            "foodId": "food_bevnfkfbvjm45pbbgj9nsb3ypntm",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "3 (8 ounce) packages cream cheese, softened",
            "quantity": 24,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 680.388555,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1 (14 ounce) can sweetened condensed milk",
            "quantity": 14,
            "measure": "ounce",
            "food": "sweetened condensed milk",
            "weight": 396.89332375000004,
            "foodCategory": "Milk",
            "foodId": "food_a89byenbz1jssabxmx7i6aa77jz1",
            "image": "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg"
          },
          {
            "text": "1/4 cup lemon juice",
            "quantity": 0.25,
            "measure": "cup",
            "food": "lemon juice",
            "weight": 61,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1/2 teaspoon vanilla extract",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla extract",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "3 eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 tablespoon water (optional)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "water",
            "weight": 14.786764781,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 5097.185375336985,
        "totalWeight": 2055.0257726975315,
        "totalTime": 645,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5097.185375336985,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 360.2325051190833,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 199.67873967423336,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.2287733333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.42800230728746,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 25.31875591992914,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 393.92277982837663,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.0717705783778,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.851009249998782,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 323.13166435175,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 97.1447459855413,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1525.9344739083335,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3659.6764554620613,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2110.1749002934275,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 274.24919523113937,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3641.375844637496,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.102928053707698,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.184514197728019,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2305.5836883874827,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3514.3330755000006,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 367.5142183675,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9711577467083332,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5607334889666666,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.099651569875,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0063791067374999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 427.49071766249995,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 335.1907176625,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 54.599999999999994,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.724035345333334,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.5911179775,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.544035135416665,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 86.93748487916668,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1181.137699732458,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Mushroom and Spinach Ravioli",
        "image": "https://media.wincacademy.nl/react/images/final-project/spinach-ravioli.jpeg",
        "url": "http://ourlifetastesgood.blogspot.com/2012/07/mushroom-and-spinach-ravioli-with-chive.html",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon olive oil",
          "1 1/2 teaspoons water (or more as needed)",
          "2 eggs",
          "2 cups all-purpose flour (or more as needed)",
          "1/4 teaspoon salt",
          "1 teaspoon olive oil",
          "1 clove garlic, minced",
          "1/2 chopped onion",
          "1 (8 ounce) package fresh mushrooms, chopped",
          "4 ounces cream cheese softened",
          "1/3 cup grated Parmesan Cheese",
          "1/2 cup Mozzarella Cheese",
          "1/2 cup frozen spinach, thawed and drained",
          "1 tablespoon chopped fresh chives",
          "1 tablespoon fresh parsley",
          "1/2 teaspoon ground cayenne pepper",
          "salt",
          "pepper",
          "1 egg white beaten",
          "3 tablespoons unsalted butter",
          "1 1/2 teaspoons chopped fresh chives"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons water (or more as needed)",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "water",
            "weight": 7.393382391,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 86,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 cups all-purpose flour (or more as needed)",
            "quantity": 2,
            "measure": "cup",
            "food": "all-purpose flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 chopped onion",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "onion",
            "weight": 62.5,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 (8 ounce) package fresh mushrooms, chopped",
            "quantity": 8,
            "measure": "ounce",
            "food": "mushrooms",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "4 ounces cream cheese softened",
            "quantity": 4,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1/3 cup grated Parmesan Cheese",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan Cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup Mozzarella Cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mozzarella Cheese",
            "weight": 129.9375,
            "foodCategory": "Cheese",
            "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
            "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
          },
          {
            "text": "1/2 cup frozen spinach, thawed and drained",
            "quantity": 0.5,
            "measure": "cup",
            "food": "spinach",
            "weight": 15,
            "foodCategory": "vegetables",
            "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
            "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
          },
          {
            "text": "1 tablespoon chopped fresh chives",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chives",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          },
          {
            "text": "1 tablespoon fresh parsley",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "parsley",
            "weight": 3.8,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1/2 teaspoon ground cayenne pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cayenne pepper",
            "weight": 0.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
            "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
          },
          {
            "text": "salt",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 6.193763459345999,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 3.0968817296729996,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 egg white beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg white",
            "weight": 26.4,
            "foodCategory": "Eggs",
            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
          },
          {
            "text": "3 tablespoons unsalted butter",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 42.599999999999994,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 1/2 teaspoons chopped fresh chives",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chives",
            "weight": 1.5,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          }
        ],
        "calories": 2523.210560191479,
        "totalWeight": 1034.356009510093,
        "totalTime": 75,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2523.210560191479,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 139.10042037038735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 76.66771694127705,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4291079999999998,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.58860721698228,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.370521302387136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 218.72712386187592,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 206.98745093426865,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.739672927607268,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.017192025319906,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 101.38330313846303,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 685.5990267500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2404.2923580980423,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1609.214281027642,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 178.172863735545,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1740.9563865685082,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.68506486148633,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.56972100746163,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1691.469395282883,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1318.3283641170117,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 22.894819885000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.306116973118047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.3985371664384116,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 23.86636554774516,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8420161031083486,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 888.1944240190444,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 233.19442401904442,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 385,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.77916245525,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.3905121750000005,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.1493016567386,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 167.2074463239747,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 561.1935454974051,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Cajun Pork Pinwheels",
        "image": "https://media.wincacademy.nl/react/images/final-project/cayun-pork-pinwheel.jpeg",
        "url": "https://www.bigoven.com/recipe/cajun-pork-pinwheels/158806",
        "yield": 6,
        "dietLabels": [
          "High-Protein",
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pork tenderloins ; about 1 pound each",
          "1 tablespoon Vegetable oil",
          "1 cup red bell pepper ; finely chopped",
          "1/2 cup Onion ; finely chopped",
          "1/2 cup celery ; finely chopped",
          "1 teaspoon dried thyme leaves ; crushed",
          "1/4 teaspoon Garlic salt",
          "1/2 teaspoon Ground red pepper",
          "1/2 teaspoon Paprika",
          "1 tablespoon fennel seed ; crushed",
          "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)"
        ],
        "ingredients": [
          {
            "text": "2 pork tenderloins ; about 1 pound each",
            "quantity": 2,
            "measure": "pound",
            "food": "pork tenderloins",
            "weight": 907.18474,
            "foodCategory": "meats",
            "foodId": "food_bgd2x5qbzpcbz0apfim52a8wr97x",
            "image": "https://www.edamam.com/food-img/4df/4dfc18749ffa490e3d4daf9dd2ea4d34.jpg"
          },
          {
            "text": "1 tablespoon Vegetable oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Vegetable oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 cup red bell pepper ; finely chopped",
            "quantity": 1,
            "measure": "cup",
            "food": "red bell pepper",
            "weight": 149,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 cup Onion ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup celery ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "celery",
            "weight": 50.5,
            "foodCategory": "vegetables",
            "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "1 teaspoon dried thyme leaves ; crushed",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried thyme",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1/4 teaspoon Garlic salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "Garlic salt",
            "weight": 0.775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1/2 teaspoon Ground red pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper",
            "weight": 1.5520833334120565,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 teaspoon Paprika",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Paprika",
            "weight": 1.15,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
            "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
          },
          {
            "text": "1 tablespoon fennel seed ; crushed",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "fennel seed",
            "weight": 5.8,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
            "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
          },
          {
            "text": "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "seasoning",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          }
        ],
        "calories": 1277.8849994333577,
        "totalWeight": 1212.4618233334124,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1277.8849994333577,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 46.243549005900235,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.316188002930023,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.41763718108000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.405505878150002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.625709285193389,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.89075312500475,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 15.242159375003098,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.648593750001652,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.573730000003305,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 182.1281044945008,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 560.18657695,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 505.07734489333643,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.30192601333886,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 294.8478858100095,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4104.8568726235,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.403798837433673,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 17.090634614433537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2208.340013956687,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.087270833457,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.65816041676715,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 8.631749814460042,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.1252729659434006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.261679644134105,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.2544416604502295,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.37170833336955,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.37170833336955,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.481492615600001,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.585476509,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.9135315232679115,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.6461020833372,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 905.3225831408392,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Fire Roasted Tomato Soup recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/tomato-soup.jpeg",
        "url": "http://therecipecritic.com/2013/02/fire-roasted-tomato-soup/",
        "yield": 8,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Mediterranean",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 T olive oil",
          "8 oz can tomato sauce",
          "6 oz can tomato paste",
          "28 oz can whole tomatoes",
          "2 14 oz cans fire roasted diced tomatoes",
          "2 cups water",
          "2 cups chicken broth",
          "2 tsp salt",
          "1/2 tsp pepper",
          "1 1/2 cups heavy cream",
          "1/4 cup parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 cloves garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 T olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "8 oz can tomato sauce",
            "quantity": 8,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 226.796185,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 oz can tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "28 oz can whole tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "whole tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 14 oz cans fire roasted diced tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "diced tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 cups water",
            "quantity": 2,
            "measure": "cup",
            "food": "water",
            "weight": 474,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 cups chicken broth",
            "quantity": 2,
            "measure": "cup",
            "food": "chicken broth",
            "weight": 480,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 tsp pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 1.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 1/2 cups heavy cream",
            "quantity": 1.5,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 357,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 cup parmesan cheese",
            "quantity": 0.25,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 37.1765625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2098.9340903750003,
        "totalWeight": 3463.8814151342513,
        "totalTime": 55,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "soup"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2098.9340903750003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 157.603754438375,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.36432640115001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.8967418560875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.816557503037501,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.57510001012503,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 98.60943194137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.96566806875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 91.87988720825001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 57.249755738250016,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 528.7700625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 8040.563791133251,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1367.2937993322207,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 345.2976253638426,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6453.095646035741,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.285999876568027,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.353450237759252,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1129.2093990125002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2046.1006295250002,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 267.21124150624996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.616240673275,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2471676422875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.833612026075002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.018696610325001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 230.128036275,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 230.128036275,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.0887187500000002,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6848828125,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.64674290825,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 85.70992423,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 3072.464483754519,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Homemade Sweet Spaghetti Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/sweet-spaghetti-sauce.jpeg",
        "url": "https://www.recipezazz.com/recipe/homemade-sweet-spaghetti-sauce-4752",
        "yield": 8,
        "dietLabels": [],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon olive oil (or coconut oil)",
          "1 to 2 garlic cloves, minced",
          "1 pound ground turkey (or 1 pound lean ground beef, optional)",
          "1 can (32 ounce) tomato sauce (no-salt-added)",
          "8 ounces red wine",
          "24 ounces water (or use all water and no wine)",
          "3 cans (6 ounce) tomato paste",
          "3 to 4 tablespoons instant minced onion",
          "1/4 cup granulated sugar (more less to your taste)",
          "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
          "1 teaspoon dried basil (see note)",
          "1/2 teaspoon dried oregano",
          "1 teaspoon onion powder"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon olive oil (or coconut oil)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 to 2 garlic cloves, minced",
            "quantity": 1.5,
            "measure": "clove",
            "food": "garlic",
            "weight": 4.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 pound ground turkey (or 1 pound lean ground beef, optional)",
            "quantity": 1,
            "measure": "pound",
            "food": "ground turkey",
            "weight": 453.59237,
            "foodCategory": "Poultry",
            "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
            "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
          },
          {
            "text": "1 can (32 ounce) tomato sauce (no-salt-added)",
            "quantity": 32,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 907.18474,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "8 ounces red wine",
            "quantity": 8,
            "measure": "ounce",
            "food": "red wine",
            "weight": 226.796185,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "24 ounces water (or use all water and no wine)",
            "quantity": 24,
            "measure": "ounce",
            "food": "water",
            "weight": 680.388555,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cans (6 ounce) tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "3 to 4 tablespoons instant minced onion",
            "quantity": 3.5,
            "measure": "tablespoon",
            "food": "onion",
            "weight": 35,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/4 cup granulated sugar (more less to your taste)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "granulated sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 4.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon dried basil (see note)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried basil",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_abrithza96sev8ae5za0paqf42o0",
            "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
          },
          {
            "text": "1/2 teaspoon dried oregano",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dried oregano",
            "weight": 0.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 teaspoon onion powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "onion powder",
            "weight": 2.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
            "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
          }
        ],
        "calories": 1565.9824562250003,
        "totalWeight": 2544.6589887499995,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack",
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1565.9824562250003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.898536314125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.633647450949999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4672001411,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.346231165462502,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.825390744512502,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.58068906012502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 121.46823527137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.112453788749995,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 106.04028459075,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.69633054550003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 312.97873530000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5948.538027925,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 362.68973530000005,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 359.52818212500006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5900.798736575001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.922087522749997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.389442611625002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1372.8893675125003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 420.25694225000007,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 105.32690518625,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6680063943000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.6646896178375001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.40809048785001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.07339265715,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 147.753711,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 147.753711,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.535923700000001,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8143694800000003,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.906400355250003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 69.2513312775,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2191.2693134367505,
            "unit": "g"
          }
        }
      }
    }
  ]
}`),bO=({recipe:e,onBack:n})=>(Oe.useEffect(()=>{window.scrollTo(0,0)},[]),ie.jsxs("div",{children:[ie.jsx("button",{onClick:n,children:"Back"}),ie.jsxs("div",{children:[ie.jsx("img",{src:e.image,alt:e.label,width:"100vw"}),ie.jsxs("p",{children:["Mealtype: ",e.mealType]}),ie.jsx("h1",{children:e.label}),e.totalTime>0&&ie.jsxs("p",{children:["Total cooking time: ",e.totalTime]}),ie.jsxs("p",{children:["Servings: ",e.yield]}),ie.jsx("h2",{children:"Ingredients:"}),ie.jsx("ul",{children:e.ingredientLines.map(i=>ie.jsx("li",{children:i},i))}),ie.jsxs("p",{children:["Dishtype: ",e.dishType]}),ie.jsxs("p",{children:["Health labels: ",e.healthLabels.join(", ")]}),ie.jsxs("p",{children:["Diet label: ",e.dietLabels.join(", ")]}),ie.jsxs("p",{children:["Cautions: ",e.cautions.join(", ")]}),ie.jsx("h2",{children:"Total nutrients:"}),ie.jsxs("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[ie.jsxs("div",{children:[ie.jsx("p",{children:Math.round(e.totalNutrients.ENERC_KCAL.quantity)}),ie.jsx("p",{children:"CALORIES"})]}),ie.jsxs("div",{children:[ie.jsx("p",{children:Math.round(e.totalNutrients.CHOCDF.quantity)}),ie.jsx("p",{children:"CARBS"})]}),ie.jsxs("div",{children:[ie.jsx("p",{children:Math.round(e.totalNutrients.PROCNT.quantity)}),ie.jsx("p",{children:"PROTEIN"})]}),ie.jsxs("div",{children:[ie.jsx("p",{children:Math.round(e.totalNutrients.FAT.quantity)}),ie.jsx("p",{children:"FAT"})]}),ie.jsxs("div",{children:[ie.jsx("p",{children:Math.round(e.totalNutrients.CHOLE.quantity)}),ie.jsx("p",{children:"CHOLESTEROL"})]}),ie.jsxs("div",{children:[ie.jsx("p",{children:Math.round(e.totalNutrients.NA.quantity)}),ie.jsx("p",{children:"SODIUM"})]})]})]})]})),yO=()=>{const[e,n]=Oe.useState(""),[i,l]=Oe.useState(),s=g=>{n(g.target.value)},c=g=>{l(g)};if(i)return ie.jsx(bO,{recipe:i,onBack:()=>l()});const f=pO.hits.filter(g=>g.recipe.label.toLowerCase().replace(/[-\s]/g,"").includes(e.toLowerCase().replace(/[-\s]/g,""))||g.recipe.healthLabels.some(h=>h.toLowerCase().replace(/[-\s]/g,"").includes(e.toLowerCase().replace(/[-\s]/g,""))));return ie.jsxs(u1,{flexDir:"column",children:[ie.jsx("h1",{children:"Your Recipe App"}),ie.jsx("input",{type:"search",value:e,onChange:s}),f.map(g=>{const h=g.recipe;return ie.jsxs("div",{onClick:()=>c(h),style:{cursor:"pointer",border:"1px solid #ddd",borderRadius:"12px",padding:"16px",width:"320px",margin:"12px"},children:[ie.jsx("h2",{children:h.label}),ie.jsx("img",{src:h.image,alt:h.label,width:"100%"}),h.dietLabels.length>0&&ie.jsxs("p",{style:{marginTop:8},children:["Diet: ",h.dietLabels.join(", ")]}),h.cautions.length>0&&ie.jsxs("p",{style:{marginTop:4},children:["Cautions: ",h.cautions.join(", ")]}),ie.jsxs("p",{style:{marginTop:4},children:["Meal type: ",h.mealType.join(", ")]}),ie.jsxs("p",{children:["Dish type: ",h.dishType.join(", ")]}),h.healthLabels.includes("Vegan")&&ie.jsx("p",{children:"🌱 Vegan"}),h.healthLabels.includes("Vegetarian")&&ie.jsx("p",{children:"🥦 Vegetarian"})]},h.label)})]})},vO=()=>ie.jsx(yO,{});Px.createRoot(document.getElementById("root")).render(ie.jsx(Oe.StrictMode,{children:ie.jsx(jS,{value:hO,children:ie.jsx(vO,{})})}));
