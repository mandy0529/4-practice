this.window=this.window||{},this.window.asos=this.window.asos||{},this.window.asos.webRequest=function(e){"use strict";var t=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e};var r=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}};var n=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)};var o=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var i=function(e){return r(e)||n(e)||o()},a=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},s=Object.prototype.toString;function u(e){return"[object Array]"===s.call(e)}function c(e){return null!==e&&"object"==typeof e}function f(e){return"[object Function]"===s.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var d={isArray:u,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:f,isStream:function(e){return c(e)&&f(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,n){e[n]=r&&"function"==typeof t?a(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}},p=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}(new Error(e),t,r,n,o)};function h(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var E=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],m=d.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=d.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},g=d.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),d.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),d.isString(n)&&a.push("path="+n),d.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},y=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;d.isFormData(n)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password||"";o.Authorization="Basic "+btoa(a+":"+s)}if(i.open(e.method.toUpperCase(),function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(d.isURLSearchParams(t))n=t.toString();else{var o=[];d.forEach(t,(function(e,t){null!=e&&(d.isArray(e)?t+="[]":e=[e],d.forEach(e,(function(e){d.isDate(e)?e=e.toISOString():d.isObject(e)&&(e=JSON.stringify(e)),o.push(h(t)+"="+h(e))})))})),n=o.join("&")}return n&&(e+=(-1===e.indexOf("?")?"?":"&")+n),e}(e.url,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in i?function(e){var t,r,n,o={};return e?(d.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=d.trim(e.substr(0,n)).toLowerCase(),r=d.trim(e.substr(n+1)),t){if(o[t]&&E.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o}(i.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:n,config:e,request:i};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(p("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,o),i=null}},i.onerror=function(){r(p("Network Error",e,null,i)),i=null},i.ontimeout=function(){r(p("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",i)),i=null},d.isStandardBrowserEnv()){var u=g,c=(e.withCredentials||m(e.url))&&e.xsrfCookieName?u.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in i&&d.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),e.withCredentials&&(i.withCredentials=!0),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),r(e),i=null)})),void 0===n&&(n=null),i.send(n)}))},v={"Content-Type":"application/x-www-form-urlencoded"};function R(e,t){!d.isUndefined(e)&&d.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var _,w={adapter:("undefined"!=typeof XMLHttpRequest?_=y:"undefined"!=typeof process&&(_=y),_),transformRequest:[function(e,t){return function(e,t){d.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(R(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)?(R(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};w.headers={common:{Accept:"application/json, text/plain, */*"}},d.forEach(["delete","get","head"],(function(e){w.headers[e]={}})),d.forEach(["post","put","patch"],(function(e){w.headers[e]=d.merge(v)}));var T=w;function C(){this.handlers=[]}C.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},C.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},C.prototype.forEach=function(e){d.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var O=C,A=function(e,t,r){return d.forEach(r,(function(r){e=r(e,t)})),e},N=function(e){return!(!e||!e.__CANCEL__)};function b(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var S=function(e){var t,r,n;return b(e),e.baseURL&&(n=e.url,!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n))&&(e.url=(t=e.baseURL,(r=e.url)?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t)),e.headers=e.headers||{},e.data=A(e.data,e.headers,e.transformRequest),e.headers=d.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),d.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||T.adapter)(e).then((function(t){return b(e),t.data=A(t.data,t.headers,e.transformResponse),t}),(function(t){return N(t)||(b(e),t&&t.response&&(t.response.data=A(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))};function L(e){this.defaults=e,this.interceptors={request:new O,response:new O}}L.prototype.request=function(e){"string"==typeof e&&(e=d.merge({url:arguments[0]},arguments[1])),(e=d.merge(T,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[S,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},d.forEach(["delete","get","head","options"],(function(e){L.prototype[e]=function(t,r){return this.request(d.merge(r||{},{method:e,url:t}))}})),d.forEach(["post","put","patch"],(function(e){L.prototype[e]=function(t,r,n){return this.request(d.merge(n||{},{method:e,url:t,data:r}))}}));var D=L;function I(e){this.message=e}I.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},I.prototype.__CANCEL__=!0;var U=I;function x(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new U(e),t(r.reason))}))}x.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},x.source=function(){var e;return{token:new x((function(t){e=t})),cancel:e}};var j=x;function P(e){var t=new D(e),r=a(D.prototype.request,t);return d.extend(r,D.prototype,t),d.extend(r,t),r}var q=P(T);q.Axios=D,q.create=function(e){return P(d.merge(T,e))},q.Cancel=U,q.CancelToken=j,q.isCancel=N,q.all=function(e){return Promise.all(e)},q.spread=function(e){return function(t){return e.apply(null,t)}};var B=q,F=q;B.default=F;var k=B;function H(e,t){return e(t={exports:{}},t.exports),t.exports}var M,V=["ETIMEDOUT","ECONNRESET","EADDRINUSE","ESOCKETTIMEDOUT","ECONNREFUSED","EPIPE"],G=["ENOTFOUND","ENETUNREACH","UNABLE_TO_GET_ISSUER_CERT","UNABLE_TO_GET_CRL","UNABLE_TO_DECRYPT_CERT_SIGNATURE","UNABLE_TO_DECRYPT_CRL_SIGNATURE","UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY","CERT_SIGNATURE_FAILURE","CRL_SIGNATURE_FAILURE","CERT_NOT_YET_VALID","CERT_HAS_EXPIRED","CRL_NOT_YET_VALID","CRL_HAS_EXPIRED","ERROR_IN_CERT_NOT_BEFORE_FIELD","ERROR_IN_CERT_NOT_AFTER_FIELD","ERROR_IN_CRL_LAST_UPDATE_FIELD","ERROR_IN_CRL_NEXT_UPDATE_FIELD","OUT_OF_MEM","DEPTH_ZERO_SELF_SIGNED_CERT","SELF_SIGNED_CERT_IN_CHAIN","UNABLE_TO_GET_ISSUER_CERT_LOCALLY","UNABLE_TO_VERIFY_LEAF_SIGNATURE","CERT_CHAIN_TOO_LONG","CERT_REVOKED","INVALID_CA","PATH_LENGTH_EXCEEDED","INVALID_PURPOSE","CERT_UNTRUSTED","CERT_REJECTED"],X=function(e){return!e||!e.code||(-1!==V.indexOf(e.code)||-1===G.indexOf(e.code))},Y=H((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isNetworkError=i,t.isRetryableError=u,t.isSafeRequestError=c,t.isIdempotentRequestError=f,t.isNetworkOrIdempotentRequestError=l,t.exponentialDelay=p,t.default=E;var r,n=(r=X)&&r.__esModule?r:{default:r};var o="axios-retry";function i(e){return!e.response&&Boolean(e.code)&&"ECONNABORTED"!==e.code&&(0,n.default)(e)}var a=["get","head","options"],s=a.concat(["put","delete"]);function u(e){return"ECONNABORTED"!==e.code&&(!e.response||e.response.status>=500&&e.response.status<=599)}function c(e){return!!e.config&&(u(e)&&-1!==a.indexOf(e.config.method))}function f(e){return!!e.config&&(u(e)&&-1!==s.indexOf(e.config.method))}function l(e){return i(e)||f(e)}function d(){return 0}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=100*Math.pow(2,e);return t+.2*t*Math.random()}function h(e){var t=e[o]||{};return t.retryCount=t.retryCount||0,e[o]=t,t}function E(e,t){e.interceptors.request.use((function(e){return h(e).lastRequestTime=Date.now(),e})),e.interceptors.response.use(null,(function(r){var n=r.config;if(!n)return Promise.reject(r);var i=function(e,t){return Object.assign({},t,e[o])}(n,t),a=i.retries,s=void 0===a?3:a,u=i.retryCondition,c=void 0===u?l:u,f=i.retryDelay,p=void 0===f?d:f,E=i.shouldResetTimeout,m=void 0!==E&&E,g=h(n);if(c(r)&&g.retryCount<s){g.retryCount++;var y=p(g.retryCount,r);if(function(e,t){e.defaults.agent===t.agent&&delete t.agent,e.defaults.httpAgent===t.httpAgent&&delete t.httpAgent,e.defaults.httpsAgent===t.httpsAgent&&delete t.httpsAgent}(e,n),!m&&n.timeout&&g.lastRequestTime){var v=Date.now()-g.lastRequestTime;n.timeout=Math.max(n.timeout-v-y,1)}return new Promise((function(t){return setTimeout((function(){return t(e(n))}),y)}))}return Promise.reject(r)}))}E.isNetworkError=i,E.isSafeRequestError=c,E.isIdempotentRequestError=f,E.isNetworkOrIdempotentRequestError=l,E.exponentialDelay=p,E.isRetryableError=u}));(M=Y)&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")&&M.default;Y.isNetworkError,Y.isRetryableError,Y.isSafeRequestError,Y.isIdempotentRequestError,Y.isNetworkOrIdempotentRequestError,Y.exponentialDelay;var z=Y.default,J=function(e){return"ECONNABORTED"!==e.code};function K(e){return function(t){return e?Object.keys(t).reduce((function(r,n){return function(e,t){var r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){if(i.value.toLowerCase()===t.toLowerCase())return!0}}catch(e){n=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}}(e,n)||(r[n]=t[n]),r}),{}):t}}var $=function(e){e.logger,e.filterHeadersInstance;return function(e){return e}},Z=function(e){e.serverRequestLogger,e.logger,e.filterHeadersInstance;return[function(e){return e},function(e){return Promise.reject(e)}]};for(var Q=H((function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}})),W=[],ee=0;ee<256;++ee)W[ee]=(ee+256).toString(16).substr(1);var te=function(e,t){var r=t||0,n=W;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")};var re=function(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||Q)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var i=0;i<16;++i)t[n+i]=o[i];return t||te(o)};function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ne(n,!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=k.CancelToken,ae=k.isCancel,se=["get","post","delete","patch","put"],ue=ae;return e.configureRequest=function(e){var t=e.defaultTimeout,r=e.retries,n=void 0===r?0:r,o=e.logger,a=e.serverRequestLogger,s=e.httpsAgent,u=e.retryDelay,c=e.retryCondition,f=e.client,l=e.getSid,d=e.headerLoggingExcludes,p=e.validateStatus,h=void 0===p?function(e){return e>=200&&e<300}:p,E=f.name,m=f.version,g=f.platform,y=void 0===g?"web":g,v=h,R=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.serverRequestLogger,n=t.httpsAgent,o=t.retries,a=t.retryDelay,s=t.retryCondition,u=void 0===s?J:s,c=t.logger,f=t.headerLoggingExcludes,l=k.create({httpsAgent:n}),d=K(f);return l.interceptors.request.use($({logger:c,filterHeadersInstance:d})),(e=l.interceptors.response).use.apply(e,i(Z({serverRequestLogger:r,logger:c,filterHeadersInstance:d}))),z(l,{retries:o,retryDelay:a,retryCondition:u}),l}({retries:n,logger:o,serverRequestLogger:a,httpsAgent:s,retryDelay:u,retryCondition:c,headerLoggingExcludes:d}),_=function(e){return function(r){var n=r.url,o=r.uuid,i=r.cid,a=r.params,s=r.maxRedirects,u=r.body,c=r.headers,f=void 0===c?{}:c,d=r.timeout,p=void 0===d?t:d,h=r.additionalLoggingParams,g=void 0===h?{}:h,_=r.cancelTokenExecutor,w=r.validateStatus,T=void 0===w?v:w;return function(e,t){l&&"function"==typeof l&&(e["asos-sid"]=l()),e["asos-cid"]=t||re(),e["asos-c-plat"]=y,e["asos-c-name"]=E,e["asos-c-ver"]=m}(f,i),R({method:e,headers:f,url:n,params:a,maxRedirects:s,data:u?JSON.stringify(u):void 0,timeout:p,asosConfig:oe({},g,{serverUuid:o}),cancelToken:_?new ie(_):void 0,validateStatus:T})}};return se.reduce((function(e,t){return e[t]=_(t),e}),{})},e.isCancelled=ue,e}({});
//# sourceMappingURL=browser.es5.6d488365.js.map