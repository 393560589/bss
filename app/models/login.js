import * as servers from '../servers'

export default {
    namespace: 'login',
    state: {
        data:{},
        isPassword:true
    },
    reducers: {
        /**
         * 处理同步的action
         */
        updateState(state,{payload}) {
          return {...state,...payload}
        },
    },
    effects: {
       *getcode({payload},{call}){
           console.log(payload);
           const res = yield call(servers.getcode,payload.phone);
           if (!res) return;
           console.log(res);
       },
       *dologin({payload},{call,put}){
           const res = yield call(servers.login,payload);
           if (!res) return;
           console.log(res);
       }
    },
}