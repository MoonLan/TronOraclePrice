(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1323:function(t,o,e){var n,r,c=e(166),l=c.addEventListener,h=c.removeEventListener,m=c.normalizeEvent,d=c.getNativeEvent,f=e(1),v=e(216),w=e(80),T=w.domSupported,_=(r={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},{mouse:n=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],touch:["touchstart","touchend","touchmove"],pointer:f.map(n,(function(t){var o=t.replace("mouse","pointer");return r.hasOwnProperty(o)?o:t}))}),y=["mousemove","mouseup"],C=["pointermove","pointerup"];function S(t){return"mousewheel"===t&&w.browser.firefox?"DOMMouseScroll":t}function E(t){var o=t.pointerType;return"pen"===o||"touch"===o}function z(t){t&&(t.zrByTouch=!0)}function H(t,o){for(var e=o,n=!1;e&&9!==e.nodeType&&!(n=e.domBelongToZr||e!==o&&e===t.painterRoot);)e=e.parentNode;return n}function P(t,o){this.type=o.type,this.target=this.currentTarget=t.dom,this.pointerType=o.pointerType,this.clientX=o.clientX,this.clientY=o.clientY}var k=P.prototype;k.stopPropagation=k.stopImmediatePropagation=k.preventDefault=f.noop;var O={mousedown:function(t){t=m(this.dom,t),this._mayPointerCapture=[t.zrX,t.zrY],this.trigger("mousedown",t)},mousemove:function(t){t=m(this.dom,t);var o=this._mayPointerCapture;!o||t.zrX===o[0]&&t.zrY===o[1]||G(this,!0),this.trigger("mousemove",t)},mouseup:function(t){t=m(this.dom,t),G(this,!1),this.trigger("mouseup",t)},mouseout:function(t){t=m(this.dom,t),this._pointerCapturing&&(t.zrEventControl="no_globalout");var element=t.toElement||t.relatedTarget;t.zrIsToLocalDOM=H(this,element),this.trigger("mouseout",t)},touchstart:function(t){z(t=m(this.dom,t)),this._lastTouchMoment=new Date,this.handler.processGesture(t,"start"),O.mousemove.call(this,t),O.mousedown.call(this,t)},touchmove:function(t){z(t=m(this.dom,t)),this.handler.processGesture(t,"change"),O.mousemove.call(this,t)},touchend:function(t){z(t=m(this.dom,t)),this.handler.processGesture(t,"end"),O.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&O.click.call(this,t)},pointerdown:function(t){O.mousedown.call(this,t)},pointermove:function(t){E(t)||O.mousemove.call(this,t)},pointerup:function(t){O.mouseup.call(this,t)},pointerout:function(t){E(t)||O.mouseout.call(this,t)}};f.each(["click","mousewheel","dblclick","contextmenu"],(function(t){O[t]=function(o){o=m(this.dom,o),this.trigger(t,o)}}));var x={pointermove:function(t){E(t)||x.mousemove.call(this,t)},pointerup:function(t){x.mouseup.call(this,t)},mousemove:function(t){this.trigger("mousemove",t)},mouseup:function(t){var o=this._pointerCapturing;G(this,!1),this.trigger("mouseup",t),o&&(t.zrEventControl="only_globalout",this.trigger("mouseout",t))}};function D(t,o){var e=o.domHandlers;w.pointerEventsSupported?f.each(_.pointer,(function(n){X(o,n,(function(o){e[n].call(t,o)}))})):(w.touchEventsSupported&&f.each(_.touch,(function(n){X(o,n,(function(r){e[n].call(t,r),function(t){t.touching=!0,null!=t.touchTimer&&(clearTimeout(t.touchTimer),t.touchTimer=null),t.touchTimer=setTimeout((function(){t.touching=!1,t.touchTimer=null}),700)}(o)}))})),f.each(_.mouse,(function(n){X(o,n,(function(r){r=d(r),o.touching||e[n].call(t,r)}))})))}function M(t,o){function e(e){X(o,e,(function(n){n=d(n),H(t,n.target)||(n=function(t,o){return m(t.dom,new P(t,o),!0)}(t,n),o.domHandlers[e].call(t,n))}),{capture:!0})}w.pointerEventsSupported?f.each(C,e):w.touchEventsSupported||f.each(y,e)}function X(t,o,e,n){t.mounted[o]=e,t.listenerOpts[o]=n,l(t.domTarget,S(o),e,n)}function Y(t){var o=t.mounted;for(var e in o)o.hasOwnProperty(e)&&h(t.domTarget,S(e),o[e],t.listenerOpts[e]);t.mounted={}}function G(t,o){if(t._mayPointerCapture=null,T&&t._pointerCapturing^o){t._pointerCapturing=o;var e=t._globalHandlerScope;o?M(t,e):Y(e)}}function L(t,o){this.domTarget=t,this.domHandlers=o,this.mounted={},this.listenerOpts={},this.touchTimer=null,this.touching=!1}function B(t,o){v.call(this),this.dom=t,this.painterRoot=o,this._localHandlerScope=new L(t,O),T&&(this._globalHandlerScope=new L(document,x)),this._pointerCapturing=!1,this._mayPointerCapture=null,D(this,this._localHandlerScope)}var I=B.prototype;I.dispose=function(){Y(this._localHandlerScope),T&&Y(this._globalHandlerScope)},I.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},f.mixin(B,v);var J=B;t.exports=J}}]);