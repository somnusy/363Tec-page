<style>
	.font-class{
		font-family: Helvetica;
		font-size: 25px;
		color: black;
		background: white
	}
	.font-class1{
		font-family: Helvetica;
		font-size: 15px;
		color: black;
		background: white
	}
</style>
<style scoped>
	
</style>
<template>
		<div>
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
				<router-link class='menu-a-class' :to="controlLcedit">控制修改</router-link>
				<router-link class='menu-a-class' :to="controlIndex">直播修改</router-link>
				<router-link class='menu-a-class' :to="controlAdedit">广告修改</router-link>
				<router-link class='menu-a-class' :to="rankingPic">贡献榜快照</router-link>
				<router-link class='menu-a-class' :to="starBoardOperation">星光榜运营</router-link>
				<router-link class='menu-a-class' :to="danmakuSend">弹幕发送</router-link>
				<router-link class='menu-a-class' :to="danmakuIndex">弹幕送审</router-link>
				<router-link class='menu-a-class' :to="danmakuDataPage">互动数据</router-link>
				<router-link class='menu-a-class' :to="area">省份筛选</router-link>
				<router-link class='menu-a-class' to="/livehost/adlist">回到直播控制主页</router-link>
	    	</Menu>
	    	<!-- <p>Change theme</p>
		    <RadioGroup v-model="theme1">
		        <Radio label="light"></Radio>
		        <Radio label="dark"></Radio>
		        <Radio label="primary"></Radio>
		    </RadioGroup> -->
		    <br>

		    <div style="color: red;margin-left: 10%;">
		    	<font size="5px">
		    		注意：1.请先添加主视角，再添加其他视角&nbsp;&nbsp; 2.视角添加完成后，请打开视角TAB&nbsp;&nbsp;3.直播完后，请关闭视角TAB
		    	</font>
		    </div>
		    <Table :columns="tb_colums" :data="tb_data"></Table>
		    <Form  :label-width="120" inline>
		    		<Input v-model="input_ID" style="margin-left: 0%;width: 14.28%"></Input>
		    		<Input v-model="input_URL" style="margin-left: 0%;width: 14.28%"></Input>
		    		<Input v-model="input_title" style="margin-left: 0%;width: 14.28%"></Input>
		    		<Input v-model="input_viceTitle" style="margin-left: 0%;width: 14.28%"></Input>
		    		<Select v-model="user" style="width: 14.28%"  :placeholder="tabValue">
	        			<Option  value="0" >匿名用户</Option>
	        			<Option  value="1" >普通用户</Option>
	        			<Option  value="2" >VIP用户</Option>
    				</Select>
		    		<Input v-model="input_order" style="margin-left: 0%;width: 14.28%"></Input>
		    	<Button type="success" class='sub-class' @click='addRow' style="margin-left: 90px">添加</Button>
		    </Form>
	    	<Modal
		        v-model="tishi"
		        title="添加视角提示"
		        @on-ok="ok"
		        @on-cancel="cancel">
		        <p>确认添加?</p>
		        <div slot="footer">
					<Button type="info" class="fl" @click="confirmAdd" >是</Button>
					<Button type="text" @click="tishi = false">否</Button>
				</div>
    		</Modal>
			<Modal
		        v-model="failedAdd"
		        title="参数验证失败"
		        @on-ok="ok"
		        @on-cancel="cancel">
		        <p>{{ paramTishi }}</p>
		        <div slot="footer">
					<Button type="info" @click="failedAddOK" >OK</Button>
				</div>
    		</Modal>
    		<Modal
		        v-model="delTishi"
		        title="删除视角提示"
		        @on-ok="ok"
		        @on-cancel="cancel">
		        <p>确定删除视角?</p>
		        <div slot="footer">
					<Button type="info" @click="delView" >是</Button>
					<Button type="text" @click="delTishi = false">否</Button>
				</div>
    		</Modal>
    		<Modal
		        v-model="postDel"
		        title="删除成功提示"
		        @on-ok="ok"
		        @on-cancel="cancel">
		        <p>删除成功</p>
		        <div slot="footer">
					<Button type="info" @click="postDel = false">好的</Button>
				</div>
    		</Modal>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				postDel:false,
				confirmDel:false,
				delTishi:false,
				paramTishi:"",
				tishi:false,
				failedAdd:false,
				theme1: 'light',
				user:'0',
				tb_colums:[
					{
						title: "视角流ID",
						key:"streamId",
						align: 'center',
					},
					{
						title: "视角图片URL",
						key: "imageUrl",
						align: 'center'
					},
					{
						title: "视角标题",
						key: "title",
						align: 'center'
					},
					{
						title: "视角副标题",
						key: "subTitle",
						align: 'center'
					},
					{
						title: "视角播放权限",
						key: "requireUserLevel",
						align: 'center'
					},
					{
						title: "视角顺序",
						key: "index",
						align: 'center'
					},
					{
						title: "视角操作",
						key: "action",
						align: 'center',
						render: (h, params) => {
							return h('i-button', {
								props: {
										type: 'error'
									},
								on: {
									click: () => {
										this.deleteRow(params.row.viewId);
									}
								}
							},"删除");
				        }
					},
				],
				tb_data:[
					{
						viewId:9999919,
						streamId:"test",
						imageUrl:"test",
						title:"test",
						subTitle:"test",
						requireUserLevel:1,
						index:"test",
					}
				],
				controlLcedit:'',
				controlIndex:'',
				controlAdedit:'',
				rankingPic:'',
				danmakuSend:'',
				danmakuIndex:'',
				danmakuDataPage:'',
				area:'',
				delIndex:0,
			}

		},
		methods: {
			delView(){
				let v = this;
				v.delTishi = false;
				//let viewid = v.tb_data[v.delIndex].viewId;
				v.$http.post(BASE+"/livehost/delLiveViewAngle.do", 
					{
						concertId:v.concertID,
						viewId:v.delIndex,
					}
					, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						// v.postDel = true;
						v.$Message.success("删除数据成功" , 2);
						setTimeout(() => {
							v.refresh();
							// window.history.go(0);
							// v.$router.push('/livehost/toLiveViewAngle/'+v.concertID+"/"+v.concertName);
							// v.$router.push({path:'/livehost/toLiveViewAngle/'+v.concertID+"/"+v.concertName});
							// v.$router.go(0);
							/*v.$Spin.show();
							setTimeout(() => {
		                		v.$Spin.hide();
		                		location.reload();
		                	}, 600);*/
		                }, 200);
					}else{
						v.$Message.error("删除数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
			},
			deleteRow(index){
				let v = this;
				/*if(confirm("             【警告】 确认删除此视角信息吗? 请确认!")){
					v.tb_data.splice(index, 1);
				}*/
				v.delIndex = index;
				v.delTishi = true;
			},
			addRow(){
				var v = this;
				var reg = new RegExp("^[1-9]{1,4}$");
				if(!v.input_ID || v.input_ID.trim()==""){
					v.paramTishi = "视角流ID不能为空，请输入。。";
					v.failedAdd=true;
				}else if(!v.input_URL || v.input_URL.trim()==""){
					v.paramTishi = "视角图片URL不能为空，请输入。。";
					v.failedAdd=true;
				}else if(!v.input_title || v.input_title.trim()==""){
					v.paramTishi = "视角标题不能为空，请输入。。";
					v.failedAdd=true;
				}else if(!v.input_title || v.input_title.trim().length>16){
					v.paramTishi = "视角标题过长，请精简到16个字以内。。";
					v.failedAdd=true;
				}else if(!v.input_viceTitle || v.input_viceTitle.trim()==""){
					v.paramTishi = "视角副标题不能为空，请输入。。";
					v.failedAdd=true;
				}else if(!v.input_viceTitle || v.input_viceTitle.trim().length>16){
					v.paramTishi = "视角副标题过长，请精简到16个字以内。。";
					v.failedAdd=true;
				}else if(!v.input_order || !reg.test(v.input_order)){
					v.paramTishi = "视角数顺序为1到9999，请输入。。";
					v.failedAdd=true;
				}else{
					v.tishi = true;
				}
			},
			confirmAdd(){
				var v = this;
				/*v.tb_data.push({
					ID:v.input_ID,
					URL:v.input_URL,
					title:v.input_title,
					viceTitle:v.input_viceTitle,
					permission:v.user==0?'匿名用户':v.user==1?"普通用户":"VIP用户",
					order:v.input_order,
				});*/
				v.tishi=false;
				let viewid = v.concertID*10;
				if(v.tb_data!=null&&v.tb_data.length>0){				
					let max = v.concertID*10;
					let mult = 1;
					for(let i of v.tb_data){
						

						if(i.viewId>max){
							max=i.viewId;
						}
					}
					let  bit = (max+"").length - v.concertID.length;
					if(bit>0){
						for (let j = 0; j <bit ; j++) {
							mult = mult*10;
						}
					}
					let cal = max - v.concertID*mult;
					viewid = v.concertID+""+(cal+1);


					//viewid = max+1;
				}
				v.$http.post(BASE+"/livehost/saveLiveViewAngle.do", 
					{
						concertId:v.concertID,
						viewId:viewid,
						streamId:v.input_ID,
						title:v.input_title,
						imageUrl:v.input_URL,
						subTitle:v.input_viceTitle,
						requireUserLevel:v.user,
						index:v.input_order
					}
					, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.tb_data = data.data.liveViewAngles;
						for( let i of v.tb_data){
						    if(i.requireUserLevel==0){
								i.requireUserLevel="匿名用户";
							}else if(i.requireUserLevel==1){
								i.requireUserLevel="普通用户";
							}else if(i.requireUserLevel==2){
								i.requireUserLevel="VIP用户";
							}
						}
						v.$Message.success("添加成功" , 2);
						v.input_ID = "";
						v.input_title="";
						v.input_URL = "";
						v.input_viceTitle = '';
						v.user = '';
						v.input_order='';
					}else{
						v.$Message.error("添加失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
			},
			failedAddOK(){
				var v = this;
				v.failedAdd = false;
			},
			refresh(){
				let v = this;
				v.$http.post(BASE+"/livehost/toLiveViewAngle.do", {concertID:v.concertID}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.tb_data = data.data.list;
						for( let i of v.tb_data){
						    if(i.requireUserLevel==0){
								i.requireUserLevel="匿名用户";
							}else if(i.requireUserLevel==1){
								i.requireUserLevel="普通用户";
							}else if(i.requireUserLevel==2){
								i.requireUserLevel="VIP用户";
							}
						}
					}else{
						v.$Message.error("获取数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("查询发生错误", 2);
				});
			}
		},
		watch: {
			'$route' (to, from) {
				this.$router.go(0);
				// this.httpGetUserInfo(); // 这是我ajax获取用户信息的方法
			}
		},
		created() {
	        // 取到路由带过来的参数 
	        let routerParamID = this.$route.params.concertID;
	        let routerParamName = this.$route.params.concertName;
	        // 将数据放在当前组件的数据内
	        this.concertID = routerParamID;
	        this.concertName = routerParamName;

	        let v = this;
	        v.controlLcedit = '/livehost/lcedit/'+this.concertID+'/'+this.concertName;
	        v.controlIndex = '/livehost/index/'+this.concertID+'/'+this.concertName;
	        v.controlAdedit = '/livehost/adedit/'+this.concertID+'/'+this.concertName;
	        v.rankingPic = '/livehost/rankingPic/'+this.concertID+'/'+this.concertName;
	        v.danmakuSend = '/importDanmaku/send/'+this.concertID+'/'+this.concertName;
	        v.danmakuIndex = '/importDanmaku/index/'+this.concertID+'/'+this.concertName;
	        v.danmakuDataPage = '/importDanmaku/data/'+this.concertID+'/'+this.concertName;
	        v.area = '/livehost/area/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;

	        v.$http.post(BASE+"/livehost/toLiveViewAngle.do", {concertID:v.concertID}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.tb_data = data.data.list;
						if(v.tb_data!=null&&v.tb_data.size>0){
							for( let i of v.tb_data){
							    if(i.requireUserLevel==0){
									i.requireUserLevel="匿名用户";
								}else if(i.requireUserLevel==1){
									i.requireUserLevel="普通用户";
								}else if(i.requireUserLevel==2){
									i.requireUserLevel="VIP用户";
								}
							}
						}
					}else{
						v.$Message.error("获取数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("查询发生错误", 2);
				});



			let stateObject = {};
			let title = "主页";
			let newUrl = "/liveshow/index.html";
			history.pushState(stateObject,title,newUrl);
		}
	}
</script>