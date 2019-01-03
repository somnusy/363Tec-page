<style>

</style>
<style scoped>
	.main_class{

	}
</style>
<template>
		<div class="main_class">
			<Form :model="columnData" :label-width="120" inline>
				<FormItem label="栏目标题:">
	            	<Input v-model="columnData.itemTitle" v-on:input="sub"></Input>
	        	</FormItem>
	        	<br>
	        	<FormItem label="栏目类型:">
		            <Select v-model="columnData.itemType" @on-change="sub">
		                <Option value="00">详情</Option>
		                <Option value="01">互动</Option>
		                <Option value="02">推荐</Option>
		                <Option value="03">贡献榜</Option>
		                <Option value="05">视角</Option>
		                <Option value="04">自定义</Option>
		            </Select>
	        	</FormItem>
	        	<br>
	        	<FormItem label="外部链接:">
	            	<Input v-model="columnData.itemUrl" v-on:input="sub"></Input>
	        	</FormItem>
	        	<br>
	        	<FormItem label="栏目位置:">
	            	<Input v-model="columnData.isShow" v-on:input="sub"></Input>
	        	</FormItem>
	        	<br>
	        	<FormItem label="显示版本:">
		            <Select v-model="columnData.itemVersion" @on-change="sub">
		                <Option value="all">v1.0_v2.0</Option>
		                <Option value="new">v2.0</Option>
		                <Option value="old">v1.0</Option>
		            </Select>
	        	</FormItem>
	        	<br>
	        	<FormItem label="显示系统:">
		            <Select v-model="columnData.itemOS" @on-change="sub">
		                <Option value="Android_migu|Ios_migu">Android_IOS</Option>
		                <Option value="Android_migu">Android</Option>
		                <Option value="Ios_migu">IOS</Option>
		                <Option value="null">全部不显示</Option>
		            </Select>
	        	</FormItem>
	        	<FormItem label="index:">
	            	<Input v-model="columnIndex" v-on:input="sub"></Input>
	        	</FormItem>
       		 </Form>
		</div>
</template>

<script>
	export default {
		name:'columnModel',
		props:["columnData","columnTitle","columnLink","columnLocation","columnSystem","columnStyle","columnVersion","columnIndex"],

		data() {
			return {
			}

		},
		methods: {
			inputFunc(){
				this.$emit("listenToChildEvent",this.columnTitle,this.columnIndex);
			},
			styleChange(){
				this.$emit("listenToChildEvent",this.columnTitle,this.columnIndex);
			},
			sub(){
				this.$emit("listenToChildSubEvent",this.columnData,this.columnIndex);
			}
		},
		created() {
	        
		}
	}
</script>