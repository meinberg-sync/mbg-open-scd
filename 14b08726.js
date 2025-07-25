function e(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function t(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}function o(e,t,o,i){if("a"===o&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?i:"a"===o?i.call(e):i?i.value:t.get(e)}"function"==typeof SuppressedError&&SuppressedError,function(){function e(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,o){return e==Array.prototype||e==Object.prototype||(e[t]=o.value),e};var o=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var t=0;t<e.length;++t){var o=e[t];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}(this);function i(e,i){if(i)e:{var r=o;e=e.split(".");for(var a=0;a<e.length-1;a++){var s=e[a];if(!(s in r))break e;r=r[s]}(i=i(a=r[e=e[e.length-1]]))!=a&&null!=i&&t(r,e,{configurable:!0,writable:!0,value:i})}}function r(e){return(e={next:e})[Symbol.iterator]=function(){return this},e}function a(t){var o="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return o?o.call(t):{next:e(t)}}function s(e){if(!(e instanceof Array)){e=a(e);for(var t,o=[];!(t=e.next()).done;)o.push(t.value);e=o}return e}i("Symbol",(function(e){function o(e,o){this.l=e,t(this,"description",{configurable:!0,writable:!0,value:o})}if(e)return e;o.prototype.toString=function(){return this.l};var i=0;return function e(t){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new o("jscomp_symbol_"+(t||"")+"_"+i++,t)}})),i("Symbol.iterator",(function(i){if(i)return i;i=Symbol("Symbol.iterator");for(var a="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),s=0;s<a.length;s++){var n=o[a[s]];"function"==typeof n&&"function"!=typeof n.prototype[i]&&t(n.prototype,i,{configurable:!0,writable:!0,value:function(){return r(e(this))}})}return i}));var n,l="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t},d=function(){if("undefined"!=typeof Reflect&&Reflect.construct){if(function(){function e(){}return Reflect.construct(e,[],(function(){})),new e instanceof e}())return Reflect.construct;var e=Reflect.construct;return function(t,o,i){return t=e(t,o),i&&Reflect.setPrototypeOf(t,i.prototype),t}}return function(e,t,o){return void 0===o&&(o=e),o=l(o.prototype||Object.prototype),Function.prototype.apply.call(e,o,t)||o}}();if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var c;e:{var h={};try{h.__proto__={a:!0},c=h.a;break e}catch(e){}c=!1}n=c?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var p,u=n,f=window;if(void 0===(null==(p=f.CustomElementRegistryPolyfill)?void 0:p.formAssociated)){var v={};f.CustomElementRegistryPolyfill=(v.formAssociated=new Set,v)}var m,g,b=window.HTMLElement,y=window.customElements.define,x=window.customElements.get,_=window.customElements,w=new WeakMap,C=new WeakMap,$=new WeakMap,E=new WeakMap;function A(){var e;this.promise=new Promise((function(t){e=t})),this.resolve=e}function k(){this.h=new Map,this.m=new Map,this.j=new Map,this.i=new Map}function I(e,t,o,i){var r=e.i.get(o);r||e.i.set(o,r=new Set),i?r.add(t):r.delete(t)}function S(e){var t;null!=(t=g)&&t.has(e)&&T(e,w.get(e))}function T(e,t){var o;null==(o=g)||o.delete(e),t.attributeChangedCallback&&t.observedAttributes.forEach((function(o){e.hasAttribute(o)&&t.attributeChangedCallback.call(e,o,null,e.getAttribute(o))}))}function O(e){var t=Object.getPrototypeOf(e);if(t!==window.HTMLElement)return t===b?Object.setPrototypeOf(e,window.HTMLElement):O(t)}function R(e,t,o){o=void 0!==o&&o,Object.setPrototypeOf(e,t.g.prototype),w.set(e,t),m=e;try{new t.g}catch(e){O(t.g),new t.g}t.attributeChangedCallback&&(void 0===g||e.hasAttributes()?T(e,t):g.add(e)),o&&t.connectedCallback&&e.isConnected&&t.connectedCallback.call(e)}k.prototype.define=function(e,t){if(e=e.toLowerCase(),void 0!==this.h.get(e))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': the name \""+e+'" has already been used with this registry');if(void 0!==this.m.get(t))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");var i=t.prototype.attributeChangedCallback,r=new Set(t.observedAttributes||[]);!function(e,t,o){if(0!==t.size&&void 0!==o){var i=e.prototype.setAttribute;i&&(e.prototype.setAttribute=function(e,r){if(S(this),e=e.toLowerCase(),t.has(e)){var a=this.getAttribute(e);i.call(this,e,r),o.call(this,e,a,r)}else i.call(this,e,r)});var r=e.prototype.removeAttribute;r&&(e.prototype.removeAttribute=function(e){if(S(this),e=e.toLowerCase(),t.has(e)){var i=this.getAttribute(e);r.call(this,e),o.call(this,e,i,null)}else r.call(this,e)});var a=e.prototype.toggleAttribute;a&&(e.prototype.toggleAttribute=function(e,i){if(S(this),e=e.toLowerCase(),t.has(e)){var r=this.getAttribute(e);a.call(this,e,i),r!==(i=this.getAttribute(e))&&o.call(this,e,r,i)}else a.call(this,e,i)})}}(t,r,i);var s,n,l=x.call(_,e),d=null!=(n=null==(s=l)?void 0:s.s)?n:t.formAssociated||f.CustomElementRegistryPolyfill.formAssociated.has(e);if(d&&f.CustomElementRegistryPolyfill.formAssociated.add(e),d!=t.formAssociated)try{t.formAssociated=d}catch(e){}if(i={tagName:e,g:t,connectedCallback:t.prototype.connectedCallback,disconnectedCallback:t.prototype.disconnectedCallback,adoptedCallback:t.prototype.adoptedCallback,attributeChangedCallback:i,formAssociated:d,formAssociatedCallback:t.prototype.formAssociatedCallback,formDisabledCallback:t.prototype.formDisabledCallback,formResetCallback:t.prototype.formResetCallback,formStateRestoreCallback:t.prototype.formStateRestoreCallback,observedAttributes:r},this.h.set(e,i),this.m.set(t,i),l||(l=function(e){function t(){var t=Reflect.construct(b,[],this.constructor);Object.setPrototypeOf(t,HTMLElement.prototype);e:{var o=t.getRootNode();if(!(o===document||o instanceof ShadowRoot)){if((o=P[P.length-1])instanceof CustomElementRegistry){var i=o;break e}(o=o.getRootNode())===document||o instanceof ShadowRoot||(o=(null==(i=E.get(o))?void 0:i.getRootNode())||document)}i=o.registry}return(o=(i=i||window.customElements).h.get(e))?R(t,o):C.set(t,i),t}return o.Object.defineProperty(t,"formAssociated",{configurable:!0,enumerable:!0,get:function(){return f.CustomElementRegistryPolyfill.formAssociated.has(e)}}),t.prototype.connectedCallback=function(t){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];S(this),(i=w.get(this))?i.connectedCallback&&i.connectedCallback.apply(this,o):I(C.get(this),this,e,!0)},t.prototype.disconnectedCallback=function(t){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];(i=w.get(this))?i.disconnectedCallback&&i.disconnectedCallback.apply(this,o):I(C.get(this),this,e,!1)},t.prototype.adoptedCallback=function(e){for(var t=[],o=0;o<arguments.length;++o)t[o]=arguments[o];var i,r;null==(i=w.get(this))||null==(r=i.adoptedCallback)||r.apply(this,t)},t.prototype.formAssociatedCallback=function(e){for(var t=[],o=0;o<arguments.length;++o)t[o]=arguments[o];var i;null!=(o=w.get(this))&&o.formAssociated&&(null==o||null==(i=o.formAssociatedCallback)||i.apply(this,t))},t.prototype.formDisabledCallback=function(e){for(var t=[],o=0;o<arguments.length;++o)t[o]=arguments[o];var i;null!=(o=w.get(this))&&o.formAssociated&&(null==o||null==(i=o.formDisabledCallback)||i.apply(this,t))},t.prototype.formResetCallback=function(e){for(var t=[],o=0;o<arguments.length;++o)t[o]=arguments[o];var i;null!=(o=w.get(this))&&o.formAssociated&&(null==o||null==(i=o.formResetCallback)||i.apply(this,t))},t.prototype.formStateRestoreCallback=function(e){for(var t=[],o=0;o<arguments.length;++o)t[o]=arguments[o];var i;null!=(o=w.get(this))&&o.formAssociated&&(null==o||null==(i=o.formStateRestoreCallback)||i.apply(this,t))},t}(e),y.call(_,e,l)),this===window.customElements&&($.set(t,i),i.o=l),l=this.i.get(e))for(this.i.delete(e),r=(l=a(l)).next();!r.done;r=l.next())r=r.value,C.delete(r),R(r,i,!0);return void 0!==(l=this.j.get(e))&&(l.resolve(t),this.j.delete(e)),t},k.prototype.upgrade=function(e){for(var t=[],o=0;o<arguments.length;++o)t[o]=arguments[o];P.push(this),_.upgrade.apply(_,s(t)),P.pop()},k.prototype.get=function(e){var t;return null==(t=this.h.get(e))?void 0:t.g},k.prototype.whenDefined=function(e){var t=this.h.get(e);return void 0!==t?Promise.resolve(t.g):(void 0===(t=this.j.get(e))&&(t=new A,this.j.set(e,t)),t.promise)},window.HTMLElement=function(){var e=m;if(e)return m=void 0,e;var t=$.get(this.constructor);if(!t)throw new TypeError("Illegal constructor (custom element class must be registered with global customElements registry to be newable)");return e=Reflect.construct(b,[],t.o),Object.setPrototypeOf(e,this.constructor.prototype),w.set(e,t),e},window.HTMLElement.prototype=b.prototype,window.CustomElementRegistry=k,"loading"===document.readyState&&(g=new Set,document.addEventListener("readystatechange",(function(){g.forEach((function(e){return T(e,w.get(e))}))}),{once:!0}));var z=Element.prototype.attachShadow;Element.prototype.attachShadow=function(e,t){for(var o=[],i=1;i<arguments.length;++i)o[i-1]=arguments[i];var r=Object.assign({},e);return i=e.customElements,i=void 0===e.registry?i:e.registry,delete r.customElements,delete r.registry,o=z.call.apply(z,[this,r].concat(s(o))),void 0!==i&&(o.customElements=o.registry=i),o};var P=[document];function L(e,t,o){var i=(o?Object.getPrototypeOf(o):e.prototype)[t];e.prototype[t]=function(e){for(var t=[],r=0;r<arguments.length;++r)t[r]=arguments[r];return P.push(this),void 0!==(t=i.apply(o||this,t))&&E.set(t,this),P.pop(),t}}function N(e){var t=Object.getOwnPropertyDescriptor(e.prototype,"innerHTML");Object.defineProperty(e.prototype,"innerHTML",Object.assign({},t,{set:function(e){P.push(this),t.set.call(this,e),P.pop()}}))}if(L(ShadowRoot,"createElement",document),L(ShadowRoot,"createElementNS",document),L(ShadowRoot,"importNode",document),L(Element,"insertAdjacentHTML"),N(Element),N(ShadowRoot),Object.defineProperty(window,"customElements",{value:new CustomElementRegistry,configurable:!0,writable:!0}),window.ElementInternals&&window.ElementInternals.prototype.setFormValue){var D=new WeakMap,M=HTMLElement.prototype.attachInternals;HTMLElement.prototype.attachInternals=function(e){for(var t=[],o=0;o<arguments.length;++o)t[o]=arguments[o];return t=M.call.apply(M,[this].concat(s(t))),D.set(t,this),t},["setFormValue","setValidity","checkValidity","reportValidity"].forEach((function(e){var t=window.ElementInternals.prototype,o=t[e];t[e]=function(e){for(var t=[],i=0;i<arguments.length;++i)t[i]=arguments[i];if(i=D.get(this),!0===w.get(i).formAssociated)return null==o?void 0:o.call.apply(o,[this].concat(s(t)));throw new DOMException("Failed to execute "+o+" on 'ElementInternals': The target element is not a form-associated custom element.")}}));var U=function(e){var t=d(Array,[].concat(s(e)),this.constructor);return t.l=e,t},B=U,F=Array;if(B.prototype=l(F.prototype),B.prototype.constructor=B,u)u(B,F);else for(var j in F)if("prototype"!=j)if(Object.defineProperties){var q=Object.getOwnPropertyDescriptor(F,j);q&&Object.defineProperty(B,j,q)}else B[j]=F[j];B.u=F.prototype,o.Object.defineProperty(U.prototype,"value",{configurable:!0,enumerable:!0,get:function(){var e;return(null==(e=this.l.find((function(e){return!0===e.checked})))?void 0:e.value)||""}});var V=function(e){var t=this,o=new Map;e.forEach((function(e,i){var r=e.getAttribute("name"),a=o.get(r)||[];t[+i]=e,a.push(e),o.set(r,a)})),this.length=e.length,o.forEach((function(e,o){e&&"length"!==o&&"item"!==o&&"namedItem"!==o&&(t[o]=1===e.length?e[0]:new U(e))}))};V.prototype.item=function(e){var t;return null!=(t=this[e])?t:null},V.prototype[Symbol.iterator]=function(){throw Error("Method not implemented.")},V.prototype.namedItem=function(e){var t;return null!=(t=this[e])?t:null};var H=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"elements");Object.defineProperty(HTMLFormElement.prototype,"elements",{get:function(){for(var e=H.get.call(this),t=[],o=(e=a(e)).next();!o.done;o=e.next()){o=o.value;var i=w.get(o);i&&!0!==i.formAssociated||t.push(o)}return new V(t)}})}}.call("object"==typeof globalThis?globalThis:window);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i="lit-localize-status",r=(e,t,o)=>{let i=e[0];for(let r=1;r<e.length;r++)i+=t[o?o[r-1]:r-1],i+=e[r];return i},a=e=>{return"string"!=typeof(t=e)&&"strTag"in t?r(e.strings,e.values):e;var t};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=a,n=!1;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class l{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(i,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(i,this.__litLocalizeEventHandler)}}const d=e=>e.addController(new l(e));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class c{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const h=[];for(let e=0;e<256;e++)h[e]=(e>>4&15).toString(16)+(15&e).toString(16);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p="",u="h",f="s";function v(e,t){return(t?u:f)+function(e){let t=0,o=8997,i=0,r=33826,a=0,s=40164,n=0,l=52210;for(let d=0;d<e.length;d++)o^=e.charCodeAt(d),t=435*o,i=435*r,a=435*s,n=435*l,a+=o<<8,n+=r<<8,i+=t>>>16,o=65535&t,a+=i>>>16,r=65535&i,l=n+(a>>>16)&65535,s=65535&a;return h[l>>8]+h[255&l]+h[s>>8]+h[255&s]+h[r>>8]+h[255&r]+h[o>>8]+h[255&o]}("string"==typeof e?e:e.join(p))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=new WeakMap,g=new Map;function b(e,t,o){if(e){const i=o?.id??function(e){const t="string"==typeof e?e:e.strings;let o=g.get(t);void 0===o&&(o=v(t,"string"!=typeof e&&!("strTag"in e)),g.set(t,o));return o}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(t),a=e[i];if(a){if("string"==typeof a)return a;if("strTag"in a)return r(a.strings,t.values,a.values);{let e=m.get(a);return void 0===e&&(e=a.values,m.set(a,e)),{...a,values:e.map((e=>t.values[e]))}}}}return a(t)}function y(e){window.dispatchEvent(new CustomEvent(i,{detail:e}))}let x,_,w,C,$,E="",A=new c;A.resolve();let k=0;const I=()=>E,S=e=>{if(e===(x??E))return A.promise;if(!w||!C)throw new Error("Internal error");if(!w.has(e))throw new Error("Invalid locale code");k++;const t=k;x=e,A.settled&&(A=new c),y({status:"loading",loadingLocale:e});return(e===_?Promise.resolve({templates:void 0}):C(e)).then((o=>{k===t&&(E=e,x=void 0,$=o.templates,y({status:"ready",readyLocale:e}),A.resolve())}),(o=>{k===t&&(y({status:"error",errorLocale:e,errorMessage:o.toString()}),A.reject(o))})),A.promise},T=globalThis,O=T.ShadowRoot&&(void 0===T.ShadyCSS||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),z=new WeakMap;let P=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(O&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=z.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&z.set(t,e))}return e}toString(){return this.cssText}};const L=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new P(o,e,R)},N=(e,t)=>{if(O)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=T.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}},D=O?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new P("string"==typeof e?e:e+"",void 0,R))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:M,defineProperty:U,getOwnPropertyDescriptor:B,getOwnPropertyNames:F,getOwnPropertySymbols:j,getPrototypeOf:q}=Object,V=globalThis,H=V.trustedTypes,W=H?H.emptyScript:"",K=V.reactiveElementPolyfillSupport,G=(e,t)=>e,Y={toAttribute(e,t){switch(t){case Boolean:e=e?W:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},X=(e,t)=>!M(e,t),J={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;let Z=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=J){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&U(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:r}=B(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const a=i?.call(this);r?.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??J}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const e=q(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const e=this.properties,t=[...F(e),...j(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(D(e))}else void 0!==e&&t.push(D(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return N(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:Y).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Y;this._$Em=i;const a=r.fromAttribute(t,e.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){const i=this.constructor,r=this[e];if(o??=i.getPropertyOptions(e),!((o.hasChanged??X)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:r},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[G("elementProperties")]=new Map,Z[G("finalized")]=new Map,K?.({ReactiveElement:Z}),(V.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=globalThis,ee=Q.trustedTypes,te=ee?ee.createPolicy("lit-html",{createHTML:e=>e}):void 0,oe="$lit$",ie=`lit$${Math.random().toFixed(9).slice(2)}$`,re="?"+ie,ae=`<${re}>`,se=document,ne=()=>se.createComment(""),le=e=>null===e||"object"!=typeof e&&"function"!=typeof e,de=Array.isArray,ce="[ \t\n\f\r]",he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,ue=/>/g,fe=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,me=/"/g,ge=/^(?:script|style|textarea|title)$/i,be=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),ye=Symbol.for("lit-noChange"),xe=Symbol.for("lit-nothing"),_e=new WeakMap,we=se.createTreeWalker(se,129);function Ce(e,t){if(!de(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==te?te.createHTML(t):t}const $e=(e,t)=>{const o=e.length-1,i=[];let r,a=2===t?"<svg>":3===t?"<math>":"",s=he;for(let t=0;t<o;t++){const o=e[t];let n,l,d=-1,c=0;for(;c<o.length&&(s.lastIndex=c,l=s.exec(o),null!==l);)c=s.lastIndex,s===he?"!--"===l[1]?s=pe:void 0!==l[1]?s=ue:void 0!==l[2]?(ge.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=fe):void 0!==l[3]&&(s=fe):s===fe?">"===l[0]?(s=r??he,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?fe:'"'===l[3]?me:ve):s===me||s===ve?s=fe:s===pe||s===ue?s=he:(s=fe,r=void 0);const h=s===fe&&e[t+1].startsWith("/>")?" ":"";a+=s===he?o+ae:d>=0?(i.push(n),o.slice(0,d)+oe+o.slice(d)+ie+h):o+ie+(-2===d?t:h)}return[Ce(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Ee{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,a=0;const s=e.length-1,n=this.parts,[l,d]=$e(e,t);if(this.el=Ee.createElement(l,o),we.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=we.nextNode())&&n.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(oe)){const t=d[a++],o=i.getAttribute(e).split(ie),s=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:s[2],strings:o,ctor:"."===s[1]?Te:"?"===s[1]?Oe:"@"===s[1]?Re:Se}),i.removeAttribute(e)}else e.startsWith(ie)&&(n.push({type:6,index:r}),i.removeAttribute(e));if(ge.test(i.tagName)){const e=i.textContent.split(ie),t=e.length-1;if(t>0){i.textContent=ee?ee.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],ne()),we.nextNode(),n.push({type:2,index:++r});i.append(e[t],ne())}}}else if(8===i.nodeType)if(i.data===re)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(ie,e+1));)n.push({type:7,index:r}),e+=ie.length-1}r++}}static createElement(e,t){const o=se.createElement("template");return o.innerHTML=e,o}}function Ae(e,t,o=e,i){if(t===ye)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const a=le(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=Ae(e,r._$AS(e,t.values),r,i)),t}class ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??se).importNode(t,!0);we.currentNode=i;let r=we.nextNode(),a=0,s=0,n=o[0];for(;void 0!==n;){if(a===n.index){let t;2===n.type?t=new Ie(r,r.nextSibling,this,e):1===n.type?t=new n.ctor(r,n.name,n.strings,this,e):6===n.type&&(t=new ze(r,this,e)),this._$AV.push(t),n=o[++s]}a!==n?.index&&(r=we.nextNode(),a++)}return we.currentNode=se,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ae(this,e,t),le(e)?e===xe||null==e||""===e?(this._$AH!==xe&&this._$AR(),this._$AH=xe):e!==this._$AH&&e!==ye&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>de(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==xe&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Ee.createElement(Ce(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ke(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=_e.get(e.strings);return void 0===t&&_e.set(e.strings,t=new Ee(e)),t}k(e){de(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new Ie(this.O(ne()),this.O(ne()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=xe}_$AI(e,t=this,o,i){const r=this.strings;let a=!1;if(void 0===r)e=Ae(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==ye,a&&(this._$AH=e);else{const i=e;let s,n;for(e=r[0],s=0;s<r.length-1;s++)n=Ae(this,i[o+s],t,s),n===ye&&(n=this._$AH[s]),a||=!le(n)||n!==this._$AH[s],n===xe?e=xe:e!==xe&&(e+=(n??"")+r[s+1]),this._$AH[s]=n}a&&!i&&this.j(e)}j(e){e===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===xe?void 0:e}}class Oe extends Se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==xe)}}class Re extends Se{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=Ae(this,e,t,0)??xe)===ye)return;const o=this._$AH,i=e===xe&&o!==xe||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==xe&&(o===xe||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ae(this,e)}}const Pe=Q.litHtmlPolyfillSupport;Pe?.(Ee,Ie),(Q.litHtmlVersions??=[]).push("3.3.1");const Le=(e,t,o)=>{const i=o?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=o?.renderBefore??null;i._$litPart$=r=new Ie(t.insertBefore(ne(),e),e,void 0,o??{})}return r._$AI(e),r},Ne=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let De=class extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ye}};De._$litElement$=!0,De.finalized=!0,Ne.litElementHydrateSupport?.({LitElement:De});const Me=Ne.litElementPolyfillSupport;Me?.({LitElement:De}),(Ne.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ue=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Be={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:X},Fe=(e=Be,t,o)=>{const{kind:i,metadata:r}=o;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),a.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function je(e){return(t,o)=>"object"==typeof o?Fe(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qe(e){return je({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function He(e,t){return(o,i,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ve(o,i,{get(){let o=e.call(this);return void 0===o&&(o=a(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return Ve(o,i,{get(){return a(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let We;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ke(e){return(t,o)=>{const{slot:i,selector:r}=e??{},a="slot"+(i?`[name=${i}]`:":not([name])");return Ve(t,o,{get(){const t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ge(e){return(t,o)=>{const{slot:i}=e??{},r="slot"+(i?`[name=${i}]`:":not([name])");return Ve(t,o,{get(){const t=this.renderRoot?.querySelector(r);return t?.assignedNodes(e)??[]}})}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=Symbol.for(""),Xe=e=>{if(e?.r===Ye)return e?._$litStatic$},Je=(e,...t)=>({_$litStatic$:t.reduce(((t,o,i)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[i+1]),e[0]),r:Ye}),Ze=new Map,Qe=(e=>(t,...o)=>{const i=o.length;let r,a;const s=[],n=[];let l,d=0,c=!1;for(;d<i;){for(l=t[d];d<i&&void 0!==(a=o[d],r=Xe(a));)l+=r+t[++d],c=!0;d!==i&&n.push(a),s.push(l),d++}if(d===i&&s.push(t[i]),c){const e=s.join("$$lit$$");void 0===(t=Ze.get(e))&&(s.raw=s,Ze.set(e,t=s)),o=n}return e(t,...o)})(be);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */class et extends De{render(){return be`
      <header>
        <div>
          <!-- <md-elevation part="elevation"></md-elevation> -->
          <div class="main-header">
            <slot name="actionStart"></slot>
            <slot name="title"></slot>
            <span class="spacer"></span>
            <slot name="actionEnd"></slot>
          </div>
          <div class="sub-header">
            <slot></slot>
          </div>
        </div>
      </header>
    `}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */e(et,"styles",L`
    :host {
      --md-elevation-level: var(--oscd-app-bar-elevation, 3);
      --md-elevation-shadow-color: var(
        --oscd-app-bar-shadow-color,
        var(--md-sys-color-shadow, #000)
      );
      --app-bar-color: var(
        --oscd-app-bar-color,
        var(--md-sys-color-on-primary, #1d1b20)
      );
      --app-bar-background-color: var(
        --oscd-app-bar-background-color,
        var(--md-sys-color-primary, #fff)
      );
      --app-bar-title-font-family: var(
        --oscd-app-bar-title-font-family,
        var(
          --md-sys-typescale-body-large-font,
          var(--md-ref-typeface-plain, Roboto)
        )
      );
      --app-bar-title-font-size: var(
        --oscd-app-bar-title-font-size,
        var(--md-sys-typescale-body-large-size, 1.25rem)
      );
      --app-bar-title-line-height: var(
        --oscd-app-bar-title-line-height,
        var(--md-sys-typescale-body-large-line-height, 2rem)
      );
      --app-bar-title-font-weight: var(
        --oscd-app-bar-title-font-weight,
        var(
          --md-sys-typescale-body-large-weight,
          var(--md-ref-typeface-weight-regular, 500)
        )
      );
      --md-icon-button-icon-color: var(--app-bar-color);
    }

    header {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      position: sticky;
      top: 0;
      z-index: 4;
      color: var(--app-bar-color);
      background-color: var(--app-bar-background-color);
    }

    .main-header {
      padding: 0 12px;
      display: flex;
      flex-grow: 1;
      align-items: center;
      height: 64px;
    }

    @media (max-width: 599px) {
      .main-header {
        height: 56px;
      }
    }

    ::slotted([slot="title"]) {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 16px;
      font-family: var(--app-bar-title-font-family);
      font-size: var(--app-bar-title-font-size);
      font-weight: var(--app-bar-title-font-weight);
      line-height: var(--app-bar-title-line-height);
    }

    .sub-header {
      display: flex;
      width: 100%;
    }

    .spacer {
      flex: 1;
    }
  `),window.customElements.define("oscd-app-bar",et);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class tt extends De{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}t([je({type:Boolean,reflect:!0})],tt.prototype,"inset",void 0),t([je({type:Boolean,reflect:!0,attribute:"inset-start"})],tt.prototype,"insetStart",void 0),t([je({type:Boolean,reflect:!0,attribute:"inset-end"})],tt.prototype,"insetEnd",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ot=L`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let it=class extends tt{};it.styles=[ot],it=t([Ue("md-divider")],it);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=1,at=3,st=4,nt=e=>(...t)=>({_$litDirective$:e,values:t});let lt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=nt(class extends lt{constructor(e){if(super(e),e.type!==rt||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ye}}),ct=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],ht=ct.map(ut);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pt(e){return ht.includes(e)}function ut(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ft=Symbol("privateIgnoreAttributeChangesFor");function vt(e){var t;class o extends e{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(e,t,o){if(!pt(e))return void super.attributeChangedCallback(e,t,o);if(this[ft].has(e))return;this[ft].add(e),this.removeAttribute(e),this[ft].delete(e);const i=gt(e);null===o?delete this.dataset[i]:this.dataset[i]=o,this.requestUpdate(gt(e),t)}getAttribute(e){return pt(e)?super.getAttribute(mt(e)):super.getAttribute(e)}removeAttribute(e){super.removeAttribute(e),pt(e)&&(super.removeAttribute(mt(e)),this.requestUpdate())}}return t=ft,function(e){for(const t of ct){const o=ut(t),i=mt(o),r=gt(o);e.createProperty(t,{attribute:o,noAccessor:!0}),e.createProperty(Symbol(i),{attribute:i,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[r]??null},set(e){const o=this.dataset[r]??null;e!==o&&(null===e?delete this.dataset[r]:this.dataset[r]=e,this.requestUpdate(t,o))}})}}(o),o}function mt(e){return`data-${e}`}function gt(e){return e.replace(/-\w/,(e=>e[1].toUpperCase()))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function bt(e,t){!t.bubbles||e.shadowRoot&&!t.composed||t.stopPropagation();const o=Reflect.construct(t.constructor,[t.type,t]),i=e.dispatchEvent(o);return i||t.preventDefault(),i}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const yt="cubic-bezier(0.2, 0, 0, 1)",xt="cubic-bezier(.3,0,0,1)",_t="cubic-bezier(.3,0,.8,.15)";
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const wt={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:xt}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:xt,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},Ct={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:_t}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:_t,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]},$t=vt(De);class Et extends $t{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>wt,this.getCloseAnimation=()=>Ct,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const t=this.dialog;if(!t.open||this.isOpening)return void(this.open=!1);const o=this.returnValue;this.returnValue=e;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=o}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},o=this.open&&!this.noFocusTrap,i=be`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:r}=this;return be`
      <div class="scrim"></div>
      <dialog
        class=${dt(t)}
        aria-label=${r||xe}
        aria-labelledby=${this.hasHeadline?"headline":xe}
        role=${"alert"===this.type?"alertdialog":xe}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||xe}>
        ${o?i:xe}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||xe}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${o?i:xe}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver((e=>{for(const t of e)this.handleAnchorIntersection(t)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const t=e.target,{submitter:o}=e;"dialog"===t.getAttribute("method")&&o&&this.close(o.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const t=!bt(this,e);e.preventDefault(),t||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){"Escape"===e.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(e){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:t,scrim:o,container:i,headline:r,content:a,actions:s}=this;if(!(t&&o&&i&&r&&a&&s))return;const{container:n,dialog:l,scrim:d,headline:c,content:h,actions:p}=e,u=[[t,l??[]],[o,d??[]],[i,n??[]],[r,c??[]],[a,h??[]],[s,p??[]]],f=[];for(const[e,t]of u)for(const o of t){const t=e.animate(...o);this.cancelAnimations.signal.addEventListener("abort",(()=>{t.cancel()})),f.push(t)}await Promise.all(f.map((e=>e.finished.catch((()=>{})))))}handleHeadlineChange(e){const t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){const t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){const t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){const{target:t,isIntersecting:o}=e;t===this.topAnchor&&(this.isAtScrollTop=o),t===this.bottomAnchor&&(this.isAtScrollBottom=o)}getIsConnectedPromise(){return new Promise((e=>{this.isConnectedPromiseResolve=e}))}handleFocusTrapFocus(e){const[t,o]=this.getFirstAndLastFocusableChildren();if(!t||!o)return void this.dialog?.focus();const i=e.target===this.firstFocusTrap,r=!i,a=e.relatedTarget===t,s=e.relatedTarget===o,n=!a&&!s;if(r&&s||i&&n)return void t.focus();(i&&a||r&&n)&&o.focus()}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let e=null,t=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const o=this.treewalker.currentNode;At(o)&&(e||(e=o),t=o)}return[e,t]}}function At(e){const t=":not(:disabled,[disabled])";if(e.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+t+':not([tabindex^="-"])'))return!0;return!!e.localName.includes("-")&&(!!e.matches(t)&&(e.shadowRoot?.delegatesFocus??!1))}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */t([je({type:Boolean})],Et.prototype,"open",null),t([je({type:Boolean})],Et.prototype,"quick",void 0),t([je({attribute:!1})],Et.prototype,"returnValue",void 0),t([je()],Et.prototype,"type",void 0),t([je({type:Boolean,attribute:"no-focus-trap"})],Et.prototype,"noFocusTrap",void 0),t([He("dialog")],Et.prototype,"dialog",void 0),t([He(".scrim")],Et.prototype,"scrim",void 0),t([He(".container")],Et.prototype,"container",void 0),t([He(".headline")],Et.prototype,"headline",void 0),t([He(".content")],Et.prototype,"content",void 0),t([He(".actions")],Et.prototype,"actions",void 0),t([qe()],Et.prototype,"isAtScrollTop",void 0),t([qe()],Et.prototype,"isAtScrollBottom",void 0),t([He(".scroller")],Et.prototype,"scroller",void 0),t([He(".top.anchor")],Et.prototype,"topAnchor",void 0),t([He(".bottom.anchor")],Et.prototype,"bottomAnchor",void 0),t([He(".focus-trap")],Et.prototype,"firstFocusTrap",void 0),t([qe()],Et.prototype,"hasHeadline",void 0),t([qe()],Et.prototype,"hasActions",void 0),t([qe()],Et.prototype,"hasIcon",void 0);const kt=L`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */,It=L`
  .scrim {
    z-index: 6;
  }
`;class St extends Et{}e(St,"styles",[kt,It]),customElements.define("oscd-dialog",St);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Tt extends tt{}e(Tt,"styles",[ot]),customElements.define("oscd-divider",Tt);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ot=L`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled,[aria-disabled=true]){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true])::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,Rt=Symbol("attachableController");let zt;zt=new MutationObserver((e=>{for(const t of e)t.target[Rt]?.hostConnected()}));class Pt{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){null===e?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[Rt]=this,zt?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Lt=["focusin","focusout","pointerdown"];class Nt extends De{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Pt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[Dt]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}e[Dt]=!0}}onControlChange(e,t){for(const o of Lt)e?.removeEventListener(o,this),t?.addEventListener(o,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}t([je({type:Boolean,reflect:!0})],Nt.prototype,"visible",void 0),t([je({type:Boolean,reflect:!0})],Nt.prototype,"inward",void 0);const Dt=Symbol("handledByFocusRing"),Mt=L`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ut=class extends Nt{};Ut.styles=[Mt],Ut=t([Ue("md-focus-ring")],Ut);var Bt;!function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Bt||(Bt={}));const Ft=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],jt=window.matchMedia("(forced-colors: active)");class qt extends De{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Bt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Pt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return be`<div class="surface ${dt(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Bt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state!==Bt.HOLDING)return this.state===Bt.TOUCH_DELAY?(this.state=Bt.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Bt.WAITING_FOR_CLICK}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e))return this.state=Bt.WAITING_FOR_CLICK,void this.startPressAnimation(e);this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Bt.TOUCH_DELAY,await new Promise((e=>{setTimeout(e,150)})),this.state===Bt.TOUCH_DELAY&&(this.state=Bt.HOLDING,this.startPressAnimation(e)))}}handleClick(){this.disabled||(this.state!==Bt.WAITING_FOR_CLICK?this.state===Bt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),o=Math.max(e,t),i=Math.max(.35*o,75),r=Math.floor(.2*o),a=Math.sqrt(t**2+e**2)+10;this.initialSize=r,this.rippleScale=""+(a+i)/r,this.rippleSize=`${r}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:o}=window,{left:i,top:r}=this.getBoundingClientRect(),a=t+i,s=o+r,{pageX:n,pageY:l}=e;return{x:n-a,y:l-s}}getTranslationCoordinates(e){const{height:t,width:o}=this.getBoundingClientRect(),i={x:(o-this.initialSize)/2,y:(t-this.initialSize)/2};let r;return r=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:o/2,y:t/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},{startPoint:r,endPoint:i}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:o}=this.getTranslationCoordinates(e),i=`${t.x}px, ${t.y}px`,r=`${o.x}px, ${o.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${r}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:yt,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Bt.INACTIVE;const e=this.growAnimation;let t=1/0;"number"==typeof e?.currentTime?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to("ms").value),t>=225?this.pressed=!1:(await new Promise((e=>{setTimeout(e,225-t)})),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if("pointerenter"===e.type||"pointerleave"===e.type)return!this.isTouch(e);const t=1===e.buttons;return this.isTouch(e)||t}inBounds({x:e,y:t}){const{top:o,left:i,bottom:r,right:a}=this.getBoundingClientRect();return e>=i&&e<=a&&t>=o&&t<=r}isTouch({pointerType:e}){return"touch"===e}async handleEvent(e){if(!jt?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e)}}onControlChange(e,t){for(const o of Ft)e?.removeEventListener(o,this),t?.addEventListener(o,this)}}t([je({type:Boolean,reflect:!0})],qt.prototype,"disabled",void 0),t([qe()],qt.prototype,"hovered",void 0),t([qe()],qt.prototype,"pressed",void 0),t([He(".surface")],qt.prototype,"mdRoot",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Vt=L`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ht=class extends qt{};Ht.styles=[Vt],Ht=t([Ue("md-ripple")],Ht);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Wt=Symbol("internals"),Kt=Symbol("privateInternals");function Gt(e){return class extends e{get[Wt](){return this[Kt]||(this[Kt]=this.attachInternals()),this[Kt]}}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Yt(e){e.addInitializer((e=>{const t=e;t.addEventListener("click",(async e=>{const{type:o,[Wt]:i}=t,{form:r}=i;r&&"button"!==o&&(await new Promise((e=>{setTimeout(e)})),e.defaultPrevented||("reset"!==o?(r.addEventListener("submit",(e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>t})}),{capture:!0,once:!0}),i.setFormValue(t.value),r.requestSubmit()):r.reset()))}))}))}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Xt(e,t=!0){return t&&"rtl"===getComputedStyle(e).getPropertyValue("direction").trim()}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Jt=vt(Gt(De));class Zt extends Jt{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Wt].form}get labels(){return this[Wt].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Xt(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){const e=this.href?Je`div`:Je`button`,{ariaLabel:t,ariaHasPopup:o,ariaExpanded:i}=this,r=t&&this.ariaLabelSelected,a=this.toggle?this.selected:xe;let s=xe;return this.href||(s=r&&this.selected?this.ariaLabelSelected:t),Qe`<${e}
        class="icon-button ${dt(this.getRenderClasses())}"
        id="button"
        aria-label="${s||xe}"
        aria-haspopup="${!this.href&&o||xe}"
        aria-expanded="${!this.href&&i||xe}"
        aria-pressed="${a}"
        aria-disabled=${!this.href&&this.softDisabled||xe}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?xe:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():xe}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return be`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||xe}"
        target="${this.target||xe}"
        aria-label="${e||xe}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return be`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return be`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return be`<span class="touch"></span>`}renderFocusRing(){return be`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){const e=!this.href&&(this.disabled||this.softDisabled);return be`<md-ripple
      for=${this.href?"link":xe}
      ?disabled="${e}"></md-ripple>`}connectedCallback(){this.flipIcon=Xt(this,this.flipIconInRtl),super.connectedCallback()}handleClick(e){if(!this.href&&this.softDisabled)return e.stopImmediatePropagation(),void e.preventDefault()}async handleClickOnChild(e){await 0,!this.toggle||this.disabled||this.softDisabled||e.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Yt(Zt),Zt.formAssociated=!0,Zt.shadowRootOptions={mode:"open",delegatesFocus:!0},t([je({type:Boolean,reflect:!0})],Zt.prototype,"disabled",void 0),t([je({type:Boolean,attribute:"soft-disabled",reflect:!0})],Zt.prototype,"softDisabled",void 0),t([je({type:Boolean,attribute:"flip-icon-in-rtl"})],Zt.prototype,"flipIconInRtl",void 0),t([je()],Zt.prototype,"href",void 0),t([je()],Zt.prototype,"download",void 0),t([je()],Zt.prototype,"target",void 0),t([je({attribute:"aria-label-selected"})],Zt.prototype,"ariaLabelSelected",void 0),t([je({type:Boolean})],Zt.prototype,"toggle",void 0),t([je({type:Boolean,reflect:!0})],Zt.prototype,"selected",void 0),t([je()],Zt.prototype,"type",void 0),t([je({reflect:!0})],Zt.prototype,"value",void 0),t([qe()],Zt.prototype,"flipIcon",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Qt=L`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class eo extends Zt{getRenderClasses(){return{...super.getRenderClasses(),filled:!0,"toggle-filled":this.toggle}}}e(eo,"styles",[Qt,Ot]),customElements.define("oscd-filled-icon-button",eo);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class to extends De{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,t=this.max??-1;return e<0||t<=0?"":`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&void 0!==e.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){const e=this.renderLabel(!0),t=this.renderLabel(!1),o=this.renderOutline?.(e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return be`
      <div class="field ${dt(i)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${o}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${o?xe:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame((()=>{this.refreshErrorAlert=!1})),this.disableTransitions&&requestAnimationFrame((()=>{this.disableTransitions=!1}))}renderSupportingText(){const{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return xe;const o=be`<span>${e}</span>`,i=t?be`<span class="counter">${t}</span>`:xe,r=this.error&&this.errorText&&!this.refreshErrorAlert;return be`
      <div class="supporting-text" role=${r?"alert":xe}>${o}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)Le(be`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return xe;let t;t=e?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const o={hidden:!t,floating:e,resting:!e},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return be`
      <span class="label ${dt(o)}" aria-hidden=${!t}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??=this.focused,t??=this.populated;(e||t)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:yt}),this.labelAnimation?.addEventListener("finish",(()=>{this.isAnimating=!1})))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];const{x:o,y:i,height:r}=e.getBoundingClientRect(),{x:a,y:s,height:n}=t.getBoundingClientRect(),l=e.scrollWidth,d=t.scrollWidth,c=d/l,h=`translateX(${a-o}px) translateY(${s-i+Math.round((n-r*c)/2)}px) scale(${c})`,p="translateX(0) translateY(0) scale(1)",u=t.clientWidth,f=d>u?u/c+"px":"";return this.focused||this.populated?[{transform:h,width:f},{transform:p,width:f}]:[{transform:p,width:f},{transform:h,width:f}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}t([je({type:Boolean})],to.prototype,"disabled",void 0),t([je({type:Boolean})],to.prototype,"error",void 0),t([je({type:Boolean})],to.prototype,"focused",void 0),t([je()],to.prototype,"label",void 0),t([je({type:Boolean,attribute:"no-asterisk"})],to.prototype,"noAsterisk",void 0),t([je({type:Boolean})],to.prototype,"populated",void 0),t([je({type:Boolean})],to.prototype,"required",void 0),t([je({type:Boolean})],to.prototype,"resizable",void 0),t([je({attribute:"supporting-text"})],to.prototype,"supportingText",void 0),t([je({attribute:"error-text"})],to.prototype,"errorText",void 0),t([je({type:Number})],to.prototype,"count",void 0),t([je({type:Number})],to.prototype,"max",void 0),t([je({type:Boolean,attribute:"has-start"})],to.prototype,"hasStart",void 0),t([je({type:Boolean,attribute:"has-end"})],to.prototype,"hasEnd",void 0),t([Ke({slot:"aria-describedby"})],to.prototype,"slottedAriaDescribedBy",void 0),t([qe()],to.prototype,"isAnimating",void 0),t([qe()],to.prototype,"refreshErrorAlert",void 0),t([qe()],to.prototype,"disableTransitions",void 0),t([He(".label.floating")],to.prototype,"floatingLabelEl",void 0),t([He(".label.resting")],to.prototype,"restingLabelEl",void 0),t([He(".container")],to.prototype,"containerEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class oo extends to{renderBackground(){return be` <div class="background"></div> `}renderStateLayer(){return be` <div class="state-layer"></div> `}renderIndicator(){return be`<div class="active-indicator"></div>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const io=L`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-filled-field-content-space, 16px);--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_with-leading-content-leading-space: var(--md-filled-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-filled-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`,ro=L`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ao=class extends oo{};ao.styles=[ro,io],ao=t([Ue("md-filled-field")],ao);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class so extends De{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return be`<span class="shadow"></span>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const no=L`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let lo=class extends so{};lo.styles=[no],lo=t([Ue("md-elevation")],lo);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const co="important",ho=" !"+co,po=nt(class extends lt{constructor(e){if(super(e),e.type!==rt||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,o)=>{const i=e[o];return null==i?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(ho);e.includes("-")||t?o.setProperty(e,t?i.slice(0,-11):i,t?co:""):o[e]=i}}return ye}});
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function uo(e,t=xo){const o=mo(e,t);return o&&(o.tabIndex=0,o.focus()),o}function fo(e,t=xo){const o=go(e,t);return o&&(o.tabIndex=0,o.focus()),o}function vo(e,t=xo){for(let o=0;o<e.length;o++){const i=e[o];if(0===i.tabIndex&&t(i))return{item:i,index:o}}return null}function mo(e,t=xo){for(const o of e)if(t(o))return o;return null}function go(e,t=xo){for(let o=e.length-1;o>=0;o--){const i=e[o];if(t(i))return i}return null}function bo(e,t,o=xo,i=!0){if(t){const r=function(e,t,o=xo,i=!0){for(let r=1;r<e.length;r++){const a=(r+t)%e.length;if(a<t&&!i)return null;const s=e[a];if(o(s))return s}return e[t]?e[t]:null}(e,t.index,o,i);return r&&(r.tabIndex=0,r.focus()),r}return uo(e,o)}function yo(e,t,o=xo,i=!0){if(t){const r=function(e,t,o=xo,i=!0){for(let r=1;r<e.length;r++){const a=(t-r+e.length)%e.length;if(a>t&&!i)return null;const s=e[a];if(o(s))return s}return e[t]?e[t]:null}(e,t.index,o,i);return r&&(r.tabIndex=0,r.focus()),r}return fo(e,o)}function xo(e){return!e.disabled}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _o={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class wo{constructor(e){this.handleKeydown=e=>{const t=e.key;if(e.defaultPrevented||!this.isNavigableKey(t))return;const o=this.items;if(!o.length)return;const i=vo(o,this.isActivatable);e.preventDefault();const r=this.isRtl();let a=null;switch(t){case _o.ArrowDown:case r?_o.ArrowLeft:_o.ArrowRight:a=bo(o,i,this.isActivatable,this.wrapNavigation());break;case _o.ArrowUp:case r?_o.ArrowRight:_o.ArrowLeft:a=yo(o,i,this.isActivatable,this.wrapNavigation());break;case _o.Home:a=uo(o,this.isActivatable);break;case _o.End:a=fo(o,this.isActivatable)}a&&i&&i.item!==a&&(i.item.tabIndex=-1)},this.onDeactivateItems=()=>{const e=this.items;for(const t of e)this.deactivateItem(t)},this.onRequestActivation=e=>{this.onDeactivateItems();const t=e.target;this.activateItem(t),t.focus()},this.onSlotchange=()=>{const e=this.items;let t=!1;for(const o of e){!(!o.disabled&&o.tabIndex>-1)||t?o.tabIndex=-1:(t=!0,o.tabIndex=0)}if(t)return;const o=mo(e,this.isActivatable);o&&(o.tabIndex=0)};const{isItem:t,getPossibleItems:o,isRtl:i,deactivateItem:r,activateItem:a,isNavigableKey:s,isActivatable:n,wrapNavigation:l}=e;this.isItem=t,this.getPossibleItems=o,this.isRtl=i,this.deactivateItem=r,this.activateItem=a,this.isNavigableKey=s,this.isActivatable=n,this.wrapNavigation=l??(()=>!0)}get items(){const e=this.getPossibleItems(),t=[];for(const o of e){if(this.isItem(o)){t.push(o);continue}const e=o.item;e&&this.isItem(e)&&t.push(e)}return t}activateNextItem(){const e=this.items,t=vo(e,this.isActivatable);return t&&(t.item.tabIndex=-1),bo(e,t,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const e=this.items,t=vo(e,this.isActivatable);return t&&(t.item.tabIndex=-1),yo(e,t,this.isActivatable,this.wrapNavigation())}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Co=function(e,t){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:e,reason:t,itemPath:[e]}})},$o={SPACE:"Space",ENTER:"Enter"},Eo="click-selection",Ao="keydown",ko={ESCAPE:"Escape",SPACE:$o.SPACE,ENTER:$o.ENTER};function Io(e){return Object.values(ko).some((t=>t===e))}function So(e,t){const o=new Event("md-contains",{bubbles:!0,composed:!0});let i=[];const r=e=>{i=e.composedPath()};t.addEventListener("md-contains",r),e.dispatchEvent(o),t.removeEventListener("md-contains",r);return i.length>0}const To="none",Oo="list-root",Ro="first-item",zo="last-item",Po="end-start",Lo="start-start";
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class No{constructor(e,t){this.host=e,this.getProperties=t,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:e,anchorEl:t,anchorCorner:o,surfaceCorner:i,positioning:r,xOffset:a,yOffset:s,disableBlockFlip:n,disableInlineFlip:l,repositionStrategy:d}=this.getProperties(),c=o.toLowerCase().trim(),h=i.toLowerCase().trim();if(!e||!t)return;const p=window.innerWidth,u=window.innerHeight,f=document.createElement("div");f.style.opacity="0",f.style.position="fixed",f.style.display="block",f.style.inset="0",document.body.appendChild(f);const v=f.getBoundingClientRect();f.remove();const m=window.innerHeight-v.bottom,g=window.innerWidth-v.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,e.popover&&e.isConnected&&e.showPopover();const b=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),y=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),[x,_]=h.split("-"),[w,C]=c.split("-"),$="ltr"===getComputedStyle(e).direction;let{blockInset:E,blockOutOfBoundsCorrection:A,surfaceBlockProperty:k}=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:w,surfaceBlock:x,yOffset:s,positioning:r,windowInnerHeight:u,blockScrollbarHeight:m});if(A&&!n){const e="start"===x?"end":"start",t="start"===w?"end":"start",o=this.calculateBlock({surfaceRect:b,anchorRect:y,anchorBlock:t,surfaceBlock:e,yOffset:s,positioning:r,windowInnerHeight:u,blockScrollbarHeight:m});A>o.blockOutOfBoundsCorrection&&(E=o.blockInset,A=o.blockOutOfBoundsCorrection,k=o.surfaceBlockProperty)}let{inlineInset:I,inlineOutOfBoundsCorrection:S,surfaceInlineProperty:T}=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:C,surfaceInline:_,xOffset:a,positioning:r,isLTR:$,windowInnerWidth:p,inlineScrollbarWidth:g});if(S&&!l){const e="start"===_?"end":"start",t="start"===C?"end":"start",o=this.calculateInline({surfaceRect:b,anchorRect:y,anchorInline:t,surfaceInline:e,xOffset:a,positioning:r,isLTR:$,windowInnerWidth:p,inlineScrollbarWidth:g});Math.abs(S)>Math.abs(o.inlineOutOfBoundsCorrection)&&(I=o.inlineInset,S=o.inlineOutOfBoundsCorrection,T=o.surfaceInlineProperty)}"move"===d&&(E-=A,I-=S),this.surfaceStylesInternal={display:"block",opacity:"1",[k]:`${E}px`,[T]:`${I}px`},"resize"===d&&(A&&(this.surfaceStylesInternal.height=b.height-A+"px"),S&&(this.surfaceStylesInternal.width=b.width-S+"px")),this.host.requestUpdate()}calculateBlock(e){const{surfaceRect:t,anchorRect:o,anchorBlock:i,surfaceBlock:r,yOffset:a,positioning:s,windowInnerHeight:n,blockScrollbarHeight:l}=e,d="fixed"===s||"document"===s?1:0,c="document"===s?1:0,h="start"===r?1:0,p="end"===r?1:0,u=(i!==r?1:0)*o.height+a,f=h*o.top+p*(n-o.bottom-l);return{blockInset:d*f+c*(h*window.scrollY-p*window.scrollY)+u,blockOutOfBoundsCorrection:Math.abs(Math.min(0,n-f-u-t.height)),surfaceBlockProperty:"start"===r?"inset-block-start":"inset-block-end"}}calculateInline(e){const{isLTR:t,surfaceInline:o,anchorInline:i,anchorRect:r,surfaceRect:a,xOffset:s,positioning:n,windowInnerWidth:l,inlineScrollbarWidth:d}=e,c="fixed"===n||"document"===n?1:0,h="document"===n?1:0,p=t?1:0,u=t?0:1,f="start"===o?1:0,v="end"===o?1:0,m=(i!==o?1:0)*r.width+s,g=p*(f*r.left+v*(l-r.right-d))+u*(f*(l-r.right-d)+v*r.left);let b="start"===o?"inset-inline-start":"inset-inline-end";return"document"!==n&&"fixed"!==n||(b="start"===o&&t||"end"===o&&!t?"left":"right"),{inlineInset:c*g+m+h*(p*(f*window.scrollX-v*window.scrollX)+u*(v*window.scrollX-f*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-g-m-a.width)),surfaceInlineProperty:b}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const e=this.getProperties();let t=!1;for(const[o,i]of Object.entries(e))if(t=t||i!==this.lastValues[o],t)break;const o=this.lastValues.isOpen!==e.isOpen,i=!!e.anchorEl,r=!!e.surfaceEl;t&&i&&r&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):o&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const e=this.getProperties().surfaceEl;e?.popover&&e?.isConnected&&e.hidePopover()}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Do=0,Mo=1,Uo=2;class Bo{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=e=>{this.isTypingAhead?this.typeahead(e):this.beginTypeahead(e)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&("Space"===e.code||"Enter"===e.code||e.code.startsWith("Arrow")||"Escape"===e.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map(((e,t)=>[t,e,e.typeaheadText.trim().toLowerCase()])),this.lastActiveRecord=this.typeaheadRecords.find((e=>0===e[Mo].tabIndex))??null,this.lastActiveRecord&&(this.lastActiveRecord[Mo].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===e.code||e.code.startsWith("Arrow")||"Escape"===e.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[Mo].tabIndex=-1));"Space"===e.code&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();const t=this.lastActiveRecord?this.lastActiveRecord[Do]:-1,o=this.typeaheadRecords.length,i=e=>(e[Do]+o-t)%o,r=this.typeaheadRecords.filter((e=>!e[Mo].disabled&&e[Uo].startsWith(this.typaheadBuffer))).sort(((e,t)=>i(e)-i(t)));if(0===r.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[Mo].tabIndex=-1),void this.endTypeahead();const a=1===this.typaheadBuffer.length;let s;s=this.lastActiveRecord===r[0]&&a?r[1]??r[0]:r[0],this.lastActiveRecord&&(this.lastActiveRecord[Mo].tabIndex=-1),this.lastActiveRecord=s,s[Mo].tabIndex=0,s[Mo].focus()}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fo=new Set([_o.ArrowDown,_o.ArrowUp,_o.Home,_o.End]),jo=new Set([_o.ArrowLeft,_o.ArrowRight,...Fo]);class qo extends De{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=200,this.anchorCorner=Po,this.menuCorner=Lo,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=Ro,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let e=null;return{start:()=>(e?.abort(),e=new AbortController,e.signal),finish(){e=null}}}(),this.listController=new wo({isItem:e=>e.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>{if(!this.isSubmenu)return jo.has(e);return e===("rtl"===getComputedStyle(this).direction?_o.ArrowLeft:_o.ArrowRight)||Fo.has(e)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new Bo((()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive}))),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new No(this,(()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"}))),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async e=>{const t=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(t))return;if(e.relatedTarget){if(So(e.relatedTarget,this)||0!==this.pointerPath.length&&So(e.relatedTarget,t))return}else if(this.pointerPath.includes(this))return;const o=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=o},this.onOpened=async()=>{this.lastFocusedElement=function(e=document){let t=e.activeElement;for(;t&&t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}();const e=this.items,t=vo(e);t&&this.defaultFocus!==To&&(t.item.tabIndex=-1);let o=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):o=!!await this.animateOpen(),this.defaultFocus){case Ro:const t=mo(e);t&&(t.tabIndex=0,t.focus(),await t.updateComplete);break;case zo:const o=go(e);o&&(o.tabIndex=0,o.focus(),await o.updateComplete);break;case Oo:this.focus()}o||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=e=>{this.pointerPath=e.composedPath()},this.onDocumentClick=e=>{if(!this.open)return;const t=e.composedPath();this.stayOpenOnOutsideClick||t.includes(this)||t.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(e){e.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(e){e.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(e)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return be`
      <div
        class="menu ${dt(this.getSurfaceClasses())}"
        style=${po(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":xe}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return be`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return be`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&Io(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){const e=this.surfaceEl,t=this.slotEl;if(!e||!t)return!0;const o=this.openDirection;this.dispatchEvent(new Event("opening")),e.classList.toggle("animating",!0);const i=this.openCloseAnimationSignal.start(),r=e.offsetHeight,a="UP"===o,s=this.items,n=250/s.length,l=e.animate([{height:"0px"},{height:`${r}px`}],{duration:500,easing:xt}),d=t.animate([{transform:a?`translateY(-${r}px)`:""},{transform:""}],{duration:500,easing:xt}),c=e.animate([{opacity:0},{opacity:1}],50),h=[];for(let e=0;e<s.length;e++){const t=s[a?s.length-1-e:e],o=t.animate([{opacity:0},{opacity:1}],{duration:250,delay:n*e});t.classList.toggle("md-menu-hidden",!0),o.addEventListener("finish",(()=>{t.classList.toggle("md-menu-hidden",!1)})),h.push([t,o])}let p=e=>{};const u=new Promise((e=>{p=e}));return i.addEventListener("abort",(()=>{l.cancel(),d.cancel(),c.cancel(),h.forEach((([e,t])=>{e.classList.toggle("md-menu-hidden",!1),t.cancel()})),p(!0)})),l.addEventListener("finish",(()=>{e.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),p(!1)})),await u}animateClose(){let e;const t=new Promise((t=>{e=t})),o=this.surfaceEl,i=this.slotEl;if(!o||!i)return e(!1),t;const r="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),o.classList.toggle("animating",!0);const a=this.openCloseAnimationSignal.start(),s=o.offsetHeight,n=this.items,l=150,d=50/n.length,c=o.animate([{height:`${s}px`},{height:.35*s+"px"}],{duration:l,easing:_t}),h=i.animate([{transform:""},{transform:r?`translateY(-${.65*s}px)`:""}],{duration:l,easing:_t}),p=o.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),u=[];for(let e=0;e<n.length;e++){const t=n[r?e:n.length-1-e],o=t.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+d*e});o.addEventListener("finish",(()=>{t.classList.toggle("md-menu-hidden",!0)})),u.push([t,o])}return a.addEventListener("abort",(()=>{c.cancel(),h.cancel(),p.cancel(),u.forEach((([e,t])=>{t.cancel(),e.classList.toggle("md-menu-hidden",!1)})),e(!1)})),c.addEventListener("finish",(()=>{o.classList.toggle("animating",!1),u.forEach((([e])=>{e.classList.toggle("md-menu-hidden",!1)})),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),e(!0)})),t}handleKeydown(e){this.pointerPath=[],this.listController.handleKeydown(e)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach((e=>{e.close?.()}))}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}t([He(".menu")],qo.prototype,"surfaceEl",void 0),t([He("slot")],qo.prototype,"slotEl",void 0),t([je()],qo.prototype,"anchor",void 0),t([je()],qo.prototype,"positioning",void 0),t([je({type:Boolean})],qo.prototype,"quick",void 0),t([je({type:Boolean,attribute:"has-overflow"})],qo.prototype,"hasOverflow",void 0),t([je({type:Boolean,reflect:!0})],qo.prototype,"open",void 0),t([je({type:Number,attribute:"x-offset"})],qo.prototype,"xOffset",void 0),t([je({type:Number,attribute:"y-offset"})],qo.prototype,"yOffset",void 0),t([je({type:Boolean,attribute:"no-horizontal-flip"})],qo.prototype,"noHorizontalFlip",void 0),t([je({type:Boolean,attribute:"no-vertical-flip"})],qo.prototype,"noVerticalFlip",void 0),t([je({type:Number,attribute:"typeahead-delay"})],qo.prototype,"typeaheadDelay",void 0),t([je({attribute:"anchor-corner"})],qo.prototype,"anchorCorner",void 0),t([je({attribute:"menu-corner"})],qo.prototype,"menuCorner",void 0),t([je({type:Boolean,attribute:"stay-open-on-outside-click"})],qo.prototype,"stayOpenOnOutsideClick",void 0),t([je({type:Boolean,attribute:"stay-open-on-focusout"})],qo.prototype,"stayOpenOnFocusout",void 0),t([je({type:Boolean,attribute:"skip-restore-focus"})],qo.prototype,"skipRestoreFocus",void 0),t([je({attribute:"default-focus"})],qo.prototype,"defaultFocus",void 0),t([je({type:Boolean,attribute:"no-navigation-wrap"})],qo.prototype,"noNavigationWrap",void 0),t([Ke({flatten:!0})],qo.prototype,"slotItems",void 0),t([qe()],qo.prototype,"typeaheadActive",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Vo=L`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ho=class extends qo{};Ho.styles=[Vo],Ho=t([Ue("md-menu")],Ho);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Wo=Symbol("createValidator"),Ko=Symbol("getValidityAnchor"),Go=Symbol("privateValidator"),Yo=Symbol("privateSyncValidity"),Xo=Symbol("privateCustomValidationMessage");function Jo(e){var t;class o extends e{constructor(){super(...arguments),this[t]=""}get validity(){return this[Yo](),this[Wt].validity}get validationMessage(){return this[Yo](),this[Wt].validationMessage}get willValidate(){return this[Yo](),this[Wt].willValidate}checkValidity(){return this[Yo](),this[Wt].checkValidity()}reportValidity(){return this[Yo](),this[Wt].reportValidity()}setCustomValidity(e){this[Xo]=e,this[Yo]()}requestUpdate(e,t,o){super.requestUpdate(e,t,o),this[Yo]()}firstUpdated(e){super.firstUpdated(e),this[Yo]()}[(t=Xo,Yo)](){this[Go]||(this[Go]=this[Wo]());const{validity:e,validationMessage:t}=this[Go].getValidity(),o=!!this[Xo],i=this[Xo]||t;this[Wt].setValidity({...e,customError:o},i,this[Ko]()??void 0)}[Wo](){throw new Error("Implement [createValidator]")}[Ko](){throw new Error("Implement [getValidityAnchor]")}}return o}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zo=Symbol("getFormValue"),Qo=Symbol("getFormState");function ei(e){class o extends e{get form(){return this[Wt].form}get labels(){return this[Wt].labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",e)}attributeChangedCallback(e,t,o){if("name"!==e&&"disabled"!==e)super.attributeChangedCallback(e,t,o);else{const o="disabled"===e?null!==t:t;this.requestUpdate(e,o)}}requestUpdate(e,t,o){super.requestUpdate(e,t,o),this[Wt].setFormValue(this[Zo](),this[Qo]())}[Zo](){throw new Error("Implement [getFormValue]")}[Qo](){return this[Zo]()}formDisabledCallback(e){this.disabled=e}}return o.formAssociated=!0,t([je({noAccessor:!0})],o.prototype,"name",null),t([je({type:Boolean,noAccessor:!0})],o.prototype,"disabled",null),o}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ti=Symbol("onReportValidity"),oi=Symbol("privateCleanupFormListeners"),ii=Symbol("privateDoNotReportInvalid"),ri=Symbol("privateIsSelfReportingValidity"),ai=Symbol("privateCallOnReportValidity");function si(e){var t,o,i;class r extends e{constructor(...e){super(...e),this[t]=new AbortController,this[o]=!1,this[i]=!1,this.addEventListener("invalid",(e=>{!this[ii]&&e.isTrusted&&this.addEventListener("invalid",(()=>{this[ai](e)}),{once:!0})}),{capture:!0})}checkValidity(){this[ii]=!0;const e=super.checkValidity();return this[ii]=!1,e}reportValidity(){this[ri]=!0;const e=super.reportValidity();return e&&this[ai](null),this[ri]=!1,e}[(t=oi,o=ii,i=ri,ai)](e){const t=e?.defaultPrevented;if(t)return;this[ti](e);!t&&e?.defaultPrevented&&(this[ri]||function(e,t){if(!e)return!0;let o;for(const t of e.elements)if(t.matches(":invalid")){o=t;break}return o===t}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(this[Wt].form,this))&&this.focus()}[ti](e){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(e){super.formAssociatedCallback&&super.formAssociatedCallback(e),this[oi].abort(),e&&(this[oi]=new AbortController,function(e,t,o,i){const r=function(e){if(!ni.has(e)){const t=new EventTarget;ni.set(e,t);for(const o of["reportValidity","requestSubmit"]){const i=e[o];e[o]=function(){t.dispatchEvent(new Event("before"));const e=Reflect.apply(i,this,arguments);return t.dispatchEvent(new Event("after")),e}}}return ni.get(e)}(t);let a,s=!1,n=!1;r.addEventListener("before",(()=>{n=!0,a=new AbortController,s=!1,e.addEventListener("invalid",(()=>{s=!0}),{signal:a.signal})}),{signal:i}),r.addEventListener("after",(()=>{n=!1,a?.abort(),s||o()}),{signal:i}),t.addEventListener("submit",(()=>{n||o()}),{signal:i})}(this,e,(()=>{this[ai](null)}),this[oi].signal))}}return r}const ni=new WeakMap;class li{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:t,validationMessage:o}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:o,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class di extends li{computeValidity(e){return this.selectControl||(this.selectControl=document.createElement("select")),Le(be`<option value=${e.value}></option>`,this.selectControl),this.selectControl.value=e.value,this.selectControl.required=e.required,{validity:this.selectControl.validity,validationMessage:this.selectControl.validationMessage}}equals(e,t){return e.value===t.value&&e.required===t.required}copy({value:e,required:t}){return{value:e,required:t}}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var ci;const hi=Symbol("value"),pi=vt(si(Jo(ei(Gt(De)))));class ui extends pi{get value(){return this[hi]}set value(e){this.lastUserSetValue=e,this.select(e)}get options(){return this.menu?.items??[]}get selectedIndex(){const[e,t]=(this.getSelectedOptions()??[])[0]??[];return t??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map((([e])=>e))}get hasError(){return this.error||this.nativeError}constructor(){super(),this.quick=!1,this.required=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.supportingText="",this.error=!1,this.menuPositioning="popover",this.clampMenuWidth=!1,this.typeaheadDelay=200,this.hasLeadingIcon=!1,this.displayText="",this.menuAlign="start",this[ci]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.defaultFocus=To,this.prevOpen=this.open,this.selectWidth=0,this.addEventListener("focus",this.handleFocus.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}select(e){const t=this.options.find((t=>t.value===e));t&&this.selectItem(t)}selectIndex(e){const t=this.options[e];t&&this.selectItem(t)}reset(){for(const e of this.options)e.selected=e.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}[(ci=hi,ti)](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}update(e){if(this.hasUpdated||this.initUserSelection(),this.prevOpen!==this.open&&this.open){const e=this.getBoundingClientRect();this.selectWidth=e.width}this.prevOpen=this.open,super.update(e)}render(){return be`
      <span
        class="select ${dt(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `}async firstUpdated(e){await(this.menu?.updateComplete),this.lastSelectedOptionRecords.length||this.initUserSelection(),this.lastSelectedOptionRecords.length||this.options.length||setTimeout((()=>{this.updateValueAndDisplayText()})),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){const e=this.ariaLabel||this.label;return Qe`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${e||xe}
          aria-describedby="description"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          ?no-asterisk=${this.noAsterisk}
          .focused=${this.focused||this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return be`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return be`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `}renderLabel(){return be`<div id="label">${this.displayText||be`&nbsp;`}</div>`}renderMenu(){const e=this.label||this.ariaLabel;return be`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${e||xe}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${po({"--__menu-min-width":`${this.selectWidth}px`,"--__menu-max-width":this.clampMenuWidth?`${this.selectWidth}px`:void 0})}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${"start"===this.menuAlign?"end-start":"end-end"}
        .menuCorner=${"start"===this.menuAlign?"start-start":"start-end"}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`}renderMenuContent(){return be`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;const t=this.menu.typeaheadController,o="Space"===e.code||"ArrowDown"===e.code||"ArrowUp"===e.code||"End"===e.code||"Home"===e.code||"Enter"===e.code;if(!t.isTypingAhead&&o){switch(e.preventDefault(),this.open=!0,e.code){case"Space":case"ArrowDown":case"Enter":this.defaultFocus=To;break;case"End":this.defaultFocus=zo;break;case"ArrowUp":case"Home":this.defaultFocus=Ro}return}if(1===e.key.length){t.onKeydown(e),e.preventDefault();const{lastActiveRecord:o}=t;if(!o)return;this.labelEl?.setAttribute?.("aria-live","polite");this.selectItem(o[Mo])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!this.open}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&So(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;const e=this.menu.items;return this.lastSelectedOptionRecords=function(e){const t=[];for(let o=0;o<e.length;o++){const i=e[o];i.selected&&t.push([i,o])}return t}(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await(this.menu?.updateComplete),super.getUpdateComplete()}updateValueAndDisplayText(){const e=this.getSelectedOptions()??[];let t=!1;if(e.length){const[o]=e[0];t=this.lastSelectedOption!==o,this.lastSelectedOption=o,this[hi]=o.value,this.displayText=o.displayText}else t=null!==this.lastSelectedOption,this.lastSelectedOption=null,this[hi]="",this.displayText="";return t}async handleOpening(e){if(this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(e),this.defaultFocus!==To)return;const t=this.menu.items,o=vo(t)?.item;let[i]=this.lastSelectedOptionRecords[0]??[null];o&&o!==i&&(o.tabIndex=-1),i=i??t[0],i&&(i.tabIndex=0,i.focus())}redispatchEvent(e){bt(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){const t=e.detail.reason,o=e.detail.itemPath[0];this.open=!1;let i=!1;var r;"click-selection"===t.kind||"keydown"===t.kind&&(r=t.key,Object.values($o).some((e=>e===r)))?i=this.selectItem(o):(o.tabIndex=-1,o.blur()),i&&this.dispatchInteractionEvents()}selectItem(e){return(this.getSelectedOptions()??[]).forEach((([t])=>{e!==t&&(t.selected=!1)})),e.selected=!0,this.updateValueAndDisplayText()}handleRequestSelection(e){const t=e.target;this.lastSelectedOptionRecords.some((([e])=>e===t))||this.selectItem(t)}handleRequestDeselection(e){const t=e.target;this.lastSelectedOptionRecords.some((([e])=>e===t))&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):null===this.lastUserSetSelectedIndex||this.lastSelectedOptionRecords.length?this.updateValueAndDisplayText():this.selectIndex(this.lastUserSetSelectedIndex)}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}[Zo](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}click(){this.field?.click()}[Wo](){return new di((()=>this))}[Ko](){return this.field}}ui.shadowRootOptions={...De.shadowRootOptions,delegatesFocus:!0},t([je({type:Boolean})],ui.prototype,"quick",void 0),t([je({type:Boolean})],ui.prototype,"required",void 0),t([je({type:String,attribute:"error-text"})],ui.prototype,"errorText",void 0),t([je()],ui.prototype,"label",void 0),t([je({type:Boolean,attribute:"no-asterisk"})],ui.prototype,"noAsterisk",void 0),t([je({type:String,attribute:"supporting-text"})],ui.prototype,"supportingText",void 0),t([je({type:Boolean,reflect:!0})],ui.prototype,"error",void 0),t([je({attribute:"menu-positioning"})],ui.prototype,"menuPositioning",void 0),t([je({type:Boolean,attribute:"clamp-menu-width"})],ui.prototype,"clampMenuWidth",void 0),t([je({type:Number,attribute:"typeahead-delay"})],ui.prototype,"typeaheadDelay",void 0),t([je({type:Boolean,attribute:"has-leading-icon"})],ui.prototype,"hasLeadingIcon",void 0),t([je({attribute:"display-text"})],ui.prototype,"displayText",void 0),t([je({attribute:"menu-align"})],ui.prototype,"menuAlign",void 0),t([je()],ui.prototype,"value",null),t([je({type:Number,attribute:"selected-index"})],ui.prototype,"selectedIndex",null),t([qe()],ui.prototype,"nativeError",void 0),t([qe()],ui.prototype,"nativeErrorText",void 0),t([qe()],ui.prototype,"focused",void 0),t([qe()],ui.prototype,"open",void 0),t([qe()],ui.prototype,"defaultFocus",void 0),t([He(".field")],ui.prototype,"field",void 0),t([He("md-menu")],ui.prototype,"menu",void 0),t([He("#label")],ui.prototype,"labelEl",void 0),t([Ke({slot:"leading-icon",flatten:!0})],ui.prototype,"leadingIcons",void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class fi extends ui{constructor(){super(...arguments),this.fieldTag=Je`md-filled-field`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const vi=L`:host{--_text-field-active-indicator-color: var(--md-filled-select-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-active-indicator-height: var(--md-filled-select-text-field-active-indicator-height, 1px);--_text-field-container-color: var(--md-filled-select-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_text-field-disabled-active-indicator-color: var(--md-filled-select-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-active-indicator-height: var(--md-filled-select-text-field-disabled-active-indicator-height, 1px);--_text-field-disabled-active-indicator-opacity: var(--md-filled-select-text-field-disabled-active-indicator-opacity, 0.38);--_text-field-disabled-container-color: var(--md-filled-select-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-container-opacity: var(--md-filled-select-text-field-disabled-container-opacity, 0.04);--_text-field-disabled-input-text-color: var(--md-filled-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-filled-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-filled-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-filled-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-filled-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-filled-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-supporting-text-color: var(--md-filled-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-filled-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-filled-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-filled-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-active-indicator-color: var(--md-filled-select-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-active-indicator-color: var(--md-filled-select-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-filled-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-filled-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-filled-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-supporting-text-color: var(--md-filled-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-filled-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-active-indicator-color: var(--md-filled-select-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-input-text-color: var(--md-filled-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-filled-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-filled-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-state-layer-color: var(--md-filled-select-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-state-layer-opacity: var(--md-filled-select-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-filled-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-filled-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-filled-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-filled-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-filled-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-supporting-text-color: var(--md-filled-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-filled-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-active-indicator-color: var(--md-filled-select-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-active-indicator-height: var(--md-filled-select-text-field-focus-active-indicator-height, 3px);--_text-field-focus-input-text-color: var(--md-filled-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-filled-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-filled-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-supporting-text-color: var(--md-filled-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-filled-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-active-indicator-color: var(--md-filled-select-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-active-indicator-height: var(--md-filled-select-text-field-hover-active-indicator-height, 1px);--_text-field-hover-input-text-color: var(--md-filled-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-filled-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-filled-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-state-layer-color: var(--md-filled-select-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-state-layer-opacity: var(--md-filled-select-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-filled-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-filled-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-filled-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-filled-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-filled-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-filled-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-filled-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-filled-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-filled-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-filled-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-filled-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-filled-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-filled-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-filled-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-filled-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-filled-select-text-field-leading-icon-size, 24px);--_text-field-supporting-text-color: var(--md-filled-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-filled-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-filled-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-filled-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-filled-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-filled-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-filled-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-filled-select-text-field-container-shape-start-start, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-filled-select-text-field-container-shape-start-end, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-filled-select-text-field-container-shape-end-end, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_text-field-container-shape-end-start: var(--md-filled-select-text-field-container-shape-end-start, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--md-filled-field-active-indicator-color: var(--_text-field-active-indicator-color);--md-filled-field-active-indicator-height: var(--_text-field-active-indicator-height);--md-filled-field-container-color: var(--_text-field-container-color);--md-filled-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-filled-field-content-color: var(--_text-field-input-text-color);--md-filled-field-content-font: var(--_text-field-input-text-font);--md-filled-field-content-line-height: var(--_text-field-input-text-line-height);--md-filled-field-content-size: var(--_text-field-input-text-size);--md-filled-field-content-weight: var(--_text-field-input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_text-field-disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_text-field-disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_text-field-disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_text-field-disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_text-field-disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_text-field-error-active-indicator-color);--md-filled-field-error-content-color: var(--_text-field-error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_text-field-error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_text-field-error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_text-field-error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_text-field-error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-filled-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_text-field-focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_text-field-focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_text-field-hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_text-field-hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_text-field-hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_text-field-hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_text-field-label-text-color);--md-filled-field-label-text-font: var(--_text-field-label-text-font);--md-filled-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-filled-field-label-text-size: var(--_text-field-label-text-size);--md-filled-field-label-text-weight: var(--_text-field-label-text-weight);--md-filled-field-leading-content-color: var(--_text-field-leading-icon-color);--md-filled-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-filled-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-filled-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-filled-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`,mi=L`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gi extends fi{}e(gi,"styles",[mi,vi]),customElements.define("oscd-filled-select",gi);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class bi extends oo{}e(bi,"styles",[ro,io]),customElements.define("oscd-filled-field",bi);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const yi=L`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_icon-input-space: var(--md-filled-text-field-icon-input-space, 16px);--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-filled-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-filled-text-field-with-trailing-icon-trailing-space, 12px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-space: var(--_icon-input-space);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space);--md-filled-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-filled-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,xi={},_i=nt(class extends lt{constructor(e){if(super(e),e.type!==at&&e.type!==rt&&e.type!==st)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ye||t===xe)return t;const o=e.element,i=e.name;if(e.type===at){if(t===o[i])return ye}else if(e.type===st){if(!!t===o.hasAttribute(i))return ye}else if(e.type===rt&&o.getAttribute(i)===t+"")return ye;return((e,t=xi)=>{e._$AH=t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),t}}),wi={fromAttribute:e=>e??"",toAttribute:e=>e||null};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ci extends li{computeValidity({state:e,renderedControl:t}){let o=t;$i(e)&&!o?(o=this.inputControl||document.createElement("input"),this.inputControl=o):o||(o=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=o);const i=$i(e)?o:null;if(i&&(i.type=e.type),o.value!==e.value&&(o.value=e.value),o.required=e.required,i){const t=e;t.pattern?i.pattern=t.pattern:i.removeAttribute("pattern"),t.min?i.min=t.min:i.removeAttribute("min"),t.max?i.max=t.max:i.removeAttribute("max"),t.step?i.step=t.step:i.removeAttribute("step")}return(e.minLength??-1)>-1?o.setAttribute("minlength",String(e.minLength)):o.removeAttribute("minlength"),(e.maxLength??-1)>-1?o.setAttribute("maxlength",String(e.maxLength)):o.removeAttribute("maxlength"),{validity:o.validity,validationMessage:o.validationMessage}}equals({state:e},{state:t}){const o=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return $i(e)&&$i(t)?o&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step:o}copy({state:e}){return{state:$i(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:t,pattern:o,min:i,max:r,step:a}=e;return{...this.copySharedState(e),type:t,pattern:o,min:i,max:r,step:a}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:o,maxLength:i}){return{value:e,required:t,minLength:o,maxLength:i}}}function $i(e){return"textarea"!==e.type}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ei=vt(si(Jo(ei(Gt(De)))));class Ai extends Ei{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,o){this.getInputOrTextarea().setSelectionRange(e,t,o)}showPicker(){const e=this.getInput();e&&e.showPicker()}stepDown(e){const t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){const t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,o){"value"===e&&this.dirty||super.attributeChangedCallback(e,t,o)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return be`
      <span class="text-field ${dt(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return Qe`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${"textarea"===this.type}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return be`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return be`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const e={direction:this.textDirection},t=this.ariaLabel||this.label||xe,o=this.autocomplete,i=(this.maxLength??-1)>-1,r=(this.minLength??-1)>-1;if("textarea"===this.type)return be`
        <textarea
          class="input"
          style=${po(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${o||xe}
          name=${this.name||xe}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:xe}
          minlength=${r?this.minLength:xe}
          placeholder=${this.placeholder||xe}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${_i(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const a=this.renderPrefix(),s=this.renderSuffix(),n=this.inputMode;return be`
      <div class="input-wrapper">
        ${a}
        <input
          class="input"
          style=${po(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${o||xe}
          name=${this.name||xe}
          ?disabled=${this.disabled}
          inputmode=${n||xe}
          max=${this.max||xe}
          maxlength=${i?this.maxLength:xe}
          min=${this.min||xe}
          minlength=${r?this.minLength:xe}
          pattern=${this.pattern||xe}
          placeholder=${this.placeholder||xe}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||xe}
          type=${this.type}
          .value=${_i(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${s}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){if(!e)return xe;return be`<span class="${dt({suffix:t,prefix:!t})}">${e}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){bt(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Zo](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[Wo](){return new Ci((()=>({state:this,renderedControl:this.inputOrTextarea})))}[Ko](){return this.inputOrTextarea}[ti](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}}Ai.shadowRootOptions={...De.shadowRootOptions,delegatesFocus:!0},t([je({type:Boolean,reflect:!0})],Ai.prototype,"error",void 0),t([je({attribute:"error-text"})],Ai.prototype,"errorText",void 0),t([je()],Ai.prototype,"label",void 0),t([je({type:Boolean,attribute:"no-asterisk"})],Ai.prototype,"noAsterisk",void 0),t([je({type:Boolean,reflect:!0})],Ai.prototype,"required",void 0),t([je()],Ai.prototype,"value",void 0),t([je({attribute:"prefix-text"})],Ai.prototype,"prefixText",void 0),t([je({attribute:"suffix-text"})],Ai.prototype,"suffixText",void 0),t([je({type:Boolean,attribute:"has-leading-icon"})],Ai.prototype,"hasLeadingIcon",void 0),t([je({type:Boolean,attribute:"has-trailing-icon"})],Ai.prototype,"hasTrailingIcon",void 0),t([je({attribute:"supporting-text"})],Ai.prototype,"supportingText",void 0),t([je({attribute:"text-direction"})],Ai.prototype,"textDirection",void 0),t([je({type:Number})],Ai.prototype,"rows",void 0),t([je({type:Number})],Ai.prototype,"cols",void 0),t([je({reflect:!0})],Ai.prototype,"inputMode",void 0),t([je()],Ai.prototype,"max",void 0),t([je({type:Number})],Ai.prototype,"maxLength",void 0),t([je()],Ai.prototype,"min",void 0),t([je({type:Number})],Ai.prototype,"minLength",void 0),t([je({type:Boolean,attribute:"no-spinner"})],Ai.prototype,"noSpinner",void 0),t([je()],Ai.prototype,"pattern",void 0),t([je({reflect:!0,converter:wi})],Ai.prototype,"placeholder",void 0),t([je({type:Boolean,reflect:!0})],Ai.prototype,"readOnly",void 0),t([je({type:Boolean,reflect:!0})],Ai.prototype,"multiple",void 0),t([je()],Ai.prototype,"step",void 0),t([je({reflect:!0})],Ai.prototype,"type",void 0),t([je({reflect:!0})],Ai.prototype,"autocomplete",void 0),t([qe()],Ai.prototype,"dirty",void 0),t([qe()],Ai.prototype,"focused",void 0),t([qe()],Ai.prototype,"nativeError",void 0),t([qe()],Ai.prototype,"nativeErrorText",void 0),t([He(".input")],Ai.prototype,"inputOrTextarea",void 0),t([He(".field")],Ai.prototype,"field",void 0),t([Ke({slot:"leading-icon"})],Ai.prototype,"leadingIcons",void 0),t([Ke({slot:"trailing-icon"})],Ai.prototype,"trailingIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ki extends Ai{constructor(){super(...arguments),this.fieldTag=Je`md-filled-field`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ii=L`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`,Si=new WeakMap;function Ti(e){return t=>{if(function(e,t){let o=t;for(;o;){if(Si.get(o)===e)return!0;o=Object.getPrototypeOf(o)}return!1}(e,t))return t;const o=e(t);return Si.set(o,e),o}}const Oi="3.0.0",Ri=window.scopedElementsVersions||(window.scopedElementsVersions=[]);Ri.includes(Oi)||Ri.push(Oi);const zi=Ti((t=>{var o;return e(o=class extends t{static get scopedElementsVersion(){return Oi}get registry(){return this.constructor.__registry}set registry(e){this.constructor.__registry=e}attachShadow(e){const{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=new CustomElementRegistry;for(const[e,o]of Object.entries(t??{}))this.registry.define(e,o)}return super.attachShadow({...e,customElements:this.registry,registry:this.registry})}},"scopedElements",void 0),e(o,"__registry",void 0),o})),Pi=Ti((e=>class extends(zi(e)){createRenderRoot(){const{shadowRootOptions:e,elementStyles:t}=this.constructor,o=this.attachShadow(e);return this.renderOptions.creationScope=o,N(o,t),this.renderOptions.renderBefore??=o.firstChild,o}}));
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
class Li extends(Pi(ki)){constructor(...t){super(...t),e(this,"fieldTag",Je`oscd-filled-field`)}static get scopedElements(){return{"oscd-filled-field":bi}}}e(Li,"styles",[Ii,yi]),customElements.define("oscd-filled-text-field",Li);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ni extends De{render(){return be`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Di=L`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class Mi extends Ni{}e(Mi,"styles",[Di]),customElements.define("oscd-icon",Mi);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ui=new Set(Object.values(_o));class Bi extends De{get items(){return this.listController.items}constructor(){super(),this.listController=new wo({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>Ui.has(e),isActivatable:e=>!e.disabled&&"text"!==e.type}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return be`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}t([Ke({flatten:!0})],Bi.prototype,"slotItems",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Fi=L`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */,ji=L`
  :host {
    --md-list-container-color: var(
      --oscd-list-container-color,
      var(--md-sys-color-surface-container, #fef7ff)
    );
  }
`;class qi extends Bi{}e(qi,"styles",[Fi,ji]),customElements.define("oscd-list",qi);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Vi extends De{constructor(){super(...arguments),this.multiline=!1}render(){return be`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let e=!1,t=0;for(const o of this.textSlots)if(Hi(o)&&(t+=1),t>1){e=!0;break}this.multiline=e}}function Hi(e){for(const t of e.assignedNodes({flatten:!0})){const e=t.nodeType===Node.ELEMENT_NODE,o=t.nodeType===Node.TEXT_NODE&&t.textContent?.match(/\S/);if(e||o)return!0}return!1}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */t([je({type:Boolean,reflect:!0})],Vi.prototype,"multiline",void 0),t([function(e){return(t,o)=>Ve(t,o,{get(){return(this.renderRoot??(We??=document.createDocumentFragment())).querySelectorAll(e)}})}(".text slot")],Vi.prototype,"textSlots",void 0);const Wi=L`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ki=class extends Vi{};Ki.styles=[Wi],Ki=t([Ue("md-item")],Ki);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Gi=vt(De);class Yi extends Gi{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(be`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const t="link"===this.type;let o;switch(this.type){case"link":o=Je`a`;break;case"button":o=Je`button`;break;default:o=Je`li`}const i="text"!==this.type,r=t&&this.target?this.target:xe;return Qe`
      <${o}
        id="item"
        tabindex="${this.isDisabled||!i?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||xe}
        aria-checked=${this.ariaChecked||xe}
        aria-expanded=${this.ariaExpanded||xe}
        aria-haspopup=${this.ariaHasPopup||xe}
        class="list-item ${dt(this.getRenderClasses())}"
        href=${this.href||xe}
        target=${r}
        @focus=${this.onFocus}
      >${e}</${o}>
    `}renderRipple(){return"text"===this.type?xe:be` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return"text"===this.type?xe:be` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(e){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return be`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){-1===this.tabIndex&&this.dispatchEvent(new Event("request-activation",{bubbles:!0,composed:!0}))}focus(){this.listItemRoot?.focus()}click(){this.listItemRoot?this.listItemRoot.click():super.click()}}Yi.shadowRootOptions={...De.shadowRootOptions,delegatesFocus:!0},t([je({type:Boolean,reflect:!0})],Yi.prototype,"disabled",void 0),t([je({reflect:!0})],Yi.prototype,"type",void 0),t([je({type:Boolean,attribute:"md-list-item",reflect:!0})],Yi.prototype,"isListItem",void 0),t([je()],Yi.prototype,"href",void 0),t([je()],Yi.prototype,"target",void 0),t([He(".list-item")],Yi.prototype,"listItemRoot",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Xi=L`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */,Ji=L`
  :host([activated]) {
    --md-list-item-label-text-color: var(
      --oscd-list-item-activated-color,
      var(--md-sys-color-primary, #6750a4)
    );

    background-color: var(
      --oscd-list-item-activated-background-color,
      var(--md-sys-color-surface-bright, #eaddff)
    );
  }
  [slot="start"] {
    color: var(
      --md-list-item-leading-icon-color,
      var(--md-sys-color-on-surface, #49454f)
    );
  }
  [slot="end"] {
    color: var(
      --md-list-item-trailing-icon-color,
      var(--md-sys-color-on-surface, #49454f)
    );
  }
`;class Zi extends Yi{}e(Zi,"styles",[Xi,Ji]),customElements.define("oscd-list-item",Zi);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Qi extends qo{}e(Qi,"styles",[Vo]),customElements.define("oscd-menu",Qi);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class er{constructor(e,t){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(Co(this.host,{kind:Eo}))},this.onKeydown=e=>{if(this.host.href&&"Enter"===e.code){const e=this.getInteractiveElement();e instanceof HTMLAnchorElement&&e.click()}if(e.defaultPrevented)return;const t=e.code;this.host.keepOpen&&"Escape"!==t||Io(t)&&(e.preventDefault(),this.host.dispatchEvent(Co(this.host,{kind:Ao,key:t})))},this.getHeadlineElements=t.getHeadlineElements,this.getSupportingTextElements=t.getSupportingTextElements,this.getDefaultElements=t.getDefaultElements,this.getInteractiveElement=t.getInteractiveElement,this.host.addController(this)}get typeaheadText(){if(null!==this.internalTypeaheadText)return this.internalTypeaheadText;const e=this.getHeadlineElements(),t=[];return e.forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),0===t.length&&this.getDefaultElements().forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),0===t.length&&this.getSupportingTextElements().forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),t.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:return"li"}}get role(){return"option"===this.host.type?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(e){this.internalTypeaheadText=e}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tr=vt(De);class or extends tr{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new er(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(e){this.menuItemController.setTypeaheadText(e)}render(){return this.renderListItem(be`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const t="link"===this.type;let o;switch(this.menuItemController.tagName){case"a":o=Je`a`;break;case"button":o=Je`button`;break;default:o=Je`li`}const i=t&&this.target?this.target:xe;return Qe`
      <${o}
        id="item"
        tabindex=${this.disabled&&!t?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||xe}
        aria-selected=${this.ariaSelected||xe}
        aria-checked=${this.ariaChecked||xe}
        aria-expanded=${this.ariaExpanded||xe}
        aria-haspopup=${this.ariaHasPopup||xe}
        class="list-item ${dt(this.getRenderClasses())}"
        href=${this.href||xe}
        target=${i}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${e}</${o}>
    `}renderRipple(){return be` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return be` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return be`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}or.shadowRootOptions={...De.shadowRootOptions,delegatesFocus:!0},t([je({type:Boolean,reflect:!0})],or.prototype,"disabled",void 0),t([je()],or.prototype,"type",void 0),t([je()],or.prototype,"href",void 0),t([je()],or.prototype,"target",void 0),t([je({type:Boolean,attribute:"keep-open"})],or.prototype,"keepOpen",void 0),t([je({type:Boolean})],or.prototype,"selected",void 0),t([He(".list-item")],or.prototype,"listItemRoot",void 0),t([Ke({slot:"headline"})],or.prototype,"headlineElements",void 0),t([Ke({slot:"supporting-text"})],or.prototype,"supportingTextElements",void 0),t([Ge({slot:""})],or.prototype,"defaultElements",void 0),t([je({attribute:"typeahead-text"})],or.prototype,"typeaheadText",null);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ir=L`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class rr extends or{}e(rr,"styles",[ir]),customElements.define("oscd-menu-item",rr);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ar=vt(De);class sr extends ar{constructor(){super(...arguments),this.opened=!1,this.pivot="end"}render(){const e=this.opened?"true":"false",t=this.opened?"false":"true",{ariaLabel:o,ariaModal:i}=this;return be`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${e}
        aria-hidden=${t}
        aria-label=${o||xe}
        aria-modal=${i||xe}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"
        ><div class="md3-elevation-overlay"></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `}getScrimClasses(){return dt({"md3-navigation-drawer-modal--scrim-visible":this.opened})}getRenderClasses(){return dt({"md3-navigation-drawer-modal--opened":this.opened,"md3-navigation-drawer-modal--pivot-at-start":"start"===this.pivot})}updated(e){e.has("opened")&&setTimeout((()=>{this.dispatchEvent(new CustomEvent("navigation-drawer-changed",{detail:{opened:this.opened},bubbles:!0,composed:!0}))}),250)}handleKeyDown(e){"Escape"===e.code&&(this.opened=!1)}handleScrimClick(){this.opened=!this.opened}}t([je({type:Boolean})],sr.prototype,"opened",void 0),t([je()],sr.prototype,"pivot",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const nr=L`:host{--_container-color: var(--md-navigation-drawer-modal-container-color, #fff);--_container-height: var(--md-navigation-drawer-modal-container-height, 100%);--_container-shape: var(--md-navigation-drawer-modal-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-modal-container-width, 360px);--_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);--_scrim-color: var(--md-navigation-drawer-modal-scrim-color, );--_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 0.04);--_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);--md-elevation-level: var(--_modal-container-elevation)}.md3-navigation-drawer-modal{bottom:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;position:absolute;top:0;inline-size:0;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--opened{transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer-modal--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer-modal__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer-modal__scrim{inset:0;opacity:0;position:absolute;visibility:hidden;background-color:var(--_scrim-color);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--scrim-visible{visibility:visible;opacity:var(--_scrim-opacity);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}
`,lr=L`.md3-navigation-drawer-modal,.md3-navigation-drawer{background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-drawer-modal.md3-navigation-drawer-modal--opened,.md3-navigation-drawer.md3-navigation-drawer--opened{inline-size:var(--_container-width)}.md3-navigation-drawer-modal .md3-navigation-drawer-modal__slot-content,.md3-navigation-drawer .md3-navigation-drawer__slot-content{min-inline-size:var(--_container-width);max-inline-size:var(--_container-width)}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */,dr=L`
  :host {
    --md-navigation-drawer-modal-scrim-color: var(--md-sys-color-scrim, #000);
    --md-navigation-drawer-modal-scrim-opacity: 0.32;
    --md-navigation-drawer-modal-container-color: var(
      --md-sys-color-surface-container
    );
  }
  .md3-navigation-drawer-modal--opened {
    z-index: 6;
  }
  .md3-navigation-drawer-modal__scrim {
    z-index: 5;
  }
`;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class cr extends sr{}e(cr,"styles",[lr,nr,dr]),customElements.define("oscd-navigation-drawer",cr);
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
const hr=L`
  :host {
    --navigation-drawer-header-color: var(
      --oscd-navigation-drawer-header-color,
      var(--md-sys-color-on-primary, #1d1b20)
    );
    --navigation-drawer-header-background-color: var(
      --oscd-navigation-drawer-header-background-color,
      var(--md-sys-color-primary, #fff)
    );

    --md-list-item-label-text-font: var(
      --oscd-navigation-drawer-header-text-font,
      Roboto
    );
    --md-list-item-label-text-size: var(
      --oscd-navigation-drawer-header-text-size,
      1.25rem
    );
    --md-list-item-label-text-line-height: var(
      --oscd-navigation-drawer-header-text-line-height,
      1.5rem
    );
    --md-list-item-label-text-weight: var(
      --oscd-navigation-drawer-header-text-weight,
      500
    );

    --md-list-item-supporting-text-font: var(
      --oscd-navigation-drawer-header-supporting-text-font,
      var(--md-sys-typescale-body-medium-font, Roboto)
    );
    --md-list-item-supporting-text-size: var(
      --oscd-navigation-drawer-header-supporting-text-size,
      0.875rem
    );
    --md-list-item-supporting-text-line-height: var(
      --oscd-navigation-drawer-header-supporting-text-line-height,
      1.25rem
    );
    --md-list-item-supporting-text-weight: var(
      --oscd-navigation-drawer-header-supporting-text-weight,
      400
    );
  }
`;class pr extends Yi{}e(pr,"styles",[Xi,hr]),customElements.define("oscd-navigation-drawer-header",pr);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ur=Symbol("isFocusable"),fr=Symbol("privateIsFocusable"),vr=Symbol("externalTabIndex"),mr=Symbol("isUpdatingTabIndex"),gr=Symbol("updateTabIndex");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var br;const yr=Symbol("indicator"),xr=Symbol("animateIndicator"),_r=function(e){var o,i,r;class a extends e{constructor(){super(...arguments),this[o]=!0,this[i]=null,this[r]=!1}get[ur](){return this[fr]}set[ur](e){this[ur]!==e&&(this[fr]=e,this[gr]())}connectedCallback(){super.connectedCallback(),this[gr]()}attributeChangedCallback(e,t,o){if("tabindex"===e){if(this.requestUpdate("tabIndex",Number(t??-1)),!this[mr])return this.hasAttribute("tabindex")?void(this[vr]=this.tabIndex):(this[vr]=null,void this[gr]())}else super.attributeChangedCallback(e,t,o)}[(o=fr,i=vr,r=mr,gr)](){const e=this[ur]?0:-1,t=this[vr]??e;this[mr]=!0,this.tabIndex=t,this[mr]=!1}}return t([je({noAccessor:!0})],a.prototype,"tabIndex",void 0),a}(De);class wr extends _r{get selected(){return this.active}set selected(e){this.active=e}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e=be`<div class="indicator"></div>`;return be`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${dt(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator?xe:e}
      </div>
      ${this.fullWidthIndicator?e:xe}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(e){await 0,e.defaultPrevented||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}handleContentClick(e){e.stopPropagation(),this.click()}[(br=yr,xr)](e){if(!this[yr])return;this[yr].getAnimations().forEach((e=>{e.cancel()}));const t=this.getKeyframes(e);null!==t&&this[yr].animate(t,{duration:250,easing:xt})}getKeyframes(e){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!this.active)return t?[{opacity:1},{transform:"none"}]:null;const o={},i=e[yr]?.getBoundingClientRect()??{},r=i.left,a=i.width,s=this[yr].getBoundingClientRect(),n=s.left,l=a/s.width;return t||void 0===r||void 0===n||isNaN(l)?o.opacity=0:o.transform=`translateX(${(r-n).toFixed(4)}px) scaleX(${l.toFixed(4)})`,[o,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const e of this.assignedDefaultNodes){const t=e.nodeType===Node.TEXT_NODE&&!!e.wholeText.match(/\S/);if(e.nodeType===Node.ELEMENT_NODE||t)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}t([je({type:Boolean,reflect:!0,attribute:"md-tab"})],wr.prototype,"isTab",void 0),t([je({type:Boolean,reflect:!0})],wr.prototype,"active",void 0),t([je({type:Boolean})],wr.prototype,"selected",null),t([je({type:Boolean,attribute:"has-icon"})],wr.prototype,"hasIcon",void 0),t([je({type:Boolean,attribute:"icon-only"})],wr.prototype,"iconOnly",void 0),t([He(".indicator")],wr.prototype,br,void 0),t([qe()],wr.prototype,"fullWidthIndicator",void 0),t([Ge({flatten:!0})],wr.prototype,"assignedDefaultNodes",void 0),t([Ke({slot:"icon",flatten:!0})],wr.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Cr extends wr{constructor(){super(...arguments),this.fullWidthIndicator=!0}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $r=L`:host{--_active-indicator-color: var(--md-secondary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-secondary-tab-active-indicator-height, 2px);--_active-label-text-color: var(--md-secondary-tab-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-secondary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-secondary-tab-container-elevation, 0);--_container-height: var(--md-secondary-tab-container-height, 48px);--_focus-label-text-color: var(--md-secondary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-secondary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-secondary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-secondary-tab-hover-state-layer-opacity, 0.08);--_label-text-font: var(--md-secondary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-secondary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-secondary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-secondary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-secondary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-secondary-tab-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-secondary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-secondary-tab-active-focus-icon-color, );--_active-focus-label-text-color: var(--md-secondary-tab-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: var(--md-secondary-tab-active-hover-icon-color, );--_active-hover-label-text-color: var(--md-secondary-tab-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-secondary-tab-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-opacity: var(--md-secondary-tab-active-hover-state-layer-opacity, 0.08);--_active-icon-color: var(--md-secondary-tab-active-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-indicator-shape: var(--md-secondary-tab-active-indicator-shape, 0);--_active-pressed-icon-color: var(--md-secondary-tab-active-pressed-icon-color, );--_active-pressed-label-text-color: var(--md-secondary-tab-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-secondary-tab-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-opacity: var(--md-secondary-tab-active-pressed-state-layer-opacity, 0.12);--_label-text-color: var(--md-secondary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-secondary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-secondary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-size: var(--md-secondary-tab-icon-size, 24px);--_icon-color: var(--md-secondary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-secondary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-secondary-tab-container-shape-start-start, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-secondary-tab-container-shape-start-end, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-secondary-tab-container-shape-end-end, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-secondary-tab-container-shape-end-start, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}
`,Er=L`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ar extends Cr{}e(Ar,"styles",[Er,$r]),customElements.define("oscd-secondary-tab",Ar);class kr{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){return null!==this.internalDisplayText?this.internalDisplayText:this.menuItemController.typeaheadText}setDisplayText(e){this.internalDisplayText=e}constructor(e,t){this.host=e,this.internalDisplayText=null,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=e=>{this.menuItemController.onKeydown(e)},this.lastSelected=this.host.selected,this.menuItemController=new er(e,t),e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected===this.host.selected||this.firstUpdate||(this.host.selected?this.host.dispatchEvent(new Event("request-selection",{bubbles:!0,composed:!0})):this.host.dispatchEvent(new Event("request-deselection",{bubbles:!0,composed:!0}))),this.lastSelected=this.host.selected,this.firstUpdate=!1}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ir=vt(De);class Sr extends Ir{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new kr(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(be`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return be`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||xe}
        aria-selected=${this.ariaSelected||xe}
        aria-checked=${this.ariaChecked||xe}
        aria-expanded=${this.ariaExpanded||xe}
        aria-haspopup=${this.ariaHasPopup||xe}
        class="list-item ${dt(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${e}</li
      >
    `}renderRipple(){return be` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return be` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return be`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}Sr.shadowRootOptions={...De.shadowRootOptions,delegatesFocus:!0},t([je({type:Boolean,reflect:!0})],Sr.prototype,"disabled",void 0),t([je({type:Boolean,attribute:"md-menu-item",reflect:!0})],Sr.prototype,"isMenuItem",void 0),t([je({type:Boolean})],Sr.prototype,"selected",void 0),t([je()],Sr.prototype,"value",void 0),t([He(".list-item")],Sr.prototype,"listItemRoot",void 0),t([Ke({slot:"headline"})],Sr.prototype,"headlineElements",void 0),t([Ke({slot:"supporting-text"})],Sr.prototype,"supportingTextElements",void 0),t([Ge({slot:""})],Sr.prototype,"defaultElements",void 0),t([je({attribute:"typeahead-text"})],Sr.prototype,"typeaheadText",null),t([je({attribute:"display-text"})],Sr.prototype,"displayText",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Tr extends Sr{}e(Tr,"styles",[ir]),customElements.define("oscd-select-option",Tr);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Or extends De{get activeTab(){return this.tabs.find((e=>e.active))??null}set activeTab(e){e&&this.activateTab(e)}get activeTabIndex(){return this.tabs.findIndex((e=>e.active))}set activeTabIndex(e){const t=()=>{const t=this.tabs[e];t&&this.activateTab(t)};this.slotElement?t():this.updateComplete.then(t)}get focusedTab(){return this.tabs.find((e=>e.matches(":focus-within")))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(e){await this.updateComplete;const{tabs:t}=this;if(e??=this.activeTab,!e||!t.includes(e)||!this.tabsScrollerElement)return;for(const e of this.tabs)await e.updateComplete;const o=e.offsetLeft,i=e.offsetWidth,r=this.scrollLeft,a=o-48,s=o+i-this.offsetWidth+48,n=Math.min(a,Math.max(s,r)),l=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:l,top:0,left:n})}render(){return be`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `}async handleTabClick(e){const t=e.target;var o;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(await 0,e.defaultPrevented||!((o=t)instanceof HTMLElement&&o.hasAttribute("md-tab"))||t.active)||this.activateTab(t)}activateTab(e){const{tabs:t}=this,o=this.activeTab;if(t.includes(e)&&o!==e){for(const o of t)o.active=o===e;if(o){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(const e of t)e.active=e===o;return}e[xr](o)}this.updateFocusableTab(e),this.scrollToTab(e)}}updateFocusableTab(e){for(const t of this.tabs)t.tabIndex=t===e?0:-1}async handleKeydown(e){await 0;const t="ArrowLeft"===e.key,o="ArrowRight"===e.key,i="Home"===e.key,r="End"===e.key;if(e.defaultPrevented||!t&&!o&&!i&&!r)return;const{tabs:a}=this;if(a.length<2)return;let s;if(e.preventDefault(),i||r)s=i?0:a.length-1;else{const e="rtl"===getComputedStyle(this).direction?t:o,{focusedTab:i}=this;if(i){const t=this.tabs.indexOf(i);s=e?t+1:t-1,s>=a.length?s=0:s<0&&(s=a.length-1)}else s=e?0:a.length-1}const n=a[s];n.focus(),this.autoActivate?this.activateTab(n):this.updateFocusableTab(n)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;const{activeTab:e}=this;e&&this.updateFocusableTab(e)}handleSlotChange(){const e=this.tabs[0];!this.activeTab&&e&&this.activateTab(e),this.scrollToTab(this.activeTab)}}t([Ke({flatten:!0,selector:"[md-tab]"})],Or.prototype,"tabs",void 0),t([je({type:Number,attribute:"active-tab-index"})],Or.prototype,"activeTabIndex",null),t([je({type:Boolean,attribute:"auto-activate"})],Or.prototype,"autoActivate",void 0),t([He(".tabs")],Or.prototype,"tabsScrollerElement",void 0),t([He("slot")],Or.prototype,"slotElement",void 0);const Rr=L`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class zr extends Or{}e(zr,"styles",[Rr]),customElements.define("oscd-tabs",zr);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Pr=L`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;function Lr(e){return e.currentTarget===e.target&&(e.composedPath()[0]===e.target&&(!e.target.disabled&&!function(e){const t=Nr;t&&(e.preventDefault(),e.stopImmediatePropagation());return async function(){Nr=!0,await null,Nr=!1}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),t}(e)))}let Nr=!1;const Dr=vt(Gt(De));class Mr extends Dr{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Wt].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=!this.href&&(this.disabled||this.softDisabled),t=this.href?this.renderLink():this.renderButton(),o=this.href?"link":"button";return be`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${o}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${o}
        ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:o}=this;return be`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||xe}
      aria-label="${e||xe}"
      aria-haspopup="${t||xe}"
      aria-expanded="${o||xe}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:o}=this;return be`<a
      id="link"
      class="button"
      aria-label="${e||xe}"
      aria-haspopup="${t||xe}"
      aria-expanded="${o||xe}"
      href=${this.href}
      download=${this.download||xe}
      target=${this.target||xe}
      >${this.renderContent()}
    </a>`}renderContent(){const e=be`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return be`
      <span class="touch"></span>
      ${this.trailingIcon?xe:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:xe}
    `}handleClick(e){if(!this.href&&this.softDisabled)return e.stopImmediatePropagation(),void e.preventDefault();Lr(e)&&this.buttonElement&&(this.focus(),function(e){const t=new MouseEvent("click",{bubbles:!0});e.dispatchEvent(t)}(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Yt(Mr),Mr.formAssociated=!0,Mr.shadowRootOptions={mode:"open",delegatesFocus:!0},t([je({type:Boolean,reflect:!0})],Mr.prototype,"disabled",void 0),t([je({type:Boolean,attribute:"soft-disabled",reflect:!0})],Mr.prototype,"softDisabled",void 0),t([je()],Mr.prototype,"href",void 0),t([je()],Mr.prototype,"download",void 0),t([je()],Mr.prototype,"target",void 0),t([je({type:Boolean,attribute:"trailing-icon",reflect:!0})],Mr.prototype,"trailingIcon",void 0),t([je({type:Boolean,attribute:"has-icon",reflect:!0})],Mr.prototype,"hasIcon",void 0),t([je()],Mr.prototype,"type",void 0),t([je({reflect:!0})],Mr.prototype,"value",void 0),t([He(".button")],Mr.prototype,"buttonElement",void 0),t([Ke({slot:"icon",flatten:!0})],Mr.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ur extends Mr{}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Br=L`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class Fr extends Ur{}
/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */function jr(e){return"object"==typeof e&&null!==e&&Object.entries(e).every((([e,t])=>"string"==typeof e&&(null===t||"string"==typeof t)))}function qr(e){return e instanceof Array&&e.every((e=>function(e){if(qr(e))return!0;return Wr(e)||Vr(e)||Kr(e)||Hr(e)}(e)))}function Vr(e){return e.element instanceof Element&&"string"==typeof e.textContent}function Hr(e){return void 0===e.parent&&e.node instanceof Node}function Wr(e){const t=e;return t.element instanceof Element&&(jr(t.attributes)||"object"==typeof(o=t.attributesNS)&&null!==o&&Object.entries(o).every((([e,t])=>"string"==typeof e&&jr(t))));var o}function Kr(e){return(e.parent instanceof Element||e.parent instanceof Document||e.parent instanceof DocumentFragment)&&e.node instanceof Node&&(e.reference instanceof Node||null===e.reference)}function Gr(e){return Kr(e)?function({parent:e,node:t,reference:o}){try{const{parentNode:i,nextSibling:r}=t;return e.insertBefore(t,o),i?{node:t,parent:i,reference:r}:{node:t}}catch(e){return[]}}(e):Hr(e)?function({node:e}){const{parentNode:t,nextSibling:o}=e;return t?(t.removeChild(e),{node:e,parent:t,reference:o}):[]}(e):Wr(e)?function({element:e,attributes:t={},attributesNS:o={}}){const i={...t},r={...o};if(t&&Object.keys(t).reverse().forEach((t=>{i[t]=e.getAttribute(t)})),t)for(const o of Object.entries(t))try{const[t,i]=o;null===i?e.removeAttribute(t):e.setAttribute(t,i)}catch(e){delete i[o[0]]}if(o&&Object.entries(o).forEach((([t,o])=>{Object.keys(o).reverse().forEach((o=>{r[t]={...r[t],[o]:e.getAttributeNS(t,o.split(":").pop())}}))})),o)for(const t of Object.entries(o)){const[o,i]=t;for(const t of Object.entries(i))try{const[i,r]=t;null===r?e.removeAttributeNS(o,i.split(":").pop()):e.setAttributeNS(o,i,r)}catch(e){delete r[o][t[0]]}}return{element:e,attributes:i,attributesNS:r}}(e):Vr(e)?function({element:e,textContent:t}){const{childNodes:o}=e,i=Array.from(o).map((t=>({parent:e,node:t,reference:null})));return e.textContent=t,[{element:e,textContent:""},...i]}(e):qr(e)?e.map((e=>Gr(e))).reverse().flat(1/0):[]}var Yr;e(Fr,"styles",[Pr,Br]),customElements.define("oscd-text-button",Fr);class Xr{constructor(){this.past=[],this.future=[],Yr.set(this,[])}commit(e,{title:t,squash:i}={}){const r=i&&this.past.length?this.past[this.past.length-1]:{undo:[],redo:[]},a=Gr(e);return r.undo.unshift(...[a].flat(1/0)),r.redo.push(...[e].flat(1/0)),t&&(r.title=t),i&&this.past.length&&this.past.pop(),this.past.push(r),this.future=[],o(this,Yr,"f").forEach((e=>e(r))),r}undo(){const e=this.past.pop();if(e)return Gr(e.undo),this.future.unshift(e),e}redo(){const e=this.future.shift();if(e)return Gr(e.redo),this.past.push(e),e}subscribe(e){const t=o(this,Yr,"f").length;return o(this,Yr,"f").push(e),()=>(o(this,Yr,"f").splice(t,1),e)}}Yr=new WeakMap;const Jr=["de"];const Zr=new Map;function Qr(e){return Zr.has(e)||Zr.set(e,`oscd-p${function(e){let t=3735928559,o=1103547991;for(let i,r=0;r<e.length;r++)i=e.charCodeAt(r),t=Math.imul(t^i,2654435761),o=Math.imul(o^i,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),(o>>>0).toString(16).padStart(8,"0")+(t>>>0).toString(16).padStart(8,"0")}(e)}`),Zr.get(e)}function ea(e){return"object"==typeof e&&null!==e&&"tagName"in e&&"string"==typeof e.tagName}function ta(e){const t=[];ea(e)||t.push("tagName");const o=e;if(t.push(...["name","icon"].filter((e=>!o[e]||"string"!=typeof o[e]))),void 0!==o.requireDoc&&"boolean"!=typeof o.requireDoc&&t.push("requireDoc"),void 0===o.translations||"object"==typeof o.translations&&!Object.values(o.translations).some((e=>"string"!=typeof e))||t.push("translations"),!(t.length>0))return o;console.error(`[Invalid Plugin]\n${JSON.stringify(e,null,2)}\nMissing/Invalid fields [${t.join(",")}] - skipping.`)}function oa(e){return e.map((e=>{if(ea(e))return ta(e);if(!function(e){return"object"==typeof e&&null!==e&&"src"in e&&"string"==typeof e.src}(e))return void console.error(`[Invalid Plugin] Requires a tagName or src - skipping. ${JSON.stringify(e)}`);const{src:t,...o}=e,i=Qr(t),r=ta({...o,tagName:i});if(!r)return;if(customElements.get(i))return r;const a=new URL(t,window.location.href).toString();return import(a).then((e=>{customElements?.get(i)||customElements.define(i,e.default)})).catch((t=>{console.error(`[Invalid Plugin] Failed to load plugin ${e.name} from ${a}`,t);const o=function(e){const t="Error: Plugin failed to load.",o=`Plugin: ${JSON.stringify(e)}`;return new Function(`\n  return class extends HTMLElement {\n\n    connectedCallback() {\n      this.innerHTML = '<h1>${t}</h1><p>${o}</p><emphasis>Check your plugins.json</emphasis>';\n    }\n\n    async run() {\n      alert('${t}\\n\\n ${o}; \\n\\n Check your plugins.json');\n    }\n  }`)()}(e);customElements.define(i,o)})),r})).filter((e=>void 0!==e))}var ia,ra;const aa=window.customElements.define;window.customElements.define=(e,t,o)=>{customElements.get(e)||aa.call(window.customElements,e,t,o)};const{getLocale:sa,setLocale:na}=(la={sourceLocale:"en",targetLocales:Jr,loadLocale:e=>import(new URL(`./locales/${e}.js`,import.meta.url).href)},function(e){if(n)throw new Error("lit-localize can only be configured once");s=e,n=!0}(((e,t)=>b($,e,t))),E=_=la.sourceLocale,w=new Set(la.targetLocales),w.add(la.sourceLocale),C=la.loadLocale,{getLocale:I,setLocale:S});var la;function da(e,t="actionItems"){return be`<oscd-filled-icon-button
    slot="${t}"
    aria-label="${e.getName()}"
    ?disabled=${e.isDisabled()}
    @click=${e.action}
    ><oscd-icon>${e.icon}</oscd-icon></oscd-filled-icon-button
  >`}function ca(e){return be`
    <oscd-list-item
      type="button"
      .disabled=${e.isDisabled()}
      @click=${e.action}
    >
      <oscd-icon slot="start">${e.icon}</oscd-icon>
      <span>${e.getName()}</span>
    </oscd-list-item>
  `}let ha=class extends De{isEditable(e){return!!this.editable.find((t=>e.toLowerCase().endsWith(`.${t}`)))}get editableDocs(){return Object.keys(this.docs).filter((e=>this.isEditable(e)))}get docs(){return this._docs}set docs(e){this._docs=e,this.onDocsChanged()}onDocsChanged(){this.stateVersion+=1}get doc(){return this.docs[this.docName]}get last(){return this.xmlEditor.past.length-1}get canUndo(){return this.xmlEditor.past.length>=0}get canRedo(){return this.xmlEditor.future.length>=0}get plugins(){return o(this,ia,"f")}set plugins(e){!function(e,t,o,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===i?r.call(e,o):r?r.value=o:t.set(e,o)}(this,ia,Object.entries(e).reduce(((e,[t,o])=>{const i=oa(o);return e[t]=i,e}),{menu:[],editor:[],background:[]}),"f")}handleOpenDoc({detail:{docName:e,doc:t}}){this.docs={...this.docs,[e]:t},this.isEditable(e)&&(this.docName=e),this.requestUpdate()}undo(e=1){!this.canUndo||e<1||(this.xmlEditor.undo(),e>1&&this.undo(e-1),this.requestUpdate())}redo(e=1){!this.canRedo||e<1||(this.xmlEditor.redo(),e>1&&this.redo(e-1),this.requestUpdate())}get locale(){return sa()}set locale(e){try{na(e)}catch{}}get editor(){return this.editors[this.editorIndex]?.tagName??""}get menu(){return(this.plugins.menu?.map((({name:e,tagName:t,requireDoc:o,icon:i,translations:r})=>({icon:i,getName:()=>r?.[this.locale]||e,isDisabled:()=>(o&&!this.docName)??!1,tagName:t,action:()=>{t&&(this.shadowRoot.querySelector(t).run?.(),this.menuUI.opened=!1)}}))).filter((e=>void 0!==e))).concat(o(this,ra,"f"))}get editors(){return this.plugins.editor?.map((({name:e,tagName:t,requireDoc:o,icon:i,translations:r})=>({icon:i,getName:()=>r?.[this.locale]||e,isDisabled:()=>(o&&!this.docName)??!1,tagName:t})))}handleKeyPress(e){e.ctrlKey&&Object.prototype.hasOwnProperty.call(this.hotkeys,e.key)&&(this.hotkeys[e.key](),e.preventDefault())}constructor(){super(),this.editable=["cid","icd","iid","scd","sed","ssd"],this._docs={},this.docName="",this.xmlEditor=new Xr,this.stateVersion=-1,ia.set(this,{menu:[],editor:[],background:[]}),this.editorIndex=0,this.controls={undo:{icon:"undo",getName:()=>s("Undo"),action:()=>{this.undo(),this.menuUI.opened=!1},isDisabled:()=>!this.canUndo},redo:{icon:"redo",getName:()=>s("Redo"),action:()=>{this.redo(),this.menuUI.opened=!1},isDisabled:()=>!this.canRedo},menu:{icon:"menu",getName:()=>s("Menu"),action:async()=>{this.menuUI.opened=!this.menuUI.opened,await this.menuUI.updateComplete,this.menuUI.opened&&this.menuUI.querySelector("oscd-list").focus()},isDisabled:()=>!1}},ra.set(this,[this.controls.undo,this.controls.redo]),this.hotkeys={m:this.controls.menu.action,z:this.controls.undo.action,y:this.controls.redo.action,Z:this.controls.redo.action},document.addEventListener("keydown",(e=>this.handleKeyPress(e))),this.addEventListener("oscd-open",(e=>this.handleOpenDoc(e))),this.addEventListener("oscd-edit-v2",(e=>{this.xmlEditor.commit(e.detail.edit)})),this.xmlEditor.subscribe((()=>{this.stateVersion+=1}))}updated(e){super.updated(e),this.updateComplete.then((()=>{const e=this.shadowRoot.querySelector("oscd-tabs");e&&e.activeTabIndex!==this.editorIndex&&(e.activeTabIndex=this.editorIndex)}))}renderPlugin(e){const t=(e=>({_$litStatic$:e,r:Ye}))(e);return Qe`<${t} 
              .locale="${this.locale}"
              .docName="${this.docName}"
              .doc=${this.doc}
              .docs=${this.docs} 
              .editCount=${this.stateVersion}
              .stateVersion=${this.stateVersion}
              .editor=${this.xmlEditor}>
            </${t}>`}render(){return be`<oscd-app-bar slot="appContent">
        ${da(this.controls.menu,"actionStart")}
        <div slot="title" id="title">
          ${this.editableDocs.length>1?be`<oscd-filled-icon-button
                id="fileMenuButton"
                @click=${()=>this.fileMenuUI.show()}
                ><oscd-icon>arrow_drop_down</oscd-icon></oscd-filled-icon-button
              >`:xe}
          ${this.docName}
          ${this.docName?be`<oscd-filled-icon-button
                @click=${()=>this.editFileUI.show()}
                ><oscd-icon>edit</oscd-icon></oscd-filled-icon-button
              >`:xe}
          <oscd-menu
            fixed
            id="fileMenu"
            anchor="fileMenuButton"
            corner="BOTTOM_END"
          >
            ${this.editableDocs.map(((e,t)=>be`<oscd-menu-item
                  @click=${()=>{this.docName=e}}
                  ?disabled=${!this.isEditable(e)}
                  ?selected=${this.docName===e}
                  id=${t}
                  >${e}</oscd-menu-item
                >`))}
          </oscd-menu>
        </div>

        <div slot="actionEnd">
          ${o(this,ra,"f").map((e=>da(e)))}
        </div>

        <oscd-tabs
          .activeTabIndex=${this.editorIndex}
          @change=${e=>{const t=e.currentTarget;this.editorIndex=t.activeTabIndex}}
        >
          ${this.editors.map((e=>e.isDisabled()?xe:be`<oscd-secondary-tab>
                  <oscd-icon slot="icon">${e.icon}</oscd-icon>
                  ${e.getName()}
                </oscd-secondary-tab>`))}
        </oscd-tabs>
      </oscd-app-bar>

      <oscd-navigation-drawer hasheader type="modal" id="menu">
        <oscd-navigation-drawer-header>
          <span slot="headline">${s("Menu")}</span>
          ${this.docName?be`<span slot="supporting-text">${this.docName}</span>`:""}
        </oscd-navigation-drawer-header>
        <oscd-list>
          <oscd-divider></oscd-divider>
          ${this.menu.map(ca)}
        </oscd-list>
      </oscd-navigation-drawer>

      ${this.editor?this.renderPlugin(this.editor):xe}

      <oscd-dialog
        id="editFile"
        @closed=${e=>{"remove"===e.target.returnValue&&(delete this.docs[this.docName],this.docName=this.editableDocs[0]||"")}}
      >
        <div slot="headline">
          <oscd-icon>description</oscd-icon>${this.docName}
        </div>
        <form slot="content" id="edit-file-form" method="dialog">
          <oscd-filled-text-field
            id="fileName"
            label="${s("Filename")}"
            value="${this.docName.replace(/\.[^.]+$/,"")}"
            @input=${e=>{const t=e.target,{value:o}=t,i=`${o}.${this.fileExtensionUI.value}`;i in this.docs&&i!==this.docName?t.setCustomValidity("File already exists!"):t.setCustomValidity(""),t.reportValidity()}}
          ></oscd-filled-text-field>
          <oscd-filled-select
            label="${s("Extension")}"
            fixedMenuPosition
            id="fileExtension"
            @selected=${()=>this.fileNameUI.reportValidity()}
          >
            ${this.editable.map((e=>be`<oscd-select-option
                  ?selected=${this.docName.endsWith(`.${e}`)}
                  value="${e}"
                  >${e}</oscd-select-option
                >`))}
          </oscd-filled-select>
        </form>
        <div slot="actions">
          <oscd-text-button
            form="edit-file-form"
            class="edit-dialog-remove-button"
            value="remove"
          >
            <oscd-icon slot="icon">delete</oscd-icon>
            ${s("Close file")}
          </oscd-text-button>
          <oscd-text-button form="edit-file-form" value="close">
            ${s("Cancel")}
          </oscd-text-button>
          <oscd-text-button
            @click=${()=>{if(!this.fileNameUI.checkValidity())return void this.fileNameUI.reportValidity();const e=`${this.fileNameUI.value}.${this.fileExtensionUI.value}`,t=this.docs[this.docName];delete this.docs[this.docName],this.docs={...this.docs,[e]:t},this.docName=e,this.editFileUI.close()}}
            trailing-icon
          >
            <oscd-icon slot="icon">edit</oscd-icon>
            ${s("Rename")}
          </oscd-text-button>
        </div>
      </oscd-dialog>

      <aside>
        <div class="menu-plugins">
          ${this.plugins.menu.map((e=>this.renderPlugin(e.tagName)))}
        </div>
        <div class="background-plugins">
          ${this.plugins.background.filter((e=>!e.requireDoc||!!this.docName)).map((e=>this.renderPlugin(e.tagName)))}
        </div>
      </aside> `}firstUpdated(){const e=getComputedStyle(this.menuUI).getPropertyValue("--oscd-base2");document.body.style.background=e}};ia=new WeakMap,ra=new WeakMap,ha.styles=L`
    .fileext {
      opacity: 0.81;
    }

    .filename {
      caret-color: var(--oscd-secondary);
    }

    .filename:focus {
      outline: none;
    }

    aside {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    abbr {
      text-decoration: none;
    }

    @media (prefers-color-scheme: light) {
      * {
        --oscd-primary: var(--oscd-theme-primary, #2aa198);
        --oscd-secondary: var(--oscd-theme-secondary, #6c71c4);
        --oscd-base03: var(--oscd-theme-base03, #002b36);
        --oscd-base02: var(--oscd-theme-base02, #073642);
        --oscd-base01: var(--oscd-theme-base01, #586e75);
        --oscd-base00: var(--oscd-theme-base00, #657b83);
        --oscd-base0: var(--oscd-theme-base0, #839496);
        --oscd-base1: var(--oscd-theme-base1, #93a1a1);
        --oscd-base2: var(--oscd-theme-base2, #eee8d5);
        --oscd-base3: var(--oscd-theme-base3, #fdf6e3);

        --mdc-theme-text-disabled-on-light: rgba(255, 255, 255, 0.38);
      }
    }

    @media (prefers-color-scheme: dark) {
      * {
        --oscd-primary: var(--oscd-theme-secondary, #6c71c4);
        --oscd-secondary: var(--oscd-theme-primary, #2aa198);
        --oscd-base03: var(--oscd-theme-base3, #fdf6e3);
        --oscd-base02: var(--oscd-theme-base2, #eee8d5);
        --oscd-base01: var(--oscd-theme-base1, #93a1a1);
        --oscd-base00: var(--oscd-theme-base0, #839496);
        --oscd-base0: var(--oscd-theme-base00, #657b83);
        --oscd-base1: var(--oscd-theme-base01, #586e75);
        --oscd-base2: var(--oscd-theme-base02, #073642);
        --oscd-base3: var(--oscd-theme-base03, #002b36);
      }
    }

    * {
      --oscd-error: var(--oscd-theme-error, #dc322f);

      --oscd-text-font: var(--oscd-theme-text-font, 'Roboto');
      --oscd-icon-font: var(--oscd-theme-icon-font, 'Material Icons');
      --oscd-text-font-mono: var(--oscd-theme-text-font-mono, 'Roboto Mono');

      --oscd-warning: var(--oscd-theme-warning, #b58900);
      --md-sys-color-primary: var(--oscd-primary);
      --md-sys-color-on-primary: var(--oscd-base3);

      --md-sys-color-secondary: var(--oscd-secondary);
      --md-sys-color-on-secondary: var(--oscd-base3);
      --md-sys-color-secondary-container: var(--oscd-base2);

      --md-sys-color-surface: var(--oscd-base3);
      --md-sys-color-on-surface: var(--oscd-base00);
      --md-sys-color-surface-variant: var(--oscd-base3);
      --md-sys-color-on-surface-variant: var(--oscd-base00);
      --md-sys-color-surface-bright: var(--oscd-base2);
      --md-sys-color-surface-container: var(--oscd-base3);
      --md-sys-color-surface-container-high: var(--oscd-base3);
      --md-sys-color-surface-container-highest: var(--oscd-base3);

      --md-sys-color-outline-variant: var(--oscd-primary);
      --md-sys-color-scrim: #000000;
      --md-sys-color-error: var(--oscd-error);
      --md-sys-color-on-error: var(--oscd-base3);

      /* --md-menu-item-selected-label-text-color: var(--oscd-base01); */
      --md-icon-button-disabled-icon-color: var(--oscd-base3);

      /* MDC Theme Colors 
       * Needed for supporting any pluggins still using the depricated MWC Components
       */
      --mdc-theme-primary: var(--oscd-primary);
      --mdc-theme-secondary: var(--oscd-secondary);
      --mdc-theme-background: var(--oscd-base3);
      --mdc-theme-surface: var(--oscd-base3);
      --mdc-theme-on-primary: var(--oscd-base2);
      --mdc-theme-on-secondary: var(--oscd-base02);
      --mdc-theme-on-background: var(--oscd-base00);
      --mdc-theme-on-surface: var(--oscd-base00);
      --mdc-theme-text-primary-on-background: var(--oscd-base01);
      --mdc-theme-text-secondary-on-background: var(--oscd-base00);
      --mdc-theme-text-icon-on-background: var(--oscd-base00);
      --mdc-theme-error: var(--oscd-error);

      --mdc-button-disabled-ink-color: var(--oscd-base1);

      --mdc-drawer-heading-ink-color: var(--oscd-base00);

      --mdc-dialog-heading-ink-color: var(--oscd-base00);

      --mdc-text-field-fill-color: var(--oscd-base2);
      --mdc-text-field-ink-color: var(--oscd-base02);
      --mdc-text-field-label-ink-color: var(--oscd-base01);
      --mdc-text-field-idle-line-color: var(--oscd-base00);
      --mdc-text-field-hover-line-color: var(--oscd-base02);

      --mdc-select-fill-color: var(--oscd-base2);
      --mdc-select-ink-color: var(--oscd-base02);
      --mdc-select-label-ink-color: var(--oscd-base01);
      --mdc-select-idle-line-color: var(--oscd-base00);
      --mdc-select-hover-line-color: var(--oscd-base02);
      --mdc-select-dropdown-icon-color: var(--oscd-base01);

      --mdc-typography-font-family: var(--oscd-text-font);
      --mdc-icon-font: var(--oscd-icon-font);
    }

    oscd-navigation-drawer-header {
      --md-list-item-supporting-text-color: var(--md-sys-color-on-surface);
    }
    oscd-app-bar * {
      --md-filled-icon-button-disabled-container-opacity: 0;
      --md-filled-icon-button-disabled-icon-color: var(
        --md-sys-color-on-primary
      );
    }

    oscd-tabs {
      display: flex;
      flex-grow: 1;
      --md-secondary-tab-container-color: var(--oscd-primary);
    }
    oscd-secondary-tab {
      --md-sys-color-on-surface: var(--md-sys-color-on-primary);
      --md-sys-color-on-surface-variant: var(--md-sys-color-on-primary);
      --md-secondary-tab-active-indicator-color: var(--oscd-base2);
    }

    .edit-dialog-remove-button {
      --md-text-button-icon-color: var(--oscd-error);
      --md-text-button-label-text-color: var(--oscd-error);

      --md-text-button-focus-label-text-color: var(--oscd-error);
      --md-text-button-focus-icon-color: var(--oscd-error);

      --md-text-button-hover-label-text-color: var(--oscd-error);
      --md-text-button-hover-state-layer-color: var(--oscd-error);
      --md-text-button-hover-icon-color: var(--oscd-error);

      --md-text-button-pressed-label-text-color: var(--oscd-error);
      --md-text-button-pressed-state-layer-color: var(--oscd-error);
      --md-text-button-pressed-icon-color: var(--oscd-error);
    }

    #title {
      position: relative;
    }
  `,t([je({type:Array,reflect:!0})],ha.prototype,"editable",void 0),t([qe()],ha.prototype,"editableDocs",null),t([qe()],ha.prototype,"docs",null),t([je({type:String,reflect:!0})],ha.prototype,"docName",void 0),t([qe()],ha.prototype,"doc",null),t([qe()],ha.prototype,"xmlEditor",void 0),t([qe()],ha.prototype,"stateVersion",void 0),t([qe()],ha.prototype,"last",null),t([qe()],ha.prototype,"canUndo",null),t([qe()],ha.prototype,"canRedo",null),t([je({type:Object})],ha.prototype,"plugins",null),t([He("#editFile")],ha.prototype,"editFileUI",void 0),t([He("#menu")],ha.prototype,"menuUI",void 0),t([He("#fileName")],ha.prototype,"fileNameUI",void 0),t([He("#fileExtension")],ha.prototype,"fileExtensionUI",void 0),t([He("#fileMenu")],ha.prototype,"fileMenuUI",void 0),t([He("#fileMenuButton")],ha.prototype,"fileMenuButtonUI",void 0),t([je({type:String,reflect:!0})],ha.prototype,"locale",null),t([qe()],ha.prototype,"editorIndex",void 0),t([qe()],ha.prototype,"editor",null),t([qe()],ha.prototype,"menu",null),t([qe()],ha.prototype,"editors",null),ha=t([Ue("oscd-shell"),(e,t)=>(e.addInitializer(d),e)],ha),fetch("./plugins.json").then((e=>e.text())).then((e=>{const t=document.querySelector("oscd-shell");t.setAttribute("plugins",e);const o=new URL(document.location).searchParams;for(const[e,i]of o)t.setAttribute(e,i)}));const pa=document.querySelector("oscd-shell"),ua=new URL(document.location).searchParams;for(const[e,t]of ua)pa.setAttribute(e,t);
