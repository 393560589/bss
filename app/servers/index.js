import {get,post} from '../utils/axios'
import { API } from '../config/keyword'
export const getcode=(params)=>{
    return get(API.code,{
        phone:params,
        type:'login'
    })
};//发送验证码
export const login=(params)=>{
    console.log(params)
    return post(API.login,params)
}