import React,{ PureComponent } from 'react'
import dva from '../../utils/dva'
import createLoading from 'dva-loading'
import Home from '../../models/Home'
import Login from '../../models/login'
import SetUser from '../../models/setuser'
import User from '../../models/User'
import GoodDetail from '../../models/goodDetail'
import Router, { routerMiddleware, routerReducer } from './'
// import cart from '../../models/cart';


const app = dva({
    models:[Home,Login,SetUser],
    extraReducers: { router: routerReducer },
    onAction: [routerMiddleware],
    onError(e){
        console.log('Error',e)
    }
});
app.use(createLoading())
const App = app.start(<Router />);
export default App;