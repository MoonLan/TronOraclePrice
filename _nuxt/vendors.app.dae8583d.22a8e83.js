(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{158:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n=r(6),o=r(11),h=r(45),c=r(10),_=r(19),d=r(4),l=function(t,b){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)};var x=new c.g,f=new Uint16Array([0,1,2,0,2,3]),m=function(t){function e(e){var r=t.call(this)||this;return r._anchor=new c.e(r._onAnchorUpdate,r,e?e.defaultAnchor.x:0,e?e.defaultAnchor.y:0),r._texture=null,r._width=0,r._height=0,r._tint=null,r._tintRGB=null,r.tint=16777215,r.blendMode=n.b.NORMAL,r._cachedTint=16777215,r.uvs=null,r.texture=e||o.p.EMPTY,r.vertexData=new Float32Array(8),r.vertexTrimmedData=null,r._transformID=-1,r._textureID=-1,r._transformTrimmedID=-1,r._textureTrimmedID=-1,r.indices=f,r.pluginName="batch",r.isSprite=!0,r._roundPixels=_.b.ROUND_PIXELS,r}return function(t,b){function e(){this.constructor=t}l(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}(e,t),e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=Object(d.y)(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=Object(d.y)(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=function(){var t=this._texture;if(this._transformID!==this.transform._worldID||this._textureID!==t._updateID){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;var e=this.transform.worldTransform,a=e.a,b=e.b,r=e.c,n=e.d,o=e.tx,h=e.ty,c=this.vertexData,d=t.trim,l=t.orig,x=this._anchor,f=0,m=0,y=0,h1=0;if(d?(f=(m=d.x-x._x*l.width)+d.width,y=(h1=d.y-x._y*l.height)+d.height):(f=(m=-x._x*l.width)+l.width,y=(h1=-x._y*l.height)+l.height),c[0]=a*m+r*h1+o,c[1]=n*h1+b*m+h,c[2]=a*f+r*h1+o,c[3]=n*h1+b*f+h,c[4]=a*f+r*y+o,c[5]=n*y+b*f+h,c[6]=a*m+r*y+o,c[7]=n*y+b*m+h,this._roundPixels)for(var w=_.b.RESOLUTION,i=0;i<c.length;++i)c[i]=Math.round((c[i]*w|0)/w)}},e.prototype.calculateTrimmedVertices=function(){if(this.vertexTrimmedData){if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return}else this.vertexTrimmedData=new Float32Array(8);this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,e=this.vertexTrimmedData,r=t.orig,n=this._anchor,o=this.transform.worldTransform,a=o.a,b=o.b,h=o.c,c=o.d,_=o.tx,d=o.ty,l=-n._x*r.width,x=l+r.width,h1=-n._y*r.height,f=h1+r.height;e[0]=a*l+h*h1+_,e[1]=c*h1+b*l+d,e[2]=a*x+h*h1+_,e[3]=c*h1+b*x+d,e[4]=a*x+h*f+_,e[5]=c*f+b*x+d,e[6]=a*l+h*f+_,e[7]=c*f+b*l+d},e.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,e=this._texture.orig;!t||t.width===e.width&&t.height===e.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(rect){return 0===this.children.length?(this._bounds.minX=this._texture.orig.width*-this._anchor._x,this._bounds.minY=this._texture.orig.height*-this._anchor._y,this._bounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._bounds.maxY=this._texture.orig.height*(1-this._anchor._y),rect||(this._localBoundsRect||(this._localBoundsRect=new c.j),rect=this._localBoundsRect),this._bounds.getRectangle(rect)):t.prototype.getLocalBounds.call(this,rect)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,x);var e=this._texture.orig.width,r=this._texture.orig.height,n=-e*this.anchor.x,o=0;return x.x>=n&&x.x<n+e&&(o=-r*this.anchor.y,x.y>=o&&x.y<o+r)},e.prototype.destroy=function(e){if(t.prototype.destroy.call(this,e),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,"boolean"==typeof e?e:e&&e.texture){var r="boolean"==typeof e?e:e&&e.baseTexture;this._texture.destroy(!!r)}this._texture=null},e.from=function(source,t){return new e(source instanceof o.p?source:o.p.from(source,t))},Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var s=Object(d.y)(this.scale.x)||1;this.scale.x=s*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var s=Object(d.y)(this.scale.y)||1;this.scale.y=s*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(65280&t)+((255&t)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||o.p.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),e}(h.b)}}]);