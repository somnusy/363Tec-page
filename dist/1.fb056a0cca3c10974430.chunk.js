webpackJsonp([1,10],{22:function(t,e,a){a(37),a(38);var o=a(12)(a(36),a(42),"data-v-3698eb11",null);o.options.__file="D:\\idea_workspace\\363Tec\\363Tec-page\\vue\\src\\views\\layout\\columnModel.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] columnModel.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},28:function(t,e,a){a(69),a(70);var o=a(12)(a(50),a(87),"data-v-41da3719",null);o.options.__file="D:\\idea_workspace\\363Tec\\363Tec-page\\vue\\src\\views\\layout\\livecontroledit.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] livecontroledit.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},35:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"actionUl",props:["conpath","concertID"],data:function(){return{}},methods:{},created:function(){}}},36:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"columnModel",props:["columnData","columnTitle","columnLink","columnLocation","columnSystem","columnStyle","columnVersion","columnIndex"],data:function(){return{}},methods:{inputFunc:function(){this.$emit("listenToChildEvent",this.columnTitle,this.columnIndex)},styleChange:function(){this.$emit("listenToChildEvent",this.columnTitle,this.columnIndex)},sub:function(){this.$emit("listenToChildSubEvent",this.columnData,this.columnIndex)}},created:function(){}}},37:function(t,e){},38:function(t,e){},39:function(t,e){},40:function(t,e){},41:function(t,e,a){a(39),a(40);var o=a(12)(a(35),a(43),"data-v-809d0e82",null);o.options.__file="D:\\idea_workspace\\363Tec\\363Tec-page\\vue\\src\\views\\layout\\actionUl.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] actionUl.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},42:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_class"},[a("Form",{attrs:{model:t.columnData,"label-width":120,inline:""}},[a("FormItem",{attrs:{label:"栏目标题:"}},[a("Input",{on:{input:t.sub},model:{value:t.columnData.itemTitle,callback:function(e){t.$set(t.columnData,"itemTitle",e)},expression:"columnData.itemTitle"}})],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"栏目类型:"}},[a("Select",{on:{"on-change":t.sub},model:{value:t.columnData.itemType,callback:function(e){t.$set(t.columnData,"itemType",e)},expression:"columnData.itemType"}},[a("Option",{attrs:{value:"00"}},[t._v("详情")]),t._v(" "),a("Option",{attrs:{value:"01"}},[t._v("互动")]),t._v(" "),a("Option",{attrs:{value:"02"}},[t._v("推荐")]),t._v(" "),a("Option",{attrs:{value:"03"}},[t._v("贡献榜")]),t._v(" "),a("Option",{attrs:{value:"05"}},[t._v("视角")]),t._v(" "),a("Option",{attrs:{value:"04"}},[t._v("自定义")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"外部链接:"}},[a("Input",{on:{input:t.sub},model:{value:t.columnData.itemUrl,callback:function(e){t.$set(t.columnData,"itemUrl",e)},expression:"columnData.itemUrl"}})],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"栏目位置:"}},[a("Input",{on:{input:t.sub},model:{value:t.columnData.isShow,callback:function(e){t.$set(t.columnData,"isShow",e)},expression:"columnData.isShow"}})],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"显示版本:"}},[a("Select",{on:{"on-change":t.sub},model:{value:t.columnData.itemVersion,callback:function(e){t.$set(t.columnData,"itemVersion",e)},expression:"columnData.itemVersion"}},[a("Option",{attrs:{value:"all"}},[t._v("v1.0_v2.0")]),t._v(" "),a("Option",{attrs:{value:"new"}},[t._v("v2.0")]),t._v(" "),a("Option",{attrs:{value:"old"}},[t._v("v1.0")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"显示系统:"}},[a("Select",{on:{"on-change":t.sub},model:{value:t.columnData.itemOS,callback:function(e){t.$set(t.columnData,"itemOS",e)},expression:"columnData.itemOS"}},[a("Option",{attrs:{value:"Android_migu|Ios_migu"}},[t._v("Android_IOS")]),t._v(" "),a("Option",{attrs:{value:"Android_migu"}},[t._v("Android")]),t._v(" "),a("Option",{attrs:{value:"Ios_migu"}},[t._v("IOS")]),t._v(" "),a("Option",{attrs:{value:"null"}},[t._v("全部不显示")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"index:"}},[a("Input",{on:{input:t.sub},model:{value:t.columnIndex,callback:function(e){t.columnIndex=e},expression:"columnIndex"}})],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},43:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",[a("li",{staticClass:"dropdown-header",attrs:{role:"presentation"}},[t._v("直播控制")]),t._v(" "),a("li",[a("a",{attrs:{href:["/livehost/lcedit.do?concertID="+t.concertID]}},[t._v("控制修改")])]),t._v(" "),a("li",[a("a",{attrs:{href:["/livehost/index.do?concertID="+t.concertID]}},[t._v("直播修改")])]),t._v(" "),a("li",[a("a",{attrs:{href:["/livehost/adedit.do?concertID="+t.concertID]}},[t._v("广告修改")])]),t._v(" "),a("li",[a("a",{attrs:{href:["/livehost/toLiveViewAngle.do?concertID="+t.concertID]}},[t._v("直播视角")])]),t._v(" "),a("li",[a("a",{attrs:{href:["/livehost/rankingPic.do?concertID="+t.concertID]}},[t._v("贡献榜快照")])]),t._v(" "),a("li",{staticClass:"divider"}),t._v(" "),a("li",{staticClass:"dropdown-header",attrs:{role:"presentation"}},[t._v("弹幕控制")]),t._v(" "),a("li",[a("a",{attrs:{href:["/importDanmaku/index.do?concertID="+t.concertID]}},[t._v("弹幕送审")])]),t._v(" "),a("li",[a("a",{attrs:{href:["/importDanmaku/send.do?concertID="+t.concertID]}},[t._v("弹幕发送")])]),t._v(" "),a("li",[a("a",{attrs:{href:["/importDanmaku/data.do?concertID="+t.concertID]}},[t._v("互动数据")])]),t._v(" "),a("li",{staticClass:"divider"}),t._v(" "),a("li",{staticClass:"dropdown-header",attrs:{role:"presentation"}},[t._v("区域")]),t._v(" "),a("li",[a("a",{attrs:{href:["/livehost/area.do?concertID="+t.concertID]}},[t._v("省份筛选")])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},50:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(41),l=a.n(o),n=a(22),r=a.n(n);e.default={components:{actionUl:l.a,columnModel:r.a},data:function(){return{concertID:"无演唱会ID",concertName:"无演唱会Name",formItem:{input:"test",select:"test",radio:"male",checkbox:["标清","高清"],switch:!0,date:"",time:"",slider:[20,50],textarea:"",sel:"0",sel1:"00",sel2:"3",sel3:"2",checkbox1:["通知","明星榜"]},items:[{title:"test",style:"00",link:"testlink",location:"testlocation",version:"all",system:"Ios_migu"}],controlIndex:"",controlAdedit:"",controlToLiveViewAngle:"",rankingPic:"",danmakuSend:"",danmakuIndex:"",danmakuDataPage:"",area:"",concertId2Name:{},liveControl:{starHitList:"0"},liveShowItem:[],starHitList:"1",totalInteraction:"-1",biaoqing:!0,liveRateFormats:["2","3","4"],liveRateFormat:"01234",liveRateFormat_default:"1",vrLimit:"1",starImgurl:{imgAddress:"",actionUrl:""},adsImgurl:{imgAddress:"",actionUrl:""},playerDanmakuDefaultStatus:"0",danmakuReceiveStatus:"0",danmakuSendStatus:"0",danmakuPropStatus:"0",functional:[],back:""}},methods:{addColumn:function(){var t=this;t.liveShowItem.push({liveid:t.concertID})},remove:function(t){var e=this,a=e.liveShowItem.indexOf(t);e.liveShowItem.splice(a,1)},listenTochild:function(t,e){this.liveShowItem[e].title=t},starHitListChange:function(t){var e=this;e.liveControl.starHitList=parseInt(e.starHitList)},totalInteractionChange:function(t){var e=this;e.liveControl.totalInteraction=parseInt(e.totalInteraction)},liveRateFormatChange:function(){var t=this;alert(t.liveControl.liveRateFormat)},test:function(){for(var t=this,e=t.liveShowItem.length,a=[],o=0;o<e;o++)a.push(t.liveShowItem[o].itemId);alert(a)},vrLimitChange:function(t){var e=this;e.liveControl.vrLimit=parseInt(e.vrLimit)},playerDanmakuDefaultStatusChange:function(t){var e=this;e.liveControl.playerDanmakuDefaultStatus=parseInt(e.playerDanmakuDefaultStatus)},danmakuReceiveStatusChange:function(t){var e=this;e.liveControl.danmakuReceiveStatus=parseInt(e.danmakuReceiveStatus)},danmakuSendStatusChange:function(t){var e=this;e.liveControl.danmakuSendStatus=parseInt(e.danmakuSendStatus)},danmakuPropStatusChange:function(t){var e=this;e.liveControl.danmakuPropStatus=parseInt(e.danmakuPropStatus)},acceptData:function(t,e){this.liveShowItem[e]=t},subData:function(){for(var t=this,e=t.liveRateFormats.length,a="",o=0;o<e;o++)a+=t.liveRateFormats[o];a=a+"_"+t.back;for(var l=t.liveShowItem.length,n=[],r=0;r<l;r++)n.push(t.liveShowItem[r].itemId);t.$http.post(BASE+"/livehost/setlc",{resourceId:t.concertID,showItems:JSON.stringify(t.liveShowItem),liveRateFormat:JSON.stringify(t.liveRateFormats),liveRateFormat_default:t.liveRateFormat_default,functional:JSON.stringify(t.functional),hotOn:t.liveControl.hotOn,isDanmukuOn:t.liveControl.isDanmukuOn,control_focus_base:t.liveControl.liveFocusBase,control_focus_ratio:t.liveControl.liveFocusratio,control_sub_num:t.liveControl.subNum,control_status:t.liveControl.liveStatus,control_text:t.liveControl.liveTxt,vrLiveid:t.liveControl.vrLiveid,standards:t.liveControl.standards,control_trySee:t.liveControl.trySee,control_textNew:t.liveControl.text,control_Url:t.liveControl.actionUrl,control_textHead:t.liveControl.textHead,starHitList:t.liveControl.starHitList,control_rankUrl:t.liveControl.rankUrl,totalInteraction:t.liveControl.totalInteraction,vrLimit:t.liveControl.vrLimit,playerDanmakuDefaultStatus:t.liveControl.playerDanmakuDefaultStatus,danmakuReceiveStatus:t.liveControl.danmakuReceiveStatus,danmakuSendStatus:t.liveControl.danmakuSendStatus,danmakuPropStatus:t.liveControl.danmakuPropStatus,show_starPic:t.starImgurl.imgAddress,show_starUrl:t.starImgurl.actionUrl,show_adsPic:t.adsImgurl.imgAddress,show_adsUrl:t.adsImgurl.actionUrl},{emulateJSON:!0}).then(function(e){"000000"==e.body.data.code?(t.$Message.success("修改成功",2),setTimeout(function(){t.refresh()},1e3)):t.$Message.error("修改失败",2)}).catch(function(e){t.$Message.error("未知错误",2)})},refresh:function(){var t=this;t.$http.get(BASE+"/livehost/getLiveControlData?concertID="+routerParamID).then(function(e){var a=e.body.data;if("000000"==a.code){t.concertId2Name=a.data.concertId2Name,t.liveControl=a.data.liveControl,t.liveShowItem=a.data.liveShowItem,t.starHitList=a.data.liveControl.starHitList+"",t.totalInteraction=a.data.liveControl.totalInteraction+"";var o=[],l=a.data.liveControl.liveRateFormat,n=l.split("_"),r=n[0];t.back=n[1];for(var s=r.length,i=0;i<s;i++)o.push(r.charAt(i));t.liveRateFormats=o,t.liveRateFormat_default=a.data.liveRateFormat_default,t.liveRateFormat=a.data.liveRateFormat,t.vrLimit=a.data.liveControl.vrLimit+"",t.playerDanmakuDefaultStatus=a.data.liveControl.playerDanmakuDefaultStatus+"",t.danmakuReceiveStatus=a.data.liveControl.danmakuReceiveStatus+"",t.danmakuSendStatus=a.data.liveControl.danmakuSendStatus+"",t.danmakuPropStatus=a.data.liveControl.danmakuPropStatus+"";var u=[],c=a.data.liveControl.functional;c.search("1")>-1&&u.push("1"),c.search("2")>-1&&u.push("2"),c.search("3")>-1&&u.push("3"),c.search("4")>-1&&u.push("4"),c.search("5")>-1&&u.push("5"),c.search("6")>-1&&u.push("6"),t.functional=u,t.liveShowItem=a.data.liveShowItem,null!=a.data.starImgurl&&(t.starImgurl=a.data.starImgurl),null!=a.data.adsImgurl&&(t.adsImgurl=a.data.adsImgurl)}else t.$Message.error("获取数据失败",2)}).catch(function(e){t.$Message.error("查询发生错误",2)})}},created:function(){var t=this.$route.params.concertID,e=this.$route.params.concertName;this.concertID=t,this.concertName=e;var a=this;a.controlIndex="/livehost/index/"+this.concertID+"/"+this.concertName,a.controlAdedit="/livehost/adedit/"+this.concertID+"/"+this.concertName,a.controlToLiveViewAngle="/livehost/toLiveViewAngle/"+this.concertID+"/"+this.concertName,a.rankingPic="/livehost/rankingPic/"+this.concertID+"/"+this.concertName,a.danmakuSend="/importDanmaku/send/"+this.concertID+"/"+this.concertName,a.danmakuIndex="/importDanmaku/index/"+this.concertID+"/"+this.concertName,a.danmakuDataPage="/importDanmaku/data/"+this.concertID+"/"+this.concertName,a.area="/livehost/area/"+this.concertID+"/"+this.concertName,a.starBoardOperation="/livehost/starBoardOperation/"+this.concertID+"/"+this.concertName,a.$http.get(BASE+"/livehost/getLiveControlData?concertID="+t).then(function(t){var e=t.body.data;if("000000"==e.code){a.concertId2Name=e.data.concertId2Name,a.liveControl=e.data.liveControl,a.liveShowItem=e.data.liveShowItem,a.starHitList=e.data.liveControl.starHitList+"",a.totalInteraction=e.data.liveControl.totalInteraction+"";var o=[],l=e.data.liveControl.liveRateFormat,n=l.split("_"),r=n[0];a.back=n[1];for(var s=r.length,i=0;i<s;i++)o.push(r.charAt(i));a.liveRateFormats=o,a.liveRateFormat_default=e.data.liveRateFormat_default,a.liveRateFormat=e.data.liveRateFormat,a.vrLimit=e.data.liveControl.vrLimit+"",a.playerDanmakuDefaultStatus=e.data.liveControl.playerDanmakuDefaultStatus+"",a.danmakuReceiveStatus=e.data.liveControl.danmakuReceiveStatus+"",a.danmakuSendStatus=e.data.liveControl.danmakuSendStatus+"",a.danmakuPropStatus=e.data.liveControl.danmakuPropStatus+"";var u=[],c=e.data.liveControl.functional;c.search("1")>-1&&u.push("1"),c.search("2")>-1&&u.push("2"),c.search("3")>-1&&u.push("3"),c.search("4")>-1&&u.push("4"),c.search("5")>-1&&u.push("5"),c.search("6")>-1&&u.push("6"),a.functional=u,a.liveShowItem=e.data.liveShowItem,null!=e.data.starImgurl&&(a.starImgurl=e.data.starImgurl),null!=e.data.adsImgurl&&(a.adsImgurl=e.data.adsImgurl)}else a.$Message.error("获取数据失败",2)}).catch(function(t){a.$Message.error("查询发生错误",2)});var o={};history.pushState(o,"主页","/liveshow/index.html")}}},69:function(t,e){},70:function(t,e){},87:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Menu",{attrs:{mode:"horizontal",theme:t.theme1,"active-name":"1"}},[a("FONT",{staticClass:"font-class"},[t._v("\n\t\t\t\t\t基本信息\n\t\t\t\t")]),t._v(" "),a("font",{staticClass:"font-class1"},[t._v("演唱会id："+t._s(t.concertID))]),t._v(" "),a("font",{staticClass:"font-class1"},[t._v("演唱会名称："+t._s(t.concertName))])],1),t._v(" "),a("Menu",{attrs:{mode:"horizontal",theme:t.theme1,"active-name":"1"}},[a("FONT",{staticClass:"font-class"},[t._v("\n\t\t\t\t\t操作\n\t\t\t\t")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.controlIndex}},[t._v("直播修改")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.controlAdedit}},[t._v("广告修改")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.controlToLiveViewAngle}},[t._v("直播视角")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.rankingPic}},[t._v("贡献榜快照")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.starBoardOperation}},[t._v("星光榜运营")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.danmakuSend}},[t._v("弹幕发送")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.danmakuIndex}},[t._v("弹幕送审")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.danmakuDataPage}},[t._v("互动数据")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:t.area}},[t._v("省份筛选")]),t._v(" "),a("router-link",{staticClass:"menu-a-class",attrs:{to:"/livehost/adlist"}},[t._v("回到直播控制主页")])],1),t._v(" "),a("Form",{attrs:{model:t.formItem,"label-width":120,inline:""}},[a("fieldset",[a("legend",{staticClass:"control-label col-sm-2 no-padding-right"},[a("h4",[t._v("直播控制参数")])]),t._v(" "),a("FormItem",{attrs:{label:"老版公告内容:"}},[a("Input",{attrs:{placeholder:"请输入老板公告内容"},model:{value:t.liveControl.liveTxt,callback:function(e){t.$set(t.liveControl,"liveTxt",e)},expression:"liveControl.liveTxt"}})],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"新版公告内容:"}},[a("Input",{model:{value:t.liveControl.text,callback:function(e){t.$set(t.liveControl,"text",e)},expression:"liveControl.text"}})],1),t._v(" "),a("FormItem",{attrs:{label:"公告链接:"}},[a("Input",{model:{value:t.liveControl.actionUrl,callback:function(e){t.$set(t.liveControl,"actionUrl",e)},expression:"liveControl.actionUrl"}})],1),t._v(" "),a("FormItem",{attrs:{label:"公告头:"}},[a("Input",{model:{value:t.liveControl.textHead,callback:function(e){t.$set(t.liveControl,"textHead",e)},expression:"liveControl.textHead"}})],1),t._v(" "),a("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #0066CC"}}),t._v(" "),a("FormItem",{attrs:{label:"关注基数:"}},[a("Input",{model:{value:t.liveControl.liveFocusBase,callback:function(e){t.$set(t.liveControl,"liveFocusBase",e)},expression:"liveControl.liveFocusBase"}})],1),t._v(" "),a("FormItem",{attrs:{label:"关注系数:"}},[a("Input",{model:{value:t.liveControl.liveFocusratio,callback:function(e){t.$set(t.liveControl,"liveFocusratio",e)},expression:"liveControl.liveFocusratio"}})],1),t._v(" "),a("FormItem",{attrs:{label:"预约人数:"}},[a("Input",{model:{value:t.liveControl.subNum,callback:function(e){t.$set(t.liveControl,"subNum",e)},expression:"liveControl.subNum"}})],1),t._v(" "),a("FormItem",{attrs:{label:"试看时长:"}},[a("Input",{model:{value:t.liveControl.trySee,callback:function(e){t.$set(t.liveControl,"trySee",e)},expression:"liveControl.trySee"}})],1),t._v(" "),a("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #0066CC"}}),t._v(" "),a("FormItem",{attrs:{label:"排行榜链接:"}},[a("Input",{model:{value:t.liveControl.rankUrl,callback:function(e){t.$set(t.liveControl,"rankUrl",e)},expression:"liveControl.rankUrl"}})],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"明星打榜:"}},[a("Select",{on:{"on-change":function(e){t.starHitListChange(t.value)}},model:{value:t.starHitList,callback:function(e){t.starHitList=e},expression:"starHitList"}},[a("Option",{attrs:{value:"1"}},[t._v("开")]),t._v(" "),a("Option",{attrs:{value:"0"}},[t._v("关")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"互动总数:"}},[a("Select",{on:{"on-change":function(e){t.totalInteractionChange(t.value)}},model:{value:t.totalInteraction,callback:function(e){t.totalInteraction=e},expression:"totalInteraction"}},[a("Option",{attrs:{value:"0"}},[t._v("开")]),t._v(" "),a("Option",{attrs:{value:"-1"}},[t._v("关")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"直播状态:"}},[a("Select",{model:{value:t.liveControl.liveStatus,callback:function(e){t.$set(t.liveControl,"liveStatus",e)},expression:"liveControl.liveStatus"}},[a("Option",{attrs:{value:"01"}},[t._v("直播预告")]),t._v(" "),a("Option",{attrs:{value:"00"}},[t._v("直播进行中")]),t._v(" "),a("Option",{attrs:{value:"02"}},[t._v("直播回放")]),t._v(" "),a("Option",{attrs:{value:"03"}},[t._v("直播已结束")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"弹幕状态:"}},[a("Select",{model:{value:t.liveControl.isDanmukuOn,callback:function(e){t.$set(t.liveControl,"isDanmukuOn",e)},expression:"liveControl.isDanmukuOn"}},[a("Option",{attrs:{value:"00"}},[t._v("允许发弹幕")]),t._v(" "),a("Option",{attrs:{value:"01"}},[t._v("不允许发弹幕")]),t._v(" "),a("Option",{attrs:{value:"02"}},[t._v("隐藏弹幕功能")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"默认栏目:"}},[a("Select",{model:{value:t.liveControl.hotOn,callback:function(e){t.$set(t.liveControl,"hotOn",e)},expression:"liveControl.hotOn"}},[a("Option",{attrs:{value:"00"}},[t._v("详情")]),t._v(" "),a("Option",{attrs:{value:"01"}},[t._v("互动")]),t._v(" "),a("Option",{attrs:{value:"02"}},[t._v("推荐")]),t._v(" "),a("Option",{attrs:{value:"03"}},[t._v("贡献榜")]),t._v(" "),a("Option",{attrs:{value:"05"}},[t._v("视角")]),t._v(" "),a("Option",{attrs:{value:"04"}},[t._v("自定义")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"支持码率:"}},[a("CheckboxGroup",{model:{value:t.liveRateFormats,callback:function(e){t.liveRateFormats=e},expression:"liveRateFormats"}},[a("Checkbox",{attrs:{label:"2"}},[t._v("标清")]),t._v(" "),a("Checkbox",{attrs:{label:"3"}},[t._v("高清")]),t._v(" "),a("Checkbox",{attrs:{label:"4"}},[t._v("超清")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"默认码率:"}},[a("Select",{model:{value:t.liveRateFormat_default,callback:function(e){t.liveRateFormat_default=e},expression:"liveRateFormat_default"}},[a("Option",{attrs:{value:"2"}},[t._v("标清")]),t._v(" "),a("Option",{attrs:{value:"3"}},[t._v("高清")]),t._v(" "),a("Option",{attrs:{value:"4"}},[t._v("超清")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"VRLiveID:"}},[a("Input",{model:{value:t.liveControl.vrLiveid,callback:function(e){t.$set(t.liveControl,"vrLiveid",e)},expression:"liveControl.vrLiveid"}})],1),t._v(" "),a("FormItem",{attrs:{label:"VR制式:"}},[a("Select",{staticStyle:{width:"200px"},model:{value:t.liveControl.standards,callback:function(e){t.$set(t.liveControl,"standards",e)},expression:"liveControl.standards"}},[a("Option",{attrs:{value:"2"}},[t._v("无")]),t._v(" "),a("Option",{attrs:{value:"0"}},[t._v("2D")]),t._v(" "),a("Option",{attrs:{value:"1"}},[t._v("3D（左右分屏）")]),t._v(" "),a("Option",{attrs:{value:"3"}},[t._v("360度全景")]),t._v(" "),a("Option",{attrs:{value:"4"}},[t._v("360度全景（左右分屏）")]),t._v(" "),a("Option",{attrs:{value:"5"}},[t._v("360度全景（上下分屏）")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"VR控制:"}},[a("Select",{on:{"on-change":function(e){t.vrLimitChange(t.value)}},model:{value:t.vrLimit,callback:function(e){t.vrLimit=e},expression:"vrLimit"}},[a("Option",{attrs:{value:"0"}},[t._v("通用可看")]),t._v(" "),a("Option",{attrs:{value:"2"}},[t._v("VIP可看")])],1)],1)],1),t._v(" "),a("fieldset",[a("legend",{staticClass:"control-label col-sm-2 no-padding-right"},[a("h4",[t._v("明星榜&营销广告")])]),t._v(" "),a("FormItem",{attrs:{label:"明星榜图片:"}},[a("Input",{model:{value:t.starImgurl.imgAddress,callback:function(e){t.$set(t.starImgurl,"imgAddress",e)},expression:"starImgurl.imgAddress"}})],1),t._v(" "),a("FormItem",{attrs:{label:"明星榜链接:"}},[a("Input",{model:{value:t.starImgurl.actionUrl,callback:function(e){t.$set(t.starImgurl,"actionUrl",e)},expression:"starImgurl.actionUrl"}})],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"营销广告图片:"}},[a("Input",{model:{value:t.adsImgurl.imgAddress,callback:function(e){t.$set(t.adsImgurl,"imgAddress",e)},expression:"adsImgurl.imgAddress"}})],1),t._v(" "),a("FormItem",{attrs:{label:"营销广告链接:"}},[a("Input",{model:{value:t.adsImgurl.actionUrl,callback:function(e){t.$set(t.adsImgurl,"actionUrl",e)},expression:"adsImgurl.actionUrl"}})],1)],1),t._v(" "),a("fieldset",[a("legend",{staticClass:"control-label col-sm-2 no-padding-right"},[a("h4",[t._v("弹幕控制")])]),t._v(" "),a("FormItem",{attrs:{label:"用户弹幕默认开关:"}},[a("Select",{on:{"on-change":function(e){t.playerDanmakuDefaultStatusChange(t.value)}},model:{value:t.playerDanmakuDefaultStatus,callback:function(e){t.playerDanmakuDefaultStatus=e},expression:"playerDanmakuDefaultStatus"}},[a("Option",{attrs:{value:"0"}},[t._v(" 关闭 ")]),t._v(" "),a("Option",{attrs:{value:"1",selected:""}},[t._v(" 开启 ")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"是否开启接收弹幕:"}},[a("Select",{on:{"on-change":function(e){t.danmakuReceiveStatusChange(t.value)}},model:{value:t.danmakuReceiveStatus,callback:function(e){t.danmakuReceiveStatus=e},expression:"danmakuReceiveStatus"}},[a("Option",{attrs:{value:"0"}},[t._v(" 关闭 ")]),t._v(" "),a("Option",{attrs:{value:"1",selected:""}},[t._v(" 开启 ")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"发送弹幕总开关值:"}},[a("Select",{on:{"on-change":function(e){t.danmakuSendStatusChange(t.value)}},model:{value:t.danmakuSendStatus,callback:function(e){t.danmakuSendStatus=e},expression:"danmakuSendStatus"}},[a("Option",{attrs:{value:"0"}},[t._v(" 开启但是假发送 ")]),t._v(" "),a("Option",{attrs:{value:"1",selected:""}},[t._v(" 开启且正常发送 ")])],1)],1),t._v(" "),a("br"),t._v(" "),a("FormItem",{attrs:{label:"道具礼物显示开关:"}},[a("Select",{on:{"on-change":function(e){t.danmakuPropStatusChange(t.value)}},model:{value:t.danmakuPropStatus,callback:function(e){t.danmakuPropStatus=e},expression:"danmakuPropStatus"}},[a("Option",{attrs:{value:"0"}},[t._v(" 关闭 ")]),t._v(" "),a("Option",{attrs:{value:"1",selected:""}},[t._v(" 开启 ")])],1)],1)],1),t._v(" "),a("fieldset",[a("legend",{staticClass:"control-label col-sm-2 no-padding-right"},[a("h4",[t._v("互动展示控制")])]),t._v(" "),a("FormItem",[a("CheckboxGroup",{model:{value:t.functional,callback:function(e){t.functional=e},expression:"functional"}},[a("Checkbox",{attrs:{label:"1"}},[t._v("通知")]),t._v(" "),a("Checkbox",{attrs:{label:"2"}},[t._v("贡献榜")]),t._v(" "),a("Checkbox",{attrs:{label:"3"}},[t._v("明星榜")]),t._v(" "),a("Checkbox",{attrs:{label:"4"}},[t._v("活动入口")]),t._v(" "),a("Checkbox",{attrs:{label:"5"}},[t._v("道具赠送")]),t._v(" "),a("Checkbox",{attrs:{label:"6"}},[t._v("热词弹幕")])],1)],1)],1),t._v(" "),a("fieldset",[a("legend",{staticClass:"control-label col-sm-2 no-padding-right"},[a("h4",[t._v("直播tab")])]),t._v(" "),a("ul",t._l(t.liveShowItem,function(e,o){return a("li",[a("columnModel",{attrs:{columnData:e,columnTitle:e.itemTitle,columnStyle:e.itemType,columnLink:e.itemUrl,columnLocation:e.isShow,columnVersion:e.itemVersion,columnSystem:e.itemOS,columnIndex:o},on:{listenToChildEvent:t.listenTochild,listenToChildSubEvent:t.acceptData}}),t._v(" "),a("Button",{staticClass:"sub-class",attrs:{type:"error"},on:{click:function(a){t.remove(e)}}},[t._v("删除栏目")]),t._v(" "),a("hr"),t._v(" "),a("font",[t._v(t._s(e.title))])],1)}),0),t._v(" "),a("center",[a("Button",{staticClass:"sub-class",attrs:{type:"success"},on:{click:t.addColumn}},[t._v("添加栏目")])],1)],1),t._v(" "),a("br"),a("br"),t._v(" "),a("center",[a("Button",{staticClass:"sub-class",attrs:{type:"success"},on:{click:t.subData}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});