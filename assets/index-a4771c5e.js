var On=Object.defineProperty;var _n=(e,n,t)=>n in e?On(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var zn=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var kn=(e,n,t)=>(_n(e,typeof n!="symbol"?n+"":n,t),t);var Hn=zn((exports,module)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const main="";function makeMap(e,n){const t=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)t[o[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function normalizeStyle(e){if(isArray$2(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],r=isString$1(o)?parseStringStyle(o):normalizeStyle(o);if(r)for(const i in r)n[i]=r[i]}return n}else{if(isString$1(e))return e;if(isObject$1(e))return e}}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*.*?\*\//gs;function parseStringStyle(e){const n={};return e.replace(styleCommentRE,"").split(listDelimiterRE).forEach(t=>{if(t){const o=t.split(propertyDelimiterRE);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function normalizeClass(e){let n="";if(isString$1(e))n=e;else if(isArray$2(e))for(let t=0;t<e.length;t++){const o=normalizeClass(e[t]);o&&(n+=o+" ")}else if(isObject$1(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(e){return!!e||e===""}const toDisplayString=e=>isString$1(e)?e:e==null?"":isArray$2(e)||isObject$1(e)&&(e.toString===objectToString$1||!isFunction$1(e.toString))?JSON.stringify(e,replacer,2):String(e),replacer=(e,n)=>n&&n.__v_isRef?replacer(e,n.value):isMap(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,r])=>(t[`${o} =>`]=r,t),{})}:isSet(n)?{[`Set(${n.size})`]:[...n.values()]}:isObject$1(n)&&!isArray$2(n)&&!isPlainObject$2(n)?String(n):n,EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,onRE=/^on[^a-z]/,isOn=e=>onRE.test(e),isModelListener=e=>e.startsWith("onUpdate:"),extend=Object.assign,remove=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},hasOwnProperty$f=Object.prototype.hasOwnProperty,hasOwn=(e,n)=>hasOwnProperty$f.call(e,n),isArray$2=Array.isArray,isMap=e=>toTypeString(e)==="[object Map]",isSet=e=>toTypeString(e)==="[object Set]",isFunction$1=e=>typeof e=="function",isString$1=e=>typeof e=="string",isSymbol$1=e=>typeof e=="symbol",isObject$1=e=>e!==null&&typeof e=="object",isPromise=e=>isObject$1(e)&&isFunction$1(e.then)&&isFunction$1(e.catch),objectToString$1=Object.prototype.toString,toTypeString=e=>objectToString$1.call(e),toRawType=e=>toTypeString(e).slice(8,-1),isPlainObject$2=e=>toTypeString(e)==="[object Object]",isIntegerKey=e=>isString$1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(e=>e.replace(camelizeRE,(n,t)=>t?t.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(e=>e.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(e=>e.charAt(0).toUpperCase()+e.slice(1)),toHandlerKey=cacheStringFunction(e=>e?`on${capitalize(e)}`:""),hasChanged=(e,n)=>!Object.is(e,n),invokeArrayFns=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},def=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},looseToNumber=e=>{const n=parseFloat(e);return isNaN(n)?e:n},toNumber=e=>{const n=isString$1(e)?Number(e):NaN;return isNaN(n)?e:n};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let activeEffectScope;class EffectScope{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=activeEffectScope,!n&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=activeEffectScope;try{return activeEffectScope=this,n()}finally{activeEffectScope=t}}}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(n){if(this._active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function effectScope(e){return new EffectScope(e)}function recordEffectScope(e,n=activeEffectScope){n&&n.active&&n.effects.push(e)}function getCurrentScope(){return activeEffectScope}function onScopeDispose(e){activeEffectScope&&activeEffectScope.cleanups.push(e)}const createDep=e=>{const n=new Set(e);return n.w=0,n.n=0,n},wasTracked=e=>(e.w&trackOpBit)>0,newTracked=e=>(e.n&trackOpBit)>0,initDepMarkers=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=trackOpBit},finalizeDepMarkers=e=>{const{deps:n}=e;if(n.length){let t=0;for(let o=0;o<n.length;o++){const r=n[o];wasTracked(r)&&!newTracked(r)?r.delete(e):n[t++]=r,r.w&=~trackOpBit,r.n&=~trackOpBit}n.length=t}},targetMap=new WeakMap;let effectTrackDepth=0,trackOpBit=1;const maxMarkerBits=30;let activeEffect;const ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol("");class ReactiveEffect{constructor(n,t=null,o){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,recordEffectScope(this,o)}run(){if(!this.active)return this.fn();let n=activeEffect,t=shouldTrack;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=activeEffect,activeEffect=this,shouldTrack=!0,trackOpBit=1<<++effectTrackDepth,effectTrackDepth<=maxMarkerBits?initDepMarkers(this):cleanupEffect(this),this.fn()}finally{effectTrackDepth<=maxMarkerBits&&finalizeDepMarkers(this),trackOpBit=1<<--effectTrackDepth,activeEffect=this.parent,shouldTrack=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){activeEffect===this?this.deferStop=!0:this.active&&(cleanupEffect(this),this.onStop&&this.onStop(),this.active=!1)}}function cleanupEffect(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const e=trackStack.pop();shouldTrack=e===void 0?!0:e}function track(e,n,t){if(shouldTrack&&activeEffect){let o=targetMap.get(e);o||targetMap.set(e,o=new Map);let r=o.get(t);r||o.set(t,r=createDep()),trackEffects(r)}}function trackEffects(e,n){let t=!1;effectTrackDepth<=maxMarkerBits?newTracked(e)||(e.n|=trackOpBit,t=!wasTracked(e)):t=!e.has(activeEffect),t&&(e.add(activeEffect),activeEffect.deps.push(e))}function trigger$1(e,n,t,o,r,i){const a=targetMap.get(e);if(!a)return;let s=[];if(n==="clear")s=[...a.values()];else if(t==="length"&&isArray$2(e)){const l=Number(o);a.forEach((d,u)=>{(u==="length"||u>=l)&&s.push(d)})}else switch(t!==void 0&&s.push(a.get(t)),n){case"add":isArray$2(e)?isIntegerKey(t)&&s.push(a.get("length")):(s.push(a.get(ITERATE_KEY)),isMap(e)&&s.push(a.get(MAP_KEY_ITERATE_KEY)));break;case"delete":isArray$2(e)||(s.push(a.get(ITERATE_KEY)),isMap(e)&&s.push(a.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(e)&&s.push(a.get(ITERATE_KEY));break}if(s.length===1)s[0]&&triggerEffects(s[0]);else{const l=[];for(const d of s)d&&l.push(...d);triggerEffects(createDep(l))}}function triggerEffects(e,n){const t=isArray$2(e)?e:[...e];for(const o of t)o.computed&&triggerEffect(o);for(const o of t)o.computed||triggerEffect(o)}function triggerEffect(e,n){(e!==activeEffect||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function getDepFromReactive(e,n){var t;return(t=targetMap.get(e))===null||t===void 0?void 0:t.get(n)}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(isSymbol$1)),get$1=createGetter(),shallowGet=createGetter(!1,!0),readonlyGet=createGetter(!0),arrayInstrumentations=createArrayInstrumentations();function createArrayInstrumentations(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const o=toRaw(this);for(let i=0,a=this.length;i<a;i++)track(o,"get",i+"");const r=o[n](...t);return r===-1||r===!1?o[n](...t.map(toRaw)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){pauseTracking();const o=toRaw(this)[n].apply(this,t);return resetTracking(),o}}),e}function hasOwnProperty$e(e){const n=toRaw(this);return track(n,"has",e),n.hasOwnProperty(e)}function createGetter(e=!1,n=!1){return function(o,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&i===(e?n?shallowReadonlyMap:readonlyMap:n?shallowReactiveMap:reactiveMap).get(o))return o;const a=isArray$2(o);if(!e){if(a&&hasOwn(arrayInstrumentations,r))return Reflect.get(arrayInstrumentations,r,i);if(r==="hasOwnProperty")return hasOwnProperty$e}const s=Reflect.get(o,r,i);return(isSymbol$1(r)?builtInSymbols.has(r):isNonTrackableKeys(r))||(e||track(o,"get",r),n)?s:isRef(s)?a&&isIntegerKey(r)?s:s.value:isObject$1(s)?e?readonly(s):reactive(s):s}}const set$1=createSetter(),shallowSet=createSetter(!0);function createSetter(e=!1){return function(t,o,r,i){let a=t[o];if(isReadonly(a)&&isRef(a)&&!isRef(r))return!1;if(!e&&(!isShallow(r)&&!isReadonly(r)&&(a=toRaw(a),r=toRaw(r)),!isArray$2(t)&&isRef(a)&&!isRef(r)))return a.value=r,!0;const s=isArray$2(t)&&isIntegerKey(o)?Number(o)<t.length:hasOwn(t,o),l=Reflect.set(t,o,r,i);return t===toRaw(i)&&(s?hasChanged(r,a)&&trigger$1(t,"set",o,r):trigger$1(t,"add",o,r)),l}}function deleteProperty(e,n){const t=hasOwn(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&t&&trigger$1(e,"delete",n,void 0),o}function has$1(e,n){const t=Reflect.has(e,n);return(!isSymbol$1(n)||!builtInSymbols.has(n))&&track(e,"has",n),t}function ownKeys(e){return track(e,"iterate",isArray$2(e)?"length":ITERATE_KEY),Reflect.ownKeys(e)}const mutableHandlers={get:get$1,set:set$1,deleteProperty,has:has$1,ownKeys},readonlyHandlers={get:readonlyGet,set(e,n){return!0},deleteProperty(e,n){return!0}},shallowReactiveHandlers=extend({},mutableHandlers,{get:shallowGet,set:shallowSet}),toShallow=e=>e,getProto=e=>Reflect.getPrototypeOf(e);function get$2(e,n,t=!1,o=!1){e=e.__v_raw;const r=toRaw(e),i=toRaw(n);t||(n!==i&&track(r,"get",n),track(r,"get",i));const{has:a}=getProto(r),s=o?toShallow:t?toReadonly:toReactive;if(a.call(r,n))return s(e.get(n));if(a.call(r,i))return s(e.get(i));e!==r&&e.get(n)}function has$2(e,n=!1){const t=this.__v_raw,o=toRaw(t),r=toRaw(e);return n||(e!==r&&track(o,"has",e),track(o,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function size$1(e,n=!1){return e=e.__v_raw,!n&&track(toRaw(e),"iterate",ITERATE_KEY),Reflect.get(e,"size",e)}function add(e){e=toRaw(e);const n=toRaw(this);return getProto(n).has.call(n,e)||(n.add(e),trigger$1(n,"add",e,e)),this}function set(e,n){n=toRaw(n);const t=toRaw(this),{has:o,get:r}=getProto(t);let i=o.call(t,e);i||(e=toRaw(e),i=o.call(t,e));const a=r.call(t,e);return t.set(e,n),i?hasChanged(n,a)&&trigger$1(t,"set",e,n):trigger$1(t,"add",e,n),this}function deleteEntry(e){const n=toRaw(this),{has:t,get:o}=getProto(n);let r=t.call(n,e);r||(e=toRaw(e),r=t.call(n,e)),o&&o.call(n,e);const i=n.delete(e);return r&&trigger$1(n,"delete",e,void 0),i}function clear(){const e=toRaw(this),n=e.size!==0,t=e.clear();return n&&trigger$1(e,"clear",void 0,void 0),t}function createForEach(e,n){return function(o,r){const i=this,a=i.__v_raw,s=toRaw(a),l=n?toShallow:e?toReadonly:toReactive;return!e&&track(s,"iterate",ITERATE_KEY),a.forEach((d,u)=>o.call(r,l(d),l(u),i))}}function createIterableMethod(e,n,t){return function(...o){const r=this.__v_raw,i=toRaw(r),a=isMap(i),s=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=r[e](...o),u=t?toShallow:n?toReadonly:toReactive;return!n&&track(i,"iterate",l?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:f,done:b}=d.next();return b?{value:f,done:b}:{value:s?[u(f[0]),u(f[1])]:u(f),done:b}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(e){return function(...n){return e==="delete"?!1:this}}function createInstrumentations(){const e={get(i){return get$2(this,i)},get size(){return size$1(this)},has:has$2,add,set,delete:deleteEntry,clear,forEach:createForEach(!1,!1)},n={get(i){return get$2(this,i,!1,!0)},get size(){return size$1(this)},has:has$2,add,set,delete:deleteEntry,clear,forEach:createForEach(!1,!0)},t={get(i){return get$2(this,i,!0)},get size(){return size$1(this,!0)},has(i){return has$2.call(this,i,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!1)},o={get(i){return get$2(this,i,!0,!0)},get size(){return size$1(this,!0)},has(i){return has$2.call(this,i,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=createIterableMethod(i,!1,!1),t[i]=createIterableMethod(i,!0,!1),n[i]=createIterableMethod(i,!1,!0),o[i]=createIterableMethod(i,!0,!0)}),[e,t,n,o]}const[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations]=createInstrumentations();function createInstrumentationGetter(e,n){const t=n?e?shallowReadonlyInstrumentations:shallowInstrumentations:e?readonlyInstrumentations:mutableInstrumentations;return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(hasOwn(t,r)&&r in o?t:o,r,i)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(e){return e.__v_skip||!Object.isExtensible(e)?0:targetTypeMap(toRawType(e))}function reactive(e){return isReadonly(e)?e:createReactiveObject(e,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(e){return createReactiveObject(e,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(e){return createReactiveObject(e,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function createReactiveObject(e,n,t,o,r){if(!isObject$1(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=getTargetType(e);if(a===0)return e;const s=new Proxy(e,a===2?o:t);return r.set(e,s),s}function isReactive(e){return isReadonly(e)?isReactive(e.__v_raw):!!(e&&e.__v_isReactive)}function isReadonly(e){return!!(e&&e.__v_isReadonly)}function isShallow(e){return!!(e&&e.__v_isShallow)}function isProxy(e){return isReactive(e)||isReadonly(e)}function toRaw(e){const n=e&&e.__v_raw;return n?toRaw(n):e}function markRaw(e){return def(e,"__v_skip",!0),e}const toReactive=e=>isObject$1(e)?reactive(e):e,toReadonly=e=>isObject$1(e)?readonly(e):e;function trackRefValue(e){shouldTrack&&activeEffect&&(e=toRaw(e),trackEffects(e.dep||(e.dep=createDep())))}function triggerRefValue(e,n){e=toRaw(e);const t=e.dep;t&&triggerEffects(t)}function isRef(e){return!!(e&&e.__v_isRef===!0)}function ref(e){return createRef(e,!1)}function createRef(e,n){return isRef(e)?e:new RefImpl(e,n)}class RefImpl{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:toRaw(n),this._value=t?n:toReactive(n)}get value(){return trackRefValue(this),this._value}set value(n){const t=this.__v_isShallow||isShallow(n)||isReadonly(n);n=t?n:toRaw(n),hasChanged(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:toReactive(n),triggerRefValue(this))}}function unref(e){return isRef(e)?e.value:e}const shallowUnwrapHandlers={get:(e,n,t)=>unref(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const r=e[n];return isRef(r)&&!isRef(t)?(r.value=t,!0):Reflect.set(e,n,t,o)}};function proxyRefs(e){return isReactive(e)?e:new Proxy(e,shallowUnwrapHandlers)}function toRefs(e){const n=isArray$2(e)?new Array(e.length):{};for(const t in e)n[t]=toRef(e,t);return n}class ObjectRefImpl{constructor(n,t,o){this._object=n,this._key=t,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return getDepFromReactive(toRaw(this._object),this._key)}}function toRef(e,n,t){const o=e[n];return isRef(o)?o:new ObjectRefImpl(e,n,t)}var _a$1;class ComputedRefImpl{constructor(n,t,o,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[_a$1]=!1,this._dirty=!0,this.effect=new ReactiveEffect(n,()=>{this._dirty||(this._dirty=!0,triggerRefValue(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=toRaw(this);return trackRefValue(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}_a$1="__v_isReadonly";function computed$1(e,n,t=!1){let o,r;const i=isFunction$1(e);return i?(o=e,r=NOOP):(o=e.get,r=e.set),new ComputedRefImpl(o,r,i||!r,t)}function warn$3(e,...n){}function callWithErrorHandling(e,n,t,o){let r;try{r=o?e(...o):e()}catch(i){handleError(i,n,t)}return r}function callWithAsyncErrorHandling(e,n,t,o){if(isFunction$1(e)){const i=callWithErrorHandling(e,n,t,o);return i&&isPromise(i)&&i.catch(a=>{handleError(a,n,t)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(callWithAsyncErrorHandling(e[i],n,t,o));return r}function handleError(e,n,t,o=!0){const r=n?n.vnode:null;if(n){let i=n.parent;const a=n.proxy,s=t;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,a,s)===!1)return}i=i.parent}const l=n.appContext.config.errorHandler;if(l){callWithErrorHandling(l,null,10,[e,a,s]);return}}logError(e,t,r,o)}function logError(e,n,t,o=!0){console.error(e)}let isFlushing=!1,isFlushPending=!1;const queue=[];let flushIndex=0;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick(e){const n=currentFlushPromise||resolvedPromise;return e?n.then(this?e.bind(this):e):n}function findInsertionIndex(e){let n=flushIndex+1,t=queue.length;for(;n<t;){const o=n+t>>>1;getId(queue[o])<e?n=o+1:t=o}return n}function queueJob(e){(!queue.length||!queue.includes(e,isFlushing&&e.allowRecurse?flushIndex+1:flushIndex))&&(e.id==null?queue.push(e):queue.splice(findInsertionIndex(e.id),0,e),queueFlush())}function queueFlush(){!isFlushing&&!isFlushPending&&(isFlushPending=!0,currentFlushPromise=resolvedPromise.then(flushJobs))}function invalidateJob(e){const n=queue.indexOf(e);n>flushIndex&&queue.splice(n,1)}function queuePostFlushCb(e){isArray$2(e)?pendingPostFlushCbs.push(...e):(!activePostFlushCbs||!activePostFlushCbs.includes(e,e.allowRecurse?postFlushIndex+1:postFlushIndex))&&pendingPostFlushCbs.push(e),queueFlush()}function flushPreFlushCbs(e,n=isFlushing?flushIndex+1:0){for(;n<queue.length;n++){const t=queue[n];t&&t.pre&&(queue.splice(n,1),n--,t())}}function flushPostFlushCbs(e){if(pendingPostFlushCbs.length){const n=[...new Set(pendingPostFlushCbs)];if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...n);return}for(activePostFlushCbs=n,activePostFlushCbs.sort((t,o)=>getId(t)-getId(o)),postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++)activePostFlushCbs[postFlushIndex]();activePostFlushCbs=null,postFlushIndex=0}}const getId=e=>e.id==null?1/0:e.id,comparator=(e,n)=>{const t=getId(e)-getId(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function flushJobs(e){isFlushPending=!1,isFlushing=!0,queue.sort(comparator);const n=NOOP;try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const t=queue[flushIndex];t&&t.active!==!1&&callWithErrorHandling(t,null,14)}}finally{flushIndex=0,queue.length=0,flushPostFlushCbs(),isFlushing=!1,currentFlushPromise=null,(queue.length||pendingPostFlushCbs.length)&&flushJobs()}}function emit(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||EMPTY_OBJ;let r=t;const i=n.startsWith("update:"),a=i&&n.slice(7);if(a&&a in o){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:b}=o[u]||EMPTY_OBJ;b&&(r=t.map(C=>isString$1(C)?C.trim():C)),f&&(r=t.map(looseToNumber))}let s,l=o[s=toHandlerKey(n)]||o[s=toHandlerKey(camelize(n))];!l&&i&&(l=o[s=toHandlerKey(hyphenate(n))]),l&&callWithAsyncErrorHandling(l,e,6,r);const d=o[s+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,callWithAsyncErrorHandling(d,e,6,r)}}function normalizeEmitsOptions(e,n,t=!1){const o=n.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let a={},s=!1;if(!isFunction$1(e)){const l=d=>{const u=normalizeEmitsOptions(d,n,!0);u&&(s=!0,extend(a,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(isObject$1(e)&&o.set(e,null),null):(isArray$2(i)?i.forEach(l=>a[l]=null):extend(a,i),isObject$1(e)&&o.set(e,a),a)}function isEmitListener(e,n){return!e||!isOn(n)?!1:(n=n.slice(2).replace(/Once$/,""),hasOwn(e,n[0].toLowerCase()+n.slice(1))||hasOwn(e,hyphenate(n))||hasOwn(e,n))}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(e){const n=currentRenderingInstance;return currentRenderingInstance=e,currentScopeId=e&&e.type.__scopeId||null,n}function withCtx(e,n=currentRenderingInstance,t){if(!n||e._n)return e;const o=(...r)=>{o._d&&setBlockTracking(-1);const i=setCurrentRenderingInstance(n);let a;try{a=e(...r)}finally{setCurrentRenderingInstance(i),o._d&&setBlockTracking(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function markAttrsAccessed(){}function renderComponentRoot(e){const{type:n,vnode:t,proxy:o,withProxy:r,props:i,propsOptions:[a],slots:s,attrs:l,emit:d,render:u,renderCache:f,data:b,setupState:C,ctx:g,inheritAttrs:x}=e;let v,y;const $=setCurrentRenderingInstance(e);try{if(t.shapeFlag&4){const P=r||o;v=normalizeVNode(u.call(P,P,f,i,C,b,g)),y=l}else{const P=n;v=normalizeVNode(P.length>1?P(i,{attrs:l,slots:s,emit:d}):P(i,null)),y=n.props?l:getFunctionalFallthrough(l)}}catch(P){blockStack.length=0,handleError(P,e,1),v=createVNode(Comment)}let L=v;if(y&&x!==!1){const P=Object.keys(y),{shapeFlag:k}=L;P.length&&k&7&&(a&&P.some(isModelListener)&&(y=filterModelListeners(y,a)),L=cloneVNode(L,y))}return t.dirs&&(L=cloneVNode(L),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&(L.transition=t.transition),v=L,setCurrentRenderingInstance($),v}const getFunctionalFallthrough=e=>{let n;for(const t in e)(t==="class"||t==="style"||isOn(t))&&((n||(n={}))[t]=e[t]);return n},filterModelListeners=(e,n)=>{const t={};for(const o in e)(!isModelListener(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function shouldUpdateComponent(e,n,t){const{props:o,children:r,component:i}=e,{props:a,children:s,patchFlag:l}=n,d=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return o?hasPropsChanged(o,a,d):!!a;if(l&8){const u=n.dynamicProps;for(let f=0;f<u.length;f++){const b=u[f];if(a[b]!==o[b]&&!isEmitListener(d,b))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:o===a?!1:o?a?hasPropsChanged(o,a,d):!0:!!a;return!1}function hasPropsChanged(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(n[i]!==e[i]&&!isEmitListener(t,i))return!0}return!1}function updateHOCHostEl({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const isSuspense=e=>e.__isSuspense;function queueEffectWithSuspense(e,n){n&&n.pendingBranch?isArray$2(e)?n.effects.push(...e):n.effects.push(e):queuePostFlushCb(e)}function provide(e,n){if(currentInstance){let t=currentInstance.provides;const o=currentInstance.parent&&currentInstance.parent.provides;o===t&&(t=currentInstance.provides=Object.create(o)),t[e]=n}}function inject(e,n,t=!1){const o=currentInstance||currentRenderingInstance;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&isFunction$1(n)?n.call(o.proxy):n}}function watchEffect(e,n){return doWatch(e,null,n)}const INITIAL_WATCHER_VALUE={};function watch(e,n,t){return doWatch(e,n,t)}function doWatch(e,n,{immediate:t,deep:o,flush:r,onTrack:i,onTrigger:a}=EMPTY_OBJ){const s=getCurrentScope()===(currentInstance==null?void 0:currentInstance.scope)?currentInstance:null;let l,d=!1,u=!1;if(isRef(e)?(l=()=>e.value,d=isShallow(e)):isReactive(e)?(l=()=>e,o=!0):isArray$2(e)?(u=!0,d=e.some(L=>isReactive(L)||isShallow(L)),l=()=>e.map(L=>{if(isRef(L))return L.value;if(isReactive(L))return traverse(L);if(isFunction$1(L))return callWithErrorHandling(L,s,2)})):isFunction$1(e)?n?l=()=>callWithErrorHandling(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return f&&f(),callWithAsyncErrorHandling(e,s,3,[b])}:l=NOOP,n&&o){const L=l;l=()=>traverse(L())}let f,b=L=>{f=y.onStop=()=>{callWithErrorHandling(L,s,4)}},C;if(isInSSRComponentSetup)if(b=NOOP,n?t&&callWithAsyncErrorHandling(n,s,3,[l(),u?[]:void 0,b]):l(),r==="sync"){const L=useSSRContext();C=L.__watcherHandles||(L.__watcherHandles=[])}else return NOOP;let g=u?new Array(e.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const x=()=>{if(y.active)if(n){const L=y.run();(o||d||(u?L.some((P,k)=>hasChanged(P,g[k])):hasChanged(L,g)))&&(f&&f(),callWithAsyncErrorHandling(n,s,3,[L,g===INITIAL_WATCHER_VALUE?void 0:u&&g[0]===INITIAL_WATCHER_VALUE?[]:g,b]),g=L)}else y.run()};x.allowRecurse=!!n;let v;r==="sync"?v=x:r==="post"?v=()=>queuePostRenderEffect(x,s&&s.suspense):(x.pre=!0,s&&(x.id=s.uid),v=()=>queueJob(x));const y=new ReactiveEffect(l,v);n?t?x():g=y.run():r==="post"?queuePostRenderEffect(y.run.bind(y),s&&s.suspense):y.run();const $=()=>{y.stop(),s&&s.scope&&remove(s.scope.effects,y)};return C&&C.push($),$}function instanceWatch(e,n,t){const o=this.proxy,r=isString$1(e)?e.includes(".")?createPathGetter(o,e):()=>o[e]:e.bind(o,o);let i;isFunction$1(n)?i=n:(i=n.handler,t=n);const a=currentInstance;setCurrentInstance(this);const s=doWatch(r,i.bind(o),t);return a?setCurrentInstance(a):unsetCurrentInstance(),s}function createPathGetter(e,n){const t=n.split(".");return()=>{let o=e;for(let r=0;r<t.length&&o;r++)o=o[t[r]];return o}}function traverse(e,n){if(!isObject$1(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),isRef(e))traverse(e.value,n);else if(isArray$2(e))for(let t=0;t<e.length;t++)traverse(e[t],n);else if(isSet(e)||isMap(e))e.forEach(t=>{traverse(t,n)});else if(isPlainObject$2(e))for(const t in e)traverse(e[t],n);return e}function useTransitionState(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{e.isMounted=!0}),onBeforeUnmount(()=>{e.isUnmounting=!0}),e}const TransitionHookValidator=[Function,Array],BaseTransitionImpl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},setup(e,{slots:n}){const t=getCurrentInstance(),o=useTransitionState();let r;return()=>{const i=n.default&&getTransitionRawChildren(n.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const x of i)if(x.type!==Comment){a=x;break}}const s=toRaw(e),{mode:l}=s;if(o.isLeaving)return emptyPlaceholder(a);const d=getKeepAliveChild(a);if(!d)return emptyPlaceholder(a);const u=resolveTransitionHooks(d,s,o,t);setTransitionHooks(d,u);const f=t.subTree,b=f&&getKeepAliveChild(f);let C=!1;const{getTransitionKey:g}=d.type;if(g){const x=g();r===void 0?r=x:x!==r&&(r=x,C=!0)}if(b&&b.type!==Comment&&(!isSameVNodeType(d,b)||C)){const x=resolveTransitionHooks(b,s,o,t);if(setTransitionHooks(b,x),l==="out-in")return o.isLeaving=!0,x.afterLeave=()=>{o.isLeaving=!1,t.update.active!==!1&&t.update()},emptyPlaceholder(a);l==="in-out"&&d.type!==Comment&&(x.delayLeave=(v,y,$)=>{const L=getLeavingNodesForType(o,b);L[String(b.key)]=b,v._leaveCb=()=>{y(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=$})}return a}}},BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(e,n){const{leavingVNodes:t}=e;let o=t.get(n.type);return o||(o=Object.create(null),t.set(n.type,o)),o}function resolveTransitionHooks(e,n,t,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:f,onLeave:b,onAfterLeave:C,onLeaveCancelled:g,onBeforeAppear:x,onAppear:v,onAfterAppear:y,onAppearCancelled:$}=n,L=String(e.key),P=getLeavingNodesForType(t,e),k=(T,M)=>{T&&callWithAsyncErrorHandling(T,o,9,M)},E=(T,M)=>{const _=M[1];k(T,M),isArray$2(T)?T.every(J=>J.length<=1)&&_():T.length<=1&&_()},w={mode:i,persisted:a,beforeEnter(T){let M=s;if(!t.isMounted)if(r)M=x||s;else return;T._leaveCb&&T._leaveCb(!0);const _=P[L];_&&isSameVNodeType(e,_)&&_.el._leaveCb&&_.el._leaveCb(),k(M,[T])},enter(T){let M=l,_=d,J=u;if(!t.isMounted)if(r)M=v||l,_=y||d,J=$||u;else return;let O=!1;const Y=T._enterCb=H=>{O||(O=!0,H?k(J,[T]):k(_,[T]),w.delayedLeave&&w.delayedLeave(),T._enterCb=void 0)};M?E(M,[T,Y]):Y()},leave(T,M){const _=String(e.key);if(T._enterCb&&T._enterCb(!0),t.isUnmounting)return M();k(f,[T]);let J=!1;const O=T._leaveCb=Y=>{J||(J=!0,M(),Y?k(g,[T]):k(C,[T]),T._leaveCb=void 0,P[_]===e&&delete P[_])};P[_]=e,b?E(b,[T,O]):O()},clone(T){return resolveTransitionHooks(T,n,t,o)}};return w}function emptyPlaceholder(e){if(isKeepAlive(e))return e=cloneVNode(e),e.children=null,e}function getKeepAliveChild(e){return isKeepAlive(e)?e.children?e.children[0]:void 0:e}function setTransitionHooks(e,n){e.shapeFlag&6&&e.component?setTransitionHooks(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function getTransitionRawChildren(e,n=!1,t){let o=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];const s=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Fragment?(a.patchFlag&128&&r++,o=o.concat(getTransitionRawChildren(a.children,n,s))):(n||a.type!==Comment)&&o.push(s!=null?cloneVNode(a,{key:s}):a)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function defineComponent(e){return isFunction$1(e)?{setup:e,name:e.name}:e}const isAsyncWrapper=e=>!!e.type.__asyncLoader,isKeepAlive=e=>e.type.__isKeepAlive;function onActivated(e,n){registerKeepAliveHook(e,"a",n)}function onDeactivated(e,n){registerKeepAliveHook(e,"da",n)}function registerKeepAliveHook(e,n,t=currentInstance){const o=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(injectHook(n,o,t),t){let r=t.parent;for(;r&&r.parent;)isKeepAlive(r.parent.vnode)&&injectToKeepAliveRoot(o,n,t,r),r=r.parent}}function injectToKeepAliveRoot(e,n,t,o){const r=injectHook(n,e,o,!0);onUnmounted(()=>{remove(o[n],r)},t)}function injectHook(e,n,t=currentInstance,o=!1){if(t){const r=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...a)=>{if(t.isUnmounted)return;pauseTracking(),setCurrentInstance(t);const s=callWithAsyncErrorHandling(n,t,e,a);return unsetCurrentInstance(),resetTracking(),s});return o?r.unshift(i):r.push(i),i}}const createHook=e=>(n,t=currentInstance)=>(!isInSSRComponentSetup||e==="sp")&&injectHook(e,(...o)=>n(...o),t),onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(e,n=currentInstance){injectHook("ec",e,n)}function withDirectives(e,n){const t=currentRenderingInstance;if(t===null)return e;const o=getExposeProxy(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[a,s,l,d=EMPTY_OBJ]=n[i];a&&(isFunction$1(a)&&(a={mounted:a,updated:a}),a.deep&&traverse(s),r.push({dir:a,instance:o,value:s,oldValue:void 0,arg:l,modifiers:d}))}return e}function invokeDirectiveHook(e,n,t,o){const r=e.dirs,i=n&&n.dirs;for(let a=0;a<r.length;a++){const s=r[a];i&&(s.oldValue=i[a].value);let l=s.dir[o];l&&(pauseTracking(),callWithAsyncErrorHandling(l,t,8,[e.el,s,e,n]),resetTracking())}}const COMPONENTS="components",NULL_DYNAMIC_COMPONENT=Symbol();function resolveDynamicComponent(e){return isString$1(e)?resolveAsset(COMPONENTS,e,!1)||e:e||NULL_DYNAMIC_COMPONENT}function resolveAsset(e,n,t=!0,o=!1){const r=currentRenderingInstance||currentInstance;if(r){const i=r.type;if(e===COMPONENTS){const s=getComponentName(i,!1);if(s&&(s===n||s===camelize(n)||s===capitalize(camelize(n))))return i}const a=resolve(r[e]||i[e],n)||resolve(r.appContext[e],n);return!a&&o?i:a}}function resolve(e,n){return e&&(e[n]||e[camelize(n)]||e[capitalize(camelize(n))])}function renderList(e,n,t,o){let r;const i=t&&t[o];if(isArray$2(e)||isString$1(e)){r=new Array(e.length);for(let a=0,s=e.length;a<s;a++)r[a]=n(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=n(a+1,a,void 0,i&&i[a])}else if(isObject$1(e))if(e[Symbol.iterator])r=Array.from(e,(a,s)=>n(a,s,void 0,i&&i[s]));else{const a=Object.keys(e);r=new Array(a.length);for(let s=0,l=a.length;s<l;s++){const d=a[s];r[s]=n(e[d],d,s,i&&i[s])}}else r=[];return t&&(t[o]=r),r}function renderSlot(e,n,t={},o,r){if(currentRenderingInstance.isCE||currentRenderingInstance.parent&&isAsyncWrapper(currentRenderingInstance.parent)&&currentRenderingInstance.parent.isCE)return n!=="default"&&(t.name=n),createVNode("slot",t,o&&o());let i=e[n];i&&i._c&&(i._d=!1),openBlock();const a=i&&ensureValidVNode$1(i(t)),s=createBlock(Fragment,{key:t.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function ensureValidVNode$1(e){return e.some(n=>isVNode(n)?!(n.type===Comment||n.type===Fragment&&!ensureValidVNode$1(n.children)):!0)?e:null}const getPublicInstance=e=>e?isStatefulComponent(e)?getExposeProxy(e)||e.proxy:getPublicInstance(e.parent):null,publicPropertiesMap=extend(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>getPublicInstance(e.parent),$root:e=>getPublicInstance(e.root),$emit:e=>e.emit,$options:e=>resolveMergedOptions(e),$forceUpdate:e=>e.f||(e.f=()=>queueJob(e.update)),$nextTick:e=>e.n||(e.n=nextTick.bind(e.proxy)),$watch:e=>instanceWatch.bind(e)}),hasSetupBinding=(e,n)=>e!==EMPTY_OBJ&&!e.__isScriptSetup&&hasOwn(e,n),PublicInstanceProxyHandlers={get({_:e},n){const{ctx:t,setupState:o,data:r,props:i,accessCache:a,type:s,appContext:l}=e;let d;if(n[0]!=="$"){const C=a[n];if(C!==void 0)switch(C){case 1:return o[n];case 2:return r[n];case 4:return t[n];case 3:return i[n]}else{if(hasSetupBinding(o,n))return a[n]=1,o[n];if(r!==EMPTY_OBJ&&hasOwn(r,n))return a[n]=2,r[n];if((d=e.propsOptions[0])&&hasOwn(d,n))return a[n]=3,i[n];if(t!==EMPTY_OBJ&&hasOwn(t,n))return a[n]=4,t[n];shouldCacheAccess&&(a[n]=0)}}const u=publicPropertiesMap[n];let f,b;if(u)return n==="$attrs"&&track(e,"get",n),u(e);if((f=s.__cssModules)&&(f=f[n]))return f;if(t!==EMPTY_OBJ&&hasOwn(t,n))return a[n]=4,t[n];if(b=l.config.globalProperties,hasOwn(b,n))return b[n]},set({_:e},n,t){const{data:o,setupState:r,ctx:i}=e;return hasSetupBinding(r,n)?(r[n]=t,!0):o!==EMPTY_OBJ&&hasOwn(o,n)?(o[n]=t,!0):hasOwn(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:r,propsOptions:i}},a){let s;return!!t[a]||e!==EMPTY_OBJ&&hasOwn(e,a)||hasSetupBinding(n,a)||(s=i[0])&&hasOwn(s,a)||hasOwn(o,a)||hasOwn(publicPropertiesMap,a)||hasOwn(r.config.globalProperties,a)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:hasOwn(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let shouldCacheAccess=!0;function applyOptions(e){const n=resolveMergedOptions(e),t=e.proxy,o=e.ctx;shouldCacheAccess=!1,n.beforeCreate&&callHook$1(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:s,provide:l,inject:d,created:u,beforeMount:f,mounted:b,beforeUpdate:C,updated:g,activated:x,deactivated:v,beforeDestroy:y,beforeUnmount:$,destroyed:L,unmounted:P,render:k,renderTracked:E,renderTriggered:w,errorCaptured:T,serverPrefetch:M,expose:_,inheritAttrs:J,components:O,directives:Y,filters:H}=n;if(d&&resolveInjections(d,o,null,e.appContext.config.unwrapInjectedRef),a)for(const j in a){const ee=a[j];isFunction$1(ee)&&(o[j]=ee.bind(t))}if(r){const j=r.call(t,t);isObject$1(j)&&(e.data=reactive(j))}if(shouldCacheAccess=!0,i)for(const j in i){const ee=i[j],R=isFunction$1(ee)?ee.bind(t,t):isFunction$1(ee.get)?ee.get.bind(t,t):NOOP,K=!isFunction$1(ee)&&isFunction$1(ee.set)?ee.set.bind(t):NOOP,he=computed({get:R,set:K});Object.defineProperty(o,j,{enumerable:!0,configurable:!0,get:()=>he.value,set:me=>he.value=me})}if(s)for(const j in s)createWatcher(s[j],o,t,j);if(l){const j=isFunction$1(l)?l.call(t):l;Reflect.ownKeys(j).forEach(ee=>{provide(ee,j[ee])})}u&&callHook$1(u,e,"c");function te(j,ee){isArray$2(ee)?ee.forEach(R=>j(R.bind(t))):ee&&j(ee.bind(t))}if(te(onBeforeMount,f),te(onMounted,b),te(onBeforeUpdate,C),te(onUpdated,g),te(onActivated,x),te(onDeactivated,v),te(onErrorCaptured,T),te(onRenderTracked,E),te(onRenderTriggered,w),te(onBeforeUnmount,$),te(onUnmounted,P),te(onServerPrefetch,M),isArray$2(_))if(_.length){const j=e.exposed||(e.exposed={});_.forEach(ee=>{Object.defineProperty(j,ee,{get:()=>t[ee],set:R=>t[ee]=R})})}else e.exposed||(e.exposed={});k&&e.render===NOOP&&(e.render=k),J!=null&&(e.inheritAttrs=J),O&&(e.components=O),Y&&(e.directives=Y)}function resolveInjections(e,n,t=NOOP,o=!1){isArray$2(e)&&(e=normalizeInject(e));for(const r in e){const i=e[r];let a;isObject$1(i)?"default"in i?a=inject(i.from||r,i.default,!0):a=inject(i.from||r):a=inject(i),isRef(a)&&o?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):n[r]=a}}function callHook$1(e,n,t){callWithAsyncErrorHandling(isArray$2(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function createWatcher(e,n,t,o){const r=o.includes(".")?createPathGetter(t,o):()=>t[o];if(isString$1(e)){const i=n[e];isFunction$1(i)&&watch(r,i)}else if(isFunction$1(e))watch(r,e.bind(t));else if(isObject$1(e))if(isArray$2(e))e.forEach(i=>createWatcher(i,n,t,o));else{const i=isFunction$1(e.handler)?e.handler.bind(t):n[e.handler];isFunction$1(i)&&watch(r,i,e)}}function resolveMergedOptions(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(n);let l;return s?l=s:!r.length&&!t&&!o?l=n:(l={},r.length&&r.forEach(d=>mergeOptions(l,d,a,!0)),mergeOptions(l,n,a)),isObject$1(n)&&i.set(n,l),l}function mergeOptions(e,n,t,o=!1){const{mixins:r,extends:i}=n;i&&mergeOptions(e,i,t,!0),r&&r.forEach(a=>mergeOptions(e,a,t,!0));for(const a in n)if(!(o&&a==="expose")){const s=internalOptionMergeStrats[a]||t&&t[a];e[a]=s?s(e[a],n[a]):n[a]}return e}const internalOptionMergeStrats={data:mergeDataFn,props:mergeObjectOptions,emits:mergeObjectOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(e,n){return n?e?function(){return extend(isFunction$1(e)?e.call(this,this):e,isFunction$1(n)?n.call(this,this):n)}:n:e}function mergeInject(e,n){return mergeObjectOptions(normalizeInject(e),normalizeInject(n))}function normalizeInject(e){if(isArray$2(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function mergeAsArray(e,n){return e?[...new Set([].concat(e,n))]:n}function mergeObjectOptions(e,n){return e?extend(extend(Object.create(null),e),n):n}function mergeWatchOptions(e,n){if(!e)return n;if(!n)return e;const t=extend(Object.create(null),e);for(const o in n)t[o]=mergeAsArray(e[o],n[o]);return t}function initProps(e,n,t,o=!1){const r={},i={};def(i,InternalObjectKey,1),e.propsDefaults=Object.create(null),setFullProps(e,n,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);t?e.props=o?r:shallowReactive(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function updateProps(e,n,t,o){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,s=toRaw(r),[l]=e.propsOptions;let d=!1;if((o||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let b=u[f];if(isEmitListener(e.emitsOptions,b))continue;const C=n[b];if(l)if(hasOwn(i,b))C!==i[b]&&(i[b]=C,d=!0);else{const g=camelize(b);r[g]=resolvePropValue(l,s,g,C,e,!1)}else C!==i[b]&&(i[b]=C,d=!0)}}}else{setFullProps(e,n,r,i)&&(d=!0);let u;for(const f in s)(!n||!hasOwn(n,f)&&((u=hyphenate(f))===f||!hasOwn(n,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=resolvePropValue(l,s,f,void 0,e,!0)):delete r[f]);if(i!==s)for(const f in i)(!n||!hasOwn(n,f))&&(delete i[f],d=!0)}d&&trigger$1(e,"set","$attrs")}function setFullProps(e,n,t,o){const[r,i]=e.propsOptions;let a=!1,s;if(n)for(let l in n){if(isReservedProp(l))continue;const d=n[l];let u;r&&hasOwn(r,u=camelize(l))?!i||!i.includes(u)?t[u]=d:(s||(s={}))[u]=d:isEmitListener(e.emitsOptions,l)||(!(l in o)||d!==o[l])&&(o[l]=d,a=!0)}if(i){const l=toRaw(t),d=s||EMPTY_OBJ;for(let u=0;u<i.length;u++){const f=i[u];t[f]=resolvePropValue(r,l,f,d[f],e,!hasOwn(d,f))}}return a}function resolvePropValue(e,n,t,o,r,i){const a=e[t];if(a!=null){const s=hasOwn(a,"default");if(s&&o===void 0){const l=a.default;if(a.type!==Function&&isFunction$1(l)){const{propsDefaults:d}=r;t in d?o=d[t]:(setCurrentInstance(r),o=d[t]=l.call(null,n),unsetCurrentInstance())}else o=l}a[0]&&(i&&!s?o=!1:a[1]&&(o===""||o===hyphenate(t))&&(o=!0))}return o}function normalizePropsOptions(e,n,t=!1){const o=n.propsCache,r=o.get(e);if(r)return r;const i=e.props,a={},s=[];let l=!1;if(!isFunction$1(e)){const u=f=>{l=!0;const[b,C]=normalizePropsOptions(f,n,!0);extend(a,b),C&&s.push(...C)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return isObject$1(e)&&o.set(e,EMPTY_ARR),EMPTY_ARR;if(isArray$2(i))for(let u=0;u<i.length;u++){const f=camelize(i[u]);validatePropName(f)&&(a[f]=EMPTY_OBJ)}else if(i)for(const u in i){const f=camelize(u);if(validatePropName(f)){const b=i[u],C=a[f]=isArray$2(b)||isFunction$1(b)?{type:b}:Object.assign({},b);if(C){const g=getTypeIndex(Boolean,C.type),x=getTypeIndex(String,C.type);C[0]=g>-1,C[1]=x<0||g<x,(g>-1||hasOwn(C,"default"))&&s.push(f)}}}const d=[a,s];return isObject$1(e)&&o.set(e,d),d}function validatePropName(e){return e[0]!=="$"}function getType(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function isSameType(e,n){return getType(e)===getType(n)}function getTypeIndex(e,n){return isArray$2(n)?n.findIndex(t=>isSameType(t,e)):isFunction$1(n)&&isSameType(n,e)?0:-1}const isInternalKey=e=>e[0]==="_"||e==="$stable",normalizeSlotValue=e=>isArray$2(e)?e.map(normalizeVNode):[normalizeVNode(e)],normalizeSlot=(e,n,t)=>{if(n._n)return n;const o=withCtx((...r)=>normalizeSlotValue(n(...r)),t);return o._c=!1,o},normalizeObjectSlots=(e,n,t)=>{const o=e._ctx;for(const r in e){if(isInternalKey(r))continue;const i=e[r];if(isFunction$1(i))n[r]=normalizeSlot(r,i,o);else if(i!=null){const a=normalizeSlotValue(i);n[r]=()=>a}}},normalizeVNodeSlots=(e,n)=>{const t=normalizeSlotValue(n);e.slots.default=()=>t},initSlots=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=toRaw(n),def(n,"_",t)):normalizeObjectSlots(n,e.slots={})}else e.slots={},n&&normalizeVNodeSlots(e,n);def(e.slots,InternalObjectKey,1)},updateSlots=(e,n,t)=>{const{vnode:o,slots:r}=e;let i=!0,a=EMPTY_OBJ;if(o.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:(extend(r,n),!t&&s===1&&delete r._):(i=!n.$stable,normalizeObjectSlots(n,r)),a=n}else n&&(normalizeVNodeSlots(e,n),a={default:1});if(i)for(const s in r)!isInternalKey(s)&&!(s in a)&&delete r[s]};function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid$1=0;function createAppAPI(e,n){return function(o,r=null){isFunction$1(o)||(o=Object.assign({},o)),r!=null&&!isObject$1(r)&&(r=null);const i=createAppContext(),a=new Set;let s=!1;const l=i.app={_uid:uid$1++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:version$1,get config(){return i.config},set config(d){},use(d,...u){return a.has(d)||(d&&isFunction$1(d.install)?(a.add(d),d.install(l,...u)):isFunction$1(d)&&(a.add(d),d(l,...u))),l},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),l},component(d,u){return u?(i.components[d]=u,l):i.components[d]},directive(d,u){return u?(i.directives[d]=u,l):i.directives[d]},mount(d,u,f){if(!s){const b=createVNode(o,r);return b.appContext=i,u&&n?n(b,d):e(b,d,f),s=!0,l._container=d,d.__vue_app__=l,getExposeProxy(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(d,u){return i.provides[d]=u,l}};return l}}function setRef(e,n,t,o,r=!1){if(isArray$2(e)){e.forEach((b,C)=>setRef(b,n&&(isArray$2(n)?n[C]:n),t,o,r));return}if(isAsyncWrapper(o)&&!r)return;const i=o.shapeFlag&4?getExposeProxy(o.component)||o.component.proxy:o.el,a=r?null:i,{i:s,r:l}=e,d=n&&n.r,u=s.refs===EMPTY_OBJ?s.refs={}:s.refs,f=s.setupState;if(d!=null&&d!==l&&(isString$1(d)?(u[d]=null,hasOwn(f,d)&&(f[d]=null)):isRef(d)&&(d.value=null)),isFunction$1(l))callWithErrorHandling(l,s,12,[a,u]);else{const b=isString$1(l),C=isRef(l);if(b||C){const g=()=>{if(e.f){const x=b?hasOwn(f,l)?f[l]:u[l]:l.value;r?isArray$2(x)&&remove(x,i):isArray$2(x)?x.includes(i)||x.push(i):b?(u[l]=[i],hasOwn(f,l)&&(f[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else b?(u[l]=a,hasOwn(f,l)&&(f[l]=a)):C&&(l.value=a,e.k&&(u[e.k]=a))};a?(g.id=-1,queuePostRenderEffect(g,t)):g()}}}const queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(e){return baseCreateRenderer(e)}function baseCreateRenderer(e,n){const t=getGlobalThis();t.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:a,createText:s,createComment:l,setText:d,setElementText:u,parentNode:f,nextSibling:b,setScopeId:C=NOOP,insertStaticContent:g}=e,x=(A,D,F,V=null,U=null,ne=null,oe=!1,Q=null,Z=!!D.dynamicChildren)=>{if(A===D)return;A&&!isSameVNodeType(A,D)&&(V=ge(A),me(A,U,ne,!0),A=null),D.patchFlag===-2&&(Z=!1,D.dynamicChildren=null);const{type:W,ref:ce,shapeFlag:se}=D;switch(W){case Text:v(A,D,F,V);break;case Comment:y(A,D,F,V);break;case Static:A==null&&$(D,F,V,oe);break;case Fragment:O(A,D,F,V,U,ne,oe,Q,Z);break;default:se&1?k(A,D,F,V,U,ne,oe,Q,Z):se&6?Y(A,D,F,V,U,ne,oe,Q,Z):(se&64||se&128)&&W.process(A,D,F,V,U,ne,oe,Q,Z,pe)}ce!=null&&U&&setRef(ce,A&&A.ref,ne,D||A,!D)},v=(A,D,F,V)=>{if(A==null)o(D.el=s(D.children),F,V);else{const U=D.el=A.el;D.children!==A.children&&d(U,D.children)}},y=(A,D,F,V)=>{A==null?o(D.el=l(D.children||""),F,V):D.el=A.el},$=(A,D,F,V)=>{[A.el,A.anchor]=g(A.children,D,F,V,A.el,A.anchor)},L=({el:A,anchor:D},F,V)=>{let U;for(;A&&A!==D;)U=b(A),o(A,F,V),A=U;o(D,F,V)},P=({el:A,anchor:D})=>{let F;for(;A&&A!==D;)F=b(A),r(A),A=F;r(D)},k=(A,D,F,V,U,ne,oe,Q,Z)=>{oe=oe||D.type==="svg",A==null?E(D,F,V,U,ne,oe,Q,Z):M(A,D,U,ne,oe,Q,Z)},E=(A,D,F,V,U,ne,oe,Q)=>{let Z,W;const{type:ce,props:se,shapeFlag:X,transition:ie,dirs:le}=A;if(Z=A.el=a(A.type,ne,se&&se.is,se),X&8?u(Z,A.children):X&16&&T(A.children,Z,null,V,U,ne&&ce!=="foreignObject",oe,Q),le&&invokeDirectiveHook(A,null,V,"created"),w(Z,A,A.scopeId,oe,V),se){for(const be in se)be!=="value"&&!isReservedProp(be)&&i(Z,be,null,se[be],ne,A.children,V,U,de);"value"in se&&i(Z,"value",null,se.value),(W=se.onVnodeBeforeMount)&&invokeVNodeHook(W,V,A)}le&&invokeDirectiveHook(A,null,V,"beforeMount");const Se=(!U||U&&!U.pendingBranch)&&ie&&!ie.persisted;Se&&ie.beforeEnter(Z),o(Z,D,F),((W=se&&se.onVnodeMounted)||Se||le)&&queuePostRenderEffect(()=>{W&&invokeVNodeHook(W,V,A),Se&&ie.enter(Z),le&&invokeDirectiveHook(A,null,V,"mounted")},U)},w=(A,D,F,V,U)=>{if(F&&C(A,F),V)for(let ne=0;ne<V.length;ne++)C(A,V[ne]);if(U){let ne=U.subTree;if(D===ne){const oe=U.vnode;w(A,oe,oe.scopeId,oe.slotScopeIds,U.parent)}}},T=(A,D,F,V,U,ne,oe,Q,Z=0)=>{for(let W=Z;W<A.length;W++){const ce=A[W]=Q?cloneIfMounted(A[W]):normalizeVNode(A[W]);x(null,ce,D,F,V,U,ne,oe,Q)}},M=(A,D,F,V,U,ne,oe)=>{const Q=D.el=A.el;let{patchFlag:Z,dynamicChildren:W,dirs:ce}=D;Z|=A.patchFlag&16;const se=A.props||EMPTY_OBJ,X=D.props||EMPTY_OBJ;let ie;F&&toggleRecurse(F,!1),(ie=X.onVnodeBeforeUpdate)&&invokeVNodeHook(ie,F,D,A),ce&&invokeDirectiveHook(D,A,F,"beforeUpdate"),F&&toggleRecurse(F,!0);const le=U&&D.type!=="foreignObject";if(W?_(A.dynamicChildren,W,Q,F,V,le,ne):oe||ee(A,D,Q,null,F,V,le,ne,!1),Z>0){if(Z&16)J(Q,D,se,X,F,V,U);else if(Z&2&&se.class!==X.class&&i(Q,"class",null,X.class,U),Z&4&&i(Q,"style",se.style,X.style,U),Z&8){const Se=D.dynamicProps;for(let be=0;be<Se.length;be++){const Te=Se[be],De=se[Te],Ge=X[Te];(Ge!==De||Te==="value")&&i(Q,Te,De,Ge,U,A.children,F,V,de)}}Z&1&&A.children!==D.children&&u(Q,D.children)}else!oe&&W==null&&J(Q,D,se,X,F,V,U);((ie=X.onVnodeUpdated)||ce)&&queuePostRenderEffect(()=>{ie&&invokeVNodeHook(ie,F,D,A),ce&&invokeDirectiveHook(D,A,F,"updated")},V)},_=(A,D,F,V,U,ne,oe)=>{for(let Q=0;Q<D.length;Q++){const Z=A[Q],W=D[Q],ce=Z.el&&(Z.type===Fragment||!isSameVNodeType(Z,W)||Z.shapeFlag&70)?f(Z.el):F;x(Z,W,ce,null,V,U,ne,oe,!0)}},J=(A,D,F,V,U,ne,oe)=>{if(F!==V){if(F!==EMPTY_OBJ)for(const Q in F)!isReservedProp(Q)&&!(Q in V)&&i(A,Q,F[Q],null,oe,D.children,U,ne,de);for(const Q in V){if(isReservedProp(Q))continue;const Z=V[Q],W=F[Q];Z!==W&&Q!=="value"&&i(A,Q,W,Z,oe,D.children,U,ne,de)}"value"in V&&i(A,"value",F.value,V.value)}},O=(A,D,F,V,U,ne,oe,Q,Z)=>{const W=D.el=A?A.el:s(""),ce=D.anchor=A?A.anchor:s("");let{patchFlag:se,dynamicChildren:X,slotScopeIds:ie}=D;ie&&(Q=Q?Q.concat(ie):ie),A==null?(o(W,F,V),o(ce,F,V),T(D.children,F,ce,U,ne,oe,Q,Z)):se>0&&se&64&&X&&A.dynamicChildren?(_(A.dynamicChildren,X,F,U,ne,oe,Q),(D.key!=null||U&&D===U.subTree)&&traverseStaticChildren(A,D,!0)):ee(A,D,F,ce,U,ne,oe,Q,Z)},Y=(A,D,F,V,U,ne,oe,Q,Z)=>{D.slotScopeIds=Q,A==null?D.shapeFlag&512?U.ctx.activate(D,F,V,oe,Z):H(D,F,V,U,ne,oe,Z):z(A,D,Z)},H=(A,D,F,V,U,ne,oe)=>{const Q=A.component=createComponentInstance(A,V,U);if(isKeepAlive(A)&&(Q.ctx.renderer=pe),setupComponent(Q),Q.asyncDep){if(U&&U.registerDep(Q,te),!A.el){const Z=Q.subTree=createVNode(Comment);y(null,Z,D,F)}return}te(Q,A,D,F,U,ne,oe)},z=(A,D,F)=>{const V=D.component=A.component;if(shouldUpdateComponent(A,D,F))if(V.asyncDep&&!V.asyncResolved){j(V,D,F);return}else V.next=D,invalidateJob(V.update),V.update();else D.el=A.el,V.vnode=D},te=(A,D,F,V,U,ne,oe)=>{const Q=()=>{if(A.isMounted){let{next:ce,bu:se,u:X,parent:ie,vnode:le}=A,Se=ce,be;toggleRecurse(A,!1),ce?(ce.el=le.el,j(A,ce,oe)):ce=le,se&&invokeArrayFns(se),(be=ce.props&&ce.props.onVnodeBeforeUpdate)&&invokeVNodeHook(be,ie,ce,le),toggleRecurse(A,!0);const Te=renderComponentRoot(A),De=A.subTree;A.subTree=Te,x(De,Te,f(De.el),ge(De),A,U,ne),ce.el=Te.el,Se===null&&updateHOCHostEl(A,Te.el),X&&queuePostRenderEffect(X,U),(be=ce.props&&ce.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(be,ie,ce,le),U)}else{let ce;const{el:se,props:X}=D,{bm:ie,m:le,parent:Se}=A,be=isAsyncWrapper(D);if(toggleRecurse(A,!1),ie&&invokeArrayFns(ie),!be&&(ce=X&&X.onVnodeBeforeMount)&&invokeVNodeHook(ce,Se,D),toggleRecurse(A,!0),se&&Pe){const Te=()=>{A.subTree=renderComponentRoot(A),Pe(se,A.subTree,A,U,null)};be?D.type.__asyncLoader().then(()=>!A.isUnmounted&&Te()):Te()}else{const Te=A.subTree=renderComponentRoot(A);x(null,Te,F,V,A,U,ne),D.el=Te.el}if(le&&queuePostRenderEffect(le,U),!be&&(ce=X&&X.onVnodeMounted)){const Te=D;queuePostRenderEffect(()=>invokeVNodeHook(ce,Se,Te),U)}(D.shapeFlag&256||Se&&isAsyncWrapper(Se.vnode)&&Se.vnode.shapeFlag&256)&&A.a&&queuePostRenderEffect(A.a,U),A.isMounted=!0,D=F=V=null}},Z=A.effect=new ReactiveEffect(Q,()=>queueJob(W),A.scope),W=A.update=()=>Z.run();W.id=A.uid,toggleRecurse(A,!0),W()},j=(A,D,F)=>{D.component=A;const V=A.vnode.props;A.vnode=D,A.next=null,updateProps(A,D.props,V,F),updateSlots(A,D.children,F),pauseTracking(),flushPreFlushCbs(),resetTracking()},ee=(A,D,F,V,U,ne,oe,Q,Z=!1)=>{const W=A&&A.children,ce=A?A.shapeFlag:0,se=D.children,{patchFlag:X,shapeFlag:ie}=D;if(X>0){if(X&128){K(W,se,F,V,U,ne,oe,Q,Z);return}else if(X&256){R(W,se,F,V,U,ne,oe,Q,Z);return}}ie&8?(ce&16&&de(W,U,ne),se!==W&&u(F,se)):ce&16?ie&16?K(W,se,F,V,U,ne,oe,Q,Z):de(W,U,ne,!0):(ce&8&&u(F,""),ie&16&&T(se,F,V,U,ne,oe,Q,Z))},R=(A,D,F,V,U,ne,oe,Q,Z)=>{A=A||EMPTY_ARR,D=D||EMPTY_ARR;const W=A.length,ce=D.length,se=Math.min(W,ce);let X;for(X=0;X<se;X++){const ie=D[X]=Z?cloneIfMounted(D[X]):normalizeVNode(D[X]);x(A[X],ie,F,null,U,ne,oe,Q,Z)}W>ce?de(A,U,ne,!0,!1,se):T(D,F,V,U,ne,oe,Q,Z,se)},K=(A,D,F,V,U,ne,oe,Q,Z)=>{let W=0;const ce=D.length;let se=A.length-1,X=ce-1;for(;W<=se&&W<=X;){const ie=A[W],le=D[W]=Z?cloneIfMounted(D[W]):normalizeVNode(D[W]);if(isSameVNodeType(ie,le))x(ie,le,F,null,U,ne,oe,Q,Z);else break;W++}for(;W<=se&&W<=X;){const ie=A[se],le=D[X]=Z?cloneIfMounted(D[X]):normalizeVNode(D[X]);if(isSameVNodeType(ie,le))x(ie,le,F,null,U,ne,oe,Q,Z);else break;se--,X--}if(W>se){if(W<=X){const ie=X+1,le=ie<ce?D[ie].el:V;for(;W<=X;)x(null,D[W]=Z?cloneIfMounted(D[W]):normalizeVNode(D[W]),F,le,U,ne,oe,Q,Z),W++}}else if(W>X)for(;W<=se;)me(A[W],U,ne,!0),W++;else{const ie=W,le=W,Se=new Map;for(W=le;W<=X;W++){const Oe=D[W]=Z?cloneIfMounted(D[W]):normalizeVNode(D[W]);Oe.key!=null&&Se.set(Oe.key,W)}let be,Te=0;const De=X-le+1;let Ge=!1,Qe=0;const Je=new Array(De);for(W=0;W<De;W++)Je[W]=0;for(W=ie;W<=se;W++){const Oe=A[W];if(Te>=De){me(Oe,U,ne,!0);continue}let q;if(Oe.key!=null)q=Se.get(Oe.key);else for(be=le;be<=X;be++)if(Je[be-le]===0&&isSameVNodeType(Oe,D[be])){q=be;break}q===void 0?me(Oe,U,ne,!0):(Je[q-le]=W+1,q>=Qe?Qe=q:Ge=!0,x(Oe,D[q],F,null,U,ne,oe,Q,Z),Te++)}const qe=Ge?getSequence(Je):EMPTY_ARR;for(be=qe.length-1,W=De-1;W>=0;W--){const Oe=le+W,q=D[Oe],ae=Oe+1<ce?D[Oe+1].el:V;Je[W]===0?x(null,q,F,ae,U,ne,oe,Q,Z):Ge&&(be<0||W!==qe[be]?he(q,F,ae,2):be--)}}},he=(A,D,F,V,U=null)=>{const{el:ne,type:oe,transition:Q,children:Z,shapeFlag:W}=A;if(W&6){he(A.component.subTree,D,F,V);return}if(W&128){A.suspense.move(D,F,V);return}if(W&64){oe.move(A,D,F,pe);return}if(oe===Fragment){o(ne,D,F);for(let se=0;se<Z.length;se++)he(Z[se],D,F,V);o(A.anchor,D,F);return}if(oe===Static){L(A,D,F);return}if(V!==2&&W&1&&Q)if(V===0)Q.beforeEnter(ne),o(ne,D,F),queuePostRenderEffect(()=>Q.enter(ne),U);else{const{leave:se,delayLeave:X,afterLeave:ie}=Q,le=()=>o(ne,D,F),Se=()=>{se(ne,()=>{le(),ie&&ie()})};X?X(ne,le,Se):Se()}else o(ne,D,F)},me=(A,D,F,V=!1,U=!1)=>{const{type:ne,props:oe,ref:Q,children:Z,dynamicChildren:W,shapeFlag:ce,patchFlag:se,dirs:X}=A;if(Q!=null&&setRef(Q,null,F,A,!0),ce&256){D.ctx.deactivate(A);return}const ie=ce&1&&X,le=!isAsyncWrapper(A);let Se;if(le&&(Se=oe&&oe.onVnodeBeforeUnmount)&&invokeVNodeHook(Se,D,A),ce&6)ye(A.component,F,V);else{if(ce&128){A.suspense.unmount(F,V);return}ie&&invokeDirectiveHook(A,null,D,"beforeUnmount"),ce&64?A.type.remove(A,D,F,U,pe,V):W&&(ne!==Fragment||se>0&&se&64)?de(W,D,F,!1,!0):(ne===Fragment&&se&384||!U&&ce&16)&&de(Z,D,F),V&&He(A)}(le&&(Se=oe&&oe.onVnodeUnmounted)||ie)&&queuePostRenderEffect(()=>{Se&&invokeVNodeHook(Se,D,A),ie&&invokeDirectiveHook(A,null,D,"unmounted")},F)},He=A=>{const{type:D,el:F,anchor:V,transition:U}=A;if(D===Fragment){Ce(F,V);return}if(D===Static){P(A);return}const ne=()=>{r(F),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:oe,delayLeave:Q}=U,Z=()=>oe(F,ne);Q?Q(A.el,ne,Z):Z()}else ne()},Ce=(A,D)=>{let F;for(;A!==D;)F=b(A),r(A),A=F;r(D)},ye=(A,D,F)=>{const{bum:V,scope:U,update:ne,subTree:oe,um:Q}=A;V&&invokeArrayFns(V),U.stop(),ne&&(ne.active=!1,me(oe,A,D,F)),Q&&queuePostRenderEffect(Q,D),queuePostRenderEffect(()=>{A.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},de=(A,D,F,V=!1,U=!1,ne=0)=>{for(let oe=ne;oe<A.length;oe++)me(A[oe],D,F,V,U)},ge=A=>A.shapeFlag&6?ge(A.component.subTree):A.shapeFlag&128?A.suspense.next():b(A.anchor||A.el),Ve=(A,D,F)=>{A==null?D._vnode&&me(D._vnode,null,null,!0):x(D._vnode||null,A,D,null,null,null,F),flushPreFlushCbs(),flushPostFlushCbs(),D._vnode=A},pe={p:x,um:me,m:he,r:He,mt:H,mc:T,pc:ee,pbc:_,n:ge,o:e};let Ke,Pe;return n&&([Ke,Pe]=n(pe)),{render:Ve,hydrate:Ke,createApp:createAppAPI(Ve,Ke)}}function toggleRecurse({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function traverseStaticChildren(e,n,t=!1){const o=e.children,r=n.children;if(isArray$2(o)&&isArray$2(r))for(let i=0;i<o.length;i++){const a=o[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=cloneIfMounted(r[i]),s.el=a.el),t||traverseStaticChildren(a,s)),s.type===Text&&(s.el=a.el)}}function getSequence(e){const n=e.slice(),t=[0];let o,r,i,a,s;const l=e.length;for(o=0;o<l;o++){const d=e[o];if(d!==0){if(r=t[t.length-1],e[r]<d){n[o]=r,t.push(o);continue}for(i=0,a=t.length-1;i<a;)s=i+a>>1,e[t[s]]<d?i=s+1:a=s;d<e[t[i]]&&(i>0&&(n[o]=t[i-1]),t[i]=o)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=n[a];return t}const isTeleport=e=>e.__isTeleport,isTeleportDisabled=e=>e&&(e.disabled||e.disabled===""),isTargetSVG=e=>typeof SVGElement<"u"&&e instanceof SVGElement,resolveTarget=(e,n)=>{const t=e&&e.to;return isString$1(t)?n?n(t):null:t},TeleportImpl={__isTeleport:!0,process(e,n,t,o,r,i,a,s,l,d){const{mc:u,pc:f,pbc:b,o:{insert:C,querySelector:g,createText:x,createComment:v}}=d,y=isTeleportDisabled(n.props);let{shapeFlag:$,children:L,dynamicChildren:P}=n;if(e==null){const k=n.el=x(""),E=n.anchor=x("");C(k,t,o),C(E,t,o);const w=n.target=resolveTarget(n.props,g),T=n.targetAnchor=x("");w&&(C(T,w),a=a||isTargetSVG(w));const M=(_,J)=>{$&16&&u(L,_,J,r,i,a,s,l)};y?M(t,E):w&&M(w,T)}else{n.el=e.el;const k=n.anchor=e.anchor,E=n.target=e.target,w=n.targetAnchor=e.targetAnchor,T=isTeleportDisabled(e.props),M=T?t:E,_=T?k:w;if(a=a||isTargetSVG(E),P?(b(e.dynamicChildren,P,M,r,i,a,s),traverseStaticChildren(e,n,!0)):l||f(e,n,M,_,r,i,a,s,!1),y)T||moveTeleport(n,t,k,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const J=n.target=resolveTarget(n.props,g);J&&moveTeleport(n,J,null,d,0)}else T&&moveTeleport(n,E,w,d,1)}updateCssVars(n)},remove(e,n,t,o,{um:r,o:{remove:i}},a){const{shapeFlag:s,children:l,anchor:d,targetAnchor:u,target:f,props:b}=e;if(f&&i(u),(a||!isTeleportDisabled(b))&&(i(d),s&16))for(let C=0;C<l.length;C++){const g=l[C];r(g,n,t,!0,!!g.dynamicChildren)}},move:moveTeleport,hydrate:hydrateTeleport};function moveTeleport(e,n,t,{o:{insert:o},m:r},i=2){i===0&&o(e.targetAnchor,n,t);const{el:a,anchor:s,shapeFlag:l,children:d,props:u}=e,f=i===2;if(f&&o(a,n,t),(!f||isTeleportDisabled(u))&&l&16)for(let b=0;b<d.length;b++)r(d[b],n,t,2);f&&o(s,n,t)}function hydrateTeleport(e,n,t,o,r,i,{o:{nextSibling:a,parentNode:s,querySelector:l}},d){const u=n.target=resolveTarget(n.props,l);if(u){const f=u._lpa||u.firstChild;if(n.shapeFlag&16)if(isTeleportDisabled(n.props))n.anchor=d(a(e),n,s(e),t,o,r,i),n.targetAnchor=f;else{n.anchor=a(e);let b=f;for(;b;)if(b=a(b),b&&b.nodeType===8&&b.data==="teleport anchor"){n.targetAnchor=b,u._lpa=n.targetAnchor&&a(n.targetAnchor);break}d(f,n,u,t,o,r,i)}updateCssVars(n)}return n.anchor&&a(n.anchor)}const Teleport=TeleportImpl;function updateCssVars(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Fragment=Symbol(void 0),Text=Symbol(void 0),Comment=Symbol(void 0),Static=Symbol(void 0),blockStack=[];let currentBlock=null;function openBlock(e=!1){blockStack.push(currentBlock=e?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(e){isBlockTreeEnabled+=e}function setupBlock(e){return e.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(e),e}function createElementBlock(e,n,t,o,r,i){return setupBlock(createBaseVNode(e,n,t,o,r,i,!0))}function createBlock(e,n,t,o,r){return setupBlock(createVNode(e,n,t,o,r,!0))}function isVNode(e){return e?e.__v_isVNode===!0:!1}function isSameVNodeType(e,n){return e.type===n.type&&e.key===n.key}const InternalObjectKey="__vInternal",normalizeKey=({key:e})=>e??null,normalizeRef=({ref:e,ref_key:n,ref_for:t})=>e!=null?isString$1(e)||isRef(e)||isFunction$1(e)?{i:currentRenderingInstance,r:e,k:n,f:!!t}:e:null;function createBaseVNode(e,n=null,t=null,o=0,r=null,i=e===Fragment?0:1,a=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&normalizeKey(n),ref:n&&normalizeRef(n),scopeId:currentScopeId,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return s?(normalizeChildren(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=isString$1(t)?8:16),isBlockTreeEnabled>0&&!a&&currentBlock&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&currentBlock.push(l),l}const createVNode=_createVNode;function _createVNode(e,n=null,t=null,o=0,r=null,i=!1){if((!e||e===NULL_DYNAMIC_COMPONENT)&&(e=Comment),isVNode(e)){const s=cloneVNode(e,n,!0);return t&&normalizeChildren(s,t),isBlockTreeEnabled>0&&!i&&currentBlock&&(s.shapeFlag&6?currentBlock[currentBlock.indexOf(e)]=s:currentBlock.push(s)),s.patchFlag|=-2,s}if(isClassComponent(e)&&(e=e.__vccOpts),n){n=guardReactiveProps(n);let{class:s,style:l}=n;s&&!isString$1(s)&&(n.class=normalizeClass(s)),isObject$1(l)&&(isProxy(l)&&!isArray$2(l)&&(l=extend({},l)),n.style=normalizeStyle(l))}const a=isString$1(e)?1:isSuspense(e)?128:isTeleport(e)?64:isObject$1(e)?4:isFunction$1(e)?2:0;return createBaseVNode(e,n,t,o,r,a,i,!0)}function guardReactiveProps(e){return e?isProxy(e)||InternalObjectKey in e?extend({},e):e:null}function cloneVNode(e,n,t=!1){const{props:o,ref:r,patchFlag:i,children:a}=e,s=n?mergeProps(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&normalizeKey(s),ref:n&&n.ref?t&&r?isArray$2(r)?r.concat(normalizeRef(n)):[r,normalizeRef(n)]:normalizeRef(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Fragment?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cloneVNode(e.ssContent),ssFallback:e.ssFallback&&cloneVNode(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function createTextVNode(e=" ",n=0){return createVNode(Text,null,e,n)}function createCommentVNode(e="",n=!1){return n?(openBlock(),createBlock(Comment,null,e)):createVNode(Comment,null,e)}function normalizeVNode(e){return e==null||typeof e=="boolean"?createVNode(Comment):isArray$2(e)?createVNode(Fragment,null,e.slice()):typeof e=="object"?cloneIfMounted(e):createVNode(Text,null,String(e))}function cloneIfMounted(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cloneVNode(e)}function normalizeChildren(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(isArray$2(n))t=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),normalizeChildren(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(InternalObjectKey in n)?n._ctx=currentRenderingInstance:r===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else isFunction$1(n)?(n={default:n,_ctx:currentRenderingInstance},t=32):(n=String(n),o&64?(t=16,n=[createTextVNode(n)]):t=8);e.children=n,e.shapeFlag|=t}function mergeProps(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=normalizeClass([n.class,o.class]));else if(r==="style")n.style=normalizeStyle([n.style,o.style]);else if(isOn(r)){const i=n[r],a=o[r];a&&i!==a&&!(isArray$2(i)&&i.includes(a))&&(n[r]=i?[].concat(i,a):a)}else r!==""&&(n[r]=o[r])}return n}function invokeVNodeHook(e,n,t,o=null){callWithAsyncErrorHandling(e,n,7,[t,o])}const emptyAppContext=createAppContext();let uid=0;function createComponentInstance(e,n,t){const o=e.type,r=(n?n.appContext:e.appContext)||emptyAppContext,i={uid:uid++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(o,r),emitsOptions:normalizeEmitsOptions(o,r),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:o.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=emit.bind(null,i),e.ce&&e.ce(i),i}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance,setCurrentInstance=e=>{currentInstance=e,e.scope.on()},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),currentInstance=null};function isStatefulComponent(e){return e.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(e,n=!1){isInSSRComponentSetup=n;const{props:t,children:o}=e.vnode,r=isStatefulComponent(e);initProps(e,t,r,n),initSlots(e,o);const i=r?setupStatefulComponent(e,n):void 0;return isInSSRComponentSetup=!1,i}function setupStatefulComponent(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=markRaw(new Proxy(e.ctx,PublicInstanceProxyHandlers));const{setup:o}=t;if(o){const r=e.setupContext=o.length>1?createSetupContext(e):null;setCurrentInstance(e),pauseTracking();const i=callWithErrorHandling(o,e,0,[e.props,r]);if(resetTracking(),unsetCurrentInstance(),isPromise(i)){if(i.then(unsetCurrentInstance,unsetCurrentInstance),n)return i.then(a=>{handleSetupResult(e,a,n)}).catch(a=>{handleError(a,e,0)});e.asyncDep=i}else handleSetupResult(e,i,n)}else finishComponentSetup(e,n)}function handleSetupResult(e,n,t){isFunction$1(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:isObject$1(n)&&(e.setupState=proxyRefs(n)),finishComponentSetup(e,t)}let compile;function finishComponentSetup(e,n,t){const o=e.type;if(!e.render){if(!n&&compile&&!o.render){const r=o.template||resolveMergedOptions(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:s,compilerOptions:l}=o,d=extend(extend({isCustomElement:i,delimiters:s},a),l);o.render=compile(r,d)}}e.render=o.render||NOOP}setCurrentInstance(e),pauseTracking(),applyOptions(e),resetTracking(),unsetCurrentInstance()}function createAttrsProxy(e){return new Proxy(e.attrs,{get(n,t){return track(e,"get","$attrs"),n[t]}})}function createSetupContext(e){const n=o=>{e.exposed=o||{}};let t;return{get attrs(){return t||(t=createAttrsProxy(e))},slots:e.slots,emit:e.emit,expose:n}}function getExposeProxy(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(proxyRefs(markRaw(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in publicPropertiesMap)return publicPropertiesMap[t](e)},has(n,t){return t in n||t in publicPropertiesMap}}))}function getComponentName(e,n=!0){return isFunction$1(e)?e.displayName||e.name:e.name||n&&e.__name}function isClassComponent(e){return isFunction$1(e)&&"__vccOpts"in e}const computed=(e,n)=>computed$1(e,n,isInSSRComponentSetup);function h(e,n,t){const o=arguments.length;return o===2?isObject$1(n)&&!isArray$2(n)?isVNode(n)?createVNode(e,null,[n]):createVNode(e,n):createVNode(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&isVNode(t)&&(t=[t]),createVNode(e,n,t))}const ssrContextKey$1=Symbol(""),useSSRContext=()=>inject(ssrContextKey$1),version$1="3.2.47",svgNS="http://www.w3.org/2000/svg",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const r=n?doc.createElementNS(svgNS,e):doc.createElement(e,t?{is:t}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>doc.createTextNode(e),createComment:e=>doc.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>doc.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,r,i){const a=t?t.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{templateContainer.innerHTML=o?`<svg>${e}</svg>`:e;const s=templateContainer.content;if(o){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function patchClass(e,n,t){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function patchStyle(e,n,t){const o=e.style,r=isString$1(t);if(t&&!r){if(n&&!isString$1(n))for(const i in n)t[i]==null&&setStyle(o,i,"");for(const i in t)setStyle(o,i,t[i])}else{const i=o.display;r?n!==t&&(o.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const importantRE=/\s*!important$/;function setStyle(e,n,t){if(isArray$2(t))t.forEach(o=>setStyle(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=autoPrefix(e,n);importantRE.test(t)?e.setProperty(hyphenate(o),t.replace(importantRE,""),"important"):e[o]=t}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(e,n){const t=prefixCache[n];if(t)return t;let o=camelize(n);if(o!=="filter"&&o in e)return prefixCache[n]=o;o=capitalize(o);for(let r=0;r<prefixes.length;r++){const i=prefixes[r]+o;if(i in e)return prefixCache[n]=i}return n}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(e,n,t,o,r){if(o&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(xlinkNS,n.slice(6,n.length)):e.setAttributeNS(xlinkNS,n,t);else{const i=isSpecialBooleanAttr(n);t==null||i&&!includeBooleanAttr(t)?e.removeAttribute(n):e.setAttribute(n,i?"":t)}}function patchDOMProp(e,n,t,o,r,i,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,i),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let s=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=includeBooleanAttr(t):t==null&&l==="string"?(t="",s=!0):l==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(n)}function addEventListener(e,n,t,o){e.addEventListener(n,t,o)}function removeEventListener(e,n,t,o){e.removeEventListener(n,t,o)}function patchEvent(e,n,t,o,r=null){const i=e._vei||(e._vei={}),a=i[n];if(o&&a)a.value=o;else{const[s,l]=parseName(n);if(o){const d=i[n]=createInvoker(o,r);addEventListener(e,s,d,l)}else a&&(removeEventListener(e,s,a,l),i[n]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(e){let n;if(optionsModifierRE.test(e)){n={};let o;for(;o=e.match(optionsModifierRE);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hyphenate(e.slice(2)),n]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(o,t.value),n,5,[o])};return t.value=e,t.attached=getNow(),t}function patchStopImmediatePropagation(e,n){if(isArray$2(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const nativeOnRE=/^on[a-z]/,patchProp=(e,n,t,o,r=!1,i,a,s,l)=>{n==="class"?patchClass(e,o,r):n==="style"?patchStyle(e,t,o):isOn(n)?isModelListener(n)||patchEvent(e,n,t,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):shouldSetAsProp(e,n,o,r))?patchDOMProp(e,n,o,i,a,s,l):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),patchAttr(e,n,o,r))};function shouldSetAsProp(e,n,t,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&nativeOnRE.test(n)&&isFunction$1(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||nativeOnRE.test(n)&&isString$1(t)?!1:n in e}const TRANSITION="transition",ANIMATION="animation",Transition=(e,{slots:n})=>h(BaseTransition,resolveTransitionProps(e),n);Transition.displayName="Transition";const DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},TransitionPropsValidators=Transition.props=extend({},BaseTransition.props,DOMTransitionPropsValidators),callHook=(e,n=[])=>{isArray$2(e)?e.forEach(t=>t(...n)):e&&e(...n)},hasExplicitCallback=e=>e?isArray$2(e)?e.some(n=>n.length>1):e.length>1:!1;function resolveTransitionProps(e){const n={};for(const O in e)O in DOMTransitionPropsValidators||(n[O]=e[O]);if(e.css===!1)return n;const{name:t="v",type:o,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:d=a,appearToClass:u=s,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:b=`${t}-leave-active`,leaveToClass:C=`${t}-leave-to`}=e,g=normalizeDuration(r),x=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:$,onEnterCancelled:L,onLeave:P,onLeaveCancelled:k,onBeforeAppear:E=y,onAppear:w=$,onAppearCancelled:T=L}=n,M=(O,Y,H)=>{removeTransitionClass(O,Y?u:s),removeTransitionClass(O,Y?d:a),H&&H()},_=(O,Y)=>{O._isLeaving=!1,removeTransitionClass(O,f),removeTransitionClass(O,C),removeTransitionClass(O,b),Y&&Y()},J=O=>(Y,H)=>{const z=O?w:$,te=()=>M(Y,O,H);callHook(z,[Y,te]),nextFrame(()=>{removeTransitionClass(Y,O?l:i),addTransitionClass(Y,O?u:s),hasExplicitCallback(z)||whenTransitionEnds(Y,o,x,te)})};return extend(n,{onBeforeEnter(O){callHook(y,[O]),addTransitionClass(O,i),addTransitionClass(O,a)},onBeforeAppear(O){callHook(E,[O]),addTransitionClass(O,l),addTransitionClass(O,d)},onEnter:J(!1),onAppear:J(!0),onLeave(O,Y){O._isLeaving=!0;const H=()=>_(O,Y);addTransitionClass(O,f),forceReflow(),addTransitionClass(O,b),nextFrame(()=>{O._isLeaving&&(removeTransitionClass(O,f),addTransitionClass(O,C),hasExplicitCallback(P)||whenTransitionEnds(O,o,v,H))}),callHook(P,[O,H])},onEnterCancelled(O){M(O,!1),callHook(L,[O])},onAppearCancelled(O){M(O,!0),callHook(T,[O])},onLeaveCancelled(O){_(O),callHook(k,[O])}})}function normalizeDuration(e){if(e==null)return null;if(isObject$1(e))return[NumberOf(e.enter),NumberOf(e.leave)];{const n=NumberOf(e);return[n,n]}}function NumberOf(e){return toNumber(e)}function addTransitionClass(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function removeTransitionClass(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function nextFrame(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let endId=0;function whenTransitionEnds(e,n,t,o){const r=e._endId=++endId,i=()=>{r===e._endId&&o()};if(t)return setTimeout(i,t);const{type:a,timeout:s,propCount:l}=getTransitionInfo(e,n);if(!a)return o();const d=a+"end";let u=0;const f=()=>{e.removeEventListener(d,b),i()},b=C=>{C.target===e&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},s+1),e.addEventListener(d,b)}function getTransitionInfo(e,n){const t=window.getComputedStyle(e),o=g=>(t[g]||"").split(", "),r=o(`${TRANSITION}Delay`),i=o(`${TRANSITION}Duration`),a=getTimeout(r,i),s=o(`${ANIMATION}Delay`),l=o(`${ANIMATION}Duration`),d=getTimeout(s,l);let u=null,f=0,b=0;n===TRANSITION?a>0&&(u=TRANSITION,f=a,b=i.length):n===ANIMATION?d>0&&(u=ANIMATION,f=d,b=l.length):(f=Math.max(a,d),u=f>0?a>d?TRANSITION:ANIMATION:null,b=u?u===TRANSITION?i.length:l.length:0);const C=u===TRANSITION&&/\b(transform|all)(,|$)/.test(o(`${TRANSITION}Property`).toString());return{type:u,timeout:f,propCount:b,hasTransform:C}}function getTimeout(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,o)=>toMs(t)+toMs(e[o])))}function toMs(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function forceReflow(){return document.body.offsetHeight}const positionMap=new WeakMap,newPositionMap=new WeakMap,TransitionGroupImpl={name:"TransitionGroup",props:extend({},TransitionPropsValidators,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=getCurrentInstance(),o=useTransitionState();let r,i;return onUpdated(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!hasCSSTransform(r[0].el,t.vnode.el,a))return;r.forEach(callPendingCbs),r.forEach(recordPosition);const s=r.filter(applyTranslation);forceReflow(),s.forEach(l=>{const d=l.el,u=d.style;addTransitionClass(d,a),u.transform=u.webkitTransform=u.transitionDuration="";const f=d._moveCb=b=>{b&&b.target!==d||(!b||/transform$/.test(b.propertyName))&&(d.removeEventListener("transitionend",f),d._moveCb=null,removeTransitionClass(d,a))};d.addEventListener("transitionend",f)})}),()=>{const a=toRaw(e),s=resolveTransitionProps(a);let l=a.tag||Fragment;r=i,i=n.default?getTransitionRawChildren(n.default()):[];for(let d=0;d<i.length;d++){const u=i[d];u.key!=null&&setTransitionHooks(u,resolveTransitionHooks(u,s,o,t))}if(r)for(let d=0;d<r.length;d++){const u=r[d];setTransitionHooks(u,resolveTransitionHooks(u,s,o,t)),positionMap.set(u,u.el.getBoundingClientRect())}return createVNode(l,null,i)}}},removeMode=e=>delete e.mode;TransitionGroupImpl.props;const TransitionGroup=TransitionGroupImpl;function callPendingCbs(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function recordPosition(e){newPositionMap.set(e,e.el.getBoundingClientRect())}function applyTranslation(e){const n=positionMap.get(e),t=newPositionMap.get(e),o=n.left-t.left,r=n.top-t.top;if(o||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${o}px,${r}px)`,i.transitionDuration="0s",e}}function hasCSSTransform(e,n,t){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),t.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(o);const{hasTransform:i}=getTransitionInfo(o);return r.removeChild(o),i}const vShow={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):setDisplay(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:o}){!n!=!t&&(o?n?(o.beforeEnter(e),setDisplay(e,!0),o.enter(e)):o.leave(e,()=>{setDisplay(e,!1)}):setDisplay(e,n))},beforeUnmount(e,{value:n}){setDisplay(e,n)}};function setDisplay(e,n){e.style.display=n?e._vod:"none"}const rendererOptions=extend({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const createApp=(...e)=>{const n=ensureRenderer().createApp(...e),{mount:t}=n;return n.mount=o=>{const r=normalizeContainer(o);if(!r)return;const i=n._component;!isFunction$1(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function normalizeContainer(e){return isString$1(e)?document.querySelector(e):e}let onceCbs=[];const paramsMap=new WeakMap;function flushOnceCallbacks(){onceCbs.forEach(e=>e(...paramsMap.get(e))),onceCbs=[]}function beforeNextFrameOnce(e,...n){paramsMap.set(e,n),!onceCbs.includes(e)&&onceCbs.push(e)===1&&requestAnimationFrame(flushOnceCallbacks)}function happensIn(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function getPreciseEventTarget(e){return e.composedPath()[0]||null}function parseResponsiveProp(e){if(typeof e=="number")return{"":e.toString()};const n={};return e.split(/ +/).forEach(t=>{if(t==="")return;const[o,r]=t.split(":");r===void 0?n[""]=o:n[o]=r}),n}function parseResponsivePropValue(e,n){var t;if(e==null)return;const o=parseResponsiveProp(e);if(n===void 0)return o[""];if(typeof n=="string")return(t=o[n])!==null&&t!==void 0?t:o[""];if(Array.isArray(n)){for(let r=n.length-1;r>=0;--r){const i=n[r];if(i in o)return o[i]}return o[""]}else{let r,i=-1;return Object.keys(o).forEach(a=>{const s=Number(a);!Number.isNaN(s)&&n>=s&&s>=i&&(i=s,r=o[a])}),r}}function depx(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function pxfy(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function getMargin(e,n){const t=e.trim().split(/\s+/g),o={top:t[0]};switch(t.length){case 1:o.right=t[0],o.bottom=t[0],o.left=t[0];break;case 2:o.right=t[1],o.left=t[1],o.bottom=t[0];break;case 3:o.right=t[1],o.bottom=t[2],o.left=t[1];break;case 4:o.right=t[1],o.bottom=t[2],o.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?o:o[n]}function getGap(e,n){const[t,o]=e.split(" ");return n?n==="row"?t:o:{row:t,col:o||t}}const colors={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},prefix$1="^\\s*",suffix="\\s*$",float="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",hex="([0-9A-Fa-f])",dhex="([0-9A-Fa-f]{2})",rgbRegex=new RegExp(`${prefix$1}rgb\\s*\\(${float},${float},${float}\\)${suffix}`),rgbaRegex=new RegExp(`${prefix$1}rgba\\s*\\(${float},${float},${float},${float}\\)${suffix}`),sHexRegex=new RegExp(`${prefix$1}#${hex}${hex}${hex}${suffix}`),hexRegex=new RegExp(`${prefix$1}#${dhex}${dhex}${dhex}${suffix}`),sHexaRegex=new RegExp(`${prefix$1}#${hex}${hex}${hex}${hex}${suffix}`),hexaRegex=new RegExp(`${prefix$1}#${dhex}${dhex}${dhex}${dhex}${suffix}`);function parseHex(e){return parseInt(e,16)}function rgba(e){try{let n;if(n=hexRegex.exec(e))return[parseHex(n[1]),parseHex(n[2]),parseHex(n[3]),1];if(n=rgbRegex.exec(e))return[roundChannel(n[1]),roundChannel(n[5]),roundChannel(n[9]),1];if(n=rgbaRegex.exec(e))return[roundChannel(n[1]),roundChannel(n[5]),roundChannel(n[9]),roundAlpha(n[13])];if(n=sHexRegex.exec(e))return[parseHex(n[1]+n[1]),parseHex(n[2]+n[2]),parseHex(n[3]+n[3]),1];if(n=hexaRegex.exec(e))return[parseHex(n[1]),parseHex(n[2]),parseHex(n[3]),roundAlpha(parseHex(n[4])/255)];if(n=sHexaRegex.exec(e))return[parseHex(n[1]+n[1]),parseHex(n[2]+n[2]),parseHex(n[3]+n[3]),roundAlpha(parseHex(n[4]+n[4])/255)];if(e in colors)return rgba(colors[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function normalizeAlpha(e){return e>1?1:e<0?0:e}function stringifyRgba(e,n,t,o){return`rgba(${roundChannel(e)}, ${roundChannel(n)}, ${roundChannel(t)}, ${normalizeAlpha(o)})`}function compositeChannel(e,n,t,o,r){return roundChannel((e*n*(1-o)+t*o)/r)}function composite(e,n){Array.isArray(e)||(e=rgba(e)),Array.isArray(n)||(n=rgba(n));const t=e[3],o=n[3],r=roundAlpha(t+o-t*o);return stringifyRgba(compositeChannel(e[0],t,n[0],o,r),compositeChannel(e[1],t,n[1],o,r),compositeChannel(e[2],t,n[2],o,r),r)}function changeColor(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:rgba(e);return n.alpha?stringifyRgba(t,o,r,n.alpha):stringifyRgba(t,o,r,i)}function scaleColor(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:rgba(e),{lightness:a=1,alpha:s=1}=n;return toRgbaString([t*a,o*a,r*a,i*s])}function roundAlpha(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function roundChannel(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function toRgbaString(e){const[n,t,o]=e;return 3 in e?`rgba(${roundChannel(n)}, ${roundChannel(t)}, ${roundChannel(o)}, ${roundAlpha(e[3])})`:`rgba(${roundChannel(n)}, ${roundChannel(t)}, ${roundChannel(o)}, 1)`}function createId(e=8){return Math.random().toString(16).slice(2,2+e)}function getSlot$1(e,n="default",t=[]){const r=e.$slots[n];return r===void 0?t:r()}function keep(e,n=[],t){const o={};return n.forEach(r=>{o[r]=e[r]}),Object.assign(o,t)}function omit(e,n=[],t){const o={};return Object.getOwnPropertyNames(e).forEach(i=>{n.includes(i)||(o[i]=e[i])}),Object.assign(o,t)}function flatten$2(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(createTextVNode(String(o)));return}if(Array.isArray(o)){flatten$2(o,n,t);return}if(o.type===Fragment){if(o.children===null)return;Array.isArray(o.children)&&flatten$2(o.children,n,t)}else o.type!==Comment&&t.push(o)}}),t}function call(e,...n){if(Array.isArray(e))e.forEach(t=>call(t,...n));else return e(...n)}function keysOf(e){return Object.keys(e)}const render$1=(e,...n)=>typeof e=="function"?e(...n):typeof e=="string"?createTextVNode(e):typeof e=="number"?createTextVNode(String(e)):null;function warn$2(e,n){console.error(`[naive/${e}]: ${n}`)}function throwError(e,n){throw new Error(`[naive/${e}]: ${n}`)}function getFirstSlotVNode(e,n="default",t=void 0){const o=e[n];if(!o)return warn$2("getFirstSlotVNode",`slot[${n}] is empty`),null;const r=flatten$2(o(t));return r.length===1?r[0]:(warn$2("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function createRefSetter(e){return n=>{n?e.value=n.$el:e.value=null}}function createInjectionKey(e){return e}function ensureValidVNode(e){return e.some(n=>isVNode(n)?!(n.type===Comment||n.type===Fragment&&!ensureValidVNode(n.children)):!0)?e:null}function resolveSlot(e,n){return e&&ensureValidVNode(e())||n()}function resolveSlotWithProps(e,n,t){return e&&ensureValidVNode(e(n))||t(n)}function resolveWrappedSlot(e,n){const t=e&&ensureValidVNode(e());return n(t||null)}function isSlotEmpty(e){return!(e&&ensureValidVNode(e()))}function isNodeVShowFalse(e){var n;const t=(n=e.dirs)===null||n===void 0?void 0:n.find(({dir:o})=>o===vShow);return!!(t&&t.value===!1)}const Wrapper=defineComponent({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),pureNumberRegex=/^(\d|\.)+$/,numberRegex=/(\d|\.)+/;function formatLength(e,{c:n=1,offset:t=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+t)*n;return r===0?"0":`${r}px`}else if(typeof e=="string")if(pureNumberRegex.test(e)){const r=(Number(e)+t)*n;return o?r===0?"0":`${r}px`:`${r}`}else{const r=numberRegex.exec(e);return r?e.replace(numberRegex,String((Number(r[0])+t)*n)):e}return e}function color2Class(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function ampCount(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const separatorRegex=/\s*,(?![^(]*\))\s*/g,extraSpaceRegex=/\s+/g;function resolveSelectorWithAmp(e,n){const t=[];return n.split(separatorRegex).forEach(o=>{let r=ampCount(o);if(r){if(r===1){e.forEach(a=>{t.push(o.replace("&",a))});return}}else{e.forEach(a=>{t.push((a&&a+" ")+o)});return}let i=[o];for(;r--;){const a=[];i.forEach(s=>{e.forEach(l=>{a.push(s.replace("&",l))})}),i=a}i.forEach(a=>t.push(a))}),t}function resolveSelector(e,n){const t=[];return n.split(separatorRegex).forEach(o=>{e.forEach(r=>{t.push((r&&r+" ")+o)})}),t}function parseSelectorPath(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=resolveSelectorWithAmp(n,t):n=resolveSelector(n,t))}),n.join(", ").replace(extraSpaceRegex," ")}function removeElement(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function queryElement(e){return document.querySelector(`style[cssr-id="${e}"]`)}function createElement(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function isMediaOrSupports(e){return e?/^\s*@(s|m)/.test(e):!1}const kebabRegex=/[A-Z]/g;function kebabCase$2(e){return e.replace(kebabRegex,n=>"-"+n.toLowerCase())}function unwrapProperty(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${kebabCase$2(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function unwrapProperties(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function createStyle(e,n,t,o){if(!n)return"";const r=unwrapProperties(n,t,o);if(!r)return"";if(typeof r=="string")return`${e} {
${r}
}`;const i=Object.keys(r);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return i.forEach(s=>{const l=r[s];if(s==="raw"){a.push(`
`+l+`
`);return}s=kebabCase$2(s),l!=null&&a.push(`  ${s}${unwrapProperty(l)}`)}),e&&a.push("}"),a.join(`
`)}function loopCNodeListWithCallback(e,n,t){e&&e.forEach(o=>{if(Array.isArray(o))loopCNodeListWithCallback(o,n,t);else if(typeof o=="function"){const r=o(n);Array.isArray(r)?loopCNodeListWithCallback(r,n,t):r&&t(r)}else o&&t(o)})}function traverseCNode(e,n,t,o,r,i){const a=e.$;let s="";if(!a||typeof a=="string")isMediaOrSupports(a)?s=a:n.push(a);else if(typeof a=="function"){const u=a({context:o.context,props:r});isMediaOrSupports(u)?s=u:n.push(u)}else if(a.before&&a.before(o.context),!a.$||typeof a.$=="string")isMediaOrSupports(a.$)?s=a.$:n.push(a.$);else if(a.$){const u=a.$({context:o.context,props:r});isMediaOrSupports(u)?s=u:n.push(u)}const l=parseSelectorPath(n),d=createStyle(l,e.props,o,r);s?(t.push(`${s} {`),i&&d&&i.insertRule(`${s} {
${d}
}
`)):(i&&d&&i.insertRule(d),!i&&d.length&&t.push(d)),e.children&&loopCNodeListWithCallback(e.children,{context:o.context,props:r},u=>{if(typeof u=="string"){const f=createStyle(l,{raw:u},o,r);i?i.insertRule(f):t.push(f)}else traverseCNode(u,n,t,o,r,i)}),n.pop(),s&&t.push("}"),a&&a.after&&a.after(o.context)}function render(e,n,t,o=!1){const r=[];return traverseCNode(e,[],r,n,t,o?e.instance.__styleSheet:void 0),o?"":r.join(`

`)}function murmur2(e){for(var n=0,t,o=0,r=e.length;r>=4;++o,r-=4)t=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(r){case 3:n^=(e.charCodeAt(o+2)&255)<<16;case 2:n^=(e.charCodeAt(o+1)&255)<<8;case 1:n^=e.charCodeAt(o)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function unmount(e,n,t){const{els:o}=n;if(t===void 0)o.forEach(removeElement),n.els=[];else{const r=queryElement(t);r&&o.includes(r)&&(removeElement(r),n.els=o.filter(i=>i!==r))}}function addElementToList(e,n){e.push(n)}function mount(e,n,t,o,r,i,a,s,l){if(i&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const b=window.__cssrContext;b[t]||(b[t]=!0,render(n,e,o,i));return}let d;if(t===void 0&&(d=n.render(o),t=murmur2(d)),l){l.adapter(t,d??n.render(o));return}const u=queryElement(t);if(u!==null&&!a)return u;const f=u??createElement(t);if(d===void 0&&(d=n.render(o)),f.textContent=d,u!==null)return u;if(s){const b=document.head.querySelector(`meta[name="${s}"]`);if(b)return document.head.insertBefore(f,b),addElementToList(n.els,f),f}return r?document.head.insertBefore(f,document.head.querySelector("style, link")):document.head.appendChild(f),addElementToList(n.els,f),f}function wrappedRender(e){return render(this,this.instance,e)}function wrappedMount(e={}){const{id:n,ssr:t,props:o,head:r=!1,silent:i=!1,force:a=!1,anchorMetaName:s}=e;return mount(this.instance,this,n,o,r,i,a,s,t)}function wrappedUnmount(e={}){const{id:n}=e;unmount(this.instance,this,n)}const createCNode=function(e,n,t,o){return{instance:e,$:n,props:t,children:o,els:[],render:wrappedRender,mount:wrappedMount,unmount:wrappedUnmount}},c$2=function(e,n,t,o){return Array.isArray(n)?createCNode(e,{$:null},null,n):Array.isArray(t)?createCNode(e,n,null,t):Array.isArray(o)?createCNode(e,n,t,o):createCNode(e,n,t,null)};function CssRender(e={}){let n=null;const t={c:(...o)=>c$2(t,...o),use:(o,...r)=>o.install(t,...r),find:queryElement,context:{},config:e,get __styleSheet(){if(!n){const o=document.createElement("style");return document.head.appendChild(o),n=document.styleSheets[document.styleSheets.length-1],n}return n}};return t}function exists(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return queryElement(e)!==null}function plugin$1(e){let n=".",t="__",o="--",r;if(e){let g=e.blockPrefix;g&&(n=g),g=e.elementPrefix,g&&(t=g),g=e.modifierPrefix,g&&(o=g)}const i={install(g){r=g.c;const x=g.context;x.bem={},x.bem.b=null,x.bem.els=null}};function a(g){let x,v;return{before(y){x=y.bem.b,v=y.bem.els,y.bem.els=null},after(y){y.bem.b=x,y.bem.els=v},$({context:y,props:$}){return g=typeof g=="string"?g:g({context:y,props:$}),y.bem.b=g,`${($==null?void 0:$.bPrefix)||n}${y.bem.b}`}}}function s(g){let x;return{before(v){x=v.bem.els},after(v){v.bem.els=x},$({context:v,props:y}){return g=typeof g=="string"?g:g({context:v,props:y}),v.bem.els=g.split(",").map($=>$.trim()),v.bem.els.map($=>`${(y==null?void 0:y.bPrefix)||n}${v.bem.b}${t}${$}`).join(", ")}}}function l(g){return{$({context:x,props:v}){g=typeof g=="string"?g:g({context:x,props:v});const y=g.split(",").map(P=>P.trim());function $(P){return y.map(k=>`&${(v==null?void 0:v.bPrefix)||n}${x.bem.b}${P!==void 0?`${t}${P}`:""}${o}${k}`).join(", ")}const L=x.bem.els;return L!==null?$(L[0]):$()}}}function d(g){return{$({context:x,props:v}){g=typeof g=="string"?g:g({context:x,props:v});const y=x.bem.els;return`&:not(${(v==null?void 0:v.bPrefix)||n}${x.bem.b}${y!==null&&y.length>0?`${t}${y[0]}`:""}${o}${g})`}}}return Object.assign(i,{cB:(...g)=>r(a(g[0]),g[1],g[2]),cE:(...g)=>r(s(g[0]),g[1],g[2]),cM:(...g)=>r(l(g[0]),g[1],g[2]),cNotM:(...g)=>r(d(g[0]),g[1],g[2])}),i}function createKey(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}createKey("abc","def");const namespace="n",prefix=`.${namespace}-`,elementPrefix="__",modifierPrefix="--",cssr=CssRender(),plugin=plugin$1({blockPrefix:prefix,elementPrefix,modifierPrefix});cssr.use(plugin);const{c:c$1,find}=cssr,{cB,cE,cM,cNotM}=plugin;function insideModal(e){return c$1(({props:{bPrefix:n}})=>`${n||prefix}modal, ${n||prefix}drawer`,[e])}function insidePopover(e){return c$1(({props:{bPrefix:n}})=>`${n||prefix}popover`,[e])}function asModal(e){return c$1(({props:{bPrefix:n}})=>`&${n||prefix}modal`,e)}const cCB=(...e)=>c$1(">",[cB(...e)]);let _isJsdom;function isJsdom(){return _isJsdom===void 0&&(_isJsdom=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),_isJsdom}const isBrowser$2=typeof document<"u"&&typeof window<"u",eventSet=new WeakSet;function eventEffectNotPerformed(e){return!eventSet.has(e)}function useDeferredTrue(e,n,t){if(!n)return e;const o=ref(e.value);let r=null;return watch(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function useFalseUntilTruthy(e){const n=ref(!!e.value);if(n.value)return readonly(n);const t=watch(e,o=>{o&&(n.value=!0,t())});return readonly(n)}function useMemo(e){const n=computed(e),t=ref(n.value);return watch(n,o=>{t.value=o}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(o){e.set(o)}}}function hasInstance(){return getCurrentInstance()!==null}const isBrowser$1=typeof window<"u";let fontsReady,isFontReady;const init$1=()=>{var e,n;fontsReady=isBrowser$1?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,isFontReady=!1,fontsReady!==void 0?fontsReady.then(()=>{isFontReady=!0}):isFontReady=!0};init$1();function onFontsReady(e){if(isFontReady)return;let n=!1;onMounted(()=>{isFontReady||fontsReady==null||fontsReady.then(()=>{n||e()})}),onBeforeUnmount(()=>{n=!0})}function getEventTarget(e){return e.composedPath()[0]}const traps={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function createTrapHandler(e,n,t){if(e==="mousemoveoutside"){const o=r=>{n.contains(getEventTarget(r))||t(r)};return{mousemove:o,touchstart:o}}else if(e==="clickoutside"){let o=!1;const r=a=>{o=!n.contains(getEventTarget(a))},i=a=>{o&&(n.contains(getEventTarget(a))||t(a))};return{mousedown:r,mouseup:i,touchstart:r,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function ensureTrapHandlers(e,n,t){const o=traps[e];let r=o.get(n);r===void 0&&o.set(n,r=new WeakMap);let i=r.get(t);return i===void 0&&r.set(t,i=createTrapHandler(e,n,t)),i}function trapOn(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=ensureTrapHandlers(e,n,t);return Object.keys(r).forEach(i=>{on(i,document,r[i],o)}),!0}return!1}function trapOff(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=ensureTrapHandlers(e,n,t);return Object.keys(r).forEach(i=>{off(i,document,r[i],o)}),!0}return!1}function createDelegate(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function o(){e.set(this,!0),n.set(this,!0)}function r(w,T,M){const _=w[T];return w[T]=function(){return M.apply(w,arguments),_.apply(w,arguments)},w}function i(w,T){w[T]=Event.prototype[T]}const a=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var w;return(w=a.get(this))!==null&&w!==void 0?w:null}function d(w,T){s!==void 0&&Object.defineProperty(w,"currentTarget",{configurable:!0,enumerable:!0,get:T??s.get})}const u={bubble:{},capture:{}},f={};function b(){const w=function(T){const{type:M,eventPhase:_,bubbles:J}=T,O=getEventTarget(T);if(_===2)return;const Y=_===1?"capture":"bubble";let H=O;const z=[];for(;H===null&&(H=window),z.push(H),H!==window;)H=H.parentNode||null;const te=u.capture[M],j=u.bubble[M];if(r(T,"stopPropagation",t),r(T,"stopImmediatePropagation",o),d(T,l),Y==="capture"){if(te===void 0)return;for(let ee=z.length-1;ee>=0&&!e.has(T);--ee){const R=z[ee],K=te.get(R);if(K!==void 0){a.set(T,R);for(const he of K){if(n.has(T))break;he(T)}}if(ee===0&&!J&&j!==void 0){const he=j.get(R);if(he!==void 0)for(const me of he){if(n.has(T))break;me(T)}}}}else if(Y==="bubble"){if(j===void 0)return;for(let ee=0;ee<z.length&&!e.has(T);++ee){const R=z[ee],K=j.get(R);if(K!==void 0){a.set(T,R);for(const he of K){if(n.has(T))break;he(T)}}}}i(T,"stopPropagation"),i(T,"stopImmediatePropagation"),d(T)};return w.displayName="evtdUnifiedHandler",w}function C(){const w=function(T){const{type:M,eventPhase:_}=T;if(_!==2)return;const J=f[M];J!==void 0&&J.forEach(O=>O(T))};return w.displayName="evtdUnifiedWindowEventHandler",w}const g=b(),x=C();function v(w,T){const M=u[w];return M[T]===void 0&&(M[T]=new Map,window.addEventListener(T,g,w==="capture")),M[T]}function y(w){return f[w]===void 0&&(f[w]=new Set,window.addEventListener(w,x)),f[w]}function $(w,T){let M=w.get(T);return M===void 0&&w.set(T,M=new Set),M}function L(w,T,M,_){const J=u[T][M];if(J!==void 0){const O=J.get(w);if(O!==void 0&&O.has(_))return!0}return!1}function P(w,T){const M=f[w];return!!(M!==void 0&&M.has(T))}function k(w,T,M,_){let J;if(typeof _=="object"&&_.once===!0?J=te=>{E(w,T,J,_),M(te)}:J=M,trapOn(w,T,J,_))return;const Y=_===!0||typeof _=="object"&&_.capture===!0?"capture":"bubble",H=v(Y,w),z=$(H,T);if(z.has(J)||z.add(J),T===window){const te=y(w);te.has(J)||te.add(J)}}function E(w,T,M,_){if(trapOff(w,T,M,_))return;const O=_===!0||typeof _=="object"&&_.capture===!0,Y=O?"capture":"bubble",H=v(Y,w),z=$(H,T);if(T===window&&!L(T,O?"bubble":"capture",w,M)&&P(w,M)){const j=f[w];j.delete(M),j.size===0&&(window.removeEventListener(w,x),f[w]=void 0)}z.has(M)&&z.delete(M),z.size===0&&H.delete(T),H.size===0&&(window.removeEventListener(w,g,Y==="capture"),u[Y][w]=void 0)}return{on:k,off:E}}const{on,off}=createDelegate(),mousePositionRef=ref(null);function clickHandler(e){if(e.clientX>0||e.clientY>0)mousePositionRef.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:t,top:o,width:r,height:i}=n.getBoundingClientRect();t>0||o>0?mousePositionRef.value={x:t+r/2,y:o+i/2}:mousePositionRef.value={x:0,y:0}}else mousePositionRef.value=null}}let usedCount$2=0,managable$2=!0;function useClickPosition(){if(!isBrowser$1)return readonly(ref(null));usedCount$2===0&&on("click",document,clickHandler,!0);const e=()=>{usedCount$2+=1};return managable$2&&(managable$2=hasInstance())?(onBeforeMount(e),onBeforeUnmount(()=>{usedCount$2-=1,usedCount$2===0&&off("click",document,clickHandler,!0)})):e(),readonly(mousePositionRef)}const clickedTimeRef=ref(void 0);let usedCount$1=0;function handleClick(){clickedTimeRef.value=Date.now()}let managable$1=!0;function useClicked(e){if(!isBrowser$1)return readonly(ref(!1));const n=ref(!1);let t=null;function o(){t!==null&&window.clearTimeout(t)}function r(){o(),n.value=!0,t=window.setTimeout(()=>{n.value=!1},e)}usedCount$1===0&&on("click",window,handleClick,!0);const i=()=>{usedCount$1+=1,on("click",window,r,!0)};return managable$1&&(managable$1=hasInstance())?(onBeforeMount(i),onBeforeUnmount(()=>{usedCount$1-=1,usedCount$1===0&&off("click",window,handleClick,!0),off("click",window,r,!0),o()})):i(),readonly(n)}let usedCount=0;const supportMatchMedia=typeof window<"u"&&window.matchMedia!==void 0,osTheme=ref(null);let darkMql,lightMql;function handleDarkMqlChange(e){e.matches&&(osTheme.value="dark")}function handleLightMqlChange(e){e.matches&&(osTheme.value="light")}function init(){darkMql=window.matchMedia("(prefers-color-scheme: dark)"),lightMql=window.matchMedia("(prefers-color-scheme: light)"),darkMql.matches?osTheme.value="dark":lightMql.matches?osTheme.value="light":osTheme.value=null,darkMql.addEventListener?(darkMql.addEventListener("change",handleDarkMqlChange),lightMql.addEventListener("change",handleLightMqlChange)):darkMql.addListener&&(darkMql.addListener(handleDarkMqlChange),lightMql.addListener(handleLightMqlChange))}function clean(){"removeEventListener"in darkMql?(darkMql.removeEventListener("change",handleDarkMqlChange),lightMql.removeEventListener("change",handleLightMqlChange)):"removeListener"in darkMql&&(darkMql.removeListener(handleDarkMqlChange),lightMql.removeListener(handleLightMqlChange)),darkMql=void 0,lightMql=void 0}let managable=!0;function useOsTheme(){return supportMatchMedia&&(usedCount===0&&init(),managable&&(managable=hasInstance())&&(onBeforeMount(()=>{usedCount+=1}),onBeforeUnmount(()=>{usedCount-=1,usedCount===0&&clean()}))),readonly(osTheme)}function useMergedState(e,n){return watch(e,t=>{t!==void 0&&(n.value=t)}),computed(()=>e.value===void 0?n.value:e.value)}function isMounted(){const e=ref(!1);return onMounted(()=>{e.value=!0}),readonly(e)}function useCompitable(e,n){return computed(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const isIos=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function useIsIos(){return isIos}const defaultBreakpointOptions={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function createMediaQuery(e){return`(min-width: ${e}px)`}const mqlMap={};function useBreakpoints(e=defaultBreakpointOptions){if(!isBrowser$1)return computed(()=>[]);if(typeof window.matchMedia!="function")return computed(()=>[]);const n=ref({}),t=Object.keys(e),o=(r,i)=>{r.matches?n.value[i]=!0:n.value[i]=!1};return t.forEach(r=>{const i=e[r];let a,s;mqlMap[i]===void 0?(a=window.matchMedia(createMediaQuery(i)),a.addEventListener?a.addEventListener("change",l=>{s.forEach(d=>{d(l,r)})}):a.addListener&&a.addListener(l=>{s.forEach(d=>{d(l,r)})}),s=new Set,mqlMap[i]={mql:a,cbs:s}):(a=mqlMap[i].mql,s=mqlMap[i].cbs),s.add(o),a.matches&&s.forEach(l=>{l(a,r)})}),onBeforeUnmount(()=>{t.forEach(r=>{const{cbs:i}=mqlMap[e[r]];i.has(o)&&i.delete(o)})}),computed(()=>{const{value:r}=n;return t.filter(i=>r[i])})}function useKeyboard(e={},n){const t=reactive({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(d=>{if(d!==l.key)return;const u=o[d];if(typeof u=="function")u(l);else{const{stop:f=!1,prevent:b=!1}=u;f&&l.stopPropagation(),b&&l.preventDefault(),u.handler(l)}})},a=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(d=>{if(d!==l.key)return;const u=r[d];if(typeof u=="function")u(l);else{const{stop:f=!1,prevent:b=!1}=u;f&&l.stopPropagation(),b&&l.preventDefault(),u.handler(l)}})},s=()=>{(n===void 0||n.value)&&(on("keydown",document,i),on("keyup",document,a)),n!==void 0&&watch(n,l=>{l?(on("keydown",document,i),on("keyup",document,a)):(off("keydown",document,i),off("keyup",document,a))})};return hasInstance()?(onBeforeMount(s),onBeforeUnmount(()=>{(n===void 0||n.value)&&(off("keydown",document,i),off("keyup",document,a))})):s(),readonly(t)}const internalSelectionMenuBodyInjectionKey="n-internal-select-menu-body",modalBodyInjectionKey="n-modal-body",modalInjectionKey="n-modal",drawerBodyInjectionKey="n-drawer-body",popoverBodyInjectionKey="n-popover-body",teleportDisabled="__disabled__";function useAdjustedTo(e){const n=inject(modalBodyInjectionKey,null),t=inject(drawerBodyInjectionKey,null),o=inject(popoverBodyInjectionKey,null),r=inject(internalSelectionMenuBodyInjectionKey,null),i=ref();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};onMounted(()=>{on("fullscreenchange",document,a)}),onBeforeUnmount(()=>{off("fullscreenchange",document,a)})}return useMemo(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?teleportDisabled:s===!0?i.value||"body":s:n!=null&&n.value?(a=n.value.$el)!==null&&a!==void 0?a:n.value:t!=null&&t.value?t.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:s??(i.value||"body")})}useAdjustedTo.tdkey=teleportDisabled;useAdjustedTo.propTo={type:[String,Object,Boolean],default:void 0};function getSlot(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return o()}function flatten$1(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(createTextVNode(String(o)));return}if(Array.isArray(o)){flatten$1(o,n,t);return}if(o.type===Fragment){if(o.children===null)return;Array.isArray(o.children)&&flatten$1(o.children,n,t)}else o.type!==Comment&&t.push(o)}}),t}function getFirstVNode(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const r=flatten$1(o());if(r.length===1)return r[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let viewMeasurer=null;function ensureViewBoundingRect(){if(viewMeasurer===null&&(viewMeasurer=document.getElementById("v-binder-view-measurer"),viewMeasurer===null)){viewMeasurer=document.createElement("div"),viewMeasurer.id="v-binder-view-measurer";const{style:e}=viewMeasurer;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(viewMeasurer)}return viewMeasurer.getBoundingClientRect()}function getPointRect(e,n){const t=ensureViewBoundingRect();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function getRect(e){const n=e.getBoundingClientRect(),t=ensureViewBoundingRect();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function getParentNode(e){return e.nodeType===9?null:e.parentNode}function getScrollParent(e){if(e===null)return null;const n=getParentNode(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:o,overflowY:r}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+r+o))return n}return getScrollParent(n)}const Binder=defineComponent({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;provide("VBinder",(n=getCurrentInstance())===null||n===void 0?void 0:n.proxy);const t=inject("VBinder",null),o=ref(null),r=y=>{o.value=y,t&&e.syncTargetWithParent&&t.setTargetRef(y)};let i=[];const a=()=>{let y=o.value;for(;y=getScrollParent(y),y!==null;)i.push(y);for(const $ of i)on("scroll",$,f,!0)},s=()=>{for(const y of i)off("scroll",y,f,!0);i=[]},l=new Set,d=y=>{l.size===0&&a(),l.has(y)||l.add(y)},u=y=>{l.has(y)&&l.delete(y),l.size===0&&s()},f=()=>{beforeNextFrameOnce(b)},b=()=>{l.forEach(y=>y())},C=new Set,g=y=>{C.size===0&&on("resize",window,v),C.has(y)||C.add(y)},x=y=>{C.has(y)&&C.delete(y),C.size===0&&off("resize",window,v)},v=()=>{C.forEach(y=>y())};return onBeforeUnmount(()=>{off("resize",window,v),s()}),{targetRef:o,setTargetRef:r,addScrollListener:d,removeScrollListener:u,addResizeListener:g,removeResizeListener:x}},render(){return getSlot("binder",this.$slots)}}),VBinder=Binder,VTarget=defineComponent({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=inject("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?withDirectives(getFirstVNode("follower",this.$slots),[[n]]):getFirstVNode("follower",this.$slots)}}),ctxKey$1="@@mmoContext",mousemoveoutside={mounted(e,{value:n}){e[ctxKey$1]={handler:void 0},typeof n=="function"&&(e[ctxKey$1].handler=n,on("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[ctxKey$1];typeof n=="function"?t.handler?t.handler!==n&&(off("mousemoveoutside",e,t.handler),t.handler=n,on("mousemoveoutside",e,n)):(e[ctxKey$1].handler=n,on("mousemoveoutside",e,n)):t.handler&&(off("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[ctxKey$1];n&&off("mousemoveoutside",e,n),e[ctxKey$1].handler=void 0}},mousemoveoutside$1=mousemoveoutside,ctxKey="@@coContext",clickoutside={mounted(e,{value:n,modifiers:t}){e[ctxKey]={handler:void 0},typeof n=="function"&&(e[ctxKey].handler=n,on("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const o=e[ctxKey];typeof n=="function"?o.handler?o.handler!==n&&(off("clickoutside",e,o.handler,{capture:t.capture}),o.handler=n,on("clickoutside",e,n,{capture:t.capture})):(e[ctxKey].handler=n,on("clickoutside",e,n,{capture:t.capture})):o.handler&&(off("clickoutside",e,o.handler,{capture:t.capture}),o.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[ctxKey];t&&off("clickoutside",e,t,{capture:n.capture}),e[ctxKey].handler=void 0}},clickoutside$1=clickoutside;function warn$1(e,n){console.error(`[vdirs/${e}]: ${n}`)}class ZIndexManager{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:o}=this;if(t!==void 0){n.style.zIndex=`${t}`,o.delete(n);return}const{nextZIndex:r}=this;o.has(n)&&o.get(n)+1===this.nextZIndex||(n.style.zIndex=`${r}`,o.set(n,r),this.nextZIndex=r+1,this.squashState())}unregister(n,t){const{elementZIndex:o}=this;o.has(n)?o.delete(n):t===void 0&&warn$1("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,o)=>t[1]-o[1]),this.nextZIndex=2e3,n.forEach(t=>{const o=t[0],r=this.nextZIndex++;`${r}`!==o.style.zIndex&&(o.style.zIndex=`${r}`)})}}const zIndexManager=new ZIndexManager,ctx="@@ziContext",zindexable={mounted(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t;e[ctx]={enabled:!!r,initialized:!1},r&&(zIndexManager.ensureZIndex(e,o),e[ctx].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t,i=e[ctx].enabled;r&&!i&&(zIndexManager.ensureZIndex(e,o),e[ctx].initialized=!0),e[ctx].enabled=!!r},unmounted(e,n){if(!e[ctx].initialized)return;const{value:t={}}=n,{zIndex:o}=t;zIndexManager.unregister(e,o)}},zindexable$1=zindexable,ssrContextKey=Symbol("@css-render/vue3-ssr");function createStyleString(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function ssrAdapter(e,n){const t=inject(ssrContextKey,null);if(t===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:o,ids:r}=t;r.has(e)||o!==null&&(r.add(e),o.push(createStyleString(e,n)))}const isBrowser=typeof document<"u";function useSsrAdapter(){if(isBrowser)return;const e=inject(ssrContextKey,null);if(e!==null)return{adapter:ssrAdapter,context:e}}function warn(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c}=CssRender(),cssrAnchorMetaName$1="vueuc-style";function resolveTo(e){return typeof e=="string"?document.querySelector(e):e()}const LazyTeleport=defineComponent({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:useFalseUntilTruthy(toRef(e,"show")),mergedTo:computed(()=>{const{to:n}=e;return n??"body"})}},render(){return this.showTeleport?this.disabled?getSlot("lazy-teleport",this.$slots):h(Teleport,{disabled:this.disabled,to:this.mergedTo},getSlot("lazy-teleport",this.$slots)):null}}),oppositionPositions={top:"bottom",bottom:"top",left:"right",right:"left"},oppositeAligns={start:"end",center:"center",end:"start"},propToCompare={top:"height",bottom:"height",left:"width",right:"width"},transformOrigins={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},overlapTransformOrigin={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},oppositeAlignCssPositionProps={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},keepOffsetDirection={top:!0,bottom:!1,left:!0,right:!1},cssPositionToOppositeAlign={top:"end",bottom:"start",left:"end",right:"start"};function getPlacementAndOffsetOfFollower(e,n,t,o,r,i){if(!r||i)return{placement:e,top:0,left:0};const[a,s]=e.split("-");let l=s??"center",d={top:0,left:0};const u=(C,g,x)=>{let v=0,y=0;const $=t[C]-n[g]-n[C];return $>0&&o&&(x?y=keepOffsetDirection[g]?$:-$:v=keepOffsetDirection[g]?$:-$),{left:v,top:y}},f=a==="left"||a==="right";if(l!=="center"){const C=oppositeAlignCssPositionProps[e],g=oppositionPositions[C],x=propToCompare[C];if(t[x]>n[x]){if(n[C]+n[x]<t[x]){const v=(t[x]-n[x])/2;n[C]<v||n[g]<v?n[C]<n[g]?(l=oppositeAligns[s],d=u(x,g,f)):d=u(x,C,f):l="center"}}else t[x]<n[x]&&n[g]<0&&n[C]>n[g]&&(l=oppositeAligns[s])}else{const C=a==="bottom"||a==="top"?"left":"top",g=oppositionPositions[C],x=propToCompare[C],v=(t[x]-n[x])/2;(n[C]<v||n[g]<v)&&(n[C]>n[g]?(l=cssPositionToOppositeAlign[C],d=u(x,C,f)):(l=cssPositionToOppositeAlign[g],d=u(x,g,f)))}let b=a;return n[a]<t[propToCompare[a]]&&n[a]<n[oppositionPositions[a]]&&(b=oppositionPositions[a]),{placement:l!=="center"?`${b}-${l}`:b,left:d.left,top:d.top}}function getProperTransformOrigin(e,n){return n?overlapTransformOrigin[e]:transformOrigins[e]}function getOffset(e,n,t,o,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}const style$n=c([c(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),c(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[c("> *",{pointerEvents:"all"})])]),VFollower=defineComponent({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=inject("VBinder"),t=useMemo(()=>e.enabled!==void 0?e.enabled:e.show),o=ref(null),r=ref(null),i=()=>{const{syncTrigger:b}=e;b.includes("scroll")&&n.addScrollListener(l),b.includes("resize")&&n.addResizeListener(l)},a=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};onMounted(()=>{t.value&&(l(),i())});const s=useSsrAdapter();style$n.mount({id:"vueuc/binder",head:!0,anchorMetaName:cssrAnchorMetaName$1,ssr:s}),onBeforeUnmount(()=>{a()}),onFontsReady(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const b=o.value;if(b===null)return;const C=n.targetRef,{x:g,y:x,overlap:v}=e,y=g!==void 0&&x!==void 0?getPointRect(g,x):getRect(C);b.style.setProperty("--v-target-width",`${Math.round(y.width)}px`),b.style.setProperty("--v-target-height",`${Math.round(y.height)}px`);const{width:$,minWidth:L,placement:P,internalShift:k,flip:E}=e;b.setAttribute("v-placement",P),v?b.setAttribute("v-overlap",""):b.removeAttribute("v-overlap");const{style:w}=b;$==="target"?w.width=`${y.width}px`:$!==void 0?w.width=$:w.width="",L==="target"?w.minWidth=`${y.width}px`:L!==void 0?w.minWidth=L:w.minWidth="";const T=getRect(b),M=getRect(r.value),{left:_,top:J,placement:O}=getPlacementAndOffsetOfFollower(P,y,T,k,E,v),Y=getProperTransformOrigin(O,v),{left:H,top:z,transform:te}=getOffset(O,M,y,J,_,v);b.setAttribute("v-placement",O),b.style.setProperty("--v-offset-left",`${Math.round(_)}px`),b.style.setProperty("--v-offset-top",`${Math.round(J)}px`),b.style.transform=`translateX(${H}) translateY(${z}) ${te}`,b.style.setProperty("--v-transform-origin",Y),b.style.transformOrigin=Y};watch(t,b=>{b?(i(),d()):a()});const d=()=>{nextTick().then(l).catch(b=>console.error(b))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(b=>{watch(toRef(e,b),l)}),["teleportDisabled"].forEach(b=>{watch(toRef(e,b),d)}),watch(toRef(e,"syncTrigger"),b=>{b.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),b.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const u=isMounted(),f=useMemo(()=>{const{to:b}=e;if(b!==void 0)return b;u.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:r,followerRef:o,mergedTo:f,syncPosition:l}},render(){return h(LazyTeleport,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=h("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[h("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?withDirectives(t,[[zindexable$1,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var resizeObservers=[],hasActiveObservations=function(){return resizeObservers.some(function(e){return e.activeTargets.length>0})},hasSkippedObservations=function(){return resizeObservers.some(function(e){return e.skippedTargets.length>0})},msg="ResizeObserver loop completed with undelivered notifications.",deliverResizeLoopError=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:msg}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=msg),window.dispatchEvent(e)},ResizeObserverBoxOptions;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(ResizeObserverBoxOptions||(ResizeObserverBoxOptions={}));var freeze=function(e){return Object.freeze(e)},ResizeObserverSize=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,freeze(this)}return e}(),DOMRectReadOnly=function(){function e(n,t,o,r){return this.x=n,this.y=t,this.width=o,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,freeze(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,o=n.y,r=n.top,i=n.right,a=n.bottom,s=n.left,l=n.width,d=n.height;return{x:t,y:o,top:r,right:i,bottom:a,left:s,width:l,height:d}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),isSVG=function(e){return e instanceof SVGElement&&"getBBox"in e},isHidden=function(e){if(isSVG(e)){var n=e.getBBox(),t=n.width,o=n.height;return!t&&!o}var r=e,i=r.offsetWidth,a=r.offsetHeight;return!(i||a||e.getClientRects().length)},isElement=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},isReplacedElement=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},global$1=typeof window<"u"?window:{},cache=new WeakMap,scrollRegexp=/auto|scroll/,verticalRegexp=/^tb|vertical/,IE=/msie|trident/i.test(global$1.navigator&&global$1.navigator.userAgent),parseDimension=function(e){return parseFloat(e||"0")},size=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new ResizeObserverSize((t?n:e)||0,(t?e:n)||0)},zeroBoxes=freeze({devicePixelContentBoxSize:size(),borderBoxSize:size(),contentBoxSize:size(),contentRect:new DOMRectReadOnly(0,0,0,0)}),calculateBoxSizes=function(e,n){if(n===void 0&&(n=!1),cache.has(e)&&!n)return cache.get(e);if(isHidden(e))return cache.set(e,zeroBoxes),zeroBoxes;var t=getComputedStyle(e),o=isSVG(e)&&e.ownerSVGElement&&e.getBBox(),r=!IE&&t.boxSizing==="border-box",i=verticalRegexp.test(t.writingMode||""),a=!o&&scrollRegexp.test(t.overflowY||""),s=!o&&scrollRegexp.test(t.overflowX||""),l=o?0:parseDimension(t.paddingTop),d=o?0:parseDimension(t.paddingRight),u=o?0:parseDimension(t.paddingBottom),f=o?0:parseDimension(t.paddingLeft),b=o?0:parseDimension(t.borderTopWidth),C=o?0:parseDimension(t.borderRightWidth),g=o?0:parseDimension(t.borderBottomWidth),x=o?0:parseDimension(t.borderLeftWidth),v=f+d,y=l+u,$=x+C,L=b+g,P=s?e.offsetHeight-L-e.clientHeight:0,k=a?e.offsetWidth-$-e.clientWidth:0,E=r?v+$:0,w=r?y+L:0,T=o?o.width:parseDimension(t.width)-E-k,M=o?o.height:parseDimension(t.height)-w-P,_=T+v+k+$,J=M+y+P+L,O=freeze({devicePixelContentBoxSize:size(Math.round(T*devicePixelRatio),Math.round(M*devicePixelRatio),i),borderBoxSize:size(_,J,i),contentBoxSize:size(T,M,i),contentRect:new DOMRectReadOnly(f,l,T,M)});return cache.set(e,O),O},calculateBoxSize=function(e,n,t){var o=calculateBoxSizes(e,t),r=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(n){case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:return a;case ResizeObserverBoxOptions.BORDER_BOX:return r;default:return i}},ResizeObserverEntry=function(){function e(n){var t=calculateBoxSizes(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=freeze([t.borderBoxSize]),this.contentBoxSize=freeze([t.contentBoxSize]),this.devicePixelContentBoxSize=freeze([t.devicePixelContentBoxSize])}return e}(),calculateDepthForNode=function(e){if(isHidden(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},broadcastActiveObservations=function(){var e=1/0,n=[];resizeObservers.forEach(function(a){if(a.activeTargets.length!==0){var s=[];a.activeTargets.forEach(function(d){var u=new ResizeObserverEntry(d.target),f=calculateDepthForNode(d.target);s.push(u),d.lastReportedSize=calculateBoxSize(d.target,d.observedBox),f<e&&(e=f)}),n.push(function(){a.callback.call(a.observer,s,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var t=0,o=n;t<o.length;t++){var r=o[t];r()}return e},gatherActiveObservationsAtDepth=function(e){resizeObservers.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(calculateDepthForNode(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},process=function(){var e=0;for(gatherActiveObservationsAtDepth(e);hasActiveObservations();)e=broadcastActiveObservations(),gatherActiveObservationsAtDepth(e);return hasSkippedObservations()&&deliverResizeLoopError(),e>0},trigger,callbacks=[],notify=function(){return callbacks.splice(0).forEach(function(e){return e()})},queueMicroTask=function(e){if(!trigger){var n=0,t=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return notify()}).observe(t,o),trigger=function(){t.textContent="".concat(n?n--:n++)}}callbacks.push(e),trigger()},queueResizeObserver=function(e){queueMicroTask(function(){requestAnimationFrame(e)})},watching=0,isWatching=function(){return!!watching},CATCH_PERIOD=250,observerConfig={attributes:!0,characterData:!0,childList:!0,subtree:!0},events=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],time=function(e){return e===void 0&&(e=0),Date.now()+e},scheduled=!1,Scheduler=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=CATCH_PERIOD),!scheduled){scheduled=!0;var o=time(n);queueResizeObserver(function(){var r=!1;try{r=process()}finally{if(scheduled=!1,n=o-time(),!isWatching())return;r?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,observerConfig)};document.body?t():global$1.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),events.forEach(function(t){return global$1.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),events.forEach(function(t){return global$1.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),scheduler=new Scheduler,updateCount=function(e){!watching&&e>0&&scheduler.start(),watching+=e,!watching&&scheduler.stop()},skipNotifyOnElement=function(e){return!isSVG(e)&&!isReplacedElement(e)&&getComputedStyle(e).display==="inline"},ResizeObservation=function(){function e(n,t){this.target=n,this.observedBox=t||ResizeObserverBoxOptions.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=calculateBoxSize(this.target,this.observedBox,!0);return skipNotifyOnElement(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),ResizeObserverDetail=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),observerMap=new WeakMap,getObservationIndex=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},ResizeObserverController=function(){function e(){}return e.connect=function(n,t){var o=new ResizeObserverDetail(n,t);observerMap.set(n,o)},e.observe=function(n,t,o){var r=observerMap.get(n),i=r.observationTargets.length===0;getObservationIndex(r.observationTargets,t)<0&&(i&&resizeObservers.push(r),r.observationTargets.push(new ResizeObservation(t,o&&o.box)),updateCount(1),scheduler.schedule())},e.unobserve=function(n,t){var o=observerMap.get(n),r=getObservationIndex(o.observationTargets,t),i=o.observationTargets.length===1;r>=0&&(i&&resizeObservers.splice(resizeObservers.indexOf(o),1),o.observationTargets.splice(r,1),updateCount(-1))},e.disconnect=function(n){var t=this,o=observerMap.get(n);o.observationTargets.slice().forEach(function(r){return t.unobserve(n,r.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),ResizeObserver=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ResizeObserverController.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!isElement(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ResizeObserverController.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!isElement(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ResizeObserverController.unobserve(this,n)},e.prototype.disconnect=function(){ResizeObserverController.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class ResizeObserverDelegate{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||ResizeObserver)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const o=this.elHandlersMap.get(t.target);o!==void 0&&o(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const resizeObserverManager=new ResizeObserverDelegate,VResizeObserver=defineComponent({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=getCurrentInstance().proxy;function o(r){const{onResize:i}=e;i!==void 0&&i(r)}onMounted(()=>{const r=t.$el;if(r===void 0){warn("resize-observer","$el does not exist.");return}if(r.nextElementSibling!==r.nextSibling&&r.nodeType===3&&r.nodeValue!==""){warn("resize-observer","$el can not be observed (it may be a text node).");return}r.nextElementSibling!==null&&(resizeObserverManager.registerHandler(r.nextElementSibling,o),n=!0)}),onBeforeUnmount(()=>{n&&resizeObserverManager.unregisterHandler(t.$el.nextElementSibling)})},render(){return renderSlot(this.$slots,"default")}});function isHTMLElement(e){return e instanceof HTMLElement}function focusFirstDescendant(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(isHTMLElement(t)&&(attemptFocus(t)||focusFirstDescendant(t)))return!0}return!1}function focusLastDescendant(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(isHTMLElement(t)&&(attemptFocus(t)||focusLastDescendant(t)))return!0}return!1}function attemptFocus(e){if(!isFocusable(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function isFocusable(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let stack=[];const FocusTrap=defineComponent({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=createId(),t=ref(null),o=ref(null);let r=!1,i=!1;const a=typeof document>"u"?null:document.activeElement;function s(){return stack[stack.length-1]===n}function l(v){var y;v.code==="Escape"&&s()&&((y=e.onEsc)===null||y===void 0||y.call(e,v))}onMounted(()=>{watch(()=>e.active,v=>{v?(f(),on("keydown",document,l)):(off("keydown",document,l),r&&b())},{immediate:!0})}),onBeforeUnmount(()=>{off("keydown",document,l),r&&b()});function d(v){if(!i&&s()){const y=u();if(y===null||y.contains(getPreciseEventTarget(v)))return;C("first")}}function u(){const v=t.value;if(v===null)return null;let y=v;for(;y=y.nextSibling,!(y===null||y instanceof Element&&y.tagName==="DIV"););return y}function f(){var v;if(!e.disabled){if(stack.push(n),e.autoFocus){const{initialFocusTo:y}=e;y===void 0?C("first"):(v=resolveTo(y))===null||v===void 0||v.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",d,!0)}}function b(){var v;if(e.disabled||(document.removeEventListener("focus",d,!0),stack=stack.filter($=>$!==n),s()))return;const{finalFocusTo:y}=e;y!==void 0?(v=resolveTo(y))===null||v===void 0||v.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&a instanceof HTMLElement&&(i=!0,a.focus({preventScroll:!0}),i=!1)}function C(v){if(s()&&e.active){const y=t.value,$=o.value;if(y!==null&&$!==null){const L=u();if(L==null||L===$){i=!0,y.focus({preventScroll:!0}),i=!1;return}i=!0;const P=v==="first"?focusFirstDescendant(L):focusLastDescendant(L);i=!1,P||(i=!0,y.focus({preventScroll:!0}),i=!1)}}}function g(v){if(i)return;const y=u();y!==null&&(v.relatedTarget!==null&&y.contains(v.relatedTarget)?C("last"):C("first"))}function x(v){i||(v.relatedTarget!==null&&v.relatedTarget===t.value?C("last"):C("first"))}return{focusableStartRef:t,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:g,handleEndFocus:x}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return h(Fragment,null,[h("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),h("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});let lockCount=0,originalMarginRight="",originalOverflow="",originalOverflowX="",originalOverflowY="";const lockHtmlScrollRightCompensationRef=ref("0px");function useLockHtmlScroll(e){if(typeof document>"u")return;const n=document.documentElement;let t,o=!1;const r=()=>{n.style.marginRight=originalMarginRight,n.style.overflow=originalOverflow,n.style.overflowX=originalOverflowX,n.style.overflowY=originalOverflowY,lockHtmlScrollRightCompensationRef.value="0px"};onMounted(()=>{t=watch(e,i=>{if(i){if(!lockCount){const a=window.innerWidth-n.offsetWidth;a>0&&(originalMarginRight=n.style.marginRight,n.style.marginRight=`${a}px`,lockHtmlScrollRightCompensationRef.value=`${a}px`),originalOverflow=n.style.overflow,originalOverflowX=n.style.overflowX,originalOverflowY=n.style.overflowY,n.style.overflow="hidden",n.style.overflowX="hidden",n.style.overflowY="hidden"}o=!0,lockCount++}else lockCount--,lockCount||r(),o=!1},{immediate:!0})}),onBeforeUnmount(()=>{t==null||t(),o&&(lockCount--,lockCount||r(),o=!1)})}const isComposingRef=ref(!1),compositionStartHandler=()=>{isComposingRef.value=!0},compositionEndHandler=()=>{isComposingRef.value=!1};let mountedCount=0;const useIsComposing=()=>(isBrowser$2&&(onBeforeMount(()=>{mountedCount||(window.addEventListener("compositionstart",compositionStartHandler),window.addEventListener("compositionend",compositionEndHandler)),mountedCount++}),onBeforeUnmount(()=>{mountedCount<=1?(window.removeEventListener("compositionstart",compositionStartHandler),window.removeEventListener("compositionend",compositionEndHandler),mountedCount=0):mountedCount--})),isComposingRef);function useReactivated(e){const n={isDeactivated:!1};let t=!1;return onActivated(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),onDeactivated(()=>{n.isDeactivated=!0,t||(t=!0)}),n}const formItemInjectionKey="n-form-item";function useFormItem(e,{defaultSize:n="medium",mergedSize:t,mergedDisabled:o}={}){const r=inject(formItemInjectionKey,null);provide(formItemInjectionKey,null);const i=computed(t?()=>t(r):()=>{const{size:l}=e;if(l)return l;if(r){const{mergedSize:d}=r;if(d.value!==void 0)return d.value}return n}),a=computed(o?()=>o(r):()=>{const{disabled:l}=e;return l!==void 0?l:r?r.disabled.value:!1}),s=computed(()=>{const{status:l}=e;return l||(r==null?void 0:r.mergedValidationStatus.value)});return onBeforeUnmount(()=>{r&&r.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:a,mergedStatusRef:s,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global;const freeGlobal$1=freeGlobal;var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self,root=freeGlobal$1||freeSelf||Function("return this")();const root$1=root;var Symbol$1=root$1.Symbol;const Symbol$2=Symbol$1;var objectProto$g=Object.prototype,hasOwnProperty$d=objectProto$g.hasOwnProperty,nativeObjectToString$1=objectProto$g.toString,symToStringTag$1=Symbol$2?Symbol$2.toStringTag:void 0;function getRawTag(e){var n=hasOwnProperty$d.call(e,symToStringTag$1),t=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var o=!0}catch{}var r=nativeObjectToString$1.call(e);return o&&(n?e[symToStringTag$1]=t:delete e[symToStringTag$1]),r}var objectProto$f=Object.prototype,nativeObjectToString=objectProto$f.toString;function objectToString(e){return nativeObjectToString.call(e)}var nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$2?Symbol$2.toStringTag:void 0;function baseGetTag(e){return e==null?e===void 0?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}function isObjectLike(e){return e!=null&&typeof e=="object"}var symbolTag$1="[object Symbol]";function isSymbol(e){return typeof e=="symbol"||isObjectLike(e)&&baseGetTag(e)==symbolTag$1}function arrayMap(e,n){for(var t=-1,o=e==null?0:e.length,r=Array(o);++t<o;)r[t]=n(e[t],t,e);return r}var isArray=Array.isArray;const isArray$1=isArray;var INFINITY$1=1/0,symbolProto$1=Symbol$2?Symbol$2.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;function baseToString(e){if(typeof e=="string")return e;if(isArray$1(e))return arrayMap(e,baseToString)+"";if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var n=e+"";return n=="0"&&1/e==-INFINITY$1?"-0":n}function isObject(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function identity$1(e){return e}var asyncTag="[object AsyncFunction]",funcTag$1="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(e){if(!isObject(e))return!1;var n=baseGetTag(e);return n==funcTag$1||n==genTag||n==asyncTag||n==proxyTag}var coreJsData=root$1["__core-js_shared__"];const coreJsData$1=coreJsData;var maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData$1&&coreJsData$1.keys&&coreJsData$1.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var funcProto$2=Function.prototype,funcToString$2=funcProto$2.toString;function toSource(e){if(e!=null){try{return funcToString$2.call(e)}catch{}try{return e+""}catch{}}return""}var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$e=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$c=objectProto$e.hasOwnProperty,reIsNative=RegExp("^"+funcToString$1.call(hasOwnProperty$c).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var n=isFunction(e)?reIsNative:reIsHostCtor;return n.test(toSource(e))}function getValue(e,n){return e==null?void 0:e[n]}function getNative(e,n){var t=getValue(e,n);return baseIsNative(t)?t:void 0}var WeakMap$1=getNative(root$1,"WeakMap");const WeakMap$2=WeakMap$1;var objectCreate=Object.create,baseCreate=function(){function e(){}return function(n){if(!isObject(n))return{};if(objectCreate)return objectCreate(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const baseCreate$1=baseCreate;function apply(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function copyArray(e,n){var t=-1,o=e.length;for(n||(n=Array(o));++t<o;)n[t]=e[t];return n}var HOT_COUNT=800,HOT_SPAN=16,nativeNow=Date.now;function shortOut(e){var n=0,t=0;return function(){var o=nativeNow(),r=HOT_SPAN-(o-t);if(t=o,r>0){if(++n>=HOT_COUNT)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function constant(e){return function(){return e}}var defineProperty=function(){try{var e=getNative(Object,"defineProperty");return e({},"",{}),e}catch{}}();const defineProperty$1=defineProperty;var baseSetToString=defineProperty$1?function(e,n){return defineProperty$1(e,"toString",{configurable:!0,enumerable:!1,value:constant(n),writable:!0})}:identity$1;const baseSetToString$1=baseSetToString;var setToString=shortOut(baseSetToString$1);const setToString$1=setToString;var MAX_SAFE_INTEGER$1=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(e,n){var t=typeof e;return n=n??MAX_SAFE_INTEGER$1,!!n&&(t=="number"||t!="symbol"&&reIsUint.test(e))&&e>-1&&e%1==0&&e<n}function baseAssignValue(e,n,t){n=="__proto__"&&defineProperty$1?defineProperty$1(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function eq(e,n){return e===n||e!==e&&n!==n}var objectProto$d=Object.prototype,hasOwnProperty$b=objectProto$d.hasOwnProperty;function assignValue(e,n,t){var o=e[n];(!(hasOwnProperty$b.call(e,n)&&eq(o,t))||t===void 0&&!(n in e))&&baseAssignValue(e,n,t)}function copyObject(e,n,t,o){var r=!t;t||(t={});for(var i=-1,a=n.length;++i<a;){var s=n[i],l=o?o(t[s],e[s],s,t,e):void 0;l===void 0&&(l=e[s]),r?baseAssignValue(t,s,l):assignValue(t,s,l)}return t}var nativeMax=Math.max;function overRest(e,n,t){return n=nativeMax(n===void 0?e.length-1:n,0),function(){for(var o=arguments,r=-1,i=nativeMax(o.length-n,0),a=Array(i);++r<i;)a[r]=o[n+r];r=-1;for(var s=Array(n+1);++r<n;)s[r]=o[r];return s[n]=t(a),apply(e,this,s)}}function baseRest(e,n){return setToString$1(overRest(e,n,identity$1),e+"")}var MAX_SAFE_INTEGER=9007199254740991;function isLength(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isArrayLike(e){return e!=null&&isLength(e.length)&&!isFunction(e)}function isIterateeCall(e,n,t){if(!isObject(t))return!1;var o=typeof n;return(o=="number"?isArrayLike(t)&&isIndex(n,t.length):o=="string"&&n in t)?eq(t[n],e):!1}function createAssigner(e){return baseRest(function(n,t){var o=-1,r=t.length,i=r>1?t[r-1]:void 0,a=r>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(r--,i):void 0,a&&isIterateeCall(t[0],t[1],a)&&(i=r<3?void 0:i,r=1),n=Object(n);++o<r;){var s=t[o];s&&e(n,s,o,i)}return n})}var objectProto$c=Object.prototype;function isPrototype(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||objectProto$c;return e===t}function baseTimes(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}var argsTag$2="[object Arguments]";function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag$2}var objectProto$b=Object.prototype,hasOwnProperty$a=objectProto$b.hasOwnProperty,propertyIsEnumerable$1=objectProto$b.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty$a.call(e,"callee")&&!propertyIsEnumerable$1.call(e,"callee")};const isArguments$1=isArguments;function stubFalse(){return!1}var freeExports$2=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule$2=freeExports$2&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports$2=freeModule$2&&freeModule$2.exports===freeExports$2,Buffer$2=moduleExports$2?root$1.Buffer:void 0,nativeIsBuffer=Buffer$2?Buffer$2.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse;const isBuffer$1=isBuffer;var argsTag$1="[object Arguments]",arrayTag$1="[object Array]",boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",funcTag="[object Function]",mapTag$2="[object Map]",numberTag$1="[object Number]",objectTag$3="[object Object]",regexpTag$1="[object RegExp]",setTag$2="[object Set]",stringTag$1="[object String]",weakMapTag$1="[object WeakMap]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$2="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0;typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$2]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag]=typedArrayTags[mapTag$2]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag$3]=typedArrayTags[regexpTag$1]=typedArrayTags[setTag$2]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag$1]=!1;function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[baseGetTag(e)]}function baseUnary(e){return function(n){return e(n)}}var freeExports$1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule$1=freeExports$1&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1,freeProcess=moduleExports$1&&freeGlobal$1.process,nodeUtil=function(){try{var e=freeModule$1&&freeModule$1.require&&freeModule$1.require("util").types;return e||freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch{}}();const nodeUtil$1=nodeUtil;var nodeIsTypedArray=nodeUtil$1&&nodeUtil$1.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;const isTypedArray$1=isTypedArray;var objectProto$a=Object.prototype,hasOwnProperty$9=objectProto$a.hasOwnProperty;function arrayLikeKeys(e,n){var t=isArray$1(e),o=!t&&isArguments$1(e),r=!t&&!o&&isBuffer$1(e),i=!t&&!o&&!r&&isTypedArray$1(e),a=t||o||r||i,s=a?baseTimes(e.length,String):[],l=s.length;for(var d in e)(n||hasOwnProperty$9.call(e,d))&&!(a&&(d=="length"||r&&(d=="offset"||d=="parent")||i&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||isIndex(d,l)))&&s.push(d);return s}function overArg(e,n){return function(t){return e(n(t))}}var nativeKeys=overArg(Object.keys,Object);const nativeKeys$1=nativeKeys;var objectProto$9=Object.prototype,hasOwnProperty$8=objectProto$9.hasOwnProperty;function baseKeys(e){if(!isPrototype(e))return nativeKeys$1(e);var n=[];for(var t in Object(e))hasOwnProperty$8.call(e,t)&&t!="constructor"&&n.push(t);return n}function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}function nativeKeysIn(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var objectProto$8=Object.prototype,hasOwnProperty$7=objectProto$8.hasOwnProperty;function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var n=isPrototype(e),t=[];for(var o in e)o=="constructor"&&(n||!hasOwnProperty$7.call(e,o))||t.push(o);return t}function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey(e,n){if(isArray$1(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||isSymbol(e)?!0:reIsPlainProp.test(e)||!reIsDeepProp.test(e)||n!=null&&e in Object(n)}var nativeCreate=getNative(Object,"create");const nativeCreate$1=nativeCreate;function hashClear(){this.__data__=nativeCreate$1?nativeCreate$1(null):{},this.size=0}function hashDelete(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var HASH_UNDEFINED$2="__lodash_hash_undefined__",objectProto$7=Object.prototype,hasOwnProperty$6=objectProto$7.hasOwnProperty;function hashGet(e){var n=this.__data__;if(nativeCreate$1){var t=n[e];return t===HASH_UNDEFINED$2?void 0:t}return hasOwnProperty$6.call(n,e)?n[e]:void 0}var objectProto$6=Object.prototype,hasOwnProperty$5=objectProto$6.hasOwnProperty;function hashHas(e){var n=this.__data__;return nativeCreate$1?n[e]!==void 0:hasOwnProperty$5.call(n,e)}var HASH_UNDEFINED$1="__lodash_hash_undefined__";function hashSet(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=nativeCreate$1&&n===void 0?HASH_UNDEFINED$1:n,this}function Hash(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Hash.prototype.clear=hashClear;Hash.prototype.delete=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;function listCacheClear(){this.__data__=[],this.size=0}function assocIndexOf(e,n){for(var t=e.length;t--;)if(eq(e[t][0],n))return t;return-1}var arrayProto=Array.prototype,splice=arrayProto.splice;function listCacheDelete(e){var n=this.__data__,t=assocIndexOf(n,e);if(t<0)return!1;var o=n.length-1;return t==o?n.pop():splice.call(n,t,1),--this.size,!0}function listCacheGet(e){var n=this.__data__,t=assocIndexOf(n,e);return t<0?void 0:n[t][1]}function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}function listCacheSet(e,n){var t=this.__data__,o=assocIndexOf(t,e);return o<0?(++this.size,t.push([e,n])):t[o][1]=n,this}function ListCache(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}ListCache.prototype.clear=listCacheClear;ListCache.prototype.delete=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;var Map$1=getNative(root$1,"Map");const Map$2=Map$1;function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map$2||ListCache),string:new Hash}}function isKeyable(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function getMapData(e,n){var t=e.__data__;return isKeyable(n)?t[typeof n=="string"?"string":"hash"]:t.map}function mapCacheDelete(e){var n=getMapData(this,e).delete(e);return this.size-=n?1:0,n}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,n){var t=getMapData(this,e),o=t.size;return t.set(e,n),this.size+=t.size==o?0:1,this}function MapCache(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}MapCache.prototype.clear=mapCacheClear;MapCache.prototype.delete=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;var FUNC_ERROR_TEXT="Expected a function";function memoize(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(FUNC_ERROR_TEXT);var t=function(){var o=arguments,r=n?n.apply(this,o):o[0],i=t.cache;if(i.has(r))return i.get(r);var a=e.apply(this,o);return t.cache=i.set(r,a)||i,a};return t.cache=new(memoize.Cache||MapCache),t}memoize.Cache=MapCache;var MAX_MEMOIZE_SIZE=500;function memoizeCapped(e){var n=memoize(e,function(o){return t.size===MAX_MEMOIZE_SIZE&&t.clear(),o}),t=n.cache;return n}var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=memoizeCapped(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(rePropName,function(t,o,r,i){n.push(r?i.replace(reEscapeChar,"$1"):o||t)}),n});const stringToPath$1=stringToPath;function toString(e){return e==null?"":baseToString(e)}function castPath(e,n){return isArray$1(e)?e:isKey(e,n)?[e]:stringToPath$1(toString(e))}var INFINITY=1/0;function toKey(e){if(typeof e=="string"||isSymbol(e))return e;var n=e+"";return n=="0"&&1/e==-INFINITY?"-0":n}function baseGet(e,n){n=castPath(n,e);for(var t=0,o=n.length;e!=null&&t<o;)e=e[toKey(n[t++])];return t&&t==o?e:void 0}function get(e,n,t){var o=e==null?void 0:baseGet(e,n);return o===void 0?t:o}function arrayPush(e,n){for(var t=-1,o=n.length,r=e.length;++t<o;)e[r+t]=n[t];return e}var getPrototype=overArg(Object.getPrototypeOf,Object);const getPrototype$1=getPrototype;var objectTag$2="[object Object]",funcProto=Function.prototype,objectProto$5=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$4=objectProto$5.hasOwnProperty,objectCtorString=funcToString.call(Object);function isPlainObject$1(e){if(!isObjectLike(e)||baseGetTag(e)!=objectTag$2)return!1;var n=getPrototype$1(e);if(n===null)return!0;var t=hasOwnProperty$4.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&funcToString.call(t)==objectCtorString}function baseSlice(e,n,t){var o=-1,r=e.length;n<0&&(n=-n>r?0:r+n),t=t>r?r:t,t<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(r);++o<r;)i[o]=e[o+n];return i}function castSlice(e,n,t){var o=e.length;return t=t===void 0?o:t,!n&&t>=o?e:baseSlice(e,n,t)}var rsAstralRange$2="\\ud800-\\udfff",rsComboMarksRange$3="\\u0300-\\u036f",reComboHalfMarksRange$3="\\ufe20-\\ufe2f",rsComboSymbolsRange$3="\\u20d0-\\u20ff",rsComboRange$3=rsComboMarksRange$3+reComboHalfMarksRange$3+rsComboSymbolsRange$3,rsVarRange$2="\\ufe0e\\ufe0f",rsZWJ$2="\\u200d",reHasUnicode=RegExp("["+rsZWJ$2+rsAstralRange$2+rsComboRange$3+rsVarRange$2+"]");function hasUnicode(e){return reHasUnicode.test(e)}function asciiToArray(e){return e.split("")}var rsAstralRange$1="\\ud800-\\udfff",rsComboMarksRange$2="\\u0300-\\u036f",reComboHalfMarksRange$2="\\ufe20-\\ufe2f",rsComboSymbolsRange$2="\\u20d0-\\u20ff",rsComboRange$2=rsComboMarksRange$2+reComboHalfMarksRange$2+rsComboSymbolsRange$2,rsVarRange$1="\\ufe0e\\ufe0f",rsAstral="["+rsAstralRange$1+"]",rsCombo$2="["+rsComboRange$2+"]",rsFitz$1="\\ud83c[\\udffb-\\udfff]",rsModifier$1="(?:"+rsCombo$2+"|"+rsFitz$1+")",rsNonAstral$1="[^"+rsAstralRange$1+"]",rsRegional$1="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair$1="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ$1="\\u200d",reOptMod$1=rsModifier$1+"?",rsOptVar$1="["+rsVarRange$1+"]?",rsOptJoin$1="(?:"+rsZWJ$1+"(?:"+[rsNonAstral$1,rsRegional$1,rsSurrPair$1].join("|")+")"+rsOptVar$1+reOptMod$1+")*",rsSeq$1=rsOptVar$1+reOptMod$1+rsOptJoin$1,rsSymbol="(?:"+[rsNonAstral$1+rsCombo$2+"?",rsCombo$2,rsRegional$1,rsSurrPair$1,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz$1+"(?="+rsFitz$1+")|"+rsSymbol+rsSeq$1,"g");function unicodeToArray(e){return e.match(reUnicode)||[]}function stringToArray(e){return hasUnicode(e)?unicodeToArray(e):asciiToArray(e)}function createCaseFirst(e){return function(n){n=toString(n);var t=hasUnicode(n)?stringToArray(n):void 0,o=t?t[0]:n.charAt(0),r=t?castSlice(t,1).join(""):n.slice(1);return o[e]()+r}}var upperFirst=createCaseFirst("toUpperCase");const upperFirst$1=upperFirst;function arrayReduce(e,n,t,o){var r=-1,i=e==null?0:e.length;for(o&&i&&(t=e[++r]);++r<i;)t=n(t,e[r],r,e);return t}function basePropertyOf(e){return function(n){return e==null?void 0:e[n]}}var deburredLetters={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},deburrLetter=basePropertyOf(deburredLetters);const deburrLetter$1=deburrLetter;var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rsComboMarksRange$1="\\u0300-\\u036f",reComboHalfMarksRange$1="\\ufe20-\\ufe2f",rsComboSymbolsRange$1="\\u20d0-\\u20ff",rsComboRange$1=rsComboMarksRange$1+reComboHalfMarksRange$1+rsComboSymbolsRange$1,rsCombo$1="["+rsComboRange$1+"]",reComboMark=RegExp(rsCombo$1,"g");function deburr(e){return e=toString(e),e&&e.replace(reLatin,deburrLetter$1).replace(reComboMark,"")}var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function asciiWords(e){return e.match(reAsciiWord)||[]}var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function hasUnicodeWord(e){return reHasUnicodeWord.test(e)}var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange,rsApos$1="['’]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",rsOptContrLower="(?:"+rsApos$1+"(?:d|ll|m|re|s|t|ve))?",rsOptContrUpper="(?:"+rsApos$1+"(?:D|LL|M|RE|S|T|VE))?",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsOrdLower="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsOrdUpper="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+"+rsOptContrLower+"(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+"+rsOptContrUpper+"(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+"+rsOptContrLower,rsUpper+"+"+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join("|"),"g");function unicodeWords(e){return e.match(reUnicodeWord)||[]}function words(e,n,t){return e=toString(e),n=t?void 0:n,n===void 0?hasUnicodeWord(e)?unicodeWords(e):asciiWords(e):e.match(n)||[]}var rsApos="['’]",reApos=RegExp(rsApos,"g");function createCompounder(e){return function(n){return arrayReduce(words(deburr(n).replace(reApos,"")),e,"")}}function stackClear(){this.__data__=new ListCache,this.size=0}function stackDelete(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function stackGet(e){return this.__data__.get(e)}function stackHas(e){return this.__data__.has(e)}var LARGE_ARRAY_SIZE=200;function stackSet(e,n){var t=this.__data__;if(t instanceof ListCache){var o=t.__data__;if(!Map$2||o.length<LARGE_ARRAY_SIZE-1)return o.push([e,n]),this.size=++t.size,this;t=this.__data__=new MapCache(o)}return t.set(e,n),this.size=t.size,this}function Stack(e){var n=this.__data__=new ListCache(e);this.size=n.size}Stack.prototype.clear=stackClear;Stack.prototype.delete=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;var freeExports=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer$1=moduleExports?root$1.Buffer:void 0,allocUnsafe=Buffer$1?Buffer$1.allocUnsafe:void 0;function cloneBuffer(e,n){if(n)return e.slice();var t=e.length,o=allocUnsafe?allocUnsafe(t):new e.constructor(t);return e.copy(o),o}function arrayFilter(e,n){for(var t=-1,o=e==null?0:e.length,r=0,i=[];++t<o;){var a=e[t];n(a,t,e)&&(i[r++]=a)}return i}function stubArray(){return[]}var objectProto$4=Object.prototype,propertyIsEnumerable=objectProto$4.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(e){return e==null?[]:(e=Object(e),arrayFilter(nativeGetSymbols(e),function(n){return propertyIsEnumerable.call(e,n)}))}:stubArray;const getSymbols$1=getSymbols;function baseGetAllKeys(e,n,t){var o=n(e);return isArray$1(e)?o:arrayPush(o,t(e))}function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols$1)}var DataView=getNative(root$1,"DataView");const DataView$1=DataView;var Promise$1=getNative(root$1,"Promise");const Promise$2=Promise$1;var Set$1=getNative(root$1,"Set");const Set$2=Set$1;var mapTag$1="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$1="[object Set]",weakMapTag="[object WeakMap]",dataViewTag$1="[object DataView]",dataViewCtorString=toSource(DataView$1),mapCtorString=toSource(Map$2),promiseCtorString=toSource(Promise$2),setCtorString=toSource(Set$2),weakMapCtorString=toSource(WeakMap$2),getTag=baseGetTag;(DataView$1&&getTag(new DataView$1(new ArrayBuffer(1)))!=dataViewTag$1||Map$2&&getTag(new Map$2)!=mapTag$1||Promise$2&&getTag(Promise$2.resolve())!=promiseTag||Set$2&&getTag(new Set$2)!=setTag$1||WeakMap$2&&getTag(new WeakMap$2)!=weakMapTag)&&(getTag=function(e){var n=baseGetTag(e),t=n==objectTag$1?e.constructor:void 0,o=t?toSource(t):"";if(o)switch(o){case dataViewCtorString:return dataViewTag$1;case mapCtorString:return mapTag$1;case promiseCtorString:return promiseTag;case setCtorString:return setTag$1;case weakMapCtorString:return weakMapTag}return n});const getTag$1=getTag;var Uint8Array$1=root$1.Uint8Array;const Uint8Array$2=Uint8Array$1;function cloneArrayBuffer(e){var n=new e.constructor(e.byteLength);return new Uint8Array$2(n).set(new Uint8Array$2(e)),n}function cloneTypedArray(e,n){var t=n?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function initCloneObject(e){return typeof e.constructor=="function"&&!isPrototype(e)?baseCreate$1(getPrototype$1(e)):{}}var HASH_UNDEFINED="__lodash_hash_undefined__";function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED),this}function setCacheHas(e){return this.__data__.has(e)}function SetCache(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new MapCache;++n<t;)this.add(e[n])}SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;function arraySome(e,n){for(var t=-1,o=e==null?0:e.length;++t<o;)if(n(e[t],t,e))return!0;return!1}function cacheHas(e,n){return e.has(n)}var COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;function equalArrays(e,n,t,o,r,i){var a=t&COMPARE_PARTIAL_FLAG$5,s=e.length,l=n.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),u=i.get(n);if(d&&u)return d==n&&u==e;var f=-1,b=!0,C=t&COMPARE_UNORDERED_FLAG$3?new SetCache:void 0;for(i.set(e,n),i.set(n,e);++f<s;){var g=e[f],x=n[f];if(o)var v=a?o(x,g,f,n,e,i):o(g,x,f,e,n,i);if(v!==void 0){if(v)continue;b=!1;break}if(C){if(!arraySome(n,function(y,$){if(!cacheHas(C,$)&&(g===y||r(g,y,t,o,i)))return C.push($)})){b=!1;break}}else if(!(g===x||r(g,x,t,o,i))){b=!1;break}}return i.delete(e),i.delete(n),b}function mapToArray(e){var n=-1,t=Array(e.size);return e.forEach(function(o,r){t[++n]=[r,o]}),t}function setToArray(e){var n=-1,t=Array(e.size);return e.forEach(function(o){t[++n]=o}),t}var COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2,boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",symbolProto=Symbol$2?Symbol$2.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;function equalByTag(e,n,t,o,r,i,a){switch(t){case dataViewTag:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case arrayBufferTag:return!(e.byteLength!=n.byteLength||!i(new Uint8Array$2(e),new Uint8Array$2(n)));case boolTag:case dateTag:case numberTag:return eq(+e,+n);case errorTag:return e.name==n.name&&e.message==n.message;case regexpTag:case stringTag:return e==n+"";case mapTag:var s=mapToArray;case setTag:var l=o&COMPARE_PARTIAL_FLAG$4;if(s||(s=setToArray),e.size!=n.size&&!l)return!1;var d=a.get(e);if(d)return d==n;o|=COMPARE_UNORDERED_FLAG$2,a.set(e,n);var u=equalArrays(s(e),s(n),o,r,i,a);return a.delete(e),u;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(n)}return!1}var COMPARE_PARTIAL_FLAG$3=1,objectProto$3=Object.prototype,hasOwnProperty$3=objectProto$3.hasOwnProperty;function equalObjects(e,n,t,o,r,i){var a=t&COMPARE_PARTIAL_FLAG$3,s=getAllKeys(e),l=s.length,d=getAllKeys(n),u=d.length;if(l!=u&&!a)return!1;for(var f=l;f--;){var b=s[f];if(!(a?b in n:hasOwnProperty$3.call(n,b)))return!1}var C=i.get(e),g=i.get(n);if(C&&g)return C==n&&g==e;var x=!0;i.set(e,n),i.set(n,e);for(var v=a;++f<l;){b=s[f];var y=e[b],$=n[b];if(o)var L=a?o($,y,b,n,e,i):o(y,$,b,e,n,i);if(!(L===void 0?y===$||r(y,$,t,o,i):L)){x=!1;break}v||(v=b=="constructor")}if(x&&!v){var P=e.constructor,k=n.constructor;P!=k&&"constructor"in e&&"constructor"in n&&!(typeof P=="function"&&P instanceof P&&typeof k=="function"&&k instanceof k)&&(x=!1)}return i.delete(e),i.delete(n),x}var COMPARE_PARTIAL_FLAG$2=1,argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]",objectProto$2=Object.prototype,hasOwnProperty$2=objectProto$2.hasOwnProperty;function baseIsEqualDeep(e,n,t,o,r,i){var a=isArray$1(e),s=isArray$1(n),l=a?arrayTag:getTag$1(e),d=s?arrayTag:getTag$1(n);l=l==argsTag?objectTag:l,d=d==argsTag?objectTag:d;var u=l==objectTag,f=d==objectTag,b=l==d;if(b&&isBuffer$1(e)){if(!isBuffer$1(n))return!1;a=!0,u=!1}if(b&&!u)return i||(i=new Stack),a||isTypedArray$1(e)?equalArrays(e,n,t,o,r,i):equalByTag(e,n,l,t,o,r,i);if(!(t&COMPARE_PARTIAL_FLAG$2)){var C=u&&hasOwnProperty$2.call(e,"__wrapped__"),g=f&&hasOwnProperty$2.call(n,"__wrapped__");if(C||g){var x=C?e.value():e,v=g?n.value():n;return i||(i=new Stack),r(x,v,t,o,i)}}return b?(i||(i=new Stack),equalObjects(e,n,t,o,r,i)):!1}function baseIsEqual(e,n,t,o,r){return e===n?!0:e==null||n==null||!isObjectLike(e)&&!isObjectLike(n)?e!==e&&n!==n:baseIsEqualDeep(e,n,t,o,baseIsEqual,r)}var COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;function baseIsMatch(e,n,t,o){var r=t.length,i=r,a=!o;if(e==null)return!i;for(e=Object(e);r--;){var s=t[r];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<i;){s=t[r];var l=s[0],d=e[l],u=s[1];if(a&&s[2]){if(d===void 0&&!(l in e))return!1}else{var f=new Stack;if(o)var b=o(d,u,l,e,n,f);if(!(b===void 0?baseIsEqual(u,d,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,o,f):b))return!1}}return!0}function isStrictComparable(e){return e===e&&!isObject(e)}function getMatchData(e){for(var n=keys(e),t=n.length;t--;){var o=n[t],r=e[o];n[t]=[o,r,isStrictComparable(r)]}return n}function matchesStrictComparable(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function baseMatches(e){var n=getMatchData(e);return n.length==1&&n[0][2]?matchesStrictComparable(n[0][0],n[0][1]):function(t){return t===e||baseIsMatch(t,e,n)}}function baseHasIn(e,n){return e!=null&&n in Object(e)}function hasPath(e,n,t){n=castPath(n,e);for(var o=-1,r=n.length,i=!1;++o<r;){var a=toKey(n[o]);if(!(i=e!=null&&t(e,a)))break;e=e[a]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&isLength(r)&&isIndex(a,r)&&(isArray$1(e)||isArguments$1(e)))}function hasIn(e,n){return e!=null&&hasPath(e,n,baseHasIn)}var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty(e,n){return isKey(e)&&isStrictComparable(n)?matchesStrictComparable(toKey(e),n):function(t){var o=get(t,e);return o===void 0&&o===n?hasIn(t,e):baseIsEqual(n,o,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}function baseProperty(e){return function(n){return n==null?void 0:n[e]}}function basePropertyDeep(e){return function(n){return baseGet(n,e)}}function property(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e)}function baseIteratee(e){return typeof e=="function"?e:e==null?identity$1:typeof e=="object"?isArray$1(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}function arrayAggregator(e,n,t,o){for(var r=-1,i=e==null?0:e.length;++r<i;){var a=e[r];n(o,a,t(a),e)}return o}function createBaseFor(e){return function(n,t,o){for(var r=-1,i=Object(n),a=o(n),s=a.length;s--;){var l=a[e?s:++r];if(t(i[l],l,i)===!1)break}return n}}var baseFor=createBaseFor();const baseFor$1=baseFor;function baseForOwn(e,n){return e&&baseFor$1(e,n,keys)}function createBaseEach(e,n){return function(t,o){if(t==null)return t;if(!isArrayLike(t))return e(t,o);for(var r=t.length,i=n?r:-1,a=Object(t);(n?i--:++i<r)&&o(a[i],i,a)!==!1;);return t}}var baseEach=createBaseEach(baseForOwn);const baseEach$1=baseEach;function baseAggregator(e,n,t,o){return baseEach$1(e,function(r,i,a){n(o,r,t(r),a)}),o}function createAggregator(e,n){return function(t,o){var r=isArray$1(t)?arrayAggregator:baseAggregator,i=n?n():{};return r(t,e,baseIteratee(o),i)}}function assignMergeValue(e,n,t){(t!==void 0&&!eq(e[n],t)||t===void 0&&!(n in e))&&baseAssignValue(e,n,t)}function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}function safeGet(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function toPlainObject(e){return copyObject(e,keysIn(e))}function baseMergeDeep(e,n,t,o,r,i,a){var s=safeGet(e,t),l=safeGet(n,t),d=a.get(l);if(d){assignMergeValue(e,t,d);return}var u=i?i(s,l,t+"",e,n,a):void 0,f=u===void 0;if(f){var b=isArray$1(l),C=!b&&isBuffer$1(l),g=!b&&!C&&isTypedArray$1(l);u=l,b||C||g?isArray$1(s)?u=s:isArrayLikeObject(s)?u=copyArray(s):C?(f=!1,u=cloneBuffer(l,!0)):g?(f=!1,u=cloneTypedArray(l,!0)):u=[]:isPlainObject$1(l)||isArguments$1(l)?(u=s,isArguments$1(s)?u=toPlainObject(s):(!isObject(s)||isFunction(s))&&(u=initCloneObject(l))):f=!1}f&&(a.set(l,u),r(u,l,o,i,a),a.delete(l)),assignMergeValue(e,t,u)}function baseMerge(e,n,t,o,r){e!==n&&baseFor$1(n,function(i,a){if(r||(r=new Stack),isObject(i))baseMergeDeep(e,n,a,t,baseMerge,o,r);else{var s=o?o(safeGet(e,a),i,a+"",e,n,r):void 0;s===void 0&&(s=i),assignMergeValue(e,a,s)}},keysIn)}function baseMap(e,n){var t=-1,o=isArrayLike(e)?Array(e.length):[];return baseEach$1(e,function(r,i,a){o[++t]=n(r,i,a)}),o}function map(e,n){var t=isArray$1(e)?arrayMap:baseMap;return t(e,baseIteratee(n))}var objectProto$1=Object.prototype,hasOwnProperty$1=objectProto$1.hasOwnProperty,groupBy=createAggregator(function(e,n,t){hasOwnProperty$1.call(e,t)?e[t].push(n):baseAssignValue(e,t,[n])});const groupBy$1=groupBy;var objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;function baseHas(e,n){return e!=null&&hasOwnProperty.call(e,n)}function has(e,n){return e!=null&&hasPath(e,n,baseHas)}var kebabCase=createCompounder(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()});const kebabCase$1=kebabCase;var merge$1=createAssigner(function(e,n,t){baseMerge(e,n,t)});const merge$2=merge$1,commonVariables$m={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize,fontFamily,lineHeight}=commonVariables$m,globalStyle=c$1("body",`
 margin: 0;
 font-size: ${fontSize};
 font-family: ${fontFamily};
 line-height: ${lineHeight};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[c$1("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),configProviderInjectionKey="n-config-provider",cssrAnchorMetaName="naive-ui-style";function createTheme(e){return e}function useTheme(e,n,t,o,r,i){const a=useSsrAdapter(),s=inject(configProviderInjectionKey,null);if(t){const d=()=>{const u=i==null?void 0:i.value;t.mount({id:u===void 0?n:u+n,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:cssrAnchorMetaName,ssr:a}),s!=null&&s.preflightStyleDisabled||globalStyle.mount({id:"n-global",head:!0,anchorMetaName:cssrAnchorMetaName,ssr:a})};a?d():onBeforeMount(d)}return computed(()=>{var d;const{theme:{common:u,self:f,peers:b={}}={},themeOverrides:C={},builtinThemeOverrides:g={}}=r,{common:x,peers:v}=C,{common:y=void 0,[e]:{common:$=void 0,self:L=void 0,peers:P={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:k=void 0,[e]:E={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:w,peers:T={}}=E,M=merge$2({},u||$||y||o.common,k,w,x),_=merge$2((d=f||L||o.self)===null||d===void 0?void 0:d(M),g,E,C);return{common:M,self:_,peers:merge$2({},o.peers,P,b),peerOverrides:merge$2({},g.peers,T,v)}})}useTheme.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const defaultClsPrefix="n";function useConfig(e={},n={defaultBordered:!0}){const t=inject(configProviderInjectionKey,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:computed(()=>{var o,r;const{bordered:i}=e;return i!==void 0?i:(r=(o=t==null?void 0:t.mergedBorderedRef.value)!==null&&o!==void 0?o:n.defaultBordered)!==null&&r!==void 0?r:!0}),mergedClsPrefixRef:computed(()=>(t==null?void 0:t.mergedClsPrefixRef.value)||defaultClsPrefix),namespaceRef:computed(()=>t==null?void 0:t.mergedNamespaceRef.value)}}const enUS={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},enUS$1=enUS;function buildFormatLongFn(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,o=e.formats[t]||e.formats[e.defaultWidth];return o}}function buildLocalizeFn(e){return function(n,t){var o=t!=null&&t.context?String(t.context):"standalone",r;if(o==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=t!=null&&t.width?String(t.width):i;r=e.formattingValues[a]||e.formattingValues[i]}else{var s=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[l]||e.values[s]}var d=e.argumentCallback?e.argumentCallback(n):n;return r[d]}}function buildMatchFn(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=n.match(r);if(!i)return null;var a=i[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?findIndex(s,function(f){return f.test(a)}):findKey(s,function(f){return f.test(a)}),d;d=e.valueCallback?e.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;var u=n.slice(a.length);return{value:d,rest:u}}}function findKey(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function findIndex(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function buildMatchPatternFn(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.match(e.matchPattern);if(!o)return null;var r=o[0],i=n.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;var s=n.slice(r.length);return{value:a,rest:s}}}var formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},formatDistance=function(n,t,o){var r,i=formatDistanceLocale[n];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+r:r+" ago":r};const formatDistance$1=formatDistance;var dateFormats={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},timeFormats={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dateTimeFormats={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})};const formatLong$1=formatLong;var formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},formatRelative=function(n,t,o,r){return formatRelativeLocale[n]};const formatRelative$1=formatRelative;var eraValues={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},quarterValues={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},monthValues={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dayValues={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},formattingDayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ordinalNumber=function(n,t){var o=Number(n),r=o%100;if(r>20||r<10)switch(r%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},localize={ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide",formattingValues:formattingDayPeriodValues,defaultFormattingWidth:"wide"})};const localize$1=localize;var matchOrdinalNumberPattern=/^(\d+)(th|st|nd|rd)?/i,parseOrdinalNumberPattern=/\d+/i,matchEraPatterns={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},parseEraPatterns={any:[/^b/i,/^(a|c)/i]},matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]},matchMonthPatterns={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},parseMonthPatterns={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},matchDayPatterns={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},parseDayPatterns={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},matchDayPeriodPatterns={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},parseDayPeriodPatterns={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:function(n){return parseInt(n,10)}}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})};const match$1=match;var locale={code:"en-US",formatDistance:formatDistance$1,formatLong:formatLong$1,formatRelative:formatRelative$1,localize:localize$1,match:match$1,options:{weekStartsOn:0,firstWeekContainsDate:1}};const defaultLocale=locale,dateEnUs={name:"en-US",locale:defaultLocale},dateEnUS=dateEnUs;function useLocale(e){const{mergedLocaleRef:n,mergedDateLocaleRef:t}=inject(configProviderInjectionKey,null)||{},o=computed(()=>{var i,a;return(a=(i=n==null?void 0:n.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:enUS$1[e]});return{dateLocaleRef:computed(()=>{var i;return(i=t==null?void 0:t.value)!==null&&i!==void 0?i:dateEnUS}),localeRef:o}}function useStyle(e,n,t){if(!n)return;const o=useSsrAdapter(),r=inject(configProviderInjectionKey,null),i=()=>{const a=t==null?void 0:t.value;n.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:cssrAnchorMetaName,props:{bPrefix:a?`.${a}-`:void 0},ssr:o}),r!=null&&r.preflightStyleDisabled||globalStyle.mount({id:"n-global",head:!0,anchorMetaName:cssrAnchorMetaName,ssr:o})};o?i():onBeforeMount(i)}function useThemeClass(e,n,t,o){var r;t||throwError("useThemeClass","cssVarsRef is not passed");const i=(r=inject(configProviderInjectionKey,null))===null||r===void 0?void 0:r.mergedThemeHashRef,a=ref(""),s=useSsrAdapter();let l;const d=`__${e}`,u=()=>{let f=d;const b=n?n.value:void 0,C=i==null?void 0:i.value;C&&(f+="-"+C),b&&(f+="-"+b);const{themeOverrides:g,builtinThemeOverrides:x}=o;g&&(f+="-"+murmur2(JSON.stringify(g))),x&&(f+="-"+murmur2(JSON.stringify(x))),a.value=f,l=()=>{const v=t.value;let y="";for(const $ in v)y+=`${$}: ${v[$]};`;c$1(`.${f}`,y).mount({id:f,ssr:s}),l=void 0}};return watchEffect(()=>{u()}),{themeClass:a,onRender:()=>{l==null||l()}}}function useRtl(e,n,t){if(!n)return;const o=useSsrAdapter(),r=computed(()=>{const{value:a}=n;if(!a)return;const s=a[e];if(s)return s}),i=()=>{watchEffect(()=>{const{value:a}=t,s=`${a}${e}Rtl`;if(exists(s,o))return;const{value:l}=r;l&&l.style.mount({id:s,head:!0,anchorMetaName:cssrAnchorMetaName,props:{bPrefix:a?`.${a}-`:void 0},ssr:o})})};return o?i():onBeforeMount(i),r}function replaceable(e,n){return defineComponent({name:upperFirst$1(e),setup(){var t;const o=(t=inject(configProviderInjectionKey,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var r;const i=(r=o==null?void 0:o.value)===null||r===void 0?void 0:r[e];return i?i():n}}})}const ChevronRightIcon=defineComponent({name:"ChevronRight",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ErrorIcon$1=replaceable("close",h("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},h("g",{fill:"currentColor","fill-rule":"nonzero"},h("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),EyeIcon=defineComponent({name:"Eye",render(){return h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),h("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),EyeOffIcon=defineComponent({name:"EyeOff",render(){return h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),h("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),h("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),h("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),h("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),ErrorIcon=replaceable("error",h("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},h("g",{"fill-rule":"nonzero"},h("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),InfoIcon=replaceable("info",h("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},h("g",{"fill-rule":"nonzero"},h("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),SuccessIcon=replaceable("success",h("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},h("g",{"fill-rule":"nonzero"},h("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),WarningIcon=replaceable("warning",h("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},h("g",{"fill-rule":"nonzero"},h("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),ChevronDownIcon=defineComponent({name:"ChevronDown",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ClearIcon=replaceable("clear",h("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},h("g",{fill:"currentColor","fill-rule":"nonzero"},h("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),NIconSwitchTransition=defineComponent({name:"BaseIconSwitchTransition",setup(e,{slots:n}){const t=isMounted();return()=>h(Transition,{name:"icon-switch-transition",appear:t.value},n)}}),NFadeInExpandTransition=defineComponent({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function o(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function r(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function a(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const s=e.group?TransitionGroup:Transition;return h(s,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:i,onAfterEnter:a,onBeforeLeave:t,onLeave:o,onAfterLeave:r},n)}}}),style$m=cB("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[c$1("svg",`
 height: 1em;
 width: 1em;
 `)]),NBaseIcon=defineComponent({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){useStyle("-base-icon",style$m,toRef(e,"clsPrefix"))},render(){return h("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),style$l=cB("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[cM("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),c$1("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),cNotM("disabled",[c$1("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),c$1("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),c$1("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),c$1("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),c$1("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),cM("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),cM("round",[c$1("&::before",`
 border-radius: 50%;
 `)])]),NBaseClose=defineComponent({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return useStyle("-base-close",style$l,toRef(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:t,absolute:o,round:r,isButtonTag:i}=e;return h(i?"button":"div",{type:i?"button":void 0,tabindex:t||!e.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:i?void 0:"button",disabled:t,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,t&&`${n}-base-close--disabled`,r&&`${n}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},h(NBaseIcon,{clsPrefix:n},{default:()=>h(ErrorIcon$1,null)}))}}}),{cubicBezierEaseInOut:cubicBezierEaseInOut$3}=commonVariables$m;function iconSwitchTransition({originalTransform:e="",left:n=0,top:t=0,transition:o=`all .3s ${cubicBezierEaseInOut$3} !important`}={}){return[c$1("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:n,top:t,opacity:0}),c$1("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:n,top:t,opacity:1}),c$1("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:t,transition:o})]}const style$k=c$1([c$1("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),c$1("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),c$1("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),c$1("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),cB("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[cE("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[iconSwitchTransition()]),cE("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[cE("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),cE("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[cE("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[cE("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),cE("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[cE("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),cE("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[cE("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),cE("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[iconSwitchTransition({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),exposedLoadingProps={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},NBaseLoading=defineComponent({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},exposedLoadingProps),setup(e){useStyle("-base-loading",style$k,toRef(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:n,strokeWidth:t,stroke:o,scale:r}=this,i=n/r;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(NIconSwitchTransition,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("div",{class:`${e}-base-loading__container-layer`},h("div",{class:`${e}-base-loading__container-layer-left`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),h("div",{class:`${e}-base-loading__container-layer-patch`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),h("div",{class:`${e}-base-loading__container-layer-right`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});function toArray(e){return Array.isArray(e)?e:[e]}const TRAVERSE_COMMAND={STOP:"STOP"};function traverseWithCb(e,n){const t=n(e);e.children!==void 0&&t!==TRAVERSE_COMMAND.STOP&&e.children.forEach(o=>traverseWithCb(o,n))}function getNonLeafKeys(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?a=>{a.isLeaf||(o.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),o}function isLeaf(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function defaultGetChildren(e){return e.children}function defaultGetKey(e){return e.key}function isIgnored(){return!1}function isShallowLoaded(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function isDisabled(e){return e.disabled===!0}function isExpilicitlyNotLoaded(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function unwrapCheckedKeys(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function unwrapIndeterminateKeys(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function merge(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function minus(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function isGroup(e){return(e==null?void 0:e.type)==="group"}class SubtreeNotLoadedError extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function getExtendedCheckedKeySetAfterCheck(e,n,t,o){return getExtendedCheckedKeySet(n.concat(e),t,o,!1)}function getAvailableAscendantNodeSet(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function getExtendedCheckedKeySetAfterUncheck(e,n,t,o){const r=getExtendedCheckedKeySet(n,t,o,!1),i=getExtendedCheckedKeySet(e,t,o,!0),a=getAvailableAscendantNodeSet(e,t),s=[];return r.forEach(l=>{(i.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function getCheckedKeys(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:l,allowNotLoaded:d}=e;if(!a)return o!==void 0?{checkedKeys:merge(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:minus(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=n;let f;r!==void 0?f=getExtendedCheckedKeySetAfterUncheck(r,t,n,d):o!==void 0?f=getExtendedCheckedKeySetAfterCheck(o,t,n,d):f=getExtendedCheckedKeySet(t,n,d,!1);const b=l==="parent",C=l==="child"||s,g=f,x=new Set,v=Math.max.apply(null,Array.from(u.keys()));for(let y=v;y>=0;y-=1){const $=y===0,L=u.get(y);for(const P of L){if(P.isLeaf)continue;const{key:k,shallowLoaded:E}=P;if(C&&E&&P.children.forEach(_=>{!_.disabled&&!_.isLeaf&&_.shallowLoaded&&g.has(_.key)&&g.delete(_.key)}),P.disabled||!E)continue;let w=!0,T=!1,M=!0;for(const _ of P.children){const J=_.key;if(!_.disabled){if(M&&(M=!1),g.has(J))T=!0;else if(x.has(J)){T=!0,w=!1;break}else if(w=!1,T)break}}w&&!M?(b&&P.children.forEach(_=>{!_.disabled&&g.has(_.key)&&g.delete(_.key)}),g.add(k)):T&&x.add(k),$&&C&&g.has(k)&&g.delete(k)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(x)}}function getExtendedCheckedKeySet(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,a=new Set,s=new Set(e);return e.forEach(l=>{const d=r.get(l);d!==void 0&&traverseWithCb(d,u=>{if(u.disabled)return TRAVERSE_COMMAND.STOP;const{key:f}=u;if(!a.has(f)&&(a.add(f),s.add(f),isExpilicitlyNotLoaded(u.rawNode,i))){if(o)return TRAVERSE_COMMAND.STOP;if(!t)throw new SubtreeNotLoadedError}})}),s}function getPath(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(n||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function getFirstAvailableNode(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function rawGetNext(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function move(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?rawGetPrev:rawGetNext,i={reverse:n==="prev"};let a=!1,s=null;function l(d){if(d!==null){if(d===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!d.disabled||o)&&!d.ignored&&!d.isGroup){s=d;return}if(d.isGroup){const u=getChild(d,i);u!==null?s=u:l(r(d,t))}else{const u=r(d,!1);if(u!==null)l(u);else{const f=rawGetParent(d);f!=null&&f.isGroup?l(r(f,t)):t&&l(r(d,!0))}}}}return l(e),s}function rawGetPrev(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function rawGetParent(e){return e.parent}function getChild(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,a=t?-1:r,s=t?-1:1;for(let l=i;l!==a;l+=s){const d=o[l];if(!d.disabled&&!d.ignored)if(d.isGroup){const u=getChild(d,n);if(u!==null)return u}else return d}}return null}const moveMethods={getChild(){return this.ignored?null:getChild(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return move(this,"next",e)},getPrev(e={}){return move(this,"prev",e)}};function flatten(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),o}function contains(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function createTreeNodes(e,n,t,o,r,i=null,a=0){const s=[];return e.forEach((l,d)=>{var u;const f=Object.create(o);if(f.rawNode=l,f.siblings=s,f.level=a,f.index=d,f.isFirstChild=d===0,f.isLastChild=d+1===e.length,f.parent=i,!f.ignored){const b=r(l);Array.isArray(b)&&(f.children=createTreeNodes(b,n,t,o,r,f,a+1))}s.push(f),n.set(f.key,f),t.has(a)||t.set(a,[]),(u=t.get(a))===null||u===void 0||u.push(f)}),s}function createTreeMate(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=isDisabled,getIgnored:a=isIgnored,getIsGroup:s=isGroup,getKey:l=defaultGetKey}=n,d=(t=n.getChildren)!==null&&t!==void 0?t:defaultGetChildren,u=n.ignoreEmptyChildren?P=>{const k=d(P);return Array.isArray(k)?k.length?k:null:k}:d,f=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return isLeaf(this.rawNode,u)},get shallowLoaded(){return isShallowLoaded(this.rawNode,u)},get ignored(){return a(this.rawNode)},contains(P){return contains(this,P)}},moveMethods),b=createTreeNodes(e,o,r,f,u);function C(P){if(P==null)return null;const k=o.get(P);return k&&!k.isGroup&&!k.ignored?k:null}function g(P){if(P==null)return null;const k=o.get(P);return k&&!k.ignored?k:null}function x(P,k){const E=g(P);return E?E.getPrev(k):null}function v(P,k){const E=g(P);return E?E.getNext(k):null}function y(P){const k=g(P);return k?k.getParent():null}function $(P){const k=g(P);return k?k.getChild():null}const L={treeNodes:b,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(P){return flatten(b,P)},getNode:C,getPrev:x,getNext:v,getParent:y,getChild:$,getFirstAvailableNode(){return getFirstAvailableNode(b)},getPath(P,k={}){return getPath(P,k,L)},getCheckedKeys(P,k={}){const{cascade:E=!0,leafOnly:w=!1,checkStrategy:T="all",allowNotLoaded:M=!1}=k;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(P),indeterminateKeys:unwrapIndeterminateKeys(P),cascade:E,leafOnly:w,checkStrategy:T,allowNotLoaded:M},L)},check(P,k,E={}){const{cascade:w=!0,leafOnly:T=!1,checkStrategy:M="all",allowNotLoaded:_=!1}=E;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(k),indeterminateKeys:unwrapIndeterminateKeys(k),keysToCheck:P==null?[]:toArray(P),cascade:w,leafOnly:T,checkStrategy:M,allowNotLoaded:_},L)},uncheck(P,k,E={}){const{cascade:w=!0,leafOnly:T=!1,checkStrategy:M="all",allowNotLoaded:_=!1}=E;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(k),indeterminateKeys:unwrapIndeterminateKeys(k),keysToUncheck:P==null?[]:toArray(P),cascade:w,leafOnly:T,checkStrategy:M,allowNotLoaded:_},L)},getNonLeafKeys(P={}){return getNonLeafKeys(b,P)}};return L}const base$1={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},baseBackgroundRgb$1=rgba(base$1.neutralBase),baseInvertBackgroundRgb$1=rgba(base$1.neutralInvertBase),overlayPrefix$1="rgba("+baseInvertBackgroundRgb$1.slice(0,3).join(", ")+", ";function overlay$1(e){return overlayPrefix$1+String(e)+")"}function neutral$1(e){const n=Array.from(baseInvertBackgroundRgb$1);return n[3]=Number(e),composite(baseBackgroundRgb$1,n)}const derived$1=Object.assign(Object.assign({name:"common"},commonVariables$m),{baseColor:base$1.neutralBase,primaryColor:base$1.primaryDefault,primaryColorHover:base$1.primaryHover,primaryColorPressed:base$1.primaryActive,primaryColorSuppl:base$1.primarySuppl,infoColor:base$1.infoDefault,infoColorHover:base$1.infoHover,infoColorPressed:base$1.infoActive,infoColorSuppl:base$1.infoSuppl,successColor:base$1.successDefault,successColorHover:base$1.successHover,successColorPressed:base$1.successActive,successColorSuppl:base$1.successSuppl,warningColor:base$1.warningDefault,warningColorHover:base$1.warningHover,warningColorPressed:base$1.warningActive,warningColorSuppl:base$1.warningSuppl,errorColor:base$1.errorDefault,errorColorHover:base$1.errorHover,errorColorPressed:base$1.errorActive,errorColorSuppl:base$1.errorSuppl,textColorBase:base$1.neutralTextBase,textColor1:overlay$1(base$1.alpha1),textColor2:overlay$1(base$1.alpha2),textColor3:overlay$1(base$1.alpha3),textColorDisabled:overlay$1(base$1.alpha4),placeholderColor:overlay$1(base$1.alpha4),placeholderColorDisabled:overlay$1(base$1.alpha5),iconColor:overlay$1(base$1.alpha4),iconColorDisabled:overlay$1(base$1.alpha5),iconColorHover:overlay$1(Number(base$1.alpha4)*1.25),iconColorPressed:overlay$1(Number(base$1.alpha4)*.8),opacity1:base$1.alpha1,opacity2:base$1.alpha2,opacity3:base$1.alpha3,opacity4:base$1.alpha4,opacity5:base$1.alpha5,dividerColor:overlay$1(base$1.alphaDivider),borderColor:overlay$1(base$1.alphaBorder),closeIconColorHover:overlay$1(Number(base$1.alphaClose)),closeIconColor:overlay$1(Number(base$1.alphaClose)),closeIconColorPressed:overlay$1(Number(base$1.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:overlay$1(base$1.alpha4),clearColorHover:scaleColor(overlay$1(base$1.alpha4),{alpha:1.25}),clearColorPressed:scaleColor(overlay$1(base$1.alpha4),{alpha:.8}),scrollbarColor:overlay$1(base$1.alphaScrollbar),scrollbarColorHover:overlay$1(base$1.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:overlay$1(base$1.alphaProgressRail),railColor:overlay$1(base$1.alphaRail),popoverColor:base$1.neutralPopover,tableColor:base$1.neutralCard,cardColor:base$1.neutralCard,modalColor:base$1.neutralModal,bodyColor:base$1.neutralBody,tagColor:neutral$1(base$1.alphaTag),avatarColor:overlay$1(base$1.alphaAvatar),invertedColor:base$1.neutralBase,inputColor:overlay$1(base$1.alphaInput),codeColor:overlay$1(base$1.alphaCode),tabColor:overlay$1(base$1.alphaTab),actionColor:overlay$1(base$1.alphaAction),tableHeaderColor:overlay$1(base$1.alphaAction),hoverColor:overlay$1(base$1.alphaPending),tableColorHover:overlay$1(base$1.alphaTablePending),tableColorStriped:overlay$1(base$1.alphaTableStriped),pressedColor:overlay$1(base$1.alphaPressed),opacityDisabled:base$1.alphaDisabled,inputColorDisabled:overlay$1(base$1.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),commonDark=derived$1,base={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},baseBackgroundRgb=rgba(base.neutralBase),baseInvertBackgroundRgb=rgba(base.neutralInvertBase),overlayPrefix="rgba("+baseInvertBackgroundRgb.slice(0,3).join(", ")+", ";function overlay(e){return overlayPrefix+String(e)+")"}function neutral(e){const n=Array.from(baseInvertBackgroundRgb);return n[3]=Number(e),composite(baseBackgroundRgb,n)}const derived=Object.assign(Object.assign({name:"common"},commonVariables$m),{baseColor:base.neutralBase,primaryColor:base.primaryDefault,primaryColorHover:base.primaryHover,primaryColorPressed:base.primaryActive,primaryColorSuppl:base.primarySuppl,infoColor:base.infoDefault,infoColorHover:base.infoHover,infoColorPressed:base.infoActive,infoColorSuppl:base.infoSuppl,successColor:base.successDefault,successColorHover:base.successHover,successColorPressed:base.successActive,successColorSuppl:base.successSuppl,warningColor:base.warningDefault,warningColorHover:base.warningHover,warningColorPressed:base.warningActive,warningColorSuppl:base.warningSuppl,errorColor:base.errorDefault,errorColorHover:base.errorHover,errorColorPressed:base.errorActive,errorColorSuppl:base.errorSuppl,textColorBase:base.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:neutral(base.alpha4),placeholderColor:neutral(base.alpha4),placeholderColorDisabled:neutral(base.alpha5),iconColor:neutral(base.alpha4),iconColorHover:scaleColor(neutral(base.alpha4),{lightness:.75}),iconColorPressed:scaleColor(neutral(base.alpha4),{lightness:.9}),iconColorDisabled:neutral(base.alpha5),opacity1:base.alpha1,opacity2:base.alpha2,opacity3:base.alpha3,opacity4:base.alpha4,opacity5:base.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:neutral(Number(base.alphaClose)),closeIconColorHover:neutral(Number(base.alphaClose)),closeIconColorPressed:neutral(Number(base.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:neutral(base.alpha4),clearColorHover:scaleColor(neutral(base.alpha4),{lightness:.75}),clearColorPressed:scaleColor(neutral(base.alpha4),{lightness:.9}),scrollbarColor:overlay(base.alphaScrollbar),scrollbarColorHover:overlay(base.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:neutral(base.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:base.neutralPopover,tableColor:base.neutralCard,cardColor:base.neutralCard,modalColor:base.neutralModal,bodyColor:base.neutralBody,tagColor:"#eee",avatarColor:neutral(base.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:neutral(base.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:base.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),commonLight=derived,commonVars$c={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},self$1d=e=>{const{textColorDisabled:n,iconColor:t,textColor2:o,fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s}=e;return Object.assign(Object.assign({},commonVars$c),{fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s,textColor:n,iconColor:t,extraTextColor:o})},emptyLight={name:"Empty",common:commonLight,self:self$1d},emptyLight$1=emptyLight,emptyDark={name:"Empty",common:commonDark,self:self$1d},emptyDark$1=emptyDark,self$1c=e=>{const{scrollbarColor:n,scrollbarColorHover:t}=e;return{color:n,colorHover:t}},scrollbarLight={name:"Scrollbar",common:commonLight,self:self$1c},scrollbarLight$1=scrollbarLight,scrollbarDark={name:"Scrollbar",common:commonDark,self:self$1c},scrollbarDark$1=scrollbarDark,{cubicBezierEaseInOut:cubicBezierEaseInOut$2}=commonVariables$m;function fadeInTransition({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:o=cubicBezierEaseInOut$2,leaveCubicBezier:r=cubicBezierEaseInOut$2}={}){return[c$1(`&.${e}-transition-enter-active`,{transition:`all ${n} ${o}!important`}),c$1(`&.${e}-transition-leave-active`,{transition:`all ${t} ${r}!important`}),c$1(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),c$1(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const style$j=cB("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[c$1(">",[cB("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),c$1(">",[cB("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),c$1(">, +",[cB("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[cM("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[c$1(">",[cE("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),cM("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[c$1(">",[cE("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),cM("disabled",[c$1(">",[cE("scrollbar",{pointerEvents:"none"})])]),c$1(">",[cE("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[fadeInTransition(),c$1("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),scrollbarProps=Object.assign(Object.assign({},useTheme.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Scrollbar=defineComponent({name:"Scrollbar",props:scrollbarProps,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:o}=useConfig(e),r=useRtl("Scrollbar",o,n),i=ref(null),a=ref(null),s=ref(null),l=ref(null),d=ref(null),u=ref(null),f=ref(null),b=ref(null),C=ref(null),g=ref(null),x=ref(null),v=ref(0),y=ref(0),$=ref(!1),L=ref(!1);let P=!1,k=!1,E,w,T=0,M=0,_=0,J=0;const O=useIsIos(),Y=computed(()=>{const{value:q}=b,{value:ae}=u,{value:fe}=g;return q===null||ae===null||fe===null?0:Math.min(q,fe*q/ae+e.size*1.5)}),H=computed(()=>`${Y.value}px`),z=computed(()=>{const{value:q}=C,{value:ae}=f,{value:fe}=x;return q===null||ae===null||fe===null?0:fe*q/ae+e.size*1.5}),te=computed(()=>`${z.value}px`),j=computed(()=>{const{value:q}=b,{value:ae}=v,{value:fe}=u,{value:ve}=g;if(q===null||fe===null||ve===null)return 0;{const $e=fe-q;return $e?ae/$e*(ve-Y.value):0}}),ee=computed(()=>`${j.value}px`),R=computed(()=>{const{value:q}=C,{value:ae}=y,{value:fe}=f,{value:ve}=x;if(q===null||fe===null||ve===null)return 0;{const $e=fe-q;return $e?ae/$e*(ve-z.value):0}}),K=computed(()=>`${R.value}px`),he=computed(()=>{const{value:q}=b,{value:ae}=u;return q!==null&&ae!==null&&ae>q}),me=computed(()=>{const{value:q}=C,{value:ae}=f;return q!==null&&ae!==null&&ae>q}),He=computed(()=>{const{trigger:q}=e;return q==="none"||$.value}),Ce=computed(()=>{const{trigger:q}=e;return q==="none"||L.value}),ye=computed(()=>{const{container:q}=e;return q?q():a.value}),de=computed(()=>{const{content:q}=e;return q?q():s.value}),ge=useReactivated(()=>{e.container||Ke({top:v.value,left:y.value})}),Ve=()=>{ge.isDeactivated||X()},pe=q=>{if(ge.isDeactivated)return;const{onResize:ae}=e;ae&&ae(q),X()},Ke=(q,ae)=>{if(!e.scrollable)return;if(typeof q=="number"){A(ae??0,q,0,!1,"auto");return}const{left:fe,top:ve,index:$e,elSize:_e,position:ze,behavior:Ae,el:je,debounce:Me=!0}=q;(fe!==void 0||ve!==void 0)&&A(fe??0,ve??0,0,!1,Ae),je!==void 0?A(0,je.offsetTop,je.offsetHeight,Me,Ae):$e!==void 0&&_e!==void 0?A(0,$e*_e,_e,Me,Ae):ze==="bottom"?A(0,Number.MAX_SAFE_INTEGER,0,!1,Ae):ze==="top"&&A(0,0,0,!1,Ae)},Pe=(q,ae)=>{if(!e.scrollable)return;const{value:fe}=ye;fe&&(typeof q=="object"?fe.scrollBy(q):fe.scrollBy(q,ae||0))};function A(q,ae,fe,ve,$e){const{value:_e}=ye;if(_e){if(ve){const{scrollTop:ze,offsetHeight:Ae}=_e;if(ae>ze){ae+fe<=ze+Ae||_e.scrollTo({left:q,top:ae+fe-Ae,behavior:$e});return}}_e.scrollTo({left:q,top:ae,behavior:$e})}}function D(){oe(),Q(),X()}function F(){V()}function V(){U(),ne()}function U(){w!==void 0&&window.clearTimeout(w),w=window.setTimeout(()=>{L.value=!1},e.duration)}function ne(){E!==void 0&&window.clearTimeout(E),E=window.setTimeout(()=>{$.value=!1},e.duration)}function oe(){E!==void 0&&window.clearTimeout(E),$.value=!0}function Q(){w!==void 0&&window.clearTimeout(w),L.value=!0}function Z(q){const{onScroll:ae}=e;ae&&ae(q),W()}function W(){const{value:q}=ye;q&&(v.value=q.scrollTop,y.value=q.scrollLeft*(r!=null&&r.value?-1:1))}function ce(){const{value:q}=de;q&&(u.value=q.offsetHeight,f.value=q.offsetWidth);const{value:ae}=ye;ae&&(b.value=ae.offsetHeight,C.value=ae.offsetWidth);const{value:fe}=d,{value:ve}=l;fe&&(x.value=fe.offsetWidth),ve&&(g.value=ve.offsetHeight)}function se(){const{value:q}=ye;q&&(v.value=q.scrollTop,y.value=q.scrollLeft*(r!=null&&r.value?-1:1),b.value=q.offsetHeight,C.value=q.offsetWidth,u.value=q.scrollHeight,f.value=q.scrollWidth);const{value:ae}=d,{value:fe}=l;ae&&(x.value=ae.offsetWidth),fe&&(g.value=fe.offsetHeight)}function X(){e.scrollable&&(e.useUnifiedContainer?se():(ce(),W()))}function ie(q){var ae;return!(!((ae=i.value)===null||ae===void 0)&&ae.contains(getPreciseEventTarget(q)))}function le(q){q.preventDefault(),q.stopPropagation(),k=!0,on("mousemove",window,Se,!0),on("mouseup",window,be,!0),M=y.value,_=r!=null&&r.value?window.innerWidth-q.clientX:q.clientX}function Se(q){if(!k)return;E!==void 0&&window.clearTimeout(E),w!==void 0&&window.clearTimeout(w);const{value:ae}=C,{value:fe}=f,{value:ve}=z;if(ae===null||fe===null)return;const _e=(r!=null&&r.value?window.innerWidth-q.clientX-_:q.clientX-_)*(fe-ae)/(ae-ve),ze=fe-ae;let Ae=M+_e;Ae=Math.min(ze,Ae),Ae=Math.max(Ae,0);const{value:je}=ye;if(je){je.scrollLeft=Ae*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:Me}=e;Me&&Me(Ae)}}function be(q){q.preventDefault(),q.stopPropagation(),off("mousemove",window,Se,!0),off("mouseup",window,be,!0),k=!1,X(),ie(q)&&V()}function Te(q){q.preventDefault(),q.stopPropagation(),P=!0,on("mousemove",window,De,!0),on("mouseup",window,Ge,!0),T=v.value,J=q.clientY}function De(q){if(!P)return;E!==void 0&&window.clearTimeout(E),w!==void 0&&window.clearTimeout(w);const{value:ae}=b,{value:fe}=u,{value:ve}=Y;if(ae===null||fe===null)return;const _e=(q.clientY-J)*(fe-ae)/(ae-ve),ze=fe-ae;let Ae=T+_e;Ae=Math.min(ze,Ae),Ae=Math.max(Ae,0);const{value:je}=ye;je&&(je.scrollTop=Ae)}function Ge(q){q.preventDefault(),q.stopPropagation(),off("mousemove",window,De,!0),off("mouseup",window,Ge,!0),P=!1,X(),ie(q)&&V()}watchEffect(()=>{const{value:q}=me,{value:ae}=he,{value:fe}=n,{value:ve}=d,{value:$e}=l;ve&&(q?ve.classList.remove(`${fe}-scrollbar-rail--disabled`):ve.classList.add(`${fe}-scrollbar-rail--disabled`)),$e&&(ae?$e.classList.remove(`${fe}-scrollbar-rail--disabled`):$e.classList.add(`${fe}-scrollbar-rail--disabled`))}),onMounted(()=>{e.container||X()}),onBeforeUnmount(()=>{E!==void 0&&window.clearTimeout(E),w!==void 0&&window.clearTimeout(w),off("mousemove",window,De,!0),off("mouseup",window,Ge,!0)});const Qe=useTheme("Scrollbar","-scrollbar",style$j,scrollbarLight$1,e,n),Je=computed(()=>{const{common:{cubicBezierEaseInOut:q,scrollbarBorderRadius:ae,scrollbarHeight:fe,scrollbarWidth:ve},self:{color:$e,colorHover:_e}}=Qe.value;return{"--n-scrollbar-bezier":q,"--n-scrollbar-color":$e,"--n-scrollbar-color-hover":_e,"--n-scrollbar-border-radius":ae,"--n-scrollbar-width":ve,"--n-scrollbar-height":fe}}),qe=t?useThemeClass("scrollbar",void 0,Je,e):void 0;return Object.assign(Object.assign({},{scrollTo:Ke,scrollBy:Pe,sync:X,syncUnifiedContainer:se,handleMouseEnterWrapper:D,handleMouseLeaveWrapper:F}),{mergedClsPrefix:n,rtlEnabled:r,containerScrollTop:v,wrapperRef:i,containerRef:a,contentRef:s,yRailRef:l,xRailRef:d,needYBar:he,needXBar:me,yBarSizePx:H,xBarSizePx:te,yBarTopPx:ee,xBarLeftPx:K,isShowXBar:He,isShowYBar:Ce,isIos:O,handleScroll:Z,handleContentResize:Ve,handleContainerResize:pe,handleYScrollMouseDown:Te,handleXScrollMouseDown:le,cssVars:t?void 0:Je,themeClass:qe==null?void 0:qe.themeClass,onRender:qe==null?void 0:qe.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:o,rtlEnabled:r,internalHoistYRail:i}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",s=()=>h("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},h(a?Wrapper:Transition,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?h("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),l=()=>{var u,f;return(u=this.onRender)===null||u===void 0||u.call(this),h("div",mergeProps(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,r&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:o?void 0:this.handleMouseEnterWrapper,onMouseleave:o?void 0:this.handleMouseLeaveWrapper}),[this.container?(f=n.default)===null||f===void 0?void 0:f.call(n):h("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},h(VResizeObserver,{onResize:this.handleContentResize},{default:()=>h("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:s(),this.xScrollable&&h("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},h(a?Wrapper:Transition,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?h("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},d=this.container?l():h(VResizeObserver,{onResize:this.handleContainerResize},{default:l});return i?h(Fragment,null,d,s()):d}}),NScrollbar=Scrollbar,XScrollbar=Scrollbar,commonVariables$l={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},self$1b=e=>{const{borderRadius:n,popoverColor:t,textColor3:o,dividerColor:r,textColor2:i,primaryColorPressed:a,textColorDisabled:s,primaryColor:l,opacityDisabled:d,hoverColor:u,fontSizeSmall:f,fontSizeMedium:b,fontSizeLarge:C,fontSizeHuge:g,heightSmall:x,heightMedium:v,heightLarge:y,heightHuge:$}=e;return Object.assign(Object.assign({},commonVariables$l),{optionFontSizeSmall:f,optionFontSizeMedium:b,optionFontSizeLarge:C,optionFontSizeHuge:g,optionHeightSmall:x,optionHeightMedium:v,optionHeightLarge:y,optionHeightHuge:$,borderRadius:n,color:t,groupHeaderTextColor:o,actionDividerColor:r,optionTextColor:i,optionTextColorPressed:a,optionTextColorDisabled:s,optionTextColorActive:l,optionOpacityDisabled:d,optionCheckColor:l,optionColorPending:u,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:u,actionTextColor:i,loadingColor:l})},internalSelectMenuLight={name:"InternalSelectMenu",common:commonLight,peers:{Scrollbar:scrollbarLight$1,Empty:emptyLight$1},self:self$1b},internalSelectMenuLight$1=internalSelectMenuLight,internalSelectMenuDark={name:"InternalSelectMenu",common:commonDark,peers:{Scrollbar:scrollbarDark$1,Empty:emptyDark$1},self:self$1b},internalSelectMenuDark$1=internalSelectMenuDark,{cubicBezierEaseIn:cubicBezierEaseIn$1,cubicBezierEaseOut:cubicBezierEaseOut$1}=commonVariables$m;function fadeInScaleUpTransition({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:o="",originalTransition:r=""}={}){return[c$1("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${cubicBezierEaseIn$1}, transform ${n} ${cubicBezierEaseIn$1} ${r&&","+r}`}),c$1("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${cubicBezierEaseOut$1}, transform ${n} ${cubicBezierEaseOut$1} ${r&&","+r}`}),c$1("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${t})`}),c$1("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const style$i=cB("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),NBaseWave=defineComponent({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){useStyle("-base-wave",style$i,toRef(e,"clsPrefix"));const n=ref(null),t=ref(!1);let o=null;return onBeforeUnmount(()=>{o!==null&&window.clearTimeout(o)}),{active:t,selfRef:n,play(){o!==null&&(window.clearTimeout(o),t.value=!1,o=null),nextTick(()=>{var r;(r=n.value)===null||r===void 0||r.offsetHeight,t.value=!0,o=window.setTimeout(()=>{t.value=!1,o=null},1e3)})}}},render(){const{clsPrefix:e}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),commonVariables$k={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},self$1a=e=>{const{boxShadow2:n,popoverColor:t,textColor2:o,borderRadius:r,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},commonVariables$k),{fontSize:i,borderRadius:r,color:t,dividerColor:a,textColor:o,boxShadow:n})},popoverLight={name:"Popover",common:commonLight,self:self$1a},popoverLight$1=popoverLight,popoverDark={name:"Popover",common:commonDark,self:self$1a},popoverDark$1=popoverDark,oppositePlacement={top:"bottom",bottom:"top",left:"right",right:"left"},arrowSize="var(--n-arrow-height) * 1.414",style$h=c$1([cB("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[c$1(">",[cB("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),cNotM("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[cNotM("scrollable",[cNotM("show-header-or-footer","padding: var(--n-padding);")])]),cE("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),cE("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),cM("scrollable, show-header-or-footer",[cE("content",`
 padding: var(--n-padding);
 `)])]),cB("popover-shared",`
 transform-origin: inherit;
 `,[cB("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[cB("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${arrowSize});
 height: calc(${arrowSize});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),c$1("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),c$1("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),c$1("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),c$1("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),placementStyle("top-start",`
 top: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("top-start")} - var(--v-offset-left));
 `),placementStyle("top",`
 top: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `),placementStyle("top-end",`
 top: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("top-end")} + var(--v-offset-left));
 `),placementStyle("bottom-start",`
 bottom: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("bottom-start")} - var(--v-offset-left));
 `),placementStyle("bottom",`
 bottom: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `),placementStyle("bottom-end",`
 bottom: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("bottom-end")} + var(--v-offset-left));
 `),placementStyle("left-start",`
 left: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("left-start")} - var(--v-offset-top));
 `),placementStyle("left",`
 left: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `),placementStyle("left-end",`
 left: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("left-end")} + var(--v-offset-top));
 `),placementStyle("right-start",`
 right: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("right-start")} - var(--v-offset-top));
 `),placementStyle("right",`
 right: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `),placementStyle("right-end",`
 right: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("right-end")} + var(--v-offset-top));
 `),...map({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),o=t?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",s=`calc((${`var(--v-target-${o}, 0px)`} - ${arrowSize}) / 2)`,l=getArrowOffset(r);return c$1(`[v-placement="${r}"] >`,[cB("popover-shared",[cM("center-arrow",[cB("popover-arrow",`${n}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function getArrowOffset(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function placementStyle(e,n){const t=e.split("-")[0],o=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return c$1(`[v-placement="${e}"] >`,[cB("popover-shared",`
 margin-${oppositePlacement[t]}: var(--n-space);
 `,[cM("show-arrow",`
 margin-${oppositePlacement[t]}: var(--n-space-arrow);
 `),cM("overlap",`
 margin: 0;
 `),cCB("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${oppositePlacement[t]}: auto;
 ${o}
 `,[cB("popover-arrow",n)])])])}const popoverBodyProps=Object.assign(Object.assign({},useTheme.props),{to:useAdjustedTo.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),renderArrow=({arrowStyle:e,clsPrefix:n})=>h("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},h("div",{class:`${n}-popover-arrow`,style:e})),NPopoverBody=defineComponent({name:"PopoverBody",inheritAttrs:!1,props:popoverBodyProps,setup(e,{slots:n,attrs:t}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i}=useConfig(e),a=useTheme("Popover","-popover",style$h,popoverLight$1,e,r),s=ref(null),l=inject("NPopover"),d=ref(null),u=ref(e.show),f=ref(!1);watchEffect(()=>{const{show:w}=e;w&&!isJsdom()&&!e.internalDeactivateImmediately&&(f.value=!0)});const b=computed(()=>{const{trigger:w,onClickoutside:T}=e,M=[],{positionManuallyRef:{value:_}}=l;return _||(w==="click"&&!T&&M.push([clickoutside$1,P,void 0,{capture:!0}]),w==="hover"&&M.push([mousemoveoutside$1,L])),T&&M.push([clickoutside$1,P,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&f.value)&&M.push([vShow,e.show]),M}),C=computed(()=>{const w=e.width==="trigger"?void 0:formatLength(e.width),T=[];w&&T.push({width:w});const{maxWidth:M,minWidth:_}=e;return M&&T.push({maxWidth:formatLength(M)}),_&&T.push({maxWidth:formatLength(_)}),i||T.push(g.value),T}),g=computed(()=>{const{common:{cubicBezierEaseInOut:w,cubicBezierEaseIn:T,cubicBezierEaseOut:M},self:{space:_,spaceArrow:J,padding:O,fontSize:Y,textColor:H,dividerColor:z,color:te,boxShadow:j,borderRadius:ee,arrowHeight:R,arrowOffset:K,arrowOffsetVertical:he}}=a.value;return{"--n-box-shadow":j,"--n-bezier":w,"--n-bezier-ease-in":T,"--n-bezier-ease-out":M,"--n-font-size":Y,"--n-text-color":H,"--n-color":te,"--n-divider-color":z,"--n-border-radius":ee,"--n-arrow-height":R,"--n-arrow-offset":K,"--n-arrow-offset-vertical":he,"--n-padding":O,"--n-space":_,"--n-space-arrow":J}}),x=i?useThemeClass("popover",void 0,g,e):void 0;l.setBodyInstance({syncPosition:v}),onBeforeUnmount(()=>{l.setBodyInstance(null)}),watch(toRef(e,"show"),w=>{e.animated||(w?u.value=!0:u.value=!1)});function v(){var w;(w=s.value)===null||w===void 0||w.syncPosition()}function y(w){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(w)}function $(w){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(w)}function L(w){e.trigger==="hover"&&!k().contains(getPreciseEventTarget(w))&&l.handleMouseMoveOutside(w)}function P(w){(e.trigger==="click"&&!k().contains(getPreciseEventTarget(w))||e.onClickoutside)&&l.handleClickOutside(w)}function k(){return l.getTriggerElement()}provide(popoverBodyInjectionKey,d),provide(drawerBodyInjectionKey,null),provide(modalBodyInjectionKey,null);function E(){if(x==null||x.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&f.value))return null;let T;const M=l.internalRenderBodyRef.value,{value:_}=r;if(M)T=M([`${_}-popover-shared`,x==null?void 0:x.themeClass.value,e.overlap&&`${_}-popover-shared--overlap`,e.showArrow&&`${_}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${_}-popover-shared--center-arrow`],d,C.value,y,$);else{const{value:J}=l.extraClassRef,{internalTrapFocus:O}=e,Y=!isSlotEmpty(n.header)||!isSlotEmpty(n.footer),H=()=>{var z;const te=Y?h(Fragment,null,resolveWrappedSlot(n.header,R=>R?h("div",{class:`${_}-popover__header`,style:e.headerStyle},R):null),resolveWrappedSlot(n.default,R=>R?h("div",{class:`${_}-popover__content`,style:e.contentStyle},n):null),resolveWrappedSlot(n.footer,R=>R?h("div",{class:`${_}-popover__footer`,style:e.footerStyle},R):null)):e.scrollable?(z=n.default)===null||z===void 0?void 0:z.call(n):h("div",{class:`${_}-popover__content`,style:e.contentStyle},n),j=e.scrollable?h(XScrollbar,{contentClass:Y?void 0:`${_}-popover__content`,contentStyle:Y?void 0:e.contentStyle},{default:()=>te}):te,ee=e.showArrow?renderArrow({arrowStyle:e.arrowStyle,clsPrefix:_}):null;return[j,ee]};T=h("div",mergeProps({class:[`${_}-popover`,`${_}-popover-shared`,x==null?void 0:x.themeClass.value,J.map(z=>`${_}-${z}`),{[`${_}-popover--scrollable`]:e.scrollable,[`${_}-popover--show-header-or-footer`]:Y,[`${_}-popover--raw`]:e.raw,[`${_}-popover-shared--overlap`]:e.overlap,[`${_}-popover-shared--show-arrow`]:e.showArrow,[`${_}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:d,style:C.value,onKeydown:l.handleKeydown,onMouseenter:y,onMouseleave:$},t),O?h(FocusTrap,{active:e.show,autoFocus:!0},{default:H}):H())}return withDirectives(T,b.value)}return{displayed:f,namespace:o,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:useAdjustedTo(e),followerEnabled:u,renderContentNode:E}},render(){return h(VFollower,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===useAdjustedTo.tdkey},{default:()=>this.animated?h(Transition,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),bodyPropKeys=Object.keys(popoverBodyProps),triggerEventMap={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function appendEvents(e,n,t){triggerEventMap[n].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],i=t[o];r?e.props[o]=(...a)=>{r(...a),i(...a)}:e.props[o]=i})}const textVNodeType=createTextVNode("").type,popoverBaseProps={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:useAdjustedTo.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},popoverProps=Object.assign(Object.assign(Object.assign({},useTheme.props),popoverBaseProps),{internalOnAfterLeave:Function,internalRenderBody:Function}),NPopover=defineComponent({name:"Popover",inheritAttrs:!1,props:popoverProps,__popover__:!0,setup(e){const n=isMounted(),t=ref(null),o=computed(()=>e.show),r=ref(e.defaultShow),i=useMergedState(o,r),a=useMemo(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:H}=e;return!!(H!=null&&H())},l=()=>s()?!1:i.value,d=useCompitable(e,["arrow","showArrow"]),u=computed(()=>e.overlap?!1:d.value);let f=null;const b=ref(null),C=ref(null),g=useMemo(()=>e.x!==void 0&&e.y!==void 0);function x(H){const{"onUpdate:show":z,onUpdateShow:te,onShow:j,onHide:ee}=e;r.value=H,z&&call(z,H),te&&call(te,H),H&&j&&call(j,!0),H&&ee&&call(ee,!1)}function v(){f&&f.syncPosition()}function y(){const{value:H}=b;H&&(window.clearTimeout(H),b.value=null)}function $(){const{value:H}=C;H&&(window.clearTimeout(H),C.value=null)}function L(){const H=s();if(e.trigger==="focus"&&!H){if(l())return;x(!0)}}function P(){const H=s();if(e.trigger==="focus"&&!H){if(!l())return;x(!1)}}function k(){const H=s();if(e.trigger==="hover"&&!H){if($(),b.value!==null||l())return;const z=()=>{x(!0),b.value=null},{delay:te}=e;te===0?z():b.value=window.setTimeout(z,te)}}function E(){const H=s();if(e.trigger==="hover"&&!H){if(y(),C.value!==null||!l())return;const z=()=>{x(!1),C.value=null},{duration:te}=e;te===0?z():C.value=window.setTimeout(z,te)}}function w(){E()}function T(H){var z;l()&&(e.trigger==="click"&&(y(),$(),x(!1)),(z=e.onClickoutside)===null||z===void 0||z.call(e,H))}function M(){if(e.trigger==="click"&&!s()){y(),$();const H=!l();x(H)}}function _(H){e.internalTrapFocus&&H.key==="Escape"&&(y(),$(),x(!1))}function J(H){r.value=H}function O(){var H;return(H=t.value)===null||H===void 0?void 0:H.targetRef}function Y(H){f=H}return provide("NPopover",{getTriggerElement:O,handleKeydown:_,handleMouseEnter:k,handleMouseLeave:E,handleClickOutside:T,handleMouseMoveOutside:w,setBodyInstance:Y,positionManuallyRef:g,isMountedRef:n,zIndexRef:toRef(e,"zIndex"),extraClassRef:toRef(e,"internalExtraClass"),internalRenderBodyRef:toRef(e,"internalRenderBody")}),watchEffect(()=>{i.value&&s()&&x(!1)}),{binderInstRef:t,positionManually:g,mergedShowConsideringDisabledProp:a,uncontrolledShow:r,mergedShowArrow:u,getMergedShow:l,setShow:J,handleClick:M,handleMouseEnter:k,handleMouseLeave:E,handleFocus:L,handleBlur:P,syncPosition:v}},render(){var e;const{positionManually:n,$slots:t}=this;let o,r=!1;if(!n&&(t.activator?o=getFirstSlotVNode(t,"activator"):o=getFirstSlotVNode(t,"trigger"),o)){o=cloneVNode(o),o=o.type===textVNodeType?h("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,s=[i,...a],l={onBlur:d=>{s.forEach(u=>{u.onBlur(d)})},onFocus:d=>{s.forEach(u=>{u.onFocus(d)})},onClick:d=>{s.forEach(u=>{u.onClick(d)})},onMouseenter:d=>{s.forEach(u=>{u.onMouseenter(d)})},onMouseleave:d=>{s.forEach(u=>{u.onMouseleave(d)})}};appendEvents(o,a?"nested":n?"manual":this.trigger,l)}}return h(VBinder,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?withDirectives(h("div",{style:{position:"fixed",inset:0}}),[[zindexable$1,{enabled:i,zIndex:this.zIndex}]]):null,n?null:h(VTarget,null,{default:()=>o}),h(NPopoverBody,keep(this.$props,bodyPropKeys,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,s;return(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a)},header:()=>{var a,s;return(s=(a=this.$slots).header)===null||s===void 0?void 0:s.call(a)},footer:()=>{var a,s;return(s=(a=this.$slots).footer)===null||s===void 0?void 0:s.call(a)}})]}})}}),commonVariables$j={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},tagDark={name:"Tag",common:commonDark,self(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:d,borderColor:u,tagColor:f,opacityDisabled:b,closeIconColor:C,closeIconColorHover:g,closeIconColorPressed:x,closeColorHover:v,closeColorPressed:y,borderRadiusSmall:$,fontSizeMini:L,fontSizeTiny:P,fontSizeSmall:k,fontSizeMedium:E,heightMini:w,heightTiny:T,heightSmall:M,heightMedium:_,buttonColor2Hover:J,buttonColor2Pressed:O,fontWeightStrong:Y}=e;return Object.assign(Object.assign({},commonVariables$j),{closeBorderRadius:$,heightTiny:w,heightSmall:T,heightMedium:M,heightLarge:_,borderRadius:$,opacityDisabled:b,fontSizeTiny:L,fontSizeSmall:P,fontSizeMedium:k,fontSizeLarge:E,fontWeightStrong:Y,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:J,colorPressedCheckable:O,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${u}`,textColor:n,color:f,colorBordered:"#0000",closeIconColor:C,closeIconColorHover:g,closeIconColorPressed:x,closeColorHover:v,closeColorPressed:y,borderPrimary:`1px solid ${changeColor(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:changeColor(r,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:scaleColor(r,{lightness:.7}),closeIconColorHoverPrimary:scaleColor(r,{lightness:.7}),closeIconColorPressedPrimary:scaleColor(r,{lightness:.7}),closeColorHoverPrimary:changeColor(r,{alpha:.16}),closeColorPressedPrimary:changeColor(r,{alpha:.12}),borderInfo:`1px solid ${changeColor(i,{alpha:.3})}`,textColorInfo:i,colorInfo:changeColor(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:scaleColor(i,{alpha:.7}),closeIconColorHoverInfo:scaleColor(i,{alpha:.7}),closeIconColorPressedInfo:scaleColor(i,{alpha:.7}),closeColorHoverInfo:changeColor(i,{alpha:.16}),closeColorPressedInfo:changeColor(i,{alpha:.12}),borderSuccess:`1px solid ${changeColor(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:changeColor(a,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:scaleColor(a,{alpha:.7}),closeIconColorHoverSuccess:scaleColor(a,{alpha:.7}),closeIconColorPressedSuccess:scaleColor(a,{alpha:.7}),closeColorHoverSuccess:changeColor(a,{alpha:.16}),closeColorPressedSuccess:changeColor(a,{alpha:.12}),borderWarning:`1px solid ${changeColor(s,{alpha:.3})}`,textColorWarning:s,colorWarning:changeColor(s,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:scaleColor(s,{alpha:.7}),closeIconColorHoverWarning:scaleColor(s,{alpha:.7}),closeIconColorPressedWarning:scaleColor(s,{alpha:.7}),closeColorHoverWarning:changeColor(s,{alpha:.16}),closeColorPressedWarning:changeColor(s,{alpha:.11}),borderError:`1px solid ${changeColor(l,{alpha:.3})}`,textColorError:l,colorError:changeColor(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:scaleColor(l,{alpha:.7}),closeIconColorHoverError:scaleColor(l,{alpha:.7}),closeIconColorPressedError:scaleColor(l,{alpha:.7}),closeColorHoverError:changeColor(l,{alpha:.16}),closeColorPressedError:changeColor(l,{alpha:.12})})}},tagDark$1=tagDark,self$19=e=>{const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:d,borderColor:u,opacityDisabled:f,tagColor:b,closeIconColor:C,closeIconColorHover:g,closeIconColorPressed:x,borderRadiusSmall:v,fontSizeMini:y,fontSizeTiny:$,fontSizeSmall:L,fontSizeMedium:P,heightMini:k,heightTiny:E,heightSmall:w,heightMedium:T,closeColorHover:M,closeColorPressed:_,buttonColor2Hover:J,buttonColor2Pressed:O,fontWeightStrong:Y}=e;return Object.assign(Object.assign({},commonVariables$j),{closeBorderRadius:v,heightTiny:k,heightSmall:E,heightMedium:w,heightLarge:T,borderRadius:v,opacityDisabled:f,fontSizeTiny:y,fontSizeSmall:$,fontSizeMedium:L,fontSizeLarge:P,fontWeightStrong:Y,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:J,colorPressedCheckable:O,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${u}`,textColor:n,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:C,closeIconColorHover:g,closeIconColorPressed:x,closeColorHover:M,closeColorPressed:_,borderPrimary:`1px solid ${changeColor(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:changeColor(r,{alpha:.12}),colorBorderedPrimary:changeColor(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:changeColor(r,{alpha:.12}),closeColorPressedPrimary:changeColor(r,{alpha:.18}),borderInfo:`1px solid ${changeColor(i,{alpha:.3})}`,textColorInfo:i,colorInfo:changeColor(i,{alpha:.12}),colorBorderedInfo:changeColor(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:changeColor(i,{alpha:.12}),closeColorPressedInfo:changeColor(i,{alpha:.18}),borderSuccess:`1px solid ${changeColor(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:changeColor(a,{alpha:.12}),colorBorderedSuccess:changeColor(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:changeColor(a,{alpha:.12}),closeColorPressedSuccess:changeColor(a,{alpha:.18}),borderWarning:`1px solid ${changeColor(s,{alpha:.35})}`,textColorWarning:s,colorWarning:changeColor(s,{alpha:.15}),colorBorderedWarning:changeColor(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:changeColor(s,{alpha:.12}),closeColorPressedWarning:changeColor(s,{alpha:.18}),borderError:`1px solid ${changeColor(l,{alpha:.23})}`,textColorError:l,colorError:changeColor(l,{alpha:.1}),colorBorderedError:changeColor(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:changeColor(l,{alpha:.12}),closeColorPressedError:changeColor(l,{alpha:.18})})},tagLight={name:"Tag",common:commonLight,self:self$19},tagLight$1=tagLight,style$g=cB("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[c$1(">",[cE("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[c$1("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),c$1("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),cE("placeholder",`
 display: flex;
 `),cE("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[iconSwitchTransition({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),NBaseClear=defineComponent({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return useStyle("-base-clear",style$g,toRef(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-base-clear`},h(NIconSwitchTransition,null,{default:()=>{var n,t;return this.show?h("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},resolveSlot(this.$slots.icon,()=>[h(NBaseIcon,{clsPrefix:e},{default:()=>h(ClearIcon,null)})])):h("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(n=this.$slots).placeholder)===null||t===void 0?void 0:t.call(n))}}))}}),NBaseSuffix=defineComponent({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:t}=e;return h(NBaseLoading,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?h(NBaseClear,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>h(NBaseIcon,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>resolveSlot(n.default,()=>[h(ChevronDownIcon,null)])})}):null})}}}),commonVars$b={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},self$18=e=>{const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:d,errorColor:u,errorColorHover:f,borderColor:b,iconColor:C,iconColorDisabled:g,clearColor:x,clearColorHover:v,clearColorPressed:y,placeholderColor:$,placeholderColorDisabled:L,fontSizeTiny:P,fontSizeSmall:k,fontSizeMedium:E,fontSizeLarge:w,heightTiny:T,heightSmall:M,heightMedium:_,heightLarge:J}=e;return Object.assign(Object.assign({},commonVars$b),{fontSizeTiny:P,fontSizeSmall:k,fontSizeMedium:E,fontSizeLarge:w,heightTiny:T,heightSmall:M,heightMedium:_,heightLarge:J,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:$,placeholderColorDisabled:L,color:r,colorDisabled:i,colorActive:r,border:`1px solid ${b}`,borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${changeColor(a,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${changeColor(a,{alpha:.2})}`,caretColor:a,arrowColor:C,arrowColorDisabled:g,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${d}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${d}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${changeColor(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${changeColor(l,{alpha:.2})}`,colorActiveWarning:r,caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${f}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${f}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${changeColor(u,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${changeColor(u,{alpha:.2})}`,colorActiveError:r,caretColorError:u,clearColor:x,clearColorHover:v,clearColorPressed:y})},internalSelectionLight={name:"InternalSelection",common:commonLight,peers:{Popover:popoverLight$1},self:self$18},internalSelectionLight$1=internalSelectionLight,internalSelectionDark={name:"InternalSelection",common:commonDark,peers:{Popover:popoverDark$1},self(e){const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:d,errorColor:u,errorColorHover:f,iconColor:b,iconColorDisabled:C,clearColor:g,clearColorHover:x,clearColorPressed:v,placeholderColor:y,placeholderColorDisabled:$,fontSizeTiny:L,fontSizeSmall:P,fontSizeMedium:k,fontSizeLarge:E,heightTiny:w,heightSmall:T,heightMedium:M,heightLarge:_}=e;return Object.assign(Object.assign({},commonVars$b),{fontSizeTiny:L,fontSizeSmall:P,fontSizeMedium:k,fontSizeLarge:E,heightTiny:w,heightSmall:T,heightMedium:M,heightLarge:_,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:y,placeholderColorDisabled:$,color:r,colorDisabled:i,colorActive:changeColor(a,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${changeColor(a,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${changeColor(a,{alpha:.4})}`,caretColor:a,arrowColor:b,arrowColorDisabled:C,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${d}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${d}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${changeColor(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${changeColor(l,{alpha:.4})}`,colorActiveWarning:changeColor(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${f}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${f}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${changeColor(u,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${changeColor(u,{alpha:.4})}`,colorActiveError:changeColor(u,{alpha:.1}),caretColorError:u,clearColor:g,clearColorHover:x,clearColorPressed:v})}},internalSelectionDark$1=internalSelectionDark,{cubicBezierEaseInOut:cubicBezierEaseInOut$1}=commonVariables$m;function fadeInWidthExpandTransition({duration:e=".2s",delay:n=".1s"}={}){return[c$1("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),c$1("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),c$1("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${cubicBezierEaseInOut$1},
 max-width ${e} ${cubicBezierEaseInOut$1} ${n},
 margin-left ${e} ${cubicBezierEaseInOut$1} ${n},
 margin-right ${e} ${cubicBezierEaseInOut$1} ${n};
 `),c$1("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${cubicBezierEaseInOut$1} ${n},
 max-width ${e} ${cubicBezierEaseInOut$1},
 margin-left ${e} ${cubicBezierEaseInOut$1},
 margin-right ${e} ${cubicBezierEaseInOut$1};
 `)]}const commonVars$a={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},alertDark={name:"Alert",common:commonDark,self(e){const{lineHeight:n,borderRadius:t,fontWeightStrong:o,dividerColor:r,inputColor:i,textColor1:a,textColor2:s,closeColorHover:l,closeColorPressed:d,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:b,infoColorSuppl:C,successColorSuppl:g,warningColorSuppl:x,errorColorSuppl:v,fontSize:y}=e;return Object.assign(Object.assign({},commonVars$a),{fontSize:y,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${r}`,color:i,titleTextColor:a,iconColor:s,contentTextColor:s,closeBorderRadius:t,closeColorHover:l,closeColorPressed:d,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:b,borderInfo:`1px solid ${changeColor(C,{alpha:.35})}`,colorInfo:changeColor(C,{alpha:.25}),titleTextColorInfo:a,iconColorInfo:C,contentTextColorInfo:s,closeColorHoverInfo:l,closeColorPressedInfo:d,closeIconColorInfo:u,closeIconColorHoverInfo:f,closeIconColorPressedInfo:b,borderSuccess:`1px solid ${changeColor(g,{alpha:.35})}`,colorSuccess:changeColor(g,{alpha:.25}),titleTextColorSuccess:a,iconColorSuccess:g,contentTextColorSuccess:s,closeColorHoverSuccess:l,closeColorPressedSuccess:d,closeIconColorSuccess:u,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:b,borderWarning:`1px solid ${changeColor(x,{alpha:.35})}`,colorWarning:changeColor(x,{alpha:.25}),titleTextColorWarning:a,iconColorWarning:x,contentTextColorWarning:s,closeColorHoverWarning:l,closeColorPressedWarning:d,closeIconColorWarning:u,closeIconColorHoverWarning:f,closeIconColorPressedWarning:b,borderError:`1px solid ${changeColor(v,{alpha:.35})}`,colorError:changeColor(v,{alpha:.25}),titleTextColorError:a,iconColorError:v,contentTextColorError:s,closeColorHoverError:l,closeColorPressedError:d,closeIconColorError:u,closeIconColorHoverError:f,closeIconColorPressedError:b})}},alertDark$1=alertDark,self$17=e=>{const{lineHeight:n,borderRadius:t,fontWeightStrong:o,baseColor:r,dividerColor:i,actionColor:a,textColor1:s,textColor2:l,closeColorHover:d,closeColorPressed:u,closeIconColor:f,closeIconColorHover:b,closeIconColorPressed:C,infoColor:g,successColor:x,warningColor:v,errorColor:y,fontSize:$}=e;return Object.assign(Object.assign({},commonVars$a),{fontSize:$,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${i}`,color:a,titleTextColor:s,iconColor:l,contentTextColor:l,closeBorderRadius:t,closeColorHover:d,closeColorPressed:u,closeIconColor:f,closeIconColorHover:b,closeIconColorPressed:C,borderInfo:`1px solid ${composite(r,changeColor(g,{alpha:.25}))}`,colorInfo:composite(r,changeColor(g,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:g,contentTextColorInfo:l,closeColorHoverInfo:d,closeColorPressedInfo:u,closeIconColorInfo:f,closeIconColorHoverInfo:b,closeIconColorPressedInfo:C,borderSuccess:`1px solid ${composite(r,changeColor(x,{alpha:.25}))}`,colorSuccess:composite(r,changeColor(x,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:x,contentTextColorSuccess:l,closeColorHoverSuccess:d,closeColorPressedSuccess:u,closeIconColorSuccess:f,closeIconColorHoverSuccess:b,closeIconColorPressedSuccess:C,borderWarning:`1px solid ${composite(r,changeColor(v,{alpha:.33}))}`,colorWarning:composite(r,changeColor(v,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:v,contentTextColorWarning:l,closeColorHoverWarning:d,closeColorPressedWarning:u,closeIconColorWarning:f,closeIconColorHoverWarning:b,closeIconColorPressedWarning:C,borderError:`1px solid ${composite(r,changeColor(y,{alpha:.25}))}`,colorError:composite(r,changeColor(y,{alpha:.08})),titleTextColorError:s,iconColorError:y,contentTextColorError:l,closeColorHoverError:d,closeColorPressedError:u,closeIconColorError:f,closeIconColorHoverError:b,closeIconColorPressedError:C})},alertLight={name:"Alert",common:commonLight,self:self$17},alertLight$1=alertLight,{cubicBezierEaseInOut,cubicBezierEaseOut,cubicBezierEaseIn}=commonVariables$m;function fadeInHeightExpandTransition({overflow:e="hidden",duration:n=".3s",originalTransition:t="",leavingDelay:o="0s",foldPadding:r=!1,enterToProps:i=void 0,leaveToProps:a=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",d=s?"enter":"leave";return[c$1(`&.fade-in-height-expand-transition-${d}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),c$1(`&.fade-in-height-expand-transition-${d}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},a),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:r?"0 !important":void 0,paddingBottom:r?"0 !important":void 0})),c$1(`&.fade-in-height-expand-transition-${d}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${cubicBezierEaseInOut} ${o},
 opacity ${n} ${cubicBezierEaseOut} ${o},
 margin-top ${n} ${cubicBezierEaseInOut} ${o},
 margin-bottom ${n} ${cubicBezierEaseInOut} ${o},
 padding-top ${n} ${cubicBezierEaseInOut} ${o},
 padding-bottom ${n} ${cubicBezierEaseInOut} ${o}
 ${t?","+t:""}
 `),c$1(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${cubicBezierEaseInOut},
 opacity ${n} ${cubicBezierEaseIn},
 margin-top ${n} ${cubicBezierEaseInOut},
 margin-bottom ${n} ${cubicBezierEaseInOut},
 padding-top ${n} ${cubicBezierEaseInOut},
 padding-bottom ${n} ${cubicBezierEaseInOut}
 ${t?","+t:""}
 `)]}const commonVars$9={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},self$16=e=>{const{borderRadius:n,railColor:t,primaryColor:o,primaryColorHover:r,primaryColorPressed:i,textColor2:a}=e;return Object.assign(Object.assign({},commonVars$9),{borderRadius:n,railColor:t,railColorActive:o,linkColor:changeColor(o,{alpha:.15}),linkTextColor:a,linkTextColorHover:r,linkTextColorPressed:i,linkTextColorActive:o})},anchorLight={name:"Anchor",common:commonLight,self:self$16},anchorLight$1=anchorLight,anchorDark={name:"Anchor",common:commonDark,self:self$16},anchorDark$1=anchorDark,isChrome=isBrowser$2&&"chrome"in window;isBrowser$2&&navigator.userAgent.includes("Firefox");const isSafari=isBrowser$2&&navigator.userAgent.includes("Safari")&&!isChrome,commonVariables$i={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},inputDark={name:"Input",common:commonDark,self(e){const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,warningColor:l,warningColorHover:d,errorColor:u,errorColorHover:f,borderRadius:b,lineHeight:C,fontSizeTiny:g,fontSizeSmall:x,fontSizeMedium:v,fontSizeLarge:y,heightTiny:$,heightSmall:L,heightMedium:P,heightLarge:k,clearColor:E,clearColorHover:w,clearColorPressed:T,placeholderColor:M,placeholderColorDisabled:_,iconColor:J,iconColorDisabled:O,iconColorHover:Y,iconColorPressed:H}=e;return Object.assign(Object.assign({},commonVariables$i),{countTextColorDisabled:o,countTextColor:t,heightTiny:$,heightSmall:L,heightMedium:P,heightLarge:k,fontSizeTiny:g,fontSizeSmall:x,fontSizeMedium:v,fontSizeLarge:y,lineHeight:C,lineHeightTextarea:C,borderRadius:b,iconSize:"16px",groupLabelColor:a,textColor:n,textColorDisabled:o,textDecorationColor:n,groupLabelTextColor:n,caretColor:r,placeholderColor:M,placeholderColorDisabled:_,color:a,colorDisabled:s,colorFocus:changeColor(r,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${changeColor(r,{alpha:.3})}`,loadingColor:r,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:changeColor(l,{alpha:.1}),borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 8px 0 ${changeColor(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${f}`,colorFocusError:changeColor(u,{alpha:.1}),borderFocusError:`1px solid ${f}`,boxShadowFocusError:`0 0 8px 0 ${changeColor(u,{alpha:.3})}`,caretColorError:u,clearColor:E,clearColorHover:w,clearColorPressed:T,iconColor:J,iconColorDisabled:O,iconColorHover:Y,iconColorPressed:H,suffixTextColor:n})}},inputDark$1=inputDark,self$15=e=>{const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,borderColor:l,warningColor:d,warningColorHover:u,errorColor:f,errorColorHover:b,borderRadius:C,lineHeight:g,fontSizeTiny:x,fontSizeSmall:v,fontSizeMedium:y,fontSizeLarge:$,heightTiny:L,heightSmall:P,heightMedium:k,heightLarge:E,actionColor:w,clearColor:T,clearColorHover:M,clearColorPressed:_,placeholderColor:J,placeholderColorDisabled:O,iconColor:Y,iconColorDisabled:H,iconColorHover:z,iconColorPressed:te}=e;return Object.assign(Object.assign({},commonVariables$i),{countTextColorDisabled:o,countTextColor:t,heightTiny:L,heightSmall:P,heightMedium:k,heightLarge:E,fontSizeTiny:x,fontSizeSmall:v,fontSizeMedium:y,fontSizeLarge:$,lineHeight:g,lineHeightTextarea:g,borderRadius:C,iconSize:"16px",groupLabelColor:w,groupLabelTextColor:n,textColor:n,textColorDisabled:o,textDecorationColor:n,caretColor:r,placeholderColor:J,placeholderColorDisabled:O,color:a,colorDisabled:s,colorFocus:a,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${changeColor(r,{alpha:.2})}`,loadingColor:r,loadingColorWarning:d,borderWarning:`1px solid ${d}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:a,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${changeColor(d,{alpha:.2})}`,caretColorWarning:d,loadingColorError:f,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${b}`,colorFocusError:a,borderFocusError:`1px solid ${b}`,boxShadowFocusError:`0 0 0 2px ${changeColor(f,{alpha:.2})}`,caretColorError:f,clearColor:T,clearColorHover:M,clearColorPressed:_,iconColor:Y,iconColorDisabled:H,iconColorHover:z,iconColorPressed:te,suffixTextColor:n})},inputLight={name:"Input",common:commonLight,self:self$15},inputLight$1=inputLight,inputInjectionKey="n-input";function len(e){let n=0;for(const t of e)n++;return n}function isEmptyInputValue(e){return e===""||e==null}function useCursor(e){const n=ref(null);function t(){const{value:i}=e;if(!(i!=null&&i.focus)){r();return}const{selectionStart:a,selectionEnd:s,value:l}=i;if(a==null||s==null){r();return}n.value={start:a,end:s,beforeText:l.slice(0,a),afterText:l.slice(s)}}function o(){var i;const{value:a}=n,{value:s}=e;if(!a||!s)return;const{value:l}=s,{start:d,beforeText:u,afterText:f}=a;let b=l.length;if(l.endsWith(f))b=l.length-f.length;else if(l.startsWith(u))b=u.length;else{const C=u[d-1],g=l.indexOf(C,d-1);g!==-1&&(b=g+1)}(i=s.setSelectionRange)===null||i===void 0||i.call(s,b,b)}function r(){n.value=null}return watch(e,r),{recordCursor:t,restoreCursor:o}}const WordCount=defineComponent({name:"InputWordCount",setup(e,{slots:n}){const{mergedValueRef:t,maxlengthRef:o,mergedClsPrefixRef:r,countGraphemesRef:i}=inject(inputInjectionKey),a=computed(()=>{const{value:s}=t;return s===null||Array.isArray(s)?0:(i.value||len)(s)});return()=>{const{value:s}=o,{value:l}=t;return h("span",{class:`${r.value}-input-word-count`},resolveSlotWithProps(n.default,{value:l===null||Array.isArray(l)?"":l},()=>[s===void 0?a.value:`${a.value} / ${s}`]))}}}),style$f=cB("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[cE("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),cE("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),cE("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),c$1("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),c$1("&:-webkit-autofill ~",[cE("placeholder","display: none;")])]),cM("round",[cNotM("textarea","border-radius: calc(var(--n-height) / 2);")]),cE("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[c$1("span",`
 width: 100%;
 display: inline-block;
 `)]),cM("textarea",[cE("placeholder","overflow: visible;")]),cNotM("autosize","width: 100%;"),cM("autosize",[cE("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),cB("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),cE("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),cE("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[c$1("+",[cE("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),cNotM("textarea",[cE("placeholder","white-space: nowrap;")]),cE("eye",`
 transition: color .3s var(--n-bezier);
 `),cM("textarea","width: 100%;",[cB("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),cM("resizable",[cB("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),cE("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),cE("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),cM("pair",[cE("input-el, placeholder","text-align: center;"),cE("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[cB("icon",`
 color: var(--n-icon-color);
 `),cB("base-icon",`
 color: var(--n-icon-color);
 `)])]),cM("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[cE("border","border: var(--n-border-disabled);"),cE("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),cE("placeholder","color: var(--n-placeholder-color-disabled);"),cE("separator","color: var(--n-text-color-disabled);",[cB("icon",`
 color: var(--n-icon-color-disabled);
 `),cB("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),cB("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),cE("suffix, prefix","color: var(--n-text-color-disabled);",[cB("icon",`
 color: var(--n-icon-color-disabled);
 `),cB("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),cNotM("disabled",[cE("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[c$1("&:hover",`
 color: var(--n-icon-color-hover);
 `),c$1("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),c$1("&:hover",[cE("state-border","border: var(--n-border-hover);")]),cM("focus","background-color: var(--n-color-focus);",[cE("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),cE("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),cE("state-border",`
 border-color: #0000;
 z-index: 1;
 `),cE("prefix","margin-right: 4px;"),cE("suffix",`
 margin-left: 4px;
 `),cE("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[cB("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),cB("base-clear",`
 font-size: var(--n-icon-size);
 `,[cE("placeholder",[cB("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),c$1(">",[cB("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),cB("base-icon",`
 font-size: var(--n-icon-size);
 `)]),cB("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>cM(`${e}-status`,[cNotM("disabled",[cB("base-loading",`
 color: var(--n-loading-color-${e})
 `),cE("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),cE("state-border",`
 border: var(--n-border-${e});
 `),c$1("&:hover",[cE("state-border",`
 border: var(--n-border-hover-${e});
 `)]),c$1("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[cE("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),cM("focus",`
 background-color: var(--n-color-focus-${e});
 `,[cE("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),safariStyle=cB("input",[cM("disabled",[cE("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),inputProps=Object.assign(Object.assign({},useTheme.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),__unplugin_components_5=defineComponent({name:"Input",props:inputProps,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=useConfig(e),i=useTheme("Input","-input",style$f,inputLight$1,e,n);isSafari&&useStyle("-input-safari",safariStyle,n);const a=ref(null),s=ref(null),l=ref(null),d=ref(null),u=ref(null),f=ref(null),b=ref(null),C=useCursor(b),g=ref(null),{localeRef:x}=useLocale("Input"),v=ref(e.defaultValue),y=toRef(e,"value"),$=useMergedState(y,v),L=useFormItem(e),{mergedSizeRef:P,mergedDisabledRef:k,mergedStatusRef:E}=L,w=ref(!1),T=ref(!1),M=ref(!1),_=ref(!1);let J=null;const O=computed(()=>{const{placeholder:I,pair:G}=e;return G?Array.isArray(I)?I:I===void 0?["",""]:[I,I]:I===void 0?[x.value.placeholder]:[I]}),Y=computed(()=>{const{value:I}=M,{value:G}=$,{value:ue}=O;return!I&&(isEmptyInputValue(G)||Array.isArray(G)&&isEmptyInputValue(G[0]))&&ue[0]}),H=computed(()=>{const{value:I}=M,{value:G}=$,{value:ue}=O;return!I&&ue[1]&&(isEmptyInputValue(G)||Array.isArray(G)&&isEmptyInputValue(G[1]))}),z=useMemo(()=>e.internalForceFocus||w.value),te=useMemo(()=>{if(k.value||e.readonly||!e.clearable||!z.value&&!T.value)return!1;const{value:I}=$,{value:G}=z;return e.pair?!!(Array.isArray(I)&&(I[0]||I[1]))&&(T.value||G):!!I&&(T.value||G)}),j=computed(()=>{const{showPasswordOn:I}=e;if(I)return I;if(e.showPasswordToggle)return"click"}),ee=ref(!1),R=computed(()=>{const{textDecoration:I}=e;return I?Array.isArray(I)?I.map(G=>({textDecoration:G})):[{textDecoration:I}]:["",""]}),K=ref(void 0),he=()=>{var I,G;if(e.type==="textarea"){const{autosize:ue}=e;if(ue&&(K.value=(G=(I=g.value)===null||I===void 0?void 0:I.$el)===null||G===void 0?void 0:G.offsetWidth),!s.value||typeof ue=="boolean")return;const{paddingTop:we,paddingBottom:Ee,lineHeight:Re}=window.getComputedStyle(s.value),Ye=Number(we.slice(0,-2)),Ze=Number(Ee.slice(0,-2)),Xe=Number(Re.slice(0,-2)),{value:nn}=l;if(!nn)return;if(ue.minRows){const tn=Math.max(ue.minRows,1),ln=`${Ye+Ze+Xe*tn}px`;nn.style.minHeight=ln}if(ue.maxRows){const tn=`${Ye+Ze+Xe*ue.maxRows}px`;nn.style.maxHeight=tn}}},me=computed(()=>{const{maxlength:I}=e;return I===void 0?void 0:Number(I)});onMounted(()=>{const{value:I}=$;Array.isArray(I)||ze(I)});const He=getCurrentInstance().proxy;function Ce(I){const{onUpdateValue:G,"onUpdate:value":ue,onInput:we}=e,{nTriggerFormInput:Ee}=L;G&&call(G,I),ue&&call(ue,I),we&&call(we,I),v.value=I,Ee()}function ye(I){const{onChange:G}=e,{nTriggerFormChange:ue}=L;G&&call(G,I),v.value=I,ue()}function de(I){const{onBlur:G}=e,{nTriggerFormBlur:ue}=L;G&&call(G,I),ue()}function ge(I){const{onFocus:G}=e,{nTriggerFormFocus:ue}=L;G&&call(G,I),ue()}function Ve(I){const{onClear:G}=e;G&&call(G,I)}function pe(I){const{onInputBlur:G}=e;G&&call(G,I)}function Ke(I){const{onInputFocus:G}=e;G&&call(G,I)}function Pe(){const{onDeactivate:I}=e;I&&call(I)}function A(){const{onActivate:I}=e;I&&call(I)}function D(I){const{onClick:G}=e;G&&call(G,I)}function F(I){const{onWrapperFocus:G}=e;G&&call(G,I)}function V(I){const{onWrapperBlur:G}=e;G&&call(G,I)}function U(){M.value=!0}function ne(I){M.value=!1,I.target===f.value?oe(I,1):oe(I,0)}function oe(I,G=0,ue="input"){const we=I.target.value;if(ze(we),I instanceof InputEvent&&!I.isComposing&&(M.value=!1),e.type==="textarea"){const{value:Re}=g;Re&&Re.syncUnifiedContainer()}if(J=we,M.value)return;C.recordCursor();const Ee=Q(we);if(Ee)if(!e.pair)ue==="input"?Ce(we):ye(we);else{let{value:Re}=$;Array.isArray(Re)?Re=[Re[0],Re[1]]:Re=["",""],Re[G]=we,ue==="input"?Ce(Re):ye(Re)}He.$forceUpdate(),Ee||nextTick(C.restoreCursor)}function Q(I){const{countGraphemes:G,maxlength:ue,minlength:we}=e;if(G){let Re;if(ue!==void 0&&(Re===void 0&&(Re=G(I)),Re>Number(ue))||we!==void 0&&(Re===void 0&&(Re=G(I)),Re<Number(ue)))return!1}const{allowInput:Ee}=e;return typeof Ee=="function"?Ee(I):!0}function Z(I){pe(I),I.relatedTarget===a.value&&Pe(),I.relatedTarget!==null&&(I.relatedTarget===u.value||I.relatedTarget===f.value||I.relatedTarget===s.value)||(_.value=!1),X(I,"blur"),b.value=null}function W(I,G){Ke(I),w.value=!0,_.value=!0,A(),X(I,"focus"),G===0?b.value=u.value:G===1?b.value=f.value:G===2&&(b.value=s.value)}function ce(I){e.passivelyActivated&&(V(I),X(I,"blur"))}function se(I){e.passivelyActivated&&(w.value=!0,F(I),X(I,"focus"))}function X(I,G){I.relatedTarget!==null&&(I.relatedTarget===u.value||I.relatedTarget===f.value||I.relatedTarget===s.value||I.relatedTarget===a.value)||(G==="focus"?(ge(I),w.value=!0):G==="blur"&&(de(I),w.value=!1))}function ie(I,G){oe(I,G,"change")}function le(I){D(I)}function Se(I){Ve(I),e.pair?(Ce(["",""]),ye(["",""])):(Ce(""),ye(""))}function be(I){const{onMousedown:G}=e;G&&G(I);const{tagName:ue}=I.target;if(ue!=="INPUT"&&ue!=="TEXTAREA"){if(e.resizable){const{value:we}=a;if(we){const{left:Ee,top:Re,width:Ye,height:Ze}=we.getBoundingClientRect(),Xe=14;if(Ee+Ye-Xe<I.clientX&&I.clientX<Ee+Ye&&Re+Ze-Xe<I.clientY&&I.clientY<Re+Ze)return}}I.preventDefault(),w.value||q()}}function Te(){var I;T.value=!0,e.type==="textarea"&&((I=g.value)===null||I===void 0||I.handleMouseEnterWrapper())}function De(){var I;T.value=!1,e.type==="textarea"&&((I=g.value)===null||I===void 0||I.handleMouseLeaveWrapper())}function Ge(){k.value||j.value==="click"&&(ee.value=!ee.value)}function Qe(I){if(k.value)return;I.preventDefault();const G=we=>{we.preventDefault(),off("mouseup",document,G)};if(on("mouseup",document,G),j.value!=="mousedown")return;ee.value=!0;const ue=()=>{ee.value=!1,off("mouseup",document,ue)};on("mouseup",document,ue)}function Je(I){var G;switch((G=e.onKeydown)===null||G===void 0||G.call(e,I),I.key){case"Escape":Oe();break;case"Enter":qe(I);break}}function qe(I){var G,ue;if(e.passivelyActivated){const{value:we}=_;if(we){e.internalDeactivateOnEnter&&Oe();return}I.preventDefault(),e.type==="textarea"?(G=s.value)===null||G===void 0||G.focus():(ue=u.value)===null||ue===void 0||ue.focus()}}function Oe(){e.passivelyActivated&&(_.value=!1,nextTick(()=>{var I;(I=a.value)===null||I===void 0||I.focus()}))}function q(){var I,G,ue;k.value||(e.passivelyActivated?(I=a.value)===null||I===void 0||I.focus():((G=s.value)===null||G===void 0||G.focus(),(ue=u.value)===null||ue===void 0||ue.focus()))}function ae(){var I;!((I=a.value)===null||I===void 0)&&I.contains(document.activeElement)&&document.activeElement.blur()}function fe(){var I,G;(I=s.value)===null||I===void 0||I.select(),(G=u.value)===null||G===void 0||G.select()}function ve(){k.value||(s.value?s.value.focus():u.value&&u.value.focus())}function $e(){const{value:I}=a;I!=null&&I.contains(document.activeElement)&&I!==document.activeElement&&Oe()}function _e(I){if(e.type==="textarea"){const{value:G}=s;G==null||G.scrollTo(I)}else{const{value:G}=u;G==null||G.scrollTo(I)}}function ze(I){const{type:G,pair:ue,autosize:we}=e;if(!ue&&we)if(G==="textarea"){const{value:Ee}=l;Ee&&(Ee.textContent=(I??"")+`\r
`)}else{const{value:Ee}=d;Ee&&(I?Ee.textContent=I:Ee.innerHTML="&nbsp;")}}function Ae(){he()}const je=ref({top:"0"});function Me(I){var G;const{scrollTop:ue}=I.target;je.value.top=`${-ue}px`,(G=g.value)===null||G===void 0||G.syncUnifiedContainer()}let Ie=null;watchEffect(()=>{const{autosize:I,type:G}=e;I&&G==="textarea"?Ie=watch($,ue=>{!Array.isArray(ue)&&ue!==J&&ze(ue)}):Ie==null||Ie()});let Ue=null;watchEffect(()=>{e.type==="textarea"?Ue=watch($,I=>{var G;!Array.isArray(I)&&I!==J&&((G=g.value)===null||G===void 0||G.syncUnifiedContainer())}):Ue==null||Ue()}),provide(inputInjectionKey,{mergedValueRef:$,maxlengthRef:me,mergedClsPrefixRef:n,countGraphemesRef:toRef(e,"countGraphemes")});const rn={wrapperElRef:a,inputElRef:u,textareaElRef:s,isCompositing:M,focus:q,blur:ae,select:fe,deactivate:$e,activate:ve,scrollTo:_e},en=useRtl("Input",r,n),Fe=computed(()=>{const{value:I}=P,{common:{cubicBezierEaseInOut:G},self:{color:ue,borderRadius:we,textColor:Ee,caretColor:Re,caretColorError:Ye,caretColorWarning:Ze,textDecorationColor:Xe,border:nn,borderDisabled:tn,borderHover:ln,borderFocus:vn,placeholderColor:yn,placeholderColorDisabled:Cn,lineHeightTextarea:xn,colorDisabled:Ne,colorFocus:cn,textColorDisabled:wn,boxShadowFocus:hn,iconSize:an,colorFocusWarning:Le,boxShadowFocusWarning:Sn,borderWarning:dn,borderFocusWarning:pn,borderHoverWarning:Tn,colorFocusError:un,boxShadowFocusError:fn,borderError:mn,borderFocusError:$n,borderHoverError:gn,clearSize:bn,clearColor:m,clearColorHover:S,clearColorPressed:B,iconColor:N,iconColorDisabled:re,suffixTextColor:xe,countTextColor:ke,countTextColorDisabled:Be,iconColorHover:sn,iconColorPressed:Pn,loadingColor:An,loadingColorError:Rn,loadingColorWarning:Dn,[createKey("padding",I)]:En,[createKey("fontSize",I)]:In,[createKey("height",I)]:Mn}}=i.value,{left:Ln,right:Bn}=getMargin(En);return{"--n-bezier":G,"--n-count-text-color":ke,"--n-count-text-color-disabled":Be,"--n-color":ue,"--n-font-size":In,"--n-border-radius":we,"--n-height":Mn,"--n-padding-left":Ln,"--n-padding-right":Bn,"--n-text-color":Ee,"--n-caret-color":Re,"--n-text-decoration-color":Xe,"--n-border":nn,"--n-border-disabled":tn,"--n-border-hover":ln,"--n-border-focus":vn,"--n-placeholder-color":yn,"--n-placeholder-color-disabled":Cn,"--n-icon-size":an,"--n-line-height-textarea":xn,"--n-color-disabled":Ne,"--n-color-focus":cn,"--n-text-color-disabled":wn,"--n-box-shadow-focus":hn,"--n-loading-color":An,"--n-caret-color-warning":Ze,"--n-color-focus-warning":Le,"--n-box-shadow-focus-warning":Sn,"--n-border-warning":dn,"--n-border-focus-warning":pn,"--n-border-hover-warning":Tn,"--n-loading-color-warning":Dn,"--n-caret-color-error":Ye,"--n-color-focus-error":un,"--n-box-shadow-focus-error":fn,"--n-border-error":mn,"--n-border-focus-error":$n,"--n-border-hover-error":gn,"--n-loading-color-error":Rn,"--n-clear-color":m,"--n-clear-size":bn,"--n-clear-color-hover":S,"--n-clear-color-pressed":B,"--n-icon-color":N,"--n-icon-color-hover":sn,"--n-icon-color-pressed":Pn,"--n-icon-color-disabled":re,"--n-suffix-text-color":xe}}),We=o?useThemeClass("input",computed(()=>{const{value:I}=P;return I[0]}),Fe,e):void 0;return Object.assign(Object.assign({},rn),{wrapperElRef:a,inputElRef:u,inputMirrorElRef:d,inputEl2Ref:f,textareaElRef:s,textareaMirrorElRef:l,textareaScrollbarInstRef:g,rtlEnabled:en,uncontrolledValue:v,mergedValue:$,passwordVisible:ee,mergedPlaceholder:O,showPlaceholder1:Y,showPlaceholder2:H,mergedFocus:z,isComposing:M,activated:_,showClearButton:te,mergedSize:P,mergedDisabled:k,textDecorationStyle:R,mergedClsPrefix:n,mergedBordered:t,mergedShowPasswordOn:j,placeholderStyle:je,mergedStatus:E,textAreaScrollContainerWidth:K,handleTextAreaScroll:Me,handleCompositionStart:U,handleCompositionEnd:ne,handleInput:oe,handleInputBlur:Z,handleInputFocus:W,handleWrapperBlur:ce,handleWrapperFocus:se,handleMouseEnter:Te,handleMouseLeave:De,handleMouseDown:be,handleChange:ie,handleClick:le,handleClear:Se,handlePasswordToggleClick:Ge,handlePasswordToggleMousedown:Qe,handleWrapperKeydown:Je,handleTextAreaMirrorResize:Ae,getTextareaScrollContainer:()=>s.value,mergedTheme:i,cssVars:o?void 0:Fe,themeClass:We==null?void 0:We.themeClass,onRender:We==null?void 0:We.onRender})},render(){var e,n;const{mergedClsPrefix:t,mergedStatus:o,themeClass:r,type:i,countGraphemes:a,onRender:s}=this,l=this.$slots;return s==null||s(),h("div",{ref:"wrapperElRef",class:[`${t}-input`,r,o&&`${t}-input--${o}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:i==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&i!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},h("div",{class:`${t}-input-wrapper`},resolveWrappedSlot(l.prefix,d=>d&&h("div",{class:`${t}-input__prefix`},d)),i==="textarea"?h(NScrollbar,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var d,u;const{textAreaScrollContainerWidth:f}=this,b={width:this.autosize&&f&&`${f}px`};return h(Fragment,null,h("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(d=this.inputProps)===null||d===void 0?void 0:d.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(u=this.inputProps)===null||u===void 0?void 0:u.style,b],onBlur:this.handleInputBlur,onFocus:C=>this.handleInputFocus(C,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?h("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,b],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?h(VResizeObserver,{onResize:this.handleTextAreaMirrorResize},{default:()=>h("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):h("div",{class:`${t}-input__input`},h("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(n=this.inputProps)===null||n===void 0?void 0:n.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:d=>this.handleInputFocus(d,0),onInput:d=>this.handleInput(d,0),onChange:d=>this.handleChange(d,0)})),this.showPlaceholder1?h("div",{class:`${t}-input__placeholder`},h("span",null,this.mergedPlaceholder[0])):null,this.autosize?h("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&resolveWrappedSlot(l.suffix,d=>d||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?h("div",{class:`${t}-input__suffix`},[resolveWrappedSlot(l["clear-icon-placeholder"],u=>(this.clearable||u)&&h(NBaseClear,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>u,icon:()=>{var f,b;return(b=(f=this.$slots)["clear-icon"])===null||b===void 0?void 0:b.call(f)}})),this.internalLoadingBeforeSuffix?null:d,this.loading!==void 0?h(NBaseSuffix,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?d:null,this.showCount&&this.type!=="textarea"?h(WordCount,null,{default:u=>{var f;return(f=l.count)===null||f===void 0?void 0:f.call(l,u)}}):null,this.mergedShowPasswordOn&&this.type==="password"?h("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?resolveSlot(l["password-visible-icon"],()=>[h(NBaseIcon,{clsPrefix:t},{default:()=>h(EyeIcon,null)})]):resolveSlot(l["password-invisible-icon"],()=>[h(NBaseIcon,{clsPrefix:t},{default:()=>h(EyeOffIcon,null)})])):null]):null)),this.pair?h("span",{class:`${t}-input__separator`},resolveSlot(l.separator,()=>[this.separator])):null,this.pair?h("div",{class:`${t}-input-wrapper`},h("div",{class:`${t}-input__input`},h("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:d=>this.handleInputFocus(d,1),onInput:d=>this.handleInput(d,1),onChange:d=>this.handleChange(d,1)}),this.showPlaceholder2?h("div",{class:`${t}-input__placeholder`},h("span",null,this.mergedPlaceholder[1])):null),resolveWrappedSlot(l.suffix,d=>(this.clearable||d)&&h("div",{class:`${t}-input__suffix`},[this.clearable&&h(NBaseClear,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var u;return(u=l["clear-icon"])===null||u===void 0?void 0:u.call(l)},placeholder:()=>{var u;return(u=l["clear-icon-placeholder"])===null||u===void 0?void 0:u.call(l)}}),d]))):null,this.mergedBordered?h("div",{class:`${t}-input__border`}):null,this.mergedBordered?h("div",{class:`${t}-input__state-border`}):null,this.showCount&&i==="textarea"?h(WordCount,null,{default:d=>{var u;const{renderCount:f}=this;return f?f(d):(u=l.count)===null||u===void 0?void 0:u.call(l,d)}}):null)}});function self$14(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const autoCompleteLight={name:"AutoComplete",common:commonLight,peers:{InternalSelectMenu:internalSelectMenuLight$1,Input:inputLight$1},self:self$14},autoCompleteLight$1=autoCompleteLight,autoCompleteDark={name:"AutoComplete",common:commonDark,peers:{InternalSelectMenu:internalSelectMenuDark$1,Input:inputDark$1},self:self$14},autoCompleteDark$1=autoCompleteDark,self$13=e=>{const{borderRadius:n,avatarColor:t,cardColor:o,fontSize:r,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:d,modalColor:u,popoverColor:f}=e;return{borderRadius:n,fontSize:r,border:`2px solid ${o}`,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:d,color:composite(o,t),colorModal:composite(u,t),colorPopover:composite(f,t)}},avatarLight={name:"Avatar",common:commonLight,self:self$13},avatarLight$1=avatarLight,avatarDark={name:"Avatar",common:commonDark,self:self$13},avatarDark$1=avatarDark,self$12=()=>({gap:"-12px"}),avatarGroupLight={name:"AvatarGroup",common:commonLight,peers:{Avatar:avatarLight$1},self:self$12},avatarGroupLight$1=avatarGroupLight,avatarGroupDark={name:"AvatarGroup",common:commonDark,peers:{Avatar:avatarDark$1},self:self$12},avatarGroupDark$1=avatarGroupDark,commonVariables$h={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},backTopDark={name:"BackTop",common:commonDark,self(e){const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},commonVariables$h),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},backTopDark$1=backTopDark,self$11=e=>{const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},commonVariables$h),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},backTopLight={name:"BackTop",common:commonLight,self:self$11},backTopLight$1=backTopLight,badgeDark={name:"Badge",common:commonDark,self(e){const{errorColorSuppl:n,infoColorSuppl:t,successColorSuppl:o,warningColorSuppl:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}}},badgeDark$1=badgeDark,self$10=e=>{const{errorColor:n,infoColor:t,successColor:o,warningColor:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}},badgeLight={name:"Badge",common:commonLight,self:self$10},badgeLight$1=badgeLight,commonVariables$g={fontWeightActive:"400"},self$$=e=>{const{fontSize:n,textColor3:t,textColor2:o,borderRadius:r,buttonColor2Hover:i,buttonColor2Pressed:a}=e;return Object.assign(Object.assign({},commonVariables$g),{fontSize:n,itemLineHeight:"1.25",itemTextColor:t,itemTextColorHover:o,itemTextColorPressed:o,itemTextColorActive:o,itemBorderRadius:r,itemColorHover:i,itemColorPressed:a,separatorColor:t})},breadcrumbLight={name:"Breadcrumb",common:commonLight,self:self$$},breadcrumbLight$1=breadcrumbLight,breadcrumbDark={name:"Breadcrumb",common:commonDark,self:self$$},breadcrumbDark$1=breadcrumbDark;function createHoverColor(e){return composite(e,[255,255,255,.16])}function createPressedColor(e){return composite(e,[0,0,0,.12])}const buttonGroupInjectionKey="n-button-group",commonVariables$f={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},self$_=e=>{const{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadius:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:d,opacityDisabled:u,textColor2:f,textColor3:b,primaryColorHover:C,primaryColorPressed:g,borderColor:x,primaryColor:v,baseColor:y,infoColor:$,infoColorHover:L,infoColorPressed:P,successColor:k,successColorHover:E,successColorPressed:w,warningColor:T,warningColorHover:M,warningColorPressed:_,errorColor:J,errorColorHover:O,errorColorPressed:Y,fontWeight:H,buttonColor2:z,buttonColor2Hover:te,buttonColor2Pressed:j,fontWeightStrong:ee}=e;return Object.assign(Object.assign({},commonVariables$f),{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:d,opacityDisabled:u,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:z,colorSecondaryHover:te,colorSecondaryPressed:j,colorTertiary:z,colorTertiaryHover:te,colorTertiaryPressed:j,colorQuaternary:"#0000",colorQuaternaryHover:te,colorQuaternaryPressed:j,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:f,textColorTertiary:b,textColorHover:C,textColorPressed:g,textColorFocus:C,textColorDisabled:f,textColorText:f,textColorTextHover:C,textColorTextPressed:g,textColorTextFocus:C,textColorTextDisabled:f,textColorGhost:f,textColorGhostHover:C,textColorGhostPressed:g,textColorGhostFocus:C,textColorGhostDisabled:f,border:`1px solid ${x}`,borderHover:`1px solid ${C}`,borderPressed:`1px solid ${g}`,borderFocus:`1px solid ${C}`,borderDisabled:`1px solid ${x}`,rippleColor:v,colorPrimary:v,colorHoverPrimary:C,colorPressedPrimary:g,colorFocusPrimary:C,colorDisabledPrimary:v,textColorPrimary:y,textColorHoverPrimary:y,textColorPressedPrimary:y,textColorFocusPrimary:y,textColorDisabledPrimary:y,textColorTextPrimary:v,textColorTextHoverPrimary:C,textColorTextPressedPrimary:g,textColorTextFocusPrimary:C,textColorTextDisabledPrimary:f,textColorGhostPrimary:v,textColorGhostHoverPrimary:C,textColorGhostPressedPrimary:g,textColorGhostFocusPrimary:C,textColorGhostDisabledPrimary:v,borderPrimary:`1px solid ${v}`,borderHoverPrimary:`1px solid ${C}`,borderPressedPrimary:`1px solid ${g}`,borderFocusPrimary:`1px solid ${C}`,borderDisabledPrimary:`1px solid ${v}`,rippleColorPrimary:v,colorInfo:$,colorHoverInfo:L,colorPressedInfo:P,colorFocusInfo:L,colorDisabledInfo:$,textColorInfo:y,textColorHoverInfo:y,textColorPressedInfo:y,textColorFocusInfo:y,textColorDisabledInfo:y,textColorTextInfo:$,textColorTextHoverInfo:L,textColorTextPressedInfo:P,textColorTextFocusInfo:L,textColorTextDisabledInfo:f,textColorGhostInfo:$,textColorGhostHoverInfo:L,textColorGhostPressedInfo:P,textColorGhostFocusInfo:L,textColorGhostDisabledInfo:$,borderInfo:`1px solid ${$}`,borderHoverInfo:`1px solid ${L}`,borderPressedInfo:`1px solid ${P}`,borderFocusInfo:`1px solid ${L}`,borderDisabledInfo:`1px solid ${$}`,rippleColorInfo:$,colorSuccess:k,colorHoverSuccess:E,colorPressedSuccess:w,colorFocusSuccess:E,colorDisabledSuccess:k,textColorSuccess:y,textColorHoverSuccess:y,textColorPressedSuccess:y,textColorFocusSuccess:y,textColorDisabledSuccess:y,textColorTextSuccess:k,textColorTextHoverSuccess:E,textColorTextPressedSuccess:w,textColorTextFocusSuccess:E,textColorTextDisabledSuccess:f,textColorGhostSuccess:k,textColorGhostHoverSuccess:E,textColorGhostPressedSuccess:w,textColorGhostFocusSuccess:E,textColorGhostDisabledSuccess:k,borderSuccess:`1px solid ${k}`,borderHoverSuccess:`1px solid ${E}`,borderPressedSuccess:`1px solid ${w}`,borderFocusSuccess:`1px solid ${E}`,borderDisabledSuccess:`1px solid ${k}`,rippleColorSuccess:k,colorWarning:T,colorHoverWarning:M,colorPressedWarning:_,colorFocusWarning:M,colorDisabledWarning:T,textColorWarning:y,textColorHoverWarning:y,textColorPressedWarning:y,textColorFocusWarning:y,textColorDisabledWarning:y,textColorTextWarning:T,textColorTextHoverWarning:M,textColorTextPressedWarning:_,textColorTextFocusWarning:M,textColorTextDisabledWarning:f,textColorGhostWarning:T,textColorGhostHoverWarning:M,textColorGhostPressedWarning:_,textColorGhostFocusWarning:M,textColorGhostDisabledWarning:T,borderWarning:`1px solid ${T}`,borderHoverWarning:`1px solid ${M}`,borderPressedWarning:`1px solid ${_}`,borderFocusWarning:`1px solid ${M}`,borderDisabledWarning:`1px solid ${T}`,rippleColorWarning:T,colorError:J,colorHoverError:O,colorPressedError:Y,colorFocusError:O,colorDisabledError:J,textColorError:y,textColorHoverError:y,textColorPressedError:y,textColorFocusError:y,textColorDisabledError:y,textColorTextError:J,textColorTextHoverError:O,textColorTextPressedError:Y,textColorTextFocusError:O,textColorTextDisabledError:f,textColorGhostError:J,textColorGhostHoverError:O,textColorGhostPressedError:Y,textColorGhostFocusError:O,textColorGhostDisabledError:J,borderError:`1px solid ${J}`,borderHoverError:`1px solid ${O}`,borderPressedError:`1px solid ${Y}`,borderFocusError:`1px solid ${O}`,borderDisabledError:`1px solid ${J}`,rippleColorError:J,waveOpacity:"0.6",fontWeight:H,fontWeightStrong:ee})},buttonLight={name:"Button",common:commonLight,self:self$_},buttonLight$1=buttonLight,buttonDark={name:"Button",common:commonDark,self(e){const n=self$_(e);return n.waveOpacity="0.8",n.colorOpacitySecondary="0.16",n.colorOpacitySecondaryHover="0.2",n.colorOpacitySecondaryPressed="0.12",n}},buttonDark$1=buttonDark,style$e=c$1([cB("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[cM("color",[cE("border",{borderColor:"var(--n-border-color)"}),cM("disabled",[cE("border",{borderColor:"var(--n-border-color-disabled)"})]),cNotM("disabled",[c$1("&:focus",[cE("state-border",{borderColor:"var(--n-border-color-focus)"})]),c$1("&:hover",[cE("state-border",{borderColor:"var(--n-border-color-hover)"})]),c$1("&:active",[cE("state-border",{borderColor:"var(--n-border-color-pressed)"})]),cM("pressed",[cE("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),cM("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[cE("border",{border:"var(--n-border-disabled)"})]),cNotM("disabled",[c$1("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[cE("state-border",{border:"var(--n-border-focus)"})]),c$1("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[cE("state-border",{border:"var(--n-border-hover)"})]),c$1("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[cE("state-border",{border:"var(--n-border-pressed)"})]),cM("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[cE("state-border",{border:"var(--n-border-pressed)"})])]),cM("loading","cursor: wait;"),cB("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[cM("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),isBrowser$2&&"MozBoxSizing"in document.createElement("div").style?c$1("&::moz-focus-inner",{border:0}):null,cE("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),cE("border",{border:"var(--n-border)"}),cE("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),cE("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[cB("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[iconSwitchTransition({top:"50%",originalTransform:"translateY(-50%)"})]),fadeInWidthExpandTransition()]),cE("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[c$1("~",[cE("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),cM("block",`
 display: flex;
 width: 100%;
 `),cM("dashed",[cE("border, state-border",{borderStyle:"dashed !important"})]),cM("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),c$1("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),c$1("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),buttonProps=Object.assign(Object.assign({},useTheme.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!isSafari}}),Button=defineComponent({name:"Button",props:buttonProps,setup(e){const n=ref(null),t=ref(null),o=ref(!1),r=useMemo(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),i=inject(buttonGroupInjectionKey,{}),{mergedSizeRef:a}=useFormItem({},{defaultSize:"medium",mergedSize:P=>{const{size:k}=e;if(k)return k;const{size:E}=i;if(E)return E;const{mergedSize:w}=P||{};return w?w.value:"medium"}}),s=computed(()=>e.focusable&&!e.disabled),l=P=>{var k;s.value||P.preventDefault(),!e.nativeFocusBehavior&&(P.preventDefault(),!e.disabled&&s.value&&((k=n.value)===null||k===void 0||k.focus({preventScroll:!0})))},d=P=>{var k;if(!e.disabled&&!e.loading){const{onClick:E}=e;E&&call(E,P),e.text||(k=t.value)===null||k===void 0||k.play()}},u=P=>{switch(P.key){case"Enter":if(!e.keyboard)return;o.value=!1}},f=P=>{switch(P.key){case"Enter":if(!e.keyboard||e.loading){P.preventDefault();return}o.value=!0}},b=()=>{o.value=!1},{inlineThemeDisabled:C,mergedClsPrefixRef:g,mergedRtlRef:x}=useConfig(e),v=useTheme("Button","-button",style$e,buttonLight$1,e,g),y=useRtl("Button",x,g),$=computed(()=>{const P=v.value,{common:{cubicBezierEaseInOut:k,cubicBezierEaseOut:E},self:w}=P,{rippleDuration:T,opacityDisabled:M,fontWeight:_,fontWeightStrong:J}=w,O=a.value,{dashed:Y,type:H,ghost:z,text:te,color:j,round:ee,circle:R,textColor:K,secondary:he,tertiary:me,quaternary:He,strong:Ce}=e,ye={"font-weight":Ce?J:_};let de={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const ge=H==="tertiary",Ve=H==="default",pe=ge?"default":H;if(te){const Z=K||j;de={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":Z||w[createKey("textColorText",pe)],"--n-text-color-hover":Z?createHoverColor(Z):w[createKey("textColorTextHover",pe)],"--n-text-color-pressed":Z?createPressedColor(Z):w[createKey("textColorTextPressed",pe)],"--n-text-color-focus":Z?createHoverColor(Z):w[createKey("textColorTextHover",pe)],"--n-text-color-disabled":Z||w[createKey("textColorTextDisabled",pe)]}}else if(z||Y){const Z=K||j;de={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":j||w[createKey("rippleColor",pe)],"--n-text-color":Z||w[createKey("textColorGhost",pe)],"--n-text-color-hover":Z?createHoverColor(Z):w[createKey("textColorGhostHover",pe)],"--n-text-color-pressed":Z?createPressedColor(Z):w[createKey("textColorGhostPressed",pe)],"--n-text-color-focus":Z?createHoverColor(Z):w[createKey("textColorGhostHover",pe)],"--n-text-color-disabled":Z||w[createKey("textColorGhostDisabled",pe)]}}else if(he){const Z=Ve?w.textColor:ge?w.textColorTertiary:w[createKey("color",pe)],W=j||Z,ce=H!=="default"&&H!=="tertiary";de={"--n-color":ce?changeColor(W,{alpha:Number(w.colorOpacitySecondary)}):w.colorSecondary,"--n-color-hover":ce?changeColor(W,{alpha:Number(w.colorOpacitySecondaryHover)}):w.colorSecondaryHover,"--n-color-pressed":ce?changeColor(W,{alpha:Number(w.colorOpacitySecondaryPressed)}):w.colorSecondaryPressed,"--n-color-focus":ce?changeColor(W,{alpha:Number(w.colorOpacitySecondaryHover)}):w.colorSecondaryHover,"--n-color-disabled":w.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":W,"--n-text-color-hover":W,"--n-text-color-pressed":W,"--n-text-color-focus":W,"--n-text-color-disabled":W}}else if(me||He){const Z=Ve?w.textColor:ge?w.textColorTertiary:w[createKey("color",pe)],W=j||Z;me?(de["--n-color"]=w.colorTertiary,de["--n-color-hover"]=w.colorTertiaryHover,de["--n-color-pressed"]=w.colorTertiaryPressed,de["--n-color-focus"]=w.colorSecondaryHover,de["--n-color-disabled"]=w.colorTertiary):(de["--n-color"]=w.colorQuaternary,de["--n-color-hover"]=w.colorQuaternaryHover,de["--n-color-pressed"]=w.colorQuaternaryPressed,de["--n-color-focus"]=w.colorQuaternaryHover,de["--n-color-disabled"]=w.colorQuaternary),de["--n-ripple-color"]="#0000",de["--n-text-color"]=W,de["--n-text-color-hover"]=W,de["--n-text-color-pressed"]=W,de["--n-text-color-focus"]=W,de["--n-text-color-disabled"]=W}else de={"--n-color":j||w[createKey("color",pe)],"--n-color-hover":j?createHoverColor(j):w[createKey("colorHover",pe)],"--n-color-pressed":j?createPressedColor(j):w[createKey("colorPressed",pe)],"--n-color-focus":j?createHoverColor(j):w[createKey("colorFocus",pe)],"--n-color-disabled":j||w[createKey("colorDisabled",pe)],"--n-ripple-color":j||w[createKey("rippleColor",pe)],"--n-text-color":K||(j?w.textColorPrimary:ge?w.textColorTertiary:w[createKey("textColor",pe)]),"--n-text-color-hover":K||(j?w.textColorHoverPrimary:w[createKey("textColorHover",pe)]),"--n-text-color-pressed":K||(j?w.textColorPressedPrimary:w[createKey("textColorPressed",pe)]),"--n-text-color-focus":K||(j?w.textColorFocusPrimary:w[createKey("textColorFocus",pe)]),"--n-text-color-disabled":K||(j?w.textColorDisabledPrimary:w[createKey("textColorDisabled",pe)])};let Ke={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};te?Ke={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Ke={"--n-border":w[createKey("border",pe)],"--n-border-hover":w[createKey("borderHover",pe)],"--n-border-pressed":w[createKey("borderPressed",pe)],"--n-border-focus":w[createKey("borderFocus",pe)],"--n-border-disabled":w[createKey("borderDisabled",pe)]};const{[createKey("height",O)]:Pe,[createKey("fontSize",O)]:A,[createKey("padding",O)]:D,[createKey("paddingRound",O)]:F,[createKey("iconSize",O)]:V,[createKey("borderRadius",O)]:U,[createKey("iconMargin",O)]:ne,waveOpacity:oe}=w,Q={"--n-width":R&&!te?Pe:"initial","--n-height":te?"initial":Pe,"--n-font-size":A,"--n-padding":R||te?"initial":ee?F:D,"--n-icon-size":V,"--n-icon-margin":ne,"--n-border-radius":te?"initial":R||ee?Pe:U};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":k,"--n-bezier-ease-out":E,"--n-ripple-duration":T,"--n-opacity-disabled":M,"--n-wave-opacity":oe},ye),de),Ke),Q)}),L=C?useThemeClass("button",computed(()=>{let P="";const{dashed:k,type:E,ghost:w,text:T,color:M,round:_,circle:J,textColor:O,secondary:Y,tertiary:H,quaternary:z,strong:te}=e;k&&(P+="a"),w&&(P+="b"),T&&(P+="c"),_&&(P+="d"),J&&(P+="e"),Y&&(P+="f"),H&&(P+="g"),z&&(P+="h"),te&&(P+="i"),M&&(P+="j"+color2Class(M)),O&&(P+="k"+color2Class(O));const{value:j}=a;return P+="l"+j[0],P+="m"+E[0],P}),$,e):void 0;return{selfElRef:n,waveElRef:t,mergedClsPrefix:g,mergedFocusable:s,mergedSize:a,showBorder:r,enterPressed:o,rtlEnabled:y,handleMousedown:l,handleKeydown:f,handleBlur:b,handleKeyup:u,handleClick:d,customColorCssVars:computed(()=>{const{color:P}=e;if(!P)return null;const k=createHoverColor(P);return{"--n-border-color":P,"--n-border-color-hover":k,"--n-border-color-pressed":createPressedColor(P),"--n-border-color-focus":k,"--n-border-color-disabled":P}}),cssVars:C?void 0:$,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender}},render(){const{mergedClsPrefix:e,tag:n,onRender:t}=this;t==null||t();const o=resolveWrappedSlot(this.$slots.default,r=>r&&h("span",{class:`${e}-button__content`},r));return h(n,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&o,h(NFadeInExpandTransition,{width:!0},{default:()=>resolveWrappedSlot(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&h("span",{class:`${e}-button__icon`,style:{margin:isSlotEmpty(this.$slots.default)?"0":""}},h(NIconSwitchTransition,null,{default:()=>this.loading?h(NBaseLoading,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&o,this.text?null:h(NBaseWave,{ref:"waveElRef",clsPrefix:e}),this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),__unplugin_components_1=Button,commonVariables$e={titleFontSize:"22px"},self$Z=e=>{const{borderRadius:n,fontSize:t,lineHeight:o,textColor2:r,textColor1:i,textColorDisabled:a,dividerColor:s,fontWeightStrong:l,primaryColor:d,baseColor:u,hoverColor:f,cardColor:b,modalColor:C,popoverColor:g}=e;return Object.assign(Object.assign({},commonVariables$e),{borderRadius:n,borderColor:composite(b,s),borderColorModal:composite(C,s),borderColorPopover:composite(g,s),textColor:r,titleFontWeight:l,titleTextColor:i,dayTextColor:a,fontSize:t,lineHeight:o,dateColorCurrent:d,dateTextColorCurrent:u,cellColorHover:composite(b,f),cellColorHoverModal:composite(C,f),cellColorHoverPopover:composite(g,f),cellColor:b,cellColorModal:C,cellColorPopover:g,barColor:d})},calendarLight={name:"Calendar",common:commonLight,peers:{Button:buttonLight$1},self:self$Z},calendarLight$1=calendarLight,calendarDark={name:"Calendar",common:commonDark,peers:{Button:buttonDark$1},self:self$Z},calendarDark$1=calendarDark,self$Y=e=>{const{fontSize:n,boxShadow2:t,popoverColor:o,textColor2:r,borderRadius:i,borderColor:a,heightSmall:s,heightMedium:l,heightLarge:d,fontSizeSmall:u,fontSizeMedium:f,fontSizeLarge:b,dividerColor:C}=e;return{panelFontSize:n,boxShadow:t,color:o,textColor:r,borderRadius:i,border:`1px solid ${a}`,heightSmall:s,heightMedium:l,heightLarge:d,fontSizeSmall:u,fontSizeMedium:f,fontSizeLarge:b,dividerColor:C}},colorPickerLight={name:"ColorPicker",common:commonLight,peers:{Input:inputLight$1,Button:buttonLight$1},self:self$Y},colorPickerLight$1=colorPickerLight,colorPickerDark={name:"ColorPicker",common:commonDark,peers:{Input:inputDark$1,Button:buttonDark$1},self:self$Y},colorPickerDark$1=colorPickerDark,commonVariables$d={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},self$X=e=>{const{primaryColor:n,borderRadius:t,lineHeight:o,fontSize:r,cardColor:i,textColor2:a,textColor1:s,dividerColor:l,fontWeightStrong:d,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:b,closeColorHover:C,closeColorPressed:g,modalColor:x,boxShadow1:v,popoverColor:y,actionColor:$}=e;return Object.assign(Object.assign({},commonVariables$d),{lineHeight:o,color:i,colorModal:x,colorPopover:y,colorTarget:n,colorEmbedded:$,colorEmbeddedModal:$,colorEmbeddedPopover:$,textColor:a,titleTextColor:s,borderColor:l,actionColor:$,titleFontWeight:d,closeColorHover:C,closeColorPressed:g,closeBorderRadius:t,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:b,fontSizeSmall:r,fontSizeMedium:r,fontSizeLarge:r,fontSizeHuge:r,boxShadow:v,borderRadius:t})},cardLight={name:"Card",common:commonLight,self:self$X},cardLight$1=cardLight,cardDark={name:"Card",common:commonDark,self(e){const n=self$X(e),{cardColor:t,modalColor:o,popoverColor:r}=e;return n.colorEmbedded=t,n.colorEmbeddedModal=o,n.colorEmbeddedPopover=r,n}},cardDark$1=cardDark,style$d=c$1([cB("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[asModal({background:"var(--n-color-modal)"}),cM("hoverable",[c$1("&:hover","box-shadow: var(--n-box-shadow);")]),cM("content-segmented",[c$1(">",[cE("content",{paddingTop:"var(--n-padding-bottom)"})])]),cM("content-soft-segmented",[c$1(">",[cE("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),cM("footer-segmented",[c$1(">",[cE("footer",{paddingTop:"var(--n-padding-bottom)"})])]),cM("footer-soft-segmented",[c$1(">",[cE("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),c$1(">",[cB("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[cE("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),cE("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),cE("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),cE("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),cE("content","flex: 1; min-width: 0;"),cE("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[c$1("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),cE("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),cB("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[c$1("img",`
 display: block;
 width: 100%;
 `)]),cM("bordered",`
 border: 1px solid var(--n-border-color);
 `,[c$1("&:target","border-color: var(--n-color-target);")]),cM("action-segmented",[c$1(">",[cE("action",[c$1("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),cM("content-segmented, content-soft-segmented",[c$1(">",[cE("content",{transition:"border-color 0.3s var(--n-bezier)"},[c$1("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),cM("footer-segmented, footer-soft-segmented",[c$1(">",[cE("footer",{transition:"border-color 0.3s var(--n-bezier)"},[c$1("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),cM("embedded",`
 background-color: var(--n-color-embedded);
 `)]),insideModal(cB("card",`
 background: var(--n-color-modal);
 `,[cM("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),insidePopover(cB("card",`
 background: var(--n-color-popover);
 `,[cM("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),cardBaseProps={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},cardBasePropKeys=keysOf(cardBaseProps),cardProps=Object.assign(Object.assign({},useTheme.props),cardBaseProps),NCard=defineComponent({name:"Card",props:cardProps,setup(e){const n=()=>{const{onClose:d}=e;d&&call(d)},{inlineThemeDisabled:t,mergedClsPrefixRef:o,mergedRtlRef:r}=useConfig(e),i=useTheme("Card","-card",style$d,cardLight$1,e,o),a=useRtl("Card",r,o),s=computed(()=>{const{size:d}=e,{self:{color:u,colorModal:f,colorTarget:b,textColor:C,titleTextColor:g,titleFontWeight:x,borderColor:v,actionColor:y,borderRadius:$,lineHeight:L,closeIconColor:P,closeIconColorHover:k,closeIconColorPressed:E,closeColorHover:w,closeColorPressed:T,closeBorderRadius:M,closeIconSize:_,closeSize:J,boxShadow:O,colorPopover:Y,colorEmbedded:H,colorEmbeddedModal:z,colorEmbeddedPopover:te,[createKey("padding",d)]:j,[createKey("fontSize",d)]:ee,[createKey("titleFontSize",d)]:R},common:{cubicBezierEaseInOut:K}}=i.value,{top:he,left:me,bottom:He}=getMargin(j);return{"--n-bezier":K,"--n-border-radius":$,"--n-color":u,"--n-color-modal":f,"--n-color-popover":Y,"--n-color-embedded":H,"--n-color-embedded-modal":z,"--n-color-embedded-popover":te,"--n-color-target":b,"--n-text-color":C,"--n-line-height":L,"--n-action-color":y,"--n-title-text-color":g,"--n-title-font-weight":x,"--n-close-icon-color":P,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":E,"--n-close-color-hover":w,"--n-close-color-pressed":T,"--n-border-color":v,"--n-box-shadow":O,"--n-padding-top":he,"--n-padding-bottom":He,"--n-padding-left":me,"--n-font-size":ee,"--n-title-font-size":R,"--n-close-size":J,"--n-close-icon-size":_,"--n-close-border-radius":M}}),l=t?useThemeClass("card",computed(()=>e.size[0]),s,e):void 0;return{rtlEnabled:a,mergedClsPrefix:o,mergedTheme:i,handleCloseClick:n,cssVars:t?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:n,hoverable:t,mergedClsPrefix:o,rtlEnabled:r,onRender:i,embedded:a,tag:s,$slots:l}=this;return i==null||i(),h(s,{class:[`${o}-card`,this.themeClass,a&&`${o}-card--embedded`,{[`${o}-card--rtl`]:r,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:t}],style:this.cssVars,role:this.role},resolveWrappedSlot(l.cover,d=>d&&h("div",{class:`${o}-card-cover`,role:"none"},d)),resolveWrappedSlot(l.header,d=>d||this.title||this.closable?h("div",{class:`${o}-card-header`,style:this.headerStyle},h("div",{class:`${o}-card-header__main`,role:"heading"},d||this.title),resolveWrappedSlot(l["header-extra"],u=>u&&h("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},u)),this.closable?h(NBaseClose,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),resolveWrappedSlot(l.default,d=>d&&h("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},d)),resolveWrappedSlot(l.footer,d=>d&&[h("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},d)]),resolveWrappedSlot(l.action,d=>d&&h("div",{class:`${o}-card__action`,role:"none"},d)))}}),self$W=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),carouselLight={name:"Carousel",common:commonLight,self:self$W},carouselLight$1=carouselLight,carouselDark={name:"Carousel",common:commonDark,self:self$W},carouselDark$1=carouselDark,commonVariables$c={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},self$V=e=>{const{baseColor:n,inputColorDisabled:t,cardColor:o,modalColor:r,popoverColor:i,textColorDisabled:a,borderColor:s,primaryColor:l,textColor2:d,fontSizeSmall:u,fontSizeMedium:f,fontSizeLarge:b,borderRadiusSmall:C,lineHeight:g}=e;return Object.assign(Object.assign({},commonVariables$c),{labelLineHeight:g,fontSizeSmall:u,fontSizeMedium:f,fontSizeLarge:b,borderRadius:C,color:n,colorChecked:l,colorDisabled:t,colorDisabledChecked:t,colorTableHeader:o,colorTableHeaderModal:r,colorTableHeaderPopover:i,checkMarkColor:n,checkMarkColorDisabled:a,checkMarkColorDisabledChecked:a,border:`1px solid ${s}`,borderDisabled:`1px solid ${s}`,borderDisabledChecked:`1px solid ${s}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${changeColor(l,{alpha:.3})}`,textColor:d,textColorDisabled:a})},checkboxLight={name:"Checkbox",common:commonLight,self:self$V},checkboxLight$1=checkboxLight,checkboxDark={name:"Checkbox",common:commonDark,self(e){const{cardColor:n}=e,t=self$V(e);return t.color="#0000",t.checkMarkColor=n,t}},checkboxDark$1=checkboxDark,self$U=e=>{const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r,textColor3:i,primaryColor:a,textColorDisabled:s,dividerColor:l,hoverColor:d,fontSizeMedium:u,heightMedium:f}=e;return{menuBorderRadius:n,menuColor:o,menuBoxShadow:t,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:f,optionFontSize:u,optionColorHover:d,optionTextColor:r,optionTextColorActive:a,optionTextColorDisabled:s,optionCheckMarkColor:a,loadingColor:a,columnWidth:"180px"}},cascaderLight={name:"Cascader",common:commonLight,peers:{InternalSelectMenu:internalSelectMenuLight$1,InternalSelection:internalSelectionLight$1,Scrollbar:scrollbarLight$1,Checkbox:checkboxLight$1,Empty:emptyLight$1},self:self$U},cascaderLight$1=cascaderLight,cascaderDark={name:"Cascader",common:commonDark,peers:{InternalSelectMenu:internalSelectMenuDark$1,InternalSelection:internalSelectionDark$1,Scrollbar:scrollbarDark$1,Checkbox:checkboxDark$1,Empty:emptyLight$1},self:self$U},cascaderDark$1=cascaderDark,codeDark={name:"Code",common:commonDark,self(e){const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:r}}},codeDark$1=codeDark,self$T=e=>{const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:r}},codeLight={name:"Code",common:commonLight,self:self$T},codeLight$1=codeLight,self$S=e=>{const{fontWeight:n,textColor1:t,textColor2:o,textColorDisabled:r,dividerColor:i,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:n,dividerColor:i,titleTextColor:t,titleTextColorDisabled:r,fontSize:a,textColor:o,arrowColor:o,arrowColorDisabled:r,itemMargin:"16px 0 0 0"}},collapseLight={name:"Collapse",common:commonLight,self:self$S},collapseLight$1=collapseLight,collapseDark={name:"Collapse",common:commonDark,self:self$S},collapseDark$1=collapseDark,self$R=e=>{const{cubicBezierEaseInOut:n}=e;return{bezier:n}},collapseTransitionLight={name:"CollapseTransition",common:commonLight,self:self$R},collapseTransitionLight$1=collapseTransitionLight,collapseTransitionDark={name:"CollapseTransition",common:commonDark,self:self$R},collapseTransitionDark$1=collapseTransitionDark,configProviderProps={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(warn$2("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},__unplugin_components_14=defineComponent({name:"ConfigProvider",alias:["App"],props:configProviderProps,setup(e){const n=inject(configProviderInjectionKey,null),t=computed(()=>{const{theme:g}=e;if(g===null)return;const x=n==null?void 0:n.mergedThemeRef.value;return g===void 0?x:x===void 0?g:Object.assign({},x,g)}),o=computed(()=>{const{themeOverrides:g}=e;if(g!==null){if(g===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const x=n==null?void 0:n.mergedThemeOverridesRef.value;return x===void 0?g:merge$2({},x,g)}}}),r=useMemo(()=>{const{namespace:g}=e;return g===void 0?n==null?void 0:n.mergedNamespaceRef.value:g}),i=useMemo(()=>{const{bordered:g}=e;return g===void 0?n==null?void 0:n.mergedBorderedRef.value:g}),a=computed(()=>{const{icons:g}=e;return g===void 0?n==null?void 0:n.mergedIconsRef.value:g}),s=computed(()=>{const{componentOptions:g}=e;return g!==void 0?g:n==null?void 0:n.mergedComponentPropsRef.value}),l=computed(()=>{const{clsPrefix:g}=e;return g!==void 0?g:n==null?void 0:n.mergedClsPrefixRef.value}),d=computed(()=>{var g;const{rtl:x}=e;if(x===void 0)return n==null?void 0:n.mergedRtlRef.value;const v={};for(const y of x)v[y.name]=markRaw(y),(g=y.peers)===null||g===void 0||g.forEach($=>{$.name in v||(v[$.name]=markRaw($))});return v}),u=computed(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),f=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),b=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),C=computed(()=>{const{value:g}=t,{value:x}=o,v=x&&Object.keys(x).length!==0,y=g==null?void 0:g.name;return y?v?`${y}-${murmur2(JSON.stringify(o.value))}`:y:v?murmur2(JSON.stringify(o.value)):""});return provide(configProviderInjectionKey,{mergedThemeHashRef:C,mergedBreakpointsRef:u,mergedRtlRef:d,mergedIconsRef:a,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:r,mergedClsPrefixRef:l,mergedLocaleRef:computed(()=>{const{locale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedLocaleRef.value:g}),mergedDateLocaleRef:computed(()=>{const{dateLocale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedDateLocaleRef.value:g}),mergedHljsRef:computed(()=>{const{hljs:g}=e;return g===void 0?n==null?void 0:n.mergedHljsRef.value:g}),mergedKatexRef:computed(()=>{const{katex:g}=e;return g===void 0?n==null?void 0:n.mergedKatexRef.value:g}),mergedThemeRef:t,mergedThemeOverridesRef:o,inlineThemeDisabled:f||!1,preflightStyleDisabled:b||!1}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:r,mergedTheme:t,mergedThemeOverrides:o}},render(){var e,n,t,o;return this.abstract?(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t):h(this.as||this.tag,{class:`${this.mergedClsPrefix||defaultClsPrefix}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),popselect={name:"Popselect",common:commonDark,peers:{Popover:popoverDark$1,InternalSelectMenu:internalSelectMenuDark$1}},popselectDark=popselect;function self$Q(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const popselectLight={name:"Popselect",common:commonLight,peers:{Popover:popoverLight$1,InternalSelectMenu:internalSelectMenuLight$1},self:self$Q},popselectLight$1=popselectLight;function self$P(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const selectLight={name:"Select",common:commonLight,peers:{InternalSelection:internalSelectionLight$1,InternalSelectMenu:internalSelectMenuLight$1},self:self$P},selectLight$1=selectLight,selectDark={name:"Select",common:commonDark,peers:{InternalSelection:internalSelectionDark$1,InternalSelectMenu:internalSelectMenuDark$1},self:self$P},selectDark$1=selectDark,commonVariables$b={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"},self$O=e=>{const{textColor2:n,primaryColor:t,primaryColorHover:o,primaryColorPressed:r,inputColorDisabled:i,textColorDisabled:a,borderColor:s,borderRadius:l,fontSizeTiny:d,fontSizeSmall:u,fontSizeMedium:f,heightTiny:b,heightSmall:C,heightMedium:g}=e;return Object.assign(Object.assign({},commonVariables$b),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${s}`,buttonBorderHover:`1px solid ${s}`,buttonBorderPressed:`1px solid ${s}`,buttonIconColor:n,buttonIconColorHover:n,buttonIconColorPressed:n,itemTextColor:n,itemTextColorHover:o,itemTextColorPressed:r,itemTextColorActive:t,itemTextColorDisabled:a,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${t}`,itemBorderDisabled:`1px solid ${s}`,itemBorderRadius:l,itemSizeSmall:b,itemSizeMedium:C,itemSizeLarge:g,itemFontSizeSmall:d,itemFontSizeMedium:u,itemFontSizeLarge:f,jumperFontSizeSmall:d,jumperFontSizeMedium:u,jumperFontSizeLarge:f,jumperTextColor:n,jumperTextColorDisabled:a})},paginationLight={name:"Pagination",common:commonLight,peers:{Select:selectLight$1,Input:inputLight$1,Popselect:popselectLight$1},self:self$O},paginationLight$1=paginationLight,paginationDark={name:"Pagination",common:commonDark,peers:{Select:selectDark$1,Input:inputDark$1,Popselect:popselectDark},self(e){const{primaryColor:n,opacity3:t}=e,o=changeColor(n,{alpha:Number(t)}),r=self$O(e);return r.itemBorderActive=`1px solid ${o}`,r.itemBorderDisabled="1px solid #0000",r}},paginationDark$1=paginationDark,commonVars$8={padding:"8px 14px"},tooltipDark={name:"Tooltip",common:commonDark,peers:{Popover:popoverDark$1},self(e){const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r}=e;return Object.assign(Object.assign({},commonVars$8),{borderRadius:n,boxShadow:t,color:o,textColor:r})}},tooltipDark$1=tooltipDark,self$N=e=>{const{borderRadius:n,boxShadow2:t,baseColor:o}=e;return Object.assign(Object.assign({},commonVars$8),{borderRadius:n,boxShadow:t,color:composite(o,"rgba(0, 0, 0, .85)"),textColor:o})},tooltipLight={name:"Tooltip",common:commonLight,peers:{Popover:popoverLight$1},self:self$N},tooltipLight$1=tooltipLight,ellipsisDark={name:"Ellipsis",common:commonDark,peers:{Tooltip:tooltipDark$1}},ellipsisDark$1=ellipsisDark,ellipsisLight={name:"Ellipsis",common:commonLight,peers:{Tooltip:tooltipLight$1}},ellipsisLight$1=ellipsisLight,commonVariables$a={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},radioDark={name:"Radio",common:commonDark,self(e){const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:f,heightSmall:b,heightMedium:C,heightLarge:g,lineHeight:x}=e;return Object.assign(Object.assign({},commonVariables$a),{labelLineHeight:x,buttonHeightSmall:b,buttonHeightMedium:C,buttonHeightLarge:g,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:f,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${changeColor(t,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:t,buttonColor:"#0000",buttonColorActive:t,buttonTextColor:a,buttonTextColorActive:o,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${changeColor(t,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${t}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},radioDark$1=radioDark,self$M=e=>{const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:f,heightSmall:b,heightMedium:C,heightLarge:g,lineHeight:x}=e;return Object.assign(Object.assign({},commonVariables$a),{labelLineHeight:x,buttonHeightSmall:b,buttonHeightMedium:C,buttonHeightLarge:g,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:f,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${changeColor(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:o,colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:n,buttonColor:o,buttonColorActive:o,buttonTextColor:a,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${changeColor(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})},radioLight={name:"Radio",common:commonLight,self:self$M},radioLight$1=radioLight,commonVariables$9={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},self$L=e=>{const{primaryColor:n,textColor2:t,dividerColor:o,hoverColor:r,popoverColor:i,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:d,fontSizeLarge:u,fontSizeHuge:f,heightSmall:b,heightMedium:C,heightLarge:g,heightHuge:x,textColor3:v,opacityDisabled:y}=e;return Object.assign(Object.assign({},commonVariables$9),{optionHeightSmall:b,optionHeightMedium:C,optionHeightLarge:g,optionHeightHuge:x,borderRadius:s,fontSizeSmall:l,fontSizeMedium:d,fontSizeLarge:u,fontSizeHuge:f,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:o,suffixColor:t,prefixColor:t,optionColorHover:r,optionColorActive:changeColor(n,{alpha:.1}),groupHeaderTextColor:v,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:y})},dropdownLight={name:"Dropdown",common:commonLight,peers:{Popover:popoverLight$1},self:self$L},dropdownLight$1=dropdownLight,dropdownDark={name:"Dropdown",common:commonDark,peers:{Popover:popoverDark$1},self(e){const{primaryColorSuppl:n,primaryColor:t,popoverColor:o}=e,r=self$L(e);return r.colorInverted=o,r.optionColorActive=changeColor(t,{alpha:.15}),r.optionColorActiveInverted=n,r.optionColorHoverInverted=n,r}},dropdownDark$1=dropdownDark,commonVariables$8={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"},self$K=e=>{const{cardColor:n,modalColor:t,popoverColor:o,textColor2:r,textColor1:i,tableHeaderColor:a,tableColorHover:s,iconColor:l,primaryColor:d,fontWeightStrong:u,borderRadius:f,lineHeight:b,fontSizeSmall:C,fontSizeMedium:g,fontSizeLarge:x,dividerColor:v,heightSmall:y,opacityDisabled:$,tableColorStriped:L}=e;return Object.assign(Object.assign({},commonVariables$8),{actionDividerColor:v,lineHeight:b,borderRadius:f,fontSizeSmall:C,fontSizeMedium:g,fontSizeLarge:x,borderColor:composite(n,v),tdColorHover:composite(n,s),tdColorStriped:composite(n,L),thColor:composite(n,a),thColorHover:composite(composite(n,a),s),tdColor:n,tdTextColor:r,thTextColor:i,thFontWeight:u,thButtonColorHover:s,thIconColor:l,thIconColorActive:d,borderColorModal:composite(t,v),tdColorHoverModal:composite(t,s),tdColorStripedModal:composite(t,L),thColorModal:composite(t,a),thColorHoverModal:composite(composite(t,a),s),tdColorModal:t,borderColorPopover:composite(o,v),tdColorHoverPopover:composite(o,s),tdColorStripedPopover:composite(o,L),thColorPopover:composite(o,a),thColorHoverPopover:composite(composite(o,a),s),tdColorPopover:o,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:d,loadingSize:y,opacityLoading:$})},dataTableLight={name:"DataTable",common:commonLight,peers:{Button:buttonLight$1,Checkbox:checkboxLight$1,Radio:radioLight$1,Pagination:paginationLight$1,Scrollbar:scrollbarLight$1,Empty:emptyLight$1,Popover:popoverLight$1,Ellipsis:ellipsisLight$1,Dropdown:dropdownLight$1},self:self$K},dataTableLight$1=dataTableLight,dataTableDark={name:"DataTable",common:commonDark,peers:{Button:buttonDark$1,Checkbox:checkboxDark$1,Radio:radioDark$1,Pagination:paginationDark$1,Scrollbar:scrollbarDark$1,Empty:emptyDark$1,Popover:popoverDark$1,Ellipsis:ellipsisDark$1,Dropdown:dropdownDark$1},self(e){const n=self$K(e);return n.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",n.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",n}},dataTableDark$1=dataTableDark,tooltipProps=Object.assign(Object.assign({},popoverBaseProps),useTheme.props),NTooltip=defineComponent({name:"Tooltip",props:tooltipProps,__popover__:!0,setup(e){const n=useTheme("Tooltip","-tooltip",void 0,tooltipLight$1,e),t=ref(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(r){t.value.setShow(r)}}),{popoverRef:t,mergedTheme:n,popoverThemeOverrides:computed(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return h(NPopover,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),style$c=cB("ellipsis",{overflow:"hidden"},[cNotM("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),cM("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),cM("cursor-pointer",`
 cursor: pointer;
 `)]);function createLineClampClass(e){return`${e}-ellipsis--line-clamp`}function createCursorClass(e,n){return`${e}-ellipsis--cursor-${n}`}const ellipsisProps=Object.assign(Object.assign({},useTheme.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),__unplugin_components_7=defineComponent({name:"Ellipsis",inheritAttrs:!1,props:ellipsisProps,setup(e,{slots:n,attrs:t}){const{mergedClsPrefixRef:o}=useConfig(e),r=useTheme("Ellipsis","-ellipsis",style$c,ellipsisLight$1,e,o),i=ref(null),a=ref(null),s=ref(null),l=ref(!1),d=computed(()=>{const{lineClamp:v}=e,{value:y}=l;return v!==void 0?{textOverflow:"","-webkit-line-clamp":y?"":v}:{textOverflow:y?"":"ellipsis","-webkit-line-clamp":""}});function u(){let v=!1;const{value:y}=l;if(y)return!0;const{value:$}=i;if($){const{lineClamp:L}=e;if(C($),L!==void 0)v=$.scrollHeight<=$.offsetHeight;else{const{value:P}=a;P&&(v=P.getBoundingClientRect().width<=$.getBoundingClientRect().width)}g($,v)}return v}const f=computed(()=>e.expandTrigger==="click"?()=>{var v;const{value:y}=l;y&&((v=s.value)===null||v===void 0||v.setShow(!1)),l.value=!y}:void 0);onDeactivated(()=>{var v;e.tooltip&&((v=s.value)===null||v===void 0||v.setShow(!1))});const b=()=>h("span",Object.assign({},mergeProps(t,{class:[`${o.value}-ellipsis`,e.lineClamp!==void 0?createLineClampClass(o.value):void 0,e.expandTrigger==="click"?createCursorClass(o.value,"pointer"):void 0],style:d.value}),{ref:"triggerRef",onClick:f.value,onMouseenter:e.expandTrigger==="click"?u:void 0}),e.lineClamp?n:h("span",{ref:"triggerInnerRef"},n));function C(v){if(!v)return;const y=d.value,$=createLineClampClass(o.value);e.lineClamp!==void 0?x(v,$,"add"):x(v,$,"remove");for(const L in y)v.style[L]!==y[L]&&(v.style[L]=y[L])}function g(v,y){const $=createCursorClass(o.value,"pointer");e.expandTrigger==="click"&&!y?x(v,$,"add"):x(v,$,"remove")}function x(v,y,$){$==="add"?v.classList.contains(y)||v.classList.add(y):v.classList.contains(y)&&v.classList.remove(y)}return{mergedTheme:r,triggerRef:i,triggerInnerRef:a,tooltipRef:s,handleClick:f,renderTrigger:b,getTooltipDisabled:u}},render(){var e;const{tooltip:n,renderTrigger:t,$slots:o}=this;if(n){const{mergedTheme:r}=this;return h(NTooltip,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:t,default:(e=o.tooltip)!==null&&e!==void 0?e:o.default})}else return t()}}),NDropdownDivider=defineComponent({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return h("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),self$J=e=>{const{textColorBase:n,opacity1:t,opacity2:o,opacity3:r,opacity4:i,opacity5:a}=e;return{color:n,opacity1Depth:t,opacity2Depth:o,opacity3Depth:r,opacity4Depth:i,opacity5Depth:a}},iconLight={name:"Icon",common:commonLight,self:self$J},iconLight$1=iconLight,iconDark$1={name:"Icon",common:commonDark,self:self$J},iconDark$2=iconDark$1,style$b=cB("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[cM("color-transition",{transition:"color .3s var(--n-bezier)"}),cM("depth",{color:"var(--n-color)"},[c$1("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),c$1("svg",{height:"1em",width:"1em"})]),iconProps=Object.assign(Object.assign({},useTheme.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),NIcon=defineComponent({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:iconProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Icon","-icon",style$b,iconLight$1,e,n),r=computed(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=o.value;if(a!==void 0){const{color:d,[`opacity${a}Depth`]:u}=l;return{"--n-bezier":s,"--n-color":d,"--n-opacity":u}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?useThemeClass("icon",computed(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:computed(()=>{const{size:a,color:s}=e;return{fontSize:formatLength(a),color:s}}),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:o,component:r,onRender:i,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&warn$2("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),h("i",mergeProps(this.$attrs,{role:"img",class:[`${o}-icon`,a,{[`${o}-icon--depth`]:t,[`${o}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?h(r):this.$slots)}}),dropdownMenuInjectionKey="n-dropdown-menu",dropdownInjectionKey="n-dropdown",dropdownOptionInjectionKey="n-dropdown-option";function isSubmenuNode(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function isGroupNode(e){return e.type==="group"}function isDividerNode(e){return e.type==="divider"}function isRenderNode(e){return e.type==="render"}const NDropdownOption=defineComponent({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=inject(dropdownInjectionKey),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:d,renderIconRef:u,labelFieldRef:f,childrenFieldRef:b,renderOptionRef:C,nodePropsRef:g,menuPropsRef:x}=n,v=inject(dropdownOptionInjectionKey,null),y=inject(dropdownMenuInjectionKey),$=inject(popoverBodyInjectionKey),L=computed(()=>e.tmNode.rawNode),P=computed(()=>{const{value:j}=b;return isSubmenuNode(e.tmNode.rawNode,j)}),k=computed(()=>{const{disabled:j}=e.tmNode;return j}),E=computed(()=>{if(!P.value)return!1;const{key:j,disabled:ee}=e.tmNode;if(ee)return!1;const{value:R}=t,{value:K}=o,{value:he}=r,{value:me}=i;return R!==null?me.includes(j):K!==null?me.includes(j)&&me[me.length-1]!==j:he!==null?me.includes(j):!1}),w=computed(()=>o.value===null&&!s.value),T=useDeferredTrue(E,300,w),M=computed(()=>!!(v!=null&&v.enteringSubmenuRef.value)),_=ref(!1);provide(dropdownOptionInjectionKey,{enteringSubmenuRef:_});function J(){_.value=!0}function O(){_.value=!1}function Y(){const{parentKey:j,tmNode:ee}=e;ee.disabled||l.value&&(r.value=j,o.value=null,t.value=ee.key)}function H(){const{tmNode:j}=e;j.disabled||l.value&&t.value!==j.key&&Y()}function z(j){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:ee}=j;ee&&!happensIn({target:ee},"dropdownOption")&&!happensIn({target:ee},"scrollbarRail")&&(t.value=null)}function te(){const{value:j}=P,{tmNode:ee}=e;l.value&&!j&&!ee.disabled&&(n.doSelect(ee.key,ee.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:d,renderIcon:u,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:x,popoverBody:$,animated:s,mergedShowSubmenu:computed(()=>T.value&&!M.value),rawNode:L,hasSubmenu:P,pending:useMemo(()=>{const{value:j}=i,{key:ee}=e.tmNode;return j.includes(ee)}),childActive:useMemo(()=>{const{value:j}=a,{key:ee}=e.tmNode,R=j.findIndex(K=>ee===K);return R===-1?!1:R<j.length-1}),active:useMemo(()=>{const{value:j}=a,{key:ee}=e.tmNode,R=j.findIndex(K=>ee===K);return R===-1?!1:R===j.length-1}),mergedDisabled:k,renderOption:C,nodeProps:g,handleClick:te,handleMouseMove:H,handleMouseEnter:Y,handleMouseLeave:z,handleSubmenuBeforeEnter:J,handleSubmenuAfterEnter:O}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:d,renderOption:u,nodeProps:f,props:b,scrollable:C}=this;let g=null;if(r){const $=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);g=h(NDropdownMenu,Object.assign({},$,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const x={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},v=f==null?void 0:f(o),y=h("div",Object.assign({class:[`${i}-dropdown-option`,v==null?void 0:v.class],"data-dropdown-option":!0},v),h("div",mergeProps(x,b),[h("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[d?d(o):render$1(o.icon)]),h("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(o):render$1((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),h("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?h(NIcon,null,{default:()=>h(ChevronRightIcon,null)}):null)]),this.hasSubmenu?h(VBinder,null,{default:()=>[h(VTarget,null,{default:()=>h("div",{class:`${i}-dropdown-offset-container`},h(VFollower,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>h("div",{class:`${i}-dropdown-menu-wrapper`},t?h(Transition,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>g}):g)}))})]}):null);return u?u({node:y,option:o}):y}}),NDropdownGroupHeader=defineComponent({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=inject(dropdownMenuInjectionKey),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=inject(dropdownInjectionKey);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,l=h("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(s)),h("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},h("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},render$1(s.icon)),h("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):render$1((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),h("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}}),NDropdownGroup=defineComponent({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return h(Fragment,null,h(NDropdownGroupHeader,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:i}=r;return i.show===!1?null:isDividerNode(i)?h(NDropdownDivider,{clsPrefix:t,key:r.key}):r.isGroup?(warn$2("dropdown","`group` node is not allowed to be put in `group` node."),null):h(NDropdownOption,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),NDropdownRenderOption=defineComponent({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return h("div",n,[e==null?void 0:e()])}}),NDropdownMenu=defineComponent({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=inject(dropdownInjectionKey);provide(dropdownMenuInjectionKey,{showIconRef:computed(()=>{const r=n.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:computed(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>isSubmenuNode(l,r));const{rawNode:s}=i;return isSubmenuNode(s,r)})})});const o=ref(null);return provide(modalBodyInjectionKey,null),provide(drawerBodyInjectionKey,null),provide(popoverBodyInjectionKey,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:isRenderNode(i)?h(NDropdownRenderOption,{tmNode:r,key:r.key}):isDividerNode(i)?h(NDropdownDivider,{clsPrefix:n,key:r.key}):isGroupNode(i)?h(NDropdownGroup,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):h(NDropdownOption,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return h("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?h(XScrollbar,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?renderArrow({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),style$a=cB("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[fadeInScaleUpTransition(),cB("dropdown-option",`
 position: relative;
 `,[c$1("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[c$1("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),cB("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[c$1("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),cNotM("disabled",[cM("pending",`
 color: var(--n-option-text-color-hover);
 `,[cE("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),c$1("&::before","background-color: var(--n-option-color-hover);")]),cM("active",`
 color: var(--n-option-text-color-active);
 `,[cE("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),c$1("&::before","background-color: var(--n-option-color-active);")]),cM("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[cE("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),cM("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),cM("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[cE("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[cM("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),cE("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[cM("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),cB("icon",`
 font-size: var(--n-option-icon-size);
 `)]),cE("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),cE("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[cM("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),cB("icon",`
 font-size: var(--n-option-icon-size);
 `)]),cB("dropdown-menu","pointer-events: all;")]),cB("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),cB("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),cB("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),c$1(">",[cB("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),cNotM("scrollable",`
 padding: var(--n-padding);
 `),cM("scrollable",[cE("content",`
 padding: var(--n-padding);
 `)])]),dropdownBaseProps={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},popoverPropKeys=Object.keys(popoverBaseProps),dropdownProps=Object.assign(Object.assign(Object.assign({},popoverBaseProps),dropdownBaseProps),useTheme.props),__unplugin_components_2=defineComponent({name:"Dropdown",inheritAttrs:!1,props:dropdownProps,setup(e){const n=ref(!1),t=useMergedState(toRef(e,"show"),n),o=computed(()=>{const{keyField:O,childrenField:Y}=e;return createTreeMate(e.options,{getKey(H){return H[O]},getDisabled(H){return H.disabled===!0},getIgnored(H){return H.type==="divider"||H.type==="render"},getChildren(H){return H[Y]}})}),r=computed(()=>o.value.treeNodes),i=ref(null),a=ref(null),s=ref(null),l=computed(()=>{var O,Y,H;return(H=(Y=(O=i.value)!==null&&O!==void 0?O:a.value)!==null&&Y!==void 0?Y:s.value)!==null&&H!==void 0?H:null}),d=computed(()=>o.value.getPath(l.value).keyPath),u=computed(()=>o.value.getPath(e.value).keyPath),f=useMemo(()=>e.keyboard&&t.value);useKeyboard({keydown:{ArrowUp:{prevent:!0,handler:k},ArrowRight:{prevent:!0,handler:P},ArrowDown:{prevent:!0,handler:E},ArrowLeft:{prevent:!0,handler:L},Enter:{prevent:!0,handler:w},Escape:$}},f);const{mergedClsPrefixRef:b,inlineThemeDisabled:C}=useConfig(e),g=useTheme("Dropdown","-dropdown",style$a,dropdownLight$1,e,b);provide(dropdownInjectionKey,{labelFieldRef:toRef(e,"labelField"),childrenFieldRef:toRef(e,"childrenField"),renderLabelRef:toRef(e,"renderLabel"),renderIconRef:toRef(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:d,activeKeyPathRef:u,animatedRef:toRef(e,"animated"),mergedShowRef:t,nodePropsRef:toRef(e,"nodeProps"),renderOptionRef:toRef(e,"renderOption"),menuPropsRef:toRef(e,"menuProps"),doSelect:x,doUpdateShow:v}),watch(t,O=>{!e.animated&&!O&&y()});function x(O,Y){const{onSelect:H}=e;H&&call(H,O,Y)}function v(O){const{"onUpdate:show":Y,onUpdateShow:H}=e;Y&&call(Y,O),H&&call(H,O),n.value=O}function y(){i.value=null,a.value=null,s.value=null}function $(){v(!1)}function L(){M("left")}function P(){M("right")}function k(){M("up")}function E(){M("down")}function w(){const O=T();O!=null&&O.isLeaf&&t.value&&(x(O.key,O.rawNode),v(!1))}function T(){var O;const{value:Y}=o,{value:H}=l;return!Y||H===null?null:(O=Y.getNode(H))!==null&&O!==void 0?O:null}function M(O){const{value:Y}=l,{value:{getFirstAvailableNode:H}}=o;let z=null;if(Y===null){const te=H();te!==null&&(z=te.key)}else{const te=T();if(te){let j;switch(O){case"down":j=te.getNext();break;case"up":j=te.getPrev();break;case"right":j=te.getChild();break;case"left":j=te.getParent();break}j&&(z=j.key)}}z!==null&&(i.value=null,a.value=z)}const _=computed(()=>{const{size:O,inverted:Y}=e,{common:{cubicBezierEaseInOut:H},self:z}=g.value,{padding:te,dividerColor:j,borderRadius:ee,optionOpacityDisabled:R,[createKey("optionIconSuffixWidth",O)]:K,[createKey("optionSuffixWidth",O)]:he,[createKey("optionIconPrefixWidth",O)]:me,[createKey("optionPrefixWidth",O)]:He,[createKey("fontSize",O)]:Ce,[createKey("optionHeight",O)]:ye,[createKey("optionIconSize",O)]:de}=z,ge={"--n-bezier":H,"--n-font-size":Ce,"--n-padding":te,"--n-border-radius":ee,"--n-option-height":ye,"--n-option-prefix-width":He,"--n-option-icon-prefix-width":me,"--n-option-suffix-width":he,"--n-option-icon-suffix-width":K,"--n-option-icon-size":de,"--n-divider-color":j,"--n-option-opacity-disabled":R};return Y?(ge["--n-color"]=z.colorInverted,ge["--n-option-color-hover"]=z.optionColorHoverInverted,ge["--n-option-color-active"]=z.optionColorActiveInverted,ge["--n-option-text-color"]=z.optionTextColorInverted,ge["--n-option-text-color-hover"]=z.optionTextColorHoverInverted,ge["--n-option-text-color-active"]=z.optionTextColorActiveInverted,ge["--n-option-text-color-child-active"]=z.optionTextColorChildActiveInverted,ge["--n-prefix-color"]=z.prefixColorInverted,ge["--n-suffix-color"]=z.suffixColorInverted,ge["--n-group-header-text-color"]=z.groupHeaderTextColorInverted):(ge["--n-color"]=z.color,ge["--n-option-color-hover"]=z.optionColorHover,ge["--n-option-color-active"]=z.optionColorActive,ge["--n-option-text-color"]=z.optionTextColor,ge["--n-option-text-color-hover"]=z.optionTextColorHover,ge["--n-option-text-color-active"]=z.optionTextColorActive,ge["--n-option-text-color-child-active"]=z.optionTextColorChildActive,ge["--n-prefix-color"]=z.prefixColor,ge["--n-suffix-color"]=z.suffixColor,ge["--n-group-header-text-color"]=z.groupHeaderTextColor),ge}),J=C?useThemeClass("dropdown",computed(()=>`${e.size[0]}${e.inverted?"i":""}`),_,e):void 0;return{mergedClsPrefix:b,mergedTheme:g,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&y()},doUpdateShow:v,cssVars:C?void 0:_,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender}},render(){const e=(o,r,i,a,s)=>{var l;const{mergedClsPrefix:d,menuProps:u}=this;(l=this.onRender)===null||l===void 0||l.call(this);const f=(u==null?void 0:u(void 0,this.tmNodes.map(C=>C.rawNode)))||{},b={ref:createRefSetter(r),class:[o,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return h(NDropdownMenu,mergeProps(this.$attrs,b,f))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return h(NPopover,Object.assign({},keep(this.$props,popoverPropKeys),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),commonVars$7={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},self$I=e=>{const{popoverColor:n,textColor2:t,primaryColor:o,hoverColor:r,dividerColor:i,opacityDisabled:a,boxShadow2:s,borderRadius:l,iconColor:d,iconColorDisabled:u}=e;return Object.assign(Object.assign({},commonVars$7),{panelColor:n,panelBoxShadow:s,panelDividerColor:i,itemTextColor:t,itemTextColorActive:o,itemColorHover:r,itemOpacityDisabled:a,itemBorderRadius:l,borderRadius:l,iconColor:d,iconColorDisabled:u})},timePickerLight={name:"TimePicker",common:commonLight,peers:{Scrollbar:scrollbarLight$1,Button:buttonLight$1,Input:inputLight$1},self:self$I},timePickerLight$1=timePickerLight,timePickerDark={name:"TimePicker",common:commonDark,peers:{Scrollbar:scrollbarDark$1,Button:buttonDark$1,Input:inputDark$1},self:self$I},timePickerDark$1=timePickerDark,commonVars$6={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},self$H=e=>{const{hoverColor:n,fontSize:t,textColor2:o,textColorDisabled:r,popoverColor:i,primaryColor:a,borderRadiusSmall:s,iconColor:l,iconColorDisabled:d,textColor1:u,dividerColor:f,boxShadow2:b,borderRadius:C,fontWeightStrong:g}=e;return Object.assign(Object.assign({},commonVars$6),{itemFontSize:t,calendarDaysFontSize:t,calendarTitleFontSize:t,itemTextColor:o,itemTextColorDisabled:r,itemTextColorActive:i,itemTextColorCurrent:a,itemColorIncluded:changeColor(a,{alpha:.1}),itemColorHover:n,itemColorDisabled:n,itemColorActive:a,itemBorderRadius:s,panelColor:i,panelTextColor:o,arrowColor:l,calendarTitleTextColor:u,calendarTitleColorHover:n,calendarDaysTextColor:o,panelHeaderDividerColor:f,calendarDaysDividerColor:f,calendarDividerColor:f,panelActionDividerColor:f,panelBoxShadow:b,panelBorderRadius:C,calendarTitleFontWeight:g,scrollItemBorderRadius:C,iconColor:l,iconColorDisabled:d})},datePickerLight={name:"DatePicker",common:commonLight,peers:{Input:inputLight$1,Button:buttonLight$1,TimePicker:timePickerLight$1,Scrollbar:scrollbarLight$1},self:self$H},datePickerLight$1=datePickerLight,datePickerDark={name:"DatePicker",common:commonDark,peers:{Input:inputDark$1,Button:buttonDark$1,TimePicker:timePickerDark$1,Scrollbar:scrollbarDark$1},self(e){const{popoverColor:n,hoverColor:t,primaryColor:o}=e,r=self$H(e);return r.itemColorDisabled=composite(n,t),r.itemColorIncluded=changeColor(o,{alpha:.15}),r.itemColorHover=composite(n,t),r}},datePickerDark$1=datePickerDark;var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const commonVariables$7={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},self$G=e=>{const{tableHeaderColor:n,textColor2:t,textColor1:o,cardColor:r,modalColor:i,popoverColor:a,dividerColor:s,borderRadius:l,fontWeightStrong:d,lineHeight:u,fontSizeSmall:f,fontSizeMedium:b,fontSizeLarge:C}=e;return Object.assign(Object.assign({},commonVariables$7),{lineHeight:u,fontSizeSmall:f,fontSizeMedium:b,fontSizeLarge:C,titleTextColor:o,thColor:composite(r,n),thColorModal:composite(i,n),thColorPopover:composite(a,n),thTextColor:o,thFontWeight:d,tdTextColor:t,tdColor:r,tdColorModal:i,tdColorPopover:a,borderColor:composite(r,s),borderColorModal:composite(i,s),borderColorPopover:composite(a,s),borderRadius:l})},descriptionsLight={name:"Descriptions",common:commonLight,self:self$G},descriptionsLight$1=descriptionsLight,descriptionsDark={name:"Descriptions",common:commonDark,self:self$G},descriptionsDark$1=descriptionsDark,commonVars$5={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},self$F=e=>{const{textColor1:n,textColor2:t,modalColor:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,infoColor:d,successColor:u,warningColor:f,errorColor:b,primaryColor:C,dividerColor:g,borderRadius:x,fontWeightStrong:v,lineHeight:y,fontSize:$}=e;return Object.assign(Object.assign({},commonVars$5),{fontSize:$,lineHeight:y,border:`1px solid ${g}`,titleTextColor:n,textColor:t,color:o,closeColorHover:s,closeColorPressed:l,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeBorderRadius:x,iconColor:C,iconColorInfo:d,iconColorSuccess:u,iconColorWarning:f,iconColorError:b,borderRadius:x,titleFontWeight:v})},dialogLight={name:"Dialog",common:commonLight,peers:{Button:buttonLight$1},self:self$F},dialogLight$1=dialogLight,dialogDark={name:"Dialog",common:commonDark,peers:{Button:buttonDark$1},self:self$F},dialogDark$1=dialogDark,dialogProps={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},dialogPropKeys=keysOf(dialogProps),style$9=c$1([cB("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[cE("icon",{color:"var(--n-icon-color)"}),cM("bordered",{border:"var(--n-border)"}),cM("icon-top",[cE("close",{margin:"var(--n-close-margin)"}),cE("icon",{margin:"var(--n-icon-margin)"}),cE("content",{textAlign:"center"}),cE("title",{justifyContent:"center"}),cE("action",{justifyContent:"center"})]),cM("icon-left",[cE("icon",{margin:"var(--n-icon-margin)"}),cM("closable",[cE("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),cE("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),cE("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[cM("last","margin-bottom: 0;")]),cE("action",`
 display: flex;
 justify-content: flex-end;
 `,[c$1("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),cE("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),cE("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),cB("dialog-icon-container",{display:"flex",justifyContent:"center"})]),insideModal(cB("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),cB("dialog",[asModal(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),iconRenderMap$2={default:()=>h(InfoIcon,null),info:()=>h(InfoIcon,null),success:()=>h(SuccessIcon,null),warning:()=>h(WarningIcon,null),error:()=>h(ErrorIcon,null)},NDialog=defineComponent({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},useTheme.props),dialogProps),setup(e){const{mergedComponentPropsRef:n,mergedClsPrefixRef:t,inlineThemeDisabled:o}=useConfig(e),r=computed(()=>{var f,b;const{iconPlacement:C}=e;return C||((b=(f=n==null?void 0:n.value)===null||f===void 0?void 0:f.Dialog)===null||b===void 0?void 0:b.iconPlacement)||"left"});function i(f){const{onPositiveClick:b}=e;b&&b(f)}function a(f){const{onNegativeClick:b}=e;b&&b(f)}function s(){const{onClose:f}=e;f&&f()}const l=useTheme("Dialog","-dialog",style$9,dialogLight$1,e,t),d=computed(()=>{const{type:f}=e,b=r.value,{common:{cubicBezierEaseInOut:C},self:{fontSize:g,lineHeight:x,border:v,titleTextColor:y,textColor:$,color:L,closeBorderRadius:P,closeColorHover:k,closeColorPressed:E,closeIconColor:w,closeIconColorHover:T,closeIconColorPressed:M,closeIconSize:_,borderRadius:J,titleFontWeight:O,titleFontSize:Y,padding:H,iconSize:z,actionSpace:te,contentMargin:j,closeSize:ee,[b==="top"?"iconMarginIconTop":"iconMargin"]:R,[b==="top"?"closeMarginIconTop":"closeMargin"]:K,[createKey("iconColor",f)]:he}}=l.value;return{"--n-font-size":g,"--n-icon-color":he,"--n-bezier":C,"--n-close-margin":K,"--n-icon-margin":R,"--n-icon-size":z,"--n-close-size":ee,"--n-close-icon-size":_,"--n-close-border-radius":P,"--n-close-color-hover":k,"--n-close-color-pressed":E,"--n-close-icon-color":w,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":M,"--n-color":L,"--n-text-color":$,"--n-border-radius":J,"--n-padding":H,"--n-line-height":x,"--n-border":v,"--n-content-margin":j,"--n-title-font-size":Y,"--n-title-font-weight":O,"--n-title-text-color":y,"--n-action-space":te}}),u=o?useThemeClass("dialog",computed(()=>`${e.type[0]}${r.value[0]}`),d,e):void 0;return{mergedClsPrefix:t,mergedIconPlacement:r,mergedTheme:l,handlePositiveClick:i,handleNegativeClick:a,handleCloseClick:s,cssVars:o?void 0:d,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{bordered:n,mergedIconPlacement:t,cssVars:o,closable:r,showIcon:i,title:a,content:s,action:l,negativeText:d,positiveText:u,positiveButtonProps:f,negativeButtonProps:b,handlePositiveClick:C,handleNegativeClick:g,mergedTheme:x,loading:v,type:y,mergedClsPrefix:$}=this;(e=this.onRender)===null||e===void 0||e.call(this);const L=i?h(NBaseIcon,{clsPrefix:$,class:`${$}-dialog__icon`},{default:()=>resolveWrappedSlot(this.$slots.icon,k=>k||(this.icon?render$1(this.icon):iconRenderMap$2[this.type]()))}):null,P=resolveWrappedSlot(this.$slots.action,k=>k||u||d||l?h("div",{class:`${$}-dialog__action`},k||(l?[render$1(l)]:[this.negativeText&&h(__unplugin_components_1,Object.assign({theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,ghost:!0,size:"small",onClick:g},b),{default:()=>render$1(this.negativeText)}),this.positiveText&&h(__unplugin_components_1,Object.assign({theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,size:"small",type:y==="default"?"primary":y,disabled:v,loading:v,onClick:C},f),{default:()=>render$1(this.positiveText)})])):null);return h("div",{class:[`${$}-dialog`,this.themeClass,this.closable&&`${$}-dialog--closable`,`${$}-dialog--icon-${t}`,n&&`${$}-dialog--bordered`],style:o,role:"dialog"},r?h(NBaseClose,{clsPrefix:$,class:`${$}-dialog__close`,onClick:this.handleCloseClick}):null,i&&t==="top"?h("div",{class:`${$}-dialog-icon-container`},L):null,h("div",{class:`${$}-dialog__title`},i&&t==="left"?L:null,resolveSlot(this.$slots.header,()=>[render$1(a)])),h("div",{class:[`${$}-dialog__content`,P?"":`${$}-dialog__content--last`]},resolveSlot(this.$slots.default,()=>[render$1(s)])),P)}}),dialogProviderInjectionKey="n-dialog-provider",dialogApiInjectionKey="n-dialog-api",dialogReactiveListInjectionKey="n-dialog-reactive-list",self$E=e=>{const{modalColor:n,textColor2:t,boxShadow3:o}=e;return{color:n,textColor:t,boxShadow:o}},modalLight={name:"Modal",common:commonLight,peers:{Scrollbar:scrollbarLight$1,Dialog:dialogLight$1,Card:cardLight$1},self:self$E},modalLight$1=modalLight,modalDark={name:"Modal",common:commonDark,peers:{Scrollbar:scrollbarDark$1,Dialog:dialogDark$1,Card:cardDark$1},self:self$E},modalDark$1=modalDark,presetProps=Object.assign(Object.assign({},cardBaseProps),dialogProps),presetPropsKeys=keysOf(presetProps),NModalBodyWrapper=defineComponent({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},presetProps),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const n=ref(null),t=ref(null),o=ref(e.show),r=ref(null),i=ref(null);watch(toRef(e,"show"),v=>{v&&(o.value=!0)}),useLockHtmlScroll(computed(()=>e.blockScroll&&o.value));const a=inject(modalInjectionKey);function s(){if(a.transformOriginRef.value==="center")return"";const{value:v}=r,{value:y}=i;if(v===null||y===null)return"";if(t.value){const $=t.value.containerScrollTop;return`${v}px ${y+$}px`}return""}function l(v){if(a.transformOriginRef.value==="center")return;const y=a.getMousePosition();if(!y||!t.value)return;const $=t.value.containerScrollTop,{offsetLeft:L,offsetTop:P}=v;if(y){const k=y.y,E=y.x;r.value=-(L-E),i.value=-(P-k-$)}v.style.transformOrigin=s()}function d(v){nextTick(()=>{l(v)})}function u(v){v.style.transformOrigin=s(),e.onBeforeLeave()}function f(){o.value=!1,r.value=null,i.value=null,e.onAfterLeave()}function b(){const{onClose:v}=e;v&&v()}function C(){e.onNegativeClick()}function g(){e.onPositiveClick()}const x=ref(null);return watch(x,v=>{v&&nextTick(()=>{const y=v.el;y&&n.value!==y&&(n.value=y)})}),provide(modalBodyInjectionKey,n),provide(drawerBodyInjectionKey,null),provide(popoverBodyInjectionKey,null),{mergedTheme:a.mergedThemeRef,appear:a.appearRef,isMounted:a.isMountedRef,mergedClsPrefix:a.mergedClsPrefixRef,bodyRef:n,scrollbarRef:t,displayed:o,childNodeRef:x,handlePositiveClick:g,handleNegativeClick:C,handleCloseClick:b,handleAfterLeave:f,handleBeforeLeave:u,handleEnter:d}},render(){const{$slots:e,$attrs:n,handleEnter:t,handleAfterLeave:o,handleBeforeLeave:r,preset:i,mergedClsPrefix:a}=this;let s=null;if(!i){if(s=getFirstSlotVNode(e),!s){warn$2("modal","default slot is empty");return}s=cloneVNode(s),s.props=mergeProps({class:`${a}-modal`},n,s.props||{})}return this.displayDirective==="show"||this.displayed||this.show?withDirectives(h("div",{role:"none",class:`${a}-modal-body-wrapper`},h(NScrollbar,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${a}-modal-scroll-content`},{default:()=>{var l;return[(l=this.renderMask)===null||l===void 0?void 0:l.call(this),h(FocusTrap,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var d;return h(Transition,{name:"fade-in-scale-up-transition",appear:(d=this.appear)!==null&&d!==void 0?d:this.isMounted,onEnter:t,onAfterEnter:this.onAfterEnter,onAfterLeave:o,onBeforeLeave:r},{default:()=>{const u=[[vShow,this.show]],{onClickoutside:f}=this;return f&&u.push([clickoutside$1,this.onClickoutside,void 0,{capture:!0}]),withDirectives(this.preset==="confirm"||this.preset==="dialog"?h(NDialog,Object.assign({},this.$attrs,{class:[`${a}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},keep(this.$props,dialogPropKeys),{"aria-modal":"true"}),e):this.preset==="card"?h(NCard,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${a}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},keep(this.$props,cardBasePropKeys),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=s,u)}})}})]}})),[[vShow,this.displayDirective==="if"||this.displayed||this.show]]):null}}),style$8=c$1([cB("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),cB("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[fadeInTransition({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),cB("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[cB("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),cB("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[fadeInScaleUpTransition({duration:".25s",enterScale:".5"})])]),modalProps=Object.assign(Object.assign(Object.assign(Object.assign({},useTheme.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),presetProps),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),NModal=defineComponent({name:"Modal",inheritAttrs:!1,props:modalProps,setup(e){const n=ref(null),{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:r}=useConfig(e),i=useTheme("Modal","-modal",style$8,modalLight$1,e,t),a=useClicked(64),s=useClickPosition(),l=isMounted(),d=e.internalDialog?inject(dialogProviderInjectionKey,null):null,u=useIsComposing();function f(k){const{onUpdateShow:E,"onUpdate:show":w,onHide:T}=e;E&&call(E,k),w&&call(w,k),T&&!k&&T(k)}function b(){const{onClose:k}=e;k?Promise.resolve(k()).then(E=>{E!==!1&&f(!1)}):f(!1)}function C(){const{onPositiveClick:k}=e;k?Promise.resolve(k()).then(E=>{E!==!1&&f(!1)}):f(!1)}function g(){const{onNegativeClick:k}=e;k?Promise.resolve(k()).then(E=>{E!==!1&&f(!1)}):f(!1)}function x(){const{onBeforeLeave:k,onBeforeHide:E}=e;k&&call(k),E&&E()}function v(){const{onAfterLeave:k,onAfterHide:E}=e;k&&call(k),E&&E()}function y(k){var E;const{onMaskClick:w}=e;w&&w(k),e.maskClosable&&!((E=n.value)===null||E===void 0)&&E.contains(getPreciseEventTarget(k))&&f(!1)}function $(k){var E;(E=e.onEsc)===null||E===void 0||E.call(e),e.show&&e.closeOnEsc&&eventEffectNotPerformed(k)&&!u.value&&f(!1)}provide(modalInjectionKey,{getMousePosition:()=>{if(d){const{clickedRef:k,clickPositionRef:E}=d;if(k.value&&E.value)return E.value}return a.value?s.value:null},mergedClsPrefixRef:t,mergedThemeRef:i,isMountedRef:l,appearRef:toRef(e,"internalAppear"),transformOriginRef:toRef(e,"transformOrigin")});const L=computed(()=>{const{common:{cubicBezierEaseOut:k},self:{boxShadow:E,color:w,textColor:T}}=i.value;return{"--n-bezier-ease-out":k,"--n-box-shadow":E,"--n-color":w,"--n-text-color":T}}),P=r?useThemeClass("theme-class",void 0,L,e):void 0;return{mergedClsPrefix:t,namespace:o,isMounted:l,containerRef:n,presetProps:computed(()=>keep(e,presetPropsKeys)),handleEsc:$,handleAfterLeave:v,handleClickoutside:y,handleBeforeLeave:x,doUpdateShow:f,handleNegativeClick:g,handlePositiveClick:C,handleCloseClick:b,cssVars:r?void 0:L,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){const{mergedClsPrefix:e}=this;return h(LazyTeleport,{to:this.to,show:this.show},{default:()=>{var n;(n=this.onRender)===null||n===void 0||n.call(this);const{unstableShowMask:t}=this;return withDirectives(h("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},h(NModalBodyWrapper,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:t?void 0:this.handleClickoutside,renderMask:t?()=>{var o;return h(Transition,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?h("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[zindexable$1,{zIndex:this.zIndex,enabled:this.show}]])}})}}),exposedDialogEnvProps=Object.assign(Object.assign({},dialogProps),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),NDialogEnvironment=defineComponent({name:"DialogEnvironment",props:Object.assign(Object.assign({},exposedDialogEnvProps),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const n=ref(!0);function t(){const{onInternalAfterLeave:u,internalKey:f,onAfterLeave:b}=e;u&&u(f),b&&b()}function o(u){const{onPositiveClick:f}=e;f?Promise.resolve(f(u)).then(b=>{b!==!1&&l()}):l()}function r(u){const{onNegativeClick:f}=e;f?Promise.resolve(f(u)).then(b=>{b!==!1&&l()}):l()}function i(){const{onClose:u}=e;u?Promise.resolve(u()).then(f=>{f!==!1&&l()}):l()}function a(u){const{onMaskClick:f,maskClosable:b}=e;f&&(f(u),b&&l())}function s(){const{onEsc:u}=e;u&&u()}function l(){n.value=!1}function d(u){n.value=u}return{show:n,hide:l,handleUpdateShow:d,handleAfterLeave:t,handleCloseClick:i,handleNegativeClick:r,handlePositiveClick:o,handleMaskClick:a,handleEsc:s}},render(){const{handlePositiveClick:e,handleUpdateShow:n,handleNegativeClick:t,handleCloseClick:o,handleAfterLeave:r,handleMaskClick:i,handleEsc:a,to:s,maskClosable:l,show:d}=this;return h(NModal,{show:d,onUpdateShow:n,onMaskClick:i,onEsc:a,to:s,maskClosable:l,onAfterEnter:this.onAfterEnter,onAfterLeave:r,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,internalAppear:!0,internalDialog:!0},{default:()=>h(NDialog,Object.assign({},keep(this.$props,dialogPropKeys),{style:this.internalStyle,onClose:o,onNegativeClick:t,onPositiveClick:e}))})}}),dialogProviderProps={injectionKey:String,to:[String,Object]},NDialogProvider=defineComponent({name:"DialogProvider",props:dialogProviderProps,setup(){const e=ref([]),n={};function t(s={}){const l=createId(),d=reactive(Object.assign(Object.assign({},s),{key:l,destroy:()=>{n[`n-dialog-${l}`].hide()}}));return e.value.push(d),d}const o=["info","success","warning","error"].map(s=>l=>t(Object.assign(Object.assign({},l),{type:s})));function r(s){const{value:l}=e;l.splice(l.findIndex(d=>d.key===s),1)}function i(){Object.values(n).forEach(s=>s.hide())}const a={create:t,destroyAll:i,info:o[0],success:o[1],warning:o[2],error:o[3]};return provide(dialogApiInjectionKey,a),provide(dialogProviderInjectionKey,{clickedRef:useClicked(64),clickPositionRef:useClickPosition()}),provide(dialogReactiveListInjectionKey,e),Object.assign(Object.assign({},a),{dialogList:e,dialogInstRefs:n,handleAfterLeave:r})},render(){var e,n;return h(Fragment,null,[this.dialogList.map(t=>h(NDialogEnvironment,omit(t,["destroy","style"],{internalStyle:t.style,to:this.to,ref:o=>{o===null?delete this.dialogInstRefs[`n-dialog-${t.key}`]:this.dialogInstRefs[`n-dialog-${t.key}`]=o},internalKey:t.key,onInternalAfterLeave:this.handleAfterLeave}))),(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)])}});function useDialog(){const e=inject(dialogApiInjectionKey,null);return e===null&&throwError("use-dialog","No outer <n-dialog-provider /> founded."),e}const self$D=e=>{const{textColor1:n,dividerColor:t,fontWeightStrong:o}=e;return{textColor:n,color:t,fontWeight:o}},dividerLight={name:"Divider",common:commonLight,self:self$D},dividerLight$1=dividerLight,dividerDark={name:"Divider",common:commonDark,self:self$D},dividerDark$1=dividerDark,style$7=cB("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[cNotM("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[cNotM("no-title",`
 display: flex;
 align-items: center;
 `)]),cE("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),cM("title-position-left",[cE("line",[cM("left",{width:"28px"})])]),cM("title-position-right",[cE("line",[cM("right",{width:"28px"})])]),cM("dashed",[cE("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),cM("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),cE("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),cNotM("dashed",[cE("line",{backgroundColor:"var(--n-color)"})]),cM("dashed",[cE("line",{borderColor:"var(--n-color)"})]),cM("vertical",{backgroundColor:"var(--n-color)"})]),dividerProps=Object.assign(Object.assign({},useTheme.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),__unplugin_components_6=defineComponent({name:"Divider",props:dividerProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Divider","-divider",style$7,dividerLight$1,e,n),r=computed(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:s,textColor:l,fontWeight:d}}=o.value;return{"--n-bezier":a,"--n-color":s,"--n-text-color":l,"--n-font-weight":d}}),i=t?useThemeClass("divider",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:o,dashed:r,cssVars:i,mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:o,[`${a}-divider--no-title`]:!n.default,[`${a}-divider--dashed`]:r,[`${a}-divider--title-position-${t}`]:n.default&&t}],style:i},o?null:h("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!o&&n.default?h(Fragment,null,h("div",{class:`${a}-divider__title`},this.$slots),h("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),self$C=e=>{const{modalColor:n,textColor1:t,textColor2:o,boxShadow3:r,lineHeight:i,fontWeightStrong:a,dividerColor:s,closeColorHover:l,closeColorPressed:d,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:b,borderRadius:C,primaryColorHover:g}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:n,textColor:o,titleTextColor:t,titleFontSize:"18px",titleFontWeight:a,boxShadow:r,lineHeight:i,headerBorderBottom:`1px solid ${s}`,footerBorderTop:`1px solid ${s}`,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:b,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:d,closeBorderRadius:C,resizableTriggerColorHover:g}},drawerLight={name:"Drawer",common:commonLight,peers:{Scrollbar:scrollbarLight$1},self:self$C},drawerLight$1=drawerLight,drawerDark={name:"Drawer",common:commonDark,peers:{Scrollbar:scrollbarDark$1},self:self$C},drawerDark$1=drawerDark,commonVariables$6={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},dynamicInputDark={name:"DynamicInput",common:commonDark,peers:{Input:inputDark$1,Button:buttonDark$1},self(){return commonVariables$6}},dynamicInputDark$1=dynamicInputDark,self$B=()=>commonVariables$6,dynamicInputLight={name:"DynamicInput",common:commonLight,peers:{Input:inputLight$1,Button:buttonLight$1},self:self$B},dynamicInputLight$1=dynamicInputLight,commonVars$4={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},spaceDark={name:"Space",self(){return commonVars$4}},spaceDark$1=spaceDark,self$A=()=>commonVars$4,spaceLight={name:"Space",self:self$A},spaceLight$1=spaceLight;let supportFlexGap;const ensureSupportFlexGap=()=>{if(!isBrowser$2)return!0;if(supportFlexGap===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),supportFlexGap=n}return supportFlexGap},spaceProps=Object.assign(Object.assign({},useTheme.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),__unplugin_components_3=defineComponent({name:"Space",props:spaceProps,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=useConfig(e),o=useTheme("Space","-space",void 0,spaceLight$1,e,n),r=useRtl("Space",t,n);return{useGap:ensureSupportFlexGap(),rtlEnabled:r,mergedClsPrefix:n,margin:computed(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[createKey("gap",i)]:a}}=o.value,{row:s,col:l}=getGap(a);return{horizontal:depx(l),vertical:depx(s)}})}},render(){const{vertical:e,align:n,inline:t,justify:o,itemStyle:r,margin:i,wrap:a,mergedClsPrefix:s,rtlEnabled:l,useGap:d,wrapItem:u,internalUseGap:f}=this,b=flatten$2(getSlot$1(this));if(!b.length)return null;const C=`${i.horizontal}px`,g=`${i.horizontal/2}px`,x=`${i.vertical}px`,v=`${i.vertical/2}px`,y=b.length-1,$=o.startsWith("space-");return h("div",{role:"none",class:[`${s}-space`,l&&`${s}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!a||e?"nowrap":"wrap",marginTop:d||e?"":`-${v}`,marginBottom:d||e?"":`-${v}`,alignItems:n,gap:d?`${i.vertical}px ${i.horizontal}px`:""}},!u&&(d||f)?b:b.map((L,P)=>h("div",{role:"none",style:[r,{maxWidth:"100%"},d?"":e?{marginBottom:P!==y?x:""}:l?{marginLeft:$?o==="space-between"&&P===y?"":g:P!==y?C:"",marginRight:$?o==="space-between"&&P===0?"":g:"",paddingTop:v,paddingBottom:v}:{marginRight:$?o==="space-between"&&P===y?"":g:P!==y?C:"",marginLeft:$?o==="space-between"&&P===0?"":g:"",paddingTop:v,paddingBottom:v}]},L)))}}),dynamicTagsDark={name:"DynamicTags",common:commonDark,peers:{Input:inputDark$1,Button:buttonDark$1,Tag:tagDark$1,Space:spaceDark$1},self(){return{inputWidth:"64px"}}},dynamicTagsDark$1=dynamicTagsDark,dynamicTagsLight={name:"DynamicTags",common:commonLight,peers:{Input:inputLight$1,Button:buttonLight$1,Tag:tagLight$1,Space:spaceLight$1},self(){return{inputWidth:"64px"}}},dynamicTagsLight$1=dynamicTagsLight,elementDark={name:"Element",common:commonDark},elementDark$1=elementDark,elementLight={name:"Element",common:commonLight},elementLight$1=elementLight,elementProps=Object.assign(Object.assign({},useTheme.props),{tag:{type:String,default:"div"}}),NEl=defineComponent({name:"Element",alias:["El"],props:elementProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Element","-element",void 0,elementLight$1,e,n),r=computed(()=>{const{common:a}=o.value;return Object.keys(a).reduce((s,l)=>(s[`--${kebabCase$1(l)}`]=a[l],s),{})}),i=t?useThemeClass("element",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{tag:n,mergedClsPrefix:t,cssVars:o,themeClass:r,onRender:i,$slots:a}=this;return i==null||i(),h(n,{role:"none",class:[`${t}-element`,r],style:o},(e=a.default)===null||e===void 0?void 0:e.call(a))}}),commonVariables$5={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},self$z=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,textColor1:r,errorColor:i,warningColor:a,lineHeight:s,textColor3:l}=e;return Object.assign(Object.assign({},commonVariables$5),{blankHeightSmall:n,blankHeightMedium:t,blankHeightLarge:o,lineHeight:s,labelTextColor:r,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:a,feedbackTextColor:l})},formLight={name:"Form",common:commonLight,self:self$z},formLight$1=formLight,formItemDark={name:"Form",common:commonDark,self:self$z},formDark=formItemDark,defaultSpan$1=1,gridInjectionKey="n-grid",defaultSpan=1,gridItemProps={span:{type:[Number,String],default:defaultSpan},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},__unplugin_components_8=defineComponent({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:gridItemProps,setup(){const{isSsrRef:e,xGapRef:n,itemStyleRef:t,overflowRef:o,layoutShiftDisabledRef:r}=inject(gridInjectionKey),i=getCurrentInstance();return{overflow:o,itemStyle:t,layoutShiftDisabled:r,mergedXGap:computed(()=>pxfy(n.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=defaultSpan,privateShow:s=!0,privateColStart:l=void 0,privateOffset:d=0}=i.vnode.props,{value:u}=n,f=pxfy(u||0);return{display:s?"":"none",gridColumn:`${l??`span ${a}`} / span ${a}`,marginLeft:d?`calc((100% - (${a} - 1) * ${f}) / ${a} * ${d} + ${f} * ${d})`:""}}}},render(){var e,n;if(this.layoutShiftDisabled){const{span:t,offset:o,mergedXGap:r}=this;return h("div",{style:{gridColumn:`span ${t} / span ${t}`,marginLeft:o?`calc((100% - (${t} - 1) * ${r}) / ${t} * ${o} + ${r} * ${o})`:""}},this.$slots)}return h("div",{style:[this.itemStyle,this.deriveStyle()]},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e,{overflow:this.overflow}))}}),gradientTextDark={name:"GradientText",common:commonDark,self(e){const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,primaryColorSuppl:a,successColorSuppl:s,warningColorSuppl:l,errorColorSuppl:d,infoColorSuppl:u,fontWeightStrong:f}=e;return{fontWeight:f,rotate:"252deg",colorStartPrimary:n,colorEndPrimary:a,colorStartInfo:i,colorEndInfo:u,colorStartWarning:o,colorEndWarning:l,colorStartError:r,colorEndError:d,colorStartSuccess:t,colorEndSuccess:s}}},gradientTextDark$1=gradientTextDark,self$y=e=>{const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,fontWeightStrong:a}=e;return{fontWeight:a,rotate:"252deg",colorStartPrimary:changeColor(n,{alpha:.6}),colorEndPrimary:n,colorStartInfo:changeColor(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:changeColor(o,{alpha:.6}),colorEndWarning:o,colorStartError:changeColor(r,{alpha:.6}),colorEndError:r,colorStartSuccess:changeColor(t,{alpha:.6}),colorEndSuccess:t}},gradientTextLight={name:"GradientText",common:commonLight,self:self$y},gradientTextLight$1=gradientTextLight,defaultBreakpoints={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},defaultCols=24,SSR_ATTR_NAME="__ssr__",gridProps={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:defaultCols},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},__unplugin_components_9=defineComponent({name:"Grid",inheritAttrs:!1,props:gridProps,setup(e){const{mergedClsPrefixRef:n,mergedBreakpointsRef:t}=useConfig(e),o=/^\d+$/,r=ref(void 0),i=useBreakpoints((t==null?void 0:t.value)||defaultBreakpoints),a=useMemo(()=>!!(e.itemResponsive||!o.test(e.cols.toString())||!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))),s=computed(()=>{if(a.value)return e.responsive==="self"?r.value:i.value}),l=useMemo(()=>{var y;return(y=Number(parseResponsivePropValue(e.cols.toString(),s.value)))!==null&&y!==void 0?y:defaultCols}),d=useMemo(()=>parseResponsivePropValue(e.xGap.toString(),s.value)),u=useMemo(()=>parseResponsivePropValue(e.yGap.toString(),s.value)),f=y=>{r.value=y.contentRect.width},b=y=>{beforeNextFrameOnce(f,y)},C=ref(!1),g=computed(()=>{if(e.responsive==="self")return b}),x=ref(!1),v=ref();return onMounted(()=>{const{value:y}=v;y&&y.hasAttribute(SSR_ATTR_NAME)&&(y.removeAttribute(SSR_ATTR_NAME),x.value=!0)}),provide(gridInjectionKey,{layoutShiftDisabledRef:toRef(e,"layoutShiftDisabled"),isSsrRef:x,itemStyleRef:toRef(e,"itemStyle"),xGapRef:d,overflowRef:C}),{isSsr:!isBrowser$2,contentEl:v,mergedClsPrefix:n,style:computed(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:pxfy(e.xGap),rowGap:pxfy(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${l.value}, minmax(0, 1fr))`,columnGap:pxfy(d.value),rowGap:pxfy(u.value)}),isResponsive:a,responsiveQuery:s,responsiveCols:l,handleResize:g,overflow:C}},render(){if(this.layoutShiftDisabled)return h("div",mergeProps({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var n,t,o,r,i,a,s;this.overflow=!1;const l=flatten$2(getSlot$1(this)),d=[],{collapsed:u,collapsedRows:f,responsiveCols:b,responsiveQuery:C}=this;l.forEach($=>{var L,P,k,E;if(((L=$==null?void 0:$.type)===null||L===void 0?void 0:L.__GRID_ITEM__)!==!0)return;if(isNodeVShowFalse($)){const M=cloneVNode($);M.props?M.props.privateShow=!1:M.props={privateShow:!1},d.push({child:M,rawChildSpan:0});return}$.dirs=((P=$.dirs)===null||P===void 0?void 0:P.filter(({dir:M})=>M!==vShow))||null;const w=cloneVNode($),T=Number((E=parseResponsivePropValue((k=w.props)===null||k===void 0?void 0:k.span,C))!==null&&E!==void 0?E:defaultSpan$1);T!==0&&d.push({child:w,rawChildSpan:T})});let g=0;const x=(n=d[d.length-1])===null||n===void 0?void 0:n.child;if(x!=null&&x.props){const $=(t=x.props)===null||t===void 0?void 0:t.suffix;$!==void 0&&$!==!1&&(g=(r=(o=x.props)===null||o===void 0?void 0:o.span)!==null&&r!==void 0?r:defaultSpan$1,x.props.privateSpan=g,x.props.privateColStart=b+1-g,x.props.privateShow=(i=x.props.privateShow)!==null&&i!==void 0?i:!0)}let v=0,y=!1;for(const{child:$,rawChildSpan:L}of d){if(y&&(this.overflow=!0),!y){const P=Number((s=parseResponsivePropValue((a=$.props)===null||a===void 0?void 0:a.offset,C))!==null&&s!==void 0?s:0),k=Math.min(L+P,b);if($.props?($.props.privateSpan=k,$.props.privateOffset=P):$.props={privateSpan:k,privateOffset:P},u){const E=v%b;k+E>b&&(v+=b-E),k+v+g>f*b?y=!0:v+=k}}y&&($.props?$.props.privateShow!==!0&&($.props.privateShow=!1):$.props={privateShow:!1})}return h("div",mergeProps({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[SSR_ATTR_NAME]:this.isSsr||void 0},this.$attrs),d.map(({child:$})=>$))};return this.isResponsive&&this.responsive==="self"?h(VResizeObserver,{onResize:this.handleResize},{default:e}):e()}}),self$x=e=>{const{primaryColor:n,baseColor:t}=e;return{color:n,iconColor:t}},iconWrapperLight={name:"IconWrapper",common:commonLight,self:self$x},iconWrapperLight$1=iconWrapperLight,iconDark={name:"IconWrapper",common:commonDark,self:self$x},iconWrapperDark=iconDark;function self$w(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const imageLight={name:"Image",common:commonLight,peers:{Tooltip:tooltipLight$1},self:self$w},commonVars$3={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},self$v=e=>{const{textColor2:n,successColor:t,infoColor:o,warningColor:r,errorColor:i,popoverColor:a,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:d,closeColorHover:u,closeColorPressed:f,textColor1:b,textColor3:C,borderRadius:g,fontWeightStrong:x,boxShadow2:v,lineHeight:y,fontSize:$}=e;return Object.assign(Object.assign({},commonVars$3),{borderRadius:g,lineHeight:y,fontSize:$,headerFontWeight:x,iconColor:n,iconColorSuccess:t,iconColorInfo:o,iconColorWarning:r,iconColorError:i,color:a,textColor:n,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:d,closeBorderRadius:g,closeColorHover:u,closeColorPressed:f,headerTextColor:b,descriptionTextColor:C,actionTextColor:n,boxShadow:v})},notificationLight={name:"Notification",common:commonLight,peers:{Scrollbar:scrollbarLight$1},self:self$v},notificationLight$1=notificationLight,notificationDark={name:"Notification",common:commonDark,peers:{Scrollbar:scrollbarDark$1},self:self$v},notificationDark$1=notificationDark,commonVariables$4={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},self$u=e=>{const{textColor2:n,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,infoColor:i,successColor:a,errorColor:s,warningColor:l,popoverColor:d,boxShadow2:u,primaryColor:f,lineHeight:b,borderRadius:C,closeColorHover:g,closeColorPressed:x}=e;return Object.assign(Object.assign({},commonVariables$4),{closeBorderRadius:C,textColor:n,textColorInfo:n,textColorSuccess:n,textColorError:n,textColorWarning:n,textColorLoading:n,color:d,colorInfo:d,colorSuccess:d,colorError:d,colorWarning:d,colorLoading:d,boxShadow:u,boxShadowInfo:u,boxShadowSuccess:u,boxShadowError:u,boxShadowWarning:u,boxShadowLoading:u,iconColor:n,iconColorInfo:i,iconColorSuccess:a,iconColorWarning:l,iconColorError:s,iconColorLoading:f,closeColorHover:g,closeColorPressed:x,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,closeColorHoverInfo:g,closeColorPressedInfo:x,closeIconColorInfo:t,closeIconColorHoverInfo:o,closeIconColorPressedInfo:r,closeColorHoverSuccess:g,closeColorPressedSuccess:x,closeIconColorSuccess:t,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:r,closeColorHoverError:g,closeColorPressedError:x,closeIconColorError:t,closeIconColorHoverError:o,closeIconColorPressedError:r,closeColorHoverWarning:g,closeColorPressedWarning:x,closeIconColorWarning:t,closeIconColorHoverWarning:o,closeIconColorPressedWarning:r,closeColorHoverLoading:g,closeColorPressedLoading:x,closeIconColorLoading:t,closeIconColorHoverLoading:o,closeIconColorPressedLoading:r,loadingColor:f,lineHeight:b,borderRadius:C})},messageLight={name:"Message",common:commonLight,self:self$u},messageLight$1=messageLight,messageDark={name:"Message",common:commonDark,self:self$u},messageDark$1=messageDark,buttonGroupDark={name:"ButtonGroup",common:commonDark},buttonGroupDark$1=buttonGroupDark,buttonGroupLight={name:"ButtonGroup",common:commonLight},buttonGroupLight$1=buttonGroupLight,inputNumberDark={name:"InputNumber",common:commonDark,peers:{Button:buttonDark$1,Input:inputDark$1},self(e){const{textColorDisabled:n}=e;return{iconColorDisabled:n}}},inputNumberDark$1=inputNumberDark,self$t=e=>{const{textColorDisabled:n}=e;return{iconColorDisabled:n}},inputNumberLight={name:"InputNumber",common:commonLight,peers:{Button:buttonLight$1,Input:inputLight$1},self:self$t},inputNumberLight$1=inputNumberLight,layoutDark={name:"Layout",common:commonDark,peers:{Scrollbar:scrollbarDark$1},self(e){const{textColor2:n,bodyColor:t,popoverColor:o,cardColor:r,dividerColor:i,scrollbarColor:a,scrollbarColorHover:s}=e;return{textColor:n,textColorInverted:n,color:t,colorEmbedded:t,headerColor:r,headerColorInverted:r,footerColor:r,footerColorInverted:r,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:r,siderColorInverted:r,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:o,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:composite(t,a),siderToggleBarColorHover:composite(t,s),__invertScrollbar:"false"}}},layoutDark$1=layoutDark,self$s=e=>{const{baseColor:n,textColor2:t,bodyColor:o,cardColor:r,dividerColor:i,actionColor:a,scrollbarColor:s,scrollbarColorHover:l,invertedColor:d}=e;return{textColor:t,textColorInverted:"#FFF",color:o,colorEmbedded:a,headerColor:r,headerColorInverted:d,footerColor:a,footerColorInverted:d,headerBorderColor:i,headerBorderColorInverted:d,footerBorderColor:i,footerBorderColorInverted:d,siderBorderColor:i,siderBorderColorInverted:d,siderColor:r,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:composite(o,s),siderToggleBarColorHover:composite(o,l),__invertScrollbar:"true"}},layoutLight={name:"Layout",common:commonLight,peers:{Scrollbar:scrollbarLight$1},self:self$s},layoutLight$1=layoutLight,self$r=e=>{const{textColor2:n,cardColor:t,modalColor:o,popoverColor:r,dividerColor:i,borderRadius:a,fontSize:s,hoverColor:l}=e;return{textColor:n,color:t,colorHover:l,colorModal:o,colorHoverModal:composite(o,l),colorPopover:r,colorHoverPopover:composite(r,l),borderColor:i,borderColorModal:composite(o,i),borderColorPopover:composite(r,i),borderRadius:a,fontSize:s}},listLight={name:"List",common:commonLight,self:self$r},listLight$1=listLight,listDark$1={name:"List",common:commonDark,self:self$r},listDark$2=listDark$1,loadingBarDark={name:"LoadingBar",common:commonDark,self(e){const{primaryColor:n}=e;return{colorError:"red",colorLoading:n,height:"2px"}}},loadingBarDark$1=loadingBarDark,self$q=e=>{const{primaryColor:n,errorColor:t}=e;return{colorError:t,colorLoading:n,height:"2px"}},loadingBarLight={name:"LoadingBar",common:commonLight,self:self$q},loadingBarLight$1=loadingBarLight,logDark={name:"Log",common:commonDark,peers:{Scrollbar:scrollbarDark$1,Code:codeDark$1},self(e){const{textColor2:n,inputColor:t,fontSize:o,primaryColor:r}=e;return{loaderFontSize:o,loaderTextColor:n,loaderColor:t,loaderBorder:"1px solid #0000",loadingColor:r}}},logDark$1=logDark,self$p=e=>{const{textColor2:n,modalColor:t,borderColor:o,fontSize:r,primaryColor:i}=e;return{loaderFontSize:r,loaderTextColor:n,loaderColor:t,loaderBorder:`1px solid ${o}`,loadingColor:i}},logLight={name:"Log",common:commonLight,peers:{Scrollbar:scrollbarLight$1,Code:codeLight$1},self:self$p},logLight$1=logLight,listDark={name:"Mention",common:commonDark,peers:{InternalSelectMenu:internalSelectMenuDark$1,Input:inputDark$1},self(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}},mentionDark=listDark,self$o=e=>{const{boxShadow2:n}=e;return{menuBoxShadow:n}},mentionLight={name:"Mention",common:commonLight,peers:{InternalSelectMenu:internalSelectMenuLight$1,Input:inputLight$1},self:self$o},mentionLight$1=mentionLight;function createPartialInvertedVars(e,n,t,o){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:o}}const self$n=e=>{const{borderRadius:n,textColor3:t,primaryColor:o,textColor2:r,textColor1:i,fontSize:a,dividerColor:s,hoverColor:l,primaryColorHover:d}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:changeColor(o,{alpha:.1}),itemColorActiveHover:changeColor(o,{alpha:.1}),itemColorActiveCollapsed:changeColor(o,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:o,itemTextColorActiveHover:o,itemTextColorChildActive:o,itemTextColorChildActiveHover:o,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:d,itemTextColorActiveHorizontal:o,itemTextColorActiveHoverHorizontal:o,itemTextColorChildActiveHorizontal:o,itemTextColorChildActiveHoverHorizontal:o,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:o,itemIconColorActiveHover:o,itemIconColorChildActive:o,itemIconColorChildActiveHover:o,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:d,itemIconColorActiveHorizontal:o,itemIconColorActiveHoverHorizontal:o,itemIconColorChildActiveHorizontal:o,itemIconColorChildActiveHoverHorizontal:o,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:o,arrowColorActiveHover:o,arrowColorChildActive:o,arrowColorChildActiveHover:o,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:s},createPartialInvertedVars("#BBB",o,"#FFF","#AAA"))},menuLight={name:"Menu",common:commonLight,peers:{Tooltip:tooltipLight$1,Dropdown:dropdownLight$1},self:self$n},menuLight$1=menuLight,menuDark={name:"Menu",common:commonDark,peers:{Tooltip:tooltipDark$1,Dropdown:dropdownDark$1},self(e){const{primaryColor:n,primaryColorSuppl:t}=e,o=self$n(e);return o.itemColorActive=changeColor(n,{alpha:.15}),o.itemColorActiveHover=changeColor(n,{alpha:.15}),o.itemColorActiveCollapsed=changeColor(n,{alpha:.15}),o.itemColorActiveInverted=t,o.itemColorActiveHoverInverted=t,o.itemColorActiveCollapsedInverted=t,o}},menuDark$1=menuDark,common={titleFontSize:"18px",backSize:"22px"};function self$m(e){const{textColor1:n,textColor2:t,textColor3:o,fontSize:r,fontWeightStrong:i,primaryColorHover:a,primaryColorPressed:s}=e;return Object.assign(Object.assign({},common),{titleFontWeight:i,fontSize:r,titleTextColor:n,backColor:t,backColorHover:a,backColorPressed:s,subtitleTextColor:o})}const pageHeaderLight={name:"PageHeader",common:commonLight,self:self$m},pageHeaderDark={name:"PageHeader",common:commonDark,self:self$m},commonVars$2={iconSize:"22px"},self$l=e=>{const{fontSize:n,warningColor:t}=e;return Object.assign(Object.assign({},commonVars$2),{fontSize:n,iconColor:t})},popconfirmLight={name:"Popconfirm",common:commonLight,peers:{Button:buttonLight$1,Popover:popoverLight$1},self:self$l},popconfirmLight$1=popconfirmLight,popconfirmDark={name:"Popconfirm",common:commonDark,peers:{Button:buttonDark$1,Popover:popoverDark$1},self:self$l},popconfirmDark$1=popconfirmDark,self$k=e=>{const{infoColor:n,successColor:t,warningColor:o,errorColor:r,textColor2:i,progressRailColor:a,fontSize:s,fontWeight:l}=e;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:l,railColor:a,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:n,iconColorInfo:n,iconColorSuccess:t,iconColorWarning:o,iconColorError:r,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:n,fillColorInfo:n,fillColorSuccess:t,fillColorWarning:o,fillColorError:r,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},progressLight={name:"Progress",common:commonLight,self:self$k},progressLight$1=progressLight,progressDark={name:"Progress",common:commonDark,self(e){const n=self$k(e);return n.textColorLineInner="rgb(0, 0, 0)",n.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",n}},progressDark$1=progressDark,rateDark={name:"Rate",common:commonDark,self(e){const{railColor:n}=e;return{itemColor:n,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},rateDark$1=rateDark,self$j=e=>{const{railColor:n}=e;return{itemColor:n,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},themeLight={name:"Rate",common:commonLight,self:self$j},rateLight=themeLight,commonVariables$3={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0},self$i=e=>{const{textColor2:n,textColor1:t,errorColor:o,successColor:r,infoColor:i,warningColor:a,lineHeight:s,fontWeightStrong:l}=e;return Object.assign(Object.assign({},commonVariables$3),{lineHeight:s,titleFontWeight:l,titleTextColor:t,textColor:n,iconColorError:o,iconColorSuccess:r,iconColorInfo:i,iconColorWarning:a})},resultLight={name:"Result",common:commonLight,self:self$i},resultLight$1=resultLight,resultDark={name:"Result",common:commonDark,self:self$i},resultDark$1=resultDark,sizeVariables$3={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},sliderDark={name:"Slider",common:commonDark,self(e){const n="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:t,modalColor:o,primaryColorSuppl:r,popoverColor:i,textColor2:a,cardColor:s,borderRadius:l,fontSize:d,opacityDisabled:u}=e;return Object.assign(Object.assign({},sizeVariables$3),{fontSize:d,markFontSize:d,railColor:t,railColorHover:t,fillColor:r,fillColorHover:r,opacityDisabled:u,handleColor:"#FFF",dotColor:s,dotColorModal:o,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:n,indicatorTextColor:a,indicatorBorderRadius:l,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})}},sliderDark$1=sliderDark,self$h=e=>{const n="rgba(0, 0, 0, .85)",t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:r,baseColor:i,cardColor:a,modalColor:s,popoverColor:l,borderRadius:d,fontSize:u,opacityDisabled:f}=e;return Object.assign(Object.assign({},sizeVariables$3),{fontSize:u,markFontSize:u,railColor:o,railColorHover:o,fillColor:r,fillColorHover:r,opacityDisabled:f,handleColor:"#FFF",dotColor:a,dotColorModal:s,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:n,indicatorBoxShadow:t,indicatorTextColor:i,indicatorBorderRadius:d,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})},sliderLight={name:"Slider",common:commonLight,self:self$h},sliderLight$1=sliderLight,self$g=e=>{const{opacityDisabled:n,heightTiny:t,heightSmall:o,heightMedium:r,heightLarge:i,heightHuge:a,primaryColor:s,fontSize:l}=e;return{fontSize:l,textColor:s,sizeTiny:t,sizeSmall:o,sizeMedium:r,sizeLarge:i,sizeHuge:a,color:s,opacitySpinning:n}},spinLight={name:"Spin",common:commonLight,self:self$g},spinLight$1=spinLight,spinDark={name:"Spin",common:commonDark,self:self$g},spinDark$1=spinDark,self$f=e=>{const{textColor2:n,textColor3:t,fontSize:o,fontWeight:r}=e;return{labelFontSize:o,labelFontWeight:r,valueFontWeight:r,valueFontSize:"24px",labelTextColor:t,valuePrefixTextColor:n,valueSuffixTextColor:n,valueTextColor:n}},statisticLight={name:"Statistic",common:commonLight,self:self$f},statisticLight$1=statisticLight,statisticDark={name:"Statistic",common:commonDark,self:self$f},statisticDark$1=statisticDark,commonVariables$2={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},self$e=e=>{const{fontWeightStrong:n,baseColor:t,textColorDisabled:o,primaryColor:r,errorColor:i,textColor1:a,textColor2:s}=e;return Object.assign(Object.assign({},commonVariables$2),{stepHeaderFontWeight:n,indicatorTextColorProcess:t,indicatorTextColorWait:o,indicatorTextColorFinish:r,indicatorTextColorError:i,indicatorBorderColorProcess:r,indicatorBorderColorWait:o,indicatorBorderColorFinish:r,indicatorBorderColorError:i,indicatorColorProcess:r,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:o,splitorColorWait:o,splitorColorFinish:r,splitorColorError:o,headerTextColorProcess:a,headerTextColorWait:o,headerTextColorFinish:o,headerTextColorError:i,descriptionTextColorProcess:s,descriptionTextColorWait:o,descriptionTextColorFinish:o,descriptionTextColorError:i})},stepsLight={name:"Steps",common:commonLight,self:self$e},stepsLight$1=stepsLight,stepsDark={name:"Steps",common:commonDark,self:self$e},stepsDark$1=stepsDark,commonVars$1={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},switchDark={name:"Switch",common:commonDark,self(e){const{primaryColorSuppl:n,opacityDisabled:t,borderRadius:o,primaryColor:r,textColor2:i,baseColor:a}=e,s="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},commonVars$1),{iconColor:a,textColor:i,loadingColor:n,opacityDisabled:t,railColor:s,railColorActive:n,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 8px 0 ${changeColor(r,{alpha:.3})}`})}},switchDark$1=switchDark,self$d=e=>{const{primaryColor:n,opacityDisabled:t,borderRadius:o,textColor3:r}=e,i="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},commonVars$1),{iconColor:r,textColor:"white",loadingColor:n,opacityDisabled:t,railColor:i,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${changeColor(n,{alpha:.2})}`})},switchLight={name:"Switch",common:commonLight,self:self$d},switchLight$1=switchLight,sizeVariables$2={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},self$c=e=>{const{dividerColor:n,cardColor:t,modalColor:o,popoverColor:r,tableHeaderColor:i,tableColorStriped:a,textColor1:s,textColor2:l,borderRadius:d,fontWeightStrong:u,lineHeight:f,fontSizeSmall:b,fontSizeMedium:C,fontSizeLarge:g}=e;return Object.assign(Object.assign({},sizeVariables$2),{fontSizeSmall:b,fontSizeMedium:C,fontSizeLarge:g,lineHeight:f,borderRadius:d,borderColor:composite(t,n),borderColorModal:composite(o,n),borderColorPopover:composite(r,n),tdColor:t,tdColorModal:o,tdColorPopover:r,tdColorStriped:composite(t,a),tdColorStripedModal:composite(o,a),tdColorStripedPopover:composite(r,a),thColor:composite(t,i),thColorModal:composite(o,i),thColorPopover:composite(r,i),thTextColor:s,tdTextColor:l,thFontWeight:u})},tableLight={name:"Table",common:commonLight,self:self$c},tableLight$1=tableLight,tableDark={name:"Table",common:commonDark,self:self$c},tableDark$1=tableDark,sizeVariables$1={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},self$b=e=>{const{textColor2:n,primaryColor:t,textColorDisabled:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,tabColor:d,baseColor:u,dividerColor:f,fontWeight:b,textColor1:C,borderRadius:g,fontSize:x,fontWeightStrong:v}=e;return Object.assign(Object.assign({},sizeVariables$1),{colorSegment:d,tabFontSizeCard:x,tabTextColorLine:C,tabTextColorActiveLine:t,tabTextColorHoverLine:t,tabTextColorDisabledLine:o,tabTextColorSegment:C,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:o,tabTextColorBar:C,tabTextColorActiveBar:t,tabTextColorHoverBar:t,tabTextColorDisabledBar:o,tabTextColorCard:C,tabTextColorHoverCard:C,tabTextColorActiveCard:t,tabTextColorDisabledCard:o,barColor:t,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,closeBorderRadius:g,tabColor:d,tabColorSegment:u,tabBorderColor:f,tabFontWeightActive:b,tabFontWeight:b,tabBorderRadius:g,paneTextColor:n,fontWeightStrong:v})},tabsLight={name:"Tabs",common:commonLight,self:self$b},tabsLight$1=tabsLight,tabsDark={name:"Tabs",common:commonDark,self(e){const n=self$b(e),{inputColor:t}=e;return n.colorSegment=t,n.tabColorSegment=t,n}},tabsDark$1=tabsDark,self$a=e=>{const{textColor1:n,textColor2:t,fontWeightStrong:o,fontSize:r}=e;return{fontSize:r,titleTextColor:n,textColor:t,titleFontWeight:o}},thingLight={name:"Thing",common:commonLight,self:self$a},thingLight$1=thingLight,thingDark={name:"Thing",common:commonDark,self:self$a},thingDark$1=thingDark,sizeVariables={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},timelineDark={name:"Timeline",common:commonDark,self(e){const{textColor3:n,infoColorSuppl:t,errorColorSuppl:o,successColorSuppl:r,warningColorSuppl:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:d,fontSize:u}=e;return Object.assign(Object.assign({},sizeVariables),{contentFontSize:u,titleFontWeight:d,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})}},timelineDark$1=timelineDark,self$9=e=>{const{textColor3:n,infoColor:t,errorColor:o,successColor:r,warningColor:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:d,fontSize:u}=e;return Object.assign(Object.assign({},sizeVariables),{contentFontSize:u,titleFontWeight:d,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})},timelineLight={name:"Timeline",common:commonLight,self:self$9},timelineLight$1=timelineLight,commonVariables$1={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},transferDark$1={name:"Transfer",common:commonDark,peers:{Checkbox:checkboxDark$1,Scrollbar:scrollbarDark$1,Input:inputDark$1,Empty:emptyDark$1,Button:buttonDark$1},self(e){const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,inputColor:l,tableHeaderColor:d,textColor1:u,textColorDisabled:f,textColor2:b,textColor3:C,hoverColor:g,closeColorHover:x,closeColorPressed:v,closeIconColor:y,closeIconColorHover:$,closeIconColorPressed:L,dividerColor:P}=e;return Object.assign(Object.assign({},commonVariables$1),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:P,borderColor:"#0000",listColor:l,headerColor:d,titleTextColor:u,titleTextColorDisabled:f,extraTextColor:C,extraTextColorDisabled:f,itemTextColor:b,itemTextColorDisabled:f,itemColorPending:g,titleFontWeight:n,closeColorHover:x,closeColorPressed:v,closeIconColor:y,closeIconColorHover:$,closeIconColorPressed:L})}},transferDark$2=transferDark$1,self$8=e=>{const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,cardColor:l,tableHeaderColor:d,textColor1:u,textColorDisabled:f,textColor2:b,textColor3:C,borderColor:g,hoverColor:x,closeColorHover:v,closeColorPressed:y,closeIconColor:$,closeIconColorHover:L,closeIconColorPressed:P}=e;return Object.assign(Object.assign({},commonVariables$1),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:g,borderColor:g,listColor:l,headerColor:composite(l,d),titleTextColor:u,titleTextColorDisabled:f,extraTextColor:C,extraTextColorDisabled:f,itemTextColor:b,itemTextColorDisabled:f,itemColorPending:x,titleFontWeight:n,closeColorHover:v,closeColorPressed:y,closeIconColor:$,closeIconColorHover:L,closeIconColorPressed:P})},transferLight$1={name:"Transfer",common:commonLight,peers:{Checkbox:checkboxLight$1,Scrollbar:scrollbarLight$1,Input:inputLight$1,Empty:emptyLight$1,Button:buttonLight$1},self:self$8},transferLight$2=transferLight$1,self$7=e=>{const{borderRadiusSmall:n,hoverColor:t,pressedColor:o,primaryColor:r,textColor3:i,textColor2:a,textColorDisabled:s,fontSize:l}=e;return{fontSize:l,nodeBorderRadius:n,nodeColorHover:t,nodeColorPressed:o,nodeColorActive:changeColor(r,{alpha:.1}),arrowColor:i,nodeTextColor:a,nodeTextColorDisabled:s,loadingColor:r,dropMarkColor:r}},treeLight={name:"Tree",common:commonLight,peers:{Checkbox:checkboxLight$1,Scrollbar:scrollbarLight$1,Empty:emptyLight$1},self:self$7},treeLight$1=treeLight,treeDark={name:"Tree",common:commonDark,peers:{Checkbox:checkboxDark$1,Scrollbar:scrollbarDark$1,Empty:emptyDark$1},self(e){const{primaryColor:n}=e,t=self$7(e);return t.nodeColorActive=changeColor(n,{alpha:.15}),t}},treeDark$1=treeDark,treeSelectDark={name:"TreeSelect",common:commonDark,peers:{Tree:treeDark$1,Empty:emptyDark$1,InternalSelection:internalSelectionDark$1}},treeSelectDark$1=treeSelectDark,self$6=e=>{const{popoverColor:n,boxShadow2:t,borderRadius:o,heightMedium:r,dividerColor:i,textColor2:a}=e;return{menuPadding:"4px",menuColor:n,menuBoxShadow:t,menuBorderRadius:o,menuHeight:`calc(${r} * 7.6)`,actionDividerColor:i,actionTextColor:a,actionPadding:"8px 12px"}},treeSelectLight={name:"TreeSelect",common:commonLight,peers:{Tree:treeLight$1,Empty:emptyLight$1,InternalSelection:internalSelectionLight$1},self:self$6},treeSelectLight$1=treeSelectLight,commonVars={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},self$5=e=>{const{primaryColor:n,textColor2:t,borderColor:o,lineHeight:r,fontSize:i,borderRadiusSmall:a,dividerColor:s,fontWeightStrong:l,textColor1:d,textColor3:u,infoColor:f,warningColor:b,errorColor:C,successColor:g,codeColor:x}=e;return Object.assign(Object.assign({},commonVars),{aTextColor:n,blockquoteTextColor:t,blockquotePrefixColor:o,blockquoteLineHeight:r,blockquoteFontSize:i,codeBorderRadius:a,liTextColor:t,liLineHeight:r,liFontSize:i,hrColor:s,headerFontWeight:l,headerTextColor:d,pTextColor:t,pTextColor1Depth:d,pTextColor2Depth:t,pTextColor3Depth:u,pLineHeight:r,pFontSize:i,headerBarColor:n,headerBarColorPrimary:n,headerBarColorInfo:f,headerBarColorError:C,headerBarColorWarning:b,headerBarColorSuccess:g,textColor:t,textColor1Depth:d,textColor2Depth:t,textColor3Depth:u,textColorPrimary:n,textColorInfo:f,textColorSuccess:g,textColorWarning:b,textColorError:C,codeTextColor:t,codeColor:x,codeBorder:"1px solid #0000"})},typographyLight={name:"Typography",common:commonLight,self:self$5},typographyLight$1=typographyLight,typographyDark={name:"Typography",common:commonDark,self:self$5},typographyDark$1=typographyDark,self$4=e=>{const{iconColor:n,primaryColor:t,errorColor:o,textColor2:r,successColor:i,opacityDisabled:a,actionColor:s,borderColor:l,hoverColor:d,lineHeight:u,borderRadius:f,fontSize:b}=e;return{fontSize:b,lineHeight:u,borderRadius:f,draggerColor:s,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${t}`,itemColorHover:d,itemColorHoverError:changeColor(o,{alpha:.06}),itemTextColor:r,itemTextColorError:o,itemTextColorSuccess:i,itemIconColor:n,itemDisabledOpacity:a,itemBorderImageCardError:`1px solid ${o}`,itemBorderImageCard:`1px solid ${l}`}},uploadLight={name:"Upload",common:commonLight,peers:{Button:buttonLight$1,Progress:progressLight$1},self:self$4},uploadLight$1=uploadLight,uploadDark={name:"Upload",common:commonDark,peers:{Button:buttonDark$1,Progress:progressDark$1},self(e){const{errorColor:n}=e,t=self$4(e);return t.itemColorHoverError=changeColor(n,{alpha:.09}),t}},uploadDark$1=uploadDark,watermarkDark={name:"Watermark",common:commonDark,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},watermarkDark$1=watermarkDark,watermarkLight={name:"Watermark",common:commonLight,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},watermarkLight$1=watermarkLight,rowLight={name:"Row",common:commonLight},rowLight$1=rowLight,rowDark={name:"Row",common:commonDark},rowDark$1=rowDark,imageDark={name:"Image",common:commonDark,peers:{Tooltip:tooltipDark$1},self:e=>{const{textColor2:n}=e;return{toolbarIconColor:n,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},positionProp={type:String,default:"static"},style$6=cB("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[cB("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),cM("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),layoutProps={embedded:Boolean,position:positionProp,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},layoutInjectionKey="n-layout";function createLayoutComponent(e){return defineComponent({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},useTheme.props),layoutProps),setup(n){const t=ref(null),o=ref(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=useConfig(n),a=useTheme("Layout","-layout",style$6,layoutLight$1,n,r);function s(x,v){if(n.nativeScrollbar){const{value:y}=t;y&&(v===void 0?y.scrollTo(x):y.scrollTo(x,v))}else{const{value:y}=o;y&&y.scrollTo(x,v)}}provide(layoutInjectionKey,n);let l=0,d=0;const u=x=>{var v;const y=x.target;l=y.scrollLeft,d=y.scrollTop,(v=n.onScroll)===null||v===void 0||v.call(n,x)};useReactivated(()=>{if(n.nativeScrollbar){const x=t.value;x&&(x.scrollTop=d,x.scrollLeft=l)}});const f={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},b={scrollTo:s},C=computed(()=>{const{common:{cubicBezierEaseInOut:x},self:v}=a.value;return{"--n-bezier":x,"--n-color":n.embedded?v.colorEmbedded:v.color,"--n-text-color":v.textColor}}),g=i?useThemeClass("layout",computed(()=>n.embedded?"e":""),C,n):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:o,hasSiderStyle:f,mergedTheme:a,handleNativeElScroll:u,cssVars:i?void 0:C,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},b)},render(){var n;const{mergedClsPrefix:t,hasSider:o}=this;(n=this.onRender)===null||n===void 0||n.call(this);const r=o?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return h("div",{class:i,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):h(NScrollbar,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const __unplugin_components_13=createLayoutComponent(!1),__unplugin_components_11=createLayoutComponent(!0),style$5=cB("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[cM("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),cM("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),layoutFooterProps=Object.assign(Object.assign({},useTheme.props),{inverted:Boolean,position:positionProp,bordered:Boolean}),__unplugin_components_12=defineComponent({name:"LayoutFooter",props:layoutFooterProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Layout","-layout-footer",style$5,layoutLight$1,e,n),r=computed(()=>{const{common:{cubicBezierEaseInOut:a},self:s}=o.value,l={"--n-bezier":a};return e.inverted?(l["--n-color"]=s.footerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.footerBorderColorInverted):(l["--n-color"]=s.footerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.footerBorderColor),l}),i=t?useThemeClass("layout-footer",computed(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${n}-layout-footer`,this.themeClass,this.position&&`${n}-layout-footer--${this.position}-positioned`,this.bordered&&`${n}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),commonVariables={extraFontSize:"12px",width:"440px"},transferDark={name:"Transfer",common:commonDark,peers:{Checkbox:checkboxDark$1,Scrollbar:scrollbarDark$1,Input:inputDark$1,Empty:emptyDark$1,Button:buttonDark$1},self(e){const{iconColorDisabled:n,iconColor:t,fontWeight:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:d,borderRadius:u,inputColor:f,tableHeaderColor:b,textColor1:C,textColorDisabled:g,textColor2:x,hoverColor:v}=e;return Object.assign(Object.assign({},commonVariables),{itemHeightSmall:d,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:u,borderColor:"#0000",listColor:f,headerColor:b,titleTextColor:C,titleTextColorDisabled:g,extraTextColor:x,filterDividerColor:"#0000",itemTextColor:x,itemTextColorDisabled:g,itemColorPending:v,titleFontWeight:o,iconColor:t,iconColorDisabled:n})}},legacyTransferDark=transferDark,self$3=e=>{const{fontWeight:n,iconColorDisabled:t,iconColor:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:d,borderRadius:u,cardColor:f,tableHeaderColor:b,textColor1:C,textColorDisabled:g,textColor2:x,borderColor:v,hoverColor:y}=e;return Object.assign(Object.assign({},commonVariables),{itemHeightSmall:d,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:u,borderColor:v,listColor:f,headerColor:composite(f,b),titleTextColor:C,titleTextColorDisabled:g,extraTextColor:x,filterDividerColor:v,itemTextColor:x,itemTextColorDisabled:g,itemColorPending:y,titleFontWeight:n,iconColor:o,iconColorDisabled:t})},transferLight={name:"Transfer",common:commonLight,peers:{Checkbox:checkboxLight$1,Scrollbar:scrollbarLight$1,Input:inputLight$1,Empty:emptyLight$1,Button:buttonLight$1},self:self$3},legacyTransferLight=transferLight,loadingBarProviderInjectionKey="n-loading-bar",loadingBarApiInjectionKey="n-loading-bar-api",style$4=cB("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[fadeInTransition({enterDuration:"0.3s",leaveDuration:"0.8s"}),cB("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[cM("starting",`
 background: var(--n-color-loading);
 `),cM("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),cM("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);var __awaiter=globalThis&&globalThis.__awaiter||function(e,n,t,o){function r(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function s(u){try{d(o.next(u))}catch(f){a(f)}}function l(u){try{d(o.throw(u))}catch(f){a(f)}}function d(u){u.done?i(u.value):r(u.value).then(s,l)}d((o=o.apply(e,n||[])).next())})};function createClassName(e,n){return`${n}-loading-bar ${n}-loading-bar--${e}`}const NLoadingBar=defineComponent({name:"LoadingBar",props:{containerStyle:[String,Object]},setup(){const{inlineThemeDisabled:e}=useConfig(),{props:n,mergedClsPrefixRef:t}=inject(loadingBarProviderInjectionKey),o=ref(null),r=ref(!1),i=ref(!1),a=ref(!1),s=ref(!1);let l=!1;const d=ref(!1),u=computed(()=>{const{loadingBarStyle:k}=n;return k?k[d.value?"error":"loading"]:""});function f(){return __awaiter(this,void 0,void 0,function*(){r.value=!1,a.value=!1,l=!1,d.value=!1,s.value=!0,yield nextTick(),s.value=!1})}function b(k=0,E=80,w="starting"){return __awaiter(this,void 0,void 0,function*(){yield f(),a.value=!0,i.value=!0,yield nextTick();const T=o.value;T&&(T.style.maxWidth=`${k}%`,T.style.transition="none",T.offsetWidth,T.className=createClassName(w,t.value),T.style.transition="",T.style.maxWidth=`${E}%`)})}function C(){if(l||d.value||!a.value)return;l=!0;const k=o.value;k&&(k.className=createClassName("finishing",t.value),k.style.maxWidth="100%",k.offsetWidth,a.value=!1)}function g(){if(!(l||d.value))if(!a.value)b(100,100,"error").then(()=>{d.value=!0;const k=o.value;k&&(k.className=createClassName("error",t.value),k.offsetWidth,a.value=!1)});else{d.value=!0;const k=o.value;if(!k)return;k.className=createClassName("error",t.value),k.style.maxWidth="100%",k.offsetWidth,a.value=!1}}function x(){r.value=!0}function v(){r.value=!1}function y(){return __awaiter(this,void 0,void 0,function*(){yield f()})}const $=useTheme("LoadingBar","-loading-bar",style$4,loadingBarLight$1,n,t),L=computed(()=>{const{self:{height:k,colorError:E,colorLoading:w}}=$.value;return{"--n-height":k,"--n-color-loading":w,"--n-color-error":E}}),P=e?useThemeClass("loading-bar",void 0,L,n):void 0;return{mergedClsPrefix:t,loadingBarRef:o,started:i,loading:a,entering:r,transitionDisabled:s,start:b,error:g,finish:C,handleEnter:x,handleAfterEnter:v,handleAfterLeave:y,mergedLoadingBarStyle:u,cssVars:e?void 0:L,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:e}=this;return h(Transition,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var n;return(n=this.onRender)===null||n===void 0||n.call(this),withDirectives(h("div",{class:[`${e}-loading-bar-container`,this.themeClass],style:this.containerStyle},h("div",{ref:"loadingBarRef",class:[`${e}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[vShow,this.loading||!this.loading&&this.entering]])}})}}),loadingBarProviderProps=Object.assign(Object.assign({},useTheme.props),{to:{type:[String,Object,Boolean],default:void 0},containerStyle:[String,Object],loadingBarStyle:{type:Object}}),NLoadingBarProvider=defineComponent({name:"LoadingBarProvider",props:loadingBarProviderProps,setup(e){const n=isMounted(),t=ref(null),o={start(){var i;n.value?(i=t.value)===null||i===void 0||i.start():nextTick(()=>{var a;(a=t.value)===null||a===void 0||a.start()})},error(){var i;n.value?(i=t.value)===null||i===void 0||i.error():nextTick(()=>{var a;(a=t.value)===null||a===void 0||a.error()})},finish(){var i;n.value?(i=t.value)===null||i===void 0||i.finish():nextTick(()=>{var a;(a=t.value)===null||a===void 0||a.finish()})}},{mergedClsPrefixRef:r}=useConfig(e);return provide(loadingBarApiInjectionKey,o),provide(loadingBarProviderInjectionKey,{props:e,mergedClsPrefixRef:r}),Object.assign(o,{loadingBarRef:t})},render(){var e,n;return h(Fragment,null,h(Teleport,{disabled:this.to===!1,to:this.to||"body"},h(NLoadingBar,{ref:"loadingBarRef",containerStyle:this.containerStyle})),(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});function useLoadingBar(){const e=inject(loadingBarApiInjectionKey,null);return e===null&&throwError("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const messageProps={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},messageApiInjectionKey="n-message-api",messageProviderInjectionKey="n-message-provider",style$3=c$1([cB("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[fadeInHeightExpandTransition({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),cB("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[cE("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),cE("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>cM(`${e}-type`,[c$1("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),c$1("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[iconSwitchTransition()])]),cE("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[c$1("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),c$1("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),cB("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[cM("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),cM("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),cM("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),cM("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),cM("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),cM("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),iconRenderMap$1={info:()=>h(InfoIcon,null),success:()=>h(SuccessIcon,null),warning:()=>h(WarningIcon,null),error:()=>h(ErrorIcon,null),default:()=>null},NMessage=defineComponent({name:"Message",props:Object.assign(Object.assign({},messageProps),{render:Function}),setup(e){const{inlineThemeDisabled:n,mergedRtlRef:t}=useConfig(e),{props:o,mergedClsPrefixRef:r}=inject(messageProviderInjectionKey),i=useRtl("Message",t,r),a=useTheme("Message","-message",style$3,messageLight$1,o,r),s=computed(()=>{const{type:d}=e,{common:{cubicBezierEaseInOut:u},self:{padding:f,margin:b,maxWidth:C,iconMargin:g,closeMargin:x,closeSize:v,iconSize:y,fontSize:$,lineHeight:L,borderRadius:P,iconColorInfo:k,iconColorSuccess:E,iconColorWarning:w,iconColorError:T,iconColorLoading:M,closeIconSize:_,closeBorderRadius:J,[createKey("textColor",d)]:O,[createKey("boxShadow",d)]:Y,[createKey("color",d)]:H,[createKey("closeColorHover",d)]:z,[createKey("closeColorPressed",d)]:te,[createKey("closeIconColor",d)]:j,[createKey("closeIconColorPressed",d)]:ee,[createKey("closeIconColorHover",d)]:R}}=a.value;return{"--n-bezier":u,"--n-margin":b,"--n-padding":f,"--n-max-width":C,"--n-font-size":$,"--n-icon-margin":g,"--n-icon-size":y,"--n-close-icon-size":_,"--n-close-border-radius":J,"--n-close-size":v,"--n-close-margin":x,"--n-text-color":O,"--n-color":H,"--n-box-shadow":Y,"--n-icon-color-info":k,"--n-icon-color-success":E,"--n-icon-color-warning":w,"--n-icon-color-error":T,"--n-icon-color-loading":M,"--n-close-color-hover":z,"--n-close-color-pressed":te,"--n-close-icon-color":j,"--n-close-icon-color-pressed":ee,"--n-close-icon-color-hover":R,"--n-line-height":L,"--n-border-radius":P}}),l=n?useThemeClass("message",computed(()=>e.type[0]),s,{}):void 0;return{mergedClsPrefix:r,rtlEnabled:i,messageProviderProps:o,handleClose(){var d;(d=e.onClose)===null||d===void 0||d.call(e)},cssVars:n?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:o.placement}},render(){const{render:e,type:n,closable:t,content:o,mergedClsPrefix:r,cssVars:i,themeClass:a,onRender:s,icon:l,handleClose:d,showIcon:u}=this;s==null||s();let f;return h("div",{class:[`${r}-message-wrapper`,a],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},i]},e?e(this.$props):h("div",{class:[`${r}-message ${r}-message--${n}-type`,this.rtlEnabled&&`${r}-message--rtl`]},(f=createIconVNode(l,n,r))&&u?h("div",{class:`${r}-message__icon ${r}-message__icon--${n}-type`},h(NIconSwitchTransition,null,{default:()=>f})):null,h("div",{class:`${r}-message__content`},render$1(o)),t?h(NBaseClose,{clsPrefix:r,class:`${r}-message__close`,onClick:d,absolute:!0}):null))}});function createIconVNode(e,n,t){if(typeof e=="function")return e();{const o=n==="loading"?h(NBaseLoading,{clsPrefix:t,strokeWidth:24,scale:.85}):iconRenderMap$1[n]();return o?h(NBaseIcon,{clsPrefix:t,key:n},{default:()=>o}):null}}const MessageEnvironment=defineComponent({name:"MessageEnvironment",props:Object.assign(Object.assign({},messageProps),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let n=null;const t=ref(!0);onMounted(()=>{o()});function o(){const{duration:u}=e;u&&(n=window.setTimeout(a,u))}function r(u){u.currentTarget===u.target&&n!==null&&(window.clearTimeout(n),n=null)}function i(u){u.currentTarget===u.target&&o()}function a(){const{onHide:u}=e;t.value=!1,n&&(window.clearTimeout(n),n=null),u&&u()}function s(){const{onClose:u}=e;u&&u(),a()}function l(){const{onAfterLeave:u,onInternalAfterLeave:f,onAfterHide:b,internalKey:C}=e;u&&u(),f&&f(C),b&&b()}function d(){a()}return{show:t,hide:a,handleClose:s,handleAfterLeave:l,handleMouseleave:i,handleMouseenter:r,deactivate:d}},render(){return h(NFadeInExpandTransition,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?h(NMessage,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),messageProviderProps=Object.assign(Object.assign({},useTheme.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),NMessageProvider=defineComponent({name:"MessageProvider",props:messageProviderProps,setup(e){const{mergedClsPrefixRef:n}=useConfig(e),t=ref([]),o=ref({}),r={create(l,d){return i(l,Object.assign({type:"default"},d))},info(l,d){return i(l,Object.assign(Object.assign({},d),{type:"info"}))},success(l,d){return i(l,Object.assign(Object.assign({},d),{type:"success"}))},warning(l,d){return i(l,Object.assign(Object.assign({},d),{type:"warning"}))},error(l,d){return i(l,Object.assign(Object.assign({},d),{type:"error"}))},loading(l,d){return i(l,Object.assign(Object.assign({},d),{type:"loading"}))},destroyAll:s};provide(messageProviderInjectionKey,{props:e,mergedClsPrefixRef:n}),provide(messageApiInjectionKey,r);function i(l,d){const u=createId(),f=reactive(Object.assign(Object.assign({},d),{content:l,key:u,destroy:()=>{var C;(C=o.value[u])===null||C===void 0||C.hide()}})),{max:b}=e;return b&&t.value.length>=b&&t.value.shift(),t.value.push(f),f}function a(l){t.value.splice(t.value.findIndex(d=>d.key===l),1),delete o.value[l]}function s(){Object.values(o.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:n,messageRefs:o,messageList:t,handleAfterLeave:a},r)},render(){var e,n,t;return h(Fragment,null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e),this.messageList.length?h(Teleport,{to:(t=this.to)!==null&&t!==void 0?t:"body"},h("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(o=>h(MessageEnvironment,Object.assign({ref:r=>{r&&(this.messageRefs[o.key]=r)},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave},omit(o,["destroy"],void 0),{duration:o.duration===void 0?this.duration:o.duration,keepAliveOnHover:o.keepAliveOnHover===void 0?this.keepAliveOnHover:o.keepAliveOnHover,closable:o.closable===void 0?this.closable:o.closable}))))):null)}});function useMessage(){const e=inject(messageApiInjectionKey,null);return e===null&&throwError("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const notificationProviderInjectionKey="n-notification-provider",NotificationContainer=defineComponent({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:n,wipTransitionCountRef:t}=inject(notificationProviderInjectionKey),o=ref(null);return watchEffect(()=>{var r,i;t.value>0?(r=o==null?void 0:o.value)===null||r===void 0||r.classList.add("transitioning"):(i=o==null?void 0:o.value)===null||i===void 0||i.classList.remove("transitioning")}),{selfRef:o,mergedTheme:e,mergedClsPrefix:n,transitioning:t}},render(){const{$slots:e,scrollable:n,mergedClsPrefix:t,mergedTheme:o,placement:r}=this;return h("div",{ref:"selfRef",class:[`${t}-notification-container`,n&&`${t}-notification-container--scrollable`,`${t}-notification-container--${r}`]},n?h(NScrollbar,{theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),iconRenderMap={info:()=>h(InfoIcon,null),success:()=>h(SuccessIcon,null),warning:()=>h(WarningIcon,null),error:()=>h(ErrorIcon,null),default:()=>null},notificationProps={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},notificationPropKeys=keysOf(notificationProps),Notification=defineComponent({name:"Notification",props:notificationProps,setup(e){const{mergedClsPrefixRef:n,mergedThemeRef:t,props:o}=inject(notificationProviderInjectionKey),{inlineThemeDisabled:r,mergedRtlRef:i}=useConfig(),a=useRtl("Notification",i,n),s=computed(()=>{const{type:d}=e,{self:{color:u,textColor:f,closeIconColor:b,closeIconColorHover:C,closeIconColorPressed:g,headerTextColor:x,descriptionTextColor:v,actionTextColor:y,borderRadius:$,headerFontWeight:L,boxShadow:P,lineHeight:k,fontSize:E,closeMargin:w,closeSize:T,width:M,padding:_,closeIconSize:J,closeBorderRadius:O,closeColorHover:Y,closeColorPressed:H,titleFontSize:z,metaFontSize:te,descriptionFontSize:j,[createKey("iconColor",d)]:ee},common:{cubicBezierEaseOut:R,cubicBezierEaseIn:K,cubicBezierEaseInOut:he}}=t.value,{left:me,right:He,top:Ce,bottom:ye}=getMargin(_);return{"--n-color":u,"--n-font-size":E,"--n-text-color":f,"--n-description-text-color":v,"--n-action-text-color":y,"--n-title-text-color":x,"--n-title-font-weight":L,"--n-bezier":he,"--n-bezier-ease-out":R,"--n-bezier-ease-in":K,"--n-border-radius":$,"--n-box-shadow":P,"--n-close-border-radius":O,"--n-close-color-hover":Y,"--n-close-color-pressed":H,"--n-close-icon-color":b,"--n-close-icon-color-hover":C,"--n-close-icon-color-pressed":g,"--n-line-height":k,"--n-icon-color":ee,"--n-close-margin":w,"--n-close-size":T,"--n-close-icon-size":J,"--n-width":M,"--n-padding-left":me,"--n-padding-right":He,"--n-padding-top":Ce,"--n-padding-bottom":ye,"--n-title-font-size":z,"--n-meta-font-size":te,"--n-description-font-size":j}}),l=r?useThemeClass("notification",computed(()=>e.type[0]),s,o):void 0;return{mergedClsPrefix:n,showAvatar:computed(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:a,cssVars:r?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${n}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},h("div",{class:[`${n}-notification`,this.rtlEnabled&&`${n}-notification--rtl`,this.themeClass,{[`${n}-notification--closable`]:this.closable,[`${n}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?h("div",{class:`${n}-notification__avatar`},this.avatar?render$1(this.avatar):this.type!=="default"?h(NBaseIcon,{clsPrefix:n},{default:()=>iconRenderMap[this.type]()}):null):null,this.closable?h(NBaseClose,{clsPrefix:n,class:`${n}-notification__close`,onClick:this.handleCloseClick}):null,h("div",{ref:"bodyRef",class:`${n}-notification-main`},this.title?h("div",{class:`${n}-notification-main__header`},render$1(this.title)):null,this.description?h("div",{class:`${n}-notification-main__description`},render$1(this.description)):null,this.content?h("pre",{class:`${n}-notification-main__content`},render$1(this.content)):null,this.meta||this.action?h("div",{class:`${n}-notification-main-footer`},this.meta?h("div",{class:`${n}-notification-main-footer__meta`},render$1(this.meta)):null,this.action?h("div",{class:`${n}-notification-main-footer__action`},render$1(this.action)):null):null)))}}),notificationEnvOptions=Object.assign(Object.assign({},notificationProps),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),NotificationEnvironment=defineComponent({name:"NotificationEnvironment",props:Object.assign(Object.assign({},notificationEnvOptions),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:n}=inject(notificationProviderInjectionKey),t=ref(!0);let o=null;function r(){t.value=!1,o&&window.clearTimeout(o)}function i(g){n.value++,nextTick(()=>{g.style.height=`${g.offsetHeight}px`,g.style.maxHeight="0",g.style.transition="none",g.offsetHeight,g.style.transition="",g.style.maxHeight=g.style.height})}function a(g){n.value--,g.style.height="",g.style.maxHeight="";const{onAfterEnter:x,onAfterShow:v}=e;x&&x(),v&&v()}function s(g){n.value++,g.style.maxHeight=`${g.offsetHeight}px`,g.style.height=`${g.offsetHeight}px`,g.offsetHeight}function l(g){const{onHide:x}=e;x&&x(),g.style.maxHeight="0",g.offsetHeight}function d(){n.value--;const{onAfterLeave:g,onInternalAfterLeave:x,onAfterHide:v,internalKey:y}=e;g&&g(),x(y),v&&v()}function u(){const{duration:g}=e;g&&(o=window.setTimeout(r,g))}function f(g){g.currentTarget===g.target&&o!==null&&(window.clearTimeout(o),o=null)}function b(g){g.currentTarget===g.target&&u()}function C(){const{onClose:g}=e;g?Promise.resolve(g()).then(x=>{x!==!1&&r()}):r()}return onMounted(()=>{e.duration&&(o=window.setTimeout(r,e.duration))}),{show:t,hide:r,handleClose:C,handleAfterLeave:d,handleLeave:l,handleBeforeLeave:s,handleAfterEnter:a,handleBeforeEnter:i,handleMouseenter:f,handleMouseleave:b}},render(){return h(Transition,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?h(Notification,Object.assign({},keep(this.$props,notificationPropKeys),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),style$2=c$1([cB("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[c$1(">",[cB("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[c$1(">",[cB("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[cB("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),cM("top, top-right, top-left",`
 top: 12px;
 `,[c$1("&.transitioning >",[cB("scrollbar",[c$1(">",[cB("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),cM("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[c$1(">",[cB("scrollbar",[c$1(">",[cB("scrollbar-container",[cB("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),cB("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),cM("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[cB("notification-wrapper",[c$1("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),c$1("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),cM("top",[cB("notification-wrapper",`
 transform-origin: top center;
 `)]),cM("bottom",[cB("notification-wrapper",`
 transform-origin: bottom center;
 `)]),cM("top-right, bottom-right",[cB("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),cM("top-left, bottom-left",[cB("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),cM("top-right",`
 right: 0;
 `,[placementTransformStyle("top-right")]),cM("top-left",`
 left: 0;
 `,[placementTransformStyle("top-left")]),cM("bottom-right",`
 right: 0;
 `,[placementTransformStyle("bottom-right")]),cM("bottom-left",`
 left: 0;
 `,[placementTransformStyle("bottom-left")]),cM("scrollable",[cM("top-right",`
 top: 0;
 `),cM("top-left",`
 top: 0;
 `),cM("bottom-right",`
 bottom: 0;
 `),cM("bottom-left",`
 bottom: 0;
 `)]),cB("notification-wrapper",`
 margin-bottom: 12px;
 `,[c$1("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),c$1("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),c$1("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),c$1("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),cB("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[cE("avatar",[cB("icon",{color:"var(--n-icon-color)"}),cB("base-icon",{color:"var(--n-icon-color)"})]),cM("show-avatar",[cB("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),cM("closable",[cB("notification-main",[c$1("> *:first-child",{paddingRight:"20px"})]),cE("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),cE("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[cB("icon","transition: color .3s var(--n-bezier);")]),cB("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[cB("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[cE("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),cE("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),cE("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),cE("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),cE("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[c$1("&:first-child",{margin:0})])])])])]);function placementTransformStyle(e){const t=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",o="0";return cB("notification-wrapper",[c$1("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${t}, 0);
 `),c$1("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${o}, 0);
 `)])}const notificationApiInjectionKey="n-notification-api",notificationProviderProps=Object.assign(Object.assign({},useTheme.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),NNotificationProvider=defineComponent({name:"NotificationProvider",props:notificationProviderProps,setup(e){const{mergedClsPrefixRef:n}=useConfig(e),t=ref([]),o={},r=new Set;function i(C){const g=createId(),x=()=>{r.add(g),o[g]&&o[g].hide()},v=reactive(Object.assign(Object.assign({},C),{key:g,destroy:x,hide:x,deactivate:x})),{max:y}=e;if(y&&t.value.length-r.size>=y){let $=!1,L=0;for(const P of t.value){if(!r.has(P.key)){o[P.key]&&(P.destroy(),$=!0);break}L++}$||t.value.splice(L,1)}return t.value.push(v),v}const a=["info","success","warning","error"].map(C=>g=>i(Object.assign(Object.assign({},g),{type:C})));function s(C){r.delete(C),t.value.splice(t.value.findIndex(g=>g.key===C),1)}const l=useTheme("Notification","-notification",style$2,notificationLight$1,e,n),d={create:i,info:a[0],success:a[1],warning:a[2],error:a[3],open:f,destroyAll:b},u=ref(0);provide(notificationApiInjectionKey,d),provide(notificationProviderInjectionKey,{props:e,mergedClsPrefixRef:n,mergedThemeRef:l,wipTransitionCountRef:u});function f(C){return i(C)}function b(){Object.values(t.value).forEach(C=>{C.hide()})}return Object.assign({mergedClsPrefix:n,notificationList:t,notificationRefs:o,handleAfterLeave:s},d)},render(){var e,n,t;const{placement:o}=this;return h(Fragment,null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e),this.notificationList.length?h(Teleport,{to:(t=this.to)!==null&&t!==void 0?t:"body"},h(NotificationContainer,{style:this.containerStyle,scrollable:this.scrollable&&o!=="top"&&o!=="bottom",placement:o},{default:()=>this.notificationList.map(r=>h(NotificationEnvironment,Object.assign({ref:i=>{const a=r.key;i===null?delete this.notificationRefs[a]:this.notificationRefs[a]=i}},omit(r,["destroy","hide","deactivate"]),{internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover})))})):null)}});function useNotification(){const e=inject(notificationApiInjectionKey,null);return e===null&&throwError("use-notification","No outer `n-notification-provider` found."),e}const skeletonDark={name:"Skeleton",common:commonDark,self(e){const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}}},self$2=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}},skeletonLight={name:"Skeleton",common:commonLight,self:self$2},style$1=cB("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[c$1("&:first-child",{marginTop:0}),cM("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[cM("align-text",{paddingLeft:0},[c$1("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),c$1("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),c$1("&::before",{backgroundColor:"var(--n-bar-color)"})])]),headerProps=Object.assign(Object.assign({},useTheme.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),createHeader=e=>defineComponent({name:`H${e}`,props:headerProps,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=useConfig(n),r=useTheme("Typography","-h",style$1,typographyLight$1,n,t),i=computed(()=>{const{type:s}=n,{common:{cubicBezierEaseInOut:l},self:{headerFontWeight:d,headerTextColor:u,[createKey("headerPrefixWidth",e)]:f,[createKey("headerFontSize",e)]:b,[createKey("headerMargin",e)]:C,[createKey("headerBarWidth",e)]:g,[createKey("headerBarColor",s)]:x}}=r.value;return{"--n-bezier":l,"--n-font-size":b,"--n-margin":C,"--n-bar-color":x,"--n-bar-width":g,"--n-font-weight":d,"--n-text-color":u,"--n-prefix-width":f}}),a=o?useThemeClass(`h${e}`,computed(()=>n.type[0]),i,n):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var n;const{prefix:t,alignText:o,mergedClsPrefix:r,cssVars:i,$slots:a}=this;return(n=this.onRender)===null||n===void 0||n.call(this),h(`h${e}`,{class:[`${r}-h`,`${r}-h${e}`,this.themeClass,{[`${r}-h--prefix-bar`]:t,[`${r}-h--align-text`]:o}],style:i},a)}}),NH1=createHeader("1"),NH2=createHeader("2");createHeader("3");createHeader("4");createHeader("5");createHeader("6");const style=cB("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[cM("strong",`
 font-weight: var(--n-font-weight-strong);
 `),cM("italic",{fontStyle:"italic"}),cM("underline",{textDecoration:"underline"}),cM("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),textProps=Object.assign(Object.assign({},useTheme.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),NText=defineComponent({name:"Text",props:textProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Typography","-text",style,typographyLight$1,e,n),r=computed(()=>{const{depth:a,type:s}=e,l=s==="default"?a===void 0?"textColor":`textColor${a}Depth`:createKey("textColor",s),{common:{fontWeightStrong:d,fontFamilyMono:u,cubicBezierEaseInOut:f},self:{codeTextColor:b,codeBorderRadius:C,codeColor:g,codeBorder:x,[l]:v}}=o.value;return{"--n-bezier":f,"--n-text-color":v,"--n-font-weight-strong":d,"--n-font-famliy-mono":u,"--n-code-border-radius":C,"--n-code-text-color":b,"--n-code-color":g,"--n-code-border":x}}),i=t?useThemeClass("text",computed(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:n,compitableTag:useCompitable(e,["as","tag"]),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,n,t;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],i=(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n);return this.code?h("code",{class:r,style:this.cssVars},this.delete?h("del",null,i):i):this.delete?h("del",{class:r,style:this.cssVars},i):h(this.compitableTag||"span",{class:r,style:this.cssVars},i)}}),NInjectionExtractor=defineComponent({name:"InjectionExtractor",props:{onSetup:Function},setup(e,{slots:n}){var t;return(t=e.onSetup)===null||t===void 0||t.call(e),()=>{var o;return(o=n.default)===null||o===void 0?void 0:o.call(n)}}}),injectionFactoryMap={message:useMessage,notification:useNotification,loadingBar:useLoadingBar,dialog:useDialog};function createDiscreteApp({providersAndProps:e,configProviderProps:n}){let o=createApp(()=>h(__unplugin_components_14,unref(n),{default:()=>e.map(({type:s,Provider:l,props:d})=>h(l,unref(d),{default:()=>h(NInjectionExtractor,{onSetup:()=>r[s]=injectionFactoryMap[s]()})}))}));const r={app:o};let i;return isBrowser$2&&(i=document.createElement("div"),document.body.appendChild(i),o.mount(i)),Object.assign({unmount:()=>{var s;if(o===null||i===null){warn$2("discrete","unmount call no need because discrete app has been unmounted");return}o.unmount(),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=null,o=null}},r)}function createDiscreteApi(e,{configProviderProps:n,messageProviderProps:t,dialogProviderProps:o,notificationProviderProps:r,loadingBarProviderProps:i}={}){const a=[];return e.forEach(l=>{switch(l){case"message":a.push({type:l,Provider:NMessageProvider,props:t});break;case"notification":a.push({type:l,Provider:NNotificationProvider,props:r});break;case"dialog":a.push({type:l,Provider:NDialogProvider,props:o});break;case"loadingBar":a.push({type:l,Provider:NLoadingBarProvider,props:i});break}}),createDiscreteApp({providersAndProps:a,configProviderProps:n})}const self$1=()=>({}),equationLight={name:"Equation",common:commonLight,self:self$1},equationLight$1=equationLight,equationDark={name:"Equation",common:commonDark,self:self$1},equationDark$1=equationDark,darkTheme={name:"dark",common:commonDark,Alert:alertDark$1,Anchor:anchorDark$1,AutoComplete:autoCompleteDark$1,Avatar:avatarDark$1,AvatarGroup:avatarGroupDark$1,BackTop:backTopDark$1,Badge:badgeDark$1,Breadcrumb:breadcrumbDark$1,Button:buttonDark$1,ButtonGroup:buttonGroupDark$1,Calendar:calendarDark$1,Card:cardDark$1,Carousel:carouselDark$1,Cascader:cascaderDark$1,Checkbox:checkboxDark$1,Code:codeDark$1,Collapse:collapseDark$1,CollapseTransition:collapseTransitionDark$1,ColorPicker:colorPickerDark$1,DataTable:dataTableDark$1,DatePicker:datePickerDark$1,Descriptions:descriptionsDark$1,Dialog:dialogDark$1,Divider:dividerDark$1,Drawer:drawerDark$1,Dropdown:dropdownDark$1,DynamicInput:dynamicInputDark$1,DynamicTags:dynamicTagsDark$1,Element:elementDark$1,Empty:emptyDark$1,Ellipsis:ellipsisDark$1,Equation:equationDark$1,Form:formDark,GradientText:gradientTextDark$1,Icon:iconDark$2,IconWrapper:iconWrapperDark,Image:imageDark,Input:inputDark$1,InputNumber:inputNumberDark$1,LegacyTransfer:legacyTransferDark,Layout:layoutDark$1,List:listDark$2,LoadingBar:loadingBarDark$1,Log:logDark$1,Menu:menuDark$1,Mention:mentionDark,Message:messageDark$1,Modal:modalDark$1,Notification:notificationDark$1,PageHeader:pageHeaderDark,Pagination:paginationDark$1,Popconfirm:popconfirmDark$1,Popover:popoverDark$1,Popselect:popselectDark,Progress:progressDark$1,Radio:radioDark$1,Rate:rateDark$1,Result:resultDark$1,Row:rowDark$1,Scrollbar:scrollbarDark$1,Select:selectDark$1,Skeleton:skeletonDark,Slider:sliderDark$1,Space:spaceDark$1,Spin:spinDark$1,Statistic:statisticDark$1,Steps:stepsDark$1,Switch:switchDark$1,Table:tableDark$1,Tabs:tabsDark$1,Tag:tagDark$1,Thing:thingDark$1,TimePicker:timePickerDark$1,Timeline:timelineDark$1,Tooltip:tooltipDark$1,Transfer:transferDark$2,Tree:treeDark$1,TreeSelect:treeSelectDark$1,Typography:typographyDark$1,Upload:uploadDark$1,Watermark:watermarkDark$1},lightTheme={name:"light",common:commonLight,Alert:alertLight$1,Anchor:anchorLight$1,AutoComplete:autoCompleteLight$1,Avatar:avatarLight$1,AvatarGroup:avatarGroupLight$1,BackTop:backTopLight$1,Badge:badgeLight$1,Breadcrumb:breadcrumbLight$1,Button:buttonLight$1,ButtonGroup:buttonGroupLight$1,Calendar:calendarLight$1,Card:cardLight$1,Carousel:carouselLight$1,Cascader:cascaderLight$1,Checkbox:checkboxLight$1,Code:codeLight$1,Collapse:collapseLight$1,CollapseTransition:collapseTransitionLight$1,ColorPicker:colorPickerLight$1,DataTable:dataTableLight$1,DatePicker:datePickerLight$1,Descriptions:descriptionsLight$1,Dialog:dialogLight$1,Divider:dividerLight$1,Drawer:drawerLight$1,Dropdown:dropdownLight$1,DynamicInput:dynamicInputLight$1,DynamicTags:dynamicTagsLight$1,Element:elementLight$1,Empty:emptyLight$1,Equation:equationLight$1,Ellipsis:ellipsisLight$1,Form:formLight$1,GradientText:gradientTextLight$1,Icon:iconLight$1,IconWrapper:iconWrapperLight$1,Image:imageLight,Input:inputLight$1,InputNumber:inputNumberLight$1,Layout:layoutLight$1,LegacyTransfer:legacyTransferLight,List:listLight$1,LoadingBar:loadingBarLight$1,Log:logLight$1,Menu:menuLight$1,Mention:mentionLight$1,Message:messageLight$1,Modal:modalLight$1,Notification:notificationLight$1,PageHeader:pageHeaderLight,Pagination:paginationLight$1,Popconfirm:popconfirmLight$1,Popover:popoverLight$1,Popselect:popselectLight$1,Progress:progressLight$1,Radio:radioLight$1,Rate:rateLight,Row:rowLight$1,Result:resultLight$1,Scrollbar:scrollbarLight$1,Skeleton:skeletonLight,Select:selectLight$1,Slider:sliderLight$1,Space:spaceLight$1,Spin:spinLight$1,Statistic:statisticLight$1,Steps:stepsLight$1,Switch:switchLight$1,Table:tableLight$1,Tabs:tabsLight$1,Tag:tagLight$1,Thing:thingLight$1,TimePicker:timePickerLight$1,Timeline:timelineLight$1,Tooltip:tooltipLight$1,Transfer:transferLight$2,Tree:treeLight$1,TreeSelect:treeSelectLight$1,Typography:typographyLight$1,Upload:uploadLight$1,Watermark:watermarkLight$1};var isVue2=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let activePinia;const setActivePinia=e=>activePinia=e,piniaSymbol=Symbol();function isPlainObject(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var MutationType;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(MutationType||(MutationType={}));function createPinia(){const e=effectScope(!0),n=e.run(()=>ref({}));let t=[],o=[];const r=markRaw({install(i){setActivePinia(r),r._a=i,i.provide(piniaSymbol,r),i.config.globalProperties.$pinia=r,o.forEach(a=>t.push(a)),o=[]},use(i){return!this._a&&!isVue2?o.push(i):t.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return r}const noop$1=()=>{};function addSubscription(e,n,t,o=noop$1){e.push(n);const r=()=>{const i=e.indexOf(n);i>-1&&(e.splice(i,1),o())};return!t&&getCurrentScope()&&onScopeDispose(r),r}function triggerSubscriptions(e,...n){e.slice().forEach(t=>{t(...n)})}function mergeReactiveObjects(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,o)=>e.set(o,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const o=n[t],r=e[t];isPlainObject(r)&&isPlainObject(o)&&e.hasOwnProperty(t)&&!isRef(o)&&!isReactive(o)?e[t]=mergeReactiveObjects(r,o):e[t]=o}return e}const skipHydrateSymbol=Symbol();function shouldHydrate(e){return!isPlainObject(e)||!e.hasOwnProperty(skipHydrateSymbol)}const{assign}=Object;function isComputed(e){return!!(isRef(e)&&e.effect)}function createOptionsStore(e,n,t,o){const{state:r,actions:i,getters:a}=n,s=t.state.value[e];let l;function d(){s||(t.state.value[e]=r?r():{});const u=toRefs(t.state.value[e]);return assign(u,i,Object.keys(a||{}).reduce((f,b)=>(f[b]=markRaw(computed(()=>{setActivePinia(t);const C=t._s.get(e);return a[b].call(C,C)})),f),{}))}return l=createSetupStore(e,d,n,t,o,!0),l.$reset=function(){const f=r?r():{};this.$patch(b=>{assign(b,f)})},l}function createSetupStore(e,n,t={},o,r,i){let a;const s=assign({actions:{}},t),l={deep:!0};let d,u,f=markRaw([]),b=markRaw([]),C;const g=o.state.value[e];!i&&!g&&(o.state.value[e]={}),ref({});let x;function v(w){let T;d=u=!1,typeof w=="function"?(w(o.state.value[e]),T={type:MutationType.patchFunction,storeId:e,events:C}):(mergeReactiveObjects(o.state.value[e],w),T={type:MutationType.patchObject,payload:w,storeId:e,events:C});const M=x=Symbol();nextTick().then(()=>{x===M&&(d=!0)}),u=!0,triggerSubscriptions(f,T,o.state.value[e])}const y=noop$1;function $(){a.stop(),f=[],b=[],o._s.delete(e)}function L(w,T){return function(){setActivePinia(o);const M=Array.from(arguments),_=[],J=[];function O(z){_.push(z)}function Y(z){J.push(z)}triggerSubscriptions(b,{args:M,name:w,store:k,after:O,onError:Y});let H;try{H=T.apply(this&&this.$id===e?this:k,M)}catch(z){throw triggerSubscriptions(J,z),z}return H instanceof Promise?H.then(z=>(triggerSubscriptions(_,z),z)).catch(z=>(triggerSubscriptions(J,z),Promise.reject(z))):(triggerSubscriptions(_,H),H)}}const P={_p:o,$id:e,$onAction:addSubscription.bind(null,b),$patch:v,$reset:y,$subscribe(w,T={}){const M=addSubscription(f,w,T.detached,()=>_()),_=a.run(()=>watch(()=>o.state.value[e],J=>{(T.flush==="sync"?u:d)&&w({storeId:e,type:MutationType.direct,events:C},J)},assign({},l,T)));return M},$dispose:$},k=reactive(P);o._s.set(e,k);const E=o._e.run(()=>(a=effectScope(),a.run(()=>n())));for(const w in E){const T=E[w];if(isRef(T)&&!isComputed(T)||isReactive(T))i||(g&&shouldHydrate(T)&&(isRef(T)?T.value=g[w]:mergeReactiveObjects(T,g[w])),o.state.value[e][w]=T);else if(typeof T=="function"){const M=L(w,T);E[w]=M,s.actions[w]=T}}return assign(k,E),assign(toRaw(k),E),Object.defineProperty(k,"$state",{get:()=>o.state.value[e],set:w=>{v(T=>{assign(T,w)})}}),o._p.forEach(w=>{assign(k,a.run(()=>w({store:k,app:o._a,pinia:o,options:s})))}),g&&i&&t.hydrate&&t.hydrate(k.$state,g),d=!0,u=!0,k}function defineStore(e,n,t){let o,r;const i=typeof n=="function";typeof e=="string"?(o=e,r=i?t:n):(r=e,o=e.id);function a(s,l){const d=getCurrentInstance();return s=s||d&&inject(piniaSymbol,null),s&&setActivePinia(s),s=activePinia,s._s.has(o)||(i?createSetupStore(o,n,r,s):createOptionsStore(o,r,s)),s._s.get(o)}return a.$id=o,a}const dict_en=`-- Automatically generated by a Python script, from a markdown source file.
-- The script can be found here: https://github.com/user670/techmino-dictionary-converter/blob/master/tool.py
return {
    {"Translator Note 1",
        "",
        "help",
        "This is an English translation of the Simplified Chinese version of TetroDictionary.\\n\\nThe translation may not accurately reflect the original content in Simplified Chinese.\\n\\nFeel free to visit our GitHub page if you want to view the contributors or make contributions yourself. Click the globe icon in the bottom right corner to open the webpage.\\n\\nTranslated and corrected by User670 & C₂₉H₂₅N₃O₅ et al.",
        "https://github.com/26F-Studio/Techmino/blob/main/parts/language/dict_en.lua",
    },
    {"To New Players",
        "guides newbie noob readme recommendations suggestions helps",
        "help",
        "Here are our suggestions to the new players in Tetris:\\n\\tTwo Principles:\\n\\t\\t1. Choose a Tetris game with good controls (e.g., Techmino, TETR.IO, Jstris, Tetris Online, Tetr.js). Don’t use those “primitive” versions which deviate too much from the Guideline and have awful controls. \\n\\t\\t2. Spend time establishing the basic skills, like reading the Next sequence and performing Tetris stably. Don’t learn some fancy skills such as T-spins for now.\\n\\tTwo Skills:\\n\\t\\t1. Remember the spawn positions of the blocks and controls to move the blocks into the desired locations.\\n\\t\\t2. Plan ahead on where to put down the Next blocks. \\n\\nThe link below is the translated version (by User670) of an article named “Suggestion for new players to Tetris Online,” which was written by a Chinese Tetris player named Tatianyi (2019). Zictionary has an entry about him. Click on the globe icon to open the article in your browser.",
        "https://github.com/user670/temp/blob/master/tips_to_those_new_to_top.md",
    },
    {"Practice Recommendations",
        "readme noob new guides recommendations suggestions helps",
        "help",
        "Here are our recommendations for improving your Tetris skills. If you have ever felt difficulties in your training, you can just relax and spend some time playing the modes you do enjoy. Have fun!\\n\\nThese are sets of missions that you need to accomplish. When there is order within each set, we recommend you to do all three sets of tasks simultaneously instead of one by one. \\n\\nA. Stacking\\n\\tA1. Think twice before you place your block. If your first decision doesn’t seem to fit well, think again.\\n\\tA2. Keep your terrain flat since it allows more possibilities for different blocks.\\nB. Efficiency & Speed\\n\\tB1. Don’t count on ghost pieces. Think, with your brain, where this piece would land and what keys you should press. Do it only when you are ready. \\n\\tB2. Use both of the rotation keys. Don’t just use one and press it many times when you can press the other one just once. \\n\\tB3. Don’t worry too much about your speed when you start learning Finesse. Keep your move accurate, and then it is not hard to improve your speed once you have mastered it. \\nC. Stacking\\n\\tC1. Finish 40L without topping out. \\n\\tC2. Finish 40L with no Hold without losing too much speed. \\n\\tC3. Finish 40L with all Techrashes without losing too much speed. \\n\\tC4. Finish 40L with all Techrashes and no Hold without losing too much speed. \\n\\nSet C is more flexible, and you can adjust the difficulties based on your own conditions (like what does “without losing too much speed” means to you). \\n\\nWhen you finish all the tasks in set C, keep practicing A1. This is the fundamental skill in any Tetris game, and you can master practically any mode when you can just scan through the Next sequence easily.",
    },
    {"Learning T-spins",
        "tspins learning study guides tips recommendations suggestions helps",
        "help",
        "Please notice that T-spin is a pretty advanced skill in Tetris, so you cannot master it by just looking at the terrains where the T-spins are performed. You also need good stacking skills and the ability to scan through the Next sequence. If you really want to improve your T-spin skill, please make sure that you are proficient in your basic skills, such as stacking.\\n\\nOur recommendations: begin to learn T-spin if you can finish 40L within 60 s (or 40–120 s depending on your conditions), 40L with all Tetrises, 40L with all Tetrises, and no Hold, all without losing too much speed.",
    },
    {"Official Website",
        "homepage mainpage websites",
        "help",
        "The official website of Techmino!\\nYou can download the latest stable build of Techmino and change your profile there.\\nClick on the globe icon to open the website in your browser.",
        "http://studio26f.org",
    },
    {"Huiji Wiki",
        "huiji wiki",
        "help",
        "(灰机wiki)\\n\\n A Chinese Tetris wiki by Tetris enthusiasts from Chinese Tetris Research Community groups and its sub-groups. Most of the pages were referenced and translated from Hard Drop Wiki and Tetris Wiki for now. Link in Simplified Chinese.",
        "https://tetris.huijiwiki.com",
    },
    {"Hard Drop Wiki",
        "harddrop hd wiki",
        "help",
        "A Tetris wiki hosted on the Hard Drop community.",
        "https://harddrop.com/wiki/Tetris_Wiki",
    },
    {"Tetris Wiki",
        "tetris wiki",
        "help",
        "Tetris.wiki is a wiki focused on creating Tetris-related content. Myndzi started it in 2015. A Tetris Wiki focusing on Tetris-related contents by Myndzi in 2015. Over the years, thousands of contributions have been made documenting official and fan Tetris games in the series, uncovering game mechanics, and creating guides to improve playing.",
        "https://tetris.wiki",
    },
    {"Tetris Wiki Fandom",
        "tetris wiki fandom",
        "help",
        "A Tetris wiki.",
        "https://tetris.fandom.com/wiki/Tetris_Wiki",
    },
    {"Four.lol",
        "four wiki",
        "help",
        "A website containing collections of various openers.",
        "https://four.lol",
    },
    {"‘Tetris Hall’",
        "",
        "help",
        "(テトリス堂)\\n\\nA Japanese website with many setups, tutorials, and minigames. It has detailed descriptions of consecutive PCs.",
        "https://shiwehi.com/tetris/",
    },
    {"‘Tetris Template Collections’",
        "",
        "help",
        "(テトリステンプレ集@テト譜)\\n\\nA Japanese website with a variety of setups and detailed categories. Most setups have images, so it is easier to share with others.",
        "https://w.atwiki.jp/tetrismaps/",
    },
    {"tetristemplate.info",
        "",
        "help",
        "(テトリスブログ - PerfectClear)\\n\\nA Japanese website with some setups. It doesn’t contain too many setups, but there are very detailed explanations.",
        "https://tetristemplate.info/",
    },
    {"Fumen",
        "fumen",
        "help",
        "A Japanese Tetris field editor. Commonly used to share setups, PC solutions, and more. The linked website is translated into English.",
        "http://fumen.zui.jp/#english.js",
    },
    {"Fumen for Mobile",
        "fumenformobile fm",
        "help",
        "Fumen with touch screen support.",
        "https://knewjade.github.io/fumen-for-mobile/",
    },
    -- # Webpages / Organizations
    {"Github Repository",
        "githubrepository sourcecode src",
        "org",
        "Techmino’s official Github repository. Stars are appreciated.",
        "https://github.com/26F-Studio/Techmino",
    },
    {"Communities",
        "community communities dirscord",
        "org",
        "Join the Tetris communities and talk with other players! You can join the Hard Drop Discord server by clicking on the globe icon.",
        "https://discord.gg/harddrop",
    },
    {"Tetris OL Servers",
        "tetrisonline servers tos",
        "org",
        "Google “Tetris Online Poland” for the Poland server.\\nClick on the globe icon for information on the Tetris Online Study server in China (by Teatube, see the entry below).",
        "http://teatube.ltd/tos",
    },
FNNS and     {"Support 1",
        "support wechat vx weixin alipay zfb zhifubao",
        "org",
        "The contents in this entry were hidden due to platform restrictions. Feel free to discuss these contents on our Discord server.",
        -- id: support-1
        -- platform-restriction: apple
    } or     {"Support 1",
        "support wechat vx weixin alipay zfb zhifubao",
        "org",
        "To donate to Techmino via WeChat Pay or Alipay, type “support” in console and scan the QR code.",
        -- id: support-1
        -- platform-restriction: non-apple
    },
FNNS and     {"Support 2",
        "support afdian aidadian",
        "org",
        "The contents in this entry were hidden due to platform restrictions. Feel free to discuss these contents on our Discord server.",
        -- id: support-2
        -- platform-restriction: apple
    } or     {"Support 2",
        "support afdian aidadian",
        "org",
        "To donate to Techmino via Aifadian, use the globe icon on the bottom right to open the URL. Aifadian charges a 6% transaction fee off your purchase.",
        "https://afdian.net/@MrZ_26",
        -- id: support-2
        -- platform-restriction: non-apple
    },
FNNS and     {"Support 3",
        "support patreon",
        "org",
        "The contents in this entry were hidden due to platform restrictions. Feel free to discuss these contents on our Discord server.",
        -- id: support-3
        -- platform-restriction: apple
    } or     {"Support 3",
        "support patreon",
        "org",
        "To donate to Techmino via Patreon, click on the globe icon on the bottom right to open the URL. Notice that Patreon may charge you a service fee for transactions over a certain amount.",
        "https://www.patreon.com/techmino",
        -- id: support-3
        -- platform-restriction: non-apple
    },
    -- # Games
    {"TTT",
        "tetris trainer tres bien",
        "game",
        "Tetris Trainer Très-Bien (by こな “kona”). A hands-on tutorial of advanced techniques in modern Tetris (which only supports physical keyboards).\\nRecommended for players who can complete 40L with Tetris only and no Hold.\\nCovered topics such as T-Spin, finesse, SRS, and some battle setups.\\nThe link below is the English version of the website, translated by User670 (Originally in Japanese).",
        "https://user670.github.io/tetris-trainer-tres-bien/",
    },
    {"TTPC",
        "tetris perfect clear challenge",
        "game",
        "Tetris Perfect Clear Challenge (by chokotia). A tutorial on Perfect Clear opener using SRS and Bag-7 (with only keyboard support). Recommended for players who completed TTT and are familiar with SRS.\\n\\nLink in simplified Chinese, originally in Japanese.",
        "http://teatube.ltd/ttpc",
    },
    {"NAZO",
        "nazo",
        "game",
        "(ナゾ)\\n\\nAll kinds of SRS puzzles range from easy to extremely hard, including T-spins and All spins. Recommended for those who completed TTT.\\n\\nLink translated to Simplified Chinese, originally in Japanese.",
        "http://teatube.ltd/nazo",
    },
    {"TPO",
        "nazo",
        "game",
        "Tetris Puzzle O. A Chinese website created by TCV100 with some puzzles in NAZO included.",
        "http://121.36.2.245:3000/tpo",
    },
    {"Side Note 1",
        "note nb NB DM notice",
        "game",
        "The following contents are brief introductions about some official and fan-made Tetris games with high popularity. We make no guarantees that they would cover every Tetris game. Also, the author of Techmino has made some comments on some of these games. Notice that they are just subjective opinions and cannot be used to judge the qualities of these games. These comments have been marked out in the entries.",
    },
    {"King of Stackers",
        "kos kingofstackers",
        "game",
        "Browser | Multiplayer | Mobile Support\\nKoS for short. A turn-based browser Tetris game. The main rules are as follows: players take turns placing blocks in their fields in 7-block cycles. Attacks only enter the field when a block is placed without clearing a line. The game is highly strategic and has different options for attack mechanics.",
        "https://kingofstackers.com/games.php",
    },
    {"Tetr.js",
        "tetrjs tetr.js",
        "game",
        "Browser | Singleplayer | Mobile Support\\nA browser-based Tetris game with many professional tunings and modes.\\nLink to Farter’s (See entry below) Dig Mod (which itself is a mod of another version). You can also check another mode on Tetris Wiki called “Tetr.js enhanced.”\\n\\n[MrZ: The visuals are simple with barely any animations. Only a few virtual key combinations are available for mobile devices.]",
        "http://farter.cn/t",
    },
    {"Tetra Legends",
        "tl tetralegends",
        "game",
        "Browser | Singleplayer | No Mobile Support\\nTL for short. A variety of single-player modes and two hidden rhythm modes. It also visualizes mechanisms usually hidden in other Tetris games. The development was halted for multiple reasons in Dec 2020.",
        "https://tetralegends.app",
    },
    {"Ascension",
        "asc ASC",
        "game",
        "Browser | Singleplayer/Multiplayer\\nOr ASC for short. It uses its own rotation system (also called ASC) and has many single-player modes. 1V1 modes are currently under alpha testing (16/Apr/2022). The Stack mode in Techmino was also inspired by Ascension.",
        "https://asc.winternebs.com",
    },
    {"Jstris",
        "js jstris",
        "game",
        "Browser | Singleplayer/Multiplayer | Mobile Support\\nJS for short. It has some single-player modes and some parameters that players can adjust. The virtual keys can also be customized to some extent, but this game has no animations.",
        "https://jstris.jezevec10.com",
    },
    {"TETR.IO",
        "io tetrio tetr.io",
        "game",
        "Browser | Singleplayer/Multiplayer\\nOr IO for short. It has a ranking system and custom game with many adjustable parameters. It also has desktop clients for improved performances and you can git rid of the ads.\\n\\n[MrZ: It seems that Safari cannot open this game.]",
        "https://tetr.io",
    },
    {"Nuketris",
        "nuketris",
        "game",
        "Browser | Singleplayer/Multiplayer\\nA block stacker game with 1V1 ranked matches and basic single-player modes.",
        "https://nuketris.com",
    },
    {"Worldwide Combos",
        "wwc worldwidecombos",
        "game",
        "Browser | Singleplayer/Multiplayer\\nWWC for short. It has worldwide 1V1 battles, recorded battles (so the opponents don’t have to be real people), several different rulesets, and bomb-styled garbage line battles.",
        "https://worldwidecombos.com",
    },
    {"Tetris Friends",
        "tf tetrisfriends notrisfoes",
        "game",
        "Browser | Singleplayer/Multiplayer\\nTF for short. A now-defunct browser-based Tetris game. It was very popular in the past, but the whole game was shut down a few years ago. There is a private server called “Notris Foes” that still exists. Click on the globe icon to open the webpage in your browser.",
    },
    {"tetris.com",
        "tetris online official",
        "game",
        "Browser | Singleplayer\\nThe official Tetris game on tetris.com, with only one mode (marathon). It supports a smart, mouse-based control system.",
    },
    {"Tetris Gems",
        "tetris online official gem",
        "game",
        "Browser | Singleplayer\\nAnother Tetris game from tetris.com. It has the gravity mechanism, and each game lasts for only 1 minute. There are three kinds of gem blocks with different abilities.",
    },
    {"Tetris Mind Bender",
        "tetris online official gem",
        "game",
        "Browser | Singleplayer\\nAnother Tetris game from tetris.com. An endless marathon with special minos called “Mind Benders”. Clearing a line with a Mind Bender will give you a good or bad effect.",
    },
    {"Techmino",
        "techmino",
        "game",
        "Cross-Platform | Singleplayer/Multiplayer\\nOr Tech for short. A block stacker game developed by MrZ et al. using LÖVE. It has many single-player modes and customizable parameters, and online multiplayer modes are gradually being developed.",
    },
    {"Falling Lightblocks",
        "fl fallinglightblocks",
        "game",
        "Browser/iOS/Android | Singleplayer/Multiplayer\\nA multi-platform Tetris game that can be played in portrait or landscape. It has fixed DAS and line clear ARE; it also has some customizable controls on mobile devices. Most game modes are designed based on NES classic Tetris, but there are some modern-ish modes. Battles are half turn-based, half real-time, and garbage cannot be buffered or canceled.",
        "https://golfgl.de/lightblocks/",
    },
    {"Cambridge",
        "cambridge",
        "game",
        "Cross-Platform | Singleplayer\\nA Tetris game developed using LÖVE and is dedicated to creating a robust, easily customizable platform for creating new, custom game modes. Initially made by Joe Zeng, Milla took over the development on 08/Oct/2020, starting from V0.1.5.\\n — Tetris Wiki",
    },
    {"Nanamino",
        "nanamino",
        "game",
        "Windows/Android | Singleplayer\\nA fan game under development with an interesting original rotation system.",
    },
    {"TGM",
        "tetrisgrandmaster tetristhegrandmaster",
        "game",
        "Arcade | Singleplayer/Local Multiplayer\\nTetris The Grand Master, an arcade Tetris series. Titles like S13 and GM were from this series.\\n\\nTGM3 is the most well-known game in this series.",
    },
    {"DTET",
        "dtet",
        "game",
        "Windows | Singleplayer\\nA game based on TGM’s Classic rule with 20G and a powerful rotation system. Decent controls but has no customization other than control mappings. The game is a bit hard to find now, and you may need to install the required DLL files manually.",
    },
    {"Heboris",
        "hb heboris",
        "game",
        "Windows | Singleplayer\\nA game with Arcade-ish play style, capable of simulating many modes of other Tetris games.",
    },
    {"Texmaster",
        "txm texmaster",
        "game",
        "Windows | Singleplayer\\nA game that includes all modes in TGM which can be used to practice TGM. Note that the World rule in the game is slightly different, such as instant-lock soft drops and slightly different kick tables.",
    },
    {"Tetris Effect",
        "tec tetriseffectconnected",
        "game",
        "PS/Oculus Quest/Xbox/NS/Windows | Singleplayer/Multiplayer\\nOr TE(C) for short. An official Tetris game with fancy graphics and soundtracks that react to your input. The basic version (without the word “Connected”) only has single-player modes. The extended version, Tetris Effect Connected, features four online battle modes, Connected (VS), Zone Battle, Score Attack, and Classic Score Attack.",
    },
    {"Tetris 99",
        "t99 tetris99",
        "game",
        "Nintendo Switch | Singleplayer/Multiplayer\\nA game famous for its 99-player battle royale mode and has many interesting strategies not present in traditional battle Tetris games. It also has limited single-player modes like Marathon and bot matches available as DLC.",
    },
    {"Puyo Puyo Tetris",
        "ppt puyopuyotetris",
        "game",
        "PS/NS/Xbox/Windows | Singleplayer/multiplayer\\nA game that combines two games, Tetris and Puyo Puyo, and can battle between those two games. It has many modes for single-player and online\\n\\n[MrZ: The Steam PC version has worse controls and horrible online experience.]",
    },
    {"Tetris Online",
        "top tetrisonline",
        "game",
        "Windows | Singleplayer/Multiplayer\\nA now-defunct Japanese Tetris game with both online and single-player modes. Allows custom DAS/ARR but neither can be set to 0. Minor input delay. Private servers do exist and is decent for new players to get started.",
    },
    {"Tetra Online",
        "TO tetraonline",
        "game",
        "Windows/macOS/Linux | Singleplayer/Multiplayer\\nTO for short. A Tetris game developed by Dr Ocelot and Mine. The delays are AREs are intentionally set to high values, and players who get used to Tetris games with no delays may not get used to this game.\\nThe game was removed from Steam on 09/Dec/2020 due to a DMCA notice filed by TTC.\\nHowever, an offline build can still be downloaded on GitHub.",
        "https://github.com/Juan-Cartes/Tetra-Offline/releases/tag/1.0",
    },
    {"Cultris II",
        "c2 cultris2 cultrisii",
        "game",
        "Windows/OS X | Singleplayer/Multiplayer\\nC2 for short. Designed based on classic Tetris, Cultris II supports customizable DAS and ARR. The battle mode is focused on time-based combos, which challenges players’ speed, n-wide setups, and downstacking skills.\\n\\n[MrZ: The Mac version was not being maintained for a long time. Any macOS build newer than macOS Catalina cannot run this game at all.]",
    },
    {"Nullpomino",
        "np nullpomino",
        "game",
        "Windows/macOS/Linux | Singleplayer/Multiplayer\\nNP for short. A high-customizable professional Tetris game. Nearly every parameter in the game can be adjusted.\\n\\n[MrZ: It's UI style is like, retro. Also all controls are with keyboard, and new players may have some problems getting used to it. Also, it seems that macOS Monterey cannot run this game.]",
    },
    {"Misamino",
        "misamino",
        "game",
        "Windows | Single-player\\nLocal 1V1 game, mainly plays turn-based mode. You can write your own bot for it (though you need to learn its API if you do).\\nMisamino is also the name of its built-in bot.",
    },
    {"Touhoumino",
        "touhoumino",
        "game",
        "Windows | Singleplayer\\nA fan-made Tetris game. It is a modification of Nullpomino with elements from the Touhou Project added in. The marathon mode features the “Spell Cards” from Touhou Project, which can only be broken by reaching a score requirement in a limited time.\\n\\n[MrZ: Recommended for players with at least half-decent skills, otherwise you don’t even know how you died.]",
    },
    {"Tetris Blitz",
        "blitz ea mobile phone",
        "game",
        "iOS/Android | Singleplayer\\nA mobile Tetris game by Electronic Arts (EA). It has the gravity mechanism, and each game lasts for 2 minutes. Many minoes fall down into the field at the beginning of the game, and you can enter the “Frenzy” mode by continuously performing line clears. There are many different power-ups available. Also, this game has no top-out mechanism. When an incoming block overlaps with existing blocks in the field, the top few lines will be cleared automatically. \\n\\nThis game has no longer been available since April 2020.",
    },
    {"Tetris (EA)",
        "tetris ea galaxy universe cosmos mobile phone",
        "game",
        "iOS/Android | Singleplayer/Multiplayer?\\nAnother mobile Tetris game by EA. It has two control modes – Swipe and One-Touch. It also has a Galaxy Mode besides the Marathon Mode (with gravity mechanism), and the goal of this mode is to clear all Galaxy minoes before the sequence runs out.\\n\\nThis game has no longer been available since April 2020.",
    },
    {"Tetris (N3TWORK)",
        "tetris n3twork mobile phone",
        "game",
        "iOS/Android | Singleplayer\\nThe mobile Tetris game from N3TWORK Inc. It has a 3-minute ultra mode, a marathon mode, and a 100-player Royale mode.\\n[The UI is great, but its controls are not so good.]",
    },
    {"Tetris Beat",
        "n3twork rhythm",
        "game",
        "iOS | Singleplayer\\nA mobile Tetris game from N3TWORK for Apple Arcade. It has a “Beat” mode besides the Marathon mode, but you only have to drop the blocks in rhythm with the BGM.\\n[The effects are very heavy, and the controls are not so good.]",
    },
    {"Tetris Journey",
        "tetrisjourney mobile phone huanyouji",
        "game",
        "iOS/Android | Singleplayer\\nA now-defunct official mobile Tetris game developed by Tencent (available exclusively in China). It had level modes, battle modes, and some single-player modes. You could customize the sizes and positions of the virtual keys, but you could not adjust DAS or ARR.\\nThe battle mode lasted for 2 minutes, and if both players do not top out, the one who sent more attacks wins.",
    },
    {"JJ Tetris",
        "jjtetris",
        "game",
        "Android | Multiplayer\\n(JJ块)\\nA casual game on JJ Card Games (JJ棋牌). Portrait screen, low input delay, smooth controls. Customizable DAS/ARR and toggle-able 20G soft drop, limited control scheme customization. No Hold nor B2B, no garbage buffer nor cancelling. Every attack sends at most 4 lines, combos are more powerful, otherwise similar to modern Tetris.",
    },
    {"Huopin Tetris",
        "huopin qq",
        "game",
        "Windows | Multiplayer\\n(火拼俄罗斯)\\n\\nThe Tetris game on Tencent Game Center, 12-wide board, DAS/ARR the same as typing on the keyboard, one Next, no Hold. Can only send garbage through Tetris (sends three lines) and Triple (sends two lines). Garbage is checker-board-shaped and is nearly impossible to dig through.",
    },
    -- # Terms
    {"Translator Note 2",
        "",
        "help",
        "Translator’s note on those per-minute and per-second values\\n\\nNot all of them are commonly used in the communities, and not all terms mean the same across all contexts. They mainly apply to Techmino.",
    },
    {"LPM",
        "linesperminute speed",
        "term",
        "Lines per minute\\n\\tReflects the playing speed of a player.\\n\\tDifferent games calculate LPM differently. For example, Tetris Online calculates its LPM using PPS (see below), where 1 PPS = 24 LPM. This ignores clearing garbage lines and makes it different from its literal meaning. In Techmino, this converted LPM value is marked as “L’PM.”",
    },
    {"PPS",
        "piecespersecond speed",
        "term",
        "Pieces per second\\n\\tReflects the playing speed of a player.",
    },
    {"BPM",
        "blocksperminute piecesperminute speed",
        "term",
        "Blocks per minute\\n\\tReflects the playing speed of a player.\\n\\tAlso called PPM (to avoid confusion with the musical term).",
    },
    {"KPM",
        "keysperminute keypressesperminute",
        "term",
        "Keypresses per minute\\n\\tReflects how fast the player presses keys or buttons.",
    },
    {"KPP",
        "keysperpiece keypressesperpiece",
        "term",
        "Keypresses per piece\\n\\tReflects how efficient the player is with the controls. Reduce this number by learning to finesse.",
    },
    {"APM",
        "attackperminute",
        "term",
        "Attack per minute\\n\\tReflects the offensive power of a player.",
    },
    {"SPM",
        "linessentperminute",
        "term",
        "[lines] Sent per minute\\n\\tReflects the *actual* offensive power of a player (does not count lines used for canceling garbage in the buffer).",
    },
    {"DPM",
        "digperminute defendperminute",
        "term",
        "Dig/Defend per minute\\n\\tSometimes can reflect how well a player survives garbage.",
    },
    {"RPM",
        "receive jieshou",
        "term",
        "[lines] Receive per Minute\\n\\tReflects the pressure applied to a player.",
    },
    {"ADPM",
        "attackdigperminute vs",
        "term",
        "Attack & Dig per minute\\n\\tUsed to compare skill differences between the two players within one match; slightly more accurate than APM.\\n\\tThe “vs” in TETR.IO is actually Atk & Dig per 100s.",
    },
    {"APL",
        "attackperline efficiency",
        "term",
        "Attack per line (cleared)\\n\\tAlso known as “efficiency.” Reflects the per-line efficiency of attacks. For example, Tetrises and T-spins have higher efficiency than doubles and triples.",
    },
    {"Single",
        "single 1",
        "term",
        "Clear one line at one time.",
    },
    {"Double",
        "double 2",
        "term",
        "Clear two lines at one time.",
    },
    {"Triple",
        "triple 3",
        "term",
        "Clear three lines at one time.",
    },
    {"Techrash",
        "techrash tetris 4",
        "term",
        "*Techmino-Exclusive*\\nClear four lines at one time.",
    },
    {"Tetris",
        "tetris 4",
        "term",
        "The name of the game (and its trademark). Also the term for clearing four lines at one time in official games.\\nCoined from Tetra (Greek for “four” <τέτταρες>) and Tennis (favorite sport of the creator of Tetris). Also, the Tetris games developed by Nintendo and SEGA were licensed by TTC. These two companies do not have the copyright of Tetris.",
        -- _comment: original Lua file had this comment: "Thanks to Alexey Pajitnov!"
    },
    {"All Clear",
        "pc perfectclear ac allclear",
        "term",
        "Also known as Perfect Clear (PC). That is also still the term preferred by the communities and used in Techmino.\\nClear all minoes on the field.",
    },
    {"HPC",
        "hc clear halfperfectclear",
        "term",
        "*Techmino-Exclusive*\\nHalf Perfect Clear\\nAn extension to All Clear. Should a line clear resemble an All Clear when ignoring lines below the clear, the clear is a Half Perfect Clear and sends a minor extra attack.",
    },
    {"Spin",
        "spin",
        "term",
        "Use rotation to move a piece into a position otherwise unreachable. In some games, this manipulation sends extra attacks or awards additional scores. Different games may have different mechanisms on what counts as a spin.",
    },
    {"Mini",
        "mini",
        "term",
        "A modifier term to Spins applied to Spin actions that the game considers easy (thus the name “EZ T-Spin” in an old game). Score and attack bonuses are reduced for Mini Spins than ordinary Spins.\\nDifferent games have different rules for what counts as a Mini Spin, and many are not intuitive. You can just remember a few common shapes.",
    },
    {"All-Spin",
        "allspin",
        "term",
        "A rule in which spins of all pieces are awarded extra attacks/scores, rather than just spins of the T piece (aka “T-Spin only”).",
    },
    {"T-Spin",
        "tspin",
        "term",
        "A spin performed using the T Tetromino.\\nIn modern official games, T-Spins are detected using the 3-corner rule, i.e., if at least three of the four cells diagonal to the rotation center is occupied by minoes, it is considered as a T-Spin. Some games have additional rules to determine a T-Spin as a Mini T-Spin instead, which has reduced attacks/scores.",
    },
    {"TSS",
        "t1 tspinsingle",
        "term",
        "T-Spin Single\\nClear one line with a T-Spin.",
    },
    {"TSD",
        "t2 tspindouble",
        "term",
        "T-Spin Double\\nClear two lines with a T-Spin.",
    },
    {"TST",
        "t3 tspintriple",
        "term",
        "T-Spin Triple\\nClear three lines with a T-Spin.",
    },
    {"MTSS",
        "minitspinsingle tsms tspinminisingle",
        "term",
        "Mini T-Spin Single\\nFormerly known as T-Spin Mini Single (TSMS).\\nClear one line with a Mini T-Spin.\\nDifferent games have different ways to determine whether a T-Spin is a Mini.",
    },
    {"MTSD",
        "minitspindouble tsmd tspinminidouble",
        "term",
        "Mini T-Spin Double\\nFormerly known as T-Spin Mini Double (TSMD).\\nClear two lines with a Mini T-Spin.MTSD only exists in a limited number of games and may have very different triggers.",
    },
    {"O-Spin",
        "ospin",
        "term",
        "Because the O block doesn’t change its shape after any rotations, there is no way to bring it out once it is stuck in a place. So, there was a meme about O-Spin in the Tetris community: Someone has made a fake video on how to perform an O-spin in Tetris 99 and Tetris Friend, and it went viral; XRS allows O blocks to “teleport” into a hole.\\nIn TRS, you can rotate the O block in a specific way to teleport or transform O into another block to achieve an O-spin.",
    },
    {"Rotation Systems",
        "wallkick rotationsystem",
        "term",
        "Systems that determine how the pieces rotate.\\n\\nIn modern Tetris games, tetrominoes can rotate on a specific rotation center (but this may be absent in some games). If the minoes overlap with the walls or the field, the system will attempt to perform some offsets (a process known as “wall-kicking”). Wall kicks allow minoes to move into specific-shaped holes.",
    },
    {"Orientation",
        "direction 0r2l 02 20 rl lr",
        "term",
        "In SRS and SRS-like rotation systems, there is a system of standard notations describing the orientations of the minoes:\\n0 for Original orientation; R for right, or 90° clockwise; L for left, or 90° counterclockwise; 2 for spin twice (180°).\\nFor example, 0→L means rotating counterclockwise from original orientation (0) to L; 0→R means rotating clockwise from original orientation (0) to R; 2→R means rotating counterclockwise from 2 (180°) to R.",
    },
    {"ARS",
        "arikrotationsystem atarirotationsystem",
        "term",
        "It can refer to two things:\\nArika Rotation System, which is used in Tetris: The Grand Master games.\\nAtari Rotation System, which aligns pieces to the top-left when rotating.",
    },
    {"ASC",
        "ascension",
        "term",
        "Rotation system used in the Tetris clone Ascension. All pieces use the same two kick tables (one for CW, one for CCW), and the kick range is approximately ± 2 blocks on both axis.",
    },
    {"ASC+",
        "ascension ascplus",
        "term",
        "The modified version of ASC in Techmino with support of wall kicks for 180° rotations.",
    },
    {"BRS",
        "bulletproofsoftware",
        "term",
        "BPS rotation system, the rotation system used in Tetris games by Bullet-Proof Software.",
    },
    {"BiRS",
        "biasrs biasrotationsystem",
        "term",
        "*Techmino-Exclusive*\\n\\nBias Rotation System, Techmino’s original rotation system based on XRS and SRS.\\nIt sets an offset to the rotation if you hold left/right/soft drop when you rotate.\\nIf rotation fails when downwards offset is applied, it tries again without the downwards offset.\\nThen it tries without left/right offset.\\nIf it fails, then the rotation will not occur.\\n\\nCompared to XRS, BiRS only uses a single kick table, making it easier to memorize; also keeps the climb-over-terrain feature of SRS.\\n\\nThe final kick offset’s euclidean distance can’t be larger than √5; if there is a horizontal offset, the final kick offset can’t be in the opposite direction.",
    },
    {"C2RS",
        "c2rs cultris2",
        "term",
        "Cultris II rotation system, a rotation system used in the Tetris clone Cultris II.\\nAll rotations and all pieces share the same kick table (left, right, down, down-left, down-right, left 2, right 2), with left prioritizing over right.\\n\\nIn Techmino, C2sym is a modification to this rotation system that chooses whether to check left or right first depending on the piece and rotation.",
    },
    {"C2sym",
        "cultris2",
        "term",
        "A modification of C2RS in Techmino. It changes the priorities of L/R based on the shapes of different blocks.",
    },
    {"DRS",
        "dtetrotationsystem",
        "term",
        "DTET Rotation System\\nThe rotation system used in DTET.",
    },
    {"NRS",
        "nintendorotationsystem",
        "term",
        "Nintendo Rotation System\\nThe rotation system used in the Tetris games on the NES and Game Boy.\\nIt has two mirrored versions; the left-handed version is used on Game Boy and the right-handed version on the NES.",
    },
    {"SRS",
        "superrotationsystem",
        "term",
        "Super Rotation System, the most widely used rotation system by modern Tetris games and the foundation of many self-made rotation systems. There are four orientations for each tetromino, and they can rotate clockwise or counterclockwise (But without 180° rotations). Should a Tetromino overlap with the wall, floor, or other minoes on the field after rotation, a few offset positions will be checked, allowing pieces to kick off walls and floors. You can look up the details of the wall kick table on Tetris Wiki.",
    },
    {"SRS+",
        "srsplus superrotationsystemplus",
        "term",
        "The extension to SRS with the support of 180° wall kicks.",
    },
    {"TRS",
        "techminorotationsystem",
        "term",
        "*Techmino-Exclusive*\\nTechmino Rotation System\\nThe rotation system used in Techmino, based on SRS.\\nIt includes fixes on common cases where S/Z are locked from rotating and some extra useful kicks. Each pentomino also has a kick table roughly based on SRS logic. TRS supports O-spins.",
    },
    {"XRS",
        "xrs",
        "term",
        "X rotation system, a rotation system used in T-ex.\\n\\nIt introduced a feature to “use another kick table if you hold a direction key,” making it possible for players to tell the game where they want the piece to go.",
    },
    {"Back to Back",
        "b2b btb backtoback",
        "term",
        "Aka B2B. Clearing two or more technical line clears (Spins and Tetrises) in a row (without introducing ordinary line clears) gives extra attack power.\\nUnlike combos, placing pieces that do not clear lines does not affect Back to Back.",
    },
    {"B2B2B",
        "b3b",
        "term",
        "*Techmino-Exclusive*\\nBack to back to back, aka B3B. Clearing many Back to Backs to fill the Back to Back gauge, you will eventually perform a Back to Back to Back, giving more bonus attacks.",
    },
    {"Fin, Neo, Iso",
        "fin neo iso",
        "term",
        "Special T-Spin techniques that exploit the T piece’s kicks and T-Spin detections.\\nThey might be worth different values in different games (some consider them as Minis) but hardly have real value in combat due to their relatively complex setup.",
    },
    {"Modern Tetris",
        "modern",
        "term",
        "The concept of a “modern” Tetris game or block-stacking game is fuzzy. Generally speaking, a block-stacking game that resembles games that follow the Tetris Design Guideline is considered a modern game. Here are some rules of thumb, but they are not hard requirements:\\n1. The visible part of the Matrix is 10 w × 20 h, often with additional hidden rows above this.\\n2. Pieces spawn in the top-middle of the visible matrix. Each piece has a consistent spawn orientation and color.\\n3. Has an appropriate randomizer like 7-Bag and His.\\n4. Has a proper rotation system, with at least the ability to rotate both directions.\\n5. Has an appropriate lockdown delay system.\\n6. Has an appropriate top-out condition.\\n7. Has a Next queue, with multiple next pieces displayed (usually 3–6), and with the presentation in the queue matching the spawn orientation of the piece.\\n8. Has a Hold queue.\\n9. If there is spawn delay or line delay, usually has IRS and IHS.\\n10. Has a DAS system for precise and swift sideways movements.",
    },
    {"Tetrominos’ Shapes",
        "shape structure form tetromino tetrimino",
        "term",
        "In standard Tetris games, all the blocks used are tetrominoes, i.e., Blocks that are linked by four minoes side-by-side.\\n\\nThere are seven kinds of tetrominoes in total when allowing rotations and disallowing reflections. These tetrominoes are named by the letter in the alphabet that they resemble. They are Z, S, J, L, T, O, and I. See the “Shape & Name” entry for more information.",
    },
    {"Tetrominos’ Colors",
        "colour hue tint tetromino tetrimino",
        "term",
        "Many modern Tetris games use the same color scheme for the tetrominoes. The colors are:\\nZ–red, S–green, J–blue, L–orange, T–purple, O–yellow, and I–cyan.\\n\\nTechmino also uses this “standard” coloring for the tetrominoes.",
    },
    {"IRS",
        "initialrotationsystem",
        "term",
        "Initial Rotation System\\nHolding a rotation key during spawn delay to spawn the piece pre-rotated. Sometimes prevents death.",
    },
    {"IHS",
        "initialholdsystem",
        "term",
        "Initial Hold System\\nHolding the Hold key during spawn delay to spawn the held piece (or next piece in the Next queue if there is no held piece) instead of the current piece, and put the current piece in the Hold as if the player has performed the held before spawning. Sometimes prevents death.",
    },
    {"IMS",
        "initialmovesystem",
        "term",
        "*Techmino-Exclusive*\\nInitial Movement System\\nHolding a sideways movement key during spawn delay to spawn the piece one block off to the side. Sometimes prevents death.\\nNote that DAS needs to be fully charged when a new piece appears.",
    },
    {"Next",
        "nextpreview",
        "term",
        "Displays the next few pieces to come. It is an essential skill to plan ahead where to place blocks in the Next queue to improve your Tetris skill.",
    },
    {"Hold",
        "hold",
        "term",
        "Save your current piece for later use, and take out a previously held piece (or next piece in the next queue, if no piece was held) to place instead. You can only perform this once per piece in most cases.\\n\\n*Techmino-Exclusive*: Techmino has an “In-place Hold” feature. When enabled, pieces that spawn from the Hold queue will spawn at where your currently-controlling piece is, instead of at the top of the matrix.",
    },
    {"Swap",
        "hold",
        "term",
        "Like *Hold*, swap your current piece and the first piece of the next queue. You can also only perform this once per piece in most cases.",
    },
    {"Deepdrop",
        "shenjiang",
        "term",
        "*Techmino-Exclusive*\\n\\nA special function allows minoes to teleport through the wall to enter a hole. When the mino hits bottom, pressing the soft drop button again will enable the deep drop. Suppose there is a hole that fits the shape of the mino. In that case, it will teleport into this hole immediately.\\nThis mechanism is especially useful for AIs because it allows AI to disregard the differences between different rotation systems.",
    },
    {"Misdrop",
        "md misdrop",
        "term",
        "Accidentally placed (dropped) a piece in an unintended location.",
    },
    {"Mishold",
        "mh mishold",
        "term",
        "Accidentally pressed the Hold key. This can lead to using an undesired piece or missing out on a chance to a PC.",
    },
    {"sub",
        "sub",
        "term",
        "A sub-[number] time means the time is below a certain milestone. The unit of the time is often left out and inferred; for example, a “sub-30” time for a 40-line Sprint means below 30 seconds, and a “sub-15” time for a 1000-line Sprint means below 15 minutes.",
    },
    {"Digging",
        "downstacking ds",
        "term",
        "Clearing garbage lines entered from the bottom of the field. Aka downstacking.",
    },
    {"Donation",
        "donate",
        "term",
        "A method of “plugging” up the Tetris hole to send a T-Spin. After the T-Spin, the Tetris hole is opened up once again to allow the continuation of Tetris or downstacking.\\n-- Harddrop wiki",
    },
    {"‘Debt’",
        "qianzhai debt owe",
        "term",
        "A terminology used in the Chinese Tetris community. A “debt” refers to a situation where one must first finish constructing a specific setup before they can perform one or more T-spins with real attacks. When constructing a setup where one or multiple debts are created, it is important to observe the opponent to ensure your safety; otherwise, there is a high probability of topping out before the construction is finished.\\n\\nThis term is frequently used to describe setups such as TST tower. No real attacks can be made before the setup is constructed completely.",
    },
    {"Attack & Defend",
        "attacking defending",
        "term",
        "Attacking: send garbage lines to your opponent by clearing lines.\\nDefending: You offset this garbage by clearing lines after your opponent sends you lines.\\nCounter attack: Send attack back at your opponent after offsetting incoming garbage, or taking the hit, then attack back.\\nIn most games, garbage offsetting is 1:1, i.e., one attack offsets one incoming garbage.",
    },
    {"Combo",
        "ren combo",
        "term",
        "Known in Japan as REN.\\nConsecutive line clears make up combos. The second line clear in the combo is called 1 Combo, and the third line clear is called 2 Combo, and so on.\\nUnlike Back to Back, placing a piece that does not clear a line will break the combo.",
    },
    {"Spike",
        "spike",
        "term",
        "Sending many attacks in a short time.\\n\\nBoth Techmino and TETR.IO have spike counters, which shows how many attacks you send in a short time.\\n\\nNote that accumulated garbage due to network lag do not count as a spike.",
    },
    {"Side well",
        "ren combo sidewell",
        "term",
        "A stacking method where you leave a well of a certain width on the side.\\nA Side 1-wide setup is the traditional Tetris setup (i.e., Side well Tetris).\\nA Side 2-, 3-, or 4-wide setup is a combo setup. For new players, they can be effective ways to send attacks. However, opponents can easily send you garbage while building your stack, killing you or cutting your stack short. Because of this, advanced players might not opt to build tall stacks and instead keep a steady stream of T-Spins and Tetrises and attack when the opponent is unlikely to offset the garbage.",
    },
    {"Center well",
        "ren combo centerwell",
        "term",
        "A stacking method where you leave a well of a certain width at the center.",
    },
    {"Partial well",
        "ren combo partialwell",
        "term",
        "A stacking method where you leave a well of a certain width at not-center-or-side position.",
    },
    {"Side 1-wide",
        "s1w side1wide sidewelltetris",
        "term",
        "Also known as Side well Tetris.\\nThe most traditional way to play. It is also easy to do in modern Tetris and can send a half-decent attacks. However, this is hardly used in advanced matches due to the lower efficiency of Tetrises compared to T-Spins.",
    },
    {"Side 2-wide",
        "s2w side2wide",
        "term",
        "The stacking method where you leave a two-block-wide well on the side. A common combo setup.\\nEasy to use. New players can give it a try and produce some half-decent combos when combined with Hold. Not often used in advanced games because it takes more time to build the stack, leaving room for opponents to send garbage and cut your stack short. It is also not so good in terms of efficiency.",
    },
    {"Side 3-wide",
        "s3w side2wide",
        "term",
        "The stacking method where you leave a three-block-wide well on the side. A combo setup is less common than 2-wide.\\nCan perform more combos than 2-wide, but also harder to do, easy to break the combo.",
    },
    {"Side 4-wide",
        "s4w side4wide",
        "term",
        "The stacking method where you leave a four-block-wide well on the side. A combo setup.\\nIf done well, it can produce very impressive combos. Also, it takes less time to build up, so you might be able to start your combo before incoming garbage. However, there is still a risk of being killed by incoming garbage, and it is thus less overpowered.",
    },
    {"Center 1-wide",
        "c1w center1wide centerwelltetris",
        "term",
        "Also known as Center well Tetris.\\nThe stacking method where you leave a one-block-wide well in the middle. Commonly used in combat because this allows Tetrises and T-Spins and is not too difficult to make.",
    },
    {"Center 2-wide",
        "c2w center2wide",
        "term",
        "The combo setup where you leave a two-block-wide well in the middle. Not very common, though.",
    },
    {"Center 3-wide",
        "c3w center3wide",
        "term",
        "The combo setup where you leave a three-block-wide well in the middle. Not very common, though.",
    },
    {"Center 4-wide",
        "c4w center4wide",
        "term",
        "The stacking method where you leave a four-block-wide well in the middle.\\nThe infamous combo setup that not only makes many combos but also abuses the death conditions and won’t die even if you receive some garbage. Players often dislike this technique due to how unbalanced it is.",
    },
    {"Residual",
        "c4w s4w",
        "term",
        "Refers to how many blocks to leave in the well of a four-wide combo setup. The most common are 3-residual and 6-residual.\\n3-residual has fewer variations and is easier to learn, with a pretty good chance of success, and it’s pretty useful in combat.\\n6-residual has more variables and is harder, but can be more consistent if you do it well. It can also be used for special challenges like getting 100 combos in an infinite 4-wide challenge.\\nIn principle, use 6-Res first, then 5-Res and 3-Res, and then 4-Res.",
    },
    {"6–3 Stacking",
        "63stacking six-three sixthree",
        "term",
        "A way of stacking where you have a six-block-wide stack on the left and a three-block-wide stack on the right.\\nFor a skilled player, this method of stacking might reduce the keypresses needed for stacking, and is a popular Sprint stacking method. The reason why it works has to do with the fact that pieces spawn with a bias to the left.",
    },
    {"Freestyle",
        "ziyou",
        "term",
        "This term is usually used in 20 TSDs. Freestyle means finishing 20 TSDs without using static stacking modes. Freestyle 20TSDs is more difficult than static stacking modes such as LST, and the performance can represent the T-spin skills a player has in battles.",
    },
    {"Topping out",
        "die death topout toppingout",
        "term",
        "Modern Tetris games have three different conditions in which the player tops out:\\n1. Block out: when a piece spawned overlaps with the existing blocks in the field;\\n2. Lock out: when a piece locks entirely above the skyline;\\n3. Top out: when the stack exceeds 40 lines in height (often due to incoming garbage).\\nTechmino does not check for locking out and topping out.",
    },
    {"Buffer zone",
        "above super invisible disappear",
        "term",
        "Refers to 21st-40th lines above the visible field. Because the blocks in the field could go over the visible field (this usually happens when multiple garbage lines come in) so the buffer zone was created so those blocks could go back to the field when garbage lines are cleared. Also, the buffer zone is usually located at 21st-40th lines because this is sufficient for most cases. Refer to “Vanish Zone” to learn more.",
    },
    {"Vanish zone",
        "disappear gone cut die",
        "term",
        "Refers to the area located above the 40th line. This is usually realized by combining c4w and multiple garbage lines. When any block reaches the vanish zone in many games, the game is terminated immediately.\\nHowever, this area can have different behaviors in different games. Some games are flawed because the game could crash when the blocks enter the vanish zone (e.g., Tetris Online). Wierd behaviors could also happen when the blocks enter the vanish zone (you can refer to this video, click on the globe icon to open the link).\\n\\nFurthermore, the vanish zone in Jstris is located above the 22nd line, and any blocks locked above the 21st line will disappear.",
        "https://youtu.be/z4WtWISkrdU",
    },
    {"Falling speed",
        "fallingspeed gravity",
        "term",
        "Falling speed is often described as “G,” i.e., how many lines the blocks fall in one frame (usually assuming 60 fps).\\nG is a relatively large unit. The speed of Lv 1 in a regular Marathon (one second per line) is 1/60 G, and 1G is about Lv 13 speed. The highest speed of modern Tetris is 20G because the field height is 20 lines. The real meaning of 20G is “Infinite falling speed,” and even when the field height is more than 20 lines, 20G modes force all the blocks to fall to the bottom instantly. You can learn more about 20G at the “20G” entry\\nIn Techmino, falling speed is described as the frames it takes for a block to fall one unit; for example, a speed of 60 refers to one unit per second (as the game runs in 60 fps as default).",
    },
    {"20G",
        "gravity instant",
        "term",
        "The fastest falling speed of modern Tetris. In 20G modes, pieces appear instantly on the bottom of the field without the actual process of falling. This sometimes also limits a piece’s sideways movements, as it is not always possible to make a piece climb over a bump or out of a well in 20G. You can learn more at the unit “G” at the “falling speed” entry.",
    },
    {"Lockdown Delay",
        "lockdelay lockdowndelay lockdowntimer",
        "term",
        "The delay between block touching the ground and locking down (i.e., can no longer be controlled, and the next piece spawns).\\nModern Tetris games often have forgiving lockdown delay mechanics where you can reset this delay by moving or rotating (up to 15 times), and you can sometimes stall for time by doing this. Classic Tetris games often have a far less forgiving lockdown delay.",
    },
    {"ARE",
        "spawn appearance delay",
        "term",
        "Sometimes called the Entry Delay. ARE refers to the delay between the lockdown of one piece and the spawn of another piece.",
    },
    {"Line ARE",
        "appearance delay",
        "term",
        "The delay between the start of a line clear animation to the spawn of the next piece.",
    },
    {"Death ARE",
        "die delay dd",
        "term",
        "When an existing block blocks the spawn location of the next piece in the field, a delay will be added to the spawn ARE, referred to as the death ARE. This mechanism can be used along with IHS and IRS to prevent death. \\nOriginal idea by NOT_A_ROBOT.",
    },
    {"Finesse",
        "finesse",
        "term",
        "A technique to move a piece into the desired position with the minimum number of key presses. This saves time and reduces chances to misdrop.\\nYou can practice by playing with Jstris’s “restart on finesse error” or with Techmino’s finesse error sound effect.\\n\\nTechmino’s finesse detection is not precisely “theoretical minimum key presses,” but instead only checks for finesse against a pre-determined par keypress count *when the piece locks in a position that does not require soft dropping*. This means that Techmino will not judge a piece as having a finesse error when you soft drop and spin or tuck.\\nTechmino also introduced additional checks, such as holding while the current piece and the held piece is the same, or holding after you have manipulated the current piece, count as a finesse fault.\\nFinesse% in Techmino is defined to be 100% when par or below par, 50% when one keypress above par, 25% when two keypresses above par, and 0% when three or more keypresses above par.\\nAlso note that in 20G finesse still runs as if there were no gravity, which can cause inaccurate results.",
    },
    {"‘Doing Research’",
        "scientificresearch",
        "term",
        "“Doing scientific research” is a term sometimes used in the Chinese Tetris community, referring to researching/practicing techniques in a low-falling-speed, single-player environment.",
    },
    {"Keymapping",
        "feel",
        "term",
        "Here're some general principles for configuring your controls.\\n\\n1. Avoid assigning one finger to multiple keys that you might want to press together - for example, you won't typically need to press the multiple rotation buttons together. Try assigning other buttons to one finger each.\\n2. Unless you are confident with your pinky, probably avoid assigning it a button. Usually the pointer finger and middle finger are the most agile, but feel free to see how your own fingers perform.\\n3. No need to copy someone else's key config. Every person is different; as long as you keep these ideas in mind, using a different key config should have minimal impact on your skills.",
    },
    {"Handling",
        "feel handling",
        "term",
        "Several main factors that may affect handling:\\n(1) Input delay, which could be affected by device configuration or condition. Restart the game or change your device can probably fix it.\\n(2) Unstable programming or faulty designs. It could be alleviated by lowering the effect settings.\\n(3) Designed on purpose. Adaptation might help.\\n(4) Improper parameter setting. Change the settings.\\n(5) Improper play posture. It’s not convenient to use force. Change your posture.\\n(6) Not being used to the operation after changing the key position or changing the device. Getting used to it or changing the settings might help.\\n(7) Muscle fatigue, response, and decreases in coordination abilities. Have some rest and come back later or in a few days.",
    },
    {"DAS (simple)",
        "das arr delayedautoshift autorepeatrate",
        "term",
        "Imagine typing on a keyboard, where you press and hold the “O” key. \\nYou get a long string of o’s.\\nOn the timeline, it kinds of looks like o—————o-o-o-o-o-o-o-o-o…\\nThe “—————” is DAS, the “-” is ARR.",
    },
    {"DAS & ARR",
        "das arr delayedautoshift autorepeatrate",
        "term",
        "DAS refers to Delayed Auto Shift, how blocks move to the side when you hold left or right. It also refers to the delay between the initial movement (when you press down the button) and the first automatic movement.\\nARR refers to Auto-Repeat Rate, which is the delay between automatic movements. In some games, DAS and ARR are calculated using the unit f (frame). Multiply f by 16.7 (if you are running the game in 60 fps) to convert it to ms (millisecond).",
    },
    {"DAS tuning",
        "das tuning",
        "term",
        "For advanced players who want to play faster, the recommended values are DAS 4–6 f (67–100 ms), ARR 0 f (0 ms). (At 0 ms ARR, pieces will instantly snap to the wall once you get past DAS.)\\n\\nThe ideal configuration strategy for advanced players is to minimize DAS while still being able to reliably control whether to tap or hold, and to set to ARR to 0 if possible, or as low as possible otherwise.",
    },
    {"DAS cut",
        "dascut dcd",
        "term",
        "*Techmino-Exclusive* In Techmino, the DAS timer can be cleared or discharged for a short time when the player starts to control a new piece. This can reduce the case where a piece instantly starts moving if spawned with a direction button held.\\n\\nOther games may have a similar feature but may function differently.",
    },
    {"Auto-lock cut",
        "autolockcut mdcut",
        "term",
        "A feature designed to prevent mis-harddropping from pressing the hard drop key shortly after the last piece is naturally locked down.\\nHard drop key can be disabled for a few frames (depending on the settings) after a natural lockdown.\\n\\nOther games may have a similar feature but may function differently.",
    },
    {"SDF",
        "softdropfactor",
        "term",
        "Soft Drop Factor\\n\\nA way to define soft drop speed as a multiple of natural falling speed. In guideline games, the soft drop is usually 20x the speed of natural falling, i.e., it has an SDF of 20. Techmino does not use SDF to define soft drop speed.",
    },
    {"Shape & Names",
        "mino",
        "term",
        "Here is a list of the all the blocks used by Techmino and their corresponding names:\\nTetrominos:\\nZ: "..CHAR.mino.Z..",  S: "..CHAR.mino.S..",  J: "..CHAR.mino.J..",  L: "..CHAR.mino.L..",  T: "..CHAR.mino.T..",  O: "..CHAR.mino.O..",  I: "..CHAR.mino.I..";\\n\\nPentominos:\\nZ5: "..CHAR.mino.Z5..",  S5: "..CHAR.mino.S5..",  P: "..CHAR.mino.P..",  Q: "..CHAR.mino.Q..",  F: "..CHAR.mino.F..",  E: "..CHAR.mino.E..",  T5: "..CHAR.mino.T5..",  U: "..CHAR.mino.U..",  V: "..CHAR.mino.V..",  W: "..CHAR.mino.W..",  X: "..CHAR.mino.X..",  J5: "..CHAR.mino.J5..",  L5: "..CHAR.mino.L5..",  R: "..CHAR.mino.R..",  Y: "..CHAR.mino.Y..",  N: "..CHAR.mino.N..",  H: "..CHAR.mino.H..",  I5: "..CHAR.mino.I5..";\\n\\nTriminos, Domino, and Mino:\\nI3: "..CHAR.mino.I3..",  C: "..CHAR.mino.C..",  I2: "..CHAR.mino.I2..",  O1: "..CHAR.mino.O1..".",
    },
    {"Bag7 generator",
        "bag7bag randomgenerator",
        "term",
        "Also known as “7-Bag Generator.” Officially known as “Random Generator.”\\nThis is the algorithm used by modern, official Tetris games to generate pieces. Starting from the beginning of a game, there is guaranteed to be one of the seven Tetrominoes for every seven pieces.\\n\\nAn example would be like: ZSJLTOI OTSLZIJ LTISZOJ.",
    },
    {"His generator",
        "history hisgenerator",
        "term",
        "A way to generate pieces, notably used in Tetris: The Grand Master games. Every time a random Tetromino is selected, but if this Tetromino is the same as one of the few previous pieces, then reroll until a different piece is rolled or until a reroll limit is reached.\\nFor example, a “his 4 roll 6” (h4r6) generator rerolls when the piece is the same as one of the four previous pieces and rerolls up to 6 times.\\nThere are other variations as well, such as “his4 roll6 pool35,” which further reduces the randomness of the piece sequence.\\n\\nIn Techmino, the maximum reroll count is half of the sequence length, rounded up.",
    },
    {"HisPool generator",
        "hisPool history pool",
        "term",
        "History Pool, a generator based on the His generator. It introduced a mechanism called “Pool.” When generating a new piece, HisPool randomly selects a piece from the Pool and increases the probability of spawning the least frequent piece.\\n\\nThis mechanism makes the sequence more stable and ensures that the drought won’t last forever.",
    },
    {"bagES generator",
        "bages easy start",
        "term",
        "*Techmino-Exclusive*\\nBag Easy-Start, an improved Bag generator. The first piece in the first bag won’t be those hard-to-place pieces (S/Z/O/S5/Z5/F/E/W/X/N/H).",
    },
    {"Reverb generator",
        "reverb",
        "term",
        "*Techmino-Exclusive*\\nA generator derived from Bag. The Reverb generator repeats each piece several times based on the Bag generator. The probability of repetition decreases when a certain piece repeats too frequently and vice versa.",
    },
    {"Hypertapping",
        "hypertapping",
        "term",
        "Refers to the technique of vibrating your finger on the controller to achieve faster sideways movement speed than holding it.\\nIt is most commonly used on classic Tetris where DAS is relatively slow. In most cases, you do not need to hypertap in modern Tetris games because their DAS is usually fast enough.",
    },
    {"Rolling",
        "rolling",
        "term",
        "Another method of fast-tapping in high-gravity (around 1G) modes (with slow DAS/ARR setting).\\nWhen you perform rolling, you fix the position of one hand and the controller, and then tap the back of the controller with fingers on your other hand repeatedly. This method allows even faster speeds than hypertapping (see “Hypertapping” for more) and requires much less effort.\\nThis method was first discovered by Cheez-fish, and he has once achieved a tapping speed of more than 20 Hz.",
    },
    {"Passthrough",
        "pingthrough",
        "term",
        "Refers to a situation where the attacks from both players were sent to the other player’s board without canceling out. Another term called “pingthrough” refers to a situation where a passthrough occurs due to Internet delays.",
    },
    {"Tetris OL attack",
        "top tetrisonlineattack",
        "term",
        "Single/Double/Triple/Tetris sends 0/1/2/4 attack(s).\\nT-Spin Single/Double/Triple sends 2/4/6, half if Mini.\\nCombo send 0, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5.\\nBack to Back sends extra 1 (or 2 if T-Spin Triple).\\nAll Clear sends extra 6 lines. This extra 6 lines will be sent to opponents directly, and does not cancel the buffered incoming damage.",
    },
    {"Techmino attack",
        "techminoattack",
        "term",
        "Check the user manual on the bottom right corner of the homepage for more information.",
    },
    {"C2 Generator",
        "cultris2generator cultrisiigenerator c2generator",
        "term",
        "All Tetrominoes have an initial weight of 0.\\nEvery time, divide all weights by 2, add a random number between 0 and 1, pick the piece with the highest weight, and divide this piece’s weight by 3.5.",
    },
    {"Stacking",
        "stacking",
        "term",
        "Often refers to stacking Tetrominoes without leaving holes. An essential skill.",
    },
    {"Rotation buttons (1/2)",
        "doublerotation",
        "term",
        "Using both clockwise and counter-clockwise rotation buttons reduces the number of key presses by replacing three rotation presses with one press of the opposite direction.\\nFinesse assumes the use of both rotation buttons.",
    },
    {"Rotation buttons (2/2)",
        "triplerotation",
        "term",
        "Using all three rotation buttons (the third being 180° rotation), any piece only requires one rotation press to reach the desired direction.\\nHowever, it is not exactly useful for not every game has this feature, and the speed increase from learning this technique is not as much as when you learn using both rotation buttons as opposed to one. You can skip this technique unless you want extreme speeds.",
    },
    {"Drought",
        "drought",
        "term",
        "A situation where a piece you want, often the I Tetromino (a.k.a. the Long Bar), does not spawn for a long time. This often happens and can be deadly for classic Tetris, but it is almost impossible for modern Tetris thanks to the Random Generator.\\nWith the Random Generator, there can be at most 12 other pieces between two I Tetrominoes.",
    },
    {"Bone block",
        "bone tgm",
        "term",
        "The block skin used by the earliest version of Tetris.\\nIn earlier times, computers all used the Command-Line Interfaces (like cmd on Windows, Terminal on Mac, or Console on Linux), so a single mino in the game Tetris is represented using two enclosing square brackets [ ]. It looks like bones, so it is sometimes called bone blocks.\\nIn Techmino, bone blocks are defined as “a single, fancy block skin that all of the blocks use.” Different block skins may have different types of bone block styles.",
    },
    {"Semi-invisible",
        "half invisible semi",
        "term",
        "Refers to a rule where the tetrominoes will become invisible after some time.\\nThis time interval is not definite, and it is acceptable to describe it as “disappear after a few seconds.”",
    },
    {"Invisible",
        "invisible",
        "term",
        "Refers to a rule where blocks will disappear instantly when locked onto the field. \\nN.B. It is also acceptable to refer to an invisible mode where a disappearing animation is shown. However, this makes the game a lot easier, so in Techmino, the invisible mode without such animations is referred to as “Sudden Invisible.”",
    },
    {"MPH mode",
        "mph",
        "term",
        "Memoryless (random spawn), Previewless (no next queue), Holdless. A mode that requires quite some reaction speed.",
    },
    {"Input delay",
        "input delay",
        "term",
        "Any input device takes some time for the input to reach the game. This delay can range from a few ms to a few dozen ms.\\nIf input delay is too long, the controls can feel uncomfortable.\\nThis delay is often due to the performance of the hardware and software used, which is often something out of your control. Turn on performance mode (or turn off power saving mode) on your device, and turn on gaming mode on your monitor/TV (if you have one), which may help reduce input delay.",
    },
    {"Secret Grade",
        "larger than",
        "term",
        "An easter egg mode from the TGM series. During a “secret grade” gameplay, the player tries to make a “>” shape with one hole in each line using blocks. The ultimate goal is to finish the whole shape using 19 lines.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=Secret_Grade_Techniques",
    },
    {"Cold Clear",
        "cc coldclear ai bot",
        "term",
        "A Tetris bot. \\nDeveloped by MinusKelvin originally for Puyo Puyo tetris. The Cold Clear build in Techmino supports all-spin and TRS.",
    },
    {"ZZZbot",
        "ai bot zzztoj",
        "term",
        "A Tetris bot. Built by the Chinese Tetris player 奏之章 (Zòu Zhī Zhāng, see entry below) and has decent performance in many games",
    },
    -- # Setups
    {"Openers",
        "setup openers",
        "setup",
        "Openers are setups that can be built when a game begins. You can still make these setups mid-game, but will often require a different set of piece placements.\\n\\nGood setups usually satisfy two to three of the following:\\n- Can adapt to many piece orders,\\n- Strong attack, minimal waste of the T piece,\\n- Require minimal soft dropping for faster placement and using finesse,\\n- Has clear follow-up strategies with few branches.\\n\\nMost openers make use of the Random Generator (bag-7 generator) and exploit the fact that it gives one of every piece for every seven pieces. This element of predictability makes it possible to have reliable setups.",
    },
    {"DT Cannon",
        "dtcannon doubletriplecannon",
        "setup",
        "Double-Triple Cannon.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=dt",
    },
    {"DTPC",
        "dtcannon doubletriplecannon",
        "setup",
        "A follow-up of the DT Cannon that ends with an All Clear.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=dt",
    },
    {"BT Cannon",
        "btcannon betacannon",
        "setup",
        "β Cannon, Beta Cannon.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=bt_cannon",
    },
    {"BTPC",
        "btcannon betacannon",
        "setup",
        "A follow-up of the BT Cannon that ends with an All Clear.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=bt_cannon",
    },
    {"TKI 3 Perfect Clear",
        "ddpc tki3perfectclear",
        "setup",
        "A TSD opener that leads to a Double-Double-All Clear.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=TKI_3_Perfect_Clear",
    },
    {"QT Cannon",
        "qtcannon",
        "setup",
        "A DT Cannon-like setup with a higher probability of sending a DT Attack.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=QT_cannon",
    },
    {"Mini-Triple",
        "mt minitriple",
        "setup",
        "A Mini T-Spin - T-Spin Triple structure.",
        "https://harddrop.com/wiki?search=mt",
    },
    {"Trinity",
        "trinity",
        "setup",
        "A TSD + TSD + TSD or TSMS + TST+ TSD setup.",
        "https://harddrop.com/wiki?search=trinity",
    },
    {"Wolfmoon Cannon",
        "wolfmooncannon",
        "setup",
        "An opener.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=wolfmoon_cannon",
    },
    {"Sewer",
        "sewer",
        "setup",
        "An opener.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=sewer",
    },
    {"TKI",
        "tki-3 tki3",
        "setup",
        "TKI-3. It can either refer to a TKI-3 starting with a TSD or a C-spin starting with a TST.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=tki_3_opening",
    },
    {"God Spin",
        "godspin",
        "setup",
        "A setup that is fancy on the eyes [but awkward to use in action]. Invented by Windkey.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=godspin",
    },
    {"Albatross",
        "albatross",
        "setup",
        "A fancy, fast-paced opener with TSD–TST–TSD–All Clear, hardly wasting any T pieces.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=Albatross_Special",
    },
    {"Pelican",
        "",
        "setup",
        "An Albatross-ish opener to use when the piece orders do not support that.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=Pelican",
    },
    {"Perfect Clear Opener",
        "7piecepuzzle",
        "setup",
        "An All Clear opener with a high success rate (~84.6% when you have an I in the Hold queue and ~61.2% if that’s not the case). In Techmino’s PC Practice modes, the setup that leaves an irregular opening is this setup.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=Perfect_Clear_Opener",
    },
    {"Grace System",
        "liuqiaoban gracesystem 1stpc",
        "setup",
        "A PC opener with a success rate of ~88.57%. The 4×4 square in the PC challenge is this setup.",
        "https://four.lol/perfect-clears/grace-system",
    },
    {"DPC",
        "DPC",
        "setup",
        "An almost 100% TSD + PC setup with no blocks in the field and the last block of 7-bag in the next queue. More information on tetristemplate.info.",
        "https://tetristemplate.info/dpc/",
    },
    {"Gamushiro Stacking",
        "gamushiro",
        "setup",
        "(ガムシロ積み) A TD-Attack opener.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=Gamushiro_Stacking",
    },
    -- # Pattern
    {"Mid-game Setups",
        "midgamesetups",
        "pattern",
        "Refers to some setups usually used to send a lot of garbage mid-game. Some of them can also be openers, though it is usually unnecessary.",
    },
    {"C-spin",
        "cspin",
        "pattern",
        "A T-Spin Triple + T-Spin Double attack, known as TKI in Japan.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=c-spin",
    },
    {"STSD",
        "stsd",
        "pattern",
        "Super T-Spin Double, a setup that allows two T-Spin Doubles.\\nBut when the garbage is right under the STSD cave, it is impossible to perform two TSDs.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=stsd",
    },
    {"STMB Cave",
        "stmb",
        "pattern",
        "STMB cave, a donation setup by using S/Z to block off a 3-wide well and clear a T-Spin Double.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=stmb_cave",
    },
    {"Fractal",
        "shuangrenjian fractal spider",
        "pattern",
        "A setup involving overlapping two TSD setups.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=Fractal",
    },
    {"LST stacking",
        "lst",
        "pattern",
        "An infinite T-Spin Double setup.",
        "https://four.lol/stacking/lst",
    },
    {"Hamburger",
        "hamburger",
        "pattern",
        "A donation setup that opens up for Tetrises.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=hamburger",
    },
    {"Imperial Cross",
        "imperialcross",
        "pattern",
        "Covering a cross-shaped hole with an overhang to do two T-Spin Doubles.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=imperial_cross",
    },
    {"Kaidan",
        "jieti kaidan stairs",
        "pattern",
        "A setup that can donate a TSD on a stair-looking terrain.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=kaidan",
    },
    {"Shachiku Train",
        "shachikutrain shechu",
        "pattern",
        "A setup that can donate two TSDs on a TST setup.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=Shachiku_Train",
    },
    {"Cut Copy",
        "qianniao cutcopy",
        "pattern",
        "A setup to donate a T-Spin Double over a small hole and can do another T-Spin Double after that.",
    },
    {"King Crimson",
        "kingcrimson",
        "pattern",
        "Stacking TST(s) on top of a STSD.\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link.",
        "https://harddrop.com/wiki?search=King_Crimson",
    },
    {"Consecutive PCs (1/3)",
        "pcloop",
        "pattern",
        "You can find detailed guides on “Tetris Hall” about 1st–4th and 7th PC. After you finish the 7th PC, exactly 70 blocks are used so you can go back to the 1st PC.",
        "https://shiwehi.com/tetris/template/consecutivepc.php",
    },
    {"Consecutive PCs (2/3)",
        "pcloop",
        "pattern",
        "four.lol has guides on 5th and 6th PC.",
        "https://four.lol/perfect-clears/5th",
    },
    {"Consecutive PCs (2/3)",
        "pcloop",
        "pattern",
        "A complete PC-loop tutorial written by NitenTeria.",
        "https://docs.qq.com/sheet/DRmxvWmt3SWxwS2tV",
    },
    -- # Savedata managing
    {"Console",
        "cmd commamd minglinghang kongzhitai terminal",
        "command",
        "Techmino has a console that enables debugging/advanced features.\\nTo access the console, repeatedly tap (or click) the Techmino logo or press the C key on the keyboard on the main menu.\\n\\nCareless actions in the console may result in corrupting or losing saved data. Proceed at your own risk.",
    },
    {"Reset setting",
        "reset setting",
        "command",
        "Go to console, type “rm conf/setting” and then press enter/return.\\nRestart Techmino for this to take effect.\\nTo revert this action, enter Settings then go back out.",
    },
    {"Reset statistics",
        "reset statistic data",
        "command",
        "Go to console, type “rm conf/data” and then press enter/return.\\nRestart Techmino for this to take effect.\\nTo revert this action, play one game and reach a game over or win screen.",
    },
    {"Reset unlock",
        "reset unlock",
        "command",
        "Go to console, type “rm conf/unlock” and then press enter/return.\\nRestart Techmino for this to take effect.\\nTo revert this action, update any mode's status on the map.",
    },
    {"Reset records",
        "reset record",
        "command",
        "Go to console, type “rm -s record” and then press enter/return.\\nRestart Techmino for this to take effect.\\nYou can revert this action on an individual-mode basis; play one game and have its leaderboards updated to recover that mode's leaderboards.",
    },
    {"Reset key",
        "reset virtualkey",
        "command",
        "Go to console, type “rm conf/[keyFile]” and then press enter/return.\\nKeyboard: key, Virtualkey: virtualkey, Virtualkey save: vkSave1(2)\\nRestart Techmino for the first two settings to take effect.\\nEnter corresponding settings page and go back to get one file back.",
    },
    {"Delete replays",
        "delete recording",
        "command",
        "Go to console, type “rm -s replay“ and then press enter/return.\\nTakes effect immediately.",
    },
    {"Delete cache",
        "delete cache",
        "command",
        "Go to console, type “rm -s cache” and then press enter/return.\\nTakes effect immediately.",
    },
    -- # English
    {"SFX",
        "soundeffects",
        "english",
        "Acronym for “Sound Effects.” Also abbrevated as “SE” in Japan.",
    },
    {"BGM",
        "backgroundmusic",
        "english",
        "Acronym for “Background Music.”",
    },
    {"TAS",
        "tas",
        "english",
        "Acronym for “Tool-Assisted Speedrun (Superplay).”\\nPlay a game with special tools without breaking the game’s rules (at the programming level).\\nIt is generally used to get theoretical maximum scores or achieve interesting goals.\\nA lightweight TAS tool is built into Techmino.",
    },
    {"AFK",
        "afk",
        "english",
        "Acronym for “Away From Keyboard,” or in a broader sense, a period when you are not playing.\\nTaking regular breaks help relieve your muscle strain and allow you to play better when you come back.",
    },
}
`,dict_ja=`local HDsearch="https://harddrop.com/wiki?search="
local HDwiki="\\n詳しい情報は、地球儀ボタンをクリックしてHarddrop wikiにあります!"
return {
    {"翻訳者からのメッセージ 1",
        "",
        "help",
        "この日本語版TetroDictionary(通称:Zictionary)は、英語版を通して翻訳されています\\nそのため中国語版の内容を正確に反映していない可能性があります\\n\\n翻訳者を知りたい、翻訳に協力したい場合は地球儀ボタンをクリックしてGithubのページにアクセスしましょう!",
        "https://github.com/26F-Studio/Techmino/blob/main/parts/language/dict_ja.lua",
    },
	{"Zictionaryの使い方",
        "Zictionary dictionary tetrodictionary dict 使い方",
        "help",
        "Zictionaryはテトリスについての様々な情報が載っている辞書のようなものです\\n\\nTetroDictionary下の検索バーに単語を入れると該当する用語が表示されます\\nもし該当用語が0件の場合、すべての用語が表示されます\\n\\n画面上でスクロールすることで表示する用語を変更できます\\n\\n右下のコピーボタンをクリックすることで現在表示している内容をクリップボードにコピーします\\n右下に地球儀ボタンがある場合、クリックすることでブラウザで外部サイトにアクセスします\\n\\nもし希望する単語で欲しい用語が引っかからない場合、Githubのページから編集できます\\n地球儀ボタンからぜひアクセス","https://github.com/26F-Studio/Techmino/blob/main/parts/language/dict_ja.lua",
},
    {"初心者へ",
        "readme 初心者 下級者 コツ ガイド 上達",
        "help",
        "テトリス初心者の方へ\\n\\t2つの大事なこと:\\n\\t\\t1.操作性のいいテトリスを選びましょう(TechminoやTETR.IO, Jstris, Tetr.js)\\nガイドラインから大きく離れ、プログラミング教材に使われているような操作性の悪いものはプレイしないでください\\n\\t\\t2.ネクストを見る、テトリスを安定して行う等の基本的な能力育成に時間を費やしましょう\\nとりあえず今は、Tspinみたいな技は置いときましょう\\nどうせ基礎に費やす時間は変わりません\\n\\t2つの技術:\\n\\t\\t1.ミノの出現位置と操作方法を覚えて、好きな場所に移動できるようになりましょう\\n\\t\\t2.次のミノの置く場所をあらかじめ決められるようになりましょう\\n\\n地球儀ボタンをクリックすると中国のテトリスプレイヤー、Tatianyiさんが書いた「Suggestion for new players to Tetris Online」という記事の英語版(翻訳者:User670)が見れます",
        "https://github.com/user670/temp/blob/master/tips_to_those_new_to_top.md",
    },
    {"おすすめの練習法",
        "readme 初心者 下級者 コツ ガイド 上達 練習",
        "help",
        "ここでは、おすすめの上達法を紹介します\\nもし煮詰まった状態になった場合は、リラックスして好きなモードを楽しみましょう\\n楽しむことが一番大事です!\\n\\n以下は、あなたが最初に目指す目標のリストです\\nA,B,Cの3つを同時にこなしていくことをおすすめします\\n\\nA.積みその1\\n\\tA1.ミノを置く前に次のミノのことも含めて考えてみてください\\nもし次のミノの置き場所がなかったりと上手くいかない場合には、今持ってるミノの置き場所を考え直してみてください\\n\\tA2.地形を平らにすることを意識するとどんなミノ順にも対応しやすい地形ができます(一部ではより具体的に横置きを意識するとも言われています)\\n\\nB.操作効率と速さ\\n\\tB1.ゴーストを見ながら置かないでください\\nこのミノをここに置くにはこの操作をするというのを頭の中で処理してください\\n\\tB2.回転キーは左右両方使ってください\\n一回の入力で済む操作は一回で処理しましょう\\n\\tB3.最適化を覚え始めてきたら速さはあまり気にしないでください\\n最適化は癖付けるものなので一度身につければ、精度の高い動きをしながら速くなることが容易になります\\n\\nC.積みその2\\n\\tC1.ゲームオーバーにならずにスプリント(40Line)を完走する\\n\\tC2.速さを大きく落とさずにホールドなしでスプリント(40Line)を完走する \\n\\tC3.速さを大きく落とさずにTechrashだけでスプリント(40Line)を完走する\\n\\tC4.速さを大きく落とさずノーホールド、Techrashだけでスプリント(40Line)を完走する\\n\\nCは難易度を調整しやすいので、自分の状況に合わせて難易度を調整してください(「速さを大きく落とさない」とは自分にとって具体的にどのぐらいのなのか等)\\n\\nCが終わった場合は、再びA1の練習をしてください\\nこれはテトリスの基本技術の一つでネクスト把握を能力が高ければどんなゲームモードでもすぐに上達できます",
    },
    {"Tspinを学ぼう",
        "t tspin t-spin tスピン 上達法 初心者 下級者 ガイド tip おすすめ 練習 helps",
        "help",
        "Tspinはテトリスの中でも高等技術なのでTspinができる地形を見ているだけでは、習得できません\\nまた積みの技術やネクストを見る能力も必要になってきます\\nもし本当にTspin技術を上達させたい場合は、積み技術などの土台となる技術をしっかり習得しましょう\\n\\nおすすめの習得タイミング:スプリント(40Line)を60秒(条件によっては40～120秒)以内に完走、Techrashだけで完走、ホールドなしで大きく速さを落とさずに完走、これら全てができるようになった時にTspinを学び始めることをおすすめします",
    },
    {"Techmino公式web",
        "homepage web mainpage ホームページ　ウェブ　メインページ テクミノ テックミノ techmino",
        "help",
        "Techminoの公式ホームページです!\\n最新の安定版Techminoをダウンロードしたり、プロフィールを編集したりできます\\n地球儀ボタンから是非アクセスしてください",
        "http://studio26f.org",
    },
    {"灰机wiki",
        "huiji wiki ウィキ うぃき 灰机 フイジ",
        "help",
        "huiji wiki\\n\\n中国のテトリス研究グループとそのサブグループに所属しているテトリスプレーヤー達が管理している中国のテトリスwikiです\\n現在、大部分のページがHard drop wikiとTetris wikiから参照、翻訳されたページになっています",
        "https://tetris.huijiwiki.com",
    },
    {"HardDrop wiki",
        "harddrop hd wiki ハードドロップ ハードロ ウィキ うぃき",
        "help",
        "テトリス最大コミュニティ、HardDropが運営している英語テトリスwikiです",
        "https://harddrop.com/wiki/Tetris_Wiki",
    },
    {"Tetris wiki",
        "tetris テトリス てとりす wiki ウィキ うぃき",
        "help",
        "Tetris wikiはテトリス関連の情報に焦点を当てたwikiです\\nMyndziが2015年に開設しました\\n公式テトリス及びファン製作の落ちものパズルゲームの記録、ゲームの仕様の解析、上達のためのガイドの作成など様々な記事が長年にわたり何千も投稿されています",
        "https://tetris.wiki",
    },
    {"Tetris Wiki Fandom",
        "tetris テトリス てとりす wiki ウィキ うぃき fandom ファンダム ふぁんだむ",
        "help",
        "英語のテトリスwikiです\\n公式テトリスを重点的にまとめています",
        "https://tetris.fandom.com/wiki/Tetris_Wiki",
    },
    {"Four.lol",
        "four wiki lol fourlol フォー ウィキ うぃき テンプレ template",
        "help",
        "様々な開幕や連パフェが集められたテトリスwikiです",
        "https://four.lol",
    },
    {"テトリス堂",
        "tetris テトリス てとりす hall はる 日本語 japanese テンプレ template",
        "help",
        "日本語サイトです\\n開幕のチュートリアル、パフェクイズなどのミニゲーム、連パフェの詳細な解説があります",
        "https://shiwehi.com/tetris/",
    },
    {"テトリステンプレ集＠テト譜",
        "wiki ウィキ うぃき atwiki テンプレ template 日本語 japanese",
        "help",
        "非常に多くのテンプレを保有している日本語atwikiです",
        "https://w.atwiki.jp/tetrismaps/",
    },
    {"テトリスブログ - PerfectClear",
        "テンプレ template 日本語 japanese 開幕",
        "help",
        "数は多くないですが開幕テンプレのセットアップが詳細に解説されている日本語サイトです",
        "https://tetristemplate.info/"
    },
	{"ほゐスライド",
        "上達 練習 ほゐ スライド",
        "help",
        "日本のテトリスプレイヤー、whipemerald氏が作ったテトリスを上達させるためのスライド\\nテトリスフレンズの時代に作られたものだが今の時代でも問題なく通じる",
	"https://docs.google.com/presentation/d/1kYU2T6Kb-CVVshOa3BHGIhCoOWbbbKUekQqq-TsZgoY/mobilepresent?slide=id.p",
    },
    {"テト譜",
        "fumen テト譜 譜面 研究　解析",
        "help",
        "Mihys氏が開発したテトリスの地形を描画や共有ができる偉大なサイト\\n他のテトリスツールを使用する際にもよく使われる\\nAdd-onからframe.jsを選択することでさらに拡張した機能が使えます",
        "http://fumen.zui.jp"
    },
    {"Fumen for Mobile",
        "fumenformobile fm fumen テト譜 譜面 モバイル mobile もばいる 研究 解析",
        "help",
        "Newjade氏によってテト譜をスマホ等でより直感的に使えるように開発されたテト譜サイトです\\nフィールドの画像出力や範囲塗りなどの公式のテト譜にはない機能も多数あります",
        "https://knewjade.github.io/fumen-for-mobile/",
    },
{"テト譜ブラウザ",
        "fm fumen テト譜 譜面 研究 解析",
        "help",
        "主にテト譜を管理するためのソフト\\n大量にテト譜を管理する人は持っていて損はない",
	"https://com.nicovideo.jp/community/co1370000",
    },
	{"solution-finder",
        "fm fumen テト譜 譜面 研究 解析",
        "help",
        "パフェの確率やパターン、最大ren数など様々な解を見つけたり確率を計算できるツール\\n日本ではテンプレ制作、それ以外ではパフェ関連に使われることが多い",
	"https://solution-finder.readthedocs.io/ja/latest/",
    },


    -- Webpages / Organizations
    {"Github Repository",
        "githubrepository sourcecode src ソース リポジトリ りぽじとり github",
        "org",
        "Techminoの公式Githubです\\n星をお願いします!",
        "https://github.com/26F-Studio/Techmino",
    },
    {"コミュニティ",
        "community コミュニティ コミュ こみゅにてぃ こみゅ discord ディスコード",
        "org",
        "テトリスコミュニティに参加して、他のプレイヤーと交流しよう!\\n地球儀ボタンからHardDropのdiscordサーバーに参加できます",
        "https://discord.gg/harddrop"
    },
	{"テトリスオンラインポーランド",
        "tetrisonline servers top toj toz poland japan zapan",
        "org",
        "地球儀ボタンをクリックするとTOPクライアントの情報にアクセスできますが2022年11月25日現在、TOP,TOJ,TOZサーバーはダウンしています",
        "http://tetrisonline.pl/",
    },
    {"Tetris OL Servers",
        "tetrisonline servers tos",
        "org",
        "地球儀ボタンをクリックするとTeatube氏作成の中国のTetris Online Studyの情報にアクセスできます",
        "http://teatube.ltd/tos",
    },
    {"サポート1",
        "support サポート 寄付 wechat vx weixin alipay zfb zhifubao",
        "org",
        FNNS and "こちらの内容はプラットフォームの関係により非表示にされています\\n詳しくはTechminoのdiscordサーバーにて聞いてください" or "WechatやAlipayを使ってTechminoに寄付してくださる場合は、ゲームメイン画面の「TECHMINO」のTを連打→コンソール画面で「support」と入力→QRコードを読み取って寄付してください",
    },
    {"サポート2",
        "support サポート 寄付 afdian aidadian",
        "org",
        FNNS and "こちらの内容はプラットフォームの関係により非表示にされています\\n詳しくはTechminoのdiscordサーバーにて聞いてください" or "Aifadianを使ってTechminoに寄付してくださる場合は、地球儀ボタンからURLを開いてください\\nAifadianの場合、寄付金額から6%の手数料がかかります",
        FNNS and "https://youtu.be/dQw4w9WgXcQ" or "https://afdian.net/@MrZ_26",
    },
    {"サポート3",
        "support サポート 寄付 patreon p\\97\\116\\114\\101\\111\\110",
        "org",
        FNNS and "こちらの内容はプラットフォームの関係により非表示にされています\\n詳しくはTechminoのdiscordサーバーにて聞いてください" or "Patreonを使ってTechminoに寄付してくださる場合は、地球儀ボタンからURLを開いてください\\nPareonの場合、一定額以上の寄付に対して手数料がかかります",
        FNNS and "https://youtu.be/dQw4w9WgXcQ" or "https://www.p\\97\\116\\114\\101\\111\\110.com/techmino",
    },

    -- Games
    {"テトリス トレーナー トレビアン",
        "tetris trainer tres bien 上達 練習 テトリス トレーナー トレビアン",
        "game",
        "こな氏によって開発されたチュートリアルサイトです\\nTspinや最適化、SRS等の対戦テトリスで使う技術を学べます\\nノーホールド、Techrashだけでスプリント(40Line)を完走できたプレイヤーにおすすめです",
        "http://taninkona.web.fc2.com/ttt/",
    },
    {"テトリス パフェチャレンジ",
        "tetris perfect clear challenge パフェ 連パフェ 上達 練習",
        "game",
        "Chokotia氏によって開発された開幕パフェのチュートリアルサイトです\\nテトリス トレーナー トレビアンをクリアし、SRSに慣れたプレイヤーにおすすめです",
        "https://davdav1233.github.io/ttpc/",
    },
    {"ナゾテト",
        "nazo なぞ ナゾ 謎 上達 練習",
        "game",
        "Tspinやオールスピン、簡単な問題から難しい問題まで様々な謎テトがあります\\nテトリス トレーナー トレビアンをクリアしたプレイヤーにおすすめです",
        "http://klyuchevskayanazoteto.web.fc2.com/",
    },
    {"TPO",
        "nazo なぞ ナゾ 謎 上達 練習",
        "game",
        "Tetris puzzle O(テトリスパズルオー)はTCV100によって開発された中国の謎テトサイトです\\nナゾテトのパズルをいくつか含んでいます",
        "http://121.36.2.245:3000/tpo"
    },
	{"詰めテトリス",
        "nazo なぞ ナゾ 謎 上達 練習",
        "game",
        "ナゾテトよりも実践向けの謎テトがまとめられたatwiki\\nテトリスDS時代のものなのでパフェとren火力はなし、TSMはTSS扱い",
        "https://w.atwiki.jp/tetrisds/pages/26.html"
    },
	{"twowide",
        "nazo なぞ ナゾ 謎 上達 練習",
        "game",
        "多数の高難易度謎テト、豊富なモードがある謎テトサイトです\\nオンラインランキングもあるので他のプレイヤーと競い合うことができます",
        "https://twowi.de"
    },
	{"downstack-practice",
        "nazo なぞ ナゾ 謎 上達 練習",
        "game",
        "downstackと書いてあるが掘以外にもTspinや途中パフェ等の謎テトを生成する謎テトサイトです\\n中盤テンプレも練習でき、より実践に近い謎テトを解くことができます",
        "https://himitsuconfidential.github.io/downstack-practice/"
    },


    {"途中メモ 1",
        "note memo ノート メモ nb NB DM notice",
        "game",
        "次からは公式テトリスや落ちものパズルゲームの簡単な紹介です\\n\\nもちろんここにあるゲームがすべてではありません\\nまたTechmino制作者がコメントをしていることがありますが、あくまで主観的な意見でありそのゲームの良し悪しを決めるものではないことに注意してください\\n事実と意見を明確に区別するために意見は大括弧([,])で囲んでいます",
    },
    {"King of Stackers",
        "kos kingofstackers こす コス キング スタッカーズ",
        "game",
        "ブラウザ | マルチプレイ | モバイル端末可\\n略称はkos\\nターン制の非公式テトリスです\\n基本的なルール:\\nプレイヤーは1ターンにつき7つずつミノを設置していきます\\n相手から火力が送られてもLine消去をしている間はせり上がりません\\nこのゲームはppsの概念がないためとても戦略的です\\nまた試合設定で様々な攻撃ルールに設定できます(通常はExclusive+)",
        "https://kingofstackers.com/",
    },
    {"Tetr.js",
        "tetrjs tetr.js js",
        "game",
        "ブラウザ | シングルプレイ | モバイル端末可\\nオリジナルは単純な1人用の非公式テトリスです[見た目もシンプルでアニメーションはほとんどありません]\\nしかし有志により細かいチューニングや多くのモード、仮想キーボードの追加等が行われました\\n地球儀ボタンのリンクはfarter氏によるDig Modへのリンクです",
        "http://farter.cn/t",
    },
    {"Tetra Legends",
        "tl tetralegends レジェンズ レジェンド てとら テトラ ",
        "game",
        "ブラウザ | シングルプレイ | モバイル端末不可\\n略称はTL\\n多くの1人用モードと2つの隠しリズムゲームを持っている1人用の非公式テトリスです\\n通常他のゲームでは隠されている部分まで可視化されています\\nしかし複合的な理由により2020年12月に開発が中止されました",
        "https://tetralegends.app",
    },
    {"Ascension",
        "asc ASC ascension アズセシオン",
        "game",
        "ブラウザ | シングル/マルチプレイ\\n略称はASC\\n同じくASCと呼ばれる独自の回転法則があり、多くの一人用モードがあります\\n1vs1モードは2022年11月26日現在、α版です\\nTechminoのstackモードはASCからアイデアを得ています",
        "https://asc.winternebs.com",
    },
    {"Jstris",
        "js jstris じぇすとりす ジェストリス",
        "game",
        "ブラウザ | シングル/マルチプレイ | モバイル端末可\\n略称はjs\\n現在、主流の非公式テトリスの1つであり、様々なシングルモードと豊富な設定、自由に配置できる仮想キーボードを備えています\\nまたjstris+を導入することでさらに拡張されたjstrisを楽しむことができます",
        "https://jstris.jezevec10.com",
    },
    {"TETR.IO",
        "io tetrio tetr.io てとりお テトリオ tetr てとらいお テトライオ",
        "game",
        "ブラウザ | シングル/マルチプレイ\\n略称はテトリオ\\n現在、主流の非公式テトリスの1つであり、レーティングシステムや多くのゲーム設定を変更できるカスタムゲーム、FFAなど様々な要素を備えています\\nまた安定して動作しやすいデスクトップクライアント版が存在します\\nそしてTETR.IO+を導入することでさらに拡張されたテトリオを楽しむことができます\\n[safariじゃテトリオはできないようです]",
        "https://tetr.io",
    },
    {"Nuketris",
        "nuketris nuke ぬけ ヌケ ぬけとりす ヌケトリス",
        "game",
        "ブラウザ | シングル/マルチプレイ\\n基本的な1人用モードやレーティングシステムを備えた非公式テトリスです\\n独特なゲームルールをしており、Ospinもできます",
        "https://nuketris.com",
    },
    {"Worldwide Combos",
        "wwc worldwidecombos ワールド ワイド コンボ コンボズ",
        "game",
        "ブラウザ | シングル/マルチプレイ\\n略称はWWC\\n世界規模の1vs1やリプレイと戦えるモード、豊富なゲーム設定など様々な機能を備えた非公式テトリスです",
        "https://worldwidecombos.com",
    },
    {"Tetris Friends",
        "tf tetrisfriends notrisfoes　テトリス てとふれ テトフレ のとりす ノトリス official 公式",
        "game",
        "ブラウザ | シングル/マルチプレイ\\n略称はテトフレ\\n今は亡き公式テトリス\\n昔はとても人気があったが数年前にサービス終了した\\n現在は「Notris Foes」という非公式プライベートサーバーが存在している",
    },
    {"tetris.com",
        "tetris テトリス online オンライン official 公式",
        "game",
        "ブラウザ | シングルプレイ\\ntetris.comにある公式テトリス\\nゲームモードはマラソンのみです\\n公式テトリスでは珍しくマウス操作に対応しています","https://tetris.com/play-tetris/?utm_source=top_nav_link&utm_medium=webnav&utm_campaign=playNow_btm_tst&utm_content=text_play_now",
	},
    {"Tetris Gems",
        "tetris テトリス online オンライン official 公式 gem ジェム",
        "game",
        "ブラウザ | シングルプレイ\\ntetris.comにある公式テトリス\\n横1列を揃えると揃えた部分が重力の影響を受ける特殊なブロックになり、連鎖的にLine消去が可能なゲームである\\nさらに3種類の宝石ブロックが存在し、それぞれ特殊能力を持っています","https://tetris.com/play-tetrisgems",
    },
    {"Tetris Mind Bender",
        "tetris テトリス online オンライン official 公式 gem ジェム",
        "game",
        "ブラウザ | シングルプレイ\\ntetris.comにある公式テトリス\\nルールはマラソンと同じですが「マインドベンダー」という特殊なブロックが出現します\\nマインドベンダーを消すことで様々なイベントが起こります","https://tetris.com/play-tetrismindbender",
    },

    {"Techmino",
        "techmino テクミノ テックミノ",
        "game",
        "クロスプラットフォーム | シングル/マルチプレイ\\n日本語だとテクミノと呼ばれます\\nMrZを筆頭にLÖVEを使って開発された落ちものパズルゲームです\\n多くの一人用モード、多彩なカスタマイズ性を持ち、オンラインマルチプレイも徐々に開発されています",
    },
    {"Falling Lightblocks",
        "fl fallinglightblocks ライト フォーリング ",
        "game",
        "ブラウザ/iOS/Android | シングル/マルチプレイ\\n縦でも横でも遊べるマルチプラットフォームの非公式テトリス\\nDASやLine消去時間は固定されています\\nまたモバイル端末では操作を一部カスタマイズ可能です\\nFalling Lightblocks内にあるゲームのほとんどはファミコンのクラッシクテトリスがベースになっていますがモダンテトリスも存在します\\nバトルシステムは半分ターン制、半分リアルタイム制になっており、相殺システムはありません",
        "https://golfgl.de/lightblocks/",
    },
	{"HATETRIS",
        "hatetris へいと ヘイト はてとりす ハテトリス",
        "game",
        "ブラウザ | シングルプレイ\\n常に嫌なブロックが出現する一風変わった非公式テトリス\\nLine消去数がそのままスコアになる\\nテトリス全体で見ても非常に難しいことから人間によるスコア更新よりも機械を使った研究の方が盛んである",
        "https://qntm.org/files/hatetris/hatetris.html",
    },
    {"Cambridge",
        "cambridge ケンブリッジ",
        "game",
        "クロスプラットフォーム | シングルプレイ\\nLÖVEを使って開発された非公式テトリスです\\n簡単かつ高度にカスタマイズできる新しいゲームモードがあります\\n元々はJoe Zeng氏が開発していましたが2020年10月8日のver.0.1.5からMilla氏が引継ぎました\\n-Tetris wikiより",
    },
    {"Nanamino",
        "nanamino ななみの なな ナナミノ ナナ",
        "game",
        "Windows/Android | シングルプレイ\\n面白い回転システムを持っている開発中の非公式テトリスです",
    },

    {"TGM",
        "tetrisgrandmaster tetristhegrandmaster gm グランド マスター",
        "game",
        "アーケード/PS/NS | シングル/ローカルマルチプレイ\\nTetris The Grand Masterはアーケードテトリスです\\nS13やGM等のモードはこのシリーズから始まりました\\nTGM3はシリーズの中で最も有名なタイトルです\\nNintendo SwitchやPlaystation 4に移植されてます",
    },
    {"DTET",
        "dtet デテト でてと ディテト でぃてと",
        "game",
        "Windows | シングルプレイ\\nTGMのクラッシクルールをベースに20Gや強力な回転システムを導入した非公式テトリスです\\n現在、このゲームを見つけ出すのは難しく、見つからないDLLファイルを自分で補う必要があります",
    },
    {"Heboris",
        "hb heboris へぼ ヘボリス へぼりす",
        "game",
        "Windows | シングルプレイ\\nアーケードのような雰囲気の非公式テトリスです\\n他のテトリスの様々なゲームモードをシミュレーションできます",
    },
    {"Texmaster",
        "txm texmaster テクス マスター",
        "game",
        "Windows | シングルプレイ\\nTGMの全モードを収録している非公式テトリスです\\nただしインスタントソフトドロップやキックテーブルの仕様がワールドルールと少し異なります",
    },

    {"Tetris Effect",
        "te tec tetriseffectconnected TE:C テック テトエフェ エフェクト コネクテッド",
        "game",
        "PS/Oculus Quest/Xbox/NS/Windows | シングル/マルチプレイ\\n略称はテトエフェ(TEC)\\n入力に反応するド派手なグラフィックとサウンドを備えた現在、主流の公式テトリスの1つ\\n「Connected」の文字がない基本版では1人用モードしかない\\nコネクテッドの方ではコネクテッドバトル、Zoneバトル、スコアアタック、クラッシクスコアアタックの計4つのモードで対戦が可能となっている(ただしフレンドマッチやローカルマッチではZoneなし等のルール設定が可能)",
    },
    {"Tetris 99",
        "t99 tetris99 99 ",
        "game",
        "Nintendo Switch | シングル/マルチプレイ\\n99人でバトルロイヤルを行う公式テトリス\\n従来の対戦テトリスにはない戦略が多く存在する\\nまたDLCをダウンロードすることでマラソンやcpuとの試合、キャラクタースキンなどが追加される",
    },
    {"ぷよぷよテトリス",
        "ppt puyopuyotetris　ぷよテト ぷよぷよ テトリス ぷて",
        "game",
        "PS/NS/Xbox/Windows | シングル/マルチプレイ\\nぷよぷよとテトリスの2つが入ったゲーム\\n異種対戦もでき、多くのゲームモードが存在する\\n\\n[steam版は操作性が悪く、オンライン対戦も酷い]",
    },
    {"Tetris online",
        "top toj toz tetrisonline poland japan zapan テトオン",
        "game",
        "Windows | シングル/マルチプレイ\\n今は亡き日本の公式テトリス\\nDASとARRの値を設定できますがどちらも0にはできません\\nプライベートサーバーで稼働していましたが2022年12月3日現在、2種類の日本サーバー全てダウンしています",
    },
    {"Tetra Online",
        "TO tetraonline tetraoffline offline テトラ てとら オンライン オフライン",
        "game",
        "Windows/macOS/Linux | シングル/マルチプレイ\\nDr OceloとMineによって開発された非公式テトリスです\\n操作性は意図的にAREが高い値に設定されているのでぷよテトなどに近い\\nThe tetris companyがDMCA(デジタルミレニアム著作権法)を理由にsteamから削除されました\\nしかしオフライン版は現在もGithubから入手可能です\\n\\nテトラオフライン",
        "https://github.com/Juan-Cartes/Tetra-Offline/releases/tag/1.0",
    },

    {"Cultris II",
        "c2 cultris2 cultrisii カルトリス",
        "game",
        "Windows/OS X | シングル/マルチプレイ\\nクラッシクテトリスをベースにデザインされた非公式テトリス\\n対戦モードはコンボ(ren)に重点を置いたものとなっており、コンボ地形を組み立てる速さ、コンボ消化速度、掘のスキルが試されるゲームとなっている\\n\\n[Mac版は長い間メンテナンスされてなく、macOS Catalineよりも新しいビルドのmac OSではこのゲームをプレイできません]",
    },
    {"Nullpomino",
        "np nullpomino ぬるぽ ヌルポ ぬるぽみの ヌルポミノ ぬる",
        "game",
        "Windows/macOS/Linux | シングル/マルチプレイ\\nカスタマイズ性の高い非公式テトリス\\nゲーム内のほぼ全ての設定を変更できる\\n\\n[しかしUIが時代遅れでフルキーボードでの操作が必須になります\\nNullpommino初心者は慣れるまで問題がある可能性があります\\nまたmac OS Montereyではこのゲームは動作しません]",
    },
    {"Misamino",
        "misamino ミサミノ みさみの みさかみの ミサカミノ",
        "game",
        "Windows | シングルプレイ\\nローカルでMisaminoというbotと対戦できる非公式テトリス\\nAPIを学ぶことで自分でbotを作ることもできる",
    },
{"four-tris",
        "four 練習 上達 解析 研究",
        "game",
        "Windows | シングルプレイ\\n主に試合を解析するためのソフト\\n盤面の取り込みは画像解析によって行う(かなり精度が高い)\\n n回目のパフェやren、チーズの練習もできる",
	"https://github.com/fiorescarlatto/four-tris/releases",
    },
    {"Touhoumino",
        "touhoumino 東方 touhou とうほう トウホウ",
        "game",
        "Windows | シングルプレイ\\nNullpominoを改造し、東方projectの要素を追加した非公式テトリス\\nマラソンではスペルカードが存在し、制限時間内に必要なスコアに到達しないといけない\\n\\n[自分の腕に自信がある人におすすめ\\nそうじゃないとどうやって死んだのかすらわからない]",
    },

    {"Tetris Blitz",
        "blitz ea mobile phone ブリッツ イーエー スマホ スマートフォン モバイル",
        "game",
        "iOS/Android | シングルプレイ\\nEAによって開発されたスマートフォン用の公式テトリス\\nゲーム開始時に多くのミノが落ちて来たり、Line消去を連続で行うことで「Frenzy」モードに入ることができたり、トップアウトが存在しなかったりと様々な特殊な仕様がある\\n\\nこのゲームは2020年4月に配信を終了しています",
    },
    {"Tetris (EA)",
        "tetris ea galaxy universe cosmos mobile phone テトリス イーエー スマホ スマートフォン モバイル　ギャラクシー 銀河 宇宙 ユニバーサル コスモス",
        "game",
        "iOS/Android | シングル/マルチプレイ(?)\\nEAが開発したもう1つのスマートフォン用公式テトリス\\nスワイプとワンタッチの2つの操作方法がある\\nまたマラソンの他にギャラクシーモードというものが存在する\\nこのモードのクリア条件は指定されたミノを使い切る前にギャラクシーミノを消去することです\\n\\nこのゲームは2020年4月に配信を終了しています",
    },
    {"Tetris (N3TWORK)",
        "tetris n3twork mobile phone テトリス スマホ スマートフォン モバイル",
        "game",
        "iOS/Android |シングルプレイ\\nN3TWORKが開発したスマートフォン用の公式テトリス\\n3分のウルトラ、マラソン、100人(cpu)のバトルロイヤルモードがある\\n\\n[UIは素晴らしいが操作性が良くない]",
    },
    {"Tetris Beat",
        "n3twork rhythm リズム ビート beat スマホ スマートフォン モバイル mobile phone",
        "game",
        "iOS | シングルプレイ\\nN3TWORKがAppleアーケードで配信しているスマートフォン用の公式テトリス\\nマラソンの他にビートモードがあるがBGMのリズムに合わせてミノを置いて行くだけである\\n\\n[エフェクトが重いし操作性もイマイチ]",
    },
    {"Tetris Journey",
        "tetrisjourney mobile phone huanyouji スマホ スマートフォン モバイル ジャーニー",
        "game",
        "iOS/Android | シングルプレイ\\nTencentによって開発され、中国限定で配信されたスマートフォン用の公式テトリス\\nレベルモードや対戦モード、いくつかの1人用モードがある\\n対戦モードでは2分間の時間制限があり、対戦者がトップアウトしない場合、より多く火力を送った方が勝者となる\\n仮想キーボードの配置や大きさを調整できる",
    },
    {"JJ Tetris",
        "jjtetris じぇーじぇー ジェージェー じぇじぇ ジェジェ",
        "game",
        "Android | マルチプレイ\\n正式名称:JJ块\\nJJ棋牌のカジュアルゲーム\\n縦画面、低入力遅延と操作性が高い\\nDASやARR、20Gソフトドロップなども制限はありますが設定可能です\\nホールドやB2Bシステム、相殺システムはありません\\n他にもそれぞれの攻撃の火力の上限が4、コンボが強いという特徴がありますが、それ以外はモダンテトリスに似ています",
    },

    {"Huopin Tetris",
        "huopin qq ほうぴん",
        "game",
        "Windows |マルチプレイ\\n正式名称:火拼俄罗斯\\nTencent Game Centerが開発した公式テトリス\\n幅12の盤面、DASやARRはキーボードのタイピングと同じ、ネクストは1つ、ホールドはない\\n3line消し(火力:2)とテトリス(火力:3)でしか攻撃を送れない\\n下穴が市松模様のようになっているので掘ることはほぼ不可能",
    },

    -- Terms
    {"翻訳者からのメッセージ 2",
        "",
        "help",
        "ここから用語解説になります\\n\\nこれらの用語は全てのコミュニティで使われているとは限らず、また全ての用語が常に同じ意味を持っているとは限らないことに注意してください\\nここでは主にTechmino内で使うことを想定しています"
    },
    {"LPM",
        "linesperminute speed 速さ 早さ はやさ lpm l'pm",
        "term",
        "Lines per minute\\n\\tプレイヤーの速さを計る指標です\\nゲームによってLPMの計算方法が異なります\\n例えばテトリスオンラインの場合、PPSという値からLPMを計算しています(1PPS=24LPM)\\nこの時、下穴消去が無視されているので文字通りのLPMとは異なります\\nTechmino内ではこのLPMを「L'PM」と表記しています",
    },
    {"PPS",
        "piecespersecond speed 速さ 早さ はやさ pps",
        "term",
        "Pieces per second\\n\\tプレイヤーの速さを計る指標です",
    },
    {"BPM",
        "blocksperminute piecesperminute speed 速さ 早さ はやさ bpm ppm",
        "term",
        "Blocks per minute\\n\\tプレイヤーの速さを計る指標です\\n音楽用語との混同を避けるためにPPMと呼ばれることもあります",
    },
    {"KPM",
        "keysperminute keypressesperminute 速さ 早さ はやさ 入力 kpm",
        "term",
        "Keypresses per minute\\n\\tプレイヤーの入力の速さを計る指標です",
    },
    {"KPP",
        "keysperpiece keypressesperpiece 速さ 早さ はやさ 効率 入力",
        "term",
        "Keypresses per piece\\n\\tミノ操作の効率を計る指標です\\n最適化を習得することでこの値を下げることができます",
    },
    {"APM",
        "attackperminute 火力 攻撃",
        "term",
        "Attack per minute\\n\\tプレイヤーが出した火力を計る指標です",
    },
    {"SPM",
        "linessentperminute 火力 攻撃",
        "term",
        "[lines] Sent per minute\\n\\tプレイヤーの攻撃力を計る指標です\\nここでは相殺に使用した火力はカウントされず、相手の火力ゲージに送った火力だけがカウントされます",
    },
    {"DPM",
        "digperminute defendperminute 防御 火力 相殺 サバイバル 生存 掘り",
        "term",
        "Dig(またはDefend) per minute\\n\\tプレイヤーの掘り、若しくは防御力(相殺火力+掘ったLine数)を計る指標です",
    },
    {"RPM",
        "receive jieshou 受け 外し 相殺外し",
        "term",
        "[lines] Receive per Minute\\n\\tプレイヤーが受けた攻撃量を計る指標です",
    },
    {"ADPM",
        "attackdigperminute vs",
        "term",
        "(Attack + Dig) per minute\\n\\tその試合で対戦者間のスキルを比較するための指標です\\nTETR.IOのVSスコアはこれと違い、100(Attack+Dig)/sで計算しています",
    },
    {"APL",
        "attackperline efficiency 効率 火力 攻撃",
        "term",
        "Attack per line (cleared)\\n\\tよく「効率」という言葉で置き換えられます\\n1Line単位の火力を算出している値であり、ここではTSSがテトリスやTSDよりも効率が良いとされる",
    },

    {"Single",
        "single 1 シングル",
        "term",
        "1回で1Line消すこと",
    },
    {"Double",
        "double 2 ダブル",
        "term",
        "1回で2Line消すこと",
    },
    {"Triple",
        "triple 3 トリプル",
        "term",
        "1回で3Line消すこと",
    },
    {"Techrash",
        "techrash tetris 4 quad クアッド",
        "term",
        "*Techmino用語*\\n1回で4Line消すこと",
    },
    {"Tetris",
        "tetris 4 quad クアッド",
        "term",
        "ゲームの名称(商標)\\nまた公式テトリスにおいて1回に4Line消すことを指す言葉\\n\\nTetra(ギリシャ語で「4」を意味する)とTennis(テトリスの制作者が好きなスポーツ)を組み合わせた造語\\n\\nまた任天堂とセガが開発したテトリスはThe Tetris Companyのライセンス登録を受けていますが、この2社がテトリスそのものの著作権を保有しているわけではありません\\n\\n-- Alexey Pajitnovに感謝を!",
    },
    {"All Clear",
        "pc perfectclear ac allclear パフェ オール パーフェクト",
        "term",
        "Perfect Clear(PC、パフェ)とも言われる\\n盤面内にある全てのミノを消去すること\\n明らかにあるのに見逃した場合、「今パ」と言われることがある(逆にこれに言い返すフレーズも存在する)",
    },
    {"HPC",
        "hc clear halfperfectclear ハーフ セミ",
        "term",
        "Techmino用語\\nHalf Perfect Clearの略\\n下穴以外のミノを全て消去するとHPCとなり、軽い火力強化が行われる\\n\\n俗に言う実質パフェ",
    },

    {"Spin(回転入れ)",
        "spin 回転 スピン",
        "term",
        "任意のミノを回転システムを使うことにより入れること\\nこれを使うことにより通常では置けない場所にでも置くことが可能になります\\nまたこの操作により火力やスコアに補正がかかることがあります\\nゲームによって回転システムが異なる場合がある",
    },
    {"Mini",
        "mini ミニ みに",
        "term",
        "ゲーム側が簡単すぎると判断したspinに適用されるシステムです\\nそのために昔のゲームでは「EZ T-spin」とも呼ばれていました\\nminiの付いたspinは火力やスコアボーナスが通常のspinよりも少なくなるように設定されています\\n\\n基本は細かい仕様を覚えずにminiになる地形だけ覚えておけば大丈夫です",
    },
    {"All-Spin",
        "allspin オール 全",
        "term",
        "全てのミノのspinに火力、スコア補正がかかるルールのこと(通常ルールはTspinのみ)\\nまた稀にルールではなくAll-spinという回転法則を指すこともある",
    },
    {"T-Spin",
        "tspin ティ ts ふんどし",
        "term",
        "Tミノを回転入れ(spin)すること\\n\\n最近の公式テトリスでは3コーナールールを採用している\\nこれは回転入れをした時にTミノの回転軸を中心として斜め4マスの内3マス以上が埋まっていた場合にTspinとして判断するというものである\\nゲームによっては一部のTspinをmini扱いしている",
    },
    {"TSS",
        "t1 tspinsingle ティ シングル",
        "term",
        "T-Spin Single\\nTspinで1Line消去すること",
    },
    {"TSD",
        "t2 tspindouble ティ ダブル",
        "term",
        "T-Spin Double\\nTspinで2Line消去すること",
    },
    {"TST",
        "t3 tspintriple ティ トリプル",
        "term",
        "T-Spin Triple\\nTspinで3Line消去すること",
    },
    {"MTSS",
        "minitspinsingle tsms tspinminisingle tsm mini 1 シングル",
        "term",
        "Mini T-spin Single\\n通称:T-spin Mini Single(TSMS)\\nTSSだがmini判定のもののこと\\n\\nゲームによってどのTSSがminiなのか判定が異なっていたり、そもそもなかったりする",
    },
    {"MTSD",
        "minitspindouble tsmd tspinminidouble tsm mini 2 ダブル",
        "term",
        "Mini T-Spin Double\\n通称:T-spin Mini Double(TSMD)\\nTSDだがmini判定のもののこと\\nMTSDは一部のゲームにしか存在せず、発生する地形も異なる場合がある\\n\\nさらに一部のテトリスではMTSDを想定しておらず最悪の場合、フリーズや強制終了する",
    },
    {"O-Spin",
        "ospin o オー 2",
        "term",
        "Oミノはどんなに回転させても形が変化しないため回転入れが不可能でした(一部では毎秒500～600回転させることでOミノが熱膨張したり溶けたり変形したりするという噂があります)\\nそのためテトリスコミュニティ内でミームのように扱われ、フェイクビデオ等も作成されました\\n\\nXRSという回転法則ではOミノを特定の地形で回転させると穴にテレポートするように設計し、それをOspinとしています\\nまたTRSでは同様にすることでテレポートさせるだけでなく、他のミノの形に変形することによってOspinを実現しています",
    },
    {"Rotation Systems(回転システム、回転法則)",
        "wallkick rotationsystem 回転 壁 法則",
        "term",
        "ミノがどのように回転するかを決定しているシステムのこと\\nモダンテトリスの場合、ミノは特定の回転軸を中心に回転している(もちろんそれがないゲームもある)\\nそして回転させたときに壁や既にマスが埋まっている場所にミノが重なると通常「壁蹴り」という処理が行われ、あらかじめ決められた位置にズレ、再び壁蹴りが必要かの判定が行われる\\nこれを繰り返しミノは設置可能な穴に移動する\\nまたこの時、spin判定が出る場合がある",
    },
    {"方向表記",
        "direction 0r2l 02 20 rl lr 表記 ミッション",
        "term",
        "SRS系統の回転システムではミノの向きを記述する表記法がある\\n「0」や「正の向き」の場合は出現した時と同じ向き、「R」や「右」、「1」という場合は90°右回転(CW)した向き、「L」や「左」、「2」や「逆の向き」の場合は180°回転させた向き、「3」の場合は90°左回転(CCW)した向きを表す\\n\\n例えば0->Lは左回転1回、2->右は逆の向きの状態から左回転1回となる(これは回転方向ではなくミノの向きを表す表記法なので右回転ではない)\\nカスタムモードにあるミッションはこの表記を使っている\\n\\n「->」や数字使った表記は日本であまり使われない",
    },
    {"ARS",
        "arikrotationsystem atarirotationsystem あたり アタリ ありか アリカ",
        "term",
        "これは以下の2つの意味があります\\n\\nTGMにて採用されているArika Rotation Systemのこと\\n\\n回転した時にミノを左上に揃えるように回転方向するAtari Rotation Systemのこと",
    },
    {"ASC",
        "ascension アスセンション アズセンション",
        "term",
        "テトリスクローン「Ascension」にて使用されている回転法則\\n全てのミノに同じ2つのキックテーブルが使用されている\\nキック範囲は右回転、左回転両方で±2マスとなっています",
    },
    {"ASC+",
        "ascension ascplus アスセンション アズセンション",
        "term",
        "ASCをTechminoのために修正したもの\\n180°回転の壁蹴りをサポートしています",
    },
    {"BRS",
        "bulletproofsoftware バレット",
        "term",
        "BPS rotation system\\nBullet-Proof Software社のテトリスで使用されている回転法則",
    },
    {"BiRS",
        "biasrs biasrotationsystem",
        "term",
        "*Techmino用語*\\nBias Rotation System\\nXRSとSRSを基に作られたTechmino独自の回転法則\\n回転時に右や左、ソフトドロップを入力しているとその方向にミノがズレるように回転に補正がかけられます\\n下方向に補正がかかっているときに回転に失敗(既存のマスと重なる)と下方向への補正をかけずに再試行します\\nそしてそれにも失敗した場合は右、または左の補正をかけずに再試行します\\nそれにも失敗した場合には回転されません\\n\\nBiRSはXRSに比べてキックテーブルが1つのため覚えやすく、さらにSRSの特徴である地形に沿った壁超え等も備えています\\n\\n追加事項:最後の回転補正を試行する時のルールとして移動するユークリッド距離が√5を超えてはいけない、また右または左に補正がかかっている場合には最後の回転補正はもう一方の方向には行かないという2つのルールがBiRSにあります",
    },
    {"C2RS",
        "c2rs cultris 2 カルトリス",
        "term",
        "Cultris II rotation system\\nCultris IIで使われている回転法則\\n全ての回転、全てのミノのキックテーブルが同じ(ズレ方:左、右、下、左下、右下、左に2、右に2)\\nまた左右は左が優先される\\n\\nTechminoではこの回転法則を改良したC2symという回転法則があり、そちらは左右の優先順位をミノと回転によって決定している",
    },
    {"C2sym",
        "cultris2 カルトリス c2rs",
        "term",
        "C2RSを改良した回転法則\\nミノと回転によって左右の優先順位を変えています",
    },
    {"DRS",
        "dtetrotationsystem dtet デテト でてと ディテト でぃてと ",
        "term",
        "DTET Rotation System\\nDTETで使われている回転法則",
    },
    {"NRS",
        "nintendorotationsystem 任天堂 ニンテンドー",
        "term",
        "Nintendo Rotation System\\nファミコンやゲームボーイ時代のテトリスに使用された回転法則\\nゲームボーイ用の左手用とファミコン用の右手用の2種類があります",
    },
    {"SRS",
        "superrotationsystem 回転",
        "term",
        "Super Rotation System\\n最もポピュラーな回転法則であり、多くの自作回転法則の基礎にもなっている\\nそれぞれのミノには上下左右4方向あり、右回転、左回転の2つの方向に回転できる(この回転法則では180°は存在しない)\\nそして回転した時にミノが既に埋められているマスや壁、床に重なった場合、位置ズレが発生し床や壁を蹴ることができます(通称:壁蹴り)\\nキックテーブルの詳細はTetris wikiやHardDropにて調べられます",
    },
    {"SRS+",
        "srsplus superrotationsystemplus tetr",
        "term",
        "SRSを180°に対応させ、さらに一部の回転に対称性を持たせた回転法則です",
    },
    {"TRS",
        "techminorotationsystem techmino",
        "term",
        "*Techmino用語*\\nTechmino Rotation System\\nSRSを基にした回転法則\\nSとZが回転しない場合を修正し、いくつかの便利なキックテーブルがあります\\n\\nTRSはOspinをサポートしています",
    },
    {"XRS",
        "xrs",
        "term",
        "X rotation system\\nTetris.grのT-EXで使われている回転法則\\n方向を入力していると別のキックテーブルを使えるという機能を備えておりプレイヤーがミノのズレる先を操作できるようになっている",
    },

    {"Back to Back",
        "b2b btb backtoback バック",
        "term",
        "略称はBtB(B2B)\\n他のLine消去を挟まずにspinやテトリスをすること\\n火力やスコアに補正がかる\\nコンボとは違い、Line消去に関わらないミノを置いてもBtBには影響がない",
    },
    {"B2B2B",
        "b3b b2b btb backtoback バック",
        "term",
        "*Techmino用語*\\nBack to Back to Back、略称はB3B\\nBtBを続けて維持し、BtBゲージを満タンにすることでB3Bになり、火力やスコアに更に強力な補正がかかる",
    },
    {"Fin, Neo, Iso",
        "fin neo iso 特殊 フィン ネオ アイエスオー ふぃん ねお あいえすおー",
        "term",
        "Tspinのキックテーブルと成立条件を利用した特殊なTspinです\\nゲームによってはminiになったりと価値が異なりますが実戦では限られた場面でしか使われません",
    },
    {"モダンテトリス",
        "modern モダン 現代",
        "term",
        "“モダン“テトリスや落ちものパズルゲームのコンセプトは曖昧です\\n一般的にテトリスガイドラインに準じて作られたテトリス(公式テトリス)に似ている落ちものパズルゲームはモダン(現代的)ゲームと言われます\\nこれに共通するルールを以下に挙げますがこれは厳密な定義ではありません\\n\\n1.可視部分の盤面は横10×縦20、さらにこの上に見えない盤面があることが多い\\n2.ミノは盤面可視部分の中央上部に生成され、それぞれ一貫した方向と色を持っています\\n3.7-BagやHisのような適当な生成機構がある\\n4.適当な回転システムを持ち、最低でも左右、両回転が可能\\n5.適当な設置システムがある\\n6.適当なトップアウト条件がある\\n7.複数個(通常3～6個)のネクストが表示されており、ネクストに表示されているミノが出現時にの方向と一致している\\n8.ホールドがある\\n9.ミノの出現時間やLine消去時間がある場合、通常IRSやIHSがある\\n10.正確かつ素早い横移動のためのDASシステムがある",
    },
    {"テトロミノの形",
        "shape structure form tetromino tetrimino ミノ テトロミノ テトリミノ ブロック ピース 形",
        "term",
        "通常のテトリスの場合、使用するミノは全てテトロミノ、つまり4つの正方形が最低でも1辺それぞれ共有するように並べたブロックです\\n回転して合同になることは許し、反転で合同になることは許さなかった場合、全部で7種類のテトロミノができます\\nこれらのテトロミノはアルファベットに似ていることからそれぞれZ,S,J,L,T,O,Iと名前が付けられている\\n詳しくは「形と名前」の項目を参照",
    },
    {"テトロミノの色",
        "colour hue tint tetromino tetrimino ミノ テトロミノ テトリミノ ブロック ピース 色",
        "term",
        "最近のモダンテトリスではそれぞれのテトロミノに同じ配色をしています\\n\\nZ-赤、S-緑、J-青、L-オレンジ、T-紫、O-黄色、I-水色\\n\\nTechminoも例にもれずこの配色を使っています",
    },
    {"IRS",
        "initialrotationsystem 先行 操作",
        "term",
        "Initial Rotation System\\nミノ出現前に回転を入力し続けることでミノが回転した状態で出現するシステム\\nミノの重なりによる死亡判定を回避することが可能",
    },
    {"IHS",
        "initialholdsystem 先行 操作",
        "term",
        "Initial Hold System\\nミノ出現前にホールドを入力し続けることでホールドを行った後のミノが出現するシステム\\nミノの重なりによる死亡判定を回避することが可能",
    },
    {"IMS",
        "initialmovesystem 先行 操作",
        "term",
        "*Techmino用語*\\nInitial Movement System\\nミノ出現前に横移動を入力し続けることでミノが1つ横にズレた状態で出現するシステム\\nミノの重なりによる死亡判定を回避することが可能\\n\\n補足:横移動を入力し始めてからミノ出現までの時間がDAS時間よりも長くなければいけません",
    },
    {"Next(ネクスト)",
        "nextpreview next ネク ネクスト ねく ねくすと 次 上達 練習",
        "term",
        "次に来るミノをいくつか表示している部分のこと\\nネクストを処理することによって前もってミノの置く場所を決めることができ、テトリスを上手くなるには必須技術です",
    },
    {"Hold(ホールド)",
        "hold ホールド 一時 保留",
        "term",
        "その時点で操作しているミノがホールド部分に移動し、代わりに元々ホールド部分にあったミノを取り出します(もしホールド部分にミノがなかった場合、ネクストのミノが操作ミノになります)\\nこの操作は通常繰り返すことはできず、一度ホールド部分に移動したミノは再びホールドすることはできません\\n\\n*Techmino用語*\\nTechminoには「その場ホールド」という機能があります\\nこの機能を有効にしていた場合、ホールドから取り出されるミノは従来の出現位置ではなく、その時ミノがある位置に出現します",
    },
    {"Swap",
        "hold ホールド 一時 保留 スワップ",
        "term",
        "ホールドと似た機能ですが、swapはネクストとミノを入れ替えます\\nつまりこの操作をした場合、swapしたミノは次の操作ミノになります\\n\\nこの操作は通常繰り返すことはできず、一度swapしたミノは再びswapすることはできません",
    },
    {"Deepdrop(ディープドロップ)",
        "shenjiang ディープ deep",
        "term",
        "*Techmino用語*\\nこの機能を有効にした場合、床を貫通して回転入れのようにテレポートします\\nミノと同じ形の穴があり、その穴が埋まっている時に下までソフトドロップし、もう一度ソフトドロップを入力することで埋まっている穴にテレポートします\\nこの機能はAIが回転法則の違いを無視できるようになるため特にAIに有効な機能です",
    },
    {"Misdrop(置きミス)",
        "md misdrop ミス 置き",
        "term",
        "意図しない場所にミノを置いてしまうこと\\n\\n日本では、テトリスするためのIミノが縦のまま1つ横にズレることを「あるぎミス」と言ったりする",
    },
    {"Mishold(ホールドミス)",
        "mh mishold ホールド ミス",
        "term",
        "意図しないタイミングでホールドしてしまうこと\\n置きミスにつながったりパフェを逃す原因になります",
    },
    {"sub(切り)",
        "sub 切り タイム 秒 分",
        "term",
        "sub<時間>(<時間>切り)はスプリント(40Line)などのタイムが<時間>未満であることを意味する\\nsubの場合は時間の単位が省かれることが多い\\n例えば、スプリント(40Line)の場合はsub30(30秒切り)、1000Lineの場合はsub15(15分切り)と表す",
    },
    {"Digging(掘り)",
        "downstacking ds 掘り 堀り dig ダウン",
        "term",
        "盤面の下にある下穴などを消していくこと\\n「堀り」ではなく、「掘り」",
    },
	{"Downstack",
        "downstacking down ds 掘り dig ダウン upstack up ud 積み stack",
        "term",
        "大きく見た時に地形を下げる積み方のこと\\n掘りはこれの1種である\\n対義語としてUpstackがある\\n\\n1巡毎に2Line消去をする場合、盤面内は1巡につき8つブロックが増えていく\\nつまり毎巡TSDをすると火力が送れる上にリソースが溜まっていくのである。",
    },
	{"削り",
        "削り 整地",
        "term",
        "主に整地を目的として1～3Line消去をすること\\n無駄な削りもあるが必要な削りも世の中には存在する",
    },
    {"Donation(ドネイト)",
        "donate ドネイト 空中",
        "term",
        "穴を一旦塞いでTspinの地形を作ること\\n特にTspinの後に塞いだ穴が空く形状となるもの",
    },
    {"‘Debt’",
        "qianzhai debt owe",
        "term",
        "中国のテトリスコミュニティで使われる用語(欠债と呼ばれている)\\n\\n特定の地形を完成させないとまともな攻撃(Tspinやテトリス)ができない状況や地形を表す用語\\n端的に言えばTSTタワーやキングクリムゾンのような大型テンプレを組み終わるまでの隙のことを指す\\n大型テンプレを実践でする場合には凝視等で安全なことを確認してから行わないと不利な状況になります",
    },
	{"謎テト",
        "クイズ quiz 謎 上達 練習",
        "term",
        "特定の状況とお題が与えられ、それを満たすような答えを探す詰将棋みたいなもの\\n謎テトがまとめられたサイトもある",
    },
	{"てとぼ",
        "募集 上達 練習 tetobo",
        "term",
        "テトリス募集の略\\nTwitterやDiscord上で対戦相手を募る時に使う言葉\\nTwitterではてとぼをRTしてくれるbotが存在する",
    },
	{"テト譜コード",
        "開発 テト譜 譜面 コード",
        "term",
        "テト譜URLの「v115@～」以降の部分のこと\\nこれにはテト譜地形やコメント等の情報が収められている\\n「v115@」の部分は「m115@」だったり「v095@」だったりする\\n詳しくはnewjade氏が作成した「テト譜v115のデータ構造」というスライド参照",
	"https://docs.google.com/presentation/d/1P5xt0vPGuxSb9hbRW6hvQFYKFoIccfNTJkWTdjtyigc/edit#slide=id.p",
    },
    {"地力",
        "実力 上達",
        "term",
        "あらゆる場面に対応できる総合的な能力のこと\\n要はテトリスの実力\\n\\n実際には速さや見える手、凝視等の根本的な能力の総称として使われることが多い",
    },
	{"パリティ",
        "開発 テト譜 譜面 研究 練習",
        "term",
        "地形を特定の法則に従って2色以上で塗り分けた時の性質のこと\\n今までは主に市松パリティや縦パリティでパフェが取れる条件を絞り込みだけだったが、最近では研究が進みアップスタック時に安定して火力が出せる地形を維持する条件などが解明されている",
    },
    {"Attack & Defend",
        "attacking defending 攻撃 防御 攻防 アタック ディフェンス 火力 相殺",
        "term",
        "attack:相手の火力ゲージに到達した攻撃のこと\\ndefend:相手から送られてきた火力に自分の火力を当てること(日本では「相殺」と呼ばれる)\\nカウンター:相手からの火力を受ける(相殺外し)、または相手の火力を相殺してから相手に攻撃を送り返すこと\\nほとんどのゲームでは1:1で相殺が計算されます\\nつまり相手が火力4で攻撃してきた時に自分がテトリス等で火力4を出した場合、4-4=0 で完全相殺となります",
    },
    {"Combo(コンボ)",
        "ren combo れん レン こんぼ コンボ 連",
        "term",
        "日本では「ren」とも言う\\n連続してLien消去を行うこと\\n1回目のLine消去を0ren目、2回目を1ren目、3回目を2ren目としてカウントアップしていく\\nもちろんLine消去せずにミノを置いたらren数はリセットになる",
    },
    {"Spike(スパイク)",
        "spike スパイク すぱいく まとめ",
        "term",
        "短時間で高火力を出すこと\\nただしネットのラグによって大量の火力が行き来することを「ラグスパイク」と呼ぶことがあるが厳密にはスパイクではない\\nTechminoとTETR.IOにはスパイクカウンターがあり、これによって短時間でどれだけ高火力を出したかがわかる",
    },
    {"端開け(端空け)",
        "sidewell 端 開け 空け ren combo レン れん コンボ",
        "term",
        "端を任意の幅開ける積み方\\nつまり端開け1列はテトリス積みになります\\n端開け2～4列はren地形になります\\n\\n端開けは幅を広げる程、短時間で積み上げられますがその分相手からの攻撃が簡単に刺さります\\nそのため上級者が端ren等をする場合は相手に隙があるかを確認してから組み始めます",
    },
    {"中開け(中空け)",
        "centerwell 中 開け 空け ren combo レン れん コンボ",
        "term",
        "真ん中を任意の幅開ける積み方\\n基本的に左右から5,6列目を中心に開けることを指す\\nミノを左右に移動させる回数が端開けに比べ多くなるため積み込む速さは遅くなるがそれ以上に選択肢が増えるので好まれる",
    },
    {"Partial well",
        "partialwell 開け 空け ren combo レン れん コンボ",
        "term",
        "日本では使われない用語\\n中でも端でもない左右から2,3,4列目を中心に任意の幅開ける積み方\\n定義的には63積みやヤンキーrenなどがこれにあたる",
    },
    {"Side 1-wide(端開け1列、端空け1列)",
        "s1w side1wide sidewelltetris 端 1 空け 開け テトリス",
        "term",
        "つまり端を開けてテトリス積みをすること\\n最も伝統的な積み方\\n最も簡単に積め、簡単に火力を送れる\\nただし攻撃の幅が狭い(テトリスかドネイトTspinぐらい)ので上に行くほどあまり好まれない",
    },
    {"Side 2-wide(端開け2列、端空け2列)",
        "s2w side2wide 端 2 空け 開け ren combo レン れん コンボ 初心者 下級者",
        "term",
        "端に2列幅を持たせるrenの積み方\\n積みやすくrenによって簡単に火力が出せるので初心者におすすめ\\n上に行くほどren数を稼ぎづらいことからあまり使われない",
    },
    {"Side 3-wide(端開け3列、端空け3列)",
        "s3w side3wide 端 3 空け 開け ren combo レン れん コンボ",
        "term",
        "端に3列幅を持たせるrenの積み方\\n2列開けよりもren数を稼ぎやすいが、2列開けよりもrenが途切れやすい",
    },
    {"Side 4-wide(端開け4列、端空け4列)",
        "s4w side4wide 端 4 空け 開け ren combo レン れん コンボ",
        "term",
        "端に4列幅を持たせるrenの積み方\\nren地形を作る時によく使われる\\n積む幅が狭いので速く積み上げることができ、上手くいった場合にはren数を大きく稼ぐことができる\\nただしrenを繋げるのは少し難しく、また地形が高くなるのが早いので油断していると簡単に刺さる",
    },
    {"Center 1-wide(中開け1列、中空け1列)",
        "c1w center1wide centerwelltetris 中 1 空け 開け テトリス",
        "term",
        "つまり真ん中を開けてテトリス積みをすること\\n攻撃の幅が広く、また簡単に攻撃を組み立てることができるため対戦で好まれる",
    },
    {"Center 2-wide(中開け2列、中空け2列)",
        "c2w center2wide 中 2 空け 開け ren combo レン れん コンボ",
        "term",
        "真ん中に2列の幅を持たせるrenの積み方\\nTミノが遠い時にTspinを作るとなりやすいが意図的に使われることは少ない",
    },
    {"Center 3-wide(中開け3列、中空け3列)",
        "c3w center3wide 中 3 空け 開け ren combo レン れん コンボ",
        "term",
        "真ん中に3列の幅を持たせるrenの積み方\\nSTSDやSTMB-ケイブ、TSTタワー等テンプレを組みやすい幅ではあるが精々10段ぐらいしか積まれない",
    },
    {"Center 4-wide(中開け4列、中空け4列)",
        "c4w center4wide 中 4 空け 開け ren combo レン れん コンボ",
        "term",
        "真ん中に4列の幅を持たせるrenの積み方\\nren数を稼ぎやすく、相手から20段以上の攻撃を受けないと出現ミノの位置にブロックが重ならないのでrenを狙う場合によく使われる\\nrenの調整が強いゲームだと嫌われやすい",
    },
    {"ヤンキーren",
        "partial ヤンキー 空け 開け ren combo レン れん コンボ",
        "term",
        "真ん中でも端でもない2,3,4列目を中心に2~3列の幅を持たせるrenの積み方\\n積み込み難易度の高さや最適化のしづらさからあまり使われることはない",
    },
    {"Residual(種)",
        "res 種 residual c4w s4w 端 中 ren combo れん レン こんぼ コンボ",
        "term",
        "端開けや中開けをした時に幅を持たせた部分にあるブロックの数のこと\\n特に4列renの時に使われる\\nよく使われる種数は種3、または種6だが種3n(n:1以上の整数)なら理論上多くのren数を稼げる\\nまた3nじゃなくても種2などは1ミノLine消去せずに置くことで種6になったりする\\n\\n種3の特徴:消し方の種類が少ないので簡単に習得でき、積みに使うブロック数が多くなるので速く積み上げられるが種6等よりも繋げられないパターンが多い\\n種6の特徴:消し方の種類が多いので難しいですが安定してrenがつなげやすく、途中でTSSを加えられるためゲームによっては非常に強力な攻撃になります",
    },
    {"6–3 Stacking(63積み)",
        "63stacking six-three sixthree 6 3 積み 初心者 下級者 40 スプリント",
        "term",
        "左側に幅6、右側に幅3で積む積み方\\n最適化をある程度習得していれば横2入力が少なくなるのでKPPが少なくなり、積みに使うIミノの割合を下げることができるのでより効率よくテトリスを撃つことができます\\n特にスプリント(40Line)で使われる積み方です\\nしかし端開け(90積み、09積み)と比べ積める幅が狭いので少し練習が必要になります",
    },
    {"Freestyle(フリースタイル)",
        "ziyou フリー",
        "term",
        "主に20TSDで使われる用語\\nLST等のループできるテンプレを使わずに20TSDを完走することを指します\\nLST等のテンプレを使わない分難易度は高いがプレイヤーのTspinスキルを見せることができます",
    },
    {"Topping out(トップアウト)",
        "die death topout toppingout トップ 死 刺",
        "term",
        "モダンテトリスの死亡判定は3つあり、どれか1つを満たすとゲームオーバーとなる\\n\\n1.ブロックアウト:出現したミノが盤面上にあるブロックと重なる\\n2:ロックアウト:致死Lineよりも上にブロックを置く\\n3.トップアウト:せり上がりなどにより地形の高さが40を超える\\n\\nTechminoの場合はブロックアウトの判定しか行っておらず、ロックアウトとトップアウトはない",
    },
    {"Buffer zone",
        "above super invisible disappear 猶予 盤面 上部",
        "term",
        "通常、盤面は縦20段だが実際には21段目以上が存在し、21段目から40段前後までをBuffer Zoneという(日本ではあまり使われない)\\n通常は40段までで十分なのだがゲームによっては足りない場合がある\\n詳しくは「Vanish zone」参照",
    },
    {"Vanish zone",
        "disappear gone cut die 猶予 盤面 上部 死 バグ 無限",
        "term",
        "Buffer zoneよりも上の領域を指す\\n通常はVanish zoneに到達できないが開発者の設計ミスによって到達できるゲームがいくつかある\\nそしてこの領域に侵入すると一般的には強制終了になるがゲームによっては異なる振る舞いをする\\n例えばぷよぷよテトリスではBuffer zoneが43段必要だが十分に確保されていないためLine消去時に最上段のブロックをコピーし続けるバグがあります(具体的な活用方法は地球儀ボタンのリンクをご覧ください)\\nまたJstrisのVanish zoneは22段以上の領域となっており、21段よりも上のブロックは消滅します",
        "https://youtu.be/z4WtWISkrdU",
    },
    {"Falling speed(落下速度)",
        "fallingspeed gravity 落下 重力 20 g",
        "term",
        "1フレーム(通常は60fps)に何段自由落下するかを計る指標\\n単位は「G」\\nGは通常時には大きすぎる単位であり、例えばマラソンのLv.1は1/60Gの落下速度で1GはLv.13相当になります\\nモダンテトリスの最高落下速度は20Gでこれは盤面の高さが20段なことから来ています\\nしかし実際には20Gと表記されていても無限なことが多く、盤面の高さが21段以上でも出現した瞬間にミノが一番下に落ちるようになっている\\n詳しくは「20G」の項目参照\\nTechminoでの落下速度は1ブロック落ちるのに必要なフレーム数で表現されます\\n例えば落下速度60の場合、1秒間に1マス下に落ちます(ゲームがデフォルト60fpsで動作しているため)",
    },
    {"20G",
        "gravity instant 瞬間 落下 重力 20 g",
        "term",
        "モダンテトリスの最高落下速度\\n20Gモードでは実際に20Gで動いているわけでなく、ミノが一番下に出現するようになっている\\nこれによってミノが段差や壁を登れないことがある\\n単位「G」は「Falling speed(落下速度)」の項目参照",
    },
    {"Lockdown Delay(設置時間)",
        "lockdelay lockdowndelay lockdowntimer 設置 ロック 接着 ディレイ 遅延 時間",
        "term",
        "ミノが地面に接してから完全に設置するまでの時間のこと\\nモダンテトリスでは設置時間が比較的緩く、さらに移動や回転によって設置時間をリセットできることが多い\\nほとんどのゲームでは最大15回まで設置時間をリセットできるようになっているが、この回数も操作ミノがあった最低高度を更新することでリセットすることができる\\nこれを使うことで時間稼ぎができる\\nクラッシクテトリスでは設置時間が厳しいことが多々あります",
    },
    {"ARE(出現時間)",
        "spawn appearance delay are 出現 スポーン 遅延 ディレイ 時間",
        "term",
        "ミノが設置してから次の操作ミノが出現するまでの時間のこと",
    },
    {"Line ARE(Line消去時間)",
        "appearance delay line ライン are 消去 遅延 ディレイ 時間",
        "term",
        "Lineを消去するのにかかる時間",
    },
    {"Death ARE(死後硬直時間)",
        "die delay dd 死 硬直 are 出現 スポーン 残機 復活 遅延 ディレイ 時間",
        "term",
        "残機制などが有効になっている時に死亡してから復活するまでの時間\\nTechminoの場合はブロックアウトで死亡した時、次のミノの出現時間に死後硬直時間が加算されます\\nまたIHSやIRSなどを使うことによってブロックアウトを回避できる場合があります\\n\\nこのシステムはNOT_A_ROBOT氏によるアイデアです",
    },
    {"Finesse(最適化)",
        "finesse 最適化 効率 操作 初心者 下級者 上達 練習",
        "term",
        "ミスなく最低限の操作で目的の場所にミノを移動させる技術\\n速さが上がり、ミスも減ります\\nJstrisの「restart on finesse error」やTechminoの最適化失敗音を有効にすることで練習できます\\n厳密にはTechminoの最適化判定は「理論上の最小入力数」ではなく、「ソフトドロップを必要としない位置の時、一定回数以下の入力かどうか」で判定しています\\nそのためソフトドロップが必要なspinなどの時は最適化の判定を行っていません\\nまたホールドと操作ミノが同じ時にホールドをしたり、ホールドする前のミノを無駄に動かしても最適化が失敗しているとは判定されません\\nまたTechminoの最適化率は一定回数以下の場合100%、一定回数より入力が1多い場合50%、入力が2多い場合25%、入力が3以上多い場合0%とされています\\nまた0Gと20Gで最適化の算出方法を変えていないため落下速度が速い時は不正確なことに注意してください",
    },
    {"‘Doing Research’",
        "scientificresearch 研究 上達 練習 科研",
        "term",
        "「科研」という中国のテトリスコミュニティで使われる言葉\\n落下速度の低い1人用モードで技術やテンプレを研究・練習することを言います(日本でもこの練習はありますがその行為のみを指す単語は存在しません)",
    },
    {"Keymapping(キー配置)",
        "feel キー key 操作",
        "term",
        "ここではキーボードでのキーコンフィグについて言及します\\nキーコンフィグの原則\\n1.同時に押される可能性がある複数のキーを1本の指に割り当てないでください\\n基本的には回転3種類(右、左、180°)と左右移動(右、左)はそれぞれ同時に押されることはありません\\n2.既に他のゲームで小指を鍛えていない限り小指を使わないキー配置にしてください\\n基本的には人差し指と中指を中心に組み立てるといいでしょう\\n3.人によって最適なキー配置は違うので使っている人を理由に変える必要はないです\\n\\n最低限の原則を守っていればキー配置による優劣は非常に薄いと考えられます",
    },
    {"Handling(ハンドリング)",
        "feel handling チューニング das arr ハンドリング 操作",
        "term",
        "操作に悪影響を与える主な要因を以下に挙げます\\n1.デバイスの設定や状態による遅延\\nゲームを再起動したりデバイスを変えたりすることで改善されます\\n2.ゲームが重い\\n機器の性能不足やプログラムコードが不安定、設計の不具合が原因です\\nエフェクト設定などを軽くすることで緩和される場合があります\\n3.意図的に操作性を悪くされている\\n適応するしかありません\\n4.DASやARR等のチューニング設定が合っていない\\n適当な値に変更しましょう\\n5.姿勢が悪い\\n腰痛めますよ?\\n6.姿勢やキー配置、チューニングを変えて慣れていない\\n慣れるの諦めるか根気強く頑張りましょう\\n7.疲労\\n早急に休んでください",
    },
    {"DAS (横溜め)(簡易な説明)",
        "das arr delayedautoshift autorepeatrate ダス だす ため 溜め 横",
        "term",
        "キーボードの「O」を長押しすると長いOの文字列ができます\\nこのときOがどのように出現したかというと「O->(長い溜め時間)->O->(僅かな溜め時間)->O->(僅かな溜め時間)->...」のようになります\\nこの長い溜め時間のことをDAS(delay auto shift、別名:横溜め)、僅かな溜め時間のことをARR(auto repeat rate)と呼びます",
    },
    {"DAS & ARR",
        "das arr delayedautoshift autorepeatrate ダス だす ため 溜め 横",
        "term",
        "Delay Auto Shiftの略、日本だと「横溜め」とも言われる\\n左右入力をした時に横に移動する仕組みのこと\\nまた長時間左右入力した時に最初の横に1つズレる移動から次の移動までの時間のこと\\n\\nARRはAuto Repeat Rateの略\\n左右入力を長時間すると連続して横に動き始めるがその時の移動周期のこと\\nゲームによってはDASやARRをフレームで計算しています\\n60fpsで動作するゲームの場合、f(フレーム)×16.7でms(ミリ秒)に換算できます",
    },
    {"DAS tuning(DASチューニング)",
        "das tuning チューニング 操作",
        "term",
        "より速くプレイしたい人はDASを4～6f(67～100ms)、ARRを0f(0ms)にすることをおすすめします(ARR:0というのはDASより長く入力を続けた瞬間、端にミノが移動する設定です)\\n理想の操作方法としては単時間入力と長時間入力を確実にコントロールできるようにし、ARRを0にDASやそれ以外の設定は可能な限り低くすることです",
    },
    {"DAS cut(DASカット)",
        "dascut dcd カット",
        "term",
        "*Techmino用語*通常、ミノが出現する前にDAS時間以上入力をしているとミノが出現した瞬間に動き出します\\nDASカットはこのような現象を減らすためにDAS時間以上入力していても出現時にDASカット分減算する機能です\\n他のゲームにも似たようなものがありますが恐らく異なるでしょう",
    },
    {"Auto-lock cut(自動設置カット)",
        "autolockcut mdcut 自動 カット",
        "term",
        "ミノが自由落下により設置された時にハードドロップを入力してしまうことで暴発するという事故を防ぐ機能です\\n自由落下によって設置した場合、自動設置カット時間の間ハードドロップが無効化されます\\n他のゲームにも似たようなものがありますが恐らく異なるでしょう",
    },
    {"SDF",
        "softdropfactor ソフトドロップ",
        "term",
        "Soft Drop Factor\\n\\nソフトドロップの速さを自由落下の速さの倍数で表現する方法\\nガイドラインテトリスではSDF20、つまりソフトドロップの速さは自由落下の速さの20倍と定められている\\nなおTechminoではSDFを使用してません",
    },
    {"形と名前",
        "mino ミノ みの",
        "term",
        "Techminoで使われる全ブロックとその名前のリストです:\\nTetrominos:\\nZ: "..CHAR.mino.Z..",  S: "..CHAR.mino.S..",  J: "..CHAR.mino.J..",  L: "..CHAR.mino.L..",  T: "..CHAR.mino.T..",  O: "..CHAR.mino.O..",  I: "..CHAR.mino.I..";\\n\\nPentominos:\\nZ5: "..CHAR.mino.Z5..",  S5: "..CHAR.mino.S5..",  P: "..CHAR.mino.P..",  Q: "..CHAR.mino.Q..",  F: "..CHAR.mino.F..",  E: "..CHAR.mino.E..",  T5: "..CHAR.mino.T5..",  U: "..CHAR.mino.U..",  V: "..CHAR.mino.V..",  W: "..CHAR.mino.W..",  X: "..CHAR.mino.X..",  J5: "..CHAR.mino.J5..",  L5: "..CHAR.mino.L5..",  R: "..CHAR.mino.R..",  Y: "..CHAR.mino.Y..",  N: "..CHAR.mino.N..",  H: "..CHAR.mino.H..",  I5: "..CHAR.mino.I5..";\\n\\nTriminos, Domino, and Mino:\\nI3: "..CHAR.mino.I3..",  C: "..CHAR.mino.C..",  I2: "..CHAR.mino.I2..",  O1: "..CHAR.mino.O1..".",
    },
    {"7種1巡",
        "bag 7bag randomgenerator 7 種 1 巡 生成 出現 法 則",
        "term",
        "別名:7-bag、正式名称:Random Generator\\n公式テトリスがミノを生成するのに使うアルゴリズムのこと\\nテトリスには通常7種類のミノがあるが全種類が同じ数出現することが保証されている\\n例:ZSJLOIT OJSIZLT TOILSZJ...",
    },
    {"His generator",
        "history hisgenerator tgm 生成 出現 法 則",
        "term",
        "History generator\\nTGMに使われるミノを生成するときの法則\\n毎回ランダムに7種類の中から選択されるが、もし選択されたものが数個前と同じな場合はまたランダムに7種類の中から選択され最終的に別のミノが選択されるか再選択回数が限界に達して同じミノが選択される\\n例えば「his 4 roll 6」と設定されているジェネレータの場合、選択したミノが前に使った4つのミノの中にある場合、最大6回まで違うミノが出るまで再選択する\\n他に「his 4 roll 6 pool 35」のようにさらにランダム性を減らしたものもある\\nTechminoではrollの値はネクストの長さの半分、小数点以下切り上げになっています",
    },
    {"HisPool generator",
        "hisPool history pool tgm 生成 出現 法 則",
        "term",
        "History Pool generator\\nHis generatorを基に「Pool」という機能を導入した生成法則\\nミノを選択する場合にPoolという袋の中から選択されている\\nPoolの中にあるミノは選択された回数に基づいて選択される確率が変動しており、出現頻度が低いものほど確率が高くなっている\\nこの仕組みによってランダム性が大きく減らされ、同じようなミノばかり来るということはなくなった",
    },
    {"bagES generator",
        "bages easy start 生成 出現 法 則",
        "term",
        "*Techmino用語*\\nBag Easy-Start\\n7種1巡を更に改良した生成法則\\n最初に置きづらいミノ(S/Z/O/S5/Z5/F/E/W/X/N/H)が選択されません",
    },
    {"Reverb generator",
        "reverb 生成 出現 法 則",
        "term",
        "*Techmino用語*\\n7種1巡から派生した生成法則\\n7種1巡を基にしてそれぞれのミノが数回連続して出ようとします\\n特定のミノが頻繫に連続して出ようとすると連続して出る確率が下がり、逆にあまり連続して出ないミノは連続して出るように確率が上げられます",
    },
    {"Hypertapping(ハイパータッピング)",
        "hypertapping ハイパー コントローラー 操作",
        "term",
        "指をコントローラー上で振動させることでARRよりも速い周期で横移動させる技術\\nDASが遅いクラッシクテトリスでよく使われる\\nモダンテトリスのほとんどはDASが十分に短いためこの技術は不要です",
    },
    {"Rolling(ローリング)",
        "rolling ローリング ピアノ コントローラー 操作",
        "term",
        "DASやARRが遅いクラッシクテトリスの高重力(1G以上)下で安定してプレイするための操作方法\\n片方の手とコントローラーを固定し、もう片方の手でコントローラーの背面を叩くこと高速入力を実現している\\nこの操作方法はハイパータッピングよりも速く、さらに少ない力で行うことができます\\nこの操作方法はCheez-fishが最初に発見し、理論上1fに1回操作できると言われています",
    },
    {"Passthrough(貫通)",
        "pingthrough ピンスルー 貫通 すり抜け",
        "term",
        "双方の火力が互いに相殺されず相手の火力ゲージに火力が到達すること\\nまたインターネットのラグにより貫通が発生することを「pingthrough」と言う",
    },
    {"Tetris OL attack",
        "top tetrisonlineattack テトオン toj toz オンライン テトリス 火力 攻撃 計算",
        "term",
        "テトリスオンラインの火力計算\\nSingle,double,triple,tetrisの火力はそれぞれ0,1,2,4となっており、TSS,TSD,TSTの場合は2,4,6となる\\nまたTspin mini判定になると火力が半分になります\\nrenの火力は1ren目から+0,+1,+1,+2,+2,+3,+3,+4,+4,+5,+5,+5...と上限5まで上昇し、元の火力に加算されます\\nBtBの火力は+1、ただしTSTの場合は+2で元の火力に加算されます\\nパーフェクトクリアの火力は+6で元の火力に加算されます\\nただしパーフェクトクリア分の火力は相殺が当たらず、直接相手に送られます",
    },
    {"Techmino attack",
        "techminoattack Techmino てくみの テクミノ てっくみの テックミノ 火力 攻撃 計算",
        "term",
        "少し複雑なためメイン画面の右下にある「?」を参照",
    },
    {"C2 Generator",
        "cultris2generator cultrisiigenerator c2generator カルトリス 生成 出現 法 則",
        "term",
        "Cultris IIで使われる生成法則\\nミノに重みを付けて計算しています\\n初期は全ミノの重みは0に設定されています\\nそしてミノを選択する時、全てのミノそれぞれに次のような処理を施します:\\n現在の重みを半分にし、そこに0～1の間で生成された乱数を加算する((重み/2)+(0～1の乱数))\\n\\nそして算出された値を新たな重みとし、最も重みが大きいミノを選択します\\nまた選択されたミノの重みは3.5で割られ、それを新たな重みとします\\nつまり選択されたミノの新しい重みは((元の重み/2)+(0～1の乱数))/3.5、選択されなかったミノの新しい重みは(元の重み/2)+(0～1の乱数)となります",
    },
    {"Stacking(積み)",
        "stacking 積み つみ 置く",
        "term",
        "ミノを置いて行くこと\\n必須技術の1つ",
    },
    {"Rotation buttons(左右回転)",
        "doublerotation 回転 左 右 2",
        "term",
        "左右回転両方を使うことで3回転操作がなくなり、入力数が減少します\\n最適化は左右回転のみを使うことを前提に設計されています",
    },
    {"Rotation buttons (左右180°回転)",
        "triplerotation 回転 左 右 180 3",
        "term",
        "左右,180°回転の全てを使えばどんな回転方向でも1回の入力で済みます\\nしかし全てのゲームに180°回転があるわけでなく、この技術を習得しても左右回転を習得した時ほどの上達はないでしょう\\n最適化という点では速さを極端に求めない限り必要ありません(ただし180°の回転入れは覚える必要があります)",
    },
	{"ザンギ",
        "操作 ザンギ ざんぎ zangi",
        "term",
        "左右移動->ソニックドロップ->もう一方の左右移動と行われる操作のこと\\n例えば左ザンギの場合、左端へ一瞬で移動->ソニックドロップ->右へ壁に衝突するまで移動 となる",
    },
    {"Drought(ドラウト)",
        "drought ドラウト 干ばつ 連続",
        "term",
        "欲しいミノが全く来ない状況のこと\\nクラッシクテトリスでよく起こることで地形やプレイが乱れる原因になります\\nモダンテトリスではランダムではなく、ある程度生成されるミノが制御されているのでほとんど起こらず、最大でも13ミノ引けば欲しいミノが1つは出現します",
    },
    {"Bone block(骨ブロック)",
        "bone tgm 骨 ボーン ブロック スキン",
        "term",
        "初期のテトリスで使われているミノスキン\\n昔のコンピュータはコマンドラインインターフェイス(WindowsのcmdやMacのterminalなど)を主に使っていたのでテトリスのミノは「[]」の集合で表現されていました\\nこれが骨のように見えるので骨ブロックと呼ばれています\\n\\nTechminoでは骨ブロックを「全てのミノが使用できるミノスキン」と定義されています\\nミノスキンが異なる場合、骨ブロックのスタイルも異なる可能性があります",
    },
    {"Semi-invisible(セミインビジブル)",
        "half invisible semi セミ 半 インビジブル 透明",
        "term",
        "時間が経過すると設置されたミノが透明になるルール\\nこの透明になるまでの時間は明確ではないので「数秒後に消える」と表現しても問題ない",
    },
    {"Invisible(インビジブル)",
        "invisible 透明 インビジブル",
        "term",
        "瞬時に設置したミノが透明になるルール\\n消えるアニメーションがあるインビジブルルールのことを指すことがあるが、Techminoではそのようなルールは簡単になりすぎると判断し、アニメーションなしのインビジブルルールを「Sudden Invisible」と読んでいます",
    },
    {"MPH mode",
        "mph",
        "term",
        "生成法則なし(ランダム生成)、ネクストなし、ホールドなし\\nかなりの反応速度が要求される",
    },
    {"Input delay(入力遅延)",
        "input delay 入力 遅延 硬直 ディレイ 時間",
        "term",
        "どんなデバイスでも入力してからゲームに反映されるまでに遅延があります(通常、数ms～数十ms)\\n入力遅延が大きすぎると操作に違和感を覚えます\\nこの遅延は使用するハードウェアやソフトウェアの性能が主な原因であり、機器のパフォーマンスモードを有効(または省電力モードを無効)にしたり、モニターのゲーミングモードを有効にすると軽減されるかもしれません",
    },
    {"Secret Grade(裏GM)",
        "larger than 裏 gm ジグザグ",
        "term",
        "TGMシリーズに登場するイースターエッグモード\\n19段使って「>」の形に穴を作ることでクリアとなる"..HDwiki, HDsearch.."Secret_Grade_Techniques",
    },
    {"Cold Clear",
        "cc coldclear ai bot コールド",
        "term",
        "テトリスのbot\\n元々はMinus Kelvin氏がぷよぷよテトリス用に開発したbotだがTechminoではAllspinとTRSに対応できるよう改良されている",
    },
    {"ZZZbot",
        "ai bot zzztoj misamino",
        "term",
        "テトリスのbot\\n中国のテトリスプレイヤー、奏之章 (Zòu Zhī Zhāng)氏が開発し、多くのゲームで動作する",
    },
	{"Zetris",
        "ai bot zetris misamino",
        "term",
        "テトリスのbot\\nmat氏がぷよぷよテトリス用に開発したbot\\nmisaminoを元に開発された\\n凝視はしてないが受けた後に一定段以下になる攻撃は外すような仕様になっている",
    },
	{"ほいこ",
        "ai bot hoiko howyiko ほゐこ",
        "term",
        "テトリスのbot\\nうかん氏がぷよぷよテトリス用に開発したbot\\n相手から送られる火力を見ており、直列になる確率と待ち時間から相殺外しを判断している",
    },
	{"wataame",
        "ai bot わたあめ watame",
        "term",
        "テトリスのbot\\n雨安氏がぷよぷよテトリス用に開発したbot\\n多様なモードを搭載している",
    },


    -- Setups
    {"Openers(開幕テンプレ)",
        "setup openers 開幕 テンプレ",
        "setup",
        "ゲーム開始時に組むテンプレのこと\\n中盤でも作れるものがあるが完全に同じになるとは限らない\\n強い開幕テンプレは基本以下の点を満たしている\\n1.強い攻撃を持ち、積みに使っているTの割合が低い\\n2.必要なソフトドロップが少ない\\n3.多くのミノ順で組める\\n4.中盤へ移行しやすく、分岐が少ない\\nほとんどの開幕テンプレは通常7種1巡を利用して作られているために安定して組める",
    },
    {"DT Cannon(DT砲)",
        "dtcannon doubletriplecannon dt 砲",
        "setup",
        "Double-Triple 砲"..HDwiki,
        HDsearch.."dt",
    },
    {"DTパフェ",
        "dtcannon doubletriplecannon パフェ パーフェクト dt 砲",
        "setup",
        "DT砲の後にパフェを取る派生のこと"..HDwiki,
        HDsearch.."double_triple_cannon_opener",
    },
    {"BT砲",
        "btcannon betacannon 砲",
        "setup",
        "β砲, Beta砲"..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"BTパフェ",
        "btcannon betacannon ループ 5 パフェ",
        "setup",
        "BT砲の後にパフェを取る派生のこと"..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"TKI 3 Perfect Clear(DDパフェ)",
        "ddpc tki3perfectclear d パフェ tsd tki",
        "setup",
        "開幕TSDからもう一度TSDを撃ち、パフェを取るテンプレ"..HDwiki,
        HDsearch.."TKI_3_Perfect_Clear",
    },
	{"MKO積み",
        "mko むこうみず",
        "setup",
        "派生を含めれば大体のことはできる開幕テンプレ\\nHarddropのwikiを載せるがmko全体の内、1割も情報が書かれていない\\n使い方がかなり重要な開幕テンプレなので使う場合は積極的に情報収集することをおすすめする",
        HDsearch.."MKO_Stacking",
    },
    {"QT砲",
        "qtcannon 砲",
        "setup",
        "DT砲より安定してTSDとTSTを撃てるように作られた開幕テンプレ\\nただし下穴が端にあると二巡目が組めない\\nTD派生がしやすい",
        "https://tetrisopener.wicurio.com/index.php?QT%E7%A0%B2",
    },
    {"Mini-Triple(MT)",
        "mt minitriple ミニ トリプル ts",
        "setup",
        "TSMからTSTを撃つ形",
        "https://knewjade.github.io/fumen-for-mobile/#?d=v115@tgB8IeA8DeD8AeH8BeH8BeG8CeE8JeAgWJAteEfEXU?b9ARAAAAvhG1bfdmfdrf1vBAAAdrBAAAtgB8IeA8DeD8AeG?8CeG8BeAAAeF8AeB8AeD8JeAAPJAteEfEXUb9ASAAAAvhF1?bfdmf1qfNqBAAAdrB",
    },
    {"Trinity(トリニティ)",
        "trinity トリニティ tsd",
        "setup",
        "TSD3回かTSM->TST->TSDを撃つテンプレ",
        HDsearch.."trinity",
    },
    {"Wolfmoon Cannon",
        "wolfmooncannon 砲",
        "setup",
        "形が特殊な開幕テンプレ"..HDwiki,
        HDsearch.."wolfmoon_cannon",
    },
    {"Sewer(TZT砲)",
        "sewer",
        "setup",
        "形が特殊な開幕テンプレ"..HDwiki,
        HDsearch.."sewer",
    },
    {"TKI",
        "tki-3 tki3 tsd c td",
        "setup",
        "開幕TSD、またはTDの形をしたTKIという開幕テンプレを指す(日本では後者の方が多い)\\nここでは後者のリンクを置いておく"..HDwiki,
        HDsearch.."C-Spin",
    },
    {"God Spin",
        "godspin 神 ゴッド",
        "setup",
        "派手な開幕テンプレ[しかし実際に使うのは難しい]\\nWindkey氏考案"..HDwiki,
        HDsearch.."godspin",
    },
    {"AlbatrossSP(アルバトロスSP)",
        "albatross アルバトロス アルバ sp",
        "setup",
        "TSD->TST->TSD->パフェを撃つ開幕テンプレ\\nほとんどのTミノをTspinに使う、派手で素早いテンプレです"..HDwiki,
        HDsearch.."Albatross_Special",
    },
    {"Pelican(無名砲)",
        "うーみん ウーミン 無名 むめい",
        "setup",
        "日本では無名砲(3文字で「うーみん」と読む)と呼ばれる\\nアルバトロスSPに似た流れを持つ開幕テンプレ"..HDwiki,
        HDsearch.."Pelican",
    },
    {"Perfect Clear Opener(パフェ積み)",
        "7piecepuzzle パフェ 積み",
        "setup",
        "7ミノ置いた後、パフェを取れる確率が最も高い形\\n通常はパフェ率61.2%だがIミノを置かず残り4ミノからパフェを見抜くことで84.6%までパフェ率が上昇する\\nTechminoのパフェトレーニングでジグザグの形が出たらこのテンプレの形です"..HDwiki,
        HDsearch.."Perfect_Clear_Opener",
    },
    {"Grace System(グレースシステム)",
        "liuqiaoban gracesystem 1stpc グレース パフェ",
        "setup",
        "6ミノ置いた後、パフェが取れる確率が最も高い形\\nパフェ率88.57%\\nパフェチャレンジの4×4の形が出たらこのテンプレの形です",
        "https://four.lol/perfect-clears/grace-system",
    },
    {"DPC",
        "DPC 3 1",
        "setup",
        "2連パフェや8段パフェ(TD系テンプレのパフェ、SDパフェ等)を取った後に余った1ミノとその後の2巡を使ってDパフェ、もしくはDDパフェを取るテンプレ\\n単純にDパフェを取る場合はほぼ100%パフェが取れる",
        "https://tetristemplate.info/dpc/",
    },
    {"Gamushiro Stacking(ガムシロ積み)",
        "gamushiro ガムシロ td",
        "setup",
        "TDパフェ系統のテンプレで最初に作られた開幕TDテンプレ"..HDwiki,
        HDsearch.."Gamushiro_Stacking",
    },

    -- Pattern
    {"Mid-game Setups(中盤テンプレ)",
        "midgamesetups 中盤",
        "pattern",
        "中盤で使われるテンプレのこと\\n中には開幕テンプレとして使用されるものがある",
    },
    {"TD",
        "cspin tki td",
        "pattern",
        "TST->TSDと撃てる形"..HDwiki,
        HDsearch.."Triple Double_Attack_Setups",
    },
    {"STSD",
        "stsd",
        "pattern",
        "Super T-Spin Double\\n2回TSDを撃てる形\\nしかし盤面の底に作った場合、相手からの下穴により1/10の確率で最初のTSDが撃てなくなる\\nこの確率は100%と言う人もいる"..HDwiki,
        HDsearch.."stsd",
    },
    {"STMB Cave(STMBケイブ)",
        "stmb ケイブ ドネイト",
        "pattern",
        "幅3がある時にS(Z)を壁に引っ掛けてTSDドネイトを作るテンプレ\\nSTMBはテトリスDS時代のプレイヤーの名前"..HDwiki,
        HDsearch.."stmb_cave",
    },
    {"Fractal(ダブルダガー)",
        "shuangrenjian fractal spider ダブル 2 ダガー フラクタル ダブダ",
        "pattern",
        "TSDの上にTSDが乗った形\\nS(Z)が引っ掛かってTSDが2つできてる場合はSTMBケイブとなり、引っ掛けておらず1つの屋根で2回TSDを撃てる場合はダブルダガーとなる"..HDwiki,
        HDsearch.."Fractal",
    },
    {"LST stacking(LST積み)",
        "lst 積み",
        "pattern",
        "半永久的にTSDとテトリスをし続ける積み方",
        "https://four.lol/stacking/lst",
    },
    {"Hamburger(ハンバーガー)",
        "hamburger ハンバーグ ハンバーガー",
        "pattern",
        "S(Z)でTSSをするドネイトテンプレ\\n半永久的にTSSとテトリスができる\\n当初はSを使った場合をハンバーガー、Zを使った場合をハンバーグと言っていたが廃れた"..HDwiki,
        HDsearch.."hamburger",
    },
    {"Imperial Cross(インペリアルクロス)",
        "imperialcross インペリ",
        "pattern",
        "十字上の穴に屋根を付けて2回TSDをする形"..HDwiki,
        HDsearch.."imperial_cross",
    },
    {"Kaidan(階段ドネイト)",
        "jieti kaidan stairs 階段",
        "pattern",
        "段々になっている地形にS(Z)を置くことでTSD地形を作るドネイトテンプレ"..HDwiki,
        HDsearch.."kaidan",
    },
    {"Shachiku Train(社畜トレイン)",
        "shachikutrain shechu 社畜 トレイン",
        "pattern",
        "2回TSDを撃つテンプレ\\nテンプレ名は制作者が満員電車で思い付いたことに由来する"..HDwiki,
        HDsearch.."Shachiku_Train",
    },
    {"Cut Copy",
        "qianniao cutcopy 千鳥 カット",
        "pattern",
        "Tspin地形がある時にさらにTspinできるような地形を作ること\\n千鳥格子はこの技術を使った中盤テンプレ"..HDwiki,
        HDsearch.."Cut_copy",
    },
    {"King Crimson(キングクリムゾン)",
        "kingcrimson キンクリ キング jojo ジョジョ",
        "pattern",
        "STSDの上にTSTを足したテンプレ"..HDwiki,
        HDsearch.."King_Crimson",
    },
    {"連パフェ(1/3)",
        "pcloop パフェ ループ 連",
        "pattern",
        "テトリス堂にて1～5回目と7回目のパフェについて詳しく知れます\\n7回目のパフェがキレイに終わると丁度70ミノ、つまり10巡終わったことになりゲーム開始時と同じ状態になります",
        "https://shiwehi.com/tetris/template/consecutivepc.php",
    },
    {"連パフェ(2/3)",
        "pcloop パフェ ループ 連",
        "pattern",
        "four.lolに1～7回目のパフェについて詳しく知れます",
        "https://four.lol/perfect-clears/5th",
    },
    {"連パフェ(3/3)",
        "pcloop パフェ ループ 連",
        "pattern",
        "ナイテン(NitenTeria)によって作成された連パフェについての情報がまとめられているドキュメント\\nただし情報量の多さ等から自分である程度吟味する必要がある",
        "https://docs.qq.com/sheet/DRmxvWmt3SWxwS2tV",
    },

    -- Savedata managing
    {"Console(コンソール)",
        "cmd commamd minglinghang kongzhitai terminal コンソール ターミナル コンソール console",
        "command",
        "Techminoにはデバッグや高度な機能を実行するためのコンソールがあります\\nコンソールにはメイン画面のTechminoのロゴを連打するかメイン画面で「C」を連打することで移動できます\\nコンソールの使用は自己責任です",
    },
    {"Reset setting",
        "reset setting リセット 設定",
        "command",
        "コンソールに「rm conf/setting」と入力し、Enterもしくはreturnを押す\\nそしてTechminoを再起動すると有効になります\\nこれをすると設定がリセットされます",
    },
    {"Reset statistics",
        "reset statistic data リセット 統計 データ",
        "command",
        "コンソールに「rm conf/data」と入力し、Enterもしくはreturnを押す\\nそしてTechminoを再起動すると有効になります\\nこれをやると統計がリセットされます",
    },
    {"Reset unlock",
        "reset unlock リセット 未開封",
        "command",
        "コンソールに「rm conf/unlock」と入力し、Enterもしくはreturnを押す\\nそしてTechminoを再起動すると有効になります\\nこれをやると1人用モードのランクがリセットされます",
    },
    {"Reset records",
        "reset record リセット レコード 記録",
        "command",
        "コンソールに「rm -s record」と入力し、Enterもしくはreturnを押す\\nそしてTechminoを再起動すると有効になります\\nこれをやると記録がリセットされます",
    },
    {"Reset key",
        "reset virtualkey リセット キー 仮想",
        "command",
        "コンソールに「rm conf/[keyFile]」(キーボード:key、仮想キーボード:virtualkey、仮想キーボード設定を保存:vkSave1(2))と入力し、Enterもしくはreturnを押す\\nそしてキーボードと仮想キーボードの場合は再起動すると有効になります\\n仮想キーボード設定保存の場合はEnterもしくはreturnを押した時に1つファイルが出力されます",
    },
    {"Delete replays",
        "delete recording 削除 消去 リセット デリート リプレイ",
        "command",
        "コンソールに「rm -s replay」と入力し、Enterもしくはreturnを押すと即座に実行されます\\nリプレイデータを消します",
    },
    {"Delete cache",
        "delete cache 消去 削除 リセット デリート キャッシュ",
        "command",
        "コンソールに「rm -s cache」と入力し、Enterもしくはreturnを押すと即座に実行されます\\nキャッシュを消します",
    },

    -- English
    {"SFX",
        "soundeffects 効果音",
        "english",
        "日本語で「効果音」や「SE」と言われるもの",
    },
    {"BGM",
        "backgroundmusic 音楽",
        "english",
        "ゲーム中に流れている音楽のこと",
    },
    {"TAS",
        "tas",
        "english",
        "「Tool-Assisted Speedrun (Superplay)」の略\\nゲームのルールを破ることなく特殊なツールを用いてプレイすること\\n途中セーブやゲーム内時間の進みを弄る等して最高得点を出したりユニークな目標を達成している\\n簡単なTASはTechminoに内蔵されている",
    },
    {"AFK",
        "afk",
        "english",
        "Away From Keyboardの略\\n画面前から離れる時だけじゃなく、休憩するときにも使われる\\n適度に休憩することで身体と頭が休み、より質の高いプレイができる",
    },
	{"BRB",
        "brb",
        "english",
        "Be right backの略\\n一旦離れるけどすぐに戻るときに使われる\\n人によっては試合中にbrbというが結局セットが終わるまで戻らない人もいる",
    },
	{"sweep",
        "sweep ストレート",
        "english",
        "日本語で言うストレートのこと\\n例えば、7先の試合で1本も取られずに勝利した場合、相手をsweepしたと言う",
    },
    {"Timing",
        "timing shiji fanji タイミング",
        "term",
        "主に攻撃をするタイミングのこと\\n攻撃をするタイミングを考えることで相手からの攻撃を相殺したり、逆に相殺を外して自分の攻撃を相手に送れたりできます\\n要は相殺管理の1つです",
    },
}
`,dict_zh=`local HDsearch="https://harddrop.com/wiki?search="
local HDwiki="\\n更多内容见Hard Drop Wiki。"
return {
    {"新人须知",
        "读我 必读 萌新 xinren new noob readme",
        "help",
        "致想深入玩下去的新人：\\n\\n\\t两大根本原则：\\n\\t\\t1. 选手感好的版本（Tech/Tetr.io/Jstris/TOP/Tetr.js），别用编程练习渣版本\\n\\t\\t2. 踏实打好基础（预判next稳定消四等），别总想着炫酷T旋，对未来实力提升没好处。\\n\\t两大主要技巧：\\n\\t\\t1. 熟悉初始位置以及到各个位置的初始操作；\\n\\t\\t2. 提前计算好下一块能放哪。\\n\\n推荐阅读专栏《给TOP新人的几点建议》\\n\\n[点击右下角地球按钮打开链接]",
        "https://bilibili.com/read/cv2352939",
    },
    {"新人学习/练习路线",
        "读我 必读 萌新 xinren new noob readme",
        "help",
        "以下是关于提升真正打块能力的指引，如果在以下任何项目练习过程中感到有困难，可以适当回去玩玩自己喜欢的项目。别忘了你是来 “玩” 游戏的，兴趣最重要。\\n以下给出几个新手时期的主线任务树，前期主要就应该练习以下内容，学定式和T-Spin什么的对实力帮助很小（我们不认为靠定式对战秒其他萌新是有效实力）：\\n（注意，三段应当同时进行，不是A→B→C）\\nA. 堆叠能力练习方法\\n\\tA1. 决定手上的块放哪的时候先别，看看下一块有没有地方放，如果放不下去，重新想手上的\\n\\tA2. 尝试把地形尽量控制得平整，因为比较平的地形来啥块都比较容易放得下去\\nB. 操作效率与速度练习方法\\n\\tB1. 不要每一块都拿影子去对形状对位置，要自己想象这个块转一下是什么方向，想好了再开始按按键\\n\\tB2. 学习双旋，能逆时针转一次就不要顺时针转三次，费手\\n\\tB3. 学习极简，刚开始不用管速度，保证正确率最重要，养成良好习惯以后再提速快得很\\nC. 堆叠能力考核\\n\\tC1. 稳定完成40行不死（可以用hold）\\n\\tC2. 稳定完成40行不死（不能用hold）\\n\\tC3. 稳定全消四完成40行（可以用hold）\\n\\tC4. 稳定全消四完成40行（不能用hold）\\n以上都是根据社区和个人经验总结的模糊方法与目标，所以C的考核可以根据自身情况调整严格程度（例如 “稳定” 的具体成功率）。\\n注：完成C的考核后，需要在未来一直注意没有上限的A1，这是方块的根本元素之一，强大的读next能力可以让你快速上手任何变种玩法。",
    },
    {"关于T-spin学习",
        "T旋 T转 tspins",
        "help",
        "首先指出：要能熟练做出各种T-spin并不是只看着T-spin的那一小部分地形就可以玩好的，对玩家堆叠能力和计算next能力同样也有较高的要求。\\n\\n如果不只是出于娱乐、随便玩玩的目的，是真的想不断提升T-spin能力变强，请在基础能力达到一定要求前不要刻意去学习太多的T-spin，而先把重点放在堆叠等基本功上。\\n\\n参考学T门槛水平：40L达到60s以内（可以视个人情况调整为40~120s）、能够轻松完成全消四的40L、不使用Hold不降太多速度的前提下比较轻松完成全消四的40L。",
    },
    {"游戏官网",
        "official website homepage mainpage guanwang",
        "help",
        "Techmino的官网！\\n可以在上面下载游戏本体，或者修改头像以及个人信息。\\n\\n游戏作者的一些话：强烈不建议在任何公开场合提及甚至宣传Techmino，更不要随便对外发送我们的官网链接！请务必只在私下里向有基础或真的很有兴趣入坑认真玩的玩家推荐，不然很容易拉低社群质量破坏交流氛围，比较难处理，甚至有可能影响游戏的未来发展。为了保证游戏能够变得越来越好玩，千万慎重考虑您对游戏的推广方式！感谢您对Techmino的大力支持！！",
        "http://studio26f.org",
    },
    {"灰机Wiki",
        "huiji",
        "help",
        "俄罗斯方块中文维基，由一群来自俄罗斯方块研究群及下属群的方块同好建立的关于俄罗斯方块的中文百科全书。\\n\\n目前其大部分页面翻译和参考来自Hard Drop Wiki和Tetris Wiki",
        "https://tetris.huijiwiki.com",
    },
    {"HardDrop Wiki",
        "hd",
        "help",
        "（英文）位于Hard Drop全球俄罗斯方块社区的Wiki百科",
        "https://harddrop.com/wiki/Tetris_Wiki",
    },
    {"Tetris Wiki",
        "",
        "help",
        "（英文）一个专注于创建俄罗斯方块相关内容的Wiki百科，由Myndzi在 2015创办。年复一年，上千玩家贡献了一系列的官块和自制块的说明，游戏的隐藏机制，和提升游戏体验的教程",
        "https://tetris.wiki",
    },
    {"Tetris Wiki Fandom",
        "",
        "help",
        "（英文）一个俄罗斯方块维基",
        "https://tetris.fandom.com/wiki/Tetris_Wiki",
    },
    {"Four.lol",
        "",
        "help",
        "（英文，很可能打不开）一个开局定式收集网站",
        "https://four.lol",
    },
    {"テトリス堂",
        "",
        "help",
        "（日文）包含很多定式、教程和小游戏。内涵2nd、3rd、4th、7th PC的详细说明",
        "https://shiwehi.com/tetris/"
    },
    {"テトリステンプレ集",
        "",
        "help",
        "（日文）テトリステンプレ集@テト譜，包含非常多定式，有很详细的分类。大部分定式带有图片，可以很方便的分享给别人。",
        "https://w.atwiki.jp/tetrismaps/"
    },
    {"tetristemplate.info",
        "",
        "help",
        "（日文）テトリスブログ - PerfectClear，一个收集了定式的网站，量很少但是内容很精细。",
        "https://tetristemplate.info/"
        },
    {"Fumen",
        "fumen",
        "help",
        "（日文）一个方块版面编辑器，可以用于分享定式，PC解法等，用处很多。设置里可以启用英文版。",
        "http://fumen.zui.jp"
    },
    {"Fumen for Mobile",
        "fumenformobile fm",
        "help",
        "（英文）一个方块版面编辑器，添加了对触屏的控制，可以用于分享定式，PC解法等，用处很多。",
        "https://knewjade.github.io/fumen-for-mobile/"
    },

    -- 相关网页/组织
    {"GitHub仓库",
        "源代码 源码 github git sourcecode yuandaima src",
        "org",
        "Techmino的GitHub仓库地址，欢迎Star",
        "https://github.com/26F-Studio/Techmino",
    },
    {"研究群",
        "yanjiu study research",
        "org",
        "俄罗斯方块·[研究]群QQ号764916351，“中国俄罗斯方块总群”",
    },
    {"茶服",
        "tos tea study chafu",
        "org",
        "TO-S的添加方法、说明等关于茶服的一切",
        "http://teatube.ltd/tos",
    },
    {"赞助1",
        "support weixin vx zhifubao zfb zanzhu daqian",
        "org",
        "vx/zfb-控制台-support",
    },
    {"赞助2",
        "support aifadian afdian zanzhu daqian",
        "org",
        "Afdian",
        FNNS and "https://b23.tv/BV1uT4y1P7CX" or "https://afdian.net/@MrZ_26",
    },
    {"赞助3",
        "support zanzhu daqian",
        "org",
        "P\\97\\116\\114\\101\\111\\110",
        FNNS and "https://b23.tv/BV1uT4y1P7CX" or "https://www.p\\97\\116\\114\\101\\111\\110.com/techmino",
    },

    -- 游戏（题库）
    {"TTT",
        "教程 trainer tres bien",
        "game",
        "全称Tetris Trainer Très-Bien (by こな)。现代方块特殊操作手把手教程（只能键盘操作）\\n\\t推荐能纯消四完成40L挑战的人学习\\n\\t内含T-spin、极简、SRS、部分对战定式介绍等教程\\n注：提供的链接是翻译后挂在茶服的版本",
        "http://teatube.ltd/ttt",
    },
    {"TTPC",
        "pc教程",
        "game",
        "全称TETRIS Perfect Clear Challenge (by chokotia)。SRS+Bag7方块游戏Perfect Clear Opener教程（只能键盘操作）。推荐完成了TTT的人学习（必须先学会SRS）\\n\\n注：提供的链接是翻译后挂在茶服的版本。",
        "http://teatube.ltd/ttpc",
    },
    {"NAZO",
        "题库",
        "game",
        "各类SRS试题\\n\\t推荐能通过TTT的玩家尝试。\\n\\t内含各种T-spin/All spin题目，简单到极难题目都有。\\n\\n注：提供的链接是翻译后挂在茶服的版本。",
        "http://teatube.ltd/nazo",
    },
    {"TPO",
        "题库 nazo",
        "game",
        "全称Tetris Puzzle O。由TCV100制作的题库网站，内含nazo的部分题库。",
        "http://121.36.2.245:3000/tpo"
    },

    -- 游戏（网页）
    {"注[1]",
        "备注 notice",
        "game",
        "以下内容是为部分官方和较高人气同人方块游戏的简介。\\n其中可能包含一些只代表个人观点的主观评价写在方括号里仅供参考，顺便也请不要因为某个方面有欠缺就直接认为 “这个游戏不好”。",
    },
    {"King of Stackers",
        "回合制 网页 手机 kos kingofstackers",
        "game",
        "网页游戏 | 多人 | 支持移动端\\n简称KoS。网页版回合制对战方块点击即玩（可能很卡），主要规则为：以7块为一个回合，双方轮流在自己场地中放置方块，任何的攻击只在对方回合放一块不消行后生效，策略性很强。有不同的伤害表设置。",
        "https://kingofstackers.com/games.php",
    },
    {"Tetr.js",
        "网页 手机 tetrjs",
        "game",
        "网页游戏 | 单机 | 支持移动端\\n简称屁块（因为作者网名叫Farter）。设置内容足够专业，模式很多，但画面很简单，几乎没有动画，而且移动端只有几套固定的按键组合（不能自由拖放）。",
        "http://farter.cn/t",
    },
    {"Tetra Legends",
        "网页 tl tetralegends",
        "game",
        "网页游戏 | 单机 | [服务器在国外可能卡]\\n简称TL。单机模式比较丰富，有两个隐藏的节奏模式，并且将一些其他游戏中不可见的机制进行了可视化，动效也很多。在2020年12月，基本确定由于各种原因不再继续开发。",
        "https://tetralegends.app",
    },
    {"Ascension",
        "网页",
        "game",
        "网页游戏 | 单机/多人 | [服务器在国外可能卡]\\n简称ASC，使用自己的ASC旋转系统，有不少单机模式（Techmino的堆积模式就来自ASC），对战模式目前处在测试阶段（2022/04/16）",
        "https://asc.winternebs.com",
    },
    {"Jstris",
        "网页 手机",
        "game",
        "网页游戏 | 单机/多人 | 支持移动端 | [服务器在国外可能卡]\\n简称JS，有常用的科研向单机模式和自定义各种参数的功能，允许拖放固定尺寸的正方形虚拟按键，没有任何动画效果",
        "https://jstris.jezevec10.com",
    },
    {"TETR.IO",
        "网页 io tetrio",
        "game",
        "网页游戏 | 单机/多人 | [服务器在国外可能卡]\\n简称IO，有排位系统和功能全面的自定义模式，单机模式只有三个。有电脑客户端下载（优化性能，无广告）。\\n[Safari浏览器似乎打不开]",
        "https://tetr.io",
    },
    {"Nuketris",
        "网页 核 he",
        "game",
        "网页游戏 | 单机/多人 | [服务器在国外可能卡]\\n有几个基础单机模式和1V1排位。",
        "https://nuketris.com/",
    },
    {"Worldwide Combos",
        "网页 wwc",
        "game",
        "网页游戏 | 单机/多人 | [服务器在国外可能卡]\\n简称WWC，全世界匹配制1V1。特色：有录像战，匹配的对手可以不是真人；几种不同风格的大规则；炸弹垃圾行对战。",
        "https://worldwidecombos.com",
    },
    {"Tetris Friends",
        "网页 tf",
        "game",
        "网页游戏 | 单机/多人\\n简称TF，已经关服了的网页版方块。以前人比较多，后来官服倒闭了热度下去了，不过现在有人架了私服还可以体验到。",
        "https://notrisfoes.com",
    },
    {"tetris.com",
        "网页 手机",
        "game",
        "网页游戏 | 单机 | 支持移动端\\ntetris.com官网上的俄罗斯方块，只有马拉松一种模式，特色是支持基于鼠标指针位置的智能控制。",
    },
    {"Tetris Gems",
        "网页 宝石",
        "game",
        "网页游戏 | 单机\\ntetris.com官网上的俄罗斯方块，限时1分钟挖掘，有重力机制。\\n有三种消除后可以获得不同功能的宝石方块。",
    },
    {"Tetris Mind Bender",
        "网页 技能",
        "game",
        "网页游戏 | 单机\\ntetris.com官网上的俄罗斯方块，在马拉松基础上添加了技能，场地上会随机冒出技能方块，消除后会得到各种各样或好或坏的技能。",
    },

    -- 游戏（跨平台）
    {"Techmino",
        "铁壳米诺 方块研究所 tieke",
        "game",
        "跨平台 | 单机/多人\\n简称Tech，使用LÖVE引擎开发的一款方块游戏，单机模式和各种设置都很齐全，联机正在逐渐开发中。",
    },
    {"Falling Lightblocks",
        "手机 fl",
        "game",
        "网页游戏/iOS/Android | 单机/多人\\n一个全平台块，横竖屏，有延迟并且不可调。手机支持自定义键位，主要玩法基于NES块设计，也有现代模式。对战为半即时半回合制，无攻击缓冲不可抵消。"
    },
    {"Cambridge",
        "剑桥",
        "game",
        "跨平台 | 单机\\n使用LÖVE引擎开发的一款方块游戏，致力于创建一个轻松高度自定义新模式的方块平台。最初由Joe Zeng开发，于2020/10/08的0.1.5版开始Milla接管了开发。 — Tetris Wiki.",
    },
    {"Nanamino",
        "",
        "game",
        "Windows/Android | 单机\\n块圈玩家自制方块，正在开发中，有一个原创旋转系统。",
    },

    -- 游戏（街机/类街机）
    {"TGM",
        "俄罗斯方块大师 tetrisgrandmaster",
        "game",
        "Windows | 单机/本地双人\\n全称Tetris The Grand Master，一个街机方块系列（有修改过的版本可以在大多数Windows电脑运行），S13/GM等称号都出自该作。\\n\\n其中TGM3目前玩得最普遍，部分模式说明：\\n\\nMaster：大师模式，有段位评价，拿到更高段位点的要求：非消一的连击和消四，字幕战中消除和通关，每100的前70小于【标准时间，上一个0~70秒数+2】中小的一个，每100总用时不能超过限定值（不然取消上一个方法的加分并反扣点数）；到500若没有进标准时间会强制结束游戏（称为铁门）；字幕战有两个难度，半隐和全隐，后者必须拿到几乎全部的段位点才能进，消除奖励的段位点也更多。\\n\\nShirase：死亡模式，类似于techmino中的20G-极限，开局就是高速20G，500和1000有铁门，500开始底下开始涨垃圾行，1000开始出现骨块，1300通关进入大方块字幕战；段位结算：每通100加1段从S1到S13，如果通关了字幕战就会有金色的S13\\n\\n更多内容详见链接",
        "http://teatube.ltd/TGMGUIDE/",
    },
    {"DTET",
        "",
        "game",
        "Windows | 单机\\n单机方块游戏，基于经典规则加入了20G和一个强大的旋转系统，但是除了键位其他参数都不可自定义。有点难找到，而且找到后可能还要自己补齐缺的DLL文件。",
    },
    {"Heboris",
        "hb",
        "game",
        "Windows | 单机\\n一个仿街机方块游戏，可以模拟多个方块游戏的部分模式。",
    },
    {"Texmaster",
        "txm",
        "game",
        "Windows | 单机\\n简称Tex，包含TGM的所有模式，可以用来练习TGM，但World规则不完全一样（如软降到底无锁延，踢墙表有细节不同等）。",
    },

    -- 游戏（其他）
    {"Tetris Effect",
        "效应 tec tetriseffectconnected xiaoyinglianjie",
        "game",
        "PS/Oculus Quest/Xbox/NS/Windows | 单机/多人\\n简称TE(C)，特效方块游戏。不带Connected的基础版本只有单机模式。\\n拓展版本Tetris Effect: Connected增加了联网对战，包含Boss战、Zone对战、经典块对战和分数对战四个模式。",
    },
    {"Tetris 99",
        "吃鸡 t99",
        "game",
        "NS | 单机/多人\\n简称T99，主玩99人混战的吃鸡模式，战术比重比较大，胜率不只由玩家在平时1V1时的水平决定。\\n也有一些常用单机模式如马拉松等。",
    },
    {"Puyo Puyo Tetris",
        "噗哟方块 ppt puyopuyotetris",
        "game",
        "PS/NS/Xbox/Windows | 单机/多人\\n简称PPT，将方块和 Puyo Puyo 两个下落消除游戏放到一个游戏里，二者可以对战，联机单机模式都很多。另有一拓展版本Puyo Puyo Tetris 2。\\n[Steam PC版相对NS版手感和网络等都不太好]",
    },
    {"Tetris Online",
        "top study",
        "game",
        "Windows | 单机/多人\\n简称TO，主要用来6人内对战/单挑/刷每日40L榜/挖掘模式/打机器人。支持自定义DAS/ARR但都不能到0。\\n现在还开着的服务器有：\\nTO-P（波兰服，服务器在波兰，可能会卡顿）\\nTO-S（研究服，研究群群友自己开的服，很稳定，需要进群注册）",
    },
    {"Tetra Online",
        "to",
        "game",
        "Windows/macOS/Linux | 单机/多人\\n简称TO，由Dr Ocelot和Mine两人开发\\n故意设计为延迟较多，平时玩无延迟方块的玩家可能会不习惯。\\n2020年12月9日收到来自TTC的DMCA警告信于是被迫停止开发，在一段时间后关服并下架Steam。\\n现在在GitHub上面还可以下到Windows的Offline Build。\\n[UI部分模仿了PPT，音乐不错，攻击特效好看。]",
        "https://github.com/Juan-Cartes/Tetra-Offline/releases/tag/1.0",
    },
    {"Cultris II",
        "文艺方块 c2 cultris2",
        "game",
        "Windows/OS X | 单机/多人\\n简称C2，设计基于经典规则出发，支持自定义DAS/ARR，对战的主要玩法是基于时间的连击，考验玩家速度/Wide打法/挖掘。\\n[游戏作者太久没有更新Mac版导致macOS Catalina以后的系统无法运行]",
    },
    {"Nullpomino",
        "np",
        "game",
        "Windows/macOS/Linux | 单机/多人\\n简称NP，整个游戏自定义程度极高，几乎任何参数都可以自己设置，是一个专业级方块。\\n[不过UI风格比较老，需要全键盘操作，刚开始可能不习惯。macOS Monterey貌似无法运行。]",
    },
    {"Misamino",
        "回合制",
        "game",
        "Windows | 单机\\n块圈玩家自制方块，单机1v1，主玩回合制模式，可以自定义AI（自己写的话需要了解接口）。",
    },
    {"Touhoumino",
        "东方 车万 偷猴 chewan dongfang th",
        "game",
        "Windows | 单机\\n块圈玩家自制方块，一个Nullpomino的自带资源包的改版，将东方Project元素与俄罗斯方块结合。马拉松模式结合了东方Project里的 “符卡” 机制，需要在一定时间内达成目标分数才能击破。\\n[难度较大，适合有方块基础并且各项能力都较强的玩家游玩（不然都不知道自己怎么死的）。]",
    },
    {"Tetris Blitz",
        "闪电战 ea",
        "game",
        "iOS/Android | 单机/多人\\n简称闪电战，EA代理的一款移动端方块，有重力连锁机制，限时2分钟，游戏开始会掉下一堆小方块；持续消行会进入Frenzy模式（场地下方会不断冒出垃圾行，帮助玩家制造大连锁，如果多次落块没有消行会强制结束Frenzy）。有非常多的道具。\\n当新出现的方块与场地现有方块重叠时，场地最上方的几行会被自动清除，游戏不结束。已于2020年4月下架。",
    },
    {"Tetris (EA)",
        "tetris ea",
        "game",
        "iOS/Android | 单机/多人?\\nEA代理的一款宇宙主题的移动端方块。有滑动操控和单点触控两种操作模式；除经典的马拉松外还有一个星系模式（地图挖掘），有重力连锁机制，目标是在限定块数内消除所有地图块。\\n已于2020年4月下架。",
    },
    {"Tetris Beat",
        "节奏 n3twork",
        "game",
        "iOS | 单机\\nN3TWORK代理的一款移动端方块。除了马拉松以外游戏还有一个 “Beat” 模式，但只需根据BGM的节奏落块就可以得到额外分数。\\n[特效比较瞎眼，不支持自定义键位，而且默认的按钮也很小导致控制也不是很舒服]",
    },
    {"Tetris (N3TWORK)",
        "Tetris n3twork",
        "game",
        "iOS/Android | 单机/多人\\nN3TWORK代理的一款移动端方块，有马拉松、3分钟限时打分和Royale（最多100人对战）模式。\\n[UI设计比较不错，但不支持自定义键位，而且默认的按钮也很小导致控制也不是很舒服]",
    },
    {"俄罗斯方块环游记",
        "tetris journey huanyouji",
        "game",
        "iOS/Android | 单机/多人\\n简称环游记，国内第一款正版授权手游方块。有闯关模式、对战模式和几个单机模式。闯关模式有各种各样有趣规则大多数有重力连锁，对战规则同现代方块，可以自定义虚拟按键的大小和位置，但是不能自定义DAS/ARR。已于2023年2月15日停服。",
    },
    {"JJ块",
        "手机 gougou",
        "game",
        "Android | 单机/多人\\nJJ棋牌平台下一个休闲游戏，Android端百度 “JJ比赛” 官网下载平台后可以找到（找不到的原因是iOS系统或者没在官网下载或者被限制不可直接访问游戏）。竖屏，输入延迟很小，可自定义DAS/ARR/20G软降，简单自定义键位，无Hold，没有B2B，无攻击缓冲不可抵消，每次攻击上限为4，连击较强，其他同现代方块。",
    },
    {"火拼俄罗斯",
        "huopin qq",
        "game",
        "Windows | 多人\\n腾讯游戏大厅的方块，场地12列，打字的 DAS 和 ARR，1 Next无 Hold，攻击途径只有消4打3、 消3打2，垃圾行为国际象棋棋盘式，几乎不可能挖掘。",
    },

    -- 术语（缩写）
    {"LPM",
        "速度 sudu",
        "term",
        "Line Per Minute\\n行每分，体现玩家下块速度。\\n\\n注：不同游戏中显示的LPM算法可能不一样，例如TO中的LPM是用PPS换算的，每1PPS=24LPM，忽略掉了垃圾行的影响，不再是字面意思，Techmino中使用L’PM代表这种换算后的LPM。",
    },
    {"PPS",
        "速度 sudu",
        "term",
        "Piece Per Second\\n块每秒，体现玩家下块速度。",
    },
    {"BPM",
        "速度 sudu",
        "term",
        "Block Per Minute\\n块每分，体现玩家下块速度\\n又称PPM（Piece Per Minute）",
    },
    {"KPM",
        "速度 sudu",
        "term",
        "Key Per Minute\\n按键每分，体现玩家按键速度。",
    },
    {"KPP",
        "按键 anjian",
        "term",
        "Key Per Piece\\n按键每块，体现玩家操作是否繁琐。\\n学会极简提升操作效率以减少此数字。",
    },
    {"APM",
        "攻击 attack gongji",
        "term",
        "Attack Per Minute\\n攻击每分，即玩家每分钟能打出的垃圾行数。\\n一定程度体现玩家攻击力。",
    },
    {"SPM",
        "发送 送出 发出 send gongji",
        "term",
        "[lines] Sent per minute\\n送出每分，即玩家每分钟实际打出去给对手的垃圾行数。\\n一定程度体现玩家给对手实际造成的攻击力。",
    },
    {"DPM",
        "挖掘 防御 防守 dig defend",
        "term",
        "Dig/Defend Per Minute\\n挖掘每分，即玩家每分钟向下挖掘的垃圾行数。\\n某些时候可以体现玩家生存能力。\\n\\n或：防御（抵消+挖掘）每分。",
    },
    {"RPM",
        "接收 接受 receive jieshou",
        "term",
        "Receive Per Minute\\n接收每分，即玩家每分钟收到来自对手的垃圾行数。\\n一定程度体现玩家被对手施加的压力。",
    },
    {"ADPM",
        "攻击 防御 防守 attack defend vs",
        "term",
        "Atk & Dig Per Minute\\n攻击+挖掘每分，用于在同一局游戏内对比玩家间水平差距，比APM更准确一些。在TETR.IO中叫 “VS” 的数据就是ADPM（调整过比例，具体是Atk & Dig per 100s）",
    },
    {"APL",
        "效率 xiaolv xiaolyu",
        "term",
        "Attack Per Line\\n攻击每行，也叫效率，体现玩家攻击的行利用率。例如消四和T旋的效率就比消二和消三高。",
    },

    -- 术语（消除名）
    {"Single",
        "1 xiaoyi",
        "term",
        "一次消除一行。",
    },
    {"Double",
        "2 xiaoer",
        "term",
        "一次消除两行。",
    },
    {"Triple",
        "3 xiaosan",
        "term",
        "一次消除三行。",
    },
    {"Techrash",
        "4 tetris xiaosi",
        "term",
        "一次消除四行（Techmino限定）。",
    },
    {"Tetris",
        "4 xiaosi",
        "term",
        "商标，Tetris游戏名，同时也是别的方块游戏里消四行的名字。\\n含义是Tetra（古希腊语, 四 <τέτταρες>）+ Tennis（网球 游戏原作者喜欢的运动）。\\n现在版权在TTC（The Tetris Company）手上，任天堂和世嘉开发游戏是 TTC 授权的， 它们自己并没有Tetris的版权。",
    },
    {"PC",
        "全消 全清 perfectclear ac allclear quanxiao quanqing",
        "term",
        "Perfect Clear（也叫All Clear，全消，或全清）。\\n消除场地上所有的方块。",
    },
    {"HPC",
        "hc clear banqing banquanqing banquanxiao",
        "term",
        "Half-PC\\nPC（全消）的外延，“下方有剩余方块” 的全消（特别地，如果只消1行则必须不剩余玩家放置的方块），能打出一些攻击和防御（Techmino限定）。",
    },

    -- 术语（旋转相关）
    {"Spin",
        "转 xuanzhuan zuandong",
        "term",
        "（部分游戏中）使用旋转将方块卡进不能直接移动进入的位置，具体判定规则不同游戏不一样，可能会有攻击加成。",
    },
    {"Mini",
        "迷你",
        "term",
        "Spin附加Mini后攻击会弱化，用于平衡不同难易度的T-spin攻击，判定在不同游戏都不一样，而且大多数很不好理解，建议只记住常见形状即可。",
    },
    {"All Spin",
        "allspin",
        "term",
        "一种规则，指所有方块的Spin都有攻击力，而不止是T-spin才有攻击（即T-Spin Only）。",
    },
    {"T-Spin",
        "T转 T旋 旋转 tspin txuan",
        "term",
        "在官方规则中，当T方块在锁定前的最后一个操作是旋转，并且锁定后旋转中心对应的四个斜角位置有三个不是空气，那么这就是一个T-spin。\\nPS：如果满足一些额外条件会被打上mini标签减少攻击力。",
    },
    {"TSS",
        "t1 tspin",
        "term",
        "T-Spin Single\\n指使用T方块Spin并一次消除1行。简称T1。",
    },
    {"TSD",
        "t2 tspin",
        "term",
        "T-spin Double\\n指使用T方块Spin并一次消除2行。简称T2。",
    },
    {"TST",
        "t3 tspin",
        "term",
        "T-spin Triple\\n指使用T方块Spin并一次消除3行。简称T3。",
    },
    {"MTSS",
        "mini tspin minitspinsingle tsms tspinminisingle",
        "term",
        "Mini T-spin Single\\n指T方块Mini Spin消1行（不同游戏判定不一样）。\\n部分游戏中可能叫做 “T-Spin Mini”。",
    },
    {"MTSD",
        "mini tspin minitspindouble tsmd tspinminidouble",
        "term",
        "Mini T-spin Double\\n指T方块Mini Spin消2行（仅部分游戏内存在且判定不一样）。",
    },
    {"O-spin",
        "o转 o旋 ospin oxuan ozhuan",
        "term",
        "由于O方块旋转后形状不变，只能左右移动，所以经常被卡住，于是方块圈就有了O-spin的梗：\\n有人做过T99/TF中的O变形的特效视频且广为流传；\\nT-ex设计的旋转系统可以用spin使O传送进坑；\\nTech设计的变形系统中可以旋转O来变形/传送进入一些特定形状的洞。",
    },
    {"旋转系统 (踢墙)",
        "旋转系统 踢墙 xuanzhuanxitong wallkick tiqiang",
        "term",
        "现代方块游戏中，方块可以绕着旋转中心（Techmino中可见）旋转（部分游戏没有固定中心），如果旋转后和场地或墙壁有重合，会根据<从哪个方向转到哪个方向>进行一些偏移测试（这个偏移称为踢墙），不会卡住转不动，同时也可以让方块钻进入一些特定形状的洞。不同的旋转系统偏移位置顺序都不一样，具体数据去各大Wiki上查，一堆数字这里就不放了",
    },
    {"方块朝向",
        "旋转 朝向 xuanzhuan chaoxiang orientation direction 0r2l 02 20 rl lr",
        "term",
        "在SRS或者类SRS的旋转系统中需要说明方块朝向的时候，“朝下” “竖着” 等词描述太模糊。\\nSRS中每种方块的初始状态固定，所以我们使用0（原位）、R（右，即顺时针转一次）、2（转两下，即180°）、L（左，即逆时针转一次）四个字符表示方块的四种状态，从原位（0）开始顺时针转一圈四个状态是0R2L。\\n最早见于SRS踢墙表的行首，0→L表示原位逆时针转一次到L状态，0→R表示原位顺时针转一次到R状态，2→R代表从180°状态逆时针转一次到R状态。",
    },
    {"ARS",
        "旋转系统 rotate",
        "term",
        "Arika Rotation System，TGM系列使用的旋转系统（3代中的C模式）\\n或者\\nAtari Rotation System，一个左上对齐旋转系统。",
    },
    {"ASC RS",
        "旋转系统 ascrs rotate",
        "term",
        "ASC Rotation System\\nASC块使用的旋转系统，所有块所有形状只根据旋转方向（顺时针和逆时针）使用两个对称的表，踢墙范围大概是±2, ±2。",
    },
    {"ASC+ RS",
        "旋转系统 asc+rs ascplusrs rotate",
        "term",
        "Techmino中ASC的修改版本，添加了180°转的踢墙表。",
    },
    {"BRS",
        "旋转系统 rotate",
        "term",
        "BPS Rotation System\\nBPS块使用的旋转系统。",
    },
    {"BiRS",
        "旋转系统 rotate",
        "term",
        "Bias Rotation System\\nTechmino原创旋转系统，基于XRS和SRS设计。\\n当左/右/下（软降）被按下并且那个方向顶住了墙，按旋转后会先设定一个偏移（三个键朝各自方向加1格），在偏移的基础上试踢墙表里的位移（全都失败了会先取消向下的偏移再把踢墙重新试一遍，再都不行就取消左右，再不行就失败）。\\nBiRS相比XRS只使用一个踢墙表更容易记忆，并且保留了SRS翻越地形的功能。\\n\\n细节补充：在测试踢墙时要满足两个条件，最终位移欧氏距离不能超过√5，并且存在水平偏移时最终水平位移必须和它不反向。",
    },
    {"C2RS",
        "旋转系统 rotate",
        "term",
        "Cultris II Rotation System\\nCultris II原创的旋转系统，所有旋转共用一个表，顺序是：\\n左1→右1→下1→左下→右下→左2→右2\\n注意，左优先于右。",
    },
    {"C2sym",
        "旋转系统 rotate",
        "term",
        "Techmino中C2RS的修改版本，根据不同的方块形状和状态，各自选择优先测试左还是右。",
    },
    {"DRS",
        "旋转系统 rotate",
        "term",
        "DTET Rotation System.",
    },
    {"NRS",
        "旋转系统 rotate",
        "term",
        "Nintendo Rotation System，NES和GB块使用的旋转系统。NRS有两个互为镜像的版本，左旋版用于GB，右旋版用于NES。",
    },
    {"SRS",
        "超级旋转系统 rotate",
        "term",
        "Super Rotation System\\n现代方块最常用的旋转系统，也是不少自制旋转系统的设计模板。\\n对于SRS，每个方块有四个方向，可以朝两边转（180°不算，最开始没有这个设计），所以总共8种，对应8个偏移表，具体数据去Wiki上查，这里就不放了。",
        "https://tetris.wiki/Super_Rotation_System",
    },
    {"SRS+",
        "超级旋转系统 srsplus rotate",
        "term",
        "SRS的拓展版，添加了180°转的踢墙表。",
    },
    {"TRS",
        "旋转系统 rotate",
        "term",
        "Techmino Rotation System\\nTechmino原创旋转系统，基于SRS设计，修补了一些常见SZ卡死的地形，增加了不少实用踢墙。\\n每个五连块也基本按照SRS的Spin逻辑单独设计了踢墙表。\\n更有神奇O-spin等你探索！",
    },
    {"XRS",
        "旋转系统 rotate",
        "term",
        "X Rotation System\\nT-ex原创旋转系统，引入了 “按住方向键换一套踢墙表” 的设定（在对应的方向需要顶住墙），让 “想去哪” 能被游戏捕获从而转到玩家希望到达的位置。\\n\\n其他旋转系统无论踢墙表怎么设计，块处在某个位置时旋转后最终只能按固定顺序测试，这导致不同的踢墙是竞争的，若存在两个可能想去的位置就只能二选一，XRS解决了这个问题。",
    },

    -- 术语（其他）
    {"B2B",
        "大满贯 btb backtoback",
        "term",
        "Back to Back\\n连续打出两次特殊消行（Spin或消四），中间不夹杂普通消行，可以提供额外的攻击（在Techmino中B2B为满贯，大满贯是B3B）。连续PC/HPC在Techmino中也算B2B/B3B。",
    },
    {"B2B2B",
        "大满贯 b3b backtobacktoback",
        "term",
        "Back to Back to Back\\nB2B的加强版，缩写B3B，大量B2B后连续B2B会变成B2B2B，提供更强的攻击（仅Techmino中有）。",
    },
    {"Fin/Neo/Iso",
        "特殊 fin neo iso",
        "term",
        "三类特殊T2的名字，不同的游戏内的攻击可能不一样，实战中基本没有特殊价值，可以不详细了解。",
    },
    {"现代方块",
        "modern xiandaikuai tetris",
        "term",
        "现代方块是一个模糊的概念，这里列出一部分 “标准” 规则，满足大部分的都可以认为是现代方块：\\n1.可见场地大小是10×20，不过上方空间也是存在的，上限可以自己定，一些游戏用的是40；\\n2.七种方块从顶部正中间出现（奇数宽方块偏左，高度可以是方块底部或顶部贴着场地顶），同一种方块的朝向（一般是平的面朝下）和颜色都一致；\\n3.一个合适的随机出块机制（常见的详见Bag7词条和His词条）；\\n4.一个合适的的旋转系统（至少有双旋，详见双旋词条）（最好是SRS或类SRS，详见SRS词条）；\\n5.一个合适的锁定延迟系统，详见锁定延迟词条；\\n6.一个合适的死亡判定，详见死亡判定词条；\\n7.有Next功能（一般是3~6个，也有1个的），详见Next词条，并且方向和出现时候的方向一致；\\n8.有Hold功能，详见Hold词条；\\n9.有DAS系统负责精密并且快速的左右移动，详见DAS词条；\\n10.如果有出块延迟和消行延迟，那么需要有提前旋转/Hold系统，详见IRS和IHS词条，IMS是Techmino特有。",
    },
    {"方块形状",
        "xingzhuang shape tetromino tetrimino",
        "term",
        "在标准的方块游戏中，用到的方块是所有的 “四连块”，即四个正方形共用边连接成的形状。\\n在不允许翻转，只允许旋转的情况下，四连块一共有七种，根据它们的形状一般分别叫做Z、S、J、L、T、O、I。\\n\\n详见下方 “方块名称”。",
    },
    {"方块颜色",
        "yanse color colour tetromino tetrimino",
        "term",
        "主流方块游戏中七种块的颜色会使用同一套彩虹配色：\\nZ：红 S：绿 J：蓝 L：橙 T：紫 O：黄 I：青\\n\\nTechmino默认也使用这一套 “标准” 配色。",
    },
    {"提前旋转(IRS)",
        "irs initialrotatesystem",
        "term",
        "Initial Rotation System 提前旋转系统\\n方块出现前提前按下旋转后，出现时就是转好的形状，有时可以避免死亡。",
    },
    {"提前暂存(IHS)",
        "ihs initialholdsystem",
        "term",
        "Initial Hold System 提前Hold系统\\n方块出现前提前按下hold后，直接出现hold里的方块，有时可以避免死亡。",
    },
    {"提前移动(IMS)",
        "ims initialmovesystem",
        "term",
        "Initial Move System 提前移动系统\\n方块出现前提前按住移动后，出现时会朝移动方向偏一格，有时可以避免死亡（Techmino限定）。\\n注：需要块出现时das已充满",
    },
    {"预览(Next)",
        "下一个 next yulan xiayige",
        "term",
        "指示后边几个块的顺序。\\n提前思考手上这块怎么摆可以让后面轻松是玩家提升的必需技能。\\n\\n关于玩家玩的时候到底看了几个Next：这个数字并不固定，不同玩家、不同模式、不同局面，计算next的数量都不一样，通过调整可见Next数量打40L比较时间等方式测得的数据并不准确。\\n\\n具体例如，一个比较熟练的玩家几乎永远会提前算好一个Next，不然不会锁定手里的块；场地上将要出现或可以构造消四洞（T坑）的时候会找最近的I（T）什么时候来，如果太远了就会直接挖掉放弃本次攻击以防被对手偷袭。这两种情况并不独立，有很多介于中间的情况。所以，一个玩家看的Next数量是时刻在变的，“某人看几个Next” 没有精确答案，必须在指明情况的时候数字才能作为参考。",
    },
    {"暂存(Hold)",
        "交换 hold zancun",
        "term",
        "将手里的方块和Hold槽中的交换，一般不能连续使用。\\n用来调整块序，更容易摆出你想要的形状。\\nTechmino中有一个 “物理Hold” 机制，开启后Hold换出的方块会直接出现在当前方块所在的位置\\n\\n用不用Hold各有好处，不用的话看到序列是什么就是什么，减少了思考量；并且减少了按键的种类，操作简单容易提升KPS，有些人的40L记录就是不用Hold打出的。用Hold可以灵活地调整序列，减少高重力等规则带来的难度，算力足够的情况下可以达成更复杂的目标，甚至反过来显著减少总按键数。",
    },
    {"置换(Swap)",
        "交换 swap hold jiaohuan zancun",
        "term",
        "Hold的另一种表现形式，将手里的方块和Next槽中的第一个交换，一般同样不能连续使用。",
    },
    {"深降",
        "深降 deepdrop shenjiang",
        "term",
        "开启后当方块触底时，再次按下软降会让方块尝试向下穿墙寻找放得下的地方，如果有就会直接瞬移到那\\n该功能更偏向用于技术研究，对于AI来说有了它可以完全不用再考虑旋转系统，形状能容得下的地方一定都能到达",
    },
    {"Misdrop",
        "误 md",
        "term",
        "误放，就是不小心放错了地方。简称MD。",
    },
    {"Mishold",
        "误hold mh",
        "term",
        "误hold，就是不小心按到Hold导致死亡或失去PC机会等。简称MH。",
    },
    {"sub",
        "",
        "term",
        "在……之下\\n用于表示成绩，单位一般可不写，比如40L成绩Sub 30是秒，1000行Sub 15是分钟，不写项目默认是40L\\n\\n例：39.95s是Sub 40，40.###s不是Sub 40。\\n请不要使用Sub 62之类的词，因为sub本身就是表示大约， 一分钟左右的成绩精确到5~10s就可以了，一般30s以内的成绩用sub## 的时候才会精确到1s。",
    },
    {"挖掘(Dig)",
        "挖掘 downstack ds wajue",
        "term",
        "指消除从场地底部进入的垃圾行（对手攻击打过来或者模式中自动生成）。也叫downstack(DS)。",
    },
    {"捐赠(Donate)",
        "捐献 juanzeng",
        "term",
        "指刻意临时堵住（可以消四的）洞做T-spin，打出T-spin后就会解开，是比较进阶的保持/提升火力的技巧。\\n不标准用法：有时候只要堵住了个坑，即使不是消四洞也会用这个词。",
    },
    {"欠债",
        "qianzhai debt",
        "term",
        "欠债\\n指必须完全堆好才能开始转下T旋打出攻击，堆完之前T下不去的形状。对战实战中如果要做此类（中局）定式时一定要观察对手情况确保自己安全，不然可能被半途打死\\n\\n一般只用来描述类似双T3/T3塔的大型组合炮，堆完之前完全不能打出攻击。",
    },
    {"攻防",
        "gongfang gongshou",
        "term",
        "攻击指通过消除给对手发送垃圾行；\\n防御（相杀）指别人打过来攻击之后用攻击抵消；\\n反击指抵消/吃下所有攻击后打出攻击。\\n\\n注：大多数方块游戏的攻防是1:1的，4行攻击抵消对手的4行攻击。",
    },
    {"连击(Combo)",
        "ren lianji",
        "term",
        "从第二次消除起叫1 REN/Combo，打出的攻击根据游戏设计的不同也不同。“REN” 这个名称来源于日语中的 “連”（れん）。",
    },
    {"Spike",
        "baofa xingbao",
        "term",
        "爆发攻击\\n指短时间内打出大量的攻击，Techmino和TETR.IO中有Spike计数器，可以看到自己短时间内打出了多少攻击。\\n注意，网络卡顿导致的累计攻击瞬间释放不算Spike。",
    },
    {"Side",
        "连击 sidewell",
        "term",
        "在场地旁边空出几列的堆叠法\\n用来制造连击，对于新人是一个不错的进攻方法。但由于起楼的时候可能会被顶死而且总效率不高，导致高端玩家不会单独做Wide，更可能会在中局堆好炮并且观察到对手短时间内不会打出伤害的时候可以造，用来大幅加强瞬时火力。",
    },
    {"Center",
        "连击 centerwell",
        "term",
        "在场地正中间空出几列的堆叠法",
    },
    {"Partial",
        "连击 partialwell",
        "term",
        "在场地边和正中之间的位置空出几列的堆叠法",
    },
    {"S1W",
        "side1wide tetrisstacking",
        "term",
        "Side 1 Wide\\n旁边空1列，是传统方块游戏里常见的消四打法。\\n在现代方块对战中新手可以使用，短时间能打出大量攻击，但在高手场出场率不高，因为效率低，容易被对面一波打死，故只在极少数情况合适的时候用。",
    },
    {"S2W",
        "连击 lianji ren side2wide",
        "term",
        "Side 2 Wide\\n旁边空2列，是常见的连击打法。\\n难度很低，现代方块对战中新手可以使用，结合Hold可以很轻松地打出大连击。高手场使用不多，因为准备时间太长，会被对面提前打进垃圾行，导致连击数减少或者直接Top Out，效率也没有特别高，故一套打完也不一定能杀人。",
    },
    {"S3W",
        "连击 lianji ren side2wide",
        "term",
        "Side 3 Wide\\n旁边空3列，不如2w常见的连击打法。能打出的连击数比2w多，但是难度偏大很容易断连。",
    },
    {"S4W",
        "连击 lianji ren side4wide",
        "term",
        "Side 4 Wide\\n旁边空4列，一种连击打法，能打出很高的连击，并且准备时间比别的Wide打法短，故动作快的话可以抢在对手打进垃圾之前堆很高然后打出超大连击。\\n（因为可能会被提前打死，风险挺大，所以没有c4w那么不平衡）。",
    },
    {"C1W",
        "center1wide centre1wide",
        "term",
        "Center 1 Wide\\n中间空1列，一种实战里消4同时辅助打TSD的打法，需要玩家理解<平衡法>，熟练之后可以轻松消四+T2输出，难度也不是特别大。",
    },
    {"C2W",
        "连击 lianji ren center2wide centre2wide",
        "term",
        "Center 2 Wide\\n中间空2列，一种可能的连击打法（不常见）。",
    },
    {"C3W",
        "连击 lianji ren center3wide centre3wide",
        "term",
        "Center 3 Wide\\n中间空3列，一种可能的连击打法（不常见）。",
    },
    {"C4W",
        "连击 lianji ren center4wide centre4wide",
        "term",
        "Center 4 Wide\\n中间空四列，一种连击打法，能打出很高的连击，利用了大多数专业对战方块游戏的死亡判定机制，可以放心堆高不担心被顶死，然后开始连击。是一种利用游戏机制的不平衡策略（尤其在开局时），观赏性不是很强还可以以弱胜强，成本太低所以成为了部分游戏中约定的类似 “禁招” 的东西，请在了解情况后再使用，不然可能会被别人骂。\\nTechmino中虑到了平衡问题，所以c4w的强度没有别的游戏那么夸张。",
    },
    {"N-Res",
        "连击 lianji ren residual c4w s4w",
        "term",
        "N-Residual\\nN-剩余，指4w连击楼底部留几个方格，常用的是3-Res和6-Res。\\n3-Res路线少比较好学，成功率也很高，实战完全够用\\n6-Res路线多更难用，但是计算力很强的话比3-Res更稳，也可以用来完成特殊挑战（比如Techmino的c4w练习要求100连击通关）。\\n\\n注：优先使用6-Res，然后是3-res和5-Res，最后是4-Res",
    },
    {"6–3堆叠法",
        "六三 63",
        "term",
        "指左边6列右边3列的堆叠方式。在玩家有足够的计算能力后可以减少堆叠所用的按键数（反之可能甚至会增加），是主流的用于减少操作数的高端40L堆叠方式，原理跟出块位置是中间偏左有关。",
    },
    {"Freestyle",
        "ziyou",
        "term",
        "自由发挥的意思，常用于freestyle TSD（T2），指不用固定的堆叠方式而是随机应变完成20TSD。比用LST或者垃圾分类完成的20 TSD的难度要大，成绩也更能代表实战水平。",
    },
    {"死亡判定",
        "die death siwang",
        "term",
        "现代方块普遍使用的死亡判定：\\n1. 新出现的方块和场地方块有重叠（窒息，Block Out）（c4w比s4w强的原因，因为被打进18行都不会窒息）；\\n2. 方块锁定时完全在场地的外面（Lock Out）；\\n3. 场地内现存方块总高度大于40。（超高，Top Out）\\n\\n注：Techmino使用的死亡判定默认不开启第二、三条。",
    },
    {"缓冲区",
        "buffer zone huanchongqu",
        "term",
        "（不是所有游戏都有这个概念）指10×20可见场地之上的21~40行。因为垃圾行顶起后两边堆高的方块可能会超出屏幕，消行后这些方块要重新回到场地内所以需要保存下来，由于程序上要求场地尺寸有限（部分游戏可以无限），故设定为40，一般都够用。\\n\\n另见 “消失区” 词条。",
    },
    {"消失区",
        "vanish zone xiaoshiqu",
        "term",
        "在缓冲区的基础上，指比40行缓冲区还高的区域。\\n标准的死亡判定涉及了这个概念，在垃圾行升起后如果场地上有任何方块超出了40高的缓冲区（也就是达到了消失区）时游戏直接结束。\\n但事实上这块区域在不同游戏中表现不同，甚至有设计者考虑不周导致方块挪到40行以上，但是程序没考虑导致方块接触消失区直接报错闪退的游戏。通常出现在玩家堆了c4w然后被打入大量垃圾行时才会考虑这个概念。其他游戏中方块进入消失区可能直接导致游戏结束，也有可能会出现一些奇怪的bug（附带链接是ppt的复制40行无限Ren视频）。\\n\\n另，Jstris中22行及以上可以理解为消失区，锁定在21行之外的格子会消失。",
        "https://www.bilibili.com/video/BV1ZE411Y7GD",
    },
    {"下落速度",
        "重力 drop speed zhongli gravity",
        "term",
        "一般用*G表示方块的下落速度，意思是每一帧方块往下移动多少格，一秒下落一格就是1/60G（默认60fps），可以看出G是一个很大的单位。因为场地就20格，所以一般认为20G即为上限，详见20G词条。\\n在Techmino中描述重力的方式是 “每过多少帧下落一格”，例如一秒落一格就对应60（默认60fps）",
    },
    {"20G",
        "高重力",
        "term",
        "现代方块的最高下落速度，表观就是方块瞬间到底，不存在中间的下落过程，可能会让方块无法跨越壕沟/从山谷爬出。\\n20G一般指的其实是 “无限下落速度” ，就算场地不止20格，“20G” 也会让方块瞬间到底。\\nTechmino（和部分其他游戏，推荐这么设计）中20G的优先级比其他玩家操作都高，即使是0arr的水平方向 “瞬间移动” 中途也会受到20G的影响。",
    },
    {"锁定延迟(LD)",
        "重力 lock delay lockdown delay suoyan zhongli gravity",
        "term",
        "方块<碰到地面到锁定>之间的时间。经典块仅方块下落一格时刷新倒计时，而现代方块中往往任何操作都将重置该倒计时（但是方块本身必须可以移动/旋转），所以连续移动和操作可以让方块不马上锁定，拖一会时间（Techmino和部分游戏重置次数有限，一般是15）。",
    },
    {"出块延迟(ARE)",
        "delay chukuaiyanchi",
        "term",
        "ARE。方块<锁定完成到下一个方块出现>之间的时间。",
    },
    {"消行延迟(ARE)",
        "line delay xiaohangyanchi",
        "term",
        "Line ARE。方块<锁定完成能消行时的消行动画>占据的时间。",
    },
    {"窒息延迟(DD)",
        "choke are delay zhixiyanchi",
        "term",
        "当前方块锁定后如果下一块的生成位置被阻挡，那么下一块的出块延迟会被再额外加上这个延迟的值，方便使用提前系统来避免死亡\\n想法来自NOT_A_ROBOT",
    },
    {"极简(Finesse)",
        "极简操作 最简操作 finesse jijiancaozuo zuijiancaozuo",
        "term",
        "用最少的按键数将方块移到想去的位置的技术（大多数时候只考虑纯硬降的落点），节约时间和减少Misdrop。\\n\\n该技能学习越早越好，建议先去找教程视频，看懂了然后自己多练习，开始以准确率第一，速度快慢不重要，熟练后自然就快了。\\n\\n注意，Techmino使用的极简判定系统不是说完全和理论最少操作数一样，而是不需要软降就能达到的位置才会按照标准出块方向和你的按键次数执行极简检测，故在此不像js存在软降后误杀。但是多了一些新的条件，比如【手上和Hold一样/已经按了超过3次按键后】再hold后按键次数不重置（让下一块极简失误）。\\n极简率计算：\\n没有超过标准极简法操作数的为Perfect计100%，超出一步为Great计50%，超出两步为Bad计25%，两步以上为Miss计0%，其中Bad和Miss会断连\\n\\n注1：一般说的极简不考虑带软降/高重力/场地很高的情况，仅研究空中移动/旋转后硬降。绝对理想的“极简”建议使用“最少按键数/操作数”表达。\\n注2：20G下极简系统和0G一样工作，所以得到的数值不准确，参考价值偏低。",
    },
    {"科研",
        "keyan",
        "term",
        "常用语，指在低重力的单人模式里减速研究怎么做各种T-spin，Techmino中拓展了含义，用于称呼几乎需要全程Spin的游戏模式。",
    },
    {"键位",
        "keyboard mapping jianwei",
        "term",
        "键位设置原则参考：\\n1.不要让一个手指管两个可能同时按的键，通常只有几个旋转键不需要同时按，其他功能推荐都单独给一个手指\\n2.除非已经在别的游戏里锻炼过小拇指，最好不要用，一般食指和中指最灵活，自己觉得舒服为准\\n3.没必要参考别人的键位设置，每个人都不一样，只要不违反前几条规则，就几乎不会对成绩产生影响。",
    },
    {"手感(Handling)",
        "手感 feel shougan",
        "term",
        "决定手感的几个主要因素：\\n1. 输入延迟受设备配置或者设备状况影响。可以重启/换设备解决；\\n2. 程序运行稳定性程序设计或.实现）得不好，时不时会卡一下。把设置画面效果拉低可能可以缓解；\\n3. 游戏设计故意的。自己适应；\\n4. 参数设置设置不当。去改设置；\\n5. 游玩姿势姿势不当。不便用力，换个姿势；\\n6. 换键位或者换设备后不适应，操作不习惯。多习惯习惯，改改设置；\\n7. 肌肉疲劳反应和协调能力下降。睡一觉或者做点体育运动，过段时间（也可能要几天）再来玩。",
    },
    {"DAS通俗",
        "das arr simple tongsu",
        "term",
        "打字时按住o，你会看到：ooooooooooo…\\n在时间轴上：o—————o-o-o-o-o-o-o-o-o…\\n—————就是das长度，-就是arr长度。\\n详见 DAS & ARR 词条。",
    },
    {"DAS & ARR",
        "灵敏度 arr",
        "term",
        "DAS（Delay-auto-shift，自动加（延迟）具体指从<按下移动键时动了一格>到<开始自动移动>之间的时间。\\nARR（Auto-repeat-rate），自动重复速率，指<每次自动移动>之间的时间\\n单位都是f（帧，1帧=1/60秒）\\n别的游戏里用的单位可能是ms（毫秒），乘16.7就可得出大约的对应数值，例如4f≈67ms。",
    },
    {"DAS调节",
        "调节 arr tuning tiaojie",
        "term",
        "对于不是刚入门的并且了解极简操作的玩家来说推荐ARR=0，DAS=4~6（具体看个人手部协调性，只要能控制区别就不大）。\\n新人如果实在觉得太快可以适当增加一点DAS，ARR要改的话强烈建议不要超过2\\n\\n最佳调整方法：DAS越小越好，小到依然能准确区分单点/长按为止；ARR能0就0，游戏不允许的话就能拉多小拉多小。",
    },
    {"DAS打断(DCD)",
        "dascut dcd daduan",
        "term",
        "Techmino中指玩家的操作焦点转移到新方块的瞬间，此时减小（重置）DAS计时器，让自动移动不会立刻生效，减少 “移动键松开晚了导致下一块一出来就立即开始移动” 的情况\\n注：其他游戏中的DAS打断机制可能和Techmino的有区别，仅供参考。",
    },
    {"误硬降打断(HCD)",
        "autolockcut mdcut daduan",
        "term",
        "为了防止玩家硬降时当前方块已经锁定，下一块出现就被立刻硬降导致严重md，所以设计了此打断参数。\\n方块自然锁定之后几帧内硬降键是无效的，具体看设置了多久。\\n注：其他游戏中的防误硬降机制可能和Techmino的有区别，仅供参考。",
    },
    {"软降倍率(SDF)",
        "软降速度 sdf softdropfactor",
        "term",
        "Soft Drop Factor，软降速度因子（倍率）\\n部分游戏中的软降机制就是在按住软降键时方块受到的重力变为原来的若干倍，SDF就是这个变大的倍数。\\n基本所有官块和TETR.IO使用这个机制，但Techmino不使用。",
    },
    {"方块名称",
        "mino",
        "term",
        "这是一个Techmino使用的所有方块的名称和其对应的形状:\\n四连块:\\nZ: "..CHAR.mino.Z..",  S: "..CHAR.mino.S..",  J: "..CHAR.mino.J..",  L: "..CHAR.mino.L..",  T: "..CHAR.mino.T..",  O: "..CHAR.mino.O..",  I: "..CHAR.mino.I..";\\n\\n五连块:\\nZ5: "..CHAR.mino.Z5..",  S5: "..CHAR.mino.S5..",  P: "..CHAR.mino.P..",  Q: "..CHAR.mino.Q..",  F: "..CHAR.mino.F..",  E: "..CHAR.mino.E..",  T5: "..CHAR.mino.T5..",  U: "..CHAR.mino.U..",  V: "..CHAR.mino.V..",  W: "..CHAR.mino.W..",  X: "..CHAR.mino.X..",  J5: "..CHAR.mino.J5..",  L5: "..CHAR.mino.L5..",  R: "..CHAR.mino.R..",  Y: "..CHAR.mino.Y..",  N: "..CHAR.mino.N..",  H: "..CHAR.mino.H..",  I5: "..CHAR.mino.I5..";\\n\\n一至三连块:\\nI3: "..CHAR.mino.I3..",  C: "..CHAR.mino.C..",  I2: "..CHAR.mino.I2..",  O1: "..CHAR.mino.O1..".",
    },
    {"Bag7出块",
        "bag出块 bag7bag",
        "term",
        "一种出块方式，现代方块普遍使用该规则，开局起每7个块是7种形状各出现一次，避免了很久不出某个块和某个块来得特别多，是一些现代方块战术的基础。\\n\\n例如：\\nZSJLTOI OTSLZIJ LTISZOJ",
    },
    {"His出块",
        "history",
        "term",
        "一种的出块方式，例如His4 Roll6 （h4r6）就是在随机生成新的 Next 的时候，随机一个跟最后4次生成的Next中有一样的，就重新随机，直到已经尝试6次或和那4个都不一样。\\nTechmino的His序列模式中最大Roll次数为序列长度的一半（向上取整）\\n\\n是纯随机出块的一大改进，大大减小了连续出几个SZ（洪水）的概率。",
    },
    {"HisPool出块",
        "history pool hispool",
        "term",
        "一种出块方式，History Pool，his算法的分支，比较复杂，这里只提供大概的说明：\\n在His的基础上添加了一个Pool（池），在取块的时候his是直接随机和历史序列（最后4次生成的next）比较，而HisPool是从Pool里面随机取（然后补充一个最旱的块增加他的概率）然后和历史序列比较。\\n\\n这个算法让序列更稳定，介于His和Bag之间，在理论上保证了干旱时间不会无限长。",
    },
    {"bagES出块",
        "bages出块",
        "term",
        "（该词仅在Techmino内使用）Bag Easy-Start（Bag简单开局），Bag算法的分支，开局第一包的第一块不会是S/Z/O/S5/Z5/F/E/W/X/N/H。",
    },
    {"Reverb出块",
        "reverb出块",
        "term",
        "（该词仅在Techmino内使用）回声出块，Bag算法的分支，把Bag的每一块重复随机次数（重复越多概率越小，理论范围是0~6，具体比较复杂这里不展开）",
    },
    {"超连点(Hypertap)",
        "chaoliandian",
        "term",
        "快速震动手指，实现比长按更快速+灵活的高速单点移动，主要在经典块的高难度下（因为DAS不可调而且特别慢，高速下很容易md导致失败，此时手动连点就比自动移动更快）或者受特殊情况限制不适合用自动移动时使用。会使用这个技术的人称为 “Hypertapper”。",
    },
    {"轮指(Rolling)",
        "lunzhi liandian",
        "term",
        "另一种快速连点方法，用于DAS/ARR设置非常慢时的高重力（1G左右）模式。\\n先把手柄（键盘……可能也行吧）悬空摆好，比如架在腿上，要连点某个键的时候一只手虚按按键，另外一只手的几根手指轮流敲打手柄背面， “反向按键” 实现连点。这种控制方法可以让玩家更轻松地获得比直接抖动手指的Hypertap（详见超连点词条）更快的控制速度。\\n此方法最先由Cheez-fish发明，他本人则使用Rolling达到过超过20Hz的点击频率。",
    },
    {"穿透(Passthrough)",
        "pingthrough chuantou",
        "term",
        "（攻击）穿透，指双方的攻击打出后没有抵消，互相都收到的现象。\\nTETR.IO中自定义房间如果开启Passthrough规则（曾经天梯默认开启），那么对手消行攻击的瞬间能看到自己的红条出现但其处于 “无敌时间” 内，不会触发也不能抵消，此时你的攻击会直接打给对手。（应该是给攻击的飞行动画预留时间，同时也让玩家能反应过来并主动选择要不要抵消，要的话就再等一会）\\n另有pingthrough的说法，只是原因是由于不可避免的网络传输延迟，效果同passthrough，设计比较简单的联网对战块没有特殊考虑的话可能自然就会带有这个机制。",
    },
    {"TOP攻击表",
        "攻击表 top attack",
        "term",
        "消1/2/3/4打0/1/2/4\\nTspin攻击为消行数×2，如果符合Mini条件则÷2\\n连击攻击：001122334445+\\nb2b攻击+1（如果是T3则+2）\\nPC攻击+6（该部分攻击AOE直接打出到所有对手，不抵消缓冲槽中的攻击）。",
    },
    {"Techmino攻击表",
        "攻击表 tech attack",
        "term",
        "详见主菜单右下角的说明书页面。",
    },
    {"C2序列",
        "seq",
        "term",
        "（七个块初始权重设为0）\\n要取块的时候，\\n先把七个数都除以2然后加上0~1的随机数，\\n最大的数字是第几个的就出对应的块，然后将其权重除以3.5\\n循环。",-- Discovered by zxc
    },
    {"堆叠(Stack)",
        "duidie stacking",
        "term",
        "将方块无缝隙地堆起来，需要玩家有预读Next的能力，可以通过不使用Hold并且用十个消四完成40L模式进行练习。\\n这项能力从入坑到封神都是非常重要的。",
    },
    {"双旋",
        "shuangxuan",
        "term",
        "指能够使用顺时针+逆时针两个旋转键的技术，原来要转三下的情况可以反向转一下就够，减少烦琐操作。\\n同时双旋也是学习Finesse的必要前提。\\n\\n另见 三旋。",
    },
    {"三旋",
        "sanxuan",
        "term",
        "指能够使用顺+逆时针+180°旋转三个旋转键的技术，任何方块放哪只需要旋转一次即可（Spin不算）。\\n但由于只有部分游戏有180°旋转所以改操作并不通用，而且对速度提升的效果不如从单旋转双旋显著，不追求极限速度的玩家可不学。",
    },
    {"干旱(Drought)",
        "ganhan",
        "term",
        "经典块术语，指长时间不来I方块（长条）。现代方块使用的Bag7出块规则下干旱几乎不可能，平均7块就会有一个I，理论极限两个I最远中间隔12块。",
    },
    {"骨块(Bone)",
        "gukuai bone tgm",
        "term",
        "最早的方块游戏使用的方块样式。\\n很久以前的电脑没有可以显示复杂图案的屏幕，只能往上打字，所以一格方块用两个方括号[　]表示，长得像骨头所以叫骨块。\\n基于骨块的特点，Techmino把骨块重新定义为， “所有形状使用的同一个比较花眼的贴图”，不同的皮肤有不同的骨块样式。",
    },
    {"半隐",
        "banyin half semi invisible",
        "term",
        "指方块锁定经过一段时间后会变隐形的规则\\n注：从锁定开始到消失的具体时长不定，可以描述为 “过几秒种后消失”。",
    },
    {"全隐",
        "quanyin invisible",
        "term",
        "指方块锁定后会马上完全隐藏\\n注：锁定时有消失动画的话也可以叫全隐，但其实难度会小一点，故Techmino中没有动画的隐形模式叫瞬隐。",
    },
    {"场地重力",
        "重力 zhongli liansuo cascade chain",
        "term",
        "（由于 “重力” 有歧义所以本词典里称为场地重力，也有重力连锁等叫法。）\\n部分游戏的部分模式可能包含此规则。此规则下玩家的四格方块四个方向有连接关系，连起来的几个格整体会受到重力影响，悬空了会往下落。在这个规则下可以构造复杂的连锁消除，一个主打连锁消除对战的游戏是Qudra（老游戏，现在基本没人玩）。",
    },
    {"MPH模式",
        "",
        "term",
        "一个游戏模式：\\nMemoryless，Previewless，Holdless\\n纯随机块序+无Next+无Hold完成40L，一个非常考验玩家反应速度的模式。",
    },
    {"输入延迟",
        "input delay yanchi",
        "term",
        "用任何设备玩任何游戏时，所有的操作（按键盘，点鼠标等）都会晚一点点（很短，几毫秒到几十毫秒）才到达游戏，如果过长就会很影响游戏手感，作用效果类似于你拿QQ远程控制打FPS游戏\\nTOP、TE等游戏比较明显\\n这个延迟一般由硬件性能，硬件状态影响，通常来说不可设置，开启性能模式（或者关闭节能模式）可能会好一点。",
    },
    {"秘密段位",
        "大于号 secret grade dayuhao",
        "term",
        "出自TGM系列的彩蛋玩法。不按照TGM的一般目标去玩，而是去拼图拼出 “每行仅有一个洞的大于号” 图形（不能是小于号），拼得越多获得的秘密段位越高（没特殊功能，只是好玩），最高目标是完成19行并封顶"..HDwiki,
        HDsearch.."Secret_Grade_Techniques",
    },
    {"Cold Clear",
        "机器人 电脑 cc coldclear ai bot jiqiren",
        "term",
        "一个AI的名字（就跟AlphaGo一样）\\n由MinusKelvin开发，本来是用于PPT的。在Techmino中经过调整后支持all-spin和TRS旋转系统",
    },
    {"ZZZbot",
        "机器人 电脑 ai bot jiqiren zzztoj",
        "term",
        "一个AI的名字（就跟AlphaGo一样）\\n由研究群群友奏之章开发，重新调参后在各个游戏平台上的表现都很不错。",
    },

    -- 定式
    {"开局定式(Setup)",
        "opening kaijudingshi opener",
        "setup",
        "开局定式，定式一般指开局定式这个概念。\\n指开局后可以使用的套路摆法。局中情况合适的时候也可以摆出同样的形状，但是和摆法开局一般都不一样。\\n\\n能称为定式的摆法要尽量满足以下至少2~3条：\\n能适应大多数块序\\n输出高，尽量不浪费T块\\n很多方块无需软降，极简操作数少\\n有明确后续，分支尽量少。\\n\\n注：绝大多数定式基于bag7，序列规律性强才有发明定式的可能。",
    },
    {"DT炮",
        "dt cannon",
        "setup",
        "Double-Triple Cannon。"..HDwiki,
        HDsearch.."dt",
    },
    {"DTPC",
        "dtpc",
        "setup",
        "DT炮一个能接PC的分支。"..HDwiki,
        HDsearch.."dt",
    },
    {"BT炮",
        "bt cannon",
        "setup",
        "β炮（Beta炮）。"..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"BTPC",
        "btpc",
        "setup",
        "BT炮一个能接PC的分支。"..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"DDPC",
        "ddpc",
        "setup",
        "开局TSD的一个能接Double-Double-PC的分支。"..HDwiki,
        HDsearch.."TKI_3_Perfect_Clear",
    },
    {"QT炮",
        "qt cannon",
        "setup",
        "一种能以更高的概率搭出开局DT Attack的类似DT炮的定式。"..HDwiki,
        HDsearch.."dt",
    },
    {"MT",
        "mt",
        "setup",
        "Mini-Triple\\n一个TSM+TST的结构。",
        HDsearch.."mt",
    },
    {"Trinity",
        "trinity",
        "setup",
        "Trinity\\n一个TSD+TSD+TSD或TSM+TST+TSD的结构。",
        HDsearch.."trinity",
    },
    {"狼月炮",
        "wolfmoon",
        "setup",
        "狼月炮。"..HDwiki,
        HDsearch.."wolfmoon_cannon",
    },
    {"Sewer",
        "sewer",
        "setup",
        "Sewer开局。"..HDwiki,
        HDsearch.."sewer",
    },
    {"TKI",
        "tki-3 ",
        "setup",
        "TKI-3开局\\n有两种解释，一个是TSD开局的TKI-3，另一个是TST开局的TKI堆积（C-Spin）。"..HDwiki,
        HDsearch.."TKI_3_Opening",
    },
    {"God Spin",
        "god",
        "setup",
        "God Spin\\nwindkey发明的一个观赏性很强但实战没啥用的炫酷特殊T2+T3开局定式。"..HDwiki,
        HDsearch.."godspin",
    },
    {"信天翁",
        "xintianweng albatrosssp albatrossspecial",
        "setup",
        "一种高观赏性几乎不浪费T的快节奏强力T2-T3-T2-PC开局。"..HDwiki,
        HDsearch.."Albatross_Special",
    },
    {"鹈鹕",
        "tihu pelican",
        "setup",
        "一种类似信天翁的定式，在块序不能信天翁的时候可以用。",
        HDsearch.."Pelican"
    },
    {"全清开局",
        "qiqiaoban tangram pco 1stpc",
        "setup",
        "Perfect Clear Opener，一种极大概率能摆出来，有概率（hold I约84.6%，不hold I约61.2%）能做到PC的定式，Techmino中的pc练习中空出不规则区域的那个就是PCO。"..HDwiki,
        HDsearch.."Perfect_Clear_Opener",
    },
    {"六巧板",
        "liuqiaoban gracesystem 1stpc",
        "setup",
        "Grace System，大约有88.57%概率能做到PC的定式，Techmino中的PC练习中空出4×4方形区域就是六巧板。",
    },
    {"DPC",
        "DPC",
        "setup",
        "在场地空白，7bag还剩一块的情况下，能在很多情况下达到100%搭建率的TSD+PC的定式。更多信息见tetristemplate.info",
        "https://tetristemplate.info/dpc/",
    },
    {"Gamushiro堆叠",
        "gamushiro",
        "setup",
        "ガムシロ積み（Gamushiro堆叠），一种开局TD-Attack的定式。"..HDwiki,
        HDsearch.."Gamushiro_Stacking",
    },

    -- 形状
    {"中局定式",
        "setup dingshi",
        "pattern",
        "指一些特定的能打出较高伤害的常见典型形状，是中局输出的途径之一，部分也可以在开局做不过不是很有必要，主要见于中局\\n另见开局定式，只说定式两个字一般指开局定式而非中局。",
    },
    {"C-Spin",
        "cspin tki tdattack",
        "pattern",
        "也被称为TKI堆积，TD-Attack。"..HDwiki,
        HDsearch.."c-spin",
    },
    {"STSD",
        "stsd",
        "pattern",
        "Super T-spin Double\\n一种能做两个T2的形状。\\n如果垃圾行正好空在STSD正下方会暴毙。"..HDwiki,
        HDsearch.."stsd",
    },
    {"STMB",
        "stmb",
        "pattern",
        "STMB cave\\n在3宽坑架SZ捐一个T2的形状。"..HDwiki,
        HDsearch.."stmb_cave",
    },
    {"双刃剑",
        "shuangrenjian fractal spider",
        "pattern",
        "两个T2形状叠在一起。"..HDwiki,
        HDsearch.."Fractal",
    },
    {"LST堆叠",
        "lst",
        "pattern",
        "一种不断b2b一直做T2的堆叠方法。\\n",
        "https://www.bilibili.com/read/cv7946210",
    },
    {"汉堡包",
        "hamburger hanbaobao",
        "pattern",
        "一种边缘捐T不影响消四的堆叠法。"..HDwiki,
        HDsearch.."hamburger",
    },
    {"皇家十字",
        "皇十 imperial cross huangjiashizi huangshi",
        "pattern",
        "在一个十字形洞口盖屋檐后可以做两个T2的形状。"..HDwiki,
        HDsearch.."imperial_cross",
    },
    {"阶梯捐",
        "jieti kaidan stairs",
        "pattern",
        "一种在看起来像阶梯的洞口捐一个T2的形状。"..HDwiki,
        HDsearch.."kaidan",
    },
    {"社畜train",
        "shachikutrain shechu",
        "pattern",
        "一种在常见T3屋檐上捐两个T2的形状。"..HDwiki,
        HDsearch.."Shachiku_Train",
    },
    {"千鸟格子",
        "qianniaoge cutcopy",
        "pattern",
        "一种在小洞上捐一个T2后还能做一个T2的形状。"..HDwiki,
        HDsearch.."Cut_copy",
    },
    {"绯红之王",
        "feihongzhiwang king crimson",
        "pattern",
        "在STSD上叠若干个T3的形状。"..HDwiki,
        HDsearch.."King_Crimson",
    },
    {"连续PC",
        "lianxuquanxiao lianxupc pcloop",
        "pattern",
        "研究群群友加加编写的一份连续PC教程",
        "https://docs.qq.com/sheet/DRmxvWmt3SWxwS2tV",
    },

    -- 存档管理
    {"控制台",
        "console cmd commamd minglinghang kongzhitai",
        "command",
        "目前进入控制台的方式是在主菜单 点特定位置/按键盘某个键 数次。\\n\\n进入之后输入help并回车获取更多信息。\\n来探索Techmino的隐藏内容和计算机更底层的操作吧！",
    },
    {"重置设置",
        "reset setting chongzhi qingkong shezhi",
        "command",
        "前往控制台输入 “rm conf/setting” 并回车\\n需要重启游戏生效，若反悔，进入设置菜单再退出即可恢复文件。",
    },
    {"重置统计数据",
        "reset statistic data chongzhi tongji shuju",
        "command",
        "前往控制台输入 “rm conf/data” 并回车\\n需要重启游戏生效，若反悔，玩一局并触发结算即可恢复文件。",
    },
    {"重置解锁状态",
        "reset unlock chongzhi qingkong jiesuo",
        "command",
        "前往控制台输入 “rm conf/unlock” 并回车\\n需要重启游戏生效，若反悔，刷新任意一个模式在地图上的状态即可恢复文件。",
    },
    {"重置本地排行榜",
        "reset chongzhi paihangbang",
        "command",
        "前往控制台输入 “rm -s record” 并回车\\n需要重启游戏生效，若反悔，玩一局并更新模式排行榜即可恢复对应模式的单个排行榜文件。",
    },
    {"删除键位",
        "reset virtualkey",
        "command",
        "前往控制台输入 “rm conf/键位文件” 并回车\\n键盘是key，虚拟按键是virtualkey，虚拟按键预设是vkSave1（2）\\n前两者重启生效，若反悔，进入对应的设置菜单再返回即可恢复文件。",
    },
    {"删除录像",
        "reset replay luxiang",
        "command",
        "前往控制台输入 “rm -s replay” 并回车。\\n立即生效。",
    },
    {"删除缓存",
        "reset cache huancun touxiang",
        "command",
        "前往控制台输入 “rm -s cache” 并回车。\\n立即生效。",
    },

    -- 英文
    {"SFX",
        "",
        "english",
        "Sound Effects\\n音效（也叫SE）。",
    },
    {"BGM",
        "",
        "english",
        "Background Music\\n背景音乐。",
    },
    {"TAS",
        "",
        "english",
        "Tool-Assisted Speedrun（Supergaming）\\n使用特殊工具在不破坏游戏规则（允许超越人类操作，只是在程序层面不作弊）进行的游戏。\\n一般用于冲击理论值或者达成各种有趣的目标用来观赏。\\nTechmino中内置了非常简单的TAS工具。",
    },
    {"AFK",
        "",
        "english",
        "Away from keyboard\\n一段时间不接触键盘，就是不玩一段时间，可以缓解手部疲劳，休息好之后马上破纪录也是可能的。",
    },
    {"Timing",
        "timing shiji fanji",
        "term",
        "Time作动词时的动名词形式，意为抓时机。在方块中往往指根据双方形势选择打出攻击的时机，和要不要故意吃下对手的攻击防止抵消，然后再把自己的攻击打过去。可以一定程度上提高对战的优势，但对于新人来说连自己场地都看不明白还看啥对面，有时间分析形势不如提速提效来得更好。",
    },
}
`,title$2="Techmino Online Dictionary",search$2="Search",tags$2="Tags",copy_from$2="Copy from",error$2="Error",copied$2="Copied!",lang_en={title:title$2,search:search$2,tags:tags$2,copy_from:copy_from$2,error:error$2,copied:copied$2},title$1="テクミノ オンライン辞書",search$1="サーチ",tags$1="ラベル",copy_from$1="からコピー",error$1="エラー",copied$1="コピーしました!",lang_ja={title:title$1,search:search$1,tags:tags$1,copy_from:copy_from$1,error:error$1,copied:copied$1},title="Techmino 在线词典",search="搜点什么",tags="标签",copy_from="复制于",error="出错了",copied="复制成功!",lang_zh={title,search,tags,copy_from,error,copied},dictCache=new Map,dictFiles={en:dict_en,ja:dict_ja,zh:dict_zh},langFiles={en:lang_en,ja:lang_ja,zh:lang_zh},categoryColors={help:"#fdba74",org:"#fbb741",game:"#14a3c7",term:"#ff7f7f",setup:"#94a3b8",pattern:"#bfdfa5",command:"#0284c7",english:"#2563eb",name:"#7a5299"};var luaparseExports={},luaparse={get exports(){return luaparseExports},set exports(e){luaparseExports=e}};(function(e,n){(function(t,o,r){var i=n&&!n.nodeType&&n,a=e&&!e.nodeType&&e,s=i&&a&&typeof commonjsGlobal=="object"&&commonjsGlobal,l=a&&a.exports===i&&i;s&&(s.global===s||s.window===s||s.self===s)&&(t=s),r(i&&a?l?a.exports:i:t[o]={})})(commonjsGlobal,"luaparse",function(t){t.version="0.3.1";var o,r,i,a,s,l=t.defaultOptions={wait:!1,comments:!0,scope:!1,locations:!1,ranges:!1,onCreateNode:null,onCreateScope:null,onDestroyScope:null,onLocalDeclaration:null,luaVersion:"5.1",encodingMode:"none"};function d(m,S){return S=S||0,m<128?String.fromCharCode(m):m<2048?String.fromCharCode(S|192|m>>6,S|128|m&63):m<65536?String.fromCharCode(S|224|m>>12,S|128|m>>6&63,S|128|m&63):m<1114112?String.fromCharCode(S|240|m>>18,S|128|m>>12&63,S|128|m>>6&63,S|128|m&63):null}function u(m,S){for(var B=m.toString(16);B.length<S;)B="0"+B;return B}function f(m){return function(S){var B=m.exec(S);if(!B)return S;z(null,E.invalidCodeUnit,u(B[0].charCodeAt(0),4).toUpperCase())}}var b={"pseudo-latin1":{fixup:f(/[^\x00-\xff]/),encodeByte:function(m){return m===null?"":String.fromCharCode(m)},encodeUTF8:function(m){return d(m)}},"x-user-defined":{fixup:f(/[^\x00-\x7f\uf780-\uf7ff]/),encodeByte:function(m){return m===null?"":m>=128?String.fromCharCode(m|63232):String.fromCharCode(m)},encodeUTF8:function(m){return d(m,63232)}},none:{discardStrings:!0,fixup:function(m){return m},encodeByte:function(m){return""},encodeUTF8:function(m){return""}}},C=1,g=2,x=4,v=8,y=16,$=32,L=64,P=128,k=256;t.tokenTypes={EOF:C,StringLiteral:g,Keyword:x,Identifier:v,NumericLiteral:y,Punctuator:$,BooleanLiteral:L,NilLiteral:P,VarargLiteral:k};var E=t.errors={unexpected:"unexpected %1 '%2' near '%3'",unexpectedEOF:"unexpected symbol near '<eof>'",expected:"'%1' expected near '%2'",expectedToken:"%1 expected near '%2'",unfinishedString:"unfinished string near '%1'",malformedNumber:"malformed number near '%1'",decimalEscapeTooLarge:"decimal escape too large near '%1'",invalidEscape:"invalid escape sequence near '%1'",hexadecimalDigitExpected:"hexadecimal digit expected near '%1'",braceExpected:"missing '%1' near '%2'",tooLargeCodepoint:"UTF-8 value too large near '%1'",unfinishedLongString:"unfinished long string (starting at line %1) near '%2'",unfinishedLongComment:"unfinished long comment (starting at line %1) near '%2'",ambiguousSyntax:"ambiguous syntax (function call x new statement) near '%1'",noLoopToBreak:"no loop to break near '%1'",labelAlreadyDefined:"label '%1' already defined on line %2",labelNotVisible:"no visible label '%1' for <goto>",gotoJumpInLocalScope:"<goto %1> jumps into the scope of local '%2'",cannotUseVararg:"cannot use '...' outside a vararg function near '%1'",invalidCodeUnit:"code unit U+%1 is not allowed in the current encoding mode"},w=t.ast={labelStatement:function(m){return{type:"LabelStatement",label:m}},breakStatement:function(){return{type:"BreakStatement"}},gotoStatement:function(m){return{type:"GotoStatement",label:m}},returnStatement:function(m){return{type:"ReturnStatement",arguments:m}},ifStatement:function(m){return{type:"IfStatement",clauses:m}},ifClause:function(m,S){return{type:"IfClause",condition:m,body:S}},elseifClause:function(m,S){return{type:"ElseifClause",condition:m,body:S}},elseClause:function(m){return{type:"ElseClause",body:m}},whileStatement:function(m,S){return{type:"WhileStatement",condition:m,body:S}},doStatement:function(m){return{type:"DoStatement",body:m}},repeatStatement:function(m,S){return{type:"RepeatStatement",condition:m,body:S}},localStatement:function(m,S){return{type:"LocalStatement",variables:m,init:S}},assignmentStatement:function(m,S){return{type:"AssignmentStatement",variables:m,init:S}},callStatement:function(m){return{type:"CallStatement",expression:m}},functionStatement:function(m,S,B,N){return{type:"FunctionDeclaration",identifier:m,isLocal:B,parameters:S,body:N}},forNumericStatement:function(m,S,B,N,re){return{type:"ForNumericStatement",variable:m,start:S,end:B,step:N,body:re}},forGenericStatement:function(m,S,B){return{type:"ForGenericStatement",variables:m,iterators:S,body:B}},chunk:function(m){return{type:"Chunk",body:m}},identifier:function(m){return{type:"Identifier",name:m}},literal:function(m,S,B){return m=m===g?"StringLiteral":m===y?"NumericLiteral":m===L?"BooleanLiteral":m===P?"NilLiteral":"VarargLiteral",{type:m,value:S,raw:B}},tableKey:function(m,S){return{type:"TableKey",key:m,value:S}},tableKeyString:function(m,S){return{type:"TableKeyString",key:m,value:S}},tableValue:function(m){return{type:"TableValue",value:m}},tableConstructorExpression:function(m){return{type:"TableConstructorExpression",fields:m}},binaryExpression:function(m,S,B){var N=m==="and"||m==="or"?"LogicalExpression":"BinaryExpression";return{type:N,operator:m,left:S,right:B}},unaryExpression:function(m,S){return{type:"UnaryExpression",operator:m,argument:S}},memberExpression:function(m,S,B){return{type:"MemberExpression",indexer:S,identifier:B,base:m}},indexExpression:function(m,S){return{type:"IndexExpression",base:m,index:S}},callExpression:function(m,S){return{type:"CallExpression",base:m,arguments:S}},tableCallExpression:function(m,S){return{type:"TableCallExpression",base:m,arguments:S}},stringCallExpression:function(m,S){return{type:"StringCallExpression",base:m,argument:S}},comment:function(m,S){return{type:"Comment",value:m,raw:S}}};function T(m){if(Ie){var S=Me.pop();S.complete(),S.bless(m)}return r.onCreateNode&&r.onCreateNode(m),m}var M=Array.prototype.slice,_=function(m,S){for(var B=0,N=m.length;B<N;++B)if(m[B]===S)return B;return-1};Array.prototype.indexOf&&(_=function(m,S){return m.indexOf(S)});function J(m,S,B){for(var N=0,re=m.length;N<re;++N)if(m[N][S]===B)return N;return-1}function O(m){var S=M.call(arguments,1);return m=m.replace(/%(\d)/g,function(B,N){return""+S[N-1]||""}),m}var Y=function(m){for(var S=M.call(arguments,1),B,N,re=0,xe=S.length;re<xe;++re){B=S[re];for(N in B)Object.prototype.hasOwnProperty.call(B,N)&&(m[N]=B[N])}return m};Object.assign&&(Y=Object.assign),t.SyntaxError=SyntaxError;function H(m){return Object.create?Object.create(m,{line:{writable:!0,value:m.line},index:{writable:!0,value:m.index},column:{writable:!0,value:m.column}}):m}function z(m){var S=O.apply(null,M.call(arguments,1)),B,N;throw m===null||typeof m.line>"u"?(N=R-de+1,B=H(new SyntaxError(O("[%1:%2] %3",ye,N,S))),B.index=R,B.line=ye,B.column=N):(N=m.range[0]-m.lineStart,B=H(new SyntaxError(O("[%1:%2] %3",m.line,N,S))),B.line=m.line,B.index=m.range[0],B.column=N),B}function te(m){var S=o.slice(m.range[0],m.range[1]);return S||m.value}function j(m,S){z(S,E.expectedToken,m,te(S))}function ee(m){var S=te(me);if(typeof m.type<"u"){var B;switch(m.type){case g:B="string";break;case x:B="keyword";break;case v:B="identifier";break;case y:B="number";break;case $:B="symbol";break;case L:B="boolean";break;case P:return z(m,E.unexpected,"symbol","nil",S);case C:return z(m,E.unexpectedEOF)}return z(m,E.unexpected,B,te(m),S)}return z(m,E.unexpected,"symbol",m,S)}var R,K,he,me,He,Ce,ye,de;t.lex=ge;function ge(){for(pe();o.charCodeAt(R)===45&&o.charCodeAt(R+1)===45;)ce(),pe();if(R>=i)return{type:C,value:"<eof>",line:ye,lineStart:de,range:[R,R]};var m=o.charCodeAt(R),S=o.charCodeAt(R+1);if(Ce=R,Ge(m))return Ke();switch(m){case 39:case 34:return D();case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return V();case 46:return Te(S)?V():S===46?o.charCodeAt(R+2)===46?A():Pe(".."):Pe(".");case 61:return Pe(S===61?"==":"=");case 62:return a.bitwiseOperators&&S===62?Pe(">>"):Pe(S===61?">=":">");case 60:return a.bitwiseOperators&&S===60?Pe("<<"):Pe(S===61?"<=":"<");case 126:if(S===61)return Pe("~=");if(!a.bitwiseOperators)break;return Pe("~");case 58:return a.labels&&S===58?Pe("::"):Pe(":");case 91:return S===91||S===61?F():Pe("[");case 47:return a.integerDivision&&S===47?Pe("//"):Pe("/");case 38:case 124:if(!a.bitwiseOperators)break;case 42:case 94:case 37:case 44:case 123:case 125:case 93:case 40:case 41:case 59:case 35:case 45:case 43:return Pe(o.charAt(R))}return ee(o.charAt(R))}function Ve(){var m=o.charCodeAt(R),S=o.charCodeAt(R+1);return be(m)?(m===10&&S===13&&++R,m===13&&S===10&&++R,++ye,de=++R,!0):!1}function pe(){for(;R<i;){var m=o.charCodeAt(R);if(Se(m))++R;else if(!Ve())break}}function Ke(){for(var m,S;Qe(o.charCodeAt(++R)););return m=s.fixup(o.slice(Ce,R)),Je(m)?S=x:m==="true"||m==="false"?(S=L,m=m==="true"):m==="nil"?(S=P,m=null):S=v,{type:S,value:m,line:ye,lineStart:de,range:[Ce,R]}}function Pe(m){return R+=m.length,{type:$,value:m,line:ye,lineStart:de,range:[Ce,R]}}function A(){return R+=3,{type:k,value:"...",line:ye,lineStart:de,range:[Ce,R]}}function D(){for(var m=o.charCodeAt(R++),S=ye,B=de,N=R,re=s.discardStrings?null:"",xe;xe=o.charCodeAt(R++),m!==xe;)if((R>i||be(xe))&&(re+=o.slice(N,R-1),z(null,E.unfinishedString,o.slice(Ce,R-1))),xe===92){if(!s.discardStrings){var ke=o.slice(N,R-1);re+=s.fixup(ke)}var Be=W();s.discardStrings||(re+=Be),N=R}return s.discardStrings||(re+=s.encodeByte(null),re+=s.fixup(o.slice(N,R-1))),{type:g,value:re,line:S,lineStart:B,lastLine:ye,lastLineStart:de,range:[Ce,R]}}function F(){var m=ye,S=de,B=se(!1);return B===!1&&z(K,E.expected,"[",te(K)),{type:g,value:s.discardStrings?null:s.fixup(B),line:m,lineStart:S,lastLine:ye,lastLineStart:de,range:[Ce,R]}}function V(){var m=o.charAt(R),S=o.charAt(R+1),B=m==="0"&&"xX".indexOf(S||null)>=0?oe():Q(),N=U(),re=ne();return re&&(N||B.hasFractionPart)&&z(null,E.malformedNumber,o.slice(Ce,R)),{type:y,value:B.value,line:ye,lineStart:de,range:[Ce,R]}}function U(){if(a.imaginaryNumbers)return"iI".indexOf(o.charAt(R)||null)>=0?(++R,!0):!1}function ne(){if(a.integerSuffixes){if("uU".indexOf(o.charAt(R)||null)>=0)if(++R,"lL".indexOf(o.charAt(R)||null)>=0){if(++R,"lL".indexOf(o.charAt(R)||null)>=0)return++R,"ULL";z(null,E.malformedNumber,o.slice(Ce,R))}else z(null,E.malformedNumber,o.slice(Ce,R));else if("lL".indexOf(o.charAt(R)||null)>=0){if(++R,"lL".indexOf(o.charAt(R)||null)>=0)return++R,"LL";z(null,E.malformedNumber,o.slice(Ce,R))}}}function oe(){var m=0,S=1,B=1,N,re,xe,ke;for(ke=R+=2,De(o.charCodeAt(R))||z(null,E.malformedNumber,o.slice(Ce,R));De(o.charCodeAt(R));)++R;N=parseInt(o.slice(ke,R),16);var Be=!1;if(o.charAt(R)==="."){for(Be=!0,re=++R;De(o.charCodeAt(R));)++R;m=o.slice(re,R),m=re===R?0:parseInt(m,16)/Math.pow(16,R-re)}var sn=!1;if("pP".indexOf(o.charAt(R)||null)>=0){for(sn=!0,++R,"+-".indexOf(o.charAt(R)||null)>=0&&(B=o.charAt(R++)==="+"?1:-1),xe=R,Te(o.charCodeAt(R))||z(null,E.malformedNumber,o.slice(Ce,R));Te(o.charCodeAt(R));)++R;S=o.slice(xe,R),S=Math.pow(2,S*B)}return{value:(N+m)*S,hasFractionPart:Be||sn}}function Q(){for(;Te(o.charCodeAt(R));)++R;var m=!1;if(o.charAt(R)===".")for(m=!0,++R;Te(o.charCodeAt(R));)++R;var S=!1;if("eE".indexOf(o.charAt(R)||null)>=0)for(S=!0,++R,"+-".indexOf(o.charAt(R)||null)>=0&&++R,Te(o.charCodeAt(R))||z(null,E.malformedNumber,o.slice(Ce,R));Te(o.charCodeAt(R));)++R;return{value:parseFloat(o.slice(Ce,R)),hasFractionPart:m||S}}function Z(){var m=R++;for(o.charAt(R++)!=="{"&&z(null,E.braceExpected,"{","\\"+o.slice(m,R)),De(o.charCodeAt(R))||z(null,E.hexadecimalDigitExpected,"\\"+o.slice(m,R));o.charCodeAt(R)===48;)++R;for(var S=R;De(o.charCodeAt(R));)++R,R-S>6&&z(null,E.tooLargeCodepoint,"\\"+o.slice(m,R));var B=o.charAt(R++);B!=="}"&&(B==='"'||B==="'"?z(null,E.braceExpected,"}","\\"+o.slice(m,R--)):z(null,E.hexadecimalDigitExpected,"\\"+o.slice(m,R)));var N=parseInt(o.slice(S,R-1)||"0",16),re="\\"+o.slice(m,R);return N>1114111&&z(null,E.tooLargeCodepoint,re),s.encodeUTF8(N,re)}function W(){var m=R;switch(o.charAt(R)){case"a":return++R,"\x07";case"n":return++R,`
`;case"r":return++R,"\r";case"t":return++R,"	";case"v":return++R,"\v";case"b":return++R,"\b";case"f":return++R,"\f";case"\r":case`
`:return Ve(),`
`;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;Te(o.charCodeAt(R))&&R-m<3;)++R;var S=o.slice(m,R),B=parseInt(S,10);return B>255&&z(null,E.decimalEscapeTooLarge,"\\"+B),s.encodeByte(B,"\\"+S);case"z":if(a.skipWhitespaceEscape)return++R,pe(),"";break;case"x":if(a.hexEscapes){if(De(o.charCodeAt(R+1))&&De(o.charCodeAt(R+2)))return R+=3,s.encodeByte(parseInt(o.slice(m+1,R),16),"\\"+o.slice(m,R));z(null,E.hexadecimalDigitExpected,"\\"+o.slice(m,R+2))}break;case"u":if(a.unicodeEscapes)return Z();break;case"\\":case'"':case"'":return o.charAt(R++)}return a.strictEscapes&&z(null,E.invalidEscape,"\\"+o.slice(m,R+1)),o.charAt(R++)}function ce(){Ce=R,R+=2;var m=o.charAt(R),S="",B=!1,N=R,re=de,xe=ye;if(m==="["&&(S=se(!0),S===!1?S=m:B=!0),!B){for(;R<i&&!be(o.charCodeAt(R));)++R;r.comments&&(S=o.slice(N,R))}if(r.comments){var ke=w.comment(S,o.slice(Ce,R));r.locations&&(ke.loc={start:{line:xe,column:Ce-re},end:{line:ye,column:R-de}}),r.ranges&&(ke.range=[Ce,R]),r.onCreateNode&&r.onCreateNode(ke),He.push(ke)}}function se(m){var S=0,B="",N=!1,re,xe,ke=ye;for(++R;o.charAt(R+S)==="=";)++S;if(o.charAt(R+S)!=="[")return!1;for(R+=S+1,be(o.charCodeAt(R))&&Ve(),xe=R;R<i;){for(;be(o.charCodeAt(R));)Ve();if(re=o.charAt(R++),re==="]"){N=!0;for(var Be=0;Be<S;++Be)o.charAt(R+Be)!=="="&&(N=!1);o.charAt(R+S)!=="]"&&(N=!1)}if(N)return B+=o.slice(xe,R-1),R+=S+1,B}z(null,m?E.unfinishedLongComment:E.unfinishedLongString,ke,"<eof>")}function X(){he=K,K=me,me=ge()}function ie(m){return m===K.value?(X(),!0):!1}function le(m){m===K.value?X():z(K,E.expected,m,te(K))}function Se(m){return m===9||m===32||m===11||m===12}function be(m){return m===10||m===13}function Te(m){return m>=48&&m<=57}function De(m){return m>=48&&m<=57||m>=97&&m<=102||m>=65&&m<=70}function Ge(m){return!!(m>=65&&m<=90||m>=97&&m<=122||m===95||a.extendedIdentifiers&&m>=128)}function Qe(m){return!!(m>=65&&m<=90||m>=97&&m<=122||m===95||m>=48&&m<=57||a.extendedIdentifiers&&m>=128)}function Je(m){switch(m.length){case 2:return m==="do"||m==="if"||m==="in"||m==="or";case 3:return m==="and"||m==="end"||m==="for"||m==="not";case 4:return m==="else"||m==="then"?!0:a.labels&&!a.contextualGoto?m==="goto":!1;case 5:return m==="break"||m==="local"||m==="until"||m==="while";case 6:return m==="elseif"||m==="repeat"||m==="return";case 8:return m==="function"}return!1}function qe(m){return $===m.type?"#-~".indexOf(m.value)>=0:x===m.type?m.value==="not":!1}function Oe(m){if(C===m.type)return!0;if(x!==m.type)return!1;switch(m.value){case"else":case"elseif":case"end":case"until":return!0;default:return!1}}var q,ae,fe;function ve(){var m=q[ae++].slice();q.push(m),r.onCreateScope&&r.onCreateScope()}function $e(){q.pop(),--ae,r.onDestroyScope&&r.onDestroyScope()}function _e(m){r.onLocalDeclaration&&r.onLocalDeclaration(m),_(q[ae],m)===-1&&q[ae].push(m)}function ze(m){_e(m.name),Ae(m,!0)}function Ae(m,S){!S&&J(fe,"name",m.name)===-1&&fe.push(m),m.isLocal=S}function je(m){return _(q[ae],m)!==-1}var Me=[],Ie;function Ue(){return new rn(K)}function rn(m){r.locations&&(this.loc={start:{line:m.line,column:m.range[0]-m.lineStart},end:{line:0,column:0}}),r.ranges&&(this.range=[m.range[0],0])}rn.prototype.complete=function(){r.locations&&(this.loc.end.line=he.lastLine||he.line,this.loc.end.column=he.range[1]-(he.lastLineStart||he.lineStart)),r.ranges&&(this.range[1]=he.range[1])},rn.prototype.bless=function(m){if(this.loc){var S=this.loc;m.loc={start:{line:S.start.line,column:S.start.column},end:{line:S.end.line,column:S.end.column}}}this.range&&(m.range=[this.range[0],this.range[1]])};function en(){Ie&&Me.push(Ue())}function Fe(m){Ie&&Me.push(m)}function We(){this.scopes=[],this.pendingGotos=[]}We.prototype.isInLoop=function(){for(var m=this.scopes.length;m-- >0;)if(this.scopes[m].isLoop)return!0;return!1},We.prototype.pushScope=function(m){var S={labels:{},locals:[],deferredGotos:[],isLoop:!!m};this.scopes.push(S)},We.prototype.popScope=function(){for(var m=0;m<this.pendingGotos.length;++m){var S=this.pendingGotos[m];S.maxDepth>=this.scopes.length&&--S.maxDepth<=0&&z(S.token,E.labelNotVisible,S.target)}this.scopes.pop()},We.prototype.addGoto=function(m,S){for(var B=[],N=0;N<this.scopes.length;++N){var re=this.scopes[N];if(B.push(re.locals.length),Object.prototype.hasOwnProperty.call(re.labels,m))return}this.pendingGotos.push({maxDepth:this.scopes.length,target:m,token:S,localCounts:B})},We.prototype.addLabel=function(m,S){var B=this.currentScope();if(Object.prototype.hasOwnProperty.call(B.labels,m))z(S,E.labelAlreadyDefined,m,B.labels[m].line);else{for(var N=[],re=0;re<this.pendingGotos.length;++re){var xe=this.pendingGotos[re];if(xe.maxDepth>=this.scopes.length&&xe.target===m){xe.localCounts[this.scopes.length-1]<B.locals.length&&B.deferredGotos.push(xe);continue}N.push(xe)}this.pendingGotos=N}B.labels[m]={localCount:B.locals.length,line:S.line}},We.prototype.addLocal=function(m,S){this.currentScope().locals.push({name:m,token:S})},We.prototype.currentScope=function(){return this.scopes[this.scopes.length-1]},We.prototype.raiseDeferredErrors=function(){for(var m=this.currentScope(),S=m.deferredGotos,B=0;B<S.length;++B){var N=S[B];z(N.token,E.gotoJumpInLocalScope,N.target,m.locals[N.localCounts[this.scopes.length-1]].name)}};function I(){this.level=0,this.loopLevels=[]}I.prototype.isInLoop=function(){return!!this.loopLevels.length},I.prototype.pushScope=function(m){++this.level,m&&this.loopLevels.push(this.level)},I.prototype.popScope=function(){var m=this.loopLevels,S=m.length;S&&m[S-1]===this.level&&m.pop(),--this.level},I.prototype.addGoto=I.prototype.addLabel=function(){throw new Error("This should never happen")},I.prototype.addLocal=I.prototype.raiseDeferredErrors=function(){};function G(){return a.labels?new We:new I}function ue(){X(),en(),r.scope&&ve();var m=G();m.allowVararg=!0,m.pushScope();var S=we(m);return m.popScope(),r.scope&&$e(),C!==K.type&&ee(K),Ie&&!S.length&&(he=K),T(w.chunk(S))}function we(m){for(var S=[],B;!Oe(K);){if(K.value==="return"||!a.relaxedBreak&&K.value==="break"){S.push(Ee(m));break}B=Ee(m),ie(";"),B&&S.push(B)}return S}function Ee(m){if(en(),$===K.type&&ie("::"))return Re(m);if(a.emptyStatement&&ie(";")){Ie&&Me.pop();return}if(m.raiseDeferredErrors(),x===K.type)switch(K.value){case"local":return X(),Cn(m);case"if":return X(),vn(m);case"return":return X(),ln(m);case"function":X();var S=wn();return cn(S);case"while":return X(),nn(m);case"for":return X(),yn(m);case"repeat":return X(),tn(m);case"break":return X(),m.isInLoop()||z(K,E.noLoopToBreak,K.value),Ye();case"do":return X(),Xe(m);case"goto":return X(),Ze(m)}return a.contextualGoto&&K.type===v&&K.value==="goto"&&me.type===v&&me.value!=="goto"?(X(),Ze(m)):(Ie&&Me.pop(),xn(m))}function Re(m){var S=K,B=Ne();return r.scope&&(_e("::"+S.value+"::"),Ae(B,!0)),le("::"),m.addLabel(S.value,S),T(w.labelStatement(B))}function Ye(){return T(w.breakStatement())}function Ze(m){var S=K.value,B=he,N=Ne();return m.addGoto(S,B),T(w.gotoStatement(N))}function Xe(m){r.scope&&ve(),m.pushScope();var S=we(m);return m.popScope(),r.scope&&$e(),le("end"),T(w.doStatement(S))}function nn(m){var S=Le(m);le("do"),r.scope&&ve(),m.pushScope(!0);var B=we(m);return m.popScope(),r.scope&&$e(),le("end"),T(w.whileStatement(S,B))}function tn(m){r.scope&&ve(),m.pushScope(!0);var S=we(m);le("until"),m.raiseDeferredErrors();var B=Le(m);return m.popScope(),r.scope&&$e(),T(w.repeatStatement(B,S))}function ln(m){var S=[];if(K.value!=="end"){var B=an(m);for(B!=null&&S.push(B);ie(",");)B=Le(m),S.push(B);ie(";")}return T(w.returnStatement(S))}function vn(m){var S=[],B,N,re;for(Ie&&(re=Me[Me.length-1],Me.push(re)),B=Le(m),le("then"),r.scope&&ve(),m.pushScope(),N=we(m),m.popScope(),r.scope&&$e(),S.push(T(w.ifClause(B,N))),Ie&&(re=Ue());ie("elseif");)Fe(re),B=Le(m),le("then"),r.scope&&ve(),m.pushScope(),N=we(m),m.popScope(),r.scope&&$e(),S.push(T(w.elseifClause(B,N))),Ie&&(re=Ue());return ie("else")&&(Ie&&(re=new rn(he),Me.push(re)),r.scope&&ve(),m.pushScope(),N=we(m),m.popScope(),r.scope&&$e(),S.push(T(w.elseClause(N)))),le("end"),T(w.ifStatement(S))}function yn(m){var S=Ne(),B;if(r.scope&&(ve(),ze(S)),ie("=")){var N=Le(m);le(",");var re=Le(m),xe=ie(",")?Le(m):null;return le("do"),m.pushScope(!0),B=we(m),m.popScope(),le("end"),r.scope&&$e(),T(w.forNumericStatement(S,N,re,xe,B))}else{for(var ke=[S];ie(",");)S=Ne(),r.scope&&ze(S),ke.push(S);le("in");var Be=[];do{var sn=Le(m);Be.push(sn)}while(ie(","));return le("do"),m.pushScope(!0),B=we(m),m.popScope(),le("end"),r.scope&&$e(),T(w.forGenericStatement(ke,Be,B))}}function Cn(m){var S,B=he;if(v===K.type){var N=[],re=[];do S=Ne(),N.push(S),m.addLocal(S.name,B);while(ie(","));if(ie("="))do{var xe=Le(m);re.push(xe)}while(ie(","));if(r.scope)for(var ke=0,Be=N.length;ke<Be;++ke)ze(N[ke]);return T(w.localStatement(N,re))}if(ie("function"))return S=Ne(),m.addLocal(S.name,B),r.scope&&(ze(S),ve()),cn(S,!0);j("<name>",K)}function xn(m){var S,B,N,re,xe,ke=[];Ie&&(B=Ue());do{if(Ie&&(S=Ue()),v===K.type)xe=K.value,re=Ne(),r.scope&&Ae(re,je(xe)),N=!0;else if(K.value==="(")X(),re=Le(m),le(")"),N=!1;else return ee(K);e:for(;;){switch(g===K.type?'"':K.value){case".":case"[":N=!0;break;case":":case"(":case"{":case'"':N=null;break;default:break e}re=pn(re,S,m)}if(ke.push(re),K.value!==",")break;if(!N)return ee(K);X()}while(!0);if(ke.length===1&&N===null)return Fe(S),T(w.callStatement(ke[0]));if(!N)return ee(K);le("=");var Be=[];do Be.push(Le(m));while(ie(","));return Fe(B),T(w.assignmentStatement(ke,Be))}function Ne(){en();var m=K.value;return v!==K.type&&j("<name>",K),X(),T(w.identifier(m))}function cn(m,S){var B=G();B.pushScope();var N=[];if(le("("),!ie(")"))for(;;){if(v===K.type){var re=Ne();if(r.scope&&ze(re),N.push(re),ie(","))continue}else k===K.type?(B.allowVararg=!0,N.push(fn(B))):j("<name> or '...'",K);le(")");break}var xe=we(B);return B.popScope(),le("end"),r.scope&&$e(),S=S||!1,T(w.functionStatement(m,N,S,xe))}function wn(){var m,S,B;for(Ie&&(B=Ue()),m=Ne(),r.scope&&(Ae(m,je(m.name)),ve());ie(".");)Fe(B),S=Ne(),m=T(w.memberExpression(m,".",S));return ie(":")&&(Fe(B),S=Ne(),m=T(w.memberExpression(m,":",S)),r.scope&&_e("self")),m}function hn(m){for(var S=[],B,N;;){if(en(),$===K.type&&ie("["))B=Le(m),le("]"),le("="),N=Le(m),S.push(T(w.tableKey(B,N)));else if(v===K.type)me.value==="="?(B=Ne(),X(),N=Le(m),S.push(T(w.tableKeyString(B,N)))):(N=Le(m),S.push(T(w.tableValue(N))));else{if((N=an(m))==null){Me.pop();break}S.push(T(w.tableValue(N)))}if(",;".indexOf(K.value)>=0){X();continue}break}return le("}"),T(w.tableConstructorExpression(S))}function an(m){var S=dn(0,m);return S}function Le(m){var S=an(m);if(S==null)j("<expression>",K);else return S}function Sn(m){var S=m.charCodeAt(0),B=m.length;if(B===1)switch(S){case 94:return 12;case 42:case 47:case 37:return 10;case 43:case 45:return 9;case 38:return 6;case 126:return 5;case 124:return 4;case 60:case 62:return 3}else if(B===2)switch(S){case 47:return 10;case 46:return 8;case 60:case 62:return m==="<<"||m===">>"?7:3;case 61:case 126:return 3;case 111:return 1}else if(S===97&&m==="and")return 2;return 0}function dn(m,S){var B=K.value,N,re;if(Ie&&(re=Ue()),qe(K)){en(),X();var xe=dn(10,S);xe==null&&j("<expression>",K),N=T(w.unaryExpression(B,xe))}if(N==null&&(N=fn(S),N==null&&(N=Tn(S))),N==null)return null;for(var ke;B=K.value,ke=$===K.type||x===K.type?Sn(B):0,!(ke===0||ke<=m);){(B==="^"||B==="..")&&--ke,X();var Be=dn(ke,S);Be==null&&j("<expression>",K),Ie&&Me.push(re),N=T(w.binaryExpression(B,N,Be))}return N}function pn(m,S,B){var N,re;if($===K.type)switch(K.value){case"[":return Fe(S),X(),N=Le(B),le("]"),T(w.indexExpression(m,N));case".":return Fe(S),X(),re=Ne(),T(w.memberExpression(m,".",re));case":":return Fe(S),X(),re=Ne(),m=T(w.memberExpression(m,":",re)),Fe(S),un(m,B);case"(":case"{":return Fe(S),un(m,B)}else if(g===K.type)return Fe(S),un(m,B);return null}function Tn(m){var S,B,N;if(Ie&&(N=Ue()),v===K.type)B=K.value,S=Ne(),r.scope&&Ae(S,je(B));else if(ie("("))S=Le(m),le(")");else return null;for(;;){var re=pn(S,N,m);if(re===null)break;S=re}return S}function un(m,S){if($===K.type)switch(K.value){case"(":a.emptyStatement||K.line!==he.line&&z(null,E.ambiguousSyntax,K.value),X();var B=[],N=an(S);for(N!=null&&B.push(N);ie(",");)N=Le(S),B.push(N);return le(")"),T(w.callExpression(m,B));case"{":en(),X();var re=hn(S);return T(w.tableCallExpression(m,re))}else if(g===K.type)return T(w.stringCallExpression(m,fn(S)));j("function arguments",K)}function fn(m){var S=g|y|L|P|k,B=K.value,N=K.type,re;if(Ie&&(re=Ue()),N===k&&!m.allowVararg&&z(K,E.cannotUseVararg,K.value),N&S){Fe(re);var xe=o.slice(K.range[0],K.range[1]);return X(),T(w.literal(N,B,xe))}else{if(x===N&&B==="function")return Fe(re),X(),r.scope&&ve(),cn(null);if(ie("{"))return Fe(re),hn(m)}}t.parse=$n;var mn={"5.1":{},"5.2":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,relaxedBreak:!0},"5.3":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,bitwiseOperators:!0,integerDivision:!0,relaxedBreak:!0},LuaJIT:{labels:!0,contextualGoto:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,imaginaryNumbers:!0,integerSuffixes:!0}};function $n(m,S){if(typeof S>"u"&&typeof m=="object"&&(S=m,m=void 0),S||(S={}),o=m||"",r=Y({},l,S),R=0,ye=1,de=0,i=o.length,q=[[]],ae=0,fe=[],Me=[],!Object.prototype.hasOwnProperty.call(mn,r.luaVersion))throw new Error(O("Lua version '%1' not supported",r.luaVersion));if(a=Y({},mn[r.luaVersion]),r.extendedIdentifiers!==void 0&&(a.extendedIdentifiers=!!r.extendedIdentifiers),!Object.prototype.hasOwnProperty.call(b,r.encodingMode))throw new Error(O("Encoding mode '%1' not supported",r.encodingMode));return s=b[r.encodingMode],r.comments&&(He=[]),r.wait?t:bn()}t.write=gn;function gn(m){return o+=String(m),i=o.length,t}t.end=bn;function bn(m){typeof m<"u"&&gn(m),o&&o.substr(0,2)==="#!"&&(o=o.replace(/^.*/,function(B){return B.replace(/./g," ")})),i=o.length,Ie=r.locations||r.ranges,me=ge();var S=ue();if(r.comments&&(S.comments=He),r.scope&&(S.globals=fe),Me.length>0)throw new Error("Location tracking failed. This is most likely a bug in luaparse");return S}})})(luaparse,luaparseExports);var _a;const isClient=typeof window<"u",isString=e=>typeof e=="string",noop=()=>{};isClient&&((_a=window==null?void 0:window.navigator)!=null&&_a.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function resolveUnref(e){return typeof e=="function"?e():unref(e)}function createFilterWrapper(e,n){function t(...o){return new Promise((r,i)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(r).catch(i)})}return t}function debounceFilter(e,n={}){let t,o,r=noop;const i=s=>{clearTimeout(s),r(),r=noop};return s=>{const l=resolveUnref(e),d=resolveUnref(n.maxWait);return t&&i(t),l<=0||d!==void 0&&d<=0?(o&&(i(o),o=null),Promise.resolve(s())):new Promise((u,f)=>{r=n.rejectOnCancel?f:u,d&&!o&&(o=setTimeout(()=>{t&&i(t),o=null,u(s())},d)),t=setTimeout(()=>{o&&i(o),o=null,u(s())},l)})}}function identity(e){return e}function tryOnScopeDispose(e){return getCurrentScope()?(onScopeDispose(e),!0):!1}function useDebounceFn(e,n=200,t={}){return createFilterWrapper(debounceFilter(n,t),e)}function refDebounced(e,n=200,t={}){const o=ref(e.value),r=useDebounceFn(()=>{o.value=e.value},n,t);return watch(e,()=>r()),o}function tryOnMounted(e,n=!0){getCurrentInstance()?onMounted(e):n?e():nextTick(e)}function useTimeoutFn(e,n,t={}){const{immediate:o=!0}=t,r=ref(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function s(){r.value=!1,a()}function l(...d){a(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...d)},resolveUnref(n))}return o&&(r.value=!0,isClient&&l()),tryOnScopeDispose(s),{isPending:readonly(r),start:l,stop:s}}function unrefElement(e){var n;const t=resolveUnref(e);return(n=t==null?void 0:t.$el)!=null?n:t}const defaultWindow=isClient?window:void 0,defaultNavigator=isClient?window.navigator:void 0;function useEventListener(...e){let n,t,o,r;if(isString(e[0])||Array.isArray(e[0])?([t,o,r]=e,n=defaultWindow):[n,t,o,r]=e,!n)return noop;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const i=[],a=()=>{i.forEach(u=>u()),i.length=0},s=(u,f,b)=>(u.addEventListener(f,b,r),()=>u.removeEventListener(f,b,r)),l=watch(()=>unrefElement(n),u=>{a(),u&&i.push(...t.flatMap(f=>o.map(b=>s(u,f,b))))},{immediate:!0,flush:"post"}),d=()=>{l(),a()};return tryOnScopeDispose(d),d}function useSupported(e,n=!1){const t=ref(),o=()=>t.value=Boolean(e());return o(),tryOnMounted(o,n),t}function useClipboard(e={}){const{navigator:n=defaultNavigator,read:t=!1,source:o,copiedDuring:r=1500,legacy:i=!1}=e,a=["copy","cut"],s=useSupported(()=>n&&"clipboard"in n),l=computed(()=>s.value||i),d=ref(""),u=ref(!1),f=useTimeoutFn(()=>u.value=!1,r);function b(){s.value?n.clipboard.readText().then(v=>{d.value=v}):d.value=x()}if(l.value&&t)for(const v of a)useEventListener(v,b);async function C(v=resolveUnref(o)){l.value&&v!=null&&(s.value?await n.clipboard.writeText(v):g(v),d.value=v,u.value=!0,f.start())}function g(v){const y=document.createElement("textarea");y.value=v??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function x(){var v,y,$;return($=(y=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:y.toString())!=null?$:""}return{isSupported:l,text:d,copied:u,copy:C}}const _global=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},globalKey="__vueuse_ssr_handlers__";_global[globalKey]=_global[globalKey]||{};_global[globalKey];var SwipeDirection;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(SwipeDirection||(SwipeDirection={}));var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,n,t)=>n in e?__defProp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,__spreadValues=(e,n)=>{for(var t in n||(n={}))__hasOwnProp.call(n,t)&&__defNormalProp(e,t,n[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(n))__propIsEnum.call(n,t)&&__defNormalProp(e,t,n[t]);return e};const _TransitionPresets={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};__spreadValues({linear:identity},_TransitionPresets);const isMobile=(()=>{const e=ref();function n(){e.value=screen.width<640}return n(),window.addEventListener("resize",n),e})();function preg_replace_callback(e,n,t){const o=e.matchAll(n);return Array.from(o).forEach(r=>{const i=t(r);e=e.replace(r[0],i)}),e}async function copy(e){const n=useAppStore(pinia),{message:t,unmount:o}=createDiscreteApi(["message"],{configProviderProps:{theme:n.themeRef}}),{copy:r,isSupported:i}=useClipboard({source:e,legacy:!0});if(!i){t.error(n.translations.error,{onAfterLeave(){o()}});return}await r(),t.success(n.translations.copied,{onAfterLeave(){o()}})}const char="",chars={mino:{style:"not-italic text-cyan-500 text-4xl",Z:()=>`<i class="${chars.mino.style} mino Z"></i>`,S:()=>`<i class="${chars.mino.style} mino S"></i>`,J:()=>`<i class="${chars.mino.style} mino J"></i>`,L:()=>`<i class="${chars.mino.style} mino L"></i>`,T:()=>`<i class="${chars.mino.style} mino T"></i>`,O:()=>`<i class="${chars.mino.style} mino O"></i>`,I:()=>`<i class="${chars.mino.style} mino I"></i>`,Z5:()=>`<i class="${chars.mino.style} mino Z5"></i>`,S5:()=>`<i class="${chars.mino.style} mino S5"></i>`,P:()=>`<i class="${chars.mino.style} mino P"></i>`,Q:()=>`<i class="${chars.mino.style} mino Q"></i>`,F:()=>`<i class="${chars.mino.style} mino F"></i>`,E:()=>`<i class="${chars.mino.style} mino E"></i>`,T5:()=>`<i class="${chars.mino.style} mino T5"></i>`,U:()=>`<i class="${chars.mino.style} mino U"></i>`,V:()=>`<i class="${chars.mino.style} mino V"></i>`,W:()=>`<i class="${chars.mino.style} mino W"></i>`,X:()=>`<i class="${chars.mino.style} mino X"></i>`,J5:()=>`<i class="${chars.mino.style} mino J5"></i>`,L5:()=>`<i class="${chars.mino.style} mino L5"></i>`,R:()=>`<i class="${chars.mino.style} mino R"></i>`,Y:()=>`<i class="${chars.mino.style} mino Y"></i>`,N:()=>`<i class="${chars.mino.style} mino N"></i>`,H:()=>`<i class="${chars.mino.style} mino H"></i>`,I5:()=>`<i class="${chars.mino.style} mino I5"></i>`,I3:()=>`<i class="${chars.mino.style} mino I3"></i>`,C:()=>`<i class="${chars.mino.style} mino C"></i>`,I2:()=>`<i class="${chars.mino.style} mino I2"></i>`,O1:()=>`<i class="${chars.mino.style} mino O1"></i>`}};class Parser{constructor(e){kn(this,"variables",{CHAR:chars,FNNS:!1});kn(this,"_items",new Array);this.code=e;const n=this;luaparseExports.parse(e).body.forEach(o=>{n.processStatement(o)})}get items(){const e=this;return this._items.map(n=>{var t;return{title:e.processRaw(n[0],!1),tags:((t=e.processRaw(n[1],!1))==null?void 0:t.split(" "))??[],category:e.processRaw(n[2],!1),content:e.processRaw(n[3],!1),link:e.processRaw(n[4],!1)}})}processRaw(e,n=!0){if(!e)return null;e.startsWith('"')&&(e=e.slice(1)),e.endsWith('"')&&(e=e.slice(0,-1));let t=preg_replace_callback(e,/\\(\d+)/g,o=>String.fromCharCode(parseInt(o[1])));return n&&(t[0]!=='"'&&(t='"'+t),t[t.length-1]!=='"'&&(t=t+'"')),t}processStatement(e){const n=this;switch(e.type){case"LocalStatement":e.variables.forEach(function({name:t},o){const r=e.init[o];n.variables[t]=n.processRaw(r.raw)});break;case"ReturnStatement":e.arguments.forEach(t=>{this.processExpression(t)});break;default:throw new Error(`Unknown statement: ${e.type}`)}}processVariable(e,n=!0){if(!has(this.variables,e))return e;const t=get(this.variables,e);switch(typeof t){case"object":return e;case"function":return t();default:return t}}processExpression(expression,options={}){const that=this,temp=new Array;switch(expression.type){case"TableConstructorExpression":return expression.fields.forEach(e=>{temp.push(that.processExpression(e.value))}),temp.length>0&&temp.length<=5&&this._items.push(temp),temp;case"BinaryExpression":switch(expression.operator){case"..":temp.push(that.processExpression(expression.left,{rawAddQuote:!1})),temp.push(that.processExpression(expression.right,{rawAddQuote:!1}));break;default:throw new Error(`Unknown operator: ${expression.operator}`)}return temp.join("");case"MemberExpression":return temp.push(that.processExpression(expression.base,{forceReturnVariableName:!0})),temp.push(expression.indexer),temp.push(that.processExpression(expression.identifier,{forceReturnVariableName:!0})),this.processVariable(temp.flat().join(""),options.executeIdentifierFunction);case"LogicalExpression":switch(temp.push(that.processExpression(expression.left)),expression.operator){case"and":temp.push("&&");break;case"or":temp.push("||");break;default:throw new Error("Unknown operator")}temp.push(that.processExpression(expression.right));const code=temp.join(" ");return eval("() => "+code)();case"Identifier":return!has(that.variables,expression.name)||options.forceReturnVariableName?expression.name:this.processVariable(expression.name,options.executeIdentifierFunction);case"StringLiteral":return that.processRaw(expression.raw,options.rawAddQuote??!0);default:throw new Error(`Unknown expression: ${expression.type}`)}}}const version="3.7.5",VERSION=version,_hasatob=typeof atob=="function",_hasbtoa=typeof btoa=="function",_hasBuffer=typeof Buffer=="function",_TD=typeof TextDecoder=="function"?new TextDecoder:void 0,_TE=typeof TextEncoder=="function"?new TextEncoder:void 0,b64ch="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b64chs=Array.prototype.slice.call(b64ch),b64tab=(e=>{let n={};return e.forEach((t,o)=>n[t]=o),n})(b64chs),b64re=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,_fromCC=String.fromCharCode.bind(String),_U8Afrom=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),_mkUriSafe=e=>e.replace(/=/g,"").replace(/[+\/]/g,n=>n=="+"?"-":"_"),_tidyB64=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),btoaPolyfill=e=>{let n,t,o,r,i="";const a=e.length%3;for(let s=0;s<e.length;){if((t=e.charCodeAt(s++))>255||(o=e.charCodeAt(s++))>255||(r=e.charCodeAt(s++))>255)throw new TypeError("invalid character found");n=t<<16|o<<8|r,i+=b64chs[n>>18&63]+b64chs[n>>12&63]+b64chs[n>>6&63]+b64chs[n&63]}return a?i.slice(0,a-3)+"===".substring(a):i},_btoa=_hasbtoa?e=>btoa(e):_hasBuffer?e=>Buffer.from(e,"binary").toString("base64"):btoaPolyfill,_fromUint8Array=_hasBuffer?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let o=0,r=e.length;o<r;o+=4096)t.push(_fromCC.apply(null,e.subarray(o,o+4096)));return _btoa(t.join(""))},fromUint8Array=(e,n=!1)=>n?_mkUriSafe(_fromUint8Array(e)):_fromUint8Array(e),cb_utob=e=>{if(e.length<2){var n=e.charCodeAt(0);return n<128?e:n<2048?_fromCC(192|n>>>6)+_fromCC(128|n&63):_fromCC(224|n>>>12&15)+_fromCC(128|n>>>6&63)+_fromCC(128|n&63)}else{var n=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return _fromCC(240|n>>>18&7)+_fromCC(128|n>>>12&63)+_fromCC(128|n>>>6&63)+_fromCC(128|n&63)}},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=e=>e.replace(re_utob,cb_utob),_encode=_hasBuffer?e=>Buffer.from(e,"utf8").toString("base64"):_TE?e=>_fromUint8Array(_TE.encode(e)):e=>_btoa(utob(e)),encode=(e,n=!1)=>n?_mkUriSafe(_encode(e)):_encode(e),encodeURI=e=>encode(e,!0),re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=e=>{switch(e.length){case 4:var n=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),t=n-65536;return _fromCC((t>>>10)+55296)+_fromCC((t&1023)+56320);case 3:return _fromCC((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return _fromCC((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=e=>e.replace(re_btou,cb_btou),atobPolyfill=e=>{if(e=e.replace(/\s+/g,""),!b64re.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let n,t="",o,r;for(let i=0;i<e.length;)n=b64tab[e.charAt(i++)]<<18|b64tab[e.charAt(i++)]<<12|(o=b64tab[e.charAt(i++)])<<6|(r=b64tab[e.charAt(i++)]),t+=o===64?_fromCC(n>>16&255):r===64?_fromCC(n>>16&255,n>>8&255):_fromCC(n>>16&255,n>>8&255,n&255);return t},_atob=_hasatob?e=>atob(_tidyB64(e)):_hasBuffer?e=>Buffer.from(e,"base64").toString("binary"):atobPolyfill,_toUint8Array=_hasBuffer?e=>_U8Afrom(Buffer.from(e,"base64")):e=>_U8Afrom(_atob(e).split("").map(n=>n.charCodeAt(0))),toUint8Array=e=>_toUint8Array(_unURI(e)),_decode=_hasBuffer?e=>Buffer.from(e,"base64").toString("utf8"):_TD?e=>_TD.decode(_toUint8Array(e)):e=>btou(_atob(e)),_unURI=e=>_tidyB64(e.replace(/[-_]/g,n=>n=="-"?"+":"/")),decode=e=>_decode(_unURI(e)),isValid=e=>{if(typeof e!="string")return!1;const n=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(n)||!/[^\s0-9a-zA-Z\-_]/.test(n)},_noEnum=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),extendString=function(){const e=(n,t)=>Object.defineProperty(String.prototype,n,_noEnum(t));e("fromBase64",function(){return decode(this)}),e("toBase64",function(n){return encode(this,n)}),e("toBase64URI",function(){return encode(this,!0)}),e("toBase64URL",function(){return encode(this,!0)}),e("toUint8Array",function(){return toUint8Array(this)})},extendUint8Array=function(){const e=(n,t)=>Object.defineProperty(Uint8Array.prototype,n,_noEnum(t));e("toBase64",function(n){return fromUint8Array(this,n)}),e("toBase64URI",function(){return fromUint8Array(this,!0)}),e("toBase64URL",function(){return fromUint8Array(this,!0)})},extendBuiltins=()=>{extendString(),extendUint8Array()},gBase64={version,VERSION,atob:_atob,atobPolyfill,btoa:_btoa,btoaPolyfill,fromBase64:decode,toBase64:encode,encode,encodeURI,encodeURL:encodeURI,utob,btou,decode,isValid,fromUint8Array,toUint8Array,extendString,extendUint8Array,extendBuiltins},useAppStore=defineStore("app",{state:()=>({theme:useOsTheme().value,lang:"zh"}),getters:{themeRef(e){switch(e.theme){case"light":return lightTheme;case"dark":return darkTheme;default:return null}},dictItems(e){if(dictCache.has(e.lang))return dictCache.get(e.lang);const n=new Parser(dictFiles[e.lang]).items;return dictCache.set(e.lang,n),n},translations(e){return langFiles[e.lang]},langOptions(e){return[{label:"English",key:"en",disabled:e.lang==="en"},{label:"日本語",key:"ja",disabled:e.lang==="ja"},{label:"简体中文",key:"zh",disabled:e.lang==="zh"}]}},actions:{switchTheme(){this.theme=this.theme==="light"?"dark":"light"},handleLangUpdate(e){const n=useSharedStore();this.lang=e,n.removeCurrent()}},persist:{enabled:!0}}),useSharedStore=defineStore("shared",{state:()=>({search:ref(),current:ref()}),getters:{showing(e){return!!e.current}},actions:{setSearch(e){this.search=e,this.removeCurrent()},setCurrent(e){this.current=e},removeCurrent(){this.current=void 0},_checkCurrent(){const e=useAppStore(),{message:n,unmount:t}=createDiscreteApi(["message"],{configProviderProps:{theme:e.themeRef}});if(!this.current){n.error("?",{onAfterLeave(){t()}});return}},async shareCurrentDict(){const e=useAppStore();this._checkCurrent(),await copy(new URL("",location.href)+"#"+gBase64.encode(JSON.stringify({locale:e.lang,title:encodeURIComponent(this.current.title??"?")})))},async copyCurrentDict(){var n,t;const e=useAppStore();this._checkCurrent(),await copy([(n=this.current)==null?void 0:n.title,"",(t=this.current)==null?void 0:t.content,"",`${e.translations.copy_from}: ${e.translations.title}`].join(`\r
`))}}}),_hoisted_1$5={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_hoisted_2$5=createBaseVNode("path",{opacity:".3",d:"M8 7h11v14H8z",fill:"currentColor"},null,-1),_hoisted_3$5=createBaseVNode("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",fill:"currentColor"},null,-1),_hoisted_4$2=[_hoisted_2$5,_hoisted_3$5],ContentCopyTwotone=defineComponent({name:"ContentCopyTwotone",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1$5,_hoisted_4$2)}}),_hoisted_1$4={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_hoisted_2$4=createBaseVNode("path",{opacity:".3",d:"M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56c-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4a7.987 7.987 0 0 0 4.33 3.56A15.65 15.65 0 0 1 8.03 16H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8a8.03 8.03 0 0 0-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4A8.03 8.03 0 0 0 18.92 16h-2.95a15.65 15.65 0 0 1-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z",fill:"currentColor"},null,-1),_hoisted_3$4=createBaseVNode("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",fill:"currentColor"},null,-1),_hoisted_4$1=[_hoisted_2$4,_hoisted_3$4],LanguageTwotone=defineComponent({name:"LanguageTwotone",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1$4,_hoisted_4$1)}}),_hoisted_1$3={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_hoisted_2$3=createBaseVNode("circle",{cx:"18",cy:"5",opacity:".3",r:"1",fill:"currentColor"},null,-1),_hoisted_3$3=createBaseVNode("circle",{cx:"6",cy:"12",opacity:".3",r:"1",fill:"currentColor"},null,-1),_hoisted_4=createBaseVNode("circle",{cx:"18",cy:"19.02",opacity:".3",r:"1",fill:"currentColor"},null,-1),_hoisted_5=createBaseVNode("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z",fill:"currentColor"},null,-1),_hoisted_6=[_hoisted_2$3,_hoisted_3$3,_hoisted_4,_hoisted_5],ShareTwotone=defineComponent({name:"ShareTwotone",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1$3,_hoisted_6)}}),_hoisted_1$2={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_hoisted_2$2=createBaseVNode("path",{d:"M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),_hoisted_3$2=[_hoisted_2$2],Moon=defineComponent({name:"Moon",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1$2,_hoisted_3$2)}}),_hoisted_1$1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_hoisted_2$1=createBaseVNode("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[createBaseVNode("circle",{cx:"12",cy:"12",r:"4"}),createBaseVNode("path",{d:"M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"})],-1),_hoisted_3$1=[_hoisted_2$1],Sun=defineComponent({name:"Sun",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1$1,_hoisted_3$1)}}),_hoisted_1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},_hoisted_2=createBaseVNode("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zM4.02 16.394l1.338.446L7 19.303v1.283a1 1 0 0 0 .293.707L10 24v2.377a11.994 11.994 0 0 1-5.98-9.983zM16 28a11.968 11.968 0 0 1-2.572-.285L14 26l1.805-4.512a1 1 0 0 0-.097-.926l-1.411-2.117a1 1 0 0 0-.832-.445h-4.93l-1.248-1.873L9.414 14H11v2h2v-2.734l3.868-6.77l-1.736-.992L14.277 7h-2.742L10.45 5.371A11.861 11.861 0 0 1 20 4.7V8a1 1 0 0 0 1 1h1.465a1 1 0 0 0 .832-.445l.877-1.316A12.033 12.033 0 0 1 26.894 11H22.82a1 1 0 0 0-.98.804l-.723 4.47a1 1 0 0 0 .54 1.055L25 19l.685 4.056A11.98 11.98 0 0 1 16 28z",fill:"currentColor"},null,-1),_hoisted_3=[_hoisted_2],EarthFilled=defineComponent({name:"EarthFilled",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1,_hoisted_3)}}),_sfc_main=defineComponent({__name:"App",setup(e){const n=useAppStore(),t=useSharedStore();if(location.hash.length>1){const a=location.hash.slice(1);try{const s=JSON.parse(gBase64.decode(a));if("locale"in s&&"title"in s){["zh","en","ja"].includes(s.locale)&&n.handleLangUpdate(s.locale);const l=decodeURIComponent(s.title),d=n.dictItems.find(u=>l===u.title);d&&t.setCurrent(d)}}catch{}}const o=refDebounced(toRef(t,"search"),500),r=computed(()=>groupBy$1(n.dictItems.map(a=>(a.content!==null&&(a.content=a.content.replaceAll("\\t","	").replaceAll("\\n",`
`)),a)).filter(a=>{var s,l,d,u;return o.value?[!!((l=a.title)!=null&&l.toLowerCase().match((s=o.value)==null?void 0:s.toLowerCase())),!!((u=a.tags)!=null&&u.map(f=>f.toLowerCase()).includes((d=o.value)==null?void 0:d.toLowerCase()))].includes(!0):!0}),"category"));function i(a){const s=/^tetris/ig,l=a==null?void 0:a.match(s);if(!a||!l)return h(NText,{class:"text-current"},()=>a??"?");const d=a==null?void 0:a.replace(s,"");return h(NEl,null,()=>[h(NPopover,null,{trigger:()=>h("i",{class:"zChan thinking not-italic text-xl mr-1"}),default:()=>l[0]}),h(NText,{class:"text-current"},()=>d)])}return(a,s)=>{const l=NIcon,d=__unplugin_components_1,u=__unplugin_components_2,f=__unplugin_components_3,b=NH1,C=__unplugin_components_5,g=__unplugin_components_6,x=__unplugin_components_7,v=__unplugin_components_8,y=__unplugin_components_9,$=NH2,L=__unplugin_components_11,P=__unplugin_components_12,k=__unplugin_components_13,E=__unplugin_components_14;return openBlock(),createBlock(E,{theme:unref(n).themeRef,class:"h-full"},{default:withCtx(()=>[createVNode(k,{class:"h-full","native-scrollbar":""},{default:withCtx(()=>[createVNode(L,{class:"pb-16 h-full mx-2","native-scrollbar":""},{default:withCtx(()=>[createVNode(f,{class:"mt-2",justify:"space-between"},{default:withCtx(()=>[createVNode(d,{onClick:unref(n).switchTheme},{icon:withCtx(()=>[createVNode(l,{component:unref(n).theme==="light"?unref(Moon):unref(Sun)},null,8,["component"])]),_:1},8,["onClick"]),createVNode(u,{options:unref(n).langOptions,animated:"",trigger:"click",onSelect:unref(n).handleLangUpdate},{default:withCtx(()=>[createVNode(d,null,{icon:withCtx(()=>[createVNode(l,{component:unref(LanguageTwotone)},null,8,["component"])]),_:1})]),_:1},8,["options","onSelect"])]),_:1}),createVNode(f,{class:"sm:w-1/3 mx-auto mt-20",vertical:""},{default:withCtx(()=>[createVNode(unref(NEl),{class:"text-center"},{default:withCtx(()=>[createVNode(b,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(n).translations.title),1)]),_:1}),unref(t).showing?(openBlock(),createBlock(f,{key:1,justify:"center"},{default:withCtx(()=>[createVNode(d,{onClick:unref(t).removeCurrent},{default:withCtx(()=>[createTextVNode("返回")]),_:1},8,["onClick"])]),_:1})):(openBlock(),createBlock(C,{key:0,value:unref(t).search,"onUpdate:value":s[0]||(s[0]=w=>unref(t).search=w),loading:unref(o)!==unref(t).search,placeholder:unref(n).translations.search,clearable:""},null,8,["value","loading","placeholder"]))]),_:1}),createVNode(g)]),_:1}),createVNode(f,{size:"large",vertical:""},{default:withCtx(()=>[unref(t).showing?(openBlock(),createBlock(unref(NEl),{key:1,class:"sm:w-1/3 mx-auto"},{default:withCtx(()=>[createVNode(f,{vertical:""},{default:withCtx(()=>{var w;return[createVNode($,null,{default:withCtx(()=>{var T;return[(openBlock(),createBlock(resolveDynamicComponent(i(((T=unref(t).current)==null?void 0:T.title)??null))))]}),_:1}),createVNode(unref(NText),{class:"whitespace-pre-wrap",innerHTML:(w=unref(t).current)==null?void 0:w.content},null,8,["innerHTML"]),createVNode(f,{class:"mt-10 items-end",justify:"space-between"},{default:withCtx(()=>[createVNode(f,{size:"small"},{default:withCtx(()=>{var T;return[createVNode(unref(NText),null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(n).translations.tags)+": ",1)]),_:1}),(openBlock(!0),createElementBlock(Fragment,null,renderList((T=unref(t).current)==null?void 0:T.tags,M=>(openBlock(),createBlock(d,{text:"",type:"info",onClick:_=>unref(t).setSearch(M)},{default:withCtx(()=>[createTextVNode(toDisplayString(M),1)]),_:2},1032,["onClick"]))),256))]}),_:1}),createVNode(f,null,{default:withCtx(()=>{var T,M;return[(T=unref(t).current)!=null&&T.link?(openBlock(),createBlock(d,{key:0,href:(M=unref(t).current)==null?void 0:M.link,tag:"a"},{icon:withCtx(()=>[createVNode(l,{component:unref(EarthFilled)},null,8,["component"])]),_:1},8,["href"])):createCommentVNode("",!0),createVNode(d,{onClick:unref(t).copyCurrentDict},{icon:withCtx(()=>[createVNode(l,{component:unref(ContentCopyTwotone)},null,8,["component"])]),_:1},8,["onClick"]),createVNode(d,{onClick:unref(t).shareCurrentDict},{icon:withCtx(()=>[createVNode(l,{component:unref(ShareTwotone)},null,8,["component"])]),_:1},8,["onClick"])]}),_:1})]),_:1})]}),_:1})]),_:1})):(openBlock(),createBlock(f,{key:0,vertical:""},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(r),(w,T)=>(openBlock(),createBlock(f,{class:"text-center",vertical:""},{default:withCtx(()=>[createVNode(unref(NText),{style:normalizeStyle({color:unref(categoryColors)[T]}),class:"font-bold text-2xl",type:"info"},{default:withCtx(()=>[createTextVNode(toDisplayString(T),1)]),_:2},1032,["style"]),unref(isMobile)?(openBlock(),createBlock(y,{key:1,cols:3,"x-gap":10,"y-gap":10,class:"text-center"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(w,M=>(openBlock(),createBlock(v,null,{default:withCtx(()=>[createVNode(d,{color:unref(categoryColors)[T],class:"w-full",onClick:_=>unref(t).setCurrent(M)},{default:withCtx(()=>[createVNode(unref(NPopover),null,{trigger:withCtx(()=>[createVNode(x,null,{default:withCtx(()=>[(openBlock(),createBlock(resolveDynamicComponent(i(M.title))))]),_:2},1024)]),default:withCtx(()=>[createTextVNode(" "+toDisplayString(M.title),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:2},1024))),256))]),_:2},1024)):(openBlock(),createBlock(f,{key:0,justify:"center"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(w,M=>(openBlock(),createBlock(d,{color:unref(categoryColors)[T],size:"small",onClick:_=>unref(t).setCurrent(M)},{default:withCtx(()=>[(openBlock(),createBlock(resolveDynamicComponent(i(M.title))))]),_:2},1032,["color","onClick"]))),256))]),_:2},1024))]),_:2},1024))),256))]),_:1}))]),_:1})]),_:1}),createVNode(P,{class:"py-2",position:"absolute"},{default:withCtx(()=>[createVNode(f,{size:0,justify:"center"},{default:withCtx(()=>[createVNode(unref(NEl),null,{default:withCtx(()=>[createVNode(unref(NText),null,{default:withCtx(()=>[createTextVNode("制作: ")]),_:1}),createVNode(d,{href:"https://zhazha120.cn",tag:"a",text:"",type:"primary"},{default:withCtx(()=>[createTextVNode("渣渣120")]),_:1})]),_:1}),createVNode(g,{vertical:""}),createVNode(d,{href:"https://github.com/26F-Studio/techmino-online-dict",tag:"a",text:"",type:"primary"},{default:withCtx(()=>[createTextVNode(" Github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])}}}),container=document.createElement("div"),instance=createApp({render:()=>h(_sfc_main)}),pinia=createPinia(),updateStorage=(e,n)=>{const t=e.storage||sessionStorage,o=e.key||n.$id;if(e.paths){const r=e.paths.reduce((i,a)=>(i[a]=n.$state[a],i),{});t.setItem(o,JSON.stringify(r))}else t.setItem(o,JSON.stringify(n.$state))};var index=({options:e,store:n})=>{var t,o,r,i;if((t=e.persist)!=null&&t.enabled){const a=[{key:n.$id,storage:sessionStorage}],s=(r=(o=e.persist)==null?void 0:o.strategies)!=null&&r.length?(i=e.persist)==null?void 0:i.strategies:a;s.forEach(l=>{const d=l.storage||sessionStorage,u=l.key||n.$id,f=d.getItem(u);f&&(n.$patch(JSON.parse(f)),updateStorage(l,n))}),n.$subscribe(()=>{s.forEach(l=>{updateStorage(l,n)})})}};window.addEventListener("load",()=>{container.id="app",pinia.use(index),instance.use(pinia),instance.mount(container),document.body.appendChild(container)})});export default Hn();
