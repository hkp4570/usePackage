import { IBestAFSRoute } from '@umijs/plugin-layout';

const router: IBestAFSRoute[] = [
    {
        path: '/',
        name: '首页',
        component: '@/pages/home',
    },
    {
        path: '/user',
        name: '用户',
        component: '@/pages/user/user',
    },
    {
        path: '/datePicker',
        name: '时间选择器',
        component: '@/pages/datePicker/datePicker',
    },
    {
        path: '/sticky',
        name: '吸顶',
        routes: [
            {
                path: '/sticky/basic',
                name: 'basic',
                component: '@/pages/sticky/basic',
            },
            {
                path: '/sticky/relative',
                name: 'relative',
                component: '@/pages/sticky/relative',
            },
            {
                path: '/sticky/stacked',
                name: 'stacked',
                component: '@/pages/sticky/stacked',
            },
        ],
    },
    {
        path: '/list',
        name: '函数组件redux',
        component: '@/pages/list/list',
    },
    {
        path: '/countDown',
        name: '倒计时',
        component: '@/pages/countDown/index',
    },
    {
        path: '/rc',
        name: 'react',
        routes: [
            {
                path: '/rc/rcTree',
                name: 'rc-tree',
                component: '@/pages/rcTree/index',
            },
            {
                path: '/rc/rcTreeSelect',
                name: 'rc-tree-select',
                component: '@/pages/rcTreeSelect/index',
            },
        ],
    },
    {
        path: '/g6',
        name: 'g6',
        routes: [
            {
                path: '/g6/basic',
                name: 'g6-basic',
                component: '@/pages/g6/index',
            },
            {
                path: '/g6/transform',
                name: 'g6-transform',
                component: '@/pages/g6/transformg6',
            },
            {
                path: '/g6/reactNode',
                name: 'g6-reactNode',
                component: '@/pages/g6/ReactNode',
            },
        ],
    },
    {
        path: '/gg-editor',
        name: 'gg-editor',
        component: '@/pages/gg-editor/index',
    },
    {
        path: '/r-draggable',
        name: 'r-draggable',
        component: '@/pages/draggable/index',
    },
    {
        path: '/strategy',
        name: 'strategy',
        component: '@/pages/strategy/index',
    },
];

export default router;

// export default [
//     {
//         path: '/login',
//         exact: true,
//         title: '登录',
//         component: '@/pages/login/login',
//     },

//     {
//         path: '/',
// component: '@/layouts/index',
//         routes: [
//             { path: '/', redirect: '/home' },
//             {
//                 path: '/home',
//                 title: '首页',
//                 exact: true,
//                 component: '@/pages/home/index',
//             },
//             {
//                 path: '/sticky',
//                 title: '粘性',
//                 routes: [
//                     {
//                         path: '/sticky/basic',
//                         title: 'basic',
//                         // exact: true,
//                         component: '@/pages/sticky/basic',
//                     },
//                     {
//                         path: '/sticky/relative',
//                         title: 'relative',
//                         exact: true,
//                         component: '@/pages/sticky/relative',
//                     },
//                     {
//                         path: '/sticky/stacked',
//                         title: 'stacked',
//                         exact: true,
//                         component: '@/pages/sticky/stacked',
//                     },
//                 ],
//             },
//             {
//                 path: '/user',
//                 title: '个人中心',
//                 exact: true,
//                 // wrappers: [ // 权限校验
//                 //     '@/wrappers/auth'
//                 // ],
//                 component: '@/pages/user/user',
//             },
//             {
//                 path: '/calendar',
//                 title: '日历',
//                 exact: true,
//                 component: '@/pages/calendar/calendar',
//             },
//             {
//                 path: '/datePicker',
//                 title: '时间选择器',
//                 exact: true,
//                 component: '@/pages/datePicker/datePicker',
//             },
//             {
//                 component: '@/pages/404',
//             },
//         ],
//     },
// ];
