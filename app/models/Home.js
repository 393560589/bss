export default {
    namespace: 'Home',
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
            * forplay({ payload }, { call, put, select }) {
            /**
             * call 调用自己定义的业务方法
             * put 发起action
             * select 选择某个namespace的state
             */
            //const name = yield call(fetchHomeName);
            const name =1;
            console.log(name);
            yield put({
               // type: SET_HOME_NAME,
                payload: { name },
            })
        }
    },
}