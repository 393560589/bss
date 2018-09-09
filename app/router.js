import React from 'react'
import {TouchableOpacity,Text,Image} from 'react-native'
import Login from './pages/Login'
import {common} from "./styles";
import {px2dp, px2p} from "./utils";
import {img} from './config/image'
import Sign from "./pages/Login/sign";
import Fpassword from './pages/Login/fpassword'
import Cpassword from './pages/User/Cpassword'
import Settings from './pages/User/setting'
import SetUser from "./pages/User/setuser";
import Setpwd from "./pages/User/setpassword";
import SetAddress from "./pages/User/setAddress";
import AddAddress from './pages/User/addaddress'
import AboutUS from "./pages/User/aboutus";
import Invoice from "./pages/User/invoice";
import FeedBack from "./pages/User/feedback";
import DataPush from "./pages/User/datapush";


function clickListenerCreater() {
    let isMenuVisible = false
    return function (navigation, key) {
        isMenuVisible = !isMenuVisible
        navigation.navigation.setParams({
            isMenuVisible,
            key
        })
    }
}

const onHeaderRightClick = clickListenerCreater()

const headerRightDot = (navigation, key) => (<TouchableOpacity onPress={() => onHeaderRightClick(navigation)} style={{padding: px2p(15)}}><Image source={require('./image/headerRight/Icon_more.png')} style={{width: px2p(24), height: px2p(5)}}/></TouchableOpacity>)

export default {
    Login: {
        screen: Login,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '登录'})
    },
    AboutUS: {
        screen: AboutUS,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '联系我们'})
    },
    Sign:{
        screen:Sign,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '注册'})
    },
    DataPush:{
        screen:DataPush,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '推送设置'})
    },
    Fpassword:{
        screen:Fpassword,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '找回密码'})
    },
    Settings:{
        screen:Settings,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '设置',mode:'card'})
    },
    SetUser:{
        screen:SetUser,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '个人资料',mode:'card'})
    },
    Setpwd:{
        screen:Setpwd,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '密码设置',mode:'card'})
    },
    Cpassword:{
        screen:Cpassword,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '修改密码',mode:'card'})
    },
    SetAddress:{
        screen:SetAddress,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '地址管理',mode:'card'})
    },
    AddAddress:{
        screen:AddAddress,
        navigationOptions:Object.assign({},common.defaultHeader, {title: '新增地址',mode:'card'})
    },
    Invoice:{
        screen:Invoice,
        navigationOptions:Object.assign({},common.defaultHeader, {title: '发票助手',mode:'card'})
    },
}
/*
User:{screen:User},
Home:{screen:Home},
Cart:{screen:Cart},
Recommend:{screen:Recommend},
Integral:{screen:Integral},*/
