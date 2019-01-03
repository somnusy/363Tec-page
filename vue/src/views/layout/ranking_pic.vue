<style>

</style>
<style scoped>
	.layout-container {
		padding: 0px 30px 0 30px;
	}
	.layout-assistant{
		width: 400px;
		margin: 0 auto;
		height: inherit;
	}
	.msgclass{
		color:#00DD77;
	}
	.qkkz{
        margin-right: 10px;
        float: right;
	}
	.ds{
		margin-left: 100px;
		float: left;
		color: #00DD77;
	}
	.sd{
		margin-left: 100px;
		float: left;
	}
	.xz{
		float: left;
	}
	.set{
        height: 100%;
        width: 100%;
        background: #99DD00;
    }
     .djkz{
        position: absolute;
        top: 50%;
        margin-left: 40%;
        width:200px;
        height:120px;
        border:1px solid #A8A8A8;
 	}
 	 .sjb{
 	 	margin-left: 100px;
		float: left;
 	 	/*position: absolute;
        top: 50%;
        float:right;
        margin-left: 35%;
        background: rgb(255,0,0);*/
 	}
 	 .gt{
 	 	/*width: 100%;*/
 	 }
 	 .djbtn{
 	 	position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
 	 }
 	 .tb{
 	 	margin-top:60px;
 	 }
</style>
<template>

	<div class="layout-container">
		<Menu mode="horizontal" :theme="theme1" active-name="1">
			<FONT class= 'font-class'>
				基本信息
			</FONT>
			<font class= 'font-class1'>演唱会id：{{ concertID }}</font>
			<font class= 'font-class1'>演唱会名称：{{ concertName }}</font>
    	</Menu>
    	<Menu mode="horizontal" :theme="theme1" active-name="1">
    		<FONT class= 'font-class'>
				操作
			</FONT>
			<router-link class='menu-a-class' :to="controlIndex">直播修改</router-link>
			<router-link class='menu-a-class' :to="controlLcedit">控制修改</router-link>
			<router-link class='menu-a-class' :to="controlAdedit">广告修改</router-link>
			<router-link class='menu-a-class' :to="controlToLiveViewAngle">直播视角</router-link>
			<router-link class='menu-a-class' :to="starBoardOperation">星光榜运营</router-link>
			<router-link class='menu-a-class' :to="danmakuSend">弹幕发送</router-link>
			<router-link class='menu-a-class' :to="danmakuIndex">弹幕送审</router-link>
			<router-link class='menu-a-class' :to="danmakuDataPage">互动数据</router-link>
			<router-link class='menu-a-class' :to="area">省份筛选</router-link>
			<router-link class='menu-a-class' to="/livehost/adlist">回到直播控制主页</router-link>
    	</Menu>
		<Menu mode="horizontal" :active-name="showType" @on-select="onNgClusterSelect">
			<div class="layout-assistant">
				<h1 style="color:#BB5500;font-weight:bold;font-family:STKaiti">演唱会贡献榜快照控制</h1>
			</div>
			<div v-show="setting" class="set">
				<i-button v-show="mainBtn" type="primary" class="sd" @click="showpicModal">刷新已有快照</i-button>
				<i-button v-show="mainBtn" type="primary" class="sd" @click="handSettingPre">立即拍照</i-button>
				<i-button v-show="setTimeBtn" type="primary" class="sd" @click="timeSetting">定时拍照</i-button>
				<i-button v-show="backPicPage" type="primary" class="ds" @click="backPic">回到快照页面</i-button>
				
				

				<DatePicker class="sd" v-show="showDate" v-model="date1"  format="yyyy-MM-dd" type="date" :start-date="new Date(2018, 01, 01)" placeholder="选择快照日期" style="width: 200px"  @on-change="date1=$event"></DatePicker>

            	<TimePicker class="xz"  v-show="showTime" v-model="time1" format="HH-mm-ss" placeholder="选择快照时间" style="width: 168px"></TimePicker>

        		<i-button  v-show="showTimeBtn" type="primary" @click="getTime" class="xz">定时拍照</i-button>
        		<i-button v-show="mainBtn" type="primary" class="qkkz" @click="delRankingPicPre">清空快照</i-button>
			</div>
			<div v-show="timerShow" class="sjb">
	            	
			</div>
		</Menu>
		
		<div v-show="settingButton" class="djkz">
			<Button type="success" long class="djbtn" @click="checkPic">点击快照</Button>
		</div>
		
		<div v-show="search">
			
		</div>
		<Table class="tb" v-show="nodeListModal"  :columns="nodelistColumns" :data="nodelist" :highlight-row="highlight" :loading="loading1"
			height="800"
		></Table>
		<Table class="tb" v-show="detailListModal"  :columns="nodeDetailColumns" :data="nodeDetaillist" height="800"></Table>

		<!-- <Modal
			v-model="nodeListModal"
			width="1200" :mask-closable="false"
			title="已有快照">
			<Table class="mtable" stripe border :columns="nodelistColumns" :data="nodelist" :loading="headerLoding">
			</Table>
			<div slot="footer">
				<Button type="info" class="fl" @click="showHeaderAddModal" >添加</Button>
				<Button type="text" @click="nodeListModal = false">关闭</Button>
			</div>
		</Modal>
		<Modal
			v-model="detailListModal"
			width="1200" :mask-closable="false"
			title="贡献榜详情">
			<Table class="mtable" stripe border :columns="nodeDetailColumns" :data="nodeDetaillist" :loading="headerLoding">
			</Table>
			<div slot="footer">
				<Button type="info" class="fl" @click="showHeaderAddModal" >添加</Button>
				<Button type="text" @click="detailListModal = false">关闭</Button>
			</div>
		</Modal> -->


		<Modal
	        v-model="tishi1"
	        title="刷新快照数据"
	        @on-ok="ok"
	        @on-cancel="cancel">
	        <p>数据已刷新！</p>
    	</Modal>
    	<Modal
	        v-model="tishi2"
	        title="查找快照详情"
	        @on-ok="ok"
	        @on-cancel="cancel">
	        <p>查找快照详情成功！</p>
    	</Modal>
    	<Modal
	        v-model="tishi3"
	        title="手动拍照提示"
	        @on-ok="ok"
	        @on-cancel="cancel">
	        <p>是否要立刻手动拍照？</p>
	        <div slot="footer">
				<Button type="info" class="fl" @click="handSetting" >是</Button>
				<Button type="text" @click="tishi3 = false">否</Button>
			</div>
    	</Modal>
    	<Modal
	        v-model="tishi4"
	        title="清空快照提示"
	        @on-ok="ok"
	        @on-cancel="cancel">
	        <p>是否要立刻清空快照？</p>
	        <div slot="footer">
				<Button type="info" class="fl" @click="delRankingPic" >是</Button>
				<Button type="text" @click="tishi4 = false">否</Button>
			</div>
    	</Modal>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				mainBtn:true,
				setTimeBtn:false,
				highlight:true,
				loading1:false,
				tishi1:false,
				tishi2:false,
				tishi3:false,
				tishi4:false,
				setting:true,
				search:false,
				nodeListModal:false,
				timerShow:false,
				settingButton:false,
				detailListModal:false,
				showDate:true,
				showTime:true,
				showTimeBtn:true,
				backPicPage:false,
				nodelistColumns:[
					{
						title: "序号",
						type: "index",
						align: 'center',
						width: 80
					},
					{
						title: "编码",
						key: "index",
						align: 'center',
						width: 80
					},
					{
						title: "时间节点",
						key: "timeNode",
						align: 'center'
					},
					{
						title: "简述",
						key: "description",
						align: 'center'
					},
					{
						title: '操作',
						key: 'action',
						align: 'center',
						width: 200,
						render: (h, params) => {
							return  h('Button-group', [
								h('i-button', {
									props: {
										type: 'text'
									},
									on: {
										click: () => {
											this.showDetailModal(params.row);
										}
									}
								}, '详情'),
								h('i-button', {
									props: {
										type: 'text'
									},
									on: {
										click: () => {
										   this.delPic(params.row);
										}
									}
								}, '删除')
							])
						}
					}
				],
				nodeDetailColumns:[
					{
						title: "名次",
						key:"rank",
						align: 'center',
						width: 80
					},
					{
						title: "uid",
						key: "uid",
						align: 'center'
					},
					{
						title: "手机号",
						key: "mobils",
						align: 'center'
					},
					{
						title: '贡献值',
						key: 'joinValue',
						align: 'center'
					}
				],
				

			}

		},
		methods: {
			handSettingPre(){
				var v = this;
				v.tishi3 = true;
			},
			delRankingPicPre(){
				var v = this;
				v.tishi4 = true;
			},
			onNgClusterSelect(name) {
				var v = this;
				switch(name){
					case 'a' :
						v.setting=true;
						v.search=false;
						break;
					case 'b' :
						v.search=true;
						v.setting=false;
						v.timerShow=false;
						v.settingButton=false;
						break;
				}
			},
			showpicModal(){
				var v = this;
				v.loading1 = true;
				v.nodeListModal=true;
				v.detailListModal=false;
				v.backPicPage=false;
				v.$http.get(BASE + "/livehost/searchPics.do"+"?concertId="+v.concertID)
				.then(function(resp){
					var data = resp.body.data;
					if(data.code="000000"){
						/*var list = [];
						data.data.forEach(function(element,index){
							if(element){
								list.push(element);
							}
						})*/
						v.nodelist = data.data;
					}else{
						v.$Message.error("获取数据失败", 2);
					}
				})
				.catch(function(resp) {
				   v.$Message.error("操作失败", 2);
				});
				v.tishi1=true;
				v.loading1 = false;
			},
			timeSetting(){
				var v = this;
				v.timerShow = true;
				v.settingButton=false;
				v.showDate=true;
				v.showTime=true;
				v.showTimeBtn=true;
			},
			handSetting(){
				var v = this;
				v.$http.get(BASE + "/livehost/handPic.do"+"?concertId="+v.concertID)
				.then(function(resp){
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("手动快照成功！", 2);
					}else{
						v.$Message.error("手动快照失败！" , 2);
					}
				})
				.catch(function(resp) {
				   v.$Message.error("好像出了点问题......", 2);
				});
				v.tishi3 = false;
				v.refresh();
			},
			showDetailModal(params){
				var v = this;
				v.detailListModal=true;
				v.nodeDetaillist = params.rankingDetails;
				v.nodeListModal=false;
				v.tishi2=true;
				v.backPicPage=true;
				v.mainBtn=false;
				v.showTime=false;
				v.showTimeBtn=false;
				v.showDate=false;
			},
			getTime(){
				var v = this;
				//alert(JSON.stringify(v.date1));
				//alert(v.time1);
				v.$http.get(BASE + "/livehost/settingTime.do"+"?date="+JSON.stringify(v.date1)+"&time="+JSON.stringify(v.time1)+"&concertId="+v.concertID)
				.then(function(resp){
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("设置定时成功！", 2);
					}else{
						v.$Message.error("设置定时失败 ！", 2);
					}
				})
				.catch(function(resp) {
				   v.$Message.error("好像出了点问题......", 2);
				});
			},
			checkPic(){
				
			},
			delRankingPic(){
				var v = this;
				v.$http.get(BASE + "/livehost/delRankingPic.do"+"?concertId="+v.concertID)
				.then(function(resp){
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("清空成功！", 2);
					}else{
						v.$Message.error("清空失败！" , 2);
					}
				})
				.catch(function(resp) {
				   v.$Message.error("好像出了点问题......", 2);
				});
				v.tishi4=false;
			},
			backPic(){
				var v = this;
				v.detailListModal=false;
				v.backPicPage=false;
				v.nodeListModal=true;
				v.mainBtn=true;
				v.showTime=true;
				v.showTimeBtn=true;
				v.showDate=true;
			},
			delPic(params){
				var v = this;
				v.$http.get(BASE + "/livehost/delPic.do"+"?index="+params.index+"&concertId="+v.concertID)
				.then(function(resp){
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("删除成功！", 2);
					}else{
						v.$Message.error("删除失败 ！", 2);
					}
				})
				.catch(function(resp) {
				   v.$Message.error("好像出了点问题......", 2);
				});
			},
			refresh() {
				var v = this;
				v.nodeListModal=true;
				v.detailListModal=false;
				v.backPicPage=false;
				v.$http.get(BASE + "/livehost/searchPics.do"+"?concertId="+v.concertID)
				.then(function(resp){
					var data = resp.body.data;
					if(data.code=="000000"){
						v.nodelist = data.data;
					}else{
						v.$Message.error("获取数据失败", 2);
					}
				})
				.catch(function(resp) {
				   v.$Message.error("操作失败", 2);
				});
				v.tishi1=true;
			},
			
		},
		created() {
			let v = this;
	        // 取到路由带过来的参数 
	        let routerParamID = v.$route.params.concertID;
	        let routerParamName = v.$route.params.concertName;
	        // 将数据放在当前组件的数据内
	        v.concertID = routerParamID;
	        v.concertName = routerParamName;

	        v.controlIndex = '/livehost/index/'+this.concertID+'/'+this.concertName;
	        v.controlLcedit = '/livehost/lcedit/'+this.concertID+'/'+this.concertName;
	        v.controlAdedit = '/livehost/adedit/'+this.concertID+'/'+this.concertName;
	        v.controlToLiveViewAngle = '/livehost/toLiveViewAngle/'+this.concertID+'/'+this.concertName;
	        v.danmakuSend = '/importDanmaku/send/'+this.concertID+'/'+this.concertName;
	        v.danmakuIndex = '/importDanmaku/index/'+this.concertID+'/'+this.concertName;
	        v.danmakuDataPage = '/importDanmaku/data/'+this.concertID+'/'+this.concertName;
	        v.area = '/livehost/area/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;



	        /*let stateObject = {};
			let title = "主页";
			let newUrl = "/liveshow/index.html";
			history.pushState(stateObject,title,newUrl);*/
		}
	}
</script>