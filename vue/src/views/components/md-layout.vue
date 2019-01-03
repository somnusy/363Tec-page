<style scoped>
	.mavon-container {
		text-align: left;
	}
</style>

<template>
    <mavonEditor class="mavon-container" v-model="value" @save="saveMd()"/>
</template>

<script>
    import { mavonEditor } from 'mavon-editor';
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