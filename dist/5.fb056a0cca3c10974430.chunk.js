webpackJsonp([5],{29:function(e,i,t){t(67),t(68);var o=t(12)(t(51),t(86),"data-v-3b2465d3",null);o.options.__file="D:\\idea_workspace\\363Tec\\363Tec-page\\vue\\src\\views\\layout\\livecontrolindex.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] livecontrolindex.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},51:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{pic0:!1,pic1:!0,pic2:!1,pic3:!1,theme1:"light",productID:111,pic1Radio:!0,timeRadio:!1,pic2Radio:!1,pic3Radio:!1,picModels:[this.pic1Radio,this.pic2Radio,this.pic3Radio],link1Radio:!1,MVIDRadio:!1,formItem:{input:"test",select:"test",radio:"male",checkbox:["标清","高清"],switch:!0,date:"",time:"",slider:[20,50],textarea:"",sel:"0",sel1:"00",sel2:"3",sel3:"2",checkbox1:["通知","明星榜"]},controlLcedit:"",controlAdedit:"",controlToLiveViewAngle:"",rankingPic:"",danmakuSend:"",danmakuIndex:"",danmakuDataPage:"",area:"",concertbaseinfo:{},liveHostPara:""}},methods:{picOneExchange:function(e,i){var t=this;0==i&&1==t.picModels[0]?(t.picModels[1]=!1,t.picModels[2]=!1,t.link1Radio=!1,t.MVIDRadio=!1,t.liveHostPara="02__"+e):1==i&&t.picModels[1]?(t.picModels[0]=!1,t.picModels[2]=!1,t.link1Radio=!1,t.MVIDRadio=!1,t.liveHostPara="02__"+e):2==i&&t.picModels[2]&&(t.picModels[1]=!1,t.picModels[0]=!1,t.link1Radio=!1,t.MVIDRadio=!1,t.liveHostPara="02__"+e)},timeExchange:function(){var e=this;e.timeRadio&&(e.pic1Radio=!1,e.pic2Radio=!1,e.pic3Radio=!1,e.link1Radio=!1,e.MVIDRadio=!1,e.liveHostPara="07")},picTwoExchange:function(){var e=this;e.pic2Radio&&(e.timeRadio=!1,e.pic1Radio=!1,e.pic3Radio=!1,e.link1Radio=!1,e.MVIDRadio=!1,e.liveHostPara="")},picThreeExchange:function(){var e=this;e.pic3Radio&&(e.timeRadio=!1,e.pic1Radio=!1,e.pic2Radio=!1,e.link1Radio=!1,e.MVIDRadio=!1,e.liveHostPara="")},linkOneExchange:function(){var e=this;e.link1Radio&&(e.timeRadio=!1,e.pic1Radio=!1,e.pic2Radio=!1,e.pic3Radio=!1,e.MVIDRadio=!1,e.liveHostPara="06")},MVIDExchange:function(){var e=this;e.MVIDRadio&&(e.timeRadio=!1,e.pic1Radio=!1,e.pic2Radio=!1,e.pic3Radio=!1,e.link1Radio=!1,e.liveHostPara="08")},subData:function(){var e=this;if(""==e.liveHostPara)return void e.$Message.info("什么都没有选中!",2);var i=/^\d+$/;if("06"==e.liveHostPara&&0==e.concertbaseinfo.refLink.trim().length)return void e.$Message.info("请先输入外链地址!",2);if(e.concertbaseinfo.refLink.trim().length>0&&!i.test(e.concertbaseinfo.linkWeight1)||e.concertbaseinfo.refLink2.trim.length>0&&!i.test(e.concertbaseinfo.linkWeight2))return void e.$Message.info("请输入正确的权重!",2);var t=null==e.concertbaseinfo.refLink?"":e.concertbaseinfo.refLink,o=null==e.concertbaseinfo.linkWeight1?"":e.concertbaseinfo.linkWeight1,a=null==e.concertbaseinfo.refLink2?"":e.concertbaseinfo.refLink2,n=null==e.concertbaseinfo.linkWeight2?"":e.concertbaseinfo.linkWeight2,c='{"linkData":[{"refLink":"'+t.trim()+'","linkWeight":"'+o+'"},{"refLink":"'+a.trim()+'","linkWeight":"'+n+'"}]}',s=null!=e.concertbaseinfo.liveshowID?e.concertbaseinfo.liveshowID:"",r=null!=e.concertbaseinfo.beginTime?e.concertbaseinfo.beginTime:"",l=null!=e.concertbaseinfo.endTime?e.concertbaseinfo.endTime:"";e.concertbaseinfo.liveshowID="07__"+s+"__"+r+"__"+l,e.concertbaseinfo.refLink="06__"+c;var d=null==e.concertbaseinfo.mvid?"":e.concertbaseinfo.mvid;e.concertbaseinfo.mvid="08__"+d,e.link1Radio&&(e.liveHostPara="06__"+c),e.timeRadio&&(e.liveHostPara="07__"+s+"__"+r+"__"+l),e.MVIDRadio&&(e.liveHostPara="08__"+d),e.$http.post(BASE+"/livehost/setlive.do",{resourceId:e.concertID,liveHostPara:e.liveHostPara},{emulateJSON:!0}).then(function(i){"000000"==i.body.data.code?(e.$Message.success("修改成功",2),setTimeout(function(){e.refresh()},500)):e.$Message.error("修改失败",2)}).catch(function(i){e.$Message.error("未知错误",2)}),e.refresh()},refresh:function(){var e=this;e.$http.post(BASE+"/livehost/index.do",{concertID:e.concertID},{emulateJSON:!0}).then(function(i){var t=i.body.data;"000000"==t.code?(e.concertbaseinfo=t.data.concertbaseinfo,e.concertbaseinfo.showType==e.concertbaseinfo.liveshowID?(e.timeRadio=!0,e.liveHostPara="07"):e.timeRadio=!1,e.concertbaseinfo.showType==e.concertbaseinfo.refLink?(e.link1Radio=!0,e.liveHostPara="06"):e.link1Radio=!1,e.concertbaseinfo.showType==e.concertbaseinfo.mvid?(e.MVIDRadio=!0,e.liveHostPara="08"):e.MVIDRadio=!1,e.concertbaseinfo.showType==e.concertbaseinfo.imageUrls[0]?e.pic1Radio=!0:e.pic1Radio=!1,e.concertbaseinfo.showType==e.concertbaseinfo.imageUrls[1]?e.pic2Radio=!0:e.pic2Radio=!1,e.concertbaseinfo.showType==e.concertbaseinfo.imageUrls[2]?e.pic3Radio=!0:e.pic3Radio=!1):e.$Message.error("获取数据失败",2)}).catch(function(i){e.$Message.error("查询发生错误",2)})}},created:function(){var e=this.$route.params.concertID,i=this.$route.params.concertName;this.concertID=e,this.concertName=i;var t=this;t.controlLcedit="/livehost/lcedit/"+this.concertID+"/"+this.concertName,t.controlAdedit="/livehost/adedit/"+this.concertID+"/"+this.concertName,t.controlToLiveViewAngle="/livehost/toLiveViewAngle/"+this.concertID+"/"+this.concertName,t.rankingPic="/livehost/rankingPic/"+this.concertID+"/"+this.concertName,t.danmakuSend="/importDanmaku/send/"+this.concertID+"/"+this.concertName,t.danmakuIndex="/importDanmaku/index/"+this.concertID+"/"+this.concertName,t.danmakuDataPage="/importDanmaku/data/"+this.concertID+"/"+this.concertName,t.area="/livehost/area/"+this.concertID+"/"+this.concertName,t.starBoardOperation="/livehost/starBoardOperation/"+this.concertID+"/"+this.concertName,t.$http.post(BASE+"/livehost/index.do",{concertID:t.concertID},{emulateJSON:!0}).then(function(e){var i=e.body.data;"000000"==i.code?(t.concertbaseinfo=i.data.concertbaseinfo,t.concertbaseinfo.showType==t.concertbaseinfo.liveshowID?(t.timeRadio=!0,t.liveHostPara="07"):t.timeRadio=!1,t.concertbaseinfo.showType==t.concertbaseinfo.refLink?(t.link1Radio=!0,t.liveHostPara="06"):t.link1Radio=!1,t.concertbaseinfo.showType==t.concertbaseinfo.mvid?(t.MVIDRadio=!0,t.liveHostPara="08"):t.MVIDRadio=!1,t.concertbaseinfo.showType==t.concertbaseinfo.imageUrls[0]?t.pic1Radio=!0:t.pic1Radio=!1,t.concertbaseinfo.showType==t.concertbaseinfo.imageUrls[1]?t.pic2Radio=!0:t.pic2Radio=!1,t.concertbaseinfo.showType==t.concertbaseinfo.imageUrls[2]?t.pic3Radio=!0:t.pic3Radio=!1):t.$Message.error("获取数据失败",2)}).catch(function(e){t.$Message.error("查询发生错误",2)});var o={};history.pushState(o,"主页","/liveshow/index.html")}}},67:function(e,i){},68:function(e,i){},86:function(e,i,t){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("Menu",{attrs:{mode:"horizontal",theme:e.theme1,"active-name":"1"}},[t("FONT",{staticClass:"font-class"},[e._v("\n\t\t\t\t\t基本信息\n\t\t\t\t")]),e._v(" "),t("font",{staticClass:"font-class1"},[e._v("演唱会id："+e._s(e.concertID))]),e._v(" "),t("font",{staticClass:"font-class1"},[e._v("演唱会名称："+e._s(e.concertName))])],1),e._v(" "),t("Menu",{attrs:{mode:"horizontal",theme:e.theme1,"active-name":"1"}},[t("FONT",{staticClass:"font-class"},[e._v("\n\t\t\t\t\t操作\n\t\t\t\t")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.controlLcedit}},[e._v("控制修改")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.controlAdedit}},[e._v("广告修改")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.controlToLiveViewAngle}},[e._v("直播视角")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.rankingPic}},[e._v("贡献榜快照")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.starBoardOperation}},[e._v("星光榜运营")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.danmakuSend}},[e._v("弹幕发送")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.danmakuIndex}},[e._v("弹幕送审")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.danmakuDataPage}},[e._v("互动数据")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:e.area}},[e._v("省份筛选")]),e._v(" "),t("router-link",{staticClass:"menu-a-class",attrs:{to:"/livehost/adlist"}},[e._v("回到直播控制主页")])],1),e._v(" "),t("br"),e._v(" "),t("font",{staticClass:"font-class1"},[e._v("\n\t\t\t\t\t产品ID："+e._s(e.concertbaseinfo.productID)+"\n\t\t\t")]),e._v(" "),t("Form",{attrs:{model:e.formItem,"label-width":120,inline:""}},[t("FormItem",{attrs:{label:"liveid:"}},[t("Input",{attrs:{placeholder:""},model:{value:e.concertbaseinfo.liveshowID,callback:function(i){e.$set(e.concertbaseinfo,"liveshowID",i)},expression:"concertbaseinfo.liveshowID"}})],1),e._v(" "),t("FormItem",{attrs:{label:"开始时间:"}},[t("Input",{attrs:{placeholder:""},model:{value:e.concertbaseinfo.beginTime,callback:function(i){e.$set(e.concertbaseinfo,"beginTime",i)},expression:"concertbaseinfo.beginTime"}})],1),e._v(" "),t("FormItem",{attrs:{label:"结束时间:"}},[t("Input",{attrs:{placeholder:""},model:{value:e.concertbaseinfo.endTime,callback:function(i){e.$set(e.concertbaseinfo,"endTime",i)},expression:"concertbaseinfo.endTime"}})],1),e._v(" "),t("Radio",{on:{"on-change":e.timeExchange},model:{value:e.timeRadio,callback:function(i){e.timeRadio=i},expression:"timeRadio"}}),e._v(" "),t("ul",e._l(e.concertbaseinfo.imageUrls,function(i,o){return t("li",[t("td",[e._v("图片"+e._s(o)+": "),t("img",{attrs:{src:"item",width:"300",id:"img10"}}),e._v(" "),t("Radio",{on:{"on-change":function(t){e.picOneExchange(i,o)}},model:{value:e.picModels[o],callback:function(i){e.$set(e.picModels,o,i)},expression:"picModels[index]"}})],1),e._v(" "),t("br")])}),0),e._v(" "),t("FormItem",{attrs:{label:"外链地址1:"}},[t("Input",{attrs:{placeholder:""},model:{value:e.concertbaseinfo.refLink,callback:function(i){e.$set(e.concertbaseinfo,"refLink",i)},expression:"concertbaseinfo.refLink"}})],1),e._v(" "),t("FormItem",{attrs:{label:"外链1权重:"}},[t("Input",{attrs:{placeholder:""},model:{value:e.concertbaseinfo.linkWeight1,callback:function(i){e.$set(e.concertbaseinfo,"linkWeight1",i)},expression:"concertbaseinfo.linkWeight1"}})],1),e._v(" "),t("Radio",{on:{"on-change":e.linkOneExchange},model:{value:e.link1Radio,callback:function(i){e.link1Radio=i},expression:"link1Radio"}}),e._v(" "),t("br"),e._v(" "),t("FormItem",{attrs:{label:"外链地址2:"}},[t("Input",{attrs:{placeholder:""},model:{value:e.concertbaseinfo.refLink2,callback:function(i){e.$set(e.concertbaseinfo,"refLink2",i)},expression:"concertbaseinfo.refLink2"}})],1),e._v(" "),t("FormItem",{attrs:{label:"外链2权重:"}},[t("Input",{attrs:{placeholder:""},model:{value:e.concertbaseinfo.linkWeight2,callback:function(i){e.$set(e.concertbaseinfo,"linkWeight2",i)},expression:"concertbaseinfo.linkWeight2"}})],1),e._v(" "),t("br"),e._v(" "),t("FormItem",{attrs:{label:"MVID:"}},[t("Input",{attrs:{placeholder:""},model:{value:e.concertbaseinfo.mvid,callback:function(i){e.$set(e.concertbaseinfo,"mvid",i)},expression:"concertbaseinfo.mvid"}})],1),e._v(" "),t("Radio",{on:{"on-change":e.MVIDExchange},model:{value:e.MVIDRadio,callback:function(i){e.MVIDRadio=i},expression:"MVIDRadio"}}),e._v(" "),t("br"),e._v(" "),t("hr"),e._v(" "),t("center",[t("Button",{staticClass:"sub-class",attrs:{type:"success"},on:{click:e.subData}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});