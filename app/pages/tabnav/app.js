import React,{ PureComponent } from 'react'
import dva from '../../utils/dva'
import Router from './index'
import createLoading from 'dva-loading'
import Home from '../../models/Home'
import Login from '../../models/login'
import SetUser from '../../models/setuser'


const app = dva({
    models:[Home,Login,SetUser],
    onError(e){
        console.log('Error',e)
    }
});
app.use(createLoading())
const App = app.start(<Router />);
export default App;