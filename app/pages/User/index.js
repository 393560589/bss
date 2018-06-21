import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight
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

export default class App extends React.Component {
    _onPressButton(){
        console.log(1)
    }
    render() {
        return (
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

               <View style={styles.User_mon_wrap}>
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

                   <View style={styles.User_mon}>
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
                    activeOptict={0.9}
                >
                    <Image source={user.banner} style={{width:deviceWidth-px2dp(20),height:px2dp(55),marginVertical:px2dp(10)}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        shadowOpacity:0.8
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