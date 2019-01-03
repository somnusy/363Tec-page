<style>

</style>
<style scoped>
	
</style>
<template>
		<div>
			<h1>LIVESHOW-ADMIN</h1>
			<p>{{msg}}</p>
			<router-link :to="{name:'B',params:{concertID:'1',concertName:'ttt'}}">点击跳转到B页面</router-link>


				<!-- <router-link class='menu-a-class' :to="controlLcedit">控制修改</router-link>
				<router-link class='menu-a-class' :to="controlIndex">直播修改</router-link>
				<router-link class='menu-a-class' :to="controlAdedit">广告修改</router-link>
				<router-link class='menu-a-class' :to="controlToLiveViewAngle">直播视角</router-link>
				<router-link class='menu-a-class' :to="rankingPic">贡献榜快照</router-link>
				<router-link class='menu-a-class' :to="danmakuSend">弹幕发送</router-link>
				<router-link class='menu-a-class' :to="danmakuIndex">弹幕送审</router-link>
				<router-link class='menu-a-class' :to="danmakuDataPage">互动数据</router-link>
				<router-link class='menu-a-class' :to="area">省份筛选</router-link>
				<router-link class='menu-a-class' to="/livehost/adlist">回到直播控制主页</router-link> -->
		</div>
</template>

<script>
	export default {
		data() {
			return {
				msg : "1"
			}

		},
		methods: {

			
		},
		created() {
	        // 取到路由带过来的参数 
	        let routerParams = this.$route.params.concertId;
	        // 将数据放在当前组件的数据内
	        this.msg = routerParams
		}
	}
</script>