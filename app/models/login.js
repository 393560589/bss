import * as servers from '../servers'
import { StorageUtil } from '../utils/storage'
import {StringName} from '../config/keyword'
import { NavigationActions } from '../utils'


const actions = [
    NavigationActions.BACK,
    NavigationActions.INIT,
    NavigationActions.NAVIGATE,
    NavigationActions.RESET,
    NavigationActions.SET_PARAMS,
    NavigationActions.URI
]


export default {
    namespace: 'login',
    state: {
        data:{},
        isPassword:true,
        islogin:false,
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
           if(res.code === 0){
               StorageUtil.save(StringName.USER_INFO,res.data);

               yield put(NavigationActions.back())
           }

       }
    },
}