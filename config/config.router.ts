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
      {path:'/', redirect: '/login'},
      {
        path: '/home', 
        title: '首页',
        exact: true,
        component: '@/pages/home/index',
      },
      { 
        path: '/user', 
        title: '个人中心',
        exact: true,
        wrappers: [ // 权限校验
            '@/wrappers/auth'
        ],
        component: '@/pages/user/user',
      },

      {
        component: '@/pages/404',
      }
    ]
  },
]