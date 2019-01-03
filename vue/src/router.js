// const routers = [
//     {
//         path: '/MIGUMS/channelblack/view.do',
//         meta: {
//             title: ''
//         },
//         component: (resolve) => require(['./views/login.vue'], resolve)
//     },
//     {
//         path: '/main',
//         component: (resolve) => require(['./views/main-layout.vue'], resolve),
//         children: [
//             // {
//             //   path: "/",
//             //   component: resolve => require(['./views/components/md-layout.vue'], resolve)
//             // },
//             {
//               path: "/",
//               component: resolve => require(['./views/layout/channelblack.vue'], resolve)
//             }
//             // ,
//             // {
//             //   path:"/wx_config",
//             //   component: resolve => require(['../components/pages/sys_wx_config.vue'], resolve)
//             // },
//             // {
//             //   path:"/wx_config/msg_config/:app_name_id/:app_name",
//             //   name:"wxMsgConfigRouter",
//             //   component: resolve => require(['../components/pages/wx_msg_config.vue'], resolve)
//             // }
//         ]
//     }
// ];
// export default routers;
//
const routers = [
    {
        path: '/test',
        name: 'test',
        meta: {
            title: 'test'
        },
        component: resolve => require(['./views/layout/test.vue'], resolve)
    },
    {
        path: '/livehost/adlist',
        name: 'adlist',
        meta: {
            title: '直播管理'
        },
        component: resolve => require(['./views/layout/adlist.vue'], resolve)
    },
    {
        path: '/livehost/lcedit/:concertID/:concertName',
        name: 'lcedit',
        meta: {
            title: '控制修改'
        },
        component: resolve => require(['./views/layout/livecontroledit.vue'], resolve)
    },
    {
        path: '/livehost/columnModel',
        name: 'columnModel',
        meta: {
            title: '栏目模型'
        },
        component: resolve => require(['./views/layout/columnModel.vue'], resolve)
    },
    {
        path: '/livehost/index/:concertID/:concertName',
        name: 'livehostIndex',
        meta: {
            title: '直播修改'
        },
        component: resolve => require(['./views/layout/livecontrolindex.vue'], resolve)
    },
    {
        path: '/livehost/adedit/:concertID/:concertName',
        name: 'adedit',
        meta: {
            title: '广告修改'
        },
        component: resolve => require(['./views/layout/livecontroladedit.vue'], resolve)
    },
    {
        path: '/livehost/toLiveViewAngle/:concertID/:concertName',
        name: 'toLiveViewAngle',
        meta: {
            title: '直播视角'
        },
        component: resolve => require(['./views/layout/toLiveViewAngle.vue'], resolve)
    },
    {
        path: '/livehost/rankingPic/:concertID/:concertName',
        name: 'rankingPic',
        meta: {
            title: '贡献榜快照'
        },
        component: resolve => require(['./views/layout/ranking_pic.vue'], resolve)
    },
    {
        path: '/importDanmaku/index/:concertID/:concertName',
        name: 'importDanmakuIndex',
        meta: {
            title: '弹幕送审'
        },
        component: resolve => require(['./views/layout/danmakuIndex.vue'], resolve)
    },
    {
        path: '/importDanmaku/send/:concertID/:concertName',
        name: 'danmakuSend',
        meta: {
            title: '弹幕发送'
        },
        component: resolve => require(['./views/layout/danmakuSend.vue'], resolve)
    },
    {
        path: '/importDanmaku/data/:concertID/:concertName',
        name: 'danmakuData',
        meta: {
            title: '互动数据'
        },
        component: resolve => require(['./views/layout/danmakuData.vue'], resolve)
    },
    {
        path: '/livehost/area/:concertID/:concertName',
        name: 'area',
        meta: {
            title: '省份筛选'
        },
        component: resolve => require(['./views/layout/area.vue'], resolve)
    },
    {
        path: '/ms-admin/static/liveshow/index.html',
        name: 'default1',
        meta: {
            title: '主页'
        },
        component: resolve => require(['./views/layout/adlist.vue'], resolve)
    },
    {
        path: '/index.html',
        name: 'main',
        meta: {
            title: '主页'
        },
        component: resolve => require(['./views/layout/adlist.vue'], resolve)
    },
    {
        path: '/livehost/starBoardOperation/:concertID/:concertName',
        name: 'starBoardOperation',
        meta: {
            title: '星光榜运营'
        },
        component: resolve => require(['./views/layout/starBoardOperation.vue'], resolve)
    },























    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: resolve => require(['./views/layout/liveshow_new/login.vue'], resolve)
    }

];
export default routers;
