<style>

</style>
<style scoped>
	
</style>
<template>
		<div>
			<ul>
				<li role="presentation" class="dropdown-header">直播控制</li>
	            <li><a v-bind:href="['/livehost/lcedit.do?concertID='+concertID]">控制修改</a></li>
	            <li><a v-bind:href="['/livehost/index.do?concertID='+concertID]" >直播修改</a></li>
	            <li><a v-bind:href="['/livehost/adedit.do?concertID='+concertID]">广告修改</a></li>
	            <li><a v-bind:href="['/livehost/toLiveViewAngle.do?concertID='+concertID]">直播视角</a></li>
	            <li><a v-bind:href="['/livehost/rankingPic.do?concertID='+concertID]" >贡献榜快照</a></li>
	            <li class="divider"></li>
	            <li role="presentation" class="dropdown-header">弹幕控制</li>
	            <li><a v-bind:href="['/importDanmaku/index.do?concertID='+concertID]">弹幕送审</a></li>
	            <li><a v-bind:href="['/importDanmaku/send.do?concertID='+concertID]">弹幕发送</a></li>
	            <li><a v-bind:href="['/importDanmaku/data.do?concertID='+concertID]">互动数据</a></li>
	            <li class="divider"></li>
	            <li role="presentation" class="dropdown-header">区域</li>
	            <li><a v-bind:href="['/livehost/area.do?concertID='+concertID]">省份筛选</a></li>
			</ul>
		</div>
</template>

<script>
	export default {
		name:'actionUl',
		props:["conpath","concertID"],


		data() {
			return {
				
			}

		},
		methods: {

			
		},
		created() {
	        
		}
	}
</script>