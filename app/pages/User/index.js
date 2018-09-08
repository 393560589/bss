import React,{PureComponent} from 'react';
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
} from 'react-native';


import {deviceWidth} from '../../styles/common'
import {user} from '../../config/image'
import {px2dp} from "../../utils";
import {common} from '../../styles'
import {connect} from "../../utils/dva";
import { ListItem,List } from '../../components/ListItem'

@connect(({User})=>({User}))
export default class Users extends PureComponent {
    constructor(props){
        super(props)
    }
    state={
        isRefreshing:false,
    }

    componentDidMount(){
        const {dispatch} = this.props
        dispatch({
            type:'User/userInfo'
        })
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
    onPushPage(page){
        this.props.navigation.navigate(page)
    }
    render() {
        return (
            <ScrollView style = {{flex:1,backgroundColor:'#f1f1f1'}}
                        refreshControl={  //设置下拉刷新组件
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                                tintColor='#333'
                                titleColor="#333"
                                title= {this.state.isRefreshing? '刷新中....':'下拉刷新'}
                            />
                        }
            >
                <View style={styles.container}>
                    <ImageBackground
                        style={[{width:deviceWidth,height:px2dp(280),paddingTop:px2dp(50)}]}
                        source={user.topbanner}
                    >
                       {/* <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.User_top_img}
                            onPress={()=>this.onPushPage('Settings')}
                        >
                            <Image
                                style={{width:px2dp(18),
                                    height:px2dp(18),}}
                                source={user.sz}
                            />
                        </TouchableOpacity>*/}

                        <View style={styles.User_top}>
                            <TouchableOpacity
                                onPress={()=>this.onPushPage('SetUser')}
                                activeOpacity={0.9}
                            >
                                <Image
                                    style={{width:px2dp(90),height:px2dp(90)}}
                                    source={user.tx}
                                />
                            </TouchableOpacity>
                            <View style={styles.User_top_view}>
                                <TouchableOpacity
                                    onPress={()=>this.onPushPage('Login')}
                                >
                                    <Text style={[common.font_h1,{
                                        color:common.fff,
                                        textAlign:'center',
                                        marginTop:px2dp(10),
                                        marginBottom:px2dp(6)
                                    }]}>
                                        点击登录
                                    </Text>
                                </TouchableOpacity>
                                <Text style={[common.font_h3,{color:common.fff}]}>
                                    登陆后可享受更多服务
                                </Text>
                            </View>
                        </View>
                        <View style={styles.top_list}>
                           <View style={[styles.top_item,{borderLeftWidth:0}]}>
                               <Text style={[styles.top_text,{fontSize:px2dp(14), marginBottom:px2dp(4),}]}>搜索令牌</Text>

                               <Text style={styles.top_text}>0</Text>
                           </View>
                            <View style={styles.top_item}>
                                <Text style={[styles.top_text,{fontSize:px2dp(14), marginBottom:px2dp(4),}]}>等级</Text>

                                <Text style={styles.top_text}>0</Text>
                            </View>
                            <View style={styles.top_item}>
                                <Text style={[styles.top_text,{fontSize:px2dp(14), marginBottom:px2dp(4),}]}>邀请好友</Text>
                                <Text style={styles.top_text}>0</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <List
                        border={false}
                        styles={{marginTop:px2dp(10)}}>
                        <ListItem
                            hasborder
                            onClick={()=>this.onPushPage('AboutUS')}
                            Icons={'right'}>
                            联系我们
                        </ListItem>
                        <ListItem
                            onClick={()=>this.onPushPage('FeedBack')}
                        >
                            意见反馈
                        </ListItem>
                    </List>
                    <List
                        border={false}
                        styles={{marginTop:px2dp(10)}}>
                        <ListItem
                            onClick={()=>this.onPushPage('Settings')}
                        >
                            设置
                        </ListItem>
                    </List>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom:px2dp(30),
        alignItems:'center',
        //backgroundColor: '#fff',
    },

    User_top_img:{
        position:'absolute',
        right:px2dp(27),
        top:px2dp(25),

    },
    top_list:{
        paddingTop:px2dp(20),
        flexDirection:'row',
        paddingLeft:px2dp(20),
        paddingRight:px2dp(20),
        justifyContent:'space-between'
    },
    top_item:{
        flex:1,
        justifyContent:'center',
        borderLeftColor:'#fff',
        borderLeftWidth:0.4
    },
    top_text:{
      color:'#fff',
      textAlign:'center',

        fontSize:px2dp(16)
    },
    User_top:{
        marginLeft:px2dp(25),
        flexDirection:'column',
        alignItems:'center'
    },
    User_top_view:{
        justifyContent:'center'
        //justifyContent:'space-around',
    }
});