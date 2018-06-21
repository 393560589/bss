import React,{ PureComponent } from 'react'
import dva from '../../utils/dva'
import Router from './index'
import Home from '../../models/Home'

const app = dva({
    models:[Home],
    onError(e){
        console.log('Error',e)
    }
});
const App = app.start(<Router />);
export default App;