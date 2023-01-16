var Bm=Object.defineProperty;var zm=(e,n,t)=>n in e?Bm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Lm=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var Ba=(e,n,t)=>(zm(e,typeof n!="symbol"?n+"":n,t),t);var rE=Lm((et,nt)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Ns(e,n){const t=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)t[o[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function js(e){if(Pe(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],r=vn(o)?Nm(o):js(o);if(r)for(const i in r)n[i]=r[i]}return n}else{if(vn(e))return e;if(rn(e))return e}}const Om=/;(?![^(]*\))/g,Fm=/:([^]+)/,Wm=/\/\*.*?\*\//gs;function Nm(e){const n={};return e.replace(Wm,"").split(Om).forEach(t=>{if(t){const o=t.split(Fm);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Gs(e){let n="";if(vn(e))n=e;else if(Pe(e))for(let t=0;t<e.length;t++){const o=Gs(e[t]);o&&(n+=o+" ")}else if(rn(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const jm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gm=Ns(jm);function Ld(e){return!!e||e===""}const Wt=e=>vn(e)?e:e==null?"":Pe(e)||rn(e)&&(e.toString===Nd||!Re(e.toString))?JSON.stringify(e,Od,2):String(e),Od=(e,n)=>n&&n.__v_isRef?Od(e,n.value):qo(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,r])=>(t[`${o} =>`]=r,t),{})}:Fd(n)?{[`Set(${n.size})`]:[...n.values()]}:rn(n)&&!Pe(n)&&!jd(n)?String(n):n,tn={},Uo=[],pt=()=>{},Vm=()=>!1,Km=/^on[^a-z]/,oa=e=>Km.test(e),Vs=e=>e.startsWith("onUpdate:"),Tn=Object.assign,Ks=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Um=Object.prototype.hasOwnProperty,Ne=(e,n)=>Um.call(e,n),Pe=Array.isArray,qo=e=>ra(e)==="[object Map]",Fd=e=>ra(e)==="[object Set]",Re=e=>typeof e=="function",vn=e=>typeof e=="string",Us=e=>typeof e=="symbol",rn=e=>e!==null&&typeof e=="object",Wd=e=>rn(e)&&Re(e.then)&&Re(e.catch),Nd=Object.prototype.toString,ra=e=>Nd.call(e),qm=e=>ra(e).slice(8,-1),jd=e=>ra(e)==="[object Object]",qs=e=>vn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ei=Ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Zm=/-(\w)/g,Yo=ia(e=>e.replace(Zm,(n,t)=>t?t.toUpperCase():"")),Jm=/\B([A-Z])/g,or=ia(e=>e.replace(Jm,"-$1").toLowerCase()),Gd=ia(e=>e.charAt(0).toUpperCase()+e.slice(1)),za=ia(e=>e?`on${Gd(e)}`:""),Fr=(e,n)=>!Object.is(e,n),La=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Li=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Zs=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Ol;const Xm=()=>Ol||(Ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qn;class Vd{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qn,!n&&Qn&&(this.index=(Qn.scopes||(Qn.scopes=[])).push(this)-1)}run(n){if(this.active){const t=Qn;try{return Qn=this,n()}finally{Qn=t}}}on(){Qn=this}off(){Qn=this.parent}stop(n){if(this.active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Kd(e){return new Vd(e)}function Ym(e,n=Qn){n&&n.active&&n.effects.push(e)}function Qm(){return Qn}function eg(e){Qn&&Qn.cleanups.push(e)}const Js=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Ud=e=>(e.w&Yt)>0,qd=e=>(e.n&Yt)>0,ng=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Yt},tg=e=>{const{deps:n}=e;if(n.length){let t=0;for(let o=0;o<n.length;o++){const r=n[o];Ud(r)&&!qd(r)?r.delete(e):n[t++]=r,r.w&=~Yt,r.n&=~Yt}n.length=t}},us=new WeakMap;let $r=0,Yt=1;const fs=30;let ft;const ko=Symbol(""),hs=Symbol("");class Xs{constructor(n,t=null,o){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ym(this,o)}run(){if(!this.active)return this.fn();let n=ft,t=Zt;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ft,ft=this,Zt=!0,Yt=1<<++$r,$r<=fs?ng(this):Fl(this),this.fn()}finally{$r<=fs&&tg(this),Yt=1<<--$r,ft=this.parent,Zt=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ft===this?this.deferStop=!0:this.active&&(Fl(this),this.onStop&&this.onStop(),this.active=!1)}}function Fl(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Zt=!0;const Zd=[];function rr(){Zd.push(Zt),Zt=!1}function ir(){const e=Zd.pop();Zt=e===void 0?!0:e}function tt(e,n,t){if(Zt&&ft){let o=us.get(e);o||us.set(e,o=new Map);let r=o.get(t);r||o.set(t,r=Js()),Jd(r)}}function Jd(e,n){let t=!1;$r<=fs?qd(e)||(e.n|=Yt,t=!Ud(e)):t=!e.has(ft),t&&(e.add(ft),ft.deps.push(e))}function It(e,n,t,o,r,i){const a=us.get(e);if(!a)return;let s=[];if(n==="clear")s=[...a.values()];else if(t==="length"&&Pe(e)){const l=Zs(o);a.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(t!==void 0&&s.push(a.get(t)),n){case"add":Pe(e)?qs(t)&&s.push(a.get("length")):(s.push(a.get(ko)),qo(e)&&s.push(a.get(hs)));break;case"delete":Pe(e)||(s.push(a.get(ko)),qo(e)&&s.push(a.get(hs)));break;case"set":qo(e)&&s.push(a.get(ko));break}if(s.length===1)s[0]&&ps(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);ps(Js(l))}}function ps(e,n){const t=Pe(e)?e:[...e];for(const o of t)o.computed&&Wl(o);for(const o of t)o.computed||Wl(o)}function Wl(e,n){(e!==ft||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const og=Ns("__proto__,__v_isRef,__isVue"),Xd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Us)),rg=Ys(),ig=Ys(!1,!0),ag=Ys(!0),Nl=sg();function sg(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const o=Ge(this);for(let i=0,a=this.length;i<a;i++)tt(o,"get",i+"");const r=o[n](...t);return r===-1||r===!1?o[n](...t.map(Ge)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){rr();const o=Ge(this)[n].apply(this,t);return ir(),o}}),e}function Ys(e=!1,n=!1){return function(o,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&i===(e?n?wg:tu:n?nu:eu).get(o))return o;const a=Pe(o);if(!e&&a&&Ne(Nl,r))return Reflect.get(Nl,r,i);const s=Reflect.get(o,r,i);return(Us(r)?Xd.has(r):og(r))||(e||tt(o,"get",r),n)?s:pn(s)?a&&qs(r)?s:s.value:rn(s)?e?Qt(s):ti(s):s}}const lg=Yd(),cg=Yd(!0);function Yd(e=!1){return function(t,o,r,i){let a=t[o];if(Qo(a)&&pn(a)&&!pn(r))return!1;if(!e&&(!Oi(r)&&!Qo(r)&&(a=Ge(a),r=Ge(r)),!Pe(t)&&pn(a)&&!pn(r)))return a.value=r,!0;const s=Pe(t)&&qs(o)?Number(o)<t.length:Ne(t,o),l=Reflect.set(t,o,r,i);return t===Ge(i)&&(s?Fr(r,a)&&It(t,"set",o,r):It(t,"add",o,r)),l}}function dg(e,n){const t=Ne(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&t&&It(e,"delete",n,void 0),o}function ug(e,n){const t=Reflect.has(e,n);return(!Us(n)||!Xd.has(n))&&tt(e,"has",n),t}function fg(e){return tt(e,"iterate",Pe(e)?"length":ko),Reflect.ownKeys(e)}const Qd={get:rg,set:lg,deleteProperty:dg,has:ug,ownKeys:fg},hg={get:ag,set(e,n){return!0},deleteProperty(e,n){return!0}},pg=Tn({},Qd,{get:ig,set:cg}),Qs=e=>e,aa=e=>Reflect.getPrototypeOf(e);function mi(e,n,t=!1,o=!1){e=e.__v_raw;const r=Ge(e),i=Ge(n);t||(n!==i&&tt(r,"get",n),tt(r,"get",i));const{has:a}=aa(r),s=o?Qs:t?tl:Wr;if(a.call(r,n))return s(e.get(n));if(a.call(r,i))return s(e.get(i));e!==r&&e.get(n)}function gi(e,n=!1){const t=this.__v_raw,o=Ge(t),r=Ge(e);return n||(e!==r&&tt(o,"has",e),tt(o,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function bi(e,n=!1){return e=e.__v_raw,!n&&tt(Ge(e),"iterate",ko),Reflect.get(e,"size",e)}function jl(e){e=Ge(e);const n=Ge(this);return aa(n).has.call(n,e)||(n.add(e),It(n,"add",e,e)),this}function Gl(e,n){n=Ge(n);const t=Ge(this),{has:o,get:r}=aa(t);let i=o.call(t,e);i||(e=Ge(e),i=o.call(t,e));const a=r.call(t,e);return t.set(e,n),i?Fr(n,a)&&It(t,"set",e,n):It(t,"add",e,n),this}function Vl(e){const n=Ge(this),{has:t,get:o}=aa(n);let r=t.call(n,e);r||(e=Ge(e),r=t.call(n,e)),o&&o.call(n,e);const i=n.delete(e);return r&&It(n,"delete",e,void 0),i}function Kl(){const e=Ge(this),n=e.size!==0,t=e.clear();return n&&It(e,"clear",void 0,void 0),t}function vi(e,n){return function(o,r){const i=this,a=i.__v_raw,s=Ge(a),l=n?Qs:e?tl:Wr;return!e&&tt(s,"iterate",ko),a.forEach((c,d)=>o.call(r,l(c),l(d),i))}}function yi(e,n,t){return function(...o){const r=this.__v_raw,i=Ge(r),a=qo(i),s=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=r[e](...o),d=t?Qs:n?tl:Wr;return!n&&tt(i,"iterate",l?hs:ko),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:s?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function Nt(e){return function(...n){return e==="delete"?!1:this}}function mg(){const e={get(i){return mi(this,i)},get size(){return bi(this)},has:gi,add:jl,set:Gl,delete:Vl,clear:Kl,forEach:vi(!1,!1)},n={get(i){return mi(this,i,!1,!0)},get size(){return bi(this)},has:gi,add:jl,set:Gl,delete:Vl,clear:Kl,forEach:vi(!1,!0)},t={get(i){return mi(this,i,!0)},get size(){return bi(this,!0)},has(i){return gi.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:vi(!0,!1)},o={get(i){return mi(this,i,!0,!0)},get size(){return bi(this,!0)},has(i){return gi.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=yi(i,!1,!1),t[i]=yi(i,!0,!1),n[i]=yi(i,!1,!0),o[i]=yi(i,!0,!0)}),[e,t,n,o]}const[gg,bg,vg,yg]=mg();function el(e,n){const t=n?e?yg:vg:e?bg:gg;return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Ne(t,r)&&r in o?t:o,r,i)}const xg={get:el(!1,!1)},Cg={get:el(!1,!0)},Sg={get:el(!0,!1)},eu=new WeakMap,nu=new WeakMap,tu=new WeakMap,wg=new WeakMap;function Tg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kg(e){return e.__v_skip||!Object.isExtensible(e)?0:Tg(qm(e))}function ti(e){return Qo(e)?e:nl(e,!1,Qd,xg,eu)}function Pg(e){return nl(e,!1,pg,Cg,nu)}function Qt(e){return nl(e,!0,hg,Sg,tu)}function nl(e,n,t,o,r){if(!rn(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=kg(e);if(a===0)return e;const s=new Proxy(e,a===2?o:t);return r.set(e,s),s}function Jt(e){return Qo(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Qo(e){return!!(e&&e.__v_isReadonly)}function Oi(e){return!!(e&&e.__v_isShallow)}function ou(e){return Jt(e)||Qo(e)}function Ge(e){const n=e&&e.__v_raw;return n?Ge(n):e}function eo(e){return Li(e,"__v_skip",!0),e}const Wr=e=>rn(e)?ti(e):e,tl=e=>rn(e)?Qt(e):e;function ru(e){Zt&&ft&&(e=Ge(e),Jd(e.dep||(e.dep=Js())))}function iu(e,n){e=Ge(e),e.dep&&ps(e.dep)}function pn(e){return!!(e&&e.__v_isRef===!0)}function se(e){return Ag(e,!1)}function Ag(e,n){return pn(e)?e:new $g(e,n)}class $g{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:Ge(n),this._value=t?n:Wr(n)}get value(){return ru(this),this._value}set value(n){const t=this.__v_isShallow||Oi(n)||Qo(n);n=t?n:Ge(n),Fr(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:Wr(n),iu(this))}}function Je(e){return pn(e)?e.value:e}const Dg={get:(e,n,t)=>Je(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const r=e[n];return pn(r)&&!pn(t)?(r.value=t,!0):Reflect.set(e,n,t,o)}};function au(e){return Jt(e)?e:new Proxy(e,Dg)}function Rg(e){const n=Pe(e)?new Array(e.length):{};for(const t in e)n[t]=Qe(e,t);return n}class Hg{constructor(n,t,o){this._object=n,this._key=t,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function Qe(e,n,t){const o=e[n];return pn(o)?o:new Hg(e,n,t)}var su;class Ig{constructor(n,t,o,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[su]=!1,this._dirty=!0,this.effect=new Xs(n,()=>{this._dirty||(this._dirty=!0,iu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=Ge(this);return ru(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}su="__v_isReadonly";function Eg(e,n,t=!1){let o,r;const i=Re(e);return i?(o=e,r=pt):(o=e.get,r=e.set),new Ig(o,r,i||!r,t)}function Xt(e,n,t,o){let r;try{r=o?e(...o):e()}catch(i){sa(i,n,t)}return r}function lt(e,n,t,o){if(Re(e)){const i=Xt(e,n,t,o);return i&&Wd(i)&&i.catch(a=>{sa(a,n,t)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(lt(e[i],n,t,o));return r}function sa(e,n,t,o=!0){const r=n?n.vnode:null;if(n){let i=n.parent;const a=n.proxy,s=t;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,s)===!1)return}i=i.parent}const l=n.appContext.config.errorHandler;if(l){Xt(l,null,10,[e,a,s]);return}}_g(e,t,r,o)}function _g(e,n,t,o=!0){console.error(e)}let Nr=!1,ms=!1;const En=[];let Ct=0;const Zo=[];let $t=null,bo=0;const lu=Promise.resolve();let ol=null;function er(e){const n=ol||lu;return e?n.then(this?e.bind(this):e):n}function Mg(e){let n=Ct+1,t=En.length;for(;n<t;){const o=n+t>>>1;jr(En[o])<e?n=o+1:t=o}return n}function rl(e){(!En.length||!En.includes(e,Nr&&e.allowRecurse?Ct+1:Ct))&&(e.id==null?En.push(e):En.splice(Mg(e.id),0,e),cu())}function cu(){!Nr&&!ms&&(ms=!0,ol=lu.then(uu))}function Bg(e){const n=En.indexOf(e);n>Ct&&En.splice(n,1)}function zg(e){Pe(e)?Zo.push(...e):(!$t||!$t.includes(e,e.allowRecurse?bo+1:bo))&&Zo.push(e),cu()}function Ul(e,n=Nr?Ct+1:0){for(;n<En.length;n++){const t=En[n];t&&t.pre&&(En.splice(n,1),n--,t())}}function du(e){if(Zo.length){const n=[...new Set(Zo)];if(Zo.length=0,$t){$t.push(...n);return}for($t=n,$t.sort((t,o)=>jr(t)-jr(o)),bo=0;bo<$t.length;bo++)$t[bo]();$t=null,bo=0}}const jr=e=>e.id==null?1/0:e.id,Lg=(e,n)=>{const t=jr(e)-jr(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function uu(e){ms=!1,Nr=!0,En.sort(Lg);const n=pt;try{for(Ct=0;Ct<En.length;Ct++){const t=En[Ct];t&&t.active!==!1&&Xt(t,null,14)}}finally{Ct=0,En.length=0,du(),Nr=!1,ol=null,(En.length||Zo.length)&&uu()}}function Og(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||tn;let r=t;const i=n.startsWith("update:"),a=i&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=o[d]||tn;p&&(r=t.map(b=>vn(b)?b.trim():b)),f&&(r=t.map(Zs))}let s,l=o[s=za(n)]||o[s=za(Yo(n))];!l&&i&&(l=o[s=za(or(n))]),l&&lt(l,e,6,r);const c=o[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,lt(c,e,6,r)}}function fu(e,n,t=!1){const o=n.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let a={},s=!1;if(!Re(e)){const l=c=>{const d=fu(c,n,!0);d&&(s=!0,Tn(a,d))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(rn(e)&&o.set(e,null),null):(Pe(i)?i.forEach(l=>a[l]=null):Tn(a,i),rn(e)&&o.set(e,a),a)}function la(e,n){return!e||!oa(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ne(e,n[0].toLowerCase()+n.slice(1))||Ne(e,or(n))||Ne(e,n))}let Mn=null,hu=null;function Fi(e){const n=Mn;return Mn=e,hu=e&&e.type.__scopeId||null,n}function Ee(e,n=Mn,t){if(!n||e._n)return e;const o=(...r)=>{o._d&&oc(-1);const i=Fi(n);let a;try{a=e(...r)}finally{Fi(i),o._d&&oc(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function Oa(e){const{type:n,vnode:t,proxy:o,withProxy:r,props:i,propsOptions:[a],slots:s,attrs:l,emit:c,render:d,renderCache:f,data:p,setupState:b,ctx:h,inheritAttrs:y}=e;let v,m;const w=Fi(e);try{if(t.shapeFlag&4){const k=r||o;v=xt(d.call(k,k,f,i,b,p,h)),m=l}else{const k=n;v=xt(k.length>1?k(i,{attrs:l,slots:s,emit:c}):k(i,null)),m=n.props?l:Fg(l)}}catch(k){Er.length=0,sa(k,e,1),v=ke(zn)}let _=v;if(m&&y!==!1){const k=Object.keys(m),{shapeFlag:R}=_;k.length&&R&7&&(a&&k.some(Vs)&&(m=Wg(m,a)),_=mt(_,m))}return t.dirs&&(_=mt(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),v=_,Fi(w),v}const Fg=e=>{let n;for(const t in e)(t==="class"||t==="style"||oa(t))&&((n||(n={}))[t]=e[t]);return n},Wg=(e,n)=>{const t={};for(const o in e)(!Vs(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function Ng(e,n,t){const{props:o,children:r,component:i}=e,{props:a,children:s,patchFlag:l}=n,c=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return o?ql(o,a,c):!!a;if(l&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(a[p]!==o[p]&&!la(c,p))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:o===a?!1:o?a?ql(o,a,c):!0:!!a;return!1}function ql(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(n[i]!==e[i]&&!la(t,i))return!0}return!1}function jg({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Gg=e=>e.__isSuspense;function Vg(e,n){n&&n.pendingBranch?Pe(e)?n.effects.push(...e):n.effects.push(e):zg(e)}function $n(e,n){if(An){let t=An.provides;const o=An.parent&&An.parent.provides;o===t&&(t=An.provides=Object.create(o)),t[e]=n}}function je(e,n,t=!1){const o=An||Mn;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&Re(n)?n.call(o.proxy):n}}function Ro(e,n){return il(e,null,n)}const xi={};function Cn(e,n,t){return il(e,n,t)}function il(e,n,{immediate:t,deep:o,flush:r,onTrack:i,onTrigger:a}=tn){const s=An;let l,c=!1,d=!1;if(pn(e)?(l=()=>e.value,c=Oi(e)):Jt(e)?(l=()=>e,o=!0):Pe(e)?(d=!0,c=e.some(_=>Jt(_)||Oi(_)),l=()=>e.map(_=>{if(pn(_))return _.value;if(Jt(_))return xo(_);if(Re(_))return Xt(_,s,2)})):Re(e)?n?l=()=>Xt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return f&&f(),lt(e,s,3,[p])}:l=pt,n&&o){const _=l;l=()=>xo(_())}let f,p=_=>{f=m.onStop=()=>{Xt(_,s,4)}},b;if(qr)if(p=pt,n?t&&lt(n,s,3,[l(),d?[]:void 0,p]):l(),r==="sync"){const _=Mb();b=_.__watcherHandles||(_.__watcherHandles=[])}else return pt;let h=d?new Array(e.length).fill(xi):xi;const y=()=>{if(m.active)if(n){const _=m.run();(o||c||(d?_.some((k,R)=>Fr(k,h[R])):Fr(_,h)))&&(f&&f(),lt(n,s,3,[_,h===xi?void 0:d&&h[0]===xi?[]:h,p]),h=_)}else m.run()};y.allowRecurse=!!n;let v;r==="sync"?v=y:r==="post"?v=()=>qn(y,s&&s.suspense):(y.pre=!0,s&&(y.id=s.uid),v=()=>rl(y));const m=new Xs(l,v);n?t?y():h=m.run():r==="post"?qn(m.run.bind(m),s&&s.suspense):m.run();const w=()=>{m.stop(),s&&s.scope&&Ks(s.scope.effects,m)};return b&&b.push(w),w}function Kg(e,n,t){const o=this.proxy,r=vn(e)?e.includes(".")?pu(o,e):()=>o[e]:e.bind(o,o);let i;Re(n)?i=n:(i=n.handler,t=n);const a=An;nr(this);const s=il(r,i.bind(o),t);return a?nr(a):Po(),s}function pu(e,n){const t=n.split(".");return()=>{let o=e;for(let r=0;r<t.length&&o;r++)o=o[t[r]];return o}}function xo(e,n){if(!rn(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),pn(e))xo(e.value,n);else if(Pe(e))for(let t=0;t<e.length;t++)xo(e[t],n);else if(Fd(e)||qo(e))e.forEach(t=>{xo(t,n)});else if(jd(e))for(const t in e)xo(e[t],n);return e}function mu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gt(()=>{e.isMounted=!0}),Ln(()=>{e.isUnmounting=!0}),e}const at=[Function,Array],Ug={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},setup(e,{slots:n}){const t=io(),o=mu();let r;return()=>{const i=n.default&&al(n.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const y of i)if(y.type!==zn){a=y;break}}const s=Ge(e),{mode:l}=s;if(o.isLeaving)return Fa(a);const c=Zl(a);if(!c)return Fa(a);const d=Gr(c,s,o,t);Vr(c,d);const f=t.subTree,p=f&&Zl(f);let b=!1;const{getTransitionKey:h}=c.type;if(h){const y=h();r===void 0?r=y:y!==r&&(r=y,b=!0)}if(p&&p.type!==zn&&(!vo(c,p)||b)){const y=Gr(p,s,o,t);if(Vr(p,y),l==="out-in")return o.isLeaving=!0,y.afterLeave=()=>{o.isLeaving=!1,t.update.active!==!1&&t.update()},Fa(a);l==="in-out"&&c.type!==zn&&(y.delayLeave=(v,m,w)=>{const _=bu(o,p);_[String(p.key)]=p,v._leaveCb=()=>{m(),v._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=w})}return a}}},gu=Ug;function bu(e,n){const{leavingVNodes:t}=e;let o=t.get(n.type);return o||(o=Object.create(null),t.set(n.type,o)),o}function Gr(e,n,t,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:b,onLeaveCancelled:h,onBeforeAppear:y,onAppear:v,onAfterAppear:m,onAppearCancelled:w}=n,_=String(e.key),k=bu(t,e),R=(C,D)=>{C&&lt(C,o,9,D)},M=(C,D)=>{const I=D[1];R(C,D),Pe(C)?C.every(Z=>Z.length<=1)&&I():C.length<=1&&I()},g={mode:i,persisted:a,beforeEnter(C){let D=s;if(!t.isMounted)if(r)D=y||s;else return;C._leaveCb&&C._leaveCb(!0);const I=k[_];I&&vo(e,I)&&I.el._leaveCb&&I.el._leaveCb(),R(D,[C])},enter(C){let D=l,I=c,Z=d;if(!t.isMounted)if(r)D=v||l,I=m||c,Z=w||d;else return;let E=!1;const Y=C._enterCb=L=>{E||(E=!0,L?R(Z,[C]):R(I,[C]),g.delayedLeave&&g.delayedLeave(),C._enterCb=void 0)};D?M(D,[C,Y]):Y()},leave(C,D){const I=String(e.key);if(C._enterCb&&C._enterCb(!0),t.isUnmounting)return D();R(f,[C]);let Z=!1;const E=C._leaveCb=Y=>{Z||(Z=!0,D(),Y?R(h,[C]):R(b,[C]),C._leaveCb=void 0,k[I]===e&&delete k[I])};k[I]=e,p?M(p,[C,E]):E()},clone(C){return Gr(C,n,t,o)}};return g}function Fa(e){if(ca(e))return e=mt(e),e.children=null,e}function Zl(e){return ca(e)?e.children?e.children[0]:void 0:e}function Vr(e,n){e.shapeFlag&6&&e.component?Vr(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function al(e,n=!1,t){let o=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];const s=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Ye?(a.patchFlag&128&&r++,o=o.concat(al(a.children,n,s))):(n||a.type!==zn)&&o.push(s!=null?mt(a,{key:s}):a)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function Te(e){return Re(e)?{setup:e,name:e.name}:e}const Rr=e=>!!e.type.__asyncLoader,ca=e=>e.type.__isKeepAlive;function vu(e,n){yu(e,"a",n)}function sl(e,n){yu(e,"da",n)}function yu(e,n,t=An){const o=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(da(n,o,t),t){let r=t.parent;for(;r&&r.parent;)ca(r.parent.vnode)&&qg(o,n,t,r),r=r.parent}}function qg(e,n,t,o){const r=da(n,e,o,!0);Cu(()=>{Ks(o[n],r)},t)}function da(e,n,t=An,o=!1){if(t){const r=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...a)=>{if(t.isUnmounted)return;rr(),nr(t);const s=lt(n,t,e,a);return Po(),ir(),s});return o?r.unshift(i):r.push(i),i}}const Mt=e=>(n,t=An)=>(!qr||e==="sp")&&da(e,(...o)=>n(...o),t),ar=Mt("bm"),gt=Mt("m"),Zg=Mt("bu"),xu=Mt("u"),Ln=Mt("bum"),Cu=Mt("um"),Jg=Mt("sp"),Xg=Mt("rtg"),Yg=Mt("rtc");function Qg(e,n=An){da("ec",e,n)}function ua(e,n){const t=Mn;if(t===null)return e;const o=pa(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[a,s,l,c=tn]=n[i];a&&(Re(a)&&(a={mounted:a,updated:a}),a.deep&&xo(s),r.push({dir:a,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function uo(e,n,t,o){const r=e.dirs,i=n&&n.dirs;for(let a=0;a<r.length;a++){const s=r[a];i&&(s.oldValue=i[a].value);let l=s.dir[o];l&&(rr(),lt(l,t,8,[e.el,s,e,n]),ir())}}const eb=Symbol();function yr(e,n,t,o){let r;const i=t&&t[o];if(Pe(e)||vn(e)){r=new Array(e.length);for(let a=0,s=e.length;a<s;a++)r[a]=n(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=n(a+1,a,void 0,i&&i[a])}else if(rn(e))if(e[Symbol.iterator])r=Array.from(e,(a,s)=>n(a,s,void 0,i&&i[s]));else{const a=Object.keys(e);r=new Array(a.length);for(let s=0,l=a.length;s<l;s++){const c=a[s];r[s]=n(e[c],c,s,i&&i[s])}}else r=[];return t&&(t[o]=r),r}function nb(e,n,t={},o,r){if(Mn.isCE||Mn.parent&&Rr(Mn.parent)&&Mn.parent.isCE)return n!=="default"&&(t.name=n),ke("slot",t,o&&o());let i=e[n];i&&i._c&&(i._d=!1),cn();const a=i&&Su(i(t)),s=Yn(Ye,{key:t.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function Su(e){return e.some(n=>Ur(n)?!(n.type===zn||n.type===Ye&&!Su(n.children)):!0)?e:null}const gs=e=>e?Eu(e)?pa(e)||e.proxy:gs(e.parent):null,Hr=Tn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gs(e.parent),$root:e=>gs(e.root),$emit:e=>e.emit,$options:e=>ll(e),$forceUpdate:e=>e.f||(e.f=()=>rl(e.update)),$nextTick:e=>e.n||(e.n=er.bind(e.proxy)),$watch:e=>Kg.bind(e)}),Wa=(e,n)=>e!==tn&&!e.__isScriptSetup&&Ne(e,n),tb={get({_:e},n){const{ctx:t,setupState:o,data:r,props:i,accessCache:a,type:s,appContext:l}=e;let c;if(n[0]!=="$"){const b=a[n];if(b!==void 0)switch(b){case 1:return o[n];case 2:return r[n];case 4:return t[n];case 3:return i[n]}else{if(Wa(o,n))return a[n]=1,o[n];if(r!==tn&&Ne(r,n))return a[n]=2,r[n];if((c=e.propsOptions[0])&&Ne(c,n))return a[n]=3,i[n];if(t!==tn&&Ne(t,n))return a[n]=4,t[n];bs&&(a[n]=0)}}const d=Hr[n];let f,p;if(d)return n==="$attrs"&&tt(e,"get",n),d(e);if((f=s.__cssModules)&&(f=f[n]))return f;if(t!==tn&&Ne(t,n))return a[n]=4,t[n];if(p=l.config.globalProperties,Ne(p,n))return p[n]},set({_:e},n,t){const{data:o,setupState:r,ctx:i}=e;return Wa(r,n)?(r[n]=t,!0):o!==tn&&Ne(o,n)?(o[n]=t,!0):Ne(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:r,propsOptions:i}},a){let s;return!!t[a]||e!==tn&&Ne(e,a)||Wa(n,a)||(s=i[0])&&Ne(s,a)||Ne(o,a)||Ne(Hr,a)||Ne(r.config.globalProperties,a)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Ne(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let bs=!0;function ob(e){const n=ll(e),t=e.proxy,o=e.ctx;bs=!1,n.beforeCreate&&Jl(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:s,provide:l,inject:c,created:d,beforeMount:f,mounted:p,beforeUpdate:b,updated:h,activated:y,deactivated:v,beforeDestroy:m,beforeUnmount:w,destroyed:_,unmounted:k,render:R,renderTracked:M,renderTriggered:g,errorCaptured:C,serverPrefetch:D,expose:I,inheritAttrs:Z,components:E,directives:Y,filters:L}=n;if(c&&rb(c,o,null,e.appContext.config.unwrapInjectedRef),a)for(const N in a){const re=a[N];Re(re)&&(o[N]=re.bind(t))}if(r){const N=r.call(t,t);rn(N)&&(e.data=ti(N))}if(bs=!0,i)for(const N in i){const re=i[N],T=Re(re)?re.bind(t,t):Re(re.get)?re.get.bind(t,t):pt,q=!Re(re)&&Re(re.set)?re.set.bind(t):pt,$e=J({get:T,set:q});Object.defineProperty(o,N,{enumerable:!0,configurable:!0,get:()=>$e.value,set:_e=>$e.value=_e})}if(s)for(const N in s)wu(s[N],o,t,N);if(l){const N=Re(l)?l.call(t):l;Reflect.ownKeys(N).forEach(re=>{$n(re,N[re])})}d&&Jl(d,e,"c");function ie(N,re){Pe(re)?re.forEach(T=>N(T.bind(t))):re&&N(re.bind(t))}if(ie(ar,f),ie(gt,p),ie(Zg,b),ie(xu,h),ie(vu,y),ie(sl,v),ie(Qg,C),ie(Yg,M),ie(Xg,g),ie(Ln,w),ie(Cu,k),ie(Jg,D),Pe(I))if(I.length){const N=e.exposed||(e.exposed={});I.forEach(re=>{Object.defineProperty(N,re,{get:()=>t[re],set:T=>t[re]=T})})}else e.exposed||(e.exposed={});R&&e.render===pt&&(e.render=R),Z!=null&&(e.inheritAttrs=Z),E&&(e.components=E),Y&&(e.directives=Y)}function rb(e,n,t=pt,o=!1){Pe(e)&&(e=vs(e));for(const r in e){const i=e[r];let a;rn(i)?"default"in i?a=je(i.from||r,i.default,!0):a=je(i.from||r):a=je(i),pn(a)&&o?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):n[r]=a}}function Jl(e,n,t){lt(Pe(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function wu(e,n,t,o){const r=o.includes(".")?pu(t,o):()=>t[o];if(vn(e)){const i=n[e];Re(i)&&Cn(r,i)}else if(Re(e))Cn(r,e.bind(t));else if(rn(e))if(Pe(e))e.forEach(i=>wu(i,n,t,o));else{const i=Re(e.handler)?e.handler.bind(t):n[e.handler];Re(i)&&Cn(r,i,e)}}function ll(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(n);let l;return s?l=s:!r.length&&!t&&!o?l=n:(l={},r.length&&r.forEach(c=>Wi(l,c,a,!0)),Wi(l,n,a)),rn(n)&&i.set(n,l),l}function Wi(e,n,t,o=!1){const{mixins:r,extends:i}=n;i&&Wi(e,i,t,!0),r&&r.forEach(a=>Wi(e,a,t,!0));for(const a in n)if(!(o&&a==="expose")){const s=ib[a]||t&&t[a];e[a]=s?s(e[a],n[a]):n[a]}return e}const ib={data:Xl,props:mo,emits:mo,methods:mo,computed:mo,beforeCreate:Bn,created:Bn,beforeMount:Bn,mounted:Bn,beforeUpdate:Bn,updated:Bn,beforeDestroy:Bn,beforeUnmount:Bn,destroyed:Bn,unmounted:Bn,activated:Bn,deactivated:Bn,errorCaptured:Bn,serverPrefetch:Bn,components:mo,directives:mo,watch:sb,provide:Xl,inject:ab};function Xl(e,n){return n?e?function(){return Tn(Re(e)?e.call(this,this):e,Re(n)?n.call(this,this):n)}:n:e}function ab(e,n){return mo(vs(e),vs(n))}function vs(e){if(Pe(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Bn(e,n){return e?[...new Set([].concat(e,n))]:n}function mo(e,n){return e?Tn(Tn(Object.create(null),e),n):n}function sb(e,n){if(!e)return n;if(!n)return e;const t=Tn(Object.create(null),e);for(const o in n)t[o]=Bn(e[o],n[o]);return t}function lb(e,n,t,o=!1){const r={},i={};Li(i,ha,1),e.propsDefaults=Object.create(null),Tu(e,n,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);t?e.props=o?r:Pg(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function cb(e,n,t,o){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,s=Ge(r),[l]=e.propsOptions;let c=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(la(e.emitsOptions,p))continue;const b=n[p];if(l)if(Ne(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const h=Yo(p);r[h]=ys(l,s,h,b,e,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{Tu(e,n,r,i)&&(c=!0);let d;for(const f in s)(!n||!Ne(n,f)&&((d=or(f))===f||!Ne(n,d)))&&(l?t&&(t[f]!==void 0||t[d]!==void 0)&&(r[f]=ys(l,s,f,void 0,e,!0)):delete r[f]);if(i!==s)for(const f in i)(!n||!Ne(n,f))&&(delete i[f],c=!0)}c&&It(e,"set","$attrs")}function Tu(e,n,t,o){const[r,i]=e.propsOptions;let a=!1,s;if(n)for(let l in n){if(Ei(l))continue;const c=n[l];let d;r&&Ne(r,d=Yo(l))?!i||!i.includes(d)?t[d]=c:(s||(s={}))[d]=c:la(e.emitsOptions,l)||(!(l in o)||c!==o[l])&&(o[l]=c,a=!0)}if(i){const l=Ge(t),c=s||tn;for(let d=0;d<i.length;d++){const f=i[d];t[f]=ys(r,l,f,c[f],e,!Ne(c,f))}}return a}function ys(e,n,t,o,r,i){const a=e[t];if(a!=null){const s=Ne(a,"default");if(s&&o===void 0){const l=a.default;if(a.type!==Function&&Re(l)){const{propsDefaults:c}=r;t in c?o=c[t]:(nr(r),o=c[t]=l.call(null,n),Po())}else o=l}a[0]&&(i&&!s?o=!1:a[1]&&(o===""||o===or(t))&&(o=!0))}return o}function ku(e,n,t=!1){const o=n.propsCache,r=o.get(e);if(r)return r;const i=e.props,a={},s=[];let l=!1;if(!Re(e)){const d=f=>{l=!0;const[p,b]=ku(f,n,!0);Tn(a,p),b&&s.push(...b)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return rn(e)&&o.set(e,Uo),Uo;if(Pe(i))for(let d=0;d<i.length;d++){const f=Yo(i[d]);Yl(f)&&(a[f]=tn)}else if(i)for(const d in i){const f=Yo(d);if(Yl(f)){const p=i[d],b=a[f]=Pe(p)||Re(p)?{type:p}:Object.assign({},p);if(b){const h=nc(Boolean,b.type),y=nc(String,b.type);b[0]=h>-1,b[1]=y<0||h<y,(h>-1||Ne(b,"default"))&&s.push(f)}}}const c=[a,s];return rn(e)&&o.set(e,c),c}function Yl(e){return e[0]!=="$"}function Ql(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function ec(e,n){return Ql(e)===Ql(n)}function nc(e,n){return Pe(n)?n.findIndex(t=>ec(t,e)):Re(n)&&ec(n,e)?0:-1}const Pu=e=>e[0]==="_"||e==="$stable",cl=e=>Pe(e)?e.map(xt):[xt(e)],db=(e,n,t)=>{if(n._n)return n;const o=Ee((...r)=>cl(n(...r)),t);return o._c=!1,o},Au=(e,n,t)=>{const o=e._ctx;for(const r in e){if(Pu(r))continue;const i=e[r];if(Re(i))n[r]=db(r,i,o);else if(i!=null){const a=cl(i);n[r]=()=>a}}},$u=(e,n)=>{const t=cl(n);e.slots.default=()=>t},ub=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=Ge(n),Li(n,"_",t)):Au(n,e.slots={})}else e.slots={},n&&$u(e,n);Li(e.slots,ha,1)},fb=(e,n,t)=>{const{vnode:o,slots:r}=e;let i=!0,a=tn;if(o.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:(Tn(r,n),!t&&s===1&&delete r._):(i=!n.$stable,Au(n,r)),a=n}else n&&($u(e,n),a={default:1});if(i)for(const s in r)!Pu(s)&&!(s in a)&&delete r[s]};function Du(){return{app:null,config:{isNativeTag:Vm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hb=0;function pb(e,n){return function(o,r=null){Re(o)||(o=Object.assign({},o)),r!=null&&!rn(r)&&(r=null);const i=Du(),a=new Set;let s=!1;const l=i.app={_uid:hb++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:Bb,get config(){return i.config},set config(c){},use(c,...d){return a.has(c)||(c&&Re(c.install)?(a.add(c),c.install(l,...d)):Re(c)&&(a.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,f){if(!s){const p=ke(o,r);return p.appContext=i,d&&n?n(p,c):e(p,c,f),s=!0,l._container=c,c.__vue_app__=l,pa(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function xs(e,n,t,o,r=!1){if(Pe(e)){e.forEach((p,b)=>xs(p,n&&(Pe(n)?n[b]:n),t,o,r));return}if(Rr(o)&&!r)return;const i=o.shapeFlag&4?pa(o.component)||o.component.proxy:o.el,a=r?null:i,{i:s,r:l}=e,c=n&&n.r,d=s.refs===tn?s.refs={}:s.refs,f=s.setupState;if(c!=null&&c!==l&&(vn(c)?(d[c]=null,Ne(f,c)&&(f[c]=null)):pn(c)&&(c.value=null)),Re(l))Xt(l,s,12,[a,d]);else{const p=vn(l),b=pn(l);if(p||b){const h=()=>{if(e.f){const y=p?Ne(f,l)?f[l]:d[l]:l.value;r?Pe(y)&&Ks(y,i):Pe(y)?y.includes(i)||y.push(i):p?(d[l]=[i],Ne(f,l)&&(f[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else p?(d[l]=a,Ne(f,l)&&(f[l]=a)):b&&(l.value=a,e.k&&(d[e.k]=a))};a?(h.id=-1,qn(h,t)):h()}}}const qn=Vg;function mb(e){return gb(e)}function gb(e,n){const t=Xm();t.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:a,createText:s,createComment:l,setText:c,setElementText:d,parentNode:f,nextSibling:p,setScopeId:b=pt,insertStaticContent:h}=e,y=(S,A,z,j=null,V=null,ee=null,ae=!1,Q=null,U=!!A.dynamicChildren)=>{if(S===A)return;S&&!vo(S,A)&&(j=De(S),_e(S,V,ee,!0),S=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:F,ref:ge,shapeFlag:he}=A;switch(F){case fa:v(S,A,z,j);break;case zn:m(S,A,z,j);break;case Na:S==null&&w(A,z,j,ae);break;case Ye:E(S,A,z,j,V,ee,ae,Q,U);break;default:he&1?R(S,A,z,j,V,ee,ae,Q,U):he&6?Y(S,A,z,j,V,ee,ae,Q,U):(he&64||he&128)&&F.process(S,A,z,j,V,ee,ae,Q,U,Ae)}ge!=null&&V&&xs(ge,S&&S.ref,ee,A||S,!A)},v=(S,A,z,j)=>{if(S==null)o(A.el=s(A.children),z,j);else{const V=A.el=S.el;A.children!==S.children&&c(V,A.children)}},m=(S,A,z,j)=>{S==null?o(A.el=l(A.children||""),z,j):A.el=S.el},w=(S,A,z,j)=>{[S.el,S.anchor]=h(S.children,A,z,j,S.el,S.anchor)},_=({el:S,anchor:A},z,j)=>{let V;for(;S&&S!==A;)V=p(S),o(S,z,j),S=V;o(A,z,j)},k=({el:S,anchor:A})=>{let z;for(;S&&S!==A;)z=p(S),r(S),S=z;r(A)},R=(S,A,z,j,V,ee,ae,Q,U)=>{ae=ae||A.type==="svg",S==null?M(A,z,j,V,ee,ae,Q,U):D(S,A,V,ee,ae,Q,U)},M=(S,A,z,j,V,ee,ae,Q)=>{let U,F;const{type:ge,props:he,shapeFlag:X,transition:de,dirs:me}=S;if(U=S.el=a(S.type,ee,he&&he.is,he),X&8?d(U,S.children):X&16&&C(S.children,U,null,j,V,ee&&ge!=="foreignObject",ae,Q),me&&uo(S,null,j,"created"),he){for(const He in he)He!=="value"&&!Ei(He)&&i(U,He,null,he[He],ee,S.children,j,V,Ce);"value"in he&&i(U,"value",null,he.value),(F=he.onVnodeBeforeMount)&&vt(F,j,S)}g(U,S,S.scopeId,ae,j),me&&uo(S,null,j,"beforeMount");const Oe=(!V||V&&!V.pendingBranch)&&de&&!de.persisted;Oe&&de.beforeEnter(U),o(U,A,z),((F=he&&he.onVnodeMounted)||Oe||me)&&qn(()=>{F&&vt(F,j,S),Oe&&de.enter(U),me&&uo(S,null,j,"mounted")},V)},g=(S,A,z,j,V)=>{if(z&&b(S,z),j)for(let ee=0;ee<j.length;ee++)b(S,j[ee]);if(V){let ee=V.subTree;if(A===ee){const ae=V.vnode;g(S,ae,ae.scopeId,ae.slotScopeIds,V.parent)}}},C=(S,A,z,j,V,ee,ae,Q,U=0)=>{for(let F=U;F<S.length;F++){const ge=S[F]=Q?Ut(S[F]):xt(S[F]);y(null,ge,A,z,j,V,ee,ae,Q)}},D=(S,A,z,j,V,ee,ae)=>{const Q=A.el=S.el;let{patchFlag:U,dynamicChildren:F,dirs:ge}=A;U|=S.patchFlag&16;const he=S.props||tn,X=A.props||tn;let de;z&&fo(z,!1),(de=X.onVnodeBeforeUpdate)&&vt(de,z,A,S),ge&&uo(A,S,z,"beforeUpdate"),z&&fo(z,!0);const me=V&&A.type!=="foreignObject";if(F?I(S.dynamicChildren,F,Q,z,j,me,ee):ae||re(S,A,Q,null,z,j,me,ee,!1),U>0){if(U&16)Z(Q,A,he,X,z,j,V);else if(U&2&&he.class!==X.class&&i(Q,"class",null,X.class,V),U&4&&i(Q,"style",he.style,X.style,V),U&8){const Oe=A.dynamicProps;for(let He=0;He<Oe.length;He++){const Fe=Oe[He],en=he[Fe],Vn=X[Fe];(Vn!==en||Fe==="value")&&i(Q,Fe,en,Vn,V,S.children,z,j,Ce)}}U&1&&S.children!==A.children&&d(Q,A.children)}else!ae&&F==null&&Z(Q,A,he,X,z,j,V);((de=X.onVnodeUpdated)||ge)&&qn(()=>{de&&vt(de,z,A,S),ge&&uo(A,S,z,"updated")},j)},I=(S,A,z,j,V,ee,ae)=>{for(let Q=0;Q<A.length;Q++){const U=S[Q],F=A[Q],ge=U.el&&(U.type===Ye||!vo(U,F)||U.shapeFlag&70)?f(U.el):z;y(U,F,ge,null,j,V,ee,ae,!0)}},Z=(S,A,z,j,V,ee,ae)=>{if(z!==j){if(z!==tn)for(const Q in z)!Ei(Q)&&!(Q in j)&&i(S,Q,z[Q],null,ae,A.children,V,ee,Ce);for(const Q in j){if(Ei(Q))continue;const U=j[Q],F=z[Q];U!==F&&Q!=="value"&&i(S,Q,F,U,ae,A.children,V,ee,Ce)}"value"in j&&i(S,"value",z.value,j.value)}},E=(S,A,z,j,V,ee,ae,Q,U)=>{const F=A.el=S?S.el:s(""),ge=A.anchor=S?S.anchor:s("");let{patchFlag:he,dynamicChildren:X,slotScopeIds:de}=A;de&&(Q=Q?Q.concat(de):de),S==null?(o(F,z,j),o(ge,z,j),C(A.children,z,ge,V,ee,ae,Q,U)):he>0&&he&64&&X&&S.dynamicChildren?(I(S.dynamicChildren,X,z,V,ee,ae,Q),(A.key!=null||V&&A===V.subTree)&&dl(S,A,!0)):re(S,A,z,ge,V,ee,ae,Q,U)},Y=(S,A,z,j,V,ee,ae,Q,U)=>{A.slotScopeIds=Q,S==null?A.shapeFlag&512?V.ctx.activate(A,z,j,ae,U):L(A,z,j,V,ee,ae,U):B(S,A,U)},L=(S,A,z,j,V,ee,ae)=>{const Q=S.component=$b(S,j,V);if(ca(S)&&(Q.ctx.renderer=Ae),Db(Q),Q.asyncDep){if(V&&V.registerDep(Q,ie),!S.el){const U=Q.subTree=ke(zn);m(null,U,A,z)}return}ie(Q,S,A,z,V,ee,ae)},B=(S,A,z)=>{const j=A.component=S.component;if(Ng(S,A,z))if(j.asyncDep&&!j.asyncResolved){N(j,A,z);return}else j.next=A,Bg(j.update),j.update();else A.el=S.el,j.vnode=A},ie=(S,A,z,j,V,ee,ae)=>{const Q=()=>{if(S.isMounted){let{next:ge,bu:he,u:X,parent:de,vnode:me}=S,Oe=ge,He;fo(S,!1),ge?(ge.el=me.el,N(S,ge,ae)):ge=me,he&&La(he),(He=ge.props&&ge.props.onVnodeBeforeUpdate)&&vt(He,de,ge,me),fo(S,!0);const Fe=Oa(S),en=S.subTree;S.subTree=Fe,y(en,Fe,f(en.el),De(en),S,V,ee),ge.el=Fe.el,Oe===null&&jg(S,Fe.el),X&&qn(X,V),(He=ge.props&&ge.props.onVnodeUpdated)&&qn(()=>vt(He,de,ge,me),V)}else{let ge;const{el:he,props:X}=A,{bm:de,m:me,parent:Oe}=S,He=Rr(A);if(fo(S,!1),de&&La(de),!He&&(ge=X&&X.onVnodeBeforeMount)&&vt(ge,Oe,A),fo(S,!0),he&&qe){const Fe=()=>{S.subTree=Oa(S),qe(he,S.subTree,S,V,null)};He?A.type.__asyncLoader().then(()=>!S.isUnmounted&&Fe()):Fe()}else{const Fe=S.subTree=Oa(S);y(null,Fe,z,j,S,V,ee),A.el=Fe.el}if(me&&qn(me,V),!He&&(ge=X&&X.onVnodeMounted)){const Fe=A;qn(()=>vt(ge,Oe,Fe),V)}(A.shapeFlag&256||Oe&&Rr(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&S.a&&qn(S.a,V),S.isMounted=!0,A=z=j=null}},U=S.effect=new Xs(Q,()=>rl(F),S.scope),F=S.update=()=>U.run();F.id=S.uid,fo(S,!0),F()},N=(S,A,z)=>{A.component=S;const j=S.vnode.props;S.vnode=A,S.next=null,cb(S,A.props,j,z),fb(S,A.children,z),rr(),Ul(),ir()},re=(S,A,z,j,V,ee,ae,Q,U=!1)=>{const F=S&&S.children,ge=S?S.shapeFlag:0,he=A.children,{patchFlag:X,shapeFlag:de}=A;if(X>0){if(X&128){q(F,he,z,j,V,ee,ae,Q,U);return}else if(X&256){T(F,he,z,j,V,ee,ae,Q,U);return}}de&8?(ge&16&&Ce(F,V,ee),he!==F&&d(z,he)):ge&16?de&16?q(F,he,z,j,V,ee,ae,Q,U):Ce(F,V,ee,!0):(ge&8&&d(z,""),de&16&&C(he,z,j,V,ee,ae,Q,U))},T=(S,A,z,j,V,ee,ae,Q,U)=>{S=S||Uo,A=A||Uo;const F=S.length,ge=A.length,he=Math.min(F,ge);let X;for(X=0;X<he;X++){const de=A[X]=U?Ut(A[X]):xt(A[X]);y(S[X],de,z,null,V,ee,ae,Q,U)}F>ge?Ce(S,V,ee,!0,!1,he):C(A,z,j,V,ee,ae,Q,U,he)},q=(S,A,z,j,V,ee,ae,Q,U)=>{let F=0;const ge=A.length;let he=S.length-1,X=ge-1;for(;F<=he&&F<=X;){const de=S[F],me=A[F]=U?Ut(A[F]):xt(A[F]);if(vo(de,me))y(de,me,z,null,V,ee,ae,Q,U);else break;F++}for(;F<=he&&F<=X;){const de=S[he],me=A[X]=U?Ut(A[X]):xt(A[X]);if(vo(de,me))y(de,me,z,null,V,ee,ae,Q,U);else break;he--,X--}if(F>he){if(F<=X){const de=X+1,me=de<ge?A[de].el:j;for(;F<=X;)y(null,A[F]=U?Ut(A[F]):xt(A[F]),z,me,V,ee,ae,Q,U),F++}}else if(F>X)for(;F<=he;)_e(S[F],V,ee,!0),F++;else{const de=F,me=F,Oe=new Map;for(F=me;F<=X;F++){const gn=A[F]=U?Ut(A[F]):xt(A[F]);gn.key!=null&&Oe.set(gn.key,F)}let He,Fe=0;const en=X-me+1;let Vn=!1,Ot=0;const it=new Array(en);for(F=0;F<en;F++)it[F]=0;for(F=de;F<=he;F++){const gn=S[F];if(Fe>=en){_e(gn,V,ee,!0);continue}let K;if(gn.key!=null)K=Oe.get(gn.key);else for(He=me;He<=X;He++)if(it[He-me]===0&&vo(gn,A[He])){K=He;break}K===void 0?_e(gn,V,ee,!0):(it[K-me]=F+1,K>=Ot?Ot=K:Vn=!0,y(gn,A[K],z,null,V,ee,ae,Q,U),Fe++)}const Xn=Vn?bb(it):Uo;for(He=Xn.length-1,F=en-1;F>=0;F--){const gn=me+F,K=A[gn],fe=gn+1<ge?A[gn+1].el:j;it[F]===0?y(null,K,z,fe,V,ee,ae,Q,U):Vn&&(He<0||F!==Xn[He]?$e(K,z,fe,2):He--)}}},$e=(S,A,z,j,V=null)=>{const{el:ee,type:ae,transition:Q,children:U,shapeFlag:F}=S;if(F&6){$e(S.component.subTree,A,z,j);return}if(F&128){S.suspense.move(A,z,j);return}if(F&64){ae.move(S,A,z,Ae);return}if(ae===Ye){o(ee,A,z);for(let he=0;he<U.length;he++)$e(U[he],A,z,j);o(S.anchor,A,z);return}if(ae===Na){_(S,A,z);return}if(j!==2&&F&1&&Q)if(j===0)Q.beforeEnter(ee),o(ee,A,z),qn(()=>Q.enter(ee),V);else{const{leave:he,delayLeave:X,afterLeave:de}=Q,me=()=>o(ee,A,z),Oe=()=>{he(ee,()=>{me(),de&&de()})};X?X(ee,me,Oe):Oe()}else o(ee,A,z)},_e=(S,A,z,j=!1,V=!1)=>{const{type:ee,props:ae,ref:Q,children:U,dynamicChildren:F,shapeFlag:ge,patchFlag:he,dirs:X}=S;if(Q!=null&&xs(Q,null,z,S,!0),ge&256){A.ctx.deactivate(S);return}const de=ge&1&&X,me=!Rr(S);let Oe;if(me&&(Oe=ae&&ae.onVnodeBeforeUnmount)&&vt(Oe,A,S),ge&6)Be(S.component,z,j);else{if(ge&128){S.suspense.unmount(z,j);return}de&&uo(S,null,A,"beforeUnmount"),ge&64?S.type.remove(S,A,z,V,Ae,j):F&&(ee!==Ye||he>0&&he&64)?Ce(F,A,z,!1,!0):(ee===Ye&&he&384||!V&&ge&16)&&Ce(U,A,z),j&&Nn(S)}(me&&(Oe=ae&&ae.onVnodeUnmounted)||de)&&qn(()=>{Oe&&vt(Oe,A,S),de&&uo(S,null,A,"unmounted")},z)},Nn=S=>{const{type:A,el:z,anchor:j,transition:V}=S;if(A===Ye){Le(z,j);return}if(A===Na){k(S);return}const ee=()=>{r(z),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(S.shapeFlag&1&&V&&!V.persisted){const{leave:ae,delayLeave:Q}=V,U=()=>ae(z,ee);Q?Q(S.el,ee,U):U()}else ee()},Le=(S,A)=>{let z;for(;S!==A;)z=p(S),r(S),S=z;r(A)},Be=(S,A,z)=>{const{bum:j,scope:V,update:ee,subTree:ae,um:Q}=S;j&&La(j),V.stop(),ee&&(ee.active=!1,_e(ae,S,A,z)),Q&&qn(Q,A),qn(()=>{S.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Ce=(S,A,z,j=!1,V=!1,ee=0)=>{for(let ae=ee;ae<S.length;ae++)_e(S[ae],A,z,j,V)},De=S=>S.shapeFlag&6?De(S.component.subTree):S.shapeFlag&128?S.suspense.next():p(S.anchor||S.el),jn=(S,A,z)=>{S==null?A._vnode&&_e(A._vnode,null,null,!0):y(A._vnode||null,S,A,null,null,null,z),Ul(),du(),A._vnode=S},Ae={p:y,um:_e,m:$e,r:Nn,mt:L,mc:C,pc:re,pbc:I,n:De,o:e};let Gn,qe;return n&&([Gn,qe]=n(Ae)),{render:jn,hydrate:Gn,createApp:pb(jn,Gn)}}function fo({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function dl(e,n,t=!1){const o=e.children,r=n.children;if(Pe(o)&&Pe(r))for(let i=0;i<o.length;i++){const a=o[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=Ut(r[i]),s.el=a.el),t||dl(a,s)),s.type===fa&&(s.el=a.el)}}function bb(e){const n=e.slice(),t=[0];let o,r,i,a,s;const l=e.length;for(o=0;o<l;o++){const c=e[o];if(c!==0){if(r=t[t.length-1],e[r]<c){n[o]=r,t.push(o);continue}for(i=0,a=t.length-1;i<a;)s=i+a>>1,e[t[s]]<c?i=s+1:a=s;c<e[t[i]]&&(i>0&&(n[o]=t[i-1]),t[i]=o)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=n[a];return t}const vb=e=>e.__isTeleport,Ir=e=>e&&(e.disabled||e.disabled===""),tc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Cs=(e,n)=>{const t=e&&e.to;return vn(t)?n?n(t):null:t},yb={__isTeleport:!0,process(e,n,t,o,r,i,a,s,l,c){const{mc:d,pc:f,pbc:p,o:{insert:b,querySelector:h,createText:y,createComment:v}}=c,m=Ir(n.props);let{shapeFlag:w,children:_,dynamicChildren:k}=n;if(e==null){const R=n.el=y(""),M=n.anchor=y("");b(R,t,o),b(M,t,o);const g=n.target=Cs(n.props,h),C=n.targetAnchor=y("");g&&(b(C,g),a=a||tc(g));const D=(I,Z)=>{w&16&&d(_,I,Z,r,i,a,s,l)};m?D(t,M):g&&D(g,C)}else{n.el=e.el;const R=n.anchor=e.anchor,M=n.target=e.target,g=n.targetAnchor=e.targetAnchor,C=Ir(e.props),D=C?t:M,I=C?R:g;if(a=a||tc(M),k?(p(e.dynamicChildren,k,D,r,i,a,s),dl(e,n,!0)):l||f(e,n,D,I,r,i,a,s,!1),m)C||Ci(n,t,R,c,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Z=n.target=Cs(n.props,h);Z&&Ci(n,Z,null,c,0)}else C&&Ci(n,M,g,c,1)}Ru(n)},remove(e,n,t,o,{um:r,o:{remove:i}},a){const{shapeFlag:s,children:l,anchor:c,targetAnchor:d,target:f,props:p}=e;if(f&&i(d),(a||!Ir(p))&&(i(c),s&16))for(let b=0;b<l.length;b++){const h=l[b];r(h,n,t,!0,!!h.dynamicChildren)}},move:Ci,hydrate:xb};function Ci(e,n,t,{o:{insert:o},m:r},i=2){i===0&&o(e.targetAnchor,n,t);const{el:a,anchor:s,shapeFlag:l,children:c,props:d}=e,f=i===2;if(f&&o(a,n,t),(!f||Ir(d))&&l&16)for(let p=0;p<c.length;p++)r(c[p],n,t,2);f&&o(s,n,t)}function xb(e,n,t,o,r,i,{o:{nextSibling:a,parentNode:s,querySelector:l}},c){const d=n.target=Cs(n.props,l);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Ir(n.props))n.anchor=c(a(e),n,s(e),t,o,r,i),n.targetAnchor=f;else{n.anchor=a(e);let p=f;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){n.targetAnchor=p,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}c(f,n,d,t,o,r,i)}Ru(n)}return n.anchor&&a(n.anchor)}const Cb=yb;function Ru(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Ye=Symbol(void 0),fa=Symbol(void 0),zn=Symbol(void 0),Na=Symbol(void 0),Er=[];let ht=null;function cn(e=!1){Er.push(ht=e?null:[])}function Sb(){Er.pop(),ht=Er[Er.length-1]||null}let Kr=1;function oc(e){Kr+=e}function Hu(e){return e.dynamicChildren=Kr>0?ht||Uo:null,Sb(),Kr>0&&ht&&ht.push(e),e}function Dt(e,n,t,o,r,i){return Hu(Ht(e,n,t,o,r,i,!0))}function Yn(e,n,t,o,r){return Hu(ke(e,n,t,o,r,!0))}function Ur(e){return e?e.__v_isVNode===!0:!1}function vo(e,n){return e.type===n.type&&e.key===n.key}const ha="__vInternal",Iu=({key:e})=>e??null,_i=({ref:e,ref_key:n,ref_for:t})=>e!=null?vn(e)||pn(e)||Re(e)?{i:Mn,r:e,k:n,f:!!t}:e:null;function Ht(e,n=null,t=null,o=0,r=null,i=e===Ye?0:1,a=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Iu(n),ref:n&&_i(n),scopeId:hu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mn};return s?(ul(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=vn(t)?8:16),Kr>0&&!a&&ht&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ht.push(l),l}const ke=wb;function wb(e,n=null,t=null,o=0,r=null,i=!1){if((!e||e===eb)&&(e=zn),Ur(e)){const s=mt(e,n,!0);return t&&ul(s,t),Kr>0&&!i&&ht&&(s.shapeFlag&6?ht[ht.indexOf(e)]=s:ht.push(s)),s.patchFlag|=-2,s}if(Eb(e)&&(e=e.__vccOpts),n){n=Tb(n);let{class:s,style:l}=n;s&&!vn(s)&&(n.class=Gs(s)),rn(l)&&(ou(l)&&!Pe(l)&&(l=Tn({},l)),n.style=js(l))}const a=vn(e)?1:Gg(e)?128:vb(e)?64:rn(e)?4:Re(e)?2:0;return Ht(e,n,t,o,r,a,i,!0)}function Tb(e){return e?ou(e)||ha in e?Tn({},e):e:null}function mt(e,n,t=!1){const{props:o,ref:r,patchFlag:i,children:a}=e,s=n?Et(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Iu(s),ref:n&&n.ref?t&&r?Pe(r)?r.concat(_i(n)):[r,_i(n)]:_i(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mt(e.ssContent),ssFallback:e.ssFallback&&mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Sn(e=" ",n=0){return ke(fa,null,e,n)}function kb(e="",n=!1){return n?(cn(),Yn(zn,null,e)):ke(zn,null,e)}function xt(e){return e==null||typeof e=="boolean"?ke(zn):Pe(e)?ke(Ye,null,e.slice()):typeof e=="object"?Ut(e):ke(fa,null,String(e))}function Ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mt(e)}function ul(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(Pe(n))t=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),ul(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(ha in n)?n._ctx=Mn:r===3&&Mn&&(Mn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else Re(n)?(n={default:n,_ctx:Mn},t=32):(n=String(n),o&64?(t=16,n=[Sn(n)]):t=8);e.children=n,e.shapeFlag|=t}function Et(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=Gs([n.class,o.class]));else if(r==="style")n.style=js([n.style,o.style]);else if(oa(r)){const i=n[r],a=o[r];a&&i!==a&&!(Pe(i)&&i.includes(a))&&(n[r]=i?[].concat(i,a):a)}else r!==""&&(n[r]=o[r])}return n}function vt(e,n,t,o=null){lt(e,n,7,[t,o])}const Pb=Du();let Ab=0;function $b(e,n,t){const o=e.type,r=(n?n.appContext:e.appContext)||Pb,i={uid:Ab++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ku(o,r),emitsOptions:fu(o,r),emit:null,emitted:null,propsDefaults:tn,inheritAttrs:o.inheritAttrs,ctx:tn,data:tn,props:tn,attrs:tn,slots:tn,refs:tn,setupState:tn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Og.bind(null,i),e.ce&&e.ce(i),i}let An=null;const io=()=>An||Mn,nr=e=>{An=e,e.scope.on()},Po=()=>{An&&An.scope.off(),An=null};function Eu(e){return e.vnode.shapeFlag&4}let qr=!1;function Db(e,n=!1){qr=n;const{props:t,children:o}=e.vnode,r=Eu(e);lb(e,t,r,n),ub(e,o);const i=r?Rb(e,n):void 0;return qr=!1,i}function Rb(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=eo(new Proxy(e.ctx,tb));const{setup:o}=t;if(o){const r=e.setupContext=o.length>1?Ib(e):null;nr(e),rr();const i=Xt(o,e,0,[e.props,r]);if(ir(),Po(),Wd(i)){if(i.then(Po,Po),n)return i.then(a=>{rc(e,a,n)}).catch(a=>{sa(a,e,0)});e.asyncDep=i}else rc(e,i,n)}else _u(e,n)}function rc(e,n,t){Re(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:rn(n)&&(e.setupState=au(n)),_u(e,t)}let ic;function _u(e,n,t){const o=e.type;if(!e.render){if(!n&&ic&&!o.render){const r=o.template||ll(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:s,compilerOptions:l}=o,c=Tn(Tn({isCustomElement:i,delimiters:s},a),l);o.render=ic(r,c)}}e.render=o.render||pt}nr(e),rr(),ob(e),ir(),Po()}function Hb(e){return new Proxy(e.attrs,{get(n,t){return tt(e,"get","$attrs"),n[t]}})}function Ib(e){const n=o=>{e.exposed=o||{}};let t;return{get attrs(){return t||(t=Hb(e))},slots:e.slots,emit:e.emit,expose:n}}function pa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(au(eo(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Hr)return Hr[t](e)},has(n,t){return t in n||t in Hr}}))}function Eb(e){return Re(e)&&"__vccOpts"in e}const J=(e,n)=>Eg(e,n,qr);function P(e,n,t){const o=arguments.length;return o===2?rn(n)&&!Pe(n)?Ur(n)?ke(e,null,[n]):ke(e,n):ke(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&Ur(t)&&(t=[t]),ke(e,n,t))}const _b=Symbol(""),Mb=()=>je(_b),Bb="3.2.45",zb="http://www.w3.org/2000/svg",yo=typeof document<"u"?document:null,ac=yo&&yo.createElement("template"),Lb={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const r=n?yo.createElementNS(zb,e):yo.createElement(e,t?{is:t}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>yo.createTextNode(e),createComment:e=>yo.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yo.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,r,i){const a=t?t.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{ac.innerHTML=o?`<svg>${e}</svg>`:e;const s=ac.content;if(o){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Ob(e,n,t){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function Fb(e,n,t){const o=e.style,r=vn(t);if(t&&!r){for(const i in t)Ss(o,i,t[i]);if(n&&!vn(n))for(const i in n)t[i]==null&&Ss(o,i,"")}else{const i=o.display;r?n!==t&&(o.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const sc=/\s*!important$/;function Ss(e,n,t){if(Pe(t))t.forEach(o=>Ss(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=Wb(e,n);sc.test(t)?e.setProperty(or(o),t.replace(sc,""),"important"):e[o]=t}}const lc=["Webkit","Moz","ms"],ja={};function Wb(e,n){const t=ja[n];if(t)return t;let o=Yo(n);if(o!=="filter"&&o in e)return ja[n]=o;o=Gd(o);for(let r=0;r<lc.length;r++){const i=lc[r]+o;if(i in e)return ja[n]=i}return n}const cc="http://www.w3.org/1999/xlink";function Nb(e,n,t,o,r){if(o&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(cc,n.slice(6,n.length)):e.setAttributeNS(cc,n,t);else{const i=Gm(n);t==null||i&&!Ld(t)?e.removeAttribute(n):e.setAttribute(n,i?"":t)}}function jb(e,n,t,o,r,i,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,i),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let s=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Ld(t):t==null&&l==="string"?(t="",s=!0):l==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(n)}function Gb(e,n,t,o){e.addEventListener(n,t,o)}function Vb(e,n,t,o){e.removeEventListener(n,t,o)}function Kb(e,n,t,o,r=null){const i=e._vei||(e._vei={}),a=i[n];if(o&&a)a.value=o;else{const[s,l]=Ub(n);if(o){const c=i[n]=Jb(o,r);Gb(e,s,c,l)}else a&&(Vb(e,s,a,l),i[n]=void 0)}}const dc=/(?:Once|Passive|Capture)$/;function Ub(e){let n;if(dc.test(e)){n={};let o;for(;o=e.match(dc);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):or(e.slice(2)),n]}let Ga=0;const qb=Promise.resolve(),Zb=()=>Ga||(qb.then(()=>Ga=0),Ga=Date.now());function Jb(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;lt(Xb(o,t.value),n,5,[o])};return t.value=e,t.attached=Zb(),t}function Xb(e,n){if(Pe(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const uc=/^on[a-z]/,Yb=(e,n,t,o,r=!1,i,a,s,l)=>{n==="class"?Ob(e,o,r):n==="style"?Fb(e,t,o):oa(n)?Vs(n)||Kb(e,n,t,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Qb(e,n,o,r))?jb(e,n,o,i,a,s,l):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),Nb(e,n,o,r))};function Qb(e,n,t,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&uc.test(n)&&Re(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||uc.test(n)&&vn(t)?!1:n in e}const jt="transition",xr="animation",no=(e,{slots:n})=>P(gu,Bu(e),n);no.displayName="Transition";const Mu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ev=no.props=Tn({},gu.props,Mu),ho=(e,n=[])=>{Pe(e)?e.forEach(t=>t(...n)):e&&e(...n)},fc=e=>e?Pe(e)?e.some(n=>n.length>1):e.length>1:!1;function Bu(e){const n={};for(const E in e)E in Mu||(n[E]=e[E]);if(e.css===!1)return n;const{name:t="v",type:o,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:c=a,appearToClass:d=s,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:b=`${t}-leave-to`}=e,h=nv(r),y=h&&h[0],v=h&&h[1],{onBeforeEnter:m,onEnter:w,onEnterCancelled:_,onLeave:k,onLeaveCancelled:R,onBeforeAppear:M=m,onAppear:g=w,onAppearCancelled:C=_}=n,D=(E,Y,L)=>{Kt(E,Y?d:s),Kt(E,Y?c:a),L&&L()},I=(E,Y)=>{E._isLeaving=!1,Kt(E,f),Kt(E,b),Kt(E,p),Y&&Y()},Z=E=>(Y,L)=>{const B=E?g:w,ie=()=>D(Y,E,L);ho(B,[Y,ie]),hc(()=>{Kt(Y,E?l:i),At(Y,E?d:s),fc(B)||pc(Y,o,y,ie)})};return Tn(n,{onBeforeEnter(E){ho(m,[E]),At(E,i),At(E,a)},onBeforeAppear(E){ho(M,[E]),At(E,l),At(E,c)},onEnter:Z(!1),onAppear:Z(!0),onLeave(E,Y){E._isLeaving=!0;const L=()=>I(E,Y);At(E,f),Lu(),At(E,p),hc(()=>{E._isLeaving&&(Kt(E,f),At(E,b),fc(k)||pc(E,o,v,L))}),ho(k,[E,L])},onEnterCancelled(E){D(E,!1),ho(_,[E])},onAppearCancelled(E){D(E,!0),ho(C,[E])},onLeaveCancelled(E){I(E),ho(R,[E])}})}function nv(e){if(e==null)return null;if(rn(e))return[Va(e.enter),Va(e.leave)];{const n=Va(e);return[n,n]}}function Va(e){return Zs(e)}function At(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function Kt(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function hc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let tv=0;function pc(e,n,t,o){const r=e._endId=++tv,i=()=>{r===e._endId&&o()};if(t)return setTimeout(i,t);const{type:a,timeout:s,propCount:l}=zu(e,n);if(!a)return o();const c=a+"end";let d=0;const f=()=>{e.removeEventListener(c,p),i()},p=b=>{b.target===e&&++d>=l&&f()};setTimeout(()=>{d<l&&f()},s+1),e.addEventListener(c,p)}function zu(e,n){const t=window.getComputedStyle(e),o=h=>(t[h]||"").split(", "),r=o(`${jt}Delay`),i=o(`${jt}Duration`),a=mc(r,i),s=o(`${xr}Delay`),l=o(`${xr}Duration`),c=mc(s,l);let d=null,f=0,p=0;n===jt?a>0&&(d=jt,f=a,p=i.length):n===xr?c>0&&(d=xr,f=c,p=l.length):(f=Math.max(a,c),d=f>0?a>c?jt:xr:null,p=d?d===jt?i.length:l.length:0);const b=d===jt&&/\b(transform|all)(,|$)/.test(o(`${jt}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:b}}function mc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,o)=>gc(t)+gc(e[o])))}function gc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Lu(){return document.body.offsetHeight}const Ou=new WeakMap,Fu=new WeakMap,ov={name:"TransitionGroup",props:Tn({},ev,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=io(),o=mu();let r,i;return xu(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!lv(r[0].el,t.vnode.el,a))return;r.forEach(iv),r.forEach(av);const s=r.filter(sv);Lu(),s.forEach(l=>{const c=l.el,d=c.style;At(c,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=c._moveCb=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Kt(c,a))};c.addEventListener("transitionend",f)})}),()=>{const a=Ge(e),s=Bu(a);let l=a.tag||Ye;r=i,i=n.default?al(n.default()):[];for(let c=0;c<i.length;c++){const d=i[c];d.key!=null&&Vr(d,Gr(d,s,o,t))}if(r)for(let c=0;c<r.length;c++){const d=r[c];Vr(d,Gr(d,s,o,t)),Ou.set(d,d.el.getBoundingClientRect())}return ke(l,null,i)}}},rv=ov;function iv(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function av(e){Fu.set(e,e.el.getBoundingClientRect())}function sv(e){const n=Ou.get(e),t=Fu.get(e),o=n.left-t.left,r=n.top-t.top;if(o||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${o}px,${r}px)`,i.transitionDuration="0s",e}}function lv(e,n,t){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),t.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(o);const{hasTransform:i}=zu(o);return r.removeChild(o),i}const fl={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Cr(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:o}){!n!=!t&&(o?n?(o.beforeEnter(e),Cr(e,!0),o.enter(e)):o.leave(e,()=>{Cr(e,!1)}):Cr(e,n))},beforeUnmount(e,{value:n}){Cr(e,n)}};function Cr(e,n){e.style.display=n?e._vod:"none"}const cv=Tn({patchProp:Yb},Lb);let bc;function dv(){return bc||(bc=mb(cv))}const uv=(...e)=>{const n=dv().createApp(...e),{mount:t}=n;return n.mount=o=>{const r=fv(o);if(!r)return;const i=n._component;!Re(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function fv(e){return vn(e)?document.querySelector(e):e}let Ni=[];const Wu=new WeakMap;function hv(){Ni.forEach(e=>e(...Wu.get(e))),Ni=[]}function Nu(e,...n){Wu.set(e,n),!Ni.includes(e)&&Ni.push(e)===1&&requestAnimationFrame(hv)}function vc(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function ji(e){return e.composedPath()[0]||null}function pv(e){if(typeof e=="number")return{"":e.toString()};const n={};return e.split(/ +/).forEach(t=>{if(t==="")return;const[o,r]=t.split(":");r===void 0?n[""]=o:n[o]=r}),n}function Sr(e,n){var t;if(e==null)return;const o=pv(e);if(n===void 0)return o[""];if(typeof n=="string")return(t=o[n])!==null&&t!==void 0?t:o[""];if(Array.isArray(n)){for(let r=n.length-1;r>=0;--r){const i=n[r];if(i in o)return o[i]}return o[""]}else{let r,i=-1;return Object.keys(o).forEach(a=>{const s=Number(a);!Number.isNaN(s)&&n>=s&&s>=i&&(i=s,r=o[a])}),r}}function yc(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function Ko(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function mv(e,n){const t=e.trim().split(/\s+/g),o={top:t[0]};switch(t.length){case 1:o.right=t[0],o.bottom=t[0],o.left=t[0];break;case 2:o.right=t[1],o.left=t[1],o.bottom=t[0];break;case 3:o.right=t[1],o.bottom=t[2],o.left=t[1];break;case 4:o.right=t[1],o.bottom=t[2],o.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?o:o[n]}function gv(e,n){const[t,o]=e.split(" ");return n?n==="row"?t:o:{row:t,col:o||t}}const xc={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},sr="^\\s*",lr="\\s*$",Co="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",So="([0-9A-Fa-f])",wo="([0-9A-Fa-f]{2})",bv=new RegExp(`${sr}rgb\\s*\\(${Co},${Co},${Co}\\)${lr}`),vv=new RegExp(`${sr}rgba\\s*\\(${Co},${Co},${Co},${Co}\\)${lr}`),yv=new RegExp(`${sr}#${So}${So}${So}${lr}`),xv=new RegExp(`${sr}#${wo}${wo}${wo}${lr}`),Cv=new RegExp(`${sr}#${So}${So}${So}${So}${lr}`),Sv=new RegExp(`${sr}#${wo}${wo}${wo}${wo}${lr}`);function Un(e){return parseInt(e,16)}function _t(e){try{let n;if(n=xv.exec(e))return[Un(n[1]),Un(n[2]),Un(n[3]),1];if(n=bv.exec(e))return[In(n[1]),In(n[5]),In(n[9]),1];if(n=vv.exec(e))return[In(n[1]),In(n[5]),In(n[9]),_r(n[13])];if(n=yv.exec(e))return[Un(n[1]+n[1]),Un(n[2]+n[2]),Un(n[3]+n[3]),1];if(n=Sv.exec(e))return[Un(n[1]),Un(n[2]),Un(n[3]),_r(Un(n[4])/255)];if(n=Cv.exec(e))return[Un(n[1]+n[1]),Un(n[2]+n[2]),Un(n[3]+n[3]),_r(Un(n[4]+n[4])/255)];if(e in xc)return _t(xc[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function wv(e){return e>1?1:e<0?0:e}function ws(e,n,t,o){return`rgba(${In(e)}, ${In(n)}, ${In(t)}, ${wv(o)})`}function Ka(e,n,t,o,r){return In((e*n*(1-o)+t*o)/r)}function pe(e,n){Array.isArray(e)||(e=_t(e)),Array.isArray(n)||(n=_t(n));const t=e[3],o=n[3],r=_r(t+o-t*o);return ws(Ka(e[0],t,n[0],o,r),Ka(e[1],t,n[1],o,r),Ka(e[2],t,n[2],o,r),r)}function W(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:_t(e);return n.alpha?ws(t,o,r,n.alpha):ws(t,o,r,i)}function hn(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:_t(e),{lightness:a=1,alpha:s=1}=n;return Tv([t*a,o*a,r*a,i*s])}function _r(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function In(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function Tv(e){const[n,t,o]=e;return 3 in e?`rgba(${In(n)}, ${In(t)}, ${In(o)}, ${_r(e[3])})`:`rgba(${In(n)}, ${In(t)}, ${In(o)}, 1)`}function kv(e=8){return Math.random().toString(16).slice(2,2+e)}function ju(e,n="default",t=[]){const r=e.$slots[n];return r===void 0?t:r()}function Gu(e,n=[],t){const o={};return n.forEach(r=>{o[r]=e[r]}),Object.assign(o,t)}function Zr(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(Sn(String(o)));return}if(Array.isArray(o)){Zr(o,n,t);return}if(o.type===Ye){if(o.children===null)return;Array.isArray(o.children)&&Zr(o.children,n,t)}else o.type!==zn&&t.push(o)}}),t}function ln(e,...n){if(Array.isArray(e))e.forEach(t=>ln(t,...n));else return e(...n)}const Gi=(e,...n)=>typeof e=="function"?e(...n):typeof e=="string"?Sn(e):typeof e=="number"?Sn(String(e)):null;function Jr(e,n){console.error(`[naive/${e}]: ${n}`)}function Pv(e,n){throw new Error(`[naive/${e}]: ${n}`)}function Cc(e,n="default",t=void 0){const o=e[n];if(!o)return Jr("getFirstSlotVNode",`slot[${n}] is empty`),null;const r=Zr(o(t));return r.length===1?r[0]:(Jr("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function Av(e){return n=>{n?e.value=n.$el:e.value=null}}function oi(e){return e.some(n=>Ur(n)?!(n.type===zn||n.type===Ye&&!oi(n.children)):!0)?e:null}function Mr(e,n){return e&&oi(e())||n()}function $v(e,n,t){return e&&oi(e(n))||t(n)}function Rt(e,n){const t=e&&oi(e());return n(t||null)}function Ts(e){return!(e&&oi(e()))}function Dv(e){var n;const t=(n=e.dirs)===null||n===void 0?void 0:n.find(({dir:o})=>o===fl);return!!(t&&t.value===!1)}const Sc=Te({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),Rv=/^(\d|\.)+$/,wc=/(\d|\.)+/;function Mi(e,{c:n=1,offset:t=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+t)*n;return r===0?"0":`${r}px`}else if(typeof e=="string")if(Rv.test(e)){const r=(Number(e)+t)*n;return o?r===0?"0":`${r}px`:`${r}`}else{const r=wc.exec(e);return r?e.replace(wc,String((Number(r[0])+t)*n)):e}return e}function Tc(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function Hv(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const Vu=/\s*,(?![^(]*\))\s*/g,Iv=/\s+/g;function Ev(e,n){const t=[];return n.split(Vu).forEach(o=>{let r=Hv(o);if(r){if(r===1){e.forEach(a=>{t.push(o.replace("&",a))});return}}else{e.forEach(a=>{t.push((a&&a+" ")+o)});return}let i=[o];for(;r--;){const a=[];i.forEach(s=>{e.forEach(l=>{a.push(s.replace("&",l))})}),i=a}i.forEach(a=>t.push(a))}),t}function _v(e,n){const t=[];return n.split(Vu).forEach(o=>{e.forEach(r=>{t.push((r&&r+" ")+o)})}),t}function Mv(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=Ev(n,t):n=_v(n,t))}),n.join(", ").replace(Iv," ")}function kc(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function ma(e){return document.querySelector(`style[cssr-id="${e}"]`)}function Bv(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function Si(e){return e?/^\s*@(s|m)/.test(e):!1}const zv=/[A-Z]/g;function Ku(e){return e.replace(zv,n=>"-"+n.toLowerCase())}function Lv(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${Ku(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function Ov(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function Pc(e,n,t,o){if(!n)return"";const r=Ov(n,t,o);if(!r)return"";if(typeof r=="string")return`${e} {
${r}
}`;const i=Object.keys(r);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return i.forEach(s=>{const l=r[s];if(s==="raw"){a.push(`
`+l+`
`);return}s=Ku(s),l!=null&&a.push(`  ${s}${Lv(l)}`)}),e&&a.push("}"),a.join(`
`)}function ks(e,n,t){e&&e.forEach(o=>{if(Array.isArray(o))ks(o,n,t);else if(typeof o=="function"){const r=o(n);Array.isArray(r)?ks(r,n,t):r&&t(r)}else o&&t(o)})}function Uu(e,n,t,o,r,i){const a=e.$;let s="";if(!a||typeof a=="string")Si(a)?s=a:n.push(a);else if(typeof a=="function"){const d=a({context:o.context,props:r});Si(d)?s=d:n.push(d)}else if(a.before&&a.before(o.context),!a.$||typeof a.$=="string")Si(a.$)?s=a.$:n.push(a.$);else if(a.$){const d=a.$({context:o.context,props:r});Si(d)?s=d:n.push(d)}const l=Mv(n),c=Pc(l,e.props,o,r);s?(t.push(`${s} {`),i&&c&&i.insertRule(`${s} {
${c}
}
`)):(i&&c&&i.insertRule(c),!i&&c.length&&t.push(c)),e.children&&ks(e.children,{context:o.context,props:r},d=>{if(typeof d=="string"){const f=Pc(l,{raw:d},o,r);i?i.insertRule(f):t.push(f)}else Uu(d,n,t,o,r,i)}),n.pop(),s&&t.push("}"),a&&a.after&&a.after(o.context)}function qu(e,n,t,o=!1){const r=[];return Uu(e,[],r,n,t,o?e.instance.__styleSheet:void 0),o?"":r.join(`

`)}function Xr(e){for(var n=0,t,o=0,r=e.length;r>=4;++o,r-=4)t=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(r){case 3:n^=(e.charCodeAt(o+2)&255)<<16;case 2:n^=(e.charCodeAt(o+1)&255)<<8;case 1:n^=e.charCodeAt(o)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function Fv(e,n,t){const{els:o}=n;if(t===void 0)o.forEach(kc),n.els=[];else{const r=ma(t);r&&o.includes(r)&&(kc(r),n.els=o.filter(i=>i!==r))}}function Ac(e,n){e.push(n)}function Wv(e,n,t,o,r,i,a,s,l){if(i&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const p=window.__cssrContext;p[t]||(p[t]=!0,qu(n,e,o,i));return}let c;if(t===void 0&&(c=n.render(o),t=Xr(c)),l){l.adapter(t,c??n.render(o));return}const d=ma(t);if(d!==null&&!a)return d;const f=d??Bv(t);if(c===void 0&&(c=n.render(o)),f.textContent=c,d!==null)return d;if(s){const p=document.head.querySelector(`meta[name="${s}"]`);if(p)return document.head.insertBefore(f,p),Ac(n.els,f),f}return r?document.head.insertBefore(f,document.head.querySelector("style, link")):document.head.appendChild(f),Ac(n.els,f),f}function Nv(e){return qu(this,this.instance,e)}function jv(e={}){const{id:n,ssr:t,props:o,head:r=!1,silent:i=!1,force:a=!1,anchorMetaName:s}=e;return Wv(this.instance,this,n,o,r,i,a,s,t)}function Gv(e={}){const{id:n}=e;Fv(this.instance,this,n)}const wi=function(e,n,t,o){return{instance:e,$:n,props:t,children:o,els:[],render:Nv,mount:jv,unmount:Gv}},Vv=function(e,n,t,o){return Array.isArray(n)?wi(e,{$:null},null,n):Array.isArray(t)?wi(e,n,null,t):Array.isArray(o)?wi(e,n,t,o):wi(e,n,t,null)};function Zu(e={}){let n=null;const t={c:(...o)=>Vv(t,...o),use:(o,...r)=>o.install(t,...r),find:ma,context:{},config:e,get __styleSheet(){if(!n){const o=document.createElement("style");return document.head.appendChild(o),n=document.styleSheets[document.styleSheets.length-1],n}return n}};return t}function Kv(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return ma(e)!==null}function Uv(e){let n=".",t="__",o="--",r;if(e){let h=e.blockPrefix;h&&(n=h),h=e.elementPrefix,h&&(t=h),h=e.modifierPrefix,h&&(o=h)}const i={install(h){r=h.c;const y=h.context;y.bem={},y.bem.b=null,y.bem.els=null}};function a(h){let y,v;return{before(m){y=m.bem.b,v=m.bem.els,m.bem.els=null},after(m){m.bem.b=y,m.bem.els=v},$({context:m,props:w}){return h=typeof h=="string"?h:h({context:m,props:w}),m.bem.b=h,`${(w==null?void 0:w.bPrefix)||n}${m.bem.b}`}}}function s(h){let y;return{before(v){y=v.bem.els},after(v){v.bem.els=y},$({context:v,props:m}){return h=typeof h=="string"?h:h({context:v,props:m}),v.bem.els=h.split(",").map(w=>w.trim()),v.bem.els.map(w=>`${(m==null?void 0:m.bPrefix)||n}${v.bem.b}${t}${w}`).join(", ")}}}function l(h){return{$({context:y,props:v}){h=typeof h=="string"?h:h({context:y,props:v});const m=h.split(",").map(k=>k.trim());function w(k){return m.map(R=>`&${(v==null?void 0:v.bPrefix)||n}${y.bem.b}${k!==void 0?`${t}${k}`:""}${o}${R}`).join(", ")}const _=y.bem.els;return _!==null?w(_[0]):w()}}}function c(h){return{$({context:y,props:v}){h=typeof h=="string"?h:h({context:y,props:v});const m=y.bem.els;return`&:not(${(v==null?void 0:v.bPrefix)||n}${y.bem.b}${m!==null&&m.length>0?`${t}${m[0]}`:""}${o}${h})`}}}return Object.assign(i,{cB:(...h)=>r(a(h[0]),h[1],h[2]),cE:(...h)=>r(s(h[0]),h[1],h[2]),cM:(...h)=>r(l(h[0]),h[1],h[2]),cNotM:(...h)=>r(c(h[0]),h[1],h[2])}),i}function ye(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}ye("abc","def");const qv="n",Zv=`.${qv}-`,Jv="__",Xv="--",Ju=Zu(),Xu=Uv({blockPrefix:Zv,elementPrefix:Jv,modifierPrefix:Xv});Ju.use(Xu);const{c:ce,find:aE}=Ju,{cB:be,cE:ne,cM:ve,cNotM:_n}=Xu,Yv=(...e)=>ce(">",[be(...e)]);let Ua;function Qv(){return Ua===void 0&&(Ua=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Ua}const cr=typeof document<"u"&&typeof window<"u";function e0(e,n,t){if(!n)return e;const o=se(e.value);let r=null;return Cn(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function n0(e){const n=se(!!e.value);if(n.value)return Qt(n);const t=Cn(e,o=>{o&&(n.value=!0,t())});return Qt(n)}function wn(e){const n=J(e),t=se(n.value);return Cn(n,o=>{t.value=o}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(o){e.set(o)}}}function Yu(){return io()!==null}const Qu=typeof window<"u";let Jo,Br;const t0=()=>{var e,n;Jo=Qu?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,Br=!1,Jo!==void 0?Jo.then(()=>{Br=!0}):Br=!0};t0();function o0(e){if(Br)return;let n=!1;gt(()=>{Br||Jo==null||Jo.then(()=>{n||e()})}),Ln(()=>{n=!0})}function Bi(e){return e.composedPath()[0]}const r0={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function i0(e,n,t){if(e==="mousemoveoutside"){const o=r=>{n.contains(Bi(r))||t(r)};return{mousemove:o,touchstart:o}}else if(e==="clickoutside"){let o=!1;const r=a=>{o=!n.contains(Bi(a))},i=a=>{o&&(n.contains(Bi(a))||t(a))};return{mousedown:r,mouseup:i,touchstart:r,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function ef(e,n,t){const o=r0[e];let r=o.get(n);r===void 0&&o.set(n,r=new WeakMap);let i=r.get(t);return i===void 0&&r.set(t,i=i0(e,n,t)),i}function a0(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=ef(e,n,t);return Object.keys(r).forEach(i=>{mn(i,document,r[i],o)}),!0}return!1}function s0(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=ef(e,n,t);return Object.keys(r).forEach(i=>{on(i,document,r[i],o)}),!0}return!1}function l0(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function o(){e.set(this,!0),n.set(this,!0)}function r(g,C,D){const I=g[C];return g[C]=function(){return D.apply(g,arguments),I.apply(g,arguments)},g}function i(g,C){g[C]=Event.prototype[C]}const a=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var g;return(g=a.get(this))!==null&&g!==void 0?g:null}function c(g,C){s!==void 0&&Object.defineProperty(g,"currentTarget",{configurable:!0,enumerable:!0,get:C??s.get})}const d={bubble:{},capture:{}},f={};function p(){const g=function(C){const{type:D,eventPhase:I,bubbles:Z}=C,E=Bi(C);if(I===2)return;const Y=I===1?"capture":"bubble";let L=E;const B=[];for(;L===null&&(L=window),B.push(L),L!==window;)L=L.parentNode||null;const ie=d.capture[D],N=d.bubble[D];if(r(C,"stopPropagation",t),r(C,"stopImmediatePropagation",o),c(C,l),Y==="capture"){if(ie===void 0)return;for(let re=B.length-1;re>=0&&!e.has(C);--re){const T=B[re],q=ie.get(T);if(q!==void 0){a.set(C,T);for(const $e of q){if(n.has(C))break;$e(C)}}if(re===0&&!Z&&N!==void 0){const $e=N.get(T);if($e!==void 0)for(const _e of $e){if(n.has(C))break;_e(C)}}}}else if(Y==="bubble"){if(N===void 0)return;for(let re=0;re<B.length&&!e.has(C);++re){const T=B[re],q=N.get(T);if(q!==void 0){a.set(C,T);for(const $e of q){if(n.has(C))break;$e(C)}}}}i(C,"stopPropagation"),i(C,"stopImmediatePropagation"),c(C)};return g.displayName="evtdUnifiedHandler",g}function b(){const g=function(C){const{type:D,eventPhase:I}=C;if(I!==2)return;const Z=f[D];Z!==void 0&&Z.forEach(E=>E(C))};return g.displayName="evtdUnifiedWindowEventHandler",g}const h=p(),y=b();function v(g,C){const D=d[g];return D[C]===void 0&&(D[C]=new Map,window.addEventListener(C,h,g==="capture")),D[C]}function m(g){return f[g]===void 0&&(f[g]=new Set,window.addEventListener(g,y)),f[g]}function w(g,C){let D=g.get(C);return D===void 0&&g.set(C,D=new Set),D}function _(g,C,D,I){const Z=d[C][D];if(Z!==void 0){const E=Z.get(g);if(E!==void 0&&E.has(I))return!0}return!1}function k(g,C){const D=f[g];return!!(D!==void 0&&D.has(C))}function R(g,C,D,I){let Z;if(typeof I=="object"&&I.once===!0?Z=ie=>{M(g,C,Z,I),D(ie)}:Z=D,a0(g,C,Z,I))return;const Y=I===!0||typeof I=="object"&&I.capture===!0?"capture":"bubble",L=v(Y,g),B=w(L,C);if(B.has(Z)||B.add(Z),C===window){const ie=m(g);ie.has(Z)||ie.add(Z)}}function M(g,C,D,I){if(s0(g,C,D,I))return;const E=I===!0||typeof I=="object"&&I.capture===!0,Y=E?"capture":"bubble",L=v(Y,g),B=w(L,C);if(C===window&&!_(C,E?"bubble":"capture",g,D)&&k(g,D)){const N=f[g];N.delete(D),N.size===0&&(window.removeEventListener(g,y),f[g]=void 0)}B.has(D)&&B.delete(D),B.size===0&&L.delete(C),L.size===0&&(window.removeEventListener(g,h,Y==="capture"),d[Y][g]=void 0)}return{on:R,off:M}}const{on:mn,off:on}=l0();let Ti=0;const c0=typeof window<"u"&&window.matchMedia!==void 0,Ao=se(null);let ut,To;function Vi(e){e.matches&&(Ao.value="dark")}function Ki(e){e.matches&&(Ao.value="light")}function d0(){ut=window.matchMedia("(prefers-color-scheme: dark)"),To=window.matchMedia("(prefers-color-scheme: light)"),ut.matches?Ao.value="dark":To.matches?Ao.value="light":Ao.value=null,ut.addEventListener?(ut.addEventListener("change",Vi),To.addEventListener("change",Ki)):ut.addListener&&(ut.addListener(Vi),To.addListener(Ki))}function u0(){"removeEventListener"in ut?(ut.removeEventListener("change",Vi),To.removeEventListener("change",Ki)):"removeListener"in ut&&(ut.removeListener(Vi),To.removeListener(Ki)),ut=void 0,To=void 0}let $c=!0;function f0(){return c0&&(Ti===0&&d0(),$c&&($c=Yu())&&(ar(()=>{Ti+=1}),Ln(()=>{Ti-=1,Ti===0&&u0()}))),Qt(Ao)}function hl(e,n){return Cn(e,t=>{t!==void 0&&(n.value=t)}),J(()=>e.value===void 0?n.value:e.value)}function pl(){const e=se(!1);return gt(()=>{e.value=!0}),Qt(e)}function nf(e,n){return J(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const h0=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function p0(){return h0}const m0={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function g0(e){return`(min-width: ${e}px)`}const wr={};function b0(e=m0){if(!Qu)return J(()=>[]);if(typeof window.matchMedia!="function")return J(()=>[]);const n=se({}),t=Object.keys(e),o=(r,i)=>{r.matches?n.value[i]=!0:n.value[i]=!1};return t.forEach(r=>{const i=e[r];let a,s;wr[i]===void 0?(a=window.matchMedia(g0(i)),a.addEventListener?a.addEventListener("change",l=>{s.forEach(c=>{c(l,r)})}):a.addListener&&a.addListener(l=>{s.forEach(c=>{c(l,r)})}),s=new Set,wr[i]={mql:a,cbs:s}):(a=wr[i].mql,s=wr[i].cbs),s.add(o),a.matches&&s.forEach(l=>{l(a,r)})}),Ln(()=>{t.forEach(r=>{const{cbs:i}=wr[e[r]];i.has(o)&&i.delete(o)})}),J(()=>{const{value:r}=n;return t.filter(i=>r[i])})}function v0(e={},n){const t=ti({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(c=>{if(c!==l.key)return;const d=o[c];if(typeof d=="function")d(l);else{const{stop:f=!1,prevent:p=!1}=d;f&&l.stopPropagation(),p&&l.preventDefault(),d.handler(l)}})},a=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==l.key)return;const d=r[c];if(typeof d=="function")d(l);else{const{stop:f=!1,prevent:p=!1}=d;f&&l.stopPropagation(),p&&l.preventDefault(),d.handler(l)}})},s=()=>{(n===void 0||n.value)&&(mn("keydown",document,i),mn("keyup",document,a)),n!==void 0&&Cn(n,l=>{l?(mn("keydown",document,i),mn("keyup",document,a)):(on("keydown",document,i),on("keyup",document,a))})};return Yu()?(ar(s),Ln(()=>{(n===void 0||n.value)&&(on("keydown",document,i),on("keyup",document,a))})):s(),Qt(t)}const y0="n-internal-select-menu-body",ml="n-modal-body",gl="n-drawer-body",ga="n-popover-body",tf="__disabled__";function tr(e){const n=je(ml,null),t=je(gl,null),o=je(ga,null),r=je(y0,null),i=se();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};gt(()=>{mn("fullscreenchange",document,a)}),Ln(()=>{on("fullscreenchange",document,a)})}return wn(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?tf:s===!0?i.value||"body":s:n!=null&&n.value?(a=n.value.$el)!==null&&a!==void 0?a:n.value:t!=null&&t.value?t.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:s??(i.value||"body")})}tr.tdkey=tf;tr.propTo={type:[String,Object,Boolean],default:void 0};function Ps(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return o()}function As(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(Sn(String(o)));return}if(Array.isArray(o)){As(o,n,t);return}if(o.type===Ye){if(o.children===null)return;Array.isArray(o.children)&&As(o.children,n,t)}else o.type!==zn&&t.push(o)}}),t}function Dc(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const r=As(o());if(r.length===1)return r[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let Gt=null;function of(){if(Gt===null&&(Gt=document.getElementById("v-binder-view-measurer"),Gt===null)){Gt=document.createElement("div"),Gt.id="v-binder-view-measurer";const{style:e}=Gt;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Gt)}return Gt.getBoundingClientRect()}function x0(e,n){const t=of();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function qa(e){const n=e.getBoundingClientRect(),t=of();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function C0(e){return e.nodeType===9?null:e.parentNode}function rf(e){if(e===null)return null;const n=C0(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:o,overflowY:r}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+r+o))return n}return rf(n)}const S0=Te({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;$n("VBinder",(n=io())===null||n===void 0?void 0:n.proxy);const t=je("VBinder",null),o=se(null),r=m=>{o.value=m,t&&e.syncTargetWithParent&&t.setTargetRef(m)};let i=[];const a=()=>{let m=o.value;for(;m=rf(m),m!==null;)i.push(m);for(const w of i)mn("scroll",w,f,!0)},s=()=>{for(const m of i)on("scroll",m,f,!0);i=[]},l=new Set,c=m=>{l.size===0&&a(),l.has(m)||l.add(m)},d=m=>{l.has(m)&&l.delete(m),l.size===0&&s()},f=()=>{Nu(p)},p=()=>{l.forEach(m=>m())},b=new Set,h=m=>{b.size===0&&mn("resize",window,v),b.has(m)||b.add(m)},y=m=>{b.has(m)&&b.delete(m),b.size===0&&on("resize",window,v)},v=()=>{b.forEach(m=>m())};return Ln(()=>{on("resize",window,v),s()}),{targetRef:o,setTargetRef:r,addScrollListener:c,removeScrollListener:d,addResizeListener:h,removeResizeListener:y}},render(){return Ps("binder",this.$slots)}}),af=S0,sf=Te({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=je("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?ua(Dc("follower",this.$slots),[[n]]):Dc("follower",this.$slots)}}),Wo="@@mmoContext",w0={mounted(e,{value:n}){e[Wo]={handler:void 0},typeof n=="function"&&(e[Wo].handler=n,mn("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[Wo];typeof n=="function"?t.handler?t.handler!==n&&(on("mousemoveoutside",e,t.handler),t.handler=n,mn("mousemoveoutside",e,n)):(e[Wo].handler=n,mn("mousemoveoutside",e,n)):t.handler&&(on("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[Wo];n&&on("mousemoveoutside",e,n),e[Wo].handler=void 0}},T0=w0,No="@@coContext",k0={mounted(e,{value:n,modifiers:t}){e[No]={handler:void 0},typeof n=="function"&&(e[No].handler=n,mn("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const o=e[No];typeof n=="function"?o.handler?o.handler!==n&&(on("clickoutside",e,o.handler,{capture:t.capture}),o.handler=n,mn("clickoutside",e,n,{capture:t.capture})):(e[No].handler=n,mn("clickoutside",e,n,{capture:t.capture})):o.handler&&(on("clickoutside",e,o.handler,{capture:t.capture}),o.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[No];t&&on("clickoutside",e,t,{capture:n.capture}),e[No].handler=void 0}},Rc=k0;function P0(e,n){console.error(`[vdirs/${e}]: ${n}`)}class A0{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:o}=this;if(t!==void 0){n.style.zIndex=`${t}`,o.delete(n);return}const{nextZIndex:r}=this;o.has(n)&&o.get(n)+1===this.nextZIndex||(n.style.zIndex=`${r}`,o.set(n,r),this.nextZIndex=r+1,this.squashState())}unregister(n,t){const{elementZIndex:o}=this;o.has(n)?o.delete(n):t===void 0&&P0("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,o)=>t[1]-o[1]),this.nextZIndex=2e3,n.forEach(t=>{const o=t[0],r=this.nextZIndex++;`${r}`!==o.style.zIndex&&(o.style.zIndex=`${r}`)})}}const Za=new A0,jo="@@ziContext",$0={mounted(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t;e[jo]={enabled:!!r,initialized:!1},r&&(Za.ensureZIndex(e,o),e[jo].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t,i=e[jo].enabled;r&&!i&&(Za.ensureZIndex(e,o),e[jo].initialized=!0),e[jo].enabled=!!r},unmounted(e,n){if(!e[jo].initialized)return;const{value:t={}}=n,{zIndex:o}=t;Za.unregister(e,o)}},lf=$0,cf=Symbol("@css-render/vue3-ssr");function D0(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function R0(e,n){const t=je(cf,null);if(t===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:o,ids:r}=t;r.has(e)||o!==null&&(r.add(e),o.push(D0(e,n)))}const H0=typeof document<"u";function ri(){if(H0)return;const e=je(cf,null);if(e!==null)return{adapter:R0,context:e}}function Hc(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c:ki}=Zu(),I0="vueuc-style";function Ic(e){return typeof e=="string"?document.querySelector(e):e()}const E0=Te({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:n0(Qe(e,"show")),mergedTo:J(()=>{const{to:n}=e;return n??"body"})}},render(){return this.showTeleport?this.disabled?Ps("lazy-teleport",this.$slots):P(Cb,{disabled:this.disabled,to:this.mergedTo},Ps("lazy-teleport",this.$slots)):null}}),Pi={top:"bottom",bottom:"top",left:"right",right:"left"},Ec={start:"end",center:"center",end:"start"},Ja={top:"height",bottom:"height",left:"width",right:"width"},_0={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},M0={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},B0={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},_c={top:!0,bottom:!1,left:!0,right:!1},Mc={top:"end",bottom:"start",left:"end",right:"start"};function z0(e,n,t,o,r,i){if(!r||i)return{placement:e,top:0,left:0};const[a,s]=e.split("-");let l=s??"center",c={top:0,left:0};const d=(b,h,y)=>{let v=0,m=0;const w=t[b]-n[h]-n[b];return w>0&&o&&(y?m=_c[h]?w:-w:v=_c[h]?w:-w),{left:v,top:m}},f=a==="left"||a==="right";if(l!=="center"){const b=B0[e],h=Pi[b],y=Ja[b];if(t[y]>n[y]){if(n[b]+n[y]<t[y]){const v=(t[y]-n[y])/2;n[b]<v||n[h]<v?n[b]<n[h]?(l=Ec[s],c=d(y,h,f)):c=d(y,b,f):l="center"}}else t[y]<n[y]&&n[h]<0&&n[b]>n[h]&&(l=Ec[s])}else{const b=a==="bottom"||a==="top"?"left":"top",h=Pi[b],y=Ja[b],v=(t[y]-n[y])/2;(n[b]<v||n[h]<v)&&(n[b]>n[h]?(l=Mc[b],c=d(y,b,f)):(l=Mc[h],c=d(y,h,f)))}let p=a;return n[a]<t[Ja[a]]&&n[a]<n[Pi[a]]&&(p=Pi[a]),{placement:l!=="center"?`${p}-${l}`:p,left:c.left,top:c.top}}function L0(e,n){return n?M0[e]:_0[e]}function O0(e,n,t,o,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}const F0=ki([ki(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ki(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ki("> *",{pointerEvents:"all"})])]),df=Te({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=je("VBinder"),t=wn(()=>e.enabled!==void 0?e.enabled:e.show),o=se(null),r=se(null),i=()=>{const{syncTrigger:p}=e;p.includes("scroll")&&n.addScrollListener(l),p.includes("resize")&&n.addResizeListener(l)},a=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};gt(()=>{t.value&&(l(),i())});const s=ri();F0.mount({id:"vueuc/binder",head:!0,anchorMetaName:I0,ssr:s}),Ln(()=>{a()}),o0(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const p=o.value;if(p===null)return;const b=n.targetRef,{x:h,y,overlap:v}=e,m=h!==void 0&&y!==void 0?x0(h,y):qa(b);p.style.setProperty("--v-target-width",`${Math.round(m.width)}px`),p.style.setProperty("--v-target-height",`${Math.round(m.height)}px`);const{width:w,minWidth:_,placement:k,internalShift:R,flip:M}=e;p.setAttribute("v-placement",k),v?p.setAttribute("v-overlap",""):p.removeAttribute("v-overlap");const{style:g}=p;w==="target"?g.width=`${m.width}px`:w!==void 0?g.width=w:g.width="",_==="target"?g.minWidth=`${m.width}px`:_!==void 0?g.minWidth=_:g.minWidth="";const C=qa(p),D=qa(r.value),{left:I,top:Z,placement:E}=z0(k,m,C,R,M,v),Y=L0(E,v),{left:L,top:B,transform:ie}=O0(E,D,m,Z,I,v);p.setAttribute("v-placement",E),p.style.setProperty("--v-offset-left",`${Math.round(I)}px`),p.style.setProperty("--v-offset-top",`${Math.round(Z)}px`),p.style.transform=`translateX(${L}) translateY(${B}) ${ie}`,p.style.setProperty("--v-transform-origin",Y),p.style.transformOrigin=Y};Cn(t,p=>{p?(i(),c()):a()});const c=()=>{er().then(l).catch(p=>console.error(p))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(p=>{Cn(Qe(e,p),l)}),["teleportDisabled"].forEach(p=>{Cn(Qe(e,p),c)}),Cn(Qe(e,"syncTrigger"),p=>{p.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),p.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const d=pl(),f=wn(()=>{const{to:p}=e;if(p!==void 0)return p;d.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:r,followerRef:o,mergedTo:f,syncPosition:l}},render(){return P(E0,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=P("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[P("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?ua(t,[[lf,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var $o=[],W0=function(){return $o.some(function(e){return e.activeTargets.length>0})},N0=function(){return $o.some(function(e){return e.skippedTargets.length>0})},Bc="ResizeObserver loop completed with undelivered notifications.",j0=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Bc}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Bc),window.dispatchEvent(e)},Yr;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Yr||(Yr={}));var Do=function(e){return Object.freeze(e)},G0=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,Do(this)}return e}(),uf=function(){function e(n,t,o,r){return this.x=n,this.y=t,this.width=o,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Do(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,o=n.y,r=n.top,i=n.right,a=n.bottom,s=n.left,l=n.width,c=n.height;return{x:t,y:o,top:r,right:i,bottom:a,left:s,width:l,height:c}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),bl=function(e){return e instanceof SVGElement&&"getBBox"in e},ff=function(e){if(bl(e)){var n=e.getBBox(),t=n.width,o=n.height;return!t&&!o}var r=e,i=r.offsetWidth,a=r.offsetHeight;return!(i||a||e.getClientRects().length)},zc=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},V0=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},zr=typeof window<"u"?window:{},Ai=new WeakMap,Lc=/auto|scroll/,K0=/^tb|vertical/,U0=/msie|trident/i.test(zr.navigator&&zr.navigator.userAgent),yt=function(e){return parseFloat(e||"0")},Xo=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new G0((t?n:e)||0,(t?e:n)||0)},Oc=Do({devicePixelContentBoxSize:Xo(),borderBoxSize:Xo(),contentBoxSize:Xo(),contentRect:new uf(0,0,0,0)}),hf=function(e,n){if(n===void 0&&(n=!1),Ai.has(e)&&!n)return Ai.get(e);if(ff(e))return Ai.set(e,Oc),Oc;var t=getComputedStyle(e),o=bl(e)&&e.ownerSVGElement&&e.getBBox(),r=!U0&&t.boxSizing==="border-box",i=K0.test(t.writingMode||""),a=!o&&Lc.test(t.overflowY||""),s=!o&&Lc.test(t.overflowX||""),l=o?0:yt(t.paddingTop),c=o?0:yt(t.paddingRight),d=o?0:yt(t.paddingBottom),f=o?0:yt(t.paddingLeft),p=o?0:yt(t.borderTopWidth),b=o?0:yt(t.borderRightWidth),h=o?0:yt(t.borderBottomWidth),y=o?0:yt(t.borderLeftWidth),v=f+c,m=l+d,w=y+b,_=p+h,k=s?e.offsetHeight-_-e.clientHeight:0,R=a?e.offsetWidth-w-e.clientWidth:0,M=r?v+w:0,g=r?m+_:0,C=o?o.width:yt(t.width)-M-R,D=o?o.height:yt(t.height)-g-k,I=C+v+R+w,Z=D+m+k+_,E=Do({devicePixelContentBoxSize:Xo(Math.round(C*devicePixelRatio),Math.round(D*devicePixelRatio),i),borderBoxSize:Xo(I,Z,i),contentBoxSize:Xo(C,D,i),contentRect:new uf(f,l,C,D)});return Ai.set(e,E),E},pf=function(e,n,t){var o=hf(e,t),r=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(n){case Yr.DEVICE_PIXEL_CONTENT_BOX:return a;case Yr.BORDER_BOX:return r;default:return i}},q0=function(){function e(n){var t=hf(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=Do([t.borderBoxSize]),this.contentBoxSize=Do([t.contentBoxSize]),this.devicePixelContentBoxSize=Do([t.devicePixelContentBoxSize])}return e}(),mf=function(e){if(ff(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},Z0=function(){var e=1/0,n=[];$o.forEach(function(a){if(a.activeTargets.length!==0){var s=[];a.activeTargets.forEach(function(c){var d=new q0(c.target),f=mf(c.target);s.push(d),c.lastReportedSize=pf(c.target,c.observedBox),f<e&&(e=f)}),n.push(function(){a.callback.call(a.observer,s,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var t=0,o=n;t<o.length;t++){var r=o[t];r()}return e},Fc=function(e){$o.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(mf(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},J0=function(){var e=0;for(Fc(e);W0();)e=Z0(),Fc(e);return N0()&&j0(),e>0},Xa,gf=[],X0=function(){return gf.splice(0).forEach(function(e){return e()})},Y0=function(e){if(!Xa){var n=0,t=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return X0()}).observe(t,o),Xa=function(){t.textContent="".concat(n?n--:n++)}}gf.push(e),Xa()},Q0=function(e){Y0(function(){requestAnimationFrame(e)})},zi=0,ey=function(){return!!zi},ny=250,ty={attributes:!0,characterData:!0,childList:!0,subtree:!0},Wc=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Nc=function(e){return e===void 0&&(e=0),Date.now()+e},Ya=!1,oy=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=ny),!Ya){Ya=!0;var o=Nc(n);Q0(function(){var r=!1;try{r=J0()}finally{if(Ya=!1,n=o-Nc(),!ey())return;r?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,ty)};document.body?t():zr.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Wc.forEach(function(t){return zr.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),Wc.forEach(function(t){return zr.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),$s=new oy,jc=function(e){!zi&&e>0&&$s.start(),zi+=e,!zi&&$s.stop()},ry=function(e){return!bl(e)&&!V0(e)&&getComputedStyle(e).display==="inline"},iy=function(){function e(n,t){this.target=n,this.observedBox=t||Yr.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=pf(this.target,this.observedBox,!0);return ry(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),ay=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),$i=new WeakMap,Gc=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},Di=function(){function e(){}return e.connect=function(n,t){var o=new ay(n,t);$i.set(n,o)},e.observe=function(n,t,o){var r=$i.get(n),i=r.observationTargets.length===0;Gc(r.observationTargets,t)<0&&(i&&$o.push(r),r.observationTargets.push(new iy(t,o&&o.box)),jc(1),$s.schedule())},e.unobserve=function(n,t){var o=$i.get(n),r=Gc(o.observationTargets,t),i=o.observationTargets.length===1;r>=0&&(i&&$o.splice($o.indexOf(o),1),o.observationTargets.splice(r,1),jc(-1))},e.disconnect=function(n){var t=this,o=$i.get(n);o.observationTargets.slice().forEach(function(r){return t.unobserve(n,r.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),sy=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Di.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!zc(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Di.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!zc(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Di.unobserve(this,n)},e.prototype.disconnect=function(){Di.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class ly{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||sy)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const o=this.elHandlersMap.get(t.target);o!==void 0&&o(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const Vc=new ly,Ui=Te({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=io().proxy;function o(r){const{onResize:i}=e;i!==void 0&&i(r)}gt(()=>{const r=t.$el;if(r===void 0){Hc("resize-observer","$el does not exist.");return}if(r.nextElementSibling!==r.nextSibling&&r.nodeType===3&&r.nodeValue!==""){Hc("resize-observer","$el can not be observed (it may be a text node).");return}r.nextElementSibling!==null&&(Vc.registerHandler(r.nextElementSibling,o),n=!0)}),Ln(()=>{n&&Vc.unregisterHandler(t.$el.nextElementSibling)})},render(){return nb(this.$slots,"default")}});function bf(e){return e instanceof HTMLElement}function vf(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(bf(t)&&(xf(t)||vf(t)))return!0}return!1}function yf(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(bf(t)&&(xf(t)||yf(t)))return!0}return!1}function xf(e){if(!cy(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function cy(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let Tr=[];const dy=Te({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=kv(),t=se(null),o=se(null);let r=!1,i=!1;const a=typeof document>"u"?null:document.activeElement;function s(){return Tr[Tr.length-1]===n}function l(v){var m;v.code==="Escape"&&s()&&((m=e.onEsc)===null||m===void 0||m.call(e,v))}gt(()=>{Cn(()=>e.active,v=>{v?(f(),mn("keydown",document,l)):(on("keydown",document,l),r&&p())},{immediate:!0})}),Ln(()=>{on("keydown",document,l),r&&p()});function c(v){if(!i&&s()){const m=d();if(m===null||m.contains(ji(v)))return;b("first")}}function d(){const v=t.value;if(v===null)return null;let m=v;for(;m=m.nextSibling,!(m===null||m instanceof Element&&m.tagName==="DIV"););return m}function f(){var v;if(!e.disabled){if(Tr.push(n),e.autoFocus){const{initialFocusTo:m}=e;m===void 0?b("first"):(v=Ic(m))===null||v===void 0||v.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",c,!0)}}function p(){var v;if(e.disabled||(document.removeEventListener("focus",c,!0),Tr=Tr.filter(w=>w!==n),s()))return;const{finalFocusTo:m}=e;m!==void 0?(v=Ic(m))===null||v===void 0||v.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&a instanceof HTMLElement&&(i=!0,a.focus({preventScroll:!0}),i=!1)}function b(v){if(s()&&e.active){const m=t.value,w=o.value;if(m!==null&&w!==null){const _=d();if(_==null||_===w){i=!0,m.focus({preventScroll:!0}),i=!1;return}i=!0;const k=v==="first"?vf(_):yf(_);i=!1,k||(i=!0,m.focus({preventScroll:!0}),i=!1)}}}function h(v){if(i)return;const m=d();m!==null&&(v.relatedTarget!==null&&m.contains(v.relatedTarget)?b("last"):b("first"))}function y(v){i||(v.relatedTarget!==null&&v.relatedTarget===t.value?b("last"):b("first"))}return{focusableStartRef:t,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:h,handleEndFocus:y}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return P(Ye,null,[P("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),P("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});function Cf(e){const n={isDeactivated:!1};let t=!1;return vu(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),sl(()=>{n.isDeactivated=!0,t||(t=!0)}),n}const Kc="n-form-item";function Sf(e,{defaultSize:n="medium",mergedSize:t,mergedDisabled:o}={}){const r=je(Kc,null);$n(Kc,null);const i=J(t?()=>t(r):()=>{const{size:l}=e;if(l)return l;if(r){const{mergedSize:c}=r;if(c.value!==void 0)return c.value}return n}),a=J(o?()=>o(r):()=>{const{disabled:l}=e;return l!==void 0?l:r?r.disabled.value:!1}),s=J(()=>{const{status:l}=e;return l||(r==null?void 0:r.mergedValidationStatus.value)});return Ln(()=>{r&&r.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:a,mergedStatusRef:s,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}var uy=typeof global=="object"&&global&&global.Object===Object&&global;const wf=uy;var fy=typeof self=="object"&&self&&self.Object===Object&&self,hy=wf||fy||Function("return this")();const wt=hy;var py=wt.Symbol;const to=py;var Tf=Object.prototype,my=Tf.hasOwnProperty,gy=Tf.toString,kr=to?to.toStringTag:void 0;function by(e){var n=my.call(e,kr),t=e[kr];try{e[kr]=void 0;var o=!0}catch{}var r=gy.call(e);return o&&(n?e[kr]=t:delete e[kr]),r}var vy=Object.prototype,yy=vy.toString;function xy(e){return yy.call(e)}var Cy="[object Null]",Sy="[object Undefined]",Uc=to?to.toStringTag:void 0;function Io(e){return e==null?e===void 0?Sy:Cy:Uc&&Uc in Object(e)?by(e):xy(e)}function oo(e){return e!=null&&typeof e=="object"}var wy="[object Symbol]";function vl(e){return typeof e=="symbol"||oo(e)&&Io(e)==wy}function kf(e,n){for(var t=-1,o=e==null?0:e.length,r=Array(o);++t<o;)r[t]=n(e[t],t,e);return r}var Ty=Array.isArray;const ot=Ty;var ky=1/0,qc=to?to.prototype:void 0,Zc=qc?qc.toString:void 0;function Pf(e){if(typeof e=="string")return e;if(ot(e))return kf(e,Pf)+"";if(vl(e))return Zc?Zc.call(e):"";var n=e+"";return n=="0"&&1/e==-ky?"-0":n}function ao(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function yl(e){return e}var Py="[object AsyncFunction]",Ay="[object Function]",$y="[object GeneratorFunction]",Dy="[object Proxy]";function xl(e){if(!ao(e))return!1;var n=Io(e);return n==Ay||n==$y||n==Py||n==Dy}var Ry=wt["__core-js_shared__"];const Qa=Ry;var Jc=function(){var e=/[^.]+$/.exec(Qa&&Qa.keys&&Qa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Hy(e){return!!Jc&&Jc in e}var Iy=Function.prototype,Ey=Iy.toString;function Eo(e){if(e!=null){try{return Ey.call(e)}catch{}try{return e+""}catch{}}return""}var _y=/[\\^$.*+?()[\]{}|]/g,My=/^\[object .+?Constructor\]$/,By=Function.prototype,zy=Object.prototype,Ly=By.toString,Oy=zy.hasOwnProperty,Fy=RegExp("^"+Ly.call(Oy).replace(_y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Wy(e){if(!ao(e)||Hy(e))return!1;var n=xl(e)?Fy:My;return n.test(Eo(e))}function Ny(e,n){return e==null?void 0:e[n]}function _o(e,n){var t=Ny(e,n);return Wy(t)?t:void 0}var jy=_o(wt,"WeakMap");const Ds=jy;var Xc=Object.create,Gy=function(){function e(){}return function(n){if(!ao(n))return{};if(Xc)return Xc(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const Vy=Gy;function Ky(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function Uy(e,n){var t=-1,o=e.length;for(n||(n=Array(o));++t<o;)n[t]=e[t];return n}var qy=800,Zy=16,Jy=Date.now;function Xy(e){var n=0,t=0;return function(){var o=Jy(),r=Zy-(o-t);if(t=o,r>0){if(++n>=qy)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Yy(e){return function(){return e}}var Qy=function(){try{var e=_o(Object,"defineProperty");return e({},"",{}),e}catch{}}();const qi=Qy;var ex=qi?function(e,n){return qi(e,"toString",{configurable:!0,enumerable:!1,value:Yy(n),writable:!0})}:yl;const nx=ex;var tx=Xy(nx);const ox=tx;var rx=9007199254740991,ix=/^(?:0|[1-9]\d*)$/;function Cl(e,n){var t=typeof e;return n=n??rx,!!n&&(t=="number"||t!="symbol"&&ix.test(e))&&e>-1&&e%1==0&&e<n}function ba(e,n,t){n=="__proto__"&&qi?qi(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function ii(e,n){return e===n||e!==e&&n!==n}var ax=Object.prototype,sx=ax.hasOwnProperty;function lx(e,n,t){var o=e[n];(!(sx.call(e,n)&&ii(o,t))||t===void 0&&!(n in e))&&ba(e,n,t)}function cx(e,n,t,o){var r=!t;t||(t={});for(var i=-1,a=n.length;++i<a;){var s=n[i],l=o?o(t[s],e[s],s,t,e):void 0;l===void 0&&(l=e[s]),r?ba(t,s,l):lx(t,s,l)}return t}var Yc=Math.max;function dx(e,n,t){return n=Yc(n===void 0?e.length-1:n,0),function(){for(var o=arguments,r=-1,i=Yc(o.length-n,0),a=Array(i);++r<i;)a[r]=o[n+r];r=-1;for(var s=Array(n+1);++r<n;)s[r]=o[r];return s[n]=t(a),Ky(e,this,s)}}function ux(e,n){return ox(dx(e,n,yl),e+"")}var fx=9007199254740991;function Sl(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=fx}function dr(e){return e!=null&&Sl(e.length)&&!xl(e)}function hx(e,n,t){if(!ao(t))return!1;var o=typeof n;return(o=="number"?dr(t)&&Cl(n,t.length):o=="string"&&n in t)?ii(t[n],e):!1}function px(e){return ux(function(n,t){var o=-1,r=t.length,i=r>1?t[r-1]:void 0,a=r>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(r--,i):void 0,a&&hx(t[0],t[1],a)&&(i=r<3?void 0:i,r=1),n=Object(n);++o<r;){var s=t[o];s&&e(n,s,o,i)}return n})}var mx=Object.prototype;function wl(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||mx;return e===t}function gx(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}var bx="[object Arguments]";function Qc(e){return oo(e)&&Io(e)==bx}var Af=Object.prototype,vx=Af.hasOwnProperty,yx=Af.propertyIsEnumerable,xx=Qc(function(){return arguments}())?Qc:function(e){return oo(e)&&vx.call(e,"callee")&&!yx.call(e,"callee")};const Zi=xx;function Cx(){return!1}var $f=typeof et=="object"&&et&&!et.nodeType&&et,ed=$f&&typeof nt=="object"&&nt&&!nt.nodeType&&nt,Sx=ed&&ed.exports===$f,nd=Sx?wt.Buffer:void 0,wx=nd?nd.isBuffer:void 0,Tx=wx||Cx;const Ji=Tx;var kx="[object Arguments]",Px="[object Array]",Ax="[object Boolean]",$x="[object Date]",Dx="[object Error]",Rx="[object Function]",Hx="[object Map]",Ix="[object Number]",Ex="[object Object]",_x="[object RegExp]",Mx="[object Set]",Bx="[object String]",zx="[object WeakMap]",Lx="[object ArrayBuffer]",Ox="[object DataView]",Fx="[object Float32Array]",Wx="[object Float64Array]",Nx="[object Int8Array]",jx="[object Int16Array]",Gx="[object Int32Array]",Vx="[object Uint8Array]",Kx="[object Uint8ClampedArray]",Ux="[object Uint16Array]",qx="[object Uint32Array]",nn={};nn[Fx]=nn[Wx]=nn[Nx]=nn[jx]=nn[Gx]=nn[Vx]=nn[Kx]=nn[Ux]=nn[qx]=!0;nn[kx]=nn[Px]=nn[Lx]=nn[Ax]=nn[Ox]=nn[$x]=nn[Dx]=nn[Rx]=nn[Hx]=nn[Ix]=nn[Ex]=nn[_x]=nn[Mx]=nn[Bx]=nn[zx]=!1;function Zx(e){return oo(e)&&Sl(e.length)&&!!nn[Io(e)]}function Jx(e){return function(n){return e(n)}}var Df=typeof et=="object"&&et&&!et.nodeType&&et,Lr=Df&&typeof nt=="object"&&nt&&!nt.nodeType&&nt,Xx=Lr&&Lr.exports===Df,es=Xx&&wf.process,Yx=function(){try{var e=Lr&&Lr.require&&Lr.require("util").types;return e||es&&es.binding&&es.binding("util")}catch{}}();const td=Yx;var od=td&&td.isTypedArray,Qx=od?Jx(od):Zx;const Tl=Qx;var eC=Object.prototype,nC=eC.hasOwnProperty;function Rf(e,n){var t=ot(e),o=!t&&Zi(e),r=!t&&!o&&Ji(e),i=!t&&!o&&!r&&Tl(e),a=t||o||r||i,s=a?gx(e.length,String):[],l=s.length;for(var c in e)(n||nC.call(e,c))&&!(a&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Cl(c,l)))&&s.push(c);return s}function Hf(e,n){return function(t){return e(n(t))}}var tC=Hf(Object.keys,Object);const oC=tC;var rC=Object.prototype,iC=rC.hasOwnProperty;function aC(e){if(!wl(e))return oC(e);var n=[];for(var t in Object(e))iC.call(e,t)&&t!="constructor"&&n.push(t);return n}function kl(e){return dr(e)?Rf(e):aC(e)}function sC(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var lC=Object.prototype,cC=lC.hasOwnProperty;function dC(e){if(!ao(e))return sC(e);var n=wl(e),t=[];for(var o in e)o=="constructor"&&(n||!cC.call(e,o))||t.push(o);return t}function If(e){return dr(e)?Rf(e,!0):dC(e)}var uC=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fC=/^\w*$/;function Pl(e,n){if(ot(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||vl(e)?!0:fC.test(e)||!uC.test(e)||n!=null&&e in Object(n)}var hC=_o(Object,"create");const Qr=hC;function pC(){this.__data__=Qr?Qr(null):{},this.size=0}function mC(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var gC="__lodash_hash_undefined__",bC=Object.prototype,vC=bC.hasOwnProperty;function yC(e){var n=this.__data__;if(Qr){var t=n[e];return t===gC?void 0:t}return vC.call(n,e)?n[e]:void 0}var xC=Object.prototype,CC=xC.hasOwnProperty;function SC(e){var n=this.__data__;return Qr?n[e]!==void 0:CC.call(n,e)}var wC="__lodash_hash_undefined__";function TC(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Qr&&n===void 0?wC:n,this}function Ho(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Ho.prototype.clear=pC;Ho.prototype.delete=mC;Ho.prototype.get=yC;Ho.prototype.has=SC;Ho.prototype.set=TC;function kC(){this.__data__=[],this.size=0}function va(e,n){for(var t=e.length;t--;)if(ii(e[t][0],n))return t;return-1}var PC=Array.prototype,AC=PC.splice;function $C(e){var n=this.__data__,t=va(n,e);if(t<0)return!1;var o=n.length-1;return t==o?n.pop():AC.call(n,t,1),--this.size,!0}function DC(e){var n=this.__data__,t=va(n,e);return t<0?void 0:n[t][1]}function RC(e){return va(this.__data__,e)>-1}function HC(e,n){var t=this.__data__,o=va(t,e);return o<0?(++this.size,t.push([e,n])):t[o][1]=n,this}function Bt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Bt.prototype.clear=kC;Bt.prototype.delete=$C;Bt.prototype.get=DC;Bt.prototype.has=RC;Bt.prototype.set=HC;var IC=_o(wt,"Map");const ei=IC;function EC(){this.size=0,this.__data__={hash:new Ho,map:new(ei||Bt),string:new Ho}}function _C(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function ya(e,n){var t=e.__data__;return _C(n)?t[typeof n=="string"?"string":"hash"]:t.map}function MC(e){var n=ya(this,e).delete(e);return this.size-=n?1:0,n}function BC(e){return ya(this,e).get(e)}function zC(e){return ya(this,e).has(e)}function LC(e,n){var t=ya(this,e),o=t.size;return t.set(e,n),this.size+=t.size==o?0:1,this}function zt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}zt.prototype.clear=EC;zt.prototype.delete=MC;zt.prototype.get=BC;zt.prototype.has=zC;zt.prototype.set=LC;var OC="Expected a function";function Al(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(OC);var t=function(){var o=arguments,r=n?n.apply(this,o):o[0],i=t.cache;if(i.has(r))return i.get(r);var a=e.apply(this,o);return t.cache=i.set(r,a)||i,a};return t.cache=new(Al.Cache||zt),t}Al.Cache=zt;var FC=500;function WC(e){var n=Al(e,function(o){return t.size===FC&&t.clear(),o}),t=n.cache;return n}var NC=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jC=/\\(\\)?/g,GC=WC(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(NC,function(t,o,r,i){n.push(r?i.replace(jC,"$1"):o||t)}),n});const VC=GC;function xa(e){return e==null?"":Pf(e)}function Ef(e,n){return ot(e)?e:Pl(e,n)?[e]:VC(xa(e))}var KC=1/0;function Ca(e){if(typeof e=="string"||vl(e))return e;var n=e+"";return n=="0"&&1/e==-KC?"-0":n}function _f(e,n){n=Ef(n,e);for(var t=0,o=n.length;e!=null&&t<o;)e=e[Ca(n[t++])];return t&&t==o?e:void 0}function Mf(e,n,t){var o=e==null?void 0:_f(e,n);return o===void 0?t:o}function UC(e,n){for(var t=-1,o=n.length,r=e.length;++t<o;)e[r+t]=n[t];return e}var qC=Hf(Object.getPrototypeOf,Object);const Bf=qC;var ZC="[object Object]",JC=Function.prototype,XC=Object.prototype,zf=JC.toString,YC=XC.hasOwnProperty,QC=zf.call(Object);function eS(e){if(!oo(e)||Io(e)!=ZC)return!1;var n=Bf(e);if(n===null)return!0;var t=YC.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&zf.call(t)==QC}function nS(e,n,t){var o=-1,r=e.length;n<0&&(n=-n>r?0:r+n),t=t>r?r:t,t<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(r);++o<r;)i[o]=e[o+n];return i}function tS(e,n,t){var o=e.length;return t=t===void 0?o:t,!n&&t>=o?e:nS(e,n,t)}var oS="\\ud800-\\udfff",rS="\\u0300-\\u036f",iS="\\ufe20-\\ufe2f",aS="\\u20d0-\\u20ff",sS=rS+iS+aS,lS="\\ufe0e\\ufe0f",cS="\\u200d",dS=RegExp("["+cS+oS+sS+lS+"]");function Lf(e){return dS.test(e)}function uS(e){return e.split("")}var Of="\\ud800-\\udfff",fS="\\u0300-\\u036f",hS="\\ufe20-\\ufe2f",pS="\\u20d0-\\u20ff",mS=fS+hS+pS,gS="\\ufe0e\\ufe0f",bS="["+Of+"]",Rs="["+mS+"]",Hs="\\ud83c[\\udffb-\\udfff]",vS="(?:"+Rs+"|"+Hs+")",Ff="[^"+Of+"]",Wf="(?:\\ud83c[\\udde6-\\uddff]){2}",Nf="[\\ud800-\\udbff][\\udc00-\\udfff]",yS="\\u200d",jf=vS+"?",Gf="["+gS+"]?",xS="(?:"+yS+"(?:"+[Ff,Wf,Nf].join("|")+")"+Gf+jf+")*",CS=Gf+jf+xS,SS="(?:"+[Ff+Rs+"?",Rs,Wf,Nf,bS].join("|")+")",wS=RegExp(Hs+"(?="+Hs+")|"+SS+CS,"g");function TS(e){return e.match(wS)||[]}function kS(e){return Lf(e)?TS(e):uS(e)}function PS(e){return function(n){n=xa(n);var t=Lf(n)?kS(n):void 0,o=t?t[0]:n.charAt(0),r=t?tS(t,1).join(""):n.slice(1);return o[e]()+r}}var AS=PS("toUpperCase");const $S=AS;function DS(e,n,t,o){var r=-1,i=e==null?0:e.length;for(o&&i&&(t=e[++r]);++r<i;)t=n(t,e[r],r,e);return t}function RS(e){return function(n){return e==null?void 0:e[n]}}var HS={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},IS=RS(HS);const ES=IS;var _S=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,MS="\\u0300-\\u036f",BS="\\ufe20-\\ufe2f",zS="\\u20d0-\\u20ff",LS=MS+BS+zS,OS="["+LS+"]",FS=RegExp(OS,"g");function WS(e){return e=xa(e),e&&e.replace(_S,ES).replace(FS,"")}var NS=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function jS(e){return e.match(NS)||[]}var GS=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function VS(e){return GS.test(e)}var Vf="\\ud800-\\udfff",KS="\\u0300-\\u036f",US="\\ufe20-\\ufe2f",qS="\\u20d0-\\u20ff",ZS=KS+US+qS,Kf="\\u2700-\\u27bf",Uf="a-z\\xdf-\\xf6\\xf8-\\xff",JS="\\xac\\xb1\\xd7\\xf7",XS="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",YS="\\u2000-\\u206f",QS=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qf="A-Z\\xc0-\\xd6\\xd8-\\xde",ew="\\ufe0e\\ufe0f",Zf=JS+XS+YS+QS,Jf="['’]",rd="["+Zf+"]",nw="["+ZS+"]",Xf="\\d+",tw="["+Kf+"]",Yf="["+Uf+"]",Qf="[^"+Vf+Zf+Xf+Kf+Uf+qf+"]",ow="\\ud83c[\\udffb-\\udfff]",rw="(?:"+nw+"|"+ow+")",iw="[^"+Vf+"]",eh="(?:\\ud83c[\\udde6-\\uddff]){2}",nh="[\\ud800-\\udbff][\\udc00-\\udfff]",Vo="["+qf+"]",aw="\\u200d",id="(?:"+Yf+"|"+Qf+")",sw="(?:"+Vo+"|"+Qf+")",ad="(?:"+Jf+"(?:d|ll|m|re|s|t|ve))?",sd="(?:"+Jf+"(?:D|LL|M|RE|S|T|VE))?",th=rw+"?",oh="["+ew+"]?",lw="(?:"+aw+"(?:"+[iw,eh,nh].join("|")+")"+oh+th+")*",cw="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",uw=oh+th+lw,fw="(?:"+[tw,eh,nh].join("|")+")"+uw,hw=RegExp([Vo+"?"+Yf+"+"+ad+"(?="+[rd,Vo,"$"].join("|")+")",sw+"+"+sd+"(?="+[rd,Vo+id,"$"].join("|")+")",Vo+"?"+id+"+"+ad,Vo+"+"+sd,dw,cw,Xf,fw].join("|"),"g");function pw(e){return e.match(hw)||[]}function mw(e,n,t){return e=xa(e),n=t?void 0:n,n===void 0?VS(e)?pw(e):jS(e):e.match(n)||[]}var gw="['’]",bw=RegExp(gw,"g");function vw(e){return function(n){return DS(mw(WS(n).replace(bw,"")),e,"")}}function yw(){this.__data__=new Bt,this.size=0}function xw(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function Cw(e){return this.__data__.get(e)}function Sw(e){return this.__data__.has(e)}var ww=200;function Tw(e,n){var t=this.__data__;if(t instanceof Bt){var o=t.__data__;if(!ei||o.length<ww-1)return o.push([e,n]),this.size=++t.size,this;t=this.__data__=new zt(o)}return t.set(e,n),this.size=t.size,this}function St(e){var n=this.__data__=new Bt(e);this.size=n.size}St.prototype.clear=yw;St.prototype.delete=xw;St.prototype.get=Cw;St.prototype.has=Sw;St.prototype.set=Tw;var rh=typeof et=="object"&&et&&!et.nodeType&&et,ld=rh&&typeof nt=="object"&&nt&&!nt.nodeType&&nt,kw=ld&&ld.exports===rh,cd=kw?wt.Buffer:void 0,dd=cd?cd.allocUnsafe:void 0;function Pw(e,n){if(n)return e.slice();var t=e.length,o=dd?dd(t):new e.constructor(t);return e.copy(o),o}function Aw(e,n){for(var t=-1,o=e==null?0:e.length,r=0,i=[];++t<o;){var a=e[t];n(a,t,e)&&(i[r++]=a)}return i}function $w(){return[]}var Dw=Object.prototype,Rw=Dw.propertyIsEnumerable,ud=Object.getOwnPropertySymbols,Hw=ud?function(e){return e==null?[]:(e=Object(e),Aw(ud(e),function(n){return Rw.call(e,n)}))}:$w;const Iw=Hw;function Ew(e,n,t){var o=n(e);return ot(e)?o:UC(o,t(e))}function fd(e){return Ew(e,kl,Iw)}var _w=_o(wt,"DataView");const Is=_w;var Mw=_o(wt,"Promise");const Es=Mw;var Bw=_o(wt,"Set");const _s=Bw;var hd="[object Map]",zw="[object Object]",pd="[object Promise]",md="[object Set]",gd="[object WeakMap]",bd="[object DataView]",Lw=Eo(Is),Ow=Eo(ei),Fw=Eo(Es),Ww=Eo(_s),Nw=Eo(Ds),go=Io;(Is&&go(new Is(new ArrayBuffer(1)))!=bd||ei&&go(new ei)!=hd||Es&&go(Es.resolve())!=pd||_s&&go(new _s)!=md||Ds&&go(new Ds)!=gd)&&(go=function(e){var n=Io(e),t=n==zw?e.constructor:void 0,o=t?Eo(t):"";if(o)switch(o){case Lw:return bd;case Ow:return hd;case Fw:return pd;case Ww:return md;case Nw:return gd}return n});const vd=go;var jw=wt.Uint8Array;const Xi=jw;function Gw(e){var n=new e.constructor(e.byteLength);return new Xi(n).set(new Xi(e)),n}function Vw(e,n){var t=n?Gw(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function Kw(e){return typeof e.constructor=="function"&&!wl(e)?Vy(Bf(e)):{}}var Uw="__lodash_hash_undefined__";function qw(e){return this.__data__.set(e,Uw),this}function Zw(e){return this.__data__.has(e)}function Yi(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new zt;++n<t;)this.add(e[n])}Yi.prototype.add=Yi.prototype.push=qw;Yi.prototype.has=Zw;function Jw(e,n){for(var t=-1,o=e==null?0:e.length;++t<o;)if(n(e[t],t,e))return!0;return!1}function Xw(e,n){return e.has(n)}var Yw=1,Qw=2;function ih(e,n,t,o,r,i){var a=t&Yw,s=e.length,l=n.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(n);if(c&&d)return c==n&&d==e;var f=-1,p=!0,b=t&Qw?new Yi:void 0;for(i.set(e,n),i.set(n,e);++f<s;){var h=e[f],y=n[f];if(o)var v=a?o(y,h,f,n,e,i):o(h,y,f,e,n,i);if(v!==void 0){if(v)continue;p=!1;break}if(b){if(!Jw(n,function(m,w){if(!Xw(b,w)&&(h===m||r(h,m,t,o,i)))return b.push(w)})){p=!1;break}}else if(!(h===y||r(h,y,t,o,i))){p=!1;break}}return i.delete(e),i.delete(n),p}function e1(e){var n=-1,t=Array(e.size);return e.forEach(function(o,r){t[++n]=[r,o]}),t}function n1(e){var n=-1,t=Array(e.size);return e.forEach(function(o){t[++n]=o}),t}var t1=1,o1=2,r1="[object Boolean]",i1="[object Date]",a1="[object Error]",s1="[object Map]",l1="[object Number]",c1="[object RegExp]",d1="[object Set]",u1="[object String]",f1="[object Symbol]",h1="[object ArrayBuffer]",p1="[object DataView]",yd=to?to.prototype:void 0,ns=yd?yd.valueOf:void 0;function m1(e,n,t,o,r,i,a){switch(t){case p1:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case h1:return!(e.byteLength!=n.byteLength||!i(new Xi(e),new Xi(n)));case r1:case i1:case l1:return ii(+e,+n);case a1:return e.name==n.name&&e.message==n.message;case c1:case u1:return e==n+"";case s1:var s=e1;case d1:var l=o&t1;if(s||(s=n1),e.size!=n.size&&!l)return!1;var c=a.get(e);if(c)return c==n;o|=o1,a.set(e,n);var d=ih(s(e),s(n),o,r,i,a);return a.delete(e),d;case f1:if(ns)return ns.call(e)==ns.call(n)}return!1}var g1=1,b1=Object.prototype,v1=b1.hasOwnProperty;function y1(e,n,t,o,r,i){var a=t&g1,s=fd(e),l=s.length,c=fd(n),d=c.length;if(l!=d&&!a)return!1;for(var f=l;f--;){var p=s[f];if(!(a?p in n:v1.call(n,p)))return!1}var b=i.get(e),h=i.get(n);if(b&&h)return b==n&&h==e;var y=!0;i.set(e,n),i.set(n,e);for(var v=a;++f<l;){p=s[f];var m=e[p],w=n[p];if(o)var _=a?o(w,m,p,n,e,i):o(m,w,p,e,n,i);if(!(_===void 0?m===w||r(m,w,t,o,i):_)){y=!1;break}v||(v=p=="constructor")}if(y&&!v){var k=e.constructor,R=n.constructor;k!=R&&"constructor"in e&&"constructor"in n&&!(typeof k=="function"&&k instanceof k&&typeof R=="function"&&R instanceof R)&&(y=!1)}return i.delete(e),i.delete(n),y}var x1=1,xd="[object Arguments]",Cd="[object Array]",Ri="[object Object]",C1=Object.prototype,Sd=C1.hasOwnProperty;function S1(e,n,t,o,r,i){var a=ot(e),s=ot(n),l=a?Cd:vd(e),c=s?Cd:vd(n);l=l==xd?Ri:l,c=c==xd?Ri:c;var d=l==Ri,f=c==Ri,p=l==c;if(p&&Ji(e)){if(!Ji(n))return!1;a=!0,d=!1}if(p&&!d)return i||(i=new St),a||Tl(e)?ih(e,n,t,o,r,i):m1(e,n,l,t,o,r,i);if(!(t&x1)){var b=d&&Sd.call(e,"__wrapped__"),h=f&&Sd.call(n,"__wrapped__");if(b||h){var y=b?e.value():e,v=h?n.value():n;return i||(i=new St),r(y,v,t,o,i)}}return p?(i||(i=new St),y1(e,n,t,o,r,i)):!1}function $l(e,n,t,o,r){return e===n?!0:e==null||n==null||!oo(e)&&!oo(n)?e!==e&&n!==n:S1(e,n,t,o,$l,r)}var w1=1,T1=2;function k1(e,n,t,o){var r=t.length,i=r,a=!o;if(e==null)return!i;for(e=Object(e);r--;){var s=t[r];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<i;){s=t[r];var l=s[0],c=e[l],d=s[1];if(a&&s[2]){if(c===void 0&&!(l in e))return!1}else{var f=new St;if(o)var p=o(c,d,l,e,n,f);if(!(p===void 0?$l(d,c,w1|T1,o,f):p))return!1}}return!0}function ah(e){return e===e&&!ao(e)}function P1(e){for(var n=kl(e),t=n.length;t--;){var o=n[t],r=e[o];n[t]=[o,r,ah(r)]}return n}function sh(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function A1(e){var n=P1(e);return n.length==1&&n[0][2]?sh(n[0][0],n[0][1]):function(t){return t===e||k1(t,e,n)}}function $1(e,n){return e!=null&&n in Object(e)}function D1(e,n,t){n=Ef(n,e);for(var o=-1,r=n.length,i=!1;++o<r;){var a=Ca(n[o]);if(!(i=e!=null&&t(e,a)))break;e=e[a]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&Sl(r)&&Cl(a,r)&&(ot(e)||Zi(e)))}function R1(e,n){return e!=null&&D1(e,n,$1)}var H1=1,I1=2;function E1(e,n){return Pl(e)&&ah(n)?sh(Ca(e),n):function(t){var o=Mf(t,e);return o===void 0&&o===n?R1(t,e):$l(n,o,H1|I1)}}function _1(e){return function(n){return n==null?void 0:n[e]}}function M1(e){return function(n){return _f(n,e)}}function B1(e){return Pl(e)?_1(Ca(e)):M1(e)}function lh(e){return typeof e=="function"?e:e==null?yl:typeof e=="object"?ot(e)?E1(e[0],e[1]):A1(e):B1(e)}function z1(e,n,t,o){for(var r=-1,i=e==null?0:e.length;++r<i;){var a=e[r];n(o,a,t(a),e)}return o}function L1(e){return function(n,t,o){for(var r=-1,i=Object(n),a=o(n),s=a.length;s--;){var l=a[e?s:++r];if(t(i[l],l,i)===!1)break}return n}}var O1=L1();const ch=O1;function F1(e,n){return e&&ch(e,n,kl)}function W1(e,n){return function(t,o){if(t==null)return t;if(!dr(t))return e(t,o);for(var r=t.length,i=n?r:-1,a=Object(t);(n?i--:++i<r)&&o(a[i],i,a)!==!1;);return t}}var N1=W1(F1);const dh=N1;function j1(e,n,t,o){return dh(e,function(r,i,a){n(o,r,t(r),a)}),o}function G1(e,n){return function(t,o){var r=ot(t)?z1:j1,i=n?n():{};return r(t,e,lh(o),i)}}function Ms(e,n,t){(t!==void 0&&!ii(e[n],t)||t===void 0&&!(n in e))&&ba(e,n,t)}function V1(e){return oo(e)&&dr(e)}function Bs(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function K1(e){return cx(e,If(e))}function U1(e,n,t,o,r,i,a){var s=Bs(e,t),l=Bs(n,t),c=a.get(l);if(c){Ms(e,t,c);return}var d=i?i(s,l,t+"",e,n,a):void 0,f=d===void 0;if(f){var p=ot(l),b=!p&&Ji(l),h=!p&&!b&&Tl(l);d=l,p||b||h?ot(s)?d=s:V1(s)?d=Uy(s):b?(f=!1,d=Pw(l,!0)):h?(f=!1,d=Vw(l,!0)):d=[]:eS(l)||Zi(l)?(d=s,Zi(s)?d=K1(s):(!ao(s)||xl(s))&&(d=Kw(l))):f=!1}f&&(a.set(l,d),r(d,l,o,i,a),a.delete(l)),Ms(e,t,d)}function uh(e,n,t,o,r){e!==n&&ch(n,function(i,a){if(r||(r=new St),ao(i))U1(e,n,a,t,uh,o,r);else{var s=o?o(Bs(e,a),i,a+"",e,n,r):void 0;s===void 0&&(s=i),Ms(e,a,s)}},If)}function q1(e,n){var t=-1,o=dr(e)?Array(e.length):[];return dh(e,function(r,i,a){o[++t]=n(r,i,a)}),o}function Z1(e,n){var t=ot(e)?kf:q1;return t(e,lh(n))}var J1=Object.prototype,X1=J1.hasOwnProperty,Y1=G1(function(e,n,t){X1.call(e,t)?e[t].push(n):ba(e,t,[n])});const Q1=Y1;var eT=vw(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()});const nT=eT;var tT=px(function(e,n,t){uh(e,n,t)});const Dr=tT,Mo={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:oT,fontFamily:rT,lineHeight:iT}=Mo,fh=ce("body",`
 margin: 0;
 font-size: ${oT};
 font-family: ${rT};
 line-height: ${iT};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[ce("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),ro="n-config-provider",ni="naive-ui-style";function Ke(e,n,t,o,r,i){const a=ri(),s=je(ro,null);if(t){const c=()=>{const d=i==null?void 0:i.value;t.mount({id:d===void 0?n:d+n,head:!0,props:{bPrefix:d?`.${d}-`:void 0},anchorMetaName:ni,ssr:a}),s!=null&&s.preflightStyleDisabled||fh.mount({id:"n-global",head:!0,anchorMetaName:ni,ssr:a})};a?c():ar(c)}return J(()=>{var c;const{theme:{common:d,self:f,peers:p={}}={},themeOverrides:b={},builtinThemeOverrides:h={}}=r,{common:y,peers:v}=b,{common:m=void 0,[e]:{common:w=void 0,self:_=void 0,peers:k={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:R=void 0,[e]:M={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:g,peers:C={}}=M,D=Dr({},d||w||m||o.common,R,g,y),I=Dr((c=f||_||o.self)===null||c===void 0?void 0:c(D),h,M,b);return{common:D,self:I,peers:Dr({},o.peers,k,p),peerOverrides:Dr({},h.peers,C,v)}})}Ke.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const hh="n";function On(e={},n={defaultBordered:!0}){const t=je(ro,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:J(()=>{var o,r;const{bordered:i}=e;return i!==void 0?i:(r=(o=t==null?void 0:t.mergedBorderedRef.value)!==null&&o!==void 0?o:n.defaultBordered)!==null&&r!==void 0?r:!0}),mergedClsPrefixRef:J(()=>(t==null?void 0:t.mergedClsPrefixRef.value)||hh),namespaceRef:J(()=>t==null?void 0:t.mergedNamespaceRef.value)}}const aT={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},sT=aT;function ts(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,o=e.formats[t]||e.formats[e.defaultWidth];return o}}function Pr(e){return function(n,t){var o=t!=null&&t.context?String(t.context):"standalone",r;if(o==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=t!=null&&t.width?String(t.width):i;r=e.formattingValues[a]||e.formattingValues[i]}else{var s=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[l]||e.values[s]}var c=e.argumentCallback?e.argumentCallback(n):n;return r[c]}}function Ar(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=n.match(r);if(!i)return null;var a=i[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?cT(s,function(f){return f.test(a)}):lT(s,function(f){return f.test(a)}),c;c=e.valueCallback?e.valueCallback(l):l,c=t.valueCallback?t.valueCallback(c):c;var d=n.slice(a.length);return{value:c,rest:d}}}function lT(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function cT(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function dT(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.match(e.matchPattern);if(!o)return null;var r=o[0],i=n.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;var s=n.slice(r.length);return{value:a,rest:s}}}var uT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},fT=function(n,t,o){var r,i=uT[n];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+r:r+" ago":r};const hT=fT;var pT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},mT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},gT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bT={date:ts({formats:pT,defaultWidth:"full"}),time:ts({formats:mT,defaultWidth:"full"}),dateTime:ts({formats:gT,defaultWidth:"full"})};const vT=bT;var yT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xT=function(n,t,o,r){return yT[n]};const CT=xT;var ST={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},wT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},TT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},kT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},PT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},AT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$T=function(n,t){var o=Number(n),r=o%100;if(r>20||r<10)switch(r%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},DT={ordinalNumber:$T,era:Pr({values:ST,defaultWidth:"wide"}),quarter:Pr({values:wT,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:Pr({values:TT,defaultWidth:"wide"}),day:Pr({values:kT,defaultWidth:"wide"}),dayPeriod:Pr({values:PT,defaultWidth:"wide",formattingValues:AT,defaultFormattingWidth:"wide"})};const RT=DT;var HT=/^(\d+)(th|st|nd|rd)?/i,IT=/\d+/i,ET={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},_T={any:[/^b/i,/^(a|c)/i]},MT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},BT={any:[/1/i,/2/i,/3/i,/4/i]},zT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},LT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},OT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},FT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},WT={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},NT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},jT={ordinalNumber:dT({matchPattern:HT,parsePattern:IT,valueCallback:function(n){return parseInt(n,10)}}),era:Ar({matchPatterns:ET,defaultMatchWidth:"wide",parsePatterns:_T,defaultParseWidth:"any"}),quarter:Ar({matchPatterns:MT,defaultMatchWidth:"wide",parsePatterns:BT,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:Ar({matchPatterns:zT,defaultMatchWidth:"wide",parsePatterns:LT,defaultParseWidth:"any"}),day:Ar({matchPatterns:OT,defaultMatchWidth:"wide",parsePatterns:FT,defaultParseWidth:"any"}),dayPeriod:Ar({matchPatterns:WT,defaultMatchWidth:"any",parsePatterns:NT,defaultParseWidth:"any"})};const GT=jT;var VT={code:"en-US",formatDistance:hT,formatLong:vT,formatRelative:CT,localize:RT,match:GT,options:{weekStartsOn:0,firstWeekContainsDate:1}};const KT=VT,UT={name:"en-US",locale:KT},qT=UT;function ZT(e){const{mergedLocaleRef:n,mergedDateLocaleRef:t}=je(ro,null)||{},o=J(()=>{var i,a;return(a=(i=n==null?void 0:n.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:sT[e]});return{dateLocaleRef:J(()=>{var i;return(i=t==null?void 0:t.value)!==null&&i!==void 0?i:qT}),localeRef:o}}function ai(e,n,t){if(!n)return;const o=ri(),r=je(ro,null),i=()=>{const a=t==null?void 0:t.value;n.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:ni,props:{bPrefix:a?`.${a}-`:void 0},ssr:o}),r!=null&&r.preflightStyleDisabled||fh.mount({id:"n-global",head:!0,anchorMetaName:ni,ssr:o})};o?i():ar(i)}function ct(e,n,t,o){var r;t||Pv("useThemeClass","cssVarsRef is not passed");const i=(r=je(ro,null))===null||r===void 0?void 0:r.mergedThemeHashRef,a=se(""),s=ri();let l;const c=`__${e}`,d=()=>{let f=c;const p=n?n.value:void 0,b=i==null?void 0:i.value;b&&(f+="-"+b),p&&(f+="-"+p);const{themeOverrides:h,builtinThemeOverrides:y}=o;h&&(f+="-"+Xr(JSON.stringify(h))),y&&(f+="-"+Xr(JSON.stringify(y))),a.value=f,l=()=>{const v=t.value;let m="";for(const w in v)m+=`${w}: ${v[w]};`;ce(`.${f}`,m).mount({id:f,ssr:s}),l=void 0}};return Ro(()=>{d()}),{themeClass:a,onRender:()=>{l==null||l()}}}function Sa(e,n,t){if(!n)return;const o=ri(),r=J(()=>{const{value:a}=n;if(!a)return;const s=a[e];if(s)return s}),i=()=>{Ro(()=>{const{value:a}=t,s=`${a}${e}Rtl`;if(Kv(s,o))return;const{value:l}=r;l&&l.style.mount({id:s,head:!0,anchorMetaName:ni,props:{bPrefix:a?`.${a}-`:void 0},ssr:o})})};return o?i():ar(i),r}function JT(e,n){return Te({name:$S(e),setup(){var t;const o=(t=je(ro,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var r;const i=(r=o==null?void 0:o.value)===null||r===void 0?void 0:r[e];return i?i():n}}})}const XT=Te({name:"ChevronRight",render(){return P("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},P("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),YT=Te({name:"Eye",render(){return P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},P("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),P("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),QT=Te({name:"EyeOff",render(){return P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},P("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),P("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),P("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),P("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),P("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),e2=Te({name:"ChevronDown",render(){return P("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},P("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),n2=JT("clear",P("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},P("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},P("g",{fill:"currentColor","fill-rule":"nonzero"},P("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Dl=Te({name:"BaseIconSwitchTransition",setup(e,{slots:n}){const t=pl();return()=>P(no,{name:"icon-switch-transition",appear:t.value},n)}}),t2=Te({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function o(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function r(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function a(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const s=e.group?rv:no;return P(s,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:i,onAfterEnter:a,onBeforeLeave:t,onLeave:o,onAfterLeave:r},n)}}}),o2=be("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[ce("svg",`
 height: 1em;
 width: 1em;
 `)]),Qi=Te({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){ai("-base-icon",o2,Qe(e,"clsPrefix"))},render(){return P("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),{cubicBezierEaseInOut:r2}=Mo;function ea({originalTransform:e="",left:n=0,top:t=0,transition:o=`all .3s ${r2} !important`}={}){return[ce("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:n,top:t,opacity:0}),ce("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:n,top:t,opacity:1}),ce("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:t,transition:o})]}const i2=ce([ce("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),ce("@keyframes loading-layer-rotate",`
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
 `),ce("@keyframes loading-left-spin",`
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
 `),ce("@keyframes loading-right-spin",`
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
 `),be("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[ne("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[ea()]),ne("container",`
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
 `,[ne("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),ne("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[ne("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[ne("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),ne("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[ne("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),ne("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[ne("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),ne("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ea({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),a2={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},ph=Te({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},a2),setup(e){ai("-base-loading",i2,Qe(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:n,strokeWidth:t,stroke:o,scale:r}=this,i=n/r;return P("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},P(Dl,null,{default:()=>this.show?P("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},P("div",{class:`${e}-base-loading__container`},P("div",{class:`${e}-base-loading__container-layer`},P("div",{class:`${e}-base-loading__container-layer-left`},P("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},P("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),P("div",{class:`${e}-base-loading__container-layer-patch`},P("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},P("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),P("div",{class:`${e}-base-loading__container-layer-right`},P("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},P("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n})))))):P("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});function wd(e){return Array.isArray(e)?e:[e]}const zs={STOP:"STOP"};function mh(e,n){const t=n(e);e.children!==void 0&&t!==zs.STOP&&e.children.forEach(o=>mh(o,n))}function s2(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?a=>{a.isLeaf||(o.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),o}function l2(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function c2(e){return e.children}function d2(e){return e.key}function u2(){return!1}function f2(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function h2(e){return e.disabled===!0}function p2(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function os(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function rs(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function m2(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function g2(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function b2(e){return(e==null?void 0:e.type)==="group"}class v2 extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function y2(e,n,t,o){return na(n.concat(e),t,o,!1)}function x2(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function C2(e,n,t,o){const r=na(n,t,o,!1),i=na(e,t,o,!0),a=x2(e,t),s=[];return r.forEach(l=>{(i.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function is(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:l,allowNotLoaded:c}=e;if(!a)return o!==void 0?{checkedKeys:m2(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:g2(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:d}=n;let f;r!==void 0?f=C2(r,t,n,c):o!==void 0?f=y2(o,t,n,c):f=na(t,n,c,!1);const p=l==="parent",b=l==="child"||s,h=f,y=new Set,v=Math.max.apply(null,Array.from(d.keys()));for(let m=v;m>=0;m-=1){const w=m===0,_=d.get(m);for(const k of _){if(k.isLeaf)continue;const{key:R,shallowLoaded:M}=k;if(b&&M&&k.children.forEach(I=>{!I.disabled&&!I.isLeaf&&I.shallowLoaded&&h.has(I.key)&&h.delete(I.key)}),k.disabled||!M)continue;let g=!0,C=!1,D=!0;for(const I of k.children){const Z=I.key;if(!I.disabled){if(D&&(D=!1),h.has(Z))C=!0;else if(y.has(Z)){C=!0,g=!1;break}else if(g=!1,C)break}}g&&!D?(p&&k.children.forEach(I=>{!I.disabled&&h.has(I.key)&&h.delete(I.key)}),h.add(R)):C&&y.add(R),w&&b&&h.has(R)&&h.delete(R)}}return{checkedKeys:Array.from(h),indeterminateKeys:Array.from(y)}}function na(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,a=new Set,s=new Set(e);return e.forEach(l=>{const c=r.get(l);c!==void 0&&mh(c,d=>{if(d.disabled)return zs.STOP;const{key:f}=d;if(!a.has(f)&&(a.add(f),s.add(f),p2(d.rawNode,i))){if(o)return zs.STOP;if(!t)throw new v2}})}),s}function S2(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(n||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function w2(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function T2(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function Td(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?k2:T2,i={reverse:n==="prev"};let a=!1,s=null;function l(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const d=Rl(c,i);d!==null?s=d:l(r(c,t))}else{const d=r(c,!1);if(d!==null)l(d);else{const f=P2(c);f!=null&&f.isGroup?l(r(f,t)):t&&l(r(c,!0))}}}}return l(e),s}function k2(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function P2(e){return e.parent}function Rl(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,a=t?-1:r,s=t?-1:1;for(let l=i;l!==a;l+=s){const c=o[l];if(!c.disabled&&!c.ignored)if(c.isGroup){const d=Rl(c,n);if(d!==null)return d}else return c}}return null}const A2={getChild(){return this.ignored?null:Rl(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Td(this,"next",e)},getPrev(e={}){return Td(this,"prev",e)}};function $2(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),o}function D2(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function gh(e,n,t,o,r,i=null,a=0){const s=[];return e.forEach((l,c)=>{var d;const f=Object.create(o);if(f.rawNode=l,f.siblings=s,f.level=a,f.index=c,f.isFirstChild=c===0,f.isLastChild=c+1===e.length,f.parent=i,!f.ignored){const p=r(l);Array.isArray(p)&&(f.children=gh(p,n,t,o,r,f,a+1))}s.push(f),n.set(f.key,f),t.has(a)||t.set(a,[]),(d=t.get(a))===null||d===void 0||d.push(f)}),s}function R2(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=h2,getIgnored:a=u2,getIsGroup:s=b2,getKey:l=d2}=n,c=(t=n.getChildren)!==null&&t!==void 0?t:c2,d=n.ignoreEmptyChildren?k=>{const R=c(k);return Array.isArray(R)?R.length?R:null:R}:c,f=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return l2(this.rawNode,d)},get shallowLoaded(){return f2(this.rawNode,d)},get ignored(){return a(this.rawNode)},contains(k){return D2(this,k)}},A2),p=gh(e,o,r,f,d);function b(k){if(k==null)return null;const R=o.get(k);return R&&!R.isGroup&&!R.ignored?R:null}function h(k){if(k==null)return null;const R=o.get(k);return R&&!R.ignored?R:null}function y(k,R){const M=h(k);return M?M.getPrev(R):null}function v(k,R){const M=h(k);return M?M.getNext(R):null}function m(k){const R=h(k);return R?R.getParent():null}function w(k){const R=h(k);return R?R.getChild():null}const _={treeNodes:p,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:d,getFlattenedNodes(k){return $2(p,k)},getNode:b,getPrev:y,getNext:v,getParent:m,getChild:w,getFirstAvailableNode(){return w2(p)},getPath(k,R={}){return S2(k,R,_)},getCheckedKeys(k,R={}){const{cascade:M=!0,leafOnly:g=!1,checkStrategy:C="all",allowNotLoaded:D=!1}=R;return is({checkedKeys:os(k),indeterminateKeys:rs(k),cascade:M,leafOnly:g,checkStrategy:C,allowNotLoaded:D},_)},check(k,R,M={}){const{cascade:g=!0,leafOnly:C=!1,checkStrategy:D="all",allowNotLoaded:I=!1}=M;return is({checkedKeys:os(R),indeterminateKeys:rs(R),keysToCheck:k==null?[]:wd(k),cascade:g,leafOnly:C,checkStrategy:D,allowNotLoaded:I},_)},uncheck(k,R,M={}){const{cascade:g=!0,leafOnly:C=!1,checkStrategy:D="all",allowNotLoaded:I=!1}=M;return is({checkedKeys:os(R),indeterminateKeys:rs(R),keysToUncheck:k==null?[]:wd(k),cascade:g,leafOnly:C,checkStrategy:D,allowNotLoaded:I},_)},getNonLeafKeys(k={}){return s2(p,k)}};return _}const ue={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},H2=_t(ue.neutralBase),bh=_t(ue.neutralInvertBase),I2="rgba("+bh.slice(0,3).join(", ")+", ";function We(e){return I2+String(e)+")"}function E2(e){const n=Array.from(bh);return n[3]=Number(e),pe(H2,n)}const _2=Object.assign(Object.assign({name:"common"},Mo),{baseColor:ue.neutralBase,primaryColor:ue.primaryDefault,primaryColorHover:ue.primaryHover,primaryColorPressed:ue.primaryActive,primaryColorSuppl:ue.primarySuppl,infoColor:ue.infoDefault,infoColorHover:ue.infoHover,infoColorPressed:ue.infoActive,infoColorSuppl:ue.infoSuppl,successColor:ue.successDefault,successColorHover:ue.successHover,successColorPressed:ue.successActive,successColorSuppl:ue.successSuppl,warningColor:ue.warningDefault,warningColorHover:ue.warningHover,warningColorPressed:ue.warningActive,warningColorSuppl:ue.warningSuppl,errorColor:ue.errorDefault,errorColorHover:ue.errorHover,errorColorPressed:ue.errorActive,errorColorSuppl:ue.errorSuppl,textColorBase:ue.neutralTextBase,textColor1:We(ue.alpha1),textColor2:We(ue.alpha2),textColor3:We(ue.alpha3),textColorDisabled:We(ue.alpha4),placeholderColor:We(ue.alpha4),placeholderColorDisabled:We(ue.alpha5),iconColor:We(ue.alpha4),iconColorDisabled:We(ue.alpha5),iconColorHover:We(Number(ue.alpha4)*1.25),iconColorPressed:We(Number(ue.alpha4)*.8),opacity1:ue.alpha1,opacity2:ue.alpha2,opacity3:ue.alpha3,opacity4:ue.alpha4,opacity5:ue.alpha5,dividerColor:We(ue.alphaDivider),borderColor:We(ue.alphaBorder),closeIconColorHover:We(Number(ue.alphaClose)),closeIconColor:We(Number(ue.alphaClose)),closeIconColorPressed:We(Number(ue.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:We(ue.alpha4),clearColorHover:hn(We(ue.alpha4),{alpha:1.25}),clearColorPressed:hn(We(ue.alpha4),{alpha:.8}),scrollbarColor:We(ue.alphaScrollbar),scrollbarColorHover:We(ue.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:We(ue.alphaProgressRail),railColor:We(ue.alphaRail),popoverColor:ue.neutralPopover,tableColor:ue.neutralCard,cardColor:ue.neutralCard,modalColor:ue.neutralModal,bodyColor:ue.neutralBody,tagColor:E2(ue.alphaTag),avatarColor:We(ue.alphaAvatar),invertedColor:ue.neutralBase,inputColor:We(ue.alphaInput),codeColor:We(ue.alphaCode),tabColor:We(ue.alphaTab),actionColor:We(ue.alphaAction),tableHeaderColor:We(ue.alphaAction),hoverColor:We(ue.alphaPending),tableColorHover:We(ue.alphaTablePending),tableColorStriped:We(ue.alphaTableStriped),pressedColor:We(ue.alphaPressed),opacityDisabled:ue.alphaDisabled,inputColorDisabled:We(ue.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),te=_2,xe={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},M2=_t(xe.neutralBase),vh=_t(xe.neutralInvertBase),B2="rgba("+vh.slice(0,3).join(", ")+", ";function kd(e){return B2+String(e)+")"}function Hn(e){const n=Array.from(vh);return n[3]=Number(e),pe(M2,n)}const z2=Object.assign(Object.assign({name:"common"},Mo),{baseColor:xe.neutralBase,primaryColor:xe.primaryDefault,primaryColorHover:xe.primaryHover,primaryColorPressed:xe.primaryActive,primaryColorSuppl:xe.primarySuppl,infoColor:xe.infoDefault,infoColorHover:xe.infoHover,infoColorPressed:xe.infoActive,infoColorSuppl:xe.infoSuppl,successColor:xe.successDefault,successColorHover:xe.successHover,successColorPressed:xe.successActive,successColorSuppl:xe.successSuppl,warningColor:xe.warningDefault,warningColorHover:xe.warningHover,warningColorPressed:xe.warningActive,warningColorSuppl:xe.warningSuppl,errorColor:xe.errorDefault,errorColorHover:xe.errorHover,errorColorPressed:xe.errorActive,errorColorSuppl:xe.errorSuppl,textColorBase:xe.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Hn(xe.alpha4),placeholderColor:Hn(xe.alpha4),placeholderColorDisabled:Hn(xe.alpha5),iconColor:Hn(xe.alpha4),iconColorHover:hn(Hn(xe.alpha4),{lightness:.75}),iconColorPressed:hn(Hn(xe.alpha4),{lightness:.9}),iconColorDisabled:Hn(xe.alpha5),opacity1:xe.alpha1,opacity2:xe.alpha2,opacity3:xe.alpha3,opacity4:xe.alpha4,opacity5:xe.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Hn(Number(xe.alphaClose)),closeIconColorHover:Hn(Number(xe.alphaClose)),closeIconColorPressed:Hn(Number(xe.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Hn(xe.alpha4),clearColorHover:hn(Hn(xe.alpha4),{lightness:.75}),clearColorPressed:hn(Hn(xe.alpha4),{lightness:.9}),scrollbarColor:kd(xe.alphaScrollbar),scrollbarColorHover:kd(xe.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Hn(xe.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:xe.neutralPopover,tableColor:xe.neutralCard,cardColor:xe.neutralCard,modalColor:xe.neutralModal,bodyColor:xe.neutralBody,tagColor:"#eee",avatarColor:Hn(xe.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Hn(xe.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:xe.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),oe=z2,L2={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},yh=e=>{const{textColorDisabled:n,iconColor:t,textColor2:o,fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s}=e;return Object.assign(Object.assign({},L2),{fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s,textColor:n,iconColor:t,extraTextColor:o})},O2={name:"Empty",common:oe,self:yh},Lt=O2,F2={name:"Empty",common:te,self:yh},Bo=F2,xh=e=>{const{scrollbarColor:n,scrollbarColorHover:t}=e;return{color:n,colorHover:t}},W2={name:"Scrollbar",common:oe,self:xh},Fn=W2,N2={name:"Scrollbar",common:te,self:xh},Zn=N2,{cubicBezierEaseInOut:Pd}=Mo;function j2({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:o=Pd,leaveCubicBezier:r=Pd}={}){return[ce(`&.${e}-transition-enter-active`,{transition:`all ${n} ${o}!important`}),ce(`&.${e}-transition-leave-active`,{transition:`all ${t} ${r}!important`}),ce(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),ce(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const G2=be("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[ce(">",[be("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[ce("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),ce(">",[be("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),ce(">, +",[be("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[ve("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[ce(">",[ne("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),ve("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[ce(">",[ne("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),ve("disabled",[ce(">",[ne("scrollbar",{pointerEvents:"none"})])]),ce(">",[ne("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[j2(),ce("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),V2=Object.assign(Object.assign({},Ke.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Ch=Te({name:"Scrollbar",props:V2,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:o}=On(e),r=Sa("Scrollbar",o,n),i=se(null),a=se(null),s=se(null),l=se(null),c=se(null),d=se(null),f=se(null),p=se(null),b=se(null),h=se(null),y=se(null),v=se(0),m=se(0),w=se(!1),_=se(!1);let k=!1,R=!1,M,g,C=0,D=0,I=0,Z=0;const E=p0(),Y=J(()=>{const{value:K}=p,{value:fe}=d,{value:we}=h;return K===null||fe===null||we===null?0:Math.min(K,we*K/fe+e.size*1.5)}),L=J(()=>`${Y.value}px`),B=J(()=>{const{value:K}=b,{value:fe}=f,{value:we}=y;return K===null||fe===null||we===null?0:we*K/fe+e.size*1.5}),ie=J(()=>`${B.value}px`),N=J(()=>{const{value:K}=p,{value:fe}=v,{value:we}=d,{value:Ie}=h;if(K===null||we===null||Ie===null)return 0;{const Ve=we-K;return Ve?fe/Ve*(Ie-Y.value):0}}),re=J(()=>`${N.value}px`),T=J(()=>{const{value:K}=b,{value:fe}=m,{value:we}=f,{value:Ie}=y;if(K===null||we===null||Ie===null)return 0;{const Ve=we-K;return Ve?fe/Ve*(Ie-B.value):0}}),q=J(()=>`${T.value}px`),$e=J(()=>{const{value:K}=p,{value:fe}=d;return K!==null&&fe!==null&&fe>K}),_e=J(()=>{const{value:K}=b,{value:fe}=f;return K!==null&&fe!==null&&fe>K}),Nn=J(()=>{const{trigger:K}=e;return K==="none"||w.value}),Le=J(()=>{const{trigger:K}=e;return K==="none"||_.value}),Be=J(()=>{const{container:K}=e;return K?K():a.value}),Ce=J(()=>{const{content:K}=e;return K?K():s.value}),De=Cf(()=>{e.container||Gn({top:v.value,left:m.value})}),jn=()=>{De.isDeactivated||X()},Ae=K=>{if(De.isDeactivated)return;const{onResize:fe}=e;fe&&fe(K),X()},Gn=(K,fe)=>{if(!e.scrollable)return;if(typeof K=="number"){S(fe??0,K,0,!1,"auto");return}const{left:we,top:Ie,index:Ve,elSize:bn,position:yn,behavior:Ze,el:Dn,debounce:dn=!0}=K;(we!==void 0||Ie!==void 0)&&S(we??0,Ie??0,0,!1,Ze),Dn!==void 0?S(0,Dn.offsetTop,Dn.offsetHeight,dn,Ze):Ve!==void 0&&bn!==void 0?S(0,Ve*bn,bn,dn,Ze):yn==="bottom"?S(0,Number.MAX_SAFE_INTEGER,0,!1,Ze):yn==="top"&&S(0,0,0,!1,Ze)},qe=(K,fe)=>{if(!e.scrollable)return;const{value:we}=Be;we&&(typeof K=="object"?we.scrollBy(K):we.scrollBy(K,fe||0))};function S(K,fe,we,Ie,Ve){const{value:bn}=Be;if(bn){if(Ie){const{scrollTop:yn,offsetHeight:Ze}=bn;if(fe>yn){fe+we<=yn+Ze||bn.scrollTo({left:K,top:fe+we-Ze,behavior:Ve});return}}bn.scrollTo({left:K,top:fe,behavior:Ve})}}function A(){ae(),Q(),X()}function z(){j()}function j(){V(),ee()}function V(){g!==void 0&&window.clearTimeout(g),g=window.setTimeout(()=>{_.value=!1},e.duration)}function ee(){M!==void 0&&window.clearTimeout(M),M=window.setTimeout(()=>{w.value=!1},e.duration)}function ae(){M!==void 0&&window.clearTimeout(M),w.value=!0}function Q(){g!==void 0&&window.clearTimeout(g),_.value=!0}function U(K){const{onScroll:fe}=e;fe&&fe(K),F()}function F(){const{value:K}=Be;K&&(v.value=K.scrollTop,m.value=K.scrollLeft*(r!=null&&r.value?-1:1))}function ge(){const{value:K}=Ce;K&&(d.value=K.offsetHeight,f.value=K.offsetWidth);const{value:fe}=Be;fe&&(p.value=fe.offsetHeight,b.value=fe.offsetWidth);const{value:we}=c,{value:Ie}=l;we&&(y.value=we.offsetWidth),Ie&&(h.value=Ie.offsetHeight)}function he(){const{value:K}=Be;K&&(v.value=K.scrollTop,m.value=K.scrollLeft*(r!=null&&r.value?-1:1),p.value=K.offsetHeight,b.value=K.offsetWidth,d.value=K.scrollHeight,f.value=K.scrollWidth);const{value:fe}=c,{value:we}=l;fe&&(y.value=fe.offsetWidth),we&&(h.value=we.offsetHeight)}function X(){e.scrollable&&(e.useUnifiedContainer?he():(ge(),F()))}function de(K){var fe;return!(!((fe=i.value)===null||fe===void 0)&&fe.contains(ji(K)))}function me(K){K.preventDefault(),K.stopPropagation(),R=!0,mn("mousemove",window,Oe,!0),mn("mouseup",window,He,!0),D=m.value,I=r!=null&&r.value?window.innerWidth-K.clientX:K.clientX}function Oe(K){if(!R)return;M!==void 0&&window.clearTimeout(M),g!==void 0&&window.clearTimeout(g);const{value:fe}=b,{value:we}=f,{value:Ie}=B;if(fe===null||we===null)return;const bn=(r!=null&&r.value?window.innerWidth-K.clientX-I:K.clientX-I)*(we-fe)/(fe-Ie),yn=we-fe;let Ze=D+bn;Ze=Math.min(yn,Ze),Ze=Math.max(Ze,0);const{value:Dn}=Be;if(Dn){Dn.scrollLeft=Ze*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:dn}=e;dn&&dn(Ze)}}function He(K){K.preventDefault(),K.stopPropagation(),on("mousemove",window,Oe,!0),on("mouseup",window,He,!0),R=!1,X(),de(K)&&j()}function Fe(K){K.preventDefault(),K.stopPropagation(),k=!0,mn("mousemove",window,en,!0),mn("mouseup",window,Vn,!0),C=v.value,Z=K.clientY}function en(K){if(!k)return;M!==void 0&&window.clearTimeout(M),g!==void 0&&window.clearTimeout(g);const{value:fe}=p,{value:we}=d,{value:Ie}=Y;if(fe===null||we===null)return;const bn=(K.clientY-Z)*(we-fe)/(fe-Ie),yn=we-fe;let Ze=C+bn;Ze=Math.min(yn,Ze),Ze=Math.max(Ze,0);const{value:Dn}=Be;Dn&&(Dn.scrollTop=Ze)}function Vn(K){K.preventDefault(),K.stopPropagation(),on("mousemove",window,en,!0),on("mouseup",window,Vn,!0),k=!1,X(),de(K)&&j()}Ro(()=>{const{value:K}=_e,{value:fe}=$e,{value:we}=n,{value:Ie}=c,{value:Ve}=l;Ie&&(K?Ie.classList.remove(`${we}-scrollbar-rail--disabled`):Ie.classList.add(`${we}-scrollbar-rail--disabled`)),Ve&&(fe?Ve.classList.remove(`${we}-scrollbar-rail--disabled`):Ve.classList.add(`${we}-scrollbar-rail--disabled`))}),gt(()=>{e.container||X()}),Ln(()=>{M!==void 0&&window.clearTimeout(M),g!==void 0&&window.clearTimeout(g),on("mousemove",window,en,!0),on("mouseup",window,Vn,!0)});const Ot=Ke("Scrollbar","-scrollbar",G2,Fn,e,n),it=J(()=>{const{common:{cubicBezierEaseInOut:K,scrollbarBorderRadius:fe,scrollbarHeight:we,scrollbarWidth:Ie},self:{color:Ve,colorHover:bn}}=Ot.value;return{"--n-scrollbar-bezier":K,"--n-scrollbar-color":Ve,"--n-scrollbar-color-hover":bn,"--n-scrollbar-border-radius":fe,"--n-scrollbar-width":Ie,"--n-scrollbar-height":we}}),Xn=t?ct("scrollbar",void 0,it,e):void 0;return Object.assign(Object.assign({},{scrollTo:Gn,scrollBy:qe,sync:X,syncUnifiedContainer:he,handleMouseEnterWrapper:A,handleMouseLeaveWrapper:z}),{mergedClsPrefix:n,rtlEnabled:r,containerScrollTop:v,wrapperRef:i,containerRef:a,contentRef:s,yRailRef:l,xRailRef:c,needYBar:$e,needXBar:_e,yBarSizePx:L,xBarSizePx:ie,yBarTopPx:re,xBarLeftPx:q,isShowXBar:Nn,isShowYBar:Le,isIos:E,handleScroll:U,handleContentResize:jn,handleContainerResize:Ae,handleYScrollMouseDown:Fe,handleXScrollMouseDown:me,cssVars:t?void 0:it,themeClass:Xn==null?void 0:Xn.themeClass,onRender:Xn==null?void 0:Xn.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:o,rtlEnabled:r,internalHoistYRail:i}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",s=()=>P("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},P(a?Sc:no,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?P("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),l=()=>{var d,f;return(d=this.onRender)===null||d===void 0||d.call(this),P("div",Et(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,r&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:o?void 0:this.handleMouseEnterWrapper,onMouseleave:o?void 0:this.handleMouseLeaveWrapper}),[this.container?(f=n.default)===null||f===void 0?void 0:f.call(n):P("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},P(Ui,{onResize:this.handleContentResize},{default:()=>P("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:s(),this.xScrollable&&P("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},P(a?Sc:no,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?P("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},c=this.container?l():P(Ui,{onResize:this.handleContainerResize},{default:l});return i?P(Ye,null,c,s()):c}}),Sh=Ch,wh=Ch,K2={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},Th=e=>{const{borderRadius:n,popoverColor:t,textColor3:o,dividerColor:r,textColor2:i,primaryColorPressed:a,textColorDisabled:s,primaryColor:l,opacityDisabled:c,hoverColor:d,fontSizeSmall:f,fontSizeMedium:p,fontSizeLarge:b,fontSizeHuge:h,heightSmall:y,heightMedium:v,heightLarge:m,heightHuge:w}=e;return Object.assign(Object.assign({},K2),{optionFontSizeSmall:f,optionFontSizeMedium:p,optionFontSizeLarge:b,optionFontSizeHuge:h,optionHeightSmall:y,optionHeightMedium:v,optionHeightLarge:m,optionHeightHuge:w,borderRadius:n,color:t,groupHeaderTextColor:o,actionDividerColor:r,optionTextColor:i,optionTextColorPressed:a,optionTextColorDisabled:s,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:d,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:d,actionTextColor:i,loadingColor:l})},U2={name:"InternalSelectMenu",common:oe,peers:{Scrollbar:Fn,Empty:Lt},self:Th},si=U2,q2={name:"InternalSelectMenu",common:te,peers:{Scrollbar:Zn,Empty:Bo},self:Th},li=q2,{cubicBezierEaseIn:Ad,cubicBezierEaseOut:$d}=Mo;function Z2({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:o="",originalTransition:r=""}={}){return[ce("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${Ad}, transform ${n} ${Ad} ${r&&","+r}`}),ce("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${$d}, transform ${n} ${$d} ${r&&","+r}`}),ce("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${t})`}),ce("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const J2=be("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),X2=Te({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ai("-base-wave",J2,Qe(e,"clsPrefix"));const n=se(null),t=se(!1);let o=null;return Ln(()=>{o!==null&&window.clearTimeout(o)}),{active:t,selfRef:n,play(){o!==null&&(window.clearTimeout(o),t.value=!1,o=null),er(()=>{var r;(r=n.value)===null||r===void 0||r.offsetHeight,t.value=!0,o=window.setTimeout(()=>{t.value=!1,o=null},1e3)})}}},render(){const{clsPrefix:e}=this;return P("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),Y2={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},kh=e=>{const{boxShadow2:n,popoverColor:t,textColor2:o,borderRadius:r,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},Y2),{fontSize:i,borderRadius:r,color:t,dividerColor:a,textColor:o,boxShadow:n})},Q2={name:"Popover",common:oe,self:kh},so=Q2,ek={name:"Popover",common:te,self:kh},zo=ek,as={top:"bottom",bottom:"top",left:"right",right:"left"},xn="var(--n-arrow-height) * 1.414",nk=ce([be("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[ce(">",[be("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),_n("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[_n("scrollable",[_n("show-header-or-footer","padding: var(--n-padding);")])]),ne("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ne("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ve("scrollable, show-header-or-footer",[ne("content",`
 padding: var(--n-padding);
 `)])]),be("popover-shared",`
 transform-origin: inherit;
 `,[be("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[be("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${xn});
 height: calc(${xn});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),ce("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),ce("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),ce("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),ce("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),st("top-start",`
 top: calc(${xn} / -2);
 left: calc(${Pt("top-start")} - var(--v-offset-left));
 `),st("top",`
 top: calc(${xn} / -2);
 transform: translateX(calc(${xn} / -2)) rotate(45deg);
 left: 50%;
 `),st("top-end",`
 top: calc(${xn} / -2);
 right: calc(${Pt("top-end")} + var(--v-offset-left));
 `),st("bottom-start",`
 bottom: calc(${xn} / -2);
 left: calc(${Pt("bottom-start")} - var(--v-offset-left));
 `),st("bottom",`
 bottom: calc(${xn} / -2);
 transform: translateX(calc(${xn} / -2)) rotate(45deg);
 left: 50%;
 `),st("bottom-end",`
 bottom: calc(${xn} / -2);
 right: calc(${Pt("bottom-end")} + var(--v-offset-left));
 `),st("left-start",`
 left: calc(${xn} / -2);
 top: calc(${Pt("left-start")} - var(--v-offset-top));
 `),st("left",`
 left: calc(${xn} / -2);
 transform: translateY(calc(${xn} / -2)) rotate(45deg);
 top: 50%;
 `),st("left-end",`
 left: calc(${xn} / -2);
 bottom: calc(${Pt("left-end")} + var(--v-offset-top));
 `),st("right-start",`
 right: calc(${xn} / -2);
 top: calc(${Pt("right-start")} - var(--v-offset-top));
 `),st("right",`
 right: calc(${xn} / -2);
 transform: translateY(calc(${xn} / -2)) rotate(45deg);
 top: 50%;
 `),st("right-end",`
 right: calc(${xn} / -2);
 bottom: calc(${Pt("right-end")} + var(--v-offset-top));
 `),...Z1({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),o=t?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",s=`calc((${`var(--v-target-${o}, 0px)`} - ${xn}) / 2)`,l=Pt(r);return ce(`[v-placement="${r}"] >`,[be("popover-shared",[ve("center-arrow",[be("popover-arrow",`${n}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function Pt(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function st(e,n){const t=e.split("-")[0],o=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return ce(`[v-placement="${e}"] >`,[be("popover-shared",`
 margin-${as[t]}: var(--n-space);
 `,[ve("show-arrow",`
 margin-${as[t]}: var(--n-space-arrow);
 `),ve("overlap",`
 margin: 0;
 `),Yv("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${as[t]}: auto;
 ${o}
 `,[be("popover-arrow",n)])])])}const Ph=Object.assign(Object.assign({},Ke.props),{to:tr.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Ah=({arrowStyle:e,clsPrefix:n})=>P("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},P("div",{class:`${n}-popover-arrow`,style:e})),tk=Te({name:"PopoverBody",inheritAttrs:!1,props:Ph,setup(e,{slots:n,attrs:t}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i}=On(e),a=Ke("Popover","-popover",nk,so,e,r),s=se(null),l=je("NPopover"),c=se(null),d=se(e.show),f=se(!1);Ro(()=>{const{show:g}=e;g&&!Qv()&&!e.internalDeactivateImmediately&&(f.value=!0)});const p=J(()=>{const{trigger:g,onClickoutside:C}=e,D=[],{positionManuallyRef:{value:I}}=l;return I||(g==="click"&&!C&&D.push([Rc,k,void 0,{capture:!0}]),g==="hover"&&D.push([T0,_])),C&&D.push([Rc,k,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&f.value)&&D.push([fl,e.show]),D}),b=J(()=>{const g=e.width==="trigger"?void 0:Mi(e.width),C=[];g&&C.push({width:g});const{maxWidth:D,minWidth:I}=e;return D&&C.push({maxWidth:Mi(D)}),I&&C.push({maxWidth:Mi(I)}),i||C.push(h.value),C}),h=J(()=>{const{common:{cubicBezierEaseInOut:g,cubicBezierEaseIn:C,cubicBezierEaseOut:D},self:{space:I,spaceArrow:Z,padding:E,fontSize:Y,textColor:L,dividerColor:B,color:ie,boxShadow:N,borderRadius:re,arrowHeight:T,arrowOffset:q,arrowOffsetVertical:$e}}=a.value;return{"--n-box-shadow":N,"--n-bezier":g,"--n-bezier-ease-in":C,"--n-bezier-ease-out":D,"--n-font-size":Y,"--n-text-color":L,"--n-color":ie,"--n-divider-color":B,"--n-border-radius":re,"--n-arrow-height":T,"--n-arrow-offset":q,"--n-arrow-offset-vertical":$e,"--n-padding":E,"--n-space":I,"--n-space-arrow":Z}}),y=i?ct("popover",void 0,h,e):void 0;l.setBodyInstance({syncPosition:v}),Ln(()=>{l.setBodyInstance(null)}),Cn(Qe(e,"show"),g=>{e.animated||(g?d.value=!0:d.value=!1)});function v(){var g;(g=s.value)===null||g===void 0||g.syncPosition()}function m(g){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(g)}function w(g){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(g)}function _(g){e.trigger==="hover"&&!R().contains(ji(g))&&l.handleMouseMoveOutside(g)}function k(g){(e.trigger==="click"&&!R().contains(ji(g))||e.onClickoutside)&&l.handleClickOutside(g)}function R(){return l.getTriggerElement()}$n(ga,c),$n(gl,null),$n(ml,null);function M(){if(y==null||y.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&f.value))return null;let C;const D=l.internalRenderBodyRef.value,{value:I}=r;if(D)C=D([`${I}-popover-shared`,y==null?void 0:y.themeClass.value,e.overlap&&`${I}-popover-shared--overlap`,e.showArrow&&`${I}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${I}-popover-shared--center-arrow`],c,b.value,m,w);else{const{value:Z}=l.extraClassRef,{internalTrapFocus:E}=e,Y=!Ts(n.header)||!Ts(n.footer),L=()=>{var B;const ie=Y?P(Ye,null,Rt(n.header,T=>T?P("div",{class:`${I}-popover__header`,style:e.headerStyle},T):null),Rt(n.default,T=>T?P("div",{class:`${I}-popover__content`,style:e.contentStyle},n):null),Rt(n.footer,T=>T?P("div",{class:`${I}-popover__footer`,style:e.footerStyle},T):null)):e.scrollable?(B=n.default)===null||B===void 0?void 0:B.call(n):P("div",{class:`${I}-popover__content`,style:e.contentStyle},n),N=e.scrollable?P(wh,{contentClass:Y?void 0:`${I}-popover__content`,contentStyle:Y?void 0:e.contentStyle},{default:()=>ie}):ie,re=e.showArrow?Ah({arrowStyle:e.arrowStyle,clsPrefix:I}):null;return[N,re]};C=P("div",Et({class:[`${I}-popover`,`${I}-popover-shared`,y==null?void 0:y.themeClass.value,Z.map(B=>`${I}-${B}`),{[`${I}-popover--scrollable`]:e.scrollable,[`${I}-popover--show-header-or-footer`]:Y,[`${I}-popover--raw`]:e.raw,[`${I}-popover-shared--overlap`]:e.overlap,[`${I}-popover-shared--show-arrow`]:e.showArrow,[`${I}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:b.value,onKeydown:l.handleKeydown,onMouseenter:m,onMouseleave:w},t),E?P(dy,{active:e.show,autoFocus:!0},{default:L}):L())}return ua(C,p.value)}return{displayed:f,namespace:o,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:tr(e),followerEnabled:d,renderContentNode:M}},render(){return P(df,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===tr.tdkey},{default:()=>this.animated?P(no,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),ok=Object.keys(Ph),rk={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function ik(e,n,t){rk[n].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],i=t[o];r?e.props[o]=(...a)=>{r(...a),i(...a)}:e.props[o]=i})}const ak=Sn("").type,wa={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:tr.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},sk=Object.assign(Object.assign(Object.assign({},Ke.props),wa),{internalOnAfterLeave:Function,internalRenderBody:Function}),$h=Te({name:"Popover",inheritAttrs:!1,props:sk,__popover__:!0,setup(e){const n=pl(),t=se(null),o=J(()=>e.show),r=se(e.defaultShow),i=hl(o,r),a=wn(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:L}=e;return!!(L!=null&&L())},l=()=>s()?!1:i.value,c=nf(e,["arrow","showArrow"]),d=J(()=>e.overlap?!1:c.value);let f=null;const p=se(null),b=se(null),h=wn(()=>e.x!==void 0&&e.y!==void 0);function y(L){const{"onUpdate:show":B,onUpdateShow:ie,onShow:N,onHide:re}=e;r.value=L,B&&ln(B,L),ie&&ln(ie,L),L&&N&&ln(N,!0),L&&re&&ln(re,!1)}function v(){f&&f.syncPosition()}function m(){const{value:L}=p;L&&(window.clearTimeout(L),p.value=null)}function w(){const{value:L}=b;L&&(window.clearTimeout(L),b.value=null)}function _(){const L=s();if(e.trigger==="focus"&&!L){if(l())return;y(!0)}}function k(){const L=s();if(e.trigger==="focus"&&!L){if(!l())return;y(!1)}}function R(){const L=s();if(e.trigger==="hover"&&!L){if(w(),p.value!==null||l())return;const B=()=>{y(!0),p.value=null},{delay:ie}=e;ie===0?B():p.value=window.setTimeout(B,ie)}}function M(){const L=s();if(e.trigger==="hover"&&!L){if(m(),b.value!==null||!l())return;const B=()=>{y(!1),b.value=null},{duration:ie}=e;ie===0?B():b.value=window.setTimeout(B,ie)}}function g(){M()}function C(L){var B;l()&&(e.trigger==="click"&&(m(),w(),y(!1)),(B=e.onClickoutside)===null||B===void 0||B.call(e,L))}function D(){if(e.trigger==="click"&&!s()){m(),w();const L=!l();y(L)}}function I(L){e.internalTrapFocus&&L.key==="Escape"&&(m(),w(),y(!1))}function Z(L){r.value=L}function E(){var L;return(L=t.value)===null||L===void 0?void 0:L.targetRef}function Y(L){f=L}return $n("NPopover",{getTriggerElement:E,handleKeydown:I,handleMouseEnter:R,handleMouseLeave:M,handleClickOutside:C,handleMouseMoveOutside:g,setBodyInstance:Y,positionManuallyRef:h,isMountedRef:n,zIndexRef:Qe(e,"zIndex"),extraClassRef:Qe(e,"internalExtraClass"),internalRenderBodyRef:Qe(e,"internalRenderBody")}),Ro(()=>{i.value&&s()&&y(!1)}),{binderInstRef:t,positionManually:h,mergedShowConsideringDisabledProp:a,uncontrolledShow:r,mergedShowArrow:d,getMergedShow:l,setShow:Z,handleClick:D,handleMouseEnter:R,handleMouseLeave:M,handleFocus:_,handleBlur:k,syncPosition:v}},render(){var e;const{positionManually:n,$slots:t}=this;let o,r=!1;if(!n&&(t.activator?o=Cc(t,"activator"):o=Cc(t,"trigger"),o)){o=mt(o),o=o.type===ak?P("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,s=[i,...a],l={onBlur:c=>{s.forEach(d=>{d.onBlur(c)})},onFocus:c=>{s.forEach(d=>{d.onFocus(c)})},onClick:c=>{s.forEach(d=>{d.onClick(c)})},onMouseenter:c=>{s.forEach(d=>{d.onMouseenter(c)})},onMouseleave:c=>{s.forEach(d=>{d.onMouseleave(c)})}};ik(o,a?"nested":n?"manual":this.trigger,l)}}return P(af,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?ua(P("div",{style:{position:"fixed",inset:0}}),[[lf,{enabled:i,zIndex:this.zIndex}]]):null,n?null:P(sf,null,{default:()=>o}),P(tk,Gu(this.$props,ok,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,s;return(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a)},header:()=>{var a,s;return(s=(a=this.$slots).header)===null||s===void 0?void 0:s.call(a)},footer:()=>{var a,s;return(s=(a=this.$slots).footer)===null||s===void 0?void 0:s.call(a)}})]}})}}),Dh={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},lk={name:"Tag",common:te,self(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:d,tagColor:f,opacityDisabled:p,closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:y,closeColorHover:v,closeColorPressed:m,borderRadiusSmall:w,fontSizeMini:_,fontSizeTiny:k,fontSizeSmall:R,fontSizeMedium:M,heightMini:g,heightTiny:C,heightSmall:D,heightMedium:I,buttonColor2Hover:Z,buttonColor2Pressed:E,fontWeightStrong:Y}=e;return Object.assign(Object.assign({},Dh),{closeBorderRadius:w,heightTiny:g,heightSmall:C,heightMedium:D,heightLarge:I,borderRadius:w,opacityDisabled:p,fontSizeTiny:_,fontSizeSmall:k,fontSizeMedium:R,fontSizeLarge:M,fontWeightStrong:Y,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:Z,colorPressedCheckable:E,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${d}`,textColor:n,color:f,colorBordered:"#0000",closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:y,closeColorHover:v,closeColorPressed:m,borderPrimary:`1px solid ${W(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:W(r,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:hn(r,{lightness:.7}),closeIconColorHoverPrimary:hn(r,{lightness:.7}),closeIconColorPressedPrimary:hn(r,{lightness:.7}),closeColorHoverPrimary:W(r,{alpha:.16}),closeColorPressedPrimary:W(r,{alpha:.12}),borderInfo:`1px solid ${W(i,{alpha:.3})}`,textColorInfo:i,colorInfo:W(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:hn(i,{alpha:.7}),closeIconColorHoverInfo:hn(i,{alpha:.7}),closeIconColorPressedInfo:hn(i,{alpha:.7}),closeColorHoverInfo:W(i,{alpha:.16}),closeColorPressedInfo:W(i,{alpha:.12}),borderSuccess:`1px solid ${W(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:W(a,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:hn(a,{alpha:.7}),closeIconColorHoverSuccess:hn(a,{alpha:.7}),closeIconColorPressedSuccess:hn(a,{alpha:.7}),closeColorHoverSuccess:W(a,{alpha:.16}),closeColorPressedSuccess:W(a,{alpha:.12}),borderWarning:`1px solid ${W(s,{alpha:.3})}`,textColorWarning:s,colorWarning:W(s,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:hn(s,{alpha:.7}),closeIconColorHoverWarning:hn(s,{alpha:.7}),closeIconColorPressedWarning:hn(s,{alpha:.7}),closeColorHoverWarning:W(s,{alpha:.16}),closeColorPressedWarning:W(s,{alpha:.11}),borderError:`1px solid ${W(l,{alpha:.3})}`,textColorError:l,colorError:W(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:hn(l,{alpha:.7}),closeIconColorHoverError:hn(l,{alpha:.7}),closeIconColorPressedError:hn(l,{alpha:.7}),closeColorHoverError:W(l,{alpha:.16}),closeColorPressedError:W(l,{alpha:.12})})}},Rh=lk,ck=e=>{const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:d,opacityDisabled:f,tagColor:p,closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:y,borderRadiusSmall:v,fontSizeMini:m,fontSizeTiny:w,fontSizeSmall:_,fontSizeMedium:k,heightMini:R,heightTiny:M,heightSmall:g,heightMedium:C,closeColorHover:D,closeColorPressed:I,buttonColor2Hover:Z,buttonColor2Pressed:E,fontWeightStrong:Y}=e;return Object.assign(Object.assign({},Dh),{closeBorderRadius:v,heightTiny:R,heightSmall:M,heightMedium:g,heightLarge:C,borderRadius:v,opacityDisabled:f,fontSizeTiny:m,fontSizeSmall:w,fontSizeMedium:_,fontSizeLarge:k,fontWeightStrong:Y,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:Z,colorPressedCheckable:E,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${d}`,textColor:n,color:p,colorBordered:"rgb(250, 250, 252)",closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:y,closeColorHover:D,closeColorPressed:I,borderPrimary:`1px solid ${W(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:W(r,{alpha:.12}),colorBorderedPrimary:W(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:W(r,{alpha:.12}),closeColorPressedPrimary:W(r,{alpha:.18}),borderInfo:`1px solid ${W(i,{alpha:.3})}`,textColorInfo:i,colorInfo:W(i,{alpha:.12}),colorBorderedInfo:W(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:W(i,{alpha:.12}),closeColorPressedInfo:W(i,{alpha:.18}),borderSuccess:`1px solid ${W(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:W(a,{alpha:.12}),colorBorderedSuccess:W(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:W(a,{alpha:.12}),closeColorPressedSuccess:W(a,{alpha:.18}),borderWarning:`1px solid ${W(s,{alpha:.35})}`,textColorWarning:s,colorWarning:W(s,{alpha:.15}),colorBorderedWarning:W(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:W(s,{alpha:.12}),closeColorPressedWarning:W(s,{alpha:.18}),borderError:`1px solid ${W(l,{alpha:.23})}`,textColorError:l,colorError:W(l,{alpha:.1}),colorBorderedError:W(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:W(l,{alpha:.12}),closeColorPressedError:W(l,{alpha:.18})})},dk={name:"Tag",common:oe,self:ck},Hh=dk,uk=be("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[ce(">",[ne("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[ce("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),ce("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),ne("placeholder",`
 display: flex;
 `),ne("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ea({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ls=Te({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return ai("-base-clear",uk,Qe(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return P("div",{class:`${e}-base-clear`},P(Dl,null,{default:()=>{var n,t;return this.show?P("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Mr(this.$slots.icon,()=>[P(Qi,{clsPrefix:e},{default:()=>P(n2,null)})])):P("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(n=this.$slots).placeholder)===null||t===void 0?void 0:t.call(n))}}))}}),fk=Te({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:t}=e;return P(ph,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?P(Ls,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>P(Qi,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Mr(n.default,()=>[P(e2,null)])})}):null})}}}),Ih={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},hk=e=>{const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:f,borderColor:p,iconColor:b,iconColorDisabled:h,clearColor:y,clearColorHover:v,clearColorPressed:m,placeholderColor:w,placeholderColorDisabled:_,fontSizeTiny:k,fontSizeSmall:R,fontSizeMedium:M,fontSizeLarge:g,heightTiny:C,heightSmall:D,heightMedium:I,heightLarge:Z}=e;return Object.assign(Object.assign({},Ih),{fontSizeTiny:k,fontSizeSmall:R,fontSizeMedium:M,fontSizeLarge:g,heightTiny:C,heightSmall:D,heightMedium:I,heightLarge:Z,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:w,placeholderColorDisabled:_,color:r,colorDisabled:i,colorActive:r,border:`1px solid ${p}`,borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${W(a,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${W(a,{alpha:.2})}`,caretColor:a,arrowColor:b,arrowColorDisabled:h,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${W(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${W(l,{alpha:.2})}`,colorActiveWarning:r,caretColorWarning:l,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${f}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${f}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${W(d,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${W(d,{alpha:.2})}`,colorActiveError:r,caretColorError:d,clearColor:y,clearColorHover:v,clearColorPressed:m})},pk={name:"InternalSelection",common:oe,peers:{Popover:so},self:hk},Hl=pk,mk={name:"InternalSelection",common:te,peers:{Popover:zo},self(e){const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:f,iconColor:p,iconColorDisabled:b,clearColor:h,clearColorHover:y,clearColorPressed:v,placeholderColor:m,placeholderColorDisabled:w,fontSizeTiny:_,fontSizeSmall:k,fontSizeMedium:R,fontSizeLarge:M,heightTiny:g,heightSmall:C,heightMedium:D,heightLarge:I}=e;return Object.assign(Object.assign({},Ih),{fontSizeTiny:_,fontSizeSmall:k,fontSizeMedium:R,fontSizeLarge:M,heightTiny:g,heightSmall:C,heightMedium:D,heightLarge:I,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:m,placeholderColorDisabled:w,color:r,colorDisabled:i,colorActive:W(a,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${W(a,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${W(a,{alpha:.4})}`,caretColor:a,arrowColor:p,arrowColorDisabled:b,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${W(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${W(l,{alpha:.4})}`,colorActiveWarning:W(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${f}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${f}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${W(d,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${W(d,{alpha:.4})}`,colorActiveError:W(d,{alpha:.1}),caretColorError:d,clearColor:h,clearColorHover:y,clearColorPressed:v})}},Il=mk,{cubicBezierEaseInOut:Vt}=Mo;function gk({duration:e=".2s",delay:n=".1s"}={}){return[ce("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),ce("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),ce("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Vt},
 max-width ${e} ${Vt} ${n},
 margin-left ${e} ${Vt} ${n},
 margin-right ${e} ${Vt} ${n};
 `),ce("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Vt} ${n},
 max-width ${e} ${Vt},
 margin-left ${e} ${Vt},
 margin-right ${e} ${Vt};
 `)]}const Eh={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},bk={name:"Alert",common:te,self(e){const{lineHeight:n,borderRadius:t,fontWeightStrong:o,dividerColor:r,inputColor:i,textColor1:a,textColor2:s,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,infoColorSuppl:b,successColorSuppl:h,warningColorSuppl:y,errorColorSuppl:v,fontSize:m}=e;return Object.assign(Object.assign({},Eh),{fontSize:m,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${r}`,color:i,titleTextColor:a,iconColor:s,contentTextColor:s,closeBorderRadius:t,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,borderInfo:`1px solid ${W(b,{alpha:.35})}`,colorInfo:W(b,{alpha:.25}),titleTextColorInfo:a,iconColorInfo:b,contentTextColorInfo:s,closeColorHoverInfo:l,closeColorPressedInfo:c,closeIconColorInfo:d,closeIconColorHoverInfo:f,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${W(h,{alpha:.35})}`,colorSuccess:W(h,{alpha:.25}),titleTextColorSuccess:a,iconColorSuccess:h,contentTextColorSuccess:s,closeColorHoverSuccess:l,closeColorPressedSuccess:c,closeIconColorSuccess:d,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${W(y,{alpha:.35})}`,colorWarning:W(y,{alpha:.25}),titleTextColorWarning:a,iconColorWarning:y,contentTextColorWarning:s,closeColorHoverWarning:l,closeColorPressedWarning:c,closeIconColorWarning:d,closeIconColorHoverWarning:f,closeIconColorPressedWarning:p,borderError:`1px solid ${W(v,{alpha:.35})}`,colorError:W(v,{alpha:.25}),titleTextColorError:a,iconColorError:v,contentTextColorError:s,closeColorHoverError:l,closeColorPressedError:c,closeIconColorError:d,closeIconColorHoverError:f,closeIconColorPressedError:p})}},vk=bk,yk=e=>{const{lineHeight:n,borderRadius:t,fontWeightStrong:o,baseColor:r,dividerColor:i,actionColor:a,textColor1:s,textColor2:l,closeColorHover:c,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:b,infoColor:h,successColor:y,warningColor:v,errorColor:m,fontSize:w}=e;return Object.assign(Object.assign({},Eh),{fontSize:w,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${i}`,color:a,titleTextColor:s,iconColor:l,contentTextColor:l,closeBorderRadius:t,closeColorHover:c,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:b,borderInfo:`1px solid ${pe(r,W(h,{alpha:.25}))}`,colorInfo:pe(r,W(h,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:h,contentTextColorInfo:l,closeColorHoverInfo:c,closeColorPressedInfo:d,closeIconColorInfo:f,closeIconColorHoverInfo:p,closeIconColorPressedInfo:b,borderSuccess:`1px solid ${pe(r,W(y,{alpha:.25}))}`,colorSuccess:pe(r,W(y,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:y,contentTextColorSuccess:l,closeColorHoverSuccess:c,closeColorPressedSuccess:d,closeIconColorSuccess:f,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:b,borderWarning:`1px solid ${pe(r,W(v,{alpha:.33}))}`,colorWarning:pe(r,W(v,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:v,contentTextColorWarning:l,closeColorHoverWarning:c,closeColorPressedWarning:d,closeIconColorWarning:f,closeIconColorHoverWarning:p,closeIconColorPressedWarning:b,borderError:`1px solid ${pe(r,W(m,{alpha:.25}))}`,colorError:pe(r,W(m,{alpha:.08})),titleTextColorError:s,iconColorError:m,contentTextColorError:l,closeColorHoverError:c,closeColorPressedError:d,closeIconColorError:f,closeIconColorHoverError:p,closeIconColorPressedError:b})},xk={name:"Alert",common:oe,self:yk},Ck=xk,Sk={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},_h=e=>{const{borderRadius:n,railColor:t,primaryColor:o,primaryColorHover:r,primaryColorPressed:i,textColor2:a}=e;return Object.assign(Object.assign({},Sk),{borderRadius:n,railColor:t,railColorActive:o,linkColor:W(o,{alpha:.15}),linkTextColor:a,linkTextColorHover:r,linkTextColorPressed:i,linkTextColorActive:o})},wk={name:"Anchor",common:oe,self:_h},Tk=wk,kk={name:"Anchor",common:te,self:_h},Pk=kk,Ak=cr&&"chrome"in window;cr&&navigator.userAgent.includes("Firefox");const Mh=cr&&navigator.userAgent.includes("Safari")&&!Ak,Bh={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},$k={name:"Input",common:te,self(e){const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:f,borderRadius:p,lineHeight:b,fontSizeTiny:h,fontSizeSmall:y,fontSizeMedium:v,fontSizeLarge:m,heightTiny:w,heightSmall:_,heightMedium:k,heightLarge:R,clearColor:M,clearColorHover:g,clearColorPressed:C,placeholderColor:D,placeholderColorDisabled:I,iconColor:Z,iconColorDisabled:E,iconColorHover:Y,iconColorPressed:L}=e;return Object.assign(Object.assign({},Bh),{countTextColorDisabled:o,countTextColor:t,heightTiny:w,heightSmall:_,heightMedium:k,heightLarge:R,fontSizeTiny:h,fontSizeSmall:y,fontSizeMedium:v,fontSizeLarge:m,lineHeight:b,lineHeightTextarea:b,borderRadius:p,iconSize:"16px",groupLabelColor:a,textColor:n,textColorDisabled:o,textDecorationColor:n,groupLabelTextColor:n,caretColor:r,placeholderColor:D,placeholderColorDisabled:I,color:a,colorDisabled:s,colorFocus:W(r,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${W(r,{alpha:.3})}`,loadingColor:r,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:W(l,{alpha:.1}),borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 8px 0 ${W(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${f}`,colorFocusError:W(d,{alpha:.1}),borderFocusError:`1px solid ${f}`,boxShadowFocusError:`0 0 8px 0 ${W(d,{alpha:.3})}`,caretColorError:d,clearColor:M,clearColorHover:g,clearColorPressed:C,iconColor:Z,iconColorDisabled:E,iconColorHover:Y,iconColorPressed:L,suffixTextColor:n})}},dt=$k,Dk=e=>{const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,borderColor:l,warningColor:c,warningColorHover:d,errorColor:f,errorColorHover:p,borderRadius:b,lineHeight:h,fontSizeTiny:y,fontSizeSmall:v,fontSizeMedium:m,fontSizeLarge:w,heightTiny:_,heightSmall:k,heightMedium:R,heightLarge:M,actionColor:g,clearColor:C,clearColorHover:D,clearColorPressed:I,placeholderColor:Z,placeholderColorDisabled:E,iconColor:Y,iconColorDisabled:L,iconColorHover:B,iconColorPressed:ie}=e;return Object.assign(Object.assign({},Bh),{countTextColorDisabled:o,countTextColor:t,heightTiny:_,heightSmall:k,heightMedium:R,heightLarge:M,fontSizeTiny:y,fontSizeSmall:v,fontSizeMedium:m,fontSizeLarge:w,lineHeight:h,lineHeightTextarea:h,borderRadius:b,iconSize:"16px",groupLabelColor:g,groupLabelTextColor:n,textColor:n,textColorDisabled:o,textDecorationColor:n,caretColor:r,placeholderColor:Z,placeholderColorDisabled:E,color:a,colorDisabled:s,colorFocus:a,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${W(r,{alpha:.2})}`,loadingColor:r,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:a,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${W(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:f,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${p}`,colorFocusError:a,borderFocusError:`1px solid ${p}`,boxShadowFocusError:`0 0 0 2px ${W(f,{alpha:.2})}`,caretColorError:f,clearColor:C,clearColorHover:D,clearColorPressed:I,iconColor:Y,iconColorDisabled:L,iconColorHover:B,iconColorPressed:ie,suffixTextColor:n})},Rk={name:"Input",common:oe,self:Dk},rt=Rk,zh="n-input";function Hk(e){let n=0;for(const t of e)n++;return n}function Hi(e){return e===""||e==null}function Ik(e){const n=se(null);function t(){const{value:i}=e;if(!(i!=null&&i.focus)){r();return}const{selectionStart:a,selectionEnd:s,value:l}=i;if(a==null||s==null){r();return}n.value={start:a,end:s,beforeText:l.slice(0,a),afterText:l.slice(s)}}function o(){var i;const{value:a}=n,{value:s}=e;if(!a||!s)return;const{value:l}=s,{start:c,beforeText:d,afterText:f}=a;let p=l.length;if(l.endsWith(f))p=l.length-f.length;else if(l.startsWith(d))p=d.length;else{const b=d[c-1],h=l.indexOf(b,c-1);h!==-1&&(p=h+1)}(i=s.setSelectionRange)===null||i===void 0||i.call(s,p,p)}function r(){n.value=null}return Cn(e,r),{recordCursor:t,restoreCursor:o}}const Dd=Te({name:"InputWordCount",setup(e,{slots:n}){const{mergedValueRef:t,maxlengthRef:o,mergedClsPrefixRef:r,countGraphemesRef:i}=je(zh),a=J(()=>{const{value:s}=t;return s===null||Array.isArray(s)?0:(i.value||Hk)(s)});return()=>{const{value:s}=o,{value:l}=t;return P("span",{class:`${r.value}-input-word-count`},$v(n.default,{value:l===null||Array.isArray(l)?"":l},()=>[s===void 0?a.value:`${a.value} / ${s}`]))}}}),Ek=be("input",`
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
`,[ne("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),ne("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
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
 `),ne("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[ce("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),ce("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),ce("&:-webkit-autofill ~",[ne("placeholder","display: none;")])]),ve("round",[_n("textarea","border-radius: calc(var(--n-height) / 2);")]),ne("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[ce("span",`
 width: 100%;
 display: inline-block;
 `)]),ve("textarea",[ne("placeholder","overflow: visible;")]),_n("autosize","width: 100%;"),ve("autosize",[ne("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),be("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),ne("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),ne("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[ce("+",[ne("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),_n("textarea",[ne("placeholder","white-space: nowrap;")]),ne("eye",`
 transition: color .3s var(--n-bezier);
 `),ve("textarea","width: 100%;",[be("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),ve("resizable",[be("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),ne("textarea-el, textarea-mirror, placeholder",`
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
 `),ne("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),ve("pair",[ne("input-el, placeholder","text-align: center;"),ne("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[be("icon",`
 color: var(--n-icon-color);
 `),be("base-icon",`
 color: var(--n-icon-color);
 `)])]),ve("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[ne("border","border: var(--n-border-disabled);"),ne("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),ne("placeholder","color: var(--n-placeholder-color-disabled);"),ne("separator","color: var(--n-text-color-disabled);",[be("icon",`
 color: var(--n-icon-color-disabled);
 `),be("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),be("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),ne("suffix, prefix","color: var(--n-text-color-disabled);",[be("icon",`
 color: var(--n-icon-color-disabled);
 `),be("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),_n("disabled",[ne("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[ce("&:hover",`
 color: var(--n-icon-color-hover);
 `),ce("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),ce("&:hover",[ne("state-border","border: var(--n-border-hover);")]),ve("focus","background-color: var(--n-color-focus);",[ne("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),ne("border, state-border",`
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
 `),ne("state-border",`
 border-color: #0000;
 z-index: 1;
 `),ne("prefix","margin-right: 4px;"),ne("suffix",`
 margin-left: 4px;
 `),ne("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[be("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),be("base-clear",`
 font-size: var(--n-icon-size);
 `,[ne("placeholder",[be("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),ce(">",[be("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),be("base-icon",`
 font-size: var(--n-icon-size);
 `)]),be("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>ve(`${e}-status`,[_n("disabled",[be("base-loading",`
 color: var(--n-loading-color-${e})
 `),ne("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),ne("state-border",`
 border: var(--n-border-${e});
 `),ce("&:hover",[ne("state-border",`
 border: var(--n-border-hover-${e});
 `)]),ce("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[ne("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),ve("focus",`
 background-color: var(--n-color-focus-${e});
 `,[ne("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),_k=be("input",[ve("disabled",[ne("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Mk=Object.assign(Object.assign({},Ke.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Bk=Te({name:"Input",props:Mk,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=On(e),i=Ke("Input","-input",Ek,rt,e,n);Mh&&ai("-input-safari",_k,n);const a=se(null),s=se(null),l=se(null),c=se(null),d=se(null),f=se(null),p=se(null),b=Ik(p),h=se(null),{localeRef:y}=ZT("Input"),v=se(e.defaultValue),m=Qe(e,"value"),w=hl(m,v),_=Sf(e),{mergedSizeRef:k,mergedDisabledRef:R,mergedStatusRef:M}=_,g=se(!1),C=se(!1),D=se(!1),I=se(!1);let Z=null;const E=J(()=>{const{placeholder:$,pair:G}=e;return G?Array.isArray($)?$:$===void 0?["",""]:[$,$]:$===void 0?[y.value.placeholder]:[$]}),Y=J(()=>{const{value:$}=D,{value:G}=w,{value:Se}=E;return!$&&(Hi(G)||Array.isArray(G)&&Hi(G[0]))&&Se[0]}),L=J(()=>{const{value:$}=D,{value:G}=w,{value:Se}=E;return!$&&Se[1]&&(Hi(G)||Array.isArray(G)&&Hi(G[1]))}),B=wn(()=>e.internalForceFocus||g.value),ie=wn(()=>{if(R.value||e.readonly||!e.clearable||!B.value&&!C.value)return!1;const{value:$}=w,{value:G}=B;return e.pair?!!(Array.isArray($)&&($[0]||$[1]))&&(C.value||G):!!$&&(C.value||G)}),N=J(()=>{const{showPasswordOn:$}=e;if($)return $;if(e.showPasswordToggle)return"click"}),re=se(!1),T=J(()=>{const{textDecoration:$}=e;return $?Array.isArray($)?$.map(G=>({textDecoration:G})):[{textDecoration:$}]:["",""]}),q=se(void 0),$e=()=>{var $,G;if(e.type==="textarea"){const{autosize:Se}=e;if(Se&&(q.value=(G=($=h.value)===null||$===void 0?void 0:$.$el)===null||G===void 0?void 0:G.offsetWidth),!s.value||typeof Se=="boolean")return;const{paddingTop:ze,paddingBottom:an,lineHeight:Xe}=window.getComputedStyle(s.value),Tt=Number(ze.slice(0,-2)),bt=Number(an.slice(0,-2)),kt=Number(Xe.slice(0,-2)),{value:lo}=l;if(!lo)return;if(Se.minRows){const co=Math.max(Se.minRows,1),pr=`${Tt+bt+kt*co}px`;lo.style.minHeight=pr}if(Se.maxRows){const co=`${Tt+bt+kt*Se.maxRows}px`;lo.style.maxHeight=co}}},_e=J(()=>{const{maxlength:$}=e;return $===void 0?void 0:Number($)});gt(()=>{const{value:$}=w;Array.isArray($)||yn($)});const Nn=io().proxy;function Le($){const{onUpdateValue:G,"onUpdate:value":Se,onInput:ze}=e,{nTriggerFormInput:an}=_;G&&ln(G,$),Se&&ln(Se,$),ze&&ln(ze,$),v.value=$,an()}function Be($){const{onChange:G}=e,{nTriggerFormChange:Se}=_;G&&ln(G,$),v.value=$,Se()}function Ce($){const{onBlur:G}=e,{nTriggerFormBlur:Se}=_;G&&ln(G,$),Se()}function De($){const{onFocus:G}=e,{nTriggerFormFocus:Se}=_;G&&ln(G,$),Se()}function jn($){const{onClear:G}=e;G&&ln(G,$)}function Ae($){const{onInputBlur:G}=e;G&&ln(G,$)}function Gn($){const{onInputFocus:G}=e;G&&ln(G,$)}function qe(){const{onDeactivate:$}=e;$&&ln($)}function S(){const{onActivate:$}=e;$&&ln($)}function A($){const{onClick:G}=e;G&&ln(G,$)}function z($){const{onWrapperFocus:G}=e;G&&ln(G,$)}function j($){const{onWrapperBlur:G}=e;G&&ln(G,$)}function V(){D.value=!0}function ee($){D.value=!1,$.target===f.value?ae($,1):ae($,0)}function ae($,G=0,Se="input"){const ze=$.target.value;if(yn(ze),$ instanceof InputEvent&&!$.isComposing&&(D.value=!1),e.type==="textarea"){const{value:Xe}=h;Xe&&Xe.syncUnifiedContainer()}if(Z=ze,D.value)return;b.recordCursor();const an=Q(ze);if(an)if(!e.pair)Se==="input"?Le(ze):Be(ze);else{let{value:Xe}=w;Array.isArray(Xe)?Xe=[Xe[0],Xe[1]]:Xe=["",""],Xe[G]=ze,Se==="input"?Le(Xe):Be(Xe)}Nn.$forceUpdate(),an||er(b.restoreCursor)}function Q($){const{countGraphemes:G,maxlength:Se,minlength:ze}=e;if(G){let Xe;if(Se!==void 0&&(Xe===void 0&&(Xe=G($)),Xe>Number(Se))||ze!==void 0&&(Xe===void 0&&(Xe=G($)),Xe<Number(Se)))return!1}const{allowInput:an}=e;return typeof an=="function"?an($):!0}function U($){Ae($),$.relatedTarget===a.value&&qe(),$.relatedTarget!==null&&($.relatedTarget===d.value||$.relatedTarget===f.value||$.relatedTarget===s.value)||(I.value=!1),X($,"blur"),p.value=null}function F($,G){Gn($),g.value=!0,I.value=!0,S(),X($,"focus"),G===0?p.value=d.value:G===1?p.value=f.value:G===2&&(p.value=s.value)}function ge($){e.passivelyActivated&&(j($),X($,"blur"))}function he($){e.passivelyActivated&&(g.value=!0,z($),X($,"focus"))}function X($,G){$.relatedTarget!==null&&($.relatedTarget===d.value||$.relatedTarget===f.value||$.relatedTarget===s.value||$.relatedTarget===a.value)||(G==="focus"?(De($),g.value=!0):G==="blur"&&(Ce($),g.value=!1))}function de($,G){ae($,G,"change")}function me($){A($)}function Oe($){jn($),e.pair?(Le(["",""]),Be(["",""])):(Le(""),Be(""))}function He($){const{onMousedown:G}=e;G&&G($);const{tagName:Se}=$.target;if(Se!=="INPUT"&&Se!=="TEXTAREA"){if(e.resizable){const{value:ze}=a;if(ze){const{left:an,top:Xe,width:Tt,height:bt}=ze.getBoundingClientRect(),kt=14;if(an+Tt-kt<$.clientX&&$.clientX<an+Tt&&Xe+bt-kt<$.clientY&&$.clientY<Xe+bt)return}}$.preventDefault(),g.value||K()}}function Fe(){var $;C.value=!0,e.type==="textarea"&&(($=h.value)===null||$===void 0||$.handleMouseEnterWrapper())}function en(){var $;C.value=!1,e.type==="textarea"&&(($=h.value)===null||$===void 0||$.handleMouseLeaveWrapper())}function Vn(){R.value||N.value==="click"&&(re.value=!re.value)}function Ot($){if(R.value)return;$.preventDefault();const G=ze=>{ze.preventDefault(),on("mouseup",document,G)};if(mn("mouseup",document,G),N.value!=="mousedown")return;re.value=!0;const Se=()=>{re.value=!1,on("mouseup",document,Se)};mn("mouseup",document,Se)}function it($){var G;switch((G=e.onKeydown)===null||G===void 0||G.call(e,$),$.key){case"Escape":gn();break;case"Enter":Xn($);break}}function Xn($){var G,Se;if(e.passivelyActivated){const{value:ze}=I;if(ze){e.internalDeactivateOnEnter&&gn();return}$.preventDefault(),e.type==="textarea"?(G=s.value)===null||G===void 0||G.focus():(Se=d.value)===null||Se===void 0||Se.focus()}}function gn(){e.passivelyActivated&&(I.value=!1,er(()=>{var $;($=a.value)===null||$===void 0||$.focus()}))}function K(){var $,G,Se;R.value||(e.passivelyActivated?($=a.value)===null||$===void 0||$.focus():((G=s.value)===null||G===void 0||G.focus(),(Se=d.value)===null||Se===void 0||Se.focus()))}function fe(){var $;!(($=a.value)===null||$===void 0)&&$.contains(document.activeElement)&&document.activeElement.blur()}function we(){var $,G;($=s.value)===null||$===void 0||$.select(),(G=d.value)===null||G===void 0||G.select()}function Ie(){R.value||(s.value?s.value.focus():d.value&&d.value.focus())}function Ve(){const{value:$}=a;$!=null&&$.contains(document.activeElement)&&$!==document.activeElement&&gn()}function bn($){if(e.type==="textarea"){const{value:G}=s;G==null||G.scrollTo($)}else{const{value:G}=d;G==null||G.scrollTo($)}}function yn($){const{type:G,pair:Se,autosize:ze}=e;if(!Se&&ze)if(G==="textarea"){const{value:an}=l;an&&(an.textContent=($??"")+`\r
`)}else{const{value:an}=c;an&&($?an.textContent=$:an.innerHTML="&nbsp;")}}function Ze(){$e()}const Dn=se({top:"0"});function dn($){var G;const{scrollTop:Se}=$.target;Dn.value.top=`${-Se}px`,(G=h.value)===null||G===void 0||G.syncUnifiedContainer()}let sn=null;Ro(()=>{const{autosize:$,type:G}=e;$&&G==="textarea"?sn=Cn(w,Se=>{!Array.isArray(Se)&&Se!==Z&&yn(Se)}):sn==null||sn()});let Kn=null;Ro(()=>{e.type==="textarea"?Kn=Cn(w,$=>{var G;!Array.isArray($)&&$!==Z&&((G=h.value)===null||G===void 0||G.syncUnifiedContainer())}):Kn==null||Kn()}),$n(zh,{mergedValueRef:w,maxlengthRef:_e,mergedClsPrefixRef:n,countGraphemesRef:Qe(e,"countGraphemes")});const Lo={wrapperElRef:a,inputElRef:d,textareaElRef:s,isCompositing:D,focus:K,blur:fe,select:we,deactivate:Ve,activate:Ie,scrollTo:bn},Ft=Sa("Input",r,n),kn=J(()=>{const{value:$}=k,{common:{cubicBezierEaseInOut:G},self:{color:Se,borderRadius:ze,textColor:an,caretColor:Xe,caretColorError:Tt,caretColorWarning:bt,textDecorationColor:kt,border:lo,borderDisabled:co,borderHover:pr,borderFocus:$a,placeholderColor:Da,placeholderColorDisabled:Ra,lineHeightTextarea:Ha,colorDisabled:Pn,colorFocus:mr,textColorDisabled:Ia,boxShadowFocus:di,iconSize:Oo,colorFocusWarning:un,boxShadowFocusWarning:Ea,borderWarning:gr,borderFocusWarning:ui,borderHoverWarning:_a,colorFocusError:br,boxShadowFocusError:vr,borderError:fi,borderFocusError:Ma,borderHoverError:hi,clearSize:pi,clearColor:u,clearColorHover:x,clearColorPressed:H,iconColor:O,iconColorDisabled:le,suffixTextColor:Me,countTextColor:Ue,countTextColorDisabled:fn,iconColorHover:Fo,iconColorPressed:Am,loadingColor:$m,loadingColorError:Dm,loadingColorWarning:Rm,[ye("padding",$)]:Hm,[ye("fontSize",$)]:Im,[ye("height",$)]:Em}}=i.value,{left:_m,right:Mm}=mv(Hm);return{"--n-bezier":G,"--n-count-text-color":Ue,"--n-count-text-color-disabled":fn,"--n-color":Se,"--n-font-size":Im,"--n-border-radius":ze,"--n-height":Em,"--n-padding-left":_m,"--n-padding-right":Mm,"--n-text-color":an,"--n-caret-color":Xe,"--n-text-decoration-color":kt,"--n-border":lo,"--n-border-disabled":co,"--n-border-hover":pr,"--n-border-focus":$a,"--n-placeholder-color":Da,"--n-placeholder-color-disabled":Ra,"--n-icon-size":Oo,"--n-line-height-textarea":Ha,"--n-color-disabled":Pn,"--n-color-focus":mr,"--n-text-color-disabled":Ia,"--n-box-shadow-focus":di,"--n-loading-color":$m,"--n-caret-color-warning":bt,"--n-color-focus-warning":un,"--n-box-shadow-focus-warning":Ea,"--n-border-warning":gr,"--n-border-focus-warning":ui,"--n-border-hover-warning":_a,"--n-loading-color-warning":Rm,"--n-caret-color-error":Tt,"--n-color-focus-error":br,"--n-box-shadow-focus-error":vr,"--n-border-error":fi,"--n-border-focus-error":Ma,"--n-border-hover-error":hi,"--n-loading-color-error":Dm,"--n-clear-color":u,"--n-clear-size":pi,"--n-clear-color-hover":x,"--n-clear-color-pressed":H,"--n-icon-color":O,"--n-icon-color-hover":Fo,"--n-icon-color-pressed":Am,"--n-icon-color-disabled":le,"--n-suffix-text-color":Me}}),Rn=o?ct("input",J(()=>{const{value:$}=k;return $[0]}),kn,e):void 0;return Object.assign(Object.assign({},Lo),{wrapperElRef:a,inputElRef:d,inputMirrorElRef:c,inputEl2Ref:f,textareaElRef:s,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:Ft,uncontrolledValue:v,mergedValue:w,passwordVisible:re,mergedPlaceholder:E,showPlaceholder1:Y,showPlaceholder2:L,mergedFocus:B,isComposing:D,activated:I,showClearButton:ie,mergedSize:k,mergedDisabled:R,textDecorationStyle:T,mergedClsPrefix:n,mergedBordered:t,mergedShowPasswordOn:N,placeholderStyle:Dn,mergedStatus:M,textAreaScrollContainerWidth:q,handleTextAreaScroll:dn,handleCompositionStart:V,handleCompositionEnd:ee,handleInput:ae,handleInputBlur:U,handleInputFocus:F,handleWrapperBlur:ge,handleWrapperFocus:he,handleMouseEnter:Fe,handleMouseLeave:en,handleMouseDown:He,handleChange:de,handleClick:me,handleClear:Oe,handlePasswordToggleClick:Vn,handlePasswordToggleMousedown:Ot,handleWrapperKeydown:it,handleTextAreaMirrorResize:Ze,getTextareaScrollContainer:()=>s.value,mergedTheme:i,cssVars:o?void 0:kn,themeClass:Rn==null?void 0:Rn.themeClass,onRender:Rn==null?void 0:Rn.onRender})},render(){var e,n;const{mergedClsPrefix:t,mergedStatus:o,themeClass:r,type:i,countGraphemes:a,onRender:s}=this,l=this.$slots;return s==null||s(),P("div",{ref:"wrapperElRef",class:[`${t}-input`,r,o&&`${t}-input--${o}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:i==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&i!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},P("div",{class:`${t}-input-wrapper`},Rt(l.prefix,c=>c&&P("div",{class:`${t}-input__prefix`},c)),i==="textarea"?P(Sh,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,d;const{textAreaScrollContainerWidth:f}=this,p={width:this.autosize&&f&&`${f}px`};return P(Ye,null,P("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style,p],onBlur:this.handleInputBlur,onFocus:b=>this.handleInputFocus(b,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?P("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,p],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?P(Ui,{onResize:this.handleTextAreaMirrorResize},{default:()=>P("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):P("div",{class:`${t}-input__input`},P("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(n=this.inputProps)===null||n===void 0?void 0:n.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,0),onInput:c=>this.handleInput(c,0),onChange:c=>this.handleChange(c,0)})),this.showPlaceholder1?P("div",{class:`${t}-input__placeholder`},P("span",null,this.mergedPlaceholder[0])):null,this.autosize?P("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&Rt(l.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?P("div",{class:`${t}-input__suffix`},[Rt(l["clear-icon-placeholder"],d=>(this.clearable||d)&&P(Ls,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>d,icon:()=>{var f,p;return(p=(f=this.$slots)["clear-icon"])===null||p===void 0?void 0:p.call(f)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?P(fk,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?P(Dd,null,{default:d=>{var f;return(f=l.count)===null||f===void 0?void 0:f.call(l,d)}}):null,this.mergedShowPasswordOn&&this.type==="password"?P("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Mr(l["password-visible-icon"],()=>[P(Qi,{clsPrefix:t},{default:()=>P(YT,null)})]):Mr(l["password-invisible-icon"],()=>[P(Qi,{clsPrefix:t},{default:()=>P(QT,null)})])):null]):null)),this.pair?P("span",{class:`${t}-input__separator`},Mr(l.separator,()=>[this.separator])):null,this.pair?P("div",{class:`${t}-input-wrapper`},P("div",{class:`${t}-input__input`},P("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,1),onInput:c=>this.handleInput(c,1),onChange:c=>this.handleChange(c,1)}),this.showPlaceholder2?P("div",{class:`${t}-input__placeholder`},P("span",null,this.mergedPlaceholder[1])):null),Rt(l.suffix,c=>(this.clearable||c)&&P("div",{class:`${t}-input__suffix`},[this.clearable&&P(Ls,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var d;return(d=l["clear-icon"])===null||d===void 0?void 0:d.call(l)},placeholder:()=>{var d;return(d=l["clear-icon-placeholder"])===null||d===void 0?void 0:d.call(l)}}),c]))):null,this.mergedBordered?P("div",{class:`${t}-input__border`}):null,this.mergedBordered?P("div",{class:`${t}-input__state-border`}):null,this.showCount&&i==="textarea"?P(Dd,null,{default:c=>{var d;const{renderCount:f}=this;return f?f(c):(d=l.count)===null||d===void 0?void 0:d.call(l,c)}}):null)}});function Lh(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const zk={name:"AutoComplete",common:oe,peers:{InternalSelectMenu:si,Input:rt},self:Lh},Lk=zk,Ok={name:"AutoComplete",common:te,peers:{InternalSelectMenu:li,Input:dt},self:Lh},Fk=Ok,Oh=e=>{const{borderRadius:n,avatarColor:t,cardColor:o,fontSize:r,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,modalColor:d,popoverColor:f}=e;return{borderRadius:n,fontSize:r,border:`2px solid ${o}`,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,color:pe(o,t),colorModal:pe(d,t),colorPopover:pe(f,t)}},Wk={name:"Avatar",common:oe,self:Oh},Fh=Wk,Nk={name:"Avatar",common:te,self:Oh},Wh=Nk,Nh=()=>({gap:"-12px"}),jk={name:"AvatarGroup",common:oe,peers:{Avatar:Fh},self:Nh},Gk=jk,Vk={name:"AvatarGroup",common:te,peers:{Avatar:Wh},self:Nh},Kk=Vk,jh={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},Uk={name:"BackTop",common:te,self(e){const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},jh),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},qk=Uk,Zk=e=>{const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},jh),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},Jk={name:"BackTop",common:oe,self:Zk},Xk=Jk,Yk={name:"Badge",common:te,self(e){const{errorColorSuppl:n,infoColorSuppl:t,successColorSuppl:o,warningColorSuppl:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}}},Qk=Yk,eP=e=>{const{errorColor:n,infoColor:t,successColor:o,warningColor:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}},nP={name:"Badge",common:oe,self:eP},tP=nP,oP={fontWeightActive:"400"},Gh=e=>{const{fontSize:n,textColor3:t,textColor2:o,borderRadius:r,buttonColor2Hover:i,buttonColor2Pressed:a}=e;return Object.assign(Object.assign({},oP),{fontSize:n,itemLineHeight:"1.25",itemTextColor:t,itemTextColorHover:o,itemTextColorPressed:o,itemTextColorActive:o,itemBorderRadius:r,itemColorHover:i,itemColorPressed:a,separatorColor:t})},rP={name:"Breadcrumb",common:oe,self:Gh},iP=rP,aP={name:"Breadcrumb",common:te,self:Gh},sP=aP;function po(e){return pe(e,[255,255,255,.16])}function Ii(e){return pe(e,[0,0,0,.12])}const lP="n-button-group",cP={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},Vh=e=>{const{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadius:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,textColor2:f,textColor3:p,primaryColorHover:b,primaryColorPressed:h,borderColor:y,primaryColor:v,baseColor:m,infoColor:w,infoColorHover:_,infoColorPressed:k,successColor:R,successColorHover:M,successColorPressed:g,warningColor:C,warningColorHover:D,warningColorPressed:I,errorColor:Z,errorColorHover:E,errorColorPressed:Y,fontWeight:L,buttonColor2:B,buttonColor2Hover:ie,buttonColor2Pressed:N,fontWeightStrong:re}=e;return Object.assign(Object.assign({},cP),{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:B,colorSecondaryHover:ie,colorSecondaryPressed:N,colorTertiary:B,colorTertiaryHover:ie,colorTertiaryPressed:N,colorQuaternary:"#0000",colorQuaternaryHover:ie,colorQuaternaryPressed:N,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:f,textColorTertiary:p,textColorHover:b,textColorPressed:h,textColorFocus:b,textColorDisabled:f,textColorText:f,textColorTextHover:b,textColorTextPressed:h,textColorTextFocus:b,textColorTextDisabled:f,textColorGhost:f,textColorGhostHover:b,textColorGhostPressed:h,textColorGhostFocus:b,textColorGhostDisabled:f,border:`1px solid ${y}`,borderHover:`1px solid ${b}`,borderPressed:`1px solid ${h}`,borderFocus:`1px solid ${b}`,borderDisabled:`1px solid ${y}`,rippleColor:v,colorPrimary:v,colorHoverPrimary:b,colorPressedPrimary:h,colorFocusPrimary:b,colorDisabledPrimary:v,textColorPrimary:m,textColorHoverPrimary:m,textColorPressedPrimary:m,textColorFocusPrimary:m,textColorDisabledPrimary:m,textColorTextPrimary:v,textColorTextHoverPrimary:b,textColorTextPressedPrimary:h,textColorTextFocusPrimary:b,textColorTextDisabledPrimary:f,textColorGhostPrimary:v,textColorGhostHoverPrimary:b,textColorGhostPressedPrimary:h,textColorGhostFocusPrimary:b,textColorGhostDisabledPrimary:v,borderPrimary:`1px solid ${v}`,borderHoverPrimary:`1px solid ${b}`,borderPressedPrimary:`1px solid ${h}`,borderFocusPrimary:`1px solid ${b}`,borderDisabledPrimary:`1px solid ${v}`,rippleColorPrimary:v,colorInfo:w,colorHoverInfo:_,colorPressedInfo:k,colorFocusInfo:_,colorDisabledInfo:w,textColorInfo:m,textColorHoverInfo:m,textColorPressedInfo:m,textColorFocusInfo:m,textColorDisabledInfo:m,textColorTextInfo:w,textColorTextHoverInfo:_,textColorTextPressedInfo:k,textColorTextFocusInfo:_,textColorTextDisabledInfo:f,textColorGhostInfo:w,textColorGhostHoverInfo:_,textColorGhostPressedInfo:k,textColorGhostFocusInfo:_,textColorGhostDisabledInfo:w,borderInfo:`1px solid ${w}`,borderHoverInfo:`1px solid ${_}`,borderPressedInfo:`1px solid ${k}`,borderFocusInfo:`1px solid ${_}`,borderDisabledInfo:`1px solid ${w}`,rippleColorInfo:w,colorSuccess:R,colorHoverSuccess:M,colorPressedSuccess:g,colorFocusSuccess:M,colorDisabledSuccess:R,textColorSuccess:m,textColorHoverSuccess:m,textColorPressedSuccess:m,textColorFocusSuccess:m,textColorDisabledSuccess:m,textColorTextSuccess:R,textColorTextHoverSuccess:M,textColorTextPressedSuccess:g,textColorTextFocusSuccess:M,textColorTextDisabledSuccess:f,textColorGhostSuccess:R,textColorGhostHoverSuccess:M,textColorGhostPressedSuccess:g,textColorGhostFocusSuccess:M,textColorGhostDisabledSuccess:R,borderSuccess:`1px solid ${R}`,borderHoverSuccess:`1px solid ${M}`,borderPressedSuccess:`1px solid ${g}`,borderFocusSuccess:`1px solid ${M}`,borderDisabledSuccess:`1px solid ${R}`,rippleColorSuccess:R,colorWarning:C,colorHoverWarning:D,colorPressedWarning:I,colorFocusWarning:D,colorDisabledWarning:C,textColorWarning:m,textColorHoverWarning:m,textColorPressedWarning:m,textColorFocusWarning:m,textColorDisabledWarning:m,textColorTextWarning:C,textColorTextHoverWarning:D,textColorTextPressedWarning:I,textColorTextFocusWarning:D,textColorTextDisabledWarning:f,textColorGhostWarning:C,textColorGhostHoverWarning:D,textColorGhostPressedWarning:I,textColorGhostFocusWarning:D,textColorGhostDisabledWarning:C,borderWarning:`1px solid ${C}`,borderHoverWarning:`1px solid ${D}`,borderPressedWarning:`1px solid ${I}`,borderFocusWarning:`1px solid ${D}`,borderDisabledWarning:`1px solid ${C}`,rippleColorWarning:C,colorError:Z,colorHoverError:E,colorPressedError:Y,colorFocusError:E,colorDisabledError:Z,textColorError:m,textColorHoverError:m,textColorPressedError:m,textColorFocusError:m,textColorDisabledError:m,textColorTextError:Z,textColorTextHoverError:E,textColorTextPressedError:Y,textColorTextFocusError:E,textColorTextDisabledError:f,textColorGhostError:Z,textColorGhostHoverError:E,textColorGhostPressedError:Y,textColorGhostFocusError:E,textColorGhostDisabledError:Z,borderError:`1px solid ${Z}`,borderHoverError:`1px solid ${E}`,borderPressedError:`1px solid ${Y}`,borderFocusError:`1px solid ${E}`,borderDisabledError:`1px solid ${Z}`,rippleColorError:Z,waveOpacity:"0.6",fontWeight:L,fontWeightStrong:re})},dP={name:"Button",common:oe,self:Vh},Wn=dP,uP={name:"Button",common:te,self(e){const n=Vh(e);return n.waveOpacity="0.8",n.colorOpacitySecondary="0.16",n.colorOpacitySecondaryHover="0.2",n.colorOpacitySecondaryPressed="0.12",n}},Jn=uP,fP=ce([be("button",`
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
 `,[ve("color",[ne("border",{borderColor:"var(--n-border-color)"}),ve("disabled",[ne("border",{borderColor:"var(--n-border-color-disabled)"})]),_n("disabled",[ce("&:focus",[ne("state-border",{borderColor:"var(--n-border-color-focus)"})]),ce("&:hover",[ne("state-border",{borderColor:"var(--n-border-color-hover)"})]),ce("&:active",[ne("state-border",{borderColor:"var(--n-border-color-pressed)"})]),ve("pressed",[ne("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),ve("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[ne("border",{border:"var(--n-border-disabled)"})]),_n("disabled",[ce("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[ne("state-border",{border:"var(--n-border-focus)"})]),ce("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[ne("state-border",{border:"var(--n-border-hover)"})]),ce("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[ne("state-border",{border:"var(--n-border-pressed)"})]),ve("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[ne("state-border",{border:"var(--n-border-pressed)"})])]),ve("loading","cursor: wait;"),be("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[ve("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),cr&&"MozBoxSizing"in document.createElement("div").style?ce("&::moz-focus-inner",{border:0}):null,ne("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),ne("border",{border:"var(--n-border)"}),ne("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),ne("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[be("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[ea({top:"50%",originalTransform:"translateY(-50%)"})]),gk()]),ne("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[ce("~",[ne("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),ve("block",`
 display: flex;
 width: 100%;
 `),ve("dashed",[ne("border, state-border",{borderStyle:"dashed !important"})]),ve("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),ce("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),ce("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),hP=Object.assign(Object.assign({},Ke.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Mh}}),pP=Te({name:"Button",props:hP,setup(e){const n=se(null),t=se(null),o=se(!1),r=wn(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),i=je(lP,{}),{mergedSizeRef:a}=Sf({},{defaultSize:"medium",mergedSize:k=>{const{size:R}=e;if(R)return R;const{size:M}=i;if(M)return M;const{mergedSize:g}=k||{};return g?g.value:"medium"}}),s=J(()=>e.focusable&&!e.disabled),l=k=>{var R;s.value||k.preventDefault(),!e.nativeFocusBehavior&&(k.preventDefault(),!e.disabled&&s.value&&((R=n.value)===null||R===void 0||R.focus({preventScroll:!0})))},c=k=>{var R;if(!e.disabled&&!e.loading){const{onClick:M}=e;M&&ln(M,k),e.text||(R=t.value)===null||R===void 0||R.play()}},d=k=>{switch(k.key){case"Enter":if(!e.keyboard)return;o.value=!1}},f=k=>{switch(k.key){case"Enter":if(!e.keyboard||e.loading){k.preventDefault();return}o.value=!0}},p=()=>{o.value=!1},{inlineThemeDisabled:b,mergedClsPrefixRef:h,mergedRtlRef:y}=On(e),v=Ke("Button","-button",fP,Wn,e,h),m=Sa("Button",y,h),w=J(()=>{const k=v.value,{common:{cubicBezierEaseInOut:R,cubicBezierEaseOut:M},self:g}=k,{rippleDuration:C,opacityDisabled:D,fontWeight:I,fontWeightStrong:Z}=g,E=a.value,{dashed:Y,type:L,ghost:B,text:ie,color:N,round:re,circle:T,textColor:q,secondary:$e,tertiary:_e,quaternary:Nn,strong:Le}=e,Be={"font-weight":Le?Z:I};let Ce={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const De=L==="tertiary",jn=L==="default",Ae=De?"default":L;if(ie){const U=q||N;Ce={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":U||g[ye("textColorText",Ae)],"--n-text-color-hover":U?po(U):g[ye("textColorTextHover",Ae)],"--n-text-color-pressed":U?Ii(U):g[ye("textColorTextPressed",Ae)],"--n-text-color-focus":U?po(U):g[ye("textColorTextHover",Ae)],"--n-text-color-disabled":U||g[ye("textColorTextDisabled",Ae)]}}else if(B||Y){const U=q||N;Ce={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":N||g[ye("rippleColor",Ae)],"--n-text-color":U||g[ye("textColorGhost",Ae)],"--n-text-color-hover":U?po(U):g[ye("textColorGhostHover",Ae)],"--n-text-color-pressed":U?Ii(U):g[ye("textColorGhostPressed",Ae)],"--n-text-color-focus":U?po(U):g[ye("textColorGhostHover",Ae)],"--n-text-color-disabled":U||g[ye("textColorGhostDisabled",Ae)]}}else if($e){const U=jn?g.textColor:De?g.textColorTertiary:g[ye("color",Ae)],F=N||U,ge=L!=="default"&&L!=="tertiary";Ce={"--n-color":ge?W(F,{alpha:Number(g.colorOpacitySecondary)}):g.colorSecondary,"--n-color-hover":ge?W(F,{alpha:Number(g.colorOpacitySecondaryHover)}):g.colorSecondaryHover,"--n-color-pressed":ge?W(F,{alpha:Number(g.colorOpacitySecondaryPressed)}):g.colorSecondaryPressed,"--n-color-focus":ge?W(F,{alpha:Number(g.colorOpacitySecondaryHover)}):g.colorSecondaryHover,"--n-color-disabled":g.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":F,"--n-text-color-hover":F,"--n-text-color-pressed":F,"--n-text-color-focus":F,"--n-text-color-disabled":F}}else if(_e||Nn){const U=jn?g.textColor:De?g.textColorTertiary:g[ye("color",Ae)],F=N||U;_e?(Ce["--n-color"]=g.colorTertiary,Ce["--n-color-hover"]=g.colorTertiaryHover,Ce["--n-color-pressed"]=g.colorTertiaryPressed,Ce["--n-color-focus"]=g.colorSecondaryHover,Ce["--n-color-disabled"]=g.colorTertiary):(Ce["--n-color"]=g.colorQuaternary,Ce["--n-color-hover"]=g.colorQuaternaryHover,Ce["--n-color-pressed"]=g.colorQuaternaryPressed,Ce["--n-color-focus"]=g.colorQuaternaryHover,Ce["--n-color-disabled"]=g.colorQuaternary),Ce["--n-ripple-color"]="#0000",Ce["--n-text-color"]=F,Ce["--n-text-color-hover"]=F,Ce["--n-text-color-pressed"]=F,Ce["--n-text-color-focus"]=F,Ce["--n-text-color-disabled"]=F}else Ce={"--n-color":N||g[ye("color",Ae)],"--n-color-hover":N?po(N):g[ye("colorHover",Ae)],"--n-color-pressed":N?Ii(N):g[ye("colorPressed",Ae)],"--n-color-focus":N?po(N):g[ye("colorFocus",Ae)],"--n-color-disabled":N||g[ye("colorDisabled",Ae)],"--n-ripple-color":N||g[ye("rippleColor",Ae)],"--n-text-color":q||(N?g.textColorPrimary:De?g.textColorTertiary:g[ye("textColor",Ae)]),"--n-text-color-hover":q||(N?g.textColorHoverPrimary:g[ye("textColorHover",Ae)]),"--n-text-color-pressed":q||(N?g.textColorPressedPrimary:g[ye("textColorPressed",Ae)]),"--n-text-color-focus":q||(N?g.textColorFocusPrimary:g[ye("textColorFocus",Ae)]),"--n-text-color-disabled":q||(N?g.textColorDisabledPrimary:g[ye("textColorDisabled",Ae)])};let Gn={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};ie?Gn={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Gn={"--n-border":g[ye("border",Ae)],"--n-border-hover":g[ye("borderHover",Ae)],"--n-border-pressed":g[ye("borderPressed",Ae)],"--n-border-focus":g[ye("borderFocus",Ae)],"--n-border-disabled":g[ye("borderDisabled",Ae)]};const{[ye("height",E)]:qe,[ye("fontSize",E)]:S,[ye("padding",E)]:A,[ye("paddingRound",E)]:z,[ye("iconSize",E)]:j,[ye("borderRadius",E)]:V,[ye("iconMargin",E)]:ee,waveOpacity:ae}=g,Q={"--n-width":T&&!ie?qe:"initial","--n-height":ie?"initial":qe,"--n-font-size":S,"--n-padding":T||ie?"initial":re?z:A,"--n-icon-size":j,"--n-icon-margin":ee,"--n-border-radius":ie?"initial":T||re?qe:V};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":R,"--n-bezier-ease-out":M,"--n-ripple-duration":C,"--n-opacity-disabled":D,"--n-wave-opacity":ae},Be),Ce),Gn),Q)}),_=b?ct("button",J(()=>{let k="";const{dashed:R,type:M,ghost:g,text:C,color:D,round:I,circle:Z,textColor:E,secondary:Y,tertiary:L,quaternary:B,strong:ie}=e;R&&(k+="a"),g&&(k+="b"),C&&(k+="c"),I&&(k+="d"),Z&&(k+="e"),Y&&(k+="f"),L&&(k+="g"),B&&(k+="h"),ie&&(k+="i"),D&&(k+="j"+Tc(D)),E&&(k+="k"+Tc(E));const{value:N}=a;return k+="l"+N[0],k+="m"+M[0],k}),w,e):void 0;return{selfElRef:n,waveElRef:t,mergedClsPrefix:h,mergedFocusable:s,mergedSize:a,showBorder:r,enterPressed:o,rtlEnabled:m,handleMousedown:l,handleKeydown:f,handleBlur:p,handleKeyup:d,handleClick:c,customColorCssVars:J(()=>{const{color:k}=e;if(!k)return null;const R=po(k);return{"--n-border-color":k,"--n-border-color-hover":R,"--n-border-color-pressed":Ii(k),"--n-border-color-focus":R,"--n-border-color-disabled":k}}),cssVars:b?void 0:w,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:e,tag:n,onRender:t}=this;t==null||t();const o=Rt(this.$slots.default,r=>r&&P("span",{class:`${e}-button__content`},r));return P(n,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&o,P(t2,{width:!0},{default:()=>Rt(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&P("span",{class:`${e}-button__icon`,style:{margin:Ts(this.$slots.default)?"0":""}},P(Dl,null,{default:()=>this.loading?P(ph,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):P("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&o,this.text?null:P(X2,{ref:"waveElRef",clsPrefix:e}),this.showBorder?P("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?P("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),mP=pP,gP={titleFontSize:"22px"},Kh=e=>{const{borderRadius:n,fontSize:t,lineHeight:o,textColor2:r,textColor1:i,textColorDisabled:a,dividerColor:s,fontWeightStrong:l,primaryColor:c,baseColor:d,hoverColor:f,cardColor:p,modalColor:b,popoverColor:h}=e;return Object.assign(Object.assign({},gP),{borderRadius:n,borderColor:pe(p,s),borderColorModal:pe(b,s),borderColorPopover:pe(h,s),textColor:r,titleFontWeight:l,titleTextColor:i,dayTextColor:a,fontSize:t,lineHeight:o,dateColorCurrent:c,dateTextColorCurrent:d,cellColorHover:pe(p,f),cellColorHoverModal:pe(b,f),cellColorHoverPopover:pe(h,f),cellColor:p,cellColorModal:b,cellColorPopover:h,barColor:c})},bP={name:"Calendar",common:oe,peers:{Button:Wn},self:Kh},vP=bP,yP={name:"Calendar",common:te,peers:{Button:Jn},self:Kh},xP=yP,Uh=e=>{const{fontSize:n,boxShadow2:t,popoverColor:o,textColor2:r,borderRadius:i,borderColor:a,heightSmall:s,heightMedium:l,heightLarge:c,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:p,dividerColor:b}=e;return{panelFontSize:n,boxShadow:t,color:o,textColor:r,borderRadius:i,border:`1px solid ${a}`,heightSmall:s,heightMedium:l,heightLarge:c,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:p,dividerColor:b}},CP={name:"ColorPicker",common:oe,peers:{Input:rt,Button:Wn},self:Uh},SP=CP,wP={name:"ColorPicker",common:te,peers:{Input:dt,Button:Jn},self:Uh},TP=wP,kP={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},qh=e=>{const{primaryColor:n,borderRadius:t,lineHeight:o,fontSize:r,cardColor:i,textColor2:a,textColor1:s,dividerColor:l,fontWeightStrong:c,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,closeColorHover:b,closeColorPressed:h,modalColor:y,boxShadow1:v,popoverColor:m,actionColor:w}=e;return Object.assign(Object.assign({},kP),{lineHeight:o,color:i,colorModal:y,colorPopover:m,colorTarget:n,colorEmbedded:w,colorEmbeddedModal:w,colorEmbeddedPopover:w,textColor:a,titleTextColor:s,borderColor:l,actionColor:w,titleFontWeight:c,closeColorHover:b,closeColorPressed:h,closeBorderRadius:t,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,fontSizeSmall:r,fontSizeMedium:r,fontSizeLarge:r,fontSizeHuge:r,boxShadow:v,borderRadius:t})},PP={name:"Card",common:oe,self:qh},Zh=PP,AP={name:"Card",common:te,self(e){const n=qh(e),{cardColor:t,modalColor:o,popoverColor:r}=e;return n.colorEmbedded=t,n.colorEmbeddedModal=o,n.colorEmbeddedPopover=r,n}},Jh=AP,Xh=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),$P={name:"Carousel",common:oe,self:Xh},DP=$P,RP={name:"Carousel",common:te,self:Xh},HP=RP,IP={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Yh=e=>{const{baseColor:n,inputColorDisabled:t,cardColor:o,modalColor:r,popoverColor:i,textColorDisabled:a,borderColor:s,primaryColor:l,textColor2:c,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:p,borderRadiusSmall:b,lineHeight:h}=e;return Object.assign(Object.assign({},IP),{labelLineHeight:h,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:p,borderRadius:b,color:n,colorChecked:l,colorDisabled:t,colorDisabledChecked:t,colorTableHeader:o,colorTableHeaderModal:r,colorTableHeaderPopover:i,checkMarkColor:n,checkMarkColorDisabled:a,checkMarkColorDisabledChecked:a,border:`1px solid ${s}`,borderDisabled:`1px solid ${s}`,borderDisabledChecked:`1px solid ${s}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${W(l,{alpha:.3})}`,textColor:c,textColorDisabled:a})},EP={name:"Checkbox",common:oe,self:Yh},ur=EP,_P={name:"Checkbox",common:te,self(e){const{cardColor:n}=e,t=Yh(e);return t.color="#0000",t.checkMarkColor=n,t}},fr=_P,Qh=e=>{const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r,textColor3:i,primaryColor:a,textColorDisabled:s,dividerColor:l,hoverColor:c,fontSizeMedium:d,heightMedium:f}=e;return{menuBorderRadius:n,menuColor:o,menuBoxShadow:t,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:f,optionFontSize:d,optionColorHover:c,optionTextColor:r,optionTextColorActive:a,optionTextColorDisabled:s,optionCheckMarkColor:a,loadingColor:a,columnWidth:"180px"}},MP={name:"Cascader",common:oe,peers:{InternalSelectMenu:si,InternalSelection:Hl,Scrollbar:Fn,Checkbox:ur,Empty:Lt},self:Qh},BP=MP,zP={name:"Cascader",common:te,peers:{InternalSelectMenu:li,InternalSelection:Il,Scrollbar:Zn,Checkbox:fr,Empty:Lt},self:Qh},LP=zP,OP={name:"Code",common:te,self(e){const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:r}}},ep=OP,FP=e=>{const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:r}},WP={name:"Code",common:oe,self:FP},np=WP,tp=e=>{const{fontWeight:n,textColor1:t,textColor2:o,textColorDisabled:r,dividerColor:i,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:n,dividerColor:i,titleTextColor:t,titleTextColorDisabled:r,fontSize:a,textColor:o,arrowColor:o,arrowColorDisabled:r,itemMargin:"16px 0 0 0"}},NP={name:"Collapse",common:oe,self:tp},jP=NP,GP={name:"Collapse",common:te,self:tp},VP=GP,op=e=>{const{cubicBezierEaseInOut:n}=e;return{bezier:n}},KP={name:"CollapseTransition",common:oe,self:op},UP=KP,qP={name:"CollapseTransition",common:te,self:op},ZP=qP,JP={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Jr("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},XP=Te({name:"ConfigProvider",alias:["App"],props:JP,setup(e){const n=je(ro,null),t=J(()=>{const{theme:h}=e;if(h===null)return;const y=n==null?void 0:n.mergedThemeRef.value;return h===void 0?y:y===void 0?h:Object.assign({},y,h)}),o=J(()=>{const{themeOverrides:h}=e;if(h!==null){if(h===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const y=n==null?void 0:n.mergedThemeOverridesRef.value;return y===void 0?h:Dr({},y,h)}}}),r=wn(()=>{const{namespace:h}=e;return h===void 0?n==null?void 0:n.mergedNamespaceRef.value:h}),i=wn(()=>{const{bordered:h}=e;return h===void 0?n==null?void 0:n.mergedBorderedRef.value:h}),a=J(()=>{const{icons:h}=e;return h===void 0?n==null?void 0:n.mergedIconsRef.value:h}),s=J(()=>{const{componentOptions:h}=e;return h!==void 0?h:n==null?void 0:n.mergedComponentPropsRef.value}),l=J(()=>{const{clsPrefix:h}=e;return h!==void 0?h:n==null?void 0:n.mergedClsPrefixRef.value}),c=J(()=>{var h;const{rtl:y}=e;if(y===void 0)return n==null?void 0:n.mergedRtlRef.value;const v={};for(const m of y)v[m.name]=eo(m),(h=m.peers)===null||h===void 0||h.forEach(w=>{w.name in v||(v[w.name]=eo(w))});return v}),d=J(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),f=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),p=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),b=J(()=>{const{value:h}=t,{value:y}=o,v=y&&Object.keys(y).length!==0,m=h==null?void 0:h.name;return m?v?`${m}-${Xr(JSON.stringify(o.value))}`:m:v?Xr(JSON.stringify(o.value)):""});return $n(ro,{mergedThemeHashRef:b,mergedBreakpointsRef:d,mergedRtlRef:c,mergedIconsRef:a,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:r,mergedClsPrefixRef:l,mergedLocaleRef:J(()=>{const{locale:h}=e;if(h!==null)return h===void 0?n==null?void 0:n.mergedLocaleRef.value:h}),mergedDateLocaleRef:J(()=>{const{dateLocale:h}=e;if(h!==null)return h===void 0?n==null?void 0:n.mergedDateLocaleRef.value:h}),mergedHljsRef:J(()=>{const{hljs:h}=e;return h===void 0?n==null?void 0:n.mergedHljsRef.value:h}),mergedKatexRef:J(()=>{const{katex:h}=e;return h===void 0?n==null?void 0:n.mergedKatexRef.value:h}),mergedThemeRef:t,mergedThemeOverridesRef:o,inlineThemeDisabled:f||!1,preflightStyleDisabled:p||!1}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:r,mergedTheme:t,mergedThemeOverrides:o}},render(){var e,n,t,o;return this.abstract?(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t):P(this.as||this.tag,{class:`${this.mergedClsPrefix||hh}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),YP={name:"Popselect",common:te,peers:{Popover:zo,InternalSelectMenu:li}},rp=YP;function QP(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const eA={name:"Popselect",common:oe,peers:{Popover:so,InternalSelectMenu:si},self:QP},ip=eA;function ap(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const nA={name:"Select",common:oe,peers:{InternalSelection:Hl,InternalSelectMenu:si},self:ap},sp=nA,tA={name:"Select",common:te,peers:{InternalSelection:Il,InternalSelectMenu:li},self:ap},lp=tA,oA={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"},cp=e=>{const{textColor2:n,primaryColor:t,primaryColorHover:o,primaryColorPressed:r,inputColorDisabled:i,textColorDisabled:a,borderColor:s,borderRadius:l,fontSizeTiny:c,fontSizeSmall:d,fontSizeMedium:f,heightTiny:p,heightSmall:b,heightMedium:h}=e;return Object.assign(Object.assign({},oA),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${s}`,buttonBorderHover:`1px solid ${s}`,buttonBorderPressed:`1px solid ${s}`,buttonIconColor:n,buttonIconColorHover:n,buttonIconColorPressed:n,itemTextColor:n,itemTextColorHover:o,itemTextColorPressed:r,itemTextColorActive:t,itemTextColorDisabled:a,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${t}`,itemBorderDisabled:`1px solid ${s}`,itemBorderRadius:l,itemSizeSmall:p,itemSizeMedium:b,itemSizeLarge:h,itemFontSizeSmall:c,itemFontSizeMedium:d,itemFontSizeLarge:f,jumperFontSizeSmall:c,jumperFontSizeMedium:d,jumperFontSizeLarge:f,jumperTextColor:n,jumperTextColorDisabled:a})},rA={name:"Pagination",common:oe,peers:{Select:sp,Input:rt,Popselect:ip},self:cp},dp=rA,iA={name:"Pagination",common:te,peers:{Select:lp,Input:dt,Popselect:rp},self(e){const{primaryColor:n,opacity3:t}=e,o=W(n,{alpha:Number(t)}),r=cp(e);return r.itemBorderActive=`1px solid ${o}`,r.itemBorderDisabled="1px solid #0000",r}},up=iA,fp={padding:"8px 14px"},aA={name:"Tooltip",common:te,peers:{Popover:zo},self(e){const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r}=e;return Object.assign(Object.assign({},fp),{borderRadius:n,boxShadow:t,color:o,textColor:r})}},Ta=aA,sA=e=>{const{borderRadius:n,boxShadow2:t,baseColor:o}=e;return Object.assign(Object.assign({},fp),{borderRadius:n,boxShadow:t,color:pe(o,"rgba(0, 0, 0, .85)"),textColor:o})},lA={name:"Tooltip",common:oe,peers:{Popover:so},self:sA},ci=lA,cA={name:"Ellipsis",common:te,peers:{Tooltip:Ta}},hp=cA,dA={name:"Ellipsis",common:oe,peers:{Tooltip:ci}},El=dA,pp={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},uA={name:"Radio",common:te,self(e){const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:f,heightSmall:p,heightMedium:b,heightLarge:h,lineHeight:y}=e;return Object.assign(Object.assign({},pp),{labelLineHeight:y,buttonHeightSmall:p,buttonHeightMedium:b,buttonHeightLarge:h,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:f,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${W(t,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:t,buttonColor:"#0000",buttonColorActive:t,buttonTextColor:a,buttonTextColorActive:o,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${W(t,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${t}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},mp=uA,fA=e=>{const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:f,heightSmall:p,heightMedium:b,heightLarge:h,lineHeight:y}=e;return Object.assign(Object.assign({},pp),{labelLineHeight:y,buttonHeightSmall:p,buttonHeightMedium:b,buttonHeightLarge:h,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:f,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${W(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:o,colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:n,buttonColor:o,buttonColorActive:o,buttonTextColor:a,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${W(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})},hA={name:"Radio",common:oe,self:fA},gp=hA,pA={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},bp=e=>{const{primaryColor:n,textColor2:t,dividerColor:o,hoverColor:r,popoverColor:i,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:f,heightSmall:p,heightMedium:b,heightLarge:h,heightHuge:y,textColor3:v,opacityDisabled:m}=e;return Object.assign(Object.assign({},pA),{optionHeightSmall:p,optionHeightMedium:b,optionHeightLarge:h,optionHeightHuge:y,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:f,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:o,suffixColor:t,prefixColor:t,optionColorHover:r,optionColorActive:W(n,{alpha:.1}),groupHeaderTextColor:v,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:m})},mA={name:"Dropdown",common:oe,peers:{Popover:so},self:bp},ka=mA,gA={name:"Dropdown",common:te,peers:{Popover:zo},self(e){const{primaryColorSuppl:n,primaryColor:t,popoverColor:o}=e,r=bp(e);return r.colorInverted=o,r.optionColorActive=W(t,{alpha:.15}),r.optionColorActiveInverted=n,r.optionColorHoverInverted=n,r}},_l=gA,bA={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"},vp=e=>{const{cardColor:n,modalColor:t,popoverColor:o,textColor2:r,textColor1:i,tableHeaderColor:a,tableColorHover:s,iconColor:l,primaryColor:c,fontWeightStrong:d,borderRadius:f,lineHeight:p,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:y,dividerColor:v,heightSmall:m,opacityDisabled:w,tableColorStriped:_}=e;return Object.assign(Object.assign({},bA),{actionDividerColor:v,lineHeight:p,borderRadius:f,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:y,borderColor:pe(n,v),tdColorHover:pe(n,s),tdColorStriped:pe(n,_),thColor:pe(n,a),thColorHover:pe(pe(n,a),s),tdColor:n,tdTextColor:r,thTextColor:i,thFontWeight:d,thButtonColorHover:s,thIconColor:l,thIconColorActive:c,borderColorModal:pe(t,v),tdColorHoverModal:pe(t,s),tdColorStripedModal:pe(t,_),thColorModal:pe(t,a),thColorHoverModal:pe(pe(t,a),s),tdColorModal:t,borderColorPopover:pe(o,v),tdColorHoverPopover:pe(o,s),tdColorStripedPopover:pe(o,_),thColorPopover:pe(o,a),thColorHoverPopover:pe(pe(o,a),s),tdColorPopover:o,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:c,loadingSize:m,opacityLoading:w})},vA={name:"DataTable",common:oe,peers:{Button:Wn,Checkbox:ur,Radio:gp,Pagination:dp,Scrollbar:Fn,Empty:Lt,Popover:so,Ellipsis:El,Dropdown:ka},self:vp},yA=vA,xA={name:"DataTable",common:te,peers:{Button:Jn,Checkbox:fr,Radio:mp,Pagination:up,Scrollbar:Zn,Empty:Bo,Popover:zo,Ellipsis:hp,Dropdown:_l},self(e){const n=vp(e);return n.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",n.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",n}},CA=xA,SA=Object.assign(Object.assign({},wa),Ke.props),wA=Te({name:"Tooltip",props:SA,__popover__:!0,setup(e){const n=Ke("Tooltip","-tooltip",void 0,ci,e),t=se(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(r){t.value.setShow(r)}}),{popoverRef:t,mergedTheme:n,popoverThemeOverrides:J(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return P($h,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),TA=be("ellipsis",{overflow:"hidden"},[_n("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),ve("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),ve("cursor-pointer",`
 cursor: pointer;
 `)]);function Rd(e){return`${e}-ellipsis--line-clamp`}function Hd(e,n){return`${e}-ellipsis--cursor-${n}`}const kA=Object.assign(Object.assign({},Ke.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),PA=Te({name:"Ellipsis",inheritAttrs:!1,props:kA,setup(e,{slots:n,attrs:t}){const{mergedClsPrefixRef:o}=On(e),r=Ke("Ellipsis","-ellipsis",TA,El,e,o),i=se(null),a=se(null),s=se(null),l=se(!1),c=J(()=>{const{lineClamp:v}=e,{value:m}=l;return v!==void 0?{textOverflow:"","-webkit-line-clamp":m?"":v}:{textOverflow:m?"":"ellipsis","-webkit-line-clamp":""}});function d(){let v=!1;const{value:m}=l;if(m)return!0;const{value:w}=i;if(w){const{lineClamp:_}=e;if(b(w),_!==void 0)v=w.scrollHeight<=w.offsetHeight;else{const{value:k}=a;k&&(v=k.getBoundingClientRect().width<=w.getBoundingClientRect().width)}h(w,v)}return v}const f=J(()=>e.expandTrigger==="click"?()=>{var v;const{value:m}=l;m&&((v=s.value)===null||v===void 0||v.setShow(!1)),l.value=!m}:void 0);sl(()=>{var v;e.tooltip&&((v=s.value)===null||v===void 0||v.setShow(!1))});const p=()=>P("span",Object.assign({},Et(t,{class:[`${o.value}-ellipsis`,e.lineClamp!==void 0?Rd(o.value):void 0,e.expandTrigger==="click"?Hd(o.value,"pointer"):void 0],style:c.value}),{ref:"triggerRef",onClick:f.value,onMouseenter:e.expandTrigger==="click"?d:void 0}),e.lineClamp?n:P("span",{ref:"triggerInnerRef"},n));function b(v){if(!v)return;const m=c.value,w=Rd(o.value);e.lineClamp!==void 0?y(v,w,"add"):y(v,w,"remove");for(const _ in m)v.style[_]!==m[_]&&(v.style[_]=m[_])}function h(v,m){const w=Hd(o.value,"pointer");e.expandTrigger==="click"&&!m?y(v,w,"add"):y(v,w,"remove")}function y(v,m,w){w==="add"?v.classList.contains(m)||v.classList.add(m):v.classList.contains(m)&&v.classList.remove(m)}return{mergedTheme:r,triggerRef:i,triggerInnerRef:a,tooltipRef:s,handleClick:f,renderTrigger:p,getTooltipDisabled:d}},render(){var e;const{tooltip:n,renderTrigger:t,$slots:o}=this;if(n){const{mergedTheme:r}=this;return P(wA,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:t,default:(e=o.tooltip)!==null&&e!==void 0?e:o.default})}else return t()}}),yp=Te({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return P("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),xp=e=>{const{textColorBase:n,opacity1:t,opacity2:o,opacity3:r,opacity4:i,opacity5:a}=e;return{color:n,opacity1Depth:t,opacity2Depth:o,opacity3Depth:r,opacity4Depth:i,opacity5Depth:a}},AA={name:"Icon",common:oe,self:xp},Cp=AA,$A={name:"Icon",common:te,self:xp},DA=$A,RA=be("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[ve("color-transition",{transition:"color .3s var(--n-bezier)"}),ve("depth",{color:"var(--n-color)"},[ce("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),ce("svg",{height:"1em",width:"1em"})]),HA=Object.assign(Object.assign({},Ke.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Sp=Te({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:HA,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=On(e),o=Ke("Icon","-icon",RA,Cp,e,n),r=J(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=o.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:d}=l;return{"--n-bezier":s,"--n-color":c,"--n-opacity":d}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?ct("icon",J(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:J(()=>{const{size:a,color:s}=e;return{fontSize:Mi(a),color:s}}),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:o,component:r,onRender:i,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&Jr("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),P("i",Et(this.$attrs,{role:"img",class:[`${o}-icon`,a,{[`${o}-icon--depth`]:t,[`${o}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?P(r):this.$slots)}}),Ml="n-dropdown-menu",Pa="n-dropdown",Id="n-dropdown-option";function Os(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function IA(e){return e.type==="group"}function wp(e){return e.type==="divider"}function EA(e){return e.type==="render"}const Tp=Te({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=je(Pa),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:c,renderIconRef:d,labelFieldRef:f,childrenFieldRef:p,renderOptionRef:b,nodePropsRef:h,menuPropsRef:y}=n,v=je(Id,null),m=je(Ml),w=je(ga),_=J(()=>e.tmNode.rawNode),k=J(()=>{const{value:N}=p;return Os(e.tmNode.rawNode,N)}),R=J(()=>{const{disabled:N}=e.tmNode;return N}),M=J(()=>{if(!k.value)return!1;const{key:N,disabled:re}=e.tmNode;if(re)return!1;const{value:T}=t,{value:q}=o,{value:$e}=r,{value:_e}=i;return T!==null?_e.includes(N):q!==null?_e.includes(N)&&_e[_e.length-1]!==N:$e!==null?_e.includes(N):!1}),g=J(()=>o.value===null&&!s.value),C=e0(M,300,g),D=J(()=>!!(v!=null&&v.enteringSubmenuRef.value)),I=se(!1);$n(Id,{enteringSubmenuRef:I});function Z(){I.value=!0}function E(){I.value=!1}function Y(){const{parentKey:N,tmNode:re}=e;re.disabled||l.value&&(r.value=N,o.value=null,t.value=re.key)}function L(){const{tmNode:N}=e;N.disabled||l.value&&t.value!==N.key&&Y()}function B(N){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:re}=N;re&&!vc({target:re},"dropdownOption")&&!vc({target:re},"scrollbarRail")&&(t.value=null)}function ie(){const{value:N}=k,{tmNode:re}=e;l.value&&!N&&!re.disabled&&(n.doSelect(re.key,re.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:c,renderIcon:d,siblingHasIcon:m.showIconRef,siblingHasSubmenu:m.hasSubmenuRef,menuProps:y,popoverBody:w,animated:s,mergedShowSubmenu:J(()=>C.value&&!D.value),rawNode:_,hasSubmenu:k,pending:wn(()=>{const{value:N}=i,{key:re}=e.tmNode;return N.includes(re)}),childActive:wn(()=>{const{value:N}=a,{key:re}=e.tmNode,T=N.findIndex(q=>re===q);return T===-1?!1:T<N.length-1}),active:wn(()=>{const{value:N}=a,{key:re}=e.tmNode,T=N.findIndex(q=>re===q);return T===-1?!1:T===N.length-1}),mergedDisabled:R,renderOption:b,nodeProps:h,handleClick:ie,handleMouseMove:L,handleMouseEnter:Y,handleMouseLeave:B,handleSubmenuBeforeEnter:Z,handleSubmenuAfterEnter:E}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:c,renderOption:d,nodeProps:f,props:p,scrollable:b}=this;let h=null;if(r){const w=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);h=P(kp,Object.assign({},w,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const y={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},v=f==null?void 0:f(o),m=P("div",Object.assign({class:[`${i}-dropdown-option`,v==null?void 0:v.class],"data-dropdown-option":!0},v),P("div",Et(y,p),[P("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(o):Gi(o.icon)]),P("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(o):Gi((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),P("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?P(Sp,null,{default:()=>P(XT,null)}):null)]),this.hasSubmenu?P(af,null,{default:()=>[P(sf,null,{default:()=>P("div",{class:`${i}-dropdown-offset-container`},P(df,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>P("div",{class:`${i}-dropdown-menu-wrapper`},t?P(no,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>h}):h)}))})]}):null);return d?d({node:m,option:o}):m}}),_A=Te({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=je(Ml),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=je(Pa);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,l=P("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(s)),P("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},P("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},Gi(s.icon)),P("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):Gi((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),P("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}}),MA=Te({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return P(Ye,null,P(_A,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:i}=r;return i.show===!1?null:wp(i)?P(yp,{clsPrefix:t,key:r.key}):r.isGroup?(Jr("dropdown","`group` node is not allowed to be put in `group` node."),null):P(Tp,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),BA=Te({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return P("div",n,[e==null?void 0:e()])}}),kp=Te({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=je(Pa);$n(Ml,{showIconRef:J(()=>{const r=n.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:J(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>Os(l,r));const{rawNode:s}=i;return Os(s,r)})})});const o=se(null);return $n(ml,null),$n(gl,null),$n(ga,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:EA(i)?P(BA,{tmNode:r,key:r.key}):wp(i)?P(yp,{clsPrefix:n,key:r.key}):IA(i)?P(MA,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):P(Tp,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return P("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?P(wh,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?Ah({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),zA=be("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Z2(),be("dropdown-option",`
 position: relative;
 `,[ce("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[ce("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),be("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[ce("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),_n("disabled",[ve("pending",`
 color: var(--n-option-text-color-hover);
 `,[ne("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),ce("&::before","background-color: var(--n-option-color-hover);")]),ve("active",`
 color: var(--n-option-text-color-active);
 `,[ne("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),ce("&::before","background-color: var(--n-option-color-active);")]),ve("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[ne("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),ve("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),ve("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[ne("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[ve("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),ne("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[ve("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),be("icon",`
 font-size: var(--n-option-icon-size);
 `)]),ne("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),ne("suffix",`
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
 `,[ve("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),be("icon",`
 font-size: var(--n-option-icon-size);
 `)]),be("dropdown-menu","pointer-events: all;")]),be("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),be("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),be("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),ce(">",[be("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),_n("scrollable",`
 padding: var(--n-padding);
 `),ve("scrollable",[ne("content",`
 padding: var(--n-padding);
 `)])]),LA={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},OA=Object.keys(wa),FA=Object.assign(Object.assign(Object.assign({},wa),LA),Ke.props),WA=Te({name:"Dropdown",inheritAttrs:!1,props:FA,setup(e){const n=se(!1),t=hl(Qe(e,"show"),n),o=J(()=>{const{keyField:E,childrenField:Y}=e;return R2(e.options,{getKey(L){return L[E]},getDisabled(L){return L.disabled===!0},getIgnored(L){return L.type==="divider"||L.type==="render"},getChildren(L){return L[Y]}})}),r=J(()=>o.value.treeNodes),i=se(null),a=se(null),s=se(null),l=J(()=>{var E,Y,L;return(L=(Y=(E=i.value)!==null&&E!==void 0?E:a.value)!==null&&Y!==void 0?Y:s.value)!==null&&L!==void 0?L:null}),c=J(()=>o.value.getPath(l.value).keyPath),d=J(()=>o.value.getPath(e.value).keyPath),f=wn(()=>e.keyboard&&t.value);v0({keydown:{ArrowUp:{prevent:!0,handler:R},ArrowRight:{prevent:!0,handler:k},ArrowDown:{prevent:!0,handler:M},ArrowLeft:{prevent:!0,handler:_},Enter:{prevent:!0,handler:g},Escape:w}},f);const{mergedClsPrefixRef:p,inlineThemeDisabled:b}=On(e),h=Ke("Dropdown","-dropdown",zA,ka,e,p);$n(Pa,{labelFieldRef:Qe(e,"labelField"),childrenFieldRef:Qe(e,"childrenField"),renderLabelRef:Qe(e,"renderLabel"),renderIconRef:Qe(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:d,animatedRef:Qe(e,"animated"),mergedShowRef:t,nodePropsRef:Qe(e,"nodeProps"),renderOptionRef:Qe(e,"renderOption"),menuPropsRef:Qe(e,"menuProps"),doSelect:y,doUpdateShow:v}),Cn(t,E=>{!e.animated&&!E&&m()});function y(E,Y){const{onSelect:L}=e;L&&ln(L,E,Y)}function v(E){const{"onUpdate:show":Y,onUpdateShow:L}=e;Y&&ln(Y,E),L&&ln(L,E),n.value=E}function m(){i.value=null,a.value=null,s.value=null}function w(){v(!1)}function _(){D("left")}function k(){D("right")}function R(){D("up")}function M(){D("down")}function g(){const E=C();E!=null&&E.isLeaf&&t.value&&(y(E.key,E.rawNode),v(!1))}function C(){var E;const{value:Y}=o,{value:L}=l;return!Y||L===null?null:(E=Y.getNode(L))!==null&&E!==void 0?E:null}function D(E){const{value:Y}=l,{value:{getFirstAvailableNode:L}}=o;let B=null;if(Y===null){const ie=L();ie!==null&&(B=ie.key)}else{const ie=C();if(ie){let N;switch(E){case"down":N=ie.getNext();break;case"up":N=ie.getPrev();break;case"right":N=ie.getChild();break;case"left":N=ie.getParent();break}N&&(B=N.key)}}B!==null&&(i.value=null,a.value=B)}const I=J(()=>{const{size:E,inverted:Y}=e,{common:{cubicBezierEaseInOut:L},self:B}=h.value,{padding:ie,dividerColor:N,borderRadius:re,optionOpacityDisabled:T,[ye("optionIconSuffixWidth",E)]:q,[ye("optionSuffixWidth",E)]:$e,[ye("optionIconPrefixWidth",E)]:_e,[ye("optionPrefixWidth",E)]:Nn,[ye("fontSize",E)]:Le,[ye("optionHeight",E)]:Be,[ye("optionIconSize",E)]:Ce}=B,De={"--n-bezier":L,"--n-font-size":Le,"--n-padding":ie,"--n-border-radius":re,"--n-option-height":Be,"--n-option-prefix-width":Nn,"--n-option-icon-prefix-width":_e,"--n-option-suffix-width":$e,"--n-option-icon-suffix-width":q,"--n-option-icon-size":Ce,"--n-divider-color":N,"--n-option-opacity-disabled":T};return Y?(De["--n-color"]=B.colorInverted,De["--n-option-color-hover"]=B.optionColorHoverInverted,De["--n-option-color-active"]=B.optionColorActiveInverted,De["--n-option-text-color"]=B.optionTextColorInverted,De["--n-option-text-color-hover"]=B.optionTextColorHoverInverted,De["--n-option-text-color-active"]=B.optionTextColorActiveInverted,De["--n-option-text-color-child-active"]=B.optionTextColorChildActiveInverted,De["--n-prefix-color"]=B.prefixColorInverted,De["--n-suffix-color"]=B.suffixColorInverted,De["--n-group-header-text-color"]=B.groupHeaderTextColorInverted):(De["--n-color"]=B.color,De["--n-option-color-hover"]=B.optionColorHover,De["--n-option-color-active"]=B.optionColorActive,De["--n-option-text-color"]=B.optionTextColor,De["--n-option-text-color-hover"]=B.optionTextColorHover,De["--n-option-text-color-active"]=B.optionTextColorActive,De["--n-option-text-color-child-active"]=B.optionTextColorChildActive,De["--n-prefix-color"]=B.prefixColor,De["--n-suffix-color"]=B.suffixColor,De["--n-group-header-text-color"]=B.groupHeaderTextColor),De}),Z=b?ct("dropdown",J(()=>`${e.size[0]}${e.inverted?"i":""}`),I,e):void 0;return{mergedClsPrefix:p,mergedTheme:h,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&m()},doUpdateShow:v,cssVars:b?void 0:I,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){const e=(o,r,i,a,s)=>{var l;const{mergedClsPrefix:c,menuProps:d}=this;(l=this.onRender)===null||l===void 0||l.call(this);const f=(d==null?void 0:d(void 0,this.tmNodes.map(b=>b.rawNode)))||{},p={ref:Av(r),class:[o,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return P(kp,Et(this.$attrs,p,f))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return P($h,Object.assign({},Gu(this.$props,OA),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),NA={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},Pp=e=>{const{popoverColor:n,textColor2:t,primaryColor:o,hoverColor:r,dividerColor:i,opacityDisabled:a,boxShadow2:s,borderRadius:l,iconColor:c,iconColorDisabled:d}=e;return Object.assign(Object.assign({},NA),{panelColor:n,panelBoxShadow:s,panelDividerColor:i,itemTextColor:t,itemTextColorActive:o,itemColorHover:r,itemOpacityDisabled:a,itemBorderRadius:l,borderRadius:l,iconColor:c,iconColorDisabled:d})},jA={name:"TimePicker",common:oe,peers:{Scrollbar:Fn,Button:Wn,Input:rt},self:Pp},Ap=jA,GA={name:"TimePicker",common:te,peers:{Scrollbar:Zn,Button:Jn,Input:dt},self:Pp},$p=GA,VA={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},Dp=e=>{const{hoverColor:n,fontSize:t,textColor2:o,textColorDisabled:r,popoverColor:i,primaryColor:a,borderRadiusSmall:s,iconColor:l,iconColorDisabled:c,textColor1:d,dividerColor:f,boxShadow2:p,borderRadius:b,fontWeightStrong:h}=e;return Object.assign(Object.assign({},VA),{itemFontSize:t,calendarDaysFontSize:t,calendarTitleFontSize:t,itemTextColor:o,itemTextColorDisabled:r,itemTextColorActive:i,itemTextColorCurrent:a,itemColorIncluded:W(a,{alpha:.1}),itemColorHover:n,itemColorDisabled:n,itemColorActive:a,itemBorderRadius:s,panelColor:i,panelTextColor:o,arrowColor:l,calendarTitleTextColor:d,calendarTitleColorHover:n,calendarDaysTextColor:o,panelHeaderDividerColor:f,calendarDaysDividerColor:f,calendarDividerColor:f,panelActionDividerColor:f,panelBoxShadow:p,panelBorderRadius:b,calendarTitleFontWeight:h,scrollItemBorderRadius:b,iconColor:l,iconColorDisabled:c})},KA={name:"DatePicker",common:oe,peers:{Input:rt,Button:Wn,TimePicker:Ap,Scrollbar:Fn},self:Dp},UA=KA,qA={name:"DatePicker",common:te,peers:{Input:dt,Button:Jn,TimePicker:$p,Scrollbar:Zn},self(e){const{popoverColor:n,hoverColor:t,primaryColor:o}=e,r=Dp(e);return r.itemColorDisabled=pe(n,t),r.itemColorIncluded=W(o,{alpha:.15}),r.itemColorHover=pe(n,t),r}},ZA=qA;var ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const JA={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},Rp=e=>{const{tableHeaderColor:n,textColor2:t,textColor1:o,cardColor:r,modalColor:i,popoverColor:a,dividerColor:s,borderRadius:l,fontWeightStrong:c,lineHeight:d,fontSizeSmall:f,fontSizeMedium:p,fontSizeLarge:b}=e;return Object.assign(Object.assign({},JA),{lineHeight:d,fontSizeSmall:f,fontSizeMedium:p,fontSizeLarge:b,titleTextColor:o,thColor:pe(r,n),thColorModal:pe(i,n),thColorPopover:pe(a,n),thTextColor:o,thFontWeight:c,tdTextColor:t,tdColor:r,tdColorModal:i,tdColorPopover:a,borderColor:pe(r,s),borderColorModal:pe(i,s),borderColorPopover:pe(a,s),borderRadius:l})},XA={name:"Descriptions",common:oe,self:Rp},YA=XA,QA={name:"Descriptions",common:te,self:Rp},e$=QA,n$={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},Hp=e=>{const{textColor1:n,textColor2:t,modalColor:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,infoColor:c,successColor:d,warningColor:f,errorColor:p,primaryColor:b,dividerColor:h,borderRadius:y,fontWeightStrong:v,lineHeight:m,fontSize:w}=e;return Object.assign(Object.assign({},n$),{fontSize:w,lineHeight:m,border:`1px solid ${h}`,titleTextColor:n,textColor:t,color:o,closeColorHover:s,closeColorPressed:l,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeBorderRadius:y,iconColor:b,iconColorInfo:c,iconColorSuccess:d,iconColorWarning:f,iconColorError:p,borderRadius:y,titleFontWeight:v})},t$={name:"Dialog",common:oe,peers:{Button:Wn},self:Hp},Ip=t$,o$={name:"Dialog",common:te,peers:{Button:Jn},self:Hp},Ep=o$,_p=e=>{const{modalColor:n,textColor2:t,boxShadow3:o}=e;return{color:n,textColor:t,boxShadow:o}},r$={name:"Modal",common:oe,peers:{Scrollbar:Fn,Dialog:Ip,Card:Zh},self:_p},i$=r$,a$={name:"Modal",common:te,peers:{Scrollbar:Zn,Dialog:Ep,Card:Jh},self:_p},s$=a$,Mp=e=>{const{textColor1:n,dividerColor:t,fontWeightStrong:o}=e;return{textColor:n,color:t,fontWeight:o}},l$={name:"Divider",common:oe,self:Mp},Bp=l$,c$={name:"Divider",common:te,self:Mp},d$=c$,u$=be("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[_n("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[_n("no-title",`
 display: flex;
 align-items: center;
 `)]),ne("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),ve("title-position-left",[ne("line",[ve("left",{width:"28px"})])]),ve("title-position-right",[ne("line",[ve("right",{width:"28px"})])]),ve("dashed",[ne("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),ve("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),ne("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),_n("dashed",[ne("line",{backgroundColor:"var(--n-color)"})]),ve("dashed",[ne("line",{borderColor:"var(--n-color)"})]),ve("vertical",{backgroundColor:"var(--n-color)"})]),f$=Object.assign(Object.assign({},Ke.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),h$=Te({name:"Divider",props:f$,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=On(e),o=Ke("Divider","-divider",u$,Bp,e,n),r=J(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:s,textColor:l,fontWeight:c}}=o.value;return{"--n-bezier":a,"--n-color":s,"--n-text-color":l,"--n-font-weight":c}}),i=t?ct("divider",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:o,dashed:r,cssVars:i,mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),P("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:o,[`${a}-divider--no-title`]:!n.default,[`${a}-divider--dashed`]:r,[`${a}-divider--title-position-${t}`]:n.default&&t}],style:i},o?null:P("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!o&&n.default?P(Ye,null,P("div",{class:`${a}-divider__title`},this.$slots),P("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),zp=e=>{const{modalColor:n,textColor1:t,textColor2:o,boxShadow3:r,lineHeight:i,fontWeightStrong:a,dividerColor:s,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,borderRadius:b,primaryColorHover:h}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:n,textColor:o,titleTextColor:t,titleFontSize:"18px",titleFontWeight:a,boxShadow:r,lineHeight:i,headerBorderBottom:`1px solid ${s}`,footerBorderTop:`1px solid ${s}`,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:c,closeBorderRadius:b,resizableTriggerColorHover:h}},p$={name:"Drawer",common:oe,peers:{Scrollbar:Fn},self:zp},m$=p$,g$={name:"Drawer",common:te,peers:{Scrollbar:Zn},self:zp},b$=g$,Lp={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},v$={name:"DynamicInput",common:te,peers:{Input:dt,Button:Jn},self(){return Lp}},y$=v$,x$=()=>Lp,C$={name:"DynamicInput",common:oe,peers:{Input:rt,Button:Wn},self:x$},S$=C$,Op={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},w$={name:"Space",self(){return Op}},Fp=w$,T$=()=>Op,k$={name:"Space",self:T$},Bl=k$;let ls;const P$=()=>{if(!cr)return!0;if(ls===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),ls=n}return ls},A$=Object.assign(Object.assign({},Ke.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),$$=Te({name:"Space",props:A$,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=On(e),o=Ke("Space","-space",void 0,Bl,e,n),r=Sa("Space",t,n);return{useGap:P$(),rtlEnabled:r,mergedClsPrefix:n,margin:J(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[ye("gap",i)]:a}}=o.value,{row:s,col:l}=gv(a);return{horizontal:yc(l),vertical:yc(s)}})}},render(){const{vertical:e,align:n,inline:t,justify:o,itemStyle:r,margin:i,wrap:a,mergedClsPrefix:s,rtlEnabled:l,useGap:c,wrapItem:d,internalUseGap:f}=this,p=Zr(ju(this));if(!p.length)return null;const b=`${i.horizontal}px`,h=`${i.horizontal/2}px`,y=`${i.vertical}px`,v=`${i.vertical/2}px`,m=p.length-1,w=o.startsWith("space-");return P("div",{role:"none",class:[`${s}-space`,l&&`${s}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!a||e?"nowrap":"wrap",marginTop:c||e?"":`-${v}`,marginBottom:c||e?"":`-${v}`,alignItems:n,gap:c?`${i.vertical}px ${i.horizontal}px`:""}},!d&&(c||f)?p:p.map((_,k)=>P("div",{role:"none",style:[r,{maxWidth:"100%"},c?"":e?{marginBottom:k!==m?y:""}:l?{marginLeft:w?o==="space-between"&&k===m?"":h:k!==m?b:"",marginRight:w?o==="space-between"&&k===0?"":h:"",paddingTop:v,paddingBottom:v}:{marginRight:w?o==="space-between"&&k===m?"":h:k!==m?b:"",marginLeft:w?o==="space-between"&&k===0?"":h:"",paddingTop:v,paddingBottom:v}]},_)))}}),D$={name:"DynamicTags",common:te,peers:{Input:dt,Button:Jn,Tag:Rh,Space:Fp},self(){return{inputWidth:"64px"}}},R$=D$,H$={name:"DynamicTags",common:oe,peers:{Input:rt,Button:Wn,Tag:Hh,Space:Bl},self(){return{inputWidth:"64px"}}},I$=H$,E$={name:"Element",common:te},_$=E$,M$={name:"Element",common:oe},Wp=M$,B$=Object.assign(Object.assign({},Ke.props),{tag:{type:String,default:"div"}}),z$=Te({name:"Element",alias:["El"],props:B$,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=On(e),o=Ke("Element","-element",void 0,Wp,e,n),r=J(()=>{const{common:a}=o.value;return Object.keys(a).reduce((s,l)=>(s[`--${nT(l)}`]=a[l],s),{})}),i=t?ct("element",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{tag:n,mergedClsPrefix:t,cssVars:o,themeClass:r,onRender:i,$slots:a}=this;return i==null||i(),P(n,{role:"none",class:[`${t}-element`,r],style:o},(e=a.default)===null||e===void 0?void 0:e.call(a))}}),L$={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},Np=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,textColor1:r,errorColor:i,warningColor:a,lineHeight:s,textColor3:l}=e;return Object.assign(Object.assign({},L$),{blankHeightSmall:n,blankHeightMedium:t,blankHeightLarge:o,lineHeight:s,labelTextColor:r,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:a,feedbackTextColor:l})},O$={name:"Form",common:oe,self:Np},F$=O$,W$={name:"Form",common:te,self:Np},N$=W$,Ed=1,jp="n-grid",Gp=1,j$={span:{type:[Number,String],default:Gp},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},G$=Te({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:j$,setup(){const{isSsrRef:e,xGapRef:n,itemStyleRef:t,overflowRef:o,layoutShiftDisabledRef:r}=je(jp),i=io();return{overflow:o,itemStyle:t,layoutShiftDisabled:r,mergedXGap:J(()=>Ko(n.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=Gp,privateShow:s=!0,privateColStart:l=void 0,privateOffset:c=0}=i.vnode.props,{value:d}=n,f=Ko(d||0);return{display:s?"":"none",gridColumn:`${l??`span ${a}`} / span ${a}`,marginLeft:c?`calc((100% - (${a} - 1) * ${f}) / ${a} * ${c} + ${f} * ${c})`:""}}}},render(){var e,n;if(this.layoutShiftDisabled){const{span:t,offset:o,mergedXGap:r}=this;return P("div",{style:{gridColumn:`span ${t} / span ${t}`,marginLeft:o?`calc((100% - (${t} - 1) * ${r}) / ${t} * ${o} + ${r} * ${o})`:""}},this.$slots)}return P("div",{style:[this.itemStyle,this.deriveStyle()]},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e,{overflow:this.overflow}))}}),V$={name:"GradientText",common:te,self(e){const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,primaryColorSuppl:a,successColorSuppl:s,warningColorSuppl:l,errorColorSuppl:c,infoColorSuppl:d,fontWeightStrong:f}=e;return{fontWeight:f,rotate:"252deg",colorStartPrimary:n,colorEndPrimary:a,colorStartInfo:i,colorEndInfo:d,colorStartWarning:o,colorEndWarning:l,colorStartError:r,colorEndError:c,colorStartSuccess:t,colorEndSuccess:s}}},K$=V$,U$=e=>{const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,fontWeightStrong:a}=e;return{fontWeight:a,rotate:"252deg",colorStartPrimary:W(n,{alpha:.6}),colorEndPrimary:n,colorStartInfo:W(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:W(o,{alpha:.6}),colorEndWarning:o,colorStartError:W(r,{alpha:.6}),colorEndError:r,colorStartSuccess:W(t,{alpha:.6}),colorEndSuccess:t}},q$={name:"GradientText",common:oe,self:U$},Z$=q$,J$={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Vp=24,cs="__ssr__",X$={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Vp},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Y$=Te({name:"Grid",inheritAttrs:!1,props:X$,setup(e){const{mergedClsPrefixRef:n,mergedBreakpointsRef:t}=On(e),o=/^\d+$/,r=se(void 0),i=b0((t==null?void 0:t.value)||J$),a=wn(()=>!!(e.itemResponsive||!o.test(e.cols.toString())||!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))),s=J(()=>{if(a.value)return e.responsive==="self"?r.value:i.value}),l=wn(()=>{var m;return(m=Number(Sr(e.cols.toString(),s.value)))!==null&&m!==void 0?m:Vp}),c=wn(()=>Sr(e.xGap.toString(),s.value)),d=wn(()=>Sr(e.yGap.toString(),s.value)),f=m=>{r.value=m.contentRect.width},p=m=>{Nu(f,m)},b=se(!1),h=J(()=>{if(e.responsive==="self")return p}),y=se(!1),v=se();return gt(()=>{const{value:m}=v;m&&m.hasAttribute(cs)&&(m.removeAttribute(cs),y.value=!0)}),$n(jp,{layoutShiftDisabledRef:Qe(e,"layoutShiftDisabled"),isSsrRef:y,itemStyleRef:Qe(e,"itemStyle"),xGapRef:c,overflowRef:b}),{isSsr:!cr,contentEl:v,mergedClsPrefix:n,style:J(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:Ko(e.xGap),rowGap:Ko(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${l.value}, minmax(0, 1fr))`,columnGap:Ko(c.value),rowGap:Ko(d.value)}),isResponsive:a,responsiveQuery:s,responsiveCols:l,handleResize:h,overflow:b}},render(){if(this.layoutShiftDisabled)return P("div",Et({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var n,t,o,r,i,a,s;this.overflow=!1;const l=Zr(ju(this)),c=[],{collapsed:d,collapsedRows:f,responsiveCols:p,responsiveQuery:b}=this;l.forEach(w=>{var _,k,R,M;if(((_=w==null?void 0:w.type)===null||_===void 0?void 0:_.__GRID_ITEM__)!==!0)return;if(Dv(w)){const D=mt(w);D.props?D.props.privateShow=!1:D.props={privateShow:!1},c.push({child:D,rawChildSpan:0});return}w.dirs=((k=w.dirs)===null||k===void 0?void 0:k.filter(({dir:D})=>D!==fl))||null;const g=mt(w),C=Number((M=Sr((R=g.props)===null||R===void 0?void 0:R.span,b))!==null&&M!==void 0?M:Ed);C!==0&&c.push({child:g,rawChildSpan:C})});let h=0;const y=(n=c[c.length-1])===null||n===void 0?void 0:n.child;if(y!=null&&y.props){const w=(t=y.props)===null||t===void 0?void 0:t.suffix;w!==void 0&&w!==!1&&(h=(r=(o=y.props)===null||o===void 0?void 0:o.span)!==null&&r!==void 0?r:Ed,y.props.privateSpan=h,y.props.privateColStart=p+1-h,y.props.privateShow=(i=y.props.privateShow)!==null&&i!==void 0?i:!0)}let v=0,m=!1;for(const{child:w,rawChildSpan:_}of c){if(m&&(this.overflow=!0),!m){const k=Number((s=Sr((a=w.props)===null||a===void 0?void 0:a.offset,b))!==null&&s!==void 0?s:0),R=Math.min(_+k,p);if(w.props?(w.props.privateSpan=R,w.props.privateOffset=k):w.props={privateSpan:R,privateOffset:k},d){const M=v%p;R+M>p&&(v+=p-M),R+v+h>f*p?m=!0:v+=R}}m&&(w.props?w.props.privateShow!==!0&&(w.props.privateShow=!1):w.props={privateShow:!1})}return P("div",Et({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[cs]:this.isSsr||void 0},this.$attrs),c.map(({child:w})=>w))};return this.isResponsive&&this.responsive==="self"?P(Ui,{onResize:this.handleResize},{default:e}):e()}}),Kp=e=>{const{primaryColor:n,baseColor:t}=e;return{color:n,iconColor:t}},Q$={name:"IconWrapper",common:oe,self:Kp},eD=Q$,nD={name:"IconWrapper",common:te,self:Kp},tD=nD;function oD(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const rD={name:"Image",common:oe,peers:{Tooltip:ci},self:oD},iD={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},Up=e=>{const{textColor2:n,successColor:t,infoColor:o,warningColor:r,errorColor:i,popoverColor:a,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:c,closeColorHover:d,closeColorPressed:f,textColor1:p,textColor3:b,borderRadius:h,fontWeightStrong:y,boxShadow2:v,lineHeight:m,fontSize:w}=e;return Object.assign(Object.assign({},iD),{borderRadius:h,lineHeight:m,fontSize:w,headerFontWeight:y,iconColor:n,iconColorSuccess:t,iconColorInfo:o,iconColorWarning:r,iconColorError:i,color:a,textColor:n,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:c,closeBorderRadius:h,closeColorHover:d,closeColorPressed:f,headerTextColor:p,descriptionTextColor:b,actionTextColor:n,boxShadow:v})},aD={name:"Notification",common:oe,peers:{Scrollbar:Fn},self:Up},sD=aD,lD={name:"Notification",common:te,peers:{Scrollbar:Zn},self:Up},cD=lD,dD={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},qp=e=>{const{textColor2:n,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,infoColor:i,successColor:a,errorColor:s,warningColor:l,popoverColor:c,boxShadow2:d,primaryColor:f,lineHeight:p,borderRadius:b,closeColorHover:h,closeColorPressed:y}=e;return Object.assign(Object.assign({},dD),{closeBorderRadius:b,textColor:n,textColorInfo:n,textColorSuccess:n,textColorError:n,textColorWarning:n,textColorLoading:n,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:d,boxShadowInfo:d,boxShadowSuccess:d,boxShadowError:d,boxShadowWarning:d,boxShadowLoading:d,iconColor:n,iconColorInfo:i,iconColorSuccess:a,iconColorWarning:l,iconColorError:s,iconColorLoading:f,closeColorHover:h,closeColorPressed:y,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,closeColorHoverInfo:h,closeColorPressedInfo:y,closeIconColorInfo:t,closeIconColorHoverInfo:o,closeIconColorPressedInfo:r,closeColorHoverSuccess:h,closeColorPressedSuccess:y,closeIconColorSuccess:t,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:r,closeColorHoverError:h,closeColorPressedError:y,closeIconColorError:t,closeIconColorHoverError:o,closeIconColorPressedError:r,closeColorHoverWarning:h,closeColorPressedWarning:y,closeIconColorWarning:t,closeIconColorHoverWarning:o,closeIconColorPressedWarning:r,closeColorHoverLoading:h,closeColorPressedLoading:y,closeIconColorLoading:t,closeIconColorHoverLoading:o,closeIconColorPressedLoading:r,loadingColor:f,lineHeight:p,borderRadius:b})},uD={name:"Message",common:oe,self:qp},fD=uD,hD={name:"Message",common:te,self:qp},pD=hD,mD={name:"ButtonGroup",common:te},gD=mD,bD={name:"ButtonGroup",common:oe},vD=bD,yD={name:"InputNumber",common:te,peers:{Button:Jn,Input:dt},self(e){const{textColorDisabled:n}=e;return{iconColorDisabled:n}}},xD=yD,CD=e=>{const{textColorDisabled:n}=e;return{iconColorDisabled:n}},SD={name:"InputNumber",common:oe,peers:{Button:Wn,Input:rt},self:CD},wD=SD,TD={name:"Layout",common:te,peers:{Scrollbar:Zn},self(e){const{textColor2:n,bodyColor:t,popoverColor:o,cardColor:r,dividerColor:i,scrollbarColor:a,scrollbarColorHover:s}=e;return{textColor:n,textColorInverted:n,color:t,colorEmbedded:t,headerColor:r,headerColorInverted:r,footerColor:r,footerColorInverted:r,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:r,siderColorInverted:r,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:o,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:pe(t,a),siderToggleBarColorHover:pe(t,s),__invertScrollbar:"false"}}},kD=TD,PD=e=>{const{baseColor:n,textColor2:t,bodyColor:o,cardColor:r,dividerColor:i,actionColor:a,scrollbarColor:s,scrollbarColorHover:l,invertedColor:c}=e;return{textColor:t,textColorInverted:"#FFF",color:o,colorEmbedded:a,headerColor:r,headerColorInverted:c,footerColor:a,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:r,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:pe(o,s),siderToggleBarColorHover:pe(o,l),__invertScrollbar:"true"}},AD={name:"Layout",common:oe,peers:{Scrollbar:Fn},self:PD},zl=AD,Zp=e=>{const{textColor2:n,cardColor:t,modalColor:o,popoverColor:r,dividerColor:i,borderRadius:a,fontSize:s,hoverColor:l}=e;return{textColor:n,color:t,colorHover:l,colorModal:o,colorHoverModal:pe(o,l),colorPopover:r,colorHoverPopover:pe(r,l),borderColor:i,borderColorModal:pe(o,i),borderColorPopover:pe(r,i),borderRadius:a,fontSize:s}},$D={name:"List",common:oe,self:Zp},DD=$D,RD={name:"List",common:te,self:Zp},HD=RD,ID={name:"LoadingBar",common:te,self(e){const{primaryColor:n}=e;return{colorError:"red",colorLoading:n,height:"2px"}}},ED=ID,_D=e=>{const{primaryColor:n,errorColor:t}=e;return{colorError:t,colorLoading:n,height:"2px"}},MD={name:"LoadingBar",common:oe,self:_D},BD=MD,zD={name:"Log",common:te,peers:{Scrollbar:Zn,Code:ep},self(e){const{textColor2:n,inputColor:t,fontSize:o,primaryColor:r}=e;return{loaderFontSize:o,loaderTextColor:n,loaderColor:t,loaderBorder:"1px solid #0000",loadingColor:r}}},LD=zD,OD=e=>{const{textColor2:n,modalColor:t,borderColor:o,fontSize:r,primaryColor:i}=e;return{loaderFontSize:r,loaderTextColor:n,loaderColor:t,loaderBorder:`1px solid ${o}`,loadingColor:i}},FD={name:"Log",common:oe,peers:{Scrollbar:Fn,Code:np},self:OD},WD=FD,ND={name:"Mention",common:te,peers:{InternalSelectMenu:li,Input:dt},self(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}},jD=ND,GD=e=>{const{boxShadow2:n}=e;return{menuBoxShadow:n}},VD={name:"Mention",common:oe,peers:{InternalSelectMenu:si,Input:rt},self:GD},KD=VD;function UD(e,n,t,o){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:o}}const Jp=e=>{const{borderRadius:n,textColor3:t,primaryColor:o,textColor2:r,textColor1:i,fontSize:a,dividerColor:s,hoverColor:l,primaryColorHover:c}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:W(o,{alpha:.1}),itemColorActiveHover:W(o,{alpha:.1}),itemColorActiveCollapsed:W(o,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:o,itemTextColorActiveHover:o,itemTextColorChildActive:o,itemTextColorChildActiveHover:o,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:o,itemTextColorActiveHoverHorizontal:o,itemTextColorChildActiveHorizontal:o,itemTextColorChildActiveHoverHorizontal:o,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:o,itemIconColorActiveHover:o,itemIconColorChildActive:o,itemIconColorChildActiveHover:o,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:o,itemIconColorActiveHoverHorizontal:o,itemIconColorChildActiveHorizontal:o,itemIconColorChildActiveHoverHorizontal:o,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:o,arrowColorActiveHover:o,arrowColorChildActive:o,arrowColorChildActiveHover:o,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:s},UD("#BBB",o,"#FFF","#AAA"))},qD={name:"Menu",common:oe,peers:{Tooltip:ci,Dropdown:ka},self:Jp},ZD=qD,JD={name:"Menu",common:te,peers:{Tooltip:Ta,Dropdown:_l},self(e){const{primaryColor:n,primaryColorSuppl:t}=e,o=Jp(e);return o.itemColorActive=W(n,{alpha:.15}),o.itemColorActiveHover=W(n,{alpha:.15}),o.itemColorActiveCollapsed=W(n,{alpha:.15}),o.itemColorActiveInverted=t,o.itemColorActiveHoverInverted=t,o.itemColorActiveCollapsedInverted=t,o}},XD=JD,YD={titleFontSize:"18px",backSize:"22px"};function Xp(e){const{textColor1:n,textColor2:t,textColor3:o,fontSize:r,fontWeightStrong:i,primaryColorHover:a,primaryColorPressed:s}=e;return Object.assign(Object.assign({},YD),{titleFontWeight:i,fontSize:r,titleTextColor:n,backColor:t,backColorHover:a,backColorPressed:s,subtitleTextColor:o})}const QD={name:"PageHeader",common:oe,self:Xp},eR={name:"PageHeader",common:te,self:Xp},nR={iconSize:"22px"},Yp=e=>{const{fontSize:n,warningColor:t}=e;return Object.assign(Object.assign({},nR),{fontSize:n,iconColor:t})},tR={name:"Popconfirm",common:oe,peers:{Button:Wn,Popover:so},self:Yp},oR=tR,rR={name:"Popconfirm",common:te,peers:{Button:Jn,Popover:zo},self:Yp},iR=rR,Qp=e=>{const{infoColor:n,successColor:t,warningColor:o,errorColor:r,textColor2:i,progressRailColor:a,fontSize:s,fontWeight:l}=e;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:l,railColor:a,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:n,iconColorInfo:n,iconColorSuccess:t,iconColorWarning:o,iconColorError:r,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:n,fillColorInfo:n,fillColorSuccess:t,fillColorWarning:o,fillColorError:r,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},aR={name:"Progress",common:oe,self:Qp},em=aR,sR={name:"Progress",common:te,self(e){const n=Qp(e);return n.textColorLineInner="rgb(0, 0, 0)",n.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",n}},nm=sR,lR={name:"Rate",common:te,self(e){const{railColor:n}=e;return{itemColor:n,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},cR=lR,dR=e=>{const{railColor:n}=e;return{itemColor:n,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},uR={name:"Rate",common:oe,self:dR},fR=uR,hR={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0},tm=e=>{const{textColor2:n,textColor1:t,errorColor:o,successColor:r,infoColor:i,warningColor:a,lineHeight:s,fontWeightStrong:l}=e;return Object.assign(Object.assign({},hR),{lineHeight:s,titleFontWeight:l,titleTextColor:t,textColor:n,iconColorError:o,iconColorSuccess:r,iconColorInfo:i,iconColorWarning:a})},pR={name:"Result",common:oe,self:tm},mR=pR,gR={name:"Result",common:te,self:tm},bR=gR,om={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},vR={name:"Slider",common:te,self(e){const n="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:t,modalColor:o,primaryColorSuppl:r,popoverColor:i,textColor2:a,cardColor:s,borderRadius:l,fontSize:c,opacityDisabled:d}=e;return Object.assign(Object.assign({},om),{fontSize:c,markFontSize:c,railColor:t,railColorHover:t,fillColor:r,fillColorHover:r,opacityDisabled:d,handleColor:"#FFF",dotColor:s,dotColorModal:o,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:n,indicatorTextColor:a,indicatorBorderRadius:l,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})}},yR=vR,xR=e=>{const n="rgba(0, 0, 0, .85)",t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:r,baseColor:i,cardColor:a,modalColor:s,popoverColor:l,borderRadius:c,fontSize:d,opacityDisabled:f}=e;return Object.assign(Object.assign({},om),{fontSize:d,markFontSize:d,railColor:o,railColorHover:o,fillColor:r,fillColorHover:r,opacityDisabled:f,handleColor:"#FFF",dotColor:a,dotColorModal:s,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:n,indicatorBoxShadow:t,indicatorTextColor:i,indicatorBorderRadius:c,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})},CR={name:"Slider",common:oe,self:xR},SR=CR,rm=e=>{const{opacityDisabled:n,heightTiny:t,heightSmall:o,heightMedium:r,heightLarge:i,heightHuge:a,primaryColor:s,fontSize:l}=e;return{fontSize:l,textColor:s,sizeTiny:t,sizeSmall:o,sizeMedium:r,sizeLarge:i,sizeHuge:a,color:s,opacitySpinning:n}},wR={name:"Spin",common:oe,self:rm},TR=wR,kR={name:"Spin",common:te,self:rm},PR=kR,im=e=>{const{textColor2:n,textColor3:t,fontSize:o,fontWeight:r}=e;return{labelFontSize:o,labelFontWeight:r,valueFontWeight:r,valueFontSize:"24px",labelTextColor:t,valuePrefixTextColor:n,valueSuffixTextColor:n,valueTextColor:n}},AR={name:"Statistic",common:oe,self:im},$R=AR,DR={name:"Statistic",common:te,self:im},RR=DR,HR={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},am=e=>{const{fontWeightStrong:n,baseColor:t,textColorDisabled:o,primaryColor:r,errorColor:i,textColor1:a,textColor2:s}=e;return Object.assign(Object.assign({},HR),{stepHeaderFontWeight:n,indicatorTextColorProcess:t,indicatorTextColorWait:o,indicatorTextColorFinish:r,indicatorTextColorError:i,indicatorBorderColorProcess:r,indicatorBorderColorWait:o,indicatorBorderColorFinish:r,indicatorBorderColorError:i,indicatorColorProcess:r,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:o,splitorColorWait:o,splitorColorFinish:r,splitorColorError:o,headerTextColorProcess:a,headerTextColorWait:o,headerTextColorFinish:o,headerTextColorError:i,descriptionTextColorProcess:s,descriptionTextColorWait:o,descriptionTextColorFinish:o,descriptionTextColorError:i})},IR={name:"Steps",common:oe,self:am},ER=IR,_R={name:"Steps",common:te,self:am},MR=_R,sm={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},BR={name:"Switch",common:te,self(e){const{primaryColorSuppl:n,opacityDisabled:t,borderRadius:o,primaryColor:r,textColor2:i,baseColor:a}=e,s="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},sm),{iconColor:a,textColor:i,loadingColor:n,opacityDisabled:t,railColor:s,railColorActive:n,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 8px 0 ${W(r,{alpha:.3})}`})}},zR=BR,LR=e=>{const{primaryColor:n,opacityDisabled:t,borderRadius:o,textColor3:r}=e,i="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},sm),{iconColor:r,textColor:"white",loadingColor:n,opacityDisabled:t,railColor:i,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${W(n,{alpha:.2})}`})},OR={name:"Switch",common:oe,self:LR},FR=OR,WR={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},lm=e=>{const{dividerColor:n,cardColor:t,modalColor:o,popoverColor:r,tableHeaderColor:i,tableColorStriped:a,textColor1:s,textColor2:l,borderRadius:c,fontWeightStrong:d,lineHeight:f,fontSizeSmall:p,fontSizeMedium:b,fontSizeLarge:h}=e;return Object.assign(Object.assign({},WR),{fontSizeSmall:p,fontSizeMedium:b,fontSizeLarge:h,lineHeight:f,borderRadius:c,borderColor:pe(t,n),borderColorModal:pe(o,n),borderColorPopover:pe(r,n),tdColor:t,tdColorModal:o,tdColorPopover:r,tdColorStriped:pe(t,a),tdColorStripedModal:pe(o,a),tdColorStripedPopover:pe(r,a),thColor:pe(t,i),thColorModal:pe(o,i),thColorPopover:pe(r,i),thTextColor:s,tdTextColor:l,thFontWeight:d})},NR={name:"Table",common:oe,self:lm},jR=NR,GR={name:"Table",common:te,self:lm},VR=GR,KR={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},cm=e=>{const{textColor2:n,primaryColor:t,textColorDisabled:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,tabColor:c,baseColor:d,dividerColor:f,fontWeight:p,textColor1:b,borderRadius:h,fontSize:y,fontWeightStrong:v}=e;return Object.assign(Object.assign({},KR),{colorSegment:c,tabFontSizeCard:y,tabTextColorLine:b,tabTextColorActiveLine:t,tabTextColorHoverLine:t,tabTextColorDisabledLine:o,tabTextColorSegment:b,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:o,tabTextColorBar:b,tabTextColorActiveBar:t,tabTextColorHoverBar:t,tabTextColorDisabledBar:o,tabTextColorCard:b,tabTextColorHoverCard:b,tabTextColorActiveCard:t,tabTextColorDisabledCard:o,barColor:t,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,closeBorderRadius:h,tabColor:c,tabColorSegment:d,tabBorderColor:f,tabFontWeightActive:p,tabFontWeight:p,tabBorderRadius:h,paneTextColor:n,fontWeightStrong:v})},UR={name:"Tabs",common:oe,self:cm},qR=UR,ZR={name:"Tabs",common:te,self(e){const n=cm(e),{inputColor:t}=e;return n.colorSegment=t,n.tabColorSegment=t,n}},JR=ZR,dm=e=>{const{textColor1:n,textColor2:t,fontWeightStrong:o,fontSize:r}=e;return{fontSize:r,titleTextColor:n,textColor:t,titleFontWeight:o}},XR={name:"Thing",common:oe,self:dm},YR=XR,QR={name:"Thing",common:te,self:dm},eH=QR,um={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},nH={name:"Timeline",common:te,self(e){const{textColor3:n,infoColorSuppl:t,errorColorSuppl:o,successColorSuppl:r,warningColorSuppl:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:c,fontSize:d}=e;return Object.assign(Object.assign({},um),{contentFontSize:d,titleFontWeight:c,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})}},tH=nH,oH=e=>{const{textColor3:n,infoColor:t,errorColor:o,successColor:r,warningColor:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:c,fontSize:d}=e;return Object.assign(Object.assign({},um),{contentFontSize:d,titleFontWeight:c,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})},rH={name:"Timeline",common:oe,self:oH},iH=rH,fm={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},aH={name:"Transfer",common:te,peers:{Checkbox:fr,Scrollbar:Zn,Input:dt,Empty:Bo,Button:Jn},self(e){const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,inputColor:l,tableHeaderColor:c,textColor1:d,textColorDisabled:f,textColor2:p,textColor3:b,hoverColor:h,closeColorHover:y,closeColorPressed:v,closeIconColor:m,closeIconColorHover:w,closeIconColorPressed:_,dividerColor:k}=e;return Object.assign(Object.assign({},fm),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:k,borderColor:"#0000",listColor:l,headerColor:c,titleTextColor:d,titleTextColorDisabled:f,extraTextColor:b,extraTextColorDisabled:f,itemTextColor:p,itemTextColorDisabled:f,itemColorPending:h,titleFontWeight:n,closeColorHover:y,closeColorPressed:v,closeIconColor:m,closeIconColorHover:w,closeIconColorPressed:_})}},sH=aH,lH=e=>{const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,cardColor:l,tableHeaderColor:c,textColor1:d,textColorDisabled:f,textColor2:p,textColor3:b,borderColor:h,hoverColor:y,closeColorHover:v,closeColorPressed:m,closeIconColor:w,closeIconColorHover:_,closeIconColorPressed:k}=e;return Object.assign(Object.assign({},fm),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:h,borderColor:h,listColor:l,headerColor:pe(l,c),titleTextColor:d,titleTextColorDisabled:f,extraTextColor:b,extraTextColorDisabled:f,itemTextColor:p,itemTextColorDisabled:f,itemColorPending:y,titleFontWeight:n,closeColorHover:v,closeColorPressed:m,closeIconColor:w,closeIconColorHover:_,closeIconColorPressed:k})},cH={name:"Transfer",common:oe,peers:{Checkbox:ur,Scrollbar:Fn,Input:rt,Empty:Lt,Button:Wn},self:lH},dH=cH,hm=e=>{const{borderRadiusSmall:n,hoverColor:t,pressedColor:o,primaryColor:r,textColor3:i,textColor2:a,textColorDisabled:s,fontSize:l}=e;return{fontSize:l,nodeBorderRadius:n,nodeColorHover:t,nodeColorPressed:o,nodeColorActive:W(r,{alpha:.1}),arrowColor:i,nodeTextColor:a,nodeTextColorDisabled:s,loadingColor:r,dropMarkColor:r}},uH={name:"Tree",common:oe,peers:{Checkbox:ur,Scrollbar:Fn,Empty:Lt},self:hm},pm=uH,fH={name:"Tree",common:te,peers:{Checkbox:fr,Scrollbar:Zn,Empty:Bo},self(e){const{primaryColor:n}=e,t=hm(e);return t.nodeColorActive=W(n,{alpha:.15}),t}},mm=fH,hH={name:"TreeSelect",common:te,peers:{Tree:mm,Empty:Bo,InternalSelection:Il}},pH=hH,mH=e=>{const{popoverColor:n,boxShadow2:t,borderRadius:o,heightMedium:r,dividerColor:i,textColor2:a}=e;return{menuPadding:"4px",menuColor:n,menuBoxShadow:t,menuBorderRadius:o,menuHeight:`calc(${r} * 7.6)`,actionDividerColor:i,actionTextColor:a,actionPadding:"8px 12px"}},gH={name:"TreeSelect",common:oe,peers:{Tree:pm,Empty:Lt,InternalSelection:Hl},self:mH},bH=gH,vH={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},gm=e=>{const{primaryColor:n,textColor2:t,borderColor:o,lineHeight:r,fontSize:i,borderRadiusSmall:a,dividerColor:s,fontWeightStrong:l,textColor1:c,textColor3:d,infoColor:f,warningColor:p,errorColor:b,successColor:h,codeColor:y}=e;return Object.assign(Object.assign({},vH),{aTextColor:n,blockquoteTextColor:t,blockquotePrefixColor:o,blockquoteLineHeight:r,blockquoteFontSize:i,codeBorderRadius:a,liTextColor:t,liLineHeight:r,liFontSize:i,hrColor:s,headerFontWeight:l,headerTextColor:c,pTextColor:t,pTextColor1Depth:c,pTextColor2Depth:t,pTextColor3Depth:d,pLineHeight:r,pFontSize:i,headerBarColor:n,headerBarColorPrimary:n,headerBarColorInfo:f,headerBarColorError:b,headerBarColorWarning:p,headerBarColorSuccess:h,textColor:t,textColor1Depth:c,textColor2Depth:t,textColor3Depth:d,textColorPrimary:n,textColorInfo:f,textColorSuccess:h,textColorWarning:p,textColorError:b,codeTextColor:t,codeColor:y,codeBorder:"1px solid #0000"})},yH={name:"Typography",common:oe,self:gm},Ll=yH,xH={name:"Typography",common:te,self:gm},CH=xH,bm=e=>{const{iconColor:n,primaryColor:t,errorColor:o,textColor2:r,successColor:i,opacityDisabled:a,actionColor:s,borderColor:l,hoverColor:c,lineHeight:d,borderRadius:f,fontSize:p}=e;return{fontSize:p,lineHeight:d,borderRadius:f,draggerColor:s,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${t}`,itemColorHover:c,itemColorHoverError:W(o,{alpha:.06}),itemTextColor:r,itemTextColorError:o,itemTextColorSuccess:i,itemIconColor:n,itemDisabledOpacity:a,itemBorderImageCardError:`1px solid ${o}`,itemBorderImageCard:`1px solid ${l}`}},SH={name:"Upload",common:oe,peers:{Button:Wn,Progress:em},self:bm},wH=SH,TH={name:"Upload",common:te,peers:{Button:Jn,Progress:nm},self(e){const{errorColor:n}=e,t=bm(e);return t.itemColorHoverError=W(n,{alpha:.09}),t}},kH=TH,PH={name:"Watermark",common:te,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},AH=PH,$H={name:"Watermark",common:oe,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},DH=$H,RH={name:"Row",common:oe},HH=RH,IH={name:"Row",common:te},EH=IH,_H={name:"Image",common:te,peers:{Tooltip:Ta},self:e=>{const{textColor2:n}=e;return{toolbarIconColor:n,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},vm={type:String,default:"static"},MH=be("layout",`
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
`,[be("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),ve("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),BH={embedded:Boolean,position:vm,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},zH="n-layout";function ym(e){return Te({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Ke.props),BH),setup(n){const t=se(null),o=se(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=On(n),a=Ke("Layout","-layout",MH,zl,n,r);function s(y,v){if(n.nativeScrollbar){const{value:m}=t;m&&(v===void 0?m.scrollTo(y):m.scrollTo(y,v))}else{const{value:m}=o;m&&m.scrollTo(y,v)}}$n(zH,n);let l=0,c=0;const d=y=>{var v;const m=y.target;l=m.scrollLeft,c=m.scrollTop,(v=n.onScroll)===null||v===void 0||v.call(n,y)};Cf(()=>{if(n.nativeScrollbar){const y=t.value;y&&(y.scrollTop=c,y.scrollLeft=l)}});const f={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:s},b=J(()=>{const{common:{cubicBezierEaseInOut:y},self:v}=a.value;return{"--n-bezier":y,"--n-color":n.embedded?v.colorEmbedded:v.color,"--n-text-color":v.textColor}}),h=i?ct("layout",J(()=>n.embedded?"e":""),b,n):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:o,hasSiderStyle:f,mergedTheme:a,handleNativeElScroll:d,cssVars:i?void 0:b,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender},p)},render(){var n;const{mergedClsPrefix:t,hasSider:o}=this;(n=this.onRender)===null||n===void 0||n.call(this);const r=o?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return P("div",{class:i,style:this.cssVars},this.nativeScrollbar?P("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):P(Sh,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const LH=ym(!1),OH=ym(!0),FH=be("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[ve("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),ve("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),WH=Object.assign(Object.assign({},Ke.props),{inverted:Boolean,position:vm,bordered:Boolean}),NH=Te({name:"LayoutFooter",props:WH,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=On(e),o=Ke("Layout","-layout-footer",FH,zl,e,n),r=J(()=>{const{common:{cubicBezierEaseInOut:a},self:s}=o.value,l={"--n-bezier":a};return e.inverted?(l["--n-color"]=s.footerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.footerBorderColorInverted):(l["--n-color"]=s.footerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.footerBorderColor),l}),i=t?ct("layout-footer",J(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),P("div",{class:[`${n}-layout-footer`,this.themeClass,this.position&&`${n}-layout-footer--${this.position}-positioned`,this.bordered&&`${n}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),xm={extraFontSize:"12px",width:"440px"},jH={name:"Transfer",common:te,peers:{Checkbox:fr,Scrollbar:Zn,Input:dt,Empty:Bo,Button:Jn},self(e){const{iconColorDisabled:n,iconColor:t,fontWeight:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:c,borderRadius:d,inputColor:f,tableHeaderColor:p,textColor1:b,textColorDisabled:h,textColor2:y,hoverColor:v}=e;return Object.assign(Object.assign({},xm),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:d,borderColor:"#0000",listColor:f,headerColor:p,titleTextColor:b,titleTextColorDisabled:h,extraTextColor:y,filterDividerColor:"#0000",itemTextColor:y,itemTextColorDisabled:h,itemColorPending:v,titleFontWeight:o,iconColor:t,iconColorDisabled:n})}},GH=jH,VH=e=>{const{fontWeight:n,iconColorDisabled:t,iconColor:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:c,borderRadius:d,cardColor:f,tableHeaderColor:p,textColor1:b,textColorDisabled:h,textColor2:y,borderColor:v,hoverColor:m}=e;return Object.assign(Object.assign({},xm),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:d,borderColor:v,listColor:f,headerColor:pe(f,p),titleTextColor:b,titleTextColorDisabled:h,extraTextColor:y,filterDividerColor:v,itemTextColor:y,itemTextColorDisabled:h,itemColorPending:m,titleFontWeight:n,iconColor:o,iconColorDisabled:t})},KH={name:"Transfer",common:oe,peers:{Checkbox:ur,Scrollbar:Fn,Input:rt,Empty:Lt,Button:Wn},self:VH},UH=KH,qH={name:"Skeleton",common:te,self(e){const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}}},ZH=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}},JH={name:"Skeleton",common:oe,self:ZH},XH=be("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[ce("&:first-child",{marginTop:0}),ve("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[ve("align-text",{paddingLeft:0},[ce("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),ce("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),ce("&::before",{backgroundColor:"var(--n-bar-color)"})])]),YH=Object.assign(Object.assign({},Ke.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),hr=e=>Te({name:`H${e}`,props:YH,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=On(n),r=Ke("Typography","-h",XH,Ll,n,t),i=J(()=>{const{type:s}=n,{common:{cubicBezierEaseInOut:l},self:{headerFontWeight:c,headerTextColor:d,[ye("headerPrefixWidth",e)]:f,[ye("headerFontSize",e)]:p,[ye("headerMargin",e)]:b,[ye("headerBarWidth",e)]:h,[ye("headerBarColor",s)]:y}}=r.value;return{"--n-bezier":l,"--n-font-size":p,"--n-margin":b,"--n-bar-color":y,"--n-bar-width":h,"--n-font-weight":c,"--n-text-color":d,"--n-prefix-width":f}}),a=o?ct(`h${e}`,J(()=>n.type[0]),i,n):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var n;const{prefix:t,alignText:o,mergedClsPrefix:r,cssVars:i,$slots:a}=this;return(n=this.onRender)===null||n===void 0||n.call(this),P(`h${e}`,{class:[`${r}-h`,`${r}-h${e}`,this.themeClass,{[`${r}-h--prefix-bar`]:t,[`${r}-h--align-text`]:o}],style:i},a)}}),QH=hr("1"),eI=hr("2");hr("3");hr("4");hr("5");hr("6");const nI=be("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[ve("strong",`
 font-weight: var(--n-font-weight-strong);
 `),ve("italic",{fontStyle:"italic"}),ve("underline",{textDecoration:"underline"}),ve("code",`
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
 `)]),tI=Object.assign(Object.assign({},Ke.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),oI=Te({name:"Text",props:tI,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=On(e),o=Ke("Typography","-text",nI,Ll,e,n),r=J(()=>{const{depth:a,type:s}=e,l=s==="default"?a===void 0?"textColor":`textColor${a}Depth`:ye("textColor",s),{common:{fontWeightStrong:c,fontFamilyMono:d,cubicBezierEaseInOut:f},self:{codeTextColor:p,codeBorderRadius:b,codeColor:h,codeBorder:y,[l]:v}}=o.value;return{"--n-bezier":f,"--n-text-color":v,"--n-font-weight-strong":c,"--n-font-famliy-mono":d,"--n-code-border-radius":b,"--n-code-text-color":p,"--n-code-color":h,"--n-code-border":y}}),i=t?ct("text",J(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:n,compitableTag:nf(e,["as","tag"]),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,n,t;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],i=(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n);return this.code?P("code",{class:r,style:this.cssVars},this.delete?P("del",null,i):i):this.delete?P("del",{class:r,style:this.cssVars},i):P(this.compitableTag||"span",{class:r,style:this.cssVars},i)}}),Cm=()=>({}),rI={name:"Equation",common:oe,self:Cm},iI=rI,aI={name:"Equation",common:te,self:Cm},sI=aI,lI={name:"dark",common:te,Alert:vk,Anchor:Pk,AutoComplete:Fk,Avatar:Wh,AvatarGroup:Kk,BackTop:qk,Badge:Qk,Breadcrumb:sP,Button:Jn,ButtonGroup:gD,Calendar:xP,Card:Jh,Carousel:HP,Cascader:LP,Checkbox:fr,Code:ep,Collapse:VP,CollapseTransition:ZP,ColorPicker:TP,DataTable:CA,DatePicker:ZA,Descriptions:e$,Dialog:Ep,Divider:d$,Drawer:b$,Dropdown:_l,DynamicInput:y$,DynamicTags:R$,Element:_$,Empty:Bo,Ellipsis:hp,Equation:sI,Form:N$,GradientText:K$,Icon:DA,IconWrapper:tD,Image:_H,Input:dt,InputNumber:xD,LegacyTransfer:GH,Layout:kD,List:HD,LoadingBar:ED,Log:LD,Menu:XD,Mention:jD,Message:pD,Modal:s$,Notification:cD,PageHeader:eR,Pagination:up,Popconfirm:iR,Popover:zo,Popselect:rp,Progress:nm,Radio:mp,Rate:cR,Result:bR,Row:EH,Scrollbar:Zn,Select:lp,Skeleton:qH,Slider:yR,Space:Fp,Spin:PR,Statistic:RR,Steps:MR,Switch:zR,Table:VR,Tabs:JR,Tag:Rh,Thing:eH,TimePicker:$p,Timeline:tH,Tooltip:Ta,Transfer:sH,Tree:mm,TreeSelect:pH,Typography:CH,Upload:kH,Watermark:AH},cI={name:"light",common:oe,Alert:Ck,Anchor:Tk,AutoComplete:Lk,Avatar:Fh,AvatarGroup:Gk,BackTop:Xk,Badge:tP,Breadcrumb:iP,Button:Wn,ButtonGroup:vD,Calendar:vP,Card:Zh,Carousel:DP,Cascader:BP,Checkbox:ur,Code:np,Collapse:jP,CollapseTransition:UP,ColorPicker:SP,DataTable:yA,DatePicker:UA,Descriptions:YA,Dialog:Ip,Divider:Bp,Drawer:m$,Dropdown:ka,DynamicInput:S$,DynamicTags:I$,Element:Wp,Empty:Lt,Equation:iI,Ellipsis:El,Form:F$,GradientText:Z$,Icon:Cp,IconWrapper:eD,Image:rD,Input:rt,InputNumber:wD,Layout:zl,LegacyTransfer:UH,List:DD,LoadingBar:BD,Log:WD,Menu:ZD,Mention:KD,Message:fD,Modal:i$,Notification:sD,PageHeader:QD,Pagination:dp,Popconfirm:oR,Popover:so,Popselect:ip,Progress:em,Radio:gp,Rate:fR,Row:HH,Result:mR,Scrollbar:Fn,Skeleton:JH,Select:sp,Slider:SR,Space:Bl,Spin:TR,Statistic:$R,Steps:ER,Switch:FR,Table:jR,Tabs:qR,Tag:Hh,Thing:YR,TimePicker:Ap,Timeline:iH,Tooltip:ci,Transfer:dH,Tree:pm,TreeSelect:bH,Typography:Ll,Upload:wH,Watermark:DH};var dI=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Sm;const Aa=e=>Sm=e,wm=Symbol();function Fs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Or;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Or||(Or={}));function uI(){const e=Kd(!0),n=e.run(()=>se({}));let t=[],o=[];const r=eo({install(i){Aa(r),r._a=i,i.provide(wm,r),i.config.globalProperties.$pinia=r,o.forEach(a=>t.push(a)),o=[]},use(i){return!this._a&&!dI?o.push(i):t.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return r}const Tm=()=>{};function _d(e,n,t,o=Tm){e.push(n);const r=()=>{const i=e.indexOf(n);i>-1&&(e.splice(i,1),o())};return!t&&Qm()&&eg(r),r}function Go(e,...n){e.slice().forEach(t=>{t(...n)})}function Ws(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,o)=>e.set(o,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const o=n[t],r=e[t];Fs(r)&&Fs(o)&&e.hasOwnProperty(t)&&!pn(o)&&!Jt(o)?e[t]=Ws(r,o):e[t]=o}return e}const fI=Symbol();function hI(e){return!Fs(e)||!e.hasOwnProperty(fI)}const{assign:qt}=Object;function pI(e){return!!(pn(e)&&e.effect)}function mI(e,n,t,o){const{state:r,actions:i,getters:a}=n,s=t.state.value[e];let l;function c(){s||(t.state.value[e]=r?r():{});const d=Rg(t.state.value[e]);return qt(d,i,Object.keys(a||{}).reduce((f,p)=>(f[p]=eo(J(()=>{Aa(t);const b=t._s.get(e);return a[p].call(b,b)})),f),{}))}return l=km(e,c,n,t,o,!0),l.$reset=function(){const f=r?r():{};this.$patch(p=>{qt(p,f)})},l}function km(e,n,t={},o,r,i){let a;const s=qt({actions:{}},t),l={deep:!0};let c,d,f=eo([]),p=eo([]),b;const h=o.state.value[e];!i&&!h&&(o.state.value[e]={}),se({});let y;function v(g){let C;c=d=!1,typeof g=="function"?(g(o.state.value[e]),C={type:Or.patchFunction,storeId:e,events:b}):(Ws(o.state.value[e],g),C={type:Or.patchObject,payload:g,storeId:e,events:b});const D=y=Symbol();er().then(()=>{y===D&&(c=!0)}),d=!0,Go(f,C,o.state.value[e])}const m=Tm;function w(){a.stop(),f=[],p=[],o._s.delete(e)}function _(g,C){return function(){Aa(o);const D=Array.from(arguments),I=[],Z=[];function E(B){I.push(B)}function Y(B){Z.push(B)}Go(p,{args:D,name:g,store:R,after:E,onError:Y});let L;try{L=C.apply(this&&this.$id===e?this:R,D)}catch(B){throw Go(Z,B),B}return L instanceof Promise?L.then(B=>(Go(I,B),B)).catch(B=>(Go(Z,B),Promise.reject(B))):(Go(I,L),L)}}const k={_p:o,$id:e,$onAction:_d.bind(null,p),$patch:v,$reset:m,$subscribe(g,C={}){const D=_d(f,g,C.detached,()=>I()),I=a.run(()=>Cn(()=>o.state.value[e],Z=>{(C.flush==="sync"?d:c)&&g({storeId:e,type:Or.direct,events:b},Z)},qt({},l,C)));return D},$dispose:w},R=ti(k);o._s.set(e,R);const M=o._e.run(()=>(a=Kd(),a.run(()=>n())));for(const g in M){const C=M[g];if(pn(C)&&!pI(C)||Jt(C))i||(h&&hI(C)&&(pn(C)?C.value=h[g]:Ws(C,h[g])),o.state.value[e][g]=C);else if(typeof C=="function"){const D=_(g,C);M[g]=D,s.actions[g]=C}}return qt(R,M),qt(Ge(R),M),Object.defineProperty(R,"$state",{get:()=>o.state.value[e],set:g=>{v(C=>{qt(C,g)})}}),o._p.forEach(g=>{qt(R,a.run(()=>g({store:R,app:o._a,pinia:o,options:s})))}),h&&i&&t.hydrate&&t.hydrate(R.$state,h),c=!0,d=!0,R}function Pm(e,n,t){let o,r;const i=typeof n=="function";typeof e=="string"?(o=e,r=i?t:n):(r=e,o=e.id);function a(s,l){const c=io();return s=s||c&&je(wm,null),s&&Aa(s),s=Sm,s._s.has(o)||(i?km(o,n,r,s):mI(o,r,s)),s._s.get(o)}return a.$id=o,a}const gI=`local HDsearch="https://harddrop.com/wiki?search="
local HDwiki="\\nFor more information, please visit Hard Drop Wiki. Click on the globe icon to open the link."
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
        "Here are our recommendations for improving your Tetris skills. If you have ever felt difficulties in your training, you can just relax and spend some time playing the modes you do enjoy. Have fun!\\n\\nThese are sets of missions that you need to accomplish. When there is order within each set, we recommend you to do all three sets of tasks simultaneously instead of one by one. \\n\\nA. Stacking\\n\\tA1. Think twice before you place your block. If your first decision doesn’t seem to fit well, think again.\\n\\tA2. Keep your terrain flat since it allows more possibilities for different blocks.\\b\\bB. Efficiency & Speed\\b\\nB1. Don’t count on ghost pieces. Think, with your brain, where this piece would land and what keys you should press. Do it only when you are ready. \\b\\nB2. Use both of the rotation keys. Don’t just use one and press it many times when you can press the other one just once. \\b\\nB3. Don’t worry too much about your speed when you start learning Finesse. Keep your move accurate, and then it is not hard to improve your speed once you have mastered it. \\n\\nC. Stacking\\b\\nC1. Finish 40L without topping out. \\b\\nC2. Finish 40L with no Hold without losing too much speed. \\b\\nC3. Finish 40L with all Techrashes without losing too much speed. \\b\\nC4. Finish 40L with all Techrashes and no Hold without losing too much speed. \\n\\nSet C is more flexible, and you can adjust the difficulties based on your own conditions (like what does “without losing too much speed” means to you). \\n\\nWhen you finish all the tasks in set C, keep practicing A1. This is the fundamental skill in any Tetris game, and you can master practically any mode when you can just scan through the Next sequence easily."
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
        "http://101.43.110.22:10026",
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
        "(テトリスブログ - PerfectClear)\\n\\n. A Japanese website with some setups. It doesn’t contain too many setups, but there are very detailed explanations.",
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
        "Techmino’s official Github repository. Stars are appreciated.",
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
        "The Mew forum owned by the Chinese Tetris Research Community and was founded in the second half of 2021. Mew is a Chinese social media, kind of like a combination of Discord and Reddit, with many channels in a big community. Users can chat in the channels and submit posts to the channel. Mew also has a function called “Library,” which systematically stores the documentation. The Tetris Mew forum is currently under construction, and not too many contents are available (2/Nov/2021).",
        "https://mew.fun/n/tetris",
    },
    {"Tetris OL Servers",
        "tetrisonline servers tos",
        "org",
        "Google “Tetris Online Poland” for the Poland server.\\nClick on the globe icon for information on the Tetris Online Study server in China (by Teatube, see the entry below).",
        "http://teatube.ltd/tos",
    },
    {"Support 1",
        "support wechat vx weixin alipay zfb zhifubao",
        "org",
        FNNS and "The contents in this entry were hidden due to platform restrictions. Feel free to discuss these contents on our Discord server." or "To donate to Techmino via WeChat Pay or Alipay, type “support” in console and scan the QR code.",
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
        "Browser | Singleplayer | Mobile Support\\nA browser-based Tetris game with many professional tunings and modes. [The visuals are simple with barely any animations. Only a few virtual key combinations are available for mobile devices.]\\nLink to Farter’s (See entry below) Dig Mod (which itself is a mod of another version). You can also check another mode on Tetris Wiki called “Tetr.js enhanced.”",
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
        "Windows/OS X | Singleplayer/Multiplayer\\nC2 for short. Designed based on classic Tetris, Cultris II supports customizable DAS and ARR. The battle mode is focused on time-based combos, which challenges players’ speed, n-wide setups, and downstacking skills.\\n[The Mac version was not being maintained for a long time. Any macOS build newer than macOS Catalina cannot run this game at all.]",
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
        "Windows | Singleplayer\\nA fan-made Tetris game. It is a modification of Nullpomino with elements from the Touhou Project added in. The marathon mode features the “Spell Cards” from Touhou Project, which can only be broken by reaching a score requirement in a limited time.\\n[Recommended for players with at least half-decent skills, otherwise you don’t even know how you died.]",
    },

    {"Tetris Blitz",
        "blitz ea mobile phone",
        "game",
        "iOS/Android | Singleplayer\\nA mobile Tetris game by Electronic Arts (EA). It has the gravity mechanism, and each game lasts for 2 minutes. Many minoes fall down into the field at the beginning of the game, and you can enter the “Frenzy” mode by continuously performing line clears. There are many different power-ups available. Also, this game has no top-out mechanism. When an incoming block overlaps with existing blocks in the field, the top few lines will be cleared automatically. \\n\\nThis game has no longer been available since April 2020.",
    },
    {"Tetris (EA)",
        "tetris ea galaxy universe cosmos mobile phone",
        "game",
        "iOS/Android | Singleplayer/Multiplayer?\\nAnother mobile Tetris game by EA. It has two control modes – Swipe and One-Touch. It also has a Galaxy Mode besides the Marathon Mode (with gravity mechanism), and the goal of this mode is to clear all Galaxy minoes before the sequence runs out.\\n\\nThis game has no longer been available since April 2020."
    },
    {"Tetris (N3TWORK)",
        "tetris n3twork mobile phone",
        "game",
        "iOS/Android | Singleplayer\\nThe mobile Tetris game from N3TWORK Inc. It has a 3-minute ultra mode, a marathon mode, and a 100-player Royale mode.\\n[The UI is great, but its controls are not so good.]",
    },
    {"Tetris Beat",
        "n3twork rhythm",
        "game",
        "iOS | Singleplayer\\nA mobile Tetris game from N3TWORK for Apple Arcade. It has a “Beat” mode besides the Marathon mode, but you only have to drop the blocks in rhythm with the BGM.\\n[The effects are very heavy, and the controls are not so good.]"
    },
    {"Tetris Journey",
        "tetrisjourney mobile phone huanyouji",
        "game",
        "iOS/Android | Singleplayer\\nAn official mobile Tetris game developed by Tencent (available exclusively in China). It has level modes, battle modes, and some single-player modes. You can customize the sizes and positions of the virtual keys, but you cannot adjust DAS or ARR.\\n The battle mode lasts for 2 minutes, and if both players do not top out, the one who sent more attacks wins."
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

    -- Terms
    {"Translator Note 2",
        "",
        "help",
        "Translator’s note on those per-minute and per-second values\\n\\nNot all of them are commonly used in the communities, and not all terms mean the same across all contexts. They mainly apply to Techmino."
    },
    {"LPM",
        "linesperminute speed",
        "term",
        "Lines per minute\\n\\tReflects the playing speed of a player.\\nDifferent games calculate LPM differently. For example, Tetris Online calculates its LPM using PPS (see below), where 1 PPS = 24 LPM. This ignores clearing garbage lines and makes it different from its literal meaning. In Techmino, this converted LPM value is marked as “L’PM.”",
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
        "Attack & Dig per minute\\n\\tUsed to compare skill differences between the two players within one match; slightly more accurate than APM.\\nThe “vs” in TETR.IO is actually Atk & Dig per 100s.",
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
        "The name of the game (and its trademark). Also the term for clearing four lines at one time in official games.\\nCoined from Tetra (Greek for “four” <τέτταρες>) and Tennis (favorite sport of the creator of Tetris). Also, the Tetris games developed by Nintendo and SEGA were licensed by TTC. These two companies do not have the copyright of Tetris.",-- Thanks to Alexey Pajitnov!
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
        "Mini T-Spin Double\\nFormerly known as T-Spin Mini Double (TSMD).\\nClear two lines with a Mini T-Spin.MTSD only exists in a limited number of games and may have very different triggers. ",
    },
    {"O-Spin",
        "ospin",
        "term",
        "Because the O block doesn’t change its shape after any rotations, there is no way to bring it out once it is stuck in a place. So, there was a meme about O-Spin in the Tetris community: Someone has made a fake video on how to perform an O-spin in Tetris 99 and Tetris Friend, and it went viral; XRS allows O blocks to “teleport” into a hole.\\n In TRS, you can rotate the O block in a specific way to teleport or transform O into another block to achieve an O-spin.",
    },
    {"Rotation Systems",
        "wallkick rotationsystem",
        "term",
        "Systems that determine how the pieces rotate.\\n\\nIn modern Tetris games, tetrominoes can rotate on a specific rotation center (but this may be absent in some games). If the minoes overlap with the walls or the field, the system will attempt to perform some offsets (a process known as “wall-kicking”). Wall kicks allow minoes to move into specific-shaped holes.",
    },
    {"Orientation",
        "direction 0r2l 02 20 rl lr",
        "term",
        "In SRS and SRS-like rotation systems, there is a system of standard notations describing the orientations of the minoes:\\n 0 for Original orientation; R for right, or 90° clockwise; L for left, or 90° counterclockwise; 2 for spin twice (180°). For example, 0→L means rotating counterclockwise from original orientation (0) to L; 0→R means rotating clockwise from original orientation (0) to R; 2→R means rotating counterclockwise from 2 (180°) to R.",
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
        "The stacking method where you leave a four-block-wide well in the middle.\\nThe infamous combo setup that not only makes many combos but also abuses the death conditions and won’t die even if you receive some garbage. Players often dislike this technique due to how unbalanced it is.",
    },
    {"Residual",
        "c4w s4w",
        "term",
        "Refers to how many blocks to leave in the well of a four-wide combo setup. The most common are 3-residual and 6-residual.\\n3-residual has fewer variations and is easier to learn, with a pretty good chance of success, and it’s pretty useful in combat.\\n6-residual has more variables and is harder, but can be more consistent if you do it well. It can also be used for special challenges like getting 100 combos in an infinite 4-wide challenge.\\nIn principle, use 6-Res first, then 5-Res and 3-Res, and then 4-Res. ",
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
        "Falling speed is often described as “G,” i.e., how many lines the blocks fall in one frame (usually assuming 60 fps).\\nG is a relatively large unit. The speed of Lv 1 in a regular Marathon (one second per line) is 1/60 G, and 1G is about Lv 13 speed. The highest speed of modern Tetris is 20G because the field height is 20 lines. The real meaning of 20G is “Infinite falling speed,” and even when the field height is more than 20 lines, 20G modes force all the blocks to fall to the bottom instantly. You can learn more about 20G at the “20G” entry\\nIn Techmino, falling speed is described as the frames it takes for a block to fall one unit; for example, a speed of 60 refers to one unit per second (as the game runs in 60 fps as default). ",
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
        "",-- TODO
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
        "Refers to a situation where the attacks from both players were sent to the other player’s board without canceling out. Another term called “pingthrough” refers to a situation where a passthrough occurs due to Internet delays. ",
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
        "An easter egg mode from the TGM series. During a “secret grade” gameplay, the player tries to make a “>” shape with one hole in each line using blocks. The ultimate goal is to finish the whole shape using 19 lines."..HDwiki,
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
        "A Tetris bot. Built by the Chinese Tetris player 奏之章 (Zòu Zhī Zhāng, see entry below) and has decent performance in many games",
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
        "β Cannon, Beta Cannon."..HDwiki,
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
        "A fancy, fast-paced opener with TSD–TST–TSD–All Clear, hardly wasting any T pieces."..HDwiki,
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
        "An All Clear opener with a high success rate (~84.6% when you have an I in the Hold queue and ~61.2% if that’s not the case). In Techmino’s PC Practice modes, the setup that leaves an irregular opening is this setup."..HDwiki,
        HDsearch.."Perfect_Clear_Opener",
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
        "(ガムシロ積み) A TD-Attack opener."..HDwiki,
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
        "You can find detailed guides on “Tetris Hall” about 1st–4th and 7th PC. After you finish the 7th PC, exactly 70 blocks are used so you can go back to the 1st PC.",
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
        "Go to console, type “rm conf/setting” and then press enter/return.\\nRestart Techmino for the setting to take effect.\\nPlay one game to revert this action.",
    },
    {"Reset statistics",
        "reset statistic data",
        "command",
        "Go to console, type “rm conf/data” and then press enter/return.\\nRestart Techmino for the setting to take effect.\\nPlay one game to revert this action.",
    },
    {"Reset unlock",
        "reset unlock",
        "command",
        "Go to console, type “rm conf/unlock” and then press enter/return.\\nRestart Techmino for the setting to take effect.\\nFresh a rank to revert this action.",
    },
    {"Reset records",
        "reset record",
        "command",
        "Go to console, type “rm -s record” and then press enter/return.\\nRestart Techmino for the setting to take effect.\\nFresh a record list to get one list back.",
    },
    {"Reset key",
        "reset virtualkey",
        "command",
        "Go to console, type “rm conf/[keyFile]” and then press enter/return.\\nKeyboard: key, Virtualkey: virtualkey, Virtualkey save: vkSave1(2)\\nRestart Techmino for the firsst two settings to take effect.\\nEnter setting and go back to get one file back.",
    },
    {"Delete replays",
        "delete recording",
        "command",
        "Go to console, type “rm -s replay“ and then press enter/return.\\nTake effect immediately.",
    },
    {"Delete cache",
        "delete cache",
        "command",
        "Go to console, type “rm -s cache” and then press enter/return.\\nTake effect immediately.",
    },

    -- English
    {"SFX",
        "soundeffects",
        "english",
        "Acronym for “Sound Effects.” Known in Japan as “SE.”",
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
`,bI=`local HDsearch="https://harddrop.com/wiki?search="
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
        "http://101.43.110.22:10026",
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
    {"Mew",
        "tieba forum reddit discord mew みゅー　ミュー",
        "org",
        "discordとredditを合わせたような中国のSNSでしたが2022年10月31日より閉鎖されました",
        "https://mew.fun/n/tetris",
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
        "クロスプラットフォーム|シングル/マルチプレイ\\n日本語だとテクミノやテックミノと呼ばれます\\nMrZを筆頭にLÖVEを使って開発された落ちものパズルゲームです\\n多くの一人用モード、多彩なカスタマイズ性を持ち、オンラインマルチプレイも徐々に開発されています",
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
        "PS/Oculus Quest/Xbox/NS/Windows | シングル/マルチプレイ\\n略称はテトエフェ(テック)\\n入力に反応するド派手なグラフィックとサウンドを備えた現在、主流の公式テトリスの1つ\\n「Connected」の文字がない基本版では1人用モードしかない\\nコネクテッドの方ではコネクテッドバトル、Zoneバトル、スコアアタック、クラッシクスコアアタックの計4つのモードで対戦が可能となっている(ただしフレンドマッチやローカルマッチではZoneなし等のルール設定が可能)",
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
    {"Side well(端開け、端空け)",
        "sidewell 端 開け 空け",
        "term",
        "端を任意の幅開けて積む積み方\\nつまり端開け1列はテトリス積みになります\\n端開け2～4列はren地形になります\\n\\n端開けは幅を広げる程、短時間で積み上げられますがその分相手からの攻撃が簡単に刺さります\\nそのため上級者が端ren等をする場合は相手に隙があるかを確認してから組み始めます",
    },
    {"Side 1-wide(端開け1列、端空け1列)",
        "s1w side1wide sidewelltetris 端 1 空け 開け テトリス",
        "term",
        "つまり端を開けてテトリス積みをすること\\n最も伝統的な積み方\\n最も簡単に積め、簡単に火力を送れる\\nただし攻撃の幅が狭い(テトリスかドネイトTspinぐらい)ので上に行くほどあまり好まれない",
    },
    {"Side 2-wide(端開け2列、端空け2列)",
        "s2w side2wide 端 2 空け 開け ren combo レン れん コンボ 初心者 下級者",
        "term",
        "端に2列幅を持たせて積む積み方\\n積みやすくrenによって簡単に火力が出せるので初心者におすすめ\\n上に行くほどren数を稼ぎづらいことからあまり使われない",
    },
    {"Side 3-wide(端開け3列、端空け3列)",
        "s3w side3wide 端 3 空け 開け ren combo レン れん コンボ",
        "term",
        "端に3列幅を持たせて積む積み方\\n2列開けよりもren数を稼ぎやすいが、2列開けよりもrenが途切れやすい",
    },
    {"Side 4-wide(端開け4列、端空け4列)",
        "s4w side4wide 端 4 空け 開け ren combo レン れん コンボ",
        "term",
        "端に4列幅を持たせて積む積み方\\nren地形を作る時によく使われる\\n積む幅が狭いので速く積み上げることができ、上手くいった場合にはren数を大きく稼ぐことができる\\nただしrenを繋げるのは少し難しく、また地形が高くなるのが早いので油断していると簡単に刺さる",
    },
    {"Center 1-wide(中開け1列、中空け1列)",
        "c1w center1wide centerwelltetris 中 1 空け 開け テトリス",
        "term",
        "つまり真ん中を開けてテトリス積みをすること\\n攻撃の幅が広く、また簡単に攻撃を組み立てることができるため対戦で好まれる",
    },
    {"Center 2-wide(中開け2列、中空け2列)",
        "c2w center2wide 中 2 空け 開け ren combo レン れん コンボ",
        "term",
        "真ん中に2列の幅を持たせて積む積み方\\nTミノが遠い時にTspinを作るとなりやすいが意図的に使われることは少ない",
    },
    {"Center 3-wide(中開け3列、中空け3列)",
        "c3w center3wide 中 3 空け 開け ren combo レン れん コンボ",
        "term",
        "真ん中に3列の幅を持たせて積む積み方\\nSTSDやSTMB-ケイブ、TSTタワー等テンプレを組みやすい幅ではあるが精々10段ぐらいしか積まれない",
    },
    {"Center 4-wide(中開け4列、中空け4列)",
        "c4w center4wide 中 4 空け 開け ren combo レン れん コンボ",
        "term",
        "真ん中に4列の幅を持たせて積む積み方\\nren数を稼ぎやすく、相手から20段以上の攻撃を受けないと出現ミノの位置にブロックが重ならないのでrenを狙う場合によく使われる\\nrenの調整が強いゲームだと嫌われやすい",
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
    {"連パフェ(1/2)",
        "pcloop パフェ ループ 連",
        "pattern",
        "テトリス堂にて1～5回目と7回目のパフェについて詳しく知れます\\n7回目のパフェがキレイに終わると丁度70ミノ、つまり10巡終わったことになりゲーム開始時と同じ状態になります",
        "https://shiwehi.com/tetris/template/consecutivepc.php",
    },
    {"連パフェ(2/2)",
        "pcloop パフェ ループ 連",
        "pattern",
        "four.lolに1～7回目のパフェについて詳しく知れます",
        "https://four.lol/perfect-clears/5th",
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
`,vI=`local HDsearch="https://harddrop.com/wiki?search="
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
        "Techmino的官网！\\n可以在上面下载游戏本体，或者修改头像以及个人信息。\\n\\n游戏作者的一些话：强烈不建议在任何公开场合提及甚至宣传Techmino，更不要随便就对外公布我们的官网链接！请务必只在私下里向有基础或真的很有兴趣入坑认真玩的玩家推荐，不然很容易拉低社群质量破坏交流氛围，非常难处理，甚至有可能影响游戏的未来发展。为了保证游戏未来会变得越来越好玩，千万慎重考虑您对游戏的推广方式！感谢您对Techmino的支持！！感谢配合！！！",
        "http://101.43.110.22:10026",
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
    {"Mew据点",
        "mew tieba forum",
        "org",
        "研究群下属的Mew据点（类似贴吧或者Discord的服务器），2021年下半年建立，可以在同一个大社区的各个频道实时聊天，也可以发帖以主题交流，同时还有一个叫图书馆的功能方便各种方块资料整理（还在建设中，目前没多少内容，2021/11/02）",
        "https://mew.fun/n/tetris",
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
        "iOS/Android | 单机/多人\\n简称环游记，国内第一款正版授权手游方块。有闯关模式、对战模式和几个单机模式。闯关模式有各种各样有趣规则大多数有重力连锁，对战规则同现代方块，可以自定义虚拟按键的大小和位置，但是不能自定义DAS/ARR。",
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
    {"连续PC (1/2)",
        "pcloop",
        "pattern",
        "テトリス堂的从开局起第1、2、3、4、7个4行pc的开局整理。第七个pc做完总共用掉70块，相当于回到游戏开始阶段可以做1st pc\\n\\n第5和第6详见下一个词条",
        "https://shiwehi.com/tetris/template/consecutivepc.php"
    },
    {"连续PC (2/2)",
        "pcloop",
        "pattern",
        "four.lol的从开局起第5、6个4行pc的开局整理。\\n（链接点开是5th，可以到6th，其他的推荐看上一个词条）",
        "https://four.lol/perfect-clears/5th"
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
`,yI="Techmino Online Dictionary",xI="Search",CI="Tags",SI={title:yI,search:xI,tags:CI},wI="テクミノ オンライン辞書",TI="サーチ",kI="ラベル",PI={title:wI,search:TI,tags:kI},AI="Techmino 在线词典",$I="搜点什么",DI="标签",RI={title:AI,search:$I,tags:DI},HI={en:gI,ja:bI,zh:vI},II={en:SI,ja:PI,zh:RI};var ta={},EI={get exports(){return ta},set exports(e){ta=e}};(function(e,n){(function(t,o,r){var i=n&&!n.nodeType&&n,a=e&&!e.nodeType&&e,s=i&&a&&typeof ss=="object"&&ss,l=a&&a.exports===i&&i;s&&(s.global===s||s.window===s||s.self===s)&&(t=s),r(i&&a?l?a.exports:i:t[o]={})})(ss,"luaparse",function(t){t.version="0.3.1";var o,r,i,a,s,l=t.defaultOptions={wait:!1,comments:!0,scope:!1,locations:!1,ranges:!1,onCreateNode:null,onCreateScope:null,onDestroyScope:null,onLocalDeclaration:null,luaVersion:"5.1",encodingMode:"none"};function c(u,x){return x=x||0,u<128?String.fromCharCode(u):u<2048?String.fromCharCode(x|192|u>>6,x|128|u&63):u<65536?String.fromCharCode(x|224|u>>12,x|128|u>>6&63,x|128|u&63):u<1114112?String.fromCharCode(x|240|u>>18,x|128|u>>12&63,x|128|u>>6&63,x|128|u&63):null}function d(u,x){for(var H=u.toString(16);H.length<x;)H="0"+H;return H}function f(u){return function(x){var H=u.exec(x);if(!H)return x;B(null,M.invalidCodeUnit,d(H[0].charCodeAt(0),4).toUpperCase())}}var p={"pseudo-latin1":{fixup:f(/[^\x00-\xff]/),encodeByte:function(u){return u===null?"":String.fromCharCode(u)},encodeUTF8:function(u){return c(u)}},"x-user-defined":{fixup:f(/[^\x00-\x7f\uf780-\uf7ff]/),encodeByte:function(u){return u===null?"":u>=128?String.fromCharCode(u|63232):String.fromCharCode(u)},encodeUTF8:function(u){return c(u,63232)}},none:{discardStrings:!0,fixup:function(u){return u},encodeByte:function(u){return""},encodeUTF8:function(u){return""}}},b=1,h=2,y=4,v=8,m=16,w=32,_=64,k=128,R=256;t.tokenTypes={EOF:b,StringLiteral:h,Keyword:y,Identifier:v,NumericLiteral:m,Punctuator:w,BooleanLiteral:_,NilLiteral:k,VarargLiteral:R};var M=t.errors={unexpected:"unexpected %1 '%2' near '%3'",unexpectedEOF:"unexpected symbol near '<eof>'",expected:"'%1' expected near '%2'",expectedToken:"%1 expected near '%2'",unfinishedString:"unfinished string near '%1'",malformedNumber:"malformed number near '%1'",decimalEscapeTooLarge:"decimal escape too large near '%1'",invalidEscape:"invalid escape sequence near '%1'",hexadecimalDigitExpected:"hexadecimal digit expected near '%1'",braceExpected:"missing '%1' near '%2'",tooLargeCodepoint:"UTF-8 value too large near '%1'",unfinishedLongString:"unfinished long string (starting at line %1) near '%2'",unfinishedLongComment:"unfinished long comment (starting at line %1) near '%2'",ambiguousSyntax:"ambiguous syntax (function call x new statement) near '%1'",noLoopToBreak:"no loop to break near '%1'",labelAlreadyDefined:"label '%1' already defined on line %2",labelNotVisible:"no visible label '%1' for <goto>",gotoJumpInLocalScope:"<goto %1> jumps into the scope of local '%2'",cannotUseVararg:"cannot use '...' outside a vararg function near '%1'",invalidCodeUnit:"code unit U+%1 is not allowed in the current encoding mode"},g=t.ast={labelStatement:function(u){return{type:"LabelStatement",label:u}},breakStatement:function(){return{type:"BreakStatement"}},gotoStatement:function(u){return{type:"GotoStatement",label:u}},returnStatement:function(u){return{type:"ReturnStatement",arguments:u}},ifStatement:function(u){return{type:"IfStatement",clauses:u}},ifClause:function(u,x){return{type:"IfClause",condition:u,body:x}},elseifClause:function(u,x){return{type:"ElseifClause",condition:u,body:x}},elseClause:function(u){return{type:"ElseClause",body:u}},whileStatement:function(u,x){return{type:"WhileStatement",condition:u,body:x}},doStatement:function(u){return{type:"DoStatement",body:u}},repeatStatement:function(u,x){return{type:"RepeatStatement",condition:u,body:x}},localStatement:function(u,x){return{type:"LocalStatement",variables:u,init:x}},assignmentStatement:function(u,x){return{type:"AssignmentStatement",variables:u,init:x}},callStatement:function(u){return{type:"CallStatement",expression:u}},functionStatement:function(u,x,H,O){return{type:"FunctionDeclaration",identifier:u,isLocal:H,parameters:x,body:O}},forNumericStatement:function(u,x,H,O,le){return{type:"ForNumericStatement",variable:u,start:x,end:H,step:O,body:le}},forGenericStatement:function(u,x,H){return{type:"ForGenericStatement",variables:u,iterators:x,body:H}},chunk:function(u){return{type:"Chunk",body:u}},identifier:function(u){return{type:"Identifier",name:u}},literal:function(u,x,H){return u=u===h?"StringLiteral":u===m?"NumericLiteral":u===_?"BooleanLiteral":u===k?"NilLiteral":"VarargLiteral",{type:u,value:x,raw:H}},tableKey:function(u,x){return{type:"TableKey",key:u,value:x}},tableKeyString:function(u,x){return{type:"TableKeyString",key:u,value:x}},tableValue:function(u){return{type:"TableValue",value:u}},tableConstructorExpression:function(u){return{type:"TableConstructorExpression",fields:u}},binaryExpression:function(u,x,H){var O=u==="and"||u==="or"?"LogicalExpression":"BinaryExpression";return{type:O,operator:u,left:x,right:H}},unaryExpression:function(u,x){return{type:"UnaryExpression",operator:u,argument:x}},memberExpression:function(u,x,H){return{type:"MemberExpression",indexer:x,identifier:H,base:u}},indexExpression:function(u,x){return{type:"IndexExpression",base:u,index:x}},callExpression:function(u,x){return{type:"CallExpression",base:u,arguments:x}},tableCallExpression:function(u,x){return{type:"TableCallExpression",base:u,arguments:x}},stringCallExpression:function(u,x){return{type:"StringCallExpression",base:u,argument:x}},comment:function(u,x){return{type:"Comment",value:u,raw:x}}};function C(u){if(sn){var x=dn.pop();x.complete(),x.bless(u)}return r.onCreateNode&&r.onCreateNode(u),u}var D=Array.prototype.slice,I=function(u,x){for(var H=0,O=u.length;H<O;++H)if(u[H]===x)return H;return-1};Array.prototype.indexOf&&(I=function(u,x){return u.indexOf(x)});function Z(u,x,H){for(var O=0,le=u.length;O<le;++O)if(u[O][x]===H)return O;return-1}function E(u){var x=D.call(arguments,1);return u=u.replace(/%(\d)/g,function(H,O){return""+x[O-1]||""}),u}var Y=function(u){for(var x=D.call(arguments,1),H,O,le=0,Me=x.length;le<Me;++le){H=x[le];for(O in H)Object.prototype.hasOwnProperty.call(H,O)&&(u[O]=H[O])}return u};Object.assign&&(Y=Object.assign),t.SyntaxError=SyntaxError;function L(u){return Object.create?Object.create(u,{line:{writable:!0,value:u.line},index:{writable:!0,value:u.index},column:{writable:!0,value:u.column}}):u}function B(u){var x=E.apply(null,D.call(arguments,1)),H,O;throw u===null||typeof u.line>"u"?(O=T-Ce+1,H=L(new SyntaxError(E("[%1:%2] %3",Be,O,x))),H.index=T,H.line=Be,H.column=O):(O=u.range[0]-u.lineStart,H=L(new SyntaxError(E("[%1:%2] %3",u.line,O,x))),H.line=u.line,H.index=u.range[0],H.column=O),H}function ie(u){var x=o.slice(u.range[0],u.range[1]);return x||u.value}function N(u,x){B(x,M.expectedToken,u,ie(x))}function re(u){var x=ie(_e);if(typeof u.type<"u"){var H;switch(u.type){case h:H="string";break;case y:H="keyword";break;case v:H="identifier";break;case m:H="number";break;case w:H="symbol";break;case _:H="boolean";break;case k:return B(u,M.unexpected,"symbol","nil",x);case b:return B(u,M.unexpectedEOF)}return B(u,M.unexpected,H,ie(u),x)}return B(u,M.unexpected,"symbol",u,x)}var T,q,$e,_e,Nn,Le,Be,Ce;t.lex=De;function De(){for(Ae();o.charCodeAt(T)===45&&o.charCodeAt(T+1)===45;)ge(),Ae();if(T>=i)return{type:b,value:"<eof>",line:Be,lineStart:Ce,range:[T,T]};var u=o.charCodeAt(T),x=o.charCodeAt(T+1);if(Le=T,Vn(u))return Gn();switch(u){case 39:case 34:return A();case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return j();case 46:return Fe(x)?j():x===46?o.charCodeAt(T+2)===46?S():qe(".."):qe(".");case 61:return qe(x===61?"==":"=");case 62:return a.bitwiseOperators&&x===62?qe(">>"):qe(x===61?">=":">");case 60:return a.bitwiseOperators&&x===60?qe("<<"):qe(x===61?"<=":"<");case 126:if(x===61)return qe("~=");if(!a.bitwiseOperators)break;return qe("~");case 58:return a.labels&&x===58?qe("::"):qe(":");case 91:return x===91||x===61?z():qe("[");case 47:return a.integerDivision&&x===47?qe("//"):qe("/");case 38:case 124:if(!a.bitwiseOperators)break;case 42:case 94:case 37:case 44:case 123:case 125:case 93:case 40:case 41:case 59:case 35:case 45:case 43:return qe(o.charAt(T))}return re(o.charAt(T))}function jn(){var u=o.charCodeAt(T),x=o.charCodeAt(T+1);return He(u)?(u===10&&x===13&&++T,u===13&&x===10&&++T,++Be,Ce=++T,!0):!1}function Ae(){for(;T<i;){var u=o.charCodeAt(T);if(Oe(u))++T;else if(!jn())break}}function Gn(){for(var u,x;Ot(o.charCodeAt(++T)););return u=s.fixup(o.slice(Le,T)),it(u)?x=y:u==="true"||u==="false"?(x=_,u=u==="true"):u==="nil"?(x=k,u=null):x=v,{type:x,value:u,line:Be,lineStart:Ce,range:[Le,T]}}function qe(u){return T+=u.length,{type:w,value:u,line:Be,lineStart:Ce,range:[Le,T]}}function S(){return T+=3,{type:R,value:"...",line:Be,lineStart:Ce,range:[Le,T]}}function A(){for(var u=o.charCodeAt(T++),x=Be,H=Ce,O=T,le=s.discardStrings?null:"",Me;Me=o.charCodeAt(T++),u!==Me;)if((T>i||He(Me))&&(le+=o.slice(O,T-1),B(null,M.unfinishedString,o.slice(Le,T-1))),Me===92){if(!s.discardStrings){var Ue=o.slice(O,T-1);le+=s.fixup(Ue)}var fn=F();s.discardStrings||(le+=fn),O=T}return s.discardStrings||(le+=s.encodeByte(null),le+=s.fixup(o.slice(O,T-1))),{type:h,value:le,line:x,lineStart:H,lastLine:Be,lastLineStart:Ce,range:[Le,T]}}function z(){var u=Be,x=Ce,H=he(!1);return H===!1&&B(q,M.expected,"[",ie(q)),{type:h,value:s.discardStrings?null:s.fixup(H),line:u,lineStart:x,lastLine:Be,lastLineStart:Ce,range:[Le,T]}}function j(){var u=o.charAt(T),x=o.charAt(T+1),H=u==="0"&&"xX".indexOf(x||null)>=0?ae():Q(),O=V(),le=ee();return le&&(O||H.hasFractionPart)&&B(null,M.malformedNumber,o.slice(Le,T)),{type:m,value:H.value,line:Be,lineStart:Ce,range:[Le,T]}}function V(){if(a.imaginaryNumbers)return"iI".indexOf(o.charAt(T)||null)>=0?(++T,!0):!1}function ee(){if(a.integerSuffixes){if("uU".indexOf(o.charAt(T)||null)>=0)if(++T,"lL".indexOf(o.charAt(T)||null)>=0){if(++T,"lL".indexOf(o.charAt(T)||null)>=0)return++T,"ULL";B(null,M.malformedNumber,o.slice(Le,T))}else B(null,M.malformedNumber,o.slice(Le,T));else if("lL".indexOf(o.charAt(T)||null)>=0){if(++T,"lL".indexOf(o.charAt(T)||null)>=0)return++T,"LL";B(null,M.malformedNumber,o.slice(Le,T))}}}function ae(){var u=0,x=1,H=1,O,le,Me,Ue;for(Ue=T+=2,en(o.charCodeAt(T))||B(null,M.malformedNumber,o.slice(Le,T));en(o.charCodeAt(T));)++T;O=parseInt(o.slice(Ue,T),16);var fn=!1;if(o.charAt(T)==="."){for(fn=!0,le=++T;en(o.charCodeAt(T));)++T;u=o.slice(le,T),u=le===T?0:parseInt(u,16)/Math.pow(16,T-le)}var Fo=!1;if("pP".indexOf(o.charAt(T)||null)>=0){for(Fo=!0,++T,"+-".indexOf(o.charAt(T)||null)>=0&&(H=o.charAt(T++)==="+"?1:-1),Me=T,Fe(o.charCodeAt(T))||B(null,M.malformedNumber,o.slice(Le,T));Fe(o.charCodeAt(T));)++T;x=o.slice(Me,T),x=Math.pow(2,x*H)}return{value:(O+u)*x,hasFractionPart:fn||Fo}}function Q(){for(;Fe(o.charCodeAt(T));)++T;var u=!1;if(o.charAt(T)===".")for(u=!0,++T;Fe(o.charCodeAt(T));)++T;var x=!1;if("eE".indexOf(o.charAt(T)||null)>=0)for(x=!0,++T,"+-".indexOf(o.charAt(T)||null)>=0&&++T,Fe(o.charCodeAt(T))||B(null,M.malformedNumber,o.slice(Le,T));Fe(o.charCodeAt(T));)++T;return{value:parseFloat(o.slice(Le,T)),hasFractionPart:u||x}}function U(){var u=T++;for(o.charAt(T++)!=="{"&&B(null,M.braceExpected,"{","\\"+o.slice(u,T)),en(o.charCodeAt(T))||B(null,M.hexadecimalDigitExpected,"\\"+o.slice(u,T));o.charCodeAt(T)===48;)++T;for(var x=T;en(o.charCodeAt(T));)++T,T-x>6&&B(null,M.tooLargeCodepoint,"\\"+o.slice(u,T));var H=o.charAt(T++);H!=="}"&&(H==='"'||H==="'"?B(null,M.braceExpected,"}","\\"+o.slice(u,T--)):B(null,M.hexadecimalDigitExpected,"\\"+o.slice(u,T)));var O=parseInt(o.slice(x,T-1)||"0",16),le="\\"+o.slice(u,T);return O>1114111&&B(null,M.tooLargeCodepoint,le),s.encodeUTF8(O,le)}function F(){var u=T;switch(o.charAt(T)){case"a":return++T,"\x07";case"n":return++T,`
`;case"r":return++T,"\r";case"t":return++T,"	";case"v":return++T,"\v";case"b":return++T,"\b";case"f":return++T,"\f";case"\r":case`
`:return jn(),`
`;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;Fe(o.charCodeAt(T))&&T-u<3;)++T;var x=o.slice(u,T),H=parseInt(x,10);return H>255&&B(null,M.decimalEscapeTooLarge,"\\"+H),s.encodeByte(H,"\\"+x);case"z":if(a.skipWhitespaceEscape)return++T,Ae(),"";break;case"x":if(a.hexEscapes){if(en(o.charCodeAt(T+1))&&en(o.charCodeAt(T+2)))return T+=3,s.encodeByte(parseInt(o.slice(u+1,T),16),"\\"+o.slice(u,T));B(null,M.hexadecimalDigitExpected,"\\"+o.slice(u,T+2))}break;case"u":if(a.unicodeEscapes)return U();break;case"\\":case'"':case"'":return o.charAt(T++)}return a.strictEscapes&&B(null,M.invalidEscape,"\\"+o.slice(u,T+1)),o.charAt(T++)}function ge(){Le=T,T+=2;var u=o.charAt(T),x="",H=!1,O=T,le=Ce,Me=Be;if(u==="["&&(x=he(!0),x===!1?x=u:H=!0),!H){for(;T<i&&!He(o.charCodeAt(T));)++T;r.comments&&(x=o.slice(O,T))}if(r.comments){var Ue=g.comment(x,o.slice(Le,T));r.locations&&(Ue.loc={start:{line:Me,column:Le-le},end:{line:Be,column:T-Ce}}),r.ranges&&(Ue.range=[Le,T]),r.onCreateNode&&r.onCreateNode(Ue),Nn.push(Ue)}}function he(u){var x=0,H="",O=!1,le,Me,Ue=Be;for(++T;o.charAt(T+x)==="=";)++x;if(o.charAt(T+x)!=="[")return!1;for(T+=x+1,He(o.charCodeAt(T))&&jn(),Me=T;T<i;){for(;He(o.charCodeAt(T));)jn();if(le=o.charAt(T++),le==="]"){O=!0;for(var fn=0;fn<x;++fn)o.charAt(T+fn)!=="="&&(O=!1);o.charAt(T+x)!=="]"&&(O=!1)}if(O)return H+=o.slice(Me,T-1),T+=x+1,H}B(null,u?M.unfinishedLongComment:M.unfinishedLongString,Ue,"<eof>")}function X(){$e=q,q=_e,_e=De()}function de(u){return u===q.value?(X(),!0):!1}function me(u){u===q.value?X():B(q,M.expected,u,ie(q))}function Oe(u){return u===9||u===32||u===11||u===12}function He(u){return u===10||u===13}function Fe(u){return u>=48&&u<=57}function en(u){return u>=48&&u<=57||u>=97&&u<=102||u>=65&&u<=70}function Vn(u){return!!(u>=65&&u<=90||u>=97&&u<=122||u===95||a.extendedIdentifiers&&u>=128)}function Ot(u){return!!(u>=65&&u<=90||u>=97&&u<=122||u===95||u>=48&&u<=57||a.extendedIdentifiers&&u>=128)}function it(u){switch(u.length){case 2:return u==="do"||u==="if"||u==="in"||u==="or";case 3:return u==="and"||u==="end"||u==="for"||u==="not";case 4:return u==="else"||u==="then"?!0:a.labels&&!a.contextualGoto?u==="goto":!1;case 5:return u==="break"||u==="local"||u==="until"||u==="while";case 6:return u==="elseif"||u==="repeat"||u==="return";case 8:return u==="function"}return!1}function Xn(u){return w===u.type?"#-~".indexOf(u.value)>=0:y===u.type?u.value==="not":!1}function gn(u){if(b===u.type)return!0;if(y!==u.type)return!1;switch(u.value){case"else":case"elseif":case"end":case"until":return!0;default:return!1}}var K,fe,we;function Ie(){var u=K[fe++].slice();K.push(u),r.onCreateScope&&r.onCreateScope()}function Ve(){K.pop(),--fe,r.onDestroyScope&&r.onDestroyScope()}function bn(u){r.onLocalDeclaration&&r.onLocalDeclaration(u),I(K[fe],u)===-1&&K[fe].push(u)}function yn(u){bn(u.name),Ze(u,!0)}function Ze(u,x){!x&&Z(we,"name",u.name)===-1&&we.push(u),u.isLocal=x}function Dn(u){return I(K[fe],u)!==-1}var dn=[],sn;function Kn(){return new Lo(q)}function Lo(u){r.locations&&(this.loc={start:{line:u.line,column:u.range[0]-u.lineStart},end:{line:0,column:0}}),r.ranges&&(this.range=[u.range[0],0])}Lo.prototype.complete=function(){r.locations&&(this.loc.end.line=$e.lastLine||$e.line,this.loc.end.column=$e.range[1]-($e.lastLineStart||$e.lineStart)),r.ranges&&(this.range[1]=$e.range[1])},Lo.prototype.bless=function(u){if(this.loc){var x=this.loc;u.loc={start:{line:x.start.line,column:x.start.column},end:{line:x.end.line,column:x.end.column}}}this.range&&(u.range=[this.range[0],this.range[1]])};function Ft(){sn&&dn.push(Kn())}function kn(u){sn&&dn.push(u)}function Rn(){this.scopes=[],this.pendingGotos=[]}Rn.prototype.isInLoop=function(){for(var u=this.scopes.length;u-- >0;)if(this.scopes[u].isLoop)return!0;return!1},Rn.prototype.pushScope=function(u){var x={labels:{},locals:[],deferredGotos:[],isLoop:!!u};this.scopes.push(x)},Rn.prototype.popScope=function(){for(var u=0;u<this.pendingGotos.length;++u){var x=this.pendingGotos[u];x.maxDepth>=this.scopes.length&&--x.maxDepth<=0&&B(x.token,M.labelNotVisible,x.target)}this.scopes.pop()},Rn.prototype.addGoto=function(u,x){for(var H=[],O=0;O<this.scopes.length;++O){var le=this.scopes[O];if(H.push(le.locals.length),Object.prototype.hasOwnProperty.call(le.labels,u))return}this.pendingGotos.push({maxDepth:this.scopes.length,target:u,token:x,localCounts:H})},Rn.prototype.addLabel=function(u,x){var H=this.currentScope();if(Object.prototype.hasOwnProperty.call(H.labels,u))B(x,M.labelAlreadyDefined,u,H.labels[u].line);else{for(var O=[],le=0;le<this.pendingGotos.length;++le){var Me=this.pendingGotos[le];if(Me.maxDepth>=this.scopes.length&&Me.target===u){Me.localCounts[this.scopes.length-1]<H.locals.length&&H.deferredGotos.push(Me);continue}O.push(Me)}this.pendingGotos=O}H.labels[u]={localCount:H.locals.length,line:x.line}},Rn.prototype.addLocal=function(u,x){this.currentScope().locals.push({name:u,token:x})},Rn.prototype.currentScope=function(){return this.scopes[this.scopes.length-1]},Rn.prototype.raiseDeferredErrors=function(){for(var u=this.currentScope(),x=u.deferredGotos,H=0;H<x.length;++H){var O=x[H];B(O.token,M.gotoJumpInLocalScope,O.target,u.locals[O.localCounts[this.scopes.length-1]].name)}};function $(){this.level=0,this.loopLevels=[]}$.prototype.isInLoop=function(){return!!this.loopLevels.length},$.prototype.pushScope=function(u){++this.level,u&&this.loopLevels.push(this.level)},$.prototype.popScope=function(){var u=this.loopLevels,x=u.length;x&&u[x-1]===this.level&&u.pop(),--this.level},$.prototype.addGoto=$.prototype.addLabel=function(){throw new Error("This should never happen")},$.prototype.addLocal=$.prototype.raiseDeferredErrors=function(){};function G(){return a.labels?new Rn:new $}function Se(){X(),Ft(),r.scope&&Ie();var u=G();u.allowVararg=!0,u.pushScope();var x=ze(u);return u.popScope(),r.scope&&Ve(),b!==q.type&&re(q),sn&&!x.length&&($e=q),C(g.chunk(x))}function ze(u){for(var x=[],H;!gn(q);){if(q.value==="return"||!a.relaxedBreak&&q.value==="break"){x.push(an(u));break}H=an(u),de(";"),H&&x.push(H)}return x}function an(u){if(Ft(),w===q.type&&de("::"))return Xe(u);if(a.emptyStatement&&de(";")){sn&&dn.pop();return}if(u.raiseDeferredErrors(),y===q.type)switch(q.value){case"local":return X(),Ra(u);case"if":return X(),$a(u);case"return":return X(),pr(u);case"function":X();var x=Ia();return mr(x);case"while":return X(),lo(u);case"for":return X(),Da(u);case"repeat":return X(),co(u);case"break":return X(),u.isInLoop()||B(q,M.noLoopToBreak,q.value),Tt();case"do":return X(),kt(u);case"goto":return X(),bt(u)}return a.contextualGoto&&q.type===v&&q.value==="goto"&&_e.type===v&&_e.value!=="goto"?(X(),bt(u)):(sn&&dn.pop(),Ha(u))}function Xe(u){var x=q,H=Pn();return r.scope&&(bn("::"+x.value+"::"),Ze(H,!0)),me("::"),u.addLabel(x.value,x),C(g.labelStatement(H))}function Tt(){return C(g.breakStatement())}function bt(u){var x=q.value,H=$e,O=Pn();return u.addGoto(x,H),C(g.gotoStatement(O))}function kt(u){r.scope&&Ie(),u.pushScope();var x=ze(u);return u.popScope(),r.scope&&Ve(),me("end"),C(g.doStatement(x))}function lo(u){var x=un(u);me("do"),r.scope&&Ie(),u.pushScope(!0);var H=ze(u);return u.popScope(),r.scope&&Ve(),me("end"),C(g.whileStatement(x,H))}function co(u){r.scope&&Ie(),u.pushScope(!0);var x=ze(u);me("until"),u.raiseDeferredErrors();var H=un(u);return u.popScope(),r.scope&&Ve(),C(g.repeatStatement(H,x))}function pr(u){var x=[];if(q.value!=="end"){var H=Oo(u);for(H!=null&&x.push(H);de(",");)H=un(u),x.push(H);de(";")}return C(g.returnStatement(x))}function $a(u){var x=[],H,O,le;for(sn&&(le=dn[dn.length-1],dn.push(le)),H=un(u),me("then"),r.scope&&Ie(),u.pushScope(),O=ze(u),u.popScope(),r.scope&&Ve(),x.push(C(g.ifClause(H,O))),sn&&(le=Kn());de("elseif");)kn(le),H=un(u),me("then"),r.scope&&Ie(),u.pushScope(),O=ze(u),u.popScope(),r.scope&&Ve(),x.push(C(g.elseifClause(H,O))),sn&&(le=Kn());return de("else")&&(sn&&(le=new Lo($e),dn.push(le)),r.scope&&Ie(),u.pushScope(),O=ze(u),u.popScope(),r.scope&&Ve(),x.push(C(g.elseClause(O)))),me("end"),C(g.ifStatement(x))}function Da(u){var x=Pn(),H;if(r.scope&&(Ie(),yn(x)),de("=")){var O=un(u);me(",");var le=un(u),Me=de(",")?un(u):null;return me("do"),u.pushScope(!0),H=ze(u),u.popScope(),me("end"),r.scope&&Ve(),C(g.forNumericStatement(x,O,le,Me,H))}else{for(var Ue=[x];de(",");)x=Pn(),r.scope&&yn(x),Ue.push(x);me("in");var fn=[];do{var Fo=un(u);fn.push(Fo)}while(de(","));return me("do"),u.pushScope(!0),H=ze(u),u.popScope(),me("end"),r.scope&&Ve(),C(g.forGenericStatement(Ue,fn,H))}}function Ra(u){var x,H=$e;if(v===q.type){var O=[],le=[];do x=Pn(),O.push(x),u.addLocal(x.name,H);while(de(","));if(de("="))do{var Me=un(u);le.push(Me)}while(de(","));if(r.scope)for(var Ue=0,fn=O.length;Ue<fn;++Ue)yn(O[Ue]);return C(g.localStatement(O,le))}if(de("function"))return x=Pn(),u.addLocal(x.name,H),r.scope&&(yn(x),Ie()),mr(x,!0);N("<name>",q)}function Ha(u){var x,H,O,le,Me,Ue=[];sn&&(H=Kn());do{if(sn&&(x=Kn()),v===q.type)Me=q.value,le=Pn(),r.scope&&Ze(le,Dn(Me)),O=!0;else if(q.value==="(")X(),le=un(u),me(")"),O=!1;else return re(q);e:for(;;){switch(h===q.type?'"':q.value){case".":case"[":O=!0;break;case":":case"(":case"{":case'"':O=null;break;default:break e}le=ui(le,x,u)}if(Ue.push(le),q.value!==",")break;if(!O)return re(q);X()}while(!0);if(Ue.length===1&&O===null)return kn(x),C(g.callStatement(Ue[0]));if(!O)return re(q);me("=");var fn=[];do fn.push(un(u));while(de(","));return kn(H),C(g.assignmentStatement(Ue,fn))}function Pn(){Ft();var u=q.value;return v!==q.type&&N("<name>",q),X(),C(g.identifier(u))}function mr(u,x){var H=G();H.pushScope();var O=[];if(me("("),!de(")"))for(;;){if(v===q.type){var le=Pn();if(r.scope&&yn(le),O.push(le),de(","))continue}else R===q.type?(H.allowVararg=!0,O.push(vr(H))):N("<name> or '...'",q);me(")");break}var Me=ze(H);return H.popScope(),me("end"),r.scope&&Ve(),x=x||!1,C(g.functionStatement(u,O,x,Me))}function Ia(){var u,x,H;for(sn&&(H=Kn()),u=Pn(),r.scope&&(Ze(u,Dn(u.name)),Ie());de(".");)kn(H),x=Pn(),u=C(g.memberExpression(u,".",x));return de(":")&&(kn(H),x=Pn(),u=C(g.memberExpression(u,":",x)),r.scope&&bn("self")),u}function di(u){for(var x=[],H,O;;){if(Ft(),w===q.type&&de("["))H=un(u),me("]"),me("="),O=un(u),x.push(C(g.tableKey(H,O)));else if(v===q.type)_e.value==="="?(H=Pn(),X(),O=un(u),x.push(C(g.tableKeyString(H,O)))):(O=un(u),x.push(C(g.tableValue(O))));else{if((O=Oo(u))==null){dn.pop();break}x.push(C(g.tableValue(O)))}if(",;".indexOf(q.value)>=0){X();continue}break}return me("}"),C(g.tableConstructorExpression(x))}function Oo(u){var x=gr(0,u);return x}function un(u){var x=Oo(u);if(x==null)N("<expression>",q);else return x}function Ea(u){var x=u.charCodeAt(0),H=u.length;if(H===1)switch(x){case 94:return 12;case 42:case 47:case 37:return 10;case 43:case 45:return 9;case 38:return 6;case 126:return 5;case 124:return 4;case 60:case 62:return 3}else if(H===2)switch(x){case 47:return 10;case 46:return 8;case 60:case 62:return u==="<<"||u===">>"?7:3;case 61:case 126:return 3;case 111:return 1}else if(x===97&&u==="and")return 2;return 0}function gr(u,x){var H=q.value,O,le;if(sn&&(le=Kn()),Xn(q)){Ft(),X();var Me=gr(10,x);Me==null&&N("<expression>",q),O=C(g.unaryExpression(H,Me))}if(O==null&&(O=vr(x),O==null&&(O=_a(x))),O==null)return null;for(var Ue;H=q.value,Ue=w===q.type||y===q.type?Ea(H):0,!(Ue===0||Ue<=u);){(H==="^"||H==="..")&&--Ue,X();var fn=gr(Ue,x);fn==null&&N("<expression>",q),sn&&dn.push(le),O=C(g.binaryExpression(H,O,fn))}return O}function ui(u,x,H){var O,le;if(w===q.type)switch(q.value){case"[":return kn(x),X(),O=un(H),me("]"),C(g.indexExpression(u,O));case".":return kn(x),X(),le=Pn(),C(g.memberExpression(u,".",le));case":":return kn(x),X(),le=Pn(),u=C(g.memberExpression(u,":",le)),kn(x),br(u,H);case"(":case"{":return kn(x),br(u,H)}else if(h===q.type)return kn(x),br(u,H);return null}function _a(u){var x,H,O;if(sn&&(O=Kn()),v===q.type)H=q.value,x=Pn(),r.scope&&Ze(x,Dn(H));else if(de("("))x=un(u),me(")");else return null;for(;;){var le=ui(x,O,u);if(le===null)break;x=le}return x}function br(u,x){if(w===q.type)switch(q.value){case"(":a.emptyStatement||q.line!==$e.line&&B(null,M.ambiguousSyntax,q.value),X();var H=[],O=Oo(x);for(O!=null&&H.push(O);de(",");)O=un(x),H.push(O);return me(")"),C(g.callExpression(u,H));case"{":Ft(),X();var le=di(x);return C(g.tableCallExpression(u,le))}else if(h===q.type)return C(g.stringCallExpression(u,vr(x)));N("function arguments",q)}function vr(u){var x=h|m|_|k|R,H=q.value,O=q.type,le;if(sn&&(le=Kn()),O===R&&!u.allowVararg&&B(q,M.cannotUseVararg,q.value),O&x){kn(le);var Me=o.slice(q.range[0],q.range[1]);return X(),C(g.literal(O,H,Me))}else{if(y===O&&H==="function")return kn(le),X(),r.scope&&Ie(),mr(null);if(de("{"))return kn(le),di(u)}}t.parse=Ma;var fi={"5.1":{},"5.2":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,relaxedBreak:!0},"5.3":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,bitwiseOperators:!0,integerDivision:!0,relaxedBreak:!0},LuaJIT:{labels:!0,contextualGoto:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,imaginaryNumbers:!0,integerSuffixes:!0}};function Ma(u,x){if(typeof x>"u"&&typeof u=="object"&&(x=u,u=void 0),x||(x={}),o=u||"",r=Y({},l,x),T=0,Be=1,Ce=0,i=o.length,K=[[]],fe=0,we=[],dn=[],!Object.prototype.hasOwnProperty.call(fi,r.luaVersion))throw new Error(E("Lua version '%1' not supported",r.luaVersion));if(a=Y({},fi[r.luaVersion]),r.extendedIdentifiers!==void 0&&(a.extendedIdentifiers=!!r.extendedIdentifiers),!Object.prototype.hasOwnProperty.call(p,r.encodingMode))throw new Error(E("Encoding mode '%1' not supported",r.encodingMode));return s=p[r.encodingMode],r.comments&&(Nn=[]),r.wait?t:pi()}t.write=hi;function hi(u){return o+=String(u),i=o.length,t}t.end=pi;function pi(u){typeof u<"u"&&hi(u),o&&o.substr(0,2)==="#!"&&(o=o.replace(/^.*/,function(H){return H.replace(/./g," ")})),i=o.length,sn=r.locations||r.ranges,_e=De();var x=Se();if(r.comments&&(x.comments=Nn),r.scope&&(x.globals=we),dn.length>0)throw new Error("Location tracking failed. This is most likely a bug in luaparse");return x}})})(EI,ta);const _I=(()=>{const e=se();function n(){e.value=screen.width<640}return n(),window.addEventListener("resize",n),e})();function MI(e,n,t){const o=e.matchAll(n);return Array.from(o).forEach(r=>{const i=t(r);e=e.replace(r[0],i)}),e}class BI{constructor(n){Ba(this,"variables",{FNNS:!1,CHAR:{mino:{Z:'<i class="font-[proportional] block-f0040"></i>',S:'<i class="font-[proportional] block-f0041"></i>',J:'<i class="font-[proportional] block-f0042"></i>',L:'<i class="font-[proportional] block-f0043"></i>',T:'<i class="font-[proportional] block-f0044"></i>',O:'<i class="font-[proportional] block-f0045"></i>',I:'<i class="font-[proportional] block-f0046"></i>',Z5:'<i class="font-[proportional] block-f0047"></i>',S5:'<i class="font-[proportional] block-f0048"></i>',P:'<i class="font-[proportional] block-f0049"></i>',Q:'<i class="font-[proportional] block-f004a"></i>',F:'<i class="font-[proportional] block-f004b"></i>',E:'<i class="font-[proportional] block-f004c"></i>',T5:'<i class="font-[proportional] block-f004d"></i>',U:'<i class="font-[proportional] block-f004e"></i>',V:'<i class="font-[proportional] block-f004f"></i>',W:'<i class="font-[proportional] block-f0050"></i>',X:'<i class="font-[proportional] block-f0051"></i>',J5:'<i class="font-[proportional] block-f0052"></i>',L5:'<i class="font-[proportional] block-f0053"></i>',R:'<i class="font-[proportional] block-f0054"></i>',Y:'<i class="font-[proportional] block-f0055"></i>',N:'<i class="font-[proportional] block-f0056"></i>',H:'<i class="font-[proportional] block-f0057"></i>',I5:'<i class="font-[proportional] block-f0058"></i>',I3:'<i class="font-[proportional] block-f0059"></i>',C:'<i class="font-[proportional] block-f005a"></i>',I2:'<i class="font-[proportional] block-f005b"></i>',O1:'<i class="font-[proportional] block-f005c"></i>'}}});Ba(this,"_items",new Array);this.code=n;const t=this;ta.parse(n).body.forEach(r=>{t.processStatement(r)})}get items(){const n=this;return this._items.map(t=>{var o;return{title:n.processRaw(t[0],!1),tags:((o=n.processRaw(t[1],!1))==null?void 0:o.split(" "))??[],category:n.processRaw(t[2],!1),content:n.processRaw(t[3],!1),link:n.processRaw(t[4],!1)}})}processRaw(n,t=!0){if(!n)return null;let o=MI(n.slice(1,-1),/\\(\d+)/g,r=>String.fromCharCode(parseInt(r[1])));return t&&(o[0]!=='"'&&(o='"'+o),o[o.length-1]!=='"'&&(o=o+'"')),o}processStatement(n){const t=this;switch(n.type){case"LocalStatement":n.variables.forEach(function({name:o},r){const i=n.init[r];t.variables[o]=t.processRaw(i.raw)});break;case"ReturnStatement":n.arguments.forEach(o=>{this.processExpression(o)});break;default:throw new Error(`Unknown statement: ${n.type}`)}}processExpression(n,t={}){const o=this,r=new Array;switch(n.type){case"TableConstructorExpression":return n.fields.forEach(s=>{r.push(o.processExpression(s.value))}),r.length>0&&r.length<=5&&this._items.push(r),r;case"BinaryExpression":switch(n.operator){case"..":r.push(o.processExpression(n.left,{rawAddQuote:!1})),r.push(o.processExpression(n.right,{rawAddQuote:!1}));break;default:throw new Error(`Unknown operator: ${n.operator}`)}return r.join("");case"MemberExpression":r.push(o.processExpression(n.base,{forceReturnVariableName:!0})),r.push(n.indexer),r.push(o.processExpression(n.identifier,{forceReturnVariableName:!0}));const i=r.flat().join(""),a=Mf(o.variables,i);return typeof a!="string"?i:a;case"LogicalExpression":switch(r.push(o.processExpression(n.left)),n.operator){case"and":r.push("&&");break;case"or":r.push("||");break;default:throw new Error("Unknown operator")}return r.push(o.processExpression(n.right)),r.join(" ");case"Identifier":return!o.variables[n.name]||t.forceReturnVariableName?n.name:o.variables[n.name];case"StringLiteral":return o.processRaw(n.raw,t.rawAddQuote??!0);default:throw new Error(`Unknown expression: ${n.type}`)}}}const zI=Pm("app",{state:()=>({theme:f0().value,lang:"zh"}),getters:{themeRef(e){switch(e.theme){case"light":return cI;case"dark":return lI;default:return null}},dictItems(e){return new BI(HI[e.lang]).items},translations(e){return II[e.lang]},langOptions(e){return[{label:"English",key:"en",disabled:e.lang==="en"},{label:"日本語",key:"ja",disabled:e.lang==="ja"},{label:"简体中文",key:"zh",disabled:e.lang==="zh"}]}},actions:{switchTheme(){this.theme=this.theme==="light"?"dark":"light"},handleLangUpdate(e){this.lang=e}},persist:{enabled:!0}}),LI=Pm("shared",{state:()=>({search:se(),current:se()}),getters:{showing(e){return!!e.current}},actions:{setSearch(e){this.search=e,this.removeCurrent()},setCurrent(e){this.current=e},removeCurrent(){this.current=void 0}}}),OI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},FI=Ht("path",{opacity:".3",d:"M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56c-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4a7.987 7.987 0 0 0 4.33 3.56A15.65 15.65 0 0 1 8.03 16H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8a8.03 8.03 0 0 0-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4A8.03 8.03 0 0 0 18.92 16h-2.95a15.65 15.65 0 0 1-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z",fill:"currentColor"},null,-1),WI=Ht("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",fill:"currentColor"},null,-1),NI=[FI,WI],jI=Te({name:"LanguageTwotone",render:function(n,t){return cn(),Dt("svg",OI,NI)}}),GI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},VI=Ht("path",{d:"M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),KI=[VI],UI=Te({name:"Moon",render:function(n,t){return cn(),Dt("svg",GI,KI)}}),qI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ZI=Ht("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Ht("circle",{cx:"12",cy:"12",r:"4"}),Ht("path",{d:"M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"})],-1),JI=[ZI],XI=Te({name:"Sun",render:function(n,t){return cn(),Dt("svg",qI,JI)}}),YI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},QI=Ht("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zM4.02 16.394l1.338.446L7 19.303v1.283a1 1 0 0 0 .293.707L10 24v2.377a11.994 11.994 0 0 1-5.98-9.983zM16 28a11.968 11.968 0 0 1-2.572-.285L14 26l1.805-4.512a1 1 0 0 0-.097-.926l-1.411-2.117a1 1 0 0 0-.832-.445h-4.93l-1.248-1.873L9.414 14H11v2h2v-2.734l3.868-6.77l-1.736-.992L14.277 7h-2.742L10.45 5.371A11.861 11.861 0 0 1 20 4.7V8a1 1 0 0 0 1 1h1.465a1 1 0 0 0 .832-.445l.877-1.316A12.033 12.033 0 0 1 26.894 11H22.82a1 1 0 0 0-.98.804l-.723 4.47a1 1 0 0 0 .54 1.055L25 19l.685 4.056A11.98 11.98 0 0 1 16 28z",fill:"currentColor"},null,-1),eE=[QI],nE=Te({name:"EarthFilled",render:function(n,t){return cn(),Dt("svg",YI,eE)}}),tE=Te({__name:"App",setup(e){const n=zI(),t=LI(),o=J(()=>Q1(n.dictItems.map(r=>(r.content!==null&&(r.content=r.content.replaceAll("\\t","&#09;").replaceAll("\\n","<br>")),r)).filter(r=>{var i,a,s,l;return t.search?[!!((a=r.title)!=null&&a.toLowerCase().match((i=t.search)==null?void 0:i.toLowerCase())),!!((l=r.tags)!=null&&l.map(c=>c.toLowerCase()).includes((s=t.search)==null?void 0:s.toLowerCase()))].includes(!0):!0}),"category"));return(r,i)=>{const a=Sp,s=mP,l=WA,c=$$,d=QH,f=Bk,p=z$,b=h$,h=oI,y=PA,v=G$,m=Y$,w=eI,_=OH,k=NH,R=LH,M=XP;return cn(),Yn(M,{theme:Je(n).themeRef,class:"h-full"},{default:Ee(()=>[ke(R,{class:"h-full"},{default:Ee(()=>[ke(_,{class:"pb-16 h-full mx-2"},{default:Ee(()=>[ke(c,{class:"mt-2",justify:"space-between"},{default:Ee(()=>[ke(s,{onClick:Je(n).switchTheme},{icon:Ee(()=>[ke(a,{component:Je(n).theme==="light"?Je(UI):Je(XI)},null,8,["component"])]),_:1},8,["onClick"]),ke(l,{options:Je(n).langOptions,animated:"",trigger:"click",onSelect:Je(n).handleLangUpdate},{default:Ee(()=>[ke(s,null,{icon:Ee(()=>[ke(a,{component:Je(jI)},null,8,["component"])]),_:1})]),_:1},8,["options","onSelect"])]),_:1}),ke(c,{class:"sm:w-1/3 mx-auto mt-20",vertical:""},{default:Ee(()=>[ke(p,{class:"text-center"},{default:Ee(()=>[ke(d,null,{default:Ee(()=>[Sn(Wt(Je(n).translations.title),1)]),_:1}),Je(t).showing?(cn(),Yn(c,{key:1,justify:"center"},{default:Ee(()=>[ke(s,{onClick:Je(t).removeCurrent},{default:Ee(()=>[Sn("返回")]),_:1},8,["onClick"])]),_:1})):(cn(),Yn(f,{key:0,value:Je(t).search,"onUpdate:value":i[0]||(i[0]=g=>Je(t).search=g),placeholder:Je(n).translations.search,clearable:""},null,8,["value","placeholder"]))]),_:1}),ke(b)]),_:1}),ke(c,{size:"large",vertical:""},{default:Ee(()=>[Je(t).showing?(cn(),Yn(p,{key:1,class:"sm:w-1/3 mx-auto"},{default:Ee(()=>[ke(c,{vertical:""},{default:Ee(()=>{var g;return[ke(w,null,{default:Ee(()=>{var C;return[Sn(Wt((C=Je(t).current)==null?void 0:C.title),1)]}),_:1}),ke(h,{innerHTML:(g=Je(t).current)==null?void 0:g.content},null,8,["innerHTML"]),ke(c,{class:"mt-10 items-end",justify:"space-between"},{default:Ee(()=>{var C,D;return[ke(c,{size:"small"},{default:Ee(()=>{var I;return[ke(h,null,{default:Ee(()=>[Sn(Wt(Je(n).translations.tags)+": ",1)]),_:1}),(cn(!0),Dt(Ye,null,yr((I=Je(t).current)==null?void 0:I.tags,Z=>(cn(),Yn(s,{text:"",type:"info",onClick:E=>Je(t).setSearch(Z)},{default:Ee(()=>[Sn(Wt(Z),1)]),_:2},1032,["onClick"]))),256))]}),_:1}),(C=Je(t).current)!=null&&C.link?(cn(),Yn(s,{key:0,href:(D=Je(t).current)==null?void 0:D.link,tag:"a"},{icon:Ee(()=>[ke(a,{component:Je(nE)},null,8,["component"])]),_:1},8,["href"])):kb("",!0)]}),_:1})]}),_:1})]),_:1})):(cn(),Yn(c,{key:0,vertical:""},{default:Ee(()=>[Je(_I)?(cn(!0),Dt(Ye,{key:0},yr(Je(o),(g,C)=>(cn(),Yn(c,{class:"text-center",vertical:""},{default:Ee(()=>[ke(h,{class:"font-bold text-2xl",type:"info"},{default:Ee(()=>[Sn(Wt(C),1)]),_:2},1024),ke(m,{cols:3,"x-gap":10,"y-gap":10,class:"text-center"},{default:Ee(()=>[(cn(!0),Dt(Ye,null,yr(g,D=>(cn(),Yn(v,null,{default:Ee(()=>[ke(s,{class:"w-full",onClick:I=>Je(t).setCurrent(D)},{default:Ee(()=>[ke(y,null,{default:Ee(()=>[Sn(Wt(D.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024)]),_:2},1024))),256)):(cn(!0),Dt(Ye,{key:1},yr(Je(o),(g,C)=>(cn(),Yn(c,{class:"text-center",vertical:""},{default:Ee(()=>[ke(h,{class:"font-bold text-2xl",type:"info"},{default:Ee(()=>[Sn(Wt(C),1)]),_:2},1024),ke(c,{justify:"center"},{default:Ee(()=>[(cn(!0),Dt(Ye,null,yr(g,D=>(cn(),Yn(s,{size:"small",onClick:I=>Je(t).setCurrent(D)},{default:Ee(()=>[Sn(Wt(D.title),1)]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1024))),256))]),_:1}))]),_:1})]),_:1}),ke(k,{class:"py-2",position:"absolute"},{default:Ee(()=>[ke(c,{size:0,justify:"center"},{default:Ee(()=>[ke(p,null,{default:Ee(()=>[ke(h,null,{default:Ee(()=>[Sn("制作: ")]),_:1}),ke(s,{href:"https://zhazha120.cn",tag:"a",text:"",type:"primary"},{default:Ee(()=>[Sn("渣渣120")]),_:1})]),_:1}),ke(b,{vertical:""}),ke(s,{href:"https://github.com/26F-Studio/techmino-online-dict",tag:"a",text:"",type:"primary"},{default:Ee(()=>[Sn(" Github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])}}}),ds=document.createElement("div"),Md=uv({render:()=>P(tE)}),Bd=uI(),zd=(e,n)=>{const t=e.storage||sessionStorage,o=e.key||n.$id;if(e.paths){const r=e.paths.reduce((i,a)=>(i[a]=n.$state[a],i),{});t.setItem(o,JSON.stringify(r))}else t.setItem(o,JSON.stringify(n.$state))};var oE=({options:e,store:n})=>{var t,o,r,i;if((t=e.persist)!=null&&t.enabled){const a=[{key:n.$id,storage:sessionStorage}],s=(r=(o=e.persist)==null?void 0:o.strategies)!=null&&r.length?(i=e.persist)==null?void 0:i.strategies:a;s.forEach(l=>{const c=l.storage||sessionStorage,d=l.key||n.$id,f=c.getItem(d);f&&(n.$patch(JSON.parse(f)),zd(l,n))}),n.$subscribe(()=>{s.forEach(l=>{zd(l,n)})})}};window.addEventListener("load",()=>{ds.id="app",Bd.use(oE),Md.use(Bd),Md.mount(ds),document.body.appendChild(ds)})});export default rE();
