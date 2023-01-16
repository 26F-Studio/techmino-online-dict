var gb=Object.defineProperty;var bb=(e,n,t)=>n in e?gb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var vb=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var gs=(e,n,t)=>(bb(e,typeof n!="symbol"?n+"":n,t),t);var q6=vb((at,st)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Il(e,n){const t=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)t[o[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Pa(e){if($e(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],r=xn(o)?wb(o):Pa(o);if(r)for(const i in r)n[i]=r[i]}return n}else{if(xn(e))return e;if(cn(e))return e}}const yb=/;(?![^(]*\))/g,xb=/:([^]+)/,Cb=/\/\*.*?\*\//gs;function wb(e){const n={};return e.replace(Cb,"").split(yb).forEach(t=>{if(t){const o=t.split(xb);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Hl(e){let n="";if(xn(e))n=e;else if($e(e))for(let t=0;t<e.length;t++){const o=Hl(e[t]);o&&(n+=o+" ")}else if(cn(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Sb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tb=Il(Sb);function Xu(e){return!!e||e===""}const Er=e=>xn(e)?e:e==null?"":$e(e)||cn(e)&&(e.toString===ef||!_e(e.toString))?JSON.stringify(e,Ju,2):String(e),Ju=(e,n)=>n&&n.__v_isRef?Ju(e,n.value):cr(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,r])=>(t[`${o} =>`]=r,t),{})}:Yu(n)?{[`Set(${n.size})`]:[...n.values()]}:cn(n)&&!$e(n)&&!nf(n)?String(n):n,ln={},lr=[],wt=()=>{},kb=()=>!1,Pb=/^on[^a-z]/,$a=e=>Pb.test(e),_l=e=>e.startsWith("onUpdate:"),Rn=Object.assign,El=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},$b=Object.prototype.hasOwnProperty,Ve=(e,n)=>$b.call(e,n),$e=Array.isArray,cr=e=>Aa(e)==="[object Map]",Yu=e=>Aa(e)==="[object Set]",_e=e=>typeof e=="function",xn=e=>typeof e=="string",zl=e=>typeof e=="symbol",cn=e=>e!==null&&typeof e=="object",Qu=e=>cn(e)&&_e(e.then)&&_e(e.catch),ef=Object.prototype.toString,Aa=e=>ef.call(e),Ab=e=>Aa(e).slice(8,-1),nf=e=>Aa(e)==="[object Object]",Ml=e=>xn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ra=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ra=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Rb=/-(\w)/g,It=Ra(e=>e.replace(Rb,(n,t)=>t?t.toUpperCase():"")),Db=/\B([A-Z])/g,br=Ra(e=>e.replace(Db,"-$1").toLowerCase()),Da=Ra(e=>e.charAt(0).toUpperCase()+e.slice(1)),bs=Ra(e=>e?`on${Da(e)}`:""),ti=(e,n)=>!Object.is(e,n),vs=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ca=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Ll=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Lc;const Ib=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let it;class tf{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=it,!n&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}run(n){if(this.active){const t=it;try{return it=this,n()}finally{it=t}}}on(){it=this}off(){it=this.parent}stop(n){if(this.active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function of(e){return new tf(e)}function Hb(e,n=it){n&&n.active&&n.effects.push(e)}function rf(){return it}function af(e){it&&it.cleanups.push(e)}const Ol=e=>{const n=new Set(e);return n.w=0,n.n=0,n},sf=e=>(e.w&ao)>0,lf=e=>(e.n&ao)>0,_b=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=ao},Eb=e=>{const{deps:n}=e;if(n.length){let t=0;for(let o=0;o<n.length;o++){const r=n[o];sf(r)&&!lf(r)?r.delete(e):n[t++]=r,r.w&=~ao,r.n&=~ao}n.length=t}},Zs=new WeakMap;let Gr=0,ao=1;const Xs=30;let xt;const Mo=Symbol(""),Js=Symbol("");class Bl{constructor(n,t=null,o){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Hb(this,o)}run(){if(!this.active)return this.fn();let n=xt,t=oo;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=xt,xt=this,oo=!0,ao=1<<++Gr,Gr<=Xs?_b(this):Oc(this),this.fn()}finally{Gr<=Xs&&Eb(this),ao=1<<--Gr,xt=this.parent,oo=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(Oc(this),this.onStop&&this.onStop(),this.active=!1)}}function Oc(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let oo=!0;const cf=[];function vr(){cf.push(oo),oo=!1}function yr(){const e=cf.pop();oo=e===void 0?!0:e}function lt(e,n,t){if(oo&&xt){let o=Zs.get(e);o||Zs.set(e,o=new Map);let r=o.get(t);r||o.set(t,r=Ol()),df(r)}}function df(e,n){let t=!1;Gr<=Xs?lf(e)||(e.n|=ao,t=!sf(e)):t=!e.has(xt),t&&(e.add(xt),xt.deps.push(e))}function Ft(e,n,t,o,r,i){const a=Zs.get(e);if(!a)return;let s=[];if(n==="clear")s=[...a.values()];else if(t==="length"&&$e(e)){const l=Ll(o);a.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(t!==void 0&&s.push(a.get(t)),n){case"add":$e(e)?Ml(t)&&s.push(a.get("length")):(s.push(a.get(Mo)),cr(e)&&s.push(a.get(Js)));break;case"delete":$e(e)||(s.push(a.get(Mo)),cr(e)&&s.push(a.get(Js)));break;case"set":cr(e)&&s.push(a.get(Mo));break}if(s.length===1)s[0]&&Ys(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ys(Ol(l))}}function Ys(e,n){const t=$e(e)?e:[...e];for(const o of t)o.computed&&Bc(o);for(const o of t)o.computed||Bc(o)}function Bc(e,n){(e!==xt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const zb=Il("__proto__,__v_isRef,__isVue"),uf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zl)),Mb=Fl(),Lb=Fl(!1,!0),Ob=Fl(!0),Fc=Bb();function Bb(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const o=Ke(this);for(let i=0,a=this.length;i<a;i++)lt(o,"get",i+"");const r=o[n](...t);return r===-1||r===!1?o[n](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){vr();const o=Ke(this)[n].apply(this,t);return yr(),o}}),e}function Fl(e=!1,n=!1){return function(o,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&i===(e?n?nv:gf:n?mf:pf).get(o))return o;const a=$e(o);if(!e&&a&&Ve(Fc,r))return Reflect.get(Fc,r,i);const s=Reflect.get(o,r,i);return(zl(r)?uf.has(r):zb(r))||(e||lt(o,"get",r),n)?s:yn(s)?a&&Ml(r)?s:s.value:cn(s)?e?mt(s):mo(s):s}}const Fb=ff(),Wb=ff(!0);function ff(e=!1){return function(t,o,r,i){let a=t[o];if(hr(a)&&yn(a)&&!yn(r))return!1;if(!e&&(!da(r)&&!hr(r)&&(a=Ke(a),r=Ke(r)),!$e(t)&&yn(a)&&!yn(r)))return a.value=r,!0;const s=$e(t)&&Ml(o)?Number(o)<t.length:Ve(t,o),l=Reflect.set(t,o,r,i);return t===Ke(i)&&(s?ti(r,a)&&Ft(t,"set",o,r):Ft(t,"add",o,r)),l}}function jb(e,n){const t=Ve(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&t&&Ft(e,"delete",n,void 0),o}function Nb(e,n){const t=Reflect.has(e,n);return(!zl(n)||!uf.has(n))&&lt(e,"has",n),t}function Gb(e){return lt(e,"iterate",$e(e)?"length":Mo),Reflect.ownKeys(e)}const hf={get:Mb,set:Fb,deleteProperty:jb,has:Nb,ownKeys:Gb},Vb={get:Ob,set(e,n){return!0},deleteProperty(e,n){return!0}},Kb=Rn({},hf,{get:Lb,set:Wb}),Wl=e=>e,Ia=e=>Reflect.getPrototypeOf(e);function Ei(e,n,t=!1,o=!1){e=e.__v_raw;const r=Ke(e),i=Ke(n);t||(n!==i&&lt(r,"get",n),lt(r,"get",i));const{has:a}=Ia(r),s=o?Wl:t?Gl:oi;if(a.call(r,n))return s(e.get(n));if(a.call(r,i))return s(e.get(i));e!==r&&e.get(n)}function zi(e,n=!1){const t=this.__v_raw,o=Ke(t),r=Ke(e);return n||(e!==r&&lt(o,"has",e),lt(o,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function Mi(e,n=!1){return e=e.__v_raw,!n&&lt(Ke(e),"iterate",Mo),Reflect.get(e,"size",e)}function Wc(e){e=Ke(e);const n=Ke(this);return Ia(n).has.call(n,e)||(n.add(e),Ft(n,"add",e,e)),this}function jc(e,n){n=Ke(n);const t=Ke(this),{has:o,get:r}=Ia(t);let i=o.call(t,e);i||(e=Ke(e),i=o.call(t,e));const a=r.call(t,e);return t.set(e,n),i?ti(n,a)&&Ft(t,"set",e,n):Ft(t,"add",e,n),this}function Nc(e){const n=Ke(this),{has:t,get:o}=Ia(n);let r=t.call(n,e);r||(e=Ke(e),r=t.call(n,e)),o&&o.call(n,e);const i=n.delete(e);return r&&Ft(n,"delete",e,void 0),i}function Gc(){const e=Ke(this),n=e.size!==0,t=e.clear();return n&&Ft(e,"clear",void 0,void 0),t}function Li(e,n){return function(o,r){const i=this,a=i.__v_raw,s=Ke(a),l=n?Wl:e?Gl:oi;return!e&&lt(s,"iterate",Mo),a.forEach((c,d)=>o.call(r,l(c),l(d),i))}}function Oi(e,n,t){return function(...o){const r=this.__v_raw,i=Ke(r),a=cr(i),s=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=r[e](...o),d=t?Wl:n?Gl:oi;return!n&&lt(i,"iterate",l?Js:Mo),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:s?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Xt(e){return function(...n){return e==="delete"?!1:this}}function Ub(){const e={get(i){return Ei(this,i)},get size(){return Mi(this)},has:zi,add:Wc,set:jc,delete:Nc,clear:Gc,forEach:Li(!1,!1)},n={get(i){return Ei(this,i,!1,!0)},get size(){return Mi(this)},has:zi,add:Wc,set:jc,delete:Nc,clear:Gc,forEach:Li(!1,!0)},t={get(i){return Ei(this,i,!0)},get size(){return Mi(this,!0)},has(i){return zi.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Li(!0,!1)},o={get(i){return Ei(this,i,!0,!0)},get size(){return Mi(this,!0)},has(i){return zi.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Li(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Oi(i,!1,!1),t[i]=Oi(i,!0,!1),n[i]=Oi(i,!1,!0),o[i]=Oi(i,!0,!0)}),[e,t,n,o]}const[qb,Zb,Xb,Jb]=Ub();function jl(e,n){const t=n?e?Jb:Xb:e?Zb:qb;return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Ve(t,r)&&r in o?t:o,r,i)}const Yb={get:jl(!1,!1)},Qb={get:jl(!1,!0)},ev={get:jl(!0,!1)},pf=new WeakMap,mf=new WeakMap,gf=new WeakMap,nv=new WeakMap;function tv(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ov(e){return e.__v_skip||!Object.isExtensible(e)?0:tv(Ab(e))}function mo(e){return hr(e)?e:Nl(e,!1,hf,Yb,pf)}function rv(e){return Nl(e,!1,Kb,Qb,mf)}function mt(e){return Nl(e,!0,Vb,ev,gf)}function Nl(e,n,t,o,r){if(!cn(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=ov(e);if(a===0)return e;const s=new Proxy(e,a===2?o:t);return r.set(e,s),s}function ro(e){return hr(e)?ro(e.__v_raw):!!(e&&e.__v_isReactive)}function hr(e){return!!(e&&e.__v_isReadonly)}function da(e){return!!(e&&e.__v_isShallow)}function bf(e){return ro(e)||hr(e)}function Ke(e){const n=e&&e.__v_raw;return n?Ke(n):e}function so(e){return ca(e,"__v_skip",!0),e}const oi=e=>cn(e)?mo(e):e,Gl=e=>cn(e)?mt(e):e;function vf(e){oo&&xt&&(e=Ke(e),df(e.dep||(e.dep=Ol())))}function yf(e,n){e=Ke(e),e.dep&&Ys(e.dep)}function yn(e){return!!(e&&e.__v_isRef===!0)}function K(e){return iv(e,!1)}function iv(e,n){return yn(e)?e:new av(e,n)}class av{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:Ke(n),this._value=t?n:oi(n)}get value(){return vf(this),this._value}set value(n){const t=this.__v_isShallow||da(n)||hr(n);n=t?n:Ke(n),ti(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:oi(n),yf(this))}}function Re(e){return yn(e)?e.value:e}const sv={get:(e,n,t)=>Re(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const r=e[n];return yn(r)&&!yn(t)?(r.value=t,!0):Reflect.set(e,n,t,o)}};function xf(e){return ro(e)?e:new Proxy(e,sv)}function lv(e){const n=$e(e)?new Array(e.length):{};for(const t in e)n[t]=Xe(e,t);return n}class cv{constructor(n,t,o){this._object=n,this._key=t,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function Xe(e,n,t){const o=e[n];return yn(o)?o:new cv(e,n,t)}var Cf;class dv{constructor(n,t,o,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Cf]=!1,this._dirty=!0,this.effect=new Bl(n,()=>{this._dirty||(this._dirty=!0,yf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const n=Ke(this);return vf(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Cf="__v_isReadonly";function uv(e,n,t=!1){let o,r;const i=_e(e);return i?(o=e,r=wt):(o=e.get,r=e.set),new dv(o,r,i||!r,t)}function io(e,n,t,o){let r;try{r=o?e(...o):e()}catch(i){Ha(i,n,t)}return r}function pt(e,n,t,o){if(_e(e)){const i=io(e,n,t,o);return i&&Qu(i)&&i.catch(a=>{Ha(a,n,t)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(pt(e[i],n,t,o));return r}function Ha(e,n,t,o=!0){const r=n?n.vnode:null;if(n){let i=n.parent;const a=n.proxy,s=t;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,s)===!1)return}i=i.parent}const l=n.appContext.config.errorHandler;if(l){io(l,null,10,[e,a,s]);return}}fv(e,t,r,o)}function fv(e,n,t,o=!0){console.error(e)}let ri=!1,Qs=!1;const jn=[];let Rt=0;const dr=[];let Ot=null,Ao=0;const wf=Promise.resolve();let Vl=null;function Vn(e){const n=Vl||wf;return e?n.then(this?e.bind(this):e):n}function hv(e){let n=Rt+1,t=jn.length;for(;n<t;){const o=n+t>>>1;ii(jn[o])<e?n=o+1:t=o}return n}function Kl(e){(!jn.length||!jn.includes(e,ri&&e.allowRecurse?Rt+1:Rt))&&(e.id==null?jn.push(e):jn.splice(hv(e.id),0,e),Sf())}function Sf(){!ri&&!Qs&&(Qs=!0,Vl=wf.then(kf))}function pv(e){const n=jn.indexOf(e);n>Rt&&jn.splice(n,1)}function mv(e){$e(e)?dr.push(...e):(!Ot||!Ot.includes(e,e.allowRecurse?Ao+1:Ao))&&dr.push(e),Sf()}function Vc(e,n=ri?Rt+1:0){for(;n<jn.length;n++){const t=jn[n];t&&t.pre&&(jn.splice(n,1),n--,t())}}function Tf(e){if(dr.length){const n=[...new Set(dr)];if(dr.length=0,Ot){Ot.push(...n);return}for(Ot=n,Ot.sort((t,o)=>ii(t)-ii(o)),Ao=0;Ao<Ot.length;Ao++)Ot[Ao]();Ot=null,Ao=0}}const ii=e=>e.id==null?1/0:e.id,gv=(e,n)=>{const t=ii(e)-ii(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function kf(e){Qs=!1,ri=!0,jn.sort(gv);const n=wt;try{for(Rt=0;Rt<jn.length;Rt++){const t=jn[Rt];t&&t.active!==!1&&io(t,null,14)}}finally{Rt=0,jn.length=0,Tf(),ri=!1,Vl=null,(jn.length||dr.length)&&kf()}}function bv(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||ln;let r=t;const i=n.startsWith("update:"),a=i&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:u,trim:p}=o[d]||ln;p&&(r=t.map(b=>xn(b)?b.trim():b)),u&&(r=t.map(Ll))}let s,l=o[s=bs(n)]||o[s=bs(It(n))];!l&&i&&(l=o[s=bs(br(n))]),l&&pt(l,e,6,r);const c=o[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,pt(c,e,6,r)}}function Pf(e,n,t=!1){const o=n.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let a={},s=!1;if(!_e(e)){const l=c=>{const d=Pf(c,n,!0);d&&(s=!0,Rn(a,d))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(cn(e)&&o.set(e,null),null):($e(i)?i.forEach(l=>a[l]=null):Rn(a,i),cn(e)&&o.set(e,a),a)}function _a(e,n){return!e||!$a(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ve(e,n[0].toLowerCase()+n.slice(1))||Ve(e,br(n))||Ve(e,n))}let Ln=null,$f=null;function ua(e){const n=Ln;return Ln=e,$f=e&&e.type.__scopeId||null,n}function He(e,n=Ln,t){if(!n||e._n)return e;const o=(...r)=>{o._d&&td(-1);const i=ua(n);let a;try{a=e(...r)}finally{ua(i),o._d&&td(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function ys(e){const{type:n,vnode:t,proxy:o,withProxy:r,props:i,propsOptions:[a],slots:s,attrs:l,emit:c,render:d,renderCache:u,data:p,setupState:b,ctx:h,inheritAttrs:y}=e;let m,g;const S=ua(e);try{if(t.shapeFlag&4){const k=r||o;m=At(d.call(k,k,u,i,b,p,h)),g=l}else{const k=n;m=At(k.length>1?k(i,{attrs:l,slots:s,emit:c}):k(i,null)),g=n.props?l:vv(l)}}catch(k){Xr.length=0,Ha(k,e,1),m=ke(Kn)}let I=m;if(g&&y!==!1){const k=Object.keys(g),{shapeFlag:T}=I;k.length&&T&7&&(a&&k.some(_l)&&(g=yv(g,a)),I=gt(I,g))}return t.dirs&&(I=gt(I),I.dirs=I.dirs?I.dirs.concat(t.dirs):t.dirs),t.transition&&(I.transition=t.transition),m=I,ua(S),m}const vv=e=>{let n;for(const t in e)(t==="class"||t==="style"||$a(t))&&((n||(n={}))[t]=e[t]);return n},yv=(e,n)=>{const t={};for(const o in e)(!_l(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function xv(e,n,t){const{props:o,children:r,component:i}=e,{props:a,children:s,patchFlag:l}=n,c=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return o?Kc(o,a,c):!!a;if(l&8){const d=n.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(a[p]!==o[p]&&!_a(c,p))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:o===a?!1:o?a?Kc(o,a,c):!0:!!a;return!1}function Kc(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(n[i]!==e[i]&&!_a(t,i))return!0}return!1}function Cv({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const wv=e=>e.__isSuspense;function Sv(e,n){n&&n.pendingBranch?$e(e)?n.effects.push(...e):n.effects.push(e):mv(e)}function Ye(e,n){if($n){let t=$n.provides;const o=$n.parent&&$n.parent.provides;o===t&&(t=$n.provides=Object.create(o)),t[e]=n}}function De(e,n,t=!1){const o=$n||Ln;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&_e(n)?n.call(o.proxy):n}}function lo(e,n){return Ul(e,null,n)}const Bi={};function pn(e,n,t){return Ul(e,n,t)}function Ul(e,n,{immediate:t,deep:o,flush:r,onTrack:i,onTrigger:a}=ln){const s=$n;let l,c=!1,d=!1;if(yn(e)?(l=()=>e.value,c=da(e)):ro(e)?(l=()=>e,o=!0):$e(e)?(d=!0,c=e.some(I=>ro(I)||da(I)),l=()=>e.map(I=>{if(yn(I))return I.value;if(ro(I))return Io(I);if(_e(I))return io(I,s,2)})):_e(e)?n?l=()=>io(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return u&&u(),pt(e,s,3,[p])}:l=wt,n&&o){const I=l;l=()=>Io(I())}let u,p=I=>{u=g.onStop=()=>{io(I,s,4)}},b;if(di)if(p=wt,n?t&&pt(n,s,3,[l(),d?[]:void 0,p]):l(),r==="sync"){const I=h0();b=I.__watcherHandles||(I.__watcherHandles=[])}else return wt;let h=d?new Array(e.length).fill(Bi):Bi;const y=()=>{if(g.active)if(n){const I=g.run();(o||c||(d?I.some((k,T)=>ti(k,h[T])):ti(I,h)))&&(u&&u(),pt(n,s,3,[I,h===Bi?void 0:d&&h[0]===Bi?[]:h,p]),h=I)}else g.run()};y.allowRecurse=!!n;let m;r==="sync"?m=y:r==="post"?m=()=>nt(y,s&&s.suspense):(y.pre=!0,s&&(y.id=s.uid),m=()=>Kl(y));const g=new Bl(l,m);n?t?y():h=g.run():r==="post"?nt(g.run.bind(g),s&&s.suspense):g.run();const S=()=>{g.stop(),s&&s.scope&&El(s.scope.effects,g)};return b&&b.push(S),S}function Tv(e,n,t){const o=this.proxy,r=xn(e)?e.includes(".")?Af(o,e):()=>o[e]:e.bind(o,o);let i;_e(n)?i=n:(i=n.handler,t=n);const a=$n;pr(this);const s=Ul(r,i.bind(o),t);return a?pr(a):Lo(),s}function Af(e,n){const t=n.split(".");return()=>{let o=e;for(let r=0;r<t.length&&o;r++)o=o[t[r]];return o}}function Io(e,n){if(!cn(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),yn(e))Io(e.value,n);else if($e(e))for(let t=0;t<e.length;t++)Io(e[t],n);else if(Yu(e)||cr(e))e.forEach(t=>{Io(t,n)});else if(nf(e))for(const t in e)Io(e[t],n);return e}function Rf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Un(()=>{e.isMounted=!0}),kn(()=>{e.isUnmounting=!0}),e}const ft=[Function,Array],kv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},setup(e,{slots:n}){const t=Gt(),o=Rf();let r;return()=>{const i=n.default&&ql(n.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const y of i)if(y.type!==Kn){a=y;break}}const s=Ke(e),{mode:l}=s;if(o.isLeaving)return xs(a);const c=Uc(a);if(!c)return xs(a);const d=ai(c,s,o,t);si(c,d);const u=t.subTree,p=u&&Uc(u);let b=!1;const{getTransitionKey:h}=c.type;if(h){const y=h();r===void 0?r=y:y!==r&&(r=y,b=!0)}if(p&&p.type!==Kn&&(!Ro(c,p)||b)){const y=ai(p,s,o,t);if(si(p,y),l==="out-in")return o.isLeaving=!0,y.afterLeave=()=>{o.isLeaving=!1,t.update.active!==!1&&t.update()},xs(a);l==="in-out"&&c.type!==Kn&&(y.delayLeave=(m,g,S)=>{const I=If(o,p);I[String(p.key)]=p,m._leaveCb=()=>{g(),m._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=S})}return a}}},Df=kv;function If(e,n){const{leavingVNodes:t}=e;let o=t.get(n.type);return o||(o=Object.create(null),t.set(n.type,o)),o}function ai(e,n,t,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:p,onAfterLeave:b,onLeaveCancelled:h,onBeforeAppear:y,onAppear:m,onAfterAppear:g,onAppearCancelled:S}=n,I=String(e.key),k=If(t,e),T=(w,H)=>{w&&pt(w,o,9,H)},A=(w,H)=>{const z=H[1];T(w,H),$e(w)?w.every(Y=>Y.length<=1)&&z():w.length<=1&&z()},v={mode:i,persisted:a,beforeEnter(w){let H=s;if(!t.isMounted)if(r)H=y||s;else return;w._leaveCb&&w._leaveCb(!0);const z=k[I];z&&Ro(e,z)&&z.el._leaveCb&&z.el._leaveCb(),T(H,[w])},enter(w){let H=l,z=c,Y=d;if(!t.isMounted)if(r)H=m||l,z=g||c,Y=S||d;else return;let E=!1;const te=w._enterCb=L=>{E||(E=!0,L?T(Y,[w]):T(z,[w]),v.delayedLeave&&v.delayedLeave(),w._enterCb=void 0)};H?A(H,[w,te]):te()},leave(w,H){const z=String(e.key);if(w._enterCb&&w._enterCb(!0),t.isUnmounting)return H();T(u,[w]);let Y=!1;const E=w._leaveCb=te=>{Y||(Y=!0,H(),te?T(h,[w]):T(b,[w]),w._leaveCb=void 0,k[z]===e&&delete k[z])};k[z]=e,p?A(p,[w,E]):E()},clone(w){return ai(w,n,t,o)}};return v}function xs(e){if(Ea(e))return e=gt(e),e.children=null,e}function Uc(e){return Ea(e)?e.children?e.children[0]:void 0:e}function si(e,n){e.shapeFlag&6&&e.component?si(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ql(e,n=!1,t){let o=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];const s=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Je?(a.patchFlag&128&&r++,o=o.concat(ql(a.children,n,s))):(n||a.type!==Kn)&&o.push(s!=null?gt(a,{key:s}):a)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function ge(e){return _e(e)?{setup:e,name:e.name}:e}const Ur=e=>!!e.type.__asyncLoader,Ea=e=>e.type.__isKeepAlive;function Hf(e,n){_f(e,"a",n)}function Zl(e,n){_f(e,"da",n)}function _f(e,n,t=$n){const o=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(za(n,o,t),t){let r=t.parent;for(;r&&r.parent;)Ea(r.parent.vnode)&&Pv(o,n,t,r),r=r.parent}}function Pv(e,n,t,o){const r=za(n,e,o,!0);zf(()=>{El(o[n],r)},t)}function za(e,n,t=$n,o=!1){if(t){const r=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...a)=>{if(t.isUnmounted)return;vr(),pr(t);const s=pt(n,t,e,a);return Lo(),yr(),s});return o?r.unshift(i):r.push(i),i}}const jt=e=>(n,t=$n)=>(!di||e==="sp")&&za(e,(...o)=>n(...o),t),Nt=jt("bm"),Un=jt("m"),$v=jt("bu"),Ef=jt("u"),kn=jt("bum"),zf=jt("um"),Av=jt("sp"),Rv=jt("rtg"),Dv=jt("rtc");function Iv(e,n=$n){za("ec",e,n)}function co(e,n){const t=Ln;if(t===null)return e;const o=Ba(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[a,s,l,c=ln]=n[i];a&&(_e(a)&&(a={mounted:a,updated:a}),a.deep&&Io(s),r.push({dir:a,instance:o,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function wo(e,n,t,o){const r=e.dirs,i=n&&n.dirs;for(let a=0;a<r.length;a++){const s=r[a];i&&(s.oldValue=i[a].value);let l=s.dir[o];l&&(vr(),pt(l,t,8,[e.el,s,e,n]),yr())}}const Mf="components",Lf=Symbol();function Cs(e){return xn(e)?Hv(Mf,e,!1)||e:e||Lf}function Hv(e,n,t=!0,o=!1){const r=Ln||$n;if(r){const i=r.type;if(e===Mf){const s=d0(i,!1);if(s&&(s===n||s===It(n)||s===Da(It(n))))return i}const a=qc(r[e]||i[e],n)||qc(r.appContext[e],n);return!a&&o?i:a}}function qc(e,n){return e&&(e[n]||e[It(n)]||e[Da(It(n))])}function Fi(e,n,t,o){let r;const i=t&&t[o];if($e(e)||xn(e)){r=new Array(e.length);for(let a=0,s=e.length;a<s;a++)r[a]=n(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=n(a+1,a,void 0,i&&i[a])}else if(cn(e))if(e[Symbol.iterator])r=Array.from(e,(a,s)=>n(a,s,void 0,i&&i[s]));else{const a=Object.keys(e);r=new Array(a.length);for(let s=0,l=a.length;s<l;s++){const c=a[s];r[s]=n(e[c],c,s,i&&i[s])}}else r=[];return t&&(t[o]=r),r}function _v(e,n,t={},o,r){if(Ln.isCE||Ln.parent&&Ur(Ln.parent)&&Ln.parent.isCE)return n!=="default"&&(t.name=n),ke("slot",t,o&&o());let i=e[n];i&&i._c&&(i._d=!1),rn();const a=i&&Of(i(t)),s=_n(Je,{key:t.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function Of(e){return e.some(n=>ci(n)?!(n.type===Kn||n.type===Je&&!Of(n.children)):!0)?e:null}const el=e=>e?Zf(e)?Ba(e)||e.proxy:el(e.parent):null,qr=Rn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>el(e.parent),$root:e=>el(e.root),$emit:e=>e.emit,$options:e=>Xl(e),$forceUpdate:e=>e.f||(e.f=()=>Kl(e.update)),$nextTick:e=>e.n||(e.n=Vn.bind(e.proxy)),$watch:e=>Tv.bind(e)}),ws=(e,n)=>e!==ln&&!e.__isScriptSetup&&Ve(e,n),Ev={get({_:e},n){const{ctx:t,setupState:o,data:r,props:i,accessCache:a,type:s,appContext:l}=e;let c;if(n[0]!=="$"){const b=a[n];if(b!==void 0)switch(b){case 1:return o[n];case 2:return r[n];case 4:return t[n];case 3:return i[n]}else{if(ws(o,n))return a[n]=1,o[n];if(r!==ln&&Ve(r,n))return a[n]=2,r[n];if((c=e.propsOptions[0])&&Ve(c,n))return a[n]=3,i[n];if(t!==ln&&Ve(t,n))return a[n]=4,t[n];nl&&(a[n]=0)}}const d=qr[n];let u,p;if(d)return n==="$attrs"&&lt(e,"get",n),d(e);if((u=s.__cssModules)&&(u=u[n]))return u;if(t!==ln&&Ve(t,n))return a[n]=4,t[n];if(p=l.config.globalProperties,Ve(p,n))return p[n]},set({_:e},n,t){const{data:o,setupState:r,ctx:i}=e;return ws(r,n)?(r[n]=t,!0):o!==ln&&Ve(o,n)?(o[n]=t,!0):Ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:r,propsOptions:i}},a){let s;return!!t[a]||e!==ln&&Ve(e,a)||ws(n,a)||(s=i[0])&&Ve(s,a)||Ve(o,a)||Ve(qr,a)||Ve(r.config.globalProperties,a)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Ve(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let nl=!0;function zv(e){const n=Xl(e),t=e.proxy,o=e.ctx;nl=!1,n.beforeCreate&&Zc(n.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:s,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:b,updated:h,activated:y,deactivated:m,beforeDestroy:g,beforeUnmount:S,destroyed:I,unmounted:k,render:T,renderTracked:A,renderTriggered:v,errorCaptured:w,serverPrefetch:H,expose:z,inheritAttrs:Y,components:E,directives:te,filters:L}=n;if(c&&Mv(c,o,null,e.appContext.config.unwrapInjectedRef),a)for(const j in a){const ie=a[j];_e(ie)&&(o[j]=ie.bind(t))}if(r){const j=r.call(t,t);cn(j)&&(e.data=mo(j))}if(nl=!0,i)for(const j in i){const ie=i[j],$=_e(ie)?ie.bind(t,t):_e(ie.get)?ie.get.bind(t,t):wt,q=!_e(ie)&&_e(ie.set)?ie.set.bind(t):wt,Pe=G({get:$,set:q});Object.defineProperty(o,j,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:Ee=>Pe.value=Ee})}if(s)for(const j in s)Bf(s[j],o,t,j);if(l){const j=_e(l)?l.call(t):l;Reflect.ownKeys(j).forEach(ie=>{Ye(ie,j[ie])})}d&&Zc(d,e,"c");function se(j,ie){$e(ie)?ie.forEach($=>j($.bind(t))):ie&&j(ie.bind(t))}if(se(Nt,u),se(Un,p),se($v,b),se(Ef,h),se(Hf,y),se(Zl,m),se(Iv,w),se(Dv,A),se(Rv,v),se(kn,S),se(zf,k),se(Av,H),$e(z))if(z.length){const j=e.exposed||(e.exposed={});z.forEach(ie=>{Object.defineProperty(j,ie,{get:()=>t[ie],set:$=>t[ie]=$})})}else e.exposed||(e.exposed={});T&&e.render===wt&&(e.render=T),Y!=null&&(e.inheritAttrs=Y),E&&(e.components=E),te&&(e.directives=te)}function Mv(e,n,t=wt,o=!1){$e(e)&&(e=tl(e));for(const r in e){const i=e[r];let a;cn(i)?"default"in i?a=De(i.from||r,i.default,!0):a=De(i.from||r):a=De(i),yn(a)&&o?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):n[r]=a}}function Zc(e,n,t){pt($e(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function Bf(e,n,t,o){const r=o.includes(".")?Af(t,o):()=>t[o];if(xn(e)){const i=n[e];_e(i)&&pn(r,i)}else if(_e(e))pn(r,e.bind(t));else if(cn(e))if($e(e))e.forEach(i=>Bf(i,n,t,o));else{const i=_e(e.handler)?e.handler.bind(t):n[e.handler];_e(i)&&pn(r,i,e)}}function Xl(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(n);let l;return s?l=s:!r.length&&!t&&!o?l=n:(l={},r.length&&r.forEach(c=>fa(l,c,a,!0)),fa(l,n,a)),cn(n)&&i.set(n,l),l}function fa(e,n,t,o=!1){const{mixins:r,extends:i}=n;i&&fa(e,i,t,!0),r&&r.forEach(a=>fa(e,a,t,!0));for(const a in n)if(!(o&&a==="expose")){const s=Lv[a]||t&&t[a];e[a]=s?s(e[a],n[a]):n[a]}return e}const Lv={data:Xc,props:Po,emits:Po,methods:Po,computed:Po,beforeCreate:Nn,created:Nn,beforeMount:Nn,mounted:Nn,beforeUpdate:Nn,updated:Nn,beforeDestroy:Nn,beforeUnmount:Nn,destroyed:Nn,unmounted:Nn,activated:Nn,deactivated:Nn,errorCaptured:Nn,serverPrefetch:Nn,components:Po,directives:Po,watch:Bv,provide:Xc,inject:Ov};function Xc(e,n){return n?e?function(){return Rn(_e(e)?e.call(this,this):e,_e(n)?n.call(this,this):n)}:n:e}function Ov(e,n){return Po(tl(e),tl(n))}function tl(e){if($e(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Nn(e,n){return e?[...new Set([].concat(e,n))]:n}function Po(e,n){return e?Rn(Rn(Object.create(null),e),n):n}function Bv(e,n){if(!e)return n;if(!n)return e;const t=Rn(Object.create(null),e);for(const o in n)t[o]=Nn(e[o],n[o]);return t}function Fv(e,n,t,o=!1){const r={},i={};ca(i,Oa,1),e.propsDefaults=Object.create(null),Ff(e,n,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);t?e.props=o?r:rv(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Wv(e,n,t,o){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,s=Ke(r),[l]=e.propsOptions;let c=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(_a(e.emitsOptions,p))continue;const b=n[p];if(l)if(Ve(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const h=It(p);r[h]=ol(l,s,h,b,e,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{Ff(e,n,r,i)&&(c=!0);let d;for(const u in s)(!n||!Ve(n,u)&&((d=br(u))===u||!Ve(n,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(r[u]=ol(l,s,u,void 0,e,!0)):delete r[u]);if(i!==s)for(const u in i)(!n||!Ve(n,u))&&(delete i[u],c=!0)}c&&Ft(e,"set","$attrs")}function Ff(e,n,t,o){const[r,i]=e.propsOptions;let a=!1,s;if(n)for(let l in n){if(ra(l))continue;const c=n[l];let d;r&&Ve(r,d=It(l))?!i||!i.includes(d)?t[d]=c:(s||(s={}))[d]=c:_a(e.emitsOptions,l)||(!(l in o)||c!==o[l])&&(o[l]=c,a=!0)}if(i){const l=Ke(t),c=s||ln;for(let d=0;d<i.length;d++){const u=i[d];t[u]=ol(r,l,u,c[u],e,!Ve(c,u))}}return a}function ol(e,n,t,o,r,i){const a=e[t];if(a!=null){const s=Ve(a,"default");if(s&&o===void 0){const l=a.default;if(a.type!==Function&&_e(l)){const{propsDefaults:c}=r;t in c?o=c[t]:(pr(r),o=c[t]=l.call(null,n),Lo())}else o=l}a[0]&&(i&&!s?o=!1:a[1]&&(o===""||o===br(t))&&(o=!0))}return o}function Wf(e,n,t=!1){const o=n.propsCache,r=o.get(e);if(r)return r;const i=e.props,a={},s=[];let l=!1;if(!_e(e)){const d=u=>{l=!0;const[p,b]=Wf(u,n,!0);Rn(a,p),b&&s.push(...b)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return cn(e)&&o.set(e,lr),lr;if($e(i))for(let d=0;d<i.length;d++){const u=It(i[d]);Jc(u)&&(a[u]=ln)}else if(i)for(const d in i){const u=It(d);if(Jc(u)){const p=i[d],b=a[u]=$e(p)||_e(p)?{type:p}:Object.assign({},p);if(b){const h=ed(Boolean,b.type),y=ed(String,b.type);b[0]=h>-1,b[1]=y<0||h<y,(h>-1||Ve(b,"default"))&&s.push(u)}}}const c=[a,s];return cn(e)&&o.set(e,c),c}function Jc(e){return e[0]!=="$"}function Yc(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Qc(e,n){return Yc(e)===Yc(n)}function ed(e,n){return $e(n)?n.findIndex(t=>Qc(t,e)):_e(n)&&Qc(n,e)?0:-1}const jf=e=>e[0]==="_"||e==="$stable",Jl=e=>$e(e)?e.map(At):[At(e)],jv=(e,n,t)=>{if(n._n)return n;const o=He((...r)=>Jl(n(...r)),t);return o._c=!1,o},Nf=(e,n,t)=>{const o=e._ctx;for(const r in e){if(jf(r))continue;const i=e[r];if(_e(i))n[r]=jv(r,i,o);else if(i!=null){const a=Jl(i);n[r]=()=>a}}},Gf=(e,n)=>{const t=Jl(n);e.slots.default=()=>t},Nv=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=Ke(n),ca(n,"_",t)):Nf(n,e.slots={})}else e.slots={},n&&Gf(e,n);ca(e.slots,Oa,1)},Gv=(e,n,t)=>{const{vnode:o,slots:r}=e;let i=!0,a=ln;if(o.shapeFlag&32){const s=n._;s?t&&s===1?i=!1:(Rn(r,n),!t&&s===1&&delete r._):(i=!n.$stable,Nf(n,r)),a=n}else n&&(Gf(e,n),a={default:1});if(i)for(const s in r)!jf(s)&&!(s in a)&&delete r[s]};function Vf(){return{app:null,config:{isNativeTag:kb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vv=0;function Kv(e,n){return function(o,r=null){_e(o)||(o=Object.assign({},o)),r!=null&&!cn(r)&&(r=null);const i=Vf(),a=new Set;let s=!1;const l=i.app={_uid:Vv++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:p0,get config(){return i.config},set config(c){},use(c,...d){return a.has(c)||(c&&_e(c.install)?(a.add(c),c.install(l,...d)):_e(c)&&(a.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,u){if(!s){const p=ke(o,r);return p.appContext=i,d&&n?n(p,c):e(p,c,u),s=!0,l._container=c,c.__vue_app__=l,Ba(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function rl(e,n,t,o,r=!1){if($e(e)){e.forEach((p,b)=>rl(p,n&&($e(n)?n[b]:n),t,o,r));return}if(Ur(o)&&!r)return;const i=o.shapeFlag&4?Ba(o.component)||o.component.proxy:o.el,a=r?null:i,{i:s,r:l}=e,c=n&&n.r,d=s.refs===ln?s.refs={}:s.refs,u=s.setupState;if(c!=null&&c!==l&&(xn(c)?(d[c]=null,Ve(u,c)&&(u[c]=null)):yn(c)&&(c.value=null)),_e(l))io(l,s,12,[a,d]);else{const p=xn(l),b=yn(l);if(p||b){const h=()=>{if(e.f){const y=p?Ve(u,l)?u[l]:d[l]:l.value;r?$e(y)&&El(y,i):$e(y)?y.includes(i)||y.push(i):p?(d[l]=[i],Ve(u,l)&&(u[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else p?(d[l]=a,Ve(u,l)&&(u[l]=a)):b&&(l.value=a,e.k&&(d[e.k]=a))};a?(h.id=-1,nt(h,t)):h()}}}const nt=Sv;function Uv(e){return qv(e)}function qv(e,n){const t=Ib();t.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:a,createText:s,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:b=wt,insertStaticContent:h}=e,y=(P,R,B,U=null,X=null,ae=null,de=!1,re=null,ee=!!R.dynamicChildren)=>{if(P===R)return;P&&!Ro(P,R)&&(U=ze(P),Ee(P,X,ae,!0),P=null),R.patchFlag===-2&&(ee=!1,R.dynamicChildren=null);const{type:N,ref:xe,shapeFlag:me}=R;switch(N){case La:m(P,R,B,U);break;case Kn:g(P,R,B,U);break;case Ss:P==null&&S(R,B,U,de);break;case Je:E(P,R,B,U,X,ae,de,re,ee);break;default:me&1?T(P,R,B,U,X,ae,de,re,ee):me&6?te(P,R,B,U,X,ae,de,re,ee):(me&64||me&128)&&N.process(P,R,B,U,X,ae,de,re,ee,Ae)}xe!=null&&X&&rl(xe,P&&P.ref,ae,R||P,!R)},m=(P,R,B,U)=>{if(P==null)o(R.el=s(R.children),B,U);else{const X=R.el=P.el;R.children!==P.children&&c(X,R.children)}},g=(P,R,B,U)=>{P==null?o(R.el=l(R.children||""),B,U):R.el=P.el},S=(P,R,B,U)=>{[P.el,P.anchor]=h(P.children,R,B,U,P.el,P.anchor)},I=({el:P,anchor:R},B,U)=>{let X;for(;P&&P!==R;)X=p(P),o(P,B,U),P=X;o(R,B,U)},k=({el:P,anchor:R})=>{let B;for(;P&&P!==R;)B=p(P),r(P),P=B;r(R)},T=(P,R,B,U,X,ae,de,re,ee)=>{de=de||R.type==="svg",P==null?A(R,B,U,X,ae,de,re,ee):H(P,R,X,ae,de,re,ee)},A=(P,R,B,U,X,ae,de,re)=>{let ee,N;const{type:xe,props:me,shapeFlag:oe,transition:fe,dirs:ye}=P;if(ee=P.el=a(P.type,ae,me&&me.is,me),oe&8?d(ee,P.children):oe&16&&w(P.children,ee,null,U,X,ae&&xe!=="foreignObject",de,re),ye&&wo(P,null,U,"created"),me){for(const Me in me)Me!=="value"&&!ra(Me)&&i(ee,Me,null,me[Me],ae,P.children,U,X,we);"value"in me&&i(ee,"value",null,me.value),(N=me.onVnodeBeforeMount)&&kt(N,U,P)}v(ee,P,P.scopeId,de,U),ye&&wo(P,null,U,"beforeMount");const je=(!X||X&&!X.pendingBranch)&&fe&&!fe.persisted;je&&fe.beforeEnter(ee),o(ee,R,B),((N=me&&me.onVnodeMounted)||je||ye)&&nt(()=>{N&&kt(N,U,P),je&&fe.enter(ee),ye&&wo(P,null,U,"mounted")},X)},v=(P,R,B,U,X)=>{if(B&&b(P,B),U)for(let ae=0;ae<U.length;ae++)b(P,U[ae]);if(X){let ae=X.subTree;if(R===ae){const de=X.vnode;v(P,de,de.scopeId,de.slotScopeIds,X.parent)}}},w=(P,R,B,U,X,ae,de,re,ee=0)=>{for(let N=ee;N<P.length;N++){const xe=P[N]=re?no(P[N]):At(P[N]);y(null,xe,R,B,U,X,ae,de,re)}},H=(P,R,B,U,X,ae,de)=>{const re=R.el=P.el;let{patchFlag:ee,dynamicChildren:N,dirs:xe}=R;ee|=P.patchFlag&16;const me=P.props||ln,oe=R.props||ln;let fe;B&&So(B,!1),(fe=oe.onVnodeBeforeUpdate)&&kt(fe,B,R,P),xe&&wo(R,P,B,"beforeUpdate"),B&&So(B,!0);const ye=X&&R.type!=="foreignObject";if(N?z(P.dynamicChildren,N,re,B,U,ye,ae):de||ie(P,R,re,null,B,U,ye,ae,!1),ee>0){if(ee&16)Y(re,R,me,oe,B,U,X);else if(ee&2&&me.class!==oe.class&&i(re,"class",null,oe.class,X),ee&4&&i(re,"style",me.style,oe.style,X),ee&8){const je=R.dynamicProps;for(let Me=0;Me<je.length;Me++){const Ne=je[Me],an=me[Ne],Yn=oe[Ne];(Yn!==an||Ne==="value")&&i(re,Ne,an,Yn,X,P.children,B,U,we)}}ee&1&&P.children!==R.children&&d(re,R.children)}else!de&&N==null&&Y(re,R,me,oe,B,U,X);((fe=oe.onVnodeUpdated)||xe)&&nt(()=>{fe&&kt(fe,B,R,P),xe&&wo(R,P,B,"updated")},U)},z=(P,R,B,U,X,ae,de)=>{for(let re=0;re<R.length;re++){const ee=P[re],N=R[re],xe=ee.el&&(ee.type===Je||!Ro(ee,N)||ee.shapeFlag&70)?u(ee.el):B;y(ee,N,xe,null,U,X,ae,de,!0)}},Y=(P,R,B,U,X,ae,de)=>{if(B!==U){if(B!==ln)for(const re in B)!ra(re)&&!(re in U)&&i(P,re,B[re],null,de,R.children,X,ae,we);for(const re in U){if(ra(re))continue;const ee=U[re],N=B[re];ee!==N&&re!=="value"&&i(P,re,N,ee,de,R.children,X,ae,we)}"value"in U&&i(P,"value",B.value,U.value)}},E=(P,R,B,U,X,ae,de,re,ee)=>{const N=R.el=P?P.el:s(""),xe=R.anchor=P?P.anchor:s("");let{patchFlag:me,dynamicChildren:oe,slotScopeIds:fe}=R;fe&&(re=re?re.concat(fe):fe),P==null?(o(N,B,U),o(xe,B,U),w(R.children,B,xe,X,ae,de,re,ee)):me>0&&me&64&&oe&&P.dynamicChildren?(z(P.dynamicChildren,oe,B,X,ae,de,re),(R.key!=null||X&&R===X.subTree)&&Yl(P,R,!0)):ie(P,R,B,xe,X,ae,de,re,ee)},te=(P,R,B,U,X,ae,de,re,ee)=>{R.slotScopeIds=re,P==null?R.shapeFlag&512?X.ctx.activate(R,B,U,de,ee):L(R,B,U,X,ae,de,ee):M(P,R,ee)},L=(P,R,B,U,X,ae,de)=>{const re=P.component=i0(P,U,X);if(Ea(P)&&(re.ctx.renderer=Ae),a0(re),re.asyncDep){if(X&&X.registerDep(re,se),!P.el){const ee=re.subTree=ke(Kn);g(null,ee,R,B)}return}se(re,P,R,B,X,ae,de)},M=(P,R,B)=>{const U=R.component=P.component;if(xv(P,R,B))if(U.asyncDep&&!U.asyncResolved){j(U,R,B);return}else U.next=R,pv(U.update),U.update();else R.el=P.el,U.vnode=R},se=(P,R,B,U,X,ae,de)=>{const re=()=>{if(P.isMounted){let{next:xe,bu:me,u:oe,parent:fe,vnode:ye}=P,je=xe,Me;So(P,!1),xe?(xe.el=ye.el,j(P,xe,de)):xe=ye,me&&vs(me),(Me=xe.props&&xe.props.onVnodeBeforeUpdate)&&kt(Me,fe,xe,ye),So(P,!0);const Ne=ys(P),an=P.subTree;P.subTree=Ne,y(an,Ne,u(an.el),ze(an),P,X,ae),xe.el=Ne.el,je===null&&Cv(P,Ne.el),oe&&nt(oe,X),(Me=xe.props&&xe.props.onVnodeUpdated)&&nt(()=>kt(Me,fe,xe,ye),X)}else{let xe;const{el:me,props:oe}=R,{bm:fe,m:ye,parent:je}=P,Me=Ur(R);if(So(P,!1),fe&&vs(fe),!Me&&(xe=oe&&oe.onVnodeBeforeMount)&&kt(xe,je,R),So(P,!0),me&&Ze){const Ne=()=>{P.subTree=ys(P),Ze(me,P.subTree,P,X,null)};Me?R.type.__asyncLoader().then(()=>!P.isUnmounted&&Ne()):Ne()}else{const Ne=P.subTree=ys(P);y(null,Ne,B,U,P,X,ae),R.el=Ne.el}if(ye&&nt(ye,X),!Me&&(xe=oe&&oe.onVnodeMounted)){const Ne=R;nt(()=>kt(xe,je,Ne),X)}(R.shapeFlag&256||je&&Ur(je.vnode)&&je.vnode.shapeFlag&256)&&P.a&&nt(P.a,X),P.isMounted=!0,R=B=U=null}},ee=P.effect=new Bl(re,()=>Kl(N),P.scope),N=P.update=()=>ee.run();N.id=P.uid,So(P,!0),N()},j=(P,R,B)=>{R.component=P;const U=P.vnode.props;P.vnode=R,P.next=null,Wv(P,R.props,U,B),Gv(P,R.children,B),vr(),Vc(),yr()},ie=(P,R,B,U,X,ae,de,re,ee=!1)=>{const N=P&&P.children,xe=P?P.shapeFlag:0,me=R.children,{patchFlag:oe,shapeFlag:fe}=R;if(oe>0){if(oe&128){q(N,me,B,U,X,ae,de,re,ee);return}else if(oe&256){$(N,me,B,U,X,ae,de,re,ee);return}}fe&8?(xe&16&&we(N,X,ae),me!==N&&d(B,me)):xe&16?fe&16?q(N,me,B,U,X,ae,de,re,ee):we(N,X,ae,!0):(xe&8&&d(B,""),fe&16&&w(me,B,U,X,ae,de,re,ee))},$=(P,R,B,U,X,ae,de,re,ee)=>{P=P||lr,R=R||lr;const N=P.length,xe=R.length,me=Math.min(N,xe);let oe;for(oe=0;oe<me;oe++){const fe=R[oe]=ee?no(R[oe]):At(R[oe]);y(P[oe],fe,B,null,X,ae,de,re,ee)}N>xe?we(P,X,ae,!0,!1,me):w(R,B,U,X,ae,de,re,ee,me)},q=(P,R,B,U,X,ae,de,re,ee)=>{let N=0;const xe=R.length;let me=P.length-1,oe=xe-1;for(;N<=me&&N<=oe;){const fe=P[N],ye=R[N]=ee?no(R[N]):At(R[N]);if(Ro(fe,ye))y(fe,ye,B,null,X,ae,de,re,ee);else break;N++}for(;N<=me&&N<=oe;){const fe=P[me],ye=R[oe]=ee?no(R[oe]):At(R[oe]);if(Ro(fe,ye))y(fe,ye,B,null,X,ae,de,re,ee);else break;me--,oe--}if(N>me){if(N<=oe){const fe=oe+1,ye=fe<xe?R[fe].el:U;for(;N<=oe;)y(null,R[N]=ee?no(R[N]):At(R[N]),B,ye,X,ae,de,re,ee),N++}}else if(N>oe)for(;N<=me;)Ee(P[N],X,ae,!0),N++;else{const fe=N,ye=N,je=new Map;for(N=ye;N<=oe;N++){const Cn=R[N]=ee?no(R[N]):At(R[N]);Cn.key!=null&&je.set(Cn.key,N)}let Me,Ne=0;const an=oe-ye+1;let Yn=!1,qt=0;const ut=new Array(an);for(N=0;N<an;N++)ut[N]=0;for(N=fe;N<=me;N++){const Cn=P[N];if(Ne>=an){Ee(Cn,X,ae,!0);continue}let J;if(Cn.key!=null)J=je.get(Cn.key);else for(Me=ye;Me<=oe;Me++)if(ut[Me-ye]===0&&Ro(Cn,R[Me])){J=Me;break}J===void 0?Ee(Cn,X,ae,!0):(ut[J-ye]=N+1,J>=qt?qt=J:Yn=!0,y(Cn,R[J],B,null,X,ae,de,re,ee),Ne++)}const rt=Yn?Zv(ut):lr;for(Me=rt.length-1,N=an-1;N>=0;N--){const Cn=ye+N,J=R[Cn],pe=Cn+1<xe?R[Cn+1].el:U;ut[N]===0?y(null,J,B,pe,X,ae,de,re,ee):Yn&&(Me<0||N!==rt[Me]?Pe(J,B,pe,2):Me--)}}},Pe=(P,R,B,U,X=null)=>{const{el:ae,type:de,transition:re,children:ee,shapeFlag:N}=P;if(N&6){Pe(P.component.subTree,R,B,U);return}if(N&128){P.suspense.move(R,B,U);return}if(N&64){de.move(P,R,B,Ae);return}if(de===Je){o(ae,R,B);for(let me=0;me<ee.length;me++)Pe(ee[me],R,B,U);o(P.anchor,R,B);return}if(de===Ss){I(P,R,B);return}if(U!==2&&N&1&&re)if(U===0)re.beforeEnter(ae),o(ae,R,B),nt(()=>re.enter(ae),X);else{const{leave:me,delayLeave:oe,afterLeave:fe}=re,ye=()=>o(ae,R,B),je=()=>{me(ae,()=>{ye(),fe&&fe()})};oe?oe(ae,ye,je):je()}else o(ae,R,B)},Ee=(P,R,B,U=!1,X=!1)=>{const{type:ae,props:de,ref:re,children:ee,dynamicChildren:N,shapeFlag:xe,patchFlag:me,dirs:oe}=P;if(re!=null&&rl(re,null,B,P,!0),xe&256){R.ctx.deactivate(P);return}const fe=xe&1&&oe,ye=!Ur(P);let je;if(ye&&(je=de&&de.onVnodeBeforeUnmount)&&kt(je,R,P),xe&6)Oe(P.component,B,U);else{if(xe&128){P.suspense.unmount(B,U);return}fe&&wo(P,null,R,"beforeUnmount"),xe&64?P.type.remove(P,R,B,X,Ae,U):N&&(ae!==Je||me>0&&me&64)?we(N,R,B,!1,!0):(ae===Je&&me&384||!X&&xe&16)&&we(ee,R,B),U&&Pn(P)}(ye&&(je=de&&de.onVnodeUnmounted)||fe)&&nt(()=>{je&&kt(je,R,P),fe&&wo(P,null,R,"unmounted")},B)},Pn=P=>{const{type:R,el:B,anchor:U,transition:X}=P;if(R===Je){Be(B,U);return}if(R===Ss){k(P);return}const ae=()=>{r(B),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(P.shapeFlag&1&&X&&!X.persisted){const{leave:de,delayLeave:re}=X,ee=()=>de(B,ae);re?re(P.el,ae,ee):ee()}else ae()},Be=(P,R)=>{let B;for(;P!==R;)B=p(P),r(P),P=B;r(R)},Oe=(P,R,B)=>{const{bum:U,scope:X,update:ae,subTree:de,um:re}=P;U&&vs(U),X.stop(),ae&&(ae.active=!1,Ee(de,P,R,B)),re&&nt(re,R),nt(()=>{P.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},we=(P,R,B,U=!1,X=!1,ae=0)=>{for(let de=ae;de<P.length;de++)Ee(P[de],R,B,U,X)},ze=P=>P.shapeFlag&6?ze(P.component.subTree):P.shapeFlag&128?P.suspense.next():p(P.anchor||P.el),Xn=(P,R,B)=>{P==null?R._vnode&&Ee(R._vnode,null,null,!0):y(R._vnode||null,P,R,null,null,null,B),Vc(),Tf(),R._vnode=P},Ae={p:y,um:Ee,m:Pe,r:Pn,mt:L,mc:w,pc:ie,pbc:z,n:ze,o:e};let Jn,Ze;return n&&([Jn,Ze]=n(Ae)),{render:Xn,hydrate:Jn,createApp:Kv(Xn,Jn)}}function So({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Yl(e,n,t=!1){const o=e.children,r=n.children;if($e(o)&&$e(r))for(let i=0;i<o.length;i++){const a=o[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=no(r[i]),s.el=a.el),t||Yl(a,s)),s.type===La&&(s.el=a.el)}}function Zv(e){const n=e.slice(),t=[0];let o,r,i,a,s;const l=e.length;for(o=0;o<l;o++){const c=e[o];if(c!==0){if(r=t[t.length-1],e[r]<c){n[o]=r,t.push(o);continue}for(i=0,a=t.length-1;i<a;)s=i+a>>1,e[t[s]]<c?i=s+1:a=s;c<e[t[i]]&&(i>0&&(n[o]=t[i-1]),t[i]=o)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=n[a];return t}const Xv=e=>e.__isTeleport,Zr=e=>e&&(e.disabled||e.disabled===""),nd=e=>typeof SVGElement<"u"&&e instanceof SVGElement,il=(e,n)=>{const t=e&&e.to;return xn(t)?n?n(t):null:t},Jv={__isTeleport:!0,process(e,n,t,o,r,i,a,s,l,c){const{mc:d,pc:u,pbc:p,o:{insert:b,querySelector:h,createText:y,createComment:m}}=c,g=Zr(n.props);let{shapeFlag:S,children:I,dynamicChildren:k}=n;if(e==null){const T=n.el=y(""),A=n.anchor=y("");b(T,t,o),b(A,t,o);const v=n.target=il(n.props,h),w=n.targetAnchor=y("");v&&(b(w,v),a=a||nd(v));const H=(z,Y)=>{S&16&&d(I,z,Y,r,i,a,s,l)};g?H(t,A):v&&H(v,w)}else{n.el=e.el;const T=n.anchor=e.anchor,A=n.target=e.target,v=n.targetAnchor=e.targetAnchor,w=Zr(e.props),H=w?t:A,z=w?T:v;if(a=a||nd(A),k?(p(e.dynamicChildren,k,H,r,i,a,s),Yl(e,n,!0)):l||u(e,n,H,z,r,i,a,s,!1),g)w||Wi(n,t,T,c,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Y=n.target=il(n.props,h);Y&&Wi(n,Y,null,c,0)}else w&&Wi(n,A,v,c,1)}Kf(n)},remove(e,n,t,o,{um:r,o:{remove:i}},a){const{shapeFlag:s,children:l,anchor:c,targetAnchor:d,target:u,props:p}=e;if(u&&i(d),(a||!Zr(p))&&(i(c),s&16))for(let b=0;b<l.length;b++){const h=l[b];r(h,n,t,!0,!!h.dynamicChildren)}},move:Wi,hydrate:Yv};function Wi(e,n,t,{o:{insert:o},m:r},i=2){i===0&&o(e.targetAnchor,n,t);const{el:a,anchor:s,shapeFlag:l,children:c,props:d}=e,u=i===2;if(u&&o(a,n,t),(!u||Zr(d))&&l&16)for(let p=0;p<c.length;p++)r(c[p],n,t,2);u&&o(s,n,t)}function Yv(e,n,t,o,r,i,{o:{nextSibling:a,parentNode:s,querySelector:l}},c){const d=n.target=il(n.props,l);if(d){const u=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Zr(n.props))n.anchor=c(a(e),n,s(e),t,o,r,i),n.targetAnchor=u;else{n.anchor=a(e);let p=u;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){n.targetAnchor=p,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}c(u,n,d,t,o,r,i)}Kf(n)}return n.anchor&&a(n.anchor)}const Ma=Jv;function Kf(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Je=Symbol(void 0),La=Symbol(void 0),Kn=Symbol(void 0),Ss=Symbol(void 0),Xr=[];let Ct=null;function rn(e=!1){Xr.push(Ct=e?null:[])}function Qv(){Xr.pop(),Ct=Xr[Xr.length-1]||null}let li=1;function td(e){li+=e}function Uf(e){return e.dynamicChildren=li>0?Ct||lr:null,Qv(),li>0&&Ct&&Ct.push(e),e}function Bt(e,n,t,o,r,i){return Uf(St(e,n,t,o,r,i,!0))}function _n(e,n,t,o,r){return Uf(ke(e,n,t,o,r,!0))}function ci(e){return e?e.__v_isVNode===!0:!1}function Ro(e,n){return e.type===n.type&&e.key===n.key}const Oa="__vInternal",qf=({key:e})=>e??null,ia=({ref:e,ref_key:n,ref_for:t})=>e!=null?xn(e)||yn(e)||_e(e)?{i:Ln,r:e,k:n,f:!!t}:e:null;function St(e,n=null,t=null,o=0,r=null,i=e===Je?0:1,a=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&qf(n),ref:n&&ia(n),scopeId:$f,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ln};return s?(Ql(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=xn(t)?8:16),li>0&&!a&&Ct&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ct.push(l),l}const ke=e0;function e0(e,n=null,t=null,o=0,r=null,i=!1){if((!e||e===Lf)&&(e=Kn),ci(e)){const s=gt(e,n,!0);return t&&Ql(s,t),li>0&&!i&&Ct&&(s.shapeFlag&6?Ct[Ct.indexOf(e)]=s:Ct.push(s)),s.patchFlag|=-2,s}if(u0(e)&&(e=e.__vccOpts),n){n=n0(n);let{class:s,style:l}=n;s&&!xn(s)&&(n.class=Hl(s)),cn(l)&&(bf(l)&&!$e(l)&&(l=Rn({},l)),n.style=Pa(l))}const a=xn(e)?1:wv(e)?128:Xv(e)?64:cn(e)?4:_e(e)?2:0;return St(e,n,t,o,r,a,i,!0)}function n0(e){return e?bf(e)||Oa in e?Rn({},e):e:null}function gt(e,n,t=!1){const{props:o,ref:r,patchFlag:i,children:a}=e,s=n?Ht(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&qf(s),ref:n&&n.ref?t&&r?$e(r)?r.concat(ia(n)):[r,ia(n)]:ia(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Je?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gt(e.ssContent),ssFallback:e.ssFallback&&gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Gn(e=" ",n=0){return ke(La,null,e,n)}function t0(e="",n=!1){return n?(rn(),_n(Kn,null,e)):ke(Kn,null,e)}function At(e){return e==null||typeof e=="boolean"?ke(Kn):$e(e)?ke(Je,null,e.slice()):typeof e=="object"?no(e):ke(La,null,String(e))}function no(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gt(e)}function Ql(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if($e(n))t=16;else if(typeof n=="object")if(o&65){const r=n.default;r&&(r._c&&(r._d=!1),Ql(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(Oa in n)?n._ctx=Ln:r===3&&Ln&&(Ln.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else _e(n)?(n={default:n,_ctx:Ln},t=32):(n=String(n),o&64?(t=16,n=[Gn(n)]):t=8);e.children=n,e.shapeFlag|=t}function Ht(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const r in o)if(r==="class")n.class!==o.class&&(n.class=Hl([n.class,o.class]));else if(r==="style")n.style=Pa([n.style,o.style]);else if($a(r)){const i=n[r],a=o[r];a&&i!==a&&!($e(i)&&i.includes(a))&&(n[r]=i?[].concat(i,a):a)}else r!==""&&(n[r]=o[r])}return n}function kt(e,n,t,o=null){pt(e,n,7,[t,o])}const o0=Vf();let r0=0;function i0(e,n,t){const o=e.type,r=(n?n.appContext:e.appContext)||o0,i={uid:r0++,vnode:e,type:o,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new tf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(o,r),emitsOptions:Pf(o,r),emit:null,emitted:null,propsDefaults:ln,inheritAttrs:o.inheritAttrs,ctx:ln,data:ln,props:ln,attrs:ln,slots:ln,refs:ln,setupState:ln,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=bv.bind(null,i),e.ce&&e.ce(i),i}let $n=null;const Gt=()=>$n||Ln,pr=e=>{$n=e,e.scope.on()},Lo=()=>{$n&&$n.scope.off(),$n=null};function Zf(e){return e.vnode.shapeFlag&4}let di=!1;function a0(e,n=!1){di=n;const{props:t,children:o}=e.vnode,r=Zf(e);Fv(e,t,r,n),Nv(e,o);const i=r?s0(e,n):void 0;return di=!1,i}function s0(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=so(new Proxy(e.ctx,Ev));const{setup:o}=t;if(o){const r=e.setupContext=o.length>1?c0(e):null;pr(e),vr();const i=io(o,e,0,[e.props,r]);if(yr(),Lo(),Qu(i)){if(i.then(Lo,Lo),n)return i.then(a=>{od(e,a,n)}).catch(a=>{Ha(a,e,0)});e.asyncDep=i}else od(e,i,n)}else Xf(e,n)}function od(e,n,t){_e(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:cn(n)&&(e.setupState=xf(n)),Xf(e,t)}let rd;function Xf(e,n,t){const o=e.type;if(!e.render){if(!n&&rd&&!o.render){const r=o.template||Xl(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:s,compilerOptions:l}=o,c=Rn(Rn({isCustomElement:i,delimiters:s},a),l);o.render=rd(r,c)}}e.render=o.render||wt}pr(e),vr(),zv(e),yr(),Lo()}function l0(e){return new Proxy(e.attrs,{get(n,t){return lt(e,"get","$attrs"),n[t]}})}function c0(e){const n=o=>{e.exposed=o||{}};let t;return{get attrs(){return t||(t=l0(e))},slots:e.slots,emit:e.emit,expose:n}}function Ba(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(xf(so(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in qr)return qr[t](e)},has(n,t){return t in n||t in qr}}))}function d0(e,n=!0){return _e(e)?e.displayName||e.name:e.name||n&&e.__name}function u0(e){return _e(e)&&"__vccOpts"in e}const G=(e,n)=>uv(e,n,di);function x(e,n,t){const o=arguments.length;return o===2?cn(n)&&!$e(n)?ci(n)?ke(e,null,[n]):ke(e,n):ke(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&ci(t)&&(t=[t]),ke(e,n,t))}const f0=Symbol(""),h0=()=>De(f0),p0="3.2.45",m0="http://www.w3.org/2000/svg",Do=typeof document<"u"?document:null,id=Do&&Do.createElement("template"),g0={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const r=n?Do.createElementNS(m0,e):Do.createElement(e,t?{is:t}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Do.createTextNode(e),createComment:e=>Do.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Do.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,r,i){const a=t?t.previousSibling:n.lastChild;if(r&&(r===i||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{id.innerHTML=o?`<svg>${e}</svg>`:e;const s=id.content;if(o){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function b0(e,n,t){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function v0(e,n,t){const o=e.style,r=xn(t);if(t&&!r){for(const i in t)al(o,i,t[i]);if(n&&!xn(n))for(const i in n)t[i]==null&&al(o,i,"")}else{const i=o.display;r?n!==t&&(o.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const ad=/\s*!important$/;function al(e,n,t){if($e(t))t.forEach(o=>al(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=y0(e,n);ad.test(t)?e.setProperty(br(o),t.replace(ad,""),"important"):e[o]=t}}const sd=["Webkit","Moz","ms"],Ts={};function y0(e,n){const t=Ts[n];if(t)return t;let o=It(n);if(o!=="filter"&&o in e)return Ts[n]=o;o=Da(o);for(let r=0;r<sd.length;r++){const i=sd[r]+o;if(i in e)return Ts[n]=i}return n}const ld="http://www.w3.org/1999/xlink";function x0(e,n,t,o,r){if(o&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(ld,n.slice(6,n.length)):e.setAttributeNS(ld,n,t);else{const i=Tb(n);t==null||i&&!Xu(t)?e.removeAttribute(n):e.setAttribute(n,i?"":t)}}function C0(e,n,t,o,r,i,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,r,i),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let s=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Xu(t):t==null&&l==="string"?(t="",s=!0):l==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(n)}function w0(e,n,t,o){e.addEventListener(n,t,o)}function S0(e,n,t,o){e.removeEventListener(n,t,o)}function T0(e,n,t,o,r=null){const i=e._vei||(e._vei={}),a=i[n];if(o&&a)a.value=o;else{const[s,l]=k0(n);if(o){const c=i[n]=A0(o,r);w0(e,s,c,l)}else a&&(S0(e,s,a,l),i[n]=void 0)}}const cd=/(?:Once|Passive|Capture)$/;function k0(e){let n;if(cd.test(e)){n={};let o;for(;o=e.match(cd);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):br(e.slice(2)),n]}let ks=0;const P0=Promise.resolve(),$0=()=>ks||(P0.then(()=>ks=0),ks=Date.now());function A0(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;pt(R0(o,t.value),n,5,[o])};return t.value=e,t.attached=$0(),t}function R0(e,n){if($e(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(o=>r=>!r._stopped&&o&&o(r))}else return n}const dd=/^on[a-z]/,D0=(e,n,t,o,r=!1,i,a,s,l)=>{n==="class"?b0(e,o,r):n==="style"?v0(e,t,o):$a(n)?_l(n)||T0(e,n,t,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):I0(e,n,o,r))?C0(e,n,o,i,a,s,l):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),x0(e,n,o,r))};function I0(e,n,t,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&dd.test(n)&&_e(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||dd.test(n)&&xn(t)?!1:n in e}const Jt="transition",zr="animation",bt=(e,{slots:n})=>x(Df,Yf(e),n);bt.displayName="Transition";const Jf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},H0=bt.props=Rn({},Df.props,Jf),To=(e,n=[])=>{$e(e)?e.forEach(t=>t(...n)):e&&e(...n)},ud=e=>e?$e(e)?e.some(n=>n.length>1):e.length>1:!1;function Yf(e){const n={};for(const E in e)E in Jf||(n[E]=e[E]);if(e.css===!1)return n;const{name:t="v",type:o,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:c=a,appearToClass:d=s,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:b=`${t}-leave-to`}=e,h=_0(r),y=h&&h[0],m=h&&h[1],{onBeforeEnter:g,onEnter:S,onEnterCancelled:I,onLeave:k,onLeaveCancelled:T,onBeforeAppear:A=g,onAppear:v=S,onAppearCancelled:w=I}=n,H=(E,te,L)=>{eo(E,te?d:s),eo(E,te?c:a),L&&L()},z=(E,te)=>{E._isLeaving=!1,eo(E,u),eo(E,b),eo(E,p),te&&te()},Y=E=>(te,L)=>{const M=E?v:S,se=()=>H(te,E,L);To(M,[te,se]),fd(()=>{eo(te,E?l:i),Lt(te,E?d:s),ud(M)||hd(te,o,y,se)})};return Rn(n,{onBeforeEnter(E){To(g,[E]),Lt(E,i),Lt(E,a)},onBeforeAppear(E){To(A,[E]),Lt(E,l),Lt(E,c)},onEnter:Y(!1),onAppear:Y(!0),onLeave(E,te){E._isLeaving=!0;const L=()=>z(E,te);Lt(E,u),eh(),Lt(E,p),fd(()=>{E._isLeaving&&(eo(E,u),Lt(E,b),ud(k)||hd(E,o,m,L))}),To(k,[E,L])},onEnterCancelled(E){H(E,!1),To(I,[E])},onAppearCancelled(E){H(E,!0),To(w,[E])},onLeaveCancelled(E){z(E),To(T,[E])}})}function _0(e){if(e==null)return null;if(cn(e))return[Ps(e.enter),Ps(e.leave)];{const n=Ps(e);return[n,n]}}function Ps(e){return Ll(e)}function Lt(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function eo(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function fd(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let E0=0;function hd(e,n,t,o){const r=e._endId=++E0,i=()=>{r===e._endId&&o()};if(t)return setTimeout(i,t);const{type:a,timeout:s,propCount:l}=Qf(e,n);if(!a)return o();const c=a+"end";let d=0;const u=()=>{e.removeEventListener(c,p),i()},p=b=>{b.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},s+1),e.addEventListener(c,p)}function Qf(e,n){const t=window.getComputedStyle(e),o=h=>(t[h]||"").split(", "),r=o(`${Jt}Delay`),i=o(`${Jt}Duration`),a=pd(r,i),s=o(`${zr}Delay`),l=o(`${zr}Duration`),c=pd(s,l);let d=null,u=0,p=0;n===Jt?a>0&&(d=Jt,u=a,p=i.length):n===zr?c>0&&(d=zr,u=c,p=l.length):(u=Math.max(a,c),d=u>0?a>c?Jt:zr:null,p=d?d===Jt?i.length:l.length:0);const b=d===Jt&&/\b(transform|all)(,|$)/.test(o(`${Jt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:b}}function pd(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,o)=>md(t)+md(e[o])))}function md(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function eh(){return document.body.offsetHeight}const nh=new WeakMap,th=new WeakMap,z0={name:"TransitionGroup",props:Rn({},H0,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Gt(),o=Rf();let r,i;return Ef(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!F0(r[0].el,t.vnode.el,a))return;r.forEach(L0),r.forEach(O0);const s=r.filter(B0);eh(),s.forEach(l=>{const c=l.el,d=c.style;Lt(c,a),d.transform=d.webkitTransform=d.transitionDuration="";const u=c._moveCb=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",u),c._moveCb=null,eo(c,a))};c.addEventListener("transitionend",u)})}),()=>{const a=Ke(e),s=Yf(a);let l=a.tag||Je;r=i,i=n.default?ql(n.default()):[];for(let c=0;c<i.length;c++){const d=i[c];d.key!=null&&si(d,ai(d,s,o,t))}if(r)for(let c=0;c<r.length;c++){const d=r[c];si(d,ai(d,s,o,t)),nh.set(d,d.el.getBoundingClientRect())}return ke(l,null,i)}}},M0=z0;function L0(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function O0(e){th.set(e,e.el.getBoundingClientRect())}function B0(e){const n=nh.get(e),t=th.get(e),o=n.left-t.left,r=n.top-t.top;if(o||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${o}px,${r}px)`,i.transitionDuration="0s",e}}function F0(e,n,t){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),t.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(o);const{hasTransform:i}=Qf(o);return r.removeChild(o),i}const mr={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Mr(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:o}){!n!=!t&&(o?n?(o.beforeEnter(e),Mr(e,!0),o.enter(e)):o.leave(e,()=>{Mr(e,!1)}):Mr(e,n))},beforeUnmount(e,{value:n}){Mr(e,n)}};function Mr(e,n){e.style.display=n?e._vod:"none"}const W0=Rn({patchProp:D0},g0);let gd;function j0(){return gd||(gd=Uv(W0))}const oh=(...e)=>{const n=j0().createApp(...e),{mount:t}=n;return n.mount=o=>{const r=N0(o);if(!r)return;const i=n._component;!_e(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function N0(e){return xn(e)?document.querySelector(e):e}let ha=[];const rh=new WeakMap;function G0(){ha.forEach(e=>e(...rh.get(e))),ha=[]}function ih(e,...n){rh.set(e,n),!ha.includes(e)&&ha.push(e)===1&&requestAnimationFrame(G0)}function bd(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function ui(e){return e.composedPath()[0]||null}function V0(e){if(typeof e=="number")return{"":e.toString()};const n={};return e.split(/ +/).forEach(t=>{if(t==="")return;const[o,r]=t.split(":");r===void 0?n[""]=o:n[o]=r}),n}function Lr(e,n){var t;if(e==null)return;const o=V0(e);if(n===void 0)return o[""];if(typeof n=="string")return(t=o[n])!==null&&t!==void 0?t:o[""];if(Array.isArray(n)){for(let r=n.length-1;r>=0;--r){const i=n[r];if(i in o)return o[i]}return o[""]}else{let r,i=-1;return Object.keys(o).forEach(a=>{const s=Number(a);!Number.isNaN(s)&&n>=s&&s>=i&&(i=s,r=o[a])}),r}}function vd(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function sr(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function ec(e,n){const t=e.trim().split(/\s+/g),o={top:t[0]};switch(t.length){case 1:o.right=t[0],o.bottom=t[0],o.left=t[0];break;case 2:o.right=t[1],o.left=t[1],o.bottom=t[0];break;case 3:o.right=t[1],o.bottom=t[2],o.left=t[1];break;case 4:o.right=t[1],o.bottom=t[2],o.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?o:o[n]}function K0(e,n){const[t,o]=e.split(" ");return n?n==="row"?t:o:{row:t,col:o||t}}const yd={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},xr="^\\s*",Cr="\\s*$",Ho="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",_o="([0-9A-Fa-f])",Eo="([0-9A-Fa-f]{2})",U0=new RegExp(`${xr}rgb\\s*\\(${Ho},${Ho},${Ho}\\)${Cr}`),q0=new RegExp(`${xr}rgba\\s*\\(${Ho},${Ho},${Ho},${Ho}\\)${Cr}`),Z0=new RegExp(`${xr}#${_o}${_o}${_o}${Cr}`),X0=new RegExp(`${xr}#${Eo}${Eo}${Eo}${Cr}`),J0=new RegExp(`${xr}#${_o}${_o}${_o}${_o}${Cr}`),Y0=new RegExp(`${xr}#${Eo}${Eo}${Eo}${Eo}${Cr}`);function et(e){return parseInt(e,16)}function Wt(e){try{let n;if(n=X0.exec(e))return[et(n[1]),et(n[2]),et(n[3]),1];if(n=U0.exec(e))return[Wn(n[1]),Wn(n[5]),Wn(n[9]),1];if(n=q0.exec(e))return[Wn(n[1]),Wn(n[5]),Wn(n[9]),Jr(n[13])];if(n=Z0.exec(e))return[et(n[1]+n[1]),et(n[2]+n[2]),et(n[3]+n[3]),1];if(n=Y0.exec(e))return[et(n[1]),et(n[2]),et(n[3]),Jr(et(n[4])/255)];if(n=J0.exec(e))return[et(n[1]+n[1]),et(n[2]+n[2]),et(n[3]+n[3]),Jr(et(n[4]+n[4])/255)];if(e in yd)return Wt(yd[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(n){throw n}}function Q0(e){return e>1?1:e<0?0:e}function sl(e,n,t,o){return`rgba(${Wn(e)}, ${Wn(n)}, ${Wn(t)}, ${Q0(o)})`}function $s(e,n,t,o,r){return Wn((e*n*(1-o)+t*o)/r)}function ve(e,n){Array.isArray(e)||(e=Wt(e)),Array.isArray(n)||(n=Wt(n));const t=e[3],o=n[3],r=Jr(t+o-t*o);return sl($s(e[0],t,n[0],o,r),$s(e[1],t,n[1],o,r),$s(e[2],t,n[2],o,r),r)}function V(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:Wt(e);return n.alpha?sl(t,o,r,n.alpha):sl(t,o,r,i)}function vn(e,n){const[t,o,r,i=1]=Array.isArray(e)?e:Wt(e),{lightness:a=1,alpha:s=1}=n;return ey([t*a,o*a,r*a,i*s])}function Jr(e){const n=Math.round(Number(e)*100)/100;return n>1?1:n<0?0:n}function Wn(e){const n=Math.round(Number(e));return n>255?255:n<0?0:n}function ey(e){const[n,t,o]=e;return 3 in e?`rgba(${Wn(n)}, ${Wn(t)}, ${Wn(o)}, ${Jr(e[3])})`:`rgba(${Wn(n)}, ${Wn(t)}, ${Wn(o)}, 1)`}function Fa(e=8){return Math.random().toString(16).slice(2,2+e)}function ah(e,n="default",t=[]){const r=e.$slots[n];return r===void 0?t:r()}function jo(e,n=[],t){const o={};return n.forEach(r=>{o[r]=e[r]}),Object.assign(o,t)}function nc(e,n=[],t){const o={};return Object.getOwnPropertyNames(e).forEach(i=>{n.includes(i)||(o[i]=e[i])}),Object.assign(o,t)}function fi(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(Gn(String(o)));return}if(Array.isArray(o)){fi(o,n,t);return}if(o.type===Je){if(o.children===null)return;Array.isArray(o.children)&&fi(o.children,n,t)}else o.type!==Kn&&t.push(o)}}),t}function nn(e,...n){if(Array.isArray(e))e.forEach(t=>nn(t,...n));else return e(...n)}function Wa(e){return Object.keys(e)}const En=(e,...n)=>typeof e=="function"?e(...n):typeof e=="string"?Gn(e):typeof e=="number"?Gn(String(e)):null;function No(e,n){console.error(`[naive/${e}]: ${n}`)}function xi(e,n){throw new Error(`[naive/${e}]: ${n}`)}function ll(e,n="default",t=void 0){const o=e[n];if(!o)return No("getFirstSlotVNode",`slot[${n}] is empty`),null;const r=fi(o(t));return r.length===1?r[0]:(No("getFirstSlotVNode",`slot[${n}] should have exactly one child`),null)}function ny(e){return n=>{n?e.value=n.$el:e.value=null}}function Ci(e){return e.some(n=>ci(n)?!(n.type===Kn||n.type===Je&&!Ci(n.children)):!0)?e:null}function Oo(e,n){return e&&Ci(e())||n()}function ty(e,n,t){return e&&Ci(e(n))||t(n)}function zn(e,n){const t=e&&Ci(e());return n(t||null)}function cl(e){return!(e&&Ci(e()))}function oy(e){var n;const t=(n=e.dirs)===null||n===void 0?void 0:n.find(({dir:o})=>o===mr);return!!(t&&t.value===!1)}const xd=ge({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),ry=/^(\d|\.)+$/,Cd=/(\d|\.)+/;function aa(e,{c:n=1,offset:t=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+t)*n;return r===0?"0":`${r}px`}else if(typeof e=="string")if(ry.test(e)){const r=(Number(e)+t)*n;return o?r===0?"0":`${r}px`:`${r}`}else{const r=Cd.exec(e);return r?e.replace(Cd,String((Number(r[0])+t)*n)):e}return e}function wd(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function iy(e){let n=0;for(let t=0;t<e.length;++t)e[t]==="&"&&++n;return n}const sh=/\s*,(?![^(]*\))\s*/g,ay=/\s+/g;function sy(e,n){const t=[];return n.split(sh).forEach(o=>{let r=iy(o);if(r){if(r===1){e.forEach(a=>{t.push(o.replace("&",a))});return}}else{e.forEach(a=>{t.push((a&&a+" ")+o)});return}let i=[o];for(;r--;){const a=[];i.forEach(s=>{e.forEach(l=>{a.push(s.replace("&",l))})}),i=a}i.forEach(a=>t.push(a))}),t}function ly(e,n){const t=[];return n.split(sh).forEach(o=>{e.forEach(r=>{t.push((r&&r+" ")+o)})}),t}function cy(e){let n=[""];return e.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?n=sy(n,t):n=ly(n,t))}),n.join(", ").replace(ay," ")}function Sd(e){if(!e)return;const n=e.parentElement;n&&n.removeChild(e)}function ja(e){return document.querySelector(`style[cssr-id="${e}"]`)}function dy(e){const n=document.createElement("style");return n.setAttribute("cssr-id",e),n}function ji(e){return e?/^\s*@(s|m)/.test(e):!1}const uy=/[A-Z]/g;function lh(e){return e.replace(uy,n=>"-"+n.toLowerCase())}function fy(e,n="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(t=>n+`  ${lh(t[0])}: ${t[1]};`).join(`
`)+`
`+n+"}":`: ${e};`}function hy(e,n,t){return typeof e=="function"?e({context:n.context,props:t}):e}function Td(e,n,t,o){if(!n)return"";const r=hy(n,t,o);if(!r)return"";if(typeof r=="string")return`${e} {
${r}
}`;const i=Object.keys(r);if(i.length===0)return t.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return i.forEach(s=>{const l=r[s];if(s==="raw"){a.push(`
`+l+`
`);return}s=lh(s),l!=null&&a.push(`  ${s}${fy(l)}`)}),e&&a.push("}"),a.join(`
`)}function dl(e,n,t){e&&e.forEach(o=>{if(Array.isArray(o))dl(o,n,t);else if(typeof o=="function"){const r=o(n);Array.isArray(r)?dl(r,n,t):r&&t(r)}else o&&t(o)})}function ch(e,n,t,o,r,i){const a=e.$;let s="";if(!a||typeof a=="string")ji(a)?s=a:n.push(a);else if(typeof a=="function"){const d=a({context:o.context,props:r});ji(d)?s=d:n.push(d)}else if(a.before&&a.before(o.context),!a.$||typeof a.$=="string")ji(a.$)?s=a.$:n.push(a.$);else if(a.$){const d=a.$({context:o.context,props:r});ji(d)?s=d:n.push(d)}const l=cy(n),c=Td(l,e.props,o,r);s?(t.push(`${s} {`),i&&c&&i.insertRule(`${s} {
${c}
}
`)):(i&&c&&i.insertRule(c),!i&&c.length&&t.push(c)),e.children&&dl(e.children,{context:o.context,props:r},d=>{if(typeof d=="string"){const u=Td(l,{raw:d},o,r);i?i.insertRule(u):t.push(u)}else ch(d,n,t,o,r,i)}),n.pop(),s&&t.push("}"),a&&a.after&&a.after(o.context)}function dh(e,n,t,o=!1){const r=[];return ch(e,[],r,n,t,o?e.instance.__styleSheet:void 0),o?"":r.join(`

`)}function hi(e){for(var n=0,t,o=0,r=e.length;r>=4;++o,r-=4)t=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(r){case 3:n^=(e.charCodeAt(o+2)&255)<<16;case 2:n^=(e.charCodeAt(o+1)&255)<<8;case 1:n^=e.charCodeAt(o)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function py(e,n,t){const{els:o}=n;if(t===void 0)o.forEach(Sd),n.els=[];else{const r=ja(t);r&&o.includes(r)&&(Sd(r),n.els=o.filter(i=>i!==r))}}function kd(e,n){e.push(n)}function my(e,n,t,o,r,i,a,s,l){if(i&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const p=window.__cssrContext;p[t]||(p[t]=!0,dh(n,e,o,i));return}let c;if(t===void 0&&(c=n.render(o),t=hi(c)),l){l.adapter(t,c??n.render(o));return}const d=ja(t);if(d!==null&&!a)return d;const u=d??dy(t);if(c===void 0&&(c=n.render(o)),u.textContent=c,d!==null)return d;if(s){const p=document.head.querySelector(`meta[name="${s}"]`);if(p)return document.head.insertBefore(u,p),kd(n.els,u),u}return r?document.head.insertBefore(u,document.head.querySelector("style, link")):document.head.appendChild(u),kd(n.els,u),u}function gy(e){return dh(this,this.instance,e)}function by(e={}){const{id:n,ssr:t,props:o,head:r=!1,silent:i=!1,force:a=!1,anchorMetaName:s}=e;return my(this.instance,this,n,o,r,i,a,s,t)}function vy(e={}){const{id:n}=e;py(this.instance,this,n)}const Ni=function(e,n,t,o){return{instance:e,$:n,props:t,children:o,els:[],render:gy,mount:by,unmount:vy}},yy=function(e,n,t,o){return Array.isArray(n)?Ni(e,{$:null},null,n):Array.isArray(t)?Ni(e,n,null,t):Array.isArray(o)?Ni(e,n,t,o):Ni(e,n,t,null)};function uh(e={}){let n=null;const t={c:(...o)=>yy(t,...o),use:(o,...r)=>o.install(t,...r),find:ja,context:{},config:e,get __styleSheet(){if(!n){const o=document.createElement("style");return document.head.appendChild(o),n=document.styleSheets[document.styleSheets.length-1],n}return n}};return t}function xy(e,n){if(e===void 0)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return ja(e)!==null}function Cy(e){let n=".",t="__",o="--",r;if(e){let h=e.blockPrefix;h&&(n=h),h=e.elementPrefix,h&&(t=h),h=e.modifierPrefix,h&&(o=h)}const i={install(h){r=h.c;const y=h.context;y.bem={},y.bem.b=null,y.bem.els=null}};function a(h){let y,m;return{before(g){y=g.bem.b,m=g.bem.els,g.bem.els=null},after(g){g.bem.b=y,g.bem.els=m},$({context:g,props:S}){return h=typeof h=="string"?h:h({context:g,props:S}),g.bem.b=h,`${(S==null?void 0:S.bPrefix)||n}${g.bem.b}`}}}function s(h){let y;return{before(m){y=m.bem.els},after(m){m.bem.els=y},$({context:m,props:g}){return h=typeof h=="string"?h:h({context:m,props:g}),m.bem.els=h.split(",").map(S=>S.trim()),m.bem.els.map(S=>`${(g==null?void 0:g.bPrefix)||n}${m.bem.b}${t}${S}`).join(", ")}}}function l(h){return{$({context:y,props:m}){h=typeof h=="string"?h:h({context:y,props:m});const g=h.split(",").map(k=>k.trim());function S(k){return g.map(T=>`&${(m==null?void 0:m.bPrefix)||n}${y.bem.b}${k!==void 0?`${t}${k}`:""}${o}${T}`).join(", ")}const I=y.bem.els;return I!==null?S(I[0]):S()}}}function c(h){return{$({context:y,props:m}){h=typeof h=="string"?h:h({context:y,props:m});const g=y.bem.els;return`&:not(${(m==null?void 0:m.bPrefix)||n}${y.bem.b}${g!==null&&g.length>0?`${t}${g[0]}`:""}${o}${h})`}}}return Object.assign(i,{cB:(...h)=>r(a(h[0]),h[1],h[2]),cE:(...h)=>r(s(h[0]),h[1],h[2]),cM:(...h)=>r(l(h[0]),h[1],h[2]),cNotM:(...h)=>r(c(h[0]),h[1],h[2])}),i}function be(e,n){return e+(n==="default"?"":n.replace(/^[a-z]/,t=>t.toUpperCase()))}be("abc","def");const wy="n",pi=`.${wy}-`,Sy="__",Ty="--",fh=uh(),hh=Cy({blockPrefix:pi,elementPrefix:Sy,modifierPrefix:Ty});fh.use(hh);const{c:O,find:X6}=fh,{cB:ne,cE:F,cM:Q,cNotM:Mn}=hh;function ph(e){return O(({props:{bPrefix:n}})=>`${n||pi}modal, ${n||pi}drawer`,[e])}function ky(e){return O(({props:{bPrefix:n}})=>`${n||pi}popover`,[e])}function mh(e){return O(({props:{bPrefix:n}})=>`&${n||pi}modal`,e)}const Py=(...e)=>O(">",[ne(...e)]);let As;function $y(){return As===void 0&&(As=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),As}const go=typeof document<"u"&&typeof window<"u",Ay=new WeakSet;function Ry(e){return!Ay.has(e)}function Dy(e,n,t){if(!n)return e;const o=K(e.value);let r=null;return pn(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function Iy(e){const n=K(!!e.value);if(n.value)return mt(n);const t=pn(e,o=>{o&&(n.value=!0,t())});return mt(n)}function An(e){const n=G(e),t=K(n.value);return pn(n,o=>{t.value=o}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(o){e.set(o)}}}function Na(){return Gt()!==null}const Ga=typeof window<"u";let ur,Yr;const Hy=()=>{var e,n;ur=Ga?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,Yr=!1,ur!==void 0?ur.then(()=>{Yr=!0}):Yr=!0};Hy();function _y(e){if(Yr)return;let n=!1;Un(()=>{Yr||ur==null||ur.then(()=>{n||e()})}),kn(()=>{n=!0})}function sa(e){return e.composedPath()[0]}const Ey={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function zy(e,n,t){if(e==="mousemoveoutside"){const o=r=>{n.contains(sa(r))||t(r)};return{mousemove:o,touchstart:o}}else if(e==="clickoutside"){let o=!1;const r=a=>{o=!n.contains(sa(a))},i=a=>{o&&(n.contains(sa(a))||t(a))};return{mousedown:r,mouseup:i,touchstart:r,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function gh(e,n,t){const o=Ey[e];let r=o.get(n);r===void 0&&o.set(n,r=new WeakMap);let i=r.get(t);return i===void 0&&r.set(t,i=zy(e,n,t)),i}function My(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=gh(e,n,t);return Object.keys(r).forEach(i=>{un(i,document,r[i],o)}),!0}return!1}function Ly(e,n,t,o){if(e==="mousemoveoutside"||e==="clickoutside"){const r=gh(e,n,t);return Object.keys(r).forEach(i=>{tn(i,document,r[i],o)}),!0}return!1}function Oy(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function o(){e.set(this,!0),n.set(this,!0)}function r(v,w,H){const z=v[w];return v[w]=function(){return H.apply(v,arguments),z.apply(v,arguments)},v}function i(v,w){v[w]=Event.prototype[w]}const a=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var v;return(v=a.get(this))!==null&&v!==void 0?v:null}function c(v,w){s!==void 0&&Object.defineProperty(v,"currentTarget",{configurable:!0,enumerable:!0,get:w??s.get})}const d={bubble:{},capture:{}},u={};function p(){const v=function(w){const{type:H,eventPhase:z,bubbles:Y}=w,E=sa(w);if(z===2)return;const te=z===1?"capture":"bubble";let L=E;const M=[];for(;L===null&&(L=window),M.push(L),L!==window;)L=L.parentNode||null;const se=d.capture[H],j=d.bubble[H];if(r(w,"stopPropagation",t),r(w,"stopImmediatePropagation",o),c(w,l),te==="capture"){if(se===void 0)return;for(let ie=M.length-1;ie>=0&&!e.has(w);--ie){const $=M[ie],q=se.get($);if(q!==void 0){a.set(w,$);for(const Pe of q){if(n.has(w))break;Pe(w)}}if(ie===0&&!Y&&j!==void 0){const Pe=j.get($);if(Pe!==void 0)for(const Ee of Pe){if(n.has(w))break;Ee(w)}}}}else if(te==="bubble"){if(j===void 0)return;for(let ie=0;ie<M.length&&!e.has(w);++ie){const $=M[ie],q=j.get($);if(q!==void 0){a.set(w,$);for(const Pe of q){if(n.has(w))break;Pe(w)}}}}i(w,"stopPropagation"),i(w,"stopImmediatePropagation"),c(w)};return v.displayName="evtdUnifiedHandler",v}function b(){const v=function(w){const{type:H,eventPhase:z}=w;if(z!==2)return;const Y=u[H];Y!==void 0&&Y.forEach(E=>E(w))};return v.displayName="evtdUnifiedWindowEventHandler",v}const h=p(),y=b();function m(v,w){const H=d[v];return H[w]===void 0&&(H[w]=new Map,window.addEventListener(w,h,v==="capture")),H[w]}function g(v){return u[v]===void 0&&(u[v]=new Set,window.addEventListener(v,y)),u[v]}function S(v,w){let H=v.get(w);return H===void 0&&v.set(w,H=new Set),H}function I(v,w,H,z){const Y=d[w][H];if(Y!==void 0){const E=Y.get(v);if(E!==void 0&&E.has(z))return!0}return!1}function k(v,w){const H=u[v];return!!(H!==void 0&&H.has(w))}function T(v,w,H,z){let Y;if(typeof z=="object"&&z.once===!0?Y=se=>{A(v,w,Y,z),H(se)}:Y=H,My(v,w,Y,z))return;const te=z===!0||typeof z=="object"&&z.capture===!0?"capture":"bubble",L=m(te,v),M=S(L,w);if(M.has(Y)||M.add(Y),w===window){const se=g(v);se.has(Y)||se.add(Y)}}function A(v,w,H,z){if(Ly(v,w,H,z))return;const E=z===!0||typeof z=="object"&&z.capture===!0,te=E?"capture":"bubble",L=m(te,v),M=S(L,w);if(w===window&&!I(w,E?"bubble":"capture",v,H)&&k(v,H)){const j=u[v];j.delete(H),j.size===0&&(window.removeEventListener(v,y),u[v]=void 0)}M.has(H)&&M.delete(H),M.size===0&&L.delete(w),L.size===0&&(window.removeEventListener(v,h,te==="capture"),d[te][v]=void 0)}return{on:T,off:A}}const{on:un,off:tn}=Oy(),Vr=K(null);function Pd(e){if(e.clientX>0||e.clientY>0)Vr.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:t,top:o,width:r,height:i}=n.getBoundingClientRect();t>0||o>0?Vr.value={x:t+r/2,y:o+i/2}:Vr.value={x:0,y:0}}else Vr.value=null}}let Gi=0,$d=!0;function bh(){if(!Ga)return mt(K(null));Gi===0&&un("click",document,Pd,!0);const e=()=>{Gi+=1};return $d&&($d=Na())?(Nt(e),kn(()=>{Gi-=1,Gi===0&&tn("click",document,Pd,!0)})):e(),mt(Vr)}const By=K(void 0);let Vi=0;function Ad(){By.value=Date.now()}let Rd=!0;function vh(e){if(!Ga)return mt(K(!1));const n=K(!1);let t=null;function o(){t!==null&&window.clearTimeout(t)}function r(){o(),n.value=!0,t=window.setTimeout(()=>{n.value=!1},e)}Vi===0&&un("click",window,Ad,!0);const i=()=>{Vi+=1,un("click",window,r,!0)};return Rd&&(Rd=Na())?(Nt(i),kn(()=>{Vi-=1,Vi===0&&tn("click",window,Ad,!0),tn("click",window,r,!0),o()})):i(),mt(n)}let Ki=0;const Fy=typeof window<"u"&&window.matchMedia!==void 0,Bo=K(null);let yt,zo;function pa(e){e.matches&&(Bo.value="dark")}function ma(e){e.matches&&(Bo.value="light")}function Wy(){yt=window.matchMedia("(prefers-color-scheme: dark)"),zo=window.matchMedia("(prefers-color-scheme: light)"),yt.matches?Bo.value="dark":zo.matches?Bo.value="light":Bo.value=null,yt.addEventListener?(yt.addEventListener("change",pa),zo.addEventListener("change",ma)):yt.addListener&&(yt.addListener(pa),zo.addListener(ma))}function jy(){"removeEventListener"in yt?(yt.removeEventListener("change",pa),zo.removeEventListener("change",ma)):"removeListener"in yt&&(yt.removeListener(pa),zo.removeListener(ma)),yt=void 0,zo=void 0}let Dd=!0;function Ny(){return Fy&&(Ki===0&&Wy(),Dd&&(Dd=Na())&&(Nt(()=>{Ki+=1}),kn(()=>{Ki-=1,Ki===0&&jy()}))),mt(Bo)}function tc(e,n){return pn(e,t=>{t!==void 0&&(n.value=t)}),G(()=>e.value===void 0?n.value:e.value)}function wi(){const e=K(!1);return Un(()=>{e.value=!0}),mt(e)}function yh(e,n){return G(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const Gy=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Vy(){return Gy}const Ky={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Uy(e){return`(min-width: ${e}px)`}const Or={};function qy(e=Ky){if(!Ga)return G(()=>[]);if(typeof window.matchMedia!="function")return G(()=>[]);const n=K({}),t=Object.keys(e),o=(r,i)=>{r.matches?n.value[i]=!0:n.value[i]=!1};return t.forEach(r=>{const i=e[r];let a,s;Or[i]===void 0?(a=window.matchMedia(Uy(i)),a.addEventListener?a.addEventListener("change",l=>{s.forEach(c=>{c(l,r)})}):a.addListener&&a.addListener(l=>{s.forEach(c=>{c(l,r)})}),s=new Set,Or[i]={mql:a,cbs:s}):(a=Or[i].mql,s=Or[i].cbs),s.add(o),a.matches&&s.forEach(l=>{l(a,r)})}),kn(()=>{t.forEach(r=>{const{cbs:i}=Or[e[r]];i.has(o)&&i.delete(o)})}),G(()=>{const{value:r}=n;return t.filter(i=>r[i])})}function Zy(e={},n){const t=mo({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(c=>{if(c!==l.key)return;const d=o[c];if(typeof d=="function")d(l);else{const{stop:u=!1,prevent:p=!1}=d;u&&l.stopPropagation(),p&&l.preventDefault(),d.handler(l)}})},a=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==l.key)return;const d=r[c];if(typeof d=="function")d(l);else{const{stop:u=!1,prevent:p=!1}=d;u&&l.stopPropagation(),p&&l.preventDefault(),d.handler(l)}})},s=()=>{(n===void 0||n.value)&&(un("keydown",document,i),un("keyup",document,a)),n!==void 0&&pn(n,l=>{l?(un("keydown",document,i),un("keyup",document,a)):(tn("keydown",document,i),tn("keyup",document,a))})};return Na()?(Nt(s),kn(()=>{(n===void 0||n.value)&&(tn("keydown",document,i),tn("keyup",document,a))})):s(),mt(t)}const Xy="n-internal-select-menu-body",Va="n-modal-body",xh="n-modal",Ka="n-drawer-body",Si="n-popover-body",Ch="__disabled__";function gr(e){const n=De(Va,null),t=De(Ka,null),o=De(Si,null),r=De(Xy,null),i=K();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};Un(()=>{un("fullscreenchange",document,a)}),kn(()=>{tn("fullscreenchange",document,a)})}return An(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?Ch:s===!0?i.value||"body":s:n!=null&&n.value?(a=n.value.$el)!==null&&a!==void 0?a:n.value:t!=null&&t.value?t.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:s??(i.value||"body")})}gr.tdkey=Ch;gr.propTo={type:[String,Object,Boolean],default:void 0};function ul(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);return o()}function fl(e,n=!0,t=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&t.push(Gn(String(o)));return}if(Array.isArray(o)){fl(o,n,t);return}if(o.type===Je){if(o.children===null)return;Array.isArray(o.children)&&fl(o.children,n,t)}else o.type!==Kn&&t.push(o)}}),t}function Id(e,n,t="default"){const o=n[t];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);const r=fl(o());if(r.length===1)return r[0];throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`)}let Yt=null;function wh(){if(Yt===null&&(Yt=document.getElementById("v-binder-view-measurer"),Yt===null)){Yt=document.createElement("div"),Yt.id="v-binder-view-measurer";const{style:e}=Yt;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Yt)}return Yt.getBoundingClientRect()}function Jy(e,n){const t=wh();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function Rs(e){const n=e.getBoundingClientRect(),t=wh();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function Yy(e){return e.nodeType===9?null:e.parentNode}function Sh(e){if(e===null)return null;const n=Yy(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:o,overflowY:r}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+r+o))return n}return Sh(n)}const Qy=ge({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;Ye("VBinder",(n=Gt())===null||n===void 0?void 0:n.proxy);const t=De("VBinder",null),o=K(null),r=g=>{o.value=g,t&&e.syncTargetWithParent&&t.setTargetRef(g)};let i=[];const a=()=>{let g=o.value;for(;g=Sh(g),g!==null;)i.push(g);for(const S of i)un("scroll",S,u,!0)},s=()=>{for(const g of i)tn("scroll",g,u,!0);i=[]},l=new Set,c=g=>{l.size===0&&a(),l.has(g)||l.add(g)},d=g=>{l.has(g)&&l.delete(g),l.size===0&&s()},u=()=>{ih(p)},p=()=>{l.forEach(g=>g())},b=new Set,h=g=>{b.size===0&&un("resize",window,m),b.has(g)||b.add(g)},y=g=>{b.has(g)&&b.delete(g),b.size===0&&tn("resize",window,m)},m=()=>{b.forEach(g=>g())};return kn(()=>{tn("resize",window,m),s()}),{targetRef:o,setTargetRef:r,addScrollListener:c,removeScrollListener:d,addResizeListener:h,removeResizeListener:y}},render(){return ul("binder",this.$slots)}}),Th=Qy,kh=ge({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=De("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?co(Id("follower",this.$slots),[[n]]):Id("follower",this.$slots)}}),er="@@mmoContext",ex={mounted(e,{value:n}){e[er]={handler:void 0},typeof n=="function"&&(e[er].handler=n,un("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[er];typeof n=="function"?t.handler?t.handler!==n&&(tn("mousemoveoutside",e,t.handler),t.handler=n,un("mousemoveoutside",e,n)):(e[er].handler=n,un("mousemoveoutside",e,n)):t.handler&&(tn("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[er];n&&tn("mousemoveoutside",e,n),e[er].handler=void 0}},nx=ex,nr="@@coContext",tx={mounted(e,{value:n,modifiers:t}){e[nr]={handler:void 0},typeof n=="function"&&(e[nr].handler=n,un("clickoutside",e,n,{capture:t.capture}))},updated(e,{value:n,modifiers:t}){const o=e[nr];typeof n=="function"?o.handler?o.handler!==n&&(tn("clickoutside",e,o.handler,{capture:t.capture}),o.handler=n,un("clickoutside",e,n,{capture:t.capture})):(e[nr].handler=n,un("clickoutside",e,n,{capture:t.capture})):o.handler&&(tn("clickoutside",e,o.handler,{capture:t.capture}),o.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:t}=e[nr];t&&tn("clickoutside",e,t,{capture:n.capture}),e[nr].handler=void 0}},hl=tx;function ox(e,n){console.error(`[vdirs/${e}]: ${n}`)}class rx{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(n,t){const{elementZIndex:o}=this;if(t!==void 0){n.style.zIndex=`${t}`,o.delete(n);return}const{nextZIndex:r}=this;o.has(n)&&o.get(n)+1===this.nextZIndex||(n.style.zIndex=`${r}`,o.set(n,r),this.nextZIndex=r+1,this.squashState())}unregister(n,t){const{elementZIndex:o}=this;o.has(n)?o.delete(n):t===void 0&&ox("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:n}=this;n||(this.nextZIndex=2e3),this.nextZIndex-n>2500&&this.rearrange()}rearrange(){const n=Array.from(this.elementZIndex.entries());n.sort((t,o)=>t[1]-o[1]),this.nextZIndex=2e3,n.forEach(t=>{const o=t[0],r=this.nextZIndex++;`${r}`!==o.style.zIndex&&(o.style.zIndex=`${r}`)})}}const Ds=new rx,tr="@@ziContext",ix={mounted(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t;e[tr]={enabled:!!r,initialized:!1},r&&(Ds.ensureZIndex(e,o),e[tr].initialized=!0)},updated(e,n){const{value:t={}}=n,{zIndex:o,enabled:r}=t,i=e[tr].enabled;r&&!i&&(Ds.ensureZIndex(e,o),e[tr].initialized=!0),e[tr].enabled=!!r},unmounted(e,n){if(!e[tr].initialized)return;const{value:t={}}=n,{zIndex:o}=t;Ds.unregister(e,o)}},oc=ix,Ph=Symbol("@css-render/vue3-ssr");function ax(e,n){return`<style cssr-id="${e}">
${n}
</style>`}function sx(e,n){const t=De(Ph,null);if(t===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:o,ids:r}=t;r.has(e)||o!==null&&(r.add(e),o.push(ax(e,n)))}const lx=typeof document<"u";function Ti(){if(lx)return;const e=De(Ph,null);if(e!==null)return{adapter:sx,context:e}}function Hd(e,n){console.error(`[vueuc/${e}]: ${n}`)}const{c:Ui}=uh(),cx="vueuc-style";function _d(e){return typeof e=="string"?document.querySelector(e):e()}const $h=ge({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:Iy(Xe(e,"show")),mergedTo:G(()=>{const{to:n}=e;return n??"body"})}},render(){return this.showTeleport?this.disabled?ul("lazy-teleport",this.$slots):x(Ma,{disabled:this.disabled,to:this.mergedTo},ul("lazy-teleport",this.$slots)):null}}),qi={top:"bottom",bottom:"top",left:"right",right:"left"},Ed={start:"end",center:"center",end:"start"},Is={top:"height",bottom:"height",left:"width",right:"width"},dx={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},ux={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},fx={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},zd={top:!0,bottom:!1,left:!0,right:!1},Md={top:"end",bottom:"start",left:"end",right:"start"};function hx(e,n,t,o,r,i){if(!r||i)return{placement:e,top:0,left:0};const[a,s]=e.split("-");let l=s??"center",c={top:0,left:0};const d=(b,h,y)=>{let m=0,g=0;const S=t[b]-n[h]-n[b];return S>0&&o&&(y?g=zd[h]?S:-S:m=zd[h]?S:-S),{left:m,top:g}},u=a==="left"||a==="right";if(l!=="center"){const b=fx[e],h=qi[b],y=Is[b];if(t[y]>n[y]){if(n[b]+n[y]<t[y]){const m=(t[y]-n[y])/2;n[b]<m||n[h]<m?n[b]<n[h]?(l=Ed[s],c=d(y,h,u)):c=d(y,b,u):l="center"}}else t[y]<n[y]&&n[h]<0&&n[b]>n[h]&&(l=Ed[s])}else{const b=a==="bottom"||a==="top"?"left":"top",h=qi[b],y=Is[b],m=(t[y]-n[y])/2;(n[b]<m||n[h]<m)&&(n[b]>n[h]?(l=Md[b],c=d(y,b,u)):(l=Md[h],c=d(y,h,u)))}let p=a;return n[a]<t[Is[a]]&&n[a]<n[qi[a]]&&(p=qi[a]),{placement:l!=="center"?`${p}-${l}`:p,left:c.left,top:c.top}}function px(e,n){return n?ux[e]:dx[e]}function mx(e,n,t,o,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+o)}px`,left:`${Math.round(t.left-n.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+o)}px`,left:`${Math.round(t.left-n.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}const gx=Ui([Ui(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Ui(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Ui("> *",{pointerEvents:"all"})])]),Ah=ge({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=De("VBinder"),t=An(()=>e.enabled!==void 0?e.enabled:e.show),o=K(null),r=K(null),i=()=>{const{syncTrigger:p}=e;p.includes("scroll")&&n.addScrollListener(l),p.includes("resize")&&n.addResizeListener(l)},a=()=>{n.removeScrollListener(l),n.removeResizeListener(l)};Un(()=>{t.value&&(l(),i())});const s=Ti();gx.mount({id:"vueuc/binder",head:!0,anchorMetaName:cx,ssr:s}),kn(()=>{a()}),_y(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const p=o.value;if(p===null)return;const b=n.targetRef,{x:h,y,overlap:m}=e,g=h!==void 0&&y!==void 0?Jy(h,y):Rs(b);p.style.setProperty("--v-target-width",`${Math.round(g.width)}px`),p.style.setProperty("--v-target-height",`${Math.round(g.height)}px`);const{width:S,minWidth:I,placement:k,internalShift:T,flip:A}=e;p.setAttribute("v-placement",k),m?p.setAttribute("v-overlap",""):p.removeAttribute("v-overlap");const{style:v}=p;S==="target"?v.width=`${g.width}px`:S!==void 0?v.width=S:v.width="",I==="target"?v.minWidth=`${g.width}px`:I!==void 0?v.minWidth=I:v.minWidth="";const w=Rs(p),H=Rs(r.value),{left:z,top:Y,placement:E}=hx(k,g,w,T,A,m),te=px(E,m),{left:L,top:M,transform:se}=mx(E,H,g,Y,z,m);p.setAttribute("v-placement",E),p.style.setProperty("--v-offset-left",`${Math.round(z)}px`),p.style.setProperty("--v-offset-top",`${Math.round(Y)}px`),p.style.transform=`translateX(${L}) translateY(${M}) ${se}`,p.style.setProperty("--v-transform-origin",te),p.style.transformOrigin=te};pn(t,p=>{p?(i(),c()):a()});const c=()=>{Vn().then(l).catch(p=>console.error(p))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(p=>{pn(Xe(e,p),l)}),["teleportDisabled"].forEach(p=>{pn(Xe(e,p),c)}),pn(Xe(e,"syncTrigger"),p=>{p.includes("resize")?n.addResizeListener(l):n.removeResizeListener(l),p.includes("scroll")?n.addScrollListener(l):n.removeScrollListener(l)});const d=wi(),u=An(()=>{const{to:p}=e;if(p!==void 0)return p;d.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:r,followerRef:o,mergedTo:u,syncPosition:l}},render(){return x($h,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=x("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[x("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?co(t,[[oc,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var Fo=[],bx=function(){return Fo.some(function(e){return e.activeTargets.length>0})},vx=function(){return Fo.some(function(e){return e.skippedTargets.length>0})},Ld="ResizeObserver loop completed with undelivered notifications.",yx=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Ld}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Ld),window.dispatchEvent(e)},mi;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(mi||(mi={}));var Wo=function(e){return Object.freeze(e)},xx=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,Wo(this)}return e}(),Rh=function(){function e(n,t,o,r){return this.x=n,this.y=t,this.width=o,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Wo(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,o=n.y,r=n.top,i=n.right,a=n.bottom,s=n.left,l=n.width,c=n.height;return{x:t,y:o,top:r,right:i,bottom:a,left:s,width:l,height:c}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),rc=function(e){return e instanceof SVGElement&&"getBBox"in e},Dh=function(e){if(rc(e)){var n=e.getBBox(),t=n.width,o=n.height;return!t&&!o}var r=e,i=r.offsetWidth,a=r.offsetHeight;return!(i||a||e.getClientRects().length)},Od=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},Cx=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Qr=typeof window<"u"?window:{},Zi=new WeakMap,Bd=/auto|scroll/,wx=/^tb|vertical/,Sx=/msie|trident/i.test(Qr.navigator&&Qr.navigator.userAgent),Pt=function(e){return parseFloat(e||"0")},fr=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new xx((t?n:e)||0,(t?e:n)||0)},Fd=Wo({devicePixelContentBoxSize:fr(),borderBoxSize:fr(),contentBoxSize:fr(),contentRect:new Rh(0,0,0,0)}),Ih=function(e,n){if(n===void 0&&(n=!1),Zi.has(e)&&!n)return Zi.get(e);if(Dh(e))return Zi.set(e,Fd),Fd;var t=getComputedStyle(e),o=rc(e)&&e.ownerSVGElement&&e.getBBox(),r=!Sx&&t.boxSizing==="border-box",i=wx.test(t.writingMode||""),a=!o&&Bd.test(t.overflowY||""),s=!o&&Bd.test(t.overflowX||""),l=o?0:Pt(t.paddingTop),c=o?0:Pt(t.paddingRight),d=o?0:Pt(t.paddingBottom),u=o?0:Pt(t.paddingLeft),p=o?0:Pt(t.borderTopWidth),b=o?0:Pt(t.borderRightWidth),h=o?0:Pt(t.borderBottomWidth),y=o?0:Pt(t.borderLeftWidth),m=u+c,g=l+d,S=y+b,I=p+h,k=s?e.offsetHeight-I-e.clientHeight:0,T=a?e.offsetWidth-S-e.clientWidth:0,A=r?m+S:0,v=r?g+I:0,w=o?o.width:Pt(t.width)-A-T,H=o?o.height:Pt(t.height)-v-k,z=w+m+T+S,Y=H+g+k+I,E=Wo({devicePixelContentBoxSize:fr(Math.round(w*devicePixelRatio),Math.round(H*devicePixelRatio),i),borderBoxSize:fr(z,Y,i),contentBoxSize:fr(w,H,i),contentRect:new Rh(u,l,w,H)});return Zi.set(e,E),E},Hh=function(e,n,t){var o=Ih(e,t),r=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(n){case mi.DEVICE_PIXEL_CONTENT_BOX:return a;case mi.BORDER_BOX:return r;default:return i}},Tx=function(){function e(n){var t=Ih(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=Wo([t.borderBoxSize]),this.contentBoxSize=Wo([t.contentBoxSize]),this.devicePixelContentBoxSize=Wo([t.devicePixelContentBoxSize])}return e}(),_h=function(e){if(Dh(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},kx=function(){var e=1/0,n=[];Fo.forEach(function(a){if(a.activeTargets.length!==0){var s=[];a.activeTargets.forEach(function(c){var d=new Tx(c.target),u=_h(c.target);s.push(d),c.lastReportedSize=Hh(c.target,c.observedBox),u<e&&(e=u)}),n.push(function(){a.callback.call(a.observer,s,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var t=0,o=n;t<o.length;t++){var r=o[t];r()}return e},Wd=function(e){Fo.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(_h(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},Px=function(){var e=0;for(Wd(e);bx();)e=kx(),Wd(e);return vx()&&yx(),e>0},Hs,Eh=[],$x=function(){return Eh.splice(0).forEach(function(e){return e()})},Ax=function(e){if(!Hs){var n=0,t=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return $x()}).observe(t,o),Hs=function(){t.textContent="".concat(n?n--:n++)}}Eh.push(e),Hs()},Rx=function(e){Ax(function(){requestAnimationFrame(e)})},la=0,Dx=function(){return!!la},Ix=250,Hx={attributes:!0,characterData:!0,childList:!0,subtree:!0},jd=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Nd=function(e){return e===void 0&&(e=0),Date.now()+e},_s=!1,_x=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=Ix),!_s){_s=!0;var o=Nd(n);Rx(function(){var r=!1;try{r=Px()}finally{if(_s=!1,n=o-Nd(),!Dx())return;r?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,Hx)};document.body?t():Qr.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),jd.forEach(function(t){return Qr.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),jd.forEach(function(t){return Qr.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),pl=new _x,Gd=function(e){!la&&e>0&&pl.start(),la+=e,!la&&pl.stop()},Ex=function(e){return!rc(e)&&!Cx(e)&&getComputedStyle(e).display==="inline"},zx=function(){function e(n,t){this.target=n,this.observedBox=t||mi.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=Hh(this.target,this.observedBox,!0);return Ex(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),Mx=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),Xi=new WeakMap,Vd=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},Ji=function(){function e(){}return e.connect=function(n,t){var o=new Mx(n,t);Xi.set(n,o)},e.observe=function(n,t,o){var r=Xi.get(n),i=r.observationTargets.length===0;Vd(r.observationTargets,t)<0&&(i&&Fo.push(r),r.observationTargets.push(new zx(t,o&&o.box)),Gd(1),pl.schedule())},e.unobserve=function(n,t){var o=Xi.get(n),r=Vd(o.observationTargets,t),i=o.observationTargets.length===1;r>=0&&(i&&Fo.splice(Fo.indexOf(o),1),o.observationTargets.splice(r,1),Gd(-1))},e.disconnect=function(n){var t=this,o=Xi.get(n);o.observationTargets.slice().forEach(function(r){return t.unobserve(n,r.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),Lx=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ji.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Od(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ji.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Od(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ji.unobserve(this,n)},e.prototype.disconnect=function(){Ji.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Ox{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Lx)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const o=this.elHandlersMap.get(t.target);o!==void 0&&o(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const Kd=new Ox,ga=ge({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=Gt().proxy;function o(r){const{onResize:i}=e;i!==void 0&&i(r)}Un(()=>{const r=t.$el;if(r===void 0){Hd("resize-observer","$el does not exist.");return}if(r.nextElementSibling!==r.nextSibling&&r.nodeType===3&&r.nodeValue!==""){Hd("resize-observer","$el can not be observed (it may be a text node).");return}r.nextElementSibling!==null&&(Kd.registerHandler(r.nextElementSibling,o),n=!0)}),kn(()=>{n&&Kd.unregisterHandler(t.$el.nextElementSibling)})},render(){return _v(this.$slots,"default")}});function zh(e){return e instanceof HTMLElement}function Mh(e){for(let n=0;n<e.childNodes.length;n++){const t=e.childNodes[n];if(zh(t)&&(Oh(t)||Mh(t)))return!0}return!1}function Lh(e){for(let n=e.childNodes.length-1;n>=0;n--){const t=e.childNodes[n];if(zh(t)&&(Oh(t)||Lh(t)))return!0}return!1}function Oh(e){if(!Bx(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function Bx(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let Br=[];const Bh=ge({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const n=Fa(),t=K(null),o=K(null);let r=!1,i=!1;const a=typeof document>"u"?null:document.activeElement;function s(){return Br[Br.length-1]===n}function l(m){var g;m.code==="Escape"&&s()&&((g=e.onEsc)===null||g===void 0||g.call(e,m))}Un(()=>{pn(()=>e.active,m=>{m?(u(),un("keydown",document,l)):(tn("keydown",document,l),r&&p())},{immediate:!0})}),kn(()=>{tn("keydown",document,l),r&&p()});function c(m){if(!i&&s()){const g=d();if(g===null||g.contains(ui(m)))return;b("first")}}function d(){const m=t.value;if(m===null)return null;let g=m;for(;g=g.nextSibling,!(g===null||g instanceof Element&&g.tagName==="DIV"););return g}function u(){var m;if(!e.disabled){if(Br.push(n),e.autoFocus){const{initialFocusTo:g}=e;g===void 0?b("first"):(m=_d(g))===null||m===void 0||m.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",c,!0)}}function p(){var m;if(e.disabled||(document.removeEventListener("focus",c,!0),Br=Br.filter(S=>S!==n),s()))return;const{finalFocusTo:g}=e;g!==void 0?(m=_d(g))===null||m===void 0||m.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&a instanceof HTMLElement&&(i=!0,a.focus({preventScroll:!0}),i=!1)}function b(m){if(s()&&e.active){const g=t.value,S=o.value;if(g!==null&&S!==null){const I=d();if(I==null||I===S){i=!0,g.focus({preventScroll:!0}),i=!1;return}i=!0;const k=m==="first"?Mh(I):Lh(I);i=!1,k||(i=!0,g.focus({preventScroll:!0}),i=!1)}}}function h(m){if(i)return;const g=d();g!==null&&(m.relatedTarget!==null&&g.contains(m.relatedTarget)?b("last"):b("first"))}function y(m){i||(m.relatedTarget!==null&&m.relatedTarget===t.value?b("last"):b("first"))}return{focusableStartRef:t,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:h,handleEndFocus:y}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:n,focusableStyle:t}=this;return x(Je,null,[x("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),e(),x("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});let or=0,Ud="",qd="",Zd="",Xd="";const Jd=K("0px");function Fx(e){if(typeof document>"u")return;const n=document.documentElement;let t,o=!1;const r=()=>{n.style.marginRight=Ud,n.style.overflow=qd,n.style.overflowX=Zd,n.style.overflowY=Xd,Jd.value="0px"};Un(()=>{t=pn(e,i=>{if(i){if(!or){const a=window.innerWidth-n.offsetWidth;a>0&&(Ud=n.style.marginRight,n.style.marginRight=`${a}px`,Jd.value=`${a}px`),qd=n.style.overflow,Zd=n.style.overflowX,Xd=n.style.overflowY,n.style.overflow="hidden",n.style.overflowX="hidden",n.style.overflowY="hidden"}o=!0,or++}else or--,or||r(),o=!1},{immediate:!0})}),kn(()=>{t==null||t(),o&&(or--,or||r(),o=!1)})}const ic=K(!1),Yd=()=>{ic.value=!0},Qd=()=>{ic.value=!1};let Fr=0;const Wx=()=>(go&&(Nt(()=>{Fr||(window.addEventListener("compositionstart",Yd),window.addEventListener("compositionend",Qd)),Fr++}),kn(()=>{Fr<=1?(window.removeEventListener("compositionstart",Yd),window.removeEventListener("compositionend",Qd),Fr=0):Fr--})),ic);function Fh(e){const n={isDeactivated:!1};let t=!1;return Hf(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),Zl(()=>{n.isDeactivated=!0,t||(t=!0)}),n}const eu="n-form-item";function Wh(e,{defaultSize:n="medium",mergedSize:t,mergedDisabled:o}={}){const r=De(eu,null);Ye(eu,null);const i=G(t?()=>t(r):()=>{const{size:l}=e;if(l)return l;if(r){const{mergedSize:c}=r;if(c.value!==void 0)return c.value}return n}),a=G(o?()=>o(r):()=>{const{disabled:l}=e;return l!==void 0?l:r?r.disabled.value:!1}),s=G(()=>{const{status:l}=e;return l||(r==null?void 0:r.mergedValidationStatus.value)});return kn(()=>{r&&r.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:a,mergedStatusRef:s,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}var jx=typeof global=="object"&&global&&global.Object===Object&&global;const jh=jx;var Nx=typeof self=="object"&&self&&self.Object===Object&&self,Gx=jh||Nx||Function("return this")();const _t=Gx;var Vx=_t.Symbol;const uo=Vx;var Nh=Object.prototype,Kx=Nh.hasOwnProperty,Ux=Nh.toString,Wr=uo?uo.toStringTag:void 0;function qx(e){var n=Kx.call(e,Wr),t=e[Wr];try{e[Wr]=void 0;var o=!0}catch{}var r=Ux.call(e);return o&&(n?e[Wr]=t:delete e[Wr]),r}var Zx=Object.prototype,Xx=Zx.toString;function Jx(e){return Xx.call(e)}var Yx="[object Null]",Qx="[object Undefined]",nu=uo?uo.toStringTag:void 0;function Vo(e){return e==null?e===void 0?Qx:Yx:nu&&nu in Object(e)?qx(e):Jx(e)}function fo(e){return e!=null&&typeof e=="object"}var eC="[object Symbol]";function ac(e){return typeof e=="symbol"||fo(e)&&Vo(e)==eC}function Gh(e,n){for(var t=-1,o=e==null?0:e.length,r=Array(o);++t<o;)r[t]=n(e[t],t,e);return r}var nC=Array.isArray;const ct=nC;var tC=1/0,tu=uo?uo.prototype:void 0,ou=tu?tu.toString:void 0;function Vh(e){if(typeof e=="string")return e;if(ct(e))return Gh(e,Vh)+"";if(ac(e))return ou?ou.call(e):"";var n=e+"";return n=="0"&&1/e==-tC?"-0":n}function bo(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function sc(e){return e}var oC="[object AsyncFunction]",rC="[object Function]",iC="[object GeneratorFunction]",aC="[object Proxy]";function lc(e){if(!bo(e))return!1;var n=Vo(e);return n==rC||n==iC||n==oC||n==aC}var sC=_t["__core-js_shared__"];const Es=sC;var ru=function(){var e=/[^.]+$/.exec(Es&&Es.keys&&Es.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function lC(e){return!!ru&&ru in e}var cC=Function.prototype,dC=cC.toString;function Ko(e){if(e!=null){try{return dC.call(e)}catch{}try{return e+""}catch{}}return""}var uC=/[\\^$.*+?()[\]{}|]/g,fC=/^\[object .+?Constructor\]$/,hC=Function.prototype,pC=Object.prototype,mC=hC.toString,gC=pC.hasOwnProperty,bC=RegExp("^"+mC.call(gC).replace(uC,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function vC(e){if(!bo(e)||lC(e))return!1;var n=lc(e)?bC:fC;return n.test(Ko(e))}function yC(e,n){return e==null?void 0:e[n]}function Uo(e,n){var t=yC(e,n);return vC(t)?t:void 0}var xC=Uo(_t,"WeakMap");const ml=xC;var iu=Object.create,CC=function(){function e(){}return function(n){if(!bo(n))return{};if(iu)return iu(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const wC=CC;function SC(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function TC(e,n){var t=-1,o=e.length;for(n||(n=Array(o));++t<o;)n[t]=e[t];return n}var kC=800,PC=16,$C=Date.now;function AC(e){var n=0,t=0;return function(){var o=$C(),r=PC-(o-t);if(t=o,r>0){if(++n>=kC)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function RC(e){return function(){return e}}var DC=function(){try{var e=Uo(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ba=DC;var IC=ba?function(e,n){return ba(e,"toString",{configurable:!0,enumerable:!1,value:RC(n),writable:!0})}:sc;const HC=IC;var _C=AC(HC);const EC=_C;var zC=9007199254740991,MC=/^(?:0|[1-9]\d*)$/;function cc(e,n){var t=typeof e;return n=n??zC,!!n&&(t=="number"||t!="symbol"&&MC.test(e))&&e>-1&&e%1==0&&e<n}function Ua(e,n,t){n=="__proto__"&&ba?ba(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function ki(e,n){return e===n||e!==e&&n!==n}var LC=Object.prototype,OC=LC.hasOwnProperty;function BC(e,n,t){var o=e[n];(!(OC.call(e,n)&&ki(o,t))||t===void 0&&!(n in e))&&Ua(e,n,t)}function FC(e,n,t,o){var r=!t;t||(t={});for(var i=-1,a=n.length;++i<a;){var s=n[i],l=o?o(t[s],e[s],s,t,e):void 0;l===void 0&&(l=e[s]),r?Ua(t,s,l):BC(t,s,l)}return t}var au=Math.max;function WC(e,n,t){return n=au(n===void 0?e.length-1:n,0),function(){for(var o=arguments,r=-1,i=au(o.length-n,0),a=Array(i);++r<i;)a[r]=o[n+r];r=-1;for(var s=Array(n+1);++r<n;)s[r]=o[r];return s[n]=t(a),SC(e,this,s)}}function jC(e,n){return EC(WC(e,n,sc),e+"")}var NC=9007199254740991;function dc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=NC}function wr(e){return e!=null&&dc(e.length)&&!lc(e)}function GC(e,n,t){if(!bo(t))return!1;var o=typeof n;return(o=="number"?wr(t)&&cc(n,t.length):o=="string"&&n in t)?ki(t[n],e):!1}function VC(e){return jC(function(n,t){var o=-1,r=t.length,i=r>1?t[r-1]:void 0,a=r>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(r--,i):void 0,a&&GC(t[0],t[1],a)&&(i=r<3?void 0:i,r=1),n=Object(n);++o<r;){var s=t[o];s&&e(n,s,o,i)}return n})}var KC=Object.prototype;function uc(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||KC;return e===t}function UC(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}var qC="[object Arguments]";function su(e){return fo(e)&&Vo(e)==qC}var Kh=Object.prototype,ZC=Kh.hasOwnProperty,XC=Kh.propertyIsEnumerable,JC=su(function(){return arguments}())?su:function(e){return fo(e)&&ZC.call(e,"callee")&&!XC.call(e,"callee")};const va=JC;function YC(){return!1}var Uh=typeof at=="object"&&at&&!at.nodeType&&at,lu=Uh&&typeof st=="object"&&st&&!st.nodeType&&st,QC=lu&&lu.exports===Uh,cu=QC?_t.Buffer:void 0,e1=cu?cu.isBuffer:void 0,n1=e1||YC;const ya=n1;var t1="[object Arguments]",o1="[object Array]",r1="[object Boolean]",i1="[object Date]",a1="[object Error]",s1="[object Function]",l1="[object Map]",c1="[object Number]",d1="[object Object]",u1="[object RegExp]",f1="[object Set]",h1="[object String]",p1="[object WeakMap]",m1="[object ArrayBuffer]",g1="[object DataView]",b1="[object Float32Array]",v1="[object Float64Array]",y1="[object Int8Array]",x1="[object Int16Array]",C1="[object Int32Array]",w1="[object Uint8Array]",S1="[object Uint8ClampedArray]",T1="[object Uint16Array]",k1="[object Uint32Array]",sn={};sn[b1]=sn[v1]=sn[y1]=sn[x1]=sn[C1]=sn[w1]=sn[S1]=sn[T1]=sn[k1]=!0;sn[t1]=sn[o1]=sn[m1]=sn[r1]=sn[g1]=sn[i1]=sn[a1]=sn[s1]=sn[l1]=sn[c1]=sn[d1]=sn[u1]=sn[f1]=sn[h1]=sn[p1]=!1;function P1(e){return fo(e)&&dc(e.length)&&!!sn[Vo(e)]}function $1(e){return function(n){return e(n)}}var qh=typeof at=="object"&&at&&!at.nodeType&&at,ei=qh&&typeof st=="object"&&st&&!st.nodeType&&st,A1=ei&&ei.exports===qh,zs=A1&&jh.process,R1=function(){try{var e=ei&&ei.require&&ei.require("util").types;return e||zs&&zs.binding&&zs.binding("util")}catch{}}();const du=R1;var uu=du&&du.isTypedArray,D1=uu?$1(uu):P1;const fc=D1;var I1=Object.prototype,H1=I1.hasOwnProperty;function Zh(e,n){var t=ct(e),o=!t&&va(e),r=!t&&!o&&ya(e),i=!t&&!o&&!r&&fc(e),a=t||o||r||i,s=a?UC(e.length,String):[],l=s.length;for(var c in e)(n||H1.call(e,c))&&!(a&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||cc(c,l)))&&s.push(c);return s}function Xh(e,n){return function(t){return e(n(t))}}var _1=Xh(Object.keys,Object);const E1=_1;var z1=Object.prototype,M1=z1.hasOwnProperty;function L1(e){if(!uc(e))return E1(e);var n=[];for(var t in Object(e))M1.call(e,t)&&t!="constructor"&&n.push(t);return n}function hc(e){return wr(e)?Zh(e):L1(e)}function O1(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var B1=Object.prototype,F1=B1.hasOwnProperty;function W1(e){if(!bo(e))return O1(e);var n=uc(e),t=[];for(var o in e)o=="constructor"&&(n||!F1.call(e,o))||t.push(o);return t}function Jh(e){return wr(e)?Zh(e,!0):W1(e)}var j1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N1=/^\w*$/;function pc(e,n){if(ct(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||ac(e)?!0:N1.test(e)||!j1.test(e)||n!=null&&e in Object(n)}var G1=Uo(Object,"create");const gi=G1;function V1(){this.__data__=gi?gi(null):{},this.size=0}function K1(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var U1="__lodash_hash_undefined__",q1=Object.prototype,Z1=q1.hasOwnProperty;function X1(e){var n=this.__data__;if(gi){var t=n[e];return t===U1?void 0:t}return Z1.call(n,e)?n[e]:void 0}var J1=Object.prototype,Y1=J1.hasOwnProperty;function Q1(e){var n=this.__data__;return gi?n[e]!==void 0:Y1.call(n,e)}var ew="__lodash_hash_undefined__";function nw(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=gi&&n===void 0?ew:n,this}function Go(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Go.prototype.clear=V1;Go.prototype.delete=K1;Go.prototype.get=X1;Go.prototype.has=Q1;Go.prototype.set=nw;function tw(){this.__data__=[],this.size=0}function qa(e,n){for(var t=e.length;t--;)if(ki(e[t][0],n))return t;return-1}var ow=Array.prototype,rw=ow.splice;function iw(e){var n=this.__data__,t=qa(n,e);if(t<0)return!1;var o=n.length-1;return t==o?n.pop():rw.call(n,t,1),--this.size,!0}function aw(e){var n=this.__data__,t=qa(n,e);return t<0?void 0:n[t][1]}function sw(e){return qa(this.__data__,e)>-1}function lw(e,n){var t=this.__data__,o=qa(t,e);return o<0?(++this.size,t.push([e,n])):t[o][1]=n,this}function Vt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Vt.prototype.clear=tw;Vt.prototype.delete=iw;Vt.prototype.get=aw;Vt.prototype.has=sw;Vt.prototype.set=lw;var cw=Uo(_t,"Map");const bi=cw;function dw(){this.size=0,this.__data__={hash:new Go,map:new(bi||Vt),string:new Go}}function uw(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Za(e,n){var t=e.__data__;return uw(n)?t[typeof n=="string"?"string":"hash"]:t.map}function fw(e){var n=Za(this,e).delete(e);return this.size-=n?1:0,n}function hw(e){return Za(this,e).get(e)}function pw(e){return Za(this,e).has(e)}function mw(e,n){var t=Za(this,e),o=t.size;return t.set(e,n),this.size+=t.size==o?0:1,this}function Kt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}Kt.prototype.clear=dw;Kt.prototype.delete=fw;Kt.prototype.get=hw;Kt.prototype.has=pw;Kt.prototype.set=mw;var gw="Expected a function";function mc(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(gw);var t=function(){var o=arguments,r=n?n.apply(this,o):o[0],i=t.cache;if(i.has(r))return i.get(r);var a=e.apply(this,o);return t.cache=i.set(r,a)||i,a};return t.cache=new(mc.Cache||Kt),t}mc.Cache=Kt;var bw=500;function vw(e){var n=mc(e,function(o){return t.size===bw&&t.clear(),o}),t=n.cache;return n}var yw=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xw=/\\(\\)?/g,Cw=vw(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(yw,function(t,o,r,i){n.push(r?i.replace(xw,"$1"):o||t)}),n});const ww=Cw;function Xa(e){return e==null?"":Vh(e)}function Yh(e,n){return ct(e)?e:pc(e,n)?[e]:ww(Xa(e))}var Sw=1/0;function Ja(e){if(typeof e=="string"||ac(e))return e;var n=e+"";return n=="0"&&1/e==-Sw?"-0":n}function Qh(e,n){n=Yh(n,e);for(var t=0,o=n.length;e!=null&&t<o;)e=e[Ja(n[t++])];return t&&t==o?e:void 0}function ep(e,n,t){var o=e==null?void 0:Qh(e,n);return o===void 0?t:o}function Tw(e,n){for(var t=-1,o=n.length,r=e.length;++t<o;)e[r+t]=n[t];return e}var kw=Xh(Object.getPrototypeOf,Object);const np=kw;var Pw="[object Object]",$w=Function.prototype,Aw=Object.prototype,tp=$w.toString,Rw=Aw.hasOwnProperty,Dw=tp.call(Object);function Iw(e){if(!fo(e)||Vo(e)!=Pw)return!1;var n=np(e);if(n===null)return!0;var t=Rw.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&tp.call(t)==Dw}function Hw(e,n,t){var o=-1,r=e.length;n<0&&(n=-n>r?0:r+n),t=t>r?r:t,t<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(r);++o<r;)i[o]=e[o+n];return i}function _w(e,n,t){var o=e.length;return t=t===void 0?o:t,!n&&t>=o?e:Hw(e,n,t)}var Ew="\\ud800-\\udfff",zw="\\u0300-\\u036f",Mw="\\ufe20-\\ufe2f",Lw="\\u20d0-\\u20ff",Ow=zw+Mw+Lw,Bw="\\ufe0e\\ufe0f",Fw="\\u200d",Ww=RegExp("["+Fw+Ew+Ow+Bw+"]");function op(e){return Ww.test(e)}function jw(e){return e.split("")}var rp="\\ud800-\\udfff",Nw="\\u0300-\\u036f",Gw="\\ufe20-\\ufe2f",Vw="\\u20d0-\\u20ff",Kw=Nw+Gw+Vw,Uw="\\ufe0e\\ufe0f",qw="["+rp+"]",gl="["+Kw+"]",bl="\\ud83c[\\udffb-\\udfff]",Zw="(?:"+gl+"|"+bl+")",ip="[^"+rp+"]",ap="(?:\\ud83c[\\udde6-\\uddff]){2}",sp="[\\ud800-\\udbff][\\udc00-\\udfff]",Xw="\\u200d",lp=Zw+"?",cp="["+Uw+"]?",Jw="(?:"+Xw+"(?:"+[ip,ap,sp].join("|")+")"+cp+lp+")*",Yw=cp+lp+Jw,Qw="(?:"+[ip+gl+"?",gl,ap,sp,qw].join("|")+")",eS=RegExp(bl+"(?="+bl+")|"+Qw+Yw,"g");function nS(e){return e.match(eS)||[]}function tS(e){return op(e)?nS(e):jw(e)}function oS(e){return function(n){n=Xa(n);var t=op(n)?tS(n):void 0,o=t?t[0]:n.charAt(0),r=t?_w(t,1).join(""):n.slice(1);return o[e]()+r}}var rS=oS("toUpperCase");const iS=rS;function aS(e,n,t,o){var r=-1,i=e==null?0:e.length;for(o&&i&&(t=e[++r]);++r<i;)t=n(t,e[r],r,e);return t}function sS(e){return function(n){return e==null?void 0:e[n]}}var lS={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},cS=sS(lS);const dS=cS;var uS=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fS="\\u0300-\\u036f",hS="\\ufe20-\\ufe2f",pS="\\u20d0-\\u20ff",mS=fS+hS+pS,gS="["+mS+"]",bS=RegExp(gS,"g");function vS(e){return e=Xa(e),e&&e.replace(uS,dS).replace(bS,"")}var yS=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xS(e){return e.match(yS)||[]}var CS=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function wS(e){return CS.test(e)}var dp="\\ud800-\\udfff",SS="\\u0300-\\u036f",TS="\\ufe20-\\ufe2f",kS="\\u20d0-\\u20ff",PS=SS+TS+kS,up="\\u2700-\\u27bf",fp="a-z\\xdf-\\xf6\\xf8-\\xff",$S="\\xac\\xb1\\xd7\\xf7",AS="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",RS="\\u2000-\\u206f",DS=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hp="A-Z\\xc0-\\xd6\\xd8-\\xde",IS="\\ufe0e\\ufe0f",pp=$S+AS+RS+DS,mp="['’]",fu="["+pp+"]",HS="["+PS+"]",gp="\\d+",_S="["+up+"]",bp="["+fp+"]",vp="[^"+dp+pp+gp+up+fp+hp+"]",ES="\\ud83c[\\udffb-\\udfff]",zS="(?:"+HS+"|"+ES+")",MS="[^"+dp+"]",yp="(?:\\ud83c[\\udde6-\\uddff]){2}",xp="[\\ud800-\\udbff][\\udc00-\\udfff]",ar="["+hp+"]",LS="\\u200d",hu="(?:"+bp+"|"+vp+")",OS="(?:"+ar+"|"+vp+")",pu="(?:"+mp+"(?:d|ll|m|re|s|t|ve))?",mu="(?:"+mp+"(?:D|LL|M|RE|S|T|VE))?",Cp=zS+"?",wp="["+IS+"]?",BS="(?:"+LS+"(?:"+[MS,yp,xp].join("|")+")"+wp+Cp+")*",FS="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",WS="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",jS=wp+Cp+BS,NS="(?:"+[_S,yp,xp].join("|")+")"+jS,GS=RegExp([ar+"?"+bp+"+"+pu+"(?="+[fu,ar,"$"].join("|")+")",OS+"+"+mu+"(?="+[fu,ar+hu,"$"].join("|")+")",ar+"?"+hu+"+"+pu,ar+"+"+mu,WS,FS,gp,NS].join("|"),"g");function VS(e){return e.match(GS)||[]}function KS(e,n,t){return e=Xa(e),n=t?void 0:n,n===void 0?wS(e)?VS(e):xS(e):e.match(n)||[]}var US="['’]",qS=RegExp(US,"g");function ZS(e){return function(n){return aS(KS(vS(n).replace(qS,"")),e,"")}}function XS(){this.__data__=new Vt,this.size=0}function JS(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function YS(e){return this.__data__.get(e)}function QS(e){return this.__data__.has(e)}var eT=200;function nT(e,n){var t=this.__data__;if(t instanceof Vt){var o=t.__data__;if(!bi||o.length<eT-1)return o.push([e,n]),this.size=++t.size,this;t=this.__data__=new Kt(o)}return t.set(e,n),this.size=t.size,this}function Dt(e){var n=this.__data__=new Vt(e);this.size=n.size}Dt.prototype.clear=XS;Dt.prototype.delete=JS;Dt.prototype.get=YS;Dt.prototype.has=QS;Dt.prototype.set=nT;var Sp=typeof at=="object"&&at&&!at.nodeType&&at,gu=Sp&&typeof st=="object"&&st&&!st.nodeType&&st,tT=gu&&gu.exports===Sp,bu=tT?_t.Buffer:void 0,vu=bu?bu.allocUnsafe:void 0;function oT(e,n){if(n)return e.slice();var t=e.length,o=vu?vu(t):new e.constructor(t);return e.copy(o),o}function rT(e,n){for(var t=-1,o=e==null?0:e.length,r=0,i=[];++t<o;){var a=e[t];n(a,t,e)&&(i[r++]=a)}return i}function iT(){return[]}var aT=Object.prototype,sT=aT.propertyIsEnumerable,yu=Object.getOwnPropertySymbols,lT=yu?function(e){return e==null?[]:(e=Object(e),rT(yu(e),function(n){return sT.call(e,n)}))}:iT;const cT=lT;function dT(e,n,t){var o=n(e);return ct(e)?o:Tw(o,t(e))}function xu(e){return dT(e,hc,cT)}var uT=Uo(_t,"DataView");const vl=uT;var fT=Uo(_t,"Promise");const yl=fT;var hT=Uo(_t,"Set");const xl=hT;var Cu="[object Map]",pT="[object Object]",wu="[object Promise]",Su="[object Set]",Tu="[object WeakMap]",ku="[object DataView]",mT=Ko(vl),gT=Ko(bi),bT=Ko(yl),vT=Ko(xl),yT=Ko(ml),$o=Vo;(vl&&$o(new vl(new ArrayBuffer(1)))!=ku||bi&&$o(new bi)!=Cu||yl&&$o(yl.resolve())!=wu||xl&&$o(new xl)!=Su||ml&&$o(new ml)!=Tu)&&($o=function(e){var n=Vo(e),t=n==pT?e.constructor:void 0,o=t?Ko(t):"";if(o)switch(o){case mT:return ku;case gT:return Cu;case bT:return wu;case vT:return Su;case yT:return Tu}return n});const Pu=$o;var xT=_t.Uint8Array;const xa=xT;function CT(e){var n=new e.constructor(e.byteLength);return new xa(n).set(new xa(e)),n}function wT(e,n){var t=n?CT(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function ST(e){return typeof e.constructor=="function"&&!uc(e)?wC(np(e)):{}}var TT="__lodash_hash_undefined__";function kT(e){return this.__data__.set(e,TT),this}function PT(e){return this.__data__.has(e)}function Ca(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Kt;++n<t;)this.add(e[n])}Ca.prototype.add=Ca.prototype.push=kT;Ca.prototype.has=PT;function $T(e,n){for(var t=-1,o=e==null?0:e.length;++t<o;)if(n(e[t],t,e))return!0;return!1}function AT(e,n){return e.has(n)}var RT=1,DT=2;function Tp(e,n,t,o,r,i){var a=t&RT,s=e.length,l=n.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),d=i.get(n);if(c&&d)return c==n&&d==e;var u=-1,p=!0,b=t&DT?new Ca:void 0;for(i.set(e,n),i.set(n,e);++u<s;){var h=e[u],y=n[u];if(o)var m=a?o(y,h,u,n,e,i):o(h,y,u,e,n,i);if(m!==void 0){if(m)continue;p=!1;break}if(b){if(!$T(n,function(g,S){if(!AT(b,S)&&(h===g||r(h,g,t,o,i)))return b.push(S)})){p=!1;break}}else if(!(h===y||r(h,y,t,o,i))){p=!1;break}}return i.delete(e),i.delete(n),p}function IT(e){var n=-1,t=Array(e.size);return e.forEach(function(o,r){t[++n]=[r,o]}),t}function HT(e){var n=-1,t=Array(e.size);return e.forEach(function(o){t[++n]=o}),t}var _T=1,ET=2,zT="[object Boolean]",MT="[object Date]",LT="[object Error]",OT="[object Map]",BT="[object Number]",FT="[object RegExp]",WT="[object Set]",jT="[object String]",NT="[object Symbol]",GT="[object ArrayBuffer]",VT="[object DataView]",$u=uo?uo.prototype:void 0,Ms=$u?$u.valueOf:void 0;function KT(e,n,t,o,r,i,a){switch(t){case VT:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case GT:return!(e.byteLength!=n.byteLength||!i(new xa(e),new xa(n)));case zT:case MT:case BT:return ki(+e,+n);case LT:return e.name==n.name&&e.message==n.message;case FT:case jT:return e==n+"";case OT:var s=IT;case WT:var l=o&_T;if(s||(s=HT),e.size!=n.size&&!l)return!1;var c=a.get(e);if(c)return c==n;o|=ET,a.set(e,n);var d=Tp(s(e),s(n),o,r,i,a);return a.delete(e),d;case NT:if(Ms)return Ms.call(e)==Ms.call(n)}return!1}var UT=1,qT=Object.prototype,ZT=qT.hasOwnProperty;function XT(e,n,t,o,r,i){var a=t&UT,s=xu(e),l=s.length,c=xu(n),d=c.length;if(l!=d&&!a)return!1;for(var u=l;u--;){var p=s[u];if(!(a?p in n:ZT.call(n,p)))return!1}var b=i.get(e),h=i.get(n);if(b&&h)return b==n&&h==e;var y=!0;i.set(e,n),i.set(n,e);for(var m=a;++u<l;){p=s[u];var g=e[p],S=n[p];if(o)var I=a?o(S,g,p,n,e,i):o(g,S,p,e,n,i);if(!(I===void 0?g===S||r(g,S,t,o,i):I)){y=!1;break}m||(m=p=="constructor")}if(y&&!m){var k=e.constructor,T=n.constructor;k!=T&&"constructor"in e&&"constructor"in n&&!(typeof k=="function"&&k instanceof k&&typeof T=="function"&&T instanceof T)&&(y=!1)}return i.delete(e),i.delete(n),y}var JT=1,Au="[object Arguments]",Ru="[object Array]",Yi="[object Object]",YT=Object.prototype,Du=YT.hasOwnProperty;function QT(e,n,t,o,r,i){var a=ct(e),s=ct(n),l=a?Ru:Pu(e),c=s?Ru:Pu(n);l=l==Au?Yi:l,c=c==Au?Yi:c;var d=l==Yi,u=c==Yi,p=l==c;if(p&&ya(e)){if(!ya(n))return!1;a=!0,d=!1}if(p&&!d)return i||(i=new Dt),a||fc(e)?Tp(e,n,t,o,r,i):KT(e,n,l,t,o,r,i);if(!(t&JT)){var b=d&&Du.call(e,"__wrapped__"),h=u&&Du.call(n,"__wrapped__");if(b||h){var y=b?e.value():e,m=h?n.value():n;return i||(i=new Dt),r(y,m,t,o,i)}}return p?(i||(i=new Dt),XT(e,n,t,o,r,i)):!1}function gc(e,n,t,o,r){return e===n?!0:e==null||n==null||!fo(e)&&!fo(n)?e!==e&&n!==n:QT(e,n,t,o,gc,r)}var e2=1,n2=2;function t2(e,n,t,o){var r=t.length,i=r,a=!o;if(e==null)return!i;for(e=Object(e);r--;){var s=t[r];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++r<i;){s=t[r];var l=s[0],c=e[l],d=s[1];if(a&&s[2]){if(c===void 0&&!(l in e))return!1}else{var u=new Dt;if(o)var p=o(c,d,l,e,n,u);if(!(p===void 0?gc(d,c,e2|n2,o,u):p))return!1}}return!0}function kp(e){return e===e&&!bo(e)}function o2(e){for(var n=hc(e),t=n.length;t--;){var o=n[t],r=e[o];n[t]=[o,r,kp(r)]}return n}function Pp(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function r2(e){var n=o2(e);return n.length==1&&n[0][2]?Pp(n[0][0],n[0][1]):function(t){return t===e||t2(t,e,n)}}function i2(e,n){return e!=null&&n in Object(e)}function a2(e,n,t){n=Yh(n,e);for(var o=-1,r=n.length,i=!1;++o<r;){var a=Ja(n[o]);if(!(i=e!=null&&t(e,a)))break;e=e[a]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&dc(r)&&cc(a,r)&&(ct(e)||va(e)))}function s2(e,n){return e!=null&&a2(e,n,i2)}var l2=1,c2=2;function d2(e,n){return pc(e)&&kp(n)?Pp(Ja(e),n):function(t){var o=ep(t,e);return o===void 0&&o===n?s2(t,e):gc(n,o,l2|c2)}}function u2(e){return function(n){return n==null?void 0:n[e]}}function f2(e){return function(n){return Qh(n,e)}}function h2(e){return pc(e)?u2(Ja(e)):f2(e)}function $p(e){return typeof e=="function"?e:e==null?sc:typeof e=="object"?ct(e)?d2(e[0],e[1]):r2(e):h2(e)}function p2(e,n,t,o){for(var r=-1,i=e==null?0:e.length;++r<i;){var a=e[r];n(o,a,t(a),e)}return o}function m2(e){return function(n,t,o){for(var r=-1,i=Object(n),a=o(n),s=a.length;s--;){var l=a[e?s:++r];if(t(i[l],l,i)===!1)break}return n}}var g2=m2();const Ap=g2;function b2(e,n){return e&&Ap(e,n,hc)}function v2(e,n){return function(t,o){if(t==null)return t;if(!wr(t))return e(t,o);for(var r=t.length,i=n?r:-1,a=Object(t);(n?i--:++i<r)&&o(a[i],i,a)!==!1;);return t}}var y2=v2(b2);const Rp=y2;function x2(e,n,t,o){return Rp(e,function(r,i,a){n(o,r,t(r),a)}),o}function C2(e,n){return function(t,o){var r=ct(t)?p2:x2,i=n?n():{};return r(t,e,$p(o),i)}}function Cl(e,n,t){(t!==void 0&&!ki(e[n],t)||t===void 0&&!(n in e))&&Ua(e,n,t)}function w2(e){return fo(e)&&wr(e)}function wl(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}function S2(e){return FC(e,Jh(e))}function T2(e,n,t,o,r,i,a){var s=wl(e,t),l=wl(n,t),c=a.get(l);if(c){Cl(e,t,c);return}var d=i?i(s,l,t+"",e,n,a):void 0,u=d===void 0;if(u){var p=ct(l),b=!p&&ya(l),h=!p&&!b&&fc(l);d=l,p||b||h?ct(s)?d=s:w2(s)?d=TC(s):b?(u=!1,d=oT(l,!0)):h?(u=!1,d=wT(l,!0)):d=[]:Iw(l)||va(l)?(d=s,va(s)?d=S2(s):(!bo(s)||lc(s))&&(d=ST(l))):u=!1}u&&(a.set(l,d),r(d,l,o,i,a),a.delete(l)),Cl(e,t,d)}function Dp(e,n,t,o,r){e!==n&&Ap(n,function(i,a){if(r||(r=new Dt),bo(i))T2(e,n,a,t,Dp,o,r);else{var s=o?o(wl(e,a),i,a+"",e,n,r):void 0;s===void 0&&(s=i),Cl(e,a,s)}},Jh)}function k2(e,n){var t=-1,o=wr(e)?Array(e.length):[];return Rp(e,function(r,i,a){o[++t]=n(r,i,a)}),o}function P2(e,n){var t=ct(e)?Gh:k2;return t(e,$p(n))}var $2=Object.prototype,A2=$2.hasOwnProperty,R2=C2(function(e,n,t){A2.call(e,t)?e[t].push(n):Ua(e,t,[n])});const D2=R2;var I2=ZS(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()});const H2=I2;var _2=VC(function(e,n,t){Dp(e,n,t)});const Kr=_2,vo={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:E2,fontFamily:z2,lineHeight:M2}=vo,Ip=O("body",`
 margin: 0;
 font-size: ${E2};
 font-family: ${z2};
 line-height: ${M2};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[O("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),ho="n-config-provider",vi="naive-ui-style";function Ie(e,n,t,o,r,i){const a=Ti(),s=De(ho,null);if(t){const c=()=>{const d=i==null?void 0:i.value;t.mount({id:d===void 0?n:d+n,head:!0,props:{bPrefix:d?`.${d}-`:void 0},anchorMetaName:vi,ssr:a}),s!=null&&s.preflightStyleDisabled||Ip.mount({id:"n-global",head:!0,anchorMetaName:vi,ssr:a})};a?c():Nt(c)}return G(()=>{var c;const{theme:{common:d,self:u,peers:p={}}={},themeOverrides:b={},builtinThemeOverrides:h={}}=r,{common:y,peers:m}=b,{common:g=void 0,[e]:{common:S=void 0,self:I=void 0,peers:k={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:T=void 0,[e]:A={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:v,peers:w={}}=A,H=Kr({},d||S||g||o.common,T,v,y),z=Kr((c=u||I||o.self)===null||c===void 0?void 0:c(H),h,A,b);return{common:H,self:z,peers:Kr({},o.peers,k,p),peerOverrides:Kr({},h.peers,w,m)}})}Ie.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const Hp="n";function fn(e={},n={defaultBordered:!0}){const t=De(ho,null);return{inlineThemeDisabled:t==null?void 0:t.inlineThemeDisabled,mergedRtlRef:t==null?void 0:t.mergedRtlRef,mergedComponentPropsRef:t==null?void 0:t.mergedComponentPropsRef,mergedBreakpointsRef:t==null?void 0:t.mergedBreakpointsRef,mergedBorderedRef:G(()=>{var o,r;const{bordered:i}=e;return i!==void 0?i:(r=(o=t==null?void 0:t.mergedBorderedRef.value)!==null&&o!==void 0?o:n.defaultBordered)!==null&&r!==void 0?r:!0}),mergedClsPrefixRef:G(()=>(t==null?void 0:t.mergedClsPrefixRef.value)||Hp),namespaceRef:G(()=>t==null?void 0:t.mergedNamespaceRef.value)}}const L2={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},O2=L2;function Ls(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,o=e.formats[t]||e.formats[e.defaultWidth];return o}}function jr(e){return function(n,t){var o=t!=null&&t.context?String(t.context):"standalone",r;if(o==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=t!=null&&t.width?String(t.width):i;r=e.formattingValues[a]||e.formattingValues[i]}else{var s=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[l]||e.values[s]}var c=e.argumentCallback?e.argumentCallback(n):n;return r[c]}}function Nr(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=n.match(r);if(!i)return null;var a=i[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?F2(s,function(u){return u.test(a)}):B2(s,function(u){return u.test(a)}),c;c=e.valueCallback?e.valueCallback(l):l,c=t.valueCallback?t.valueCallback(c):c;var d=n.slice(a.length);return{value:c,rest:d}}}function B2(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function F2(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function W2(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.match(e.matchPattern);if(!o)return null;var r=o[0],i=n.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;var s=n.slice(r.length);return{value:a,rest:s}}}var j2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},N2=function(n,t,o){var r,i=j2[n];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+r:r+" ago":r};const G2=N2;var V2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},K2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},U2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},q2={date:Ls({formats:V2,defaultWidth:"full"}),time:Ls({formats:K2,defaultWidth:"full"}),dateTime:Ls({formats:U2,defaultWidth:"full"})};const Z2=q2;var X2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},J2=function(n,t,o,r){return X2[n]};const Y2=J2;var Q2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ek={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nk={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tk={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ok={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rk={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ik=function(n,t){var o=Number(n),r=o%100;if(r>20||r<10)switch(r%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},ak={ordinalNumber:ik,era:jr({values:Q2,defaultWidth:"wide"}),quarter:jr({values:ek,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:jr({values:nk,defaultWidth:"wide"}),day:jr({values:tk,defaultWidth:"wide"}),dayPeriod:jr({values:ok,defaultWidth:"wide",formattingValues:rk,defaultFormattingWidth:"wide"})};const sk=ak;var lk=/^(\d+)(th|st|nd|rd)?/i,ck=/\d+/i,dk={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},uk={any:[/^b/i,/^(a|c)/i]},fk={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},hk={any:[/1/i,/2/i,/3/i,/4/i]},pk={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},mk={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gk={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},bk={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vk={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yk={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},xk={ordinalNumber:W2({matchPattern:lk,parsePattern:ck,valueCallback:function(n){return parseInt(n,10)}}),era:Nr({matchPatterns:dk,defaultMatchWidth:"wide",parsePatterns:uk,defaultParseWidth:"any"}),quarter:Nr({matchPatterns:fk,defaultMatchWidth:"wide",parsePatterns:hk,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:Nr({matchPatterns:pk,defaultMatchWidth:"wide",parsePatterns:mk,defaultParseWidth:"any"}),day:Nr({matchPatterns:gk,defaultMatchWidth:"wide",parsePatterns:bk,defaultParseWidth:"any"}),dayPeriod:Nr({matchPatterns:vk,defaultMatchWidth:"any",parsePatterns:yk,defaultParseWidth:"any"})};const Ck=xk;var wk={code:"en-US",formatDistance:G2,formatLong:Z2,formatRelative:Y2,localize:sk,match:Ck,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Sk=wk,Tk={name:"en-US",locale:Sk},kk=Tk;function Pk(e){const{mergedLocaleRef:n,mergedDateLocaleRef:t}=De(ho,null)||{},o=G(()=>{var i,a;return(a=(i=n==null?void 0:n.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:O2[e]});return{dateLocaleRef:G(()=>{var i;return(i=t==null?void 0:t.value)!==null&&i!==void 0?i:kk}),localeRef:o}}function Sr(e,n,t){if(!n)return;const o=Ti(),r=De(ho,null),i=()=>{const a=t==null?void 0:t.value;n.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:vi,props:{bPrefix:a?`.${a}-`:void 0},ssr:o}),r!=null&&r.preflightStyleDisabled||Ip.mount({id:"n-global",head:!0,anchorMetaName:vi,ssr:o})};o?i():Nt(i)}function Dn(e,n,t,o){var r;t||xi("useThemeClass","cssVarsRef is not passed");const i=(r=De(ho,null))===null||r===void 0?void 0:r.mergedThemeHashRef,a=K(""),s=Ti();let l;const c=`__${e}`,d=()=>{let u=c;const p=n?n.value:void 0,b=i==null?void 0:i.value;b&&(u+="-"+b),p&&(u+="-"+p);const{themeOverrides:h,builtinThemeOverrides:y}=o;h&&(u+="-"+hi(JSON.stringify(h))),y&&(u+="-"+hi(JSON.stringify(y))),a.value=u,l=()=>{const m=t.value;let g="";for(const S in m)g+=`${S}: ${m[S]};`;O(`.${u}`,g).mount({id:u,ssr:s}),l=void 0}};return lo(()=>{d()}),{themeClass:a,onRender:()=>{l==null||l()}}}function qo(e,n,t){if(!n)return;const o=Ti(),r=G(()=>{const{value:a}=n;if(!a)return;const s=a[e];if(s)return s}),i=()=>{lo(()=>{const{value:a}=t,s=`${a}${e}Rtl`;if(xy(s,o))return;const{value:l}=r;l&&l.style.mount({id:s,head:!0,anchorMetaName:vi,props:{bPrefix:a?`.${a}-`:void 0},ssr:o})})};return o?i():Nt(i),r}function Tr(e,n){return ge({name:iS(e),setup(){var t;const o=(t=De(ho,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var r;const i=(r=o==null?void 0:o.value)===null||r===void 0?void 0:r[e];return i?i():n}}})}const $k=ge({name:"ChevronRight",render(){return x("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Ak=Tr("close",x("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},x("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},x("g",{fill:"currentColor","fill-rule":"nonzero"},x("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Rk=ge({name:"Eye",render(){return x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},x("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),x("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Dk=ge({name:"EyeOff",render(){return x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},x("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),x("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),x("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),x("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),x("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),bc=Tr("error",x("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},x("g",{"fill-rule":"nonzero"},x("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),wa=Tr("info",x("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},x("g",{"fill-rule":"nonzero"},x("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),vc=Tr("success",x("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},x("g",{"fill-rule":"nonzero"},x("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),yc=Tr("warning",x("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},x("g",{"fill-rule":"nonzero"},x("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),Ik=ge({name:"ChevronDown",render(){return x("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Hk=Tr("clear",x("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},x("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},x("g",{fill:"currentColor","fill-rule":"nonzero"},x("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Ya=ge({name:"BaseIconSwitchTransition",setup(e,{slots:n}){const t=wi();return()=>x(bt,{name:"icon-switch-transition",appear:t.value},n)}}),_p=ge({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function t(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function o(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function r(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function a(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const s=e.group?M0:bt;return x(s,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:i,onAfterEnter:a,onBeforeLeave:t,onLeave:o,onAfterLeave:r},n)}}}),_k=ne("base-icon",`
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
 `)]),po=ge({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Sr("-base-icon",_k,Xe(e,"clsPrefix"))},render(){return x("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Ek=ne("base-close",`
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
 `),Mn("disabled",[O("&:hover",`
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
 `)])]),Qa=ge({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Sr("-base-close",Ek,Xe(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:t,absolute:o,round:r,isButtonTag:i}=e;return x(i?"button":"div",{type:i?"button":void 0,tabindex:t||!e.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:i?void 0:"button",disabled:t,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,t&&`${n}-base-close--disabled`,r&&`${n}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},x(po,{clsPrefix:n},{default:()=>x(Ak,null)}))}}}),{cubicBezierEaseInOut:zk}=vo;function yi({originalTransform:e="",left:n=0,top:t=0,transition:o=`all .3s ${zk} !important`}={}){return[O("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:n,top:t,opacity:0}),O("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:n,top:t,opacity:1}),O("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:t,transition:o})]}const Mk=O([O("@keyframes loading-container-rotate",`
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
 `,[yi()]),F("container",`
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
 `,[yi({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Lk={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},xc=ge({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Lk),setup(e){Sr("-base-loading",Mk,Xe(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:n,strokeWidth:t,stroke:o,scale:r}=this,i=n/r;return x("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},x(Ya,null,{default:()=>this.show?x("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},x("div",{class:`${e}-base-loading__container`},x("div",{class:`${e}-base-loading__container-layer`},x("div",{class:`${e}-base-loading__container-layer-left`},x("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},x("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),x("div",{class:`${e}-base-loading__container-layer-patch`},x("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},x("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),x("div",{class:`${e}-base-loading__container-layer-right`},x("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},x("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n})))))):x("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});function Iu(e){return Array.isArray(e)?e:[e]}const Sl={STOP:"STOP"};function Ep(e,n){const t=n(e);e.children!==void 0&&t!==Sl.STOP&&e.children.forEach(o=>Ep(o,n))}function Ok(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?a=>{a.isLeaf||(o.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),o}function Bk(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Fk(e){return e.children}function Wk(e){return e.key}function jk(){return!1}function Nk(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Gk(e){return e.disabled===!0}function Vk(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function Os(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function Bs(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Kk(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function Uk(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function qk(e){return(e==null?void 0:e.type)==="group"}class Zk extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Xk(e,n,t,o){return Sa(n.concat(e),t,o,!1)}function Jk(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function Yk(e,n,t,o){const r=Sa(n,t,o,!1),i=Sa(e,t,o,!0),a=Jk(e,t),s=[];return r.forEach(l=>{(i.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function Fs(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:l,allowNotLoaded:c}=e;if(!a)return o!==void 0?{checkedKeys:Kk(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Uk(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:d}=n;let u;r!==void 0?u=Yk(r,t,n,c):o!==void 0?u=Xk(o,t,n,c):u=Sa(t,n,c,!1);const p=l==="parent",b=l==="child"||s,h=u,y=new Set,m=Math.max.apply(null,Array.from(d.keys()));for(let g=m;g>=0;g-=1){const S=g===0,I=d.get(g);for(const k of I){if(k.isLeaf)continue;const{key:T,shallowLoaded:A}=k;if(b&&A&&k.children.forEach(z=>{!z.disabled&&!z.isLeaf&&z.shallowLoaded&&h.has(z.key)&&h.delete(z.key)}),k.disabled||!A)continue;let v=!0,w=!1,H=!0;for(const z of k.children){const Y=z.key;if(!z.disabled){if(H&&(H=!1),h.has(Y))w=!0;else if(y.has(Y)){w=!0,v=!1;break}else if(v=!1,w)break}}v&&!H?(p&&k.children.forEach(z=>{!z.disabled&&h.has(z.key)&&h.delete(z.key)}),h.add(T)):w&&y.add(T),S&&b&&h.has(T)&&h.delete(T)}}return{checkedKeys:Array.from(h),indeterminateKeys:Array.from(y)}}function Sa(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,a=new Set,s=new Set(e);return e.forEach(l=>{const c=r.get(l);c!==void 0&&Ep(c,d=>{if(d.disabled)return Sl.STOP;const{key:u}=d;if(!a.has(u)&&(a.add(u),s.add(u),Vk(d.rawNode,i))){if(o)return Sl.STOP;if(!t)throw new Zk}})}),s}function Qk(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(n||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function eP(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function nP(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function Hu(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?tP:nP,i={reverse:n==="prev"};let a=!1,s=null;function l(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const d=Cc(c,i);d!==null?s=d:l(r(c,t))}else{const d=r(c,!1);if(d!==null)l(d);else{const u=oP(c);u!=null&&u.isGroup?l(r(u,t)):t&&l(r(c,!0))}}}}return l(e),s}function tP(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function oP(e){return e.parent}function Cc(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,a=t?-1:r,s=t?-1:1;for(let l=i;l!==a;l+=s){const c=o[l];if(!c.disabled&&!c.ignored)if(c.isGroup){const d=Cc(c,n);if(d!==null)return d}else return c}}return null}const rP={getChild(){return this.ignored?null:Cc(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Hu(this,"next",e)},getPrev(e={}){return Hu(this,"prev",e)}};function iP(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),o}function aP(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function zp(e,n,t,o,r,i=null,a=0){const s=[];return e.forEach((l,c)=>{var d;const u=Object.create(o);if(u.rawNode=l,u.siblings=s,u.level=a,u.index=c,u.isFirstChild=c===0,u.isLastChild=c+1===e.length,u.parent=i,!u.ignored){const p=r(l);Array.isArray(p)&&(u.children=zp(p,n,t,o,r,u,a+1))}s.push(u),n.set(u.key,u),t.has(a)||t.set(a,[]),(d=t.get(a))===null||d===void 0||d.push(u)}),s}function sP(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=Gk,getIgnored:a=jk,getIsGroup:s=qk,getKey:l=Wk}=n,c=(t=n.getChildren)!==null&&t!==void 0?t:Fk,d=n.ignoreEmptyChildren?k=>{const T=c(k);return Array.isArray(T)?T.length?T:null:T}:c,u=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return Bk(this.rawNode,d)},get shallowLoaded(){return Nk(this.rawNode,d)},get ignored(){return a(this.rawNode)},contains(k){return aP(this,k)}},rP),p=zp(e,o,r,u,d);function b(k){if(k==null)return null;const T=o.get(k);return T&&!T.isGroup&&!T.ignored?T:null}function h(k){if(k==null)return null;const T=o.get(k);return T&&!T.ignored?T:null}function y(k,T){const A=h(k);return A?A.getPrev(T):null}function m(k,T){const A=h(k);return A?A.getNext(T):null}function g(k){const T=h(k);return T?T.getParent():null}function S(k){const T=h(k);return T?T.getChild():null}const I={treeNodes:p,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:d,getFlattenedNodes(k){return iP(p,k)},getNode:b,getPrev:y,getNext:m,getParent:g,getChild:S,getFirstAvailableNode(){return eP(p)},getPath(k,T={}){return Qk(k,T,I)},getCheckedKeys(k,T={}){const{cascade:A=!0,leafOnly:v=!1,checkStrategy:w="all",allowNotLoaded:H=!1}=T;return Fs({checkedKeys:Os(k),indeterminateKeys:Bs(k),cascade:A,leafOnly:v,checkStrategy:w,allowNotLoaded:H},I)},check(k,T,A={}){const{cascade:v=!0,leafOnly:w=!1,checkStrategy:H="all",allowNotLoaded:z=!1}=A;return Fs({checkedKeys:Os(T),indeterminateKeys:Bs(T),keysToCheck:k==null?[]:Iu(k),cascade:v,leafOnly:w,checkStrategy:H,allowNotLoaded:z},I)},uncheck(k,T,A={}){const{cascade:v=!0,leafOnly:w=!1,checkStrategy:H="all",allowNotLoaded:z=!1}=A;return Fs({checkedKeys:Os(T),indeterminateKeys:Bs(T),keysToUncheck:k==null?[]:Iu(k),cascade:v,leafOnly:w,checkStrategy:H,allowNotLoaded:z},I)},getNonLeafKeys(k={}){return Ok(p,k)}};return I}const he={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},lP=Wt(he.neutralBase),Mp=Wt(he.neutralInvertBase),cP="rgba("+Mp.slice(0,3).join(", ")+", ";function Ge(e){return cP+String(e)+")"}function dP(e){const n=Array.from(Mp);return n[3]=Number(e),ve(lP,n)}const uP=Object.assign(Object.assign({name:"common"},vo),{baseColor:he.neutralBase,primaryColor:he.primaryDefault,primaryColorHover:he.primaryHover,primaryColorPressed:he.primaryActive,primaryColorSuppl:he.primarySuppl,infoColor:he.infoDefault,infoColorHover:he.infoHover,infoColorPressed:he.infoActive,infoColorSuppl:he.infoSuppl,successColor:he.successDefault,successColorHover:he.successHover,successColorPressed:he.successActive,successColorSuppl:he.successSuppl,warningColor:he.warningDefault,warningColorHover:he.warningHover,warningColorPressed:he.warningActive,warningColorSuppl:he.warningSuppl,errorColor:he.errorDefault,errorColorHover:he.errorHover,errorColorPressed:he.errorActive,errorColorSuppl:he.errorSuppl,textColorBase:he.neutralTextBase,textColor1:Ge(he.alpha1),textColor2:Ge(he.alpha2),textColor3:Ge(he.alpha3),textColorDisabled:Ge(he.alpha4),placeholderColor:Ge(he.alpha4),placeholderColorDisabled:Ge(he.alpha5),iconColor:Ge(he.alpha4),iconColorDisabled:Ge(he.alpha5),iconColorHover:Ge(Number(he.alpha4)*1.25),iconColorPressed:Ge(Number(he.alpha4)*.8),opacity1:he.alpha1,opacity2:he.alpha2,opacity3:he.alpha3,opacity4:he.alpha4,opacity5:he.alpha5,dividerColor:Ge(he.alphaDivider),borderColor:Ge(he.alphaBorder),closeIconColorHover:Ge(Number(he.alphaClose)),closeIconColor:Ge(Number(he.alphaClose)),closeIconColorPressed:Ge(Number(he.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:Ge(he.alpha4),clearColorHover:vn(Ge(he.alpha4),{alpha:1.25}),clearColorPressed:vn(Ge(he.alpha4),{alpha:.8}),scrollbarColor:Ge(he.alphaScrollbar),scrollbarColorHover:Ge(he.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Ge(he.alphaProgressRail),railColor:Ge(he.alphaRail),popoverColor:he.neutralPopover,tableColor:he.neutralCard,cardColor:he.neutralCard,modalColor:he.neutralModal,bodyColor:he.neutralBody,tagColor:dP(he.alphaTag),avatarColor:Ge(he.alphaAvatar),invertedColor:he.neutralBase,inputColor:Ge(he.alphaInput),codeColor:Ge(he.alphaCode),tabColor:Ge(he.alphaTab),actionColor:Ge(he.alphaAction),tableHeaderColor:Ge(he.alphaAction),hoverColor:Ge(he.alphaPending),tableColorHover:Ge(he.alphaTablePending),tableColorStriped:Ge(he.alphaTableStriped),pressedColor:Ge(he.alphaPressed),opacityDisabled:he.alphaDisabled,inputColorDisabled:Ge(he.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),le=uP,Ce={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},fP=Wt(Ce.neutralBase),Lp=Wt(Ce.neutralInvertBase),hP="rgba("+Lp.slice(0,3).join(", ")+", ";function _u(e){return hP+String(e)+")"}function Fn(e){const n=Array.from(Lp);return n[3]=Number(e),ve(fP,n)}const pP=Object.assign(Object.assign({name:"common"},vo),{baseColor:Ce.neutralBase,primaryColor:Ce.primaryDefault,primaryColorHover:Ce.primaryHover,primaryColorPressed:Ce.primaryActive,primaryColorSuppl:Ce.primarySuppl,infoColor:Ce.infoDefault,infoColorHover:Ce.infoHover,infoColorPressed:Ce.infoActive,infoColorSuppl:Ce.infoSuppl,successColor:Ce.successDefault,successColorHover:Ce.successHover,successColorPressed:Ce.successActive,successColorSuppl:Ce.successSuppl,warningColor:Ce.warningDefault,warningColorHover:Ce.warningHover,warningColorPressed:Ce.warningActive,warningColorSuppl:Ce.warningSuppl,errorColor:Ce.errorDefault,errorColorHover:Ce.errorHover,errorColorPressed:Ce.errorActive,errorColorSuppl:Ce.errorSuppl,textColorBase:Ce.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Fn(Ce.alpha4),placeholderColor:Fn(Ce.alpha4),placeholderColorDisabled:Fn(Ce.alpha5),iconColor:Fn(Ce.alpha4),iconColorHover:vn(Fn(Ce.alpha4),{lightness:.75}),iconColorPressed:vn(Fn(Ce.alpha4),{lightness:.9}),iconColorDisabled:Fn(Ce.alpha5),opacity1:Ce.alpha1,opacity2:Ce.alpha2,opacity3:Ce.alpha3,opacity4:Ce.alpha4,opacity5:Ce.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Fn(Number(Ce.alphaClose)),closeIconColorHover:Fn(Number(Ce.alphaClose)),closeIconColorPressed:Fn(Number(Ce.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Fn(Ce.alpha4),clearColorHover:vn(Fn(Ce.alpha4),{lightness:.75}),clearColorPressed:vn(Fn(Ce.alpha4),{lightness:.9}),scrollbarColor:_u(Ce.alphaScrollbar),scrollbarColorHover:_u(Ce.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Fn(Ce.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:Ce.neutralPopover,tableColor:Ce.neutralCard,cardColor:Ce.neutralCard,modalColor:Ce.neutralModal,bodyColor:Ce.neutralBody,tagColor:"#eee",avatarColor:Fn(Ce.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Fn(Ce.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:Ce.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),ce=pP,mP={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Op=e=>{const{textColorDisabled:n,iconColor:t,textColor2:o,fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s}=e;return Object.assign(Object.assign({},mP),{fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:a,fontSizeHuge:s,textColor:n,iconColor:t,extraTextColor:o})},gP={name:"Empty",common:ce,self:Op},Ut=gP,bP={name:"Empty",common:le,self:Op},Zo=bP,Bp=e=>{const{scrollbarColor:n,scrollbarColorHover:t}=e;return{color:n,colorHover:t}},vP={name:"Scrollbar",common:ce,self:Bp},qn=vP,yP={name:"Scrollbar",common:le,self:Bp},tt=yP,{cubicBezierEaseInOut:Eu}=vo;function wc({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:o=Eu,leaveCubicBezier:r=Eu}={}){return[O(`&.${e}-transition-enter-active`,{transition:`all ${n} ${o}!important`}),O(`&.${e}-transition-leave-active`,{transition:`all ${t} ${r}!important`}),O(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),O(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const xP=ne("scrollbar",`
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
 `,[wc(),O("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),CP=Object.assign(Object.assign({},Ie.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Fp=ge({name:"Scrollbar",props:CP,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:o}=fn(e),r=qo("Scrollbar",o,n),i=K(null),a=K(null),s=K(null),l=K(null),c=K(null),d=K(null),u=K(null),p=K(null),b=K(null),h=K(null),y=K(null),m=K(0),g=K(0),S=K(!1),I=K(!1);let k=!1,T=!1,A,v,w=0,H=0,z=0,Y=0;const E=Vy(),te=G(()=>{const{value:J}=p,{value:pe}=d,{value:Te}=h;return J===null||pe===null||Te===null?0:Math.min(J,Te*J/pe+e.size*1.5)}),L=G(()=>`${te.value}px`),M=G(()=>{const{value:J}=b,{value:pe}=u,{value:Te}=y;return J===null||pe===null||Te===null?0:Te*J/pe+e.size*1.5}),se=G(()=>`${M.value}px`),j=G(()=>{const{value:J}=p,{value:pe}=m,{value:Te}=d,{value:Le}=h;if(J===null||Te===null||Le===null)return 0;{const Ue=Te-J;return Ue?pe/Ue*(Le-te.value):0}}),ie=G(()=>`${j.value}px`),$=G(()=>{const{value:J}=b,{value:pe}=g,{value:Te}=u,{value:Le}=y;if(J===null||Te===null||Le===null)return 0;{const Ue=Te-J;return Ue?pe/Ue*(Le-M.value):0}}),q=G(()=>`${$.value}px`),Pe=G(()=>{const{value:J}=p,{value:pe}=d;return J!==null&&pe!==null&&pe>J}),Ee=G(()=>{const{value:J}=b,{value:pe}=u;return J!==null&&pe!==null&&pe>J}),Pn=G(()=>{const{trigger:J}=e;return J==="none"||S.value}),Be=G(()=>{const{trigger:J}=e;return J==="none"||I.value}),Oe=G(()=>{const{container:J}=e;return J?J():a.value}),we=G(()=>{const{content:J}=e;return J?J():s.value}),ze=Fh(()=>{e.container||Jn({top:m.value,left:g.value})}),Xn=()=>{ze.isDeactivated||oe()},Ae=J=>{if(ze.isDeactivated)return;const{onResize:pe}=e;pe&&pe(J),oe()},Jn=(J,pe)=>{if(!e.scrollable)return;if(typeof J=="number"){P(pe??0,J,0,!1,"auto");return}const{left:Te,top:Le,index:Ue,elSize:wn,position:Sn,behavior:Qe,el:On,debounce:mn=!0}=J;(Te!==void 0||Le!==void 0)&&P(Te??0,Le??0,0,!1,Qe),On!==void 0?P(0,On.offsetTop,On.offsetHeight,mn,Qe):Ue!==void 0&&wn!==void 0?P(0,Ue*wn,wn,mn,Qe):Sn==="bottom"?P(0,Number.MAX_SAFE_INTEGER,0,!1,Qe):Sn==="top"&&P(0,0,0,!1,Qe)},Ze=(J,pe)=>{if(!e.scrollable)return;const{value:Te}=Oe;Te&&(typeof J=="object"?Te.scrollBy(J):Te.scrollBy(J,pe||0))};function P(J,pe,Te,Le,Ue){const{value:wn}=Oe;if(wn){if(Le){const{scrollTop:Sn,offsetHeight:Qe}=wn;if(pe>Sn){pe+Te<=Sn+Qe||wn.scrollTo({left:J,top:pe+Te-Qe,behavior:Ue});return}}wn.scrollTo({left:J,top:pe,behavior:Ue})}}function R(){de(),re(),oe()}function B(){U()}function U(){X(),ae()}function X(){v!==void 0&&window.clearTimeout(v),v=window.setTimeout(()=>{I.value=!1},e.duration)}function ae(){A!==void 0&&window.clearTimeout(A),A=window.setTimeout(()=>{S.value=!1},e.duration)}function de(){A!==void 0&&window.clearTimeout(A),S.value=!0}function re(){v!==void 0&&window.clearTimeout(v),I.value=!0}function ee(J){const{onScroll:pe}=e;pe&&pe(J),N()}function N(){const{value:J}=Oe;J&&(m.value=J.scrollTop,g.value=J.scrollLeft*(r!=null&&r.value?-1:1))}function xe(){const{value:J}=we;J&&(d.value=J.offsetHeight,u.value=J.offsetWidth);const{value:pe}=Oe;pe&&(p.value=pe.offsetHeight,b.value=pe.offsetWidth);const{value:Te}=c,{value:Le}=l;Te&&(y.value=Te.offsetWidth),Le&&(h.value=Le.offsetHeight)}function me(){const{value:J}=Oe;J&&(m.value=J.scrollTop,g.value=J.scrollLeft*(r!=null&&r.value?-1:1),p.value=J.offsetHeight,b.value=J.offsetWidth,d.value=J.scrollHeight,u.value=J.scrollWidth);const{value:pe}=c,{value:Te}=l;pe&&(y.value=pe.offsetWidth),Te&&(h.value=Te.offsetHeight)}function oe(){e.scrollable&&(e.useUnifiedContainer?me():(xe(),N()))}function fe(J){var pe;return!(!((pe=i.value)===null||pe===void 0)&&pe.contains(ui(J)))}function ye(J){J.preventDefault(),J.stopPropagation(),T=!0,un("mousemove",window,je,!0),un("mouseup",window,Me,!0),H=g.value,z=r!=null&&r.value?window.innerWidth-J.clientX:J.clientX}function je(J){if(!T)return;A!==void 0&&window.clearTimeout(A),v!==void 0&&window.clearTimeout(v);const{value:pe}=b,{value:Te}=u,{value:Le}=M;if(pe===null||Te===null)return;const wn=(r!=null&&r.value?window.innerWidth-J.clientX-z:J.clientX-z)*(Te-pe)/(pe-Le),Sn=Te-pe;let Qe=H+wn;Qe=Math.min(Sn,Qe),Qe=Math.max(Qe,0);const{value:On}=Oe;if(On){On.scrollLeft=Qe*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:mn}=e;mn&&mn(Qe)}}function Me(J){J.preventDefault(),J.stopPropagation(),tn("mousemove",window,je,!0),tn("mouseup",window,Me,!0),T=!1,oe(),fe(J)&&U()}function Ne(J){J.preventDefault(),J.stopPropagation(),k=!0,un("mousemove",window,an,!0),un("mouseup",window,Yn,!0),w=m.value,Y=J.clientY}function an(J){if(!k)return;A!==void 0&&window.clearTimeout(A),v!==void 0&&window.clearTimeout(v);const{value:pe}=p,{value:Te}=d,{value:Le}=te;if(pe===null||Te===null)return;const wn=(J.clientY-Y)*(Te-pe)/(pe-Le),Sn=Te-pe;let Qe=w+wn;Qe=Math.min(Sn,Qe),Qe=Math.max(Qe,0);const{value:On}=Oe;On&&(On.scrollTop=Qe)}function Yn(J){J.preventDefault(),J.stopPropagation(),tn("mousemove",window,an,!0),tn("mouseup",window,Yn,!0),k=!1,oe(),fe(J)&&U()}lo(()=>{const{value:J}=Ee,{value:pe}=Pe,{value:Te}=n,{value:Le}=c,{value:Ue}=l;Le&&(J?Le.classList.remove(`${Te}-scrollbar-rail--disabled`):Le.classList.add(`${Te}-scrollbar-rail--disabled`)),Ue&&(pe?Ue.classList.remove(`${Te}-scrollbar-rail--disabled`):Ue.classList.add(`${Te}-scrollbar-rail--disabled`))}),Un(()=>{e.container||oe()}),kn(()=>{A!==void 0&&window.clearTimeout(A),v!==void 0&&window.clearTimeout(v),tn("mousemove",window,an,!0),tn("mouseup",window,Yn,!0)});const qt=Ie("Scrollbar","-scrollbar",xP,qn,e,n),ut=G(()=>{const{common:{cubicBezierEaseInOut:J,scrollbarBorderRadius:pe,scrollbarHeight:Te,scrollbarWidth:Le},self:{color:Ue,colorHover:wn}}=qt.value;return{"--n-scrollbar-bezier":J,"--n-scrollbar-color":Ue,"--n-scrollbar-color-hover":wn,"--n-scrollbar-border-radius":pe,"--n-scrollbar-width":Le,"--n-scrollbar-height":Te}}),rt=t?Dn("scrollbar",void 0,ut,e):void 0;return Object.assign(Object.assign({},{scrollTo:Jn,scrollBy:Ze,sync:oe,syncUnifiedContainer:me,handleMouseEnterWrapper:R,handleMouseLeaveWrapper:B}),{mergedClsPrefix:n,rtlEnabled:r,containerScrollTop:m,wrapperRef:i,containerRef:a,contentRef:s,yRailRef:l,xRailRef:c,needYBar:Pe,needXBar:Ee,yBarSizePx:L,xBarSizePx:se,yBarTopPx:ie,xBarLeftPx:q,isShowXBar:Pn,isShowYBar:Be,isIos:E,handleScroll:ee,handleContentResize:Xn,handleContainerResize:Ae,handleYScrollMouseDown:Ne,handleXScrollMouseDown:ye,cssVars:t?void 0:ut,themeClass:rt==null?void 0:rt.themeClass,onRender:rt==null?void 0:rt.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:o,rtlEnabled:r,internalHoistYRail:i}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const a=this.trigger==="none",s=()=>x("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},x(a?xd:bt,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?x("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),l=()=>{var d,u;return(d=this.onRender)===null||d===void 0||d.call(this),x("div",Ht(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,r&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:o?void 0:this.handleMouseEnterWrapper,onMouseleave:o?void 0:this.handleMouseLeaveWrapper}),[this.container?(u=n.default)===null||u===void 0?void 0:u.call(n):x("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},x(ga,{onResize:this.handleContentResize},{default:()=>x("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),i?null:s(),this.xScrollable&&x("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},x(a?xd:bt,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?x("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},c=this.container?l():x(ga,{onResize:this.handleContainerResize},{default:l});return i?x(Je,null,c,s()):c}}),es=Fp,Wp=Fp,wP={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},jp=e=>{const{borderRadius:n,popoverColor:t,textColor3:o,dividerColor:r,textColor2:i,primaryColorPressed:a,textColorDisabled:s,primaryColor:l,opacityDisabled:c,hoverColor:d,fontSizeSmall:u,fontSizeMedium:p,fontSizeLarge:b,fontSizeHuge:h,heightSmall:y,heightMedium:m,heightLarge:g,heightHuge:S}=e;return Object.assign(Object.assign({},wP),{optionFontSizeSmall:u,optionFontSizeMedium:p,optionFontSizeLarge:b,optionFontSizeHuge:h,optionHeightSmall:y,optionHeightMedium:m,optionHeightLarge:g,optionHeightHuge:S,borderRadius:n,color:t,groupHeaderTextColor:o,actionDividerColor:r,optionTextColor:i,optionTextColorPressed:a,optionTextColorDisabled:s,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:d,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:d,actionTextColor:i,loadingColor:l})},SP={name:"InternalSelectMenu",common:ce,peers:{Scrollbar:qn,Empty:Ut},self:jp},Pi=SP,TP={name:"InternalSelectMenu",common:le,peers:{Scrollbar:tt,Empty:Zo},self:jp},$i=TP,{cubicBezierEaseIn:zu,cubicBezierEaseOut:Mu}=vo;function Np({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:o="",originalTransition:r=""}={}){return[O("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${zu}, transform ${n} ${zu} ${r&&","+r}`}),O("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${Mu}, transform ${n} ${Mu} ${r&&","+r}`}),O("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${t})`}),O("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const kP=ne("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),PP=ge({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Sr("-base-wave",kP,Xe(e,"clsPrefix"));const n=K(null),t=K(!1);let o=null;return kn(()=>{o!==null&&window.clearTimeout(o)}),{active:t,selfRef:n,play(){o!==null&&(window.clearTimeout(o),t.value=!1,o=null),Vn(()=>{var r;(r=n.value)===null||r===void 0||r.offsetHeight,t.value=!0,o=window.setTimeout(()=>{t.value=!1,o=null},1e3)})}}},render(){const{clsPrefix:e}=this;return x("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),$P={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},Gp=e=>{const{boxShadow2:n,popoverColor:t,textColor2:o,borderRadius:r,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},$P),{fontSize:i,borderRadius:r,color:t,dividerColor:a,textColor:o,boxShadow:n})},AP={name:"Popover",common:ce,self:Gp},yo=AP,RP={name:"Popover",common:le,self:Gp},Xo=RP,Ws={top:"bottom",bottom:"top",left:"right",right:"left"},Tn="var(--n-arrow-height) * 1.414",DP=O([ne("popover",`
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
 `)]),Mn("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Mn("scrollable",[Mn("show-header-or-footer","padding: var(--n-padding);")])]),F("header",`
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
 left: calc(${Mt("top-start")} - var(--v-offset-left));
 `),ht("top",`
 top: calc(${Tn} / -2);
 transform: translateX(calc(${Tn} / -2)) rotate(45deg);
 left: 50%;
 `),ht("top-end",`
 top: calc(${Tn} / -2);
 right: calc(${Mt("top-end")} + var(--v-offset-left));
 `),ht("bottom-start",`
 bottom: calc(${Tn} / -2);
 left: calc(${Mt("bottom-start")} - var(--v-offset-left));
 `),ht("bottom",`
 bottom: calc(${Tn} / -2);
 transform: translateX(calc(${Tn} / -2)) rotate(45deg);
 left: 50%;
 `),ht("bottom-end",`
 bottom: calc(${Tn} / -2);
 right: calc(${Mt("bottom-end")} + var(--v-offset-left));
 `),ht("left-start",`
 left: calc(${Tn} / -2);
 top: calc(${Mt("left-start")} - var(--v-offset-top));
 `),ht("left",`
 left: calc(${Tn} / -2);
 transform: translateY(calc(${Tn} / -2)) rotate(45deg);
 top: 50%;
 `),ht("left-end",`
 left: calc(${Tn} / -2);
 bottom: calc(${Mt("left-end")} + var(--v-offset-top));
 `),ht("right-start",`
 right: calc(${Tn} / -2);
 top: calc(${Mt("right-start")} - var(--v-offset-top));
 `),ht("right",`
 right: calc(${Tn} / -2);
 transform: translateY(calc(${Tn} / -2)) rotate(45deg);
 top: 50%;
 `),ht("right-end",`
 right: calc(${Tn} / -2);
 bottom: calc(${Mt("right-end")} + var(--v-offset-top));
 `),...P2({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),o=t?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",s=`calc((${`var(--v-target-${o}, 0px)`} - ${Tn}) / 2)`,l=Mt(r);return O(`[v-placement="${r}"] >`,[ne("popover-shared",[Q("center-arrow",[ne("popover-arrow",`${n}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function Mt(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ht(e,n){const t=e.split("-")[0],o=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return O(`[v-placement="${e}"] >`,[ne("popover-shared",`
 margin-${Ws[t]}: var(--n-space);
 `,[Q("show-arrow",`
 margin-${Ws[t]}: var(--n-space-arrow);
 `),Q("overlap",`
 margin: 0;
 `),Py("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${Ws[t]}: auto;
 ${o}
 `,[ne("popover-arrow",n)])])])}const Vp=Object.assign(Object.assign({},Ie.props),{to:gr.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Kp=({arrowStyle:e,clsPrefix:n})=>x("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},x("div",{class:`${n}-popover-arrow`,style:e})),IP=ge({name:"PopoverBody",inheritAttrs:!1,props:Vp,setup(e,{slots:n,attrs:t}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i}=fn(e),a=Ie("Popover","-popover",DP,yo,e,r),s=K(null),l=De("NPopover"),c=K(null),d=K(e.show),u=K(!1);lo(()=>{const{show:v}=e;v&&!$y()&&!e.internalDeactivateImmediately&&(u.value=!0)});const p=G(()=>{const{trigger:v,onClickoutside:w}=e,H=[],{positionManuallyRef:{value:z}}=l;return z||(v==="click"&&!w&&H.push([hl,k,void 0,{capture:!0}]),v==="hover"&&H.push([nx,I])),w&&H.push([hl,k,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&u.value)&&H.push([mr,e.show]),H}),b=G(()=>{const v=e.width==="trigger"?void 0:aa(e.width),w=[];v&&w.push({width:v});const{maxWidth:H,minWidth:z}=e;return H&&w.push({maxWidth:aa(H)}),z&&w.push({maxWidth:aa(z)}),i||w.push(h.value),w}),h=G(()=>{const{common:{cubicBezierEaseInOut:v,cubicBezierEaseIn:w,cubicBezierEaseOut:H},self:{space:z,spaceArrow:Y,padding:E,fontSize:te,textColor:L,dividerColor:M,color:se,boxShadow:j,borderRadius:ie,arrowHeight:$,arrowOffset:q,arrowOffsetVertical:Pe}}=a.value;return{"--n-box-shadow":j,"--n-bezier":v,"--n-bezier-ease-in":w,"--n-bezier-ease-out":H,"--n-font-size":te,"--n-text-color":L,"--n-color":se,"--n-divider-color":M,"--n-border-radius":ie,"--n-arrow-height":$,"--n-arrow-offset":q,"--n-arrow-offset-vertical":Pe,"--n-padding":E,"--n-space":z,"--n-space-arrow":Y}}),y=i?Dn("popover",void 0,h,e):void 0;l.setBodyInstance({syncPosition:m}),kn(()=>{l.setBodyInstance(null)}),pn(Xe(e,"show"),v=>{e.animated||(v?d.value=!0:d.value=!1)});function m(){var v;(v=s.value)===null||v===void 0||v.syncPosition()}function g(v){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(v)}function S(v){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(v)}function I(v){e.trigger==="hover"&&!T().contains(ui(v))&&l.handleMouseMoveOutside(v)}function k(v){(e.trigger==="click"&&!T().contains(ui(v))||e.onClickoutside)&&l.handleClickOutside(v)}function T(){return l.getTriggerElement()}Ye(Si,c),Ye(Ka,null),Ye(Va,null);function A(){if(y==null||y.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&u.value))return null;let w;const H=l.internalRenderBodyRef.value,{value:z}=r;if(H)w=H([`${z}-popover-shared`,y==null?void 0:y.themeClass.value,e.overlap&&`${z}-popover-shared--overlap`,e.showArrow&&`${z}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${z}-popover-shared--center-arrow`],c,b.value,g,S);else{const{value:Y}=l.extraClassRef,{internalTrapFocus:E}=e,te=!cl(n.header)||!cl(n.footer),L=()=>{var M;const se=te?x(Je,null,zn(n.header,$=>$?x("div",{class:`${z}-popover__header`,style:e.headerStyle},$):null),zn(n.default,$=>$?x("div",{class:`${z}-popover__content`,style:e.contentStyle},n):null),zn(n.footer,$=>$?x("div",{class:`${z}-popover__footer`,style:e.footerStyle},$):null)):e.scrollable?(M=n.default)===null||M===void 0?void 0:M.call(n):x("div",{class:`${z}-popover__content`,style:e.contentStyle},n),j=e.scrollable?x(Wp,{contentClass:te?void 0:`${z}-popover__content`,contentStyle:te?void 0:e.contentStyle},{default:()=>se}):se,ie=e.showArrow?Kp({arrowStyle:e.arrowStyle,clsPrefix:z}):null;return[j,ie]};w=x("div",Ht({class:[`${z}-popover`,`${z}-popover-shared`,y==null?void 0:y.themeClass.value,Y.map(M=>`${z}-${M}`),{[`${z}-popover--scrollable`]:e.scrollable,[`${z}-popover--show-header-or-footer`]:te,[`${z}-popover--raw`]:e.raw,[`${z}-popover-shared--overlap`]:e.overlap,[`${z}-popover-shared--show-arrow`]:e.showArrow,[`${z}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:b.value,onKeydown:l.handleKeydown,onMouseenter:g,onMouseleave:S},t),E?x(Bh,{active:e.show,autoFocus:!0},{default:L}):L())}return co(w,p.value)}return{displayed:u,namespace:o,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:gr(e),followerEnabled:d,renderContentNode:A}},render(){return x(Ah,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===gr.tdkey},{default:()=>this.animated?x(bt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),HP=Object.keys(Vp),_P={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function EP(e,n,t){_P[n].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],i=t[o];r?e.props[o]=(...a)=>{r(...a),i(...a)}:e.props[o]=i})}const zP=Gn("").type,ns={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:gr.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},MP=Object.assign(Object.assign(Object.assign({},Ie.props),ns),{internalOnAfterLeave:Function,internalRenderBody:Function}),Ta=ge({name:"Popover",inheritAttrs:!1,props:MP,__popover__:!0,setup(e){const n=wi(),t=K(null),o=G(()=>e.show),r=K(e.defaultShow),i=tc(o,r),a=An(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:L}=e;return!!(L!=null&&L())},l=()=>s()?!1:i.value,c=yh(e,["arrow","showArrow"]),d=G(()=>e.overlap?!1:c.value);let u=null;const p=K(null),b=K(null),h=An(()=>e.x!==void 0&&e.y!==void 0);function y(L){const{"onUpdate:show":M,onUpdateShow:se,onShow:j,onHide:ie}=e;r.value=L,M&&nn(M,L),se&&nn(se,L),L&&j&&nn(j,!0),L&&ie&&nn(ie,!1)}function m(){u&&u.syncPosition()}function g(){const{value:L}=p;L&&(window.clearTimeout(L),p.value=null)}function S(){const{value:L}=b;L&&(window.clearTimeout(L),b.value=null)}function I(){const L=s();if(e.trigger==="focus"&&!L){if(l())return;y(!0)}}function k(){const L=s();if(e.trigger==="focus"&&!L){if(!l())return;y(!1)}}function T(){const L=s();if(e.trigger==="hover"&&!L){if(S(),p.value!==null||l())return;const M=()=>{y(!0),p.value=null},{delay:se}=e;se===0?M():p.value=window.setTimeout(M,se)}}function A(){const L=s();if(e.trigger==="hover"&&!L){if(g(),b.value!==null||!l())return;const M=()=>{y(!1),b.value=null},{duration:se}=e;se===0?M():b.value=window.setTimeout(M,se)}}function v(){A()}function w(L){var M;l()&&(e.trigger==="click"&&(g(),S(),y(!1)),(M=e.onClickoutside)===null||M===void 0||M.call(e,L))}function H(){if(e.trigger==="click"&&!s()){g(),S();const L=!l();y(L)}}function z(L){e.internalTrapFocus&&L.key==="Escape"&&(g(),S(),y(!1))}function Y(L){r.value=L}function E(){var L;return(L=t.value)===null||L===void 0?void 0:L.targetRef}function te(L){u=L}return Ye("NPopover",{getTriggerElement:E,handleKeydown:z,handleMouseEnter:T,handleMouseLeave:A,handleClickOutside:w,handleMouseMoveOutside:v,setBodyInstance:te,positionManuallyRef:h,isMountedRef:n,zIndexRef:Xe(e,"zIndex"),extraClassRef:Xe(e,"internalExtraClass"),internalRenderBodyRef:Xe(e,"internalRenderBody")}),lo(()=>{i.value&&s()&&y(!1)}),{binderInstRef:t,positionManually:h,mergedShowConsideringDisabledProp:a,uncontrolledShow:r,mergedShowArrow:d,getMergedShow:l,setShow:Y,handleClick:H,handleMouseEnter:T,handleMouseLeave:A,handleFocus:I,handleBlur:k,syncPosition:m}},render(){var e;const{positionManually:n,$slots:t}=this;let o,r=!1;if(!n&&(t.activator?o=ll(t,"activator"):o=ll(t,"trigger"),o)){o=gt(o),o=o.type===zP?x("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,s=[i,...a],l={onBlur:c=>{s.forEach(d=>{d.onBlur(c)})},onFocus:c=>{s.forEach(d=>{d.onFocus(c)})},onClick:c=>{s.forEach(d=>{d.onClick(c)})},onMouseenter:c=>{s.forEach(d=>{d.onMouseenter(c)})},onMouseleave:c=>{s.forEach(d=>{d.onMouseleave(c)})}};EP(o,a?"nested":n?"manual":this.trigger,l)}}return x(Th,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?co(x("div",{style:{position:"fixed",inset:0}}),[[oc,{enabled:i,zIndex:this.zIndex}]]):null,n?null:x(kh,null,{default:()=>o}),x(IP,jo(this.$props,HP,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,s;return(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a)},header:()=>{var a,s;return(s=(a=this.$slots).header)===null||s===void 0?void 0:s.call(a)},footer:()=>{var a,s;return(s=(a=this.$slots).footer)===null||s===void 0?void 0:s.call(a)}})]}})}}),Up={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},LP={name:"Tag",common:le,self(e){const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:d,tagColor:u,opacityDisabled:p,closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:y,closeColorHover:m,closeColorPressed:g,borderRadiusSmall:S,fontSizeMini:I,fontSizeTiny:k,fontSizeSmall:T,fontSizeMedium:A,heightMini:v,heightTiny:w,heightSmall:H,heightMedium:z,buttonColor2Hover:Y,buttonColor2Pressed:E,fontWeightStrong:te}=e;return Object.assign(Object.assign({},Up),{closeBorderRadius:S,heightTiny:v,heightSmall:w,heightMedium:H,heightLarge:z,borderRadius:S,opacityDisabled:p,fontSizeTiny:I,fontSizeSmall:k,fontSizeMedium:T,fontSizeLarge:A,fontWeightStrong:te,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:Y,colorPressedCheckable:E,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${d}`,textColor:n,color:u,colorBordered:"#0000",closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:y,closeColorHover:m,closeColorPressed:g,borderPrimary:`1px solid ${V(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:V(r,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:vn(r,{lightness:.7}),closeIconColorHoverPrimary:vn(r,{lightness:.7}),closeIconColorPressedPrimary:vn(r,{lightness:.7}),closeColorHoverPrimary:V(r,{alpha:.16}),closeColorPressedPrimary:V(r,{alpha:.12}),borderInfo:`1px solid ${V(i,{alpha:.3})}`,textColorInfo:i,colorInfo:V(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:vn(i,{alpha:.7}),closeIconColorHoverInfo:vn(i,{alpha:.7}),closeIconColorPressedInfo:vn(i,{alpha:.7}),closeColorHoverInfo:V(i,{alpha:.16}),closeColorPressedInfo:V(i,{alpha:.12}),borderSuccess:`1px solid ${V(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:V(a,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:vn(a,{alpha:.7}),closeIconColorHoverSuccess:vn(a,{alpha:.7}),closeIconColorPressedSuccess:vn(a,{alpha:.7}),closeColorHoverSuccess:V(a,{alpha:.16}),closeColorPressedSuccess:V(a,{alpha:.12}),borderWarning:`1px solid ${V(s,{alpha:.3})}`,textColorWarning:s,colorWarning:V(s,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:vn(s,{alpha:.7}),closeIconColorHoverWarning:vn(s,{alpha:.7}),closeIconColorPressedWarning:vn(s,{alpha:.7}),closeColorHoverWarning:V(s,{alpha:.16}),closeColorPressedWarning:V(s,{alpha:.11}),borderError:`1px solid ${V(l,{alpha:.3})}`,textColorError:l,colorError:V(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:vn(l,{alpha:.7}),closeIconColorHoverError:vn(l,{alpha:.7}),closeIconColorPressedError:vn(l,{alpha:.7}),closeColorHoverError:V(l,{alpha:.16}),closeColorPressedError:V(l,{alpha:.12})})}},qp=LP,OP=e=>{const{textColor2:n,primaryColorHover:t,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:d,opacityDisabled:u,tagColor:p,closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:y,borderRadiusSmall:m,fontSizeMini:g,fontSizeTiny:S,fontSizeSmall:I,fontSizeMedium:k,heightMini:T,heightTiny:A,heightSmall:v,heightMedium:w,closeColorHover:H,closeColorPressed:z,buttonColor2Hover:Y,buttonColor2Pressed:E,fontWeightStrong:te}=e;return Object.assign(Object.assign({},Up),{closeBorderRadius:m,heightTiny:T,heightSmall:A,heightMedium:v,heightLarge:w,borderRadius:m,opacityDisabled:u,fontSizeTiny:g,fontSizeSmall:S,fontSizeMedium:I,fontSizeLarge:k,fontWeightStrong:te,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:Y,colorPressedCheckable:E,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:o,border:`1px solid ${d}`,textColor:n,color:p,colorBordered:"rgb(250, 250, 252)",closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:y,closeColorHover:H,closeColorPressed:z,borderPrimary:`1px solid ${V(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:V(r,{alpha:.12}),colorBorderedPrimary:V(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:V(r,{alpha:.12}),closeColorPressedPrimary:V(r,{alpha:.18}),borderInfo:`1px solid ${V(i,{alpha:.3})}`,textColorInfo:i,colorInfo:V(i,{alpha:.12}),colorBorderedInfo:V(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:V(i,{alpha:.12}),closeColorPressedInfo:V(i,{alpha:.18}),borderSuccess:`1px solid ${V(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:V(a,{alpha:.12}),colorBorderedSuccess:V(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:V(a,{alpha:.12}),closeColorPressedSuccess:V(a,{alpha:.18}),borderWarning:`1px solid ${V(s,{alpha:.35})}`,textColorWarning:s,colorWarning:V(s,{alpha:.15}),colorBorderedWarning:V(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:V(s,{alpha:.12}),closeColorPressedWarning:V(s,{alpha:.18}),borderError:`1px solid ${V(l,{alpha:.23})}`,textColorError:l,colorError:V(l,{alpha:.1}),colorBorderedError:V(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:V(l,{alpha:.12}),closeColorPressedError:V(l,{alpha:.18})})},BP={name:"Tag",common:ce,self:OP},Zp=BP,FP=ne("base-clear",`
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
 `,[yi({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Tl=ge({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Sr("-base-clear",FP,Xe(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return x("div",{class:`${e}-base-clear`},x(Ya,null,{default:()=>{var n,t;return this.show?x("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Oo(this.$slots.icon,()=>[x(po,{clsPrefix:e},{default:()=>x(Hk,null)})])):x("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(n=this.$slots).placeholder)===null||t===void 0?void 0:t.call(n))}}))}}),WP=ge({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:t}=e;return x(xc,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?x(Tl,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>x(po,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Oo(n.default,()=>[x(Ik,null)])})}):null})}}}),Xp={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},jP=e=>{const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:u,borderColor:p,iconColor:b,iconColorDisabled:h,clearColor:y,clearColorHover:m,clearColorPressed:g,placeholderColor:S,placeholderColorDisabled:I,fontSizeTiny:k,fontSizeSmall:T,fontSizeMedium:A,fontSizeLarge:v,heightTiny:w,heightSmall:H,heightMedium:z,heightLarge:Y}=e;return Object.assign(Object.assign({},Xp),{fontSizeTiny:k,fontSizeSmall:T,fontSizeMedium:A,fontSizeLarge:v,heightTiny:w,heightSmall:H,heightMedium:z,heightLarge:Y,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:S,placeholderColorDisabled:I,color:r,colorDisabled:i,colorActive:r,border:`1px solid ${p}`,borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${V(a,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${V(a,{alpha:.2})}`,caretColor:a,arrowColor:b,arrowColorDisabled:h,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${V(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${V(l,{alpha:.2})}`,colorActiveWarning:r,caretColorWarning:l,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${u}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${V(d,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${V(d,{alpha:.2})}`,colorActiveError:r,caretColorError:d,clearColor:y,clearColorHover:m,clearColorPressed:g})},NP={name:"InternalSelection",common:ce,peers:{Popover:yo},self:jP},Sc=NP,GP={name:"InternalSelection",common:le,peers:{Popover:Xo},self(e){const{borderRadius:n,textColor2:t,textColorDisabled:o,inputColor:r,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:u,iconColor:p,iconColorDisabled:b,clearColor:h,clearColorHover:y,clearColorPressed:m,placeholderColor:g,placeholderColorDisabled:S,fontSizeTiny:I,fontSizeSmall:k,fontSizeMedium:T,fontSizeLarge:A,heightTiny:v,heightSmall:w,heightMedium:H,heightLarge:z}=e;return Object.assign(Object.assign({},Xp),{fontSizeTiny:I,fontSizeSmall:k,fontSizeMedium:T,fontSizeLarge:A,heightTiny:v,heightSmall:w,heightMedium:H,heightLarge:z,borderRadius:n,textColor:t,textColorDisabled:o,placeholderColor:g,placeholderColorDisabled:S,color:r,colorDisabled:i,colorActive:V(a,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${V(a,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${V(a,{alpha:.4})}`,caretColor:a,arrowColor:p,arrowColorDisabled:b,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${V(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${V(l,{alpha:.4})}`,colorActiveWarning:V(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${u}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${V(d,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${V(d,{alpha:.4})}`,colorActiveError:V(d,{alpha:.1}),caretColorError:d,clearColor:h,clearColorHover:y,clearColorPressed:m})}},Tc=GP,{cubicBezierEaseInOut:Qt}=vo;function VP({duration:e=".2s",delay:n=".1s"}={}){return[O("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),O("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),O("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Qt},
 max-width ${e} ${Qt} ${n},
 margin-left ${e} ${Qt} ${n},
 margin-right ${e} ${Qt} ${n};
 `),O("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Qt} ${n},
 max-width ${e} ${Qt},
 margin-left ${e} ${Qt},
 margin-right ${e} ${Qt};
 `)]}const Jp={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},KP={name:"Alert",common:le,self(e){const{lineHeight:n,borderRadius:t,fontWeightStrong:o,dividerColor:r,inputColor:i,textColor1:a,textColor2:s,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,infoColorSuppl:b,successColorSuppl:h,warningColorSuppl:y,errorColorSuppl:m,fontSize:g}=e;return Object.assign(Object.assign({},Jp),{fontSize:g,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${r}`,color:i,titleTextColor:a,iconColor:s,contentTextColor:s,closeBorderRadius:t,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,borderInfo:`1px solid ${V(b,{alpha:.35})}`,colorInfo:V(b,{alpha:.25}),titleTextColorInfo:a,iconColorInfo:b,contentTextColorInfo:s,closeColorHoverInfo:l,closeColorPressedInfo:c,closeIconColorInfo:d,closeIconColorHoverInfo:u,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${V(h,{alpha:.35})}`,colorSuccess:V(h,{alpha:.25}),titleTextColorSuccess:a,iconColorSuccess:h,contentTextColorSuccess:s,closeColorHoverSuccess:l,closeColorPressedSuccess:c,closeIconColorSuccess:d,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${V(y,{alpha:.35})}`,colorWarning:V(y,{alpha:.25}),titleTextColorWarning:a,iconColorWarning:y,contentTextColorWarning:s,closeColorHoverWarning:l,closeColorPressedWarning:c,closeIconColorWarning:d,closeIconColorHoverWarning:u,closeIconColorPressedWarning:p,borderError:`1px solid ${V(m,{alpha:.35})}`,colorError:V(m,{alpha:.25}),titleTextColorError:a,iconColorError:m,contentTextColorError:s,closeColorHoverError:l,closeColorPressedError:c,closeIconColorError:d,closeIconColorHoverError:u,closeIconColorPressedError:p})}},UP=KP,qP=e=>{const{lineHeight:n,borderRadius:t,fontWeightStrong:o,baseColor:r,dividerColor:i,actionColor:a,textColor1:s,textColor2:l,closeColorHover:c,closeColorPressed:d,closeIconColor:u,closeIconColorHover:p,closeIconColorPressed:b,infoColor:h,successColor:y,warningColor:m,errorColor:g,fontSize:S}=e;return Object.assign(Object.assign({},Jp),{fontSize:S,lineHeight:n,titleFontWeight:o,borderRadius:t,border:`1px solid ${i}`,color:a,titleTextColor:s,iconColor:l,contentTextColor:l,closeBorderRadius:t,closeColorHover:c,closeColorPressed:d,closeIconColor:u,closeIconColorHover:p,closeIconColorPressed:b,borderInfo:`1px solid ${ve(r,V(h,{alpha:.25}))}`,colorInfo:ve(r,V(h,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:h,contentTextColorInfo:l,closeColorHoverInfo:c,closeColorPressedInfo:d,closeIconColorInfo:u,closeIconColorHoverInfo:p,closeIconColorPressedInfo:b,borderSuccess:`1px solid ${ve(r,V(y,{alpha:.25}))}`,colorSuccess:ve(r,V(y,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:y,contentTextColorSuccess:l,closeColorHoverSuccess:c,closeColorPressedSuccess:d,closeIconColorSuccess:u,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:b,borderWarning:`1px solid ${ve(r,V(m,{alpha:.33}))}`,colorWarning:ve(r,V(m,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:m,contentTextColorWarning:l,closeColorHoverWarning:c,closeColorPressedWarning:d,closeIconColorWarning:u,closeIconColorHoverWarning:p,closeIconColorPressedWarning:b,borderError:`1px solid ${ve(r,V(g,{alpha:.25}))}`,colorError:ve(r,V(g,{alpha:.08})),titleTextColorError:s,iconColorError:g,contentTextColorError:l,closeColorHoverError:c,closeColorPressedError:d,closeIconColorError:u,closeIconColorHoverError:p,closeIconColorPressedError:b})},ZP={name:"Alert",common:ce,self:qP},XP=ZP,{cubicBezierEaseInOut:$t,cubicBezierEaseOut:JP,cubicBezierEaseIn:YP}=vo;function QP({overflow:e="hidden",duration:n=".3s",originalTransition:t="",leavingDelay:o="0s",foldPadding:r=!1,enterToProps:i=void 0,leaveToProps:a=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",c=s?"enter":"leave";return[O(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),O(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},a),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:r?"0 !important":void 0,paddingBottom:r?"0 !important":void 0})),O(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${$t} ${o},
 opacity ${n} ${JP} ${o},
 margin-top ${n} ${$t} ${o},
 margin-bottom ${n} ${$t} ${o},
 padding-top ${n} ${$t} ${o},
 padding-bottom ${n} ${$t} ${o}
 ${t?","+t:""}
 `),O(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${n} ${$t},
 opacity ${n} ${YP},
 margin-top ${n} ${$t},
 margin-bottom ${n} ${$t},
 padding-top ${n} ${$t},
 padding-bottom ${n} ${$t}
 ${t?","+t:""}
 `)]}const e$={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},Yp=e=>{const{borderRadius:n,railColor:t,primaryColor:o,primaryColorHover:r,primaryColorPressed:i,textColor2:a}=e;return Object.assign(Object.assign({},e$),{borderRadius:n,railColor:t,railColorActive:o,linkColor:V(o,{alpha:.15}),linkTextColor:a,linkTextColorHover:r,linkTextColorPressed:i,linkTextColorActive:o})},n$={name:"Anchor",common:ce,self:Yp},t$=n$,o$={name:"Anchor",common:le,self:Yp},r$=o$,i$=go&&"chrome"in window;go&&navigator.userAgent.includes("Firefox");const Qp=go&&navigator.userAgent.includes("Safari")&&!i$,em={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},a$={name:"Input",common:le,self(e){const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:u,borderRadius:p,lineHeight:b,fontSizeTiny:h,fontSizeSmall:y,fontSizeMedium:m,fontSizeLarge:g,heightTiny:S,heightSmall:I,heightMedium:k,heightLarge:T,clearColor:A,clearColorHover:v,clearColorPressed:w,placeholderColor:H,placeholderColorDisabled:z,iconColor:Y,iconColorDisabled:E,iconColorHover:te,iconColorPressed:L}=e;return Object.assign(Object.assign({},em),{countTextColorDisabled:o,countTextColor:t,heightTiny:S,heightSmall:I,heightMedium:k,heightLarge:T,fontSizeTiny:h,fontSizeSmall:y,fontSizeMedium:m,fontSizeLarge:g,lineHeight:b,lineHeightTextarea:b,borderRadius:p,iconSize:"16px",groupLabelColor:a,textColor:n,textColorDisabled:o,textDecorationColor:n,groupLabelTextColor:n,caretColor:r,placeholderColor:H,placeholderColorDisabled:z,color:a,colorDisabled:s,colorFocus:V(r,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${V(r,{alpha:.3})}`,loadingColor:r,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:V(l,{alpha:.1}),borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 8px 0 ${V(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,colorFocusError:V(d,{alpha:.1}),borderFocusError:`1px solid ${u}`,boxShadowFocusError:`0 0 8px 0 ${V(d,{alpha:.3})}`,caretColorError:d,clearColor:A,clearColorHover:v,clearColorPressed:w,iconColor:Y,iconColorDisabled:E,iconColorHover:te,iconColorPressed:L,suffixTextColor:n})}},vt=a$,s$=e=>{const{textColor2:n,textColor3:t,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:s,borderColor:l,warningColor:c,warningColorHover:d,errorColor:u,errorColorHover:p,borderRadius:b,lineHeight:h,fontSizeTiny:y,fontSizeSmall:m,fontSizeMedium:g,fontSizeLarge:S,heightTiny:I,heightSmall:k,heightMedium:T,heightLarge:A,actionColor:v,clearColor:w,clearColorHover:H,clearColorPressed:z,placeholderColor:Y,placeholderColorDisabled:E,iconColor:te,iconColorDisabled:L,iconColorHover:M,iconColorPressed:se}=e;return Object.assign(Object.assign({},em),{countTextColorDisabled:o,countTextColor:t,heightTiny:I,heightSmall:k,heightMedium:T,heightLarge:A,fontSizeTiny:y,fontSizeSmall:m,fontSizeMedium:g,fontSizeLarge:S,lineHeight:h,lineHeightTextarea:h,borderRadius:b,iconSize:"16px",groupLabelColor:v,groupLabelTextColor:n,textColor:n,textColorDisabled:o,textDecorationColor:n,caretColor:r,placeholderColor:Y,placeholderColorDisabled:E,color:a,colorDisabled:s,colorFocus:a,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${V(r,{alpha:.2})}`,loadingColor:r,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:a,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${V(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${p}`,colorFocusError:a,borderFocusError:`1px solid ${p}`,boxShadowFocusError:`0 0 0 2px ${V(u,{alpha:.2})}`,caretColorError:u,clearColor:w,clearColorHover:H,clearColorPressed:z,iconColor:te,iconColorDisabled:L,iconColorHover:M,iconColorPressed:se,suffixTextColor:n})},l$={name:"Input",common:ce,self:s$},dt=l$,nm="n-input";function c$(e){let n=0;for(const t of e)n++;return n}function Qi(e){return e===""||e==null}function d$(e){const n=K(null);function t(){const{value:i}=e;if(!(i!=null&&i.focus)){r();return}const{selectionStart:a,selectionEnd:s,value:l}=i;if(a==null||s==null){r();return}n.value={start:a,end:s,beforeText:l.slice(0,a),afterText:l.slice(s)}}function o(){var i;const{value:a}=n,{value:s}=e;if(!a||!s)return;const{value:l}=s,{start:c,beforeText:d,afterText:u}=a;let p=l.length;if(l.endsWith(u))p=l.length-u.length;else if(l.startsWith(d))p=d.length;else{const b=d[c-1],h=l.indexOf(b,c-1);h!==-1&&(p=h+1)}(i=s.setSelectionRange)===null||i===void 0||i.call(s,p,p)}function r(){n.value=null}return pn(e,r),{recordCursor:t,restoreCursor:o}}const Lu=ge({name:"InputWordCount",setup(e,{slots:n}){const{mergedValueRef:t,maxlengthRef:o,mergedClsPrefixRef:r,countGraphemesRef:i}=De(nm),a=G(()=>{const{value:s}=t;return s===null||Array.isArray(s)?0:(i.value||c$)(s)});return()=>{const{value:s}=o,{value:l}=t;return x("span",{class:`${r.value}-input-word-count`},ty(n.default,{value:l===null||Array.isArray(l)?"":l},()=>[s===void 0?a.value:`${a.value} / ${s}`]))}}}),u$=ne("input",`
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
 `),O("&:-webkit-autofill ~",[F("placeholder","display: none;")])]),Q("round",[Mn("textarea","border-radius: calc(var(--n-height) / 2);")]),F("placeholder",`
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
 `)]),Q("textarea",[F("placeholder","overflow: visible;")]),Mn("autosize","width: 100%;"),Q("autosize",[F("textarea-el, input-el",`
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
 `)])]),Mn("textarea",[F("placeholder","white-space: nowrap;")]),F("eye",`
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
 `)])]),Mn("disabled",[F("eye",`
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
 `),["warning","error"].map(e=>Q(`${e}-status`,[Mn("disabled",[ne("base-loading",`
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
 `)])])]))]),f$=ne("input",[Q("disabled",[F("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),h$=Object.assign(Object.assign({},Ie.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),p$=ge({name:"Input",props:h$,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=fn(e),i=Ie("Input","-input",u$,dt,e,n);Qp&&Sr("-input-safari",f$,n);const a=K(null),s=K(null),l=K(null),c=K(null),d=K(null),u=K(null),p=K(null),b=d$(p),h=K(null),{localeRef:y}=Pk("Input"),m=K(e.defaultValue),g=Xe(e,"value"),S=tc(g,m),I=Wh(e),{mergedSizeRef:k,mergedDisabledRef:T,mergedStatusRef:A}=I,v=K(!1),w=K(!1),H=K(!1),z=K(!1);let Y=null;const E=G(()=>{const{placeholder:D,pair:Z}=e;return Z?Array.isArray(D)?D:D===void 0?["",""]:[D,D]:D===void 0?[y.value.placeholder]:[D]}),te=G(()=>{const{value:D}=H,{value:Z}=S,{value:Se}=E;return!D&&(Qi(Z)||Array.isArray(Z)&&Qi(Z[0]))&&Se[0]}),L=G(()=>{const{value:D}=H,{value:Z}=S,{value:Se}=E;return!D&&Se[1]&&(Qi(Z)||Array.isArray(Z)&&Qi(Z[1]))}),M=An(()=>e.internalForceFocus||v.value),se=An(()=>{if(T.value||e.readonly||!e.clearable||!M.value&&!w.value)return!1;const{value:D}=S,{value:Z}=M;return e.pair?!!(Array.isArray(D)&&(D[0]||D[1]))&&(w.value||Z):!!D&&(w.value||Z)}),j=G(()=>{const{showPasswordOn:D}=e;if(D)return D;if(e.showPasswordToggle)return"click"}),ie=K(!1),$=G(()=>{const{textDecoration:D}=e;return D?Array.isArray(D)?D.map(Z=>({textDecoration:Z})):[{textDecoration:D}]:["",""]}),q=K(void 0),Pe=()=>{var D,Z;if(e.type==="textarea"){const{autosize:Se}=e;if(Se&&(q.value=(Z=(D=h.value)===null||D===void 0?void 0:D.$el)===null||Z===void 0?void 0:Z.offsetWidth),!s.value||typeof Se=="boolean")return;const{paddingTop:We,paddingBottom:dn,lineHeight:on}=window.getComputedStyle(s.value),Et=Number(We.slice(0,-2)),Tt=Number(dn.slice(0,-2)),zt=Number(on.slice(0,-2)),{value:xo}=l;if(!xo)return;if(Se.minRows){const Co=Math.max(Se.minRows,1),Rr=`${Et+Tt+zt*Co}px`;xo.style.minHeight=Rr}if(Se.maxRows){const Co=`${Et+Tt+zt*Se.maxRows}px`;xo.style.maxHeight=Co}}},Ee=G(()=>{const{maxlength:D}=e;return D===void 0?void 0:Number(D)});Un(()=>{const{value:D}=S;Array.isArray(D)||Sn(D)});const Pn=Gt().proxy;function Be(D){const{onUpdateValue:Z,"onUpdate:value":Se,onInput:We}=e,{nTriggerFormInput:dn}=I;Z&&nn(Z,D),Se&&nn(Se,D),We&&nn(We,D),m.value=D,dn()}function Oe(D){const{onChange:Z}=e,{nTriggerFormChange:Se}=I;Z&&nn(Z,D),m.value=D,Se()}function we(D){const{onBlur:Z}=e,{nTriggerFormBlur:Se}=I;Z&&nn(Z,D),Se()}function ze(D){const{onFocus:Z}=e,{nTriggerFormFocus:Se}=I;Z&&nn(Z,D),Se()}function Xn(D){const{onClear:Z}=e;Z&&nn(Z,D)}function Ae(D){const{onInputBlur:Z}=e;Z&&nn(Z,D)}function Jn(D){const{onInputFocus:Z}=e;Z&&nn(Z,D)}function Ze(){const{onDeactivate:D}=e;D&&nn(D)}function P(){const{onActivate:D}=e;D&&nn(D)}function R(D){const{onClick:Z}=e;Z&&nn(Z,D)}function B(D){const{onWrapperFocus:Z}=e;Z&&nn(Z,D)}function U(D){const{onWrapperBlur:Z}=e;Z&&nn(Z,D)}function X(){H.value=!0}function ae(D){H.value=!1,D.target===u.value?de(D,1):de(D,0)}function de(D,Z=0,Se="input"){const We=D.target.value;if(Sn(We),D instanceof InputEvent&&!D.isComposing&&(H.value=!1),e.type==="textarea"){const{value:on}=h;on&&on.syncUnifiedContainer()}if(Y=We,H.value)return;b.recordCursor();const dn=re(We);if(dn)if(!e.pair)Se==="input"?Be(We):Oe(We);else{let{value:on}=S;Array.isArray(on)?on=[on[0],on[1]]:on=["",""],on[Z]=We,Se==="input"?Be(on):Oe(on)}Pn.$forceUpdate(),dn||Vn(b.restoreCursor)}function re(D){const{countGraphemes:Z,maxlength:Se,minlength:We}=e;if(Z){let on;if(Se!==void 0&&(on===void 0&&(on=Z(D)),on>Number(Se))||We!==void 0&&(on===void 0&&(on=Z(D)),on<Number(Se)))return!1}const{allowInput:dn}=e;return typeof dn=="function"?dn(D):!0}function ee(D){Ae(D),D.relatedTarget===a.value&&Ze(),D.relatedTarget!==null&&(D.relatedTarget===d.value||D.relatedTarget===u.value||D.relatedTarget===s.value)||(z.value=!1),oe(D,"blur"),p.value=null}function N(D,Z){Jn(D),v.value=!0,z.value=!0,P(),oe(D,"focus"),Z===0?p.value=d.value:Z===1?p.value=u.value:Z===2&&(p.value=s.value)}function xe(D){e.passivelyActivated&&(U(D),oe(D,"blur"))}function me(D){e.passivelyActivated&&(v.value=!0,B(D),oe(D,"focus"))}function oe(D,Z){D.relatedTarget!==null&&(D.relatedTarget===d.value||D.relatedTarget===u.value||D.relatedTarget===s.value||D.relatedTarget===a.value)||(Z==="focus"?(ze(D),v.value=!0):Z==="blur"&&(we(D),v.value=!1))}function fe(D,Z){de(D,Z,"change")}function ye(D){R(D)}function je(D){Xn(D),e.pair?(Be(["",""]),Oe(["",""])):(Be(""),Oe(""))}function Me(D){const{onMousedown:Z}=e;Z&&Z(D);const{tagName:Se}=D.target;if(Se!=="INPUT"&&Se!=="TEXTAREA"){if(e.resizable){const{value:We}=a;if(We){const{left:dn,top:on,width:Et,height:Tt}=We.getBoundingClientRect(),zt=14;if(dn+Et-zt<D.clientX&&D.clientX<dn+Et&&on+Tt-zt<D.clientY&&D.clientY<on+Tt)return}}D.preventDefault(),v.value||J()}}function Ne(){var D;w.value=!0,e.type==="textarea"&&((D=h.value)===null||D===void 0||D.handleMouseEnterWrapper())}function an(){var D;w.value=!1,e.type==="textarea"&&((D=h.value)===null||D===void 0||D.handleMouseLeaveWrapper())}function Yn(){T.value||j.value==="click"&&(ie.value=!ie.value)}function qt(D){if(T.value)return;D.preventDefault();const Z=We=>{We.preventDefault(),tn("mouseup",document,Z)};if(un("mouseup",document,Z),j.value!=="mousedown")return;ie.value=!0;const Se=()=>{ie.value=!1,tn("mouseup",document,Se)};un("mouseup",document,Se)}function ut(D){var Z;switch((Z=e.onKeydown)===null||Z===void 0||Z.call(e,D),D.key){case"Escape":Cn();break;case"Enter":rt(D);break}}function rt(D){var Z,Se;if(e.passivelyActivated){const{value:We}=z;if(We){e.internalDeactivateOnEnter&&Cn();return}D.preventDefault(),e.type==="textarea"?(Z=s.value)===null||Z===void 0||Z.focus():(Se=d.value)===null||Se===void 0||Se.focus()}}function Cn(){e.passivelyActivated&&(z.value=!1,Vn(()=>{var D;(D=a.value)===null||D===void 0||D.focus()}))}function J(){var D,Z,Se;T.value||(e.passivelyActivated?(D=a.value)===null||D===void 0||D.focus():((Z=s.value)===null||Z===void 0||Z.focus(),(Se=d.value)===null||Se===void 0||Se.focus()))}function pe(){var D;!((D=a.value)===null||D===void 0)&&D.contains(document.activeElement)&&document.activeElement.blur()}function Te(){var D,Z;(D=s.value)===null||D===void 0||D.select(),(Z=d.value)===null||Z===void 0||Z.select()}function Le(){T.value||(s.value?s.value.focus():d.value&&d.value.focus())}function Ue(){const{value:D}=a;D!=null&&D.contains(document.activeElement)&&D!==document.activeElement&&Cn()}function wn(D){if(e.type==="textarea"){const{value:Z}=s;Z==null||Z.scrollTo(D)}else{const{value:Z}=d;Z==null||Z.scrollTo(D)}}function Sn(D){const{type:Z,pair:Se,autosize:We}=e;if(!Se&&We)if(Z==="textarea"){const{value:dn}=l;dn&&(dn.textContent=(D??"")+`\r
`)}else{const{value:dn}=c;dn&&(D?dn.textContent=D:dn.innerHTML="&nbsp;")}}function Qe(){Pe()}const On=K({top:"0"});function mn(D){var Z;const{scrollTop:Se}=D.target;On.value.top=`${-Se}px`,(Z=h.value)===null||Z===void 0||Z.syncUnifiedContainer()}let hn=null;lo(()=>{const{autosize:D,type:Z}=e;D&&Z==="textarea"?hn=pn(S,Se=>{!Array.isArray(Se)&&Se!==Y&&Sn(Se)}):hn==null||hn()});let Qn=null;lo(()=>{e.type==="textarea"?Qn=pn(S,D=>{var Z;!Array.isArray(D)&&D!==Y&&((Z=h.value)===null||Z===void 0||Z.syncUnifiedContainer())}):Qn==null||Qn()}),Ye(nm,{mergedValueRef:S,maxlengthRef:Ee,mergedClsPrefixRef:n,countGraphemesRef:Xe(e,"countGraphemes")});const Jo={wrapperElRef:a,inputElRef:d,textareaElRef:s,isCompositing:H,focus:J,blur:pe,select:Te,deactivate:Ue,activate:Le,scrollTo:wn},Zt=qo("Input",r,n),In=G(()=>{const{value:D}=k,{common:{cubicBezierEaseInOut:Z},self:{color:Se,borderRadius:We,textColor:dn,caretColor:on,caretColorError:Et,caretColorWarning:Tt,textDecorationColor:zt,border:xo,borderDisabled:Co,borderHover:Rr,borderFocus:ls,placeholderColor:cs,placeholderColorDisabled:ds,lineHeightTextarea:us,colorDisabled:Hn,colorFocus:Dr,textColorDisabled:fs,boxShadowFocus:Ri,iconSize:Yo,colorFocusWarning:gn,boxShadowFocusWarning:hs,borderWarning:Ir,borderFocusWarning:Di,borderHoverWarning:ps,colorFocusError:Hr,boxShadowFocusError:_r,borderError:Ii,borderFocusError:ms,borderHoverError:Hi,clearSize:_i,clearColor:f,clearColorHover:C,clearColorPressed:_,iconColor:W,iconColorDisabled:ue,suffixTextColor:Fe,countTextColor:qe,countTextColorDisabled:bn,iconColorHover:Qo,iconColorPressed:sb,loadingColor:lb,loadingColorError:cb,loadingColorWarning:db,[be("padding",D)]:ub,[be("fontSize",D)]:fb,[be("height",D)]:hb}}=i.value,{left:pb,right:mb}=ec(ub);return{"--n-bezier":Z,"--n-count-text-color":qe,"--n-count-text-color-disabled":bn,"--n-color":Se,"--n-font-size":fb,"--n-border-radius":We,"--n-height":hb,"--n-padding-left":pb,"--n-padding-right":mb,"--n-text-color":dn,"--n-caret-color":on,"--n-text-decoration-color":zt,"--n-border":xo,"--n-border-disabled":Co,"--n-border-hover":Rr,"--n-border-focus":ls,"--n-placeholder-color":cs,"--n-placeholder-color-disabled":ds,"--n-icon-size":Yo,"--n-line-height-textarea":us,"--n-color-disabled":Hn,"--n-color-focus":Dr,"--n-text-color-disabled":fs,"--n-box-shadow-focus":Ri,"--n-loading-color":lb,"--n-caret-color-warning":Tt,"--n-color-focus-warning":gn,"--n-box-shadow-focus-warning":hs,"--n-border-warning":Ir,"--n-border-focus-warning":Di,"--n-border-hover-warning":ps,"--n-loading-color-warning":db,"--n-caret-color-error":Et,"--n-color-focus-error":Hr,"--n-box-shadow-focus-error":_r,"--n-border-error":Ii,"--n-border-focus-error":ms,"--n-border-hover-error":Hi,"--n-loading-color-error":cb,"--n-clear-color":f,"--n-clear-size":_i,"--n-clear-color-hover":C,"--n-clear-color-pressed":_,"--n-icon-color":W,"--n-icon-color-hover":Qo,"--n-icon-color-pressed":sb,"--n-icon-color-disabled":ue,"--n-suffix-text-color":Fe}}),Bn=o?Dn("input",G(()=>{const{value:D}=k;return D[0]}),In,e):void 0;return Object.assign(Object.assign({},Jo),{wrapperElRef:a,inputElRef:d,inputMirrorElRef:c,inputEl2Ref:u,textareaElRef:s,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:Zt,uncontrolledValue:m,mergedValue:S,passwordVisible:ie,mergedPlaceholder:E,showPlaceholder1:te,showPlaceholder2:L,mergedFocus:M,isComposing:H,activated:z,showClearButton:se,mergedSize:k,mergedDisabled:T,textDecorationStyle:$,mergedClsPrefix:n,mergedBordered:t,mergedShowPasswordOn:j,placeholderStyle:On,mergedStatus:A,textAreaScrollContainerWidth:q,handleTextAreaScroll:mn,handleCompositionStart:X,handleCompositionEnd:ae,handleInput:de,handleInputBlur:ee,handleInputFocus:N,handleWrapperBlur:xe,handleWrapperFocus:me,handleMouseEnter:Ne,handleMouseLeave:an,handleMouseDown:Me,handleChange:fe,handleClick:ye,handleClear:je,handlePasswordToggleClick:Yn,handlePasswordToggleMousedown:qt,handleWrapperKeydown:ut,handleTextAreaMirrorResize:Qe,getTextareaScrollContainer:()=>s.value,mergedTheme:i,cssVars:o?void 0:In,themeClass:Bn==null?void 0:Bn.themeClass,onRender:Bn==null?void 0:Bn.onRender})},render(){var e,n;const{mergedClsPrefix:t,mergedStatus:o,themeClass:r,type:i,countGraphemes:a,onRender:s}=this,l=this.$slots;return s==null||s(),x("div",{ref:"wrapperElRef",class:[`${t}-input`,r,o&&`${t}-input--${o}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:i==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&i!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},x("div",{class:`${t}-input-wrapper`},zn(l.prefix,c=>c&&x("div",{class:`${t}-input__prefix`},c)),i==="textarea"?x(es,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,d;const{textAreaScrollContainerWidth:u}=this,p={width:this.autosize&&u&&`${u}px`};return x(Je,null,x("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style,p],onBlur:this.handleInputBlur,onFocus:b=>this.handleInputFocus(b,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?x("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,p],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?x(ga,{onResize:this.handleTextAreaMirrorResize},{default:()=>x("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):x("div",{class:`${t}-input__input`},x("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(n=this.inputProps)===null||n===void 0?void 0:n.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,0),onInput:c=>this.handleInput(c,0),onChange:c=>this.handleChange(c,0)})),this.showPlaceholder1?x("div",{class:`${t}-input__placeholder`},x("span",null,this.mergedPlaceholder[0])):null,this.autosize?x("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&zn(l.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?x("div",{class:`${t}-input__suffix`},[zn(l["clear-icon-placeholder"],d=>(this.clearable||d)&&x(Tl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>d,icon:()=>{var u,p;return(p=(u=this.$slots)["clear-icon"])===null||p===void 0?void 0:p.call(u)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?x(WP,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?x(Lu,null,{default:d=>{var u;return(u=l.count)===null||u===void 0?void 0:u.call(l,d)}}):null,this.mergedShowPasswordOn&&this.type==="password"?x("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Oo(l["password-visible-icon"],()=>[x(po,{clsPrefix:t},{default:()=>x(Rk,null)})]):Oo(l["password-invisible-icon"],()=>[x(po,{clsPrefix:t},{default:()=>x(Dk,null)})])):null]):null)),this.pair?x("span",{class:`${t}-input__separator`},Oo(l.separator,()=>[this.separator])):null,this.pair?x("div",{class:`${t}-input-wrapper`},x("div",{class:`${t}-input__input`},x("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,1),onInput:c=>this.handleInput(c,1),onChange:c=>this.handleChange(c,1)}),this.showPlaceholder2?x("div",{class:`${t}-input__placeholder`},x("span",null,this.mergedPlaceholder[1])):null),zn(l.suffix,c=>(this.clearable||c)&&x("div",{class:`${t}-input__suffix`},[this.clearable&&x(Tl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var d;return(d=l["clear-icon"])===null||d===void 0?void 0:d.call(l)},placeholder:()=>{var d;return(d=l["clear-icon-placeholder"])===null||d===void 0?void 0:d.call(l)}}),c]))):null,this.mergedBordered?x("div",{class:`${t}-input__border`}):null,this.mergedBordered?x("div",{class:`${t}-input__state-border`}):null,this.showCount&&i==="textarea"?x(Lu,null,{default:c=>{var d;const{renderCount:u}=this;return u?u(c):(d=l.count)===null||d===void 0?void 0:d.call(l,c)}}):null)}});function tm(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const m$={name:"AutoComplete",common:ce,peers:{InternalSelectMenu:Pi,Input:dt},self:tm},g$=m$,b$={name:"AutoComplete",common:le,peers:{InternalSelectMenu:$i,Input:vt},self:tm},v$=b$,om=e=>{const{borderRadius:n,avatarColor:t,cardColor:o,fontSize:r,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,modalColor:d,popoverColor:u}=e;return{borderRadius:n,fontSize:r,border:`2px solid ${o}`,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,color:ve(o,t),colorModal:ve(d,t),colorPopover:ve(u,t)}},y$={name:"Avatar",common:ce,self:om},rm=y$,x$={name:"Avatar",common:le,self:om},im=x$,am=()=>({gap:"-12px"}),C$={name:"AvatarGroup",common:ce,peers:{Avatar:rm},self:am},w$=C$,S$={name:"AvatarGroup",common:le,peers:{Avatar:im},self:am},T$=S$,sm={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},k$={name:"BackTop",common:le,self(e){const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},sm),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},P$=k$,$$=e=>{const{popoverColor:n,textColor2:t,primaryColorHover:o,primaryColorPressed:r}=e;return Object.assign(Object.assign({},sm),{color:n,textColor:t,iconColor:t,iconColorHover:o,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},A$={name:"BackTop",common:ce,self:$$},R$=A$,D$={name:"Badge",common:le,self(e){const{errorColorSuppl:n,infoColorSuppl:t,successColorSuppl:o,warningColorSuppl:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}}},I$=D$,H$=e=>{const{errorColor:n,infoColor:t,successColor:o,warningColor:r,fontFamily:i}=e;return{color:n,colorInfo:t,colorSuccess:o,colorError:n,colorWarning:r,fontSize:"12px",fontFamily:i}},_$={name:"Badge",common:ce,self:H$},E$=_$,z$={fontWeightActive:"400"},lm=e=>{const{fontSize:n,textColor3:t,textColor2:o,borderRadius:r,buttonColor2Hover:i,buttonColor2Pressed:a}=e;return Object.assign(Object.assign({},z$),{fontSize:n,itemLineHeight:"1.25",itemTextColor:t,itemTextColorHover:o,itemTextColorPressed:o,itemTextColorActive:o,itemBorderRadius:r,itemColorHover:i,itemColorPressed:a,separatorColor:t})},M$={name:"Breadcrumb",common:ce,self:lm},L$=M$,O$={name:"Breadcrumb",common:le,self:lm},B$=O$;function ko(e){return ve(e,[255,255,255,.16])}function ea(e){return ve(e,[0,0,0,.12])}const F$="n-button-group",W$={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},cm=e=>{const{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadius:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,textColor2:u,textColor3:p,primaryColorHover:b,primaryColorPressed:h,borderColor:y,primaryColor:m,baseColor:g,infoColor:S,infoColorHover:I,infoColorPressed:k,successColor:T,successColorHover:A,successColorPressed:v,warningColor:w,warningColorHover:H,warningColorPressed:z,errorColor:Y,errorColorHover:E,errorColorPressed:te,fontWeight:L,buttonColor2:M,buttonColor2Hover:se,buttonColor2Pressed:j,fontWeightStrong:ie}=e;return Object.assign(Object.assign({},W$),{heightTiny:n,heightSmall:t,heightMedium:o,heightLarge:r,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:M,colorSecondaryHover:se,colorSecondaryPressed:j,colorTertiary:M,colorTertiaryHover:se,colorTertiaryPressed:j,colorQuaternary:"#0000",colorQuaternaryHover:se,colorQuaternaryPressed:j,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:u,textColorTertiary:p,textColorHover:b,textColorPressed:h,textColorFocus:b,textColorDisabled:u,textColorText:u,textColorTextHover:b,textColorTextPressed:h,textColorTextFocus:b,textColorTextDisabled:u,textColorGhost:u,textColorGhostHover:b,textColorGhostPressed:h,textColorGhostFocus:b,textColorGhostDisabled:u,border:`1px solid ${y}`,borderHover:`1px solid ${b}`,borderPressed:`1px solid ${h}`,borderFocus:`1px solid ${b}`,borderDisabled:`1px solid ${y}`,rippleColor:m,colorPrimary:m,colorHoverPrimary:b,colorPressedPrimary:h,colorFocusPrimary:b,colorDisabledPrimary:m,textColorPrimary:g,textColorHoverPrimary:g,textColorPressedPrimary:g,textColorFocusPrimary:g,textColorDisabledPrimary:g,textColorTextPrimary:m,textColorTextHoverPrimary:b,textColorTextPressedPrimary:h,textColorTextFocusPrimary:b,textColorTextDisabledPrimary:u,textColorGhostPrimary:m,textColorGhostHoverPrimary:b,textColorGhostPressedPrimary:h,textColorGhostFocusPrimary:b,textColorGhostDisabledPrimary:m,borderPrimary:`1px solid ${m}`,borderHoverPrimary:`1px solid ${b}`,borderPressedPrimary:`1px solid ${h}`,borderFocusPrimary:`1px solid ${b}`,borderDisabledPrimary:`1px solid ${m}`,rippleColorPrimary:m,colorInfo:S,colorHoverInfo:I,colorPressedInfo:k,colorFocusInfo:I,colorDisabledInfo:S,textColorInfo:g,textColorHoverInfo:g,textColorPressedInfo:g,textColorFocusInfo:g,textColorDisabledInfo:g,textColorTextInfo:S,textColorTextHoverInfo:I,textColorTextPressedInfo:k,textColorTextFocusInfo:I,textColorTextDisabledInfo:u,textColorGhostInfo:S,textColorGhostHoverInfo:I,textColorGhostPressedInfo:k,textColorGhostFocusInfo:I,textColorGhostDisabledInfo:S,borderInfo:`1px solid ${S}`,borderHoverInfo:`1px solid ${I}`,borderPressedInfo:`1px solid ${k}`,borderFocusInfo:`1px solid ${I}`,borderDisabledInfo:`1px solid ${S}`,rippleColorInfo:S,colorSuccess:T,colorHoverSuccess:A,colorPressedSuccess:v,colorFocusSuccess:A,colorDisabledSuccess:T,textColorSuccess:g,textColorHoverSuccess:g,textColorPressedSuccess:g,textColorFocusSuccess:g,textColorDisabledSuccess:g,textColorTextSuccess:T,textColorTextHoverSuccess:A,textColorTextPressedSuccess:v,textColorTextFocusSuccess:A,textColorTextDisabledSuccess:u,textColorGhostSuccess:T,textColorGhostHoverSuccess:A,textColorGhostPressedSuccess:v,textColorGhostFocusSuccess:A,textColorGhostDisabledSuccess:T,borderSuccess:`1px solid ${T}`,borderHoverSuccess:`1px solid ${A}`,borderPressedSuccess:`1px solid ${v}`,borderFocusSuccess:`1px solid ${A}`,borderDisabledSuccess:`1px solid ${T}`,rippleColorSuccess:T,colorWarning:w,colorHoverWarning:H,colorPressedWarning:z,colorFocusWarning:H,colorDisabledWarning:w,textColorWarning:g,textColorHoverWarning:g,textColorPressedWarning:g,textColorFocusWarning:g,textColorDisabledWarning:g,textColorTextWarning:w,textColorTextHoverWarning:H,textColorTextPressedWarning:z,textColorTextFocusWarning:H,textColorTextDisabledWarning:u,textColorGhostWarning:w,textColorGhostHoverWarning:H,textColorGhostPressedWarning:z,textColorGhostFocusWarning:H,textColorGhostDisabledWarning:w,borderWarning:`1px solid ${w}`,borderHoverWarning:`1px solid ${H}`,borderPressedWarning:`1px solid ${z}`,borderFocusWarning:`1px solid ${H}`,borderDisabledWarning:`1px solid ${w}`,rippleColorWarning:w,colorError:Y,colorHoverError:E,colorPressedError:te,colorFocusError:E,colorDisabledError:Y,textColorError:g,textColorHoverError:g,textColorPressedError:g,textColorFocusError:g,textColorDisabledError:g,textColorTextError:Y,textColorTextHoverError:E,textColorTextPressedError:te,textColorTextFocusError:E,textColorTextDisabledError:u,textColorGhostError:Y,textColorGhostHoverError:E,textColorGhostPressedError:te,textColorGhostFocusError:E,textColorGhostDisabledError:Y,borderError:`1px solid ${Y}`,borderHoverError:`1px solid ${E}`,borderPressedError:`1px solid ${te}`,borderFocusError:`1px solid ${E}`,borderDisabledError:`1px solid ${Y}`,rippleColorError:Y,waveOpacity:"0.6",fontWeight:L,fontWeightStrong:ie})},j$={name:"Button",common:ce,self:cm},Zn=j$,N$={name:"Button",common:le,self(e){const n=cm(e);return n.waveOpacity="0.8",n.colorOpacitySecondary="0.16",n.colorOpacitySecondaryHover="0.2",n.colorOpacitySecondaryPressed="0.12",n}},ot=N$,G$=O([ne("button",`
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
 `,[Q("color",[F("border",{borderColor:"var(--n-border-color)"}),Q("disabled",[F("border",{borderColor:"var(--n-border-color-disabled)"})]),Mn("disabled",[O("&:focus",[F("state-border",{borderColor:"var(--n-border-color-focus)"})]),O("&:hover",[F("state-border",{borderColor:"var(--n-border-color-hover)"})]),O("&:active",[F("state-border",{borderColor:"var(--n-border-color-pressed)"})]),Q("pressed",[F("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),Q("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[F("border",{border:"var(--n-border-disabled)"})]),Mn("disabled",[O("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[F("state-border",{border:"var(--n-border-focus)"})]),O("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[F("state-border",{border:"var(--n-border-hover)"})]),O("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[F("state-border",{border:"var(--n-border-pressed)"})]),Q("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[F("state-border",{border:"var(--n-border-pressed)"})])]),Q("loading","cursor: wait;"),ne("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[Q("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),go&&"MozBoxSizing"in document.createElement("div").style?O("&::moz-focus-inner",{border:0}):null,F("border, state-border",`
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
 `,[yi({top:"50%",originalTransform:"translateY(-50%)"})]),VP()]),F("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[O("~",[F("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),Q("block",`
 display: flex;
 width: 100%;
 `),Q("dashed",[F("border, state-border",{borderStyle:"dashed !important"})]),Q("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),O("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),O("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),V$=Object.assign(Object.assign({},Ie.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Qp}}),K$=ge({name:"Button",props:V$,setup(e){const n=K(null),t=K(null),o=K(!1),r=An(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),i=De(F$,{}),{mergedSizeRef:a}=Wh({},{defaultSize:"medium",mergedSize:k=>{const{size:T}=e;if(T)return T;const{size:A}=i;if(A)return A;const{mergedSize:v}=k||{};return v?v.value:"medium"}}),s=G(()=>e.focusable&&!e.disabled),l=k=>{var T;s.value||k.preventDefault(),!e.nativeFocusBehavior&&(k.preventDefault(),!e.disabled&&s.value&&((T=n.value)===null||T===void 0||T.focus({preventScroll:!0})))},c=k=>{var T;if(!e.disabled&&!e.loading){const{onClick:A}=e;A&&nn(A,k),e.text||(T=t.value)===null||T===void 0||T.play()}},d=k=>{switch(k.key){case"Enter":if(!e.keyboard)return;o.value=!1}},u=k=>{switch(k.key){case"Enter":if(!e.keyboard||e.loading){k.preventDefault();return}o.value=!0}},p=()=>{o.value=!1},{inlineThemeDisabled:b,mergedClsPrefixRef:h,mergedRtlRef:y}=fn(e),m=Ie("Button","-button",G$,Zn,e,h),g=qo("Button",y,h),S=G(()=>{const k=m.value,{common:{cubicBezierEaseInOut:T,cubicBezierEaseOut:A},self:v}=k,{rippleDuration:w,opacityDisabled:H,fontWeight:z,fontWeightStrong:Y}=v,E=a.value,{dashed:te,type:L,ghost:M,text:se,color:j,round:ie,circle:$,textColor:q,secondary:Pe,tertiary:Ee,quaternary:Pn,strong:Be}=e,Oe={"font-weight":Be?Y:z};let we={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const ze=L==="tertiary",Xn=L==="default",Ae=ze?"default":L;if(se){const ee=q||j;we={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":ee||v[be("textColorText",Ae)],"--n-text-color-hover":ee?ko(ee):v[be("textColorTextHover",Ae)],"--n-text-color-pressed":ee?ea(ee):v[be("textColorTextPressed",Ae)],"--n-text-color-focus":ee?ko(ee):v[be("textColorTextHover",Ae)],"--n-text-color-disabled":ee||v[be("textColorTextDisabled",Ae)]}}else if(M||te){const ee=q||j;we={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":j||v[be("rippleColor",Ae)],"--n-text-color":ee||v[be("textColorGhost",Ae)],"--n-text-color-hover":ee?ko(ee):v[be("textColorGhostHover",Ae)],"--n-text-color-pressed":ee?ea(ee):v[be("textColorGhostPressed",Ae)],"--n-text-color-focus":ee?ko(ee):v[be("textColorGhostHover",Ae)],"--n-text-color-disabled":ee||v[be("textColorGhostDisabled",Ae)]}}else if(Pe){const ee=Xn?v.textColor:ze?v.textColorTertiary:v[be("color",Ae)],N=j||ee,xe=L!=="default"&&L!=="tertiary";we={"--n-color":xe?V(N,{alpha:Number(v.colorOpacitySecondary)}):v.colorSecondary,"--n-color-hover":xe?V(N,{alpha:Number(v.colorOpacitySecondaryHover)}):v.colorSecondaryHover,"--n-color-pressed":xe?V(N,{alpha:Number(v.colorOpacitySecondaryPressed)}):v.colorSecondaryPressed,"--n-color-focus":xe?V(N,{alpha:Number(v.colorOpacitySecondaryHover)}):v.colorSecondaryHover,"--n-color-disabled":v.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":N,"--n-text-color-hover":N,"--n-text-color-pressed":N,"--n-text-color-focus":N,"--n-text-color-disabled":N}}else if(Ee||Pn){const ee=Xn?v.textColor:ze?v.textColorTertiary:v[be("color",Ae)],N=j||ee;Ee?(we["--n-color"]=v.colorTertiary,we["--n-color-hover"]=v.colorTertiaryHover,we["--n-color-pressed"]=v.colorTertiaryPressed,we["--n-color-focus"]=v.colorSecondaryHover,we["--n-color-disabled"]=v.colorTertiary):(we["--n-color"]=v.colorQuaternary,we["--n-color-hover"]=v.colorQuaternaryHover,we["--n-color-pressed"]=v.colorQuaternaryPressed,we["--n-color-focus"]=v.colorQuaternaryHover,we["--n-color-disabled"]=v.colorQuaternary),we["--n-ripple-color"]="#0000",we["--n-text-color"]=N,we["--n-text-color-hover"]=N,we["--n-text-color-pressed"]=N,we["--n-text-color-focus"]=N,we["--n-text-color-disabled"]=N}else we={"--n-color":j||v[be("color",Ae)],"--n-color-hover":j?ko(j):v[be("colorHover",Ae)],"--n-color-pressed":j?ea(j):v[be("colorPressed",Ae)],"--n-color-focus":j?ko(j):v[be("colorFocus",Ae)],"--n-color-disabled":j||v[be("colorDisabled",Ae)],"--n-ripple-color":j||v[be("rippleColor",Ae)],"--n-text-color":q||(j?v.textColorPrimary:ze?v.textColorTertiary:v[be("textColor",Ae)]),"--n-text-color-hover":q||(j?v.textColorHoverPrimary:v[be("textColorHover",Ae)]),"--n-text-color-pressed":q||(j?v.textColorPressedPrimary:v[be("textColorPressed",Ae)]),"--n-text-color-focus":q||(j?v.textColorFocusPrimary:v[be("textColorFocus",Ae)]),"--n-text-color-disabled":q||(j?v.textColorDisabledPrimary:v[be("textColorDisabled",Ae)])};let Jn={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};se?Jn={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Jn={"--n-border":v[be("border",Ae)],"--n-border-hover":v[be("borderHover",Ae)],"--n-border-pressed":v[be("borderPressed",Ae)],"--n-border-focus":v[be("borderFocus",Ae)],"--n-border-disabled":v[be("borderDisabled",Ae)]};const{[be("height",E)]:Ze,[be("fontSize",E)]:P,[be("padding",E)]:R,[be("paddingRound",E)]:B,[be("iconSize",E)]:U,[be("borderRadius",E)]:X,[be("iconMargin",E)]:ae,waveOpacity:de}=v,re={"--n-width":$&&!se?Ze:"initial","--n-height":se?"initial":Ze,"--n-font-size":P,"--n-padding":$||se?"initial":ie?B:R,"--n-icon-size":U,"--n-icon-margin":ae,"--n-border-radius":se?"initial":$||ie?Ze:X};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":T,"--n-bezier-ease-out":A,"--n-ripple-duration":w,"--n-opacity-disabled":H,"--n-wave-opacity":de},Oe),we),Jn),re)}),I=b?Dn("button",G(()=>{let k="";const{dashed:T,type:A,ghost:v,text:w,color:H,round:z,circle:Y,textColor:E,secondary:te,tertiary:L,quaternary:M,strong:se}=e;T&&(k+="a"),v&&(k+="b"),w&&(k+="c"),z&&(k+="d"),Y&&(k+="e"),te&&(k+="f"),L&&(k+="g"),M&&(k+="h"),se&&(k+="i"),H&&(k+="j"+wd(H)),E&&(k+="k"+wd(E));const{value:j}=a;return k+="l"+j[0],k+="m"+A[0],k}),S,e):void 0;return{selfElRef:n,waveElRef:t,mergedClsPrefix:h,mergedFocusable:s,mergedSize:a,showBorder:r,enterPressed:o,rtlEnabled:g,handleMousedown:l,handleKeydown:u,handleBlur:p,handleKeyup:d,handleClick:c,customColorCssVars:G(()=>{const{color:k}=e;if(!k)return null;const T=ko(k);return{"--n-border-color":k,"--n-border-color-hover":T,"--n-border-color-pressed":ea(k),"--n-border-color-focus":T,"--n-border-color-disabled":k}}),cssVars:b?void 0:S,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const{mergedClsPrefix:e,tag:n,onRender:t}=this;t==null||t();const o=zn(this.$slots.default,r=>r&&x("span",{class:`${e}-button__content`},r));return x(n,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&o,x(_p,{width:!0},{default:()=>zn(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&x("span",{class:`${e}-button__icon`,style:{margin:cl(this.$slots.default)?"0":""}},x(Ya,null,{default:()=>this.loading?x(xc,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):x("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&o,this.text?null:x(PP,{ref:"waveElRef",clsPrefix:e}),this.showBorder?x("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?x("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),kl=K$,U$={titleFontSize:"22px"},dm=e=>{const{borderRadius:n,fontSize:t,lineHeight:o,textColor2:r,textColor1:i,textColorDisabled:a,dividerColor:s,fontWeightStrong:l,primaryColor:c,baseColor:d,hoverColor:u,cardColor:p,modalColor:b,popoverColor:h}=e;return Object.assign(Object.assign({},U$),{borderRadius:n,borderColor:ve(p,s),borderColorModal:ve(b,s),borderColorPopover:ve(h,s),textColor:r,titleFontWeight:l,titleTextColor:i,dayTextColor:a,fontSize:t,lineHeight:o,dateColorCurrent:c,dateTextColorCurrent:d,cellColorHover:ve(p,u),cellColorHoverModal:ve(b,u),cellColorHoverPopover:ve(h,u),cellColor:p,cellColorModal:b,cellColorPopover:h,barColor:c})},q$={name:"Calendar",common:ce,peers:{Button:Zn},self:dm},Z$=q$,X$={name:"Calendar",common:le,peers:{Button:ot},self:dm},J$=X$,um=e=>{const{fontSize:n,boxShadow2:t,popoverColor:o,textColor2:r,borderRadius:i,borderColor:a,heightSmall:s,heightMedium:l,heightLarge:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:p,dividerColor:b}=e;return{panelFontSize:n,boxShadow:t,color:o,textColor:r,borderRadius:i,border:`1px solid ${a}`,heightSmall:s,heightMedium:l,heightLarge:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:p,dividerColor:b}},Y$={name:"ColorPicker",common:ce,peers:{Input:dt,Button:Zn},self:um},Q$=Y$,eA={name:"ColorPicker",common:le,peers:{Input:vt,Button:ot},self:um},nA=eA,tA={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},fm=e=>{const{primaryColor:n,borderRadius:t,lineHeight:o,fontSize:r,cardColor:i,textColor2:a,textColor1:s,dividerColor:l,fontWeightStrong:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,closeColorHover:b,closeColorPressed:h,modalColor:y,boxShadow1:m,popoverColor:g,actionColor:S}=e;return Object.assign(Object.assign({},tA),{lineHeight:o,color:i,colorModal:y,colorPopover:g,colorTarget:n,colorEmbedded:S,colorEmbeddedModal:S,colorEmbeddedPopover:S,textColor:a,titleTextColor:s,borderColor:l,actionColor:S,titleFontWeight:c,closeColorHover:b,closeColorPressed:h,closeBorderRadius:t,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,fontSizeSmall:r,fontSizeMedium:r,fontSizeLarge:r,fontSizeHuge:r,boxShadow:m,borderRadius:t})},oA={name:"Card",common:ce,self:fm},kc=oA,rA={name:"Card",common:le,self(e){const n=fm(e),{cardColor:t,modalColor:o,popoverColor:r}=e;return n.colorEmbedded=t,n.colorEmbeddedModal=o,n.colorEmbeddedPopover=r,n}},hm=rA,iA=O([ne("card",`
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
 `,[mh({background:"var(--n-color-modal)"}),Q("hoverable",[O("&:hover","box-shadow: var(--n-box-shadow);")]),Q("content-segmented",[O(">",[F("content",{paddingTop:"var(--n-padding-bottom)"})])]),Q("content-soft-segmented",[O(">",[F("content",`
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
 `)]),ph(ne("card",`
 background: var(--n-color-modal);
 `,[Q("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ky(ne("card",`
 background: var(--n-color-popover);
 `,[Q("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Pc={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},aA=Wa(Pc),sA=Object.assign(Object.assign({},Ie.props),Pc),lA=ge({name:"Card",props:sA,setup(e){const n=()=>{const{onClose:c}=e;c&&nn(c)},{inlineThemeDisabled:t,mergedClsPrefixRef:o,mergedRtlRef:r}=fn(e),i=Ie("Card","-card",iA,kc,e,o),a=qo("Card",r,o),s=G(()=>{const{size:c}=e,{self:{color:d,colorModal:u,colorTarget:p,textColor:b,titleTextColor:h,titleFontWeight:y,borderColor:m,actionColor:g,borderRadius:S,lineHeight:I,closeIconColor:k,closeIconColorHover:T,closeIconColorPressed:A,closeColorHover:v,closeColorPressed:w,closeBorderRadius:H,closeIconSize:z,closeSize:Y,boxShadow:E,colorPopover:te,colorEmbedded:L,colorEmbeddedModal:M,colorEmbeddedPopover:se,[be("padding",c)]:j,[be("fontSize",c)]:ie,[be("titleFontSize",c)]:$},common:{cubicBezierEaseInOut:q}}=i.value,{top:Pe,left:Ee,bottom:Pn}=ec(j);return{"--n-bezier":q,"--n-border-radius":S,"--n-color":d,"--n-color-modal":u,"--n-color-popover":te,"--n-color-embedded":L,"--n-color-embedded-modal":M,"--n-color-embedded-popover":se,"--n-color-target":p,"--n-text-color":b,"--n-line-height":I,"--n-action-color":g,"--n-title-text-color":h,"--n-title-font-weight":y,"--n-close-icon-color":k,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":A,"--n-close-color-hover":v,"--n-close-color-pressed":w,"--n-border-color":m,"--n-box-shadow":E,"--n-padding-top":Pe,"--n-padding-bottom":Pn,"--n-padding-left":Ee,"--n-font-size":ie,"--n-title-font-size":$,"--n-close-size":Y,"--n-close-icon-size":z,"--n-close-border-radius":H}}),l=t?Dn("card",G(()=>e.size[0]),s,e):void 0;return{rtlEnabled:a,mergedClsPrefix:o,mergedTheme:i,handleCloseClick:n,cssVars:t?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:n,hoverable:t,mergedClsPrefix:o,rtlEnabled:r,onRender:i,embedded:a,tag:s,$slots:l}=this;return i==null||i(),x(s,{class:[`${o}-card`,this.themeClass,a&&`${o}-card--embedded`,{[`${o}-card--rtl`]:r,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:t}],style:this.cssVars,role:this.role},zn(l.cover,c=>c&&x("div",{class:`${o}-card-cover`,role:"none"},c)),zn(l.header,c=>c||this.title||this.closable?x("div",{class:`${o}-card-header`,style:this.headerStyle},x("div",{class:`${o}-card-header__main`,role:"heading"},c||this.title),zn(l["header-extra"],d=>d&&x("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},d)),this.closable?x(Qa,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),zn(l.default,c=>c&&x("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},c)),zn(l.footer,c=>c&&[x("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},c)]),zn(l.action,c=>c&&x("div",{class:`${o}-card__action`,role:"none"},c)))}}),pm=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),cA={name:"Carousel",common:ce,self:pm},dA=cA,uA={name:"Carousel",common:le,self:pm},fA=uA,hA={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},mm=e=>{const{baseColor:n,inputColorDisabled:t,cardColor:o,modalColor:r,popoverColor:i,textColorDisabled:a,borderColor:s,primaryColor:l,textColor2:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:p,borderRadiusSmall:b,lineHeight:h}=e;return Object.assign(Object.assign({},hA),{labelLineHeight:h,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:p,borderRadius:b,color:n,colorChecked:l,colorDisabled:t,colorDisabledChecked:t,colorTableHeader:o,colorTableHeaderModal:r,colorTableHeaderPopover:i,checkMarkColor:n,checkMarkColorDisabled:a,checkMarkColorDisabledChecked:a,border:`1px solid ${s}`,borderDisabled:`1px solid ${s}`,borderDisabledChecked:`1px solid ${s}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${V(l,{alpha:.3})}`,textColor:c,textColorDisabled:a})},pA={name:"Checkbox",common:ce,self:mm},kr=pA,mA={name:"Checkbox",common:le,self(e){const{cardColor:n}=e,t=mm(e);return t.color="#0000",t.checkMarkColor=n,t}},Pr=mA,gm=e=>{const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r,textColor3:i,primaryColor:a,textColorDisabled:s,dividerColor:l,hoverColor:c,fontSizeMedium:d,heightMedium:u}=e;return{menuBorderRadius:n,menuColor:o,menuBoxShadow:t,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:u,optionFontSize:d,optionColorHover:c,optionTextColor:r,optionTextColorActive:a,optionTextColorDisabled:s,optionCheckMarkColor:a,loadingColor:a,columnWidth:"180px"}},gA={name:"Cascader",common:ce,peers:{InternalSelectMenu:Pi,InternalSelection:Sc,Scrollbar:qn,Checkbox:kr,Empty:Ut},self:gm},bA=gA,vA={name:"Cascader",common:le,peers:{InternalSelectMenu:$i,InternalSelection:Tc,Scrollbar:tt,Checkbox:Pr,Empty:Ut},self:gm},yA=vA,xA={name:"Code",common:le,self(e){const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:r}}},bm=xA,CA=e=>{const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:r}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:r}},wA={name:"Code",common:ce,self:CA},vm=wA,ym=e=>{const{fontWeight:n,textColor1:t,textColor2:o,textColorDisabled:r,dividerColor:i,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:n,dividerColor:i,titleTextColor:t,titleTextColorDisabled:r,fontSize:a,textColor:o,arrowColor:o,arrowColorDisabled:r,itemMargin:"16px 0 0 0"}},SA={name:"Collapse",common:ce,self:ym},TA=SA,kA={name:"Collapse",common:le,self:ym},PA=kA,xm=e=>{const{cubicBezierEaseInOut:n}=e;return{bezier:n}},$A={name:"CollapseTransition",common:ce,self:xm},AA=$A,RA={name:"CollapseTransition",common:le,self:xm},DA=RA,IA={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(No("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},Cm=ge({name:"ConfigProvider",alias:["App"],props:IA,setup(e){const n=De(ho,null),t=G(()=>{const{theme:h}=e;if(h===null)return;const y=n==null?void 0:n.mergedThemeRef.value;return h===void 0?y:y===void 0?h:Object.assign({},y,h)}),o=G(()=>{const{themeOverrides:h}=e;if(h!==null){if(h===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const y=n==null?void 0:n.mergedThemeOverridesRef.value;return y===void 0?h:Kr({},y,h)}}}),r=An(()=>{const{namespace:h}=e;return h===void 0?n==null?void 0:n.mergedNamespaceRef.value:h}),i=An(()=>{const{bordered:h}=e;return h===void 0?n==null?void 0:n.mergedBorderedRef.value:h}),a=G(()=>{const{icons:h}=e;return h===void 0?n==null?void 0:n.mergedIconsRef.value:h}),s=G(()=>{const{componentOptions:h}=e;return h!==void 0?h:n==null?void 0:n.mergedComponentPropsRef.value}),l=G(()=>{const{clsPrefix:h}=e;return h!==void 0?h:n==null?void 0:n.mergedClsPrefixRef.value}),c=G(()=>{var h;const{rtl:y}=e;if(y===void 0)return n==null?void 0:n.mergedRtlRef.value;const m={};for(const g of y)m[g.name]=so(g),(h=g.peers)===null||h===void 0||h.forEach(S=>{S.name in m||(m[S.name]=so(S))});return m}),d=G(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),u=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),p=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),b=G(()=>{const{value:h}=t,{value:y}=o,m=y&&Object.keys(y).length!==0,g=h==null?void 0:h.name;return g?m?`${g}-${hi(JSON.stringify(o.value))}`:g:m?hi(JSON.stringify(o.value)):""});return Ye(ho,{mergedThemeHashRef:b,mergedBreakpointsRef:d,mergedRtlRef:c,mergedIconsRef:a,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:r,mergedClsPrefixRef:l,mergedLocaleRef:G(()=>{const{locale:h}=e;if(h!==null)return h===void 0?n==null?void 0:n.mergedLocaleRef.value:h}),mergedDateLocaleRef:G(()=>{const{dateLocale:h}=e;if(h!==null)return h===void 0?n==null?void 0:n.mergedDateLocaleRef.value:h}),mergedHljsRef:G(()=>{const{hljs:h}=e;return h===void 0?n==null?void 0:n.mergedHljsRef.value:h}),mergedKatexRef:G(()=>{const{katex:h}=e;return h===void 0?n==null?void 0:n.mergedKatexRef.value:h}),mergedThemeRef:t,mergedThemeOverridesRef:o,inlineThemeDisabled:u||!1,preflightStyleDisabled:p||!1}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:r,mergedTheme:t,mergedThemeOverrides:o}},render(){var e,n,t,o;return this.abstract?(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t):x(this.as||this.tag,{class:`${this.mergedClsPrefix||Hp}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),HA={name:"Popselect",common:le,peers:{Popover:Xo,InternalSelectMenu:$i}},wm=HA;function _A(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const EA={name:"Popselect",common:ce,peers:{Popover:yo,InternalSelectMenu:Pi},self:_A},Sm=EA;function Tm(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const zA={name:"Select",common:ce,peers:{InternalSelection:Sc,InternalSelectMenu:Pi},self:Tm},km=zA,MA={name:"Select",common:le,peers:{InternalSelection:Tc,InternalSelectMenu:$i},self:Tm},Pm=MA,LA={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"},$m=e=>{const{textColor2:n,primaryColor:t,primaryColorHover:o,primaryColorPressed:r,inputColorDisabled:i,textColorDisabled:a,borderColor:s,borderRadius:l,fontSizeTiny:c,fontSizeSmall:d,fontSizeMedium:u,heightTiny:p,heightSmall:b,heightMedium:h}=e;return Object.assign(Object.assign({},LA),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${s}`,buttonBorderHover:`1px solid ${s}`,buttonBorderPressed:`1px solid ${s}`,buttonIconColor:n,buttonIconColorHover:n,buttonIconColorPressed:n,itemTextColor:n,itemTextColorHover:o,itemTextColorPressed:r,itemTextColorActive:t,itemTextColorDisabled:a,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${t}`,itemBorderDisabled:`1px solid ${s}`,itemBorderRadius:l,itemSizeSmall:p,itemSizeMedium:b,itemSizeLarge:h,itemFontSizeSmall:c,itemFontSizeMedium:d,itemFontSizeLarge:u,jumperFontSizeSmall:c,jumperFontSizeMedium:d,jumperFontSizeLarge:u,jumperTextColor:n,jumperTextColorDisabled:a})},OA={name:"Pagination",common:ce,peers:{Select:km,Input:dt,Popselect:Sm},self:$m},Am=OA,BA={name:"Pagination",common:le,peers:{Select:Pm,Input:vt,Popselect:wm},self(e){const{primaryColor:n,opacity3:t}=e,o=V(n,{alpha:Number(t)}),r=$m(e);return r.itemBorderActive=`1px solid ${o}`,r.itemBorderDisabled="1px solid #0000",r}},Rm=BA,Dm={padding:"8px 14px"},FA={name:"Tooltip",common:le,peers:{Popover:Xo},self(e){const{borderRadius:n,boxShadow2:t,popoverColor:o,textColor2:r}=e;return Object.assign(Object.assign({},Dm),{borderRadius:n,boxShadow:t,color:o,textColor:r})}},ts=FA,WA=e=>{const{borderRadius:n,boxShadow2:t,baseColor:o}=e;return Object.assign(Object.assign({},Dm),{borderRadius:n,boxShadow:t,color:ve(o,"rgba(0, 0, 0, .85)"),textColor:o})},jA={name:"Tooltip",common:ce,peers:{Popover:yo},self:WA},Ai=jA,NA={name:"Ellipsis",common:le,peers:{Tooltip:ts}},Im=NA,GA={name:"Ellipsis",common:ce,peers:{Tooltip:Ai}},$c=GA,Hm={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},VA={name:"Radio",common:le,self(e){const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,heightSmall:p,heightMedium:b,heightLarge:h,lineHeight:y}=e;return Object.assign(Object.assign({},Hm),{labelLineHeight:y,buttonHeightSmall:p,buttonHeightMedium:b,buttonHeightLarge:h,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${V(t,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:t,buttonColor:"#0000",buttonColorActive:t,buttonTextColor:a,buttonTextColorActive:o,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${V(t,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${t}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},_m=VA,KA=e=>{const{borderColor:n,primaryColor:t,baseColor:o,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,heightSmall:p,heightMedium:b,heightLarge:h,lineHeight:y}=e;return Object.assign(Object.assign({},Hm),{labelLineHeight:y,buttonHeightSmall:p,buttonHeightMedium:b,buttonHeightLarge:h,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${V(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:o,colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:n,buttonColor:o,buttonColorActive:o,buttonTextColor:a,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${V(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})},UA={name:"Radio",common:ce,self:KA},Em=UA,qA={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},zm=e=>{const{primaryColor:n,textColor2:t,dividerColor:o,hoverColor:r,popoverColor:i,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:u,heightSmall:p,heightMedium:b,heightLarge:h,heightHuge:y,textColor3:m,opacityDisabled:g}=e;return Object.assign(Object.assign({},qA),{optionHeightSmall:p,optionHeightMedium:b,optionHeightLarge:h,optionHeightHuge:y,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:u,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:i,dividerColor:o,suffixColor:t,prefixColor:t,optionColorHover:r,optionColorActive:V(n,{alpha:.1}),groupHeaderTextColor:m,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:g})},ZA={name:"Dropdown",common:ce,peers:{Popover:yo},self:zm},os=ZA,XA={name:"Dropdown",common:le,peers:{Popover:Xo},self(e){const{primaryColorSuppl:n,primaryColor:t,popoverColor:o}=e,r=zm(e);return r.colorInverted=o,r.optionColorActive=V(t,{alpha:.15}),r.optionColorActiveInverted=n,r.optionColorHoverInverted=n,r}},Ac=XA,JA={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"},Mm=e=>{const{cardColor:n,modalColor:t,popoverColor:o,textColor2:r,textColor1:i,tableHeaderColor:a,tableColorHover:s,iconColor:l,primaryColor:c,fontWeightStrong:d,borderRadius:u,lineHeight:p,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:y,dividerColor:m,heightSmall:g,opacityDisabled:S,tableColorStriped:I}=e;return Object.assign(Object.assign({},JA),{actionDividerColor:m,lineHeight:p,borderRadius:u,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:y,borderColor:ve(n,m),tdColorHover:ve(n,s),tdColorStriped:ve(n,I),thColor:ve(n,a),thColorHover:ve(ve(n,a),s),tdColor:n,tdTextColor:r,thTextColor:i,thFontWeight:d,thButtonColorHover:s,thIconColor:l,thIconColorActive:c,borderColorModal:ve(t,m),tdColorHoverModal:ve(t,s),tdColorStripedModal:ve(t,I),thColorModal:ve(t,a),thColorHoverModal:ve(ve(t,a),s),tdColorModal:t,borderColorPopover:ve(o,m),tdColorHoverPopover:ve(o,s),tdColorStripedPopover:ve(o,I),thColorPopover:ve(o,a),thColorHoverPopover:ve(ve(o,a),s),tdColorPopover:o,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:c,loadingSize:g,opacityLoading:S})},YA={name:"DataTable",common:ce,peers:{Button:Zn,Checkbox:kr,Radio:Em,Pagination:Am,Scrollbar:qn,Empty:Ut,Popover:yo,Ellipsis:$c,Dropdown:os},self:Mm},QA=YA,e3={name:"DataTable",common:le,peers:{Button:ot,Checkbox:Pr,Radio:_m,Pagination:Rm,Scrollbar:tt,Empty:Zo,Popover:Xo,Ellipsis:Im,Dropdown:Ac},self(e){const n=Mm(e);return n.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",n.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",n}},n3=e3,t3=Object.assign(Object.assign({},ns),Ie.props),o3=ge({name:"Tooltip",props:t3,__popover__:!0,setup(e){const n=Ie("Tooltip","-tooltip",void 0,Ai,e),t=K(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(r){t.value.setShow(r)}}),{popoverRef:t,mergedTheme:n,popoverThemeOverrides:G(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return x(Ta,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),r3=ne("ellipsis",{overflow:"hidden"},[Mn("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),Q("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),Q("cursor-pointer",`
 cursor: pointer;
 `)]);function Ou(e){return`${e}-ellipsis--line-clamp`}function Bu(e,n){return`${e}-ellipsis--cursor-${n}`}const i3=Object.assign(Object.assign({},Ie.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),a3=ge({name:"Ellipsis",inheritAttrs:!1,props:i3,setup(e,{slots:n,attrs:t}){const{mergedClsPrefixRef:o}=fn(e),r=Ie("Ellipsis","-ellipsis",r3,$c,e,o),i=K(null),a=K(null),s=K(null),l=K(!1),c=G(()=>{const{lineClamp:m}=e,{value:g}=l;return m!==void 0?{textOverflow:"","-webkit-line-clamp":g?"":m}:{textOverflow:g?"":"ellipsis","-webkit-line-clamp":""}});function d(){let m=!1;const{value:g}=l;if(g)return!0;const{value:S}=i;if(S){const{lineClamp:I}=e;if(b(S),I!==void 0)m=S.scrollHeight<=S.offsetHeight;else{const{value:k}=a;k&&(m=k.getBoundingClientRect().width<=S.getBoundingClientRect().width)}h(S,m)}return m}const u=G(()=>e.expandTrigger==="click"?()=>{var m;const{value:g}=l;g&&((m=s.value)===null||m===void 0||m.setShow(!1)),l.value=!g}:void 0);Zl(()=>{var m;e.tooltip&&((m=s.value)===null||m===void 0||m.setShow(!1))});const p=()=>x("span",Object.assign({},Ht(t,{class:[`${o.value}-ellipsis`,e.lineClamp!==void 0?Ou(o.value):void 0,e.expandTrigger==="click"?Bu(o.value,"pointer"):void 0],style:c.value}),{ref:"triggerRef",onClick:u.value,onMouseenter:e.expandTrigger==="click"?d:void 0}),e.lineClamp?n:x("span",{ref:"triggerInnerRef"},n));function b(m){if(!m)return;const g=c.value,S=Ou(o.value);e.lineClamp!==void 0?y(m,S,"add"):y(m,S,"remove");for(const I in g)m.style[I]!==g[I]&&(m.style[I]=g[I])}function h(m,g){const S=Bu(o.value,"pointer");e.expandTrigger==="click"&&!g?y(m,S,"add"):y(m,S,"remove")}function y(m,g,S){S==="add"?m.classList.contains(g)||m.classList.add(g):m.classList.contains(g)&&m.classList.remove(g)}return{mergedTheme:r,triggerRef:i,triggerInnerRef:a,tooltipRef:s,handleClick:u,renderTrigger:p,getTooltipDisabled:d}},render(){var e;const{tooltip:n,renderTrigger:t,$slots:o}=this;if(n){const{mergedTheme:r}=this;return x(o3,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:t,default:(e=o.tooltip)!==null&&e!==void 0?e:o.default})}else return t()}}),Lm=ge({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return x("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Om=e=>{const{textColorBase:n,opacity1:t,opacity2:o,opacity3:r,opacity4:i,opacity5:a}=e;return{color:n,opacity1Depth:t,opacity2Depth:o,opacity3Depth:r,opacity4Depth:i,opacity5Depth:a}},s3={name:"Icon",common:ce,self:Om},Bm=s3,l3={name:"Icon",common:le,self:Om},c3=l3,d3=ne("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[Q("color-transition",{transition:"color .3s var(--n-bezier)"}),Q("depth",{color:"var(--n-color)"},[O("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),O("svg",{height:"1em",width:"1em"})]),u3=Object.assign(Object.assign({},Ie.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Fm=ge({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:u3,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=fn(e),o=Ie("Icon","-icon",d3,Bm,e,n),r=G(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=o.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:d}=l;return{"--n-bezier":s,"--n-color":c,"--n-opacity":d}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?Dn("icon",G(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:G(()=>{const{size:a,color:s}=e;return{fontSize:aa(a),color:s}}),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:o,component:r,onRender:i,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&No("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),x("i",Ht(this.$attrs,{role:"img",class:[`${o}-icon`,a,{[`${o}-icon--depth`]:t,[`${o}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?x(r):this.$slots)}}),Rc="n-dropdown-menu",rs="n-dropdown",Fu="n-dropdown-option";function Pl(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function f3(e){return e.type==="group"}function Wm(e){return e.type==="divider"}function h3(e){return e.type==="render"}const jm=ge({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=De(rs),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:c,renderIconRef:d,labelFieldRef:u,childrenFieldRef:p,renderOptionRef:b,nodePropsRef:h,menuPropsRef:y}=n,m=De(Fu,null),g=De(Rc),S=De(Si),I=G(()=>e.tmNode.rawNode),k=G(()=>{const{value:j}=p;return Pl(e.tmNode.rawNode,j)}),T=G(()=>{const{disabled:j}=e.tmNode;return j}),A=G(()=>{if(!k.value)return!1;const{key:j,disabled:ie}=e.tmNode;if(ie)return!1;const{value:$}=t,{value:q}=o,{value:Pe}=r,{value:Ee}=i;return $!==null?Ee.includes(j):q!==null?Ee.includes(j)&&Ee[Ee.length-1]!==j:Pe!==null?Ee.includes(j):!1}),v=G(()=>o.value===null&&!s.value),w=Dy(A,300,v),H=G(()=>!!(m!=null&&m.enteringSubmenuRef.value)),z=K(!1);Ye(Fu,{enteringSubmenuRef:z});function Y(){z.value=!0}function E(){z.value=!1}function te(){const{parentKey:j,tmNode:ie}=e;ie.disabled||l.value&&(r.value=j,o.value=null,t.value=ie.key)}function L(){const{tmNode:j}=e;j.disabled||l.value&&t.value!==j.key&&te()}function M(j){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:ie}=j;ie&&!bd({target:ie},"dropdownOption")&&!bd({target:ie},"scrollbarRail")&&(t.value=null)}function se(){const{value:j}=k,{tmNode:ie}=e;l.value&&!j&&!ie.disabled&&(n.doSelect(ie.key,ie.rawNode),n.doUpdateShow(!1))}return{labelField:u,renderLabel:c,renderIcon:d,siblingHasIcon:g.showIconRef,siblingHasSubmenu:g.hasSubmenuRef,menuProps:y,popoverBody:S,animated:s,mergedShowSubmenu:G(()=>w.value&&!H.value),rawNode:I,hasSubmenu:k,pending:An(()=>{const{value:j}=i,{key:ie}=e.tmNode;return j.includes(ie)}),childActive:An(()=>{const{value:j}=a,{key:ie}=e.tmNode,$=j.findIndex(q=>ie===q);return $===-1?!1:$<j.length-1}),active:An(()=>{const{value:j}=a,{key:ie}=e.tmNode,$=j.findIndex(q=>ie===q);return $===-1?!1:$===j.length-1}),mergedDisabled:T,renderOption:b,nodeProps:h,handleClick:se,handleMouseMove:L,handleMouseEnter:te,handleMouseLeave:M,handleSubmenuBeforeEnter:Y,handleSubmenuAfterEnter:E}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:c,renderOption:d,nodeProps:u,props:p,scrollable:b}=this;let h=null;if(r){const S=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);h=x(Nm,Object.assign({},S,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const y={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=u==null?void 0:u(o),g=x("div",Object.assign({class:[`${i}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),x("div",Ht(y,p),[x("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(o):En(o.icon)]),x("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(o):En((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),x("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?x(Fm,null,{default:()=>x($k,null)}):null)]),this.hasSubmenu?x(Th,null,{default:()=>[x(kh,null,{default:()=>x("div",{class:`${i}-dropdown-offset-container`},x(Ah,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>x("div",{class:`${i}-dropdown-menu-wrapper`},t?x(bt,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>h}):h)}))})]}):null);return d?d({node:g,option:o}):g}}),p3=ge({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=De(Rc),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=De(rs);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,l=x("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(s)),x("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},x("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},En(s.icon)),x("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):En((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),x("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}}),m3=ge({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return x(Je,null,x(p3,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Wm(i)?x(Lm,{clsPrefix:t,key:r.key}):r.isGroup?(No("dropdown","`group` node is not allowed to be put in `group` node."),null):x(jm,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),g3=ge({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return x("div",n,[e==null?void 0:e()])}}),Nm=ge({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=De(rs);Ye(Rc,{showIconRef:G(()=>{const r=n.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:G(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>Pl(l,r));const{rawNode:s}=i;return Pl(s,r)})})});const o=K(null);return Ye(Va,null),Ye(Ka,null),Ye(Si,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:h3(i)?x(g3,{tmNode:r,key:r.key}):Wm(i)?x(Lm,{clsPrefix:n,key:r.key}):f3(i)?x(m3,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):x(jm,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return x("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?x(Wp,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?Kp({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),b3=ne("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Np(),ne("dropdown-option",`
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
 `),Mn("disabled",[Q("pending",`
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
 `)]),Mn("scrollable",`
 padding: var(--n-padding);
 `),Q("scrollable",[F("content",`
 padding: var(--n-padding);
 `)])]),v3={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},y3=Object.keys(ns),x3=Object.assign(Object.assign(Object.assign({},ns),v3),Ie.props),C3=ge({name:"Dropdown",inheritAttrs:!1,props:x3,setup(e){const n=K(!1),t=tc(Xe(e,"show"),n),o=G(()=>{const{keyField:E,childrenField:te}=e;return sP(e.options,{getKey(L){return L[E]},getDisabled(L){return L.disabled===!0},getIgnored(L){return L.type==="divider"||L.type==="render"},getChildren(L){return L[te]}})}),r=G(()=>o.value.treeNodes),i=K(null),a=K(null),s=K(null),l=G(()=>{var E,te,L;return(L=(te=(E=i.value)!==null&&E!==void 0?E:a.value)!==null&&te!==void 0?te:s.value)!==null&&L!==void 0?L:null}),c=G(()=>o.value.getPath(l.value).keyPath),d=G(()=>o.value.getPath(e.value).keyPath),u=An(()=>e.keyboard&&t.value);Zy({keydown:{ArrowUp:{prevent:!0,handler:T},ArrowRight:{prevent:!0,handler:k},ArrowDown:{prevent:!0,handler:A},ArrowLeft:{prevent:!0,handler:I},Enter:{prevent:!0,handler:v},Escape:S}},u);const{mergedClsPrefixRef:p,inlineThemeDisabled:b}=fn(e),h=Ie("Dropdown","-dropdown",b3,os,e,p);Ye(rs,{labelFieldRef:Xe(e,"labelField"),childrenFieldRef:Xe(e,"childrenField"),renderLabelRef:Xe(e,"renderLabel"),renderIconRef:Xe(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:d,animatedRef:Xe(e,"animated"),mergedShowRef:t,nodePropsRef:Xe(e,"nodeProps"),renderOptionRef:Xe(e,"renderOption"),menuPropsRef:Xe(e,"menuProps"),doSelect:y,doUpdateShow:m}),pn(t,E=>{!e.animated&&!E&&g()});function y(E,te){const{onSelect:L}=e;L&&nn(L,E,te)}function m(E){const{"onUpdate:show":te,onUpdateShow:L}=e;te&&nn(te,E),L&&nn(L,E),n.value=E}function g(){i.value=null,a.value=null,s.value=null}function S(){m(!1)}function I(){H("left")}function k(){H("right")}function T(){H("up")}function A(){H("down")}function v(){const E=w();E!=null&&E.isLeaf&&t.value&&(y(E.key,E.rawNode),m(!1))}function w(){var E;const{value:te}=o,{value:L}=l;return!te||L===null?null:(E=te.getNode(L))!==null&&E!==void 0?E:null}function H(E){const{value:te}=l,{value:{getFirstAvailableNode:L}}=o;let M=null;if(te===null){const se=L();se!==null&&(M=se.key)}else{const se=w();if(se){let j;switch(E){case"down":j=se.getNext();break;case"up":j=se.getPrev();break;case"right":j=se.getChild();break;case"left":j=se.getParent();break}j&&(M=j.key)}}M!==null&&(i.value=null,a.value=M)}const z=G(()=>{const{size:E,inverted:te}=e,{common:{cubicBezierEaseInOut:L},self:M}=h.value,{padding:se,dividerColor:j,borderRadius:ie,optionOpacityDisabled:$,[be("optionIconSuffixWidth",E)]:q,[be("optionSuffixWidth",E)]:Pe,[be("optionIconPrefixWidth",E)]:Ee,[be("optionPrefixWidth",E)]:Pn,[be("fontSize",E)]:Be,[be("optionHeight",E)]:Oe,[be("optionIconSize",E)]:we}=M,ze={"--n-bezier":L,"--n-font-size":Be,"--n-padding":se,"--n-border-radius":ie,"--n-option-height":Oe,"--n-option-prefix-width":Pn,"--n-option-icon-prefix-width":Ee,"--n-option-suffix-width":Pe,"--n-option-icon-suffix-width":q,"--n-option-icon-size":we,"--n-divider-color":j,"--n-option-opacity-disabled":$};return te?(ze["--n-color"]=M.colorInverted,ze["--n-option-color-hover"]=M.optionColorHoverInverted,ze["--n-option-color-active"]=M.optionColorActiveInverted,ze["--n-option-text-color"]=M.optionTextColorInverted,ze["--n-option-text-color-hover"]=M.optionTextColorHoverInverted,ze["--n-option-text-color-active"]=M.optionTextColorActiveInverted,ze["--n-option-text-color-child-active"]=M.optionTextColorChildActiveInverted,ze["--n-prefix-color"]=M.prefixColorInverted,ze["--n-suffix-color"]=M.suffixColorInverted,ze["--n-group-header-text-color"]=M.groupHeaderTextColorInverted):(ze["--n-color"]=M.color,ze["--n-option-color-hover"]=M.optionColorHover,ze["--n-option-color-active"]=M.optionColorActive,ze["--n-option-text-color"]=M.optionTextColor,ze["--n-option-text-color-hover"]=M.optionTextColorHover,ze["--n-option-text-color-active"]=M.optionTextColorActive,ze["--n-option-text-color-child-active"]=M.optionTextColorChildActive,ze["--n-prefix-color"]=M.prefixColor,ze["--n-suffix-color"]=M.suffixColor,ze["--n-group-header-text-color"]=M.groupHeaderTextColor),ze}),Y=b?Dn("dropdown",G(()=>`${e.size[0]}${e.inverted?"i":""}`),z,e):void 0;return{mergedClsPrefix:p,mergedTheme:h,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&g()},doUpdateShow:m,cssVars:b?void 0:z,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender}},render(){const e=(o,r,i,a,s)=>{var l;const{mergedClsPrefix:c,menuProps:d}=this;(l=this.onRender)===null||l===void 0||l.call(this);const u=(d==null?void 0:d(void 0,this.tmNodes.map(b=>b.rawNode)))||{},p={ref:ny(r),class:[o,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return x(Nm,Ht(this.$attrs,p,u))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return x(Ta,Object.assign({},jo(this.$props,y3),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),w3={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},Gm=e=>{const{popoverColor:n,textColor2:t,primaryColor:o,hoverColor:r,dividerColor:i,opacityDisabled:a,boxShadow2:s,borderRadius:l,iconColor:c,iconColorDisabled:d}=e;return Object.assign(Object.assign({},w3),{panelColor:n,panelBoxShadow:s,panelDividerColor:i,itemTextColor:t,itemTextColorActive:o,itemColorHover:r,itemOpacityDisabled:a,itemBorderRadius:l,borderRadius:l,iconColor:c,iconColorDisabled:d})},S3={name:"TimePicker",common:ce,peers:{Scrollbar:qn,Button:Zn,Input:dt},self:Gm},Vm=S3,T3={name:"TimePicker",common:le,peers:{Scrollbar:tt,Button:ot,Input:vt},self:Gm},Km=T3,k3={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},Um=e=>{const{hoverColor:n,fontSize:t,textColor2:o,textColorDisabled:r,popoverColor:i,primaryColor:a,borderRadiusSmall:s,iconColor:l,iconColorDisabled:c,textColor1:d,dividerColor:u,boxShadow2:p,borderRadius:b,fontWeightStrong:h}=e;return Object.assign(Object.assign({},k3),{itemFontSize:t,calendarDaysFontSize:t,calendarTitleFontSize:t,itemTextColor:o,itemTextColorDisabled:r,itemTextColorActive:i,itemTextColorCurrent:a,itemColorIncluded:V(a,{alpha:.1}),itemColorHover:n,itemColorDisabled:n,itemColorActive:a,itemBorderRadius:s,panelColor:i,panelTextColor:o,arrowColor:l,calendarTitleTextColor:d,calendarTitleColorHover:n,calendarDaysTextColor:o,panelHeaderDividerColor:u,calendarDaysDividerColor:u,calendarDividerColor:u,panelActionDividerColor:u,panelBoxShadow:p,panelBorderRadius:b,calendarTitleFontWeight:h,scrollItemBorderRadius:b,iconColor:l,iconColorDisabled:c})},P3={name:"DatePicker",common:ce,peers:{Input:dt,Button:Zn,TimePicker:Vm,Scrollbar:qn},self:Um},$3=P3,A3={name:"DatePicker",common:le,peers:{Input:vt,Button:ot,TimePicker:Km,Scrollbar:tt},self(e){const{popoverColor:n,hoverColor:t,primaryColor:o}=e,r=Um(e);return r.itemColorDisabled=ve(n,t),r.itemColorIncluded=V(o,{alpha:.15}),r.itemColorHover=ve(n,t),r}},R3=A3;var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const D3={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},qm=e=>{const{tableHeaderColor:n,textColor2:t,textColor1:o,cardColor:r,modalColor:i,popoverColor:a,dividerColor:s,borderRadius:l,fontWeightStrong:c,lineHeight:d,fontSizeSmall:u,fontSizeMedium:p,fontSizeLarge:b}=e;return Object.assign(Object.assign({},D3),{lineHeight:d,fontSizeSmall:u,fontSizeMedium:p,fontSizeLarge:b,titleTextColor:o,thColor:ve(r,n),thColorModal:ve(i,n),thColorPopover:ve(a,n),thTextColor:o,thFontWeight:c,tdTextColor:t,tdColor:r,tdColorModal:i,tdColorPopover:a,borderColor:ve(r,s),borderColorModal:ve(i,s),borderColorPopover:ve(a,s),borderRadius:l})},I3={name:"Descriptions",common:ce,self:qm},H3=I3,_3={name:"Descriptions",common:le,self:qm},E3=_3,z3={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},Zm=e=>{const{textColor1:n,textColor2:t,modalColor:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,infoColor:c,successColor:d,warningColor:u,errorColor:p,primaryColor:b,dividerColor:h,borderRadius:y,fontWeightStrong:m,lineHeight:g,fontSize:S}=e;return Object.assign(Object.assign({},z3),{fontSize:S,lineHeight:g,border:`1px solid ${h}`,titleTextColor:n,textColor:t,color:o,closeColorHover:s,closeColorPressed:l,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeBorderRadius:y,iconColor:b,iconColorInfo:c,iconColorSuccess:d,iconColorWarning:u,iconColorError:p,borderRadius:y,titleFontWeight:m})},M3={name:"Dialog",common:ce,peers:{Button:Zn},self:Zm},Dc=M3,L3={name:"Dialog",common:le,peers:{Button:ot},self:Zm},Xm=L3,is={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Jm=Wa(is),O3=O([ne("dialog",`
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
 `),ne("dialog-icon-container",{display:"flex",justifyContent:"center"})]),ph(ne("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),ne("dialog",[mh(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),B3={default:()=>x(wa,null),info:()=>x(wa,null),success:()=>x(vc,null),warning:()=>x(yc,null),error:()=>x(bc,null)},Ym=ge({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},Ie.props),is),setup(e){const{mergedComponentPropsRef:n,mergedClsPrefixRef:t,inlineThemeDisabled:o}=fn(e),r=G(()=>{var u,p;const{iconPlacement:b}=e;return b||((p=(u=n==null?void 0:n.value)===null||u===void 0?void 0:u.Dialog)===null||p===void 0?void 0:p.iconPlacement)||"left"});function i(u){const{onPositiveClick:p}=e;p&&p(u)}function a(u){const{onNegativeClick:p}=e;p&&p(u)}function s(){const{onClose:u}=e;u&&u()}const l=Ie("Dialog","-dialog",O3,Dc,e,t),c=G(()=>{const{type:u}=e,p=r.value,{common:{cubicBezierEaseInOut:b},self:{fontSize:h,lineHeight:y,border:m,titleTextColor:g,textColor:S,color:I,closeBorderRadius:k,closeColorHover:T,closeColorPressed:A,closeIconColor:v,closeIconColorHover:w,closeIconColorPressed:H,closeIconSize:z,borderRadius:Y,titleFontWeight:E,titleFontSize:te,padding:L,iconSize:M,actionSpace:se,contentMargin:j,closeSize:ie,[p==="top"?"iconMarginIconTop":"iconMargin"]:$,[p==="top"?"closeMarginIconTop":"closeMargin"]:q,[be("iconColor",u)]:Pe}}=l.value;return{"--n-font-size":h,"--n-icon-color":Pe,"--n-bezier":b,"--n-close-margin":q,"--n-icon-margin":$,"--n-icon-size":M,"--n-close-size":ie,"--n-close-icon-size":z,"--n-close-border-radius":k,"--n-close-color-hover":T,"--n-close-color-pressed":A,"--n-close-icon-color":v,"--n-close-icon-color-hover":w,"--n-close-icon-color-pressed":H,"--n-color":I,"--n-text-color":S,"--n-border-radius":Y,"--n-padding":L,"--n-line-height":y,"--n-border":m,"--n-content-margin":j,"--n-title-font-size":te,"--n-title-font-weight":E,"--n-title-text-color":g,"--n-action-space":se}}),d=o?Dn("dialog",G(()=>`${e.type[0]}${r.value[0]}`),c,e):void 0;return{mergedClsPrefix:t,mergedIconPlacement:r,mergedTheme:l,handlePositiveClick:i,handleNegativeClick:a,handleCloseClick:s,cssVars:o?void 0:c,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{bordered:n,mergedIconPlacement:t,cssVars:o,closable:r,showIcon:i,title:a,content:s,action:l,negativeText:c,positiveText:d,positiveButtonProps:u,negativeButtonProps:p,handlePositiveClick:b,handleNegativeClick:h,mergedTheme:y,loading:m,type:g,mergedClsPrefix:S}=this;(e=this.onRender)===null||e===void 0||e.call(this);const I=i?x(po,{clsPrefix:S,class:`${S}-dialog__icon`},{default:()=>zn(this.$slots.icon,T=>T||(this.icon?En(this.icon):B3[this.type]()))}):null,k=zn(this.$slots.action,T=>T||d||c||l?x("div",{class:`${S}-dialog__action`},T||(l?[En(l)]:[this.negativeText&&x(kl,Object.assign({theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,ghost:!0,size:"small",onClick:h},p),{default:()=>En(this.negativeText)}),this.positiveText&&x(kl,Object.assign({theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,size:"small",type:g==="default"?"primary":g,disabled:m,loading:m,onClick:b},u),{default:()=>En(this.positiveText)})])):null);return x("div",{class:[`${S}-dialog`,this.themeClass,this.closable&&`${S}-dialog--closable`,`${S}-dialog--icon-${t}`,n&&`${S}-dialog--bordered`],style:o,role:"dialog"},r?x(Qa,{clsPrefix:S,class:`${S}-dialog__close`,onClick:this.handleCloseClick}):null,i&&t==="top"?x("div",{class:`${S}-dialog-icon-container`},I):null,x("div",{class:`${S}-dialog__title`},i&&t==="left"?I:null,Oo(this.$slots.header,()=>[En(a)])),x("div",{class:[`${S}-dialog__content`,k?"":`${S}-dialog__content--last`]},Oo(this.$slots.default,()=>[En(s)])),k)}}),Qm="n-dialog-provider",eg="n-dialog-api",F3="n-dialog-reactive-list",ng=e=>{const{modalColor:n,textColor2:t,boxShadow3:o}=e;return{color:n,textColor:t,boxShadow:o}},W3={name:"Modal",common:ce,peers:{Scrollbar:qn,Dialog:Dc,Card:kc},self:ng},tg=W3,j3={name:"Modal",common:le,peers:{Scrollbar:tt,Dialog:Xm,Card:hm},self:ng},N3=j3,Ic=Object.assign(Object.assign({},Pc),is),G3=Wa(Ic),V3=ge({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},Ic),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const n=K(null),t=K(null),o=K(e.show),r=K(null),i=K(null);pn(Xe(e,"show"),m=>{m&&(o.value=!0)}),Fx(G(()=>e.blockScroll&&o.value));const a=De(xh);function s(){if(a.transformOriginRef.value==="center")return"";const{value:m}=r,{value:g}=i;if(m===null||g===null)return"";if(t.value){const S=t.value.containerScrollTop;return`${m}px ${g+S}px`}return""}function l(m){if(a.transformOriginRef.value==="center")return;const g=a.getMousePosition();if(!g||!t.value)return;const S=t.value.containerScrollTop,{offsetLeft:I,offsetTop:k}=m;if(g){const T=g.y,A=g.x;r.value=-(I-A),i.value=-(k-T-S)}m.style.transformOrigin=s()}function c(m){Vn(()=>{l(m)})}function d(m){m.style.transformOrigin=s(),e.onBeforeLeave()}function u(){o.value=!1,r.value=null,i.value=null,e.onAfterLeave()}function p(){const{onClose:m}=e;m&&m()}function b(){e.onNegativeClick()}function h(){e.onPositiveClick()}const y=K(null);return pn(y,m=>{m&&Vn(()=>{const g=m.el;g&&n.value!==g&&(n.value=g)})}),Ye(Va,n),Ye(Ka,null),Ye(Si,null),{mergedTheme:a.mergedThemeRef,appear:a.appearRef,isMounted:a.isMountedRef,mergedClsPrefix:a.mergedClsPrefixRef,bodyRef:n,scrollbarRef:t,displayed:o,childNodeRef:y,handlePositiveClick:h,handleNegativeClick:b,handleCloseClick:p,handleAfterLeave:u,handleBeforeLeave:d,handleEnter:c}},render(){const{$slots:e,$attrs:n,handleEnter:t,handleAfterLeave:o,handleBeforeLeave:r,preset:i,mergedClsPrefix:a}=this;let s=null;if(!i){if(s=ll(e),!s){No("modal","default slot is empty");return}s=gt(s),s.props=Ht({class:`${a}-modal`},n,s.props||{})}return this.displayDirective==="show"||this.displayed||this.show?co(x("div",{role:"none",class:`${a}-modal-body-wrapper`},x(es,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${a}-modal-scroll-content`},{default:()=>{var l;return[(l=this.renderMask)===null||l===void 0?void 0:l.call(this),x(Bh,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var c;return x(bt,{name:"fade-in-scale-up-transition",appear:(c=this.appear)!==null&&c!==void 0?c:this.isMounted,onEnter:t,onAfterEnter:this.onAfterEnter,onAfterLeave:o,onBeforeLeave:r},{default:()=>{const d=[[mr,this.show]],{onClickoutside:u}=this;return u&&d.push([hl,this.onClickoutside,void 0,{capture:!0}]),co(this.preset==="confirm"||this.preset==="dialog"?x(Ym,Object.assign({},this.$attrs,{class:[`${a}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},jo(this.$props,Jm),{"aria-modal":"true"}),e):this.preset==="card"?x(lA,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${a}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},jo(this.$props,aA),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=s,d)}})}})]}})),[[mr,this.displayDirective==="if"||this.displayed||this.show]]):null}}),K3=O([ne("modal-container",`
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
 `,[wc({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),ne("modal-body-wrapper",`
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
 `,[Np({duration:".25s",enterScale:".5"})])]),U3=Object.assign(Object.assign(Object.assign(Object.assign({},Ie.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Ic),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),q3=ge({name:"Modal",inheritAttrs:!1,props:U3,setup(e){const n=K(null),{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:r}=fn(e),i=Ie("Modal","-modal",K3,tg,e,t),a=vh(64),s=bh(),l=wi(),c=e.internalDialog?De(Qm,null):null,d=Wx();function u(T){const{onUpdateShow:A,"onUpdate:show":v,onHide:w}=e;A&&nn(A,T),v&&nn(v,T),w&&!T&&w(T)}function p(){const{onClose:T}=e;T?Promise.resolve(T()).then(A=>{A!==!1&&u(!1)}):u(!1)}function b(){const{onPositiveClick:T}=e;T?Promise.resolve(T()).then(A=>{A!==!1&&u(!1)}):u(!1)}function h(){const{onNegativeClick:T}=e;T?Promise.resolve(T()).then(A=>{A!==!1&&u(!1)}):u(!1)}function y(){const{onBeforeLeave:T,onBeforeHide:A}=e;T&&nn(T),A&&A()}function m(){const{onAfterLeave:T,onAfterHide:A}=e;T&&nn(T),A&&A()}function g(T){var A;const{onMaskClick:v}=e;v&&v(T),e.maskClosable&&!((A=n.value)===null||A===void 0)&&A.contains(ui(T))&&u(!1)}function S(T){var A;(A=e.onEsc)===null||A===void 0||A.call(e),e.show&&e.closeOnEsc&&Ry(T)&&!d.value&&u(!1)}Ye(xh,{getMousePosition:()=>{if(c){const{clickedRef:T,clickPositionRef:A}=c;if(T.value&&A.value)return A.value}return a.value?s.value:null},mergedClsPrefixRef:t,mergedThemeRef:i,isMountedRef:l,appearRef:Xe(e,"internalAppear"),transformOriginRef:Xe(e,"transformOrigin")});const I=G(()=>{const{common:{cubicBezierEaseOut:T},self:{boxShadow:A,color:v,textColor:w}}=i.value;return{"--n-bezier-ease-out":T,"--n-box-shadow":A,"--n-color":v,"--n-text-color":w}}),k=r?Dn("theme-class",void 0,I,e):void 0;return{mergedClsPrefix:t,namespace:o,isMounted:l,containerRef:n,presetProps:G(()=>jo(e,G3)),handleEsc:S,handleAfterLeave:m,handleClickoutside:g,handleBeforeLeave:y,doUpdateShow:u,handleNegativeClick:h,handlePositiveClick:b,handleCloseClick:p,cssVars:r?void 0:I,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e}=this;return x($h,{to:this.to,show:this.show},{default:()=>{var n;(n=this.onRender)===null||n===void 0||n.call(this);const{unstableShowMask:t}=this;return co(x("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},x(V3,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:t?void 0:this.handleClickoutside,renderMask:t?()=>{var o;return x(bt,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?x("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[oc,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Z3=Object.assign(Object.assign({},is),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function}),X3=ge({name:"DialogEnvironment",props:Object.assign(Object.assign({},Z3),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const n=K(!0);function t(){const{onInternalAfterLeave:d,internalKey:u,onAfterLeave:p}=e;d&&d(u),p&&p()}function o(d){const{onPositiveClick:u}=e;u?Promise.resolve(u(d)).then(p=>{p!==!1&&l()}):l()}function r(d){const{onNegativeClick:u}=e;u?Promise.resolve(u(d)).then(p=>{p!==!1&&l()}):l()}function i(){const{onClose:d}=e;d?Promise.resolve(d()).then(u=>{u!==!1&&l()}):l()}function a(d){const{onMaskClick:u,maskClosable:p}=e;u&&(u(d),p&&l())}function s(){const{onEsc:d}=e;d&&d()}function l(){n.value=!1}function c(d){n.value=d}return{show:n,hide:l,handleUpdateShow:c,handleAfterLeave:t,handleCloseClick:i,handleNegativeClick:r,handlePositiveClick:o,handleMaskClick:a,handleEsc:s}},render(){const{handlePositiveClick:e,handleUpdateShow:n,handleNegativeClick:t,handleCloseClick:o,handleAfterLeave:r,handleMaskClick:i,handleEsc:a,to:s,maskClosable:l,show:c}=this;return x(q3,{show:c,onUpdateShow:n,onMaskClick:i,onEsc:a,to:s,maskClosable:l,onAfterEnter:this.onAfterEnter,onAfterLeave:r,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,internalAppear:!0,internalDialog:!0},{default:()=>x(Ym,Object.assign({},jo(this.$props,Jm),{style:this.internalStyle,onClose:o,onNegativeClick:t,onPositiveClick:e}))})}}),J3={injectionKey:String,to:[String,Object]},Y3=ge({name:"DialogProvider",props:J3,setup(){const e=K([]),n={};function t(s={}){const l=Fa(),c=mo(Object.assign(Object.assign({},s),{key:l,destroy:()=>{n[`n-dialog-${l}`].hide()}}));return e.value.push(c),c}const o=["info","success","warning","error"].map(s=>l=>t(Object.assign(Object.assign({},l),{type:s})));function r(s){const{value:l}=e;l.splice(l.findIndex(c=>c.key===s),1)}function i(){Object.values(n).forEach(s=>s.hide())}const a={create:t,destroyAll:i,info:o[0],success:o[1],warning:o[2],error:o[3]};return Ye(eg,a),Ye(Qm,{clickedRef:vh(64),clickPositionRef:bh()}),Ye(F3,e),Object.assign(Object.assign({},a),{dialogList:e,dialogInstRefs:n,handleAfterLeave:r})},render(){var e,n;return x(Je,null,[this.dialogList.map(t=>x(X3,nc(t,["destroy","style"],{internalStyle:t.style,to:this.to,ref:o=>{o===null?delete this.dialogInstRefs[`n-dialog-${t.key}`]:this.dialogInstRefs[`n-dialog-${t.key}`]=o},internalKey:t.key,onInternalAfterLeave:this.handleAfterLeave}))),(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)])}});function Q3(){const e=De(eg,null);return e===null&&xi("use-dialog","No outer <n-dialog-provider /> founded."),e}const og=e=>{const{textColor1:n,dividerColor:t,fontWeightStrong:o}=e;return{textColor:n,color:t,fontWeight:o}},eR={name:"Divider",common:ce,self:og},rg=eR,nR={name:"Divider",common:le,self:og},tR=nR,oR=ne("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[Mn("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[Mn("no-title",`
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
 `),Mn("dashed",[F("line",{backgroundColor:"var(--n-color)"})]),Q("dashed",[F("line",{borderColor:"var(--n-color)"})]),Q("vertical",{backgroundColor:"var(--n-color)"})]),rR=Object.assign(Object.assign({},Ie.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),iR=ge({name:"Divider",props:rR,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=fn(e),o=Ie("Divider","-divider",oR,rg,e,n),r=G(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:s,textColor:l,fontWeight:c}}=o.value;return{"--n-bezier":a,"--n-color":s,"--n-text-color":l,"--n-font-weight":c}}),i=t?Dn("divider",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:t,vertical:o,dashed:r,cssVars:i,mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),x("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:o,[`${a}-divider--no-title`]:!n.default,[`${a}-divider--dashed`]:r,[`${a}-divider--title-position-${t}`]:n.default&&t}],style:i},o?null:x("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!o&&n.default?x(Je,null,x("div",{class:`${a}-divider__title`},this.$slots),x("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),ig=e=>{const{modalColor:n,textColor1:t,textColor2:o,boxShadow3:r,lineHeight:i,fontWeightStrong:a,dividerColor:s,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,borderRadius:b,primaryColorHover:h}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:n,textColor:o,titleTextColor:t,titleFontSize:"18px",titleFontWeight:a,boxShadow:r,lineHeight:i,headerBorderBottom:`1px solid ${s}`,footerBorderTop:`1px solid ${s}`,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:p,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:c,closeBorderRadius:b,resizableTriggerColorHover:h}},aR={name:"Drawer",common:ce,peers:{Scrollbar:qn},self:ig},sR=aR,lR={name:"Drawer",common:le,peers:{Scrollbar:tt},self:ig},cR=lR,ag={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},dR={name:"DynamicInput",common:le,peers:{Input:vt,Button:ot},self(){return ag}},uR=dR,fR=()=>ag,hR={name:"DynamicInput",common:ce,peers:{Input:dt,Button:Zn},self:fR},pR=hR,sg={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},mR={name:"Space",self(){return sg}},lg=mR,gR=()=>sg,bR={name:"Space",self:gR},Hc=bR;let Ns;const vR=()=>{if(!go)return!0;if(Ns===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),Ns=n}return Ns},yR=Object.assign(Object.assign({},Ie.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),xR=ge({name:"Space",props:yR,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=fn(e),o=Ie("Space","-space",void 0,Hc,e,n),r=qo("Space",t,n);return{useGap:vR(),rtlEnabled:r,mergedClsPrefix:n,margin:G(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[be("gap",i)]:a}}=o.value,{row:s,col:l}=K0(a);return{horizontal:vd(l),vertical:vd(s)}})}},render(){const{vertical:e,align:n,inline:t,justify:o,itemStyle:r,margin:i,wrap:a,mergedClsPrefix:s,rtlEnabled:l,useGap:c,wrapItem:d,internalUseGap:u}=this,p=fi(ah(this));if(!p.length)return null;const b=`${i.horizontal}px`,h=`${i.horizontal/2}px`,y=`${i.vertical}px`,m=`${i.vertical/2}px`,g=p.length-1,S=o.startsWith("space-");return x("div",{role:"none",class:[`${s}-space`,l&&`${s}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!a||e?"nowrap":"wrap",marginTop:c||e?"":`-${m}`,marginBottom:c||e?"":`-${m}`,alignItems:n,gap:c?`${i.vertical}px ${i.horizontal}px`:""}},!d&&(c||u)?p:p.map((I,k)=>x("div",{role:"none",style:[r,{maxWidth:"100%"},c?"":e?{marginBottom:k!==g?y:""}:l?{marginLeft:S?o==="space-between"&&k===g?"":h:k!==g?b:"",marginRight:S?o==="space-between"&&k===0?"":h:"",paddingTop:m,paddingBottom:m}:{marginRight:S?o==="space-between"&&k===g?"":h:k!==g?b:"",marginLeft:S?o==="space-between"&&k===0?"":h:"",paddingTop:m,paddingBottom:m}]},I)))}}),CR={name:"DynamicTags",common:le,peers:{Input:vt,Button:ot,Tag:qp,Space:lg},self(){return{inputWidth:"64px"}}},wR=CR,SR={name:"DynamicTags",common:ce,peers:{Input:dt,Button:Zn,Tag:Zp,Space:Hc},self(){return{inputWidth:"64px"}}},TR=SR,kR={name:"Element",common:le},PR=kR,$R={name:"Element",common:ce},cg=$R,AR=Object.assign(Object.assign({},Ie.props),{tag:{type:String,default:"div"}}),na=ge({name:"Element",alias:["El"],props:AR,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=fn(e),o=Ie("Element","-element",void 0,cg,e,n),r=G(()=>{const{common:a}=o.value;return Object.keys(a).reduce((s,l)=>(s[`--${H2(l)}`]=a[l],s),{})}),i=t?Dn("element",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{tag:n,mergedClsPrefix:t,cssVars:o,themeClass:r,onRender:i,$slots:a}=this;return i==null||i(),x(n,{role:"none",class:[`${t}-element`,r],style:o},(e=a.default)===null||e===void 0?void 0:e.call(a))}}),RR={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},dg=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,textColor1:r,errorColor:i,warningColor:a,lineHeight:s,textColor3:l}=e;return Object.assign(Object.assign({},RR),{blankHeightSmall:n,blankHeightMedium:t,blankHeightLarge:o,lineHeight:s,labelTextColor:r,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:a,feedbackTextColor:l})},DR={name:"Form",common:ce,self:dg},IR=DR,HR={name:"Form",common:le,self:dg},_R=HR,Wu=1,ug="n-grid",fg=1,ER={span:{type:[Number,String],default:fg},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},zR=ge({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:ER,setup(){const{isSsrRef:e,xGapRef:n,itemStyleRef:t,overflowRef:o,layoutShiftDisabledRef:r}=De(ug),i=Gt();return{overflow:o,itemStyle:t,layoutShiftDisabled:r,mergedXGap:G(()=>sr(n.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=fg,privateShow:s=!0,privateColStart:l=void 0,privateOffset:c=0}=i.vnode.props,{value:d}=n,u=sr(d||0);return{display:s?"":"none",gridColumn:`${l??`span ${a}`} / span ${a}`,marginLeft:c?`calc((100% - (${a} - 1) * ${u}) / ${a} * ${c} + ${u} * ${c})`:""}}}},render(){var e,n;if(this.layoutShiftDisabled){const{span:t,offset:o,mergedXGap:r}=this;return x("div",{style:{gridColumn:`span ${t} / span ${t}`,marginLeft:o?`calc((100% - (${t} - 1) * ${r}) / ${t} * ${o} + ${r} * ${o})`:""}},this.$slots)}return x("div",{style:[this.itemStyle,this.deriveStyle()]},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e,{overflow:this.overflow}))}}),MR={name:"GradientText",common:le,self(e){const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,primaryColorSuppl:a,successColorSuppl:s,warningColorSuppl:l,errorColorSuppl:c,infoColorSuppl:d,fontWeightStrong:u}=e;return{fontWeight:u,rotate:"252deg",colorStartPrimary:n,colorEndPrimary:a,colorStartInfo:i,colorEndInfo:d,colorStartWarning:o,colorEndWarning:l,colorStartError:r,colorEndError:c,colorStartSuccess:t,colorEndSuccess:s}}},LR=MR,OR=e=>{const{primaryColor:n,successColor:t,warningColor:o,errorColor:r,infoColor:i,fontWeightStrong:a}=e;return{fontWeight:a,rotate:"252deg",colorStartPrimary:V(n,{alpha:.6}),colorEndPrimary:n,colorStartInfo:V(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:V(o,{alpha:.6}),colorEndWarning:o,colorStartError:V(r,{alpha:.6}),colorEndError:r,colorStartSuccess:V(t,{alpha:.6}),colorEndSuccess:t}},BR={name:"GradientText",common:ce,self:OR},FR=BR,WR={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},hg=24,Gs="__ssr__",jR={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:hg},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},NR=ge({name:"Grid",inheritAttrs:!1,props:jR,setup(e){const{mergedClsPrefixRef:n,mergedBreakpointsRef:t}=fn(e),o=/^\d+$/,r=K(void 0),i=qy((t==null?void 0:t.value)||WR),a=An(()=>!!(e.itemResponsive||!o.test(e.cols.toString())||!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))),s=G(()=>{if(a.value)return e.responsive==="self"?r.value:i.value}),l=An(()=>{var g;return(g=Number(Lr(e.cols.toString(),s.value)))!==null&&g!==void 0?g:hg}),c=An(()=>Lr(e.xGap.toString(),s.value)),d=An(()=>Lr(e.yGap.toString(),s.value)),u=g=>{r.value=g.contentRect.width},p=g=>{ih(u,g)},b=K(!1),h=G(()=>{if(e.responsive==="self")return p}),y=K(!1),m=K();return Un(()=>{const{value:g}=m;g&&g.hasAttribute(Gs)&&(g.removeAttribute(Gs),y.value=!0)}),Ye(ug,{layoutShiftDisabledRef:Xe(e,"layoutShiftDisabled"),isSsrRef:y,itemStyleRef:Xe(e,"itemStyle"),xGapRef:c,overflowRef:b}),{isSsr:!go,contentEl:m,mergedClsPrefix:n,style:G(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:sr(e.xGap),rowGap:sr(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${l.value}, minmax(0, 1fr))`,columnGap:sr(c.value),rowGap:sr(d.value)}),isResponsive:a,responsiveQuery:s,responsiveCols:l,handleResize:h,overflow:b}},render(){if(this.layoutShiftDisabled)return x("div",Ht({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var n,t,o,r,i,a,s;this.overflow=!1;const l=fi(ah(this)),c=[],{collapsed:d,collapsedRows:u,responsiveCols:p,responsiveQuery:b}=this;l.forEach(S=>{var I,k,T,A;if(((I=S==null?void 0:S.type)===null||I===void 0?void 0:I.__GRID_ITEM__)!==!0)return;if(oy(S)){const H=gt(S);H.props?H.props.privateShow=!1:H.props={privateShow:!1},c.push({child:H,rawChildSpan:0});return}S.dirs=((k=S.dirs)===null||k===void 0?void 0:k.filter(({dir:H})=>H!==mr))||null;const v=gt(S),w=Number((A=Lr((T=v.props)===null||T===void 0?void 0:T.span,b))!==null&&A!==void 0?A:Wu);w!==0&&c.push({child:v,rawChildSpan:w})});let h=0;const y=(n=c[c.length-1])===null||n===void 0?void 0:n.child;if(y!=null&&y.props){const S=(t=y.props)===null||t===void 0?void 0:t.suffix;S!==void 0&&S!==!1&&(h=(r=(o=y.props)===null||o===void 0?void 0:o.span)!==null&&r!==void 0?r:Wu,y.props.privateSpan=h,y.props.privateColStart=p+1-h,y.props.privateShow=(i=y.props.privateShow)!==null&&i!==void 0?i:!0)}let m=0,g=!1;for(const{child:S,rawChildSpan:I}of c){if(g&&(this.overflow=!0),!g){const k=Number((s=Lr((a=S.props)===null||a===void 0?void 0:a.offset,b))!==null&&s!==void 0?s:0),T=Math.min(I+k,p);if(S.props?(S.props.privateSpan=T,S.props.privateOffset=k):S.props={privateSpan:T,privateOffset:k},d){const A=m%p;T+A>p&&(m+=p-A),T+m+h>u*p?g=!0:m+=T}}g&&(S.props?S.props.privateShow!==!0&&(S.props.privateShow=!1):S.props={privateShow:!1})}return x("div",Ht({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[Gs]:this.isSsr||void 0},this.$attrs),c.map(({child:S})=>S))};return this.isResponsive&&this.responsive==="self"?x(ga,{onResize:this.handleResize},{default:e}):e()}}),pg=e=>{const{primaryColor:n,baseColor:t}=e;return{color:n,iconColor:t}},GR={name:"IconWrapper",common:ce,self:pg},VR=GR,KR={name:"IconWrapper",common:le,self:pg},UR=KR;function qR(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const ZR={name:"Image",common:ce,peers:{Tooltip:Ai},self:qR},XR={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},mg=e=>{const{textColor2:n,successColor:t,infoColor:o,warningColor:r,errorColor:i,popoverColor:a,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:c,closeColorHover:d,closeColorPressed:u,textColor1:p,textColor3:b,borderRadius:h,fontWeightStrong:y,boxShadow2:m,lineHeight:g,fontSize:S}=e;return Object.assign(Object.assign({},XR),{borderRadius:h,lineHeight:g,fontSize:S,headerFontWeight:y,iconColor:n,iconColorSuccess:t,iconColorInfo:o,iconColorWarning:r,iconColorError:i,color:a,textColor:n,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:c,closeBorderRadius:h,closeColorHover:d,closeColorPressed:u,headerTextColor:p,descriptionTextColor:b,actionTextColor:n,boxShadow:m})},JR={name:"Notification",common:ce,peers:{Scrollbar:qn},self:mg},gg=JR,YR={name:"Notification",common:le,peers:{Scrollbar:tt},self:mg},QR=YR,eD={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},bg=e=>{const{textColor2:n,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,infoColor:i,successColor:a,errorColor:s,warningColor:l,popoverColor:c,boxShadow2:d,primaryColor:u,lineHeight:p,borderRadius:b,closeColorHover:h,closeColorPressed:y}=e;return Object.assign(Object.assign({},eD),{closeBorderRadius:b,textColor:n,textColorInfo:n,textColorSuccess:n,textColorError:n,textColorWarning:n,textColorLoading:n,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:d,boxShadowInfo:d,boxShadowSuccess:d,boxShadowError:d,boxShadowWarning:d,boxShadowLoading:d,iconColor:n,iconColorInfo:i,iconColorSuccess:a,iconColorWarning:l,iconColorError:s,iconColorLoading:u,closeColorHover:h,closeColorPressed:y,closeIconColor:t,closeIconColorHover:o,closeIconColorPressed:r,closeColorHoverInfo:h,closeColorPressedInfo:y,closeIconColorInfo:t,closeIconColorHoverInfo:o,closeIconColorPressedInfo:r,closeColorHoverSuccess:h,closeColorPressedSuccess:y,closeIconColorSuccess:t,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:r,closeColorHoverError:h,closeColorPressedError:y,closeIconColorError:t,closeIconColorHoverError:o,closeIconColorPressedError:r,closeColorHoverWarning:h,closeColorPressedWarning:y,closeIconColorWarning:t,closeIconColorHoverWarning:o,closeIconColorPressedWarning:r,closeColorHoverLoading:h,closeColorPressedLoading:y,closeIconColorLoading:t,closeIconColorHoverLoading:o,closeIconColorPressedLoading:r,loadingColor:u,lineHeight:p,borderRadius:b})},nD={name:"Message",common:ce,self:bg},vg=nD,tD={name:"Message",common:le,self:bg},oD=tD,rD={name:"ButtonGroup",common:le},iD=rD,aD={name:"ButtonGroup",common:ce},sD=aD,lD={name:"InputNumber",common:le,peers:{Button:ot,Input:vt},self(e){const{textColorDisabled:n}=e;return{iconColorDisabled:n}}},cD=lD,dD=e=>{const{textColorDisabled:n}=e;return{iconColorDisabled:n}},uD={name:"InputNumber",common:ce,peers:{Button:Zn,Input:dt},self:dD},fD=uD,hD={name:"Layout",common:le,peers:{Scrollbar:tt},self(e){const{textColor2:n,bodyColor:t,popoverColor:o,cardColor:r,dividerColor:i,scrollbarColor:a,scrollbarColorHover:s}=e;return{textColor:n,textColorInverted:n,color:t,colorEmbedded:t,headerColor:r,headerColorInverted:r,footerColor:r,footerColorInverted:r,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:r,siderColorInverted:r,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:o,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:ve(t,a),siderToggleBarColorHover:ve(t,s),__invertScrollbar:"false"}}},pD=hD,mD=e=>{const{baseColor:n,textColor2:t,bodyColor:o,cardColor:r,dividerColor:i,actionColor:a,scrollbarColor:s,scrollbarColorHover:l,invertedColor:c}=e;return{textColor:t,textColorInverted:"#FFF",color:o,colorEmbedded:a,headerColor:r,headerColorInverted:c,footerColor:a,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:r,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:ve(o,s),siderToggleBarColorHover:ve(o,l),__invertScrollbar:"true"}},gD={name:"Layout",common:ce,peers:{Scrollbar:qn},self:mD},_c=gD,yg=e=>{const{textColor2:n,cardColor:t,modalColor:o,popoverColor:r,dividerColor:i,borderRadius:a,fontSize:s,hoverColor:l}=e;return{textColor:n,color:t,colorHover:l,colorModal:o,colorHoverModal:ve(o,l),colorPopover:r,colorHoverPopover:ve(r,l),borderColor:i,borderColorModal:ve(o,i),borderColorPopover:ve(r,i),borderRadius:a,fontSize:s}},bD={name:"List",common:ce,self:yg},vD=bD,yD={name:"List",common:le,self:yg},xD=yD,CD={name:"LoadingBar",common:le,self(e){const{primaryColor:n}=e;return{colorError:"red",colorLoading:n,height:"2px"}}},wD=CD,SD=e=>{const{primaryColor:n,errorColor:t}=e;return{colorError:t,colorLoading:n,height:"2px"}},TD={name:"LoadingBar",common:ce,self:SD},xg=TD,kD={name:"Log",common:le,peers:{Scrollbar:tt,Code:bm},self(e){const{textColor2:n,inputColor:t,fontSize:o,primaryColor:r}=e;return{loaderFontSize:o,loaderTextColor:n,loaderColor:t,loaderBorder:"1px solid #0000",loadingColor:r}}},PD=kD,$D=e=>{const{textColor2:n,modalColor:t,borderColor:o,fontSize:r,primaryColor:i}=e;return{loaderFontSize:r,loaderTextColor:n,loaderColor:t,loaderBorder:`1px solid ${o}`,loadingColor:i}},AD={name:"Log",common:ce,peers:{Scrollbar:qn,Code:vm},self:$D},RD=AD,DD={name:"Mention",common:le,peers:{InternalSelectMenu:$i,Input:vt},self(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}},ID=DD,HD=e=>{const{boxShadow2:n}=e;return{menuBoxShadow:n}},_D={name:"Mention",common:ce,peers:{InternalSelectMenu:Pi,Input:dt},self:HD},ED=_D;function zD(e,n,t,o){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:n,itemColorActiveHoverInverted:n,itemColorActiveCollapsedInverted:n,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:o}}const Cg=e=>{const{borderRadius:n,textColor3:t,primaryColor:o,textColor2:r,textColor1:i,fontSize:a,dividerColor:s,hoverColor:l,primaryColorHover:c}=e;return Object.assign({borderRadius:n,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:V(o,{alpha:.1}),itemColorActiveHover:V(o,{alpha:.1}),itemColorActiveCollapsed:V(o,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:o,itemTextColorActiveHover:o,itemTextColorChildActive:o,itemTextColorChildActiveHover:o,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:o,itemTextColorActiveHoverHorizontal:o,itemTextColorChildActiveHorizontal:o,itemTextColorChildActiveHoverHorizontal:o,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:o,itemIconColorActiveHover:o,itemIconColorChildActive:o,itemIconColorChildActiveHover:o,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:o,itemIconColorActiveHoverHorizontal:o,itemIconColorChildActiveHorizontal:o,itemIconColorChildActiveHoverHorizontal:o,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:o,arrowColorActiveHover:o,arrowColorChildActive:o,arrowColorChildActiveHover:o,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:s},zD("#BBB",o,"#FFF","#AAA"))},MD={name:"Menu",common:ce,peers:{Tooltip:Ai,Dropdown:os},self:Cg},LD=MD,OD={name:"Menu",common:le,peers:{Tooltip:ts,Dropdown:Ac},self(e){const{primaryColor:n,primaryColorSuppl:t}=e,o=Cg(e);return o.itemColorActive=V(n,{alpha:.15}),o.itemColorActiveHover=V(n,{alpha:.15}),o.itemColorActiveCollapsed=V(n,{alpha:.15}),o.itemColorActiveInverted=t,o.itemColorActiveHoverInverted=t,o.itemColorActiveCollapsedInverted=t,o}},BD=OD,FD={titleFontSize:"18px",backSize:"22px"};function wg(e){const{textColor1:n,textColor2:t,textColor3:o,fontSize:r,fontWeightStrong:i,primaryColorHover:a,primaryColorPressed:s}=e;return Object.assign(Object.assign({},FD),{titleFontWeight:i,fontSize:r,titleTextColor:n,backColor:t,backColorHover:a,backColorPressed:s,subtitleTextColor:o})}const WD={name:"PageHeader",common:ce,self:wg},jD={name:"PageHeader",common:le,self:wg},ND={iconSize:"22px"},Sg=e=>{const{fontSize:n,warningColor:t}=e;return Object.assign(Object.assign({},ND),{fontSize:n,iconColor:t})},GD={name:"Popconfirm",common:ce,peers:{Button:Zn,Popover:yo},self:Sg},VD=GD,KD={name:"Popconfirm",common:le,peers:{Button:ot,Popover:Xo},self:Sg},UD=KD,Tg=e=>{const{infoColor:n,successColor:t,warningColor:o,errorColor:r,textColor2:i,progressRailColor:a,fontSize:s,fontWeight:l}=e;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:l,railColor:a,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:n,iconColorInfo:n,iconColorSuccess:t,iconColorWarning:o,iconColorError:r,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:n,fillColorInfo:n,fillColorSuccess:t,fillColorWarning:o,fillColorError:r,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},qD={name:"Progress",common:ce,self:Tg},kg=qD,ZD={name:"Progress",common:le,self(e){const n=Tg(e);return n.textColorLineInner="rgb(0, 0, 0)",n.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",n}},Pg=ZD,XD={name:"Rate",common:le,self(e){const{railColor:n}=e;return{itemColor:n,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},JD=XD,YD=e=>{const{railColor:n}=e;return{itemColor:n,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},QD={name:"Rate",common:ce,self:YD},e4=QD,n4={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0},$g=e=>{const{textColor2:n,textColor1:t,errorColor:o,successColor:r,infoColor:i,warningColor:a,lineHeight:s,fontWeightStrong:l}=e;return Object.assign(Object.assign({},n4),{lineHeight:s,titleFontWeight:l,titleTextColor:t,textColor:n,iconColorError:o,iconColorSuccess:r,iconColorInfo:i,iconColorWarning:a})},t4={name:"Result",common:ce,self:$g},o4=t4,r4={name:"Result",common:le,self:$g},i4=r4,Ag={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},a4={name:"Slider",common:le,self(e){const n="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:t,modalColor:o,primaryColorSuppl:r,popoverColor:i,textColor2:a,cardColor:s,borderRadius:l,fontSize:c,opacityDisabled:d}=e;return Object.assign(Object.assign({},Ag),{fontSize:c,markFontSize:c,railColor:t,railColorHover:t,fillColor:r,fillColorHover:r,opacityDisabled:d,handleColor:"#FFF",dotColor:s,dotColorModal:o,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:n,indicatorTextColor:a,indicatorBorderRadius:l,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})}},s4=a4,l4=e=>{const n="rgba(0, 0, 0, .85)",t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:r,baseColor:i,cardColor:a,modalColor:s,popoverColor:l,borderRadius:c,fontSize:d,opacityDisabled:u}=e;return Object.assign(Object.assign({},Ag),{fontSize:d,markFontSize:d,railColor:o,railColorHover:o,fillColor:r,fillColorHover:r,opacityDisabled:u,handleColor:"#FFF",dotColor:a,dotColorModal:s,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:n,indicatorBoxShadow:t,indicatorTextColor:i,indicatorBorderRadius:c,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})},c4={name:"Slider",common:ce,self:l4},d4=c4,Rg=e=>{const{opacityDisabled:n,heightTiny:t,heightSmall:o,heightMedium:r,heightLarge:i,heightHuge:a,primaryColor:s,fontSize:l}=e;return{fontSize:l,textColor:s,sizeTiny:t,sizeSmall:o,sizeMedium:r,sizeLarge:i,sizeHuge:a,color:s,opacitySpinning:n}},u4={name:"Spin",common:ce,self:Rg},f4=u4,h4={name:"Spin",common:le,self:Rg},p4=h4,Dg=e=>{const{textColor2:n,textColor3:t,fontSize:o,fontWeight:r}=e;return{labelFontSize:o,labelFontWeight:r,valueFontWeight:r,valueFontSize:"24px",labelTextColor:t,valuePrefixTextColor:n,valueSuffixTextColor:n,valueTextColor:n}},m4={name:"Statistic",common:ce,self:Dg},g4=m4,b4={name:"Statistic",common:le,self:Dg},v4=b4,y4={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},Ig=e=>{const{fontWeightStrong:n,baseColor:t,textColorDisabled:o,primaryColor:r,errorColor:i,textColor1:a,textColor2:s}=e;return Object.assign(Object.assign({},y4),{stepHeaderFontWeight:n,indicatorTextColorProcess:t,indicatorTextColorWait:o,indicatorTextColorFinish:r,indicatorTextColorError:i,indicatorBorderColorProcess:r,indicatorBorderColorWait:o,indicatorBorderColorFinish:r,indicatorBorderColorError:i,indicatorColorProcess:r,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:o,splitorColorWait:o,splitorColorFinish:r,splitorColorError:o,headerTextColorProcess:a,headerTextColorWait:o,headerTextColorFinish:o,headerTextColorError:i,descriptionTextColorProcess:s,descriptionTextColorWait:o,descriptionTextColorFinish:o,descriptionTextColorError:i})},x4={name:"Steps",common:ce,self:Ig},C4=x4,w4={name:"Steps",common:le,self:Ig},S4=w4,Hg={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},T4={name:"Switch",common:le,self(e){const{primaryColorSuppl:n,opacityDisabled:t,borderRadius:o,primaryColor:r,textColor2:i,baseColor:a}=e,s="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},Hg),{iconColor:a,textColor:i,loadingColor:n,opacityDisabled:t,railColor:s,railColorActive:n,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 8px 0 ${V(r,{alpha:.3})}`})}},k4=T4,P4=e=>{const{primaryColor:n,opacityDisabled:t,borderRadius:o,textColor3:r}=e,i="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Hg),{iconColor:r,textColor:"white",loadingColor:n,opacityDisabled:t,railColor:i,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${V(n,{alpha:.2})}`})},$4={name:"Switch",common:ce,self:P4},A4=$4,R4={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},_g=e=>{const{dividerColor:n,cardColor:t,modalColor:o,popoverColor:r,tableHeaderColor:i,tableColorStriped:a,textColor1:s,textColor2:l,borderRadius:c,fontWeightStrong:d,lineHeight:u,fontSizeSmall:p,fontSizeMedium:b,fontSizeLarge:h}=e;return Object.assign(Object.assign({},R4),{fontSizeSmall:p,fontSizeMedium:b,fontSizeLarge:h,lineHeight:u,borderRadius:c,borderColor:ve(t,n),borderColorModal:ve(o,n),borderColorPopover:ve(r,n),tdColor:t,tdColorModal:o,tdColorPopover:r,tdColorStriped:ve(t,a),tdColorStripedModal:ve(o,a),tdColorStripedPopover:ve(r,a),thColor:ve(t,i),thColorModal:ve(o,i),thColorPopover:ve(r,i),thTextColor:s,tdTextColor:l,thFontWeight:d})},D4={name:"Table",common:ce,self:_g},I4=D4,H4={name:"Table",common:le,self:_g},_4=H4,E4={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},Eg=e=>{const{textColor2:n,primaryColor:t,textColorDisabled:o,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,tabColor:c,baseColor:d,dividerColor:u,fontWeight:p,textColor1:b,borderRadius:h,fontSize:y,fontWeightStrong:m}=e;return Object.assign(Object.assign({},E4),{colorSegment:c,tabFontSizeCard:y,tabTextColorLine:b,tabTextColorActiveLine:t,tabTextColorHoverLine:t,tabTextColorDisabledLine:o,tabTextColorSegment:b,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:o,tabTextColorBar:b,tabTextColorActiveBar:t,tabTextColorHoverBar:t,tabTextColorDisabledBar:o,tabTextColorCard:b,tabTextColorHoverCard:b,tabTextColorActiveCard:t,tabTextColorDisabledCard:o,barColor:t,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,closeBorderRadius:h,tabColor:c,tabColorSegment:d,tabBorderColor:u,tabFontWeightActive:p,tabFontWeight:p,tabBorderRadius:h,paneTextColor:n,fontWeightStrong:m})},z4={name:"Tabs",common:ce,self:Eg},M4=z4,L4={name:"Tabs",common:le,self(e){const n=Eg(e),{inputColor:t}=e;return n.colorSegment=t,n.tabColorSegment=t,n}},O4=L4,zg=e=>{const{textColor1:n,textColor2:t,fontWeightStrong:o,fontSize:r}=e;return{fontSize:r,titleTextColor:n,textColor:t,titleFontWeight:o}},B4={name:"Thing",common:ce,self:zg},F4=B4,W4={name:"Thing",common:le,self:zg},j4=W4,Mg={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},N4={name:"Timeline",common:le,self(e){const{textColor3:n,infoColorSuppl:t,errorColorSuppl:o,successColorSuppl:r,warningColorSuppl:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:c,fontSize:d}=e;return Object.assign(Object.assign({},Mg),{contentFontSize:d,titleFontWeight:c,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})}},G4=N4,V4=e=>{const{textColor3:n,infoColor:t,errorColor:o,successColor:r,warningColor:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:c,fontSize:d}=e;return Object.assign(Object.assign({},Mg),{contentFontSize:d,titleFontWeight:c,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${t}`,circleBorderError:`2px solid ${o}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${i}`,iconColor:n,iconColorInfo:t,iconColorError:o,iconColorSuccess:r,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:n,lineColor:l})},K4={name:"Timeline",common:ce,self:V4},U4=K4,Lg={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},q4={name:"Transfer",common:le,peers:{Checkbox:Pr,Scrollbar:tt,Input:vt,Empty:Zo,Button:ot},self(e){const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,inputColor:l,tableHeaderColor:c,textColor1:d,textColorDisabled:u,textColor2:p,textColor3:b,hoverColor:h,closeColorHover:y,closeColorPressed:m,closeIconColor:g,closeIconColorHover:S,closeIconColorPressed:I,dividerColor:k}=e;return Object.assign(Object.assign({},Lg),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:k,borderColor:"#0000",listColor:l,headerColor:c,titleTextColor:d,titleTextColorDisabled:u,extraTextColor:b,extraTextColorDisabled:u,itemTextColor:p,itemTextColorDisabled:u,itemColorPending:h,titleFontWeight:n,closeColorHover:y,closeColorPressed:m,closeIconColor:g,closeIconColorHover:S,closeIconColorPressed:I})}},Z4=q4,X4=e=>{const{fontWeight:n,fontSizeLarge:t,fontSizeMedium:o,fontSizeSmall:r,heightLarge:i,heightMedium:a,borderRadius:s,cardColor:l,tableHeaderColor:c,textColor1:d,textColorDisabled:u,textColor2:p,textColor3:b,borderColor:h,hoverColor:y,closeColorHover:m,closeColorPressed:g,closeIconColor:S,closeIconColorHover:I,closeIconColorPressed:k}=e;return Object.assign(Object.assign({},Lg),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:t,borderRadius:s,dividerColor:h,borderColor:h,listColor:l,headerColor:ve(l,c),titleTextColor:d,titleTextColorDisabled:u,extraTextColor:b,extraTextColorDisabled:u,itemTextColor:p,itemTextColorDisabled:u,itemColorPending:y,titleFontWeight:n,closeColorHover:m,closeColorPressed:g,closeIconColor:S,closeIconColorHover:I,closeIconColorPressed:k})},J4={name:"Transfer",common:ce,peers:{Checkbox:kr,Scrollbar:qn,Input:dt,Empty:Ut,Button:Zn},self:X4},Y4=J4,Og=e=>{const{borderRadiusSmall:n,hoverColor:t,pressedColor:o,primaryColor:r,textColor3:i,textColor2:a,textColorDisabled:s,fontSize:l}=e;return{fontSize:l,nodeBorderRadius:n,nodeColorHover:t,nodeColorPressed:o,nodeColorActive:V(r,{alpha:.1}),arrowColor:i,nodeTextColor:a,nodeTextColorDisabled:s,loadingColor:r,dropMarkColor:r}},Q4={name:"Tree",common:ce,peers:{Checkbox:kr,Scrollbar:qn,Empty:Ut},self:Og},Bg=Q4,eI={name:"Tree",common:le,peers:{Checkbox:Pr,Scrollbar:tt,Empty:Zo},self(e){const{primaryColor:n}=e,t=Og(e);return t.nodeColorActive=V(n,{alpha:.15}),t}},Fg=eI,nI={name:"TreeSelect",common:le,peers:{Tree:Fg,Empty:Zo,InternalSelection:Tc}},tI=nI,oI=e=>{const{popoverColor:n,boxShadow2:t,borderRadius:o,heightMedium:r,dividerColor:i,textColor2:a}=e;return{menuPadding:"4px",menuColor:n,menuBoxShadow:t,menuBorderRadius:o,menuHeight:`calc(${r} * 7.6)`,actionDividerColor:i,actionTextColor:a,actionPadding:"8px 12px"}},rI={name:"TreeSelect",common:ce,peers:{Tree:Bg,Empty:Ut,InternalSelection:Sc},self:oI},iI=rI,aI={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},Wg=e=>{const{primaryColor:n,textColor2:t,borderColor:o,lineHeight:r,fontSize:i,borderRadiusSmall:a,dividerColor:s,fontWeightStrong:l,textColor1:c,textColor3:d,infoColor:u,warningColor:p,errorColor:b,successColor:h,codeColor:y}=e;return Object.assign(Object.assign({},aI),{aTextColor:n,blockquoteTextColor:t,blockquotePrefixColor:o,blockquoteLineHeight:r,blockquoteFontSize:i,codeBorderRadius:a,liTextColor:t,liLineHeight:r,liFontSize:i,hrColor:s,headerFontWeight:l,headerTextColor:c,pTextColor:t,pTextColor1Depth:c,pTextColor2Depth:t,pTextColor3Depth:d,pLineHeight:r,pFontSize:i,headerBarColor:n,headerBarColorPrimary:n,headerBarColorInfo:u,headerBarColorError:b,headerBarColorWarning:p,headerBarColorSuccess:h,textColor:t,textColor1Depth:c,textColor2Depth:t,textColor3Depth:d,textColorPrimary:n,textColorInfo:u,textColorSuccess:h,textColorWarning:p,textColorError:b,codeTextColor:t,codeColor:y,codeBorder:"1px solid #0000"})},sI={name:"Typography",common:ce,self:Wg},Ec=sI,lI={name:"Typography",common:le,self:Wg},cI=lI,jg=e=>{const{iconColor:n,primaryColor:t,errorColor:o,textColor2:r,successColor:i,opacityDisabled:a,actionColor:s,borderColor:l,hoverColor:c,lineHeight:d,borderRadius:u,fontSize:p}=e;return{fontSize:p,lineHeight:d,borderRadius:u,draggerColor:s,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${t}`,itemColorHover:c,itemColorHoverError:V(o,{alpha:.06}),itemTextColor:r,itemTextColorError:o,itemTextColorSuccess:i,itemIconColor:n,itemDisabledOpacity:a,itemBorderImageCardError:`1px solid ${o}`,itemBorderImageCard:`1px solid ${l}`}},dI={name:"Upload",common:ce,peers:{Button:Zn,Progress:kg},self:jg},uI=dI,fI={name:"Upload",common:le,peers:{Button:ot,Progress:Pg},self(e){const{errorColor:n}=e,t=jg(e);return t.itemColorHoverError=V(n,{alpha:.09}),t}},hI=fI,pI={name:"Watermark",common:le,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},mI=pI,gI={name:"Watermark",common:ce,self(e){const{fontFamily:n}=e;return{fontFamily:n}}},bI=gI,vI={name:"Row",common:ce},yI=vI,xI={name:"Row",common:le},CI=xI,wI={name:"Image",common:le,peers:{Tooltip:ts},self:e=>{const{textColor2:n}=e;return{toolbarIconColor:n,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},Ng={type:String,default:"static"},SI=ne("layout",`
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
 `)]),TI={embedded:Boolean,position:Ng,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},kI="n-layout";function Gg(e){return ge({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Ie.props),TI),setup(n){const t=K(null),o=K(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=fn(n),a=Ie("Layout","-layout",SI,_c,n,r);function s(y,m){if(n.nativeScrollbar){const{value:g}=t;g&&(m===void 0?g.scrollTo(y):g.scrollTo(y,m))}else{const{value:g}=o;g&&g.scrollTo(y,m)}}Ye(kI,n);let l=0,c=0;const d=y=>{var m;const g=y.target;l=g.scrollLeft,c=g.scrollTop,(m=n.onScroll)===null||m===void 0||m.call(n,y)};Fh(()=>{if(n.nativeScrollbar){const y=t.value;y&&(y.scrollTop=c,y.scrollLeft=l)}});const u={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:s},b=G(()=>{const{common:{cubicBezierEaseInOut:y},self:m}=a.value;return{"--n-bezier":y,"--n-color":n.embedded?m.colorEmbedded:m.color,"--n-text-color":m.textColor}}),h=i?Dn("layout",G(()=>n.embedded?"e":""),b,n):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:o,hasSiderStyle:u,mergedTheme:a,handleNativeElScroll:d,cssVars:i?void 0:b,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender},p)},render(){var n;const{mergedClsPrefix:t,hasSider:o}=this;(n=this.onRender)===null||n===void 0||n.call(this);const r=o?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return x("div",{class:i,style:this.cssVars},this.nativeScrollbar?x("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):x(es,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const PI=Gg(!1),$I=Gg(!0),AI=ne("layout-footer",`
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
 `)]),RI=Object.assign(Object.assign({},Ie.props),{inverted:Boolean,position:Ng,bordered:Boolean}),DI=ge({name:"LayoutFooter",props:RI,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=fn(e),o=Ie("Layout","-layout-footer",AI,_c,e,n),r=G(()=>{const{common:{cubicBezierEaseInOut:a},self:s}=o.value,l={"--n-bezier":a};return e.inverted?(l["--n-color"]=s.footerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.footerBorderColorInverted):(l["--n-color"]=s.footerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.footerBorderColor),l}),i=t?Dn("layout-footer",G(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),x("div",{class:[`${n}-layout-footer`,this.themeClass,this.position&&`${n}-layout-footer--${this.position}-positioned`,this.bordered&&`${n}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),Vg={extraFontSize:"12px",width:"440px"},II={name:"Transfer",common:le,peers:{Checkbox:Pr,Scrollbar:tt,Input:vt,Empty:Zo,Button:ot},self(e){const{iconColorDisabled:n,iconColor:t,fontWeight:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:c,borderRadius:d,inputColor:u,tableHeaderColor:p,textColor1:b,textColorDisabled:h,textColor2:y,hoverColor:m}=e;return Object.assign(Object.assign({},Vg),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:d,borderColor:"#0000",listColor:u,headerColor:p,titleTextColor:b,titleTextColorDisabled:h,extraTextColor:y,filterDividerColor:"#0000",itemTextColor:y,itemTextColorDisabled:h,itemColorPending:m,titleFontWeight:o,iconColor:t,iconColorDisabled:n})}},HI=II,_I=e=>{const{fontWeight:n,iconColorDisabled:t,iconColor:o,fontSizeLarge:r,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:c,borderRadius:d,cardColor:u,tableHeaderColor:p,textColor1:b,textColorDisabled:h,textColor2:y,borderColor:m,hoverColor:g}=e;return Object.assign(Object.assign({},Vg),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:r,borderRadius:d,borderColor:m,listColor:u,headerColor:ve(u,p),titleTextColor:b,titleTextColorDisabled:h,extraTextColor:y,filterDividerColor:m,itemTextColor:y,itemTextColorDisabled:h,itemColorPending:g,titleFontWeight:n,iconColor:o,iconColorDisabled:t})},EI={name:"Transfer",common:ce,peers:{Checkbox:kr,Scrollbar:qn,Input:dt,Empty:Ut,Button:Zn},self:_I},zI=EI,Kg="n-loading-bar",Ug="n-loading-bar-api",MI=ne("loading-bar-container",`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[wc({enterDuration:"0.3s",leaveDuration:"0.8s"}),ne("loading-bar",`
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
 `)])]);var Vs=globalThis&&globalThis.__awaiter||function(e,n,t,o){function r(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function s(d){try{c(o.next(d))}catch(u){a(u)}}function l(d){try{c(o.throw(d))}catch(u){a(u)}}function c(d){d.done?i(d.value):r(d.value).then(s,l)}c((o=o.apply(e,n||[])).next())})};function ta(e,n){return`${n}-loading-bar ${n}-loading-bar--${e}`}const LI=ge({name:"LoadingBar",props:{containerStyle:[String,Object]},setup(){const{inlineThemeDisabled:e}=fn(),{props:n,mergedClsPrefixRef:t}=De(Kg),o=K(null),r=K(!1),i=K(!1),a=K(!1),s=K(!1);let l=!1;const c=K(!1),d=G(()=>{const{loadingBarStyle:T}=n;return T?T[c.value?"error":"loading"]:""});function u(){return Vs(this,void 0,void 0,function*(){r.value=!1,a.value=!1,l=!1,c.value=!1,s.value=!0,yield Vn(),s.value=!1})}function p(T=0,A=80,v="starting"){return Vs(this,void 0,void 0,function*(){yield u(),a.value=!0,i.value=!0,yield Vn();const w=o.value;w&&(w.style.maxWidth=`${T}%`,w.style.transition="none",w.offsetWidth,w.className=ta(v,t.value),w.style.transition="",w.style.maxWidth=`${A}%`)})}function b(){if(l||c.value||!a.value)return;l=!0;const T=o.value;T&&(T.className=ta("finishing",t.value),T.style.maxWidth="100%",T.offsetWidth,a.value=!1)}function h(){if(!(l||c.value))if(!a.value)p(100,100,"error").then(()=>{c.value=!0;const T=o.value;T&&(T.className=ta("error",t.value),T.offsetWidth,a.value=!1)});else{c.value=!0;const T=o.value;if(!T)return;T.className=ta("error",t.value),T.style.maxWidth="100%",T.offsetWidth,a.value=!1}}function y(){r.value=!0}function m(){r.value=!1}function g(){return Vs(this,void 0,void 0,function*(){yield u()})}const S=Ie("LoadingBar","-loading-bar",MI,xg,n,t),I=G(()=>{const{self:{height:T,colorError:A,colorLoading:v}}=S.value;return{"--n-height":T,"--n-color-loading":v,"--n-color-error":A}}),k=e?Dn("loading-bar",void 0,I,n):void 0;return{mergedClsPrefix:t,loadingBarRef:o,started:i,loading:a,entering:r,transitionDisabled:s,start:p,error:h,finish:b,handleEnter:y,handleAfterEnter:m,handleAfterLeave:g,mergedLoadingBarStyle:d,cssVars:e?void 0:I,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){if(!this.started)return null;const{mergedClsPrefix:e}=this;return x(bt,{name:"fade-in-transition",appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var n;return(n=this.onRender)===null||n===void 0||n.call(this),co(x("div",{class:[`${e}-loading-bar-container`,this.themeClass],style:this.containerStyle},x("div",{ref:"loadingBarRef",class:[`${e}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[mr,this.loading||!this.loading&&this.entering]])}})}}),OI=Object.assign(Object.assign({},Ie.props),{to:{type:[String,Object,Boolean],default:void 0},containerStyle:[String,Object],loadingBarStyle:{type:Object}}),BI=ge({name:"LoadingBarProvider",props:OI,setup(e){const n=wi(),t=K(null),o={start(){var i;n.value?(i=t.value)===null||i===void 0||i.start():Vn(()=>{var a;(a=t.value)===null||a===void 0||a.start()})},error(){var i;n.value?(i=t.value)===null||i===void 0||i.error():Vn(()=>{var a;(a=t.value)===null||a===void 0||a.error()})},finish(){var i;n.value?(i=t.value)===null||i===void 0||i.finish():Vn(()=>{var a;(a=t.value)===null||a===void 0||a.finish()})}},{mergedClsPrefixRef:r}=fn(e);return Ye(Ug,o),Ye(Kg,{props:e,mergedClsPrefixRef:r}),Object.assign(o,{loadingBarRef:t})},render(){var e,n;return x(Je,null,x(Ma,{disabled:this.to===!1,to:this.to||"body"},x(LI,{ref:"loadingBarRef",containerStyle:this.containerStyle})),(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});function FI(){const e=De(Ug,null);return e===null&&xi("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}const qg={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},Zg="n-message-api",Xg="n-message-provider",WI=O([ne("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[QP({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),ne("message",`
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
 `,[yi()])]),F("close",`
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
 `)])]),jI={info:()=>x(wa,null),success:()=>x(vc,null),warning:()=>x(yc,null),error:()=>x(bc,null),default:()=>null},NI=ge({name:"Message",props:Object.assign(Object.assign({},qg),{render:Function}),setup(e){const{inlineThemeDisabled:n,mergedRtlRef:t}=fn(e),{props:o,mergedClsPrefixRef:r}=De(Xg),i=qo("Message",t,r),a=Ie("Message","-message",WI,vg,o,r),s=G(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:d},self:{padding:u,margin:p,maxWidth:b,iconMargin:h,closeMargin:y,closeSize:m,iconSize:g,fontSize:S,lineHeight:I,borderRadius:k,iconColorInfo:T,iconColorSuccess:A,iconColorWarning:v,iconColorError:w,iconColorLoading:H,closeIconSize:z,closeBorderRadius:Y,[be("textColor",c)]:E,[be("boxShadow",c)]:te,[be("color",c)]:L,[be("closeColorHover",c)]:M,[be("closeColorPressed",c)]:se,[be("closeIconColor",c)]:j,[be("closeIconColorPressed",c)]:ie,[be("closeIconColorHover",c)]:$}}=a.value;return{"--n-bezier":d,"--n-margin":p,"--n-padding":u,"--n-max-width":b,"--n-font-size":S,"--n-icon-margin":h,"--n-icon-size":g,"--n-close-icon-size":z,"--n-close-border-radius":Y,"--n-close-size":m,"--n-close-margin":y,"--n-text-color":E,"--n-color":L,"--n-box-shadow":te,"--n-icon-color-info":T,"--n-icon-color-success":A,"--n-icon-color-warning":v,"--n-icon-color-error":w,"--n-icon-color-loading":H,"--n-close-color-hover":M,"--n-close-color-pressed":se,"--n-close-icon-color":j,"--n-close-icon-color-pressed":ie,"--n-close-icon-color-hover":$,"--n-line-height":I,"--n-border-radius":k}}),l=n?Dn("message",G(()=>e.type[0]),s,{}):void 0;return{mergedClsPrefix:r,rtlEnabled:i,messageProviderProps:o,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:n?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:o.placement}},render(){const{render:e,type:n,closable:t,content:o,mergedClsPrefix:r,cssVars:i,themeClass:a,onRender:s,icon:l,handleClose:c,showIcon:d}=this;s==null||s();let u;return x("div",{class:[`${r}-message-wrapper`,a],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},i]},e?e(this.$props):x("div",{class:[`${r}-message ${r}-message--${n}-type`,this.rtlEnabled&&`${r}-message--rtl`]},(u=GI(l,n,r))&&d?x("div",{class:`${r}-message__icon ${r}-message__icon--${n}-type`},x(Ya,null,{default:()=>u})):null,x("div",{class:`${r}-message__content`},En(o)),t?x(Qa,{clsPrefix:r,class:`${r}-message__close`,onClick:c,absolute:!0}):null))}});function GI(e,n,t){if(typeof e=="function")return e();{const o=n==="loading"?x(xc,{clsPrefix:t,strokeWidth:24,scale:.85}):jI[n]();return o?x(po,{clsPrefix:t,key:n},{default:()=>o}):null}}const VI=ge({name:"MessageEnvironment",props:Object.assign(Object.assign({},qg),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let n=null;const t=K(!0);Un(()=>{o()});function o(){const{duration:d}=e;d&&(n=window.setTimeout(a,d))}function r(d){d.currentTarget===d.target&&n!==null&&(window.clearTimeout(n),n=null)}function i(d){d.currentTarget===d.target&&o()}function a(){const{onHide:d}=e;t.value=!1,n&&(window.clearTimeout(n),n=null),d&&d()}function s(){const{onClose:d}=e;d&&d(),a()}function l(){const{onAfterLeave:d,onInternalAfterLeave:u,onAfterHide:p,internalKey:b}=e;d&&d(),u&&u(b),p&&p()}function c(){a()}return{show:t,hide:a,handleClose:s,handleAfterLeave:l,handleMouseleave:i,handleMouseenter:r,deactivate:c}},render(){return x(_p,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?x(NI,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),KI=Object.assign(Object.assign({},Ie.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),UI=ge({name:"MessageProvider",props:KI,setup(e){const{mergedClsPrefixRef:n}=fn(e),t=K([]),o=K({}),r={create(l,c){return i(l,Object.assign({type:"default"},c))},info(l,c){return i(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return i(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return i(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return i(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return i(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:s};Ye(Xg,{props:e,mergedClsPrefixRef:n}),Ye(Zg,r);function i(l,c){const d=Fa(),u=mo(Object.assign(Object.assign({},c),{content:l,key:d,destroy:()=>{var b;(b=o.value[d])===null||b===void 0||b.hide()}})),{max:p}=e;return p&&t.value.length>=p&&t.value.shift(),t.value.push(u),u}function a(l){t.value.splice(t.value.findIndex(c=>c.key===l),1),delete o.value[l]}function s(){Object.values(o.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:n,messageRefs:o,messageList:t,handleAfterLeave:a},r)},render(){var e,n,t;return x(Je,null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e),this.messageList.length?x(Ma,{to:(t=this.to)!==null&&t!==void 0?t:"body"},x("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(o=>x(VI,Object.assign({ref:r=>{r&&(this.messageRefs[o.key]=r)},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave},nc(o,["destroy"],void 0),{duration:o.duration===void 0?this.duration:o.duration,keepAliveOnHover:o.keepAliveOnHover===void 0?this.keepAliveOnHover:o.keepAliveOnHover,closable:o.closable===void 0?this.closable:o.closable}))))):null)}});function qI(){const e=De(Zg,null);return e===null&&xi("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const as="n-notification-provider",ZI=ge({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:n,wipTransitionCountRef:t}=De(as),o=K(null);return lo(()=>{var r,i;t.value>0?(r=o==null?void 0:o.value)===null||r===void 0||r.classList.add("transitioning"):(i=o==null?void 0:o.value)===null||i===void 0||i.classList.remove("transitioning")}),{selfRef:o,mergedTheme:e,mergedClsPrefix:n,transitioning:t}},render(){const{$slots:e,scrollable:n,mergedClsPrefix:t,mergedTheme:o,placement:r}=this;return x("div",{ref:"selfRef",class:[`${t}-notification-container`,n&&`${t}-notification-container--scrollable`,`${t}-notification-container--${r}`]},n?x(es,{theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),XI={info:()=>x(wa,null),success:()=>x(vc,null),warning:()=>x(yc,null),error:()=>x(bc,null),default:()=>null},zc={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},JI=Wa(zc),YI=ge({name:"Notification",props:zc,setup(e){const{mergedClsPrefixRef:n,mergedThemeRef:t,props:o}=De(as),{inlineThemeDisabled:r,mergedRtlRef:i}=fn(),a=qo("Notification",i,n),s=G(()=>{const{type:c}=e,{self:{color:d,textColor:u,closeIconColor:p,closeIconColorHover:b,closeIconColorPressed:h,headerTextColor:y,descriptionTextColor:m,actionTextColor:g,borderRadius:S,headerFontWeight:I,boxShadow:k,lineHeight:T,fontSize:A,closeMargin:v,closeSize:w,width:H,padding:z,closeIconSize:Y,closeBorderRadius:E,closeColorHover:te,closeColorPressed:L,titleFontSize:M,metaFontSize:se,descriptionFontSize:j,[be("iconColor",c)]:ie},common:{cubicBezierEaseOut:$,cubicBezierEaseIn:q,cubicBezierEaseInOut:Pe}}=t.value,{left:Ee,right:Pn,top:Be,bottom:Oe}=ec(z);return{"--n-color":d,"--n-font-size":A,"--n-text-color":u,"--n-description-text-color":m,"--n-action-text-color":g,"--n-title-text-color":y,"--n-title-font-weight":I,"--n-bezier":Pe,"--n-bezier-ease-out":$,"--n-bezier-ease-in":q,"--n-border-radius":S,"--n-box-shadow":k,"--n-close-border-radius":E,"--n-close-color-hover":te,"--n-close-color-pressed":L,"--n-close-icon-color":p,"--n-close-icon-color-hover":b,"--n-close-icon-color-pressed":h,"--n-line-height":T,"--n-icon-color":ie,"--n-close-margin":v,"--n-close-size":w,"--n-close-icon-size":Y,"--n-width":H,"--n-padding-left":Ee,"--n-padding-right":Pn,"--n-padding-top":Be,"--n-padding-bottom":Oe,"--n-title-font-size":M,"--n-meta-font-size":se,"--n-description-font-size":j}}),l=r?Dn("notification",G(()=>e.type[0]),s,o):void 0;return{mergedClsPrefix:n,showAvatar:G(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:a,cssVars:r?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),x("div",{class:[`${n}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},x("div",{class:[`${n}-notification`,this.rtlEnabled&&`${n}-notification--rtl`,this.themeClass,{[`${n}-notification--closable`]:this.closable,[`${n}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?x("div",{class:`${n}-notification__avatar`},this.avatar?En(this.avatar):this.type!=="default"?x(po,{clsPrefix:n},{default:()=>XI[this.type]()}):null):null,this.closable?x(Qa,{clsPrefix:n,class:`${n}-notification__close`,onClick:this.handleCloseClick}):null,x("div",{ref:"bodyRef",class:`${n}-notification-main`},this.title?x("div",{class:`${n}-notification-main__header`},En(this.title)):null,this.description?x("div",{class:`${n}-notification-main__description`},En(this.description)):null,this.content?x("pre",{class:`${n}-notification-main__content`},En(this.content)):null,this.meta||this.action?x("div",{class:`${n}-notification-main-footer`},this.meta?x("div",{class:`${n}-notification-main-footer__meta`},En(this.meta)):null,this.action?x("div",{class:`${n}-notification-main-footer__action`},En(this.action)):null):null)))}}),QI=Object.assign(Object.assign({},zc),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),e5=ge({name:"NotificationEnvironment",props:Object.assign(Object.assign({},QI),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:n}=De(as),t=K(!0);let o=null;function r(){t.value=!1,o&&window.clearTimeout(o)}function i(h){n.value++,Vn(()=>{h.style.height=`${h.offsetHeight}px`,h.style.maxHeight="0",h.style.transition="none",h.offsetHeight,h.style.transition="",h.style.maxHeight=h.style.height})}function a(h){n.value--,h.style.height="",h.style.maxHeight="";const{onAfterEnter:y,onAfterShow:m}=e;y&&y(),m&&m()}function s(h){n.value++,h.style.maxHeight=`${h.offsetHeight}px`,h.style.height=`${h.offsetHeight}px`,h.offsetHeight}function l(h){const{onHide:y}=e;y&&y(),h.style.maxHeight="0",h.offsetHeight}function c(){n.value--;const{onAfterLeave:h,onInternalAfterLeave:y,onAfterHide:m,internalKey:g}=e;h&&h(),y(g),m&&m()}function d(){const{duration:h}=e;h&&(o=window.setTimeout(r,h))}function u(h){h.currentTarget===h.target&&o!==null&&(window.clearTimeout(o),o=null)}function p(h){h.currentTarget===h.target&&d()}function b(){const{onClose:h}=e;h?Promise.resolve(h()).then(y=>{y!==!1&&r()}):r()}return Un(()=>{e.duration&&(o=window.setTimeout(r,e.duration))}),{show:t,hide:r,handleClose:b,handleAfterLeave:c,handleLeave:l,handleBeforeLeave:s,handleAfterEnter:a,handleBeforeEnter:i,handleMouseenter:u,handleMouseleave:p}},render(){return x(bt,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?x(YI,Object.assign({},jo(this.$props,JI),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),n5=O([ne("notification-container",`
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
 `,[oa("top-right")]),Q("top-left",`
 left: 0;
 `,[oa("top-left")]),Q("bottom-right",`
 right: 0;
 `,[oa("bottom-right")]),Q("bottom-left",`
 left: 0;
 `,[oa("bottom-left")]),Q("scrollable",[Q("top-right",`
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
 `,[O("&:first-child",{margin:0})])])])])]);function oa(e){const t=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",o="0";return ne("notification-wrapper",[O("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${t}, 0);
 `),O("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${o}, 0);
 `)])}const Jg="n-notification-api",t5=Object.assign(Object.assign({},Ie.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),o5=ge({name:"NotificationProvider",props:t5,setup(e){const{mergedClsPrefixRef:n}=fn(e),t=K([]),o={},r=new Set;function i(b){const h=Fa(),y=()=>{r.add(h),o[h]&&o[h].hide()},m=mo(Object.assign(Object.assign({},b),{key:h,destroy:y,hide:y,deactivate:y})),{max:g}=e;if(g&&t.value.length-r.size>=g){let S=!1,I=0;for(const k of t.value){if(!r.has(k.key)){o[k.key]&&(k.destroy(),S=!0);break}I++}S||t.value.splice(I,1)}return t.value.push(m),m}const a=["info","success","warning","error"].map(b=>h=>i(Object.assign(Object.assign({},h),{type:b})));function s(b){r.delete(b),t.value.splice(t.value.findIndex(h=>h.key===b),1)}const l=Ie("Notification","-notification",n5,gg,e,n),c={create:i,info:a[0],success:a[1],warning:a[2],error:a[3],open:u,destroyAll:p},d=K(0);Ye(Jg,c),Ye(as,{props:e,mergedClsPrefixRef:n,mergedThemeRef:l,wipTransitionCountRef:d});function u(b){return i(b)}function p(){Object.values(t.value).forEach(b=>{b.hide()})}return Object.assign({mergedClsPrefix:n,notificationList:t,notificationRefs:o,handleAfterLeave:s},c)},render(){var e,n,t;const{placement:o}=this;return x(Je,null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e),this.notificationList.length?x(Ma,{to:(t=this.to)!==null&&t!==void 0?t:"body"},x(ZI,{style:this.containerStyle,scrollable:this.scrollable&&o!=="top"&&o!=="bottom",placement:o},{default:()=>this.notificationList.map(r=>x(e5,Object.assign({ref:i=>{const a=r.key;i===null?delete this.notificationRefs[a]:this.notificationRefs[a]=i}},nc(r,["destroy","hide","deactivate"]),{internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover})))})):null)}});function r5(){const e=De(Jg,null);return e===null&&xi("use-notification","No outer `n-notification-provider` found."),e}const i5={name:"Skeleton",common:le,self(e){const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}}},a5=e=>{const{heightSmall:n,heightMedium:t,heightLarge:o,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:n,heightMedium:t,heightLarge:o}},s5={name:"Skeleton",common:ce,self:a5},l5=ne("h",`
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
 `),O("&::before",{backgroundColor:"var(--n-bar-color)"})])]),c5=Object.assign(Object.assign({},Ie.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),$r=e=>ge({name:`H${e}`,props:c5,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=fn(n),r=Ie("Typography","-h",l5,Ec,n,t),i=G(()=>{const{type:s}=n,{common:{cubicBezierEaseInOut:l},self:{headerFontWeight:c,headerTextColor:d,[be("headerPrefixWidth",e)]:u,[be("headerFontSize",e)]:p,[be("headerMargin",e)]:b,[be("headerBarWidth",e)]:h,[be("headerBarColor",s)]:y}}=r.value;return{"--n-bezier":l,"--n-font-size":p,"--n-margin":b,"--n-bar-color":y,"--n-bar-width":h,"--n-font-weight":c,"--n-text-color":d,"--n-prefix-width":u}}),a=o?Dn(`h${e}`,G(()=>n.type[0]),i,n):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var n;const{prefix:t,alignText:o,mergedClsPrefix:r,cssVars:i,$slots:a}=this;return(n=this.onRender)===null||n===void 0||n.call(this),x(`h${e}`,{class:[`${r}-h`,`${r}-h${e}`,this.themeClass,{[`${r}-h--prefix-bar`]:t,[`${r}-h--align-text`]:o}],style:i},a)}}),d5=$r("1"),u5=$r("2");$r("3");$r("4");$r("5");$r("6");const f5=ne("text",`
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
 `)]),h5=Object.assign(Object.assign({},Ie.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),rr=ge({name:"Text",props:h5,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=fn(e),o=Ie("Typography","-text",f5,Ec,e,n),r=G(()=>{const{depth:a,type:s}=e,l=s==="default"?a===void 0?"textColor":`textColor${a}Depth`:be("textColor",s),{common:{fontWeightStrong:c,fontFamilyMono:d,cubicBezierEaseInOut:u},self:{codeTextColor:p,codeBorderRadius:b,codeColor:h,codeBorder:y,[l]:m}}=o.value;return{"--n-bezier":u,"--n-text-color":m,"--n-font-weight-strong":c,"--n-font-famliy-mono":d,"--n-code-border-radius":b,"--n-code-text-color":p,"--n-code-color":h,"--n-code-border":y}}),i=t?Dn("text",G(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:n,compitableTag:yh(e,["as","tag"]),cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,n,t;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],i=(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n);return this.code?x("code",{class:r,style:this.cssVars},this.delete?x("del",null,i):i):this.delete?x("del",{class:r,style:this.cssVars},i):x(this.compitableTag||"span",{class:r,style:this.cssVars},i)}}),p5=ge({name:"InjectionExtractor",props:{onSetup:Function},setup(e,{slots:n}){var t;return(t=e.onSetup)===null||t===void 0||t.call(e),()=>{var o;return(o=n.default)===null||o===void 0?void 0:o.call(n)}}}),m5={message:qI,notification:r5,loadingBar:FI,dialog:Q3};function g5({providersAndProps:e,configProviderProps:n}){let o=oh(()=>x(Cm,Re(n),{default:()=>e.map(({type:s,Provider:l,props:c})=>x(l,Re(c),{default:()=>x(p5,{onSetup:()=>r[s]=m5[s]()})}))}));const r={app:o};let i;return go&&(i=document.createElement("div"),document.body.appendChild(i),o.mount(i)),Object.assign({unmount:()=>{var s;if(o===null||i===null){No("discrete","unmount call no need because discrete app has been unmounted");return}o.unmount(),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=null,o=null}},r)}function b5(e,{configProviderProps:n,messageProviderProps:t,dialogProviderProps:o,notificationProviderProps:r,loadingBarProviderProps:i}={}){const a=[];return e.forEach(l=>{switch(l){case"message":a.push({type:l,Provider:UI,props:t});break;case"notification":a.push({type:l,Provider:o5,props:r});break;case"dialog":a.push({type:l,Provider:Y3,props:o});break;case"loadingBar":a.push({type:l,Provider:BI,props:i});break}}),g5({providersAndProps:a,configProviderProps:n})}const Yg=()=>({}),v5={name:"Equation",common:ce,self:Yg},y5=v5,x5={name:"Equation",common:le,self:Yg},C5=x5,w5={name:"dark",common:le,Alert:UP,Anchor:r$,AutoComplete:v$,Avatar:im,AvatarGroup:T$,BackTop:P$,Badge:I$,Breadcrumb:B$,Button:ot,ButtonGroup:iD,Calendar:J$,Card:hm,Carousel:fA,Cascader:yA,Checkbox:Pr,Code:bm,Collapse:PA,CollapseTransition:DA,ColorPicker:nA,DataTable:n3,DatePicker:R3,Descriptions:E3,Dialog:Xm,Divider:tR,Drawer:cR,Dropdown:Ac,DynamicInput:uR,DynamicTags:wR,Element:PR,Empty:Zo,Ellipsis:Im,Equation:C5,Form:_R,GradientText:LR,Icon:c3,IconWrapper:UR,Image:wI,Input:vt,InputNumber:cD,LegacyTransfer:HI,Layout:pD,List:xD,LoadingBar:wD,Log:PD,Menu:BD,Mention:ID,Message:oD,Modal:N3,Notification:QR,PageHeader:jD,Pagination:Rm,Popconfirm:UD,Popover:Xo,Popselect:wm,Progress:Pg,Radio:_m,Rate:JD,Result:i4,Row:CI,Scrollbar:tt,Select:Pm,Skeleton:i5,Slider:s4,Space:lg,Spin:p4,Statistic:v4,Steps:S4,Switch:k4,Table:_4,Tabs:O4,Tag:qp,Thing:j4,TimePicker:Km,Timeline:G4,Tooltip:ts,Transfer:Z4,Tree:Fg,TreeSelect:tI,Typography:cI,Upload:hI,Watermark:mI},S5={name:"light",common:ce,Alert:XP,Anchor:t$,AutoComplete:g$,Avatar:rm,AvatarGroup:w$,BackTop:R$,Badge:E$,Breadcrumb:L$,Button:Zn,ButtonGroup:sD,Calendar:Z$,Card:kc,Carousel:dA,Cascader:bA,Checkbox:kr,Code:vm,Collapse:TA,CollapseTransition:AA,ColorPicker:Q$,DataTable:QA,DatePicker:$3,Descriptions:H3,Dialog:Dc,Divider:rg,Drawer:sR,Dropdown:os,DynamicInput:pR,DynamicTags:TR,Element:cg,Empty:Ut,Equation:y5,Ellipsis:$c,Form:IR,GradientText:FR,Icon:Bm,IconWrapper:VR,Image:ZR,Input:dt,InputNumber:fD,Layout:_c,LegacyTransfer:zI,List:vD,LoadingBar:xg,Log:RD,Menu:LD,Mention:ED,Message:vg,Modal:tg,Notification:gg,PageHeader:WD,Pagination:Am,Popconfirm:VD,Popover:yo,Popselect:Sm,Progress:kg,Radio:Em,Rate:e4,Row:yI,Result:o4,Scrollbar:qn,Skeleton:s5,Select:km,Slider:d4,Space:Hc,Spin:f4,Statistic:g4,Steps:C4,Switch:A4,Table:I4,Tabs:M4,Tag:Zp,Thing:F4,TimePicker:Vm,Timeline:U4,Tooltip:Ai,Transfer:Y4,Tree:Bg,TreeSelect:iI,Typography:Ec,Upload:uI,Watermark:bI};var T5=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Qg;const ss=e=>Qg=e,eb=Symbol();function $l(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ni;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ni||(ni={}));function k5(){const e=of(!0),n=e.run(()=>K({}));let t=[],o=[];const r=so({install(i){ss(r),r._a=i,i.provide(eb,r),i.config.globalProperties.$pinia=r,o.forEach(a=>t.push(a)),o=[]},use(i){return!this._a&&!T5?o.push(i):t.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return r}const nb=()=>{};function ju(e,n,t,o=nb){e.push(n);const r=()=>{const i=e.indexOf(n);i>-1&&(e.splice(i,1),o())};return!t&&rf()&&af(r),r}function ir(e,...n){e.slice().forEach(t=>{t(...n)})}function Al(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,o)=>e.set(o,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const o=n[t],r=e[t];$l(r)&&$l(o)&&e.hasOwnProperty(t)&&!yn(o)&&!ro(o)?e[t]=Al(r,o):e[t]=o}return e}const P5=Symbol();function $5(e){return!$l(e)||!e.hasOwnProperty(P5)}const{assign:to}=Object;function A5(e){return!!(yn(e)&&e.effect)}function R5(e,n,t,o){const{state:r,actions:i,getters:a}=n,s=t.state.value[e];let l;function c(){s||(t.state.value[e]=r?r():{});const d=lv(t.state.value[e]);return to(d,i,Object.keys(a||{}).reduce((u,p)=>(u[p]=so(G(()=>{ss(t);const b=t._s.get(e);return a[p].call(b,b)})),u),{}))}return l=tb(e,c,n,t,o,!0),l.$reset=function(){const u=r?r():{};this.$patch(p=>{to(p,u)})},l}function tb(e,n,t={},o,r,i){let a;const s=to({actions:{}},t),l={deep:!0};let c,d,u=so([]),p=so([]),b;const h=o.state.value[e];!i&&!h&&(o.state.value[e]={}),K({});let y;function m(v){let w;c=d=!1,typeof v=="function"?(v(o.state.value[e]),w={type:ni.patchFunction,storeId:e,events:b}):(Al(o.state.value[e],v),w={type:ni.patchObject,payload:v,storeId:e,events:b});const H=y=Symbol();Vn().then(()=>{y===H&&(c=!0)}),d=!0,ir(u,w,o.state.value[e])}const g=nb;function S(){a.stop(),u=[],p=[],o._s.delete(e)}function I(v,w){return function(){ss(o);const H=Array.from(arguments),z=[],Y=[];function E(M){z.push(M)}function te(M){Y.push(M)}ir(p,{args:H,name:v,store:T,after:E,onError:te});let L;try{L=w.apply(this&&this.$id===e?this:T,H)}catch(M){throw ir(Y,M),M}return L instanceof Promise?L.then(M=>(ir(z,M),M)).catch(M=>(ir(Y,M),Promise.reject(M))):(ir(z,L),L)}}const k={_p:o,$id:e,$onAction:ju.bind(null,p),$patch:m,$reset:g,$subscribe(v,w={}){const H=ju(u,v,w.detached,()=>z()),z=a.run(()=>pn(()=>o.state.value[e],Y=>{(w.flush==="sync"?d:c)&&v({storeId:e,type:ni.direct,events:b},Y)},to({},l,w)));return H},$dispose:S},T=mo(k);o._s.set(e,T);const A=o._e.run(()=>(a=of(),a.run(()=>n())));for(const v in A){const w=A[v];if(yn(w)&&!A5(w)||ro(w))i||(h&&$5(w)&&(yn(w)?w.value=h[v]:Al(w,h[v])),o.state.value[e][v]=w);else if(typeof w=="function"){const H=I(v,w);A[v]=H,s.actions[v]=w}}return to(T,A),to(Ke(T),A),Object.defineProperty(T,"$state",{get:()=>o.state.value[e],set:v=>{m(w=>{to(w,v)})}}),o._p.forEach(v=>{to(T,a.run(()=>v({store:T,app:o._a,pinia:o,options:s})))}),h&&i&&t.hydrate&&t.hydrate(T.$state,h),c=!0,d=!0,T}function ob(e,n,t){let o,r;const i=typeof n=="function";typeof e=="string"?(o=e,r=i?t:n):(r=e,o=e.id);function a(s,l){const c=Gt();return s=s||c&&De(eb,null),s&&ss(s),s=Qg,s._s.has(o)||(i?tb(o,n,r,s):R5(o,r,s)),s._s.get(o)}return a.$id=o,a}const D5=`local HDsearch="https://harddrop.com/wiki?search="
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
`,I5=`local HDsearch="https://harddrop.com/wiki?search="
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
`,H5=`local HDsearch="https://harddrop.com/wiki?search="
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
`,_5="Techmino Online Dictionary",E5="Search",z5="Tags",M5="Copy from",L5="Error",O5="Copied!",B5={title:_5,search:E5,tags:z5,copy_from:M5,error:L5,copied:O5},F5="テクミノ オンライン辞書",W5="サーチ",j5="ラベル",N5="からコピー",G5="エラー",V5="コピーしました!",K5={title:F5,search:W5,tags:j5,copy_from:N5,error:G5,copied:V5},U5="Techmino 在线词典",q5="搜点什么",Z5="标签",X5="复制于",J5="出错了",Y5="复制成功!",Q5={title:U5,search:q5,tags:Z5,copy_from:X5,error:J5,copied:Y5},Ks=new Map,e6={en:D5,ja:I5,zh:H5},n6={en:B5,ja:K5,zh:Q5},en="not-italic text-cyan-500 text-4xl",Us={help:"#fdba74",org:"#fbb741",game:"#14a3c7",term:"#ff7f7f",setup:"#94a3b8",pattern:"#bfdfa5",command:"#0284c7",english:"#2563eb",name:"#7a5299"};var ka={},t6={get exports(){return ka},set exports(e){ka=e}};(function(e,n){(function(t,o,r){var i=n&&!n.nodeType&&n,a=e&&!e.nodeType&&e,s=i&&a&&typeof js=="object"&&js,l=a&&a.exports===i&&i;s&&(s.global===s||s.window===s||s.self===s)&&(t=s),r(i&&a?l?a.exports:i:t[o]={})})(js,"luaparse",function(t){t.version="0.3.1";var o,r,i,a,s,l=t.defaultOptions={wait:!1,comments:!0,scope:!1,locations:!1,ranges:!1,onCreateNode:null,onCreateScope:null,onDestroyScope:null,onLocalDeclaration:null,luaVersion:"5.1",encodingMode:"none"};function c(f,C){return C=C||0,f<128?String.fromCharCode(f):f<2048?String.fromCharCode(C|192|f>>6,C|128|f&63):f<65536?String.fromCharCode(C|224|f>>12,C|128|f>>6&63,C|128|f&63):f<1114112?String.fromCharCode(C|240|f>>18,C|128|f>>12&63,C|128|f>>6&63,C|128|f&63):null}function d(f,C){for(var _=f.toString(16);_.length<C;)_="0"+_;return _}function u(f){return function(C){var _=f.exec(C);if(!_)return C;M(null,A.invalidCodeUnit,d(_[0].charCodeAt(0),4).toUpperCase())}}var p={"pseudo-latin1":{fixup:u(/[^\x00-\xff]/),encodeByte:function(f){return f===null?"":String.fromCharCode(f)},encodeUTF8:function(f){return c(f)}},"x-user-defined":{fixup:u(/[^\x00-\x7f\uf780-\uf7ff]/),encodeByte:function(f){return f===null?"":f>=128?String.fromCharCode(f|63232):String.fromCharCode(f)},encodeUTF8:function(f){return c(f,63232)}},none:{discardStrings:!0,fixup:function(f){return f},encodeByte:function(f){return""},encodeUTF8:function(f){return""}}},b=1,h=2,y=4,m=8,g=16,S=32,I=64,k=128,T=256;t.tokenTypes={EOF:b,StringLiteral:h,Keyword:y,Identifier:m,NumericLiteral:g,Punctuator:S,BooleanLiteral:I,NilLiteral:k,VarargLiteral:T};var A=t.errors={unexpected:"unexpected %1 '%2' near '%3'",unexpectedEOF:"unexpected symbol near '<eof>'",expected:"'%1' expected near '%2'",expectedToken:"%1 expected near '%2'",unfinishedString:"unfinished string near '%1'",malformedNumber:"malformed number near '%1'",decimalEscapeTooLarge:"decimal escape too large near '%1'",invalidEscape:"invalid escape sequence near '%1'",hexadecimalDigitExpected:"hexadecimal digit expected near '%1'",braceExpected:"missing '%1' near '%2'",tooLargeCodepoint:"UTF-8 value too large near '%1'",unfinishedLongString:"unfinished long string (starting at line %1) near '%2'",unfinishedLongComment:"unfinished long comment (starting at line %1) near '%2'",ambiguousSyntax:"ambiguous syntax (function call x new statement) near '%1'",noLoopToBreak:"no loop to break near '%1'",labelAlreadyDefined:"label '%1' already defined on line %2",labelNotVisible:"no visible label '%1' for <goto>",gotoJumpInLocalScope:"<goto %1> jumps into the scope of local '%2'",cannotUseVararg:"cannot use '...' outside a vararg function near '%1'",invalidCodeUnit:"code unit U+%1 is not allowed in the current encoding mode"},v=t.ast={labelStatement:function(f){return{type:"LabelStatement",label:f}},breakStatement:function(){return{type:"BreakStatement"}},gotoStatement:function(f){return{type:"GotoStatement",label:f}},returnStatement:function(f){return{type:"ReturnStatement",arguments:f}},ifStatement:function(f){return{type:"IfStatement",clauses:f}},ifClause:function(f,C){return{type:"IfClause",condition:f,body:C}},elseifClause:function(f,C){return{type:"ElseifClause",condition:f,body:C}},elseClause:function(f){return{type:"ElseClause",body:f}},whileStatement:function(f,C){return{type:"WhileStatement",condition:f,body:C}},doStatement:function(f){return{type:"DoStatement",body:f}},repeatStatement:function(f,C){return{type:"RepeatStatement",condition:f,body:C}},localStatement:function(f,C){return{type:"LocalStatement",variables:f,init:C}},assignmentStatement:function(f,C){return{type:"AssignmentStatement",variables:f,init:C}},callStatement:function(f){return{type:"CallStatement",expression:f}},functionStatement:function(f,C,_,W){return{type:"FunctionDeclaration",identifier:f,isLocal:_,parameters:C,body:W}},forNumericStatement:function(f,C,_,W,ue){return{type:"ForNumericStatement",variable:f,start:C,end:_,step:W,body:ue}},forGenericStatement:function(f,C,_){return{type:"ForGenericStatement",variables:f,iterators:C,body:_}},chunk:function(f){return{type:"Chunk",body:f}},identifier:function(f){return{type:"Identifier",name:f}},literal:function(f,C,_){return f=f===h?"StringLiteral":f===g?"NumericLiteral":f===I?"BooleanLiteral":f===k?"NilLiteral":"VarargLiteral",{type:f,value:C,raw:_}},tableKey:function(f,C){return{type:"TableKey",key:f,value:C}},tableKeyString:function(f,C){return{type:"TableKeyString",key:f,value:C}},tableValue:function(f){return{type:"TableValue",value:f}},tableConstructorExpression:function(f){return{type:"TableConstructorExpression",fields:f}},binaryExpression:function(f,C,_){var W=f==="and"||f==="or"?"LogicalExpression":"BinaryExpression";return{type:W,operator:f,left:C,right:_}},unaryExpression:function(f,C){return{type:"UnaryExpression",operator:f,argument:C}},memberExpression:function(f,C,_){return{type:"MemberExpression",indexer:C,identifier:_,base:f}},indexExpression:function(f,C){return{type:"IndexExpression",base:f,index:C}},callExpression:function(f,C){return{type:"CallExpression",base:f,arguments:C}},tableCallExpression:function(f,C){return{type:"TableCallExpression",base:f,arguments:C}},stringCallExpression:function(f,C){return{type:"StringCallExpression",base:f,argument:C}},comment:function(f,C){return{type:"Comment",value:f,raw:C}}};function w(f){if(hn){var C=mn.pop();C.complete(),C.bless(f)}return r.onCreateNode&&r.onCreateNode(f),f}var H=Array.prototype.slice,z=function(f,C){for(var _=0,W=f.length;_<W;++_)if(f[_]===C)return _;return-1};Array.prototype.indexOf&&(z=function(f,C){return f.indexOf(C)});function Y(f,C,_){for(var W=0,ue=f.length;W<ue;++W)if(f[W][C]===_)return W;return-1}function E(f){var C=H.call(arguments,1);return f=f.replace(/%(\d)/g,function(_,W){return""+C[W-1]||""}),f}var te=function(f){for(var C=H.call(arguments,1),_,W,ue=0,Fe=C.length;ue<Fe;++ue){_=C[ue];for(W in _)Object.prototype.hasOwnProperty.call(_,W)&&(f[W]=_[W])}return f};Object.assign&&(te=Object.assign),t.SyntaxError=SyntaxError;function L(f){return Object.create?Object.create(f,{line:{writable:!0,value:f.line},index:{writable:!0,value:f.index},column:{writable:!0,value:f.column}}):f}function M(f){var C=E.apply(null,H.call(arguments,1)),_,W;throw f===null||typeof f.line>"u"?(W=$-we+1,_=L(new SyntaxError(E("[%1:%2] %3",Oe,W,C))),_.index=$,_.line=Oe,_.column=W):(W=f.range[0]-f.lineStart,_=L(new SyntaxError(E("[%1:%2] %3",f.line,W,C))),_.line=f.line,_.index=f.range[0],_.column=W),_}function se(f){var C=o.slice(f.range[0],f.range[1]);return C||f.value}function j(f,C){M(C,A.expectedToken,f,se(C))}function ie(f){var C=se(Ee);if(typeof f.type<"u"){var _;switch(f.type){case h:_="string";break;case y:_="keyword";break;case m:_="identifier";break;case g:_="number";break;case S:_="symbol";break;case I:_="boolean";break;case k:return M(f,A.unexpected,"symbol","nil",C);case b:return M(f,A.unexpectedEOF)}return M(f,A.unexpected,_,se(f),C)}return M(f,A.unexpected,"symbol",f,C)}var $,q,Pe,Ee,Pn,Be,Oe,we;t.lex=ze;function ze(){for(Ae();o.charCodeAt($)===45&&o.charCodeAt($+1)===45;)xe(),Ae();if($>=i)return{type:b,value:"<eof>",line:Oe,lineStart:we,range:[$,$]};var f=o.charCodeAt($),C=o.charCodeAt($+1);if(Be=$,Yn(f))return Jn();switch(f){case 39:case 34:return R();case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return U();case 46:return Ne(C)?U():C===46?o.charCodeAt($+2)===46?P():Ze(".."):Ze(".");case 61:return Ze(C===61?"==":"=");case 62:return a.bitwiseOperators&&C===62?Ze(">>"):Ze(C===61?">=":">");case 60:return a.bitwiseOperators&&C===60?Ze("<<"):Ze(C===61?"<=":"<");case 126:if(C===61)return Ze("~=");if(!a.bitwiseOperators)break;return Ze("~");case 58:return a.labels&&C===58?Ze("::"):Ze(":");case 91:return C===91||C===61?B():Ze("[");case 47:return a.integerDivision&&C===47?Ze("//"):Ze("/");case 38:case 124:if(!a.bitwiseOperators)break;case 42:case 94:case 37:case 44:case 123:case 125:case 93:case 40:case 41:case 59:case 35:case 45:case 43:return Ze(o.charAt($))}return ie(o.charAt($))}function Xn(){var f=o.charCodeAt($),C=o.charCodeAt($+1);return Me(f)?(f===10&&C===13&&++$,f===13&&C===10&&++$,++Oe,we=++$,!0):!1}function Ae(){for(;$<i;){var f=o.charCodeAt($);if(je(f))++$;else if(!Xn())break}}function Jn(){for(var f,C;qt(o.charCodeAt(++$)););return f=s.fixup(o.slice(Be,$)),ut(f)?C=y:f==="true"||f==="false"?(C=I,f=f==="true"):f==="nil"?(C=k,f=null):C=m,{type:C,value:f,line:Oe,lineStart:we,range:[Be,$]}}function Ze(f){return $+=f.length,{type:S,value:f,line:Oe,lineStart:we,range:[Be,$]}}function P(){return $+=3,{type:T,value:"...",line:Oe,lineStart:we,range:[Be,$]}}function R(){for(var f=o.charCodeAt($++),C=Oe,_=we,W=$,ue=s.discardStrings?null:"",Fe;Fe=o.charCodeAt($++),f!==Fe;)if(($>i||Me(Fe))&&(ue+=o.slice(W,$-1),M(null,A.unfinishedString,o.slice(Be,$-1))),Fe===92){if(!s.discardStrings){var qe=o.slice(W,$-1);ue+=s.fixup(qe)}var bn=N();s.discardStrings||(ue+=bn),W=$}return s.discardStrings||(ue+=s.encodeByte(null),ue+=s.fixup(o.slice(W,$-1))),{type:h,value:ue,line:C,lineStart:_,lastLine:Oe,lastLineStart:we,range:[Be,$]}}function B(){var f=Oe,C=we,_=me(!1);return _===!1&&M(q,A.expected,"[",se(q)),{type:h,value:s.discardStrings?null:s.fixup(_),line:f,lineStart:C,lastLine:Oe,lastLineStart:we,range:[Be,$]}}function U(){var f=o.charAt($),C=o.charAt($+1),_=f==="0"&&"xX".indexOf(C||null)>=0?de():re(),W=X(),ue=ae();return ue&&(W||_.hasFractionPart)&&M(null,A.malformedNumber,o.slice(Be,$)),{type:g,value:_.value,line:Oe,lineStart:we,range:[Be,$]}}function X(){if(a.imaginaryNumbers)return"iI".indexOf(o.charAt($)||null)>=0?(++$,!0):!1}function ae(){if(a.integerSuffixes){if("uU".indexOf(o.charAt($)||null)>=0)if(++$,"lL".indexOf(o.charAt($)||null)>=0){if(++$,"lL".indexOf(o.charAt($)||null)>=0)return++$,"ULL";M(null,A.malformedNumber,o.slice(Be,$))}else M(null,A.malformedNumber,o.slice(Be,$));else if("lL".indexOf(o.charAt($)||null)>=0){if(++$,"lL".indexOf(o.charAt($)||null)>=0)return++$,"LL";M(null,A.malformedNumber,o.slice(Be,$))}}}function de(){var f=0,C=1,_=1,W,ue,Fe,qe;for(qe=$+=2,an(o.charCodeAt($))||M(null,A.malformedNumber,o.slice(Be,$));an(o.charCodeAt($));)++$;W=parseInt(o.slice(qe,$),16);var bn=!1;if(o.charAt($)==="."){for(bn=!0,ue=++$;an(o.charCodeAt($));)++$;f=o.slice(ue,$),f=ue===$?0:parseInt(f,16)/Math.pow(16,$-ue)}var Qo=!1;if("pP".indexOf(o.charAt($)||null)>=0){for(Qo=!0,++$,"+-".indexOf(o.charAt($)||null)>=0&&(_=o.charAt($++)==="+"?1:-1),Fe=$,Ne(o.charCodeAt($))||M(null,A.malformedNumber,o.slice(Be,$));Ne(o.charCodeAt($));)++$;C=o.slice(Fe,$),C=Math.pow(2,C*_)}return{value:(W+f)*C,hasFractionPart:bn||Qo}}function re(){for(;Ne(o.charCodeAt($));)++$;var f=!1;if(o.charAt($)===".")for(f=!0,++$;Ne(o.charCodeAt($));)++$;var C=!1;if("eE".indexOf(o.charAt($)||null)>=0)for(C=!0,++$,"+-".indexOf(o.charAt($)||null)>=0&&++$,Ne(o.charCodeAt($))||M(null,A.malformedNumber,o.slice(Be,$));Ne(o.charCodeAt($));)++$;return{value:parseFloat(o.slice(Be,$)),hasFractionPart:f||C}}function ee(){var f=$++;for(o.charAt($++)!=="{"&&M(null,A.braceExpected,"{","\\"+o.slice(f,$)),an(o.charCodeAt($))||M(null,A.hexadecimalDigitExpected,"\\"+o.slice(f,$));o.charCodeAt($)===48;)++$;for(var C=$;an(o.charCodeAt($));)++$,$-C>6&&M(null,A.tooLargeCodepoint,"\\"+o.slice(f,$));var _=o.charAt($++);_!=="}"&&(_==='"'||_==="'"?M(null,A.braceExpected,"}","\\"+o.slice(f,$--)):M(null,A.hexadecimalDigitExpected,"\\"+o.slice(f,$)));var W=parseInt(o.slice(C,$-1)||"0",16),ue="\\"+o.slice(f,$);return W>1114111&&M(null,A.tooLargeCodepoint,ue),s.encodeUTF8(W,ue)}function N(){var f=$;switch(o.charAt($)){case"a":return++$,"\x07";case"n":return++$,`
`;case"r":return++$,"\r";case"t":return++$,"	";case"v":return++$,"\v";case"b":return++$,"\b";case"f":return++$,"\f";case"\r":case`
`:return Xn(),`
`;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;Ne(o.charCodeAt($))&&$-f<3;)++$;var C=o.slice(f,$),_=parseInt(C,10);return _>255&&M(null,A.decimalEscapeTooLarge,"\\"+_),s.encodeByte(_,"\\"+C);case"z":if(a.skipWhitespaceEscape)return++$,Ae(),"";break;case"x":if(a.hexEscapes){if(an(o.charCodeAt($+1))&&an(o.charCodeAt($+2)))return $+=3,s.encodeByte(parseInt(o.slice(f+1,$),16),"\\"+o.slice(f,$));M(null,A.hexadecimalDigitExpected,"\\"+o.slice(f,$+2))}break;case"u":if(a.unicodeEscapes)return ee();break;case"\\":case'"':case"'":return o.charAt($++)}return a.strictEscapes&&M(null,A.invalidEscape,"\\"+o.slice(f,$+1)),o.charAt($++)}function xe(){Be=$,$+=2;var f=o.charAt($),C="",_=!1,W=$,ue=we,Fe=Oe;if(f==="["&&(C=me(!0),C===!1?C=f:_=!0),!_){for(;$<i&&!Me(o.charCodeAt($));)++$;r.comments&&(C=o.slice(W,$))}if(r.comments){var qe=v.comment(C,o.slice(Be,$));r.locations&&(qe.loc={start:{line:Fe,column:Be-ue},end:{line:Oe,column:$-we}}),r.ranges&&(qe.range=[Be,$]),r.onCreateNode&&r.onCreateNode(qe),Pn.push(qe)}}function me(f){var C=0,_="",W=!1,ue,Fe,qe=Oe;for(++$;o.charAt($+C)==="=";)++C;if(o.charAt($+C)!=="[")return!1;for($+=C+1,Me(o.charCodeAt($))&&Xn(),Fe=$;$<i;){for(;Me(o.charCodeAt($));)Xn();if(ue=o.charAt($++),ue==="]"){W=!0;for(var bn=0;bn<C;++bn)o.charAt($+bn)!=="="&&(W=!1);o.charAt($+C)!=="]"&&(W=!1)}if(W)return _+=o.slice(Fe,$-1),$+=C+1,_}M(null,f?A.unfinishedLongComment:A.unfinishedLongString,qe,"<eof>")}function oe(){Pe=q,q=Ee,Ee=ze()}function fe(f){return f===q.value?(oe(),!0):!1}function ye(f){f===q.value?oe():M(q,A.expected,f,se(q))}function je(f){return f===9||f===32||f===11||f===12}function Me(f){return f===10||f===13}function Ne(f){return f>=48&&f<=57}function an(f){return f>=48&&f<=57||f>=97&&f<=102||f>=65&&f<=70}function Yn(f){return!!(f>=65&&f<=90||f>=97&&f<=122||f===95||a.extendedIdentifiers&&f>=128)}function qt(f){return!!(f>=65&&f<=90||f>=97&&f<=122||f===95||f>=48&&f<=57||a.extendedIdentifiers&&f>=128)}function ut(f){switch(f.length){case 2:return f==="do"||f==="if"||f==="in"||f==="or";case 3:return f==="and"||f==="end"||f==="for"||f==="not";case 4:return f==="else"||f==="then"?!0:a.labels&&!a.contextualGoto?f==="goto":!1;case 5:return f==="break"||f==="local"||f==="until"||f==="while";case 6:return f==="elseif"||f==="repeat"||f==="return";case 8:return f==="function"}return!1}function rt(f){return S===f.type?"#-~".indexOf(f.value)>=0:y===f.type?f.value==="not":!1}function Cn(f){if(b===f.type)return!0;if(y!==f.type)return!1;switch(f.value){case"else":case"elseif":case"end":case"until":return!0;default:return!1}}var J,pe,Te;function Le(){var f=J[pe++].slice();J.push(f),r.onCreateScope&&r.onCreateScope()}function Ue(){J.pop(),--pe,r.onDestroyScope&&r.onDestroyScope()}function wn(f){r.onLocalDeclaration&&r.onLocalDeclaration(f),z(J[pe],f)===-1&&J[pe].push(f)}function Sn(f){wn(f.name),Qe(f,!0)}function Qe(f,C){!C&&Y(Te,"name",f.name)===-1&&Te.push(f),f.isLocal=C}function On(f){return z(J[pe],f)!==-1}var mn=[],hn;function Qn(){return new Jo(q)}function Jo(f){r.locations&&(this.loc={start:{line:f.line,column:f.range[0]-f.lineStart},end:{line:0,column:0}}),r.ranges&&(this.range=[f.range[0],0])}Jo.prototype.complete=function(){r.locations&&(this.loc.end.line=Pe.lastLine||Pe.line,this.loc.end.column=Pe.range[1]-(Pe.lastLineStart||Pe.lineStart)),r.ranges&&(this.range[1]=Pe.range[1])},Jo.prototype.bless=function(f){if(this.loc){var C=this.loc;f.loc={start:{line:C.start.line,column:C.start.column},end:{line:C.end.line,column:C.end.column}}}this.range&&(f.range=[this.range[0],this.range[1]])};function Zt(){hn&&mn.push(Qn())}function In(f){hn&&mn.push(f)}function Bn(){this.scopes=[],this.pendingGotos=[]}Bn.prototype.isInLoop=function(){for(var f=this.scopes.length;f-- >0;)if(this.scopes[f].isLoop)return!0;return!1},Bn.prototype.pushScope=function(f){var C={labels:{},locals:[],deferredGotos:[],isLoop:!!f};this.scopes.push(C)},Bn.prototype.popScope=function(){for(var f=0;f<this.pendingGotos.length;++f){var C=this.pendingGotos[f];C.maxDepth>=this.scopes.length&&--C.maxDepth<=0&&M(C.token,A.labelNotVisible,C.target)}this.scopes.pop()},Bn.prototype.addGoto=function(f,C){for(var _=[],W=0;W<this.scopes.length;++W){var ue=this.scopes[W];if(_.push(ue.locals.length),Object.prototype.hasOwnProperty.call(ue.labels,f))return}this.pendingGotos.push({maxDepth:this.scopes.length,target:f,token:C,localCounts:_})},Bn.prototype.addLabel=function(f,C){var _=this.currentScope();if(Object.prototype.hasOwnProperty.call(_.labels,f))M(C,A.labelAlreadyDefined,f,_.labels[f].line);else{for(var W=[],ue=0;ue<this.pendingGotos.length;++ue){var Fe=this.pendingGotos[ue];if(Fe.maxDepth>=this.scopes.length&&Fe.target===f){Fe.localCounts[this.scopes.length-1]<_.locals.length&&_.deferredGotos.push(Fe);continue}W.push(Fe)}this.pendingGotos=W}_.labels[f]={localCount:_.locals.length,line:C.line}},Bn.prototype.addLocal=function(f,C){this.currentScope().locals.push({name:f,token:C})},Bn.prototype.currentScope=function(){return this.scopes[this.scopes.length-1]},Bn.prototype.raiseDeferredErrors=function(){for(var f=this.currentScope(),C=f.deferredGotos,_=0;_<C.length;++_){var W=C[_];M(W.token,A.gotoJumpInLocalScope,W.target,f.locals[W.localCounts[this.scopes.length-1]].name)}};function D(){this.level=0,this.loopLevels=[]}D.prototype.isInLoop=function(){return!!this.loopLevels.length},D.prototype.pushScope=function(f){++this.level,f&&this.loopLevels.push(this.level)},D.prototype.popScope=function(){var f=this.loopLevels,C=f.length;C&&f[C-1]===this.level&&f.pop(),--this.level},D.prototype.addGoto=D.prototype.addLabel=function(){throw new Error("This should never happen")},D.prototype.addLocal=D.prototype.raiseDeferredErrors=function(){};function Z(){return a.labels?new Bn:new D}function Se(){oe(),Zt(),r.scope&&Le();var f=Z();f.allowVararg=!0,f.pushScope();var C=We(f);return f.popScope(),r.scope&&Ue(),b!==q.type&&ie(q),hn&&!C.length&&(Pe=q),w(v.chunk(C))}function We(f){for(var C=[],_;!Cn(q);){if(q.value==="return"||!a.relaxedBreak&&q.value==="break"){C.push(dn(f));break}_=dn(f),fe(";"),_&&C.push(_)}return C}function dn(f){if(Zt(),S===q.type&&fe("::"))return on(f);if(a.emptyStatement&&fe(";")){hn&&mn.pop();return}if(f.raiseDeferredErrors(),y===q.type)switch(q.value){case"local":return oe(),ds(f);case"if":return oe(),ls(f);case"return":return oe(),Rr(f);case"function":oe();var C=fs();return Dr(C);case"while":return oe(),xo(f);case"for":return oe(),cs(f);case"repeat":return oe(),Co(f);case"break":return oe(),f.isInLoop()||M(q,A.noLoopToBreak,q.value),Et();case"do":return oe(),zt(f);case"goto":return oe(),Tt(f)}return a.contextualGoto&&q.type===m&&q.value==="goto"&&Ee.type===m&&Ee.value!=="goto"?(oe(),Tt(f)):(hn&&mn.pop(),us(f))}function on(f){var C=q,_=Hn();return r.scope&&(wn("::"+C.value+"::"),Qe(_,!0)),ye("::"),f.addLabel(C.value,C),w(v.labelStatement(_))}function Et(){return w(v.breakStatement())}function Tt(f){var C=q.value,_=Pe,W=Hn();return f.addGoto(C,_),w(v.gotoStatement(W))}function zt(f){r.scope&&Le(),f.pushScope();var C=We(f);return f.popScope(),r.scope&&Ue(),ye("end"),w(v.doStatement(C))}function xo(f){var C=gn(f);ye("do"),r.scope&&Le(),f.pushScope(!0);var _=We(f);return f.popScope(),r.scope&&Ue(),ye("end"),w(v.whileStatement(C,_))}function Co(f){r.scope&&Le(),f.pushScope(!0);var C=We(f);ye("until"),f.raiseDeferredErrors();var _=gn(f);return f.popScope(),r.scope&&Ue(),w(v.repeatStatement(_,C))}function Rr(f){var C=[];if(q.value!=="end"){var _=Yo(f);for(_!=null&&C.push(_);fe(",");)_=gn(f),C.push(_);fe(";")}return w(v.returnStatement(C))}function ls(f){var C=[],_,W,ue;for(hn&&(ue=mn[mn.length-1],mn.push(ue)),_=gn(f),ye("then"),r.scope&&Le(),f.pushScope(),W=We(f),f.popScope(),r.scope&&Ue(),C.push(w(v.ifClause(_,W))),hn&&(ue=Qn());fe("elseif");)In(ue),_=gn(f),ye("then"),r.scope&&Le(),f.pushScope(),W=We(f),f.popScope(),r.scope&&Ue(),C.push(w(v.elseifClause(_,W))),hn&&(ue=Qn());return fe("else")&&(hn&&(ue=new Jo(Pe),mn.push(ue)),r.scope&&Le(),f.pushScope(),W=We(f),f.popScope(),r.scope&&Ue(),C.push(w(v.elseClause(W)))),ye("end"),w(v.ifStatement(C))}function cs(f){var C=Hn(),_;if(r.scope&&(Le(),Sn(C)),fe("=")){var W=gn(f);ye(",");var ue=gn(f),Fe=fe(",")?gn(f):null;return ye("do"),f.pushScope(!0),_=We(f),f.popScope(),ye("end"),r.scope&&Ue(),w(v.forNumericStatement(C,W,ue,Fe,_))}else{for(var qe=[C];fe(",");)C=Hn(),r.scope&&Sn(C),qe.push(C);ye("in");var bn=[];do{var Qo=gn(f);bn.push(Qo)}while(fe(","));return ye("do"),f.pushScope(!0),_=We(f),f.popScope(),ye("end"),r.scope&&Ue(),w(v.forGenericStatement(qe,bn,_))}}function ds(f){var C,_=Pe;if(m===q.type){var W=[],ue=[];do C=Hn(),W.push(C),f.addLocal(C.name,_);while(fe(","));if(fe("="))do{var Fe=gn(f);ue.push(Fe)}while(fe(","));if(r.scope)for(var qe=0,bn=W.length;qe<bn;++qe)Sn(W[qe]);return w(v.localStatement(W,ue))}if(fe("function"))return C=Hn(),f.addLocal(C.name,_),r.scope&&(Sn(C),Le()),Dr(C,!0);j("<name>",q)}function us(f){var C,_,W,ue,Fe,qe=[];hn&&(_=Qn());do{if(hn&&(C=Qn()),m===q.type)Fe=q.value,ue=Hn(),r.scope&&Qe(ue,On(Fe)),W=!0;else if(q.value==="(")oe(),ue=gn(f),ye(")"),W=!1;else return ie(q);e:for(;;){switch(h===q.type?'"':q.value){case".":case"[":W=!0;break;case":":case"(":case"{":case'"':W=null;break;default:break e}ue=Di(ue,C,f)}if(qe.push(ue),q.value!==",")break;if(!W)return ie(q);oe()}while(!0);if(qe.length===1&&W===null)return In(C),w(v.callStatement(qe[0]));if(!W)return ie(q);ye("=");var bn=[];do bn.push(gn(f));while(fe(","));return In(_),w(v.assignmentStatement(qe,bn))}function Hn(){Zt();var f=q.value;return m!==q.type&&j("<name>",q),oe(),w(v.identifier(f))}function Dr(f,C){var _=Z();_.pushScope();var W=[];if(ye("("),!fe(")"))for(;;){if(m===q.type){var ue=Hn();if(r.scope&&Sn(ue),W.push(ue),fe(","))continue}else T===q.type?(_.allowVararg=!0,W.push(_r(_))):j("<name> or '...'",q);ye(")");break}var Fe=We(_);return _.popScope(),ye("end"),r.scope&&Ue(),C=C||!1,w(v.functionStatement(f,W,C,Fe))}function fs(){var f,C,_;for(hn&&(_=Qn()),f=Hn(),r.scope&&(Qe(f,On(f.name)),Le());fe(".");)In(_),C=Hn(),f=w(v.memberExpression(f,".",C));return fe(":")&&(In(_),C=Hn(),f=w(v.memberExpression(f,":",C)),r.scope&&wn("self")),f}function Ri(f){for(var C=[],_,W;;){if(Zt(),S===q.type&&fe("["))_=gn(f),ye("]"),ye("="),W=gn(f),C.push(w(v.tableKey(_,W)));else if(m===q.type)Ee.value==="="?(_=Hn(),oe(),W=gn(f),C.push(w(v.tableKeyString(_,W)))):(W=gn(f),C.push(w(v.tableValue(W))));else{if((W=Yo(f))==null){mn.pop();break}C.push(w(v.tableValue(W)))}if(",;".indexOf(q.value)>=0){oe();continue}break}return ye("}"),w(v.tableConstructorExpression(C))}function Yo(f){var C=Ir(0,f);return C}function gn(f){var C=Yo(f);if(C==null)j("<expression>",q);else return C}function hs(f){var C=f.charCodeAt(0),_=f.length;if(_===1)switch(C){case 94:return 12;case 42:case 47:case 37:return 10;case 43:case 45:return 9;case 38:return 6;case 126:return 5;case 124:return 4;case 60:case 62:return 3}else if(_===2)switch(C){case 47:return 10;case 46:return 8;case 60:case 62:return f==="<<"||f===">>"?7:3;case 61:case 126:return 3;case 111:return 1}else if(C===97&&f==="and")return 2;return 0}function Ir(f,C){var _=q.value,W,ue;if(hn&&(ue=Qn()),rt(q)){Zt(),oe();var Fe=Ir(10,C);Fe==null&&j("<expression>",q),W=w(v.unaryExpression(_,Fe))}if(W==null&&(W=_r(C),W==null&&(W=ps(C))),W==null)return null;for(var qe;_=q.value,qe=S===q.type||y===q.type?hs(_):0,!(qe===0||qe<=f);){(_==="^"||_==="..")&&--qe,oe();var bn=Ir(qe,C);bn==null&&j("<expression>",q),hn&&mn.push(ue),W=w(v.binaryExpression(_,W,bn))}return W}function Di(f,C,_){var W,ue;if(S===q.type)switch(q.value){case"[":return In(C),oe(),W=gn(_),ye("]"),w(v.indexExpression(f,W));case".":return In(C),oe(),ue=Hn(),w(v.memberExpression(f,".",ue));case":":return In(C),oe(),ue=Hn(),f=w(v.memberExpression(f,":",ue)),In(C),Hr(f,_);case"(":case"{":return In(C),Hr(f,_)}else if(h===q.type)return In(C),Hr(f,_);return null}function ps(f){var C,_,W;if(hn&&(W=Qn()),m===q.type)_=q.value,C=Hn(),r.scope&&Qe(C,On(_));else if(fe("("))C=gn(f),ye(")");else return null;for(;;){var ue=Di(C,W,f);if(ue===null)break;C=ue}return C}function Hr(f,C){if(S===q.type)switch(q.value){case"(":a.emptyStatement||q.line!==Pe.line&&M(null,A.ambiguousSyntax,q.value),oe();var _=[],W=Yo(C);for(W!=null&&_.push(W);fe(",");)W=gn(C),_.push(W);return ye(")"),w(v.callExpression(f,_));case"{":Zt(),oe();var ue=Ri(C);return w(v.tableCallExpression(f,ue))}else if(h===q.type)return w(v.stringCallExpression(f,_r(C)));j("function arguments",q)}function _r(f){var C=h|g|I|k|T,_=q.value,W=q.type,ue;if(hn&&(ue=Qn()),W===T&&!f.allowVararg&&M(q,A.cannotUseVararg,q.value),W&C){In(ue);var Fe=o.slice(q.range[0],q.range[1]);return oe(),w(v.literal(W,_,Fe))}else{if(y===W&&_==="function")return In(ue),oe(),r.scope&&Le(),Dr(null);if(fe("{"))return In(ue),Ri(f)}}t.parse=ms;var Ii={"5.1":{},"5.2":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,relaxedBreak:!0},"5.3":{labels:!0,emptyStatement:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,bitwiseOperators:!0,integerDivision:!0,relaxedBreak:!0},LuaJIT:{labels:!0,contextualGoto:!0,hexEscapes:!0,skipWhitespaceEscape:!0,strictEscapes:!0,unicodeEscapes:!0,imaginaryNumbers:!0,integerSuffixes:!0}};function ms(f,C){if(typeof C>"u"&&typeof f=="object"&&(C=f,f=void 0),C||(C={}),o=f||"",r=te({},l,C),$=0,Oe=1,we=0,i=o.length,J=[[]],pe=0,Te=[],mn=[],!Object.prototype.hasOwnProperty.call(Ii,r.luaVersion))throw new Error(E("Lua version '%1' not supported",r.luaVersion));if(a=te({},Ii[r.luaVersion]),r.extendedIdentifiers!==void 0&&(a.extendedIdentifiers=!!r.extendedIdentifiers),!Object.prototype.hasOwnProperty.call(p,r.encodingMode))throw new Error(E("Encoding mode '%1' not supported",r.encodingMode));return s=p[r.encodingMode],r.comments&&(Pn=[]),r.wait?t:_i()}t.write=Hi;function Hi(f){return o+=String(f),i=o.length,t}t.end=_i;function _i(f){typeof f<"u"&&Hi(f),o&&o.substr(0,2)==="#!"&&(o=o.replace(/^.*/,function(_){return _.replace(/./g," ")})),i=o.length,hn=r.locations||r.ranges,Ee=ze();var C=Se();if(r.comments&&(C.comments=Pn),r.scope&&(C.globals=Te),mn.length>0)throw new Error("Location tracking failed. This is most likely a bug in luaparse");return C}})})(t6,ka);const o6=(()=>{const e=K();function n(){e.value=screen.width<640}return n(),window.addEventListener("resize",n),e})();function r6(e,n,t){const o=e.matchAll(n);return Array.from(o).forEach(r=>{const i=t(r);e=e.replace(r[0],i)}),e}class i6{constructor(n){gs(this,"variables",{FNNS:!1,CHAR:{mino:{Z:`<i class="${en} mino Z"/>`,S:`<i class="${en} mino S"/>`,J:`<i class="${en} mino J"/>`,L:`<i class="${en} mino L"/>`,T:`<i class="${en} mino T"/>`,O:`<i class="${en} mino O"/>`,I:`<i class="${en} mino I"/>`,Z5:`<i class="${en} mino Z5"/>`,S5:`<i class="${en} mino S5"/>`,P:`<i class="${en} mino P"/>`,Q:`<i class="${en} mino Q"/>`,F:`<i class="${en} mino F"/>`,E:`<i class="${en} mino E"/>`,T5:`<i class="${en} mino T5"/>`,U:`<i class="${en} mino U"/>`,V:`<i class="${en} mino V"/>`,W:`<i class="${en} mino W"/>`,X:`<i class="${en} mino X"/>`,J5:`<i class="${en} mino J5"/>`,L5:`<i class="${en} mino L5"/>`,R:`<i class="${en} mino R"/>`,Y:`<i class="${en} mino Y"/>`,N:`<i class="${en} mino N"/>`,H:`<i class="${en} mino H"/>`,I5:`<i class="${en} mino I5"/>`,I3:`<i class="${en} mino I3"/>`,C:`<i class="${en} mino C"/>`,I2:`<i class="${en} mino I2"/>`,O1:`<i class="${en} mino O1"/>`}}});gs(this,"_items",new Array);this.code=n;const t=this;ka.parse(n).body.forEach(r=>{t.processStatement(r)})}get items(){const n=this;return this._items.map(t=>{var o;return{title:n.processRaw(t[0],!1),tags:((o=n.processRaw(t[1],!1))==null?void 0:o.split(" "))??[],category:n.processRaw(t[2],!1),content:n.processRaw(t[3],!1),link:n.processRaw(t[4],!1)}})}processRaw(n,t=!0){if(!n)return null;let o=r6(n.slice(1,-1),/\\(\d+)/g,r=>String.fromCharCode(parseInt(r[1])));return t&&(o[0]!=='"'&&(o='"'+o),o[o.length-1]!=='"'&&(o=o+'"')),o}processStatement(n){const t=this;switch(n.type){case"LocalStatement":n.variables.forEach(function({name:o},r){const i=n.init[r];t.variables[o]=t.processRaw(i.raw)});break;case"ReturnStatement":n.arguments.forEach(o=>{this.processExpression(o)});break;default:throw new Error(`Unknown statement: ${n.type}`)}}processExpression(n,t={}){const o=this,r=new Array;switch(n.type){case"TableConstructorExpression":return n.fields.forEach(s=>{r.push(o.processExpression(s.value))}),r.length>0&&r.length<=5&&this._items.push(r),r;case"BinaryExpression":switch(n.operator){case"..":r.push(o.processExpression(n.left,{rawAddQuote:!1})),r.push(o.processExpression(n.right,{rawAddQuote:!1}));break;default:throw new Error(`Unknown operator: ${n.operator}`)}return r.join("");case"MemberExpression":r.push(o.processExpression(n.base,{forceReturnVariableName:!0})),r.push(n.indexer),r.push(o.processExpression(n.identifier,{forceReturnVariableName:!0}));const i=r.flat().join(""),a=ep(o.variables,i);return typeof a!="string"?i:a;case"LogicalExpression":switch(r.push(o.processExpression(n.left)),n.operator){case"and":r.push("&&");break;case"or":r.push("||");break;default:throw new Error("Unknown operator")}return r.push(o.processExpression(n.right)),r.join(" ");case"Identifier":return!o.variables[n.name]||t.forceReturnVariableName?n.name:o.variables[n.name];case"StringLiteral":return o.processRaw(n.raw,t.rawAddQuote??!0);default:throw new Error(`Unknown expression: ${n.type}`)}}}var Nu;const Ar=typeof window<"u",a6=e=>typeof e=="string",s6=()=>{};Ar&&((Nu=window==null?void 0:window.navigator)!=null&&Nu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Mc(e){return typeof e=="function"?e():Re(e)}function l6(e){return e}function rb(e){return rf()?(af(e),!0):!1}function c6(e,n=!0){Gt()?Un(e):n?e():Vn(e)}function d6(e,n,t={}){const{immediate:o=!0}=t,r=K(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function s(){r.value=!1,a()}function l(...c){a(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...c)},Mc(n))}return o&&(r.value=!0,Ar&&l()),rb(s),{isPending:r,start:l,stop:s}}function u6(e){var n;const t=Mc(e);return(n=t==null?void 0:t.$el)!=null?n:t}const f6=Ar?window:void 0;Ar&&window.document;const h6=Ar?window.navigator:void 0;Ar&&window.location;function p6(...e){let n,t,o,r;if(a6(e[0])||Array.isArray(e[0])?([t,o,r]=e,n=f6):[n,t,o,r]=e,!n)return s6;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const i=[],a=()=>{i.forEach(d=>d()),i.length=0},s=(d,u,p)=>(d.addEventListener(u,p,r),()=>d.removeEventListener(u,p,r)),l=pn(()=>u6(n),d=>{a(),d&&i.push(...t.flatMap(u=>o.map(p=>s(d,u,p))))},{immediate:!0,flush:"post"}),c=()=>{l(),a()};return rb(c),c}function m6(e,n=!1){const t=K(),o=()=>t.value=Boolean(e());return o(),c6(o,n),t}function g6(e={}){const{navigator:n=h6,read:t=!1,source:o,copiedDuring:r=1500,legacy:i=!1}=e,a=["copy","cut"],s=m6(()=>n&&"clipboard"in n),l=G(()=>s.value||i),c=K(""),d=K(!1),u=d6(()=>d.value=!1,r);function p(){s.value?n.clipboard.readText().then(m=>{c.value=m}):c.value=y()}if(l.value&&t)for(const m of a)p6(m,p);async function b(m=Mc(o)){l.value&&m!=null&&(s.value?await n.clipboard.writeText(m):h(m),c.value=m,d.value=!0,u.start())}function h(m){const g=document.createElement("textarea");g.value=m??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function y(){var m,g,S;return(S=(g=(m=document==null?void 0:document.getSelection)==null?void 0:m.call(document))==null?void 0:g.toString())!=null?S:""}return{isSupported:l,text:c,copied:d,copy:b}}const Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dl="__vueuse_ssr_handlers__";Rl[Dl]=Rl[Dl]||{};Rl[Dl];var Gu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Gu||(Gu={}));var b6=Object.defineProperty,Vu=Object.getOwnPropertySymbols,v6=Object.prototype.hasOwnProperty,y6=Object.prototype.propertyIsEnumerable,Ku=(e,n,t)=>n in e?b6(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x6=(e,n)=>{for(var t in n||(n={}))v6.call(n,t)&&Ku(e,t,n[t]);if(Vu)for(var t of Vu(n))y6.call(n,t)&&Ku(e,t,n[t]);return e};const C6={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};x6({linear:l6},C6);const ib=ob("app",{state:()=>({theme:Ny().value,lang:"zh"}),getters:{themeRef(e){switch(e.theme){case"light":return S5;case"dark":return w5;default:return null}},dictItems(e){if(Ks.has(e.lang))return Ks.get(e.lang);const n=new i6(e6[e.lang]).items;return Ks.set(e.lang,n),n},translations(e){return n6[e.lang]},langOptions(e){return[{label:"English",key:"en",disabled:e.lang==="en"},{label:"日本語",key:"ja",disabled:e.lang==="ja"},{label:"简体中文",key:"zh",disabled:e.lang==="zh"}]}},actions:{switchTheme(){this.theme=this.theme==="light"?"dark":"light"},handleLangUpdate(e){const n=ab();this.lang=e,n.removeCurrent()}},persist:{enabled:!0}}),ab=ob("shared",{state:()=>({search:K(),current:K()}),getters:{showing(e){return!!e.current}},actions:{setSearch(e){this.search=e,this.removeCurrent()},setCurrent(e){this.current=e},removeCurrent(){this.current=void 0},async copyCurrentDict(){var i,a;const e=ib(),{message:n,unmount:t}=b5(["message"],{configProviderProps:{theme:e.themeRef}});if(!this.current){n.error("?",{onAfterLeave(){t()}});return}const{copy:o,isSupported:r}=g6({source:[(i=this.current)==null?void 0:i.title,"",(a=this.current)==null?void 0:a.content,"",`==${e.translations.copy_from}: ${e.translations.title}==`].join(`\r
`),legacy:!0});if(!r){n.error(e.translations.error,{onAfterLeave(){t()}});return}await o(),n.success(e.translations.copied,{onAfterLeave(){t()}})}}}),w6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},S6=St("path",{opacity:".3",d:"M8 7h11v14H8z",fill:"currentColor"},null,-1),T6=St("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",fill:"currentColor"},null,-1),k6=[S6,T6],P6=ge({name:"ContentCopyTwotone",render:function(n,t){return rn(),Bt("svg",w6,k6)}}),$6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},A6=St("path",{opacity:".3",d:"M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56c-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4a7.987 7.987 0 0 0 4.33 3.56A15.65 15.65 0 0 1 8.03 16H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8a8.03 8.03 0 0 0-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4A8.03 8.03 0 0 0 18.92 16h-2.95a15.65 15.65 0 0 1-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z",fill:"currentColor"},null,-1),R6=St("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",fill:"currentColor"},null,-1),D6=[A6,R6],I6=ge({name:"LanguageTwotone",render:function(n,t){return rn(),Bt("svg",$6,D6)}}),H6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_6=St("path",{d:"M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),E6=[_6],z6=ge({name:"Moon",render:function(n,t){return rn(),Bt("svg",H6,E6)}}),M6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},L6=St("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[St("circle",{cx:"12",cy:"12",r:"4"}),St("path",{d:"M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"})],-1),O6=[L6],B6=ge({name:"Sun",render:function(n,t){return rn(),Bt("svg",M6,O6)}}),F6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},W6=St("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zM4.02 16.394l1.338.446L7 19.303v1.283a1 1 0 0 0 .293.707L10 24v2.377a11.994 11.994 0 0 1-5.98-9.983zM16 28a11.968 11.968 0 0 1-2.572-.285L14 26l1.805-4.512a1 1 0 0 0-.097-.926l-1.411-2.117a1 1 0 0 0-.832-.445h-4.93l-1.248-1.873L9.414 14H11v2h2v-2.734l3.868-6.77l-1.736-.992L14.277 7h-2.742L10.45 5.371A11.861 11.861 0 0 1 20 4.7V8a1 1 0 0 0 1 1h1.465a1 1 0 0 0 .832-.445l.877-1.316A12.033 12.033 0 0 1 26.894 11H22.82a1 1 0 0 0-.98.804l-.723 4.47a1 1 0 0 0 .54 1.055L25 19l.685 4.056A11.98 11.98 0 0 1 16 28z",fill:"currentColor"},null,-1),j6=[W6],N6=ge({name:"EarthFilled",render:function(n,t){return rn(),Bt("svg",F6,j6)}}),G6=ge({__name:"App",setup(e){const n=ib(),t=ab(),o=G(()=>D2(n.dictItems.map(i=>(i.content!==null&&(i.content=i.content.replaceAll("\\t","	").replaceAll("\\n",`
`)),i)).filter(i=>{var a,s,l,c;return t.search?[!!((s=i.title)!=null&&s.toLowerCase().match((a=t.search)==null?void 0:a.toLowerCase())),!!((c=i.tags)!=null&&c.map(d=>d.toLowerCase()).includes((l=t.search)==null?void 0:l.toLowerCase()))].includes(!0):!0}),"category"));function r(i){const a=/^tetris/ig,s=i==null?void 0:i.match(a);if(!i||!s)return x(rr,{class:"text-current"},i??"?");const l=i==null?void 0:i.replace(a,"");return x(na,null,[x(Ta,null,{trigger:()=>x("i",{class:"zChan thinking not-italic text-xl mr-1"}),default:()=>s[0]}),x(rr,{class:"text-current"},l)])}return(i,a)=>{const s=Fm,l=kl,c=C3,d=xR,u=d5,p=p$,b=iR,h=a3,y=zR,m=NR,g=u5,S=$I,I=DI,k=PI,T=Cm;return rn(),_n(T,{theme:Re(n).themeRef,class:"h-full"},{default:He(()=>[ke(k,{class:"h-full","native-scrollbar":""},{default:He(()=>[ke(S,{class:"pb-16 h-full mx-2","native-scrollbar":""},{default:He(()=>[ke(d,{class:"mt-2",justify:"space-between"},{default:He(()=>[ke(l,{onClick:Re(n).switchTheme},{icon:He(()=>[ke(s,{component:Re(n).theme==="light"?Re(z6):Re(B6)},null,8,["component"])]),_:1},8,["onClick"]),ke(c,{options:Re(n).langOptions,animated:"",trigger:"click",onSelect:Re(n).handleLangUpdate},{default:He(()=>[ke(l,null,{icon:He(()=>[ke(s,{component:Re(I6)},null,8,["component"])]),_:1})]),_:1},8,["options","onSelect"])]),_:1}),ke(d,{class:"sm:w-1/3 mx-auto mt-20",vertical:""},{default:He(()=>[ke(Re(na),{class:"text-center"},{default:He(()=>[ke(u,null,{default:He(()=>[Gn(Er(Re(n).translations.title),1)]),_:1}),Re(t).showing?(rn(),_n(d,{key:1,justify:"center"},{default:He(()=>[ke(l,{onClick:Re(t).removeCurrent},{default:He(()=>[Gn("返回")]),_:1},8,["onClick"])]),_:1})):(rn(),_n(p,{key:0,value:Re(t).search,"onUpdate:value":a[0]||(a[0]=A=>Re(t).search=A),placeholder:Re(n).translations.search,clearable:""},null,8,["value","placeholder"]))]),_:1}),ke(b)]),_:1}),ke(d,{size:"large",vertical:""},{default:He(()=>[Re(t).showing?(rn(),_n(Re(na),{key:1,class:"sm:w-1/3 mx-auto"},{default:He(()=>[ke(d,{vertical:""},{default:He(()=>{var A;return[ke(g,null,{default:He(()=>{var v;return[(rn(),_n(Cs(r(((v=Re(t).current)==null?void 0:v.title)??null))))]}),_:1}),ke(Re(rr),{class:"whitespace-pre-wrap",innerHTML:(A=Re(t).current)==null?void 0:A.content},null,8,["innerHTML"]),ke(d,{class:"mt-10 items-end",justify:"space-between"},{default:He(()=>[ke(d,{size:"small"},{default:He(()=>{var v;return[ke(Re(rr),null,{default:He(()=>[Gn(Er(Re(n).translations.tags)+": ",1)]),_:1}),(rn(!0),Bt(Je,null,Fi((v=Re(t).current)==null?void 0:v.tags,w=>(rn(),_n(l,{text:"",type:"info",onClick:H=>Re(t).setSearch(w)},{default:He(()=>[Gn(Er(w),1)]),_:2},1032,["onClick"]))),256))]}),_:1}),ke(d,null,{default:He(()=>{var v,w;return[(v=Re(t).current)!=null&&v.link?(rn(),_n(l,{key:0,href:(w=Re(t).current)==null?void 0:w.link,tag:"a"},{icon:He(()=>[ke(s,{component:Re(N6)},null,8,["component"])]),_:1},8,["href"])):t0("",!0),ke(l,{onClick:Re(t).copyCurrentDict},{icon:He(()=>[ke(s,{component:Re(P6)},null,8,["component"])]),_:1},8,["onClick"])]}),_:1})]),_:1})]}),_:1})]),_:1})):(rn(),_n(d,{key:0,vertical:""},{default:He(()=>[(rn(!0),Bt(Je,null,Fi(Re(o),(A,v)=>(rn(),_n(d,{class:"text-center",vertical:""},{default:He(()=>[ke(Re(rr),{style:Pa({color:Re(Us)[v]}),class:"font-bold text-2xl",type:"info"},{default:He(()=>[Gn(Er(v),1)]),_:2},1032,["style"]),Re(o6)?(rn(),_n(m,{key:1,cols:3,"x-gap":10,"y-gap":10,class:"text-center"},{default:He(()=>[(rn(!0),Bt(Je,null,Fi(A,w=>(rn(),_n(y,null,{default:He(()=>[ke(l,{color:Re(Us)[v],class:"w-full",onClick:H=>Re(t).setCurrent(w)},{default:He(()=>[ke(Re(Ta),null,{trigger:He(()=>[ke(h,null,{default:He(()=>[(rn(),_n(Cs(r(w.title))))]),_:2},1024)]),default:He(()=>[Gn(" "+Er(w.title),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:2},1024))),256))]),_:2},1024)):(rn(),_n(d,{key:0,justify:"center"},{default:He(()=>[(rn(!0),Bt(Je,null,Fi(A,w=>(rn(),_n(l,{color:Re(Us)[v],size:"small",onClick:H=>Re(t).setCurrent(w)},{default:He(()=>[(rn(),_n(Cs(r(w.title))))]),_:2},1032,["color","onClick"]))),256))]),_:2},1024))]),_:2},1024))),256))]),_:1}))]),_:1})]),_:1}),ke(I,{class:"py-2",position:"absolute"},{default:He(()=>[ke(d,{size:0,justify:"center"},{default:He(()=>[ke(Re(na),null,{default:He(()=>[ke(Re(rr),null,{default:He(()=>[Gn("制作: ")]),_:1}),ke(l,{href:"https://zhazha120.cn",tag:"a",text:"",type:"primary"},{default:He(()=>[Gn("渣渣120")]),_:1})]),_:1}),ke(b,{vertical:""}),ke(l,{href:"https://github.com/26F-Studio/techmino-online-dict",tag:"a",text:"",type:"primary"},{default:He(()=>[Gn(" Github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])}}}),V6=(e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t},K6=V6(G6,[["__scopeId","data-v-7d384a60"]]),qs=document.createElement("div"),Uu=oh({render:()=>x(K6)}),qu=k5(),Zu=(e,n)=>{const t=e.storage||sessionStorage,o=e.key||n.$id;if(e.paths){const r=e.paths.reduce((i,a)=>(i[a]=n.$state[a],i),{});t.setItem(o,JSON.stringify(r))}else t.setItem(o,JSON.stringify(n.$state))};var U6=({options:e,store:n})=>{var t,o,r,i;if((t=e.persist)!=null&&t.enabled){const a=[{key:n.$id,storage:sessionStorage}],s=(r=(o=e.persist)==null?void 0:o.strategies)!=null&&r.length?(i=e.persist)==null?void 0:i.strategies:a;s.forEach(l=>{const c=l.storage||sessionStorage,d=l.key||n.$id,u=c.getItem(d);u&&(n.$patch(JSON.parse(u)),Zu(l,n))}),n.$subscribe(()=>{s.forEach(l=>{Zu(l,n)})})}};window.addEventListener("load",()=>{qs.id="app",qu.use(U6),Uu.use(qu),Uu.mount(qs),document.body.appendChild(qs)})});export default q6();
