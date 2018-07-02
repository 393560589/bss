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
export default {
    Login:{
        screen:Login,
        navigationOptions:(navigator)=>{
            return {
                headerTitle:null,
                headerTransparent:true,
                headerRight:(<TouchableOpacity
                    onPress={()=>{navigator.navigation.navigate('Sign')}}
                    style={{marginRight:px2dp(20)}}><Text style={common.font_h2}>注册</Text></TouchableOpacity>),
                headerStyle:{
                    backgroundColor:'transparent',
                    elevation: 0,
                    shadowOpacity: 0
                },
                headerTintColor:common.gray_back,
                headerTitleStyle:{
                    //color:common.gary_3,
                    backgroundColor:'transparent',

                }
            }

        }
    },

    Collection: {
        screen: Collection,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '我的收藏'})
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
    Fpassword:{
        screen:Fpassword,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '忘记密码'})
    },
    Settings:{
        screen:Settings,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '账户设置',mode:'card'})
    },
    SetUser:{
        screen:SetUser,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '个人信息',mode:'card'})
    },
    Setpwd:{
        screen:Setpwd,
        navigationOptions: Object.assign({},common.defaultHeader, {title: '密码管理',mode:'card'})
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
    AboutUS:{
        screen:AboutUS,
        navigationOptions:Object.assign({},common.defaultHeader, {title: '关于我们',mode:'card'})
    },
    Invoice:{
        screen:Invoice,
        navigationOptions:Object.assign({},common.defaultHeader, {title: '发票助手',mode:'card'})
    },
    Feedback: {
        screen: Feedback,
        navigationOptions: Object.assign({}, common.defaultHeader, {title: '意见反馈'})

    }
}
/*
User:{screen:User},
Home:{screen:Home},
Cart:{screen:Cart},
Recommend:{screen:Recommend},
Integral:{screen:Integral},*/
