define("devicetype",["$"],(function(e){var t=e.trim(e("html").data("platform").toLowerCase()),r=t?t.replace(/(^| )(\w)/g,(function(e){return e.toUpperCase()})):"";return{getDeviceType:function(){return r},getNormalisedDeviceType:function(){return t}}}));
//# sourceMappingURL=devicetype.7a0fe79c.js.map
