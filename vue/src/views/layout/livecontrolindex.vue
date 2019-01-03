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
	    	<!-- <p>Change theme</p>
		    <RadioGroup v-model="theme1">
		        <Radio label="light"></Radio>
		        <Radio label="dark"></Radio>
		        <Radio label="primary"></Radio>
		    </RadioGroup> -->
		    <br>
	    	<font class= 'font-class1'>
					产品ID：{{ concertbaseinfo.productID }}
			</font>
			<Form :model="formItem" :label-width="120" inline>
				<FormItem label="liveid:">
	            	<Input v-model="concertbaseinfo.liveshowID" placeholder=""></Input>
	        	</FormItem>
	        	<FormItem label="开始时间:">
	            	<Input v-model="concertbaseinfo.beginTime" placeholder=""></Input>
	        	</FormItem>
	        	<FormItem label="结束时间:">
	            	<Input v-model="concertbaseinfo.endTime" placeholder=""></Input>
	        	</FormItem>
	        	<Radio v-model="timeRadio" @on-change="timeExchange"></Radio>

        		<ul>
		           	 <li v-for="(item,index) in concertbaseinfo.imageUrls">
		           	 	<td>图片{{ index }}: <img src="item" width="300" id="img10">
							<Radio v-model="picModels[index]" @on-change="picOneExchange(item,index)"></Radio>
						</td>
						<br>
		            </li>
		        </ul>

	        	<!-- <td>图片0: <img src="http://content.nf.migu.cn/soe/uniaccess?code=MjJvWEM3R04wbFR2MDAwMDI2MDAwfDIwMzcwODI2MDI1MTU2%7C9501383A3A79A36767D53A94A1E09210DA342B1F7F4B969E741B719D5C8B494D" width="300" id="img10">
				<Radio v-model="pic1Radio" @on-change="picOneExchange"></Radio>
				</td>
				<br>

				<td>图片1: <img src="http://content.nf.migu.cn/soe/uniaccess?code=MjJvWEM3R04wbFR2MDAwMDI2MDAwfDIwMzcwODI2MDI1MTU2%7C9501383A3A79A36767D53A94A1E09210DA342B1F7F4B969E741B719D5C8B494D" width="300" id="img10">
					<Radio v-model="pic2Radio" @on-change="picTwoExchange"></Radio>
				</td>
				<br>

				<td>图片2: <img src="http://content.nf.migu.cn/soe/uniaccess?code=MjJvWEM3R04wbFR2MDAwMDI2MDAwfDIwMzcwODI2MDI1MTU2%7C9501383A3A79A36767D53A94A1E09210DA342B1F7F4B969E741B719D5C8B494D" width="300" id="img10">
					<Radio v-model="pic3Radio" @on-change="picThreeExchange"></Radio>
				</td>
				<br> -->
				<FormItem label="外链地址1:">
	            	<Input v-model="concertbaseinfo.refLink" placeholder=""></Input>
	        	</FormItem>
	        	<FormItem label="外链1权重:">
	            	<Input v-model="concertbaseinfo.linkWeight1" placeholder=""></Input>
	        	</FormItem>
	        	<Radio v-model="link1Radio" @on-change="linkOneExchange"></Radio>

	        	<br>
	        	<FormItem label="外链地址2:">
	            	<Input v-model="concertbaseinfo.refLink2" placeholder=""></Input>
	        	</FormItem>
	        	<FormItem label="外链2权重:">
	            	<Input v-model="concertbaseinfo.linkWeight2" placeholder=""></Input>
	        	</FormItem>
	        	<br>

	        	<FormItem label="MVID:">
	            	<Input v-model="concertbaseinfo.mvid" placeholder=""></Input>
	        	</FormItem>
	        	<Radio v-model="MVIDRadio" @on-change="MVIDExchange"></Radio>

	        	<br>
	        	<hr>
	        	<center>
		        	<Button type="success" class='sub-class' @click="subData">提交</Button>
		    	</center>
			</Form>

			
			
		</div>
</template>

<script>
	export default {
		data() {
			return {
				pic0:false,
				pic1:true,
				pic2:false,
				pic3:false,
				theme1: 'light',
				productID:111,
				pic1Radio:true,
				timeRadio:false,
				pic2Radio:false,
				pic3Radio:false,
				picModels:[this.pic1Radio,this.pic2Radio,this.pic3Radio],
				link1Radio:false,
				MVIDRadio:false,
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
                controlLcedit:'',
				controlAdedit:'',
				controlToLiveViewAngle:'',
				rankingPic:'',
				danmakuSend:'',
				danmakuIndex:'',
				danmakuDataPage:'',
				area:'',
				concertbaseinfo:{},
				liveHostPara:""
			}

		},
		methods: {
			picOneExchange(item,index){
				var v = this;
				if(index==0&&v.picModels[0]==true){
					v.picModels[1] = false;
					v.picModels[2] = false;
					v.link1Radio=false;
					v.MVIDRadio=false;
					v.liveHostPara = "02__"+item;
				}else if(index == 1&&v.picModels[1]){
					v.picModels[0] = false;
					v.picModels[2] = false;
					v.link1Radio=false;
					v.MVIDRadio=false;
					v.liveHostPara = "02__"+item;
				}else if(index == 2&&v.picModels[2]){
					v.picModels[1] = false;
					v.picModels[0] = false;
					v.link1Radio=false;
					v.MVIDRadio=false;
					v.liveHostPara = "02__"+item;
				}
			},
			timeExchange(){
				var v = this;
				if(v.timeRadio){
					v.pic1Radio=false;
					v.pic2Radio=false;
					v.pic3Radio=false;
					v.link1Radio=false;
					v.MVIDRadio=false;
					v.liveHostPara = "07";
				}
			},
			picTwoExchange(){
				var v = this;
				if(v.pic2Radio){
					v.timeRadio=false;
					v.pic1Radio=false;
					v.pic3Radio=false;
					v.link1Radio=false;
					v.MVIDRadio=false;
					v.liveHostPara = "";
				}
			},
			picThreeExchange(){
				var v = this;
				if(v.pic3Radio){
					v.timeRadio=false;
					v.pic1Radio=false;
					v.pic2Radio=false;
					v.link1Radio=false;
					v.MVIDRadio=false;
					v.liveHostPara = "";
				}
			},
			linkOneExchange(){
				var v = this;
				if(v.link1Radio){
					v.timeRadio=false;
					v.pic1Radio=false;
					v.pic2Radio=false;
					v.pic3Radio=false;
					v.MVIDRadio=false;
					v.liveHostPara = "06";
				}
			},
			MVIDExchange(){
				var v = this;
				if(v.MVIDRadio){
					v.timeRadio=false;
					v.pic1Radio=false;
					v.pic2Radio=false;
					v.pic3Radio=false;
					v.link1Radio=false;
					v.liveHostPara = "08";
				}
			},
			subData(){
				let v =this;
				if(v.liveHostPara == ""){
					v.$Message.info("什么都没有选中!" , 2);
					return;
				}else{
					let regu = /^\d+$/;
					if(v.liveHostPara == "06"&&v.concertbaseinfo.refLink.trim().length==0){						
						v.$Message.info("请先输入外链地址!" , 2);
						return;
					}
					if((v.concertbaseinfo.refLink.trim().length>0&&!regu.test(v.concertbaseinfo.linkWeight1))||
						(v.concertbaseinfo.refLink2.trim.length>0&&!regu.test(v.concertbaseinfo.linkWeight2))){
						v.$Message.info("请输入正确的权重!" , 2);
						return;
					}
					let refLink_tmp = v.concertbaseinfo.refLink==null?"":v.concertbaseinfo.refLink;
					let linkWeight1_tmp =v.concertbaseinfo.linkWeight1==null?"":v.concertbaseinfo.linkWeight1;
					let refLink2_tmp = v.concertbaseinfo.refLink2==null?"":v.concertbaseinfo.refLink2;
					let linkWeight2_tmp = v.concertbaseinfo.linkWeight2==null?"":v.concertbaseinfo.linkWeight2;
					var linkJsonData = '{"linkData":[{"refLink":"' + refLink_tmp.trim() + '","linkWeight":"' + linkWeight1_tmp
                    + '"},{"refLink":"' + refLink2_tmp.trim() + '","linkWeight":"'+ linkWeight2_tmp + '"}]}';
                    let liveshowID_tmp = v.concertbaseinfo.liveshowID!=null?v.concertbaseinfo.liveshowID:"";
                    let beginTime_tmp = v.concertbaseinfo.beginTime!=null?v.concertbaseinfo.beginTime:"";
                    let endTime_tmp = v.concertbaseinfo.endTime!=null?v.concertbaseinfo.endTime:"";
                    v.concertbaseinfo.liveshowID  = "07__" + liveshowID_tmp + "__" + beginTime_tmp + "__" + endTime_tmp;
                    v.concertbaseinfo.refLink = "06__" + linkJsonData;
                    let mvid_tmp = v.concertbaseinfo.mvid==null?"":v.concertbaseinfo.mvid;
                    v.concertbaseinfo.mvid = "08__" + mvid_tmp;
                    if(v.link1Radio){
                    	v.liveHostPara = "06__" + linkJsonData;
                    }
                    if(v.timeRadio){
                    	v.liveHostPara = "07__" + liveshowID_tmp + "__" + beginTime_tmp + "__" + endTime_tmp;
                    }
                    if(v.MVIDRadio){
                    	v.liveHostPara = "08__" + mvid_tmp;
                    }
				}
				v.$http.post(BASE+"/livehost/setlive.do", {resourceId:v.concertID,liveHostPara:v.liveHostPara}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("修改成功",2);
						setTimeout(() => {
							v.refresh();
							// v.$router.push('/livehost/index/'+v.concertID+"/"+v.concertName);
							/*v.$Spin.show();
							setTimeout(() => {
		                		v.$Spin.hide();
		                		location.reload();
		                	}, 1000);*/
		                }, 500);
					}else{
						v.$Message.error("修改失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
				v.refresh();
			},
			refresh(){
				let v = this;
				v.$http.post(BASE+"/livehost/index.do", {concertID:v.concertID}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.concertbaseinfo = data.data.concertbaseinfo;
						if(v.concertbaseinfo.showType==v.concertbaseinfo.liveshowID){
							v.timeRadio = true;
							v.liveHostPara = "07";
						}else{
							v.timeRadio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.refLink){
							v.link1Radio = true;
							v.liveHostPara = "06";
						}else{
							v.link1Radio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.mvid){
							v.MVIDRadio = true;
							v.liveHostPara = "08";
						}else{
							v.MVIDRadio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.imageUrls[0]){
							v.pic1Radio = true
						}else{
							v.pic1Radio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.imageUrls[1]){
							v.pic2Radio = true
						}else{
							v.pic2Radio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.imageUrls[2]){
							v.pic3Radio = true
						}else{
							v.pic3Radio = false;
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
	        v.controlAdedit = '/livehost/adedit/'+this.concertID+'/'+this.concertName;
	        v.controlToLiveViewAngle = '/livehost/toLiveViewAngle/'+this.concertID+'/'+this.concertName;
	        v.rankingPic = '/livehost/rankingPic/'+this.concertID+'/'+this.concertName;
	        v.danmakuSend = '/importDanmaku/send/'+this.concertID+'/'+this.concertName;
	        v.danmakuIndex = '/importDanmaku/index/'+this.concertID+'/'+this.concertName;
	        v.danmakuDataPage = '/importDanmaku/data/'+this.concertID+'/'+this.concertName;
	        v.area = '/livehost/area/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;

	        v.$http.post(BASE+"/livehost/index.do", {concertID:v.concertID}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.concertbaseinfo = data.data.concertbaseinfo;
						if(v.concertbaseinfo.showType==v.concertbaseinfo.liveshowID){
							v.timeRadio = true;
							v.liveHostPara = "07";
						}else{
							v.timeRadio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.refLink){
							v.link1Radio = true;
							v.liveHostPara = "06";
						}else{
							v.link1Radio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.mvid){
							v.MVIDRadio = true;
							v.liveHostPara = "08";
						}else{
							v.MVIDRadio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.imageUrls[0]){
							v.pic1Radio = true
						}else{
							v.pic1Radio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.imageUrls[1]){
							v.pic2Radio = true
						}else{
							v.pic2Radio = false;
						}
						if(v.concertbaseinfo.showType==v.concertbaseinfo.imageUrls[2]){
							v.pic3Radio = true
						}else{
							v.pic3Radio = false;
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