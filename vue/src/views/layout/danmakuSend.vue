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
		    <Form :model="formItem" :label-width="120" inline>
		    	<FormItem label="选择标签:">
		    		<Select v-model="danmakutag" @on-change="tagChange">
		    			<Option v-for="item in danmakuTags" :value="item.id">{{ item.tagname }}</Option>
		    			<!-- <Option value="">-请选择-</Option>
                        <Option value="89">2121</Option>
                        <Option value="90">33232</Option> -->
		    		</Select>
		    	</FormItem>
		    	<Button type="success" @click="refreshTag">刷新数据</Button>
		    	<br>
		    	<FormItem label="弹幕类型:">
		    		<Select v-model="danmakuType">
			    		<Option value="">-请选择-</Option>
	                    <Option value="1">颜色弹幕</Option>
	                    <Option value="2">气泡弹幕</Option>
	                    <Option value="3">道具弹幕</Option>
		    		</Select>
		    	</FormItem>
		    	<br>
		    	<Button type="success" @click="sendDanmakus">批量发送</Button>
		    </Form>
		    <div>
		        <Table border ref="selection" :columns="columns" :data="datas" @on-selection-change="selChange"></Table>
		        <Button @click="handleSelectAll(true)">全选</Button>
		        <Button @click="handleSelectAll(false)">取消全选</Button>
		    </div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				danmakuTags:[],
				danmakutag:"",
				theme1: 'light',
				danmakuType:"",
				lableValue:"",
				columns: [
					{
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '内容',
                        key: 'content'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        render: (h, params) => {
							return  h('Button-group', [
								h('i-button', {
									props: {
										type: 'success'
									},
									on: {
										click: () => {
										   this.sendDanmaku(params.row);
										}
									}
								}, '发送')
							])
						}
                    }
                ],
                datas: [
                    /*{
                        content:"测试数据1"
                    },
                    {
                        content:"测试数据2"
                    },
                    {
                        content:"测试数据3"
                    },
                    {
                        content:"测试数据4"
                    }*/
                ],
                preDatas:[],
                controlLcedit:'',
				controlIndex:'',
				controlAdedit:'',
				controlToLiveViewAngle:'',
				rankingPic:'',
				danmakuIndex:'',
				danmakuDataPage:'',
				area:'',
				ids:[]
			}

		},
		methods: {
			handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            sendDanmakus(){
            	var v = this;
            	if(v.ids==null||v.ids.length==0){
            		v.$Message.error("请至少勾选一个弹幕!");
            		return;
            	}
            	if(v.danmakuType==null||v.danmakuType==""){
            		v.$http.post(BASE+"/importDanmaku/sendDanmaku.do",
            			{
            				ids:JSON.stringify(v.ids),
            				danma:[],
            				danmakutype:v.danmakuType,
            				resourceId:v.concertID
            			}
            		,{emulateJSON:true})
					.then(function(resp) {
						var data = resp.body.data;
						if(data.code=="000000"){
							v.$Message.success("发送成功" , 2);
						}else{
							v.$Message.error("发送失败" , 2);
						}
					})
					.catch(function(resp) {
						v.$Message.error("未知错误", 2);
					});
            	}
            },
            sendDanmaku(param){
            	//发送普通弹幕
            	var v = this;
            	if(v.ids==null||v.ids.length==0){
            		v.$Message.error("请至少勾选一个弹幕!");
            		return;
            	}
            	v.$http.post(BASE+"/importDanmaku/sendDanmaku.do",
            			{
            				ids:JSON.stringify(v.ids),
            				danma:[],
            				danmakutype:v.danmakuType,
            				resourceId:v.concertID
            			}
            		,{emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("发送成功" , 2);
					}else{
						v.$Message.error("发送失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
            },
            removeDanmaku(val){
				let v = this;
				let index = v.indexs.indexOf(val);
				if(index>-1){
					v.indexs.splice(index,1);
				}
			},
			selChange(selection){
				var v = this;
				v.preDatas = selection;
				let tmp = [];
				for(let i =0;i<selection.length;i++){
					tmp[i] = selection[i].id;
				}
				v.ids = tmp;
			},
			tagChange(){
				let v = this;
			},
			refreshTag(){
				let v = this;
				v.$http.post(BASE+"/importDanmaku/send.do",{concertID:v.concertID,danmakutag:v.danmakutag},{emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.danmakuTags = data.data.danmakuTags;
						v.danmakutag = data.data.selecttag;
						let dt = data.data.danmakuPreAudits;
						if(dt!=null&&dt.length>0){
							v.datas = dt;
						}else{
							v.datas = [];
						}
					}else{
						v.$Message.error("获取数据失败" , 2);
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
	        v.danmakuIndex = '/importDanmaku/index/'+this.concertID+'/'+this.concertName;
	        v.danmakuDataPage = '/importDanmaku/data/'+this.concertID+'/'+this.concertName;
	        v.area = '/livehost/area/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;


	        v.$http.post(BASE+"/importDanmaku/send.do",{concertID:v.concertID,danmakutag:v.danmakutag},{emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.danmakuTags = data.data.danmakuTags;
						let dt = data.data.danmakuPreAudits;
						if(dt!=null&&dt.length>0){
							alert(dt);
							v.datas = dt;
						}
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
		},
	}
</script>