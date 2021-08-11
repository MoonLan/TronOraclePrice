(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{373:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(10),o=r(11),h=r(4),l=r(150),f=function(){function t(t,data,e){void 0===e&&(e=null),this._texture=t instanceof o.p?t:null,this.baseTexture=t instanceof o.a?t:this._texture.baseTexture,this.textures={},this.animations={},this.data=data;var r=this.baseTexture.resource;this.resolution=this._updateResolution(e||(r?r.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return t.prototype._updateResolution=function(t){void 0===t&&(t=null);var e=this.data.meta.scale,r=Object(h.k)(t,null);return null===r&&(r=void 0!==e?parseFloat(e):1),1!==r&&this.baseTexture.setResolution(r),r},t.prototype.parse=function(e){this._batchIndex=0,this._callback=e,this._frameKeys.length<=t.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()},t.prototype._processFrames=function(e){for(var r=e,h=t.BATCH_SIZE;r-e<h&&r<this._frameKeys.length;){var i=this._frameKeys[r],data=this._frames[i],rect=data.frame;if(rect){var l=null,f=null,c=!1!==data.trimmed&&data.sourceSize?data.sourceSize:data.frame,d=new n.j(0,0,Math.floor(c.w)/this.resolution,Math.floor(c.h)/this.resolution);l=data.rotated?new n.j(Math.floor(rect.x)/this.resolution,Math.floor(rect.y)/this.resolution,Math.floor(rect.h)/this.resolution,Math.floor(rect.w)/this.resolution):new n.j(Math.floor(rect.x)/this.resolution,Math.floor(rect.y)/this.resolution,Math.floor(rect.w)/this.resolution,Math.floor(rect.h)/this.resolution),!1!==data.trimmed&&data.spriteSourceSize&&(f=new n.j(Math.floor(data.spriteSourceSize.x)/this.resolution,Math.floor(data.spriteSourceSize.y)/this.resolution,Math.floor(rect.w)/this.resolution,Math.floor(rect.h)/this.resolution)),this.textures[i]=new o.p(this.baseTexture,l,d,f,data.rotated?2:0,data.anchor),o.p.addToCache(this.textures[i],i)}r++}},t.prototype._processAnimations=function(){var t=this.data.animations||{};for(var e in t){this.animations[e]=[];for(var i=0;i<t[e].length;i++){var r=t[e][i];this.animations[e].push(this.textures[r])}}},t.prototype._parseComplete=function(){var t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)},t.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*t.BATCH_SIZE),this._batchIndex++,setTimeout((function(){e._batchIndex*t.BATCH_SIZE<e._frameKeys.length?e._nextBatch():(e._processAnimations(),e._parseComplete())}),0)},t.prototype.destroy=function(t){var e;for(var i in void 0===t&&(t=!1),this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(null===(e=this._texture)||void 0===e||e.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null},t.BATCH_SIZE=1e3,t}(),c=function(){function t(){}return t.use=function(e,r){var n=this,o=e.name+"_image";if(e.data&&e.type===l.c.TYPE.JSON&&e.data.frames&&!n.resources[o]){var h={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},c=t.getResourcePath(e,n.baseUrl);n.add(o,c,h,(function(t){if(t.error)r(t.error);else{var n=new f(t.texture,e.data,e.url);n.parse((function(){e.spritesheet=n,e.textures=n.textures,r()}))}}))}else r()},t.getResourcePath=function(t,e){return t.isDataUrl?t.data.meta.image:h.C.resolve(t.url.replace(e,""),t.data.meta.image)},t}()},375:function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));var n=r(10),o=r(19),h=r(106),l=r(4),f=r(11),c=r(143),d=r(45),m=r(150),v=function(t,b){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)};var x=function(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[]},y=function(){function t(){}return t.test=function(data){return"string"==typeof data&&0===data.indexOf("info face=")},t.parse=function(t){var e=t.match(/^[a-z]+\s+.+$/gm),r={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[]};for(var i in e){var n=e[i].match(/^[a-z]+/gm)[0],o=e[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),h={};for(var l in o){var f=o[l].split("="),c=f[0],d=f[1].replace(/"/gm,""),m=parseFloat(d),v=isNaN(m)?d:m;h[c]=v}r[n].push(h)}var y=new x;return r.info.forEach((function(t){return y.info.push({face:t.face,size:parseInt(t.size,10)})})),r.common.forEach((function(t){return y.common.push({lineHeight:parseInt(t.lineHeight,10)})})),r.page.forEach((function(t){return y.page.push({id:parseInt(t.id,10),file:t.file})})),r.char.forEach((function(t){return y.char.push({id:parseInt(t.id,10),page:parseInt(t.page,10),x:parseInt(t.x,10),y:parseInt(t.y,10),width:parseInt(t.width,10),height:parseInt(t.height,10),xoffset:parseInt(t.xoffset,10),yoffset:parseInt(t.yoffset,10),xadvance:parseInt(t.xadvance,10)})})),r.kerning.forEach((function(t){return y.kerning.push({first:parseInt(t.first,10),second:parseInt(t.second,10),amount:parseInt(t.amount,10)})})),y},t}(),_=function(){function t(){}return t.test=function(data){return data instanceof XMLDocument&&data.getElementsByTagName("page").length&&null!==data.getElementsByTagName("info")[0].getAttribute("face")},t.parse=function(t){for(var data=new x,e=t.getElementsByTagName("info"),r=t.getElementsByTagName("common"),n=t.getElementsByTagName("page"),o=t.getElementsByTagName("char"),h=t.getElementsByTagName("kerning"),i=0;i<e.length;i++)data.info.push({face:e[i].getAttribute("face"),size:parseInt(e[i].getAttribute("size"),10)});for(i=0;i<r.length;i++)data.common.push({lineHeight:parseInt(r[i].getAttribute("lineHeight"),10)});for(i=0;i<n.length;i++)data.page.push({id:parseInt(n[i].getAttribute("id"),10)||0,file:n[i].getAttribute("file")});for(i=0;i<o.length;i++){var l=o[i];data.char.push({id:parseInt(l.getAttribute("id"),10),page:parseInt(l.getAttribute("page"),10)||0,x:parseInt(l.getAttribute("x"),10),y:parseInt(l.getAttribute("y"),10),width:parseInt(l.getAttribute("width"),10),height:parseInt(l.getAttribute("height"),10),xoffset:parseInt(l.getAttribute("xoffset"),10),yoffset:parseInt(l.getAttribute("yoffset"),10),xadvance:parseInt(l.getAttribute("xadvance"),10)})}for(i=0;i<h.length;i++)data.kerning.push({first:parseInt(h[i].getAttribute("first"),10),second:parseInt(h[i].getAttribute("second"),10),amount:parseInt(h[i].getAttribute("amount"),10)});return data},t}(),w=function(){function t(){}return t.test=function(data){if("string"==typeof data&&data.indexOf("<font>")>-1){var t=(new self.DOMParser).parseFromString(data,"text/xml");return _.test(t)}return!1},t.parse=function(t){var e=(new window.DOMParser).parseFromString(t,"text/xml");return _.parse(e)},t}(),S=[y,_,w];function I(data){for(var i=0;i<S.length;i++)if(S[i].test(data))return S[i];return null}function A(canvas,t,style,e,r,n){var o,h=style.fill;if(!Array.isArray(h))return h;if(1===h.length)return h[0];var l=style.dropShadow?style.dropShadowDistance:0,f=style.padding||0,d=Math.ceil(canvas.width/e)-l-2*f,m=Math.ceil(canvas.height/e)-l-2*f,v=h.slice(),x=style.fillGradientStops.slice();if(!x.length)for(var y=v.length+1,i=1;i<y;++i)x.push(i/y);if(v.unshift(h[0]),x.unshift(0),v.push(h[h.length-1]),x.push(1),style.fillGradientType===c.a.LINEAR_VERTICAL){o=t.createLinearGradient(d/2,f,d/2,m+f);var _=0,w=(n.fontProperties.fontSize+style.strokeThickness)/m;for(i=0;i<r.length;i++)for(var S=n.lineHeight*i,I=0;I<v.length;I++){var A=S/m+("number"==typeof x[I]?x[I]:I/v.length)*w,T=Math.max(_,A);T=Math.min(T,1),o.addColorStop(T,v[I]),_=T}}else{o=t.createLinearGradient(f,m/2,d+f,m/2);var O=v.length+1,M=1;for(i=0;i<v.length;i++){var P=void 0;P="number"==typeof x[i]?x[i]:M/O,o.addColorStop(P,v[i]),M++}}return o}function T(canvas,t,e,r,n,o,style){var h=e.text,f=e.fontProperties;t.translate(r,n),t.scale(o,o);var c=style.strokeThickness/2,d=-style.strokeThickness/2;t.font=style.toFontString(),t.lineWidth=style.strokeThickness,t.textBaseline=style.textBaseline,t.lineJoin=style.lineJoin,t.miterLimit=style.miterLimit,t.fillStyle=A(canvas,t,style,o,[h],e),t.strokeStyle=style.stroke,t.font=style.toFontString(),t.lineWidth=style.strokeThickness,t.textBaseline=style.textBaseline,t.lineJoin=style.lineJoin,t.miterLimit=style.miterLimit,t.fillStyle=A(canvas,t,style,o,[h],e),t.strokeStyle=style.stroke;var m=style.dropShadowColor,v=Object(l.l)("number"==typeof m?m:Object(l.z)(m));style.dropShadow?(t.shadowColor="rgba("+255*v[0]+","+255*v[1]+","+255*v[2]+","+style.dropShadowAlpha+")",t.shadowBlur=style.dropShadowBlur,t.shadowOffsetX=Math.cos(style.dropShadowAngle)*style.dropShadowDistance,t.shadowOffsetY=Math.sin(style.dropShadowAngle)*style.dropShadowDistance):(t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),style.stroke&&style.strokeThickness&&t.strokeText(h,c,d+e.lineHeight-f.descent),style.fill&&t.fillText(h,c,d+e.lineHeight-f.descent),t.setTransform(1,0,0,1,0,0),t.fillStyle="rgba(0, 0, 0, 0)"}var O=function(){function t(data,t,e){var r=data.info[0],o=data.common[0],h=data.page[0],c=Object(l.k)(h.file),d={};this._ownsTextures=e,this.font=r.face,this.size=r.size,this.lineHeight=o.lineHeight/c,this.chars={},this.pageTextures=d;for(var i=0;i<data.page.length;i++){var m=data.page[i],v=m.id,x=m.file;d[v]=t instanceof Array?t[i]:t[x]}for(i=0;i<data.char.length;i++){var y=data.char[i],_=(v=y.id,y.page),w=data.char[i],S=w.x,I=w.y,A=w.width,T=w.height,O=w.xoffset,M=w.yoffset,P=w.xadvance;S/=c,I/=c,A/=c,T/=c,O/=c,M/=c,P/=c;var rect=new n.j(S+d[_].frame.x/c,I+d[_].frame.y/c,A,T);this.chars[v]={xOffset:O,yOffset:M,xAdvance:P,kerning:{},texture:new f.p(d[_].baseTexture,rect),page:_}}for(i=0;i<data.kerning.length;i++){var k=data.kerning[i],E=k.first,C=k.second,B=k.amount;E/=c,C/=c,B/=c,this.chars[C]&&(this.chars[C].kerning[E]=B)}}return t.prototype.destroy=function(){for(var t in this.chars)this.chars[t].texture.destroy(),this.chars[t].texture=null;for(var t in this.pageTextures)this._ownsTextures&&this.pageTextures[t].destroy(!0),this.pageTextures[t]=null;this.chars=null,this.pageTextures=null},t.install=function(data,e,r){var n;if(data instanceof x)n=data;else{var o=I(data);if(!o)throw new Error("Unrecognized data format for font.");n=o.parse(data)}e instanceof f.p&&(e=[e]);var h=new t(n,e,r);return t.available[h.font]=h,h},t.uninstall=function(e){var r=t.available[e];if(!r)throw new Error("No font found named '"+e+"'");r.destroy(),delete t.available[e]},t.from=function(e,r,n){if(!e)throw new Error("[BitmapFont] Property `name` is required.");var o=Object.assign({},t.defaultOptions,n),h=o.chars,l=o.padding,d=o.resolution,m=o.textureWidth,v=o.textureHeight,y=function(t){"string"==typeof t&&(t=[t]);for(var e=[],i=0,r=t.length;i<r;i++){var n=t[i];if(Array.isArray(n)){if(2!==n.length)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+n.length+".");var o=n[0].charCodeAt(0),h=n[1].charCodeAt(0);if(h<o)throw new Error("[BitmapFont]: Invalid character range.");for(var l=o,f=h;l<=f;l++)e.push(String.fromCharCode(l))}else e.push.apply(e,n.split(""))}if(0===e.length)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}(h),style=r instanceof c.d?r:new c.d(r),_=m,w=new x;w.info[0]={face:style.fontFamily,size:style.fontSize},w.common[0]={lineHeight:style.fontSize};for(var canvas,S,I,A=0,O=0,M=0,P=[],i=0;i<y.length;i++){canvas||((canvas=document.createElement("canvas")).width=m,canvas.height=v,S=canvas.getContext("2d"),I=new f.a(canvas,{resolution:d}),P.push(new f.p(I)),w.page.push({id:P.length-1,file:""}));var k=c.c.measureText(y[i],style,!1,canvas),E=k.width,C=Math.ceil(k.height),B=Math.ceil(("italic"===style.fontStyle?2:1)*E);if(O>=v-C*d){if(0===O)throw new Error("[BitmapFont] textureHeight "+v+"px is too small for "+style.fontSize+"px fonts");--i,canvas=null,S=null,I=null,O=0,A=0,M=0}else if(M=Math.max(C+k.fontProperties.descent,M),B*d+A>=_)--i,O+=M*d,O=Math.ceil(O),A=0,M=0;else{T(canvas,S,k,A,O,d,style);var z=k.text.charCodeAt(0);w.char.push({id:z,page:P.length-1,x:A/d,y:O/d,width:B,height:C,xoffset:0,yoffset:0,xadvance:Math.ceil(E-(style.dropShadow?style.dropShadowDistance:0)-(style.stroke?style.strokeThickness:0))}),A+=(B+2*l)*d,A=Math.ceil(A)}}var H=new t(w,P,!0);return void 0!==t.available[e]&&t.uninstall(e),t.available[e]=H,H},t.ALPHA=[["a","z"],["A","Z"]," "],t.NUMERIC=[["0","9"]],t.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],t.ASCII=[[" ","~"]],t.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:t.ALPHANUMERIC},t.available={},t}(),M=[],P=[],k=(function(t){function e(text,style){void 0===style&&(style={});var r=t.call(this)||this;r._tint=16777215,style.font&&(Object(l.h)("5.3.0","PIXI.BitmapText constructor style.font property is deprecated."),r._upgradeStyle(style));var h=Object.assign({},e.styleDefaults,style),f=h.align,c=h.tint,d=h.maxWidth,m=h.letterSpacing,v=h.fontName,x=h.fontSize;if(!O.available[v])throw new Error('Missing BitmapFont "'+v+'"');return r._activePagesMeshData=[],r._textWidth=0,r._textHeight=0,r._align=f,r._tint=c,r._fontName=v,r._fontSize=x||O.available[v].size,r._text=text,r._maxWidth=d,r._maxLineHeight=0,r._letterSpacing=m,r._anchor=new n.e((function(){r.dirty=!0}),r,0,0),r._roundPixels=o.b.ROUND_PIXELS,r.dirty=!0,r._textureCache={},r}(function(t,b){function e(){this.constructor=t}v(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)})(e,t),e.prototype.updateText=function(){for(var t,data=O.available[this._fontName],e=this._fontSize/data.size,r=new n.g,o=[],c=[],text=this._text.replace(/(?:\r\n|\r)/g,"\n")||" ",d=text.length,m=this._maxWidth*data.size/this._fontSize,v=null,x=0,y=0,line=0,_=-1,w=0,S=0,I=0,i=0;i<d;i++){var A=text.charCodeAt(i),T=text.charAt(i);if(/(?:\s)/.test(T)&&(_=i,w=x),"\r"!==T&&"\n"!==T){var k=data.chars[A];if(k){v&&k.kerning[v]&&(r.x+=k.kerning[v]);var E=P.pop()||{texture:f.p.EMPTY,line:0,charCode:0,position:new n.g};E.texture=k.texture,E.line=line,E.charCode=A,E.position.x=r.x+k.xOffset+this._letterSpacing/2,E.position.y=r.y+k.yOffset,o.push(E),r.x+=k.xAdvance+this._letterSpacing,x=r.x,I=Math.max(I,k.yOffset+k.texture.height),v=A,-1!==_&&m>0&&r.x>m&&(++S,Object(l.w)(o,1+_-S,1+i-_),i=_,_=-1,c.push(w),y=Math.max(y,w),line++,r.x=0,r.y+=data.lineHeight,v=null)}}else c.push(x),y=Math.max(y,x),++line,++S,r.x=0,r.y+=data.lineHeight,v=null}var C=text.charAt(text.length-1);"\r"!==C&&"\n"!==C&&(/(?:\s)/.test(C)&&(x=w),c.push(x),y=Math.max(y,x));var B=[];for(i=0;i<=line;i++){var z=0;"right"===this._align?z=y-c[i]:"center"===this._align&&(z=(y-c[i])/2),B.push(z)}var H=o.length,j={},F=[],N=this._activePagesMeshData;for(i=0;i<N.length;i++)M.push(N[i]);for(i=0;i<H;i++){var L=(K=o[i].texture).baseTexture.uid;if(!j[L]){if(!(it=M.pop())){var D=new h.b,U=new h.c(f.p.EMPTY);it={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:new h.a(D,U),vertices:null,uvs:null,indices:null}}it.index=0,it.indexCount=0,it.vertexCount=0,it.uvsCount=0,it.total=0;var W=this._textureCache;W[L]=W[L]||new f.p(K.baseTexture),it.mesh.texture=W[L],it.mesh.tint=this._tint,F.push(it),j[L]=it}j[L].total++}for(i=0;i<N.length;i++)-1===F.indexOf(N[i])&&this.removeChild(N[i].mesh);for(i=0;i<F.length;i++)F[i].mesh.parent!==this&&this.addChild(F[i].mesh);for(var i in this._activePagesMeshData=F,j){var R=(it=j[i]).total;if(!((null===(t=it.indices)||void 0===t?void 0:t.length)>6*R)||it.vertices.length<2*h.a.BATCHABLE_SIZE)it.vertices=new Float32Array(8*R),it.uvs=new Float32Array(8*R),it.indices=new Uint16Array(6*R);else for(var X=it.total,Z=it.vertices,J=4*X*2;J<Z.length;J++)Z[J]=0;it.mesh.size=6*R}for(i=0;i<H;i++){var Y=(T=o[i]).position.x+B[T.line];this._roundPixels&&(Y=Math.round(Y));var K,G=Y*e,$=T.position.y*e,V=j[(K=T.texture).baseTexture.uid],Q=K.frame,tt=K._uvs,et=V.index++;V.indices[6*et+0]=0+4*et,V.indices[6*et+1]=1+4*et,V.indices[6*et+2]=2+4*et,V.indices[6*et+3]=0+4*et,V.indices[6*et+4]=2+4*et,V.indices[6*et+5]=3+4*et,V.vertices[8*et+0]=G,V.vertices[8*et+1]=$,V.vertices[8*et+2]=G+Q.width*e,V.vertices[8*et+3]=$,V.vertices[8*et+4]=G+Q.width*e,V.vertices[8*et+5]=$+Q.height*e,V.vertices[8*et+6]=G,V.vertices[8*et+7]=$+Q.height*e,V.uvs[8*et+0]=tt.x0,V.uvs[8*et+1]=tt.y0,V.uvs[8*et+2]=tt.x1,V.uvs[8*et+3]=tt.y1,V.uvs[8*et+4]=tt.x2,V.uvs[8*et+5]=tt.y2,V.uvs[8*et+6]=tt.x3,V.uvs[8*et+7]=tt.y3}for(var i in this._textWidth=y*e,this._textHeight=(r.y+data.lineHeight)*e,j){var it=j[i];if(0!==this.anchor.x||0!==this.anchor.y)for(var nt=0,at=this._textWidth*this.anchor.x,st=this._textHeight*this.anchor.y,ot=0;ot<it.total;ot++)it.vertices[nt++]-=at,it.vertices[nt++]-=st,it.vertices[nt++]-=at,it.vertices[nt++]-=st,it.vertices[nt++]-=at,it.vertices[nt++]-=st,it.vertices[nt++]-=at,it.vertices[nt++]-=st;this._maxLineHeight=I*e;var ht=it.mesh.geometry.getBuffer("aVertexPosition"),lt=it.mesh.geometry.getBuffer("aTextureCoord"),ut=it.mesh.geometry.getIndex();ht.data=it.vertices,lt.data=it.uvs,ut.data=it.indices,ht.update(),lt.update(),ut.update()}for(i=0;i<o.length;i++)P.push(o[i])},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype.getLocalBounds=function(){return this.validate(),t.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var i=0;i<this._activePagesMeshData.length;i++)this._activePagesMeshData[i].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontName",{get:function(){return this._fontName},set:function(t){if(!O.available[t])throw new Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){"number"==typeof t?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(text){text=String(null==text?"":text),this._text!==text&&(this._text=text,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),e.prototype._upgradeStyle=function(style){if("string"==typeof style.font){var t=style.font.split(" ");style.fontName=1===t.length?t[0]:t.slice(1).join(" "),t.length>=2&&(style.fontSize=parseInt(t[0],10))}else style.fontName=style.font.name,style.fontSize="number"==typeof style.font.size?style.font.size:parseInt(style.font.size,10)},e.prototype.destroy=function(e){var r=this._textureCache;for(var n in r){r[n].destroy(),delete r[n]}this._textureCache=null,t.prototype.destroy.call(this,e)},e.registerFont=function(data,t){return Object(l.h)("5.3.0","PIXI.BitmapText.registerFont is deprecated, use PIXI.BitmapFont.install"),O.install(data,t)},Object.defineProperty(e,"fonts",{get:function(){return Object(l.h)("5.3.0","PIXI.BitmapText.fonts is deprecated, use PIXI.BitmapFont.available"),O.available},enumerable:!1,configurable:!0}),e.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0}}(d.b),function(){function t(){}return t.add=function(){m.c.setExtensionXhrType("fnt",m.c.XHR_RESPONSE_TYPE.TEXT)},t.use=function(e,r){var n=I(e.data);if(n)for(var o=t.getBaseUrl(this,e),data=n.parse(e.data),h={},l=function(t){h[t.metadata.pageFile]=t.texture,Object.keys(h).length===data.page.length&&(e.bitmapFont=O.install(data,h,!0),r())},i=0;i<data.page.length;++i){var f=data.page[i].file,c=o+f,d=!1;for(var v in this.resources){var x=this.resources[v];if(x.url===c){x.metadata.pageFile=f,x.texture?l(x):x.onAfterMiddleware.add(l),d=!0;break}}if(!d){var y={crossOrigin:e.crossOrigin,loadType:m.c.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:f},e.metadata.imageMetadata),parentResource:e};this.add(c,y,l)}}else r()},t.getBaseUrl=function(e,r){var n=r.isDataUrl?"":t.dirname(r.url);return r.isDataUrl&&("."===n&&(n=""),e.baseUrl&&n&&"/"===e.baseUrl.charAt(e.baseUrl.length-1)&&(n+="/")),(n=n.replace(e.baseUrl,""))&&"/"!==n.charAt(n.length-1)&&(n+="/"),n},t.dirname=function(t){var e=t.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return e===t?".":""===e?"/":e},t}())}}]);