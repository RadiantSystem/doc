(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{GNaB:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),a=n("QC6T"),s=n.n(a),r=function(t,e){var n=s()(t),o=n.lightness()+e;return o>100&&(o=100),s.a.hsl([n.hue(),n.saturationl(),o]).hex()},i=function(t){var e=t,n=r(t,20);return{background:[n,"-moz-linear-gradient(top, "+n+" 0%, "+e+" 100%)","-webkit-gradient(linear, left top, left bottom, color-stop(0%, "+n+"), color-stop(100%, "+e+"))","-webkit-linear-gradient(top, "+n+" 0%, "+e+" 100%)","-o-linear-gradient(top, "+n+" 0%, "+e+" 100%)","-ms-linear-gradient(top, "+n+" 0%, "+e+" 100%)","linear-gradient(to bottom, "+n+" 0%, "+e+" 100%)"]}},c={name:"CommonHero",components:{FormInput:function(){return n.e(98).then(n.bind(null,"CJfq"))}},props:{background:{type:String,default:"BackgroundGradient"},backgroundImage:{type:String},backgroundColor:{type:String,default:"#04a1db"},title:{type:String,default:"How can we help you?"},placeholder:{type:String,default:"Search something..."}},computed:{style:function(){var t,e,n,o,a={},c="/api/frontend/external/homepage/image";if("Background"===this.background)this.backgroundImage?(a.backgroundImage='url("'+c+"?Path="+this.backgroundImage+'")',a.backgroundSize="cover"):a.backgroundColor=this.backgroundColor;else if("BackgroundGradient"===this.background)a.background=i(this.backgroundColor).background;else if("BackgroundMix"===this.background)if(this.backgroundImage){var l=c+"?Path="+this.backgroundImage;a.background=(t=this.backgroundColor,e=l,n=s()(t).rgb().array(),o=s()(r(t,20)).rgb().array(),{background:["rgb("+o+")","-moz-linear-gradient(top, rgba("+o+", .2) 0%, rgba("+n+", .5) 100%), url("+e+")","-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba("+o+", .2)), color-stop(100%, rgba("+n+", .5))), url("+e+")","-webkit-linear-gradient(top, rgba("+o+", .2) 0%, rgba("+n+", .5) 100%), url("+e+")","-o-linear-gradient(top, rgba("+o+", .2) 0%, rgba("+n+", .5) 100%), url("+e+")","-ms-linear-gradient(top, rgba("+o+", .2) 0%, rgba("+n+", .5) 100%), url("+e+")","linear-gradient(to bottom, rgba("+o+", .2) 0%, rgba("+n+", .5) 100%), url("+e+")"]}).background,a.backgroundSize="cover"}else a.background=i(this.backgroundColor).background;return a}}},l=(n("UCaf"),n("psIG")),u=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-jumbotron",{staticClass:"text-center d-flex align-items-center",class:t.background,style:t.style,attrs:{fluid:""}},[n("h2",{staticClass:"Search__Title"},[t._v(t._s(t._f("translate")(t.title)))]),t._v(" "),t.$slots.search?[t._t("search")]:[n("FormInput",{staticClass:"no-rounded-bottom col-md-6 mx-auto px-0 shadow Search__Item",attrs:{"field-classes":{"py-3":!0,"rounded-0":!0,"border-0":!0},placeholder:t.placeholder,label:t._f("translate")("Search"),type:"text",size:"lg",autocomplete:"search",autofocus:"","label-sr-only":""}},[n("template",{slot:"input-group-append"},[n("CommonIcon",{staticClass:"Search__Icon",attrs:{icon:"search",size:"lg"}})],1)],2)]],2)},[],!1,null,null,null).exports,d={name:"CommonHero",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonHero",component:u,example:{background:{default:"Hero--Background",type:"input"},title:{default:"How can we help you?",type:"input"},placeholder:{default:"Search something...",type:"input"}}}}},p=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),n("ol",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),n("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),n("ul",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=p.exports},Iptl:function(t,e,n){"use strict";var o=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(113).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}}}},UCaf:function(t,e,n){"use strict";var o=n("V+Pp");n.n(o).a},"V+Pp":function(t,e,n){}}]);