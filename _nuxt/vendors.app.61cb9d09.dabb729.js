(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1437:function(e,t,o){var r=o(12);o(1438),o(1439),o(1440);var n=o(222),d=o(1441);r.registerVisual(n("tree","circle")),r.registerLayout(d)},1438:function(e,t,o){var r=o(87),n=o(495),d=o(63).encodeHTML,l=o(81),h=r.extend({type:"series.tree",layoutInfo:null,layoutMode:"box",getInitialData:function(option){var e={name:option.name,children:option.data},t=option.leaves||{},o=new l(t,this,this.ecModel),r=n.createTree(e,this,(function(e){e.wrapMethod("getItemModel",(function(e,t){var n=r.getNodeByDataIndex(t);return n.children.length&&n.isExpand||(e.parentModel=o),e}))}));var d=0;r.eachNode("preorder",(function(e){e.depth>d&&(d=e.depth)}));var h=option.expandAndCollapse&&option.initialTreeDepth>=0?option.initialTreeDepth:d;return r.root.eachNode("preorder",(function(e){var t=e.hostTree.data.getRawDataItem(e.dataIndex);e.isExpand=t&&null!=t.collapsed?!t.collapsed:e.depth<=h})),r.data},getOrient:function(){var e=this.get("orient");return"horizontal"===e?e="LR":"vertical"===e&&(e="TB"),e},setZoom:function(e){this.option.zoom=e},setCenter:function(e){this.option.center=e},formatTooltip:function(e){for(var t=this.getData().tree,o=t.root.children[0],r=t.getNodeByDataIndex(e),n=r.getValue(),l=r.name;r&&r!==o;)l=r.parentNode.name+"."+l,r=r.parentNode;return d(l+(isNaN(n)||null==n?"":" : "+n))},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",left:"12%",top:"12%",right:"12%",bottom:"12%",layout:"orthogonal",edgeShape:"curve",edgeForkPosition:"50%",roam:!1,nodeScaleRatio:.4,center:null,zoom:1,orient:"LR",symbol:"emptyCircle",symbolSize:7,expandAndCollapse:!0,initialTreeDepth:2,lineStyle:{color:"#ccc",width:1.5,curveness:.5},itemStyle:{color:"lightsteelblue",borderColor:"#c23531",borderWidth:1.5},label:{show:!0,color:"#555"},leaves:{label:{show:!0}},animationEasing:"linear",animationDuration:700,animationDurationUpdate:1e3}});e.exports=h},1439:function(e,t,o){var r=o(1),n=o(16),d=o(353),l=o(747).radialCoordinate,h=o(12),c=o(282),f=o(494),y=o(491),m=o(294),v=o(356).onIrrelevantElement,x=(o(49).__DEV__,o(34).parsePercent),N=n.extendShape({shape:{parentPoint:[],childPoints:[],orient:"",forkPosition:""},style:{stroke:"#000",fill:null},buildPath:function(e,t){var o=t.childPoints,r=o.length,n=t.parentPoint,d=o[0],l=o[r-1];if(1===r)return e.moveTo(n[0],n[1]),void e.lineTo(d[0],d[1]);var h=t.orient,c="TB"===h||"BT"===h?0:1,f=1-c,y=x(t.forkPosition,1),m=[];m[c]=n[c],m[f]=n[f]+(l[f]-n[f])*y,e.moveTo(n[0],n[1]),e.lineTo(m[0],m[1]),e.moveTo(d[0],d[1]),m[c]=d[c],e.lineTo(m[0],m[1]),m[c]=l[c],e.lineTo(m[0],m[1]),e.lineTo(l[0],l[1]);for(var i=1;i<r-1;i++){var v=o[i];e.moveTo(v[0],v[1]),m[c]=v[c],e.lineTo(m[0],m[1])}}}),_=h.extendChartView({type:"tree",init:function(e,t){this._oldTree,this._mainGroup=new n.Group,this._controller=new m(t.getZr()),this._controllerHost={target:this.group},this.group.add(this._mainGroup)},render:function(e,t,o,r){var data=e.getData(),n=e.layoutInfo,d=this._mainGroup,l=e.get("layout");"radial"===l?d.attr("position",[n.x+n.width/2,n.y+n.height/2]):d.attr("position",[n.x,n.y]),this._updateViewCoordSys(e,n,l),this._updateController(e,t,o);var h=this._data,c={expandAndCollapse:e.get("expandAndCollapse"),layout:l,edgeShape:e.get("edgeShape"),edgeForkPosition:e.get("edgeForkPosition"),orient:e.getOrient(),curvature:e.get("lineStyle.curveness"),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),useNameLabel:!0,fadeIn:!0};data.diff(h).add((function(t){w(data,t)&&S(data,t,null,d,e,c)})).update((function(t,o){var r=h.getItemGraphicEl(o);w(data,t)?S(data,t,r,d,e,c):r&&I(h,o,r,d,e,c)})).remove((function(t){var o=h.getItemGraphicEl(t);o&&I(h,t,o,d,e,c)})).execute(),this._nodeScaleRatio=e.get("nodeScaleRatio"),this._updateNodeAndLinkScale(e),!0===c.expandAndCollapse&&data.eachItemGraphicEl((function(t,r){t.off("click").on("click",(function(){o.dispatchAction({type:"treeExpandAndCollapse",seriesId:e.id,dataIndex:r})}))})),this._data=data},_updateViewCoordSys:function(e){var data=e.getData(),t=[];data.each((function(e){var o=data.getItemLayout(e);!o||isNaN(o.x)||isNaN(o.y)||t.push([+o.x,+o.y])}));var o=[],r=[];c.fromPoints(t,o,r);var n=this._min,d=this._max;r[0]-o[0]==0&&(o[0]=n?n[0]:o[0]-1,r[0]=d?d[0]:r[0]+1),r[1]-o[1]==0&&(o[1]=n?n[1]:o[1]-1,r[1]=d?d[1]:r[1]+1);var l=e.coordinateSystem=new f;l.zoomLimit=e.get("scaleLimit"),l.setBoundingRect(o[0],o[1],r[0]-o[0],r[1]-o[1]),l.setCenter(e.get("center")),l.setZoom(e.get("zoom")),this.group.attr({position:l.position,scale:l.scale}),this._viewCoordSys=l,this._min=o,this._max=r},_updateController:function(e,t,o){var r=this._controller,n=this._controllerHost,d=this.group;r.setPointerChecker((function(t,r,n){var rect=d.getBoundingRect();return rect.applyTransform(d.transform),rect.contain(r,n)&&!v(t,o,e)})),r.enable(e.get("roam")),n.zoomLimit=e.get("scaleLimit"),n.zoom=e.coordinateSystem.getZoom(),r.off("pan").off("zoom").on("pan",(function(t){y.updateViewOnPan(n,t.dx,t.dy),o.dispatchAction({seriesId:e.id,type:"treeRoam",dx:t.dx,dy:t.dy})}),this).on("zoom",(function(t){y.updateViewOnZoom(n,t.scale,t.originX,t.originY),o.dispatchAction({seriesId:e.id,type:"treeRoam",zoom:t.scale,originX:t.originX,originY:t.originY}),this._updateNodeAndLinkScale(e)}),this)},_updateNodeAndLinkScale:function(e){var data=e.getData(),t=this._getNodeGlobalScale(e),o=[t,t];data.eachItemGraphicEl((function(e,t){e.attr("scale",o)}))},_getNodeGlobalScale:function(e){var t=e.coordinateSystem;if("view"!==t.type)return 1;var o=this._nodeScaleRatio,r=t.scale,n=r&&r[0]||1;return((t.getZoom()-1)*o+1)/n},dispose:function(){this._controller&&this._controller.dispose(),this._controllerHost={}},remove:function(){this._mainGroup.removeAll(),this._data=null}});function w(data,e){var t=data.getItemLayout(e);return t&&!isNaN(t.x)&&!isNaN(t.y)&&"none"!==data.getItemVisual(e,"symbol")}function L(e,t,o){return o.itemModel=t,o.itemStyle=t.getModel("itemStyle").getItemStyle(),o.hoverItemStyle=t.getModel("emphasis.itemStyle").getItemStyle(),o.lineStyle=t.getModel("lineStyle").getLineStyle(),o.labelModel=t.getModel("label"),o.hoverLabelModel=t.getModel("emphasis.label"),!1===e.isExpand&&0!==e.children.length?o.symbolInnerColor=o.itemStyle.fill:o.symbolInnerColor="#fff",o}function S(data,e,t,o,l,h){var c=!t,f=data.tree.getNodeByDataIndex(e),y=f.getModel(),m=(h=L(f,y,h),data.tree.root),source=f.parentNode===m?f:f.parentNode||f,v=data.getItemGraphicEl(source.dataIndex),x=source.getLayout(),_=v?{x:v.position[0],y:v.position[1],rawX:v.__radialOldRawX,rawY:v.__radialOldRawY}:x,w=f.getLayout();c?(t=new d(data,e,h)).attr("position",[_.x,_.y]):t.updateData(data,e,h),t.__radialOldRawX=t.__radialRawX,t.__radialOldRawY=t.__radialRawY,t.__radialRawX=w.rawX,t.__radialRawY=w.rawY,o.add(t),data.setItemGraphicEl(e,t),n.updateProps(t,{position:[w.x,w.y]},l);var S=t.getSymbolPath();if("radial"===h.layout){var I,R,T=m.children[0],M=T.getLayout(),C=T.children.length;if(w.x===M.x&&!0===f.isExpand){var E={};E.x=(T.children[0].getLayout().x+T.children[C-1].getLayout().x)/2,E.y=(T.children[0].getLayout().y+T.children[C-1].getLayout().y)/2,(I=Math.atan2(E.y-M.y,E.x-M.x))<0&&(I=2*Math.PI+I),(R=E.x<M.x)&&(I-=Math.PI)}else(I=Math.atan2(w.y-M.y,w.x-M.x))<0&&(I=2*Math.PI+I),0===f.children.length||0!==f.children.length&&!1===f.isExpand?(R=w.x<M.x)&&(I-=Math.PI):(R=w.x>M.x)||(I-=Math.PI);var A=R?"left":"right",k=h.labelModel.get("rotate"),B=k*(Math.PI/180);S.setStyle({textPosition:h.labelModel.get("position")||A,textRotation:null==k?-I:B,textOrigin:"center",verticalAlign:"middle"})}!function(e,t,o,d,l,h,c,f,y){var m=y.edgeShape,v=d.__edge;if("curve"===m)t.parentNode&&t.parentNode!==o&&(v||(v=d.__edge=new n.BezierCurve({shape:P(y,l,l),style:r.defaults({opacity:0,strokeNoScale:!0},y.lineStyle)})),n.updateProps(v,{shape:P(y,h,c),style:r.defaults({opacity:1},y.lineStyle)},e));else if("polyline"===m&&"orthogonal"===y.layout&&t!==o&&t.children&&0!==t.children.length&&!0===t.isExpand){for(var x=t.children,_=[],i=0;i<x.length;i++){var w=x[i].getLayout();_.push([w.x,w.y])}v||(v=d.__edge=new N({shape:{parentPoint:[c.x,c.y],childPoints:[[c.x,c.y]],orient:y.orient,forkPosition:y.edgeForkPosition},style:r.defaults({opacity:0,strokeNoScale:!0},y.lineStyle)})),n.updateProps(v,{shape:{parentPoint:[c.x,c.y],childPoints:_},style:r.defaults({opacity:1},y.lineStyle)},e)}f.add(v)}(l,f,m,t,_,x,w,o,h)}function I(data,e,t,o,r,d){for(var l,h=data.tree.getNodeByDataIndex(e),c=data.tree.root,f=h.getModel(),source=(d=L(h,f,d),h.parentNode===c?h:h.parentNode||h),y=d.edgeShape;null==(l=source.getLayout());)source=source.parentNode===c?source:source.parentNode||source;n.updateProps(t,{position:[l.x+1,l.y+1]},r,(function(){o.remove(t),data.setItemGraphicEl(e,null)})),t.fadeOut(null,{keepLabel:!0});var m=data.getItemGraphicEl(source.dataIndex).__edge,v=t.__edge||(!1===source.isExpand||1===source.children.length?m:void 0);y=d.edgeShape;v&&("curve"===y?n.updateProps(v,{shape:P(d,l,l),style:{opacity:0}},r,(function(){o.remove(v)})):"polyline"===y&&"orthogonal"===d.layout&&n.updateProps(v,{shape:{parentPoint:[l.x,l.y],childPoints:[[l.x,l.y]]},style:{opacity:0}},r,(function(){o.remove(v)})))}function P(e,t,o){var r,n,d,h,c,f,y,m,v=e.orient;if("radial"===e.layout){c=t.rawX,y=t.rawY,f=o.rawX,m=o.rawY;var x=l(c,y),N=l(c,y+(m-y)*e.curvature),_=l(f,m+(y-m)*e.curvature),w=l(f,m);return{x1:x.x,y1:x.y,x2:w.x,y2:w.y,cpx1:N.x,cpy1:N.y,cpx2:_.x,cpy2:_.y}}return c=t.x,y=t.y,f=o.x,m=o.y,"LR"!==v&&"RL"!==v||(r=c+(f-c)*e.curvature,n=y,d=f+(c-f)*e.curvature,h=m),"TB"!==v&&"BT"!==v||(r=c,n=y+(m-y)*e.curvature,d=f,h=m+(y-m)*e.curvature),{x1:c,y1:y,x2:f,y2:m,cpx1:r,cpy1:n,cpx2:d,cpy2:h}}e.exports=_},1440:function(e,t,o){var r=o(12),n=o(492).updateCenterAndZoom;r.registerAction({type:"treeExpandAndCollapse",event:"treeExpandAndCollapse",update:"update"},(function(e,t){t.eachComponent({mainType:"series",subType:"tree",query:e},(function(t){var o=e.dataIndex,r=t.getData().tree.getNodeByDataIndex(o);r.isExpand=!r.isExpand}))})),r.registerAction({type:"treeRoam",event:"treeRoam",update:"none"},(function(e,t){t.eachComponent({mainType:"series",subType:"tree",query:e},(function(t){var o=t.coordinateSystem,r=n(o,e);t.setCenter&&t.setCenter(r.center),t.setZoom&&t.setZoom(r.zoom)}))}))},1441:function(e,t,o){var r=o(1442),n=r.eachAfter,d=r.eachBefore,l=o(747),h=l.init,c=l.firstWalk,f=l.secondWalk,y=l.separation,m=l.radialCoordinate,v=l.getViewRect;e.exports=function(e,t){e.eachSeriesByType("tree",(function(e){!function(e,t){var o=v(e,t);e.layoutInfo=o;var r=e.get("layout"),l=0,x=0,N=null;"radial"===r?(l=2*Math.PI,x=Math.min(o.height,o.width)/2,N=y((function(e,t){return(e.parentNode===t.parentNode?1:2)/e.depth}))):(l=o.width,x=o.height,N=y());var _=e.getData().tree.root,w=_.children[0];if(w){h(_),n(w,c,N),_.hierNode.modifier=-w.hierNode.prelim,d(w,f);var L=w,S=w,I=w;d(w,(function(e){var t=e.getLayout().x;t<L.getLayout().x&&(L=e),t>S.getLayout().x&&(S=e),e.depth>I.depth&&(I=e)}));var P=L===S?1:N(L,S)/2,R=P-L.getLayout().x,T=0,M=0,C=0,E=0;if("radial"===r)T=l/(S.getLayout().x+P+R),M=x/(I.depth-1||1),d(w,(function(e){C=(e.getLayout().x+R)*T,E=(e.depth-1)*M;var t=m(C,E);e.setLayout({x:t.x,y:t.y,rawX:C,rawY:E},!0)}));else{var A=e.getOrient();"RL"===A||"LR"===A?(M=x/(S.getLayout().x+P+R),T=l/(I.depth-1||1),d(w,(function(e){E=(e.getLayout().x+R)*M,C="LR"===A?(e.depth-1)*T:l-(e.depth-1)*T,e.setLayout({x:C,y:E},!0)}))):"TB"!==A&&"BT"!==A||(T=l/(S.getLayout().x+P+R),M=x/(I.depth-1||1),d(w,(function(e){C=(e.getLayout().x+R)*T,E="TB"===A?(e.depth-1)*M:x-(e.depth-1)*M,e.setLayout({x:C,y:E},!0)})))}}}(e,t)}))}},1442:function(e,t){t.eachAfter=function(e,t,o){for(var r,n=[e],d=[];r=n.pop();)if(d.push(r),r.isExpand){var l=r.children;if(l.length)for(var i=0;i<l.length;i++)n.push(l[i])}for(;r=d.pop();)t(r,o)},t.eachBefore=function(e,t){for(var o,r=[e];o=r.pop();)if(t(o),o.isExpand){var n=o.children;if(n.length)for(var i=n.length-1;i>=0;i--)r.push(n[i])}}},747:function(e,t,o){var r=o(59);function n(e){var t=e.children;return t.length&&e.isExpand?t[t.length-1]:e.hierNode.thread}function d(e){var t=e.children;return t.length&&e.isExpand?t[0]:e.hierNode.thread}function l(e,t,o){return e.hierNode.ancestor.parentNode===t.parentNode?e.hierNode.ancestor:o}function h(e,t,o){var r=o/(t.hierNode.i-e.hierNode.i);t.hierNode.change-=r,t.hierNode.shift+=o,t.hierNode.modifier+=o,t.hierNode.prelim+=o,e.hierNode.change+=r}function c(e,t){return e.parentNode===t.parentNode?1:2}t.init=function(e){e.hierNode={defaultAncestor:null,ancestor:e,prelim:0,modifier:0,change:0,shift:0,i:0,thread:null};for(var t,o,r=[e];t=r.pop();)if(o=t.children,t.isExpand&&o.length)for(var i=o.length-1;i>=0;i--){var n=o[i];n.hierNode={defaultAncestor:null,ancestor:n,prelim:0,modifier:0,change:0,shift:0,i:i,thread:null},r.push(n)}},t.firstWalk=function(e,t){var o=e.isExpand?e.children:[],r=e.parentNode.children,c=e.hierNode.i?r[e.hierNode.i-1]:null;if(o.length){!function(e){var t=e.children,o=t.length,r=0,n=0;for(;--o>=0;){var d=t[o];d.hierNode.prelim+=r,d.hierNode.modifier+=r,n+=d.hierNode.change,r+=d.hierNode.shift+n}}(e);var f=(o[0].hierNode.prelim+o[o.length-1].hierNode.prelim)/2;c?(e.hierNode.prelim=c.hierNode.prelim+t(e,c),e.hierNode.modifier=e.hierNode.prelim-f):e.hierNode.prelim=f}else c&&(e.hierNode.prelim=c.hierNode.prelim+t(e,c));e.parentNode.hierNode.defaultAncestor=function(e,t,o,r){if(t){for(var c=e,f=e,y=f.parentNode.children[0],m=t,v=c.hierNode.modifier,x=f.hierNode.modifier,N=y.hierNode.modifier,_=m.hierNode.modifier;m=n(m),f=d(f),m&&f;){c=n(c),y=d(y),c.hierNode.ancestor=e;var w=m.hierNode.prelim+_-f.hierNode.prelim-x+r(m,f);w>0&&(h(l(m,e,o),e,w),x+=w,v+=w),_+=m.hierNode.modifier,x+=f.hierNode.modifier,v+=c.hierNode.modifier,N+=y.hierNode.modifier}m&&!n(c)&&(c.hierNode.thread=m,c.hierNode.modifier+=_-v),f&&!d(y)&&(y.hierNode.thread=f,y.hierNode.modifier+=x-N,o=e)}return o}(e,c,e.parentNode.hierNode.defaultAncestor||r[0],t)},t.secondWalk=function(e){var t=e.hierNode.prelim+e.parentNode.hierNode.modifier;e.setLayout({x:t},!0),e.hierNode.modifier+=e.parentNode.hierNode.modifier},t.separation=function(e){return arguments.length?e:c},t.radialCoordinate=function(e,t){var o={};return e-=Math.PI/2,o.x=t*Math.cos(e),o.y=t*Math.sin(e),o},t.getViewRect=function(e,t){return r.getLayoutRect(e.getBoxLayoutParams(),{width:t.getWidth(),height:t.getHeight()})}}}]);