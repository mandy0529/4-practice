define("mediator",["$"],(function(n){var r,e=n({}),t=n({});function i(n){return n.replace(/\./g,"~")}return{addHandler:function(n,r){var o=function(n){return function(){var r=Array.prototype.slice.call(arguments,0);n.apply(this,r)}}(r),a=i(n);return e.on(a,o),t.trigger(a),o},hasHandler:function(n){return function(){var n=e[0];if(void 0===r)for(var t in n)if(/jQuery/.test(t)&&n.hasOwnProperty(t)){r=t;break}return n[r]&&n[r].events?n[r].events:{}}().hasOwnProperty(i(n))},publish:function(n,r){e.trigger(i(n),r)},removeHandler:function(n,r){r&&e.off(i(n),r)},onHandlerRegistered:function(n,r){t.one(i(n),r)}}}));
//# sourceMappingURL=mediator.bccc20e0.js.map
