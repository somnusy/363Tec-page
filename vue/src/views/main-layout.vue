<style scoped>
  .body {
  }
  .menu-layout {
    position: absolute;
    float: left;
    width: 240px;
    top: 60px;
    bottom: 0;
    overflow-y: hidden;
    background: #464c5b;
  }
  .content {
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 60px;
    bottom: 0;
    width: auto;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: scroll;
  }
</style>
<template>
  <div class="body">
  	<headLayout></headLayout>
    <div class="menu-layout">
        <menuLayout></menuLayout>
    </div>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
	import headLayout from './layout/head-layout.vue';
	import menuLayout from './layout/menu-layout.vue';
  export default {
    components: {
      headLayout, menuLayout
    }
  }
</script>