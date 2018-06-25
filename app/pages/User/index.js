import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    RefreshControl,
    ScrollView,
    SafeAreaView
} from 'react-native';

import {deviceWidth} from '../../styles/common'
import {user} from '../../config/image'
import {px2dp} from "../../utils";
import {common} from '../../styles'

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
    state={
        isRefreshing:false,

    }
    onRefresh(){
        this.setState({isRefreshing: true});
        console.log("开始新的刷新方法");
        setTimeout(() => {
            //你的刷新逻辑
            //逻辑执行完之后，修改刷新状态为false
            this.setState({isRefreshing: false});
        }, 2000);
    }
    _onPressButton(){
        console.log(1)
    }
    render() {
        return (
            <ScrollView style = {{flex:1,backgroundColor:'#fff'}}
                        refreshControl={  //设置下拉刷新组件
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                                tintColor='white'
                                titleColor="white"
                                title= {this.state.isRefreshing? '刷新中....':'下拉刷新'}
                            />
                        }
            >
                <View style={styles.container}>
                    <ImageBackground
                        style={[{width:deviceWidth,height:px2dp(157),paddingTop:px2dp(50)}]}
                        source={user.topbanner}
                    >
                        <Image
                            style={styles.User_top_img}
                            source={user.sz}
                        />
                        <View style={styles.User_top}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                            >
                                <Image
                                    style={{width:px2dp(60),height:px2dp(60),marginRight:px2dp(20)}}
                                    source={user.tx}
                                />
                            </TouchableOpacity>
                            <View style={styles.User_top_view}>
                                <Text style={[common.font_h1,{color:common.fff}]}>
                                    点击登录
                                </Text>
                                <Text style={[common.font_h3,{color:common.fff}]}>
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
                                            underlayColor={common.f1}
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
                                underlayColor={common.f1}
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
                                            underlayColor={common.f1}
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
                                underlayColor={common.f1}
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
                                            underlayColor={common.f1}
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
                                            underlayColor={common.f1}
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
        backgroundColor:common.fff,
        shadowColor:common.gary_e,
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
    },
    User_top_img:{
        position:'absolute',
        right:px2dp(27),
        top:px2dp(25),
        width:px2dp(18),
        height:px2dp(18),
    },
    User_top:{
        marginLeft:px2dp(25),
        flexDirection:'row',
    },
    User_top_view:{
        justifyContent:'space-around',
    }
});