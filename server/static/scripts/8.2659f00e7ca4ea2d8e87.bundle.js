webpackJsonp([8,15],{1194:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),u=n.n(a),c=n(32),s=(n.n(c),n(242)),f=n.n(s),p=n(1415),l=n(1488),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y=function(t){var e=t.practiceAreas,n=t.entities;return v({},e,n)},d=function(t){return{onFetchPracticeAreas:function(){t(n.i(p.a)())}}},b=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.renderButtonLinks=n.renderButtonLinks.bind(n),n}return i(e,t),h(e,[{key:"componentDidMount",value:function(){this.props.onFetchPracticeAreas()}},{key:"renderButtonLinks",value:function(){var t=this.props,e=t.practiceAreas,n=t.practiceAreaIds;return n.map(function(t){var n=e[t].area,r=e[t].slug;return u.a.createElement("div",{key:t,className:"col-sm-6"},u.a.createElement(l.a,{key:t,id:t,text:n,slug:"/practice-areas/"+r,imgSrc:e[t].thumbnailSrc,customClassNames:"btn-practice-area"}))})}},{key:"render",value:function(){return u.a.createElement("main",null,u.a.createElement(f.a,{title:"Our Practice Areas",meta:[{name:"description",content:"Our firm's practice areas."}]}),u.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"url(https://conceptlawfirm.xyz/static/images/2000/home.jpg)"}},u.a.createElement("div",{className:"container"},u.a.createElement("h1",{className:"text-uppercase"},"Practice Areas"))),u.a.createElement("div",{className:"container-fluid"},this.renderButtonLinks()))}}]),e}(a.Component);b.propTypes={onFetchPracticeAreas:a.PropTypes.func.isRequired,practiceAreas:a.PropTypes.object.isRequired},e.default=n.i(c.connect)(y,d)(b)},1315:function(t,e,n){var r=n(1332),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},1316:function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(1360),i=n(1373);t.exports=r},1317:function(t,e,n){"use strict";function r(t){return{type:_.f,value:t}}function o(t){return{type:_.g,value:t}}function i(t){return{type:_.h,value:t}}function a(t){return{type:_.i,value:t}}function u(t){return{type:_.j,sortBy:t}}function c(t){return{type:_.k,value:t}}function s(t,e){return{type:_.l,records:t,recordIds:e}}function f(t,e,n){return{type:_.m,entities:t,addedRecord:e,addedRecordId:n}}function p(t,e,n){return{type:_.n,entities:t,editedRecord:e,editedRecordId:n}}function l(t,e,n){return{type:_.o,entities:t,records:e,recordIds:n}}function h(t,e){return{type:_.p,entities:t,commentId:e}}function v(t){return{type:_.q,formData:t}}function y(){return{type:_.r}}function d(){return{type:_.s}}function b(){return{type:_.t}}var _=n(33);e.h=r,e.i=o,e.n=i,e.l=a,e.g=u,e.f=c,e.a=s,e.b=f,e.c=p,e.e=l,e.d=h,e.o=v,e.j=y,e.k=d,e.m=b},1318:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},1319:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){t[e]=n}function i(t,e,n,r,i){var a=r.assignEntity,u=void 0===a?o:a,c=e&&e.getDefaults&&e.getDefaults(),s=e&&e.getAssignEntity&&e.getAssignEntity(),f=(0,S.default)(c)?_({},c):{};for(var p in t)if(t.hasOwnProperty(p)){var h="function"==typeof e[p]?e[p].call(null,t):e[p],v=l(t[p],h,n,r,i);u.call(null,f,p,v,t,e),s&&s.call(null,f,p,v,t,e)}return f}function a(t,e,n,r){return function(t,o){return l(t,e,n,r,o)}}function u(t,e,n,r){return function(o,i){var a=t.getSchemaKey(o),u=l(o,e[a],n,r,i);return{id:u,schema:a}}}function c(t,e,n,r){var o=e.getItemSchema(),i=a(e,o,n,r);return Array.isArray(t)?t.map(i):Object.keys(t).reduce(function(e,n){return e[n]=i(t[n],n),e},{})}function s(t,e,n,r){var o=e.getItemSchema();return u(e,o,n,r)(t)}function f(t,e,n){for(var r in e)e.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&!(0,k.default)(t[r],e[r])?console.warn("When merging two "+n+', found unequal data in their "'+r+'" values. Using the earlier value.',t[r],e[r]):t[r]=e[r])}function p(t,e,n,r,o){var a=r.mergeIntoEntity,u=void 0===a?f:a,c=e.getKey(),s=e.getId(t,o);n.hasOwnProperty(c)||(n[c]={}),n[c].hasOwnProperty(s)||(n[c][s]={});var p=n[c][s],l=i(t,e,n,r,o);return u(p,l,c),s}function l(t,e,n,r,o){return(0,S.default)(t)&&(0,S.default)(e)?e instanceof g.default?p(t,e,n,r,o):e instanceof x.default?c(t,e,n,r):e instanceof O.default?s(t,e,n,r):i(t,e,n,r,o):t}function h(t){return(0,S.default)(t)&&(0,k.default)(Object.keys(t),Object.keys(t).map(function(e){return t[e]}))?Object.keys(t):t}function v(t,e){return new x.default(t,e)}function y(t,e){return new x.default(t,e)}function d(t,e){return new O.default(t,e)}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,S.default)(t))throw new Error("Normalize accepts an object or an array as its input.");if(!(0,S.default)(e)||Array.isArray(e))throw new Error("Normalize accepts an object for schema.");var r={},o=l(t,e,r,n);return{entities:r,result:h(o)}}Object.defineProperty(e,"__esModule",{value:!0}),e.Schema=void 0;var _=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.arrayOf=v,e.valuesOf=y,e.unionOf=d,e.normalize=b;var m=n(1412),g=r(m),j=n(1413),x=r(j),w=n(1339),O=r(w),A=n(1408),k=r(A),P=n(1318),S=r(P);e.Schema=g.default},1320:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1383),i=n(1384),a=n(1385),u=n(1386),c=n(1387);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},1321:function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(1334);t.exports=r},1322:function(t,e,n){function r(t){return null==t?void 0===t?c:u:s&&s in Object(t)?i(t):a(t)}var o=n(1328),i=n(1370),a=n(1396),u="[object Null]",c="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},1323:function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(1380);t.exports=r},1324:function(t,e,n){var r=n(1316),o=r(Object,"create");t.exports=o},1325:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},1326:function(t,e,n){"use strict";var r=n(1319);n.n(r);n.d(e,"a",function(){return h}),n.d(e,"c",function(){return v}),n.d(e,"b",function(){return y}),n.d(e,"i",function(){return d}),n.d(e,"g",function(){return b}),n.d(e,"h",function(){return _}),n.d(e,"e",function(){return m}),n.d(e,"f",function(){return g}),n.d(e,"d",function(){return j});var o=new r.Schema("practiceAreas"),i=new r.Schema("posts"),a=new r.Schema("comments"),u=new r.Schema("users"),c=new r.Schema("staff"),s=new r.Schema("staffUsers",{idAttribute:"userId"}),f=new r.Schema("clients"),p=new r.Schema("clientUsers",{idAttribute:"userId"}),l=new r.Schema("matters"),h=(new r.Schema("currentUser"),o),v=i,y=a,d=u,b=c,_=s,m=f,g=p,j=l},1327:function(t,e,n){var r=n(1316),o=n(1315),i=r(o,"Map");t.exports=i},1328:function(t,e,n){var r=n(1315),o=r.Symbol;t.exports=o},1329:function(t,e){var n=Array.isArray;t.exports=n},1330:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1388),i=n(1389),a=n(1390),u=n(1391),c=n(1392);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},1331:function(t,e,n){function r(t,e,n,r,s,f){var p=n&u,l=t.length,h=e.length;if(l!=h&&!(p&&h>l))return!1;var v=f.get(t);if(v&&f.get(e))return v==e;var y=-1,d=!0,b=n&c?new o:void 0;for(f.set(t,e),f.set(e,t);++y<l;){var _=t[y],m=e[y];if(r)var g=p?r(m,_,y,e,t,f):r(_,m,y,t,e,f);if(void 0!==g){if(g)continue;d=!1;break}if(b){if(!i(e,function(t,e){if(!a(b,e)&&(_===t||s(_,t,n,r,f)))return b.push(e)})){d=!1;break}}else if(_!==m&&!s(_,m,n,r,f)){d=!1;break}}return f.delete(t),f.delete(e),d}var o=n(1348),i=n(1355),a=n(1365),u=1,c=2;t.exports=r},1332:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(21))},1333:function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},1334:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},1335:function(t,e,n){(function(t){var r=n(1315),o=n(1411),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i,c=u?r.Buffer:void 0,s=c?c.isBuffer:void 0,f=s||o;t.exports=f}).call(e,n(106)(t))},1336:function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==u||e==c||e==a||e==s}var o=n(1322),i=n(1318),a="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";t.exports=r},1337:function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},1338:function(t,e,n){var r=n(1361),o=n(1364),i=n(1395),a=i&&i.isTypedArray,u=a?o(a):r;t.exports=u},1339:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1318),u=r(a),c=function(){function t(e,n){if(o(this,t),!(0,u.default)(e))throw new Error("UnionSchema requires item schema to be an object.");if(!n||!n.schemaAttribute)throw new Error("UnionSchema requires schemaAttribute option.");this._itemSchema=e;var r=n.schemaAttribute;this._getSchema="function"==typeof r?r:function(t){return t[r]}}return i(t,[{key:"getItemSchema",value:function(){return this._itemSchema}},{key:"getSchemaKey",value:function(t){return this._getSchema(t)}}]),t}();e.default=c},1344:function(t,e,n){var r=n(1316),o=n(1315),i=r(o,"DataView");t.exports=i},1345:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1374),i=n(1375),a=n(1376),u=n(1377),c=n(1378);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},1346:function(t,e,n){var r=n(1316),o=n(1315),i=r(o,"Promise");t.exports=i},1347:function(t,e,n){var r=n(1316),o=n(1315),i=r(o,"Set");t.exports=i},1348:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new o;++e<n;)this.add(t[e])}var o=n(1330),i=n(1398),a=n(1399);r.prototype.add=r.prototype.push=i,r.prototype.has=a,t.exports=r},1349:function(t,e,n){function r(t){var e=this.__data__=new o(t);this.size=e.size}var o=n(1320),i=n(1401),a=n(1402),u=n(1403),c=n(1404),s=n(1405);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=u,r.prototype.has=c,r.prototype.set=s,t.exports=r},1350:function(t,e,n){var r=n(1315),o=r.Uint8Array;t.exports=o},1351:function(t,e,n){var r=n(1316),o=n(1315),i=r(o,"WeakMap");t.exports=i},1352:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}t.exports=n},1353:function(t,e,n){function r(t,e){var n=a(t),r=!n&&i(t),f=!n&&!r&&u(t),l=!n&&!r&&!f&&s(t),h=n||r||f||l,v=h?o(t.length,String):[],y=v.length;for(var d in t)!e&&!p.call(t,d)||h&&("length"==d||f&&("offset"==d||"parent"==d)||l&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||c(d,y))||v.push(d);return v}var o=n(1363),i=n(1406),a=n(1329),u=n(1335),c=n(1379),s=n(1338),f=Object.prototype,p=f.hasOwnProperty;t.exports=r},1354:function(t,e){function n(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}t.exports=n},1355:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}t.exports=n},1356:function(t,e,n){function r(t,e,n){var r=e(t);return i(t)?r:o(r,n(t))}var o=n(1354),i=n(1329);t.exports=r},1357:function(t,e,n){function r(t){return i(t)&&o(t)==a}var o=n(1322),i=n(1325),a="[object Arguments]";t.exports=r},1358:function(t,e,n){function r(t,e,n,a,u){return t===e||(null==t||null==e||!i(t)&&!i(e)?t!==t&&e!==e:o(t,e,n,a,r,u))}var o=n(1359),i=n(1325);t.exports=r},1359:function(t,e,n){function r(t,e,n,r,d,_){var m=s(t),g=s(e),j=m?v:c(t),x=g?v:c(e);j=j==h?y:j,x=x==h?y:x;var w=j==y,O=x==y,A=j==x;if(A&&f(t)){if(!f(e))return!1;m=!0,w=!1}if(A&&!w)return _||(_=new o),m||p(t)?i(t,e,n,r,d,_):a(t,e,j,n,r,d,_);if(!(n&l)){var k=w&&b.call(t,"__wrapped__"),P=O&&b.call(e,"__wrapped__");if(k||P){var S=k?t.value():t,E=P?e.value():e;return _||(_=new o),d(S,E,n,r,_)}}return!!A&&(_||(_=new o),u(t,e,n,r,d,_))}var o=n(1349),i=n(1331),a=n(1367),u=n(1368),c=n(1372),s=n(1329),f=n(1335),p=n(1338),l=1,h="[object Arguments]",v="[object Array]",y="[object Object]",d=Object.prototype,b=d.hasOwnProperty;t.exports=r},1360:function(t,e,n){function r(t){if(!a(t)||i(t))return!1;var e=o(t)?v:s;return e.test(u(t))}var o=n(1336),i=n(1381),a=n(1318),u=n(1333),c=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,p=Object.prototype,l=f.toString,h=p.hasOwnProperty,v=RegExp("^"+l.call(h).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},1361:function(t,e,n){function r(t){return a(t)&&i(t.length)&&!!I[o(t)]}var o=n(1322),i=n(1337),a=n(1325),u="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",p="[object Error]",l="[object Function]",h="[object Map]",v="[object Number]",y="[object Object]",d="[object RegExp]",b="[object Set]",_="[object String]",m="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",x="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",A="[object Int16Array]",k="[object Int32Array]",P="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",z="[object Uint32Array]",I={};I[x]=I[w]=I[O]=I[A]=I[k]=I[P]=I[S]=I[E]=I[z]=!0,I[u]=I[c]=I[g]=I[s]=I[j]=I[f]=I[p]=I[l]=I[h]=I[v]=I[y]=I[d]=I[b]=I[_]=I[m]=!1,t.exports=r},1362:function(t,e,n){function r(t){if(!o(t))return i(t);var e=[];for(var n in Object(t))u.call(t,n)&&"constructor"!=n&&e.push(n);return e}var o=n(1382),i=n(1394),a=Object.prototype,u=a.hasOwnProperty;t.exports=r},1363:function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},1364:function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},1365:function(t,e){function n(t,e){return t.has(e)}t.exports=n},1366:function(t,e,n){var r=n(1315),o=r["__core-js_shared__"];t.exports=o},1367:function(t,e,n){function r(t,e,n,r,o,w,A){switch(n){case x:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!w(new i(t),new i(e)));case l:case h:case d:return a(+t,+e);case v:return t.name==e.name&&t.message==e.message;case b:case m:return t==e+"";case y:var k=c;case _:var P=r&f;if(k||(k=s),t.size!=e.size&&!P)return!1;var S=A.get(t);if(S)return S==e;r|=p,A.set(t,e);var E=u(k(t),k(e),r,o,w,A);return A.delete(t),E;case g:if(O)return O.call(t)==O.call(e)}return!1}var o=n(1328),i=n(1350),a=n(1334),u=n(1331),c=n(1393),s=n(1400),f=1,p=2,l="[object Boolean]",h="[object Date]",v="[object Error]",y="[object Map]",d="[object Number]",b="[object RegExp]",_="[object Set]",m="[object String]",g="[object Symbol]",j="[object ArrayBuffer]",x="[object DataView]",w=o?o.prototype:void 0,O=w?w.valueOf:void 0;t.exports=r},1368:function(t,e,n){function r(t,e,n,r,a,c){var s=n&i,f=o(t),p=f.length,l=o(e),h=l.length;if(p!=h&&!s)return!1;for(var v=p;v--;){var y=f[v];if(!(s?y in e:u.call(e,y)))return!1}var d=c.get(t);if(d&&c.get(e))return d==e;var b=!0;c.set(t,e),c.set(e,t);for(var _=s;++v<p;){y=f[v];var m=t[y],g=e[y];if(r)var j=s?r(g,m,y,e,t,c):r(m,g,y,t,e,c);if(!(void 0===j?m===g||a(m,g,n,r,c):j)){b=!1;break}_||(_="constructor"==y)}if(b&&!_){var x=t.constructor,w=e.constructor;x!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof x&&x instanceof x&&"function"==typeof w&&w instanceof w)&&(b=!1)}return c.delete(t),c.delete(e),b}var o=n(1369),i=1,a=Object.prototype,u=a.hasOwnProperty;t.exports=r},1369:function(t,e,n){function r(t){return o(t,a,i)}var o=n(1356),i=n(1371),a=n(1409);t.exports=r},1370:function(t,e,n){function r(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}var o=n(1328),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=o?o.toStringTag:void 0;t.exports=r},1371:function(t,e,n){var r=n(1352),o=n(1410),i=Object.prototype,a=i.propertyIsEnumerable,u=Object.getOwnPropertySymbols,c=u?function(t){return null==t?[]:(t=Object(t),r(u(t),function(e){return a.call(t,e)}))}:o;t.exports=c},1372:function(t,e,n){var r=n(1344),o=n(1327),i=n(1346),a=n(1347),u=n(1351),c=n(1322),s=n(1333),f="[object Map]",p="[object Object]",l="[object Promise]",h="[object Set]",v="[object WeakMap]",y="[object DataView]",d=s(r),b=s(o),_=s(i),m=s(a),g=s(u),j=c;(r&&j(new r(new ArrayBuffer(1)))!=y||o&&j(new o)!=f||i&&j(i.resolve())!=l||a&&j(new a)!=h||u&&j(new u)!=v)&&(j=function(t){var e=c(t),n=e==p?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case d:return y;case b:return f;case _:return l;case m:return h;case g:return v}return e}),t.exports=j},1373:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},1374:function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(1324);t.exports=r},1375:function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},1376:function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return u.call(e,t)?e[t]:void 0}var o=n(1324),i="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;t.exports=r},1377:function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:a.call(e,t)}var o=n(1324),i=Object.prototype,a=i.hasOwnProperty;t.exports=r},1378:function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(1324),i="__lodash_hash_undefined__";t.exports=r},1379:function(t,e){function n(t,e){return e=null==e?r:e,!!e&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},1380:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},1381:function(t,e,n){function r(t){return!!i&&i in t}var o=n(1366),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},1382:function(t,e){function n(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||r;return t===n}var r=Object.prototype;t.exports=n},1383:function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},1384:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():a.call(e,n,1),--this.size,!0}var o=n(1321),i=Array.prototype,a=i.splice;t.exports=r},1385:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(1321);t.exports=r},1386:function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(1321);t.exports=r},1387:function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(1321);t.exports=r},1388:function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=n(1345),i=n(1320),a=n(1327);t.exports=r},1389:function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(1323);t.exports=r},1390:function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(1323);t.exports=r},1391:function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(1323);t.exports=r},1392:function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(1323);t.exports=r},1393:function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}t.exports=n},1394:function(t,e,n){var r=n(1397),o=r(Object.keys,Object);t.exports=o},1395:function(t,e,n){(function(t){var r=n(1332),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o,u=a&&r.process,c=function(){try{return u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=c}).call(e,n(106)(t))},1396:function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},1397:function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},1398:function(t,e){function n(t){return this.__data__.set(t,r),this}var r="__lodash_hash_undefined__";t.exports=n},1399:function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},1400:function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}t.exports=n},1401:function(t,e,n){function r(){this.__data__=new o,this.size=0}var o=n(1320);t.exports=r},1402:function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},1403:function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},1404:function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},1405:function(t,e,n){function r(t,e){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!i||r.length<u-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(r)}return n.set(t,e),this.size=n.size,this}var o=n(1320),i=n(1327),a=n(1330),u=200;t.exports=r},1406:function(t,e,n){var r=n(1357),o=n(1325),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},1407:function(t,e,n){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=n(1336),i=n(1337);t.exports=r},1408:function(t,e,n){function r(t,e){return o(t,e)}var o=n(1358);t.exports=r},1409:function(t,e,n){function r(t){return a(t)?o(t):i(t)}var o=n(1353),i=n(1362),a=n(1407);t.exports=r},1410:function(t,e){function n(){return[]}t.exports=n},1411:function(t,e){function n(){return!1}t.exports=n},1412:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,t),!e||"string"!=typeof e)throw new Error("A string non-empty key is required");this._key=e,this._assignEntity=n.assignEntity;var o=n.idAttribute||"id";this._getId="function"==typeof o?o:function(t){return t[o]},this._idAttribute=o,this._meta=n.meta,this._defaults=n.defaults}return o(t,[{key:"getAssignEntity",value:function(){return this._assignEntity}},{key:"getKey",value:function(){return this._key}},{key:"getId",value:function(t,e){return this._getId(t,e)}},{key:"getIdAttribute",value:function(){return this._idAttribute}},{key:"getMeta",value:function(t){if(!t||"string"!=typeof t)throw new Error("A string non-empty property name is required");return this._meta&&this._meta[t]}},{key:"getDefaults",value:function(){return this._defaults}},{key:"define",value:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])}}]),t}();e.default=i},1413:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1318),u=r(a),c=n(1339),s=r(c),f=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,t),!(0,u.default)(e))throw new Error("ArraySchema requires item schema to be an object.");if(n.schemaAttribute){var r=n.schemaAttribute;this._itemSchema=new s.default(e,{schemaAttribute:r})}else this._itemSchema=e}return i(t,[{key:"getItemSchema",value:function(){return this._itemSchema}}]),t}();e.default=f},1415:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e){return f.a.get("https://conceptlawfirm.xyz/api/practice-areas").then(function(r){var o=r.data.practiceAreas,i=n.i(p.normalize)(o,n.i(p.arrayOf)(l.a));e(t?n.i(h.a)(i.entities.practiceAreas,i.result):u(i.entities,i.result))})}}function o(t){return function(e){return f.a.get("https://conceptlawfirm.xyz/api/practice-areas/"+t).then(function(t){var r=t.data.practiceArea,o=n.i(p.normalize)(r,l.a);return e(c(o.entities.practiceAreas,r.id))})}}function i(t,e){return function(r){return f.a.post("https://conceptlawfirm.xyz/api/practice-areas",e,t).then(function(t){var e=t.data.practiceArea,o=n.i(p.normalize)(e,l.a);r(n.i(h.b)(o.entities,o.entities.practiceAreas,e.id))})}}function a(t,e,r){return function(o){return f.a.put("https://conceptlawfirm.xyz/api/practice-areas/"+r,e,t).then(function(t){var e=t.data.practiceArea,r=n.i(p.normalize)(e,l.a);o(n.i(h.c)(r.entities,r.entities.practiceAreas,e.id))})}}function u(t,e){return{type:v.d,entities:t,practiceAreaIds:e}}function c(t,e){return{type:v.e,practiceArea:t,practiceAreaId:e}}var s=n(105),f=n.n(s),p=n(1319),l=(n.n(p),n(1326)),h=n(1317),v=n(33);e.a=r,e.b=o,e.d=i,e.c=a},1448:function(t,e,n){"use strict";var r=n(248),o=n.n(r);e.a=o()()},1488:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),u=n.n(a),c=n(53),s=n(1448),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=function(t){function e(t){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),f(e,[{key:"componentDidMount",value:function(){var t={duration:1e3,scale:1,distance:0};s.a.reveal(this.button,t,100)}},{key:"handleClick",value:function(){var t=this.props,e=t.router,n=t.slug,r=t.id;e.push({pathname:n,state:{id:r}})}},{key:"render",value:function(){var t=this;this.handleClick=this.handleClick.bind(this);var e=this.props,n=e.text,r=e.imgSrc,o=e.customClassNames;return u.a.createElement("div",{className:"form-group"},u.a.createElement("button",{type:"button",className:"btn btn-block text-uppercase "+o,onClick:this.handleClick,style:{backgroundImage:"url("+r+")"},ref:function(e){return t.button=e}},n))}}]),e}(a.Component);e.a=n.i(c.withRouter)(p),p.propTypes={router:a.PropTypes.object.isRequired,slug:a.PropTypes.string.isRequired,id:a.PropTypes.string.isRequired,text:a.PropTypes.string.isRequired,imgSrc:a.PropTypes.string.isRequired,customClassNames:a.PropTypes.string.isRequired}}});