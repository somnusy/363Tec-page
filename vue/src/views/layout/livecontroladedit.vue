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
				<router-link class='menu-a-class' :to="controlToLiveViewAngle">直播视角</router-link>
				<router-link class='menu-a-class' :to="rankingPic">贡献榜快照</router-link>
				<router-link class='menu-a-class' :to="starBoardOperation">星光榜运营</router-link>
				<router-link class='menu-a-class' :to="danmakuSend">弹幕发送</router-link>
				<router-link class='menu-a-class' :to="danmakuIndex">弹幕送审</router-link>
				<router-link class='menu-a-class' :to="danmakuDataPage">互动数据</router-link>
				<router-link class='menu-a-class' :to="area">省份筛选</router-link>
				<router-link class='menu-a-class' to="/livehost/adlist">回到直播控制主页</router-link>
	    	</Menu>
	    	<!-- <p>修改主题</p>
		    <RadioGroup v-model="theme1">
		        <Radio label="light"></Radio>
		        <Radio label="dark"></Radio>
		        <Radio label="primary"></Radio>
		    </RadioGroup> -->
		    <br>


	    	
			<Form :model="gasketAd" :label-width="120" inline>
				<fieldset>
		            <legend class="control-label col-sm-2 no-padding-right">
		            	<h4>垫片广告</h4>
		            </legend>
		            <FormItem label="MV ID:">
		            	<Input v-model="gasketAd.mvid"></Input>
		        	</FormItem>
		        	<br>
		        	<FormItem label="用户可关闭时间:">
			            <Input v-model="gasketAd.show_time"></Input>
		        	</FormItem>
		        	<label style="color:red">单位：秒，必须大于0</label>
		        	<br>
		        	<FormItem label="详情页标题:">
			            <Input v-model="gasketAd.target_title"></Input>
		        	</FormItem>
		        	<br>
		        	<FormItem label="详情页地址:">
			            <Input v-model="gasketAd.target_url"></Input>
		        	</FormItem>
		        </fieldset>

		        <fieldset>
		            <legend class="control-label col-sm-2 no-padding-right">
		            	<h4>贴片广告</h4>
		            </legend>
		            <ul>
			           	 <li v-for="(item,index) in pasterAd">
			           	 	<Button type="error" class='sub-class' @click='remove(item)'>删除</Button>
			           	 	<Form :model="item" :label-width="120" inline>
			           	 		<FormItem label="图片地址:">
						            <Input v-model="item.image_url"></Input>
					        	</FormItem>
					        	<br>
					        	<FormItem label="详情页标题:">
						            <Input v-model="item.target_title"></Input>
					        	</FormItem>
					        	<br>
					        	<FormItem label="详情页地址:">
						            <Input v-model="item.target_url"></Input>
					        	</FormItem>
					        	<br>
					        	<FormItem label="显示时间:">
						            <Input v-model="item.show_date"></Input>
					        	</FormItem>
					        	<span class="span1" style="color: red;">格式：年月日时分秒yyyyMMddHHmmss</span>
					        	<br>
					        	<FormItem label="显示时长:">
						            <Input v-model="item.show_time"></Input>
					        	</FormItem>
					        	<span class="span1" style="color: red;">单位：秒，必须大于0</span>
			           	 	</Form>
			                <hr>
			                <font>{{ item.title }}</font>
			            </li>
			        </ul>
		            <center>
		            	<Button type="success" class='sub-class' @click='addColumn'>添加栏目</Button>
		            </center>
		        </fieldset>
	        	
	        	<br>
	        	<hr>
	        	<center>
		        	<Button type="success" class='sub-class' @click="subTs=true">提交</Button>
		    	</center>
			</Form>

			<Modal
		        v-model="subTs"
		        title="确认提交"
		        @on-ok="ok"
		        @on-cancel="cancel">
		        <p>确认提交？</p>
		        <div slot="footer">
					<Button type="info" class="fl" @click="subForm" >是</Button>
					<Button type="text" @click="subTs = false">否</Button>
				</div>
	    	</Modal>
			<Modal
		        v-model="successTs"
		        title="提交成功"
		        @on-ok="ok"
		        @on-cancel="cancel">
		        <p>提交成功</p>
	    	</Modal>
			
		</div>
</template>

<script>
	export default {
		data() {
			return {
				successTs:false,
				subTs:false,
				theme1: 'light',
				gasketAd:{
					/*mvid:'mvid',
					show_time:'show_time',
					target_title:'target_title',
					target_url:'target_url',*/
				},
				pasterAd:[
					/*{
						image_url:'image_url',
						target_title:'target_title',
						target_url:'target_url',
						show_date:'show_date',
						show_time:'show_time'
					}*/
				],
                controlLcedit:'',
				controlIndex:'',
				controlToLiveViewAngle:'',
				rankingPic:'',
				danmakuSend:'',
				danmakuIndex:'',
				danmakuDataPage:'',
				area:'',
			}

		},
		methods: {
			remove(item){
				var v = this;
				var index = v.pasterAd.indexOf(item);
				v.pasterAd.splice(index, 1)
			},
			addColumn(){
				var v = this;
				v.pasterAd.push({
	            	image_url:'',
					target_title:'',
					target_url:'',
					show_date:'',
					show_time:''
				})
			},
			flushPage(){
				let v = this;
				v.$http.post(BASE+"/livehost/adedit.do", {concertID:v.concertID}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.gasketAd = data.data.livepreads;
						v.pasterAd = data.data.liveads;
					}else{
						v.$Message.error("获取数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("查询发生错误", 2);
				});
			},
			subForm(){
				let v = this;
				v.subTs = false;
				v.$http.get(BASE+"/livehost/setad.do?str="+encodeURI(JSON.stringify({
							resourceId:v.concertID,
							gasketAd:v.gasketAd,
							pasterAds:v.pasterAd
						})))
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						// v.successTs = true;
						v.$Message.success("提交成功" , 2);
						setTimeout(() => {
							refresh();
							// v.$router.push('/livehost/adedit/'+v.concertID+"/"+v.concertName);
							/*v.$Spin.show();
							setTimeout(() => {
		                		v.$Spin.hide();
		                		location.reload();
		                	}, 1000);*/
		                }, 500);
					}else{
						v.$Message.error("提交失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("位置错误", 2);
				});
			},
			refresh(){
				let v = this;
				v.$http.post(BASE+"/livehost/adedit.do", {concertID:v.concertID}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						if(data.data.livepreads!=null){
							v.gasketAd = data.data.livepreads;
						}
						if(data.data.liveads!=null){
							v.pasterAd = data.data.liveads;
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
	        v.controlToLiveViewAngle = '/livehost/toLiveViewAngle/'+this.concertID+'/'+this.concertName;
	        v.rankingPic = '/livehost/rankingPic/'+this.concertID+'/'+this.concertName;
	        v.danmakuSend = '/importDanmaku/send/'+this.concertID+'/'+this.concertName;
	        v.danmakuIndex = '/importDanmaku/index/'+this.concertID+'/'+this.concertName;
	        v.danmakuDataPage = '/importDanmaku/data/'+this.concertID+'/'+this.concertName;
	        v.area = '/livehost/area/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;

	        v.$http.post(BASE+"/livehost/adedit.do", {concertID:v.concertID}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						if(data.data.livepreads!=null){
							v.gasketAd = data.data.livepreads;
						}
						if(data.data.liveads!=null){
							v.pasterAd = data.data.liveads;
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