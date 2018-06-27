/**
 * Created by 叶子 on 2017/7/30.
 * http通用工具函数
 */
import React,{Component} from 'react'
import {
    Platform
} from 'react-native';
var DeviceInfo = require('react-native-device-info');

import axios from 'axios';


/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
const MOCK_AUTH_ADMIN = 'http://api.xiaoyu518.com/api/';
console.log(DeviceInfo.getUniqueID());
const Tool = {
    projectName: '1',   //2
    projectVersion: '1.0.0',
    bundleVersion: '1',
    APIVersion: 'API0',
    platform: Platform.OS === 'ios' ? 'iphone' : 'android',
    deviceId:DeviceInfo.getUniqueID(),
};

Tool.ua = Tool.projectName + ';'+ Tool.projectVersion +';'+ Tool.bundleVersion +';'+ Tool.APIVersion +';'+ Tool.platform +';' + Tool.deviceId;

const instance = axios.create({
    baseURL:MOCK_AUTH_ADMIN,
    headers:{
        'ua':Tool.ua
    }
})

//添加请求拦截器
/*instance.interceptors.request.use(
    config => {
        if (instance.Authorization != '') {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = '';
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });*/



export const get = (url, data) =>
    instance.get(url, {params:data}).then(res => {
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

    instance.post(url, data).then(res => {

        const xrh = res.data;
        return xrh;
    }).catch(err => {
        console.log(err);

    });



export const put = (url,data)=>
    instance.put(url, data).then(res => {
        const xrh = res.data;

        switch (parseFloat(xrh.code)){

            default:
                return xrh;
                break
        }
    }).catch(err => {
        console.log(err);

    });
