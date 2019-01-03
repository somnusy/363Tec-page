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
				<router-link class='menu-a-class' :to="controlToLiveViewAngle">直播视角</router-link>
				<router-link class='menu-a-class' :to="rankingPic">贡献榜快照</router-link>
				<router-link class='menu-a-class' :to="starBoardOperation">星光榜运营</router-link>
				<router-link class='menu-a-class' :to="danmakuSend">弹幕发送</router-link>
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
		    <Form :model="formItem" :label-width="120" inline>
		    	<FormItem label="新增:">
		    		<Input v-model="labelName" size="small"  placeholder="输入标签名称"></Input>
		    	</FormItem>
		    	<Button type="success" @click="adddanmakutag">新增</Button>
		    	<br>
		    	<FormItem label="标签:">
		    		<Select v-model="lableValue">
		    			<Option v-for="item in danmakuTags" :value="item.id">{{ item.tagname }}</Option>
		    			<!-- <Option value="">-请选择-</Option>
                        <Option value="89">2121</Option>
                        <Option value="90">33232</Option> -->
		    		</Select>
		    	</FormItem>
		    	<br>
		    	<div class="controls" style="width: 89%;display: inline-block;margin-left: 10%">
                    <label>
                        <textarea v-model="bind" name="danmakuData" id="danmakuData" placeholder="发送弹幕数据拷贝进来" style="width: 50%" rows="25"></textarea>
                    </label>
                    <br>
                    <div style="display: inline-block;">
                        <label style="color:red">
                            注意事项：
                        </label>
                        <br>
                        <label style="color:red">
                            *1 将需要审核的弹幕数据粘贴在文本框中，多条以换行分割。
                        </label>
                        <br>
                        <label style="color:red">
                            *2 审核弹幕后，演唱会发送弹幕操作进行实时发送。
                        </label>
                        <br>
                    </div>
                </div>
                <br>

                <center>
                	<Button type="success" @click="sendIndex">送审</Button>
                </center>

		    </Form>
		    <Modal
		        v-model="postSend"
		        title="送审成功提示"
		        @on-ok="ok"
		        @on-cancel="cancel">
		        <p>送审成功</p>
		        <div slot="footer">
					<Button type="info" @click="postSend = false">好的</Button>
				</div>
    		</Modal>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				postSend:false,
				theme1: 'light',
				labelName:"",
				lableValue:"",
				controlLcedit:'',
				controlIndex:'',
				controlAdedit:'',
				controlToLiveViewAngle:'',
				rankingPic:'',
				danmakuSend:'',
				danmakuDataPage:'',
				area:'',
				danmakuTags:[],
			}

		},
		methods: {
			sendIndex(){
				let v = this;
				v.$http.post(BASE+"/importDanmaku/import.do",{concertID:v.concertID,danmakuData:v.bind,danmakutag:v.lableValue,concertName:v.concertName},{emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.postSend = true;
						v.bind = "";
					}else{
						v.$Message.error(data.info , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
			},
			adddanmakutag(){
				let v = this;

				v.$http.post(BASE+"/importDanmaku/adddanmakutag.do",{concertID:v.concertID,tagname:v.labelName},{emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						alert("添加成功");
					}else{
						v.$Message.error(data.info , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
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
	        v.controlAdedit = '/livehost/adedit/'+this.concertID+'/'+this.concertName;
	        v.controlToLiveViewAngle = '/livehost/toLiveViewAngle/'+this.concertID+'/'+this.concertName;
	        v.rankingPic = '/livehost/rankingPic/'+this.concertID+'/'+this.concertName;
	        v.danmakuSend = '/importDanmaku/send/'+this.concertID+'/'+this.concertName;
	        v.danmakuDataPage = '/importDanmaku/data/'+this.concertID+'/'+this.concertName;
	        v.area = '/livehost/area/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;


	        v.$http.post(BASE+"/importDanmaku/index.do",{concertID:v.concertID},{emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.danmakuTags = data.data.danmakuTags;
					}else{
						v.$Message.error("获取数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});

			let stateObject = {};
			let title = "主页";
			let newUrl = "/liveshow/index.html";
			history.pushState(stateObject,title,newUrl);
		}
	}
</script>