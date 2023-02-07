"use strict";(self.webpackChunkvoxel_test=self.webpackChunkvoxel_test||[]).push([[238],{2722:(z,L,u)=>{u.d(L,{R:()=>R});var h=u(4482),p=u(5403),y=u(8421),T=u(5032);function R(I){return(0,h.e)((C,g)=>{(0,y.Xf)(I).subscribe((0,p.x)(g,()=>g.complete(),T.Z)),!g.closed&&C.subscribe(g)})}},5901:(z,L,u)=>{u.d(L,{Em:()=>be,tE:()=>st,qm:()=>ot,X6:()=>w,yG:()=>se});var h=u(6895),p=u(4650),y=u(3353),T=u(7579),R=u(727),I=u(1135),C=u(9646),g=u(9521),_=u(8505);class M extends R.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const D={setInterval(o,t,...e){const{delegate:s}=D;return s?.setInterval?s.setInterval(o,t,...e):setInterval(o,t,...e)},clearInterval(o){const{delegate:t}=D;return(t?.clearInterval||clearInterval)(o)},delegate:void 0};var E=u(8737);const S={now:()=>(S.delegate||Date).now(),delegate:void 0};class N{constructor(t,e=N.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,s){return new this.schedulerActionCtor(this,t).schedule(s,e)}}N.now=S.now;const Z=new class K extends N{constructor(t,e=N.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let s;this._active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,s){for(;t=e.shift();)t.unsubscribe();throw s}}}(class O extends M{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var s;if(this.closed)return this;this.state=t;const r=this.id,d=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(d,r,e)),this.pending=!0,this.delay=e,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(d,this.id,e),this}requestAsyncId(t,e,s=0){return D.setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,e,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return e;null!=e&&D.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,e);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let r,s=!1;try{this.work(t)}catch(d){s=!0,r=d||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:s}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,E.P)(s,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}});var W=u(4482),B=u(5403);function Q(o,t=Z){return(0,W.e)((e,s)=>{let r=null,d=null,f=null;const v=()=>{if(r){r.unsubscribe(),r=null;const F=d;d=null,s.next(F)}};function P(){const F=f+o,Ge=t.now();if(Ge<F)return r=this.schedule(void 0,F-Ge),void s.add(r);v()}e.subscribe((0,B.x)(s,F=>{d=F,f=t.now(),r||(r=t.schedule(P,o),s.add(r))},()=>{v(),s.complete()},void 0,()=>{d=r=null}))})}var m=u(9300),A=u(4004);function k(o){return(0,m.h)((t,e)=>o<=e)}var H=u(4671);function ce(o,t){return o===t}var te=u(2722),Y=u(1281),xe=u(9841),de=u(7272),Fe=u(9751),ke=u(5698),le=u(8675);const ue=new Set;let G,Le=(()=>{class o{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Re}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function he(o){if(!ue.has(o))try{G||(G=document.createElement("style"),G.setAttribute("type","text/css"),document.head.appendChild(G)),G.sheet&&(G.sheet.insertRule(`@media ${o} {body{ }}`,0),ue.add(o))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}return o.\u0275fac=function(e){return new(e||o)(p.LFG(y.t4))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function Re(o){return{matches:"all"===o||""===o,media:o,addListener:()=>{},removeListener:()=>{}}}let me=(()=>{class o{constructor(e,s){this._mediaMatcher=e,this._zone=s,this._queries=new Map,this._destroySubject=new T.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return fe((0,Y.Eq)(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){const r=fe((0,Y.Eq)(e)).map(f=>this._registerQuery(f).observable);let d=(0,xe.a)(r);return d=(0,de.z)(d.pipe((0,ke.q)(1)),d.pipe(k(1),Q(0))),d.pipe((0,A.U)(f=>{const v={matches:!1,breakpoints:{}};return f.forEach(({matches:P,query:F})=>{v.matches=v.matches||P,v.breakpoints[F]=P}),v}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const s=this._mediaMatcher.matchMedia(e),d={observable:new Fe.y(f=>{const v=P=>this._zone.run(()=>f.next(P));return s.addListener(v),()=>{s.removeListener(v)}}).pipe((0,le.O)(s),(0,A.U)(({matches:f})=>({query:e,matches:f})),(0,te.R)(this._destroySubject)),mql:s};return this._queries.set(e,d),d}}return o.\u0275fac=function(e){return new(e||o)(p.LFG(Le),p.LFG(p.R0b))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function fe(o){return o.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}class ge{constructor(t){this._items=t,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new T.x,this._typeaheadSubscription=R.w0.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=e=>e.disabled,this._pressedLetters=[],this.tabOut=new T.x,this.change=new T.x,t instanceof p.n_E&&(this._itemChangesSubscription=t.changes.subscribe(e=>{if(this._activeItem){const r=e.toArray().indexOf(this._activeItem);r>-1&&r!==this._activeItemIndex&&(this._activeItemIndex=r)}}))}skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe((0,_.b)(e=>this._pressedLetters.push(e)),Q(t),(0,m.h)(()=>this._pressedLetters.length>0),(0,A.U)(()=>this._pressedLetters.join(""))).subscribe(e=>{const s=this._getItemsArray();for(let r=1;r<s.length+1;r++){const d=(this._activeItemIndex+r)%s.length,f=s[d];if(!this._skipPredicateFn(f)&&0===f.getLabel().toUpperCase().trim().indexOf(e)){this.setActiveItem(d);break}}this._pressedLetters=[]}),this}cancelTypeahead(){return this._pressedLetters=[],this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){const e=this._activeItem;this.updateActiveItem(t),this._activeItem!==e&&this.change.next(this._activeItemIndex)}onKeydown(t){const e=t.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(d=>!t[d]||this._allowedModifierKeys.indexOf(d)>-1);switch(e){case g.Mf:return void this.tabOut.next();case g.JH:if(this._vertical&&r){this.setNextItemActive();break}return;case g.LH:if(this._vertical&&r){this.setPreviousItemActive();break}return;case g.SV:if(this._horizontal&&r){"rtl"===this._horizontal?this.setPreviousItemActive():this.setNextItemActive();break}return;case g.oh:if(this._horizontal&&r){"rtl"===this._horizontal?this.setNextItemActive():this.setPreviousItemActive();break}return;case g.Sd:if(this._homeAndEnd&&r){this.setFirstItemActive();break}return;case g.uR:if(this._homeAndEnd&&r){this.setLastItemActive();break}return;case g.Ku:if(this._pageUpAndDown.enabled&&r){const d=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(d>0?d:0,1);break}return;case g.VM:if(this._pageUpAndDown.enabled&&r){const d=this._activeItemIndex+this._pageUpAndDown.delta,f=this._getItemsArray().length;this._setActiveItemByIndex(d<f?d:f-1,-1);break}return;default:return void((r||(0,g.Vb)(t,"shiftKey"))&&(t.key&&1===t.key.length?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=g.A&&e<=g.Z||e>=g.xE&&e<=g.aO)&&this._letterKeyStream.next(String.fromCharCode(e))))}this._pressedLetters=[],t.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){const e=this._getItemsArray(),s="number"==typeof t?t:e.indexOf(t);this._activeItem=e[s]??null,this._activeItemIndex=s}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._letterKeyStream.complete(),this.tabOut.complete(),this.change.complete(),this._pressedLetters=[]}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){const e=this._getItemsArray();for(let s=1;s<=e.length;s++){const r=(this._activeItemIndex+t*s+e.length)%e.length;if(!this._skipPredicateFn(e[r]))return void this.setActiveItem(r)}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex+t,t)}_setActiveItemByIndex(t,e){const s=this._getItemsArray();if(s[t]){for(;this._skipPredicateFn(s[t]);)if(!s[t+=e])return;this.setActiveItem(t)}}_getItemsArray(){return this._items instanceof p.n_E?this._items.toArray():this._items}}class be extends ge{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}}function w(o){return 0===o.buttons||0===o.offsetX&&0===o.offsetY}function se(o){const t=o.touches&&o.touches[0]||o.changedTouches&&o.changedTouches[0];return!(!t||-1!==t.identifier||null!=t.radiusX&&1!==t.radiusX||null!=t.radiusY&&1!==t.radiusY)}const Ae=new p.OlP("cdk-input-modality-detector-options"),q={ignoreKeys:[g.zL,g.jx,g.b2,g.MW,g.JU]},U=(0,y.i$)({passive:!0,capture:!0});let Ie=(()=>{class o{get mostRecentModality(){return this._modality.value}constructor(e,s,r,d){this._platform=e,this._mostRecentTarget=null,this._modality=new I.X(null),this._lastTouchMs=0,this._onKeydown=f=>{this._options?.ignoreKeys?.some(v=>v===f.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,y.sA)(f))},this._onMousedown=f=>{Date.now()-this._lastTouchMs<650||(this._modality.next(w(f)?"keyboard":"mouse"),this._mostRecentTarget=(0,y.sA)(f))},this._onTouchstart=f=>{se(f)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,y.sA)(f))},this._options={...q,...d},this.modalityDetected=this._modality.pipe(k(1)),this.modalityChanged=this.modalityDetected.pipe(function ae(o,t=H.y){return o=o??ce,(0,W.e)((e,s)=>{let r,d=!0;e.subscribe((0,B.x)(s,f=>{const v=t(f);(d||!o(r,v))&&(d=!1,r=v,s.next(f))}))})}()),e.isBrowser&&s.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,U),r.addEventListener("mousedown",this._onMousedown,U),r.addEventListener("touchstart",this._onTouchstart,U)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,U),document.removeEventListener("mousedown",this._onMousedown,U),document.removeEventListener("touchstart",this._onTouchstart,U))}}return o.\u0275fac=function(e){return new(e||o)(p.LFG(y.t4),p.LFG(p.R0b),p.LFG(h.K0),p.LFG(Ae,8))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const nt=new p.OlP("cdk-focus-monitor-default-options"),oe=(0,y.i$)({passive:!0,capture:!0});let st=(()=>{class o{constructor(e,s,r,d,f){this._ngZone=e,this._platform=s,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new T.x,this._rootNodeFocusAndBlurListener=v=>{for(let F=(0,y.sA)(v);F;F=F.parentElement)"focus"===v.type?this._onFocus(v,F):this._onBlur(v,F)},this._document=d,this._detectionMode=f?.detectionMode||0}monitor(e,s=!1){const r=(0,Y.fI)(e);if(!this._platform.isBrowser||1!==r.nodeType)return(0,C.of)(null);const d=(0,y.kV)(r)||this._getDocument(),f=this._elementInfo.get(r);if(f)return s&&(f.checkChildren=!0),f.subject;const v={checkChildren:s,subject:new T.x,rootNode:d};return this._elementInfo.set(r,v),this._registerGlobalListeners(v),v.subject}stopMonitoring(e){const s=(0,Y.fI)(e),r=this._elementInfo.get(s);r&&(r.subject.complete(),this._setClasses(s),this._elementInfo.delete(s),this._removeGlobalListeners(r))}focusVia(e,s,r){const d=(0,Y.fI)(e);d===this._getDocument().activeElement?this._getClosestElementsInfo(d).forEach(([v,P])=>this._originChanged(v,s,P)):(this._setOrigin(s),"function"==typeof d.focus&&d.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,s)=>this.stopMonitoring(s))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,s){e.classList.toggle("cdk-focused",!!s),e.classList.toggle("cdk-touch-focused","touch"===s),e.classList.toggle("cdk-keyboard-focused","keyboard"===s),e.classList.toggle("cdk-mouse-focused","mouse"===s),e.classList.toggle("cdk-program-focused","program"===s)}_setOrigin(e,s=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&s,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,s){const r=this._elementInfo.get(s),d=(0,y.sA)(e);!r||!r.checkChildren&&s!==d||this._originChanged(s,this._getFocusOrigin(d),r)}_onBlur(e,s){const r=this._elementInfo.get(s);!r||r.checkChildren&&e.relatedTarget instanceof Node&&s.contains(e.relatedTarget)||(this._setClasses(s),this._emitOrigin(r,null))}_emitOrigin(e,s){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(s))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const s=e.rootNode,r=this._rootNodeFocusListenerCount.get(s)||0;r||this._ngZone.runOutsideAngular(()=>{s.addEventListener("focus",this._rootNodeFocusAndBlurListener,oe),s.addEventListener("blur",this._rootNodeFocusAndBlurListener,oe)}),this._rootNodeFocusListenerCount.set(s,r+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,te.R)(this._stopInputModalityDetector)).subscribe(d=>{this._setOrigin(d,!0)}))}_removeGlobalListeners(e){const s=e.rootNode;if(this._rootNodeFocusListenerCount.has(s)){const r=this._rootNodeFocusListenerCount.get(s);r>1?this._rootNodeFocusListenerCount.set(s,r-1):(s.removeEventListener("focus",this._rootNodeFocusAndBlurListener,oe),s.removeEventListener("blur",this._rootNodeFocusAndBlurListener,oe),this._rootNodeFocusListenerCount.delete(s))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,s,r){this._setClasses(e,s),this._emitOrigin(r,s),this._lastFocusOrigin=s}_getClosestElementsInfo(e){const s=[];return this._elementInfo.forEach((r,d)=>{(d===e||r.checkChildren&&d.contains(e))&&s.push([d,r])}),s}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:s,mostRecentModality:r}=this._inputModalityDetector;if("mouse"!==r||!s||s===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const d=e.labels;if(d)for(let f=0;f<d.length;f++)if(d[f].contains(s))return!0;return!1}}return o.\u0275fac=function(e){return new(e||o)(p.LFG(p.R0b),p.LFG(y.t4),p.LFG(Ie),p.LFG(h.K0,8),p.LFG(nt,8))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const Ke="cdk-high-contrast-black-on-white",He="cdk-high-contrast-white-on-black",we="cdk-high-contrast-active";let ot=(()=>{class o{constructor(e,s){this._platform=e,this._document=s,this._breakpointSubscription=(0,p.f3M)(me).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const s=this._document.defaultView||window,r=s&&s.getComputedStyle?s.getComputedStyle(e):null,d=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),d){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(we,Ke,He),this._hasCheckedHighContrastMode=!0;const s=this.getHighContrastMode();1===s?e.add(we,Ke):2===s&&e.add(we,He)}}}return o.\u0275fac=function(e){return new(e||o)(p.LFG(y.t4),p.LFG(h.K0))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},445:(z,L,u)=>{u.d(L,{Is:()=>C,vT:()=>_});var h=u(4650),p=u(6895);const y=new h.OlP("cdk-dir-doc",{providedIn:"root",factory:function T(){return(0,h.f3M)(p.K0)}}),R=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let C=(()=>{class M{constructor(E){this.value="ltr",this.change=new h.vpe,E&&(this.value=function I(M){const D=M?.toLowerCase()||"";return"auto"===D&&typeof navigator<"u"&&navigator?.language?R.test(navigator.language)?"rtl":"ltr":"rtl"===D?"rtl":"ltr"}((E.body?E.body.dir:null)||(E.documentElement?E.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}}return M.\u0275fac=function(E){return new(E||M)(h.LFG(y,8))},M.\u0275prov=h.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})(),_=(()=>{class M{}return M.\u0275fac=function(E){return new(E||M)},M.\u0275mod=h.oAB({type:M}),M.\u0275inj=h.cJS({}),M})()},1281:(z,L,u)=>{u.d(L,{Eq:()=>R,Ig:()=>p,fI:()=>C,su:()=>y});var h=u(4650);function p(_){return null!=_&&"false"!=`${_}`}function y(_,M=0){return function T(_){return!isNaN(parseFloat(_))&&!isNaN(Number(_))}(_)?Number(_):M}function R(_){return Array.isArray(_)?_:[_]}function C(_){return _ instanceof h.SBq?_.nativeElement:_}},9521:(z,L,u)=>{u.d(L,{A:()=>he,JH:()=>B,JU:()=>I,K5:()=>R,Ku:()=>O,LH:()=>X,L_:()=>E,MW:()=>Me,Mf:()=>y,SV:()=>W,Sd:()=>K,VM:()=>S,Vb:()=>lt,Z:()=>ye,ZH:()=>p,aO:()=>le,b2:()=>dt,jx:()=>C,oh:()=>Z,uR:()=>N,xE:()=>H,yY:()=>k,zL:()=>g});const p=8,y=9,R=13,I=16,C=17,g=18,E=32,O=33,S=34,N=35,K=36,Z=37,X=38,W=39,B=40,k=46,H=48,le=57,he=65,ye=90,Me=91,dt=224;function lt(re,...rt){return rt.length?rt.some(ut=>re[ut]):re.altKey||re.shiftKey||re.ctrlKey||re.metaKey}},3353:(z,L,u)=>{u.d(L,{Oy:()=>Q,i$:()=>D,kV:()=>X,sA:()=>B,t4:()=>T});var h=u(4650),p=u(6895);let y;try{y=typeof Intl<"u"&&Intl.v8BreakIterator}catch{y=!1}let _,K,T=(()=>{class m{constructor(k){this._platformId=k,this.isBrowser=this._platformId?(0,p.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!y)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return m.\u0275fac=function(k){return new(k||m)(h.LFG(h.Lbi))},m.\u0275prov=h.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();function D(m){return function M(){if(null==_&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>_=!0}))}finally{_=_||!1}return _}()?m:!!m.capture}function X(m){if(function Z(){if(null==K){const m=typeof document<"u"?document.head:null;K=!(!m||!m.createShadowRoot&&!m.attachShadow)}return K}()){const A=m.getRootNode?m.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&A instanceof ShadowRoot)return A}return null}function B(m){return m.composedPath?m.composedPath()[0]:m.target}function Q(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}},3238:(z,L,u)=>{u.d(L,{rD:()=>me,Y2:()=>ve,BQ:()=>B,wG:()=>be,si:()=>Be,pj:()=>H,Kr:()=>ae,Id:()=>k,FD:()=>te,sb:()=>ce});var h=u(4650),p=u(5901),y=u(445),R=u(6895),I=u(3353),C=u(1281);const W=new h.OlP("mat-sanity-checks",{providedIn:"root",factory:function X(){return!0}});let B=(()=>{class c{constructor(i,a,l){this._sanityChecks=a,this._document=l,this._hasDoneGlobalChecks=!1,i._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(i){return!(0,I.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[i])}}return c.\u0275fac=function(i){return new(i||c)(h.LFG(p.qm),h.LFG(W,8),h.LFG(R.K0))},c.\u0275mod=h.oAB({type:c}),c.\u0275inj=h.cJS({imports:[y.vT,y.vT]}),c})();function k(c){return class extends c{get disabled(){return this._disabled}set disabled(n){this._disabled=(0,C.Ig)(n)}constructor(...n){super(...n),this._disabled=!1}}}function H(c,n){return class extends c{get color(){return this._color}set color(i){const a=i||this.defaultColor;a!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),a&&this._elementRef.nativeElement.classList.add(`mat-${a}`),this._color=a)}constructor(...i){super(...i),this.defaultColor=n,this.color=n}}}function ae(c){return class extends c{get disableRipple(){return this._disableRipple}set disableRipple(n){this._disableRipple=(0,C.Ig)(n)}constructor(...n){super(...n),this._disableRipple=!1}}}function ce(c,n=0){return class extends c{get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(i){this._tabIndex=null!=i?(0,C.su)(i):this.defaultTabIndex}constructor(...i){super(...i),this._tabIndex=n,this.defaultTabIndex=n}}}function te(c){return class extends c{updateErrorState(){const n=this.errorState,b=(this.errorStateMatcher||this._defaultErrorStateMatcher).isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);b!==n&&(this.errorState=b,this.stateChanges.next())}constructor(...n){super(...n),this.errorState=!1}}}let me=(()=>{class c{isErrorState(i,a){return!!(i&&i.invalid&&(i.touched||a&&a.submitted))}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=h.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();class Se{constructor(n,i,a,l=!1){this._renderer=n,this.element=i,this.config=a,this._animationForciblyDisabledThroughCss=l,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const J=(0,I.i$)({passive:!0,capture:!0});class Ne{constructor(){this._events=new Map,this._delegateEventHandler=n=>{const i=(0,I.sA)(n);i&&this._events.get(n.type)?.forEach((a,l)=>{(l===i||l.contains(i))&&a.forEach(b=>b.handleEvent(n))})}}addHandler(n,i,a,l){const b=this._events.get(i);if(b){const w=b.get(a);w?w.add(l):b.set(a,new Set([l]))}else this._events.set(i,new Map([[a,new Set([l])]])),n.runOutsideAngular(()=>{document.addEventListener(i,this._delegateEventHandler,J)})}removeHandler(n,i,a){const l=this._events.get(n);if(!l)return;const b=l.get(i);b&&(b.delete(a),0===b.size&&l.delete(i),0===l.size&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,J)))}}const ie={enterDuration:225,exitDuration:150},ne=(0,I.i$)({passive:!0,capture:!0}),pe=["mousedown","touchstart"],_e=["mouseup","mouseleave","touchend","touchcancel"];class ${constructor(n,i,a,l){this._target=n,this._ngZone=i,this._platform=l,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,l.isBrowser&&(this._containerElement=(0,C.fI)(a))}fadeInRipple(n,i,a={}){const l=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),b={...ie,...a.animation};a.centered&&(n=l.left+l.width/2,i=l.top+l.height/2);const w=a.radius||function ge(c,n,i){const a=Math.max(Math.abs(c-i.left),Math.abs(c-i.right)),l=Math.max(Math.abs(n-i.top),Math.abs(n-i.bottom));return Math.sqrt(a*a+l*l)}(n,i,l),se=n-l.left,Ae=i-l.top,q=b.enterDuration,x=document.createElement("div");x.classList.add("mat-ripple-element"),x.style.left=se-w+"px",x.style.top=Ae-w+"px",x.style.height=2*w+"px",x.style.width=2*w+"px",null!=a.color&&(x.style.backgroundColor=a.color),x.style.transitionDuration=`${q}ms`,this._containerElement.appendChild(x);const U=window.getComputedStyle(x),De=U.transitionDuration,ee="none"===U.transitionProperty||"0s"===De||"0s, 0s"===De||0===l.width&&0===l.height,V=new Se(this,x,a,ee);x.style.transform="scale3d(1, 1, 1)",V.state=0,a.persistent||(this._mostRecentTransientRipple=V);let Te=null;return!ee&&(q||b.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const Ce=()=>this._finishRippleTransition(V),Oe=()=>this._destroyRipple(V);x.addEventListener("transitionend",Ce),x.addEventListener("transitioncancel",Oe),Te={onTransitionEnd:Ce,onTransitionCancel:Oe}}),this._activeRipples.set(V,Te),(ee||!q)&&this._finishRippleTransition(V),V}fadeOutRipple(n){if(2===n.state||3===n.state)return;const i=n.element,a={...ie,...n.config.animation};i.style.transitionDuration=`${a.exitDuration}ms`,i.style.opacity="0",n.state=2,(n._animationForciblyDisabledThroughCss||!a.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){const i=(0,C.fI)(n);!this._platform.isBrowser||!i||i===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=i,pe.forEach(a=>{$._eventManager.addHandler(this._ngZone,a,i,this)}))}handleEvent(n){"mousedown"===n.type?this._onMousedown(n):"touchstart"===n.type?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{_e.forEach(i=>{this._triggerElement.addEventListener(i,this,ne)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){0===n.state?this._startFadeOutTransition(n):2===n.state&&this._destroyRipple(n)}_startFadeOutTransition(n){const i=n===this._mostRecentTransientRipple,{persistent:a}=n.config;n.state=1,!a&&(!i||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){const i=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=3,null!==i&&(n.element.removeEventListener("transitionend",i.onTransitionEnd),n.element.removeEventListener("transitioncancel",i.onTransitionCancel)),n.element.remove()}_onMousedown(n){const i=(0,p.X6)(n),a=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!i&&!a&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!(0,p.yG)(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const i=n.changedTouches;for(let a=0;a<i.length;a++)this.fadeInRipple(i[a].clientX,i[a].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{!n.config.persistent&&(1===n.state||n.config.terminateOnPointerUp&&0===n.state)&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const n=this._triggerElement;n&&(pe.forEach(i=>$._eventManager.removeHandler(i,n,this)),this._pointerUpEventsRegistered&&_e.forEach(i=>n.removeEventListener(i,this,ne)))}}$._eventManager=new Ne;const ve=new h.OlP("mat-ripple-global-options");let be=(()=>{class c{get disabled(){return this._disabled}set disabled(i){i&&this.fadeOutAllNonPersistent(),this._disabled=i,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(i){this._trigger=i,this._setupTriggerEventsIfEnabled()}constructor(i,a,l,b,w){this._elementRef=i,this._animationMode=w,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=b||{},this._rippleRenderer=new $(this,a,i,l)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(i,a=0,l){return"number"==typeof i?this._rippleRenderer.fadeInRipple(i,a,{...this.rippleConfig,...l}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...i})}}return c.\u0275fac=function(i){return new(i||c)(h.Y36(h.SBq),h.Y36(h.R0b),h.Y36(I.t4),h.Y36(ve,8),h.Y36(h.QbO,8))},c.\u0275dir=h.lG2({type:c,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,a){2&i&&h.ekj("mat-ripple-unbounded",a.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]}),c})(),Be=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=h.oAB({type:c}),c.\u0275inj=h.cJS({imports:[B,B]}),c})()}}]);