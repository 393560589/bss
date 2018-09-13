import {px2dp} from "../utils";
import {Animated, Easing} from 'react-native'
import { Toast } from 'antd-mobile-rn'
import * as server from '../servers'
export default {
    namespace: 'User',
    state: {
        userInfo:undefined,
        citylist:[],
        islogin:false,
    },
    reducers: {
        /**
         * 处理同步的action
         */
        update(state,{payload}) {
            return { ...state, ...payload }
        },

    },
    effects: {
        *userInfo({callback=()=>{},payload},{call,put}){
            const response = yield call(server.user,payload);
            if(response.status !== 200 ) return Toast.fail(response.message);
            yield put({
                type:'update',
                payload:{
                    userInfo:response && response.res,
                    islogin:true
                }
            });
            callback(response)
        },
        *getcode({callback=()=>{},payload},{call,put}){
            const response = yield call(server.code,payload);
            //if(response.status !== 200 ) return Toast.fail(response.message);
            callback(response)
        },
        *trylogin({callback=()=>{},payload},{call,put}){
            const response = yield call(server.login,payload);
            if(response.status !== 200 ) return Toast.fail(response.message);
            callback(response)
        },
        *loginpass({callback=()=>{},payload},{call,put}){
            const response = yield call(server.loginpass,payload);
            //if(response.status !== 200 ) return Toast.fail(response.message);
            callback(response)
        },
        *sign({callback=()=>{},payload},{call,put}){
            const response = yield call(server.sign,payload);
            if(response.status !== 200 ) return Toast.fail(response.message);
            callback(response)
        }
    }

}