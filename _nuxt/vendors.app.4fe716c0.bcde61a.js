(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1443:function(e,t,o){var r=o(12);o(1444),o(1445),o(1448);var n=o(1449),l=o(1450);r.registerVisual(n),r.registerLayout(l)},1444:function(e,t,o){var r=o(1),n=o(87),l=o(495),d=o(81),h=o(63),c=h.encodeHTML,f=h.addCommas,v=o(223).wrapTreePathInfo,m=n.extend({type:"series.treemap",layoutMode:"box",dependencies:["grid","polar"],preventUsingHoverLayer:!0,_viewRoot:null,defaultOption:{progressive:0,left:"center",top:"middle",right:null,bottom:null,width:"80%",height:"80%",sort:!0,clipWindow:"origin",squareRatio:.5*(1+Math.sqrt(5)),leafDepth:null,drillDownIcon:"▶",zoomToNodeRatio:.1024,roam:!0,nodeClick:"zoomToNode",animation:!0,animationDurationUpdate:900,animationEasing:"quinticInOut",breadcrumb:{show:!0,height:22,left:"center",top:"bottom",emptyItemWidth:25,itemStyle:{color:"rgba(0,0,0,0.7)",borderColor:"rgba(255,255,255,0.7)",borderWidth:1,shadowColor:"rgba(150,150,150,1)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#fff"}},emphasis:{textStyle:{}}},label:{show:!0,distance:0,padding:5,position:"inside",color:"#fff",ellipsis:!0},upperLabel:{show:!1,position:[0,"50%"],height:20,color:"#fff",ellipsis:!0,verticalAlign:"middle"},itemStyle:{color:null,colorAlpha:null,colorSaturation:null,borderWidth:0,gapWidth:0,borderColor:"#fff",borderColorSaturation:null},emphasis:{upperLabel:{show:!0,position:[0,"50%"],color:"#fff",ellipsis:!0,verticalAlign:"middle"}},visualDimension:0,visualMin:null,visualMax:null,color:[],colorAlpha:null,colorSaturation:null,colorMappingBy:"index",visibleMin:10,childrenVisibleMin:null,levels:[]},getInitialData:function(option,e){var t={name:option.name,children:option.data};y(t);var o=option.levels||[],n=this.designatedVisualItemStyle={},h=new d({itemStyle:n},this,e);o=option.levels=function(e,t){var o,n=t.get("color");if(!n)return;if(e=e||[],r.each(e,(function(e){var t=new d(e),r=t.get("color");(t.get("itemStyle.color")||r&&"none"!==r)&&(o=!0)})),!o){(e[0]||(e[0]={})).color=n.slice()}return e}(o,e);var c=r.map(o||[],(function(t){return new d(t,h,e)}),this),f=l.createTree(t,this,(function(e){e.wrapMethod("getItemModel",(function(e,t){var o=f.getNodeByDataIndex(t),r=c[o.depth];return e.parentModel=r||h,e}))}));return f.data},optionUpdated:function(){this.resetViewRoot()},formatTooltip:function(e){var data=this.getData(),t=this.getRawValue(e),o=r.isArray(t)?f(t[0]):f(t),n=data.getName(e);return c(n+": "+o)},getDataParams:function(e){var t=n.prototype.getDataParams.apply(this,arguments),o=this.getData().tree.getNodeByDataIndex(e);return t.treePathInfo=v(o,this),t},setLayoutInfo:function(e){this.layoutInfo=this.layoutInfo||{},r.extend(this.layoutInfo,e)},mapIdToIndex:function(e){var t=this._idIndexMap;t||(t=this._idIndexMap=r.createHashMap(),this._idIndexMapCount=0);var o=t.get(e);return null==o&&t.set(e,o=this._idIndexMapCount++),o},getViewRoot:function(){return this._viewRoot},resetViewRoot:function(e){e?this._viewRoot=e:e=this._viewRoot;var t=this.getRawData().tree.root;e&&(e===t||t.contains(e))||(this._viewRoot=t)}});function y(e){var t=0;r.each(e.children,(function(e){y(e);var o=e.value;r.isArray(o)&&(o=o[0]),t+=o}));var o=e.value;r.isArray(o)&&(o=o[0]),(null==o||isNaN(o))&&(o=t),o<0&&(o=0),r.isArray(e.value)?e.value[0]=o:e.value=o}e.exports=m},1445:function(e,t,o){var r=o(12),n=o(1),l=o(16),d=o(220),h=o(223),c=o(1446),f=o(294),v=o(71),m=o(119),y=o(1447),w=o(238),x=o(63).windowOpen,_=n.bind,I=l.Group,M=l.Rect,T=n.each,R=["label"],D=["emphasis","label"],N=["upperLabel"],L=["emphasis","upperLabel"],V=w([["fill","color"],["stroke","strokeColor"],["lineWidth","strokeWidth"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),C=function(e){var t=V(e);return t.stroke=t.fill=t.lineWidth=null,t},S=r.extendChartView({type:"treemap",init:function(e,t){this._containerGroup,this._storage={nodeGroup:[],background:[],content:[]},this._oldTree,this._breadcrumb,this._controller,this._state="ready"},render:function(e,t,o,r){var l=t.findComponents({mainType:"series",subType:"treemap",query:r});if(!(n.indexOf(l,e)<0)){this.seriesModel=e,this.api=o,this.ecModel=t;var d=h.retrieveTargetInfo(r,["treemapZoomToNode","treemapRootToNode"],e),c=r&&r.type,f=e.layoutInfo,v=!this._oldTree,m=this._storage,y="treemapRootToNode"===c&&d&&m?{rootNodeGroup:m.nodeGroup[d.node.getRawIndex()],direction:r.direction}:null,w=this._giveContainerGroup(f),x=this._doRender(w,e,y);v||c&&"treemapZoomToNode"!==c&&"treemapRootToNode"!==c?x.renderFinally():this._doAnimation(w,x,e,y),this._resetController(o),this._renderBreadcrumb(e,o,d)}},_giveContainerGroup:function(e){var t=this._containerGroup;return t||(t=this._containerGroup=new I,this._initEvents(t),this.group.add(t)),t.attr("position",[e.x,e.y]),t},_doRender:function(e,t,o){var r=t.getData().tree,l=this._oldTree,h={nodeGroup:[],background:[],content:[]},c={nodeGroup:[],background:[],content:[]},f=this._storage,v=[],m=n.curry(A,t,c,f,o,h,v);!function e(t,o,r,l,h){l?(o=t,T(t,(function(e,t){!e.isRemoved()&&f(t,t)}))):new d(o,t,c,c).add(f).update(f).remove(n.curry(f,null)).execute();function c(e){return e.getId()}function f(n,d){var c=null!=n?t[n]:null,f=null!=d?o[d]:null,v=m(c,f,r,h);v&&e(c&&c.viewChildren||[],f&&f.viewChildren||[],v,l,h+1)}}(r.root?[r.root]:[],l&&l.root?[l.root]:[],e,r===l||!l,0);var y=function(e){var t={nodeGroup:[],background:[],content:[]};return e&&T(e,(function(e,o){var r=t[o];T(e,(function(e){e&&(r.push(e),e.__tmWillDelete=1)}))})),t}(f);return this._oldTree=r,this._storage=c,{lastsForAnimation:h,willDeleteEls:y,renderFinally:function(){T(y,(function(e){T(e,(function(e){e.parent&&e.parent.remove(e)}))})),T(v,(function(e){e.invisible=!0,e.dirty()}))}}},_doAnimation:function(e,t,o,r){if(o.get("animation")){var l=o.get("animationDurationUpdate"),d=o.get("animationEasing"),h=y.createWrap();T(t.willDeleteEls,(function(e,t){T(e,(function(e,o){if(!e.invisible){var n,c=e.parent;if(r&&"drillDown"===r.direction)n=c===r.rootNodeGroup?{shape:{x:0,y:0,width:c.__tmNodeWidth,height:c.__tmNodeHeight},style:{opacity:0}}:{style:{opacity:0}};else{var f=0,v=0;c.__tmWillDelete||(f=c.__tmNodeWidth/2,v=c.__tmNodeHeight/2),n="nodeGroup"===t?{position:[f,v],style:{opacity:0}}:{shape:{x:f,y:v,width:0,height:0},style:{opacity:0}}}n&&h.add(e,n,l,d)}}))})),T(this._storage,(function(e,o){T(e,(function(e,r){var c=t.lastsForAnimation[o][r],f={};c&&("nodeGroup"===o?c.old&&(f.position=e.position.slice(),e.attr("position",c.old)):(c.old&&(f.shape=n.extend({},e.shape),e.setShape(c.old)),c.fadein?(e.setStyle("opacity",0),f.style={opacity:1}):1!==e.style.opacity&&(f.style={opacity:1})),h.add(e,f,l,d))}))}),this),this._state="animating",h.done(_((function(){this._state="ready",t.renderFinally()}),this)).start()}},_resetController:function(e){var t=this._controller;t||((t=this._controller=new f(e.getZr())).enable(this.seriesModel.get("roam")),t.on("pan",_(this._onPan,this)),t.on("zoom",_(this._onZoom,this)));var rect=new v(0,0,e.getWidth(),e.getHeight());t.setPointerChecker((function(e,t,o){return rect.contain(t,o)}))},_clearController:function(){var e=this._controller;e&&(e.dispose(),e=null)},_onPan:function(e){if("animating"!==this._state&&(Math.abs(e.dx)>3||Math.abs(e.dy)>3)){var t=this.seriesModel.getData().tree.root;if(!t)return;var o=t.getLayout();if(!o)return;this.api.dispatchAction({type:"treemapMove",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:o.x+e.dx,y:o.y+e.dy,width:o.width,height:o.height}})}},_onZoom:function(e){var t=e.originX,o=e.originY;if("animating"!==this._state){var r=this.seriesModel.getData().tree.root;if(!r)return;var n=r.getLayout();if(!n)return;var rect=new v(n.x,n.y,n.width,n.height),l=this.seriesModel.layoutInfo;t-=l.x,o-=l.y;var d=m.create();m.translate(d,d,[-t,-o]),m.scale(d,d,[e.scale,e.scale]),m.translate(d,d,[t,o]),rect.applyTransform(d),this.api.dispatchAction({type:"treemapRender",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:rect.x,y:rect.y,width:rect.width,height:rect.height}})}},_initEvents:function(e){e.on("click",(function(e){if("ready"===this._state){var t=this.seriesModel.get("nodeClick",!0);if(t){var o=this.findTarget(e.offsetX,e.offsetY);if(o){var r=o.node;if(r.getLayout().isLeafRoot)this._rootToNode(o);else if("zoomToNode"===t)this._zoomToNode(o);else if("link"===t){var n=r.hostTree.data.getItemModel(r.dataIndex),link=n.get("link",!0),l=n.get("target",!0)||"blank";link&&x(link,l)}}}}}),this)},_renderBreadcrumb:function(e,t,o){o||(o=null!=e.get("leafDepth",!0)?{node:e.getViewRoot()}:this.findTarget(t.getWidth()/2,t.getHeight()/2))||(o={node:e.getData().tree.root}),(this._breadcrumb||(this._breadcrumb=new c(this.group))).render(e,t,o.node,_((function(t){"animating"!==this._state&&(h.aboveViewRoot(e.getViewRoot(),t)?this._rootToNode({node:t}):this._zoomToNode({node:t}))}),this))},remove:function(){this._clearController(),this._containerGroup&&this._containerGroup.removeAll(),this._storage={nodeGroup:[],background:[],content:[]},this._state="ready",this._breadcrumb&&this._breadcrumb.remove()},dispose:function(){this._clearController()},_zoomToNode:function(e){this.api.dispatchAction({type:"treemapZoomToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:e.node})},_rootToNode:function(e){this.api.dispatchAction({type:"treemapRootToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:e.node})},findTarget:function(e,t){var o;return this.seriesModel.getViewRoot().eachNode({attr:"viewChildren",order:"preorder"},(function(r){var n=this._storage.background[r.getRawIndex()];if(n){var l=n.transformCoordToLocal(e,t),d=n.shape;if(!(d.x<=l[0]&&l[0]<=d.x+d.width&&d.y<=l[1]&&l[1]<=d.y+d.height))return!1;o={node:r,offsetX:l[0],offsetY:l[1]}}}),this),o}});function A(e,t,o,r,d,h,c,f,v,m){if(c){var y=c.getLayout(),data=e.getData();if(data.setItemGraphicEl(c.dataIndex,null),y&&y.isInView){var w=y.width,x=y.height,_=y.borderWidth,T=y.invisible,S=c.getRawIndex(),A=f&&f.getRawIndex(),G=c.viewChildren,H=y.upperHeight,k=G&&G.length,E=c.getModel("itemStyle"),P=c.getModel("emphasis.itemStyle"),z=U("nodeGroup",I);if(z){if(v.add(z),z.attr("position",[y.x||0,y.y||0]),z.__tmNodeWidth=w,z.__tmNodeHeight=x,y.isAboveViewRoot)return z;var B=c.getModel(),F=U("background",M,m,1);if(F&&function(t,o,r){if(o.dataIndex=c.dataIndex,o.seriesIndex=e.seriesIndex,o.setShape({x:0,y:0,width:w,height:x}),T)Z(o);else{o.invisible=!1;var n=c.getVisual("borderColor",!0),d=P.get("borderColor"),h=C(E);h.fill=n;var f=V(P);if(f.fill=d,r){var v=w-2*_;O(h,f,n,v,H,{x:_,y:0,width:v,height:H})}else h.text=f.text=null;o.setStyle(h),l.setElementHoverStyle(o,f)}t.add(o)}(z,F,k&&y.upperLabelHeight),k)l.isHighDownDispatcher(z)&&l.setAsHighDownDispatcher(z,!1),F&&(l.setAsHighDownDispatcher(F,!0),data.setItemGraphicEl(c.dataIndex,F));else{var content=U("content",M,m,2);content&&function(t,content){content.dataIndex=c.dataIndex,content.seriesIndex=e.seriesIndex;var o=Math.max(w-2*_,0),r=Math.max(x-2*_,0);if(content.culling=!0,content.setShape({x:_,y:_,width:o,height:r}),T)Z(content);else{content.invisible=!1;var n=c.getVisual("color",!0),d=C(E);d.fill=n;var h=V(P);O(d,h,n,o,r),content.setStyle(d),l.setElementHoverStyle(content,h)}t.add(content)}(z,content),F&&l.isHighDownDispatcher(F)&&l.setAsHighDownDispatcher(F,!1),l.setAsHighDownDispatcher(z,!0),data.setItemGraphicEl(c.dataIndex,z)}return z}}}function Z(element){!element.invisible&&h.push(element)}function O(t,o,r,d,h,f){var v=B.get("name"),m=B.getModel(f?N:R),w=B.getModel(f?L:D),x=m.getShallow("show");l.setLabelStyle(t,o,m,w,{defaultText:x?v:null,autoColor:r,isRectText:!0,labelFetcher:e,labelDataIndex:c.dataIndex,labelProp:f?"upperLabel":"label"}),X(t,f,y),X(o,f,y),f&&(t.textRect=n.clone(f)),t.truncate=x&&m.get("ellipsis")?{outerWidth:d,outerHeight:h,minChar:2}:null}function X(style,t,o){var text=style.text;if(!t&&o.isLeafRoot&&null!=text){var r=e.get("drillDownIcon",!0);style.text=r?r+" "+text:text}}function U(e,l,h,f){var element=null!=A&&o[e][A],v=d[e];return element?(o[e][A]=null,function(e,element,t){(e[S]={}).old="nodeGroup"===t?element.position.slice():n.extend({},element.shape)}(v,element,e)):T||((element=new l({z:W(h,f)})).__tmDepth=h,element.__tmStorageName=e,function(e,element,t){var o=e[S]={},n=c.parentNode;if(n&&(!r||"drillDown"===r.direction)){var l=0,h=0,f=d.background[n.getRawIndex()];!r&&f&&f.old&&(l=f.old.width,h=f.old.height),o.old="nodeGroup"===t?[0,h]:{x:l,y:h,width:0,height:0}}o.fadein="nodeGroup"!==t}(v,0,e)),t[e][S]=element}}function W(e,t){var o=10*e+t;return(o-1)/o}e.exports=S},1446:function(e,t,o){var r=o(16),n=o(59),l=o(1),d=o(223).wrapTreePathInfo;function h(e){this.group=new r.Group,e.add(this.group)}function c(e,t,o,r,head,n){var l=[[head?e:e-5,t],[e+o,t],[e+o,t+r],[head?e:e-5,t+r]];return!n&&l.splice(2,0,[e+o+5,t+r/2]),!head&&l.push([e,t+r/2]),l}function f(e,t,o){e.eventData={componentType:"series",componentSubType:"treemap",componentIndex:t.componentIndex,seriesIndex:t.componentIndex,seriesName:t.name,seriesType:"treemap",selfType:"breadcrumb",nodeData:{dataIndex:o&&o.dataIndex,name:o&&o.name},treePathInfo:o&&d(o,t)}}h.prototype={constructor:h,render:function(e,t,o,r){var l=e.getModel("breadcrumb"),d=this.group;if(d.removeAll(),l.get("show")&&o){var h=l.getModel("itemStyle"),c=h.getModel("textStyle"),f={pos:{left:l.get("left"),right:l.get("right"),top:l.get("top"),bottom:l.get("bottom")},box:{width:t.getWidth(),height:t.getHeight()},emptyItemWidth:l.get("emptyItemWidth"),totalWidth:0,renderList:[]};this._prepare(o,f,c),this._renderContent(e,f,h,c,r),n.positionElement(d,f.pos,f.box)}},_prepare:function(e,t,o){for(var r=e;r;r=r.parentNode){var text=r.getModel().get("name"),n=o.getTextRect(text),l=Math.max(n.width+16,t.emptyItemWidth);t.totalWidth+=l+8,t.renderList.push({node:r,text:text,width:l})}},_renderContent:function(e,t,o,d,h){for(var v=0,m=t.emptyItemWidth,y=e.get("breadcrumb.height"),w=n.getAvailableSize(t.pos,t.box),x=t.totalWidth,_=t.renderList,i=_.length-1;i>=0;i--){var I=_[i],M=I.node,T=I.width,text=I.text;x>w.width&&(x-=T-m,T=m,text=null);var R=new r.Polygon({shape:{points:c(v,0,T,y,i===_.length-1,0===i)},style:l.defaults(o.getItemStyle(),{lineJoin:"bevel",text:text,textFill:d.getTextColor(),textFont:d.getFont()}),z:10,onclick:l.curry(h,M)});this.group.add(R),f(R,e,M),v+=T+8}},remove:function(){this.group.removeAll()}};var v=h;e.exports=v},1448:function(e,t,o){for(var r=o(12),n=o(223),l=function(){},d=["treemapZoomToNode","treemapRender","treemapMove"],i=0;i<d.length;i++)r.registerAction({type:d[i],update:"updateView"},l);r.registerAction({type:"treemapRootToNode",update:"updateView"},(function(e,t){t.eachComponent({mainType:"series",subType:"treemap",query:e},(function(t,o){var r=n.retrieveTargetInfo(e,["treemapZoomToNode","treemapRootToNode"],t);if(r){var l=t.getViewRoot();l&&(e.direction=n.aboveViewRoot(l,r.node)?"rollUp":"drillDown"),t.resetViewRoot(r.node)}}))}))},1449:function(e,t,o){var r=o(224),n=o(167),l=o(1),d=l.isArray,h={seriesType:"treemap",reset:function(e,t,o,r){var n=e.getData().tree.root;n.isRemoved()||c(n,{},e.getViewRoot().getAncestors(),e)}};function c(e,t,o,d){var h=e.getModel(),v=e.getLayout();if(v&&!v.invisible&&v.isInView){var y,w=e.getModel("itemStyle"),x=function(e,t,o){var r=l.extend({},t),n=o.designatedVisualItemStyle;return l.each(["color","colorAlpha","colorSaturation"],(function(o){n[o]=t[o];var l=e.get(o);n[o]=null,null!=l&&(r[o]=l)})),r}(w,t,d),_=w.get("borderColor"),I=w.get("borderColorSaturation");null!=I&&(_=function(e,t){return null!=t?n.modifyHSL(t,null,null,e):null}(I,y=f(x))),e.setVisual("borderColor",_);var M=e.viewChildren;if(M&&M.length){var T=function(e,t,o,n,l,d){if(!d||!d.length)return;var h=m(t,"color")||null!=l.color&&"none"!==l.color&&(m(t,"colorAlpha")||m(t,"colorSaturation"));if(!h)return;var c=t.get("visualMin"),f=t.get("visualMax"),v=o.dataExtent.slice();null!=c&&c<v[0]&&(v[0]=c),null!=f&&f>v[1]&&(v[1]=f);var y=t.get("colorMappingBy"),w={type:h.name,dataExtent:v,visual:h.range};"color"!==w.type||"index"!==y&&"id"!==y?w.mappingMethod="linear":(w.mappingMethod="category",w.loop=!0);var x=new r(w);return x.__drColorMappingBy=y,x}(0,h,v,0,x,M);l.each(M,(function(e,t){if(e.depth>=o.length||e===o[e.depth]){var r=function(e,t,o,r,n,d){var h=l.extend({},t);if(n){var c=n.type,f="color"===c&&n.__drColorMappingBy,v="index"===f?r:"id"===f?d.mapIdToIndex(o.getId()):o.getValue(e.get("visualDimension"));h[c]=n.mapValueToVisual(v)}return h}(h,x,e,t,T,d);c(e,r,o,d)}}))}else y=f(x),e.setVisual("color",y)}}function f(e){var t=v(e,"color");if(t){var o=v(e,"colorAlpha"),r=v(e,"colorSaturation");return r&&(t=n.modifyHSL(t,null,null,r)),o&&(t=n.modifyAlpha(t,o)),t}}function v(e,t){var o=e[t];if(null!=o&&"none"!==o)return o}function m(e,t){var o=e.get(t);return d(o)&&o.length?{name:t,range:o}:null}e.exports=h},1450:function(e,t,o){var r=o(1),n=o(71),l=o(34),d=l.parsePercent,h=l.MAX_SAFE_INTEGER,c=o(59),f=o(223),v=Math.max,m=Math.min,y=r.retrieve,w=r.each,x=["itemStyle","borderWidth"],_=["itemStyle","gapWidth"],I=["upperLabel","show"],M=["upperLabel","height"],T={seriesType:"treemap",reset:function(e,t,o,l){var v=o.getWidth(),m=o.getHeight(),_=e.option,I=c.getLayoutRect(e.getBoxLayoutParams(),{width:o.getWidth(),height:o.getHeight()}),M=_.size||[],T=d(y(I.width,M[0]),v),D=d(y(I.height,M[1]),m),N=l&&l.type,C=f.retrieveTargetInfo(l,["treemapZoomToNode","treemapRootToNode"],e),S="treemapRender"===N||"treemapMove"===N?l.rootRect:null,A=e.getViewRoot(),W=f.getPathToRoot(A);if("treemapMove"!==N){var G="treemapZoomToNode"===N?function(e,t,o,r,n){var l,d=(t||{}).node,c=[r,n];if(!d||d===o)return c;var f=r*n,area=f*e.option.zoomToNodeRatio;for(;l=d.parentNode;){for(var v=0,m=l.children,i=0,y=m.length;i<y;i++)v+=m[i].getValue();var w=d.getValue();if(0===w)return c;area*=v/w;var _=l.getModel(),I=_.get(x);(area+=4*I*I+(3*I+Math.max(I,V(_)))*Math.pow(area,.5))>h&&(area=h),d=l}area<f&&(area=f);var M=Math.pow(area/f,.5);return[r*M,n*M]}(e,C,A,T,D):S?[S.width,S.height]:[T,D],H=_.sort;H&&"asc"!==H&&"desc"!==H&&(H="desc");var k={squareRatio:_.squareRatio,sort:H,leafDepth:_.leafDepth};A.hostTree.clearLayouts();var E={x:0,y:0,width:G[0],height:G[1],area:G[0]*G[1]};A.setLayout(E),R(A,k,!1,0);E=A.getLayout();w(W,(function(e,t){var o=(W[t+1]||A).getValue();e.setLayout(r.extend({dataExtent:[o,o],borderWidth:0,upperHeight:0},E))}))}var P=e.getData().tree.root;P.setLayout(function(e,t,o){if(t)return{x:t.x,y:t.y};var r={x:0,y:0};if(!o)return r;var n=o.node,l=n.getLayout();if(!l)return r;var d=[l.width/2,l.height/2],h=n;for(;h;){var c=h.getLayout();d[0]+=c.x,d[1]+=c.y,h=h.parentNode}return{x:e.width/2-d[0],y:e.height/2-d[1]}}(I,S,C),!0),e.setLayoutInfo(I),L(P,new n(-I.x,-I.y,v,m),W,A,0)}};function R(e,t,o,n){var l,d;if(!e.isRemoved()){var h=e.getLayout();l=h.width,d=h.height;var c=(L=e.getModel()).get(x),f=L.get(_)/2,y=V(L),I=Math.max(c,y),M=c-f,T=I-f,L=e.getModel();e.setLayout({borderWidth:c,upperHeight:I,upperLabelHeight:y},!0);var C=(l=v(l-2*M,0))*(d=v(d-M-T,0)),S=function(e,t,o,n,l,d){var h=e.children||[],c=n.sort;"asc"!==c&&"desc"!==c&&(c=null);var f=null!=n.leafDepth&&n.leafDepth<=d;if(l&&!f)return e.viewChildren=[];!function(e,t){t&&e.sort((function(a,b){var e="asc"===t?a.getValue()-b.getValue():b.getValue()-a.getValue();return 0===e?"asc"===t?a.dataIndex-b.dataIndex:b.dataIndex-a.dataIndex:e}))}(h=r.filter(h,(function(e){return!e.isRemoved()})),c);var v=function(e,t,o){for(var r=0,i=0,n=t.length;i<n;i++)r+=t[i].getValue();var l=e.get("visualDimension");if(t&&t.length)if("value"===l&&o)d=[t[t.length-1].getValue(),t[0].getValue()],"asc"===o&&d.reverse();else{var d=[1/0,-1/0];w(t,(function(e){var t=e.getValue(l);t<d[0]&&(d[0]=t),t>d[1]&&(d[1]=t)}))}else d=[NaN,NaN];return{sum:r,dataExtent:d}}(t,h,c);if(0===v.sum)return e.viewChildren=[];if(v.sum=function(e,t,o,r,n){if(!r)return o;for(var l=e.get("visibleMin"),d=n.length,h=d,i=d-1;i>=0;i--){var c=n["asc"===r?d-i-1:i].getValue();c/o*t<l&&(h=i,o-=c)}return"asc"===r?n.splice(0,d-h):n.splice(h,d-h),o}(t,o,v.sum,c,h),0===v.sum)return e.viewChildren=[];for(var i=0,m=h.length;i<m;i++){var area=h[i].getValue()/v.sum*o;h[i].setLayout({area:area})}f&&(h.length&&e.setLayout({isLeafRoot:!0},!0),h.length=0);return e.viewChildren=h,e.setLayout({dataExtent:v.dataExtent},!0),h}(e,L,C,t,o,n);if(S.length){var rect={x:M,y:T,width:l,height:d},A=m(l,d),W=1/0,G=[];G.area=0;for(var i=0,H=S.length;i<H;){var k=S[i];G.push(k),G.area+=k.getLayout().area;var E=D(G,A,t.squareRatio);E<=W?(i++,W=E):(G.area-=G.pop().getLayout().area,N(G,A,rect,f,!1),A=m(rect.width,rect.height),G.length=G.area=0,W=1/0)}if(G.length&&N(G,A,rect,f,!0),!o){var P=L.get("childrenVisibleMin");null!=P&&C<P&&(o=!0)}for(i=0,H=S.length;i<H;i++)R(S[i],t,o,n+1)}}}function D(e,t,o){for(var area,r=0,n=1/0,i=0,l=e.length;i<l;i++)(area=e[i].getLayout().area)&&(area<n&&(n=area),area>r&&(r=area));var d=e.area*e.area,h=t*t*o;return d?v(h*r/d,d/(h*n)):1/0}function N(e,t,rect,o,r){var n=t===rect.width?0:1,l=1-n,d=["x","y"],h=["width","height"],c=rect[d[n]],f=t?e.area/t:0;(r||f>rect[h[l]])&&(f=rect[h[l]]);for(var i=0,y=e.length;i<y;i++){var w=e[i],x={},_=f?w.getLayout().area/f:0,I=x[h[l]]=v(f-2*o,0),M=rect[d[n]]+rect[h[n]]-c,T=i===y-1||M<_?M:_,R=x[h[n]]=v(T-2*o,0);x[d[l]]=rect[d[l]]+m(o,I/2),x[d[n]]=c+m(o,R/2),c+=T,w.setLayout(x,!0)}rect[d[l]]+=f,rect[h[l]]-=f}function L(e,t,o,r,l){var d=e.getLayout(),h=o[l],c=h&&h===e;if(!(h&&!c||l===o.length&&e!==r)){e.setLayout({isInView:!0,invisible:!c&&!t.intersect(d),isAboveViewRoot:c},!0);var f=new n(t.x-d.x,t.y-d.y,t.width,t.height);w(e.viewChildren||[],(function(e){L(e,f,o,r,l+1)}))}}function V(e){return e.get(I)?e.get(M):0}e.exports=T}}]);