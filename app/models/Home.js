import * as server from '../servers/index'
export default {
    namespace: 'home',
    state: {
        name: 'homeplay', // 名字
        play:'ffff',
    },
    reducers: {
        /**
         * 处理同步的action
         */
        play(state) {
            return { ...state }
        }
    },
    effects: {
        /**
         * 处理异步的action
         * 主要使用redux-saga
         * 语法就是 es6 generator
         */
         *getBanner({ payload,callback=()=>{} }, { call, put, select }) {
            const response = yield call(server.swiper,payload);
            console.log(response);
            callback(response)
        }
    },
}