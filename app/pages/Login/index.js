import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {connect} from 'react-redux'
import {px2dp} from "../../utils";
import {common,deviceWidth} from "../../styles";
import { List,InputItem,Button } from 'antd-mobile-rn'
import { createForm } from 'rc-form'
import {lg} from '../../config/image'

@connect(({login})=>({...login}))

class Login extends PureComponent{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
    }
    onlogin(){
       const {dispatch} = this.props;
       console.log(123)
       dispatch({
           type:'login/play'
       })
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <View style={styles.container}>
                <Image source={lg.banner} style={{height:px2dp(253),width:deviceWidth}}/>
                <View style={styles.lg_ct}>
                        <View style={styles.lg_tab}>
                            <View style={[styles.lg_tab_view]}>
                                <View style={styles.lg_tab_check}>
                                    <Text style={styles.lg_tab_textcheck}>验证码登录</Text>
                                </View>
                            </View>
                            <View style={[styles.lg_tab_view]}>
                                <View>
                                    <Text>密码登录</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lg_code}>
                            <List styles={{borderTopWidth:0}}>
                                <InputItem
                                    {...getFieldProps('phone')}
                                    type="phone"
                                    clear
                                    labelNumber={2}
                                    style={{borderBottomColor:common.gary_e,borderBottomWidth:1}}
                                    placeholder="186 1234 1234"
                                ><Image source={lg.phone} style={{width:px2dp(16),height:px2dp(16)}}/></InputItem>

                                <InputItem
                                    {...getFieldProps('number')}
                                    type="number"
                                    labelNumber={2}
                                    placeholder="****"
                                    extra="请输入验证码"
                                    style={{borderBottomColor:common.gary_e,borderBottomWidth:1}}
                                ><Image source={lg.code} style={{width:px2dp(16),height:px2dp(16)}}/></InputItem>

                            </List>
                            <View style={styles.lg_btn_wrap}>
                                <Button disabled={true} style={styles.lg_btn} type={'primary'}>登录</Button>
                            </View>

                        </View>


                        <View style={styles.lg_acc}>
                            <List styles={{borderTopWidth:0}}>
                                <InputItem
                                    {...getFieldProps('phone')}
                                    type="phone"
                                    clear
                                    labelNumber={2}
                                    style={{borderBottomColor:common.gary_e,borderBottomWidth:1}}
                                    placeholder="186 1234 1234"
                                ><Image source={lg.phone} style={{width:px2dp(16),height:px2dp(16)}}/></InputItem>

                                <InputItem
                                    {...getFieldProps('password')}
                                    type="password"
                                    labelNumber={2}
                                    placeholder="请输入密码"
                                    style={{borderBottomColor:common.gary_e,borderBottomWidth:1}}
                                ><Image source={lg.password} style={{width:px2dp(13),height:px2dp(16)}}/></InputItem>

                            </List>
                            <View style={styles.lg_btn_wrap}>
                                <Button
                                    onClick={()=>this.onlogin()}
                                    style={styles.lg_btn} type={'primary'}>{this.props.name}</Button>
                                <Text style={styles.lg_forget}>{this.props.play}</Text>
                            </View>
                        </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    lg_tab:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    lg_tab_view:{
        height:px2dp(78),
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    lg_tab_check:{
        paddingBottom:px2dp(4),
        borderBottomWidth:3,
        paddingHorizontal:px2dp(4),
        borderBottomColor:common.theme_2,
    },
    lg_tab_textcheck:{
        color:common.theme_2
    },
    lg_ct:{
        marginTop:px2dp(-40),
        backgroundColor:common.fff,
        borderRadius:4,
        width:px2dp(deviceWidth-20),
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:px2dp(20)
    },
    lg_code:{
        display:'none',
        width:px2dp(deviceWidth-20),
    },
    lg_acc:{
        width:px2dp(deviceWidth-20),
    },
    lg_btn_wrap:{
        width:px2dp(deviceWidth-20),
        alignItems:'center'
    },
    lg_btn:{
        width:px2dp(305),
        marginTop:px2dp(28),
        marginBottom:px2dp(12),
    },
    lg_forget:{
        fontSize:px2dp(14),
        color:common.gary_9,
        textDecorationColor:common.gary_9,
        textDecorationLine:'underline'
    }
});

/*
function mapStateToProps(state) {
    return {
        name:state.name
    };
}
*/


export default createForm()(Login)