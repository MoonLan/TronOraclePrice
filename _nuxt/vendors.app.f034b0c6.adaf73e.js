(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1520:function(e,t,n){var r=n(12);n(759),n(1527),n(1528);var o=n(1529),l=n(1530),h=n(293);r.registerLayout(o),r.registerVisual(l),r.registerProcessor(h("themeRiver"))},1527:function(e,t,n){var r=n(87),o=n(241),l=n(286).getDimensionTypeByAxis,h=n(147),d=n(1),c=n(42).groupData,m=n(63).encodeHTML,y=n(292),f=r.extend({type:"series.themeRiver",dependencies:["singleAxis"],nameMap:null,init:function(option){f.superApply(this,"init",arguments),this.legendVisualProvider=new y(d.bind(this.getData,this),d.bind(this.getRawData,this))},fixData:function(data){var e=data.length,t={},n=c(data,(function(e){return t.hasOwnProperty(e[0])||(t[e[0]]=-1),e[2]})),r=[];n.buckets.each((function(e,t){r.push({name:t,dataList:e})}));for(var o=r.length,l=0;l<o;++l){for(var h=r[l].name,d=0;d<r[l].dataList.length;++d){var m=r[l].dataList[d][0];t[m]=l}for(var m in t)t.hasOwnProperty(m)&&t[m]!==l&&(t[m]=l,data[e]=[],data[e][0]=m,data[e][1]=0,data[e][2]=h,e++)}return data},getInitialData:function(option,e){for(var t=e.queryComponents({mainType:"singleAxis",index:this.get("singleAxisIndex"),id:this.get("singleAxisId")})[0].get("type"),n=d.filter(option.data,(function(e){return void 0!==e[2]})),data=this.fixData(n||[]),r=[],c=this.nameMap=d.createHashMap(),m=0,i=0;i<data.length;++i)r.push(data[i][2]),c.get(data[i][2])||(c.set(data[i][2],m),m++);var y=o(data,{coordDimensions:["single"],dimensionsDefine:[{name:"time",type:l(t)},{name:"value",type:"float"},{name:"name",type:"ordinal"}],encodeDefine:{single:0,value:1,itemName:2}}),f=new h(y,this);return f.initData(data),f},getLayerSeries:function(){for(var data=this.getData(),e=data.count(),t=[],i=0;i<e;++i)t[i]=i;var n=data.mapDimension("single"),r=c(t,(function(e){return data.get("name",e)})),o=[];return r.buckets.each((function(e,t){e.sort((function(e,t){return data.get(n,e)-data.get(n,t)})),o.push({name:t,indices:e})})),o},getAxisTooltipData:function(e,t,n){d.isArray(e)||(e=e?[e]:[]);for(var r,data=this.getData(),o=this.getLayerSeries(),l=[],h=o.length,i=0;i<h;++i){for(var c=Number.MAX_VALUE,m=-1,y=o[i].indices.length,f=0;f<y;++f){var v=data.get(e[0],o[i].indices[f]),x=Math.abs(v-t);x<=c&&(r=v,c=x,m=o[i].indices[f])}l.push(m)}return{dataIndices:l,nestestValue:r}},formatTooltip:function(e){var data=this.getData(),t=data.getName(e),n=data.get(data.mapDimension("value"),e);return(isNaN(n)||null==n)&&(n="-"),m(t+" : "+n)},defaultOption:{zlevel:0,z:2,coordinateSystem:"singleAxis",boundaryGap:["10%","10%"],singleAxisIndex:0,animationEasing:"linear",label:{margin:4,show:!0,position:"left",color:"#000",fontSize:11},emphasis:{label:{show:!0}}}}),v=f;e.exports=v},1528:function(e,t,n){var r=n(12),o=n(739).Polygon,l=n(16),h=n(1),d=h.bind,c=h.extend,m=n(220),y=r.extendChartView({type:"themeRiver",init:function(){this._layers=[]},render:function(e,t,n){var data=e.getData(),r=this.group,h=e.getLayerSeries(),y=data.getLayout("layoutInfo"),rect=y.rect,f=y.boundaryGap;function v(e){return e.name}r.attr("position",[0,rect.y+f[0]]);var x=new m(this._layersSeries||[],h,v,v),w={};function D(t,n,d){var m=this._layers;if("remove"!==t){for(var y,polygon,text,f=[],v=[],x=h[n].indices,D=0;D<x.length;D++){var I=data.getItemLayout(x[D]),S=I.x,L=I.y0,P=I.y;f.push([S,L]),v.push([S,L+P]),y=data.getItemVisual(x[D],"color")}var A=data.getItemLayout(x[0]),M=data.getItemModel(x[D-1]),R=M.getModel("label"),T=R.get("margin");if("add"===t){var V=w[n]=new l.Group;polygon=new o({shape:{points:f,stackedOnPoints:v,smooth:.4,stackedOnSmooth:.4,smoothConstraint:!1},z2:0}),text=new l.Text({style:{x:A.x-T,y:A.y0+A.y/2}}),V.add(polygon),V.add(text),r.add(V),polygon.setClipPath(function(rect,e,t){var n=new l.Rect({shape:{x:rect.x-10,y:rect.y-10,width:0,height:rect.height+20}});return l.initProps(n,{shape:{width:rect.width+20,height:rect.height+20}},e,t),n}(polygon.getBoundingRect(),e,(function(){polygon.removeClipPath()})))}else{V=m[d];polygon=V.childAt(0),text=V.childAt(1),r.add(V),w[n]=V,l.updateProps(polygon,{shape:{points:f,stackedOnPoints:v}},e),l.updateProps(text,{style:{x:A.x-T,y:A.y0+A.y/2}},e)}var k=M.getModel("emphasis.itemStyle"),N=M.getModel("itemStyle");l.setTextStyle(text.style,R,{text:R.get("show")?e.getFormattedLabel(x[D-1],"normal")||data.getName(x[D-1]):null,textVerticalAlign:"middle"}),polygon.setStyle(c({fill:y},N.getItemStyle(["color"]))),l.setHoverStyle(polygon,k.getItemStyle())}else r.remove(m[n])}x.add(d(D,this,"add")).update(d(D,this,"update")).remove(d(D,this,"remove")).execute(),this._layersSeries=h,this._layers=w},dispose:function(){}});e.exports=y},1529:function(e,t,n){var r=n(1),o=n(34);function l(data,e,t){if(data.count())for(var n,o=e.coordinateSystem,l=e.getLayerSeries(),h=data.mapDimension("single"),d=data.mapDimension("value"),c=r.map(l,(function(e){return r.map(e.indices,(function(e){var t=o.dataToPoint(data.get(h,e));return t[1]=data.get(d,e),t}))})),base=function(data){for(var e=data.length,t=data[0].length,n=[],r=[],o=0,base={},i=0;i<t;++i){for(var l=0,h=0;l<e;++l)h+=data[l][i][1];h>o&&(o=h),n.push(h)}for(var d=0;d<t;++d)r[d]=(o-n[d])/2;o=0;for(var c=0;c<t;++c){var m=n[c]+r[c];m>o&&(o=m)}return base.y0=r,base.max=o,base}(c),m=base.y0,y=t/base.max,f=l.length,v=l[0].indices.length,x=0;x<v;++x){n=m[x]*y,data.setItemLayout(l[0].indices[x],{layerIndex:0,x:c[0][x][0],y0:n,y:c[0][x][1]*y});for(var i=1;i<f;++i)n+=c[i-1][x][1]*y,data.setItemLayout(l[i].indices[x],{layerIndex:i,x:c[i][x][0],y0:n,y:c[i][x][1]*y})}}e.exports=function(e,t){e.eachSeriesByType("themeRiver",(function(e){var data=e.getData(),t=e.coordinateSystem,n={},rect=t.getRect();n.rect=rect;var r=e.get("boundaryGap"),h=t.getAxis();(n.boundaryGap=r,"horizontal"===h.orient)?(r[0]=o.parsePercent(r[0],rect.height),r[1]=o.parsePercent(r[1],rect.height),l(data,e,rect.height-r[0]-r[1])):(r[0]=o.parsePercent(r[0],rect.width),r[1]=o.parsePercent(r[1],rect.width),l(data,e,rect.width-r[0]-r[1]));data.setLayout("layoutInfo",n)}))}},1530:function(e,t,n){var r=n(1).createHashMap;e.exports=function(e){e.eachSeriesByType("themeRiver",(function(e){var data=e.getData(),t=e.getRawData(),n=e.get("color"),o=r();data.each((function(e){o.set(data.getRawIndex(e),e)})),t.each((function(r){var l=t.getName(r),h=n[(e.nameMap.get(l)-1)%n.length];t.setItemVisual(r,"color",h);var d=o.get(r);null!=d&&data.setItemVisual(d,"color",h)}))}))}}}]);