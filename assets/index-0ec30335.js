var cb=Object.defineProperty;var db=(e,n,t)=>n in e?cb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ub=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var hs=(e,n,t)=>(db(e,typeof n!="symbol"?n+"":n,t),t);var j6=ub((at,st)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Pl(e,n){const t=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)t[o[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Ta(e){if($e(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],r=wn(o)?mb(o):Ta(o);if(r)for(const i in r)n[i]=r[i]}return n}else{if(wn(e))return e;if(ln(e))return e}}const fb=/;(?![^(]*\))/g,hb=/:([^]+)/,pb=/\/\*.*?\*\//gs;function mb(e){const n={};return e.replace(pb,"").split(fb).forEach(t=>{if(t){const o=t.split(hb);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function $l(e){let n="";if(wn(e))n=e;else if($e(e))for(let t=0;t<e.length;t++){const o=$l(e[t]);o&&(n+=o+" ")}else if(ln(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const gb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bb=Pl(gb);function Gu(e){return!!e||e===""}const _r=e=>wn(e)?e:e==null?"":$e(e)||ln(e)&&(e.toString===qu||!ze(e.toString))?JSON.stringify(e,Vu,2):String(e),Vu=(e,n)=>n&&n.__v_isRef?Vu(e,n.value):sr(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,r])=>(t[`${o} =>`]=r,t),{})}:Ku(n)?{[`Set(${n.size})`]:[...n.values()]}:ln(n)&&!$e(n)&&!Zu(n)?String(n):n,sn={},ar=[],wt=()=>{},vb=()=>!1,yb=/^on[^a-z]/,ka=e=>yb.test(e),Al=e=>e.startsWith("onUpdate:"),An=Object.assign,Rl=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},xb=Object.prototype.hasOwnProperty,Ve=(e,n)=>xb.call(e,n),$e=Array.isArray,sr=e=>Pa(e)==="[object Map]",Ku=e=>Pa(e)==="[object Set]",ze=e=>typeof e=="function",wn=e=>typeof e=="string",Dl=e=>typeof e=="symbol",ln=e=>e!==null&&typeof e=="object",Uu=e=>ln(e)&&ze(e.then)&&ze(e.catch),qu=Object.prototype.toString,Pa=e=>qu.call(e),Cb=e=>Pa(e).slice(8,-1),Zu=e=>Pa(e)==="[object Object]",Il=e=>wn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ta=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$a=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},wb=/-(\w)/g,ur=$a(e=>e.replace(wb,(n,t)=>t?t.toUpperCase():"")),Sb=/\B([A-Z])/g,gr=$a(e=>e.replace(Sb,"-$1").toLowerCase()),Xu=$a(e=>e.charAt(0).toUpperCase()+e.slice(1)),ps=$a(e=>e?`on${Xu(e)}`:""),ni=(e,n)=>!Object.is(e,n),ms=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},sa=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Hl=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Hc;const Tb=()=>Hc||(Hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let it;class Ju{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=it,!n&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}run(n){if(this.active){const t=it;try{return it=this,n()}finally{it=t}}}on(){it=this}off(){it=this.parent}stop(n){if(this.active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Yu(e){return new Ju(e)}function kb(e,n=it){n&&n.active&&n.effects.push(e)}function Qu(){return it}function ef(e){it&&it.cleanups.push(e)}const _l=e=>{const n=new Set(e);return n.w=0,n.n=0,n},nf=e=>(e.w&io)>0,tf=e=>(e.n&io)>0,Pb=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=io},$b=e=>{const{deps:n}=e;if(n.length){let t=0;for(let o=0;o<n.length;o++){const r=n[o];nf(r)&&!tf(r)?r.delete(e):n[t++]=r,r.w&=~io,r.n&=~io}n.length=t}},Gs=new WeakMap;let Nr=0,io=1;const Vs=30;let xt;const zo=Symbol(""),Ks=Symbol("");class El{constructor(n,t=null,o){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,kb(this,o)}run(){if(!this.active)return this.fn();let n=xt,t=to;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=xt,xt=this,to=!0,io=1<<++Nr,Nr<=Vs?Pb(this):_c(this),this.fn()}finally{Nr<=Vs&&$b(this),io=1<<--Nr,xt=this.parent,to=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(_c(this),this.onStop&&this.onStop(),this.active=!1)}}function _c(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let to=!0;const of=[];function br(){of.push(to),to=!1}function vr(){const e=of.pop();to=e===void 0?!0:e}function lt(e,n,t){if(to&&xt){let o=Gs.get(e);o||Gs.set(e,o=new Map);let r=o.get(t);r||o.set(t,r=_l()),rf(r)}}function rf(e,n){let t=!1;Nr<=Vs?tf(e)||(e.n|=io,t=!nf(e)):t=!e.has(xt),t&&(e.add(xt),xt.deps.push(e))}function Bt(e,n,t,o,r,i){const a=Gs.get(e);if(!a)return;let s=[];if(n==="clear")s=[...a.values()];else if(t==="length"&&$e(e)){const l=Hl(o);a.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(t!==void 0&&s.push(a.get(t)),n){case"add":$e(e)?Il(t)&&s.push(a.get("length")):(s.push(a.get(zo)),sr(e)&&s.push(a.get(Ks)));break;case"delete":$e(e)||(s.push(a.get(zo)),sr(e)&&s.push(a.get(Ks)));break;case"set":sr(e)&&s.push(a.get(zo));break}if(s.length===1)s[0]&&Us(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Us(_l(l))}}function Us(e,n){const t=$e(e)?e:[...e];for(const o of t)o.computed&&Ec(o);for(const o of t)o.computed||Ec(o)}function Ec(e,n){(e!==xt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ab=Pl("__proto__,__v_isRef,__isVue"),af=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dl)),Rb=zl(),Db=zl(!1,!0),Ib=zl(!0),zc=Hb();function Hb(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const o=Ke(this);for(let i=0,a=this.length;i<a;i++)lt(o,"get",i+"");const r=o[n](...t);return r===-1||r===!1?o[n](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){br();const o=Ke(this)[n].apply(this,t);return vr(),o}}),e}function zl(e=!1,n=!1){return function(o,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&i===(e?n?qb:uf:n?df:cf).get(o))return o;const a=$e(o);if(!e&&a&&Ve(zc,r))return Reflect.get(zc,r,i);const s=Reflect.get(o,r,i);return(Dl(r)?af.has(r):Ab(r))||(e||lt(o,"get",r),n)?s:yn(s)?a&&Il(r)?s:s.value:ln(s)?e?mt(s):po(s):s}}const _b=sf(),Eb=sf(!0);function sf(e=!1){return function(t,o,r,i){let a=t[o];if(fr(a)&&yn(a)&&!yn(r))return!1;if(!e&&(!la(r)&&!fr(r)&&(a=Ke(a),r=Ke(r)),!$e(t)&&yn(a)&&!yn(r)))return a.value=r,!0;const s=$e(t)&&Il(o)?Number(o)<t.length:Ve(t,o),l=Reflect.set(t,o,r,i);return t===Ke(i)&&(s?ni(r,a)&&Bt(t,"set",o,r):Bt(t,"add",o,r)),l}}function zb(e,n){const t=Ve(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&t&&Bt(e,"delete",n,void 0),o}function Mb(e,n){const t=Reflect.has(e,n);return(!Dl(n)||!af.has(n))&&lt(e,"has",n),t}function Lb(e){return lt(e,"iterate",$e(e)?"length":zo),Reflect.ownKeys(e)}const lf={get:Rb,set:_b,deleteProperty:zb,has:Mb,ownKeys:Lb},Ob={get:Ib,set(e,n){return!0},deleteProperty(e,n){return!0}},Bb=An({},lf,{get:Db,set:Eb}),Ml=e=>e,Aa=e=>Reflect.getPrototypeOf(e);function _i(e,n,t=!1,o=!1){e=e.__v_raw;const r=Ke(e),i=Ke(n);t||(n!==i&&lt(r,"get",n),lt(r,"get",i));const{has:a}=Aa(r),s=o?Ml:t?Bl:ti;if(a.call(r,n))return s(e.get(n));if(a.call(r,i))return s(e.get(i));e!==r&&e.get(n)}function Ei(e,n=!1){const t=this.__v_raw,o=Ke(t),r=Ke(e);return n||(e!==r&&lt(o,"has",e),lt(o,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function zi(e,n=!1){return e=e.__v_raw,!n&&lt(Ke(e),"iterate",zo),Reflect.get(e,"size",e)}function Mc(e){e=Ke(e);const n=Ke(this);return Aa(n).has.call(n,e)||(n.add(e),Bt(n,"add",e,e)),this}function Lc(e,n){n=Ke(n);const t=Ke(this),{has:o,get:r}=Aa(t);let i=o.call(t,e);i||(e=Ke(e),i=o.call(t,e));const a=r.call(t,e);return t.set(e,n),i?ni(n,a)&&Bt(t,"set",e,n):Bt(t,"add",e,n),this}function Oc(e){const n=Ke(this),{has:t,get:o}=Aa(n);let r=t.call(n,e);r||(e=Ke(e),r=t.call(n,e)),o&&o.call(n,e);const i=n.delete(e);return r&&Bt(n,"delete",e,void 0),i}function Bc(){const e=Ke(this),n=e.size!==0,t=e.clear();return n&&Bt(e,"clear",void 0,void 0),t}function Mi(e,n){return function(o,r){const i=this,a=i.__v_raw,s=Ke(a),l=n?Ml:e?Bl:ti;return!e&&lt(s,"iterate",zo),a.forEach((c,d)=>o.call(r,l(c),l(d),i))}}function Li(e,n,t){return function(...o){const r=this.__v_raw,i=Ke(r),a=sr(i),s=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=r[e](...o),d=t?Ml:n?Bl:ti;return!n&&lt(i,"iterate",l?Ks:zo),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:s?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Zt(e){return function(...n){return e==="delete"?!1:this}}function Fb(){const e={get(i){return _i(this,i)},get size(){return zi(this)},has:Ei,add:Mc,set:Lc,delete:Oc,clear:Bc,forEach:Mi(!1,!1)},n={get(i){return _i(this,i,!1,!0)},get size(){return zi(this)},has:Ei,add:Mc,set:Lc,delete:Oc,clear:Bc,forEach:Mi(!1,!0)},t={get(i){return _i(this,i,!0)},get size(){return zi(this,!0)},has(i){return Ei.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Mi(!0,!1)},o={get(i){return _i(this,i,!0,!0)},get size(){return zi(this,!0)},has(i){return Ei.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Li(i,!1,!1),t[i]=Li(i,!0,!1),n[i]=Li(i,!1,!0),o[i]=Li(i,!0,!0)}),[e,t,n,o]}const[Wb,jb,Nb,Gb]=Fb();function Ll(e,n){const t=n?e?Gb:Nb:e?jb:Wb;return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Ve(t,r)&&r in o?t:o,r,i)}const Vb={get:Ll(!1,!1)},Kb={get:Ll(!1,!0)},Ub={get:Ll(!0,!1)},cf=new WeakMap,df=new WeakMap,uf=new WeakMap,qb=new WeakMap;function Zb(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xb(e){return e.__v_skip||!Object.isExtensible(e)?0:Zb(Cb(e))}function po(e){return fr(e)?e:Ol(e,!1,lf,Vb,cf)}function Jb(e){return Ol(e,!1,Bb,Kb,df)}function mt(e){return Ol(e,!0,Ob,Ub,uf)}function Ol(e,n,t,o,r){if(!ln(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=Xb(e);if(a===0)return e;const s=new Proxy(e,a===2?o:t);return r.set(e,s),s}function oo(e){return fr(e)?oo(e.__v_raw):!!(e&&e.__v_isReactive)}function fr(e){return!!(e&&e.__v_isReadonly)}function la(e){return!!(e&&e.__v_isShallow)}function ff(e){return oo(e)||fr(e)}function Ke(e){const n=e&&e.__v_raw;return n?Ke(n):e}function ao(e){return sa(e,"__v_skip",!0),e}const ti=e=>ln(e)?po(e):e,Bl=e=>ln(e)?mt(e):e;function hf(e){to&&xt&&(e=Ke(e),rf(e.dep||(e.dep=_l())))}function pf(e,n){e=Ke(e),e.dep&&Us(e.dep)}function yn(e){return!!(e&&e.__v_isRef===!0)}function K(e){return Yb(e,!1)}function Yb(e,n){return yn(e)?e:new Qb(e,n)}class Qb{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:Ke(n),this._value=t?n:ti(n)}get value(){return hf(this),this._value}set value(n){const t=this.__v_isShallow||la(n)||fr(n);n=t?n:Ke(n),ni(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:ti(n),pf(this))}}function Ee(e){return yn(e)?e.value:e}const ev={get:(e,n,t)=>Ee(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const r=e[n];return yn(r)&&!yn(t)?(r.value=t,!0):Reflect.set(e,n,t,o)}};function mf(e){return oo(e)?e:new Proxy(e,ev)}function nv(e){const n=$e(e)?new Array(e.length):{};for(const t in e)n[t]=Xe(e,t);return n}class tv{constructor(n,t,o){this._object=n,this._key=t,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function Xe(e,n,t){const o=e[n];return yn(o)?o:new tv(e,n,t)}var gf;class ov{constructor(n,t,o,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[gf]=!1,this._dirty=!0,this.effect=new El(n,()=>{this._dirty||(this._dirty=!0,pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=Ke(this);return hf(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}gf="__v_isReadonly";function rv(e,n,t=!1){let o,r;const i=ze(e);return i?(o=e,r=wt):(o=e.get,r=e.set),new ov(o,r,i||!r,t)}function ro(e,n,t,o){let r;try{r=o?e(...o):e()}catch(i){Ra(i,n,t)}return r}function pt(e,n,t,o){if(ze(e)){const i=ro(e,n,t,o);return i&&Uu(i)&&i.catch(a=>{Ra(a,n,t)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(pt(e[i],n,t,o));return r}function Ra(e,n,t,o=!0){const r=n?n.vnode:null;if(n){let i=n.parent;const a=n.proxy,s=t;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,s)===!1)return}i=i.parent}const l=n.appContext.config.errorHandler;if(l){ro(l,null,10,[e,a,s]);return}}iv(e,t,r,o)}function iv(e,n,t,o=!0){console.error(e)}let oi=!1,qs=!1;const Fn=[];let Rt=0;const lr=[];let Lt=null,$o=0;const bf=Promise.resolve();let Fl=null;function Gn(e){const n=Fl||bf;return e?n.then(this?e.bind(this):e):n}function av(e){let n=Rt+1,t=Fn.length;for(;n<t;){const o=n+t>>>1;ri(Fn[o])<e?n=o+1:t=o}return n}function Wl(e){(!Fn.length||!Fn.includes(e,oi&&e.allowRecurse?Rt+1:Rt))&&(e.id==null?Fn.push(e):Fn.splice(av(e.id),0,e),vf())}function vf(){!oi&&!qs&&(qs=!0,Fl=bf.then(xf))}function sv(e){const n=Fn.indexOf(e);n>Rt&&Fn.splice(n,1)}function lv(e){$e(e)?lr.push(...e):(!Lt||!Lt.includes(e,e.allowRecurse?$o+1:$o))&&lr.push(e),vf()}function Fc(e,n=oi?Rt+1:0){for(;n<Fn.length;n++){const t=Fn[n];t&&t.pre&&(Fn.splice(n,1),n--,t())}}function yf(e){if(lr.length){const n=[...new Set(lr)];if(lr.length=0,Lt){Lt.push(...n);return}for(Lt=n,Lt.sort((t,o)=>ri(t)-ri(o)),$o=0;$o<Lt.length;$o++)Lt[$o]();Lt=null,$o=0}}const ri=e=>e.id==null?1/0:e.id,cv=(e,n)=>{const t=ri(e)-ri(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function xf(e){qs=!1,oi=!0,Fn.sort(cv);const n=wt;try{for(Rt=0;Rt<Fn.length;Rt++){const t=Fn[Rt];t&&t.active!==!1&&ro(t,null,14)}}finally{Rt=0,Fn.length=0,yf(),oi=!1,Fl=null,(Fn.length||lr.length)&&xf()}}function dv(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||sn;let r=t;const i=n.startsWith("update:"),a=i&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:u,trim:p}=o[d]||sn;p&&(r=t.map(b=>wn(b)?b.trim():b)),u&&(r=t.map(Hl))}let s,l=o[s=ps(n)]||o[s=ps(ur(n))];!l&&i&&(l=o[s=ps(gr(n))]),l&&pt(l,e,6,r);const c=o[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,pt(c,e,6,r)}}function Cf(e,n,t=!1){const o=n.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let a={},s=!1;if(!ze(e)){const l=c=>{const d=Cf(c,n,!0);d&&(s=!0,An(a,d))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ln(e)&&o.set(e,null),null):($e(i)?i.forEach(l=>a[l]=null):An(a,i),ln(e)&&o.set(e,a),a)}function Da(e,n){return!e||!ka(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ve(e,n[0].toLowerCase()+n.slice(1))||Ve(e,gr(n))||Ve(e,n))}let Wn=null,wf=null;function ca(e){const n=Wn;return Wn=e,wf=e&&e.type.__scopeId||null,n}function Ie(e,n=Wn,t){if(!n||e._n)return e;const o=(...r)=>{o._d&&Xc(-1);const i=ca(n);let a;try{a=e(...r)}finally{ca(i),o._d&&Xc(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function gs(e){const{type:n,vnode:t,proxy:o,withProxy:r,props:i,propsOptions:[a],slots:s,attrs:l,emit:c,render:d,renderCache:u,data:p,setupState:b,ctx:h,inheritAttrs:v}=e;let m,g;const S=ca(e);try{if(t.shapeFlag&4){const k=r||o;m=At(d.call(k,k,u,i,b,p,h)),g=l}else{const k=n;m=At(k.length>1?k(i,{attrs:l,slots:s,emit:c}):k(i,null)),g=n.props?l:uv(l)}}catch(k){Zr.length=0,Ra(k,e,1),m=we(Vn)}let _=m;if(g&&v!==!1){const k=Object.keys(g),{shapeFlag:T}=_;k.length&&T&7&&(a&&k.some(Al)&&(g=fv(g,a)),_=gt(_,g))}return t.dirs&&(_=gt(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),m=_,ca(S),m}const uv=e=>{let n;for(const t in e)(t==="class"||t==="style"||ka(t))&&((n||(n={}))[t]=e[t]);return n},fv=(e,n)=>{const t={};for(const o in e)(!Al(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function hv(e,n,t){const{props:o,children:r,component:i}=e,{props:a,children:s,patchFlag:l}=n,c=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return o?Wc(o,a,c):!!a;if(l&8){const d=n.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(a[p]!==o[p]&&!Da(c,p))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:o===a?!1:o?a?Wc(o,a,c):!0:!!a;return!1}function Wc(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(n[i]!==e[i]&&!Da(t,i))return!0}return!1}function pv({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const mv=e=>e.__isSuspense;function gv(e,n){n&&n.pendingBranch?$e(e)?n.effects.push(...e):n.effects.push(e):lv(e)}function Ye(e,n){if(En){let t=En.provides;const o=En.parent&&En.parent.provides;o===t&&(t=En.provides=Object.create(o)),t[e]=n}}function Re(e,n,t=!1){const o=En||Wn;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&ze(n)?n.call(o.proxy):n}}function so(e,n){return jl(e,null,n)}const Oi={};function pn(e,n,t){return jl(e,n,t)}function jl(e,n,{immediate:t,deep:o,flush:r,onTrack:i,onTrigger:a}=sn){const s=En;let l,c=!1,d=!1;if(yn(e)?(l=()=>e.value,c=la(e)):oo(e)?(l=()=>e,o=!0):$e(e)?(d=!0,c=e.some(_=>oo(_)||la(_)),l=()=>e.map(_=>{if(yn(_))return _.value;if(oo(_))return Do(_);if(ze(_))return ro(_,s,2)})):ze(e)?n?l=()=>ro(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return u&&u(),pt(e,s,3,[p])}:l=wt,n&&o){const _=l;l=()=>Do(_())}let u,p=_=>{u=g.onStop=()=>{ro(_,s,4)}},b;if(ci)if(p=wt,n?t&&pt(n,s,3,[l(),d?[]:void 0,p]):l(),r==="sync"){const _=i0();b=_.__watcherHandles||(_.__watcherHandles=[])}else return wt;let h=d?new Array(e.length).fill(Oi):Oi;const v=()=>{if(g.active)if(n){const _=g.run();(o||c||(d?_.some((k,T)=>ni(k,h[T])):ni(_,h)))&&(u&&u(),pt(n,s,3,[_,h===Oi?void 0:d&&h[0]===Oi?[]:h,p]),h=_)}else g.run()};v.allowRecurse=!!n;let m;r==="sync"?m=v:r==="post"?m=()=>nt(v,s&&s.suspense):(v.pre=!0,s&&(v.id=s.uid),m=()=>Wl(v));const g=new El(l,m);n?t?v():h=g.run():r==="post"?nt(g.run.bind(g),s&&s.suspense):g.run();const S=()=>{g.stop(),s&&s.scope&&Rl(s.scope.effects,g)};return b&&b.push(S),S}function bv(e,n,t){const o=this.proxy,r=wn(e)?e.includes(".")?Sf(o,e):()=>o[e]:e.bind(o,o);let i;ze(n)?i=n:(i=n.handler,t=n);const a=En;hr(this);const s=jl(r,i.bind(o),t);return a?hr(a):Mo(),s}function Sf(e,n){const t=n.split(".");return()=>{let o=e;for(let r=0;r<t.length&&o;r++)o=o[t[r]];return o}}function Do(e,n){if(!ln(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),yn(e))Do(e.value,n);else if($e(e))for(let t=0;t<e.length;t++)Do(e[t],n);else if(Ku(e)||sr(e))e.forEach(t=>{Do(t,n)});else if(Zu(e))for(const t in e)Do(e[t],n);return e}function Tf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kn(()=>{e.isMounted=!0}),kn(()=>{e.isUnmounting=!0}),e}const ft=[Function,Array],vv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},setup(e,{slots:n}){const t=Nt(),o=Tf();let r;return()=>{const i=n.default&&Nl(n.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const v of i)if(v.type!==Vn){a=v;break}}const s=Ke(e),{mode:l}=s;if(o.isLeaving)return bs(a);const c=jc(a);if(!c)return bs(a);const d=ii(c,s,o,t);ai(c,d);const u=t.subTree,p=u&&jc(u);let b=!1;const{getTransitionKey:h}=c.type;if(h){const v=h();r===void 0?r=v:v!==r&&(r=v,b=!0)}if(p&&p.type!==Vn&&(!Ao(c,p)||b)){const v=ii(p,s,o,t);if(ai(p,v),l==="out-in")return o.isLeaving=!0,v.afterLeave=()=>{o.isLeaving=!1,t.update.active!==!1&&t.update()},bs(a);l==="in-out"&&c.type!==Vn&&(v.delayLeave=(m,g,S)=>{const _=Pf(o,p);_[String(p.key)]=p,m._leaveCb=()=>{g(),m._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=S})}return a}}},kf=vv;function Pf(e,n){const{leavingVNodes:t}=e;let o=t.get(n.type);return o||(o=Object.create(null),t.set(n.type,o)),o}function ii(e,n,t,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:p,onAfterLeave:b,onLeaveCancelled:h,onBeforeAppear:v,onAppear:m,onAfterAppear:g,onAppearCancelled:S}=n,_=String(e.key),k=Pf(t,e),T=(w,I)=>{w&&pt(w,o,9,I)},R=(w,I)=>{const H=I[1];T(w,I),$e(w)?w.every(U=>U.length<=1)&&H():w.length<=1&&H()},y={mode:i,persisted:a,beforeEnter(w){let I=s;if(!t.isMounted)if(r)I=v||s;else return;w._leaveCb&&w._leaveCb(!0);const H=k[_];H&&Ao(e,H)&&H.el._leaveCb&&H.el._leaveCb(),T(I,[w])},enter(w){let I=l,H=c,U=d;if(!t.isMounted)if(r)I=m||l,H=g||c,U=S||d;else return;let z=!1;const te=w._enterCb=L=>{z||(z=!0,L?T(U,[w]):T(H,[w]),y.delayedLeave&&y.delayedLeave(),w._enterCb=void 0)};I?R(I,[w,te]):te()},leave(w,I){const H=String(e.key);if(w._enterCb&&w._enterCb(!0),t.isUnmounting)return I();T(u,[w]);let U=!1;const z=w._leaveCb=te=>{U||(U=!0,I(),te?T(h,[w]):T(b,[w]),w._leaveCb=void 0,k[H]===e&&delete k[H])};k[H]=e,p?R(p,[w,z]):z()},clone(w){return ii(w,n,t,o)}};return y}function bs(e){if(Ia(e))return e=gt(e),e.children=null,e}function jc(e){return Ia(e)?e.children?e.children[0]:void 0:e}function ai(e,n){e.shapeFlag&6&&e.component?ai(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Nl(e,n=!1,t){let o=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];const s=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Je?(a.patchFlag&128&&r++,o=o.concat(Nl(a.children,n,s))):(n||a.type!==Vn)&&o.push(s!=null?gt(a,{key:s}):a)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function me(e){return ze(e)?{setup:e,name:e.name}:e}const Kr=e=>!!e.type.__asyncLoader,Ia=e=>e.type.__isKeepAlive;function $f(e,n){Af(e,"a",n)}function Gl(e,n){Af(e,"da",n)}function Af(e,n,t=En){const o=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ha(n,o,t),t){let r=t.parent;for(;r&&r.parent;)Ia(r.parent.vnode)&&yv(o,n,t,r),r=r.parent}}function yv(e,n,t,o){const r=Ha(n,e,o,!0);Df(()=>{Rl(o[n],r)},t)}function Ha(e,n,t=En,o=!1){if(t){const r=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...a)=>{if(t.isUnmounted)return;br(),hr(t);const s=pt(n,t,e,a);return Mo(),vr(),s});return o?r.unshift(i):r.push(i),i}}const Wt=e=>(n,t=En)=>(!ci||e==="sp")&&Ha(e,(...o)=>n(...o),t),jt=Wt("bm"),Kn=Wt("m"),xv=Wt("bu"),Rf=Wt("u"),kn=Wt("bum"),Df=Wt("um"),Cv=Wt("sp"),wv=Wt("rtg"),Sv=Wt("rtc");function Tv(e,n=En){Ha("ec",e,n)}function lo(e,n){const t=Wn;if(t===null)return e;const o=Ma(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[a,s,l,c=sn]=n[i];a&&(ze(a)&&(a={mounted:a,updated:a}),a.deep&&Do(s),r.push({dir:a,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function Co(e,n,t,o){const r=e.dirs,i=n&&n.dirs;for(let a=0;a<r.length;a++){const s=r[a];i&&(s.oldValue=i[a].value);let l=s.dir[o];l&&(br(),pt(l,t,8,[e.el,s,e,n]),vr())}}const kv=Symbol();function Bi(e,n,t,o){let r;const i=t&&t[o];if($e(e)||wn(e)){r=new Array(e.length);for(let a=0,s=e.length;a<s;a++)r[a]=n(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=n(a+1,a,void 0,i&&i[a])}else if(ln(e))if(e[Symbol.iterator])r=Array.from(e,(a,s)=>n(a,s,void 0,i&&i[s]));else{const a=Object.keys(e);r=new Array(a.length);for(let s=0,l=a.length;s<l;s++){const c=a[s];r[s]=n(e[c],c,s,i&&i[s])}}else r=[];return t&&(t[o]=r),r}function Pv(e,n,t={},o,r){if(Wn.isCE||Wn.parent&&Kr(Wn.parent)&&Wn.parent.isCE)return n!=="default"&&(t.name=n),we("slot",t,o&&o());let i=e[n];i&&i._c&&(i._d=!1),hn();const a=i&&If(i(t)),s=et(Je,{key:t.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function If(e){return e.some(n=>li(n)?!(n.type===Vn||n.type===Je&&!If(n.children)):!0)?e:null}const Zs=e=>e?jf(e)?Ma(e)||e.proxy:Zs(e.parent):null,Ur=An(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zs(e.parent),$root:e=>Zs(e.root),$emit:e=>e.emit,$options:e=>Vl(e),$forceUpdate:e=>e.f||(e.f=()=>Wl(e.update)),$nextTick:e=>e.n||(e.n=Gn.bind(e.proxy)),$watch:e=>bv.bind(e)}),vs=(e,n)=>e!==sn&&!e.__isScriptSetup&&Ve(e,n),$v={get({_:e},n){const{ctx:t,setupState:o,data:r,props:i,accessCache:a,type:s,appContext:l}=e;let c;if(n[0]!=="$"){const b=a[n];if(b!==void 0)switch(b){case 1:return o[n];case 2:return r[n];case 4:return t[n];case 3:return i[n]}else{if(vs(o,n))return a[n]=1,o[n];if(r!==sn&&Ve(r,n))return a[n]=2,r[n];if((c=e.propsOptions[0])&&Ve(c,n))return a[n]=3,i[n];if(t!==sn&&Ve(t,n))return a[n]=4,t[n];Xs&&(a[n]=0)}}const d=Ur[n];let u,p;if(d)return n==="$attrs"&&lt(e,"get",n),d(e);if((u=s.__cssModules)&&(u=u[n]))return u;if(t!==sn&&Ve(t,n))return a[n]=4,t[n];if(p=l.config.globalProperties,Ve(p,n))return p[n]},set({_:e},n,t){const{data:o,setupState:r,ctx:i}=e;return vs(r,n)?(r[n]=t,!0):o!==sn&&Ve(o,n)?(o[n]=t,!0):Ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:r,propsOptions:i}},a){let s;return!!t[a]||e!==sn&&Ve(e,a)||vs(n,a)||(s=i[0])&&Ve(s,a)||Ve(o,a)||Ve(Ur,a)||Ve(r.config.globalProperties,a)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Ve(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let Xs=!0;function Av(e){const n=Vl(e),t=e.proxy,o=e.ctx;Xs=!1,n.beforeCreate&&Nc(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:s,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:b,updated:h,activated:v,deactivated:m,beforeDestroy:g,beforeUnmount:S,destroyed:_,unmounted:k,render:T,renderTracked:R,renderTriggered:y,errorCaptured:w,serverPrefetch:I,expose:H,inheritAttrs:U,components:z,directives:te,filters:L}=n;if(c&&Rv(c,o,null,e.appContext.config.unwrapInjectedRef),a)for(const j in a){const ie=a[j];ze(ie)&&(o[j]=ie.bind(t))}if(r){const j=r.call(t,t);ln(j)&&(e.data=po(j))}if(Xs=!0,i)for(const j in i){const ie=i[j],$=ze(ie)?ie.bind(t,t):ze(ie.get)?ie.get.bind(t,t):wt,Z=!ze(ie)&&ze(ie.set)?ie.set.bind(t):wt,Pe=G({get:$,set:Z});Object.defineProperty(o,j,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:He=>Pe.value=He})}if(s)for(const j in s)Hf(s[j],o,t,j);if(l){const j=ze(l)?l.call(t):l;Reflect.ownKeys(j).forEach(ie=>{Ye(ie,j[ie])})}d&&Nc(d,e,"c");function se(j,ie){$e(ie)?ie.forEach($=>j($.bind(t))):ie&&j(ie.bind(t))}if(se(jt,u),se(Kn,p),se(xv,b),se(Rf,h),se($f,v),se(Gl,m),se(Tv,w),se(Sv,R),se(wv,y),se(kn,S),se(Df,k),se(Cv,I),$e(H))if(H.length){const j=e.exposed||(e.exposed={});H.forEach(ie=>{Object.defineProperty(j,ie,{get:()=>t[ie],set:$=>t[ie]=$})})}else e.exposed||(e.exposed={});T&&e.render===wt&&(e.render=T),U!=null&&(e.inheritAttrs=U),z&&(e.components=z),te&&(e.directives=te)}function Rv(e,n,t=wt,o=!1){$e(e)&&(e=Js(e));for(const r in e){const i=e[r];let a;ln(i)?"default"in i?a=Re(i.from||r,i.default,!0):a=Re(i.from||r):a=Re(i),yn(a)&&o?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):n[r]=a}}function Nc(e,n,t){pt($e(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function Hf(e,n,t,o){const r=o.includes(".")?Sf(t,o):()=>t[o];if(wn(e)){const i=n[e];ze(i)&&pn(r,i)}else if(ze(e))pn(r,e.bind(t));else if(ln(e))if($e(e))e.forEach(i=>Hf(i,n,t,o));else{const i=ze(e.handler)?e.handler.bind(t):n[e.handler];ze(i)&&pn(r,i,e)}}function Vl(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(n);let l;return s?l=s:!r.length&&!t&&!o?l=n:(l={},r.length&&r.forEach(c=>da(l,c,a,!0)),da(l,n,a)),ln(n)&&i.set(n,l),l}function da(e,n,t,o=!1){const{mixins:r,extends:i}=n;i&&da(e,i,t,!0),r&&r.forEach(a=>da(e,a,t,!0));for(const a in n)if(!(o&&a==="expose")){const s=Dv[a]||t&&t[a];e[a]=s?s(e[a],n[a]):n[a]}return e}const Dv={data:Gc,props:ko,emits:ko,methods:ko,computed:ko,beforeCreate:jn,created:jn,beforeMount:jn,mounted:jn,beforeUpdate:jn,updated:jn,beforeDestroy:jn,beforeUnmount:jn,destroyed:jn,unmounted:jn,activated:jn,deactivated:jn,errorCaptured:jn,serverPrefetch:jn,components:ko,directives:ko,watch:Hv,provide:Gc,inject:Iv};function Gc(e,n){return n?e?function(){return An(ze(e)?e.call(this,this):e,ze(n)?n.call(this,this):n)}:n:e}function Iv(e,n){return ko(Js(e),Js(n))}function Js(e){if($e(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function jn(e,n){return e?[...new Set([].concat(e,n))]:n}function ko(e,n){return e?An(An(Object.create(null),e),n):n}function Hv(e,n){if(!e)return n;if(!n)return e;const t=An(Object.create(null),e);for(const o in n)t[o]=jn(e[o],n[o]);return t}function _v(e,n,t,o=!1){const r={},i={};sa(i,za,1),e.propsDefaults=Object.create(null),_f(e,n,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);t?e.props=o?r:Jb(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Ev(e,n,t,o){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,s=Ke(r),[l]=e.propsOptions;let c=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Da(e.emitsOptions,p))continue;const b=n[p];if(l)if(Ve(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const h=ur(p);r[h]=Ys(l,s,h,b,e,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{_f(e,n,r,i)&&(c=!0);let d;for(const u in s)(!n||!Ve(n,u)&&((d=gr(u))===u||!Ve(n,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(r[u]=Ys(l,s,u,void 0,e,!0)):delete r[u]);if(i!==s)for(const u in i)(!n||!Ve(n,u))&&(delete i[u],c=!0)}c&&Bt(e,"set","$attrs")}function _f(e,n,t,o){const[r,i]=e.propsOptions;let a=!1,s;if(n)for(let l in n){if(ta(l))continue;const c=n[l];let d;r&&Ve(r,d=ur(l))?!i||!i.includes(d)?t[d]=c:(s||(s={}))[d]=c:Da(e.emitsOptions,l)||(!(l in o)||c!==o[l])&&(o[l]=c,a=!0)}if(i){const l=Ke(t),c=s||sn;for(let d=0;d<i.length;d++){const u=i[d];t[u]=Ys(r,l,u,c[u],e,!Ve(c,u))}}return a}function Ys(e,n,t,o,r,i){const a=e[t];if(a!=null){const s=Ve(a,"default");if(s&&o===void 0){const l=a.default;if(a.type!==Function&&ze(l)){const{propsDefaults:c}=r;t in c?o=c[t]:(hr(r),o=c[t]=l.call(null,n),Mo())}else o=l}a[0]&&(i&&!s?o=!1:a[1]&&(o===""||o===gr(t))&&(o=!0))}return o}function Ef(e,n,t=!1){const o=n.propsCache,r=o.get(e);if(r)return r;const i=e.props,a={},s=[];let l=!1;if(!ze(e)){const d=u=>{l=!0;const[p,b]=Ef(u,n,!0);An(a,p),b&&s.push(...b)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return ln(e)&&o.set(e,ar),ar;if($e(i))for(let d=0;d<i.length;d++){const u=ur(i[d]);Vc(u)&&(a[u]=sn)}else if(i)for(const d in i){const u=ur(d);if(Vc(u)){const p=i[d],b=a[u]=$e(p)||ze(p)?{type:p}:Object.assign({},p);if(b){const h=qc(Boolean,b.type),v=qc(String,b.type);b[0]=h>-1,b[1]=v<0||h<v,(h>-1||Ve(b,"default"))&&s.push(u)}}}const c=[a,s];return ln(e)&&o.set(e,c),c}function Vc(e){return e[0]!=="$"}function Kc(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Uc(e,n){return Kc(e)===Kc(n)}function qc(e,n){return $e(n)?n.findIndex(t=>Uc(t,e)):ze(n)&&Uc(n,e)?0:-1}const zf=e=>e[0]==="_"||e==="$stable",Kl=e=>$e(e)?e.map(At):[At(e)],zv=(e,n,t)=>{if(n._n)return n;const o=Ie((...r)=>Kl(n(...r)),t);return o._c=!1,o},Mf=(e,n,t)=>{const o=e._ctx;for(const r in e){if(zf(r))continue;const i=e[r];if(ze(i))n[r]=zv(r,i,o);else if(i!=null){const a=Kl(i);n[r]=()=>a}}},Lf=(e,n)=>{const t=Kl(n);e.slots.default=()=>t},Mv=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=Ke(n),sa(n,"_",t)):Mf(n,e.slots={})}else e.slots={},n&&Lf(e,n);sa(e.slots,za,1)},Lv=(e,n,t)=>{const{vnode:o,slots:r}=e;let i=!0,a=sn;if(o.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:(An(r,n),!t&&s===1&&delete r._):(i=!n.$stable,Mf(n,r)),a=n}else n&&(Lf(e,n),a={default:1});if(i)for(const s in r)!zf(s)&&!(s in a)&&delete r[s]};function Of(){return{app:null,config:{isNativeTag:vb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ov=0;function Bv(e,n){return function(o,r=null){ze(o)||(o=Object.assign({},o)),r!=null&&!ln(r)&&(r=null);const i=Of(),a=new Set;let s=!1;const l=i.app={_uid:Ov++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:a0,get config(){return i.config},set config(c){},use(c,...d){return a.has(c)||(c&&ze(c.install)?(a.add(c),c.install(l,...d)):ze(c)&&(a.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,u){if(!s){const p=we(o,r);return p.appContext=i,d&&n?n(p,c):e(p,c,u),s=!0,l._container=c,c.__vue_app__=l,Ma(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Qs(e,n,t,o,r=!1){if($e(e)){e.forEach((p,b)=>Qs(p,n&&($e(n)?n[b]:n),t,o,r));return}if(Kr(o)&&!r)return;const i=o.shapeFlag&4?Ma(o.component)||o.component.proxy:o.el,a=r?null:i,{i:s,r:l}=e,c=n&&n.r,d=s.refs===sn?s.refs={}:s.refs,u=s.setupState;if(c!=null&&c!==l&&(wn(c)?(d[c]=null,Ve(u,c)&&(u[c]=null)):yn(c)&&(c.value=null)),ze(l))ro(l,s,12,[a,d]);else{const p=wn(l),b=yn(l);if(p||b){const h=()=>{if(e.f){const v=p?Ve(u,l)?u[l]:d[l]:l.value;r?$e(v)&&Rl(v,i):$e(v)?v.includes(i)||v.push(i):p?(d[l]=[i],Ve(u,l)&&(u[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else p?(d[l]=a,Ve(u,l)&&(u[l]=a)):b&&(l.value=a,e.k&&(d[e.k]=a))};a?(h.id=-1,nt(h,t)):h()}}}const nt=gv;function Fv(e){return Wv(e)}function Wv(e,n){const t=Tb();t.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:a,createText:s,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:b=wt,insertStaticContent:h}=e,v=(P,A,B,q=null,J=null,ae=null,de=!1,re=null,ee=!!A.dynamicChildren)=>{if(P===A)return;P&&!Ao(P,A)&&(q=_e(P),He(P,J,ae,!0),P=null),A.patchFlag===-2&&(ee=!1,A.dynamicChildren=null);const{type:N,ref:xe,shapeFlag:ge}=A;switch(N){case Ea:m(P,A,B,q);break;case Vn:g(P,A,B,q);break;case ys:P==null&&S(A,B,q,de);break;case Je:z(P,A,B,q,J,ae,de,re,ee);break;default:ge&1?T(P,A,B,q,J,ae,de,re,ee):ge&6?te(P,A,B,q,J,ae,de,re,ee):(ge&64||ge&128)&&N.process(P,A,B,q,J,ae,de,re,ee,Ae)}xe!=null&&J&&Qs(xe,P&&P.ref,ae,A||P,!A)},m=(P,A,B,q)=>{if(P==null)o(A.el=s(A.children),B,q);else{const J=A.el=P.el;A.children!==P.children&&c(J,A.children)}},g=(P,A,B,q)=>{P==null?o(A.el=l(A.children||""),B,q):A.el=P.el},S=(P,A,B,q)=>{[P.el,P.anchor]=h(P.children,A,B,q,P.el,P.anchor)},_=({el:P,anchor:A},B,q)=>{let J;for(;P&&P!==A;)J=p(P),o(P,B,q),P=J;o(A,B,q)},k=({el:P,anchor:A})=>{let B;for(;P&&P!==A;)B=p(P),r(P),P=B;r(A)},T=(P,A,B,q,J,ae,de,re,ee)=>{de=de||A.type==="svg",P==null?R(A,B,q,J,ae,de,re,ee):I(P,A,J,ae,de,re,ee)},R=(P,A,B,q,J,ae,de,re)=>{let ee,N;const{type:xe,props:ge,shapeFlag:oe,transition:fe,dirs:ye}=P;if(ee=P.el=a(P.type,ae,ge&&ge.is,ge),oe&8?d(ee,P.children):oe&16&&w(P.children,ee,null,q,J,ae&&xe!=="foreignObject",de,re),ye&&Co(P,null,q,"created"),ge){for(const Me in ge)Me!=="value"&&!ta(Me)&&i(ee,Me,null,ge[Me],ae,P.children,q,J,Se);"value"in ge&&i(ee,"value",null,ge.value),(N=ge.onVnodeBeforeMount)&&kt(N,q,P)}y(ee,P,P.scopeId,de,q),ye&&Co(P,null,q,"beforeMount");const je=(!J||J&&!J.pendingBranch)&&fe&&!fe.persisted;je&&fe.beforeEnter(ee),o(ee,A,B),((N=ge&&ge.onVnodeMounted)||je||ye)&&nt(()=>{N&&kt(N,q,P),je&&fe.enter(ee),ye&&Co(P,null,q,"mounted")},J)},y=(P,A,B,q,J)=>{if(B&&b(P,B),q)for(let ae=0;ae<q.length;ae++)b(P,q[ae]);if(J){let ae=J.subTree;if(A===ae){const de=J.vnode;y(P,de,de.scopeId,de.slotScopeIds,J.parent)}}},w=(P,A,B,q,J,ae,de,re,ee=0)=>{for(let N=ee;N<P.length;N++){const xe=P[N]=re?eo(P[N]):At(P[N]);v(null,xe,A,B,q,J,ae,de,re)}},I=(P,A,B,q,J,ae,de)=>{const re=A.el=P.el;let{patchFlag:ee,dynamicChildren:N,dirs:xe}=A;ee|=P.patchFlag&16;const ge=P.props||sn,oe=A.props||sn;let fe;B&&wo(B,!1),(fe=oe.onVnodeBeforeUpdate)&&kt(fe,B,A,P),xe&&Co(A,P,B,"beforeUpdate"),B&&wo(B,!0);const ye=J&&A.type!=="foreignObject";if(N?H(P.dynamicChildren,N,re,B,q,ye,ae):de||ie(P,A,re,null,B,q,ye,ae,!1),ee>0){if(ee&16)U(re,A,ge,oe,B,q,J);else if(ee&2&&ge.class!==oe.class&&i(re,"class",null,oe.class,J),ee&4&&i(re,"style",ge.style,oe.style,J),ee&8){const je=A.dynamicProps;for(let Me=0;Me<je.length;Me++){const Ne=je[Me],rn=ge[Ne],Jn=oe[Ne];(Jn!==rn||Ne==="value")&&i(re,Ne,rn,Jn,J,P.children,B,q,Se)}}ee&1&&P.children!==A.children&&d(re,A.children)}else!de&&N==null&&U(re,A,ge,oe,B,q,J);((fe=oe.onVnodeUpdated)||xe)&&nt(()=>{fe&&kt(fe,B,A,P),xe&&Co(A,P,B,"updated")},q)},H=(P,A,B,q,J,ae,de)=>{for(let re=0;re<A.length;re++){const ee=P[re],N=A[re],xe=ee.el&&(ee.type===Je||!Ao(ee,N)||ee.shapeFlag&70)?u(ee.el):B;v(ee,N,xe,null,q,J,ae,de,!0)}},U=(P,A,B,q,J,ae,de)=>{if(B!==q){if(B!==sn)for(const re in B)!ta(re)&&!(re in q)&&i(P,re,B[re],null,de,A.children,J,ae,Se);for(const re in q){if(ta(re))continue;const ee=q[re],N=B[re];ee!==N&&re!=="value"&&i(P,re,N,ee,de,A.children,J,ae,Se)}"value"in q&&i(P,"value",B.value,q.value)}},z=(P,A,B,q,J,ae,de,re,ee)=>{const N=A.el=P?P.el:s(""),xe=A.anchor=P?P.anchor:s("");let{patchFlag:ge,dynamicChildren:oe,slotScopeIds:fe}=A;fe&&(re=re?re.concat(fe):fe),P==null?(o(N,B,q),o(xe,B,q),w(A.children,B,xe,J,ae,de,re,ee)):ge>0&&ge&64&&oe&&P.dynamicChildren?(H(P.dynamicChildren,oe,B,J,ae,de,re),(A.key!=null||J&&A===J.subTree)&&Ul(P,A,!0)):ie(P,A,B,xe,J,ae,de,re,ee)},te=(P,A,B,q,J,ae,de,re,ee)=>{A.slotScopeIds=re,P==null?A.shapeFlag&512?J.ctx.activate(A,B,q,de,ee):L(A,B,q,J,ae,de,ee):M(P,A,ee)},L=(P,A,B,q,J,ae,de)=>{const re=P.component=Yv(P,q,J);if(Ia(P)&&(re.ctx.renderer=Ae),Qv(re),re.asyncDep){if(J&&J.registerDep(re,se),!P.el){const ee=re.subTree=we(Vn);g(null,ee,A,B)}return}se(re,P,A,B,J,ae,de)},M=(P,A,B)=>{const q=A.component=P.component;if(hv(P,A,B))if(q.asyncDep&&!q.asyncResolved){j(q,A,B);return}else q.next=A,sv(q.update),q.update();else A.el=P.el,q.vnode=A},se=(P,A,B,q,J,ae,de)=>{const re=()=>{if(P.isMounted){let{next:xe,bu:ge,u:oe,parent:fe,vnode:ye}=P,je=xe,Me;wo(P,!1),xe?(xe.el=ye.el,j(P,xe,de)):xe=ye,ge&&ms(ge),(Me=xe.props&&xe.props.onVnodeBeforeUpdate)&&kt(Me,fe,xe,ye),wo(P,!0);const Ne=gs(P),rn=P.subTree;P.subTree=Ne,v(rn,Ne,u(rn.el),_e(rn),P,J,ae),xe.el=Ne.el,je===null&&pv(P,Ne.el),oe&&nt(oe,J),(Me=xe.props&&xe.props.onVnodeUpdated)&&nt(()=>kt(Me,fe,xe,ye),J)}else{let xe;const{el:ge,props:oe}=A,{bm:fe,m:ye,parent:je}=P,Me=Kr(A);if(wo(P,!1),fe&&ms(fe),!Me&&(xe=oe&&oe.onVnodeBeforeMount)&&kt(xe,je,A),wo(P,!0),ge&&Ze){const Ne=()=>{P.subTree=gs(P),Ze(ge,P.subTree,P,J,null)};Me?A.type.__asyncLoader().then(()=>!P.isUnmounted&&Ne()):Ne()}else{const Ne=P.subTree=gs(P);v(null,Ne,B,q,P,J,ae),A.el=Ne.el}if(ye&&nt(ye,J),!Me&&(xe=oe&&oe.onVnodeMounted)){const Ne=A;nt(()=>kt(xe,je,Ne),J)}(A.shapeFlag&256||je&&Kr(je.vnode)&&je.vnode.shapeFlag&256)&&P.a&&nt(P.a,J),P.isMounted=!0,A=B=q=null}},ee=P.effect=new El(re,()=>Wl(N),P.scope),N=P.update=()=>ee.run();N.id=P.uid,wo(P,!0),N()},j=(P,A,B)=>{A.component=P;const q=P.vnode.props;P.vnode=A,P.next=null,Ev(P,A.props,q,B),Lv(P,A.children,B),br(),Fc(),vr()},ie=(P,A,B,q,J,ae,de,re,ee=!1)=>{const N=P&&P.children,xe=P?P.shapeFlag:0,ge=A.children,{patchFlag:oe,shapeFlag:fe}=A;if(oe>0){if(oe&128){Z(N,ge,B,q,J,ae,de,re,ee);return}else if(oe&256){$(N,ge,B,q,J,ae,de,re,ee);return}}fe&8?(xe&16&&Se(N,J,ae),ge!==N&&d(B,ge)):xe&16?fe&16?Z(N,ge,B,q,J,ae,de,re,ee):Se(N,J,ae,!0):(xe&8&&d(B,""),fe&16&&w(ge,B,q,J,ae,de,re,ee))},$=(P,A,B,q,J,ae,de,re,ee)=>{P=P||ar,A=A||ar;const N=P.length,xe=A.length,ge=Math.min(N,xe);let oe;for(oe=0;oe<ge;oe++){const fe=A[oe]=ee?eo(A[oe]):At(A[oe]);v(P[oe],fe,B,null,J,ae,de,re,ee)}N>xe?Se(P,J,ae,!0,!1,ge):w(A,B,q,J,ae,de,re,ee,ge)},Z=(P,A,B,q,J,ae,de,re,ee)=>{let N=0;const xe=A.length;let ge=P.length-1,oe=xe-1;for(;N<=ge&&N<=oe;){const fe=P[N],ye=A[N]=ee?eo(A[N]):At(A[N]);if(Ao(fe,ye))v(fe,ye,B,null,J,ae,de,re,ee);else break;N++}for(;N<=ge&&N<=oe;){const fe=P[ge],ye=A[oe]=ee?eo(A[oe]):At(A[oe]);if(Ao(fe,ye))v(fe,ye,B,null,J,ae,de,re,ee);else break;ge--,oe--}if(N>ge){if(N<=oe){const fe=oe+1,ye=fe<xe?A[fe].el:q;for(;N<=oe;)v(null,A[N]=ee?eo(A[N]):At(A[N]),B,ye,J,ae,de,re,ee),N++}}else if(N>oe)for(;N<=ge;)He(P[N],J,ae,!0),N++;else{const fe=N,ye=N,je=new Map;for(N=ye;N<=oe;N++){const xn=A[N]=ee?eo(A[N]):At(A[N]);xn.key!=null&&je.set(xn.key,N)}let Me,Ne=0;const rn=oe-ye+1;let Jn=!1,Ut=0;const ut=new Array(rn);for(N=0;N<rn;N++)ut[N]=0;for(N=fe;N<=ge;N++){const xn=P[N];if(Ne>=rn){He(xn,J,ae,!0);continue}let Y;if(xn.key!=null)Y=je.get(xn.key);else for(Me=ye;Me<=oe;Me++)if(ut[Me-ye]===0&&Ao(xn,A[Me])){Y=Me;break}Y===void 0?He(xn,J,ae,!0):(ut[Y-ye]=N+1,Y>=Ut?Ut=Y:Jn=!0,v(xn,A[Y],B,null,J,ae,de,re,ee),Ne++)}const rt=Jn?jv(ut):ar;for(Me=rt.length-1,N=rn-1;N>=0;N--){const xn=ye+N,Y=A[xn],pe=xn+1<xe?A[xn+1].el:q;ut[N]===0?v(null,Y,B,pe,J,ae,de,re,ee):Jn&&(Me<0||N!==rt[Me]?Pe(Y,B,pe,2):Me--)}}},Pe=(P,A,B,q,J=null)=>{const{el:ae,type:de,transition:re,children:ee,shapeFlag:N}=P;if(N&6){Pe(P.component.subTree,A,B,q);return}if(N&128){P.suspense.move(A,B,q);return}if(N&64){de.move(P,A,B,Ae);return}if(de===Je){o(ae,A,B);for(let ge=0;ge<ee.length;ge++)Pe(ee[ge],A,B,q);o(P.anchor,A,B);return}if(de===ys){_(P,A,B);return}if(q!==2&&N&1&&re)if(q===0)re.beforeEnter(ae),o(ae,A,B),nt(()=>re.enter(ae),J);else{const{leave:ge,delayLeave:oe,afterLeave:fe}=re,ye=()=>o(ae,A,B),je=()=>{ge(ae,()=>{ye(),fe&&fe()})};oe?oe(ae,ye,je):je()}else o(ae,A,B)},He=(P,A,B,q=!1,J=!1)=>{const{type:ae,props:de,ref:re,children:ee,dynamicChildren:N,shapeFlag:xe,patchFlag:ge,dirs:oe}=P;if(re!=null&&Qs(re,null,B,P,!0),xe&256){A.ctx.deactivate(P);return}const fe=xe&1&&oe,ye=!Kr(P);let je;if(ye&&(je=de&&de.onVnodeBeforeUnmount)&&kt(je,A,P),xe&6)Oe(P.component,B,q);else{if(xe&128){P.suspense.unmount(B,q);return}fe&&Co(P,null,A,"beforeUnmount"),xe&64?P.type.remove(P,A,B,J,Ae,q):N&&(ae!==Je||ge>0&&ge&64)?Se(N,A,B,!1,!0):(ae===Je&&ge&384||!J&&xe&16)&&Se(ee,A,B),q&&Pn(P)}(ye&&(je=de&&de.onVnodeUnmounted)||fe)&&nt(()=>{je&&kt(je,A,P),fe&&Co(P,null,A,"unmounted")},B)},Pn=P=>{const{type:A,el:B,anchor:q,transition:J}=P;if(A===Je){Be(B,q);return}if(A===ys){k(P);return}const ae=()=>{r(B),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(P.shapeFlag&1&&J&&!J.persisted){const{leave:de,delayLeave:re}=J,ee=()=>de(B,ae);re?re(P.el,ae,ee):ee()}else ae()},Be=(P,A)=>{let B;for(;P!==A;)B=p(P),r(P),P=B;r(A)},Oe=(P,A,B)=>{const{bum:q,scope:J,update:ae,subTree:de,um:re}=P;q&&ms(q),J.stop(),ae&&(ae.active=!1,He(de,P,A,B)),re&&nt(re,A),nt(()=>{P.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Se=(P,A,B,q=!1,J=!1,ae=0)=>{for(let de=ae;de<P.length;de++)He(P[de],A,B,q,J)},_e=P=>P.shapeFlag&6?_e(P.component.subTree):P.shapeFlag&128?P.suspense.next():p(P.anchor||P.el),Zn=(P,A,B)=>{P==null?A._vnode&&He(A._vnode,null,null,!0):v(A._vnode||null,P,A,null,null,null,B),Fc(),yf(),A._vnode=P},Ae={p:v,um:He,m:Pe,r:Pn,mt:L,mc:w,pc:ie,pbc:H,n:_e,o:e};let Xn,Ze;return n&&([Xn,Ze]=n(Ae)),{render:Zn,hydrate:Xn,createApp:Bv(Zn,Xn)}}function wo({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Ul(e,n,t=!1){const o=e.children,r=n.children;if($e(o)&&$e(r))for(let i=0;i<o.length;i++){const a=o[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=eo(r[i]),s.el=a.el),t||Ul(a,s)),s.type===Ea&&(s.el=a.el)}}function jv(e){const n=e.slice(),t=[0];let o,r,i,a,s;const l=e.length;for(o=0;o<l;o++){const c=e[o];if(c!==0){if(r=t[t.length-1],e[r]<c){n[o]=r,t.push(o);continue}for(i=0,a=t.length-1;i<a;)s=i+a>>1,e[t[s]]<c?i=s+1:a=s;c<e[t[i]]&&(i>0&&(n[o]=t[i-1]),t[i]=o)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=n[a];return t}const Nv=e=>e.__isTeleport,qr=e=>e&&(e.disabled||e.disabled===""),Zc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,el=(e,n)=>{const t=e&&e.to;return wn(t)?n?n(t):null:t},Gv={__isTeleport:!0,process(e,n,t,o,r,i,a,s,l,c){const{mc:d,pc:u,pbc:p,o:{insert:b,querySelector:h,createText:v,createComment:m}}=c,g=qr(n.props);let{shapeFlag:S,children:_,dynamicChildren:k}=n;if(e==null){const T=n.el=v(""),R=n.anchor=v("");b(T,t,o),b(R,t,o);const y=n.target=el(n.props,h),w=n.targetAnchor=v("");y&&(b(w,y),a=a||Zc(y));const I=(H,U)=>{S&16&&d(_,H,U,r,i,a,s,l)};g?I(t,R):y&&I(y,w)}else{n.el=e.el;const T=n.anchor=e.anchor,R=n.target=e.target,y=n.targetAnchor=e.targetAnchor,w=qr(e.props),I=w?t:R,H=w?T:y;if(a=a||Zc(R),k?(p(e.dynamicChildren,k,I,r,i,a,s),Ul(e,n,!0)):l||u(e,n,I,H,r,i,a,s,!1),g)w||Fi(n,t,T,c,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const U=n.target=el(n.props,h);U&&Fi(n,U,null,c,0)}else w&&Fi(n,R,y,c,1)}Bf(n)},remove(e,n,t,o,{um:r,o:{remove:i}},a){const{shapeFlag:s,children:l,anchor:c,targetAnchor:d,target:u,props:p}=e;if(u&&i(d),(a||!qr(p))&&(i(c),s&16))for(let b=0;b<l.length;b++){const h=l[b];r(h,n,t,!0,!!h.dynamicChildren)}},move:Fi,hydrate:Vv};function Fi(e,n,t,{o:{insert:o},m:r},i=2){i===0&&o(e.targetAnchor,n,t);const{el:a,anchor:s,shapeFlag:l,children:c,props:d}=e,u=i===2;if(u&&o(a,n,t),(!u||qr(d))&&l&16)for(let p=0;p<c.length;p++)r(c[p],n,t,2);u&&o(s,n,t)}function Vv(e,n,t,o,r,i,{o:{nextSibling:a,parentNode:s,querySelector:l}},c){const d=n.target=el(n.props,l);if(d){const u=d._lpa||d.firstChild;if(n.shapeFlag&16)if(qr(n.props))n.anchor=c(a(e),n,s(e),t,o,r,i),n.targetAnchor=u;else{n.anchor=a(e);let p=u;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){n.targetAnchor=p,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}c(u,n,d,t,o,r,i)}Bf(n)}return n.anchor&&a(n.anchor)}const _a=Gv;function Bf(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Je=Symbol(void 0),Ea=Symbol(void 0),Vn=Symbol(void 0),ys=Symbol(void 0),Zr=[];let Ct=null;function hn(e=!1){Zr.push(Ct=e?null:[])}function Kv(){Zr.pop(),Ct=Zr[Zr.length-1]||null}let si=1;function Xc(e){si+=e}function Ff(e){return e.dynamicChildren=si>0?Ct||ar:null,Kv(),si>0&&Ct&&Ct.push(e),e}function Ot(e,n,t,o,r,i){return Ff(St(e,n,t,o,r,i,!0))}function et(e,n,t,o,r){return Ff(we(e,n,t,o,r,!0))}function li(e){return e?e.__v_isVNode===!0:!1}function Ao(e,n){return e.type===n.type&&e.key===n.key}const za="__vInternal",Wf=({key:e})=>e??null,oa=({ref:e,ref_key:n,ref_for:t})=>e!=null?wn(e)||yn(e)||ze(e)?{i:Wn,r:e,k:n,f:!!t}:e:null;function St(e,n=null,t=null,o=0,r=null,i=e===Je?0:1,a=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Wf(n),ref:n&&oa(n),scopeId:wf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Wn};return s?(ql(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=wn(t)?8:16),si>0&&!a&&Ct&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ct.push(l),l}const we=Uv;function Uv(e,n=null,t=null,o=0,r=null,i=!1){if((!e||e===kv)&&(e=Vn),li(e)){const s=gt(e,n,!0);return t&&ql(s,t),si>0&&!i&&Ct&&(s.shapeFlag&6?Ct[Ct.indexOf(e)]=s:Ct.push(s)),s.patchFlag|=-2,s}if(o0(e)&&(e=e.__vccOpts),n){n=qv(n);let{class:s,style:l}=n;s&&!wn(s)&&(n.class=$l(s)),ln(l)&&(ff(l)&&!$e(l)&&(l=An({},l)),n.style=Ta(l))}const a=wn(e)?1:mv(e)?128:Nv(e)?64:ln(e)?4:ze(e)?2:0;return St(e,n,t,o,r,a,i,!0)}function qv(e){return e?ff(e)||za in e?An({},e):e:null}function gt(e,n,t=!1){const{props:o,ref:r,patchFlag:i,children:a}=e,s=n?It(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Wf(s),ref:n&&n.ref?t&&r?$e(r)?r.concat(oa(n)):[r,oa(n)]:oa(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Je?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gt(e.ssContent),ssFallback:e.ssFallback&&gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Nn(e=" ",n=0){return we(Ea,null,e,n)}function Zv(e="",n=!1){return n?(hn(),et(Vn,null,e)):we(Vn,null,e)}function At(e){return e==null||typeof e=="boolean"?we(Vn):$e(e)?we(Je,null,e.slice()):typeof e=="object"?eo(e):we(Ea,null,String(e))}function eo(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gt(e)}function ql(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if($e(n))t=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),ql(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(za in n)?n._ctx=Wn:r===3&&Wn&&(Wn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ze(n)?(n={default:n,_ctx:Wn},t=32):(n=String(n),o&64?(t=16,n=[Nn(n)]):t=8);e.children=n,e.shapeFlag|=t}function It(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=$l([n.class,o.class]));else if(r==="style")n.style=Ta([n.style,o.style]);else if(ka(r)){const i=n[r],a=o[r];a&&i!==a&&!($e(i)&&i.includes(a))&&(n[r]=i?[].concat(i,a):a)}else r!==""&&(n[r]=o[r])}return n}function kt(e,n,t,o=null){pt(e,n,7,[t,o])}const Xv=Of();let Jv=0;function Yv(e,n,t){const o=e.type,r=(n?n.appContext:e.appContext)||Xv,i={uid:Jv++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ju(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ef(o,r),emitsOptions:Cf(o,r),emit:null,emitted:null,propsDefaults:sn,inheritAttrs:o.inheritAttrs,ctx:sn,data:sn,props:sn,attrs:sn,slots:sn,refs:sn,setupState:sn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=dv.bind(null,i),e.ce&&e.ce(i),i}let En=null;const Nt=()=>En||Wn,hr=e=>{En=e,e.scope.on()},Mo=()=>{En&&En.scope.off(),En=null};function jf(e){return e.vnode.shapeFlag&4}let ci=!1;function Qv(e,n=!1){ci=n;const{props:t,children:o}=e.vnode,r=jf(e);_v(e,t,r,n),Mv(e,o);const i=r?e0(e,n):void 0;return ci=!1,i}function e0(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=ao(new Proxy(e.ctx,$v));const{setup:o}=t;if(o){const r=e.setupContext=o.length>1?t0(e):null;hr(e),br();const i=ro(o,e,0,[e.props,r]);if(vr(),Mo(),Uu(i)){if(i.then(Mo,Mo),n)return i.then(a=>{Jc(e,a,n)}).catch(a=>{Ra(a,e,0)});e.asyncDep=i}else Jc(e,i,n)}else Nf(e,n)}function Jc(e,n,t){ze(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ln(n)&&(e.setupState=mf(n)),Nf(e,t)}let Yc;function Nf(e,n,t){const o=e.type;if(!e.render){if(!n&&Yc&&!o.render){const r=o.template||Vl(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:s,compilerOptions:l}=o,c=An(An({isCustomElement:i,delimiters:s},a),l);o.render=Yc(r,c)}}e.render=o.render||wt}hr(e),br(),Av(e),vr(),Mo()}function n0(e){return new Proxy(e.attrs,{get(n,t){return lt(e,"get","$attrs"),n[t]}})}function t0(e){const n=o=>{e.exposed=o||{}};let t;return{get attrs(){return t||(t=n0(e))},slots:e.slots,emit:e.emit,expose:n}}function Ma(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mf(ao(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Ur)return Ur[t](e)},has(n,t){return t in n||t in Ur}}))}function o0(e){return ze(e)&&"__vccOpts"in e}const G=(e,n)=>rv(e,n,ci);function x(e,n,t){const o=arguments.length;return o===2?ln(n)&&!$e(n)?li(n)?we(e,null,[n]):we(e,n):we(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&li(t)&&(t=[t]),we(e,n,t))}const r0=Symbol(""),i0=()=>Re(r0),a0="3.2.45",s0="http://www.w3.org/2000/svg",Ro=typeof document<"u"?document:null,Qc=Ro&&Ro.createElement("template"),l0={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const r=n?Ro.createElementNS(s0,e):Ro.createElement(e,t?{is:t}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Ro.createTextNode(e),createComment:e=>Ro.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ro.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,r,i){const a=t?t.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{Qc.innerHTML=o?`<svg>${e}</svg>`:e;const s=Qc.content;if(o){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function c0(e,n,t){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function d0(e,n,t){const o=e.style,r=wn(t);if(t&&!r){for(const i in t)nl(o,i,t[i]);if(n&&!wn(n))for(const i in n)t[i]==null&&nl(o,i,"")}else{const i=o.display;r?n!==t&&(o.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const ed=/\s*!important$/;function nl(e,n,t){if($e(t))t.forEach(o=>nl(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=u0(e,n);ed.test(t)?e.setProperty(gr(o),t.replace(ed,""),"important"):e[o]=t}}const nd=["Webkit","Moz","ms"],xs={};function u0(e,n){const t=xs[n];if(t)return t;let o=ur(n);if(o!=="filter"&&o in e)return xs[n]=o;o=Xu(o);for(let r=0;r<nd.length;r++){const i=nd[r]+o;if(i in e)return xs[n]=i}return n}const td="http://www.w3.org/1999/xlink";function f0(e,n,t,o,r){if(o&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(td,n.slice(6,n.length)):e.setAttributeNS(td,n,t);else{const i=bb(n);t==null||i&&!Gu(t)?e.removeAttribute(n):e.setAttribute(n,i?"":t)}}function h0(e,n,t,o,r,i,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,i),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let s=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Gu(t):t==null&&l==="string"?(t="",s=!0):l==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(n)}function p0(e,n,t,o){e.addEventListener(n,t,o)}function m0(e,n,t,o){e.removeEventListener(n,t,o)}function g0(e,n,t,o,r=null){const i=e._vei||(e._vei={}),a=i[n];if(o&&a)a.value=o;else{const[s,l]=b0(n);if(o){const c=i[n]=x0(o,r);p0(e,s,c,l)}else a&&(m0(e,s,a,l),i[n]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function b0(e){let n;if(od.test(e)){n={};let o;for(;o=e.match(od);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gr(e.slice(2)),n]}let Cs=0;const v0=Promise.resolve(),y0=()=>Cs||(v0.then(()=>Cs=0),Cs=Date.now());function x0(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;pt(C0(o,t.value),n,5,[o])};return t.value=e,t.attached=y0(),t}function C0(e,n){if($e(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const rd=/^on[a-z]/,w0=(e,n,t,o,r=!1,i,a,s,l)=>{n==="class"?c0(e,o,r):n==="style"?d0(e,t,o):ka(n)?Al(n)||g0(e,n,t,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):S0(e,n,o,r))?h0(e,n,o,i,a,s,l):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),f0(e,n,o,r))};function S0(e,n,t,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&rd.test(n)&&ze(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||rd.test(n)&&wn(t)?!1:n in e}const Xt="transition",Er="animation",bt=(e,{slots:n})=>x(kf,Vf(e),n);bt.displayName="Transition";const Gf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},T0=bt.props=An({},kf.props,Gf),So=(e,n=[])=>{$e(e)?e.forEach(t=>t(...n)):e&&e(...n)},id=e=>e?$e(e)?e.some(n=>n.length>1):e.length>1:!1;function Vf(e){const n={};for(const z in e)z in Gf||(n[z]=e[z]);if(e.css===!1)return n;const{name:t="v",type:o,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:c=a,appearToClass:d=s,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:b=`${t}-leave-to`}=e,h=k0(r),v=h&&h[0],m=h&&h[1],{onBeforeEnter:g,onEnter:S,onEnterCancelled:_,onLeave:k,onLeaveCancelled:T,onBeforeAppear:R=g,onAppear:y=S,onAppearCancelled:w=_}=n,I=(z,te,L)=>{Qt(z,te?d:s),Qt(z,te?c:a),L&&L()},H=(z,te)=>{z._isLeaving=!1,Qt(z,u),Qt(z,b),Qt(z,p),te&&te()},U=z=>(te,L)=>{const M=z?y:S,se=()=>I(te,z,L);So(M,[te,se]),ad(()=>{Qt(te,z?l:i),Mt(te,z?d:s),id(M)||sd(te,o,v,se)})};return An(n,{onBeforeEnter(z){So(g,[z]),Mt(z,i),Mt(z,a)},onBeforeAppear(z){So(R,[z]),Mt(z,l),Mt(z,c)},onEnter:U(!1),onAppear:U(!0),onLeave(z,te){z._isLeaving=!0;const L=()=>H(z,te);Mt(z,u),Uf(),Mt(z,p),ad(()=>{z._isLeaving&&(Qt(z,u),Mt(z,b),id(k)||sd(z,o,m,L))}),So(k,[z,L])},onEnterCancelled(z){I(z,!1),So(_,[z])},onAppearCancelled(z){I(z,!0),So(w,[z])},onLeaveCancelled(z){H(z),So(T,[z])}})}function k0(e){if(e==null)return null;if(ln(e))return[ws(e.enter),ws(e.leave)];{const n=ws(e);return[n,n]}}function ws(e){return Hl(e)}function Mt(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function Qt(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function ad(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let P0=0;function sd(e,n,t,o){const r=e._endId=++P0,i=()=>{r===e._endId&&o()};if(t)return setTimeout(i,t);const{type:a,timeout:s,propCount:l}=Kf(e,n);if(!a)return o();const c=a+"end";let d=0;const u=()=>{e.removeEventListener(c,p),i()},p=b=>{b.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},s+1),e.addEventListener(c,p)}function Kf(e,n){const t=window.getComputedStyle(e),o=h=>(t[h]||"").split(", "),r=o(`${Xt}Delay`),i=o(`${Xt}Duration`),a=ld(r,i),s=o(`${Er}Delay`),l=o(`${Er}Duration`),c=ld(s,l);let d=null,u=0,p=0;n===Xt?a>0&&(d=Xt,u=a,p=i.length):n===Er?c>0&&(d=Er,u=c,p=l.length):(u=Math.max(a,c),d=u>0?a>c?Xt:Er:null,p=d?d===Xt?i.length:l.length:0);const b=d===Xt&&/\b(transform|all)(,|$)/.test(o(`${Xt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:b}}function ld(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,o)=>cd(t)+cd(e[o])))}function cd(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Uf(){return document.body.offsetHeight}const qf=new WeakMap,Zf=new WeakMap,$0={name:"TransitionGroup",props:An({},T0,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Nt(),o=Tf();let r,i;return Rf(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!H0(r[0].el,t.vnode.el,a))return;r.forEach(R0),r.forEach(D0);const s=r.filter(I0);Uf(),s.forEach(l=>{const c=l.el,d=c.style;Mt(c,a),d.transform=d.webkitTransform=d.transitionDuration="";const u=c._moveCb=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",u),c._moveCb=null,Qt(c,a))};c.addEventListener("transitionend",u)})}),()=>{const a=Ke(e),s=Vf(a);let l=a.tag||Je;r=i,i=n.default?Nl(n.default()):[];for(let c=0;c<i.length;c++){const d=i[c];d.key!=null&&ai(d,ii(d,s,o,t))}if(r)for(let c=0;c<r.length;c++){const d=r[c];ai(d,ii(d,s,o,t)),qf.set(d,d.el.getBoundingClientRect())}return we(l,null,i)}}},A0=$0;function R0(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function D0(e){Zf.set(e,e.el.getBoundingClientRect())}function I0(e){const n=qf.get(e),t=Zf.get(e),o=n.left-t.left,r=n.top-t.top;if(o||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${o}px,${r}px)`,i.transitionDuration="0s",e}}function H0(e,n,t){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),t.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(o);const{hasTransform:i}=Kf(o);return r.removeChild(o),i}const pr={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):zr(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:o}){!n!=!t&&(o?n?(o.beforeEnter(e),zr(e,!0),o.enter(e)):o.leave(e,()=>{zr(e,!1)}):zr(e,n))},beforeUnmount(e,{value:n}){zr(e,n)}};function zr(e,n){e.style.display=n?e._vod:"none"}const _0=An({patchProp:w0},l0);let dd;function E0(){return dd||(dd=Fv(_0))}const Xf=(...e)=>{const n=E0().createApp(...e),{mount:t}=n;return n.mount=o=>{const r=z0(o);if(!r)return;const i=n._component;!ze(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function z0(e){return wn(e)?document.querySelector(e):e}let ua=[];const Jf=new WeakMap;function M0(){ua.forEach(e=>e(...Jf.get(e))),ua=[]}function Yf(e,...n){Jf.set(e,n),!ua.includes(e)&&ua.push(e)===1&&requestAnimationFrame(M0)}function ud(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function di(e){return e.composedPath()[0]||null}function L0(e){if(typeof e=="number")return{"":e.toString()};const n={};return e.split(/ +/).forEach(t=>{if(t==="")return;const[o,r]=t.split(":");r===void 0?n[""]=o:n[o]=r}),n}function Mr(e,n){var t;if(e==null)return;const o=L0(e);if(n===void 0)return o[""];if(typeof n=="string")return(t=o[n])!==null&&t!==void 0?t:o[""];if(Array.isArray(n)){for(let r=n.length-1;r>=0;--r){const i=n[r];if(i in o)return o[i]}return o[""]}else{let r,i=-1;return Object.keys(o).forEach(a=>{const s=Number(a);!Number.isNaN(s)&&n>=s&&s>=i&&(i=s,r=o[a])}),r}}function fd(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function ir(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function Zl(e,n){const t=e.trim().split(/\s+/g),o={top:t[0]};switch(t.length){case 1:o.right=t[0],o.bottom=t[0],o.left=t[0];break;case 2:o.right=t[1],o.left=t[1],o.bottom=t[0];break;case 3:o.right=t[1],o.bottom=t[2],o.left=t[1];break;case 4:o.right=t[1],o.bottom=t[2],o.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?o:o[n]}function O0(e,n){const[t,o]=e.split(" ");return n?n==="row"?t:o:{row:t,col:o||t}}const hd={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},yr="^\\s*",xr="\\s*$",Io="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Ho="([0-9A-Fa-f])",_o="([0-9A-Fa-f]{2})",B0=new RegExp(`${yr}rgb\\s*\\(${Io},${Io},${Io}\\)${xr}`),F0=new RegExp(`${yr}rgba\\s*\\(${Io},${Io},${Io},${Io}\\)${xr}`),W0=new RegExp(`${yr}#${Ho}${Ho}${Ho}${xr}`),j0=new RegExp(`${yr}#${_o}${_o}${_o}${xr}`),N0=new RegExp(`${yr}#${Ho}${Ho}${Ho}${Ho}${xr}`),G0=new RegExp(`${yr}#${_o}${_o}${_o}${_o}${xr}`);function Qn(e){return parseInt(e,16)}function Ft(e){try{let n;if(n=j0.exec(e))return[Qn(n[1]),Qn(n[2]),Qn(n[3]),1];if(n=B0.exec(e))return[Bn(n[1]),Bn(n[5]),Bn(n[9]),1];if(n=F0.exec(e))return[Bn(n[1]),Bn(n[5]),Bn(n[9]),Xr(n[13])];if(n=W0.exec(e))return[Qn(n[1]+n[1]),Qn(n[2]+n[2]),Qn(n[3]+n[3]),1];if(n=G0.exec(e))return[Qn(n[1]),Qn(n[2]),Qn(n[3]),Xr(Qn(n[4])/255)];if(n=N0.exec(e))return[Qn(n[1]+n[1]),Qn(n[2]+n[2]),Qn(n[3]+n[3]),Xr(Qn(n[4]+n[4])/255)];if(e in hd)return Ft(hd[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function V0(e){return e>1?1:e<0?0:e}function tl(e,n,t,o){return`rgba(${Bn(e)}, ${Bn(n)}, ${Bn(t)}, ${V0(o)})`}function Ss(e,n,t,o,r){return Bn((e*n*(1-o)+t*o)/r)}function ve(e,n){Array.isArray(e)||(e=Ft(e)),Array.isArray(n)||(n=Ft(n));const t=e[3],o=n[3],r=Xr(t+o-t*o);return tl(Ss(e[0],t,n[0],o,r),Ss(e[1],t,n[1],o,r),Ss(e[2],t,n[2],o,r),r)}function V(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:Ft(e);return n.alpha?tl(t,o,r,n.alpha):tl(t,o,r,i)}function vn(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:Ft(e),{lightness:a=1,alpha:s=1}=n;return K0([t*a,o*a,r*a,i*s])}function Xr(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function Bn(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function K0(e){const[n,t,o]=e;return 3 in e?`rgba(${Bn(n)}, ${Bn(t)}, ${Bn(o)}, ${Xr(e[3])})`:`rgba(${Bn(n)}, ${Bn(t)}, ${Bn(o)}, 1)`}function La(e=8){return Math.random().toString(16).slice(2,2+e)}function Qf(e,n="default",t=[]){const r=e.$slots[n];return r===void 0?t:r()}function Wo(e,n=[],t){const o={};return n.forEach(r=>{o[r]=e[r]}),Object.assign(o,t)}function Xl(e,n=[],t){const o={};return Object.getOwnPropertyNames(e).forEach(i=>{n.includes(i)||(o[i]=e[i])}),Object.assign(o,t)}function ui(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(Nn(String(o)));return}if(Array.isArray(o)){ui(o,n,t);return}if(o.type===Je){if(o.children===null)return;Array.isArray(o.children)&&ui(o.children,n,t)}else o.type!==Vn&&t.push(o)}}),t}function nn(e,...n){if(Array.isArray(e))e.forEach(t=>nn(t,...n));else return e(...n)}function Oa(e){return Object.keys(e)}const Hn=(e,...n)=>typeof e=="function"?e(...n):typeof e=="string"?Nn(e):typeof e=="number"?Nn(String(e)):null;function jo(e,n){console.error(`[naive/${e}]: ${n}`)}function yi(e,n){throw new Error(`[naive/${e}]: ${n}`)}function ol(e,n="default",t=void 0){const o=e[n];if(!o)return jo("getFirstSlotVNode",`slot[${n}] is empty`),null;const r=ui(o(t));return r.length===1?r[0]:(jo("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function U0(e){return n=>{n?e.value=n.$el:e.value=null}}function xi(e){return e.some(n=>li(n)?!(n.type===Vn||n.type===Je&&!xi(n.children)):!0)?e:null}function Lo(e,n){return e&&xi(e())||n()}function q0(e,n,t){return e&&xi(e(n))||t(n)}function _n(e,n){const t=e&&xi(e());return n(t||null)}function rl(e){return!(e&&xi(e()))}function Z0(e){var n;const t=(n=e.dirs)===null||n===void 0?void 0:n.find(({dir:o})=>o===pr);return!!(t&&t.value===!1)}const pd=me({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),X0=/^(\d|\.)+$/,md=/(\d|\.)+/;function ra(e,{c:n=1,offset:t=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+t)*n;return r===0?"0":`${r}px`}else if(typeof e=="string")if(X0.test(e)){const r=(Number(e)+t)*n;return o?r===0?"0":`${r}px`:`${r}`}else{const r=md.exec(e);return r?e.replace(md,String((Number(r[0])+t)*n)):e}return e}function gd(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function J0(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const eh=/\s*,(?![^(]*\))\s*/g,Y0=/\s+/g;function Q0(e,n){const t=[];return n.split(eh).forEach(o=>{let r=J0(o);if(r){if(r===1){e.forEach(a=>{t.push(o.replace("&",a))});return}}else{e.forEach(a=>{t.push((a&&a+" ")+o)});return}let i=[o];for(;r--;){const a=[];i.forEach(s=>{e.forEach(l=>{a.push(s.replace("&",l))})}),i=a}i.forEach(a=>t.push(a))}),t}function ey(e,n){const t=[];return n.split(eh).forEach(o=>{e.forEach(r=>{t.push((r&&r+" ")+o)})}),t}function ny(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=Q0(n,t):n=ey(n,t))}),n.join(", ").replace(Y0," ")}function bd(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function Ba(e){return document.querySelector(`style[cssr-id="${e}"]`)}function ty(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function Wi(e){return e?/^\s*@(s|m)/.test(e):!1}const oy=/[A-Z]/g;function nh(e){return e.replace(oy,n=>"-"+n.toLowerCase())}function ry(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${nh(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function iy(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function vd(e,n,t,o){if(!n)return"";const r=iy(n,t,o);if(!r)return"";if(typeof r=="string")return`${e} {
${r}
}`;const i=Object.keys(r);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return i.forEach(s=>{const l=r[s];if(s==="raw"){a.push(`
`+l+`
`);return}s=nh(s),l!=null&&a.push(`  ${s}${ry(l)}`)}),e&&a.push("}"),a.join(`
`)}function il(e,n,t){e&&e.forEach(o=>{if(Array.isArray(o))il(o,n,t);else if(typeof o=="function"){const r=o(n);Array.isArray(r)?il(r,n,t):r&&t(r)}else o&&t(o)})}function th(e,n,t,o,r,i){const a=e.$;let s="";if(!a||typeof a=="string")Wi(a)?s=a:n.push(a);else if(typeof a=="function"){const d=a({context:o.context,props:r});Wi(d)?s=d:n.push(d)}else if(a.before&&a.before(o.context),!a.$||typeof a.$=="string")Wi(a.$)?s=a.$:n.push(a.$);else if(a.$){const d=a.$({context:o.context,props:r});Wi(d)?s=d:n.push(d)}const l=ny(n),c=vd(l,e.props,o,r);s?(t.push(`${s} {`),i&&c&&i.insertRule(`${s} {
${c}
}
`)):(i&&c&&i.insertRule(c),!i&&c.length&&t.push(c)),e.children&&il(e.children,{context:o.context,props:r},d=>{if(typeof d=="string"){const u=vd(l,{raw:d},o,r);i?i.insertRule(u):t.push(u)}else th(d,n,t,o,r,i)}),n.pop(),s&&t.push("}"),a&&a.after&&a.after(o.context)}function oh(e,n,t,o=!1){const r=[];return th(e,[],r,n,t,o?e.instance.__styleSheet:void 0),o?"":r.join(`

`)}function fi(e){for(var n=0,t,o=0,r=e.length;r>=4;++o,r-=4)t=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(r){case 3:n^=(e.charCodeAt(o+2)&255)<<16;case 2:n^=(e.charCodeAt(o+1)&255)<<8;case 1:n^=e.charCodeAt(o)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function ay(e,n,t){const{els:o}=n;if(t===void 0)o.forEach(bd),n.els=[];else{const r=Ba(t);r&&o.includes(r)&&(bd(r),n.els=o.filter(i=>i!==r))}}function yd(e,n){e.push(n)}function sy(e,n,t,o,r,i,a,s,l){if(i&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const p=window.__cssrContext;p[t]||(p[t]=!0,oh(n,e,o,i));return}let c;if(t===void 0&&(c=n.render(o),t=fi(c)),l){l.adapter(t,c??n.render(o));return}const d=Ba(t);if(d!==null&&!a)return d;const u=d??ty(t);if(c===void 0&&(c=n.render(o)),u.textContent=c,d!==null)return d;if(s){const p=document.head.querySelector(`meta[name="${s}"]`);if(p)return document.head.insertBefore(u,p),yd(n.els,u),u}return r?document.head.insertBefore(u,document.head.querySelector("style, link")):document.head.appendChild(u),yd(n.els,u),u}function ly(e){return oh(this,this.instance,e)}function cy(e={}){const{id:n,ssr:t,props:o,head:r=!1,silent:i=!1,force:a=!1,anchorMetaName:s}=e;return sy(this.instance,this,n,o,r,i,a,s,t)}function dy(e={}){const{id:n}=e;ay(this.instance,this,n)}const ji=function(e,n,t,o){return{instance:e,$:n,props:t,children:o,els:[],render:ly,mount:cy,unmount:dy}},uy=function(e,n,t,o){return Array.isArray(n)?ji(e,{$:null},null,n):Array.isArray(t)?ji(e,n,null,t):Array.isArray(o)?ji(e,n,t,o):ji(e,n,t,null)};function rh(e={}){let n=null;const t={c:(...o)=>uy(t,...o),use:(o,...r)=>o.install(t,...r),find:Ba,context:{},config:e,get __styleSheet(){if(!n){const o=document.createElement("style");return document.head.appendChild(o),n=document.styleSheets[document.styleSheets.length-1],n}return n}};return t}function fy(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return Ba(e)!==null}function hy(e){let n=".",t="__",o="--",r;if(e){let h=e.blockPrefix;h&&(n=h),h=e.elementPrefix,h&&(t=h),h=e.modifierPrefix,h&&(o=h)}const i={install(h){r=h.c;const v=h.context;v.bem={},v.bem.b=null,v.bem.els=null}};function a(h){let v,m;return{before(g){v=g.bem.b,m=g.bem.els,g.bem.els=null},after(g){g.bem.b=v,g.bem.els=m},$({context:g,props:S}){return h=typeof h=="string"?h:h({context:g,props:S}),g.bem.b=h,`${(S==null?void 0:S.bPrefix)||n}${g.bem.b}`}}}function s(h){let v;return{before(m){v=m.bem.els},after(m){m.bem.els=v},$({context:m,props:g}){return h=typeof h=="string"?h:h({context:m,props:g}),m.bem.els=h.split(",").map(S=>S.trim()),m.bem.els.map(S=>`${(g==null?void 0:g.bPrefix)||n}${m.bem.b}${t}${S}`).join(", ")}}}function l(h){return{$({context:v,props:m}){h=typeof h=="string"?h:h({context:v,props:m});const g=h.split(",").map(k=>k.trim());function S(k){return g.map(T=>`&${(m==null?void 0:m.bPrefix)||n}${v.bem.b}${k!==void 0?`${t}${k}`:""}${o}${T}`).join(", ")}const _=v.bem.els;return _!==null?S(_[0]):S()}}}function c(h){return{$({context:v,props:m}){h=typeof h=="string"?h:h({context:v,props:m});const g=v.bem.els;return`&:not(${(m==null?void 0:m.bPrefix)||n}${v.bem.b}${g!==null&&g.length>0?`${t}${g[0]}`:""}${o}${h})`}}}return Object.assign(i,{cB:(...h)=>r(a(h[0]),h[1],h[2]),cE:(...h)=>r(s(h[0]),h[1],h[2]),cM:(...h)=>r(l(h[0]),h[1],h[2]),cNotM:(...h)=>r(c(h[0]),h[1],h[2])}),i}function be(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}be("abc","def");const py="n",hi=`.${py}-`,my="__",gy="--",ih=rh(),ah=hy({blockPrefix:hi,elementPrefix:my,modifierPrefix:gy});ih.use(ah);const{c:O,find:G6}=ih,{cB:ne,cE:F,cM:Q,cNotM:zn}=ah;function sh(e){return O(({props:{bPrefix:n}})=>`${n||hi}modal, ${n||hi}drawer`,[e])}function by(e){return O(({props:{bPrefix:n}})=>`${n||hi}popover`,[e])}function lh(e){return O(({props:{bPrefix:n}})=>`&${n||hi}modal`,e)}const vy=(...e)=>O(">",[ne(...e)]);let Ts;function yy(){return Ts===void 0&&(Ts=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Ts}const mo=typeof document<"u"&&typeof window<"u",xy=new WeakSet;function Cy(e){return!xy.has(e)}function wy(e,n,t){if(!n)return e;const o=K(e.value);let r=null;return pn(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function Sy(e){const n=K(!!e.value);if(n.value)return mt(n);const t=pn(e,o=>{o&&(n.value=!0,t())});return mt(n)}function $n(e){const n=G(e),t=K(n.value);return pn(n,o=>{t.value=o}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(o){e.set(o)}}}function Fa(){return Nt()!==null}const Wa=typeof window<"u";let cr,Jr;const Ty=()=>{var e,n;cr=Wa?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,Jr=!1,cr!==void 0?cr.then(()=>{Jr=!0}):Jr=!0};Ty();function ky(e){if(Jr)return;let n=!1;Kn(()=>{Jr||cr==null||cr.then(()=>{n||e()})}),kn(()=>{n=!0})}function ia(e){return e.composedPath()[0]}const Py={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function $y(e,n,t){if(e==="mousemoveoutside"){const o=r=>{n.contains(ia(r))||t(r)};return{mousemove:o,touchstart:o}}else if(e==="clickoutside"){let o=!1;const r=a=>{o=!n.contains(ia(a))},i=a=>{o&&(n.contains(ia(a))||t(a))};return{mousedown:r,mouseup:i,touchstart:r,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function ch(e,n,t){const o=Py[e];let r=o.get(n);r===void 0&&o.set(n,r=new WeakMap);let i=r.get(t);return i===void 0&&r.set(t,i=$y(e,n,t)),i}function Ay(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=ch(e,n,t);return Object.keys(r).forEach(i=>{dn(i,document,r[i],o)}),!0}return!1}function Ry(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=ch(e,n,t);return Object.keys(r).forEach(i=>{tn(i,document,r[i],o)}),!0}return!1}function Dy(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function o(){e.set(this,!0),n.set(this,!0)}function r(y,w,I){const H=y[w];return y[w]=function(){return I.apply(y,arguments),H.apply(y,arguments)},y}function i(y,w){y[w]=Event.prototype[w]}const a=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var y;return(y=a.get(this))!==null&&y!==void 0?y:null}function c(y,w){s!==void 0&&Object.defineProperty(y,"currentTarget",{configurable:!0,enumerable:!0,get:w??s.get})}const d={bubble:{},capture:{}},u={};function p(){const y=function(w){const{type:I,eventPhase:H,bubbles:U}=w,z=ia(w);if(H===2)return;const te=H===1?"capture":"bubble";let L=z;const M=[];for(;L===null&&(L=window),M.push(L),L!==window;)L=L.parentNode||null;const se=d.capture[I],j=d.bubble[I];if(r(w,"stopPropagation",t),r(w,"stopImmediatePropagation",o),c(w,l),te==="capture"){if(se===void 0)return;for(let ie=M.length-1;ie>=0&&!e.has(w);--ie){const $=M[ie],Z=se.get($);if(Z!==void 0){a.set(w,$);for(const Pe of Z){if(n.has(w))break;Pe(w)}}if(ie===0&&!U&&j!==void 0){const Pe=j.get($);if(Pe!==void 0)for(const He of Pe){if(n.has(w))break;He(w)}}}}else if(te==="bubble"){if(j===void 0)return;for(let ie=0;ie<M.length&&!e.has(w);++ie){const $=M[ie],Z=j.get($);if(Z!==void 0){a.set(w,$);for(const Pe of Z){if(n.has(w))break;Pe(w)}}}}i(w,"stopPropagation"),i(w,"stopImmediatePropagation"),c(w)};return y.displayName="evtdUnifiedHandler",y}function b(){const y=function(w){const{type:I,eventPhase:H}=w;if(H!==2)return;const U=u[I];U!==void 0&&U.forEach(z=>z(w))};return y.displayName="evtdUnifiedWindowEventHandler",y}const h=p(),v=b();function m(y,w){const I=d[y];return I[w]===void 0&&(I[w]=new Map,window.addEventListener(w,h,y==="capture")),I[w]}function g(y){return u[y]===void 0&&(u[y]=new Set,window.addEventListener(y,v)),u[y]}function S(y,w){let I=y.get(w);return I===void 0&&y.set(w,I=new Set),I}function _(y,w,I,H){const U=d[w][I];if(U!==void 0){const z=U.get(y);if(z!==void 0&&z.has(H))return!0}return!1}function k(y,w){const I=u[y];return!!(I!==void 0&&I.has(w))}function T(y,w,I,H){let U;if(typeof H=="object"&&H.once===!0?U=se=>{R(y,w,U,H),I(se)}:U=I,Ay(y,w,U,H))return;const te=H===!0||typeof H=="object"&&H.capture===!0?"capture":"bubble",L=m(te,y),M=S(L,w);if(M.has(U)||M.add(U),w===window){const se=g(y);se.has(U)||se.add(U)}}function R(y,w,I,H){if(Ry(y,w,I,H))return;const z=H===!0||typeof H=="object"&&H.capture===!0,te=z?"capture":"bubble",L=m(te,y),M=S(L,w);if(w===window&&!_(w,z?"bubble":"capture",y,I)&&k(y,I)){const j=u[y];j.delete(I),j.size===0&&(window.removeEventListener(y,v),u[y]=void 0)}M.has(I)&&M.delete(I),M.size===0&&L.delete(w),L.size===0&&(window.removeEventListener(y,h,te==="capture"),d[te][y]=void 0)}return{on:T,off:R}}const{on:dn,off:tn}=Dy(),Gr=K(null);function xd(e){if(e.clientX>0||e.clientY>0)Gr.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:t,top:o,width:r,height:i}=n.getBoundingClientRect();t>0||o>0?Gr.value={x:t+r/2,y:o+i/2}:Gr.value={x:0,y:0}}else Gr.value=null}}let Ni=0,Cd=!0;function dh(){if(!Wa)return mt(K(null));Ni===0&&dn("click",document,xd,!0);const e=()=>{Ni+=1};return Cd&&(Cd=Fa())?(jt(e),kn(()=>{Ni-=1,Ni===0&&tn("click",document,xd,!0)})):e(),mt(Gr)}const Iy=K(void 0);let Gi=0;function wd(){Iy.value=Date.now()}let Sd=!0;function uh(e){if(!Wa)return mt(K(!1));const n=K(!1);let t=null;function o(){t!==null&&window.clearTimeout(t)}function r(){o(),n.value=!0,t=window.setTimeout(()=>{n.value=!1},e)}Gi===0&&dn("click",window,wd,!0);const i=()=>{Gi+=1,dn("click",window,r,!0)};return Sd&&(Sd=Fa())?(jt(i),kn(()=>{Gi-=1,Gi===0&&tn("click",window,wd,!0),tn("click",window,r,!0),o()})):i(),mt(n)}let Vi=0;const Hy=typeof window<"u"&&window.matchMedia!==void 0,Oo=K(null);let yt,Eo;function fa(e){e.matches&&(Oo.value="dark")}function ha(e){e.matches&&(Oo.value="light")}function _y(){yt=window.matchMedia("(prefers-color-scheme: dark)"),Eo=window.matchMedia("(prefers-color-scheme: light)"),yt.matches?Oo.value="dark":Eo.matches?Oo.value="light":Oo.value=null,yt.addEventListener?(yt.addEventListener("change",fa),Eo.addEventListener("change",ha)):yt.addListener&&(yt.addListener(fa),Eo.addListener(ha))}function Ey(){"removeEventListener"in yt?(yt.removeEventListener("change",fa),Eo.removeEventListener("change",ha)):"removeListener"in yt&&(yt.removeListener(fa),Eo.removeListener(ha)),yt=void 0,Eo=void 0}let Td=!0;function zy(){return Hy&&(Vi===0&&_y(),Td&&(Td=Fa())&&(jt(()=>{Vi+=1}),kn(()=>{Vi-=1,Vi===0&&Ey()}))),mt(Oo)}function Jl(e,n){return pn(e,t=>{t!==void 0&&(n.value=t)}),G(()=>e.value===void 0?n.value:e.value)}function Ci(){const e=K(!1);return Kn(()=>{e.value=!0}),mt(e)}function fh(e,n){return G(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const My=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Ly(){return My}const Oy={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function By(e){return`(min-width: ${e}px)`}const Lr={};function Fy(e=Oy){if(!Wa)return G(()=>[]);if(typeof window.matchMedia!="function")return G(()=>[]);const n=K({}),t=Object.keys(e),o=(r,i)=>{r.matches?n.value[i]=!0:n.value[i]=!1};return t.forEach(r=>{const i=e[r];let a,s;Lr[i]===void 0?(a=window.matchMedia(By(i)),a.addEventListener?a.addEventListener("change",l=>{s.forEach(c=>{c(l,r)})}):a.addListener&&a.addListener(l=>{s.forEach(c=>{c(l,r)})}),s=new Set,Lr[i]={mql:a,cbs:s}):(a=Lr[i].mql,s=Lr[i].cbs),s.add(o),a.matches&&s.forEach(l=>{l(a,r)})}),kn(()=>{t.forEach(r=>{const{cbs:i}=Lr[e[r]];i.has(o)&&i.delete(o)})}),G(()=>{const{value:r}=n;return t.filter(i=>r[i])})}function Wy(e={},n){const t=po({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(c=>{if(c!==l.key)return;const d=o[c];if(typeof d=="function")d(l);else{const{stop:u=!1,prevent:p=!1}=d;u&&l.stopPropagation(),p&&l.preventDefault(),d.handler(l)}})},a=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==l.key)return;const d=r[c];if(typeof d=="function")d(l);else{const{stop:u=!1,prevent:p=!1}=d;u&&l.stopPropagation(),p&&l.preventDefault(),d.handler(l)}})},s=()=>{(n===void 0||n.value)&&(dn("keydown",document,i),dn("keyup",document,a)),n!==void 0&&pn(n,l=>{l?(dn("keydown",document,i),dn("keyup",document,a)):(tn("keydown",document,i),tn("keyup",document,a))})};return Fa()?(jt(s),kn(()=>{(n===void 0||n.value)&&(tn("keydown",document,i),tn("keyup",document,a))})):s(),mt(t)}const jy="n-internal-select-menu-body",ja="n-modal-body",hh="n-modal",Na="n-drawer-body",wi="n-popover-body",ph="__disabled__";function mr(e){const n=Re(ja,null),t=Re(Na,null),o=Re(wi,null),r=Re(jy,null),i=K();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};Kn(()=>{dn("fullscreenchange",document,a)}),kn(()=>{tn("fullscreenchange",document,a)})}return $n(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?ph:s===!0?i.value||"body":s:n!=null&&n.value?(a=n.value.$el)!==null&&a!==void 0?a:n.value:t!=null&&t.value?t.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:s??(i.value||"body")})}mr.tdkey=ph;mr.propTo={type:[String,Object,Boolean],default:void 0};function al(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return o()}function sl(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(Nn(String(o)));return}if(Array.isArray(o)){sl(o,n,t);return}if(o.type===Je){if(o.children===null)return;Array.isArray(o.children)&&sl(o.children,n,t)}else o.type!==Vn&&t.push(o)}}),t}function kd(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const r=sl(o());if(r.length===1)return r[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let Jt=null;function mh(){if(Jt===null&&(Jt=document.getElementById("v-binder-view-measurer"),Jt===null)){Jt=document.createElement("div"),Jt.id="v-binder-view-measurer";const{style:e}=Jt;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Jt)}return Jt.getBoundingClientRect()}function Ny(e,n){const t=mh();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function ks(e){const n=e.getBoundingClientRect(),t=mh();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function Gy(e){return e.nodeType===9?null:e.parentNode}function gh(e){if(e===null)return null;const n=Gy(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:o,overflowY:r}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+r+o))return n}return gh(n)}const Vy=me({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;Ye("VBinder",(n=Nt())===null||n===void 0?void 0:n.proxy);const t=Re("VBinder",null),o=K(null),r=g=>{o.value=g,t&&e.syncTargetWithParent&&t.setTargetRef(g)};let i=[];const a=()=>{let g=o.value;for(;g=gh(g),g!==null;)i.push(g);for(const S of i)dn("scroll",S,u,!0)},s=()=>{for(const g of i)tn("scroll",g,u,!0);i=[]},l=new Set,c=g=>{l.size===0&&a(),l.has(g)||l.add(g)},d=g=>{l.has(g)&&l.delete(g),l.size===0&&s()},u=()=>{Yf(p)},p=()=>{l.forEach(g=>g())},b=new Set,h=g=>{b.size===0&&dn("resize",window,m),b.has(g)||b.add(g)},v=g=>{b.has(g)&&b.delete(g),b.size===0&&tn("resize",window,m)},m=()=>{b.forEach(g=>g())};return kn(()=>{tn("resize",window,m),s()}),{targetRef:o,setTargetRef:r,addScrollListener:c,removeScrollListener:d,addResizeListener:h,removeResizeListener:v}},render(){return al("binder",this.$slots)}}),bh=Vy,vh=me({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=Re("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?lo(kd("follower",this.$slots),[[n]]):kd("follower",this.$slots)}}),Qo="@@mmoContext",Ky={mounted(e,{value:n}){e[Qo]={handler:void 0},typeof n=="function"&&(e[Qo].handler=n,dn("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[Qo];typeof n=="function"?t.handler?t.handler!==n&&(tn("mousemoveoutside",e,t.handler),t.handler=n,dn("mousemoveoutside",e,n)):(e[Qo].handler=n,dn("mousemoveoutside",e,n)):t.handler&&(tn("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[Qo];n&&tn("mousemoveoutside",e,n),e[Qo].handler=void 0}},Uy=Ky,er="@@coContext",qy={mounted(e,{value:n,modifiers:t}){e[er]={handler:void 0},typeof n=="function"&&(e[er].handler=n,dn("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const o=e[er];typeof n=="function"?o.handler?o.handler!==n&&(tn("clickoutside",e,o.handler,{capture:t.capture}),o.handler=n,dn("clickoutside",e,n,{capture:t.capture})):(e[er].handler=n,dn("clickoutside",e,n,{capture:t.capture})):o.handler&&(tn("clickoutside",e,o.handler,{capture:t.capture}),o.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[er];t&&tn("clickoutside",e,t,{capture:n.capture}),e[er].handler=void 0}},ll=qy;function Zy(e,n){console.error(`[vdirs/${e}]: ${n}`)}class Xy{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:o}=this;if(t!==void 0){n.style.zIndex=`${t}`,o.delete(n);return}const{nextZIndex:r}=this;o.has(n)&&o.get(n)+1===this.nextZIndex||(n.style.zIndex=`${r}`,o.set(n,r),this.nextZIndex=r+1,this.squashState())}unregister(n,t){const{elementZIndex:o}=this;o.has(n)?o.delete(n):t===void 0&&Zy("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,o)=>t[1]-o[1]),this.nextZIndex=2e3,n.forEach(t=>{const o=t[0],r=this.nextZIndex++;`${r}`!==o.style.zIndex&&(o.style.zIndex=`${r}`)})}}const Ps=new Xy,nr="@@ziContext",Jy={mounted(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t;e[nr]={enabled:!!r,initialized:!1},r&&(Ps.ensureZIndex(e,o),e[nr].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t,i=e[nr].enabled;r&&!i&&(Ps.ensureZIndex(e,o),e[nr].initialized=!0),e[nr].enabled=!!r},unmounted(e,n){if(!e[nr].initialized)return;const{value:t={}}=n,{zIndex:o}=t;Ps.unregister(e,o)}},Yl=Jy,yh=Symbol("@css-render/vue3-ssr");function Yy(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function Qy(e,n){const t=Re(yh,null);if(t===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:o,ids:r}=t;r.has(e)||o!==null&&(r.add(e),o.push(Yy(e,n)))}const ex=typeof document<"u";function Si(){if(ex)return;const e=Re(yh,null);if(e!==null)return{adapter:Qy,context:e}}function Pd(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c:Ki}=rh(),nx="vueuc-style";function $d(e){return typeof e=="string"?document.querySelector(e):e()}const xh=me({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:Sy(Xe(e,"show")),mergedTo:G(()=>{const{to:n}=e;return n??"body"})}},render(){return this.showTeleport?this.disabled?al("lazy-teleport",this.$slots):x(_a,{disabled:this.disabled,to:this.mergedTo},al("lazy-teleport",this.$slots)):null}}),Ui={top:"bottom",bottom:"top",left:"right",right:"left"},Ad={start:"end",center:"center",end:"start"},$s={top:"height",bottom:"height",left:"width",right:"width"},tx={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},ox={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},rx={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Rd={top:!0,bottom:!1,left:!0,right:!1},Dd={top:"end",bottom:"start",left:"end",right:"start"};function ix(e,n,t,o,r,i){if(!r||i)return{placement:e,top:0,left:0};const[a,s]=e.split("-");let l=s??"center",c={top:0,left:0};const d=(b,h,v)=>{let m=0,g=0;const S=t[b]-n[h]-n[b];return S>0&&o&&(v?g=Rd[h]?S:-S:m=Rd[h]?S:-S),{left:m,top:g}},u=a==="left"||a==="right";if(l!=="center"){const b=rx[e],h=Ui[b],v=$s[b];if(t[v]>n[v]){if(n[b]+n[v]<t[v]){const m=(t[v]-n[v])/2;n[b]<m||n[h]<m?n[b]<n[h]?(l=Ad[s],c=d(v,h,u)):c=d(v,b,u):l="center"}}else t[v]<n[v]&&n[h]<0&&n[b]>n[h]&&(l=Ad[s])}else{const b=a==="bottom"||a==="top"?"left":"top",h=Ui[b],v=$s[b],m=(t[v]-n[v])/2;(n[b]<m||n[h]<m)&&(n[b]>n[h]?(l=Dd[b],c=d(v,b,u)):(l=Dd[h],c=d(v,h,u)))}let p=a;return n[a]<t[$s[a]]&&n[a]<n[Ui[a]]&&(p=Ui[a]),{placement:l!=="center"?`${p}-${l}`:p,left:c.left,top:c.top}}function ax(e,n){return n?ox[e]:tx[e]}function sx(e,n,t,o,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}const lx=Ki([Ki(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Ki(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Ki("> *",{pointerEvents:"all"})])]),Ch=me({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=Re("VBinder"),t=$n(()=>e.enabled!==void 0?e.enabled:e.show),o=K(null),r=K(null),i=()=>{const{syncTrigger:p}=e;p.includes("scroll")&&n.addScrollListener(l),p.includes("resize")&&n.addResizeListener(l)},a=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};Kn(()=>{t.value&&(l(),i())});const s=Si();lx.mount({id:"vueuc/binder",head:!0,anchorMetaName:nx,ssr:s}),kn(()=>{a()}),ky(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const p=o.value;if(p===null)return;const b=n.targetRef,{x:h,y:v,overlap:m}=e,g=h!==void 0&&v!==void 0?Ny(h,v):ks(b);p.style.setProperty("--v-target-width",`${Math.round(g.width)}px`),p.style.setProperty("--v-target-height",`${Math.round(g.height)}px`);const{width:S,minWidth:_,placement:k,internalShift:T,flip:R}=e;p.setAttribute("v-placement",k),m?p.setAttribute("v-overlap",""):p.removeAttribute("v-overlap");const{style:y}=p;S==="target"?y.width=`${g.width}px`:S!==void 0?y.width=S:y.width="",_==="target"?y.minWidth=`${g.width}px`:_!==void 0?y.minWidth=_:y.minWidth="";const w=ks(p),I=ks(r.value),{left:H,top:U,placement:z}=ix(k,g,w,T,R,m),te=ax(z,m),{left:L,top:M,transform:se}=sx(z,I,g,U,H,m);p.setAttribute("v-placement",z),p.style.setProperty("--v-offset-left",`${Math.round(H)}px`),p.style.setProperty("--v-offset-top",`${Math.round(U)}px`),p.style.transform=`translateX(${L}) translateY(${M}) ${se}`,p.style.setProperty("--v-transform-origin",te),p.style.transformOrigin=te};pn(t,p=>{p?(i(),c()):a()});const c=()=>{Gn().then(l).catch(p=>console.error(p))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(p=>{pn(Xe(e,p),l)}),["teleportDisabled"].forEach(p=>{pn(Xe(e,p),c)}),pn(Xe(e,"syncTrigger"),p=>{p.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),p.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const d=Ci(),u=$n(()=>{const{to:p}=e;if(p!==void 0)return p;d.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:r,followerRef:o,mergedTo:u,syncPosition:l}},render(){return x(xh,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=x("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[x("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?lo(t,[[Yl,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var Bo=[],cx=function(){return Bo.some(function(e){return e.activeTargets.length>0})},dx=function(){return Bo.some(function(e){return e.skippedTargets.length>0})},Id="ResizeObserver loop completed with undelivered notifications.",ux=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Id}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Id),window.dispatchEvent(e)},pi;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(pi||(pi={}));var Fo=function(e){return Object.freeze(e)},fx=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,Fo(this)}return e}(),wh=function(){function e(n,t,o,r){return this.x=n,this.y=t,this.width=o,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Fo(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,o=n.y,r=n.top,i=n.right,a=n.bottom,s=n.left,l=n.width,c=n.height;return{x:t,y:o,top:r,right:i,bottom:a,left:s,width:l,height:c}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),Ql=function(e){return e instanceof SVGElement&&"getBBox"in e},Sh=function(e){if(Ql(e)){var n=e.getBBox(),t=n.width,o=n.height;return!t&&!o}var r=e,i=r.offsetWidth,a=r.offsetHeight;return!(i||a||e.getClientRects().length)},Hd=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},hx=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Yr=typeof window<"u"?window:{},qi=new WeakMap,_d=/auto|scroll/,px=/^tb|vertical/,mx=/msie|trident/i.test(Yr.navigator&&Yr.navigator.userAgent),Pt=function(e){return parseFloat(e||"0")},dr=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new fx((t?n:e)||0,(t?e:n)||0)},Ed=Fo({devicePixelContentBoxSize:dr(),borderBoxSize:dr(),contentBoxSize:dr(),contentRect:new wh(0,0,0,0)}),Th=function(e,n){if(n===void 0&&(n=!1),qi.has(e)&&!n)return qi.get(e);if(Sh(e))return qi.set(e,Ed),Ed;var t=getComputedStyle(e),o=Ql(e)&&e.ownerSVGElement&&e.getBBox(),r=!mx&&t.boxSizing==="border-box",i=px.test(t.writingMode||""),a=!o&&_d.test(t.overflowY||""),s=!o&&_d.test(t.overflowX||""),l=o?0:Pt(t.paddingTop),c=o?0:Pt(t.paddingRight),d=o?0:Pt(t.paddingBottom),u=o?0:Pt(t.paddingLeft),p=o?0:Pt(t.borderTopWidth),b=o?0:Pt(t.borderRightWidth),h=o?0:Pt(t.borderBottomWidth),v=o?0:Pt(t.borderLeftWidth),m=u+c,g=l+d,S=v+b,_=p+h,k=s?e.offsetHeight-_-e.clientHeight:0,T=a?e.offsetWidth-S-e.clientWidth:0,R=r?m+S:0,y=r?g+_:0,w=o?o.width:Pt(t.width)-R-T,I=o?o.height:Pt(t.height)-y-k,H=w+m+T+S,U=I+g+k+_,z=Fo({devicePixelContentBoxSize:dr(Math.round(w*devicePixelRatio),Math.round(I*devicePixelRatio),i),borderBoxSize:dr(H,U,i),contentBoxSize:dr(w,I,i),contentRect:new wh(u,l,w,I)});return qi.set(e,z),z},kh=function(e,n,t){var o=Th(e,t),r=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(n){case pi.DEVICE_PIXEL_CONTENT_BOX:return a;case pi.BORDER_BOX:return r;default:return i}},gx=function(){function e(n){var t=Th(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=Fo([t.borderBoxSize]),this.contentBoxSize=Fo([t.contentBoxSize]),this.devicePixelContentBoxSize=Fo([t.devicePixelContentBoxSize])}return e}(),Ph=function(e){if(Sh(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},bx=function(){var e=1/0,n=[];Bo.forEach(function(a){if(a.activeTargets.length!==0){var s=[];a.activeTargets.forEach(function(c){var d=new gx(c.target),u=Ph(c.target);s.push(d),c.lastReportedSize=kh(c.target,c.observedBox),u<e&&(e=u)}),n.push(function(){a.callback.call(a.observer,s,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var t=0,o=n;t<o.length;t++){var r=o[t];r()}return e},zd=function(e){Bo.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(Ph(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},vx=function(){var e=0;for(zd(e);cx();)e=bx(),zd(e);return dx()&&ux(),e>0},As,$h=[],yx=function(){return $h.splice(0).forEach(function(e){return e()})},xx=function(e){if(!As){var n=0,t=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return yx()}).observe(t,o),As=function(){t.textContent="".concat(n?n--:n++)}}$h.push(e),As()},Cx=function(e){xx(function(){requestAnimationFrame(e)})},aa=0,wx=function(){return!!aa},Sx=250,Tx={attributes:!0,characterData:!0,childList:!0,subtree:!0},Md=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Ld=function(e){return e===void 0&&(e=0),Date.now()+e},Rs=!1,kx=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=Sx),!Rs){Rs=!0;var o=Ld(n);Cx(function(){var r=!1;try{r=vx()}finally{if(Rs=!1,n=o-Ld(),!wx())return;r?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,Tx)};document.body?t():Yr.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Md.forEach(function(t){return Yr.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),Md.forEach(function(t){return Yr.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),cl=new kx,Od=function(e){!aa&&e>0&&cl.start(),aa+=e,!aa&&cl.stop()},Px=function(e){return!Ql(e)&&!hx(e)&&getComputedStyle(e).display==="inline"},$x=function(){function e(n,t){this.target=n,this.observedBox=t||pi.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=kh(this.target,this.observedBox,!0);return Px(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),Ax=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),Zi=new WeakMap,Bd=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},Xi=function(){function e(){}return e.connect=function(n,t){var o=new Ax(n,t);Zi.set(n,o)},e.observe=function(n,t,o){var r=Zi.get(n),i=r.observationTargets.length===0;Bd(r.observationTargets,t)<0&&(i&&Bo.push(r),r.observationTargets.push(new $x(t,o&&o.box)),Od(1),cl.schedule())},e.unobserve=function(n,t){var o=Zi.get(n),r=Bd(o.observationTargets,t),i=o.observationTargets.length===1;r>=0&&(i&&Bo.splice(Bo.indexOf(o),1),o.observationTargets.splice(r,1),Od(-1))},e.disconnect=function(n){var t=this,o=Zi.get(n);o.observationTargets.slice().forEach(function(r){return t.unobserve(n,r.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),Rx=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Xi.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Hd(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Xi.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Hd(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Xi.unobserve(this,n)},e.prototype.disconnect=function(){Xi.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Dx{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Rx)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const o=this.elHandlersMap.get(t.target);o!==void 0&&o(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const Fd=new Dx,pa=me({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=Nt().proxy;function o(r){const{onResize:i}=e;i!==void 0&&i(r)}Kn(()=>{const r=t.$el;if(r===void 0){Pd("resize-observer","$el does not exist.");return}if(r.nextElementSibling!==r.nextSibling&&r.nodeType===3&&r.nodeValue!==""){Pd("resize-observer","$el can not be observed (it may be a text node).");return}r.nextElementSibling!==null&&(Fd.registerHandler(r.nextElementSibling,o),n=!0)}),kn(()=>{n&&Fd.unregisterHandler(t.$el.nextElementSibling)})},render(){return Pv(this.$slots,"default")}});function Ah(e){return e instanceof HTMLElement}function Rh(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(Ah(t)&&(Ih(t)||Rh(t)))return!0}return!1}function Dh(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(Ah(t)&&(Ih(t)||Dh(t)))return!0}return!1}function Ih(e){if(!Ix(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function Ix(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let Or=[];const Hh=me({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=La(),t=K(null),o=K(null);let r=!1,i=!1;const a=typeof document>"u"?null:document.activeElement;function s(){return Or[Or.length-1]===n}function l(m){var g;m.code==="Escape"&&s()&&((g=e.onEsc)===null||g===void 0||g.call(e,m))}Kn(()=>{pn(()=>e.active,m=>{m?(u(),dn("keydown",document,l)):(tn("keydown",document,l),r&&p())},{immediate:!0})}),kn(()=>{tn("keydown",document,l),r&&p()});function c(m){if(!i&&s()){const g=d();if(g===null||g.contains(di(m)))return;b("first")}}function d(){const m=t.value;if(m===null)return null;let g=m;for(;g=g.nextSibling,!(g===null||g instanceof Element&&g.tagName==="DIV"););return g}function u(){var m;if(!e.disabled){if(Or.push(n),e.autoFocus){const{initialFocusTo:g}=e;g===void 0?b("first"):(m=$d(g))===null||m===void 0||m.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",c,!0)}}function p(){var m;if(e.disabled||(document.removeEventListener("focus",c,!0),Or=Or.filter(S=>S!==n),s()))return;const{finalFocusTo:g}=e;g!==void 0?(m=$d(g))===null||m===void 0||m.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&a instanceof HTMLElement&&(i=!0,a.focus({preventScroll:!0}),i=!1)}function b(m){if(s()&&e.active){const g=t.value,S=o.value;if(g!==null&&S!==null){const _=d();if(_==null||_===S){i=!0,g.focus({preventScroll:!0}),i=!1;return}i=!0;const k=m==="first"?Rh(_):Dh(_);i=!1,k||(i=!0,g.focus({preventScroll:!0}),i=!1)}}}function h(m){if(i)return;const g=d();g!==null&&(m.relatedTarget!==null&&g.contains(m.relatedTarget)?b("last"):b("first"))}function v(m){i||(m.relatedTarget!==null&&m.relatedTarget===t.value?b("last"):b("first"))}return{focusableStartRef:t,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:h,handleEndFocus:v}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return x(Je,null,[x("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),x("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});let tr=0,Wd="",jd="",Nd="",Gd="";const Vd=K("0px");function Hx(e){if(typeof document>"u")return;const n=document.documentElement;let t,o=!1;const r=()=>{n.style.marginRight=Wd,n.style.overflow=jd,n.style.overflowX=Nd,n.style.overflowY=Gd,Vd.value="0px"};Kn(()=>{t=pn(e,i=>{if(i){if(!tr){const a=window.innerWidth-n.offsetWidth;a>0&&(Wd=n.style.marginRight,n.style.marginRight=`${a}px`,Vd.value=`${a}px`),jd=n.style.overflow,Nd=n.style.overflowX,Gd=n.style.overflowY,n.style.overflow="hidden",n.style.overflowX="hidden",n.style.overflowY="hidden"}o=!0,tr++}else tr--,tr||r(),o=!1},{immediate:!0})}),kn(()=>{t==null||t(),o&&(tr--,tr||r(),o=!1)})}const ec=K(!1),Kd=()=>{ec.value=!0},Ud=()=>{ec.value=!1};let Br=0;const _x=()=>(mo&&(jt(()=>{Br||(window.addEventListener("compositionstart",Kd),window.addEventListener("compositionend",Ud)),Br++}),kn(()=>{Br<=1?(window.removeEventListener("compositionstart",Kd),window.removeEventListener("compositionend",Ud),Br=0):Br--})),ec);function _h(e){const n={isDeactivated:!1};let t=!1;return $f(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),Gl(()=>{n.isDeactivated=!0,t||(t=!0)}),n}const qd="n-form-item";function Eh(e,{defaultSize:n="medium",mergedSize:t,mergedDisabled:o}={}){const r=Re(qd,null);Ye(qd,null);const i=G(t?()=>t(r):()=>{const{size:l}=e;if(l)return l;if(r){const{mergedSize:c}=r;if(c.value!==void 0)return c.value}return n}),a=G(o?()=>o(r):()=>{const{disabled:l}=e;return l!==void 0?l:r?r.disabled.value:!1}),s=G(()=>{const{status:l}=e;return l||(r==null?void 0:r.mergedValidationStatus.value)});return kn(()=>{r&&r.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:a,mergedStatusRef:s,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}var Ex=typeof global=="object"&&global&&global.Object===Object&&global;const zh=Ex;var zx=typeof self=="object"&&self&&self.Object===Object&&self,Mx=zh||zx||Function("return this")();const Ht=Mx;var Lx=Ht.Symbol;const co=Lx;var Mh=Object.prototype,Ox=Mh.hasOwnProperty,Bx=Mh.toString,Fr=co?co.toStringTag:void 0;function Fx(e){var n=Ox.call(e,Fr),t=e[Fr];try{e[Fr]=void 0;var o=!0}catch{}var r=Bx.call(e);return o&&(n?e[Fr]=t:delete e[Fr]),r}var Wx=Object.prototype,jx=Wx.toString;function Nx(e){return jx.call(e)}var Gx="[object Null]",Vx="[object Undefined]",Zd=co?co.toStringTag:void 0;function Go(e){return e==null?e===void 0?Vx:Gx:Zd&&Zd in Object(e)?Fx(e):Nx(e)}function uo(e){return e!=null&&typeof e=="object"}var Kx="[object Symbol]";function nc(e){return typeof e=="symbol"||uo(e)&&Go(e)==Kx}function Lh(e,n){for(var t=-1,o=e==null?0:e.length,r=Array(o);++t<o;)r[t]=n(e[t],t,e);return r}var Ux=Array.isArray;const ct=Ux;var qx=1/0,Xd=co?co.prototype:void 0,Jd=Xd?Xd.toString:void 0;function Oh(e){if(typeof e=="string")return e;if(ct(e))return Lh(e,Oh)+"";if(nc(e))return Jd?Jd.call(e):"";var n=e+"";return n=="0"&&1/e==-qx?"-0":n}function go(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function tc(e){return e}var Zx="[object AsyncFunction]",Xx="[object Function]",Jx="[object GeneratorFunction]",Yx="[object Proxy]";function oc(e){if(!go(e))return!1;var n=Go(e);return n==Xx||n==Jx||n==Zx||n==Yx}var Qx=Ht["__core-js_shared__"];const Ds=Qx;var Yd=function(){var e=/[^.]+$/.exec(Ds&&Ds.keys&&Ds.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function eC(e){return!!Yd&&Yd in e}var nC=Function.prototype,tC=nC.toString;function Vo(e){if(e!=null){try{return tC.call(e)}catch{}try{return e+""}catch{}}return""}var oC=/[\\^$.*+?()[\]{}|]/g,rC=/^\[object .+?Constructor\]$/,iC=Function.prototype,aC=Object.prototype,sC=iC.toString,lC=aC.hasOwnProperty,cC=RegExp("^"+sC.call(lC).replace(oC,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dC(e){if(!go(e)||eC(e))return!1;var n=oc(e)?cC:rC;return n.test(Vo(e))}function uC(e,n){return e==null?void 0:e[n]}function Ko(e,n){var t=uC(e,n);return dC(t)?t:void 0}var fC=Ko(Ht,"WeakMap");const dl=fC;var Qd=Object.create,hC=function(){function e(){}return function(n){if(!go(n))return{};if(Qd)return Qd(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const pC=hC;function mC(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function gC(e,n){var t=-1,o=e.length;for(n||(n=Array(o));++t<o;)n[t]=e[t];return n}var bC=800,vC=16,yC=Date.now;function xC(e){var n=0,t=0;return function(){var o=yC(),r=vC-(o-t);if(t=o,r>0){if(++n>=bC)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function CC(e){return function(){return e}}var wC=function(){try{var e=Ko(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ma=wC;var SC=ma?function(e,n){return ma(e,"toString",{configurable:!0,enumerable:!1,value:CC(n),writable:!0})}:tc;const TC=SC;var kC=xC(TC);const PC=kC;var $C=9007199254740991,AC=/^(?:0|[1-9]\d*)$/;function rc(e,n){var t=typeof e;return n=n??$C,!!n&&(t=="number"||t!="symbol"&&AC.test(e))&&e>-1&&e%1==0&&e<n}function Ga(e,n,t){n=="__proto__"&&ma?ma(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function Ti(e,n){return e===n||e!==e&&n!==n}var RC=Object.prototype,DC=RC.hasOwnProperty;function IC(e,n,t){var o=e[n];(!(DC.call(e,n)&&Ti(o,t))||t===void 0&&!(n in e))&&Ga(e,n,t)}function HC(e,n,t,o){var r=!t;t||(t={});for(var i=-1,a=n.length;++i<a;){var s=n[i],l=o?o(t[s],e[s],s,t,e):void 0;l===void 0&&(l=e[s]),r?Ga(t,s,l):IC(t,s,l)}return t}var eu=Math.max;function _C(e,n,t){return n=eu(n===void 0?e.length-1:n,0),function(){for(var o=arguments,r=-1,i=eu(o.length-n,0),a=Array(i);++r<i;)a[r]=o[n+r];r=-1;for(var s=Array(n+1);++r<n;)s[r]=o[r];return s[n]=t(a),mC(e,this,s)}}function EC(e,n){return PC(_C(e,n,tc),e+"")}var zC=9007199254740991;function ic(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=zC}function Cr(e){return e!=null&&ic(e.length)&&!oc(e)}function MC(e,n,t){if(!go(t))return!1;var o=typeof n;return(o=="number"?Cr(t)&&rc(n,t.length):o=="string"&&n in t)?Ti(t[n],e):!1}function LC(e){return EC(function(n,t){var o=-1,r=t.length,i=r>1?t[r-1]:void 0,a=r>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(r--,i):void 0,a&&MC(t[0],t[1],a)&&(i=r<3?void 0:i,r=1),n=Object(n);++o<r;){var s=t[o];s&&e(n,s,o,i)}return n})}var OC=Object.prototype;function ac(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||OC;return e===t}function BC(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}var FC="[object Arguments]";function nu(e){return uo(e)&&Go(e)==FC}var Bh=Object.prototype,WC=Bh.hasOwnProperty,jC=Bh.propertyIsEnumerable,NC=nu(function(){return arguments}())?nu:function(e){return uo(e)&&WC.call(e,"callee")&&!jC.call(e,"callee")};const ga=NC;function GC(){return!1}var Fh=typeof at=="object"&&at&&!at.nodeType&&at,tu=Fh&&typeof st=="object"&&st&&!st.nodeType&&st,VC=tu&&tu.exports===Fh,ou=VC?Ht.Buffer:void 0,KC=ou?ou.isBuffer:void 0,UC=KC||GC;const ba=UC;var qC="[object Arguments]",ZC="[object Array]",XC="[object Boolean]",JC="[object Date]",YC="[object Error]",QC="[object Function]",e1="[object Map]",n1="[object Number]",t1="[object Object]",o1="[object RegExp]",r1="[object Set]",i1="[object String]",a1="[object WeakMap]",s1="[object ArrayBuffer]",l1="[object DataView]",c1="[object Float32Array]",d1="[object Float64Array]",u1="[object Int8Array]",f1="[object Int16Array]",h1="[object Int32Array]",p1="[object Uint8Array]",m1="[object Uint8ClampedArray]",g1="[object Uint16Array]",b1="[object Uint32Array]",an={};an[c1]=an[d1]=an[u1]=an[f1]=an[h1]=an[p1]=an[m1]=an[g1]=an[b1]=!0;an[qC]=an[ZC]=an[s1]=an[XC]=an[l1]=an[JC]=an[YC]=an[QC]=an[e1]=an[n1]=an[t1]=an[o1]=an[r1]=an[i1]=an[a1]=!1;function v1(e){return uo(e)&&ic(e.length)&&!!an[Go(e)]}function y1(e){return function(n){return e(n)}}var Wh=typeof at=="object"&&at&&!at.nodeType&&at,Qr=Wh&&typeof st=="object"&&st&&!st.nodeType&&st,x1=Qr&&Qr.exports===Wh,Is=x1&&zh.process,C1=function(){try{var e=Qr&&Qr.require&&Qr.require("util").types;return e||Is&&Is.binding&&Is.binding("util")}catch{}}();const ru=C1;var iu=ru&&ru.isTypedArray,w1=iu?y1(iu):v1;const sc=w1;var S1=Object.prototype,T1=S1.hasOwnProperty;function jh(e,n){var t=ct(e),o=!t&&ga(e),r=!t&&!o&&ba(e),i=!t&&!o&&!r&&sc(e),a=t||o||r||i,s=a?BC(e.length,String):[],l=s.length;for(var c in e)(n||T1.call(e,c))&&!(a&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||rc(c,l)))&&s.push(c);return s}function Nh(e,n){return function(t){return e(n(t))}}var k1=Nh(Object.keys,Object);const P1=k1;var $1=Object.prototype,A1=$1.hasOwnProperty;function R1(e){if(!ac(e))return P1(e);var n=[];for(var t in Object(e))A1.call(e,t)&&t!="constructor"&&n.push(t);return n}function lc(e){return Cr(e)?jh(e):R1(e)}function D1(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var I1=Object.prototype,H1=I1.hasOwnProperty;function _1(e){if(!go(e))return D1(e);var n=ac(e),t=[];for(var o in e)o=="constructor"&&(n||!H1.call(e,o))||t.push(o);return t}function Gh(e){return Cr(e)?jh(e,!0):_1(e)}var E1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z1=/^\w*$/;function cc(e,n){if(ct(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||nc(e)?!0:z1.test(e)||!E1.test(e)||n!=null&&e in Object(n)}var M1=Ko(Object,"create");const mi=M1;function L1(){this.__data__=mi?mi(null):{},this.size=0}function O1(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var B1="__lodash_hash_undefined__",F1=Object.prototype,W1=F1.hasOwnProperty;function j1(e){var n=this.__data__;if(mi){var t=n[e];return t===B1?void 0:t}return W1.call(n,e)?n[e]:void 0}var N1=Object.prototype,G1=N1.hasOwnProperty;function V1(e){var n=this.__data__;return mi?n[e]!==void 0:G1.call(n,e)}var K1="__lodash_hash_undefined__";function U1(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=mi&&n===void 0?K1:n,this}function No(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}No.prototype.clear=L1;No.prototype.delete=O1;No.prototype.get=j1;No.prototype.has=V1;No.prototype.set=U1;function q1(){this.__data__=[],this.size=0}function Va(e,n){for(var t=e.length;t--;)if(Ti(e[t][0],n))return t;return-1}var Z1=Array.prototype,X1=Z1.splice;function J1(e){var n=this.__data__,t=Va(n,e);if(t<0)return!1;var o=n.length-1;return t==o?n.pop():X1.call(n,t,1),--this.size,!0}function Y1(e){var n=this.__data__,t=Va(n,e);return t<0?void 0:n[t][1]}function Q1(e){return Va(this.__data__,e)>-1}function ew(e,n){var t=this.__data__,o=Va(t,e);return o<0?(++this.size,t.push([e,n])):t[o][1]=n,this}function Gt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Gt.prototype.clear=q1;Gt.prototype.delete=J1;Gt.prototype.get=Y1;Gt.prototype.has=Q1;Gt.prototype.set=ew;var nw=Ko(Ht,"Map");const gi=nw;function tw(){this.size=0,this.__data__={hash:new No,map:new(gi||Gt),string:new No}}function ow(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Ka(e,n){var t=e.__data__;return ow(n)?t[typeof n=="string"?"string":"hash"]:t.map}function rw(e){var n=Ka(this,e).delete(e);return this.size-=n?1:0,n}function iw(e){return Ka(this,e).get(e)}function aw(e){return Ka(this,e).has(e)}function sw(e,n){var t=Ka(this,e),o=t.size;return t.set(e,n),this.size+=t.size==o?0:1,this}function Vt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Vt.prototype.clear=tw;Vt.prototype.delete=rw;Vt.prototype.get=iw;Vt.prototype.has=aw;Vt.prototype.set=sw;var lw="Expected a function";function dc(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(lw);var t=function(){var o=arguments,r=n?n.apply(this,o):o[0],i=t.cache;if(i.has(r))return i.get(r);var a=e.apply(this,o);return t.cache=i.set(r,a)||i,a};return t.cache=new(dc.Cache||Vt),t}dc.Cache=Vt;var cw=500;function dw(e){var n=dc(e,function(o){return t.size===cw&&t.clear(),o}),t=n.cache;return n}var uw=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fw=/\\(\\)?/g,hw=dw(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(uw,function(t,o,r,i){n.push(r?i.replace(fw,"$1"):o||t)}),n});const pw=hw;function Ua(e){return e==null?"":Oh(e)}function Vh(e,n){return ct(e)?e:cc(e,n)?[e]:pw(Ua(e))}var mw=1/0;function qa(e){if(typeof e=="string"||nc(e))return e;var n=e+"";return n=="0"&&1/e==-mw?"-0":n}function Kh(e,n){n=Vh(n,e);for(var t=0,o=n.length;e!=null&&t<o;)e=e[qa(n[t++])];return t&&t==o?e:void 0}function Uh(e,n,t){var o=e==null?void 0:Kh(e,n);return o===void 0?t:o}function gw(e,n){for(var t=-1,o=n.length,r=e.length;++t<o;)e[r+t]=n[t];return e}var bw=Nh(Object.getPrototypeOf,Object);const qh=bw;var vw="[object Object]",yw=Function.prototype,xw=Object.prototype,Zh=yw.toString,Cw=xw.hasOwnProperty,ww=Zh.call(Object);function Sw(e){if(!uo(e)||Go(e)!=vw)return!1;var n=qh(e);if(n===null)return!0;var t=Cw.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&Zh.call(t)==ww}function Tw(e,n,t){var o=-1,r=e.length;n<0&&(n=-n>r?0:r+n),t=t>r?r:t,t<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(r);++o<r;)i[o]=e[o+n];return i}function kw(e,n,t){var o=e.length;return t=t===void 0?o:t,!n&&t>=o?e:Tw(e,n,t)}var Pw="\\ud800-\\udfff",$w="\\u0300-\\u036f",Aw="\\ufe20-\\ufe2f",Rw="\\u20d0-\\u20ff",Dw=$w+Aw+Rw,Iw="\\ufe0e\\ufe0f",Hw="\\u200d",_w=RegExp("["+Hw+Pw+Dw+Iw+"]");function Xh(e){return _w.test(e)}function Ew(e){return e.split("")}var Jh="\\ud800-\\udfff",zw="\\u0300-\\u036f",Mw="\\ufe20-\\ufe2f",Lw="\\u20d0-\\u20ff",Ow=zw+Mw+Lw,Bw="\\ufe0e\\ufe0f",Fw="["+Jh+"]",ul="["+Ow+"]",fl="\\ud83c[\\udffb-\\udfff]",Ww="(?:"+ul+"|"+fl+")",Yh="[^"+Jh+"]",Qh="(?:\\ud83c[\\udde6-\\uddff]){2}",ep="[\\ud800-\\udbff][\\udc00-\\udfff]",jw="\\u200d",np=Ww+"?",tp="["+Bw+"]?",Nw="(?:"+jw+"(?:"+[Yh,Qh,ep].join("|")+")"+tp+np+")*",Gw=tp+np+Nw,Vw="(?:"+[Yh+ul+"?",ul,Qh,ep,Fw].join("|")+")",Kw=RegExp(fl+"(?="+fl+")|"+Vw+Gw,"g");function Uw(e){return e.match(Kw)||[]}function qw(e){return Xh(e)?Uw(e):Ew(e)}function Zw(e){return function(n){n=Ua(n);var t=Xh(n)?qw(n):void 0,o=t?t[0]:n.charAt(0),r=t?kw(t,1).join(""):n.slice(1);return o[e]()+r}}var Xw=Zw("toUpperCase");const Jw=Xw;function Yw(e,n,t,o){var r=-1,i=e==null?0:e.length;for(o&&i&&(t=e[++r]);++r<i;)t=n(t,e[r],r,e);return t}function Qw(e){return function(n){return e==null?void 0:e[n]}}var eS={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},nS=Qw(eS);const tS=nS;var oS=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rS="\\u0300-\\u036f",iS="\\ufe20-\\ufe2f",aS="\\u20d0-\\u20ff",sS=rS+iS+aS,lS="["+sS+"]",cS=RegExp(lS,"g");function dS(e){return e=Ua(e),e&&e.replace(oS,tS).replace(cS,"")}var uS=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function fS(e){return e.match(uS)||[]}var hS=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function pS(e){return hS.test(e)}var op="\\ud800-\\udfff",mS="\\u0300-\\u036f",gS="\\ufe20-\\ufe2f",bS="\\u20d0-\\u20ff",vS=mS+gS+bS,rp="\\u2700-\\u27bf",ip="a-z\\xdf-\\xf6\\xf8-\\xff",yS="\\xac\\xb1\\xd7\\xf7",xS="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",CS="\\u2000-\\u206f",wS=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ap="A-Z\\xc0-\\xd6\\xd8-\\xde",SS="\\ufe0e\\ufe0f",sp=yS+xS+CS+wS,lp="['’]",au="["+sp+"]",TS="["+vS+"]",cp="\\d+",kS="["+rp+"]",dp="["+ip+"]",up="[^"+op+sp+cp+rp+ip+ap+"]",PS="\\ud83c[\\udffb-\\udfff]",$S="(?:"+TS+"|"+PS+")",AS="[^"+op+"]",fp="(?:\\ud83c[\\udde6-\\uddff]){2}",hp="[\\ud800-\\udbff][\\udc00-\\udfff]",rr="["+ap+"]",RS="\\u200d",su="(?:"+dp+"|"+up+")",DS="(?:"+rr+"|"+up+")",lu="(?:"+lp+"(?:d|ll|m|re|s|t|ve))?",cu="(?:"+lp+"(?:D|LL|M|RE|S|T|VE))?",pp=$S+"?",mp="["+SS+"]?",IS="(?:"+RS+"(?:"+[AS,fp,hp].join("|")+")"+mp+pp+")*",HS="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_S="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ES=mp+pp+IS,zS="(?:"+[kS,fp,hp].join("|")+")"+ES,MS=RegExp([rr+"?"+dp+"+"+lu+"(?="+[au,rr,"$"].join("|")+")",DS+"+"+cu+"(?="+[au,rr+su,"$"].join("|")+")",rr+"?"+su+"+"+lu,rr+"+"+cu,_S,HS,cp,zS].join("|"),"g");function LS(e){return e.match(MS)||[]}function OS(e,n,t){return e=Ua(e),n=t?void 0:n,n===void 0?pS(e)?LS(e):fS(e):e.match(n)||[]}var BS="['’]",FS=RegExp(BS,"g");function WS(e){return function(n){return Yw(OS(dS(n).replace(FS,"")),e,"")}}function jS(){this.__data__=new Gt,this.size=0}function NS(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function GS(e){return this.__data__.get(e)}function VS(e){return this.__data__.has(e)}var KS=200;function US(e,n){var t=this.__data__;if(t instanceof Gt){var o=t.__data__;if(!gi||o.length<KS-1)return o.push([e,n]),this.size=++t.size,this;t=this.__data__=new Vt(o)}return t.set(e,n),this.size=t.size,this}function Dt(e){var n=this.__data__=new Gt(e);this.size=n.size}Dt.prototype.clear=jS;Dt.prototype.delete=NS;Dt.prototype.get=GS;Dt.prototype.has=VS;Dt.prototype.set=US;var gp=typeof at=="object"&&at&&!at.nodeType&&at,du=gp&&typeof st=="object"&&st&&!st.nodeType&&st,qS=du&&du.exports===gp,uu=qS?Ht.Buffer:void 0,fu=uu?uu.allocUnsafe:void 0;function ZS(e,n){if(n)return e.slice();var t=e.length,o=fu?fu(t):new e.constructor(t);return e.copy(o),o}function XS(e,n){for(var t=-1,o=e==null?0:e.length,r=0,i=[];++t<o;){var a=e[t];n(a,t,e)&&(i[r++]=a)}return i}function JS(){return[]}var YS=Object.prototype,QS=YS.propertyIsEnumerable,hu=Object.getOwnPropertySymbols,eT=hu?function(e){return e==null?[]:(e=Object(e),XS(hu(e),function(n){return QS.call(e,n)}))}:JS;const nT=eT;function tT(e,n,t){var o=n(e);return ct(e)?o:gw(o,t(e))}function pu(e){return tT(e,lc,nT)}var oT=Ko(Ht,"DataView");const hl=oT;var rT=Ko(Ht,"Promise");const pl=rT;var iT=Ko(Ht,"Set");const ml=iT;var mu="[object Map]",aT="[object Object]",gu="[object Promise]",bu="[object Set]",vu="[object WeakMap]",yu="[object DataView]",sT=Vo(hl),lT=Vo(gi),cT=Vo(pl),dT=Vo(ml),uT=Vo(dl),Po=Go;(hl&&Po(new hl(new ArrayBuffer(1)))!=yu||gi&&Po(new gi)!=mu||pl&&Po(pl.resolve())!=gu||ml&&Po(new ml)!=bu||dl&&Po(new dl)!=vu)&&(Po=function(e){var n=Go(e),t=n==aT?e.constructor:void 0,o=t?Vo(t):"";if(o)switch(o){case sT:return yu;case lT:return mu;case cT:return gu;case dT:return bu;case uT:return vu}return n});const xu=Po;var fT=Ht.Uint8Array;const va=fT;function hT(e){var n=new e.constructor(e.byteLength);return new va(n).set(new va(e)),n}function pT(e,n){var t=n?hT(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function mT(e){return typeof e.constructor=="function"&&!ac(e)?pC(qh(e)):{}}var gT="__lodash_hash_undefined__";function bT(e){return this.__data__.set(e,gT),this}function vT(e){return this.__data__.has(e)}function ya(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Vt;++n<t;)this.add(e[n])}ya.prototype.add=ya.prototype.push=bT;ya.prototype.has=vT;function yT(e,n){for(var t=-1,o=e==null?0:e.length;++t<o;)if(n(e[t],t,e))return!0;return!1}function xT(e,n){return e.has(n)}var CT=1,wT=2;function bp(e,n,t,o,r,i){var a=t&CT,s=e.length,l=n.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(n);if(c&&d)return c==n&&d==e;var u=-1,p=!0,b=t&wT?new ya:void 0;for(i.set(e,n),i.set(n,e);++u<s;){var h=e[u],v=n[u];if(o)var m=a?o(v,h,u,n,e,i):o(h,v,u,e,n,i);if(m!==void 0){if(m)continue;p=!1;break}if(b){if(!yT(n,function(g,S){if(!xT(b,S)&&(h===g||r(h,g,t,o,i)))return b.push(S)})){p=!1;break}}else if(!(h===v||r(h,v,t,o,i))){p=!1;break}}return i.delete(e),i.delete(n),p}function ST(e){var n=-1,t=Array(e.size);return e.forEach(function(o,r){t[++n]=[r,o]}),t}function TT(e){var n=-1,t=Array(e.size);return e.forEach(function(o){t[++n]=o}),t}var kT=1,PT=2,$T="[object Boolean]",AT="[object Date]",RT="[object Error]",DT="[object Map]",IT="[object Number]",HT="[object RegExp]",_T="[object Set]",ET="[object String]",zT="[object Symbol]",MT="[object ArrayBuffer]",LT="[object DataView]",Cu=co?co.prototype:void 0,Hs=Cu?Cu.valueOf:void 0;function OT(e,n,t,o,r,i,a){switch(t){case LT:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case MT:return!(e.byteLength!=n.byteLength||!i(new va(e),new va(n)));case $T:case AT:case IT:return Ti(+e,+n);case RT:return e.name==n.name&&e.message==n.message;case HT:case ET:return e==n+"";case DT:var s=ST;case _T:var l=o&kT;if(s||(s=TT),e.size!=n.size&&!l)return!1;var c=a.get(e);if(c)return c==n;o|=PT,a.set(e,n);var d=bp(s(e),s(n),o,r,i,a);return a.delete(e),d;case zT:if(Hs)return Hs.call(e)==Hs.call(n)}return!1}var BT=1,FT=Object.prototype,WT=FT.hasOwnProperty;function jT(e,n,t,o,r,i){var a=t&BT,s=pu(e),l=s.length,c=pu(n),d=c.length;if(l!=d&&!a)return!1;for(var u=l;u--;){var p=s[u];if(!(a?p in n:WT.call(n,p)))return!1}var b=i.get(e),h=i.get(n);if(b&&h)return b==n&&h==e;var v=!0;i.set(e,n),i.set(n,e);for(var m=a;++u<l;){p=s[u];var g=e[p],S=n[p];if(o)var _=a?o(S,g,p,n,e,i):o(g,S,p,e,n,i);if(!(_===void 0?g===S||r(g,S,t,o,i):_)){v=!1;break}m||(m=p=="constructor")}if(v&&!m){var k=e.constructor,T=n.constructor;k!=T&&"constructor"in e&&"constructor"in n&&!(typeof k=="function"&&k instanceof k&&typeof T=="function"&&T instanceof T)&&(v=!1)}return i.delete(e),i.delete(n),v}var NT=1,wu="[object Arguments]",Su="[object Array]",Ji="[object Object]",GT=Object.prototype,Tu=GT.hasOwnProperty;function VT(e,n,t,o,r,i){var a=ct(e),s=ct(n),l=a?Su:xu(e),c=s?Su:xu(n);l=l==wu?Ji:l,c=c==wu?Ji:c;var d=l==Ji,u=c==Ji,p=l==c;if(p&&ba(e)){if(!ba(n))return!1;a=!0,d=!1}if(p&&!d)return i||(i=new Dt),a||sc(e)?bp(e,n,t,o,r,i):OT(e,n,l,t,o,r,i);if(!(t&NT)){var b=d&&Tu.call(e,"__wrapped__"),h=u&&Tu.call(n,"__wrapped__");if(b||h){var v=b?e.value():e,m=h?n.value():n;return i||(i=new Dt),r(v,m,t,o,i)}}return p?(i||(i=new Dt),jT(e,n,t,o,r,i)):!1}function uc(e,n,t,o,r){return e===n?!0:e==null||n==null||!uo(e)&&!uo(n)?e!==e&&n!==n:VT(e,n,t,o,uc,r)}var KT=1,UT=2;function qT(e,n,t,o){var r=t.length,i=r,a=!o;if(e==null)return!i;for(e=Object(e);r--;){var s=t[r];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<i;){s=t[r];var l=s[0],c=e[l],d=s[1];if(a&&s[2]){if(c===void 0&&!(l in e))return!1}else{var u=new Dt;if(o)var p=o(c,d,l,e,n,u);if(!(p===void 0?uc(d,c,KT|UT,o,u):p))return!1}}return!0}function vp(e){return e===e&&!go(e)}function ZT(e){for(var n=lc(e),t=n.length;t--;){var o=n[t],r=e[o];n[t]=[o,r,vp(r)]}return n}function yp(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function XT(e){var n=ZT(e);return n.length==1&&n[0][2]?yp(n[0][0],n[0][1]):function(t){return t===e||qT(t,e,n)}}function JT(e,n){return e!=null&&n in Object(e)}function YT(e,n,t){n=Vh(n,e);for(var o=-1,r=n.length,i=!1;++o<r;){var a=qa(n[o]);if(!(i=e!=null&&t(e,a)))break;e=e[a]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&ic(r)&&rc(a,r)&&(ct(e)||ga(e)))}function QT(e,n){return e!=null&&YT(e,n,JT)}var e2=1,n2=2;function t2(e,n){return cc(e)&&vp(n)?yp(qa(e),n):function(t){var o=Uh(t,e);return o===void 0&&o===n?QT(t,e):uc(n,o,e2|n2)}}function o2(e){return function(n){return n==null?void 0:n[e]}}function r2(e){return function(n){return Kh(n,e)}}function i2(e){return cc(e)?o2(qa(e)):r2(e)}function xp(e){return typeof e=="function"?e:e==null?tc:typeof e=="object"?ct(e)?t2(e[0],e[1]):XT(e):i2(e)}function a2(e,n,t,o){for(var r=-1,i=e==null?0:e.length;++r<i;){var a=e[r];n(o,a,t(a),e)}return o}function s2(e){return function(n,t,o){for(var r=-1,i=Object(n),a=o(n),s=a.length;s--;){var l=a[e?s:++r];if(t(i[l],l,i)===!1)break}return n}}var l2=s2();const Cp=l2;function c2(e,n){return e&&Cp(e,n,lc)}function d2(e,n){return function(t,o){if(t==null)return t;if(!Cr(t))return e(t,o);for(var r=t.length,i=n?r:-1,a=Object(t);(n?i--:++i<r)&&o(a[i],i,a)!==!1;);return t}}var u2=d2(c2);const wp=u2;function f2(e,n,t,o){return wp(e,function(r,i,a){n(o,r,t(r),a)}),o}function h2(e,n){return function(t,o){var r=ct(t)?a2:f2,i=n?n():{};return r(t,e,xp(o),i)}}function gl(e,n,t){(t!==void 0&&!Ti(e[n],t)||t===void 0&&!(n in e))&&Ga(e,n,t)}function p2(e){return uo(e)&&Cr(e)}function bl(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function m2(e){return HC(e,Gh(e))}function g2(e,n,t,o,r,i,a){var s=bl(e,t),l=bl(n,t),c=a.get(l);if(c){gl(e,t,c);return}var d=i?i(s,l,t+"",e,n,a):void 0,u=d===void 0;if(u){var p=ct(l),b=!p&&ba(l),h=!p&&!b&&sc(l);d=l,p||b||h?ct(s)?d=s:p2(s)?d=gC(s):b?(u=!1,d=ZS(l,!0)):h?(u=!1,d=pT(l,!0)):d=[]:Sw(l)||ga(l)?(d=s,ga(s)?d=m2(s):(!go(s)||oc(s))&&(d=mT(l))):u=!1}u&&(a.set(l,d),r(d,l,o,i,a),a.delete(l)),gl(e,t,d)}function Sp(e,n,t,o,r){e!==n&&Cp(n,function(i,a){if(r||(r=new Dt),go(i))g2(e,n,a,t,Sp,o,r);else{var s=o?o(bl(e,a),i,a+"",e,n,r):void 0;s===void 0&&(s=i),gl(e,a,s)}},Gh)}function b2(e,n){var t=-1,o=Cr(e)?Array(e.length):[];return wp(e,function(r,i,a){o[++t]=n(r,i,a)}),o}function v2(e,n){var t=ct(e)?Lh:b2;return t(e,xp(n))}var y2=Object.prototype,x2=y2.hasOwnProperty,C2=h2(function(e,n,t){x2.call(e,t)?e[t].push(n):Ga(e,t,[n])});const w2=C2;var S2=WS(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()});const T2=S2;var k2=LC(function(e,n,t){Sp(e,n,t)});const Vr=k2,bo={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:P2,fontFamily:$2,lineHeight:A2}=bo,Tp=O("body",`
 margin: 0;
 font-size: ${P2};
 font-family: ${$2};
 line-height: ${A2};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[O("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),fo="n-config-provider",bi="naive-ui-style";function De(e,n,t,o,r,i){const a=Si(),s=Re(fo,null);if(t){const c=()=>{const d=i==null?void 0:i.value;t.mount({id:d===void 0?n:d+n,head:!0,props:{bPrefix:d?`.${d}-`:void 0},anchorMetaName:bi,ssr:a}),s!=null&&s.preflightStyleDisabled||Tp.mount({id:"n-global",head:!0,anchorMetaName:bi,ssr:a})};a?c():jt(c)}return G(()=>{var c;const{theme:{common:d,self:u,peers:p={}}={},themeOverrides:b={},builtinThemeOverrides:h={}}=r,{common:v,peers:m}=b,{common:g=void 0,[e]:{common:S=void 0,self:_=void 0,peers:k={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:T=void 0,[e]:R={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:y,peers:w={}}=R,I=Vr({},d||S||g||o.common,T,y,v),H=Vr((c=u||_||o.self)===null||c===void 0?void 0:c(I),h,R,b);return{common:I,self:H,peers:Vr({},o.peers,k,p),peerOverrides:Vr({},h.peers,w,m)}})}De.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const kp="n";function un(e={},n={defaultBordered:!0}){const t=Re(fo,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:G(()=>{var o,r;const{bordered:i}=e;return i!==void 0?i:(r=(o=t==null?void 0:t.mergedBorderedRef.value)!==null&&o!==void 0?o:n.defaultBordered)!==null&&r!==void 0?r:!0}),mergedClsPrefixRef:G(()=>(t==null?void 0:t.mergedClsPrefixRef.value)||kp),namespaceRef:G(()=>t==null?void 0:t.mergedNamespaceRef.value)}}const R2={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},D2=R2;function _s(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,o=e.formats[t]||e.formats[e.defaultWidth];return o}}function Wr(e){return function(n,t){var o=t!=null&&t.context?String(t.context):"standalone",r;if(o==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=t!=null&&t.width?String(t.width):i;r=e.formattingValues[a]||e.formattingValues[i]}else{var s=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[l]||e.values[s]}var c=e.argumentCallback?e.argumentCallback(n):n;return r[c]}}function jr(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=n.match(r);if(!i)return null;var a=i[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?H2(s,function(u){return u.test(a)}):I2(s,function(u){return u.test(a)}),c;c=e.valueCallback?e.valueCallback(l):l,c=t.valueCallback?t.valueCallback(c):c;var d=n.slice(a.length);return{value:c,rest:d}}}function I2(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function H2(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function _2(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.match(e.matchPattern);if(!o)return null;var r=o[0],i=n.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;var s=n.slice(r.length);return{value:a,rest:s}}}var E2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},z2=function(n,t,o){var r,i=E2[n];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+r:r+" ago":r};const M2=z2;var L2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},O2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},B2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},F2={date:_s({formats:L2,defaultWidth:"full"}),time:_s({formats:O2,defaultWidth:"full"}),dateTime:_s({formats:B2,defaultWidth:"full"})};const W2=F2;var j2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},N2=function(n,t,o,r){return j2[n]};const G2=N2;var V2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},K2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},U2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},q2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Z2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},X2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},J2=function(n,t){var o=Number(n),r=o%100;if(r>20||r<10)switch(r%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},Y2={ordinalNumber:J2,era:Wr({values:V2,defaultWidth:"wide"}),quarter:Wr({values:K2,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:Wr({values:U2,defaultWidth:"wide"}),day:Wr({values:q2,defaultWidth:"wide"}),dayPeriod:Wr({values:Z2,defaultWidth:"wide",formattingValues:X2,defaultFormattingWidth:"wide"})};const Q2=Y2;var ek=/^(\d+)(th|st|nd|rd)?/i,nk=/\d+/i,tk={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ok={any:[/^b/i,/^(a|c)/i]},rk={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ik={any:[/1/i,/2/i,/3/i,/4/i]},ak={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},sk={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},lk={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ck={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},dk={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},uk={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},fk={ordinalNumber:_2({matchPattern:ek,parsePattern:nk,valueCallback:function(n){return parseInt(n,10)}}),era:jr({matchPatterns:tk,defaultMatchWidth:"wide",parsePatterns:ok,defaultParseWidth:"any"}),quarter:jr({matchPatterns:rk,defaultMatchWidth:"wide",parsePatterns:ik,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:jr({matchPatterns:ak,defaultMatchWidth:"wide",parsePatterns:sk,defaultParseWidth:"any"}),day:jr({matchPatterns:lk,defaultMatchWidth:"wide",parsePatterns:ck,defaultParseWidth:"any"}),dayPeriod:jr({matchPatterns:dk,defaultMatchWidth:"any",parsePatterns:uk,defaultParseWidth:"any"})};const hk=fk;var pk={code:"en-US",formatDistance:M2,formatLong:W2,formatRelative:G2,localize:Q2,match:hk,options:{weekStartsOn:0,firstWeekContainsDate:1}};const mk=pk,gk={name:"en-US",locale:mk},bk=gk;function vk(e){const{mergedLocaleRef:n,mergedDateLocaleRef:t}=Re(fo,null)||{},o=G(()=>{var i,a;return(a=(i=n==null?void 0:n.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:D2[e]});return{dateLocaleRef:G(()=>{var i;return(i=t==null?void 0:t.value)!==null&&i!==void 0?i:bk}),localeRef:o}}function wr(e,n,t){if(!n)return;const o=Si(),r=Re(fo,null),i=()=>{const a=t==null?void 0:t.value;n.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:bi,props:{bPrefix:a?`.${a}-`:void 0},ssr:o}),r!=null&&r.preflightStyleDisabled||Tp.mount({id:"n-global",head:!0,anchorMetaName:bi,ssr:o})};o?i():jt(i)}function Rn(e,n,t,o){var r;t||yi("useThemeClass","cssVarsRef is not passed");const i=(r=Re(fo,null))===null||r===void 0?void 0:r.mergedThemeHashRef,a=K(""),s=Si();let l;const c=`__${e}`,d=()=>{let u=c;const p=n?n.value:void 0,b=i==null?void 0:i.value;b&&(u+="-"+b),p&&(u+="-"+p);const{themeOverrides:h,builtinThemeOverrides:v}=o;h&&(u+="-"+fi(JSON.stringify(h))),v&&(u+="-"+fi(JSON.stringify(v))),a.value=u,l=()=>{const m=t.value;let g="";for(const S in m)g+=`${S}: ${m[S]};`;O(`.${u}`,g).mount({id:u,ssr:s}),l=void 0}};return so(()=>{d()}),{themeClass:a,onRender:()=>{l==null||l()}}}function Uo(e,n,t){if(!n)return;const o=Si(),r=G(()=>{const{value:a}=n;if(!a)return;const s=a[e];if(s)return s}),i=()=>{so(()=>{const{value:a}=t,s=`${a}${e}Rtl`;if(fy(s,o))return;const{value:l}=r;l&&l.style.mount({id:s,head:!0,anchorMetaName:bi,props:{bPrefix:a?`.${a}-`:void 0},ssr:o})})};return o?i():jt(i),r}function Sr(e,n){return me({name:Jw(e),setup(){var t;const o=(t=Re(fo,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var r;const i=(r=o==null?void 0:o.value)===null||r===void 0?void 0:r[e];return i?i():n}}})}const yk=me({name:"ChevronRight",render(){return x("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),xk=Sr("close",x("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},x("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},x("g",{fill:"currentColor","fill-rule":"nonzero"},x("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Ck=me({name:"Eye",render(){return x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},x("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),x("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),wk=me({name:"EyeOff",render(){return x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},x("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),x("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),x("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),x("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),x("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),fc=Sr("error",x("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},x("g",{"fill-rule":"nonzero"},x("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),xa=Sr("info",x("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},x("g",{"fill-rule":"nonzero"},x("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),hc=Sr("success",x("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},x("g",{"fill-rule":"nonzero"},x("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),pc=Sr("warning",x("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},x("g",{"fill-rule":"nonzero"},x("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),Sk=me({name:"ChevronDown",render(){return x("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Tk=Sr("clear",x("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},x("g",{fill:"currentColor","fill-rule":"nonzero"},x("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Za=me({name:"BaseIconSwitchTransition",setup(e,{slots:n}){const t=Ci();return()=>x(bt,{name:"icon-switch-transition",appear:t.value},n)}}),Pp=me({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function o(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function r(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function a(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const s=e.group?A0:bt;return x(s,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:i,onAfterEnter:a,onBeforeLeave:t,onLeave:o,onAfterLeave:r},n)}}}),kk=ne("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[O("svg",`
 height: 1em;
 width: 1em;
 `)]),ho=me({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){wr("-base-icon",kk,Xe(e,"clsPrefix"))},render(){return x("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Pk=ne("base-close",`
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
`,[Q("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),O("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),zn("disabled",[O("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),O("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),O("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),O("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),O("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),Q("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Q("round",[O("&::before",`
 border-radius: 50%;
 `)])]),Xa=me({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return wr("-base-close",Pk,Xe(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:t,absolute:o,round:r,isButtonTag:i}=e;return x(i?"button":"div",{type:i?"button":void 0,tabindex:t||!e.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:i?void 0:"button",disabled:t,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,t&&`${n}-base-close--disabled`,r&&`${n}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},x(ho,{clsPrefix:n},{default:()=>x(xk,null)}))}}}),{cubicBezierEaseInOut:$k}=bo;function vi({originalTransform:e="",left:n=0,top:t=0,transition:o=`all .3s ${$k} !important`}={}){return[O("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:n,top:t,opacity:0}),O("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:n,top:t,opacity:1}),O("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:t,transition:o})]}const Ak=O([O("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),O("@keyframes loading-layer-rotate",`
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
 `),O("@keyframes loading-left-spin",`
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
 `),O("@keyframes loading-right-spin",`
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
 `),ne("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[F("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[vi()]),F("container",`
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
 `,[F("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),F("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[F("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[F("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),F("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[F("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),F("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[F("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),F("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[vi({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Rk={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},mc=me({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Rk),setup(e){wr("-base-loading",Ak,Xe(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:n,strokeWidth:t,stroke:o,scale:r}=this,i=n/r;return x("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},x(Za,null,{default:()=>this.show?x("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},x("div",{class:`${e}-base-loading__container`},x("div",{class:`${e}-base-loading__container-layer`},x("div",{class:`${e}-base-loading__container-layer-left`},x("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},x("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),x("div",{class:`${e}-base-loading__container-layer-patch`},x("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},x("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),x("div",{class:`${e}-base-loading__container-layer-right`},x("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},x("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n})))))):x("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});function ku(e){return Array.isArray(e)?e:[e]}const vl={STOP:"STOP"};function $p(e,n){const t=n(e);e.children!==void 0&&t!==vl.STOP&&e.children.forEach(o=>$p(o,n))}function Dk(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?a=>{a.isLeaf||(o.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),o}function Ik(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Hk(e){return e.children}function _k(e){return e.key}function Ek(){return!1}function zk(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Mk(e){return e.disabled===!0}function Lk(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function Es(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function zs(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Ok(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function Bk(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function Fk(e){return(e==null?void 0:e.type)==="group"}class Wk extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function jk(e,n,t,o){return Ca(n.concat(e),t,o,!1)}function Nk(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function Gk(e,n,t,o){const r=Ca(n,t,o,!1),i=Ca(e,t,o,!0),a=Nk(e,t),s=[];return r.forEach(l=>{(i.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function Ms(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:l,allowNotLoaded:c}=e;if(!a)return o!==void 0?{checkedKeys:Ok(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Bk(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:d}=n;let u;r!==void 0?u=Gk(r,t,n,c):o!==void 0?u=jk(o,t,n,c):u=Ca(t,n,c,!1);const p=l==="parent",b=l==="child"||s,h=u,v=new Set,m=Math.max.apply(null,Array.from(d.keys()));for(let g=m;g>=0;g-=1){const S=g===0,_=d.get(g);for(const k of _){if(k.isLeaf)continue;const{key:T,shallowLoaded:R}=k;if(b&&R&&k.children.forEach(H=>{!H.disabled&&!H.isLeaf&&H.shallowLoaded&&h.has(H.key)&&h.delete(H.key)}),k.disabled||!R)continue;let y=!0,w=!1,I=!0;for(const H of k.children){const U=H.key;if(!H.disabled){if(I&&(I=!1),h.has(U))w=!0;else if(v.has(U)){w=!0,y=!1;break}else if(y=!1,w)break}}y&&!I?(p&&k.children.forEach(H=>{!H.disabled&&h.has(H.key)&&h.delete(H.key)}),h.add(T)):w&&v.add(T),S&&b&&h.has(T)&&h.delete(T)}}return{checkedKeys:Array.from(h),indeterminateKeys:Array.from(v)}}function Ca(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,a=new Set,s=new Set(e);return e.forEach(l=>{const c=r.get(l);c!==void 0&&$p(c,d=>{if(d.disabled)return vl.STOP;const{key:u}=d;if(!a.has(u)&&(a.add(u),s.add(u),Lk(d.rawNode,i))){if(o)return vl.STOP;if(!t)throw new Wk}})}),s}function Vk(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(n||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function Kk(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function Uk(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function Pu(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?qk:Uk,i={reverse:n==="prev"};let a=!1,s=null;function l(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const d=gc(c,i);d!==null?s=d:l(r(c,t))}else{const d=r(c,!1);if(d!==null)l(d);else{const u=Zk(c);u!=null&&u.isGroup?l(r(u,t)):t&&l(r(c,!0))}}}}return l(e),s}function qk(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function Zk(e){return e.parent}function gc(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,a=t?-1:r,s=t?-1:1;for(let l=i;l!==a;l+=s){const c=o[l];if(!c.disabled&&!c.ignored)if(c.isGroup){const d=gc(c,n);if(d!==null)return d}else return c}}return null}const Xk={getChild(){return this.ignored?null:gc(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Pu(this,"next",e)},getPrev(e={}){return Pu(this,"prev",e)}};function Jk(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),o}function Yk(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Ap(e,n,t,o,r,i=null,a=0){const s=[];return e.forEach((l,c)=>{var d;const u=Object.create(o);if(u.rawNode=l,u.siblings=s,u.level=a,u.index=c,u.isFirstChild=c===0,u.isLastChild=c+1===e.length,u.parent=i,!u.ignored){const p=r(l);Array.isArray(p)&&(u.children=Ap(p,n,t,o,r,u,a+1))}s.push(u),n.set(u.key,u),t.has(a)||t.set(a,[]),(d=t.get(a))===null||d===void 0||d.push(u)}),s}function Qk(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=Mk,getIgnored:a=Ek,getIsGroup:s=Fk,getKey:l=_k}=n,c=(t=n.getChildren)!==null&&t!==void 0?t:Hk,d=n.ignoreEmptyChildren?k=>{const T=c(k);return Array.isArray(T)?T.length?T:null:T}:c,u=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return Ik(this.rawNode,d)},get shallowLoaded(){return zk(this.rawNode,d)},get ignored(){return a(this.rawNode)},contains(k){return Yk(this,k)}},Xk),p=Ap(e,o,r,u,d);function b(k){if(k==null)return null;const T=o.get(k);return T&&!T.isGroup&&!T.ignored?T:null}function h(k){if(k==null)return null;const T=o.get(k);return T&&!T.ignored?T:null}function v(k,T){const R=h(k);return R?R.getPrev(T):null}function m(k,T){const R=h(k);return R?R.getNext(T):null}function g(k){const T=h(k);return T?T.getParent():null}function S(k){const T=h(k);return T?T.getChild():null}const _={treeNodes:p,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:d,getFlattenedNodes(k){return Jk(p,k)},getNode:b,getPrev:v,getNext:m,getParent:g,getChild:S,getFirstAvailableNode(){return Kk(p)},getPath(k,T={}){return Vk(k,T,_)},getCheckedKeys(k,T={}){const{cascade:R=!0,leafOnly:y=!1,checkStrategy:w="all",allowNotLoaded:I=!1}=T;return Ms({checkedKeys:Es(k),indeterminateKeys:zs(k),cascade:R,leafOnly:y,checkStrategy:w,allowNotLoaded:I},_)},check(k,T,R={}){const{cascade:y=!0,leafOnly:w=!1,checkStrategy:I="all",allowNotLoaded:H=!1}=R;return Ms({checkedKeys:Es(T),indeterminateKeys:zs(T),keysToCheck:k==null?[]:ku(k),cascade:y,leafOnly:w,checkStrategy:I,allowNotLoaded:H},_)},uncheck(k,T,R={}){const{cascade:y=!0,leafOnly:w=!1,checkStrategy:I="all",allowNotLoaded:H=!1}=R;return Ms({checkedKeys:Es(T),indeterminateKeys:zs(T),keysToUncheck:k==null?[]:ku(k),cascade:y,leafOnly:w,checkStrategy:I,allowNotLoaded:H},_)},getNonLeafKeys(k={}){return Dk(p,k)}};return _}const he={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},eP=Ft(he.neutralBase),Rp=Ft(he.neutralInvertBase),nP="rgba("+Rp.slice(0,3).join(", ")+", ";function Ge(e){return nP+String(e)+")"}function tP(e){const n=Array.from(Rp);return n[3]=Number(e),ve(eP,n)}const oP=Object.assign(Object.assign({name:"common"},bo),{baseColor:he.neutralBase,primaryColor:he.primaryDefault,primaryColorHover:he.primaryHover,primaryColorPressed:he.primaryActive,primaryColorSuppl:he.primarySuppl,infoColor:he.infoDefault,infoColorHover:he.infoHover,infoColorPressed:he.infoActive,infoColorSuppl:he.infoSuppl,successColor:he.successDefault,successColorHover:he.successHover,successColorPressed:he.successActive,successColorSuppl:he.successSuppl,warningColor:he.warningDefault,warningColorHover:he.warningHover,warningColorPressed:he.warningActive,warningColorSuppl:he.warningSuppl,errorColor:he.errorDefault,errorColorHover:he.errorHover,errorColorPressed:he.errorActive,errorColorSuppl:he.errorSuppl,textColorBase:he.neutralTextBase,textColor1:Ge(he.alpha1),textColor2:Ge(he.alpha2),textColor3:Ge(he.alpha3),textColorDisabled:Ge(he.alpha4),placeholderColor:Ge(he.alpha4),placeholderColorDisabled:Ge(he.alpha5),iconColor:Ge(he.alpha4),iconColorDisabled:Ge(he.alpha5),iconColorHover:Ge(Number(he.alpha4)*1.25),iconColorPressed:Ge(Number(he.alpha4)*.8),opacity1:he.alpha1,opacity2:he.alpha2,opacity3:he.alpha3,opacity4:he.alpha4,opacity5:he.alpha5,dividerColor:Ge(he.alphaDivider),borderColor:Ge(he.alphaBorder),closeIconColorHover:Ge(Number(he.alphaClose)),closeIconColor:Ge(Number(he.alphaClose)),closeIconColorPressed:Ge(Number(he.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:Ge(he.alpha4),clearColorHover:vn(Ge(he.alpha4),{alpha:1.25}),clearColorPressed:vn(Ge(he.alpha4),{alpha:.8}),scrollbarColor:Ge(he.alphaScrollbar),scrollbarColorHover:Ge(he.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Ge(he.alphaProgressRail),railColor:Ge(he.alphaRail),popoverColor:he.neutralPopover,tableColor:he.neutralCard,cardColor:he.neutralCard,modalColor:he.neutralModal,bodyColor:he.neutralBody,tagColor:tP(he.alphaTag),avatarColor:Ge(he.alphaAvatar),invertedColor:he.neutralBase,inputColor:Ge(he.alphaInput),codeColor:Ge(he.alphaCode),tabColor:Ge(he.alphaTab),actionColor:Ge(he.alphaAction),tableHeaderColor:Ge(he.alphaAction),hoverColor:Ge(he.alphaPending),tableColorHover:Ge(he.alphaTablePending),tableColorStriped:Ge(he.alphaTableStriped),pressedColor:Ge(he.alphaPressed),opacityDisabled:he.alphaDisabled,inputColorDisabled:Ge(he.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),le=oP,Ce={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},rP=Ft(Ce.neutralBase),Dp=Ft(Ce.neutralInvertBase),iP="rgba("+Dp.slice(0,3).join(", ")+", ";function $u(e){return iP+String(e)+")"}function On(e){const n=Array.from(Dp);return n[3]=Number(e),ve(rP,n)}const aP=Object.assign(Object.assign({name:"common"},bo),{baseColor:Ce.neutralBase,primaryColor:Ce.primaryDefault,primaryColorHover:Ce.primaryHover,primaryColorPressed:Ce.primaryActive,primaryColorSuppl:Ce.primarySuppl,infoColor:Ce.infoDefault,infoColorHover:Ce.infoHover,infoColorPressed:Ce.infoActive,infoColorSuppl:Ce.infoSuppl,successColor:Ce.successDefault,successColorHover:Ce.successHover,successColorPressed:Ce.successActive,successColorSuppl:Ce.successSuppl,warningColor:Ce.warningDefault,warningColorHover:Ce.warningHover,warningColorPressed:Ce.warningActive,warningColorSuppl:Ce.warningSuppl,errorColor:Ce.errorDefault,errorColorHover:Ce.errorHover,errorColorPressed:Ce.errorActive,errorColorSuppl:Ce.errorSuppl,textColorBase:Ce.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:On(Ce.alpha4),placeholderColor:On(Ce.alpha4),placeholderColorDisabled:On(Ce.alpha5),iconColor:On(Ce.alpha4),iconColorHover:vn(On(Ce.alpha4),{lightness:.75}),iconColorPressed:vn(On(Ce.alpha4),{lightness:.9}),iconColorDisabled:On(Ce.alpha5),opacity1:Ce.alpha1,opacity2:Ce.alpha2,opacity3:Ce.alpha3,opacity4:Ce.alpha4,opacity5:Ce.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:On(Number(Ce.alphaClose)),closeIconColorHover:On(Number(Ce.alphaClose)),closeIconColorPressed:On(Number(Ce.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:On(Ce.alpha4),clearColorHover:vn(On(Ce.alpha4),{lightness:.75}),clearColorPressed:vn(On(Ce.alpha4),{lightness:.9}),scrollbarColor:$u(Ce.alphaScrollbar),scrollbarColorHover:$u(Ce.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:On(Ce.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:Ce.neutralPopover,tableColor:Ce.neutralCard,cardColor:Ce.neutralCard,modalColor:Ce.neutralModal,bodyColor:Ce.neutralBody,tagColor:"#eee",avatarColor:On(Ce.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:On(Ce.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:Ce.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),ce=aP,sP={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Ip=e=>{const{textColorDisabled:n,iconColor:t,textColor2:o,fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s}=e;return Object.assign(Object.assign({},sP),{fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s,textColor:n,iconColor:t,extraTextColor:o})},lP={name:"Empty",common:ce,self:Ip},Kt=lP,cP={name:"Empty",common:le,self:Ip},qo=cP,Hp=e=>{const{scrollbarColor:n,scrollbarColorHover:t}=e;return{color:n,colorHover:t}},dP={name:"Scrollbar",common:ce,self:Hp},Un=dP,uP={name:"Scrollbar",common:le,self:Hp},tt=uP,{cubicBezierEaseInOut:Au}=bo;function bc({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:o=Au,leaveCubicBezier:r=Au}={}){return[O(`&.${e}-transition-enter-active`,{transition:`all ${n} ${o}!important`}),O(`&.${e}-transition-leave-active`,{transition:`all ${t} ${r}!important`}),O(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),O(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const fP=ne("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[O(">",[ne("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[O("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),O(">",[ne("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),O(">, +",[ne("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[Q("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[O(">",[F("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Q("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[O(">",[F("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Q("disabled",[O(">",[F("scrollbar",{pointerEvents:"none"})])]),O(">",[F("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[bc(),O("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),hP=Object.assign(Object.assign({},De.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),_p=me({name:"Scrollbar",props:hP,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:o}=un(e),r=Uo("Scrollbar",o,n),i=K(null),a=K(null),s=K(null),l=K(null),c=K(null),d=K(null),u=K(null),p=K(null),b=K(null),h=K(null),v=K(null),m=K(0),g=K(0),S=K(!1),_=K(!1);let k=!1,T=!1,R,y,w=0,I=0,H=0,U=0;const z=Ly(),te=G(()=>{const{value:Y}=p,{value:pe}=d,{value:ke}=h;return Y===null||pe===null||ke===null?0:Math.min(Y,ke*Y/pe+e.size*1.5)}),L=G(()=>`${te.value}px`),M=G(()=>{const{value:Y}=b,{value:pe}=u,{value:ke}=v;return Y===null||pe===null||ke===null?0:ke*Y/pe+e.size*1.5}),se=G(()=>`${M.value}px`),j=G(()=>{const{value:Y}=p,{value:pe}=m,{value:ke}=d,{value:Le}=h;if(Y===null||ke===null||Le===null)return 0;{const Ue=ke-Y;return Ue?pe/Ue*(Le-te.value):0}}),ie=G(()=>`${j.value}px`),$=G(()=>{const{value:Y}=b,{value:pe}=g,{value:ke}=u,{value:Le}=v;if(Y===null||ke===null||Le===null)return 0;{const Ue=ke-Y;return Ue?pe/Ue*(Le-M.value):0}}),Z=G(()=>`${$.value}px`),Pe=G(()=>{const{value:Y}=p,{value:pe}=d;return Y!==null&&pe!==null&&pe>Y}),He=G(()=>{const{value:Y}=b,{value:pe}=u;return Y!==null&&pe!==null&&pe>Y}),Pn=G(()=>{const{trigger:Y}=e;return Y==="none"||S.value}),Be=G(()=>{const{trigger:Y}=e;return Y==="none"||_.value}),Oe=G(()=>{const{container:Y}=e;return Y?Y():a.value}),Se=G(()=>{const{content:Y}=e;return Y?Y():s.value}),_e=_h(()=>{e.container||Xn({top:m.value,left:g.value})}),Zn=()=>{_e.isDeactivated||oe()},Ae=Y=>{if(_e.isDeactivated)return;const{onResize:pe}=e;pe&&pe(Y),oe()},Xn=(Y,pe)=>{if(!e.scrollable)return;if(typeof Y=="number"){P(pe??0,Y,0,!1,"auto");return}const{left:ke,top:Le,index:Ue,elSize:Cn,position:Sn,behavior:Qe,el:Mn,debounce:mn=!0}=Y;(ke!==void 0||Le!==void 0)&&P(ke??0,Le??0,0,!1,Qe),Mn!==void 0?P(0,Mn.offsetTop,Mn.offsetHeight,mn,Qe):Ue!==void 0&&Cn!==void 0?P(0,Ue*Cn,Cn,mn,Qe):Sn==="bottom"?P(0,Number.MAX_SAFE_INTEGER,0,!1,Qe):Sn==="top"&&P(0,0,0,!1,Qe)},Ze=(Y,pe)=>{if(!e.scrollable)return;const{value:ke}=Oe;ke&&(typeof Y=="object"?ke.scrollBy(Y):ke.scrollBy(Y,pe||0))};function P(Y,pe,ke,Le,Ue){const{value:Cn}=Oe;if(Cn){if(Le){const{scrollTop:Sn,offsetHeight:Qe}=Cn;if(pe>Sn){pe+ke<=Sn+Qe||Cn.scrollTo({left:Y,top:pe+ke-Qe,behavior:Ue});return}}Cn.scrollTo({left:Y,top:pe,behavior:Ue})}}function A(){de(),re(),oe()}function B(){q()}function q(){J(),ae()}function J(){y!==void 0&&window.clearTimeout(y),y=window.setTimeout(()=>{_.value=!1},e.duration)}function ae(){R!==void 0&&window.clearTimeout(R),R=window.setTimeout(()=>{S.value=!1},e.duration)}function de(){R!==void 0&&window.clearTimeout(R),S.value=!0}function re(){y!==void 0&&window.clearTimeout(y),_.value=!0}function ee(Y){const{onScroll:pe}=e;pe&&pe(Y),N()}function N(){const{value:Y}=Oe;Y&&(m.value=Y.scrollTop,g.value=Y.scrollLeft*(r!=null&&r.value?-1:1))}function xe(){const{value:Y}=Se;Y&&(d.value=Y.offsetHeight,u.value=Y.offsetWidth);const{value:pe}=Oe;pe&&(p.value=pe.offsetHeight,b.value=pe.offsetWidth);const{value:ke}=c,{value:Le}=l;ke&&(v.value=ke.offsetWidth),Le&&(h.value=Le.offsetHeight)}function ge(){const{value:Y}=Oe;Y&&(m.value=Y.scrollTop,g.value=Y.scrollLeft*(r!=null&&r.value?-1:1),p.value=Y.offsetHeight,b.value=Y.offsetWidth,d.value=Y.scrollHeight,u.value=Y.scrollWidth);const{value:pe}=c,{value:ke}=l;pe&&(v.value=pe.offsetWidth),ke&&(h.value=ke.offsetHeight)}function oe(){e.scrollable&&(e.useUnifiedContainer?ge():(xe(),N()))}function fe(Y){var pe;return!(!((pe=i.value)===null||pe===void 0)&&pe.contains(di(Y)))}function ye(Y){Y.preventDefault(),Y.stopPropagation(),T=!0,dn("mousemove",window,je,!0),dn("mouseup",window,Me,!0),I=g.value,H=r!=null&&r.value?window.innerWidth-Y.clientX:Y.clientX}function je(Y){if(!T)return;R!==void 0&&window.clearTimeout(R),y!==void 0&&window.clearTimeout(y);const{value:pe}=b,{value:ke}=u,{value:Le}=M;if(pe===null||ke===null)return;const Cn=(r!=null&&r.value?window.innerWidth-Y.clientX-H:Y.clientX-H)*(ke-pe)/(pe-Le),Sn=ke-pe;let Qe=I+Cn;Qe=Math.min(Sn,Qe),Qe=Math.max(Qe,0);const{value:Mn}=Oe;if(Mn){Mn.scrollLeft=Qe*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:mn}=e;mn&&mn(Qe)}}function Me(Y){Y.preventDefault(),Y.stopPropagation(),tn("mousemove",window,je,!0),tn("mouseup",window,Me,!0),T=!1,oe(),fe(Y)&&q()}function Ne(Y){Y.preventDefault(),Y.stopPropagation(),k=!0,dn("mousemove",window,rn,!0),dn("mouseup",window,Jn,!0),w=m.value,U=Y.clientY}function rn(Y){if(!k)return;R!==void 0&&window.clearTimeout(R),y!==void 0&&window.clearTimeout(y);const{value:pe}=p,{value:ke}=d,{value:Le}=te;if(pe===null||ke===null)return;const Cn=(Y.clientY-U)*(ke-pe)/(pe-Le),Sn=ke-pe;let Qe=w+Cn;Qe=Math.min(Sn,Qe),Qe=Math.max(Qe,0);const{value:Mn}=Oe;Mn&&(Mn.scrollTop=Qe)}function Jn(Y){Y.preventDefault(),Y.stopPropagation(),tn("mousemove",window,rn,!0),tn("mouseup",window,Jn,!0),k=!1,oe(),fe(Y)&&q()}so(()=>{const{value:Y}=He,{value:pe}=Pe,{value:ke}=n,{value:Le}=c,{value:Ue}=l;Le&&(Y?Le.classList.remove(`${ke}-scrollbar-rail--disabled`):Le.classList.add(`${ke}-scrollbar-rail--disabled`)),Ue&&(pe?Ue.classList.remove(`${ke}-scrollbar-rail--disabled`):Ue.classList.add(`${ke}-scrollbar-rail--disabled`))}),Kn(()=>{e.container||oe()}),kn(()=>{R!==void 0&&window.clearTimeout(R),y!==void 0&&window.clearTimeout(y),tn("mousemove",window,rn,!0),tn("mouseup",window,Jn,!0)});const Ut=De("Scrollbar","-scrollbar",fP,Un,e,n),ut=G(()=>{const{common:{cubicBezierEaseInOut:Y,scrollbarBorderRadius:pe,scrollbarHeight:ke,scrollbarWidth:Le},self:{color:Ue,colorHover:Cn}}=Ut.value;return{"--n-scrollbar-bezier":Y,"--n-scrollbar-color":Ue,"--n-scrollbar-color-hover":Cn,"--n-scrollbar-border-radius":pe,"--n-scrollbar-width":Le,"--n-scrollbar-height":ke}}),rt=t?Rn("scrollbar",void 0,ut,e):void 0;return Object.assign(Object.assign({},{scrollTo:Xn,scrollBy:Ze,sync:oe,syncUnifiedContainer:ge,handleMouseEnterWrapper:A,handleMouseLeaveWrapper:B}),{mergedClsPrefix:n,rtlEnabled:r,containerScrollTop:m,wrapperRef:i,containerRef:a,contentRef:s,yRailRef:l,xRailRef:c,needYBar:Pe,needXBar:He,yBarSizePx:L,xBarSizePx:se,yBarTopPx:ie,xBarLeftPx:Z,isShowXBar:Pn,isShowYBar:Be,isIos:z,handleScroll:ee,handleContentResize:Zn,handleContainerResize:Ae,handleYScrollMouseDown:Ne,handleXScrollMouseDown:ye,cssVars:t?void 0:ut,themeClass:rt==null?void 0:rt.themeClass,onRender:rt==null?void 0:rt.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:o,rtlEnabled:r,internalHoistYRail:i}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",s=()=>x("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},x(a?pd:bt,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?x("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),l=()=>{var d,u;return(d=this.onRender)===null||d===void 0||d.call(this),x("div",It(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,r&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:o?void 0:this.handleMouseEnterWrapper,onMouseleave:o?void 0:this.handleMouseLeaveWrapper}),[this.container?(u=n.default)===null||u===void 0?void 0:u.call(n):x("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},x(pa,{onResize:this.handleContentResize},{default:()=>x("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:s(),this.xScrollable&&x("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},x(a?pd:bt,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?x("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},c=this.container?l():x(pa,{onResize:this.handleContainerResize},{default:l});return i?x(Je,null,c,s()):c}}),Ja=_p,Ep=_p,pP={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},zp=e=>{const{borderRadius:n,popoverColor:t,textColor3:o,dividerColor:r,textColor2:i,primaryColorPressed:a,textColorDisabled:s,primaryColor:l,opacityDisabled:c,hoverColor:d,fontSizeSmall:u,fontSizeMedium:p,fontSizeLarge:b,fontSizeHuge:h,heightSmall:v,heightMedium:m,heightLarge:g,heightHuge:S}=e;return Object.assign(Object.assign({},pP),{optionFontSizeSmall:u,optionFontSizeMedium:p,optionFontSizeLarge:b,optionFontSizeHuge:h,optionHeightSmall:v,optionHeightMedium:m,optionHeightLarge:g,optionHeightHuge:S,borderRadius:n,color:t,groupHeaderTextColor:o,actionDividerColor:r,optionTextColor:i,optionTextColorPressed:a,optionTextColorDisabled:s,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:d,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:d,actionTextColor:i,loadingColor:l})},mP={name:"InternalSelectMenu",common:ce,peers:{Scrollbar:Un,Empty:Kt},self:zp},ki=mP,gP={name:"InternalSelectMenu",common:le,peers:{Scrollbar:tt,Empty:qo},self:zp},Pi=gP,{cubicBezierEaseIn:Ru,cubicBezierEaseOut:Du}=bo;function Mp({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:o="",originalTransition:r=""}={}){return[O("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${Ru}, transform ${n} ${Ru} ${r&&","+r}`}),O("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${Du}, transform ${n} ${Du} ${r&&","+r}`}),O("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${t})`}),O("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const bP=ne("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),vP=me({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){wr("-base-wave",bP,Xe(e,"clsPrefix"));const n=K(null),t=K(!1);let o=null;return kn(()=>{o!==null&&window.clearTimeout(o)}),{active:t,selfRef:n,play(){o!==null&&(window.clearTimeout(o),t.value=!1,o=null),Gn(()=>{var r;(r=n.value)===null||r===void 0||r.offsetHeight,t.value=!0,o=window.setTimeout(()=>{t.value=!1,o=null},1e3)})}}},render(){const{clsPrefix:e}=this;return x("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),yP={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},Lp=e=>{const{boxShadow2:n,popoverColor:t,textColor2:o,borderRadius:r,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},yP),{fontSize:i,borderRadius:r,color:t,dividerColor:a,textColor:o,boxShadow:n})},xP={name:"Popover",common:ce,self:Lp},vo=xP,CP={name:"Popover",common:le,self:Lp},Zo=CP,Ls={top:"bottom",bottom:"top",left:"right",right:"left"},Tn="var(--n-arrow-height) * 1.414",wP=O([ne("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[O(">",[ne("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),zn("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[zn("scrollable",[zn("show-header-or-footer","padding: var(--n-padding);")])]),F("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),F("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Q("scrollable, show-header-or-footer",[F("content",`
 padding: var(--n-padding);
 `)])]),ne("popover-shared",`
 transform-origin: inherit;
 `,[ne("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[ne("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Tn});
 height: calc(${Tn});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),O("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),O("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),O("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),O("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ht("top-start",`
 top: calc(${Tn} / -2);
 left: calc(${zt("top-start")} - var(--v-offset-left));
 `),ht("top",`
 top: calc(${Tn} / -2);
 transform: translateX(calc(${Tn} / -2)) rotate(45deg);
 left: 50%;
 `),ht("top-end",`
 top: calc(${Tn} / -2);
 right: calc(${zt("top-end")} + var(--v-offset-left));
 `),ht("bottom-start",`
 bottom: calc(${Tn} / -2);
 left: calc(${zt("bottom-start")} - var(--v-offset-left));
 `),ht("bottom",`
 bottom: calc(${Tn} / -2);
 transform: translateX(calc(${Tn} / -2)) rotate(45deg);
 left: 50%;
 `),ht("bottom-end",`
 bottom: calc(${Tn} / -2);
 right: calc(${zt("bottom-end")} + var(--v-offset-left));
 `),ht("left-start",`
 left: calc(${Tn} / -2);
 top: calc(${zt("left-start")} - var(--v-offset-top));
 `),ht("left",`
 left: calc(${Tn} / -2);
 transform: translateY(calc(${Tn} / -2)) rotate(45deg);
 top: 50%;
 `),ht("left-end",`
 left: calc(${Tn} / -2);
 bottom: calc(${zt("left-end")} + var(--v-offset-top));
 `),ht("right-start",`
 right: calc(${Tn} / -2);
 top: calc(${zt("right-start")} - var(--v-offset-top));
 `),ht("right",`
 right: calc(${Tn} / -2);
 transform: translateY(calc(${Tn} / -2)) rotate(45deg);
 top: 50%;
 `),ht("right-end",`
 right: calc(${Tn} / -2);
 bottom: calc(${zt("right-end")} + var(--v-offset-top));
 `),...v2({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),o=t?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",s=`calc((${`var(--v-target-${o}, 0px)`} - ${Tn}) / 2)`,l=zt(r);return O(`[v-placement="${r}"] >`,[ne("popover-shared",[Q("center-arrow",[ne("popover-arrow",`${n}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function zt(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ht(e,n){const t=e.split("-")[0],o=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return O(`[v-placement="${e}"] >`,[ne("popover-shared",`
 margin-${Ls[t]}: var(--n-space);
 `,[Q("show-arrow",`
 margin-${Ls[t]}: var(--n-space-arrow);
 `),Q("overlap",`
 margin: 0;
 `),vy("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${Ls[t]}: auto;
 ${o}
 `,[ne("popover-arrow",n)])])])}const Op=Object.assign(Object.assign({},De.props),{to:mr.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Bp=({arrowStyle:e,clsPrefix:n})=>x("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},x("div",{class:`${n}-popover-arrow`,style:e})),SP=me({name:"PopoverBody",inheritAttrs:!1,props:Op,setup(e,{slots:n,attrs:t}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i}=un(e),a=De("Popover","-popover",wP,vo,e,r),s=K(null),l=Re("NPopover"),c=K(null),d=K(e.show),u=K(!1);so(()=>{const{show:y}=e;y&&!yy()&&!e.internalDeactivateImmediately&&(u.value=!0)});const p=G(()=>{const{trigger:y,onClickoutside:w}=e,I=[],{positionManuallyRef:{value:H}}=l;return H||(y==="click"&&!w&&I.push([ll,k,void 0,{capture:!0}]),y==="hover"&&I.push([Uy,_])),w&&I.push([ll,k,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&u.value)&&I.push([pr,e.show]),I}),b=G(()=>{const y=e.width==="trigger"?void 0:ra(e.width),w=[];y&&w.push({width:y});const{maxWidth:I,minWidth:H}=e;return I&&w.push({maxWidth:ra(I)}),H&&w.push({maxWidth:ra(H)}),i||w.push(h.value),w}),h=G(()=>{const{common:{cubicBezierEaseInOut:y,cubicBezierEaseIn:w,cubicBezierEaseOut:I},self:{space:H,spaceArrow:U,padding:z,fontSize:te,textColor:L,dividerColor:M,color:se,boxShadow:j,borderRadius:ie,arrowHeight:$,arrowOffset:Z,arrowOffsetVertical:Pe}}=a.value;return{"--n-box-shadow":j,"--n-bezier":y,"--n-bezier-ease-in":w,"--n-bezier-ease-out":I,"--n-font-size":te,"--n-text-color":L,"--n-color":se,"--n-divider-color":M,"--n-border-radius":ie,"--n-arrow-height":$,"--n-arrow-offset":Z,"--n-arrow-offset-vertical":Pe,"--n-padding":z,"--n-space":H,"--n-space-arrow":U}}),v=i?Rn("popover",void 0,h,e):void 0;l.setBodyInstance({syncPosition:m}),kn(()=>{l.setBodyInstance(null)}),pn(Xe(e,"show"),y=>{e.animated||(y?d.value=!0:d.value=!1)});function m(){var y;(y=s.value)===null||y===void 0||y.syncPosition()}function g(y){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(y)}function S(y){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(y)}function _(y){e.trigger==="hover"&&!T().contains(di(y))&&l.handleMouseMoveOutside(y)}function k(y){(e.trigger==="click"&&!T().contains(di(y))||e.onClickoutside)&&l.handleClickOutside(y)}function T(){return l.getTriggerElement()}Ye(wi,c),Ye(Na,null),Ye(ja,null);function R(){if(v==null||v.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&u.value))return null;let w;const I=l.internalRenderBodyRef.value,{value:H}=r;if(I)w=I([`${H}-popover-shared`,v==null?void 0:v.themeClass.value,e.overlap&&`${H}-popover-shared--overlap`,e.showArrow&&`${H}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${H}-popover-shared--center-arrow`],c,b.value,g,S);else{const{value:U}=l.extraClassRef,{internalTrapFocus:z}=e,te=!rl(n.header)||!rl(n.footer),L=()=>{var M;const se=te?x(Je,null,_n(n.header,$=>$?x("div",{class:`${H}-popover__header`,style:e.headerStyle},$):null),_n(n.default,$=>$?x("div",{class:`${H}-popover__content`,style:e.contentStyle},n):null),_n(n.footer,$=>$?x("div",{class:`${H}-popover__footer`,style:e.footerStyle},$):null)):e.scrollable?(M=n.default)===null||M===void 0?void 0:M.call(n):x("div",{class:`${H}-popover__content`,style:e.contentStyle},n),j=e.scrollable?x(Ep,{contentClass:te?void 0:`${H}-popover__content`,contentStyle:te?void 0:e.contentStyle},{default:()=>se}):se,ie=e.showArrow?Bp({arrowStyle:e.arrowStyle,clsPrefix:H}):null;return[j,ie]};w=x("div",It({class:[`${H}-popover`,`${H}-popover-shared`,v==null?void 0:v.themeClass.value,U.map(M=>`${H}-${M}`),{[`${H}-popover--scrollable`]:e.scrollable,[`${H}-popover--show-header-or-footer`]:te,[`${H}-popover--raw`]:e.raw,[`${H}-popover-shared--overlap`]:e.overlap,[`${H}-popover-shared--show-arrow`]:e.showArrow,[`${H}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:b.value,onKeydown:l.handleKeydown,onMouseenter:g,onMouseleave:S},t),z?x(Hh,{active:e.show,autoFocus:!0},{default:L}):L())}return lo(w,p.value)}return{displayed:u,namespace:o,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:mr(e),followerEnabled:d,renderContentNode:R}},render(){return x(Ch,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===mr.tdkey},{default:()=>this.animated?x(bt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),TP=Object.keys(Op),kP={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function PP(e,n,t){kP[n].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],i=t[o];r?e.props[o]=(...a)=>{r(...a),i(...a)}:e.props[o]=i})}const $P=Nn("").type,Ya={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:mr.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},AP=Object.assign(Object.assign(Object.assign({},De.props),Ya),{internalOnAfterLeave:Function,internalRenderBody:Function}),wa=me({name:"Popover",inheritAttrs:!1,props:AP,__popover__:!0,setup(e){const n=Ci(),t=K(null),o=G(()=>e.show),r=K(e.defaultShow),i=Jl(o,r),a=$n(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:L}=e;return!!(L!=null&&L())},l=()=>s()?!1:i.value,c=fh(e,["arrow","showArrow"]),d=G(()=>e.overlap?!1:c.value);let u=null;const p=K(null),b=K(null),h=$n(()=>e.x!==void 0&&e.y!==void 0);function v(L){const{"onUpdate:show":M,onUpdateShow:se,onShow:j,onHide:ie}=e;r.value=L,M&&nn(M,L),se&&nn(se,L),L&&j&&nn(j,!0),L&&ie&&nn(ie,!1)}function m(){u&&u.syncPosition()}function g(){const{value:L}=p;L&&(window.clearTimeout(L),p.value=null)}function S(){const{value:L}=b;L&&(window.clearTimeout(L),b.value=null)}function _(){const L=s();if(e.trigger==="focus"&&!L){if(l())return;v(!0)}}function k(){const L=s();if(e.trigger==="focus"&&!L){if(!l())return;v(!1)}}function T(){const L=s();if(e.trigger==="hover"&&!L){if(S(),p.value!==null||l())return;const M=()=>{v(!0),p.value=null},{delay:se}=e;se===0?M():p.value=window.setTimeout(M,se)}}function R(){const L=s();if(e.trigger==="hover"&&!L){if(g(),b.value!==null||!l())return;const M=()=>{v(!1),b.value=null},{duration:se}=e;se===0?M():b.value=window.setTimeout(M,se)}}function y(){R()}function w(L){var M;l()&&(e.trigger==="click"&&(g(),S(),v(!1)),(M=e.onClickoutside)===null||M===void 0||M.call(e,L))}function I(){if(e.trigger==="click"&&!s()){g(),S();const L=!l();v(L)}}function H(L){e.internalTrapFocus&&L.key==="Escape"&&(g(),S(),v(!1))}function U(L){r.value=L}function z(){var L;return(L=t.value)===null||L===void 0?void 0:L.targetRef}function te(L){u=L}return Ye("NPopover",{getTriggerElement:z,handleKeydown:H,handleMouseEnter:T,handleMouseLeave:R,handleClickOutside:w,handleMouseMoveOutside:y,setBodyInstance:te,positionManuallyRef:h,isMountedRef:n,zIndexRef:Xe(e,"zIndex"),extraClassRef:Xe(e,"internalExtraClass"),internalRenderBodyRef:Xe(e,"internalRenderBody")}),so(()=>{i.value&&s()&&v(!1)}),{binderInstRef:t,positionManually:h,mergedShowConsideringDisabledProp:a,uncontrolledShow:r,mergedShowArrow:d,getMergedShow:l,setShow:U,handleClick:I,handleMouseEnter:T,handleMouseLeave:R,handleFocus:_,handleBlur:k,syncPosition:m}},render(){var e;const{positionManually:n,$slots:t}=this;let o,r=!1;if(!n&&(t.activator?o=ol(t,"activator"):o=ol(t,"trigger"),o)){o=gt(o),o=o.type===$P?x("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,s=[i,...a],l={onBlur:c=>{s.forEach(d=>{d.onBlur(c)})},onFocus:c=>{s.forEach(d=>{d.onFocus(c)})},onClick:c=>{s.forEach(d=>{d.onClick(c)})},onMouseenter:c=>{s.forEach(d=>{d.onMouseenter(c)})},onMouseleave:c=>{s.forEach(d=>{d.onMouseleave(c)})}};PP(o,a?"nested":n?"manual":this.trigger,l)}}return x(bh,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?lo(x("div",{style:{position:"fixed",inset:0}}),[[Yl,{enabled:i,zIndex:this.zIndex}]]):null,n?null:x(vh,null,{default:()=>o}),x(SP,Wo(this.$props,TP,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,s;return(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a)},header:()=>{var a,s;return(s=(a=this.$slots).header)===null||s===void 0?void 0:s.call(a)},footer:()=>{var a,s;return(s=(a=this.$slots).footer)===null||s===void 0?void 0:s.call(a)}})]}})}}),Fp={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},RP={name:"Tag",common:le,self(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:d,tagColor:u,opacityDisabled:p,closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:v,closeColorHover:m,closeColorPressed:g,borderRadiusSmall:S,fontSizeMini:_,fontSizeTiny:k,fontSizeSmall:T,fontSizeMedium:R,heightMini:y,heightTiny:w,heightSmall:I,heightMedium:H,buttonColor2Hover:U,buttonColor2Pressed:z,fontWeightStrong:te}=e;return Object.assign(Object.assign({},Fp),{closeBorderRadius:S,heightTiny:y,heightSmall:w,heightMedium:I,heightLarge:H,borderRadius:S,opacityDisabled:p,fontSizeTiny:_,fontSizeSmall:k,fontSizeMedium:T,fontSizeLarge:R,fontWeightStrong:te,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:U,colorPressedCheckable:z,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${d}`,textColor:n,color:u,colorBordered:"#0000",closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:v,closeColorHover:m,closeColorPressed:g,borderPrimary:`1px solid ${V(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:V(r,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:vn(r,{lightness:.7}),closeIconColorHoverPrimary:vn(r,{lightness:.7}),closeIconColorPressedPrimary:vn(r,{lightness:.7}),closeColorHoverPrimary:V(r,{alpha:.16}),closeColorPressedPrimary:V(r,{alpha:.12}),borderInfo:`1px solid ${V(i,{alpha:.3})}`,textColorInfo:i,colorInfo:V(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:vn(i,{alpha:.7}),closeIconColorHoverInfo:vn(i,{alpha:.7}),closeIconColorPressedInfo:vn(i,{alpha:.7}),closeColorHoverInfo:V(i,{alpha:.16}),closeColorPressedInfo:V(i,{alpha:.12}),borderSuccess:`1px solid ${V(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:V(a,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:vn(a,{alpha:.7}),closeIconColorHoverSuccess:vn(a,{alpha:.7}),closeIconColorPressedSuccess:vn(a,{alpha:.7}),closeColorHoverSuccess:V(a,{alpha:.16}),closeColorPressedSuccess:V(a,{alpha:.12}),borderWarning:`1px solid ${V(s,{alpha:.3})}`,textColorWarning:s,colorWarning:V(s,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:vn(s,{alpha:.7}),closeIconColorHoverWarning:vn(s,{alpha:.7}),closeIconColorPressedWarning:vn(s,{alpha:.7}),closeColorHoverWarning:V(s,{alpha:.16}),closeColorPressedWarning:V(s,{alpha:.11}),borderError:`1px solid ${V(l,{alpha:.3})}`,textColorError:l,colorError:V(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:vn(l,{alpha:.7}),closeIconColorHoverError:vn(l,{alpha:.7}),closeIconColorPressedError:vn(l,{alpha:.7}),closeColorHoverError:V(l,{alpha:.16}),closeColorPressedError:V(l,{alpha:.12})})}},Wp=RP,DP=e=>{const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:d,opacityDisabled:u,tagColor:p,closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:v,borderRadiusSmall:m,fontSizeMini:g,fontSizeTiny:S,fontSizeSmall:_,fontSizeMedium:k,heightMini:T,heightTiny:R,heightSmall:y,heightMedium:w,closeColorHover:I,closeColorPressed:H,buttonColor2Hover:U,buttonColor2Pressed:z,fontWeightStrong:te}=e;return Object.assign(Object.assign({},Fp),{closeBorderRadius:m,heightTiny:T,heightSmall:R,heightMedium:y,heightLarge:w,borderRadius:m,opacityDisabled:u,fontSizeTiny:g,fontSizeSmall:S,fontSizeMedium:_,fontSizeLarge:k,fontWeightStrong:te,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:U,colorPressedCheckable:z,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${d}`,textColor:n,color:p,colorBordered:"rgb(250, 250, 252)",closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:v,closeColorHover:I,closeColorPressed:H,borderPrimary:`1px solid ${V(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:V(r,{alpha:.12}),colorBorderedPrimary:V(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:V(r,{alpha:.12}),closeColorPressedPrimary:V(r,{alpha:.18}),borderInfo:`1px solid ${V(i,{alpha:.3})}`,textColorInfo:i,colorInfo:V(i,{alpha:.12}),colorBorderedInfo:V(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:V(i,{alpha:.12}),closeColorPressedInfo:V(i,{alpha:.18}),borderSuccess:`1px solid ${V(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:V(a,{alpha:.12}),colorBorderedSuccess:V(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:V(a,{alpha:.12}),closeColorPressedSuccess:V(a,{alpha:.18}),borderWarning:`1px solid ${V(s,{alpha:.35})}`,textColorWarning:s,colorWarning:V(s,{alpha:.15}),colorBorderedWarning:V(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:V(s,{alpha:.12}),closeColorPressedWarning:V(s,{alpha:.18}),borderError:`1px solid ${V(l,{alpha:.23})}`,textColorError:l,colorError:V(l,{alpha:.1}),colorBorderedError:V(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:V(l,{alpha:.12}),closeColorPressedError:V(l,{alpha:.18})})},IP={name:"Tag",common:ce,self:DP},jp=IP,HP=ne("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[O(">",[F("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[O("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),O("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),F("placeholder",`
 display: flex;
 `),F("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[vi({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),yl=me({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return wr("-base-clear",HP,Xe(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return x("div",{class:`${e}-base-clear`},x(Za,null,{default:()=>{var n,t;return this.show?x("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Lo(this.$slots.icon,()=>[x(ho,{clsPrefix:e},{default:()=>x(Tk,null)})])):x("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(n=this.$slots).placeholder)===null||t===void 0?void 0:t.call(n))}}))}}),_P=me({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:t}=e;return x(mc,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?x(yl,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>x(ho,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Lo(n.default,()=>[x(Sk,null)])})}):null})}}}),Np={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},EP=e=>{const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:u,borderColor:p,iconColor:b,iconColorDisabled:h,clearColor:v,clearColorHover:m,clearColorPressed:g,placeholderColor:S,placeholderColorDisabled:_,fontSizeTiny:k,fontSizeSmall:T,fontSizeMedium:R,fontSizeLarge:y,heightTiny:w,heightSmall:I,heightMedium:H,heightLarge:U}=e;return Object.assign(Object.assign({},Np),{fontSizeTiny:k,fontSizeSmall:T,fontSizeMedium:R,fontSizeLarge:y,heightTiny:w,heightSmall:I,heightMedium:H,heightLarge:U,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:S,placeholderColorDisabled:_,color:r,colorDisabled:i,colorActive:r,border:`1px solid ${p}`,borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${V(a,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${V(a,{alpha:.2})}`,caretColor:a,arrowColor:b,arrowColorDisabled:h,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${V(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${V(l,{alpha:.2})}`,colorActiveWarning:r,caretColorWarning:l,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${u}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${V(d,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${V(d,{alpha:.2})}`,colorActiveError:r,caretColorError:d,clearColor:v,clearColorHover:m,clearColorPressed:g})},zP={name:"InternalSelection",common:ce,peers:{Popover:vo},self:EP},vc=zP,MP={name:"InternalSelection",common:le,peers:{Popover:Zo},self(e){const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:u,iconColor:p,iconColorDisabled:b,clearColor:h,clearColorHover:v,clearColorPressed:m,placeholderColor:g,placeholderColorDisabled:S,fontSizeTiny:_,fontSizeSmall:k,fontSizeMedium:T,fontSizeLarge:R,heightTiny:y,heightSmall:w,heightMedium:I,heightLarge:H}=e;return Object.assign(Object.assign({},Np),{fontSizeTiny:_,fontSizeSmall:k,fontSizeMedium:T,fontSizeLarge:R,heightTiny:y,heightSmall:w,heightMedium:I,heightLarge:H,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:g,placeholderColorDisabled:S,color:r,colorDisabled:i,colorActive:V(a,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${V(a,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${V(a,{alpha:.4})}`,caretColor:a,arrowColor:p,arrowColorDisabled:b,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${V(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${V(l,{alpha:.4})}`,colorActiveWarning:V(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${u}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${V(d,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${V(d,{alpha:.4})}`,colorActiveError:V(d,{alpha:.1}),caretColorError:d,clearColor:h,clearColorHover:v,clearColorPressed:m})}},yc=MP,{cubicBezierEaseInOut:Yt}=bo;function LP({duration:e=".2s",delay:n=".1s"}={}){return[O("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),O("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),O("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Yt},
 max-width ${e} ${Yt} ${n},
 margin-left ${e} ${Yt} ${n},
 margin-right ${e} ${Yt} ${n};
 `),O("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Yt} ${n},
 max-width ${e} ${Yt},
 margin-left ${e} ${Yt},
 margin-right ${e} ${Yt};
 `)]}const Gp={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},OP={name:"Alert",common:le,self(e){const{lineHeight:n,borderRadius:t,fontWeightStrong:o,dividerColor:r,inputColor:i,textColor1:a,textColor2:s,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,infoColorSuppl:b,successColorSuppl:h,warningColorSuppl:v,errorColorSuppl:m,fontSize:g}=e;return Object.assign(Object.assign({},Gp),{fontSize:g,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${r}`,color:i,titleTextColor:a,iconColor:s,contentTextColor:s,closeBorderRadius:t,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,borderInfo:`1px solid ${V(b,{alpha:.35})}`,colorInfo:V(b,{alpha:.25}),titleTextColorInfo:a,iconColorInfo:b,contentTextColorInfo:s,closeColorHoverInfo:l,closeColorPressedInfo:c,closeIconColorInfo:d,closeIconColorHoverInfo:u,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${V(h,{alpha:.35})}`,colorSuccess:V(h,{alpha:.25}),titleTextColorSuccess:a,iconColorSuccess:h,contentTextColorSuccess:s,closeColorHoverSuccess:l,closeColorPressedSuccess:c,closeIconColorSuccess:d,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${V(v,{alpha:.35})}`,colorWarning:V(v,{alpha:.25}),titleTextColorWarning:a,iconColorWarning:v,contentTextColorWarning:s,closeColorHoverWarning:l,closeColorPressedWarning:c,closeIconColorWarning:d,closeIconColorHoverWarning:u,closeIconColorPressedWarning:p,borderError:`1px solid ${V(m,{alpha:.35})}`,colorError:V(m,{alpha:.25}),titleTextColorError:a,iconColorError:m,contentTextColorError:s,closeColorHoverError:l,closeColorPressedError:c,closeIconColorError:d,closeIconColorHoverError:u,closeIconColorPressedError:p})}},BP=OP,FP=e=>{const{lineHeight:n,borderRadius:t,fontWeightStrong:o,baseColor:r,dividerColor:i,actionColor:a,textColor1:s,textColor2:l,closeColorHover:c,closeColorPressed:d,closeIconColor:u,closeIconColorHover:p,closeIconColorPressed:b,infoColor:h,successColor:v,warningColor:m,errorColor:g,fontSize:S}=e;return Object.assign(Object.assign({},Gp),{fontSize:S,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${i}`,color:a,titleTextColor:s,iconColor:l,contentTextColor:l,closeBorderRadius:t,closeColorHover:c,closeColorPressed:d,closeIconColor:u,closeIconColorHover:p,closeIconColorPressed:b,borderInfo:`1px solid ${ve(r,V(h,{alpha:.25}))}`,colorInfo:ve(r,V(h,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:h,contentTextColorInfo:l,closeColorHoverInfo:c,closeColorPressedInfo:d,closeIconColorInfo:u,closeIconColorHoverInfo:p,closeIconColorPressedInfo:b,borderSuccess:`1px solid ${ve(r,V(v,{alpha:.25}))}`,colorSuccess:ve(r,V(v,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:v,contentTextColorSuccess:l,closeColorHoverSuccess:c,closeColorPressedSuccess:d,closeIconColorSuccess:u,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:b,borderWarning:`1px solid ${ve(r,V(m,{alpha:.33}))}`,colorWarning:ve(r,V(m,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:m,contentTextColorWarning:l,closeColorHoverWarning:c,closeColorPressedWarning:d,closeIconColorWarning:u,closeIconColorHoverWarning:p,closeIconColorPressedWarning:b,borderError:`1px solid ${ve(r,V(g,{alpha:.25}))}`,colorError:ve(r,V(g,{alpha:.08})),titleTextColorError:s,iconColorError:g,contentTextColorError:l,closeColorHoverError:c,closeColorPressedError:d,closeIconColorError:u,closeIconColorHoverError:p,closeIconColorPressedError:b})},WP={name:"Alert",common:ce,self:FP},jP=WP,{cubicBezierEaseInOut:$t,cubicBezierEaseOut:NP,cubicBezierEaseIn:GP}=bo;function VP({overflow:e="hidden",duration:n=".3s",originalTransition:t="",leavingDelay:o="0s",foldPadding:r=!1,enterToProps:i=void 0,leaveToProps:a=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",c=s?"enter":"leave";return[O(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),O(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},a),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:r?"0 !important":void 0,paddingBottom:r?"0 !important":void 0})),O(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${$t} ${o},
 opacity ${n} ${NP} ${o},
 margin-top ${n} ${$t} ${o},
 margin-bottom ${n} ${$t} ${o},
 padding-top ${n} ${$t} ${o},
 padding-bottom ${n} ${$t} ${o}
 ${t?","+t:""}
 `),O(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${$t},
 opacity ${n} ${GP},
 margin-top ${n} ${$t},
 margin-bottom ${n} ${$t},
 padding-top ${n} ${$t},
 padding-bottom ${n} ${$t}
 ${t?","+t:""}
 `)]}const KP={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},Vp=e=>{const{borderRadius:n,railColor:t,primaryColor:o,primaryColorHover:r,primaryColorPressed:i,textColor2:a}=e;return Object.assign(Object.assign({},KP),{borderRadius:n,railColor:t,railColorActive:o,linkColor:V(o,{alpha:.15}),linkTextColor:a,linkTextColorHover:r,linkTextColorPressed:i,linkTextColorActive:o})},UP={name:"Anchor",common:ce,self:Vp},qP=UP,ZP={name:"Anchor",common:le,self:Vp},XP=ZP,JP=mo&&"chrome"in window;mo&&navigator.userAgent.includes("Firefox");const Kp=mo&&navigator.userAgent.includes("Safari")&&!JP,Up={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},YP={name:"Input",common:le,self(e){const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:u,borderRadius:p,lineHeight:b,fontSizeTiny:h,fontSizeSmall:v,fontSizeMedium:m,fontSizeLarge:g,heightTiny:S,heightSmall:_,heightMedium:k,heightLarge:T,clearColor:R,clearColorHover:y,clearColorPressed:w,placeholderColor:I,placeholderColorDisabled:H,iconColor:U,iconColorDisabled:z,iconColorHover:te,iconColorPressed:L}=e;return Object.assign(Object.assign({},Up),{countTextColorDisabled:o,countTextColor:t,heightTiny:S,heightSmall:_,heightMedium:k,heightLarge:T,fontSizeTiny:h,fontSizeSmall:v,fontSizeMedium:m,fontSizeLarge:g,lineHeight:b,lineHeightTextarea:b,borderRadius:p,iconSize:"16px",groupLabelColor:a,textColor:n,textColorDisabled:o,textDecorationColor:n,groupLabelTextColor:n,caretColor:r,placeholderColor:I,placeholderColorDisabled:H,color:a,colorDisabled:s,colorFocus:V(r,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${V(r,{alpha:.3})}`,loadingColor:r,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:V(l,{alpha:.1}),borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 8px 0 ${V(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,colorFocusError:V(d,{alpha:.1}),borderFocusError:`1px solid ${u}`,boxShadowFocusError:`0 0 8px 0 ${V(d,{alpha:.3})}`,caretColorError:d,clearColor:R,clearColorHover:y,clearColorPressed:w,iconColor:U,iconColorDisabled:z,iconColorHover:te,iconColorPressed:L,suffixTextColor:n})}},vt=YP,QP=e=>{const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,borderColor:l,warningColor:c,warningColorHover:d,errorColor:u,errorColorHover:p,borderRadius:b,lineHeight:h,fontSizeTiny:v,fontSizeSmall:m,fontSizeMedium:g,fontSizeLarge:S,heightTiny:_,heightSmall:k,heightMedium:T,heightLarge:R,actionColor:y,clearColor:w,clearColorHover:I,clearColorPressed:H,placeholderColor:U,placeholderColorDisabled:z,iconColor:te,iconColorDisabled:L,iconColorHover:M,iconColorPressed:se}=e;return Object.assign(Object.assign({},Up),{countTextColorDisabled:o,countTextColor:t,heightTiny:_,heightSmall:k,heightMedium:T,heightLarge:R,fontSizeTiny:v,fontSizeSmall:m,fontSizeMedium:g,fontSizeLarge:S,lineHeight:h,lineHeightTextarea:h,borderRadius:b,iconSize:"16px",groupLabelColor:y,groupLabelTextColor:n,textColor:n,textColorDisabled:o,textDecorationColor:n,caretColor:r,placeholderColor:U,placeholderColorDisabled:z,color:a,colorDisabled:s,colorFocus:a,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${V(r,{alpha:.2})}`,loadingColor:r,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:a,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${V(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${p}`,colorFocusError:a,borderFocusError:`1px solid ${p}`,boxShadowFocusError:`0 0 0 2px ${V(u,{alpha:.2})}`,caretColorError:u,clearColor:w,clearColorHover:I,clearColorPressed:H,iconColor:te,iconColorDisabled:L,iconColorHover:M,iconColorPressed:se,suffixTextColor:n})},e$={name:"Input",common:ce,self:QP},dt=e$,qp="n-input";function n$(e){let n=0;for(const t of e)n++;return n}function Yi(e){return e===""||e==null}function t$(e){const n=K(null);function t(){const{value:i}=e;if(!(i!=null&&i.focus)){r();return}const{selectionStart:a,selectionEnd:s,value:l}=i;if(a==null||s==null){r();return}n.value={start:a,end:s,beforeText:l.slice(0,a),afterText:l.slice(s)}}function o(){var i;const{value:a}=n,{value:s}=e;if(!a||!s)return;const{value:l}=s,{start:c,beforeText:d,afterText:u}=a;let p=l.length;if(l.endsWith(u))p=l.length-u.length;else if(l.startsWith(d))p=d.length;else{const b=d[c-1],h=l.indexOf(b,c-1);h!==-1&&(p=h+1)}(i=s.setSelectionRange)===null||i===void 0||i.call(s,p,p)}function r(){n.value=null}return pn(e,r),{recordCursor:t,restoreCursor:o}}const Iu=me({name:"InputWordCount",setup(e,{slots:n}){const{mergedValueRef:t,maxlengthRef:o,mergedClsPrefixRef:r,countGraphemesRef:i}=Re(qp),a=G(()=>{const{value:s}=t;return s===null||Array.isArray(s)?0:(i.value||n$)(s)});return()=>{const{value:s}=o,{value:l}=t;return x("span",{class:`${r.value}-input-word-count`},q0(n.default,{value:l===null||Array.isArray(l)?"":l},()=>[s===void 0?a.value:`${a.value} / ${s}`]))}}}),o$=ne("input",`
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
`,[F("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),F("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
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
 `),F("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[O("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),O("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),O("&:-webkit-autofill ~",[F("placeholder","display: none;")])]),Q("round",[zn("textarea","border-radius: calc(var(--n-height) / 2);")]),F("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[O("span",`
 width: 100%;
 display: inline-block;
 `)]),Q("textarea",[F("placeholder","overflow: visible;")]),zn("autosize","width: 100%;"),Q("autosize",[F("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),ne("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),F("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),F("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[O("+",[F("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),zn("textarea",[F("placeholder","white-space: nowrap;")]),F("eye",`
 transition: color .3s var(--n-bezier);
 `),Q("textarea","width: 100%;",[ne("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),Q("resizable",[ne("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),F("textarea-el, textarea-mirror, placeholder",`
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
 `),F("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),Q("pair",[F("input-el, placeholder","text-align: center;"),F("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[ne("icon",`
 color: var(--n-icon-color);
 `),ne("base-icon",`
 color: var(--n-icon-color);
 `)])]),Q("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[F("border","border: var(--n-border-disabled);"),F("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),F("placeholder","color: var(--n-placeholder-color-disabled);"),F("separator","color: var(--n-text-color-disabled);",[ne("icon",`
 color: var(--n-icon-color-disabled);
 `),ne("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),ne("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),F("suffix, prefix","color: var(--n-text-color-disabled);",[ne("icon",`
 color: var(--n-icon-color-disabled);
 `),ne("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),zn("disabled",[F("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[O("&:hover",`
 color: var(--n-icon-color-hover);
 `),O("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),O("&:hover",[F("state-border","border: var(--n-border-hover);")]),Q("focus","background-color: var(--n-color-focus);",[F("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),F("border, state-border",`
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
 `),F("state-border",`
 border-color: #0000;
 z-index: 1;
 `),F("prefix","margin-right: 4px;"),F("suffix",`
 margin-left: 4px;
 `),F("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[ne("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),ne("base-clear",`
 font-size: var(--n-icon-size);
 `,[F("placeholder",[ne("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),O(">",[ne("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),ne("base-icon",`
 font-size: var(--n-icon-size);
 `)]),ne("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>Q(`${e}-status`,[zn("disabled",[ne("base-loading",`
 color: var(--n-loading-color-${e})
 `),F("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),F("state-border",`
 border: var(--n-border-${e});
 `),O("&:hover",[F("state-border",`
 border: var(--n-border-hover-${e});
 `)]),O("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[F("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),Q("focus",`
 background-color: var(--n-color-focus-${e});
 `,[F("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),r$=ne("input",[Q("disabled",[F("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),i$=Object.assign(Object.assign({},De.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),a$=me({name:"Input",props:i$,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=un(e),i=De("Input","-input",o$,dt,e,n);Kp&&wr("-input-safari",r$,n);const a=K(null),s=K(null),l=K(null),c=K(null),d=K(null),u=K(null),p=K(null),b=t$(p),h=K(null),{localeRef:v}=vk("Input"),m=K(e.defaultValue),g=Xe(e,"value"),S=Jl(g,m),_=Eh(e),{mergedSizeRef:k,mergedDisabledRef:T,mergedStatusRef:R}=_,y=K(!1),w=K(!1),I=K(!1),H=K(!1);let U=null;const z=G(()=>{const{placeholder:D,pair:X}=e;return X?Array.isArray(D)?D:D===void 0?["",""]:[D,D]:D===void 0?[v.value.placeholder]:[D]}),te=G(()=>{const{value:D}=I,{value:X}=S,{value:Te}=z;return!D&&(Yi(X)||Array.isArray(X)&&Yi(X[0]))&&Te[0]}),L=G(()=>{const{value:D}=I,{value:X}=S,{value:Te}=z;return!D&&Te[1]&&(Yi(X)||Array.isArray(X)&&Yi(X[1]))}),M=$n(()=>e.internalForceFocus||y.value),se=$n(()=>{if(T.value||e.readonly||!e.clearable||!M.value&&!w.value)return!1;const{value:D}=S,{value:X}=M;return e.pair?!!(Array.isArray(D)&&(D[0]||D[1]))&&(w.value||X):!!D&&(w.value||X)}),j=G(()=>{const{showPasswordOn:D}=e;if(D)return D;if(e.showPasswordToggle)return"click"}),ie=K(!1),$=G(()=>{const{textDecoration:D}=e;return D?Array.isArray(D)?D.map(X=>({textDecoration:X})):[{textDecoration:D}]:["",""]}),Z=K(void 0),Pe=()=>{var D,X;if(e.type==="textarea"){const{autosize:Te}=e;if(Te&&(Z.value=(X=(D=h.value)===null||D===void 0?void 0:D.$el)===null||X===void 0?void 0:X.offsetWidth),!s.value||typeof Te=="boolean")return;const{paddingTop:We,paddingBottom:cn,lineHeight:on}=window.getComputedStyle(s.value),_t=Number(We.slice(0,-2)),Tt=Number(cn.slice(0,-2)),Et=Number(on.slice(0,-2)),{value:yo}=l;if(!yo)return;if(Te.minRows){const xo=Math.max(Te.minRows,1),Ar=`${_t+Tt+Et*xo}px`;yo.style.minHeight=Ar}if(Te.maxRows){const xo=`${_t+Tt+Et*Te.maxRows}px`;yo.style.maxHeight=xo}}},He=G(()=>{const{maxlength:D}=e;return D===void 0?void 0:Number(D)});Kn(()=>{const{value:D}=S;Array.isArray(D)||Sn(D)});const Pn=Nt().proxy;function Be(D){const{onUpdateValue:X,"onUpdate:value":Te,onInput:We}=e,{nTriggerFormInput:cn}=_;X&&nn(X,D),Te&&nn(Te,D),We&&nn(We,D),m.value=D,cn()}function Oe(D){const{onChange:X}=e,{nTriggerFormChange:Te}=_;X&&nn(X,D),m.value=D,Te()}function Se(D){const{onBlur:X}=e,{nTriggerFormBlur:Te}=_;X&&nn(X,D),Te()}function _e(D){const{onFocus:X}=e,{nTriggerFormFocus:Te}=_;X&&nn(X,D),Te()}function Zn(D){const{onClear:X}=e;X&&nn(X,D)}function Ae(D){const{onInputBlur:X}=e;X&&nn(X,D)}function Xn(D){const{onInputFocus:X}=e;X&&nn(X,D)}function Ze(){const{onDeactivate:D}=e;D&&nn(D)}function P(){const{onActivate:D}=e;D&&nn(D)}function A(D){const{onClick:X}=e;X&&nn(X,D)}function B(D){const{onWrapperFocus:X}=e;X&&nn(X,D)}function q(D){const{onWrapperBlur:X}=e;X&&nn(X,D)}function J(){I.value=!0}function ae(D){I.value=!1,D.target===u.value?de(D,1):de(D,0)}function de(D,X=0,Te="input"){const We=D.target.value;if(Sn(We),D instanceof InputEvent&&!D.isComposing&&(I.value=!1),e.type==="textarea"){const{value:on}=h;on&&on.syncUnifiedContainer()}if(U=We,I.value)return;b.recordCursor();const cn=re(We);if(cn)if(!e.pair)Te==="input"?Be(We):Oe(We);else{let{value:on}=S;Array.isArray(on)?on=[on[0],on[1]]:on=["",""],on[X]=We,Te==="input"?Be(on):Oe(on)}Pn.$forceUpdate(),cn||Gn(b.restoreCursor)}function re(D){const{countGraphemes:X,maxlength:Te,minlength:We}=e;if(X){let on;if(Te!==void 0&&(on===void 0&&(on=X(D)),on>Number(Te))||We!==void 0&&(on===void 0&&(on=X(D)),on<Number(Te)))return!1}const{allowInput:cn}=e;return typeof cn=="function"?cn(D):!0}function ee(D){Ae(D),D.relatedTarget===a.value&&Ze(),D.relatedTarget!==null&&(D.relatedTarget===d.value||D.relatedTarget===u.value||D.relatedTarget===s.value)||(H.value=!1),oe(D,"blur"),p.value=null}function N(D,X){Xn(D),y.value=!0,H.value=!0,P(),oe(D,"focus"),X===0?p.value=d.value:X===1?p.value=u.value:X===2&&(p.value=s.value)}function xe(D){e.passivelyActivated&&(q(D),oe(D,"blur"))}function ge(D){e.passivelyActivated&&(y.value=!0,B(D),oe(D,"focus"))}function oe(D,X){D.relatedTarget!==null&&(D.relatedTarget===d.value||D.relatedTarget===u.value||D.relatedTarget===s.value||D.relatedTarget===a.value)||(X==="focus"?(_e(D),y.value=!0):X==="blur"&&(Se(D),y.value=!1))}function fe(D,X){de(D,X,"change")}function ye(D){A(D)}function je(D){Zn(D),e.pair?(Be(["",""]),Oe(["",""])):(Be(""),Oe(""))}function Me(D){const{onMousedown:X}=e;X&&X(D);const{tagName:Te}=D.target;if(Te!=="INPUT"&&Te!=="TEXTAREA"){if(e.resizable){const{value:We}=a;if(We){const{left:cn,top:on,width:_t,height:Tt}=We.getBoundingClientRect(),Et=14;if(cn+_t-Et<D.clientX&&D.clientX<cn+_t&&on+Tt-Et<D.clientY&&D.clientY<on+Tt)return}}D.preventDefault(),y.value||Y()}}function Ne(){var D;w.value=!0,e.type==="textarea"&&((D=h.value)===null||D===void 0||D.handleMouseEnterWrapper())}function rn(){var D;w.value=!1,e.type==="textarea"&&((D=h.value)===null||D===void 0||D.handleMouseLeaveWrapper())}function Jn(){T.value||j.value==="click"&&(ie.value=!ie.value)}function Ut(D){if(T.value)return;D.preventDefault();const X=We=>{We.preventDefault(),tn("mouseup",document,X)};if(dn("mouseup",document,X),j.value!=="mousedown")return;ie.value=!0;const Te=()=>{ie.value=!1,tn("mouseup",document,Te)};dn("mouseup",document,Te)}function ut(D){var X;switch((X=e.onKeydown)===null||X===void 0||X.call(e,D),D.key){case"Escape":xn();break;case"Enter":rt(D);break}}function rt(D){var X,Te;if(e.passivelyActivated){const{value:We}=H;if(We){e.internalDeactivateOnEnter&&xn();return}D.preventDefault(),e.type==="textarea"?(X=s.value)===null||X===void 0||X.focus():(Te=d.value)===null||Te===void 0||Te.focus()}}function xn(){e.passivelyActivated&&(H.value=!1,Gn(()=>{var D;(D=a.value)===null||D===void 0||D.focus()}))}function Y(){var D,X,Te;T.value||(e.passivelyActivated?(D=a.value)===null||D===void 0||D.focus():((X=s.value)===null||X===void 0||X.focus(),(Te=d.value)===null||Te===void 0||Te.focus()))}function pe(){var D;!((D=a.value)===null||D===void 0)&&D.contains(document.activeElement)&&document.activeElement.blur()}function ke(){var D,X;(D=s.value)===null||D===void 0||D.select(),(X=d.value)===null||X===void 0||X.select()}function Le(){T.value||(s.value?s.value.focus():d.value&&d.value.focus())}function Ue(){const{value:D}=a;D!=null&&D.contains(document.activeElement)&&D!==document.activeElement&&xn()}function Cn(D){if(e.type==="textarea"){const{value:X}=s;X==null||X.scrollTo(D)}else{const{value:X}=d;X==null||X.scrollTo(D)}}function Sn(D){const{type:X,pair:Te,autosize:We}=e;if(!Te&&We)if(X==="textarea"){const{value:cn}=l;cn&&(cn.textContent=(D??"")+`\r
`)}else{const{value:cn}=c;cn&&(D?cn.textContent=D:cn.innerHTML="&nbsp;")}}function Qe(){Pe()}const Mn=K({top:"0"});function mn(D){var X;const{scrollTop:Te}=D.target;Mn.value.top=`${-Te}px`,(X=h.value)===null||X===void 0||X.syncUnifiedContainer()}let fn=null;so(()=>{const{autosize:D,type:X}=e;D&&X==="textarea"?fn=pn(S,Te=>{!Array.isArray(Te)&&Te!==U&&Sn(Te)}):fn==null||fn()});let Yn=null;so(()=>{e.type==="textarea"?Yn=pn(S,D=>{var X;!Array.isArray(D)&&D!==U&&((X=h.value)===null||X===void 0||X.syncUnifiedContainer())}):Yn==null||Yn()}),Ye(qp,{mergedValueRef:S,maxlengthRef:He,mergedClsPrefixRef:n,countGraphemesRef:Xe(e,"countGraphemes")});const Xo={wrapperElRef:a,inputElRef:d,textareaElRef:s,isCompositing:I,focus:Y,blur:pe,select:ke,deactivate:Ue,activate:Le,scrollTo:Cn},qt=Uo("Input",r,n),Dn=G(()=>{const{value:D}=k,{common:{cubicBezierEaseInOut:X},self:{color:Te,borderRadius:We,textColor:cn,caretColor:on,caretColorError:_t,caretColorWarning:Tt,textDecorationColor:Et,border:yo,borderDisabled:xo,borderHover:Ar,borderFocus:is,placeholderColor:as,placeholderColorDisabled:ss,lineHeightTextarea:ls,colorDisabled:In,colorFocus:Rr,textColorDisabled:cs,boxShadowFocus:Ai,iconSize:Jo,colorFocusWarning:gn,boxShadowFocusWarning:ds,borderWarning:Dr,borderFocusWarning:Ri,borderHoverWarning:us,colorFocusError:Ir,boxShadowFocusError:Hr,borderError:Di,borderFocusError:fs,borderHoverError:Ii,clearSize:Hi,clearColor:f,clearColorHover:C,clearColorPressed:E,iconColor:W,iconColorDisabled:ue,suffixTextColor:Fe,countTextColor:qe,countTextColorDisabled:bn,iconColorHover:Yo,iconColorPressed:eb,loadingColor:nb,loadingColorError:tb,loadingColorWarning:ob,[be("padding",D)]:rb,[be("fontSize",D)]:ib,[be("height",D)]:ab}}=i.value,{left:sb,right:lb}=Zl(rb);return{"--n-bezier":X,"--n-count-text-color":qe,"--n-count-text-color-disabled":bn,"--n-color":Te,"--n-font-size":ib,"--n-border-radius":We,"--n-height":ab,"--n-padding-left":sb,"--n-padding-right":lb,"--n-text-color":cn,"--n-caret-color":on,"--n-text-decoration-color":Et,"--n-border":yo,"--n-border-disabled":xo,"--n-border-hover":Ar,"--n-border-focus":is,"--n-placeholder-color":as,"--n-placeholder-color-disabled":ss,"--n-icon-size":Jo,"--n-line-height-textarea":ls,"--n-color-disabled":In,"--n-color-focus":Rr,"--n-text-color-disabled":cs,"--n-box-shadow-focus":Ai,"--n-loading-color":nb,"--n-caret-color-warning":Tt,"--n-color-focus-warning":gn,"--n-box-shadow-focus-warning":ds,"--n-border-warning":Dr,"--n-border-focus-warning":Ri,"--n-border-hover-warning":us,"--n-loading-color-warning":ob,"--n-caret-color-error":_t,"--n-color-focus-error":Ir,"--n-box-shadow-focus-error":Hr,"--n-border-error":Di,"--n-border-focus-error":fs,"--n-border-hover-error":Ii,"--n-loading-color-error":tb,"--n-clear-color":f,"--n-clear-size":Hi,"--n-clear-color-hover":C,"--n-clear-color-pressed":E,"--n-icon-color":W,"--n-icon-color-hover":Yo,"--n-icon-color-pressed":eb,"--n-icon-color-disabled":ue,"--n-suffix-text-color":Fe}}),Ln=o?Rn("input",G(()=>{const{value:D}=k;return D[0]}),Dn,e):void 0;return Object.assign(Object.assign({},Xo),{wrapperElRef:a,inputElRef:d,inputMirrorElRef:c,inputEl2Ref:u,textareaElRef:s,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:qt,uncontrolledValue:m,mergedValue:S,passwordVisible:ie,mergedPlaceholder:z,showPlaceholder1:te,showPlaceholder2:L,mergedFocus:M,isComposing:I,activated:H,showClearButton:se,mergedSize:k,mergedDisabled:T,textDecorationStyle:$,mergedClsPrefix:n,mergedBordered:t,mergedShowPasswordOn:j,placeholderStyle:Mn,mergedStatus:R,textAreaScrollContainerWidth:Z,handleTextAreaScroll:mn,handleCompositionStart:J,handleCompositionEnd:ae,handleInput:de,handleInputBlur:ee,handleInputFocus:N,handleWrapperBlur:xe,handleWrapperFocus:ge,handleMouseEnter:Ne,handleMouseLeave:rn,handleMouseDown:Me,handleChange:fe,handleClick:ye,handleClear:je,handlePasswordToggleClick:Jn,handlePasswordToggleMousedown:Ut,handleWrapperKeydown:ut,handleTextAreaMirrorResize:Qe,getTextareaScrollContainer:()=>s.value,mergedTheme:i,cssVars:o?void 0:Dn,themeClass:Ln==null?void 0:Ln.themeClass,onRender:Ln==null?void 0:Ln.onRender})},render(){var e,n;const{mergedClsPrefix:t,mergedStatus:o,themeClass:r,type:i,countGraphemes:a,onRender:s}=this,l=this.$slots;return s==null||s(),x("div",{ref:"wrapperElRef",class:[`${t}-input`,r,o&&`${t}-input--${o}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:i==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&i!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},x("div",{class:`${t}-input-wrapper`},_n(l.prefix,c=>c&&x("div",{class:`${t}-input__prefix`},c)),i==="textarea"?x(Ja,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,d;const{textAreaScrollContainerWidth:u}=this,p={width:this.autosize&&u&&`${u}px`};return x(Je,null,x("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style,p],onBlur:this.handleInputBlur,onFocus:b=>this.handleInputFocus(b,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?x("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,p],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?x(pa,{onResize:this.handleTextAreaMirrorResize},{default:()=>x("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):x("div",{class:`${t}-input__input`},x("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(n=this.inputProps)===null||n===void 0?void 0:n.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,0),onInput:c=>this.handleInput(c,0),onChange:c=>this.handleChange(c,0)})),this.showPlaceholder1?x("div",{class:`${t}-input__placeholder`},x("span",null,this.mergedPlaceholder[0])):null,this.autosize?x("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&_n(l.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?x("div",{class:`${t}-input__suffix`},[_n(l["clear-icon-placeholder"],d=>(this.clearable||d)&&x(yl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>d,icon:()=>{var u,p;return(p=(u=this.$slots)["clear-icon"])===null||p===void 0?void 0:p.call(u)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?x(_P,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?x(Iu,null,{default:d=>{var u;return(u=l.count)===null||u===void 0?void 0:u.call(l,d)}}):null,this.mergedShowPasswordOn&&this.type==="password"?x("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Lo(l["password-visible-icon"],()=>[x(ho,{clsPrefix:t},{default:()=>x(Ck,null)})]):Lo(l["password-invisible-icon"],()=>[x(ho,{clsPrefix:t},{default:()=>x(wk,null)})])):null]):null)),this.pair?x("span",{class:`${t}-input__separator`},Lo(l.separator,()=>[this.separator])):null,this.pair?x("div",{class:`${t}-input-wrapper`},x("div",{class:`${t}-input__input`},x("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,1),onInput:c=>this.handleInput(c,1),onChange:c=>this.handleChange(c,1)}),this.showPlaceholder2?x("div",{class:`${t}-input__placeholder`},x("span",null,this.mergedPlaceholder[1])):null),_n(l.suffix,c=>(this.clearable||c)&&x("div",{class:`${t}-input__suffix`},[this.clearable&&x(yl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var d;return(d=l["clear-icon"])===null||d===void 0?void 0:d.call(l)},placeholder:()=>{var d;return(d=l["clear-icon-placeholder"])===null||d===void 0?void 0:d.call(l)}}),c]))):null,this.mergedBordered?x("div",{class:`${t}-input__border`}):null,this.mergedBordered?x("div",{class:`${t}-input__state-border`}):null,this.showCount&&i==="textarea"?x(Iu,null,{default:c=>{var d;const{renderCount:u}=this;return u?u(c):(d=l.count)===null||d===void 0?void 0:d.call(l,c)}}):null)}});function Zp(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const s$={name:"AutoComplete",common:ce,peers:{InternalSelectMenu:ki,Input:dt},self:Zp},l$=s$,c$={name:"AutoComplete",common:le,peers:{InternalSelectMenu:Pi,Input:vt},self:Zp},d$=c$,Xp=e=>{const{borderRadius:n,avatarColor:t,cardColor:o,fontSize:r,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,modalColor:d,popoverColor:u}=e;return{borderRadius:n,fontSize:r,border:`2px solid ${o}`,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,color:ve(o,t),colorModal:ve(d,t),colorPopover:ve(u,t)}},u$={name:"Avatar",common:ce,self:Xp},Jp=u$,f$={name:"Avatar",common:le,self:Xp},Yp=f$,Qp=()=>({gap:"-12px"}),h$={name:"AvatarGroup",common:ce,peers:{Avatar:Jp},self:Qp},p$=h$,m$={name:"AvatarGroup",common:le,peers:{Avatar:Yp},self:Qp},g$=m$,em={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},b$={name:"BackTop",common:le,self(e){const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},em),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},v$=b$,y$=e=>{const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},em),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},x$={name:"BackTop",common:ce,self:y$},C$=x$,w$={name:"Badge",common:le,self(e){const{errorColorSuppl:n,infoColorSuppl:t,successColorSuppl:o,warningColorSuppl:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}}},S$=w$,T$=e=>{const{errorColor:n,infoColor:t,successColor:o,warningColor:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}},k$={name:"Badge",common:ce,self:T$},P$=k$,$$={fontWeightActive:"400"},nm=e=>{const{fontSize:n,textColor3:t,textColor2:o,borderRadius:r,buttonColor2Hover:i,buttonColor2Pressed:a}=e;return Object.assign(Object.assign({},$$),{fontSize:n,itemLineHeight:"1.25",itemTextColor:t,itemTextColorHover:o,itemTextColorPressed:o,itemTextColorActive:o,itemBorderRadius:r,itemColorHover:i,itemColorPressed:a,separatorColor:t})},A$={name:"Breadcrumb",common:ce,self:nm},R$=A$,D$={name:"Breadcrumb",common:le,self:nm},I$=D$;function To(e){return ve(e,[255,255,255,.16])}function Qi(e){return ve(e,[0,0,0,.12])}const H$="n-button-group",_$={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},tm=e=>{const{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadius:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,textColor2:u,textColor3:p,primaryColorHover:b,primaryColorPressed:h,borderColor:v,primaryColor:m,baseColor:g,infoColor:S,infoColorHover:_,infoColorPressed:k,successColor:T,successColorHover:R,successColorPressed:y,warningColor:w,warningColorHover:I,warningColorPressed:H,errorColor:U,errorColorHover:z,errorColorPressed:te,fontWeight:L,buttonColor2:M,buttonColor2Hover:se,buttonColor2Pressed:j,fontWeightStrong:ie}=e;return Object.assign(Object.assign({},_$),{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:M,colorSecondaryHover:se,colorSecondaryPressed:j,colorTertiary:M,colorTertiaryHover:se,colorTertiaryPressed:j,colorQuaternary:"#0000",colorQuaternaryHover:se,colorQuaternaryPressed:j,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:u,textColorTertiary:p,textColorHover:b,textColorPressed:h,textColorFocus:b,textColorDisabled:u,textColorText:u,textColorTextHover:b,textColorTextPressed:h,textColorTextFocus:b,textColorTextDisabled:u,textColorGhost:u,textColorGhostHover:b,textColorGhostPressed:h,textColorGhostFocus:b,textColorGhostDisabled:u,border:`1px solid ${v}`,borderHover:`1px solid ${b}`,borderPressed:`1px solid ${h}`,borderFocus:`1px solid ${b}`,borderDisabled:`1px solid ${v}`,rippleColor:m,colorPrimary:m,colorHoverPrimary:b,colorPressedPrimary:h,colorFocusPrimary:b,colorDisabledPrimary:m,textColorPrimary:g,textColorHoverPrimary:g,textColorPressedPrimary:g,textColorFocusPrimary:g,textColorDisabledPrimary:g,textColorTextPrimary:m,textColorTextHoverPrimary:b,textColorTextPressedPrimary:h,textColorTextFocusPrimary:b,textColorTextDisabledPrimary:u,textColorGhostPrimary:m,textColorGhostHoverPrimary:b,textColorGhostPressedPrimary:h,textColorGhostFocusPrimary:b,textColorGhostDisabledPrimary:m,borderPrimary:`1px solid ${m}`,borderHoverPrimary:`1px solid ${b}`,borderPressedPrimary:`1px solid ${h}`,borderFocusPrimary:`1px solid ${b}`,borderDisabledPrimary:`1px solid ${m}`,rippleColorPrimary:m,colorInfo:S,colorHoverInfo:_,colorPressedInfo:k,colorFocusInfo:_,colorDisabledInfo:S,textColorInfo:g,textColorHoverInfo:g,textColorPressedInfo:g,textColorFocusInfo:g,textColorDisabledInfo:g,textColorTextInfo:S,textColorTextHoverInfo:_,textColorTextPressedInfo:k,textColorTextFocusInfo:_,textColorTextDisabledInfo:u,textColorGhostInfo:S,textColorGhostHoverInfo:_,textColorGhostPressedInfo:k,textColorGhostFocusInfo:_,textColorGhostDisabledInfo:S,borderInfo:`1px solid ${S}`,borderHoverInfo:`1px solid ${_}`,borderPressedInfo:`1px solid ${k}`,borderFocusInfo:`1px solid ${_}`,borderDisabledInfo:`1px solid ${S}`,rippleColorInfo:S,colorSuccess:T,colorHoverSuccess:R,colorPressedSuccess:y,colorFocusSuccess:R,colorDisabledSuccess:T,textColorSuccess:g,textColorHoverSuccess:g,textColorPressedSuccess:g,textColorFocusSuccess:g,textColorDisabledSuccess:g,textColorTextSuccess:T,textColorTextHoverSuccess:R,textColorTextPressedSuccess:y,textColorTextFocusSuccess:R,textColorTextDisabledSuccess:u,textColorGhostSuccess:T,textColorGhostHoverSuccess:R,textColorGhostPressedSuccess:y,textColorGhostFocusSuccess:R,textColorGhostDisabledSuccess:T,borderSuccess:`1px solid ${T}`,borderHoverSuccess:`1px solid ${R}`,borderPressedSuccess:`1px solid ${y}`,borderFocusSuccess:`1px solid ${R}`,borderDisabledSuccess:`1px solid ${T}`,rippleColorSuccess:T,colorWarning:w,colorHoverWarning:I,colorPressedWarning:H,colorFocusWarning:I,colorDisabledWarning:w,textColorWarning:g,textColorHoverWarning:g,textColorPressedWarning:g,textColorFocusWarning:g,textColorDisabledWarning:g,textColorTextWarning:w,textColorTextHoverWarning:I,textColorTextPressedWarning:H,textColorTextFocusWarning:I,textColorTextDisabledWarning:u,textColorGhostWarning:w,textColorGhostHoverWarning:I,textColorGhostPressedWarning:H,textColorGhostFocusWarning:I,textColorGhostDisabledWarning:w,borderWarning:`1px solid ${w}`,borderHoverWarning:`1px solid ${I}`,borderPressedWarning:`1px solid ${H}`,borderFocusWarning:`1px solid ${I}`,borderDisabledWarning:`1px solid ${w}`,rippleColorWarning:w,colorError:U,colorHoverError:z,colorPressedError:te,colorFocusError:z,colorDisabledError:U,textColorError:g,textColorHoverError:g,textColorPressedError:g,textColorFocusError:g,textColorDisabledError:g,textColorTextError:U,textColorTextHoverError:z,textColorTextPressedError:te,textColorTextFocusError:z,textColorTextDisabledError:u,textColorGhostError:U,textColorGhostHoverError:z,textColorGhostPressedError:te,textColorGhostFocusError:z,textColorGhostDisabledError:U,borderError:`1px solid ${U}`,borderHoverError:`1px solid ${z}`,borderPressedError:`1px solid ${te}`,borderFocusError:`1px solid ${z}`,borderDisabledError:`1px solid ${U}`,rippleColorError:U,waveOpacity:"0.6",fontWeight:L,fontWeightStrong:ie})},E$={name:"Button",common:ce,self:tm},qn=E$,z$={name:"Button",common:le,self(e){const n=tm(e);return n.waveOpacity="0.8",n.colorOpacitySecondary="0.16",n.colorOpacitySecondaryHover="0.2",n.colorOpacitySecondaryPressed="0.12",n}},ot=z$,M$=O([ne("button",`
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
 `,[Q("color",[F("border",{borderColor:"var(--n-border-color)"}),Q("disabled",[F("border",{borderColor:"var(--n-border-color-disabled)"})]),zn("disabled",[O("&:focus",[F("state-border",{borderColor:"var(--n-border-color-focus)"})]),O("&:hover",[F("state-border",{borderColor:"var(--n-border-color-hover)"})]),O("&:active",[F("state-border",{borderColor:"var(--n-border-color-pressed)"})]),Q("pressed",[F("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),Q("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[F("border",{border:"var(--n-border-disabled)"})]),zn("disabled",[O("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[F("state-border",{border:"var(--n-border-focus)"})]),O("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[F("state-border",{border:"var(--n-border-hover)"})]),O("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[F("state-border",{border:"var(--n-border-pressed)"})]),Q("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[F("state-border",{border:"var(--n-border-pressed)"})])]),Q("loading","cursor: wait;"),ne("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[Q("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),mo&&"MozBoxSizing"in document.createElement("div").style?O("&::moz-focus-inner",{border:0}):null,F("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),F("border",{border:"var(--n-border)"}),F("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),F("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[ne("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[vi({top:"50%",originalTransform:"translateY(-50%)"})]),LP()]),F("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[O("~",[F("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),Q("block",`
 display: flex;
 width: 100%;
 `),Q("dashed",[F("border, state-border",{borderStyle:"dashed !important"})]),Q("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),O("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),O("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),L$=Object.assign(Object.assign({},De.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Kp}}),O$=me({name:"Button",props:L$,setup(e){const n=K(null),t=K(null),o=K(!1),r=$n(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),i=Re(H$,{}),{mergedSizeRef:a}=Eh({},{defaultSize:"medium",mergedSize:k=>{const{size:T}=e;if(T)return T;const{size:R}=i;if(R)return R;const{mergedSize:y}=k||{};return y?y.value:"medium"}}),s=G(()=>e.focusable&&!e.disabled),l=k=>{var T;s.value||k.preventDefault(),!e.nativeFocusBehavior&&(k.preventDefault(),!e.disabled&&s.value&&((T=n.value)===null||T===void 0||T.focus({preventScroll:!0})))},c=k=>{var T;if(!e.disabled&&!e.loading){const{onClick:R}=e;R&&nn(R,k),e.text||(T=t.value)===null||T===void 0||T.play()}},d=k=>{switch(k.key){case"Enter":if(!e.keyboard)return;o.value=!1}},u=k=>{switch(k.key){case"Enter":if(!e.keyboard||e.loading){k.preventDefault();return}o.value=!0}},p=()=>{o.value=!1},{inlineThemeDisabled:b,mergedClsPrefixRef:h,mergedRtlRef:v}=un(e),m=De("Button","-button",M$,qn,e,h),g=Uo("Button",v,h),S=G(()=>{const k=m.value,{common:{cubicBezierEaseInOut:T,cubicBezierEaseOut:R},self:y}=k,{rippleDuration:w,opacityDisabled:I,fontWeight:H,fontWeightStrong:U}=y,z=a.value,{dashed:te,type:L,ghost:M,text:se,color:j,round:ie,circle:$,textColor:Z,secondary:Pe,tertiary:He,quaternary:Pn,strong:Be}=e,Oe={"font-weight":Be?U:H};let Se={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const _e=L==="tertiary",Zn=L==="default",Ae=_e?"default":L;if(se){const ee=Z||j;Se={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":ee||y[be("textColorText",Ae)],"--n-text-color-hover":ee?To(ee):y[be("textColorTextHover",Ae)],"--n-text-color-pressed":ee?Qi(ee):y[be("textColorTextPressed",Ae)],"--n-text-color-focus":ee?To(ee):y[be("textColorTextHover",Ae)],"--n-text-color-disabled":ee||y[be("textColorTextDisabled",Ae)]}}else if(M||te){const ee=Z||j;Se={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":j||y[be("rippleColor",Ae)],"--n-text-color":ee||y[be("textColorGhost",Ae)],"--n-text-color-hover":ee?To(ee):y[be("textColorGhostHover",Ae)],"--n-text-color-pressed":ee?Qi(ee):y[be("textColorGhostPressed",Ae)],"--n-text-color-focus":ee?To(ee):y[be("textColorGhostHover",Ae)],"--n-text-color-disabled":ee||y[be("textColorGhostDisabled",Ae)]}}else if(Pe){const ee=Zn?y.textColor:_e?y.textColorTertiary:y[be("color",Ae)],N=j||ee,xe=L!=="default"&&L!=="tertiary";Se={"--n-color":xe?V(N,{alpha:Number(y.colorOpacitySecondary)}):y.colorSecondary,"--n-color-hover":xe?V(N,{alpha:Number(y.colorOpacitySecondaryHover)}):y.colorSecondaryHover,"--n-color-pressed":xe?V(N,{alpha:Number(y.colorOpacitySecondaryPressed)}):y.colorSecondaryPressed,"--n-color-focus":xe?V(N,{alpha:Number(y.colorOpacitySecondaryHover)}):y.colorSecondaryHover,"--n-color-disabled":y.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":N,"--n-text-color-hover":N,"--n-text-color-pressed":N,"--n-text-color-focus":N,"--n-text-color-disabled":N}}else if(He||Pn){const ee=Zn?y.textColor:_e?y.textColorTertiary:y[be("color",Ae)],N=j||ee;He?(Se["--n-color"]=y.colorTertiary,Se["--n-color-hover"]=y.colorTertiaryHover,Se["--n-color-pressed"]=y.colorTertiaryPressed,Se["--n-color-focus"]=y.colorSecondaryHover,Se["--n-color-disabled"]=y.colorTertiary):(Se["--n-color"]=y.colorQuaternary,Se["--n-color-hover"]=y.colorQuaternaryHover,Se["--n-color-pressed"]=y.colorQuaternaryPressed,Se["--n-color-focus"]=y.colorQuaternaryHover,Se["--n-color-disabled"]=y.colorQuaternary),Se["--n-ripple-color"]="#0000",Se["--n-text-color"]=N,Se["--n-text-color-hover"]=N,Se["--n-text-color-pressed"]=N,Se["--n-text-color-focus"]=N,Se["--n-text-color-disabled"]=N}else Se={"--n-color":j||y[be("color",Ae)],"--n-color-hover":j?To(j):y[be("colorHover",Ae)],"--n-color-pressed":j?Qi(j):y[be("colorPressed",Ae)],"--n-color-focus":j?To(j):y[be("colorFocus",Ae)],"--n-color-disabled":j||y[be("colorDisabled",Ae)],"--n-ripple-color":j||y[be("rippleColor",Ae)],"--n-text-color":Z||(j?y.textColorPrimary:_e?y.textColorTertiary:y[be("textColor",Ae)]),"--n-text-color-hover":Z||(j?y.textColorHoverPrimary:y[be("textColorHover",Ae)]),"--n-text-color-pressed":Z||(j?y.textColorPressedPrimary:y[be("textColorPressed",Ae)]),"--n-text-color-focus":Z||(j?y.textColorFocusPrimary:y[be("textColorFocus",Ae)]),"--n-text-color-disabled":Z||(j?y.textColorDisabledPrimary:y[be("textColorDisabled",Ae)])};let Xn={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};se?Xn={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Xn={"--n-border":y[be("border",Ae)],"--n-border-hover":y[be("borderHover",Ae)],"--n-border-pressed":y[be("borderPressed",Ae)],"--n-border-focus":y[be("borderFocus",Ae)],"--n-border-disabled":y[be("borderDisabled",Ae)]};const{[be("height",z)]:Ze,[be("fontSize",z)]:P,[be("padding",z)]:A,[be("paddingRound",z)]:B,[be("iconSize",z)]:q,[be("borderRadius",z)]:J,[be("iconMargin",z)]:ae,waveOpacity:de}=y,re={"--n-width":$&&!se?Ze:"initial","--n-height":se?"initial":Ze,"--n-font-size":P,"--n-padding":$||se?"initial":ie?B:A,"--n-icon-size":q,"--n-icon-margin":ae,"--n-border-radius":se?"initial":$||ie?Ze:J};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":T,"--n-bezier-ease-out":R,"--n-ripple-duration":w,"--n-opacity-disabled":I,"--n-wave-opacity":de},Oe),Se),Xn),re)}),_=b?Rn("button",G(()=>{let k="";const{dashed:T,type:R,ghost:y,text:w,color:I,round:H,circle:U,textColor:z,secondary:te,tertiary:L,quaternary:M,strong:se}=e;T&&(k+="a"),y&&(k+="b"),w&&(k+="c"),H&&(k+="d"),U&&(k+="e"),te&&(k+="f"),L&&(k+="g"),M&&(k+="h"),se&&(k+="i"),I&&(k+="j"+gd(I)),z&&(k+="k"+gd(z));const{value:j}=a;return k+="l"+j[0],k+="m"+R[0],k}),S,e):void 0;return{selfElRef:n,waveElRef:t,mergedClsPrefix:h,mergedFocusable:s,mergedSize:a,showBorder:r,enterPressed:o,rtlEnabled:g,handleMousedown:l,handleKeydown:u,handleBlur:p,handleKeyup:d,handleClick:c,customColorCssVars:G(()=>{const{color:k}=e;if(!k)return null;const T=To(k);return{"--n-border-color":k,"--n-border-color-hover":T,"--n-border-color-pressed":Qi(k),"--n-border-color-focus":T,"--n-border-color-disabled":k}}),cssVars:b?void 0:S,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:e,tag:n,onRender:t}=this;t==null||t();const o=_n(this.$slots.default,r=>r&&x("span",{class:`${e}-button__content`},r));return x(n,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&o,x(Pp,{width:!0},{default:()=>_n(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&x("span",{class:`${e}-button__icon`,style:{margin:rl(this.$slots.default)?"0":""}},x(Za,null,{default:()=>this.loading?x(mc,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):x("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&o,this.text?null:x(vP,{ref:"waveElRef",clsPrefix:e}),this.showBorder?x("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?x("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),xl=O$,B$={titleFontSize:"22px"},om=e=>{const{borderRadius:n,fontSize:t,lineHeight:o,textColor2:r,textColor1:i,textColorDisabled:a,dividerColor:s,fontWeightStrong:l,primaryColor:c,baseColor:d,hoverColor:u,cardColor:p,modalColor:b,popoverColor:h}=e;return Object.assign(Object.assign({},B$),{borderRadius:n,borderColor:ve(p,s),borderColorModal:ve(b,s),borderColorPopover:ve(h,s),textColor:r,titleFontWeight:l,titleTextColor:i,dayTextColor:a,fontSize:t,lineHeight:o,dateColorCurrent:c,dateTextColorCurrent:d,cellColorHover:ve(p,u),cellColorHoverModal:ve(b,u),cellColorHoverPopover:ve(h,u),cellColor:p,cellColorModal:b,cellColorPopover:h,barColor:c})},F$={name:"Calendar",common:ce,peers:{Button:qn},self:om},W$=F$,j$={name:"Calendar",common:le,peers:{Button:ot},self:om},N$=j$,rm=e=>{const{fontSize:n,boxShadow2:t,popoverColor:o,textColor2:r,borderRadius:i,borderColor:a,heightSmall:s,heightMedium:l,heightLarge:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:p,dividerColor:b}=e;return{panelFontSize:n,boxShadow:t,color:o,textColor:r,borderRadius:i,border:`1px solid ${a}`,heightSmall:s,heightMedium:l,heightLarge:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:p,dividerColor:b}},G$={name:"ColorPicker",common:ce,peers:{Input:dt,Button:qn},self:rm},V$=G$,K$={name:"ColorPicker",common:le,peers:{Input:vt,Button:ot},self:rm},U$=K$,q$={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},im=e=>{const{primaryColor:n,borderRadius:t,lineHeight:o,fontSize:r,cardColor:i,textColor2:a,textColor1:s,dividerColor:l,fontWeightStrong:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,closeColorHover:b,closeColorPressed:h,modalColor:v,boxShadow1:m,popoverColor:g,actionColor:S}=e;return Object.assign(Object.assign({},q$),{lineHeight:o,color:i,colorModal:v,colorPopover:g,colorTarget:n,colorEmbedded:S,colorEmbeddedModal:S,colorEmbeddedPopover:S,textColor:a,titleTextColor:s,borderColor:l,actionColor:S,titleFontWeight:c,closeColorHover:b,closeColorPressed:h,closeBorderRadius:t,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,fontSizeSmall:r,fontSizeMedium:r,fontSizeLarge:r,fontSizeHuge:r,boxShadow:m,borderRadius:t})},Z$={name:"Card",common:ce,self:im},xc=Z$,X$={name:"Card",common:le,self(e){const n=im(e),{cardColor:t,modalColor:o,popoverColor:r}=e;return n.colorEmbedded=t,n.colorEmbeddedModal=o,n.colorEmbeddedPopover=r,n}},am=X$,J$=O([ne("card",`
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
 `,[lh({background:"var(--n-color-modal)"}),Q("hoverable",[O("&:hover","box-shadow: var(--n-box-shadow);")]),Q("content-segmented",[O(">",[F("content",{paddingTop:"var(--n-padding-bottom)"})])]),Q("content-soft-segmented",[O(">",[F("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),Q("footer-segmented",[O(">",[F("footer",{paddingTop:"var(--n-padding-bottom)"})])]),Q("footer-soft-segmented",[O(">",[F("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),O(">",[ne("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[F("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),F("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),F("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),F("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),F("content","flex: 1; min-width: 0;"),F("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[O("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),F("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),ne("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[O("img",`
 display: block;
 width: 100%;
 `)]),Q("bordered",`
 border: 1px solid var(--n-border-color);
 `,[O("&:target","border-color: var(--n-color-target);")]),Q("action-segmented",[O(">",[F("action",[O("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Q("content-segmented, content-soft-segmented",[O(">",[F("content",{transition:"border-color 0.3s var(--n-bezier)"},[O("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Q("footer-segmented, footer-soft-segmented",[O(">",[F("footer",{transition:"border-color 0.3s var(--n-bezier)"},[O("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),Q("embedded",`
 background-color: var(--n-color-embedded);
 `)]),sh(ne("card",`
 background: var(--n-color-modal);
 `,[Q("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),by(ne("card",`
 background: var(--n-color-popover);
 `,[Q("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Cc={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Y$=Oa(Cc),Q$=Object.assign(Object.assign({},De.props),Cc),eA=me({name:"Card",props:Q$,setup(e){const n=()=>{const{onClose:c}=e;c&&nn(c)},{inlineThemeDisabled:t,mergedClsPrefixRef:o,mergedRtlRef:r}=un(e),i=De("Card","-card",J$,xc,e,o),a=Uo("Card",r,o),s=G(()=>{const{size:c}=e,{self:{color:d,colorModal:u,colorTarget:p,textColor:b,titleTextColor:h,titleFontWeight:v,borderColor:m,actionColor:g,borderRadius:S,lineHeight:_,closeIconColor:k,closeIconColorHover:T,closeIconColorPressed:R,closeColorHover:y,closeColorPressed:w,closeBorderRadius:I,closeIconSize:H,closeSize:U,boxShadow:z,colorPopover:te,colorEmbedded:L,colorEmbeddedModal:M,colorEmbeddedPopover:se,[be("padding",c)]:j,[be("fontSize",c)]:ie,[be("titleFontSize",c)]:$},common:{cubicBezierEaseInOut:Z}}=i.value,{top:Pe,left:He,bottom:Pn}=Zl(j);return{"--n-bezier":Z,"--n-border-radius":S,"--n-color":d,"--n-color-modal":u,"--n-color-popover":te,"--n-color-embedded":L,"--n-color-embedded-modal":M,"--n-color-embedded-popover":se,"--n-color-target":p,"--n-text-color":b,"--n-line-height":_,"--n-action-color":g,"--n-title-text-color":h,"--n-title-font-weight":v,"--n-close-icon-color":k,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":R,"--n-close-color-hover":y,"--n-close-color-pressed":w,"--n-border-color":m,"--n-box-shadow":z,"--n-padding-top":Pe,"--n-padding-bottom":Pn,"--n-padding-left":He,"--n-font-size":ie,"--n-title-font-size":$,"--n-close-size":U,"--n-close-icon-size":H,"--n-close-border-radius":I}}),l=t?Rn("card",G(()=>e.size[0]),s,e):void 0;return{rtlEnabled:a,mergedClsPrefix:o,mergedTheme:i,handleCloseClick:n,cssVars:t?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:n,hoverable:t,mergedClsPrefix:o,rtlEnabled:r,onRender:i,embedded:a,tag:s,$slots:l}=this;return i==null||i(),x(s,{class:[`${o}-card`,this.themeClass,a&&`${o}-card--embedded`,{[`${o}-card--rtl`]:r,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:t}],style:this.cssVars,role:this.role},_n(l.cover,c=>c&&x("div",{class:`${o}-card-cover`,role:"none"},c)),_n(l.header,c=>c||this.title||this.closable?x("div",{class:`${o}-card-header`,style:this.headerStyle},x("div",{class:`${o}-card-header__main`,role:"heading"},c||this.title),_n(l["header-extra"],d=>d&&x("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},d)),this.closable?x(Xa,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),_n(l.default,c=>c&&x("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},c)),_n(l.footer,c=>c&&[x("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},c)]),_n(l.action,c=>c&&x("div",{class:`${o}-card__action`,role:"none"},c)))}}),sm=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),nA={name:"Carousel",common:ce,self:sm},tA=nA,oA={name:"Carousel",common:le,self:sm},rA=oA,iA={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},lm=e=>{const{baseColor:n,inputColorDisabled:t,cardColor:o,modalColor:r,popoverColor:i,textColorDisabled:a,borderColor:s,primaryColor:l,textColor2:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:p,borderRadiusSmall:b,lineHeight:h}=e;return Object.assign(Object.assign({},iA),{labelLineHeight:h,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:p,borderRadius:b,color:n,colorChecked:l,colorDisabled:t,colorDisabledChecked:t,colorTableHeader:o,colorTableHeaderModal:r,colorTableHeaderPopover:i,checkMarkColor:n,checkMarkColorDisabled:a,checkMarkColorDisabledChecked:a,border:`1px solid ${s}`,borderDisabled:`1px solid ${s}`,borderDisabledChecked:`1px solid ${s}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${V(l,{alpha:.3})}`,textColor:c,textColorDisabled:a})},aA={name:"Checkbox",common:ce,self:lm},Tr=aA,sA={name:"Checkbox",common:le,self(e){const{cardColor:n}=e,t=lm(e);return t.color="#0000",t.checkMarkColor=n,t}},kr=sA,cm=e=>{const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r,textColor3:i,primaryColor:a,textColorDisabled:s,dividerColor:l,hoverColor:c,fontSizeMedium:d,heightMedium:u}=e;return{menuBorderRadius:n,menuColor:o,menuBoxShadow:t,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:u,optionFontSize:d,optionColorHover:c,optionTextColor:r,optionTextColorActive:a,optionTextColorDisabled:s,optionCheckMarkColor:a,loadingColor:a,columnWidth:"180px"}},lA={name:"Cascader",common:ce,peers:{InternalSelectMenu:ki,InternalSelection:vc,Scrollbar:Un,Checkbox:Tr,Empty:Kt},self:cm},cA=lA,dA={name:"Cascader",common:le,peers:{InternalSelectMenu:Pi,InternalSelection:yc,Scrollbar:tt,Checkbox:kr,Empty:Kt},self:cm},uA=dA,fA={name:"Code",common:le,self(e){const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:r}}},dm=fA,hA=e=>{const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:r}},pA={name:"Code",common:ce,self:hA},um=pA,fm=e=>{const{fontWeight:n,textColor1:t,textColor2:o,textColorDisabled:r,dividerColor:i,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:n,dividerColor:i,titleTextColor:t,titleTextColorDisabled:r,fontSize:a,textColor:o,arrowColor:o,arrowColorDisabled:r,itemMargin:"16px 0 0 0"}},mA={name:"Collapse",common:ce,self:fm},gA=mA,bA={name:"Collapse",common:le,self:fm},vA=bA,hm=e=>{const{cubicBezierEaseInOut:n}=e;return{bezier:n}},yA={name:"CollapseTransition",common:ce,self:hm},xA=yA,CA={name:"CollapseTransition",common:le,self:hm},wA=CA,SA={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(jo("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},pm=me({name:"ConfigProvider",alias:["App"],props:SA,setup(e){const n=Re(fo,null),t=G(()=>{const{theme:h}=e;if(h===null)return;const v=n==null?void 0:n.mergedThemeRef.value;return h===void 0?v:v===void 0?h:Object.assign({},v,h)}),o=G(()=>{const{themeOverrides:h}=e;if(h!==null){if(h===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const v=n==null?void 0:n.mergedThemeOverridesRef.value;return v===void 0?h:Vr({},v,h)}}}),r=$n(()=>{const{namespace:h}=e;return h===void 0?n==null?void 0:n.mergedNamespaceRef.value:h}),i=$n(()=>{const{bordered:h}=e;return h===void 0?n==null?void 0:n.mergedBorderedRef.value:h}),a=G(()=>{const{icons:h}=e;return h===void 0?n==null?void 0:n.mergedIconsRef.value:h}),s=G(()=>{const{componentOptions:h}=e;return h!==void 0?h:n==null?void 0:n.mergedComponentPropsRef.value}),l=G(()=>{const{clsPrefix:h}=e;return h!==void 0?h:n==null?void 0:n.mergedClsPrefixRef.value}),c=G(()=>{var h;const{rtl:v}=e;if(v===void 0)return n==null?void 0:n.mergedRtlRef.value;const m={};for(const g of v)m[g.name]=ao(g),(h=g.peers)===null||h===void 0||h.forEach(S=>{S.name in m||(m[S.name]=ao(S))});return m}),d=G(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),u=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),p=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),b=G(()=>{const{value:h}=t,{value:v}=o,m=v&&Object.keys(v).length!==0,g=h==null?void 0:h.name;return g?m?`${g}-${fi(JSON.stringify(o.value))}`:g:m?fi(JSON.stringify(o.value)):""});return Ye(fo,{mergedThemeHashRef:b,mergedBreakpointsRef:d,mergedRtlRef:c,mergedIconsRef:a,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:r,mergedClsPrefixRef:l,mergedLocaleRef:G(()=>{const{locale:h}=e;if(h!==null)return h===void 0?n==null?void 0:n.mergedLocaleRef.value:h}),mergedDateLocaleRef:G(()=>{const{dateLocale:h}=e;if(h!==null)return h===void 0?n==null?void 0:n.mergedDateLocaleRef.value:h}),mergedHljsRef:G(()=>{const{hljs:h}=e;return h===void 0?n==null?void 0:n.mergedHljsRef.value:h}),mergedKatexRef:G(()=>{const{katex:h}=e;return h===void 0?n==null?void 0:n.mergedKatexRef.value:h}),mergedThemeRef:t,mergedThemeOverridesRef:o,inlineThemeDisabled:u||!1,preflightStyleDisabled:p||!1}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:r,mergedTheme:t,mergedThemeOverrides:o}},render(){var e,n,t,o;return this.abstract?(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t):x(this.as||this.tag,{class:`${this.mergedClsPrefix||kp}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),TA={name:"Popselect",common:le,peers:{Popover:Zo,InternalSelectMenu:Pi}},mm=TA;function kA(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const PA={name:"Popselect",common:ce,peers:{Popover:vo,InternalSelectMenu:ki},self:kA},gm=PA;function bm(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const $A={name:"Select",common:ce,peers:{InternalSelection:vc,InternalSelectMenu:ki},self:bm},vm=$A,AA={name:"Select",common:le,peers:{InternalSelection:yc,InternalSelectMenu:Pi},self:bm},ym=AA,RA={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"},xm=e=>{const{textColor2:n,primaryColor:t,primaryColorHover:o,primaryColorPressed:r,inputColorDisabled:i,textColorDisabled:a,borderColor:s,borderRadius:l,fontSizeTiny:c,fontSizeSmall:d,fontSizeMedium:u,heightTiny:p,heightSmall:b,heightMedium:h}=e;return Object.assign(Object.assign({},RA),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${s}`,buttonBorderHover:`1px solid ${s}`,buttonBorderPressed:`1px solid ${s}`,buttonIconColor:n,buttonIconColorHover:n,buttonIconColorPressed:n,itemTextColor:n,itemTextColorHover:o,itemTextColorPressed:r,itemTextColorActive:t,itemTextColorDisabled:a,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${t}`,itemBorderDisabled:`1px solid ${s}`,itemBorderRadius:l,itemSizeSmall:p,itemSizeMedium:b,itemSizeLarge:h,itemFontSizeSmall:c,itemFontSizeMedium:d,itemFontSizeLarge:u,jumperFontSizeSmall:c,jumperFontSizeMedium:d,jumperFontSizeLarge:u,jumperTextColor:n,jumperTextColorDisabled:a})},DA={name:"Pagination",common:ce,peers:{Select:vm,Input:dt,Popselect:gm},self:xm},Cm=DA,IA={name:"Pagination",common:le,peers:{Select:ym,Input:vt,Popselect:mm},self(e){const{primaryColor:n,opacity3:t}=e,o=V(n,{alpha:Number(t)}),r=xm(e);return r.itemBorderActive=`1px solid ${o}`,r.itemBorderDisabled="1px solid #0000",r}},wm=IA,Sm={padding:"8px 14px"},HA={name:"Tooltip",common:le,peers:{Popover:Zo},self(e){const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r}=e;return Object.assign(Object.assign({},Sm),{borderRadius:n,boxShadow:t,color:o,textColor:r})}},Qa=HA,_A=e=>{const{borderRadius:n,boxShadow2:t,baseColor:o}=e;return Object.assign(Object.assign({},Sm),{borderRadius:n,boxShadow:t,color:ve(o,"rgba(0, 0, 0, .85)"),textColor:o})},EA={name:"Tooltip",common:ce,peers:{Popover:vo},self:_A},$i=EA,zA={name:"Ellipsis",common:le,peers:{Tooltip:Qa}},Tm=zA,MA={name:"Ellipsis",common:ce,peers:{Tooltip:$i}},wc=MA,km={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},LA={name:"Radio",common:le,self(e){const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,heightSmall:p,heightMedium:b,heightLarge:h,lineHeight:v}=e;return Object.assign(Object.assign({},km),{labelLineHeight:v,buttonHeightSmall:p,buttonHeightMedium:b,buttonHeightLarge:h,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${V(t,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:t,buttonColor:"#0000",buttonColorActive:t,buttonTextColor:a,buttonTextColorActive:o,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${V(t,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${t}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},Pm=LA,OA=e=>{const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,heightSmall:p,heightMedium:b,heightLarge:h,lineHeight:v}=e;return Object.assign(Object.assign({},km),{labelLineHeight:v,buttonHeightSmall:p,buttonHeightMedium:b,buttonHeightLarge:h,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${V(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:o,colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:n,buttonColor:o,buttonColorActive:o,buttonTextColor:a,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${V(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})},BA={name:"Radio",common:ce,self:OA},$m=BA,FA={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},Am=e=>{const{primaryColor:n,textColor2:t,dividerColor:o,hoverColor:r,popoverColor:i,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:u,heightSmall:p,heightMedium:b,heightLarge:h,heightHuge:v,textColor3:m,opacityDisabled:g}=e;return Object.assign(Object.assign({},FA),{optionHeightSmall:p,optionHeightMedium:b,optionHeightLarge:h,optionHeightHuge:v,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:u,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:o,suffixColor:t,prefixColor:t,optionColorHover:r,optionColorActive:V(n,{alpha:.1}),groupHeaderTextColor:m,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:g})},WA={name:"Dropdown",common:ce,peers:{Popover:vo},self:Am},es=WA,jA={name:"Dropdown",common:le,peers:{Popover:Zo},self(e){const{primaryColorSuppl:n,primaryColor:t,popoverColor:o}=e,r=Am(e);return r.colorInverted=o,r.optionColorActive=V(t,{alpha:.15}),r.optionColorActiveInverted=n,r.optionColorHoverInverted=n,r}},Sc=jA,NA={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"},Rm=e=>{const{cardColor:n,modalColor:t,popoverColor:o,textColor2:r,textColor1:i,tableHeaderColor:a,tableColorHover:s,iconColor:l,primaryColor:c,fontWeightStrong:d,borderRadius:u,lineHeight:p,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:v,dividerColor:m,heightSmall:g,opacityDisabled:S,tableColorStriped:_}=e;return Object.assign(Object.assign({},NA),{actionDividerColor:m,lineHeight:p,borderRadius:u,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:v,borderColor:ve(n,m),tdColorHover:ve(n,s),tdColorStriped:ve(n,_),thColor:ve(n,a),thColorHover:ve(ve(n,a),s),tdColor:n,tdTextColor:r,thTextColor:i,thFontWeight:d,thButtonColorHover:s,thIconColor:l,thIconColorActive:c,borderColorModal:ve(t,m),tdColorHoverModal:ve(t,s),tdColorStripedModal:ve(t,_),thColorModal:ve(t,a),thColorHoverModal:ve(ve(t,a),s),tdColorModal:t,borderColorPopover:ve(o,m),tdColorHoverPopover:ve(o,s),tdColorStripedPopover:ve(o,_),thColorPopover:ve(o,a),thColorHoverPopover:ve(ve(o,a),s),tdColorPopover:o,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:c,loadingSize:g,opacityLoading:S})},GA={name:"DataTable",common:ce,peers:{Button:qn,Checkbox:Tr,Radio:$m,Pagination:Cm,Scrollbar:Un,Empty:Kt,Popover:vo,Ellipsis:wc,Dropdown:es},self:Rm},VA=GA,KA={name:"DataTable",common:le,peers:{Button:ot,Checkbox:kr,Radio:Pm,Pagination:wm,Scrollbar:tt,Empty:qo,Popover:Zo,Ellipsis:Tm,Dropdown:Sc},self(e){const n=Rm(e);return n.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",n.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",n}},UA=KA,qA=Object.assign(Object.assign({},Ya),De.props),ZA=me({name:"Tooltip",props:qA,__popover__:!0,setup(e){const n=De("Tooltip","-tooltip",void 0,$i,e),t=K(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(r){t.value.setShow(r)}}),{popoverRef:t,mergedTheme:n,popoverThemeOverrides:G(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return x(wa,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),XA=ne("ellipsis",{overflow:"hidden"},[zn("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),Q("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),Q("cursor-pointer",`
 cursor: pointer;
 `)]);function Hu(e){return`${e}-ellipsis--line-clamp`}function _u(e,n){return`${e}-ellipsis--cursor-${n}`}const JA=Object.assign(Object.assign({},De.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),YA=me({name:"Ellipsis",inheritAttrs:!1,props:JA,setup(e,{slots:n,attrs:t}){const{mergedClsPrefixRef:o}=un(e),r=De("Ellipsis","-ellipsis",XA,wc,e,o),i=K(null),a=K(null),s=K(null),l=K(!1),c=G(()=>{const{lineClamp:m}=e,{value:g}=l;return m!==void 0?{textOverflow:"","-webkit-line-clamp":g?"":m}:{textOverflow:g?"":"ellipsis","-webkit-line-clamp":""}});function d(){let m=!1;const{value:g}=l;if(g)return!0;const{value:S}=i;if(S){const{lineClamp:_}=e;if(b(S),_!==void 0)m=S.scrollHeight<=S.offsetHeight;else{const{value:k}=a;k&&(m=k.getBoundingClientRect().width<=S.getBoundingClientRect().width)}h(S,m)}return m}const u=G(()=>e.expandTrigger==="click"?()=>{var m;const{value:g}=l;g&&((m=s.value)===null||m===void 0||m.setShow(!1)),l.value=!g}:void 0);Gl(()=>{var m;e.tooltip&&((m=s.value)===null||m===void 0||m.setShow(!1))});const p=()=>x("span",Object.assign({},It(t,{class:[`${o.value}-ellipsis`,e.lineClamp!==void 0?Hu(o.value):void 0,e.expandTrigger==="click"?_u(o.value,"pointer"):void 0],style:c.value}),{ref:"triggerRef",onClick:u.value,onMouseenter:e.expandTrigger==="click"?d:void 0}),e.lineClamp?n:x("span",{ref:"triggerInnerRef"},n));function b(m){if(!m)return;const g=c.value,S=Hu(o.value);e.lineClamp!==void 0?v(m,S,"add"):v(m,S,"remove");for(const _ in g)m.style[_]!==g[_]&&(m.style[_]=g[_])}function h(m,g){const S=_u(o.value,"pointer");e.expandTrigger==="click"&&!g?v(m,S,"add"):v(m,S,"remove")}function v(m,g,S){S==="add"?m.classList.contains(g)||m.classList.add(g):m.classList.contains(g)&&m.classList.remove(g)}return{mergedTheme:r,triggerRef:i,triggerInnerRef:a,tooltipRef:s,handleClick:u,renderTrigger:p,getTooltipDisabled:d}},render(){var e;const{tooltip:n,renderTrigger:t,$slots:o}=this;if(n){const{mergedTheme:r}=this;return x(ZA,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:t,default:(e=o.tooltip)!==null&&e!==void 0?e:o.default})}else return t()}}),Dm=me({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return x("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Im=e=>{const{textColorBase:n,opacity1:t,opacity2:o,opacity3:r,opacity4:i,opacity5:a}=e;return{color:n,opacity1Depth:t,opacity2Depth:o,opacity3Depth:r,opacity4Depth:i,opacity5Depth:a}},QA={name:"Icon",common:ce,self:Im},Hm=QA,e3={name:"Icon",common:le,self:Im},n3=e3,t3=ne("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[Q("color-transition",{transition:"color .3s var(--n-bezier)"}),Q("depth",{color:"var(--n-color)"},[O("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),O("svg",{height:"1em",width:"1em"})]),o3=Object.assign(Object.assign({},De.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),_m=me({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:o3,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=un(e),o=De("Icon","-icon",t3,Hm,e,n),r=G(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=o.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:d}=l;return{"--n-bezier":s,"--n-color":c,"--n-opacity":d}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?Rn("icon",G(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:G(()=>{const{size:a,color:s}=e;return{fontSize:ra(a),color:s}}),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:o,component:r,onRender:i,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&jo("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),x("i",It(this.$attrs,{role:"img",class:[`${o}-icon`,a,{[`${o}-icon--depth`]:t,[`${o}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?x(r):this.$slots)}}),Tc="n-dropdown-menu",ns="n-dropdown",Eu="n-dropdown-option";function Cl(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function r3(e){return e.type==="group"}function Em(e){return e.type==="divider"}function i3(e){return e.type==="render"}const zm=me({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=Re(ns),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:c,renderIconRef:d,labelFieldRef:u,childrenFieldRef:p,renderOptionRef:b,nodePropsRef:h,menuPropsRef:v}=n,m=Re(Eu,null),g=Re(Tc),S=Re(wi),_=G(()=>e.tmNode.rawNode),k=G(()=>{const{value:j}=p;return Cl(e.tmNode.rawNode,j)}),T=G(()=>{const{disabled:j}=e.tmNode;return j}),R=G(()=>{if(!k.value)return!1;const{key:j,disabled:ie}=e.tmNode;if(ie)return!1;const{value:$}=t,{value:Z}=o,{value:Pe}=r,{value:He}=i;return $!==null?He.includes(j):Z!==null?He.includes(j)&&He[He.length-1]!==j:Pe!==null?He.includes(j):!1}),y=G(()=>o.value===null&&!s.value),w=wy(R,300,y),I=G(()=>!!(m!=null&&m.enteringSubmenuRef.value)),H=K(!1);Ye(Eu,{enteringSubmenuRef:H});function U(){H.value=!0}function z(){H.value=!1}function te(){const{parentKey:j,tmNode:ie}=e;ie.disabled||l.value&&(r.value=j,o.value=null,t.value=ie.key)}function L(){const{tmNode:j}=e;j.disabled||l.value&&t.value!==j.key&&te()}function M(j){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:ie}=j;ie&&!ud({target:ie},"dropdownOption")&&!ud({target:ie},"scrollbarRail")&&(t.value=null)}function se(){const{value:j}=k,{tmNode:ie}=e;l.value&&!j&&!ie.disabled&&(n.doSelect(ie.key,ie.rawNode),n.doUpdateShow(!1))}return{labelField:u,renderLabel:c,renderIcon:d,siblingHasIcon:g.showIconRef,siblingHasSubmenu:g.hasSubmenuRef,menuProps:v,popoverBody:S,animated:s,mergedShowSubmenu:G(()=>w.value&&!I.value),rawNode:_,hasSubmenu:k,pending:$n(()=>{const{value:j}=i,{key:ie}=e.tmNode;return j.includes(ie)}),childActive:$n(()=>{const{value:j}=a,{key:ie}=e.tmNode,$=j.findIndex(Z=>ie===Z);return $===-1?!1:$<j.length-1}),active:$n(()=>{const{value:j}=a,{key:ie}=e.tmNode,$=j.findIndex(Z=>ie===Z);return $===-1?!1:$===j.length-1}),mergedDisabled:T,renderOption:b,nodeProps:h,handleClick:se,handleMouseMove:L,handleMouseEnter:te,handleMouseLeave:M,handleSubmenuBeforeEnter:U,handleSubmenuAfterEnter:z}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:c,renderOption:d,nodeProps:u,props:p,scrollable:b}=this;let h=null;if(r){const S=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);h=x(Mm,Object.assign({},S,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const v={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=u==null?void 0:u(o),g=x("div",Object.assign({class:[`${i}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),x("div",It(v,p),[x("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(o):Hn(o.icon)]),x("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(o):Hn((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),x("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?x(_m,null,{default:()=>x(yk,null)}):null)]),this.hasSubmenu?x(bh,null,{default:()=>[x(vh,null,{default:()=>x("div",{class:`${i}-dropdown-offset-container`},x(Ch,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>x("div",{class:`${i}-dropdown-menu-wrapper`},t?x(bt,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>h}):h)}))})]}):null);return d?d({node:g,option:o}):g}}),a3=me({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=Re(Tc),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=Re(ns);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,l=x("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(s)),x("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},x("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},Hn(s.icon)),x("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):Hn((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),x("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}}),s3=me({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return x(Je,null,x(a3,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Em(i)?x(Dm,{clsPrefix:t,key:r.key}):r.isGroup?(jo("dropdown","`group` node is not allowed to be put in `group` node."),null):x(zm,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),l3=me({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return x("div",n,[e==null?void 0:e()])}}),Mm=me({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=Re(ns);Ye(Tc,{showIconRef:G(()=>{const r=n.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:G(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>Cl(l,r));const{rawNode:s}=i;return Cl(s,r)})})});const o=K(null);return Ye(ja,null),Ye(Na,null),Ye(wi,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:i3(i)?x(l3,{tmNode:r,key:r.key}):Em(i)?x(Dm,{clsPrefix:n,key:r.key}):r3(i)?x(s3,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):x(zm,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return x("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?x(Ep,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?Bp({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),c3=ne("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Mp(),ne("dropdown-option",`
 position: relative;
 `,[O("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[O("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ne("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[O("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),zn("disabled",[Q("pending",`
 color: var(--n-option-text-color-hover);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),O("&::before","background-color: var(--n-option-color-hover);")]),Q("active",`
 color: var(--n-option-text-color-active);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),O("&::before","background-color: var(--n-option-color-active);")]),Q("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),Q("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),Q("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[F("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[Q("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),F("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[Q("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),ne("icon",`
 font-size: var(--n-option-icon-size);
 `)]),F("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),F("suffix",`
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
 `,[Q("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),ne("icon",`
 font-size: var(--n-option-icon-size);
 `)]),ne("dropdown-menu","pointer-events: all;")]),ne("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),ne("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),ne("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),O(">",[ne("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),zn("scrollable",`
 padding: var(--n-padding);
 `),Q("scrollable",[F("content",`
 padding: var(--n-padding);
 `)])]),d3={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},u3=Object.keys(Ya),f3=Object.assign(Object.assign(Object.assign({},Ya),d3),De.props),h3=me({name:"Dropdown",inheritAttrs:!1,props:f3,setup(e){const n=K(!1),t=Jl(Xe(e,"show"),n),o=G(()=>{const{keyField:z,childrenField:te}=e;return Qk(e.options,{getKey(L){return L[z]},getDisabled(L){return L.disabled===!0},getIgnored(L){return L.type==="divider"||L.type==="render"},getChildren(L){return L[te]}})}),r=G(()=>o.value.treeNodes),i=K(null),a=K(null),s=K(null),l=G(()=>{var z,te,L;return(L=(te=(z=i.value)!==null&&z!==void 0?z:a.value)!==null&&te!==void 0?te:s.value)!==null&&L!==void 0?L:null}),c=G(()=>o.value.getPath(l.value).keyPath),d=G(()=>o.value.getPath(e.value).keyPath),u=$n(()=>e.keyboard&&t.value);Wy({keydown:{ArrowUp:{prevent:!0,handler:T},ArrowRight:{prevent:!0,handler:k},ArrowDown:{prevent:!0,handler:R},ArrowLeft:{prevent:!0,handler:_},Enter:{prevent:!0,handler:y},Escape:S}},u);const{mergedClsPrefixRef:p,inlineThemeDisabled:b}=un(e),h=De("Dropdown","-dropdown",c3,es,e,p);Ye(ns,{labelFieldRef:Xe(e,"labelField"),childrenFieldRef:Xe(e,"childrenField"),renderLabelRef:Xe(e,"renderLabel"),renderIconRef:Xe(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:d,animatedRef:Xe(e,"animated"),mergedShowRef:t,nodePropsRef:Xe(e,"nodeProps"),renderOptionRef:Xe(e,"renderOption"),menuPropsRef:Xe(e,"menuProps"),doSelect:v,doUpdateShow:m}),pn(t,z=>{!e.animated&&!z&&g()});function v(z,te){const{onSelect:L}=e;L&&nn(L,z,te)}function m(z){const{"onUpdate:show":te,onUpdateShow:L}=e;te&&nn(te,z),L&&nn(L,z),n.value=z}function g(){i.value=null,a.value=null,s.value=null}function S(){m(!1)}function _(){I("left")}function k(){I("right")}function T(){I("up")}function R(){I("down")}function y(){const z=w();z!=null&&z.isLeaf&&t.value&&(v(z.key,z.rawNode),m(!1))}function w(){var z;const{value:te}=o,{value:L}=l;return!te||L===null?null:(z=te.getNode(L))!==null&&z!==void 0?z:null}function I(z){const{value:te}=l,{value:{getFirstAvailableNode:L}}=o;let M=null;if(te===null){const se=L();se!==null&&(M=se.key)}else{const se=w();if(se){let j;switch(z){case"down":j=se.getNext();break;case"up":j=se.getPrev();break;case"right":j=se.getChild();break;case"left":j=se.getParent();break}j&&(M=j.key)}}M!==null&&(i.value=null,a.value=M)}const H=G(()=>{const{size:z,inverted:te}=e,{common:{cubicBezierEaseInOut:L},self:M}=h.value,{padding:se,dividerColor:j,borderRadius:ie,optionOpacityDisabled:$,[be("optionIconSuffixWidth",z)]:Z,[be("optionSuffixWidth",z)]:Pe,[be("optionIconPrefixWidth",z)]:He,[be("optionPrefixWidth",z)]:Pn,[be("fontSize",z)]:Be,[be("optionHeight",z)]:Oe,[be("optionIconSize",z)]:Se}=M,_e={"--n-bezier":L,"--n-font-size":Be,"--n-padding":se,"--n-border-radius":ie,"--n-option-height":Oe,"--n-option-prefix-width":Pn,"--n-option-icon-prefix-width":He,"--n-option-suffix-width":Pe,"--n-option-icon-suffix-width":Z,"--n-option-icon-size":Se,"--n-divider-color":j,"--n-option-opacity-disabled":$};return te?(_e["--n-color"]=M.colorInverted,_e["--n-option-color-hover"]=M.optionColorHoverInverted,_e["--n-option-color-active"]=M.optionColorActiveInverted,_e["--n-option-text-color"]=M.optionTextColorInverted,_e["--n-option-text-color-hover"]=M.optionTextColorHoverInverted,_e["--n-option-text-color-active"]=M.optionTextColorActiveInverted,_e["--n-option-text-color-child-active"]=M.optionTextColorChildActiveInverted,_e["--n-prefix-color"]=M.prefixColorInverted,_e["--n-suffix-color"]=M.suffixColorInverted,_e["--n-group-header-text-color"]=M.groupHeaderTextColorInverted):(_e["--n-color"]=M.color,_e["--n-option-color-hover"]=M.optionColorHover,_e["--n-option-color-active"]=M.optionColorActive,_e["--n-option-text-color"]=M.optionTextColor,_e["--n-option-text-color-hover"]=M.optionTextColorHover,_e["--n-option-text-color-active"]=M.optionTextColorActive,_e["--n-option-text-color-child-active"]=M.optionTextColorChildActive,_e["--n-prefix-color"]=M.prefixColor,_e["--n-suffix-color"]=M.suffixColor,_e["--n-group-header-text-color"]=M.groupHeaderTextColor),_e}),U=b?Rn("dropdown",G(()=>`${e.size[0]}${e.inverted?"i":""}`),H,e):void 0;return{mergedClsPrefix:p,mergedTheme:h,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&g()},doUpdateShow:m,cssVars:b?void 0:H,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender}},render(){const e=(o,r,i,a,s)=>{var l;const{mergedClsPrefix:c,menuProps:d}=this;(l=this.onRender)===null||l===void 0||l.call(this);const u=(d==null?void 0:d(void 0,this.tmNodes.map(b=>b.rawNode)))||{},p={ref:U0(r),class:[o,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return x(Mm,It(this.$attrs,p,u))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return x(wa,Object.assign({},Wo(this.$props,u3),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),p3={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},Lm=e=>{const{popoverColor:n,textColor2:t,primaryColor:o,hoverColor:r,dividerColor:i,opacityDisabled:a,boxShadow2:s,borderRadius:l,iconColor:c,iconColorDisabled:d}=e;return Object.assign(Object.assign({},p3),{panelColor:n,panelBoxShadow:s,panelDividerColor:i,itemTextColor:t,itemTextColorActive:o,itemColorHover:r,itemOpacityDisabled:a,itemBorderRadius:l,borderRadius:l,iconColor:c,iconColorDisabled:d})},m3={name:"TimePicker",common:ce,peers:{Scrollbar:Un,Button:qn,Input:dt},self:Lm},Om=m3,g3={name:"TimePicker",common:le,peers:{Scrollbar:tt,Button:ot,Input:vt},self:Lm},Bm=g3,b3={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},Fm=e=>{const{hoverColor:n,fontSize:t,textColor2:o,textColorDisabled:r,popoverColor:i,primaryColor:a,borderRadiusSmall:s,iconColor:l,iconColorDisabled:c,textColor1:d,dividerColor:u,boxShadow2:p,borderRadius:b,fontWeightStrong:h}=e;return Object.assign(Object.assign({},b3),{itemFontSize:t,calendarDaysFontSize:t,calendarTitleFontSize:t,itemTextColor:o,itemTextColorDisabled:r,itemTextColorActive:i,itemTextColorCurrent:a,itemColorIncluded:V(a,{alpha:.1}),itemColorHover:n,itemColorDisabled:n,itemColorActive:a,itemBorderRadius:s,panelColor:i,panelTextColor:o,arrowColor:l,calendarTitleTextColor:d,calendarTitleColorHover:n,calendarDaysTextColor:o,panelHeaderDividerColor:u,calendarDaysDividerColor:u,calendarDividerColor:u,panelActionDividerColor:u,panelBoxShadow:p,panelBorderRadius:b,calendarTitleFontWeight:h,scrollItemBorderRadius:b,iconColor:l,iconColorDisabled:c})},v3={name:"DatePicker",common:ce,peers:{Input:dt,Button:qn,TimePicker:Om,Scrollbar:Un},self:Fm},y3=v3,x3={name:"DatePicker",common:le,peers:{Input:vt,Button:ot,TimePicker:Bm,Scrollbar:tt},self(e){const{popoverColor:n,hoverColor:t,primaryColor:o}=e,r=Fm(e);return r.itemColorDisabled=ve(n,t),r.itemColorIncluded=V(o,{alpha:.15}),r.itemColorHover=ve(n,t),r}},C3=x3;var Os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const w3={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},Wm=e=>{const{tableHeaderColor:n,textColor2:t,textColor1:o,cardColor:r,modalColor:i,popoverColor:a,dividerColor:s,borderRadius:l,fontWeightStrong:c,lineHeight:d,fontSizeSmall:u,fontSizeMedium:p,fontSizeLarge:b}=e;return Object.assign(Object.assign({},w3),{lineHeight:d,fontSizeSmall:u,fontSizeMedium:p,fontSizeLarge:b,titleTextColor:o,thColor:ve(r,n),thColorModal:ve(i,n),thColorPopover:ve(a,n),thTextColor:o,thFontWeight:c,tdTextColor:t,tdColor:r,tdColorModal:i,tdColorPopover:a,borderColor:ve(r,s),borderColorModal:ve(i,s),borderColorPopover:ve(a,s),borderRadius:l})},S3={name:"Descriptions",common:ce,self:Wm},T3=S3,k3={name:"Descriptions",common:le,self:Wm},P3=k3,$3={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},jm=e=>{const{textColor1:n,textColor2:t,modalColor:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,infoColor:c,successColor:d,warningColor:u,errorColor:p,primaryColor:b,dividerColor:h,borderRadius:v,fontWeightStrong:m,lineHeight:g,fontSize:S}=e;return Object.assign(Object.assign({},$3),{fontSize:S,lineHeight:g,border:`1px solid ${h}`,titleTextColor:n,textColor:t,color:o,closeColorHover:s,closeColorPressed:l,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeBorderRadius:v,iconColor:b,iconColorInfo:c,iconColorSuccess:d,iconColorWarning:u,iconColorError:p,borderRadius:v,titleFontWeight:m})},A3={name:"Dialog",common:ce,peers:{Button:qn},self:jm},kc=A3,R3={name:"Dialog",common:le,peers:{Button:ot},self:jm},Nm=R3,ts={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Gm=Oa(ts),D3=O([ne("dialog",`
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
 `,[F("icon",{color:"var(--n-icon-color)"}),Q("bordered",{border:"var(--n-border)"}),Q("icon-top",[F("close",{margin:"var(--n-close-margin)"}),F("icon",{margin:"var(--n-icon-margin)"}),F("content",{textAlign:"center"}),F("title",{justifyContent:"center"}),F("action",{justifyContent:"center"})]),Q("icon-left",[F("icon",{margin:"var(--n-icon-margin)"}),Q("closable",[F("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),F("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),F("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[Q("last","margin-bottom: 0;")]),F("action",`
 display: flex;
 justify-content: flex-end;
 `,[O("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),F("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),F("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),ne("dialog-icon-container",{display:"flex",justifyContent:"center"})]),sh(ne("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),ne("dialog",[lh(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),I3={default:()=>x(xa,null),info:()=>x(xa,null),success:()=>x(hc,null),warning:()=>x(pc,null),error:()=>x(fc,null)},Vm=me({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},De.props),ts),setup(e){const{mergedComponentPropsRef:n,mergedClsPrefixRef:t,inlineThemeDisabled:o}=un(e),r=G(()=>{var u,p;const{iconPlacement:b}=e;return b||((p=(u=n==null?void 0:n.value)===null||u===void 0?void 0:u.Dialog)===null||p===void 0?void 0:p.iconPlacement)||"left"});function i(u){const{onPositiveClick:p}=e;p&&p(u)}function a(u){const{onNegativeClick:p}=e;p&&p(u)}function s(){const{onClose:u}=e;u&&u()}const l=De("Dialog","-dialog",D3,kc,e,t),c=G(()=>{const{type:u}=e,p=r.value,{common:{cubicBezierEaseInOut:b},self:{fontSize:h,lineHeight:v,border:m,titleTextColor:g,textColor:S,color:_,closeBorderRadius:k,closeColorHover:T,closeColorPressed:R,closeIconColor:y,closeIconColorHover:w,closeIconColorPressed:I,closeIconSize:H,borderRadius:U,titleFontWeight:z,titleFontSize:te,padding:L,iconSize:M,actionSpace:se,contentMargin:j,closeSize:ie,[p==="top"?"iconMarginIconTop":"iconMargin"]:$,[p==="top"?"closeMarginIconTop":"closeMargin"]:Z,[be("iconColor",u)]:Pe}}=l.value;return{"--n-font-size":h,"--n-icon-color":Pe,"--n-bezier":b,"--n-close-margin":Z,"--n-icon-margin":$,"--n-icon-size":M,"--n-close-size":ie,"--n-close-icon-size":H,"--n-close-border-radius":k,"--n-close-color-hover":T,"--n-close-color-pressed":R,"--n-close-icon-color":y,"--n-close-icon-color-hover":w,"--n-close-icon-color-pressed":I,"--n-color":_,"--n-text-color":S,"--n-border-radius":U,"--n-padding":L,"--n-line-height":v,"--n-border":m,"--n-content-margin":j,"--n-title-font-size":te,"--n-title-font-weight":z,"--n-title-text-color":g,"--n-action-space":se}}),d=o?Rn("dialog",G(()=>`${e.type[0]}${r.value[0]}`),c,e):void 0;return{mergedClsPrefix:t,mergedIconPlacement:r,mergedTheme:l,handlePositiveClick:i,handleNegativeClick:a,handleCloseClick:s,cssVars:o?void 0:c,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{bordered:n,mergedIconPlacement:t,cssVars:o,closable:r,showIcon:i,title:a,content:s,action:l,negativeText:c,positiveText:d,positiveButtonProps:u,negativeButtonProps:p,handlePositiveClick:b,handleNegativeClick:h,mergedTheme:v,loading:m,type:g,mergedClsPrefix:S}=this;(e=this.onRender)===null||e===void 0||e.call(this);const _=i?x(ho,{clsPrefix:S,class:`${S}-dialog__icon`},{default:()=>_n(this.$slots.icon,T=>T||(this.icon?Hn(this.icon):I3[this.type]()))}):null,k=_n(this.$slots.action,T=>T||d||c||l?x("div",{class:`${S}-dialog__action`},T||(l?[Hn(l)]:[this.negativeText&&x(xl,Object.assign({theme:v.peers.Button,themeOverrides:v.peerOverrides.Button,ghost:!0,size:"small",onClick:h},p),{default:()=>Hn(this.negativeText)}),this.positiveText&&x(xl,Object.assign({theme:v.peers.Button,themeOverrides:v.peerOverrides.Button,size:"small",type:g==="default"?"primary":g,disabled:m,loading:m,onClick:b},u),{default:()=>Hn(this.positiveText)})])):null);return x("div",{class:[`${S}-dialog`,this.themeClass,this.closable&&`${S}-dialog--closable`,`${S}-dialog--icon-${t}`,n&&`${S}-dialog--bordered`],style:o,role:"dialog"},r?x(Xa,{clsPrefix:S,class:`${S}-dialog__close`,onClick:this.handleCloseClick}):null,i&&t==="top"?x("div",{class:`${S}-dialog-icon-container`},_):null,x("div",{class:`${S}-dialog__title`},i&&t==="left"?_:null,Lo(this.$slots.header,()=>[Hn(a)])),x("div",{class:[`${S}-dialog__content`,k?"":`${S}-dialog__content--last`]},Lo(this.$slots.default,()=>[Hn(s)])),k)}}),Km="n-dialog-provider",Um="n-dialog-api",H3="n-dialog-reactive-list",qm=e=>{const{modalColor:n,textColor2:t,boxShadow3:o}=e;return{color:n,textColor:t,boxShadow:o}},_3={name:"Modal",common:ce,peers:{Scrollbar:Un,Dialog:kc,Card:xc},self:qm},Zm=_3,E3={name:"Modal",common:le,peers:{Scrollbar:tt,Dialog:Nm,Card:am},self:qm},z3=E3,Pc=Object.assign(Object.assign({},Cc),ts),M3=Oa(Pc),L3=me({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},Pc),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const n=K(null),t=K(null),o=K(e.show),r=K(null),i=K(null);pn(Xe(e,"show"),m=>{m&&(o.value=!0)}),Hx(G(()=>e.blockScroll&&o.value));const a=Re(hh);function s(){if(a.transformOriginRef.value==="center")return"";const{value:m}=r,{value:g}=i;if(m===null||g===null)return"";if(t.value){const S=t.value.containerScrollTop;return`${m}px ${g+S}px`}return""}function l(m){if(a.transformOriginRef.value==="center")return;const g=a.getMousePosition();if(!g||!t.value)return;const S=t.value.containerScrollTop,{offsetLeft:_,offsetTop:k}=m;if(g){const T=g.y,R=g.x;r.value=-(_-R),i.value=-(k-T-S)}m.style.transformOrigin=s()}function c(m){Gn(()=>{l(m)})}function d(m){m.style.transformOrigin=s(),e.onBeforeLeave()}function u(){o.value=!1,r.value=null,i.value=null,e.onAfterLeave()}function p(){const{onClose:m}=e;m&&m()}function b(){e.onNegativeClick()}function h(){e.onPositiveClick()}const v=K(null);return pn(v,m=>{m&&Gn(()=>{const g=m.el;g&&n.value!==g&&(n.value=g)})}),Ye(ja,n),Ye(Na,null),Ye(wi,null),{mergedTheme:a.mergedThemeRef,appear:a.appearRef,isMounted:a.isMountedRef,mergedClsPrefix:a.mergedClsPrefixRef,bodyRef:n,scrollbarRef:t,displayed:o,childNodeRef:v,handlePositiveClick:h,handleNegativeClick:b,handleCloseClick:p,handleAfterLeave:u,handleBeforeLeave:d,handleEnter:c}},render(){const{$slots:e,$attrs:n,handleEnter:t,handleAfterLeave:o,handleBeforeLeave:r,preset:i,mergedClsPrefix:a}=this;let s=null;if(!i){if(s=ol(e),!s){jo("modal","default slot is empty");return}s=gt(s),s.props=It({class:`${a}-modal`},n,s.props||{})}return this.displayDirective==="show"||this.displayed||this.show?lo(x("div",{role:"none",class:`${a}-modal-body-wrapper`},x(Ja,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${a}-modal-scroll-content`},{default:()=>{var l;return[(l=this.renderMask)===null||l===void 0?void 0:l.call(this),x(Hh,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var c;return x(bt,{name:"fade-in-scale-up-transition",appear:(c=this.appear)!==null&&c!==void 0?c:this.isMounted,onEnter:t,onAfterEnter:this.onAfterEnter,onAfterLeave:o,onBeforeLeave:r},{default:()=>{const d=[[pr,this.show]],{onClickoutside:u}=this;return u&&d.push([ll,this.onClickoutside,void 0,{capture:!0}]),lo(this.preset==="confirm"||this.preset==="dialog"?x(Vm,Object.assign({},this.$attrs,{class:[`${a}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Wo(this.$props,Gm),{"aria-modal":"true"}),e):this.preset==="card"?x(eA,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${a}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Wo(this.$props,Y$),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=s,d)}})}})]}})),[[pr,this.displayDirective==="if"||this.displayed||this.show]]):null}}),O3=O([ne("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),ne("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[bc({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),ne("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[ne("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),ne("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[Mp({duration:".25s",enterScale:".5"})])]),B3=Object.assign(Object.assign(Object.assign(Object.assign({},De.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Pc),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),F3=me({name:"Modal",inheritAttrs:!1,props:B3,setup(e){const n=K(null),{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:r}=un(e),i=De("Modal","-modal",O3,Zm,e,t),a=uh(64),s=dh(),l=Ci(),c=e.internalDialog?Re(Km,null):null,d=_x();function u(T){const{onUpdateShow:R,"onUpdate:show":y,onHide:w}=e;R&&nn(R,T),y&&nn(y,T),w&&!T&&w(T)}function p(){const{onClose:T}=e;T?Promise.resolve(T()).then(R=>{R!==!1&&u(!1)}):u(!1)}function b(){const{onPositiveClick:T}=e;T?Promise.resolve(T()).then(R=>{R!==!1&&u(!1)}):u(!1)}function h(){const{onNegativeClick:T}=e;T?Promise.resolve(T()).then(R=>{R!==!1&&u(!1)}):u(!1)}function v(){const{onBeforeLeave:T,onBeforeHide:R}=e;T&&nn(T),R&&R()}function m(){const{onAfterLeave:T,onAfterHide:R}=e;T&&nn(T),R&&R()}function g(T){var R;const{onMaskClick:y}=e;y&&y(T),e.maskClosable&&!((R=n.value)===null||R===void 0)&&R.contains(di(T))&&u(!1)}function S(T){var R;(R=e.onEsc)===null||R===void 0||R.call(e),e.show&&e.closeOnEsc&&Cy(T)&&!d.value&&u(!1)}Ye(hh,{getMousePosition:()=>{if(c){const{clickedRef:T,clickPositionRef:R}=c;if(T.value&&R.value)return R.value}return a.value?s.value:null},mergedClsPrefixRef:t,mergedThemeRef:i,isMountedRef:l,appearRef:Xe(e,"internalAppear"),transformOriginRef:Xe(e,"transformOrigin")});const _=G(()=>{const{common:{cubicBezierEaseOut:T},self:{boxShadow:R,color:y,textColor:w}}=i.value;return{"--n-bezier-ease-out":T,"--n-box-shadow":R,"--n-color":y,"--n-text-color":w}}),k=r?Rn("theme-class",void 0,_,e):void 0;return{mergedClsPrefix:t,namespace:o,isMounted:l,containerRef:n,presetProps:G(()=>Wo(e,M3)),handleEsc:S,handleAfterLeave:m,handleClickoutside:g,handleBeforeLeave:v,doUpdateShow:u,handleNegativeClick:h,handlePositiveClick:b,handleCloseClick:p,cssVars:r?void 0:_,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e}=this;return x(xh,{to:this.to,show:this.show},{default:()=>{var n;(n=this.onRender)===null||n===void 0||n.call(this);const{unstableShowMask:t}=this;return lo(x("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},x(L3,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:t?void 0:this.handleClickoutside,renderMask:t?()=>{var o;return x(bt,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?x("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[Yl,{zIndex:this.zIndex,enabled:this.show}]])}})}}),W3=Object.assign(Object.assign({},ts),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),j3=me({name:"DialogEnvironment",props:Object.assign(Object.assign({},W3),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const n=K(!0);function t(){const{onInternalAfterLeave:d,internalKey:u,onAfterLeave:p}=e;d&&d(u),p&&p()}function o(d){const{onPositiveClick:u}=e;u?Promise.resolve(u(d)).then(p=>{p!==!1&&l()}):l()}function r(d){const{onNegativeClick:u}=e;u?Promise.resolve(u(d)).then(p=>{p!==!1&&l()}):l()}function i(){const{onClose:d}=e;d?Promise.resolve(d()).then(u=>{u!==!1&&l()}):l()}function a(d){const{onMaskClick:u,maskClosable:p}=e;u&&(u(d),p&&l())}function s(){const{onEsc:d}=e;d&&d()}function l(){n.value=!1}function c(d){n.value=d}return{show:n,hide:l,handleUpdateShow:c,handleAfterLeave:t,handleCloseClick:i,handleNegativeClick:r,handlePositiveClick:o,handleMaskClick:a,handleEsc:s}},render(){const{handlePositiveClick:e,handleUpdateShow:n,handleNegativeClick:t,handleCloseClick:o,handleAfterLeave:r,handleMaskClick:i,handleEsc:a,to:s,maskClosable:l,show:c}=this;return x(F3,{show:c,onUpdateShow:n,onMaskClick:i,onEsc:a,to:s,maskClosable:l,onAfterEnter:this.onAfterEnter,onAfterLeave:r,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,internalAppear:!0,internalDialog:!0},{default:()=>x(Vm,Object.assign({},Wo(this.$props,Gm),{style:this.internalStyle,onClose:o,onNegativeClick:t,onPositiveClick:e}))})}}),N3={injectionKey:String,to:[String,Object]},G3=me({name:"DialogProvider",props:N3,setup(){const e=K([]),n={};function t(s={}){const l=La(),c=po(Object.assign(Object.assign({},s),{key:l,destroy:()=>{n[`n-dialog-${l}`].hide()}}));return e.value.push(c),c}const o=["info","success","warning","error"].map(s=>l=>t(Object.assign(Object.assign({},l),{type:s})));function r(s){const{value:l}=e;l.splice(l.findIndex(c=>c.key===s),1)}function i(){Object.values(n).forEach(s=>s.hide())}const a={create:t,destroyAll:i,info:o[0],success:o[1],warning:o[2],error:o[3]};return Ye(Um,a),Ye(Km,{clickedRef:uh(64),clickPositionRef:dh()}),Ye(H3,e),Object.assign(Object.assign({},a),{dialogList:e,dialogInstRefs:n,handleAfterLeave:r})},render(){var e,n;return x(Je,null,[this.dialogList.map(t=>x(j3,Xl(t,["destroy","style"],{internalStyle:t.style,to:this.to,ref:o=>{o===null?delete this.dialogInstRefs[`n-dialog-${t.key}`]:this.dialogInstRefs[`n-dialog-${t.key}`]=o},internalKey:t.key,onInternalAfterLeave:this.handleAfterLeave}))),(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)])}});function V3(){const e=Re(Um,null);return e===null&&yi("use-dialog","No outer <n-dialog-provider /> founded."),e}const Xm=e=>{const{textColor1:n,dividerColor:t,fontWeightStrong:o}=e;return{textColor:n,color:t,fontWeight:o}},K3={name:"Divider",common:ce,self:Xm},Jm=K3,U3={name:"Divider",common:le,self:Xm},q3=U3,Z3=ne("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[zn("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[zn("no-title",`
 display: flex;
 align-items: center;
 `)]),F("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),Q("title-position-left",[F("line",[Q("left",{width:"28px"})])]),Q("title-position-right",[F("line",[Q("right",{width:"28px"})])]),Q("dashed",[F("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),Q("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),F("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),zn("dashed",[F("line",{backgroundColor:"var(--n-color)"})]),Q("dashed",[F("line",{borderColor:"var(--n-color)"})]),Q("vertical",{backgroundColor:"var(--n-color)"})]),X3=Object.assign(Object.assign({},De.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),J3=me({name:"Divider",props:X3,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=un(e),o=De("Divider","-divider",Z3,Jm,e,n),r=G(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:s,textColor:l,fontWeight:c}}=o.value;return{"--n-bezier":a,"--n-color":s,"--n-text-color":l,"--n-font-weight":c}}),i=t?Rn("divider",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:o,dashed:r,cssVars:i,mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),x("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:o,[`${a}-divider--no-title`]:!n.default,[`${a}-divider--dashed`]:r,[`${a}-divider--title-position-${t}`]:n.default&&t}],style:i},o?null:x("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!o&&n.default?x(Je,null,x("div",{class:`${a}-divider__title`},this.$slots),x("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),Ym=e=>{const{modalColor:n,textColor1:t,textColor2:o,boxShadow3:r,lineHeight:i,fontWeightStrong:a,dividerColor:s,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,borderRadius:b,primaryColorHover:h}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:n,textColor:o,titleTextColor:t,titleFontSize:"18px",titleFontWeight:a,boxShadow:r,lineHeight:i,headerBorderBottom:`1px solid ${s}`,footerBorderTop:`1px solid ${s}`,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:c,closeBorderRadius:b,resizableTriggerColorHover:h}},Y3={name:"Drawer",common:ce,peers:{Scrollbar:Un},self:Ym},Q3=Y3,eR={name:"Drawer",common:le,peers:{Scrollbar:tt},self:Ym},nR=eR,Qm={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},tR={name:"DynamicInput",common:le,peers:{Input:vt,Button:ot},self(){return Qm}},oR=tR,rR=()=>Qm,iR={name:"DynamicInput",common:ce,peers:{Input:dt,Button:qn},self:rR},aR=iR,eg={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},sR={name:"Space",self(){return eg}},ng=sR,lR=()=>eg,cR={name:"Space",self:lR},$c=cR;let Bs;const dR=()=>{if(!mo)return!0;if(Bs===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),Bs=n}return Bs},uR=Object.assign(Object.assign({},De.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),fR=me({name:"Space",props:uR,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=un(e),o=De("Space","-space",void 0,$c,e,n),r=Uo("Space",t,n);return{useGap:dR(),rtlEnabled:r,mergedClsPrefix:n,margin:G(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[be("gap",i)]:a}}=o.value,{row:s,col:l}=O0(a);return{horizontal:fd(l),vertical:fd(s)}})}},render(){const{vertical:e,align:n,inline:t,justify:o,itemStyle:r,margin:i,wrap:a,mergedClsPrefix:s,rtlEnabled:l,useGap:c,wrapItem:d,internalUseGap:u}=this,p=ui(Qf(this));if(!p.length)return null;const b=`${i.horizontal}px`,h=`${i.horizontal/2}px`,v=`${i.vertical}px`,m=`${i.vertical/2}px`,g=p.length-1,S=o.startsWith("space-");return x("div",{role:"none",class:[`${s}-space`,l&&`${s}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!a||e?"nowrap":"wrap",marginTop:c||e?"":`-${m}`,marginBottom:c||e?"":`-${m}`,alignItems:n,gap:c?`${i.vertical}px ${i.horizontal}px`:""}},!d&&(c||u)?p:p.map((_,k)=>x("div",{role:"none",style:[r,{maxWidth:"100%"},c?"":e?{marginBottom:k!==g?v:""}:l?{marginLeft:S?o==="space-between"&&k===g?"":h:k!==g?b:"",marginRight:S?o==="space-between"&&k===0?"":h:"",paddingTop:m,paddingBottom:m}:{marginRight:S?o==="space-between"&&k===g?"":h:k!==g?b:"",marginLeft:S?o==="space-between"&&k===0?"":h:"",paddingTop:m,paddingBottom:m}]},_)))}}),hR={name:"DynamicTags",common:le,peers:{Input:vt,Button:ot,Tag:Wp,Space:ng},self(){return{inputWidth:"64px"}}},pR=hR,mR={name:"DynamicTags",common:ce,peers:{Input:dt,Button:qn,Tag:jp,Space:$c},self(){return{inputWidth:"64px"}}},gR=mR,bR={name:"Element",common:le},vR=bR,yR={name:"Element",common:ce},tg=yR,xR=Object.assign(Object.assign({},De.props),{tag:{type:String,default:"div"}}),CR=me({name:"Element",alias:["El"],props:xR,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=un(e),o=De("Element","-element",void 0,tg,e,n),r=G(()=>{const{common:a}=o.value;return Object.keys(a).reduce((s,l)=>(s[`--${T2(l)}`]=a[l],s),{})}),i=t?Rn("element",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{tag:n,mergedClsPrefix:t,cssVars:o,themeClass:r,onRender:i,$slots:a}=this;return i==null||i(),x(n,{role:"none",class:[`${t}-element`,r],style:o},(e=a.default)===null||e===void 0?void 0:e.call(a))}}),wR={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},og=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,textColor1:r,errorColor:i,warningColor:a,lineHeight:s,textColor3:l}=e;return Object.assign(Object.assign({},wR),{blankHeightSmall:n,blankHeightMedium:t,blankHeightLarge:o,lineHeight:s,labelTextColor:r,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:a,feedbackTextColor:l})},SR={name:"Form",common:ce,self:og},TR=SR,kR={name:"Form",common:le,self:og},PR=kR,zu=1,rg="n-grid",ig=1,$R={span:{type:[Number,String],default:ig},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},AR=me({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:$R,setup(){const{isSsrRef:e,xGapRef:n,itemStyleRef:t,overflowRef:o,layoutShiftDisabledRef:r}=Re(rg),i=Nt();return{overflow:o,itemStyle:t,layoutShiftDisabled:r,mergedXGap:G(()=>ir(n.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=ig,privateShow:s=!0,privateColStart:l=void 0,privateOffset:c=0}=i.vnode.props,{value:d}=n,u=ir(d||0);return{display:s?"":"none",gridColumn:`${l??`span ${a}`} / span ${a}`,marginLeft:c?`calc((100% - (${a} - 1) * ${u}) / ${a} * ${c} + ${u} * ${c})`:""}}}},render(){var e,n;if(this.layoutShiftDisabled){const{span:t,offset:o,mergedXGap:r}=this;return x("div",{style:{gridColumn:`span ${t} / span ${t}`,marginLeft:o?`calc((100% - (${t} - 1) * ${r}) / ${t} * ${o} + ${r} * ${o})`:""}},this.$slots)}return x("div",{style:[this.itemStyle,this.deriveStyle()]},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e,{overflow:this.overflow}))}}),RR={name:"GradientText",common:le,self(e){const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,primaryColorSuppl:a,successColorSuppl:s,warningColorSuppl:l,errorColorSuppl:c,infoColorSuppl:d,fontWeightStrong:u}=e;return{fontWeight:u,rotate:"252deg",colorStartPrimary:n,colorEndPrimary:a,colorStartInfo:i,colorEndInfo:d,colorStartWarning:o,colorEndWarning:l,colorStartError:r,colorEndError:c,colorStartSuccess:t,colorEndSuccess:s}}},DR=RR,IR=e=>{const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,fontWeightStrong:a}=e;return{fontWeight:a,rotate:"252deg",colorStartPrimary:V(n,{alpha:.6}),colorEndPrimary:n,colorStartInfo:V(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:V(o,{alpha:.6}),colorEndWarning:o,colorStartError:V(r,{alpha:.6}),colorEndError:r,colorStartSuccess:V(t,{alpha:.6}),colorEndSuccess:t}},HR={name:"GradientText",common:ce,self:IR},_R=HR,ER={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},ag=24,Fs="__ssr__",zR={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:ag},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},MR=me({name:"Grid",inheritAttrs:!1,props:zR,setup(e){const{mergedClsPrefixRef:n,mergedBreakpointsRef:t}=un(e),o=/^\d+$/,r=K(void 0),i=Fy((t==null?void 0:t.value)||ER),a=$n(()=>!!(e.itemResponsive||!o.test(e.cols.toString())||!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))),s=G(()=>{if(a.value)return e.responsive==="self"?r.value:i.value}),l=$n(()=>{var g;return(g=Number(Mr(e.cols.toString(),s.value)))!==null&&g!==void 0?g:ag}),c=$n(()=>Mr(e.xGap.toString(),s.value)),d=$n(()=>Mr(e.yGap.toString(),s.value)),u=g=>{r.value=g.contentRect.width},p=g=>{Yf(u,g)},b=K(!1),h=G(()=>{if(e.responsive==="self")return p}),v=K(!1),m=K();return Kn(()=>{const{value:g}=m;g&&g.hasAttribute(Fs)&&(g.removeAttribute(Fs),v.value=!0)}),Ye(rg,{layoutShiftDisabledRef:Xe(e,"layoutShiftDisabled"),isSsrRef:v,itemStyleRef:Xe(e,"itemStyle"),xGapRef:c,overflowRef:b}),{isSsr:!mo,contentEl:m,mergedClsPrefix:n,style:G(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:ir(e.xGap),rowGap:ir(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${l.value}, minmax(0, 1fr))`,columnGap:ir(c.value),rowGap:ir(d.value)}),isResponsive:a,responsiveQuery:s,responsiveCols:l,handleResize:h,overflow:b}},render(){if(this.layoutShiftDisabled)return x("div",It({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var n,t,o,r,i,a,s;this.overflow=!1;const l=ui(Qf(this)),c=[],{collapsed:d,collapsedRows:u,responsiveCols:p,responsiveQuery:b}=this;l.forEach(S=>{var _,k,T,R;if(((_=S==null?void 0:S.type)===null||_===void 0?void 0:_.__GRID_ITEM__)!==!0)return;if(Z0(S)){const I=gt(S);I.props?I.props.privateShow=!1:I.props={privateShow:!1},c.push({child:I,rawChildSpan:0});return}S.dirs=((k=S.dirs)===null||k===void 0?void 0:k.filter(({dir:I})=>I!==pr))||null;const y=gt(S),w=Number((R=Mr((T=y.props)===null||T===void 0?void 0:T.span,b))!==null&&R!==void 0?R:zu);w!==0&&c.push({child:y,rawChildSpan:w})});let h=0;const v=(n=c[c.length-1])===null||n===void 0?void 0:n.child;if(v!=null&&v.props){const S=(t=v.props)===null||t===void 0?void 0:t.suffix;S!==void 0&&S!==!1&&(h=(r=(o=v.props)===null||o===void 0?void 0:o.span)!==null&&r!==void 0?r:zu,v.props.privateSpan=h,v.props.privateColStart=p+1-h,v.props.privateShow=(i=v.props.privateShow)!==null&&i!==void 0?i:!0)}let m=0,g=!1;for(const{child:S,rawChildSpan:_}of c){if(g&&(this.overflow=!0),!g){const k=Number((s=Mr((a=S.props)===null||a===void 0?void 0:a.offset,b))!==null&&s!==void 0?s:0),T=Math.min(_+k,p);if(S.props?(S.props.privateSpan=T,S.props.privateOffset=k):S.props={privateSpan:T,privateOffset:k},d){const R=m%p;T+R>p&&(m+=p-R),T+m+h>u*p?g=!0:m+=T}}g&&(S.props?S.props.privateShow!==!0&&(S.props.privateShow=!1):S.props={privateShow:!1})}return x("div",It({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[Fs]:this.isSsr||void 0},this.$attrs),c.map(({child:S})=>S))};return this.isResponsive&&this.responsive==="self"?x(pa,{onResize:this.handleResize},{default:e}):e()}}),sg=e=>{const{primaryColor:n,baseColor:t}=e;return{color:n,iconColor:t}},LR={name:"IconWrapper",common:ce,self:sg},OR=LR,BR={name:"IconWrapper",common:le,self:sg},FR=BR;function WR(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const jR={name:"Image",common:ce,peers:{Tooltip:$i},self:WR},NR={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},lg=e=>{const{textColor2:n,successColor:t,infoColor:o,warningColor:r,errorColor:i,popoverColor:a,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:c,closeColorHover:d,closeColorPressed:u,textColor1:p,textColor3:b,borderRadius:h,fontWeightStrong:v,boxShadow2:m,lineHeight:g,fontSize:S}=e;return Object.assign(Object.assign({},NR),{borderRadius:h,lineHeight:g,fontSize:S,headerFontWeight:v,iconColor:n,iconColorSuccess:t,iconColorInfo:o,iconColorWarning:r,iconColorError:i,color:a,textColor:n,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:c,closeBorderRadius:h,closeColorHover:d,closeColorPressed:u,headerTextColor:p,descriptionTextColor:b,actionTextColor:n,boxShadow:m})},GR={name:"Notification",common:ce,peers:{Scrollbar:Un},self:lg},cg=GR,VR={name:"Notification",common:le,peers:{Scrollbar:tt},self:lg},KR=VR,UR={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},dg=e=>{const{textColor2:n,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,infoColor:i,successColor:a,errorColor:s,warningColor:l,popoverColor:c,boxShadow2:d,primaryColor:u,lineHeight:p,borderRadius:b,closeColorHover:h,closeColorPressed:v}=e;return Object.assign(Object.assign({},UR),{closeBorderRadius:b,textColor:n,textColorInfo:n,textColorSuccess:n,textColorError:n,textColorWarning:n,textColorLoading:n,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:d,boxShadowInfo:d,boxShadowSuccess:d,boxShadowError:d,boxShadowWarning:d,boxShadowLoading:d,iconColor:n,iconColorInfo:i,iconColorSuccess:a,iconColorWarning:l,iconColorError:s,iconColorLoading:u,closeColorHover:h,closeColorPressed:v,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,closeColorHoverInfo:h,closeColorPressedInfo:v,closeIconColorInfo:t,closeIconColorHoverInfo:o,closeIconColorPressedInfo:r,closeColorHoverSuccess:h,closeColorPressedSuccess:v,closeIconColorSuccess:t,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:r,closeColorHoverError:h,closeColorPressedError:v,closeIconColorError:t,closeIconColorHoverError:o,closeIconColorPressedError:r,closeColorHoverWarning:h,closeColorPressedWarning:v,closeIconColorWarning:t,closeIconColorHoverWarning:o,closeIconColorPressedWarning:r,closeColorHoverLoading:h,closeColorPressedLoading:v,closeIconColorLoading:t,closeIconColorHoverLoading:o,closeIconColorPressedLoading:r,loadingColor:u,lineHeight:p,borderRadius:b})},qR={name:"Message",common:ce,self:dg},ug=qR,ZR={name:"Message",common:le,self:dg},XR=ZR,JR={name:"ButtonGroup",common:le},YR=JR,QR={name:"ButtonGroup",common:ce},eD=QR,nD={name:"InputNumber",common:le,peers:{Button:ot,Input:vt},self(e){const{textColorDisabled:n}=e;return{iconColorDisabled:n}}},tD=nD,oD=e=>{const{textColorDisabled:n}=e;return{iconColorDisabled:n}},rD={name:"InputNumber",common:ce,peers:{Button:qn,Input:dt},self:oD},iD=rD,aD={name:"Layout",common:le,peers:{Scrollbar:tt},self(e){const{textColor2:n,bodyColor:t,popoverColor:o,cardColor:r,dividerColor:i,scrollbarColor:a,scrollbarColorHover:s}=e;return{textColor:n,textColorInverted:n,color:t,colorEmbedded:t,headerColor:r,headerColorInverted:r,footerColor:r,footerColorInverted:r,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:r,siderColorInverted:r,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:o,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:ve(t,a),siderToggleBarColorHover:ve(t,s),__invertScrollbar:"false"}}},sD=aD,lD=e=>{const{baseColor:n,textColor2:t,bodyColor:o,cardColor:r,dividerColor:i,actionColor:a,scrollbarColor:s,scrollbarColorHover:l,invertedColor:c}=e;return{textColor:t,textColorInverted:"#FFF",color:o,colorEmbedded:a,headerColor:r,headerColorInverted:c,footerColor:a,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:r,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:ve(o,s),siderToggleBarColorHover:ve(o,l),__invertScrollbar:"true"}},cD={name:"Layout",common:ce,peers:{Scrollbar:Un},self:lD},Ac=cD,fg=e=>{const{textColor2:n,cardColor:t,modalColor:o,popoverColor:r,dividerColor:i,borderRadius:a,fontSize:s,hoverColor:l}=e;return{textColor:n,color:t,colorHover:l,colorModal:o,colorHoverModal:ve(o,l),colorPopover:r,colorHoverPopover:ve(r,l),borderColor:i,borderColorModal:ve(o,i),borderColorPopover:ve(r,i),borderRadius:a,fontSize:s}},dD={name:"List",common:ce,self:fg},uD=dD,fD={name:"List",common:le,self:fg},hD=fD,pD={name:"LoadingBar",common:le,self(e){const{primaryColor:n}=e;return{colorError:"red",colorLoading:n,height:"2px"}}},mD=pD,gD=e=>{const{primaryColor:n,errorColor:t}=e;return{colorError:t,colorLoading:n,height:"2px"}},bD={name:"LoadingBar",common:ce,self:gD},hg=bD,vD={name:"Log",common:le,peers:{Scrollbar:tt,Code:dm},self(e){const{textColor2:n,inputColor:t,fontSize:o,primaryColor:r}=e;return{loaderFontSize:o,loaderTextColor:n,loaderColor:t,loaderBorder:"1px solid #0000",loadingColor:r}}},yD=vD,xD=e=>{const{textColor2:n,modalColor:t,borderColor:o,fontSize:r,primaryColor:i}=e;return{loaderFontSize:r,loaderTextColor:n,loaderColor:t,loaderBorder:`1px solid ${o}`,loadingColor:i}},CD={name:"Log",common:ce,peers:{Scrollbar:Un,Code:um},self:xD},wD=CD,SD={name:"Mention",common:le,peers:{InternalSelectMenu:Pi,Input:vt},self(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}},TD=SD,kD=e=>{const{boxShadow2:n}=e;return{menuBoxShadow:n}},PD={name:"Mention",common:ce,peers:{InternalSelectMenu:ki,Input:dt},self:kD},$D=PD;function AD(e,n,t,o){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:o}}const pg=e=>{const{borderRadius:n,textColor3:t,primaryColor:o,textColor2:r,textColor1:i,fontSize:a,dividerColor:s,hoverColor:l,primaryColorHover:c}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:V(o,{alpha:.1}),itemColorActiveHover:V(o,{alpha:.1}),itemColorActiveCollapsed:V(o,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:o,itemTextColorActiveHover:o,itemTextColorChildActive:o,itemTextColorChildActiveHover:o,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:o,itemTextColorActiveHoverHorizontal:o,itemTextColorChildActiveHorizontal:o,itemTextColorChildActiveHoverHorizontal:o,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:o,itemIconColorActiveHover:o,itemIconColorChildActive:o,itemIconColorChildActiveHover:o,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:o,itemIconColorActiveHoverHorizontal:o,itemIconColorChildActiveHorizontal:o,itemIconColorChildActiveHoverHorizontal:o,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:o,arrowColorActiveHover:o,arrowColorChildActive:o,arrowColorChildActiveHover:o,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:s},AD("#BBB",o,"#FFF","#AAA"))},RD={name:"Menu",common:ce,peers:{Tooltip:$i,Dropdown:es},self:pg},DD=RD,ID={name:"Menu",common:le,peers:{Tooltip:Qa,Dropdown:Sc},self(e){const{primaryColor:n,primaryColorSuppl:t}=e,o=pg(e);return o.itemColorActive=V(n,{alpha:.15}),o.itemColorActiveHover=V(n,{alpha:.15}),o.itemColorActiveCollapsed=V(n,{alpha:.15}),o.itemColorActiveInverted=t,o.itemColorActiveHoverInverted=t,o.itemColorActiveCollapsedInverted=t,o}},HD=ID,_D={titleFontSize:"18px",backSize:"22px"};function mg(e){const{textColor1:n,textColor2:t,textColor3:o,fontSize:r,fontWeightStrong:i,primaryColorHover:a,primaryColorPressed:s}=e;return Object.assign(Object.assign({},_D),{titleFontWeight:i,fontSize:r,titleTextColor:n,backColor:t,backColorHover:a,backColorPressed:s,subtitleTextColor:o})}const ED={name:"PageHeader",common:ce,self:mg},zD={name:"PageHeader",common:le,self:mg},MD={iconSize:"22px"},gg=e=>{const{fontSize:n,warningColor:t}=e;return Object.assign(Object.assign({},MD),{fontSize:n,iconColor:t})},LD={name:"Popconfirm",common:ce,peers:{Button:qn,Popover:vo},self:gg},OD=LD,BD={name:"Popconfirm",common:le,peers:{Button:ot,Popover:Zo},self:gg},FD=BD,bg=e=>{const{infoColor:n,successColor:t,warningColor:o,errorColor:r,textColor2:i,progressRailColor:a,fontSize:s,fontWeight:l}=e;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:l,railColor:a,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:n,iconColorInfo:n,iconColorSuccess:t,iconColorWarning:o,iconColorError:r,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:n,fillColorInfo:n,fillColorSuccess:t,fillColorWarning:o,fillColorError:r,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},WD={name:"Progress",common:ce,self:bg},vg=WD,jD={name:"Progress",common:le,self(e){const n=bg(e);return n.textColorLineInner="rgb(0, 0, 0)",n.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",n}},yg=jD,ND={name:"Rate",common:le,self(e){const{railColor:n}=e;return{itemColor:n,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},GD=ND,VD=e=>{const{railColor:n}=e;return{itemColor:n,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},KD={name:"Rate",common:ce,self:VD},UD=KD,qD={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0},xg=e=>{const{textColor2:n,textColor1:t,errorColor:o,successColor:r,infoColor:i,warningColor:a,lineHeight:s,fontWeightStrong:l}=e;return Object.assign(Object.assign({},qD),{lineHeight:s,titleFontWeight:l,titleTextColor:t,textColor:n,iconColorError:o,iconColorSuccess:r,iconColorInfo:i,iconColorWarning:a})},ZD={name:"Result",common:ce,self:xg},XD=ZD,JD={name:"Result",common:le,self:xg},YD=JD,Cg={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},QD={name:"Slider",common:le,self(e){const n="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:t,modalColor:o,primaryColorSuppl:r,popoverColor:i,textColor2:a,cardColor:s,borderRadius:l,fontSize:c,opacityDisabled:d}=e;return Object.assign(Object.assign({},Cg),{fontSize:c,markFontSize:c,railColor:t,railColorHover:t,fillColor:r,fillColorHover:r,opacityDisabled:d,handleColor:"#FFF",dotColor:s,dotColorModal:o,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:n,indicatorTextColor:a,indicatorBorderRadius:l,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})}},e4=QD,n4=e=>{const n="rgba(0, 0, 0, .85)",t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:r,baseColor:i,cardColor:a,modalColor:s,popoverColor:l,borderRadius:c,fontSize:d,opacityDisabled:u}=e;return Object.assign(Object.assign({},Cg),{fontSize:d,markFontSize:d,railColor:o,railColorHover:o,fillColor:r,fillColorHover:r,opacityDisabled:u,handleColor:"#FFF",dotColor:a,dotColorModal:s,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:n,indicatorBoxShadow:t,indicatorTextColor:i,indicatorBorderRadius:c,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})},t4={name:"Slider",common:ce,self:n4},o4=t4,wg=e=>{const{opacityDisabled:n,heightTiny:t,heightSmall:o,heightMedium:r,heightLarge:i,heightHuge:a,primaryColor:s,fontSize:l}=e;return{fontSize:l,textColor:s,sizeTiny:t,sizeSmall:o,sizeMedium:r,sizeLarge:i,sizeHuge:a,color:s,opacitySpinning:n}},r4={name:"Spin",common:ce,self:wg},i4=r4,a4={name:"Spin",common:le,self:wg},s4=a4,Sg=e=>{const{textColor2:n,textColor3:t,fontSize:o,fontWeight:r}=e;return{labelFontSize:o,labelFontWeight:r,valueFontWeight:r,valueFontSize:"24px",labelTextColor:t,valuePrefixTextColor:n,valueSuffixTextColor:n,valueTextColor:n}},l4={name:"Statistic",common:ce,self:Sg},c4=l4,d4={name:"Statistic",common:le,self:Sg},u4=d4,f4={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},Tg=e=>{const{fontWeightStrong:n,baseColor:t,textColorDisabled:o,primaryColor:r,errorColor:i,textColor1:a,textColor2:s}=e;return Object.assign(Object.assign({},f4),{stepHeaderFontWeight:n,indicatorTextColorProcess:t,indicatorTextColorWait:o,indicatorTextColorFinish:r,indicatorTextColorError:i,indicatorBorderColorProcess:r,indicatorBorderColorWait:o,indicatorBorderColorFinish:r,indicatorBorderColorError:i,indicatorColorProcess:r,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:o,splitorColorWait:o,splitorColorFinish:r,splitorColorError:o,headerTextColorProcess:a,headerTextColorWait:o,headerTextColorFinish:o,headerTextColorError:i,descriptionTextColorProcess:s,descriptionTextColorWait:o,descriptionTextColorFinish:o,descriptionTextColorError:i})},h4={name:"Steps",common:ce,self:Tg},p4=h4,m4={name:"Steps",common:le,self:Tg},g4=m4,kg={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},b4={name:"Switch",common:le,self(e){const{primaryColorSuppl:n,opacityDisabled:t,borderRadius:o,primaryColor:r,textColor2:i,baseColor:a}=e,s="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},kg),{iconColor:a,textColor:i,loadingColor:n,opacityDisabled:t,railColor:s,railColorActive:n,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 8px 0 ${V(r,{alpha:.3})}`})}},v4=b4,y4=e=>{const{primaryColor:n,opacityDisabled:t,borderRadius:o,textColor3:r}=e,i="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},kg),{iconColor:r,textColor:"white",loadingColor:n,opacityDisabled:t,railColor:i,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${V(n,{alpha:.2})}`})},x4={name:"Switch",common:ce,self:y4},C4=x4,w4={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},Pg=e=>{const{dividerColor:n,cardColor:t,modalColor:o,popoverColor:r,tableHeaderColor:i,tableColorStriped:a,textColor1:s,textColor2:l,borderRadius:c,fontWeightStrong:d,lineHeight:u,fontSizeSmall:p,fontSizeMedium:b,fontSizeLarge:h}=e;return Object.assign(Object.assign({},w4),{fontSizeSmall:p,fontSizeMedium:b,fontSizeLarge:h,lineHeight:u,borderRadius:c,borderColor:ve(t,n),borderColorModal:ve(o,n),borderColorPopover:ve(r,n),tdColor:t,tdColorModal:o,tdColorPopover:r,tdColorStriped:ve(t,a),tdColorStripedModal:ve(o,a),tdColorStripedPopover:ve(r,a),thColor:ve(t,i),thColorModal:ve(o,i),thColorPopover:ve(r,i),thTextColor:s,tdTextColor:l,thFontWeight:d})},S4={name:"Table",common:ce,self:Pg},T4=S4,k4={name:"Table",common:le,self:Pg},P4=k4,$4={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},$g=e=>{const{textColor2:n,primaryColor:t,textColorDisabled:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,tabColor:c,baseColor:d,dividerColor:u,fontWeight:p,textColor1:b,borderRadius:h,fontSize:v,fontWeightStrong:m}=e;return Object.assign(Object.assign({},$4),{colorSegment:c,tabFontSizeCard:v,tabTextColorLine:b,tabTextColorActiveLine:t,tabTextColorHoverLine:t,tabTextColorDisabledLine:o,tabTextColorSegment:b,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:o,tabTextColorBar:b,tabTextColorActiveBar:t,tabTextColorHoverBar:t,tabTextColorDisabledBar:o,tabTextColorCard:b,tabTextColorHoverCard:b,tabTextColorActiveCard:t,tabTextColorDisabledCard:o,barColor:t,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,closeBorderRadius:h,tabColor:c,tabColorSegment:d,tabBorderColor:u,tabFontWeightActive:p,tabFontWeight:p,tabBorderRadius:h,paneTextColor:n,fontWeightStrong:m})},A4={name:"Tabs",common:ce,self:$g},R4=A4,D4={name:"Tabs",common:le,self(e){const n=$g(e),{inputColor:t}=e;return n.colorSegment=t,n.tabColorSegment=t,n}},I4=D4,Ag=e=>{const{textColor1:n,textColor2:t,fontWeightStrong:o,fontSize:r}=e;return{fontSize:r,titleTextColor:n,textColor:t,titleFontWeight:o}},H4={name:"Thing",common:ce,self:Ag},_4=H4,E4={name:"Thing",common:le,self:Ag},z4=E4,Rg={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},M4={name:"Timeline",common:le,self(e){const{textColor3:n,infoColorSuppl:t,errorColorSuppl:o,successColorSuppl:r,warningColorSuppl:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:c,fontSize:d}=e;return Object.assign(Object.assign({},Rg),{contentFontSize:d,titleFontWeight:c,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})}},L4=M4,O4=e=>{const{textColor3:n,infoColor:t,errorColor:o,successColor:r,warningColor:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:c,fontSize:d}=e;return Object.assign(Object.assign({},Rg),{contentFontSize:d,titleFontWeight:c,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})},B4={name:"Timeline",common:ce,self:O4},F4=B4,Dg={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},W4={name:"Transfer",common:le,peers:{Checkbox:kr,Scrollbar:tt,Input:vt,Empty:qo,Button:ot},self(e){const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,inputColor:l,tableHeaderColor:c,textColor1:d,textColorDisabled:u,textColor2:p,textColor3:b,hoverColor:h,closeColorHover:v,closeColorPressed:m,closeIconColor:g,closeIconColorHover:S,closeIconColorPressed:_,dividerColor:k}=e;return Object.assign(Object.assign({},Dg),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:k,borderColor:"#0000",listColor:l,headerColor:c,titleTextColor:d,titleTextColorDisabled:u,extraTextColor:b,extraTextColorDisabled:u,itemTextColor:p,itemTextColorDisabled:u,itemColorPending:h,titleFontWeight:n,closeColorHover:v,closeColorPressed:m,closeIconColor:g,closeIconColorHover:S,closeIconColorPressed:_})}},j4=W4,N4=e=>{const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,cardColor:l,tableHeaderColor:c,textColor1:d,textColorDisabled:u,textColor2:p,textColor3:b,borderColor:h,hoverColor:v,closeColorHover:m,closeColorPressed:g,closeIconColor:S,closeIconColorHover:_,closeIconColorPressed:k}=e;return Object.assign(Object.assign({},Dg),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:h,borderColor:h,listColor:l,headerColor:ve(l,c),titleTextColor:d,titleTextColorDisabled:u,extraTextColor:b,extraTextColorDisabled:u,itemTextColor:p,itemTextColorDisabled:u,itemColorPending:v,titleFontWeight:n,closeColorHover:m,closeColorPressed:g,closeIconColor:S,closeIconColorHover:_,closeIconColorPressed:k})},G4={name:"Transfer",common:ce,peers:{Checkbox:Tr,Scrollbar:Un,Input:dt,Empty:Kt,Button:qn},self:N4},V4=G4,Ig=e=>{const{borderRadiusSmall:n,hoverColor:t,pressedColor:o,primaryColor:r,textColor3:i,textColor2:a,textColorDisabled:s,fontSize:l}=e;return{fontSize:l,nodeBorderRadius:n,nodeColorHover:t,nodeColorPressed:o,nodeColorActive:V(r,{alpha:.1}),arrowColor:i,nodeTextColor:a,nodeTextColorDisabled:s,loadingColor:r,dropMarkColor:r}},K4={name:"Tree",common:ce,peers:{Checkbox:Tr,Scrollbar:Un,Empty:Kt},self:Ig},Hg=K4,U4={name:"Tree",common:le,peers:{Checkbox:kr,Scrollbar:tt,Empty:qo},self(e){const{primaryColor:n}=e,t=Ig(e);return t.nodeColorActive=V(n,{alpha:.15}),t}},_g=U4,q4={name:"TreeSelect",common:le,peers:{Tree:_g,Empty:qo,InternalSelection:yc}},Z4=q4,X4=e=>{const{popoverColor:n,boxShadow2:t,borderRadius:o,heightMedium:r,dividerColor:i,textColor2:a}=e;return{menuPadding:"4px",menuColor:n,menuBoxShadow:t,menuBorderRadius:o,menuHeight:`calc(${r} * 7.6)`,actionDividerColor:i,actionTextColor:a,actionPadding:"8px 12px"}},J4={name:"TreeSelect",common:ce,peers:{Tree:Hg,Empty:Kt,InternalSelection:vc},self:X4},Y4=J4,Q4={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},Eg=e=>{const{primaryColor:n,textColor2:t,borderColor:o,lineHeight:r,fontSize:i,borderRadiusSmall:a,dividerColor:s,fontWeightStrong:l,textColor1:c,textColor3:d,infoColor:u,warningColor:p,errorColor:b,successColor:h,codeColor:v}=e;return Object.assign(Object.assign({},Q4),{aTextColor:n,blockquoteTextColor:t,blockquotePrefixColor:o,blockquoteLineHeight:r,blockquoteFontSize:i,codeBorderRadius:a,liTextColor:t,liLineHeight:r,liFontSize:i,hrColor:s,headerFontWeight:l,headerTextColor:c,pTextColor:t,pTextColor1Depth:c,pTextColor2Depth:t,pTextColor3Depth:d,pLineHeight:r,pFontSize:i,headerBarColor:n,headerBarColorPrimary:n,headerBarColorInfo:u,headerBarColorError:b,headerBarColorWarning:p,headerBarColorSuccess:h,textColor:t,textColor1Depth:c,textColor2Depth:t,textColor3Depth:d,textColorPrimary:n,textColorInfo:u,textColorSuccess:h,textColorWarning:p,textColorError:b,codeTextColor:t,codeColor:v,codeBorder:"1px solid #0000"})},e5={name:"Typography",common:ce,self:Eg},Rc=e5,n5={name:"Typography",common:le,self:Eg},t5=n5,zg=e=>{const{iconColor:n,primaryColor:t,errorColor:o,textColor2:r,successColor:i,opacityDisabled:a,actionColor:s,borderColor:l,hoverColor:c,lineHeight:d,borderRadius:u,fontSize:p}=e;return{fontSize:p,lineHeight:d,borderRadius:u,draggerColor:s,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${t}`,itemColorHover:c,itemColorHoverError:V(o,{alpha:.06}),itemTextColor:r,itemTextColorError:o,itemTextColorSuccess:i,itemIconColor:n,itemDisabledOpacity:a,itemBorderImageCardError:`1px solid ${o}`,itemBorderImageCard:`1px solid ${l}`}},o5={name:"Upload",common:ce,peers:{Button:qn,Progress:vg},self:zg},r5=o5,i5={name:"Upload",common:le,peers:{Button:ot,Progress:yg},self(e){const{errorColor:n}=e,t=zg(e);return t.itemColorHoverError=V(n,{alpha:.09}),t}},a5=i5,s5={name:"Watermark",common:le,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},l5=s5,c5={name:"Watermark",common:ce,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},d5=c5,u5={name:"Row",common:ce},f5=u5,h5={name:"Row",common:le},p5=h5,m5={name:"Image",common:le,peers:{Tooltip:Qa},self:e=>{const{textColor2:n}=e;return{toolbarIconColor:n,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},Mg={type:String,default:"static"},g5=ne("layout",`
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
`,[ne("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),Q("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b5={embedded:Boolean,position:Mg,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},v5="n-layout";function Lg(e){return me({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},De.props),b5),setup(n){const t=K(null),o=K(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=un(n),a=De("Layout","-layout",g5,Ac,n,r);function s(v,m){if(n.nativeScrollbar){const{value:g}=t;g&&(m===void 0?g.scrollTo(v):g.scrollTo(v,m))}else{const{value:g}=o;g&&g.scrollTo(v,m)}}Ye(v5,n);let l=0,c=0;const d=v=>{var m;const g=v.target;l=g.scrollLeft,c=g.scrollTop,(m=n.onScroll)===null||m===void 0||m.call(n,v)};_h(()=>{if(n.nativeScrollbar){const v=t.value;v&&(v.scrollTop=c,v.scrollLeft=l)}});const u={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:s},b=G(()=>{const{common:{cubicBezierEaseInOut:v},self:m}=a.value;return{"--n-bezier":v,"--n-color":n.embedded?m.colorEmbedded:m.color,"--n-text-color":m.textColor}}),h=i?Rn("layout",G(()=>n.embedded?"e":""),b,n):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:o,hasSiderStyle:u,mergedTheme:a,handleNativeElScroll:d,cssVars:i?void 0:b,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender},p)},render(){var n;const{mergedClsPrefix:t,hasSider:o}=this;(n=this.onRender)===null||n===void 0||n.call(this);const r=o?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return x("div",{class:i,style:this.cssVars},this.nativeScrollbar?x("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):x(Ja,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const y5=Lg(!1),x5=Lg(!0),C5=ne("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[Q("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),Q("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),w5=Object.assign(Object.assign({},De.props),{inverted:Boolean,position:Mg,bordered:Boolean}),S5=me({name:"LayoutFooter",props:w5,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=un(e),o=De("Layout","-layout-footer",C5,Ac,e,n),r=G(()=>{const{common:{cubicBezierEaseInOut:a},self:s}=o.value,l={"--n-bezier":a};return e.inverted?(l["--n-color"]=s.footerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.footerBorderColorInverted):(l["--n-color"]=s.footerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.footerBorderColor),l}),i=t?Rn("layout-footer",G(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),x("div",{class:[`${n}-layout-footer`,this.themeClass,this.position&&`${n}-layout-footer--${this.position}-positioned`,this.bordered&&`${n}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),Og={extraFontSize:"12px",width:"440px"},T5={name:"Transfer",common:le,peers:{Checkbox:kr,Scrollbar:tt,Input:vt,Empty:qo,Button:ot},self(e){const{iconColorDisabled:n,iconColor:t,fontWeight:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:c,borderRadius:d,inputColor:u,tableHeaderColor:p,textColor1:b,textColorDisabled:h,textColor2:v,hoverColor:m}=e;return Object.assign(Object.assign({},Og),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:d,borderColor:"#0000",listColor:u,headerColor:p,titleTextColor:b,titleTextColorDisabled:h,extraTextColor:v,filterDividerColor:"#0000",itemTextColor:v,itemTextColorDisabled:h,itemColorPending:m,titleFontWeight:o,iconColor:t,iconColorDisabled:n})}},k5=T5,P5=e=>{const{fontWeight:n,iconColorDisabled:t,iconColor:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:c,borderRadius:d,cardColor:u,tableHeaderColor:p,textColor1:b,textColorDisabled:h,textColor2:v,borderColor:m,hoverColor:g}=e;return Object.assign(Object.assign({},Og),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:d,borderColor:m,listColor:u,headerColor:ve(u,p),titleTextColor:b,titleTextColorDisabled:h,extraTextColor:v,filterDividerColor:m,itemTextColor:v,itemTextColorDisabled:h,itemColorPending:g,titleFontWeight:n,iconColor:o,iconColorDisabled:t})},$5={name:"Transfer",common:ce,peers:{Checkbox:Tr,Scrollbar:Un,Input:dt,Empty:Kt,Button:qn},self:P5},A5=$5,Bg="n-loading-bar",Fg="n-loading-bar-api",R5=ne("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[bc({enterDuration:"0.3s",leaveDuration:"0.8s"}),ne("loading-bar",`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[Q("starting",`
 background: var(--n-color-loading);
 `),Q("finishing",`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),Q("error",`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);var Ws=globalThis&&globalThis.__awaiter||function(e,n,t,o){function r(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function s(d){try{c(o.next(d))}catch(u){a(u)}}function l(d){try{c(o.throw(d))}catch(u){a(u)}}function c(d){d.done?i(d.value):r(d.value).then(s,l)}c((o=o.apply(e,n||[])).next())})};function ea(e,n){return`${n}-loading-bar ${n}-loading-bar--${e}`}const D5=me({name:"LoadingBar",props:{containerStyle:[String,Object]},setup(){const{inlineThemeDisabled:e}=un(),{props:n,mergedClsPrefixRef:t}=Re(Bg),o=K(null),r=K(!1),i=K(!1),a=K(!1),s=K(!1);let l=!1;const c=K(!1),d=G(()=>{const{loadingBarStyle:T}=n;return T?T[c.value?"error":"loading"]:""});function u(){return Ws(this,void 0,void 0,function*(){r.value=!1,a.value=!1,l=!1,c.value=!1,s.value=!0,yield Gn(),s.value=!1})}function p(T=0,R=80,y="starting"){return Ws(this,void 0,void 0,function*(){yield u(),a.value=!0,i.value=!0,yield Gn();const w=o.value;w&&(w.style.maxWidth=`${T}%`,w.style.transition="none",w.offsetWidth,w.className=ea(y,t.value),w.style.transition="",w.style.maxWidth=`${R}%`)})}function b(){if(l||c.value||!a.value)return;l=!0;const T=o.value;T&&(T.className=ea("finishing",t.value),T.style.maxWidth="100%",T.offsetWidth,a.value=!1)}function h(){if(!(l||c.value))if(!a.value)p(100,100,"error").then(()=>{c.value=!0;const T=o.value;T&&(T.className=ea("error",t.value),T.offsetWidth,a.value=!1)});else{c.value=!0;const T=o.value;if(!T)return;T.className=ea("error",t.value),T.style.maxWidth="100%",T.offsetWidth,a.value=!1}}function v(){r.value=!0}function m(){r.value=!1}function g(){return Ws(this,void 0,void 0,function*(){yield u()})}const S=De("LoadingBar","-loading-bar",R5,hg,n,t),_=G(()=>{const{self:{height:T,colorError:R,colorLoading:y}}=S.value;return{"--n-height":T,"--n-color-loading":y,"--n-color-error":R}}),k=e?Rn("loading-bar",void 0,_,n):void 0;return{mergedClsPrefix:t,loadingBarRef:o,started:i,loading:a,entering:r,transitionDisabled:s,start:p,error:h,finish:b,handleEnter:v,handleAfterEnter:m,handleAfterLeave:g,mergedLoadingBarStyle:d,cssVars:e?void 0:_,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:e}=this;return x(bt,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var n;return(n=this.onRender)===null||n===void 0||n.call(this),lo(x("div",{class:[`${e}-loading-bar-container`,this.themeClass],style:this.containerStyle},x("div",{ref:"loadingBarRef",class:[`${e}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[pr,this.loading||!this.loading&&this.entering]])}})}}),I5=Object.assign(Object.assign({},De.props),{to:{type:[String,Object,Boolean],default:void 0},containerStyle:[String,Object],loadingBarStyle:{type:Object}}),H5=me({name:"LoadingBarProvider",props:I5,setup(e){const n=Ci(),t=K(null),o={start(){var i;n.value?(i=t.value)===null||i===void 0||i.start():Gn(()=>{var a;(a=t.value)===null||a===void 0||a.start()})},error(){var i;n.value?(i=t.value)===null||i===void 0||i.error():Gn(()=>{var a;(a=t.value)===null||a===void 0||a.error()})},finish(){var i;n.value?(i=t.value)===null||i===void 0||i.finish():Gn(()=>{var a;(a=t.value)===null||a===void 0||a.finish()})}},{mergedClsPrefixRef:r}=un(e);return Ye(Fg,o),Ye(Bg,{props:e,mergedClsPrefixRef:r}),Object.assign(o,{loadingBarRef:t})},render(){var e,n;return x(Je,null,x(_a,{disabled:this.to===!1,to:this.to||"body"},x(D5,{ref:"loadingBarRef",containerStyle:this.containerStyle})),(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});function _5(){const e=Re(Fg,null);return e===null&&yi("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const Wg={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},jg="n-message-api",Ng="n-message-provider",E5=O([ne("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[VP({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),ne("message",`
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
 `,[F("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),F("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>Q(`${e}-type`,[O("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),O("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[vi()])]),F("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[O("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),O("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),ne("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[Q("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),Q("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),Q("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),Q("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),Q("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),Q("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),z5={info:()=>x(xa,null),success:()=>x(hc,null),warning:()=>x(pc,null),error:()=>x(fc,null),default:()=>null},M5=me({name:"Message",props:Object.assign(Object.assign({},Wg),{render:Function}),setup(e){const{inlineThemeDisabled:n,mergedRtlRef:t}=un(e),{props:o,mergedClsPrefixRef:r}=Re(Ng),i=Uo("Message",t,r),a=De("Message","-message",E5,ug,o,r),s=G(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:d},self:{padding:u,margin:p,maxWidth:b,iconMargin:h,closeMargin:v,closeSize:m,iconSize:g,fontSize:S,lineHeight:_,borderRadius:k,iconColorInfo:T,iconColorSuccess:R,iconColorWarning:y,iconColorError:w,iconColorLoading:I,closeIconSize:H,closeBorderRadius:U,[be("textColor",c)]:z,[be("boxShadow",c)]:te,[be("color",c)]:L,[be("closeColorHover",c)]:M,[be("closeColorPressed",c)]:se,[be("closeIconColor",c)]:j,[be("closeIconColorPressed",c)]:ie,[be("closeIconColorHover",c)]:$}}=a.value;return{"--n-bezier":d,"--n-margin":p,"--n-padding":u,"--n-max-width":b,"--n-font-size":S,"--n-icon-margin":h,"--n-icon-size":g,"--n-close-icon-size":H,"--n-close-border-radius":U,"--n-close-size":m,"--n-close-margin":v,"--n-text-color":z,"--n-color":L,"--n-box-shadow":te,"--n-icon-color-info":T,"--n-icon-color-success":R,"--n-icon-color-warning":y,"--n-icon-color-error":w,"--n-icon-color-loading":I,"--n-close-color-hover":M,"--n-close-color-pressed":se,"--n-close-icon-color":j,"--n-close-icon-color-pressed":ie,"--n-close-icon-color-hover":$,"--n-line-height":_,"--n-border-radius":k}}),l=n?Rn("message",G(()=>e.type[0]),s,{}):void 0;return{mergedClsPrefix:r,rtlEnabled:i,messageProviderProps:o,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:n?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:o.placement}},render(){const{render:e,type:n,closable:t,content:o,mergedClsPrefix:r,cssVars:i,themeClass:a,onRender:s,icon:l,handleClose:c,showIcon:d}=this;s==null||s();let u;return x("div",{class:[`${r}-message-wrapper`,a],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},i]},e?e(this.$props):x("div",{class:[`${r}-message ${r}-message--${n}-type`,this.rtlEnabled&&`${r}-message--rtl`]},(u=L5(l,n,r))&&d?x("div",{class:`${r}-message__icon ${r}-message__icon--${n}-type`},x(Za,null,{default:()=>u})):null,x("div",{class:`${r}-message__content`},Hn(o)),t?x(Xa,{clsPrefix:r,class:`${r}-message__close`,onClick:c,absolute:!0}):null))}});function L5(e,n,t){if(typeof e=="function")return e();{const o=n==="loading"?x(mc,{clsPrefix:t,strokeWidth:24,scale:.85}):z5[n]();return o?x(ho,{clsPrefix:t,key:n},{default:()=>o}):null}}const O5=me({name:"MessageEnvironment",props:Object.assign(Object.assign({},Wg),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let n=null;const t=K(!0);Kn(()=>{o()});function o(){const{duration:d}=e;d&&(n=window.setTimeout(a,d))}function r(d){d.currentTarget===d.target&&n!==null&&(window.clearTimeout(n),n=null)}function i(d){d.currentTarget===d.target&&o()}function a(){const{onHide:d}=e;t.value=!1,n&&(window.clearTimeout(n),n=null),d&&d()}function s(){const{onClose:d}=e;d&&d(),a()}function l(){const{onAfterLeave:d,onInternalAfterLeave:u,onAfterHide:p,internalKey:b}=e;d&&d(),u&&u(b),p&&p()}function c(){a()}return{show:t,hide:a,handleClose:s,handleAfterLeave:l,handleMouseleave:i,handleMouseenter:r,deactivate:c}},render(){return x(Pp,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?x(M5,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),B5=Object.assign(Object.assign({},De.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),F5=me({name:"MessageProvider",props:B5,setup(e){const{mergedClsPrefixRef:n}=un(e),t=K([]),o=K({}),r={create(l,c){return i(l,Object.assign({type:"default"},c))},info(l,c){return i(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return i(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return i(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return i(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return i(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:s};Ye(Ng,{props:e,mergedClsPrefixRef:n}),Ye(jg,r);function i(l,c){const d=La(),u=po(Object.assign(Object.assign({},c),{content:l,key:d,destroy:()=>{var b;(b=o.value[d])===null||b===void 0||b.hide()}})),{max:p}=e;return p&&t.value.length>=p&&t.value.shift(),t.value.push(u),u}function a(l){t.value.splice(t.value.findIndex(c=>c.key===l),1),delete o.value[l]}function s(){Object.values(o.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:n,messageRefs:o,messageList:t,handleAfterLeave:a},r)},render(){var e,n,t;return x(Je,null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e),this.messageList.length?x(_a,{to:(t=this.to)!==null&&t!==void 0?t:"body"},x("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(o=>x(O5,Object.assign({ref:r=>{r&&(this.messageRefs[o.key]=r)},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave},Xl(o,["destroy"],void 0),{duration:o.duration===void 0?this.duration:o.duration,keepAliveOnHover:o.keepAliveOnHover===void 0?this.keepAliveOnHover:o.keepAliveOnHover,closable:o.closable===void 0?this.closable:o.closable}))))):null)}});function W5(){const e=Re(jg,null);return e===null&&yi("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const os="n-notification-provider",j5=me({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:n,wipTransitionCountRef:t}=Re(os),o=K(null);return so(()=>{var r,i;t.value>0?(r=o==null?void 0:o.value)===null||r===void 0||r.classList.add("transitioning"):(i=o==null?void 0:o.value)===null||i===void 0||i.classList.remove("transitioning")}),{selfRef:o,mergedTheme:e,mergedClsPrefix:n,transitioning:t}},render(){const{$slots:e,scrollable:n,mergedClsPrefix:t,mergedTheme:o,placement:r}=this;return x("div",{ref:"selfRef",class:[`${t}-notification-container`,n&&`${t}-notification-container--scrollable`,`${t}-notification-container--${r}`]},n?x(Ja,{theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),N5={info:()=>x(xa,null),success:()=>x(hc,null),warning:()=>x(pc,null),error:()=>x(fc,null),default:()=>null},Dc={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},G5=Oa(Dc),V5=me({name:"Notification",props:Dc,setup(e){const{mergedClsPrefixRef:n,mergedThemeRef:t,props:o}=Re(os),{inlineThemeDisabled:r,mergedRtlRef:i}=un(),a=Uo("Notification",i,n),s=G(()=>{const{type:c}=e,{self:{color:d,textColor:u,closeIconColor:p,closeIconColorHover:b,closeIconColorPressed:h,headerTextColor:v,descriptionTextColor:m,actionTextColor:g,borderRadius:S,headerFontWeight:_,boxShadow:k,lineHeight:T,fontSize:R,closeMargin:y,closeSize:w,width:I,padding:H,closeIconSize:U,closeBorderRadius:z,closeColorHover:te,closeColorPressed:L,titleFontSize:M,metaFontSize:se,descriptionFontSize:j,[be("iconColor",c)]:ie},common:{cubicBezierEaseOut:$,cubicBezierEaseIn:Z,cubicBezierEaseInOut:Pe}}=t.value,{left:He,right:Pn,top:Be,bottom:Oe}=Zl(H);return{"--n-color":d,"--n-font-size":R,"--n-text-color":u,"--n-description-text-color":m,"--n-action-text-color":g,"--n-title-text-color":v,"--n-title-font-weight":_,"--n-bezier":Pe,"--n-bezier-ease-out":$,"--n-bezier-ease-in":Z,"--n-border-radius":S,"--n-box-shadow":k,"--n-close-border-radius":z,"--n-close-color-hover":te,"--n-close-color-pressed":L,"--n-close-icon-color":p,"--n-close-icon-color-hover":b,"--n-close-icon-color-pressed":h,"--n-line-height":T,"--n-icon-color":ie,"--n-close-margin":y,"--n-close-size":w,"--n-close-icon-size":U,"--n-width":I,"--n-padding-left":He,"--n-padding-right":Pn,"--n-padding-top":Be,"--n-padding-bottom":Oe,"--n-title-font-size":M,"--n-meta-font-size":se,"--n-description-font-size":j}}),l=r?Rn("notification",G(()=>e.type[0]),s,o):void 0;return{mergedClsPrefix:n,showAvatar:G(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:a,cssVars:r?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),x("div",{class:[`${n}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},x("div",{class:[`${n}-notification`,this.rtlEnabled&&`${n}-notification--rtl`,this.themeClass,{[`${n}-notification--closable`]:this.closable,[`${n}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?x("div",{class:`${n}-notification__avatar`},this.avatar?Hn(this.avatar):this.type!=="default"?x(ho,{clsPrefix:n},{default:()=>N5[this.type]()}):null):null,this.closable?x(Xa,{clsPrefix:n,class:`${n}-notification__close`,onClick:this.handleCloseClick}):null,x("div",{ref:"bodyRef",class:`${n}-notification-main`},this.title?x("div",{class:`${n}-notification-main__header`},Hn(this.title)):null,this.description?x("div",{class:`${n}-notification-main__description`},Hn(this.description)):null,this.content?x("pre",{class:`${n}-notification-main__content`},Hn(this.content)):null,this.meta||this.action?x("div",{class:`${n}-notification-main-footer`},this.meta?x("div",{class:`${n}-notification-main-footer__meta`},Hn(this.meta)):null,this.action?x("div",{class:`${n}-notification-main-footer__action`},Hn(this.action)):null):null)))}}),K5=Object.assign(Object.assign({},Dc),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),U5=me({name:"NotificationEnvironment",props:Object.assign(Object.assign({},K5),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:n}=Re(os),t=K(!0);let o=null;function r(){t.value=!1,o&&window.clearTimeout(o)}function i(h){n.value++,Gn(()=>{h.style.height=`${h.offsetHeight}px`,h.style.maxHeight="0",h.style.transition="none",h.offsetHeight,h.style.transition="",h.style.maxHeight=h.style.height})}function a(h){n.value--,h.style.height="",h.style.maxHeight="";const{onAfterEnter:v,onAfterShow:m}=e;v&&v(),m&&m()}function s(h){n.value++,h.style.maxHeight=`${h.offsetHeight}px`,h.style.height=`${h.offsetHeight}px`,h.offsetHeight}function l(h){const{onHide:v}=e;v&&v(),h.style.maxHeight="0",h.offsetHeight}function c(){n.value--;const{onAfterLeave:h,onInternalAfterLeave:v,onAfterHide:m,internalKey:g}=e;h&&h(),v(g),m&&m()}function d(){const{duration:h}=e;h&&(o=window.setTimeout(r,h))}function u(h){h.currentTarget===h.target&&o!==null&&(window.clearTimeout(o),o=null)}function p(h){h.currentTarget===h.target&&d()}function b(){const{onClose:h}=e;h?Promise.resolve(h()).then(v=>{v!==!1&&r()}):r()}return Kn(()=>{e.duration&&(o=window.setTimeout(r,e.duration))}),{show:t,hide:r,handleClose:b,handleAfterLeave:c,handleLeave:l,handleBeforeLeave:s,handleAfterEnter:a,handleBeforeEnter:i,handleMouseenter:u,handleMouseleave:p}},render(){return x(bt,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?x(V5,Object.assign({},Wo(this.$props,G5),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),q5=O([ne("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[O(">",[ne("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[O(">",[ne("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[ne("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),Q("top, top-right, top-left",`
 top: 12px;
 `,[O("&.transitioning >",[ne("scrollbar",[O(">",[ne("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),Q("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[O(">",[ne("scrollbar",[O(">",[ne("scrollbar-container",[ne("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),ne("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),Q("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[ne("notification-wrapper",[O("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),O("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),Q("top",[ne("notification-wrapper",`
 transform-origin: top center;
 `)]),Q("bottom",[ne("notification-wrapper",`
 transform-origin: bottom center;
 `)]),Q("top-right, bottom-right",[ne("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),Q("top-left, bottom-left",[ne("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),Q("top-right",`
 right: 0;
 `,[na("top-right")]),Q("top-left",`
 left: 0;
 `,[na("top-left")]),Q("bottom-right",`
 right: 0;
 `,[na("bottom-right")]),Q("bottom-left",`
 left: 0;
 `,[na("bottom-left")]),Q("scrollable",[Q("top-right",`
 top: 0;
 `),Q("top-left",`
 top: 0;
 `),Q("bottom-right",`
 bottom: 0;
 `),Q("bottom-left",`
 bottom: 0;
 `)]),ne("notification-wrapper",`
 margin-bottom: 12px;
 `,[O("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),O("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),O("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),O("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),ne("notification",`
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
 `,[F("avatar",[ne("icon",{color:"var(--n-icon-color)"}),ne("base-icon",{color:"var(--n-icon-color)"})]),Q("show-avatar",[ne("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),Q("closable",[ne("notification-main",[O("> *:first-child",{paddingRight:"20px"})]),F("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),F("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[ne("icon","transition: color .3s var(--n-bezier);")]),ne("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[ne("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[F("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),F("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),F("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),F("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),F("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[O("&:first-child",{margin:0})])])])])]);function na(e){const t=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",o="0";return ne("notification-wrapper",[O("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${t}, 0);
 `),O("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${o}, 0);
 `)])}const Gg="n-notification-api",Z5=Object.assign(Object.assign({},De.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),X5=me({name:"NotificationProvider",props:Z5,setup(e){const{mergedClsPrefixRef:n}=un(e),t=K([]),o={},r=new Set;function i(b){const h=La(),v=()=>{r.add(h),o[h]&&o[h].hide()},m=po(Object.assign(Object.assign({},b),{key:h,destroy:v,hide:v,deactivate:v})),{max:g}=e;if(g&&t.value.length-r.size>=g){let S=!1,_=0;for(const k of t.value){if(!r.has(k.key)){o[k.key]&&(k.destroy(),S=!0);break}_++}S||t.value.splice(_,1)}return t.value.push(m),m}const a=["info","success","warning","error"].map(b=>h=>i(Object.assign(Object.assign({},h),{type:b})));function s(b){r.delete(b),t.value.splice(t.value.findIndex(h=>h.key===b),1)}const l=De("Notification","-notification",q5,cg,e,n),c={create:i,info:a[0],success:a[1],warning:a[2],error:a[3],open:u,destroyAll:p},d=K(0);Ye(Gg,c),Ye(os,{props:e,mergedClsPrefixRef:n,mergedThemeRef:l,wipTransitionCountRef:d});function u(b){return i(b)}function p(){Object.values(t.value).forEach(b=>{b.hide()})}return Object.assign({mergedClsPrefix:n,notificationList:t,notificationRefs:o,handleAfterLeave:s},c)},render(){var e,n,t;const{placement:o}=this;return x(Je,null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e),this.notificationList.length?x(_a,{to:(t=this.to)!==null&&t!==void 0?t:"body"},x(j5,{style:this.containerStyle,scrollable:this.scrollable&&o!=="top"&&o!=="bottom",placement:o},{default:()=>this.notificationList.map(r=>x(U5,Object.assign({ref:i=>{const a=r.key;i===null?delete this.notificationRefs[a]:this.notificationRefs[a]=i}},Xl(r,["destroy","hide","deactivate"]),{internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover})))})):null)}});function J5(){const e=Re(Gg,null);return e===null&&yi("use-notification","No outer `n-notification-provider` found."),e}const Y5={name:"Skeleton",common:le,self(e){const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}}},Q5=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}},eI={name:"Skeleton",common:ce,self:Q5},nI=ne("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[O("&:first-child",{marginTop:0}),Q("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[Q("align-text",{paddingLeft:0},[O("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),O("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),O("&::before",{backgroundColor:"var(--n-bar-color)"})])]),tI=Object.assign(Object.assign({},De.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),Pr=e=>me({name:`H${e}`,props:tI,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=un(n),r=De("Typography","-h",nI,Rc,n,t),i=G(()=>{const{type:s}=n,{common:{cubicBezierEaseInOut:l},self:{headerFontWeight:c,headerTextColor:d,[be("headerPrefixWidth",e)]:u,[be("headerFontSize",e)]:p,[be("headerMargin",e)]:b,[be("headerBarWidth",e)]:h,[be("headerBarColor",s)]:v}}=r.value;return{"--n-bezier":l,"--n-font-size":p,"--n-margin":b,"--n-bar-color":v,"--n-bar-width":h,"--n-font-weight":c,"--n-text-color":d,"--n-prefix-width":u}}),a=o?Rn(`h${e}`,G(()=>n.type[0]),i,n):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var n;const{prefix:t,alignText:o,mergedClsPrefix:r,cssVars:i,$slots:a}=this;return(n=this.onRender)===null||n===void 0||n.call(this),x(`h${e}`,{class:[`${r}-h`,`${r}-h${e}`,this.themeClass,{[`${r}-h--prefix-bar`]:t,[`${r}-h--align-text`]:o}],style:i},a)}}),oI=Pr("1"),rI=Pr("2");Pr("3");Pr("4");Pr("5");Pr("6");const iI=ne("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[Q("strong",`
 font-weight: var(--n-font-weight-strong);
 `),Q("italic",{fontStyle:"italic"}),Q("underline",{textDecoration:"underline"}),Q("code",`
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
 `)]),aI=Object.assign(Object.assign({},De.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),sI=me({name:"Text",props:aI,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=un(e),o=De("Typography","-text",iI,Rc,e,n),r=G(()=>{const{depth:a,type:s}=e,l=s==="default"?a===void 0?"textColor":`textColor${a}Depth`:be("textColor",s),{common:{fontWeightStrong:c,fontFamilyMono:d,cubicBezierEaseInOut:u},self:{codeTextColor:p,codeBorderRadius:b,codeColor:h,codeBorder:v,[l]:m}}=o.value;return{"--n-bezier":u,"--n-text-color":m,"--n-font-weight-strong":c,"--n-font-famliy-mono":d,"--n-code-border-radius":b,"--n-code-text-color":p,"--n-code-color":h,"--n-code-border":v}}),i=t?Rn("text",G(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:n,compitableTag:fh(e,["as","tag"]),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,n,t;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],i=(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n);return this.code?x("code",{class:r,style:this.cssVars},this.delete?x("del",null,i):i):this.delete?x("del",{class:r,style:this.cssVars},i):x(this.compitableTag||"span",{class:r,style:this.cssVars},i)}}),lI=me({name:"InjectionExtractor",props:{onSetup:Function},setup(e,{slots:n}){var t;return(t=e.onSetup)===null||t===void 0||t.call(e),()=>{var o;return(o=n.default)===null||o===void 0?void 0:o.call(n)}}}),cI={message:W5,notification:J5,loadingBar:_5,dialog:V3};function dI({providersAndProps:e,configProviderProps:n}){let o=Xf(()=>x(pm,Ee(n),{default:()=>e.map(({type:s,Provider:l,props:c})=>x(l,Ee(c),{default:()=>x(lI,{onSetup:()=>r[s]=cI[s]()})}))}));const r={app:o};let i;return mo&&(i=document.createElement("div"),document.body.appendChild(i),o.mount(i)),Object.assign({unmount:()=>{var s;if(o===null||i===null){jo("discrete","unmount call no need because discrete app has been unmounted");return}o.unmount(),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=null,o=null}},r)}function uI(e,{configProviderProps:n,messageProviderProps:t,dialogProviderProps:o,notificationProviderProps:r,loadingBarProviderProps:i}={}){const a=[];return e.forEach(l=>{switch(l){case"message":a.push({type:l,Provider:F5,props:t});break;case"notification":a.push({type:l,Provider:X5,props:r});break;case"dialog":a.push({type:l,Provider:G3,props:o});break;case"loadingBar":a.push({type:l,Provider:H5,props:i});break}}),dI({providersAndProps:a,configProviderProps:n})}const Vg=()=>({}),fI={name:"Equation",common:ce,self:Vg},hI=fI,pI={name:"Equation",common:le,self:Vg},mI=pI,gI={name:"dark",common:le,Alert:BP,Anchor:XP,AutoComplete:d$,Avatar:Yp,AvatarGroup:g$,BackTop:v$,Badge:S$,Breadcrumb:I$,Button:ot,ButtonGroup:YR,Calendar:N$,Card:am,Carousel:rA,Cascader:uA,Checkbox:kr,Code:dm,Collapse:vA,CollapseTransition:wA,ColorPicker:U$,DataTable:UA,DatePicker:C3,Descriptions:P3,Dialog:Nm,Divider:q3,Drawer:nR,Dropdown:Sc,DynamicInput:oR,DynamicTags:pR,Element:vR,Empty:qo,Ellipsis:Tm,Equation:mI,Form:PR,GradientText:DR,Icon:n3,IconWrapper:FR,Image:m5,Input:vt,InputNumber:tD,LegacyTransfer:k5,Layout:sD,List:hD,LoadingBar:mD,Log:yD,Menu:HD,Mention:TD,Message:XR,Modal:z3,Notification:KR,PageHeader:zD,Pagination:wm,Popconfirm:FD,Popover:Zo,Popselect:mm,Progress:yg,Radio:Pm,Rate:GD,Result:YD,Row:p5,Scrollbar:tt,Select:ym,Skeleton:Y5,Slider:e4,Space:ng,Spin:s4,Statistic:u4,Steps:g4,Switch:v4,Table:P4,Tabs:I4,Tag:Wp,Thing:z4,TimePicker:Bm,Timeline:L4,Tooltip:Qa,Transfer:j4,Tree:_g,TreeSelect:Z4,Typography:t5,Upload:a5,Watermark:l5},bI={name:"light",common:ce,Alert:jP,Anchor:qP,AutoComplete:l$,Avatar:Jp,AvatarGroup:p$,BackTop:C$,Badge:P$,Breadcrumb:R$,Button:qn,ButtonGroup:eD,Calendar:W$,Card:xc,Carousel:tA,Cascader:cA,Checkbox:Tr,Code:um,Collapse:gA,CollapseTransition:xA,ColorPicker:V$,DataTable:VA,DatePicker:y3,Descriptions:T3,Dialog:kc,Divider:Jm,Drawer:Q3,Dropdown:es,DynamicInput:aR,DynamicTags:gR,Element:tg,Empty:Kt,Equation:hI,Ellipsis:wc,Form:TR,GradientText:_R,Icon:Hm,IconWrapper:OR,Image:jR,Input:dt,InputNumber:iD,Layout:Ac,LegacyTransfer:A5,List:uD,LoadingBar:hg,Log:wD,Menu:DD,Mention:$D,Message:ug,Modal:Zm,Notification:cg,PageHeader:ED,Pagination:Cm,Popconfirm:OD,Popover:vo,Popselect:gm,Progress:vg,Radio:$m,Rate:UD,Row:f5,Result:XD,Scrollbar:Un,Skeleton:eI,Select:vm,Slider:o4,Space:$c,Spin:i4,Statistic:c4,Steps:p4,Switch:C4,Table:T4,Tabs:R4,Tag:jp,Thing:_4,TimePicker:Om,Timeline:F4,Tooltip:$i,Transfer:V4,Tree:Hg,TreeSelect:Y4,Typography:Rc,Upload:r5,Watermark:d5};var vI=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Kg;const rs=e=>Kg=e,Ug=Symbol();function wl(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ei;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ei||(ei={}));function yI(){const e=Yu(!0),n=e.run(()=>K({}));let t=[],o=[];const r=ao({install(i){rs(r),r._a=i,i.provide(Ug,r),i.config.globalProperties.$pinia=r,o.forEach(a=>t.push(a)),o=[]},use(i){return!this._a&&!vI?o.push(i):t.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return r}const qg=()=>{};function Mu(e,n,t,o=qg){e.push(n);const r=()=>{const i=e.indexOf(n);i>-1&&(e.splice(i,1),o())};return!t&&Qu()&&ef(r),r}function or(e,...n){e.slice().forEach(t=>{t(...n)})}function Sl(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,o)=>e.set(o,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const o=n[t],r=e[t];wl(r)&&wl(o)&&e.hasOwnProperty(t)&&!yn(o)&&!oo(o)?e[t]=Sl(r,o):e[t]=o}return e}const xI=Symbol();function CI(e){return!wl(e)||!e.hasOwnProperty(xI)}const{assign:no}=Object;function wI(e){return!!(yn(e)&&e.effect)}function SI(e,n,t,o){const{state:r,actions:i,getters:a}=n,s=t.state.value[e];let l;function c(){s||(t.state.value[e]=r?r():{});const d=nv(t.state.value[e]);return no(d,i,Object.keys(a||{}).reduce((u,p)=>(u[p]=ao(G(()=>{rs(t);const b=t._s.get(e);return a[p].call(b,b)})),u),{}))}return l=Zg(e,c,n,t,o,!0),l.$reset=function(){const u=r?r():{};this.$patch(p=>{no(p,u)})},l}function Zg(e,n,t={},o,r,i){let a;const s=no({actions:{}},t),l={deep:!0};let c,d,u=ao([]),p=ao([]),b;const h=o.state.value[e];!i&&!h&&(o.state.value[e]={}),K({});let v;function m(y){let w;c=d=!1,typeof y=="function"?(y(o.state.value[e]),w={type:ei.patchFunction,storeId:e,events:b}):(Sl(o.state.value[e],y),w={type:ei.patchObject,payload:y,storeId:e,events:b});const I=v=Symbol();Gn().then(()=>{v===I&&(c=!0)}),d=!0,or(u,w,o.state.value[e])}const g=qg;function S(){a.stop(),u=[],p=[],o._s.delete(e)}function _(y,w){return function(){rs(o);const I=Array.from(arguments),H=[],U=[];function z(M){H.push(M)}function te(M){U.push(M)}or(p,{args:I,name:y,store:T,after:z,onError:te});let L;try{L=w.apply(this&&this.$id===e?this:T,I)}catch(M){throw or(U,M),M}return L instanceof Promise?L.then(M=>(or(H,M),M)).catch(M=>(or(U,M),Promise.reject(M))):(or(H,L),L)}}const k={_p:o,$id:e,$onAction:Mu.bind(null,p),$patch:m,$reset:g,$subscribe(y,w={}){const I=Mu(u,y,w.detached,()=>H()),H=a.run(()=>pn(()=>o.state.value[e],U=>{(w.flush==="sync"?d:c)&&y({storeId:e,type:ei.direct,events:b},U)},no({},l,w)));return I},$dispose:S},T=po(k);o._s.set(e,T);const R=o._e.run(()=>(a=Yu(),a.run(()=>n())));for(const y in R){const w=R[y];if(yn(w)&&!wI(w)||oo(w))i||(h&&CI(w)&&(yn(w)?w.value=h[y]:Sl(w,h[y])),o.state.value[e][y]=w);else if(typeof w=="function"){const I=_(y,w);R[y]=I,s.actions[y]=w}}return no(T,R),no(Ke(T),R),Object.defineProperty(T,"$state",{get:()=>o.state.value[e],set:y=>{m(w=>{no(w,y)})}}),o._p.forEach(y=>{no(T,a.run(()=>y({store:T,app:o._a,pinia:o,options:s})))}),h&&i&&t.hydrate&&t.hydrate(T.$state,h),c=!0,d=!0,T}function Xg(e,n,t){let o,r;const i=typeof n=="function";typeof e=="string"?(o=e,r=i?t:n):(r=e,o=e.id);function a(s,l){const c=Nt();return s=s||c&&Re(Ug,null),s&&rs(s),s=Kg,s._s.has(o)||(i?Zg(o,n,r,s):SI(o,r,s)),s._s.get(o)}return a.$id=o,a}const TI=`local HDsearch="https://harddrop.com/wiki?search="
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
`,kI=`local HDsearch="https://harddrop.com/wiki?search="
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
`,PI=`local HDsearch="https://harddrop.com/wiki?search="
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
    {"连续PC",
        "lianxuquanxiao lianxupc pcloop",
        "pattern",
        "研究群群友加加编写的一份连续PC教程",
        "https://docs.qq.com/sheet/DRmxvWmt3SWxwS2tV"
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
`,$I="Techmino Online Dictionary",AI="Search",RI="Tags",DI="Copy from",II="Error",HI="Copied!",_I={title:$I,search:AI,tags:RI,copy_from:DI,error:II,copied:HI},EI="テクミノ オンライン辞書",zI="サーチ",MI="ラベル",LI="からコピー",OI="エラー",BI="コピーしました!",FI={title:EI,search:zI,tags:MI,copy_from:LI,error:OI,copied:BI},WI="Techmino 在线词典",jI="搜点什么",NI="标签",GI="复制于",VI="出错了",KI="复制成功!",UI={title:WI,search:jI,tags:NI,copy_from:GI,error:VI,copied:KI},qI={en:TI,ja:kI,zh:PI},ZI={en:_I,ja:FI,zh:UI},en="font-[proportional] not-italic text-cyan-500 text-4xl",js={help:"#ffff00",org:"#fbb741",game:"#14a3c7",term:"#ff7f7f",setup:"#ffffe0",pattern:"#bfdfa5",command:"#155084",english:"#0000ff",name:"#7a5299"};var Sa={},XI={get exports(){return Sa},set exports(e){Sa=e}};(function(e,n){(function(t,o,r){var i=n&&!n.nodeType&&n,a=e&&!e.nodeType&&e,s=i&&a&&typeof Os=="object"&&Os,l=a&&a.exports===i&&i;s&&(s.global===s||s.window===s||s.self===s)&&(t=s),r(i&&a?l?a.exports:i:t[o]={})})(Os,"luaparse",function(t){t.version="0.3.1";var o,r,i,a,s,l=t.defaultOptions={wait:!1,comments:!0,scope:!1,locations:!1,ranges:!1,onCreateNode:null,onCreateScope:null,onDestroyScope:null,onLocalDeclaration:null,luaVersion:"5.1",encodingMode:"none"};function c(f,C){return C=C||0,f<128?String.fromCharCode(f):f<2048?String.fromCharCode(C|192|f>>6,C|128|f&63):f<65536?String.fromCharCode(C|224|f>>12,C|128|f>>6&63,C|128|f&63):f<1114112?String.fromCharCode(C|240|f>>18,C|128|f>>12&63,C|128|f>>6&63,C|128|f&63):null}function d(f,C){for(var E=f.toString(16);E.length<C;)E="0"+E;return E}function u(f){return function(C){var E=f.exec(C);if(!E)return C;M(null,R.invalidCodeUnit,d(E[0].charCodeAt(0),4).toUpperCase())}}var p={"pseudo-latin1":{fixup:u(/[^\x00-\xff]/),encodeByte:function(f){return f===null?"":String.fromCharCode(f)},encodeUTF8:function(f){return c(f)}},"x-user-defined":{fixup:u(/[^\x00-\x7f\uf780-\uf7ff]/),encodeByte:function(f){return f===null?"":f>=128?String.fromCharCode(f|63232):String.fromCharCode(f)},encodeUTF8:function(f){return c(f,63232)}},none:{discardStrings:!0,fixup:function(f){return f},encodeByte:function(f){return""},encodeUTF8:function(f){return""}}},b=1,h=2,v=4,m=8,g=16,S=32,_=64,k=128,T=256;t.tokenTypes={EOF:b,StringLiteral:h,Keyword:v,Identifier:m,NumericLiteral:g,Punctuator:S,BooleanLiteral:_,NilLiteral:k,VarargLiteral:T};var R=t.errors={unexpected:"unexpected %1 '%2' near '%3'",unexpectedEOF:"unexpected symbol near '<eof>'",expected:"'%1' expected near '%2'",expectedToken:"%1 expected near '%2'",unfinishedString:"unfinished string near '%1'",malformedNumber:"malformed number near '%1'",decimalEscapeTooLarge:"decimal escape too large near '%1'",invalidEscape:"invalid escape sequence near '%1'",hexadecimalDigitExpected:"hexadecimal digit expected near '%1'",braceExpected:"missing '%1' near '%2'",tooLargeCodepoint:"UTF-8 value too large near '%1'",unfinishedLongString:"unfinished long string (starting at line %1) near '%2'",unfinishedLongComment:"unfinished long comment (starting at line %1) near '%2'",ambiguousSyntax:"ambiguous syntax (function call x new statement) near '%1'",noLoopToBreak:"no loop to break near '%1'",labelAlreadyDefined:"label '%1' already defined on line %2",labelNotVisible:"no visible label '%1' for <goto>",gotoJumpInLocalScope:"<goto %1> jumps into the scope of local '%2'",cannotUseVararg:"cannot use '...' outside a vararg function near '%1'",invalidCodeUnit:"code unit U+%1 is not allowed in the current encoding mode"},y=t.ast={labelStatement:function(f){return{type:"LabelStatement",label:f}},breakStatement:function(){return{type:"BreakStatement"}},gotoStatement:function(f){return{type:"GotoStatement",label:f}},returnStatement:function(f){return{type:"ReturnStatement",arguments:f}},ifStatement:function(f){return{type:"IfStatement",clauses:f}},ifClause:function(f,C){return{type:"IfClause",condition:f,body:C}},elseifClause:function(f,C){return{type:"ElseifClause",condition:f,body:C}},elseClause:function(f){return{type:"ElseClause",body:f}},whileStatement:function(f,C){return{type:"WhileStatement",condition:f,body:C}},doStatement:function(f){return{type:"DoStatement",body:f}},repeatStatement:function(f,C){return{type:"RepeatStatement",condition:f,body:C}},localStatement:function(f,C){return{type:"LocalStatement",variables:f,init:C}},assignmentStatement:function(f,C){return{type:"AssignmentStatement",variables:f,init:C}},callStatement:function(f){return{type:"CallStatement",expression:f}},functionStatement:function(f,C,E,W){return{type:"FunctionDeclaration",identifier:f,isLocal:E,parameters:C,body:W}},forNumericStatement:function(f,C,E,W,ue){return{type:"ForNumericStatement",variable:f,start:C,end:E,step:W,body:ue}},forGenericStatement:function(f,C,E){return{type:"ForGenericStatement",variables:f,iterators:C,body:E}},chunk:function(f){return{type:"Chunk",body:f}},identifier:function(f){return{type:"Identifier",name:f}},literal:function(f,C,E){return f=f===h?"StringLiteral":f===g?"NumericLiteral":f===_?"BooleanLiteral":f===k?"NilLiteral":"VarargLiteral",{type:f,value:C,raw:E}},tableKey:function(f,C){return{type:"TableKey",key:f,value:C}},tableKeyString:function(f,C){return{type:"TableKeyString",key:f,value:C}},tableValue:function(f){return{type:"TableValue",value:f}},tableConstructorExpression:function(f){return{type:"TableConstructorExpression",fields:f}},binaryExpression:function(f,C,E){var W=f==="and"||f==="or"?"LogicalExpression":"BinaryExpression";return{type:W,operator:f,left:C,right:E}},unaryExpression:function(f,C){return{type:"UnaryExpression",operator:f,argument:C}},memberExpression:function(f,C,E){return{type:"MemberExpression",indexer:C,identifier:E,base:f}},indexExpression:function(f,C){return{type:"IndexExpression",base:f,index:C}},callExpression:function(f,C){return{type:"CallExpression",base:f,arguments:C}},tableCallExpression:function(f,C){return{type:"TableCallExpression",base:f,arguments:C}},stringCallExpression:function(f,C){return{type:"StringCallExpression",base:f,argument:C}},comment:function(f,C){return{type:"Comment",value:f,raw:C}}};function w(f){if(fn){var C=mn.pop();C.complete(),C.bless(f)}return r.onCreateNode&&r.onCreateNode(f),f}var I=Array.prototype.slice,H=function(f,C){for(var E=0,W=f.length;E<W;++E)if(f[E]===C)return E;return-1};Array.prototype.indexOf&&(H=function(f,C){return f.indexOf(C)});function U(f,C,E){for(var W=0,ue=f.length;W<ue;++W)if(f[W][C]===E)return W;return-1}function z(f){var C=I.call(arguments,1);return f=f.replace(/%(\d)/g,function(E,W){return""+C[W-1]||""}),f}var te=function(f){for(var C=I.call(arguments,1),E,W,ue=0,Fe=C.length;ue<Fe;++ue){E=C[ue];for(W in E)Object.prototype.hasOwnProperty.call(E,W)&&(f[W]=E[W])}return f};Object.assign&&(te=Object.assign),t.SyntaxError=SyntaxError;function L(f){return Object.create?Object.create(f,{line:{writable:!0,value:f.line},index:{writable:!0,value:f.index},column:{writable:!0,value:f.column}}):f}function M(f){var C=z.apply(null,I.call(arguments,1)),E,W;throw f===null||typeof f.line>"u"?(W=$-Se+1,E=L(new SyntaxError(z("[%1:%2] %3",Oe,W,C))),E.index=$,E.line=Oe,E.column=W):(W=f.range[0]-f.lineStart,E=L(new SyntaxError(z("[%1:%2] %3",f.line,W,C))),E.line=f.line,E.index=f.range[0],E.column=W),E}function se(f){var C=o.slice(f.range[0],f.range[1]);return C||f.value}function j(f,C){M(C,R.expectedToken,f,se(C))}function ie(f){var C=se(He);if(typeof f.type<"u"){var E;switch(f.type){case h:E="string";break;case v:E="keyword";break;case m:E="identifier";break;case g:E="number";break;case S:E="symbol";break;case _:E="boolean";break;case k:return M(f,R.unexpected,"symbol","nil",C);case b:return M(f,R.unexpectedEOF)}return M(f,R.unexpected,E,se(f),C)}return M(f,R.unexpected,"symbol",f,C)}var $,Z,Pe,He,Pn,Be,Oe,Se;t.lex=_e;function _e(){for(Ae();o.charCodeAt($)===45&&o.charCodeAt($+1)===45;)xe(),Ae();if($>=i)return{type:b,value:"<eof>",line:Oe,lineStart:Se,range:[$,$]};var f=o.charCodeAt($),C=o.charCodeAt($+1);if(Be=$,Jn(f))return Xn();switch(f){case 39:case 34:return A();case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return q();case 46:return Ne(C)?q():C===46?o.charCodeAt($+2)===46?P():Ze(".."):Ze(".");case 61:return Ze(C===61?"==":"=");case 62:return a.bitwiseOperators&&C===62?Ze(">>"):Ze(C===61?">=":">");case 60:return a.bitwiseOperators&&C===60?Ze("<<"):Ze(C===61?"<=":"<");case 126:if(C===61)return Ze("~=");if(!a.bitwiseOperators)break;return Ze("~");case 58:return a.labels&&C===58?Ze("::"):Ze(":");case 91:return C===91||C===61?B():Ze("[");case 47:return a.integerDivision&&C===47?Ze("//"):Ze("/");case 38:case 124:if(!a.bitwiseOperators)break;case 42:case 94:case 37:case 44:case 123:case 125:case 93:case 40:case 41:case 59:case 35:case 45:case 43:return Ze(o.charAt($))}return ie(o.charAt($))}function Zn(){var f=o.charCodeAt($),C=o.charCodeAt($+1);return Me(f)?(f===10&&C===13&&++$,f===13&&C===10&&++$,++Oe,Se=++$,!0):!1}function Ae(){for(;$<i;){var f=o.charCodeAt($);if(je(f))++$;else if(!Zn())break}}function Xn(){for(var f,C;Ut(o.charCodeAt(++$)););return f=s.fixup(o.slice(Be,$)),ut(f)?C=v:f==="true"||f==="false"?(C=_,f=f==="true"):f==="nil"?(C=k,f=null):C=m,{type:C,value:f,line:Oe,lineStart:Se,range:[Be,$]}}function Ze(f){return $+=f.length,{type:S,value:f,line:Oe,lineStart:Se,range:[Be,$]}}function P(){return $+=3,{type:T,value:"...",line:Oe,lineStart:Se,range:[Be,$]}}function A(){for(var f=o.charCodeAt($++),C=Oe,E=Se,W=$,ue=s.discardStrings?null:"",Fe;Fe=o.charCodeAt($++),f!==Fe;)if(($>i||Me(Fe))&&(ue+=o.slice(W,$-1),M(null,R.unfinishedString,o.slice(Be,$-1))),Fe===92){if(!s.discardStrings){var qe=o.slice(W,$-1);ue+=s.fixup(qe)}var bn=N();s.discardStrings||(ue+=bn),W=$}return s.discardStrings||(ue+=s.encodeByte(null),ue+=s.fixup(o.slice(W,$-1))),{type:h,value:ue,line:C,lineStart:E,lastLine:Oe,lastLineStart:Se,range:[Be,$]}}function B(){var f=Oe,C=Se,E=ge(!1);return E===!1&&M(Z,R.expected,"[",se(Z)),{type:h,value:s.discardStrings?null:s.fixup(E),line:f,lineStart:C,lastLine:Oe,lastLineStart:Se,range:[Be,$]}}function q(){var f=o.charAt($),C=o.charAt($+1),E=f==="0"&&"xX".indexOf(C||null)>=0?de():re(),W=J(),ue=ae();return ue&&(W||E.hasFractionPart)&&M(null,R.malformedNumber,o.slice(Be,$)),{type:g,value:E.value,line:Oe,lineStart:Se,range:[Be,$]}}function J(){if(a.imaginaryNumbers)return"iI".indexOf(o.charAt($)||null)>=0?(++$,!0):!1}function ae(){if(a.integerSuffixes){if("uU".indexOf(o.charAt($)||null)>=0)if(++$,"lL".indexOf(o.charAt($)||null)>=0){if(++$,"lL".indexOf(o.charAt($)||null)>=0)return++$,"ULL";M(null,R.malformedNumber,o.slice(Be,$))}else M(null,R.malformedNumber,o.slice(Be,$));else if("lL".indexOf(o.charAt($)||null)>=0){if(++$,"lL".indexOf(o.charAt($)||null)>=0)return++$,"LL";M(null,R.malformedNumber,o.slice(Be,$))}}}function de(){var f=0,C=1,E=1,W,ue,Fe,qe;for(qe=$+=2,rn(o.charCodeAt($))||M(null,R.malformedNumber,o.slice(Be,$));rn(o.charCodeAt($));)++$;W=parseInt(o.slice(qe,$),16);var bn=!1;if(o.charAt($)==="."){for(bn=!0,ue=++$;rn(o.charCodeAt($));)++$;f=o.slice(ue,$),f=ue===$?0:parseInt(f,16)/Math.pow(16,$-ue)}var Yo=!1;if("pP".indexOf(o.charAt($)||null)>=0){for(Yo=!0,++$,"+-".indexOf(o.charAt($)||null)>=0&&(E=o.charAt($++)==="+"?1:-1),Fe=$,Ne(o.charCodeAt($))||M(null,R.malformedNumber,o.slice(Be,$));Ne(o.charCodeAt($));)++$;C=o.slice(Fe,$),C=Math.pow(2,C*E)}return{value:(W+f)*C,hasFractionPart:bn||Yo}}function re(){for(;Ne(o.charCodeAt($));)++$;var f=!1;if(o.charAt($)===".")for(f=!0,++$;Ne(o.charCodeAt($));)++$;var C=!1;if("eE".indexOf(o.charAt($)||null)>=0)for(C=!0,++$,"+-".indexOf(o.charAt($)||null)>=0&&++$,Ne(o.charCodeAt($))||M(null,R.malformedNumber,o.slice(Be,$));Ne(o.charCodeAt($));)++$;return{value:parseFloat(o.slice(Be,$)),hasFractionPart:f||C}}function ee(){var f=$++;for(o.charAt($++)!=="{"&&M(null,R.braceExpected,"{","\\"+o.slice(f,$)),rn(o.charCodeAt($))||M(null,R.hexadecimalDigitExpected,"\\"+o.slice(f,$));o.charCodeAt($)===48;)++$;for(var C=$;rn(o.charCodeAt($));)++$,$-C>6&&M(null,R.tooLargeCodepoint,"\\"+o.slice(f,$));var E=o.charAt($++);E!=="}"&&(E==='"'||E==="'"?M(null,R.braceExpected,"}","\\"+o.slice(f,$--)):M(null,R.hexadecimalDigitExpected,"\\"+o.slice(f,$)));var W=parseInt(o.slice(C,$-1)||"0",16),ue="\\"+o.slice(f,$);return W>1114111&&M(null,R.tooLargeCodepoint,ue),s.encodeUTF8(W,ue)}function N(){var f=$;switch(o.charAt($)){case"a":return++$,"\x07";case"n":return++$,`
`;case"r":return++$,"\r";case"t":return++$,"	";case"v":return++$,"\v";case"b":return++$,"\b";case"f":return++$,"\f";case"\r":case`
`:return Zn(),`
`;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;Ne(o.charCodeAt($))&&$-f<3;)++$;var C=o.slice(f,$),E=parseInt(C,10);return E>255&&M(null,R.decimalEscapeTooLarge,"\\"+E),s.encodeByte(E,"\\"+C);case"z":if(a.skipWhitespaceEscape)return++$,Ae(),"";break;case"x":if(a.hexEscapes){if(rn(o.charCodeAt($+1))&&rn(o.charCodeAt($+2)))return $+=3,s.encodeByte(parseInt(o.slice(f+1,$),16),"\\"+o.slice(f,$));M(null,R.hexadecimalDigitExpected,"\\"+o.slice(f,$+2))}break;case"u":if(a.unicodeEscapes)return ee();break;case"\\":case'"':case"'":return o.charAt($++)}return a.strictEscapes&&M(null,R.invalidEscape,"\\"+o.slice(f,$+1)),o.charAt($++)}function xe(){Be=$,$+=2;var f=o.charAt($),C="",E=!1,W=$,ue=Se,Fe=Oe;if(f==="["&&(C=ge(!0),C===!1?C=f:E=!0),!E){for(;$<i&&!Me(o.charCodeAt($));)++$;r.comments&&(C=o.slice(W,$))}if(r.comments){var qe=y.comment(C,o.slice(Be,$));r.locations&&(qe.loc={start:{line:Fe,column:Be-ue},end:{line:Oe,column:$-Se}}),r.ranges&&(qe.range=[Be,$]),r.onCreateNode&&r.onCreateNode(qe),Pn.push(qe)}}function ge(f){var C=0,E="",W=!1,ue,Fe,qe=Oe;for(++$;o.charAt($+C)==="=";)++C;if(o.charAt($+C)!=="[")return!1;for($+=C+1,Me(o.charCodeAt($))&&Zn(),Fe=$;$<i;){for(;Me(o.charCodeAt($));)Zn();if(ue=o.charAt($++),ue==="]"){W=!0;for(var bn=0;bn<C;++bn)o.charAt($+bn)!=="="&&(W=!1);o.charAt($+C)!=="]"&&(W=!1)}if(W)return E+=o.slice(Fe,$-1),$+=C+1,E}M(null,f?R.unfinishedLongComment:R.unfinishedLongString,qe,"<eof>")}function oe(){Pe=Z,Z=He,He=_e()}function fe(f){return f===Z.value?(oe(),!0):!1}function ye(f){f===Z.value?oe():M(Z,R.expected,f,se(Z))}function je(f){return f===9||f===32||f===11||f===12}function Me(f){return f===10||f===13}function Ne(f){return f>=48&&f<=57}function rn(f){return f>=48&&f<=57||f>=97&&f<=102||f>=65&&f<=70}function Jn(f){return!!(f>=65&&f<=90||f>=97&&f<=122||f===95||a.extendedIdentifiers&&f>=128)}function Ut(f){return!!(f>=65&&f<=90||f>=97&&f<=122||f===95||f>=48&&f<=57||a.extendedIdentifiers&&f>=128)}function ut(f){switch(f.length){case 2:return f==="do"||f==="if"||f==="in"||f==="or";case 3:return f==="and"||f==="end"||f==="for"||f==="not";case 4:return f==="else"||f==="then"?!0:a.labels&&!a.contextualGoto?f==="goto":!1;case 5:return f==="break"||f==="local"||f==="until"||f==="while";case 6:return f==="elseif"||f==="repeat"||f==="return";case 8:return f==="function"}return!1}function rt(f){return S===f.type?"#-~".indexOf(f.value)>=0:v===f.type?f.value==="not":!1}function xn(f){if(b===f.type)return!0;if(v!==f.type)return!1;switch(f.value){case"else":case"elseif":case"end":case"until":return!0;default:return!1}}var Y,pe,ke;function Le(){var f=Y[pe++].slice();Y.push(f),r.onCreateScope&&r.onCreateScope()}function Ue(){Y.pop(),--pe,r.onDestroyScope&&r.onDestroyScope()}function Cn(f){r.onLocalDeclaration&&r.onLocalDeclaration(f),H(Y[pe],f)===-1&&Y[pe].push(f)}function Sn(f){Cn(f.name),Qe(f,!0)}function Qe(f,C){!C&&U(ke,"name",f.name)===-1&&ke.push(f),f.isLocal=C}function Mn(f){return H(Y[pe],f)!==-1}var mn=[],fn;function Yn(){return new Xo(Z)}function Xo(f){r.locations&&(this.loc={start:{line:f.line,column:f.range[0]-f.lineStart},end:{line:0,column:0}}),r.ranges&&(this.range=[f.range[0],0])}Xo.prototype.complete=function(){r.locations&&(this.loc.end.line=Pe.lastLine||Pe.line,this.loc.end.column=Pe.range[1]-(Pe.lastLineStart||Pe.lineStart)),r.ranges&&(this.range[1]=Pe.range[1])},Xo.prototype.bless=function(f){if(this.loc){var C=this.loc;f.loc={start:{line:C.start.line,column:C.start.column},end:{line:C.end.line,column:C.end.column}}}this.range&&(f.range=[this.range[0],this.range[1]])};function qt(){fn&&mn.push(Yn())}function Dn(f){fn&&mn.push(f)}function Ln(){this.scopes=[],this.pendingGotos=[]}Ln.prototype.isInLoop=function(){for(var f=this.scopes.length;f-- >0;)if(this.scopes[f].isLoop)return!0;return!1},Ln.prototype.pushScope=function(f){var C={labels:{},locals:[],deferredGotos:[],isLoop:!!f};this.scopes.push(C)},Ln.prototype.popScope=function(){for(var f=0;f<this.pendingGotos.length;++f){var C=this.pendingGotos[f];C.maxDepth>=this.scopes.length&&--C.maxDepth<=0&&M(C.token,R.labelNotVisible,C.target)}this.scopes.pop()},Ln.prototype.addGoto=function(f,C){for(var E=[],W=0;W<this.scopes.length;++W){var ue=this.scopes[W];if(E.push(ue.locals.length),Object.prototype.hasOwnProperty.call(ue.labels,f))return}this.pendingGotos.push({maxDepth:this.scopes.length,target:f,token:C,localCounts:E})},Ln.prototype.addLabel=function(f,C){var E=this.currentScope();if(Object.prototype.hasOwnProperty.call(E.labels,f))M(C,R.labelAlreadyDefined,f,E.labels[f].line);else{for(var W=[],ue=0;ue<this.pendingGotos.length;++ue){var Fe=this.pendingGotos[ue];if(Fe.maxDepth>=this.scopes.length&&Fe.target===f){Fe.localCounts[this.scopes.length-1]<E.locals.length&&E.deferredGotos.push(Fe);continue}W.push(Fe)}this.pendingGotos=W}E.labels[f]={localCount:E.locals.length,line:C.line}},Ln.prototype.addLocal=function(f,C){this.currentScope().locals.push({name:f,token:C})},Ln.prototype.currentScope=function(){return this.scopes[this.scopes.length-1]},Ln.prototype.raiseDeferredErrors=function(){for(var f=this.currentScope(),C=f.deferredGotos,E=0;E<C.length;++E){var W=C[E];M(W.token,R.gotoJumpInLocalScope,W.target,f.locals[W.localCounts[this.scopes.length-1]].name)}};function D(){this.level=0,this.loopLevels=[]}D.prototype.isInLoop=function(){return!!this.loopLevels.length},D.prototype.pushScope=function(f){++this.level,f&&this.loopLevels.push(this.level)},D.prototype.popScope=function(){var f=this.loopLevels,C=f.length;C&&f[C-1]===this.level&&f.pop(),--this.level},D.prototype.addGoto=D.prototype.addLabel=function(){throw new Error("This should never happen")},D.prototype.addLocal=D.prototype.raiseDeferredErrors=function(){};function X(){return a.labels?new Ln:new D}function Te(){oe(),qt(),r.scope&&Le();var f=X();f.allowVararg=!0,f.pushScope();var C=We(f);return f.popScope(),r.scope&&Ue(),b!==Z.type&&ie(Z),fn&&!C.length&&(Pe=Z),w(y.chunk(C))}function We(f){for(var C=[],E;!xn(Z);){if(Z.value==="return"||!a.relaxedBreak&&Z.value==="break"){C.push(cn(f));break}E=cn(f),fe(";"),E&&C.push(E)}return C}function cn(f){if(qt(),S===Z.type&&fe("::"))return on(f);if(a.emptyStatement&&fe(";")){fn&&mn.pop();return}if(f.raiseDeferredErrors(),v===Z.type)switch(Z.value){case"local":return oe(),ss(f);case"if":return oe(),is(f);case"return":return oe(),Ar(f);case"function":oe();var C=cs();return Rr(C);case"while":return oe(),yo(f);case"for":return oe(),as(f);case"repeat":return oe(),xo(f);case"break":return oe(),f.isInLoop()||M(Z,R.noLoopToBreak,Z.value),_t();case"do":return oe(),Et(f);case"goto":return oe(),Tt(f)}return a.contextualGoto&&Z.type===m&&Z.value==="goto"&&He.type===m&&He.value!=="goto"?(oe(),Tt(f)):(fn&&mn.pop(),ls(f))}function on(f){var C=Z,E=In();return r.scope&&(Cn("::"+C.value+"::"),Qe(E,!0)),ye("::"),f.addLabel(C.value,C),w(y.labelStatement(E))}function _t(){return w(y.breakStatement())}function Tt(f){var C=Z.value,E=Pe,W=In();return f.addGoto(C,E),w(y.gotoStatement(W))}function Et(f){r.scope&&Le(),f.pushScope();var C=We(f);return f.popScope(),r.scope&&Ue(),ye("end"),w(y.doStatement(C))}function yo(f){var C=gn(f);ye("do"),r.scope&&Le(),f.pushScope(!0);var E=We(f);return f.popScope(),r.scope&&Ue(),ye("end"),w(y.whileStatement(C,E))}function xo(f){r.scope&&Le(),f.pushScope(!0);var C=We(f);ye("until"),f.raiseDeferredErrors();var E=gn(f);return f.popScope(),r.scope&&Ue(),w(y.repeatStatement(E,C))}function Ar(f){var C=[];if(Z.value!=="end"){var E=Jo(f);for(E!=null&&C.push(E);fe(",");)E=gn(f),C.push(E);fe(";")}return w(y.returnStatement(C))}function is(f){var C=[],E,W,ue;for(fn&&(ue=mn[mn.length-1],mn.push(ue)),E=gn(f),ye("then"),r.scope&&Le(),f.pushScope(),W=We(f),f.popScope(),r.scope&&Ue(),C.push(w(y.ifClause(E,W))),fn&&(ue=Yn());fe("elseif");)Dn(ue),E=gn(f),ye("then"),r.scope&&Le(),f.pushScope(),W=We(f),f.popScope(),r.scope&&Ue(),C.push(w(y.elseifClause(E,W))),fn&&(ue=Yn());return fe("else")&&(fn&&(ue=new Xo(Pe),mn.push(ue)),r.scope&&Le(),f.pushScope(),W=We(f),f.popScope(),r.scope&&Ue(),C.push(w(y.elseClause(W)))),ye("end"),w(y.ifStatement(C))}function as(f){var C=In(),E;if(r.scope&&(Le(),Sn(C)),fe("=")){var W=gn(f);ye(",");var ue=gn(f),Fe=fe(",")?gn(f):null;return ye("do"),f.pushScope(!0),E=We(f),f.popScope(),ye("end"),r.scope&&Ue(),w(y.forNumericStatement(C,W,ue,Fe,E))}else{for(var qe=[C];fe(",");)C=In(),r.scope&&Sn(C),qe.push(C);ye("in");var bn=[];do{var Yo=gn(f);bn.push(Yo)}while(fe(","));return ye("do"),f.pushScope(!0),E=We(f),f.popScope(),ye("end"),r.scope&&Ue(),w(y.forGenericStatement(qe,bn,E))}}function ss(f){var C,E=Pe;if(m===Z.type){var W=[],ue=[];do C=In(),W.push(C),f.addLocal(C.name,E);while(fe(","));if(fe("="))do{var Fe=gn(f);ue.push(Fe)}while(fe(","));if(r.scope)for(var qe=0,bn=W.length;qe<bn;++qe)Sn(W[qe]);return w(y.localStatement(W,ue))}if(fe("function"))return C=In(),f.addLocal(C.name,E),r.scope&&(Sn(C),Le()),Rr(C,!0);j("<name>",Z)}function ls(f){var C,E,W,ue,Fe,qe=[];fn&&(E=Yn());do{if(fn&&(C=Yn()),m===Z.type)Fe=Z.value,ue=In(),r.scope&&Qe(ue,Mn(Fe)),W=!0;else if(Z.value==="(")oe(),ue=gn(f),ye(")"),W=!1;else return ie(Z);e:for(;;){switch(h===Z.type?'"':Z.value){case".":case"[":W=!0;break;case":":case"(":case"{":case'"':W=null;break;default:break e}ue=Ri(ue,C,f)}if(qe.push(ue),Z.value!==",")break;if(!W)return ie(Z);oe()}while(!0);if(qe.length===1&&W===null)return Dn(C),w(y.callStatement(qe[0]));if(!W)return ie(Z);ye("=");var bn=[];do bn.push(gn(f));while(fe(","));return Dn(E),w(y.assignmentStatement(qe,bn))}function In(){qt();var f=Z.value;return m!==Z.type&&j("<name>",Z),oe(),w(y.identifier(f))}function Rr(f,C){var E=X();E.pushScope();var W=[];if(ye("("),!fe(")"))for(;;){if(m===Z.type){var ue=In();if(r.scope&&Sn(ue),W.push(ue),fe(","))continue}else T===Z.type?(E.allowVararg=!0,W.push(Hr(E))):j("<name> or '...'",Z);ye(")");break}var Fe=We(E);return E.popScope(),ye("end"),r.scope&&Ue(),C=C||!1,w(y.functionStatement(f,W,C,Fe))}function cs(){var f,C,E;for(fn&&(E=Yn()),f=In(),r.scope&&(Qe(f,Mn(f.name)),Le());fe(".");)Dn(E),C=In(),f=w(y.memberExpression(f,".",C));return fe(":")&&(Dn(E),C=In(),f=w(y.memberExpression(f,":",C)),r.scope&&Cn("self")),f}function Ai(f){for(var C=[],E,W;;){if(qt(),S===Z.type&&fe("["))E=gn(f),ye("]"),ye("="),W=gn(f),C.push(w(y.tableKey(E,W)));else if(m===Z.type)He.value==="="?(E=In(),oe(),W=gn(f),C.push(w(y.tableKeyString(E,W)))):(W=gn(f),C.push(w(y.tableValue(W))));else{if((W=Jo(f))==null){mn.pop();break}C.push(w(y.tableValue(W)))}if(",;".indexOf(Z.value)>=0){oe();continue}break}return ye("}"),w(y.tableConstructorExpression(C))}function Jo(f){var C=Dr(0,f);return C}function gn(f){var C=Jo(f);if(C==null)j("<expression>",Z);else return C}function ds(f){var C=f.charCodeAt(0),E=f.length;if(E===1)switch(C){case 94:return 12;case 42:case 47:case 37:return 10;case 43:case 45:return 9;case 38:return 6;case 126:return 5;case 124:return 4;case 60:case 62:return 3}else if(E===2)switch(C){case 47:return 10;case 46:return 8;case 60:case 62:return f==="<<"||f===">>"?7:3;case 61:case 126:return 3;case 111:return 1}else if(C===97&&f==="and")return 2;return 0}function Dr(f,C){var E=Z.value,W,ue;if(fn&&(ue=Yn()),rt(Z)){qt(),oe();var Fe=Dr(10,C);Fe==null&&j("<expression>",Z),W=w(y.unaryExpression(E,Fe))}if(W==null&&(W=Hr(C),W==null&&(W=us(C))),W==null)return null;for(var qe;E=Z.value,qe=S===Z.type||v===Z.type?ds(E):0,!(qe===0||qe<=f);){(E==="^"||E==="..")&&--qe,oe();var bn=Dr(qe,C);bn==null&&j("<expression>",Z),fn&&mn.push(ue),W=w(y.binaryExpression(E,W,bn))}return W}function Ri(f,C,E){var W,ue;if(S===Z.type)switch(Z.value){case"[":return Dn(C),oe(),W=gn(E),ye("]"),w(y.indexExpression(f,W));case".":return Dn(C),oe(),ue=In(),w(y.memberExpression(f,".",ue));case":":return Dn(C),oe(),ue=In(),f=w(y.memberExpression(f,":",ue)),Dn(C),Ir(f,E);case"(":case"{":return Dn(C),Ir(f,E)}else if(h===Z.type)return Dn(C),Ir(f,E);return null}function us(f){var C,E,W;if(fn&&(W=Yn()),m===Z.type)E=Z.value,C=In(),r.scope&&Qe(C,Mn(E));else if(fe("("))C=gn(f),ye(")");else return null;for(;;){var ue=Ri(C,W,f);if(ue===null)break;C=ue}return C}function Ir(f,C){if(S===Z.type)switch(Z.value){case"(":a.emptyStatement||Z.line!==Pe.line&&M(null,R.ambiguousSyntax,Z.value),oe();var E=[],W=Jo(C);for(W!=null&&E.push(W);fe(",");)W=gn(C),E.push(W);return ye(")"),w(y.callExpression(f,E));case"{":qt(),oe();var ue=Ai(C);return w(y.tableCallExpression(f,ue))}else if(h===Z.type)return w(y.stringCallExpression(f,Hr(C)));j("function arguments",Z)}function Hr(f){var C=h|g|_|k|T,E=Z.value,W=Z.type,ue;if(fn&&(ue=Yn()),W===T&&!f.allowVararg&&M(Z,R.cannotUseVararg,Z.value),W&C){Dn(ue);var Fe=o.slice(Z.range[0],Z.range[1]);return oe(),w(y.literal(W,E,Fe))}else{if(v===W&&E==="function")return Dn(ue),oe(),r.scope&&Le(),Rr(null);if(fe("{"))return Dn(ue),Ai(f)}}t.parse=fs;var Di={"5.1":{},"5.2":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,relaxedBreak:!0},"5.3":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,bitwiseOperators:!0,integerDivision:!0,relaxedBreak:!0},LuaJIT:{labels:!0,contextualGoto:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,imaginaryNumbers:!0,integerSuffixes:!0}};function fs(f,C){if(typeof C>"u"&&typeof f=="object"&&(C=f,f=void 0),C||(C={}),o=f||"",r=te({},l,C),$=0,Oe=1,Se=0,i=o.length,Y=[[]],pe=0,ke=[],mn=[],!Object.prototype.hasOwnProperty.call(Di,r.luaVersion))throw new Error(z("Lua version '%1' not supported",r.luaVersion));if(a=te({},Di[r.luaVersion]),r.extendedIdentifiers!==void 0&&(a.extendedIdentifiers=!!r.extendedIdentifiers),!Object.prototype.hasOwnProperty.call(p,r.encodingMode))throw new Error(z("Encoding mode '%1' not supported",r.encodingMode));return s=p[r.encodingMode],r.comments&&(Pn=[]),r.wait?t:Hi()}t.write=Ii;function Ii(f){return o+=String(f),i=o.length,t}t.end=Hi;function Hi(f){typeof f<"u"&&Ii(f),o&&o.substr(0,2)==="#!"&&(o=o.replace(/^.*/,function(E){return E.replace(/./g," ")})),i=o.length,fn=r.locations||r.ranges,He=_e();var C=Te();if(r.comments&&(C.comments=Pn),r.scope&&(C.globals=ke),mn.length>0)throw new Error("Location tracking failed. This is most likely a bug in luaparse");return C}})})(XI,Sa);const JI=(()=>{const e=K();function n(){e.value=screen.width<640}return n(),window.addEventListener("resize",n),e})();function YI(e,n,t){const o=e.matchAll(n);return Array.from(o).forEach(r=>{const i=t(r);e=e.replace(r[0],i)}),e}class QI{constructor(n){hs(this,"variables",{FNNS:!1,CHAR:{mino:{Z:`<i class="${en}">&#xf0040;</i>`,S:`<i class="${en}">&#xf0041;</i>`,J:`<i class="${en}">&#xf0042;</i>`,L:`<i class="${en}">&#xf0043;</i>`,T:`<i class="${en}">&#xf0044;</i>`,O:`<i class="${en}">&#xf0045;</i>`,I:`<i class="${en}">&#xf0046;</i>`,Z5:`<i class="${en}">&#xf0047;</i>`,S5:`<i class="${en}">&#xf0048;</i>`,P:`<i class="${en}">&#xf0049;</i>`,Q:`<i class="${en}">&#xf004a;</i>`,F:`<i class="${en}">&#xf004b;</i>`,E:`<i class="${en}">&#xf004c;</i>`,T5:`<i class="${en}">&#xf004d;</i>`,U:`<i class="${en}">&#xf004e;</i>`,V:`<i class="${en}">&#xf004f;</i>`,W:`<i class="${en}">&#xf0050;</i>`,X:`<i class="${en}">&#xf0051;</i>`,J5:`<i class="${en}">&#xf0052;</i>`,L5:`<i class="${en}">&#xf0053;</i>`,R:`<i class="${en}">&#xf0054;</i>`,Y:`<i class="${en}">&#xf0055;</i>`,N:`<i class="${en}">&#xf0056;</i>`,H:`<i class="${en}">&#xf0057;</i>`,I5:`<i class="${en}">&#xf0058;</i>`,I3:`<i class="${en}">&#xf0059;</i>`,C:`<i class="${en}">&#xf005a;</i>`,I2:`<i class="${en}">&#xf005b;</i>`,O1:`<i class="${en}">&#xf005c;</i>`}}});hs(this,"_items",new Array);this.code=n;const t=this;Sa.parse(n).body.forEach(r=>{t.processStatement(r)})}get items(){const n=this;return this._items.map(t=>{var o;return{title:n.processRaw(t[0],!1),tags:((o=n.processRaw(t[1],!1))==null?void 0:o.split(" "))??[],category:n.processRaw(t[2],!1),content:n.processRaw(t[3],!1),link:n.processRaw(t[4],!1)}})}processRaw(n,t=!0){if(!n)return null;let o=YI(n.slice(1,-1),/\\(\d+)/g,r=>String.fromCharCode(parseInt(r[1])));return t&&(o[0]!=='"'&&(o='"'+o),o[o.length-1]!=='"'&&(o=o+'"')),o}processStatement(n){const t=this;switch(n.type){case"LocalStatement":n.variables.forEach(function({name:o},r){const i=n.init[r];t.variables[o]=t.processRaw(i.raw)});break;case"ReturnStatement":n.arguments.forEach(o=>{this.processExpression(o)});break;default:throw new Error(`Unknown statement: ${n.type}`)}}processExpression(n,t={}){const o=this,r=new Array;switch(n.type){case"TableConstructorExpression":return n.fields.forEach(s=>{r.push(o.processExpression(s.value))}),r.length>0&&r.length<=5&&this._items.push(r),r;case"BinaryExpression":switch(n.operator){case"..":r.push(o.processExpression(n.left,{rawAddQuote:!1})),r.push(o.processExpression(n.right,{rawAddQuote:!1}));break;default:throw new Error(`Unknown operator: ${n.operator}`)}return r.join("");case"MemberExpression":r.push(o.processExpression(n.base,{forceReturnVariableName:!0})),r.push(n.indexer),r.push(o.processExpression(n.identifier,{forceReturnVariableName:!0}));const i=r.flat().join(""),a=Uh(o.variables,i);return typeof a!="string"?i:a;case"LogicalExpression":switch(r.push(o.processExpression(n.left)),n.operator){case"and":r.push("&&");break;case"or":r.push("||");break;default:throw new Error("Unknown operator")}return r.push(o.processExpression(n.right)),r.join(" ");case"Identifier":return!o.variables[n.name]||t.forceReturnVariableName?n.name:o.variables[n.name];case"StringLiteral":return o.processRaw(n.raw,t.rawAddQuote??!0);default:throw new Error(`Unknown expression: ${n.type}`)}}}var Lu;const $r=typeof window<"u",e6=e=>typeof e=="string",n6=()=>{};$r&&((Lu=window==null?void 0:window.navigator)!=null&&Lu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ic(e){return typeof e=="function"?e():Ee(e)}function t6(e){return e}function Jg(e){return Qu()?(ef(e),!0):!1}function o6(e,n=!0){Nt()?Kn(e):n?e():Gn(e)}function r6(e,n,t={}){const{immediate:o=!0}=t,r=K(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function s(){r.value=!1,a()}function l(...c){a(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...c)},Ic(n))}return o&&(r.value=!0,$r&&l()),Jg(s),{isPending:r,start:l,stop:s}}function i6(e){var n;const t=Ic(e);return(n=t==null?void 0:t.$el)!=null?n:t}const a6=$r?window:void 0;$r&&window.document;const s6=$r?window.navigator:void 0;$r&&window.location;function l6(...e){let n,t,o,r;if(e6(e[0])||Array.isArray(e[0])?([t,o,r]=e,n=a6):[n,t,o,r]=e,!n)return n6;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const i=[],a=()=>{i.forEach(d=>d()),i.length=0},s=(d,u,p)=>(d.addEventListener(u,p,r),()=>d.removeEventListener(u,p,r)),l=pn(()=>i6(n),d=>{a(),d&&i.push(...t.flatMap(u=>o.map(p=>s(d,u,p))))},{immediate:!0,flush:"post"}),c=()=>{l(),a()};return Jg(c),c}function c6(e,n=!1){const t=K(),o=()=>t.value=Boolean(e());return o(),o6(o,n),t}function d6(e={}){const{navigator:n=s6,read:t=!1,source:o,copiedDuring:r=1500,legacy:i=!1}=e,a=["copy","cut"],s=c6(()=>n&&"clipboard"in n),l=G(()=>s.value||i),c=K(""),d=K(!1),u=r6(()=>d.value=!1,r);function p(){s.value?n.clipboard.readText().then(m=>{c.value=m}):c.value=v()}if(l.value&&t)for(const m of a)l6(m,p);async function b(m=Ic(o)){l.value&&m!=null&&(s.value?await n.clipboard.writeText(m):h(m),c.value=m,d.value=!0,u.start())}function h(m){const g=document.createElement("textarea");g.value=m??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function v(){var m,g,S;return(S=(g=(m=document==null?void 0:document.getSelection)==null?void 0:m.call(document))==null?void 0:g.toString())!=null?S:""}return{isSupported:l,text:c,copied:d,copy:b}}const Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kl="__vueuse_ssr_handlers__";Tl[kl]=Tl[kl]||{};Tl[kl];var Ou;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ou||(Ou={}));var u6=Object.defineProperty,Bu=Object.getOwnPropertySymbols,f6=Object.prototype.hasOwnProperty,h6=Object.prototype.propertyIsEnumerable,Fu=(e,n,t)=>n in e?u6(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p6=(e,n)=>{for(var t in n||(n={}))f6.call(n,t)&&Fu(e,t,n[t]);if(Bu)for(var t of Bu(n))h6.call(n,t)&&Fu(e,t,n[t]);return e};const m6={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};p6({linear:t6},m6);const Yg=Xg("app",{state:()=>({theme:zy().value,lang:"zh"}),getters:{themeRef(e){switch(e.theme){case"light":return bI;case"dark":return gI;default:return null}},dictItems(e){return new QI(qI[e.lang]).items},translations(e){return ZI[e.lang]},langOptions(e){return[{label:"English",key:"en",disabled:e.lang==="en"},{label:"日本語",key:"ja",disabled:e.lang==="ja"},{label:"简体中文",key:"zh",disabled:e.lang==="zh"}]}},actions:{switchTheme(){this.theme=this.theme==="light"?"dark":"light"},handleLangUpdate(e){const n=Qg();this.lang=e,n.removeCurrent()}},persist:{enabled:!0}}),Qg=Xg("shared",{state:()=>({search:K(),current:K()}),getters:{showing(e){return!!e.current}},actions:{setSearch(e){this.search=e,this.removeCurrent()},setCurrent(e){this.current=e},removeCurrent(){this.current=void 0},async copyCurrentDict(){var i,a;const e=Yg(),{message:n,unmount:t}=uI(["message"],{configProviderProps:{theme:e.themeRef}});if(!this.current){n.error("?",{onAfterLeave(){t()}});return}const{copy:o,isSupported:r}=d6({source:[(i=this.current)==null?void 0:i.title,"",(a=this.current)==null?void 0:a.content,"",`==${e.translations.copy_from}: ${e.translations.title}==`].join(`\r
`),legacy:!0});if(!r){n.error(e.translations.error,{onAfterLeave(){t()}});return}await o(),n.success(e.translations.copied,{onAfterLeave(){t()}})}}}),g6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},b6=St("path",{opacity:".3",d:"M8 7h11v14H8z",fill:"currentColor"},null,-1),v6=St("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",fill:"currentColor"},null,-1),y6=[b6,v6],x6=me({name:"ContentCopyTwotone",render:function(n,t){return hn(),Ot("svg",g6,y6)}}),C6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},w6=St("path",{opacity:".3",d:"M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56c-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4a7.987 7.987 0 0 0 4.33 3.56A15.65 15.65 0 0 1 8.03 16H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8a8.03 8.03 0 0 0-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4A8.03 8.03 0 0 0 18.92 16h-2.95a15.65 15.65 0 0 1-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z",fill:"currentColor"},null,-1),S6=St("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",fill:"currentColor"},null,-1),T6=[w6,S6],k6=me({name:"LanguageTwotone",render:function(n,t){return hn(),Ot("svg",C6,T6)}}),P6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},$6=St("path",{d:"M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A6=[$6],R6=me({name:"Moon",render:function(n,t){return hn(),Ot("svg",P6,A6)}}),D6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},I6=St("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[St("circle",{cx:"12",cy:"12",r:"4"}),St("path",{d:"M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"})],-1),H6=[I6],_6=me({name:"Sun",render:function(n,t){return hn(),Ot("svg",D6,H6)}}),E6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},z6=St("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zM4.02 16.394l1.338.446L7 19.303v1.283a1 1 0 0 0 .293.707L10 24v2.377a11.994 11.994 0 0 1-5.98-9.983zM16 28a11.968 11.968 0 0 1-2.572-.285L14 26l1.805-4.512a1 1 0 0 0-.097-.926l-1.411-2.117a1 1 0 0 0-.832-.445h-4.93l-1.248-1.873L9.414 14H11v2h2v-2.734l3.868-6.77l-1.736-.992L14.277 7h-2.742L10.45 5.371A11.861 11.861 0 0 1 20 4.7V8a1 1 0 0 0 1 1h1.465a1 1 0 0 0 .832-.445l.877-1.316A12.033 12.033 0 0 1 26.894 11H22.82a1 1 0 0 0-.98.804l-.723 4.47a1 1 0 0 0 .54 1.055L25 19l.685 4.056A11.98 11.98 0 0 1 16 28z",fill:"currentColor"},null,-1),M6=[z6],L6=me({name:"EarthFilled",render:function(n,t){return hn(),Ot("svg",E6,M6)}}),O6=me({__name:"App",setup(e){const n=Yg(),t=Qg(),o=G(()=>w2(n.dictItems.map(i=>(i.content!==null&&(i.content=i.content.replaceAll("\\t","	").replaceAll("\\n",`
`)),i)).filter(i=>{var a,s,l,c;return t.search?[!!((s=i.title)!=null&&s.toLowerCase().match((a=t.search)==null?void 0:a.toLowerCase())),!!((c=i.tags)!=null&&c.map(d=>d.toLowerCase()).includes((l=t.search)==null?void 0:l.toLowerCase()))].includes(!0):!0}),"category")),r=me({setup(i){var l;const a=/^tetris/ig,s=(l=i.content)==null?void 0:l.match(a);return()=>{var d;if(!s)return x("span",null,i.content??"?");const c=(d=i.content)==null?void 0:d.replace(a,"");return x("div",null,[x(wa,null,{trigger:()=>x("span",{class:"font-[proportional] not-italic text-xl mr-1",innerHTML:"&#xf0015;"}),default:()=>s[0]}),x("span",null,c)])}}});return(i,a)=>{const s=_m,l=xl,c=h3,d=fR,u=oI,p=a$,b=CR,h=J3,v=sI,m=YA,g=AR,S=MR,_=rI,k=x5,T=S5,R=y5,y=pm;return hn(),et(y,{theme:Ee(n).themeRef,class:"h-full"},{default:Ie(()=>[we(R,{class:"h-full","native-scrollbar":""},{default:Ie(()=>[we(k,{class:"pb-16 h-full mx-2","native-scrollbar":""},{default:Ie(()=>[we(d,{class:"mt-2",justify:"space-between"},{default:Ie(()=>[we(l,{onClick:Ee(n).switchTheme},{icon:Ie(()=>[we(s,{component:Ee(n).theme==="light"?Ee(R6):Ee(_6)},null,8,["component"])]),_:1},8,["onClick"]),we(c,{options:Ee(n).langOptions,animated:"",trigger:"click",onSelect:Ee(n).handleLangUpdate},{default:Ie(()=>[we(l,null,{icon:Ie(()=>[we(s,{component:Ee(k6)},null,8,["component"])]),_:1})]),_:1},8,["options","onSelect"])]),_:1}),we(d,{class:"sm:w-1/3 mx-auto mt-20",vertical:""},{default:Ie(()=>[we(b,{class:"text-center"},{default:Ie(()=>[we(u,null,{default:Ie(()=>[Nn(_r(Ee(n).translations.title),1)]),_:1}),Ee(t).showing?(hn(),et(d,{key:1,justify:"center"},{default:Ie(()=>[we(l,{onClick:Ee(t).removeCurrent},{default:Ie(()=>[Nn("返回")]),_:1},8,["onClick"])]),_:1})):(hn(),et(p,{key:0,value:Ee(t).search,"onUpdate:value":a[0]||(a[0]=w=>Ee(t).search=w),placeholder:Ee(n).translations.search,clearable:""},null,8,["value","placeholder"]))]),_:1}),we(h)]),_:1}),we(d,{size:"large",vertical:""},{default:Ie(()=>[Ee(t).showing?(hn(),et(b,{key:1,class:"sm:w-1/3 mx-auto"},{default:Ie(()=>[we(d,{vertical:""},{default:Ie(()=>{var w;return[we(_,null,{default:Ie(()=>{var I;return[we(Ee(r),{content:(I=Ee(t).current)==null?void 0:I.title},null,8,["content"])]}),_:1}),we(v,{class:"whitespace-pre-wrap",innerHTML:(w=Ee(t).current)==null?void 0:w.content},null,8,["innerHTML"]),we(d,{class:"mt-10 items-end",justify:"space-between"},{default:Ie(()=>[we(d,{size:"small"},{default:Ie(()=>{var I;return[we(v,null,{default:Ie(()=>[Nn(_r(Ee(n).translations.tags)+": ",1)]),_:1}),(hn(!0),Ot(Je,null,Bi((I=Ee(t).current)==null?void 0:I.tags,H=>(hn(),et(l,{text:"",type:"info",onClick:U=>Ee(t).setSearch(H)},{default:Ie(()=>[Nn(_r(H),1)]),_:2},1032,["onClick"]))),256))]}),_:1}),we(d,null,{default:Ie(()=>{var I,H;return[(I=Ee(t).current)!=null&&I.link?(hn(),et(l,{key:0,href:(H=Ee(t).current)==null?void 0:H.link,tag:"a"},{icon:Ie(()=>[we(s,{component:Ee(L6)},null,8,["component"])]),_:1},8,["href"])):Zv("",!0),we(l,{onClick:Ee(t).copyCurrentDict},{icon:Ie(()=>[we(s,{component:Ee(x6)},null,8,["component"])]),_:1},8,["onClick"])]}),_:1})]),_:1})]}),_:1})]),_:1})):(hn(),et(d,{key:0,vertical:""},{default:Ie(()=>[(hn(!0),Ot(Je,null,Bi(Ee(o),(w,I)=>(hn(),et(d,{class:"text-center",vertical:""},{default:Ie(()=>[we(v,{style:Ta({color:Ee(js)[I]}),class:"font-bold text-2xl",type:"info"},{default:Ie(()=>[Nn(_r(I),1)]),_:2},1032,["style"]),Ee(JI)?(hn(),et(S,{key:1,cols:3,"x-gap":10,"y-gap":10,class:"text-center"},{default:Ie(()=>[(hn(!0),Ot(Je,null,Bi(w,H=>(hn(),et(g,null,{default:Ie(()=>[we(l,{color:Ee(js)[I],class:"w-full",onClick:U=>Ee(t).setCurrent(H)},{default:Ie(()=>[we(Ee(wa),null,{trigger:Ie(()=>[we(m,null,{default:Ie(()=>[we(Ee(r),{content:H==null?void 0:H.title},null,8,["content"])]),_:2},1024)]),default:Ie(()=>[Nn(" "+_r(H.title),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:2},1024))),256))]),_:2},1024)):(hn(),et(d,{key:0,justify:"center"},{default:Ie(()=>[(hn(!0),Ot(Je,null,Bi(w,H=>(hn(),et(l,{color:Ee(js)[I],size:"small",onClick:U=>Ee(t).setCurrent(H)},{default:Ie(()=>[we(Ee(r),{content:H==null?void 0:H.title},null,8,["content"])]),_:2},1032,["color","onClick"]))),256))]),_:2},1024))]),_:2},1024))),256))]),_:1}))]),_:1})]),_:1}),we(T,{class:"py-2",position:"absolute"},{default:Ie(()=>[we(d,{size:0,justify:"center"},{default:Ie(()=>[we(b,null,{default:Ie(()=>[we(v,null,{default:Ie(()=>[Nn("制作: ")]),_:1}),we(l,{href:"https://zhazha120.cn",tag:"a",text:"",type:"primary"},{default:Ie(()=>[Nn("渣渣120")]),_:1})]),_:1}),we(h,{vertical:""}),we(l,{href:"https://github.com/26F-Studio/techmino-online-dict",tag:"a",text:"",type:"primary"},{default:Ie(()=>[Nn(" Github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])}}}),B6=(e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t},F6=B6(O6,[["__scopeId","data-v-af2488f3"]]),Ns=document.createElement("div"),Wu=Xf({render:()=>x(F6)}),ju=yI(),Nu=(e,n)=>{const t=e.storage||sessionStorage,o=e.key||n.$id;if(e.paths){const r=e.paths.reduce((i,a)=>(i[a]=n.$state[a],i),{});t.setItem(o,JSON.stringify(r))}else t.setItem(o,JSON.stringify(n.$state))};var W6=({options:e,store:n})=>{var t,o,r,i;if((t=e.persist)!=null&&t.enabled){const a=[{key:n.$id,storage:sessionStorage}],s=(r=(o=e.persist)==null?void 0:o.strategies)!=null&&r.length?(i=e.persist)==null?void 0:i.strategies:a;s.forEach(l=>{const c=l.storage||sessionStorage,d=l.key||n.$id,u=c.getItem(d);u&&(n.$patch(JSON.parse(u)),Nu(l,n))}),n.$subscribe(()=>{s.forEach(l=>{Nu(l,n)})})}};window.addEventListener("load",()=>{Ns.id="app",ju.use(W6),Wu.use(ju),Wu.mount(Ns),document.body.appendChild(Ns)})});export default j6();
