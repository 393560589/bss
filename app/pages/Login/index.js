import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView
} from 'react-native';
import {Button} from 'antd-mobile-rn'
import {px2dp} from "../../utils";
import {common,deviceWidth} from "../../styles";
import { List,InputItem,WingBlank } from 'antd-mobile-rn'
import { createForm } from 'rc-form'
class Login extends PureComponent{
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <View style={styles.container}>
                <Image style={{height:px2dp(253),width:deviceWidth,backgroundColor:common.gary_9}}/>
                <View style={styles.lg_ct}>
                    <WingBlank size={'lg'}>
                        <View>
                            <View>
                                <Text>验证码登录</Text>
                            </View>
                            <View>
                                <Text>密码登录</Text>
                            </View>
                        </View>

                        <List>
                            <InputItem
                                {...getFieldProps('phone')}
                                type="phone"
                                labelNumber={2}
                                placeholder="186 1234 1234"
                            ><Image style={{width:px2dp(16),height:px2dp(16),backgroundColor:common.gary_2}}/></InputItem>
                            <InputItem
                                {...getFieldProps('number')}
                                type="number"
                                labelNumber={2}
                                placeholder="****"
                                extra="请输入验证码"
                            ><Image style={{width:px2dp(16),height:px2dp(16),backgroundColor:common.gary_2}}/></InputItem>

                        </List>
                        <Button disabled={true} style={styles.lg_btn}>登录</Button>
                    </WingBlank>
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
    lg_ct:{
        marginTop:px2dp(-40),
        backgroundColor:common.fff,
        borderRadius:4,
        width:px2dp(deviceWidth-20),
        paddingVertical:px2dp(25),
        paddingBottom:px2dp(35),
    },
    lg_btn:{
        color:common.fff,
        width:px2dp(305),
        marginTop:px2dp(24)
    }
});
const InputLogin = createForm()(Login);
export default InputLogin