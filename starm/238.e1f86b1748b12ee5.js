"use strict";(self.webpackChunkstarm=self.webpackChunkstarm||[]).push([[238],{2722:(U,w,m)=>{m.d(w,{R:()=>I});var f=m(4482),l=m(5403),b=m(8421),x=m(5032);function I(v){return(0,f.e)((p,y)=>{(0,b.Xf)(v).subscribe((0,l.x)(y,()=>y.complete(),x.Z)),!y.closed&&p.subscribe(y)})}},4408:(U,w,m)=>{m.d(w,{o:()=>I});var f=m(727);class l extends f.w0{constructor(p,y){super()}schedule(p,y=0){return this}}const b={setInterval(v,p,...y){const{delegate:h}=b;return h?.setInterval?h.setInterval(v,p,...y):setInterval(v,p,...y)},clearInterval(v){const{delegate:p}=b;return(p?.clearInterval||clearInterval)(v)},delegate:void 0};var x=m(8737);class I extends l{constructor(p,y){super(p,y),this.scheduler=p,this.work=y,this.pending=!1}schedule(p,y=0){var h;if(this.closed)return this;this.state=p;const M=this.id,C=this.scheduler;return null!=M&&(this.id=this.recycleAsyncId(C,M,y)),this.pending=!0,this.delay=y,this.id=null!==(h=this.id)&&void 0!==h?h:this.requestAsyncId(C,this.id,y),this}requestAsyncId(p,y,h=0){return b.setInterval(p.flush.bind(p,this),h)}recycleAsyncId(p,y,h=0){if(null!=h&&this.delay===h&&!1===this.pending)return y;null!=y&&b.clearInterval(y)}execute(p,y){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const h=this._execute(p,y);if(h)return h;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(p,y){let M,h=!1;try{this.work(p)}catch(C){h=!0,M=C||new Error("Scheduled action threw falsy error")}if(h)return this.unsubscribe(),M}unsubscribe(){if(!this.closed){const{id:p,scheduler:y}=this,{actions:h}=y;this.work=this.state=this.scheduler=null,this.pending=!1,(0,x.P)(h,this),null!=p&&(this.id=this.recycleAsyncId(y,p,null)),this.delay=null,super.unsubscribe()}}}},640:(U,w,m)=>{m.d(w,{v:()=>b});const f={now:()=>(f.delegate||Date).now(),delegate:void 0};class l{constructor(I,v=l.now){this.schedulerActionCtor=I,this.now=v}schedule(I,v=0,p){return new this.schedulerActionCtor(this,I).schedule(p,v)}}l.now=f.now;class b extends l{constructor(I,v=l.now){super(I,v),this.actions=[],this._active=!1}flush(I){const{actions:v}=this;if(this._active)return void v.push(I);let p;this._active=!0;do{if(p=I.execute(I.state,I.delay))break}while(I=v.shift());if(this._active=!1,p){for(;I=v.shift();)I.unsubscribe();throw p}}}},4986:(U,w,m)=>{m.d(w,{P:()=>x,z:()=>b});var f=m(4408);const b=new(m(640).v)(f.o),x=b},2016:(U,w,m)=>{m.d(w,{rt:()=>it,tE:()=>Q,qV:()=>je,qm:()=>Ve,ic:()=>X,X6:()=>Ie,yG:()=>c});var f=m(6895),l=m(1571),b=m(3353),x=m(1135),I=m(7579),v=m(9646),p=m(9521),y=m(5698),h=m(9300);function M(s){return(0,h.h)((t,e)=>s<=e)}var C=m(4671),T=m(4482),k=m(5403);function ee(s,t){return s===t}var B=m(2722),j=m(1281);let te=(()=>{class s{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),V=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({providers:[te]}),s})();var g=m(9841),O=m(7272),S=m(9751),$=m(4986),se=m(4004),de=m(8675);const le=new Set;let H,ue=(()=>{class s{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):xe}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function we(s){if(!le.has(s))try{H||(H=document.createElement("style"),H.setAttribute("type","text/css"),document.head.appendChild(H)),H.sheet&&(H.sheet.insertRule(`@media ${s} {body{ }}`,0),le.add(s))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(b.t4))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function xe(s){return{matches:"all"===s||""===s,media:s,addListener:()=>{},removeListener:()=>{}}}let ke=(()=>{class s{constructor(e,o){this._mediaMatcher=e,this._zone=o,this._queries=new Map,this._destroySubject=new I.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return he((0,j.Eq)(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){const r=he((0,j.Eq)(e)).map(_=>this._registerQuery(_).observable);let d=(0,g.a)(r);return d=(0,O.z)(d.pipe((0,y.q)(1)),d.pipe(M(1),function ce(s,t=$.z){return(0,T.e)((e,o)=>{let r=null,d=null,_=null;const D=()=>{if(r){r.unsubscribe(),r=null;const L=d;d=null,o.next(L)}};function N(){const L=_+s,He=t.now();if(He<L)return r=this.schedule(void 0,L-He),void o.add(r);D()}e.subscribe((0,k.x)(o,L=>{d=L,_=t.now(),r||(r=t.schedule(N,s),o.add(r))},()=>{D(),o.complete()},void 0,()=>{d=r=null}))})}(0))),d.pipe((0,se.U)(_=>{const D={matches:!1,breakpoints:{}};return _.forEach(({matches:N,query:L})=>{D.matches=D.matches||N,D.breakpoints[L]=N}),D}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const o=this._mediaMatcher.matchMedia(e),d={observable:new S.y(_=>{const D=N=>this._zone.run(()=>_.next(N));return o.addListener(D),()=>{o.removeListener(D)}}).pipe((0,de.O)(o),(0,se.U)(({matches:_})=>({query:e,matches:_})),(0,B.R)(this._destroySubject)),mql:o};return this._queries.set(e,d),d}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(ue),l.LFG(l.R0b))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function he(s){return s.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}let X=(()=>{class s{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function W(s){return!!(s.offsetWidth||s.offsetHeight||"function"==typeof s.getClientRects&&s.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const o=function oe(s){try{return s.frameElement}catch{return null}}(function De(s){return s.ownerDocument&&s.ownerDocument.defaultView||window}(e));if(o&&(-1===Ae(o)||!this.isVisible(o)))return!1;let r=e.nodeName.toLowerCase(),d=Ae(e);return e.hasAttribute("contenteditable")?-1!==d:!("iframe"===r||"object"===r||this._platform.WEBKIT&&this._platform.IOS&&!function Pe(s){let t=s.nodeName.toLowerCase(),e="input"===t&&s.type;return"text"===e||"password"===e||"select"===t||"textarea"===t}(e))&&("audio"===r?!!e.hasAttribute("controls")&&-1!==d:"video"===r?-1!==d&&(null!==d||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,o){return function Be(s){return!function be(s){return function Me(s){return"input"==s.nodeName.toLowerCase()}(s)&&"hidden"==s.type}(s)&&(function ve(s){let t=s.nodeName.toLowerCase();return"input"===t||"select"===t||"button"===t||"textarea"===t}(s)||function ye(s){return function Ne(s){return"a"==s.nodeName.toLowerCase()}(s)&&s.hasAttribute("href")}(s)||s.hasAttribute("contenteditable")||Ee(s))}(e)&&!this.isDisabled(e)&&(o?.ignoreVisibility||this.isVisible(e))}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(b.t4))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function Ee(s){if(!s.hasAttribute("tabindex")||void 0===s.tabIndex)return!1;let t=s.getAttribute("tabindex");return!(!t||isNaN(parseInt(t,10)))}function Ae(s){if(!Ee(s))return null;const t=parseInt(s.getAttribute("tabindex")||"",10);return isNaN(t)?-1:t}class Ue{get enabled(){return this._enabled}set enabled(t){this._enabled=t,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}constructor(t,e,o,r,d=!1){this._element=t,this._checker=e,this._ngZone=o,this._document=r,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,d||this.attachAnchors()}destroy(){const t=this._startAnchor,e=this._endAnchor;t&&(t.removeEventListener("focus",this.startAnchorListener),t.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(t)))})}focusFirstTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(t)))})}focusLastTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(t)))})}_getRegionBoundary(t){const e=this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);return"start"==t?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(t){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){const o=this._getFirstTabbableElement(e);return o?.focus(t),!!o}return e.focus(t),!0}return this.focusFirstTabbableElement(t)}focusFirstTabbableElement(t){const e=this._getRegionBoundary("start");return e&&e.focus(t),!!e}focusLastTabbableElement(t){const e=this._getRegionBoundary("end");return e&&e.focus(t),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;const e=t.children;for(let o=0;o<e.length;o++){const r=e[o].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[o]):null;if(r)return r}return null}_getLastTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;const e=t.children;for(let o=e.length-1;o>=0;o--){const r=e[o].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[o]):null;if(r)return r}return null}_createAnchor(){const t=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,t),t.classList.add("cdk-visually-hidden"),t.classList.add("cdk-focus-trap-anchor"),t.setAttribute("aria-hidden","true"),t}_toggleAnchorTabIndex(t,e){t?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(t){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_executeOnStable(t){this._ngZone.isStable?t():this._ngZone.onStable.pipe((0,y.q)(1)).subscribe(t)}}let je=(()=>{class s{constructor(e,o,r){this._checker=e,this._ngZone=o,this._document=r}create(e,o=!1){return new Ue(e,this._checker,this._ngZone,this._document,o)}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(X),l.LFG(l.R0b),l.LFG(f.K0))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function Ie(s){return 0===s.buttons||0===s.offsetX&&0===s.offsetY}function c(s){const t=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!(!t||-1!==t.identifier||null!=t.radiusX&&1!==t.radiusX||null!=t.radiusY&&1!==t.radiusY)}const i=new l.OlP("cdk-input-modality-detector-options"),n={ignoreKeys:[p.zL,p.jx,p.b2,p.MW,p.JU]},u=(0,b.i$)({passive:!0,capture:!0});let E=(()=>{class s{get mostRecentModality(){return this._modality.value}constructor(e,o,r,d){this._platform=e,this._mostRecentTarget=null,this._modality=new x.X(null),this._lastTouchMs=0,this._onKeydown=_=>{this._options?.ignoreKeys?.some(D=>D===_.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,b.sA)(_))},this._onMousedown=_=>{Date.now()-this._lastTouchMs<650||(this._modality.next(Ie(_)?"keyboard":"mouse"),this._mostRecentTarget=(0,b.sA)(_))},this._onTouchstart=_=>{c(_)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,b.sA)(_))},this._options={...n,...d},this.modalityDetected=this._modality.pipe(M(1)),this.modalityChanged=this.modalityDetected.pipe(function P(s,t=C.y){return s=s??ee,(0,T.e)((e,o)=>{let r,d=!0;e.subscribe((0,k.x)(o,_=>{const D=t(_);(d||!s(r,D))&&(d=!1,r=D,o.next(_))}))})}()),e.isBrowser&&o.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,u),r.addEventListener("mousedown",this._onMousedown,u),r.addEventListener("touchstart",this._onTouchstart,u)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,u),document.removeEventListener("mousedown",this._onMousedown,u),document.removeEventListener("touchstart",this._onTouchstart,u))}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(b.t4),l.LFG(l.R0b),l.LFG(f.K0),l.LFG(i,8))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const Oe=new l.OlP("cdk-focus-monitor-default-options"),Y=(0,b.i$)({passive:!0,capture:!0});let Q=(()=>{class s{constructor(e,o,r,d,_){this._ngZone=e,this._platform=o,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new I.x,this._rootNodeFocusAndBlurListener=D=>{for(let L=(0,b.sA)(D);L;L=L.parentElement)"focus"===D.type?this._onFocus(D,L):this._onBlur(D,L)},this._document=d,this._detectionMode=_?.detectionMode||0}monitor(e,o=!1){const r=(0,j.fI)(e);if(!this._platform.isBrowser||1!==r.nodeType)return(0,v.of)(null);const d=(0,b.kV)(r)||this._getDocument(),_=this._elementInfo.get(r);if(_)return o&&(_.checkChildren=!0),_.subject;const D={checkChildren:o,subject:new I.x,rootNode:d};return this._elementInfo.set(r,D),this._registerGlobalListeners(D),D.subject}stopMonitoring(e){const o=(0,j.fI)(e),r=this._elementInfo.get(o);r&&(r.subject.complete(),this._setClasses(o),this._elementInfo.delete(o),this._removeGlobalListeners(r))}focusVia(e,o,r){const d=(0,j.fI)(e);d===this._getDocument().activeElement?this._getClosestElementsInfo(d).forEach(([D,N])=>this._originChanged(D,o,N)):(this._setOrigin(o),"function"==typeof d.focus&&d.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,o)=>this.stopMonitoring(o))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,o){e.classList.toggle("cdk-focused",!!o),e.classList.toggle("cdk-touch-focused","touch"===o),e.classList.toggle("cdk-keyboard-focused","keyboard"===o),e.classList.toggle("cdk-mouse-focused","mouse"===o),e.classList.toggle("cdk-program-focused","program"===o)}_setOrigin(e,o=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&o,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,o){const r=this._elementInfo.get(o),d=(0,b.sA)(e);!r||!r.checkChildren&&o!==d||this._originChanged(o,this._getFocusOrigin(d),r)}_onBlur(e,o){const r=this._elementInfo.get(o);!r||r.checkChildren&&e.relatedTarget instanceof Node&&o.contains(e.relatedTarget)||(this._setClasses(o),this._emitOrigin(r,null))}_emitOrigin(e,o){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(o))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const o=e.rootNode,r=this._rootNodeFocusListenerCount.get(o)||0;r||this._ngZone.runOutsideAngular(()=>{o.addEventListener("focus",this._rootNodeFocusAndBlurListener,Y),o.addEventListener("blur",this._rootNodeFocusAndBlurListener,Y)}),this._rootNodeFocusListenerCount.set(o,r+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,B.R)(this._stopInputModalityDetector)).subscribe(d=>{this._setOrigin(d,!0)}))}_removeGlobalListeners(e){const o=e.rootNode;if(this._rootNodeFocusListenerCount.has(o)){const r=this._rootNodeFocusListenerCount.get(o);r>1?this._rootNodeFocusListenerCount.set(o,r-1):(o.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Y),o.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Y),this._rootNodeFocusListenerCount.delete(o))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,o,r){this._setClasses(e,o),this._emitOrigin(r,o),this._lastFocusOrigin=o}_getClosestElementsInfo(e){const o=[];return this._elementInfo.forEach((r,d)=>{(d===e||r.checkChildren&&d.contains(e))&&o.push([d,r])}),o}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:o,mostRecentModality:r}=this._inputModalityDetector;if("mouse"!==r||!o||o===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const d=e.labels;if(d)for(let _=0;_<d.length;_++)if(d[_].contains(o))return!0;return!1}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(l.R0b),l.LFG(b.t4),l.LFG(E),l.LFG(f.K0,8),l.LFG(Oe,8))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const J="cdk-high-contrast-black-on-white",q="cdk-high-contrast-white-on-black",z="cdk-high-contrast-active";let Ve=(()=>{class s{constructor(e,o){this._platform=e,this._document=o,this._breakpointSubscription=(0,l.f3M)(ke).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const o=this._document.defaultView||window,r=o&&o.getComputedStyle?o.getComputedStyle(e):null,d=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),d){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(z,J,q),this._hasCheckedHighContrastMode=!0;const o=this.getHighContrastMode();1===o?e.add(z,J):2===o&&e.add(z,q)}}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(b.t4),l.LFG(f.K0))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),it=(()=>{class s{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return s.\u0275fac=function(e){return new(e||s)(l.LFG(Ve))},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[V]}),s})()},445:(U,w,m)=>{m.d(w,{Is:()=>p,vT:()=>h});var f=m(1571),l=m(6895);const b=new f.OlP("cdk-dir-doc",{providedIn:"root",factory:function x(){return(0,f.f3M)(l.K0)}}),I=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let p=(()=>{class M{constructor(T){this.value="ltr",this.change=new f.vpe,T&&(this.value=function v(M){const C=M?.toLowerCase()||"";return"auto"===C&&typeof navigator<"u"&&navigator?.language?I.test(navigator.language)?"rtl":"ltr":"rtl"===C?"rtl":"ltr"}((T.body?T.body.dir:null)||(T.documentElement?T.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}}return M.\u0275fac=function(T){return new(T||M)(f.LFG(b,8))},M.\u0275prov=f.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})(),h=(()=>{class M{}return M.\u0275fac=function(T){return new(T||M)},M.\u0275mod=f.oAB({type:M}),M.\u0275inj=f.cJS({}),M})()},1281:(U,w,m)=>{m.d(w,{Eq:()=>I,HM:()=>v,Ig:()=>l,fI:()=>p,su:()=>b});var f=m(1571);function l(h){return null!=h&&"false"!=`${h}`}function b(h,M=0){return function x(h){return!isNaN(parseFloat(h))&&!isNaN(Number(h))}(h)?Number(h):M}function I(h){return Array.isArray(h)?h:[h]}function v(h){return null==h?"":"string"==typeof h?h:`${h}px`}function p(h){return h instanceof f.SBq?h.nativeElement:h}},9521:(U,w,m)=>{m.d(w,{JU:()=>v,MW:()=>De,Vb:()=>rt,b2:()=>ot,hY:()=>C,jx:()=>p,zL:()=>y});const v=16,p=17,y=18,C=27,De=91,ot=224;function rt(ae,...st){return st.length?st.some(at=>ae[at]):ae.altKey||ae.shiftKey||ae.ctrlKey||ae.metaKey}},3353:(U,w,m)=>{m.d(w,{Mq:()=>P,Oy:()=>V,_i:()=>ee,ht:()=>ne,i$:()=>C,kV:()=>te,sA:()=>ie,t4:()=>x});var f=m(1571),l=m(6895);let b;try{b=typeof Intl<"u"&&Intl.v8BreakIterator}catch{b=!1}let h,T,k,B,x=(()=>{class g{constructor(S){this._platformId=S,this.isBrowser=this._platformId?(0,l.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!b)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return g.\u0275fac=function(S){return new(S||g)(f.LFG(f.Lbi))},g.\u0275prov=f.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})();function C(g){return function M(){if(null==h&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>h=!0}))}finally{h=h||!1}return h}()?g:!!g.capture}function P(){if(null==k){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return k=!1,k;if("scrollBehavior"in document.documentElement.style)k=!0;else{const g=Element.prototype.scrollTo;k=!!g&&!/\{\s*\[native code\]\s*\}/.test(g.toString())}}return k}function ee(){if("object"!=typeof document||!document)return 0;if(null==T){const g=document.createElement("div"),O=g.style;g.dir="rtl",O.width="1px",O.overflow="auto",O.visibility="hidden",O.pointerEvents="none",O.position="absolute";const S=document.createElement("div"),$=S.style;$.width="2px",$.height="1px",g.appendChild(S),document.body.appendChild(g),T=0,0===g.scrollLeft&&(g.scrollLeft=1,T=0===g.scrollLeft?1:2),g.remove()}return T}function te(g){if(function j(){if(null==B){const g=typeof document<"u"?document.head:null;B=!(!g||!g.createShadowRoot&&!g.attachShadow)}return B}()){const O=g.getRootNode?g.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&O instanceof ShadowRoot)return O}return null}function ne(){let g=typeof document<"u"&&document?document.activeElement:null;for(;g&&g.shadowRoot;){const O=g.shadowRoot.activeElement;if(O===g)break;g=O}return g}function ie(g){return g.composedPath?g.composedPath()[0]:g.target}function V(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}},3238:(U,w,m)=>{m.d(w,{BQ:()=>V,wG:()=>ye,si:()=>Me,pj:()=>ce,Kr:()=>se,Id:()=>$,sb:()=>de});var f=m(1571),l=m(2016),b=m(445),I=m(6895),v=m(3353),p=m(1281);const ie=new f.OlP("mat-sanity-checks",{providedIn:"root",factory:function ne(){return!0}});let V=(()=>{class c{constructor(n,a,u){this._sanityChecks=a,this._document=u,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return!(0,v.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[n])}}return c.\u0275fac=function(n){return new(n||c)(f.LFG(l.qm),f.LFG(ie,8),f.LFG(I.K0))},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[b.vT,b.vT]}),c})();function $(c){return class extends c{get disabled(){return this._disabled}set disabled(i){this._disabled=(0,p.Ig)(i)}constructor(...i){super(...i),this._disabled=!1}}}function ce(c,i){return class extends c{get color(){return this._color}set color(n){const a=n||this.defaultColor;a!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),a&&this._elementRef.nativeElement.classList.add(`mat-${a}`),this._color=a)}constructor(...n){super(...n),this.defaultColor=i,this.color=i}}}function se(c){return class extends c{get disableRipple(){return this._disableRipple}set disableRipple(i){this._disableRipple=(0,p.Ig)(i)}constructor(...i){super(...i),this._disableRipple=!1}}}function de(c,i=0){return class extends c{get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(n){this._tabIndex=null!=n?(0,p.su)(n):this.defaultTabIndex}constructor(...n){super(...n),this._tabIndex=i,this.defaultTabIndex=i}}}class Re{constructor(i,n,a,u=!1){this._renderer=i,this.element=n,this.config=a,this._animationForciblyDisabledThroughCss=u,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const pe=(0,v.i$)({passive:!0,capture:!0});class Le{constructor(){this._events=new Map,this._delegateEventHandler=i=>{const n=(0,v.sA)(i);n&&this._events.get(i.type)?.forEach((a,u)=>{(u===n||u.contains(n))&&a.forEach(E=>E.handleEvent(i))})}}addHandler(i,n,a,u){const E=this._events.get(n);if(E){const F=E.get(a);F?F.add(u):E.set(a,new Set([u]))}else this._events.set(n,new Map([[a,new Set([u])]])),i.runOutsideAngular(()=>{document.addEventListener(n,this._delegateEventHandler,pe)})}removeHandler(i,n,a){const u=this._events.get(i);if(!u)return;const E=u.get(n);E&&(E.delete(a),0===E.size&&u.delete(n),0===u.size&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,pe)))}}const _e={enterDuration:225,exitDuration:150},ge=(0,v.i$)({passive:!0,capture:!0}),X=["mousedown","touchstart"],oe=["mouseup","mouseleave","touchend","touchcancel"];class W{constructor(i,n,a,u){this._target=i,this._ngZone=n,this._platform=u,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,u.isBrowser&&(this._containerElement=(0,p.fI)(a))}fadeInRipple(i,n,a={}){const u=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),E={..._e,...a.animation};a.centered&&(i=u.left+u.width/2,n=u.top+u.height/2);const F=a.radius||function ve(c,i,n){const a=Math.max(Math.abs(c-n.left),Math.abs(c-n.right)),u=Math.max(Math.abs(i-n.top),Math.abs(i-n.bottom));return Math.sqrt(a*a+u*u)}(i,n,u),Ce=i-u.left,Ke=n-u.top,re=E.enterDuration,R=document.createElement("div");R.classList.add("mat-ripple-element"),R.style.left=Ce-F+"px",R.style.top=Ke-F+"px",R.style.height=2*F+"px",R.style.width=2*F+"px",null!=a.color&&(R.style.backgroundColor=a.color),R.style.transitionDuration=`${re}ms`,this._containerElement.appendChild(R);const Te=window.getComputedStyle(R),Y=Te.transitionDuration,Q="none"===Te.transitionProperty||"0s"===Y||"0s, 0s"===Y||0===u.width&&0===u.height,K=new Re(this,R,a,Q);R.style.transform="scale3d(1, 1, 1)",K.state=0,a.persistent||(this._mostRecentTransientRipple=K);let J=null;return!Q&&(re||E.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const q=()=>this._finishRippleTransition(K),z=()=>this._destroyRipple(K);R.addEventListener("transitionend",q),R.addEventListener("transitioncancel",z),J={onTransitionEnd:q,onTransitionCancel:z}}),this._activeRipples.set(K,J),(Q||!re)&&this._finishRippleTransition(K),K}fadeOutRipple(i){if(2===i.state||3===i.state)return;const n=i.element,a={..._e,...i.config.animation};n.style.transitionDuration=`${a.exitDuration}ms`,n.style.opacity="0",i.state=2,(i._animationForciblyDisabledThroughCss||!a.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){const n=(0,p.fI)(i);!this._platform.isBrowser||!n||n===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=n,X.forEach(a=>{W._eventManager.addHandler(this._ngZone,a,n,this)}))}handleEvent(i){"mousedown"===i.type?this._onMousedown(i):"touchstart"===i.type?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{oe.forEach(n=>{this._triggerElement.addEventListener(n,this,ge)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){0===i.state?this._startFadeOutTransition(i):2===i.state&&this._destroyRipple(i)}_startFadeOutTransition(i){const n=i===this._mostRecentTransientRipple,{persistent:a}=i.config;i.state=1,!a&&(!n||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){const n=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=3,null!==n&&(i.element.removeEventListener("transitionend",n.onTransitionEnd),i.element.removeEventListener("transitioncancel",n.onTransitionCancel)),i.element.remove()}_onMousedown(i){const n=(0,l.X6)(i),a=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!n&&!a&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!(0,l.yG)(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const n=i.changedTouches;for(let a=0;a<n.length;a++)this.fadeInRipple(n[a].clientX,n[a].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{!i.config.persistent&&(1===i.state||i.config.terminateOnPointerUp&&0===i.state)&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const i=this._triggerElement;i&&(X.forEach(n=>W._eventManager.removeHandler(n,i,this)),this._pointerUpEventsRegistered&&oe.forEach(n=>i.removeEventListener(n,this,ge)))}}W._eventManager=new Le;const be=new f.OlP("mat-ripple-global-options");let ye=(()=>{class c{get disabled(){return this._disabled}set disabled(n){n&&this.fadeOutAllNonPersistent(),this._disabled=n,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(n){this._trigger=n,this._setupTriggerEventsIfEnabled()}constructor(n,a,u,E,F){this._elementRef=n,this._animationMode=F,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=E||{},this._rippleRenderer=new W(this,a,n,u)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(n,a=0,u){return"number"==typeof n?this._rippleRenderer.fadeInRipple(n,a,{...this.rippleConfig,...u}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...n})}}return c.\u0275fac=function(n){return new(n||c)(f.Y36(f.SBq),f.Y36(f.R0b),f.Y36(v.t4),f.Y36(be,8),f.Y36(f.QbO,8))},c.\u0275dir=f.lG2({type:c,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,a){2&n&&f.ekj("mat-ripple-unbounded",a.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]}),c})(),Me=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[V,V]}),c})()}}]);