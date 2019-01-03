<style scoped>
    .layout{
        min-height: 800px;
        height: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 600px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout">
        <div class="above-content">
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <Menu-item v-for="menu in menus" name="menu.name">
                        <Icon type="ios-navigate"></Icon>
                        {{menu.name}}
                    </Menu-item>


                </div>
            </Menu>
            <div class="layout-content">
                <Row>
                    <i-col span="5">
                        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-navigate"></Icon>
                                    导航一
                                </template>
                                <Menu-item name="1-1">选项 1</Menu-item>
                                <Menu-item name="1-2">选项 2</Menu-item>
                                <Menu-item name="1-3">选项 3</Menu-item>
                            </Submenu>
                            <Submenu name="2">
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    导航二
                                </template>
                                <Menu-item name="2-1">选项 1</Menu-item>
                                <Menu-item name="2-2">选项 2</Menu-item>
                            </Submenu>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="ios-analytics"></Icon>
                                    导航三
                                </template>
                                <Menu-item name="3-1">选项 1</Menu-item>
                                <Menu-item name="3-2">选项 2</Menu-item>
                            </Submenu>
                        </Menu>
                    </i-col>
                    <i-col span="19">
                        <div class="layout-content-main">内容区域</div>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menus: [
                    {name: "导航一", url: "www.baidu.com"},
                    {name: "编辑MD", url: "www.youku.com"}
                ]
            }

        }

    }
</script>