(function(e){function n(n){for(var r,a,o=n[0],i=n[1],d=n[2],f=0,l=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(l.length)l.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==c[o]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d21e30b":"23c43a0c","chunk-2e8eb513":"df06b0a9","chunk-64ab7657":"7566bde2","chunk-6b54ee91":"ee389c0f","chunk-7d59d850":"f5203c1a","chunk-904c5c7e":"9e9a52ec","chunk-cabd270a":"ccd8166d","chunk-2d210975":"e1ae3d07","chunk-616f7b78":"bfe0cb98","chunk-8b7aca10":"fd6a579b","chunk-2d0cbdea":"b2aae6dd","chunk-69a52648":"3df1b7c0","chunk-2d0a47c1":"d6d108f7"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-8b7aca10":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21e30b":"31d6cfe0","chunk-2e8eb513":"31d6cfe0","chunk-64ab7657":"31d6cfe0","chunk-6b54ee91":"31d6cfe0","chunk-7d59d850":"31d6cfe0","chunk-904c5c7e":"31d6cfe0","chunk-cabd270a":"31d6cfe0","chunk-2d210975":"31d6cfe0","chunk-616f7b78":"31d6cfe0","chunk-8b7aca10":"b5547547","chunk-2d0cbdea":"31d6cfe0","chunk-69a52648":"31d6cfe0","chunk-2d0a47c1":"31d6cfe0"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var d=u[o],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===c))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){d=l[o],f=d.getAttribute("data-href");if(f===r||f===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],s.parentNode.removeChild(s),t(u)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=u);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var l=new Error;d=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}c[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var s=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},c=[],u={name:"App"},o=u,i=t("2877"),d=Object(i["a"])(o,a,c,!1,null,null,null),f=d.exports,l=(t("d3b7"),t("8c4f"));r["default"].use(l["a"]);var s=new l["a"]({mode:"hash",base:"/",routes:[{path:"/login",component:function(){return t.e("chunk-64ab7657").then(t.bind(null,"a55b"))}},{path:"/",component:function(){return t.e("chunk-2d21e30b").then(t.bind(null,"d504"))},children:[{name:"Dashboard",path:"dashboard",component:function(){return t.e("chunk-6b54ee91").then(t.bind(null,"7277"))}},{name:"Configuration",path:"configuration",component:function(){return t.e("chunk-7d59d850").then(t.bind(null,"829a"))}},{name:"Policy",path:"policy",component:function(){return t.e("chunk-cabd270a").then(t.bind(null,"2da4"))}},{name:"Alerts",path:"alerts",component:function(){return t.e("chunk-2e8eb513").then(t.bind(null,"9413"))}},{name:"Topics",path:"topics",component:function(){return t.e("chunk-904c5c7e").then(t.bind(null,"6a00"))}}]}]}),p=(t("96cf"),t("1da1")),h=t("2f62"),b=t("bc3a"),m=t.n(b);r["default"].use(h["a"]);var g=new h["a"].Store({state:{recipes:[],user:null,apiUrl:"https://reqres.in/api/",drawer:null,primaryDrawer:{model:null,type:"default (no property)",clipped:!1,floating:!1,mini:!1},pageName:""},mutations:{setUser:function(e,n){e.user=n},setRecipes:function(e,n){e.recipes=n},setDrawer:function(e,n){e.drawer=n},setPrimaryDrawer:function(e,n){e.primaryDrawer=n},setPageName:function(e,n){console.log(e.pageName),e.pageName=n}},actions:{getRecipes:function(e,n){return Object(p["a"])(regeneratorRuntime.mark((function t(){var r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,a=e.commit,t.prev=1,t.next=4,m.a.get("".concat(r.apiUrl),{params:{q:n,app_id:"69b9a22a",app_key:"1279a7af24e7f204f8456f3344aecc5a",from:0,to:9}});case 4:c=t.sent,a("setRecipes",c.data.hits),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),a("setRecipes",[]);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},modules:{}}),k=t("ce5b"),v=t.n(k);t("bf40");r["default"].use(v.a);var y=new v.a({});r["default"].config.productionTip=!1,new r["default"]({router:s,store:g,vuetify:y,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.8a90d367.js.map