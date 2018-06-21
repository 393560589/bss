import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import {deviceWidth} from '../../styles/common'
import {user} from '../../config/image'
import {px2dp} from "../../utils";
import {color} from '../../styles'
const orderlist=[
    {img:user.dfk, text:'待付款'},
    {img:user.dsh,text:'待收货'},
    {img:user.ywc,text:'已完成'},
];
const zclist=[
    {data:1000.00,text:'娱乐宝'},
    {data:10000.02,text:'积分'},
    {data:200.09,text:'好友'},
]
const yslist=[
    {img:user.wdsc,text:'我的收藏'},
    {img:user.yjfk,text:'意见反馈'},
    {img:user.cjwt,text:'常见问题'},
    {img:user.kfzx,text:'客服中心'},
];
const h5list=[
    {img:user.jfrw,text:'积分任务'},
    {img:user.qdwb,text:'签到挖宝'},
    {img:user.yqyj,text:'邀请有奖'},
    {img:user.gfylb,text:'瓜分娱乐宝'},
]
export default class App extends React.Component {

    _onPressButton(){
        console.log(1)
    }
    render() {
        return (
            <ScrollView style = {{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.container}>
                    <ImageBackground
                        style={{width:deviceWidth,height:px2dp(157)}}
                        source={require('../../image/user/img_bj.png')}
                    >
                        <Image
                            source={require('../../image/user/Icon_sz.png')}
                        />
                        <View>
                            <View>
                                <Text>
                                    点击登录
                                </Text>
                                <Text>
                                    欢迎来到小娱商城
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={[styles.User_mon_wrap,{marginBottom:px2dp(10)}]}>
                        <View style={styles.User_mon}>
                            {
                                orderlist.map((item,index)=>{
                                    return (
                                        <TouchableHighlight
                                            onPress={this._onPressButton}
                                            underlayColor={color.f1}
                                            activeOpacity={0.9}
                                            key={index}>
                                            <View style={styles.User_mon_li}>
                                                <Image style={{height:px2dp(18),width:px2dp(18),marginBottom:px2dp(10)}} source={item.img}/>
                                                <Text>{item.text}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }
                            <Image style={{height:px2dp(42),width:px2dp(3)}} source={user.line}/>
                            <TouchableHighlight
                                onPress={this._onPressButton}
                                underlayColor={color.f1}
                                activeOpacity={0.9}
                            >
                                <View style={styles.User_mon_li}>
                                    <Image style={{height:px2dp(18),width:px2dp(16),marginBottom:px2dp(10)}} source={user.wddd}/>
                                    <Text>{'我的订单'}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={[styles.User_mon]}>
                            {
                                zclist.map((item,index)=>{
                                    return (
                                        <TouchableHighlight
                                            onPress={this._onPressButton}
                                            underlayColor={color.f1}
                                            activeOpacity={0.9}
                                            key={index}>
                                            <View style={styles.User_mon_li}>
                                                <Text style={{marginBottom:px2dp(10)}}>{item.data}</Text>
                                                <Text>{item.text}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }
                            <Image style={{height:px2dp(42),width:px2dp(3)}} source={user.line}/>
                            <TouchableHighlight
                                onPress={this._onPressButton}
                                underlayColor={color.f1}
                                activeOpacity={0.9}
                            >
                                <View style={styles.User_mon_li}>
                                    <Image style={{height:px2dp(18),width:px2dp(16),marginBottom:px2dp(10)}} source={user.wdzc}/>
                                    <Text>{'我的资产'}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{width:deviceWidth-px2dp(20),height:px2dp(55),justifyContent:'center'}}
                        activeOpacity={0.9}
                    >
                        <Image style={{width:deviceWidth-px2dp(20),resizeMode: Image.resizeMode.contain}}  source={user.banner}/>
                    </TouchableOpacity>

                    <View style={[styles.User_mon_wrap,{marginTop:px2dp(10)}]}>
                        <View style={styles.User_mon}>
                            {
                                yslist.map((item,index)=>{
                                    return (
                                        <TouchableHighlight
                                            onPress={this._onPressButton}
                                            underlayColor={color.f1}
                                            activeOpacity={0.9}
                                            key={index}>
                                            <View style={styles.User_mon_li}>
                                                <Image style={{height:px2dp(28),width:px2dp(28),marginBottom:px2dp(10)}} source={item.img}/>
                                                <Text>{item.text}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }
                        </View>

                        <View style={[styles.User_mon,{marginBottom:px2dp(10)}]}>
                            {
                                h5list.map((item,index)=>{
                                    return (
                                        <TouchableHighlight
                                            onPress={this._onPressButton}
                                            underlayColor={color.f1}
                                            activeOpacity={0.9}
                                            key={index}>
                                            <View style={styles.User_mon_li}>
                                                <Image style={{height:px2dp(28),width:px2dp(28),marginBottom:px2dp(10)}} source={item.img}/>
                                                <Text>{item.text}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom:px2dp(30),
        alignItems:'center',
        backgroundColor: '#fff',
    },
    User_mon_wrap:{
        marginTop:px2dp(10),
        paddingVertical:px2dp(10),
        paddingHorizontal:px2dp(10),
        width:deviceWidth-px2dp(20),
        backgroundColor:color.fff,
        shadowColor:color.gary_e,
        shadowOffset:{h:10,w:10},
        shadowOpacity:1
    },
    User_mon:{
        flexDirection:'row',
        flexWrap:"nowrap",
        alignItems:'center',
    },
    User_mon_li:{
        overflow:'hidden',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        width:(deviceWidth-px2dp(40))/4,
        height:px2dp(80)
    }
});