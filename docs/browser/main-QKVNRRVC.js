import{b as F,c as I,e as M,f as P,g as D}from"./chunk-XKNEFKNV.js";import{Da as u,Pb as R,Ta as g,Ua as f,W as d,Wa as y,Y as p,Ya as v,Za as C,_b as b,ca as h,ga as c,ja as m,mc as w,sb as A}from"./chunk-TRPJRBGE.js";var N=[{path:"",redirectTo:"/calendar",pathMatch:"full"},{path:"calendar",loadChildren:()=>import("./chunk-WRRBAT2A.js").then(n=>n.CalendarModule)}];var _="@",k=(()=>{let e=class e{constructor(r,o,i,s,a){this.doc=r,this.delegate=o,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=h(f,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-43IVN6LN.js").then(o=>o)).catch(o=>{throw new d(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,o){let i=this.delegate.createRenderer(r,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new l(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let O=a.createRenderer(r,o);s.use(O),this.scheduler?.notify(9)}).catch(a=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){g()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let n=e;return n})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(_)}};function S(n="animations"){return v("NgAsyncAnimations"),m([{provide:y,useFactory:(e,t,r)=>new k(e,t,r,n),deps:[w,F,C]},{provide:u,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var x={providers:[b({eventCoalescing:!0}),D(N),M(),S()]};var E=(()=>{class n{title="calendar-app";static \u0275fac=function(r){return new(r||n)};static \u0275cmp=c({type:n,selectors:[["app-root"]],standalone:!0,features:[R],decls:1,vars:0,template:function(r,o){r&1&&A(0,"router-outlet")},dependencies:[P]})}return n})();I(E,x).catch(n=>console.error(n));
