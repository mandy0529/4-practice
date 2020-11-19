/*! v3.1.2, license file: es6-promise.LICENSE.txt */
!function(){"use strict";(function(){function t(t){return"function"==typeof t}var e,r,n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=function(t,e){y[o]=t,y[o+1]=e,2===(o+=2)&&(r?r(m):h())};var s="undefined"!=typeof window?window:void 0,u=s||{},c=u.MutationObserver||u.WebKitMutationObserver,a="undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){return function(){setTimeout(m,1)}}var h,v,p,_,d,y=new Array(1e3);function m(){for(var t=0;t<o;t+=2){(0,y[t])(y[t+1]),y[t]=void 0,y[t+1]=void 0}o=0}a?h=function(){process.nextTick(m)}:c?(p=0,_=new c(m),d=document.createTextNode(""),_.observe(d,{characterData:!0}),h=function(){d.data=p=++p%2}):f?((v=new MessageChannel).port1.onmessage=m,h=function(){v.port2.postMessage(0)}):h=void 0===s&&"function"==typeof require?function(){try{var t=require("vertx");return e=t.runOnLoop||t.runOnContext,function(){e(m)}}catch(t){return l()}}():l();var w=function(t,e){var r=this,n=r._state;if(n===A&&!t||n===E&&!e)return this;var o=new this.constructor(g),s=r._result;if(n){var u=arguments[n-1];i((function(){F(n,o,u,s)}))}else O(r,o,t,e);return o};var b=function(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(g);return P(e,t),e};function g(){}var A=1,E=2,j=new k;function S(t){try{return t.then}catch(t){return j.error=t,j}}function T(e,r,n){r.constructor===e.constructor&&n===w&&constructor.resolve===b?function(t,e){e._state===A?C(t,e._result):e._state===E?M(t,e._result):O(e,void 0,(function(e){P(t,e)}),(function(e){M(t,e)}))}(e,r):n===j?M(e,j.error):void 0===n?C(e,r):t(n)?function(t,e,r){i((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?P(t,r):C(t,r))}),(function(e){n||(n=!0,M(t,e))}),t._label);!n&&o&&(n=!0,M(t,o))}),t)}(e,r,n):C(e,r)}function P(t,e){var r;t===e?M(t,new TypeError("You cannot resolve a promise with itself")):"function"==typeof(r=e)||"object"==typeof r&&null!==r?T(t,e,S(e)):C(t,e)}function x(t){t._onerror&&t._onerror(t._result),Y(t)}function C(t,e){void 0===t._state&&(t._result=e,t._state=A,0!==t._subscribers.length&&i(Y,t))}function M(t,e){void 0===t._state&&(t._state=E,t._result=e,i(x,t))}function O(t,e,r,n){var o=t._subscribers,s=o.length;t._onerror=null,o[s]=e,o[s+A]=r,o[s+E]=n,0===s&&t._state&&i(Y,t)}function Y(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n,o,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?F(r,n,o,i):o(i);t._subscribers.length=0}}function k(){this.error=null}var q=new k;function F(e,r,n,o){var i,s,u,c,a=t(n);if(a){if((i=function(t,e){try{return t(e)}catch(t){return q.error=t,q}}(n,o))===q?(c=!0,s=i.error,i=null):u=!0,r===i)return void M(r,new TypeError("A promises callback cannot return that same promise."))}else i=o,u=!0;void 0!==r._state||(a&&u?P(r,i):c?M(r,s):e===A?C(r,i):e===E&&M(r,i))}var D=function(t){return new z(this,t).promise};var K=function(t){var e=new this(g);if(!n(t))return M(e,new TypeError("You must pass an array to race.")),e;var r=t.length;function o(t){P(e,t)}function i(t){M(e,t)}for(var s=0;void 0===e._state&&s<r;s++)O(this.resolve(t[s]),void 0,o,i);return e};var L=function(t){var e=new this(g);return M(e,t),e},N=0;var U=W;function W(t){this._id=N++,this._state=void 0,this._result=void 0,this._subscribers=[],g!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof W?function(t,e){try{e((function(e){P(t,e)}),(function(e){M(t,e)}))}catch(e){M(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}W.all=D,W.race=K,W.resolve=b,W.reject=L,W._setScheduler=function(t){r=t},W._setAsap=function(t){i=t},W._asap=i,W.prototype={constructor:W,then:w,catch:function(t){return this.then(null,t)}};var z=B;function B(t,e){this._instanceConstructor=t,this.promise=new t(g),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?C(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&C(this.promise,this._result))):M(this.promise,this._validationError())}B.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},B.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;void 0===this._state&&r<t;r++)this._eachEntry(e[r],r)},B.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===b){var o=S(t);if(o===w&&void 0!==t._state)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===U){var i=new r(g);T(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r((function(e){e(t)})),e)}else this._willSettleAt(n(t),e)},B.prototype._settledAt=function(t,e,r){var n=this.promise;void 0===n._state&&(this._remaining--,t===E?M(n,r):this._result[e]=r),0===this._remaining&&C(n,this._result)},B.prototype._willSettleAt=function(t,e){var r=this;O(t,void 0,(function(t){r._settledAt(A,e,t)}),(function(t){r._settledAt(E,e,t)}))};var G=function(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;e&&"[object Promise]"===Object.prototype.toString.call(e.resolve())&&!e.cast||(t.Promise=U)},H={Promise:U,polyfill:G};"function"==typeof define&&define.amd?define((function(){return H})):"undefined"!=typeof module&&module.exports?module.exports=H:void 0!==this&&(this.ES6Promise=H),G()}).call(window)}();
//# sourceMappingURL=es6-promise.81449df0.js.map