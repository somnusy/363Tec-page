import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routers from './router';
import Util from './libs/util';

import App from './app.vue';
import 'iview/dist/styles/iview.css';

import md5 from 'js-md5';


Vue.filter('time', function (value) {
    if (!value) {
        return "";
    }
    return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
});

Vue.filter('md5', function (value) {
    if (!value) {
        return '';
    }
    return md5(value);
});

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueResource);

//拦截器
Vue.http.interceptors.push((request, next) => {
    // interceptor
    //在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
    next((response) => {
        //return response;
        var data = response.body.data;
        if(data.url) {
            window.location.href = data.url;
        } else {
            return response;
        }
    });
});

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
