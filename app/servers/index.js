import {instance} from '../utils/axios'
import { API } from '../config/keyword'
//http://bitss.vip/mobile/MobileInterface/broadcast_img
export const getcode=(params)=>{
    return instance.get(API.code,{
        phone:params,
        type:'login'
    })
};//发送验证码
export const login=(params)=>{
    return instance.post(API.login,params)
}
export const swiper=(params)=>{
    return instance.get(API.banner,params)
}
export const navigatioin = (params) => {
    return instance.get(API.navigation, params)
}