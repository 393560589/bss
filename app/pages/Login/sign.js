import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { List,InputItem,Button } from 'antd-mobile-rn'
import { createForm } from 'rc-form'
import {common,deviceWidth} from "../../styles";
import {px2dp} from "../../utils";
import {commonStyle} from "../../styles/common";

class Sign extends PureComponent {

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <View style={styles.container}>
                <View style={styles.sign_input_wrap}>
                    <List>
                        <InputItem
                            {...getFieldProps('phone')}
                            type="phone"
                            clear
                            labelNumber={5}

                            placeholder="输入手机号"
                        >手机号</InputItem>
                        <InputItem
                            {...getFieldProps('code')}
                            type="number"
                            labelNumber={5}
                            placeholder="输入四位数字验证码"
                            extra={<Text style={{fontSize:px2dp(12),color:common.theme}}>获取验证码</Text>}
                            onExtraClick={()=>this.getCode()}

                        >验证码</InputItem>
                        <InputItem
                            {...getFieldProps('pwd')}
                            type="password"
                            clear
                            labelNumber={5}

                            placeholder="输入登录密码"
                        >登录密码</InputItem>
                    </List>
                </View>
                <View style={commonStyle.btn_wrap}>
                    <Button type={'primary'} style={commonStyle.btn}>立即注册</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sign_input_wrap:{
        marginTop:px2dp(6),
        marginBottom:px2dp(30)
    },

});
export default createForm()(Sign)