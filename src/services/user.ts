import { request } from 'umi'

type paramsType = {
  name: string,
  password: string,
}
export async function account(params:paramsType){
  return request('/api/login',{
    method: 'post',
    data:params
  })
}