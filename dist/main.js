let t=localStorage.getItem("lang")||document.documentElement.lang||"en";document.documentElement.lang=t;const e={en:{employees:"Employees",employeeList:"Employee List",addNew:"Add New",addEmployee:"Add Employee",deleteSelected:"Delete Selected",view:"View",table:"Table",list:"List",search:"Search",prev:"Prev",next:"Next",firstName:"First Name",lastName:"Last Name",dateOfEmployment:"Date of Employment",dateOfBirth:"Date of Birth",phone:"Phone Number",email:"Email Address",department:"Department",position:"Position",save:"Save",cancel:"Cancel",deleteConfirm:"Delete {name}?",bulkDeleteConfirm:"Delete {count} selected?",selectAll:"Select all",analytics:"Analytics",tech:"Tech",confirm:"Confirm",editConfirm:"Are you sure to edit this employee?",noData:"No data",edit:"Edit",delete:"Delete",requiredValidationText:"This field is required",birthDateValidationText:"Birth date must be before employment date.",phoneValidationText:"Phone must be 10 digits",emailValidationText:"Email is not valid"},tr:{employees:"Çalışanlar",employeeList:"Çalışan Listesi",addNew:"Yeni Ekle",addEmployee:"Çalışan Ekle",deleteSelected:"Seçilenleri Sil",view:"Görünüm",table:"Tablo",list:"Liste",search:"Ara",prev:"Önceki",next:"Sonraki",firstName:"Adı",lastName:"Soyadı",dateOfEmployment:"İşe Başlama Tarihi",dateOfBirth:"Doğum Tarihi",phone:"Telefon Numarası",email:"E-posta Adresi",department:"Bölüm",position:"Pozisyon",save:"Kaydet",cancel:"İptal",deleteConfirm:"{name} silinsin mi?",bulkDeleteConfirm:"{count} kayıt silinsin mi?",selectAll:"Hepsini seç",analytics:"Analitik",tech:"Teknoloji",confirm:"Onayla",editConfirm:"Bu çalışanı değiştirmek istediğinizden emin misiniz?",noData:"Veri yok",edit:"Güncelle",delete:"Sil",requiredValidationText:"Bu alan gerekli",birthDateValidationText:"Doğum tarihi işe alım tarihinden önce olmalıdır",phoneValidationText:"Telefon numarası 10 karakteri geçemez",emailValidationText:"Geçersiz email"}};function i(i,n={}){return(e[t]&&e[t][i]||i).replace(/\{(\w+)\}/g,((t,e)=>n[e]||""))}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=globalThis,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new a(i,t,o)},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:h,defineProperty:d,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,y=globalThis,b=y.trustedTypes,v=b?b.emptyScript:"",g=y.reactiveElementPolyfillSupport,$=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!h(t,e),k={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:x};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&d(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...f(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=n.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=n,this[n]=s.fromAttribute(e,t.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,s=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??x)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[$("elementProperties")]=new Map,E[$("finalized")]=new Map,g?.({ReactiveElement:E}),(y.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,_=S.trustedTypes,O=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,j="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+C,A=`<${N}>`,T=document,D=()=>T.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,R="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,z=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,q=/"/g,U=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),K=new WeakMap,G=T.createTreeWalker(T,129);function H(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":3===e?"<math>":"",r=B;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===B?"!--"===l[1]?r=I:void 0!==l[1]?r=z:void 0!==l[2]?(U.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=L):void 0!==l[3]&&(r=L):r===L?">"===l[0]?(r=s??B,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?L:'"'===l[3]?q:V):r===q||r===V?r=L:r===I||r===z?r=B:(r=L,s=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";o+=r===B?i+A:c>=0?(n.push(a),i.slice(0,c)+j+i.slice(c)+C+d):i+C+(-2===c?e:d)}return[H(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class X{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=X.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=G.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(j)){const e=c[o++],i=n.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?nt:"@"===r[1]?st:et}),n.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:s}),n.removeAttribute(t));if(U.test(n.tagName)){const t=n.textContent.split(C),e=t.length-1;if(e>0){n.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],D()),G.nextNode(),a.push({type:2,index:++s});n.append(t[e],D())}}}else if(8===n.nodeType)if(n.data===N)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(C,t+1));)a.push({type:7,index:s}),t+=C.length-1}s++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,n){if(e===F)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=P(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=Y(t,s._$AS(t,e.values),s,n)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??T).importNode(e,!0);G.currentNode=n;let s=G.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new ot(s,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(s=G.nextNode(),o++)}return G.currentNode=T,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),P(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(H(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Q(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new X(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new tt(this.O(D()),this.O(D()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=Y(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=Y(this,n[i+r],e,r),a===F&&(a=this._$AH[r]),o||=!P(a)||a!==this._$AH[r],a===J?t=J:t!==J&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class nt extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class st extends et{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??J)===F)return;const i=this._$AH,n=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==J&&(i===J||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=S.litHtmlPolyfillSupport;rt?.(X,tt),(S.litHtmlVersions??=[]).push("3.3.0");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new tt(e.insertBefore(D(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.0");class ht extends lt{static properties={open:{type:Boolean,reflect:!0},message:{type:String}};static styles=l`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      visibility: hidden;
    }
    :host([open]) {
      visibility: visible;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      max-width: 90%;
      width: 400px;
    }
    .footer {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 24px;
      text-align: center;
    }
    button {
      margin-left: 8px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
    button.cancel {
      background: #f0f0f0;
      color: #000;
    }
    button.confirm {
      background: #ff6600;
      color: #fff;
    }
  `;constructor(){super(),this.open=!1,this.message=""}render(){return W`
      <div class="overlay" @click=${this._cancel}>
        <div class="modal" @click=${t=>t.stopPropagation()}>
          <div>${this.message}</div>
          <div class="footer">
            <button class="confirm" @click=${this._confirm}>
              ${i("save")}
            </button>
            <button class="cancel" @click=${this._cancel}>
              ${i("cancel")}
            </button>
          </div>
        </div>
      </div>
    `}_confirm(){this.open=!1,this.dispatchEvent(new CustomEvent("confirmed",{bubbles:!0,composed:!0}))}_cancel(){this.open=!1,this.dispatchEvent(new CustomEvent("cancelled",{bubbles:!0,composed:!0}))}}function dt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}customElements.define("confirm-dialog",ht);var ut=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),ft=()=>Math.random().toString(36).substring(7).split("").join("."),pt={INIT:`@@redux/INIT${ft()}`,REPLACE:`@@redux/REPLACE${ft()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ft()}`};function mt(t){if("object"!=typeof t||null===t)return!1;let e=t;for(;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||null===Object.getPrototypeOf(t)}function yt(t,e,i){if("function"!=typeof t)throw new Error(dt(2));if("function"==typeof e&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error(dt(0));if("function"==typeof e&&void 0===i&&(i=e,e=void 0),void 0!==i){if("function"!=typeof i)throw new Error(dt(1));return i(yt)(t,e)}let n=t,s=e,o=new Map,r=o,a=0,l=!1;function c(){r===o&&(r=new Map,o.forEach(((t,e)=>{r.set(e,t)})))}function h(){if(l)throw new Error(dt(3));return s}function d(t){if("function"!=typeof t)throw new Error(dt(4));if(l)throw new Error(dt(5));let e=!0;c();const i=a++;return r.set(i,t),function(){if(e){if(l)throw new Error(dt(6));e=!1,c(),r.delete(i),o=null}}}function u(t){if(!mt(t))throw new Error(dt(7));if(void 0===t.type)throw new Error(dt(8));if("string"!=typeof t.type)throw new Error(dt(17));if(l)throw new Error(dt(9));try{l=!0,s=n(s,t)}finally{l=!1}return(o=r).forEach((t=>{t()})),t}u({type:pt.INIT});return{dispatch:u,subscribe:d,getState:h,replaceReducer:function(t){if("function"!=typeof t)throw new Error(dt(10));n=t,u({type:pt.REPLACE})},[ut]:function(){const t=d;return{subscribe(e){if("object"!=typeof e||null===e)throw new Error(dt(11));function i(){const t=e;t.next&&t.next(h())}i();return{unsubscribe:t(i)}},[ut](){return this}}}}}function bt(t){const e=Object.keys(t),i={};for(let n=0;n<e.length;n++){const s=e[n];"function"==typeof t[s]&&(i[s]=t[s])}const n=Object.keys(i);let s;try{!function(t){Object.keys(t).forEach((e=>{const i=t[e];if(void 0===i(void 0,{type:pt.INIT}))throw new Error(dt(12));if(void 0===i(void 0,{type:pt.PROBE_UNKNOWN_ACTION()}))throw new Error(dt(13))}))}(i)}catch(t){s=t}return function(t={},e){if(s)throw s;let o=!1;const r={};for(let s=0;s<n.length;s++){const a=n[s],l=i[a],c=t[a],h=l(c,e);if(void 0===h)throw e&&e.type,new Error(dt(14));r[a]=h,o=o||h!==c}return o=o||n.length!==Object.keys(t).length,o?r:t}}function vt(...t){return 0===t.length?t=>t:1===t.length?t[0]:t.reduce(((t,e)=>(...i)=>t(e(...i))))}var gt=Symbol.for("immer-nothing"),$t=Symbol.for("immer-draftable"),wt=Symbol.for("immer-state");function xt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var kt=Object.getPrototypeOf;function Et(t){return!!t&&!!t[wt]}function St(t){return!!t&&(Ot(t)||Array.isArray(t)||!!t[$t]||!!t.constructor?.[$t]||Tt(t)||Dt(t))}var _t=Object.prototype.constructor.toString();function Ot(t){if(!t||"object"!=typeof t)return!1;const e=kt(t);if(null===e)return!0;const i=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return i===Object||"function"==typeof i&&Function.toString.call(i)===_t}function jt(t,e){0===Ct(t)?Reflect.ownKeys(t).forEach((i=>{e(i,t[i],t)})):t.forEach(((i,n)=>e(n,i,t)))}function Ct(t){const e=t[wt];return e?e.type_:Array.isArray(t)?1:Tt(t)?2:Dt(t)?3:0}function Nt(t,e){return 2===Ct(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function At(t,e,i){const n=Ct(t);2===n?t.set(e,i):3===n?t.add(i):t[e]=i}function Tt(t){return t instanceof Map}function Dt(t){return t instanceof Set}function Pt(t){return t.copy_||t.base_}function Mt(t,e){if(Tt(t))return new Map(t);if(Dt(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const i=Ot(t);if(!0===e||"class_only"===e&&!i){const e=Object.getOwnPropertyDescriptors(t);delete e[wt];let i=Reflect.ownKeys(e);for(let n=0;n<i.length;n++){const s=i[n],o=e[s];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(kt(t),e)}{const e=kt(t);if(null!==e&&i)return{...t};const n=Object.create(e);return Object.assign(n,t)}}function Rt(t,e=!1){return It(t)||Et(t)||!St(t)||(Ct(t)>1&&(t.set=t.add=t.clear=t.delete=Bt),Object.freeze(t),e&&Object.entries(t).forEach((([t,e])=>Rt(e,!0)))),t}function Bt(){xt(2)}function It(t){return Object.isFrozen(t)}var zt,Lt={};function Vt(t){const e=Lt[t];return e||xt(0),e}function qt(){return zt}function Ut(t,e){e&&(Vt("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Wt(t){Ft(t),t.drafts_.forEach(Kt),t.drafts_=null}function Ft(t){t===zt&&(zt=t.parent_)}function Jt(t){return zt={drafts_:[],parent_:zt,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Kt(t){const e=t[wt];0===e.type_||1===e.type_?e.revoke_():e.revoked_=!0}function Gt(t,e){e.unfinalizedDrafts_=e.drafts_.length;const i=e.drafts_[0];return void 0!==t&&t!==i?(i[wt].modified_&&(Wt(e),xt(4)),St(t)&&(t=Ht(e,t),e.parent_||Xt(e,t)),e.patches_&&Vt("Patches").generateReplacementPatches_(i[wt].base_,t,e.patches_,e.inversePatches_)):t=Ht(e,i,[]),Wt(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==gt?t:void 0}function Ht(t,e,i){if(It(e))return e;const n=e[wt];if(!n)return jt(e,((s,o)=>Zt(t,n,e,s,o,i))),e;if(n.scope_!==t)return e;if(!n.modified_)return Xt(t,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const e=n.copy_;let s=e,o=!1;3===n.type_&&(s=new Set(e),e.clear(),o=!0),jt(s,((s,r)=>Zt(t,n,e,s,r,i,o))),Xt(t,e,!1),i&&t.patches_&&Vt("Patches").generatePatches_(n,i,t.patches_,t.inversePatches_)}return n.copy_}function Zt(t,e,i,n,s,o,r){if(Et(s)){const r=Ht(t,s,o&&e&&3!==e.type_&&!Nt(e.assigned_,n)?o.concat(n):void 0);if(At(i,n,r),!Et(r))return;t.canAutoFreeze_=!1}else r&&i.add(s);if(St(s)&&!It(s)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Ht(t,s),e&&e.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(i,n)||Xt(t,s)}}function Xt(t,e,i=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Rt(e,i)}var Yt={get(t,e){if(e===wt)return t;const i=Pt(t);if(!Nt(i,e))return function(t,e,i){const n=ee(e,i);return n?"value"in n?n.value:n.get?.call(t.draft_):void 0}(t,i,e);const n=i[e];return t.finalized_||!St(n)?n:n===te(t.base_,e)?(ne(t),t.copy_[e]=se(n,t)):n},has:(t,e)=>e in Pt(t),ownKeys:t=>Reflect.ownKeys(Pt(t)),set(t,e,i){const n=ee(Pt(t),e);if(n?.set)return n.set.call(t.draft_,i),!0;if(!t.modified_){const n=te(Pt(t),e),s=n?.[wt];if(s&&s.base_===i)return t.copy_[e]=i,t.assigned_[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(i,n)&&(void 0!==i||Nt(t.base_,e)))return!0;ne(t),ie(t)}return t.copy_[e]===i&&(void 0!==i||e in t.copy_)||Number.isNaN(i)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=i,t.assigned_[e]=!0),!0},deleteProperty:(t,e)=>(void 0!==te(t.base_,e)||e in t.base_?(t.assigned_[e]=!1,ne(t),ie(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0),getOwnPropertyDescriptor(t,e){const i=Pt(t),n=Reflect.getOwnPropertyDescriptor(i,e);return n?{writable:!0,configurable:1!==t.type_||"length"!==e,enumerable:n.enumerable,value:i[e]}:n},defineProperty(){xt(11)},getPrototypeOf:t=>kt(t.base_),setPrototypeOf(){xt(12)}},Qt={};function te(t,e){const i=t[wt];return(i?Pt(i):t)[e]}function ee(t,e){if(!(e in t))return;let i=kt(t);for(;i;){const t=Object.getOwnPropertyDescriptor(i,e);if(t)return t;i=kt(i)}}function ie(t){t.modified_||(t.modified_=!0,t.parent_&&ie(t.parent_))}function ne(t){t.copy_||(t.copy_=Mt(t.base_,t.scope_.immer_.useStrictShallowCopy_))}jt(Yt,((t,e)=>{Qt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Qt.deleteProperty=function(t,e){return Qt.set.call(this,t,e,void 0)},Qt.set=function(t,e,i){return Yt.set.call(this,t[0],e,i,t[0])};function se(t,e){const i=Tt(t)?Vt("MapSet").proxyMap_(t,e):Dt(t)?Vt("MapSet").proxySet_(t,e):function(t,e){const i=Array.isArray(t),n={type_:i?1:0,scope_:e?e.scope_:qt(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,o=Yt;i&&(s=[n],o=Qt);const{revoke:r,proxy:a}=Proxy.revocable(s,o);return n.draft_=a,n.revoke_=r,a}(t,e);return(e?e.scope_:qt()).drafts_.push(i),i}function oe(t){if(!St(t)||It(t))return t;const e=t[wt];let i;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,i=Mt(t,e.scope_.immer_.useStrictShallowCopy_)}else i=Mt(t,!0);return jt(i,((t,e)=>{At(i,t,oe(e))})),e&&(e.finalized_=!1),i}var re=new class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,e,i)=>{if("function"==typeof t&&"function"!=typeof e){const i=e;e=t;const n=this;return function(t=i,...s){return n.produce(t,(t=>e.call(this,t,...s)))}}let n;if("function"!=typeof e&&xt(6),void 0!==i&&"function"!=typeof i&&xt(7),St(t)){const s=Jt(this),o=se(t,void 0);let r=!0;try{n=e(o),r=!1}finally{r?Wt(s):Ft(s)}return Ut(s,i),Gt(n,s)}if(!t||"object"!=typeof t){if(n=e(t),void 0===n&&(n=t),n===gt&&(n=void 0),this.autoFreeze_&&Rt(n,!0),i){const e=[],s=[];Vt("Patches").generateReplacementPatches_(t,n,e,s),i(e,s)}return n}xt(1)},this.produceWithPatches=(t,e)=>{if("function"==typeof t)return(e,...i)=>this.produceWithPatches(e,(e=>t(e,...i)));let i,n;const s=this.produce(t,e,((t,e)=>{i=t,n=e}));return[s,i,n]},"boolean"==typeof t?.autoFreeze&&this.setAutoFreeze(t.autoFreeze),"boolean"==typeof t?.useStrictShallowCopy&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){St(t)||xt(8),Et(t)&&(t=function(t){Et(t)||xt(10);return oe(t)}(t));const e=Jt(this),i=se(t,void 0);return i[wt].isManual_=!0,Ft(e),i}finishDraft(t,e){const i=t&&t[wt];i&&i.isManual_||xt(9);const{scope_:n}=i;return Ut(n,e),Gt(void 0,n)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let i;for(i=e.length-1;i>=0;i--){const n=e[i];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}i>-1&&(e=e.slice(i+1));const n=Vt("Patches").applyPatches_;return Et(t)?n(t,e):this.produce(t,(t=>n(t,e)))}},ae=re.produce;function le(t){return({dispatch:e,getState:i})=>n=>s=>"function"==typeof s?s(e,i,t):n(s)}re.produceWithPatches.bind(re),re.setAutoFreeze.bind(re),re.setUseStrictShallowCopy.bind(re),re.applyPatches.bind(re),re.createDraft.bind(re),re.finishDraft.bind(re);var ce=le(),he=le,de="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?vt:vt.apply(null,arguments)};function ue(t,e){function i(...i){if(e){let n=e(...i);if(!n)throw new Error(Ee(0));return{type:t,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:t,payload:i[0]}}return i.toString=()=>`${t}`,i.type=t,i.match=e=>function(t){return mt(t)&&"type"in t&&"string"==typeof t.type}(e)&&e.type===t,i}var fe=class t extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,t.prototype)}static get[Symbol.species](){return t}concat(...t){return super.concat.apply(this,t)}prepend(...e){return 1===e.length&&Array.isArray(e[0])?new t(...e[0].concat(this)):new t(...e.concat(this))}};function pe(t){return St(t)?ae(t,(()=>{})):t}function me(t,e,i){return t.has(e)?t.get(e):t.set(e,i(e)).get(e)}var ye=t=>e=>{setTimeout(e,t)},be=t=>function(e){const{autoBatch:i=!0}=e??{};let n=new fe(t);return i&&n.push(((t={type:"raf"})=>e=>(...i)=>{const n=e(...i);let s=!0,o=!1,r=!1;const a=new Set,l="tick"===t.type?queueMicrotask:"raf"===t.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:ye(10):"callback"===t.type?t.queueNotification:ye(t.timeout),c=()=>{r=!1,o&&(o=!1,a.forEach((t=>t())))};return Object.assign({},n,{subscribe(t){const e=n.subscribe((()=>s&&t()));return a.add(t),()=>{e(),a.delete(t)}},dispatch(t){try{return s=!t?.meta?.RTK_autoBatch,o=!s,o&&(r||(r=!0,l(c))),n.dispatch(t)}finally{s=!0}}})})("object"==typeof i?i:void 0)),n};function ve(t){const e={},i=[];let n;const s={addCase(t,i){const n="string"==typeof t?t:t.type;if(!n)throw new Error(Ee(28));if(n in e)throw new Error(Ee(29));return e[n]=i,s},addMatcher:(t,e)=>(i.push({matcher:t,reducer:e}),s),addDefaultCase:t=>(n=t,s)};return t(s),[e,i,n]}var ge=Symbol.for("rtk-slice-createasyncthunk");function $e(t,e){return`${t}/${e}`}function we({creators:t}={}){const e=t?.asyncThunk?.[ge];return function(t){const{name:i,reducerPath:n=i}=t;if(!i)throw new Error(Ee(11));const s=("function"==typeof t.reducers?t.reducers(function(){function t(t,e){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...e}}return t.withTypes=()=>t,{reducer:t=>Object.assign({[t.name]:(...e)=>t(...e)}[t.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(t,e)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:e}),asyncThunk:t}}()):t.reducers)||{},o=Object.keys(s),r={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},a={addCase(t,e){const i="string"==typeof t?t:t.type;if(!i)throw new Error(Ee(12));if(i in r.sliceCaseReducersByType)throw new Error(Ee(13));return r.sliceCaseReducersByType[i]=e,a},addMatcher:(t,e)=>(r.sliceMatchers.push({matcher:t,reducer:e}),a),exposeAction:(t,e)=>(r.actionCreators[t]=e,a),exposeCaseReducer:(t,e)=>(r.sliceCaseReducersByName[t]=e,a)};function l(){const[e={},i=[],n]="function"==typeof t.extraReducers?ve(t.extraReducers):[t.extraReducers],s={...e,...r.sliceCaseReducersByType};return function(t,e){let i,[n,s,o]=ve(e);if(function(t){return"function"==typeof t}(t))i=()=>pe(t());else{const e=pe(t);i=()=>e}function r(t=i(),e){let r=[n[e.type],...s.filter((({matcher:t})=>t(e))).map((({reducer:t})=>t))];return 0===r.filter((t=>!!t)).length&&(r=[o]),r.reduce(((t,i)=>{if(i){if(Et(t)){const n=i(t,e);return void 0===n?t:n}if(St(t))return ae(t,(t=>i(t,e)));{const n=i(t,e);if(void 0===n){if(null===t)return t;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}}return t}),t)}return r.getInitialState=i,r}(t.initialState,(t=>{for(let e in s)t.addCase(e,s[e]);for(let e of r.sliceMatchers)t.addMatcher(e.matcher,e.reducer);for(let e of i)t.addMatcher(e.matcher,e.reducer);n&&t.addDefaultCase(n)}))}o.forEach((n=>{const o=s[n],r={reducerName:n,type:$e(i,n),createNotation:"function"==typeof t.reducers};!function(t){return"asyncThunk"===t._reducerDefinitionType}(o)?function({type:t,reducerName:e,createNotation:i},n,s){let o,r;if("reducer"in n){if(i&&!function(t){return"reducerWithPrepare"===t._reducerDefinitionType}(n))throw new Error(Ee(17));o=n.reducer,r=n.prepare}else o=n;s.addCase(t,o).exposeCaseReducer(e,o).exposeAction(e,r?ue(t,r):ue(t))}(r,o,a):function({type:t,reducerName:e},i,n,s){if(!s)throw new Error(Ee(18));const{payloadCreator:o,fulfilled:r,pending:a,rejected:l,settled:c,options:h}=i,d=s(t,o,h);n.exposeAction(e,d),r&&n.addCase(d.fulfilled,r);a&&n.addCase(d.pending,a);l&&n.addCase(d.rejected,l);c&&n.addMatcher(d.settled,c);n.exposeCaseReducer(e,{fulfilled:r||ke,pending:a||ke,rejected:l||ke,settled:c||ke})}(r,o,a,e)}));const c=t=>t,h=new Map,d=new WeakMap;let u;function f(t,e){return u||(u=l()),u(t,e)}function p(){return u||(u=l()),u.getInitialState()}function m(e,i=!1){function n(t){let s=t[e];return void 0===s&&i&&(s=me(d,n,p)),s}function s(e=c){const n=me(h,i,(()=>new WeakMap));return me(n,e,(()=>{const n={};for(const[s,o]of Object.entries(t.selectors??{}))n[s]=xe(o,e,(()=>me(d,e,p)),i);return n}))}return{reducerPath:e,getSelectors:s,get selectors(){return s(n)},selectSlice:n}}const y={name:i,reducer:f,actions:r.actionCreators,caseReducers:r.sliceCaseReducersByName,getInitialState:p,...m(n),injectInto(t,{reducerPath:e,...i}={}){const s=e??n;return t.inject({reducerPath:s,reducer:f},i),{...y,...m(s,!0)}}};return y}}function xe(t,e,i,n){function s(s,...o){let r=e(s);return void 0===r&&n&&(r=i()),t(r,...o)}return s.unwrapped=t,s}function ke(){}function Ee(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const Se=we()({name:"employees",initialState:JSON.parse(localStorage.getItem("employees")||"null")||[],reducers:{addEmployee:(t,e)=>{t.push(e.payload)},updateEmployee:(t,e)=>{const i=t.findIndex((t=>t.id===e.payload.id));-1!==i&&(t[i]=e.payload)},deleteEmployee:(t,e)=>t.filter((t=>t.id!==e.payload)),bulkDelete:(t,e)=>{const i=e.payload;return t.filter((t=>!i.includes(t.id)))}}}),{addEmployee:_e,updateEmployee:Oe,deleteEmployee:je,bulkDelete:Ce}=Se.actions,Ne=function(t){const e=function(t){const{thunk:e=!0,immutableCheck:i=!0,serializableCheck:n=!0,actionCreatorCheck:s=!0}=t??{};let o=new fe;return e&&(function(t){return"boolean"==typeof t}(e)?o.push(ce):o.push(he(e.extraArgument))),o},{reducer:i,middleware:n,devTools:s=!0,preloadedState:o,enhancers:r}=t||{};let a,l;if("function"==typeof i)a=i;else{if(!mt(i))throw new Error(Ee(1));a=bt(i)}l="function"==typeof n?n(e):e();let c=vt;s&&(c=de({trace:!1,..."object"==typeof s&&s}));const h=function(...t){return e=>(i,n)=>{const s=e(i,n);let o=()=>{throw new Error(dt(15))};const r={getState:s.getState,dispatch:(t,...e)=>o(t,...e)},a=t.map((t=>t(r)));return o=vt(...a)(s.dispatch),{...s,dispatch:o}}}(...l),d=be(h);return yt(a,o,c(..."function"==typeof r?r(d):d()))}({reducer:{employees:Se.reducer}});Ne.subscribe((()=>{localStorage.setItem("employees",JSON.stringify(Ne.getState().employees))}));class Ae extends lt{static properties={route:{type:String}};static styles=l`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background: #fff;
    }

    .titleWrapper {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      color: black;
    }

    h5 {
      margin: 0;
    }

    nav a {
      color: rgba(255, 102, 0, 0.53);
      margin-right: 1rem;
    }

    .active {
      color: #ff6600;
    }

    .logo {
      display: flex;
      align-items: center;
    }
    .logo img {
      max-height: 40px;
      object-fit: contain;
    }
  `;constructor(){super(),this.route=window.location.hash||"#/list",window.addEventListener("hashchange",(()=>{this.route=window.location.hash}))}_onLangChange(t){const e=t.target.value;localStorage.setItem("lang",e),document.documentElement.lang=e,window.location.reload()}render(){const t=document.documentElement.lang||"en";return W`
      <header>
        <a href="/" class="titleWrapper">
          <div class="logo">
            <img src="/assets/ing_logo.png" alt="ING Bank Logo" />
          </div>
          <h5 class="title">ING</h5>
        </a>
        <nav>
          <a
            href="#/list"
            class=${this.route.startsWith("#/list")?"active":""}
          >
            ${i("employees")}
          </a>
          <a href="#/add" class=${"#/add"===this.route?"active":""}>
            ${i("addNew")}
          </a>
          <select @change=${this._onLangChange} .value=${t}>
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
        </nav>
      </header>
    `}}customElements.define("header-component",Ae);class Te extends lt{static properties={employees:Array,selectedIds:Array,viewType:String,searchTerm:String,currentPage:Number,pageSize:Number};constructor(){super(),this.selectedIds=[],this.viewType="table",this.searchTerm="",this.currentPage=1,this.pageSize=10}static styles=l`
    .table-container {
      overflow-x: auto;
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 16px;
    }
    .controls button,
    .controls select,
    .controls input {
      padding: 6px 12px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .controls button:disabled {
      opacity: 0.5;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
    }
    th {
      background: #fff;
      color: #ff6600;
      font-weight: 600;
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #e8e8e8;
    }
    td {
      padding: 12px;
      border-bottom: 1px solid #f0f0f0;
      color: #555;
    }
    tr:hover {
      background: #fafafa;
    }
    tr.selected {
      background: #fff7e6;
    }
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 16px;
    }
    .pagination button {
      border: none;
      background: none;
      padding: 6px 8px;
      cursor: pointer;
      color: #555;
      font-weight: 500;
    }
    .pagination button.active,
    .pagination button:hover {
      color: #ff6600;
      font-weight: 600;
    }

    .view {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .view img {
      height: 20px;
    }

    .view .active {
      color: #ff6600;
    }

    .list {
      padding-inline: 0;
      display: flex;
      flex-direction: column;
    }

    .listItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      padding: 8px;
      border-bottom: 1px solid #f0f0f0;
    }
    .listItem:first-child {
      justify-content: flex-start;
      margin-bottom: 12px;
    }

    .list-buttons {
      display: flex;
      gap: 8px;

      button {
        height: 32px;
      }
    }

    .noData {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
    }

    .tableActions {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    .info {
      display: flex;
    }
  `;get filtered(){const t=this.searchTerm.toLowerCase();return this.employees.filter((e=>e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)))}get paged(){const t=(this.currentPage-1)*this.pageSize;return this.filtered.slice(t,t+this.pageSize)}render(){const t=Math.ceil(this.filtered.length/this.pageSize);return W`
      <div class="controls">
        <div class="tableActions">
          <div>
            <span>${i("search")}:</span
            ><input
              type="text"
              .value=${this.searchTerm}
              @input=${t=>{this.searchTerm=t.target.value,this.currentPage=1}}
              placeholder="${i("search")}"
            />
          </div>
          <div>
            <button @click=${()=>window.location.hash="#/add"}>
              ${i("addEmployee")}
            </button>
            <button
              @click=${()=>this.dispatchEvent(new CustomEvent("bulk-delete"))}
              ?disabled=${0===this.selectedIds.length}
            >
              ${i("deleteSelected")}
            </button>
          </div>
        </div>
        <div class="view">
          <button
            type="link"
            class=${"table"===this.viewType?"active":""}
            @click=${()=>{this.viewType="table",this.currentPage=1}}
          >
            ${i("table")}
          </button>
          <button
            class=${"list"===this.viewType?"active":""}
            @click=${()=>{this.viewType="list",this.currentPage=1}}
          >
            ${i("list")}
          </button>
        </div>
      </div>
      ${this.paged.length<=0?W`<div class="noData">${i("noData")}</div>`:"table"===this.viewType?this._renderTable():this._renderList()}
      ${this.paged.length<=0?"":W`<div class="pagination">
            <button
              @click=${()=>this.currentPage=Math.max(1,this.currentPage-1)}
              ?disabled=${1===this.currentPage}
            >
              <
            </button>
            ${Array.from({length:t},((t,e)=>e+1)).map((t=>W`<button
                  class=${t===this.currentPage?"active":""}
                  @click=${()=>this.currentPage=t}
                >
                  ${t}
                </button>`))}
            <button
              @click=${()=>this.currentPage=Math.min(t,this.currentPage+1)}
              ?disabled=${this.currentPage===t}
            >
              >
            </button>
          </div>`}
    `}_renderTable(){return W` <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                @change=${this._toggleSelectAll}
                .checked=${this._allSelected()}
              />
            </th>
            <th>${i("firstName")}</th>
            <th>${i("lastName")}</th>
            <th>${i("dateOfEmployment")}</th>
            <th>${i("dateOfBirth")}</th>
            <th>${i("phone")}</th>
            <th>${i("email")}</th>
            <th>${i("department")}</th>
            <th>${i("position")}</th>
            <th>${i("save")}</th>
          </tr>
        </thead>
        <tbody>
          ${this.paged.map((t=>W`<tr
                class=${this.selectedIds.includes(t.id)?"selected":""}
              >
                <td>
                  <input
                    type="checkbox"
                    .checked=${this.selectedIds.includes(t.id)}
                    @change=${e=>this._toggleSelect(t,e.target.checked)}
                  />
                </td>
                <td>${t.firstName}</td>
                <td>${t.lastName}</td>
                <td>${t.employmentDate}</td>
                <td>${t.birthDate}</td>
                <td>${t.phone}</td>
                <td>${t.email}</td>
                <td>${t.department}</td>
                <td>${t.position}</td>
                <td>
                  ${this.selectedIds.length<=0?W`<div class="list-buttons">
                        <button
                          @click=${()=>window.location.hash=`#/edit/${t.id}`}
                        >
                          ${i("edit")}</button
                        ><button
                          @click=${()=>this.dispatchEvent(new CustomEvent("delete",{detail:t}))}
                        >
                          ${i("delete")}
                        </button>
                      </div>`:null}
                </td>
              </tr>`))}
        </tbody>
      </table>
    </div>`}_renderList(){return W` <div class="list">
      <div class="listItem">
        <input
          type="checkbox"
          @change=${this._toggleSelectAll}
          .checked=${this._allSelected()}
        />
        ${i("selectAll")}
      </div>
      ${this.paged.map((t=>W` <div class="listItem">
            <div class="info">
              <input
                type="checkbox"
                .checked=${this.selectedIds.includes(t.id)}
                @change=${e=>this._toggleSelect(t,e.target.checked)}
                style="margin-right:8px;"
              />

              <div
                style="display:flex; flex-direction:column; gap: 8px; color: gray"
              >
                <div>${t.firstName} ${t.lastName} - ${t.email}</div>
                <div>${i("dateOfBirth")}: ${t.birthDate}</div>
                <div>${i("dateOfEmployment")}: ${t.employmentDate}</div>
                <div>${i("department")}: ${t.department}</div>
                <div>${i("position")}: ${t.position}</div>
                <div>${i("phone")}: ${t.phone}</div>
              </div>
            </div>
            <div class="list-buttons">
              <button
                @click=${()=>window.location.hash=`#/edit/${t.id}`}
              >
                ${i("edit")}</button
              ><button
                @click=${()=>this.dispatchEvent(new CustomEvent("delete",{detail:t}))}
              >
                ${i("delete")}
              </button>
            </div>
          </div>`))}
    </div>`}_toggleSelect(t,e){this.selectedIds=e?[...this.selectedIds,t.id]:this.selectedIds.filter((e=>e!==t.id)),this.dispatchEvent(new CustomEvent("selection-change",{detail:this.selectedIds}))}_allSelected(){return this.paged.length>0&&this.paged.every((t=>this.selectedIds.includes(t.id)))}_toggleSelectAll(t){this.selectedIds=t.target.checked?this.paged.map((t=>t.id)):[],this.dispatchEvent(new CustomEvent("selection-change",{detail:this.selectedIds}))}}customElements.define("employee-list",Te);class De extends lt{static properties={employee:{type:Object},errors:{type:Object}};constructor(){super(),this.employee=null,this.errors={}}static styles=l`
    .formLayout {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    form {
      width: 80%;
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    label {
      display: block;
      margin-top: 12px;
      font-weight: 500;
    }
    input,
    select {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .error {
      color: #ff4d4f;
      font-size: 12px;
      margin-top: 4px;
    }
    .actions {
      margin-top: 24px;
      display: flex;
      gap: 12px;
    }
    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button.save {
      background: #ff6600;
      color: #fff;
    }
    button.cancel {
      background: #f0f0f0;
      color: #000;
    }
  `;render(){const t=this.employee||{};return W`
      <div class="formLayout">
        <form @submit=${this._onSubmit} novalidate>
          <label>
            ${i("firstName")}
            <input
              name="firstName"
              .value=${t.firstName||""}
              @input=${()=>this._clearError("firstName")}
              required
            />
            ${this.errors.firstName?W`<div class="error">${this.errors.firstName}</div>`:""}
          </label>

          <label>
            ${i("lastName")}
            <input
              name="lastName"
              .value=${t.lastName||""}
              @input=${()=>this._clearError("lastName")}
              required
            />
            ${this.errors.lastName?W`<div class="error">${this.errors.lastName}</div>`:""}
          </label>

          <label>
            ${i("dateOfEmployment")}
            <input
              type="date"
              name="employmentDate"
              .value=${t.employmentDate||""}
              @input=${()=>this._clearError("employmentDate")}
              required
            />
            ${this.errors.employmentDate?W`<div class="error">${this.errors.employmentDate}</div>`:""}
          </label>

          <label>
            ${i("dateOfBirth")}
            <input
              type="date"
              name="birthDate"
              .value=${t.birthDate||""}
              @input=${()=>this._clearError("birthDate")}
              required
            />
            ${this.errors.birthDate?W`<div class="error">${this.errors.birthDate}</div>`:""}
          </label>

          <label>
            ${i("phone")}
            <input
              type="tel"
              name="phone"
              .value=${t.phone||""}
              @input=${()=>this._clearError("phone")}
              pattern="\\d{10}"
              required
            />
            ${this.errors.phone?W`<div class="error">${this.errors.phone}</div>`:""}
          </label>

          <label>
            ${i("email")}
            <input
              type="email"
              name="email"
              .value=${t.email||""}
              @input=${()=>this._clearError("email")}
              required
            />
            ${this.errors.email?W`<div class="error">${this.errors.email}</div>`:""}
          </label>

          <label>
            ${i("department")}
            <select
              name="department"
              .value=${t.department||""}
              @change=${()=>this._clearError("department")}
              required
            >
              <option value="Analytics">${i("analytics")}</option>
              <option value="Tech">${i("tech")}</option>
            </select>
            ${this.errors.department?W`<div class="error">${this.errors.department}</div>`:""}
          </label>

          <label>
            ${i("position")}
            <select
              name="position"
              .value=${t.position||""}
              @change=${()=>this._clearError("position")}
              required
            >
              <option value="Junior">Junior</option>
              <option value="Medior">Medior</option>
              <option value="Senior">Senior</option>
            </select>
            ${this.errors.position?W`<div class="error">${this.errors.position}</div>`:""}
          </label>

          <div class="actions">
            <button type="submit" class="save">${i("save")}</button>
            <button type="button" class="cancel" @click=${this._onCancel}>
              ${i("cancel")}
            </button>
          </div>
        </form>
      </div>
    `}_clearError(t){if(this.errors[t]){const{[t]:e,...i}=this.errors;this.errors={...i}}}_onCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0}))}_onSubmit(t){t.preventDefault();const e=new FormData(t.target),n={id:this.employee?.id||null,firstName:e.get("firstName").trim(),lastName:e.get("lastName").trim(),employmentDate:e.get("employmentDate"),birthDate:e.get("birthDate"),phone:e.get("phone"),email:e.get("email").trim(),department:e.get("department"),position:e.get("position")},s={};if(n.firstName||(s.firstName=i("requiredValidationText")),n.lastName||(s.lastName=i("requiredValidationText")),n.employmentDate||(s.employmentDate=i("requiredValidationText")),n.birthDate||(s.birthDate=i("requiredValidationText")),n.birthDate&&n.employmentDate&&n.birthDate>=n.employmentDate&&(s.birthDate=i("birthDateValidationText")),/^\d{10}$/.test(n.phone)||(s.phone=i("phoneValidationText")),/.+@.+\..+/.test(n.email)||(s.email=i("emailValidationText")),n.department||(s.department=i("requiredValidationText")),n.position||(s.position=i("requiredValidationText")),this.errors=s,Object.keys(s).length>0){const t=this.renderRoot.querySelector(".error");t?.scrollIntoView({behavior:"smooth",block:"center"})}else this.dispatchEvent(new CustomEvent("save",{detail:n,bubbles:!0}))}}customElements.define("employee-form",De);class Pe extends lt{static properties={employees:{type:Array},selectedIds:{type:Array},selectedEmployee:{type:Object},_view:{type:String},_editDialogOpen:{type:Boolean},_deleteDialogOpen:{type:Boolean},_deleteTarget:{type:Object},_bulkDeleteDialogOpen:{type:Boolean}};static styles=l`
    .mainLayout {
      margin: 20px;
    }
  `;constructor(){super(),this.employees=Ne.getState().employees,this.selectedIds=[],this.selectedEmployee=null,this._view="list",this._editDialogOpen=!1,this._deleteDialogOpen=!1,this._deleteTarget=null,this._bulkDeleteDialogOpen=!1,this.unsubscribe=Ne.subscribe((()=>{this.employees=Ne.getState().employees})),window.addEventListener("hashchange",(()=>this._handleRoute()))}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}connectedCallback(){super.connectedCallback(),this._handleRoute()}static styles=l`
    :host {
      display: block;
    }

    .main-layout {
      padding: 32px;
    }
  `;_handleRoute(){const t=window.location.hash;if(t.startsWith("#/edit/")){this._view="edit";const e=t.split("/")[2];this.selectedEmployee=this.employees.find((t=>t.id===e))||null}else"#/add"===t?(this._view="add",this.selectedEmployee=null):this._view="list";this.requestUpdate()}render(){return W`
      <div class="main-layout">
        <main>
          ${"list"===this._view?W`
                <div class="table-card">
                  <h1>${i("employeeList")}</h1>
                  <employee-list
                    .employees=${this.employees}
                    .selectedIds=${this.selectedIds}
                    @bulk-delete=${()=>this._bulkDeletePrompt()}
                    @delete=${t=>this._deletePrompt(t.detail)}
                    @selection-change=${t=>this.selectedIds=t.detail}
                  ></employee-list>
                </div>
              `:""}
          ${"add"===this._view?W`
                <employee-form
                  @save=${t=>this._saveEmployee(t.detail)}
                  @cancel=${()=>window.location.hash="#/list"}
                ></employee-form>
              `:""}
          ${"edit"===this._view&&this.selectedEmployee?W`
                <employee-form
                  .employee=${this.selectedEmployee}
                  @save=${t=>this._editPrompt(t.detail)}
                  @cancel=${()=>window.location.hash="#/list"}
                ></employee-form>
              `:""}
        </main>
      </div>

      <confirm-dialog
        .open=${this._deleteDialogOpen}
        .message=${this._deleteTarget?`${i("delete")} ${this._deleteTarget.firstName} ${this._deleteTarget.lastName}?`:""}
        @confirmed=${()=>this._confirmDelete()}
        @cancelled=${()=>this._deleteDialogOpen=!1}
      ></confirm-dialog>

      <confirm-dialog
        .open=${this._bulkDeleteDialogOpen}
        .message=${`Delete ${this.selectedIds.length} selected?`}
        @confirmed=${()=>this._confirmBulkDelete()}
        @cancelled=${()=>this._bulkDeleteDialogOpen=!1}
      ></confirm-dialog>

      <confirm-dialog
        .open=${this._editDialogOpen}
        .message=${i("editConfirm")}
        @confirmed=${()=>this._confirmEdit()}
        @cancelled=${()=>this._editDialogOpen=!1}
      ></confirm-dialog>
    `}_editPrompt(t){this._editTarget=t,this._editDialogOpen=!0}_confirmEdit(){this._saveEmployee(this._editTarget),this.selectedIds=[],this._editDialogOpen=!1}_deletePrompt(t){this._deleteTarget=t,this._deleteDialogOpen=!0}_confirmDelete(){Ne.dispatch(je(this._deleteTarget.id)),this.selectedIds=[],this._deleteDialogOpen=!1}_bulkDeletePrompt(){this._bulkDeleteDialogOpen=!0}_confirmBulkDelete(){Ne.dispatch(Ce(this.selectedIds)),this.selectedIds=[],this._bulkDeleteDialogOpen=!1}_saveEmployee(t){t.id?Ne.dispatch(Oe(t)):(t.id=Date.now().toString(),Ne.dispatch(_e(t))),window.location.hash="#/list"}}customElements.define("employee-app",Pe);
//# sourceMappingURL=main.js.map
