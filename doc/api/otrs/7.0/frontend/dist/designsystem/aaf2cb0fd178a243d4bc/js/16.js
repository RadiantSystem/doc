(window.webpackJsonp=window.webpackJsonp||[]).push([[16,103],{"0Yts":function(e,t,n){},"0vFe":function(e,t,n){"use strict";var o=n("0Yts");n.n(o).a},Iptl:function(e,t,n){"use strict";var o=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(113).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}}}},Kz1y:function(e,t,n){"use strict";t.__esModule=!0;var o,a=n("PSh9"),s=(o=a)&&o.__esModule?o:{default:o};t.default=s.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},cMQF:function(e,t,n){"use strict";n.r(t);var o=n("tZmG"),a=n.n(o),s=n("Kz1y"),l=n.n(s),i=n("lOrp"),r={name:"FormLanguage",components:{FormSelect:function(){return Promise.all([n.e(6),n.e(5),n.e(114)]).then(n.bind(null,"H8X1"))}},props:{value:{type:null},alwaysOpen:{type:Boolean},async:{type:Boolean},autoLoadRootOptions:{type:Boolean,default:!0},backspaceRemoves:{type:Boolean},beforeClearAll:{type:Function},branchNodesFirst:{type:Boolean,default:!1},cacheOptions:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},defaultExpandLevel:{type:Number,default:0},defaultOptions:{type:[Boolean,Array],default:!1},deleteRemoves:{type:Boolean,default:!0},delimiter:{type:String},description:{type:String},disableBranchNodes:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disableFuzzyMatching:{type:Boolean},hidden:{type:Boolean,default:!1},error:{type:String},escapeClearsValue:{type:Boolean},flat:{type:Boolean,default:!0},joinValues:{type:Boolean},label:{type:String},labelSrOnly:{type:Boolean,default:!1},limit:{type:Number,default:1/0},limitText:{type:Function,note:"Function that processes the message shown when selected elements pass the defined limit."},loading:{type:Boolean},loadOptions:{type:Function},matchKeys:{type:Array},maxHeight:{type:Number,default:300},multiple:{type:Boolean,default:!1},name:{type:String},normalizer:{type:Function},openDirection:{type:String,default:"auto"},openOnClick:{type:Boolean,default:!0,note:"Whether to automatically open the menu when the control is clicked."},openOnFocus:{type:Boolean,default:!1},options:{type:[Array,Object]},placeholder:{type:String},required:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},searchNested:{type:Boolean,default:!0},showCount:{type:Boolean,default:!1},showCountOf:{type:String},showCountOnSearch:{type:Boolean,default:!1},selectClass:{type:String},sortValueBy:{type:String},tabIndex:{type:Number},valueConsistsOf:{type:String},valueFormat:{type:String}},data:function(){return{languages:[]}},computed:l()({},Object(i.b)(["config"]),{language:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},fieldId:function(){return"formSelect-"+this._uid}}),mounted:function(){var e=this;this.initLanguages(),this.$bus.$on("forceUpdate",function(){e.initLanguages()});var t=this.$store.getters.language;void 0!==t&&null!==t&&(this.language=this.$store.getters.language)},methods:{initLanguages:function(){var e=this,t=this.config.DefaultUsedLanguages,n=this.config.DefaultUsedLanguagesNative,o=0;a()(t).forEach(function(a){if(t[a]||n[a]){var s=n[a]||"",l=t[a]||"",i=e.$locale.translate(l);i&&i!==s&&(s+=" - "+i),e.$set(e.languages,o,{id:a,label:s}),o++}})}}},c=(n("0vFe"),n("psIG")),u=Object(c.a)(r,function(){var e=this,t=e.$createElement;return(e._self._c||t)("FormSelect",{class:e.selectClass,attrs:{"always-open":e.alwaysOpen,async:e.async,"auto-load-root-options":e.autoLoadRootOptions,"backspace-removes":e.backspaceRemoves,"before-clear-all":e.beforeClearAll,"branch-nodes-first":e.branchNodesFirst,"cache-options":e.cacheOptions,clearable:e.clearable,"clear-on-select":e.clearOnSelect,"close-on-select":e.closeOnSelect,"default-expand-level":e.defaultExpandLevel,"default-options":e.defaultOptions,"delete-removes":e.deleteRemoves,delimiter:e.delimiter,description:e.description,"disable-branch-nodes":e.disableBranchNodes,disabled:e.disabled,"disable-fuzzy-matching":e.disableFuzzyMatching,error:e.error,"escape-clears-value":e.escapeClearsValue,"instance-id":e.fieldId,"join-values":e.joinValues,flat:e.flat,label:e._f("translate")("Select language"),"label-for":e.fieldId,"label-sr-only":e.labelSrOnly,limit:e.limit,"limit-text":e.limitText,loading:e.loading,"load-options":e.loadOptions,"match-keys":e.matchKeys,"max-height":e.maxHeight,multiple:e.multiple,name:e.name,normalizer:e.normalizer,"open-direction":e.openDirection,"open-on-click":e.openOnClick,"open-on-focus":e.openOnFocus,options:e.languages,placeholder:e._f("translate")(e.placeholder),required:e.required,searchable:e.searchable,"search-nested":e.searchNested,"show-count-of":e.showCountOf,"sort-value-by":e.sortValueBy,"show-count":e.showCount,"show-count-on-search":e.showCountOnSearch,"tab-index":e.tabIndex,"value-consists-of":e.valueConsistsOf,"value-format":e.valueFormat},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})},[],!1,null,null,null);t.default=u.exports},ng8z:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),a=n("cMQF"),s={name:"FormLanguage",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormLanguage",value:void 0,component:a.default,example:{}}}},l=n("psIG"),i=Object(l.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),e._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[e._v("Header Level 2")]),e._v(" "),n("ol",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])]),e._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Do")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),e._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Don't")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),e._v(" "),n("h3",{staticClass:"design-system"},[e._v("Header Level 3")]),e._v(" "),n("ul",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])])],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=i.exports}}]);