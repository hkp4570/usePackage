import { request } from 'umi';

type paramsType = {
    name: string;
    password: string;
};
export interface userType {
    name: string;
    age: number;
    sex: string;
    role: string;
}
export async function account(params: paramsType) {
    return request('/api/login', {
        method: 'post',
        data: params,
    });
}
export async function user() {
    return request<userType>('/api/user', {
        method: 'get',
    });
}
