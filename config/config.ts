import { defineConfig } from 'umi';
import routes from './config.router';

export default defineConfig({
    alias: {
        '@': '/src',
    },
    title: 'umi3',
    base: '/',
    // favicon:'/assets/favicon.ico',
    publicPath: '/assets/',
    outputPath: '/dist/',
    inlineLimit: 10000, // 图片转为base64的最小值
    fastRefresh: {}, // 快速刷新
    nodeModulesTransform: {
        type: 'none',
    },
    routes: routes,
    layout: {
        name: 'Ant Design',
        locale: true,
    },
    locale: {
        default: 'zh-CN',
        antd: false,
        title: false,
    },

    analyze: {
        // 模块解构分析
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
        // generate stats file while ANALYZE_DUMP exist
        generateStatsFile: false,
        statsFilename: 'stats.json',
        logLevel: 'info',
        defaultSizes: 'parsed', // stat  // gzip
    },
    cssLoader: {
        // 类名驼峰命名
        localsConvention: 'camelCase',
    },
    define: {
        // 代码可用变量
        FOO: 'bar',
    },
    devtool: 'source-map', // sourcemap类型
    dynamicImport: {}, // 按需加载
    ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸。
    mountElementId: '__next',
    targets: {
        ie: 11,
    },
    theme: {
        '@primary-color': '#1f2233',
    },
    chainWebpack(config, { webpack }) {},
});
