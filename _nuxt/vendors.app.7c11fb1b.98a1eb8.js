(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{374:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r(11),o=r(10),h=r(158),c=r(4),l=r(6),d=function(t,b){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)};function m(t,b){function e(){this.constructor=t}d(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}var f=new o.g,_=(function(t){function e(e,r,h){void 0===r&&(r=100),void 0===h&&(h=100);var c=t.call(this,e)||this;return c.tileTransform=new o.m,c._width=r,c._height=h,c.uvMatrix=c.texture.uvMatrix||new n.q(e),c.pluginName="tilingSprite",c.uvRespectAnchor=!1,c}m(e,t),Object.defineProperty(e.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},e.prototype._render=function(t){var e=this._texture;e&&e.valid&&(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,e=this._height*-this._anchor._y,r=this._width*(1-this._anchor._x),n=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,e,r,n)},e.prototype.getLocalBounds=function(rect){return 0===this.children.length?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),rect||(this._localBoundsRect||(this._localBoundsRect=new o.j),rect=this._localBoundsRect),this._bounds.getRectangle(rect)):t.prototype.getLocalBounds.call(this,rect)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,f);var e=this._width,r=this._height,n=-e*this.anchor._x;if(f.x>=n&&f.x<n+e){var o=-r*this.anchor._y;if(f.y>=o&&f.y<o+r)return!0}return!1},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this.tileTransform=null,this.uvMatrix=null},e.from=function(source,t){return"number"==typeof t&&(Object(c.h)("5.3.0","TilingSprite.from use options instead of width and height args"),t={width:t,height:arguments[2]}),new e(n.p.from(source,t),t.width,t.height)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0})}(h.a),"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n"),y=new o.d,v=function(t){function e(e){var r=t.call(this,e)||this,o={globals:r.renderer.globalUniforms};return r.shader=n.n.from(_,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n",o),r.simpleShader=n.n.from(_,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n",o),r.quad=new n.k,r.state=n.o.for2d(),r}return m(e,t),e.prototype.render=function(t){var e=this.renderer,r=this.quad,n=r.vertices;n[0]=n[6]=t._width*-t.anchor.x,n[1]=n[3]=t._height*-t.anchor.y,n[2]=n[4]=t._width*(1-t.anchor.x),n[5]=n[7]=t._height*(1-t.anchor.y),t.uvRespectAnchor&&((n=r.uvs)[0]=n[6]=-t.anchor.x,n[1]=n[3]=-t.anchor.y,n[2]=n[4]=1-t.anchor.x,n[5]=n[7]=1-t.anchor.y),r.invalidate();var o=t._texture,h=o.baseTexture,d=t.tileTransform.localTransform,m=t.uvMatrix,f=h.isPowerOfTwo&&o.frame.width===h.width&&o.frame.height===h.height;f&&(h._glTextures[e.CONTEXT_UID]?f=h.wrapMode!==l.q.CLAMP:h.wrapMode===l.q.CLAMP&&(h.wrapMode=l.q.REPEAT));var _=f?this.simpleShader:this.shader,v=o.width,x=o.height,T=t._width,C=t._height;y.set(d.a*v/T,d.b*v/C,d.c*x/T,d.d*x/C,d.tx/T,d.ty/C),y.invert(),f?y.prepend(m.mapCoord):(_.uniforms.uMapCoord=m.mapCoord.toArray(!0),_.uniforms.uClampFrame=m.uClampFrame,_.uniforms.uClampOffset=m.uClampOffset),_.uniforms.uTransform=y.toArray(!0),_.uniforms.uColor=Object(c.v)(t.tint,t.worldAlpha,_.uniforms.uColor,h.alphaMode),_.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),_.uniforms.uSampler=o,e.shader.bind(_),e.geometry.bind(r),this.state.blendMode=Object(c.f)(t.blendMode,h.alphaMode),e.state.set(this.state),e.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},e}(n.i)},650:function(t,e,r){"use strict";var n=r(11),o=r(158),h=r(66),c=function(t,b){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)};!function(t){function e(e,r){void 0===r&&(r=!0);var o=t.call(this,e[0]instanceof n.p?e[0]:e[0].texture)||this;return o._textures=null,o._durations=null,o._autoUpdate=r,o._isConnectedToTicker=!1,o.animationSpeed=1,o.loop=!0,o.updateAnchor=!1,o.onComplete=null,o.onFrameChange=null,o.onLoop=null,o._currentTime=0,o._playing=!1,o._previousFrame=null,o.textures=e,o}(function(t,b){function e(){this.constructor=t}c(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)})(e,t),e.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(h.a.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(h.a.shared.add(this.update,this,h.c.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(this._playing){var e=this.animationSpeed*t,r=this.currentFrame;if(null!==this._durations){var n=this._currentTime%1*this._durations[this.currentFrame];for(n+=e/60*1e3;n<0;)this._currentTime--,n+=this._durations[this.currentFrame];var o=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);n>=this._durations[this.currentFrame];)n-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=n/this._durations[this.currentFrame]}else this._currentTime+=e;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r||this.animationSpeed<0&&this.currentFrame>r)&&this.onLoop(),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(e){this.stop(),t.prototype.destroy.call(this,e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var r=[],i=0;i<t.length;++i)r.push(n.p.from(t[i]));return new e(r)},e.fromImages=function(t){for(var r=[],i=0;i<t.length;++i)r.push(n.p.from(t[i]));return new e(r)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof n.p)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var i=0;i<t.length;i++)this._textures.push(t[i].texture),this._durations.push(t[i].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(h.a.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(h.a.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0})}(o.a)}}]);