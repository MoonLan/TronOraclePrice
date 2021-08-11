/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1158:function(t,e,r){"use strict";var n=r(11),h=r(158),o=r(45),c=r(10),l=r(4),d=r(19),_=new c.d;o.c.prototype._cacheAsBitmap=!1,o.c.prototype._cacheData=null;var f=function(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null};Object.defineProperties(o.c.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){var data;this._cacheAsBitmap!==t&&(this._cacheAsBitmap=t,t?(this._cacheData||(this._cacheData=new f),(data=this._cacheData).originalRender=this.render,data.originalRenderCanvas=this.renderCanvas,data.originalUpdateTransform=this.updateTransform,data.originalCalculateBounds=this.calculateBounds,data.originalGetLocalBounds=this.getLocalBounds,data.originalDestroy=this.destroy,data.originalContainsPoint=this.containsPoint,data.originalMask=this._mask,data.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):((data=this._cacheData).sprite&&this._destroyCachedDisplayObject(),this.render=data.originalRender,this.renderCanvas=data.originalRenderCanvas,this.calculateBounds=data.originalCalculateBounds,this.getLocalBounds=data.originalGetLocalBounds,this.destroy=data.originalDestroy,this.updateTransform=data.originalUpdateTransform,this.containsPoint=data.originalContainsPoint,this._mask=data.originalMask,this.filterArea=data.originalFilterArea))}}}),o.c.prototype._renderCached=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(t))},o.c.prototype._initCachedDisplayObject=function(t){if(!this._cacheData||!this._cacheData.sprite){var e=this.alpha;this.alpha=1,t.batch.flush();var r=this.getLocalBounds(null,!0).clone();if(this.filters){var o=this.filters[0].padding;r.pad(o)}r.ceil(d.b.RESOLUTION);var c=t.renderTexture.current,f=t.renderTexture.sourceFrame.clone(),m=t.renderTexture.destinationFrame.clone(),C=t.projection.transform,y=n.l.create({width:r.width,height:r.height}),D="cacheAsBitmap_"+Object(l.B)();this._cacheData.textureCacheId=D,n.a.addToCache(y.baseTexture,D),n.p.addToCache(y,D);var v=this.transform.localTransform.copyTo(_).invert().translate(-r.x,-r.y);this.render=this._cacheData.originalRender,t.render(this,y,!0,v,!1),t.projection.transform=C,t.renderTexture.bind(c,f,m),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null;var B=new h.a(y);B.transform.worldTransform=this.transform.worldTransform,B.anchor.x=-r.x/r.width,B.anchor.y=-r.y/r.height,B.alpha=e,B._bounds=this._bounds,this._cacheData.sprite=B,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=B.containsPoint.bind(B)}},o.c.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(t))},o.c.prototype._initCachedDisplayObjectCanvas=function(t){if(!this._cacheData||!this._cacheData.sprite){var e=this.getLocalBounds(null,!0),r=this.alpha;this.alpha=1;var o=t.context,c=t._projTransform;e.ceil(d.b.RESOLUTION);var f=n.l.create({width:e.width,height:e.height}),m="cacheAsBitmap_"+Object(l.B)();this._cacheData.textureCacheId=m,n.a.addToCache(f.baseTexture,m),n.p.addToCache(f,m);var C=_;this.transform.localTransform.copyTo(C),C.invert(),C.tx-=e.x,C.ty-=e.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,f,!0,C,!1),t.context=o,t._projTransform=c,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null;var y=new h.a(f);y.transform.worldTransform=this.transform.worldTransform,y.anchor.x=-e.x/e.width,y.anchor.y=-e.y/e.height,y.alpha=r,y._bounds=this._bounds,this._cacheData.sprite=y,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=y.containsPoint.bind(y)}},o.c.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID},o.c.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)},o.c.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,n.a.removeFromCache(this._cacheData.textureCacheId),n.p.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null},o.c.prototype._cacheAsBitmapDestroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)}},1159:function(t,e,r){"use strict";var n=r(45);n.c.prototype.name=null,n.b.prototype.getChildByName=function(t,e){for(var i=0,r=this.children.length;i<r;i++)if(this.children[i].name===t)return this.children[i];if(e)for(i=0,r=this.children.length;i<r;i++){if(this.children[i].getChildByName){var n=this.children[i].getChildByName(t,!0);if(n)return n}}return null}},1160:function(t,e,r){"use strict";var n=r(45),h=r(10);n.c.prototype.getGlobalPosition=function(t,e){return void 0===t&&(t=new h.g),void 0===e&&(e=!1),this.parent?this.parent.toGlobal(this.position,t,e):(t.x=this.position.x,t.y=this.position.y),t}}}]);