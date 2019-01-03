<style>

</style>
<template>
  <dev>
      111
  </dev>
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
