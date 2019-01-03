<style>
	.font-class{
		font-family: Helvetica;
		font-size: 25px;
		color: blue;
		background: white
	}
	.tabSpanCls{
		margin-left: 100px;
	}

</style>
<style scoped>

</style>
<template>
	<div>
		<Menu mode="horizontal" :theme="theme1" active-name="1">
			<FONT class= 'font-class'>
				咪咕音乐后台管理页面
			</FONT>
	    </Menu>
	    <Menu mode="horizontal" :theme="theme1" active-name="1">
	        <Input v-model="value14" placeholder="关键字查询" clearable style="width: 400px"></Input>
	        <Button @click="searchData" type="primary" shape="circle" icon="ios-search"></Button>
	        <span class='tabSpanCls'>互动TAB开关
	        	<Select v-model="tabSelect" style="width:100px" @on-change="tabSelectChanges(value)" :placeholder="tabValue">
        			<Option  value="1" >开启</Option>
        			<Option  value="0" >关闭</Option>
    			</Select>
	        </span>
	    </Menu>
	    <br>
	    <!-- <p>改变主题</p>
	    <RadioGroup v-model="theme1">
	        <Radio label="light"></Radio>
	        <Radio label="dark"></Radio>
	        <Radio label="primary"></Radio>
	    </RadioGroup> -->
	    <Table :columns="tb_concert_colums" :data="tb_concert_data"></Table>
	    <!-- <actionUl concertID="1111"></actionUl> -->
	    <Modal
	        v-model="tabselectTishi"
	        title="是否提交"
	        @on-ok="ok"
	        @on-cancel="cancel">
	        <p>是否提交互动tab修改?</p>
	        <div slot="footer">
				<Button type="info" @click="subTabSel" >是</Button>
				<Button type="text" @click="tabselectTishi = false">否</Button>
			</div>
    	</Modal>
	</div>
</template>

<script>
	import actionUl from './actionUl.vue';

	export default {
		components:{
			actionUl,
		},
		data() {
			return {
				tabSelect:'0',
				tmp:0,
				tabselectTishi:false,
				msg : "1",
				theme1: 'light',
				tabValue: '开启',
				tb_concert_colums: [
					{
						title: "演唱会ID",
						key:"concertId",
						align: 'center',
						width: 80
					},
					{
						title: "演唱会名称",
						key: "concertName",
						align: 'center'
					},
					{
						title: "频道",
						key: "channelName",
						align: 'center'
					},
					{
						title: '权重',
						key: 'weight',
						align: 'center'
					},
					{
						title: '视频流ID',
						key: 'liveShowId',
						align: 'center'
					},
					{
						title: '关联栏目',
						key: 'relationColumnId',
						align: 'center'
					},
					{
						title: '更新时间',
						key: 'insertTimeStr',
						align: 'center'
					},
					{
						title: '上线状态',
						key: 'test',
						align: 'center'
					},
					{
						title: '操作',
						key:'action',
						align: 'center',
						render: (h, params) => {
							let concertID = params.row.concertId;
							let concertName = params.row.concertName;

							let word = "请选择";

							let icon = h('Icon',{
				              type:"arrow-down-b"
				            },)
							let a = h('a',{

				            },[word,icon])

							let a1 = h('router-link',{
								//href和src需要用attrs指定
				            	attrs: {to: '/livehost/lcedit/'+concertID+'/'+concertName},
								//props: { href: '/livehost/lcedit.do?concertID='+concertID }
				            },"控制修改")

							let menu1 = h('DropdownItem',{
				            },[a1])

				            let a2 = h('router-link',{
								attrs: {to: '/livehost/index/'+concertID+'/'+concertName},
				            },"直播修改")

				            let menu2 = h('DropdownItem',{
				            },[a2])

				            let a3 = h('router-link',{
								attrs: {to: '/livehost/adedit/'+concertID+'/'+concertName},
				            },"广告修改")

				            let menu3 = h('DropdownItem',{
				            },[a3])

				            let a4 = h('router-link',{
								attrs: {to: '/livehost/toLiveViewAngle/'+concertID+'/'+concertName},
				            },"直播视角")

				            let menu4 = h('DropdownItem',{
				            },[a4])

				            let a5 = h('router-link',{
								attrs: {to: '/livehost/rankingPic/'+concertID+'/'+concertName},
				            },"贡献榜快照")

				            let menu5 = h('DropdownItem',{
				            },[a5])

				            let a6 = h('router-link',{
								attrs: {to: '/importDanmaku/index/'+concertID+'/'+concertName},
				            },"弹幕送审")

				            let menu6 = h('DropdownItem',{
				            },[a6])

				            let a7 = h('router-link',{
								attrs: {to: '/importDanmaku/send/'+concertID+'/'+concertName},
				            },"弹幕发送")

				            let menu7 = h('DropdownItem',{
				            },[a7])

				            let a8 = h('router-link',{
								attrs: {to: '/importDanmaku/data/'+concertID+'/'+concertName},
				            },"互动数据")

				            let menu8 = h('DropdownItem',{
				            },[a8])

				            let a9 = h('router-link',{
								attrs: {to: '/livehost/area/'+concertID+'/'+concertName},
				            },"省份筛选")

				            let menu9 = h('DropdownItem',{
				            },[a9])

				            let a10 = h('router-link',{
								attrs: {to: '/livehost/starBoardOperation/'+concertID+'/'+concertName},
				            },"星光榜运营")

				            let menu10 = h('DropdownItem',{
				            },[a10])

							let p = h('DropdownMenu',{
				              slot: 'list'
				            },["直播控制",menu1,menu2,menu3,menu4,menu5,menu10,"弹幕控制",menu6,menu7,menu8,"区域",menu9])
							return h('Dropdown', [a,p]);

				        }
					}
				],
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
			}

		},
		methods: {
			tabSelectChanges(value){
				let v = this;
				v.tmp++;
				if(v.tmp>0){
					v.tabselectTishi = true;
				}
			},
			subTabSel(){
				let v = this;
				v.$http.post(BASE+"/livehost/allswith", {swith:v.tabSelect}, {emulateJSON:true})
					.then(function(resp) {
						var data = resp.body.data;
						// v.checkPermission(data);
						if(data.code=="000000"){
							v.$Message.success("修改成功" , 2);
						}else{
							v.$Message.error("修改失败" , 2);
						}
					})
					.catch(function(resp) {
						v.$Message.error("未知错误", 2);
					});
				v.tabselectTishi = false;
			},
			searchData(){
				let v = this;
				if(v.value14){
					v.$http.post(BASE+"/livehost/getAdlist", {concertName:'%'+v.value14+'%'}, {emulateJSON:true})
						.then(function(resp) {
							var data = resp.body.data;
							// v.checkPermission(data);
							if(data.code=="000000"){
								v.tb_concert_data = data.data;
							}else{
								v.$Message.error("获取数据失败" , 2);
							}
						})
						.catch(function(resp) {
							v.$Message.error("查询发生错误", 2);
						});
				}else{
					v.$Message.error("请填写查询条件", 2);
				}
			},
			checkPermission(data) {
				// alert(JSON.stringify(data));
				// 需要跳转页面
				//return;
				var v = this;
				var token = v.getCookie("token");
				if(token != "undefined"&&token!="") {}
				else {
					var checkCode = data.code;
					var loginUrl = data.url;
					if(checkCode == "555555") {
      					window.location.href = loginUrl;
					}
				}

			},
			//设置cookie
  			setCookie: function (cname, cvalue, exdays) {
  				var d = new Date();
 				d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  				var expires = "expires=" + d.toUTCString();
  				console.info(cname + "=" + cvalue + "; " + expires);
  				document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
  				console.info(document.cookie);
  			},
  			//获取cookie
  			getCookie: function (cname) {
  				var name = cname + "=";
  				var ca = document.cookie.split(';');
  				for (var i = 0; i < ca.length; i++) {
   					var c = ca[i];
   					while (c.charAt(0) == ' ') c = c.substring(1);
   					if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  				}
  				return "";
  			},
  			//清除cookie
  			clearCookie: function (cname) {
  				this.setCookie(cname, "", -1);
  			},
				getToken() {
        var v = this;
        var url = document.referrer;
        var token = url.split('=')[1];
        //alert(token);
        var undefined = void(0);
        if (token != undefined) {
            v.setCookie("token", token, 1);
        }
        // else {
        //     v.clearCookie("token");
        // }
			},

		},
		created() {
	        // 取到路由带过来的参数
	        let routerParams = this.$route.params.concertId;
	        // 将数据放在当前组件的数据内
	        this.msg = routerParams;
	        let v = this;
	        // v.getToken();
	        v.$http.post(BASE+"/livehost/getAdlist", {concertName:null}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					// v.checkPermission(data);
					if(data.code=="000000"){
						v.tb_concert_data = data.data;
					}else{
						v.$Message.error("获取数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("查询发生错误", 2);
				});
			//互动table开关初始值
			v.$http.post(BASE+"/livehost/getDanmuAllSwitch")
				.then(function(resp) {
					var data = resp.body.data;
					// v.checkPermission(data);
					if(data.code=="000000"){
						if(data.data!=null){
							if(data.data){
								v.tabSelect = '1';
							}else{
								v.tabSelect = '0';
							}
						}
					}else{
						v.$Message.error("获取数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("查询发生错误", 2);
				});


				/*let stateObject = {};
				let title = "主页";
				let newUrl = "/liveshow/index.html";
				history.pushState(stateObject,title,newUrl);*/
		}
	}
</script>
