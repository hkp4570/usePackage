import { userType } from '@/services/user';

/**
 * 要实现对路由权限控制，需要是plugin-layout插件的使用，也可以在组件内容通过Hooks获取权限相关信息
 * 也可使用wrappers对路由权限校验
 * @param initialState
 * @returns
 */
export default function (initialState: userType) {
    const { role } = initialState || '';

    return {
        canAdmin: role === 'admin',
        canUser: role === 'user',
    };
}
