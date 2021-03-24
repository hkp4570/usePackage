export default [
    {
        path: '/login',
        exact: true,
        title: '登录',
        component: '@/pages/login/login',
    },

    {
        path: '/',
        component: '@/layouts/index',
        routes: [
            { path: '/', redirect: '/login' },
            {
                path: '/home',
                title: '首页',
                exact: true,
                component: '@/pages/home/index',
            },
            {
                path: '/sticky',
                title: '粘性',
                routes: [
                    {
                        path: '/sticky/basic',
                        title: 'basic',
                        // exact: true,
                        component: '@/pages/sticky/basic',
                    },
                    {
                        path: '/sticky/relative',
                        title: 'relative',
                        exact: true,
                        component: '@/pages/sticky/relative',
                    },
                    {
                        path: '/sticky/stacked',
                        title: 'stacked',
                        exact: true,
                        component: '@/pages/sticky/stacked',
                    },
                ],
            },
            {
                path: '/user',
                title: '个人中心',
                exact: true,
                // wrappers: [ // 权限校验
                //     '@/wrappers/auth'
                // ],
                component: '@/pages/user/user',
            },
            {
                path: '/calendar',
                title: '日历',
                exact: true,
                component: '@/pages/calendar/calendar',
            },

            {
                component: '@/pages/404',
            },
        ],
    },
];
