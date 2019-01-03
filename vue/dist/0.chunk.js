webpackJsonp([0],{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'actionUl',
	props: ["conpath", "concertID"],

	data: function data() {
		return {};
	},

	methods: {},
	created: function created() {}
});

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)
__webpack_require__(39)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-809d0e82",
  /* cssModules */
  null
)
Component.options.__file = "D:\\idea_workspace\\MIGUM3.0\\liveshow-admin-config\\20180927\\liveshow-admin-web\\vue\\src\\views\\layout\\actionUl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] actionUl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-809d0e82", Component.options)
  } else {
    hotAPI.reload("data-v-809d0e82", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', [_c('li', {
    staticClass: "dropdown-header",
    attrs: {
      "role": "presentation"
    }
  }, [_vm._v("直播控制")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/livehost/lcedit.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("控制修改")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/livehost/index.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("直播修改")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/livehost/adedit.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("广告修改")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/livehost/toLiveViewAngle.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("直播视角")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/livehost/rankingPic.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("贡献榜快照")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', {
    staticClass: "dropdown-header",
    attrs: {
      "role": "presentation"
    }
  }, [_vm._v("弹幕控制")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/importDanmaku/index.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("弹幕送审")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/importDanmaku/send.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("弹幕发送")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/importDanmaku/data.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("互动数据")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', {
    staticClass: "dropdown-header",
    attrs: {
      "role": "presentation"
    }
  }, [_vm._v("区域")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": ['/livehost/area.do?concertID=' + _vm.concertID]
    }
  }, [_vm._v("省份筛选")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-809d0e82", module.exports)
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionUl_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionUl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__actionUl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		actionUl: __WEBPACK_IMPORTED_MODULE_0__actionUl_vue___default.a
	},
	data: function data() {
		return {
			tabSelect: '0',
			tmp: 0,
			tabselectTishi: false,
			msg: "1",
			theme1: 'light',
			tabValue: '开启',
			tb_concert_colums: [{
				title: "演唱会ID",
				key: "concertId",
				align: 'center',
				width: 80
			}, {
				title: "演唱会名称",
				key: "concertName",
				align: 'center'
			}, {
				title: "频道",
				key: "channelName",
				align: 'center'
			}, {
				title: '权重',
				key: 'weight',
				align: 'center'
			}, {
				title: '视频流ID',
				key: 'liveShowId',
				align: 'center'
			}, {
				title: '关联栏目',
				key: 'relationColumnId',
				align: 'center'
			}, {
				title: '更新时间',
				key: 'insertTimeStr',
				align: 'center'
			}, {
				title: '上线状态',
				key: 'test',
				align: 'center'
			}, {
				title: '操作',
				key: 'action',
				align: 'center',
				render: function render(h, params) {
					var concertID = params.row.concertId;
					var concertName = params.row.concertName;

					var word = "请选择";

					var icon = h('Icon', {
						type: "arrow-down-b"
					});
					var a = h('a', {}, [word, icon]);

					var a1 = h('router-link', {
						//href和src需要用attrs指定
						attrs: { to: '/livehost/lcedit/' + concertID + '/' + concertName }
						//props: { href: '/livehost/lcedit.do?concertID='+concertID }
					}, "控制修改");

					var menu1 = h('DropdownItem', {}, [a1]);

					var a2 = h('router-link', {
						attrs: { to: '/livehost/index/' + concertID + '/' + concertName }
					}, "直播修改");

					var menu2 = h('DropdownItem', {}, [a2]);

					var a3 = h('router-link', {
						attrs: { to: '/livehost/adedit/' + concertID + '/' + concertName }
					}, "广告修改");

					var menu3 = h('DropdownItem', {}, [a3]);

					var a4 = h('router-link', {
						attrs: { to: '/livehost/toLiveViewAngle/' + concertID + '/' + concertName }
					}, "直播视角");

					var menu4 = h('DropdownItem', {}, [a4]);

					var a5 = h('router-link', {
						attrs: { to: '/livehost/rankingPic/' + concertID + '/' + concertName }
					}, "贡献榜快照");

					var menu5 = h('DropdownItem', {}, [a5]);

					var a6 = h('router-link', {
						attrs: { to: '/importDanmaku/index/' + concertID + '/' + concertName }
					}, "弹幕送审");

					var menu6 = h('DropdownItem', {}, [a6]);

					var a7 = h('router-link', {
						attrs: { to: '/importDanmaku/send/' + concertID + '/' + concertName }
					}, "弹幕发送");

					var menu7 = h('DropdownItem', {}, [a7]);

					var a8 = h('router-link', {
						attrs: { to: '/importDanmaku/data/' + concertID + '/' + concertName }
					}, "互动数据");

					var menu8 = h('DropdownItem', {}, [a8]);

					var a9 = h('router-link', {
						attrs: { to: '/livehost/area/' + concertID + '/' + concertName }
					}, "省份筛选");

					var menu9 = h('DropdownItem', {}, [a9]);

					var a10 = h('router-link', {
						attrs: { to: '/livehost/starBoardOperation/' + concertID + '/' + concertName }
					}, "星光榜运营");

					var menu10 = h('DropdownItem', {}, [a10]);

					var p = h('DropdownMenu', {
						slot: 'list'
					}, ["直播控制", menu1, menu2, menu3, menu4, menu5, menu10, "弹幕控制", menu6, menu7, menu8, "区域", menu9]);
					return h('Dropdown', [a, p]);
				}
			}],
			tb_concert_data: [
				// {
				// 	concertId:1,
				// 	concertName:'test',
				// 	channelName:'tset',
				// 	type:'test',
				// 	showtime:'test',
				// 	weight:'test',
				// 	liveShowId:'test',
				// 	relationColumnId:'1',
				// 	test:'1',
				// 	inserttime:1,
				// 	insertTimeStr:'test'
				// }
			]
		};
	},

	methods: {
		tabSelectChanges: function tabSelectChanges(value) {
			var v = this;
			v.tmp++;
			if (v.tmp > 0) {
				v.tabselectTishi = true;
			}
		},
		subTabSel: function subTabSel() {
			var v = this;
			v.$http.post("/json" + "/livehost/allswith", { swith: v.tabSelect }, { emulateJSON: true }).then(function (resp) {
				var data = resp.body.data;
				// v.checkPermission(data);
				if (data.code == "000000") {
					v.$Message.success("修改成功", 2);
				} else {
					v.$Message.error("修改失败", 2);
				}
			}).catch(function (resp) {
				v.$Message.error("未知错误", 2);
			});
			v.tabselectTishi = false;
		},
		searchData: function searchData() {
			var v = this;
			if (v.value14) {
				v.$http.post("/json" + "/livehost/getAdlist", { concertName: '%' + v.value14 + '%' }, { emulateJSON: true }).then(function (resp) {
					var data = resp.body.data;
					// v.checkPermission(data);
					if (data.code == "000000") {
						v.tb_concert_data = data.data;
					} else {
						v.$Message.error("获取数据失败", 2);
					}
				}).catch(function (resp) {
					v.$Message.error("查询发生错误", 2);
				});
			} else {
				v.$Message.error("请填写查询条件", 2);
			}
		},
		checkPermission: function checkPermission(data) {
			// alert(JSON.stringify(data));
			// 需要跳转页面
			//return;
			var v = this;
			var token = v.getCookie("token");
			if (token != "undefined" && token != "") {} else {
				var checkCode = data.code;
				var loginUrl = data.url;
				if (checkCode == "555555") {
					window.location.href = loginUrl;
				}
			}
		},

		//设置cookie
		setCookie: function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			var expires = "expires=" + d.toUTCString();
			console.info(cname + "=" + cvalue + "; " + expires);
			document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
			console.info(document.cookie);
		},
		//获取cookie
		getCookie: function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
			}
			return "";
		},
		//清除cookie
		clearCookie: function clearCookie(cname) {
			this.setCookie(cname, "", -1);
		},
		getToken: function getToken() {
			var v = this;
			var url = document.referrer;
			var token = url.split('=')[1];
			//alert(token);
			var undefined = void 0;
			if (token != undefined) {
				v.setCookie("token", token, 1);
			}
			// else {
			//     v.clearCookie("token");
			// }
		}
	},
	created: function created() {
		// 取到路由带过来的参数
		var routerParams = this.$route.params.concertId;
		// 将数据放在当前组件的数据内
		this.msg = routerParams;
		var v = this;
		// v.getToken();
		v.$http.post("/json" + "/livehost/getAdlist", { concertName: null }, { emulateJSON: true }).then(function (resp) {
			var data = resp.body.data;
			// v.checkPermission(data);
			if (data.code == "000000") {
				v.tb_concert_data = data.data;
			} else {
				v.$Message.error("获取数据失败", 2);
			}
		}).catch(function (resp) {
			v.$Message.error("查询发生错误", 2);
		});
		//互动table开关初始值
		v.$http.post("/json" + "/livehost/getDanmuAllSwitch").then(function (resp) {
			var data = resp.body.data;
			// v.checkPermission(data);
			if (data.code == "000000") {
				if (data.data != null) {
					if (data.data) {
						v.tabSelect = '1';
					} else {
						v.tabSelect = '0';
					}
				}
			} else {
				v.$Message.error("获取数据失败", 2);
			}
		}).catch(function (resp) {
			v.$Message.error("查询发生错误", 2);
		});

		/*let stateObject = {};
  let title = "主页";
  let newUrl = "/liveshow/index.html";
  history.pushState(stateObject,title,newUrl);*/
	}
});

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(72)
__webpack_require__(73)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  "data-v-5f34d5da",
  /* cssModules */
  null
)
Component.options.__file = "D:\\idea_workspace\\MIGUM3.0\\liveshow-admin-config\\20180927\\liveshow-admin-web\\vue\\src\\views\\layout\\adlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] adlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f34d5da", Component.options)
  } else {
    hotAPI.reload("data-v-5f34d5da", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": _vm.theme1,
      "active-name": "1"
    }
  }, [_c('FONT', {
    staticClass: "font-class"
  }, [_vm._v("\n\t\t\t\t咪咕音乐后台管理页面\n\t\t\t")])], 1), _vm._v(" "), _c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": _vm.theme1,
      "active-name": "1"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "placeholder": "关键字查询",
      "clearable": ""
    },
    model: {
      value: (_vm.value14),
      callback: function($$v) {
        _vm.value14 = $$v
      },
      expression: "value14"
    }
  }), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "shape": "circle",
      "icon": "ios-search"
    },
    on: {
      "click": _vm.searchData
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tabSpanCls"
  }, [_vm._v("互动TAB开关\n\t        \t"), _c('Select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": _vm.tabValue
    },
    on: {
      "on-change": function($event) {
        _vm.tabSelectChanges(_vm.value)
      }
    },
    model: {
      value: (_vm.tabSelect),
      callback: function($$v) {
        _vm.tabSelect = $$v
      },
      expression: "tabSelect"
    }
  }, [_c('Option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("开启")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("关闭")])], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Table', {
    attrs: {
      "columns": _vm.tb_concert_colums,
      "data": _vm.tb_concert_data
    }
  }), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "是否提交"
    },
    on: {
      "on-ok": _vm.ok,
      "on-cancel": _vm.cancel
    },
    model: {
      value: (_vm.tabselectTishi),
      callback: function($$v) {
        _vm.tabselectTishi = $$v
      },
      expression: "tabselectTishi"
    }
  }, [_c('p', [_vm._v("是否提交互动tab修改?")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.subTabSel
    }
  }, [_vm._v("是")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": function($event) {
        _vm.tabselectTishi = false
      }
    }
  }, [_vm._v("否")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5f34d5da", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0.chunk.js.map