import { defineConfig } from 'umi';
import routes from './config.router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  // layout: {
  //   name:'Ant Design',
  //   locale: true,
  // },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
  }
});


