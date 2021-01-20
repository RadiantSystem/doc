(window.webpackJsonp=window.webpackJsonp||[]).push([[23,100,111,119],{"5PXK":function(t,e,n){},"9iYM":function(t,e,n){"use strict";n.r(e);n("ScpY");var s={name:"CommonLink",mixins:[n("MHmu").a],props:{link:{type:[String,Object]},isExternal:{type:Boolean,default:!1},isRoute:{type:Boolean,default:!1},active:{type:Boolean,default:!1},activeClass:{type:String},append:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactActiveClass:{type:String},flyoutId:{type:String},rel:{type:String},replace:{type:Boolean,default:!1},routerTag:{type:String},target:{type:String},title:{type:String}},data:function(){return{showFlyout:!1}},computed:{isInternalLink:function(){return!this.isExternal&&(!!this.isRoute||this.isRouteLink(this.link))}},methods:{click:function(t){this.$emit("click",t)},isBlured:function(){var t=this;this.flyoutId&&(this.showFlyout=!1,this.$nextTick(function(){t.checkFocusedElements()}))},isFocused:function(){var t=this;this.flyoutId&&(this.showFlyout=!0,this.$nextTick(function(){t.checkFocusedElements()}))},checkFocusedElements:function(){var t=document.getElementById(this.flyoutId);if(t&&t.classList.contains("has-flyout")){var e=t.getElementsByClassName("Flyout");e&&e.length&&(this.showFlyout?e[0].classList.add("Flyout__Show"):e[0].classList.remove("Flyout__Show"))}}}},i=n("psIG"),o=Object(i.a)(s,function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-link",{style:{"pointer-events":t.disabled?"none":"inherit"},attrs:{active:t.active,"active-class":t.activeClass,append:t.append,disabled:t.disabled,exact:t.exact,"exact-active-class":t.exactActiveClass,href:t.isInternalLink?null:t.link,rel:t.rel,replace:t.replace,"router-tag":t.routerTag,target:t.target,to:t.isInternalLink?t.link:null,title:t.title},on:{click:t.click},nativeOn:{blur:function(e){return t.isBlured(e)},focus:function(e){return t.isFocused(e)}}},[t._t("default")],2)},[],!1,null,null,null);o.options.__file="CommonLink.vue";e.default=o.exports},Iptl:function(t,e,n){"use strict";n("GkPX");var s=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(115).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(12).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")}}}},L3zo:function(t,e,n){"use strict";n.r(e);var s={name:"CommonAlert",components:{CommonLink:n("9iYM").default},props:{title:{type:String,required:!0},description:{type:String},link:{type:[String,Object]},linkText:{type:String,default:"Please follow this link"},dismissible:{type:Boolean},variant:{type:String,default:"info"},show:{type:Boolean}},computed:{variantClass:function(){switch(this.variant){case"success":return"Alert--Success";case"danger":return"Alert--Danger";case"warning":return"Alert--Warning";default:return"Alert--Neutral"}}},methods:{onLinkClick:function(t){this.$emit("click",t)}}},i=(n("TEtD"),n("psIG")),o=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-alert",{staticClass:"Alert",class:[t.variantClass],attrs:{show:t.show,variant:t.variant,dismissible:t.dismissible,"dismiss-label":t._f("translate")("Dismiss this alert")}},[n("p",[n("strong",[t._v(t._s(t._f("translate")(t.title)))]),t._v(" "),t.description?[t._v("\n            "+t._s(t._f("translate")(t.description))+"\n        ")]:t._e(),t._v(" "),t.link?n("CommonLink",{staticClass:"ml-2",attrs:{link:t.link},on:{click:t.onLinkClick}},[t._v("\n            "+t._s(t._f("translate")(t.linkText))+"\n        ")]):t._e()],2),t._v(" "),n("div",{staticClass:"Alert__Actions"},[t._t("action")],2)])},[],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports},MHmu:function(t,e,n){"use strict";n("GkPX");var s=n("e+GP"),i=n.n(s);e.a={methods:{isRouteLink:function(t){if("object"===i()(t))return!0;if(!this.$router)return!1;var e=this.$router.resolve({path:t});return!!(e.route&&e.route.matched&&e.route.matched.length&&"ErrorPage"!==e.route.matched[0].name&&"LayoutError"!==e.route.matched[0].name)}}}},TEtD:function(t,e,n){"use strict";var s=n("5PXK");n.n(s).a},"e+GP":function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=s=function(t){return n(t)}:t.exports=s=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},s(e)}t.exports=s},eXAr:function(t,e,n){"use strict";n.r(e);var s=n("Iptl"),i=n("L3zo"),o={name:"CommonAlert",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonAlert",component:i.default,example:{title:{default:"Sample Alert",type:"input"},description:{default:"Some Important Message",type:"input"},link:{default:"http://www.otrs.com",type:"input"},linkText:{type:"input",default:"Please follow this link"},dismissible:{type:"checkbox"},variant:{default:"info",type:"select",options:[{value:"success",text:"success"},{value:"danger",text:"danger"},{value:"warning",text:"warning"},{value:"info",text:"info"}]},show:{default:!0,type:"checkbox"}}}}},a=n("psIG"),r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),n("ol",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),n("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),n("ul",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);r.options.__file="CommonAlert.vue";e.default=r.exports}}]);