/**
 * Created by 叶子 on 2017/7/30.
 * http通用工具函数
 */
import axios from 'axios';
import Cookies from 'js-cookie'

import { Infos,co } from './keyword'


/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
const MOCK_AUTH_ADMIN = 'http://api.xiaoyu518.com/api/';
const Tool = {
    projectName: '1',   //2
    projectVersion: '1.0.0',
    bundleVersion: '1',
    APIVersion: 'API0',
    platform:  'android',
    deviceId:navigator.userAgent
};

Tool.ua = Tool.projectName + ';'+ Tool.projectVersion +';'+ Tool.bundleVersion +';'+ Tool.APIVersion +';'+ Tool.platform +';' + Tool.deviceId;


axios.defaults.headers.common['ua'] = Tool.ua;
/*
console.log(Cookie.get(Infos.webbase));
if(Cookie.get(Infos.webbase)!=undefined){
    axios.defaults.headers.common['Authorization'] = 'Basic '+Cookie.get(Infos.webbase);
}

*/
const base = localStorage.getItem(Infos.webbase);


if(base != undefined){
    axios.defaults.headers.common['Authorization'] = 'Basic '+base;
}


export const get = (url, data) =>

    axios.get(MOCK_AUTH_ADMIN+url, {params:data}).then(res => {
        const xrh = res.data;
        return xrh
    }).catch(err => {
        console.log(err);
    });

/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */

export const post = (url, data ) =>
    axios.post(MOCK_AUTH_ADMIN+url, data).then(res => {
        const xrh = res.data;
        return xrh;
    }).catch(err => {
        console.log(err);

    });
export const put = (url,data)=>
    axios.put(MOCK_AUTH_ADMIN+url, data).then(res => {
        const xrh = res.data;

        switch (parseFloat(xrh.code)){
            case 400:
            case 401:
                localStorage.removeItem(Infos.webbase)
                window.location.href = '/';
                break;
            default:
                return xrh;
                break
        }
    }).catch(err => {
        console.log(err);

    });
