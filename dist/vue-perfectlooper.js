(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuePerfectlooper=t():e.VuePerfectlooper=t()})(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://admiralpotato.github.io/vue-perfectlooper/",t(t.s=1)}([function(e,t){e.exports=function(e,t,r,o,n){var a,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,i=e.default);var l="function"==typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),o&&(l._scopeId=o);var c;if(n?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=c):r&&(c=r),c){var d=l.functional,u=d?l.render:l.beforeCreate;d?l.render=function(e,t){return c.call(t),u(e,t)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:a,exports:i,options:l}}},function(e,t,r){e.exports=r(2)},function(e,t,r){function o(e){r(3)}var n=r(0),a=r(8),i=r(18),s=o,l=n(a,i,s,null,null);e.exports=l.exports},function(e,t,r){var o=r(4);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(6)("c9d84b8e",o,!0)},function(e,t,r){t=e.exports=r(5)(!1),t.push([e.i,'.perfectlooper,.perfectlooper *{padding:0;border:0;vertical-align:inherit;font-size:inherit;line-height:inherit;font-weight:inherit;font-style:inherit;font-family:inherit;text-align:inherit;text-decoration:inherit;color:inherit;background-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;user-drag:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline-color:#9f0}.perfectlooper.ios,.perfectlooper.ios *{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none}.perfectlooper{display:block;position:relative;background-color:#000;font-size:1rem;line-height:1.5rem;font-weight:400;font-style:normal;vertical-align:top;font-family:Exo\\ 2,sans-serif;text-align:left;text-decoration:none;color:#ccc}.perfectlooper.ios{overflow:hidden;-ms-touch-action:manipulation;touch-action:manipulation}.perfectlooper .overlay,.perfectlooper canvas,.perfectlooper img{display:block;position:absolute;width:100%;height:100%}.perfectlooper.fullscreen{max-width:177.77777777777777vmin;height:100%;width:100%}.perfectlooper.hideCursor{cursor:none}.perfectlooper-control,.perfectlooper .overlay,.perfectlooper canvas{-webkit-transform:translateZ(0);transform:translateZ(0)}.perfectlooper .aspectEnforcer{position:relative;height:0;padding-bottom:56.25%;width:100%}.perfectlooper.fullscreen .aspectEnforcer{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);top:50%}.perfectlooper .statusMessage{position:absolute;bottom:3rem;left:0;padding:.5rem 1rem;background-color:rgba(0,0,0,.5);border-radius:0 1rem 0 0}.perfectlooper.ios .statusMessage{-webkit-transition:all .5s;transition:all .5s}.perfectlooper.iosDangerZone .statusMessage{bottom:6rem}.perfectlooper .statusMessage div{height:1.5rem;line-height:1.5rem;font-size:1rem}.perfectlooper .overlay .overlay-play-icon{display:block;position:absolute;z-index:1;top:0;bottom:0;left:0;right:0;height:50%;min-height:6rem;width:auto;margin:auto;border-radius:100%}.perfectlooper svg{display:block;color:#9f0}.overlay:active .overlay-play-icon,.perfectlooper button:active svg{color:#ff0}.overlay-play-icon .stroke{stroke:rgba(0,0,0,.5);stroke-width:2px;vector-effect:non-scaling-stroke}.overlay-play-icon .fade{opacity:.5}.perfectlooper_fade-enter-active,.perfectlooper_fade-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.perfectlooper_fade-enter,.perfectlooper_fade-leave-to{opacity:0}.perfectlooper-control{position:absolute;z-index:10;bottom:0;width:100%;opacity:1;-webkit-transition:all .5s;transition:all .5s}.perfectlooper.fullscreen .perfectlooper-control{-webkit-box-shadow:0 4px 0 0 rgba(0,0,0,.75);box-shadow:0 4px 0 0 rgba(0,0,0,.75)}.perfectlooper-control.hidden{opacity:0}.perfectlooper.iosDangerZone .perfectlooper-control{bottom:3rem}.perfectlooper.ios .perfectlooper-control:after{position:absolute;display:block;bottom:-3rem;height:3rem;line-height:3rem;width:100%;content:"iOS Safari interactivity DangerZone\\2122";color:hsla(0,0%,100%,.5);text-align:center;background-color:rgba(0,0,0,.35);opacity:0;-webkit-transition:all .5s;transition:all .5s}.perfectlooper.ios.iosDangerZone .perfectlooper-control:after{opacity:1}.perfectlooper-control .background{fill:#000;opacity:.75}.perfectlooper-control button{position:absolute;height:2.75rem;width:2.75rem;margin:.125rem;bottom:0;cursor:pointer}.perfectlooper-control .step-prev{left:0}.perfectlooper-control .playToggle{left:3rem}.perfectlooper-control .step-next{left:6rem}.perfectlooper-control .fullscreenToggle{right:0}.perfectlooper-control .fullscreenBackground{fill:#000;opacity:.25}.perfectlooper-control .fill{fill:#9f0}.perfectlooper-control .stroke{fill:none;stroke-linecap:round;stroke-miterlimit:10}.perfectlooper-control .stroke.screen-line{stroke-width:3px}.perfectlooper-control .stroke.loading{stroke-width:4px}.perfectlooper-control .playhead,.perfectlooper-control .progressLines{cursor:pointer}.perfectlooper-control .stroke.loaded,.perfectlooper-control .stroke.total{stroke:#666;stroke-width:8px;opacity:.5}.perfectlooper-control .stroke.loaded{stroke:#999}.perfectlooper-control .stroke.scaled{stroke:#9f0;stroke-width:4px}.perfectlooper-control .playhead .back{stroke:#666;stroke-width:16px;opacity:.6}.perfectlooper-control .playhead .front{stroke:#ff0;stroke-width:4px}@-webkit-keyframes rotating{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes rotating{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.perfectlooper-control .rotating{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}',""])},function(e,t){function r(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var a=o(n);return[r].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([a]).join("\n")}return[r].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=r(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(o[a]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){function o(e){for(var t=0;t<e.length;t++){var r=e[t],o=d[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(a(r.parts[n]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{for(var i=[],n=0;n<r.parts.length;n++)i.push(a(r.parts[n]));d[r.id]={id:r.id,refs:1,parts:i}}}}function n(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function a(e){var t,r,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(m){var a=p++;o=f||(f=n()),t=i.bind(null,o,a,!1),r=i.bind(null,o,a,!0)}else o=n(),t=s.bind(null,o),r=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else r()}}function i(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(7),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var n=c(e,t);return o(n),function(t){for(var r=[],a=0;a<n.length;a++){var i=n[a],s=d[i.id];s.refs--,r.push(s)}t?(n=c(e,t),o(n)):n=[];for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],o={},n=0;n<t.length;n++){var a=t[n],i=a[0],s=a[1],l=a[2],c=a[3],d={id:e+":"+n,css:s,media:l,sourceMap:c};o[i]?o[i].parts.push(d):r.push(o[i]={id:i,parts:[d]})}return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){var t=this;t.decodedFrameBuffer=e,t.frameCount=t.decodedFrameBuffer.frameCount,t.framesLoaded=0};o.prototype={maxFailures:10,startLoad:function(e){var t=this;t.decodedFrameBuffer.handleDecoderLoadStart(),e.forEach(function(e,r){var o=0;(function n(){var a=new Image;a.addEventListener("load",function(){t.framesLoaded+=1,requestAnimationFrame(function(){t.decodedFrameBuffer.handleDecoderFrame(a,r)})}),a.addEventListener("error",function(){o++<t.maxFailures&&setTimeout(n,100)}),a.src=e})()})}};var n=o,a=function(e,t,r,o){var n=this;n.ui=r,n.canvas=o,n.context=o.getContext("2d"),n.shouldPlay=!1,n.scaledCanvasList=[],n.lastDisplayedImage=null,n.lastDisplayedIndex=0,n.scaledFrameCount=0,n.scaled=0,n.ready=!1,n.playOffset=0,n.prevFrame=0,n.sourceBuffer=s[e]||new l(e,t),n.frameCount=t.length,n.duration=n.frameCount/n.fps,n.sourceBuffer.addCanvasLooper(n),n.renderLoop=function(e){n.shouldPlay&&(requestAnimationFrame(n.renderLoop),n.ready&&n.play(e))}};a.prototype={fps:24,die:function(){var e=this;e.sourceBuffer.removeCanvasLooper(this),e.scaledCanvasList.forEach(function(e){e.width=0,e.height=0}),e.scaledCanvasList=[],e.shouldPlay=!1,e.ui.looperEvent({eventAction:"unload"})},setPlay:function(e){var t=this;t.shouldPlay=e,t.sourceBuffer.load(),t.updateUI(),e&&requestAnimationFrame(function(e){t.lastTimeSample=e,t.renderLoop(e)})},play:function(e){var t=this;t.offsetTime((e-(t.lastTimeSample||0))/1e3/t.duration),t.setFrameByTime(),t.lastTimeSample=e},offsetTime:function(e){this.setTime(this.playOffset+e)},setTime:function(e){this.playOffset=this.rangeBind(e,1)},rangeBind:function(e,t){return-1===Math.sign(e)?t+e%t:e%t},step:function(e){var t=this,r=t.rangeBind(t.prevFrame+e,t.frameCount);t.offsetTime(1/t.frameCount*e),t.setFrameByIndex(r)},setFrameByTime:function(){var e=this,t=Math.floor(e.playOffset*e.frameCount);t!==e.prevFrame&&e.setFrameByIndex(t)},setFrameByIndex:function(e){var t=this;t.lastDisplayedImage=t.getScaledCanvasByFrameIndex(e),t.context.drawImage(t.lastDisplayedImage,0,0),t.prevFrame=e,t.ui.looperStatusUpdate({playOffset:e/(t.frameCount-1)})},getScaledCanvasByFrameIndex:function(e){var t=this,r=t.scaledCanvasList,o=r[e]||document.createElement("canvas");if(!r[e]||o.width!==t.width||o.height!==t.height){var n=t.sourceBuffer.imageList[e],a=o.getContext("2d");o.width=t.width,o.height=t.height,a.imageSmoothingQuality="high",a.drawImage(n,0,0,t.width,t.height),r[e]||(r[e]=o)}return o},sizeWindow:function(e,t){var r=this;r.width=e,r.height=t,r.scaledFrameCount=0,r.scaled=0,r.ready=!1,r.updateUI()},scaleAllFramesAndReady:function(){var e=this,t=e.scaledFrameCount++;t||e.ui.looperEvent({eventAction:"scale-start",eventValue:e.width}),e.context.drawImage(e.getScaledCanvasByFrameIndex(t),0,0),e.scaled=e.scaledFrameCount/e.frameCount,setTimeout(function(){var t=void 0;e.scaledFrameCount===e.frameCount&&(e.ready=!0,t={eventAction:"scale-finish",eventValue:e.width}),e.updateUI(t)},0)},updateUI:function(e){var t=this,r=t.sourceBuffer,o=r.status,n=t.whichFrameShouldBeDisplayedOnUpdate();r.ready&&!t.ready&&(t.scaledFrameCount&&(o="Scaled "+t.scaledFrameCount+"/"+r.frameCount+" frames"),t.shouldPlay&&t.scaleAllFramesAndReady()),t.ready&&(o="Ready"),null!==n&&(t.lastDisplayedImage=t.getScaledCanvasByFrameIndex(n)),t.lastDisplayedImage&&t.context.drawImage(t.lastDisplayedImage,0,0),e&&t.ui.looperEvent(e),t.ui.looperStatusUpdate({statusMessage:o,loaded:r.loaded,scaled:t.scaled,ready:t.ready})},whichFrameShouldBeDisplayedOnUpdate:function(){var e=this,t=e.sourceBuffer,r=t.lastStoredFrameIndex;return t.ready&&(r=!e.shouldPlay||e.ready?e.prevFrame:Math.max(0,e.scaledFrameCount-1)),r}};var i=function(e,t){var r=e.indexOf(t);return-1!==r&&e.splice(r,1),e},s={},l=function(e,t){var r=this;r.pathList=t,r.frameCount=t.length,r.started=!1,r.totalSize=0,r.loaded=0,r.ready=!1,r.status="Not loaded",r.imageList=[],r.perfectlooperList=[],r.framesLoaded=0,r.lastStoredFrameIndex=null,r.decoder=new n(r),s[e]=r};l.prototype={addCanvasLooper:function(e){this.perfectlooperList.push(e),this.updateCanvasLoopers()},removeCanvasLooper:function(e){i(this.perfectlooperList,e)},updateCanvasLoopers:function(e){this.perfectlooperList.forEach(function(t){t.updateUI(e)})},load:function(){var e=this;if(!e.started){e.status="Loading",e.started=!0,e.decoder.startLoad(e.pathList);var t={eventAction:"load-start"};this.updateCanvasLoopers(t)}},handleDecoderLoadStart:function(){this.status="Loading started",this.updateCanvasLoopers()},handleDecoderFrame:function(e,t){var r=this,o=void 0;r.framesLoaded+=1,r.imageList[t]=e,r.loaded=r.framesLoaded/r.frameCount,r.lastStoredFrameIndex=t,r.status="Loaded "+r.framesLoaded+" / "+r.frameCount+" frames",1===r.loaded&&(r.status="All frames Loaded",r.ready=!0,r.decoder=null,o={eventAction:"load-finish"}),this.updateCanvasLoopers(o)}};var c=a,d=r(9),u=r.n(d);t.default={components:{PerfectlooperControl:u.a},props:{id:{type:String,required:!0},poster:{type:String,required:!1},src:{type:[String,Array],required:!1},frames:{type:[Number,String],required:!1},startIndex:{type:[Number,String],required:!1,default:1},sequenceTemplate:{type:String,default:"0000"},prefix:{type:String,default:""},suffix:{type:String,default:".jpg"}},data:function(){return{width:0,height:0,cssWidth:0,started:!1,playing:!1,isFullscreen:!1,activityHalted:!0,loaded:0,scaled:0,playOffset:0,ready:!1,statusMessage:"",isIOS:!1,isIOSWarnNeeded:!1}},created:function(){if("string"==typeof this.src){var e=parseInt(this.frames,10),t=parseInt(this.startIndex,10);if(!(e>0))throw new Error("vue-perfectlooper: If you specify the 'src' prop as a String, you -must- provide a greater than zero 'frames' prop.\n\t\t\t\t\tInputs given; src: "+this.src+" - frames: "+this.frames);var r="/"!==this.src[this.src.length-1]?this.src+"/":this.src;this.pathList=[];for(var o=0;o<e;o++){var n=(o+t).toString();this.pathList.push(r+this.prefix+(this.sequenceTemplate+n).substring(n.length)+this.suffix)}}else this.src instanceof Array&&(this.pathList=this.src);if(!this.pathList)throw new Error("vue-perfectlooper: No valid combinations of paths provided. Please supply one of the following combinations:\n\t{src: String, frames: Number}\n\t{src: Array of Strings}");if(!this.poster)throw new Error("vue-perfectlooper: No valid combinations of poster options provided. Please add a valid poster image path:\n\t{poster: String}")},mounted:function(){var e=this;if(e.canvasLooper=new c(this.id,this.pathList,e,e.$refs.canvas),e.resizeWindowEventHandler(),!(void 0!==e.$el.requestFullscreen)){var t=document.createElement("script");t.id="mqGenieScript",document.getElementById(t.id)||(t.src="https://unpkg.com/fullscreen-api-polyfill",document.body.appendChild(t))}},beforeMount:function(){var e=this;e.resizeWindowEventHandler=function(){var t=window.devicePixelRatio||1,r=e.$refs.canvas,o=r.clientWidth*t,n=r.clientHeight*t,a=!o||!n,i=e.width!==o||e.height!==n,s=document.fullscreenElement===e.$el,l=e.isFullscreen!==s;e.cssWidth=r.clientWidth,e.width=o,e.height=n,e.isFullscreen=s,(a||i)&&requestAnimationFrame(e.resizeWindowEventHandler),!a&&i&&requestAnimationFrame(function(){e.playing&&(e.playToggle(),requestAnimationFrame(function(){e.playToggle()})),l?requestAnimationFrame(function(){e.canvasLooper.sizeWindow(o,n)}):e.canvasLooper.sizeWindow(o,n)})},e.fullscreenFocusChangeHandler=function(t){var r=e.$el.compareDocumentPosition(t.target),o=(r&Node.DOCUMENT_POSITION_CONTAINED_BY)>0;if(e.isFullscreen&&!o){var n=(r&Node.DOCUMENT_POSITION_PRECEDING)>0,a=(r&Node.DOCUMENT_POSITION_FOLLOWING)>0,i=n?".lastFocus":a?".firstFocus":null,s=i?e.$el.querySelector(i):null;s&&s.focus()}},document.addEventListener("resize",e.resizeWindowEventHandler),document.addEventListener("fullscreenchange",e.resizeWindowEventHandler),window.addEventListener("resize",e.resizeWindowEventHandler),document.body.addEventListener("focus",e.fullscreenFocusChangeHandler,!0),e.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,e.isIOS&&(e.isMounted=!0,e.scrollWarningWatcher=function(){if(e.isMounted){requestAnimationFrame(e.scrollWarningWatcher);var t=e.$el.getBoundingClientRect(),r=e.$el.querySelector("button"),o=r?r.clientHeight:0,n=t.height,a=t.bottom;e.isIOSWarnNeeded=a>=n-o&&a<=n+o}},requestAnimationFrame(e.scrollWarningWatcher))},beforeDestroy:function(){var e=this;e.canvasLooper.die(),document.removeEventListener("resize",e.resizeWindowEventHandler),document.removeEventListener("fullscreenchange",e.resizeWindowEventHandler),window.removeEventListener("resize",e.resizeWindowEventHandler),document.body.removeEventListener("focus",e.fullscreenFocusChangeHandler,!0),e.isIOS&&(e.isMounted=!1)},methods:{looperStatusUpdate:function(e){var t=this;for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},looperEvent:function(e){var t=this;this.$ga&&(e.eventCategory="Video",e.eventLabel=t.id,this.$ga.event(e))},activity:function(){var e=this;e.activityHalted=!1,e.activityTimeoutId&&clearTimeout(e.activityTimeoutId),e.activityTimeoutId=setTimeout(function(){e.activityHalted=!0,e.activityTimeoutId=null},2e3)},playToggle:function(e){var t=this;t.started=!0,t.playing=!t.playing,t.canvasLooper.setPlay(t.playing),t.looperEvent({eventAction:(t.playing?"play":"pause")+"-"+(t.isFullscreen?"fullscreen":"windowed")})},step:function(e){var t=this;t.started||t.playToggle(),1===t.loaded&&(t.playing=!1,t.canvasLooper.setPlay(!1),t.canvasLooper.step(e))},scrub:function(e){var t=this;if(1===t.loaded){var r=Math.max(0,e-1e-9);t.playing=!1,t.canvasLooper.setPlay(!1),t.canvasLooper.setTime(r),t.canvasLooper.setFrameByTime()}},fullscreenToggle:function(){var e=this,t=void 0!==e.$el.requestFullscreen;e.activity();var r=void 0;t?e.isFullscreen?document.exitFullscreen&&(document.exitFullscreen(),r="exitFullscreen"):(e.$el.requestFullscreen(),r="requestFullscreen"):(e.$el.scrollIntoView(),r="scrollIntoView"),e.looperEvent({eventAction:"fullscreen-"+r})},focusHandler:function(e){e.stopPropagation(),this.activity(),this.focusElement=e.target},blurHandler:function(e){e.stopPropagation(),this.focusElement=void 0},leftHandler:function(e){e.preventDefault(),this.step(-1)},rightHandler:function(e){e.preventDefault(),this.step(1)},spaceHandler:function(e){!(this.focusElement&&"BUTTON"===this.focusElement.tagName)&&(e.preventDefault(),this.playToggle())}}}},function(e,t,r){var o=r(0),n=r(10),a=r(17),i=o(n,a,null,null,null);e.exports=i.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(11),n=r.n(o),a=r(14),i=r.n(a);t.default={components:{PerfectlooperControlBar:n.a,PerfectlooperControlButton:i.a},props:{started:Boolean,playing:Boolean,ready:Boolean,isFullscreen:Boolean,loaded:Number,scaled:Number,width:Number,playOffset:Number,playToggle:Function,step:Function,scrub:Function,fullscreenToggle:Function}}},function(e,t,r){var o=r(0),n=r(12),a=r(13),i=o(n,a,null,null,null);e.exports=i.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={created:function(){var e=this;e.startPoint=null,e.handleTouchStart=e.createTouchHandler("Start"),e.handleTouchMove=e.createTouchHandler("Move"),e.handleTouchEnd=e.createTouchHandler("End")},methods:{getPointByTouch:function(e){var t=this,r=e.changedTouches,o=null,n=null,a=null===t.startPoint;if(a)o=r[0];else for(var i=0;i<r.length;i++){var s=r[i];if(s.identifier===t.startPoint.id){o=s;break}}if(o){var l=event.currentTarget.getBoundingClientRect();n={x:o.clientX-l.left,y:o.clientY-l.top,id:o.identifier},a&&(t.startPoint=n)}return n},createTouchHandler:function(e){var t=this;return function(r){var o=t.getPointByTouch(r);o&&(t["drag"+e](o,r),"End"===e&&(t.startPoint=null))}}}},n=o;t.default={mixins:[n],props:{loaded:Number,scaled:Number,width:Number,playOffset:Number,scrub:Function},created:function(){var e=this;e.padLeft=160,e.padRight=64,e.handleMouseDown=function(t){e.offsetTimeByMouseEvent(t),e.isDragging=!0},e.handleMouseMove=function(t){e.isDragging&&e.offsetTimeByMouseEvent(t)},e.handleMouseUp=function(t){e.isDragging&&(e.offsetTimeByMouseEvent(t),e.isDragging=!1)}},mounted:function(){document.body.addEventListener("mousemove",this.handleMouseMove,!0),document.body.addEventListener("mouseup",this.handleMouseUp,!0)},beforeDestroy:function(){document.body.removeEventListener("mousemove",this.handleMouseMove,!0),document.body.removeEventListener("mouseup",this.handleMouseUp,!0)},computed:{lineWidth:function(){return this.width-(this.padLeft+this.padRight)}},methods:{lineFrac:function(e){return this.padLeft+this.lineWidth*e},offsetTimeByMouseEvent:function(e){var t=this.$el.getBoundingClientRect(),r=this.mapPointToPlayOffset(e.clientX-t.left);e.preventDefault(),this.scrub(r)},dragStart:function(e,t){this.offsetTimeByPoint(e,t)},dragMove:function(e,t){this.offsetTimeByPoint(e,t)},dragEnd:function(e,t){this.offsetTimeByPoint(e,t)},offsetTimeByPoint:function(e,t){var r=this.mapPointToPlayOffset(e.x);t.preventDefault(),this.scrub(r)},mapPointToPlayOffset:function(e){return Math.max(0,Math.min(1,(e-this.padLeft)/this.lineWidth))}}}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"perfectlooper-control-bar",attrs:{viewBox:"0 0 "+e.width+" 48"}},[r("g",{on:{mousedown:e.handleMouseDown,touhstart:e.handleTouchStart,touchmove:e.handleTouchMove,touchend:e.handleTouchEnd}},[r("rect",{staticClass:"background",attrs:{width:e.width,height:"48"}}),e._v(" "),r("g",{staticClass:"progressLines"},[r("line",{staticClass:"stroke total",attrs:{x1:e.padLeft,y1:"24",x2:e.lineFrac(1),y2:"24"}}),e._v(" "),r("line",{staticClass:"stroke loaded",attrs:{x1:e.padLeft,y1:"24",x2:e.lineFrac(e.loaded),y2:"24"}}),e._v(" "),r("line",{staticClass:"stroke scaled",attrs:{x1:e.padLeft,y1:"24",x2:e.lineFrac(e.scaled),y2:"24"}})]),e._v(" "),r("g",{staticClass:"playhead",attrs:{transform:"translate("+e.lineFrac(e.playOffset)+", 0)"}},[r("line",{staticClass:"stroke back",attrs:{x1:"0",y1:"22",x2:"0",y2:"26"}}),e._v(" "),r("line",{staticClass:"stroke front",attrs:{x1:"0",y1:"14",x2:"0",y2:"34"}})])])])},o=[];e.exports={render:r,staticRenderFns:o}},function(e,t,r){var o=r(0),n=r(15),a=r(16),i=o(n,a,null,null,null);e.exports=i.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{label:String}}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{attrs:{title:e.label,alt:e.label}},[r("svg",{attrs:{viewBox:"2 2 44 44"}},[e._t("default"),e._v(" "),r("use",{attrs:{"xlink:href":"#button-click-mask"}})],2)])},o=[];e.exports={render:r,staticRenderFns:o}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"perfectlooper-control"},[r("svg",{staticClass:"perfectlooper-control-defs",staticStyle:{display:"none"}},[r("defs",[r("path",{staticClass:"stroke screen-line",attrs:{id:"screen-line",stroke:"currentColor",d:"M3.5,3.5l5,5"}}),e._v(" "),r("path",{attrs:{id:"full-triangle",fill:"currentColor",d:"M10,9V4.41421a1,1,0,0,0-1.70711-.70711L3.70711,8.29289A1,1,0,0,0,4.41421,10H9A1,1,0,0,0,10,9Z"}}),e._v(" "),r("path",{attrs:{id:"exit-triangle",fill:"currentColor",d:"M8.29289,3.70711,3.70711,8.29289A1,1,0,0,1,2,7.58579V3A1,1,0,0,1,3,2H7.58579A1,1,0,0,1,8.29289,3.70711Z"}}),e._v(" "),r("g",{attrs:{id:"full-corner"}},[r("use",{attrs:{"xlink:href":"#screen-line"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#full-triangle"}})]),e._v(" "),r("g",{attrs:{id:"exit-corner"}},[r("use",{attrs:{"xlink:href":"#screen-line"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#exit-triangle"}})]),e._v(" "),r("g",{attrs:{id:"icon-fullscreen"}},[r("g",{attrs:{transform:"translate(24, 24)"}},[r("use",{attrs:{"xlink:href":"#full-corner",transform:"rotate(  0)"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#full-corner",transform:"rotate( 90)"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#full-corner",transform:"rotate(180)"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#full-corner",transform:"rotate(-90)"}})])]),e._v(" "),r("g",{attrs:{id:"icon-fullscreen-exit"}},[r("g",{attrs:{transform:"translate(24, 24)"}},[r("use",{attrs:{"xlink:href":"#exit-corner",transform:"rotate(  0)"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#exit-corner",transform:"rotate( 90)"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#exit-corner",transform:"rotate(180)"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#exit-corner",transform:"rotate(-90)"}})])]),e._v(" "),r("path",{attrs:{id:"icon-play",fill:"currentColor",d:"M17,15.33975V32.66025a2,2,0,0,0,3,1.73205l15-8.66025a2,2,0,0,0,0-3.4641L20,13.6077A2,2,0,0,0,17,15.33975Z"}}),e._v(" "),r("g",{attrs:{id:"icon-loading"}},[r("path",{attrs:{fill:"currentColor",d:"M28.56066,26.56066l4.37868,4.37868a1.5,1.5,0,0,0,2.12132,0l4.37868-4.37868A1.5,1.5,0,0,0,38.37868,24H29.62132A1.5,1.5,0,0,0,28.56066,26.56066Z"}}),e._v(" "),r("path",{staticClass:"stroke loading",attrs:{stroke:"currentColor",d:"M24,34A10,10,0,1,1,34,24"}})]),e._v(" "),r("path",{attrs:{id:"icon-pause",fill:"currentColor",d:"M19,34H17a2,2,0,0,1-2-2V16a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2V32A2,2,0,0,1,19,34Zm12,0H29a2,2,0,0,1-2-2V16a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2V32A2,2,0,0,1,31,34Z"}}),e._v(" "),r("path",{attrs:{id:"icon-advance",fill:"currentColor",d:"M26.125,16.85529l9,5.19615a2.25,2.25,0,0,1,0,3.89711l-9,5.19615a2.25,2.25,0,0,1-3.375-1.94856V18.80385A2.25,2.25,0,0,1,26.125,16.85529ZM17.75,29.5v-11a2,2,0,0,0-2-2h-.5a2,2,0,0,0-2,2v11a2,2,0,0,0,2,2h.5A2,2,0,0,0,17.75,29.5Z"}}),e._v(" "),r("rect",{attrs:{id:"button-click-mask",opacity:"0",x:"2",y:"2",width:"44",height:"44"}})])]),e._v(" "),e.started?r("div",[r("perfectlooper-control-bar",{attrs:{loaded:e.loaded,scaled:e.scaled,width:e.width,playOffset:e.playOffset,scrub:e.scrub}}),e._v(" "),r("perfectlooper-control-button",{staticClass:"step-prev",attrs:{label:"Step 1 frame backward"},nativeOn:{click:function(t){e.step(-1)}}},[r("g",{attrs:{transform:"translate(24, 24)"}},[r("g",{attrs:{transform:"rotate(180)"}},[r("g",{attrs:{transform:"translate(-24, -24)"}},[r("use",{attrs:{"xlink:href":"#icon-advance"}})])])])]),e._v(" "),r("perfectlooper-control-button",{staticClass:"playToggle",attrs:{label:e.playing?"Pause":"Play"},nativeOn:{click:function(t){e.playToggle(t)}}},[e.playing?e._e():r("use",{key:"play",attrs:{"xlink:href":"#icon-play"}}),e._v(" "),e.playing&&e.ready?r("use",{key:"pause",attrs:{"xlink:href":"#icon-pause"}}):e._e(),e._v(" "),!e.ready&&e.started&&e.playing?r("g",{key:"loading",attrs:{transform:"translate(24, 24)"}},[r("g",{staticClass:"rotating"},[r("g",{attrs:{transform:"translate(-24, -24)"}},[r("use",{attrs:{"xlink:href":"#icon-loading"}})])])]):e._e()]),e._v(" "),r("perfectlooper-control-button",{staticClass:"step-next",attrs:{label:"Step 1 frame forward"},nativeOn:{click:function(t){e.step(1)}}},[r("use",{attrs:{"xlink:href":"#icon-advance"}})])],1):e._e(),e._v(" "),r("perfectlooper-control-button",{staticClass:"fullscreenToggle lastFocus",attrs:{label:"Toggle Fullscreen"},nativeOn:{click:function(t){e.fullscreenToggle(t)}}},[e.started?e._e():r("rect",{staticClass:"fullscreenBackground",attrs:{x:"8",y:"8",width:"32",height:"32",rx:"4",ry:"4"}}),e._v(" "),e.isFullscreen?e._e():r("use",{key:"off",attrs:{"xlink:href":"#icon-fullscreen"}}),e._v(" "),e.isFullscreen?r("use",{key:"on",attrs:{"xlink:href":"#icon-fullscreen-exit"}}):e._e()])],1)},o=[];e.exports={render:r,staticRenderFns:o}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"perfectlooper",class:{fullscreen:e.isFullscreen,hideCursor:e.playing&&e.activityHalted,ios:e.isIOS,iosDangerZone:e.isIOSWarnNeeded},on:{mousemove:e.activity,touchmove:e.activity,touchstart:e.activity,"!focus":function(t){e.focusHandler(t)},"!blur":function(t){e.blurHandler(t)},"!keydown":[function(t){return"button"in t||!e._k(t.keyCode,"left",37)?"button"in t&&0!==t.button?null:void e.leftHandler(t):null},function(t){return"button"in t||!e._k(t.keyCode,"right",39)?"button"in t&&2!==t.button?null:void e.rightHandler(t):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"space",32))return null;e.spaceHandler(t)}]}},[r("div",{staticClass:"aspectEnforcer"},[r("canvas",{ref:"canvas",attrs:{width:e.width,height:e.height}}),e._v(" "),r("div",{staticClass:"overlay firstFocus",attrs:{tabindex:"0",role:"button"},on:{click:e.playToggle,keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.playToggle(t)}}},[r("transition-group",{attrs:{name:"perfectlooper_fade"}},[e.loaded?e._e():r("img",{key:"a",attrs:{src:e.poster}}),e._v(" "),!e.ready&&e.started?r("div",{key:"b",staticClass:"statusMessage"},[r("div",[e._v(e._s(e.statusMessage))])]):e._e(),e._v(" "),e.started?e._e():r("svg",{key:"c",staticClass:"overlay-play-icon",attrs:{viewBox:"0 0 128 128"}},[r("defs",[r("path",{attrs:{id:"play-icon",d:"M112,64A48,48,0,1,1,64,16,48,48,0,0,1,112,64ZM48,43.21539V84.78461a4,4,0,0,0,6,3.4641L90,67.4641a4,4,0,0,0,0-6.9282L54,39.75129A4,4,0,0,0,48,43.21539Z"}})]),e._v(" "),r("g",{staticClass:"fade"},[r("use",{staticClass:"stroke",attrs:{"xlink:href":"#play-icon"}}),e._v(" "),r("use",{attrs:{"xlink:href":"#play-icon",fill:"currentColor"}})])])])],1),e._v(" "),r("perfectlooper-control",{class:{hidden:!(!e.ready||!e.playing||!e.activityHalted)},attrs:{width:e.cssWidth,started:e.started,playing:e.playing,isFullscreen:e.isFullscreen,loaded:e.loaded,scaled:e.scaled,ready:e.ready,playOffset:e.playOffset,playToggle:e.playToggle,step:e.step,scrub:e.scrub,fullscreenToggle:e.fullscreenToggle}})],1)])},o=[];e.exports={render:r,staticRenderFns:o}}])});