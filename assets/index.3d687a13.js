var Bn=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var On=Bn((exports,module)=>{const p$1=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};p$1();function makeMap(e,n){const t=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)t[o[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(e){return!!e||e===""}function normalizeStyle(e){if(isArray$2(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],r=isString(o)?parseStringStyle(o):normalizeStyle(o);if(r)for(const i in r)n[i]=r[i]}return n}else{if(isString(e))return e;if(isObject$1(e))return e}}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:(.+)/;function parseStringStyle(e){const n={};return e.split(listDelimiterRE).forEach(t=>{if(t){const o=t.split(propertyDelimiterRE);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function normalizeClass(e){let n="";if(isString(e))n=e;else if(isArray$2(e))for(let t=0;t<e.length;t++){const o=normalizeClass(e[t]);o&&(n+=o+" ")}else if(isObject$1(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const toDisplayString=e=>isString(e)?e:e==null?"":isArray$2(e)||isObject$1(e)&&(e.toString===objectToString$1||!isFunction$1(e.toString))?JSON.stringify(e,replacer,2):String(e),replacer=(e,n)=>n&&n.__v_isRef?replacer(e,n.value):isMap(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,r])=>(t[`${o} =>`]=r,t),{})}:isSet(n)?{[`Set(${n.size})`]:[...n.values()]}:isObject$1(n)&&!isArray$2(n)&&!isPlainObject$1(n)?String(n):n,EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,onRE=/^on[^a-z]/,isOn=e=>onRE.test(e),isModelListener=e=>e.startsWith("onUpdate:"),extend=Object.assign,remove=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},hasOwnProperty$c=Object.prototype.hasOwnProperty,hasOwn=(e,n)=>hasOwnProperty$c.call(e,n),isArray$2=Array.isArray,isMap=e=>toTypeString(e)==="[object Map]",isSet=e=>toTypeString(e)==="[object Set]",isFunction$1=e=>typeof e=="function",isString=e=>typeof e=="string",isSymbol$1=e=>typeof e=="symbol",isObject$1=e=>e!==null&&typeof e=="object",isPromise=e=>isObject$1(e)&&isFunction$1(e.then)&&isFunction$1(e.catch),objectToString$1=Object.prototype.toString,toTypeString=e=>objectToString$1.call(e),toRawType=e=>toTypeString(e).slice(8,-1),isPlainObject$1=e=>toTypeString(e)==="[object Object]",isIntegerKey=e=>isString(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(e=>e.replace(camelizeRE,(n,t)=>t?t.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(e=>e.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(e=>e.charAt(0).toUpperCase()+e.slice(1)),toHandlerKey=cacheStringFunction(e=>e?`on${capitalize(e)}`:""),hasChanged=(e,n)=>!Object.is(e,n),invokeArrayFns=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},def=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},toNumber=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let activeEffectScope;class EffectScope{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&activeEffectScope&&(this.parent=activeEffectScope,this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}run(n){if(this.active){const t=activeEffectScope;try{return activeEffectScope=this,n()}finally{activeEffectScope=t}}}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(n){if(this.active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function recordEffectScope(e,n=activeEffectScope){n&&n.active&&n.effects.push(e)}const createDep=e=>{const n=new Set(e);return n.w=0,n.n=0,n},wasTracked=e=>(e.w&trackOpBit)>0,newTracked=e=>(e.n&trackOpBit)>0,initDepMarkers=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=trackOpBit},finalizeDepMarkers=e=>{const{deps:n}=e;if(n.length){let t=0;for(let o=0;o<n.length;o++){const r=n[o];wasTracked(r)&&!newTracked(r)?r.delete(e):n[t++]=r,r.w&=~trackOpBit,r.n&=~trackOpBit}n.length=t}},targetMap=new WeakMap;let effectTrackDepth=0,trackOpBit=1;const maxMarkerBits=30;let activeEffect;const ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol("");class ReactiveEffect{constructor(n,t=null,o){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,recordEffectScope(this,o)}run(){if(!this.active)return this.fn();let n=activeEffect,t=shouldTrack;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=activeEffect,activeEffect=this,shouldTrack=!0,trackOpBit=1<<++effectTrackDepth,effectTrackDepth<=maxMarkerBits?initDepMarkers(this):cleanupEffect(this),this.fn()}finally{effectTrackDepth<=maxMarkerBits&&finalizeDepMarkers(this),trackOpBit=1<<--effectTrackDepth,activeEffect=this.parent,shouldTrack=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){activeEffect===this?this.deferStop=!0:this.active&&(cleanupEffect(this),this.onStop&&this.onStop(),this.active=!1)}}function cleanupEffect(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const e=trackStack.pop();shouldTrack=e===void 0?!0:e}function track(e,n,t){if(shouldTrack&&activeEffect){let o=targetMap.get(e);o||targetMap.set(e,o=new Map);let r=o.get(t);r||o.set(t,r=createDep()),trackEffects(r)}}function trackEffects(e,n){let t=!1;effectTrackDepth<=maxMarkerBits?newTracked(e)||(e.n|=trackOpBit,t=!wasTracked(e)):t=!e.has(activeEffect),t&&(e.add(activeEffect),activeEffect.deps.push(e))}function trigger$1(e,n,t,o,r,i){const a=targetMap.get(e);if(!a)return;let s=[];if(n==="clear")s=[...a.values()];else if(t==="length"&&isArray$2(e))a.forEach((l,d)=>{(d==="length"||d>=o)&&s.push(l)});else switch(t!==void 0&&s.push(a.get(t)),n){case"add":isArray$2(e)?isIntegerKey(t)&&s.push(a.get("length")):(s.push(a.get(ITERATE_KEY)),isMap(e)&&s.push(a.get(MAP_KEY_ITERATE_KEY)));break;case"delete":isArray$2(e)||(s.push(a.get(ITERATE_KEY)),isMap(e)&&s.push(a.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(e)&&s.push(a.get(ITERATE_KEY));break}if(s.length===1)s[0]&&triggerEffects(s[0]);else{const l=[];for(const d of s)d&&l.push(...d);triggerEffects(createDep(l))}}function triggerEffects(e,n){const t=isArray$2(e)?e:[...e];for(const o of t)o.computed&&triggerEffect(o);for(const o of t)o.computed||triggerEffect(o)}function triggerEffect(e,n){(e!==activeEffect||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(isSymbol$1)),get$1=createGetter(),shallowGet=createGetter(!1,!0),readonlyGet=createGetter(!0),arrayInstrumentations=createArrayInstrumentations();function createArrayInstrumentations(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const o=toRaw(this);for(let i=0,a=this.length;i<a;i++)track(o,"get",i+"");const r=o[n](...t);return r===-1||r===!1?o[n](...t.map(toRaw)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){pauseTracking();const o=toRaw(this)[n].apply(this,t);return resetTracking(),o}}),e}function createGetter(e=!1,n=!1){return function(o,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&i===(e?n?shallowReadonlyMap:readonlyMap:n?shallowReactiveMap:reactiveMap).get(o))return o;const a=isArray$2(o);if(!e&&a&&hasOwn(arrayInstrumentations,r))return Reflect.get(arrayInstrumentations,r,i);const s=Reflect.get(o,r,i);return(isSymbol$1(r)?builtInSymbols.has(r):isNonTrackableKeys(r))||(e||track(o,"get",r),n)?s:isRef(s)?a&&isIntegerKey(r)?s:s.value:isObject$1(s)?e?readonly(s):reactive(s):s}}const set=createSetter(),shallowSet=createSetter(!0);function createSetter(e=!1){return function(t,o,r,i){let a=t[o];if(isReadonly(a)&&isRef(a)&&!isRef(r))return!1;if(!e&&!isReadonly(r)&&(isShallow(r)||(r=toRaw(r),a=toRaw(a)),!isArray$2(t)&&isRef(a)&&!isRef(r)))return a.value=r,!0;const s=isArray$2(t)&&isIntegerKey(o)?Number(o)<t.length:hasOwn(t,o),l=Reflect.set(t,o,r,i);return t===toRaw(i)&&(s?hasChanged(r,a)&&trigger$1(t,"set",o,r):trigger$1(t,"add",o,r)),l}}function deleteProperty(e,n){const t=hasOwn(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&t&&trigger$1(e,"delete",n,void 0),o}function has(e,n){const t=Reflect.has(e,n);return(!isSymbol$1(n)||!builtInSymbols.has(n))&&track(e,"has",n),t}function ownKeys(e){return track(e,"iterate",isArray$2(e)?"length":ITERATE_KEY),Reflect.ownKeys(e)}const mutableHandlers={get:get$1,set,deleteProperty,has,ownKeys},readonlyHandlers={get:readonlyGet,set(e,n){return!0},deleteProperty(e,n){return!0}},shallowReactiveHandlers=extend({},mutableHandlers,{get:shallowGet,set:shallowSet}),toShallow=e=>e,getProto=e=>Reflect.getPrototypeOf(e);function get$1$1(e,n,t=!1,o=!1){e=e.__v_raw;const r=toRaw(e),i=toRaw(n);t||(n!==i&&track(r,"get",n),track(r,"get",i));const{has:a}=getProto(r),s=o?toShallow:t?toReadonly:toReactive;if(a.call(r,n))return s(e.get(n));if(a.call(r,i))return s(e.get(i));e!==r&&e.get(n)}function has$1(e,n=!1){const t=this.__v_raw,o=toRaw(t),r=toRaw(e);return n||(e!==r&&track(o,"has",e),track(o,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function size$1(e,n=!1){return e=e.__v_raw,!n&&track(toRaw(e),"iterate",ITERATE_KEY),Reflect.get(e,"size",e)}function add(e){e=toRaw(e);const n=toRaw(this);return getProto(n).has.call(n,e)||(n.add(e),trigger$1(n,"add",e,e)),this}function set$1(e,n){n=toRaw(n);const t=toRaw(this),{has:o,get:r}=getProto(t);let i=o.call(t,e);i||(e=toRaw(e),i=o.call(t,e));const a=r.call(t,e);return t.set(e,n),i?hasChanged(n,a)&&trigger$1(t,"set",e,n):trigger$1(t,"add",e,n),this}function deleteEntry(e){const n=toRaw(this),{has:t,get:o}=getProto(n);let r=t.call(n,e);r||(e=toRaw(e),r=t.call(n,e)),o&&o.call(n,e);const i=n.delete(e);return r&&trigger$1(n,"delete",e,void 0),i}function clear(){const e=toRaw(this),n=e.size!==0,t=e.clear();return n&&trigger$1(e,"clear",void 0,void 0),t}function createForEach(e,n){return function(o,r){const i=this,a=i.__v_raw,s=toRaw(a),l=n?toShallow:e?toReadonly:toReactive;return!e&&track(s,"iterate",ITERATE_KEY),a.forEach((d,f)=>o.call(r,l(d),l(f),i))}}function createIterableMethod(e,n,t){return function(...o){const r=this.__v_raw,i=toRaw(r),a=isMap(i),s=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=r[e](...o),f=t?toShallow:n?toReadonly:toReactive;return!n&&track(i,"iterate",l?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:m,done:b}=d.next();return b?{value:m,done:b}:{value:s?[f(m[0]),f(m[1])]:f(m),done:b}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(e){return function(...n){return e==="delete"?!1:this}}function createInstrumentations(){const e={get(i){return get$1$1(this,i)},get size(){return size$1(this)},has:has$1,add,set:set$1,delete:deleteEntry,clear,forEach:createForEach(!1,!1)},n={get(i){return get$1$1(this,i,!1,!0)},get size(){return size$1(this)},has:has$1,add,set:set$1,delete:deleteEntry,clear,forEach:createForEach(!1,!0)},t={get(i){return get$1$1(this,i,!0)},get size(){return size$1(this,!0)},has(i){return has$1.call(this,i,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!1)},o={get(i){return get$1$1(this,i,!0,!0)},get size(){return size$1(this,!0)},has(i){return has$1.call(this,i,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=createIterableMethod(i,!1,!1),t[i]=createIterableMethod(i,!0,!1),n[i]=createIterableMethod(i,!1,!0),o[i]=createIterableMethod(i,!0,!0)}),[e,t,n,o]}const[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations]=createInstrumentations();function createInstrumentationGetter(e,n){const t=n?e?shallowReadonlyInstrumentations:shallowInstrumentations:e?readonlyInstrumentations:mutableInstrumentations;return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(hasOwn(t,r)&&r in o?t:o,r,i)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(e){return e.__v_skip||!Object.isExtensible(e)?0:targetTypeMap(toRawType(e))}function reactive(e){return isReadonly(e)?e:createReactiveObject(e,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(e){return createReactiveObject(e,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(e){return createReactiveObject(e,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function createReactiveObject(e,n,t,o,r){if(!isObject$1(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=getTargetType(e);if(a===0)return e;const s=new Proxy(e,a===2?o:t);return r.set(e,s),s}function isReactive(e){return isReadonly(e)?isReactive(e.__v_raw):!!(e&&e.__v_isReactive)}function isReadonly(e){return!!(e&&e.__v_isReadonly)}function isShallow(e){return!!(e&&e.__v_isShallow)}function isProxy(e){return isReactive(e)||isReadonly(e)}function toRaw(e){const n=e&&e.__v_raw;return n?toRaw(n):e}function markRaw(e){return def(e,"__v_skip",!0),e}const toReactive=e=>isObject$1(e)?reactive(e):e,toReadonly=e=>isObject$1(e)?readonly(e):e;function trackRefValue(e){shouldTrack&&activeEffect&&(e=toRaw(e),trackEffects(e.dep||(e.dep=createDep())))}function triggerRefValue(e,n){e=toRaw(e),e.dep&&triggerEffects(e.dep)}function isRef(e){return!!(e&&e.__v_isRef===!0)}function ref(e){return createRef(e,!1)}function createRef(e,n){return isRef(e)?e:new RefImpl(e,n)}class RefImpl{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:toRaw(n),this._value=t?n:toReactive(n)}get value(){return trackRefValue(this),this._value}set value(n){n=this.__v_isShallow?n:toRaw(n),hasChanged(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:toReactive(n),triggerRefValue(this))}}function unref(e){return isRef(e)?e.value:e}const shallowUnwrapHandlers={get:(e,n,t)=>unref(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const r=e[n];return isRef(r)&&!isRef(t)?(r.value=t,!0):Reflect.set(e,n,t,o)}};function proxyRefs(e){return isReactive(e)?e:new Proxy(e,shallowUnwrapHandlers)}class ObjectRefImpl{constructor(n,t,o){this._object=n,this._key=t,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function toRef(e,n,t){const o=e[n];return isRef(o)?o:new ObjectRefImpl(e,n,t)}class ComputedRefImpl{constructor(n,t,o,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ReactiveEffect(n,()=>{this._dirty||(this._dirty=!0,triggerRefValue(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=toRaw(this);return trackRefValue(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function computed$1(e,n,t=!1){let o,r;const i=isFunction$1(e);return i?(o=e,r=NOOP):(o=e.get,r=e.set),new ComputedRefImpl(o,r,i||!r,t)}function callWithErrorHandling(e,n,t,o){let r;try{r=o?e(...o):e()}catch(i){handleError(i,n,t)}return r}function callWithAsyncErrorHandling(e,n,t,o){if(isFunction$1(e)){const i=callWithErrorHandling(e,n,t,o);return i&&isPromise(i)&&i.catch(a=>{handleError(a,n,t)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(callWithAsyncErrorHandling(e[i],n,t,o));return r}function handleError(e,n,t,o=!0){const r=n?n.vnode:null;if(n){let i=n.parent;const a=n.proxy,s=t;for(;i;){const d=i.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](e,a,s)===!1)return}i=i.parent}const l=n.appContext.config.errorHandler;if(l){callWithErrorHandling(l,null,10,[e,a,s]);return}}logError(e,t,r,o)}function logError(e,n,t,o=!0){console.error(e)}let isFlushing=!1,isFlushPending=!1;const queue=[];let flushIndex=0;const pendingPreFlushCbs=[];let activePreFlushCbs=null,preFlushIndex=0;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null,currentPreFlushParentJob=null;function nextTick(e){const n=currentFlushPromise||resolvedPromise;return e?n.then(this?e.bind(this):e):n}function findInsertionIndex(e){let n=flushIndex+1,t=queue.length;for(;n<t;){const o=n+t>>>1;getId(queue[o])<e?n=o+1:t=o}return n}function queueJob(e){(!queue.length||!queue.includes(e,isFlushing&&e.allowRecurse?flushIndex+1:flushIndex))&&e!==currentPreFlushParentJob&&(e.id==null?queue.push(e):queue.splice(findInsertionIndex(e.id),0,e),queueFlush())}function queueFlush(){!isFlushing&&!isFlushPending&&(isFlushPending=!0,currentFlushPromise=resolvedPromise.then(flushJobs))}function invalidateJob(e){const n=queue.indexOf(e);n>flushIndex&&queue.splice(n,1)}function queueCb(e,n,t,o){isArray$2(e)?t.push(...e):(!n||!n.includes(e,e.allowRecurse?o+1:o))&&t.push(e),queueFlush()}function queuePreFlushCb(e){queueCb(e,activePreFlushCbs,pendingPreFlushCbs,preFlushIndex)}function queuePostFlushCb(e){queueCb(e,activePostFlushCbs,pendingPostFlushCbs,postFlushIndex)}function flushPreFlushCbs(e,n=null){if(pendingPreFlushCbs.length){for(currentPreFlushParentJob=n,activePreFlushCbs=[...new Set(pendingPreFlushCbs)],pendingPreFlushCbs.length=0,preFlushIndex=0;preFlushIndex<activePreFlushCbs.length;preFlushIndex++)activePreFlushCbs[preFlushIndex]();activePreFlushCbs=null,preFlushIndex=0,currentPreFlushParentJob=null,flushPreFlushCbs(e,n)}}function flushPostFlushCbs(e){if(flushPreFlushCbs(),pendingPostFlushCbs.length){const n=[...new Set(pendingPostFlushCbs)];if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...n);return}for(activePostFlushCbs=n,activePostFlushCbs.sort((t,o)=>getId(t)-getId(o)),postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++)activePostFlushCbs[postFlushIndex]();activePostFlushCbs=null,postFlushIndex=0}}const getId=e=>e.id==null?1/0:e.id;function flushJobs(e){isFlushPending=!1,isFlushing=!0,flushPreFlushCbs(e),queue.sort((t,o)=>getId(t)-getId(o));const n=NOOP;try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const t=queue[flushIndex];t&&t.active!==!1&&callWithErrorHandling(t,null,14)}}finally{flushIndex=0,queue.length=0,flushPostFlushCbs(),isFlushing=!1,currentFlushPromise=null,(queue.length||pendingPreFlushCbs.length||pendingPostFlushCbs.length)&&flushJobs(e)}}function emit$1(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||EMPTY_OBJ;let r=t;const i=n.startsWith("update:"),a=i&&n.slice(7);if(a&&a in o){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:b}=o[f]||EMPTY_OBJ;b&&(r=t.map(C=>C.trim())),m&&(r=t.map(toNumber))}let s,l=o[s=toHandlerKey(n)]||o[s=toHandlerKey(camelize(n))];!l&&i&&(l=o[s=toHandlerKey(hyphenate(n))]),l&&callWithAsyncErrorHandling(l,e,6,r);const d=o[s+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,callWithAsyncErrorHandling(d,e,6,r)}}function normalizeEmitsOptions(e,n,t=!1){const o=n.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let a={},s=!1;if(!isFunction$1(e)){const l=d=>{const f=normalizeEmitsOptions(d,n,!0);f&&(s=!0,extend(a,f))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(o.set(e,null),null):(isArray$2(i)?i.forEach(l=>a[l]=null):extend(a,i),o.set(e,a),a)}function isEmitListener(e,n){return!e||!isOn(n)?!1:(n=n.slice(2).replace(/Once$/,""),hasOwn(e,n[0].toLowerCase()+n.slice(1))||hasOwn(e,hyphenate(n))||hasOwn(e,n))}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(e){const n=currentRenderingInstance;return currentRenderingInstance=e,currentScopeId=e&&e.type.__scopeId||null,n}function withCtx(e,n=currentRenderingInstance,t){if(!n||e._n)return e;const o=(...r)=>{o._d&&setBlockTracking(-1);const i=setCurrentRenderingInstance(n),a=e(...r);return setCurrentRenderingInstance(i),o._d&&setBlockTracking(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function markAttrsAccessed(){}function renderComponentRoot(e){const{type:n,vnode:t,proxy:o,withProxy:r,props:i,propsOptions:[a],slots:s,attrs:l,emit:d,render:f,renderCache:m,data:b,setupState:C,ctx:g,inheritAttrs:S}=e;let w,v;const P=setCurrentRenderingInstance(e);try{if(t.shapeFlag&4){const A=r||o;w=normalizeVNode(f.call(A,A,m,i,C,b,g)),v=l}else{const A=n;w=normalizeVNode(A.length>1?A(i,{attrs:l,slots:s,emit:d}):A(i,null)),v=n.props?l:getFunctionalFallthrough(l)}}catch(A){blockStack.length=0,handleError(A,e,1),w=createVNode(Comment)}let z=w;if(v&&S!==!1){const A=Object.keys(v),{shapeFlag:E}=z;A.length&&E&7&&(a&&A.some(isModelListener)&&(v=filterModelListeners(v,a)),z=cloneVNode(z,v))}return t.dirs&&(z=cloneVNode(z),z.dirs=z.dirs?z.dirs.concat(t.dirs):t.dirs),t.transition&&(z.transition=t.transition),w=z,setCurrentRenderingInstance(P),w}const getFunctionalFallthrough=e=>{let n;for(const t in e)(t==="class"||t==="style"||isOn(t))&&((n||(n={}))[t]=e[t]);return n},filterModelListeners=(e,n)=>{const t={};for(const o in e)(!isModelListener(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function shouldUpdateComponent(e,n,t){const{props:o,children:r,component:i}=e,{props:a,children:s,patchFlag:l}=n,d=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return o?hasPropsChanged(o,a,d):!!a;if(l&8){const f=n.dynamicProps;for(let m=0;m<f.length;m++){const b=f[m];if(a[b]!==o[b]&&!isEmitListener(d,b))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:o===a?!1:o?a?hasPropsChanged(o,a,d):!0:!!a;return!1}function hasPropsChanged(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(n[i]!==e[i]&&!isEmitListener(t,i))return!0}return!1}function updateHOCHostEl({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const isSuspense=e=>e.__isSuspense;function queueEffectWithSuspense(e,n){n&&n.pendingBranch?isArray$2(e)?n.effects.push(...e):n.effects.push(e):queuePostFlushCb(e)}function provide(e,n){if(currentInstance){let t=currentInstance.provides;const o=currentInstance.parent&&currentInstance.parent.provides;o===t&&(t=currentInstance.provides=Object.create(o)),t[e]=n}}function inject(e,n,t=!1){const o=currentInstance||currentRenderingInstance;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&isFunction$1(n)?n.call(o.proxy):n}}function watchEffect(e,n){return doWatch(e,null,n)}const INITIAL_WATCHER_VALUE={};function watch(e,n,t){return doWatch(e,n,t)}function doWatch(e,n,{immediate:t,deep:o,flush:r,onTrack:i,onTrigger:a}=EMPTY_OBJ){const s=currentInstance;let l,d=!1,f=!1;if(isRef(e)?(l=()=>e.value,d=isShallow(e)):isReactive(e)?(l=()=>e,o=!0):isArray$2(e)?(f=!0,d=e.some(v=>isReactive(v)||isShallow(v)),l=()=>e.map(v=>{if(isRef(v))return v.value;if(isReactive(v))return traverse(v);if(isFunction$1(v))return callWithErrorHandling(v,s,2)})):isFunction$1(e)?n?l=()=>callWithErrorHandling(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),callWithAsyncErrorHandling(e,s,3,[b])}:l=NOOP,n&&o){const v=l;l=()=>traverse(v())}let m,b=v=>{m=w.onStop=()=>{callWithErrorHandling(v,s,4)}};if(isInSSRComponentSetup)return b=NOOP,n?t&&callWithAsyncErrorHandling(n,s,3,[l(),f?[]:void 0,b]):l(),NOOP;let C=f?[]:INITIAL_WATCHER_VALUE;const g=()=>{if(!!w.active)if(n){const v=w.run();(o||d||(f?v.some((P,z)=>hasChanged(P,C[z])):hasChanged(v,C)))&&(m&&m(),callWithAsyncErrorHandling(n,s,3,[v,C===INITIAL_WATCHER_VALUE?void 0:C,b]),C=v)}else w.run()};g.allowRecurse=!!n;let S;r==="sync"?S=g:r==="post"?S=()=>queuePostRenderEffect(g,s&&s.suspense):S=()=>queuePreFlushCb(g);const w=new ReactiveEffect(l,S);return n?t?g():C=w.run():r==="post"?queuePostRenderEffect(w.run.bind(w),s&&s.suspense):w.run(),()=>{w.stop(),s&&s.scope&&remove(s.scope.effects,w)}}function instanceWatch(e,n,t){const o=this.proxy,r=isString(e)?e.includes(".")?createPathGetter(o,e):()=>o[e]:e.bind(o,o);let i;isFunction$1(n)?i=n:(i=n.handler,t=n);const a=currentInstance;setCurrentInstance(this);const s=doWatch(r,i.bind(o),t);return a?setCurrentInstance(a):unsetCurrentInstance(),s}function createPathGetter(e,n){const t=n.split(".");return()=>{let o=e;for(let r=0;r<t.length&&o;r++)o=o[t[r]];return o}}function traverse(e,n){if(!isObject$1(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),isRef(e))traverse(e.value,n);else if(isArray$2(e))for(let t=0;t<e.length;t++)traverse(e[t],n);else if(isSet(e)||isMap(e))e.forEach(t=>{traverse(t,n)});else if(isPlainObject$1(e))for(const t in e)traverse(e[t],n);return e}function useTransitionState(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{e.isMounted=!0}),onBeforeUnmount(()=>{e.isUnmounting=!0}),e}const TransitionHookValidator=[Function,Array],BaseTransitionImpl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},setup(e,{slots:n}){const t=getCurrentInstance(),o=useTransitionState();let r;return()=>{const i=n.default&&getTransitionRawChildren(n.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const S of i)if(S.type!==Comment){a=S;break}}const s=toRaw(e),{mode:l}=s;if(o.isLeaving)return emptyPlaceholder(a);const d=getKeepAliveChild(a);if(!d)return emptyPlaceholder(a);const f=resolveTransitionHooks(d,s,o,t);setTransitionHooks(d,f);const m=t.subTree,b=m&&getKeepAliveChild(m);let C=!1;const{getTransitionKey:g}=d.type;if(g){const S=g();r===void 0?r=S:S!==r&&(r=S,C=!0)}if(b&&b.type!==Comment&&(!isSameVNodeType(d,b)||C)){const S=resolveTransitionHooks(b,s,o,t);if(setTransitionHooks(b,S),l==="out-in")return o.isLeaving=!0,S.afterLeave=()=>{o.isLeaving=!1,t.update()},emptyPlaceholder(a);l==="in-out"&&d.type!==Comment&&(S.delayLeave=(w,v,P)=>{const z=getLeavingNodesForType(o,b);z[String(b.key)]=b,w._leaveCb=()=>{v(),w._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=P})}return a}}},BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(e,n){const{leavingVNodes:t}=e;let o=t.get(n.type);return o||(o=Object.create(null),t.set(n.type,o)),o}function resolveTransitionHooks(e,n,t,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:m,onLeave:b,onAfterLeave:C,onLeaveCancelled:g,onBeforeAppear:S,onAppear:w,onAfterAppear:v,onAppearCancelled:P}=n,z=String(e.key),A=getLeavingNodesForType(t,e),E=(k,_)=>{k&&callWithAsyncErrorHandling(k,o,9,_)},I=(k,_)=>{const O=_[1];E(k,_),isArray$2(k)?k.every(Y=>Y.length<=1)&&O():k.length<=1&&O()},y={mode:i,persisted:a,beforeEnter(k){let _=s;if(!t.isMounted)if(r)_=S||s;else return;k._leaveCb&&k._leaveCb(!0);const O=A[z];O&&isSameVNodeType(e,O)&&O.el._leaveCb&&O.el._leaveCb(),E(_,[k])},enter(k){let _=l,O=d,Y=f;if(!t.isMounted)if(r)_=w||l,O=v||d,Y=P||f;else return;let B=!1;const ee=k._enterCb=N=>{B||(B=!0,N?E(Y,[k]):E(O,[k]),y.delayedLeave&&y.delayedLeave(),k._enterCb=void 0)};_?I(_,[k,ee]):ee()},leave(k,_){const O=String(e.key);if(k._enterCb&&k._enterCb(!0),t.isUnmounting)return _();E(m,[k]);let Y=!1;const B=k._leaveCb=ee=>{Y||(Y=!0,_(),ee?E(g,[k]):E(C,[k]),k._leaveCb=void 0,A[O]===e&&delete A[O])};A[O]=e,b?I(b,[k,B]):B()},clone(k){return resolveTransitionHooks(k,n,t,o)}};return y}function emptyPlaceholder(e){if(isKeepAlive(e))return e=cloneVNode(e),e.children=null,e}function getKeepAliveChild(e){return isKeepAlive(e)?e.children?e.children[0]:void 0:e}function setTransitionHooks(e,n){e.shapeFlag&6&&e.component?setTransitionHooks(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function getTransitionRawChildren(e,n=!1,t){let o=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];const s=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Fragment?(a.patchFlag&128&&r++,o=o.concat(getTransitionRawChildren(a.children,n,s))):(n||a.type!==Comment)&&o.push(s!=null?cloneVNode(a,{key:s}):a)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function defineComponent(e){return isFunction$1(e)?{setup:e,name:e.name}:e}const isAsyncWrapper=e=>!!e.type.__asyncLoader,isKeepAlive=e=>e.type.__isKeepAlive;function onActivated(e,n){registerKeepAliveHook(e,"a",n)}function onDeactivated(e,n){registerKeepAliveHook(e,"da",n)}function registerKeepAliveHook(e,n,t=currentInstance){const o=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(injectHook(n,o,t),t){let r=t.parent;for(;r&&r.parent;)isKeepAlive(r.parent.vnode)&&injectToKeepAliveRoot(o,n,t,r),r=r.parent}}function injectToKeepAliveRoot(e,n,t,o){const r=injectHook(n,e,o,!0);onUnmounted(()=>{remove(o[n],r)},t)}function injectHook(e,n,t=currentInstance,o=!1){if(t){const r=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...a)=>{if(t.isUnmounted)return;pauseTracking(),setCurrentInstance(t);const s=callWithAsyncErrorHandling(n,t,e,a);return unsetCurrentInstance(),resetTracking(),s});return o?r.unshift(i):r.push(i),i}}const createHook=e=>(n,t=currentInstance)=>(!isInSSRComponentSetup||e==="sp")&&injectHook(e,n,t),onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(e,n=currentInstance){injectHook("ec",e,n)}function withDirectives(e,n){const t=currentRenderingInstance;if(t===null)return e;const o=getExposeProxy(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[a,s,l,d=EMPTY_OBJ]=n[i];isFunction$1(a)&&(a={mounted:a,updated:a}),a.deep&&traverse(s),r.push({dir:a,instance:o,value:s,oldValue:void 0,arg:l,modifiers:d})}return e}function invokeDirectiveHook(e,n,t,o){const r=e.dirs,i=n&&n.dirs;for(let a=0;a<r.length;a++){const s=r[a];i&&(s.oldValue=i[a].value);let l=s.dir[o];l&&(pauseTracking(),callWithAsyncErrorHandling(l,t,8,[e.el,s,e,n]),resetTracking())}}const NULL_DYNAMIC_COMPONENT=Symbol();function renderList(e,n,t,o){let r;const i=t&&t[o];if(isArray$2(e)||isString(e)){r=new Array(e.length);for(let a=0,s=e.length;a<s;a++)r[a]=n(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=n(a+1,a,void 0,i&&i[a])}else if(isObject$1(e))if(e[Symbol.iterator])r=Array.from(e,(a,s)=>n(a,s,void 0,i&&i[s]));else{const a=Object.keys(e);r=new Array(a.length);for(let s=0,l=a.length;s<l;s++){const d=a[s];r[s]=n(e[d],d,s,i&&i[s])}}else r=[];return t&&(t[o]=r),r}function renderSlot(e,n,t={},o,r){if(currentRenderingInstance.isCE||currentRenderingInstance.parent&&isAsyncWrapper(currentRenderingInstance.parent)&&currentRenderingInstance.parent.isCE)return createVNode("slot",n==="default"?null:{name:n},o&&o());let i=e[n];i&&i._c&&(i._d=!1),openBlock();const a=i&&ensureValidVNode$1(i(t)),s=createBlock(Fragment,{key:t.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function ensureValidVNode$1(e){return e.some(n=>isVNode(n)?!(n.type===Comment||n.type===Fragment&&!ensureValidVNode$1(n.children)):!0)?e:null}const getPublicInstance=e=>e?isStatefulComponent(e)?getExposeProxy(e)||e.proxy:getPublicInstance(e.parent):null,publicPropertiesMap=extend(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>getPublicInstance(e.parent),$root:e=>getPublicInstance(e.root),$emit:e=>e.emit,$options:e=>resolveMergedOptions(e),$forceUpdate:e=>e.f||(e.f=()=>queueJob(e.update)),$nextTick:e=>e.n||(e.n=nextTick.bind(e.proxy)),$watch:e=>instanceWatch.bind(e)}),PublicInstanceProxyHandlers={get({_:e},n){const{ctx:t,setupState:o,data:r,props:i,accessCache:a,type:s,appContext:l}=e;let d;if(n[0]!=="$"){const C=a[n];if(C!==void 0)switch(C){case 1:return o[n];case 2:return r[n];case 4:return t[n];case 3:return i[n]}else{if(o!==EMPTY_OBJ&&hasOwn(o,n))return a[n]=1,o[n];if(r!==EMPTY_OBJ&&hasOwn(r,n))return a[n]=2,r[n];if((d=e.propsOptions[0])&&hasOwn(d,n))return a[n]=3,i[n];if(t!==EMPTY_OBJ&&hasOwn(t,n))return a[n]=4,t[n];shouldCacheAccess&&(a[n]=0)}}const f=publicPropertiesMap[n];let m,b;if(f)return n==="$attrs"&&track(e,"get",n),f(e);if((m=s.__cssModules)&&(m=m[n]))return m;if(t!==EMPTY_OBJ&&hasOwn(t,n))return a[n]=4,t[n];if(b=l.config.globalProperties,hasOwn(b,n))return b[n]},set({_:e},n,t){const{data:o,setupState:r,ctx:i}=e;return r!==EMPTY_OBJ&&hasOwn(r,n)?(r[n]=t,!0):o!==EMPTY_OBJ&&hasOwn(o,n)?(o[n]=t,!0):hasOwn(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:r,propsOptions:i}},a){let s;return!!t[a]||e!==EMPTY_OBJ&&hasOwn(e,a)||n!==EMPTY_OBJ&&hasOwn(n,a)||(s=i[0])&&hasOwn(s,a)||hasOwn(o,a)||hasOwn(publicPropertiesMap,a)||hasOwn(r.config.globalProperties,a)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:hasOwn(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let shouldCacheAccess=!0;function applyOptions(e){const n=resolveMergedOptions(e),t=e.proxy,o=e.ctx;shouldCacheAccess=!1,n.beforeCreate&&callHook$1(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:s,provide:l,inject:d,created:f,beforeMount:m,mounted:b,beforeUpdate:C,updated:g,activated:S,deactivated:w,beforeDestroy:v,beforeUnmount:P,destroyed:z,unmounted:A,render:E,renderTracked:I,renderTriggered:y,errorCaptured:k,serverPrefetch:_,expose:O,inheritAttrs:Y,components:B,directives:ee,filters:N}=n;if(d&&resolveInjections(d,o,null,e.appContext.config.unwrapInjectedRef),a)for(const j in a){const ne=a[j];isFunction$1(ne)&&(o[j]=ne.bind(t))}if(r){const j=r.call(t,t);isObject$1(j)&&(e.data=reactive(j))}if(shouldCacheAccess=!0,i)for(const j in i){const ne=i[j],$=isFunction$1(ne)?ne.bind(t,t):isFunction$1(ne.get)?ne.get.bind(t,t):NOOP,W=!isFunction$1(ne)&&isFunction$1(ne.set)?ne.set.bind(t):NOOP,pe=computed({get:$,set:W});Object.defineProperty(o,j,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Te=>pe.value=Te})}if(s)for(const j in s)createWatcher(s[j],o,t,j);if(l){const j=isFunction$1(l)?l.call(t):l;Reflect.ownKeys(j).forEach(ne=>{provide(ne,j[ne])})}f&&callHook$1(f,e,"c");function te(j,ne){isArray$2(ne)?ne.forEach($=>j($.bind(t))):ne&&j(ne.bind(t))}if(te(onBeforeMount,m),te(onMounted,b),te(onBeforeUpdate,C),te(onUpdated,g),te(onActivated,S),te(onDeactivated,w),te(onErrorCaptured,k),te(onRenderTracked,I),te(onRenderTriggered,y),te(onBeforeUnmount,P),te(onUnmounted,A),te(onServerPrefetch,_),isArray$2(O))if(O.length){const j=e.exposed||(e.exposed={});O.forEach(ne=>{Object.defineProperty(j,ne,{get:()=>t[ne],set:$=>t[ne]=$})})}else e.exposed||(e.exposed={});E&&e.render===NOOP&&(e.render=E),Y!=null&&(e.inheritAttrs=Y),B&&(e.components=B),ee&&(e.directives=ee)}function resolveInjections(e,n,t=NOOP,o=!1){isArray$2(e)&&(e=normalizeInject(e));for(const r in e){const i=e[r];let a;isObject$1(i)?"default"in i?a=inject(i.from||r,i.default,!0):a=inject(i.from||r):a=inject(i),isRef(a)&&o?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):n[r]=a}}function callHook$1(e,n,t){callWithAsyncErrorHandling(isArray$2(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function createWatcher(e,n,t,o){const r=o.includes(".")?createPathGetter(t,o):()=>t[o];if(isString(e)){const i=n[e];isFunction$1(i)&&watch(r,i)}else if(isFunction$1(e))watch(r,e.bind(t));else if(isObject$1(e))if(isArray$2(e))e.forEach(i=>createWatcher(i,n,t,o));else{const i=isFunction$1(e.handler)?e.handler.bind(t):n[e.handler];isFunction$1(i)&&watch(r,i,e)}}function resolveMergedOptions(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(n);let l;return s?l=s:!r.length&&!t&&!o?l=n:(l={},r.length&&r.forEach(d=>mergeOptions(l,d,a,!0)),mergeOptions(l,n,a)),i.set(n,l),l}function mergeOptions(e,n,t,o=!1){const{mixins:r,extends:i}=n;i&&mergeOptions(e,i,t,!0),r&&r.forEach(a=>mergeOptions(e,a,t,!0));for(const a in n)if(!(o&&a==="expose")){const s=internalOptionMergeStrats[a]||t&&t[a];e[a]=s?s(e[a],n[a]):n[a]}return e}const internalOptionMergeStrats={data:mergeDataFn,props:mergeObjectOptions,emits:mergeObjectOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(e,n){return n?e?function(){return extend(isFunction$1(e)?e.call(this,this):e,isFunction$1(n)?n.call(this,this):n)}:n:e}function mergeInject(e,n){return mergeObjectOptions(normalizeInject(e),normalizeInject(n))}function normalizeInject(e){if(isArray$2(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function mergeAsArray(e,n){return e?[...new Set([].concat(e,n))]:n}function mergeObjectOptions(e,n){return e?extend(extend(Object.create(null),e),n):n}function mergeWatchOptions(e,n){if(!e)return n;if(!n)return e;const t=extend(Object.create(null),e);for(const o in n)t[o]=mergeAsArray(e[o],n[o]);return t}function initProps(e,n,t,o=!1){const r={},i={};def(i,InternalObjectKey,1),e.propsDefaults=Object.create(null),setFullProps(e,n,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);t?e.props=o?r:shallowReactive(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function updateProps(e,n,t,o){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,s=toRaw(r),[l]=e.propsOptions;let d=!1;if((o||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let b=f[m];if(isEmitListener(e.emitsOptions,b))continue;const C=n[b];if(l)if(hasOwn(i,b))C!==i[b]&&(i[b]=C,d=!0);else{const g=camelize(b);r[g]=resolvePropValue(l,s,g,C,e,!1)}else C!==i[b]&&(i[b]=C,d=!0)}}}else{setFullProps(e,n,r,i)&&(d=!0);let f;for(const m in s)(!n||!hasOwn(n,m)&&((f=hyphenate(m))===m||!hasOwn(n,f)))&&(l?t&&(t[m]!==void 0||t[f]!==void 0)&&(r[m]=resolvePropValue(l,s,m,void 0,e,!0)):delete r[m]);if(i!==s)for(const m in i)(!n||!hasOwn(n,m)&&!0)&&(delete i[m],d=!0)}d&&trigger$1(e,"set","$attrs")}function setFullProps(e,n,t,o){const[r,i]=e.propsOptions;let a=!1,s;if(n)for(let l in n){if(isReservedProp(l))continue;const d=n[l];let f;r&&hasOwn(r,f=camelize(l))?!i||!i.includes(f)?t[f]=d:(s||(s={}))[f]=d:isEmitListener(e.emitsOptions,l)||(!(l in o)||d!==o[l])&&(o[l]=d,a=!0)}if(i){const l=toRaw(t),d=s||EMPTY_OBJ;for(let f=0;f<i.length;f++){const m=i[f];t[m]=resolvePropValue(r,l,m,d[m],e,!hasOwn(d,m))}}return a}function resolvePropValue(e,n,t,o,r,i){const a=e[t];if(a!=null){const s=hasOwn(a,"default");if(s&&o===void 0){const l=a.default;if(a.type!==Function&&isFunction$1(l)){const{propsDefaults:d}=r;t in d?o=d[t]:(setCurrentInstance(r),o=d[t]=l.call(null,n),unsetCurrentInstance())}else o=l}a[0]&&(i&&!s?o=!1:a[1]&&(o===""||o===hyphenate(t))&&(o=!0))}return o}function normalizePropsOptions(e,n,t=!1){const o=n.propsCache,r=o.get(e);if(r)return r;const i=e.props,a={},s=[];let l=!1;if(!isFunction$1(e)){const f=m=>{l=!0;const[b,C]=normalizePropsOptions(m,n,!0);extend(a,b),C&&s.push(...C)};!t&&n.mixins.length&&n.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return o.set(e,EMPTY_ARR),EMPTY_ARR;if(isArray$2(i))for(let f=0;f<i.length;f++){const m=camelize(i[f]);validatePropName(m)&&(a[m]=EMPTY_OBJ)}else if(i)for(const f in i){const m=camelize(f);if(validatePropName(m)){const b=i[f],C=a[m]=isArray$2(b)||isFunction$1(b)?{type:b}:b;if(C){const g=getTypeIndex(Boolean,C.type),S=getTypeIndex(String,C.type);C[0]=g>-1,C[1]=S<0||g<S,(g>-1||hasOwn(C,"default"))&&s.push(m)}}}const d=[a,s];return o.set(e,d),d}function validatePropName(e){return e[0]!=="$"}function getType(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function isSameType(e,n){return getType(e)===getType(n)}function getTypeIndex(e,n){return isArray$2(n)?n.findIndex(t=>isSameType(t,e)):isFunction$1(n)&&isSameType(n,e)?0:-1}const isInternalKey=e=>e[0]==="_"||e==="$stable",normalizeSlotValue=e=>isArray$2(e)?e.map(normalizeVNode):[normalizeVNode(e)],normalizeSlot=(e,n,t)=>{if(n._n)return n;const o=withCtx((...r)=>normalizeSlotValue(n(...r)),t);return o._c=!1,o},normalizeObjectSlots=(e,n,t)=>{const o=e._ctx;for(const r in e){if(isInternalKey(r))continue;const i=e[r];if(isFunction$1(i))n[r]=normalizeSlot(r,i,o);else if(i!=null){const a=normalizeSlotValue(i);n[r]=()=>a}}},normalizeVNodeSlots=(e,n)=>{const t=normalizeSlotValue(n);e.slots.default=()=>t},initSlots=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=toRaw(n),def(n,"_",t)):normalizeObjectSlots(n,e.slots={})}else e.slots={},n&&normalizeVNodeSlots(e,n);def(e.slots,InternalObjectKey,1)},updateSlots=(e,n,t)=>{const{vnode:o,slots:r}=e;let i=!0,a=EMPTY_OBJ;if(o.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:(extend(r,n),!t&&s===1&&delete r._):(i=!n.$stable,normalizeObjectSlots(n,r)),a=n}else n&&(normalizeVNodeSlots(e,n),a={default:1});if(i)for(const s in r)!isInternalKey(s)&&!(s in a)&&delete r[s]};function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid=0;function createAppAPI(e,n){return function(o,r=null){isFunction$1(o)||(o=Object.assign({},o)),r!=null&&!isObject$1(r)&&(r=null);const i=createAppContext(),a=new Set;let s=!1;const l=i.app={_uid:uid++,_component:o,_props:r,_container:null,_context:i,_instance:null,version,get config(){return i.config},set config(d){},use(d,...f){return a.has(d)||(d&&isFunction$1(d.install)?(a.add(d),d.install(l,...f)):isFunction$1(d)&&(a.add(d),d(l,...f))),l},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),l},component(d,f){return f?(i.components[d]=f,l):i.components[d]},directive(d,f){return f?(i.directives[d]=f,l):i.directives[d]},mount(d,f,m){if(!s){const b=createVNode(o,r);return b.appContext=i,f&&n?n(b,d):e(b,d,m),s=!0,l._container=d,d.__vue_app__=l,getExposeProxy(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(d,f){return i.provides[d]=f,l}};return l}}function setRef(e,n,t,o,r=!1){if(isArray$2(e)){e.forEach((b,C)=>setRef(b,n&&(isArray$2(n)?n[C]:n),t,o,r));return}if(isAsyncWrapper(o)&&!r)return;const i=o.shapeFlag&4?getExposeProxy(o.component)||o.component.proxy:o.el,a=r?null:i,{i:s,r:l}=e,d=n&&n.r,f=s.refs===EMPTY_OBJ?s.refs={}:s.refs,m=s.setupState;if(d!=null&&d!==l&&(isString(d)?(f[d]=null,hasOwn(m,d)&&(m[d]=null)):isRef(d)&&(d.value=null)),isFunction$1(l))callWithErrorHandling(l,s,12,[a,f]);else{const b=isString(l),C=isRef(l);if(b||C){const g=()=>{if(e.f){const S=b?f[l]:l.value;r?isArray$2(S)&&remove(S,i):isArray$2(S)?S.includes(i)||S.push(i):b?(f[l]=[i],hasOwn(m,l)&&(m[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else b?(f[l]=a,hasOwn(m,l)&&(m[l]=a)):C&&(l.value=a,e.k&&(f[e.k]=a))};a?(g.id=-1,queuePostRenderEffect(g,t)):g()}}}const queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(e){return baseCreateRenderer(e)}function baseCreateRenderer(e,n){const t=getGlobalThis();t.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:a,createText:s,createComment:l,setText:d,setElementText:f,parentNode:m,nextSibling:b,setScopeId:C=NOOP,cloneNode:g,insertStaticContent:S}=e,w=(T,D,H,q=null,U=null,Q=null,ie=!1,V=null,Z=!!D.dynamicChildren)=>{if(T===D)return;T&&!isSameVNodeType(T,D)&&(q=je(T),Be(T,U,Q,!0),T=null),D.patchFlag===-2&&(Z=!1,D.dynamicChildren=null);const{type:J,ref:le,shapeFlag:X}=D;switch(J){case Text:v(T,D,H,q);break;case Comment:P(T,D,H,q);break;case Static:T==null&&z(D,H,q,ie);break;case Fragment:ee(T,D,H,q,U,Q,ie,V,Z);break;default:X&1?I(T,D,H,q,U,Q,ie,V,Z):X&6?N(T,D,H,q,U,Q,ie,V,Z):(X&64||X&128)&&J.process(T,D,H,q,U,Q,ie,V,Z,Le)}le!=null&&U&&setRef(le,T&&T.ref,Q,D||T,!D)},v=(T,D,H,q)=>{if(T==null)o(D.el=s(D.children),H,q);else{const U=D.el=T.el;D.children!==T.children&&d(U,D.children)}},P=(T,D,H,q)=>{T==null?o(D.el=l(D.children||""),H,q):D.el=T.el},z=(T,D,H,q)=>{[T.el,T.anchor]=S(T.children,D,H,q,T.el,T.anchor)},A=({el:T,anchor:D},H,q)=>{let U;for(;T&&T!==D;)U=b(T),o(T,H,q),T=U;o(D,H,q)},E=({el:T,anchor:D})=>{let H;for(;T&&T!==D;)H=b(T),r(T),T=H;r(D)},I=(T,D,H,q,U,Q,ie,V,Z)=>{ie=ie||D.type==="svg",T==null?y(D,H,q,U,Q,ie,V,Z):O(T,D,U,Q,ie,V,Z)},y=(T,D,H,q,U,Q,ie,V)=>{let Z,J;const{type:le,props:X,shapeFlag:oe,transition:se,patchFlag:me,dirs:ye}=T;if(T.el&&g!==void 0&&me===-1)Z=T.el=g(T.el);else{if(Z=T.el=a(T.type,Q,X&&X.is,X),oe&8?f(Z,T.children):oe&16&&_(T.children,Z,null,q,U,Q&&le!=="foreignObject",ie,V),ye&&invokeDirectiveHook(T,null,q,"created"),X){for(const be in X)be!=="value"&&!isReservedProp(be)&&i(Z,be,null,X[be],Q,T.children,q,U,ue);"value"in X&&i(Z,"value",null,X.value),(J=X.onVnodeBeforeMount)&&invokeVNodeHook(J,q,T)}k(Z,T,T.scopeId,ie,q)}ye&&invokeDirectiveHook(T,null,q,"beforeMount");const ge=(!U||U&&!U.pendingBranch)&&se&&!se.persisted;ge&&se.beforeEnter(Z),o(Z,D,H),((J=X&&X.onVnodeMounted)||ge||ye)&&queuePostRenderEffect(()=>{J&&invokeVNodeHook(J,q,T),ge&&se.enter(Z),ye&&invokeDirectiveHook(T,null,q,"mounted")},U)},k=(T,D,H,q,U)=>{if(H&&C(T,H),q)for(let Q=0;Q<q.length;Q++)C(T,q[Q]);if(U){let Q=U.subTree;if(D===Q){const ie=U.vnode;k(T,ie,ie.scopeId,ie.slotScopeIds,U.parent)}}},_=(T,D,H,q,U,Q,ie,V,Z=0)=>{for(let J=Z;J<T.length;J++){const le=T[J]=V?cloneIfMounted(T[J]):normalizeVNode(T[J]);w(null,le,D,H,q,U,Q,ie,V)}},O=(T,D,H,q,U,Q,ie)=>{const V=D.el=T.el;let{patchFlag:Z,dynamicChildren:J,dirs:le}=D;Z|=T.patchFlag&16;const X=T.props||EMPTY_OBJ,oe=D.props||EMPTY_OBJ;let se;H&&toggleRecurse(H,!1),(se=oe.onVnodeBeforeUpdate)&&invokeVNodeHook(se,H,D,T),le&&invokeDirectiveHook(D,T,H,"beforeUpdate"),H&&toggleRecurse(H,!0);const me=U&&D.type!=="foreignObject";if(J?Y(T.dynamicChildren,J,V,H,q,me,Q):ie||$(T,D,V,null,H,q,me,Q,!1),Z>0){if(Z&16)B(V,D,X,oe,H,q,U);else if(Z&2&&X.class!==oe.class&&i(V,"class",null,oe.class,U),Z&4&&i(V,"style",X.style,oe.style,U),Z&8){const ye=D.dynamicProps;for(let ge=0;ge<ye.length;ge++){const be=ye[ge],He=X[be],qe=oe[be];(qe!==He||be==="value")&&i(V,be,He,qe,U,T.children,H,q,ue)}}Z&1&&T.children!==D.children&&f(V,D.children)}else!ie&&J==null&&B(V,D,X,oe,H,q,U);((se=oe.onVnodeUpdated)||le)&&queuePostRenderEffect(()=>{se&&invokeVNodeHook(se,H,D,T),le&&invokeDirectiveHook(D,T,H,"updated")},q)},Y=(T,D,H,q,U,Q,ie)=>{for(let V=0;V<D.length;V++){const Z=T[V],J=D[V],le=Z.el&&(Z.type===Fragment||!isSameVNodeType(Z,J)||Z.shapeFlag&70)?m(Z.el):H;w(Z,J,le,null,q,U,Q,ie,!0)}},B=(T,D,H,q,U,Q,ie)=>{if(H!==q){for(const V in q){if(isReservedProp(V))continue;const Z=q[V],J=H[V];Z!==J&&V!=="value"&&i(T,V,J,Z,ie,D.children,U,Q,ue)}if(H!==EMPTY_OBJ)for(const V in H)!isReservedProp(V)&&!(V in q)&&i(T,V,H[V],null,ie,D.children,U,Q,ue);"value"in q&&i(T,"value",H.value,q.value)}},ee=(T,D,H,q,U,Q,ie,V,Z)=>{const J=D.el=T?T.el:s(""),le=D.anchor=T?T.anchor:s("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:se}=D;se&&(V=V?V.concat(se):se),T==null?(o(J,H,q),o(le,H,q),_(D.children,H,le,U,Q,ie,V,Z)):X>0&&X&64&&oe&&T.dynamicChildren?(Y(T.dynamicChildren,oe,H,U,Q,ie,V),(D.key!=null||U&&D===U.subTree)&&traverseStaticChildren(T,D,!0)):$(T,D,H,le,U,Q,ie,V,Z)},N=(T,D,H,q,U,Q,ie,V,Z)=>{D.slotScopeIds=V,T==null?D.shapeFlag&512?U.ctx.activate(D,H,q,ie,Z):L(D,H,q,U,Q,ie,Z):te(T,D,Z)},L=(T,D,H,q,U,Q,ie)=>{const V=T.component=createComponentInstance(T,q,U);if(isKeepAlive(T)&&(V.ctx.renderer=Le),setupComponent(V),V.asyncDep){if(U&&U.registerDep(V,j),!T.el){const Z=V.subTree=createVNode(Comment);P(null,Z,D,H)}return}j(V,T,D,H,U,Q,ie)},te=(T,D,H)=>{const q=D.component=T.component;if(shouldUpdateComponent(T,D,H))if(q.asyncDep&&!q.asyncResolved){ne(q,D,H);return}else q.next=D,invalidateJob(q.update),q.update();else D.el=T.el,q.vnode=D},j=(T,D,H,q,U,Q,ie)=>{const V=()=>{if(T.isMounted){let{next:le,bu:X,u:oe,parent:se,vnode:me}=T,ye=le,ge;toggleRecurse(T,!1),le?(le.el=me.el,ne(T,le,ie)):le=me,X&&invokeArrayFns(X),(ge=le.props&&le.props.onVnodeBeforeUpdate)&&invokeVNodeHook(ge,se,le,me),toggleRecurse(T,!0);const be=renderComponentRoot(T),He=T.subTree;T.subTree=be,w(He,be,m(He.el),je(He),T,U,Q),le.el=be.el,ye===null&&updateHOCHostEl(T,be.el),oe&&queuePostRenderEffect(oe,U),(ge=le.props&&le.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(ge,se,le,me),U)}else{let le;const{el:X,props:oe}=D,{bm:se,m:me,parent:ye}=T,ge=isAsyncWrapper(D);if(toggleRecurse(T,!1),se&&invokeArrayFns(se),!ge&&(le=oe&&oe.onVnodeBeforeMount)&&invokeVNodeHook(le,ye,D),toggleRecurse(T,!0),X&&We){const be=()=>{T.subTree=renderComponentRoot(T),We(X,T.subTree,T,U,null)};ge?D.type.__asyncLoader().then(()=>!T.isUnmounted&&be()):be()}else{const be=T.subTree=renderComponentRoot(T);w(null,be,H,q,T,U,Q),D.el=be.el}if(me&&queuePostRenderEffect(me,U),!ge&&(le=oe&&oe.onVnodeMounted)){const be=D;queuePostRenderEffect(()=>invokeVNodeHook(le,ye,be),U)}(D.shapeFlag&256||ye&&isAsyncWrapper(ye.vnode)&&ye.vnode.shapeFlag&256)&&T.a&&queuePostRenderEffect(T.a,U),T.isMounted=!0,D=H=q=null}},Z=T.effect=new ReactiveEffect(V,()=>queueJob(J),T.scope),J=T.update=()=>Z.run();J.id=T.uid,toggleRecurse(T,!0),J()},ne=(T,D,H)=>{D.component=T;const q=T.vnode.props;T.vnode=D,T.next=null,updateProps(T,D.props,q,H),updateSlots(T,D.children,H),pauseTracking(),flushPreFlushCbs(void 0,T.update),resetTracking()},$=(T,D,H,q,U,Q,ie,V,Z=!1)=>{const J=T&&T.children,le=T?T.shapeFlag:0,X=D.children,{patchFlag:oe,shapeFlag:se}=D;if(oe>0){if(oe&128){pe(J,X,H,q,U,Q,ie,V,Z);return}else if(oe&256){W(J,X,H,q,U,Q,ie,V,Z);return}}se&8?(le&16&&ue(J,U,Q),X!==J&&f(H,X)):le&16?se&16?pe(J,X,H,q,U,Q,ie,V,Z):ue(J,U,Q,!0):(le&8&&f(H,""),se&16&&_(X,H,q,U,Q,ie,V,Z))},W=(T,D,H,q,U,Q,ie,V,Z)=>{T=T||EMPTY_ARR,D=D||EMPTY_ARR;const J=T.length,le=D.length,X=Math.min(J,le);let oe;for(oe=0;oe<X;oe++){const se=D[oe]=Z?cloneIfMounted(D[oe]):normalizeVNode(D[oe]);w(T[oe],se,H,null,U,Q,ie,V,Z)}J>le?ue(T,U,Q,!0,!1,X):_(D,H,q,U,Q,ie,V,Z,X)},pe=(T,D,H,q,U,Q,ie,V,Z)=>{let J=0;const le=D.length;let X=T.length-1,oe=le-1;for(;J<=X&&J<=oe;){const se=T[J],me=D[J]=Z?cloneIfMounted(D[J]):normalizeVNode(D[J]);if(isSameVNodeType(se,me))w(se,me,H,null,U,Q,ie,V,Z);else break;J++}for(;J<=X&&J<=oe;){const se=T[X],me=D[oe]=Z?cloneIfMounted(D[oe]):normalizeVNode(D[oe]);if(isSameVNodeType(se,me))w(se,me,H,null,U,Q,ie,V,Z);else break;X--,oe--}if(J>X){if(J<=oe){const se=oe+1,me=se<le?D[se].el:q;for(;J<=oe;)w(null,D[J]=Z?cloneIfMounted(D[J]):normalizeVNode(D[J]),H,me,U,Q,ie,V,Z),J++}}else if(J>oe)for(;J<=X;)Be(T[J],U,Q,!0),J++;else{const se=J,me=J,ye=new Map;for(J=me;J<=oe;J++){const K=D[J]=Z?cloneIfMounted(D[J]):normalizeVNode(D[J]);K.key!=null&&ye.set(K.key,J)}let ge,be=0;const He=oe-me+1;let qe=!1,Ye=0;const Ve=new Array(He);for(J=0;J<He;J++)Ve[J]=0;for(J=se;J<=X;J++){const K=T[J];if(be>=He){Be(K,U,Q,!0);continue}let ae;if(K.key!=null)ae=ye.get(K.key);else for(ge=me;ge<=oe;ge++)if(Ve[ge-me]===0&&isSameVNodeType(K,D[ge])){ae=ge;break}ae===void 0?Be(K,U,Q,!0):(Ve[ae-me]=J+1,ae>=Ye?Ye=ae:qe=!0,w(K,D[ae],H,null,U,Q,ie,V,Z),be++)}const Ze=qe?getSequence(Ve):EMPTY_ARR;for(ge=Ze.length-1,J=He-1;J>=0;J--){const K=me+J,ae=D[K],ce=K+1<le?D[K+1].el:q;Ve[J]===0?w(null,ae,H,ce,U,Q,ie,V,Z):qe&&(ge<0||J!==Ze[ge]?Te(ae,H,ce,2):ge--)}}},Te=(T,D,H,q,U=null)=>{const{el:Q,type:ie,transition:V,children:Z,shapeFlag:J}=T;if(J&6){Te(T.component.subTree,D,H,q);return}if(J&128){T.suspense.move(D,H,q);return}if(J&64){ie.move(T,D,H,Le);return}if(ie===Fragment){o(Q,D,H);for(let X=0;X<Z.length;X++)Te(Z[X],D,H,q);o(T.anchor,D,H);return}if(ie===Static){A(T,D,H);return}if(q!==2&&J&1&&V)if(q===0)V.beforeEnter(Q),o(Q,D,H),queuePostRenderEffect(()=>V.enter(Q),U);else{const{leave:X,delayLeave:oe,afterLeave:se}=V,me=()=>o(Q,D,H),ye=()=>{X(Q,()=>{me(),se&&se()})};oe?oe(Q,me,ye):ye()}else o(Q,D,H)},Be=(T,D,H,q=!1,U=!1)=>{const{type:Q,props:ie,ref:V,children:Z,dynamicChildren:J,shapeFlag:le,patchFlag:X,dirs:oe}=T;if(V!=null&&setRef(V,null,H,T,!0),le&256){D.ctx.deactivate(T);return}const se=le&1&&oe,me=!isAsyncWrapper(T);let ye;if(me&&(ye=ie&&ie.onVnodeBeforeUnmount)&&invokeVNodeHook(ye,D,T),le&6)fe(T.component,H,q);else{if(le&128){T.suspense.unmount(H,q);return}se&&invokeDirectiveHook(T,null,D,"beforeUnmount"),le&64?T.type.remove(T,D,H,U,Le,q):J&&(Q!==Fragment||X>0&&X&64)?ue(J,D,H,!1,!0):(Q===Fragment&&X&384||!U&&le&16)&&ue(Z,D,H),q&&xe(T)}(me&&(ye=ie&&ie.onVnodeUnmounted)||se)&&queuePostRenderEffect(()=>{ye&&invokeVNodeHook(ye,D,T),se&&invokeDirectiveHook(T,null,D,"unmounted")},H)},xe=T=>{const{type:D,el:H,anchor:q,transition:U}=T;if(D===Fragment){we(H,q);return}if(D===Static){E(T);return}const Q=()=>{r(H),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(T.shapeFlag&1&&U&&!U.persisted){const{leave:ie,delayLeave:V}=U,Z=()=>ie(H,Q);V?V(T.el,Q,Z):Z()}else Q()},we=(T,D)=>{let H;for(;T!==D;)H=b(T),r(T),T=H;r(D)},fe=(T,D,H)=>{const{bum:q,scope:U,update:Q,subTree:ie,um:V}=T;q&&invokeArrayFns(q),U.stop(),Q&&(Q.active=!1,Be(ie,T,D,H)),V&&queuePostRenderEffect(V,D),queuePostRenderEffect(()=>{T.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},ue=(T,D,H,q=!1,U=!1,Q=0)=>{for(let ie=Q;ie<T.length;ie++)Be(T[ie],D,H,q,U)},je=T=>T.shapeFlag&6?je(T.component.subTree):T.shapeFlag&128?T.suspense.next():b(T.anchor||T.el),he=(T,D,H)=>{T==null?D._vnode&&Be(D._vnode,null,null,!0):w(D._vnode||null,T,D,null,null,null,H),flushPostFlushCbs(),D._vnode=T},Le={p:w,um:Be,m:Te,r:xe,mt:L,mc:_,pc:$,pbc:Y,n:je,o:e};let Ae,We;return n&&([Ae,We]=n(Le)),{render:he,hydrate:Ae,createApp:createAppAPI(he,Ae)}}function toggleRecurse({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function traverseStaticChildren(e,n,t=!1){const o=e.children,r=n.children;if(isArray$2(o)&&isArray$2(r))for(let i=0;i<o.length;i++){const a=o[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=cloneIfMounted(r[i]),s.el=a.el),t||traverseStaticChildren(a,s))}}function getSequence(e){const n=e.slice(),t=[0];let o,r,i,a,s;const l=e.length;for(o=0;o<l;o++){const d=e[o];if(d!==0){if(r=t[t.length-1],e[r]<d){n[o]=r,t.push(o);continue}for(i=0,a=t.length-1;i<a;)s=i+a>>1,e[t[s]]<d?i=s+1:a=s;d<e[t[i]]&&(i>0&&(n[o]=t[i-1]),t[i]=o)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=n[a];return t}const isTeleport=e=>e.__isTeleport,isTeleportDisabled=e=>e&&(e.disabled||e.disabled===""),isTargetSVG=e=>typeof SVGElement<"u"&&e instanceof SVGElement,resolveTarget=(e,n)=>{const t=e&&e.to;return isString(t)?n?n(t):null:t},TeleportImpl={__isTeleport:!0,process(e,n,t,o,r,i,a,s,l,d){const{mc:f,pc:m,pbc:b,o:{insert:C,querySelector:g,createText:S,createComment:w}}=d,v=isTeleportDisabled(n.props);let{shapeFlag:P,children:z,dynamicChildren:A}=n;if(e==null){const E=n.el=S(""),I=n.anchor=S("");C(E,t,o),C(I,t,o);const y=n.target=resolveTarget(n.props,g),k=n.targetAnchor=S("");y&&(C(k,y),a=a||isTargetSVG(y));const _=(O,Y)=>{P&16&&f(z,O,Y,r,i,a,s,l)};v?_(t,I):y&&_(y,k)}else{n.el=e.el;const E=n.anchor=e.anchor,I=n.target=e.target,y=n.targetAnchor=e.targetAnchor,k=isTeleportDisabled(e.props),_=k?t:I,O=k?E:y;if(a=a||isTargetSVG(I),A?(b(e.dynamicChildren,A,_,r,i,a,s),traverseStaticChildren(e,n,!0)):l||m(e,n,_,O,r,i,a,s,!1),v)k||moveTeleport(n,t,E,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Y=n.target=resolveTarget(n.props,g);Y&&moveTeleport(n,Y,null,d,0)}else k&&moveTeleport(n,I,y,d,1)}},remove(e,n,t,o,{um:r,o:{remove:i}},a){const{shapeFlag:s,children:l,anchor:d,targetAnchor:f,target:m,props:b}=e;if(m&&i(f),(a||!isTeleportDisabled(b))&&(i(d),s&16))for(let C=0;C<l.length;C++){const g=l[C];r(g,n,t,!0,!!g.dynamicChildren)}},move:moveTeleport,hydrate:hydrateTeleport};function moveTeleport(e,n,t,{o:{insert:o},m:r},i=2){i===0&&o(e.targetAnchor,n,t);const{el:a,anchor:s,shapeFlag:l,children:d,props:f}=e,m=i===2;if(m&&o(a,n,t),(!m||isTeleportDisabled(f))&&l&16)for(let b=0;b<d.length;b++)r(d[b],n,t,2);m&&o(s,n,t)}function hydrateTeleport(e,n,t,o,r,i,{o:{nextSibling:a,parentNode:s,querySelector:l}},d){const f=n.target=resolveTarget(n.props,l);if(f){const m=f._lpa||f.firstChild;if(n.shapeFlag&16)if(isTeleportDisabled(n.props))n.anchor=d(a(e),n,s(e),t,o,r,i),n.targetAnchor=m;else{n.anchor=a(e);let b=m;for(;b;)if(b=a(b),b&&b.nodeType===8&&b.data==="teleport anchor"){n.targetAnchor=b,f._lpa=n.targetAnchor&&a(n.targetAnchor);break}d(m,n,f,t,o,r,i)}}return n.anchor&&a(n.anchor)}const Teleport=TeleportImpl,Fragment=Symbol(void 0),Text=Symbol(void 0),Comment=Symbol(void 0),Static=Symbol(void 0),blockStack=[];let currentBlock=null;function openBlock(e=!1){blockStack.push(currentBlock=e?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(e){isBlockTreeEnabled+=e}function setupBlock(e){return e.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(e),e}function createElementBlock(e,n,t,o,r,i){return setupBlock(createBaseVNode(e,n,t,o,r,i,!0))}function createBlock(e,n,t,o,r){return setupBlock(createVNode(e,n,t,o,r,!0))}function isVNode(e){return e?e.__v_isVNode===!0:!1}function isSameVNodeType(e,n){return e.type===n.type&&e.key===n.key}const InternalObjectKey="__vInternal",normalizeKey=({key:e})=>e!=null?e:null,normalizeRef=({ref:e,ref_key:n,ref_for:t})=>e!=null?isString(e)||isRef(e)||isFunction$1(e)?{i:currentRenderingInstance,r:e,k:n,f:!!t}:e:null;function createBaseVNode(e,n=null,t=null,o=0,r=null,i=e===Fragment?0:1,a=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&normalizeKey(n),ref:n&&normalizeRef(n),scopeId:currentScopeId,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return s?(normalizeChildren(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=isString(t)?8:16),isBlockTreeEnabled>0&&!a&&currentBlock&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&currentBlock.push(l),l}const createVNode=_createVNode;function _createVNode(e,n=null,t=null,o=0,r=null,i=!1){if((!e||e===NULL_DYNAMIC_COMPONENT)&&(e=Comment),isVNode(e)){const s=cloneVNode(e,n,!0);return t&&normalizeChildren(s,t),isBlockTreeEnabled>0&&!i&&currentBlock&&(s.shapeFlag&6?currentBlock[currentBlock.indexOf(e)]=s:currentBlock.push(s)),s.patchFlag|=-2,s}if(isClassComponent(e)&&(e=e.__vccOpts),n){n=guardReactiveProps(n);let{class:s,style:l}=n;s&&!isString(s)&&(n.class=normalizeClass(s)),isObject$1(l)&&(isProxy(l)&&!isArray$2(l)&&(l=extend({},l)),n.style=normalizeStyle(l))}const a=isString(e)?1:isSuspense(e)?128:isTeleport(e)?64:isObject$1(e)?4:isFunction$1(e)?2:0;return createBaseVNode(e,n,t,o,r,a,i,!0)}function guardReactiveProps(e){return e?isProxy(e)||InternalObjectKey in e?extend({},e):e:null}function cloneVNode(e,n,t=!1){const{props:o,ref:r,patchFlag:i,children:a}=e,s=n?mergeProps(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&normalizeKey(s),ref:n&&n.ref?t&&r?isArray$2(r)?r.concat(normalizeRef(n)):[r,normalizeRef(n)]:normalizeRef(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Fragment?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cloneVNode(e.ssContent),ssFallback:e.ssFallback&&cloneVNode(e.ssFallback),el:e.el,anchor:e.anchor}}function createTextVNode(e=" ",n=0){return createVNode(Text,null,e,n)}function createCommentVNode(e="",n=!1){return n?(openBlock(),createBlock(Comment,null,e)):createVNode(Comment,null,e)}function normalizeVNode(e){return e==null||typeof e=="boolean"?createVNode(Comment):isArray$2(e)?createVNode(Fragment,null,e.slice()):typeof e=="object"?cloneIfMounted(e):createVNode(Text,null,String(e))}function cloneIfMounted(e){return e.el===null||e.memo?e:cloneVNode(e)}function normalizeChildren(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(isArray$2(n))t=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),normalizeChildren(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(InternalObjectKey in n)?n._ctx=currentRenderingInstance:r===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else isFunction$1(n)?(n={default:n,_ctx:currentRenderingInstance},t=32):(n=String(n),o&64?(t=16,n=[createTextVNode(n)]):t=8);e.children=n,e.shapeFlag|=t}function mergeProps(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=normalizeClass([n.class,o.class]));else if(r==="style")n.style=normalizeStyle([n.style,o.style]);else if(isOn(r)){const i=n[r],a=o[r];a&&i!==a&&!(isArray$2(i)&&i.includes(a))&&(n[r]=i?[].concat(i,a):a)}else r!==""&&(n[r]=o[r])}return n}function invokeVNodeHook(e,n,t,o=null){callWithAsyncErrorHandling(e,n,7,[t,o])}const emptyAppContext=createAppContext();let uid$1=0;function createComponentInstance(e,n,t){const o=e.type,r=(n?n.appContext:e.appContext)||emptyAppContext,i={uid:uid$1++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(o,r),emitsOptions:normalizeEmitsOptions(o,r),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:o.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=emit$1.bind(null,i),e.ce&&e.ce(i),i}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance,setCurrentInstance=e=>{currentInstance=e,e.scope.on()},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),currentInstance=null};function isStatefulComponent(e){return e.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(e,n=!1){isInSSRComponentSetup=n;const{props:t,children:o}=e.vnode,r=isStatefulComponent(e);initProps(e,t,r,n),initSlots(e,o);const i=r?setupStatefulComponent(e,n):void 0;return isInSSRComponentSetup=!1,i}function setupStatefulComponent(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=markRaw(new Proxy(e.ctx,PublicInstanceProxyHandlers));const{setup:o}=t;if(o){const r=e.setupContext=o.length>1?createSetupContext(e):null;setCurrentInstance(e),pauseTracking();const i=callWithErrorHandling(o,e,0,[e.props,r]);if(resetTracking(),unsetCurrentInstance(),isPromise(i)){if(i.then(unsetCurrentInstance,unsetCurrentInstance),n)return i.then(a=>{handleSetupResult(e,a,n)}).catch(a=>{handleError(a,e,0)});e.asyncDep=i}else handleSetupResult(e,i,n)}else finishComponentSetup(e,n)}function handleSetupResult(e,n,t){isFunction$1(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:isObject$1(n)&&(e.setupState=proxyRefs(n)),finishComponentSetup(e,t)}let compile;function finishComponentSetup(e,n,t){const o=e.type;if(!e.render){if(!n&&compile&&!o.render){const r=o.template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:s,compilerOptions:l}=o,d=extend(extend({isCustomElement:i,delimiters:s},a),l);o.render=compile(r,d)}}e.render=o.render||NOOP}setCurrentInstance(e),pauseTracking(),applyOptions(e),resetTracking(),unsetCurrentInstance()}function createAttrsProxy(e){return new Proxy(e.attrs,{get(n,t){return track(e,"get","$attrs"),n[t]}})}function createSetupContext(e){const n=o=>{e.exposed=o||{}};let t;return{get attrs(){return t||(t=createAttrsProxy(e))},slots:e.slots,emit:e.emit,expose:n}}function getExposeProxy(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(proxyRefs(markRaw(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in publicPropertiesMap)return publicPropertiesMap[t](e)}}))}function isClassComponent(e){return isFunction$1(e)&&"__vccOpts"in e}const computed=(e,n)=>computed$1(e,n,isInSSRComponentSetup);function h(e,n,t){const o=arguments.length;return o===2?isObject$1(n)&&!isArray$2(n)?isVNode(n)?createVNode(e,null,[n]):createVNode(e,n):createVNode(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&isVNode(t)&&(t=[t]),createVNode(e,n,t))}const version="3.2.37",svgNS="http://www.w3.org/2000/svg",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const r=n?doc.createElementNS(svgNS,e):doc.createElement(e,t?{is:t}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>doc.createTextNode(e),createComment:e=>doc.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>doc.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,t,o,r,i){const a=t?t.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{templateContainer.innerHTML=o?`<svg>${e}</svg>`:e;const s=templateContainer.content;if(o){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function patchClass(e,n,t){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function patchStyle(e,n,t){const o=e.style,r=isString(t);if(t&&!r){for(const i in t)setStyle(o,i,t[i]);if(n&&!isString(n))for(const i in n)t[i]==null&&setStyle(o,i,"")}else{const i=o.display;r?n!==t&&(o.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const importantRE=/\s*!important$/;function setStyle(e,n,t){if(isArray$2(t))t.forEach(o=>setStyle(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=autoPrefix(e,n);importantRE.test(t)?e.setProperty(hyphenate(o),t.replace(importantRE,""),"important"):e[o]=t}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(e,n){const t=prefixCache[n];if(t)return t;let o=camelize(n);if(o!=="filter"&&o in e)return prefixCache[n]=o;o=capitalize(o);for(let r=0;r<prefixes.length;r++){const i=prefixes[r]+o;if(i in e)return prefixCache[n]=i}return n}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(e,n,t,o,r){if(o&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(xlinkNS,n.slice(6,n.length)):e.setAttributeNS(xlinkNS,n,t);else{const i=isSpecialBooleanAttr(n);t==null||i&&!includeBooleanAttr(t)?e.removeAttribute(n):e.setAttribute(n,i?"":t)}}function patchDOMProp(e,n,t,o,r,i,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,i),e[n]=t==null?"":t;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t==null?"":t;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let s=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=includeBooleanAttr(t):t==null&&l==="string"?(t="",s=!0):l==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(n)}const[_getNow,skipTimestampCheck]=(()=>{let e=Date.now,n=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(t&&Number(t[1])<=53)}return[e,n]})();let cachedNow=0;const p=Promise.resolve(),reset=()=>{cachedNow=0},getNow=()=>cachedNow||(p.then(reset),cachedNow=_getNow());function addEventListener(e,n,t,o){e.addEventListener(n,t,o)}function removeEventListener(e,n,t,o){e.removeEventListener(n,t,o)}function patchEvent(e,n,t,o,r=null){const i=e._vei||(e._vei={}),a=i[n];if(o&&a)a.value=o;else{const[s,l]=parseName(n);if(o){const d=i[n]=createInvoker(o,r);addEventListener(e,s,d,l)}else a&&(removeEventListener(e,s,a,l),i[n]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(e){let n;if(optionsModifierRE.test(e)){n={};let t;for(;t=e.match(optionsModifierRE);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[hyphenate(e.slice(2)),n]}function createInvoker(e,n){const t=o=>{const r=o.timeStamp||_getNow();(skipTimestampCheck||r>=t.attached-1)&&callWithAsyncErrorHandling(patchStopImmediatePropagation(o,t.value),n,5,[o])};return t.value=e,t.attached=getNow(),t}function patchStopImmediatePropagation(e,n){if(isArray$2(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const nativeOnRE=/^on[a-z]/,patchProp=(e,n,t,o,r=!1,i,a,s,l)=>{n==="class"?patchClass(e,o,r):n==="style"?patchStyle(e,t,o):isOn(n)?isModelListener(n)||patchEvent(e,n,t,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):shouldSetAsProp(e,n,o,r))?patchDOMProp(e,n,o,i,a,s,l):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),patchAttr(e,n,o,r))};function shouldSetAsProp(e,n,t,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&nativeOnRE.test(n)&&isFunction$1(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||nativeOnRE.test(n)&&isString(t)?!1:n in e}const TRANSITION="transition",ANIMATION="animation",Transition=(e,{slots:n})=>h(BaseTransition,resolveTransitionProps(e),n);Transition.displayName="Transition";const DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},TransitionPropsValidators=Transition.props=extend({},BaseTransition.props,DOMTransitionPropsValidators),callHook=(e,n=[])=>{isArray$2(e)?e.forEach(t=>t(...n)):e&&e(...n)},hasExplicitCallback=e=>e?isArray$2(e)?e.some(n=>n.length>1):e.length>1:!1;function resolveTransitionProps(e){const n={};for(const B in e)B in DOMTransitionPropsValidators||(n[B]=e[B]);if(e.css===!1)return n;const{name:t="v",type:o,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:d=a,appearToClass:f=s,leaveFromClass:m=`${t}-leave-from`,leaveActiveClass:b=`${t}-leave-active`,leaveToClass:C=`${t}-leave-to`}=e,g=normalizeDuration(r),S=g&&g[0],w=g&&g[1],{onBeforeEnter:v,onEnter:P,onEnterCancelled:z,onLeave:A,onLeaveCancelled:E,onBeforeAppear:I=v,onAppear:y=P,onAppearCancelled:k=z}=n,_=(B,ee,N)=>{removeTransitionClass(B,ee?f:s),removeTransitionClass(B,ee?d:a),N&&N()},O=(B,ee)=>{B._isLeaving=!1,removeTransitionClass(B,m),removeTransitionClass(B,C),removeTransitionClass(B,b),ee&&ee()},Y=B=>(ee,N)=>{const L=B?y:P,te=()=>_(ee,B,N);callHook(L,[ee,te]),nextFrame(()=>{removeTransitionClass(ee,B?l:i),addTransitionClass(ee,B?f:s),hasExplicitCallback(L)||whenTransitionEnds(ee,o,S,te)})};return extend(n,{onBeforeEnter(B){callHook(v,[B]),addTransitionClass(B,i),addTransitionClass(B,a)},onBeforeAppear(B){callHook(I,[B]),addTransitionClass(B,l),addTransitionClass(B,d)},onEnter:Y(!1),onAppear:Y(!0),onLeave(B,ee){B._isLeaving=!0;const N=()=>O(B,ee);addTransitionClass(B,m),forceReflow(),addTransitionClass(B,b),nextFrame(()=>{!B._isLeaving||(removeTransitionClass(B,m),addTransitionClass(B,C),hasExplicitCallback(A)||whenTransitionEnds(B,o,w,N))}),callHook(A,[B,N])},onEnterCancelled(B){_(B,!1),callHook(z,[B])},onAppearCancelled(B){_(B,!0),callHook(k,[B])},onLeaveCancelled(B){O(B),callHook(E,[B])}})}function normalizeDuration(e){if(e==null)return null;if(isObject$1(e))return[NumberOf(e.enter),NumberOf(e.leave)];{const n=NumberOf(e);return[n,n]}}function NumberOf(e){return toNumber(e)}function addTransitionClass(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function removeTransitionClass(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function nextFrame(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let endId=0;function whenTransitionEnds(e,n,t,o){const r=e._endId=++endId,i=()=>{r===e._endId&&o()};if(t)return setTimeout(i,t);const{type:a,timeout:s,propCount:l}=getTransitionInfo(e,n);if(!a)return o();const d=a+"end";let f=0;const m=()=>{e.removeEventListener(d,b),i()},b=C=>{C.target===e&&++f>=l&&m()};setTimeout(()=>{f<l&&m()},s+1),e.addEventListener(d,b)}function getTransitionInfo(e,n){const t=window.getComputedStyle(e),o=g=>(t[g]||"").split(", "),r=o(TRANSITION+"Delay"),i=o(TRANSITION+"Duration"),a=getTimeout(r,i),s=o(ANIMATION+"Delay"),l=o(ANIMATION+"Duration"),d=getTimeout(s,l);let f=null,m=0,b=0;n===TRANSITION?a>0&&(f=TRANSITION,m=a,b=i.length):n===ANIMATION?d>0&&(f=ANIMATION,m=d,b=l.length):(m=Math.max(a,d),f=m>0?a>d?TRANSITION:ANIMATION:null,b=f?f===TRANSITION?i.length:l.length:0);const C=f===TRANSITION&&/\b(transform|all)(,|$)/.test(t[TRANSITION+"Property"]);return{type:f,timeout:m,propCount:b,hasTransform:C}}function getTimeout(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,o)=>toMs(t)+toMs(e[o])))}function toMs(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function forceReflow(){return document.body.offsetHeight}const positionMap=new WeakMap,newPositionMap=new WeakMap,TransitionGroupImpl={name:"TransitionGroup",props:extend({},TransitionPropsValidators,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=getCurrentInstance(),o=useTransitionState();let r,i;return onUpdated(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!hasCSSTransform(r[0].el,t.vnode.el,a))return;r.forEach(callPendingCbs),r.forEach(recordPosition);const s=r.filter(applyTranslation);forceReflow(),s.forEach(l=>{const d=l.el,f=d.style;addTransitionClass(d,a),f.transform=f.webkitTransform=f.transitionDuration="";const m=d._moveCb=b=>{b&&b.target!==d||(!b||/transform$/.test(b.propertyName))&&(d.removeEventListener("transitionend",m),d._moveCb=null,removeTransitionClass(d,a))};d.addEventListener("transitionend",m)})}),()=>{const a=toRaw(e),s=resolveTransitionProps(a);let l=a.tag||Fragment;r=i,i=n.default?getTransitionRawChildren(n.default()):[];for(let d=0;d<i.length;d++){const f=i[d];f.key!=null&&setTransitionHooks(f,resolveTransitionHooks(f,s,o,t))}if(r)for(let d=0;d<r.length;d++){const f=r[d];setTransitionHooks(f,resolveTransitionHooks(f,s,o,t)),positionMap.set(f,f.el.getBoundingClientRect())}return createVNode(l,null,i)}}},TransitionGroup=TransitionGroupImpl;function callPendingCbs(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function recordPosition(e){newPositionMap.set(e,e.el.getBoundingClientRect())}function applyTranslation(e){const n=positionMap.get(e),t=newPositionMap.get(e),o=n.left-t.left,r=n.top-t.top;if(o||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${o}px,${r}px)`,i.transitionDuration="0s",e}}function hasCSSTransform(e,n,t){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),t.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(o);const{hasTransform:i}=getTransitionInfo(o);return r.removeChild(o),i}const vShow={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):setDisplay(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:o}){!n!=!t&&(o?n?(o.beforeEnter(e),setDisplay(e,!0),o.enter(e)):o.leave(e,()=>{setDisplay(e,!1)}):setDisplay(e,n))},beforeUnmount(e,{value:n}){setDisplay(e,n)}};function setDisplay(e,n){e.style.display=n?e._vod:"none"}const rendererOptions=extend({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const createApp=(...e)=>{const n=ensureRenderer().createApp(...e),{mount:t}=n;return n.mount=o=>{const r=normalizeContainer(o);if(!r)return;const i=n._component;!isFunction$1(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function normalizeContainer(e){return isString(e)?document.querySelector(e):e}const main="";let onceCbs=[];const paramsMap=new WeakMap;function flushOnceCallbacks(){onceCbs.forEach(e=>e(...paramsMap.get(e))),onceCbs=[]}function beforeNextFrameOnce(e,...n){paramsMap.set(e,n),!onceCbs.includes(e)&&onceCbs.push(e)===1&&requestAnimationFrame(flushOnceCallbacks)}function happensIn(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function getPreciseEventTarget(e){return e.composedPath()[0]||null}function parseResponsiveProp(e){if(typeof e=="number")return{"":e.toString()};const n={};return e.split(/ +/).forEach(t=>{if(t==="")return;const[o,r]=t.split(":");r===void 0?n[""]=o:n[o]=r}),n}function parseResponsivePropValue(e,n){var t;if(e==null)return;const o=parseResponsiveProp(e);if(n===void 0)return o[""];if(typeof n=="string")return(t=o[n])!==null&&t!==void 0?t:o[""];if(Array.isArray(n)){for(let r=n.length-1;r>=0;--r){const i=n[r];if(i in o)return o[i]}return o[""]}else{let r,i=-1;return Object.keys(o).forEach(a=>{const s=Number(a);!Number.isNaN(s)&&n>=s&&s>=i&&(i=s,r=o[a])}),r}}function depx(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function pxfy(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function getMargin(e,n){const t=e.trim().split(/\s+/g),o={top:t[0]};switch(t.length){case 1:o.right=t[0],o.bottom=t[0],o.left=t[0];break;case 2:o.right=t[1],o.left=t[1],o.bottom=t[0];break;case 3:o.right=t[1],o.bottom=t[2],o.left=t[1];break;case 4:o.right=t[1],o.bottom=t[2],o.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?o:o[n]}function getGap(e,n){const[t,o]=e.split(" ");return n?n==="row"?t:o:{row:t,col:o||t}}const colors={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},prefix$1="^\\s*",suffix="\\s*$",float="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",hex="([0-9A-Fa-f])",dhex="([0-9A-Fa-f]{2})",rgbRegex=new RegExp(`${prefix$1}rgb\\s*\\(${float},${float},${float}\\)${suffix}`),rgbaRegex=new RegExp(`${prefix$1}rgba\\s*\\(${float},${float},${float},${float}\\)${suffix}`),sHexRegex=new RegExp(`${prefix$1}#${hex}${hex}${hex}${suffix}`),hexRegex=new RegExp(`${prefix$1}#${dhex}${dhex}${dhex}${suffix}`),sHexaRegex=new RegExp(`${prefix$1}#${hex}${hex}${hex}${hex}${suffix}`),hexaRegex=new RegExp(`${prefix$1}#${dhex}${dhex}${dhex}${dhex}${suffix}`);function parseHex(e){return parseInt(e,16)}function rgba(e){try{let n;if(n=hexRegex.exec(e))return[parseHex(n[1]),parseHex(n[2]),parseHex(n[3]),1];if(n=rgbRegex.exec(e))return[roundChannel(n[1]),roundChannel(n[5]),roundChannel(n[9]),1];if(n=rgbaRegex.exec(e))return[roundChannel(n[1]),roundChannel(n[5]),roundChannel(n[9]),roundAlpha(n[13])];if(n=sHexRegex.exec(e))return[parseHex(n[1]+n[1]),parseHex(n[2]+n[2]),parseHex(n[3]+n[3]),1];if(n=hexaRegex.exec(e))return[parseHex(n[1]),parseHex(n[2]),parseHex(n[3]),roundAlpha(parseHex(n[4])/255)];if(n=sHexaRegex.exec(e))return[parseHex(n[1]+n[1]),parseHex(n[2]+n[2]),parseHex(n[3]+n[3]),roundAlpha(parseHex(n[4]+n[4])/255)];if(e in colors)return rgba(colors[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function normalizeAlpha(e){return e>1?1:e<0?0:e}function stringifyRgba(e,n,t,o){return`rgba(${roundChannel(e)}, ${roundChannel(n)}, ${roundChannel(t)}, ${normalizeAlpha(o)})`}function compositeChannel(e,n,t,o,r){return roundChannel((e*n*(1-o)+t*o)/r)}function composite(e,n){Array.isArray(e)||(e=rgba(e)),Array.isArray(n)||(n=rgba(n));const t=e[3],o=n[3],r=roundAlpha(t+o-t*o);return stringifyRgba(compositeChannel(e[0],t,n[0],o,r),compositeChannel(e[1],t,n[1],o,r),compositeChannel(e[2],t,n[2],o,r),r)}function changeColor(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:rgba(e);return n.alpha?stringifyRgba(t,o,r,n.alpha):stringifyRgba(t,o,r,i)}function scaleColor(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:rgba(e),{lightness:a=1,alpha:s=1}=n;return toRgbaString([t*a,o*a,r*a,i*s])}function roundAlpha(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function roundChannel(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function toRgbaString(e){const[n,t,o]=e;return 3 in e?`rgba(${roundChannel(n)}, ${roundChannel(t)}, ${roundChannel(o)}, ${roundAlpha(e[3])})`:`rgba(${roundChannel(n)}, ${roundChannel(t)}, ${roundChannel(o)}, 1)`}function createId(e=8){return Math.random().toString(16).slice(2,2+e)}function getSlot$1(e,n="default",t=[]){const r=e.$slots[n];return r===void 0?t:r()}function keep(e,n=[],t){const o={};return n.forEach(r=>{o[r]=e[r]}),Object.assign(o,t)}function flatten$2(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(createTextVNode(String(o)));return}if(Array.isArray(o)){flatten$2(o,n,t);return}if(o.type===Fragment){if(o.children===null)return;Array.isArray(o.children)&&flatten$2(o.children,n,t)}else o.type!==Comment&&t.push(o)}}),t}function call(e,...n){if(Array.isArray(e))e.forEach(t=>call(t,...n));else return e(...n)}const render$1=(e,...n)=>typeof e=="function"?e(...n):typeof e=="string"?createTextVNode(e):typeof e=="number"?createTextVNode(String(e)):null;function warn$2(e,n){console.error(`[naive/${e}]: ${n}`)}function throwError(e,n){throw new Error(`[naive/${e}]: ${n}`)}function getFirstSlotVNode(e,n="default",t=void 0){const o=e[n];if(!o)return warn$2("getFirstSlotVNode",`slot[${n}] is empty`),null;const r=flatten$2(o(t));return r.length===1?r[0]:(warn$2("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function createRefSetter(e){return n=>{n?e.value=n.$el:e.value=null}}function createInjectionKey(e){return e}function ensureValidVNode(e){return e.some(n=>isVNode(n)?!(n.type===Comment||n.type===Fragment&&!ensureValidVNode(n.children)):!0)?e:null}function resolveSlot(e,n){return e&&ensureValidVNode(e())||n()}function resolveSlotWithProps(e,n,t){return e&&ensureValidVNode(e(n))||t(n)}function resolveWrappedSlot(e,n){const t=e&&ensureValidVNode(e());return n(t||null)}function isSlotEmpty(e){return!(e&&ensureValidVNode(e()))}function isNodeVShowFalse(e){var n;const t=(n=e.dirs)===null||n===void 0?void 0:n.find(({dir:o})=>o===vShow);return!!(t&&t.value===!1)}const Wrapper=defineComponent({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),pureNumberRegex=/^(\d|\.)+$/,numberRegex=/(\d|\.)+/;function formatLength(e,{c:n=1,offset:t=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+t)*n;return r===0?"0":`${r}px`}else if(typeof e=="string")if(pureNumberRegex.test(e)){const r=(Number(e)+t)*n;return o?r===0?"0":`${r}px`:`${r}`}else{const r=numberRegex.exec(e);return r?e.replace(numberRegex,String((Number(r[0])+t)*n)):e}return e}function color2Class(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function ampCount(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const separatorRegex=/\s*,(?![^(]*\))\s*/g,extraSpaceRegex=/\s+/g;function resolveSelectorWithAmp(e,n){const t=[];return n.split(separatorRegex).forEach(o=>{let r=ampCount(o);if(r){if(r===1){e.forEach(a=>{t.push(o.replace("&",a))});return}}else{e.forEach(a=>{t.push((a&&a+" ")+o)});return}let i=[o];for(;r--;){const a=[];i.forEach(s=>{e.forEach(l=>{a.push(s.replace("&",l))})}),i=a}i.forEach(a=>t.push(a))}),t}function resolveSelector(e,n){const t=[];return n.split(separatorRegex).forEach(o=>{e.forEach(r=>{t.push((r&&r+" ")+o)})}),t}function parseSelectorPath(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=resolveSelectorWithAmp(n,t):n=resolveSelector(n,t))}),n.join(", ").replace(extraSpaceRegex," ")}function removeElement(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function queryElement(e){return document.querySelector(`style[cssr-id="${e}"]`)}function createElement(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function isMediaOrSupports(e){return e?/^\s*@(s|m)/.test(e):!1}const kebabRegex=/[A-Z]/g;function kebabCase$2(e){return e.replace(kebabRegex,n=>"-"+n.toLowerCase())}function unwrapProperty(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${kebabCase$2(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function unwrapProperties(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function createStyle(e,n,t,o){if(!n)return"";const r=unwrapProperties(n,t,o);if(!r)return"";if(typeof r=="string")return`${e} {
${r}
}`;const i=Object.keys(r);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return i.forEach(s=>{const l=r[s];if(s==="raw"){a.push(`
`+l+`
`);return}s=kebabCase$2(s),l!=null&&a.push(`  ${s}${unwrapProperty(l)}`)}),e&&a.push("}"),a.join(`
`)}function loopCNodeListWithCallback(e,n,t){!e||e.forEach(o=>{if(Array.isArray(o))loopCNodeListWithCallback(o,n,t);else if(typeof o=="function"){const r=o(n);Array.isArray(r)?loopCNodeListWithCallback(r,n,t):r&&t(r)}else o&&t(o)})}function traverseCNode(e,n,t,o,r,i){const a=e.$;let s="";if(!a||typeof a=="string")isMediaOrSupports(a)?s=a:n.push(a);else if(typeof a=="function"){const f=a({context:o.context,props:r});isMediaOrSupports(f)?s=f:n.push(f)}else if(a.before&&a.before(o.context),!a.$||typeof a.$=="string")isMediaOrSupports(a.$)?s=a.$:n.push(a.$);else if(a.$){const f=a.$({context:o.context,props:r});isMediaOrSupports(f)?s=f:n.push(f)}const l=parseSelectorPath(n),d=createStyle(l,e.props,o,r);s?(t.push(`${s} {`),i&&d&&i.insertRule(`${s} {
${d}
}
`)):(i&&d&&i.insertRule(d),!i&&d.length&&t.push(d)),e.children&&loopCNodeListWithCallback(e.children,{context:o.context,props:r},f=>{if(typeof f=="string"){const m=createStyle(l,{raw:f},o,r);i?i.insertRule(m):t.push(m)}else traverseCNode(f,n,t,o,r,i)}),n.pop(),s&&t.push("}"),a&&a.after&&a.after(o.context)}function render(e,n,t,o=!1){const r=[];return traverseCNode(e,[],r,n,t,o?e.instance.__styleSheet:void 0),o?"":r.join(`

`)}function murmur2(e){for(var n=0,t,o=0,r=e.length;r>=4;++o,r-=4)t=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(r){case 3:n^=(e.charCodeAt(o+2)&255)<<16;case 2:n^=(e.charCodeAt(o+1)&255)<<8;case 1:n^=e.charCodeAt(o)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function unmount(e,n,t){const{els:o}=n;if(t===void 0)o.forEach(removeElement),n.els=[];else{const r=queryElement(t);r&&o.includes(r)&&(removeElement(r),n.els=o.filter(i=>i!==r))}}function addElementToList(e,n){e.push(n)}function mount(e,n,t,o,r,i,a,s,l){if(i&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const b=window.__cssrContext;b[t]||(b[t]=!0,render(n,e,o,i));return}let d;if(t===void 0&&(d=n.render(o),t=murmur2(d)),l){l.adapter(t,d!=null?d:n.render(o));return}const f=queryElement(t);if(f!==null&&!a)return f;const m=f!=null?f:createElement(t);if(d===void 0&&(d=n.render(o)),m.textContent=d,f!==null)return f;if(s){const b=document.head.querySelector(`meta[name="${s}"]`);if(b)return document.head.insertBefore(m,b),addElementToList(n.els,m),m}return r?document.head.insertBefore(m,document.head.querySelector("style, link")):document.head.appendChild(m),addElementToList(n.els,m),m}function wrappedRender(e){return render(this,this.instance,e)}function wrappedMount(e={}){const{id:n,ssr:t,props:o,head:r=!1,silent:i=!1,force:a=!1,anchorMetaName:s}=e;return mount(this.instance,this,n,o,r,i,a,s,t)}function wrappedUnmount(e={}){const{id:n}=e;unmount(this.instance,this,n)}const createCNode=function(e,n,t,o){return{instance:e,$:n,props:t,children:o,els:[],render:wrappedRender,mount:wrappedMount,unmount:wrappedUnmount}},c$2=function(e,n,t,o){return Array.isArray(n)?createCNode(e,{$:null},null,n):Array.isArray(t)?createCNode(e,n,null,t):Array.isArray(o)?createCNode(e,n,t,o):createCNode(e,n,t,null)};function CssRender(e={}){let n=null;const t={c:(...o)=>c$2(t,...o),use:(o,...r)=>o.install(t,...r),find:queryElement,context:{},config:e,get __styleSheet(){if(!n){const o=document.createElement("style");return document.head.appendChild(o),n=document.styleSheets[document.styleSheets.length-1],n}return n}};return t}function exists(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return queryElement(e)!==null}function plugin$1(e){let n=".",t="__",o="--",r;if(e){let g=e.blockPrefix;g&&(n=g),g=e.elementPrefix,g&&(t=g),g=e.modifierPrefix,g&&(o=g)}const i={install(g){r=g.c;const S=g.context;S.bem={},S.bem.b=null,S.bem.els=null}};function a(g){let S,w;return{before(v){S=v.bem.b,w=v.bem.els,v.bem.els=null},after(v){v.bem.b=S,v.bem.els=w},$({context:v,props:P}){return g=typeof g=="string"?g:g({context:v,props:P}),v.bem.b=g,`${(P==null?void 0:P.bPrefix)||n}${v.bem.b}`}}}function s(g){let S;return{before(w){S=w.bem.els},after(w){w.bem.els=S},$({context:w,props:v}){return g=typeof g=="string"?g:g({context:w,props:v}),w.bem.els=g.split(",").map(P=>P.trim()),w.bem.els.map(P=>`${(v==null?void 0:v.bPrefix)||n}${w.bem.b}${t}${P}`).join(", ")}}}function l(g){return{$({context:S,props:w}){g=typeof g=="string"?g:g({context:S,props:w});const v=g.split(",").map(A=>A.trim());function P(A){return v.map(E=>`&${(w==null?void 0:w.bPrefix)||n}${S.bem.b}${A!==void 0?`${t}${A}`:""}${o}${E}`).join(", ")}const z=S.bem.els;return z!==null?P(z[0]):P()}}}function d(g){return{$({context:S,props:w}){g=typeof g=="string"?g:g({context:S,props:w});const v=S.bem.els;return`&:not(${(w==null?void 0:w.bPrefix)||n}${S.bem.b}${v!==null&&v.length>0?`${t}${v[0]}`:""}${o}${g})`}}}return Object.assign(i,{cB:(...g)=>r(a(g[0]),g[1],g[2]),cE:(...g)=>r(s(g[0]),g[1],g[2]),cM:(...g)=>r(l(g[0]),g[1],g[2]),cNotM:(...g)=>r(d(g[0]),g[1],g[2])}),i}function createKey(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}createKey("abc","def");const namespace="n",prefix=`.${namespace}-`,elementPrefix="__",modifierPrefix="--",cssr=CssRender(),plugin=plugin$1({blockPrefix:prefix,elementPrefix,modifierPrefix});cssr.use(plugin);const{c:c$1,find}=cssr,{cB,cE,cM,cNotM}=plugin,cCB=(...e)=>c$1(">",[cB(...e)]);let _isJsdom;function isJsdom(){return _isJsdom===void 0&&(_isJsdom=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),_isJsdom}const isBrowser$2=typeof document<"u"&&typeof window<"u";function useDeferredTrue(e,n,t){if(!n)return e;const o=ref(e.value);let r=null;return watch(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function useFalseUntilTruthy(e){const n=ref(!!e.value);if(n.value)return readonly(n);const t=watch(e,o=>{o&&(n.value=!0,t())});return readonly(n)}function useMemo(e){const n=computed(e),t=ref(n.value);return watch(n,o=>{t.value=o}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(o){e.set(o)}}}function hasInstance(){return getCurrentInstance()!==null}const isBrowser$1=typeof window<"u";let fontsReady,isFontReady;const init$1=()=>{var e,n;fontsReady=isBrowser$1?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,isFontReady=!1,fontsReady!==void 0?fontsReady.then(()=>{isFontReady=!0}):isFontReady=!0};init$1();function onFontsReady(e){if(isFontReady)return;let n=!1;onMounted(()=>{isFontReady||fontsReady==null||fontsReady.then(()=>{n||e()})}),onBeforeUnmount(()=>{n=!0})}function getEventTarget(e){return e.composedPath()[0]}const traps={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function createTrapHandler(e,n,t){if(e==="mousemoveoutside"){const o=r=>{n.contains(getEventTarget(r))||t(r)};return{mousemove:o,touchstart:o}}else if(e==="clickoutside"){let o=!1;const r=a=>{o=!n.contains(getEventTarget(a))},i=a=>{!o||n.contains(getEventTarget(a))||t(a)};return{mousedown:r,mouseup:i,touchstart:r,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function ensureTrapHandlers(e,n,t){const o=traps[e];let r=o.get(n);r===void 0&&o.set(n,r=new WeakMap);let i=r.get(t);return i===void 0&&r.set(t,i=createTrapHandler(e,n,t)),i}function trapOn(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=ensureTrapHandlers(e,n,t);return Object.keys(r).forEach(i=>{on(i,document,r[i],o)}),!0}return!1}function trapOff(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=ensureTrapHandlers(e,n,t);return Object.keys(r).forEach(i=>{off(i,document,r[i],o)}),!0}return!1}function createDelegate(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function o(){e.set(this,!0),n.set(this,!0)}function r(y,k,_){const O=y[k];return y[k]=function(){return _.apply(y,arguments),O.apply(y,arguments)},y}function i(y,k){y[k]=Event.prototype[k]}const a=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var y;return(y=a.get(this))!==null&&y!==void 0?y:null}function d(y,k){s!==void 0&&Object.defineProperty(y,"currentTarget",{configurable:!0,enumerable:!0,get:k!=null?k:s.get})}const f={bubble:{},capture:{}},m={};function b(){const y=function(k){const{type:_,eventPhase:O,bubbles:Y}=k,B=getEventTarget(k);if(O===2)return;const ee=O===1?"capture":"bubble";let N=B;const L=[];for(;N===null&&(N=window),L.push(N),N!==window;)N=N.parentNode||null;const te=f.capture[_],j=f.bubble[_];if(r(k,"stopPropagation",t),r(k,"stopImmediatePropagation",o),d(k,l),ee==="capture"){if(te===void 0)return;for(let ne=L.length-1;ne>=0&&!e.has(k);--ne){const $=L[ne],W=te.get($);if(W!==void 0){a.set(k,$);for(const pe of W){if(n.has(k))break;pe(k)}}if(ne===0&&!Y&&j!==void 0){const pe=j.get($);if(pe!==void 0)for(const Te of pe){if(n.has(k))break;Te(k)}}}}else if(ee==="bubble"){if(j===void 0)return;for(let ne=0;ne<L.length&&!e.has(k);++ne){const $=L[ne],W=j.get($);if(W!==void 0){a.set(k,$);for(const pe of W){if(n.has(k))break;pe(k)}}}}i(k,"stopPropagation"),i(k,"stopImmediatePropagation"),d(k)};return y.displayName="evtdUnifiedHandler",y}function C(){const y=function(k){const{type:_,eventPhase:O}=k;if(O!==2)return;const Y=m[_];Y!==void 0&&Y.forEach(B=>B(k))};return y.displayName="evtdUnifiedWindowEventHandler",y}const g=b(),S=C();function w(y,k){const _=f[y];return _[k]===void 0&&(_[k]=new Map,window.addEventListener(k,g,y==="capture")),_[k]}function v(y){return m[y]===void 0&&(m[y]=new Set,window.addEventListener(y,S)),m[y]}function P(y,k){let _=y.get(k);return _===void 0&&y.set(k,_=new Set),_}function z(y,k,_,O){const Y=f[k][_];if(Y!==void 0){const B=Y.get(y);if(B!==void 0&&B.has(O))return!0}return!1}function A(y,k){const _=m[y];return!!(_!==void 0&&_.has(k))}function E(y,k,_,O){let Y;if(typeof O=="object"&&O.once===!0?Y=te=>{I(y,k,Y,O),_(te)}:Y=_,trapOn(y,k,Y,O))return;const ee=O===!0||typeof O=="object"&&O.capture===!0?"capture":"bubble",N=w(ee,y),L=P(N,k);if(L.has(Y)||L.add(Y),k===window){const te=v(y);te.has(Y)||te.add(Y)}}function I(y,k,_,O){if(trapOff(y,k,_,O))return;const B=O===!0||typeof O=="object"&&O.capture===!0,ee=B?"capture":"bubble",N=w(ee,y),L=P(N,k);if(k===window&&!z(k,B?"bubble":"capture",y,_)&&A(y,_)){const j=m[y];j.delete(_),j.size===0&&(window.removeEventListener(y,S),m[y]=void 0)}L.has(_)&&L.delete(_),L.size===0&&N.delete(k),N.size===0&&(window.removeEventListener(y,g,ee==="capture"),f[ee][y]=void 0)}return{on:E,off:I}}const{on,off}=createDelegate();let usedCount=0;const supportMatchMedia=typeof window<"u"&&window.matchMedia!==void 0,osTheme=ref(null);let darkMql,lightMql;function handleDarkMqlChange(e){e.matches&&(osTheme.value="dark")}function handleLightMqlChange(e){e.matches&&(osTheme.value="light")}function init(){darkMql=window.matchMedia("(prefers-color-scheme: dark)"),lightMql=window.matchMedia("(prefers-color-scheme: light)"),darkMql.matches?osTheme.value="dark":lightMql.matches?osTheme.value="light":osTheme.value=null,darkMql.addEventListener?(darkMql.addEventListener("change",handleDarkMqlChange),lightMql.addEventListener("change",handleLightMqlChange)):darkMql.addListener&&(darkMql.addListener(handleDarkMqlChange),lightMql.addListener(handleLightMqlChange))}function clean(){"removeEventListener"in darkMql?(darkMql.removeEventListener("change",handleDarkMqlChange),lightMql.removeEventListener("change",handleLightMqlChange)):"removeListener"in darkMql&&(darkMql.removeListener(handleDarkMqlChange),lightMql.removeListener(handleLightMqlChange)),darkMql=void 0,lightMql=void 0}let managable=!0;function useOsTheme(){return supportMatchMedia&&(usedCount===0&&init(),managable&&(managable=hasInstance())&&(onBeforeMount(()=>{usedCount+=1}),onBeforeUnmount(()=>{usedCount-=1,usedCount===0&&clean()}))),readonly(osTheme)}function useMergedState(e,n){return watch(e,t=>{t!==void 0&&(n.value=t)}),computed(()=>e.value===void 0?n.value:e.value)}function isMounted(){const e=ref(!1);return onMounted(()=>{e.value=!0}),readonly(e)}function useCompitable(e,n){return computed(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const isIos=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function useIsIos(){return isIos}const defaultBreakpointOptions={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function createMediaQuery(e){return`(min-width: ${e}px)`}const mqlMap={};function useBreakpoints(e=defaultBreakpointOptions){if(!isBrowser$1)return computed(()=>[]);if(typeof window.matchMedia!="function")return computed(()=>[]);const n=ref({}),t=Object.keys(e),o=(r,i)=>{r.matches?n.value[i]=!0:n.value[i]=!1};return t.forEach(r=>{const i=e[r];let a,s;mqlMap[i]===void 0?(a=window.matchMedia(createMediaQuery(i)),a.addEventListener?a.addEventListener("change",l=>{s.forEach(d=>{d(l,r)})}):a.addListener&&a.addListener(l=>{s.forEach(d=>{d(l,r)})}),s=new Set,mqlMap[i]={mql:a,cbs:s}):(a=mqlMap[i].mql,s=mqlMap[i].cbs),s.add(o),a.matches&&s.forEach(l=>{l(a,r)})}),onBeforeUnmount(()=>{t.forEach(r=>{const{cbs:i}=mqlMap[e[r]];i.has(o)&&i.delete(o)})}),computed(()=>{const{value:r}=n;return t.filter(i=>r[i])})}function useKeyboard(e={},n){const t=reactive({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(d=>{if(d!==l.key)return;const f=o[d];if(typeof f=="function")f(l);else{const{stop:m=!1,prevent:b=!1}=f;m&&l.stopPropagation(),b&&l.preventDefault(),f.handler(l)}})},a=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(d=>{if(d!==l.key)return;const f=r[d];if(typeof f=="function")f(l);else{const{stop:m=!1,prevent:b=!1}=f;m&&l.stopPropagation(),b&&l.preventDefault(),f.handler(l)}})},s=()=>{(n===void 0||n.value)&&(on("keydown",document,i),on("keyup",document,a)),n!==void 0&&watch(n,l=>{l?(on("keydown",document,i),on("keyup",document,a)):(off("keydown",document,i),off("keyup",document,a))})};return hasInstance()?(onBeforeMount(s),onBeforeUnmount(()=>{(n===void 0||n.value)&&(off("keydown",document,i),off("keyup",document,a))})):s(),readonly(t)}const internalSelectionMenuBodyInjectionKey="n-internal-select-menu-body",modalBodyInjectionKey="n-modal-body",drawerBodyInjectionKey="n-drawer-body",popoverBodyInjectionKey="n-popover-body",teleportDisabled="__disabled__";function useAdjustedTo(e){const n=inject(modalBodyInjectionKey,null),t=inject(drawerBodyInjectionKey,null),o=inject(popoverBodyInjectionKey,null),r=inject(internalSelectionMenuBodyInjectionKey,null),i=ref();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};onMounted(()=>{on("fullscreenchange",document,a)}),onBeforeUnmount(()=>{off("fullscreenchange",document,a)})}return useMemo(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?teleportDisabled:s===!0?i.value||"body":s:n!=null&&n.value?(a=n.value.$el)!==null&&a!==void 0?a:n.value:t!=null&&t.value?t.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:s!=null?s:i.value||"body"})}useAdjustedTo.tdkey=teleportDisabled;useAdjustedTo.propTo={type:[String,Object,Boolean],default:void 0};function getSlot(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return o()}function flatten$1(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(createTextVNode(String(o)));return}if(Array.isArray(o)){flatten$1(o,n,t);return}if(o.type===Fragment){if(o.children===null)return;Array.isArray(o.children)&&flatten$1(o.children,n,t)}else o.type!==Comment&&t.push(o)}}),t}function getFirstVNode(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const r=flatten$1(o());if(r.length===1)return r[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let viewMeasurer=null;function ensureViewBoundingRect(){if(viewMeasurer===null&&(viewMeasurer=document.getElementById("v-binder-view-measurer"),viewMeasurer===null)){viewMeasurer=document.createElement("div"),viewMeasurer.id="v-binder-view-measurer";const{style:e}=viewMeasurer;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(viewMeasurer)}return viewMeasurer.getBoundingClientRect()}function getPointRect(e,n){const t=ensureViewBoundingRect();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function getRect(e){const n=e.getBoundingClientRect(),t=ensureViewBoundingRect();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function getParentNode(e){return e.nodeType===9?null:e.parentNode}function getScrollParent(e){if(e===null)return null;const n=getParentNode(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:o,overflowY:r}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+r+o))return n}return getScrollParent(n)}const Binder=defineComponent({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;provide("VBinder",(n=getCurrentInstance())===null||n===void 0?void 0:n.proxy);const t=inject("VBinder",null),o=ref(null),r=v=>{o.value=v,t&&e.syncTargetWithParent&&t.setTargetRef(v)};let i=[];const a=()=>{let v=o.value;for(;v=getScrollParent(v),v!==null;)i.push(v);for(const P of i)on("scroll",P,m,!0)},s=()=>{for(const v of i)off("scroll",v,m,!0);i=[]},l=new Set,d=v=>{l.size===0&&a(),l.has(v)||l.add(v)},f=v=>{l.has(v)&&l.delete(v),l.size===0&&s()},m=()=>{beforeNextFrameOnce(b)},b=()=>{l.forEach(v=>v())},C=new Set,g=v=>{C.size===0&&on("resize",window,w),C.has(v)||C.add(v)},S=v=>{C.has(v)&&C.delete(v),C.size===0&&off("resize",window,w)},w=()=>{C.forEach(v=>v())};return onBeforeUnmount(()=>{off("resize",window,w),s()}),{targetRef:o,setTargetRef:r,addScrollListener:d,removeScrollListener:f,addResizeListener:g,removeResizeListener:S}},render(){return getSlot("binder",this.$slots)}}),VBinder=Binder,VTarget=defineComponent({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=inject("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?withDirectives(getFirstVNode("follower",this.$slots),[[n]]):getFirstVNode("follower",this.$slots)}}),ctxKey$1="@@mmoContext",mousemoveoutside={mounted(e,{value:n}){e[ctxKey$1]={handler:void 0},typeof n=="function"&&(e[ctxKey$1].handler=n,on("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[ctxKey$1];typeof n=="function"?t.handler?t.handler!==n&&(off("mousemoveoutside",e,t.handler),t.handler=n,on("mousemoveoutside",e,n)):(e[ctxKey$1].handler=n,on("mousemoveoutside",e,n)):t.handler&&(off("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[ctxKey$1];n&&off("mousemoveoutside",e,n),e[ctxKey$1].handler=void 0}},mousemoveoutside$1=mousemoveoutside,ctxKey="@@coContext",clickoutside={mounted(e,{value:n,modifiers:t}){e[ctxKey]={handler:void 0},typeof n=="function"&&(e[ctxKey].handler=n,on("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const o=e[ctxKey];typeof n=="function"?o.handler?o.handler!==n&&(off("clickoutside",e,o.handler,{capture:t.capture}),o.handler=n,on("clickoutside",e,n,{capture:t.capture})):(e[ctxKey].handler=n,on("clickoutside",e,n,{capture:t.capture})):o.handler&&(off("clickoutside",e,o.handler,{capture:t.capture}),o.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[ctxKey];t&&off("clickoutside",e,t,{capture:n.capture}),e[ctxKey].handler=void 0}},clickoutside$1=clickoutside;function warn$1(e,n){console.error(`[vdirs/${e}]: ${n}`)}class ZIndexManager{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:o}=this;if(t!==void 0){n.style.zIndex=`${t}`,o.delete(n);return}const{nextZIndex:r}=this;o.has(n)&&o.get(n)+1===this.nextZIndex||(n.style.zIndex=`${r}`,o.set(n,r),this.nextZIndex=r+1,this.squashState())}unregister(n,t){const{elementZIndex:o}=this;o.has(n)?o.delete(n):t===void 0&&warn$1("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,o)=>t[1]-o[1]),this.nextZIndex=2e3,n.forEach(t=>{const o=t[0],r=this.nextZIndex++;`${r}`!==o.style.zIndex&&(o.style.zIndex=`${r}`)})}}const zIndexManager=new ZIndexManager,ctx="@@ziContext",zindexable={mounted(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t;e[ctx]={enabled:!!r,initialized:!1},r&&(zIndexManager.ensureZIndex(e,o),e[ctx].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t,i=e[ctx].enabled;r&&!i&&(zIndexManager.ensureZIndex(e,o),e[ctx].initialized=!0),e[ctx].enabled=!!r},unmounted(e,n){if(!e[ctx].initialized)return;const{value:t={}}=n,{zIndex:o}=t;zIndexManager.unregister(e,o)}},zindexable$1=zindexable,ssrContextKey=Symbol("@css-render/vue3-ssr");function createStyleString(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function ssrAdapter(e,n){const t=inject(ssrContextKey,null);if(t===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:o,ids:r}=t;r.has(e)||o!==null&&(r.add(e),o.push(createStyleString(e,n)))}const isBrowser=typeof document<"u";function useSsrAdapter(){if(isBrowser)return;const e=inject(ssrContextKey,null);if(e!==null)return{adapter:ssrAdapter,context:e}}function warn(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c}=CssRender(),cssrAnchorMetaName$1="vueuc-style";function resolveTo(e){return typeof e=="string"?document.querySelector(e):e()}const LazyTeleport=defineComponent({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:useFalseUntilTruthy(toRef(e,"show")),mergedTo:computed(()=>{const{to:n}=e;return n!=null?n:"body"})}},render(){return this.showTeleport?this.disabled?getSlot("lazy-teleport",this.$slots):h(Teleport,{disabled:this.disabled,to:this.mergedTo},getSlot("lazy-teleport",this.$slots)):null}}),oppositionPositions={top:"bottom",bottom:"top",left:"right",right:"left"},oppositeAligns={start:"end",center:"center",end:"start"},propToCompare={top:"height",bottom:"height",left:"width",right:"width"},transformOrigins={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},overlapTransformOrigin={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},oppositeAlignCssPositionProps={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},keepOffsetDirection={top:!0,bottom:!1,left:!0,right:!1},cssPositionToOppositeAlign={top:"end",bottom:"start",left:"end",right:"start"};function getPlacementAndOffsetOfFollower(e,n,t,o,r,i){if(!r||i)return{placement:e,top:0,left:0};const[a,s]=e.split("-");let l=s!=null?s:"center",d={top:0,left:0};const f=(C,g,S)=>{let w=0,v=0;const P=t[C]-n[g]-n[C];return P>0&&o&&(S?v=keepOffsetDirection[g]?P:-P:w=keepOffsetDirection[g]?P:-P),{left:w,top:v}},m=a==="left"||a==="right";if(l!=="center"){const C=oppositeAlignCssPositionProps[e],g=oppositionPositions[C],S=propToCompare[C];if(t[S]>n[S]){if(n[C]+n[S]<t[S]){const w=(t[S]-n[S])/2;n[C]<w||n[g]<w?n[C]<n[g]?(l=oppositeAligns[s],d=f(S,g,m)):d=f(S,C,m):l="center"}}else t[S]<n[S]&&n[g]<0&&n[C]>n[g]&&(l=oppositeAligns[s])}else{const C=a==="bottom"||a==="top"?"left":"top",g=oppositionPositions[C],S=propToCompare[C],w=(t[S]-n[S])/2;(n[C]<w||n[g]<w)&&(n[C]>n[g]?(l=cssPositionToOppositeAlign[C],d=f(S,C,m)):(l=cssPositionToOppositeAlign[g],d=f(S,g,m)))}let b=a;return n[a]<t[propToCompare[a]]&&n[a]<n[oppositionPositions[a]]&&(b=oppositionPositions[a]),{placement:l!=="center"?`${b}-${l}`:b,left:d.left,top:d.top}}function getProperTransformOrigin(e,n){return n?overlapTransformOrigin[e]:transformOrigins[e]}function getOffset(e,n,t,o,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}const style$h=c([c(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),c(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[c("> *",{pointerEvents:"all"})])]),VFollower=defineComponent({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=inject("VBinder"),t=useMemo(()=>e.enabled!==void 0?e.enabled:e.show),o=ref(null),r=ref(null),i=()=>{const{syncTrigger:b}=e;b.includes("scroll")&&n.addScrollListener(l),b.includes("resize")&&n.addResizeListener(l)},a=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};onMounted(()=>{t.value&&(l(),i())});const s=useSsrAdapter();style$h.mount({id:"vueuc/binder",head:!0,anchorMetaName:cssrAnchorMetaName$1,ssr:s}),onBeforeUnmount(()=>{a()}),onFontsReady(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const b=o.value;if(b===null)return;const C=n.targetRef,{x:g,y:S,overlap:w}=e,v=g!==void 0&&S!==void 0?getPointRect(g,S):getRect(C);b.style.setProperty("--v-target-width",`${Math.round(v.width)}px`),b.style.setProperty("--v-target-height",`${Math.round(v.height)}px`);const{width:P,minWidth:z,placement:A,internalShift:E,flip:I}=e;b.setAttribute("v-placement",A),w?b.setAttribute("v-overlap",""):b.removeAttribute("v-overlap");const{style:y}=b;P==="target"?y.width=`${v.width}px`:P!==void 0?y.width=P:y.width="",z==="target"?y.minWidth=`${v.width}px`:z!==void 0?y.minWidth=z:y.minWidth="";const k=getRect(b),_=getRect(r.value),{left:O,top:Y,placement:B}=getPlacementAndOffsetOfFollower(A,v,k,E,I,w),ee=getProperTransformOrigin(B,w),{left:N,top:L,transform:te}=getOffset(B,_,v,Y,O,w);b.setAttribute("v-placement",B),b.style.setProperty("--v-offset-left",`${Math.round(O)}px`),b.style.setProperty("--v-offset-top",`${Math.round(Y)}px`),b.style.transform=`translateX(${N}) translateY(${L}) ${te}`,b.style.setProperty("--v-transform-origin",ee),b.style.transformOrigin=ee};watch(t,b=>{b?(i(),d()):a()});const d=()=>{nextTick().then(l).catch(b=>console.error(b))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(b=>{watch(toRef(e,b),l)}),["teleportDisabled"].forEach(b=>{watch(toRef(e,b),d)}),watch(toRef(e,"syncTrigger"),b=>{b.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),b.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const f=isMounted(),m=useMemo(()=>{const{to:b}=e;if(b!==void 0)return b;f.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:r,followerRef:o,mergedTo:m,syncPosition:l}},render(){return h(LazyTeleport,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=h("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[h("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?withDirectives(t,[[zindexable$1,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var resizeObservers=[],hasActiveObservations=function(){return resizeObservers.some(function(e){return e.activeTargets.length>0})},hasSkippedObservations=function(){return resizeObservers.some(function(e){return e.skippedTargets.length>0})},msg="ResizeObserver loop completed with undelivered notifications.",deliverResizeLoopError=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:msg}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=msg),window.dispatchEvent(e)},ResizeObserverBoxOptions;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(ResizeObserverBoxOptions||(ResizeObserverBoxOptions={}));var freeze=function(e){return Object.freeze(e)},ResizeObserverSize=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,freeze(this)}return e}(),DOMRectReadOnly=function(){function e(n,t,o,r){return this.x=n,this.y=t,this.width=o,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,freeze(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,o=n.y,r=n.top,i=n.right,a=n.bottom,s=n.left,l=n.width,d=n.height;return{x:t,y:o,top:r,right:i,bottom:a,left:s,width:l,height:d}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),isSVG=function(e){return e instanceof SVGElement&&"getBBox"in e},isHidden=function(e){if(isSVG(e)){var n=e.getBBox(),t=n.width,o=n.height;return!t&&!o}var r=e,i=r.offsetWidth,a=r.offsetHeight;return!(i||a||e.getClientRects().length)},isElement=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},isReplacedElement=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},global$1=typeof window<"u"?window:{},cache=new WeakMap,scrollRegexp=/auto|scroll/,verticalRegexp=/^tb|vertical/,IE=/msie|trident/i.test(global$1.navigator&&global$1.navigator.userAgent),parseDimension=function(e){return parseFloat(e||"0")},size=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new ResizeObserverSize((t?n:e)||0,(t?e:n)||0)},zeroBoxes=freeze({devicePixelContentBoxSize:size(),borderBoxSize:size(),contentBoxSize:size(),contentRect:new DOMRectReadOnly(0,0,0,0)}),calculateBoxSizes=function(e,n){if(n===void 0&&(n=!1),cache.has(e)&&!n)return cache.get(e);if(isHidden(e))return cache.set(e,zeroBoxes),zeroBoxes;var t=getComputedStyle(e),o=isSVG(e)&&e.ownerSVGElement&&e.getBBox(),r=!IE&&t.boxSizing==="border-box",i=verticalRegexp.test(t.writingMode||""),a=!o&&scrollRegexp.test(t.overflowY||""),s=!o&&scrollRegexp.test(t.overflowX||""),l=o?0:parseDimension(t.paddingTop),d=o?0:parseDimension(t.paddingRight),f=o?0:parseDimension(t.paddingBottom),m=o?0:parseDimension(t.paddingLeft),b=o?0:parseDimension(t.borderTopWidth),C=o?0:parseDimension(t.borderRightWidth),g=o?0:parseDimension(t.borderBottomWidth),S=o?0:parseDimension(t.borderLeftWidth),w=m+d,v=l+f,P=S+C,z=b+g,A=s?e.offsetHeight-z-e.clientHeight:0,E=a?e.offsetWidth-P-e.clientWidth:0,I=r?w+P:0,y=r?v+z:0,k=o?o.width:parseDimension(t.width)-I-E,_=o?o.height:parseDimension(t.height)-y-A,O=k+w+E+P,Y=_+v+A+z,B=freeze({devicePixelContentBoxSize:size(Math.round(k*devicePixelRatio),Math.round(_*devicePixelRatio),i),borderBoxSize:size(O,Y,i),contentBoxSize:size(k,_,i),contentRect:new DOMRectReadOnly(m,l,k,_)});return cache.set(e,B),B},calculateBoxSize=function(e,n,t){var o=calculateBoxSizes(e,t),r=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(n){case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:return a;case ResizeObserverBoxOptions.BORDER_BOX:return r;default:return i}},ResizeObserverEntry=function(){function e(n){var t=calculateBoxSizes(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=freeze([t.borderBoxSize]),this.contentBoxSize=freeze([t.contentBoxSize]),this.devicePixelContentBoxSize=freeze([t.devicePixelContentBoxSize])}return e}(),calculateDepthForNode=function(e){if(isHidden(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},broadcastActiveObservations=function(){var e=1/0,n=[];resizeObservers.forEach(function(a){if(a.activeTargets.length!==0){var s=[];a.activeTargets.forEach(function(d){var f=new ResizeObserverEntry(d.target),m=calculateDepthForNode(d.target);s.push(f),d.lastReportedSize=calculateBoxSize(d.target,d.observedBox),m<e&&(e=m)}),n.push(function(){a.callback.call(a.observer,s,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var t=0,o=n;t<o.length;t++){var r=o[t];r()}return e},gatherActiveObservationsAtDepth=function(e){resizeObservers.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(calculateDepthForNode(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},process=function(){var e=0;for(gatherActiveObservationsAtDepth(e);hasActiveObservations();)e=broadcastActiveObservations(),gatherActiveObservationsAtDepth(e);return hasSkippedObservations()&&deliverResizeLoopError(),e>0},trigger,callbacks=[],notify=function(){return callbacks.splice(0).forEach(function(e){return e()})},queueMicroTask=function(e){if(!trigger){var n=0,t=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return notify()}).observe(t,o),trigger=function(){t.textContent="".concat(n?n--:n++)}}callbacks.push(e),trigger()},queueResizeObserver=function(e){queueMicroTask(function(){requestAnimationFrame(e)})},watching=0,isWatching=function(){return!!watching},CATCH_PERIOD=250,observerConfig={attributes:!0,characterData:!0,childList:!0,subtree:!0},events=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],time=function(e){return e===void 0&&(e=0),Date.now()+e},scheduled=!1,Scheduler=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=CATCH_PERIOD),!scheduled){scheduled=!0;var o=time(n);queueResizeObserver(function(){var r=!1;try{r=process()}finally{if(scheduled=!1,n=o-time(),!isWatching())return;r?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,observerConfig)};document.body?t():global$1.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),events.forEach(function(t){return global$1.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),events.forEach(function(t){return global$1.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),scheduler=new Scheduler,updateCount=function(e){!watching&&e>0&&scheduler.start(),watching+=e,!watching&&scheduler.stop()},skipNotifyOnElement=function(e){return!isSVG(e)&&!isReplacedElement(e)&&getComputedStyle(e).display==="inline"},ResizeObservation=function(){function e(n,t){this.target=n,this.observedBox=t||ResizeObserverBoxOptions.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=calculateBoxSize(this.target,this.observedBox,!0);return skipNotifyOnElement(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),ResizeObserverDetail=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),observerMap=new WeakMap,getObservationIndex=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},ResizeObserverController=function(){function e(){}return e.connect=function(n,t){var o=new ResizeObserverDetail(n,t);observerMap.set(n,o)},e.observe=function(n,t,o){var r=observerMap.get(n),i=r.observationTargets.length===0;getObservationIndex(r.observationTargets,t)<0&&(i&&resizeObservers.push(r),r.observationTargets.push(new ResizeObservation(t,o&&o.box)),updateCount(1),scheduler.schedule())},e.unobserve=function(n,t){var o=observerMap.get(n),r=getObservationIndex(o.observationTargets,t),i=o.observationTargets.length===1;r>=0&&(i&&resizeObservers.splice(resizeObservers.indexOf(o),1),o.observationTargets.splice(r,1),updateCount(-1))},e.disconnect=function(n){var t=this,o=observerMap.get(n);o.observationTargets.slice().forEach(function(r){return t.unobserve(n,r.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),ResizeObserver=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ResizeObserverController.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!isElement(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ResizeObserverController.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!isElement(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ResizeObserverController.unobserve(this,n)},e.prototype.disconnect=function(){ResizeObserverController.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class ResizeObserverDelegate{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||ResizeObserver)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const o=this.elHandlersMap.get(t.target);o!==void 0&&o(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){!this.elHandlersMap.has(n)||(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const resizeObserverManager=new ResizeObserverDelegate,VResizeObserver=defineComponent({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=getCurrentInstance().proxy;function o(r){const{onResize:i}=e;i!==void 0&&i(r)}onMounted(()=>{const r=t.$el;if(r===void 0){warn("resize-observer","$el does not exist.");return}if(r.nextElementSibling!==r.nextSibling&&r.nodeType===3&&r.nodeValue!==""){warn("resize-observer","$el can not be observed (it may be a text node).");return}r.nextElementSibling!==null&&(resizeObserverManager.registerHandler(r.nextElementSibling,o),n=!0)}),onBeforeUnmount(()=>{n&&resizeObserverManager.unregisterHandler(t.$el.nextElementSibling)})},render(){return renderSlot(this.$slots,"default")}});function isHTMLElement(e){return e instanceof HTMLElement}function focusFirstDescendant(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(isHTMLElement(t)&&(attemptFocus(t)||focusFirstDescendant(t)))return!0}return!1}function focusLastDescendant(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(isHTMLElement(t)&&(attemptFocus(t)||focusLastDescendant(t)))return!0}return!1}function attemptFocus(e){if(!isFocusable(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function isFocusable(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let stack=[];const FocusTrap=defineComponent({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=createId(),t=ref(null),o=ref(null);let r=!1,i=!1;const a=typeof document>"u"?null:document.activeElement;function s(){return stack[stack.length-1]===n}function l(w){var v;w.code==="Escape"&&s()&&((v=e.onEsc)===null||v===void 0||v.call(e,w))}onMounted(()=>{watch(()=>e.active,w=>{w?(m(),on("keydown",document,l)):(off("keydown",document,l),r&&b())},{immediate:!0})}),onBeforeUnmount(()=>{off("keydown",document,l),r&&b()});function d(w){if(!i&&s()){const v=f();if(v===null||v.contains(getPreciseEventTarget(w)))return;C("first")}}function f(){const w=t.value;if(w===null)return null;let v=w;for(;v=v.nextSibling,!(v===null||v instanceof Element&&v.tagName==="DIV"););return v}function m(){var w;if(!e.disabled){if(stack.push(n),e.autoFocus){const{initialFocusTo:v}=e;v===void 0?C("first"):(w=resolveTo(v))===null||w===void 0||w.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",d,!0)}}function b(){var w;if(e.disabled||(document.removeEventListener("focus",d,!0),stack=stack.filter(P=>P!==n),s()))return;const{finalFocusTo:v}=e;v!==void 0?(w=resolveTo(v))===null||w===void 0||w.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&a instanceof HTMLElement&&(i=!0,a.focus({preventScroll:!0}),i=!1)}function C(w){if(!!s()&&e.active){const v=t.value,P=o.value;if(v!==null&&P!==null){const z=f();if(z==null||z===P){i=!0,v.focus({preventScroll:!0}),i=!1;return}i=!0;const A=w==="first"?focusFirstDescendant(z):focusLastDescendant(z);i=!1,A||(i=!0,v.focus({preventScroll:!0}),i=!1)}}}function g(w){if(i)return;const v=f();v!==null&&(w.relatedTarget!==null&&v.contains(w.relatedTarget)?C("last"):C("first"))}function S(w){i||(w.relatedTarget!==null&&w.relatedTarget===t.value?C("last"):C("first"))}return{focusableStartRef:t,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:g,handleEndFocus:S}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return h(Fragment,null,[h("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),h("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});function useReactivated(e){const n={isDeactivated:!1};let t=!1;return onActivated(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),onDeactivated(()=>{n.isDeactivated=!0,t||(t=!0)}),n}const formItemInjectionKey="n-form-item";function useFormItem(e,{defaultSize:n="medium",mergedSize:t,mergedDisabled:o}={}){const r=inject(formItemInjectionKey,null);provide(formItemInjectionKey,null);const i=computed(t?()=>t(r):()=>{const{size:l}=e;if(l)return l;if(r){const{mergedSize:d}=r;if(d.value!==void 0)return d.value}return n}),a=computed(o?()=>o(r):()=>{const{disabled:l}=e;return l!==void 0?l:r?r.disabled.value:!1}),s=computed(()=>{const{status:l}=e;return l||(r==null?void 0:r.mergedValidationStatus.value)});return onBeforeUnmount(()=>{r&&r.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:a,mergedStatusRef:s,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global;const freeGlobal$1=freeGlobal;var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self,root=freeGlobal$1||freeSelf||Function("return this")();const root$1=root;var Symbol$1=root$1.Symbol;const Symbol$2=Symbol$1;var objectProto$e=Object.prototype,hasOwnProperty$b=objectProto$e.hasOwnProperty,nativeObjectToString$1=objectProto$e.toString,symToStringTag$1=Symbol$2?Symbol$2.toStringTag:void 0;function getRawTag(e){var n=hasOwnProperty$b.call(e,symToStringTag$1),t=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var o=!0}catch{}var r=nativeObjectToString$1.call(e);return o&&(n?e[symToStringTag$1]=t:delete e[symToStringTag$1]),r}var objectProto$d=Object.prototype,nativeObjectToString=objectProto$d.toString;function objectToString(e){return nativeObjectToString.call(e)}var nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$2?Symbol$2.toStringTag:void 0;function baseGetTag(e){return e==null?e===void 0?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}function isObjectLike(e){return e!=null&&typeof e=="object"}var symbolTag$1="[object Symbol]";function isSymbol(e){return typeof e=="symbol"||isObjectLike(e)&&baseGetTag(e)==symbolTag$1}function arrayMap(e,n){for(var t=-1,o=e==null?0:e.length,r=Array(o);++t<o;)r[t]=n(e[t],t,e);return r}var isArray=Array.isArray;const isArray$1=isArray;var INFINITY$1=1/0,symbolProto$1=Symbol$2?Symbol$2.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;function baseToString(e){if(typeof e=="string")return e;if(isArray$1(e))return arrayMap(e,baseToString)+"";if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var n=e+"";return n=="0"&&1/e==-INFINITY$1?"-0":n}function isObject(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function identity(e){return e}var asyncTag="[object AsyncFunction]",funcTag$1="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(e){if(!isObject(e))return!1;var n=baseGetTag(e);return n==funcTag$1||n==genTag||n==asyncTag||n==proxyTag}var coreJsData=root$1["__core-js_shared__"];const coreJsData$1=coreJsData;var maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData$1&&coreJsData$1.keys&&coreJsData$1.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var funcProto$2=Function.prototype,funcToString$2=funcProto$2.toString;function toSource(e){if(e!=null){try{return funcToString$2.call(e)}catch{}try{return e+""}catch{}}return""}var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$c=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$a=objectProto$c.hasOwnProperty,reIsNative=RegExp("^"+funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var n=isFunction(e)?reIsNative:reIsHostCtor;return n.test(toSource(e))}function getValue(e,n){return e==null?void 0:e[n]}function getNative(e,n){var t=getValue(e,n);return baseIsNative(t)?t:void 0}var WeakMap$1=getNative(root$1,"WeakMap");const WeakMap$2=WeakMap$1;var objectCreate=Object.create,baseCreate=function(){function e(){}return function(n){if(!isObject(n))return{};if(objectCreate)return objectCreate(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const baseCreate$1=baseCreate;function apply(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function copyArray(e,n){var t=-1,o=e.length;for(n||(n=Array(o));++t<o;)n[t]=e[t];return n}var HOT_COUNT=800,HOT_SPAN=16,nativeNow=Date.now;function shortOut(e){var n=0,t=0;return function(){var o=nativeNow(),r=HOT_SPAN-(o-t);if(t=o,r>0){if(++n>=HOT_COUNT)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function constant(e){return function(){return e}}var defineProperty=function(){try{var e=getNative(Object,"defineProperty");return e({},"",{}),e}catch{}}();const defineProperty$1=defineProperty;var baseSetToString=defineProperty$1?function(e,n){return defineProperty$1(e,"toString",{configurable:!0,enumerable:!1,value:constant(n),writable:!0})}:identity;const baseSetToString$1=baseSetToString;var setToString=shortOut(baseSetToString$1);const setToString$1=setToString;var MAX_SAFE_INTEGER$1=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(e,n){var t=typeof e;return n=n==null?MAX_SAFE_INTEGER$1:n,!!n&&(t=="number"||t!="symbol"&&reIsUint.test(e))&&e>-1&&e%1==0&&e<n}function baseAssignValue(e,n,t){n=="__proto__"&&defineProperty$1?defineProperty$1(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function eq(e,n){return e===n||e!==e&&n!==n}var objectProto$b=Object.prototype,hasOwnProperty$9=objectProto$b.hasOwnProperty;function assignValue(e,n,t){var o=e[n];(!(hasOwnProperty$9.call(e,n)&&eq(o,t))||t===void 0&&!(n in e))&&baseAssignValue(e,n,t)}function copyObject(e,n,t,o){var r=!t;t||(t={});for(var i=-1,a=n.length;++i<a;){var s=n[i],l=o?o(t[s],e[s],s,t,e):void 0;l===void 0&&(l=e[s]),r?baseAssignValue(t,s,l):assignValue(t,s,l)}return t}var nativeMax=Math.max;function overRest(e,n,t){return n=nativeMax(n===void 0?e.length-1:n,0),function(){for(var o=arguments,r=-1,i=nativeMax(o.length-n,0),a=Array(i);++r<i;)a[r]=o[n+r];r=-1;for(var s=Array(n+1);++r<n;)s[r]=o[r];return s[n]=t(a),apply(e,this,s)}}function baseRest(e,n){return setToString$1(overRest(e,n,identity),e+"")}var MAX_SAFE_INTEGER=9007199254740991;function isLength(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isArrayLike(e){return e!=null&&isLength(e.length)&&!isFunction(e)}function isIterateeCall(e,n,t){if(!isObject(t))return!1;var o=typeof n;return(o=="number"?isArrayLike(t)&&isIndex(n,t.length):o=="string"&&n in t)?eq(t[n],e):!1}function createAssigner(e){return baseRest(function(n,t){var o=-1,r=t.length,i=r>1?t[r-1]:void 0,a=r>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(r--,i):void 0,a&&isIterateeCall(t[0],t[1],a)&&(i=r<3?void 0:i,r=1),n=Object(n);++o<r;){var s=t[o];s&&e(n,s,o,i)}return n})}var objectProto$a=Object.prototype;function isPrototype(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||objectProto$a;return e===t}function baseTimes(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}var argsTag$2="[object Arguments]";function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag$2}var objectProto$9=Object.prototype,hasOwnProperty$8=objectProto$9.hasOwnProperty,propertyIsEnumerable$1=objectProto$9.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty$8.call(e,"callee")&&!propertyIsEnumerable$1.call(e,"callee")};const isArguments$1=isArguments;function stubFalse(){return!1}var freeExports$2=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule$2=freeExports$2&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports$2=freeModule$2&&freeModule$2.exports===freeExports$2,Buffer$1=moduleExports$2?root$1.Buffer:void 0,nativeIsBuffer=Buffer$1?Buffer$1.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse;const isBuffer$1=isBuffer;var argsTag$1="[object Arguments]",arrayTag$1="[object Array]",boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",funcTag="[object Function]",mapTag$2="[object Map]",numberTag$1="[object Number]",objectTag$3="[object Object]",regexpTag$1="[object RegExp]",setTag$2="[object Set]",stringTag$1="[object String]",weakMapTag$1="[object WeakMap]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$2="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0;typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$2]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag]=typedArrayTags[mapTag$2]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag$3]=typedArrayTags[regexpTag$1]=typedArrayTags[setTag$2]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag$1]=!1;function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[baseGetTag(e)]}function baseUnary(e){return function(n){return e(n)}}var freeExports$1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule$1=freeExports$1&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1,freeProcess=moduleExports$1&&freeGlobal$1.process,nodeUtil=function(){try{var e=freeModule$1&&freeModule$1.require&&freeModule$1.require("util").types;return e||freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch{}}();const nodeUtil$1=nodeUtil;var nodeIsTypedArray=nodeUtil$1&&nodeUtil$1.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;const isTypedArray$1=isTypedArray;var objectProto$8=Object.prototype,hasOwnProperty$7=objectProto$8.hasOwnProperty;function arrayLikeKeys(e,n){var t=isArray$1(e),o=!t&&isArguments$1(e),r=!t&&!o&&isBuffer$1(e),i=!t&&!o&&!r&&isTypedArray$1(e),a=t||o||r||i,s=a?baseTimes(e.length,String):[],l=s.length;for(var d in e)(n||hasOwnProperty$7.call(e,d))&&!(a&&(d=="length"||r&&(d=="offset"||d=="parent")||i&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||isIndex(d,l)))&&s.push(d);return s}function overArg(e,n){return function(t){return e(n(t))}}var nativeKeys=overArg(Object.keys,Object);const nativeKeys$1=nativeKeys;var objectProto$7=Object.prototype,hasOwnProperty$6=objectProto$7.hasOwnProperty;function baseKeys(e){if(!isPrototype(e))return nativeKeys$1(e);var n=[];for(var t in Object(e))hasOwnProperty$6.call(e,t)&&t!="constructor"&&n.push(t);return n}function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}function nativeKeysIn(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var objectProto$6=Object.prototype,hasOwnProperty$5=objectProto$6.hasOwnProperty;function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var n=isPrototype(e),t=[];for(var o in e)o=="constructor"&&(n||!hasOwnProperty$5.call(e,o))||t.push(o);return t}function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey(e,n){if(isArray$1(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||isSymbol(e)?!0:reIsPlainProp.test(e)||!reIsDeepProp.test(e)||n!=null&&e in Object(n)}var nativeCreate=getNative(Object,"create");const nativeCreate$1=nativeCreate;function hashClear(){this.__data__=nativeCreate$1?nativeCreate$1(null):{},this.size=0}function hashDelete(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var HASH_UNDEFINED$2="__lodash_hash_undefined__",objectProto$5=Object.prototype,hasOwnProperty$4=objectProto$5.hasOwnProperty;function hashGet(e){var n=this.__data__;if(nativeCreate$1){var t=n[e];return t===HASH_UNDEFINED$2?void 0:t}return hasOwnProperty$4.call(n,e)?n[e]:void 0}var objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty;function hashHas(e){var n=this.__data__;return nativeCreate$1?n[e]!==void 0:hasOwnProperty$3.call(n,e)}var HASH_UNDEFINED$1="__lodash_hash_undefined__";function hashSet(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=nativeCreate$1&&n===void 0?HASH_UNDEFINED$1:n,this}function Hash(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Hash.prototype.clear=hashClear;Hash.prototype.delete=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;function listCacheClear(){this.__data__=[],this.size=0}function assocIndexOf(e,n){for(var t=e.length;t--;)if(eq(e[t][0],n))return t;return-1}var arrayProto=Array.prototype,splice=arrayProto.splice;function listCacheDelete(e){var n=this.__data__,t=assocIndexOf(n,e);if(t<0)return!1;var o=n.length-1;return t==o?n.pop():splice.call(n,t,1),--this.size,!0}function listCacheGet(e){var n=this.__data__,t=assocIndexOf(n,e);return t<0?void 0:n[t][1]}function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}function listCacheSet(e,n){var t=this.__data__,o=assocIndexOf(t,e);return o<0?(++this.size,t.push([e,n])):t[o][1]=n,this}function ListCache(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}ListCache.prototype.clear=listCacheClear;ListCache.prototype.delete=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;var Map$1=getNative(root$1,"Map");const Map$2=Map$1;function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map$2||ListCache),string:new Hash}}function isKeyable(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function getMapData(e,n){var t=e.__data__;return isKeyable(n)?t[typeof n=="string"?"string":"hash"]:t.map}function mapCacheDelete(e){var n=getMapData(this,e).delete(e);return this.size-=n?1:0,n}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,n){var t=getMapData(this,e),o=t.size;return t.set(e,n),this.size+=t.size==o?0:1,this}function MapCache(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}MapCache.prototype.clear=mapCacheClear;MapCache.prototype.delete=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;var FUNC_ERROR_TEXT="Expected a function";function memoize(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(FUNC_ERROR_TEXT);var t=function(){var o=arguments,r=n?n.apply(this,o):o[0],i=t.cache;if(i.has(r))return i.get(r);var a=e.apply(this,o);return t.cache=i.set(r,a)||i,a};return t.cache=new(memoize.Cache||MapCache),t}memoize.Cache=MapCache;var MAX_MEMOIZE_SIZE=500;function memoizeCapped(e){var n=memoize(e,function(o){return t.size===MAX_MEMOIZE_SIZE&&t.clear(),o}),t=n.cache;return n}var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=memoizeCapped(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(rePropName,function(t,o,r,i){n.push(r?i.replace(reEscapeChar,"$1"):o||t)}),n});const stringToPath$1=stringToPath;function toString(e){return e==null?"":baseToString(e)}function castPath(e,n){return isArray$1(e)?e:isKey(e,n)?[e]:stringToPath$1(toString(e))}var INFINITY=1/0;function toKey(e){if(typeof e=="string"||isSymbol(e))return e;var n=e+"";return n=="0"&&1/e==-INFINITY?"-0":n}function baseGet(e,n){n=castPath(n,e);for(var t=0,o=n.length;e!=null&&t<o;)e=e[toKey(n[t++])];return t&&t==o?e:void 0}function get(e,n,t){var o=e==null?void 0:baseGet(e,n);return o===void 0?t:o}function arrayPush(e,n){for(var t=-1,o=n.length,r=e.length;++t<o;)e[r+t]=n[t];return e}var getPrototype=overArg(Object.getPrototypeOf,Object);const getPrototype$1=getPrototype;var objectTag$2="[object Object]",funcProto=Function.prototype,objectProto$3=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$2=objectProto$3.hasOwnProperty,objectCtorString=funcToString.call(Object);function isPlainObject(e){if(!isObjectLike(e)||baseGetTag(e)!=objectTag$2)return!1;var n=getPrototype$1(e);if(n===null)return!0;var t=hasOwnProperty$2.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&funcToString.call(t)==objectCtorString}function baseSlice(e,n,t){var o=-1,r=e.length;n<0&&(n=-n>r?0:r+n),t=t>r?r:t,t<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(r);++o<r;)i[o]=e[o+n];return i}function castSlice(e,n,t){var o=e.length;return t=t===void 0?o:t,!n&&t>=o?e:baseSlice(e,n,t)}var rsAstralRange$2="\\ud800-\\udfff",rsComboMarksRange$3="\\u0300-\\u036f",reComboHalfMarksRange$3="\\ufe20-\\ufe2f",rsComboSymbolsRange$3="\\u20d0-\\u20ff",rsComboRange$3=rsComboMarksRange$3+reComboHalfMarksRange$3+rsComboSymbolsRange$3,rsVarRange$2="\\ufe0e\\ufe0f",rsZWJ$2="\\u200d",reHasUnicode=RegExp("["+rsZWJ$2+rsAstralRange$2+rsComboRange$3+rsVarRange$2+"]");function hasUnicode(e){return reHasUnicode.test(e)}function asciiToArray(e){return e.split("")}var rsAstralRange$1="\\ud800-\\udfff",rsComboMarksRange$2="\\u0300-\\u036f",reComboHalfMarksRange$2="\\ufe20-\\ufe2f",rsComboSymbolsRange$2="\\u20d0-\\u20ff",rsComboRange$2=rsComboMarksRange$2+reComboHalfMarksRange$2+rsComboSymbolsRange$2,rsVarRange$1="\\ufe0e\\ufe0f",rsAstral="["+rsAstralRange$1+"]",rsCombo$2="["+rsComboRange$2+"]",rsFitz$1="\\ud83c[\\udffb-\\udfff]",rsModifier$1="(?:"+rsCombo$2+"|"+rsFitz$1+")",rsNonAstral$1="[^"+rsAstralRange$1+"]",rsRegional$1="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair$1="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ$1="\\u200d",reOptMod$1=rsModifier$1+"?",rsOptVar$1="["+rsVarRange$1+"]?",rsOptJoin$1="(?:"+rsZWJ$1+"(?:"+[rsNonAstral$1,rsRegional$1,rsSurrPair$1].join("|")+")"+rsOptVar$1+reOptMod$1+")*",rsSeq$1=rsOptVar$1+reOptMod$1+rsOptJoin$1,rsSymbol="(?:"+[rsNonAstral$1+rsCombo$2+"?",rsCombo$2,rsRegional$1,rsSurrPair$1,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz$1+"(?="+rsFitz$1+")|"+rsSymbol+rsSeq$1,"g");function unicodeToArray(e){return e.match(reUnicode)||[]}function stringToArray(e){return hasUnicode(e)?unicodeToArray(e):asciiToArray(e)}function createCaseFirst(e){return function(n){n=toString(n);var t=hasUnicode(n)?stringToArray(n):void 0,o=t?t[0]:n.charAt(0),r=t?castSlice(t,1).join(""):n.slice(1);return o[e]()+r}}var upperFirst=createCaseFirst("toUpperCase");const upperFirst$1=upperFirst;function arrayReduce(e,n,t,o){var r=-1,i=e==null?0:e.length;for(o&&i&&(t=e[++r]);++r<i;)t=n(t,e[r],r,e);return t}function basePropertyOf(e){return function(n){return e==null?void 0:e[n]}}var deburredLetters={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},deburrLetter=basePropertyOf(deburredLetters);const deburrLetter$1=deburrLetter;var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rsComboMarksRange$1="\\u0300-\\u036f",reComboHalfMarksRange$1="\\ufe20-\\ufe2f",rsComboSymbolsRange$1="\\u20d0-\\u20ff",rsComboRange$1=rsComboMarksRange$1+reComboHalfMarksRange$1+rsComboSymbolsRange$1,rsCombo$1="["+rsComboRange$1+"]",reComboMark=RegExp(rsCombo$1,"g");function deburr(e){return e=toString(e),e&&e.replace(reLatin,deburrLetter$1).replace(reComboMark,"")}var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function asciiWords(e){return e.match(reAsciiWord)||[]}var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function hasUnicodeWord(e){return reHasUnicodeWord.test(e)}var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange,rsApos$1="['\u2019]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",rsOptContrLower="(?:"+rsApos$1+"(?:d|ll|m|re|s|t|ve))?",rsOptContrUpper="(?:"+rsApos$1+"(?:D|LL|M|RE|S|T|VE))?",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsOrdLower="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsOrdUpper="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+"+rsOptContrLower+"(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+"+rsOptContrUpper+"(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+"+rsOptContrLower,rsUpper+"+"+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join("|"),"g");function unicodeWords(e){return e.match(reUnicodeWord)||[]}function words(e,n,t){return e=toString(e),n=t?void 0:n,n===void 0?hasUnicodeWord(e)?unicodeWords(e):asciiWords(e):e.match(n)||[]}var rsApos="['\u2019]",reApos=RegExp(rsApos,"g");function createCompounder(e){return function(n){return arrayReduce(words(deburr(n).replace(reApos,"")),e,"")}}function stackClear(){this.__data__=new ListCache,this.size=0}function stackDelete(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function stackGet(e){return this.__data__.get(e)}function stackHas(e){return this.__data__.has(e)}var LARGE_ARRAY_SIZE=200;function stackSet(e,n){var t=this.__data__;if(t instanceof ListCache){var o=t.__data__;if(!Map$2||o.length<LARGE_ARRAY_SIZE-1)return o.push([e,n]),this.size=++t.size,this;t=this.__data__=new MapCache(o)}return t.set(e,n),this.size=t.size,this}function Stack(e){var n=this.__data__=new ListCache(e);this.size=n.size}Stack.prototype.clear=stackClear;Stack.prototype.delete=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;var freeExports=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root$1.Buffer:void 0,allocUnsafe=Buffer?Buffer.allocUnsafe:void 0;function cloneBuffer(e,n){if(n)return e.slice();var t=e.length,o=allocUnsafe?allocUnsafe(t):new e.constructor(t);return e.copy(o),o}function arrayFilter(e,n){for(var t=-1,o=e==null?0:e.length,r=0,i=[];++t<o;){var a=e[t];n(a,t,e)&&(i[r++]=a)}return i}function stubArray(){return[]}var objectProto$2=Object.prototype,propertyIsEnumerable=objectProto$2.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(e){return e==null?[]:(e=Object(e),arrayFilter(nativeGetSymbols(e),function(n){return propertyIsEnumerable.call(e,n)}))}:stubArray;const getSymbols$1=getSymbols;function baseGetAllKeys(e,n,t){var o=n(e);return isArray$1(e)?o:arrayPush(o,t(e))}function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols$1)}var DataView=getNative(root$1,"DataView");const DataView$1=DataView;var Promise$1=getNative(root$1,"Promise");const Promise$2=Promise$1;var Set$1=getNative(root$1,"Set");const Set$2=Set$1;var mapTag$1="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$1="[object Set]",weakMapTag="[object WeakMap]",dataViewTag$1="[object DataView]",dataViewCtorString=toSource(DataView$1),mapCtorString=toSource(Map$2),promiseCtorString=toSource(Promise$2),setCtorString=toSource(Set$2),weakMapCtorString=toSource(WeakMap$2),getTag=baseGetTag;(DataView$1&&getTag(new DataView$1(new ArrayBuffer(1)))!=dataViewTag$1||Map$2&&getTag(new Map$2)!=mapTag$1||Promise$2&&getTag(Promise$2.resolve())!=promiseTag||Set$2&&getTag(new Set$2)!=setTag$1||WeakMap$2&&getTag(new WeakMap$2)!=weakMapTag)&&(getTag=function(e){var n=baseGetTag(e),t=n==objectTag$1?e.constructor:void 0,o=t?toSource(t):"";if(o)switch(o){case dataViewCtorString:return dataViewTag$1;case mapCtorString:return mapTag$1;case promiseCtorString:return promiseTag;case setCtorString:return setTag$1;case weakMapCtorString:return weakMapTag}return n});const getTag$1=getTag;var Uint8Array=root$1.Uint8Array;const Uint8Array$1=Uint8Array;function cloneArrayBuffer(e){var n=new e.constructor(e.byteLength);return new Uint8Array$1(n).set(new Uint8Array$1(e)),n}function cloneTypedArray(e,n){var t=n?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function initCloneObject(e){return typeof e.constructor=="function"&&!isPrototype(e)?baseCreate$1(getPrototype$1(e)):{}}var HASH_UNDEFINED="__lodash_hash_undefined__";function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED),this}function setCacheHas(e){return this.__data__.has(e)}function SetCache(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new MapCache;++n<t;)this.add(e[n])}SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;function arraySome(e,n){for(var t=-1,o=e==null?0:e.length;++t<o;)if(n(e[t],t,e))return!0;return!1}function cacheHas(e,n){return e.has(n)}var COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;function equalArrays(e,n,t,o,r,i){var a=t&COMPARE_PARTIAL_FLAG$5,s=e.length,l=n.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),f=i.get(n);if(d&&f)return d==n&&f==e;var m=-1,b=!0,C=t&COMPARE_UNORDERED_FLAG$3?new SetCache:void 0;for(i.set(e,n),i.set(n,e);++m<s;){var g=e[m],S=n[m];if(o)var w=a?o(S,g,m,n,e,i):o(g,S,m,e,n,i);if(w!==void 0){if(w)continue;b=!1;break}if(C){if(!arraySome(n,function(v,P){if(!cacheHas(C,P)&&(g===v||r(g,v,t,o,i)))return C.push(P)})){b=!1;break}}else if(!(g===S||r(g,S,t,o,i))){b=!1;break}}return i.delete(e),i.delete(n),b}function mapToArray(e){var n=-1,t=Array(e.size);return e.forEach(function(o,r){t[++n]=[r,o]}),t}function setToArray(e){var n=-1,t=Array(e.size);return e.forEach(function(o){t[++n]=o}),t}var COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2,boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",symbolProto=Symbol$2?Symbol$2.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;function equalByTag(e,n,t,o,r,i,a){switch(t){case dataViewTag:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case arrayBufferTag:return!(e.byteLength!=n.byteLength||!i(new Uint8Array$1(e),new Uint8Array$1(n)));case boolTag:case dateTag:case numberTag:return eq(+e,+n);case errorTag:return e.name==n.name&&e.message==n.message;case regexpTag:case stringTag:return e==n+"";case mapTag:var s=mapToArray;case setTag:var l=o&COMPARE_PARTIAL_FLAG$4;if(s||(s=setToArray),e.size!=n.size&&!l)return!1;var d=a.get(e);if(d)return d==n;o|=COMPARE_UNORDERED_FLAG$2,a.set(e,n);var f=equalArrays(s(e),s(n),o,r,i,a);return a.delete(e),f;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(n)}return!1}var COMPARE_PARTIAL_FLAG$3=1,objectProto$1=Object.prototype,hasOwnProperty$1=objectProto$1.hasOwnProperty;function equalObjects(e,n,t,o,r,i){var a=t&COMPARE_PARTIAL_FLAG$3,s=getAllKeys(e),l=s.length,d=getAllKeys(n),f=d.length;if(l!=f&&!a)return!1;for(var m=l;m--;){var b=s[m];if(!(a?b in n:hasOwnProperty$1.call(n,b)))return!1}var C=i.get(e),g=i.get(n);if(C&&g)return C==n&&g==e;var S=!0;i.set(e,n),i.set(n,e);for(var w=a;++m<l;){b=s[m];var v=e[b],P=n[b];if(o)var z=a?o(P,v,b,n,e,i):o(v,P,b,e,n,i);if(!(z===void 0?v===P||r(v,P,t,o,i):z)){S=!1;break}w||(w=b=="constructor")}if(S&&!w){var A=e.constructor,E=n.constructor;A!=E&&"constructor"in e&&"constructor"in n&&!(typeof A=="function"&&A instanceof A&&typeof E=="function"&&E instanceof E)&&(S=!1)}return i.delete(e),i.delete(n),S}var COMPARE_PARTIAL_FLAG$2=1,argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;function baseIsEqualDeep(e,n,t,o,r,i){var a=isArray$1(e),s=isArray$1(n),l=a?arrayTag:getTag$1(e),d=s?arrayTag:getTag$1(n);l=l==argsTag?objectTag:l,d=d==argsTag?objectTag:d;var f=l==objectTag,m=d==objectTag,b=l==d;if(b&&isBuffer$1(e)){if(!isBuffer$1(n))return!1;a=!0,f=!1}if(b&&!f)return i||(i=new Stack),a||isTypedArray$1(e)?equalArrays(e,n,t,o,r,i):equalByTag(e,n,l,t,o,r,i);if(!(t&COMPARE_PARTIAL_FLAG$2)){var C=f&&hasOwnProperty.call(e,"__wrapped__"),g=m&&hasOwnProperty.call(n,"__wrapped__");if(C||g){var S=C?e.value():e,w=g?n.value():n;return i||(i=new Stack),r(S,w,t,o,i)}}return b?(i||(i=new Stack),equalObjects(e,n,t,o,r,i)):!1}function baseIsEqual(e,n,t,o,r){return e===n?!0:e==null||n==null||!isObjectLike(e)&&!isObjectLike(n)?e!==e&&n!==n:baseIsEqualDeep(e,n,t,o,baseIsEqual,r)}var COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;function baseIsMatch(e,n,t,o){var r=t.length,i=r,a=!o;if(e==null)return!i;for(e=Object(e);r--;){var s=t[r];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<i;){s=t[r];var l=s[0],d=e[l],f=s[1];if(a&&s[2]){if(d===void 0&&!(l in e))return!1}else{var m=new Stack;if(o)var b=o(d,f,l,e,n,m);if(!(b===void 0?baseIsEqual(f,d,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,o,m):b))return!1}}return!0}function isStrictComparable(e){return e===e&&!isObject(e)}function getMatchData(e){for(var n=keys(e),t=n.length;t--;){var o=n[t],r=e[o];n[t]=[o,r,isStrictComparable(r)]}return n}function matchesStrictComparable(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function baseMatches(e){var n=getMatchData(e);return n.length==1&&n[0][2]?matchesStrictComparable(n[0][0],n[0][1]):function(t){return t===e||baseIsMatch(t,e,n)}}function baseHasIn(e,n){return e!=null&&n in Object(e)}function hasPath(e,n,t){n=castPath(n,e);for(var o=-1,r=n.length,i=!1;++o<r;){var a=toKey(n[o]);if(!(i=e!=null&&t(e,a)))break;e=e[a]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&isLength(r)&&isIndex(a,r)&&(isArray$1(e)||isArguments$1(e)))}function hasIn(e,n){return e!=null&&hasPath(e,n,baseHasIn)}var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty(e,n){return isKey(e)&&isStrictComparable(n)?matchesStrictComparable(toKey(e),n):function(t){var o=get(t,e);return o===void 0&&o===n?hasIn(t,e):baseIsEqual(n,o,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}function baseProperty(e){return function(n){return n==null?void 0:n[e]}}function basePropertyDeep(e){return function(n){return baseGet(n,e)}}function property(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e)}function baseIteratee(e){return typeof e=="function"?e:e==null?identity:typeof e=="object"?isArray$1(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}function createBaseFor(e){return function(n,t,o){for(var r=-1,i=Object(n),a=o(n),s=a.length;s--;){var l=a[e?s:++r];if(t(i[l],l,i)===!1)break}return n}}var baseFor=createBaseFor();const baseFor$1=baseFor;function baseForOwn(e,n){return e&&baseFor$1(e,n,keys)}function createBaseEach(e,n){return function(t,o){if(t==null)return t;if(!isArrayLike(t))return e(t,o);for(var r=t.length,i=n?r:-1,a=Object(t);(n?i--:++i<r)&&o(a[i],i,a)!==!1;);return t}}var baseEach=createBaseEach(baseForOwn);const baseEach$1=baseEach;function assignMergeValue(e,n,t){(t!==void 0&&!eq(e[n],t)||t===void 0&&!(n in e))&&baseAssignValue(e,n,t)}function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}function safeGet(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function toPlainObject(e){return copyObject(e,keysIn(e))}function baseMergeDeep(e,n,t,o,r,i,a){var s=safeGet(e,t),l=safeGet(n,t),d=a.get(l);if(d){assignMergeValue(e,t,d);return}var f=i?i(s,l,t+"",e,n,a):void 0,m=f===void 0;if(m){var b=isArray$1(l),C=!b&&isBuffer$1(l),g=!b&&!C&&isTypedArray$1(l);f=l,b||C||g?isArray$1(s)?f=s:isArrayLikeObject(s)?f=copyArray(s):C?(m=!1,f=cloneBuffer(l,!0)):g?(m=!1,f=cloneTypedArray(l,!0)):f=[]:isPlainObject(l)||isArguments$1(l)?(f=s,isArguments$1(s)?f=toPlainObject(s):(!isObject(s)||isFunction(s))&&(f=initCloneObject(l))):m=!1}m&&(a.set(l,f),r(f,l,o,i,a),a.delete(l)),assignMergeValue(e,t,f)}function baseMerge(e,n,t,o,r){e!==n&&baseFor$1(n,function(i,a){if(r||(r=new Stack),isObject(i))baseMergeDeep(e,n,a,t,baseMerge,o,r);else{var s=o?o(safeGet(e,a),i,a+"",e,n,r):void 0;s===void 0&&(s=i),assignMergeValue(e,a,s)}},keysIn)}function baseMap(e,n){var t=-1,o=isArrayLike(e)?Array(e.length):[];return baseEach$1(e,function(r,i,a){o[++t]=n(r,i,a)}),o}function map(e,n){var t=isArray$1(e)?arrayMap:baseMap;return t(e,baseIteratee(n))}var kebabCase=createCompounder(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()});const kebabCase$1=kebabCase;var merge$1=createAssigner(function(e,n,t){baseMerge(e,n,t)});const merge$2=merge$1,commonVariables$m={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize,fontFamily,lineHeight}=commonVariables$m,globalStyle=c$1("body",`
 margin: 0;
 font-size: ${fontSize};
 font-family: ${fontFamily};
 line-height: ${lineHeight};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[c$1("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),configProviderInjectionKey="n-config-provider",cssrAnchorMetaName="naive-ui-style";function createTheme(e){return e}function useTheme(e,n,t,o,r,i){const a=useSsrAdapter(),s=inject(configProviderInjectionKey,null);if(t){const d=()=>{const f=i==null?void 0:i.value;t.mount({id:f===void 0?n:f+n,head:!0,props:{bPrefix:f?`.${f}-`:void 0},anchorMetaName:cssrAnchorMetaName,ssr:a}),s!=null&&s.preflightStyleDisabled||globalStyle.mount({id:"n-global",head:!0,anchorMetaName:cssrAnchorMetaName,ssr:a})};a?d():onBeforeMount(d)}return computed(()=>{var d;const{theme:{common:f,self:m,peers:b={}}={},themeOverrides:C={},builtinThemeOverrides:g={}}=r,{common:S,peers:w}=C,{common:v=void 0,[e]:{common:P=void 0,self:z=void 0,peers:A={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:E=void 0,[e]:I={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:y,peers:k={}}=I,_=merge$2({},f||P||v||o.common,E,y,S),O=merge$2((d=m||z||o.self)===null||d===void 0?void 0:d(_),g,I,C);return{common:_,self:O,peers:merge$2({},o.peers,A,b),peerOverrides:merge$2({},g.peers,k,w)}})}useTheme.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const defaultClsPrefix="n";function useConfig(e={},n={defaultBordered:!0}){const t=inject(configProviderInjectionKey,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:computed(()=>{var o,r;const{bordered:i}=e;return i!==void 0?i:(r=(o=t==null?void 0:t.mergedBorderedRef.value)!==null&&o!==void 0?o:n.defaultBordered)!==null&&r!==void 0?r:!0}),mergedClsPrefixRef:computed(()=>(t==null?void 0:t.mergedClsPrefixRef.value)||defaultClsPrefix),namespaceRef:computed(()=>t==null?void 0:t.mergedNamespaceRef.value)}}const enUS={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},enUS$1=enUS;function buildFormatLongFn(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,o=e.formats[t]||e.formats[e.defaultWidth];return o}}function buildLocalizeFn(e){return function(n,t){var o=t!=null&&t.context?String(t.context):"standalone",r;if(o==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=t!=null&&t.width?String(t.width):i;r=e.formattingValues[a]||e.formattingValues[i]}else{var s=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[l]||e.values[s]}var d=e.argumentCallback?e.argumentCallback(n):n;return r[d]}}function buildMatchFn(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=n.match(r);if(!i)return null;var a=i[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?findIndex(s,function(m){return m.test(a)}):findKey(s,function(m){return m.test(a)}),d;d=e.valueCallback?e.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;var f=n.slice(a.length);return{value:d,rest:f}}}function findKey(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function findIndex(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function buildMatchPatternFn(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.match(e.matchPattern);if(!o)return null;var r=o[0],i=n.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;var s=n.slice(r.length);return{value:a,rest:s}}}var formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},formatDistance=function(n,t,o){var r,i=formatDistanceLocale[n];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+r:r+" ago":r};const formatDistance$1=formatDistance;var dateFormats={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},timeFormats={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dateTimeFormats={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})};const formatLong$1=formatLong;var formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},formatRelative=function(n,t,o,r){return formatRelativeLocale[n]};const formatRelative$1=formatRelative;var eraValues={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},quarterValues={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},monthValues={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dayValues={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},formattingDayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ordinalNumber=function(n,t){var o=Number(n),r=o%100;if(r>20||r<10)switch(r%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},localize={ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide",formattingValues:formattingDayPeriodValues,defaultFormattingWidth:"wide"})};const localize$1=localize;var matchOrdinalNumberPattern=/^(\d+)(th|st|nd|rd)?/i,parseOrdinalNumberPattern=/\d+/i,matchEraPatterns={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},parseEraPatterns={any:[/^b/i,/^(a|c)/i]},matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]},matchMonthPatterns={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},parseMonthPatterns={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},matchDayPatterns={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},parseDayPatterns={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},matchDayPeriodPatterns={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},parseDayPeriodPatterns={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:function(n){return parseInt(n,10)}}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})};const match$1=match;var locale={code:"en-US",formatDistance:formatDistance$1,formatLong:formatLong$1,formatRelative:formatRelative$1,localize:localize$1,match:match$1,options:{weekStartsOn:0,firstWeekContainsDate:1}};const defaultLocale=locale,dateEnUs={name:"en-US",locale:defaultLocale},dateEnUS=dateEnUs;function useLocale(e){const{mergedLocaleRef:n,mergedDateLocaleRef:t}=inject(configProviderInjectionKey,null)||{},o=computed(()=>{var i,a;return(a=(i=n==null?void 0:n.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:enUS$1[e]});return{dateLocaleRef:computed(()=>{var i;return(i=t==null?void 0:t.value)!==null&&i!==void 0?i:dateEnUS}),localeRef:o}}function useStyle(e,n,t){if(!n)return;const o=useSsrAdapter(),r=inject(configProviderInjectionKey,null),i=()=>{const a=t==null?void 0:t.value;n.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:cssrAnchorMetaName,props:{bPrefix:a?`.${a}-`:void 0},ssr:o}),r!=null&&r.preflightStyleDisabled||globalStyle.mount({id:"n-global",head:!0,anchorMetaName:cssrAnchorMetaName,ssr:o})};o?i():onBeforeMount(i)}function useThemeClass(e,n,t,o){var r;t||throwError("useThemeClass","cssVarsRef is not passed");const i=(r=inject(configProviderInjectionKey,null))===null||r===void 0?void 0:r.mergedThemeHashRef,a=ref(""),s=useSsrAdapter();let l;const d=`__${e}`,f=()=>{let m=d;const b=n?n.value:void 0,C=i==null?void 0:i.value;C&&(m+="-"+C),b&&(m+="-"+b);const{themeOverrides:g,builtinThemeOverrides:S}=o;g&&(m+="-"+murmur2(JSON.stringify(g))),S&&(m+="-"+murmur2(JSON.stringify(S))),a.value=m,l=()=>{const w=t.value;let v="";for(const P in w)v+=`${P}: ${w[P]};`;c$1(`.${m}`,v).mount({id:m,ssr:s}),l=void 0}};return watchEffect(()=>{f()}),{themeClass:a,onRender:()=>{l==null||l()}}}function useRtl(e,n,t){if(!n)return;const o=useSsrAdapter(),r=computed(()=>{const{value:a}=n;if(!a)return;const s=a[e];if(!!s)return s}),i=()=>{watchEffect(()=>{const{value:a}=t,s=`${a}${e}Rtl`;if(exists(s,o))return;const{value:l}=r;!l||l.style.mount({id:s,head:!0,anchorMetaName:cssrAnchorMetaName,props:{bPrefix:a?`.${a}-`:void 0},ssr:o})})};return o?i():onBeforeMount(i),r}function replaceable(e,n){return defineComponent({name:upperFirst$1(e),setup(){var t;const o=(t=inject(configProviderInjectionKey,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var r;const i=(r=o==null?void 0:o.value)===null||r===void 0?void 0:r[e];return i?i():n}}})}const ChevronRightIcon=defineComponent({name:"ChevronRight",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),EyeIcon=defineComponent({name:"Eye",render(){return h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),h("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),EyeOffIcon=defineComponent({name:"EyeOff",render(){return h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),h("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),h("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),h("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),h("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),EmptyIcon=defineComponent({name:"Empty",render(){return h("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),h("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),ChevronDownIcon=defineComponent({name:"ChevronDown",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ClearIcon=replaceable("clear",h("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},h("g",{fill:"currentColor","fill-rule":"nonzero"},h("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),NIconSwitchTransition=defineComponent({name:"BaseIconSwitchTransition",setup(e,{slots:n}){const t=isMounted();return()=>h(Transition,{name:"icon-switch-transition",appear:t.value},n)}}),NFadeInExpandTransition=defineComponent({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function o(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function r(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function a(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const s=e.group?TransitionGroup:Transition;return h(s,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:i,onAfterEnter:a,onBeforeLeave:t,onLeave:o,onAfterLeave:r},n)}}}),style$g=cB("base-icon",`
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
 `)]),NBaseIcon=defineComponent({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){useStyle("-base-icon",style$g,toRef(e,"clsPrefix"))},render(){return h("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),{cubicBezierEaseInOut:cubicBezierEaseInOut$2}=commonVariables$m;function iconSwitchTransition({originalTransform:e="",left:n=0,top:t=0,transition:o=`all .3s ${cubicBezierEaseInOut$2} !important`}={}){return[c$1("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:n,top:t,opacity:0}),c$1("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:n,top:t,opacity:1}),c$1("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:t,transition:o})]}const style$f=c$1([c$1("@keyframes loading-container-rotate",`
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
 `,[iconSwitchTransition({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),exposedLoadingProps={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},NBaseLoading=defineComponent({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},exposedLoadingProps),setup(e){useStyle("-base-loading",style$f,toRef(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:n,strokeWidth:t,stroke:o,scale:r}=this,i=n/r;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(NIconSwitchTransition,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("div",{class:`${e}-base-loading__container-layer`},h("div",{class:`${e}-base-loading__container-layer-left`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),h("div",{class:`${e}-base-loading__container-layer-patch`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),h("div",{class:`${e}-base-loading__container-layer-right`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});function toArray(e){return Array.isArray(e)?e:[e]}const TRAVERSE_COMMAND={STOP:"STOP"};function traverseWithCb(e,n){const t=n(e);e.children!==void 0&&t!==TRAVERSE_COMMAND.STOP&&e.children.forEach(o=>traverseWithCb(o,n))}function getNonLeafKeys(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?a=>{a.isLeaf||(o.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),o}function isLeaf(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function defaultGetChildren(e){return e.children}function defaultGetKey(e){return e.key}function isIgnored(){return!1}function isShallowLoaded(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function isDisabled(e){return e.disabled===!0}function isExpilicitlyNotLoaded(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function unwrapCheckedKeys(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function unwrapIndeterminateKeys(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function merge(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function minus(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function isGroup(e){return(e==null?void 0:e.type)==="group"}class SubtreeNotLoadedError extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function getExtendedCheckedKeySetAfterCheck(e,n,t,o){return getExtendedCheckedKeySet(n.concat(e),t,o,!1)}function getAvailableAscendantNodeSet(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function getExtendedCheckedKeySetAfterUncheck(e,n,t,o){const r=getExtendedCheckedKeySet(n,t,o,!1),i=getExtendedCheckedKeySet(e,t,o,!0),a=getAvailableAscendantNodeSet(e,t),s=[];return r.forEach(l=>{(i.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function getCheckedKeys(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:l,allowNotLoaded:d}=e;if(!a)return o!==void 0?{checkedKeys:merge(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:minus(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:f}=n;let m;r!==void 0?m=getExtendedCheckedKeySetAfterUncheck(r,t,n,d):o!==void 0?m=getExtendedCheckedKeySetAfterCheck(o,t,n,d):m=getExtendedCheckedKeySet(t,n,d,!1);const b=l==="parent",C=l==="child"||s,g=m,S=new Set,w=Math.max.apply(null,Array.from(f.keys()));for(let v=w;v>=0;v-=1){const P=v===0,z=f.get(v);for(const A of z){if(A.isLeaf)continue;const{key:E,shallowLoaded:I}=A;if(C&&I&&A.children.forEach(O=>{!O.disabled&&!O.isLeaf&&O.shallowLoaded&&g.has(O.key)&&g.delete(O.key)}),A.disabled||!I)continue;let y=!0,k=!1,_=!0;for(const O of A.children){const Y=O.key;if(!O.disabled){if(_&&(_=!1),g.has(Y))k=!0;else if(S.has(Y)){k=!0,y=!1;break}else if(y=!1,k)break}}y&&!_?(b&&A.children.forEach(O=>{!O.disabled&&g.has(O.key)&&g.delete(O.key)}),g.add(E)):k&&S.add(E),P&&C&&g.has(E)&&g.delete(E)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(S)}}function getExtendedCheckedKeySet(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,a=new Set,s=new Set(e);return e.forEach(l=>{const d=r.get(l);d!==void 0&&traverseWithCb(d,f=>{if(f.disabled)return TRAVERSE_COMMAND.STOP;const{key:m}=f;if(!a.has(m)&&(a.add(m),s.add(m),isExpilicitlyNotLoaded(f.rawNode,i))){if(o)return TRAVERSE_COMMAND.STOP;if(!t)throw new SubtreeNotLoadedError}})}),s}function getPath(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(n||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function getFirstAvailableNode(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function rawGetNext(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function move(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?rawGetPrev:rawGetNext,i={reverse:n==="prev"};let a=!1,s=null;function l(d){if(d!==null){if(d===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!d.disabled||o)&&!d.ignored&&!d.isGroup){s=d;return}if(d.isGroup){const f=getChild(d,i);f!==null?s=f:l(r(d,t))}else{const f=r(d,!1);if(f!==null)l(f);else{const m=rawGetParent(d);m!=null&&m.isGroup?l(r(m,t)):t&&l(r(d,!0))}}}}return l(e),s}function rawGetPrev(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function rawGetParent(e){return e.parent}function getChild(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,a=t?-1:r,s=t?-1:1;for(let l=i;l!==a;l+=s){const d=o[l];if(!d.disabled&&!d.ignored)if(d.isGroup){const f=getChild(d,n);if(f!==null)return f}else return d}}return null}const moveMethods={getChild(){return this.ignored?null:getChild(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return move(this,"next",e)},getPrev(e={}){return move(this,"prev",e)}};function flatten(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),o}function contains(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function createTreeNodes(e,n,t,o,r,i=null,a=0){const s=[];return e.forEach((l,d)=>{var f;const m=Object.create(o);if(m.rawNode=l,m.siblings=s,m.level=a,m.index=d,m.isFirstChild=d===0,m.isLastChild=d+1===e.length,m.parent=i,!m.ignored){const b=r(l);Array.isArray(b)&&(m.children=createTreeNodes(b,n,t,o,r,m,a+1))}s.push(m),n.set(m.key,m),t.has(a)||t.set(a,[]),(f=t.get(a))===null||f===void 0||f.push(m)}),s}function createTreeMate(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=isDisabled,getIgnored:a=isIgnored,getIsGroup:s=isGroup,getKey:l=defaultGetKey}=n,d=(t=n.getChildren)!==null&&t!==void 0?t:defaultGetChildren,f=n.ignoreEmptyChildren?A=>{const E=d(A);return Array.isArray(E)?E.length?E:null:E}:d,m=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return isLeaf(this.rawNode,f)},get shallowLoaded(){return isShallowLoaded(this.rawNode,f)},get ignored(){return a(this.rawNode)},contains(A){return contains(this,A)}},moveMethods),b=createTreeNodes(e,o,r,m,f);function C(A){if(A==null)return null;const E=o.get(A);return E&&!E.isGroup&&!E.ignored?E:null}function g(A){if(A==null)return null;const E=o.get(A);return E&&!E.ignored?E:null}function S(A,E){const I=g(A);return I?I.getPrev(E):null}function w(A,E){const I=g(A);return I?I.getNext(E):null}function v(A){const E=g(A);return E?E.getParent():null}function P(A){const E=g(A);return E?E.getChild():null}const z={treeNodes:b,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:f,getFlattenedNodes(A){return flatten(b,A)},getNode:C,getPrev:S,getNext:w,getParent:v,getChild:P,getFirstAvailableNode(){return getFirstAvailableNode(b)},getPath(A,E={}){return getPath(A,E,z)},getCheckedKeys(A,E={}){const{cascade:I=!0,leafOnly:y=!1,checkStrategy:k="all",allowNotLoaded:_=!1}=E;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(A),indeterminateKeys:unwrapIndeterminateKeys(A),cascade:I,leafOnly:y,checkStrategy:k,allowNotLoaded:_},z)},check(A,E,I={}){const{cascade:y=!0,leafOnly:k=!1,checkStrategy:_="all",allowNotLoaded:O=!1}=I;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(E),indeterminateKeys:unwrapIndeterminateKeys(E),keysToCheck:A==null?[]:toArray(A),cascade:y,leafOnly:k,checkStrategy:_,allowNotLoaded:O},z)},uncheck(A,E,I={}){const{cascade:y=!0,leafOnly:k=!1,checkStrategy:_="all",allowNotLoaded:O=!1}=I;return getCheckedKeys({checkedKeys:unwrapCheckedKeys(E),indeterminateKeys:unwrapIndeterminateKeys(E),keysToUncheck:A==null?[]:toArray(A),cascade:y,leafOnly:k,checkStrategy:_,allowNotLoaded:O},z)},getNonLeafKeys(A={}){return getNonLeafKeys(b,A)}};return z}const base$1={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},baseBackgroundRgb$1=rgba(base$1.neutralBase),baseInvertBackgroundRgb$1=rgba(base$1.neutralInvertBase),overlayPrefix$1="rgba("+baseInvertBackgroundRgb$1.slice(0,3).join(", ")+", ";function overlay$1(e){return overlayPrefix$1+String(e)+")"}function neutral$1(e){const n=Array.from(baseInvertBackgroundRgb$1);return n[3]=Number(e),composite(baseBackgroundRgb$1,n)}const derived$1=Object.assign(Object.assign({name:"common"},commonVariables$m),{baseColor:base$1.neutralBase,primaryColor:base$1.primaryDefault,primaryColorHover:base$1.primaryHover,primaryColorPressed:base$1.primaryActive,primaryColorSuppl:base$1.primarySuppl,infoColor:base$1.infoDefault,infoColorHover:base$1.infoHover,infoColorPressed:base$1.infoActive,infoColorSuppl:base$1.infoSuppl,successColor:base$1.successDefault,successColorHover:base$1.successHover,successColorPressed:base$1.successActive,successColorSuppl:base$1.successSuppl,warningColor:base$1.warningDefault,warningColorHover:base$1.warningHover,warningColorPressed:base$1.warningActive,warningColorSuppl:base$1.warningSuppl,errorColor:base$1.errorDefault,errorColorHover:base$1.errorHover,errorColorPressed:base$1.errorActive,errorColorSuppl:base$1.errorSuppl,textColorBase:base$1.neutralTextBase,textColor1:overlay$1(base$1.alpha1),textColor2:overlay$1(base$1.alpha2),textColor3:overlay$1(base$1.alpha3),textColorDisabled:overlay$1(base$1.alpha4),placeholderColor:overlay$1(base$1.alpha4),placeholderColorDisabled:overlay$1(base$1.alpha5),iconColor:overlay$1(base$1.alpha4),iconColorDisabled:overlay$1(base$1.alpha5),iconColorHover:overlay$1(Number(base$1.alpha4)*1.25),iconColorPressed:overlay$1(Number(base$1.alpha4)*.8),opacity1:base$1.alpha1,opacity2:base$1.alpha2,opacity3:base$1.alpha3,opacity4:base$1.alpha4,opacity5:base$1.alpha5,dividerColor:overlay$1(base$1.alphaDivider),borderColor:overlay$1(base$1.alphaBorder),closeIconColorHover:overlay$1(Number(base$1.alphaClose)),closeIconColor:overlay$1(Number(base$1.alphaClose)),closeIconColorPressed:overlay$1(Number(base$1.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:overlay$1(base$1.alpha4),clearColorHover:scaleColor(overlay$1(base$1.alpha4),{alpha:1.25}),clearColorPressed:scaleColor(overlay$1(base$1.alpha4),{alpha:.8}),scrollbarColor:overlay$1(base$1.alphaScrollbar),scrollbarColorHover:overlay$1(base$1.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:overlay$1(base$1.alphaProgressRail),railColor:overlay$1(base$1.alphaRail),popoverColor:base$1.neutralPopover,tableColor:base$1.neutralCard,cardColor:base$1.neutralCard,modalColor:base$1.neutralModal,bodyColor:base$1.neutralBody,tagColor:neutral$1(base$1.alphaTag),avatarColor:overlay$1(base$1.alphaAvatar),invertedColor:base$1.neutralBase,inputColor:overlay$1(base$1.alphaInput),codeColor:overlay$1(base$1.alphaCode),tabColor:overlay$1(base$1.alphaTab),actionColor:overlay$1(base$1.alphaAction),tableHeaderColor:overlay$1(base$1.alphaAction),hoverColor:overlay$1(base$1.alphaPending),tableColorHover:overlay$1(base$1.alphaTablePending),tableColorStriped:overlay$1(base$1.alphaTableStriped),pressedColor:overlay$1(base$1.alphaPressed),opacityDisabled:base$1.alphaDisabled,inputColorDisabled:overlay$1(base$1.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),commonDark=derived$1,base={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},baseBackgroundRgb=rgba(base.neutralBase),baseInvertBackgroundRgb=rgba(base.neutralInvertBase),overlayPrefix="rgba("+baseInvertBackgroundRgb.slice(0,3).join(", ")+", ";function overlay(e){return overlayPrefix+String(e)+")"}function neutral(e){const n=Array.from(baseInvertBackgroundRgb);return n[3]=Number(e),composite(baseBackgroundRgb,n)}const derived=Object.assign(Object.assign({name:"common"},commonVariables$m),{baseColor:base.neutralBase,primaryColor:base.primaryDefault,primaryColorHover:base.primaryHover,primaryColorPressed:base.primaryActive,primaryColorSuppl:base.primarySuppl,infoColor:base.infoDefault,infoColorHover:base.infoHover,infoColorPressed:base.infoActive,infoColorSuppl:base.infoSuppl,successColor:base.successDefault,successColorHover:base.successHover,successColorPressed:base.successActive,successColorSuppl:base.successSuppl,warningColor:base.warningDefault,warningColorHover:base.warningHover,warningColorPressed:base.warningActive,warningColorSuppl:base.warningSuppl,errorColor:base.errorDefault,errorColorHover:base.errorHover,errorColorPressed:base.errorActive,errorColorSuppl:base.errorSuppl,textColorBase:base.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:neutral(base.alpha4),placeholderColor:neutral(base.alpha4),placeholderColorDisabled:neutral(base.alpha5),iconColor:neutral(base.alpha4),iconColorHover:scaleColor(neutral(base.alpha4),{lightness:.75}),iconColorPressed:scaleColor(neutral(base.alpha4),{lightness:.9}),iconColorDisabled:neutral(base.alpha5),opacity1:base.alpha1,opacity2:base.alpha2,opacity3:base.alpha3,opacity4:base.alpha4,opacity5:base.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:neutral(Number(base.alphaClose)),closeIconColorHover:neutral(Number(base.alphaClose)),closeIconColorPressed:neutral(Number(base.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:neutral(base.alpha4),clearColorHover:scaleColor(neutral(base.alpha4),{lightness:.75}),clearColorPressed:scaleColor(neutral(base.alpha4),{lightness:.9}),scrollbarColor:overlay(base.alphaScrollbar),scrollbarColorHover:overlay(base.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:neutral(base.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:base.neutralPopover,tableColor:base.neutralCard,cardColor:base.neutralCard,modalColor:base.neutralModal,bodyColor:base.neutralBody,tagColor:"#eee",avatarColor:neutral(base.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:neutral(base.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:base.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),commonLight=derived,commonVars$c={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},self$R=e=>{const{textColorDisabled:n,iconColor:t,textColor2:o,fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s}=e;return Object.assign(Object.assign({},commonVars$c),{fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s,textColor:n,iconColor:t,extraTextColor:o})},emptyLight={name:"Empty",common:commonLight,self:self$R},emptyLight$1=emptyLight,emptyDark={name:"Empty",common:commonDark,self:self$R},emptyDark$1=emptyDark,style$e=cB("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[cE("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[c$1("+",[cE("description",`
 margin-top: 8px;
 `)])]),cE("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),cE("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),emptyProps=Object.assign(Object.assign({},useTheme.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),__unplugin_components_12=defineComponent({name:"Empty",props:emptyProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Empty","-empty",style$e,emptyLight$1,e,n),{localeRef:r}=useLocale("Empty"),i=inject(configProviderInjectionKey,null),a=computed(()=>{var f,m,b;return(f=e.description)!==null&&f!==void 0?f:(b=(m=i==null?void 0:i.mergedComponentPropsRef.value)===null||m===void 0?void 0:m.Empty)===null||b===void 0?void 0:b.description}),s=computed(()=>{var f,m;return((m=(f=i==null?void 0:i.mergedComponentPropsRef.value)===null||f===void 0?void 0:f.Empty)===null||m===void 0?void 0:m.renderIcon)||(()=>h(EmptyIcon,null))}),l=computed(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:m},self:{[createKey("iconSize",f)]:b,[createKey("fontSize",f)]:C,textColor:g,iconColor:S,extraTextColor:w}}=o.value;return{"--n-icon-size":b,"--n-font-size":C,"--n-bezier":m,"--n-text-color":g,"--n-icon-color":S,"--n-extra-text-color":w}}),d=t?useThemeClass("empty",computed(()=>{let f="";const{size:m}=e;return f+=m[0],f}),l,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:s,localizedDescription:computed(()=>a.value||r.value.description),cssVars:t?void 0:l,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),h("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?h("div",{class:`${n}-empty__icon`},e.icon?e.icon():h(NBaseIcon,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?h("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?h("div",{class:`${n}-empty__extra`},e.extra()):null)}}),self$Q=e=>{const{scrollbarColor:n,scrollbarColorHover:t}=e;return{color:n,colorHover:t}},scrollbarLight={name:"Scrollbar",common:commonLight,self:self$Q},scrollbarLight$1=scrollbarLight,scrollbarDark={name:"Scrollbar",common:commonDark,self:self$Q},scrollbarDark$1=scrollbarDark,{cubicBezierEaseInOut:cubicBezierEaseInOut$1}=commonVariables$m;function fadeInTransition({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:o=cubicBezierEaseInOut$1,leaveCubicBezier:r=cubicBezierEaseInOut$1}={}){return[c$1(`&.${e}-transition-enter-active`,{transition:`all ${n} ${o}!important`}),c$1(`&.${e}-transition-leave-active`,{transition:`all ${t} ${r}!important`}),c$1(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),c$1(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const style$d=cB("scrollbar",`
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
 `,[fadeInTransition(),c$1("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),scrollbarProps=Object.assign(Object.assign({},useTheme.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Scrollbar=defineComponent({name:"Scrollbar",props:scrollbarProps,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:o}=useConfig(e),r=useRtl("Scrollbar",o,n),i=ref(null),a=ref(null),s=ref(null),l=ref(null),d=ref(null),f=ref(null),m=ref(null),b=ref(null),C=ref(null),g=ref(null),S=ref(null),w=ref(0),v=ref(0),P=ref(!1),z=ref(!1);let A=!1,E=!1,I,y,k=0,_=0,O=0,Y=0;const B=useIsIos(),ee=computed(()=>{const{value:K}=b,{value:ae}=f,{value:ce}=g;return K===null||ae===null||ce===null?0:Math.min(K,ce*K/ae+e.size*1.5)}),N=computed(()=>`${ee.value}px`),L=computed(()=>{const{value:K}=C,{value:ae}=m,{value:ce}=S;return K===null||ae===null||ce===null?0:ce*K/ae+e.size*1.5}),te=computed(()=>`${L.value}px`),j=computed(()=>{const{value:K}=b,{value:ae}=w,{value:ce}=f,{value:ve}=g;if(K===null||ce===null||ve===null)return 0;{const ke=ce-K;return ke?ae/ke*(ve-ee.value):0}}),ne=computed(()=>`${j.value}px`),$=computed(()=>{const{value:K}=C,{value:ae}=v,{value:ce}=m,{value:ve}=S;if(K===null||ce===null||ve===null)return 0;{const ke=ce-K;return ke?ae/ke*(ve-L.value):0}}),W=computed(()=>`${$.value}px`),pe=computed(()=>{const{value:K}=b,{value:ae}=f;return K!==null&&ae!==null&&ae>K}),Te=computed(()=>{const{value:K}=C,{value:ae}=m;return K!==null&&ae!==null&&ae>K}),Be=computed(()=>{const{trigger:K}=e;return K==="none"||P.value}),xe=computed(()=>{const{trigger:K}=e;return K==="none"||z.value}),we=computed(()=>{const{container:K}=e;return K?K():a.value}),fe=computed(()=>{const{content:K}=e;return K?K():s.value}),ue=useReactivated(()=>{e.container||Le({top:w.value,left:v.value})}),je=()=>{ue.isDeactivated||X()},he=K=>{if(ue.isDeactivated)return;const{onResize:ae}=e;ae&&ae(K),X()},Le=(K,ae)=>{if(!e.scrollable)return;if(typeof K=="number"){We(ae!=null?ae:0,K,0,!1,"auto");return}const{left:ce,top:ve,index:ke,elSize:Oe,position:ze,behavior:Pe,el:Ke,debounce:Me=!0}=K;(ce!==void 0||ve!==void 0)&&We(ce!=null?ce:0,ve!=null?ve:0,0,!1,Pe),Ke!==void 0?We(0,Ke.offsetTop,Ke.offsetHeight,Me,Pe):ke!==void 0&&Oe!==void 0?We(0,ke*Oe,Oe,Me,Pe):ze==="bottom"?We(0,Number.MAX_SAFE_INTEGER,0,!1,Pe):ze==="top"&&We(0,0,0,!1,Pe)},Ae=(K,ae)=>{if(!e.scrollable)return;const{value:ce}=we;!ce||(typeof K=="object"?ce.scrollBy(K):ce.scrollBy(K,ae||0))};function We(K,ae,ce,ve,ke){const{value:Oe}=we;if(!!Oe){if(ve){const{scrollTop:ze,offsetHeight:Pe}=Oe;if(ae>ze){ae+ce<=ze+Pe||Oe.scrollTo({left:K,top:ae+ce-Pe,behavior:ke});return}}Oe.scrollTo({left:K,top:ae,behavior:ke})}}function T(){Q(),ie(),X()}function D(){H()}function H(){q(),U()}function q(){y!==void 0&&window.clearTimeout(y),y=window.setTimeout(()=>{z.value=!1},e.duration)}function U(){I!==void 0&&window.clearTimeout(I),I=window.setTimeout(()=>{P.value=!1},e.duration)}function Q(){I!==void 0&&window.clearTimeout(I),P.value=!0}function ie(){y!==void 0&&window.clearTimeout(y),z.value=!0}function V(K){const{onScroll:ae}=e;ae&&ae(K),Z()}function Z(){const{value:K}=we;K&&(w.value=K.scrollTop,v.value=K.scrollLeft*(r!=null&&r.value?-1:1))}function J(){const{value:K}=fe;K&&(f.value=K.offsetHeight,m.value=K.offsetWidth);const{value:ae}=we;ae&&(b.value=ae.offsetHeight,C.value=ae.offsetWidth);const{value:ce}=d,{value:ve}=l;ce&&(S.value=ce.offsetWidth),ve&&(g.value=ve.offsetHeight)}function le(){const{value:K}=we;K&&(w.value=K.scrollTop,v.value=K.scrollLeft*(r!=null&&r.value?-1:1),b.value=K.offsetHeight,C.value=K.offsetWidth,f.value=K.scrollHeight,m.value=K.scrollWidth);const{value:ae}=d,{value:ce}=l;ae&&(S.value=ae.offsetWidth),ce&&(g.value=ce.offsetHeight)}function X(){!e.scrollable||(e.useUnifiedContainer?le():(J(),Z()))}function oe(K){var ae;return!(!((ae=i.value)===null||ae===void 0)&&ae.contains(getPreciseEventTarget(K)))}function se(K){K.preventDefault(),K.stopPropagation(),E=!0,on("mousemove",window,me,!0),on("mouseup",window,ye,!0),_=v.value,O=r!=null&&r.value?window.innerWidth-K.clientX:K.clientX}function me(K){if(!E)return;I!==void 0&&window.clearTimeout(I),y!==void 0&&window.clearTimeout(y);const{value:ae}=C,{value:ce}=m,{value:ve}=L;if(ae===null||ce===null)return;const Oe=(r!=null&&r.value?window.innerWidth-K.clientX-O:K.clientX-O)*(ce-ae)/(ae-ve),ze=ce-ae;let Pe=_+Oe;Pe=Math.min(ze,Pe),Pe=Math.max(Pe,0);const{value:Ke}=we;if(Ke){Ke.scrollLeft=Pe*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:Me}=e;Me&&Me(Pe)}}function ye(K){K.preventDefault(),K.stopPropagation(),off("mousemove",window,me,!0),off("mouseup",window,ye,!0),E=!1,X(),oe(K)&&H()}function ge(K){K.preventDefault(),K.stopPropagation(),A=!0,on("mousemove",window,be,!0),on("mouseup",window,He,!0),k=w.value,Y=K.clientY}function be(K){if(!A)return;I!==void 0&&window.clearTimeout(I),y!==void 0&&window.clearTimeout(y);const{value:ae}=b,{value:ce}=f,{value:ve}=ee;if(ae===null||ce===null)return;const Oe=(K.clientY-Y)*(ce-ae)/(ae-ve),ze=ce-ae;let Pe=k+Oe;Pe=Math.min(ze,Pe),Pe=Math.max(Pe,0);const{value:Ke}=we;Ke&&(Ke.scrollTop=Pe)}function He(K){K.preventDefault(),K.stopPropagation(),off("mousemove",window,be,!0),off("mouseup",window,He,!0),A=!1,X(),oe(K)&&H()}watchEffect(()=>{const{value:K}=Te,{value:ae}=pe,{value:ce}=n,{value:ve}=d,{value:ke}=l;ve&&(K?ve.classList.remove(`${ce}-scrollbar-rail--disabled`):ve.classList.add(`${ce}-scrollbar-rail--disabled`)),ke&&(ae?ke.classList.remove(`${ce}-scrollbar-rail--disabled`):ke.classList.add(`${ce}-scrollbar-rail--disabled`))}),onMounted(()=>{e.container||X()}),onBeforeUnmount(()=>{I!==void 0&&window.clearTimeout(I),y!==void 0&&window.clearTimeout(y),off("mousemove",window,be,!0),off("mouseup",window,He,!0)});const qe=useTheme("Scrollbar","-scrollbar",style$d,scrollbarLight$1,e,n),Ye=computed(()=>{const{common:{cubicBezierEaseInOut:K,scrollbarBorderRadius:ae,scrollbarHeight:ce,scrollbarWidth:ve},self:{color:ke,colorHover:Oe}}=qe.value;return{"--n-scrollbar-bezier":K,"--n-scrollbar-color":ke,"--n-scrollbar-color-hover":Oe,"--n-scrollbar-border-radius":ae,"--n-scrollbar-width":ve,"--n-scrollbar-height":ce}}),Ve=t?useThemeClass("scrollbar",void 0,Ye,e):void 0;return Object.assign(Object.assign({},{scrollTo:Le,scrollBy:Ae,sync:X,syncUnifiedContainer:le,handleMouseEnterWrapper:T,handleMouseLeaveWrapper:D}),{mergedClsPrefix:n,rtlEnabled:r,containerScrollTop:w,wrapperRef:i,containerRef:a,contentRef:s,yRailRef:l,xRailRef:d,needYBar:pe,needXBar:Te,yBarSizePx:N,xBarSizePx:te,yBarTopPx:ne,xBarLeftPx:W,isShowXBar:Be,isShowYBar:xe,isIos:B,handleScroll:V,handleContentResize:je,handleContainerResize:he,handleYScrollMouseDown:ge,handleXScrollMouseDown:se,cssVars:t?void 0:Ye,themeClass:Ve==null?void 0:Ve.themeClass,onRender:Ve==null?void 0:Ve.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:o,rtlEnabled:r,internalHoistYRail:i}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",s=()=>h("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},h(a?Wrapper:Transition,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?h("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),l=()=>{var f,m;return(f=this.onRender)===null||f===void 0||f.call(this),h("div",mergeProps(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,r&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:o?void 0:this.handleMouseEnterWrapper,onMouseleave:o?void 0:this.handleMouseLeaveWrapper}),[this.container?(m=n.default)===null||m===void 0?void 0:m.call(n):h("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},h(VResizeObserver,{onResize:this.handleContentResize},{default:()=>h("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:s(),this.xScrollable&&h("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},h(a?Wrapper:Transition,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?h("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},d=this.container?l():h(VResizeObserver,{onResize:this.handleContainerResize},{default:l});return i?h(Fragment,null,d,s()):d}}),NScrollbar=Scrollbar,XScrollbar=Scrollbar,commonVariables$l={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},self$P=e=>{const{borderRadius:n,popoverColor:t,textColor3:o,dividerColor:r,textColor2:i,primaryColorPressed:a,textColorDisabled:s,primaryColor:l,opacityDisabled:d,hoverColor:f,fontSizeSmall:m,fontSizeMedium:b,fontSizeLarge:C,fontSizeHuge:g,heightSmall:S,heightMedium:w,heightLarge:v,heightHuge:P}=e;return Object.assign(Object.assign({},commonVariables$l),{optionFontSizeSmall:m,optionFontSizeMedium:b,optionFontSizeLarge:C,optionFontSizeHuge:g,optionHeightSmall:S,optionHeightMedium:w,optionHeightLarge:v,optionHeightHuge:P,borderRadius:n,color:t,groupHeaderTextColor:o,actionDividerColor:r,optionTextColor:i,optionTextColorPressed:a,optionTextColorDisabled:s,optionTextColorActive:l,optionOpacityDisabled:d,optionCheckColor:l,optionColorPending:f,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:f,actionTextColor:i,loadingColor:l})},internalSelectMenuDark={name:"InternalSelectMenu",common:commonDark,peers:{Scrollbar:scrollbarDark$1,Empty:emptyDark$1},self:self$P},internalSelectMenuDark$1=internalSelectMenuDark,{cubicBezierEaseIn,cubicBezierEaseOut}=commonVariables$m;function fadeInScaleUpTransition({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:o="",originalTransition:r=""}={}){return[c$1("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${cubicBezierEaseIn}, transform ${n} ${cubicBezierEaseIn} ${r&&","+r}`}),c$1("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${cubicBezierEaseOut}, transform ${n} ${cubicBezierEaseOut} ${r&&","+r}`}),c$1("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${t})`}),c$1("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const style$c=cB("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),NBaseWave=defineComponent({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){useStyle("-base-wave",style$c,toRef(e,"clsPrefix"));const n=ref(null),t=ref(!1);let o=null;return onBeforeUnmount(()=>{o!==null&&window.clearTimeout(o)}),{active:t,selfRef:n,play(){o!==null&&(window.clearTimeout(o),t.value=!1,o=null),nextTick(()=>{var r;(r=n.value)===null||r===void 0||r.offsetHeight,t.value=!0,o=window.setTimeout(()=>{t.value=!1,o=null},1e3)})}}},render(){const{clsPrefix:e}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),commonVariables$k={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},self$O=e=>{const{boxShadow2:n,popoverColor:t,textColor2:o,borderRadius:r,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},commonVariables$k),{fontSize:i,borderRadius:r,color:t,dividerColor:a,textColor:o,boxShadow:n})},popoverLight={name:"Popover",common:commonLight,self:self$O},popoverLight$1=popoverLight,popoverDark={name:"Popover",common:commonDark,self:self$O},popoverDark$1=popoverDark,oppositePlacement={top:"bottom",bottom:"top",left:"right",right:"left"},arrowSize="var(--n-arrow-height) * 1.414",style$b=c$1([cB("popover",`
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
 `,[cB("popover-arrow",n)])])])}const popoverBodyProps=Object.assign(Object.assign({},useTheme.props),{to:useAdjustedTo.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),renderArrow=({arrowStyle:e,clsPrefix:n})=>h("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},h("div",{class:`${n}-popover-arrow`,style:e})),NPopoverBody=defineComponent({name:"PopoverBody",inheritAttrs:!1,props:popoverBodyProps,setup(e,{slots:n,attrs:t}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i}=useConfig(e),a=useTheme("Popover","-popover",style$b,popoverLight$1,e,r),s=ref(null),l=inject("NPopover"),d=ref(null),f=ref(e.show),m=ref(!1);watchEffect(()=>{const{show:y}=e;y&&!isJsdom()&&!e.internalDeactivateImmediately&&(m.value=!0)});const b=computed(()=>{const{trigger:y,onClickoutside:k}=e,_=[],{positionManuallyRef:{value:O}}=l;return O||(y==="click"&&!k&&_.push([clickoutside$1,A,void 0,{capture:!0}]),y==="hover"&&_.push([mousemoveoutside$1,z])),k&&_.push([clickoutside$1,A,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&m.value)&&_.push([vShow,e.show]),_}),C=computed(()=>{const y=e.width==="trigger"?void 0:formatLength(e.width),k=[];y&&k.push({width:y});const{maxWidth:_,minWidth:O}=e;return _&&k.push({maxWidth:formatLength(_)}),O&&k.push({maxWidth:formatLength(O)}),i||k.push(g.value),k}),g=computed(()=>{const{common:{cubicBezierEaseInOut:y,cubicBezierEaseIn:k,cubicBezierEaseOut:_},self:{space:O,spaceArrow:Y,padding:B,fontSize:ee,textColor:N,dividerColor:L,color:te,boxShadow:j,borderRadius:ne,arrowHeight:$,arrowOffset:W,arrowOffsetVertical:pe}}=a.value;return{"--n-box-shadow":j,"--n-bezier":y,"--n-bezier-ease-in":k,"--n-bezier-ease-out":_,"--n-font-size":ee,"--n-text-color":N,"--n-color":te,"--n-divider-color":L,"--n-border-radius":ne,"--n-arrow-height":$,"--n-arrow-offset":W,"--n-arrow-offset-vertical":pe,"--n-padding":B,"--n-space":O,"--n-space-arrow":Y}}),S=i?useThemeClass("popover",void 0,g,e):void 0;l.setBodyInstance({syncPosition:w}),onBeforeUnmount(()=>{l.setBodyInstance(null)}),watch(toRef(e,"show"),y=>{e.animated||(y?f.value=!0:f.value=!1)});function w(){var y;(y=s.value)===null||y===void 0||y.syncPosition()}function v(y){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(y)}function P(y){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(y)}function z(y){e.trigger==="hover"&&!E().contains(getPreciseEventTarget(y))&&l.handleMouseMoveOutside(y)}function A(y){(e.trigger==="click"&&!E().contains(getPreciseEventTarget(y))||e.onClickoutside)&&l.handleClickOutside(y)}function E(){return l.getTriggerElement()}provide(popoverBodyInjectionKey,d),provide(drawerBodyInjectionKey,null),provide(modalBodyInjectionKey,null);function I(){if(S==null||S.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&m.value))return null;let k;const _=l.internalRenderBodyRef.value,{value:O}=r;if(_)k=_([`${O}-popover-shared`,S==null?void 0:S.themeClass.value,e.overlap&&`${O}-popover-shared--overlap`,e.showArrow&&`${O}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${O}-popover-shared--center-arrow`],d,C.value,v,P);else{const{value:Y}=l.extraClassRef,{internalTrapFocus:B}=e,ee=!isSlotEmpty(n.header)||!isSlotEmpty(n.footer),N=()=>{var L;const te=ee?h(Fragment,null,resolveWrappedSlot(n.header,$=>$?h("div",{class:`${O}-popover__header`,style:e.headerStyle},$):null),resolveWrappedSlot(n.default,$=>$?h("div",{class:`${O}-popover__content`,style:e.contentStyle},n):null),resolveWrappedSlot(n.footer,$=>$?h("div",{class:`${O}-popover__footer`,style:e.footerStyle},$):null)):e.scrollable?(L=n.default)===null||L===void 0?void 0:L.call(n):h("div",{class:`${O}-popover__content`,style:e.contentStyle},n),j=e.scrollable?h(XScrollbar,{contentClass:ee?void 0:`${O}-popover__content`,contentStyle:ee?void 0:e.contentStyle},{default:()=>te}):te,ne=e.showArrow?renderArrow({arrowStyle:e.arrowStyle,clsPrefix:O}):null;return[j,ne]};k=h("div",mergeProps({class:[`${O}-popover`,`${O}-popover-shared`,S==null?void 0:S.themeClass.value,Y.map(L=>`${O}-${L}`),{[`${O}-popover--scrollable`]:e.scrollable,[`${O}-popover--show-header-or-footer`]:ee,[`${O}-popover--raw`]:e.raw,[`${O}-popover-shared--overlap`]:e.overlap,[`${O}-popover-shared--show-arrow`]:e.showArrow,[`${O}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:d,style:C.value,onKeydown:l.handleKeydown,onMouseenter:v,onMouseleave:P},t),B?h(FocusTrap,{active:e.show,autoFocus:!0},{default:N}):N())}return withDirectives(k,b.value)}return{displayed:m,namespace:o,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:useAdjustedTo(e),followerEnabled:f,renderContentNode:I}},render(){return h(VFollower,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===useAdjustedTo.tdkey},{default:()=>this.animated?h(Transition,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),bodyPropKeys=Object.keys(popoverBodyProps),triggerEventMap={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function appendEvents(e,n,t){triggerEventMap[n].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],i=t[o];r?e.props[o]=(...a)=>{r(...a),i(...a)}:e.props[o]=i})}const textVNodeType=createTextVNode("").type,popoverBaseProps={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:useAdjustedTo.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},popoverProps=Object.assign(Object.assign(Object.assign({},useTheme.props),popoverBaseProps),{internalOnAfterLeave:Function,internalRenderBody:Function}),NPopover=defineComponent({name:"Popover",inheritAttrs:!1,props:popoverProps,__popover__:!0,setup(e){const n=isMounted(),t=ref(null),o=computed(()=>e.show),r=ref(e.defaultShow),i=useMergedState(o,r),a=useMemo(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:N}=e;return!!(N!=null&&N())},l=()=>s()?!1:i.value,d=useCompitable(e,["arrow","showArrow"]),f=computed(()=>e.overlap?!1:d.value);let m=null;const b=ref(null),C=ref(null),g=useMemo(()=>e.x!==void 0&&e.y!==void 0);function S(N){const{"onUpdate:show":L,onUpdateShow:te,onShow:j,onHide:ne}=e;r.value=N,L&&call(L,N),te&&call(te,N),N&&j&&call(j,!0),N&&ne&&call(ne,!1)}function w(){m&&m.syncPosition()}function v(){const{value:N}=b;N&&(window.clearTimeout(N),b.value=null)}function P(){const{value:N}=C;N&&(window.clearTimeout(N),C.value=null)}function z(){const N=s();if(e.trigger==="focus"&&!N){if(l())return;S(!0)}}function A(){const N=s();if(e.trigger==="focus"&&!N){if(!l())return;S(!1)}}function E(){const N=s();if(e.trigger==="hover"&&!N){if(P(),b.value!==null||l())return;const L=()=>{S(!0),b.value=null},{delay:te}=e;te===0?L():b.value=window.setTimeout(L,te)}}function I(){const N=s();if(e.trigger==="hover"&&!N){if(v(),C.value!==null||!l())return;const L=()=>{S(!1),C.value=null},{duration:te}=e;te===0?L():C.value=window.setTimeout(L,te)}}function y(){I()}function k(N){var L;!l()||(e.trigger==="click"&&(v(),P(),S(!1)),(L=e.onClickoutside)===null||L===void 0||L.call(e,N))}function _(){if(e.trigger==="click"&&!s()){v(),P();const N=!l();S(N)}}function O(N){!e.internalTrapFocus||N.key==="Escape"&&(v(),P(),S(!1))}function Y(N){r.value=N}function B(){var N;return(N=t.value)===null||N===void 0?void 0:N.targetRef}function ee(N){m=N}return provide("NPopover",{getTriggerElement:B,handleKeydown:O,handleMouseEnter:E,handleMouseLeave:I,handleClickOutside:k,handleMouseMoveOutside:y,setBodyInstance:ee,positionManuallyRef:g,isMountedRef:n,zIndexRef:toRef(e,"zIndex"),extraClassRef:toRef(e,"internalExtraClass"),internalRenderBodyRef:toRef(e,"internalRenderBody")}),watchEffect(()=>{i.value&&s()&&S(!1)}),{binderInstRef:t,positionManually:g,mergedShowConsideringDisabledProp:a,uncontrolledShow:r,mergedShowArrow:f,getMergedShow:l,setShow:Y,handleClick:_,handleMouseEnter:E,handleMouseLeave:I,handleFocus:z,handleBlur:A,syncPosition:w}},render(){var e;const{positionManually:n,$slots:t}=this;let o,r=!1;if(!n&&(t.activator?o=getFirstSlotVNode(t,"activator"):o=getFirstSlotVNode(t,"trigger"),o)){o=cloneVNode(o),o=o.type===textVNodeType?h("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,s=[i,...a],l={onBlur:d=>{s.forEach(f=>{f.onBlur(d)})},onFocus:d=>{s.forEach(f=>{f.onFocus(d)})},onClick:d=>{s.forEach(f=>{f.onClick(d)})},onMouseenter:d=>{s.forEach(f=>{f.onMouseenter(d)})},onMouseleave:d=>{s.forEach(f=>{f.onMouseleave(d)})}};appendEvents(o,a?"nested":n?"manual":this.trigger,l)}}return h(VBinder,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?withDirectives(h("div",{style:{position:"fixed",inset:0}}),[[zindexable$1,{enabled:i,zIndex:this.zIndex}]]):null,n?null:h(VTarget,null,{default:()=>o}),h(NPopoverBody,keep(this.$props,bodyPropKeys,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,s;return(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a)},header:()=>{var a,s;return(s=(a=this.$slots).header)===null||s===void 0?void 0:s.call(a)},footer:()=>{var a,s;return(s=(a=this.$slots).footer)===null||s===void 0?void 0:s.call(a)}})]}})}}),commonVariables$j={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},tagDark={name:"Tag",common:commonDark,self(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:d,borderColor:f,tagColor:m,opacityDisabled:b,closeIconColor:C,closeIconColorHover:g,closeIconColorPressed:S,closeColorHover:w,closeColorPressed:v,borderRadiusSmall:P,fontSizeMini:z,fontSizeTiny:A,fontSizeSmall:E,fontSizeMedium:I,heightMini:y,heightTiny:k,heightSmall:_,heightMedium:O,buttonColor2Hover:Y,buttonColor2Pressed:B,fontWeightStrong:ee}=e;return Object.assign(Object.assign({},commonVariables$j),{closeBorderRadius:P,heightTiny:y,heightSmall:k,heightMedium:_,heightLarge:O,borderRadius:P,opacityDisabled:b,fontSizeTiny:z,fontSizeSmall:A,fontSizeMedium:E,fontSizeLarge:I,fontWeightStrong:ee,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:Y,colorPressedCheckable:B,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${f}`,textColor:n,color:m,colorBordered:"#0000",closeIconColor:C,closeIconColorHover:g,closeIconColorPressed:S,closeColorHover:w,closeColorPressed:v,borderPrimary:`1px solid ${changeColor(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:changeColor(r,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:scaleColor(r,{lightness:.7}),closeIconColorHoverPrimary:scaleColor(r,{lightness:.7}),closeIconColorPressedPrimary:scaleColor(r,{lightness:.7}),closeColorHoverPrimary:changeColor(r,{alpha:.16}),closeColorPressedPrimary:changeColor(r,{alpha:.12}),borderInfo:`1px solid ${changeColor(i,{alpha:.3})}`,textColorInfo:i,colorInfo:changeColor(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:scaleColor(i,{alpha:.7}),closeIconColorHoverInfo:scaleColor(i,{alpha:.7}),closeIconColorPressedInfo:scaleColor(i,{alpha:.7}),closeColorHoverInfo:changeColor(i,{alpha:.16}),closeColorPressedInfo:changeColor(i,{alpha:.12}),borderSuccess:`1px solid ${changeColor(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:changeColor(a,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:scaleColor(a,{alpha:.7}),closeIconColorHoverSuccess:scaleColor(a,{alpha:.7}),closeIconColorPressedSuccess:scaleColor(a,{alpha:.7}),closeColorHoverSuccess:changeColor(a,{alpha:.16}),closeColorPressedSuccess:changeColor(a,{alpha:.12}),borderWarning:`1px solid ${changeColor(s,{alpha:.3})}`,textColorWarning:s,colorWarning:changeColor(s,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:scaleColor(s,{alpha:.7}),closeIconColorHoverWarning:scaleColor(s,{alpha:.7}),closeIconColorPressedWarning:scaleColor(s,{alpha:.7}),closeColorHoverWarning:changeColor(s,{alpha:.16}),closeColorPressedWarning:changeColor(s,{alpha:.11}),borderError:`1px solid ${changeColor(l,{alpha:.3})}`,textColorError:l,colorError:changeColor(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:scaleColor(l,{alpha:.7}),closeIconColorHoverError:scaleColor(l,{alpha:.7}),closeIconColorPressedError:scaleColor(l,{alpha:.7}),closeColorHoverError:changeColor(l,{alpha:.16}),closeColorPressedError:changeColor(l,{alpha:.12})})}},tagDark$1=tagDark,style$a=cB("base-clear",`
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
 `,[iconSwitchTransition({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),NBaseClear=defineComponent({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return useStyle("-base-clear",style$a,toRef(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-base-clear`},h(NIconSwitchTransition,null,{default:()=>{var n,t;return this.show?h("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},resolveSlot(this.$slots.icon,()=>[h(NBaseIcon,{clsPrefix:e},{default:()=>h(ClearIcon,null)})])):h("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(n=this.$slots).placeholder)===null||t===void 0?void 0:t.call(n))}}))}}),NBaseSuffix=defineComponent({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:t}=e;return h(NBaseLoading,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?h(NBaseClear,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>h(NBaseIcon,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>resolveSlot(n.default,()=>[h(ChevronDownIcon,null)])})}):null})}}}),commonVars$b={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},internalSelectionDark={name:"InternalSelection",common:commonDark,peers:{Popover:popoverDark$1},self(e){const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:d,errorColor:f,errorColorHover:m,iconColor:b,iconColorDisabled:C,clearColor:g,clearColorHover:S,clearColorPressed:w,placeholderColor:v,placeholderColorDisabled:P,fontSizeTiny:z,fontSizeSmall:A,fontSizeMedium:E,fontSizeLarge:I,heightTiny:y,heightSmall:k,heightMedium:_,heightLarge:O}=e;return Object.assign(Object.assign({},commonVars$b),{fontSizeTiny:z,fontSizeSmall:A,fontSizeMedium:E,fontSizeLarge:I,heightTiny:y,heightSmall:k,heightMedium:_,heightLarge:O,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:v,placeholderColorDisabled:P,color:r,colorDisabled:i,colorActive:changeColor(a,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${changeColor(a,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${changeColor(a,{alpha:.4})}`,caretColor:a,arrowColor:b,arrowColorDisabled:C,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${d}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${d}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${changeColor(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${changeColor(l,{alpha:.4})}`,colorActiveWarning:changeColor(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${m}`,borderActiveError:`1px solid ${f}`,borderFocusError:`1px solid ${m}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${changeColor(f,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${changeColor(f,{alpha:.4})}`,colorActiveError:changeColor(f,{alpha:.1}),caretColorError:f,clearColor:g,clearColorHover:S,clearColorPressed:w})}},internalSelectionDark$1=internalSelectionDark,{cubicBezierEaseInOut}=commonVariables$m;function fadeInWidthExpandTransition({duration:e=".2s",delay:n=".1s"}={}){return[c$1("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),c$1("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),c$1("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${cubicBezierEaseInOut},
 max-width ${e} ${cubicBezierEaseInOut} ${n},
 margin-left ${e} ${cubicBezierEaseInOut} ${n},
 margin-right ${e} ${cubicBezierEaseInOut} ${n};
 `),c$1("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${cubicBezierEaseInOut} ${n},
 max-width ${e} ${cubicBezierEaseInOut},
 margin-left ${e} ${cubicBezierEaseInOut},
 margin-right ${e} ${cubicBezierEaseInOut};
 `)]}const commonVars$a={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},alertDark={name:"Alert",common:commonDark,self(e){const{lineHeight:n,borderRadius:t,fontWeightStrong:o,dividerColor:r,inputColor:i,textColor1:a,textColor2:s,closeColorHover:l,closeColorPressed:d,closeIconColor:f,closeIconColorHover:m,closeIconColorPressed:b,infoColorSuppl:C,successColorSuppl:g,warningColorSuppl:S,errorColorSuppl:w,fontSize:v}=e;return Object.assign(Object.assign({},commonVars$a),{fontSize:v,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${r}`,color:i,titleTextColor:a,iconColor:s,contentTextColor:s,closeBorderRadius:t,closeColorHover:l,closeColorPressed:d,closeIconColor:f,closeIconColorHover:m,closeIconColorPressed:b,borderInfo:`1px solid ${changeColor(C,{alpha:.35})}`,colorInfo:changeColor(C,{alpha:.25}),titleTextColorInfo:a,iconColorInfo:C,contentTextColorInfo:s,closeColorHoverInfo:l,closeColorPressedInfo:d,closeIconColorInfo:f,closeIconColorHoverInfo:m,closeIconColorPressedInfo:b,borderSuccess:`1px solid ${changeColor(g,{alpha:.35})}`,colorSuccess:changeColor(g,{alpha:.25}),titleTextColorSuccess:a,iconColorSuccess:g,contentTextColorSuccess:s,closeColorHoverSuccess:l,closeColorPressedSuccess:d,closeIconColorSuccess:f,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:b,borderWarning:`1px solid ${changeColor(S,{alpha:.35})}`,colorWarning:changeColor(S,{alpha:.25}),titleTextColorWarning:a,iconColorWarning:S,contentTextColorWarning:s,closeColorHoverWarning:l,closeColorPressedWarning:d,closeIconColorWarning:f,closeIconColorHoverWarning:m,closeIconColorPressedWarning:b,borderError:`1px solid ${changeColor(w,{alpha:.35})}`,colorError:changeColor(w,{alpha:.25}),titleTextColorError:a,iconColorError:w,contentTextColorError:s,closeColorHoverError:l,closeColorPressedError:d,closeIconColorError:f,closeIconColorHoverError:m,closeIconColorPressedError:b})}},alertDark$1=alertDark,commonVars$9={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},self$N=e=>{const{borderRadius:n,railColor:t,primaryColor:o,primaryColorHover:r,primaryColorPressed:i,textColor2:a}=e;return Object.assign(Object.assign({},commonVars$9),{borderRadius:n,railColor:t,railColorActive:o,linkColor:changeColor(o,{alpha:.15}),linkTextColor:a,linkTextColorHover:r,linkTextColorPressed:i,linkTextColorActive:o})},anchorDark={name:"Anchor",common:commonDark,self:self$N},anchorDark$1=anchorDark,isChrome=isBrowser$2&&"chrome"in window;isBrowser$2&&navigator.userAgent.includes("Firefox");const isSafari=isBrowser$2&&navigator.userAgent.includes("Safari")&&!isChrome,commonVariables$i={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},inputDark={name:"Input",common:commonDark,self(e){const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,warningColor:l,warningColorHover:d,errorColor:f,errorColorHover:m,borderRadius:b,lineHeight:C,fontSizeTiny:g,fontSizeSmall:S,fontSizeMedium:w,fontSizeLarge:v,heightTiny:P,heightSmall:z,heightMedium:A,heightLarge:E,clearColor:I,clearColorHover:y,clearColorPressed:k,placeholderColor:_,placeholderColorDisabled:O,iconColor:Y,iconColorDisabled:B,iconColorHover:ee,iconColorPressed:N}=e;return Object.assign(Object.assign({},commonVariables$i),{countTextColorDisabled:o,countTextColor:t,heightTiny:P,heightSmall:z,heightMedium:A,heightLarge:E,fontSizeTiny:g,fontSizeSmall:S,fontSizeMedium:w,fontSizeLarge:v,lineHeight:C,lineHeightTextarea:C,borderRadius:b,iconSize:"16px",groupLabelColor:a,textColor:n,textColorDisabled:o,textDecorationColor:n,groupLabelTextColor:n,caretColor:r,placeholderColor:_,placeholderColorDisabled:O,color:a,colorDisabled:s,colorFocus:changeColor(r,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${changeColor(r,{alpha:.3})}`,loadingColor:r,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:changeColor(l,{alpha:.1}),borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 8px 0 ${changeColor(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:f,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${m}`,colorFocusError:changeColor(f,{alpha:.1}),borderFocusError:`1px solid ${m}`,boxShadowFocusError:`0 0 8px 0 ${changeColor(f,{alpha:.3})}`,caretColorError:f,clearColor:I,clearColorHover:y,clearColorPressed:k,iconColor:Y,iconColorDisabled:B,iconColorHover:ee,iconColorPressed:N,suffixTextColor:n})}},inputDark$1=inputDark,self$M=e=>{const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,borderColor:l,warningColor:d,warningColorHover:f,errorColor:m,errorColorHover:b,borderRadius:C,lineHeight:g,fontSizeTiny:S,fontSizeSmall:w,fontSizeMedium:v,fontSizeLarge:P,heightTiny:z,heightSmall:A,heightMedium:E,heightLarge:I,actionColor:y,clearColor:k,clearColorHover:_,clearColorPressed:O,placeholderColor:Y,placeholderColorDisabled:B,iconColor:ee,iconColorDisabled:N,iconColorHover:L,iconColorPressed:te}=e;return Object.assign(Object.assign({},commonVariables$i),{countTextColorDisabled:o,countTextColor:t,heightTiny:z,heightSmall:A,heightMedium:E,heightLarge:I,fontSizeTiny:S,fontSizeSmall:w,fontSizeMedium:v,fontSizeLarge:P,lineHeight:g,lineHeightTextarea:g,borderRadius:C,iconSize:"16px",groupLabelColor:y,groupLabelTextColor:n,textColor:n,textColorDisabled:o,textDecorationColor:n,caretColor:r,placeholderColor:Y,placeholderColorDisabled:B,color:a,colorDisabled:s,colorFocus:a,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${changeColor(r,{alpha:.2})}`,loadingColor:r,loadingColorWarning:d,borderWarning:`1px solid ${d}`,borderHoverWarning:`1px solid ${f}`,colorFocusWarning:a,borderFocusWarning:`1px solid ${f}`,boxShadowFocusWarning:`0 0 0 2px ${changeColor(d,{alpha:.2})}`,caretColorWarning:d,loadingColorError:m,borderError:`1px solid ${m}`,borderHoverError:`1px solid ${b}`,colorFocusError:a,borderFocusError:`1px solid ${b}`,boxShadowFocusError:`0 0 0 2px ${changeColor(m,{alpha:.2})}`,caretColorError:m,clearColor:k,clearColorHover:_,clearColorPressed:O,iconColor:ee,iconColorDisabled:N,iconColorHover:L,iconColorPressed:te,suffixTextColor:n})},inputLight={name:"Input",common:commonLight,self:self$M},inputLight$1=inputLight,inputInjectionKey="n-input";function len(e){let n=0;for(const t of e)n++;return n}function isEmptyInputValue(e){return e===""||e==null}function useCursor(e){const n=ref(null);function t(){const{value:i}=e;if(!(i!=null&&i.focus)){r();return}const{selectionStart:a,selectionEnd:s,value:l}=i;if(a==null||s==null){r();return}n.value={start:a,end:s,beforeText:l.slice(0,a),afterText:l.slice(s)}}function o(){var i;const{value:a}=n,{value:s}=e;if(!a||!s)return;const{value:l}=s,{start:d,beforeText:f,afterText:m}=a;let b=l.length;if(l.endsWith(m))b=l.length-m.length;else if(l.startsWith(f))b=f.length;else{const C=f[d-1],g=l.indexOf(C,d-1);g!==-1&&(b=g+1)}(i=s.setSelectionRange)===null||i===void 0||i.call(s,b,b)}function r(){n.value=null}return watch(e,r),{recordCursor:t,restoreCursor:o}}const WordCount=defineComponent({name:"InputWordCount",setup(e,{slots:n}){const{mergedValueRef:t,maxlengthRef:o,mergedClsPrefixRef:r,countGraphemesRef:i}=inject(inputInjectionKey),a=computed(()=>{const{value:s}=t;return s===null||Array.isArray(s)?0:(i.value||len)(s)});return()=>{const{value:s}=o,{value:l}=t;return h("span",{class:`${r.value}-input-word-count`},resolveSlotWithProps(n.default,{value:l===null||Array.isArray(l)?"":l},()=>[s===void 0?a.value:`${a.value} / ${s}`]))}}}),style$9=cB("input",`
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
 `)])]),inputProps=Object.assign(Object.assign({},useTheme.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),__unplugin_components_0=defineComponent({name:"Input",props:inputProps,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=useConfig(e),i=useTheme("Input","-input",style$9,inputLight$1,e,n);isSafari&&useStyle("-input-safari",safariStyle,n);const a=ref(null),s=ref(null),l=ref(null),d=ref(null),f=ref(null),m=ref(null),b=ref(null),C=useCursor(b),g=ref(null),{localeRef:S}=useLocale("Input"),w=ref(e.defaultValue),v=toRef(e,"value"),P=useMergedState(v,w),z=useFormItem(e),{mergedSizeRef:A,mergedDisabledRef:E,mergedStatusRef:I}=z,y=ref(!1),k=ref(!1),_=ref(!1),O=ref(!1);let Y=null;const B=computed(()=>{const{placeholder:R,pair:G}=e;return G?Array.isArray(R)?R:R===void 0?["",""]:[R,R]:R===void 0?[S.value.placeholder]:[R]}),ee=computed(()=>{const{value:R}=_,{value:G}=P,{value:de}=B;return!R&&(isEmptyInputValue(G)||Array.isArray(G)&&isEmptyInputValue(G[0]))&&de[0]}),N=computed(()=>{const{value:R}=_,{value:G}=P,{value:de}=B;return!R&&de[1]&&(isEmptyInputValue(G)||Array.isArray(G)&&isEmptyInputValue(G[1]))}),L=useMemo(()=>e.internalForceFocus||y.value),te=useMemo(()=>{if(E.value||e.readonly||!e.clearable||!L.value&&!k.value)return!1;const{value:R}=P,{value:G}=L;return e.pair?!!(Array.isArray(R)&&(R[0]||R[1]))&&(k.value||G):!!R&&(k.value||G)}),j=computed(()=>{const{showPasswordOn:R}=e;if(R)return R;if(e.showPasswordToggle)return"click"}),ne=ref(!1),$=computed(()=>{const{textDecoration:R}=e;return R?Array.isArray(R)?R.map(G=>({textDecoration:G})):[{textDecoration:R}]:["",""]}),W=ref(void 0),pe=()=>{var R,G;if(e.type==="textarea"){const{autosize:de}=e;if(de&&(W.value=(G=(R=g.value)===null||R===void 0?void 0:R.$el)===null||G===void 0?void 0:G.offsetWidth),!s.value||typeof de=="boolean")return;const{paddingTop:Se,paddingBottom:Re,lineHeight:De}=window.getComputedStyle(s.value),Xe=Number(Se.slice(0,-2)),Je=Number(Re.slice(0,-2)),Qe=Number(De.slice(0,-2)),{value:nn}=l;if(!nn)return;if(de.minRows){const tn=Math.max(de.minRows,1),ln=`${Xe+Je+Qe*tn}px`;nn.style.minHeight=ln}if(de.maxRows){const tn=`${Xe+Je+Qe*de.maxRows}px`;nn.style.maxHeight=tn}}},Te=computed(()=>{const{maxlength:R}=e;return R===void 0?void 0:Number(R)});onMounted(()=>{const{value:R}=P;Array.isArray(R)||ze(R)});const Be=getCurrentInstance().proxy;function xe(R){const{onUpdateValue:G,"onUpdate:value":de,onInput:Se}=e,{nTriggerFormInput:Re}=z;G&&call(G,R),de&&call(de,R),Se&&call(Se,R),w.value=R,Re()}function we(R){const{onChange:G}=e,{nTriggerFormChange:de}=z;G&&call(G,R),w.value=R,de()}function fe(R){const{onBlur:G}=e,{nTriggerFormBlur:de}=z;G&&call(G,R),de()}function ue(R){const{onFocus:G}=e,{nTriggerFormFocus:de}=z;G&&call(G,R),de()}function je(R){const{onClear:G}=e;G&&call(G,R)}function he(R){const{onInputBlur:G}=e;G&&call(G,R)}function Le(R){const{onInputFocus:G}=e;G&&call(G,R)}function Ae(){const{onDeactivate:R}=e;R&&call(R)}function We(){const{onActivate:R}=e;R&&call(R)}function T(R){const{onClick:G}=e;G&&call(G,R)}function D(R){const{onWrapperFocus:G}=e;G&&call(G,R)}function H(R){const{onWrapperBlur:G}=e;G&&call(G,R)}function q(){_.value=!0}function U(R){_.value=!1,R.target===m.value?Q(R,1):Q(R,0)}function Q(R,G=0,de="input"){const Se=R.target.value;if(ze(Se),R instanceof InputEvent&&!R.isComposing&&(_.value=!1),e.type==="textarea"){const{value:De}=g;De&&De.syncUnifiedContainer()}if(Y=Se,_.value)return;C.recordCursor();const Re=ie(Se);if(Re)if(!e.pair)de==="input"?xe(Se):we(Se);else{let{value:De}=P;Array.isArray(De)?De=[De[0],De[1]]:De=["",""],De[G]=Se,de==="input"?xe(De):we(De)}Be.$forceUpdate(),Re||nextTick(C.restoreCursor)}function ie(R){const{countGraphemes:G,maxlength:de,minlength:Se}=e;if(G){let De;if(de!==void 0&&(De===void 0&&(De=G(R)),De>Number(de))||Se!==void 0&&(De===void 0&&(De=G(R)),De<Number(de)))return!1}const{allowInput:Re}=e;return typeof Re=="function"?Re(R):!0}function V(R){he(R),R.relatedTarget===a.value&&Ae(),R.relatedTarget!==null&&(R.relatedTarget===f.value||R.relatedTarget===m.value||R.relatedTarget===s.value)||(O.value=!1),X(R,"blur"),b.value=null}function Z(R,G){Le(R),y.value=!0,O.value=!0,We(),X(R,"focus"),G===0?b.value=f.value:G===1?b.value=m.value:G===2&&(b.value=s.value)}function J(R){e.passivelyActivated&&(H(R),X(R,"blur"))}function le(R){e.passivelyActivated&&(y.value=!0,D(R),X(R,"focus"))}function X(R,G){R.relatedTarget!==null&&(R.relatedTarget===f.value||R.relatedTarget===m.value||R.relatedTarget===s.value||R.relatedTarget===a.value)||(G==="focus"?(ue(R),y.value=!0):G==="blur"&&(fe(R),y.value=!1))}function oe(R,G){Q(R,G,"change")}function se(R){T(R)}function me(R){je(R),e.pair?(xe(["",""]),we(["",""])):(xe(""),we(""))}function ye(R){const{onMousedown:G}=e;G&&G(R);const{tagName:de}=R.target;if(de!=="INPUT"&&de!=="TEXTAREA"){if(e.resizable){const{value:Se}=a;if(Se){const{left:Re,top:De,width:Xe,height:Je}=Se.getBoundingClientRect(),Qe=14;if(Re+Xe-Qe<R.clientX&&R.clientX<Re+Xe&&De+Je-Qe<R.clientY&&R.clientY<De+Je)return}}R.preventDefault(),y.value||K()}}function ge(){var R;k.value=!0,e.type==="textarea"&&((R=g.value)===null||R===void 0||R.handleMouseEnterWrapper())}function be(){var R;k.value=!1,e.type==="textarea"&&((R=g.value)===null||R===void 0||R.handleMouseLeaveWrapper())}function He(){E.value||j.value==="click"&&(ne.value=!ne.value)}function qe(R){if(E.value)return;R.preventDefault();const G=Se=>{Se.preventDefault(),off("mouseup",document,G)};if(on("mouseup",document,G),j.value!=="mousedown")return;ne.value=!0;const de=()=>{ne.value=!1,off("mouseup",document,de)};on("mouseup",document,de)}function Ye(R){var G;switch((G=e.onKeydown)===null||G===void 0||G.call(e,R),R.key){case"Escape":Ze();break;case"Enter":Ve(R);break}}function Ve(R){var G,de;if(e.passivelyActivated){const{value:Se}=O;if(Se){e.internalDeactivateOnEnter&&Ze();return}R.preventDefault(),e.type==="textarea"?(G=s.value)===null||G===void 0||G.focus():(de=f.value)===null||de===void 0||de.focus()}}function Ze(){e.passivelyActivated&&(O.value=!1,nextTick(()=>{var R;(R=a.value)===null||R===void 0||R.focus()}))}function K(){var R,G,de;E.value||(e.passivelyActivated?(R=a.value)===null||R===void 0||R.focus():((G=s.value)===null||G===void 0||G.focus(),(de=f.value)===null||de===void 0||de.focus()))}function ae(){var R;!((R=a.value)===null||R===void 0)&&R.contains(document.activeElement)&&document.activeElement.blur()}function ce(){var R,G;(R=s.value)===null||R===void 0||R.select(),(G=f.value)===null||G===void 0||G.select()}function ve(){E.value||(s.value?s.value.focus():f.value&&f.value.focus())}function ke(){const{value:R}=a;(R==null?void 0:R.contains(document.activeElement))&&R!==document.activeElement&&Ze()}function Oe(R){if(e.type==="textarea"){const{value:G}=s;G==null||G.scrollTo(R)}else{const{value:G}=f;G==null||G.scrollTo(R)}}function ze(R){const{type:G,pair:de,autosize:Se}=e;if(!de&&Se)if(G==="textarea"){const{value:Re}=l;Re&&(Re.textContent=(R!=null?R:"")+`\r
`)}else{const{value:Re}=d;Re&&(R?Re.textContent=R:Re.innerHTML="&nbsp;")}}function Pe(){pe()}const Ke=ref({top:"0"});function Me(R){var G;const{scrollTop:de}=R.target;Ke.value.top=`${-de}px`,(G=g.value)===null||G===void 0||G.syncUnifiedContainer()}let Ee=null;watchEffect(()=>{const{autosize:R,type:G}=e;R&&G==="textarea"?Ee=watch(P,de=>{!Array.isArray(de)&&de!==Y&&ze(de)}):Ee==null||Ee()});let Ue=null;watchEffect(()=>{e.type==="textarea"?Ue=watch(P,R=>{var G;!Array.isArray(R)&&R!==Y&&((G=g.value)===null||G===void 0||G.syncUnifiedContainer())}):Ue==null||Ue()}),provide(inputInjectionKey,{mergedValueRef:P,maxlengthRef:Te,mergedClsPrefixRef:n,countGraphemesRef:toRef(e,"countGraphemes")});const rn={wrapperElRef:a,inputElRef:f,textareaElRef:s,isCompositing:_,focus:K,blur:ae,select:ce,deactivate:ke,activate:ve,scrollTo:Oe},en=useRtl("Input",r,n),Fe=computed(()=>{const{value:R}=A,{common:{cubicBezierEaseInOut:G},self:{color:de,borderRadius:Se,textColor:Re,caretColor:De,caretColorError:Xe,caretColorWarning:Je,textDecorationColor:Qe,border:nn,borderDisabled:tn,borderHover:ln,borderFocus:vn,placeholderColor:yn,placeholderColorDisabled:Cn,lineHeightTextarea:xn,colorDisabled:Ne,colorFocus:cn,textColorDisabled:wn,boxShadowFocus:pn,iconSize:an,colorFocusWarning:Ie,boxShadowFocusWarning:Sn,borderWarning:dn,borderFocusWarning:hn,borderHoverWarning:Tn,colorFocusError:un,boxShadowFocusError:fn,borderError:mn,borderFocusError:kn,borderHoverError:gn,clearSize:bn,clearColor:u,clearColorHover:x,clearColorPressed:M,iconColor:F,iconColorDisabled:re,suffixTextColor:Ce,countTextColor:$e,countTextColorDisabled:_e,iconColorHover:sn,iconColorPressed:$n,loadingColor:An,loadingColorError:Pn,loadingColorWarning:Dn,[createKey("padding",R)]:Rn,[createKey("fontSize",R)]:En,[createKey("height",R)]:Mn}}=i.value,{left:In,right:_n}=getMargin(Rn);return{"--n-bezier":G,"--n-count-text-color":$e,"--n-count-text-color-disabled":_e,"--n-color":de,"--n-font-size":En,"--n-border-radius":Se,"--n-height":Mn,"--n-padding-left":In,"--n-padding-right":_n,"--n-text-color":Re,"--n-caret-color":De,"--n-text-decoration-color":Qe,"--n-border":nn,"--n-border-disabled":tn,"--n-border-hover":ln,"--n-border-focus":vn,"--n-placeholder-color":yn,"--n-placeholder-color-disabled":Cn,"--n-icon-size":an,"--n-line-height-textarea":xn,"--n-color-disabled":Ne,"--n-color-focus":cn,"--n-text-color-disabled":wn,"--n-box-shadow-focus":pn,"--n-loading-color":An,"--n-caret-color-warning":Je,"--n-color-focus-warning":Ie,"--n-box-shadow-focus-warning":Sn,"--n-border-warning":dn,"--n-border-focus-warning":hn,"--n-border-hover-warning":Tn,"--n-loading-color-warning":Dn,"--n-caret-color-error":Xe,"--n-color-focus-error":un,"--n-box-shadow-focus-error":fn,"--n-border-error":mn,"--n-border-focus-error":kn,"--n-border-hover-error":gn,"--n-loading-color-error":Pn,"--n-clear-color":u,"--n-clear-size":bn,"--n-clear-color-hover":x,"--n-clear-color-pressed":M,"--n-icon-color":F,"--n-icon-color-hover":sn,"--n-icon-color-pressed":$n,"--n-icon-color-disabled":re,"--n-suffix-text-color":Ce}}),Ge=o?useThemeClass("input",computed(()=>{const{value:R}=A;return R[0]}),Fe,e):void 0;return Object.assign(Object.assign({},rn),{wrapperElRef:a,inputElRef:f,inputMirrorElRef:d,inputEl2Ref:m,textareaElRef:s,textareaMirrorElRef:l,textareaScrollbarInstRef:g,rtlEnabled:en,uncontrolledValue:w,mergedValue:P,passwordVisible:ne,mergedPlaceholder:B,showPlaceholder1:ee,showPlaceholder2:N,mergedFocus:L,isComposing:_,activated:O,showClearButton:te,mergedSize:A,mergedDisabled:E,textDecorationStyle:$,mergedClsPrefix:n,mergedBordered:t,mergedShowPasswordOn:j,placeholderStyle:Ke,mergedStatus:I,textAreaScrollContainerWidth:W,handleTextAreaScroll:Me,handleCompositionStart:q,handleCompositionEnd:U,handleInput:Q,handleInputBlur:V,handleInputFocus:Z,handleWrapperBlur:J,handleWrapperFocus:le,handleMouseEnter:ge,handleMouseLeave:be,handleMouseDown:ye,handleChange:oe,handleClick:se,handleClear:me,handlePasswordToggleClick:He,handlePasswordToggleMousedown:qe,handleWrapperKeydown:Ye,handleTextAreaMirrorResize:Pe,getTextareaScrollContainer:()=>s.value,mergedTheme:i,cssVars:o?void 0:Fe,themeClass:Ge==null?void 0:Ge.themeClass,onRender:Ge==null?void 0:Ge.onRender})},render(){var e,n;const{mergedClsPrefix:t,mergedStatus:o,themeClass:r,type:i,countGraphemes:a,onRender:s}=this,l=this.$slots;return s==null||s(),h("div",{ref:"wrapperElRef",class:[`${t}-input`,r,o&&`${t}-input--${o}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:i==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&i!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},h("div",{class:`${t}-input-wrapper`},resolveWrappedSlot(l.prefix,d=>d&&h("div",{class:`${t}-input__prefix`},d)),i==="textarea"?h(NScrollbar,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var d,f;const{textAreaScrollContainerWidth:m}=this,b={width:this.autosize&&m&&`${m}px`};return h(Fragment,null,h("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(d=this.inputProps)===null||d===void 0?void 0:d.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(f=this.inputProps)===null||f===void 0?void 0:f.style,b],onBlur:this.handleInputBlur,onFocus:C=>this.handleInputFocus(C,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?h("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,b],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?h(VResizeObserver,{onResize:this.handleTextAreaMirrorResize},{default:()=>h("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):h("div",{class:`${t}-input__input`},h("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(n=this.inputProps)===null||n===void 0?void 0:n.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:d=>this.handleInputFocus(d,0),onInput:d=>this.handleInput(d,0),onChange:d=>this.handleChange(d,0)})),this.showPlaceholder1?h("div",{class:`${t}-input__placeholder`},h("span",null,this.mergedPlaceholder[0])):null,this.autosize?h("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&resolveWrappedSlot(l.suffix,d=>d||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?h("div",{class:`${t}-input__suffix`},[resolveWrappedSlot(l["clear-icon-placeholder"],f=>(this.clearable||f)&&h(NBaseClear,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>f,icon:()=>{var m,b;return(b=(m=this.$slots)["clear-icon"])===null||b===void 0?void 0:b.call(m)}})),this.internalLoadingBeforeSuffix?null:d,this.loading!==void 0?h(NBaseSuffix,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?d:null,this.showCount&&this.type!=="textarea"?h(WordCount,null,{default:f=>{var m;return(m=l.count)===null||m===void 0?void 0:m.call(l,f)}}):null,this.mergedShowPasswordOn&&this.type==="password"?h("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?resolveSlot(l["password-visible-icon"],()=>[h(NBaseIcon,{clsPrefix:t},{default:()=>h(EyeIcon,null)})]):resolveSlot(l["password-invisible-icon"],()=>[h(NBaseIcon,{clsPrefix:t},{default:()=>h(EyeOffIcon,null)})])):null]):null)),this.pair?h("span",{class:`${t}-input__separator`},resolveSlot(l.separator,()=>[this.separator])):null,this.pair?h("div",{class:`${t}-input-wrapper`},h("div",{class:`${t}-input__input`},h("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:d=>this.handleInputFocus(d,1),onInput:d=>this.handleInput(d,1),onChange:d=>this.handleChange(d,1)}),this.showPlaceholder2?h("div",{class:`${t}-input__placeholder`},h("span",null,this.mergedPlaceholder[1])):null),resolveWrappedSlot(l.suffix,d=>(this.clearable||d)&&h("div",{class:`${t}-input__suffix`},[this.clearable&&h(NBaseClear,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var f;return(f=l["clear-icon"])===null||f===void 0?void 0:f.call(l)},placeholder:()=>{var f;return(f=l["clear-icon-placeholder"])===null||f===void 0?void 0:f.call(l)}}),d]))):null,this.mergedBordered?h("div",{class:`${t}-input__border`}):null,this.mergedBordered?h("div",{class:`${t}-input__state-border`}):null,this.showCount&&i==="textarea"?h(WordCount,null,{default:d=>{var f;const{renderCount:m}=this;return m?m(d):(f=l.count)===null||f===void 0?void 0:f.call(l,d)}}):null)}});function self$L(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const autoCompleteDark={name:"AutoComplete",common:commonDark,peers:{InternalSelectMenu:internalSelectMenuDark$1,Input:inputDark$1},self:self$L},autoCompleteDark$1=autoCompleteDark,self$K=e=>{const{borderRadius:n,avatarColor:t,cardColor:o,fontSize:r,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:d,modalColor:f,popoverColor:m}=e;return{borderRadius:n,fontSize:r,border:`2px solid ${o}`,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:d,color:composite(o,t),colorModal:composite(f,t),colorPopover:composite(m,t)}},avatarDark={name:"Avatar",common:commonDark,self:self$K},avatarDark$1=avatarDark,self$J=()=>({gap:"-12px"}),avatarGroupDark={name:"AvatarGroup",common:commonDark,peers:{Avatar:avatarDark$1},self:self$J},avatarGroupDark$1=avatarGroupDark,commonVariables$h={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},backTopDark={name:"BackTop",common:commonDark,self(e){const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},commonVariables$h),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},backTopDark$1=backTopDark,badgeDark={name:"Badge",common:commonDark,self(e){const{errorColorSuppl:n,infoColorSuppl:t,successColorSuppl:o,warningColorSuppl:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}}},badgeDark$1=badgeDark,commonVariables$g={fontWeightActive:"400"},self$I=e=>{const{fontSize:n,textColor3:t,textColor2:o,borderRadius:r,buttonColor2Hover:i,buttonColor2Pressed:a}=e;return Object.assign(Object.assign({},commonVariables$g),{fontSize:n,itemLineHeight:"1.25",itemTextColor:t,itemTextColorHover:o,itemTextColorPressed:o,itemTextColorActive:o,itemBorderRadius:r,itemColorHover:i,itemColorPressed:a,separatorColor:t})},breadcrumbDark={name:"Breadcrumb",common:commonDark,self:self$I},breadcrumbDark$1=breadcrumbDark;function createHoverColor(e){return composite(e,[255,255,255,.16])}function createPressedColor(e){return composite(e,[0,0,0,.12])}const buttonGroupInjectionKey="n-button-group",commonVariables$f={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},self$H=e=>{const{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadius:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:d,opacityDisabled:f,textColor2:m,textColor3:b,primaryColorHover:C,primaryColorPressed:g,borderColor:S,primaryColor:w,baseColor:v,infoColor:P,infoColorHover:z,infoColorPressed:A,successColor:E,successColorHover:I,successColorPressed:y,warningColor:k,warningColorHover:_,warningColorPressed:O,errorColor:Y,errorColorHover:B,errorColorPressed:ee,fontWeight:N,buttonColor2:L,buttonColor2Hover:te,buttonColor2Pressed:j,fontWeightStrong:ne}=e;return Object.assign(Object.assign({},commonVariables$f),{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:d,opacityDisabled:f,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:L,colorSecondaryHover:te,colorSecondaryPressed:j,colorTertiary:L,colorTertiaryHover:te,colorTertiaryPressed:j,colorQuaternary:"#0000",colorQuaternaryHover:te,colorQuaternaryPressed:j,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:m,textColorTertiary:b,textColorHover:C,textColorPressed:g,textColorFocus:C,textColorDisabled:m,textColorText:m,textColorTextHover:C,textColorTextPressed:g,textColorTextFocus:C,textColorTextDisabled:m,textColorGhost:m,textColorGhostHover:C,textColorGhostPressed:g,textColorGhostFocus:C,textColorGhostDisabled:m,border:`1px solid ${S}`,borderHover:`1px solid ${C}`,borderPressed:`1px solid ${g}`,borderFocus:`1px solid ${C}`,borderDisabled:`1px solid ${S}`,rippleColor:w,colorPrimary:w,colorHoverPrimary:C,colorPressedPrimary:g,colorFocusPrimary:C,colorDisabledPrimary:w,textColorPrimary:v,textColorHoverPrimary:v,textColorPressedPrimary:v,textColorFocusPrimary:v,textColorDisabledPrimary:v,textColorTextPrimary:w,textColorTextHoverPrimary:C,textColorTextPressedPrimary:g,textColorTextFocusPrimary:C,textColorTextDisabledPrimary:m,textColorGhostPrimary:w,textColorGhostHoverPrimary:C,textColorGhostPressedPrimary:g,textColorGhostFocusPrimary:C,textColorGhostDisabledPrimary:w,borderPrimary:`1px solid ${w}`,borderHoverPrimary:`1px solid ${C}`,borderPressedPrimary:`1px solid ${g}`,borderFocusPrimary:`1px solid ${C}`,borderDisabledPrimary:`1px solid ${w}`,rippleColorPrimary:w,colorInfo:P,colorHoverInfo:z,colorPressedInfo:A,colorFocusInfo:z,colorDisabledInfo:P,textColorInfo:v,textColorHoverInfo:v,textColorPressedInfo:v,textColorFocusInfo:v,textColorDisabledInfo:v,textColorTextInfo:P,textColorTextHoverInfo:z,textColorTextPressedInfo:A,textColorTextFocusInfo:z,textColorTextDisabledInfo:m,textColorGhostInfo:P,textColorGhostHoverInfo:z,textColorGhostPressedInfo:A,textColorGhostFocusInfo:z,textColorGhostDisabledInfo:P,borderInfo:`1px solid ${P}`,borderHoverInfo:`1px solid ${z}`,borderPressedInfo:`1px solid ${A}`,borderFocusInfo:`1px solid ${z}`,borderDisabledInfo:`1px solid ${P}`,rippleColorInfo:P,colorSuccess:E,colorHoverSuccess:I,colorPressedSuccess:y,colorFocusSuccess:I,colorDisabledSuccess:E,textColorSuccess:v,textColorHoverSuccess:v,textColorPressedSuccess:v,textColorFocusSuccess:v,textColorDisabledSuccess:v,textColorTextSuccess:E,textColorTextHoverSuccess:I,textColorTextPressedSuccess:y,textColorTextFocusSuccess:I,textColorTextDisabledSuccess:m,textColorGhostSuccess:E,textColorGhostHoverSuccess:I,textColorGhostPressedSuccess:y,textColorGhostFocusSuccess:I,textColorGhostDisabledSuccess:E,borderSuccess:`1px solid ${E}`,borderHoverSuccess:`1px solid ${I}`,borderPressedSuccess:`1px solid ${y}`,borderFocusSuccess:`1px solid ${I}`,borderDisabledSuccess:`1px solid ${E}`,rippleColorSuccess:E,colorWarning:k,colorHoverWarning:_,colorPressedWarning:O,colorFocusWarning:_,colorDisabledWarning:k,textColorWarning:v,textColorHoverWarning:v,textColorPressedWarning:v,textColorFocusWarning:v,textColorDisabledWarning:v,textColorTextWarning:k,textColorTextHoverWarning:_,textColorTextPressedWarning:O,textColorTextFocusWarning:_,textColorTextDisabledWarning:m,textColorGhostWarning:k,textColorGhostHoverWarning:_,textColorGhostPressedWarning:O,textColorGhostFocusWarning:_,textColorGhostDisabledWarning:k,borderWarning:`1px solid ${k}`,borderHoverWarning:`1px solid ${_}`,borderPressedWarning:`1px solid ${O}`,borderFocusWarning:`1px solid ${_}`,borderDisabledWarning:`1px solid ${k}`,rippleColorWarning:k,colorError:Y,colorHoverError:B,colorPressedError:ee,colorFocusError:B,colorDisabledError:Y,textColorError:v,textColorHoverError:v,textColorPressedError:v,textColorFocusError:v,textColorDisabledError:v,textColorTextError:Y,textColorTextHoverError:B,textColorTextPressedError:ee,textColorTextFocusError:B,textColorTextDisabledError:m,textColorGhostError:Y,textColorGhostHoverError:B,textColorGhostPressedError:ee,textColorGhostFocusError:B,textColorGhostDisabledError:Y,borderError:`1px solid ${Y}`,borderHoverError:`1px solid ${B}`,borderPressedError:`1px solid ${ee}`,borderFocusError:`1px solid ${B}`,borderDisabledError:`1px solid ${Y}`,rippleColorError:Y,waveOpacity:"0.6",fontWeight:N,fontWeightStrong:ne})},buttonLight={name:"Button",common:commonLight,self:self$H},buttonLight$1=buttonLight,buttonDark={name:"Button",common:commonDark,self(e){const n=self$H(e);return n.waveOpacity="0.8",n.colorOpacitySecondary="0.16",n.colorOpacitySecondaryHover="0.2",n.colorOpacitySecondaryPressed="0.12",n}},buttonDark$1=buttonDark,style$8=c$1([cB("button",`
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
 `),cM("dashed",[cE("border, state-border",{borderStyle:"dashed !important"})]),cM("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),c$1("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),c$1("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),buttonProps=Object.assign(Object.assign({},useTheme.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!isSafari}}),Button=defineComponent({name:"Button",props:buttonProps,setup(e){const n=ref(null),t=ref(null),o=ref(!1),r=useMemo(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),i=inject(buttonGroupInjectionKey,{}),{mergedSizeRef:a}=useFormItem({},{defaultSize:"medium",mergedSize:A=>{const{size:E}=e;if(E)return E;const{size:I}=i;if(I)return I;const{mergedSize:y}=A||{};return y?y.value:"medium"}}),s=computed(()=>e.focusable&&!e.disabled),l=A=>{var E;s.value||A.preventDefault(),!e.nativeFocusBehavior&&(A.preventDefault(),!e.disabled&&s.value&&((E=n.value)===null||E===void 0||E.focus({preventScroll:!0})))},d=A=>{var E;if(!e.disabled&&!e.loading){const{onClick:I}=e;I&&call(I,A),e.text||(E=t.value)===null||E===void 0||E.play()}},f=A=>{switch(A.key){case"Enter":if(!e.keyboard)return;o.value=!1}},m=A=>{switch(A.key){case"Enter":if(!e.keyboard||e.loading){A.preventDefault();return}o.value=!0}},b=()=>{o.value=!1},{inlineThemeDisabled:C,mergedClsPrefixRef:g,mergedRtlRef:S}=useConfig(e),w=useTheme("Button","-button",style$8,buttonLight$1,e,g),v=useRtl("Button",S,g),P=computed(()=>{const A=w.value,{common:{cubicBezierEaseInOut:E,cubicBezierEaseOut:I},self:y}=A,{rippleDuration:k,opacityDisabled:_,fontWeight:O,fontWeightStrong:Y}=y,B=a.value,{dashed:ee,type:N,ghost:L,text:te,color:j,round:ne,circle:$,textColor:W,secondary:pe,tertiary:Te,quaternary:Be,strong:xe}=e,we={"font-weight":xe?Y:O};let fe={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const ue=N==="tertiary",je=N==="default",he=ue?"default":N;if(te){const V=W||j,Z=V||y[createKey("textColorText",he)];fe={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":Z,"--n-text-color-hover":V?createHoverColor(V):y[createKey("textColorTextHover",he)],"--n-text-color-pressed":V?createPressedColor(V):y[createKey("textColorTextPressed",he)],"--n-text-color-focus":V?createHoverColor(V):y[createKey("textColorTextHover",he)],"--n-text-color-disabled":V||y[createKey("textColorTextDisabled",he)]}}else if(L||ee){const V=W||j;fe={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":j||y[createKey("rippleColor",he)],"--n-text-color":V||y[createKey("textColorGhost",he)],"--n-text-color-hover":V?createHoverColor(V):y[createKey("textColorGhostHover",he)],"--n-text-color-pressed":V?createPressedColor(V):y[createKey("textColorGhostPressed",he)],"--n-text-color-focus":V?createHoverColor(V):y[createKey("textColorGhostHover",he)],"--n-text-color-disabled":V||y[createKey("textColorGhostDisabled",he)]}}else if(pe){const V=je?y.textColor:ue?y.textColorTertiary:y[createKey("color",he)],Z=j||V,J=N!=="default"&&N!=="tertiary";fe={"--n-color":J?changeColor(Z,{alpha:Number(y.colorOpacitySecondary)}):y.colorSecondary,"--n-color-hover":J?changeColor(Z,{alpha:Number(y.colorOpacitySecondaryHover)}):y.colorSecondaryHover,"--n-color-pressed":J?changeColor(Z,{alpha:Number(y.colorOpacitySecondaryPressed)}):y.colorSecondaryPressed,"--n-color-focus":J?changeColor(Z,{alpha:Number(y.colorOpacitySecondaryHover)}):y.colorSecondaryHover,"--n-color-disabled":y.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":Z,"--n-text-color-hover":Z,"--n-text-color-pressed":Z,"--n-text-color-focus":Z,"--n-text-color-disabled":Z}}else if(Te||Be){const V=je?y.textColor:ue?y.textColorTertiary:y[createKey("color",he)],Z=j||V;Te?(fe["--n-color"]=y.colorTertiary,fe["--n-color-hover"]=y.colorTertiaryHover,fe["--n-color-pressed"]=y.colorTertiaryPressed,fe["--n-color-focus"]=y.colorSecondaryHover,fe["--n-color-disabled"]=y.colorTertiary):(fe["--n-color"]=y.colorQuaternary,fe["--n-color-hover"]=y.colorQuaternaryHover,fe["--n-color-pressed"]=y.colorQuaternaryPressed,fe["--n-color-focus"]=y.colorQuaternaryHover,fe["--n-color-disabled"]=y.colorQuaternary),fe["--n-ripple-color"]="#0000",fe["--n-text-color"]=Z,fe["--n-text-color-hover"]=Z,fe["--n-text-color-pressed"]=Z,fe["--n-text-color-focus"]=Z,fe["--n-text-color-disabled"]=Z}else fe={"--n-color":j||y[createKey("color",he)],"--n-color-hover":j?createHoverColor(j):y[createKey("colorHover",he)],"--n-color-pressed":j?createPressedColor(j):y[createKey("colorPressed",he)],"--n-color-focus":j?createHoverColor(j):y[createKey("colorFocus",he)],"--n-color-disabled":j||y[createKey("colorDisabled",he)],"--n-ripple-color":j||y[createKey("rippleColor",he)],"--n-text-color":W||(j?y.textColorPrimary:ue?y.textColorTertiary:y[createKey("textColor",he)]),"--n-text-color-hover":W||(j?y.textColorHoverPrimary:y[createKey("textColorHover",he)]),"--n-text-color-pressed":W||(j?y.textColorPressedPrimary:y[createKey("textColorPressed",he)]),"--n-text-color-focus":W||(j?y.textColorFocusPrimary:y[createKey("textColorFocus",he)]),"--n-text-color-disabled":W||(j?y.textColorDisabledPrimary:y[createKey("textColorDisabled",he)])};let Le={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};te?Le={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Le={"--n-border":y[createKey("border",he)],"--n-border-hover":y[createKey("borderHover",he)],"--n-border-pressed":y[createKey("borderPressed",he)],"--n-border-focus":y[createKey("borderFocus",he)],"--n-border-disabled":y[createKey("borderDisabled",he)]};const{[createKey("height",B)]:Ae,[createKey("fontSize",B)]:We,[createKey("padding",B)]:T,[createKey("paddingRound",B)]:D,[createKey("iconSize",B)]:H,[createKey("borderRadius",B)]:q,[createKey("iconMargin",B)]:U,waveOpacity:Q}=y,ie={"--n-width":$&&!te?Ae:"initial","--n-height":te?"initial":Ae,"--n-font-size":We,"--n-padding":$||te?"initial":ne?D:T,"--n-icon-size":H,"--n-icon-margin":U,"--n-border-radius":te?"initial":$||ne?Ae:q};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":E,"--n-bezier-ease-out":I,"--n-ripple-duration":k,"--n-opacity-disabled":_,"--n-wave-opacity":Q},we),fe),Le),ie)}),z=C?useThemeClass("button",computed(()=>{let A="";const{dashed:E,type:I,ghost:y,text:k,color:_,round:O,circle:Y,textColor:B,secondary:ee,tertiary:N,quaternary:L,strong:te}=e;E&&(A+="a"),y&&(A+="b"),k&&(A+="c"),O&&(A+="d"),Y&&(A+="e"),ee&&(A+="f"),N&&(A+="g"),L&&(A+="h"),te&&(A+="i"),_&&(A+="j"+color2Class(_)),B&&(A+="k"+color2Class(B));const{value:j}=a;return A+="l"+j[0],A+="m"+I[0],A}),P,e):void 0;return{selfElRef:n,waveElRef:t,mergedClsPrefix:g,mergedFocusable:s,mergedSize:a,showBorder:r,enterPressed:o,rtlEnabled:v,handleMousedown:l,handleKeydown:m,handleBlur:b,handleKeyup:f,handleClick:d,customColorCssVars:computed(()=>{const{color:A}=e;if(!A)return null;const E=createHoverColor(A);return{"--n-border-color":A,"--n-border-color-hover":E,"--n-border-color-pressed":createPressedColor(A),"--n-border-color-focus":E,"--n-border-color-disabled":A}}),cssVars:C?void 0:P,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const{mergedClsPrefix:e,tag:n,onRender:t}=this;t==null||t();const o=resolveWrappedSlot(this.$slots.default,r=>r&&h("span",{class:`${e}-button__content`},r));return h(n,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&o,h(NFadeInExpandTransition,{width:!0},{default:()=>resolveWrappedSlot(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&h("span",{class:`${e}-button__icon`,style:{margin:isSlotEmpty(this.$slots.default)?"0":""}},h(NIconSwitchTransition,null,{default:()=>this.loading?h(NBaseLoading,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&o,this.text?null:h(NBaseWave,{ref:"waveElRef",clsPrefix:e}),this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),__unplugin_components_3=Button,commonVariables$e={titleFontSize:"22px"},self$G=e=>{const{borderRadius:n,fontSize:t,lineHeight:o,textColor2:r,textColor1:i,textColorDisabled:a,dividerColor:s,fontWeightStrong:l,primaryColor:d,baseColor:f,hoverColor:m,cardColor:b,modalColor:C,popoverColor:g}=e;return Object.assign(Object.assign({},commonVariables$e),{borderRadius:n,borderColor:composite(b,s),borderColorModal:composite(C,s),borderColorPopover:composite(g,s),textColor:r,titleFontWeight:l,titleTextColor:i,dayTextColor:a,fontSize:t,lineHeight:o,dateColorCurrent:d,dateTextColorCurrent:f,cellColorHover:composite(b,m),cellColorHoverModal:composite(C,m),cellColorHoverPopover:composite(g,m),cellColor:b,cellColorModal:C,cellColorPopover:g,barColor:d})},calendarDark={name:"Calendar",common:commonDark,peers:{Button:buttonDark$1},self:self$G},calendarDark$1=calendarDark,self$F=e=>{const{fontSize:n,boxShadow2:t,popoverColor:o,textColor2:r,borderRadius:i,borderColor:a,heightSmall:s,heightMedium:l,heightLarge:d,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:b,dividerColor:C}=e;return{panelFontSize:n,boxShadow:t,color:o,textColor:r,borderRadius:i,border:`1px solid ${a}`,heightSmall:s,heightMedium:l,heightLarge:d,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:b,dividerColor:C}},colorPickerDark={name:"ColorPicker",common:commonDark,peers:{Input:inputDark$1,Button:buttonDark$1},self:self$F},colorPickerDark$1=colorPickerDark,commonVariables$d={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},self$E=e=>{const{primaryColor:n,borderRadius:t,lineHeight:o,fontSize:r,cardColor:i,textColor2:a,textColor1:s,dividerColor:l,fontWeightStrong:d,closeIconColor:f,closeIconColorHover:m,closeIconColorPressed:b,closeColorHover:C,closeColorPressed:g,modalColor:S,boxShadow1:w,popoverColor:v,actionColor:P}=e;return Object.assign(Object.assign({},commonVariables$d),{lineHeight:o,color:i,colorModal:S,colorPopover:v,colorTarget:n,colorEmbedded:P,colorEmbeddedModal:P,colorEmbeddedPopover:P,textColor:a,titleTextColor:s,borderColor:l,actionColor:P,titleFontWeight:d,closeColorHover:C,closeColorPressed:g,closeBorderRadius:t,closeIconColor:f,closeIconColorHover:m,closeIconColorPressed:b,fontSizeSmall:r,fontSizeMedium:r,fontSizeLarge:r,fontSizeHuge:r,boxShadow:w,borderRadius:t})},cardDark={name:"Card",common:commonDark,self(e){const n=self$E(e),{cardColor:t,modalColor:o,popoverColor:r}=e;return n.colorEmbedded=t,n.colorEmbeddedModal=o,n.colorEmbeddedPopover=r,n}},cardDark$1=cardDark,self$D=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),carouselDark={name:"Carousel",common:commonDark,self:self$D},carouselDark$1=carouselDark,commonVariables$c={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},self$C=e=>{const{baseColor:n,inputColorDisabled:t,cardColor:o,modalColor:r,popoverColor:i,textColorDisabled:a,borderColor:s,primaryColor:l,textColor2:d,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:b,borderRadiusSmall:C,lineHeight:g}=e;return Object.assign(Object.assign({},commonVariables$c),{labelLineHeight:g,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:b,borderRadius:C,color:n,colorChecked:l,colorDisabled:t,colorDisabledChecked:t,colorTableHeader:o,colorTableHeaderModal:r,colorTableHeaderPopover:i,checkMarkColor:n,checkMarkColorDisabled:a,checkMarkColorDisabledChecked:a,border:`1px solid ${s}`,borderDisabled:`1px solid ${s}`,borderDisabledChecked:`1px solid ${s}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${changeColor(l,{alpha:.3})}`,textColor:d,textColorDisabled:a})},checkboxDark={name:"Checkbox",common:commonDark,self(e){const{cardColor:n}=e,t=self$C(e);return t.color="#0000",t.checkMarkColor=n,t}},checkboxDark$1=checkboxDark,self$B=e=>{const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r,textColor3:i,primaryColor:a,textColorDisabled:s,dividerColor:l,hoverColor:d,fontSizeMedium:f,heightMedium:m}=e;return{menuBorderRadius:n,menuColor:o,menuBoxShadow:t,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:m,optionFontSize:f,optionColorHover:d,optionTextColor:r,optionTextColorActive:a,optionTextColorDisabled:s,optionCheckMarkColor:a,loadingColor:a,columnWidth:"180px"}},cascaderDark={name:"Cascader",common:commonDark,peers:{InternalSelectMenu:internalSelectMenuDark$1,InternalSelection:internalSelectionDark$1,Scrollbar:scrollbarDark$1,Checkbox:checkboxDark$1,Empty:emptyLight$1},self:self$B},cascaderDark$1=cascaderDark,codeDark={name:"Code",common:commonDark,self(e){const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:r}}},codeDark$1=codeDark,self$A=e=>{const{fontWeight:n,textColor1:t,textColor2:o,textColorDisabled:r,dividerColor:i,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:n,dividerColor:i,titleTextColor:t,titleTextColorDisabled:r,fontSize:a,textColor:o,arrowColor:o,arrowColorDisabled:r,itemMargin:"16px 0 0 0"}},collapseDark={name:"Collapse",common:commonDark,self:self$A},collapseDark$1=collapseDark,self$z=e=>{const{cubicBezierEaseInOut:n}=e;return{bezier:n}},collapseTransitionDark={name:"CollapseTransition",common:commonDark,self:self$z},collapseTransitionDark$1=collapseTransitionDark,configProviderProps={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(warn$2("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},__unplugin_components_17=defineComponent({name:"ConfigProvider",alias:["App"],props:configProviderProps,setup(e){const n=inject(configProviderInjectionKey,null),t=computed(()=>{const{theme:g}=e;if(g===null)return;const S=n==null?void 0:n.mergedThemeRef.value;return g===void 0?S:S===void 0?g:Object.assign({},S,g)}),o=computed(()=>{const{themeOverrides:g}=e;if(g!==null){if(g===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const S=n==null?void 0:n.mergedThemeOverridesRef.value;return S===void 0?g:merge$2({},S,g)}}}),r=useMemo(()=>{const{namespace:g}=e;return g===void 0?n==null?void 0:n.mergedNamespaceRef.value:g}),i=useMemo(()=>{const{bordered:g}=e;return g===void 0?n==null?void 0:n.mergedBorderedRef.value:g}),a=computed(()=>{const{icons:g}=e;return g===void 0?n==null?void 0:n.mergedIconsRef.value:g}),s=computed(()=>{const{componentOptions:g}=e;return g!==void 0?g:n==null?void 0:n.mergedComponentPropsRef.value}),l=computed(()=>{const{clsPrefix:g}=e;return g!==void 0?g:n==null?void 0:n.mergedClsPrefixRef.value}),d=computed(()=>{var g;const{rtl:S}=e;if(S===void 0)return n==null?void 0:n.mergedRtlRef.value;const w={};for(const v of S)w[v.name]=markRaw(v),(g=v.peers)===null||g===void 0||g.forEach(P=>{P.name in w||(w[P.name]=markRaw(P))});return w}),f=computed(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),m=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),b=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),C=computed(()=>{const{value:g}=t,{value:S}=o,w=S&&Object.keys(S).length!==0,v=g==null?void 0:g.name;return v?w?`${v}-${murmur2(JSON.stringify(o.value))}`:v:w?murmur2(JSON.stringify(o.value)):""});return provide(configProviderInjectionKey,{mergedThemeHashRef:C,mergedBreakpointsRef:f,mergedRtlRef:d,mergedIconsRef:a,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:r,mergedClsPrefixRef:l,mergedLocaleRef:computed(()=>{const{locale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedLocaleRef.value:g}),mergedDateLocaleRef:computed(()=>{const{dateLocale:g}=e;if(g!==null)return g===void 0?n==null?void 0:n.mergedDateLocaleRef.value:g}),mergedHljsRef:computed(()=>{const{hljs:g}=e;return g===void 0?n==null?void 0:n.mergedHljsRef.value:g}),mergedKatexRef:computed(()=>{const{katex:g}=e;return g===void 0?n==null?void 0:n.mergedKatexRef.value:g}),mergedThemeRef:t,mergedThemeOverridesRef:o,inlineThemeDisabled:m||!1,preflightStyleDisabled:b||!1}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:r,mergedTheme:t,mergedThemeOverrides:o}},render(){var e,n,t,o;return this.abstract?(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t):h(this.as||this.tag,{class:`${this.mergedClsPrefix||defaultClsPrefix}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),popselect={name:"Popselect",common:commonDark,peers:{Popover:popoverDark$1,InternalSelectMenu:internalSelectMenuDark$1}},popselectDark=popselect;function self$y(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const selectDark={name:"Select",common:commonDark,peers:{InternalSelection:internalSelectionDark$1,InternalSelectMenu:internalSelectMenuDark$1},self:self$y},selectDark$1=selectDark,commonVariables$b={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"},self$x=e=>{const{textColor2:n,primaryColor:t,primaryColorHover:o,primaryColorPressed:r,inputColorDisabled:i,textColorDisabled:a,borderColor:s,borderRadius:l,fontSizeTiny:d,fontSizeSmall:f,fontSizeMedium:m,heightTiny:b,heightSmall:C,heightMedium:g}=e;return Object.assign(Object.assign({},commonVariables$b),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${s}`,buttonBorderHover:`1px solid ${s}`,buttonBorderPressed:`1px solid ${s}`,buttonIconColor:n,buttonIconColorHover:n,buttonIconColorPressed:n,itemTextColor:n,itemTextColorHover:o,itemTextColorPressed:r,itemTextColorActive:t,itemTextColorDisabled:a,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${t}`,itemBorderDisabled:`1px solid ${s}`,itemBorderRadius:l,itemSizeSmall:b,itemSizeMedium:C,itemSizeLarge:g,itemFontSizeSmall:d,itemFontSizeMedium:f,itemFontSizeLarge:m,jumperFontSizeSmall:d,jumperFontSizeMedium:f,jumperFontSizeLarge:m,jumperTextColor:n,jumperTextColorDisabled:a})},paginationDark={name:"Pagination",common:commonDark,peers:{Select:selectDark$1,Input:inputDark$1,Popselect:popselectDark},self(e){const{primaryColor:n,opacity3:t}=e,o=changeColor(n,{alpha:Number(t)}),r=self$x(e);return r.itemBorderActive=`1px solid ${o}`,r.itemBorderDisabled="1px solid #0000",r}},paginationDark$1=paginationDark,commonVars$8={padding:"8px 14px"},tooltipDark={name:"Tooltip",common:commonDark,peers:{Popover:popoverDark$1},self(e){const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r}=e;return Object.assign(Object.assign({},commonVars$8),{borderRadius:n,boxShadow:t,color:o,textColor:r})}},tooltipDark$1=tooltipDark,ellipsisDark={name:"Ellipsis",common:commonDark,peers:{Tooltip:tooltipDark$1}},ellipsisDark$1=ellipsisDark,commonVariables$a={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},radioDark={name:"Radio",common:commonDark,self(e){const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:m,heightSmall:b,heightMedium:C,heightLarge:g,lineHeight:S}=e;return Object.assign(Object.assign({},commonVariables$a),{labelLineHeight:S,buttonHeightSmall:b,buttonHeightMedium:C,buttonHeightLarge:g,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:m,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${changeColor(t,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:t,buttonColor:"#0000",buttonColorActive:t,buttonTextColor:a,buttonTextColorActive:o,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${changeColor(t,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${t}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},radioDark$1=radioDark,commonVariables$9={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},self$w=e=>{const{primaryColor:n,textColor2:t,dividerColor:o,hoverColor:r,popoverColor:i,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:d,fontSizeLarge:f,fontSizeHuge:m,heightSmall:b,heightMedium:C,heightLarge:g,heightHuge:S,textColor3:w,opacityDisabled:v}=e;return Object.assign(Object.assign({},commonVariables$9),{optionHeightSmall:b,optionHeightMedium:C,optionHeightLarge:g,optionHeightHuge:S,borderRadius:s,fontSizeSmall:l,fontSizeMedium:d,fontSizeLarge:f,fontSizeHuge:m,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:o,suffixColor:t,prefixColor:t,optionColorHover:r,optionColorActive:changeColor(n,{alpha:.1}),groupHeaderTextColor:w,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:v})},dropdownLight={name:"Dropdown",common:commonLight,peers:{Popover:popoverLight$1},self:self$w},dropdownLight$1=dropdownLight,dropdownDark={name:"Dropdown",common:commonDark,peers:{Popover:popoverDark$1},self(e){const{primaryColorSuppl:n,primaryColor:t,popoverColor:o}=e,r=self$w(e);return r.colorInverted=o,r.optionColorActive=changeColor(t,{alpha:.15}),r.optionColorActiveInverted=n,r.optionColorHoverInverted=n,r}},dropdownDark$1=dropdownDark,commonVariables$8={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"},self$v=e=>{const{cardColor:n,modalColor:t,popoverColor:o,textColor2:r,textColor1:i,tableHeaderColor:a,tableColorHover:s,iconColor:l,primaryColor:d,fontWeightStrong:f,borderRadius:m,lineHeight:b,fontSizeSmall:C,fontSizeMedium:g,fontSizeLarge:S,dividerColor:w,heightSmall:v,opacityDisabled:P,tableColorStriped:z}=e;return Object.assign(Object.assign({},commonVariables$8),{actionDividerColor:w,lineHeight:b,borderRadius:m,fontSizeSmall:C,fontSizeMedium:g,fontSizeLarge:S,borderColor:composite(n,w),tdColorHover:composite(n,s),tdColorStriped:composite(n,z),thColor:composite(n,a),thColorHover:composite(composite(n,a),s),tdColor:n,tdTextColor:r,thTextColor:i,thFontWeight:f,thButtonColorHover:s,thIconColor:l,thIconColorActive:d,borderColorModal:composite(t,w),tdColorHoverModal:composite(t,s),tdColorStripedModal:composite(t,z),thColorModal:composite(t,a),thColorHoverModal:composite(composite(t,a),s),tdColorModal:t,borderColorPopover:composite(o,w),tdColorHoverPopover:composite(o,s),tdColorStripedPopover:composite(o,z),thColorPopover:composite(o,a),thColorHoverPopover:composite(composite(o,a),s),tdColorPopover:o,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:d,loadingSize:v,opacityLoading:P})},dataTableDark={name:"DataTable",common:commonDark,peers:{Button:buttonDark$1,Checkbox:checkboxDark$1,Radio:radioDark$1,Pagination:paginationDark$1,Scrollbar:scrollbarDark$1,Empty:emptyDark$1,Popover:popoverDark$1,Ellipsis:ellipsisDark$1,Dropdown:dropdownDark$1},self(e){const n=self$v(e);return n.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",n.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",n}},dataTableDark$1=dataTableDark,NDropdownDivider=defineComponent({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return h("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),self$u=e=>{const{textColorBase:n,opacity1:t,opacity2:o,opacity3:r,opacity4:i,opacity5:a}=e;return{color:n,opacity1Depth:t,opacity2Depth:o,opacity3Depth:r,opacity4Depth:i,opacity5Depth:a}},iconLight={name:"Icon",common:commonLight,self:self$u},iconLight$1=iconLight,iconDark$1={name:"Icon",common:commonDark,self:self$u},iconDark$2=iconDark$1,style$7=cB("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[cM("color-transition",{transition:"color .3s var(--n-bezier)"}),cM("depth",{color:"var(--n-color)"},[c$1("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),c$1("svg",{height:"1em",width:"1em"})]),iconProps=Object.assign(Object.assign({},useTheme.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),NIcon=defineComponent({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:iconProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Icon","-icon",style$7,iconLight$1,e,n),r=computed(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=o.value;if(a!==void 0){const{color:d,[`opacity${a}Depth`]:f}=l;return{"--n-bezier":s,"--n-color":d,"--n-opacity":f}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?useThemeClass("icon",computed(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:computed(()=>{const{size:a,color:s}=e;return{fontSize:formatLength(a),color:s}}),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:o,component:r,onRender:i,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&warn$2("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),h("i",mergeProps(this.$attrs,{role:"img",class:[`${o}-icon`,a,{[`${o}-icon--depth`]:t,[`${o}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?h(r):this.$slots)}}),dropdownMenuInjectionKey="n-dropdown-menu",dropdownInjectionKey="n-dropdown",dropdownOptionInjectionKey="n-dropdown-option";function isSubmenuNode(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function isGroupNode(e){return e.type==="group"}function isDividerNode(e){return e.type==="divider"}function isRenderNode(e){return e.type==="render"}const NDropdownOption=defineComponent({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=inject(dropdownInjectionKey),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:d,renderIconRef:f,labelFieldRef:m,childrenFieldRef:b,renderOptionRef:C,nodePropsRef:g,menuPropsRef:S}=n,w=inject(dropdownOptionInjectionKey,null),v=inject(dropdownMenuInjectionKey),P=inject(popoverBodyInjectionKey),z=computed(()=>e.tmNode.rawNode),A=computed(()=>{const{value:j}=b;return isSubmenuNode(e.tmNode.rawNode,j)}),E=computed(()=>{const{disabled:j}=e.tmNode;return j}),I=computed(()=>{if(!A.value)return!1;const{key:j,disabled:ne}=e.tmNode;if(ne)return!1;const{value:$}=t,{value:W}=o,{value:pe}=r,{value:Te}=i;return $!==null?Te.includes(j):W!==null?Te.includes(j)&&Te[Te.length-1]!==j:pe!==null?Te.includes(j):!1}),y=computed(()=>o.value===null&&!s.value),k=useDeferredTrue(I,300,y),_=computed(()=>!!(w!=null&&w.enteringSubmenuRef.value)),O=ref(!1);provide(dropdownOptionInjectionKey,{enteringSubmenuRef:O});function Y(){O.value=!0}function B(){O.value=!1}function ee(){const{parentKey:j,tmNode:ne}=e;ne.disabled||!l.value||(r.value=j,o.value=null,t.value=ne.key)}function N(){const{tmNode:j}=e;j.disabled||!l.value||t.value!==j.key&&ee()}function L(j){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:ne}=j;ne&&!happensIn({target:ne},"dropdownOption")&&!happensIn({target:ne},"scrollbarRail")&&(t.value=null)}function te(){const{value:j}=A,{tmNode:ne}=e;!l.value||!j&&!ne.disabled&&(n.doSelect(ne.key,ne.rawNode),n.doUpdateShow(!1))}return{labelField:m,renderLabel:d,renderIcon:f,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:S,popoverBody:P,animated:s,mergedShowSubmenu:computed(()=>k.value&&!_.value),rawNode:z,hasSubmenu:A,pending:useMemo(()=>{const{value:j}=i,{key:ne}=e.tmNode;return j.includes(ne)}),childActive:useMemo(()=>{const{value:j}=a,{key:ne}=e.tmNode,$=j.findIndex(W=>ne===W);return $===-1?!1:$<j.length-1}),active:useMemo(()=>{const{value:j}=a,{key:ne}=e.tmNode,$=j.findIndex(W=>ne===W);return $===-1?!1:$===j.length-1}),mergedDisabled:E,renderOption:C,nodeProps:g,handleClick:te,handleMouseMove:N,handleMouseEnter:ee,handleMouseLeave:L,handleSubmenuBeforeEnter:Y,handleSubmenuAfterEnter:B}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:d,renderOption:f,nodeProps:m,props:b,scrollable:C}=this;let g=null;if(r){const P=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);g=h(NDropdownMenu,Object.assign({},P,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const S={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},w=m==null?void 0:m(o),v=h("div",Object.assign({class:[`${i}-dropdown-option`,w==null?void 0:w.class],"data-dropdown-option":!0},w),h("div",mergeProps(S,b),[h("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[d?d(o):render$1(o.icon)]),h("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(o):render$1((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),h("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?h(NIcon,null,{default:()=>h(ChevronRightIcon,null)}):null)]),this.hasSubmenu?h(VBinder,null,{default:()=>[h(VTarget,null,{default:()=>h("div",{class:`${i}-dropdown-offset-container`},h(VFollower,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>h("div",{class:`${i}-dropdown-menu-wrapper`},t?h(Transition,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>g}):g)}))})]}):null);return f?f({node:v,option:o}):v}}),NDropdownGroupHeader=defineComponent({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=inject(dropdownMenuInjectionKey),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=inject(dropdownInjectionKey);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,l=h("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(s)),h("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},h("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},render$1(s.icon)),h("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):render$1((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),h("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}}),NDropdownGroup=defineComponent({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return h(Fragment,null,h(NDropdownGroupHeader,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:i}=r;return i.show===!1?null:isDividerNode(i)?h(NDropdownDivider,{clsPrefix:t,key:r.key}):r.isGroup?(warn$2("dropdown","`group` node is not allowed to be put in `group` node."),null):h(NDropdownOption,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),NDropdownRenderOption=defineComponent({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return h("div",n,[e==null?void 0:e()])}}),NDropdownMenu=defineComponent({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=inject(dropdownInjectionKey);provide(dropdownMenuInjectionKey,{showIconRef:computed(()=>{const r=n.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:computed(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>isSubmenuNode(l,r));const{rawNode:s}=i;return isSubmenuNode(s,r)})})});const o=ref(null);return provide(modalBodyInjectionKey,null),provide(drawerBodyInjectionKey,null),provide(popoverBodyInjectionKey,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:isRenderNode(i)?h(NDropdownRenderOption,{tmNode:r,key:r.key}):isDividerNode(i)?h(NDropdownDivider,{clsPrefix:n,key:r.key}):isGroupNode(i)?h(NDropdownGroup,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):h(NDropdownOption,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return h("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?h(XScrollbar,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?renderArrow({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),style$6=cB("dropdown-menu",`
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
 `)])]),dropdownBaseProps={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},popoverPropKeys=Object.keys(popoverBaseProps),dropdownProps=Object.assign(Object.assign(Object.assign({},popoverBaseProps),dropdownBaseProps),useTheme.props),__unplugin_components_8=defineComponent({name:"Dropdown",inheritAttrs:!1,props:dropdownProps,setup(e){const n=ref(!1),t=useMergedState(toRef(e,"show"),n),o=computed(()=>{const{keyField:B,childrenField:ee}=e;return createTreeMate(e.options,{getKey(N){return N[B]},getDisabled(N){return N.disabled===!0},getIgnored(N){return N.type==="divider"||N.type==="render"},getChildren(N){return N[ee]}})}),r=computed(()=>o.value.treeNodes),i=ref(null),a=ref(null),s=ref(null),l=computed(()=>{var B,ee,N;return(N=(ee=(B=i.value)!==null&&B!==void 0?B:a.value)!==null&&ee!==void 0?ee:s.value)!==null&&N!==void 0?N:null}),d=computed(()=>o.value.getPath(l.value).keyPath),f=computed(()=>o.value.getPath(e.value).keyPath),m=useMemo(()=>e.keyboard&&t.value);useKeyboard({keydown:{ArrowUp:{prevent:!0,handler:E},ArrowRight:{prevent:!0,handler:A},ArrowDown:{prevent:!0,handler:I},ArrowLeft:{prevent:!0,handler:z},Enter:{prevent:!0,handler:y},Escape:P}},m);const{mergedClsPrefixRef:b,inlineThemeDisabled:C}=useConfig(e),g=useTheme("Dropdown","-dropdown",style$6,dropdownLight$1,e,b);provide(dropdownInjectionKey,{labelFieldRef:toRef(e,"labelField"),childrenFieldRef:toRef(e,"childrenField"),renderLabelRef:toRef(e,"renderLabel"),renderIconRef:toRef(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:d,activeKeyPathRef:f,animatedRef:toRef(e,"animated"),mergedShowRef:t,nodePropsRef:toRef(e,"nodeProps"),renderOptionRef:toRef(e,"renderOption"),menuPropsRef:toRef(e,"menuProps"),doSelect:S,doUpdateShow:w}),watch(t,B=>{!e.animated&&!B&&v()});function S(B,ee){const{onSelect:N}=e;N&&call(N,B,ee)}function w(B){const{"onUpdate:show":ee,onUpdateShow:N}=e;ee&&call(ee,B),N&&call(N,B),n.value=B}function v(){i.value=null,a.value=null,s.value=null}function P(){w(!1)}function z(){_("left")}function A(){_("right")}function E(){_("up")}function I(){_("down")}function y(){const B=k();(B==null?void 0:B.isLeaf)&&t.value&&(S(B.key,B.rawNode),w(!1))}function k(){var B;const{value:ee}=o,{value:N}=l;return!ee||N===null?null:(B=ee.getNode(N))!==null&&B!==void 0?B:null}function _(B){const{value:ee}=l,{value:{getFirstAvailableNode:N}}=o;let L=null;if(ee===null){const te=N();te!==null&&(L=te.key)}else{const te=k();if(te){let j;switch(B){case"down":j=te.getNext();break;case"up":j=te.getPrev();break;case"right":j=te.getChild();break;case"left":j=te.getParent();break}j&&(L=j.key)}}L!==null&&(i.value=null,a.value=L)}const O=computed(()=>{const{size:B,inverted:ee}=e,{common:{cubicBezierEaseInOut:N},self:L}=g.value,{padding:te,dividerColor:j,borderRadius:ne,optionOpacityDisabled:$,[createKey("optionIconSuffixWidth",B)]:W,[createKey("optionSuffixWidth",B)]:pe,[createKey("optionIconPrefixWidth",B)]:Te,[createKey("optionPrefixWidth",B)]:Be,[createKey("fontSize",B)]:xe,[createKey("optionHeight",B)]:we,[createKey("optionIconSize",B)]:fe}=L,ue={"--n-bezier":N,"--n-font-size":xe,"--n-padding":te,"--n-border-radius":ne,"--n-option-height":we,"--n-option-prefix-width":Be,"--n-option-icon-prefix-width":Te,"--n-option-suffix-width":pe,"--n-option-icon-suffix-width":W,"--n-option-icon-size":fe,"--n-divider-color":j,"--n-option-opacity-disabled":$};return ee?(ue["--n-color"]=L.colorInverted,ue["--n-option-color-hover"]=L.optionColorHoverInverted,ue["--n-option-color-active"]=L.optionColorActiveInverted,ue["--n-option-text-color"]=L.optionTextColorInverted,ue["--n-option-text-color-hover"]=L.optionTextColorHoverInverted,ue["--n-option-text-color-active"]=L.optionTextColorActiveInverted,ue["--n-option-text-color-child-active"]=L.optionTextColorChildActiveInverted,ue["--n-prefix-color"]=L.prefixColorInverted,ue["--n-suffix-color"]=L.suffixColorInverted,ue["--n-group-header-text-color"]=L.groupHeaderTextColorInverted):(ue["--n-color"]=L.color,ue["--n-option-color-hover"]=L.optionColorHover,ue["--n-option-color-active"]=L.optionColorActive,ue["--n-option-text-color"]=L.optionTextColor,ue["--n-option-text-color-hover"]=L.optionTextColorHover,ue["--n-option-text-color-active"]=L.optionTextColorActive,ue["--n-option-text-color-child-active"]=L.optionTextColorChildActive,ue["--n-prefix-color"]=L.prefixColor,ue["--n-suffix-color"]=L.suffixColor,ue["--n-group-header-text-color"]=L.groupHeaderTextColor),ue}),Y=C?useThemeClass("dropdown",computed(()=>`${e.size[0]}${e.inverted?"i":""}`),O,e):void 0;return{mergedClsPrefix:b,mergedTheme:g,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{!e.animated||v()},doUpdateShow:w,cssVars:C?void 0:O,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender}},render(){const e=(o,r,i,a,s)=>{var l;const{mergedClsPrefix:d,menuProps:f}=this;(l=this.onRender)===null||l===void 0||l.call(this);const m=(f==null?void 0:f(void 0,this.tmNodes.map(C=>C.rawNode)))||{},b={ref:createRefSetter(r),class:[o,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return h(NDropdownMenu,mergeProps(this.$attrs,b,m))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return h(NPopover,Object.assign({},keep(this.$props,popoverPropKeys),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),commonVars$7={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},self$t=e=>{const{popoverColor:n,textColor2:t,primaryColor:o,hoverColor:r,dividerColor:i,opacityDisabled:a,boxShadow2:s,borderRadius:l,iconColor:d,iconColorDisabled:f}=e;return Object.assign(Object.assign({},commonVars$7),{panelColor:n,panelBoxShadow:s,panelDividerColor:i,itemTextColor:t,itemTextColorActive:o,itemColorHover:r,itemOpacityDisabled:a,itemBorderRadius:l,borderRadius:l,iconColor:d,iconColorDisabled:f})},timePickerDark={name:"TimePicker",common:commonDark,peers:{Scrollbar:scrollbarDark$1,Button:buttonDark$1,Input:inputDark$1},self:self$t},timePickerDark$1=timePickerDark,commonVars$6={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},self$s=e=>{const{hoverColor:n,fontSize:t,textColor2:o,textColorDisabled:r,popoverColor:i,primaryColor:a,borderRadiusSmall:s,iconColor:l,iconColorDisabled:d,textColor1:f,dividerColor:m,boxShadow2:b,borderRadius:C,fontWeightStrong:g}=e;return Object.assign(Object.assign({},commonVars$6),{itemFontSize:t,calendarDaysFontSize:t,calendarTitleFontSize:t,itemTextColor:o,itemTextColorDisabled:r,itemTextColorActive:i,itemTextColorCurrent:a,itemColorIncluded:changeColor(a,{alpha:.1}),itemColorHover:n,itemColorDisabled:n,itemColorActive:a,itemBorderRadius:s,panelColor:i,panelTextColor:o,arrowColor:l,calendarTitleTextColor:f,calendarTitleColorHover:n,calendarDaysTextColor:o,panelHeaderDividerColor:m,calendarDaysDividerColor:m,calendarDividerColor:m,panelActionDividerColor:m,panelBoxShadow:b,panelBorderRadius:C,calendarTitleFontWeight:g,scrollItemBorderRadius:C,iconColor:l,iconColorDisabled:d})},datePickerDark={name:"DatePicker",common:commonDark,peers:{Input:inputDark$1,Button:buttonDark$1,TimePicker:timePickerDark$1,Scrollbar:scrollbarDark$1},self(e){const{popoverColor:n,hoverColor:t,primaryColor:o}=e,r=self$s(e);return r.itemColorDisabled=composite(n,t),r.itemColorIncluded=changeColor(o,{alpha:.15}),r.itemColorHover=composite(n,t),r}},datePickerDark$1=datePickerDark;var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const commonVariables$7={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},self$r=e=>{const{tableHeaderColor:n,textColor2:t,textColor1:o,cardColor:r,modalColor:i,popoverColor:a,dividerColor:s,borderRadius:l,fontWeightStrong:d,lineHeight:f,fontSizeSmall:m,fontSizeMedium:b,fontSizeLarge:C}=e;return Object.assign(Object.assign({},commonVariables$7),{lineHeight:f,fontSizeSmall:m,fontSizeMedium:b,fontSizeLarge:C,titleTextColor:o,thColor:composite(r,n),thColorModal:composite(i,n),thColorPopover:composite(a,n),thTextColor:o,thFontWeight:d,tdTextColor:t,tdColor:r,tdColorModal:i,tdColorPopover:a,borderColor:composite(r,s),borderColorModal:composite(i,s),borderColorPopover:composite(a,s),borderRadius:l})},descriptionsDark={name:"Descriptions",common:commonDark,self:self$r},descriptionsDark$1=descriptionsDark,commonVars$5={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},self$q=e=>{const{textColor1:n,textColor2:t,modalColor:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,infoColor:d,successColor:f,warningColor:m,errorColor:b,primaryColor:C,dividerColor:g,borderRadius:S,fontWeightStrong:w,lineHeight:v,fontSize:P}=e;return Object.assign(Object.assign({},commonVars$5),{fontSize:P,lineHeight:v,border:`1px solid ${g}`,titleTextColor:n,textColor:t,color:o,closeColorHover:s,closeColorPressed:l,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeBorderRadius:S,iconColor:C,iconColorInfo:d,iconColorSuccess:f,iconColorWarning:m,iconColorError:b,borderRadius:S,titleFontWeight:w})},dialogDark={name:"Dialog",common:commonDark,peers:{Button:buttonDark$1},self:self$q},dialogDark$1=dialogDark,self$p=e=>{const{modalColor:n,textColor2:t,boxShadow3:o}=e;return{color:n,textColor:t,boxShadow:o}},modalDark={name:"Modal",common:commonDark,peers:{Scrollbar:scrollbarDark$1,Dialog:dialogDark$1,Card:cardDark$1},self:self$p},modalDark$1=modalDark,self$o=e=>{const{textColor1:n,dividerColor:t,fontWeightStrong:o}=e;return{textColor:n,color:t,fontWeight:o}},dividerLight={name:"Divider",common:commonLight,self:self$o},dividerLight$1=dividerLight,dividerDark={name:"Divider",common:commonDark,self:self$o},dividerDark$1=dividerDark,style$5=cB("divider",`
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
 `),cNotM("dashed",[cE("line",{backgroundColor:"var(--n-color)"})]),cM("dashed",[cE("line",{borderColor:"var(--n-color)"})]),cM("vertical",{backgroundColor:"var(--n-color)"})]),dividerProps=Object.assign(Object.assign({},useTheme.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),__unplugin_components_2=defineComponent({name:"Divider",props:dividerProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Divider","-divider",style$5,dividerLight$1,e,n),r=computed(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:s,textColor:l,fontWeight:d}}=o.value;return{"--n-bezier":a,"--n-color":s,"--n-text-color":l,"--n-font-weight":d}}),i=t?useThemeClass("divider",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:o,dashed:r,cssVars:i,mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:o,[`${a}-divider--no-title`]:!n.default,[`${a}-divider--dashed`]:r,[`${a}-divider--title-position-${t}`]:n.default&&t}],style:i},o?null:h("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!o&&n.default?h(Fragment,null,h("div",{class:`${a}-divider__title`},this.$slots),h("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),self$n=e=>{const{modalColor:n,textColor1:t,textColor2:o,boxShadow3:r,lineHeight:i,fontWeightStrong:a,dividerColor:s,closeColorHover:l,closeColorPressed:d,closeIconColor:f,closeIconColorHover:m,closeIconColorPressed:b,borderRadius:C,primaryColorHover:g}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:n,textColor:o,titleTextColor:t,titleFontSize:"18px",titleFontWeight:a,boxShadow:r,lineHeight:i,headerBorderBottom:`1px solid ${s}`,footerBorderTop:`1px solid ${s}`,closeIconColor:f,closeIconColorHover:m,closeIconColorPressed:b,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:d,closeBorderRadius:C,resizableTriggerColorHover:g}},drawerDark={name:"Drawer",common:commonDark,peers:{Scrollbar:scrollbarDark$1},self:self$n},drawerDark$1=drawerDark,commonVariables$6={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},dynamicInputDark={name:"DynamicInput",common:commonDark,peers:{Input:inputDark$1,Button:buttonDark$1},self(){return commonVariables$6}},dynamicInputDark$1=dynamicInputDark,commonVars$4={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},spaceDark={name:"Space",self(){return commonVars$4}},spaceDark$1=spaceDark,self$m=()=>commonVars$4,spaceLight={name:"Space",self:self$m},spaceLight$1=spaceLight;let supportFlexGap;const ensureSupportFlexGap=()=>{if(!isBrowser$2)return!0;if(supportFlexGap===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),supportFlexGap=n}return supportFlexGap},spaceProps=Object.assign(Object.assign({},useTheme.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),__unplugin_components_4=defineComponent({name:"Space",props:spaceProps,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=useConfig(e),o=useTheme("Space","-space",void 0,spaceLight$1,e,n),r=useRtl("Space",t,n);return{useGap:ensureSupportFlexGap(),rtlEnabled:r,mergedClsPrefix:n,margin:computed(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[createKey("gap",i)]:a}}=o.value,{row:s,col:l}=getGap(a);return{horizontal:depx(l),vertical:depx(s)}})}},render(){const{vertical:e,align:n,inline:t,justify:o,itemStyle:r,margin:i,wrap:a,mergedClsPrefix:s,rtlEnabled:l,useGap:d,wrapItem:f,internalUseGap:m}=this,b=flatten$2(getSlot$1(this));if(!b.length)return null;const C=`${i.horizontal}px`,g=`${i.horizontal/2}px`,S=`${i.vertical}px`,w=`${i.vertical/2}px`,v=b.length-1,P=o.startsWith("space-");return h("div",{role:"none",class:[`${s}-space`,l&&`${s}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!a||e?"nowrap":"wrap",marginTop:d||e?"":`-${w}`,marginBottom:d||e?"":`-${w}`,alignItems:n,gap:d?`${i.vertical}px ${i.horizontal}px`:""}},!f&&(d||m)?b:b.map((z,A)=>h("div",{role:"none",style:[r,{maxWidth:"100%"},d?"":e?{marginBottom:A!==v?S:""}:l?{marginLeft:P?o==="space-between"&&A===v?"":g:A!==v?C:"",marginRight:P?o==="space-between"&&A===0?"":g:"",paddingTop:w,paddingBottom:w}:{marginRight:P?o==="space-between"&&A===v?"":g:A!==v?C:"",marginLeft:P?o==="space-between"&&A===0?"":g:"",paddingTop:w,paddingBottom:w}]},z)))}}),dynamicTagsDark={name:"DynamicTags",common:commonDark,peers:{Input:inputDark$1,Button:buttonDark$1,Tag:tagDark$1,Space:spaceDark$1},self(){return{inputWidth:"64px"}}},dynamicTagsDark$1=dynamicTagsDark,elementDark={name:"Element",common:commonDark},elementDark$1=elementDark,elementLight={name:"Element",common:commonLight},elementLight$1=elementLight,elementProps=Object.assign(Object.assign({},useTheme.props),{tag:{type:String,default:"div"}}),__unplugin_components_5=defineComponent({name:"Element",alias:["El"],props:elementProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Element","-element",void 0,elementLight$1,e,n),r=computed(()=>{const{common:a}=o.value;return Object.keys(a).reduce((s,l)=>(s[`--${kebabCase$1(l)}`]=a[l],s),{})}),i=t?useThemeClass("element",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{tag:n,mergedClsPrefix:t,cssVars:o,themeClass:r,onRender:i,$slots:a}=this;return i==null||i(),h(n,{role:"none",class:[`${t}-element`,r],style:o},(e=a.default)===null||e===void 0?void 0:e.call(a))}}),commonVariables$5={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},self$l=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,textColor1:r,errorColor:i,warningColor:a,lineHeight:s,textColor3:l}=e;return Object.assign(Object.assign({},commonVariables$5),{blankHeightSmall:n,blankHeightMedium:t,blankHeightLarge:o,lineHeight:s,labelTextColor:r,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:a,feedbackTextColor:l})},formItemDark={name:"Form",common:commonDark,self:self$l},formDark=formItemDark,defaultSpan$1=1,gridInjectionKey="n-grid",defaultSpan=1,gridItemProps={span:{type:[Number,String],default:defaultSpan},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},__unplugin_components_10=defineComponent({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:gridItemProps,setup(){const{isSsrRef:e,xGapRef:n,itemStyleRef:t,overflowRef:o,layoutShiftDisabledRef:r}=inject(gridInjectionKey),i=getCurrentInstance();return{overflow:o,itemStyle:t,layoutShiftDisabled:r,mergedXGap:computed(()=>pxfy(n.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=defaultSpan,privateShow:s=!0,privateColStart:l=void 0,privateOffset:d=0}=i.vnode.props,{value:f}=n,m=pxfy(f||0);return{display:s?"":"none",gridColumn:`${l!=null?l:`span ${a}`} / span ${a}`,marginLeft:d?`calc((100% - (${a} - 1) * ${m}) / ${a} * ${d} + ${m} * ${d})`:""}}}},render(){var e,n;if(this.layoutShiftDisabled){const{span:t,offset:o,mergedXGap:r}=this;return h("div",{style:{gridColumn:`span ${t} / span ${t}`,marginLeft:o?`calc((100% - (${t} - 1) * ${r}) / ${t} * ${o} + ${r} * ${o})`:""}},this.$slots)}return h("div",{style:[this.itemStyle,this.deriveStyle()]},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e,{overflow:this.overflow}))}}),gradientTextDark={name:"GradientText",common:commonDark,self(e){const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,primaryColorSuppl:a,successColorSuppl:s,warningColorSuppl:l,errorColorSuppl:d,infoColorSuppl:f,fontWeightStrong:m}=e;return{fontWeight:m,rotate:"252deg",colorStartPrimary:n,colorEndPrimary:a,colorStartInfo:i,colorEndInfo:f,colorStartWarning:o,colorEndWarning:l,colorStartError:r,colorEndError:d,colorStartSuccess:t,colorEndSuccess:s}}},gradientTextDark$1=gradientTextDark,defaultBreakpoints={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},defaultCols=24,SSR_ATTR_NAME="__ssr__",gridProps={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:defaultCols},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},__unplugin_components_13=defineComponent({name:"Grid",inheritAttrs:!1,props:gridProps,setup(e){const{mergedClsPrefixRef:n,mergedBreakpointsRef:t}=useConfig(e),o=/^\d+$/,r=ref(void 0),i=useBreakpoints((t==null?void 0:t.value)||defaultBreakpoints),a=useMemo(()=>!!(e.itemResponsive||!o.test(e.cols.toString())||!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))),s=computed(()=>{if(!!a.value)return e.responsive==="self"?r.value:i.value}),l=useMemo(()=>{var v;return(v=Number(parseResponsivePropValue(e.cols.toString(),s.value)))!==null&&v!==void 0?v:defaultCols}),d=useMemo(()=>parseResponsivePropValue(e.xGap.toString(),s.value)),f=useMemo(()=>parseResponsivePropValue(e.yGap.toString(),s.value)),m=v=>{r.value=v.contentRect.width},b=v=>{beforeNextFrameOnce(m,v)},C=ref(!1),g=computed(()=>{if(e.responsive==="self")return b}),S=ref(!1),w=ref();return onMounted(()=>{const{value:v}=w;v&&v.hasAttribute(SSR_ATTR_NAME)&&(v.removeAttribute(SSR_ATTR_NAME),S.value=!0)}),provide(gridInjectionKey,{layoutShiftDisabledRef:toRef(e,"layoutShiftDisabled"),isSsrRef:S,itemStyleRef:toRef(e,"itemStyle"),xGapRef:d,overflowRef:C}),{isSsr:!isBrowser$2,contentEl:w,mergedClsPrefix:n,style:computed(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:pxfy(e.xGap),rowGap:pxfy(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${l.value}, minmax(0, 1fr))`,columnGap:pxfy(d.value),rowGap:pxfy(f.value)}),isResponsive:a,responsiveQuery:s,responsiveCols:l,handleResize:g,overflow:C}},render(){if(this.layoutShiftDisabled)return h("div",mergeProps({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var n,t,o,r,i,a,s;this.overflow=!1;const l=flatten$2(getSlot$1(this)),d=[],{collapsed:f,collapsedRows:m,responsiveCols:b,responsiveQuery:C}=this;l.forEach(P=>{var z,A,E,I;if(((z=P==null?void 0:P.type)===null||z===void 0?void 0:z.__GRID_ITEM__)!==!0)return;if(isNodeVShowFalse(P)){const _=cloneVNode(P);_.props?_.props.privateShow=!1:_.props={privateShow:!1},d.push({child:_,rawChildSpan:0});return}P.dirs=((A=P.dirs)===null||A===void 0?void 0:A.filter(({dir:_})=>_!==vShow))||null;const y=cloneVNode(P),k=Number((I=parseResponsivePropValue((E=y.props)===null||E===void 0?void 0:E.span,C))!==null&&I!==void 0?I:defaultSpan$1);k!==0&&d.push({child:y,rawChildSpan:k})});let g=0;const S=(n=d[d.length-1])===null||n===void 0?void 0:n.child;if(S!=null&&S.props){const P=(t=S.props)===null||t===void 0?void 0:t.suffix;P!==void 0&&P!==!1&&(g=(r=(o=S.props)===null||o===void 0?void 0:o.span)!==null&&r!==void 0?r:defaultSpan$1,S.props.privateSpan=g,S.props.privateColStart=b+1-g,S.props.privateShow=(i=S.props.privateShow)!==null&&i!==void 0?i:!0)}let w=0,v=!1;for(const{child:P,rawChildSpan:z}of d){if(v&&(this.overflow=!0),!v){const A=Number((s=parseResponsivePropValue((a=P.props)===null||a===void 0?void 0:a.offset,C))!==null&&s!==void 0?s:0),E=Math.min(z+A,b);if(P.props?(P.props.privateSpan=E,P.props.privateOffset=A):P.props={privateSpan:E,privateOffset:A},f){const I=w%b;E+I>b&&(w+=b-I),E+w+g>m*b?v=!0:w+=E}}v&&(P.props?P.props.privateShow!==!0&&(P.props.privateShow=!1):P.props={privateShow:!1})}return h("div",mergeProps({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[SSR_ATTR_NAME]:this.isSsr||void 0},this.$attrs),d.map(({child:P})=>P))};return this.isResponsive&&this.responsive==="self"?h(VResizeObserver,{onResize:this.handleResize},{default:e}):e()}}),self$k=e=>{const{primaryColor:n,baseColor:t}=e;return{color:n,iconColor:t}},iconDark={name:"IconWrapper",common:commonDark,self:self$k},iconWrapperDark=iconDark,commonVars$3={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},self$j=e=>{const{textColor2:n,successColor:t,infoColor:o,warningColor:r,errorColor:i,popoverColor:a,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:d,closeColorHover:f,closeColorPressed:m,textColor1:b,textColor3:C,borderRadius:g,fontWeightStrong:S,boxShadow2:w,lineHeight:v,fontSize:P}=e;return Object.assign(Object.assign({},commonVars$3),{borderRadius:g,lineHeight:v,fontSize:P,headerFontWeight:S,iconColor:n,iconColorSuccess:t,iconColorInfo:o,iconColorWarning:r,iconColorError:i,color:a,textColor:n,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:d,closeBorderRadius:g,closeColorHover:f,closeColorPressed:m,headerTextColor:b,descriptionTextColor:C,actionTextColor:n,boxShadow:w})},notificationDark={name:"Notification",common:commonDark,peers:{Scrollbar:scrollbarDark$1},self:self$j},notificationDark$1=notificationDark,commonVariables$4={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},self$i=e=>{const{textColor2:n,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,infoColor:i,successColor:a,errorColor:s,warningColor:l,popoverColor:d,boxShadow2:f,primaryColor:m,lineHeight:b,borderRadius:C,closeColorHover:g,closeColorPressed:S}=e;return Object.assign(Object.assign({},commonVariables$4),{closeBorderRadius:C,textColor:n,textColorInfo:n,textColorSuccess:n,textColorError:n,textColorWarning:n,textColorLoading:n,color:d,colorInfo:d,colorSuccess:d,colorError:d,colorWarning:d,colorLoading:d,boxShadow:f,boxShadowInfo:f,boxShadowSuccess:f,boxShadowError:f,boxShadowWarning:f,boxShadowLoading:f,iconColor:n,iconColorInfo:i,iconColorSuccess:a,iconColorWarning:l,iconColorError:s,iconColorLoading:m,closeColorHover:g,closeColorPressed:S,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,closeColorHoverInfo:g,closeColorPressedInfo:S,closeIconColorInfo:t,closeIconColorHoverInfo:o,closeIconColorPressedInfo:r,closeColorHoverSuccess:g,closeColorPressedSuccess:S,closeIconColorSuccess:t,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:r,closeColorHoverError:g,closeColorPressedError:S,closeIconColorError:t,closeIconColorHoverError:o,closeIconColorPressedError:r,closeColorHoverWarning:g,closeColorPressedWarning:S,closeIconColorWarning:t,closeIconColorHoverWarning:o,closeIconColorPressedWarning:r,closeColorHoverLoading:g,closeColorPressedLoading:S,closeIconColorLoading:t,closeIconColorHoverLoading:o,closeIconColorPressedLoading:r,loadingColor:m,lineHeight:b,borderRadius:C})},messageDark={name:"Message",common:commonDark,self:self$i},messageDark$1=messageDark,buttonGroupDark={name:"ButtonGroup",common:commonDark},buttonGroupDark$1=buttonGroupDark,inputNumberDark={name:"InputNumber",common:commonDark,peers:{Button:buttonDark$1,Input:inputDark$1},self(e){const{textColorDisabled:n}=e;return{iconColorDisabled:n}}},inputNumberDark$1=inputNumberDark,layoutDark={name:"Layout",common:commonDark,peers:{Scrollbar:scrollbarDark$1},self(e){const{textColor2:n,bodyColor:t,popoverColor:o,cardColor:r,dividerColor:i,scrollbarColor:a,scrollbarColorHover:s}=e;return{textColor:n,textColorInverted:n,color:t,colorEmbedded:t,headerColor:r,headerColorInverted:r,footerColor:r,footerColorInverted:r,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:r,siderColorInverted:r,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:o,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:composite(t,a),siderToggleBarColorHover:composite(t,s),__invertScrollbar:"false"}}},layoutDark$1=layoutDark,self$h=e=>{const{baseColor:n,textColor2:t,bodyColor:o,cardColor:r,dividerColor:i,actionColor:a,scrollbarColor:s,scrollbarColorHover:l,invertedColor:d}=e;return{textColor:t,textColorInverted:"#FFF",color:o,colorEmbedded:a,headerColor:r,headerColorInverted:d,footerColor:a,footerColorInverted:d,headerBorderColor:i,headerBorderColorInverted:d,footerBorderColor:i,footerBorderColorInverted:d,siderBorderColor:i,siderBorderColorInverted:d,siderColor:r,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:composite(o,s),siderToggleBarColorHover:composite(o,l),__invertScrollbar:"true"}},layoutLight={name:"Layout",common:commonLight,peers:{Scrollbar:scrollbarLight$1},self:self$h},layoutLight$1=layoutLight,self$g=e=>{const{textColor2:n,cardColor:t,modalColor:o,popoverColor:r,dividerColor:i,borderRadius:a,fontSize:s,hoverColor:l}=e;return{textColor:n,color:t,colorHover:l,colorModal:o,colorHoverModal:composite(o,l),colorPopover:r,colorHoverPopover:composite(r,l),borderColor:i,borderColorModal:composite(o,i),borderColorPopover:composite(r,i),borderRadius:a,fontSize:s}},listDark$1={name:"List",common:commonDark,self:self$g},listDark$2=listDark$1,loadingBarDark={name:"LoadingBar",common:commonDark,self(e){const{primaryColor:n}=e;return{colorError:"red",colorLoading:n,height:"2px"}}},loadingBarDark$1=loadingBarDark,logDark={name:"Log",common:commonDark,peers:{Scrollbar:scrollbarDark$1,Code:codeDark$1},self(e){const{textColor2:n,inputColor:t,fontSize:o,primaryColor:r}=e;return{loaderFontSize:o,loaderTextColor:n,loaderColor:t,loaderBorder:"1px solid #0000",loadingColor:r}}},logDark$1=logDark,listDark={name:"Mention",common:commonDark,peers:{InternalSelectMenu:internalSelectMenuDark$1,Input:inputDark$1},self(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}},mentionDark=listDark;function createPartialInvertedVars(e,n,t,o){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:o}}const self$f=e=>{const{borderRadius:n,textColor3:t,primaryColor:o,textColor2:r,textColor1:i,fontSize:a,dividerColor:s,hoverColor:l,primaryColorHover:d}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:changeColor(o,{alpha:.1}),itemColorActiveHover:changeColor(o,{alpha:.1}),itemColorActiveCollapsed:changeColor(o,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:o,itemTextColorActiveHover:o,itemTextColorChildActive:o,itemTextColorChildActiveHover:o,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:d,itemTextColorActiveHorizontal:o,itemTextColorActiveHoverHorizontal:o,itemTextColorChildActiveHorizontal:o,itemTextColorChildActiveHoverHorizontal:o,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:o,itemIconColorActiveHover:o,itemIconColorChildActive:o,itemIconColorChildActiveHover:o,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:d,itemIconColorActiveHorizontal:o,itemIconColorActiveHoverHorizontal:o,itemIconColorChildActiveHorizontal:o,itemIconColorChildActiveHoverHorizontal:o,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:o,arrowColorActiveHover:o,arrowColorChildActive:o,arrowColorChildActiveHover:o,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:s},createPartialInvertedVars("#BBB",o,"#FFF","#AAA"))},menuDark={name:"Menu",common:commonDark,peers:{Tooltip:tooltipDark$1,Dropdown:dropdownDark$1},self(e){const{primaryColor:n,primaryColorSuppl:t}=e,o=self$f(e);return o.itemColorActive=changeColor(n,{alpha:.15}),o.itemColorActiveHover=changeColor(n,{alpha:.15}),o.itemColorActiveCollapsed=changeColor(n,{alpha:.15}),o.itemColorActiveInverted=t,o.itemColorActiveHoverInverted=t,o.itemColorActiveCollapsedInverted=t,o}},menuDark$1=menuDark,common={titleFontSize:"18px",backSize:"22px"};function self$e(e){const{textColor1:n,textColor2:t,textColor3:o,fontSize:r,fontWeightStrong:i,primaryColorHover:a,primaryColorPressed:s}=e;return Object.assign(Object.assign({},common),{titleFontWeight:i,fontSize:r,titleTextColor:n,backColor:t,backColorHover:a,backColorPressed:s,subtitleTextColor:o})}const pageHeaderDark={name:"PageHeader",common:commonDark,self:self$e},commonVars$2={iconSize:"22px"},self$d=e=>{const{fontSize:n,warningColor:t}=e;return Object.assign(Object.assign({},commonVars$2),{fontSize:n,iconColor:t})},popconfirmDark={name:"Popconfirm",common:commonDark,peers:{Button:buttonDark$1,Popover:popoverDark$1},self:self$d},popconfirmDark$1=popconfirmDark,self$c=e=>{const{infoColor:n,successColor:t,warningColor:o,errorColor:r,textColor2:i,progressRailColor:a,fontSize:s,fontWeight:l}=e;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:l,railColor:a,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:n,iconColorInfo:n,iconColorSuccess:t,iconColorWarning:o,iconColorError:r,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:n,fillColorInfo:n,fillColorSuccess:t,fillColorWarning:o,fillColorError:r,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},progressDark={name:"Progress",common:commonDark,self(e){const n=self$c(e);return n.textColorLineInner="rgb(0, 0, 0)",n.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",n}},progressDark$1=progressDark,rateDark={name:"Rate",common:commonDark,self(e){const{railColor:n}=e;return{itemColor:n,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},rateDark$1=rateDark,commonVariables$3={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0},self$b=e=>{const{textColor2:n,textColor1:t,errorColor:o,successColor:r,infoColor:i,warningColor:a,lineHeight:s,fontWeightStrong:l}=e;return Object.assign(Object.assign({},commonVariables$3),{lineHeight:s,titleFontWeight:l,titleTextColor:t,textColor:n,iconColorError:o,iconColorSuccess:r,iconColorInfo:i,iconColorWarning:a})},resultDark={name:"Result",common:commonDark,self:self$b},resultDark$1=resultDark,sizeVariables$3={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},sliderDark={name:"Slider",common:commonDark,self(e){const n="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:t,modalColor:o,primaryColorSuppl:r,popoverColor:i,textColor2:a,cardColor:s,borderRadius:l,fontSize:d,opacityDisabled:f}=e;return Object.assign(Object.assign({},sizeVariables$3),{fontSize:d,markFontSize:d,railColor:t,railColorHover:t,fillColor:r,fillColorHover:r,opacityDisabled:f,handleColor:"#FFF",dotColor:s,dotColorModal:o,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:n,indicatorTextColor:a,indicatorBorderRadius:l,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})}},sliderDark$1=sliderDark,self$a=e=>{const{opacityDisabled:n,heightTiny:t,heightSmall:o,heightMedium:r,heightLarge:i,heightHuge:a,primaryColor:s,fontSize:l}=e;return{fontSize:l,textColor:s,sizeTiny:t,sizeSmall:o,sizeMedium:r,sizeLarge:i,sizeHuge:a,color:s,opacitySpinning:n}},spinDark={name:"Spin",common:commonDark,self:self$a},spinDark$1=spinDark,self$9=e=>{const{textColor2:n,textColor3:t,fontSize:o,fontWeight:r}=e;return{labelFontSize:o,labelFontWeight:r,valueFontWeight:r,valueFontSize:"24px",labelTextColor:t,valuePrefixTextColor:n,valueSuffixTextColor:n,valueTextColor:n}},statisticDark={name:"Statistic",common:commonDark,self:self$9},statisticDark$1=statisticDark,commonVariables$2={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},self$8=e=>{const{fontWeightStrong:n,baseColor:t,textColorDisabled:o,primaryColor:r,errorColor:i,textColor1:a,textColor2:s}=e;return Object.assign(Object.assign({},commonVariables$2),{stepHeaderFontWeight:n,indicatorTextColorProcess:t,indicatorTextColorWait:o,indicatorTextColorFinish:r,indicatorTextColorError:i,indicatorBorderColorProcess:r,indicatorBorderColorWait:o,indicatorBorderColorFinish:r,indicatorBorderColorError:i,indicatorColorProcess:r,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:o,splitorColorWait:o,splitorColorFinish:r,splitorColorError:o,headerTextColorProcess:a,headerTextColorWait:o,headerTextColorFinish:o,headerTextColorError:i,descriptionTextColorProcess:s,descriptionTextColorWait:o,descriptionTextColorFinish:o,descriptionTextColorError:i})},stepsDark={name:"Steps",common:commonDark,self:self$8},stepsDark$1=stepsDark,commonVars$1={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},switchDark={name:"Switch",common:commonDark,self(e){const{primaryColorSuppl:n,opacityDisabled:t,borderRadius:o,primaryColor:r,textColor2:i,baseColor:a}=e,s="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},commonVars$1),{iconColor:a,textColor:i,loadingColor:n,opacityDisabled:t,railColor:s,railColorActive:n,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 8px 0 ${changeColor(r,{alpha:.3})}`})}},switchDark$1=switchDark,sizeVariables$2={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},self$7=e=>{const{dividerColor:n,cardColor:t,modalColor:o,popoverColor:r,tableHeaderColor:i,tableColorStriped:a,textColor1:s,textColor2:l,borderRadius:d,fontWeightStrong:f,lineHeight:m,fontSizeSmall:b,fontSizeMedium:C,fontSizeLarge:g}=e;return Object.assign(Object.assign({},sizeVariables$2),{fontSizeSmall:b,fontSizeMedium:C,fontSizeLarge:g,lineHeight:m,borderRadius:d,borderColor:composite(t,n),borderColorModal:composite(o,n),borderColorPopover:composite(r,n),tdColor:t,tdColorModal:o,tdColorPopover:r,tdColorStriped:composite(t,a),tdColorStripedModal:composite(o,a),tdColorStripedPopover:composite(r,a),thColor:composite(t,i),thColorModal:composite(o,i),thColorPopover:composite(r,i),thTextColor:s,tdTextColor:l,thFontWeight:f})},tableDark={name:"Table",common:commonDark,self:self$7},tableDark$1=tableDark,sizeVariables$1={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},self$6=e=>{const{textColor2:n,primaryColor:t,textColorDisabled:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,tabColor:d,baseColor:f,dividerColor:m,fontWeight:b,textColor1:C,borderRadius:g,fontSize:S,fontWeightStrong:w}=e;return Object.assign(Object.assign({},sizeVariables$1),{colorSegment:d,tabFontSizeCard:S,tabTextColorLine:C,tabTextColorActiveLine:t,tabTextColorHoverLine:t,tabTextColorDisabledLine:o,tabTextColorSegment:C,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:o,tabTextColorBar:C,tabTextColorActiveBar:t,tabTextColorHoverBar:t,tabTextColorDisabledBar:o,tabTextColorCard:C,tabTextColorHoverCard:C,tabTextColorActiveCard:t,tabTextColorDisabledCard:o,barColor:t,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,closeBorderRadius:g,tabColor:d,tabColorSegment:f,tabBorderColor:m,tabFontWeightActive:b,tabFontWeight:b,tabBorderRadius:g,paneTextColor:n,fontWeightStrong:w})},tabsDark={name:"Tabs",common:commonDark,self(e){const n=self$6(e),{inputColor:t}=e;return n.colorSegment=t,n.tabColorSegment=t,n}},tabsDark$1=tabsDark,self$5=e=>{const{textColor1:n,textColor2:t,fontWeightStrong:o,fontSize:r}=e;return{fontSize:r,titleTextColor:n,textColor:t,titleFontWeight:o}},thingDark={name:"Thing",common:commonDark,self:self$5},thingDark$1=thingDark,sizeVariables={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},timelineDark={name:"Timeline",common:commonDark,self(e){const{textColor3:n,infoColorSuppl:t,errorColorSuppl:o,successColorSuppl:r,warningColorSuppl:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:d,fontSize:f}=e;return Object.assign(Object.assign({},sizeVariables),{contentFontSize:f,titleFontWeight:d,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})}},timelineDark$1=timelineDark,commonVariables$1={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},transferDark$1={name:"Transfer",common:commonDark,peers:{Checkbox:checkboxDark$1,Scrollbar:scrollbarDark$1,Input:inputDark$1,Empty:emptyDark$1,Button:buttonDark$1},self(e){const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,inputColor:l,tableHeaderColor:d,textColor1:f,textColorDisabled:m,textColor2:b,textColor3:C,hoverColor:g,closeColorHover:S,closeColorPressed:w,closeIconColor:v,closeIconColorHover:P,closeIconColorPressed:z,dividerColor:A}=e;return Object.assign(Object.assign({},commonVariables$1),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:A,borderColor:"#0000",listColor:l,headerColor:d,titleTextColor:f,titleTextColorDisabled:m,extraTextColor:C,extraTextColorDisabled:m,itemTextColor:b,itemTextColorDisabled:m,itemColorPending:g,titleFontWeight:n,closeColorHover:S,closeColorPressed:w,closeIconColor:v,closeIconColorHover:P,closeIconColorPressed:z})}},transferDark$2=transferDark$1,self$4=e=>{const{borderRadiusSmall:n,hoverColor:t,pressedColor:o,primaryColor:r,textColor3:i,textColor2:a,textColorDisabled:s,fontSize:l}=e;return{fontSize:l,nodeBorderRadius:n,nodeColorHover:t,nodeColorPressed:o,nodeColorActive:changeColor(r,{alpha:.1}),arrowColor:i,nodeTextColor:a,nodeTextColorDisabled:s,loadingColor:r,dropMarkColor:r}},treeDark={name:"Tree",common:commonDark,peers:{Checkbox:checkboxDark$1,Scrollbar:scrollbarDark$1,Empty:emptyDark$1},self(e){const{primaryColor:n}=e,t=self$4(e);return t.nodeColorActive=changeColor(n,{alpha:.15}),t}},treeDark$1=treeDark,treeSelectDark={name:"TreeSelect",common:commonDark,peers:{Tree:treeDark$1,Empty:emptyDark$1,InternalSelection:internalSelectionDark$1}},treeSelectDark$1=treeSelectDark,commonVars={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},self$3=e=>{const{primaryColor:n,textColor2:t,borderColor:o,lineHeight:r,fontSize:i,borderRadiusSmall:a,dividerColor:s,fontWeightStrong:l,textColor1:d,textColor3:f,infoColor:m,warningColor:b,errorColor:C,successColor:g,codeColor:S}=e;return Object.assign(Object.assign({},commonVars),{aTextColor:n,blockquoteTextColor:t,blockquotePrefixColor:o,blockquoteLineHeight:r,blockquoteFontSize:i,codeBorderRadius:a,liTextColor:t,liLineHeight:r,liFontSize:i,hrColor:s,headerFontWeight:l,headerTextColor:d,pTextColor:t,pTextColor1Depth:d,pTextColor2Depth:t,pTextColor3Depth:f,pLineHeight:r,pFontSize:i,headerBarColor:n,headerBarColorPrimary:n,headerBarColorInfo:m,headerBarColorError:C,headerBarColorWarning:b,headerBarColorSuccess:g,textColor:t,textColor1Depth:d,textColor2Depth:t,textColor3Depth:f,textColorPrimary:n,textColorInfo:m,textColorSuccess:g,textColorWarning:b,textColorError:C,codeTextColor:t,codeColor:S,codeBorder:"1px solid #0000"})},typographyLight={name:"Typography",common:commonLight,self:self$3},typographyLight$1=typographyLight,typographyDark={name:"Typography",common:commonDark,self:self$3},typographyDark$1=typographyDark,self$2=e=>{const{iconColor:n,primaryColor:t,errorColor:o,textColor2:r,successColor:i,opacityDisabled:a,actionColor:s,borderColor:l,hoverColor:d,lineHeight:f,borderRadius:m,fontSize:b}=e;return{fontSize:b,lineHeight:f,borderRadius:m,draggerColor:s,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${t}`,itemColorHover:d,itemColorHoverError:changeColor(o,{alpha:.06}),itemTextColor:r,itemTextColorError:o,itemTextColorSuccess:i,itemIconColor:n,itemDisabledOpacity:a,itemBorderImageCardError:`1px solid ${o}`,itemBorderImageCard:`1px solid ${l}`}},uploadDark={name:"Upload",common:commonDark,peers:{Button:buttonDark$1,Progress:progressDark$1},self(e){const{errorColor:n}=e,t=self$2(e);return t.itemColorHoverError=changeColor(n,{alpha:.09}),t}},uploadDark$1=uploadDark,watermarkDark={name:"Watermark",common:commonDark,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},watermarkDark$1=watermarkDark,rowDark={name:"Row",common:commonDark},rowDark$1=rowDark,imageDark={name:"Image",common:commonDark,peers:{Tooltip:tooltipDark$1},self:e=>{const{textColor2:n}=e;return{toolbarIconColor:n,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},layoutSiderInjectionKey="n-layout-sider",positionProp={type:String,default:"static"},style$4=cB("layout",`
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
 `)]),layoutProps={embedded:Boolean,position:positionProp,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},layoutInjectionKey="n-layout";function createLayoutComponent(e){return defineComponent({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},useTheme.props),layoutProps),setup(n){const t=ref(null),o=ref(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=useConfig(n),a=useTheme("Layout","-layout",style$4,layoutLight$1,n,r);function s(S,w){if(n.nativeScrollbar){const{value:v}=t;v&&(w===void 0?v.scrollTo(S):v.scrollTo(S,w))}else{const{value:v}=o;v&&v.scrollTo(S,w)}}provide(layoutInjectionKey,n);let l=0,d=0;const f=S=>{var w;const v=S.target;l=v.scrollLeft,d=v.scrollTop,(w=n.onScroll)===null||w===void 0||w.call(n,S)};useReactivated(()=>{if(n.nativeScrollbar){const S=t.value;S&&(S.scrollTop=d,S.scrollLeft=l)}});const m={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},b={scrollTo:s},C=computed(()=>{const{common:{cubicBezierEaseInOut:S},self:w}=a.value;return{"--n-bezier":S,"--n-color":n.embedded?w.colorEmbedded:w.color,"--n-text-color":w.textColor}}),g=i?useThemeClass("layout",computed(()=>n.embedded?"e":""),C,n):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:o,hasSiderStyle:m,mergedTheme:a,handleNativeElScroll:f,cssVars:i?void 0:C,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},b)},render(){var n;const{mergedClsPrefix:t,hasSider:o}=this;(n=this.onRender)===null||n===void 0||n.call(this);const r=o?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return h("div",{class:i,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):h(NScrollbar,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const __unplugin_components_16=createLayoutComponent(!1),__unplugin_components_14=createLayoutComponent(!0),style$3=cB("layout-footer",`
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
 `)]),layoutFooterProps=Object.assign(Object.assign({},useTheme.props),{inverted:Boolean,position:positionProp,bordered:Boolean}),__unplugin_components_15=defineComponent({name:"LayoutFooter",props:layoutFooterProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Layout","-layout-footer",style$3,layoutLight$1,e,n),r=computed(()=>{const{common:{cubicBezierEaseInOut:a},self:s}=o.value,l={"--n-bezier":a};return e.inverted?(l["--n-color"]=s.footerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.footerBorderColorInverted):(l["--n-color"]=s.footerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.footerBorderColor),l}),i=t?useThemeClass("layout-footer",computed(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${n}-layout-footer`,this.themeClass,this.position&&`${n}-layout-footer--${this.position}-positioned`,this.bordered&&`${n}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),style$2=cB("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[cM("bordered",[cE("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),cE("left-placement",[cM("bordered",[cE("border",`
 right: 0;
 `)])]),cM("right-placement",`
 justify-content: flex-start;
 `,[cM("bordered",[cE("border",`
 left: 0;
 `)]),cM("collapsed",[cB("layout-toggle-button",[cB("base-icon",`
 transform: rotate(180deg);
 `)]),cB("layout-toggle-bar",[c$1("&:hover",[cE("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),cE("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),cB("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[cB("base-icon",`
 transform: rotate(0);
 `)]),cB("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[c$1("&:hover",[cE("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),cE("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),cM("collapsed",[cB("layout-toggle-bar",[c$1("&:hover",[cE("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),cE("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),cB("layout-toggle-button",[cB("base-icon",`
 transform: rotate(0);
 `)])]),cB("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[cB("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),cB("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[cE("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),cE("bottom",`
 position: absolute;
 top: 34px;
 `),c$1("&:hover",[cE("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),cE("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),cE("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),c$1("&:hover",[cE("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),cE("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),cB("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),cM("show-content",[cB("layout-sider-scroll-container",{opacity:1})]),cM("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ToggleButton=defineComponent({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},h(NBaseIcon,{clsPrefix:e},{default:()=>h(ChevronRightIcon,null)}))}}),ToggleBar=defineComponent({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},h("div",{class:`${e}-layout-toggle-bar__top`}),h("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),layoutSiderProps={position:positionProp,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},__unplugin_components_6=defineComponent({name:"LayoutSider",props:Object.assign(Object.assign({},useTheme.props),layoutSiderProps),setup(e){const n=inject(layoutInjectionKey),t=ref(null),o=ref(null),r=computed(()=>formatLength(l.value?e.collapsedWidth:e.width)),i=computed(()=>e.collapseMode!=="transform"?{}:{minWidth:formatLength(e.width)}),a=computed(()=>n?n.siderPlacement:"left"),s=ref(e.defaultCollapsed),l=useMergedState(toRef(e,"collapsed"),s);function d(E,I){if(e.nativeScrollbar){const{value:y}=t;y&&(I===void 0?y.scrollTo(E):y.scrollTo(E,I))}else{const{value:y}=o;y&&y.scrollTo(E,I)}}function f(){const{"onUpdate:collapsed":E,onUpdateCollapsed:I,onExpand:y,onCollapse:k}=e,{value:_}=l;I&&call(I,!_),E&&call(E,!_),s.value=!_,_?y&&call(y):k&&call(k)}let m=0,b=0;const C=E=>{var I;const y=E.target;m=y.scrollLeft,b=y.scrollTop,(I=e.onScroll)===null||I===void 0||I.call(e,E)};useReactivated(()=>{if(e.nativeScrollbar){const E=t.value;E&&(E.scrollTop=b,E.scrollLeft=m)}}),provide(layoutSiderInjectionKey,{collapsedRef:l,collapseModeRef:toRef(e,"collapseMode")});const{mergedClsPrefixRef:g,inlineThemeDisabled:S}=useConfig(e),w=useTheme("Layout","-layout-sider",style$2,layoutLight$1,e,g);function v(E){var I,y;E.propertyName==="max-width"&&(l.value?(I=e.onAfterLeave)===null||I===void 0||I.call(e):(y=e.onAfterEnter)===null||y===void 0||y.call(e))}const P={scrollTo:d},z=computed(()=>{const{common:{cubicBezierEaseInOut:E},self:I}=w.value,{siderToggleButtonColor:y,siderToggleButtonBorder:k,siderToggleBarColor:_,siderToggleBarColorHover:O}=I,Y={"--n-bezier":E,"--n-toggle-button-color":y,"--n-toggle-button-border":k,"--n-toggle-bar-color":_,"--n-toggle-bar-color-hover":O};return e.inverted?(Y["--n-color"]=I.siderColorInverted,Y["--n-text-color"]=I.textColorInverted,Y["--n-border-color"]=I.siderBorderColorInverted,Y["--n-toggle-button-icon-color"]=I.siderToggleButtonIconColorInverted,Y.__invertScrollbar=I.__invertScrollbar):(Y["--n-color"]=I.siderColor,Y["--n-text-color"]=I.textColor,Y["--n-border-color"]=I.siderBorderColor,Y["--n-toggle-button-icon-color"]=I.siderToggleButtonIconColor),Y}),A=S?useThemeClass("layout-sider",computed(()=>e.inverted?"a":"b"),z,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:o,mergedClsPrefix:g,mergedTheme:w,styleMaxWidth:r,mergedCollapsed:l,scrollContainerStyle:i,siderPlacement:a,handleNativeElScroll:C,handleTransitionend:v,handleTriggerClick:f,inlineThemeDisabled:S,cssVars:z,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},P)},render(){var e;const{mergedClsPrefix:n,mergedCollapsed:t,showTrigger:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("aside",{class:[`${n}-layout-sider`,this.themeClass,`${n}-layout-sider--${this.position}-positioned`,`${n}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${n}-layout-sider--bordered`,t&&`${n}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${n}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:formatLength(this.width)}]},this.nativeScrollbar?h("div",{class:`${n}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):h(NScrollbar,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),o?o==="bar"?h(ToggleBar,{clsPrefix:n,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):h(ToggleButton,{clsPrefix:n,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?h("div",{class:`${n}-layout-sider__border`}):null)}}),commonVariables={extraFontSize:"12px",width:"440px"},transferDark={name:"Transfer",common:commonDark,peers:{Checkbox:checkboxDark$1,Scrollbar:scrollbarDark$1,Input:inputDark$1,Empty:emptyDark$1,Button:buttonDark$1},self(e){const{iconColorDisabled:n,iconColor:t,fontWeight:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:d,borderRadius:f,inputColor:m,tableHeaderColor:b,textColor1:C,textColorDisabled:g,textColor2:S,hoverColor:w}=e;return Object.assign(Object.assign({},commonVariables),{itemHeightSmall:d,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:f,borderColor:"#0000",listColor:m,headerColor:b,titleTextColor:C,titleTextColorDisabled:g,extraTextColor:S,filterDividerColor:"#0000",itemTextColor:S,itemTextColorDisabled:g,itemColorPending:w,titleFontWeight:o,iconColor:t,iconColorDisabled:n})}},legacyTransferDark=transferDark,skeletonDark={name:"Skeleton",common:commonDark,self(e){const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}}},style$1=cB("h",`
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
 `),c$1("&::before",{backgroundColor:"var(--n-bar-color)"})])]),headerProps=Object.assign(Object.assign({},useTheme.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),createHeader=e=>defineComponent({name:`H${e}`,props:headerProps,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=useConfig(n),r=useTheme("Typography","-h",style$1,typographyLight$1,n,t),i=computed(()=>{const{type:s}=n,{common:{cubicBezierEaseInOut:l},self:{headerFontWeight:d,headerTextColor:f,[createKey("headerPrefixWidth",e)]:m,[createKey("headerFontSize",e)]:b,[createKey("headerMargin",e)]:C,[createKey("headerBarWidth",e)]:g,[createKey("headerBarColor",s)]:S}}=r.value;return{"--n-bezier":l,"--n-font-size":b,"--n-margin":C,"--n-bar-color":S,"--n-bar-width":g,"--n-font-weight":d,"--n-text-color":f,"--n-prefix-width":m}}),a=o?useThemeClass(`h${e}`,computed(()=>n.type[0]),i,n):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var n;const{prefix:t,alignText:o,mergedClsPrefix:r,cssVars:i,$slots:a}=this;return(n=this.onRender)===null||n===void 0||n.call(this),h(`h${e}`,{class:[`${r}-h`,`${r}-h${e}`,this.themeClass,{[`${r}-h--prefix-bar`]:t,[`${r}-h--align-text`]:o}],style:i},a)}}),NH1=createHeader("1"),NH2=createHeader("2");createHeader("3");createHeader("4");createHeader("5");createHeader("6");const style=cB("text",`
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
 `)]),textProps=Object.assign(Object.assign({},useTheme.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),__unplugin_components_1=defineComponent({name:"Text",props:textProps,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=useConfig(e),o=useTheme("Typography","-text",style,typographyLight$1,e,n),r=computed(()=>{const{depth:a,type:s}=e,l=s==="default"?a===void 0?"textColor":`textColor${a}Depth`:createKey("textColor",s),{common:{fontWeightStrong:d,fontFamilyMono:f,cubicBezierEaseInOut:m},self:{codeTextColor:b,codeBorderRadius:C,codeColor:g,codeBorder:S,[l]:w}}=o.value;return{"--n-bezier":m,"--n-text-color":w,"--n-font-weight-strong":d,"--n-font-famliy-mono":f,"--n-code-border-radius":C,"--n-code-text-color":b,"--n-code-color":g,"--n-code-border":S}}),i=t?useThemeClass("text",computed(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:n,compitableTag:useCompitable(e,["as","tag"]),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,n,t;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],i=(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n);return this.code?h("code",{class:r,style:this.cssVars},this.delete?h("del",null,i):i):this.delete?h("del",{class:r,style:this.cssVars},i):h(this.compitableTag||"span",{class:r,style:this.cssVars},i)}}),self$1=()=>({}),equationDark={name:"Equation",common:commonDark,self:self$1},equationDark$1=equationDark,darkTheme={name:"dark",common:commonDark,Alert:alertDark$1,Anchor:anchorDark$1,AutoComplete:autoCompleteDark$1,Avatar:avatarDark$1,AvatarGroup:avatarGroupDark$1,BackTop:backTopDark$1,Badge:badgeDark$1,Breadcrumb:breadcrumbDark$1,Button:buttonDark$1,ButtonGroup:buttonGroupDark$1,Calendar:calendarDark$1,Card:cardDark$1,Carousel:carouselDark$1,Cascader:cascaderDark$1,Checkbox:checkboxDark$1,Code:codeDark$1,Collapse:collapseDark$1,CollapseTransition:collapseTransitionDark$1,ColorPicker:colorPickerDark$1,DataTable:dataTableDark$1,DatePicker:datePickerDark$1,Descriptions:descriptionsDark$1,Dialog:dialogDark$1,Divider:dividerDark$1,Drawer:drawerDark$1,Dropdown:dropdownDark$1,DynamicInput:dynamicInputDark$1,DynamicTags:dynamicTagsDark$1,Element:elementDark$1,Empty:emptyDark$1,Ellipsis:ellipsisDark$1,Equation:equationDark$1,Form:formDark,GradientText:gradientTextDark$1,Icon:iconDark$2,IconWrapper:iconWrapperDark,Image:imageDark,Input:inputDark$1,InputNumber:inputNumberDark$1,LegacyTransfer:legacyTransferDark,Layout:layoutDark$1,List:listDark$2,LoadingBar:loadingBarDark$1,Log:logDark$1,Menu:menuDark$1,Mention:mentionDark,Message:messageDark$1,Modal:modalDark$1,Notification:notificationDark$1,PageHeader:pageHeaderDark,Pagination:paginationDark$1,Popconfirm:popconfirmDark$1,Popover:popoverDark$1,Popselect:popselectDark,Progress:progressDark$1,Radio:radioDark$1,Rate:rateDark$1,Result:resultDark$1,Row:rowDark$1,Scrollbar:scrollbarDark$1,Select:selectDark$1,Skeleton:skeletonDark,Slider:sliderDark$1,Space:spaceDark$1,Spin:spinDark$1,Statistic:statisticDark$1,Steps:stepsDark$1,Switch:switchDark$1,Table:tableDark$1,Tabs:tabsDark$1,Tag:tagDark$1,Thing:thingDark$1,TimePicker:timePickerDark$1,Timeline:timelineDark$1,Tooltip:tooltipDark$1,Transfer:transferDark$2,Tree:treeDark$1,TreeSelect:treeSelectDark$1,Typography:typographyDark$1,Upload:uploadDark$1,Watermark:watermarkDark$1},dict_en=`local HDsearch="https://harddrop.com/wiki?search="
local HDwiki="\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link."
return {
    {"Translator Note 1",
        "",
        "help",
        "This is an English translation of the Simplified Chinese version of TetroDictionary.\\n\\nThe translation may not accurately reflect the original content in Simplified Chinese.\\n\\nFeel free to visit our GitHub page if you want to view the contributors or make contributions yourself. Click the globe icon in the bottom right corner to open the webpage.\\n\\nTranslated and corrected by User670 & C\u2082\u2089H\u2082\u2085N\u2083O\u2085 et al.",
        "https://github.com/26F-Studio/Techmino/blob/main/parts/language/dict_en.lua",
    },
    {"To New Players",
        "guides newbie noob readme recommendations suggestions helps",
        "help",
        "Here are our suggestions to the new players in Tetris:\\n\\tTwo Principles:\\n\\t\\t1. Choose a Tetris game with good controls (e.g., Techmino, TETR.IO, Jstris, Tetris Online, Tetr.js). Don\u2019t use those \u201Cprimitive\u201D versions which deviate too much from the Guideline and have awful controls. \\n\\t\\t2. Spend time establishing the basic skills, like reading the Next sequence and performing Tetris stably. Don\u2019t learn some fancy skills such as T-spins for now.\\n\\tTwo Skills:\\n\\t\\t1. Remember the spawn positions of the blocks and controls to move the blocks into the desired locations.\\n\\t\\t2. Plan ahead on where to put down the Next blocks. \\n\\nThe link below is the translated version (by User670) of an article named \u201CSuggestion for new players to Tetris Online,\u201D which was written by a Chinese Tetris player named Tatianyi (2019). Zictionary has an entry about him. Click on the globe icon to open the article in your browser.",
        "https://github.com/user670/temp/blob/master/tips_to_those_new_to_top.md",
    },
    {"Practice Recommendations",
        "readme noob new guides recommendations suggestions helps",
        "help",
        "Here are our recommendations for improving your Tetris skills. If you have ever felt difficulties in your training, you can just relax and spend some time playing the modes you do enjoy. Have fun!\\n\\nThese are sets of missions that you need to accomplish. When there is order within each set, we recommend you to do all three sets of tasks simultaneously instead of one by one. \\n\\nA. Stacking\\n\\tA1. Think twice before you place your block. If your first decision doesn\u2019t seem to fit well, think again.\\n\\tA2. Keep your terrain flat since it allows more possibilities for different blocks.\\b\\bB. Efficiency & Speed\\b\\nB1. Don\u2019t count on ghost pieces. Think, with your brain, where this piece would land and what keys you should press. Do it only when you are ready. \\b\\nB2. Use both of the rotation keys. Don\u2019t just use one and press it many times when you can press the other one just once. \\b\\nB3. Don\u2019t worry too much about your speed when you start learning Finesse. Keep your move accurate, and then it is not hard to improve your speed once you have mastered it. \\n\\nC. Stacking\\b\\nC1. Finish 40L without topping out. \\b\\nC2. Finish 40L with no Hold without losing too much speed. \\b\\nC3. Finish 40L with all Techrashes without losing too much speed. \\b\\nC4. Finish 40L with all Techrashes and no Hold without losing too much speed. \\n\\nSet C is more flexible, and you can adjust the difficulties based on your own conditions (like what does \u201Cwithout losing too much speed\u201D means to you). \\n\\nWhen you finish all the tasks in set C, keep practicing A1. This is the fundamental skill in any Tetris game, and you can master practically any mode when you can just scan through the Next sequence easily."
    },
    {"Learning T-spins",
        "tspins learning study guides tips recommendations suggestions helps",
        "help",
        "Please notice that T-spin is a pretty advanced skill in Tetris, so you cannot master it by just looking at the terrains where the T-spins are performed. You also need good stacking skills and the ability to scan through the Next sequence. If you really want to improve your T-spin skill, please make sure that you are proficient in your basic skills, such as stacking.\\n\\nOur recommendations: begin to learn T-spin if you can finish 40L within 60 s (or 40\u2013120 s depending on your conditions), 40L with all Tetrises, 40L with all Tetrises, and no Hold, all without losing too much speed.",
    },
    {"Official Website",
        "homepage mainpage websites",
        "help",
        "The official website of Techmino!\\nYou can download the latest stable build of Techmino and change your profile there.\\nClick on the globe icon to open the website in your browser.",
        "http://101.43.110.22:10026",
    },
    {"Huiji Wiki",
        "huiji wiki",
        "help",
        "(\u7070\u673Awiki)\\n\\n A Chinese Tetris wiki by Tetris enthusiasts from Chinese Tetris Research Community groups and its sub-groups. Most of the pages were referenced and translated from Hard Drop Wiki and Tetris Wiki for now. Link in Simplified Chinese.",
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
    {"\u2018Tetris Hall\u2019",
        "",
        "help",
        "(\u30C6\u30C8\u30EA\u30B9\u5802)\\n\\nA Japanese website with many setups, tutorials, and minigames. It has detailed descriptions of consecutive PCs.",
        "https://shiwehi.com/tetris/",
    },
    {"\u2018Tetris Template Collections\u2019",
        "",
        "help",
        "(\u30C6\u30C8\u30EA\u30B9\u30C6\u30F3\u30D7\u30EC\u96C6@\u30C6\u30C8\u8B5C)\\n\\nA Japanese website with a variety of setups and detailed categories. Most setups have images, so it is easier to share with others.",
        "https://w.atwiki.jp/tetrismaps/",
    },
    {"tetristemplate.info",
        "",
        "help",
        "(\u30C6\u30C8\u30EA\u30B9\u30D6\u30ED\u30B0 - PerfectClear)\\n\\n. A Japanese website with some setups. It doesn\u2019t contain too many setups, but there are very detailed explanations.",
        "https://tetristemplate.info/"
    },
    {"Fumen",
        "fumen",
        "help",
        "A Japanese Tetris field editor. Commonly used to share setups, PC solutions, and more. The linked website is translated into English.",
        "http://fumen.zui.jp/#english.js"
    },
    {"Fumen for Mobile",
        "fumenformobile fm",
        "help",
        "Fumen with touch screen support.",
        "https://knewjade.github.io/fumen-for-mobile/"
    },


    -- Webpages / Organizations
    {"Github Repository",
        "githubrepository sourcecode src",
        "org",
        "Techmino\u2019s official Github repository. Stars are appreciated.",
        "https://github.com/26F-Studio/Techmino",
    },
    {"Communities",
        "community communities dirscord",
        "org",
        "Join the Tetris communities and talk with other players! You can join the Hard Drop Discord server by clicking on the globe icon.",
        "https://discord.gg/harddrop"
    },
    {"Mew",
        "tieba forum reddit discord",
        "org",
        "The Mew forum owned by the Chinese Tetris Research Community and was founded in the second half of 2021. Mew is a Chinese social media, kind of like a combination of Discord and Reddit, with many channels in a big community. Users can chat in the channels and submit posts to the channel. Mew also has a function called \u201CLibrary,\u201D which systematically stores the documentation. The Tetris Mew forum is currently under construction, and not too many contents are available (2/Nov/2021).",
        "https://mew.fun/n/tetris",
    },
    {"Tetris OL Servers",
        "tetrisonline servers tos",
        "org",
        "Google \u201CTetris Online Poland\u201D for the Poland server.\\nClick on the globe icon for information on the Tetris Online Study server in China (by Teatube, see the entry below).",
        "http://teatube.ltd/tos",
    },
    {"Support 1",
        "support wechat vx weixin alipay zfb zhifubao",
        "org",
        FNNS and "The contents in this entry were hidden due to platform restrictions. Feel free to discuss these contents on our Discord server." or "To donate to Techmino via WeChat Pay or Alipay, type \u201Csupport\u201D in console and scan the QR code.",
    },
    {"Support 2",
        "support afdian aidadian",
        "org",
        FNNS and "The contents in this entry were hidden due to platform restrictions. Feel free to discuss these contents on our Discord server." or "To donate to Techmino via Aifadian, use the globe icon on the bottom right to open the URL. Aifadian charges a 6% transaction fee off your purchase.",
        FNNS and "https://youtu.be/dQw4w9WgXcQ" or "https://afdian.net/@MrZ_26",
    },
    {"Support 3",
        "support p\\97\\116\\114\\101\\111\\110",
        "org",
        FNNS and "The contents in this entry were hidden due to platform restrictions. Feel free to discuss these contents on our Discord server." or "To donate to Techmino via P\\97\\116\\114\\101\\111\\110, click on the globe icon on the bottom right to open the URL. Notice that P\\97\\116\\114\\101\\111\\110 may charge you a service fee for transactions over a certain amount.",
        FNNS and "https://youtu.be/dQw4w9WgXcQ" or "https://www.p\\97\\116\\114\\101\\111\\110.com/techmino",
    },

    -- Games
    {"TTT",
        "tetris trainer tres bien",
        "game",
        "Tetris Trainer Tr\xE8s-Bien (by \u3053\u306A \u201Ckona\u201D). A hands-on tutorial of advanced techniques in modern Tetris (which only supports physical keyboards).\\nRecommended for players who can complete 40L with Tetris only and no Hold.\\nCovered topics such as T-Spin, finesse, SRS, and some battle setups.\\nThe link below is the English version of the website, translated by User670 (Originally in Japanese).",
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
        "(\u30CA\u30BE)\\n\\nAll kinds of SRS puzzles range from easy to extremely hard, including T-spins and All spins. Recommended for those who completed TTT.\\n\\nLink translated to Simplified Chinese, originally in Japanese.",
        "http://teatube.ltd/nazo",
    },
    {"TPO",
        "nazo",
        "game",
        "Tetris Puzzle O. A Chinese website created by TCV100 with some puzzles in NAZO included.",
        "http://121.36.2.245:3000/tpo"
    },


    {"Side Note 1",
        "note nb NB DM notice",
        "game",
        "The following contents are brief introductions about some official and fan-made Tetris games with high popularity. We make no guarantees that they would cover every Tetris game. Also, the author of Techmino has made some comments on some of these games. Notice that they are just subjective opinions and cannot be used to judge the qualities of these games. To better differentiate between the facts and opinions, all the commentary contents are enclosed with square brackets separated from the main descriptive contents.",
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
        "Browser | Singleplayer | Mobile Support\\nA browser-based Tetris game with many professional tunings and modes. [The visuals are simple with barely any animations. Only a few virtual key combinations are available for mobile devices.]\\nLink to Farter\u2019s (See entry below) Dig Mod (which itself is a mod of another version). You can also check another mode on Tetris Wiki called \u201CTetr.js enhanced.\u201D",
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
        "Browser | Singleplayer/Multiplayer\\nOr ASC for short. It uses its own rotation system (also called ASC) and has many single-player modes. 1V1 modes are currently under alpha testing (16/Apr/2022). The Stack mode in Techmino was also inspired by Ascension. ",
        "https://asc.winternebs.com",
    },
    {"Jstris",
        "js jstris",
        "game",
        "Browser | Singleplayer/Multiplayer | Mobile Support\\nJS for short. It has some single-player modes and some parameters that players can adjust. The virtual keys can also be customized to some extent, but this game has no animations. ",
        "https://jstris.jezevec10.com",
    },
    {"TETR.IO",
        "io tetrio tetr.io",
        "game",
        "Browser | Singleplayer/Multiplayer\\nOr IO for short. It has a ranking system and custom game with many adjustable parameters. It also has desktop clients for improved performances and you can git rid of the ads.\\n[It seems that Safari cannot open this game.]",
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
        "Browser | Singleplayer/Multiplayer\\nWWC for short. It has worldwide 1V1 battles, recorded battles (so the opponents don\u2019t have to be real people), several different rulesets, and bomb-styled garbage line battles.",
        "https://worldwidecombos.com",
    },
    {"Tetris Friends",
        "tf tetrisfriends notrisfoes",
        "game",
        "Browser | Singleplayer/Multiplayer\\nTF for short. A now-defunct browser-based Tetris game. It was very popular in the past, but the whole game was shut down a few years ago. There is a private server called \u201CNotris Foes\u201D that still exists. Click on the globe icon to open the webpage in your browser.",
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
        "Browser | Singleplayer\\nAnother Tetris game from tetris.com. An endless marathon with special minos called \u201CMind Benders\u201D. Clearing a line with a Mind Bender will give you a good or bad effect.",
    },

    {"Techmino",
        "techmino",
        "game",
        "Cross-Platform | Singleplayer/Multiplayer\\nOr Tech for short. A block stacker game developed by MrZ et al. using L\xD6VE. It has many single-player modes and customizable parameters, and online multiplayer modes are gradually being developed.",
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
        "Cross-Platform | Singleplayer\\nA Tetris game developed using L\xD6VE and is dedicated to creating a robust, easily customizable platform for creating new, custom game modes. Initially made by Joe Zeng, Milla took over the development on 08/Oct/2020, starting from V0.1.5.\\n \u2014 Tetris Wiki",
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
        "Windows | Singleplayer\\nA game based on TGM\u2019s Classic rule with 20G and a powerful rotation system. Decent controls but has no customization other than control mappings. The game is a bit hard to find now, and you may need to install the required DLL files manually.",
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
        "PS/Oculus Quest/Xbox/NS/Windows | Singleplayer/Multiplayer\\nOr TE(C) for short. An official Tetris game with fancy graphics and soundtracks that react to your input. The basic version (without the word \u201CConnected\u201D) only has single-player modes. The extended version, Tetris Effect Connected, features four online battle modes, Connected (VS), Zone Battle, Score Attack, and Classic Score Attack.",
    },
    {"Tetris 99",
        "t99 tetris99",
        "game",
        "Nintendo Switch | Singleplayer/Multiplayer\\nA game famous for its 99-player battle royale mode and has many interesting strategies not present in traditional battle Tetris games. It also has limited single-player modes like Marathon and bot matches available as DLC.",
    },
    {"Puyo Puyo Tetris",
        "ppt puyopuyotetris",
        "game",
        "PS/NS/Xbox/Windows | Singleplayer/multiplayer\\nA game that combines two games, Tetris and Puyo Puyo, and can battle between those two games. It has many modes for single-player and online\\n\\n[The Steam PC version has worse controls and horrible online experience.]",
    },
    {"Tetris Online",
        "top tetrisonline",
        "game",
        "Windows | Singleplayer/Multiplayer*\\nA now-defunct Japanese Tetris game with both online and single-player modes. Allows custom DAS/ARR but neither can be set to 0. Minor input delay. Private servers do exist and is decent for new players to get started.",
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
        "Windows/OS X | Singleplayer/Multiplayer\\nC2 for short. Designed based on classic Tetris, Cultris II supports customizable DAS and ARR. The battle mode is focused on time-based combos, which challenges players\u2019 speed, n-wide setups, and downstacking skills.\\n[The Mac version was not being maintained for a long time. Any macOS build newer than macOS Catalina cannot run this game at all.]",
    },
    {"Nullpomino",
        "np nullpomino",
        "game",
        "Windows/macOS/Linux | Singleplayer/Multiplayer\\nNP for short. A high-customizable professional Tetris game. Nearly every parameter in the game can be adjusted.\\n[But the UI was outdated, and this game requires full-keyboard controls. New players may have some problems getting used to it. Also, it seems that macOS Monterey cannot run this game.]",
    },
    {"Misamino",
        "misamino",
        "game",
        "Windows | Single-player\\nLocal 1V1 game, mainly plays turn-based mode. You can write your own bot for it (though you need to learn its API if you do).\\nMisamino is also the name of its built-in bot.",
    },
    {"Touhoumino",
        "touhoumino",
        "game",
        "Windows | Singleplayer\\nA fan-made Tetris game. It is a modification of Nullpomino with elements from the Touhou Project added in. The marathon mode features the \u201CSpell Cards\u201D from Touhou Project, which can only be broken by reaching a score requirement in a limited time.\\n[Recommended for players with at least half-decent skills, otherwise you don\u2019t even know how you died.]",
    },

    {"Tetris Blitz",
        "blitz ea mobile phone",
        "game",
        "iOS/Android | Singleplayer\\nA mobile Tetris game by Electronic Arts (EA). It has the gravity mechanism, and each game lasts for 2 minutes. Many minoes fall down into the field at the beginning of the game, and you can enter the \u201CFrenzy\u201D mode by continuously performing line clears. There are many different power-ups available. Also, this game has no top-out mechanism. When an incoming block overlaps with existing blocks in the field, the top few lines will be cleared automatically. \\n\\nThis game has no longer been available since April 2020.",
    },
    {"Tetris (EA)",
        "tetris ea galaxy universe cosmos mobile phone",
        "game",
        "iOS/Android | Singleplayer/Multiplayer?\\nAnother mobile Tetris game by EA. It has two control modes \u2013 Swipe and One-Touch. It also has a Galaxy Mode besides the Marathon Mode (with gravity mechanism), and the goal of this mode is to clear all Galaxy minoes before the sequence runs out.\\n\\nThis game has no longer been available since April 2020."
    },
    {"Tetris (N3TWORK)",
        "tetris n3twork mobile phone",
        "game",
        "iOS/Android | Singleplayer\\nThe mobile Tetris game from N3TWORK Inc. It has a 3-minute ultra mode, a marathon mode, and a 100-player Royale mode.\\n[The UI is great, but its controls are not so good.]",
    },
    {"Tetris Beat",
        "n3twork rhythm",
        "game",
        "iOS | Singleplayer\\nA mobile Tetris game from N3TWORK for Apple Arcade. It has a \u201CBeat\u201D mode besides the Marathon mode, but you only have to drop the blocks in rhythm with the BGM.\\n[The effects are very heavy, and the controls are not so good.]"
    },
    {"Tetris Journey",
        "tetrisjourney mobile phone huanyouji",
        "game",
        "iOS/Android | Singleplayer\\nAn official mobile Tetris game developed by Tencent (available exclusively in China). It has level modes, battle modes, and some single-player modes. You can customize the sizes and positions of the virtual keys, but you cannot adjust DAS or ARR.\\n The battle mode lasts for 2 minutes, and if both players do not top out, the one who sent more attacks wins."
    },
    {"JJ Tetris",
        "jjtetris",
        "game",
        "Android | Multiplayer\\n(JJ\u5757)\\nA casual game on JJ Card Games (JJ\u68CB\u724C). Portrait screen, low input delay, smooth controls. Customizable DAS/ARR and toggle-able 20G soft drop, limited control scheme customization. No Hold nor B2B, no garbage buffer nor cancelling. Every attack sends at most 4 lines, combos are more powerful, otherwise similar to modern Tetris.",
    },

    {"Huopin Tetris",
        "huopin qq",
        "game",
        "Windows | Multiplayer\\n(\u706B\u62FC\u4FC4\u7F57\u65AF)\\n\\nThe Tetris game on Tencent Game Center, 12-wide board, DAS/ARR the same as typing on the keyboard, one Next, no Hold. Can only send garbage through Tetris (sends three lines) and Triple (sends two lines). Garbage is checker-board-shaped and is nearly impossible to dig through.",
    },

    -- Terms
    {"Translator Note 2",
        "",
        "help",
        "Translator\u2019s note on those per-minute and per-second values\\n\\nNot all of them are commonly used in the communities, and not all terms mean the same across all contexts. They mainly apply to Techmino."
    },
    {"LPM",
        "linesperminute speed",
        "term",
        "Lines per minute\\n\\tReflects the playing speed of a player.\\nDifferent games calculate LPM differently. For example, Tetris Online calculates its LPM using PPS (see below), where 1 PPS = 24 LPM. This ignores clearing garbage lines and makes it different from its literal meaning. In Techmino, this converted LPM value is marked as \u201CL\u2019PM.\u201D",
    },
    {"PPS",
        "piecespersecond speed",
        "term",
        "Pieces per second\\n\\tReflects the playing speed of a player.",
    },
    {"BPM",
        "blocksperminute piecesperminute speed",
        "term",
        "Blocks per minute\\n\\tReflects the playing speed of a player.\\nAlso called PPM (to avoid confusion with the musical term).",
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
        "Attack & Dig per minute\\n\\tUsed to compare skill differences between the two players within one match; slightly more accurate than APM.\\nThe \u201Cvs\u201D in TETR.IO is actually Atk & Dig per 100s.",
    },
    {"APL",
        "attackperline efficiency",
        "term",
        "Attack per line (cleared)\\n\\tAlso known as \u201Cefficiency.\u201D Reflects the per-line efficiency of attacks. For example, Tetrises and T-spins have higher efficiency than doubles and triples.",
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
        "The name of the game (and its trademark). Also the term for clearing four lines at one time in official games.\\nCoined from Tetra (Greek for \u201Cfour\u201D <\u03C4\u03AD\u03C4\u03C4\u03B1\u03C1\u03B5\u03C2>) and Tennis (favorite sport of the creator of Tetris). Also, the Tetris games developed by Nintendo and SEGA were licensed by TTC. These two companies do not have the copyright of Tetris.",-- Thanks to Alexey Pajitnov!
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
        "A modifier term to Spins applied to Spin actions that the game considers easy (thus the name \u201CEZ T-Spin\u201D in an old game). Score and attack bonuses are reduced for Mini Spins than ordinary Spins.\\nDifferent games have different rules for what counts as a Mini Spin, and many are not intuitive. You can just remember a few common shapes.",
    },
    {"All-Spin",
        "allspin",
        "term",
        "A rule in which spins of all pieces are awarded extra attacks/scores, rather than just spins of the T piece (aka \u201CT-Spin only\u201D).",
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
        "Mini T-Spin Double\\nFormerly known as T-Spin Mini Double (TSMD).\\nClear two lines with a Mini T-Spin.MTSD only exists in a limited number of games and may have very different triggers. ",
    },
    {"O-Spin",
        "ospin",
        "term",
        "Because the O block doesn\u2019t change its shape after any rotations, there is no way to bring it out once it is stuck in a place. So, there was a meme about O-Spin in the Tetris community: Someone has made a fake video on how to perform an O-spin in Tetris 99 and Tetris Friend, and it went viral; XRS allows O blocks to \u201Cteleport\u201D into a hole.\\n In TRS, you can rotate the O block in a specific way to teleport or transform O into another block to achieve an O-spin.",
    },
    {"Rotation Systems",
        "wallkick rotationsystem",
        "term",
        "Systems that determine how the pieces rotate.\\n\\nIn modern Tetris games, tetrominoes can rotate on a specific rotation center (but this may be absent in some games). If the minoes overlap with the walls or the field, the system will attempt to perform some offsets (a process known as \u201Cwall-kicking\u201D). Wall kicks allow minoes to move into specific-shaped holes.",
    },
    {"Orientation",
        "direction 0r2l 02 20 rl lr",
        "term",
        "In SRS and SRS-like rotation systems, there is a system of standard notations describing the orientations of the minoes:\\n 0 for Original orientation; R for right, or 90\xB0 clockwise; L for left, or 90\xB0 counterclockwise; 2 for spin twice (180\xB0). For example, 0\u2192L means rotating counterclockwise from original orientation (0) to L; 0\u2192R means rotating clockwise from original orientation (0) to R; 2\u2192R means rotating counterclockwise from 2 (180\xB0) to R.",
    },
    {"ARS",
        "arikrotationsystem atarirotationsystem",
        "term",
        "It can refer to two things:\\nArika Rotation System, which is used in Tetris: The Grand Master games.\\nAtari Rotation System, which aligns pieces to the top-left when rotating.",
    },
    {"ASC",
        "ascension",
        "term",
        "Rotation system used in the Tetris clone Ascension. All pieces use the same two kick tables (one for CW, one for CCW), and the kick range is approximately \xB1 2 blocks on both axis.",
    },
    {"ASC+",
        "ascension ascplus",
        "term",
        "The modified version of ASC in Techmino with support of wall kicks for 180\xB0 rotations.",
    },
    {"BRS",
        "bulletproofsoftware",
        "term",
        "BPS rotation system, the rotation system used in Tetris games by Bullet-Proof Software.",
    },
    {"BiRS",
        "biasrs biasrotationsystem",
        "term",
        "*Techmino-Exclusive*\\n\\nBias Rotation System, Techmino\u2019s original rotation system based on XRS and SRS.\\nIt sets an offset to the rotation if you hold left/right/soft drop when you rotate.\\nIf rotation fails when downwards offset is applied, it tries again without the downwards offset.\\nThen it tries without left/right offset.\\nIf it fails, then the rotation will not occur.\\n\\nCompared to XRS, BiRS only uses a single kick table, making it easier to memorize; also keeps the climb-over-terrain feature of SRS.\\n\\nThe final kick offset\u2019s euclidean distance can\u2019t be larger than \u221A5; if there is a horizontal offset, the final kick offset can\u2019t be in the opposite direction.",
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
        "Super Rotation System, the most widely used rotation system by modern Tetris games and the foundation of many self-made rotation systems. There are four orientations for each tetromino, and they can rotate clockwise or counterclockwise (But without 180\xB0 rotations). Should a Tetromino overlap with the wall, floor, or other minoes on the field after rotation, a few offset positions will be checked, allowing pieces to kick off walls and floors. You can look up the details of the wall kick table on Tetris Wiki.",
    },
    {"SRS+",
        "srsplus superrotationsystemplus",
        "term",
        "The extension to SRS with the support of 180\xB0 wall kicks.",
    },
    {"TRS",
        "techminorotationsystem",
        "term",
        "*Techmino-Exclusive*\\nTechmino Rotation System\\nThe rotation system used in Techmino, based on SRS.\\nIt includes fixes on common cases where S/Z are locked from rotating and some extra useful kicks. Each pentomino also has a kick table roughly based on SRS logic. TRS supports O-spins.",
    },
    {"XRS",
        "xrs",
        "term",
        "X rotation system, a rotation system used in T-ex.\\n\\nIt introduced a feature to \u201Cuse another kick table if you hold a direction key,\u201D making it possible for players to tell the game where they want the piece to go.",
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
        "Special T-Spin techniques that exploit the T piece\u2019s kicks and T-Spin detections.\\nThey might be worth different values in different games (some consider them as Minis) but hardly have real value in combat due to their relatively complex setup.",
    },
    {"Modern Tetris",
        "modern",
        "term",
        "The concept of a \u201Cmodern\u201D Tetris game or block-stacking game is fuzzy. Generally speaking, a block-stacking game that resembles games that follow the Tetris Design Guideline is considered a modern game. Here are some rules of thumb, but they are not hard requirements:\\n1. The visible part of the Matrix is 10 w \xD7 20 h, often with additional hidden rows above this.\\n2. Pieces spawn in the top-middle of the visible matrix. Each piece has a consistent spawn orientation and color.\\n3. Has an appropriate randomizer like 7-Bag and His.\\n4. Has a proper rotation system, with at least the ability to rotate both directions.\\n5. Has an appropriate lockdown delay system.\\n6. Has an appropriate top-out condition.\\n7. Has a Next queue, with multiple next pieces displayed (usually 3\u20136), and with the presentation in the queue matching the spawn orientation of the piece.\\n8. Has a Hold queue.\\n9. If there is spawn delay or line delay, usually has IRS and IHS.\\n10. Has a DAS system for precise and swift sideways movements.",
    },
    {"Tetrominos\u2019 Shapes",
        "shape structure form tetromino tetrimino",
        "term",
        "In standard Tetris games, all the blocks used are tetrominoes, i.e., Blocks that are linked by four minoes side-by-side.\\n\\nThere are seven kinds of tetrominoes in total when allowing rotations and disallowing reflections. These tetrominoes are named by the letter in the alphabet that they resemble. They are Z, S, J, L, T, O, and I. See the \u201CShape & Name\u201D entry for more information.",
    },
    {"Tetrominos\u2019 Colors",
        "colour hue tint tetromino tetrimino",
        "term",
        "Many modern Tetris games use the same color scheme for the tetrominoes. The colors are:\\nZ\u2013red, S\u2013green, J\u2013blue, L\u2013orange, T\u2013purple, O\u2013yellow, and I\u2013cyan.\\n\\nTechmino also uses this \u201Cstandard\u201D coloring for the tetrominoes.",
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
        "*Techmino-Exclusive*\\nInitial Movement System\\nHolding a sideways movement key during spawn delay to spawn the piece one block off to the side. Sometimes prevents death.\\nNote that DAS needs to be fully charged when a new piece appears. ",
    },
    {"Next",
        "nextpreview",
        "term",
        "Displays the next few pieces to come. It is an essential skill to plan ahead where to place blocks in the Next queue to improve your Tetris skill.",
    },
    {"Hold",
        "hold",
        "term",
        "Save your current piece for later use, and take out a previously held piece (or next piece in the next queue, if no piece was held) to place instead. You can only perform this once per piece in most cases.\\n\\n*Techmino-Exclusive*: Techmino has an \u201CIn-place Hold\u201D feature. When enabled, pieces that spawn from the Hold queue will spawn at where your currently-controlling piece is, instead of at the top of the matrix.",
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
        "A sub-[number] time means the time is below a certain milestone. The unit of the time is often left out and inferred; for example, a \u201Csub-30\u201D time for a 40-line Sprint means below 30 seconds, and a \u201Csub-15\u201D time for a 1000-line Sprint means below 15 minutes.",
    },
    {"Digging",
        "downstacking ds",
        "term",
        "Clearing garbage lines entered from the bottom of the field. Aka downstacking.",
    },
    {"Donation",
        "donate",
        "term",
        "A method of \u201Cplugging\u201D up the Tetris hole to send a T-Spin. After the T-Spin, the Tetris hole is opened up once again to allow the continuation of Tetris or downstacking.\\n-- Harddrop wiki",
    },
    {"\u2018Debt\u2019",
        "qianzhai debt owe",
        "term",
        "A terminology used in the Chinese Tetris community. A \u201Cdebt\u201D refers to a situation where one must first finish constructing a specific setup before they can perform one or more T-spins with real attacks. When constructing a setup where one or multiple debts are created, it is important to observe the opponent to ensure your safety; otherwise, there is a high probability of topping out before the construction is finished.\\n\\nThis term is frequently used to describe setups such as TST tower. No real attacks can be made before the setup is constructed completely.",
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
        "sidewell",
        "term",
        "A stacking method where you leave a well of a certain width on the side.\\nA Side 1-wide setup is the traditional Tetris setup (i.e., Side well Tetris).\\nA Side 2-, 3-, or 4-wide setup is a combo setup. For new players, they can be effective ways to send attacks. However, opponents can easily send you garbage while building your stack, killing you or cutting your stack short. Because of this, advanced players might not opt to build tall stacks and instead keep a steady stream of T-Spins and Tetrises and attack when the opponent is unlikely to offset the garbage.",
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
        "Also known as Center well Tetris\\nThe stacking method where you leave a one-block-wide well in the middle. Commonly used in combat because this allows Tetrises and T-Spins and is not too difficult to make.",
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
        "The stacking method where you leave a four-block-wide well in the middle.\\nThe infamous combo setup that not only makes many combos but also abuses the death conditions and won\u2019t die even if you receive some garbage. Players often dislike this technique due to how unbalanced it is.",
    },
    {"Residual",
        "c4w s4w",
        "term",
        "Refers to how many blocks to leave in the well of a four-wide combo setup. The most common are 3-residual and 6-residual.\\n3-residual has fewer variations and is easier to learn, with a pretty good chance of success, and it\u2019s pretty useful in combat.\\n6-residual has more variables and is harder, but can be more consistent if you do it well. It can also be used for special challenges like getting 100 combos in an infinite 4-wide challenge.\\nIn principle, use 6-Res first, then 5-Res and 3-Res, and then 4-Res. ",
    },
    {"6\u20133 Stacking",
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
        "Refers to 21st-40th lines above the visible field. Because the blocks in the field could go over the visible field (this usually happens when multiple garbage lines come in) so the buffer zone was created so those blocks could go back to the field when garbage lines are cleared. Also, the buffer zone is usually located at 21st-40th lines because this is sufficient for most cases. Refer to \u201CVanish Zone\u201D to learn more.",
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
        "Falling speed is often described as \u201CG,\u201D i.e., how many lines the blocks fall in one frame (usually assuming 60 fps).\\nG is a relatively large unit. The speed of Lv 1 in a regular Marathon (one second per line) is 1/60 G, and 1G is about Lv 13 speed. The highest speed of modern Tetris is 20G because the field height is 20 lines. The real meaning of 20G is \u201CInfinite falling speed,\u201D and even when the field height is more than 20 lines, 20G modes force all the blocks to fall to the bottom instantly. You can learn more about 20G at the \u201C20G\u201D entry\\nIn Techmino, falling speed is described as the frames it takes for a block to fall one unit; for example, a speed of 60 refers to one unit per second (as the game runs in 60 fps as default). ",
    },
    {"20G",
        "gravity instant",
        "term",
        "The fastest falling speed of modern Tetris. In 20G modes, pieces appear instantly on the bottom of the field without the actual process of falling. This sometimes also limits a piece\u2019s sideways movements, as it is not always possible to make a piece climb over a bump or out of a well in 20G. You can learn more at the unit \u201CG\u201D at the \u201Cfalling speed\u201D entry.",
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
        "A technique to move a piece into the desired position with the minimum number of key presses. This saves time and reduces chances to misdrop.\\nYou can practice by playing with Jstris\u2019s \u201Crestart on finesse error\u201D or with Techmino\u2019s finesse error sound effect.\\n\\nTechmino\u2019s finesse detection is not precisely \u201Ctheoretical minimum key presses,\u201D but instead only checks for finesse against a pre-determined par keypress count *when the piece locks in a position that does not require soft dropping*. This means that Techmino will not judge a piece as having a finesse error when you soft drop and spin or tuck.\\nTechmino also introduced additional checks, such as holding while the current piece and the held piece is the same, or holding after you have manipulated the current piece, count as a finesse fault.\\nFinesse% in Techmino is defined to be 100% when par or below par, 50% when one keypress above par, 25% when two keypresses above par, and 0% when three or more keypresses above par.\\nAlso note that in 20G finesse still runs as if there were no gravity, which can cause inaccurate results.",
    },
    {"\u2018Doing Research\u2019",
        "scientificresearch",
        "term",
        "\u201CDoing scientific research\u201D is a term sometimes used in the Chinese Tetris community, referring to researching/practicing techniques in a low-falling-speed, single-player environment.",
    },
    {"Keymapping",
        "feel",
        "term",
        "",-- TODO
    },
    {"Handling",
        "feel handling",
        "term",
        "Several main factors that may affect handling:\\n(1) Input delay, which could be affected by device configuration or condition. Restart the game or change your device can probably fix it.\\n(2) Unstable programming or faulty designs. It could be alleviated by lowering the effect settings.\\n(3) Designed on purpose. Adaptation might help.\\n(4) Improper parameter setting. Change the settings.\\n(5) Improper play posture. It\u2019s not convenient to use force. Change your posture.\\n(6) Not being used to the operation after changing the key position or changing the device. Getting used to it or changing the settings might help.\\n(7) Muscle fatigue, response, and decreases in coordination abilities. Have some rest and come back later or in a few days.",
    },
    {"DAS (simple)",
        "das arr delayedautoshift autorepeatrate",
        "term",
        "Imagine typing on a keyboard, where you press and hold the \u201CO\u201D key. \\nYou get a long string of o\u2019s.\\nOn the timeline, it kinds of looks like o\u2014\u2014\u2014\u2014\u2014o-o-o-o-o-o-o-o-o\u2026\\nThe \u201C\u2014\u2014\u2014\u2014\u2014\u201D is DAS, the \u201C-\u201D is ARR.",
    },
    {"DAS & ARR",
        "das arr delayedautoshift autorepeatrate",
        "term",
        "DAS refers to Delayed Auto Shift, how blocks move to the side when you hold left or right. It also refers to the delay between the initial movement (when you press down the button) and the first automatic movement.\\nARR refers to Auto-Repeat Rate, which is the delay between automatic movements. In some games, DAS and ARR are calculated using the unit f (frame). Multiply f by 16.7 (if you are running the game in 60 fps) to convert it to ms (millisecond).",
    },
    {"DAS tuning",
        "das tuning",
        "term",
        "For advanced players who want to play faster, the recommended values are DAS 4\u20136 f (67\u2013100 ms), ARR 0 f (0 ms). (At 0 ms ARR, pieces will instantly snap to the wall once you get past DAS.)\\n\\nThe ideal configuration strategy for advanced players is to minimize DAS while still being able to reliably control whether to tap or hold, and to set to ARR to 0 if possible, or as low as possible otherwise.",
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
        "Also known as \u201C7-Bag Generator.\u201D Officially known as \u201CRandom Generator.\u201D\\nThis is the algorithm used by modern, official Tetris games to generate pieces. Starting from the beginning of a game, there is guaranteed to be one of the seven Tetrominoes for every seven pieces.\\n\\nAn example would be like: ZSJLTOI OTSLZIJ LTISZOJ.",
    },
    {"His generator",
        "history hisgenerator",
        "term",
        "A way to generate pieces, notably used in Tetris: The Grand Master games. Every time a random Tetromino is selected, but if this Tetromino is the same as one of the few previous pieces, then reroll until a different piece is rolled or until a reroll limit is reached.\\nFor example, a \u201Chis 4 roll 6\u201D (h4r6) generator rerolls when the piece is the same as one of the four previous pieces and rerolls up to 6 times.\\nThere are other variations as well, such as \u201Chis4 roll6 pool35,\u201D which further reduces the randomness of the piece sequence.\\n\\nIn Techmino, the maximum reroll count is half of the sequence length, rounded up.",
    },
    {"HisPool generator",
        "hisPool history pool",
        "term",
        "History Pool, a generator based on the His generator. It introduced a mechanism called \u201CPool.\u201D When generating a new piece, HisPool randomly selects a piece from the Pool and increases the probability of spawning the least frequent piece.\\n\\nThis mechanism makes the sequence more stable and ensures that the drought won\u2019t last forever.",
    },
    {"bagES generator",
        "bages easy start",
        "term",
        "*Techmino-Exclusive*\\nBag Easy-Start, an improved Bag generator. The first piece in the first bag won\u2019t be those hard-to-place pieces (S/Z/O/S5/Z5/F/E/W/X/N/H).",
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
        "Another method of fast-tapping in high-gravity (around 1G) modes (with slow DAS/ARR setting).\\nWhen you perform rolling, you fix the position of one hand and the controller, and then tap the back of the controller with fingers on your other hand repeatedly. This method allows even faster speeds than hypertapping (see \u201CHypertapping\u201D for more) and requires much less effort.\\nThis method was first discovered by Cheez-fish, and he has once achieved a tapping speed of more than 20 Hz.",
    },
    {"Passthrough",
        "pingthrough",
        "term",
        "Refers to a situation where the attacks from both players were sent to the other player\u2019s board without canceling out. Another term called \u201Cpingthrough\u201D refers to a situation where a passthrough occurs due to Internet delays. ",
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
        "All Tetrominoes have an initial weight of 0.\\nEvery time, divide all weights by 2, add a random number between 0 and 1, pick the piece with the highest weight, and divide this piece\u2019s weight by 3.5.",
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
        "Using all three rotation buttons (the third being 180\xB0 rotation), any piece only requires one rotation press to reach the desired direction.\\nHowever, it is not exactly useful for not every game has this feature, and the speed increase from learning this technique is not as much as when you learn using both rotation buttons as opposed to one. You can skip this technique unless you want extreme speeds.",
    },
    {"Drought",
        "drought",
        "term",
        "A situation where a piece you want, often the I Tetromino (a.k.a. the Long Bar), does not spawn for a long time. This often happens and can be deadly for classic Tetris, but it is almost impossible for modern Tetris thanks to the Random Generator.\\nWith the Random Generator, there can be at most 12 other pieces between two I Tetrominoes.",
    },
    {"Bone block",
        "bone tgm",
        "term",
        "The block skin used by the earliest version of Tetris.\\nIn earlier times, computers all used the Command-Line Interfaces (like cmd on Windows, Terminal on Mac, or Console on Linux), so a single mino in the game Tetris is represented using two enclosing square brackets [ ]. It looks like bones, so it is sometimes called bone blocks.\\nIn Techmino, bone blocks are defined as \u201Ca single, fancy block skin that all of the blocks use.\u201D Different block skins may have different types of bone block styles.",
    },
    {"Semi-invisible",
        "half invisible semi",
        "term",
        "Refers to a rule where the tetrominoes will become invisible after some time.\\nThis time interval is not definite, and it is acceptable to describe it as \u201Cdisappear after a few seconds.\u201D",
    },
    {"Invisible",
        "invisible",
        "term",
        "Refers to a rule where blocks will disappear instantly when locked onto the field. \\nN.B. It is also acceptable to refer to an invisible mode where a disappearing animation is shown. However, this makes the game a lot easier, so in Techmino, the invisible mode without such animations is referred to as \u201CSudden Invisible.\u201D",
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
        "An easter egg mode from the TGM series. During a \u201Csecret grade\u201D gameplay, the player tries to make a \u201C>\u201D shape with one hole in each line using blocks. The ultimate goal is to finish the whole shape using 19 lines."..HDwiki,
        HDsearch.."Secret_Grade_Techniques",
    },
    {"Cold Clear",
        "cc coldclear ai bot",
        "term",
        "A Tetris bot. \\nDeveloped by MinusKelvin originally for Puyo Puyo tetris. The Cold Clear build in Techmino supports all-spin and TRS.",
    },
    {"ZZZbot",
        "ai bot zzztoj",
        "term",
        "A Tetris bot. Built by the Chinese Tetris player \u594F\u4E4B\u7AE0 (Z\xF2u Zh\u012B Zh\u0101ng, see entry below) and has decent performance in many games",
    },

    -- Setups
    {"Openers",
        "setup openers",
        "setup",
        "Openers are setups that can be built when a game begins. You can still make these setups mid-game, but will often require a different set of piece placements.\\n\\nGood setups usually satisfy two to three of the following:\\n- Can adapt to many piece orders,\\n- Strong attack, minimal waste of the T piece,\\n- require minimal soft dropping for faster placement and using finesse,\\n- has clear follow-up strategies with few branches.\\n\\nMost openers make use of the Random Generator (bag-7 generator) and exploit the fact that it gives one of every piece for every seven pieces. This element of predictability makes it possible to have reliable setups.",
    },
    {"DT Cannon",
        "dtcannon doubletriplecannon",
        "setup",
        "Double-Triple Cannon."..HDwiki,
        HDsearch.."dt",
    },
    {"DTPC",
        "dtcannon doubletriplecannon",
        "setup",
        "A follow-up of the DT Cannon that ends with an All Clear."..HDwiki,
        HDsearch.."dt",
    },
    {"BT Cannon",
        "btcannon betacannon",
        "setup",
        "\u03B2 Cannon, Beta Cannon."..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"BTPC",
        "btcannon betacannon",
        "setup",
        "A follow-up of the BT Cannon that ends with an All Clear."..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"TKI 3 Perfect Clear",
        "ddpc tki3perfectclear",
        "setup",
        "A TSD opener that leads to a Double-Double-All Clear."..HDwiki,
        HDsearch.."TKI_3_Perfect_Clear",
    },
    {"QT Cannon",
        "qtcannon",
        "setup",
        "A DT Cannon-like setup with a higher probability of sending a DT Attack."..HDwiki,
        HDsearch.."QT_cannon",
    },
    {"Mini-Triple",
        "mt minitriple",
        "setup",
        "A Mini T-Spin - T-Spin Triple structure.",
        HDsearch.."mt",
    },
    {"Trinity",
        "trinity",
        "setup",
        "A TSD + TSD + TSD or TSMS + TST+ TSD setup.",
        HDsearch.."trinity",
    },
    {"Wolfmoon Cannon",
        "wolfmooncannon",
        "setup",
        "An opener."..HDwiki,
        HDsearch.."wolfmoon_cannon",
    },
    {"Sewer",
        "sewer",
        "setup",
        "An opener."..HDwiki,
        HDsearch.."sewer",
    },
    {"TKI",
        "tki-3 tki3",
        "setup",
        "TKI-3. It can either refer to a TKI-3 starting with a TSD or a C-spin starting with a TST."..HDwiki,
        HDsearch.."tki_3_opening",
    },
    {"God Spin",
        "godspin",
        "setup",
        "A setup that is fancy on the eyes [but awkward to use in action]. Invented by Windkey."..HDwiki,
        HDsearch.."godspin",
    },
    {"Albatross",
        "albatross",
        "setup",
        "A fancy, fast-paced opener with TSD\u2013TST\u2013TSD\u2013All Clear, hardly wasting any T pieces."..HDwiki,
        HDsearch.."Albatross_Special",
    },
    {"Pelican",
        "",
        "setup",
        "An Albatross-ish opener to use when the piece orders do not support that."..HDwiki,
        HDsearch.."Pelican",
    },
    {"Perfect Clear Opener",
        "7piecepuzzle",
        "setup",
        "An All Clear opener with a high success rate (~84.6% when you have an I in the Hold queue and ~61.2% if that\u2019s not the case). In Techmino\u2019s PC Practice modes, the setup that leaves an irregular opening is this setup."..HDwiki,
        HDsearch.."Perfect_Clear_Opener",
    },
    {"Grace System",
        "liuqiaoban gracesystem 1stpc",
        "setup",
        "A PC opener with a success rate of ~88.57%. The 4\xD74 square in the PC challenge is this setup.",
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
        "(\u30AC\u30E0\u30B7\u30ED\u7A4D\u307F) A TD-Attack opener."..HDwiki,
        HDsearch.."Gamushiro_Stacking",
    },

    -- Pattern
    {"Mid-game Setups",
        "midgamesetups",
        "pattern",
        "Refers to some setups usually used to send a lot of garbage mid-game. Some of them can also be openers, though it is usually unnecessary.",
    },
    {"C-spin",
        "cspin",
        "pattern",
        "A T-Spin Triple + T-Spin Double attack, known as TKI in Japan."..HDwiki,
        HDsearch.."c-spin",
    },
    {"STSD",
        "stsd",
        "pattern",
        "Super T-Spin Double, a setup that allows two T-Spin Doubles.\\nBut when the garbage is right under the STSD cave, it is impossible to perform two TSDs."..HDwiki,
        HDsearch.."stsd",
    },
    {"STMB Cave",
        "stmb",
        "pattern",
        "STMB cave, a donation setup by using S/Z to block off a 3-wide well and clear a T-Spin Double."..HDwiki,
        HDsearch.."stmb_cave",
    },
    {"Fractal",
        "shuangrenjian fractal spider",
        "pattern",
        "A setup involving overlapping two TSD setups."..HDwiki,
        HDsearch.."Fractal",
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
        "A donation setup that opens up for Tetrises."..HDwiki,
        HDsearch.."hamburger",
    },
    {"Imperial Cross",
        "imperialcross",
        "pattern",
        "Covering a cross-shaped hole with an overhang to do two T-Spin Doubles."..HDwiki,
        HDsearch.."imperial_cross",
    },
    {"Kaidan",
        "jieti kaidan stairs",
        "pattern",
        "A setup that can donate a TSD on a stair-looking terrain."..HDwiki,
        HDsearch.."kaidan",
    },
    {"Shachiku Train",
        "shachikutrain shechu",
        "pattern",
        "A setup that can donate two TSDs on a TST setup."..HDwiki,
        HDsearch.."Shachiku_Train",
    },
    {"Cut Copy",
        "qianniao cutcopy",
        "pattern",
        "A setup to donate a T-Spin Double over a small hole and can do another T-Spin Double after that.",
    },
    {"King Crimson",
        "kingcrimson",
        "pattern",
        "Stacking TST(s) on top of a STSD."..HDwiki,
        HDsearch.."King_Crimson",
    },
    {"Consecutive PCs (1/2)",
        "pcloop",
        "pattern",
        "You can find detailed guides on \u201CTetris Hall\u201D about 1st\u20134th and 7th PC. After you finish the 7th PC, exactly 70 blocks are used so you can go back to the 1st PC.",
        "https://shiwehi.com/tetris/template/consecutivepc.php",
    },
    {"Consecutive PCs (2/2)",
        "pcloop",
        "pattern",
        "four.lol has guides on 5th and 6th PC.",
        "https://four.lol/perfect-clears/5th",
    },

    -- Savedata managing
    {"Console",
        "cmd commamd minglinghang kongzhitai terminal",
        "command",
        "Techmino has a console that enables debugging/advanced features.\\nTo access the console, repeatedly tap (or click) the Techmino logo or press the C key on the keyboard on the main menu.\\n\\nCareless actions in the console may result in corrupting or losing saved data. Proceed at your own risk.",
    },
    {"Reset setting",
        "reset setting",
        "command",
        "Go to console, type \u201Crm conf/setting\u201D and then press enter/return.\\nRestart Techmino for the setting to take effect.\\nPlay one game to revert this action.",
    },
    {"Reset statistics",
        "reset statistic data",
        "command",
        "Go to console, type \u201Crm conf/data\u201D and then press enter/return.\\nRestart Techmino for the setting to take effect.\\nPlay one game to revert this action.",
    },
    {"Reset unlock",
        "reset unlock",
        "command",
        "Go to console, type \u201Crm conf/unlock\u201D and then press enter/return.\\nRestart Techmino for the setting to take effect.\\nFresh a rank to revert this action.",
    },
    {"Reset records",
        "reset record",
        "command",
        "Go to console, type \u201Crm -s record\u201D and then press enter/return.\\nRestart Techmino for the setting to take effect.\\nFresh a record list to get one list back.",
    },
    {"Reset key",
        "reset virtualkey",
        "command",
        "Go to console, type \u201Crm conf/[keyFile]\u201D and then press enter/return.\\nKeyboard: key, Virtualkey: virtualkey, Virtualkey save: vkSave1(2)\\nRestart Techmino for the firsst two settings to take effect.\\nEnter setting and go back to get one file back.",
    },
    {"Delete replays",
        "delete recording",
        "command",
        "Go to console, type \u201Crm -s replay\u201C and then press enter/return.\\nTake effect immediately.",
    },
    {"Delete cache",
        "delete cache",
        "command",
        "Go to console, type \u201Crm -s cache\u201D and then press enter/return.\\nTake effect immediately.",
    },

    -- English
    {"SFX",
        "soundeffects",
        "english",
        "Acronym for \u201CSound Effects.\u201D Known in Japan as \u201CSE.\u201D",
    },
    {"BGM",
        "backgroundmusic",
        "english",
        "Acronym for \u201CBackground Music.\u201D",
    },
    {"TAS",
        "tas",
        "english",
        "Acronym for \u201CTool-Assisted Speedrun (Superplay).\u201D\\nPlay a game with special tools without breaking the game\u2019s rules (at the programming level).\\nIt is generally used to get theoretical maximum scores or achieve interesting goals.\\nA lightweight TAS tool is built into Techmino.",
    },
    {"AFK",
        "afk",
        "english",
        "Acronym for \u201CAway From Keyboard,\u201D or in a broader sense, a period when you are not playing.\\nTaking regular breaks help relieve your muscle strain and allow you to play better when you come back.",
    },
}
`,dict_ja=`local HDsearch="https://harddrop.com/wiki?search="
local HDwiki="\\n\u8A73\u3057\u3044\u60C5\u5831\u306F\u3001\u5730\u7403\u5100\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066Harddrop wiki\u306B\u3042\u308A\u307E\u3059!"
return {
    {"\u7FFB\u8A33\u8005\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B8 1",
        "",
        "help",
        "\u3053\u306E\u65E5\u672C\u8A9E\u7248TetroDictionary(\u901A\u79F0:Zictionary)\u306F\u3001\u82F1\u8A9E\u7248\u3092\u901A\u3057\u3066\u7FFB\u8A33\u3055\u308C\u3066\u3044\u307E\u3059\\n\u305D\u306E\u305F\u3081\u4E2D\u56FD\u8A9E\u7248\u306E\u5185\u5BB9\u3092\u6B63\u78BA\u306B\u53CD\u6620\u3057\u3066\u3044\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\\n\\n\u7FFB\u8A33\u8005\u3092\u77E5\u308A\u305F\u3044\u3001\u7FFB\u8A33\u306B\u5354\u529B\u3057\u305F\u3044\u5834\u5408\u306F\u5730\u7403\u5100\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066Github\u306E\u30DA\u30FC\u30B8\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3057\u3087\u3046!",
        "https://github.com/26F-Studio/Techmino/blob/main/parts/language/dict_ja.lua",
    },
	{"Zictionary\u306E\u4F7F\u3044\u65B9",
        "Zictionary dictionary tetrodictionary dict \u4F7F\u3044\u65B9",
        "help",
        "Zictionary\u306F\u30C6\u30C8\u30EA\u30B9\u306B\u3064\u3044\u3066\u306E\u69D8\u3005\u306A\u60C5\u5831\u304C\u8F09\u3063\u3066\u3044\u308B\u8F9E\u66F8\u306E\u3088\u3046\u306A\u3082\u306E\u3067\u3059\\n\\nTetroDictionary\u4E0B\u306E\u691C\u7D22\u30D0\u30FC\u306B\u5358\u8A9E\u3092\u5165\u308C\u308B\u3068\u8A72\u5F53\u3059\u308B\u7528\u8A9E\u304C\u8868\u793A\u3055\u308C\u307E\u3059\\n\u3082\u3057\u8A72\u5F53\u7528\u8A9E\u304C0\u4EF6\u306E\u5834\u5408\u3001\u3059\u3079\u3066\u306E\u7528\u8A9E\u304C\u8868\u793A\u3055\u308C\u307E\u3059\\n\\n\u753B\u9762\u4E0A\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u3059\u308B\u3053\u3068\u3067\u8868\u793A\u3059\u308B\u7528\u8A9E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\\n\\n\u53F3\u4E0B\u306E\u30B3\u30D4\u30FC\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u73FE\u5728\u8868\u793A\u3057\u3066\u3044\u308B\u5185\u5BB9\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\\n\u53F3\u4E0B\u306B\u5730\u7403\u5100\u30DC\u30BF\u30F3\u304C\u3042\u308B\u5834\u5408\u3001\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u30D6\u30E9\u30A6\u30B6\u3067\u5916\u90E8\u30B5\u30A4\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\\n\\n\u3082\u3057\u5E0C\u671B\u3059\u308B\u5358\u8A9E\u3067\u6B32\u3057\u3044\u7528\u8A9E\u304C\u5F15\u3063\u304B\u304B\u3089\u306A\u3044\u5834\u5408\u3001Github\u306E\u30DA\u30FC\u30B8\u304B\u3089\u7DE8\u96C6\u3067\u304D\u307E\u3059\\n\u5730\u7403\u5100\u30DC\u30BF\u30F3\u304B\u3089\u305C\u3072\u30A2\u30AF\u30BB\u30B9","https://github.com/26F-Studio/Techmino/blob/main/parts/language/dict_ja.lua",
},
    {"\u521D\u5FC3\u8005\u3078",
        "readme \u521D\u5FC3\u8005 \u4E0B\u7D1A\u8005 \u30B3\u30C4 \u30AC\u30A4\u30C9 \u4E0A\u9054",
        "help",
        "\u30C6\u30C8\u30EA\u30B9\u521D\u5FC3\u8005\u306E\u65B9\u3078\\n\\t2\u3064\u306E\u5927\u4E8B\u306A\u3053\u3068:\\n\\t\\t1.\u64CD\u4F5C\u6027\u306E\u3044\u3044\u30C6\u30C8\u30EA\u30B9\u3092\u9078\u3073\u307E\u3057\u3087\u3046(Techmino\u3084TETR.IO, Jstris, Tetr.js)\\n\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u304B\u3089\u5927\u304D\u304F\u96E2\u308C\u3001\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u6559\u6750\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B\u3088\u3046\u306A\u64CD\u4F5C\u6027\u306E\u60AA\u3044\u3082\u306E\u306F\u30D7\u30EC\u30A4\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\\n\\t\\t2.\u30CD\u30AF\u30B9\u30C8\u3092\u898B\u308B\u3001\u30C6\u30C8\u30EA\u30B9\u3092\u5B89\u5B9A\u3057\u3066\u884C\u3046\u7B49\u306E\u57FA\u672C\u7684\u306A\u80FD\u529B\u80B2\u6210\u306B\u6642\u9593\u3092\u8CBB\u3084\u3057\u307E\u3057\u3087\u3046\\n\u3068\u308A\u3042\u3048\u305A\u4ECA\u306F\u3001Tspin\u307F\u305F\u3044\u306A\u6280\u306F\u7F6E\u3044\u3068\u304D\u307E\u3057\u3087\u3046\\n\u3069\u3046\u305B\u57FA\u790E\u306B\u8CBB\u3084\u3059\u6642\u9593\u306F\u5909\u308F\u308A\u307E\u305B\u3093\\n\\t2\u3064\u306E\u6280\u8853:\\n\\t\\t1.\u30DF\u30CE\u306E\u51FA\u73FE\u4F4D\u7F6E\u3068\u64CD\u4F5C\u65B9\u6CD5\u3092\u899A\u3048\u3066\u3001\u597D\u304D\u306A\u5834\u6240\u306B\u79FB\u52D5\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u3087\u3046\\n\\t\\t2.\u6B21\u306E\u30DF\u30CE\u306E\u7F6E\u304F\u5834\u6240\u3092\u3042\u3089\u304B\u3058\u3081\u6C7A\u3081\u3089\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u3087\u3046\\n\\n\u5730\u7403\u5100\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u4E2D\u56FD\u306E\u30C6\u30C8\u30EA\u30B9\u30D7\u30EC\u30A4\u30E4\u30FC\u3001Tatianyi\u3055\u3093\u304C\u66F8\u3044\u305F\u300CSuggestion for new players to Tetris Online\u300D\u3068\u3044\u3046\u8A18\u4E8B\u306E\u82F1\u8A9E\u7248(\u7FFB\u8A33\u8005:User670)\u304C\u898B\u308C\u307E\u3059",
        "https://github.com/user670/temp/blob/master/tips_to_those_new_to_top.md",
    },
    {"\u304A\u3059\u3059\u3081\u306E\u7DF4\u7FD2\u6CD5",
        "readme \u521D\u5FC3\u8005 \u4E0B\u7D1A\u8005 \u30B3\u30C4 \u30AC\u30A4\u30C9 \u4E0A\u9054 \u7DF4\u7FD2",
        "help",
        "\u3053\u3053\u3067\u306F\u3001\u304A\u3059\u3059\u3081\u306E\u4E0A\u9054\u6CD5\u3092\u7D39\u4ECB\u3057\u307E\u3059\\n\u3082\u3057\u716E\u8A70\u307E\u3063\u305F\u72B6\u614B\u306B\u306A\u3063\u305F\u5834\u5408\u306F\u3001\u30EA\u30E9\u30C3\u30AF\u30B9\u3057\u3066\u597D\u304D\u306A\u30E2\u30FC\u30C9\u3092\u697D\u3057\u307F\u307E\u3057\u3087\u3046\\n\u697D\u3057\u3080\u3053\u3068\u304C\u4E00\u756A\u5927\u4E8B\u3067\u3059!\\n\\n\u4EE5\u4E0B\u306F\u3001\u3042\u306A\u305F\u304C\u6700\u521D\u306B\u76EE\u6307\u3059\u76EE\u6A19\u306E\u30EA\u30B9\u30C8\u3067\u3059\\nA,B,C\u306E3\u3064\u3092\u540C\u6642\u306B\u3053\u306A\u3057\u3066\u3044\u304F\u3053\u3068\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059\\n\\nA.\u7A4D\u307F\u305D\u306E1\\n\\tA1.\u30DF\u30CE\u3092\u7F6E\u304F\u524D\u306B\u6B21\u306E\u30DF\u30CE\u306E\u3053\u3068\u3082\u542B\u3081\u3066\u8003\u3048\u3066\u307F\u3066\u304F\u3060\u3055\u3044\\n\u3082\u3057\u6B21\u306E\u30DF\u30CE\u306E\u7F6E\u304D\u5834\u6240\u304C\u306A\u304B\u3063\u305F\u308A\u3068\u4E0A\u624B\u304F\u3044\u304B\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u4ECA\u6301\u3063\u3066\u308B\u30DF\u30CE\u306E\u7F6E\u304D\u5834\u6240\u3092\u8003\u3048\u76F4\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\\n\\tA2.\u5730\u5F62\u3092\u5E73\u3089\u306B\u3059\u308B\u3053\u3068\u3092\u610F\u8B58\u3059\u308B\u3068\u3069\u3093\u306A\u30DF\u30CE\u9806\u306B\u3082\u5BFE\u5FDC\u3057\u3084\u3059\u3044\u5730\u5F62\u304C\u3067\u304D\u307E\u3059(\u4E00\u90E8\u3067\u306F\u3088\u308A\u5177\u4F53\u7684\u306B\u6A2A\u7F6E\u304D\u3092\u610F\u8B58\u3059\u308B\u3068\u3082\u8A00\u308F\u308C\u3066\u3044\u307E\u3059)\\n\\nB.\u64CD\u4F5C\u52B9\u7387\u3068\u901F\u3055\\n\\tB1.\u30B4\u30FC\u30B9\u30C8\u3092\u898B\u306A\u304C\u3089\u7F6E\u304B\u306A\u3044\u3067\u304F\u3060\u3055\u3044\\n\u3053\u306E\u30DF\u30CE\u3092\u3053\u3053\u306B\u7F6E\u304F\u306B\u306F\u3053\u306E\u64CD\u4F5C\u3092\u3059\u308B\u3068\u3044\u3046\u306E\u3092\u982D\u306E\u4E2D\u3067\u51E6\u7406\u3057\u3066\u304F\u3060\u3055\u3044\\n\\tB2.\u56DE\u8EE2\u30AD\u30FC\u306F\u5DE6\u53F3\u4E21\u65B9\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\\n\u4E00\u56DE\u306E\u5165\u529B\u3067\u6E08\u3080\u64CD\u4F5C\u306F\u4E00\u56DE\u3067\u51E6\u7406\u3057\u307E\u3057\u3087\u3046\\n\\tB3.\u6700\u9069\u5316\u3092\u899A\u3048\u59CB\u3081\u3066\u304D\u305F\u3089\u901F\u3055\u306F\u3042\u307E\u308A\u6C17\u306B\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\\n\u6700\u9069\u5316\u306F\u7656\u4ED8\u3051\u308B\u3082\u306E\u306A\u306E\u3067\u4E00\u5EA6\u8EAB\u306B\u3064\u3051\u308C\u3070\u3001\u7CBE\u5EA6\u306E\u9AD8\u3044\u52D5\u304D\u3092\u3057\u306A\u304C\u3089\u901F\u304F\u306A\u308B\u3053\u3068\u304C\u5BB9\u6613\u306B\u306A\u308A\u307E\u3059\\n\\nC.\u7A4D\u307F\u305D\u306E2\\n\\tC1.\u30B2\u30FC\u30E0\u30AA\u30FC\u30D0\u30FC\u306B\u306A\u3089\u305A\u306B\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u3092\u5B8C\u8D70\u3059\u308B\\n\\tC2.\u901F\u3055\u3092\u5927\u304D\u304F\u843D\u3068\u3055\u305A\u306B\u30DB\u30FC\u30EB\u30C9\u306A\u3057\u3067\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u3092\u5B8C\u8D70\u3059\u308B \\n\\tC3.\u901F\u3055\u3092\u5927\u304D\u304F\u843D\u3068\u3055\u305A\u306BTechrash\u3060\u3051\u3067\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u3092\u5B8C\u8D70\u3059\u308B\\n\\tC4.\u901F\u3055\u3092\u5927\u304D\u304F\u843D\u3068\u3055\u305A\u30CE\u30FC\u30DB\u30FC\u30EB\u30C9\u3001Techrash\u3060\u3051\u3067\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u3092\u5B8C\u8D70\u3059\u308B\\n\\nC\u306F\u96E3\u6613\u5EA6\u3092\u8ABF\u6574\u3057\u3084\u3059\u3044\u306E\u3067\u3001\u81EA\u5206\u306E\u72B6\u6CC1\u306B\u5408\u308F\u305B\u3066\u96E3\u6613\u5EA6\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044(\u300C\u901F\u3055\u3092\u5927\u304D\u304F\u843D\u3068\u3055\u306A\u3044\u300D\u3068\u306F\u81EA\u5206\u306B\u3068\u3063\u3066\u5177\u4F53\u7684\u306B\u3069\u306E\u3050\u3089\u3044\u306E\u306A\u306E\u304B\u7B49)\\n\\nC\u304C\u7D42\u308F\u3063\u305F\u5834\u5408\u306F\u3001\u518D\u3073A1\u306E\u7DF4\u7FD2\u3092\u3057\u3066\u304F\u3060\u3055\u3044\\n\u3053\u308C\u306F\u30C6\u30C8\u30EA\u30B9\u306E\u57FA\u672C\u6280\u8853\u306E\u4E00\u3064\u3067\u30CD\u30AF\u30B9\u30C8\u628A\u63E1\u3092\u80FD\u529B\u304C\u9AD8\u3051\u308C\u3070\u3069\u3093\u306A\u30B2\u30FC\u30E0\u30E2\u30FC\u30C9\u3067\u3082\u3059\u3050\u306B\u4E0A\u9054\u3067\u304D\u307E\u3059",
    },
    {"Tspin\u3092\u5B66\u307C\u3046",
        "t tspin t-spin t\u30B9\u30D4\u30F3 \u4E0A\u9054\u6CD5 \u521D\u5FC3\u8005 \u4E0B\u7D1A\u8005 \u30AC\u30A4\u30C9 tip \u304A\u3059\u3059\u3081 \u7DF4\u7FD2 helps",
        "help",
        "Tspin\u306F\u30C6\u30C8\u30EA\u30B9\u306E\u4E2D\u3067\u3082\u9AD8\u7B49\u6280\u8853\u306A\u306E\u3067Tspin\u304C\u3067\u304D\u308B\u5730\u5F62\u3092\u898B\u3066\u3044\u308B\u3060\u3051\u3067\u306F\u3001\u7FD2\u5F97\u3067\u304D\u307E\u305B\u3093\\n\u307E\u305F\u7A4D\u307F\u306E\u6280\u8853\u3084\u30CD\u30AF\u30B9\u30C8\u3092\u898B\u308B\u80FD\u529B\u3082\u5FC5\u8981\u306B\u306A\u3063\u3066\u304D\u307E\u3059\\n\u3082\u3057\u672C\u5F53\u306BTspin\u6280\u8853\u3092\u4E0A\u9054\u3055\u305B\u305F\u3044\u5834\u5408\u306F\u3001\u7A4D\u307F\u6280\u8853\u306A\u3069\u306E\u571F\u53F0\u3068\u306A\u308B\u6280\u8853\u3092\u3057\u3063\u304B\u308A\u7FD2\u5F97\u3057\u307E\u3057\u3087\u3046\\n\\n\u304A\u3059\u3059\u3081\u306E\u7FD2\u5F97\u30BF\u30A4\u30DF\u30F3\u30B0:\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u309260\u79D2(\u6761\u4EF6\u306B\u3088\u3063\u3066\u306F40\uFF5E120\u79D2)\u4EE5\u5185\u306B\u5B8C\u8D70\u3001Techrash\u3060\u3051\u3067\u5B8C\u8D70\u3001\u30DB\u30FC\u30EB\u30C9\u306A\u3057\u3067\u5927\u304D\u304F\u901F\u3055\u3092\u843D\u3068\u3055\u305A\u306B\u5B8C\u8D70\u3001\u3053\u308C\u3089\u5168\u3066\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u6642\u306BTspin\u3092\u5B66\u3073\u59CB\u3081\u308B\u3053\u3068\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059",
    },
    {"Techmino\u516C\u5F0Fweb",
        "homepage web mainpage \u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u3000\u30A6\u30A7\u30D6\u3000\u30E1\u30A4\u30F3\u30DA\u30FC\u30B8 \u30C6\u30AF\u30DF\u30CE \u30C6\u30C3\u30AF\u30DF\u30CE techmino",
        "help",
        "Techmino\u306E\u516C\u5F0F\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u3067\u3059!\\n\u6700\u65B0\u306E\u5B89\u5B9A\u7248Techmino\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F\u308A\u3001\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6\u3057\u305F\u308A\u3067\u304D\u307E\u3059\\n\u5730\u7403\u5100\u30DC\u30BF\u30F3\u304B\u3089\u662F\u975E\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u304F\u3060\u3055\u3044",
        "http://101.43.110.22:10026",
    },
    {"\u7070\u673Awiki",
        "huiji wiki \u30A6\u30A3\u30AD \u3046\u3043\u304D \u7070\u673A \u30D5\u30A4\u30B8",
        "help",
        "huiji wiki\\n\\n\u4E2D\u56FD\u306E\u30C6\u30C8\u30EA\u30B9\u7814\u7A76\u30B0\u30EB\u30FC\u30D7\u3068\u305D\u306E\u30B5\u30D6\u30B0\u30EB\u30FC\u30D7\u306B\u6240\u5C5E\u3057\u3066\u3044\u308B\u30C6\u30C8\u30EA\u30B9\u30D7\u30EC\u30FC\u30E4\u30FC\u9054\u304C\u7BA1\u7406\u3057\u3066\u3044\u308B\u4E2D\u56FD\u306E\u30C6\u30C8\u30EA\u30B9wiki\u3067\u3059\\n\u73FE\u5728\u3001\u5927\u90E8\u5206\u306E\u30DA\u30FC\u30B8\u304CHard drop wiki\u3068Tetris wiki\u304B\u3089\u53C2\u7167\u3001\u7FFB\u8A33\u3055\u308C\u305F\u30DA\u30FC\u30B8\u306B\u306A\u3063\u3066\u3044\u307E\u3059",
        "https://tetris.huijiwiki.com",
    },
    {"HardDrop wiki",
        "harddrop hd wiki \u30CF\u30FC\u30C9\u30C9\u30ED\u30C3\u30D7 \u30CF\u30FC\u30C9\u30ED \u30A6\u30A3\u30AD \u3046\u3043\u304D",
        "help",
        "\u30C6\u30C8\u30EA\u30B9\u6700\u5927\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3001HardDrop\u304C\u904B\u55B6\u3057\u3066\u3044\u308B\u82F1\u8A9E\u30C6\u30C8\u30EA\u30B9wiki\u3067\u3059",
        "https://harddrop.com/wiki/Tetris_Wiki",
    },
    {"Tetris wiki",
        "tetris \u30C6\u30C8\u30EA\u30B9 \u3066\u3068\u308A\u3059 wiki \u30A6\u30A3\u30AD \u3046\u3043\u304D",
        "help",
        "Tetris wiki\u306F\u30C6\u30C8\u30EA\u30B9\u95A2\u9023\u306E\u60C5\u5831\u306B\u7126\u70B9\u3092\u5F53\u3066\u305Fwiki\u3067\u3059\\nMyndzi\u304C2015\u5E74\u306B\u958B\u8A2D\u3057\u307E\u3057\u305F\\n\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u53CA\u3073\u30D5\u30A1\u30F3\u88FD\u4F5C\u306E\u843D\u3061\u3082\u306E\u30D1\u30BA\u30EB\u30B2\u30FC\u30E0\u306E\u8A18\u9332\u3001\u30B2\u30FC\u30E0\u306E\u4ED5\u69D8\u306E\u89E3\u6790\u3001\u4E0A\u9054\u306E\u305F\u3081\u306E\u30AC\u30A4\u30C9\u306E\u4F5C\u6210\u306A\u3069\u69D8\u3005\u306A\u8A18\u4E8B\u304C\u9577\u5E74\u306B\u308F\u305F\u308A\u4F55\u5343\u3082\u6295\u7A3F\u3055\u308C\u3066\u3044\u307E\u3059",
        "https://tetris.wiki",
    },
    {"Tetris Wiki Fandom",
        "tetris \u30C6\u30C8\u30EA\u30B9 \u3066\u3068\u308A\u3059 wiki \u30A6\u30A3\u30AD \u3046\u3043\u304D fandom \u30D5\u30A1\u30F3\u30C0\u30E0 \u3075\u3041\u3093\u3060\u3080",
        "help",
        "\u82F1\u8A9E\u306E\u30C6\u30C8\u30EA\u30B9wiki\u3067\u3059\\n\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3092\u91CD\u70B9\u7684\u306B\u307E\u3068\u3081\u3066\u3044\u307E\u3059",
        "https://tetris.fandom.com/wiki/Tetris_Wiki",
    },
    {"Four.lol",
        "four wiki lol fourlol \u30D5\u30A9\u30FC \u30A6\u30A3\u30AD \u3046\u3043\u304D \u30C6\u30F3\u30D7\u30EC template",
        "help",
        "\u69D8\u3005\u306A\u958B\u5E55\u3084\u9023\u30D1\u30D5\u30A7\u304C\u96C6\u3081\u3089\u308C\u305F\u30C6\u30C8\u30EA\u30B9wiki\u3067\u3059",
        "https://four.lol",
    },
    {"\u30C6\u30C8\u30EA\u30B9\u5802",
        "tetris \u30C6\u30C8\u30EA\u30B9 \u3066\u3068\u308A\u3059 hall \u306F\u308B \u65E5\u672C\u8A9E japanese \u30C6\u30F3\u30D7\u30EC template",
        "help",
        "\u65E5\u672C\u8A9E\u30B5\u30A4\u30C8\u3067\u3059\\n\u958B\u5E55\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3001\u30D1\u30D5\u30A7\u30AF\u30A4\u30BA\u306A\u3069\u306E\u30DF\u30CB\u30B2\u30FC\u30E0\u3001\u9023\u30D1\u30D5\u30A7\u306E\u8A73\u7D30\u306A\u89E3\u8AAC\u304C\u3042\u308A\u307E\u3059",
        "https://shiwehi.com/tetris/",
    },
    {"\u30C6\u30C8\u30EA\u30B9\u30C6\u30F3\u30D7\u30EC\u96C6\uFF20\u30C6\u30C8\u8B5C",
        "wiki \u30A6\u30A3\u30AD \u3046\u3043\u304D atwiki \u30C6\u30F3\u30D7\u30EC template \u65E5\u672C\u8A9E japanese",
        "help",
        "\u975E\u5E38\u306B\u591A\u304F\u306E\u30C6\u30F3\u30D7\u30EC\u3092\u4FDD\u6709\u3057\u3066\u3044\u308B\u65E5\u672C\u8A9Eatwiki\u3067\u3059",
        "https://w.atwiki.jp/tetrismaps/",
    },
    {"\u30C6\u30C8\u30EA\u30B9\u30D6\u30ED\u30B0 - PerfectClear",
        "\u30C6\u30F3\u30D7\u30EC template \u65E5\u672C\u8A9E japanese \u958B\u5E55",
        "help",
        "\u6570\u306F\u591A\u304F\u306A\u3044\u3067\u3059\u304C\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u304C\u8A73\u7D30\u306B\u89E3\u8AAC\u3055\u308C\u3066\u3044\u308B\u65E5\u672C\u8A9E\u30B5\u30A4\u30C8\u3067\u3059",
        "https://tetristemplate.info/"
    },
	{"\u307B\u3090\u30B9\u30E9\u30A4\u30C9",
        "\u4E0A\u9054 \u7DF4\u7FD2 \u307B\u3090 \u30B9\u30E9\u30A4\u30C9",
        "help",
        "\u65E5\u672C\u306E\u30C6\u30C8\u30EA\u30B9\u30D7\u30EC\u30A4\u30E4\u30FC\u3001whipemerald\u6C0F\u304C\u4F5C\u3063\u305F\u30C6\u30C8\u30EA\u30B9\u3092\u4E0A\u9054\u3055\u305B\u308B\u305F\u3081\u306E\u30B9\u30E9\u30A4\u30C9\\n\u30C6\u30C8\u30EA\u30B9\u30D5\u30EC\u30F3\u30BA\u306E\u6642\u4EE3\u306B\u4F5C\u3089\u308C\u305F\u3082\u306E\u3060\u304C\u4ECA\u306E\u6642\u4EE3\u3067\u3082\u554F\u984C\u306A\u304F\u901A\u3058\u308B",
	"https://docs.google.com/presentation/d/1kYU2T6Kb-CVVshOa3BHGIhCoOWbbbKUekQqq-TsZgoY/mobilepresent?slide=id.p",
    },
    {"\u30C6\u30C8\u8B5C",
        "fumen \u30C6\u30C8\u8B5C \u8B5C\u9762 \u7814\u7A76\u3000\u89E3\u6790",
        "help",
        "Mihys\u6C0F\u304C\u958B\u767A\u3057\u305F\u30C6\u30C8\u30EA\u30B9\u306E\u5730\u5F62\u3092\u63CF\u753B\u3084\u5171\u6709\u304C\u3067\u304D\u308B\u5049\u5927\u306A\u30B5\u30A4\u30C8\\n\u4ED6\u306E\u30C6\u30C8\u30EA\u30B9\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3059\u308B\u969B\u306B\u3082\u3088\u304F\u4F7F\u308F\u308C\u308B\\nAdd-on\u304B\u3089frame.js\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u3067\u3055\u3089\u306B\u62E1\u5F35\u3057\u305F\u6A5F\u80FD\u304C\u4F7F\u3048\u307E\u3059",
        "http://fumen.zui.jp"
    },
    {"Fumen for Mobile",
        "fumenformobile fm fumen \u30C6\u30C8\u8B5C \u8B5C\u9762 \u30E2\u30D0\u30A4\u30EB mobile \u3082\u3070\u3044\u308B \u7814\u7A76 \u89E3\u6790",
        "help",
        "Newjade\u6C0F\u306B\u3088\u3063\u3066\u30C6\u30C8\u8B5C\u3092\u30B9\u30DE\u30DB\u7B49\u3067\u3088\u308A\u76F4\u611F\u7684\u306B\u4F7F\u3048\u308B\u3088\u3046\u306B\u958B\u767A\u3055\u308C\u305F\u30C6\u30C8\u8B5C\u30B5\u30A4\u30C8\u3067\u3059\\n\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u753B\u50CF\u51FA\u529B\u3084\u7BC4\u56F2\u5857\u308A\u306A\u3069\u306E\u516C\u5F0F\u306E\u30C6\u30C8\u8B5C\u306B\u306F\u306A\u3044\u6A5F\u80FD\u3082\u591A\u6570\u3042\u308A\u307E\u3059",
        "https://knewjade.github.io/fumen-for-mobile/",
    },
{"\u30C6\u30C8\u8B5C\u30D6\u30E9\u30A6\u30B6",
        "fm fumen \u30C6\u30C8\u8B5C \u8B5C\u9762 \u7814\u7A76 \u89E3\u6790",
        "help",
        "\u4E3B\u306B\u30C6\u30C8\u8B5C\u3092\u7BA1\u7406\u3059\u308B\u305F\u3081\u306E\u30BD\u30D5\u30C8\\n\u5927\u91CF\u306B\u30C6\u30C8\u8B5C\u3092\u7BA1\u7406\u3059\u308B\u4EBA\u306F\u6301\u3063\u3066\u3044\u3066\u640D\u306F\u306A\u3044",
    },
	{"solution-finder",
        "fm fumen \u30C6\u30C8\u8B5C \u8B5C\u9762 \u7814\u7A76 \u89E3\u6790",
        "help",
        "\u30D1\u30D5\u30A7\u306E\u78BA\u7387\u3084\u30D1\u30BF\u30FC\u30F3\u3001\u6700\u5927ren\u6570\u306A\u3069\u69D8\u3005\u306A\u89E3\u3092\u898B\u3064\u3051\u305F\u308A\u78BA\u7387\u3092\u8A08\u7B97\u3067\u304D\u308B\u30C4\u30FC\u30EB\\n\u65E5\u672C\u3067\u306F\u30C6\u30F3\u30D7\u30EC\u5236\u4F5C\u3001\u305D\u308C\u4EE5\u5916\u3067\u306F\u30D1\u30D5\u30A7\u95A2\u9023\u306B\u4F7F\u308F\u308C\u308B\u3053\u3068\u304C\u591A\u3044",
	"https://solution-finder.readthedocs.io/ja/latest/",
    },


    -- Webpages / Organizations
    {"Github Repository",
        "githubrepository sourcecode src \u30BD\u30FC\u30B9 \u30EA\u30DD\u30B8\u30C8\u30EA \u308A\u307D\u3058\u3068\u308A github",
        "org",
        "Techmino\u306E\u516C\u5F0FGithub\u3067\u3059\\n\u661F\u3092\u304A\u9858\u3044\u3057\u307E\u3059!",
        "https://github.com/26F-Studio/Techmino",
    },
    {"\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3",
        "community \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3 \u30B3\u30DF\u30E5 \u3053\u307F\u3085\u306B\u3066\u3043 \u3053\u307F\u3085 discord \u30C7\u30A3\u30B9\u30B3\u30FC\u30C9",
        "org",
        "\u30C6\u30C8\u30EA\u30B9\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0\u3057\u3066\u3001\u4ED6\u306E\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u4EA4\u6D41\u3057\u3088\u3046!\\n\u5730\u7403\u5100\u30DC\u30BF\u30F3\u304B\u3089HardDrop\u306Ediscord\u30B5\u30FC\u30D0\u30FC\u306B\u53C2\u52A0\u3067\u304D\u307E\u3059",
        "https://discord.gg/harddrop"
    },
    {"Mew",
        "tieba forum reddit discord mew \u307F\u3085\u30FC\u3000\u30DF\u30E5\u30FC",
        "org",
        "discord\u3068reddit\u3092\u5408\u308F\u305B\u305F\u3088\u3046\u306A\u4E2D\u56FD\u306ESNS\u3067\u3057\u305F\u304C2022\u5E7410\u670831\u65E5\u3088\u308A\u9589\u9396\u3055\u308C\u307E\u3057\u305F",
        "https://mew.fun/n/tetris",
    },
	{"\u30C6\u30C8\u30EA\u30B9\u30AA\u30F3\u30E9\u30A4\u30F3\u30DD\u30FC\u30E9\u30F3\u30C9",
        "tetrisonline servers top toj toz poland japan zapan",
        "org",
        "\u5730\u7403\u5100\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068TOP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u60C5\u5831\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u304C2022\u5E7411\u670825\u65E5\u73FE\u5728\u3001TOP,TOJ,TOZ\u30B5\u30FC\u30D0\u30FC\u306F\u30C0\u30A6\u30F3\u3057\u3066\u3044\u307E\u3059",
        "http://tetrisonline.pl/",
    },
    {"Tetris OL Servers",
        "tetrisonline servers tos",
        "org",
        "\u5730\u7403\u5100\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068Teatube\u6C0F\u4F5C\u6210\u306E\u4E2D\u56FD\u306ETetris Online Study\u306E\u60C5\u5831\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059",
        "http://teatube.ltd/tos",
    },
    {"\u30B5\u30DD\u30FC\u30C81",
        "support \u30B5\u30DD\u30FC\u30C8 \u5BC4\u4ED8 wechat vx weixin alipay zfb zhifubao",
        "org",
        FNNS and "\u3053\u3061\u3089\u306E\u5185\u5BB9\u306F\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u95A2\u4FC2\u306B\u3088\u308A\u975E\u8868\u793A\u306B\u3055\u308C\u3066\u3044\u307E\u3059\\n\u8A73\u3057\u304F\u306FTechmino\u306Ediscord\u30B5\u30FC\u30D0\u30FC\u306B\u3066\u805E\u3044\u3066\u304F\u3060\u3055\u3044" or "Wechat\u3084Alipay\u3092\u4F7F\u3063\u3066Techmino\u306B\u5BC4\u4ED8\u3057\u3066\u304F\u3060\u3055\u308B\u5834\u5408\u306F\u3001\u30B2\u30FC\u30E0\u30E1\u30A4\u30F3\u753B\u9762\u306E\u300CTECHMINO\u300D\u306ET\u3092\u9023\u6253\u2192\u30B3\u30F3\u30BD\u30FC\u30EB\u753B\u9762\u3067\u300Csupport\u300D\u3068\u5165\u529B\u2192QR\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u53D6\u3063\u3066\u5BC4\u4ED8\u3057\u3066\u304F\u3060\u3055\u3044",
    },
    {"\u30B5\u30DD\u30FC\u30C82",
        "support \u30B5\u30DD\u30FC\u30C8 \u5BC4\u4ED8 afdian aidadian",
        "org",
        FNNS and "\u3053\u3061\u3089\u306E\u5185\u5BB9\u306F\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u95A2\u4FC2\u306B\u3088\u308A\u975E\u8868\u793A\u306B\u3055\u308C\u3066\u3044\u307E\u3059\\n\u8A73\u3057\u304F\u306FTechmino\u306Ediscord\u30B5\u30FC\u30D0\u30FC\u306B\u3066\u805E\u3044\u3066\u304F\u3060\u3055\u3044" or "Aifadian\u3092\u4F7F\u3063\u3066Techmino\u306B\u5BC4\u4ED8\u3057\u3066\u304F\u3060\u3055\u308B\u5834\u5408\u306F\u3001\u5730\u7403\u5100\u30DC\u30BF\u30F3\u304B\u3089URL\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\\nAifadian\u306E\u5834\u5408\u3001\u5BC4\u4ED8\u91D1\u984D\u304B\u30896%\u306E\u624B\u6570\u6599\u304C\u304B\u304B\u308A\u307E\u3059",
        FNNS and "https://youtu.be/dQw4w9WgXcQ" or "https://afdian.net/@MrZ_26",
    },
    {"\u30B5\u30DD\u30FC\u30C83",
        "support \u30B5\u30DD\u30FC\u30C8 \u5BC4\u4ED8 patreon p\\97\\116\\114\\101\\111\\110",
        "org",
        FNNS and "\u3053\u3061\u3089\u306E\u5185\u5BB9\u306F\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u95A2\u4FC2\u306B\u3088\u308A\u975E\u8868\u793A\u306B\u3055\u308C\u3066\u3044\u307E\u3059\\n\u8A73\u3057\u304F\u306FTechmino\u306Ediscord\u30B5\u30FC\u30D0\u30FC\u306B\u3066\u805E\u3044\u3066\u304F\u3060\u3055\u3044" or "Patreon\u3092\u4F7F\u3063\u3066Techmino\u306B\u5BC4\u4ED8\u3057\u3066\u304F\u3060\u3055\u308B\u5834\u5408\u306F\u3001\u5730\u7403\u5100\u30DC\u30BF\u30F3\u304B\u3089URL\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\\nPareon\u306E\u5834\u5408\u3001\u4E00\u5B9A\u984D\u4EE5\u4E0A\u306E\u5BC4\u4ED8\u306B\u5BFE\u3057\u3066\u624B\u6570\u6599\u304C\u304B\u304B\u308A\u307E\u3059",
        FNNS and "https://youtu.be/dQw4w9WgXcQ" or "https://www.p\\97\\116\\114\\101\\111\\110.com/techmino",
    },

    -- Games
    {"\u30C6\u30C8\u30EA\u30B9 \u30C8\u30EC\u30FC\u30CA\u30FC \u30C8\u30EC\u30D3\u30A2\u30F3",
        "tetris trainer tres bien \u4E0A\u9054 \u7DF4\u7FD2 \u30C6\u30C8\u30EA\u30B9 \u30C8\u30EC\u30FC\u30CA\u30FC \u30C8\u30EC\u30D3\u30A2\u30F3",
        "game",
        "\u3053\u306A\u6C0F\u306B\u3088\u3063\u3066\u958B\u767A\u3055\u308C\u305F\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u30B5\u30A4\u30C8\u3067\u3059\\nTspin\u3084\u6700\u9069\u5316\u3001SRS\u7B49\u306E\u5BFE\u6226\u30C6\u30C8\u30EA\u30B9\u3067\u4F7F\u3046\u6280\u8853\u3092\u5B66\u3079\u307E\u3059\\n\u30CE\u30FC\u30DB\u30FC\u30EB\u30C9\u3001Techrash\u3060\u3051\u3067\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u3092\u5B8C\u8D70\u3067\u304D\u305F\u30D7\u30EC\u30A4\u30E4\u30FC\u306B\u304A\u3059\u3059\u3081\u3067\u3059",
        "http://taninkona.web.fc2.com/ttt/",
    },
    {"\u30C6\u30C8\u30EA\u30B9 \u30D1\u30D5\u30A7\u30C1\u30E3\u30EC\u30F3\u30B8",
        "tetris perfect clear challenge \u30D1\u30D5\u30A7 \u9023\u30D1\u30D5\u30A7 \u4E0A\u9054 \u7DF4\u7FD2",
        "game",
        "Chokotia\u6C0F\u306B\u3088\u3063\u3066\u958B\u767A\u3055\u308C\u305F\u958B\u5E55\u30D1\u30D5\u30A7\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u30B5\u30A4\u30C8\u3067\u3059\\n\u30C6\u30C8\u30EA\u30B9 \u30C8\u30EC\u30FC\u30CA\u30FC \u30C8\u30EC\u30D3\u30A2\u30F3\u3092\u30AF\u30EA\u30A2\u3057\u3001SRS\u306B\u6163\u308C\u305F\u30D7\u30EC\u30A4\u30E4\u30FC\u306B\u304A\u3059\u3059\u3081\u3067\u3059",
        "https://davdav1233.github.io/ttpc/",
    },
    {"\u30CA\u30BE\u30C6\u30C8",
        "nazo \u306A\u305E \u30CA\u30BE \u8B0E \u4E0A\u9054 \u7DF4\u7FD2",
        "game",
        "Tspin\u3084\u30AA\u30FC\u30EB\u30B9\u30D4\u30F3\u3001\u7C21\u5358\u306A\u554F\u984C\u304B\u3089\u96E3\u3057\u3044\u554F\u984C\u307E\u3067\u69D8\u3005\u306A\u8B0E\u30C6\u30C8\u304C\u3042\u308A\u307E\u3059\\n\u30C6\u30C8\u30EA\u30B9 \u30C8\u30EC\u30FC\u30CA\u30FC \u30C8\u30EC\u30D3\u30A2\u30F3\u3092\u30AF\u30EA\u30A2\u3057\u305F\u30D7\u30EC\u30A4\u30E4\u30FC\u306B\u304A\u3059\u3059\u3081\u3067\u3059",
        "http://klyuchevskayanazoteto.web.fc2.com/",
    },
    {"TPO",
        "nazo \u306A\u305E \u30CA\u30BE \u8B0E \u4E0A\u9054 \u7DF4\u7FD2",
        "game",
        "Tetris puzzle O(\u30C6\u30C8\u30EA\u30B9\u30D1\u30BA\u30EB\u30AA\u30FC)\u306FTCV100\u306B\u3088\u3063\u3066\u958B\u767A\u3055\u308C\u305F\u4E2D\u56FD\u306E\u8B0E\u30C6\u30C8\u30B5\u30A4\u30C8\u3067\u3059\\n\u30CA\u30BE\u30C6\u30C8\u306E\u30D1\u30BA\u30EB\u3092\u3044\u304F\u3064\u304B\u542B\u3093\u3067\u3044\u307E\u3059",
        "http://121.36.2.245:3000/tpo"
    },
	{"\u8A70\u3081\u30C6\u30C8\u30EA\u30B9",
        "nazo \u306A\u305E \u30CA\u30BE \u8B0E \u4E0A\u9054 \u7DF4\u7FD2",
        "game",
        "\u30CA\u30BE\u30C6\u30C8\u3088\u308A\u3082\u5B9F\u8DF5\u5411\u3051\u306E\u8B0E\u30C6\u30C8\u304C\u307E\u3068\u3081\u3089\u308C\u305Fatwiki\\n\u30C6\u30C8\u30EA\u30B9DS\u6642\u4EE3\u306E\u3082\u306E\u306A\u306E\u3067\u30D1\u30D5\u30A7\u3068ren\u706B\u529B\u306F\u306A\u3057\u3001TSM\u306FTSS\u6271\u3044",
        "https://w.atwiki.jp/tetrisds/pages/26.html"
    },
	{"twowide",
        "nazo \u306A\u305E \u30CA\u30BE \u8B0E \u4E0A\u9054 \u7DF4\u7FD2",
        "game",
        "\u591A\u6570\u306E\u9AD8\u96E3\u6613\u5EA6\u8B0E\u30C6\u30C8\u3001\u8C4A\u5BCC\u306A\u30E2\u30FC\u30C9\u304C\u3042\u308B\u8B0E\u30C6\u30C8\u30B5\u30A4\u30C8\u3067\u3059\\n\u30AA\u30F3\u30E9\u30A4\u30F3\u30E9\u30F3\u30AD\u30F3\u30B0\u3082\u3042\u308B\u306E\u3067\u4ED6\u306E\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u7AF6\u3044\u5408\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059",
        "https://twowi.de"
    },
	{"downstack-practice",
        "nazo \u306A\u305E \u30CA\u30BE \u8B0E \u4E0A\u9054 \u7DF4\u7FD2",
        "game",
        "downstack\u3068\u66F8\u3044\u3066\u3042\u308B\u304C\u6398\u4EE5\u5916\u306B\u3082Tspin\u3084\u9014\u4E2D\u30D1\u30D5\u30A7\u7B49\u306E\u8B0E\u30C6\u30C8\u3092\u751F\u6210\u3059\u308B\u8B0E\u30C6\u30C8\u30B5\u30A4\u30C8\u3067\u3059\\n\u4E2D\u76E4\u30C6\u30F3\u30D7\u30EC\u3082\u7DF4\u7FD2\u3067\u304D\u3001\u3088\u308A\u5B9F\u8DF5\u306B\u8FD1\u3044\u8B0E\u30C6\u30C8\u3092\u89E3\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059",
        "https://himitsuconfidential.github.io/downstack-practice/"
    },


    {"\u9014\u4E2D\u30E1\u30E2 1",
        "note memo \u30CE\u30FC\u30C8 \u30E1\u30E2 nb NB DM notice",
        "game",
        "\u6B21\u304B\u3089\u306F\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3084\u843D\u3061\u3082\u306E\u30D1\u30BA\u30EB\u30B2\u30FC\u30E0\u306E\u7C21\u5358\u306A\u7D39\u4ECB\u3067\u3059\\n\\n\u3082\u3061\u308D\u3093\u3053\u3053\u306B\u3042\u308B\u30B2\u30FC\u30E0\u304C\u3059\u3079\u3066\u3067\u306F\u3042\u308A\u307E\u305B\u3093\\n\u307E\u305FTechmino\u5236\u4F5C\u8005\u304C\u30B3\u30E1\u30F3\u30C8\u3092\u3057\u3066\u3044\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u3042\u304F\u307E\u3067\u4E3B\u89B3\u7684\u306A\u610F\u898B\u3067\u3042\u308A\u305D\u306E\u30B2\u30FC\u30E0\u306E\u826F\u3057\u60AA\u3057\u3092\u6C7A\u3081\u308B\u3082\u306E\u3067\u306F\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\\n\u4E8B\u5B9F\u3068\u610F\u898B\u3092\u660E\u78BA\u306B\u533A\u5225\u3059\u308B\u305F\u3081\u306B\u610F\u898B\u306F\u5927\u62EC\u5F27([,])\u3067\u56F2\u3093\u3067\u3044\u307E\u3059",
    },
    {"King of Stackers",
        "kos kingofstackers \u3053\u3059 \u30B3\u30B9 \u30AD\u30F3\u30B0 \u30B9\u30BF\u30C3\u30AB\u30FC\u30BA",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30DE\u30EB\u30C1\u30D7\u30EC\u30A4 | \u30E2\u30D0\u30A4\u30EB\u7AEF\u672B\u53EF\\n\u7565\u79F0\u306Fkos\\n\u30BF\u30FC\u30F3\u5236\u306E\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\n\u57FA\u672C\u7684\u306A\u30EB\u30FC\u30EB:\\n\u30D7\u30EC\u30A4\u30E4\u30FC\u306F1\u30BF\u30FC\u30F3\u306B\u3064\u304D7\u3064\u305A\u3064\u30DF\u30CE\u3092\u8A2D\u7F6E\u3057\u3066\u3044\u304D\u307E\u3059\\n\u76F8\u624B\u304B\u3089\u706B\u529B\u304C\u9001\u3089\u308C\u3066\u3082Line\u6D88\u53BB\u3092\u3057\u3066\u3044\u308B\u9593\u306F\u305B\u308A\u4E0A\u304C\u308A\u307E\u305B\u3093\\n\u3053\u306E\u30B2\u30FC\u30E0\u306Fpps\u306E\u6982\u5FF5\u304C\u306A\u3044\u305F\u3081\u3068\u3066\u3082\u6226\u7565\u7684\u3067\u3059\\n\u307E\u305F\u8A66\u5408\u8A2D\u5B9A\u3067\u69D8\u3005\u306A\u653B\u6483\u30EB\u30FC\u30EB\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059(\u901A\u5E38\u306FExclusive+)",
        "https://kingofstackers.com/",
    },
    {"Tetr.js",
        "tetrjs tetr.js js",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4 | \u30E2\u30D0\u30A4\u30EB\u7AEF\u672B\u53EF\\n\u30AA\u30EA\u30B8\u30CA\u30EB\u306F\u5358\u7D14\u306A1\u4EBA\u7528\u306E\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059[\u898B\u305F\u76EE\u3082\u30B7\u30F3\u30D7\u30EB\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u307B\u3068\u3093\u3069\u3042\u308A\u307E\u305B\u3093]\\n\u3057\u304B\u3057\u6709\u5FD7\u306B\u3088\u308A\u7D30\u304B\u3044\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u3084\u591A\u304F\u306E\u30E2\u30FC\u30C9\u3001\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u8FFD\u52A0\u7B49\u304C\u884C\u308F\u308C\u307E\u3057\u305F\\n\u5730\u7403\u5100\u30DC\u30BF\u30F3\u306E\u30EA\u30F3\u30AF\u306Ffarter\u6C0F\u306B\u3088\u308BDig Mod\u3078\u306E\u30EA\u30F3\u30AF\u3067\u3059",
        "http://farter.cn/t",
    },
    {"Tetra Legends",
        "tl tetralegends \u30EC\u30B8\u30A7\u30F3\u30BA \u30EC\u30B8\u30A7\u30F3\u30C9 \u3066\u3068\u3089 \u30C6\u30C8\u30E9 ",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4 | \u30E2\u30D0\u30A4\u30EB\u7AEF\u672B\u4E0D\u53EF\\n\u7565\u79F0\u306FTL\\n\u591A\u304F\u306E1\u4EBA\u7528\u30E2\u30FC\u30C9\u30682\u3064\u306E\u96A0\u3057\u30EA\u30BA\u30E0\u30B2\u30FC\u30E0\u3092\u6301\u3063\u3066\u3044\u308B1\u4EBA\u7528\u306E\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\n\u901A\u5E38\u4ED6\u306E\u30B2\u30FC\u30E0\u3067\u306F\u96A0\u3055\u308C\u3066\u3044\u308B\u90E8\u5206\u307E\u3067\u53EF\u8996\u5316\u3055\u308C\u3066\u3044\u307E\u3059\\n\u3057\u304B\u3057\u8907\u5408\u7684\u306A\u7406\u7531\u306B\u3088\u308A2020\u5E7412\u6708\u306B\u958B\u767A\u304C\u4E2D\u6B62\u3055\u308C\u307E\u3057\u305F",
        "https://tetralegends.app",
    },
    {"Ascension",
        "asc ASC ascension \u30A2\u30BA\u30BB\u30B7\u30AA\u30F3",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u7565\u79F0\u306FASC\\n\u540C\u3058\u304FASC\u3068\u547C\u3070\u308C\u308B\u72EC\u81EA\u306E\u56DE\u8EE2\u6CD5\u5247\u304C\u3042\u308A\u3001\u591A\u304F\u306E\u4E00\u4EBA\u7528\u30E2\u30FC\u30C9\u304C\u3042\u308A\u307E\u3059\\n1vs1\u30E2\u30FC\u30C9\u306F2022\u5E7411\u670826\u65E5\u73FE\u5728\u3001\u03B1\u7248\u3067\u3059\\nTechmino\u306Estack\u30E2\u30FC\u30C9\u306FASC\u304B\u3089\u30A2\u30A4\u30C7\u30A2\u3092\u5F97\u3066\u3044\u307E\u3059",
        "https://asc.winternebs.com",
    },
    {"Jstris",
        "js jstris \u3058\u3047\u3059\u3068\u308A\u3059 \u30B8\u30A7\u30B9\u30C8\u30EA\u30B9",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4 | \u30E2\u30D0\u30A4\u30EB\u7AEF\u672B\u53EF\\n\u7565\u79F0\u306Fjs\\n\u73FE\u5728\u3001\u4E3B\u6D41\u306E\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u306E1\u3064\u3067\u3042\u308A\u3001\u69D8\u3005\u306A\u30B7\u30F3\u30B0\u30EB\u30E2\u30FC\u30C9\u3068\u8C4A\u5BCC\u306A\u8A2D\u5B9A\u3001\u81EA\u7531\u306B\u914D\u7F6E\u3067\u304D\u308B\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9\u3092\u5099\u3048\u3066\u3044\u307E\u3059\\n\u307E\u305Fjstris+\u3092\u5C0E\u5165\u3059\u308B\u3053\u3068\u3067\u3055\u3089\u306B\u62E1\u5F35\u3055\u308C\u305Fjstris\u3092\u697D\u3057\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059",
        "https://jstris.jezevec10.com",
    },
    {"TETR.IO",
        "io tetrio tetr.io \u3066\u3068\u308A\u304A \u30C6\u30C8\u30EA\u30AA tetr \u3066\u3068\u3089\u3044\u304A \u30C6\u30C8\u30E9\u30A4\u30AA",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u7565\u79F0\u306F\u30C6\u30C8\u30EA\u30AA\\n\u73FE\u5728\u3001\u4E3B\u6D41\u306E\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u306E1\u3064\u3067\u3042\u308A\u3001\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\u30B7\u30B9\u30C6\u30E0\u3084\u591A\u304F\u306E\u30B2\u30FC\u30E0\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u308B\u30AB\u30B9\u30BF\u30E0\u30B2\u30FC\u30E0\u3001FFA\u306A\u3069\u69D8\u3005\u306A\u8981\u7D20\u3092\u5099\u3048\u3066\u3044\u307E\u3059\\n\u307E\u305F\u5B89\u5B9A\u3057\u3066\u52D5\u4F5C\u3057\u3084\u3059\u3044\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u7248\u304C\u5B58\u5728\u3057\u307E\u3059\\n\u305D\u3057\u3066TETR.IO+\u3092\u5C0E\u5165\u3059\u308B\u3053\u3068\u3067\u3055\u3089\u306B\u62E1\u5F35\u3055\u308C\u305F\u30C6\u30C8\u30EA\u30AA\u3092\u697D\u3057\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\\n[safari\u3058\u3083\u30C6\u30C8\u30EA\u30AA\u306F\u3067\u304D\u306A\u3044\u3088\u3046\u3067\u3059]",
        "https://tetr.io",
    },
    {"Nuketris",
        "nuketris nuke \u306C\u3051 \u30CC\u30B1 \u306C\u3051\u3068\u308A\u3059 \u30CC\u30B1\u30C8\u30EA\u30B9",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u57FA\u672C\u7684\u306A1\u4EBA\u7528\u30E2\u30FC\u30C9\u3084\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\u30B7\u30B9\u30C6\u30E0\u3092\u5099\u3048\u305F\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\n\u72EC\u7279\u306A\u30B2\u30FC\u30E0\u30EB\u30FC\u30EB\u3092\u3057\u3066\u304A\u308A\u3001Ospin\u3082\u3067\u304D\u307E\u3059",
        "https://nuketris.com",
    },
    {"Worldwide Combos",
        "wwc worldwidecombos \u30EF\u30FC\u30EB\u30C9 \u30EF\u30A4\u30C9 \u30B3\u30F3\u30DC \u30B3\u30F3\u30DC\u30BA",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u7565\u79F0\u306FWWC\\n\u4E16\u754C\u898F\u6A21\u306E1vs1\u3084\u30EA\u30D7\u30EC\u30A4\u3068\u6226\u3048\u308B\u30E2\u30FC\u30C9\u3001\u8C4A\u5BCC\u306A\u30B2\u30FC\u30E0\u8A2D\u5B9A\u306A\u3069\u69D8\u3005\u306A\u6A5F\u80FD\u3092\u5099\u3048\u305F\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059",
        "https://worldwidecombos.com",
    },
    {"Tetris Friends",
        "tf tetrisfriends notrisfoes\u3000\u30C6\u30C8\u30EA\u30B9 \u3066\u3068\u3075\u308C \u30C6\u30C8\u30D5\u30EC \u306E\u3068\u308A\u3059 \u30CE\u30C8\u30EA\u30B9 official \u516C\u5F0F",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u7565\u79F0\u306F\u30C6\u30C8\u30D5\u30EC\\n\u4ECA\u306F\u4EA1\u304D\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u6614\u306F\u3068\u3066\u3082\u4EBA\u6C17\u304C\u3042\u3063\u305F\u304C\u6570\u5E74\u524D\u306B\u30B5\u30FC\u30D3\u30B9\u7D42\u4E86\u3057\u305F\\n\u73FE\u5728\u306F\u300CNotris Foes\u300D\u3068\u3044\u3046\u975E\u516C\u5F0F\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30B5\u30FC\u30D0\u30FC\u304C\u5B58\u5728\u3057\u3066\u3044\u308B",
    },
    {"tetris.com",
        "tetris \u30C6\u30C8\u30EA\u30B9 online \u30AA\u30F3\u30E9\u30A4\u30F3 official \u516C\u5F0F",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\ntetris.com\u306B\u3042\u308B\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u30B2\u30FC\u30E0\u30E2\u30FC\u30C9\u306F\u30DE\u30E9\u30BD\u30F3\u306E\u307F\u3067\u3059\\n\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u306F\u73CD\u3057\u304F\u30DE\u30A6\u30B9\u64CD\u4F5C\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059","https://tetris.com/play-tetris/?utm_source=top_nav_link&utm_medium=webnav&utm_campaign=playNow_btm_tst&utm_content=text_play_now",
	},
    {"Tetris Gems",
        "tetris \u30C6\u30C8\u30EA\u30B9 online \u30AA\u30F3\u30E9\u30A4\u30F3 official \u516C\u5F0F gem \u30B8\u30A7\u30E0",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\ntetris.com\u306B\u3042\u308B\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u6A2A1\u5217\u3092\u63C3\u3048\u308B\u3068\u63C3\u3048\u305F\u90E8\u5206\u304C\u91CD\u529B\u306E\u5F71\u97FF\u3092\u53D7\u3051\u308B\u7279\u6B8A\u306A\u30D6\u30ED\u30C3\u30AF\u306B\u306A\u308A\u3001\u9023\u9396\u7684\u306BLine\u6D88\u53BB\u304C\u53EF\u80FD\u306A\u30B2\u30FC\u30E0\u3067\u3042\u308B\\n\u3055\u3089\u306B3\u7A2E\u985E\u306E\u5B9D\u77F3\u30D6\u30ED\u30C3\u30AF\u304C\u5B58\u5728\u3057\u3001\u305D\u308C\u305E\u308C\u7279\u6B8A\u80FD\u529B\u3092\u6301\u3063\u3066\u3044\u307E\u3059","https://tetris.com/play-tetrisgems",
    },
    {"Tetris Mind Bender",
        "tetris \u30C6\u30C8\u30EA\u30B9 online \u30AA\u30F3\u30E9\u30A4\u30F3 official \u516C\u5F0F gem \u30B8\u30A7\u30E0",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\ntetris.com\u306B\u3042\u308B\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u30EB\u30FC\u30EB\u306F\u30DE\u30E9\u30BD\u30F3\u3068\u540C\u3058\u3067\u3059\u304C\u300C\u30DE\u30A4\u30F3\u30C9\u30D9\u30F3\u30C0\u30FC\u300D\u3068\u3044\u3046\u7279\u6B8A\u306A\u30D6\u30ED\u30C3\u30AF\u304C\u51FA\u73FE\u3057\u307E\u3059\\n\u30DE\u30A4\u30F3\u30C9\u30D9\u30F3\u30C0\u30FC\u3092\u6D88\u3059\u3053\u3068\u3067\u69D8\u3005\u306A\u30A4\u30D9\u30F3\u30C8\u304C\u8D77\u3053\u308A\u307E\u3059","https://tetris.com/play-tetrismindbender",
    },

    {"Techmino",
        "techmino \u30C6\u30AF\u30DF\u30CE \u30C6\u30C3\u30AF\u30DF\u30CE",
        "game",
        "\u30AF\u30ED\u30B9\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0|\u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u65E5\u672C\u8A9E\u3060\u3068\u30C6\u30AF\u30DF\u30CE\u3084\u30C6\u30C3\u30AF\u30DF\u30CE\u3068\u547C\u3070\u308C\u307E\u3059\\nMrZ\u3092\u7B46\u982D\u306BL\xD6VE\u3092\u4F7F\u3063\u3066\u958B\u767A\u3055\u308C\u305F\u843D\u3061\u3082\u306E\u30D1\u30BA\u30EB\u30B2\u30FC\u30E0\u3067\u3059\\n\u591A\u304F\u306E\u4E00\u4EBA\u7528\u30E2\u30FC\u30C9\u3001\u591A\u5F69\u306A\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u6027\u3092\u6301\u3061\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\u3082\u5F90\u3005\u306B\u958B\u767A\u3055\u308C\u3066\u3044\u307E\u3059",
    },
    {"Falling Lightblocks",
        "fl fallinglightblocks \u30E9\u30A4\u30C8 \u30D5\u30A9\u30FC\u30EA\u30F3\u30B0 ",
        "game",
        "\u30D6\u30E9\u30A6\u30B6/iOS/Android | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u7E26\u3067\u3082\u6A2A\u3067\u3082\u904A\u3079\u308B\u30DE\u30EB\u30C1\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\nDAS\u3084Line\u6D88\u53BB\u6642\u9593\u306F\u56FA\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\\n\u307E\u305F\u30E2\u30D0\u30A4\u30EB\u7AEF\u672B\u3067\u306F\u64CD\u4F5C\u3092\u4E00\u90E8\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u53EF\u80FD\u3067\u3059\\nFalling Lightblocks\u5185\u306B\u3042\u308B\u30B2\u30FC\u30E0\u306E\u307B\u3068\u3093\u3069\u306F\u30D5\u30A1\u30DF\u30B3\u30F3\u306E\u30AF\u30E9\u30C3\u30B7\u30AF\u30C6\u30C8\u30EA\u30B9\u304C\u30D9\u30FC\u30B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u304C\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u3082\u5B58\u5728\u3057\u307E\u3059\\n\u30D0\u30C8\u30EB\u30B7\u30B9\u30C6\u30E0\u306F\u534A\u5206\u30BF\u30FC\u30F3\u5236\u3001\u534A\u5206\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u5236\u306B\u306A\u3063\u3066\u304A\u308A\u3001\u76F8\u6BBA\u30B7\u30B9\u30C6\u30E0\u306F\u3042\u308A\u307E\u305B\u3093",
        "https://golfgl.de/lightblocks/",
    },
	{"HATETRIS",
        "hatetris \u3078\u3044\u3068 \u30D8\u30A4\u30C8 \u306F\u3066\u3068\u308A\u3059 \u30CF\u30C6\u30C8\u30EA\u30B9",
        "game",
        "\u30D6\u30E9\u30A6\u30B6 | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\n\u5E38\u306B\u5ACC\u306A\u30D6\u30ED\u30C3\u30AF\u304C\u51FA\u73FE\u3059\u308B\u4E00\u98A8\u5909\u308F\u3063\u305F\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\nLine\u6D88\u53BB\u6570\u304C\u305D\u306E\u307E\u307E\u30B9\u30B3\u30A2\u306B\u306A\u308B\\n\u30C6\u30C8\u30EA\u30B9\u5168\u4F53\u3067\u898B\u3066\u3082\u975E\u5E38\u306B\u96E3\u3057\u3044\u3053\u3068\u304B\u3089\u4EBA\u9593\u306B\u3088\u308B\u30B9\u30B3\u30A2\u66F4\u65B0\u3088\u308A\u3082\u6A5F\u68B0\u3092\u4F7F\u3063\u305F\u7814\u7A76\u306E\u65B9\u304C\u76DB\u3093\u3067\u3042\u308B",
        "https://qntm.org/files/hatetris/hatetris.html",
    },
    {"Cambridge",
        "cambridge \u30B1\u30F3\u30D6\u30EA\u30C3\u30B8",
        "game",
        "\u30AF\u30ED\u30B9\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0 | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\nL\xD6VE\u3092\u4F7F\u3063\u3066\u958B\u767A\u3055\u308C\u305F\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\n\u7C21\u5358\u304B\u3064\u9AD8\u5EA6\u306B\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3067\u304D\u308B\u65B0\u3057\u3044\u30B2\u30FC\u30E0\u30E2\u30FC\u30C9\u304C\u3042\u308A\u307E\u3059\\n\u5143\u3005\u306FJoe Zeng\u6C0F\u304C\u958B\u767A\u3057\u3066\u3044\u307E\u3057\u305F\u304C2020\u5E7410\u67088\u65E5\u306Ever.0.1.5\u304B\u3089Milla\u6C0F\u304C\u5F15\u7D99\u304E\u307E\u3057\u305F\\n-Tetris wiki\u3088\u308A",
    },
    {"Nanamino",
        "nanamino \u306A\u306A\u307F\u306E \u306A\u306A \u30CA\u30CA\u30DF\u30CE \u30CA\u30CA",
        "game",
        "Windows/Android | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\n\u9762\u767D\u3044\u56DE\u8EE2\u30B7\u30B9\u30C6\u30E0\u3092\u6301\u3063\u3066\u3044\u308B\u958B\u767A\u4E2D\u306E\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059",
    },

    {"TGM",
        "tetrisgrandmaster tetristhegrandmaster gm \u30B0\u30E9\u30F3\u30C9 \u30DE\u30B9\u30BF\u30FC",
        "game",
        "\u30A2\u30FC\u30B1\u30FC\u30C9/PS/NS | \u30B7\u30F3\u30B0\u30EB/\u30ED\u30FC\u30AB\u30EB\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\nTetris The Grand Master\u306F\u30A2\u30FC\u30B1\u30FC\u30C9\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\nS13\u3084GM\u7B49\u306E\u30E2\u30FC\u30C9\u306F\u3053\u306E\u30B7\u30EA\u30FC\u30BA\u304B\u3089\u59CB\u307E\u308A\u307E\u3057\u305F\\nTGM3\u306F\u30B7\u30EA\u30FC\u30BA\u306E\u4E2D\u3067\u6700\u3082\u6709\u540D\u306A\u30BF\u30A4\u30C8\u30EB\u3067\u3059\\nNintendo Switch\u3084Playstation 4\u306B\u79FB\u690D\u3055\u308C\u3066\u307E\u3059",
    },
    {"DTET",
        "dtet \u30C7\u30C6\u30C8 \u3067\u3066\u3068 \u30C7\u30A3\u30C6\u30C8 \u3067\u3043\u3066\u3068",
        "game",
        "Windows | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\nTGM\u306E\u30AF\u30E9\u30C3\u30B7\u30AF\u30EB\u30FC\u30EB\u3092\u30D9\u30FC\u30B9\u306B20G\u3084\u5F37\u529B\u306A\u56DE\u8EE2\u30B7\u30B9\u30C6\u30E0\u3092\u5C0E\u5165\u3057\u305F\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\n\u73FE\u5728\u3001\u3053\u306E\u30B2\u30FC\u30E0\u3092\u898B\u3064\u3051\u51FA\u3059\u306E\u306F\u96E3\u3057\u304F\u3001\u898B\u3064\u304B\u3089\u306A\u3044DLL\u30D5\u30A1\u30A4\u30EB\u3092\u81EA\u5206\u3067\u88DC\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
    },
    {"Heboris",
        "hb heboris \u3078\u307C \u30D8\u30DC\u30EA\u30B9 \u3078\u307C\u308A\u3059",
        "game",
        "Windows | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\n\u30A2\u30FC\u30B1\u30FC\u30C9\u306E\u3088\u3046\u306A\u96F0\u56F2\u6C17\u306E\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\n\u4ED6\u306E\u30C6\u30C8\u30EA\u30B9\u306E\u69D8\u3005\u306A\u30B2\u30FC\u30E0\u30E2\u30FC\u30C9\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u304D\u307E\u3059",
    },
    {"Texmaster",
        "txm texmaster \u30C6\u30AF\u30B9 \u30DE\u30B9\u30BF\u30FC",
        "game",
        "Windows | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\nTGM\u306E\u5168\u30E2\u30FC\u30C9\u3092\u53CE\u9332\u3057\u3066\u3044\u308B\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\n\u305F\u3060\u3057\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u3084\u30AD\u30C3\u30AF\u30C6\u30FC\u30D6\u30EB\u306E\u4ED5\u69D8\u304C\u30EF\u30FC\u30EB\u30C9\u30EB\u30FC\u30EB\u3068\u5C11\u3057\u7570\u306A\u308A\u307E\u3059",
    },

    {"Tetris Effect",
        "te tec tetriseffectconnected TE:C \u30C6\u30C3\u30AF \u30C6\u30C8\u30A8\u30D5\u30A7 \u30A8\u30D5\u30A7\u30AF\u30C8 \u30B3\u30CD\u30AF\u30C6\u30C3\u30C9",
        "game",
        "PS/Oculus Quest/Xbox/NS/Windows | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u7565\u79F0\u306F\u30C6\u30C8\u30A8\u30D5\u30A7(\u30C6\u30C3\u30AF)\\n\u5165\u529B\u306B\u53CD\u5FDC\u3059\u308B\u30C9\u6D3E\u624B\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u3068\u30B5\u30A6\u30F3\u30C9\u3092\u5099\u3048\u305F\u73FE\u5728\u3001\u4E3B\u6D41\u306E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u306E1\u3064\\n\u300CConnected\u300D\u306E\u6587\u5B57\u304C\u306A\u3044\u57FA\u672C\u7248\u3067\u306F1\u4EBA\u7528\u30E2\u30FC\u30C9\u3057\u304B\u306A\u3044\\n\u30B3\u30CD\u30AF\u30C6\u30C3\u30C9\u306E\u65B9\u3067\u306F\u30B3\u30CD\u30AF\u30C6\u30C3\u30C9\u30D0\u30C8\u30EB\u3001Zone\u30D0\u30C8\u30EB\u3001\u30B9\u30B3\u30A2\u30A2\u30BF\u30C3\u30AF\u3001\u30AF\u30E9\u30C3\u30B7\u30AF\u30B9\u30B3\u30A2\u30A2\u30BF\u30C3\u30AF\u306E\u8A084\u3064\u306E\u30E2\u30FC\u30C9\u3067\u5BFE\u6226\u304C\u53EF\u80FD\u3068\u306A\u3063\u3066\u3044\u308B(\u305F\u3060\u3057\u30D5\u30EC\u30F3\u30C9\u30DE\u30C3\u30C1\u3084\u30ED\u30FC\u30AB\u30EB\u30DE\u30C3\u30C1\u3067\u306FZone\u306A\u3057\u7B49\u306E\u30EB\u30FC\u30EB\u8A2D\u5B9A\u304C\u53EF\u80FD)",
    },
    {"Tetris 99",
        "t99 tetris99 99 ",
        "game",
        "Nintendo Switch | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n99\u4EBA\u3067\u30D0\u30C8\u30EB\u30ED\u30A4\u30E4\u30EB\u3092\u884C\u3046\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u5F93\u6765\u306E\u5BFE\u6226\u30C6\u30C8\u30EA\u30B9\u306B\u306F\u306A\u3044\u6226\u7565\u304C\u591A\u304F\u5B58\u5728\u3059\u308B\\n\u307E\u305FDLC\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u3067\u30DE\u30E9\u30BD\u30F3\u3084cpu\u3068\u306E\u8A66\u5408\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u30B9\u30AD\u30F3\u306A\u3069\u304C\u8FFD\u52A0\u3055\u308C\u308B",
    },
    {"\u3077\u3088\u3077\u3088\u30C6\u30C8\u30EA\u30B9",
        "ppt puyopuyotetris\u3000\u3077\u3088\u30C6\u30C8 \u3077\u3088\u3077\u3088 \u30C6\u30C8\u30EA\u30B9 \u3077\u3066",
        "game",
        "PS/NS/Xbox/Windows | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u3077\u3088\u3077\u3088\u3068\u30C6\u30C8\u30EA\u30B9\u306E2\u3064\u304C\u5165\u3063\u305F\u30B2\u30FC\u30E0\\n\u7570\u7A2E\u5BFE\u6226\u3082\u3067\u304D\u3001\u591A\u304F\u306E\u30B2\u30FC\u30E0\u30E2\u30FC\u30C9\u304C\u5B58\u5728\u3059\u308B\\n\\n[steam\u7248\u306F\u64CD\u4F5C\u6027\u304C\u60AA\u304F\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u5BFE\u6226\u3082\u9177\u3044]",
    },
    {"Tetris online",
        "top toj toz tetrisonline poland japan zapan \u30C6\u30C8\u30AA\u30F3",
        "game",
        "Windows | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u4ECA\u306F\u4EA1\u304D\u65E5\u672C\u306E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\nDAS\u3068ARR\u306E\u5024\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u304C\u3069\u3061\u3089\u30820\u306B\u306F\u3067\u304D\u307E\u305B\u3093\\n\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30B5\u30FC\u30D0\u30FC\u3067\u7A3C\u50CD\u3057\u3066\u3044\u307E\u3057\u305F\u304C2022\u5E7412\u67083\u65E5\u73FE\u5728\u30012\u7A2E\u985E\u306E\u65E5\u672C\u30B5\u30FC\u30D0\u30FC\u5168\u3066\u30C0\u30A6\u30F3\u3057\u3066\u3044\u307E\u3059",
    },
    {"Tetra Online",
        "TO tetraonline tetraoffline offline \u30C6\u30C8\u30E9 \u3066\u3068\u3089 \u30AA\u30F3\u30E9\u30A4\u30F3 \u30AA\u30D5\u30E9\u30A4\u30F3",
        "game",
        "Windows/macOS/Linux | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\nDr Ocelo\u3068Mine\u306B\u3088\u3063\u3066\u958B\u767A\u3055\u308C\u305F\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u3059\\n\u64CD\u4F5C\u6027\u306F\u610F\u56F3\u7684\u306BARE\u304C\u9AD8\u3044\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3077\u3088\u30C6\u30C8\u306A\u3069\u306B\u8FD1\u3044\\nThe tetris company\u304CDMCA(\u30C7\u30B8\u30BF\u30EB\u30DF\u30EC\u30CB\u30A2\u30E0\u8457\u4F5C\u6A29\u6CD5)\u3092\u7406\u7531\u306Bsteam\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3057\u305F\\n\u3057\u304B\u3057\u30AA\u30D5\u30E9\u30A4\u30F3\u7248\u306F\u73FE\u5728\u3082Github\u304B\u3089\u5165\u624B\u53EF\u80FD\u3067\u3059\\n\\n\u30C6\u30C8\u30E9\u30AA\u30D5\u30E9\u30A4\u30F3",
        "https://github.com/Juan-Cartes/Tetra-Offline/releases/tag/1.0",
    },

    {"Cultris II",
        "c2 cultris2 cultrisii \u30AB\u30EB\u30C8\u30EA\u30B9",
        "game",
        "Windows/OS X | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u30AF\u30E9\u30C3\u30B7\u30AF\u30C6\u30C8\u30EA\u30B9\u3092\u30D9\u30FC\u30B9\u306B\u30C7\u30B6\u30A4\u30F3\u3055\u308C\u305F\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u5BFE\u6226\u30E2\u30FC\u30C9\u306F\u30B3\u30F3\u30DC(ren)\u306B\u91CD\u70B9\u3092\u7F6E\u3044\u305F\u3082\u306E\u3068\u306A\u3063\u3066\u304A\u308A\u3001\u30B3\u30F3\u30DC\u5730\u5F62\u3092\u7D44\u307F\u7ACB\u3066\u308B\u901F\u3055\u3001\u30B3\u30F3\u30DC\u6D88\u5316\u901F\u5EA6\u3001\u6398\u306E\u30B9\u30AD\u30EB\u304C\u8A66\u3055\u308C\u308B\u30B2\u30FC\u30E0\u3068\u306A\u3063\u3066\u3044\u308B\\n\\n[Mac\u7248\u306F\u9577\u3044\u9593\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u3055\u308C\u3066\u306A\u304F\u3001macOS Cataline\u3088\u308A\u3082\u65B0\u3057\u3044\u30D3\u30EB\u30C9\u306Emac OS\u3067\u306F\u3053\u306E\u30B2\u30FC\u30E0\u3092\u30D7\u30EC\u30A4\u3067\u304D\u307E\u305B\u3093]",
    },
    {"Nullpomino",
        "np nullpomino \u306C\u308B\u307D \u30CC\u30EB\u30DD \u306C\u308B\u307D\u307F\u306E \u30CC\u30EB\u30DD\u30DF\u30CE \u306C\u308B",
        "game",
        "Windows/macOS/Linux | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u6027\u306E\u9AD8\u3044\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u30B2\u30FC\u30E0\u5185\u306E\u307B\u307C\u5168\u3066\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u308B\\n\\n[\u3057\u304B\u3057UI\u304C\u6642\u4EE3\u9045\u308C\u3067\u30D5\u30EB\u30AD\u30FC\u30DC\u30FC\u30C9\u3067\u306E\u64CD\u4F5C\u304C\u5FC5\u9808\u306B\u306A\u308A\u307E\u3059\\nNullpommino\u521D\u5FC3\u8005\u306F\u6163\u308C\u308B\u307E\u3067\u554F\u984C\u304C\u3042\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\\n\u307E\u305Fmac OS Monterey\u3067\u306F\u3053\u306E\u30B2\u30FC\u30E0\u306F\u52D5\u4F5C\u3057\u307E\u305B\u3093]",
    },
    {"Misamino",
        "misamino \u30DF\u30B5\u30DF\u30CE \u307F\u3055\u307F\u306E \u307F\u3055\u304B\u307F\u306E \u30DF\u30B5\u30AB\u30DF\u30CE",
        "game",
        "Windows | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\n\u30ED\u30FC\u30AB\u30EB\u3067Misamino\u3068\u3044\u3046bot\u3068\u5BFE\u6226\u3067\u304D\u308B\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\nAPI\u3092\u5B66\u3076\u3053\u3068\u3067\u81EA\u5206\u3067bot\u3092\u4F5C\u308B\u3053\u3068\u3082\u3067\u304D\u308B",
    },
{"four-tris",
        "four \u7DF4\u7FD2 \u4E0A\u9054 \u89E3\u6790 \u7814\u7A76",
        "game",
        "Windows | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\n\u4E3B\u306B\u8A66\u5408\u3092\u89E3\u6790\u3059\u308B\u305F\u3081\u306E\u30BD\u30D5\u30C8\\n\u76E4\u9762\u306E\u53D6\u308A\u8FBC\u307F\u306F\u753B\u50CF\u89E3\u6790\u306B\u3088\u3063\u3066\u884C\u3046(\u304B\u306A\u308A\u7CBE\u5EA6\u304C\u9AD8\u3044)\\n n\u56DE\u76EE\u306E\u30D1\u30D5\u30A7\u3084ren\u3001\u30C1\u30FC\u30BA\u306E\u7DF4\u7FD2\u3082\u3067\u304D\u308B",
	"https://github.com/fiorescarlatto/four-tris/releases",
    },
    {"Touhoumino",
        "touhoumino \u6771\u65B9 touhou \u3068\u3046\u307B\u3046 \u30C8\u30A6\u30DB\u30A6",
        "game",
        "Windows | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\nNullpomino\u3092\u6539\u9020\u3057\u3001\u6771\u65B9project\u306E\u8981\u7D20\u3092\u8FFD\u52A0\u3057\u305F\u975E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u30DE\u30E9\u30BD\u30F3\u3067\u306F\u30B9\u30DA\u30EB\u30AB\u30FC\u30C9\u304C\u5B58\u5728\u3057\u3001\u5236\u9650\u6642\u9593\u5185\u306B\u5FC5\u8981\u306A\u30B9\u30B3\u30A2\u306B\u5230\u9054\u3057\u306A\u3044\u3068\u3044\u3051\u306A\u3044\\n\\n[\u81EA\u5206\u306E\u8155\u306B\u81EA\u4FE1\u304C\u3042\u308B\u4EBA\u306B\u304A\u3059\u3059\u3081\\n\u305D\u3046\u3058\u3083\u306A\u3044\u3068\u3069\u3046\u3084\u3063\u3066\u6B7B\u3093\u3060\u306E\u304B\u3059\u3089\u308F\u304B\u3089\u306A\u3044]",
    },

    {"Tetris Blitz",
        "blitz ea mobile phone \u30D6\u30EA\u30C3\u30C4 \u30A4\u30FC\u30A8\u30FC \u30B9\u30DE\u30DB \u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3 \u30E2\u30D0\u30A4\u30EB",
        "game",
        "iOS/Android | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\nEA\u306B\u3088\u3063\u3066\u958B\u767A\u3055\u308C\u305F\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u7528\u306E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u30B2\u30FC\u30E0\u958B\u59CB\u6642\u306B\u591A\u304F\u306E\u30DF\u30CE\u304C\u843D\u3061\u3066\u6765\u305F\u308A\u3001Line\u6D88\u53BB\u3092\u9023\u7D9A\u3067\u884C\u3046\u3053\u3068\u3067\u300CFrenzy\u300D\u30E2\u30FC\u30C9\u306B\u5165\u308B\u3053\u3068\u304C\u3067\u304D\u305F\u308A\u3001\u30C8\u30C3\u30D7\u30A2\u30A6\u30C8\u304C\u5B58\u5728\u3057\u306A\u304B\u3063\u305F\u308A\u3068\u69D8\u3005\u306A\u7279\u6B8A\u306A\u4ED5\u69D8\u304C\u3042\u308B\\n\\n\u3053\u306E\u30B2\u30FC\u30E0\u306F2020\u5E744\u6708\u306B\u914D\u4FE1\u3092\u7D42\u4E86\u3057\u3066\u3044\u307E\u3059",
    },
    {"Tetris (EA)",
        "tetris ea galaxy universe cosmos mobile phone \u30C6\u30C8\u30EA\u30B9 \u30A4\u30FC\u30A8\u30FC \u30B9\u30DE\u30DB \u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3 \u30E2\u30D0\u30A4\u30EB\u3000\u30AE\u30E3\u30E9\u30AF\u30B7\u30FC \u9280\u6CB3 \u5B87\u5B99 \u30E6\u30CB\u30D0\u30FC\u30B5\u30EB \u30B3\u30B9\u30E2\u30B9",
        "game",
        "iOS/Android | \u30B7\u30F3\u30B0\u30EB/\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4(?)\\nEA\u304C\u958B\u767A\u3057\u305F\u3082\u30461\u3064\u306E\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u7528\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u30B9\u30EF\u30A4\u30D7\u3068\u30EF\u30F3\u30BF\u30C3\u30C1\u306E2\u3064\u306E\u64CD\u4F5C\u65B9\u6CD5\u304C\u3042\u308B\\n\u307E\u305F\u30DE\u30E9\u30BD\u30F3\u306E\u4ED6\u306B\u30AE\u30E3\u30E9\u30AF\u30B7\u30FC\u30E2\u30FC\u30C9\u3068\u3044\u3046\u3082\u306E\u304C\u5B58\u5728\u3059\u308B\\n\u3053\u306E\u30E2\u30FC\u30C9\u306E\u30AF\u30EA\u30A2\u6761\u4EF6\u306F\u6307\u5B9A\u3055\u308C\u305F\u30DF\u30CE\u3092\u4F7F\u3044\u5207\u308B\u524D\u306B\u30AE\u30E3\u30E9\u30AF\u30B7\u30FC\u30DF\u30CE\u3092\u6D88\u53BB\u3059\u308B\u3053\u3068\u3067\u3059\\n\\n\u3053\u306E\u30B2\u30FC\u30E0\u306F2020\u5E744\u6708\u306B\u914D\u4FE1\u3092\u7D42\u4E86\u3057\u3066\u3044\u307E\u3059",
    },
    {"Tetris (N3TWORK)",
        "tetris n3twork mobile phone \u30C6\u30C8\u30EA\u30B9 \u30B9\u30DE\u30DB \u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3 \u30E2\u30D0\u30A4\u30EB",
        "game",
        "iOS/Android |\u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\nN3TWORK\u304C\u958B\u767A\u3057\u305F\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u7528\u306E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n3\u5206\u306E\u30A6\u30EB\u30C8\u30E9\u3001\u30DE\u30E9\u30BD\u30F3\u3001100\u4EBA(cpu)\u306E\u30D0\u30C8\u30EB\u30ED\u30A4\u30E4\u30EB\u30E2\u30FC\u30C9\u304C\u3042\u308B\\n\\n[UI\u306F\u7D20\u6674\u3089\u3057\u3044\u304C\u64CD\u4F5C\u6027\u304C\u826F\u304F\u306A\u3044]",
    },
    {"Tetris Beat",
        "n3twork rhythm \u30EA\u30BA\u30E0 \u30D3\u30FC\u30C8 beat \u30B9\u30DE\u30DB \u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3 \u30E2\u30D0\u30A4\u30EB mobile phone",
        "game",
        "iOS | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\nN3TWORK\u304CApple\u30A2\u30FC\u30B1\u30FC\u30C9\u3067\u914D\u4FE1\u3057\u3066\u3044\u308B\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u7528\u306E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u30DE\u30E9\u30BD\u30F3\u306E\u4ED6\u306B\u30D3\u30FC\u30C8\u30E2\u30FC\u30C9\u304C\u3042\u308B\u304CBGM\u306E\u30EA\u30BA\u30E0\u306B\u5408\u308F\u305B\u3066\u30DF\u30CE\u3092\u7F6E\u3044\u3066\u884C\u304F\u3060\u3051\u3067\u3042\u308B\\n\\n[\u30A8\u30D5\u30A7\u30AF\u30C8\u304C\u91CD\u3044\u3057\u64CD\u4F5C\u6027\u3082\u30A4\u30DE\u30A4\u30C1]",
    },
    {"Tetris Journey",
        "tetrisjourney mobile phone huanyouji \u30B9\u30DE\u30DB \u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3 \u30E2\u30D0\u30A4\u30EB \u30B8\u30E3\u30FC\u30CB\u30FC",
        "game",
        "iOS/Android | \u30B7\u30F3\u30B0\u30EB\u30D7\u30EC\u30A4\\nTencent\u306B\u3088\u3063\u3066\u958B\u767A\u3055\u308C\u3001\u4E2D\u56FD\u9650\u5B9A\u3067\u914D\u4FE1\u3055\u308C\u305F\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u7528\u306E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u30EC\u30D9\u30EB\u30E2\u30FC\u30C9\u3084\u5BFE\u6226\u30E2\u30FC\u30C9\u3001\u3044\u304F\u3064\u304B\u306E1\u4EBA\u7528\u30E2\u30FC\u30C9\u304C\u3042\u308B\\n\u5BFE\u6226\u30E2\u30FC\u30C9\u3067\u306F2\u5206\u9593\u306E\u6642\u9593\u5236\u9650\u304C\u3042\u308A\u3001\u5BFE\u6226\u8005\u304C\u30C8\u30C3\u30D7\u30A2\u30A6\u30C8\u3057\u306A\u3044\u5834\u5408\u3001\u3088\u308A\u591A\u304F\u706B\u529B\u3092\u9001\u3063\u305F\u65B9\u304C\u52DD\u8005\u3068\u306A\u308B\\n\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u914D\u7F6E\u3084\u5927\u304D\u3055\u3092\u8ABF\u6574\u3067\u304D\u308B",
    },
    {"JJ Tetris",
        "jjtetris \u3058\u3047\u30FC\u3058\u3047\u30FC \u30B8\u30A7\u30FC\u30B8\u30A7\u30FC \u3058\u3047\u3058\u3047 \u30B8\u30A7\u30B8\u30A7",
        "game",
        "Android | \u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u6B63\u5F0F\u540D\u79F0:JJ\u5757\\nJJ\u68CB\u724C\u306E\u30AB\u30B8\u30E5\u30A2\u30EB\u30B2\u30FC\u30E0\\n\u7E26\u753B\u9762\u3001\u4F4E\u5165\u529B\u9045\u5EF6\u3068\u64CD\u4F5C\u6027\u304C\u9AD8\u3044\\nDAS\u3084ARR\u300120G\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u306A\u3069\u3082\u5236\u9650\u306F\u3042\u308A\u307E\u3059\u304C\u8A2D\u5B9A\u53EF\u80FD\u3067\u3059\\n\u30DB\u30FC\u30EB\u30C9\u3084B2B\u30B7\u30B9\u30C6\u30E0\u3001\u76F8\u6BBA\u30B7\u30B9\u30C6\u30E0\u306F\u3042\u308A\u307E\u305B\u3093\\n\u4ED6\u306B\u3082\u305D\u308C\u305E\u308C\u306E\u653B\u6483\u306E\u706B\u529B\u306E\u4E0A\u9650\u304C4\u3001\u30B3\u30F3\u30DC\u304C\u5F37\u3044\u3068\u3044\u3046\u7279\u5FB4\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u305D\u308C\u4EE5\u5916\u306F\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u306B\u4F3C\u3066\u3044\u307E\u3059",
    },

    {"Huopin Tetris",
        "huopin qq \u307B\u3046\u3074\u3093",
        "game",
        "Windows |\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\\n\u6B63\u5F0F\u540D\u79F0:\u706B\u62FC\u4FC4\u7F57\u65AF\\nTencent Game Center\u304C\u958B\u767A\u3057\u305F\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\\n\u5E4512\u306E\u76E4\u9762\u3001DAS\u3084ARR\u306F\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30BF\u30A4\u30D4\u30F3\u30B0\u3068\u540C\u3058\u3001\u30CD\u30AF\u30B9\u30C8\u306F1\u3064\u3001\u30DB\u30FC\u30EB\u30C9\u306F\u306A\u3044\\n3line\u6D88\u3057(\u706B\u529B:2)\u3068\u30C6\u30C8\u30EA\u30B9(\u706B\u529B:3)\u3067\u3057\u304B\u653B\u6483\u3092\u9001\u308C\u306A\u3044\\n\u4E0B\u7A74\u304C\u5E02\u677E\u6A21\u69D8\u306E\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u6398\u308B\u3053\u3068\u306F\u307B\u307C\u4E0D\u53EF\u80FD",
    },

    -- Terms
    {"\u7FFB\u8A33\u8005\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B8 2",
        "",
        "help",
        "\u3053\u3053\u304B\u3089\u7528\u8A9E\u89E3\u8AAC\u306B\u306A\u308A\u307E\u3059\\n\\n\u3053\u308C\u3089\u306E\u7528\u8A9E\u306F\u5168\u3066\u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u3068\u306F\u9650\u3089\u305A\u3001\u307E\u305F\u5168\u3066\u306E\u7528\u8A9E\u304C\u5E38\u306B\u540C\u3058\u610F\u5473\u3092\u6301\u3063\u3066\u3044\u308B\u3068\u306F\u9650\u3089\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\\n\u3053\u3053\u3067\u306F\u4E3B\u306BTechmino\u5185\u3067\u4F7F\u3046\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u307E\u3059"
    },
    {"LPM",
        "linesperminute speed \u901F\u3055 \u65E9\u3055 \u306F\u3084\u3055 lpm l'pm",
        "term",
        "Lines per minute\\n\\t\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u901F\u3055\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059\\n\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066LPM\u306E\u8A08\u7B97\u65B9\u6CD5\u304C\u7570\u306A\u308A\u307E\u3059\\n\u4F8B\u3048\u3070\u30C6\u30C8\u30EA\u30B9\u30AA\u30F3\u30E9\u30A4\u30F3\u306E\u5834\u5408\u3001PPS\u3068\u3044\u3046\u5024\u304B\u3089LPM\u3092\u8A08\u7B97\u3057\u3066\u3044\u307E\u3059(1PPS=24LPM)\\n\u3053\u306E\u6642\u3001\u4E0B\u7A74\u6D88\u53BB\u304C\u7121\u8996\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u6587\u5B57\u901A\u308A\u306ELPM\u3068\u306F\u7570\u306A\u308A\u307E\u3059\\nTechmino\u5185\u3067\u306F\u3053\u306ELPM\u3092\u300CL'PM\u300D\u3068\u8868\u8A18\u3057\u3066\u3044\u307E\u3059",
    },
    {"PPS",
        "piecespersecond speed \u901F\u3055 \u65E9\u3055 \u306F\u3084\u3055 pps",
        "term",
        "Pieces per second\\n\\t\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u901F\u3055\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059",
    },
    {"BPM",
        "blocksperminute piecesperminute speed \u901F\u3055 \u65E9\u3055 \u306F\u3084\u3055 bpm ppm",
        "term",
        "Blocks per minute\\n\\t\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u901F\u3055\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059\\n\u97F3\u697D\u7528\u8A9E\u3068\u306E\u6DF7\u540C\u3092\u907F\u3051\u308B\u305F\u3081\u306BPPM\u3068\u547C\u3070\u308C\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059",
    },
    {"KPM",
        "keysperminute keypressesperminute \u901F\u3055 \u65E9\u3055 \u306F\u3084\u3055 \u5165\u529B kpm",
        "term",
        "Keypresses per minute\\n\\t\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u5165\u529B\u306E\u901F\u3055\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059",
    },
    {"KPP",
        "keysperpiece keypressesperpiece \u901F\u3055 \u65E9\u3055 \u306F\u3084\u3055 \u52B9\u7387 \u5165\u529B",
        "term",
        "Keypresses per piece\\n\\t\u30DF\u30CE\u64CD\u4F5C\u306E\u52B9\u7387\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059\\n\u6700\u9069\u5316\u3092\u7FD2\u5F97\u3059\u308B\u3053\u3068\u3067\u3053\u306E\u5024\u3092\u4E0B\u3052\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059",
    },
    {"APM",
        "attackperminute \u706B\u529B \u653B\u6483",
        "term",
        "Attack per minute\\n\\t\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u51FA\u3057\u305F\u706B\u529B\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059",
    },
    {"SPM",
        "linessentperminute \u706B\u529B \u653B\u6483",
        "term",
        "[lines] Sent per minute\\n\\t\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u653B\u6483\u529B\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059\\n\u3053\u3053\u3067\u306F\u76F8\u6BBA\u306B\u4F7F\u7528\u3057\u305F\u706B\u529B\u306F\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u305A\u3001\u76F8\u624B\u306E\u706B\u529B\u30B2\u30FC\u30B8\u306B\u9001\u3063\u305F\u706B\u529B\u3060\u3051\u304C\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u3059",
    },
    {"DPM",
        "digperminute defendperminute \u9632\u5FA1 \u706B\u529B \u76F8\u6BBA \u30B5\u30D0\u30A4\u30D0\u30EB \u751F\u5B58 \u6398\u308A",
        "term",
        "Dig(\u307E\u305F\u306FDefend) per minute\\n\\t\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u6398\u308A\u3001\u82E5\u3057\u304F\u306F\u9632\u5FA1\u529B(\u76F8\u6BBA\u706B\u529B+\u6398\u3063\u305FLine\u6570)\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059",
    },
    {"RPM",
        "receive jieshou \u53D7\u3051 \u5916\u3057 \u76F8\u6BBA\u5916\u3057",
        "term",
        "[lines] Receive per Minute\\n\\t\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u53D7\u3051\u305F\u653B\u6483\u91CF\u3092\u8A08\u308B\u6307\u6A19\u3067\u3059",
    },
    {"ADPM",
        "attackdigperminute vs",
        "term",
        "(Attack + Dig) per minute\\n\\t\u305D\u306E\u8A66\u5408\u3067\u5BFE\u6226\u8005\u9593\u306E\u30B9\u30AD\u30EB\u3092\u6BD4\u8F03\u3059\u308B\u305F\u3081\u306E\u6307\u6A19\u3067\u3059\\nTETR.IO\u306EVS\u30B9\u30B3\u30A2\u306F\u3053\u308C\u3068\u9055\u3044\u3001100(Attack+Dig)/s\u3067\u8A08\u7B97\u3057\u3066\u3044\u307E\u3059",
    },
    {"APL",
        "attackperline efficiency \u52B9\u7387 \u706B\u529B \u653B\u6483",
        "term",
        "Attack per line (cleared)\\n\\t\u3088\u304F\u300C\u52B9\u7387\u300D\u3068\u3044\u3046\u8A00\u8449\u3067\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\\n1Line\u5358\u4F4D\u306E\u706B\u529B\u3092\u7B97\u51FA\u3057\u3066\u3044\u308B\u5024\u3067\u3042\u308A\u3001\u3053\u3053\u3067\u306FTSS\u304C\u30C6\u30C8\u30EA\u30B9\u3084TSD\u3088\u308A\u3082\u52B9\u7387\u304C\u826F\u3044\u3068\u3055\u308C\u308B",
    },

    {"Single",
        "single 1 \u30B7\u30F3\u30B0\u30EB",
        "term",
        "1\u56DE\u30671Line\u6D88\u3059\u3053\u3068",
    },
    {"Double",
        "double 2 \u30C0\u30D6\u30EB",
        "term",
        "1\u56DE\u30672Line\u6D88\u3059\u3053\u3068",
    },
    {"Triple",
        "triple 3 \u30C8\u30EA\u30D7\u30EB",
        "term",
        "1\u56DE\u30673Line\u6D88\u3059\u3053\u3068",
    },
    {"Techrash",
        "techrash tetris 4 quad \u30AF\u30A2\u30C3\u30C9",
        "term",
        "*Techmino\u7528\u8A9E*\\n1\u56DE\u30674Line\u6D88\u3059\u3053\u3068",
    },
    {"Tetris",
        "tetris 4 quad \u30AF\u30A2\u30C3\u30C9",
        "term",
        "\u30B2\u30FC\u30E0\u306E\u540D\u79F0(\u5546\u6A19)\\n\u307E\u305F\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u306B\u304A\u3044\u30661\u56DE\u306B4Line\u6D88\u3059\u3053\u3068\u3092\u6307\u3059\u8A00\u8449\\n\\nTetra(\u30AE\u30EA\u30B7\u30E3\u8A9E\u3067\u300C4\u300D\u3092\u610F\u5473\u3059\u308B)\u3068Tennis(\u30C6\u30C8\u30EA\u30B9\u306E\u5236\u4F5C\u8005\u304C\u597D\u304D\u306A\u30B9\u30DD\u30FC\u30C4)\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u9020\u8A9E\\n\\n\u307E\u305F\u4EFB\u5929\u5802\u3068\u30BB\u30AC\u304C\u958B\u767A\u3057\u305F\u30C6\u30C8\u30EA\u30B9\u306FThe Tetris Company\u306E\u30E9\u30A4\u30BB\u30F3\u30B9\u767B\u9332\u3092\u53D7\u3051\u3066\u3044\u307E\u3059\u304C\u3001\u3053\u306E2\u793E\u304C\u30C6\u30C8\u30EA\u30B9\u305D\u306E\u3082\u306E\u306E\u8457\u4F5C\u6A29\u3092\u4FDD\u6709\u3057\u3066\u3044\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\\n\\n-- Alexey Pajitnov\u306B\u611F\u8B1D\u3092!",
    },
    {"All Clear",
        "pc perfectclear ac allclear \u30D1\u30D5\u30A7 \u30AA\u30FC\u30EB \u30D1\u30FC\u30D5\u30A7\u30AF\u30C8",
        "term",
        "Perfect Clear(PC\u3001\u30D1\u30D5\u30A7)\u3068\u3082\u8A00\u308F\u308C\u308B\\n\u76E4\u9762\u5185\u306B\u3042\u308B\u5168\u3066\u306E\u30DF\u30CE\u3092\u6D88\u53BB\u3059\u308B\u3053\u3068\\n\u660E\u3089\u304B\u306B\u3042\u308B\u306E\u306B\u898B\u9003\u3057\u305F\u5834\u5408\u3001\u300C\u4ECA\u30D1\u300D\u3068\u8A00\u308F\u308C\u308B\u3053\u3068\u304C\u3042\u308B(\u9006\u306B\u3053\u308C\u306B\u8A00\u3044\u8FD4\u3059\u30D5\u30EC\u30FC\u30BA\u3082\u5B58\u5728\u3059\u308B)",
    },
    {"HPC",
        "hc clear halfperfectclear \u30CF\u30FC\u30D5 \u30BB\u30DF",
        "term",
        "Techmino\u7528\u8A9E\\nHalf Perfect Clear\u306E\u7565\\n\u4E0B\u7A74\u4EE5\u5916\u306E\u30DF\u30CE\u3092\u5168\u3066\u6D88\u53BB\u3059\u308B\u3068HPC\u3068\u306A\u308A\u3001\u8EFD\u3044\u706B\u529B\u5F37\u5316\u304C\u884C\u308F\u308C\u308B\\n\\n\u4FD7\u306B\u8A00\u3046\u5B9F\u8CEA\u30D1\u30D5\u30A7",
    },

    {"Spin(\u56DE\u8EE2\u5165\u308C)",
        "spin \u56DE\u8EE2 \u30B9\u30D4\u30F3",
        "term",
        "\u4EFB\u610F\u306E\u30DF\u30CE\u3092\u56DE\u8EE2\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u3046\u3053\u3068\u306B\u3088\u308A\u5165\u308C\u308B\u3053\u3068\\n\u3053\u308C\u3092\u4F7F\u3046\u3053\u3068\u306B\u3088\u308A\u901A\u5E38\u3067\u306F\u7F6E\u3051\u306A\u3044\u5834\u6240\u306B\u3067\u3082\u7F6E\u304F\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\\n\u307E\u305F\u3053\u306E\u64CD\u4F5C\u306B\u3088\u308A\u706B\u529B\u3084\u30B9\u30B3\u30A2\u306B\u88DC\u6B63\u304C\u304B\u304B\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\\n\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066\u56DE\u8EE2\u30B7\u30B9\u30C6\u30E0\u304C\u7570\u306A\u308B\u5834\u5408\u304C\u3042\u308B",
    },
    {"Mini",
        "mini \u30DF\u30CB \u307F\u306B",
        "term",
        "\u30B2\u30FC\u30E0\u5074\u304C\u7C21\u5358\u3059\u304E\u308B\u3068\u5224\u65AD\u3057\u305Fspin\u306B\u9069\u7528\u3055\u308C\u308B\u30B7\u30B9\u30C6\u30E0\u3067\u3059\\n\u305D\u306E\u305F\u3081\u306B\u6614\u306E\u30B2\u30FC\u30E0\u3067\u306F\u300CEZ T-spin\u300D\u3068\u3082\u547C\u3070\u308C\u3066\u3044\u307E\u3057\u305F\\nmini\u306E\u4ED8\u3044\u305Fspin\u306F\u706B\u529B\u3084\u30B9\u30B3\u30A2\u30DC\u30FC\u30CA\u30B9\u304C\u901A\u5E38\u306Espin\u3088\u308A\u3082\u5C11\u306A\u304F\u306A\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\\n\\n\u57FA\u672C\u306F\u7D30\u304B\u3044\u4ED5\u69D8\u3092\u899A\u3048\u305A\u306Bmini\u306B\u306A\u308B\u5730\u5F62\u3060\u3051\u899A\u3048\u3066\u304A\u3051\u3070\u5927\u4E08\u592B\u3067\u3059",
    },
    {"All-Spin",
        "allspin \u30AA\u30FC\u30EB \u5168",
        "term",
        "\u5168\u3066\u306E\u30DF\u30CE\u306Espin\u306B\u706B\u529B\u3001\u30B9\u30B3\u30A2\u88DC\u6B63\u304C\u304B\u304B\u308B\u30EB\u30FC\u30EB\u306E\u3053\u3068(\u901A\u5E38\u30EB\u30FC\u30EB\u306FTspin\u306E\u307F)\\n\u307E\u305F\u7A00\u306B\u30EB\u30FC\u30EB\u3067\u306F\u306A\u304FAll-spin\u3068\u3044\u3046\u56DE\u8EE2\u6CD5\u5247\u3092\u6307\u3059\u3053\u3068\u3082\u3042\u308B",
    },
    {"T-Spin",
        "tspin \u30C6\u30A3 ts \u3075\u3093\u3069\u3057",
        "term",
        "T\u30DF\u30CE\u3092\u56DE\u8EE2\u5165\u308C(spin)\u3059\u308B\u3053\u3068\\n\\n\u6700\u8FD1\u306E\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u3067\u306F3\u30B3\u30FC\u30CA\u30FC\u30EB\u30FC\u30EB\u3092\u63A1\u7528\u3057\u3066\u3044\u308B\\n\u3053\u308C\u306F\u56DE\u8EE2\u5165\u308C\u3092\u3057\u305F\u6642\u306BT\u30DF\u30CE\u306E\u56DE\u8EE2\u8EF8\u3092\u4E2D\u5FC3\u3068\u3057\u3066\u659C\u30814\u30DE\u30B9\u306E\u51853\u30DE\u30B9\u4EE5\u4E0A\u304C\u57CB\u307E\u3063\u3066\u3044\u305F\u5834\u5408\u306BTspin\u3068\u3057\u3066\u5224\u65AD\u3059\u308B\u3068\u3044\u3046\u3082\u306E\u3067\u3042\u308B\\n\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066\u306F\u4E00\u90E8\u306ETspin\u3092mini\u6271\u3044\u3057\u3066\u3044\u308B",
    },
    {"TSS",
        "t1 tspinsingle \u30C6\u30A3 \u30B7\u30F3\u30B0\u30EB",
        "term",
        "T-Spin Single\\nTspin\u30671Line\u6D88\u53BB\u3059\u308B\u3053\u3068",
    },
    {"TSD",
        "t2 tspindouble \u30C6\u30A3 \u30C0\u30D6\u30EB",
        "term",
        "T-Spin Double\\nTspin\u30672Line\u6D88\u53BB\u3059\u308B\u3053\u3068",
    },
    {"TST",
        "t3 tspintriple \u30C6\u30A3 \u30C8\u30EA\u30D7\u30EB",
        "term",
        "T-Spin Triple\\nTspin\u30673Line\u6D88\u53BB\u3059\u308B\u3053\u3068",
    },
    {"MTSS",
        "minitspinsingle tsms tspinminisingle tsm mini 1 \u30B7\u30F3\u30B0\u30EB",
        "term",
        "Mini T-spin Single\\n\u901A\u79F0:T-spin Mini Single(TSMS)\\nTSS\u3060\u304Cmini\u5224\u5B9A\u306E\u3082\u306E\u306E\u3053\u3068\\n\\n\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066\u3069\u306ETSS\u304Cmini\u306A\u306E\u304B\u5224\u5B9A\u304C\u7570\u306A\u3063\u3066\u3044\u305F\u308A\u3001\u305D\u3082\u305D\u3082\u306A\u304B\u3063\u305F\u308A\u3059\u308B",
    },
    {"MTSD",
        "minitspindouble tsmd tspinminidouble tsm mini 2 \u30C0\u30D6\u30EB",
        "term",
        "Mini T-Spin Double\\n\u901A\u79F0:T-spin Mini Double(TSMD)\\nTSD\u3060\u304Cmini\u5224\u5B9A\u306E\u3082\u306E\u306E\u3053\u3068\\nMTSD\u306F\u4E00\u90E8\u306E\u30B2\u30FC\u30E0\u306B\u3057\u304B\u5B58\u5728\u305B\u305A\u3001\u767A\u751F\u3059\u308B\u5730\u5F62\u3082\u7570\u306A\u308B\u5834\u5408\u304C\u3042\u308B\\n\\n\u3055\u3089\u306B\u4E00\u90E8\u306E\u30C6\u30C8\u30EA\u30B9\u3067\u306FMTSD\u3092\u60F3\u5B9A\u3057\u3066\u304A\u3089\u305A\u6700\u60AA\u306E\u5834\u5408\u3001\u30D5\u30EA\u30FC\u30BA\u3084\u5F37\u5236\u7D42\u4E86\u3059\u308B",
    },
    {"O-Spin",
        "ospin o \u30AA\u30FC 2",
        "term",
        "O\u30DF\u30CE\u306F\u3069\u3093\u306A\u306B\u56DE\u8EE2\u3055\u305B\u3066\u3082\u5F62\u304C\u5909\u5316\u3057\u306A\u3044\u305F\u3081\u56DE\u8EE2\u5165\u308C\u304C\u4E0D\u53EF\u80FD\u3067\u3057\u305F(\u4E00\u90E8\u3067\u306F\u6BCE\u79D2500\uFF5E600\u56DE\u8EE2\u3055\u305B\u308B\u3053\u3068\u3067O\u30DF\u30CE\u304C\u71B1\u81A8\u5F35\u3057\u305F\u308A\u6EB6\u3051\u305F\u308A\u5909\u5F62\u3057\u305F\u308A\u3059\u308B\u3068\u3044\u3046\u5642\u304C\u3042\u308A\u307E\u3059)\\n\u305D\u306E\u305F\u3081\u30C6\u30C8\u30EA\u30B9\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u5185\u3067\u30DF\u30FC\u30E0\u306E\u3088\u3046\u306B\u6271\u308F\u308C\u3001\u30D5\u30A7\u30A4\u30AF\u30D3\u30C7\u30AA\u7B49\u3082\u4F5C\u6210\u3055\u308C\u307E\u3057\u305F\\n\\nXRS\u3068\u3044\u3046\u56DE\u8EE2\u6CD5\u5247\u3067\u306FO\u30DF\u30CE\u3092\u7279\u5B9A\u306E\u5730\u5F62\u3067\u56DE\u8EE2\u3055\u305B\u308B\u3068\u7A74\u306B\u30C6\u30EC\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u8A2D\u8A08\u3057\u3001\u305D\u308C\u3092Ospin\u3068\u3057\u3066\u3044\u307E\u3059\\n\u307E\u305FTRS\u3067\u306F\u540C\u69D8\u306B\u3059\u308B\u3053\u3068\u3067\u30C6\u30EC\u30DD\u30FC\u30C8\u3055\u305B\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u4ED6\u306E\u30DF\u30CE\u306E\u5F62\u306B\u5909\u5F62\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066Ospin\u3092\u5B9F\u73FE\u3057\u3066\u3044\u307E\u3059",
    },
    {"Rotation Systems(\u56DE\u8EE2\u30B7\u30B9\u30C6\u30E0\u3001\u56DE\u8EE2\u6CD5\u5247)",
        "wallkick rotationsystem \u56DE\u8EE2 \u58C1 \u6CD5\u5247",
        "term",
        "\u30DF\u30CE\u304C\u3069\u306E\u3088\u3046\u306B\u56DE\u8EE2\u3059\u308B\u304B\u3092\u6C7A\u5B9A\u3057\u3066\u3044\u308B\u30B7\u30B9\u30C6\u30E0\u306E\u3053\u3068\\n\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u306E\u5834\u5408\u3001\u30DF\u30CE\u306F\u7279\u5B9A\u306E\u56DE\u8EE2\u8EF8\u3092\u4E2D\u5FC3\u306B\u56DE\u8EE2\u3057\u3066\u3044\u308B(\u3082\u3061\u308D\u3093\u305D\u308C\u304C\u306A\u3044\u30B2\u30FC\u30E0\u3082\u3042\u308B)\\n\u305D\u3057\u3066\u56DE\u8EE2\u3055\u305B\u305F\u3068\u304D\u306B\u58C1\u3084\u65E2\u306B\u30DE\u30B9\u304C\u57CB\u307E\u3063\u3066\u3044\u308B\u5834\u6240\u306B\u30DF\u30CE\u304C\u91CD\u306A\u308B\u3068\u901A\u5E38\u300C\u58C1\u8E74\u308A\u300D\u3068\u3044\u3046\u51E6\u7406\u304C\u884C\u308F\u308C\u3001\u3042\u3089\u304B\u3058\u3081\u6C7A\u3081\u3089\u308C\u305F\u4F4D\u7F6E\u306B\u30BA\u30EC\u3001\u518D\u3073\u58C1\u8E74\u308A\u304C\u5FC5\u8981\u304B\u306E\u5224\u5B9A\u304C\u884C\u308F\u308C\u308B\\n\u3053\u308C\u3092\u7E70\u308A\u8FD4\u3057\u30DF\u30CE\u306F\u8A2D\u7F6E\u53EF\u80FD\u306A\u7A74\u306B\u79FB\u52D5\u3059\u308B\\n\u307E\u305F\u3053\u306E\u6642\u3001spin\u5224\u5B9A\u304C\u51FA\u308B\u5834\u5408\u304C\u3042\u308B",
    },
    {"\u65B9\u5411\u8868\u8A18",
        "direction 0r2l 02 20 rl lr \u8868\u8A18 \u30DF\u30C3\u30B7\u30E7\u30F3",
        "term",
        "SRS\u7CFB\u7D71\u306E\u56DE\u8EE2\u30B7\u30B9\u30C6\u30E0\u3067\u306F\u30DF\u30CE\u306E\u5411\u304D\u3092\u8A18\u8FF0\u3059\u308B\u8868\u8A18\u6CD5\u304C\u3042\u308B\\n\u300C0\u300D\u3084\u300C\u6B63\u306E\u5411\u304D\u300D\u306E\u5834\u5408\u306F\u51FA\u73FE\u3057\u305F\u6642\u3068\u540C\u3058\u5411\u304D\u3001\u300CR\u300D\u3084\u300C\u53F3\u300D\u3001\u300C1\u300D\u3068\u3044\u3046\u5834\u5408\u306F90\xB0\u53F3\u56DE\u8EE2(CW)\u3057\u305F\u5411\u304D\u3001\u300CL\u300D\u3084\u300C\u5DE6\u300D\u3001\u300C2\u300D\u3084\u300C\u9006\u306E\u5411\u304D\u300D\u306E\u5834\u5408\u306F180\xB0\u56DE\u8EE2\u3055\u305B\u305F\u5411\u304D\u3001\u300C3\u300D\u306E\u5834\u5408\u306F90\xB0\u5DE6\u56DE\u8EE2(CCW)\u3057\u305F\u5411\u304D\u3092\u8868\u3059\\n\\n\u4F8B\u3048\u30700->L\u306F\u5DE6\u56DE\u8EE21\u56DE\u30012->\u53F3\u306F\u9006\u306E\u5411\u304D\u306E\u72B6\u614B\u304B\u3089\u5DE6\u56DE\u8EE21\u56DE\u3068\u306A\u308B(\u3053\u308C\u306F\u56DE\u8EE2\u65B9\u5411\u3067\u306F\u306A\u304F\u30DF\u30CE\u306E\u5411\u304D\u3092\u8868\u3059\u8868\u8A18\u6CD5\u306A\u306E\u3067\u53F3\u56DE\u8EE2\u3067\u306F\u306A\u3044)\\n\u30AB\u30B9\u30BF\u30E0\u30E2\u30FC\u30C9\u306B\u3042\u308B\u30DF\u30C3\u30B7\u30E7\u30F3\u306F\u3053\u306E\u8868\u8A18\u3092\u4F7F\u3063\u3066\u3044\u308B\\n\\n\u300C->\u300D\u3084\u6570\u5B57\u4F7F\u3063\u305F\u8868\u8A18\u306F\u65E5\u672C\u3067\u3042\u307E\u308A\u4F7F\u308F\u308C\u306A\u3044",
    },
    {"ARS",
        "arikrotationsystem atarirotationsystem \u3042\u305F\u308A \u30A2\u30BF\u30EA \u3042\u308A\u304B \u30A2\u30EA\u30AB",
        "term",
        "\u3053\u308C\u306F\u4EE5\u4E0B\u306E2\u3064\u306E\u610F\u5473\u304C\u3042\u308A\u307E\u3059\\n\\nTGM\u306B\u3066\u63A1\u7528\u3055\u308C\u3066\u3044\u308BArika Rotation System\u306E\u3053\u3068\\n\\n\u56DE\u8EE2\u3057\u305F\u6642\u306B\u30DF\u30CE\u3092\u5DE6\u4E0A\u306B\u63C3\u3048\u308B\u3088\u3046\u306B\u56DE\u8EE2\u65B9\u5411\u3059\u308BAtari Rotation System\u306E\u3053\u3068",
    },
    {"ASC",
        "ascension \u30A2\u30B9\u30BB\u30F3\u30B7\u30E7\u30F3 \u30A2\u30BA\u30BB\u30F3\u30B7\u30E7\u30F3",
        "term",
        "\u30C6\u30C8\u30EA\u30B9\u30AF\u30ED\u30FC\u30F3\u300CAscension\u300D\u306B\u3066\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u56DE\u8EE2\u6CD5\u5247\\n\u5168\u3066\u306E\u30DF\u30CE\u306B\u540C\u30582\u3064\u306E\u30AD\u30C3\u30AF\u30C6\u30FC\u30D6\u30EB\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\\n\u30AD\u30C3\u30AF\u7BC4\u56F2\u306F\u53F3\u56DE\u8EE2\u3001\u5DE6\u56DE\u8EE2\u4E21\u65B9\u3067\xB12\u30DE\u30B9\u3068\u306A\u3063\u3066\u3044\u307E\u3059",
    },
    {"ASC+",
        "ascension ascplus \u30A2\u30B9\u30BB\u30F3\u30B7\u30E7\u30F3 \u30A2\u30BA\u30BB\u30F3\u30B7\u30E7\u30F3",
        "term",
        "ASC\u3092Techmino\u306E\u305F\u3081\u306B\u4FEE\u6B63\u3057\u305F\u3082\u306E\\n180\xB0\u56DE\u8EE2\u306E\u58C1\u8E74\u308A\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059",
    },
    {"BRS",
        "bulletproofsoftware \u30D0\u30EC\u30C3\u30C8",
        "term",
        "BPS rotation system\\nBullet-Proof Software\u793E\u306E\u30C6\u30C8\u30EA\u30B9\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u56DE\u8EE2\u6CD5\u5247",
    },
    {"BiRS",
        "biasrs biasrotationsystem",
        "term",
        "*Techmino\u7528\u8A9E*\\nBias Rotation System\\nXRS\u3068SRS\u3092\u57FA\u306B\u4F5C\u3089\u308C\u305FTechmino\u72EC\u81EA\u306E\u56DE\u8EE2\u6CD5\u5247\\n\u56DE\u8EE2\u6642\u306B\u53F3\u3084\u5DE6\u3001\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u3092\u5165\u529B\u3057\u3066\u3044\u308B\u3068\u305D\u306E\u65B9\u5411\u306B\u30DF\u30CE\u304C\u30BA\u30EC\u308B\u3088\u3046\u306B\u56DE\u8EE2\u306B\u88DC\u6B63\u304C\u304B\u3051\u3089\u308C\u307E\u3059\\n\u4E0B\u65B9\u5411\u306B\u88DC\u6B63\u304C\u304B\u304B\u3063\u3066\u3044\u308B\u3068\u304D\u306B\u56DE\u8EE2\u306B\u5931\u6557(\u65E2\u5B58\u306E\u30DE\u30B9\u3068\u91CD\u306A\u308B)\u3068\u4E0B\u65B9\u5411\u3078\u306E\u88DC\u6B63\u3092\u304B\u3051\u305A\u306B\u518D\u8A66\u884C\u3057\u307E\u3059\\n\u305D\u3057\u3066\u305D\u308C\u306B\u3082\u5931\u6557\u3057\u305F\u5834\u5408\u306F\u53F3\u3001\u307E\u305F\u306F\u5DE6\u306E\u88DC\u6B63\u3092\u304B\u3051\u305A\u306B\u518D\u8A66\u884C\u3057\u307E\u3059\\n\u305D\u308C\u306B\u3082\u5931\u6557\u3057\u305F\u5834\u5408\u306B\u306F\u56DE\u8EE2\u3055\u308C\u307E\u305B\u3093\\n\\nBiRS\u306FXRS\u306B\u6BD4\u3079\u3066\u30AD\u30C3\u30AF\u30C6\u30FC\u30D6\u30EB\u304C1\u3064\u306E\u305F\u3081\u899A\u3048\u3084\u3059\u304F\u3001\u3055\u3089\u306BSRS\u306E\u7279\u5FB4\u3067\u3042\u308B\u5730\u5F62\u306B\u6CBF\u3063\u305F\u58C1\u8D85\u3048\u7B49\u3082\u5099\u3048\u3066\u3044\u307E\u3059\\n\\n\u8FFD\u52A0\u4E8B\u9805:\u6700\u5F8C\u306E\u56DE\u8EE2\u88DC\u6B63\u3092\u8A66\u884C\u3059\u308B\u6642\u306E\u30EB\u30FC\u30EB\u3068\u3057\u3066\u79FB\u52D5\u3059\u308B\u30E6\u30FC\u30AF\u30EA\u30C3\u30C9\u8DDD\u96E2\u304C\u221A5\u3092\u8D85\u3048\u3066\u306F\u3044\u3051\u306A\u3044\u3001\u307E\u305F\u53F3\u307E\u305F\u306F\u5DE6\u306B\u88DC\u6B63\u304C\u304B\u304B\u3063\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u6700\u5F8C\u306E\u56DE\u8EE2\u88DC\u6B63\u306F\u3082\u3046\u4E00\u65B9\u306E\u65B9\u5411\u306B\u306F\u884C\u304B\u306A\u3044\u3068\u3044\u30462\u3064\u306E\u30EB\u30FC\u30EB\u304CBiRS\u306B\u3042\u308A\u307E\u3059",
    },
    {"C2RS",
        "c2rs cultris 2 \u30AB\u30EB\u30C8\u30EA\u30B9",
        "term",
        "Cultris II rotation system\\nCultris II\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u56DE\u8EE2\u6CD5\u5247\\n\u5168\u3066\u306E\u56DE\u8EE2\u3001\u5168\u3066\u306E\u30DF\u30CE\u306E\u30AD\u30C3\u30AF\u30C6\u30FC\u30D6\u30EB\u304C\u540C\u3058(\u30BA\u30EC\u65B9:\u5DE6\u3001\u53F3\u3001\u4E0B\u3001\u5DE6\u4E0B\u3001\u53F3\u4E0B\u3001\u5DE6\u306B2\u3001\u53F3\u306B2)\\n\u307E\u305F\u5DE6\u53F3\u306F\u5DE6\u304C\u512A\u5148\u3055\u308C\u308B\\n\\nTechmino\u3067\u306F\u3053\u306E\u56DE\u8EE2\u6CD5\u5247\u3092\u6539\u826F\u3057\u305FC2sym\u3068\u3044\u3046\u56DE\u8EE2\u6CD5\u5247\u304C\u3042\u308A\u3001\u305D\u3061\u3089\u306F\u5DE6\u53F3\u306E\u512A\u5148\u9806\u4F4D\u3092\u30DF\u30CE\u3068\u56DE\u8EE2\u306B\u3088\u3063\u3066\u6C7A\u5B9A\u3057\u3066\u3044\u308B",
    },
    {"C2sym",
        "cultris2 \u30AB\u30EB\u30C8\u30EA\u30B9 c2rs",
        "term",
        "C2RS\u3092\u6539\u826F\u3057\u305F\u56DE\u8EE2\u6CD5\u5247\\n\u30DF\u30CE\u3068\u56DE\u8EE2\u306B\u3088\u3063\u3066\u5DE6\u53F3\u306E\u512A\u5148\u9806\u4F4D\u3092\u5909\u3048\u3066\u3044\u307E\u3059",
    },
    {"DRS",
        "dtetrotationsystem dtet \u30C7\u30C6\u30C8 \u3067\u3066\u3068 \u30C7\u30A3\u30C6\u30C8 \u3067\u3043\u3066\u3068 ",
        "term",
        "DTET Rotation System\\nDTET\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u56DE\u8EE2\u6CD5\u5247",
    },
    {"NRS",
        "nintendorotationsystem \u4EFB\u5929\u5802 \u30CB\u30F3\u30C6\u30F3\u30C9\u30FC",
        "term",
        "Nintendo Rotation System\\n\u30D5\u30A1\u30DF\u30B3\u30F3\u3084\u30B2\u30FC\u30E0\u30DC\u30FC\u30A4\u6642\u4EE3\u306E\u30C6\u30C8\u30EA\u30B9\u306B\u4F7F\u7528\u3055\u308C\u305F\u56DE\u8EE2\u6CD5\u5247\\n\u30B2\u30FC\u30E0\u30DC\u30FC\u30A4\u7528\u306E\u5DE6\u624B\u7528\u3068\u30D5\u30A1\u30DF\u30B3\u30F3\u7528\u306E\u53F3\u624B\u7528\u306E2\u7A2E\u985E\u304C\u3042\u308A\u307E\u3059",
    },
    {"SRS",
        "superrotationsystem \u56DE\u8EE2",
        "term",
        "Super Rotation System\\n\u6700\u3082\u30DD\u30D4\u30E5\u30E9\u30FC\u306A\u56DE\u8EE2\u6CD5\u5247\u3067\u3042\u308A\u3001\u591A\u304F\u306E\u81EA\u4F5C\u56DE\u8EE2\u6CD5\u5247\u306E\u57FA\u790E\u306B\u3082\u306A\u3063\u3066\u3044\u308B\\n\u305D\u308C\u305E\u308C\u306E\u30DF\u30CE\u306B\u306F\u4E0A\u4E0B\u5DE6\u53F34\u65B9\u5411\u3042\u308A\u3001\u53F3\u56DE\u8EE2\u3001\u5DE6\u56DE\u8EE2\u306E2\u3064\u306E\u65B9\u5411\u306B\u56DE\u8EE2\u3067\u304D\u308B(\u3053\u306E\u56DE\u8EE2\u6CD5\u5247\u3067\u306F180\xB0\u306F\u5B58\u5728\u3057\u306A\u3044)\\n\u305D\u3057\u3066\u56DE\u8EE2\u3057\u305F\u6642\u306B\u30DF\u30CE\u304C\u65E2\u306B\u57CB\u3081\u3089\u308C\u3066\u3044\u308B\u30DE\u30B9\u3084\u58C1\u3001\u5E8A\u306B\u91CD\u306A\u3063\u305F\u5834\u5408\u3001\u4F4D\u7F6E\u30BA\u30EC\u304C\u767A\u751F\u3057\u5E8A\u3084\u58C1\u3092\u8E74\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059(\u901A\u79F0:\u58C1\u8E74\u308A)\\n\u30AD\u30C3\u30AF\u30C6\u30FC\u30D6\u30EB\u306E\u8A73\u7D30\u306FTetris wiki\u3084HardDrop\u306B\u3066\u8ABF\u3079\u3089\u308C\u307E\u3059",
    },
    {"SRS+",
        "srsplus superrotationsystemplus tetr",
        "term",
        "SRS\u3092180\xB0\u306B\u5BFE\u5FDC\u3055\u305B\u3001\u3055\u3089\u306B\u4E00\u90E8\u306E\u56DE\u8EE2\u306B\u5BFE\u79F0\u6027\u3092\u6301\u305F\u305B\u305F\u56DE\u8EE2\u6CD5\u5247\u3067\u3059",
    },
    {"TRS",
        "techminorotationsystem techmino",
        "term",
        "*Techmino\u7528\u8A9E*\\nTechmino Rotation System\\nSRS\u3092\u57FA\u306B\u3057\u305F\u56DE\u8EE2\u6CD5\u5247\\nS\u3068Z\u304C\u56DE\u8EE2\u3057\u306A\u3044\u5834\u5408\u3092\u4FEE\u6B63\u3057\u3001\u3044\u304F\u3064\u304B\u306E\u4FBF\u5229\u306A\u30AD\u30C3\u30AF\u30C6\u30FC\u30D6\u30EB\u304C\u3042\u308A\u307E\u3059\\n\\nTRS\u306FOspin\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059",
    },
    {"XRS",
        "xrs",
        "term",
        "X rotation system\\nTetris.gr\u306ET-EX\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u56DE\u8EE2\u6CD5\u5247\\n\u65B9\u5411\u3092\u5165\u529B\u3057\u3066\u3044\u308B\u3068\u5225\u306E\u30AD\u30C3\u30AF\u30C6\u30FC\u30D6\u30EB\u3092\u4F7F\u3048\u308B\u3068\u3044\u3046\u6A5F\u80FD\u3092\u5099\u3048\u3066\u304A\u308A\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u30DF\u30CE\u306E\u30BA\u30EC\u308B\u5148\u3092\u64CD\u4F5C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u308B",
    },

    {"Back to Back",
        "b2b btb backtoback \u30D0\u30C3\u30AF",
        "term",
        "\u7565\u79F0\u306FBtB(B2B)\\n\u4ED6\u306ELine\u6D88\u53BB\u3092\u631F\u307E\u305A\u306Bspin\u3084\u30C6\u30C8\u30EA\u30B9\u3092\u3059\u308B\u3053\u3068\\n\u706B\u529B\u3084\u30B9\u30B3\u30A2\u306B\u88DC\u6B63\u304C\u304B\u308B\\n\u30B3\u30F3\u30DC\u3068\u306F\u9055\u3044\u3001Line\u6D88\u53BB\u306B\u95A2\u308F\u3089\u306A\u3044\u30DF\u30CE\u3092\u7F6E\u3044\u3066\u3082BtB\u306B\u306F\u5F71\u97FF\u304C\u306A\u3044",
    },
    {"B2B2B",
        "b3b b2b btb backtoback \u30D0\u30C3\u30AF",
        "term",
        "*Techmino\u7528\u8A9E*\\nBack to Back to Back\u3001\u7565\u79F0\u306FB3B\\nBtB\u3092\u7D9A\u3051\u3066\u7DAD\u6301\u3057\u3001BtB\u30B2\u30FC\u30B8\u3092\u6E80\u30BF\u30F3\u306B\u3059\u308B\u3053\u3068\u3067B3B\u306B\u306A\u308A\u3001\u706B\u529B\u3084\u30B9\u30B3\u30A2\u306B\u66F4\u306B\u5F37\u529B\u306A\u88DC\u6B63\u304C\u304B\u304B\u308B",
    },
    {"Fin, Neo, Iso",
        "fin neo iso \u7279\u6B8A \u30D5\u30A3\u30F3 \u30CD\u30AA \u30A2\u30A4\u30A8\u30B9\u30AA\u30FC \u3075\u3043\u3093 \u306D\u304A \u3042\u3044\u3048\u3059\u304A\u30FC",
        "term",
        "Tspin\u306E\u30AD\u30C3\u30AF\u30C6\u30FC\u30D6\u30EB\u3068\u6210\u7ACB\u6761\u4EF6\u3092\u5229\u7528\u3057\u305F\u7279\u6B8A\u306ATspin\u3067\u3059\\n\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066\u306Fmini\u306B\u306A\u3063\u305F\u308A\u3068\u4FA1\u5024\u304C\u7570\u306A\u308A\u307E\u3059\u304C\u5B9F\u6226\u3067\u306F\u9650\u3089\u308C\u305F\u5834\u9762\u3067\u3057\u304B\u4F7F\u308F\u308C\u307E\u305B\u3093",
    },
    {"\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9",
        "modern \u30E2\u30C0\u30F3 \u73FE\u4EE3",
        "term",
        "\u201C\u30E2\u30C0\u30F3\u201C\u30C6\u30C8\u30EA\u30B9\u3084\u843D\u3061\u3082\u306E\u30D1\u30BA\u30EB\u30B2\u30FC\u30E0\u306E\u30B3\u30F3\u30BB\u30D7\u30C8\u306F\u66D6\u6627\u3067\u3059\\n\u4E00\u822C\u7684\u306B\u30C6\u30C8\u30EA\u30B9\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u306B\u6E96\u3058\u3066\u4F5C\u3089\u308C\u305F\u30C6\u30C8\u30EA\u30B9(\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9)\u306B\u4F3C\u3066\u3044\u308B\u843D\u3061\u3082\u306E\u30D1\u30BA\u30EB\u30B2\u30FC\u30E0\u306F\u30E2\u30C0\u30F3(\u73FE\u4EE3\u7684)\u30B2\u30FC\u30E0\u3068\u8A00\u308F\u308C\u307E\u3059\\n\u3053\u308C\u306B\u5171\u901A\u3059\u308B\u30EB\u30FC\u30EB\u3092\u4EE5\u4E0B\u306B\u6319\u3052\u307E\u3059\u304C\u3053\u308C\u306F\u53B3\u5BC6\u306A\u5B9A\u7FA9\u3067\u306F\u3042\u308A\u307E\u305B\u3093\\n\\n1.\u53EF\u8996\u90E8\u5206\u306E\u76E4\u9762\u306F\u6A2A10\xD7\u7E2620\u3001\u3055\u3089\u306B\u3053\u306E\u4E0A\u306B\u898B\u3048\u306A\u3044\u76E4\u9762\u304C\u3042\u308B\u3053\u3068\u304C\u591A\u3044\\n2.\u30DF\u30CE\u306F\u76E4\u9762\u53EF\u8996\u90E8\u5206\u306E\u4E2D\u592E\u4E0A\u90E8\u306B\u751F\u6210\u3055\u308C\u3001\u305D\u308C\u305E\u308C\u4E00\u8CAB\u3057\u305F\u65B9\u5411\u3068\u8272\u3092\u6301\u3063\u3066\u3044\u307E\u3059\\n3.7-Bag\u3084His\u306E\u3088\u3046\u306A\u9069\u5F53\u306A\u751F\u6210\u6A5F\u69CB\u304C\u3042\u308B\\n4.\u9069\u5F53\u306A\u56DE\u8EE2\u30B7\u30B9\u30C6\u30E0\u3092\u6301\u3061\u3001\u6700\u4F4E\u3067\u3082\u5DE6\u53F3\u3001\u4E21\u56DE\u8EE2\u304C\u53EF\u80FD\\n5.\u9069\u5F53\u306A\u8A2D\u7F6E\u30B7\u30B9\u30C6\u30E0\u304C\u3042\u308B\\n6.\u9069\u5F53\u306A\u30C8\u30C3\u30D7\u30A2\u30A6\u30C8\u6761\u4EF6\u304C\u3042\u308B\\n7.\u8907\u6570\u500B(\u901A\u5E383\uFF5E6\u500B)\u306E\u30CD\u30AF\u30B9\u30C8\u304C\u8868\u793A\u3055\u308C\u3066\u304A\u308A\u3001\u30CD\u30AF\u30B9\u30C8\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30DF\u30CE\u304C\u51FA\u73FE\u6642\u306B\u306E\u65B9\u5411\u3068\u4E00\u81F4\u3057\u3066\u3044\u308B\\n8.\u30DB\u30FC\u30EB\u30C9\u304C\u3042\u308B\\n9.\u30DF\u30CE\u306E\u51FA\u73FE\u6642\u9593\u3084Line\u6D88\u53BB\u6642\u9593\u304C\u3042\u308B\u5834\u5408\u3001\u901A\u5E38IRS\u3084IHS\u304C\u3042\u308B\\n10.\u6B63\u78BA\u304B\u3064\u7D20\u65E9\u3044\u6A2A\u79FB\u52D5\u306E\u305F\u3081\u306EDAS\u30B7\u30B9\u30C6\u30E0\u304C\u3042\u308B",
    },
    {"\u30C6\u30C8\u30ED\u30DF\u30CE\u306E\u5F62",
        "shape structure form tetromino tetrimino \u30DF\u30CE \u30C6\u30C8\u30ED\u30DF\u30CE \u30C6\u30C8\u30EA\u30DF\u30CE \u30D6\u30ED\u30C3\u30AF \u30D4\u30FC\u30B9 \u5F62",
        "term",
        "\u901A\u5E38\u306E\u30C6\u30C8\u30EA\u30B9\u306E\u5834\u5408\u3001\u4F7F\u7528\u3059\u308B\u30DF\u30CE\u306F\u5168\u3066\u30C6\u30C8\u30ED\u30DF\u30CE\u3001\u3064\u307E\u308A4\u3064\u306E\u6B63\u65B9\u5F62\u304C\u6700\u4F4E\u3067\u30821\u8FBA\u305D\u308C\u305E\u308C\u5171\u6709\u3059\u308B\u3088\u3046\u306B\u4E26\u3079\u305F\u30D6\u30ED\u30C3\u30AF\u3067\u3059\\n\u56DE\u8EE2\u3057\u3066\u5408\u540C\u306B\u306A\u308B\u3053\u3068\u306F\u8A31\u3057\u3001\u53CD\u8EE2\u3067\u5408\u540C\u306B\u306A\u308B\u3053\u3068\u306F\u8A31\u3055\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u5168\u90E8\u30677\u7A2E\u985E\u306E\u30C6\u30C8\u30ED\u30DF\u30CE\u304C\u3067\u304D\u307E\u3059\\n\u3053\u308C\u3089\u306E\u30C6\u30C8\u30ED\u30DF\u30CE\u306F\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306B\u4F3C\u3066\u3044\u308B\u3053\u3068\u304B\u3089\u305D\u308C\u305E\u308CZ,S,J,L,T,O,I\u3068\u540D\u524D\u304C\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B\\n\u8A73\u3057\u304F\u306F\u300C\u5F62\u3068\u540D\u524D\u300D\u306E\u9805\u76EE\u3092\u53C2\u7167",
    },
    {"\u30C6\u30C8\u30ED\u30DF\u30CE\u306E\u8272",
        "colour hue tint tetromino tetrimino \u30DF\u30CE \u30C6\u30C8\u30ED\u30DF\u30CE \u30C6\u30C8\u30EA\u30DF\u30CE \u30D6\u30ED\u30C3\u30AF \u30D4\u30FC\u30B9 \u8272",
        "term",
        "\u6700\u8FD1\u306E\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u3067\u306F\u305D\u308C\u305E\u308C\u306E\u30C6\u30C8\u30ED\u30DF\u30CE\u306B\u540C\u3058\u914D\u8272\u3092\u3057\u3066\u3044\u307E\u3059\\n\\nZ-\u8D64\u3001S-\u7DD1\u3001J-\u9752\u3001L-\u30AA\u30EC\u30F3\u30B8\u3001T-\u7D2B\u3001O-\u9EC4\u8272\u3001I-\u6C34\u8272\\n\\nTechmino\u3082\u4F8B\u306B\u3082\u308C\u305A\u3053\u306E\u914D\u8272\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059",
    },
    {"IRS",
        "initialrotationsystem \u5148\u884C \u64CD\u4F5C",
        "term",
        "Initial Rotation System\\n\u30DF\u30CE\u51FA\u73FE\u524D\u306B\u56DE\u8EE2\u3092\u5165\u529B\u3057\u7D9A\u3051\u308B\u3053\u3068\u3067\u30DF\u30CE\u304C\u56DE\u8EE2\u3057\u305F\u72B6\u614B\u3067\u51FA\u73FE\u3059\u308B\u30B7\u30B9\u30C6\u30E0\\n\u30DF\u30CE\u306E\u91CD\u306A\u308A\u306B\u3088\u308B\u6B7B\u4EA1\u5224\u5B9A\u3092\u56DE\u907F\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD",
    },
    {"IHS",
        "initialholdsystem \u5148\u884C \u64CD\u4F5C",
        "term",
        "Initial Hold System\\n\u30DF\u30CE\u51FA\u73FE\u524D\u306B\u30DB\u30FC\u30EB\u30C9\u3092\u5165\u529B\u3057\u7D9A\u3051\u308B\u3053\u3068\u3067\u30DB\u30FC\u30EB\u30C9\u3092\u884C\u3063\u305F\u5F8C\u306E\u30DF\u30CE\u304C\u51FA\u73FE\u3059\u308B\u30B7\u30B9\u30C6\u30E0\\n\u30DF\u30CE\u306E\u91CD\u306A\u308A\u306B\u3088\u308B\u6B7B\u4EA1\u5224\u5B9A\u3092\u56DE\u907F\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD",
    },
    {"IMS",
        "initialmovesystem \u5148\u884C \u64CD\u4F5C",
        "term",
        "*Techmino\u7528\u8A9E*\\nInitial Movement System\\n\u30DF\u30CE\u51FA\u73FE\u524D\u306B\u6A2A\u79FB\u52D5\u3092\u5165\u529B\u3057\u7D9A\u3051\u308B\u3053\u3068\u3067\u30DF\u30CE\u304C1\u3064\u6A2A\u306B\u30BA\u30EC\u305F\u72B6\u614B\u3067\u51FA\u73FE\u3059\u308B\u30B7\u30B9\u30C6\u30E0\\n\u30DF\u30CE\u306E\u91CD\u306A\u308A\u306B\u3088\u308B\u6B7B\u4EA1\u5224\u5B9A\u3092\u56DE\u907F\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\\n\\n\u88DC\u8DB3:\u6A2A\u79FB\u52D5\u3092\u5165\u529B\u3057\u59CB\u3081\u3066\u304B\u3089\u30DF\u30CE\u51FA\u73FE\u307E\u3067\u306E\u6642\u9593\u304CDAS\u6642\u9593\u3088\u308A\u3082\u9577\u304F\u306A\u3051\u308C\u3070\u3044\u3051\u307E\u305B\u3093",
    },
    {"Next(\u30CD\u30AF\u30B9\u30C8)",
        "nextpreview next \u30CD\u30AF \u30CD\u30AF\u30B9\u30C8 \u306D\u304F \u306D\u304F\u3059\u3068 \u6B21 \u4E0A\u9054 \u7DF4\u7FD2",
        "term",
        "\u6B21\u306B\u6765\u308B\u30DF\u30CE\u3092\u3044\u304F\u3064\u304B\u8868\u793A\u3057\u3066\u3044\u308B\u90E8\u5206\u306E\u3053\u3068\\n\u30CD\u30AF\u30B9\u30C8\u3092\u51E6\u7406\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u524D\u3082\u3063\u3066\u30DF\u30CE\u306E\u7F6E\u304F\u5834\u6240\u3092\u6C7A\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u30C6\u30C8\u30EA\u30B9\u3092\u4E0A\u624B\u304F\u306A\u308B\u306B\u306F\u5FC5\u9808\u6280\u8853\u3067\u3059",
    },
    {"Hold(\u30DB\u30FC\u30EB\u30C9)",
        "hold \u30DB\u30FC\u30EB\u30C9 \u4E00\u6642 \u4FDD\u7559",
        "term",
        "\u305D\u306E\u6642\u70B9\u3067\u64CD\u4F5C\u3057\u3066\u3044\u308B\u30DF\u30CE\u304C\u30DB\u30FC\u30EB\u30C9\u90E8\u5206\u306B\u79FB\u52D5\u3057\u3001\u4EE3\u308F\u308A\u306B\u5143\u3005\u30DB\u30FC\u30EB\u30C9\u90E8\u5206\u306B\u3042\u3063\u305F\u30DF\u30CE\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059(\u3082\u3057\u30DB\u30FC\u30EB\u30C9\u90E8\u5206\u306B\u30DF\u30CE\u304C\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30CD\u30AF\u30B9\u30C8\u306E\u30DF\u30CE\u304C\u64CD\u4F5C\u30DF\u30CE\u306B\u306A\u308A\u307E\u3059)\\n\u3053\u306E\u64CD\u4F5C\u306F\u901A\u5E38\u7E70\u308A\u8FD4\u3059\u3053\u3068\u306F\u3067\u304D\u305A\u3001\u4E00\u5EA6\u30DB\u30FC\u30EB\u30C9\u90E8\u5206\u306B\u79FB\u52D5\u3057\u305F\u30DF\u30CE\u306F\u518D\u3073\u30DB\u30FC\u30EB\u30C9\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\\n\\n*Techmino\u7528\u8A9E*\\nTechmino\u306B\u306F\u300C\u305D\u306E\u5834\u30DB\u30FC\u30EB\u30C9\u300D\u3068\u3044\u3046\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\\n\u3053\u306E\u6A5F\u80FD\u3092\u6709\u52B9\u306B\u3057\u3066\u3044\u305F\u5834\u5408\u3001\u30DB\u30FC\u30EB\u30C9\u304B\u3089\u53D6\u308A\u51FA\u3055\u308C\u308B\u30DF\u30CE\u306F\u5F93\u6765\u306E\u51FA\u73FE\u4F4D\u7F6E\u3067\u306F\u306A\u304F\u3001\u305D\u306E\u6642\u30DF\u30CE\u304C\u3042\u308B\u4F4D\u7F6E\u306B\u51FA\u73FE\u3057\u307E\u3059",
    },
    {"Swap",
        "hold \u30DB\u30FC\u30EB\u30C9 \u4E00\u6642 \u4FDD\u7559 \u30B9\u30EF\u30C3\u30D7",
        "term",
        "\u30DB\u30FC\u30EB\u30C9\u3068\u4F3C\u305F\u6A5F\u80FD\u3067\u3059\u304C\u3001swap\u306F\u30CD\u30AF\u30B9\u30C8\u3068\u30DF\u30CE\u3092\u5165\u308C\u66FF\u3048\u307E\u3059\\n\u3064\u307E\u308A\u3053\u306E\u64CD\u4F5C\u3092\u3057\u305F\u5834\u5408\u3001swap\u3057\u305F\u30DF\u30CE\u306F\u6B21\u306E\u64CD\u4F5C\u30DF\u30CE\u306B\u306A\u308A\u307E\u3059\\n\\n\u3053\u306E\u64CD\u4F5C\u306F\u901A\u5E38\u7E70\u308A\u8FD4\u3059\u3053\u3068\u306F\u3067\u304D\u305A\u3001\u4E00\u5EA6swap\u3057\u305F\u30DF\u30CE\u306F\u518D\u3073swap\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093",
    },
    {"Deepdrop(\u30C7\u30A3\u30FC\u30D7\u30C9\u30ED\u30C3\u30D7)",
        "shenjiang \u30C7\u30A3\u30FC\u30D7 deep",
        "term",
        "*Techmino\u7528\u8A9E*\\n\u3053\u306E\u6A5F\u80FD\u3092\u6709\u52B9\u306B\u3057\u305F\u5834\u5408\u3001\u5E8A\u3092\u8CAB\u901A\u3057\u3066\u56DE\u8EE2\u5165\u308C\u306E\u3088\u3046\u306B\u30C6\u30EC\u30DD\u30FC\u30C8\u3057\u307E\u3059\\n\u30DF\u30CE\u3068\u540C\u3058\u5F62\u306E\u7A74\u304C\u3042\u308A\u3001\u305D\u306E\u7A74\u304C\u57CB\u307E\u3063\u3066\u3044\u308B\u6642\u306B\u4E0B\u307E\u3067\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u3057\u3001\u3082\u3046\u4E00\u5EA6\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u3092\u5165\u529B\u3059\u308B\u3053\u3068\u3067\u57CB\u307E\u3063\u3066\u3044\u308B\u7A74\u306B\u30C6\u30EC\u30DD\u30FC\u30C8\u3057\u307E\u3059\\n\u3053\u306E\u6A5F\u80FD\u306FAI\u304C\u56DE\u8EE2\u6CD5\u5247\u306E\u9055\u3044\u3092\u7121\u8996\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u305F\u3081\u7279\u306BAI\u306B\u6709\u52B9\u306A\u6A5F\u80FD\u3067\u3059",
    },
    {"Misdrop(\u7F6E\u304D\u30DF\u30B9)",
        "md misdrop \u30DF\u30B9 \u7F6E\u304D",
        "term",
        "\u610F\u56F3\u3057\u306A\u3044\u5834\u6240\u306B\u30DF\u30CE\u3092\u7F6E\u3044\u3066\u3057\u307E\u3046\u3053\u3068\\n\\n\u65E5\u672C\u3067\u306F\u3001\u30C6\u30C8\u30EA\u30B9\u3059\u308B\u305F\u3081\u306EI\u30DF\u30CE\u304C\u7E26\u306E\u307E\u307E1\u3064\u6A2A\u306B\u30BA\u30EC\u308B\u3053\u3068\u3092\u300C\u3042\u308B\u304E\u30DF\u30B9\u300D\u3068\u8A00\u3063\u305F\u308A\u3059\u308B",
    },
    {"Mishold(\u30DB\u30FC\u30EB\u30C9\u30DF\u30B9)",
        "mh mishold \u30DB\u30FC\u30EB\u30C9 \u30DF\u30B9",
        "term",
        "\u610F\u56F3\u3057\u306A\u3044\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u30DB\u30FC\u30EB\u30C9\u3057\u3066\u3057\u307E\u3046\u3053\u3068\\n\u7F6E\u304D\u30DF\u30B9\u306B\u3064\u306A\u304C\u3063\u305F\u308A\u30D1\u30D5\u30A7\u3092\u9003\u3059\u539F\u56E0\u306B\u306A\u308A\u307E\u3059",
    },
    {"sub(\u5207\u308A)",
        "sub \u5207\u308A \u30BF\u30A4\u30E0 \u79D2 \u5206",
        "term",
        "sub<\u6642\u9593>(<\u6642\u9593>\u5207\u308A)\u306F\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u306A\u3069\u306E\u30BF\u30A4\u30E0\u304C<\u6642\u9593>\u672A\u6E80\u3067\u3042\u308B\u3053\u3068\u3092\u610F\u5473\u3059\u308B\\nsub\u306E\u5834\u5408\u306F\u6642\u9593\u306E\u5358\u4F4D\u304C\u7701\u304B\u308C\u308B\u3053\u3068\u304C\u591A\u3044\\n\u4F8B\u3048\u3070\u3001\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u306E\u5834\u5408\u306Fsub30(30\u79D2\u5207\u308A)\u30011000Line\u306E\u5834\u5408\u306Fsub15(15\u5206\u5207\u308A)\u3068\u8868\u3059",
    },
    {"Digging(\u6398\u308A)",
        "downstacking ds \u6398\u308A \u5800\u308A dig \u30C0\u30A6\u30F3",
        "term",
        "\u76E4\u9762\u306E\u4E0B\u306B\u3042\u308B\u4E0B\u7A74\u306A\u3069\u3092\u6D88\u3057\u3066\u3044\u304F\u3053\u3068\\n\u300C\u5800\u308A\u300D\u3067\u306F\u306A\u304F\u3001\u300C\u6398\u308A\u300D",
    },
	{"Downstack",
        "downstacking down ds \u6398\u308A dig \u30C0\u30A6\u30F3 upstack up ud \u7A4D\u307F stack",
        "term",
        "\u5927\u304D\u304F\u898B\u305F\u6642\u306B\u5730\u5F62\u3092\u4E0B\u3052\u308B\u7A4D\u307F\u65B9\u306E\u3053\u3068\\n\u6398\u308A\u306F\u3053\u308C\u306E1\u7A2E\u3067\u3042\u308B\\n\u5BFE\u7FA9\u8A9E\u3068\u3057\u3066Upstack\u304C\u3042\u308B\\n\\n1\u5DE1\u6BCE\u306B2Line\u6D88\u53BB\u3092\u3059\u308B\u5834\u5408\u3001\u76E4\u9762\u5185\u306F1\u5DE1\u306B\u3064\u304D8\u3064\u30D6\u30ED\u30C3\u30AF\u304C\u5897\u3048\u3066\u3044\u304F\\n\u3064\u307E\u308A\u6BCE\u5DE1TSD\u3092\u3059\u308B\u3068\u706B\u529B\u304C\u9001\u308C\u308B\u4E0A\u306B\u30EA\u30BD\u30FC\u30B9\u304C\u6E9C\u307E\u3063\u3066\u3044\u304F\u306E\u3067\u3042\u308B\u3002",
    },
	{"\u524A\u308A",
        "\u524A\u308A \u6574\u5730",
        "term",
        "\u4E3B\u306B\u6574\u5730\u3092\u76EE\u7684\u3068\u3057\u30661\uFF5E3Line\u6D88\u53BB\u3092\u3059\u308B\u3053\u3068\\n\u7121\u99C4\u306A\u524A\u308A\u3082\u3042\u308B\u304C\u5FC5\u8981\u306A\u524A\u308A\u3082\u4E16\u306E\u4E2D\u306B\u306F\u5B58\u5728\u3059\u308B",
    },
    {"Donation(\u30C9\u30CD\u30A4\u30C8)",
        "donate \u30C9\u30CD\u30A4\u30C8 \u7A7A\u4E2D",
        "term",
        "\u7A74\u3092\u4E00\u65E6\u585E\u3044\u3067Tspin\u306E\u5730\u5F62\u3092\u4F5C\u308B\u3053\u3068\\n\u7279\u306BTspin\u306E\u5F8C\u306B\u585E\u3044\u3060\u7A74\u304C\u7A7A\u304F\u5F62\u72B6\u3068\u306A\u308B\u3082\u306E",
    },
    {"\u2018Debt\u2019",
        "qianzhai debt owe",
        "term",
        "\u4E2D\u56FD\u306E\u30C6\u30C8\u30EA\u30B9\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3067\u4F7F\u308F\u308C\u308B\u7528\u8A9E(\u6B20\u503A\u3068\u547C\u3070\u308C\u3066\u3044\u308B)\\n\\n\u7279\u5B9A\u306E\u5730\u5F62\u3092\u5B8C\u6210\u3055\u305B\u306A\u3044\u3068\u307E\u3068\u3082\u306A\u653B\u6483(Tspin\u3084\u30C6\u30C8\u30EA\u30B9)\u304C\u3067\u304D\u306A\u3044\u72B6\u6CC1\u3084\u5730\u5F62\u3092\u8868\u3059\u7528\u8A9E\\n\u7AEF\u7684\u306B\u8A00\u3048\u3070TST\u30BF\u30EF\u30FC\u3084\u30AD\u30F3\u30B0\u30AF\u30EA\u30E0\u30BE\u30F3\u306E\u3088\u3046\u306A\u5927\u578B\u30C6\u30F3\u30D7\u30EC\u3092\u7D44\u307F\u7D42\u308F\u308B\u307E\u3067\u306E\u9699\u306E\u3053\u3068\u3092\u6307\u3059\\n\u5927\u578B\u30C6\u30F3\u30D7\u30EC\u3092\u5B9F\u8DF5\u3067\u3059\u308B\u5834\u5408\u306B\u306F\u51DD\u8996\u7B49\u3067\u5B89\u5168\u306A\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u884C\u308F\u306A\u3044\u3068\u4E0D\u5229\u306A\u72B6\u6CC1\u306B\u306A\u308A\u307E\u3059",
    },
	{"\u8B0E\u30C6\u30C8",
        "\u30AF\u30A4\u30BA quiz \u8B0E \u4E0A\u9054 \u7DF4\u7FD2",
        "term",
        "\u7279\u5B9A\u306E\u72B6\u6CC1\u3068\u304A\u984C\u304C\u4E0E\u3048\u3089\u308C\u3001\u305D\u308C\u3092\u6E80\u305F\u3059\u3088\u3046\u306A\u7B54\u3048\u3092\u63A2\u3059\u8A70\u5C06\u68CB\u307F\u305F\u3044\u306A\u3082\u306E\\n\u8B0E\u30C6\u30C8\u304C\u307E\u3068\u3081\u3089\u308C\u305F\u30B5\u30A4\u30C8\u3082\u3042\u308B",
    },
	{"\u3066\u3068\u307C",
        "\u52DF\u96C6 \u4E0A\u9054 \u7DF4\u7FD2 tetobo",
        "term",
        "\u30C6\u30C8\u30EA\u30B9\u52DF\u96C6\u306E\u7565\\nTwitter\u3084Discord\u4E0A\u3067\u5BFE\u6226\u76F8\u624B\u3092\u52DF\u308B\u6642\u306B\u4F7F\u3046\u8A00\u8449\\nTwitter\u3067\u306F\u3066\u3068\u307C\u3092RT\u3057\u3066\u304F\u308C\u308Bbot\u304C\u5B58\u5728\u3059\u308B",
    },
	{"\u30C6\u30C8\u8B5C\u30B3\u30FC\u30C9",
        "\u958B\u767A \u30C6\u30C8\u8B5C \u8B5C\u9762 \u30B3\u30FC\u30C9",
        "term",
        "\u30C6\u30C8\u8B5CURL\u306E\u300Cv115@\uFF5E\u300D\u4EE5\u964D\u306E\u90E8\u5206\u306E\u3053\u3068\\n\u3053\u308C\u306B\u306F\u30C6\u30C8\u8B5C\u5730\u5F62\u3084\u30B3\u30E1\u30F3\u30C8\u7B49\u306E\u60C5\u5831\u304C\u53CE\u3081\u3089\u308C\u3066\u3044\u308B\\n\u300Cv115@\u300D\u306E\u90E8\u5206\u306F\u300Cm115@\u300D\u3060\u3063\u305F\u308A\u300Cv095@\u300D\u3060\u3063\u305F\u308A\u3059\u308B\\n\u8A73\u3057\u304F\u306Fnewjade\u6C0F\u304C\u4F5C\u6210\u3057\u305F\u300C\u30C6\u30C8\u8B5Cv115\u306E\u30C7\u30FC\u30BF\u69CB\u9020\u300D\u3068\u3044\u3046\u30B9\u30E9\u30A4\u30C9\u53C2\u7167",
	"https://docs.google.com/presentation/d/1P5xt0vPGuxSb9hbRW6hvQFYKFoIccfNTJkWTdjtyigc/edit#slide=id.p",
    },
    {"\u5730\u529B",
        "\u5B9F\u529B \u4E0A\u9054",
        "term",
        "\u3042\u3089\u3086\u308B\u5834\u9762\u306B\u5BFE\u5FDC\u3067\u304D\u308B\u7DCF\u5408\u7684\u306A\u80FD\u529B\u306E\u3053\u3068\\n\u8981\u306F\u30C6\u30C8\u30EA\u30B9\u306E\u5B9F\u529B\\n\\n\u5B9F\u969B\u306B\u306F\u901F\u3055\u3084\u898B\u3048\u308B\u624B\u3001\u51DD\u8996\u7B49\u306E\u6839\u672C\u7684\u306A\u80FD\u529B\u306E\u7DCF\u79F0\u3068\u3057\u3066\u4F7F\u308F\u308C\u308B\u3053\u3068\u304C\u591A\u3044",
    },
	{"\u30D1\u30EA\u30C6\u30A3",
        "\u958B\u767A \u30C6\u30C8\u8B5C \u8B5C\u9762 \u7814\u7A76 \u7DF4\u7FD2",
        "term",
        "\u5730\u5F62\u3092\u7279\u5B9A\u306E\u6CD5\u5247\u306B\u5F93\u3063\u30662\u8272\u4EE5\u4E0A\u3067\u5857\u308A\u5206\u3051\u305F\u6642\u306E\u6027\u8CEA\u306E\u3053\u3068\\n\u4ECA\u307E\u3067\u306F\u4E3B\u306B\u5E02\u677E\u30D1\u30EA\u30C6\u30A3\u3084\u7E26\u30D1\u30EA\u30C6\u30A3\u3067\u30D1\u30D5\u30A7\u304C\u53D6\u308C\u308B\u6761\u4EF6\u3092\u7D5E\u308A\u8FBC\u307F\u3060\u3051\u3060\u3063\u305F\u304C\u3001\u6700\u8FD1\u3067\u306F\u7814\u7A76\u304C\u9032\u307F\u30A2\u30C3\u30D7\u30B9\u30BF\u30C3\u30AF\u6642\u306B\u5B89\u5B9A\u3057\u3066\u706B\u529B\u304C\u51FA\u305B\u308B\u5730\u5F62\u3092\u7DAD\u6301\u3059\u308B\u6761\u4EF6\u306A\u3069\u304C\u89E3\u660E\u3055\u308C\u3066\u3044\u308B",
    },
    {"Attack & Defend",
        "attacking defending \u653B\u6483 \u9632\u5FA1 \u653B\u9632 \u30A2\u30BF\u30C3\u30AF \u30C7\u30A3\u30D5\u30A7\u30F3\u30B9 \u706B\u529B \u76F8\u6BBA",
        "term",
        "attack:\u76F8\u624B\u306E\u706B\u529B\u30B2\u30FC\u30B8\u306B\u5230\u9054\u3057\u305F\u653B\u6483\u306E\u3053\u3068\\ndefend:\u76F8\u624B\u304B\u3089\u9001\u3089\u308C\u3066\u304D\u305F\u706B\u529B\u306B\u81EA\u5206\u306E\u706B\u529B\u3092\u5F53\u3066\u308B\u3053\u3068(\u65E5\u672C\u3067\u306F\u300C\u76F8\u6BBA\u300D\u3068\u547C\u3070\u308C\u308B)\\n\u30AB\u30A6\u30F3\u30BF\u30FC:\u76F8\u624B\u304B\u3089\u306E\u706B\u529B\u3092\u53D7\u3051\u308B(\u76F8\u6BBA\u5916\u3057)\u3001\u307E\u305F\u306F\u76F8\u624B\u306E\u706B\u529B\u3092\u76F8\u6BBA\u3057\u3066\u304B\u3089\u76F8\u624B\u306B\u653B\u6483\u3092\u9001\u308A\u8FD4\u3059\u3053\u3068\\n\u307B\u3068\u3093\u3069\u306E\u30B2\u30FC\u30E0\u3067\u306F1:1\u3067\u76F8\u6BBA\u304C\u8A08\u7B97\u3055\u308C\u307E\u3059\\n\u3064\u307E\u308A\u76F8\u624B\u304C\u706B\u529B4\u3067\u653B\u6483\u3057\u3066\u304D\u305F\u6642\u306B\u81EA\u5206\u304C\u30C6\u30C8\u30EA\u30B9\u7B49\u3067\u706B\u529B4\u3092\u51FA\u3057\u305F\u5834\u5408\u30014-4=0 \u3067\u5B8C\u5168\u76F8\u6BBA\u3068\u306A\u308A\u307E\u3059",
    },
    {"Combo(\u30B3\u30F3\u30DC)",
        "ren combo \u308C\u3093 \u30EC\u30F3 \u3053\u3093\u307C \u30B3\u30F3\u30DC \u9023",
        "term",
        "\u65E5\u672C\u3067\u306F\u300Cren\u300D\u3068\u3082\u8A00\u3046\\n\u9023\u7D9A\u3057\u3066Lien\u6D88\u53BB\u3092\u884C\u3046\u3053\u3068\\n1\u56DE\u76EE\u306ELine\u6D88\u53BB\u30920ren\u76EE\u30012\u56DE\u76EE\u30921ren\u76EE\u30013\u56DE\u76EE\u30922ren\u76EE\u3068\u3057\u3066\u30AB\u30A6\u30F3\u30C8\u30A2\u30C3\u30D7\u3057\u3066\u3044\u304F\\n\u3082\u3061\u308D\u3093Line\u6D88\u53BB\u305B\u305A\u306B\u30DF\u30CE\u3092\u7F6E\u3044\u305F\u3089ren\u6570\u306F\u30EA\u30BB\u30C3\u30C8\u306B\u306A\u308B",
    },
    {"Spike(\u30B9\u30D1\u30A4\u30AF)",
        "spike \u30B9\u30D1\u30A4\u30AF \u3059\u3071\u3044\u304F \u307E\u3068\u3081",
        "term",
        "\u77ED\u6642\u9593\u3067\u9AD8\u706B\u529B\u3092\u51FA\u3059\u3053\u3068\\n\u305F\u3060\u3057\u30CD\u30C3\u30C8\u306E\u30E9\u30B0\u306B\u3088\u3063\u3066\u5927\u91CF\u306E\u706B\u529B\u304C\u884C\u304D\u6765\u3059\u308B\u3053\u3068\u3092\u300C\u30E9\u30B0\u30B9\u30D1\u30A4\u30AF\u300D\u3068\u547C\u3076\u3053\u3068\u304C\u3042\u308B\u304C\u53B3\u5BC6\u306B\u306F\u30B9\u30D1\u30A4\u30AF\u3067\u306F\u306A\u3044\\nTechmino\u3068TETR.IO\u306B\u306F\u30B9\u30D1\u30A4\u30AF\u30AB\u30A6\u30F3\u30BF\u30FC\u304C\u3042\u308A\u3001\u3053\u308C\u306B\u3088\u3063\u3066\u77ED\u6642\u9593\u3067\u3069\u308C\u3060\u3051\u9AD8\u706B\u529B\u3092\u51FA\u3057\u305F\u304B\u304C\u308F\u304B\u308B",
    },
    {"Side well(\u7AEF\u958B\u3051\u3001\u7AEF\u7A7A\u3051)",
        "sidewell \u7AEF \u958B\u3051 \u7A7A\u3051",
        "term",
        "\u7AEF\u3092\u4EFB\u610F\u306E\u5E45\u958B\u3051\u3066\u7A4D\u3080\u7A4D\u307F\u65B9\\n\u3064\u307E\u308A\u7AEF\u958B\u30511\u5217\u306F\u30C6\u30C8\u30EA\u30B9\u7A4D\u307F\u306B\u306A\u308A\u307E\u3059\\n\u7AEF\u958B\u30512\uFF5E4\u5217\u306Fren\u5730\u5F62\u306B\u306A\u308A\u307E\u3059\\n\\n\u7AEF\u958B\u3051\u306F\u5E45\u3092\u5E83\u3052\u308B\u7A0B\u3001\u77ED\u6642\u9593\u3067\u7A4D\u307F\u4E0A\u3052\u3089\u308C\u307E\u3059\u304C\u305D\u306E\u5206\u76F8\u624B\u304B\u3089\u306E\u653B\u6483\u304C\u7C21\u5358\u306B\u523A\u3055\u308A\u307E\u3059\\n\u305D\u306E\u305F\u3081\u4E0A\u7D1A\u8005\u304C\u7AEFren\u7B49\u3092\u3059\u308B\u5834\u5408\u306F\u76F8\u624B\u306B\u9699\u304C\u3042\u308B\u304B\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u7D44\u307F\u59CB\u3081\u307E\u3059",
    },
    {"Side 1-wide(\u7AEF\u958B\u30511\u5217\u3001\u7AEF\u7A7A\u30511\u5217)",
        "s1w side1wide sidewelltetris \u7AEF 1 \u7A7A\u3051 \u958B\u3051 \u30C6\u30C8\u30EA\u30B9",
        "term",
        "\u3064\u307E\u308A\u7AEF\u3092\u958B\u3051\u3066\u30C6\u30C8\u30EA\u30B9\u7A4D\u307F\u3092\u3059\u308B\u3053\u3068\\n\u6700\u3082\u4F1D\u7D71\u7684\u306A\u7A4D\u307F\u65B9\\n\u6700\u3082\u7C21\u5358\u306B\u7A4D\u3081\u3001\u7C21\u5358\u306B\u706B\u529B\u3092\u9001\u308C\u308B\\n\u305F\u3060\u3057\u653B\u6483\u306E\u5E45\u304C\u72ED\u3044(\u30C6\u30C8\u30EA\u30B9\u304B\u30C9\u30CD\u30A4\u30C8Tspin\u3050\u3089\u3044)\u306E\u3067\u4E0A\u306B\u884C\u304F\u307B\u3069\u3042\u307E\u308A\u597D\u307E\u308C\u306A\u3044",
    },
    {"Side 2-wide(\u7AEF\u958B\u30512\u5217\u3001\u7AEF\u7A7A\u30512\u5217)",
        "s2w side2wide \u7AEF 2 \u7A7A\u3051 \u958B\u3051 ren combo \u30EC\u30F3 \u308C\u3093 \u30B3\u30F3\u30DC \u521D\u5FC3\u8005 \u4E0B\u7D1A\u8005",
        "term",
        "\u7AEF\u306B2\u5217\u5E45\u3092\u6301\u305F\u305B\u3066\u7A4D\u3080\u7A4D\u307F\u65B9\\n\u7A4D\u307F\u3084\u3059\u304Fren\u306B\u3088\u3063\u3066\u7C21\u5358\u306B\u706B\u529B\u304C\u51FA\u305B\u308B\u306E\u3067\u521D\u5FC3\u8005\u306B\u304A\u3059\u3059\u3081\\n\u4E0A\u306B\u884C\u304F\u307B\u3069ren\u6570\u3092\u7A3C\u304E\u3065\u3089\u3044\u3053\u3068\u304B\u3089\u3042\u307E\u308A\u4F7F\u308F\u308C\u306A\u3044",
    },
    {"Side 3-wide(\u7AEF\u958B\u30513\u5217\u3001\u7AEF\u7A7A\u30513\u5217)",
        "s3w side3wide \u7AEF 3 \u7A7A\u3051 \u958B\u3051 ren combo \u30EC\u30F3 \u308C\u3093 \u30B3\u30F3\u30DC",
        "term",
        "\u7AEF\u306B3\u5217\u5E45\u3092\u6301\u305F\u305B\u3066\u7A4D\u3080\u7A4D\u307F\u65B9\\n2\u5217\u958B\u3051\u3088\u308A\u3082ren\u6570\u3092\u7A3C\u304E\u3084\u3059\u3044\u304C\u30012\u5217\u958B\u3051\u3088\u308A\u3082ren\u304C\u9014\u5207\u308C\u3084\u3059\u3044",
    },
    {"Side 4-wide(\u7AEF\u958B\u30514\u5217\u3001\u7AEF\u7A7A\u30514\u5217)",
        "s4w side4wide \u7AEF 4 \u7A7A\u3051 \u958B\u3051 ren combo \u30EC\u30F3 \u308C\u3093 \u30B3\u30F3\u30DC",
        "term",
        "\u7AEF\u306B4\u5217\u5E45\u3092\u6301\u305F\u305B\u3066\u7A4D\u3080\u7A4D\u307F\u65B9\\nren\u5730\u5F62\u3092\u4F5C\u308B\u6642\u306B\u3088\u304F\u4F7F\u308F\u308C\u308B\\n\u7A4D\u3080\u5E45\u304C\u72ED\u3044\u306E\u3067\u901F\u304F\u7A4D\u307F\u4E0A\u3052\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u4E0A\u624B\u304F\u3044\u3063\u305F\u5834\u5408\u306B\u306Fren\u6570\u3092\u5927\u304D\u304F\u7A3C\u3050\u3053\u3068\u304C\u3067\u304D\u308B\\n\u305F\u3060\u3057ren\u3092\u7E4B\u3052\u308B\u306E\u306F\u5C11\u3057\u96E3\u3057\u304F\u3001\u307E\u305F\u5730\u5F62\u304C\u9AD8\u304F\u306A\u308B\u306E\u304C\u65E9\u3044\u306E\u3067\u6CB9\u65AD\u3057\u3066\u3044\u308B\u3068\u7C21\u5358\u306B\u523A\u3055\u308B",
    },
    {"Center 1-wide(\u4E2D\u958B\u30511\u5217\u3001\u4E2D\u7A7A\u30511\u5217)",
        "c1w center1wide centerwelltetris \u4E2D 1 \u7A7A\u3051 \u958B\u3051 \u30C6\u30C8\u30EA\u30B9",
        "term",
        "\u3064\u307E\u308A\u771F\u3093\u4E2D\u3092\u958B\u3051\u3066\u30C6\u30C8\u30EA\u30B9\u7A4D\u307F\u3092\u3059\u308B\u3053\u3068\\n\u653B\u6483\u306E\u5E45\u304C\u5E83\u304F\u3001\u307E\u305F\u7C21\u5358\u306B\u653B\u6483\u3092\u7D44\u307F\u7ACB\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u305F\u3081\u5BFE\u6226\u3067\u597D\u307E\u308C\u308B",
    },
    {"Center 2-wide(\u4E2D\u958B\u30512\u5217\u3001\u4E2D\u7A7A\u30512\u5217)",
        "c2w center2wide \u4E2D 2 \u7A7A\u3051 \u958B\u3051 ren combo \u30EC\u30F3 \u308C\u3093 \u30B3\u30F3\u30DC",
        "term",
        "\u771F\u3093\u4E2D\u306B2\u5217\u306E\u5E45\u3092\u6301\u305F\u305B\u3066\u7A4D\u3080\u7A4D\u307F\u65B9\\nT\u30DF\u30CE\u304C\u9060\u3044\u6642\u306BTspin\u3092\u4F5C\u308B\u3068\u306A\u308A\u3084\u3059\u3044\u304C\u610F\u56F3\u7684\u306B\u4F7F\u308F\u308C\u308B\u3053\u3068\u306F\u5C11\u306A\u3044",
    },
    {"Center 3-wide(\u4E2D\u958B\u30513\u5217\u3001\u4E2D\u7A7A\u30513\u5217)",
        "c3w center3wide \u4E2D 3 \u7A7A\u3051 \u958B\u3051 ren combo \u30EC\u30F3 \u308C\u3093 \u30B3\u30F3\u30DC",
        "term",
        "\u771F\u3093\u4E2D\u306B3\u5217\u306E\u5E45\u3092\u6301\u305F\u305B\u3066\u7A4D\u3080\u7A4D\u307F\u65B9\\nSTSD\u3084STMB-\u30B1\u30A4\u30D6\u3001TST\u30BF\u30EF\u30FC\u7B49\u30C6\u30F3\u30D7\u30EC\u3092\u7D44\u307F\u3084\u3059\u3044\u5E45\u3067\u306F\u3042\u308B\u304C\u7CBE\u300510\u6BB5\u3050\u3089\u3044\u3057\u304B\u7A4D\u307E\u308C\u306A\u3044",
    },
    {"Center 4-wide(\u4E2D\u958B\u30514\u5217\u3001\u4E2D\u7A7A\u30514\u5217)",
        "c4w center4wide \u4E2D 4 \u7A7A\u3051 \u958B\u3051 ren combo \u30EC\u30F3 \u308C\u3093 \u30B3\u30F3\u30DC",
        "term",
        "\u771F\u3093\u4E2D\u306B4\u5217\u306E\u5E45\u3092\u6301\u305F\u305B\u3066\u7A4D\u3080\u7A4D\u307F\u65B9\\nren\u6570\u3092\u7A3C\u304E\u3084\u3059\u304F\u3001\u76F8\u624B\u304B\u308920\u6BB5\u4EE5\u4E0A\u306E\u653B\u6483\u3092\u53D7\u3051\u306A\u3044\u3068\u51FA\u73FE\u30DF\u30CE\u306E\u4F4D\u7F6E\u306B\u30D6\u30ED\u30C3\u30AF\u304C\u91CD\u306A\u3089\u306A\u3044\u306E\u3067ren\u3092\u72D9\u3046\u5834\u5408\u306B\u3088\u304F\u4F7F\u308F\u308C\u308B\\nren\u306E\u8ABF\u6574\u304C\u5F37\u3044\u30B2\u30FC\u30E0\u3060\u3068\u5ACC\u308F\u308C\u3084\u3059\u3044",
    },
    {"Residual(\u7A2E)",
        "res \u7A2E residual c4w s4w \u7AEF \u4E2D ren combo \u308C\u3093 \u30EC\u30F3 \u3053\u3093\u307C \u30B3\u30F3\u30DC",
        "term",
        "\u7AEF\u958B\u3051\u3084\u4E2D\u958B\u3051\u3092\u3057\u305F\u6642\u306B\u5E45\u3092\u6301\u305F\u305B\u305F\u90E8\u5206\u306B\u3042\u308B\u30D6\u30ED\u30C3\u30AF\u306E\u6570\u306E\u3053\u3068\\n\u7279\u306B4\u5217ren\u306E\u6642\u306B\u4F7F\u308F\u308C\u308B\\n\u3088\u304F\u4F7F\u308F\u308C\u308B\u7A2E\u6570\u306F\u7A2E3\u3001\u307E\u305F\u306F\u7A2E6\u3060\u304C\u7A2E3n(n:1\u4EE5\u4E0A\u306E\u6574\u6570)\u306A\u3089\u7406\u8AD6\u4E0A\u591A\u304F\u306Eren\u6570\u3092\u7A3C\u3052\u308B\\n\u307E\u305F3n\u3058\u3083\u306A\u304F\u3066\u3082\u7A2E2\u306A\u3069\u306F1\u30DF\u30CELine\u6D88\u53BB\u305B\u305A\u306B\u7F6E\u304F\u3053\u3068\u3067\u7A2E6\u306B\u306A\u3063\u305F\u308A\u3059\u308B\\n\\n\u7A2E3\u306E\u7279\u5FB4:\u6D88\u3057\u65B9\u306E\u7A2E\u985E\u304C\u5C11\u306A\u3044\u306E\u3067\u7C21\u5358\u306B\u7FD2\u5F97\u3067\u304D\u3001\u7A4D\u307F\u306B\u4F7F\u3046\u30D6\u30ED\u30C3\u30AF\u6570\u304C\u591A\u304F\u306A\u308B\u306E\u3067\u901F\u304F\u7A4D\u307F\u4E0A\u3052\u3089\u308C\u308B\u304C\u7A2E6\u7B49\u3088\u308A\u3082\u7E4B\u3052\u3089\u308C\u306A\u3044\u30D1\u30BF\u30FC\u30F3\u304C\u591A\u3044\\n\u7A2E6\u306E\u7279\u5FB4:\u6D88\u3057\u65B9\u306E\u7A2E\u985E\u304C\u591A\u3044\u306E\u3067\u96E3\u3057\u3044\u3067\u3059\u304C\u5B89\u5B9A\u3057\u3066ren\u304C\u3064\u306A\u3052\u3084\u3059\u304F\u3001\u9014\u4E2D\u3067TSS\u3092\u52A0\u3048\u3089\u308C\u308B\u305F\u3081\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066\u306F\u975E\u5E38\u306B\u5F37\u529B\u306A\u653B\u6483\u306B\u306A\u308A\u307E\u3059",
    },
    {"6\u20133 Stacking(63\u7A4D\u307F)",
        "63stacking six-three sixthree 6 3 \u7A4D\u307F \u521D\u5FC3\u8005 \u4E0B\u7D1A\u8005 40 \u30B9\u30D7\u30EA\u30F3\u30C8",
        "term",
        "\u5DE6\u5074\u306B\u5E456\u3001\u53F3\u5074\u306B\u5E453\u3067\u7A4D\u3080\u7A4D\u307F\u65B9\\n\u6700\u9069\u5316\u3092\u3042\u308B\u7A0B\u5EA6\u7FD2\u5F97\u3057\u3066\u3044\u308C\u3070\u6A2A2\u5165\u529B\u304C\u5C11\u306A\u304F\u306A\u308B\u306E\u3067KPP\u304C\u5C11\u306A\u304F\u306A\u308A\u3001\u7A4D\u307F\u306B\u4F7F\u3046I\u30DF\u30CE\u306E\u5272\u5408\u3092\u4E0B\u3052\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u306E\u3067\u3088\u308A\u52B9\u7387\u3088\u304F\u30C6\u30C8\u30EA\u30B9\u3092\u6483\u3064\u3053\u3068\u304C\u3067\u304D\u307E\u3059\\n\u7279\u306B\u30B9\u30D7\u30EA\u30F3\u30C8(40Line)\u3067\u4F7F\u308F\u308C\u308B\u7A4D\u307F\u65B9\u3067\u3059\\n\u3057\u304B\u3057\u7AEF\u958B\u3051(90\u7A4D\u307F\u300109\u7A4D\u307F)\u3068\u6BD4\u3079\u7A4D\u3081\u308B\u5E45\u304C\u72ED\u3044\u306E\u3067\u5C11\u3057\u7DF4\u7FD2\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059",
    },
    {"Freestyle(\u30D5\u30EA\u30FC\u30B9\u30BF\u30A4\u30EB)",
        "ziyou \u30D5\u30EA\u30FC",
        "term",
        "\u4E3B\u306B20TSD\u3067\u4F7F\u308F\u308C\u308B\u7528\u8A9E\\nLST\u7B49\u306E\u30EB\u30FC\u30D7\u3067\u304D\u308B\u30C6\u30F3\u30D7\u30EC\u3092\u4F7F\u308F\u305A\u306B20TSD\u3092\u5B8C\u8D70\u3059\u308B\u3053\u3068\u3092\u6307\u3057\u307E\u3059\\nLST\u7B49\u306E\u30C6\u30F3\u30D7\u30EC\u3092\u4F7F\u308F\u306A\u3044\u5206\u96E3\u6613\u5EA6\u306F\u9AD8\u3044\u304C\u30D7\u30EC\u30A4\u30E4\u30FC\u306ETspin\u30B9\u30AD\u30EB\u3092\u898B\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059",
    },
    {"Topping out(\u30C8\u30C3\u30D7\u30A2\u30A6\u30C8)",
        "die death topout toppingout \u30C8\u30C3\u30D7 \u6B7B \u523A",
        "term",
        "\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u306E\u6B7B\u4EA1\u5224\u5B9A\u306F3\u3064\u3042\u308A\u3001\u3069\u308C\u304B1\u3064\u3092\u6E80\u305F\u3059\u3068\u30B2\u30FC\u30E0\u30AA\u30FC\u30D0\u30FC\u3068\u306A\u308B\\n\\n1.\u30D6\u30ED\u30C3\u30AF\u30A2\u30A6\u30C8:\u51FA\u73FE\u3057\u305F\u30DF\u30CE\u304C\u76E4\u9762\u4E0A\u306B\u3042\u308B\u30D6\u30ED\u30C3\u30AF\u3068\u91CD\u306A\u308B\\n2:\u30ED\u30C3\u30AF\u30A2\u30A6\u30C8:\u81F4\u6B7BLine\u3088\u308A\u3082\u4E0A\u306B\u30D6\u30ED\u30C3\u30AF\u3092\u7F6E\u304F\\n3.\u30C8\u30C3\u30D7\u30A2\u30A6\u30C8:\u305B\u308A\u4E0A\u304C\u308A\u306A\u3069\u306B\u3088\u308A\u5730\u5F62\u306E\u9AD8\u3055\u304C40\u3092\u8D85\u3048\u308B\\n\\nTechmino\u306E\u5834\u5408\u306F\u30D6\u30ED\u30C3\u30AF\u30A2\u30A6\u30C8\u306E\u5224\u5B9A\u3057\u304B\u884C\u3063\u3066\u304A\u3089\u305A\u3001\u30ED\u30C3\u30AF\u30A2\u30A6\u30C8\u3068\u30C8\u30C3\u30D7\u30A2\u30A6\u30C8\u306F\u306A\u3044",
    },
    {"Buffer zone",
        "above super invisible disappear \u7336\u4E88 \u76E4\u9762 \u4E0A\u90E8",
        "term",
        "\u901A\u5E38\u3001\u76E4\u9762\u306F\u7E2620\u6BB5\u3060\u304C\u5B9F\u969B\u306B\u306F21\u6BB5\u76EE\u4EE5\u4E0A\u304C\u5B58\u5728\u3057\u300121\u6BB5\u76EE\u304B\u308940\u6BB5\u524D\u5F8C\u307E\u3067\u3092Buffer Zone\u3068\u3044\u3046(\u65E5\u672C\u3067\u306F\u3042\u307E\u308A\u4F7F\u308F\u308C\u306A\u3044)\\n\u901A\u5E38\u306F40\u6BB5\u307E\u3067\u3067\u5341\u5206\u306A\u306E\u3060\u304C\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066\u306F\u8DB3\u308A\u306A\u3044\u5834\u5408\u304C\u3042\u308B\\n\u8A73\u3057\u304F\u306F\u300CVanish zone\u300D\u53C2\u7167",
    },
    {"Vanish zone",
        "disappear gone cut die \u7336\u4E88 \u76E4\u9762 \u4E0A\u90E8 \u6B7B \u30D0\u30B0 \u7121\u9650",
        "term",
        "Buffer zone\u3088\u308A\u3082\u4E0A\u306E\u9818\u57DF\u3092\u6307\u3059\\n\u901A\u5E38\u306FVanish zone\u306B\u5230\u9054\u3067\u304D\u306A\u3044\u304C\u958B\u767A\u8005\u306E\u8A2D\u8A08\u30DF\u30B9\u306B\u3088\u3063\u3066\u5230\u9054\u3067\u304D\u308B\u30B2\u30FC\u30E0\u304C\u3044\u304F\u3064\u304B\u3042\u308B\\n\u305D\u3057\u3066\u3053\u306E\u9818\u57DF\u306B\u4FB5\u5165\u3059\u308B\u3068\u4E00\u822C\u7684\u306B\u306F\u5F37\u5236\u7D42\u4E86\u306B\u306A\u308B\u304C\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066\u306F\u7570\u306A\u308B\u632F\u308B\u821E\u3044\u3092\u3059\u308B\\n\u4F8B\u3048\u3070\u3077\u3088\u3077\u3088\u30C6\u30C8\u30EA\u30B9\u3067\u306FBuffer zone\u304C43\u6BB5\u5FC5\u8981\u3060\u304C\u5341\u5206\u306B\u78BA\u4FDD\u3055\u308C\u3066\u3044\u306A\u3044\u305F\u3081Line\u6D88\u53BB\u6642\u306B\u6700\u4E0A\u6BB5\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u7D9A\u3051\u308B\u30D0\u30B0\u304C\u3042\u308A\u307E\u3059(\u5177\u4F53\u7684\u306A\u6D3B\u7528\u65B9\u6CD5\u306F\u5730\u7403\u5100\u30DC\u30BF\u30F3\u306E\u30EA\u30F3\u30AF\u3092\u3054\u89A7\u304F\u3060\u3055\u3044)\\n\u307E\u305FJstris\u306EVanish zone\u306F22\u6BB5\u4EE5\u4E0A\u306E\u9818\u57DF\u3068\u306A\u3063\u3066\u304A\u308A\u300121\u6BB5\u3088\u308A\u3082\u4E0A\u306E\u30D6\u30ED\u30C3\u30AF\u306F\u6D88\u6EC5\u3057\u307E\u3059",
        "https://youtu.be/z4WtWISkrdU",
    },
    {"Falling speed(\u843D\u4E0B\u901F\u5EA6)",
        "fallingspeed gravity \u843D\u4E0B \u91CD\u529B 20 g",
        "term",
        "1\u30D5\u30EC\u30FC\u30E0(\u901A\u5E38\u306F60fps)\u306B\u4F55\u6BB5\u81EA\u7531\u843D\u4E0B\u3059\u308B\u304B\u3092\u8A08\u308B\u6307\u6A19\\n\u5358\u4F4D\u306F\u300CG\u300D\\nG\u306F\u901A\u5E38\u6642\u306B\u306F\u5927\u304D\u3059\u304E\u308B\u5358\u4F4D\u3067\u3042\u308A\u3001\u4F8B\u3048\u3070\u30DE\u30E9\u30BD\u30F3\u306ELv.1\u306F1/60G\u306E\u843D\u4E0B\u901F\u5EA6\u30671G\u306FLv.13\u76F8\u5F53\u306B\u306A\u308A\u307E\u3059\\n\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u306E\u6700\u9AD8\u843D\u4E0B\u901F\u5EA6\u306F20G\u3067\u3053\u308C\u306F\u76E4\u9762\u306E\u9AD8\u3055\u304C20\u6BB5\u306A\u3053\u3068\u304B\u3089\u6765\u3066\u3044\u307E\u3059\\n\u3057\u304B\u3057\u5B9F\u969B\u306B\u306F20G\u3068\u8868\u8A18\u3055\u308C\u3066\u3044\u3066\u3082\u7121\u9650\u306A\u3053\u3068\u304C\u591A\u304F\u3001\u76E4\u9762\u306E\u9AD8\u3055\u304C21\u6BB5\u4EE5\u4E0A\u3067\u3082\u51FA\u73FE\u3057\u305F\u77AC\u9593\u306B\u30DF\u30CE\u304C\u4E00\u756A\u4E0B\u306B\u843D\u3061\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u308B\\n\u8A73\u3057\u304F\u306F\u300C20G\u300D\u306E\u9805\u76EE\u53C2\u7167\\nTechmino\u3067\u306E\u843D\u4E0B\u901F\u5EA6\u306F1\u30D6\u30ED\u30C3\u30AF\u843D\u3061\u308B\u306E\u306B\u5FC5\u8981\u306A\u30D5\u30EC\u30FC\u30E0\u6570\u3067\u8868\u73FE\u3055\u308C\u307E\u3059\\n\u4F8B\u3048\u3070\u843D\u4E0B\u901F\u5EA660\u306E\u5834\u5408\u30011\u79D2\u9593\u306B1\u30DE\u30B9\u4E0B\u306B\u843D\u3061\u307E\u3059(\u30B2\u30FC\u30E0\u304C\u30C7\u30D5\u30A9\u30EB\u30C860fps\u3067\u52D5\u4F5C\u3057\u3066\u3044\u308B\u305F\u3081)",
    },
    {"20G",
        "gravity instant \u77AC\u9593 \u843D\u4E0B \u91CD\u529B 20 g",
        "term",
        "\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u306E\u6700\u9AD8\u843D\u4E0B\u901F\u5EA6\\n20G\u30E2\u30FC\u30C9\u3067\u306F\u5B9F\u969B\u306B20G\u3067\u52D5\u3044\u3066\u3044\u308B\u308F\u3051\u3067\u306A\u304F\u3001\u30DF\u30CE\u304C\u4E00\u756A\u4E0B\u306B\u51FA\u73FE\u3059\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u308B\\n\u3053\u308C\u306B\u3088\u3063\u3066\u30DF\u30CE\u304C\u6BB5\u5DEE\u3084\u58C1\u3092\u767B\u308C\u306A\u3044\u3053\u3068\u304C\u3042\u308B\\n\u5358\u4F4D\u300CG\u300D\u306F\u300CFalling speed(\u843D\u4E0B\u901F\u5EA6)\u300D\u306E\u9805\u76EE\u53C2\u7167",
    },
    {"Lockdown Delay(\u8A2D\u7F6E\u6642\u9593)",
        "lockdelay lockdowndelay lockdowntimer \u8A2D\u7F6E \u30ED\u30C3\u30AF \u63A5\u7740 \u30C7\u30A3\u30EC\u30A4 \u9045\u5EF6 \u6642\u9593",
        "term",
        "\u30DF\u30CE\u304C\u5730\u9762\u306B\u63A5\u3057\u3066\u304B\u3089\u5B8C\u5168\u306B\u8A2D\u7F6E\u3059\u308B\u307E\u3067\u306E\u6642\u9593\u306E\u3053\u3068\\n\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u3067\u306F\u8A2D\u7F6E\u6642\u9593\u304C\u6BD4\u8F03\u7684\u7DE9\u304F\u3001\u3055\u3089\u306B\u79FB\u52D5\u3084\u56DE\u8EE2\u306B\u3088\u3063\u3066\u8A2D\u7F6E\u6642\u9593\u3092\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u308B\u3053\u3068\u304C\u591A\u3044\\n\u307B\u3068\u3093\u3069\u306E\u30B2\u30FC\u30E0\u3067\u306F\u6700\u592715\u56DE\u307E\u3067\u8A2D\u7F6E\u6642\u9593\u3092\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u308B\u304C\u3001\u3053\u306E\u56DE\u6570\u3082\u64CD\u4F5C\u30DF\u30CE\u304C\u3042\u3063\u305F\u6700\u4F4E\u9AD8\u5EA6\u3092\u66F4\u65B0\u3059\u308B\u3053\u3068\u3067\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\\n\u3053\u308C\u3092\u4F7F\u3046\u3053\u3068\u3067\u6642\u9593\u7A3C\u304E\u304C\u3067\u304D\u308B\\n\u30AF\u30E9\u30C3\u30B7\u30AF\u30C6\u30C8\u30EA\u30B9\u3067\u306F\u8A2D\u7F6E\u6642\u9593\u304C\u53B3\u3057\u3044\u3053\u3068\u304C\u591A\u3005\u3042\u308A\u307E\u3059",
    },
    {"ARE(\u51FA\u73FE\u6642\u9593)",
        "spawn appearance delay are \u51FA\u73FE \u30B9\u30DD\u30FC\u30F3 \u9045\u5EF6 \u30C7\u30A3\u30EC\u30A4 \u6642\u9593",
        "term",
        "\u30DF\u30CE\u304C\u8A2D\u7F6E\u3057\u3066\u304B\u3089\u6B21\u306E\u64CD\u4F5C\u30DF\u30CE\u304C\u51FA\u73FE\u3059\u308B\u307E\u3067\u306E\u6642\u9593\u306E\u3053\u3068",
    },
    {"Line ARE(Line\u6D88\u53BB\u6642\u9593)",
        "appearance delay line \u30E9\u30A4\u30F3 are \u6D88\u53BB \u9045\u5EF6 \u30C7\u30A3\u30EC\u30A4 \u6642\u9593",
        "term",
        "Line\u3092\u6D88\u53BB\u3059\u308B\u306E\u306B\u304B\u304B\u308B\u6642\u9593",
    },
    {"Death ARE(\u6B7B\u5F8C\u786C\u76F4\u6642\u9593)",
        "die delay dd \u6B7B \u786C\u76F4 are \u51FA\u73FE \u30B9\u30DD\u30FC\u30F3 \u6B8B\u6A5F \u5FA9\u6D3B \u9045\u5EF6 \u30C7\u30A3\u30EC\u30A4 \u6642\u9593",
        "term",
        "\u6B8B\u6A5F\u5236\u306A\u3069\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u6642\u306B\u6B7B\u4EA1\u3057\u3066\u304B\u3089\u5FA9\u6D3B\u3059\u308B\u307E\u3067\u306E\u6642\u9593\\nTechmino\u306E\u5834\u5408\u306F\u30D6\u30ED\u30C3\u30AF\u30A2\u30A6\u30C8\u3067\u6B7B\u4EA1\u3057\u305F\u6642\u3001\u6B21\u306E\u30DF\u30CE\u306E\u51FA\u73FE\u6642\u9593\u306B\u6B7B\u5F8C\u786C\u76F4\u6642\u9593\u304C\u52A0\u7B97\u3055\u308C\u307E\u3059\\n\u307E\u305FIHS\u3084IRS\u306A\u3069\u3092\u4F7F\u3046\u3053\u3068\u306B\u3088\u3063\u3066\u30D6\u30ED\u30C3\u30AF\u30A2\u30A6\u30C8\u3092\u56DE\u907F\u3067\u304D\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\\n\\n\u3053\u306E\u30B7\u30B9\u30C6\u30E0\u306FNOT_A_ROBOT\u6C0F\u306B\u3088\u308B\u30A2\u30A4\u30C7\u30A2\u3067\u3059",
    },
    {"Finesse(\u6700\u9069\u5316)",
        "finesse \u6700\u9069\u5316 \u52B9\u7387 \u64CD\u4F5C \u521D\u5FC3\u8005 \u4E0B\u7D1A\u8005 \u4E0A\u9054 \u7DF4\u7FD2",
        "term",
        "\u30DF\u30B9\u306A\u304F\u6700\u4F4E\u9650\u306E\u64CD\u4F5C\u3067\u76EE\u7684\u306E\u5834\u6240\u306B\u30DF\u30CE\u3092\u79FB\u52D5\u3055\u305B\u308B\u6280\u8853\\n\u901F\u3055\u304C\u4E0A\u304C\u308A\u3001\u30DF\u30B9\u3082\u6E1B\u308A\u307E\u3059\\nJstris\u306E\u300Crestart on finesse error\u300D\u3084Techmino\u306E\u6700\u9069\u5316\u5931\u6557\u97F3\u3092\u6709\u52B9\u306B\u3059\u308B\u3053\u3068\u3067\u7DF4\u7FD2\u3067\u304D\u307E\u3059\\n\u53B3\u5BC6\u306B\u306FTechmino\u306E\u6700\u9069\u5316\u5224\u5B9A\u306F\u300C\u7406\u8AD6\u4E0A\u306E\u6700\u5C0F\u5165\u529B\u6570\u300D\u3067\u306F\u306A\u304F\u3001\u300C\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u3092\u5FC5\u8981\u3068\u3057\u306A\u3044\u4F4D\u7F6E\u306E\u6642\u3001\u4E00\u5B9A\u56DE\u6570\u4EE5\u4E0B\u306E\u5165\u529B\u304B\u3069\u3046\u304B\u300D\u3067\u5224\u5B9A\u3057\u3066\u3044\u307E\u3059\\n\u305D\u306E\u305F\u3081\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u304C\u5FC5\u8981\u306Aspin\u306A\u3069\u306E\u6642\u306F\u6700\u9069\u5316\u306E\u5224\u5B9A\u3092\u884C\u3063\u3066\u3044\u307E\u305B\u3093\\n\u307E\u305F\u30DB\u30FC\u30EB\u30C9\u3068\u64CD\u4F5C\u30DF\u30CE\u304C\u540C\u3058\u6642\u306B\u30DB\u30FC\u30EB\u30C9\u3092\u3057\u305F\u308A\u3001\u30DB\u30FC\u30EB\u30C9\u3059\u308B\u524D\u306E\u30DF\u30CE\u3092\u7121\u99C4\u306B\u52D5\u304B\u3057\u3066\u3082\u6700\u9069\u5316\u304C\u5931\u6557\u3057\u3066\u3044\u308B\u3068\u306F\u5224\u5B9A\u3055\u308C\u307E\u305B\u3093\\n\u307E\u305FTechmino\u306E\u6700\u9069\u5316\u7387\u306F\u4E00\u5B9A\u56DE\u6570\u4EE5\u4E0B\u306E\u5834\u5408100%\u3001\u4E00\u5B9A\u56DE\u6570\u3088\u308A\u5165\u529B\u304C1\u591A\u3044\u5834\u540850%\u3001\u5165\u529B\u304C2\u591A\u3044\u5834\u540825%\u3001\u5165\u529B\u304C3\u4EE5\u4E0A\u591A\u3044\u5834\u54080%\u3068\u3055\u308C\u3066\u3044\u307E\u3059\\n\u307E\u305F0G\u306820G\u3067\u6700\u9069\u5316\u306E\u7B97\u51FA\u65B9\u6CD5\u3092\u5909\u3048\u3066\u3044\u306A\u3044\u305F\u3081\u843D\u4E0B\u901F\u5EA6\u304C\u901F\u3044\u6642\u306F\u4E0D\u6B63\u78BA\u306A\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044",
    },
    {"\u2018Doing Research\u2019",
        "scientificresearch \u7814\u7A76 \u4E0A\u9054 \u7DF4\u7FD2 \u79D1\u7814",
        "term",
        "\u300C\u79D1\u7814\u300D\u3068\u3044\u3046\u4E2D\u56FD\u306E\u30C6\u30C8\u30EA\u30B9\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3067\u4F7F\u308F\u308C\u308B\u8A00\u8449\\n\u843D\u4E0B\u901F\u5EA6\u306E\u4F4E\u30441\u4EBA\u7528\u30E2\u30FC\u30C9\u3067\u6280\u8853\u3084\u30C6\u30F3\u30D7\u30EC\u3092\u7814\u7A76\u30FB\u7DF4\u7FD2\u3059\u308B\u3053\u3068\u3092\u8A00\u3044\u307E\u3059(\u65E5\u672C\u3067\u3082\u3053\u306E\u7DF4\u7FD2\u306F\u3042\u308A\u307E\u3059\u304C\u305D\u306E\u884C\u70BA\u306E\u307F\u3092\u6307\u3059\u5358\u8A9E\u306F\u5B58\u5728\u3057\u307E\u305B\u3093)",
    },
    {"Keymapping(\u30AD\u30FC\u914D\u7F6E)",
        "feel \u30AD\u30FC key \u64CD\u4F5C",
        "term",
        "\u3053\u3053\u3067\u306F\u30AD\u30FC\u30DC\u30FC\u30C9\u3067\u306E\u30AD\u30FC\u30B3\u30F3\u30D5\u30A3\u30B0\u306B\u3064\u3044\u3066\u8A00\u53CA\u3057\u307E\u3059\\n\u30AD\u30FC\u30B3\u30F3\u30D5\u30A3\u30B0\u306E\u539F\u5247\\n1.\u540C\u6642\u306B\u62BC\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u8907\u6570\u306E\u30AD\u30FC\u30921\u672C\u306E\u6307\u306B\u5272\u308A\u5F53\u3066\u306A\u3044\u3067\u304F\u3060\u3055\u3044\\n\u57FA\u672C\u7684\u306B\u306F\u56DE\u8EE23\u7A2E\u985E(\u53F3\u3001\u5DE6\u3001180\xB0)\u3068\u5DE6\u53F3\u79FB\u52D5(\u53F3\u3001\u5DE6)\u306F\u305D\u308C\u305E\u308C\u540C\u6642\u306B\u62BC\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\\n2.\u65E2\u306B\u4ED6\u306E\u30B2\u30FC\u30E0\u3067\u5C0F\u6307\u3092\u935B\u3048\u3066\u3044\u306A\u3044\u9650\u308A\u5C0F\u6307\u3092\u4F7F\u308F\u306A\u3044\u30AD\u30FC\u914D\u7F6E\u306B\u3057\u3066\u304F\u3060\u3055\u3044\\n\u57FA\u672C\u7684\u306B\u306F\u4EBA\u5DEE\u3057\u6307\u3068\u4E2D\u6307\u3092\u4E2D\u5FC3\u306B\u7D44\u307F\u7ACB\u3066\u308B\u3068\u3044\u3044\u3067\u3057\u3087\u3046\\n3.\u4EBA\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30AD\u30FC\u914D\u7F6E\u306F\u9055\u3046\u306E\u3067\u4F7F\u3063\u3066\u3044\u308B\u4EBA\u3092\u7406\u7531\u306B\u5909\u3048\u308B\u5FC5\u8981\u306F\u306A\u3044\u3067\u3059\\n\\n\u6700\u4F4E\u9650\u306E\u539F\u5247\u3092\u5B88\u3063\u3066\u3044\u308C\u3070\u30AD\u30FC\u914D\u7F6E\u306B\u3088\u308B\u512A\u52A3\u306F\u975E\u5E38\u306B\u8584\u3044\u3068\u8003\u3048\u3089\u308C\u307E\u3059",
    },
    {"Handling(\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0)",
        "feel handling \u30C1\u30E5\u30FC\u30CB\u30F3\u30B0 das arr \u30CF\u30F3\u30C9\u30EA\u30F3\u30B0 \u64CD\u4F5C",
        "term",
        "\u64CD\u4F5C\u306B\u60AA\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u4E3B\u306A\u8981\u56E0\u3092\u4EE5\u4E0B\u306B\u6319\u3052\u307E\u3059\\n1.\u30C7\u30D0\u30A4\u30B9\u306E\u8A2D\u5B9A\u3084\u72B6\u614B\u306B\u3088\u308B\u9045\u5EF6\\n\u30B2\u30FC\u30E0\u3092\u518D\u8D77\u52D5\u3057\u305F\u308A\u30C7\u30D0\u30A4\u30B9\u3092\u5909\u3048\u305F\u308A\u3059\u308B\u3053\u3068\u3067\u6539\u5584\u3055\u308C\u307E\u3059\\n2.\u30B2\u30FC\u30E0\u304C\u91CD\u3044\\n\u6A5F\u5668\u306E\u6027\u80FD\u4E0D\u8DB3\u3084\u30D7\u30ED\u30B0\u30E9\u30E0\u30B3\u30FC\u30C9\u304C\u4E0D\u5B89\u5B9A\u3001\u8A2D\u8A08\u306E\u4E0D\u5177\u5408\u304C\u539F\u56E0\u3067\u3059\\n\u30A8\u30D5\u30A7\u30AF\u30C8\u8A2D\u5B9A\u306A\u3069\u3092\u8EFD\u304F\u3059\u308B\u3053\u3068\u3067\u7DE9\u548C\u3055\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\\n3.\u610F\u56F3\u7684\u306B\u64CD\u4F5C\u6027\u3092\u60AA\u304F\u3055\u308C\u3066\u3044\u308B\\n\u9069\u5FDC\u3059\u308B\u3057\u304B\u3042\u308A\u307E\u305B\u3093\\n4.DAS\u3084ARR\u7B49\u306E\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u8A2D\u5B9A\u304C\u5408\u3063\u3066\u3044\u306A\u3044\\n\u9069\u5F53\u306A\u5024\u306B\u5909\u66F4\u3057\u307E\u3057\u3087\u3046\\n5.\u59FF\u52E2\u304C\u60AA\u3044\\n\u8170\u75DB\u3081\u307E\u3059\u3088?\\n6.\u59FF\u52E2\u3084\u30AD\u30FC\u914D\u7F6E\u3001\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u3092\u5909\u3048\u3066\u6163\u308C\u3066\u3044\u306A\u3044\\n\u6163\u308C\u308B\u306E\u8AE6\u3081\u308B\u304B\u6839\u6C17\u5F37\u304F\u9811\u5F35\u308A\u307E\u3057\u3087\u3046\\n7.\u75B2\u52B4\\n\u65E9\u6025\u306B\u4F11\u3093\u3067\u304F\u3060\u3055\u3044",
    },
    {"DAS (\u6A2A\u6E9C\u3081)(\u7C21\u6613\u306A\u8AAC\u660E)",
        "das arr delayedautoshift autorepeatrate \u30C0\u30B9 \u3060\u3059 \u305F\u3081 \u6E9C\u3081 \u6A2A",
        "term",
        "\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u300CO\u300D\u3092\u9577\u62BC\u3057\u3059\u308B\u3068\u9577\u3044O\u306E\u6587\u5B57\u5217\u304C\u3067\u304D\u307E\u3059\\n\u3053\u306E\u3068\u304DO\u304C\u3069\u306E\u3088\u3046\u306B\u51FA\u73FE\u3057\u305F\u304B\u3068\u3044\u3046\u3068\u300CO->(\u9577\u3044\u6E9C\u3081\u6642\u9593)->O->(\u50C5\u304B\u306A\u6E9C\u3081\u6642\u9593)->O->(\u50C5\u304B\u306A\u6E9C\u3081\u6642\u9593)->...\u300D\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\\n\u3053\u306E\u9577\u3044\u6E9C\u3081\u6642\u9593\u306E\u3053\u3068\u3092DAS(delay auto shift\u3001\u5225\u540D:\u6A2A\u6E9C\u3081)\u3001\u50C5\u304B\u306A\u6E9C\u3081\u6642\u9593\u306E\u3053\u3068\u3092ARR(auto repeat rate)\u3068\u547C\u3073\u307E\u3059",
    },
    {"DAS & ARR",
        "das arr delayedautoshift autorepeatrate \u30C0\u30B9 \u3060\u3059 \u305F\u3081 \u6E9C\u3081 \u6A2A",
        "term",
        "Delay Auto Shift\u306E\u7565\u3001\u65E5\u672C\u3060\u3068\u300C\u6A2A\u6E9C\u3081\u300D\u3068\u3082\u8A00\u308F\u308C\u308B\\n\u5DE6\u53F3\u5165\u529B\u3092\u3057\u305F\u6642\u306B\u6A2A\u306B\u79FB\u52D5\u3059\u308B\u4ED5\u7D44\u307F\u306E\u3053\u3068\\n\u307E\u305F\u9577\u6642\u9593\u5DE6\u53F3\u5165\u529B\u3057\u305F\u6642\u306B\u6700\u521D\u306E\u6A2A\u306B1\u3064\u30BA\u30EC\u308B\u79FB\u52D5\u304B\u3089\u6B21\u306E\u79FB\u52D5\u307E\u3067\u306E\u6642\u9593\u306E\u3053\u3068\\n\\nARR\u306FAuto Repeat Rate\u306E\u7565\\n\u5DE6\u53F3\u5165\u529B\u3092\u9577\u6642\u9593\u3059\u308B\u3068\u9023\u7D9A\u3057\u3066\u6A2A\u306B\u52D5\u304D\u59CB\u3081\u308B\u304C\u305D\u306E\u6642\u306E\u79FB\u52D5\u5468\u671F\u306E\u3053\u3068\\n\u30B2\u30FC\u30E0\u306B\u3088\u3063\u3066\u306FDAS\u3084ARR\u3092\u30D5\u30EC\u30FC\u30E0\u3067\u8A08\u7B97\u3057\u3066\u3044\u307E\u3059\\n60fps\u3067\u52D5\u4F5C\u3059\u308B\u30B2\u30FC\u30E0\u306E\u5834\u5408\u3001f(\u30D5\u30EC\u30FC\u30E0)\xD716.7\u3067ms(\u30DF\u30EA\u79D2)\u306B\u63DB\u7B97\u3067\u304D\u307E\u3059",
    },
    {"DAS tuning(DAS\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0)",
        "das tuning \u30C1\u30E5\u30FC\u30CB\u30F3\u30B0 \u64CD\u4F5C",
        "term",
        "\u3088\u308A\u901F\u304F\u30D7\u30EC\u30A4\u3057\u305F\u3044\u4EBA\u306FDAS\u30924\uFF5E6f(67\uFF5E100ms)\u3001ARR\u30920f(0ms)\u306B\u3059\u308B\u3053\u3068\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059(ARR:0\u3068\u3044\u3046\u306E\u306FDAS\u3088\u308A\u9577\u304F\u5165\u529B\u3092\u7D9A\u3051\u305F\u77AC\u9593\u3001\u7AEF\u306B\u30DF\u30CE\u304C\u79FB\u52D5\u3059\u308B\u8A2D\u5B9A\u3067\u3059)\\n\u7406\u60F3\u306E\u64CD\u4F5C\u65B9\u6CD5\u3068\u3057\u3066\u306F\u5358\u6642\u9593\u5165\u529B\u3068\u9577\u6642\u9593\u5165\u529B\u3092\u78BA\u5B9F\u306B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u3001ARR\u30920\u306BDAS\u3084\u305D\u308C\u4EE5\u5916\u306E\u8A2D\u5B9A\u306F\u53EF\u80FD\u306A\u9650\u308A\u4F4E\u304F\u3059\u308B\u3053\u3068\u3067\u3059",
    },
    {"DAS cut(DAS\u30AB\u30C3\u30C8)",
        "dascut dcd \u30AB\u30C3\u30C8",
        "term",
        "*Techmino\u7528\u8A9E*\u901A\u5E38\u3001\u30DF\u30CE\u304C\u51FA\u73FE\u3059\u308B\u524D\u306BDAS\u6642\u9593\u4EE5\u4E0A\u5165\u529B\u3092\u3057\u3066\u3044\u308B\u3068\u30DF\u30CE\u304C\u51FA\u73FE\u3057\u305F\u77AC\u9593\u306B\u52D5\u304D\u51FA\u3057\u307E\u3059\\nDAS\u30AB\u30C3\u30C8\u306F\u3053\u306E\u3088\u3046\u306A\u73FE\u8C61\u3092\u6E1B\u3089\u3059\u305F\u3081\u306BDAS\u6642\u9593\u4EE5\u4E0A\u5165\u529B\u3057\u3066\u3044\u3066\u3082\u51FA\u73FE\u6642\u306BDAS\u30AB\u30C3\u30C8\u5206\u6E1B\u7B97\u3059\u308B\u6A5F\u80FD\u3067\u3059\\n\u4ED6\u306E\u30B2\u30FC\u30E0\u306B\u3082\u4F3C\u305F\u3088\u3046\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u304C\u6050\u3089\u304F\u7570\u306A\u308B\u3067\u3057\u3087\u3046",
    },
    {"Auto-lock cut(\u81EA\u52D5\u8A2D\u7F6E\u30AB\u30C3\u30C8)",
        "autolockcut mdcut \u81EA\u52D5 \u30AB\u30C3\u30C8",
        "term",
        "\u30DF\u30CE\u304C\u81EA\u7531\u843D\u4E0B\u306B\u3088\u308A\u8A2D\u7F6E\u3055\u308C\u305F\u6642\u306B\u30CF\u30FC\u30C9\u30C9\u30ED\u30C3\u30D7\u3092\u5165\u529B\u3057\u3066\u3057\u307E\u3046\u3053\u3068\u3067\u66B4\u767A\u3059\u308B\u3068\u3044\u3046\u4E8B\u6545\u3092\u9632\u3050\u6A5F\u80FD\u3067\u3059\\n\u81EA\u7531\u843D\u4E0B\u306B\u3088\u3063\u3066\u8A2D\u7F6E\u3057\u305F\u5834\u5408\u3001\u81EA\u52D5\u8A2D\u7F6E\u30AB\u30C3\u30C8\u6642\u9593\u306E\u9593\u30CF\u30FC\u30C9\u30C9\u30ED\u30C3\u30D7\u304C\u7121\u52B9\u5316\u3055\u308C\u307E\u3059\\n\u4ED6\u306E\u30B2\u30FC\u30E0\u306B\u3082\u4F3C\u305F\u3088\u3046\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u304C\u6050\u3089\u304F\u7570\u306A\u308B\u3067\u3057\u3087\u3046",
    },
    {"SDF",
        "softdropfactor \u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7",
        "term",
        "Soft Drop Factor\\n\\n\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u306E\u901F\u3055\u3092\u81EA\u7531\u843D\u4E0B\u306E\u901F\u3055\u306E\u500D\u6570\u3067\u8868\u73FE\u3059\u308B\u65B9\u6CD5\\n\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u30C6\u30C8\u30EA\u30B9\u3067\u306FSDF20\u3001\u3064\u307E\u308A\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u306E\u901F\u3055\u306F\u81EA\u7531\u843D\u4E0B\u306E\u901F\u3055\u306E20\u500D\u3068\u5B9A\u3081\u3089\u308C\u3066\u3044\u308B\\n\u306A\u304ATechmino\u3067\u306FSDF\u3092\u4F7F\u7528\u3057\u3066\u307E\u305B\u3093",
    },
    {"\u5F62\u3068\u540D\u524D",
        "mino \u30DF\u30CE \u307F\u306E",
        "term",
        "Techmino\u3067\u4F7F\u308F\u308C\u308B\u5168\u30D6\u30ED\u30C3\u30AF\u3068\u305D\u306E\u540D\u524D\u306E\u30EA\u30B9\u30C8\u3067\u3059:\\nTetrominos:\\nZ: "..CHAR.mino.Z..",  S: "..CHAR.mino.S..",  J: "..CHAR.mino.J..",  L: "..CHAR.mino.L..",  T: "..CHAR.mino.T..",  O: "..CHAR.mino.O..",  I: "..CHAR.mino.I..";\\n\\nPentominos:\\nZ5: "..CHAR.mino.Z5..",  S5: "..CHAR.mino.S5..",  P: "..CHAR.mino.P..",  Q: "..CHAR.mino.Q..",  F: "..CHAR.mino.F..",  E: "..CHAR.mino.E..",  T5: "..CHAR.mino.T5..",  U: "..CHAR.mino.U..",  V: "..CHAR.mino.V..",  W: "..CHAR.mino.W..",  X: "..CHAR.mino.X..",  J5: "..CHAR.mino.J5..",  L5: "..CHAR.mino.L5..",  R: "..CHAR.mino.R..",  Y: "..CHAR.mino.Y..",  N: "..CHAR.mino.N..",  H: "..CHAR.mino.H..",  I5: "..CHAR.mino.I5..";\\n\\nTriminos, Domino, and Mino:\\nI3: "..CHAR.mino.I3..",  C: "..CHAR.mino.C..",  I2: "..CHAR.mino.I2..",  O1: "..CHAR.mino.O1..".",
    },
    {"7\u7A2E1\u5DE1",
        "bag 7bag randomgenerator 7 \u7A2E 1 \u5DE1 \u751F\u6210 \u51FA\u73FE \u6CD5 \u5247",
        "term",
        "\u5225\u540D:7-bag\u3001\u6B63\u5F0F\u540D\u79F0:Random Generator\\n\u516C\u5F0F\u30C6\u30C8\u30EA\u30B9\u304C\u30DF\u30CE\u3092\u751F\u6210\u3059\u308B\u306E\u306B\u4F7F\u3046\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u3053\u3068\\n\u30C6\u30C8\u30EA\u30B9\u306B\u306F\u901A\u5E387\u7A2E\u985E\u306E\u30DF\u30CE\u304C\u3042\u308B\u304C\u5168\u7A2E\u985E\u304C\u540C\u3058\u6570\u51FA\u73FE\u3059\u308B\u3053\u3068\u304C\u4FDD\u8A3C\u3055\u308C\u3066\u3044\u308B\\n\u4F8B:ZSJLOIT OJSIZLT TOILSZJ...",
    },
    {"His generator",
        "history hisgenerator tgm \u751F\u6210 \u51FA\u73FE \u6CD5 \u5247",
        "term",
        "History generator\\nTGM\u306B\u4F7F\u308F\u308C\u308B\u30DF\u30CE\u3092\u751F\u6210\u3059\u308B\u3068\u304D\u306E\u6CD5\u5247\\n\u6BCE\u56DE\u30E9\u30F3\u30C0\u30E0\u306B7\u7A2E\u985E\u306E\u4E2D\u304B\u3089\u9078\u629E\u3055\u308C\u308B\u304C\u3001\u3082\u3057\u9078\u629E\u3055\u308C\u305F\u3082\u306E\u304C\u6570\u500B\u524D\u3068\u540C\u3058\u306A\u5834\u5408\u306F\u307E\u305F\u30E9\u30F3\u30C0\u30E0\u306B7\u7A2E\u985E\u306E\u4E2D\u304B\u3089\u9078\u629E\u3055\u308C\u6700\u7D42\u7684\u306B\u5225\u306E\u30DF\u30CE\u304C\u9078\u629E\u3055\u308C\u308B\u304B\u518D\u9078\u629E\u56DE\u6570\u304C\u9650\u754C\u306B\u9054\u3057\u3066\u540C\u3058\u30DF\u30CE\u304C\u9078\u629E\u3055\u308C\u308B\\n\u4F8B\u3048\u3070\u300Chis 4 roll 6\u300D\u3068\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u306E\u5834\u5408\u3001\u9078\u629E\u3057\u305F\u30DF\u30CE\u304C\u524D\u306B\u4F7F\u3063\u305F4\u3064\u306E\u30DF\u30CE\u306E\u4E2D\u306B\u3042\u308B\u5834\u5408\u3001\u6700\u59276\u56DE\u307E\u3067\u9055\u3046\u30DF\u30CE\u304C\u51FA\u308B\u307E\u3067\u518D\u9078\u629E\u3059\u308B\\n\u4ED6\u306B\u300Chis 4 roll 6 pool 35\u300D\u306E\u3088\u3046\u306B\u3055\u3089\u306B\u30E9\u30F3\u30C0\u30E0\u6027\u3092\u6E1B\u3089\u3057\u305F\u3082\u306E\u3082\u3042\u308B\\nTechmino\u3067\u306Froll\u306E\u5024\u306F\u30CD\u30AF\u30B9\u30C8\u306E\u9577\u3055\u306E\u534A\u5206\u3001\u5C0F\u6570\u70B9\u4EE5\u4E0B\u5207\u308A\u4E0A\u3052\u306B\u306A\u3063\u3066\u3044\u307E\u3059",
    },
    {"HisPool generator",
        "hisPool history pool tgm \u751F\u6210 \u51FA\u73FE \u6CD5 \u5247",
        "term",
        "History Pool generator\\nHis generator\u3092\u57FA\u306B\u300CPool\u300D\u3068\u3044\u3046\u6A5F\u80FD\u3092\u5C0E\u5165\u3057\u305F\u751F\u6210\u6CD5\u5247\\n\u30DF\u30CE\u3092\u9078\u629E\u3059\u308B\u5834\u5408\u306BPool\u3068\u3044\u3046\u888B\u306E\u4E2D\u304B\u3089\u9078\u629E\u3055\u308C\u3066\u3044\u308B\\nPool\u306E\u4E2D\u306B\u3042\u308B\u30DF\u30CE\u306F\u9078\u629E\u3055\u308C\u305F\u56DE\u6570\u306B\u57FA\u3065\u3044\u3066\u9078\u629E\u3055\u308C\u308B\u78BA\u7387\u304C\u5909\u52D5\u3057\u3066\u304A\u308A\u3001\u51FA\u73FE\u983B\u5EA6\u304C\u4F4E\u3044\u3082\u306E\u307B\u3069\u78BA\u7387\u304C\u9AD8\u304F\u306A\u3063\u3066\u3044\u308B\\n\u3053\u306E\u4ED5\u7D44\u307F\u306B\u3088\u3063\u3066\u30E9\u30F3\u30C0\u30E0\u6027\u304C\u5927\u304D\u304F\u6E1B\u3089\u3055\u308C\u3001\u540C\u3058\u3088\u3046\u306A\u30DF\u30CE\u3070\u304B\u308A\u6765\u308B\u3068\u3044\u3046\u3053\u3068\u306F\u306A\u304F\u306A\u3063\u305F",
    },
    {"bagES generator",
        "bages easy start \u751F\u6210 \u51FA\u73FE \u6CD5 \u5247",
        "term",
        "*Techmino\u7528\u8A9E*\\nBag Easy-Start\\n7\u7A2E1\u5DE1\u3092\u66F4\u306B\u6539\u826F\u3057\u305F\u751F\u6210\u6CD5\u5247\\n\u6700\u521D\u306B\u7F6E\u304D\u3065\u3089\u3044\u30DF\u30CE(S/Z/O/S5/Z5/F/E/W/X/N/H)\u304C\u9078\u629E\u3055\u308C\u307E\u305B\u3093",
    },
    {"Reverb generator",
        "reverb \u751F\u6210 \u51FA\u73FE \u6CD5 \u5247",
        "term",
        "*Techmino\u7528\u8A9E*\\n7\u7A2E1\u5DE1\u304B\u3089\u6D3E\u751F\u3057\u305F\u751F\u6210\u6CD5\u5247\\n7\u7A2E1\u5DE1\u3092\u57FA\u306B\u3057\u3066\u305D\u308C\u305E\u308C\u306E\u30DF\u30CE\u304C\u6570\u56DE\u9023\u7D9A\u3057\u3066\u51FA\u3088\u3046\u3068\u3057\u307E\u3059\\n\u7279\u5B9A\u306E\u30DF\u30CE\u304C\u983B\u7E6B\u306B\u9023\u7D9A\u3057\u3066\u51FA\u3088\u3046\u3068\u3059\u308B\u3068\u9023\u7D9A\u3057\u3066\u51FA\u308B\u78BA\u7387\u304C\u4E0B\u304C\u308A\u3001\u9006\u306B\u3042\u307E\u308A\u9023\u7D9A\u3057\u3066\u51FA\u306A\u3044\u30DF\u30CE\u306F\u9023\u7D9A\u3057\u3066\u51FA\u308B\u3088\u3046\u306B\u78BA\u7387\u304C\u4E0A\u3052\u3089\u308C\u307E\u3059",
    },
    {"Hypertapping(\u30CF\u30A4\u30D1\u30FC\u30BF\u30C3\u30D4\u30F3\u30B0)",
        "hypertapping \u30CF\u30A4\u30D1\u30FC \u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u30FC \u64CD\u4F5C",
        "term",
        "\u6307\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u30FC\u4E0A\u3067\u632F\u52D5\u3055\u305B\u308B\u3053\u3068\u3067ARR\u3088\u308A\u3082\u901F\u3044\u5468\u671F\u3067\u6A2A\u79FB\u52D5\u3055\u305B\u308B\u6280\u8853\\nDAS\u304C\u9045\u3044\u30AF\u30E9\u30C3\u30B7\u30AF\u30C6\u30C8\u30EA\u30B9\u3067\u3088\u304F\u4F7F\u308F\u308C\u308B\\n\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u306E\u307B\u3068\u3093\u3069\u306FDAS\u304C\u5341\u5206\u306B\u77ED\u3044\u305F\u3081\u3053\u306E\u6280\u8853\u306F\u4E0D\u8981\u3067\u3059",
    },
    {"Rolling(\u30ED\u30FC\u30EA\u30F3\u30B0)",
        "rolling \u30ED\u30FC\u30EA\u30F3\u30B0 \u30D4\u30A2\u30CE \u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u30FC \u64CD\u4F5C",
        "term",
        "DAS\u3084ARR\u304C\u9045\u3044\u30AF\u30E9\u30C3\u30B7\u30AF\u30C6\u30C8\u30EA\u30B9\u306E\u9AD8\u91CD\u529B(1G\u4EE5\u4E0A)\u4E0B\u3067\u5B89\u5B9A\u3057\u3066\u30D7\u30EC\u30A4\u3059\u308B\u305F\u3081\u306E\u64CD\u4F5C\u65B9\u6CD5\\n\u7247\u65B9\u306E\u624B\u3068\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u30FC\u3092\u56FA\u5B9A\u3057\u3001\u3082\u3046\u7247\u65B9\u306E\u624B\u3067\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u30FC\u306E\u80CC\u9762\u3092\u53E9\u304F\u3053\u3068\u9AD8\u901F\u5165\u529B\u3092\u5B9F\u73FE\u3057\u3066\u3044\u308B\\n\u3053\u306E\u64CD\u4F5C\u65B9\u6CD5\u306F\u30CF\u30A4\u30D1\u30FC\u30BF\u30C3\u30D4\u30F3\u30B0\u3088\u308A\u3082\u901F\u304F\u3001\u3055\u3089\u306B\u5C11\u306A\u3044\u529B\u3067\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\\n\u3053\u306E\u64CD\u4F5C\u65B9\u6CD5\u306FCheez-fish\u304C\u6700\u521D\u306B\u767A\u898B\u3057\u3001\u7406\u8AD6\u4E0A1f\u306B1\u56DE\u64CD\u4F5C\u3067\u304D\u308B\u3068\u8A00\u308F\u308C\u3066\u3044\u307E\u3059",
    },
    {"Passthrough(\u8CAB\u901A)",
        "pingthrough \u30D4\u30F3\u30B9\u30EB\u30FC \u8CAB\u901A \u3059\u308A\u629C\u3051",
        "term",
        "\u53CC\u65B9\u306E\u706B\u529B\u304C\u4E92\u3044\u306B\u76F8\u6BBA\u3055\u308C\u305A\u76F8\u624B\u306E\u706B\u529B\u30B2\u30FC\u30B8\u306B\u706B\u529B\u304C\u5230\u9054\u3059\u308B\u3053\u3068\\n\u307E\u305F\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u30E9\u30B0\u306B\u3088\u308A\u8CAB\u901A\u304C\u767A\u751F\u3059\u308B\u3053\u3068\u3092\u300Cpingthrough\u300D\u3068\u8A00\u3046",
    },
    {"Tetris OL attack",
        "top tetrisonlineattack \u30C6\u30C8\u30AA\u30F3 toj toz \u30AA\u30F3\u30E9\u30A4\u30F3 \u30C6\u30C8\u30EA\u30B9 \u706B\u529B \u653B\u6483 \u8A08\u7B97",
        "term",
        "\u30C6\u30C8\u30EA\u30B9\u30AA\u30F3\u30E9\u30A4\u30F3\u306E\u706B\u529B\u8A08\u7B97\\nSingle,double,triple,tetris\u306E\u706B\u529B\u306F\u305D\u308C\u305E\u308C0,1,2,4\u3068\u306A\u3063\u3066\u304A\u308A\u3001TSS,TSD,TST\u306E\u5834\u5408\u306F2,4,6\u3068\u306A\u308B\\n\u307E\u305FTspin mini\u5224\u5B9A\u306B\u306A\u308B\u3068\u706B\u529B\u304C\u534A\u5206\u306B\u306A\u308A\u307E\u3059\\nren\u306E\u706B\u529B\u306F1ren\u76EE\u304B\u3089+0,+1,+1,+2,+2,+3,+3,+4,+4,+5,+5,+5...\u3068\u4E0A\u96505\u307E\u3067\u4E0A\u6607\u3057\u3001\u5143\u306E\u706B\u529B\u306B\u52A0\u7B97\u3055\u308C\u307E\u3059\\nBtB\u306E\u706B\u529B\u306F+1\u3001\u305F\u3060\u3057TST\u306E\u5834\u5408\u306F+2\u3067\u5143\u306E\u706B\u529B\u306B\u52A0\u7B97\u3055\u308C\u307E\u3059\\n\u30D1\u30FC\u30D5\u30A7\u30AF\u30C8\u30AF\u30EA\u30A2\u306E\u706B\u529B\u306F+6\u3067\u5143\u306E\u706B\u529B\u306B\u52A0\u7B97\u3055\u308C\u307E\u3059\\n\u305F\u3060\u3057\u30D1\u30FC\u30D5\u30A7\u30AF\u30C8\u30AF\u30EA\u30A2\u5206\u306E\u706B\u529B\u306F\u76F8\u6BBA\u304C\u5F53\u305F\u3089\u305A\u3001\u76F4\u63A5\u76F8\u624B\u306B\u9001\u3089\u308C\u307E\u3059",
    },
    {"Techmino attack",
        "techminoattack Techmino \u3066\u304F\u307F\u306E \u30C6\u30AF\u30DF\u30CE \u3066\u3063\u304F\u307F\u306E \u30C6\u30C3\u30AF\u30DF\u30CE \u706B\u529B \u653B\u6483 \u8A08\u7B97",
        "term",
        "\u5C11\u3057\u8907\u96D1\u306A\u305F\u3081\u30E1\u30A4\u30F3\u753B\u9762\u306E\u53F3\u4E0B\u306B\u3042\u308B\u300C?\u300D\u3092\u53C2\u7167",
    },
    {"C2 Generator",
        "cultris2generator cultrisiigenerator c2generator \u30AB\u30EB\u30C8\u30EA\u30B9 \u751F\u6210 \u51FA\u73FE \u6CD5 \u5247",
        "term",
        "Cultris II\u3067\u4F7F\u308F\u308C\u308B\u751F\u6210\u6CD5\u5247\\n\u30DF\u30CE\u306B\u91CD\u307F\u3092\u4ED8\u3051\u3066\u8A08\u7B97\u3057\u3066\u3044\u307E\u3059\\n\u521D\u671F\u306F\u5168\u30DF\u30CE\u306E\u91CD\u307F\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\\n\u305D\u3057\u3066\u30DF\u30CE\u3092\u9078\u629E\u3059\u308B\u6642\u3001\u5168\u3066\u306E\u30DF\u30CE\u305D\u308C\u305E\u308C\u306B\u6B21\u306E\u3088\u3046\u306A\u51E6\u7406\u3092\u65BD\u3057\u307E\u3059:\\n\u73FE\u5728\u306E\u91CD\u307F\u3092\u534A\u5206\u306B\u3057\u3001\u305D\u3053\u306B0\uFF5E1\u306E\u9593\u3067\u751F\u6210\u3055\u308C\u305F\u4E71\u6570\u3092\u52A0\u7B97\u3059\u308B((\u91CD\u307F/2)+(0\uFF5E1\u306E\u4E71\u6570))\\n\\n\u305D\u3057\u3066\u7B97\u51FA\u3055\u308C\u305F\u5024\u3092\u65B0\u305F\u306A\u91CD\u307F\u3068\u3057\u3001\u6700\u3082\u91CD\u307F\u304C\u5927\u304D\u3044\u30DF\u30CE\u3092\u9078\u629E\u3057\u307E\u3059\\n\u307E\u305F\u9078\u629E\u3055\u308C\u305F\u30DF\u30CE\u306E\u91CD\u307F\u306F3.5\u3067\u5272\u3089\u308C\u3001\u305D\u308C\u3092\u65B0\u305F\u306A\u91CD\u307F\u3068\u3057\u307E\u3059\\n\u3064\u307E\u308A\u9078\u629E\u3055\u308C\u305F\u30DF\u30CE\u306E\u65B0\u3057\u3044\u91CD\u307F\u306F((\u5143\u306E\u91CD\u307F/2)+(0\uFF5E1\u306E\u4E71\u6570))/3.5\u3001\u9078\u629E\u3055\u308C\u306A\u304B\u3063\u305F\u30DF\u30CE\u306E\u65B0\u3057\u3044\u91CD\u307F\u306F(\u5143\u306E\u91CD\u307F/2)+(0\uFF5E1\u306E\u4E71\u6570)\u3068\u306A\u308A\u307E\u3059",
    },
    {"Stacking(\u7A4D\u307F)",
        "stacking \u7A4D\u307F \u3064\u307F \u7F6E\u304F",
        "term",
        "\u30DF\u30CE\u3092\u7F6E\u3044\u3066\u884C\u304F\u3053\u3068\\n\u5FC5\u9808\u6280\u8853\u306E1\u3064",
    },
    {"Rotation buttons(\u5DE6\u53F3\u56DE\u8EE2)",
        "doublerotation \u56DE\u8EE2 \u5DE6 \u53F3 2",
        "term",
        "\u5DE6\u53F3\u56DE\u8EE2\u4E21\u65B9\u3092\u4F7F\u3046\u3053\u3068\u30673\u56DE\u8EE2\u64CD\u4F5C\u304C\u306A\u304F\u306A\u308A\u3001\u5165\u529B\u6570\u304C\u6E1B\u5C11\u3057\u307E\u3059\\n\u6700\u9069\u5316\u306F\u5DE6\u53F3\u56DE\u8EE2\u306E\u307F\u3092\u4F7F\u3046\u3053\u3068\u3092\u524D\u63D0\u306B\u8A2D\u8A08\u3055\u308C\u3066\u3044\u307E\u3059",
    },
    {"Rotation buttons (\u5DE6\u53F3180\xB0\u56DE\u8EE2)",
        "triplerotation \u56DE\u8EE2 \u5DE6 \u53F3 180 3",
        "term",
        "\u5DE6\u53F3,180\xB0\u56DE\u8EE2\u306E\u5168\u3066\u3092\u4F7F\u3048\u3070\u3069\u3093\u306A\u56DE\u8EE2\u65B9\u5411\u3067\u30821\u56DE\u306E\u5165\u529B\u3067\u6E08\u307F\u307E\u3059\\n\u3057\u304B\u3057\u5168\u3066\u306E\u30B2\u30FC\u30E0\u306B180\xB0\u56DE\u8EE2\u304C\u3042\u308B\u308F\u3051\u3067\u306A\u304F\u3001\u3053\u306E\u6280\u8853\u3092\u7FD2\u5F97\u3057\u3066\u3082\u5DE6\u53F3\u56DE\u8EE2\u3092\u7FD2\u5F97\u3057\u305F\u6642\u307B\u3069\u306E\u4E0A\u9054\u306F\u306A\u3044\u3067\u3057\u3087\u3046\\n\u6700\u9069\u5316\u3068\u3044\u3046\u70B9\u3067\u306F\u901F\u3055\u3092\u6975\u7AEF\u306B\u6C42\u3081\u306A\u3044\u9650\u308A\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093(\u305F\u3060\u3057180\xB0\u306E\u56DE\u8EE2\u5165\u308C\u306F\u899A\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059)",
    },
	{"\u30B6\u30F3\u30AE",
        "\u64CD\u4F5C \u30B6\u30F3\u30AE \u3056\u3093\u304E zangi",
        "term",
        "\u5DE6\u53F3\u79FB\u52D5->\u30BD\u30CB\u30C3\u30AF\u30C9\u30ED\u30C3\u30D7->\u3082\u3046\u4E00\u65B9\u306E\u5DE6\u53F3\u79FB\u52D5\u3068\u884C\u308F\u308C\u308B\u64CD\u4F5C\u306E\u3053\u3068\\n\u4F8B\u3048\u3070\u5DE6\u30B6\u30F3\u30AE\u306E\u5834\u5408\u3001\u5DE6\u7AEF\u3078\u4E00\u77AC\u3067\u79FB\u52D5->\u30BD\u30CB\u30C3\u30AF\u30C9\u30ED\u30C3\u30D7->\u53F3\u3078\u58C1\u306B\u885D\u7A81\u3059\u308B\u307E\u3067\u79FB\u52D5 \u3068\u306A\u308B",
    },
    {"Drought(\u30C9\u30E9\u30A6\u30C8)",
        "drought \u30C9\u30E9\u30A6\u30C8 \u5E72\u3070\u3064 \u9023\u7D9A",
        "term",
        "\u6B32\u3057\u3044\u30DF\u30CE\u304C\u5168\u304F\u6765\u306A\u3044\u72B6\u6CC1\u306E\u3053\u3068\\n\u30AF\u30E9\u30C3\u30B7\u30AF\u30C6\u30C8\u30EA\u30B9\u3067\u3088\u304F\u8D77\u3053\u308B\u3053\u3068\u3067\u5730\u5F62\u3084\u30D7\u30EC\u30A4\u304C\u4E71\u308C\u308B\u539F\u56E0\u306B\u306A\u308A\u307E\u3059\\n\u30E2\u30C0\u30F3\u30C6\u30C8\u30EA\u30B9\u3067\u306F\u30E9\u30F3\u30C0\u30E0\u3067\u306F\u306A\u304F\u3001\u3042\u308B\u7A0B\u5EA6\u751F\u6210\u3055\u308C\u308B\u30DF\u30CE\u304C\u5236\u5FA1\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u307B\u3068\u3093\u3069\u8D77\u3053\u3089\u305A\u3001\u6700\u5927\u3067\u308213\u30DF\u30CE\u5F15\u3051\u3070\u6B32\u3057\u3044\u30DF\u30CE\u304C1\u3064\u306F\u51FA\u73FE\u3057\u307E\u3059",
    },
    {"Bone block(\u9AA8\u30D6\u30ED\u30C3\u30AF)",
        "bone tgm \u9AA8 \u30DC\u30FC\u30F3 \u30D6\u30ED\u30C3\u30AF \u30B9\u30AD\u30F3",
        "term",
        "\u521D\u671F\u306E\u30C6\u30C8\u30EA\u30B9\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u30DF\u30CE\u30B9\u30AD\u30F3\\n\u6614\u306E\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u306F\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9(Windows\u306Ecmd\u3084Mac\u306Eterminal\u306A\u3069)\u3092\u4E3B\u306B\u4F7F\u3063\u3066\u3044\u305F\u306E\u3067\u30C6\u30C8\u30EA\u30B9\u306E\u30DF\u30CE\u306F\u300C[]\u300D\u306E\u96C6\u5408\u3067\u8868\u73FE\u3055\u308C\u3066\u3044\u307E\u3057\u305F\\n\u3053\u308C\u304C\u9AA8\u306E\u3088\u3046\u306B\u898B\u3048\u308B\u306E\u3067\u9AA8\u30D6\u30ED\u30C3\u30AF\u3068\u547C\u3070\u308C\u3066\u3044\u307E\u3059\\n\\nTechmino\u3067\u306F\u9AA8\u30D6\u30ED\u30C3\u30AF\u3092\u300C\u5168\u3066\u306E\u30DF\u30CE\u304C\u4F7F\u7528\u3067\u304D\u308B\u30DF\u30CE\u30B9\u30AD\u30F3\u300D\u3068\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u307E\u3059\\n\u30DF\u30CE\u30B9\u30AD\u30F3\u304C\u7570\u306A\u308B\u5834\u5408\u3001\u9AA8\u30D6\u30ED\u30C3\u30AF\u306E\u30B9\u30BF\u30A4\u30EB\u3082\u7570\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059",
    },
    {"Semi-invisible(\u30BB\u30DF\u30A4\u30F3\u30D3\u30B8\u30D6\u30EB)",
        "half invisible semi \u30BB\u30DF \u534A \u30A4\u30F3\u30D3\u30B8\u30D6\u30EB \u900F\u660E",
        "term",
        "\u6642\u9593\u304C\u7D4C\u904E\u3059\u308B\u3068\u8A2D\u7F6E\u3055\u308C\u305F\u30DF\u30CE\u304C\u900F\u660E\u306B\u306A\u308B\u30EB\u30FC\u30EB\\n\u3053\u306E\u900F\u660E\u306B\u306A\u308B\u307E\u3067\u306E\u6642\u9593\u306F\u660E\u78BA\u3067\u306F\u306A\u3044\u306E\u3067\u300C\u6570\u79D2\u5F8C\u306B\u6D88\u3048\u308B\u300D\u3068\u8868\u73FE\u3057\u3066\u3082\u554F\u984C\u306A\u3044",
    },
    {"Invisible(\u30A4\u30F3\u30D3\u30B8\u30D6\u30EB)",
        "invisible \u900F\u660E \u30A4\u30F3\u30D3\u30B8\u30D6\u30EB",
        "term",
        "\u77AC\u6642\u306B\u8A2D\u7F6E\u3057\u305F\u30DF\u30CE\u304C\u900F\u660E\u306B\u306A\u308B\u30EB\u30FC\u30EB\\n\u6D88\u3048\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u3042\u308B\u30A4\u30F3\u30D3\u30B8\u30D6\u30EB\u30EB\u30FC\u30EB\u306E\u3053\u3068\u3092\u6307\u3059\u3053\u3068\u304C\u3042\u308B\u304C\u3001Techmino\u3067\u306F\u305D\u306E\u3088\u3046\u306A\u30EB\u30FC\u30EB\u306F\u7C21\u5358\u306B\u306A\u308A\u3059\u304E\u308B\u3068\u5224\u65AD\u3057\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306A\u3057\u306E\u30A4\u30F3\u30D3\u30B8\u30D6\u30EB\u30EB\u30FC\u30EB\u3092\u300CSudden Invisible\u300D\u3068\u8AAD\u3093\u3067\u3044\u307E\u3059",
    },
    {"MPH mode",
        "mph",
        "term",
        "\u751F\u6210\u6CD5\u5247\u306A\u3057(\u30E9\u30F3\u30C0\u30E0\u751F\u6210)\u3001\u30CD\u30AF\u30B9\u30C8\u306A\u3057\u3001\u30DB\u30FC\u30EB\u30C9\u306A\u3057\\n\u304B\u306A\u308A\u306E\u53CD\u5FDC\u901F\u5EA6\u304C\u8981\u6C42\u3055\u308C\u308B",
    },
    {"Input delay(\u5165\u529B\u9045\u5EF6)",
        "input delay \u5165\u529B \u9045\u5EF6 \u786C\u76F4 \u30C7\u30A3\u30EC\u30A4 \u6642\u9593",
        "term",
        "\u3069\u3093\u306A\u30C7\u30D0\u30A4\u30B9\u3067\u3082\u5165\u529B\u3057\u3066\u304B\u3089\u30B2\u30FC\u30E0\u306B\u53CD\u6620\u3055\u308C\u308B\u307E\u3067\u306B\u9045\u5EF6\u304C\u3042\u308A\u307E\u3059(\u901A\u5E38\u3001\u6570ms\uFF5E\u6570\u5341ms)\\n\u5165\u529B\u9045\u5EF6\u304C\u5927\u304D\u3059\u304E\u308B\u3068\u64CD\u4F5C\u306B\u9055\u548C\u611F\u3092\u899A\u3048\u307E\u3059\\n\u3053\u306E\u9045\u5EF6\u306F\u4F7F\u7528\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3084\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u6027\u80FD\u304C\u4E3B\u306A\u539F\u56E0\u3067\u3042\u308A\u3001\u6A5F\u5668\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30E2\u30FC\u30C9\u3092\u6709\u52B9(\u307E\u305F\u306F\u7701\u96FB\u529B\u30E2\u30FC\u30C9\u3092\u7121\u52B9)\u306B\u3057\u305F\u308A\u3001\u30E2\u30CB\u30BF\u30FC\u306E\u30B2\u30FC\u30DF\u30F3\u30B0\u30E2\u30FC\u30C9\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u8EFD\u6E1B\u3055\u308C\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093",
    },
    {"Secret Grade(\u88CFGM)",
        "larger than \u88CF gm \u30B8\u30B0\u30B6\u30B0",
        "term",
        "TGM\u30B7\u30EA\u30FC\u30BA\u306B\u767B\u5834\u3059\u308B\u30A4\u30FC\u30B9\u30BF\u30FC\u30A8\u30C3\u30B0\u30E2\u30FC\u30C9\\n19\u6BB5\u4F7F\u3063\u3066\u300C>\u300D\u306E\u5F62\u306B\u7A74\u3092\u4F5C\u308B\u3053\u3068\u3067\u30AF\u30EA\u30A2\u3068\u306A\u308B"..HDwiki, HDsearch.."Secret_Grade_Techniques",
    },
    {"Cold Clear",
        "cc coldclear ai bot \u30B3\u30FC\u30EB\u30C9",
        "term",
        "\u30C6\u30C8\u30EA\u30B9\u306Ebot\\n\u5143\u3005\u306FMinus Kelvin\u6C0F\u304C\u3077\u3088\u3077\u3088\u30C6\u30C8\u30EA\u30B9\u7528\u306B\u958B\u767A\u3057\u305Fbot\u3060\u304CTechmino\u3067\u306FAllspin\u3068TRS\u306B\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u6539\u826F\u3055\u308C\u3066\u3044\u308B",
    },
    {"ZZZbot",
        "ai bot zzztoj misamino",
        "term",
        "\u30C6\u30C8\u30EA\u30B9\u306Ebot\\n\u4E2D\u56FD\u306E\u30C6\u30C8\u30EA\u30B9\u30D7\u30EC\u30A4\u30E4\u30FC\u3001\u594F\u4E4B\u7AE0 (Z\xF2u Zh\u012B Zh\u0101ng)\u6C0F\u304C\u958B\u767A\u3057\u3001\u591A\u304F\u306E\u30B2\u30FC\u30E0\u3067\u52D5\u4F5C\u3059\u308B",
    },
	{"Zetris",
        "ai bot zetris misamino",
        "term",
        "\u30C6\u30C8\u30EA\u30B9\u306Ebot\\nmat\u6C0F\u304C\u3077\u3088\u3077\u3088\u30C6\u30C8\u30EA\u30B9\u7528\u306B\u958B\u767A\u3057\u305Fbot\\nmisamino\u3092\u5143\u306B\u958B\u767A\u3055\u308C\u305F\\n\u51DD\u8996\u306F\u3057\u3066\u306A\u3044\u304C\u53D7\u3051\u305F\u5F8C\u306B\u4E00\u5B9A\u6BB5\u4EE5\u4E0B\u306B\u306A\u308B\u653B\u6483\u306F\u5916\u3059\u3088\u3046\u306A\u4ED5\u69D8\u306B\u306A\u3063\u3066\u3044\u308B",
    },
	{"\u307B\u3044\u3053",
        "ai bot hoiko howyiko \u307B\u3090\u3053",
        "term",
        "\u30C6\u30C8\u30EA\u30B9\u306Ebot\\n\u3046\u304B\u3093\u6C0F\u304C\u3077\u3088\u3077\u3088\u30C6\u30C8\u30EA\u30B9\u7528\u306B\u958B\u767A\u3057\u305Fbot\\n\u76F8\u624B\u304B\u3089\u9001\u3089\u308C\u308B\u706B\u529B\u3092\u898B\u3066\u304A\u308A\u3001\u76F4\u5217\u306B\u306A\u308B\u78BA\u7387\u3068\u5F85\u3061\u6642\u9593\u304B\u3089\u76F8\u6BBA\u5916\u3057\u3092\u5224\u65AD\u3057\u3066\u3044\u308B",
    },
	{"wataame",
        "ai bot \u308F\u305F\u3042\u3081 watame",
        "term",
        "\u30C6\u30C8\u30EA\u30B9\u306Ebot\\n\u96E8\u5B89\u6C0F\u304C\u3077\u3088\u3077\u3088\u30C6\u30C8\u30EA\u30B9\u7528\u306B\u958B\u767A\u3057\u305Fbot\\n\u591A\u69D8\u306A\u30E2\u30FC\u30C9\u3092\u642D\u8F09\u3057\u3066\u3044\u308B",
    },


    -- Setups
    {"Openers(\u958B\u5E55\u30C6\u30F3\u30D7\u30EC)",
        "setup openers \u958B\u5E55 \u30C6\u30F3\u30D7\u30EC",
        "setup",
        "\u30B2\u30FC\u30E0\u958B\u59CB\u6642\u306B\u7D44\u3080\u30C6\u30F3\u30D7\u30EC\u306E\u3053\u3068\\n\u4E2D\u76E4\u3067\u3082\u4F5C\u308C\u308B\u3082\u306E\u304C\u3042\u308B\u304C\u5B8C\u5168\u306B\u540C\u3058\u306B\u306A\u308B\u3068\u306F\u9650\u3089\u306A\u3044\\n\u5F37\u3044\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\u306F\u57FA\u672C\u4EE5\u4E0B\u306E\u70B9\u3092\u6E80\u305F\u3057\u3066\u3044\u308B\\n1.\u5F37\u3044\u653B\u6483\u3092\u6301\u3061\u3001\u7A4D\u307F\u306B\u4F7F\u3063\u3066\u3044\u308BT\u306E\u5272\u5408\u304C\u4F4E\u3044\\n2.\u5FC5\u8981\u306A\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\u304C\u5C11\u306A\u3044\\n3.\u591A\u304F\u306E\u30DF\u30CE\u9806\u3067\u7D44\u3081\u308B\\n4.\u4E2D\u76E4\u3078\u79FB\u884C\u3057\u3084\u3059\u304F\u3001\u5206\u5C90\u304C\u5C11\u306A\u3044\\n\u307B\u3068\u3093\u3069\u306E\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\u306F\u901A\u5E387\u7A2E1\u5DE1\u3092\u5229\u7528\u3057\u3066\u4F5C\u3089\u308C\u3066\u3044\u308B\u305F\u3081\u306B\u5B89\u5B9A\u3057\u3066\u7D44\u3081\u308B",
    },
    {"DT Cannon(DT\u7832)",
        "dtcannon doubletriplecannon dt \u7832",
        "setup",
        "Double-Triple \u7832"..HDwiki,
        HDsearch.."dt",
    },
    {"DT\u30D1\u30D5\u30A7",
        "dtcannon doubletriplecannon \u30D1\u30D5\u30A7 \u30D1\u30FC\u30D5\u30A7\u30AF\u30C8 dt \u7832",
        "setup",
        "DT\u7832\u306E\u5F8C\u306B\u30D1\u30D5\u30A7\u3092\u53D6\u308B\u6D3E\u751F\u306E\u3053\u3068"..HDwiki,
        HDsearch.."double_triple_cannon_opener",
    },
    {"BT\u7832",
        "btcannon betacannon \u7832",
        "setup",
        "\u03B2\u7832, Beta\u7832"..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"BT\u30D1\u30D5\u30A7",
        "btcannon betacannon \u30EB\u30FC\u30D7 5 \u30D1\u30D5\u30A7",
        "setup",
        "BT\u7832\u306E\u5F8C\u306B\u30D1\u30D5\u30A7\u3092\u53D6\u308B\u6D3E\u751F\u306E\u3053\u3068"..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"TKI 3 Perfect Clear(DD\u30D1\u30D5\u30A7)",
        "ddpc tki3perfectclear d \u30D1\u30D5\u30A7 tsd tki",
        "setup",
        "\u958B\u5E55TSD\u304B\u3089\u3082\u3046\u4E00\u5EA6TSD\u3092\u6483\u3061\u3001\u30D1\u30D5\u30A7\u3092\u53D6\u308B\u30C6\u30F3\u30D7\u30EC"..HDwiki,
        HDsearch.."TKI_3_Perfect_Clear",
    },
	{"MKO\u7A4D\u307F",
        "mko \u3080\u3053\u3046\u307F\u305A",
        "setup",
        "\u6D3E\u751F\u3092\u542B\u3081\u308C\u3070\u5927\u4F53\u306E\u3053\u3068\u306F\u3067\u304D\u308B\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\\nHarddrop\u306Ewiki\u3092\u8F09\u305B\u308B\u304Cmko\u5168\u4F53\u306E\u5185\u30011\u5272\u3082\u60C5\u5831\u304C\u66F8\u304B\u308C\u3066\u3044\u306A\u3044\\n\u4F7F\u3044\u65B9\u304C\u304B\u306A\u308A\u91CD\u8981\u306A\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\u306A\u306E\u3067\u4F7F\u3046\u5834\u5408\u306F\u7A4D\u6975\u7684\u306B\u60C5\u5831\u53CE\u96C6\u3059\u308B\u3053\u3068\u3092\u304A\u3059\u3059\u3081\u3059\u308B",
        HDsearch.."MKO_Stacking",
    },
    {"QT\u7832",
        "qtcannon \u7832",
        "setup",
        "DT\u7832\u3088\u308A\u5B89\u5B9A\u3057\u3066TSD\u3068TST\u3092\u6483\u3066\u308B\u3088\u3046\u306B\u4F5C\u3089\u308C\u305F\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\\n\u305F\u3060\u3057\u4E0B\u7A74\u304C\u7AEF\u306B\u3042\u308B\u3068\u4E8C\u5DE1\u76EE\u304C\u7D44\u3081\u306A\u3044\\nTD\u6D3E\u751F\u304C\u3057\u3084\u3059\u3044",
        "https://tetrisopener.wicurio.com/index.php?QT%E7%A0%B2",
    },
    {"Mini-Triple(MT)",
        "mt minitriple \u30DF\u30CB \u30C8\u30EA\u30D7\u30EB ts",
        "setup",
        "TSM\u304B\u3089TST\u3092\u6483\u3064\u5F62",
        "https://knewjade.github.io/fumen-for-mobile/#?d=v115@tgB8IeA8DeD8AeH8BeH8BeG8CeE8JeAgWJAteEfEXU?b9ARAAAAvhG1bfdmfdrf1vBAAAdrBAAAtgB8IeA8DeD8AeG?8CeG8BeAAAeF8AeB8AeD8JeAAPJAteEfEXUb9ASAAAAvhF1?bfdmf1qfNqBAAAdrB",
    },
    {"Trinity(\u30C8\u30EA\u30CB\u30C6\u30A3)",
        "trinity \u30C8\u30EA\u30CB\u30C6\u30A3 tsd",
        "setup",
        "TSD3\u56DE\u304BTSM->TST->TSD\u3092\u6483\u3064\u30C6\u30F3\u30D7\u30EC",
        HDsearch.."trinity",
    },
    {"Wolfmoon Cannon",
        "wolfmooncannon \u7832",
        "setup",
        "\u5F62\u304C\u7279\u6B8A\u306A\u958B\u5E55\u30C6\u30F3\u30D7\u30EC"..HDwiki,
        HDsearch.."wolfmoon_cannon",
    },
    {"Sewer(TZT\u7832)",
        "sewer",
        "setup",
        "\u5F62\u304C\u7279\u6B8A\u306A\u958B\u5E55\u30C6\u30F3\u30D7\u30EC"..HDwiki,
        HDsearch.."sewer",
    },
    {"TKI",
        "tki-3 tki3 tsd c td",
        "setup",
        "\u958B\u5E55TSD\u3001\u307E\u305F\u306FTD\u306E\u5F62\u3092\u3057\u305FTKI\u3068\u3044\u3046\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\u3092\u6307\u3059(\u65E5\u672C\u3067\u306F\u5F8C\u8005\u306E\u65B9\u304C\u591A\u3044)\\n\u3053\u3053\u3067\u306F\u5F8C\u8005\u306E\u30EA\u30F3\u30AF\u3092\u7F6E\u3044\u3066\u304A\u304F"..HDwiki,
        HDsearch.."C-Spin",
    },
    {"God Spin",
        "godspin \u795E \u30B4\u30C3\u30C9",
        "setup",
        "\u6D3E\u624B\u306A\u958B\u5E55\u30C6\u30F3\u30D7\u30EC[\u3057\u304B\u3057\u5B9F\u969B\u306B\u4F7F\u3046\u306E\u306F\u96E3\u3057\u3044]\\nWindkey\u6C0F\u8003\u6848"..HDwiki,
        HDsearch.."godspin",
    },
    {"AlbatrossSP(\u30A2\u30EB\u30D0\u30C8\u30ED\u30B9SP)",
        "albatross \u30A2\u30EB\u30D0\u30C8\u30ED\u30B9 \u30A2\u30EB\u30D0 sp",
        "setup",
        "TSD->TST->TSD->\u30D1\u30D5\u30A7\u3092\u6483\u3064\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\\n\u307B\u3068\u3093\u3069\u306ET\u30DF\u30CE\u3092Tspin\u306B\u4F7F\u3046\u3001\u6D3E\u624B\u3067\u7D20\u65E9\u3044\u30C6\u30F3\u30D7\u30EC\u3067\u3059"..HDwiki,
        HDsearch.."Albatross_Special",
    },
    {"Pelican(\u7121\u540D\u7832)",
        "\u3046\u30FC\u307F\u3093 \u30A6\u30FC\u30DF\u30F3 \u7121\u540D \u3080\u3081\u3044",
        "setup",
        "\u65E5\u672C\u3067\u306F\u7121\u540D\u7832(3\u6587\u5B57\u3067\u300C\u3046\u30FC\u307F\u3093\u300D\u3068\u8AAD\u3080)\u3068\u547C\u3070\u308C\u308B\\n\u30A2\u30EB\u30D0\u30C8\u30ED\u30B9SP\u306B\u4F3C\u305F\u6D41\u308C\u3092\u6301\u3064\u958B\u5E55\u30C6\u30F3\u30D7\u30EC"..HDwiki,
        HDsearch.."Pelican",
    },
    {"Perfect Clear Opener(\u30D1\u30D5\u30A7\u7A4D\u307F)",
        "7piecepuzzle \u30D1\u30D5\u30A7 \u7A4D\u307F",
        "setup",
        "7\u30DF\u30CE\u7F6E\u3044\u305F\u5F8C\u3001\u30D1\u30D5\u30A7\u3092\u53D6\u308C\u308B\u78BA\u7387\u304C\u6700\u3082\u9AD8\u3044\u5F62\\n\u901A\u5E38\u306F\u30D1\u30D5\u30A7\u738761.2%\u3060\u304CI\u30DF\u30CE\u3092\u7F6E\u304B\u305A\u6B8B\u308A4\u30DF\u30CE\u304B\u3089\u30D1\u30D5\u30A7\u3092\u898B\u629C\u304F\u3053\u3068\u306784.6%\u307E\u3067\u30D1\u30D5\u30A7\u7387\u304C\u4E0A\u6607\u3059\u308B\\nTechmino\u306E\u30D1\u30D5\u30A7\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3067\u30B8\u30B0\u30B6\u30B0\u306E\u5F62\u304C\u51FA\u305F\u3089\u3053\u306E\u30C6\u30F3\u30D7\u30EC\u306E\u5F62\u3067\u3059"..HDwiki,
        HDsearch.."Perfect_Clear_Opener",
    },
    {"Grace System(\u30B0\u30EC\u30FC\u30B9\u30B7\u30B9\u30C6\u30E0)",
        "liuqiaoban gracesystem 1stpc \u30B0\u30EC\u30FC\u30B9 \u30D1\u30D5\u30A7",
        "setup",
        "6\u30DF\u30CE\u7F6E\u3044\u305F\u5F8C\u3001\u30D1\u30D5\u30A7\u304C\u53D6\u308C\u308B\u78BA\u7387\u304C\u6700\u3082\u9AD8\u3044\u5F62\\n\u30D1\u30D5\u30A7\u738788.57%\\n\u30D1\u30D5\u30A7\u30C1\u30E3\u30EC\u30F3\u30B8\u306E4\xD74\u306E\u5F62\u304C\u51FA\u305F\u3089\u3053\u306E\u30C6\u30F3\u30D7\u30EC\u306E\u5F62\u3067\u3059",
        "https://four.lol/perfect-clears/grace-system",
    },
    {"DPC",
        "DPC 3 1",
        "setup",
        "2\u9023\u30D1\u30D5\u30A7\u30848\u6BB5\u30D1\u30D5\u30A7(TD\u7CFB\u30C6\u30F3\u30D7\u30EC\u306E\u30D1\u30D5\u30A7\u3001SD\u30D1\u30D5\u30A7\u7B49)\u3092\u53D6\u3063\u305F\u5F8C\u306B\u4F59\u3063\u305F1\u30DF\u30CE\u3068\u305D\u306E\u5F8C\u306E2\u5DE1\u3092\u4F7F\u3063\u3066D\u30D1\u30D5\u30A7\u3001\u3082\u3057\u304F\u306FDD\u30D1\u30D5\u30A7\u3092\u53D6\u308B\u30C6\u30F3\u30D7\u30EC\\n\u5358\u7D14\u306BD\u30D1\u30D5\u30A7\u3092\u53D6\u308B\u5834\u5408\u306F\u307B\u307C100%\u30D1\u30D5\u30A7\u304C\u53D6\u308C\u308B",
        "https://tetristemplate.info/dpc/",
    },
    {"Gamushiro Stacking(\u30AC\u30E0\u30B7\u30ED\u7A4D\u307F)",
        "gamushiro \u30AC\u30E0\u30B7\u30ED td",
        "setup",
        "TD\u30D1\u30D5\u30A7\u7CFB\u7D71\u306E\u30C6\u30F3\u30D7\u30EC\u3067\u6700\u521D\u306B\u4F5C\u3089\u308C\u305F\u958B\u5E55TD\u30C6\u30F3\u30D7\u30EC"..HDwiki,
        HDsearch.."Gamushiro_Stacking",
    },

    -- Pattern
    {"Mid-game Setups(\u4E2D\u76E4\u30C6\u30F3\u30D7\u30EC)",
        "midgamesetups \u4E2D\u76E4",
        "pattern",
        "\u4E2D\u76E4\u3067\u4F7F\u308F\u308C\u308B\u30C6\u30F3\u30D7\u30EC\u306E\u3053\u3068\\n\u4E2D\u306B\u306F\u958B\u5E55\u30C6\u30F3\u30D7\u30EC\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u308B\u3082\u306E\u304C\u3042\u308B",
    },
    {"TD",
        "cspin tki td",
        "pattern",
        "TST->TSD\u3068\u6483\u3066\u308B\u5F62"..HDwiki,
        HDsearch.."Triple Double_Attack_Setups",
    },
    {"STSD",
        "stsd",
        "pattern",
        "Super T-Spin Double\\n2\u56DETSD\u3092\u6483\u3066\u308B\u5F62\\n\u3057\u304B\u3057\u76E4\u9762\u306E\u5E95\u306B\u4F5C\u3063\u305F\u5834\u5408\u3001\u76F8\u624B\u304B\u3089\u306E\u4E0B\u7A74\u306B\u3088\u308A1/10\u306E\u78BA\u7387\u3067\u6700\u521D\u306ETSD\u304C\u6483\u3066\u306A\u304F\u306A\u308B\\n\u3053\u306E\u78BA\u7387\u306F100%\u3068\u8A00\u3046\u4EBA\u3082\u3044\u308B"..HDwiki,
        HDsearch.."stsd",
    },
    {"STMB Cave(STMB\u30B1\u30A4\u30D6)",
        "stmb \u30B1\u30A4\u30D6 \u30C9\u30CD\u30A4\u30C8",
        "pattern",
        "\u5E453\u304C\u3042\u308B\u6642\u306BS(Z)\u3092\u58C1\u306B\u5F15\u3063\u639B\u3051\u3066TSD\u30C9\u30CD\u30A4\u30C8\u3092\u4F5C\u308B\u30C6\u30F3\u30D7\u30EC\\nSTMB\u306F\u30C6\u30C8\u30EA\u30B9DS\u6642\u4EE3\u306E\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u540D\u524D"..HDwiki,
        HDsearch.."stmb_cave",
    },
    {"Fractal(\u30C0\u30D6\u30EB\u30C0\u30AC\u30FC)",
        "shuangrenjian fractal spider \u30C0\u30D6\u30EB 2 \u30C0\u30AC\u30FC \u30D5\u30E9\u30AF\u30BF\u30EB \u30C0\u30D6\u30C0",
        "pattern",
        "TSD\u306E\u4E0A\u306BTSD\u304C\u4E57\u3063\u305F\u5F62\\nS(Z)\u304C\u5F15\u3063\u639B\u304B\u3063\u3066TSD\u304C2\u3064\u3067\u304D\u3066\u308B\u5834\u5408\u306FSTMB\u30B1\u30A4\u30D6\u3068\u306A\u308A\u3001\u5F15\u3063\u639B\u3051\u3066\u304A\u3089\u305A1\u3064\u306E\u5C4B\u6839\u30672\u56DETSD\u3092\u6483\u3066\u308B\u5834\u5408\u306F\u30C0\u30D6\u30EB\u30C0\u30AC\u30FC\u3068\u306A\u308B"..HDwiki,
        HDsearch.."Fractal",
    },
    {"LST stacking(LST\u7A4D\u307F)",
        "lst \u7A4D\u307F",
        "pattern",
        "\u534A\u6C38\u4E45\u7684\u306BTSD\u3068\u30C6\u30C8\u30EA\u30B9\u3092\u3057\u7D9A\u3051\u308B\u7A4D\u307F\u65B9",
        "https://four.lol/stacking/lst",
    },
    {"Hamburger(\u30CF\u30F3\u30D0\u30FC\u30AC\u30FC)",
        "hamburger \u30CF\u30F3\u30D0\u30FC\u30B0 \u30CF\u30F3\u30D0\u30FC\u30AC\u30FC",
        "pattern",
        "S(Z)\u3067TSS\u3092\u3059\u308B\u30C9\u30CD\u30A4\u30C8\u30C6\u30F3\u30D7\u30EC\\n\u534A\u6C38\u4E45\u7684\u306BTSS\u3068\u30C6\u30C8\u30EA\u30B9\u304C\u3067\u304D\u308B\\n\u5F53\u521D\u306FS\u3092\u4F7F\u3063\u305F\u5834\u5408\u3092\u30CF\u30F3\u30D0\u30FC\u30AC\u30FC\u3001Z\u3092\u4F7F\u3063\u305F\u5834\u5408\u3092\u30CF\u30F3\u30D0\u30FC\u30B0\u3068\u8A00\u3063\u3066\u3044\u305F\u304C\u5EC3\u308C\u305F"..HDwiki,
        HDsearch.."hamburger",
    },
    {"Imperial Cross(\u30A4\u30F3\u30DA\u30EA\u30A2\u30EB\u30AF\u30ED\u30B9)",
        "imperialcross \u30A4\u30F3\u30DA\u30EA",
        "pattern",
        "\u5341\u5B57\u4E0A\u306E\u7A74\u306B\u5C4B\u6839\u3092\u4ED8\u3051\u30662\u56DETSD\u3092\u3059\u308B\u5F62"..HDwiki,
        HDsearch.."imperial_cross",
    },
    {"Kaidan(\u968E\u6BB5\u30C9\u30CD\u30A4\u30C8)",
        "jieti kaidan stairs \u968E\u6BB5",
        "pattern",
        "\u6BB5\u3005\u306B\u306A\u3063\u3066\u3044\u308B\u5730\u5F62\u306BS(Z)\u3092\u7F6E\u304F\u3053\u3068\u3067TSD\u5730\u5F62\u3092\u4F5C\u308B\u30C9\u30CD\u30A4\u30C8\u30C6\u30F3\u30D7\u30EC"..HDwiki,
        HDsearch.."kaidan",
    },
    {"Shachiku Train(\u793E\u755C\u30C8\u30EC\u30A4\u30F3)",
        "shachikutrain shechu \u793E\u755C \u30C8\u30EC\u30A4\u30F3",
        "pattern",
        "2\u56DETSD\u3092\u6483\u3064\u30C6\u30F3\u30D7\u30EC\\n\u30C6\u30F3\u30D7\u30EC\u540D\u306F\u5236\u4F5C\u8005\u304C\u6E80\u54E1\u96FB\u8ECA\u3067\u601D\u3044\u4ED8\u3044\u305F\u3053\u3068\u306B\u7531\u6765\u3059\u308B"..HDwiki,
        HDsearch.."Shachiku_Train",
    },
    {"Cut Copy",
        "qianniao cutcopy \u5343\u9CE5 \u30AB\u30C3\u30C8",
        "pattern",
        "Tspin\u5730\u5F62\u304C\u3042\u308B\u6642\u306B\u3055\u3089\u306BTspin\u3067\u304D\u308B\u3088\u3046\u306A\u5730\u5F62\u3092\u4F5C\u308B\u3053\u3068\\n\u5343\u9CE5\u683C\u5B50\u306F\u3053\u306E\u6280\u8853\u3092\u4F7F\u3063\u305F\u4E2D\u76E4\u30C6\u30F3\u30D7\u30EC"..HDwiki,
        HDsearch.."Cut_copy",
    },
    {"King Crimson(\u30AD\u30F3\u30B0\u30AF\u30EA\u30E0\u30BE\u30F3)",
        "kingcrimson \u30AD\u30F3\u30AF\u30EA \u30AD\u30F3\u30B0 jojo \u30B8\u30E7\u30B8\u30E7",
        "pattern",
        "STSD\u306E\u4E0A\u306BTST\u3092\u8DB3\u3057\u305F\u30C6\u30F3\u30D7\u30EC"..HDwiki,
        HDsearch.."King_Crimson",
    },
    {"\u9023\u30D1\u30D5\u30A7(1/2)",
        "pcloop \u30D1\u30D5\u30A7 \u30EB\u30FC\u30D7 \u9023",
        "pattern",
        "\u30C6\u30C8\u30EA\u30B9\u5802\u306B\u30661\uFF5E5\u56DE\u76EE\u30687\u56DE\u76EE\u306E\u30D1\u30D5\u30A7\u306B\u3064\u3044\u3066\u8A73\u3057\u304F\u77E5\u308C\u307E\u3059\\n7\u56DE\u76EE\u306E\u30D1\u30D5\u30A7\u304C\u30AD\u30EC\u30A4\u306B\u7D42\u308F\u308B\u3068\u4E01\u5EA670\u30DF\u30CE\u3001\u3064\u307E\u308A10\u5DE1\u7D42\u308F\u3063\u305F\u3053\u3068\u306B\u306A\u308A\u30B2\u30FC\u30E0\u958B\u59CB\u6642\u3068\u540C\u3058\u72B6\u614B\u306B\u306A\u308A\u307E\u3059",
        "https://shiwehi.com/tetris/template/consecutivepc.php",
    },
    {"\u9023\u30D1\u30D5\u30A7(2/2)",
        "pcloop \u30D1\u30D5\u30A7 \u30EB\u30FC\u30D7 \u9023",
        "pattern",
        "four.lol\u306B1\uFF5E7\u56DE\u76EE\u306E\u30D1\u30D5\u30A7\u306B\u3064\u3044\u3066\u8A73\u3057\u304F\u77E5\u308C\u307E\u3059",
        "https://four.lol/perfect-clears/5th",
    },

    -- Savedata managing
    {"Console(\u30B3\u30F3\u30BD\u30FC\u30EB)",
        "cmd commamd minglinghang kongzhitai terminal \u30B3\u30F3\u30BD\u30FC\u30EB \u30BF\u30FC\u30DF\u30CA\u30EB \u30B3\u30F3\u30BD\u30FC\u30EB console",
        "command",
        "Techmino\u306B\u306F\u30C7\u30D0\u30C3\u30B0\u3084\u9AD8\u5EA6\u306A\u6A5F\u80FD\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306E\u30B3\u30F3\u30BD\u30FC\u30EB\u304C\u3042\u308A\u307E\u3059\\n\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u306F\u30E1\u30A4\u30F3\u753B\u9762\u306ETechmino\u306E\u30ED\u30B4\u3092\u9023\u6253\u3059\u308B\u304B\u30E1\u30A4\u30F3\u753B\u9762\u3067\u300CC\u300D\u3092\u9023\u6253\u3059\u308B\u3053\u3068\u3067\u79FB\u52D5\u3067\u304D\u307E\u3059\\n\u30B3\u30F3\u30BD\u30FC\u30EB\u306E\u4F7F\u7528\u306F\u81EA\u5DF1\u8CAC\u4EFB\u3067\u3059",
    },
    {"Reset setting",
        "reset setting \u30EA\u30BB\u30C3\u30C8 \u8A2D\u5B9A",
        "command",
        "\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u300Crm conf/setting\u300D\u3068\u5165\u529B\u3057\u3001Enter\u3082\u3057\u304F\u306Freturn\u3092\u62BC\u3059\\n\u305D\u3057\u3066Techmino\u3092\u518D\u8D77\u52D5\u3059\u308B\u3068\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\\n\u3053\u308C\u3092\u3059\u308B\u3068\u8A2D\u5B9A\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059",
    },
    {"Reset statistics",
        "reset statistic data \u30EA\u30BB\u30C3\u30C8 \u7D71\u8A08 \u30C7\u30FC\u30BF",
        "command",
        "\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u300Crm conf/data\u300D\u3068\u5165\u529B\u3057\u3001Enter\u3082\u3057\u304F\u306Freturn\u3092\u62BC\u3059\\n\u305D\u3057\u3066Techmino\u3092\u518D\u8D77\u52D5\u3059\u308B\u3068\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\\n\u3053\u308C\u3092\u3084\u308B\u3068\u7D71\u8A08\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059",
    },
    {"Reset unlock",
        "reset unlock \u30EA\u30BB\u30C3\u30C8 \u672A\u958B\u5C01",
        "command",
        "\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u300Crm conf/unlock\u300D\u3068\u5165\u529B\u3057\u3001Enter\u3082\u3057\u304F\u306Freturn\u3092\u62BC\u3059\\n\u305D\u3057\u3066Techmino\u3092\u518D\u8D77\u52D5\u3059\u308B\u3068\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\\n\u3053\u308C\u3092\u3084\u308B\u30681\u4EBA\u7528\u30E2\u30FC\u30C9\u306E\u30E9\u30F3\u30AF\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059",
    },
    {"Reset records",
        "reset record \u30EA\u30BB\u30C3\u30C8 \u30EC\u30B3\u30FC\u30C9 \u8A18\u9332",
        "command",
        "\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u300Crm -s record\u300D\u3068\u5165\u529B\u3057\u3001Enter\u3082\u3057\u304F\u306Freturn\u3092\u62BC\u3059\\n\u305D\u3057\u3066Techmino\u3092\u518D\u8D77\u52D5\u3059\u308B\u3068\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\\n\u3053\u308C\u3092\u3084\u308B\u3068\u8A18\u9332\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059",
    },
    {"Reset key",
        "reset virtualkey \u30EA\u30BB\u30C3\u30C8 \u30AD\u30FC \u4EEE\u60F3",
        "command",
        "\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u300Crm conf/[keyFile]\u300D(\u30AD\u30FC\u30DC\u30FC\u30C9:key\u3001\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9:virtualkey\u3001\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3092\u4FDD\u5B58:vkSave1(2))\u3068\u5165\u529B\u3057\u3001Enter\u3082\u3057\u304F\u306Freturn\u3092\u62BC\u3059\\n\u305D\u3057\u3066\u30AD\u30FC\u30DC\u30FC\u30C9\u3068\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u5834\u5408\u306F\u518D\u8D77\u52D5\u3059\u308B\u3068\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\\n\u4EEE\u60F3\u30AD\u30FC\u30DC\u30FC\u30C9\u8A2D\u5B9A\u4FDD\u5B58\u306E\u5834\u5408\u306FEnter\u3082\u3057\u304F\u306Freturn\u3092\u62BC\u3057\u305F\u6642\u306B1\u3064\u30D5\u30A1\u30A4\u30EB\u304C\u51FA\u529B\u3055\u308C\u307E\u3059",
    },
    {"Delete replays",
        "delete recording \u524A\u9664 \u6D88\u53BB \u30EA\u30BB\u30C3\u30C8 \u30C7\u30EA\u30FC\u30C8 \u30EA\u30D7\u30EC\u30A4",
        "command",
        "\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u300Crm -s replay\u300D\u3068\u5165\u529B\u3057\u3001Enter\u3082\u3057\u304F\u306Freturn\u3092\u62BC\u3059\u3068\u5373\u5EA7\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\\n\u30EA\u30D7\u30EC\u30A4\u30C7\u30FC\u30BF\u3092\u6D88\u3057\u307E\u3059",
    },
    {"Delete cache",
        "delete cache \u6D88\u53BB \u524A\u9664 \u30EA\u30BB\u30C3\u30C8 \u30C7\u30EA\u30FC\u30C8 \u30AD\u30E3\u30C3\u30B7\u30E5",
        "command",
        "\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u300Crm -s cache\u300D\u3068\u5165\u529B\u3057\u3001Enter\u3082\u3057\u304F\u306Freturn\u3092\u62BC\u3059\u3068\u5373\u5EA7\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\\n\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u6D88\u3057\u307E\u3059",
    },

    -- English
    {"SFX",
        "soundeffects \u52B9\u679C\u97F3",
        "english",
        "\u65E5\u672C\u8A9E\u3067\u300C\u52B9\u679C\u97F3\u300D\u3084\u300CSE\u300D\u3068\u8A00\u308F\u308C\u308B\u3082\u306E",
    },
    {"BGM",
        "backgroundmusic \u97F3\u697D",
        "english",
        "\u30B2\u30FC\u30E0\u4E2D\u306B\u6D41\u308C\u3066\u3044\u308B\u97F3\u697D\u306E\u3053\u3068",
    },
    {"TAS",
        "tas",
        "english",
        "\u300CTool-Assisted Speedrun (Superplay)\u300D\u306E\u7565\\n\u30B2\u30FC\u30E0\u306E\u30EB\u30FC\u30EB\u3092\u7834\u308B\u3053\u3068\u306A\u304F\u7279\u6B8A\u306A\u30C4\u30FC\u30EB\u3092\u7528\u3044\u3066\u30D7\u30EC\u30A4\u3059\u308B\u3053\u3068\\n\u9014\u4E2D\u30BB\u30FC\u30D6\u3084\u30B2\u30FC\u30E0\u5185\u6642\u9593\u306E\u9032\u307F\u3092\u5F04\u308B\u7B49\u3057\u3066\u6700\u9AD8\u5F97\u70B9\u3092\u51FA\u3057\u305F\u308A\u30E6\u30CB\u30FC\u30AF\u306A\u76EE\u6A19\u3092\u9054\u6210\u3057\u3066\u3044\u308B\\n\u7C21\u5358\u306ATAS\u306FTechmino\u306B\u5185\u8535\u3055\u308C\u3066\u3044\u308B",
    },
    {"AFK",
        "afk",
        "english",
        "Away From Keyboard\u306E\u7565\\n\u753B\u9762\u524D\u304B\u3089\u96E2\u308C\u308B\u6642\u3060\u3051\u3058\u3083\u306A\u304F\u3001\u4F11\u61A9\u3059\u308B\u3068\u304D\u306B\u3082\u4F7F\u308F\u308C\u308B\\n\u9069\u5EA6\u306B\u4F11\u61A9\u3059\u308B\u3053\u3068\u3067\u8EAB\u4F53\u3068\u982D\u304C\u4F11\u307F\u3001\u3088\u308A\u8CEA\u306E\u9AD8\u3044\u30D7\u30EC\u30A4\u304C\u3067\u304D\u308B",
    },
	{"BRB",
        "brb",
        "english",
        "Be right back\u306E\u7565\\n\u4E00\u65E6\u96E2\u308C\u308B\u3051\u3069\u3059\u3050\u306B\u623B\u308B\u3068\u304D\u306B\u4F7F\u308F\u308C\u308B\\n\u4EBA\u306B\u3088\u3063\u3066\u306F\u8A66\u5408\u4E2D\u306Bbrb\u3068\u3044\u3046\u304C\u7D50\u5C40\u30BB\u30C3\u30C8\u304C\u7D42\u308F\u308B\u307E\u3067\u623B\u3089\u306A\u3044\u4EBA\u3082\u3044\u308B",
    },
	{"sweep",
        "sweep \u30B9\u30C8\u30EC\u30FC\u30C8",
        "english",
        "\u65E5\u672C\u8A9E\u3067\u8A00\u3046\u30B9\u30C8\u30EC\u30FC\u30C8\u306E\u3053\u3068\\n\u4F8B\u3048\u3070\u30017\u5148\u306E\u8A66\u5408\u30671\u672C\u3082\u53D6\u3089\u308C\u305A\u306B\u52DD\u5229\u3057\u305F\u5834\u5408\u3001\u76F8\u624B\u3092sweep\u3057\u305F\u3068\u8A00\u3046",
    },
    {"Timing",
        "timing shiji fanji \u30BF\u30A4\u30DF\u30F3\u30B0",
        "term",
        "\u4E3B\u306B\u653B\u6483\u3092\u3059\u308B\u30BF\u30A4\u30DF\u30F3\u30B0\u306E\u3053\u3068\\n\u653B\u6483\u3092\u3059\u308B\u30BF\u30A4\u30DF\u30F3\u30B0\u3092\u8003\u3048\u308B\u3053\u3068\u3067\u76F8\u624B\u304B\u3089\u306E\u653B\u6483\u3092\u76F8\u6BBA\u3057\u305F\u308A\u3001\u9006\u306B\u76F8\u6BBA\u3092\u5916\u3057\u3066\u81EA\u5206\u306E\u653B\u6483\u3092\u76F8\u624B\u306B\u9001\u308C\u305F\u308A\u3067\u304D\u307E\u3059\\n\u8981\u306F\u76F8\u6BBA\u7BA1\u7406\u306E1\u3064\u3067\u3059",
    },
}
`,dict_zh=`local HDsearch="https://harddrop.com/wiki?search="
local HDwiki="\\n\u66F4\u591A\u5185\u5BB9\u89C1Hard Drop Wiki\u3002"
return {
    {"\u65B0\u4EBA\u987B\u77E5",
        "\u8BFB\u6211 \u5FC5\u8BFB \u840C\u65B0 xinren new noob readme",
        "help",
        "\u81F4\u60F3\u6DF1\u5165\u73A9\u4E0B\u53BB\u7684\u65B0\u4EBA\uFF1A\\n\\n\\t\u4E24\u5927\u6839\u672C\u539F\u5219\uFF1A\\n\\t\\t1. \u9009\u624B\u611F\u597D\u7684\u7248\u672C\uFF08Tech/Tetr.io/Jstris/TOP/Tetr.js\uFF09\uFF0C\u522B\u7528\u7F16\u7A0B\u7EC3\u4E60\u6E23\u7248\u672C\\n\\t\\t2. \u8E0F\u5B9E\u6253\u597D\u57FA\u7840\uFF08\u9884\u5224next\u7A33\u5B9A\u6D88\u56DB\u7B49\uFF09\uFF0C\u522B\u603B\u60F3\u7740\u70AB\u9177T\u65CB\uFF0C\u5BF9\u672A\u6765\u5B9E\u529B\u63D0\u5347\u6CA1\u597D\u5904\u3002\\n\\t\u4E24\u5927\u4E3B\u8981\u6280\u5DE7\uFF1A\\n\\t\\t1. \u719F\u6089\u521D\u59CB\u4F4D\u7F6E\u4EE5\u53CA\u5230\u5404\u4E2A\u4F4D\u7F6E\u7684\u521D\u59CB\u64CD\u4F5C\uFF1B\\n\\t\\t2. \u63D0\u524D\u8BA1\u7B97\u597D\u4E0B\u4E00\u5757\u80FD\u653E\u54EA\u3002\\n\\n\u63A8\u8350\u9605\u8BFB\u4E13\u680F\u300A\u7ED9TOP\u65B0\u4EBA\u7684\u51E0\u70B9\u5EFA\u8BAE\u300B\\n\\n[\u70B9\u51FB\u53F3\u4E0B\u89D2\u5730\u7403\u6309\u94AE\u6253\u5F00\u94FE\u63A5]",
        "https://bilibili.com/read/cv2352939",
    },
    {"\u65B0\u4EBA\u5B66\u4E60/\u7EC3\u4E60\u8DEF\u7EBF",
        "\u8BFB\u6211 \u5FC5\u8BFB \u840C\u65B0 xinren new noob readme",
        "help",
        "\u4EE5\u4E0B\u662F\u5173\u4E8E\u63D0\u5347\u771F\u6B63\u6253\u5757\u80FD\u529B\u7684\u6307\u5F15\uFF0C\u5982\u679C\u5728\u4EE5\u4E0B\u4EFB\u4F55\u9879\u76EE\u7EC3\u4E60\u8FC7\u7A0B\u4E2D\u611F\u5230\u6709\u56F0\u96BE\uFF0C\u53EF\u4EE5\u9002\u5F53\u56DE\u53BB\u73A9\u73A9\u81EA\u5DF1\u559C\u6B22\u7684\u9879\u76EE\u3002\u522B\u5FD8\u4E86\u4F60\u662F\u6765 \u201C\u73A9\u201D \u6E38\u620F\u7684\uFF0C\u5174\u8DA3\u6700\u91CD\u8981\u3002\\n\u4EE5\u4E0B\u7ED9\u51FA\u51E0\u4E2A\u65B0\u624B\u65F6\u671F\u7684\u4E3B\u7EBF\u4EFB\u52A1\u6811\uFF0C\u524D\u671F\u4E3B\u8981\u5C31\u5E94\u8BE5\u7EC3\u4E60\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5B66\u5B9A\u5F0F\u548CT-Spin\u4EC0\u4E48\u7684\u5BF9\u5B9E\u529B\u5E2E\u52A9\u5F88\u5C0F\uFF08\u6211\u4EEC\u4E0D\u8BA4\u4E3A\u9760\u5B9A\u5F0F\u5BF9\u6218\u79D2\u5176\u4ED6\u840C\u65B0\u662F\u6709\u6548\u5B9E\u529B\uFF09\uFF1A\\n\uFF08\u6CE8\u610F\uFF0C\u4E09\u6BB5\u5E94\u5F53\u540C\u65F6\u8FDB\u884C\uFF0C\u4E0D\u662FA\u2192B\u2192C\uFF09\\nA. \u5806\u53E0\u80FD\u529B\u7EC3\u4E60\u65B9\u6CD5\\n\\tA1. \u51B3\u5B9A\u624B\u4E0A\u7684\u5757\u653E\u54EA\u7684\u65F6\u5019\u5148\u522B\uFF0C\u770B\u770B\u4E0B\u4E00\u5757\u6709\u6CA1\u6709\u5730\u65B9\u653E\uFF0C\u5982\u679C\u653E\u4E0D\u4E0B\u53BB\uFF0C\u91CD\u65B0\u60F3\u624B\u4E0A\u7684\\n\\tA2. \u5C1D\u8BD5\u628A\u5730\u5F62\u5C3D\u91CF\u63A7\u5236\u5F97\u5E73\u6574\uFF0C\u56E0\u4E3A\u6BD4\u8F83\u5E73\u7684\u5730\u5F62\u6765\u5565\u5757\u90FD\u6BD4\u8F83\u5BB9\u6613\u653E\u5F97\u4E0B\u53BB\\nB. \u64CD\u4F5C\u6548\u7387\u4E0E\u901F\u5EA6\u7EC3\u4E60\u65B9\u6CD5\\n\\tB1. \u4E0D\u8981\u6BCF\u4E00\u5757\u90FD\u62FF\u5F71\u5B50\u53BB\u5BF9\u5F62\u72B6\u5BF9\u4F4D\u7F6E\uFF0C\u8981\u81EA\u5DF1\u60F3\u8C61\u8FD9\u4E2A\u5757\u8F6C\u4E00\u4E0B\u662F\u4EC0\u4E48\u65B9\u5411\uFF0C\u60F3\u597D\u4E86\u518D\u5F00\u59CB\u6309\u6309\u952E\\n\\tB2. \u5B66\u4E60\u53CC\u65CB\uFF0C\u80FD\u9006\u65F6\u9488\u8F6C\u4E00\u6B21\u5C31\u4E0D\u8981\u987A\u65F6\u9488\u8F6C\u4E09\u6B21\uFF0C\u8D39\u624B\\n\\tB3. \u5B66\u4E60\u6781\u7B80\uFF0C\u521A\u5F00\u59CB\u4E0D\u7528\u7BA1\u901F\u5EA6\uFF0C\u4FDD\u8BC1\u6B63\u786E\u7387\u6700\u91CD\u8981\uFF0C\u517B\u6210\u826F\u597D\u4E60\u60EF\u4EE5\u540E\u518D\u63D0\u901F\u5FEB\u5F97\u5F88\\nC. \u5806\u53E0\u80FD\u529B\u8003\u6838\\n\\tC1. \u7A33\u5B9A\u5B8C\u621040\u884C\u4E0D\u6B7B\uFF08\u53EF\u4EE5\u7528hold\uFF09\\n\\tC2. \u7A33\u5B9A\u5B8C\u621040\u884C\u4E0D\u6B7B\uFF08\u4E0D\u80FD\u7528hold\uFF09\\n\\tC3. \u7A33\u5B9A\u5168\u6D88\u56DB\u5B8C\u621040\u884C\uFF08\u53EF\u4EE5\u7528hold\uFF09\\n\\tC4. \u7A33\u5B9A\u5168\u6D88\u56DB\u5B8C\u621040\u884C\uFF08\u4E0D\u80FD\u7528hold\uFF09\\n\u4EE5\u4E0A\u90FD\u662F\u6839\u636E\u793E\u533A\u548C\u4E2A\u4EBA\u7ECF\u9A8C\u603B\u7ED3\u7684\u6A21\u7CCA\u65B9\u6CD5\u4E0E\u76EE\u6807\uFF0C\u6240\u4EE5C\u7684\u8003\u6838\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u60C5\u51B5\u8C03\u6574\u4E25\u683C\u7A0B\u5EA6\uFF08\u4F8B\u5982 \u201C\u7A33\u5B9A\u201D \u7684\u5177\u4F53\u6210\u529F\u7387\uFF09\u3002\\n\u6CE8\uFF1A\u5B8C\u6210C\u7684\u8003\u6838\u540E\uFF0C\u9700\u8981\u5728\u672A\u6765\u4E00\u76F4\u6CE8\u610F\u6CA1\u6709\u4E0A\u9650\u7684A1\uFF0C\u8FD9\u662F\u65B9\u5757\u7684\u6839\u672C\u5143\u7D20\u4E4B\u4E00\uFF0C\u5F3A\u5927\u7684\u8BFBnext\u80FD\u529B\u53EF\u4EE5\u8BA9\u4F60\u5FEB\u901F\u4E0A\u624B\u4EFB\u4F55\u53D8\u79CD\u73A9\u6CD5\u3002",
    },
    {"\u5173\u4E8ET-spin\u5B66\u4E60",
        "T\u65CB T\u8F6C tspins",
        "help",
        "\u9996\u5148\u6307\u51FA\uFF1A\u8981\u80FD\u719F\u7EC3\u505A\u51FA\u5404\u79CDT-spin\u5E76\u4E0D\u662F\u53EA\u770B\u7740T-spin\u7684\u90A3\u4E00\u5C0F\u90E8\u5206\u5730\u5F62\u5C31\u53EF\u4EE5\u73A9\u597D\u7684\uFF0C\u5BF9\u73A9\u5BB6\u5806\u53E0\u80FD\u529B\u548C\u8BA1\u7B97next\u80FD\u529B\u540C\u6837\u4E5F\u6709\u8F83\u9AD8\u7684\u8981\u6C42\u3002\\n\\n\u5982\u679C\u4E0D\u53EA\u662F\u51FA\u4E8E\u5A31\u4E50\u3001\u968F\u4FBF\u73A9\u73A9\u7684\u76EE\u7684\uFF0C\u662F\u771F\u7684\u60F3\u4E0D\u65AD\u63D0\u5347T-spin\u80FD\u529B\u53D8\u5F3A\uFF0C\u8BF7\u5728\u57FA\u7840\u80FD\u529B\u8FBE\u5230\u4E00\u5B9A\u8981\u6C42\u524D\u4E0D\u8981\u523B\u610F\u53BB\u5B66\u4E60\u592A\u591A\u7684T-spin\uFF0C\u800C\u5148\u628A\u91CD\u70B9\u653E\u5728\u5806\u53E0\u7B49\u57FA\u672C\u529F\u4E0A\u3002\\n\\n\u53C2\u8003\u5B66T\u95E8\u69DB\u6C34\u5E73\uFF1A40L\u8FBE\u523060s\u4EE5\u5185\uFF08\u53EF\u4EE5\u89C6\u4E2A\u4EBA\u60C5\u51B5\u8C03\u6574\u4E3A40~120s\uFF09\u3001\u80FD\u591F\u8F7B\u677E\u5B8C\u6210\u5168\u6D88\u56DB\u768440L\u3001\u4E0D\u4F7F\u7528Hold\u4E0D\u964D\u592A\u591A\u901F\u5EA6\u7684\u524D\u63D0\u4E0B\u6BD4\u8F83\u8F7B\u677E\u5B8C\u6210\u5168\u6D88\u56DB\u768440L\u3002",
    },
    {"\u6E38\u620F\u5B98\u7F51",
        "official website homepage mainpage guanwang",
        "help",
        "Techmino\u7684\u5B98\u7F51\uFF01\\n\u53EF\u4EE5\u5728\u4E0A\u9762\u4E0B\u8F7D\u6E38\u620F\u672C\u4F53\uFF0C\u6216\u8005\u4FEE\u6539\u5934\u50CF\u4EE5\u53CA\u4E2A\u4EBA\u4FE1\u606F\u3002\\n\\n\u6E38\u620F\u4F5C\u8005\u7684\u4E00\u4E9B\u8BDD\uFF1A\u5F3A\u70C8\u4E0D\u5EFA\u8BAE\u5728\u4EFB\u4F55\u516C\u5F00\u573A\u5408\u63D0\u53CA\u751A\u81F3\u5BA3\u4F20Techmino\uFF0C\u66F4\u4E0D\u8981\u968F\u4FBF\u5C31\u5BF9\u5916\u516C\u5E03\u6211\u4EEC\u7684\u5B98\u7F51\u94FE\u63A5\uFF01\u8BF7\u52A1\u5FC5\u53EA\u5728\u79C1\u4E0B\u91CC\u5411\u6709\u57FA\u7840\u6216\u771F\u7684\u5F88\u6709\u5174\u8DA3\u5165\u5751\u8BA4\u771F\u73A9\u7684\u73A9\u5BB6\u63A8\u8350\uFF0C\u4E0D\u7136\u5F88\u5BB9\u6613\u62C9\u4F4E\u793E\u7FA4\u8D28\u91CF\u7834\u574F\u4EA4\u6D41\u6C1B\u56F4\uFF0C\u975E\u5E38\u96BE\u5904\u7406\uFF0C\u751A\u81F3\u6709\u53EF\u80FD\u5F71\u54CD\u6E38\u620F\u7684\u672A\u6765\u53D1\u5C55\u3002\u4E3A\u4E86\u4FDD\u8BC1\u6E38\u620F\u672A\u6765\u4F1A\u53D8\u5F97\u8D8A\u6765\u8D8A\u597D\u73A9\uFF0C\u5343\u4E07\u614E\u91CD\u8003\u8651\u60A8\u5BF9\u6E38\u620F\u7684\u63A8\u5E7F\u65B9\u5F0F\uFF01\u611F\u8C22\u60A8\u5BF9Techmino\u7684\u652F\u6301\uFF01\uFF01\u611F\u8C22\u914D\u5408\uFF01\uFF01\uFF01",
        "http://101.43.110.22:10026",
    },
    {"\u7070\u673AWiki",
        "huiji",
        "help",
        "\u4FC4\u7F57\u65AF\u65B9\u5757\u4E2D\u6587\u7EF4\u57FA\uFF0C\u7531\u4E00\u7FA4\u6765\u81EA\u4FC4\u7F57\u65AF\u65B9\u5757\u7814\u7A76\u7FA4\u53CA\u4E0B\u5C5E\u7FA4\u7684\u65B9\u5757\u540C\u597D\u5EFA\u7ACB\u7684\u5173\u4E8E\u4FC4\u7F57\u65AF\u65B9\u5757\u7684\u4E2D\u6587\u767E\u79D1\u5168\u4E66\u3002\\n\\n\u76EE\u524D\u5176\u5927\u90E8\u5206\u9875\u9762\u7FFB\u8BD1\u548C\u53C2\u8003\u6765\u81EAHard Drop Wiki\u548CTetris Wiki",
        "https://tetris.huijiwiki.com",
    },
    {"HardDrop Wiki",
        "hd",
        "help",
        "\uFF08\u82F1\u6587\uFF09\u4F4D\u4E8EHard Drop\u5168\u7403\u4FC4\u7F57\u65AF\u65B9\u5757\u793E\u533A\u7684Wiki\u767E\u79D1",
        "https://harddrop.com/wiki/Tetris_Wiki",
    },
    {"Tetris Wiki",
        "",
        "help",
        "\uFF08\u82F1\u6587\uFF09\u4E00\u4E2A\u4E13\u6CE8\u4E8E\u521B\u5EFA\u4FC4\u7F57\u65AF\u65B9\u5757\u76F8\u5173\u5185\u5BB9\u7684Wiki\u767E\u79D1\uFF0C\u7531Myndzi\u5728 2015\u521B\u529E\u3002\u5E74\u590D\u4E00\u5E74\uFF0C\u4E0A\u5343\u73A9\u5BB6\u8D21\u732E\u4E86\u4E00\u7CFB\u5217\u7684\u5B98\u5757\u548C\u81EA\u5236\u5757\u7684\u8BF4\u660E\uFF0C\u6E38\u620F\u7684\u9690\u85CF\u673A\u5236\uFF0C\u548C\u63D0\u5347\u6E38\u620F\u4F53\u9A8C\u7684\u6559\u7A0B",
        "https://tetris.wiki",
    },
    {"Tetris Wiki Fandom",
        "",
        "help",
        "\uFF08\u82F1\u6587\uFF09\u4E00\u4E2A\u4FC4\u7F57\u65AF\u65B9\u5757\u7EF4\u57FA",
        "https://tetris.fandom.com/wiki/Tetris_Wiki",
    },
    {"Four.lol",
        "",
        "help",
        "\uFF08\u82F1\u6587\uFF0C\u5F88\u53EF\u80FD\u6253\u4E0D\u5F00\uFF09\u4E00\u4E2A\u5F00\u5C40\u5B9A\u5F0F\u6536\u96C6\u7F51\u7AD9",
        "https://four.lol",
    },
    {"\u30C6\u30C8\u30EA\u30B9\u5802",
        "",
        "help",
        "\uFF08\u65E5\u6587\uFF09\u5305\u542B\u5F88\u591A\u5B9A\u5F0F\u3001\u6559\u7A0B\u548C\u5C0F\u6E38\u620F\u3002\u5185\u6DB52nd\u30013rd\u30014th\u30017th PC\u7684\u8BE6\u7EC6\u8BF4\u660E",
        "https://shiwehi.com/tetris/"
    },
    {"\u30C6\u30C8\u30EA\u30B9\u30C6\u30F3\u30D7\u30EC\u96C6",
        "",
        "help",
        "\uFF08\u65E5\u6587\uFF09\u30C6\u30C8\u30EA\u30B9\u30C6\u30F3\u30D7\u30EC\u96C6@\u30C6\u30C8\u8B5C\uFF0C\u5305\u542B\u975E\u5E38\u591A\u5B9A\u5F0F\uFF0C\u6709\u5F88\u8BE6\u7EC6\u7684\u5206\u7C7B\u3002\u5927\u90E8\u5206\u5B9A\u5F0F\u5E26\u6709\u56FE\u7247\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u5206\u4EAB\u7ED9\u522B\u4EBA\u3002",
        "https://w.atwiki.jp/tetrismaps/"
    },
    {"tetristemplate.info",
        "",
        "help",
        "\uFF08\u65E5\u6587\uFF09\u30C6\u30C8\u30EA\u30B9\u30D6\u30ED\u30B0 - PerfectClear\uFF0C\u4E00\u4E2A\u6536\u96C6\u4E86\u5B9A\u5F0F\u7684\u7F51\u7AD9\uFF0C\u91CF\u5F88\u5C11\u4F46\u662F\u5185\u5BB9\u5F88\u7CBE\u7EC6\u3002",
        "https://tetristemplate.info/"
        },
    {"Fumen",
        "fumen",
        "help",
        "\uFF08\u65E5\u6587\uFF09\u4E00\u4E2A\u65B9\u5757\u7248\u9762\u7F16\u8F91\u5668\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5206\u4EAB\u5B9A\u5F0F\uFF0CPC\u89E3\u6CD5\u7B49\uFF0C\u7528\u5904\u5F88\u591A\u3002\u8BBE\u7F6E\u91CC\u53EF\u4EE5\u542F\u7528\u82F1\u6587\u7248\u3002",
        "http://fumen.zui.jp"
    },
    {"Fumen for Mobile",
        "fumenformobile fm",
        "help",
        "\uFF08\u82F1\u6587\uFF09\u4E00\u4E2A\u65B9\u5757\u7248\u9762\u7F16\u8F91\u5668\uFF0C\u6DFB\u52A0\u4E86\u5BF9\u89E6\u5C4F\u7684\u63A7\u5236\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5206\u4EAB\u5B9A\u5F0F\uFF0CPC\u89E3\u6CD5\u7B49\uFF0C\u7528\u5904\u5F88\u591A\u3002",
        "https://knewjade.github.io/fumen-for-mobile/"
    },

    -- \u76F8\u5173\u7F51\u9875/\u7EC4\u7EC7
    {"GitHub\u4ED3\u5E93",
        "\u6E90\u4EE3\u7801 \u6E90\u7801 github git sourcecode yuandaima src",
        "org",
        "Techmino\u7684GitHub\u4ED3\u5E93\u5730\u5740\uFF0C\u6B22\u8FCEStar",
        "https://github.com/26F-Studio/Techmino",
    },
    {"\u7814\u7A76\u7FA4",
        "yanjiu study research",
        "org",
        "\u4FC4\u7F57\u65AF\u65B9\u5757\xB7[\u7814\u7A76]\u7FA4QQ\u53F7764916351\uFF0C\u201C\u4E2D\u56FD\u4FC4\u7F57\u65AF\u65B9\u5757\u603B\u7FA4\u201D",
    },
    {"Mew\u636E\u70B9",
        "mew tieba forum",
        "org",
        "\u7814\u7A76\u7FA4\u4E0B\u5C5E\u7684Mew\u636E\u70B9\uFF08\u7C7B\u4F3C\u8D34\u5427\u6216\u8005Discord\u7684\u670D\u52A1\u5668\uFF09\uFF0C2021\u5E74\u4E0B\u534A\u5E74\u5EFA\u7ACB\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u5927\u793E\u533A\u7684\u5404\u4E2A\u9891\u9053\u5B9E\u65F6\u804A\u5929\uFF0C\u4E5F\u53EF\u4EE5\u53D1\u5E16\u4EE5\u4E3B\u9898\u4EA4\u6D41\uFF0C\u540C\u65F6\u8FD8\u6709\u4E00\u4E2A\u53EB\u56FE\u4E66\u9986\u7684\u529F\u80FD\u65B9\u4FBF\u5404\u79CD\u65B9\u5757\u8D44\u6599\u6574\u7406\uFF08\u8FD8\u5728\u5EFA\u8BBE\u4E2D\uFF0C\u76EE\u524D\u6CA1\u591A\u5C11\u5185\u5BB9\uFF0C2021/11/02\uFF09",
        "https://mew.fun/n/tetris",
    },
    {"\u8336\u670D",
        "tos tea study chafu",
        "org",
        "TO-S\u7684\u6DFB\u52A0\u65B9\u6CD5\u3001\u8BF4\u660E\u7B49\u5173\u4E8E\u8336\u670D\u7684\u4E00\u5207",
        "http://teatube.ltd/tos",
    },
    {"\u8D5E\u52A91",
        "support weixin vx zhifubao zfb zanzhu daqian",
        "org",
        "vx/zfb-\u63A7\u5236\u53F0-support",
    },
    {"\u8D5E\u52A92",
        "support aifadian afdian zanzhu daqian",
        "org",
        "Afdian",
        FNNS and "https://b23.tv/BV1uT4y1P7CX" or "https://afdian.net/@MrZ_26",
    },
    {"\u8D5E\u52A93",
        "support zanzhu daqian",
        "org",
        "P\\97\\116\\114\\101\\111\\110",
        FNNS and "https://b23.tv/BV1uT4y1P7CX" or "https://www.p\\97\\116\\114\\101\\111\\110.com/techmino",
    },

    -- \u6E38\u620F\uFF08\u9898\u5E93\uFF09
    {"TTT",
        "\u6559\u7A0B trainer tres bien",
        "game",
        "\u5168\u79F0Tetris Trainer Tr\xE8s-Bien (by \u3053\u306A)\u3002\u73B0\u4EE3\u65B9\u5757\u7279\u6B8A\u64CD\u4F5C\u624B\u628A\u624B\u6559\u7A0B\uFF08\u53EA\u80FD\u952E\u76D8\u64CD\u4F5C\uFF09\\n\\t\u63A8\u8350\u80FD\u7EAF\u6D88\u56DB\u5B8C\u621040L\u6311\u6218\u7684\u4EBA\u5B66\u4E60\\n\\t\u5185\u542BT-spin\u3001\u6781\u7B80\u3001SRS\u3001\u90E8\u5206\u5BF9\u6218\u5B9A\u5F0F\u4ECB\u7ECD\u7B49\u6559\u7A0B\\n\u6CE8\uFF1A\u63D0\u4F9B\u7684\u94FE\u63A5\u662F\u7FFB\u8BD1\u540E\u6302\u5728\u8336\u670D\u7684\u7248\u672C",
        "http://teatube.ltd/ttt",
    },
    {"TTPC",
        "pc\u6559\u7A0B",
        "game",
        "\u5168\u79F0TETRIS Perfect Clear Challenge (by chokotia)\u3002SRS+Bag7\u65B9\u5757\u6E38\u620FPerfect Clear Opener\u6559\u7A0B\uFF08\u53EA\u80FD\u952E\u76D8\u64CD\u4F5C\uFF09\u3002\u63A8\u8350\u5B8C\u6210\u4E86TTT\u7684\u4EBA\u5B66\u4E60\uFF08\u5FC5\u987B\u5148\u5B66\u4F1ASRS\uFF09\\n\\n\u6CE8\uFF1A\u63D0\u4F9B\u7684\u94FE\u63A5\u662F\u7FFB\u8BD1\u540E\u6302\u5728\u8336\u670D\u7684\u7248\u672C\u3002",
        "http://teatube.ltd/ttpc",
    },
    {"NAZO",
        "\u9898\u5E93",
        "game",
        "\u5404\u7C7BSRS\u8BD5\u9898\\n\\t\u63A8\u8350\u80FD\u901A\u8FC7TTT\u7684\u73A9\u5BB6\u5C1D\u8BD5\u3002\\n\\t\u5185\u542B\u5404\u79CDT-spin/All spin\u9898\u76EE\uFF0C\u7B80\u5355\u5230\u6781\u96BE\u9898\u76EE\u90FD\u6709\u3002\\n\\n\u6CE8\uFF1A\u63D0\u4F9B\u7684\u94FE\u63A5\u662F\u7FFB\u8BD1\u540E\u6302\u5728\u8336\u670D\u7684\u7248\u672C\u3002",
        "http://teatube.ltd/nazo",
    },
    {"TPO",
        "\u9898\u5E93 nazo",
        "game",
        "\u5168\u79F0Tetris Puzzle O\u3002\u7531TCV100\u5236\u4F5C\u7684\u9898\u5E93\u7F51\u7AD9\uFF0C\u5185\u542Bnazo\u7684\u90E8\u5206\u9898\u5E93\u3002",
        "http://121.36.2.245:3000/tpo"
    },

    -- \u6E38\u620F\uFF08\u7F51\u9875\uFF09
    {"\u6CE8[1]",
        "\u5907\u6CE8 notice",
        "game",
        "\u4EE5\u4E0B\u5185\u5BB9\u662F\u4E3A\u90E8\u5206\u5B98\u65B9\u548C\u8F83\u9AD8\u4EBA\u6C14\u540C\u4EBA\u65B9\u5757\u6E38\u620F\u7684\u7B80\u4ECB\u3002\\n\u5176\u4E2D\u53EF\u80FD\u5305\u542B\u4E00\u4E9B\u53EA\u4EE3\u8868\u4E2A\u4EBA\u89C2\u70B9\u7684\u4E3B\u89C2\u8BC4\u4EF7\u5199\u5728\u65B9\u62EC\u53F7\u91CC\u4EC5\u4F9B\u53C2\u8003\uFF0C\u987A\u4FBF\u4E5F\u8BF7\u4E0D\u8981\u56E0\u4E3A\u67D0\u4E2A\u65B9\u9762\u6709\u6B20\u7F3A\u5C31\u76F4\u63A5\u8BA4\u4E3A \u201C\u8FD9\u4E2A\u6E38\u620F\u4E0D\u597D\u201D\u3002",
    },
    {"King of Stackers",
        "\u56DE\u5408\u5236 \u7F51\u9875 \u624B\u673A kos kingofstackers",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u591A\u4EBA | \u652F\u6301\u79FB\u52A8\u7AEF\\n\u7B80\u79F0KoS\u3002\u7F51\u9875\u7248\u56DE\u5408\u5236\u5BF9\u6218\u65B9\u5757\u70B9\u51FB\u5373\u73A9\uFF08\u53EF\u80FD\u5F88\u5361\uFF09\uFF0C\u4E3B\u8981\u89C4\u5219\u4E3A\uFF1A\u4EE57\u5757\u4E3A\u4E00\u4E2A\u56DE\u5408\uFF0C\u53CC\u65B9\u8F6E\u6D41\u5728\u81EA\u5DF1\u573A\u5730\u4E2D\u653E\u7F6E\u65B9\u5757\uFF0C\u4EFB\u4F55\u7684\u653B\u51FB\u53EA\u5728\u5BF9\u65B9\u56DE\u5408\u653E\u4E00\u5757\u4E0D\u6D88\u884C\u540E\u751F\u6548\uFF0C\u7B56\u7565\u6027\u5F88\u5F3A\u3002\u6709\u4E0D\u540C\u7684\u4F24\u5BB3\u8868\u8BBE\u7F6E\u3002",
        "https://kingofstackers.com/games.php",
    },
    {"Tetr.js",
        "\u7F51\u9875 \u624B\u673A tetrjs",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A | \u652F\u6301\u79FB\u52A8\u7AEF\\n\u7B80\u79F0\u5C41\u5757\uFF08\u56E0\u4E3A\u4F5C\u8005\u7F51\u540D\u53EBFarter\uFF09\u3002\u8BBE\u7F6E\u5185\u5BB9\u8DB3\u591F\u4E13\u4E1A\uFF0C\u6A21\u5F0F\u5F88\u591A\uFF0C\u4F46\u753B\u9762\u5F88\u7B80\u5355\uFF0C\u51E0\u4E4E\u6CA1\u6709\u52A8\u753B\uFF0C\u800C\u4E14\u79FB\u52A8\u7AEF\u53EA\u6709\u51E0\u5957\u56FA\u5B9A\u7684\u6309\u952E\u7EC4\u5408\uFF08\u4E0D\u80FD\u81EA\u7531\u62D6\u653E\uFF09\u3002",
        "http://farter.cn/t",
    },
    {"Tetra Legends",
        "\u7F51\u9875 tl tetralegends",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A | [\u670D\u52A1\u5668\u5728\u56FD\u5916\u53EF\u80FD\u5361]\\n\u7B80\u79F0TL\u3002\u5355\u673A\u6A21\u5F0F\u6BD4\u8F83\u4E30\u5BCC\uFF0C\u6709\u4E24\u4E2A\u9690\u85CF\u7684\u8282\u594F\u6A21\u5F0F\uFF0C\u5E76\u4E14\u5C06\u4E00\u4E9B\u5176\u4ED6\u6E38\u620F\u4E2D\u4E0D\u53EF\u89C1\u7684\u673A\u5236\u8FDB\u884C\u4E86\u53EF\u89C6\u5316\uFF0C\u52A8\u6548\u4E5F\u5F88\u591A\u3002\u57282020\u5E7412\u6708\uFF0C\u57FA\u672C\u786E\u5B9A\u7531\u4E8E\u5404\u79CD\u539F\u56E0\u4E0D\u518D\u7EE7\u7EED\u5F00\u53D1\u3002",
        "https://tetralegends.app",
    },
    {"Ascension",
        "\u7F51\u9875",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A/\u591A\u4EBA | [\u670D\u52A1\u5668\u5728\u56FD\u5916\u53EF\u80FD\u5361]\\n\u7B80\u79F0ASC\uFF0C\u4F7F\u7528\u81EA\u5DF1\u7684ASC\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u6709\u4E0D\u5C11\u5355\u673A\u6A21\u5F0F\uFF08Techmino\u7684\u5806\u79EF\u6A21\u5F0F\u5C31\u6765\u81EAASC\uFF09\uFF0C\u5BF9\u6218\u6A21\u5F0F\u76EE\u524D\u5904\u5728\u6D4B\u8BD5\u9636\u6BB5\uFF082022/04/16\uFF09",
        "https://asc.winternebs.com",
    },
    {"Jstris",
        "\u7F51\u9875 \u624B\u673A",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A/\u591A\u4EBA | \u652F\u6301\u79FB\u52A8\u7AEF | [\u670D\u52A1\u5668\u5728\u56FD\u5916\u53EF\u80FD\u5361]\\n\u7B80\u79F0JS\uFF0C\u6709\u5E38\u7528\u7684\u79D1\u7814\u5411\u5355\u673A\u6A21\u5F0F\u548C\u81EA\u5B9A\u4E49\u5404\u79CD\u53C2\u6570\u7684\u529F\u80FD\uFF0C\u5141\u8BB8\u62D6\u653E\u56FA\u5B9A\u5C3A\u5BF8\u7684\u6B63\u65B9\u5F62\u865A\u62DF\u6309\u952E\uFF0C\u6CA1\u6709\u4EFB\u4F55\u52A8\u753B\u6548\u679C",
        "https://jstris.jezevec10.com",
    },
    {"TETR.IO",
        "\u7F51\u9875 io tetrio",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A/\u591A\u4EBA | [\u670D\u52A1\u5668\u5728\u56FD\u5916\u53EF\u80FD\u5361]\\n\u7B80\u79F0IO\uFF0C\u6709\u6392\u4F4D\u7CFB\u7EDF\u548C\u529F\u80FD\u5168\u9762\u7684\u81EA\u5B9A\u4E49\u6A21\u5F0F\uFF0C\u5355\u673A\u6A21\u5F0F\u53EA\u6709\u4E09\u4E2A\u3002\u6709\u7535\u8111\u5BA2\u6237\u7AEF\u4E0B\u8F7D\uFF08\u4F18\u5316\u6027\u80FD\uFF0C\u65E0\u5E7F\u544A\uFF09\u3002\\n[Safari\u6D4F\u89C8\u5668\u4F3C\u4E4E\u6253\u4E0D\u5F00]",
        "https://tetr.io",
    },
    {"Nuketris",
        "\u7F51\u9875 \u6838 he",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A/\u591A\u4EBA | [\u670D\u52A1\u5668\u5728\u56FD\u5916\u53EF\u80FD\u5361]\\n\u6709\u51E0\u4E2A\u57FA\u7840\u5355\u673A\u6A21\u5F0F\u548C1V1\u6392\u4F4D\u3002",
        "https://nuketris.com/",
    },
    {"Worldwide Combos",
        "\u7F51\u9875 wwc",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A/\u591A\u4EBA | [\u670D\u52A1\u5668\u5728\u56FD\u5916\u53EF\u80FD\u5361]\\n\u7B80\u79F0WWC\uFF0C\u5168\u4E16\u754C\u5339\u914D\u52361V1\u3002\u7279\u8272\uFF1A\u6709\u5F55\u50CF\u6218\uFF0C\u5339\u914D\u7684\u5BF9\u624B\u53EF\u4EE5\u4E0D\u662F\u771F\u4EBA\uFF1B\u51E0\u79CD\u4E0D\u540C\u98CE\u683C\u7684\u5927\u89C4\u5219\uFF1B\u70B8\u5F39\u5783\u573E\u884C\u5BF9\u6218\u3002",
        "https://worldwidecombos.com",
    },
    {"Tetris Friends",
        "\u7F51\u9875 tf",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0TF\uFF0C\u5DF2\u7ECF\u5173\u670D\u4E86\u7684\u7F51\u9875\u7248\u65B9\u5757\u3002\u4EE5\u524D\u4EBA\u6BD4\u8F83\u591A\uFF0C\u540E\u6765\u5B98\u670D\u5012\u95ED\u4E86\u70ED\u5EA6\u4E0B\u53BB\u4E86\uFF0C\u4E0D\u8FC7\u73B0\u5728\u6709\u4EBA\u67B6\u4E86\u79C1\u670D\u8FD8\u53EF\u4EE5\u4F53\u9A8C\u5230\u3002",
        "https://notrisfoes.com",
    },
    {"tetris.com",
        "\u7F51\u9875 \u624B\u673A",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A | \u652F\u6301\u79FB\u52A8\u7AEF\\ntetris.com\u5B98\u7F51\u4E0A\u7684\u4FC4\u7F57\u65AF\u65B9\u5757\uFF0C\u53EA\u6709\u9A6C\u62C9\u677E\u4E00\u79CD\u6A21\u5F0F\uFF0C\u7279\u8272\u662F\u652F\u6301\u57FA\u4E8E\u9F20\u6807\u6307\u9488\u4F4D\u7F6E\u7684\u667A\u80FD\u63A7\u5236\u3002",
    },
    {"Tetris Gems",
        "\u7F51\u9875 \u5B9D\u77F3",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A\\ntetris.com\u5B98\u7F51\u4E0A\u7684\u4FC4\u7F57\u65AF\u65B9\u5757\uFF0C\u9650\u65F61\u5206\u949F\u6316\u6398\uFF0C\u6709\u91CD\u529B\u673A\u5236\u3002\\n\u6709\u4E09\u79CD\u6D88\u9664\u540E\u53EF\u4EE5\u83B7\u5F97\u4E0D\u540C\u529F\u80FD\u7684\u5B9D\u77F3\u65B9\u5757\u3002",
    },
    {"Tetris Mind Bender",
        "\u7F51\u9875 \u6280\u80FD",
        "game",
        "\u7F51\u9875\u6E38\u620F | \u5355\u673A\\ntetris.com\u5B98\u7F51\u4E0A\u7684\u4FC4\u7F57\u65AF\u65B9\u5757\uFF0C\u5728\u9A6C\u62C9\u677E\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E86\u6280\u80FD\uFF0C\u573A\u5730\u4E0A\u4F1A\u968F\u673A\u5192\u51FA\u6280\u80FD\u65B9\u5757\uFF0C\u6D88\u9664\u540E\u4F1A\u5F97\u5230\u5404\u79CD\u5404\u6837\u6216\u597D\u6216\u574F\u7684\u6280\u80FD\u3002",
    },

    -- \u6E38\u620F\uFF08\u8DE8\u5E73\u53F0\uFF09
    {"Techmino",
        "\u94C1\u58F3\u7C73\u8BFA \u65B9\u5757\u7814\u7A76\u6240 tieke",
        "game",
        "\u8DE8\u5E73\u53F0 | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0Tech\uFF0C\u4F7F\u7528L\xD6VE\u5F15\u64CE\u5F00\u53D1\u7684\u4E00\u6B3E\u65B9\u5757\u6E38\u620F\uFF0C\u5355\u673A\u6A21\u5F0F\u548C\u5404\u79CD\u8BBE\u7F6E\u90FD\u5F88\u9F50\u5168\uFF0C\u8054\u673A\u6B63\u5728\u9010\u6E10\u5F00\u53D1\u4E2D\u3002",
    },
    {"Falling Lightblocks",
        "\u624B\u673A fl",
        "game",
        "\u7F51\u9875\u6E38\u620F/iOS/Android | \u5355\u673A/\u591A\u4EBA\\n\u4E00\u4E2A\u5168\u5E73\u53F0\u5757\uFF0C\u6A2A\u7AD6\u5C4F\uFF0C\u6709\u5EF6\u8FDF\u5E76\u4E14\u4E0D\u53EF\u8C03\u3002\u624B\u673A\u652F\u6301\u81EA\u5B9A\u4E49\u952E\u4F4D\uFF0C\u4E3B\u8981\u73A9\u6CD5\u57FA\u4E8ENES\u5757\u8BBE\u8BA1\uFF0C\u4E5F\u6709\u73B0\u4EE3\u6A21\u5F0F\u3002\u5BF9\u6218\u4E3A\u534A\u5373\u65F6\u534A\u56DE\u5408\u5236\uFF0C\u65E0\u653B\u51FB\u7F13\u51B2\u4E0D\u53EF\u62B5\u6D88\u3002"
    },
    {"Cambridge",
        "\u5251\u6865",
        "game",
        "\u8DE8\u5E73\u53F0 | \u5355\u673A\\n\u4F7F\u7528L\xD6VE\u5F15\u64CE\u5F00\u53D1\u7684\u4E00\u6B3E\u65B9\u5757\u6E38\u620F\uFF0C\u81F4\u529B\u4E8E\u521B\u5EFA\u4E00\u4E2A\u8F7B\u677E\u9AD8\u5EA6\u81EA\u5B9A\u4E49\u65B0\u6A21\u5F0F\u7684\u65B9\u5757\u5E73\u53F0\u3002\u6700\u521D\u7531Joe Zeng\u5F00\u53D1\uFF0C\u4E8E2020/10/08\u76840.1.5\u7248\u5F00\u59CBMilla\u63A5\u7BA1\u4E86\u5F00\u53D1\u3002 \u2014 Tetris Wiki.",
    },
    {"Nanamino",
        "",
        "game",
        "Windows/Android | \u5355\u673A\\n\u5757\u5708\u73A9\u5BB6\u81EA\u5236\u65B9\u5757\uFF0C\u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u6709\u4E00\u4E2A\u539F\u521B\u65CB\u8F6C\u7CFB\u7EDF\u3002",
    },

    -- \u6E38\u620F\uFF08\u8857\u673A/\u7C7B\u8857\u673A\uFF09
    {"TGM",
        "\u4FC4\u7F57\u65AF\u65B9\u5757\u5927\u5E08 tetrisgrandmaster",
        "game",
        "Windows | \u5355\u673A/\u672C\u5730\u53CC\u4EBA\\n\u5168\u79F0Tetris The Grand Master\uFF0C\u4E00\u4E2A\u8857\u673A\u65B9\u5757\u7CFB\u5217\uFF08\u6709\u4FEE\u6539\u8FC7\u7684\u7248\u672C\u53EF\u4EE5\u5728\u5927\u591A\u6570Windows\u7535\u8111\u8FD0\u884C\uFF09\uFF0CS13/GM\u7B49\u79F0\u53F7\u90FD\u51FA\u81EA\u8BE5\u4F5C\u3002\\n\\n\u5176\u4E2DTGM3\u76EE\u524D\u73A9\u5F97\u6700\u666E\u904D\uFF0C\u90E8\u5206\u6A21\u5F0F\u8BF4\u660E\uFF1A\\n\\nMaster\uFF1A\u5927\u5E08\u6A21\u5F0F\uFF0C\u6709\u6BB5\u4F4D\u8BC4\u4EF7\uFF0C\u62FF\u5230\u66F4\u9AD8\u6BB5\u4F4D\u70B9\u7684\u8981\u6C42\uFF1A\u975E\u6D88\u4E00\u7684\u8FDE\u51FB\u548C\u6D88\u56DB\uFF0C\u5B57\u5E55\u6218\u4E2D\u6D88\u9664\u548C\u901A\u5173\uFF0C\u6BCF100\u7684\u524D70\u5C0F\u4E8E\u3010\u6807\u51C6\u65F6\u95F4\uFF0C\u4E0A\u4E00\u4E2A0~70\u79D2\u6570+2\u3011\u4E2D\u5C0F\u7684\u4E00\u4E2A\uFF0C\u6BCF100\u603B\u7528\u65F6\u4E0D\u80FD\u8D85\u8FC7\u9650\u5B9A\u503C\uFF08\u4E0D\u7136\u53D6\u6D88\u4E0A\u4E00\u4E2A\u65B9\u6CD5\u7684\u52A0\u5206\u5E76\u53CD\u6263\u70B9\u6570\uFF09\uFF1B\u5230500\u82E5\u6CA1\u6709\u8FDB\u6807\u51C6\u65F6\u95F4\u4F1A\u5F3A\u5236\u7ED3\u675F\u6E38\u620F\uFF08\u79F0\u4E3A\u94C1\u95E8\uFF09\uFF1B\u5B57\u5E55\u6218\u6709\u4E24\u4E2A\u96BE\u5EA6\uFF0C\u534A\u9690\u548C\u5168\u9690\uFF0C\u540E\u8005\u5FC5\u987B\u62FF\u5230\u51E0\u4E4E\u5168\u90E8\u7684\u6BB5\u4F4D\u70B9\u624D\u80FD\u8FDB\uFF0C\u6D88\u9664\u5956\u52B1\u7684\u6BB5\u4F4D\u70B9\u4E5F\u66F4\u591A\u3002\\n\\nShirase\uFF1A\u6B7B\u4EA1\u6A21\u5F0F\uFF0C\u7C7B\u4F3C\u4E8Etechmino\u4E2D\u768420G-\u6781\u9650\uFF0C\u5F00\u5C40\u5C31\u662F\u9AD8\u901F20G\uFF0C500\u548C1000\u6709\u94C1\u95E8\uFF0C500\u5F00\u59CB\u5E95\u4E0B\u5F00\u59CB\u6DA8\u5783\u573E\u884C\uFF0C1000\u5F00\u59CB\u51FA\u73B0\u9AA8\u5757\uFF0C1300\u901A\u5173\u8FDB\u5165\u5927\u65B9\u5757\u5B57\u5E55\u6218\uFF1B\u6BB5\u4F4D\u7ED3\u7B97\uFF1A\u6BCF\u901A100\u52A01\u6BB5\u4ECES1\u5230S13\uFF0C\u5982\u679C\u901A\u5173\u4E86\u5B57\u5E55\u6218\u5C31\u4F1A\u6709\u91D1\u8272\u7684S13\\n\\n\u66F4\u591A\u5185\u5BB9\u8BE6\u89C1\u94FE\u63A5",
        "http://teatube.ltd/TGMGUIDE/",
    },
    {"DTET",
        "",
        "game",
        "Windows | \u5355\u673A\\n\u5355\u673A\u65B9\u5757\u6E38\u620F\uFF0C\u57FA\u4E8E\u7ECF\u5178\u89C4\u5219\u52A0\u5165\u4E8620G\u548C\u4E00\u4E2A\u5F3A\u5927\u7684\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u4F46\u662F\u9664\u4E86\u952E\u4F4D\u5176\u4ED6\u53C2\u6570\u90FD\u4E0D\u53EF\u81EA\u5B9A\u4E49\u3002\u6709\u70B9\u96BE\u627E\u5230\uFF0C\u800C\u4E14\u627E\u5230\u540E\u53EF\u80FD\u8FD8\u8981\u81EA\u5DF1\u8865\u9F50\u7F3A\u7684DLL\u6587\u4EF6\u3002",
    },
    {"Heboris",
        "hb",
        "game",
        "Windows | \u5355\u673A\\n\u4E00\u4E2A\u4EFF\u8857\u673A\u65B9\u5757\u6E38\u620F\uFF0C\u53EF\u4EE5\u6A21\u62DF\u591A\u4E2A\u65B9\u5757\u6E38\u620F\u7684\u90E8\u5206\u6A21\u5F0F\u3002",
    },
    {"Texmaster",
        "txm",
        "game",
        "Windows | \u5355\u673A\\n\u7B80\u79F0Tex\uFF0C\u5305\u542BTGM\u7684\u6240\u6709\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u7528\u6765\u7EC3\u4E60TGM\uFF0C\u4F46World\u89C4\u5219\u4E0D\u5B8C\u5168\u4E00\u6837\uFF08\u5982\u8F6F\u964D\u5230\u5E95\u65E0\u9501\u5EF6\uFF0C\u8E22\u5899\u8868\u6709\u7EC6\u8282\u4E0D\u540C\u7B49\uFF09\u3002",
    },

    -- \u6E38\u620F\uFF08\u5176\u4ED6\uFF09
    {"Tetris Effect",
        "\u6548\u5E94 tec tetriseffectconnected xiaoyinglianjie",
        "game",
        "PS/Oculus Quest/Xbox/NS/Windows | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0TE(C)\uFF0C\u7279\u6548\u65B9\u5757\u6E38\u620F\u3002\u4E0D\u5E26Connected\u7684\u57FA\u7840\u7248\u672C\u53EA\u6709\u5355\u673A\u6A21\u5F0F\u3002\\n\u62D3\u5C55\u7248\u672CTetris Effect: Connected\u589E\u52A0\u4E86\u8054\u7F51\u5BF9\u6218\uFF0C\u5305\u542BBoss\u6218\u3001Zone\u5BF9\u6218\u3001\u7ECF\u5178\u5757\u5BF9\u6218\u548C\u5206\u6570\u5BF9\u6218\u56DB\u4E2A\u6A21\u5F0F\u3002",
    },
    {"Tetris 99",
        "\u5403\u9E21 t99",
        "game",
        "NS | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0T99\uFF0C\u4E3B\u73A999\u4EBA\u6DF7\u6218\u7684\u5403\u9E21\u6A21\u5F0F\uFF0C\u6218\u672F\u6BD4\u91CD\u6BD4\u8F83\u5927\uFF0C\u80DC\u7387\u4E0D\u53EA\u7531\u73A9\u5BB6\u5728\u5E73\u65F61V1\u65F6\u7684\u6C34\u5E73\u51B3\u5B9A\u3002\\n\u4E5F\u6709\u4E00\u4E9B\u5E38\u7528\u5355\u673A\u6A21\u5F0F\u5982\u9A6C\u62C9\u677E\u7B49\u3002",
    },
    {"Puyo Puyo Tetris",
        "\u5657\u54DF\u65B9\u5757 ppt puyopuyotetris",
        "game",
        "PS/NS/Xbox/Windows | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0PPT\uFF0C\u5C06\u65B9\u5757\u548C Puyo Puyo \u4E24\u4E2A\u4E0B\u843D\u6D88\u9664\u6E38\u620F\u653E\u5230\u4E00\u4E2A\u6E38\u620F\u91CC\uFF0C\u4E8C\u8005\u53EF\u4EE5\u5BF9\u6218\uFF0C\u8054\u673A\u5355\u673A\u6A21\u5F0F\u90FD\u5F88\u591A\u3002\u53E6\u6709\u4E00\u62D3\u5C55\u7248\u672CPuyo Puyo Tetris 2\u3002\\n[Steam PC\u7248\u76F8\u5BF9NS\u7248\u624B\u611F\u548C\u7F51\u7EDC\u7B49\u90FD\u4E0D\u592A\u597D]",
    },
    {"Tetris Online",
        "top study",
        "game",
        "Windows | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0TO\uFF0C\u4E3B\u8981\u7528\u67656\u4EBA\u5185\u5BF9\u6218/\u5355\u6311/\u5237\u6BCF\u65E540L\u699C/\u6316\u6398\u6A21\u5F0F/\u6253\u673A\u5668\u4EBA\u3002\u652F\u6301\u81EA\u5B9A\u4E49DAS/ARR\u4F46\u90FD\u4E0D\u80FD\u52300\u3002\\n\u73B0\u5728\u8FD8\u5F00\u7740\u7684\u670D\u52A1\u5668\u6709\uFF1A\\nTO-P\uFF08\u6CE2\u5170\u670D\uFF0C\u670D\u52A1\u5668\u5728\u6CE2\u5170\uFF0C\u53EF\u80FD\u4F1A\u5361\u987F\uFF09\\nTO-S\uFF08\u7814\u7A76\u670D\uFF0C\u7814\u7A76\u7FA4\u7FA4\u53CB\u81EA\u5DF1\u5F00\u7684\u670D\uFF0C\u5F88\u7A33\u5B9A\uFF0C\u9700\u8981\u8FDB\u7FA4\u6CE8\u518C\uFF09",
    },
    {"Tetra Online",
        "to",
        "game",
        "Windows/macOS/Linux | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0TO\uFF0C\u7531Dr Ocelot\u548CMine\u4E24\u4EBA\u5F00\u53D1\\n\u6545\u610F\u8BBE\u8BA1\u4E3A\u5EF6\u8FDF\u8F83\u591A\uFF0C\u5E73\u65F6\u73A9\u65E0\u5EF6\u8FDF\u65B9\u5757\u7684\u73A9\u5BB6\u53EF\u80FD\u4F1A\u4E0D\u4E60\u60EF\u3002\\n2020\u5E7412\u67089\u65E5\u6536\u5230\u6765\u81EATTC\u7684DMCA\u8B66\u544A\u4FE1\u4E8E\u662F\u88AB\u8FEB\u505C\u6B62\u5F00\u53D1\uFF0C\u5728\u4E00\u6BB5\u65F6\u95F4\u540E\u5173\u670D\u5E76\u4E0B\u67B6Steam\u3002\\n\u73B0\u5728\u5728GitHub\u4E0A\u9762\u8FD8\u53EF\u4EE5\u4E0B\u5230Windows\u7684Offline Build\u3002\\n[UI\u90E8\u5206\u6A21\u4EFF\u4E86PPT\uFF0C\u97F3\u4E50\u4E0D\u9519\uFF0C\u653B\u51FB\u7279\u6548\u597D\u770B\u3002]",
        "https://github.com/Juan-Cartes/Tetra-Offline/releases/tag/1.0",
    },
    {"Cultris II",
        "\u6587\u827A\u65B9\u5757 c2 cultris2",
        "game",
        "Windows/OS X | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0C2\uFF0C\u8BBE\u8BA1\u57FA\u4E8E\u7ECF\u5178\u89C4\u5219\u51FA\u53D1\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49DAS/ARR\uFF0C\u5BF9\u6218\u7684\u4E3B\u8981\u73A9\u6CD5\u662F\u57FA\u4E8E\u65F6\u95F4\u7684\u8FDE\u51FB\uFF0C\u8003\u9A8C\u73A9\u5BB6\u901F\u5EA6/Wide\u6253\u6CD5/\u6316\u6398\u3002\\n[\u6E38\u620F\u4F5C\u8005\u592A\u4E45\u6CA1\u6709\u66F4\u65B0Mac\u7248\u5BFC\u81F4macOS Catalina\u4EE5\u540E\u7684\u7CFB\u7EDF\u65E0\u6CD5\u8FD0\u884C]",
    },
    {"Nullpomino",
        "np",
        "game",
        "Windows/macOS/Linux | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0NP\uFF0C\u6574\u4E2A\u6E38\u620F\u81EA\u5B9A\u4E49\u7A0B\u5EA6\u6781\u9AD8\uFF0C\u51E0\u4E4E\u4EFB\u4F55\u53C2\u6570\u90FD\u53EF\u4EE5\u81EA\u5DF1\u8BBE\u7F6E\uFF0C\u662F\u4E00\u4E2A\u4E13\u4E1A\u7EA7\u65B9\u5757\u3002\\n[\u4E0D\u8FC7UI\u98CE\u683C\u6BD4\u8F83\u8001\uFF0C\u9700\u8981\u5168\u952E\u76D8\u64CD\u4F5C\uFF0C\u521A\u5F00\u59CB\u53EF\u80FD\u4E0D\u4E60\u60EF\u3002macOS Monterey\u8C8C\u4F3C\u65E0\u6CD5\u8FD0\u884C\u3002]",
    },
    {"Misamino",
        "\u56DE\u5408\u5236",
        "game",
        "Windows | \u5355\u673A\\n\u5757\u5708\u73A9\u5BB6\u81EA\u5236\u65B9\u5757\uFF0C\u5355\u673A1v1\uFF0C\u4E3B\u73A9\u56DE\u5408\u5236\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49AI\uFF08\u81EA\u5DF1\u5199\u7684\u8BDD\u9700\u8981\u4E86\u89E3\u63A5\u53E3\uFF09\u3002",
    },
    {"Touhoumino",
        "\u4E1C\u65B9 \u8F66\u4E07 \u5077\u7334 chewan dongfang th",
        "game",
        "Windows | \u5355\u673A\\n\u5757\u5708\u73A9\u5BB6\u81EA\u5236\u65B9\u5757\uFF0C\u4E00\u4E2ANullpomino\u7684\u81EA\u5E26\u8D44\u6E90\u5305\u7684\u6539\u7248\uFF0C\u5C06\u4E1C\u65B9Project\u5143\u7D20\u4E0E\u4FC4\u7F57\u65AF\u65B9\u5757\u7ED3\u5408\u3002\u9A6C\u62C9\u677E\u6A21\u5F0F\u7ED3\u5408\u4E86\u4E1C\u65B9Project\u91CC\u7684 \u201C\u7B26\u5361\u201D \u673A\u5236\uFF0C\u9700\u8981\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\u8FBE\u6210\u76EE\u6807\u5206\u6570\u624D\u80FD\u51FB\u7834\u3002\\n[\u96BE\u5EA6\u8F83\u5927\uFF0C\u9002\u5408\u6709\u65B9\u5757\u57FA\u7840\u5E76\u4E14\u5404\u9879\u80FD\u529B\u90FD\u8F83\u5F3A\u7684\u73A9\u5BB6\u6E38\u73A9\uFF08\u4E0D\u7136\u90FD\u4E0D\u77E5\u9053\u81EA\u5DF1\u600E\u4E48\u6B7B\u7684\uFF09\u3002]",
    },
    {"Tetris Blitz",
        "\u95EA\u7535\u6218 ea",
        "game",
        "iOS/Android | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0\u95EA\u7535\u6218\uFF0CEA\u4EE3\u7406\u7684\u4E00\u6B3E\u79FB\u52A8\u7AEF\u65B9\u5757\uFF0C\u6709\u91CD\u529B\u8FDE\u9501\u673A\u5236\uFF0C\u9650\u65F62\u5206\u949F\uFF0C\u6E38\u620F\u5F00\u59CB\u4F1A\u6389\u4E0B\u4E00\u5806\u5C0F\u65B9\u5757\uFF1B\u6301\u7EED\u6D88\u884C\u4F1A\u8FDB\u5165Frenzy\u6A21\u5F0F\uFF08\u573A\u5730\u4E0B\u65B9\u4F1A\u4E0D\u65AD\u5192\u51FA\u5783\u573E\u884C\uFF0C\u5E2E\u52A9\u73A9\u5BB6\u5236\u9020\u5927\u8FDE\u9501\uFF0C\u5982\u679C\u591A\u6B21\u843D\u5757\u6CA1\u6709\u6D88\u884C\u4F1A\u5F3A\u5236\u7ED3\u675FFrenzy\uFF09\u3002\u6709\u975E\u5E38\u591A\u7684\u9053\u5177\u3002\\n\u5F53\u65B0\u51FA\u73B0\u7684\u65B9\u5757\u4E0E\u573A\u5730\u73B0\u6709\u65B9\u5757\u91CD\u53E0\u65F6\uFF0C\u573A\u5730\u6700\u4E0A\u65B9\u7684\u51E0\u884C\u4F1A\u88AB\u81EA\u52A8\u6E05\u9664\uFF0C\u6E38\u620F\u4E0D\u7ED3\u675F\u3002\u5DF2\u4E8E2020\u5E744\u6708\u4E0B\u67B6\u3002",
    },
    {"Tetris (EA)",
        "tetris ea",
        "game",
        "iOS/Android | \u5355\u673A/\u591A\u4EBA?\\nEA\u4EE3\u7406\u7684\u4E00\u6B3E\u5B87\u5B99\u4E3B\u9898\u7684\u79FB\u52A8\u7AEF\u65B9\u5757\u3002\u6709\u6ED1\u52A8\u64CD\u63A7\u548C\u5355\u70B9\u89E6\u63A7\u4E24\u79CD\u64CD\u4F5C\u6A21\u5F0F\uFF1B\u9664\u7ECF\u5178\u7684\u9A6C\u62C9\u677E\u5916\u8FD8\u6709\u4E00\u4E2A\u661F\u7CFB\u6A21\u5F0F\uFF08\u5730\u56FE\u6316\u6398\uFF09\uFF0C\u6709\u91CD\u529B\u8FDE\u9501\u673A\u5236\uFF0C\u76EE\u6807\u662F\u5728\u9650\u5B9A\u5757\u6570\u5185\u6D88\u9664\u6240\u6709\u5730\u56FE\u5757\u3002\\n\u5DF2\u4E8E2020\u5E744\u6708\u4E0B\u67B6\u3002",
    },
    {"Tetris Beat",
        "\u8282\u594F n3twork",
        "game",
        "iOS | \u5355\u673A\\nN3TWORK\u4EE3\u7406\u7684\u4E00\u6B3E\u79FB\u52A8\u7AEF\u65B9\u5757\u3002\u9664\u4E86\u9A6C\u62C9\u677E\u4EE5\u5916\u6E38\u620F\u8FD8\u6709\u4E00\u4E2A \u201CBeat\u201D \u6A21\u5F0F\uFF0C\u4F46\u53EA\u9700\u6839\u636EBGM\u7684\u8282\u594F\u843D\u5757\u5C31\u53EF\u4EE5\u5F97\u5230\u989D\u5916\u5206\u6570\u3002\\n[\u7279\u6548\u6BD4\u8F83\u778E\u773C\uFF0C\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u952E\u4F4D\uFF0C\u800C\u4E14\u9ED8\u8BA4\u7684\u6309\u94AE\u4E5F\u5F88\u5C0F\u5BFC\u81F4\u63A7\u5236\u4E5F\u4E0D\u662F\u5F88\u8212\u670D]",
    },
    {"Tetris (N3TWORK)",
        "Tetris n3twork",
        "game",
        "iOS/Android | \u5355\u673A/\u591A\u4EBA\\nN3TWORK\u4EE3\u7406\u7684\u4E00\u6B3E\u79FB\u52A8\u7AEF\u65B9\u5757\uFF0C\u6709\u9A6C\u62C9\u677E\u30013\u5206\u949F\u9650\u65F6\u6253\u5206\u548CRoyale\uFF08\u6700\u591A100\u4EBA\u5BF9\u6218\uFF09\u6A21\u5F0F\u3002\\n[UI\u8BBE\u8BA1\u6BD4\u8F83\u4E0D\u9519\uFF0C\u4F46\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u952E\u4F4D\uFF0C\u800C\u4E14\u9ED8\u8BA4\u7684\u6309\u94AE\u4E5F\u5F88\u5C0F\u5BFC\u81F4\u63A7\u5236\u4E5F\u4E0D\u662F\u5F88\u8212\u670D]",
    },
    {"\u4FC4\u7F57\u65AF\u65B9\u5757\u73AF\u6E38\u8BB0",
        "tetris journey huanyouji",
        "game",
        "iOS/Android | \u5355\u673A/\u591A\u4EBA\\n\u7B80\u79F0\u73AF\u6E38\u8BB0\uFF0C\u56FD\u5185\u7B2C\u4E00\u6B3E\u6B63\u7248\u6388\u6743\u624B\u6E38\u65B9\u5757\u3002\u6709\u95EF\u5173\u6A21\u5F0F\u3001\u5BF9\u6218\u6A21\u5F0F\u548C\u51E0\u4E2A\u5355\u673A\u6A21\u5F0F\u3002\u95EF\u5173\u6A21\u5F0F\u6709\u5404\u79CD\u5404\u6837\u6709\u8DA3\u89C4\u5219\u5927\u591A\u6570\u6709\u91CD\u529B\u8FDE\u9501\uFF0C\u5BF9\u6218\u89C4\u5219\u540C\u73B0\u4EE3\u65B9\u5757\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u865A\u62DF\u6309\u952E\u7684\u5927\u5C0F\u548C\u4F4D\u7F6E\uFF0C\u4F46\u662F\u4E0D\u80FD\u81EA\u5B9A\u4E49DAS/ARR\u3002",
    },
    {"JJ\u5757",
        "\u624B\u673A gougou",
        "game",
        "Android | \u5355\u673A/\u591A\u4EBA\\nJJ\u68CB\u724C\u5E73\u53F0\u4E0B\u4E00\u4E2A\u4F11\u95F2\u6E38\u620F\uFF0CAndroid\u7AEF\u767E\u5EA6 \u201CJJ\u6BD4\u8D5B\u201D \u5B98\u7F51\u4E0B\u8F7D\u5E73\u53F0\u540E\u53EF\u4EE5\u627E\u5230\uFF08\u627E\u4E0D\u5230\u7684\u539F\u56E0\u662FiOS\u7CFB\u7EDF\u6216\u8005\u6CA1\u5728\u5B98\u7F51\u4E0B\u8F7D\u6216\u8005\u88AB\u9650\u5236\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u6E38\u620F\uFF09\u3002\u7AD6\u5C4F\uFF0C\u8F93\u5165\u5EF6\u8FDF\u5F88\u5C0F\uFF0C\u53EF\u81EA\u5B9A\u4E49DAS/ARR/20G\u8F6F\u964D\uFF0C\u7B80\u5355\u81EA\u5B9A\u4E49\u952E\u4F4D\uFF0C\u65E0Hold\uFF0C\u6CA1\u6709B2B\uFF0C\u65E0\u653B\u51FB\u7F13\u51B2\u4E0D\u53EF\u62B5\u6D88\uFF0C\u6BCF\u6B21\u653B\u51FB\u4E0A\u9650\u4E3A4\uFF0C\u8FDE\u51FB\u8F83\u5F3A\uFF0C\u5176\u4ED6\u540C\u73B0\u4EE3\u65B9\u5757\u3002",
    },
    {"\u706B\u62FC\u4FC4\u7F57\u65AF",
        "huopin qq",
        "game",
        "Windows | \u591A\u4EBA\\n\u817E\u8BAF\u6E38\u620F\u5927\u5385\u7684\u65B9\u5757\uFF0C\u573A\u573012\u5217\uFF0C\u6253\u5B57\u7684 DAS \u548C ARR\uFF0C1 Next\u65E0 Hold\uFF0C\u653B\u51FB\u9014\u5F84\u53EA\u6709\u6D884\u62533\u3001 \u6D883\u62532\uFF0C\u5783\u573E\u884C\u4E3A\u56FD\u9645\u8C61\u68CB\u68CB\u76D8\u5F0F\uFF0C\u51E0\u4E4E\u4E0D\u53EF\u80FD\u6316\u6398\u3002",
    },

    -- \u672F\u8BED\uFF08\u7F29\u5199\uFF09
    {"LPM",
        "\u901F\u5EA6 sudu",
        "term",
        "Line Per Minute\\n\u884C\u6BCF\u5206\uFF0C\u4F53\u73B0\u73A9\u5BB6\u4E0B\u5757\u901F\u5EA6\u3002\\n\\n\u6CE8\uFF1A\u4E0D\u540C\u6E38\u620F\u4E2D\u663E\u793A\u7684LPM\u7B97\u6CD5\u53EF\u80FD\u4E0D\u4E00\u6837\uFF0C\u4F8B\u5982TO\u4E2D\u7684LPM\u662F\u7528PPS\u6362\u7B97\u7684\uFF0C\u6BCF1PPS=24LPM\uFF0C\u5FFD\u7565\u6389\u4E86\u5783\u573E\u884C\u7684\u5F71\u54CD\uFF0C\u4E0D\u518D\u662F\u5B57\u9762\u610F\u601D\uFF0CTechmino\u4E2D\u4F7F\u7528L\u2019PM\u4EE3\u8868\u8FD9\u79CD\u6362\u7B97\u540E\u7684LPM\u3002",
    },
    {"PPS",
        "\u901F\u5EA6 sudu",
        "term",
        "Piece Per Second\\n\u5757\u6BCF\u79D2\uFF0C\u4F53\u73B0\u73A9\u5BB6\u4E0B\u5757\u901F\u5EA6\u3002",
    },
    {"BPM",
        "\u901F\u5EA6 sudu",
        "term",
        "Block Per Minute\\n\u5757\u6BCF\u5206\uFF0C\u4F53\u73B0\u73A9\u5BB6\u4E0B\u5757\u901F\u5EA6\\n\u53C8\u79F0PPM\uFF08Piece Per Minute\uFF09",
    },
    {"KPM",
        "\u901F\u5EA6 sudu",
        "term",
        "Key Per Minute\\n\u6309\u952E\u6BCF\u5206\uFF0C\u4F53\u73B0\u73A9\u5BB6\u6309\u952E\u901F\u5EA6\u3002",
    },
    {"KPP",
        "\u6309\u952E anjian",
        "term",
        "Key Per Piece\\n\u6309\u952E\u6BCF\u5757\uFF0C\u4F53\u73B0\u73A9\u5BB6\u64CD\u4F5C\u662F\u5426\u7E41\u7410\u3002\\n\u5B66\u4F1A\u6781\u7B80\u63D0\u5347\u64CD\u4F5C\u6548\u7387\u4EE5\u51CF\u5C11\u6B64\u6570\u5B57\u3002",
    },
    {"APM",
        "\u653B\u51FB attack gongji",
        "term",
        "Attack Per Minute\\n\u653B\u51FB\u6BCF\u5206\uFF0C\u5373\u73A9\u5BB6\u6BCF\u5206\u949F\u80FD\u6253\u51FA\u7684\u5783\u573E\u884C\u6570\u3002\\n\u4E00\u5B9A\u7A0B\u5EA6\u4F53\u73B0\u73A9\u5BB6\u653B\u51FB\u529B\u3002",
    },
    {"SPM",
        "\u53D1\u9001 \u9001\u51FA \u53D1\u51FA send gongji",
        "term",
        "[lines] Sent per minute\\n\u9001\u51FA\u6BCF\u5206\uFF0C\u5373\u73A9\u5BB6\u6BCF\u5206\u949F\u5B9E\u9645\u6253\u51FA\u53BB\u7ED9\u5BF9\u624B\u7684\u5783\u573E\u884C\u6570\u3002\\n\u4E00\u5B9A\u7A0B\u5EA6\u4F53\u73B0\u73A9\u5BB6\u7ED9\u5BF9\u624B\u5B9E\u9645\u9020\u6210\u7684\u653B\u51FB\u529B\u3002",
    },
    {"DPM",
        "\u6316\u6398 \u9632\u5FA1 \u9632\u5B88 dig defend",
        "term",
        "Dig/Defend Per Minute\\n\u6316\u6398\u6BCF\u5206\uFF0C\u5373\u73A9\u5BB6\u6BCF\u5206\u949F\u5411\u4E0B\u6316\u6398\u7684\u5783\u573E\u884C\u6570\u3002\\n\u67D0\u4E9B\u65F6\u5019\u53EF\u4EE5\u4F53\u73B0\u73A9\u5BB6\u751F\u5B58\u80FD\u529B\u3002\\n\\n\u6216\uFF1A\u9632\u5FA1\uFF08\u62B5\u6D88+\u6316\u6398\uFF09\u6BCF\u5206\u3002",
    },
    {"RPM",
        "\u63A5\u6536 \u63A5\u53D7 receive jieshou",
        "term",
        "Receive Per Minute\\n\u63A5\u6536\u6BCF\u5206\uFF0C\u5373\u73A9\u5BB6\u6BCF\u5206\u949F\u6536\u5230\u6765\u81EA\u5BF9\u624B\u7684\u5783\u573E\u884C\u6570\u3002\\n\u4E00\u5B9A\u7A0B\u5EA6\u4F53\u73B0\u73A9\u5BB6\u88AB\u5BF9\u624B\u65BD\u52A0\u7684\u538B\u529B\u3002",
    },
    {"ADPM",
        "\u653B\u51FB \u9632\u5FA1 \u9632\u5B88 attack defend vs",
        "term",
        "Atk & Dig Per Minute\\n\u653B\u51FB+\u6316\u6398\u6BCF\u5206\uFF0C\u7528\u4E8E\u5728\u540C\u4E00\u5C40\u6E38\u620F\u5185\u5BF9\u6BD4\u73A9\u5BB6\u95F4\u6C34\u5E73\u5DEE\u8DDD\uFF0C\u6BD4APM\u66F4\u51C6\u786E\u4E00\u4E9B\u3002\u5728TETR.IO\u4E2D\u53EB \u201CVS\u201D \u7684\u6570\u636E\u5C31\u662FADPM\uFF08\u8C03\u6574\u8FC7\u6BD4\u4F8B\uFF0C\u5177\u4F53\u662FAtk & Dig per 100s\uFF09",
    },
    {"APL",
        "\u6548\u7387 xiaolv xiaolyu",
        "term",
        "Attack Per Line\\n\u653B\u51FB\u6BCF\u884C\uFF0C\u4E5F\u53EB\u6548\u7387\uFF0C\u4F53\u73B0\u73A9\u5BB6\u653B\u51FB\u7684\u884C\u5229\u7528\u7387\u3002\u4F8B\u5982\u6D88\u56DB\u548CT\u65CB\u7684\u6548\u7387\u5C31\u6BD4\u6D88\u4E8C\u548C\u6D88\u4E09\u9AD8\u3002",
    },

    -- \u672F\u8BED\uFF08\u6D88\u9664\u540D\uFF09
    {"Single",
        "1 xiaoyi",
        "term",
        "\u4E00\u6B21\u6D88\u9664\u4E00\u884C\u3002",
    },
    {"Double",
        "2 xiaoer",
        "term",
        "\u4E00\u6B21\u6D88\u9664\u4E24\u884C\u3002",
    },
    {"Triple",
        "3 xiaosan",
        "term",
        "\u4E00\u6B21\u6D88\u9664\u4E09\u884C\u3002",
    },
    {"Techrash",
        "4 tetris xiaosi",
        "term",
        "\u4E00\u6B21\u6D88\u9664\u56DB\u884C\uFF08Techmino\u9650\u5B9A\uFF09\u3002",
    },
    {"Tetris",
        "4 xiaosi",
        "term",
        "\u5546\u6807\uFF0CTetris\u6E38\u620F\u540D\uFF0C\u540C\u65F6\u4E5F\u662F\u522B\u7684\u65B9\u5757\u6E38\u620F\u91CC\u6D88\u56DB\u884C\u7684\u540D\u5B57\u3002\\n\u542B\u4E49\u662FTetra\uFF08\u53E4\u5E0C\u814A\u8BED, \u56DB <\u03C4\u03AD\u03C4\u03C4\u03B1\u03C1\u03B5\u03C2>\uFF09+ Tennis\uFF08\u7F51\u7403 \u6E38\u620F\u539F\u4F5C\u8005\u559C\u6B22\u7684\u8FD0\u52A8\uFF09\u3002\\n\u73B0\u5728\u7248\u6743\u5728TTC\uFF08The Tetris Company\uFF09\u624B\u4E0A\uFF0C\u4EFB\u5929\u5802\u548C\u4E16\u5609\u5F00\u53D1\u6E38\u620F\u662F TTC \u6388\u6743\u7684\uFF0C \u5B83\u4EEC\u81EA\u5DF1\u5E76\u6CA1\u6709Tetris\u7684\u7248\u6743\u3002",
    },
    {"PC",
        "\u5168\u6D88 \u5168\u6E05 perfectclear ac allclear quanxiao quanqing",
        "term",
        "Perfect Clear\uFF08\u4E5F\u53EBAll Clear\uFF0C\u5168\u6D88\uFF0C\u6216\u5168\u6E05\uFF09\u3002\\n\u6D88\u9664\u573A\u5730\u4E0A\u6240\u6709\u7684\u65B9\u5757\u3002",
    },
    {"HPC",
        "hc clear banqing banquanqing banquanxiao",
        "term",
        "Half-PC\\nPC\uFF08\u5168\u6D88\uFF09\u7684\u5916\u5EF6\uFF0C\u201C\u4E0B\u65B9\u6709\u5269\u4F59\u65B9\u5757\u201D \u7684\u5168\u6D88\uFF08\u7279\u522B\u5730\uFF0C\u5982\u679C\u53EA\u6D881\u884C\u5219\u5FC5\u987B\u4E0D\u5269\u4F59\u73A9\u5BB6\u653E\u7F6E\u7684\u65B9\u5757\uFF09\uFF0C\u80FD\u6253\u51FA\u4E00\u4E9B\u653B\u51FB\u548C\u9632\u5FA1\uFF08Techmino\u9650\u5B9A\uFF09\u3002",
    },

    -- \u672F\u8BED\uFF08\u65CB\u8F6C\u76F8\u5173\uFF09
    {"Spin",
        "\u8F6C xuanzhuan zuandong",
        "term",
        "\uFF08\u90E8\u5206\u6E38\u620F\u4E2D\uFF09\u4F7F\u7528\u65CB\u8F6C\u5C06\u65B9\u5757\u5361\u8FDB\u4E0D\u80FD\u76F4\u63A5\u79FB\u52A8\u8FDB\u5165\u7684\u4F4D\u7F6E\uFF0C\u5177\u4F53\u5224\u5B9A\u89C4\u5219\u4E0D\u540C\u6E38\u620F\u4E0D\u4E00\u6837\uFF0C\u53EF\u80FD\u4F1A\u6709\u653B\u51FB\u52A0\u6210\u3002",
    },
    {"Mini",
        "\u8FF7\u4F60",
        "term",
        "Spin\u9644\u52A0Mini\u540E\u653B\u51FB\u4F1A\u5F31\u5316\uFF0C\u7528\u4E8E\u5E73\u8861\u4E0D\u540C\u96BE\u6613\u5EA6\u7684T-spin\u653B\u51FB\uFF0C\u5224\u5B9A\u5728\u4E0D\u540C\u6E38\u620F\u90FD\u4E0D\u4E00\u6837\uFF0C\u800C\u4E14\u5927\u591A\u6570\u5F88\u4E0D\u597D\u7406\u89E3\uFF0C\u5EFA\u8BAE\u53EA\u8BB0\u4F4F\u5E38\u89C1\u5F62\u72B6\u5373\u53EF\u3002",
    },
    {"All Spin",
        "allspin",
        "term",
        "\u4E00\u79CD\u89C4\u5219\uFF0C\u6307\u6240\u6709\u65B9\u5757\u7684Spin\u90FD\u6709\u653B\u51FB\u529B\uFF0C\u800C\u4E0D\u6B62\u662FT-spin\u624D\u6709\u653B\u51FB\uFF08\u5373T-Spin Only\uFF09\u3002",
    },
    {"T-Spin",
        "T\u8F6C T\u65CB \u65CB\u8F6C tspin txuan",
        "term",
        "\u5728\u5B98\u65B9\u89C4\u5219\u4E2D\uFF0C\u5F53T\u65B9\u5757\u5728\u9501\u5B9A\u524D\u7684\u6700\u540E\u4E00\u4E2A\u64CD\u4F5C\u662F\u65CB\u8F6C\uFF0C\u5E76\u4E14\u9501\u5B9A\u540E\u65CB\u8F6C\u4E2D\u5FC3\u5BF9\u5E94\u7684\u56DB\u4E2A\u659C\u89D2\u4F4D\u7F6E\u6709\u4E09\u4E2A\u4E0D\u662F\u7A7A\u6C14\uFF0C\u90A3\u4E48\u8FD9\u5C31\u662F\u4E00\u4E2AT-spin\u3002\\nPS\uFF1A\u5982\u679C\u6EE1\u8DB3\u4E00\u4E9B\u989D\u5916\u6761\u4EF6\u4F1A\u88AB\u6253\u4E0Amini\u6807\u7B7E\u51CF\u5C11\u653B\u51FB\u529B\u3002",
    },
    {"TSS",
        "t1 tspin",
        "term",
        "T-Spin Single\\n\u6307\u4F7F\u7528T\u65B9\u5757Spin\u5E76\u4E00\u6B21\u6D88\u96641\u884C\u3002\u7B80\u79F0T1\u3002",
    },
    {"TSD",
        "t2 tspin",
        "term",
        "T-spin Double\\n\u6307\u4F7F\u7528T\u65B9\u5757Spin\u5E76\u4E00\u6B21\u6D88\u96642\u884C\u3002\u7B80\u79F0T2\u3002",
    },
    {"TST",
        "t3 tspin",
        "term",
        "T-spin Triple\\n\u6307\u4F7F\u7528T\u65B9\u5757Spin\u5E76\u4E00\u6B21\u6D88\u96643\u884C\u3002\u7B80\u79F0T3\u3002",
    },
    {"MTSS",
        "mini tspin minitspinsingle tsms tspinminisingle",
        "term",
        "Mini T-spin Single\\n\u6307T\u65B9\u5757Mini Spin\u6D881\u884C\uFF08\u4E0D\u540C\u6E38\u620F\u5224\u5B9A\u4E0D\u4E00\u6837\uFF09\u3002\\n\u90E8\u5206\u6E38\u620F\u4E2D\u53EF\u80FD\u53EB\u505A \u201CT-Spin Mini\u201D\u3002",
    },
    {"MTSD",
        "mini tspin minitspindouble tsmd tspinminidouble",
        "term",
        "Mini T-spin Double\\n\u6307T\u65B9\u5757Mini Spin\u6D882\u884C\uFF08\u4EC5\u90E8\u5206\u6E38\u620F\u5185\u5B58\u5728\u4E14\u5224\u5B9A\u4E0D\u4E00\u6837\uFF09\u3002",
    },
    {"O-spin",
        "o\u8F6C o\u65CB ospin oxuan ozhuan",
        "term",
        "\u7531\u4E8EO\u65B9\u5757\u65CB\u8F6C\u540E\u5F62\u72B6\u4E0D\u53D8\uFF0C\u53EA\u80FD\u5DE6\u53F3\u79FB\u52A8\uFF0C\u6240\u4EE5\u7ECF\u5E38\u88AB\u5361\u4F4F\uFF0C\u4E8E\u662F\u65B9\u5757\u5708\u5C31\u6709\u4E86O-spin\u7684\u6897\uFF1A\\n\u6709\u4EBA\u505A\u8FC7T99/TF\u4E2D\u7684O\u53D8\u5F62\u7684\u7279\u6548\u89C6\u9891\u4E14\u5E7F\u4E3A\u6D41\u4F20\uFF1B\\nT-ex\u8BBE\u8BA1\u7684\u65CB\u8F6C\u7CFB\u7EDF\u53EF\u4EE5\u7528spin\u4F7FO\u4F20\u9001\u8FDB\u5751\uFF1B\\nTech\u8BBE\u8BA1\u7684\u53D8\u5F62\u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u65CB\u8F6CO\u6765\u53D8\u5F62/\u4F20\u9001\u8FDB\u5165\u4E00\u4E9B\u7279\u5B9A\u5F62\u72B6\u7684\u6D1E\u3002",
    },
    {"\u65CB\u8F6C\u7CFB\u7EDF (\u8E22\u5899)",
        "\u65CB\u8F6C\u7CFB\u7EDF \u8E22\u5899 xuanzhuanxitong wallkick tiqiang",
        "term",
        "\u73B0\u4EE3\u65B9\u5757\u6E38\u620F\u4E2D\uFF0C\u65B9\u5757\u53EF\u4EE5\u7ED5\u7740\u65CB\u8F6C\u4E2D\u5FC3\uFF08Techmino\u4E2D\u53EF\u89C1\uFF09\u65CB\u8F6C\uFF08\u90E8\u5206\u6E38\u620F\u6CA1\u6709\u56FA\u5B9A\u4E2D\u5FC3\uFF09\uFF0C\u5982\u679C\u65CB\u8F6C\u540E\u548C\u573A\u5730\u6216\u5899\u58C1\u6709\u91CD\u5408\uFF0C\u4F1A\u6839\u636E<\u4ECE\u54EA\u4E2A\u65B9\u5411\u8F6C\u5230\u54EA\u4E2A\u65B9\u5411>\u8FDB\u884C\u4E00\u4E9B\u504F\u79FB\u6D4B\u8BD5\uFF08\u8FD9\u4E2A\u504F\u79FB\u79F0\u4E3A\u8E22\u5899\uFF09\uFF0C\u4E0D\u4F1A\u5361\u4F4F\u8F6C\u4E0D\u52A8\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u8BA9\u65B9\u5757\u94BB\u8FDB\u5165\u4E00\u4E9B\u7279\u5B9A\u5F62\u72B6\u7684\u6D1E\u3002\u4E0D\u540C\u7684\u65CB\u8F6C\u7CFB\u7EDF\u504F\u79FB\u4F4D\u7F6E\u987A\u5E8F\u90FD\u4E0D\u4E00\u6837\uFF0C\u5177\u4F53\u6570\u636E\u53BB\u5404\u5927Wiki\u4E0A\u67E5\uFF0C\u4E00\u5806\u6570\u5B57\u8FD9\u91CC\u5C31\u4E0D\u653E\u4E86",
    },
    {"\u65B9\u5757\u671D\u5411",
        "\u65CB\u8F6C \u671D\u5411 xuanzhuan chaoxiang orientation direction 0r2l 02 20 rl lr",
        "term",
        "\u5728SRS\u6216\u8005\u7C7BSRS\u7684\u65CB\u8F6C\u7CFB\u7EDF\u4E2D\u9700\u8981\u8BF4\u660E\u65B9\u5757\u671D\u5411\u7684\u65F6\u5019\uFF0C\u201C\u671D\u4E0B\u201D \u201C\u7AD6\u7740\u201D \u7B49\u8BCD\u63CF\u8FF0\u592A\u6A21\u7CCA\u3002\\nSRS\u4E2D\u6BCF\u79CD\u65B9\u5757\u7684\u521D\u59CB\u72B6\u6001\u56FA\u5B9A\uFF0C\u6240\u4EE5\u6211\u4EEC\u4F7F\u75280\uFF08\u539F\u4F4D\uFF09\u3001R\uFF08\u53F3\uFF0C\u5373\u987A\u65F6\u9488\u8F6C\u4E00\u6B21\uFF09\u30012\uFF08\u8F6C\u4E24\u4E0B\uFF0C\u5373180\xB0\uFF09\u3001L\uFF08\u5DE6\uFF0C\u5373\u9006\u65F6\u9488\u8F6C\u4E00\u6B21\uFF09\u56DB\u4E2A\u5B57\u7B26\u8868\u793A\u65B9\u5757\u7684\u56DB\u79CD\u72B6\u6001\uFF0C\u4ECE\u539F\u4F4D\uFF080\uFF09\u5F00\u59CB\u987A\u65F6\u9488\u8F6C\u4E00\u5708\u56DB\u4E2A\u72B6\u6001\u662F0R2L\u3002\\n\u6700\u65E9\u89C1\u4E8ESRS\u8E22\u5899\u8868\u7684\u884C\u9996\uFF0C0\u2192L\u8868\u793A\u539F\u4F4D\u9006\u65F6\u9488\u8F6C\u4E00\u6B21\u5230L\u72B6\u6001\uFF0C0\u2192R\u8868\u793A\u539F\u4F4D\u987A\u65F6\u9488\u8F6C\u4E00\u6B21\u5230R\u72B6\u6001\uFF0C2\u2192R\u4EE3\u8868\u4ECE180\xB0\u72B6\u6001\u9006\u65F6\u9488\u8F6C\u4E00\u6B21\u5230R\u72B6\u6001\u3002",
    },
    {"ARS",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "Arika Rotation System\uFF0CTGM\u7CFB\u5217\u4F7F\u7528\u7684\u65CB\u8F6C\u7CFB\u7EDF\uFF083\u4EE3\u4E2D\u7684C\u6A21\u5F0F\uFF09\\n\u6216\u8005\\nAtari Rotation System\uFF0C\u4E00\u4E2A\u5DE6\u4E0A\u5BF9\u9F50\u65CB\u8F6C\u7CFB\u7EDF\u3002",
    },
    {"ASC RS",
        "\u65CB\u8F6C\u7CFB\u7EDF ascrs rotate",
        "term",
        "ASC Rotation System\\nASC\u5757\u4F7F\u7528\u7684\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u6240\u6709\u5757\u6240\u6709\u5F62\u72B6\u53EA\u6839\u636E\u65CB\u8F6C\u65B9\u5411\uFF08\u987A\u65F6\u9488\u548C\u9006\u65F6\u9488\uFF09\u4F7F\u7528\u4E24\u4E2A\u5BF9\u79F0\u7684\u8868\uFF0C\u8E22\u5899\u8303\u56F4\u5927\u6982\u662F\xB12, \xB12\u3002",
    },
    {"ASC+ RS",
        "\u65CB\u8F6C\u7CFB\u7EDF asc+rs ascplusrs rotate",
        "term",
        "Techmino\u4E2DASC\u7684\u4FEE\u6539\u7248\u672C\uFF0C\u6DFB\u52A0\u4E86180\xB0\u8F6C\u7684\u8E22\u5899\u8868\u3002",
    },
    {"BRS",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "BPS Rotation System\\nBPS\u5757\u4F7F\u7528\u7684\u65CB\u8F6C\u7CFB\u7EDF\u3002",
    },
    {"BiRS",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "Bias Rotation System\\nTechmino\u539F\u521B\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u57FA\u4E8EXRS\u548CSRS\u8BBE\u8BA1\u3002\\n\u5F53\u5DE6/\u53F3/\u4E0B\uFF08\u8F6F\u964D\uFF09\u88AB\u6309\u4E0B\u5E76\u4E14\u90A3\u4E2A\u65B9\u5411\u9876\u4F4F\u4E86\u5899\uFF0C\u6309\u65CB\u8F6C\u540E\u4F1A\u5148\u8BBE\u5B9A\u4E00\u4E2A\u504F\u79FB\uFF08\u4E09\u4E2A\u952E\u671D\u5404\u81EA\u65B9\u5411\u52A01\u683C\uFF09\uFF0C\u5728\u504F\u79FB\u7684\u57FA\u7840\u4E0A\u8BD5\u8E22\u5899\u8868\u91CC\u7684\u4F4D\u79FB\uFF08\u5168\u90FD\u5931\u8D25\u4E86\u4F1A\u5148\u53D6\u6D88\u5411\u4E0B\u7684\u504F\u79FB\u518D\u628A\u8E22\u5899\u91CD\u65B0\u8BD5\u4E00\u904D\uFF0C\u518D\u90FD\u4E0D\u884C\u5C31\u53D6\u6D88\u5DE6\u53F3\uFF0C\u518D\u4E0D\u884C\u5C31\u5931\u8D25\uFF09\u3002\\nBiRS\u76F8\u6BD4XRS\u53EA\u4F7F\u7528\u4E00\u4E2A\u8E22\u5899\u8868\u66F4\u5BB9\u6613\u8BB0\u5FC6\uFF0C\u5E76\u4E14\u4FDD\u7559\u4E86SRS\u7FFB\u8D8A\u5730\u5F62\u7684\u529F\u80FD\u3002\\n\\n\u7EC6\u8282\u8865\u5145\uFF1A\u5728\u6D4B\u8BD5\u8E22\u5899\u65F6\u8981\u6EE1\u8DB3\u4E24\u4E2A\u6761\u4EF6\uFF0C\u6700\u7EC8\u4F4D\u79FB\u6B27\u6C0F\u8DDD\u79BB\u4E0D\u80FD\u8D85\u8FC7\u221A5\uFF0C\u5E76\u4E14\u5B58\u5728\u6C34\u5E73\u504F\u79FB\u65F6\u6700\u7EC8\u6C34\u5E73\u4F4D\u79FB\u5FC5\u987B\u548C\u5B83\u4E0D\u53CD\u5411\u3002",
    },
    {"C2RS",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "Cultris II Rotation System\\nCultris II\u539F\u521B\u7684\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u6240\u6709\u65CB\u8F6C\u5171\u7528\u4E00\u4E2A\u8868\uFF0C\u987A\u5E8F\u662F\uFF1A\\n\u5DE61\u2192\u53F31\u2192\u4E0B1\u2192\u5DE6\u4E0B\u2192\u53F3\u4E0B\u2192\u5DE62\u2192\u53F32\\n\u6CE8\u610F\uFF0C\u5DE6\u4F18\u5148\u4E8E\u53F3\u3002",
    },
    {"C2sym",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "Techmino\u4E2DC2RS\u7684\u4FEE\u6539\u7248\u672C\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u65B9\u5757\u5F62\u72B6\u548C\u72B6\u6001\uFF0C\u5404\u81EA\u9009\u62E9\u4F18\u5148\u6D4B\u8BD5\u5DE6\u8FD8\u662F\u53F3\u3002",
    },
    {"DRS",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "DTET Rotation System.",
    },
    {"NRS",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "Nintendo Rotation System\uFF0CNES\u548CGB\u5757\u4F7F\u7528\u7684\u65CB\u8F6C\u7CFB\u7EDF\u3002NRS\u6709\u4E24\u4E2A\u4E92\u4E3A\u955C\u50CF\u7684\u7248\u672C\uFF0C\u5DE6\u65CB\u7248\u7528\u4E8EGB\uFF0C\u53F3\u65CB\u7248\u7528\u4E8ENES\u3002",
    },
    {"SRS",
        "\u8D85\u7EA7\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "Super Rotation System\\n\u73B0\u4EE3\u65B9\u5757\u6700\u5E38\u7528\u7684\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u4E5F\u662F\u4E0D\u5C11\u81EA\u5236\u65CB\u8F6C\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u6A21\u677F\u3002\\n\u5BF9\u4E8ESRS\uFF0C\u6BCF\u4E2A\u65B9\u5757\u6709\u56DB\u4E2A\u65B9\u5411\uFF0C\u53EF\u4EE5\u671D\u4E24\u8FB9\u8F6C\uFF08180\xB0\u4E0D\u7B97\uFF0C\u6700\u5F00\u59CB\u6CA1\u6709\u8FD9\u4E2A\u8BBE\u8BA1\uFF09\uFF0C\u6240\u4EE5\u603B\u51718\u79CD\uFF0C\u5BF9\u5E948\u4E2A\u504F\u79FB\u8868\uFF0C\u5177\u4F53\u6570\u636E\u53BBWiki\u4E0A\u67E5\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u653E\u4E86\u3002",
        "https://tetris.wiki/Super_Rotation_System",
    },
    {"SRS+",
        "\u8D85\u7EA7\u65CB\u8F6C\u7CFB\u7EDF srsplus rotate",
        "term",
        "SRS\u7684\u62D3\u5C55\u7248\uFF0C\u6DFB\u52A0\u4E86180\xB0\u8F6C\u7684\u8E22\u5899\u8868\u3002",
    },
    {"TRS",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "Techmino Rotation System\\nTechmino\u539F\u521B\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u57FA\u4E8ESRS\u8BBE\u8BA1\uFF0C\u4FEE\u8865\u4E86\u4E00\u4E9B\u5E38\u89C1SZ\u5361\u6B7B\u7684\u5730\u5F62\uFF0C\u589E\u52A0\u4E86\u4E0D\u5C11\u5B9E\u7528\u8E22\u5899\u3002\\n\u6BCF\u4E2A\u4E94\u8FDE\u5757\u4E5F\u57FA\u672C\u6309\u7167SRS\u7684Spin\u903B\u8F91\u5355\u72EC\u8BBE\u8BA1\u4E86\u8E22\u5899\u8868\u3002\\n\u66F4\u6709\u795E\u5947O-spin\u7B49\u4F60\u63A2\u7D22\uFF01",
    },
    {"XRS",
        "\u65CB\u8F6C\u7CFB\u7EDF rotate",
        "term",
        "X Rotation System\\nT-ex\u539F\u521B\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u5F15\u5165\u4E86 \u201C\u6309\u4F4F\u65B9\u5411\u952E\u6362\u4E00\u5957\u8E22\u5899\u8868\u201D \u7684\u8BBE\u5B9A\uFF08\u5728\u5BF9\u5E94\u7684\u65B9\u5411\u9700\u8981\u9876\u4F4F\u5899\uFF09\uFF0C\u8BA9 \u201C\u60F3\u53BB\u54EA\u201D \u80FD\u88AB\u6E38\u620F\u6355\u83B7\u4ECE\u800C\u8F6C\u5230\u73A9\u5BB6\u5E0C\u671B\u5230\u8FBE\u7684\u4F4D\u7F6E\u3002\\n\\n\u5176\u4ED6\u65CB\u8F6C\u7CFB\u7EDF\u65E0\u8BBA\u8E22\u5899\u8868\u600E\u4E48\u8BBE\u8BA1\uFF0C\u5757\u5904\u5728\u67D0\u4E2A\u4F4D\u7F6E\u65F6\u65CB\u8F6C\u540E\u6700\u7EC8\u53EA\u80FD\u6309\u56FA\u5B9A\u987A\u5E8F\u6D4B\u8BD5\uFF0C\u8FD9\u5BFC\u81F4\u4E0D\u540C\u7684\u8E22\u5899\u662F\u7ADE\u4E89\u7684\uFF0C\u82E5\u5B58\u5728\u4E24\u4E2A\u53EF\u80FD\u60F3\u53BB\u7684\u4F4D\u7F6E\u5C31\u53EA\u80FD\u4E8C\u9009\u4E00\uFF0CXRS\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002",
    },

    -- \u672F\u8BED\uFF08\u5176\u4ED6\uFF09
    {"B2B",
        "\u5927\u6EE1\u8D2F btb backtoback",
        "term",
        "Back to Back\\n\u8FDE\u7EED\u6253\u51FA\u4E24\u6B21\u7279\u6B8A\u6D88\u884C\uFF08Spin\u6216\u6D88\u56DB\uFF09\uFF0C\u4E2D\u95F4\u4E0D\u5939\u6742\u666E\u901A\u6D88\u884C\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u989D\u5916\u7684\u653B\u51FB\uFF08\u5728Techmino\u4E2DB2B\u4E3A\u6EE1\u8D2F\uFF0C\u5927\u6EE1\u8D2F\u662FB3B\uFF09\u3002\u8FDE\u7EEDPC/HPC\u5728Techmino\u4E2D\u4E5F\u7B97B2B/B3B\u3002",
    },
    {"B2B2B",
        "\u5927\u6EE1\u8D2F b3b backtobacktoback",
        "term",
        "Back to Back to Back\\nB2B\u7684\u52A0\u5F3A\u7248\uFF0C\u7F29\u5199B3B\uFF0C\u5927\u91CFB2B\u540E\u8FDE\u7EEDB2B\u4F1A\u53D8\u6210B2B2B\uFF0C\u63D0\u4F9B\u66F4\u5F3A\u7684\u653B\u51FB\uFF08\u4EC5Techmino\u4E2D\u6709\uFF09\u3002",
    },
    {"Fin/Neo/Iso",
        "\u7279\u6B8A fin neo iso",
        "term",
        "\u4E09\u7C7B\u7279\u6B8AT2\u7684\u540D\u5B57\uFF0C\u4E0D\u540C\u7684\u6E38\u620F\u5185\u7684\u653B\u51FB\u53EF\u80FD\u4E0D\u4E00\u6837\uFF0C\u5B9E\u6218\u4E2D\u57FA\u672C\u6CA1\u6709\u7279\u6B8A\u4EF7\u503C\uFF0C\u53EF\u4EE5\u4E0D\u8BE6\u7EC6\u4E86\u89E3\u3002",
    },
    {"\u73B0\u4EE3\u65B9\u5757",
        "modern xiandaikuai tetris",
        "term",
        "\u73B0\u4EE3\u65B9\u5757\u662F\u4E00\u4E2A\u6A21\u7CCA\u7684\u6982\u5FF5\uFF0C\u8FD9\u91CC\u5217\u51FA\u4E00\u90E8\u5206 \u201C\u6807\u51C6\u201D \u89C4\u5219\uFF0C\u6EE1\u8DB3\u5927\u90E8\u5206\u7684\u90FD\u53EF\u4EE5\u8BA4\u4E3A\u662F\u73B0\u4EE3\u65B9\u5757\uFF1A\\n1.\u53EF\u89C1\u573A\u5730\u5927\u5C0F\u662F10\xD720\uFF0C\u4E0D\u8FC7\u4E0A\u65B9\u7A7A\u95F4\u4E5F\u662F\u5B58\u5728\u7684\uFF0C\u4E0A\u9650\u53EF\u4EE5\u81EA\u5DF1\u5B9A\uFF0C\u4E00\u4E9B\u6E38\u620F\u7528\u7684\u662F40\uFF1B\\n2.\u4E03\u79CD\u65B9\u5757\u4ECE\u9876\u90E8\u6B63\u4E2D\u95F4\u51FA\u73B0\uFF08\u5947\u6570\u5BBD\u65B9\u5757\u504F\u5DE6\uFF0C\u9AD8\u5EA6\u53EF\u4EE5\u662F\u65B9\u5757\u5E95\u90E8\u6216\u9876\u90E8\u8D34\u7740\u573A\u5730\u9876\uFF09\uFF0C\u540C\u4E00\u79CD\u65B9\u5757\u7684\u671D\u5411\uFF08\u4E00\u822C\u662F\u5E73\u7684\u9762\u671D\u4E0B\uFF09\u548C\u989C\u8272\u90FD\u4E00\u81F4\uFF1B\\n3.\u4E00\u4E2A\u5408\u9002\u7684\u968F\u673A\u51FA\u5757\u673A\u5236\uFF08\u5E38\u89C1\u7684\u8BE6\u89C1Bag7\u8BCD\u6761\u548CHis\u8BCD\u6761\uFF09\uFF1B\\n4.\u4E00\u4E2A\u5408\u9002\u7684\u7684\u65CB\u8F6C\u7CFB\u7EDF\uFF08\u81F3\u5C11\u6709\u53CC\u65CB\uFF0C\u8BE6\u89C1\u53CC\u65CB\u8BCD\u6761\uFF09\uFF08\u6700\u597D\u662FSRS\u6216\u7C7BSRS\uFF0C\u8BE6\u89C1SRS\u8BCD\u6761\uFF09\uFF1B\\n5.\u4E00\u4E2A\u5408\u9002\u7684\u9501\u5B9A\u5EF6\u8FDF\u7CFB\u7EDF\uFF0C\u8BE6\u89C1\u9501\u5B9A\u5EF6\u8FDF\u8BCD\u6761\uFF1B\\n6.\u4E00\u4E2A\u5408\u9002\u7684\u6B7B\u4EA1\u5224\u5B9A\uFF0C\u8BE6\u89C1\u6B7B\u4EA1\u5224\u5B9A\u8BCD\u6761\uFF1B\\n7.\u6709Next\u529F\u80FD\uFF08\u4E00\u822C\u662F3~6\u4E2A\uFF0C\u4E5F\u67091\u4E2A\u7684\uFF09\uFF0C\u8BE6\u89C1Next\u8BCD\u6761\uFF0C\u5E76\u4E14\u65B9\u5411\u548C\u51FA\u73B0\u65F6\u5019\u7684\u65B9\u5411\u4E00\u81F4\uFF1B\\n8.\u6709Hold\u529F\u80FD\uFF0C\u8BE6\u89C1Hold\u8BCD\u6761\uFF1B\\n9.\u6709DAS\u7CFB\u7EDF\u8D1F\u8D23\u7CBE\u5BC6\u5E76\u4E14\u5FEB\u901F\u7684\u5DE6\u53F3\u79FB\u52A8\uFF0C\u8BE6\u89C1DAS\u8BCD\u6761\uFF1B\\n10.\u5982\u679C\u6709\u51FA\u5757\u5EF6\u8FDF\u548C\u6D88\u884C\u5EF6\u8FDF\uFF0C\u90A3\u4E48\u9700\u8981\u6709\u63D0\u524D\u65CB\u8F6C/Hold\u7CFB\u7EDF\uFF0C\u8BE6\u89C1IRS\u548CIHS\u8BCD\u6761\uFF0CIMS\u662FTechmino\u7279\u6709\u3002",
    },
    {"\u65B9\u5757\u5F62\u72B6",
        "xingzhuang shape tetromino tetrimino",
        "term",
        "\u5728\u6807\u51C6\u7684\u65B9\u5757\u6E38\u620F\u4E2D\uFF0C\u7528\u5230\u7684\u65B9\u5757\u662F\u6240\u6709\u7684 \u201C\u56DB\u8FDE\u5757\u201D\uFF0C\u5373\u56DB\u4E2A\u6B63\u65B9\u5F62\u5171\u7528\u8FB9\u8FDE\u63A5\u6210\u7684\u5F62\u72B6\u3002\\n\u5728\u4E0D\u5141\u8BB8\u7FFB\u8F6C\uFF0C\u53EA\u5141\u8BB8\u65CB\u8F6C\u7684\u60C5\u51B5\u4E0B\uFF0C\u56DB\u8FDE\u5757\u4E00\u5171\u6709\u4E03\u79CD\uFF0C\u6839\u636E\u5B83\u4EEC\u7684\u5F62\u72B6\u4E00\u822C\u5206\u522B\u53EB\u505AZ\u3001S\u3001J\u3001L\u3001T\u3001O\u3001I\u3002\\n\\n\u8BE6\u89C1\u4E0B\u65B9 \u201C\u65B9\u5757\u540D\u79F0\u201D\u3002",
    },
    {"\u65B9\u5757\u989C\u8272",
        "yanse color colour tetromino tetrimino",
        "term",
        "\u4E3B\u6D41\u65B9\u5757\u6E38\u620F\u4E2D\u4E03\u79CD\u5757\u7684\u989C\u8272\u4F1A\u4F7F\u7528\u540C\u4E00\u5957\u5F69\u8679\u914D\u8272\uFF1A\\nZ\uFF1A\u7EA2 S\uFF1A\u7EFF J\uFF1A\u84DD L\uFF1A\u6A59 T\uFF1A\u7D2B O\uFF1A\u9EC4 I\uFF1A\u9752\\n\\nTechmino\u9ED8\u8BA4\u4E5F\u4F7F\u7528\u8FD9\u4E00\u5957 \u201C\u6807\u51C6\u201D \u914D\u8272\u3002",
    },
    {"\u63D0\u524D\u65CB\u8F6C(IRS)",
        "irs initialrotatesystem",
        "term",
        "Initial Rotation System \u63D0\u524D\u65CB\u8F6C\u7CFB\u7EDF\\n\u65B9\u5757\u51FA\u73B0\u524D\u63D0\u524D\u6309\u4E0B\u65CB\u8F6C\u540E\uFF0C\u51FA\u73B0\u65F6\u5C31\u662F\u8F6C\u597D\u7684\u5F62\u72B6\uFF0C\u6709\u65F6\u53EF\u4EE5\u907F\u514D\u6B7B\u4EA1\u3002",
    },
    {"\u63D0\u524D\u6682\u5B58(IHS)",
        "ihs initialholdsystem",
        "term",
        "Initial Hold System \u63D0\u524DHold\u7CFB\u7EDF\\n\u65B9\u5757\u51FA\u73B0\u524D\u63D0\u524D\u6309\u4E0Bhold\u540E\uFF0C\u76F4\u63A5\u51FA\u73B0hold\u91CC\u7684\u65B9\u5757\uFF0C\u6709\u65F6\u53EF\u4EE5\u907F\u514D\u6B7B\u4EA1\u3002",
    },
    {"\u63D0\u524D\u79FB\u52A8(IMS)",
        "ims initialmovesystem",
        "term",
        "Initial Move System \u63D0\u524D\u79FB\u52A8\u7CFB\u7EDF\\n\u65B9\u5757\u51FA\u73B0\u524D\u63D0\u524D\u6309\u4F4F\u79FB\u52A8\u540E\uFF0C\u51FA\u73B0\u65F6\u4F1A\u671D\u79FB\u52A8\u65B9\u5411\u504F\u4E00\u683C\uFF0C\u6709\u65F6\u53EF\u4EE5\u907F\u514D\u6B7B\u4EA1\uFF08Techmino\u9650\u5B9A\uFF09\u3002\\n\u6CE8\uFF1A\u9700\u8981\u5757\u51FA\u73B0\u65F6das\u5DF2\u5145\u6EE1",
    },
    {"\u9884\u89C8(Next)",
        "\u4E0B\u4E00\u4E2A next yulan xiayige",
        "term",
        "\u6307\u793A\u540E\u8FB9\u51E0\u4E2A\u5757\u7684\u987A\u5E8F\u3002\\n\u63D0\u524D\u601D\u8003\u624B\u4E0A\u8FD9\u5757\u600E\u4E48\u6446\u53EF\u4EE5\u8BA9\u540E\u9762\u8F7B\u677E\u662F\u73A9\u5BB6\u63D0\u5347\u7684\u5FC5\u9700\u6280\u80FD\u3002\\n\\n\u5173\u4E8E\u73A9\u5BB6\u73A9\u7684\u65F6\u5019\u5230\u5E95\u770B\u4E86\u51E0\u4E2ANext\uFF1A\u8FD9\u4E2A\u6570\u5B57\u5E76\u4E0D\u56FA\u5B9A\uFF0C\u4E0D\u540C\u73A9\u5BB6\u3001\u4E0D\u540C\u6A21\u5F0F\u3001\u4E0D\u540C\u5C40\u9762\uFF0C\u8BA1\u7B97next\u7684\u6570\u91CF\u90FD\u4E0D\u4E00\u6837\uFF0C\u901A\u8FC7\u8C03\u6574\u53EF\u89C1Next\u6570\u91CF\u625340L\u6BD4\u8F83\u65F6\u95F4\u7B49\u65B9\u5F0F\u6D4B\u5F97\u7684\u6570\u636E\u5E76\u4E0D\u51C6\u786E\u3002\\n\\n\u5177\u4F53\u4F8B\u5982\uFF0C\u4E00\u4E2A\u6BD4\u8F83\u719F\u7EC3\u7684\u73A9\u5BB6\u51E0\u4E4E\u6C38\u8FDC\u4F1A\u63D0\u524D\u7B97\u597D\u4E00\u4E2ANext\uFF0C\u4E0D\u7136\u4E0D\u4F1A\u9501\u5B9A\u624B\u91CC\u7684\u5757\uFF1B\u573A\u5730\u4E0A\u5C06\u8981\u51FA\u73B0\u6216\u53EF\u4EE5\u6784\u9020\u6D88\u56DB\u6D1E\uFF08T\u5751\uFF09\u7684\u65F6\u5019\u4F1A\u627E\u6700\u8FD1\u7684I\uFF08T\uFF09\u4EC0\u4E48\u65F6\u5019\u6765\uFF0C\u5982\u679C\u592A\u8FDC\u4E86\u5C31\u4F1A\u76F4\u63A5\u6316\u6389\u653E\u5F03\u672C\u6B21\u653B\u51FB\u4EE5\u9632\u88AB\u5BF9\u624B\u5077\u88AD\u3002\u8FD9\u4E24\u79CD\u60C5\u51B5\u5E76\u4E0D\u72EC\u7ACB\uFF0C\u6709\u5F88\u591A\u4ECB\u4E8E\u4E2D\u95F4\u7684\u60C5\u51B5\u3002\u6240\u4EE5\uFF0C\u4E00\u4E2A\u73A9\u5BB6\u770B\u7684Next\u6570\u91CF\u662F\u65F6\u523B\u5728\u53D8\u7684\uFF0C\u201C\u67D0\u4EBA\u770B\u51E0\u4E2ANext\u201D \u6CA1\u6709\u7CBE\u786E\u7B54\u6848\uFF0C\u5FC5\u987B\u5728\u6307\u660E\u60C5\u51B5\u7684\u65F6\u5019\u6570\u5B57\u624D\u80FD\u4F5C\u4E3A\u53C2\u8003\u3002",
    },
    {"\u6682\u5B58(Hold)",
        "\u4EA4\u6362 hold zancun",
        "term",
        "\u5C06\u624B\u91CC\u7684\u65B9\u5757\u548CHold\u69FD\u4E2D\u7684\u4EA4\u6362\uFF0C\u4E00\u822C\u4E0D\u80FD\u8FDE\u7EED\u4F7F\u7528\u3002\\n\u7528\u6765\u8C03\u6574\u5757\u5E8F\uFF0C\u66F4\u5BB9\u6613\u6446\u51FA\u4F60\u60F3\u8981\u7684\u5F62\u72B6\u3002\\nTechmino\u4E2D\u6709\u4E00\u4E2A \u201C\u7269\u7406Hold\u201D \u673A\u5236\uFF0C\u5F00\u542F\u540EHold\u6362\u51FA\u7684\u65B9\u5757\u4F1A\u76F4\u63A5\u51FA\u73B0\u5728\u5F53\u524D\u65B9\u5757\u6240\u5728\u7684\u4F4D\u7F6E\\n\\n\u7528\u4E0D\u7528Hold\u5404\u6709\u597D\u5904\uFF0C\u4E0D\u7528\u7684\u8BDD\u770B\u5230\u5E8F\u5217\u662F\u4EC0\u4E48\u5C31\u662F\u4EC0\u4E48\uFF0C\u51CF\u5C11\u4E86\u601D\u8003\u91CF\uFF1B\u5E76\u4E14\u51CF\u5C11\u4E86\u6309\u952E\u7684\u79CD\u7C7B\uFF0C\u64CD\u4F5C\u7B80\u5355\u5BB9\u6613\u63D0\u5347KPS\uFF0C\u6709\u4E9B\u4EBA\u768440L\u8BB0\u5F55\u5C31\u662F\u4E0D\u7528Hold\u6253\u51FA\u7684\u3002\u7528Hold\u53EF\u4EE5\u7075\u6D3B\u5730\u8C03\u6574\u5E8F\u5217\uFF0C\u51CF\u5C11\u9AD8\u91CD\u529B\u7B49\u89C4\u5219\u5E26\u6765\u7684\u96BE\u5EA6\uFF0C\u7B97\u529B\u8DB3\u591F\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u8FBE\u6210\u66F4\u590D\u6742\u7684\u76EE\u6807\uFF0C\u751A\u81F3\u53CD\u8FC7\u6765\u663E\u8457\u51CF\u5C11\u603B\u6309\u952E\u6570\u3002",
    },
    {"\u7F6E\u6362(Swap)",
        "\u4EA4\u6362 swap hold jiaohuan zancun",
        "term",
        "Hold\u7684\u53E6\u4E00\u79CD\u8868\u73B0\u5F62\u5F0F\uFF0C\u5C06\u624B\u91CC\u7684\u65B9\u5757\u548CNext\u69FD\u4E2D\u7684\u7B2C\u4E00\u4E2A\u4EA4\u6362\uFF0C\u4E00\u822C\u540C\u6837\u4E0D\u80FD\u8FDE\u7EED\u4F7F\u7528\u3002",
    },
    {"\u6DF1\u964D",
        "\u6DF1\u964D deepdrop shenjiang",
        "term",
        "\u5F00\u542F\u540E\u5F53\u65B9\u5757\u89E6\u5E95\u65F6\uFF0C\u518D\u6B21\u6309\u4E0B\u8F6F\u964D\u4F1A\u8BA9\u65B9\u5757\u5C1D\u8BD5\u5411\u4E0B\u7A7F\u5899\u5BFB\u627E\u653E\u5F97\u4E0B\u7684\u5730\u65B9\uFF0C\u5982\u679C\u6709\u5C31\u4F1A\u76F4\u63A5\u77AC\u79FB\u5230\u90A3\\n\u8BE5\u529F\u80FD\u66F4\u504F\u5411\u7528\u4E8E\u6280\u672F\u7814\u7A76\uFF0C\u5BF9\u4E8EAI\u6765\u8BF4\u6709\u4E86\u5B83\u53EF\u4EE5\u5B8C\u5168\u4E0D\u7528\u518D\u8003\u8651\u65CB\u8F6C\u7CFB\u7EDF\uFF0C\u5F62\u72B6\u80FD\u5BB9\u5F97\u4E0B\u7684\u5730\u65B9\u4E00\u5B9A\u90FD\u80FD\u5230\u8FBE",
    },
    {"Misdrop",
        "\u8BEF md",
        "term",
        "\u8BEF\u653E\uFF0C\u5C31\u662F\u4E0D\u5C0F\u5FC3\u653E\u9519\u4E86\u5730\u65B9\u3002\u7B80\u79F0MD\u3002",
    },
    {"Mishold",
        "\u8BEFhold mh",
        "term",
        "\u8BEFhold\uFF0C\u5C31\u662F\u4E0D\u5C0F\u5FC3\u6309\u5230Hold\u5BFC\u81F4\u6B7B\u4EA1\u6216\u5931\u53BBPC\u673A\u4F1A\u7B49\u3002\u7B80\u79F0MH\u3002",
    },
    {"sub",
        "",
        "term",
        "\u5728\u2026\u2026\u4E4B\u4E0B\\n\u7528\u4E8E\u8868\u793A\u6210\u7EE9\uFF0C\u5355\u4F4D\u4E00\u822C\u53EF\u4E0D\u5199\uFF0C\u6BD4\u598240L\u6210\u7EE9Sub 30\u662F\u79D2\uFF0C1000\u884CSub 15\u662F\u5206\u949F\uFF0C\u4E0D\u5199\u9879\u76EE\u9ED8\u8BA4\u662F40L\\n\\n\u4F8B\uFF1A39.95s\u662FSub 40\uFF0C40.###s\u4E0D\u662FSub 40\u3002\\n\u8BF7\u4E0D\u8981\u4F7F\u7528Sub 62\u4E4B\u7C7B\u7684\u8BCD\uFF0C\u56E0\u4E3Asub\u672C\u8EAB\u5C31\u662F\u8868\u793A\u5927\u7EA6\uFF0C \u4E00\u5206\u949F\u5DE6\u53F3\u7684\u6210\u7EE9\u7CBE\u786E\u52305~10s\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E00\u822C30s\u4EE5\u5185\u7684\u6210\u7EE9\u7528sub## \u7684\u65F6\u5019\u624D\u4F1A\u7CBE\u786E\u52301s\u3002",
    },
    {"\u6316\u6398(Dig)",
        "\u6316\u6398 downstack ds wajue",
        "term",
        "\u6307\u6D88\u9664\u4ECE\u573A\u5730\u5E95\u90E8\u8FDB\u5165\u7684\u5783\u573E\u884C\uFF08\u5BF9\u624B\u653B\u51FB\u6253\u8FC7\u6765\u6216\u8005\u6A21\u5F0F\u4E2D\u81EA\u52A8\u751F\u6210\uFF09\u3002\u4E5F\u53EBdownstack(DS)\u3002",
    },
    {"\u6350\u8D60(Donate)",
        "\u6350\u732E juanzeng",
        "term",
        "\u6307\u523B\u610F\u4E34\u65F6\u5835\u4F4F\uFF08\u53EF\u4EE5\u6D88\u56DB\u7684\uFF09\u6D1E\u505AT-spin\uFF0C\u6253\u51FAT-spin\u540E\u5C31\u4F1A\u89E3\u5F00\uFF0C\u662F\u6BD4\u8F83\u8FDB\u9636\u7684\u4FDD\u6301/\u63D0\u5347\u706B\u529B\u7684\u6280\u5DE7\u3002\\n\u4E0D\u6807\u51C6\u7528\u6CD5\uFF1A\u6709\u65F6\u5019\u53EA\u8981\u5835\u4F4F\u4E86\u4E2A\u5751\uFF0C\u5373\u4F7F\u4E0D\u662F\u6D88\u56DB\u6D1E\u4E5F\u4F1A\u7528\u8FD9\u4E2A\u8BCD\u3002",
    },
    {"\u6B20\u503A",
        "qianzhai debt",
        "term",
        "\u6B20\u503A\\n\u6307\u5FC5\u987B\u5B8C\u5168\u5806\u597D\u624D\u80FD\u5F00\u59CB\u8F6C\u4E0BT\u65CB\u6253\u51FA\u653B\u51FB\uFF0C\u5806\u5B8C\u4E4B\u524DT\u4E0B\u4E0D\u53BB\u7684\u5F62\u72B6\u3002\u5BF9\u6218\u5B9E\u6218\u4E2D\u5982\u679C\u8981\u505A\u6B64\u7C7B\uFF08\u4E2D\u5C40\uFF09\u5B9A\u5F0F\u65F6\u4E00\u5B9A\u8981\u89C2\u5BDF\u5BF9\u624B\u60C5\u51B5\u786E\u4FDD\u81EA\u5DF1\u5B89\u5168\uFF0C\u4E0D\u7136\u53EF\u80FD\u88AB\u534A\u9014\u6253\u6B7B\\n\\n\u4E00\u822C\u53EA\u7528\u6765\u63CF\u8FF0\u7C7B\u4F3C\u53CCT3/T3\u5854\u7684\u5927\u578B\u7EC4\u5408\u70AE\uFF0C\u5806\u5B8C\u4E4B\u524D\u5B8C\u5168\u4E0D\u80FD\u6253\u51FA\u653B\u51FB\u3002",
    },
    {"\u653B\u9632",
        "gongfang gongshou",
        "term",
        "\u653B\u51FB\u6307\u901A\u8FC7\u6D88\u9664\u7ED9\u5BF9\u624B\u53D1\u9001\u5783\u573E\u884C\uFF1B\\n\u9632\u5FA1\uFF08\u76F8\u6740\uFF09\u6307\u522B\u4EBA\u6253\u8FC7\u6765\u653B\u51FB\u4E4B\u540E\u7528\u653B\u51FB\u62B5\u6D88\uFF1B\\n\u53CD\u51FB\u6307\u62B5\u6D88/\u5403\u4E0B\u6240\u6709\u653B\u51FB\u540E\u6253\u51FA\u653B\u51FB\u3002\\n\\n\u6CE8\uFF1A\u5927\u591A\u6570\u65B9\u5757\u6E38\u620F\u7684\u653B\u9632\u662F1:1\u7684\uFF0C4\u884C\u653B\u51FB\u62B5\u6D88\u5BF9\u624B\u76844\u884C\u653B\u51FB\u3002",
    },
    {"\u8FDE\u51FB(Combo)",
        "ren lianji",
        "term",
        "\u4ECE\u7B2C\u4E8C\u6B21\u6D88\u9664\u8D77\u53EB1 REN/Combo\uFF0C\u6253\u51FA\u7684\u653B\u51FB\u6839\u636E\u6E38\u620F\u8BBE\u8BA1\u7684\u4E0D\u540C\u4E5F\u4E0D\u540C\u3002\u201CREN\u201D \u8FD9\u4E2A\u540D\u79F0\u6765\u6E90\u4E8E\u65E5\u8BED\u4E2D\u7684 \u201C\u9023\u201D\uFF08\u308C\u3093\uFF09\u3002",
    },
    {"Spike",
        "baofa xingbao",
        "term",
        "\u7206\u53D1\u653B\u51FB\\n\u6307\u77ED\u65F6\u95F4\u5185\u6253\u51FA\u5927\u91CF\u7684\u653B\u51FB\uFF0CTechmino\u548CTETR.IO\u4E2D\u6709Spike\u8BA1\u6570\u5668\uFF0C\u53EF\u4EE5\u770B\u5230\u81EA\u5DF1\u77ED\u65F6\u95F4\u5185\u6253\u51FA\u4E86\u591A\u5C11\u653B\u51FB\u3002\\n\u6CE8\u610F\uFF0C\u7F51\u7EDC\u5361\u987F\u5BFC\u81F4\u7684\u7D2F\u8BA1\u653B\u51FB\u77AC\u95F4\u91CA\u653E\u4E0D\u7B97Spike\u3002",
    },
    {"Side",
        "\u8FDE\u51FB sidewell",
        "term",
        "\u5728\u573A\u5730\u65C1\u8FB9\u7A7A\u51FA\u51E0\u5217\u7684\u5806\u53E0\u6CD5\\n\u7528\u6765\u5236\u9020\u8FDE\u51FB\uFF0C\u5BF9\u4E8E\u65B0\u4EBA\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u8FDB\u653B\u65B9\u6CD5\u3002\u4F46\u7531\u4E8E\u8D77\u697C\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u88AB\u9876\u6B7B\u800C\u4E14\u603B\u6548\u7387\u4E0D\u9AD8\uFF0C\u5BFC\u81F4\u9AD8\u7AEF\u73A9\u5BB6\u4E0D\u4F1A\u5355\u72EC\u505AWide\uFF0C\u66F4\u53EF\u80FD\u4F1A\u5728\u4E2D\u5C40\u5806\u597D\u70AE\u5E76\u4E14\u89C2\u5BDF\u5230\u5BF9\u624B\u77ED\u65F6\u95F4\u5185\u4E0D\u4F1A\u6253\u51FA\u4F24\u5BB3\u7684\u65F6\u5019\u53EF\u4EE5\u9020\uFF0C\u7528\u6765\u5927\u5E45\u52A0\u5F3A\u77AC\u65F6\u706B\u529B\u3002",
    },
    {"S1W",
        "side1wide tetrisstacking",
        "term",
        "Side 1 Wide\\n\u65C1\u8FB9\u7A7A1\u5217\uFF0C\u662F\u4F20\u7EDF\u65B9\u5757\u6E38\u620F\u91CC\u5E38\u89C1\u7684\u6D88\u56DB\u6253\u6CD5\u3002\\n\u5728\u73B0\u4EE3\u65B9\u5757\u5BF9\u6218\u4E2D\u65B0\u624B\u53EF\u4EE5\u4F7F\u7528\uFF0C\u77ED\u65F6\u95F4\u80FD\u6253\u51FA\u5927\u91CF\u653B\u51FB\uFF0C\u4F46\u5728\u9AD8\u624B\u573A\u51FA\u573A\u7387\u4E0D\u9AD8\uFF0C\u56E0\u4E3A\u6548\u7387\u4F4E\uFF0C\u5BB9\u6613\u88AB\u5BF9\u9762\u4E00\u6CE2\u6253\u6B7B\uFF0C\u6545\u53EA\u5728\u6781\u5C11\u6570\u60C5\u51B5\u5408\u9002\u7684\u65F6\u5019\u7528\u3002",
    },
    {"S2W",
        "\u8FDE\u51FB lianji ren side2wide",
        "term",
        "Side 2 Wide\\n\u65C1\u8FB9\u7A7A2\u5217\uFF0C\u662F\u5E38\u89C1\u7684\u8FDE\u51FB\u6253\u6CD5\u3002\\n\u96BE\u5EA6\u5F88\u4F4E\uFF0C\u73B0\u4EE3\u65B9\u5757\u5BF9\u6218\u4E2D\u65B0\u624B\u53EF\u4EE5\u4F7F\u7528\uFF0C\u7ED3\u5408Hold\u53EF\u4EE5\u5F88\u8F7B\u677E\u5730\u6253\u51FA\u5927\u8FDE\u51FB\u3002\u9AD8\u624B\u573A\u4F7F\u7528\u4E0D\u591A\uFF0C\u56E0\u4E3A\u51C6\u5907\u65F6\u95F4\u592A\u957F\uFF0C\u4F1A\u88AB\u5BF9\u9762\u63D0\u524D\u6253\u8FDB\u5783\u573E\u884C\uFF0C\u5BFC\u81F4\u8FDE\u51FB\u6570\u51CF\u5C11\u6216\u8005\u76F4\u63A5Top Out\uFF0C\u6548\u7387\u4E5F\u6CA1\u6709\u7279\u522B\u9AD8\uFF0C\u6545\u4E00\u5957\u6253\u5B8C\u4E5F\u4E0D\u4E00\u5B9A\u80FD\u6740\u4EBA\u3002",
    },
    {"S3W",
        "\u8FDE\u51FB lianji ren side2wide",
        "term",
        "Side 3 Wide\\n\u65C1\u8FB9\u7A7A3\u5217\uFF0C\u4E0D\u59822w\u5E38\u89C1\u7684\u8FDE\u51FB\u6253\u6CD5\u3002\u80FD\u6253\u51FA\u7684\u8FDE\u51FB\u6570\u6BD42w\u591A\uFF0C\u4F46\u662F\u96BE\u5EA6\u504F\u5927\u5F88\u5BB9\u6613\u65AD\u8FDE\u3002",
    },
    {"S4W",
        "\u8FDE\u51FB lianji ren side4wide",
        "term",
        "Side 4 Wide\\n\u65C1\u8FB9\u7A7A4\u5217\uFF0C\u4E00\u79CD\u8FDE\u51FB\u6253\u6CD5\uFF0C\u80FD\u6253\u51FA\u5F88\u9AD8\u7684\u8FDE\u51FB\uFF0C\u5E76\u4E14\u51C6\u5907\u65F6\u95F4\u6BD4\u522B\u7684Wide\u6253\u6CD5\u77ED\uFF0C\u6545\u52A8\u4F5C\u5FEB\u7684\u8BDD\u53EF\u4EE5\u62A2\u5728\u5BF9\u624B\u6253\u8FDB\u5783\u573E\u4E4B\u524D\u5806\u5F88\u9AD8\u7136\u540E\u6253\u51FA\u8D85\u5927\u8FDE\u51FB\u3002\\n\uFF08\u56E0\u4E3A\u53EF\u80FD\u4F1A\u88AB\u63D0\u524D\u6253\u6B7B\uFF0C\u98CE\u9669\u633A\u5927\uFF0C\u6240\u4EE5\u6CA1\u6709c4w\u90A3\u4E48\u4E0D\u5E73\u8861\uFF09\u3002",
    },
    {"C1W",
        "center1wide centre1wide",
        "term",
        "Center 1 Wide\\n\u4E2D\u95F4\u7A7A1\u5217\uFF0C\u4E00\u79CD\u5B9E\u6218\u91CC\u6D884\u540C\u65F6\u8F85\u52A9\u6253TSD\u7684\u6253\u6CD5\uFF0C\u9700\u8981\u73A9\u5BB6\u7406\u89E3<\u5E73\u8861\u6CD5>\uFF0C\u719F\u7EC3\u4E4B\u540E\u53EF\u4EE5\u8F7B\u677E\u6D88\u56DB+T2\u8F93\u51FA\uFF0C\u96BE\u5EA6\u4E5F\u4E0D\u662F\u7279\u522B\u5927\u3002",
    },
    {"C2W",
        "\u8FDE\u51FB lianji ren center2wide centre2wide",
        "term",
        "Center 2 Wide\\n\u4E2D\u95F4\u7A7A2\u5217\uFF0C\u4E00\u79CD\u53EF\u80FD\u7684\u8FDE\u51FB\u6253\u6CD5\uFF08\u4E0D\u5E38\u89C1\uFF09\u3002",
    },
    {"C3W",
        "\u8FDE\u51FB lianji ren center3wide centre3wide",
        "term",
        "Center 3 Wide\\n\u4E2D\u95F4\u7A7A3\u5217\uFF0C\u4E00\u79CD\u53EF\u80FD\u7684\u8FDE\u51FB\u6253\u6CD5\uFF08\u4E0D\u5E38\u89C1\uFF09\u3002",
    },
    {"C4W",
        "\u8FDE\u51FB lianji ren center4wide centre4wide",
        "term",
        "Center 4 Wide\\n\u4E2D\u95F4\u7A7A\u56DB\u5217\uFF0C\u4E00\u79CD\u8FDE\u51FB\u6253\u6CD5\uFF0C\u80FD\u6253\u51FA\u5F88\u9AD8\u7684\u8FDE\u51FB\uFF0C\u5229\u7528\u4E86\u5927\u591A\u6570\u4E13\u4E1A\u5BF9\u6218\u65B9\u5757\u6E38\u620F\u7684\u6B7B\u4EA1\u5224\u5B9A\u673A\u5236\uFF0C\u53EF\u4EE5\u653E\u5FC3\u5806\u9AD8\u4E0D\u62C5\u5FC3\u88AB\u9876\u6B7B\uFF0C\u7136\u540E\u5F00\u59CB\u8FDE\u51FB\u3002\u662F\u4E00\u79CD\u5229\u7528\u6E38\u620F\u673A\u5236\u7684\u4E0D\u5E73\u8861\u7B56\u7565\uFF08\u5C24\u5176\u5728\u5F00\u5C40\u65F6\uFF09\uFF0C\u89C2\u8D4F\u6027\u4E0D\u662F\u5F88\u5F3A\u8FD8\u53EF\u4EE5\u4EE5\u5F31\u80DC\u5F3A\uFF0C\u6210\u672C\u592A\u4F4E\u6240\u4EE5\u6210\u4E3A\u4E86\u90E8\u5206\u6E38\u620F\u4E2D\u7EA6\u5B9A\u7684\u7C7B\u4F3C \u201C\u7981\u62DB\u201D \u7684\u4E1C\u897F\uFF0C\u8BF7\u5728\u4E86\u89E3\u60C5\u51B5\u540E\u518D\u4F7F\u7528\uFF0C\u4E0D\u7136\u53EF\u80FD\u4F1A\u88AB\u522B\u4EBA\u9A82\u3002\\nTechmino\u4E2D\u8651\u5230\u4E86\u5E73\u8861\u95EE\u9898\uFF0C\u6240\u4EE5c4w\u7684\u5F3A\u5EA6\u6CA1\u6709\u522B\u7684\u6E38\u620F\u90A3\u4E48\u5938\u5F20\u3002",
    },
    {"N-Res",
        "\u8FDE\u51FB lianji ren residual c4w s4w",
        "term",
        "N-Residual\\nN-\u5269\u4F59\uFF0C\u63074w\u8FDE\u51FB\u697C\u5E95\u90E8\u7559\u51E0\u4E2A\u65B9\u683C\uFF0C\u5E38\u7528\u7684\u662F3-Res\u548C6-Res\u3002\\n3-Res\u8DEF\u7EBF\u5C11\u6BD4\u8F83\u597D\u5B66\uFF0C\u6210\u529F\u7387\u4E5F\u5F88\u9AD8\uFF0C\u5B9E\u6218\u5B8C\u5168\u591F\u7528\\n6-Res\u8DEF\u7EBF\u591A\u66F4\u96BE\u7528\uFF0C\u4F46\u662F\u8BA1\u7B97\u529B\u5F88\u5F3A\u7684\u8BDD\u6BD43-Res\u66F4\u7A33\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u5B8C\u6210\u7279\u6B8A\u6311\u6218\uFF08\u6BD4\u5982Techmino\u7684c4w\u7EC3\u4E60\u8981\u6C42100\u8FDE\u51FB\u901A\u5173\uFF09\u3002\\n\\n\u6CE8\uFF1A\u4F18\u5148\u4F7F\u75286-Res\uFF0C\u7136\u540E\u662F3-res\u548C5-Res\uFF0C\u6700\u540E\u662F4-Res",
    },
    {"6\u20133\u5806\u53E0\u6CD5",
        "\u516D\u4E09 63",
        "term",
        "\u6307\u5DE6\u8FB96\u5217\u53F3\u8FB93\u5217\u7684\u5806\u53E0\u65B9\u5F0F\u3002\u5728\u73A9\u5BB6\u6709\u8DB3\u591F\u7684\u8BA1\u7B97\u80FD\u529B\u540E\u53EF\u4EE5\u51CF\u5C11\u5806\u53E0\u6240\u7528\u7684\u6309\u952E\u6570\uFF08\u53CD\u4E4B\u53EF\u80FD\u751A\u81F3\u4F1A\u589E\u52A0\uFF09\uFF0C\u662F\u4E3B\u6D41\u7684\u7528\u4E8E\u51CF\u5C11\u64CD\u4F5C\u6570\u7684\u9AD8\u7AEF40L\u5806\u53E0\u65B9\u5F0F\uFF0C\u539F\u7406\u8DDF\u51FA\u5757\u4F4D\u7F6E\u662F\u4E2D\u95F4\u504F\u5DE6\u6709\u5173\u3002",
    },
    {"Freestyle",
        "ziyou",
        "term",
        "\u81EA\u7531\u53D1\u6325\u7684\u610F\u601D\uFF0C\u5E38\u7528\u4E8Efreestyle TSD\uFF08T2\uFF09\uFF0C\u6307\u4E0D\u7528\u56FA\u5B9A\u7684\u5806\u53E0\u65B9\u5F0F\u800C\u662F\u968F\u673A\u5E94\u53D8\u5B8C\u621020TSD\u3002\u6BD4\u7528LST\u6216\u8005\u5783\u573E\u5206\u7C7B\u5B8C\u6210\u768420 TSD\u7684\u96BE\u5EA6\u8981\u5927\uFF0C\u6210\u7EE9\u4E5F\u66F4\u80FD\u4EE3\u8868\u5B9E\u6218\u6C34\u5E73\u3002",
    },
    {"\u6B7B\u4EA1\u5224\u5B9A",
        "die death siwang",
        "term",
        "\u73B0\u4EE3\u65B9\u5757\u666E\u904D\u4F7F\u7528\u7684\u6B7B\u4EA1\u5224\u5B9A\uFF1A\\n1. \u65B0\u51FA\u73B0\u7684\u65B9\u5757\u548C\u573A\u5730\u65B9\u5757\u6709\u91CD\u53E0\uFF08\u7A92\u606F\uFF0CBlock Out\uFF09\uFF08c4w\u6BD4s4w\u5F3A\u7684\u539F\u56E0\uFF0C\u56E0\u4E3A\u88AB\u6253\u8FDB18\u884C\u90FD\u4E0D\u4F1A\u7A92\u606F\uFF09\uFF1B\\n2. \u65B9\u5757\u9501\u5B9A\u65F6\u5B8C\u5168\u5728\u573A\u5730\u7684\u5916\u9762\uFF08Lock Out\uFF09\uFF1B\\n3. \u573A\u5730\u5185\u73B0\u5B58\u65B9\u5757\u603B\u9AD8\u5EA6\u5927\u4E8E40\u3002\uFF08\u8D85\u9AD8\uFF0CTop Out\uFF09\\n\\n\u6CE8\uFF1ATechmino\u4F7F\u7528\u7684\u6B7B\u4EA1\u5224\u5B9A\u9ED8\u8BA4\u4E0D\u5F00\u542F\u7B2C\u4E8C\u3001\u4E09\u6761\u3002",
    },
    {"\u7F13\u51B2\u533A",
        "buffer zone huanchongqu",
        "term",
        "\uFF08\u4E0D\u662F\u6240\u6709\u6E38\u620F\u90FD\u6709\u8FD9\u4E2A\u6982\u5FF5\uFF09\u630710\xD720\u53EF\u89C1\u573A\u5730\u4E4B\u4E0A\u768421~40\u884C\u3002\u56E0\u4E3A\u5783\u573E\u884C\u9876\u8D77\u540E\u4E24\u8FB9\u5806\u9AD8\u7684\u65B9\u5757\u53EF\u80FD\u4F1A\u8D85\u51FA\u5C4F\u5E55\uFF0C\u6D88\u884C\u540E\u8FD9\u4E9B\u65B9\u5757\u8981\u91CD\u65B0\u56DE\u5230\u573A\u5730\u5185\u6240\u4EE5\u9700\u8981\u4FDD\u5B58\u4E0B\u6765\uFF0C\u7531\u4E8E\u7A0B\u5E8F\u4E0A\u8981\u6C42\u573A\u5730\u5C3A\u5BF8\u6709\u9650\uFF08\u90E8\u5206\u6E38\u620F\u53EF\u4EE5\u65E0\u9650\uFF09\uFF0C\u6545\u8BBE\u5B9A\u4E3A40\uFF0C\u4E00\u822C\u90FD\u591F\u7528\u3002\\n\\n\u53E6\u89C1 \u201C\u6D88\u5931\u533A\u201D \u8BCD\u6761\u3002",
    },
    {"\u6D88\u5931\u533A",
        "vanish zone xiaoshiqu",
        "term",
        "\u5728\u7F13\u51B2\u533A\u7684\u57FA\u7840\u4E0A\uFF0C\u6307\u6BD440\u884C\u7F13\u51B2\u533A\u8FD8\u9AD8\u7684\u533A\u57DF\u3002\\n\u6807\u51C6\u7684\u6B7B\u4EA1\u5224\u5B9A\u6D89\u53CA\u4E86\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u5728\u5783\u573E\u884C\u5347\u8D77\u540E\u5982\u679C\u573A\u5730\u4E0A\u6709\u4EFB\u4F55\u65B9\u5757\u8D85\u51FA\u4E8640\u9AD8\u7684\u7F13\u51B2\u533A\uFF08\u4E5F\u5C31\u662F\u8FBE\u5230\u4E86\u6D88\u5931\u533A\uFF09\u65F6\u6E38\u620F\u76F4\u63A5\u7ED3\u675F\u3002\\n\u4F46\u4E8B\u5B9E\u4E0A\u8FD9\u5757\u533A\u57DF\u5728\u4E0D\u540C\u6E38\u620F\u4E2D\u8868\u73B0\u4E0D\u540C\uFF0C\u751A\u81F3\u6709\u8BBE\u8BA1\u8005\u8003\u8651\u4E0D\u5468\u5BFC\u81F4\u65B9\u5757\u632A\u523040\u884C\u4EE5\u4E0A\uFF0C\u4F46\u662F\u7A0B\u5E8F\u6CA1\u8003\u8651\u5BFC\u81F4\u65B9\u5757\u63A5\u89E6\u6D88\u5931\u533A\u76F4\u63A5\u62A5\u9519\u95EA\u9000\u7684\u6E38\u620F\u3002\u901A\u5E38\u51FA\u73B0\u5728\u73A9\u5BB6\u5806\u4E86c4w\u7136\u540E\u88AB\u6253\u5165\u5927\u91CF\u5783\u573E\u884C\u65F6\u624D\u4F1A\u8003\u8651\u8FD9\u4E2A\u6982\u5FF5\u3002\u5176\u4ED6\u6E38\u620F\u4E2D\u65B9\u5757\u8FDB\u5165\u6D88\u5931\u533A\u53EF\u80FD\u76F4\u63A5\u5BFC\u81F4\u6E38\u620F\u7ED3\u675F\uFF0C\u4E5F\u6709\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E00\u4E9B\u5947\u602A\u7684bug\uFF08\u9644\u5E26\u94FE\u63A5\u662Fppt\u7684\u590D\u523640\u884C\u65E0\u9650Ren\u89C6\u9891\uFF09\u3002\\n\\n\u53E6\uFF0CJstris\u4E2D22\u884C\u53CA\u4EE5\u4E0A\u53EF\u4EE5\u7406\u89E3\u4E3A\u6D88\u5931\u533A\uFF0C\u9501\u5B9A\u572821\u884C\u4E4B\u5916\u7684\u683C\u5B50\u4F1A\u6D88\u5931\u3002",
        "https://www.bilibili.com/video/BV1ZE411Y7GD",
    },
    {"\u4E0B\u843D\u901F\u5EA6",
        "\u91CD\u529B drop speed zhongli gravity",
        "term",
        "\u4E00\u822C\u7528*G\u8868\u793A\u65B9\u5757\u7684\u4E0B\u843D\u901F\u5EA6\uFF0C\u610F\u601D\u662F\u6BCF\u4E00\u5E27\u65B9\u5757\u5F80\u4E0B\u79FB\u52A8\u591A\u5C11\u683C\uFF0C\u4E00\u79D2\u4E0B\u843D\u4E00\u683C\u5C31\u662F1/60G\uFF08\u9ED8\u8BA460fps\uFF09\uFF0C\u53EF\u4EE5\u770B\u51FAG\u662F\u4E00\u4E2A\u5F88\u5927\u7684\u5355\u4F4D\u3002\u56E0\u4E3A\u573A\u5730\u5C3120\u683C\uFF0C\u6240\u4EE5\u4E00\u822C\u8BA4\u4E3A20G\u5373\u4E3A\u4E0A\u9650\uFF0C\u8BE6\u89C120G\u8BCD\u6761\u3002\\n\u5728Techmino\u4E2D\u63CF\u8FF0\u91CD\u529B\u7684\u65B9\u5F0F\u662F \u201C\u6BCF\u8FC7\u591A\u5C11\u5E27\u4E0B\u843D\u4E00\u683C\u201D\uFF0C\u4F8B\u5982\u4E00\u79D2\u843D\u4E00\u683C\u5C31\u5BF9\u5E9460\uFF08\u9ED8\u8BA460fps\uFF09",
    },
    {"20G",
        "\u9AD8\u91CD\u529B",
        "term",
        "\u73B0\u4EE3\u65B9\u5757\u7684\u6700\u9AD8\u4E0B\u843D\u901F\u5EA6\uFF0C\u8868\u89C2\u5C31\u662F\u65B9\u5757\u77AC\u95F4\u5230\u5E95\uFF0C\u4E0D\u5B58\u5728\u4E2D\u95F4\u7684\u4E0B\u843D\u8FC7\u7A0B\uFF0C\u53EF\u80FD\u4F1A\u8BA9\u65B9\u5757\u65E0\u6CD5\u8DE8\u8D8A\u58D5\u6C9F/\u4ECE\u5C71\u8C37\u722C\u51FA\u3002\\n20G\u4E00\u822C\u6307\u7684\u5176\u5B9E\u662F \u201C\u65E0\u9650\u4E0B\u843D\u901F\u5EA6\u201D \uFF0C\u5C31\u7B97\u573A\u5730\u4E0D\u6B6220\u683C\uFF0C\u201C20G\u201D \u4E5F\u4F1A\u8BA9\u65B9\u5757\u77AC\u95F4\u5230\u5E95\u3002\\nTechmino\uFF08\u548C\u90E8\u5206\u5176\u4ED6\u6E38\u620F\uFF0C\u63A8\u8350\u8FD9\u4E48\u8BBE\u8BA1\uFF09\u4E2D20G\u7684\u4F18\u5148\u7EA7\u6BD4\u5176\u4ED6\u73A9\u5BB6\u64CD\u4F5C\u90FD\u9AD8\uFF0C\u5373\u4F7F\u662F0arr\u7684\u6C34\u5E73\u65B9\u5411 \u201C\u77AC\u95F4\u79FB\u52A8\u201D \u4E2D\u9014\u4E5F\u4F1A\u53D7\u523020G\u7684\u5F71\u54CD\u3002",
    },
    {"\u9501\u5B9A\u5EF6\u8FDF(LD)",
        "\u91CD\u529B lock delay lockdown delay suoyan zhongli gravity",
        "term",
        "\u65B9\u5757<\u78B0\u5230\u5730\u9762\u5230\u9501\u5B9A>\u4E4B\u95F4\u7684\u65F6\u95F4\u3002\u7ECF\u5178\u5757\u4EC5\u65B9\u5757\u4E0B\u843D\u4E00\u683C\u65F6\u5237\u65B0\u5012\u8BA1\u65F6\uFF0C\u800C\u73B0\u4EE3\u65B9\u5757\u4E2D\u5F80\u5F80\u4EFB\u4F55\u64CD\u4F5C\u90FD\u5C06\u91CD\u7F6E\u8BE5\u5012\u8BA1\u65F6\uFF08\u4F46\u662F\u65B9\u5757\u672C\u8EAB\u5FC5\u987B\u53EF\u4EE5\u79FB\u52A8/\u65CB\u8F6C\uFF09\uFF0C\u6240\u4EE5\u8FDE\u7EED\u79FB\u52A8\u548C\u64CD\u4F5C\u53EF\u4EE5\u8BA9\u65B9\u5757\u4E0D\u9A6C\u4E0A\u9501\u5B9A\uFF0C\u62D6\u4E00\u4F1A\u65F6\u95F4\uFF08Techmino\u548C\u90E8\u5206\u6E38\u620F\u91CD\u7F6E\u6B21\u6570\u6709\u9650\uFF0C\u4E00\u822C\u662F15\uFF09\u3002",
    },
    {"\u51FA\u5757\u5EF6\u8FDF(ARE)",
        "delay chukuaiyanchi",
        "term",
        "ARE\u3002\u65B9\u5757<\u9501\u5B9A\u5B8C\u6210\u5230\u4E0B\u4E00\u4E2A\u65B9\u5757\u51FA\u73B0>\u4E4B\u95F4\u7684\u65F6\u95F4\u3002",
    },
    {"\u6D88\u884C\u5EF6\u8FDF(ARE)",
        "line delay xiaohangyanchi",
        "term",
        "Line ARE\u3002\u65B9\u5757<\u9501\u5B9A\u5B8C\u6210\u80FD\u6D88\u884C\u65F6\u7684\u6D88\u884C\u52A8\u753B>\u5360\u636E\u7684\u65F6\u95F4\u3002",
    },
    {"\u7A92\u606F\u5EF6\u8FDF(DD)",
        "choke are delay zhixiyanchi",
        "term",
        "\u5F53\u524D\u65B9\u5757\u9501\u5B9A\u540E\u5982\u679C\u4E0B\u4E00\u5757\u7684\u751F\u6210\u4F4D\u7F6E\u88AB\u963B\u6321\uFF0C\u90A3\u4E48\u4E0B\u4E00\u5757\u7684\u51FA\u5757\u5EF6\u8FDF\u4F1A\u88AB\u518D\u989D\u5916\u52A0\u4E0A\u8FD9\u4E2A\u5EF6\u8FDF\u7684\u503C\uFF0C\u65B9\u4FBF\u4F7F\u7528\u63D0\u524D\u7CFB\u7EDF\u6765\u907F\u514D\u6B7B\u4EA1\\n\u60F3\u6CD5\u6765\u81EANOT_A_ROBOT",
    },
    {"\u6781\u7B80(Finesse)",
        "\u6781\u7B80\u64CD\u4F5C \u6700\u7B80\u64CD\u4F5C finesse jijiancaozuo zuijiancaozuo",
        "term",
        "\u7528\u6700\u5C11\u7684\u6309\u952E\u6570\u5C06\u65B9\u5757\u79FB\u5230\u60F3\u53BB\u7684\u4F4D\u7F6E\u7684\u6280\u672F\uFF08\u5927\u591A\u6570\u65F6\u5019\u53EA\u8003\u8651\u7EAF\u786C\u964D\u7684\u843D\u70B9\uFF09\uFF0C\u8282\u7EA6\u65F6\u95F4\u548C\u51CF\u5C11Misdrop\u3002\\n\\n\u8BE5\u6280\u80FD\u5B66\u4E60\u8D8A\u65E9\u8D8A\u597D\uFF0C\u5EFA\u8BAE\u5148\u53BB\u627E\u6559\u7A0B\u89C6\u9891\uFF0C\u770B\u61C2\u4E86\u7136\u540E\u81EA\u5DF1\u591A\u7EC3\u4E60\uFF0C\u5F00\u59CB\u4EE5\u51C6\u786E\u7387\u7B2C\u4E00\uFF0C\u901F\u5EA6\u5FEB\u6162\u4E0D\u91CD\u8981\uFF0C\u719F\u7EC3\u540E\u81EA\u7136\u5C31\u5FEB\u4E86\u3002\\n\\n\u6CE8\u610F\uFF0CTechmino\u4F7F\u7528\u7684\u6781\u7B80\u5224\u5B9A\u7CFB\u7EDF\u4E0D\u662F\u8BF4\u5B8C\u5168\u548C\u7406\u8BBA\u6700\u5C11\u64CD\u4F5C\u6570\u4E00\u6837\uFF0C\u800C\u662F\u4E0D\u9700\u8981\u8F6F\u964D\u5C31\u80FD\u8FBE\u5230\u7684\u4F4D\u7F6E\u624D\u4F1A\u6309\u7167\u6807\u51C6\u51FA\u5757\u65B9\u5411\u548C\u4F60\u7684\u6309\u952E\u6B21\u6570\u6267\u884C\u6781\u7B80\u68C0\u6D4B\uFF0C\u6545\u5728\u6B64\u4E0D\u50CFjs\u5B58\u5728\u8F6F\u964D\u540E\u8BEF\u6740\u3002\u4F46\u662F\u591A\u4E86\u4E00\u4E9B\u65B0\u7684\u6761\u4EF6\uFF0C\u6BD4\u5982\u3010\u624B\u4E0A\u548CHold\u4E00\u6837/\u5DF2\u7ECF\u6309\u4E86\u8D85\u8FC73\u6B21\u6309\u952E\u540E\u3011\u518Dhold\u540E\u6309\u952E\u6B21\u6570\u4E0D\u91CD\u7F6E\uFF08\u8BA9\u4E0B\u4E00\u5757\u6781\u7B80\u5931\u8BEF\uFF09\u3002\\n\u6781\u7B80\u7387\u8BA1\u7B97\uFF1A\\n\u6CA1\u6709\u8D85\u8FC7\u6807\u51C6\u6781\u7B80\u6CD5\u64CD\u4F5C\u6570\u7684\u4E3APerfect\u8BA1100%\uFF0C\u8D85\u51FA\u4E00\u6B65\u4E3AGreat\u8BA150%\uFF0C\u8D85\u51FA\u4E24\u6B65\u4E3ABad\u8BA125%\uFF0C\u4E24\u6B65\u4EE5\u4E0A\u4E3AMiss\u8BA10%\uFF0C\u5176\u4E2DBad\u548CMiss\u4F1A\u65AD\u8FDE\\n\\n\u6CE81\uFF1A\u4E00\u822C\u8BF4\u7684\u6781\u7B80\u4E0D\u8003\u8651\u5E26\u8F6F\u964D/\u9AD8\u91CD\u529B/\u573A\u5730\u5F88\u9AD8\u7684\u60C5\u51B5\uFF0C\u4EC5\u7814\u7A76\u7A7A\u4E2D\u79FB\u52A8/\u65CB\u8F6C\u540E\u786C\u964D\u3002\u7EDD\u5BF9\u7406\u60F3\u7684\u201C\u6781\u7B80\u201D\u5EFA\u8BAE\u4F7F\u7528\u201C\u6700\u5C11\u6309\u952E\u6570/\u64CD\u4F5C\u6570\u201D\u8868\u8FBE\u3002\\n\u6CE82\uFF1A20G\u4E0B\u6781\u7B80\u7CFB\u7EDF\u548C0G\u4E00\u6837\u5DE5\u4F5C\uFF0C\u6240\u4EE5\u5F97\u5230\u7684\u6570\u503C\u4E0D\u51C6\u786E\uFF0C\u53C2\u8003\u4EF7\u503C\u504F\u4F4E\u3002",
    },
    {"\u79D1\u7814",
        "keyan",
        "term",
        "\u5E38\u7528\u8BED\uFF0C\u6307\u5728\u4F4E\u91CD\u529B\u7684\u5355\u4EBA\u6A21\u5F0F\u91CC\u51CF\u901F\u7814\u7A76\u600E\u4E48\u505A\u5404\u79CDT-spin\uFF0CTechmino\u4E2D\u62D3\u5C55\u4E86\u542B\u4E49\uFF0C\u7528\u4E8E\u79F0\u547C\u51E0\u4E4E\u9700\u8981\u5168\u7A0BSpin\u7684\u6E38\u620F\u6A21\u5F0F\u3002",
    },
    {"\u952E\u4F4D",
        "keyboard mapping jianwei",
        "term",
        "\u952E\u4F4D\u8BBE\u7F6E\u539F\u5219\u53C2\u8003\uFF1A\\n1.\u4E0D\u8981\u8BA9\u4E00\u4E2A\u624B\u6307\u7BA1\u4E24\u4E2A\u53EF\u80FD\u540C\u65F6\u6309\u7684\u952E\uFF0C\u901A\u5E38\u53EA\u6709\u51E0\u4E2A\u65CB\u8F6C\u952E\u4E0D\u9700\u8981\u540C\u65F6\u6309\uFF0C\u5176\u4ED6\u529F\u80FD\u63A8\u8350\u90FD\u5355\u72EC\u7ED9\u4E00\u4E2A\u624B\u6307\\n2.\u9664\u975E\u5DF2\u7ECF\u5728\u522B\u7684\u6E38\u620F\u91CC\u953B\u70BC\u8FC7\u5C0F\u62C7\u6307\uFF0C\u6700\u597D\u4E0D\u8981\u7528\uFF0C\u4E00\u822C\u98DF\u6307\u548C\u4E2D\u6307\u6700\u7075\u6D3B\uFF0C\u81EA\u5DF1\u89C9\u5F97\u8212\u670D\u4E3A\u51C6\\n3.\u6CA1\u5FC5\u8981\u53C2\u8003\u522B\u4EBA\u7684\u952E\u4F4D\u8BBE\u7F6E\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u4E0D\u4E00\u6837\uFF0C\u53EA\u8981\u4E0D\u8FDD\u53CD\u524D\u51E0\u6761\u89C4\u5219\uFF0C\u5C31\u51E0\u4E4E\u4E0D\u4F1A\u5BF9\u6210\u7EE9\u4EA7\u751F\u5F71\u54CD\u3002",
    },
    {"\u624B\u611F(Handling)",
        "\u624B\u611F feel shougan",
        "term",
        "\u51B3\u5B9A\u624B\u611F\u7684\u51E0\u4E2A\u4E3B\u8981\u56E0\u7D20\uFF1A\\n1. \u8F93\u5165\u5EF6\u8FDF\u53D7\u8BBE\u5907\u914D\u7F6E\u6216\u8005\u8BBE\u5907\u72B6\u51B5\u5F71\u54CD\u3002\u53EF\u4EE5\u91CD\u542F/\u6362\u8BBE\u5907\u89E3\u51B3\uFF1B\\n2. \u7A0B\u5E8F\u8FD0\u884C\u7A33\u5B9A\u6027\u7A0B\u5E8F\u8BBE\u8BA1\u6216.\u5B9E\u73B0\uFF09\u5F97\u4E0D\u597D\uFF0C\u65F6\u4E0D\u65F6\u4F1A\u5361\u4E00\u4E0B\u3002\u628A\u8BBE\u7F6E\u753B\u9762\u6548\u679C\u62C9\u4F4E\u53EF\u80FD\u53EF\u4EE5\u7F13\u89E3\uFF1B\\n3. \u6E38\u620F\u8BBE\u8BA1\u6545\u610F\u7684\u3002\u81EA\u5DF1\u9002\u5E94\uFF1B\\n4. \u53C2\u6570\u8BBE\u7F6E\u8BBE\u7F6E\u4E0D\u5F53\u3002\u53BB\u6539\u8BBE\u7F6E\uFF1B\\n5. \u6E38\u73A9\u59FF\u52BF\u59FF\u52BF\u4E0D\u5F53\u3002\u4E0D\u4FBF\u7528\u529B\uFF0C\u6362\u4E2A\u59FF\u52BF\uFF1B\\n6. \u6362\u952E\u4F4D\u6216\u8005\u6362\u8BBE\u5907\u540E\u4E0D\u9002\u5E94\uFF0C\u64CD\u4F5C\u4E0D\u4E60\u60EF\u3002\u591A\u4E60\u60EF\u4E60\u60EF\uFF0C\u6539\u6539\u8BBE\u7F6E\uFF1B\\n7. \u808C\u8089\u75B2\u52B3\u53CD\u5E94\u548C\u534F\u8C03\u80FD\u529B\u4E0B\u964D\u3002\u7761\u4E00\u89C9\u6216\u8005\u505A\u70B9\u4F53\u80B2\u8FD0\u52A8\uFF0C\u8FC7\u6BB5\u65F6\u95F4\uFF08\u4E5F\u53EF\u80FD\u8981\u51E0\u5929\uFF09\u518D\u6765\u73A9\u3002",
    },
    {"DAS\u901A\u4FD7",
        "das arr simple tongsu",
        "term",
        "\u6253\u5B57\u65F6\u6309\u4F4Fo\uFF0C\u4F60\u4F1A\u770B\u5230\uFF1Aooooooooooo\u2026\\n\u5728\u65F6\u95F4\u8F74\u4E0A\uFF1Ao\u2014\u2014\u2014\u2014\u2014o-o-o-o-o-o-o-o-o\u2026\\n\u2014\u2014\u2014\u2014\u2014\u5C31\u662Fdas\u957F\u5EA6\uFF0C-\u5C31\u662Farr\u957F\u5EA6\u3002\\n\u8BE6\u89C1 DAS & ARR \u8BCD\u6761\u3002",
    },
    {"DAS & ARR",
        "\u7075\u654F\u5EA6 arr",
        "term",
        "DAS\uFF08Delay-auto-shift\uFF0C\u81EA\u52A8\u52A0\uFF08\u5EF6\u8FDF\uFF09\u5177\u4F53\u6307\u4ECE<\u6309\u4E0B\u79FB\u52A8\u952E\u65F6\u52A8\u4E86\u4E00\u683C>\u5230<\u5F00\u59CB\u81EA\u52A8\u79FB\u52A8>\u4E4B\u95F4\u7684\u65F6\u95F4\u3002\\nARR\uFF08Auto-repeat-rate\uFF09\uFF0C\u81EA\u52A8\u91CD\u590D\u901F\u7387\uFF0C\u6307<\u6BCF\u6B21\u81EA\u52A8\u79FB\u52A8>\u4E4B\u95F4\u7684\u65F6\u95F4\\n\u5355\u4F4D\u90FD\u662Ff\uFF08\u5E27\uFF0C1\u5E27=1/60\u79D2\uFF09\\n\u522B\u7684\u6E38\u620F\u91CC\u7528\u7684\u5355\u4F4D\u53EF\u80FD\u662Fms\uFF08\u6BEB\u79D2\uFF09\uFF0C\u4E5816.7\u5C31\u53EF\u5F97\u51FA\u5927\u7EA6\u7684\u5BF9\u5E94\u6570\u503C\uFF0C\u4F8B\u59824f\u224867ms\u3002",
    },
    {"DAS\u8C03\u8282",
        "\u8C03\u8282 arr tuning tiaojie",
        "term",
        "\u5BF9\u4E8E\u4E0D\u662F\u521A\u5165\u95E8\u7684\u5E76\u4E14\u4E86\u89E3\u6781\u7B80\u64CD\u4F5C\u7684\u73A9\u5BB6\u6765\u8BF4\u63A8\u8350ARR=0\uFF0CDAS=4~6\uFF08\u5177\u4F53\u770B\u4E2A\u4EBA\u624B\u90E8\u534F\u8C03\u6027\uFF0C\u53EA\u8981\u80FD\u63A7\u5236\u533A\u522B\u5C31\u4E0D\u5927\uFF09\u3002\\n\u65B0\u4EBA\u5982\u679C\u5B9E\u5728\u89C9\u5F97\u592A\u5FEB\u53EF\u4EE5\u9002\u5F53\u589E\u52A0\u4E00\u70B9DAS\uFF0CARR\u8981\u6539\u7684\u8BDD\u5F3A\u70C8\u5EFA\u8BAE\u4E0D\u8981\u8D85\u8FC72\\n\\n\u6700\u4F73\u8C03\u6574\u65B9\u6CD5\uFF1ADAS\u8D8A\u5C0F\u8D8A\u597D\uFF0C\u5C0F\u5230\u4F9D\u7136\u80FD\u51C6\u786E\u533A\u5206\u5355\u70B9/\u957F\u6309\u4E3A\u6B62\uFF1BARR\u80FD0\u5C310\uFF0C\u6E38\u620F\u4E0D\u5141\u8BB8\u7684\u8BDD\u5C31\u80FD\u62C9\u591A\u5C0F\u62C9\u591A\u5C0F\u3002",
    },
    {"DAS\u6253\u65AD(DCD)",
        "dascut dcd daduan",
        "term",
        "Techmino\u4E2D\u6307\u73A9\u5BB6\u7684\u64CD\u4F5C\u7126\u70B9\u8F6C\u79FB\u5230\u65B0\u65B9\u5757\u7684\u77AC\u95F4\uFF0C\u6B64\u65F6\u51CF\u5C0F\uFF08\u91CD\u7F6E\uFF09DAS\u8BA1\u65F6\u5668\uFF0C\u8BA9\u81EA\u52A8\u79FB\u52A8\u4E0D\u4F1A\u7ACB\u523B\u751F\u6548\uFF0C\u51CF\u5C11 \u201C\u79FB\u52A8\u952E\u677E\u5F00\u665A\u4E86\u5BFC\u81F4\u4E0B\u4E00\u5757\u4E00\u51FA\u6765\u5C31\u7ACB\u5373\u5F00\u59CB\u79FB\u52A8\u201D \u7684\u60C5\u51B5\\n\u6CE8\uFF1A\u5176\u4ED6\u6E38\u620F\u4E2D\u7684DAS\u6253\u65AD\u673A\u5236\u53EF\u80FD\u548CTechmino\u7684\u6709\u533A\u522B\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002",
    },
    {"\u8BEF\u786C\u964D\u6253\u65AD(HCD)",
        "autolockcut mdcut daduan",
        "term",
        "\u4E3A\u4E86\u9632\u6B62\u73A9\u5BB6\u786C\u964D\u65F6\u5F53\u524D\u65B9\u5757\u5DF2\u7ECF\u9501\u5B9A\uFF0C\u4E0B\u4E00\u5757\u51FA\u73B0\u5C31\u88AB\u7ACB\u523B\u786C\u964D\u5BFC\u81F4\u4E25\u91CDmd\uFF0C\u6240\u4EE5\u8BBE\u8BA1\u4E86\u6B64\u6253\u65AD\u53C2\u6570\u3002\\n\u65B9\u5757\u81EA\u7136\u9501\u5B9A\u4E4B\u540E\u51E0\u5E27\u5185\u786C\u964D\u952E\u662F\u65E0\u6548\u7684\uFF0C\u5177\u4F53\u770B\u8BBE\u7F6E\u4E86\u591A\u4E45\u3002\\n\u6CE8\uFF1A\u5176\u4ED6\u6E38\u620F\u4E2D\u7684\u9632\u8BEF\u786C\u964D\u673A\u5236\u53EF\u80FD\u548CTechmino\u7684\u6709\u533A\u522B\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002",
    },
    {"\u8F6F\u964D\u500D\u7387(SDF)",
        "\u8F6F\u964D\u901F\u5EA6 sdf softdropfactor",
        "term",
        "Soft Drop Factor\uFF0C\u8F6F\u964D\u901F\u5EA6\u56E0\u5B50\uFF08\u500D\u7387\uFF09\\n\u90E8\u5206\u6E38\u620F\u4E2D\u7684\u8F6F\u964D\u673A\u5236\u5C31\u662F\u5728\u6309\u4F4F\u8F6F\u964D\u952E\u65F6\u65B9\u5757\u53D7\u5230\u7684\u91CD\u529B\u53D8\u4E3A\u539F\u6765\u7684\u82E5\u5E72\u500D\uFF0CSDF\u5C31\u662F\u8FD9\u4E2A\u53D8\u5927\u7684\u500D\u6570\u3002\\n\u57FA\u672C\u6240\u6709\u5B98\u5757\u548CTETR.IO\u4F7F\u7528\u8FD9\u4E2A\u673A\u5236\uFF0C\u4F46Techmino\u4E0D\u4F7F\u7528\u3002",
    },
    {"\u65B9\u5757\u540D\u79F0",
        "mino",
        "term",
        "\u8FD9\u662F\u4E00\u4E2ATechmino\u4F7F\u7528\u7684\u6240\u6709\u65B9\u5757\u7684\u540D\u79F0\u548C\u5176\u5BF9\u5E94\u7684\u5F62\u72B6:\\n\u56DB\u8FDE\u5757:\\nZ: "..CHAR.mino.Z..",  S: "..CHAR.mino.S..",  J: "..CHAR.mino.J..",  L: "..CHAR.mino.L..",  T: "..CHAR.mino.T..",  O: "..CHAR.mino.O..",  I: "..CHAR.mino.I..";\\n\\n\u4E94\u8FDE\u5757:\\nZ5: "..CHAR.mino.Z5..",  S5: "..CHAR.mino.S5..",  P: "..CHAR.mino.P..",  Q: "..CHAR.mino.Q..",  F: "..CHAR.mino.F..",  E: "..CHAR.mino.E..",  T5: "..CHAR.mino.T5..",  U: "..CHAR.mino.U..",  V: "..CHAR.mino.V..",  W: "..CHAR.mino.W..",  X: "..CHAR.mino.X..",  J5: "..CHAR.mino.J5..",  L5: "..CHAR.mino.L5..",  R: "..CHAR.mino.R..",  Y: "..CHAR.mino.Y..",  N: "..CHAR.mino.N..",  H: "..CHAR.mino.H..",  I5: "..CHAR.mino.I5..";\\n\\n\u4E00\u81F3\u4E09\u8FDE\u5757:\\nI3: "..CHAR.mino.I3..",  C: "..CHAR.mino.C..",  I2: "..CHAR.mino.I2..",  O1: "..CHAR.mino.O1..".",
    },
    {"Bag7\u51FA\u5757",
        "bag\u51FA\u5757 bag7bag",
        "term",
        "\u4E00\u79CD\u51FA\u5757\u65B9\u5F0F\uFF0C\u73B0\u4EE3\u65B9\u5757\u666E\u904D\u4F7F\u7528\u8BE5\u89C4\u5219\uFF0C\u5F00\u5C40\u8D77\u6BCF7\u4E2A\u5757\u662F7\u79CD\u5F62\u72B6\u5404\u51FA\u73B0\u4E00\u6B21\uFF0C\u907F\u514D\u4E86\u5F88\u4E45\u4E0D\u51FA\u67D0\u4E2A\u5757\u548C\u67D0\u4E2A\u5757\u6765\u5F97\u7279\u522B\u591A\uFF0C\u662F\u4E00\u4E9B\u73B0\u4EE3\u65B9\u5757\u6218\u672F\u7684\u57FA\u7840\u3002\\n\\n\u4F8B\u5982\uFF1A\\nZSJLTOI OTSLZIJ LTISZOJ",
    },
    {"His\u51FA\u5757",
        "history",
        "term",
        "\u4E00\u79CD\u7684\u51FA\u5757\u65B9\u5F0F\uFF0C\u4F8B\u5982His4 Roll6 \uFF08h4r6\uFF09\u5C31\u662F\u5728\u968F\u673A\u751F\u6210\u65B0\u7684 Next \u7684\u65F6\u5019\uFF0C\u968F\u673A\u4E00\u4E2A\u8DDF\u6700\u540E4\u6B21\u751F\u6210\u7684Next\u4E2D\u6709\u4E00\u6837\u7684\uFF0C\u5C31\u91CD\u65B0\u968F\u673A\uFF0C\u76F4\u5230\u5DF2\u7ECF\u5C1D\u8BD56\u6B21\u6216\u548C\u90A34\u4E2A\u90FD\u4E0D\u4E00\u6837\u3002\\nTechmino\u7684His\u5E8F\u5217\u6A21\u5F0F\u4E2D\u6700\u5927Roll\u6B21\u6570\u4E3A\u5E8F\u5217\u957F\u5EA6\u7684\u4E00\u534A\uFF08\u5411\u4E0A\u53D6\u6574\uFF09\\n\\n\u662F\u7EAF\u968F\u673A\u51FA\u5757\u7684\u4E00\u5927\u6539\u8FDB\uFF0C\u5927\u5927\u51CF\u5C0F\u4E86\u8FDE\u7EED\u51FA\u51E0\u4E2ASZ\uFF08\u6D2A\u6C34\uFF09\u7684\u6982\u7387\u3002",
    },
    {"HisPool\u51FA\u5757",
        "history pool hispool",
        "term",
        "\u4E00\u79CD\u51FA\u5757\u65B9\u5F0F\uFF0CHistory Pool\uFF0Chis\u7B97\u6CD5\u7684\u5206\u652F\uFF0C\u6BD4\u8F83\u590D\u6742\uFF0C\u8FD9\u91CC\u53EA\u63D0\u4F9B\u5927\u6982\u7684\u8BF4\u660E\uFF1A\\n\u5728His\u7684\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E86\u4E00\u4E2APool\uFF08\u6C60\uFF09\uFF0C\u5728\u53D6\u5757\u7684\u65F6\u5019his\u662F\u76F4\u63A5\u968F\u673A\u548C\u5386\u53F2\u5E8F\u5217\uFF08\u6700\u540E4\u6B21\u751F\u6210\u7684next\uFF09\u6BD4\u8F83\uFF0C\u800CHisPool\u662F\u4ECEPool\u91CC\u9762\u968F\u673A\u53D6\uFF08\u7136\u540E\u8865\u5145\u4E00\u4E2A\u6700\u65F1\u7684\u5757\u589E\u52A0\u4ED6\u7684\u6982\u7387\uFF09\u7136\u540E\u548C\u5386\u53F2\u5E8F\u5217\u6BD4\u8F83\u3002\\n\\n\u8FD9\u4E2A\u7B97\u6CD5\u8BA9\u5E8F\u5217\u66F4\u7A33\u5B9A\uFF0C\u4ECB\u4E8EHis\u548CBag\u4E4B\u95F4\uFF0C\u5728\u7406\u8BBA\u4E0A\u4FDD\u8BC1\u4E86\u5E72\u65F1\u65F6\u95F4\u4E0D\u4F1A\u65E0\u9650\u957F\u3002",
    },
    {"bagES\u51FA\u5757",
        "bages\u51FA\u5757",
        "term",
        "\uFF08\u8BE5\u8BCD\u4EC5\u5728Techmino\u5185\u4F7F\u7528\uFF09Bag Easy-Start\uFF08Bag\u7B80\u5355\u5F00\u5C40\uFF09\uFF0CBag\u7B97\u6CD5\u7684\u5206\u652F\uFF0C\u5F00\u5C40\u7B2C\u4E00\u5305\u7684\u7B2C\u4E00\u5757\u4E0D\u4F1A\u662FS/Z/O/S5/Z5/F/E/W/X/N/H\u3002",
    },
    {"Reverb\u51FA\u5757",
        "reverb\u51FA\u5757",
        "term",
        "\uFF08\u8BE5\u8BCD\u4EC5\u5728Techmino\u5185\u4F7F\u7528\uFF09\u56DE\u58F0\u51FA\u5757\uFF0CBag\u7B97\u6CD5\u7684\u5206\u652F\uFF0C\u628ABag\u7684\u6BCF\u4E00\u5757\u91CD\u590D\u968F\u673A\u6B21\u6570\uFF08\u91CD\u590D\u8D8A\u591A\u6982\u7387\u8D8A\u5C0F\uFF0C\u7406\u8BBA\u8303\u56F4\u662F0~6\uFF0C\u5177\u4F53\u6BD4\u8F83\u590D\u6742\u8FD9\u91CC\u4E0D\u5C55\u5F00\uFF09",
    },
    {"\u8D85\u8FDE\u70B9(Hypertap)",
        "chaoliandian",
        "term",
        "\u5FEB\u901F\u9707\u52A8\u624B\u6307\uFF0C\u5B9E\u73B0\u6BD4\u957F\u6309\u66F4\u5FEB\u901F+\u7075\u6D3B\u7684\u9AD8\u901F\u5355\u70B9\u79FB\u52A8\uFF0C\u4E3B\u8981\u5728\u7ECF\u5178\u5757\u7684\u9AD8\u96BE\u5EA6\u4E0B\uFF08\u56E0\u4E3ADAS\u4E0D\u53EF\u8C03\u800C\u4E14\u7279\u522B\u6162\uFF0C\u9AD8\u901F\u4E0B\u5F88\u5BB9\u6613md\u5BFC\u81F4\u5931\u8D25\uFF0C\u6B64\u65F6\u624B\u52A8\u8FDE\u70B9\u5C31\u6BD4\u81EA\u52A8\u79FB\u52A8\u66F4\u5FEB\uFF09\u6216\u8005\u53D7\u7279\u6B8A\u60C5\u51B5\u9650\u5236\u4E0D\u9002\u5408\u7528\u81EA\u52A8\u79FB\u52A8\u65F6\u4F7F\u7528\u3002\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u6280\u672F\u7684\u4EBA\u79F0\u4E3A \u201CHypertapper\u201D\u3002",
    },
    {"\u8F6E\u6307(Rolling)",
        "lunzhi liandian",
        "term",
        "\u53E6\u4E00\u79CD\u5FEB\u901F\u8FDE\u70B9\u65B9\u6CD5\uFF0C\u7528\u4E8EDAS/ARR\u8BBE\u7F6E\u975E\u5E38\u6162\u65F6\u7684\u9AD8\u91CD\u529B\uFF081G\u5DE6\u53F3\uFF09\u6A21\u5F0F\u3002\\n\u5148\u628A\u624B\u67C4\uFF08\u952E\u76D8\u2026\u2026\u53EF\u80FD\u4E5F\u884C\u5427\uFF09\u60AC\u7A7A\u6446\u597D\uFF0C\u6BD4\u5982\u67B6\u5728\u817F\u4E0A\uFF0C\u8981\u8FDE\u70B9\u67D0\u4E2A\u952E\u7684\u65F6\u5019\u4E00\u53EA\u624B\u865A\u6309\u6309\u952E\uFF0C\u53E6\u5916\u4E00\u53EA\u624B\u7684\u51E0\u6839\u624B\u6307\u8F6E\u6D41\u6572\u6253\u624B\u67C4\u80CC\u9762\uFF0C \u201C\u53CD\u5411\u6309\u952E\u201D \u5B9E\u73B0\u8FDE\u70B9\u3002\u8FD9\u79CD\u63A7\u5236\u65B9\u6CD5\u53EF\u4EE5\u8BA9\u73A9\u5BB6\u66F4\u8F7B\u677E\u5730\u83B7\u5F97\u6BD4\u76F4\u63A5\u6296\u52A8\u624B\u6307\u7684Hypertap\uFF08\u8BE6\u89C1\u8D85\u8FDE\u70B9\u8BCD\u6761\uFF09\u66F4\u5FEB\u7684\u63A7\u5236\u901F\u5EA6\u3002\\n\u6B64\u65B9\u6CD5\u6700\u5148\u7531Cheez-fish\u53D1\u660E\uFF0C\u4ED6\u672C\u4EBA\u5219\u4F7F\u7528Rolling\u8FBE\u5230\u8FC7\u8D85\u8FC720Hz\u7684\u70B9\u51FB\u9891\u7387\u3002",
    },
    {"\u7A7F\u900F(Passthrough)",
        "pingthrough chuantou",
        "term",
        "\uFF08\u653B\u51FB\uFF09\u7A7F\u900F\uFF0C\u6307\u53CC\u65B9\u7684\u653B\u51FB\u6253\u51FA\u540E\u6CA1\u6709\u62B5\u6D88\uFF0C\u4E92\u76F8\u90FD\u6536\u5230\u7684\u73B0\u8C61\u3002\\nTETR.IO\u4E2D\u81EA\u5B9A\u4E49\u623F\u95F4\u5982\u679C\u5F00\u542FPassthrough\u89C4\u5219\uFF08\u66FE\u7ECF\u5929\u68AF\u9ED8\u8BA4\u5F00\u542F\uFF09\uFF0C\u90A3\u4E48\u5BF9\u624B\u6D88\u884C\u653B\u51FB\u7684\u77AC\u95F4\u80FD\u770B\u5230\u81EA\u5DF1\u7684\u7EA2\u6761\u51FA\u73B0\u4F46\u5176\u5904\u4E8E \u201C\u65E0\u654C\u65F6\u95F4\u201D \u5185\uFF0C\u4E0D\u4F1A\u89E6\u53D1\u4E5F\u4E0D\u80FD\u62B5\u6D88\uFF0C\u6B64\u65F6\u4F60\u7684\u653B\u51FB\u4F1A\u76F4\u63A5\u6253\u7ED9\u5BF9\u624B\u3002\uFF08\u5E94\u8BE5\u662F\u7ED9\u653B\u51FB\u7684\u98DE\u884C\u52A8\u753B\u9884\u7559\u65F6\u95F4\uFF0C\u540C\u65F6\u4E5F\u8BA9\u73A9\u5BB6\u80FD\u53CD\u5E94\u8FC7\u6765\u5E76\u4E3B\u52A8\u9009\u62E9\u8981\u4E0D\u8981\u62B5\u6D88\uFF0C\u8981\u7684\u8BDD\u5C31\u518D\u7B49\u4E00\u4F1A\uFF09\\n\u53E6\u6709pingthrough\u7684\u8BF4\u6CD5\uFF0C\u53EA\u662F\u539F\u56E0\u662F\u7531\u4E8E\u4E0D\u53EF\u907F\u514D\u7684\u7F51\u7EDC\u4F20\u8F93\u5EF6\u8FDF\uFF0C\u6548\u679C\u540Cpassthrough\uFF0C\u8BBE\u8BA1\u6BD4\u8F83\u7B80\u5355\u7684\u8054\u7F51\u5BF9\u6218\u5757\u6CA1\u6709\u7279\u6B8A\u8003\u8651\u7684\u8BDD\u53EF\u80FD\u81EA\u7136\u5C31\u4F1A\u5E26\u6709\u8FD9\u4E2A\u673A\u5236\u3002",
    },
    {"TOP\u653B\u51FB\u8868",
        "\u653B\u51FB\u8868 top attack",
        "term",
        "\u6D881/2/3/4\u62530/1/2/4\\nTspin\u653B\u51FB\u4E3A\u6D88\u884C\u6570\xD72\uFF0C\u5982\u679C\u7B26\u5408Mini\u6761\u4EF6\u5219\xF72\\n\u8FDE\u51FB\u653B\u51FB\uFF1A001122334445+\\nb2b\u653B\u51FB+1\uFF08\u5982\u679C\u662FT3\u5219+2\uFF09\\nPC\u653B\u51FB+6\uFF08\u8BE5\u90E8\u5206\u653B\u51FBAOE\u76F4\u63A5\u6253\u51FA\u5230\u6240\u6709\u5BF9\u624B\uFF0C\u4E0D\u62B5\u6D88\u7F13\u51B2\u69FD\u4E2D\u7684\u653B\u51FB\uFF09\u3002",
    },
    {"Techmino\u653B\u51FB\u8868",
        "\u653B\u51FB\u8868 tech attack",
        "term",
        "\u8BE6\u89C1\u4E3B\u83DC\u5355\u53F3\u4E0B\u89D2\u7684\u8BF4\u660E\u4E66\u9875\u9762\u3002",
    },
    {"C2\u5E8F\u5217",
        "seq",
        "term",
        "\uFF08\u4E03\u4E2A\u5757\u521D\u59CB\u6743\u91CD\u8BBE\u4E3A0\uFF09\\n\u8981\u53D6\u5757\u7684\u65F6\u5019\uFF0C\\n\u5148\u628A\u4E03\u4E2A\u6570\u90FD\u9664\u4EE52\u7136\u540E\u52A0\u4E0A0~1\u7684\u968F\u673A\u6570\uFF0C\\n\u6700\u5927\u7684\u6570\u5B57\u662F\u7B2C\u51E0\u4E2A\u7684\u5C31\u51FA\u5BF9\u5E94\u7684\u5757\uFF0C\u7136\u540E\u5C06\u5176\u6743\u91CD\u9664\u4EE53.5\\n\u5FAA\u73AF\u3002",-- Discovered by zxc
    },
    {"\u5806\u53E0(Stack)",
        "duidie stacking",
        "term",
        "\u5C06\u65B9\u5757\u65E0\u7F1D\u9699\u5730\u5806\u8D77\u6765\uFF0C\u9700\u8981\u73A9\u5BB6\u6709\u9884\u8BFBNext\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0D\u4F7F\u7528Hold\u5E76\u4E14\u7528\u5341\u4E2A\u6D88\u56DB\u5B8C\u621040L\u6A21\u5F0F\u8FDB\u884C\u7EC3\u4E60\u3002\\n\u8FD9\u9879\u80FD\u529B\u4ECE\u5165\u5751\u5230\u5C01\u795E\u90FD\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002",
    },
    {"\u53CC\u65CB",
        "shuangxuan",
        "term",
        "\u6307\u80FD\u591F\u4F7F\u7528\u987A\u65F6\u9488+\u9006\u65F6\u9488\u4E24\u4E2A\u65CB\u8F6C\u952E\u7684\u6280\u672F\uFF0C\u539F\u6765\u8981\u8F6C\u4E09\u4E0B\u7684\u60C5\u51B5\u53EF\u4EE5\u53CD\u5411\u8F6C\u4E00\u4E0B\u5C31\u591F\uFF0C\u51CF\u5C11\u70E6\u7410\u64CD\u4F5C\u3002\\n\u540C\u65F6\u53CC\u65CB\u4E5F\u662F\u5B66\u4E60Finesse\u7684\u5FC5\u8981\u524D\u63D0\u3002\\n\\n\u53E6\u89C1 \u4E09\u65CB\u3002",
    },
    {"\u4E09\u65CB",
        "sanxuan",
        "term",
        "\u6307\u80FD\u591F\u4F7F\u7528\u987A+\u9006\u65F6\u9488+180\xB0\u65CB\u8F6C\u4E09\u4E2A\u65CB\u8F6C\u952E\u7684\u6280\u672F\uFF0C\u4EFB\u4F55\u65B9\u5757\u653E\u54EA\u53EA\u9700\u8981\u65CB\u8F6C\u4E00\u6B21\u5373\u53EF\uFF08Spin\u4E0D\u7B97\uFF09\u3002\\n\u4F46\u7531\u4E8E\u53EA\u6709\u90E8\u5206\u6E38\u620F\u6709180\xB0\u65CB\u8F6C\u6240\u4EE5\u6539\u64CD\u4F5C\u5E76\u4E0D\u901A\u7528\uFF0C\u800C\u4E14\u5BF9\u901F\u5EA6\u63D0\u5347\u7684\u6548\u679C\u4E0D\u5982\u4ECE\u5355\u65CB\u8F6C\u53CC\u65CB\u663E\u8457\uFF0C\u4E0D\u8FFD\u6C42\u6781\u9650\u901F\u5EA6\u7684\u73A9\u5BB6\u53EF\u4E0D\u5B66\u3002",
    },
    {"\u5E72\u65F1(Drought)",
        "ganhan",
        "term",
        "\u7ECF\u5178\u5757\u672F\u8BED\uFF0C\u6307\u957F\u65F6\u95F4\u4E0D\u6765I\u65B9\u5757\uFF08\u957F\u6761\uFF09\u3002\u73B0\u4EE3\u65B9\u5757\u4F7F\u7528\u7684Bag7\u51FA\u5757\u89C4\u5219\u4E0B\u5E72\u65F1\u51E0\u4E4E\u4E0D\u53EF\u80FD\uFF0C\u5E73\u57477\u5757\u5C31\u4F1A\u6709\u4E00\u4E2AI\uFF0C\u7406\u8BBA\u6781\u9650\u4E24\u4E2AI\u6700\u8FDC\u4E2D\u95F4\u969412\u5757\u3002",
    },
    {"\u9AA8\u5757(Bone)",
        "gukuai bone tgm",
        "term",
        "\u6700\u65E9\u7684\u65B9\u5757\u6E38\u620F\u4F7F\u7528\u7684\u65B9\u5757\u6837\u5F0F\u3002\\n\u5F88\u4E45\u4EE5\u524D\u7684\u7535\u8111\u6CA1\u6709\u53EF\u4EE5\u663E\u793A\u590D\u6742\u56FE\u6848\u7684\u5C4F\u5E55\uFF0C\u53EA\u80FD\u5F80\u4E0A\u6253\u5B57\uFF0C\u6240\u4EE5\u4E00\u683C\u65B9\u5757\u7528\u4E24\u4E2A\u65B9\u62EC\u53F7[\u3000]\u8868\u793A\uFF0C\u957F\u5F97\u50CF\u9AA8\u5934\u6240\u4EE5\u53EB\u9AA8\u5757\u3002\\n\u57FA\u4E8E\u9AA8\u5757\u7684\u7279\u70B9\uFF0CTechmino\u628A\u9AA8\u5757\u91CD\u65B0\u5B9A\u4E49\u4E3A\uFF0C \u201C\u6240\u6709\u5F62\u72B6\u4F7F\u7528\u7684\u540C\u4E00\u4E2A\u6BD4\u8F83\u82B1\u773C\u7684\u8D34\u56FE\u201D\uFF0C\u4E0D\u540C\u7684\u76AE\u80A4\u6709\u4E0D\u540C\u7684\u9AA8\u5757\u6837\u5F0F\u3002",
    },
    {"\u534A\u9690",
        "banyin half semi invisible",
        "term",
        "\u6307\u65B9\u5757\u9501\u5B9A\u7ECF\u8FC7\u4E00\u6BB5\u65F6\u95F4\u540E\u4F1A\u53D8\u9690\u5F62\u7684\u89C4\u5219\\n\u6CE8\uFF1A\u4ECE\u9501\u5B9A\u5F00\u59CB\u5230\u6D88\u5931\u7684\u5177\u4F53\u65F6\u957F\u4E0D\u5B9A\uFF0C\u53EF\u4EE5\u63CF\u8FF0\u4E3A \u201C\u8FC7\u51E0\u79D2\u79CD\u540E\u6D88\u5931\u201D\u3002",
    },
    {"\u5168\u9690",
        "quanyin invisible",
        "term",
        "\u6307\u65B9\u5757\u9501\u5B9A\u540E\u4F1A\u9A6C\u4E0A\u5B8C\u5168\u9690\u85CF\\n\u6CE8\uFF1A\u9501\u5B9A\u65F6\u6709\u6D88\u5931\u52A8\u753B\u7684\u8BDD\u4E5F\u53EF\u4EE5\u53EB\u5168\u9690\uFF0C\u4F46\u5176\u5B9E\u96BE\u5EA6\u4F1A\u5C0F\u4E00\u70B9\uFF0C\u6545Techmino\u4E2D\u6CA1\u6709\u52A8\u753B\u7684\u9690\u5F62\u6A21\u5F0F\u53EB\u77AC\u9690\u3002",
    },
    {"\u573A\u5730\u91CD\u529B",
        "\u91CD\u529B zhongli liansuo cascade chain",
        "term",
        "\uFF08\u7531\u4E8E \u201C\u91CD\u529B\u201D \u6709\u6B67\u4E49\u6240\u4EE5\u672C\u8BCD\u5178\u91CC\u79F0\u4E3A\u573A\u5730\u91CD\u529B\uFF0C\u4E5F\u6709\u91CD\u529B\u8FDE\u9501\u7B49\u53EB\u6CD5\u3002\uFF09\\n\u90E8\u5206\u6E38\u620F\u7684\u90E8\u5206\u6A21\u5F0F\u53EF\u80FD\u5305\u542B\u6B64\u89C4\u5219\u3002\u6B64\u89C4\u5219\u4E0B\u73A9\u5BB6\u7684\u56DB\u683C\u65B9\u5757\u56DB\u4E2A\u65B9\u5411\u6709\u8FDE\u63A5\u5173\u7CFB\uFF0C\u8FDE\u8D77\u6765\u7684\u51E0\u4E2A\u683C\u6574\u4F53\u4F1A\u53D7\u5230\u91CD\u529B\u5F71\u54CD\uFF0C\u60AC\u7A7A\u4E86\u4F1A\u5F80\u4E0B\u843D\u3002\u5728\u8FD9\u4E2A\u89C4\u5219\u4E0B\u53EF\u4EE5\u6784\u9020\u590D\u6742\u7684\u8FDE\u9501\u6D88\u9664\uFF0C\u4E00\u4E2A\u4E3B\u6253\u8FDE\u9501\u6D88\u9664\u5BF9\u6218\u7684\u6E38\u620F\u662FQudra\uFF08\u8001\u6E38\u620F\uFF0C\u73B0\u5728\u57FA\u672C\u6CA1\u4EBA\u73A9\uFF09\u3002",
    },
    {"MPH\u6A21\u5F0F",
        "",
        "term",
        "\u4E00\u4E2A\u6E38\u620F\u6A21\u5F0F\uFF1A\\nMemoryless\uFF0CPreviewless\uFF0CHoldless\\n\u7EAF\u968F\u673A\u5757\u5E8F+\u65E0Next+\u65E0Hold\u5B8C\u621040L\uFF0C\u4E00\u4E2A\u975E\u5E38\u8003\u9A8C\u73A9\u5BB6\u53CD\u5E94\u901F\u5EA6\u7684\u6A21\u5F0F\u3002",
    },
    {"\u8F93\u5165\u5EF6\u8FDF",
        "input delay yanchi",
        "term",
        "\u7528\u4EFB\u4F55\u8BBE\u5907\u73A9\u4EFB\u4F55\u6E38\u620F\u65F6\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\uFF08\u6309\u952E\u76D8\uFF0C\u70B9\u9F20\u6807\u7B49\uFF09\u90FD\u4F1A\u665A\u4E00\u70B9\u70B9\uFF08\u5F88\u77ED\uFF0C\u51E0\u6BEB\u79D2\u5230\u51E0\u5341\u6BEB\u79D2\uFF09\u624D\u5230\u8FBE\u6E38\u620F\uFF0C\u5982\u679C\u8FC7\u957F\u5C31\u4F1A\u5F88\u5F71\u54CD\u6E38\u620F\u624B\u611F\uFF0C\u4F5C\u7528\u6548\u679C\u7C7B\u4F3C\u4E8E\u4F60\u62FFQQ\u8FDC\u7A0B\u63A7\u5236\u6253FPS\u6E38\u620F\\nTOP\u3001TE\u7B49\u6E38\u620F\u6BD4\u8F83\u660E\u663E\\n\u8FD9\u4E2A\u5EF6\u8FDF\u4E00\u822C\u7531\u786C\u4EF6\u6027\u80FD\uFF0C\u786C\u4EF6\u72B6\u6001\u5F71\u54CD\uFF0C\u901A\u5E38\u6765\u8BF4\u4E0D\u53EF\u8BBE\u7F6E\uFF0C\u5F00\u542F\u6027\u80FD\u6A21\u5F0F\uFF08\u6216\u8005\u5173\u95ED\u8282\u80FD\u6A21\u5F0F\uFF09\u53EF\u80FD\u4F1A\u597D\u4E00\u70B9\u3002",
    },
    {"\u79D8\u5BC6\u6BB5\u4F4D",
        "\u5927\u4E8E\u53F7 secret grade dayuhao",
        "term",
        "\u51FA\u81EATGM\u7CFB\u5217\u7684\u5F69\u86CB\u73A9\u6CD5\u3002\u4E0D\u6309\u7167TGM\u7684\u4E00\u822C\u76EE\u6807\u53BB\u73A9\uFF0C\u800C\u662F\u53BB\u62FC\u56FE\u62FC\u51FA \u201C\u6BCF\u884C\u4EC5\u6709\u4E00\u4E2A\u6D1E\u7684\u5927\u4E8E\u53F7\u201D \u56FE\u5F62\uFF08\u4E0D\u80FD\u662F\u5C0F\u4E8E\u53F7\uFF09\uFF0C\u62FC\u5F97\u8D8A\u591A\u83B7\u5F97\u7684\u79D8\u5BC6\u6BB5\u4F4D\u8D8A\u9AD8\uFF08\u6CA1\u7279\u6B8A\u529F\u80FD\uFF0C\u53EA\u662F\u597D\u73A9\uFF09\uFF0C\u6700\u9AD8\u76EE\u6807\u662F\u5B8C\u621019\u884C\u5E76\u5C01\u9876"..HDwiki,
        HDsearch.."Secret_Grade_Techniques",
    },
    {"Cold Clear",
        "\u673A\u5668\u4EBA \u7535\u8111 cc coldclear ai bot jiqiren",
        "term",
        "\u4E00\u4E2AAI\u7684\u540D\u5B57\uFF08\u5C31\u8DDFAlphaGo\u4E00\u6837\uFF09\\n\u7531MinusKelvin\u5F00\u53D1\uFF0C\u672C\u6765\u662F\u7528\u4E8EPPT\u7684\u3002\u5728Techmino\u4E2D\u7ECF\u8FC7\u8C03\u6574\u540E\u652F\u6301all-spin\u548CTRS\u65CB\u8F6C\u7CFB\u7EDF",
    },
    {"ZZZbot",
        "\u673A\u5668\u4EBA \u7535\u8111 ai bot jiqiren zzztoj",
        "term",
        "\u4E00\u4E2AAI\u7684\u540D\u5B57\uFF08\u5C31\u8DDFAlphaGo\u4E00\u6837\uFF09\\n\u7531\u7814\u7A76\u7FA4\u7FA4\u53CB\u594F\u4E4B\u7AE0\u5F00\u53D1\uFF0C\u91CD\u65B0\u8C03\u53C2\u540E\u5728\u5404\u4E2A\u6E38\u620F\u5E73\u53F0\u4E0A\u7684\u8868\u73B0\u90FD\u5F88\u4E0D\u9519\u3002",
    },

    -- \u5B9A\u5F0F
    {"\u5F00\u5C40\u5B9A\u5F0F(Setup)",
        "opening kaijudingshi opener",
        "setup",
        "\u5F00\u5C40\u5B9A\u5F0F\uFF0C\u5B9A\u5F0F\u4E00\u822C\u6307\u5F00\u5C40\u5B9A\u5F0F\u8FD9\u4E2A\u6982\u5FF5\u3002\\n\u6307\u5F00\u5C40\u540E\u53EF\u4EE5\u4F7F\u7528\u7684\u5957\u8DEF\u6446\u6CD5\u3002\u5C40\u4E2D\u60C5\u51B5\u5408\u9002\u7684\u65F6\u5019\u4E5F\u53EF\u4EE5\u6446\u51FA\u540C\u6837\u7684\u5F62\u72B6\uFF0C\u4F46\u662F\u548C\u6446\u6CD5\u5F00\u5C40\u4E00\u822C\u90FD\u4E0D\u4E00\u6837\u3002\\n\\n\u80FD\u79F0\u4E3A\u5B9A\u5F0F\u7684\u6446\u6CD5\u8981\u5C3D\u91CF\u6EE1\u8DB3\u4EE5\u4E0B\u81F3\u5C112~3\u6761\uFF1A\\n\u80FD\u9002\u5E94\u5927\u591A\u6570\u5757\u5E8F\\n\u8F93\u51FA\u9AD8\uFF0C\u5C3D\u91CF\u4E0D\u6D6A\u8D39T\u5757\\n\u5F88\u591A\u65B9\u5757\u65E0\u9700\u8F6F\u964D\uFF0C\u6781\u7B80\u64CD\u4F5C\u6570\u5C11\\n\u6709\u660E\u786E\u540E\u7EED\uFF0C\u5206\u652F\u5C3D\u91CF\u5C11\u3002\\n\\n\u6CE8\uFF1A\u7EDD\u5927\u591A\u6570\u5B9A\u5F0F\u57FA\u4E8Ebag7\uFF0C\u5E8F\u5217\u89C4\u5F8B\u6027\u5F3A\u624D\u6709\u53D1\u660E\u5B9A\u5F0F\u7684\u53EF\u80FD\u3002",
    },
    {"DT\u70AE",
        "dt cannon",
        "setup",
        "Double-Triple Cannon\u3002"..HDwiki,
        HDsearch.."dt",
    },
    {"DTPC",
        "dtpc",
        "setup",
        "DT\u70AE\u4E00\u4E2A\u80FD\u63A5PC\u7684\u5206\u652F\u3002"..HDwiki,
        HDsearch.."dt",
    },
    {"BT\u70AE",
        "bt cannon",
        "setup",
        "\u03B2\u70AE\uFF08Beta\u70AE\uFF09\u3002"..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"BTPC",
        "btpc",
        "setup",
        "BT\u70AE\u4E00\u4E2A\u80FD\u63A5PC\u7684\u5206\u652F\u3002"..HDwiki,
        HDsearch.."bt_cannon",
    },
    {"DDPC",
        "ddpc",
        "setup",
        "\u5F00\u5C40TSD\u7684\u4E00\u4E2A\u80FD\u63A5Double-Double-PC\u7684\u5206\u652F\u3002"..HDwiki,
        HDsearch.."TKI_3_Perfect_Clear",
    },
    {"QT\u70AE",
        "qt cannon",
        "setup",
        "\u4E00\u79CD\u80FD\u4EE5\u66F4\u9AD8\u7684\u6982\u7387\u642D\u51FA\u5F00\u5C40DT Attack\u7684\u7C7B\u4F3CDT\u70AE\u7684\u5B9A\u5F0F\u3002"..HDwiki,
        HDsearch.."dt",
    },
    {"MT",
        "mt",
        "setup",
        "Mini-Triple\\n\u4E00\u4E2ATSM+TST\u7684\u7ED3\u6784\u3002",
        HDsearch.."mt",
    },
    {"Trinity",
        "trinity",
        "setup",
        "Trinity\\n\u4E00\u4E2ATSD+TSD+TSD\u6216TSM+TST+TSD\u7684\u7ED3\u6784\u3002",
        HDsearch.."trinity",
    },
    {"\u72FC\u6708\u70AE",
        "wolfmoon",
        "setup",
        "\u72FC\u6708\u70AE\u3002"..HDwiki,
        HDsearch.."wolfmoon_cannon",
    },
    {"Sewer",
        "sewer",
        "setup",
        "Sewer\u5F00\u5C40\u3002"..HDwiki,
        HDsearch.."sewer",
    },
    {"TKI",
        "tki-3 ",
        "setup",
        "TKI-3\u5F00\u5C40\\n\u6709\u4E24\u79CD\u89E3\u91CA\uFF0C\u4E00\u4E2A\u662FTSD\u5F00\u5C40\u7684TKI-3\uFF0C\u53E6\u4E00\u4E2A\u662FTST\u5F00\u5C40\u7684TKI\u5806\u79EF\uFF08C-Spin\uFF09\u3002"..HDwiki,
        HDsearch.."TKI_3_Opening",
    },
    {"God Spin",
        "god",
        "setup",
        "God Spin\\nwindkey\u53D1\u660E\u7684\u4E00\u4E2A\u89C2\u8D4F\u6027\u5F88\u5F3A\u4F46\u5B9E\u6218\u6CA1\u5565\u7528\u7684\u70AB\u9177\u7279\u6B8AT2+T3\u5F00\u5C40\u5B9A\u5F0F\u3002"..HDwiki,
        HDsearch.."godspin",
    },
    {"\u4FE1\u5929\u7FC1",
        "xintianweng albatrosssp albatrossspecial",
        "setup",
        "\u4E00\u79CD\u9AD8\u89C2\u8D4F\u6027\u51E0\u4E4E\u4E0D\u6D6A\u8D39T\u7684\u5FEB\u8282\u594F\u5F3A\u529BT2-T3-T2-PC\u5F00\u5C40\u3002"..HDwiki,
        HDsearch.."Albatross_Special",
    },
    {"\u9E48\u9E55",
        "tihu pelican",
        "setup",
        "\u4E00\u79CD\u7C7B\u4F3C\u4FE1\u5929\u7FC1\u7684\u5B9A\u5F0F\uFF0C\u5728\u5757\u5E8F\u4E0D\u80FD\u4FE1\u5929\u7FC1\u7684\u65F6\u5019\u53EF\u4EE5\u7528\u3002",
        HDsearch.."Pelican"
    },
    {"\u5168\u6E05\u5F00\u5C40",
        "qiqiaoban tangram pco 1stpc",
        "setup",
        "Perfect Clear Opener\uFF0C\u4E00\u79CD\u6781\u5927\u6982\u7387\u80FD\u6446\u51FA\u6765\uFF0C\u6709\u6982\u7387\uFF08hold I\u7EA684.6%\uFF0C\u4E0Dhold I\u7EA661.2%\uFF09\u80FD\u505A\u5230PC\u7684\u5B9A\u5F0F\uFF0CTechmino\u4E2D\u7684pc\u7EC3\u4E60\u4E2D\u7A7A\u51FA\u4E0D\u89C4\u5219\u533A\u57DF\u7684\u90A3\u4E2A\u5C31\u662FPCO\u3002"..HDwiki,
        HDsearch.."Perfect_Clear_Opener",
    },
    {"\u516D\u5DE7\u677F",
        "liuqiaoban gracesystem 1stpc",
        "setup",
        "Grace System\uFF0C\u5927\u7EA6\u670988.57%\u6982\u7387\u80FD\u505A\u5230PC\u7684\u5B9A\u5F0F\uFF0CTechmino\u4E2D\u7684PC\u7EC3\u4E60\u4E2D\u7A7A\u51FA4\xD74\u65B9\u5F62\u533A\u57DF\u5C31\u662F\u516D\u5DE7\u677F\u3002",
    },
    {"DPC",
        "DPC",
        "setup",
        "\u5728\u573A\u5730\u7A7A\u767D\uFF0C7bag\u8FD8\u5269\u4E00\u5757\u7684\u60C5\u51B5\u4E0B\uFF0C\u80FD\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u8FBE\u5230100%\u642D\u5EFA\u7387\u7684TSD+PC\u7684\u5B9A\u5F0F\u3002\u66F4\u591A\u4FE1\u606F\u89C1tetristemplate.info",
        "https://tetristemplate.info/dpc/",
    },
    {"Gamushiro\u5806\u53E0",
        "gamushiro",
        "setup",
        "\u30AC\u30E0\u30B7\u30ED\u7A4D\u307F\uFF08Gamushiro\u5806\u53E0\uFF09\uFF0C\u4E00\u79CD\u5F00\u5C40TD-Attack\u7684\u5B9A\u5F0F\u3002"..HDwiki,
        HDsearch.."Gamushiro_Stacking",
    },

    -- \u5F62\u72B6
    {"\u4E2D\u5C40\u5B9A\u5F0F",
        "setup dingshi",
        "pattern",
        "\u6307\u4E00\u4E9B\u7279\u5B9A\u7684\u80FD\u6253\u51FA\u8F83\u9AD8\u4F24\u5BB3\u7684\u5E38\u89C1\u5178\u578B\u5F62\u72B6\uFF0C\u662F\u4E2D\u5C40\u8F93\u51FA\u7684\u9014\u5F84\u4E4B\u4E00\uFF0C\u90E8\u5206\u4E5F\u53EF\u4EE5\u5728\u5F00\u5C40\u505A\u4E0D\u8FC7\u4E0D\u662F\u5F88\u6709\u5FC5\u8981\uFF0C\u4E3B\u8981\u89C1\u4E8E\u4E2D\u5C40\\n\u53E6\u89C1\u5F00\u5C40\u5B9A\u5F0F\uFF0C\u53EA\u8BF4\u5B9A\u5F0F\u4E24\u4E2A\u5B57\u4E00\u822C\u6307\u5F00\u5C40\u5B9A\u5F0F\u800C\u975E\u4E2D\u5C40\u3002",
    },
    {"C-Spin",
        "cspin tki tdattack",
        "pattern",
        "\u4E5F\u88AB\u79F0\u4E3ATKI\u5806\u79EF\uFF0CTD-Attack\u3002"..HDwiki,
        HDsearch.."c-spin",
    },
    {"STSD",
        "stsd",
        "pattern",
        "Super T-spin Double\\n\u4E00\u79CD\u80FD\u505A\u4E24\u4E2AT2\u7684\u5F62\u72B6\u3002\\n\u5982\u679C\u5783\u573E\u884C\u6B63\u597D\u7A7A\u5728STSD\u6B63\u4E0B\u65B9\u4F1A\u66B4\u6BD9\u3002"..HDwiki,
        HDsearch.."stsd",
    },
    {"STMB",
        "stmb",
        "pattern",
        "STMB cave\\n\u57283\u5BBD\u5751\u67B6SZ\u6350\u4E00\u4E2AT2\u7684\u5F62\u72B6\u3002"..HDwiki,
        HDsearch.."stmb_cave",
    },
    {"\u53CC\u5203\u5251",
        "shuangrenjian fractal spider",
        "pattern",
        "\u4E24\u4E2AT2\u5F62\u72B6\u53E0\u5728\u4E00\u8D77\u3002"..HDwiki,
        HDsearch.."Fractal",
    },
    {"LST\u5806\u53E0",
        "lst",
        "pattern",
        "\u4E00\u79CD\u4E0D\u65ADb2b\u4E00\u76F4\u505AT2\u7684\u5806\u53E0\u65B9\u6CD5\u3002\\n",
        "https://www.bilibili.com/read/cv7946210",
    },
    {"\u6C49\u5821\u5305",
        "hamburger hanbaobao",
        "pattern",
        "\u4E00\u79CD\u8FB9\u7F18\u6350T\u4E0D\u5F71\u54CD\u6D88\u56DB\u7684\u5806\u53E0\u6CD5\u3002"..HDwiki,
        HDsearch.."hamburger",
    },
    {"\u7687\u5BB6\u5341\u5B57",
        "\u7687\u5341 imperial cross huangjiashizi huangshi",
        "pattern",
        "\u5728\u4E00\u4E2A\u5341\u5B57\u5F62\u6D1E\u53E3\u76D6\u5C4B\u6A90\u540E\u53EF\u4EE5\u505A\u4E24\u4E2AT2\u7684\u5F62\u72B6\u3002"..HDwiki,
        HDsearch.."imperial_cross",
    },
    {"\u9636\u68AF\u6350",
        "jieti kaidan stairs",
        "pattern",
        "\u4E00\u79CD\u5728\u770B\u8D77\u6765\u50CF\u9636\u68AF\u7684\u6D1E\u53E3\u6350\u4E00\u4E2AT2\u7684\u5F62\u72B6\u3002"..HDwiki,
        HDsearch.."kaidan",
    },
    {"\u793E\u755Ctrain",
        "shachikutrain shechu",
        "pattern",
        "\u4E00\u79CD\u5728\u5E38\u89C1T3\u5C4B\u6A90\u4E0A\u6350\u4E24\u4E2AT2\u7684\u5F62\u72B6\u3002"..HDwiki,
        HDsearch.."Shachiku_Train",
    },
    {"\u5343\u9E1F\u683C\u5B50",
        "qianniaoge cutcopy",
        "pattern",
        "\u4E00\u79CD\u5728\u5C0F\u6D1E\u4E0A\u6350\u4E00\u4E2AT2\u540E\u8FD8\u80FD\u505A\u4E00\u4E2AT2\u7684\u5F62\u72B6\u3002"..HDwiki,
        HDsearch.."Cut_copy",
    },
    {"\u7EEF\u7EA2\u4E4B\u738B",
        "feihongzhiwang king crimson",
        "pattern",
        "\u5728STSD\u4E0A\u53E0\u82E5\u5E72\u4E2AT3\u7684\u5F62\u72B6\u3002"..HDwiki,
        HDsearch.."King_Crimson",
    },
    {"\u8FDE\u7EEDPC (1/2)",
        "pcloop",
        "pattern",
        "\u30C6\u30C8\u30EA\u30B9\u5802\u7684\u4ECE\u5F00\u5C40\u8D77\u7B2C1\u30012\u30013\u30014\u30017\u4E2A4\u884Cpc\u7684\u5F00\u5C40\u6574\u7406\u3002\u7B2C\u4E03\u4E2Apc\u505A\u5B8C\u603B\u5171\u7528\u638970\u5757\uFF0C\u76F8\u5F53\u4E8E\u56DE\u5230\u6E38\u620F\u5F00\u59CB\u9636\u6BB5\u53EF\u4EE5\u505A1st pc\\n\\n\u7B2C5\u548C\u7B2C6\u8BE6\u89C1\u4E0B\u4E00\u4E2A\u8BCD\u6761",
        "https://shiwehi.com/tetris/template/consecutivepc.php"
    },
    {"\u8FDE\u7EEDPC (2/2)",
        "pcloop",
        "pattern",
        "four.lol\u7684\u4ECE\u5F00\u5C40\u8D77\u7B2C5\u30016\u4E2A4\u884Cpc\u7684\u5F00\u5C40\u6574\u7406\u3002\\n\uFF08\u94FE\u63A5\u70B9\u5F00\u662F5th\uFF0C\u53EF\u4EE5\u52306th\uFF0C\u5176\u4ED6\u7684\u63A8\u8350\u770B\u4E0A\u4E00\u4E2A\u8BCD\u6761\uFF09",
        "https://four.lol/perfect-clears/5th"
    },

    -- \u5B58\u6863\u7BA1\u7406
    {"\u63A7\u5236\u53F0",
        "console cmd commamd minglinghang kongzhitai",
        "command",
        "\u76EE\u524D\u8FDB\u5165\u63A7\u5236\u53F0\u7684\u65B9\u5F0F\u662F\u5728\u4E3B\u83DC\u5355 \u70B9\u7279\u5B9A\u4F4D\u7F6E/\u6309\u952E\u76D8\u67D0\u4E2A\u952E \u6570\u6B21\u3002\\n\\n\u8FDB\u5165\u4E4B\u540E\u8F93\u5165help\u5E76\u56DE\u8F66\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002\\n\u6765\u63A2\u7D22Techmino\u7684\u9690\u85CF\u5185\u5BB9\u548C\u8BA1\u7B97\u673A\u66F4\u5E95\u5C42\u7684\u64CD\u4F5C\u5427\uFF01",
    },
    {"\u91CD\u7F6E\u8BBE\u7F6E",
        "reset setting chongzhi qingkong shezhi",
        "command",
        "\u524D\u5F80\u63A7\u5236\u53F0\u8F93\u5165 \u201Crm conf/setting\u201D \u5E76\u56DE\u8F66\\n\u9700\u8981\u91CD\u542F\u6E38\u620F\u751F\u6548\uFF0C\u82E5\u53CD\u6094\uFF0C\u8FDB\u5165\u8BBE\u7F6E\u83DC\u5355\u518D\u9000\u51FA\u5373\u53EF\u6062\u590D\u6587\u4EF6\u3002",
    },
    {"\u91CD\u7F6E\u7EDF\u8BA1\u6570\u636E",
        "reset statistic data chongzhi tongji shuju",
        "command",
        "\u524D\u5F80\u63A7\u5236\u53F0\u8F93\u5165 \u201Crm conf/data\u201D \u5E76\u56DE\u8F66\\n\u9700\u8981\u91CD\u542F\u6E38\u620F\u751F\u6548\uFF0C\u82E5\u53CD\u6094\uFF0C\u73A9\u4E00\u5C40\u5E76\u89E6\u53D1\u7ED3\u7B97\u5373\u53EF\u6062\u590D\u6587\u4EF6\u3002",
    },
    {"\u91CD\u7F6E\u89E3\u9501\u72B6\u6001",
        "reset unlock chongzhi qingkong jiesuo",
        "command",
        "\u524D\u5F80\u63A7\u5236\u53F0\u8F93\u5165 \u201Crm conf/unlock\u201D \u5E76\u56DE\u8F66\\n\u9700\u8981\u91CD\u542F\u6E38\u620F\u751F\u6548\uFF0C\u82E5\u53CD\u6094\uFF0C\u5237\u65B0\u4EFB\u610F\u4E00\u4E2A\u6A21\u5F0F\u5728\u5730\u56FE\u4E0A\u7684\u72B6\u6001\u5373\u53EF\u6062\u590D\u6587\u4EF6\u3002",
    },
    {"\u91CD\u7F6E\u672C\u5730\u6392\u884C\u699C",
        "reset chongzhi paihangbang",
        "command",
        "\u524D\u5F80\u63A7\u5236\u53F0\u8F93\u5165 \u201Crm -s record\u201D \u5E76\u56DE\u8F66\\n\u9700\u8981\u91CD\u542F\u6E38\u620F\u751F\u6548\uFF0C\u82E5\u53CD\u6094\uFF0C\u73A9\u4E00\u5C40\u5E76\u66F4\u65B0\u6A21\u5F0F\u6392\u884C\u699C\u5373\u53EF\u6062\u590D\u5BF9\u5E94\u6A21\u5F0F\u7684\u5355\u4E2A\u6392\u884C\u699C\u6587\u4EF6\u3002",
    },
    {"\u5220\u9664\u952E\u4F4D",
        "reset virtualkey",
        "command",
        "\u524D\u5F80\u63A7\u5236\u53F0\u8F93\u5165 \u201Crm conf/\u952E\u4F4D\u6587\u4EF6\u201D \u5E76\u56DE\u8F66\\n\u952E\u76D8\u662Fkey\uFF0C\u865A\u62DF\u6309\u952E\u662Fvirtualkey\uFF0C\u865A\u62DF\u6309\u952E\u9884\u8BBE\u662FvkSave1\uFF082\uFF09\\n\u524D\u4E24\u8005\u91CD\u542F\u751F\u6548\uFF0C\u82E5\u53CD\u6094\uFF0C\u8FDB\u5165\u5BF9\u5E94\u7684\u8BBE\u7F6E\u83DC\u5355\u518D\u8FD4\u56DE\u5373\u53EF\u6062\u590D\u6587\u4EF6\u3002",
    },
    {"\u5220\u9664\u5F55\u50CF",
        "reset replay luxiang",
        "command",
        "\u524D\u5F80\u63A7\u5236\u53F0\u8F93\u5165 \u201Crm -s replay\u201D \u5E76\u56DE\u8F66\u3002\\n\u7ACB\u5373\u751F\u6548\u3002",
    },
    {"\u5220\u9664\u7F13\u5B58",
        "reset cache huancun touxiang",
        "command",
        "\u524D\u5F80\u63A7\u5236\u53F0\u8F93\u5165 \u201Crm -s cache\u201D \u5E76\u56DE\u8F66\u3002\\n\u7ACB\u5373\u751F\u6548\u3002",
    },

    -- \u82F1\u6587
    {"SFX",
        "",
        "english",
        "Sound Effects\\n\u97F3\u6548\uFF08\u4E5F\u53EBSE\uFF09\u3002",
    },
    {"BGM",
        "",
        "english",
        "Background Music\\n\u80CC\u666F\u97F3\u4E50\u3002",
    },
    {"TAS",
        "",
        "english",
        "Tool-Assisted Speedrun\uFF08Supergaming\uFF09\\n\u4F7F\u7528\u7279\u6B8A\u5DE5\u5177\u5728\u4E0D\u7834\u574F\u6E38\u620F\u89C4\u5219\uFF08\u5141\u8BB8\u8D85\u8D8A\u4EBA\u7C7B\u64CD\u4F5C\uFF0C\u53EA\u662F\u5728\u7A0B\u5E8F\u5C42\u9762\u4E0D\u4F5C\u5F0A\uFF09\u8FDB\u884C\u7684\u6E38\u620F\u3002\\n\u4E00\u822C\u7528\u4E8E\u51B2\u51FB\u7406\u8BBA\u503C\u6216\u8005\u8FBE\u6210\u5404\u79CD\u6709\u8DA3\u7684\u76EE\u6807\u7528\u6765\u89C2\u8D4F\u3002\\nTechmino\u4E2D\u5185\u7F6E\u4E86\u975E\u5E38\u7B80\u5355\u7684TAS\u5DE5\u5177\u3002",
    },
    {"AFK",
        "",
        "english",
        "Away from keyboard\\n\u4E00\u6BB5\u65F6\u95F4\u4E0D\u63A5\u89E6\u952E\u76D8\uFF0C\u5C31\u662F\u4E0D\u73A9\u4E00\u6BB5\u65F6\u95F4\uFF0C\u53EF\u4EE5\u7F13\u89E3\u624B\u90E8\u75B2\u52B3\uFF0C\u4F11\u606F\u597D\u4E4B\u540E\u9A6C\u4E0A\u7834\u7EAA\u5F55\u4E5F\u662F\u53EF\u80FD\u7684\u3002",
    },
    {"Timing",
        "timing shiji fanji",
        "term",
        "Time\u4F5C\u52A8\u8BCD\u65F6\u7684\u52A8\u540D\u8BCD\u5F62\u5F0F\uFF0C\u610F\u4E3A\u6293\u65F6\u673A\u3002\u5728\u65B9\u5757\u4E2D\u5F80\u5F80\u6307\u6839\u636E\u53CC\u65B9\u5F62\u52BF\u9009\u62E9\u6253\u51FA\u653B\u51FB\u7684\u65F6\u673A\uFF0C\u548C\u8981\u4E0D\u8981\u6545\u610F\u5403\u4E0B\u5BF9\u624B\u7684\u653B\u51FB\u9632\u6B62\u62B5\u6D88\uFF0C\u7136\u540E\u518D\u628A\u81EA\u5DF1\u7684\u653B\u51FB\u6253\u8FC7\u53BB\u3002\u53EF\u4EE5\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u63D0\u9AD8\u5BF9\u6218\u7684\u4F18\u52BF\uFF0C\u4F46\u5BF9\u4E8E\u65B0\u4EBA\u6765\u8BF4\u8FDE\u81EA\u5DF1\u573A\u5730\u90FD\u770B\u4E0D\u660E\u767D\u8FD8\u770B\u5565\u5BF9\u9762\uFF0C\u6709\u65F6\u95F4\u5206\u6790\u5F62\u52BF\u4E0D\u5982\u63D0\u901F\u63D0\u6548\u6765\u5F97\u66F4\u597D\u3002",
    },
}
`,title$2="Techmino Online Dictionary",search$2="Search",lang_en={title:title$2,search:search$2},title$1="\u30C6\u30AF\u30DF\u30CE \u30AA\u30F3\u30E9\u30A4\u30F3\u8F9E\u66F8",search$1="\u30B5\u30FC\u30C1",lang_ja={title:title$1,search:search$1},title="Techmino \u5728\u7EBF\u8BCD\u5178",search="\u641C\u70B9\u4EC0\u4E48",lang_zh={title,search};var luaparse={exports:{}};(function(e,n){(function(t,o,r){var i=n&&!n.nodeType&&n,a=e&&!e.nodeType&&e,s=i&&a&&typeof commonjsGlobal=="object"&&commonjsGlobal,l=a&&a.exports===i&&i;s&&(s.global===s||s.window===s||s.self===s)&&(t=s),r(i&&a?l?a.exports:i:t[o]={})})(commonjsGlobal,"luaparse",function(t){t.version="0.3.1";var o,r,i,a,s,l=t.defaultOptions={wait:!1,comments:!0,scope:!1,locations:!1,ranges:!1,onCreateNode:null,onCreateScope:null,onDestroyScope:null,onLocalDeclaration:null,luaVersion:"5.1",encodingMode:"none"};function d(u,x){return x=x||0,u<128?String.fromCharCode(u):u<2048?String.fromCharCode(x|192|u>>6,x|128|u&63):u<65536?String.fromCharCode(x|224|u>>12,x|128|u>>6&63,x|128|u&63):u<1114112?String.fromCharCode(x|240|u>>18,x|128|u>>12&63,x|128|u>>6&63,x|128|u&63):null}function f(u,x){for(var M=u.toString(16);M.length<x;)M="0"+M;return M}function m(u){return function(x){var M=u.exec(x);if(!M)return x;L(null,I.invalidCodeUnit,f(M[0].charCodeAt(0),4).toUpperCase())}}var b={"pseudo-latin1":{fixup:m(/[^\x00-\xff]/),encodeByte:function(u){return u===null?"":String.fromCharCode(u)},encodeUTF8:function(u){return d(u)}},"x-user-defined":{fixup:m(/[^\x00-\x7f\uf780-\uf7ff]/),encodeByte:function(u){return u===null?"":u>=128?String.fromCharCode(u|63232):String.fromCharCode(u)},encodeUTF8:function(u){return d(u,63232)}},none:{discardStrings:!0,fixup:function(u){return u},encodeByte:function(u){return""},encodeUTF8:function(u){return""}}},C=1,g=2,S=4,w=8,v=16,P=32,z=64,A=128,E=256;t.tokenTypes={EOF:C,StringLiteral:g,Keyword:S,Identifier:w,NumericLiteral:v,Punctuator:P,BooleanLiteral:z,NilLiteral:A,VarargLiteral:E};var I=t.errors={unexpected:"unexpected %1 '%2' near '%3'",unexpectedEOF:"unexpected symbol near '<eof>'",expected:"'%1' expected near '%2'",expectedToken:"%1 expected near '%2'",unfinishedString:"unfinished string near '%1'",malformedNumber:"malformed number near '%1'",decimalEscapeTooLarge:"decimal escape too large near '%1'",invalidEscape:"invalid escape sequence near '%1'",hexadecimalDigitExpected:"hexadecimal digit expected near '%1'",braceExpected:"missing '%1' near '%2'",tooLargeCodepoint:"UTF-8 value too large near '%1'",unfinishedLongString:"unfinished long string (starting at line %1) near '%2'",unfinishedLongComment:"unfinished long comment (starting at line %1) near '%2'",ambiguousSyntax:"ambiguous syntax (function call x new statement) near '%1'",noLoopToBreak:"no loop to break near '%1'",labelAlreadyDefined:"label '%1' already defined on line %2",labelNotVisible:"no visible label '%1' for <goto>",gotoJumpInLocalScope:"<goto %1> jumps into the scope of local '%2'",cannotUseVararg:"cannot use '...' outside a vararg function near '%1'",invalidCodeUnit:"code unit U+%1 is not allowed in the current encoding mode"},y=t.ast={labelStatement:function(u){return{type:"LabelStatement",label:u}},breakStatement:function(){return{type:"BreakStatement"}},gotoStatement:function(u){return{type:"GotoStatement",label:u}},returnStatement:function(u){return{type:"ReturnStatement",arguments:u}},ifStatement:function(u){return{type:"IfStatement",clauses:u}},ifClause:function(u,x){return{type:"IfClause",condition:u,body:x}},elseifClause:function(u,x){return{type:"ElseifClause",condition:u,body:x}},elseClause:function(u){return{type:"ElseClause",body:u}},whileStatement:function(u,x){return{type:"WhileStatement",condition:u,body:x}},doStatement:function(u){return{type:"DoStatement",body:u}},repeatStatement:function(u,x){return{type:"RepeatStatement",condition:u,body:x}},localStatement:function(u,x){return{type:"LocalStatement",variables:u,init:x}},assignmentStatement:function(u,x){return{type:"AssignmentStatement",variables:u,init:x}},callStatement:function(u){return{type:"CallStatement",expression:u}},functionStatement:function(u,x,M,F){return{type:"FunctionDeclaration",identifier:u,isLocal:M,parameters:x,body:F}},forNumericStatement:function(u,x,M,F,re){return{type:"ForNumericStatement",variable:u,start:x,end:M,step:F,body:re}},forGenericStatement:function(u,x,M){return{type:"ForGenericStatement",variables:u,iterators:x,body:M}},chunk:function(u){return{type:"Chunk",body:u}},identifier:function(u){return{type:"Identifier",name:u}},literal:function(u,x,M){return u=u===g?"StringLiteral":u===v?"NumericLiteral":u===z?"BooleanLiteral":u===A?"NilLiteral":"VarargLiteral",{type:u,value:x,raw:M}},tableKey:function(u,x){return{type:"TableKey",key:u,value:x}},tableKeyString:function(u,x){return{type:"TableKeyString",key:u,value:x}},tableValue:function(u){return{type:"TableValue",value:u}},tableConstructorExpression:function(u){return{type:"TableConstructorExpression",fields:u}},binaryExpression:function(u,x,M){var F=u==="and"||u==="or"?"LogicalExpression":"BinaryExpression";return{type:F,operator:u,left:x,right:M}},unaryExpression:function(u,x){return{type:"UnaryExpression",operator:u,argument:x}},memberExpression:function(u,x,M){return{type:"MemberExpression",indexer:x,identifier:M,base:u}},indexExpression:function(u,x){return{type:"IndexExpression",base:u,index:x}},callExpression:function(u,x){return{type:"CallExpression",base:u,arguments:x}},tableCallExpression:function(u,x){return{type:"TableCallExpression",base:u,arguments:x}},stringCallExpression:function(u,x){return{type:"StringCallExpression",base:u,argument:x}},comment:function(u,x){return{type:"Comment",value:u,raw:x}}};function k(u){if(Ee){var x=Me.pop();x.complete(),x.bless(u)}return r.onCreateNode&&r.onCreateNode(u),u}var _=Array.prototype.slice,O=function(u,x){for(var M=0,F=u.length;M<F;++M)if(u[M]===x)return M;return-1};Array.prototype.indexOf&&(O=function(u,x){return u.indexOf(x)});function Y(u,x,M){for(var F=0,re=u.length;F<re;++F)if(u[F][x]===M)return F;return-1}function B(u){var x=_.call(arguments,1);return u=u.replace(/%(\d)/g,function(M,F){return""+x[F-1]||""}),u}var ee=function(u){for(var x=_.call(arguments,1),M,F,re=0,Ce=x.length;re<Ce;++re){M=x[re];for(F in M)Object.prototype.hasOwnProperty.call(M,F)&&(u[F]=M[F])}return u};Object.assign&&(ee=Object.assign),t.SyntaxError=SyntaxError;function N(u){return Object.create?Object.create(u,{line:{writable:!0,value:u.line},index:{writable:!0,value:u.index},column:{writable:!0,value:u.column}}):u}function L(u){var x=B.apply(null,_.call(arguments,1)),M,F;throw u===null||typeof u.line>"u"?(F=$-fe+1,M=N(new SyntaxError(B("[%1:%2] %3",we,F,x))),M.index=$,M.line=we,M.column=F):(F=u.range[0]-u.lineStart,M=N(new SyntaxError(B("[%1:%2] %3",u.line,F,x))),M.line=u.line,M.index=u.range[0],M.column=F),M}function te(u){var x=o.slice(u.range[0],u.range[1]);return x||u.value}function j(u,x){L(x,I.expectedToken,u,te(x))}function ne(u){var x=te(Te);if(typeof u.type<"u"){var M;switch(u.type){case g:M="string";break;case S:M="keyword";break;case w:M="identifier";break;case v:M="number";break;case P:M="symbol";break;case z:M="boolean";break;case A:return L(u,I.unexpected,"symbol","nil",x);case C:return L(u,I.unexpectedEOF)}return L(u,I.unexpected,M,te(u),x)}return L(u,I.unexpected,"symbol",u,x)}var $,W,pe,Te,Be,xe,we,fe;t.lex=ue;function ue(){for(he();o.charCodeAt($)===45&&o.charCodeAt($+1)===45;)J(),he();if($>=i)return{type:C,value:"<eof>",line:we,lineStart:fe,range:[$,$]};var u=o.charCodeAt($),x=o.charCodeAt($+1);if(xe=$,He(u))return Le();switch(u){case 39:case 34:return T();case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return H();case 46:return ge(x)?H():x===46?o.charCodeAt($+2)===46?We():Ae(".."):Ae(".");case 61:return Ae(x===61?"==":"=");case 62:return a.bitwiseOperators&&x===62?Ae(">>"):Ae(x===61?">=":">");case 60:return a.bitwiseOperators&&x===60?Ae("<<"):Ae(x===61?"<=":"<");case 126:if(x===61)return Ae("~=");if(!a.bitwiseOperators)break;return Ae("~");case 58:return a.labels&&x===58?Ae("::"):Ae(":");case 91:return x===91||x===61?D():Ae("[");case 47:return a.integerDivision&&x===47?Ae("//"):Ae("/");case 38:case 124:if(!a.bitwiseOperators)break;case 42:case 94:case 37:case 44:case 123:case 125:case 93:case 40:case 41:case 59:case 35:case 45:case 43:return Ae(o.charAt($))}return ne(o.charAt($))}function je(){var u=o.charCodeAt($),x=o.charCodeAt($+1);return ye(u)?(u===10&&x===13&&++$,u===13&&x===10&&++$,++we,fe=++$,!0):!1}function he(){for(;$<i;){var u=o.charCodeAt($);if(me(u))++$;else if(!je())break}}function Le(){for(var u,x;qe(o.charCodeAt(++$)););return u=s.fixup(o.slice(xe,$)),Ye(u)?x=S:u==="true"||u==="false"?(x=z,u=u==="true"):u==="nil"?(x=A,u=null):x=w,{type:x,value:u,line:we,lineStart:fe,range:[xe,$]}}function Ae(u){return $+=u.length,{type:P,value:u,line:we,lineStart:fe,range:[xe,$]}}function We(){return $+=3,{type:E,value:"...",line:we,lineStart:fe,range:[xe,$]}}function T(){for(var u=o.charCodeAt($++),x=we,M=fe,F=$,re=s.discardStrings?null:"",Ce;Ce=o.charCodeAt($++),u!==Ce;)if(($>i||ye(Ce))&&(re+=o.slice(F,$-1),L(null,I.unfinishedString,o.slice(xe,$-1))),Ce===92){if(!s.discardStrings){var $e=o.slice(F,$-1);re+=s.fixup($e)}var _e=Z();s.discardStrings||(re+=_e),F=$}return s.discardStrings||(re+=s.encodeByte(null),re+=s.fixup(o.slice(F,$-1))),{type:g,value:re,line:x,lineStart:M,lastLine:we,lastLineStart:fe,range:[xe,$]}}function D(){var u=we,x=fe,M=le(!1);return M===!1&&L(W,I.expected,"[",te(W)),{type:g,value:s.discardStrings?null:s.fixup(M),line:u,lineStart:x,lastLine:we,lastLineStart:fe,range:[xe,$]}}function H(){var u=o.charAt($),x=o.charAt($+1),M=u==="0"&&"xX".indexOf(x||null)>=0?Q():ie(),F=q(),re=U();return re&&(F||M.hasFractionPart)&&L(null,I.malformedNumber,o.slice(xe,$)),{type:v,value:M.value,line:we,lineStart:fe,range:[xe,$]}}function q(){if(!!a.imaginaryNumbers)return"iI".indexOf(o.charAt($)||null)>=0?(++$,!0):!1}function U(){if(!!a.integerSuffixes){if("uU".indexOf(o.charAt($)||null)>=0)if(++$,"lL".indexOf(o.charAt($)||null)>=0){if(++$,"lL".indexOf(o.charAt($)||null)>=0)return++$,"ULL";L(null,I.malformedNumber,o.slice(xe,$))}else L(null,I.malformedNumber,o.slice(xe,$));else if("lL".indexOf(o.charAt($)||null)>=0){if(++$,"lL".indexOf(o.charAt($)||null)>=0)return++$,"LL";L(null,I.malformedNumber,o.slice(xe,$))}}}function Q(){var u=0,x=1,M=1,F,re,Ce,$e;for($e=$+=2,be(o.charCodeAt($))||L(null,I.malformedNumber,o.slice(xe,$));be(o.charCodeAt($));)++$;F=parseInt(o.slice($e,$),16);var _e=!1;if(o.charAt($)==="."){for(_e=!0,re=++$;be(o.charCodeAt($));)++$;u=o.slice(re,$),u=re===$?0:parseInt(u,16)/Math.pow(16,$-re)}var sn=!1;if("pP".indexOf(o.charAt($)||null)>=0){for(sn=!0,++$,"+-".indexOf(o.charAt($)||null)>=0&&(M=o.charAt($++)==="+"?1:-1),Ce=$,ge(o.charCodeAt($))||L(null,I.malformedNumber,o.slice(xe,$));ge(o.charCodeAt($));)++$;x=o.slice(Ce,$),x=Math.pow(2,x*M)}return{value:(F+u)*x,hasFractionPart:_e||sn}}function ie(){for(;ge(o.charCodeAt($));)++$;var u=!1;if(o.charAt($)===".")for(u=!0,++$;ge(o.charCodeAt($));)++$;var x=!1;if("eE".indexOf(o.charAt($)||null)>=0)for(x=!0,++$,"+-".indexOf(o.charAt($)||null)>=0&&++$,ge(o.charCodeAt($))||L(null,I.malformedNumber,o.slice(xe,$));ge(o.charCodeAt($));)++$;return{value:parseFloat(o.slice(xe,$)),hasFractionPart:u||x}}function V(){var u=$++;for(o.charAt($++)!=="{"&&L(null,I.braceExpected,"{","\\"+o.slice(u,$)),be(o.charCodeAt($))||L(null,I.hexadecimalDigitExpected,"\\"+o.slice(u,$));o.charCodeAt($)===48;)++$;for(var x=$;be(o.charCodeAt($));)++$,$-x>6&&L(null,I.tooLargeCodepoint,"\\"+o.slice(u,$));var M=o.charAt($++);M!=="}"&&(M==='"'||M==="'"?L(null,I.braceExpected,"}","\\"+o.slice(u,$--)):L(null,I.hexadecimalDigitExpected,"\\"+o.slice(u,$)));var F=parseInt(o.slice(x,$-1)||"0",16),re="\\"+o.slice(u,$);return F>1114111&&L(null,I.tooLargeCodepoint,re),s.encodeUTF8(F,re)}function Z(){var u=$;switch(o.charAt($)){case"a":return++$,"\x07";case"n":return++$,`
`;case"r":return++$,"\r";case"t":return++$,"	";case"v":return++$,"\v";case"b":return++$,"\b";case"f":return++$,"\f";case"\r":case`
`:return je(),`
`;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;ge(o.charCodeAt($))&&$-u<3;)++$;var x=o.slice(u,$),M=parseInt(x,10);return M>255&&L(null,I.decimalEscapeTooLarge,"\\"+M),s.encodeByte(M,"\\"+x);case"z":if(a.skipWhitespaceEscape)return++$,he(),"";break;case"x":if(a.hexEscapes){if(be(o.charCodeAt($+1))&&be(o.charCodeAt($+2)))return $+=3,s.encodeByte(parseInt(o.slice(u+1,$),16),"\\"+o.slice(u,$));L(null,I.hexadecimalDigitExpected,"\\"+o.slice(u,$+2))}break;case"u":if(a.unicodeEscapes)return V();break;case"\\":case'"':case"'":return o.charAt($++)}return a.strictEscapes&&L(null,I.invalidEscape,"\\"+o.slice(u,$+1)),o.charAt($++)}function J(){xe=$,$+=2;var u=o.charAt($),x="",M=!1,F=$,re=fe,Ce=we;if(u==="["&&(x=le(!0),x===!1?x=u:M=!0),!M){for(;$<i&&!ye(o.charCodeAt($));)++$;r.comments&&(x=o.slice(F,$))}if(r.comments){var $e=y.comment(x,o.slice(xe,$));r.locations&&($e.loc={start:{line:Ce,column:xe-re},end:{line:we,column:$-fe}}),r.ranges&&($e.range=[xe,$]),r.onCreateNode&&r.onCreateNode($e),Be.push($e)}}function le(u){var x=0,M="",F=!1,re,Ce,$e=we;for(++$;o.charAt($+x)==="=";)++x;if(o.charAt($+x)!=="[")return!1;for($+=x+1,ye(o.charCodeAt($))&&je(),Ce=$;$<i;){for(;ye(o.charCodeAt($));)je();if(re=o.charAt($++),re==="]"){F=!0;for(var _e=0;_e<x;++_e)o.charAt($+_e)!=="="&&(F=!1);o.charAt($+x)!=="]"&&(F=!1)}if(F)return M+=o.slice(Ce,$-1),$+=x+1,M}L(null,u?I.unfinishedLongComment:I.unfinishedLongString,$e,"<eof>")}function X(){pe=W,W=Te,Te=ue()}function oe(u){return u===W.value?(X(),!0):!1}function se(u){u===W.value?X():L(W,I.expected,u,te(W))}function me(u){return u===9||u===32||u===11||u===12}function ye(u){return u===10||u===13}function ge(u){return u>=48&&u<=57}function be(u){return u>=48&&u<=57||u>=97&&u<=102||u>=65&&u<=70}function He(u){return!!(u>=65&&u<=90||u>=97&&u<=122||u===95||a.extendedIdentifiers&&u>=128)}function qe(u){return!!(u>=65&&u<=90||u>=97&&u<=122||u===95||u>=48&&u<=57||a.extendedIdentifiers&&u>=128)}function Ye(u){switch(u.length){case 2:return u==="do"||u==="if"||u==="in"||u==="or";case 3:return u==="and"||u==="end"||u==="for"||u==="not";case 4:return u==="else"||u==="then"?!0:a.labels&&!a.contextualGoto?u==="goto":!1;case 5:return u==="break"||u==="local"||u==="until"||u==="while";case 6:return u==="elseif"||u==="repeat"||u==="return";case 8:return u==="function"}return!1}function Ve(u){return P===u.type?"#-~".indexOf(u.value)>=0:S===u.type?u.value==="not":!1}function Ze(u){if(C===u.type)return!0;if(S!==u.type)return!1;switch(u.value){case"else":case"elseif":case"end":case"until":return!0;default:return!1}}var K,ae,ce;function ve(){var u=K[ae++].slice();K.push(u),r.onCreateScope&&r.onCreateScope()}function ke(){K.pop(),--ae,r.onDestroyScope&&r.onDestroyScope()}function Oe(u){r.onLocalDeclaration&&r.onLocalDeclaration(u),O(K[ae],u)===-1&&K[ae].push(u)}function ze(u){Oe(u.name),Pe(u,!0)}function Pe(u,x){!x&&Y(ce,"name",u.name)===-1&&ce.push(u),u.isLocal=x}function Ke(u){return O(K[ae],u)!==-1}var Me=[],Ee;function Ue(){return new rn(W)}function rn(u){r.locations&&(this.loc={start:{line:u.line,column:u.range[0]-u.lineStart},end:{line:0,column:0}}),r.ranges&&(this.range=[u.range[0],0])}rn.prototype.complete=function(){r.locations&&(this.loc.end.line=pe.lastLine||pe.line,this.loc.end.column=pe.range[1]-(pe.lastLineStart||pe.lineStart)),r.ranges&&(this.range[1]=pe.range[1])},rn.prototype.bless=function(u){if(this.loc){var x=this.loc;u.loc={start:{line:x.start.line,column:x.start.column},end:{line:x.end.line,column:x.end.column}}}this.range&&(u.range=[this.range[0],this.range[1]])};function en(){Ee&&Me.push(Ue())}function Fe(u){Ee&&Me.push(u)}function Ge(){this.scopes=[],this.pendingGotos=[]}Ge.prototype.isInLoop=function(){for(var u=this.scopes.length;u-- >0;)if(this.scopes[u].isLoop)return!0;return!1},Ge.prototype.pushScope=function(u){var x={labels:{},locals:[],deferredGotos:[],isLoop:!!u};this.scopes.push(x)},Ge.prototype.popScope=function(){for(var u=0;u<this.pendingGotos.length;++u){var x=this.pendingGotos[u];x.maxDepth>=this.scopes.length&&--x.maxDepth<=0&&L(x.token,I.labelNotVisible,x.target)}this.scopes.pop()},Ge.prototype.addGoto=function(u,x){for(var M=[],F=0;F<this.scopes.length;++F){var re=this.scopes[F];if(M.push(re.locals.length),Object.prototype.hasOwnProperty.call(re.labels,u))return}this.pendingGotos.push({maxDepth:this.scopes.length,target:u,token:x,localCounts:M})},Ge.prototype.addLabel=function(u,x){var M=this.currentScope();if(Object.prototype.hasOwnProperty.call(M.labels,u))L(x,I.labelAlreadyDefined,u,M.labels[u].line);else{for(var F=[],re=0;re<this.pendingGotos.length;++re){var Ce=this.pendingGotos[re];if(Ce.maxDepth>=this.scopes.length&&Ce.target===u){Ce.localCounts[this.scopes.length-1]<M.locals.length&&M.deferredGotos.push(Ce);continue}F.push(Ce)}this.pendingGotos=F}M.labels[u]={localCount:M.locals.length,line:x.line}},Ge.prototype.addLocal=function(u,x){this.currentScope().locals.push({name:u,token:x})},Ge.prototype.currentScope=function(){return this.scopes[this.scopes.length-1]},Ge.prototype.raiseDeferredErrors=function(){for(var u=this.currentScope(),x=u.deferredGotos,M=0;M<x.length;++M){var F=x[M];L(F.token,I.gotoJumpInLocalScope,F.target,u.locals[F.localCounts[this.scopes.length-1]].name)}};function R(){this.level=0,this.loopLevels=[]}R.prototype.isInLoop=function(){return!!this.loopLevels.length},R.prototype.pushScope=function(u){++this.level,u&&this.loopLevels.push(this.level)},R.prototype.popScope=function(){var u=this.loopLevels,x=u.length;x&&u[x-1]===this.level&&u.pop(),--this.level},R.prototype.addGoto=R.prototype.addLabel=function(){throw new Error("This should never happen")},R.prototype.addLocal=R.prototype.raiseDeferredErrors=function(){};function G(){return a.labels?new Ge:new R}function de(){X(),en(),r.scope&&ve();var u=G();u.allowVararg=!0,u.pushScope();var x=Se(u);return u.popScope(),r.scope&&ke(),C!==W.type&&ne(W),Ee&&!x.length&&(pe=W),k(y.chunk(x))}function Se(u){for(var x=[],M;!Ze(W);){if(W.value==="return"||!a.relaxedBreak&&W.value==="break"){x.push(Re(u));break}M=Re(u),oe(";"),M&&x.push(M)}return x}function Re(u){if(en(),P===W.type&&oe("::"))return De(u);if(a.emptyStatement&&oe(";")){Ee&&Me.pop();return}if(u.raiseDeferredErrors(),S===W.type)switch(W.value){case"local":return X(),Cn(u);case"if":return X(),vn(u);case"return":return X(),ln(u);case"function":X();var x=wn();return cn(x);case"while":return X(),nn(u);case"for":return X(),yn(u);case"repeat":return X(),tn(u);case"break":return X(),u.isInLoop()||L(W,I.noLoopToBreak,W.value),Xe();case"do":return X(),Qe(u);case"goto":return X(),Je(u)}return a.contextualGoto&&W.type===w&&W.value==="goto"&&Te.type===w&&Te.value!=="goto"?(X(),Je(u)):(Ee&&Me.pop(),xn(u))}function De(u){var x=W,M=Ne();return r.scope&&(Oe("::"+x.value+"::"),Pe(M,!0)),se("::"),u.addLabel(x.value,x),k(y.labelStatement(M))}function Xe(){return k(y.breakStatement())}function Je(u){var x=W.value,M=pe,F=Ne();return u.addGoto(x,M),k(y.gotoStatement(F))}function Qe(u){r.scope&&ve(),u.pushScope();var x=Se(u);return u.popScope(),r.scope&&ke(),se("end"),k(y.doStatement(x))}function nn(u){var x=Ie(u);se("do"),r.scope&&ve(),u.pushScope(!0);var M=Se(u);return u.popScope(),r.scope&&ke(),se("end"),k(y.whileStatement(x,M))}function tn(u){r.scope&&ve(),u.pushScope(!0);var x=Se(u);se("until"),u.raiseDeferredErrors();var M=Ie(u);return u.popScope(),r.scope&&ke(),k(y.repeatStatement(M,x))}function ln(u){var x=[];if(W.value!=="end"){var M=an(u);for(M!=null&&x.push(M);oe(",");)M=Ie(u),x.push(M);oe(";")}return k(y.returnStatement(x))}function vn(u){var x=[],M,F,re;for(Ee&&(re=Me[Me.length-1],Me.push(re)),M=Ie(u),se("then"),r.scope&&ve(),u.pushScope(),F=Se(u),u.popScope(),r.scope&&ke(),x.push(k(y.ifClause(M,F))),Ee&&(re=Ue());oe("elseif");)Fe(re),M=Ie(u),se("then"),r.scope&&ve(),u.pushScope(),F=Se(u),u.popScope(),r.scope&&ke(),x.push(k(y.elseifClause(M,F))),Ee&&(re=Ue());return oe("else")&&(Ee&&(re=new rn(pe),Me.push(re)),r.scope&&ve(),u.pushScope(),F=Se(u),u.popScope(),r.scope&&ke(),x.push(k(y.elseClause(F)))),se("end"),k(y.ifStatement(x))}function yn(u){var x=Ne(),M;if(r.scope&&(ve(),ze(x)),oe("=")){var F=Ie(u);se(",");var re=Ie(u),Ce=oe(",")?Ie(u):null;return se("do"),u.pushScope(!0),M=Se(u),u.popScope(),se("end"),r.scope&&ke(),k(y.forNumericStatement(x,F,re,Ce,M))}else{for(var $e=[x];oe(",");)x=Ne(),r.scope&&ze(x),$e.push(x);se("in");var _e=[];do{var sn=Ie(u);_e.push(sn)}while(oe(","));return se("do"),u.pushScope(!0),M=Se(u),u.popScope(),se("end"),r.scope&&ke(),k(y.forGenericStatement($e,_e,M))}}function Cn(u){var x,M=pe;if(w===W.type){var F=[],re=[];do x=Ne(),F.push(x),u.addLocal(x.name,M);while(oe(","));if(oe("="))do{var Ce=Ie(u);re.push(Ce)}while(oe(","));if(r.scope)for(var $e=0,_e=F.length;$e<_e;++$e)ze(F[$e]);return k(y.localStatement(F,re))}if(oe("function"))return x=Ne(),u.addLocal(x.name,M),r.scope&&(ze(x),ve()),cn(x,!0);j("<name>",W)}function xn(u){var x,M,F,re,Ce,$e=[];Ee&&(M=Ue());do{if(Ee&&(x=Ue()),w===W.type)Ce=W.value,re=Ne(),r.scope&&Pe(re,Ke(Ce)),F=!0;else if(W.value==="(")X(),re=Ie(u),se(")"),F=!1;else return ne(W);e:for(;;){switch(g===W.type?'"':W.value){case".":case"[":F=!0;break;case":":case"(":case"{":case'"':F=null;break;default:break e}re=hn(re,x,u)}if($e.push(re),W.value!==",")break;if(!F)return ne(W);X()}while(!0);if($e.length===1&&F===null)return Fe(x),k(y.callStatement($e[0]));if(!F)return ne(W);se("=");var _e=[];do _e.push(Ie(u));while(oe(","));return Fe(M),k(y.assignmentStatement($e,_e))}function Ne(){en();var u=W.value;return w!==W.type&&j("<name>",W),X(),k(y.identifier(u))}function cn(u,x){var M=G();M.pushScope();var F=[];if(se("("),!oe(")"))for(;;){if(w===W.type){var re=Ne();if(r.scope&&ze(re),F.push(re),oe(","))continue}else E===W.type?(M.allowVararg=!0,F.push(fn(M))):j("<name> or '...'",W);se(")");break}var Ce=Se(M);return M.popScope(),se("end"),r.scope&&ke(),x=x||!1,k(y.functionStatement(u,F,x,Ce))}function wn(){var u,x,M;for(Ee&&(M=Ue()),u=Ne(),r.scope&&(Pe(u,Ke(u.name)),ve());oe(".");)Fe(M),x=Ne(),u=k(y.memberExpression(u,".",x));return oe(":")&&(Fe(M),x=Ne(),u=k(y.memberExpression(u,":",x)),r.scope&&Oe("self")),u}function pn(u){for(var x=[],M,F;;){if(en(),P===W.type&&oe("["))M=Ie(u),se("]"),se("="),F=Ie(u),x.push(k(y.tableKey(M,F)));else if(w===W.type)Te.value==="="?(M=Ne(),X(),F=Ie(u),x.push(k(y.tableKeyString(M,F)))):(F=Ie(u),x.push(k(y.tableValue(F))));else{if((F=an(u))==null){Me.pop();break}x.push(k(y.tableValue(F)))}if(",;".indexOf(W.value)>=0){X();continue}break}return se("}"),k(y.tableConstructorExpression(x))}function an(u){var x=dn(0,u);return x}function Ie(u){var x=an(u);if(x==null)j("<expression>",W);else return x}function Sn(u){var x=u.charCodeAt(0),M=u.length;if(M===1)switch(x){case 94:return 12;case 42:case 47:case 37:return 10;case 43:case 45:return 9;case 38:return 6;case 126:return 5;case 124:return 4;case 60:case 62:return 3}else if(M===2)switch(x){case 47:return 10;case 46:return 8;case 60:case 62:return u==="<<"||u===">>"?7:3;case 61:case 126:return 3;case 111:return 1}else if(x===97&&u==="and")return 2;return 0}function dn(u,x){var M=W.value,F,re;if(Ee&&(re=Ue()),Ve(W)){en(),X();var Ce=dn(10,x);Ce==null&&j("<expression>",W),F=k(y.unaryExpression(M,Ce))}if(F==null&&(F=fn(x),F==null&&(F=Tn(x))),F==null)return null;for(var $e;M=W.value,$e=P===W.type||S===W.type?Sn(M):0,!($e===0||$e<=u);){(M==="^"||M==="..")&&--$e,X();var _e=dn($e,x);_e==null&&j("<expression>",W),Ee&&Me.push(re),F=k(y.binaryExpression(M,F,_e))}return F}function hn(u,x,M){var F,re;if(P===W.type)switch(W.value){case"[":return Fe(x),X(),F=Ie(M),se("]"),k(y.indexExpression(u,F));case".":return Fe(x),X(),re=Ne(),k(y.memberExpression(u,".",re));case":":return Fe(x),X(),re=Ne(),u=k(y.memberExpression(u,":",re)),Fe(x),un(u,M);case"(":case"{":return Fe(x),un(u,M)}else if(g===W.type)return Fe(x),un(u,M);return null}function Tn(u){var x,M,F;if(Ee&&(F=Ue()),w===W.type)M=W.value,x=Ne(),r.scope&&Pe(x,Ke(M));else if(oe("("))x=Ie(u),se(")");else return null;for(;;){var re=hn(x,F,u);if(re===null)break;x=re}return x}function un(u,x){if(P===W.type)switch(W.value){case"(":a.emptyStatement||W.line!==pe.line&&L(null,I.ambiguousSyntax,W.value),X();var M=[],F=an(x);for(F!=null&&M.push(F);oe(",");)F=Ie(x),M.push(F);return se(")"),k(y.callExpression(u,M));case"{":en(),X();var re=pn(x);return k(y.tableCallExpression(u,re))}else if(g===W.type)return k(y.stringCallExpression(u,fn(x)));j("function arguments",W)}function fn(u){var x=g|v|z|A|E,M=W.value,F=W.type,re;if(Ee&&(re=Ue()),F===E&&!u.allowVararg&&L(W,I.cannotUseVararg,W.value),F&x){Fe(re);var Ce=o.slice(W.range[0],W.range[1]);return X(),k(y.literal(F,M,Ce))}else{if(S===F&&M==="function")return Fe(re),X(),r.scope&&ve(),cn(null);if(oe("{"))return Fe(re),pn(u)}}t.parse=kn;var mn={"5.1":{},"5.2":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,relaxedBreak:!0},"5.3":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,bitwiseOperators:!0,integerDivision:!0,relaxedBreak:!0},LuaJIT:{labels:!0,contextualGoto:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,imaginaryNumbers:!0,integerSuffixes:!0}};function kn(u,x){if(typeof x>"u"&&typeof u=="object"&&(x=u,u=void 0),x||(x={}),o=u||"",r=ee({},l,x),$=0,we=1,fe=0,i=o.length,K=[[]],ae=0,ce=[],Me=[],!Object.prototype.hasOwnProperty.call(mn,r.luaVersion))throw new Error(B("Lua version '%1' not supported",r.luaVersion));if(a=ee({},mn[r.luaVersion]),r.extendedIdentifiers!==void 0&&(a.extendedIdentifiers=!!r.extendedIdentifiers),!Object.prototype.hasOwnProperty.call(b,r.encodingMode))throw new Error(B("Encoding mode '%1' not supported",r.encodingMode));return s=b[r.encodingMode],r.comments&&(Be=[]),r.wait?t:bn()}t.write=gn;function gn(u){return o+=String(u),i=o.length,t}t.end=bn;function bn(u){typeof u<"u"&&gn(u),o&&o.substr(0,2)==="#!"&&(o=o.replace(/^.*/,function(M){return M.replace(/./g," ")})),i=o.length,Ee=r.locations||r.ranges,Te=ue();var x=de();if(r.comments&&(x.comments=Be),r.scope&&(x.globals=ce),Me.length>0)throw new Error("Location tracking failed. This is most likely a bug in luaparse");return x}})})(luaparse,luaparse.exports);function preg_replace_callback(e,n,t){return[...e.matchAll(n)].forEach(o=>{e=e.replace(o[0],t(o))}),e}function processRaw(e,n=!0){if(!e)return null;let t=preg_replace_callback(e.slice(1,-1),/\\(\d+)/g,o=>String.fromCharCode(o[1]));return n&&(t[0]!=='"'&&(t='"'+t),t[t.length-1]!=='"'&&(t=t+'"')),t}function parse(code){const items=new Array,variables={FNNS:!1,"CHAR.mino.T":"123"},ast=luaparse.exports.parse(code);return ast.body.forEach(chunk=>{switch(chunk.type){case"LocalStatement":chunk.variables.forEach(function({name:e},n){const t=chunk.init[n];variables[e]=processRaw(t.raw)});break;case"ReturnStatement":chunk.arguments.forEach(chunk=>{switch(chunk.type){case"TableConstructorExpression":let parseTable=function(chunk){const temp=new Array;function parseLogic(expression){const logicCodeTemp=new Array;(function e(n){function t(o){switch(o.type){case"LogicalExpression":e(o);break;case"Identifier":logicCodeTemp.push(variables[o.name]);break;case"StringLiteral":logicCodeTemp.push(processRaw(o.raw));break;default:throw new Error(`Unknown type: ${o.type}`)}}switch(t(n.left),n.operator){case"and":logicCodeTemp.push("&&");break;case"or":logicCodeTemp.push("||");break;default:throw new Error(`Unknown operator: ${n.operator}`)}t(n.right)})(expression);const code="() => "+logicCodeTemp.join(" ")+";",result=eval(code)();temp.push(result)}function processBinary(e){const n=new Array;(function o(r){function i(s){const l=new Array;(function f(m){function b(C){switch(C.type){case"BinaryExpression":o(C);break;case"MemberExpression":f(C);break;case"Identifier":l.push(C.name);break;case"StringLiteral":l.push(processRaw(C.raw));break;default:throw new Error(`Unknown type: ${C.type}`)}}b(m.base),b(m.identifier)})(s);const d=l.join(".");n.push(variables[d])}function a(s){switch(s.type){case"BinaryExpression":o(s);break;case"MemberExpression":i(s);break;case"Identifier":n.push(variables[s.name]);break;case"StringLiteral":n.push(processRaw(s.raw));break;default:throw new Error(`Unknown type: ${s.type}`)}}a(r.left),a(r.right)})(e);const t=n.join("");temp.push(t)}chunk.fields.forEach(e=>{switch(e.value.type){case"TableConstructorExpression":parseTable(e.value);break;case"StringLiteral":temp.push(processRaw(e.value.raw));break;case"LogicalExpression":parseLogic(e.value);break;case"BinaryExpression":processBinary(e.value);break;default:throw new Error("Unknown type: "+e.value.type)}}),items.push(temp)};parseTable(chunk);break;default:throw new Error(`Unknown type: ${chunk.type}`)}});break;default:throw new Error(`Unknown type: ${chunk.type}`)}}),items.filter(e=>e.length>0).map(e=>({title:processRaw(e[0],!1),tags:processRaw(e[1],!1),category:processRaw(e[2],!1),content:processRaw(e[3],!1),link:processRaw(e[4],!1)}))}const _hoisted_1$3={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_hoisted_2$3=createBaseVNode("path",{opacity:".3",d:"M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56c-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4a7.987 7.987 0 0 0 4.33 3.56A15.65 15.65 0 0 1 8.03 16H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8a8.03 8.03 0 0 0-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4A8.03 8.03 0 0 0 18.92 16h-2.95a15.65 15.65 0 0 1-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z",fill:"currentColor"},null,-1),_hoisted_3$3=createBaseVNode("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",fill:"currentColor"},null,-1),_hoisted_4=[_hoisted_2$3,_hoisted_3$3],LanguageTwotone=defineComponent({name:"LanguageTwotone",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1$3,_hoisted_4)}}),_hoisted_1$2={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},_hoisted_2$2=createBaseVNode("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zM4.02 16.394l1.338.446L7 19.303v1.283a1 1 0 0 0 .293.707L10 24v2.377a11.994 11.994 0 0 1-5.98-9.983zM16 28a11.968 11.968 0 0 1-2.572-.285L14 26l1.805-4.512a1 1 0 0 0-.097-.926l-1.411-2.117a1 1 0 0 0-.832-.445h-4.93l-1.248-1.873L9.414 14H11v2h2v-2.734l3.868-6.77l-1.736-.992L14.277 7h-2.742L10.45 5.371A11.861 11.861 0 0 1 20 4.7V8a1 1 0 0 0 1 1h1.465a1 1 0 0 0 .832-.445l.877-1.316A12.033 12.033 0 0 1 26.894 11H22.82a1 1 0 0 0-.98.804l-.723 4.47a1 1 0 0 0 .54 1.055L25 19l.685 4.056A11.98 11.98 0 0 1 16 28z",fill:"currentColor"},null,-1),_hoisted_3$2=[_hoisted_2$2],EarthFilled=defineComponent({name:"EarthFilled",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1$2,_hoisted_3$2)}}),_hoisted_1$1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_hoisted_2$1=createBaseVNode("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[createBaseVNode("path",{d:"M4 6h16"}),createBaseVNode("path",{d:"M4 12h16"}),createBaseVNode("path",{d:"M4 18h16"})],-1),_hoisted_3$1=[_hoisted_2$1],Menu2=defineComponent({name:"Menu2",render:function e(n,t){return openBlock(),createElementBlock("svg",_hoisted_1$1,_hoisted_3$1)}}),isMobile=(()=>{const e=ref();function n(){e.value=screen.width<640}return n(),window.addEventListener("resize",n),e})(),_hoisted_1=createTextVNode("\u5236\u4F5C:\xA0"),_hoisted_2=createTextVNode("\u6E23\u6E23120"),_hoisted_3=createTextVNode(" Github "),_sfc_main=defineComponent({__name:"App",setup(e){const n=ref("zh"),t=ref(),o=useOsTheme(),r=ref();watch(r,()=>{a.value=!1});const i=ref(!0),a=ref(!0),s=computed(()=>o.value==="dark"?darkTheme:null),l=computed(()=>t.value?(g=>(g.content=g.content.replaceAll("\\t","&#09;").replaceAll("\\n","<br>"),g))(t.value):null),d=computed(()=>{const S={en:dict_en,ja:dict_ja,zh:dict_zh}[n.value];if(!S)throw new Error;return parse(S)}),f=computed(()=>{const g={};return d.value.filter(w=>{var v,P;return!w||!r.value?!0:((v=w.title)==null?void 0:v.match(r.value))||((P=w.tags)==null?void 0:P.split(" ").includes(r.value))}).forEach(w=>{var P;const v=(P=w.category)!=null?P:"unknown";g[v]||(g[v]=[]),g[v].push(w)}),g}),m=computed(()=>[{label:"English",key:"en",disabled:n.value==="en"},{label:"\u65E5\u672C\u8A9E",key:"ja",disabled:n.value==="ja"},{label:"\u7B80\u4F53\u4E2D\u6587",key:"zh",disabled:n.value==="zh"}]);function b(g){t.value=null,n.value=g}const C=computed(()=>{const S={en:lang_en,ja:lang_ja,zh:lang_zh}[n.value];if(!S)throw new Error;return S});return(g,S)=>{const w=__unplugin_components_0,v=__unplugin_components_1,P=__unplugin_components_2,z=__unplugin_components_3,A=__unplugin_components_4,E=__unplugin_components_5,I=__unplugin_components_6,y=NIcon,k=__unplugin_components_8,_=NH1,O=__unplugin_components_10,Y=NH2,B=__unplugin_components_12,ee=__unplugin_components_13,N=__unplugin_components_14,L=__unplugin_components_15,te=__unplugin_components_16,j=__unplugin_components_17;return openBlock(),createBlock(j,{theme:unref(s),class:"h-full"},{default:withCtx(()=>[createVNode(te,{class:"h-full","has-sider":""},{default:withCtx(()=>[unref(isMobile)?(openBlock(),createBlock(I,{key:0,collapsed:i.value,"collapsed-width":0,"show-collapsed-content":!1,"collapse-mode":"width"},{default:withCtx(()=>[createVNode(E,{class:"p-10"},{default:withCtx(()=>[createVNode(w,{value:r.value,"onUpdate:value":S[0]||(S[0]=ne=>r.value=ne),placeholder:unref(C).search,clearable:""},null,8,["value","placeholder"]),createVNode(A,{vertical:""},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(f),(ne,$)=>(openBlock(),createBlock(E,null,{default:withCtx(()=>[createVNode(P,null,{default:withCtx(()=>[createVNode(v,{depth:3},{default:withCtx(()=>[createTextVNode(toDisplayString($),1)]),_:2},1024)]),_:2},1024),createVNode(A,{size:0,vertical:""},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(ne,W=>(openBlock(),createBlock(z,{text:"",onClick:pe=>t.value=W},{default:withCtx(()=>[createTextVNode(toDisplayString(W.title),1)]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1},8,["collapsed"])):createCommentVNode("",!0),createVNode(te,{class:"h-full"},{default:withCtx(()=>[createVNode(N,{class:"h-full pb-16"},{default:withCtx(()=>[unref(isMobile)?(openBlock(),createBlock(E,{key:0,class:"absolute top-[10px] left-[10px]"},{default:withCtx(()=>[createVNode(z,{onClick:S[1]||(S[1]=ne=>i.value=!i.value)},{icon:withCtx(()=>[createVNode(y,{component:unref(Menu2)},null,8,["component"])]),_:1})]),_:1})):createCommentVNode("",!0),createVNode(E,{class:"absolute top-[10px] right-[10px]"},{default:withCtx(()=>[createVNode(k,{options:unref(m),animated:"",trigger:"click",onSelect:b},{default:withCtx(()=>[createVNode(z,null,{icon:withCtx(()=>[createVNode(y,{component:unref(LanguageTwotone)},null,8,["component"])]),_:1})]),_:1},8,["options"])]),_:1}),createVNode(A,{vertical:""},{default:withCtx(()=>[createVNode(E,{class:"mt-20 lg:w-1/4 mx-2 lg:mx-auto text-center"},{default:withCtx(()=>[createVNode(_,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(C).title),1)]),_:1}),createVNode(w,{value:r.value,"onUpdate:value":S[2]||(S[2]=ne=>r.value=ne),placeholder:unref(C).search,clearable:""},null,8,["value","placeholder"]),!a.value&&unref(isMobile)&&r.value?(openBlock(),createBlock(A,{key:0},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(f),(ne,$)=>(openBlock(),createBlock(E,null,{default:withCtx(()=>[createVNode(P,null,{default:withCtx(()=>[createVNode(v,{depth:3},{default:withCtx(()=>[createTextVNode(toDisplayString($),1)]),_:2},1024)]),_:2},1024),createVNode(A,{size:0,vertical:""},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(ne,W=>(openBlock(),createBlock(z,{text:"",onClick:pe=>{a.value=!0,t.value=W}},{default:withCtx(()=>[createTextVNode(toDisplayString(W.title),1)]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1024))),256))]),_:1})):createCommentVNode("",!0)]),_:1}),createVNode(P),createVNode(E,{class:"lg:w-1/2 mx-2 lg:mx-auto"},{default:withCtx(()=>[createVNode(ee,{cols:unref(isMobile)?4:5},{default:withCtx(()=>[unref(isMobile)?createCommentVNode("",!0):(openBlock(),createBlock(O,{key:0},{default:withCtx(()=>[createVNode(A,{vertical:""},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(f),(ne,$)=>(openBlock(),createBlock(E,null,{default:withCtx(()=>[createVNode(P,null,{default:withCtx(()=>[createVNode(v,{depth:3},{default:withCtx(()=>[createTextVNode(toDisplayString($),1)]),_:2},1024)]),_:2},1024),createVNode(A,{size:0,vertical:""},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(ne,W=>(openBlock(),createBlock(z,{text:"",onClick:pe=>t.value=W},{default:withCtx(()=>[createTextVNode(toDisplayString(W.title),1)]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})),createVNode(O,{span:4,class:"lg:ml-10 lg:mt-5"},{default:withCtx(()=>[unref(l)?(openBlock(),createBlock(A,{key:0,vertical:""},{default:withCtx(()=>[createVNode(Y,null,{default:withCtx(()=>[createTextVNode(toDisplayString(unref(l).title),1)]),_:1}),createVNode(v,{innerHTML:unref(l).content},null,8,["innerHTML"]),unref(l).link?(openBlock(),createBlock(z,{key:0,href:unref(l).link,class:"mt-5 float-right",tag:"a"},{icon:withCtx(()=>[createVNode(y,{component:unref(EarthFilled)},null,8,["component"])]),_:1},8,["href"])):createCommentVNode("",!0)]),_:1})):(openBlock(),createBlock(B,{key:1}))]),_:1})]),_:1},8,["cols"])]),_:1})]),_:1})]),_:1}),createVNode(L,{class:"py-2",position:"absolute"},{default:withCtx(()=>[createVNode(A,{size:0,justify:"center"},{default:withCtx(()=>[createVNode(E,null,{default:withCtx(()=>[createVNode(v,null,{default:withCtx(()=>[_hoisted_1]),_:1}),createVNode(z,{href:"https://zhazha120.cn",tag:"a",text:"",type:"primary"},{default:withCtx(()=>[_hoisted_2]),_:1})]),_:1}),createVNode(P,{vertical:""}),createVNode(z,{href:"https://github.com/26F-Studio/techmino-online-dict",tag:"a",text:"",type:"primary"},{default:withCtx(()=>[_hoisted_3]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])}}}),App_vue_vue_type_style_index_0_scoped_541a58e0_lang="",_export_sfc=(e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t},App=_export_sfc(_sfc_main,[["__scopeId","data-v-541a58e0"]]),container=document.createElement("div");container.id="app";createApp(App).mount(container);document.body.appendChild(container)});export default On();
