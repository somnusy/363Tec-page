<style scoped>
	.mavon-container {
		text-align: left;
	}
</style>

<template>
    <div>
        <Table class="mtable" stripe border :columns="prizeColumns" :data="prizeData" @on-selection-change="prizeSelectChange">
        </Table>
    </div>

</template>

<script>
    export default {
        components: {
            mavonEditor
        },
        data() {
            return {
                value: ""
            }
        },
        methods: {
            saveMd: function() {
            	alert(this.value);
            }
        }
    }
</script>