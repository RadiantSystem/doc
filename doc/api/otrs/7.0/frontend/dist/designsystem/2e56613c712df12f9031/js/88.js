(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"9dk5":function(t,e,n){},Iptl:function(t,e,n){"use strict";var s=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(116).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")}}}},T1I9:function(t,e,n){"use strict";n.r(e);var s=n("Iptl"),i={name:"CommonArticleTeaser",components:{CommonBreadcrumb:function(){return n.e(115).then(n.bind(null,"W0aG"))}},props:{title:{type:String,required:!0},text:{type:String},link:{type:[String,Object]},breadcrumb:{type:Object,default:function(){return{items:[]}}},divider:{type:Boolean,default:!1}},methods:{click:function(t){this.$emit("click",t)}}},o=(n("zbK3"),n("psIG")),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ArticleTeaser",class:{"mb-3":!t.breadcrumb.items.length}},[t.divider?n("hr"):t._e(),t._v(" "),n("CommonLink",{attrs:{link:t.link},on:{click:t.click}},[n("h3",{staticClass:"ArticleTeaser__Title"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),n("p",{staticClass:"ArticleTeaser__Text"},[t.$slots.default?[t._t("default")]:[t._v("\n                "+t._s(t._f("truncate")(t.text,250))+"\n            ")]],2)]),t._v(" "),t.breadcrumb.items.length?n("CommonBreadcrumb",{staticClass:"mt-2",attrs:{items:t.breadcrumb.items,size:"md"}}):t._e()],1)},[],!1,null,null,null);a.options.__file="index.vue";var r=a.exports,c={name:"CommonArticleTeaser",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonArticleTeaser",component:r,example:{title:{default:"Lorem ipsum dolor sit amet",type:"input"},text:{default:"Consectetur adipiscing elit, donec id fermentum ligula finibus venenatis dui. Ut eget rutrum eros. Praesent vulputate laoreet tortor. Aliquam in massa vel erat euismod pellentesque. Aenean eget porttitor nisl, non viverra dui. Cras posuere pellentesque metus id gravida. Sed lacinia lacus vitae elementum convallis. Praesent nec rhoncus augue.",type:"textarea"},location:{type:"input"},breadcrumb:{default:{items:[{name:"Home",link:"/"},{name:"Service Catalogue",link:"/services"},{name:"Service Category",active:!0}]}}}}}},l=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),n("ol",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),n("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),n("ul",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);l.options.__file="CommonArticleTeaser.vue";e.default=l.exports},zbK3:function(t,e,n){"use strict";var s=n("9dk5");n.n(s).a}}]);