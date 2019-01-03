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
				<router-link class='menu-a-class' :to="danmakuIndex">弹幕送审</router-link>
				<router-link class='menu-a-class' :to="danmakuDataPage">互动数据</router-link>
				<router-link class='menu-a-class' to="/livehost/adlist">回到直播控制主页</router-link>
	    	</Menu>
	    	<!-- <p>Change theme</p>
		    <RadioGroup v-model="theme1">
		        <Radio label="light"></Radio>
		        <Radio label="dark"></Radio>
		        <Radio label="primary"></Radio>
		    </RadioGroup> -->
		    <br>
		    <fieldset>
                <legend>
                    专属演唱会
                </legend>
                <div style="display: inline-block;">
                	<font color="red" size="6">
                		注意事项：
                	</font>
                    <br>
                    <font color="red" size="6">
                		*1 多条订购业务之间用&amp;符号进行拼接。
                	</font>
                    <br>
                    <font color="red" size="6">
                		*2 样列：1234&amp;2345&amp;3456。
                	</font>
                    <br>
                </div>
                <ul>
		           	<li v-for="(item,index) in items">
		           		<Form :model="item" :label-width="120" inline>
		           			<FormItem>
		           				<Button type="error" class='sub-class' @click='remove(item)'>删除</Button>
		           			</FormItem>
		           			<br>
		           			<FormItem label='地区选择:'>
		           				 <Select v-model="item.provinceId">
		                			<Option value="00">-请选择地区-</Option>
		                            <Option value="01">01	北京</Option>
		                            <Option value="02">02	天津</Option>
		                            <Option value="03">03	河北</Option>
		                            <Option value="04">04	山西</Option>
		                            <Option value="05">05	内蒙古</Option>
		                            <Option value="06">06	辽宁</Option>
		                            <Option value="07">07	吉林</Option>
		                            <Option value="08">08	黑龙江</Option>
		                            <Option value="09">09	上海</Option>
		                            <Option value="10">10	江苏</Option>
		                            <Option value="11">11	浙江</Option>
		                            <Option value="12">12	安徽</Option>
		                            <Option value="13">13	福建</Option>
		                            <Option value="14">14	江西</Option>
		                            <Option value="15">15	山东</Option>
		                            <Option value="16">16	河南</Option>
		                            <Option value="17">17	湖北</Option>
		                            <Option value="18">18	湖南</Option>
		                            <Option value="19">19	广东</Option>
		                            <Option value="20">20	海南</Option>
		                            <Option value="21">21	广西</Option>
		                            <Option value="22">22	重庆</Option>
		                            <Option value="23">23	四川</Option>
		                            <Option value="24">24	贵州</Option>
		                            <Option value="25">25	云南</Option>
		                            <Option value="26">26	陕西</Option>
		                            <Option value="27">27	甘肃</Option>
		                            <Option value="28">28	青海</Option>
		                            <Option value="29">29	宁夏</Option>
		                            <Option value="30">30	新疆</Option>
		                            <Option value="31">31	西藏</Option>
				                </Select>
		           			</FormItem>
		           			<br>
		           			<FormItem label='订购业务'>
		           				<Input v-model="item.code"></Input>
		           			</FormItem>
		           		</Form>
		               
		                <br>
		                
		            </li>
		        </ul>
	            <center>
	            	<Button type="success" class='sub-class' @click='addColumn'>添加</Button>
	            	<Button type="success" class='sub-class' @click='subColumn'>提交</Button>
	            </center>
            </fieldset>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				theme1: 'light',
				controlLcedit:'',
				controlIndex:'',
				controlAdedit:'',
				rankingPic:'',
				danmakuSend:'',
				danmakuIndex:'',
				danmakuDataPage:'',
				controlToLiveViewAngle:'',
				items:[
					{
						provinceId:'00',
						code:'test'
					}
				]
			}

		},
		methods: {
			addColumn(){
				var v = this;
				if(v.items==null){
					v.items = new Array();
				}
				v.items.push({
					provinceId:'00',
					code:'test'
				})
			},
			remove(item){
				var v = this;
				let index = v.items.indexOf(item);
				v.items.splice(index,1);
			},
			subColumn(){
				let v = this;
				v.$http.post(BASE+"/livehost/areaReplace.do", {resourceId:v.concertID,provinces:JSON.stringify(v.items)}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("提交成功" , 2);
					}else{
						v.$Message.error("提交失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知异常", 2);
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
	        v.rankingPic = '/livehost/rankingPic/'+this.concertID+'/'+this.concertName;
	        v.danmakuSend = '/importDanmaku/send/'+this.concertID+'/'+this.concertName;
	        v.danmakuIndex = '/importDanmaku/index/'+this.concertID+'/'+this.concertName;
	        v.danmakuDataPage = '/importDanmaku/data/'+this.concertID+'/'+this.concertName;
	        v.controlToLiveViewAngle = '/livehost/toLiveViewAngle/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;


	        v.$http.post(BASE+"/livehost/area.do", {concertID:v.concertID}, {emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.items = data.data.liveProvince;
					}else{
						v.$Message.error("获取数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知异常", 2);
				});

		}
	}
</script>