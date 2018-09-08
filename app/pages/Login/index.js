import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { InputItem,Button,WhiteSpace } from 'antd-mobile-rn'
import {List } from '../../components/ListItem'
import { createForm } from 'rc-form'
import {common,deviceWidth} from "../../styles";
import {px2dp} from "../../utils";
import {commonStyle} from "../../styles/common";

class Login extends PureComponent {
    state={
        codelogin:true
    }
    componentDidMount(){
        console.log(deviceWidth)
    }
    onPushPage(page){
        this.props.navigation.navigate(page)
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <View style={styles.container}>
                {
                    this.state.codelogin ?<View style={styles.f_input_wrap}>
                        <View style={styles.f_tip_wrap}>
                            <Text style={styles.f_tip}>
                                验证即可登录，未注册用户将根据手机号自动创建账号
                            </Text>
                        </View>
                        <WhiteSpace/>
                        <WhiteSpace/>

                        <List border={false}>
                            <InputItem
                                {...getFieldProps('phone')}
                                type="phone"
                                clear
                                labelNumber={3}
                                placeholder="手机号"
                            ><Text style={{color:'#666'}}>+86&nbsp;|</Text> </InputItem>
                            <WhiteSpace/>
                            <InputItem
                                {...getFieldProps('code')}
                                type="number"
                                placeholder="验证码"
                                extra={<Text style={{fontSize:px2dp(12),color:'#666'}}>| 获取验证码</Text>}
                                onExtraClick={()=>this.getCode()}

                            />
                        </List>
                        <WhiteSpace/>
                        <Text
                            onPress={()=>this.setState({codelogin:!this.state.codelogin})}
                            style={{color:common.theme,paddingLeft:px2dp(12)}}>账号密码登录</Text>
                        <View style={commonStyle.btn_wrap}>
                            <Button style={styles.setbtn}>
                                <Text style={{color:'#fff',fontSize:px2dp(18)}}>
                                    登录
                                </Text>
                            </Button>
                        </View>
                    </View> :<View style={styles.f_input_wrap}>

                        <WhiteSpace/>

                        <List border={false}>
                            <InputItem
                                {...getFieldProps('phone')}
                                type="phone"
                                clear
                                labelNumber={3}
                                placeholder="手机号"
                            ><Text style={{color:'#666'}}>+86&nbsp;|</Text> </InputItem>
                            <WhiteSpace/>
                            <InputItem
                                {...getFieldProps('code')}
                                type="password"
                                clear={true}
                                placeholder="密码"
                               // extra={<Text style={{fontSize:px2dp(12),color:'#666'}}>| 获取验证码</Text>}
                                onExtraClick={()=>this.getCode()}

                            />
                        </List>
                        <WhiteSpace/>
                        <Text
                            onPress={()=>this.setState({codelogin:!this.state.codelogin})}
                            style={{color:common.theme,paddingLeft:px2dp(12)}}>快捷登录</Text>
                        <View style={commonStyle.btn_wrap}>
                            <Button style={styles.setbtn}>
                                <Text style={{color:'#fff',fontSize:px2dp(18)}}>
                                    登录
                                </Text>
                            </Button>
                            <View style={{
                                flexDirection:'row',
                                justifyContent:'space-between',
                                marginTop:px2dp(20),
                            }}>
                                <Text
                                    onPress={()=>this.onPushPage('Fpassword')}
                                    style={{color:'#666'}}>忘记密码&nbsp;&nbsp;|</Text>
                                <Text
                                    onPress={()=>this.onPushPage('Sign')}
                                    style={{color:'#666'}}>&nbsp;&nbsp;注册账号</Text>
                            </View>

                        </View>
                    </View>
                }


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //

    },
    f_input_wrap:{
        flex:1,
        backgroundColor:'#fff',
        paddingLeft:px2dp(20),
        paddingRight:px2dp(20),
        marginTop:px2dp(6),
    },
    f_tip_wrap:{
        alignItems:'flex-start',
        marginVertical:px2dp(8),

    },
    f_tip:{
        paddingLeft:px2dp(10),
        paddingRight:px2dp(10),
        lineHeight:px2dp(15),
        color:'#333',
        fontSize:px2dp(12),
    },
    setbtn:{
        borderWidth:0,
        backgroundColor:'#F29600',
        color:'#fff',
        marginTop:px2dp(40),
        width:deviceWidth-180
    }
});
export default createForm()(Login)