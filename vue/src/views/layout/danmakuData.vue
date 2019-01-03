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
		    	<FormItem label="消息筛选:">
		    		<Select v-model="danmutype">
		    			<Option value="">-请选择-</Option>
                        <Option value="1">文字评论</Option>
                        <Option value="2">礼物道具</Option>
                        <Option value="3">收费道具</Option>
		    		</Select>
		    	</FormItem>
		    	<Font>开始时间:</Font>
		    	<DatePicker   v-model="date1"  format="yyyy-MM-dd" type="date" :start-date="new Date(2018, 01, 01)" placeholder="选择开始日期" style="width: 200px"  @on-change="date1=$event"></DatePicker>
            	<TimePicker   v-model="time1" format="HH-mm-ss" placeholder="选择开始时间" style="width: 168px"></TimePicker>
            	<Font>结束时间:</Font>
		    	<DatePicker   v-model="date2"  format="yyyy-MM-dd" type="date" :start-date="new Date(2018, 01, 01)" placeholder="选择结束日期" style="width: 200px"  @on-change="date2=$event"></DatePicker>
            	<TimePicker   v-model="time2" format="HH-mm-ss" placeholder="选择结束时间" style="width: 168px"></TimePicker>
		    	<FormItem label="关键字">
		    		<Input v-model="keyword" size="small"  placeholder="输入关键字"></Input>
		    	</FormItem>
		    	<br>
		    	<center>
                	<Button type="success" @click="searchData">查询</Button>
                	<Button type="error" @click="delDatas">批量删除</Button>
                </center>
		    </Form>
		    <div>
		        <Table border ref="selection" :columns="columns" :data="datas" @on-selection-change="selChange"></Table>
		        <Button @click="handleSelectAll(true)">全选</Button>
		        <Button @click="handleSelectAll(false)">取消全选</Button>
		    </div>
		    <Font>收费道具总价值：{{ countValues }}</Font>
		    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		   	每页显示数量:<Input v-model="pageSize" size="large" style="width:100px"></Input>
		   	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		   	<Font>总共记录数:{{ countNums }}条,</Font>
		   	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		   	<Font>总页数:{{ countPages }}页,</Font>
		   	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		   	<Font>当前显示第{{ pageNum }}页</Font>
		   	[<Button @click="shouye">首页</Button>|<Button @click="shangyiye">上一页</Button>|<Button @click="xiayiye">下一页</Button>|<Button 
		   	@click="moye">末页</Button>]
		   	跳到<Input v-model="targetPage" size="large" style="width:100px"></Input>页
		   	<Button @click="goto">goto</Button>

		</div>
</template>

<script>
	export default {
		data() {
			return {
				limit1:'',
				start1:'',
				endTime:'',
				beginTime:"",
				keyword:"",
				danmutype:"",
				targetPage:1,
				pageNum:1,
				countPages:0,
				countNums:0,
				pageSize:50,
				theme1: 'light',
				labelName:"test",
				msgValue:"",
				controlLcedit:'',
				controlIndex:'',
				controlAdedit:'',
				controlToLiveViewAngle:'',
				rankingPic:'',
				danmakuSend:'',
				danmakuIndex:'',
				area:'',
				columns:[
					{
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '日期',
                        key: 'field01'
                    },
                    {
                        title: '内容',
                        key: 'content'
                    },
                    {
                        title: '用户名',
                        key: 'username'
                    },
                    {
                        title: '用户ID',
                        key: 'userid'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        render: (h, params) => {
							return  h('Button-group', [
								h('i-button', {
									props: {
										type: 'error'
									},
									on: {
										click: () => {
										   this.delData(params.row);
										}
									}
								}, '删除')
							])
						}
                    }
				],
				datas:[
					/*{
						field01:"test",
						content:"test",
						username:"test",
						userid:"test"
					},
					{
						field01:"test",
						content:"test",
						username:"test",
						userid:"test"
					},
					{
						field01:"test",
						content:"test",
						username:"test",
						userid:"test"
					},
					{
						field01:"test",
						content:"test",
						username:"test",
						userid:"test"
					}*/
				],
				ids:[]
			}

		},
		methods: {
			handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            delDatas(){
            	let v = this;
            	v.$http.post(BASE+"/importDanmaku/deleteDanmaku.do",{
		        	ids:JSON.stringify(v.ids)
		        },{emulateJSON:true})
				.then(function(resp) {
					//var data = resp.body.data.data;
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("删除成功" , 2);
						v.searchData();
					}else{
						v.$Message.error("删除失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
            },
            delData(row){
            	let v = this;
            	if(v.ids.length>1){
            		v.$Message.error("请选择批量删除" , 2);
            		return;
            	}
            	let tmpIds = [];
            	tmpIds[0] = row.id;
            	v.$http.post(BASE+"/importDanmaku/deleteDanmaku.do",{
		        	ids:JSON.stringify(tmpIds)
		        },{emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.$Message.success("删除成功" , 2);
						v.searchData();
					}else{
						v.$Message.error("删除失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
            },
            searchData(){
            	let v = this;
            	let calST;
            	let calET;
            	if(v.date1==""&&v.time1!=""){
            		v.$Message.error("请填写开始日期" , 2);
            		return;
            	}
            	if(v.date1!=""&&v.time1==""){
            		v.$Message.error("请填写开始时间" , 2);
            		return;
            	}

            	if(v.date2!=""&&v.time2==""){
            		v.$Message.error("请填写结束时间" , 2);
            		return;
            	}
            	if(v.date2==""&&v.time2!=""){
            		v.$Message.error("请填写结束日期" , 2);
            		return;
            	}
            	if(v.date1!=""&&v.time1!=""){
            		calST = v.date1+'-'+v.time1;
            	}else{
            		calST = null;
            	}
            	if(v.date2!=""&&v.time2!=""){
            		calET = v.date2+'-'+v.time2;
            	}else{
            		calET = null;
            	}
            	v.$http.post(BASE+"/importDanmaku/data.do",{
		        	concertID:v.concertID,
		        	danmutype:v.danmutype,
		        	keyword:v.keyword,
		        	beginTime:calST,
		        	endTime:calET,
		        	start1:v.pageNum,
		        	limit1:v.pageSize
		        },{emulateJSON:true})
				.then(function(resp) {
					var data = resp.body.data;
					if(data.code=="000000"){
						v.danmakuTags = data.data.danmakuTags;
						v.countNums = data.data.total;
						v.countPages = data.data.pageCount;
						v.pageNum = data.data.start;
						v.pageSize = data.data.limit;
						v.countValues = data.data.totalPropPrice;
						v.keyword = data.data.keyword;
						v.danmutype = data.data.danmutype;
						v.datas = data.data.danmakuLibItems;
					}else{
						v.$Message.error("获取数据失败" , 2);
					}
				})
				.catch(function(resp) {
					v.$Message.error("未知错误", 2);
				});
            },
            shouye(){
            	let v = this;
            	if(v.pageNum==1){
            		v.$Message.error("已经是首页了！");
            		return;
            	}else{
            		v.pageNum = 1;
            		v.searchData();
            	}
            },
            shangyiye(){
            	let v = this;
            	if(v.pageNum==1){
            		v.$Message.error("已经是首页了！");
            		return;
            	}else{
            		v.pageNum = v.pageNum-1;
            		v.searchData();
            	}
            },
            xiayiye(){
            	let v = this;
            	if(v.pageNum==v.countPages){
            		v.$Message.error("已经是末页了！");
            		return;
            	}else{
            		v.pageNum = v.pageNum+1;
            		v.searchData();
            	}
            },moye(){
            	let v = this;
            	if(v.pageNum==v.countPages){
            		v.$Message.error("已经是末页了！");
            		return;
            	}else{
            		v.pageNum = v.countPages;
            		v.searchData();
            	}
            },goto(){
            	let v = this;
            	if(v.targetPage<1||v.targetPage>v.countPages){
            		v.$Message.error("请正确填写页码!");
            		return;
            	}else{
            		v.pageNum = v.targetPage;
            		v.searchData();
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
			
		},
		created() {
	        // 取到路由带过来的参数 
	        let routerParamID = this.$route.params.concertID;
	        let routerParamName = this.$route.params.concertName;
	        let v = this;
	        // 将数据放在当前组件的数据内
	        this.concertID = routerParamID;
	        this.concertName = routerParamName;
	        v.controlLcedit = '/livehost/lcedit/'+this.concertID+'/'+this.concertName;
	        v.controlIndex = '/livehost/index/'+this.concertID+'/'+this.concertName;
	        v.controlAdedit = '/livehost/adedit/'+this.concertID+'/'+this.concertName;
	        v.controlToLiveViewAngle = '/livehost/toLiveViewAngle/'+this.concertID+'/'+this.concertName;
	        v.rankingPic = '/livehost/rankingPic/'+this.concertID+'/'+this.concertName;
	        v.danmakuSend = '/importDanmaku/send/'+this.concertID+'/'+this.concertName;
	        v.danmakuIndex = '/importDanmaku/index/'+this.concertID+'/'+this.concertName;
	        v.area = '/livehost/area/'+this.concertID+'/'+this.concertName;
	        v.starBoardOperation = '/livehost/starBoardOperation/'+this.concertID+'/'+this.concertName;


	        v.$http.post(BASE+"/importDanmaku/data.do",{
	        	concertID:v.concertID,
	        	danmutype:v.danmutype,
	        	keyword:v.keyword,
	        	beginTime:v.beginTime,
	        	endTime:v.endTime,
	        	start1:v.start1,
	        	limit1:v.limit1
	        },{emulateJSON:true})
			.then(function(resp) {
				var data = resp.body.data;
				if(data.code=="000000"){

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