import React,{ PureComponent } from 'react'
import dva from '../../utils/dva'
import Router from './index'
import Home from '../../models/Home'
import Login from '../../models/login'

const app = dva({
    models:[Home,Login],
    onError(e){
        console.log('Error',e)
    }
});
const App = app.start(<Router />);
export default App;