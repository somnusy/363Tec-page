webpackJsonp([10],{22:function(t,e,n){n(37),n(38);var o=n(12)(n(36),n(42),"data-v-3698eb11",null);o.options.__file="D:\\idea_workspace\\363Tec\\363Tec-page\\vue\\src\\views\\layout\\columnModel.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] columnModel.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"columnModel",props:["columnData","columnTitle","columnLink","columnLocation","columnSystem","columnStyle","columnVersion","columnIndex"],data:function(){return{}},methods:{inputFunc:function(){this.$emit("listenToChildEvent",this.columnTitle,this.columnIndex)},styleChange:function(){this.$emit("listenToChildEvent",this.columnTitle,this.columnIndex)},sub:function(){this.$emit("listenToChildSubEvent",this.columnData,this.columnIndex)}},created:function(){}}},37:function(t,e){},38:function(t,e){},42:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_class"},[n("Form",{attrs:{model:t.columnData,"label-width":120,inline:""}},[n("FormItem",{attrs:{label:"栏目标题:"}},[n("Input",{on:{input:t.sub},model:{value:t.columnData.itemTitle,callback:function(e){t.$set(t.columnData,"itemTitle",e)},expression:"columnData.itemTitle"}})],1),t._v(" "),n("br"),t._v(" "),n("FormItem",{attrs:{label:"栏目类型:"}},[n("Select",{on:{"on-change":t.sub},model:{value:t.columnData.itemType,callback:function(e){t.$set(t.columnData,"itemType",e)},expression:"columnData.itemType"}},[n("Option",{attrs:{value:"00"}},[t._v("详情")]),t._v(" "),n("Option",{attrs:{value:"01"}},[t._v("互动")]),t._v(" "),n("Option",{attrs:{value:"02"}},[t._v("推荐")]),t._v(" "),n("Option",{attrs:{value:"03"}},[t._v("贡献榜")]),t._v(" "),n("Option",{attrs:{value:"05"}},[t._v("视角")]),t._v(" "),n("Option",{attrs:{value:"04"}},[t._v("自定义")])],1)],1),t._v(" "),n("br"),t._v(" "),n("FormItem",{attrs:{label:"外部链接:"}},[n("Input",{on:{input:t.sub},model:{value:t.columnData.itemUrl,callback:function(e){t.$set(t.columnData,"itemUrl",e)},expression:"columnData.itemUrl"}})],1),t._v(" "),n("br"),t._v(" "),n("FormItem",{attrs:{label:"栏目位置:"}},[n("Input",{on:{input:t.sub},model:{value:t.columnData.isShow,callback:function(e){t.$set(t.columnData,"isShow",e)},expression:"columnData.isShow"}})],1),t._v(" "),n("br"),t._v(" "),n("FormItem",{attrs:{label:"显示版本:"}},[n("Select",{on:{"on-change":t.sub},model:{value:t.columnData.itemVersion,callback:function(e){t.$set(t.columnData,"itemVersion",e)},expression:"columnData.itemVersion"}},[n("Option",{attrs:{value:"all"}},[t._v("v1.0_v2.0")]),t._v(" "),n("Option",{attrs:{value:"new"}},[t._v("v2.0")]),t._v(" "),n("Option",{attrs:{value:"old"}},[t._v("v1.0")])],1)],1),t._v(" "),n("br"),t._v(" "),n("FormItem",{attrs:{label:"显示系统:"}},[n("Select",{on:{"on-change":t.sub},model:{value:t.columnData.itemOS,callback:function(e){t.$set(t.columnData,"itemOS",e)},expression:"columnData.itemOS"}},[n("Option",{attrs:{value:"Android_migu|Ios_migu"}},[t._v("Android_IOS")]),t._v(" "),n("Option",{attrs:{value:"Android_migu"}},[t._v("Android")]),t._v(" "),n("Option",{attrs:{value:"Ios_migu"}},[t._v("IOS")]),t._v(" "),n("Option",{attrs:{value:"null"}},[t._v("全部不显示")])],1)],1),t._v(" "),n("FormItem",{attrs:{label:"index:"}},[n("Input",{on:{input:t.sub},model:{value:t.columnIndex,callback:function(e){t.columnIndex=e},expression:"columnIndex"}})],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});