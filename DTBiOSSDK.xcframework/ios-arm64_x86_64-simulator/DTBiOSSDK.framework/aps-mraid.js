/*! @amzn/aps-mraid.js - v1.3.0 - 2022-10-14 20:19:45 */!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var o="1.3.0",r=e(),s=0,n={error:[],ready:[],sizeChange:[],stateChange:[],exposureChange:[],viewableChange:[]},i=function(e){switch(e){case"browser-test":return{postMessage:function(e){console.log(e)}};case"ios":return window.webkit.messageHandlers.amzn_bridge;case"android":return window.amzn_bridge;default:return null}}(r.deviceOS),t=!1,a=[],u=!1,c=!1,d=[[]],l=0,p=[];function f(e){a.push(e),t||(g(a[0]),t=!0)}function g(e){try{"android"===r.deviceOS?i.postMessage(JSON.stringify(e)):"ios"===r.deviceOS?i.postMessage(e):console.log("Posting parcel: ".concat(JSON.stringify(e))),a=a.filter(function(e,t){return 0!==t})}catch(e){return void h("Problem posting parcel to host","postParcel")}}function e(){return{version:"3.0",deviceOS:function(){var e=/(iphone|ipod|ipad|mac).*applewebkit.*/g.test(window.navigator.userAgent.toLowerCase()),t=/linux.*android.*/g.test(window.navigator.userAgent.toLowerCase());{if(e)return"ios";if(t)return"android"}return"browser-test"}(),supports:{sms:null,tel:null,calendar:null,storePicture:null,inlineVideo:null,vpaid:null,location:null},placementType:null,currentPosition:null,defaultPosition:null,currentAppOrientation:null,orientationProperties:{allowOrientationChange:!0,forceOrientation:"none"},state:"loading",expandProperties:{width:window.screen.width,height:window.screen.height,useCustomClose:!1,isModal:!0,setByAd:!1},maxSize:null,screenSize:null,resizeProperties:{width:window.screen.width,height:window.screen.height,offsetX:-1,offsetY:-1,customClosePosition:"top-right",allowOffscreen:!1,setByAd:!1},location:null,isViewable:!1}}function m(e,t,n){return{type:e,subtype:t,arguments:n}}function w(e,t){-1!==Object.keys(n).indexOf(e)?n[e].forEach(function(e){try{e.apply(void 0,I(t))}catch(e){console.error(e),window.mraidBridge.service.logMessage("Error event: ".concat(e))}}):h("".concat(e," is not a valid MRAID event"),"checkListeners")}function y(e,t,n){for(var o in t)n.hasOwnProperty(o)&&E(n[o])!==t[o]?h("Invalid data type '".concat(o,"': Must be '").concat(t[o],"'"),"validateAndAssign"):n.hasOwnProperty(o)&&E(n[o])===t[o]&&(!("expandProperties"===e||"resizeProperties"===e&&n.hasOwnProperty("allowOffscreen")&&!1===n.allowOffscreen)||"width"!==o&&"height"!==o?r[e][o]=n[o]:v(r[e],o,n[o]))}function v(e,t,n){var o=n;void 0!==r.maxSize[t]?(n>r.maxSize[t]&&(h("Size value of ".concat(n," exceeds maxSize value of ").concat(r.maxSize[t]),"validateSizeValues"),o=r.maxSize[t]),e[t]=o):h("Unable to set resize or expand size without maxSize set prior","validateSizeValues")}function b(e){return"aax.amazon-adsystem.com"===e?"aax-dtb-mobile-geo.amazon-adsystem.com":e}function h(e,t){if(window.mraidBridge.service.logMessage("Error event | type: ".concat(t,", message: ").concat(e)),window.mraidBridge.event.error(e),c){var n={lv:o,ts:Date.now(),_type:"apsLibraryError",e:{et:t,msg:e}};window.MRAID_ENV&&window.MRAID_ENV.amznAdInfo&&window.MRAID_ENV.amznAdInfo.bidID&&window.MRAID_ENV.amznAdInfo.aaxHost?A(n,window.MRAID_ENV.amznAdInfo.bidID,b(window.MRAID_ENV.amznAdInfo.aaxHost)):S(n),p.push(n)}}function P(r,i){return function(){var e,t,n;return e=l,t=r,o=arguments[0],n="string"==typeof o&&100<o.length?"".concat(o.substring(0,97),"..."):o,d[e].push({m:t,a:n,t:Date.now(),d:Date.now()-s}),i.apply(void 0,arguments);var o}}!function(){var e={getVersion:function(){return r.version},addEventListener:function(e,t){Array.isArray(n[e])?"function"==typeof t?n[e].push(t):h("Function was not provided for event listener","addEventListener"):h("".concat(e," is not a valid MRAID event"),"addEventListener")},removeEventListener:function(e,t){Array.isArray(n[e])&&(n[e]=void 0!==t?n[e].filter(function(e){return e!==t}):[])},open:function(e){void 0!==e?"string"==typeof e?f(m("mraid","open",{url:e})):h("Invalid argument type '".concat(E(e),"': Must be 'string'"),"open"):h("URL must be provided for 'open' command","open")},close:function(){f(m("mraid","close",{}))},unload:function(){f(m("mraid","unload",{}))},useCustomClose:function(e){void 0!==e?"boolean"==typeof e&&null!==e?(r.expandProperties.useCustomClose=e,f(m("mraid","useCustomClose",{state:r.expandProperties.useCustomClose}))):h("Invalid argument type '".concat(E(e),"': Must be 'boolean'"),"useCustomClose"):h("No argument passed into useCustomClose'","useCustomClose")},expand:function(e){void 0===e||"string"==typeof e?f(m("mraid","expand",{url:e,orientation:r.orientationProperties,position:r.expandProperties})):h("Invalid argument type '".concat(E(e),"': Must be 'string'"),"expand")},isViewable:function(){return r.isViewable},playVideo:function(){h("playVideo is not yet supported","playVideo")},resize:function(){r.resizeProperties.setByAd||h("setResizeProperties must be called with values set prior to resize","resize"),f(m("mraid","resize",r.resizeProperties))},storePicture:function(){h("storePicture is not yet supported","storePicture")},createCalendarEvent:function(){h("createCalendarEvent is not yet supported","createCalendarEvent")},getScreenSize:function(){return r.screenSize},getMaxSize:function(){return r.maxSize},supports:function(e){return r.supports[e]},getPlacementType:function(){return r.placementType},getOrientationProperties:function(){return r.orientationProperties},setOrientationProperties:function(e){if(void 0!==e)if("object"===E(e)&&null!==e){y("orientationProperties",{allowOrientationChange:"boolean",forceOrientation:"string"},e)}else h("Invalid argument type '".concat(E(e),"': Must be 'object'"),"setOrientationProperties");else h("No argument passed into setOrientationProperties'","setOrientationProperties")},getCurrentAppOrientation:function(){return r.currentAppOrientation},getCurrentPosition:function(){return r.currentPosition},getDefaultPosition:function(){return r.defaultPosition},getState:function(){return r.state},getExpandProperties:function(){return r.expandProperties},setExpandProperties:function(e){if(void 0!==e)if("object"===E(e)&&null!==e){y("expandProperties",{width:"number",height:"number",useCustomClose:"boolean",isModal:"boolean"},e),r.expandProperties.setByAd=!0}else h("Invalid argument type '".concat(E(e),"': Must be 'object'"),"setExpandProperties");else h("No argument passed into setExpandProperties","setExpandProperties")},getResizeProperties:function(){return r.resizeProperties},setResizeProperties:function(e){if(void 0!==e)if("object"===E(e)&&null!==e){y("resizeProperties",{width:"number",height:"number",offsetX:"number",offsetY:"number",customClosePosition:"string",allowOffscreen:"boolean"},e),r.resizeProperties.setByAd=!0}else h("Invalid argument type '".concat(E(e),"': Must be 'object'"),"setResizeProperties");else h("No argument passed into setResizeProperties","setResizeProperties")},getLocation:function(){return r.location}};for(var t in e)"function"==typeof e[t]&&(e[t]=P(t,e[t]));window.mraid=e}();var z=[];function x(){return"?cb="+Math.round(1e7*Math.random())}function A(e,t,n){C("https://".concat(n,"/x/px/").concat(t,"/").concat(M(e)).concat(x()))}function S(e){return C("https://aax-us-east.amazon-adsystem.com/x/px/p/PH/".concat(M(e)).concat(x()))}function M(e){e._tl="aps-mraid";var t=JSON.stringify(e);return t=t.replace(/\\.{1}/g,""),t=encodeURIComponent(t)}function C(e){(new Image).src=e,z.push(e)}function O(){c&&window.setTimeout(function(){!function(){0<d[l].length&&function(){var e={lv:o,ts:Date.now(),_type:"mraidMethods",methodsLog:d[l]};window.MRAID_ENV&&window.MRAID_ENV.amznAdInfo&&window.MRAID_ENV.amznAdInfo.bidID&&window.MRAID_ENV.amznAdInfo.aaxHost?A(e,window.MRAID_ENV.amznAdInfo.bidID,b(window.MRAID_ENV.amznAdInfo.aaxHost)):S(e);d.push([]),l++}();O()}()},5e3)}window.mraidBridge={service:{logMessage:function(e){var t=m("service","log",{message:e.toString()});"android"===r.deviceOS?i.postMessage(JSON.stringify(t)):"ios"===r.deviceOS?i.postMessage(t):console.log("LogMessage to host: ".concat(JSON.stringify(t)))},pushCommand:function(e){f(e)},postParcel:function(e){g(e)},acknowledgement:function(e){u&&this.logMessage("MRAID acknowledgement, ".concat(e)),t=!1,0<a.length&&(g(a[0]),t=!0)},debug:function(e){"string"!=typeof e||"enable"!==e&&"disable"!==e?h("debug takes a string argument of 'enable' or 'disable'","debug"):"enable"===e?(c=u=!0,O()):c=u=!1},mraidState:function(){var e={MRAID_ENV:window.MRAID_ENV,mraidCache:r,eventListeners:n,commandQueue:a,commandInFlight:t,debugMode:u,pixelSampling:c,methodsLog:d,errorsPixelLog:p,networkCalls:z};return console.log(e),this.logMessage(JSON.stringify(e)),e},reset:function(){r=e(),t=!1,a=[],d=[[]],l=0,p=[],z=[],Object.keys(n).forEach(function(e){n[e]=[]})}},event:{error:function(e,t){w("error",[e,t])},ready:function(){f(m("mraid","jsready",{})),s=Date.now(),w("ready",[])},sizeChange:function(e,t){w("sizeChange",[e,t])},stateChange:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"default",t=e.state||e;"string"==typeof t&&w("stateChange",[r.state=t])},exposureChange:function(e,t,n){w("exposureChange",[e,t,n])},viewableChange:function(e){w("viewableChange",[r.isViewable=e])}},property:{setCurrentPosition:function(e){r.currentPosition=e},setScreenSize:function(e){r.screenSize=e},setMaxSize:function(e){r.maxSize=e},setCurrentAppOrientation:function(e){r.currentAppOrientation=e},setSupports:function(e){r.supports=e},setPlacementType:function(e){r.placementType=e.type},setDefaultPosition:function(e){r.defaultPosition=e},setResizeProperties:function(e){r.resizeProperties=e},setLocation:function(e){r.location=e}}},function(e){try{var t=parseInt(e,10);if(!isNaN(t)){if(t<=0)return!1;if(100<=t)return!0;if(100*Math.random()<=t)return!0}return!1}catch(e){return!1}}(1)&&(c=!0,O())}()}]);
