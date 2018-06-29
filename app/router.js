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

export default {
    Login:{
        screen:Login,
        navigationOptions:{
            headerTitle:null,
            headerTransparent:true,

            headerRight:(<TouchableOpacity style={{marginRight:px2dp(20)}}><Text style={common.font_h2}>注册</Text></TouchableOpacity>),
            headerStyle:{
                backgroundColor:'transparent'
            },
            headerTintColor:common.gray_back,
            headerTitleStyle:{
                color:common.gary_3,
                backgroundColor:common.gary_3
            }
        }
    },
    Collection: {
        screen: Collection,
        navigationOptions: Object.assign({}, common.defaultHeader, {title: '我的收藏'})
    },
    MyAsset: {
        screen: MyAsset,
        navigationOptions: Object.assign({}, common.defaultHeader, {title: '我的资产'})
    },
    MyYlb: {
        screen: MyYlb,
        navigationOptions: Object.assign({}, common.defaultHeader, {title: '我的娱乐宝'})
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
