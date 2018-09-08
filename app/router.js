import React from 'react'
import {TouchableOpacity,Text,Image} from 'react-native'
import Login from './pages/Login'
import Collection from './pages/Collection'
import MyAsset from './pages/MyAsset'
import MyYlb from './pages/MyYlb'
import Points from './pages/Points'
import Feedback from './pages/Feedback'
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
import GoodItem from './pages/GoodDetail'
import ImageViewer from './pages/GoodDetail/components/ImageViewer';
import GoodDetailInfo from './pages/GoodDetailInfo';
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
    Collection: {
        screen: Collection,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '我的收藏'})
    },
    AboutUS: {
        screen: AboutUS,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '联系我们'})
    },
    FeedBack:{
      screen:FeedBack,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '意见反馈'})
    },
    MyAsset: {
        screen: MyAsset,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '我的资产'})
    },
    MyYlb: {
        screen: MyYlb,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '我的娱乐宝'})
    },

    Points: {
        screen: Points,
        navigationOptions: (navigation) => ({
            headerTransparent: true,
            title: '我的积分',
            headerStyle: {
                borderBottomWidth: 0
            },
            headerTintColor: '#fff',
            headerRight: (<TouchableOpacity><Text style={{color: '#fff', marginRight: px2p(13), fontSize: px2p(14)}}>积分介绍</Text></TouchableOpacity>)
        })
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
    Feedback: {
        screen: Feedback,
        navigationOptions: Object.assign({}, common.defaultHeader, {title: '意见反馈'})
    },
    GoodItem: {
        screen: GoodItem,
        navigationOptions: (navigation) => ({
            headerTransparent: true,
            headerStyle: {
                borderBottomWidth: 0,
            },
            headerTintColor: '#313131',
            shadowOpacity: 0,
            headerRight: headerRightDot(navigation, 'GoodItem')
        })
    },
    ImageViewer: {
        screen: ImageViewer,
        navigationOptions: {
            header: null
        }
    },
    GoodDetailInfo: {
        screen: GoodDetailInfo,
        navigationOptions: (navigation) => ({
            // headerTransparent: true, 
            title: '商品详情',
            headerStyle: {
                backgroundColor: common.fff
            },
            headerTintColor: '#313131',
            shadowOpacity: 0,
            headerRight: headerRightDot(navigation, 'GoodDetailInfo')
        })
    }
}
/*
User:{screen:User},
Home:{screen:Home},
Cart:{screen:Cart},
Recommend:{screen:Recommend},
Integral:{screen:Integral},*/
