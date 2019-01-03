<style scoped>
    .layout-assistant{
        color:#BB5500;
        font-weight:bold;
        font-family:STKaiti;
        width: 400px;
        margin: 0 auto;
        height: inherit;
    }
    .font-class1{
        color:green;
    }
    .calss_tab{
        width:  300px;
        margin: 0 auto;
        height: inherit;
    }
    .class_menu2{
        width:  500px;
        margin-left: auto;
        margin-right: auto;
        /*margin: 0 auto;
        height: inherit;*/
    }
    .class_select1{
        width:  500px;
        margin-left: auto;
        margin-right: auto;
    }
    .class_div2{
        width:  500px;
        margin-left: auto;
        margin-right: auto; 
    }
</style>
<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <FONT class= 'font-class'>
                基本信息
            </FONT>
            <font class= 'font-class1'>演唱会id：{{ concertId }}</font>
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
            <router-link class='menu-a-class' :to="rankingPic">贡献榜快照</router-link>
            <router-link class='menu-a-class' :to="danmakuSend">弹幕发送</router-link>
            <router-link class='menu-a-class' :to="danmakuIndex">弹幕送审</router-link>
            <router-link class='menu-a-class' :to="danmakuDataPage">互动数据</router-link>
            <router-link class='menu-a-class' :to="area">省份筛选</router-link>
            <router-link class='menu-a-class' to="/livehost/adlist">回到直播控制主页</router-link>
        </Menu>
        
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <div class= 'layout-assistant'> 
                <font  size="100px">星光榜运营平台</font> 
            </div>
        </Menu>

        <Menu class="class_menu2" mode="horizontal" :theme="theme1" active-name="1" @on-select="menuChange">
            <div>
                <MenuItem name="1">
                    <Icon type="settings"></Icon>
                    指定uid发送
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="settings"></Icon>
                    马甲批量发送
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="settings"></Icon>
                    综合设置
                </MenuItem>
            </div>
        </Menu>

        <br>

        <div class="class_div2" v-show="show1">
            <font size="50px">本场演唱会艺人列表:</font>
            <br>
            <Select v-model="starList1" class="class_select1" size="large" @on-change="starSelectChange1">
                <Option v-for="item in starList" :value="item.singerId" :key="item.singerId">{{ item.singName }}</Option>
            </Select>
            <br>
            <font size="50px">填写uid:</font>
            <br>
            <Input v-model="uidValue" placeholder="请输入uid" style="width: 500px" size="large"></Input>
            <br>
            <font size="50px">填写星光值:</font>
            <br>
            <Input v-model="value_uid" placeholder="请输入星光值" style="width: 500px" size="large" number="true" :disabled="starValueDis"></Input>
            <br>
            <br>
            <Button type="success" style="margin-left:38%" size="large" @click="uidSend">发送星光值!</Button>
        </div>

        <div class="class_div2" v-show="show2">
            <font size="50px">本场演唱会艺人列表:</font>
            <br>
            <Select v-model="starList1" class="class_select1" size="large" @on-change="starSelectChange2">
                <Option v-for="item in starList" :value="item.singerId">{{ item.singName }}</Option>
            </Select>
            <br>
            <font size="50px">填写星光值:</font>
            <br>
            <Input v-model="value_mj" placeholder="请输入星光值" style="width: 500px" size="large" number="true" :disabled="starValueDis"></Input>
            <br>
            <br>
            <font size="5px">马甲运营上限</font>
            <font size="5px" style="color:red">(不能超过个人排行榜第几位):</font>
            <br>
            <InputNumber :max="1000" :min="1" v-model="value1" style="width: 500px" size="large" disabled="true"></InputNumber>
            <br>
            <br>
            <Button type="success" style="margin-left:38%" size="large" @click="mjSend">马甲集中发送!</Button>
        </div>
            
        <div class="class_div2" v-show="show3">
            <font size="50px">星光榜打榜开关</font>
            <br>
            <Select v-model="hitsTheSwitch" class="class_select1" size="large" @on-change="switchChange">
                <Option value="1">开</Option>
                <Option value="0">关</Option>
            </Select>
            <br>
        </div>
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
    </div>
</template>
<script>
export default {
  computed:{
    
  },
  data() {
    return {
       formItem: {
            input: '',
            select: '',
            radio: 'male',
            checkbox: [],
            switch: true,
            date: '',
            time: '',
            slider: [20, 50],
            textarea: ''
        },
        show1:true,
        show2:false,
        show3:false,
        hitsTheSwitch:'1',
        subTs:false,
        starList:[
        ],
        starValueDis:false,
        value1:10,
        subStarId:"",
        uidValue:"",
        value_uid:"",
        value_mj:"",
        sublimit:"",
        switchChangeTmp:0,
    }
  },
  methods: {
    menuChange(name){
        let v =this;
        if(name==1){
            v.show1=true;
            v.show2=false;
            v.show3=false;
        }else if(name==2){
            v.show1=false;
            v.show2=true;
            v.show3=false;
            if(v.starList1!="undefined"&&v.starList1!=null){
                v.starSelectChange2(v.starList1);
            }
        }else if(name==3){
            v.show1=false;
            v.show2=false;
            v.show3=true;
        }
    },
    switchChange(value){
        let v = this;
        if(v.switchChangeTmp>0){
            v.subTs = true;
            v.hitsTheSwitch = value;
        }
    },
    subForm(){
        let v = this;
        v.subTs = false;
        v.$http.get(BASE + "/livehost/startBoardSwitch.do?concertId="+v.concertId+"&starBoardSwitch="+v.hitsTheSwitch)
        .then(function(resp){
            var data = resp.body.data;
            if(data.code=="000000"){
                let tmp = data.data;
                v.$Message.success("修改成功!",2);
            }else{
                v.$Message.error("修改失败", 2);
            }
        })
        .catch(function(resp) {
           v.$Message.error("系统内部异常", 2);
        });

       /* if(v.hitsTheSwitch=='1'){
            v.$Message.success("打开成功!",2);
        }else{
            v.$Message.success("关闭成功!",2);
        }*/
    },
    uidSend(){
        let v =this;
        if(v.subStarId==""){
            v.$Message.error("请选择正确的艺人！");
            return;
        }
        if(!v.uidValue||v.uidValue==""){
            v.$Message.error("请填写正确的uid！");
            return;
        }
        if(!v.value_uid||v.value_uid==""){
            v.$Message.error("请输入正确的星光值!");
            return;
        }
        let subUidValue = parseInt(v.value_uid);
        if(!subUidValue){
            v.$Message.error("请输入正确的星光值!");
            return;
        }
        v.$http.get(BASE + "/livehost/uidSend.do?concertId="+v.concertId+"&starId="+v.subStarId+"&uid="+v.uidValue+"&value="+subUidValue)
        .then(function(resp){
            var data = resp.body.data;
            if(data.code=="000000"){
                v.$Message.success("发送成功!",2);
            }else{
                v.$Message.error(data.data, 2);
            }
        })
        .catch(function(resp) {
           v.$Message.error("系统内部异常", 2);
        });
    },
    mjSend(){
        let v =this;
        if(v.subStarId==""){
            v.$Message.error("请选择正确的艺人！");
            return;
        }
        if(!v.value_mj||v.value_mj==""){
            v.$Message.error("请输入正确的星光值!");
            return;
        }
        let subMjValue = parseInt(v.value_mj);
        if(!subMjValue){
            v.$Message.error("请输入正确的星光值!");
            return;
        }
        v.$http.get(BASE + "/livehost/mjSend.do?concertId="+v.concertId+"&starId="+v.subStarId+"&amount="+subMjValue+"&limit="+v.sublimit)
        .then(function(resp){
            var data = resp.body.data;
            if(data.code=="000000"){
                let tmp = data.data;
                v.$Message.success("发送成功!",2);
            }else{
                v.$Message.error("发送失败", 2);
            }
        })
        .catch(function(resp) {
           v.$Message.error("系统内部异常", 2);
        });
    },
    starSelectChange1(value){
        let v = this;
        v.$http.get(BASE + "/livehost/queryLimit.do?concertId="+v.concertId+"&starId="+value)
        .then(function(resp){
            var data = resp.body.data;
            if(data.code=="000000"){
                let tmp = data.data;
                let total = tmp.total;
                let limit = tmp.limit;
                v.sublimit = limit;
                v.starValueDis = false;
                v.subStarId = value;
            }else{
                v.$Message.error("查询艺人星光榜运营限制失败", 2);
                v.starValueDis = false;
                v.subStarId = "";
            }
        })
        .catch(function(resp) {
           v.$Message.error("系统内部异常", 2);
           v.starValueDis = false;
           v.subStarId = "";
        });
    },
    starSelectChange2(value){
        let v = this;
        v.$http.get(BASE + "/livehost/queryLimit.do?concertId="+v.concertId+"&starId="+value)
        .then(function(resp){
            var data = resp.body.data;
            if(data.code=="000000"){
                let tmp = data.data;
                let total = tmp.total;
                let limit = tmp.limit;
                v.sublimit = limit;
                if(total<10){
                    v.$Message.error("该艺人个人排行榜不足十人,不满足运营要求！");
                    v.starValueDis = true;
                    v.subStarId = "";
                }else{
                    v.starValueDis = false;
                    v.subStarId = value;
                }
            }else{
                v.$Message.error("查询艺人星光榜运营限制失败", 2);
                v.starValueDis = false;
                v.subStarId = "";
            }
        })
        .catch(function(resp) {
           v.$Message.error("系统内部异常", 2);
           v.starValueDis = false;
           v.subStarId = "";
        });
    },
    /*test(){
        alert(111);
    }*/
  },
  created() {
    let v =this;
   // 取到路由带过来的参数 
    let routerParamID = v.$route.params.concertID;
    let routerParamName = v.$route.params.concertName;
    /*let routerParamID = v.$route.query.concertId;
    let routerParamName = v.$route.query.concertName;*/
    // 将数据放在当前组件的数据内
    v.concertId = routerParamID;
    v.concertName = routerParamName; 

    v.controlIndex = '/livehost/index/'+this.concertId+'/'+this.concertName;
    v.controlLcedit = '/livehost/lcedit/'+this.concertId+'/'+this.concertName;
    v.controlAdedit = '/livehost/adedit/'+this.concertId+'/'+this.concertName;
    v.controlToLiveViewAngle = '/livehost/toLiveViewAngle/'+this.concertId+'/'+this.concertName;
    v.rankingPic = '/livehost/rankingPic/'+this.concertId+'/'+this.concertName;
    v.danmakuSend = '/importDanmaku/send/'+this.concertId+'/'+this.concertName;
    v.danmakuIndex = '/importDanmaku/index/'+this.concertId+'/'+this.concertName;
    v.danmakuDataPage = '/importDanmaku/data/'+this.concertId+'/'+this.concertName;
    v.area = '/livehost/area/'+this.concertId+'/'+this.concertName;



    // alert(v.$route.query.token);
    v.$http.get(BASE + "/livehost/queryStarList.do?concertId="+v.concertId)
    .then(function(resp){
        var data = resp.body.data;
        if(data.code=="000000"){
            let tmp = data.data;
            v.starList = tmp;
            v.$Message.success("查询艺人列表成功", 2);
        }else{
            v.$Message.error("查询艺人列表失败", 2);
        }
    })
    .catch(function(resp) {
       v.$Message.error("系统内部异常", 2);
    });

    v.$http.get(BASE + "/livehost/queryStarBoardSwitch.do?concertId="+v.concertId)
    .then(function(resp){
        var data = resp.body.data;
        if(data.code=="000000"){
            let tmp = data.data;
            v.hitsTheSwitch = tmp;
            v.$Message.success("查询活动开关成功", 2);
            v.switchChangeTmp = 1;
        }else{
            v.$Message.error("查询活动开关失败", 2);
        }
    })
    .catch(function(resp) {
       v.$Message.error("系统内部异常", 2);
    });

  },
  mounted(){
    /*var v = this;
    v.test();
    v.$http(
    {
        method:"get",
        url:"http://218.200.227.207:18089/MIGUM2.0/v1.0/danmaku/starUserRank.do?ua=Android_migu&version=5.0&concertId=21775903&starId=23054226",
        headers: {'token': 's183'}
    }
        )
    .then(function(resp){
        var data = resp.body.data;
        if(data.success){
            let tmp = data.data;
            v.hitsTheSwitch = tmp;
            v.$Message.success("查询活动开关成功", 2);
            v.switchChangeTmp = 1;
        }else{
            v.$Message.error("查询活动开关失败", 2);
        }
    })
    .catch(function(resp) {
       v.$Message.error("系统内部异常", 2);
    });*/
  }
}
</script>
