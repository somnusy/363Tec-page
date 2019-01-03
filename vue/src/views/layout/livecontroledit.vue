<style>
	.font-class{
		font-family: Helvetica;
		font-size: 25px;
		color: black;
		background: white
	}
	.font-class1{
		margin-left: 30px;
	}
	.menu-a-class{
		margin-left: 30px;
	}
	.sub-class{
		
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
				<router-link class='menu-a-class' :to="controlIndex">直播修改</router-link>
				<router-link class='menu-a-class' :to="controlAdedit">广告修改</router-link>
				<router-link class='menu-a-class' :to="controlToLiveViewAngle">直播视角</router-link>
				<router-link class='menu-a-class' :to="rankingPic">贡献榜快照</router-link>
				<router-link class='menu-a-class' :to="starBoardOperation">星光榜运营</router-link>
				<router-link class='menu-a-class' :to="danmakuSend">弹幕发送</router-link>
				<router-link class='menu-a-class' :to="danmakuIndex">弹幕送审</router-link>
				<router-link class='menu-a-class' :to="danmakuDataPage">互动数据</router-link>
				<router-link class='menu-a-class' :to="area">省份筛选</router-link>
				<router-link class='menu-a-class' to="/livehost/adlist">回到直播控制主页</router-link>
	    	</Menu>
	    	<Form :model="formItem" :label-width="120" inline>
		        <fieldset>
		   	 		<legend class="control-label col-sm-2 no-padding-right">
		   	 			<h4>直播控制参数</h4>
		   	 		</legend>
		   	 		 <FormItem label="老版公告内容:">
		            	<Input v-model="liveControl.liveTxt" placeholder="请输入老板公告内容"></Input>
		        	</FormItem>
		        	<br/>
		        	<FormItem label="新版公告内容:">
		            	<Input v-model="liveControl.text"></Input>
		        	</FormItem>
		        	<FormItem label="公告链接:">
		            	<Input v-model="liveControl.actionUrl"></Input>
		        	</FormItem>
		        	<FormItem label="公告头:">
		            	<Input v-model="liveControl.textHead"></Input>
		        	</FormItem> 
		        	<hr style="height:1px;border:none;border-top:1px dashed #0066CC;">
		        	<FormItem label="关注基数:">
		            	<Input v-model="liveControl.liveFocusBase"></Input>
		        	</FormItem>
		        	<FormItem label="关注系数:">
		            	<Input v-model="liveControl.liveFocusratio"></Input>
		        	</FormItem>
		        	<FormItem label="预约人数:">
		            	<Input v-model="liveControl.subNum"></Input>
		        	</FormItem>
		        	<FormItem label="试看时长:">
		            	<Input v-model="liveControl.trySee"></Input>
		        	</FormItem>
		        	<hr style="height:1px;border:none;border-top:1px dashed #0066CC;">
		        	<FormItem label="排行榜链接:">
		            	<Input v-model="liveControl.rankUrl"></Input>
		        	</FormItem>
		        	<br>
		        	<FormItem label="明星打榜:">
			            <Select v-model="starHitList"  @on-change="starHitListChange(value)">
			                <Option value="1">开</Option>
			                <Option value="0">关</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="互动总数:">
			            <Select v-model="totalInteraction" @on-change="totalInteractionChange(value)">
			                <Option value="0">开</Option>
			                <Option value="-1">关</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="直播状态:">
			            <Select v-model="liveControl.liveStatus">
			                <Option value="01">直播预告</Option>
			                <Option value="00">直播进行中</Option>
			                <Option value="02">直播回放</Option>
			                <Option value="03">直播已结束</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="弹幕状态:">
			            <Select v-model="liveControl.isDanmukuOn">
			                <Option value="00">允许发弹幕</Option>
			                <Option value="01">不允许发弹幕</Option>
			                <Option value="02">隐藏弹幕功能</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="默认栏目:">
			            <Select v-model="liveControl.hotOn">
			                <Option value="00">详情</Option>
			                <Option value="01">互动</Option>
			                <Option value="02">推荐</Option>
			                <Option value="03">贡献榜</Option>
			                <Option value="05">视角</Option>
			                <Option value="04">自定义</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="支持码率:">
			            <CheckboxGroup v-model="liveRateFormats">
			                <Checkbox label="2">标清</Checkbox>
			                <Checkbox label="3">高清</Checkbox>
			                <Checkbox label="4">超清</Checkbox>
			            </CheckboxGroup>
		        	</FormItem>
		        	<!-- <Button @click="test">xxxxxxxxxxxxxxxxx</Button> -->
		        	<br>
		        	<FormItem label="默认码率:">
			            <Select v-model="liveRateFormat_default">
			                <Option value="2">标清</Option>
			                <Option value="3">高清</Option>
			                <Option value="4">超清</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="VRLiveID:">
		            	<Input v-model="liveControl.vrLiveid"></Input>
		        	</FormItem>
		        	<FormItem label="VR制式:">
			            <Select v-model="liveControl.standards" style="width: 200px">
			                <Option value="2" >无</Option>
			                <Option value="0">2D</Option>
			                <Option value="1">3D（左右分屏）</Option>
			                <Option value="3">360度全景</Option>
			                <Option value="4">360度全景（左右分屏）</Option>
			                <Option value="5">360度全景（上下分屏）</Option>
			            </Select>
		        	</FormItem>
		        	<FormItem label="VR控制:">
			            <Select v-model="vrLimit" @on-change="vrLimitChange(value)">
			            	<Option value="0">通用可看</Option>
			            	<Option value="2">VIP可看</Option>
			            </Select>
		        	</FormItem>
	   	 		</fieldset>
	   	 		<fieldset>
	                <legend class="control-label col-sm-2 no-padding-right">
	                	<h4>明星榜&amp;营销广告</h4>
	                </legend>
	                <FormItem label="明星榜图片:">
		            	<Input v-model="starImgurl.imgAddress"></Input>
		        	</FormItem>
		        	<FormItem label="明星榜链接:">
		            	<Input v-model="starImgurl.actionUrl"></Input>
		        	</FormItem>
		        	<br>
		        	<FormItem label="营销广告图片:">
		            	<Input v-model="adsImgurl.imgAddress"></Input>
		        	</FormItem>
		        	<FormItem label="营销广告链接:">
		            	<Input v-model="adsImgurl.actionUrl"></Input>
		        	</FormItem>
           	 	</fieldset>

           	 	<fieldset>
	                <legend class="control-label col-sm-2 no-padding-right">
	                	<h4>弹幕控制</h4>
	                </legend>
	                <FormItem label="用户弹幕默认开关:">
			            <Select v-model="playerDanmakuDefaultStatus" @on-change="playerDanmakuDefaultStatusChange(value)">
			            	<Option value="0">&nbsp;关闭&nbsp;</Option>
			            	<Option value="1" selected="">&nbsp;开启&nbsp;</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="是否开启接收弹幕:">
			            <Select v-model="danmakuReceiveStatus" @on-change="danmakuReceiveStatusChange(value)">
			            	<Option value="0">&nbsp;关闭&nbsp;</Option>
			            	<Option value="1" selected="">&nbsp;开启&nbsp;</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="发送弹幕总开关值:">
			            <Select v-model="danmakuSendStatus" @on-change="danmakuSendStatusChange(value)">
			            	<Option value="0">&nbsp;开启但是假发送&nbsp;</Option>
			            	<Option value="1" selected="">&nbsp;开启且正常发送&nbsp;</Option>
			            </Select>
		        	</FormItem>
		        	<br>
		        	<FormItem label="道具礼物显示开关:">
			            <Select v-model="danmakuPropStatus" @on-change="danmakuPropStatusChange(value)">
			            	<Option value="0">&nbsp;关闭&nbsp;</Option>
			            	<Option value="1" selected="">&nbsp;开启&nbsp;</Option>
			            </Select>
		        	</FormItem>
           	 	</fieldset>
       	 		<fieldset>
		            <legend class="control-label col-sm-2 no-padding-right">
		            	<h4>互动展示控制</h4>
		            </legend>
		            <FormItem>
			            <CheckboxGroup v-model="functional">
			                <Checkbox label="1">通知</Checkbox>
			                <Checkbox label="2">贡献榜</Checkbox>
			                <Checkbox label="3">明星榜</Checkbox>
			                <Checkbox label="4">活动入口</Checkbox>
			                <Checkbox label="5">道具赠送</Checkbox>
			                <Checkbox label="6">热词弹幕</Checkbox>
			            </CheckboxGroup>
		        	</FormItem>
		        </fieldset>
		        <fieldset>
		            <legend class="control-label col-sm-2 no-padding-right">
		            	<h4>直播tab</h4>
		            </legend>
		            <ul>
			           	 <li v-for="(item,index) in liveShowItem">
			           	 	<columnModel :columnData=item :columnTitle=item.itemTitle :columnStyle=item.itemType :columnLink=item.itemUrl
			           	 	 :columnLocation=item.isShow :columnVersion=item.itemVersion :columnSystem=item.itemOS :columnIndex=index
			           	 	  v-on:listenToChildEvent="listenTochild" v-on:listenToChildSubEvent = "acceptData">	
			           	 		
			           	 	</columnModel>
			                <Button type="error" class='sub-class' @click='remove(item)'>删除栏目</Button>
			                <hr>
			                <font>{{ item.title }}</font>
			            </li>
			        </ul>
		            <center>
		            	<Button type="success" class='sub-class' @click='addColumn'>添加栏目</Button>
		            </center>
		        </fieldset>
		        <br><br>
		        <center>
		        	<Button type="success" class='sub-class' @click="subData">提交</Button>
		        </center>
	   	 	</Form>

		</div>
</template>

<script>
	import actionUl from './actionUl.vue';
	import columnModel from './columnModel.vue';

	export default {
		components:{
			actionUl,
			columnModel
		},
		data() {
			return {
				concertID : "无演唱会ID",
				concertName: "无演唱会Name",
				formItem: {
                    input: 'test',
                    select: 'test',
                    radio: 'male',
                    checkbox: ['标清','高清'],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: '',
                    sel:'0',
                    sel1:'00',
                    sel2:'3',
                    sel3:'2',
                    checkbox1:['通知','明星榜'],
                },
                items:[
	                {
	                	title:"test",
	                	style:"00",
	                	link:"testlink",
	                	location:"testlocation",
	                	version:"all",
	                	system:"Ios_migu"
	                }
                ],
				controlIndex:'',
				controlAdedit:'',
				controlToLiveViewAngle:'',
				rankingPic:'',
				danmakuSend:'',
				danmakuIndex:'',
				danmakuDataPage:'',
				area:'',
				concertId2Name:{

				},
				liveControl:{
					starHitList:"0",
				},
				liveShowItem:[],
				starHitList:"1",
				totalInteraction:"-1",
				biaoqing:true,
				liveRateFormats:["2","3","4"],
				liveRateFormat:"01234",
				liveRateFormat_default:"1",
				vrLimit:"1",
				starImgurl:{
					imgAddress:"",
					actionUrl:""
				},
				adsImgurl:{
					imgAddress:"",
					actionUrl:""
				},
				playerDanmakuDefaultStatus:"0",
				danmakuReceiveStatus:"0",
				danmakuSendStatus:"0",
				danmakuPropStatus:"0",
				functional:[],
				back:''
			}
		},
		methods: {
			addColumn(){
				var v = this;
				v.liveShowItem.push({
	            	/*title:"test",
	            	style:"00",
	            	link:"testlink",
	            	location:"testlocation",
	            	version:"all",
	            	system:"Ios_migu"*/
	            	liveid:v.concertID
				})
				
			},
			remove(item){
				var v = this;
				var index = v.liveShowItem.indexOf(item);
				v.liveShowItem.splice(index, 1)
			},
			listenTochild(data,data1){
				var v = this;
				var arr = v.liveShowItem;
				arr[data1].title = data;
			},
			starHitListChange(value){
				var v = this;
				v.liveControl.starHitList = parseInt(v.starHitList);
			},
			totalInteractionChange(value){
				var v = this;
				v.liveControl.totalInteraction = parseInt(v.totalInteraction);
			},
			liveRateFormatChange(){
				var v = this;
				alert(v.liveControl.liveRateFormat);
			},
			test(){
				var v = this;
				//alert(v.liveRateFormats);
				/*let tmp = v.liveRateFormats.join();
				alert(tmp);*/
				let liveShowItem_length = v.liveShowItem.length;
				let subItemId = [];
				for(let j=0;j<liveShowItem_length;j++){
					//alert(v.liveShowItem[j].itemId);
					subItemId.push(v.liveShowItem[j].itemId);
				}
				alert(subItemId);
				/*let length = v.liveRateFormats.length;
				let tmp = '';
				for(let i=0;i<length;i++){
					tmp+=v.liveRateFormats[i];
				}
				tmp = tmp+"_"+v.back;
				alert(tmp);*/
				/*let str = "1234";
				let length = str.length;
				let arr = [];
				for(let i=0;i<length;i++){
					arr.push(str.charAt(i));
				}
				alert(arr);*/
				//alert(JSON.stringify(v.liveShowItem));
			},
			vrLimitChange(value){
				var v = this;
				v.liveControl.vrLimit = parseInt(v.vrLimit);
			},
			playerDanmakuDefaultStatusChange(value){
				let v = this;
				v.liveControl.playerDanmakuDefaultStatus = parseInt(v.playerDanmakuDefaultStatus);
			},
			danmakuReceiveStatusChange(value){
				let v = this;
				v.liveControl.danmakuReceiveStatus = parseInt(v.danmakuReceiveStatus);
			},
			danmakuSendStatusChange(value){
				let v = this;
				v.liveControl.danmakuSendStatus = parseInt(v.danmakuSendStatus);
			},
			danmakuPropStatusChange(value){
				let v = this;
				v.liveControl.danmakuPropStatus = parseInt(v.danmakuPropStatus);
			},
			acceptData(data,data1){
				let v = this;
				v.liveShowItem[data1] = data;
			},
			subData(){
				let v = this;
				let length = v.liveRateFormats.length;
				let tmp = '';
				for(let i=0;i<length;i++){
					tmp+=v.liveRateFormats[i];
				}
				tmp = tmp+"_"+v.back;
				let subLiveRateFormats = tmp;
				let liveShowItem_length = v.liveShowItem.length;
				let subItemId = [];
				for(let j=0;j<liveShowItem_length;j++){
					subItemId.push(v.liveShowItem[j].itemId)
				}
				v.$http.post(BASE+"/livehost/setlc", 
					{
						resourceId:v.concertID,
						showItems:JSON.stringify(v.liveShowItem),
						/*itemId:subItemId,
						itemTitle:[],
						itemType:[],
						itemUrl:[],
						isShow:[],
						itemVersion:[],
						itemOS:[],*/
						liveRateFormat:JSON.stringify(v.liveRateFormats),
						liveRateFormat_default:v.liveRateFormat_default,
						functional:JSON.stringify(v.functional),
						hotOn:v.liveControl.hotOn,
						isDanmukuOn:v.liveControl.isDanmukuOn,
						control_focus_base:v.liveControl.liveFocusBase,
						control_focus_ratio:v.liveControl.liveFocusratio,
						control_sub_num:v.liveControl.subNum,
						control_status:v.liveControl.liveStatus,
						control_text:v.liveControl.liveTxt,
						vrLiveid:v.liveControl.vrLiveid,
						standards:v.liveControl.standards,
						control_trySee:v.liveControl.trySee,
						control_textNew:v.liveControl.text,
						control_Url:v.liveControl.actionUrl,
						control_textHead:v.liveControl.textHead,
						starHitList:v.liveControl.starHitList,
						control_rankUrl:v.liveControl.rankUrl,
						totalInteraction:v.liveControl.totalInteraction,
						vrLimit:v.liveControl.vrLimit,
						playerDanmakuDefaultStatus:v.liveControl.playerDanmakuDefaultStatus,
						danmakuReceiveStatus:v.liveControl.danmakuReceiveStatus,
						danmakuSendStatus:v.liveControl.danmakuSendStatus,
						danmakuPropStatus:v.liveControl.danmakuPropStatus,
						show_starPic:v.starImgurl.imgAddress,
						show_starUrl:v.starImgurl.actionUrl,
						show_adsPic:v.adsImgurl.imgAddress,
						show_adsUrl:v.adsImgurl.actionUrl,
					}
					, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("修改成功" , 2);
						setTimeout(() => {
							v.refresh();
							// v.$router.push('/livehost/lcedit/'+v.concertID+"/"+v.concertName);
							/*v.$Spin.show();
							setTimeout(() => {
		                		v.$Spin.hide();
		                		location.reload();
		                	}, 1000);*/
		                }, 1000);
						/*setTimeout(() => {
		                }, 1000);*/
					}else{
						v.$Message.error("修改失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
			},
			refresh(){
				let v = this;
				v.$http.get(BASE+"/livehost/getLiveControlData?concertID="+routerParamID)
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.concertId2Name = data.data.concertId2Name;
						v.liveControl = data.data.liveControl;
						v.liveShowItem = data.data.liveShowItem;
						v.starHitList = data.data.liveControl.starHitList+"";
						v.totalInteraction = data.data.liveControl.totalInteraction+"";
						let liveRateFormats_tmp = [];
						let liveControlLiveRateFormar = data.data.liveControl.liveRateFormat;
						let FBArr = liveControlLiveRateFormar.split("_");
						let front = FBArr[0];
						v.back = FBArr[1];
						let length = front.length;
						for(let i=0;i<length;i++){
							liveRateFormats_tmp.push(front.charAt(i));
						}
						/*if(liveControlLiveRateFormar.search("2")){
							liveRateFormats_tmp.push("2");
						}
						if(liveControlLiveRateFormar.search("3")){
							liveRateFormats_tmp.push("3");
						}
						if(liveControlLiveRateFormar.search("4")){
							liveRateFormats_tmp.push("4");
						}*/
						v.liveRateFormats = liveRateFormats_tmp;
						v.liveRateFormat_default = data.data.liveRateFormat_default;
						v.liveRateFormat = data.data.liveRateFormat;
						v.vrLimit = data.data.liveControl.vrLimit+"";
						v.playerDanmakuDefaultStatus = data.data.liveControl.playerDanmakuDefaultStatus+"";
						v.danmakuReceiveStatus = data.data.liveControl.danmakuReceiveStatus+"";
						v.danmakuSendStatus = data.data.liveControl.danmakuSendStatus+"";
						v.danmakuPropStatus = data.data.liveControl.danmakuPropStatus+"";
						let functional_tmp = [];
						let liveControlFunctional = data.data.liveControl.functional;
						if(liveControlFunctional.search("1")>-1){
							functional_tmp.push("1");
						}
						if(liveControlFunctional.search("2")>-1){
							functional_tmp.push("2");
						}
						if(liveControlFunctional.search("3")>-1){
							functional_tmp.push("3");
						}
						if(liveControlFunctional.search("4")>-1){
							functional_tmp.push("4");
						}
						if(liveControlFunctional.search("5")>-1){
							functional_tmp.push("5");
						}
						if(liveControlFunctional.search("6")>-1){
							functional_tmp.push("6");
						}
						v.functional = functional_tmp;
						v.liveShowItem = data.data.liveShowItem;
						if(data.data.starImgurl!=null){
							v.starImgurl = data.data.starImgurl;
						}
						if(data.data.adsImgurl!=null){
							v.adsImgurl = data.data.adsImgurl;
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
	        v.controlIndex = '/livehost/index/'+this.concertID+'/'+this.concertName;
	        v.controlAdedit = '/livehost/adedit/'+this.concertID+'/'+this.concertName;
	        v.controlToLiveViewAngle = '/livehost/toLiveViewAngle/'+this.concertID+'/'+this.concertName;
	        v.rankingPic = '/livehost/rankingPic/'+this.concertID+'/'+this.concertName;
	        v.danmakuSend = '/importDanmaku/send/'+this.concertID+'/'+this.concertName;
	        v.danmakuIndex = '/importDanmaku/index/'+this.concertID+'/'+this.concertName;
	        v.danmakuDataPage = '/importDanmaku/data/'+this.concertID+'/'+this.concertName;
	        v.area = '/livehost/area/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;

	        v.$http.get(BASE+"/livehost/getLiveControlData?concertID="+routerParamID)
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.concertId2Name = data.data.concertId2Name;
						v.liveControl = data.data.liveControl;
						v.liveShowItem = data.data.liveShowItem;
						v.starHitList = data.data.liveControl.starHitList+"";
						v.totalInteraction = data.data.liveControl.totalInteraction+"";
						let liveRateFormats_tmp = [];
						let liveControlLiveRateFormar = data.data.liveControl.liveRateFormat;
						let FBArr = liveControlLiveRateFormar.split("_");
						let front = FBArr[0];
						v.back = FBArr[1];
						let length = front.length;
						for(let i=0;i<length;i++){
							liveRateFormats_tmp.push(front.charAt(i));
						}
						/*if(liveControlLiveRateFormar.search("2")){
							liveRateFormats_tmp.push("2");
						}
						if(liveControlLiveRateFormar.search("3")){
							liveRateFormats_tmp.push("3");
						}
						if(liveControlLiveRateFormar.search("4")){
							liveRateFormats_tmp.push("4");
						}*/
						v.liveRateFormats = liveRateFormats_tmp;
						v.liveRateFormat_default = data.data.liveRateFormat_default;
						v.liveRateFormat = data.data.liveRateFormat;
						v.vrLimit = data.data.liveControl.vrLimit+"";
						v.playerDanmakuDefaultStatus = data.data.liveControl.playerDanmakuDefaultStatus+"";
						v.danmakuReceiveStatus = data.data.liveControl.danmakuReceiveStatus+"";
						v.danmakuSendStatus = data.data.liveControl.danmakuSendStatus+"";
						v.danmakuPropStatus = data.data.liveControl.danmakuPropStatus+"";
						let functional_tmp = [];
						let liveControlFunctional = data.data.liveControl.functional;
						if(liveControlFunctional.search("1")>-1){
							functional_tmp.push("1");
						}
						if(liveControlFunctional.search("2")>-1){
							functional_tmp.push("2");
						}
						if(liveControlFunctional.search("3")>-1){
							functional_tmp.push("3");
						}
						if(liveControlFunctional.search("4")>-1){
							functional_tmp.push("4");
						}
						if(liveControlFunctional.search("5")>-1){
							functional_tmp.push("5");
						}
						if(liveControlFunctional.search("6")>-1){
							functional_tmp.push("6");
						}
						v.functional = functional_tmp;
						v.liveShowItem = data.data.liveShowItem;
						if(data.data.starImgurl!=null){
							v.starImgurl = data.data.starImgurl;
						}
						if(data.data.adsImgurl!=null){
							v.adsImgurl = data.data.adsImgurl;
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