(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{Iptl:function(e,t,s){"use strict";var n=s("nS/B");t.a={components:{CommonNotice:function(){return s.e(116).then(s.bind(null,"mkLc"))},DocsExample:function(){return s.e(7).then(s.bind(null,"GD02"))},DocsComponentAPI:function(){return s.e(8).then(s.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}}}},uCJ7:function(e,t,s){"use strict";s.r(t);var n=s("Iptl"),o=s("7lnb"),i=s.n(o),r=s("6DIm"),a=s("0NuS"),c=s.n(a),u=s("t3kO"),h=s.n(u),l=s("6J4u"),p=s.n(l),d=s("tZmG"),m=s.n(d),v=s("wv3L"),_=s.n(v),f=s("OBCi"),b=s.n(f),g=s("q3sO"),y=s.n(g),P=s("PSh9"),w=s.n(P),C=s("Zv/C"),S=s.n(C),k=s("2lBV"),O=s.n(k),T=s("/9Wh"),R=s.n(T),I=s("akKz"),E=s.n(I),j=(s("5Nsu"),s("kmNX")),D=s.n(j),A=function(){function e(){S()(this,e),this._items=new y.a}return O()(e,[{key:"create",value:function(e,t,s){return this._rejectExistingRequest(e),this._createNewRequest(e,t,s)}},{key:"resolve",value:function(e,t){e&&this._items.has(e)&&this._items.get(e).resolve(t)}},{key:"reject",value:function(e,t){if(e&&this._items.has(e)){var s=new Error("Error getting valid response.");s.response=t,this._items.get(e).reject(s)}}},{key:"rejectAll",value:function(e){m()(this._items).forEach(function(t){return t.isPending?t.reject(e):null})}},{key:"_rejectExistingRequest",value:function(e){var t=this._items.get(e);t&&t.isPending&&t.reject(new Error("WebSocket request is replaced, id: "+e))}},{key:"_createNewRequest",value:function(e,t,s){var n=this,o=new E.a;return this._items.set(e,o),o.timeout(s,"WebSocket request was rejected by timeout ("+s+" ms). RequestId: "+e),D()(o.call(t),function(){return n._deleteRequest(e,o)})}},{key:"_deleteRequest",value:function(e,t){this._items.get(e)===t&&this._items.delete(e)}}]),e}(),q=s("tb9w"),L=function(){function e(){S()(this,e),this._messages={},this._lastUid=-1}return O()(e,[{key:"_callSubscriber",value:function(e,t){setTimeout(function(){return e(t)},0)}},{key:"_deliverMessage",value:function(e,t){var s=this;q.a.info("PubSub - _deliverMessage() - message",e),m()(this._messages).forEach(function(n){s._messageFilter(s._messages[n],e)&&s._callSubscriber(s._messages[n].function,t)})}},{key:"_messageFilter",value:function(e,t){return!(Object.prototype.hasOwnProperty.call(e,"codes")&&e.codes.indexOf(parseInt(t.code,10))<0)&&(!(Object.prototype.hasOwnProperty.call(e,"methods")&&e.methods.indexOf(t.method.toUpperCase())<0)&&(!(Object.prototype.hasOwnProperty.call(e,"types")&&e.types.indexOf(t.type.toUpperCase())<0)&&!(Object.prototype.hasOwnProperty.call(e,"path")&&!t.path.match(e.path))))}},{key:"_messageHasSubscribers",value:function(e){var t=this,s=0;return m()(this._messages).forEach(function(n){return t._messageFilter(t._messages[n],e)&&(s=1),!0}),1===s}},{key:"_createDeliveryFunction",value:function(e,t){var s=this;return function(){s._deliverMessage(e,t)}}},{key:"publish",value:function(e,t){var s=this;return Object.prototype.hasOwnProperty.call(e,"path")?Object.prototype.hasOwnProperty.call(e,"method")?Object.prototype.hasOwnProperty.call(e,"code")?Object.prototype.hasOwnProperty.call(e,"type")?(setTimeout(function(){s._messageHasSubscribers(e)&&s._createDeliveryFunction(e,t)()},0),!0):(q.a.error("PubSub.js - publish()",'Parameter "message" requires "type".'),!1):(q.a.error("PubSub.js - publish()",'Parameter "message" requires "code".'),!1):(q.a.error("PubSub.js - publish()",'Parameter "message" requires "method".'),!1):(q.a.error("PubSub.js - publish()",'Parameter "message" requires "path".'),!1)}},{key:"subscribe",value:function(e,t){var s=this;if("function"!=typeof t)return!1;var n="uid_"+String(++this._lastUid);return Object.prototype.hasOwnProperty.call(this._messages,n)||(this._messages[n]={}),this._messages[n].function=t,Object.prototype.hasOwnProperty.call(e,"path")&&(this._messages[n].path=new RegExp(e.path)),Object.prototype.hasOwnProperty.call(e,"methods")&&e.methods.length&&(this._messages[n].methods=[],m()(e.methods).forEach(function(t){s._messages[n].methods.push(e.methods[t].toUpperCase())})),Object.prototype.hasOwnProperty.call(e,"codes")&&e.codes.length&&(this._messages[n].codes=[],m()(e.codes).forEach(function(t){s._messages[n].codes.push(parseInt(e.codes[t],10))})),Object.prototype.hasOwnProperty.call(e,"types")&&e.types.length&&(this._messages[n].types=[],m()(e.types).forEach(function(t){s._messages[n].types.push(e.types[t].toUpperCase())})),{token:n,unsubscribe:function(){s.unsubscribe(n)}}}},{key:"clearAllSubscriptions",value:function(){this._messages={}}},{key:"unsubscribe",value:function(e){delete this._messages[e]}}]),e}(),M=0,x=1,H=2,B=3,W={wsServer:{protocol:"ws:",hostname:"localhost",port:80,prefixPath:"",path:"/websocket"},xhrServer:{protocol:"http:",hostname:"localhost",port:80,prefixPath:""},createWebSocket:function(e){return new WebSocket(e)},packMessage:function(e){return R()(e)},unpackMessage:function(e){return JSON.parse(e)},attachRequestId:function(e,t){return e.RequestID=t,e},extractRequestId:function(e){return e&&e.RequestID},timeout:0,connectionTimeout:0,responseTimeout:3e4,reconnect:!0,reconnectionDelayIncrement:1e3,maxReconnectionDelay:1e4,accessToken:"",throwError:!0},U=new(function(){function e(){S()(this,e),this._options=w()({},W),this._opening=new E.a,this._closing=new E.a,this._requests=new A,this._requestCount=0,this._ws=null,this._wsSubscription={},this._reconnectTimeoutId=null,this._reconnectionCount=0,this._reconnectionAttempt=0,this._reconnectionDelay=0,this._reconnectResetAttemptsTimeoutId=null,this._pubSub=new L,this._eventListeners=new y.a}return O()(e,[{key:"open",value:function(){var e=this;return this.isClosing?b.a.reject(new Error("Can't open WebSocket while closing.")):this.isOpened?this._opening.promise:(q.a.info("APIClient: Opening WebSocket connection..."),this._opening.call(function(){var t=e._options.connectionTimeout||e._options.timeout;e._opening.timeout(t,"Can't open WebSocket within allowed timeout: "+t+" ms."),e._opening.promise.catch(function(t){return e._cleanup(t)}),e._createWS()}))}},{key:"_reconnect",value:function(){var e=this;this._options.reconnect?(this._reconnectionDelay=this._reconnectionAttempt*this._options.reconnectionDelayIncrement,(this._reconnectionDelay>this._options.maxReconnectionDelay||this._options.fixedReconnectionDelay)&&(this._reconnectionDelay=this._options.maxReconnectionDelay),q.a.info("APIClient: Trying to reconnect in "+this._reconnectionDelay/1e3+"s"),this._reconnectionCount++,this._reconnectionAttempt++,clearTimeout(this._reconnectTimeoutId),this._reconnectTimeoutId=setTimeout(function(){e.open()},this._reconnectionDelay)):this._reconnectTimeoutId&&clearTimeout(this._reconnectTimeoutId)}},{key:"sendRequest",value:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0!==s.responseTimeout?s.responseTimeout:this._options.responseTimeout;if(e.Method=e.Method.toUpperCase(),!s.skipAuthentication&&this._options.accessToken&&(Object.prototype.hasOwnProperty.call(e,"Headers")||(e.Headers={}),e.Headers.Authentication="Bearer "+this._options.accessToken),"debug"===q.a.options.logLevel&&(Object.prototype.hasOwnProperty.call(e,"Headers")||(e.Headers={}),e.Headers["X-OTRS-API-Debug"]="true"),s.xhr)return this._sendXHR(e,s,n);var o=s.requestId||++this._requestCount;return this._requests.create(o,function(){var s=t._options.attachRequestId(e,o);t._sendPacked(s)},n)}},{key:"_sendXHR",value:function(e,t,s){var n=this,o=new XMLHttpRequest,i=new E.a,r=this._options.xhrServer,a=r.protocol+"//"+r.hostname+":"+r.port+r.prefixPath+"/",c=void 0!==t.apiPrefix?t.apiPrefix:"api/",u=t&&t.responseType||"json";return i.timeout(s,"Didn't get XHR response within allowed timeout ("+s+" ms)."),i.call(function(){"function"==typeof t.onUploadProgress&&o.upload.addEventListener("progress",t.onUploadProgress),o.addEventListener("load",function(){var t=o.response;t&&"json"===u&&"object"!==(void 0===t?"undefined":_()(t))&&(t=JSON.parse(o.response));var s={Path:Object.prototype.hasOwnProperty.call(e,"Path")?e.Path:"",Method:Object.prototype.hasOwnProperty.call(e,"Method")?e.Method:"GET",Code:o.status,Body:t};if(o.status>=200&&o.status<300)i.resolve(s);else{var r=new Error("Error getting valid response.");r.response=s,i.reject(r)}q.a.debug("APIClient: Received XHR "+s.Method+" response for "+s.Path+":",s);var a={path:s.Path,method:s.Method,code:s.Code,type:"response"};o.getResponseHeader("X-OTRS-API-Debug-SQLTrace")&&n._debugSQL(o.getResponseHeader("X-OTRS-API-Debug-SQLTrace"),a),o.getResponseHeader("X-OTRS-API-Debug-STDERRLog")&&n._debugSTDERR(o.getResponseHeader("X-OTRS-API-Debug-STDERRLog"),a),n._pubSub.publish(a,s),n._dispatchEvent(new CustomEvent("message",{detail:s}))}),o.addEventListener("error",function(){return i.reject(o.statusText)}),o.addEventListener("abort",function(){return i.reject(o.statusText)}),o.open(e.Method||"GET",a+c+e.Path,!0),"XMLHttpRequest"===o.constructor.name&&(o.responseType=u),e.Headers&&m()(e.Headers).forEach(function(t){o.setRequestHeader(t,e.Headers[t])}),o.send(e.Body);var s={Path:Object.prototype.hasOwnProperty.call(e,"Path")?e.Path:"",Method:Object.prototype.hasOwnProperty.call(e,"Method")?e.Method:"GET",Code:200,Type:"request"};n._pubSub.publish({path:s.Path,method:s.Method,code:s.Code,type:s.Type},s),q.a.debug("APIClient: Sent XHR "+e.Method+" request to "+e.Path+":",e)})}},{key:"_sendPacked",value:function(e){var t=this._options.packMessage(e);this._send(t)}},{key:"_send",value:function(e){var t=this;if(this.isOpened){this._ws.send(e);var s=this._options.unpackMessage(e),n={Path:Object.prototype.hasOwnProperty.call(s,"Path")?e.Path:"",Method:Object.prototype.hasOwnProperty.call(s,"Method")?e.Method:"GET",Code:200,Type:"request"};this._pubSub.publish({path:n.Path,method:n.Method,code:n.Code,type:n.Type},n),q.a.debug("APIClient: Sent WS "+s.Method+" request to "+s.Path+":",s)}else if(this._options.reconnect)setTimeout(function(){t._send(e)},this._reconnectionDelay);else if(this._options.throwError)throw new Error("Can't send data because WebSocket is not opened.")}},{key:"subscribe",value:function(e,t){var s=this._pubSub.subscribe(e,t);return q.a.debug("APIClient: Subscribed as "+s.token),s}},{key:"unsubscribe",value:function(e){var t=this;return Array.isArray(e)?m()(e).forEach(function(s){q.a.debug("APIClient: Unsubscribing "+e[s]),t._pubSub.unsubscribe(e[s])}):(q.a.debug("APIClient: Unsubscribing "+e),this._pubSub.unsubscribe(e)),!0}},{key:"close",value:function(){var e=this;return this.isClosed?b.a.resolve(this._closing.value):(q.a.info("APIClient: Closing WebSocket connection..."),this._closing.call(function(){var t=e._options.timeout;e._closing.timeout(t,"Can't close WebSocket within allowed timeout: "+t+" ms."),e._ws.close()}))}},{key:"_createWS",value:function(){var e=this,t=this._options.wsServer,s=t.protocol+"//"+t.hostname+":"+t.port+t.prefixPath+t.path;this._ws=this._options.createWebSocket(s),["open","message","error","close"].forEach(function(t){var s="_handle"+(t.charAt(0).toUpperCase()+t.slice(1));e._ws.addEventListener(t,function(t){e[s](t)}),e._wsSubscription[t]=s})}},{key:"_handleOpen",value:function(e){var t=this;this._reconnectResetAttemptsTimeoutId=setTimeout(function(){t._reconnectionAttempt=0},this._options.reconnectionDelayIncrement),q.a.info("APIClient: WebSocket connected!"),this._opening.resolve(e),this._dispatchEvent(new CustomEvent("open"))}},{key:"_handleMessage",value:function(e){var t=e.data;this._handleUnpackedMessage(t)}},{key:"_handleUnpackedMessage",value:function(e){if(this._options.unpackMessage){var t=this._options.unpackMessage(e);void 0!==t&&(q.a.debug("APIClient: Received WS "+t.Method+" message for "+t.Path+":",t),this._handleResponse(t))}}},{key:"_handleResponse",value:function(e){if(this._options.extractRequestId){var t=this._options.extractRequestId(e);t&&(e.Code>=200&&e.Code<300?this._requests.resolve(t,e):this._requests.reject(t,e));var s={path:Object.prototype.hasOwnProperty.call(e,"Path")?e.Path:"",method:Object.prototype.hasOwnProperty.call(e,"Method")?e.Method:"",code:Object.prototype.hasOwnProperty.call(e,"Code")?e.Code:"",type:"response"};e.Headers&&e.Headers["X-OTRS-API-Debug-SQLTrace"]&&this._debugSQL(e.Headers["X-OTRS-API-Debug-SQLTrace"],s),e.Headers&&e.Headers["X-OTRS-API-Debug-STDERRLog"]&&this._debugSTDERR(e.Headers["X-OTRS-API-Debug-STDERRLog"],s),this._pubSub.publish(s,e),this._dispatchEvent(new CustomEvent("message",{detail:e}))}}},{key:"_handleError",value:function(){clearTimeout(this._reconnectResetAttemptsTimeoutId),this._reconnectResetAttemptsTimeoutId=null}},{key:"_handleClose",value:function(e){this._reconnect(),this._closing.resolve(e);var t=new Error("WebSocket closed with reason: "+e.reason+" ("+e.code+").");this._opening.isPending&&this._opening.reject(t),this._cleanup(t),this._dispatchEvent(new CustomEvent("close",{detail:t}))}},{key:"_cleanupWS",value:function(){var e=this;this._ws&&(["open","message","error","close"].forEach(function(t){e._ws.removeEventListener(t,e[e._wsSubscription[t]])}),this._ws=null,this._wsSubscription={})}},{key:"_cleanup",value:function(e){this._cleanupWS(),this._requests.rejectAll(e)}},{key:"addEventListener",value:function(e,t){return!!/^(open|message|close)$/.test(e)&&("function"==typeof t&&(this._eventListeners.set(t.bind(this),{type:e,listener:t}),!0))}},{key:"removeEventListener",value:function(e,t){if(!/^(open|message|close)$/.test(e))return!1;if("function"!=typeof t)return!1;var s=!0,n=!1,o=void 0;try{for(var i,r=h()(this._eventListeners);!(s=(i=r.next()).done);s=!0){var a=i.value,c=p()(a,2),u=c[0],l=c[1];l.type===e&&t===l.listener&&this._eventListeners.delete(u)}}catch(e){n=!0,o=e}finally{try{!s&&r.return&&r.return()}finally{if(n)throw o}}return!0}},{key:"_dispatchEvent",value:function(e){Object.defineProperty(e,"target",{value:this});var t="on"+e.type;this[t]&&this[t](e);var s=!0,n=!1,o=void 0;try{for(var i,r=h()(this._eventListeners);!(s=(i=r.next()).done);s=!0){var a=i.value,c=p()(a,2),u=c[0];c[1].type===e.type&&u(e)}}catch(e){n=!0,o=e}finally{try{!s&&r.return&&r.return()}finally{if(n)throw o}}}},{key:"_debugSQL",value:function(e,t){var s=JSON.parse(e),n=s.length;if(n){var o=0;s.forEach(function(e){o+=e.Time}),o=o.toFixed(4),q.a.debug(t.method.toUpperCase()+" message for "+t.path+" caused "+n+" SQL statements in "+o+"s: ",s)}}},{key:"_debugSTDERR",value:function(e,t){var s=JSON.parse(e),n=s.length;n&&q.a.debug(t.method.toUpperCase()+" message for "+t.path+" wrote "+n+" STDERR messages",s)}},{key:"options",get:function(){return this._options},set:function(e){this._options=w()({},this._options,e)}},{key:"isOpening",get:function(){return Boolean(this._ws&&this._ws.readyState===M)}},{key:"isOpened",get:function(){return Boolean(this._ws&&this._ws.readyState===x)}},{key:"isClosing",get:function(){return Boolean(this._ws&&this._ws.readyState===H)}},{key:"isClosed",get:function(){return Boolean(!this._ws||this._ws.readyState===B)}}]),e}());r.a.use(c.a,{color:"#8fffc7",failedColor:"#ff0000",autoFinish:!1});var $={name:"CommonProgressBar",props:{testMode:{type:Boolean,default:!1}},data:function(){return{internalCounter:0,activeProgressBar:!1,errors:!1,intervalId:void 0,now:0,startTime:0}},computed:{counter:{get:function(){return this.internalCounter},set:function(e){var t=this;this.internalCounter=e,e>0?setTimeout(function(){!t.activeProgressBar&&t.internalCounter>0&&t.start()},150):0===e&&setTimeout(function(){t.activeProgressBar&&0===t.internalCounter&&t.finish()},300)}}},created:function(){var e=this;this.testMode?setInterval(function(){setTimeout(function(){e.increment(),setTimeout(function(){e.decrement({Code:200})},2e3)},500)},3e3):(new MutationObserver(function(t){t.forEach(function(t){i()(t.addedNodes).forEach(function(t){if(/^SCRIPT|LINK$/.test(t.tagName)){e.increment();var s=e;t.addEventListener("load",function(){s.decrement({Code:200}),t.removeEventListener("load",this)})}})})}).observe(document.head,{childList:!0}),U.subscribe({types:["request"]},function(){e.increment()}),U.subscribe({types:["response"]},function(t){e.decrement(t)}),this.$bus.$on("progressBarShow",function(){e.increment()}),this.$bus.$on("progressBarHide",function(){e.decrement({Code:200})}))},methods:{increment:function(){this.counter++},decrement:function(e){e.Code&&500!==e.Code||(this.errors=!0),0!==this.counter&&this.counter--},start:function(){var e=this;this.$Progress.start(),this.now=Date.now(),this.startTime=this.now,this.activeProgressBar=!0,this.intervalId=setInterval(function(){e.now=Date.now(),e.activeProgressBar&&e.now-e.startTime>=3e4?e.finish():e.activeProgressBar||clearInterval(e.intervalId)},1e3)},finish:function(){this.errors?(this.$Progress.fail(),this.errors=!1):this.$Progress.finish(),this.startTime=0,this.activeProgressBar=!1,clearInterval(this.intervalId)}}},N=s("psIG"),X=Object(N.a)($,function(){var e=this.$createElement;return(this._self._c||e)("vue-progress-bar")},[],!1,null,null,null);X.options.__file="CommonProgressBar.vue";var J=X.exports,Q={name:"CommonProgressBar",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonProgressBar",component:J,example:{testMode:{default:!0}},customCode:[{tag:"p",value:"Take a look at the top of this window."}]}}},F=Object(N.a)(Q,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[s("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),s("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),s("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[s("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),s("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),e._v(" "),s("h2",{staticClass:"design-system"},[e._v("\n        Semi-automatic Mode\n    ")]),e._v(" "),s("p",[e._v("\n        While the component monitors network for any API requests and responses, it is still possible to activate it\n        manually. Just emit on the global event bus in order to start the progress bar:\n    ")]),e._v(" "),s("pre",{staticClass:"design-system"},[e._v("this.$bus.$emit('progressBarShow');")]),e._v(" "),s("p",[e._v("In order to stop it, emit a different event:")]),e._v(" "),s("pre",{staticClass:"design-system"},[e._v("this.$bus.$emit('progressBarHide');")]),e._v(" "),s("b-tabs",{staticClass:"tab-content"},[s("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[s("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,"custom-code":e.customCode,props:e.props,events:e.events,slots:e.slots,example:e.example}})],1),e._v(" "),s("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[s("h2",{staticClass:"design-system"},[e._v("Header Level 2")]),e._v(" "),s("ol",{staticClass:"design-system"},[s("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),s("li",[e._v("Aliquam tincidunt mauris eu risus.")])]),e._v(" "),s("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[e._v("Do")]),e._v(" "),s("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),e._v(" "),s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[e._v("Don't")]),e._v(" "),s("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),e._v(" "),s("h3",{staticClass:"design-system"},[e._v("Header Level 3")]),e._v(" "),s("ul",{staticClass:"design-system"},[s("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),s("li",[e._v("Aliquam tincidunt mauris eu risus.")])])],1),e._v(" "),s("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[s("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);F.options.__file="CommonProgressBar.vue";t.default=F.exports}}]);