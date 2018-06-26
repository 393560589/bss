import React from 'react'
import {TouchableOpacity,Text,Image} from 'react-native'
import Login from './pages/Login'
import Collection from './pages/Collection'
import {common} from "./styles";
import {px2dp} from "./utils";
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
        navigationOptions: {
            title: '我的收藏',
            headerTintColor: '#313131',
            headerStyle: {
                backgroundColor: '#fff'
            }
        }
    }
}
/*
User:{screen:User},
Home:{screen:Home},
Cart:{screen:Cart},
Recommend:{screen:Recommend},
Integral:{screen:Integral},*/
