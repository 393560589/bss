import {px2dp} from "../utils";
import {Animated, Easing} from 'react-native'
export default {
    namespace: 'User',
    state: {
        citylist:[]
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
        *userInfo({payload},{call,put}){
            console.log('hello world')
        }
    },

}