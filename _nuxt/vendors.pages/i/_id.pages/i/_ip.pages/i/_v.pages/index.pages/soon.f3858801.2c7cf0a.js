(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1683:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n(30),r=n.n(o);const d=/[-.]/,l=/(\d)(?=(\d{3})+$)/g;function c(t){if(r.a.utils.isBigNumber(t))return!0;if("object"==typeof t){if(t.hasOwnProperty("_isBigNumber"))return t._isBigNumber;if(t.hasOwnProperty("_hex"))return!0}return!1}function h(t){try{let e=r.a.toBigNumber(0);return r.a.utils.isBigNumber(t)?e=t:c(t)?t.hasOwnProperty("_hex")?e=new o.BigNumber(t._hex):console.log("failed to create big number"):("string"==typeof t||"number"==typeof t)&&(e=r.a.toBigNumber(t)),e.toNumber()}catch(t){return console.error(t),0}}function f(t){return isNaN(t)?"-":c(t)?h(t):parseInt(t)}o.BigNumber.prototype.formatCurrency=function(t=",",e=".",n="$"){return this.toFixed(2).toString().split(d).reverse().reduceRight((function(n,o,i){return 2===i?"-"+n:1===i?n+o.replace(l,"$1"+t):n+e+o}),n)},o.BigNumber.prototype.formatSun=function(t=",",e=".",n="$"){return this.toFixed(6).toString().split(d).reverse().reduceRight((function(n,o,i){return 2===i?"-"+n:1===i?n+o.replace(l,"$1"+t):n+e+o}),n)},o.BigNumber.prototype.unitMoney=function(t=",",e=".",n="$"){return this.toFixed(1).toString().split(d).reverse().reduceRight((function(n,o,i){return 2===i?"-"+n:1===i?n+o.replace(l,"$1"+t):n+e+o}),n)}},1698:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(198);const r=o.utils.keccak256;o.utils.sha256,o.utils.toUtf8Bytes,o.utils.recoverAddress,o.utils.SigningKey,o.utils.AbiCoder},1699:function(t,e,n){var content=n(1700);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("ea17b07a",content,!0,{sourceMap:!1})},1700:function(t,e,n){var o=n(31)(!1);o.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(0.4, 0, 0.2, 1)}.v-main:not([data-booted=true]){transition:none !important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=o},1722:function(t,e,n){"use strict";n.d(e,"a",(function(){return N}));var o={NILE:"NILE",MAINNET:"MAINNET",SHASTA:"SHASTA",TRONEX:"TRONEX"},r={full_node:"https://api.trongrid.io",event_server:"https://api.trongrid.io"},d={full_node:"https://httpapi.nileex.io",event_server:"https://eventtest.nileex.io",solidity_node:"https://httpapi.nileex.io",faucet:"http://nileex.io/join/getJoinPage"},l={full_node:"https://api.shasta.trongrid.io",event_server:"https://api.shasta.trongrid.io",faucet:"https://www.trongrid.io/faucet"},c={full_node:"https://testhttpapi.tronex.io",event_server:"https://testapi.tronex.io",faucet:"http://testnet.tronex.io/join/getJoinPage"},h={full_node:"https://api.nileex.io",event_server:"https://event.nileex.io",solidity_node:"https://api.nileex.io",faucet:"http://nileex.io/join/getJoinPage"},f={full_node:"https://api.trongrid.io",solidity_node:"https://api.trongrid.io",event_server:"https://api.trongrid.io"},_=n(1687),N={data:()=>({tronLink:!1,tronWeb:!1,tronLinkInitialData:!1,connectedNode:!1,account_name:!1,authorized_address:!1,_debug_tronlink:!1,node_version:""}),methods:{TronApiKey:()=>"",checkTronLink(){if(window&&window.hasOwnProperty("tronWeb")){const t=this.TronApiKey();if(!this.tronWeb&&(this.tronWeb=window.tronWeb,""!==t))try{this.tronWeb.setHeader({"TRON-PRO-API-KEY":t})}catch(t){}return this.tronLink||(this.tronLink=new _.a(this.tronWeb)),this.notify_tron_installed(),!0}return this.notify_tron_not_install(),!1},notify_tron_not_install(){console.log("TronLink is not installed"),this.$emit("notify_tron_not_install",this.tronLinkInitialData,this.connectedNode)},announce_node_name(t=""){t===d.full_node?this.connectedNode=o.NILE:t===r.full_node?this.connectedNode=o.MAINNET:t===l.full_node?this.connectedNode=o.SHASTA:t===f.full_node?this.connectedNode=o.MAINNET:t===c.full_node?this.connectedNode=o.TRONEX:t===h.full_node?this.connectedNode=o.NILE:this.connectedNode=""},async notify_tron_installed(){const t=this;window.addEventListener("message",(e=>{const n=JSON.stringify(e.data),o=JSON.parse(n);if(!(o&&o.hasOwnProperty("message")&&o.message.hasOwnProperty("action")))return;const r=e.data;r.hasOwnProperty("isTronLink")&&r.isTronLink&&(t.tronLink.eventListener(r.message,t.tronLinkInitialData,t),t.tronLink.__debugMessage(r))})),await this.updateNodeVersion();let e=this.tronLink.tronWeb.currentProvider();console.log("TronLink is OK! ✅ "),this._debug_tronlink&&(console.log(e.fullNode.host),console.log("tronweb object",this.tronWeb)),this.announce_node_name(e.fullNode.host),this.$emit("notify_tron_installed")},async updateNodeVersion(){this.node_version=await this.tronWeb.getFullnodeVersion()},debugTronLink(t){this._debug_tronlink=t},isInstalled(){return this.tronLink&&this.tronWeb},isNile(){return this.connectedNode===o.NILE},isMainnet(){return this.connectedNode===o.MAINNET},isShasta(){return this.connectedNode===o.SHASTA},isTronex(){return this.connectedNode===o.TRONEX},confirmDappChainID(t){return!("nile"!==t.toLowerCase()||!this.isNile())||(!("tronex"!==t.toLowerCase()||!this.isTronex())||(!("shasta"!==t.toLowerCase()||!this.isShasta())||!!("default"===t.toLowerCase()||"mainnet"===t.toLowerCase()&&this.isMainnet())))}},mounted(){let t=this;setTimeout((function e(){t.checkTronLink(),this.tronWeb||setTimeout(e,1e3)}),0)}};n(1683),n(1689)},1726:function(t,e,n){"use strict";n(1699);var o=n(337);e.a=o.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,n=t.top,o=t.right,footer=t.footer,r=t.insetFooter,d=t.bottom,l=t.left;return{paddingTop:"".concat(n+e,"px"),paddingRight:"".concat(o,"px"),paddingBottom:"".concat(footer+r+d,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);