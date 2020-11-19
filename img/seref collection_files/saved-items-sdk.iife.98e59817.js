this.window=this.window||{},this.window.asos=this.window.asos||{},this.window.asos.customer=this.window.asos.customer||{},this.window.asos.customer.savedItemsSdk=function(t,e){"use strict";var r=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t};var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t};var o=function(t){if(Array.isArray(t))return t};var i=function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r};var c=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var a=function(t,e){return o(t)||i(t,e)||c()},u=function(t,e){return Object.entries(t).reduce(function(t,o){var i=a(o,2),c=i[0],u=i[1];return n({},t,r({},c,e(u)))},{})},s="asos.customer.savedItemsSdk",f={SORT_ORDER_DESCENDING:"dsc",SORT_ORDER_ASCENDING:"asc"},l={SORTBY_DATE:"date",SORTBY_DISCOUNT:"discount",SORTBY_PRICE:"price",SORTBY_BRAND:"brand",SORTBY_STOCK:"stock"},d={EXPAND_VARIANTS:"variants"},p=function(t){return Number.isInteger(t)&&t>=0},h=function(t,e,r,n,o){var i=[].concat(function(t,e){return[].concat(t>200?"maximum limit is ".concat(200):void 0).concat(e>9999?"maximum offset is ".concat(9999):void 0).filter(function(t){return void 0!==t})}(e,t)).concat(function(t){return Object.values(l).includes(t)?void 0:"sort should be one of ".concat(s,".sorts: ").concat(Object.keys(l).join(", "))}(r)).concat(function(t){return Object.values(f).includes(t)?void 0:"sortOrder should be one of ".concat(s,".sortOrders: ").concat(Object.keys(f).join(", "))}(n)).concat(function(t){return void 0===t||Object.values(d).includes(t)?void 0:"expand should be one of ".concat(s,".expands: ").concat(Object.keys(d).join(", "))}(o)).filter(function(t){return void 0!==t});if(i.length)throw new RangeError(i.join("\n"))},v=function(t){var e=t.offset,r=t.limit,n=t.sort,o=t.sortOrder,i=t.expand;!function(t){var e=Object.entries(t).reduce(function(t,e){var r=a(e,2),n=r[0],o=r[1];return p(o)||t.push(TypeError("".concat(n," should be a non-negative integer"))),t},[]);if(e.length)throw new TypeError(e.join("\n"))}({offset:e,limit:r}),h(e,r,n,o,i)};function y(t,e){return t(e={exports:{}},e.exports),e.exports}var g=y(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(n){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=r=function(t){return e(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},r(n)}t.exports=r}),m=function(t){if(void 0!==t&&(null===(e=t)||"object"!==g(e)||Object.getPrototypeOf(e)!==Object.prototype))return"requestOptions.additionalLoggingParams should be an object";var e},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.timeout,r=t.additionalLoggingParams,n=t.cancelTokenExecutor,o=function(t){var e=["timeout","additionalLoggingParams","cancelTokenExecutor"];return Object.keys(t).map(function(t){if(!e.includes(t))return"requestOptions.".concat(t," is invalid")})}(t).concat(function(t){if(void 0!==t&&!p(t))return"requestOptions.timeout should be a non-negative integer"}(e)).concat(m(r)).concat(function(t){if(!["function","undefined"].includes(g(t)))return"requestOptions.cancelTokenExecutor should be a function"}(n)).filter(function(t){return void 0!==t});if(o.length)throw new TypeError(o.join("\n"))};var b=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o};var O=function(t,e){if(null==t)return{};var r,n,o=b(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o},x=function(t){var e=t.storeCode,r=O(t,["storeCode"]);return n({store:e},r)},T=function(t){if(void 0===t)throw new TypeError("configuration.getAccessToken is required for this operation")},E=function(t){return p(t)&&t>0},k=function(t){return"item: ".concat(JSON.stringify(t)," - ")},S=function(t){var e=t.variantId,r=void 0===e?null:e,n=t.colourWayId,o=void 0===n?null:n,i=k(t),c=function(t,e){if(null===t&&null===e)return"either variantId or colourWayId is required"}(r,o);return c?"".concat(i).concat(c):(c=function(t,e){if(null!==t&&null!==e)return"only one of variantId or colourWayId should be supplied"}(r,o))?"".concat(i).concat(c):(c=function(t){if(null!==t&&!p(t))return"colourWayId should be a non-negative integer"}(o))?"".concat(i).concat(c):(c=function(t){if(null!==t&&!E(t))return"variantId should be a positive integer"}(r))?"".concat(i).concat(c):void 0},j=function(t){var e=Array.isArray(t)?0===t.length?["items are required"]:t.map(function(t){return function(t){var e=t.productId;if(!E(e))return"".concat(k(t),"productId is required, as a positive integer")}(t)}).concat(t.map(function(t){return S(t)})).filter(function(t){return void 0!==t}):["items should be an array"];if(e.length)throw new TypeError(e.join("\n"))},I=function(t){var e=t.api,r=t.context,n=t.configuration,o=(n=void 0===n?{}:n).getAccessToken,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=i.items,a=i.requestOptions;return T(o),j(c),w(a),e.post({path:"me/lists/default/items",body:{items:c},queryParams:x(r),requestOptions:a})},A=function(t,e){return"string"==typeof t&&t.match(/^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/)?void 0:"".concat(e," (").concat(t,") should be a valid guid")},q=function(t){var e=A(t,"shareId");if(e)throw new TypeError(e)},R={getItems:function(t){var e=t.api,r=t.context,o=t.configuration,i=(o=void 0===o?{}:o).getAccessToken,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=c.offset,u=void 0===a?0:a,s=c.limit,d=void 0===s?30:s,p=c.sort,h=void 0===p?l.SORTBY_DATE:p,y=c.sortOrder,g=void 0===y?f.SORT_ORDER_DESCENDING:y,m=c.expand,b=c.requestOptions;return T(i),v({offset:u,limit:d,sort:h,sortOrder:g,expand:m}),w(b),e.get({path:"me/lists/default/items",queryParams:n({offset:u,limit:d,sort:h,sortOrder:g},m?{expand:m}:{},x(r)),requestOptions:b})},addItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.item,n=e.requestOptions;return function(){if(null===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null))throw new TypeError("item is required")}(r),I(t,{items:[r],requestOptions:n})},addItems:I,removeItem:function(t){var e=t.api,r=t.configuration,n=(r=void 0===r?{}:r).getAccessToken,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.itemId,c=o.requestOptions;return T(n),function(t){var e=A(t,"itemId");if(e)throw new TypeError(e)}(i),w(c),e.delete({path:"".concat("me/lists/default/items","/").concat(i),requestOptions:c})},removeItems:function(t){var e=t.api,r=t.configuration,n=(r=void 0===r?{}:r).getAccessToken,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.itemIds,c=o.requestOptions;return T(n),function(t){var e=Array.isArray(t)?0===t.length?["itemIds are required"]:t.map(function(t){return A(t,"itemId")}).filter(function(t){return void 0!==t}):["itemIds should be an array"];if(e.length)throw new TypeError(e.join("\n"));if(t.join(",").length>500)throw new RangeError("itemIds limited to 500 characters when comma separated")}(i),w(c),e.delete({path:"me/lists/default/items",queryParams:{items:i.join(",")},requestOptions:c})},updateItem:function(t){var e=t.api,r=t.context,n=t.configuration,o=(n=void 0===n?{}:n).getAccessToken,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=i.item,a=(c=void 0===c?{}:c).itemId,u=c.variantId,s=i.requestOptions;return T(o),function(t){var e=t.itemId,r=t.variantId,n=[A(e,"itemId"),E(r)?void 0:"variantId (".concat(r,") should be a positive integer")].filter(function(t){return void 0!==t});if(n.length)throw new TypeError(n.join(", "))}({itemId:a,variantId:u}),w(s),e.patch({path:"".concat("me/lists/default/items","/").concat(a),body:{variantId:u},queryParams:x(r),requestOptions:s})},getSharedSummary:function(t){var e=t.api,r=t.context,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.shareId,c=o.requestOptions;return q(i),w(c),e.get({isAuthRequired:!1,path:"".concat("shared/").concat(i),queryParams:n({},x(r)),requestOptions:c})},getSharedItems:function(t){var e=t.api,r=t.context,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.shareId,c=o.offset,a=void 0===c?0:c,u=o.limit,s=void 0===u?30:u,d=o.sort,p=void 0===d?l.SORTBY_DATE:d,h=o.sortOrder,y=void 0===h?f.SORT_ORDER_DESCENDING:h,g=o.expand,m=o.requestOptions;return v({expand:g,offset:a,limit:s,sort:p,sortOrder:y}),q(i),w(m),e.get({path:"".concat("shared/").concat(i,"/items"),isAuthRequired:!1,queryParams:n({offset:a,limit:s,sort:p,sortOrder:y},g?{expand:g}:{},x(r)),requestOptions:m})}},_=y(function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=E(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",d="executing",p="completed",h={};function v(){}function y(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(I([])));b&&b!==r&&n.call(b,i)&&(m=b);var O=g.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,c){var a=s(t[r],t,o);if("throw"!==a.type){var u=a.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,c)},function(t){e("throw",t,i,c)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,c)})}c(a.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=O.constructor=g,g.constructor=y,g[a]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(T.prototype),T.prototype[c]=function(){return this},t.AsyncIterator=T,t.async=function(e,r,n,o){var i=new T(u(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(O),O[a]="Generator",O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}});function L(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}var P=function(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){L(i,n,o,c,a,"next",t)}function a(t){L(i,n,o,c,a,"throw",t)}c(void 0)})}};var D=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var N=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var C=function(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?N(t):e},G=y(function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(r)}t.exports=e}),F=y(function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e});var Y=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)};var B=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")},W=y(function(t){function e(r,n,o){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=e=function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&F(o,r.prototype),o}:t.exports=e=Reflect.construct,e.apply(null,arguments)}t.exports=e}),z=function(t){function e(t){var r,n;D(this,e);for(var o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];n=C(this,(r=G(e)).call.apply(r,[this,t].concat(i)));var a=t&&t.message?t.message:"";return n.message=a,n.name="GetAccessTokenError",Error.captureStackTrace&&Error.captureStackTrace(N(n),e),n}return Y(e,t),e}(y(function(t){function e(r){var n="function"==typeof Map?new Map:void 0;return t.exports=e=function(t){if(null===t||!B(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return W(t,arguments,G(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),F(e,t)},e(r)}t.exports=e})(Error)),M=function(t){function e(t){var r,n;D(this,e);for(var o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];return(n=C(this,(r=G(e)).call.apply(r,[this,t].concat(i)))).name="GetAccessTokenTimeoutError",n}return Y(e,z),e}(),J=null,K=function(){var t=P(_.mark(function t(e){var r,n,o,i;return _.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.getAccessToken,n=e.getAccessTokenTimeout,o=void 0===n?8e3:n,t.prev=1,J||(J=P(_.mark(function t(){return _.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r();case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),new z(new Error(t.t0));case 9:case"end":return t.stop()}},t,null,[[0,6]])}))()),t.next=5,Promise.race([new Promise(function(t,e){i=setTimeout(function(){e(new M(new Error("timeout of ".concat(o,"ms met"))))},o)}),J]);case 5:return t.abrupt("return",t.sent);case 6:return t.prev=6,clearTimeout(i),J=null,t.finish(6);case 10:case"end":return t.stop()}},t,null,[[1,,6,10]])}));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=P(_.mark(function t(e){var r,n;return _.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.getAccessToken,n=e.getAccessTokenTimeout,t.t0="bearer ",t.next=4,K({getAccessToken:r,getAccessTokenTimeout:n});case 4:return t.t1=t.sent,t.t2=t.t0.concat.call(t.t0,t.t1),t.abrupt("return",{Authorization:t.t2});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),V={"Content-Type":"application/json"},X=function(t){var r=t.configuration,o=r.getAccessToken,i=r.getAccessTokenTimeout,c=r.apiOrigin,a=r.interactionCallback,s=void 0===a?function(){}:a,f=r.logger,l=r.serverRequestLogger,d=r.retries,p=r.retryDelay,h=function(t){var e=t.apiOrigin,r=void 0===e?window.location.origin:e;return function(t){return"".concat(r).concat("/api").concat("/customer/savedlists/v3/customers/").concat(t)}}({apiOrigin:c}),v=function(t){var r=t.logger,n=t.serverRequestLogger,o=t.retries,i=t.retryDelay;return e.configureRequest({isServer:!1,logger:r,serverRequestLogger:n,defaultTimeout:1e4,retries:o,retryDelay:i,client:{name:"asos-web-saved-items-sdk",version:"4.6.0"}})}({logger:f,serverRequestLogger:l,retries:d,retryDelay:p}),y=v.get,g=v.post,m=v.delete,w=v.patch;return u({get:y,post:g,delete:m,patch:w},function(t){return function(){var e=P(_.mark(function e(r){var c,a,u,f,l,d,p;return _.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=r.path,a=r.queryParams,u=r.body,f=r.requestOptions,l=r.isAuthRequired,d=void 0===l||l,e.t0=t,e.t1=n,e.t2=h(c),e.t3=a,e.t4=u,e.t5=n,e.t6={},e.t7=V,!d){e.next=15;break}return e.next=12,U({getAccessToken:o,getAccessTokenTimeout:i});case 12:e.t8=e.sent,e.next=16;break;case 15:e.t8={};case 16:return e.t9=e.t8,e.t10=(0,e.t5)(e.t6,e.t7,e.t9),e.t11={url:e.t2,params:e.t3,body:e.t4,headers:e.t10},e.t12=f,e.t13=(0,e.t1)(e.t11,e.t12),e.next=23,(0,e.t0)(e.t13);case 23:return p=e.sent,s(),e.abrupt("return",p);case 26:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()})},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.getAccessToken,r=t.getAccessTokenTimeout,n=t.apiOrigin,o=t.interactionCallback,i=(t.logger,t.serverRequestLogger,t.retries),c=t.retryDelay,a=[].concat(function(t){if(!["function","undefined"].includes(g(t)))return"configuration.getAccessToken should be a function if defined"}(e)).concat(function(t){if(void 0!==t&&!E(t))return"configuration.getAccessTokenTimeout should be a positive integer if defined"}(r)).concat(function(t){if(!["string","undefined"].includes(g(t)))return"configuration.apiOrigin should be a string if defined"}(n)).concat(function(t){if(!["function","undefined"].includes(g(t)))return"configuration.interactionCallback should be a function if defined"}(o)).concat(void 0).concat(void 0).concat(function(t){if(void 0!==t&&!E(t))return"configuration.retries should be a positive integer if defined"}(i)).concat(function(t){if(!["function","undefined"].includes(g(t)))return"configuration.retryDelay should be a function if defined"}(c)).filter(function(t){return void 0!==t});if(a.length)throw new TypeError(a.join("\n"))},H=function(t){var e=t.context,r=t.configuration;!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=["storeCode","currency","language","sizeSchema","keyStoreDataversion"].map(function(e){return"string"==typeof t[e]&&t[e].length?void 0:"context.".concat(e," is required, and should be a non-empty string")}).filter(function(t){return void 0!==t});if(e.length)throw new TypeError(e.join("\n"))}(e),$(r)},Q=e.isCancelled;return t.GetAccessTokenError=z,t.GetAccessTokenTimeoutError=M,t.expands=d,t.isRequestCancelled=Q,t.sdk=function(t){H(t);var e=t.context,r=t.configuration,o=X({configuration:r}),i=u(R,function(t){return t.bind(t,{api:o,context:e,configuration:r})});return n({version:"4.6.0"},i)},t.sortOrders=f,t.sorts=l,t}({},window.asos.webRequest);
//# sourceMappingURL=saved-items-sdk.iife.98e59817.js.map