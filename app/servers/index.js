import {instance} from '../utils/axios'
import { API } from '../config/keyword'
export const getcode=(params)=>{
    return instance.get(API.code,{
        phone:params,
        type:'login'
    })
};//发送验证码
export const login=(params)=>{
    return instance.post(API.login,params)
}