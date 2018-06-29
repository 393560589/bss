import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { List,InputItem,Button,Picker,Switch } from 'antd-mobile-rn'
import { createForm } from 'rc-form'
import {common,deviceWidth} from "../../styles";
import {px2dp} from "../../utils";
import {commonStyle} from "../../styles/common";
import { pc, pca, pcas } from 'antd-mobile-area-data'

const Item = List.Item;
class AddAddress extends PureComponent {

    componentDidMount(){
        console.log(deviceWidth)
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <View style={styles.container}>
                <View style={styles.f_input_wrap}>
                    <List>
                        <InputItem
                            {...getFieldProps('name')}
                            type="text"
                            clear
                            labelNumber={5}
                            placeholder="收件人"
                        ><Text style={common.font_h2}>手机号</Text></InputItem>
                        <InputItem
                            {...getFieldProps('phone')}
                            type="phone"
                            clear
                            labelNumber={5}
                            placeholder="联系电话"
                        ><Text style={common.font_h2}>联系电话</Text></InputItem>
                    </List>
                    <List style={{marginTop:px2dp(6)}}>
                        <Picker extra={<Text style={[common.font_h2]}>请选择</Text> }
                                data={pcas}
                                cols={4}
                                title={<Text style={common.font_h2}>地区选择</Text>}
                                indicatorStyle={common.font_h2}
                                itemStyle={common.font_h2}
                                {...getFieldProps('district')}
                                okText={<Text style={[common.font_h2,{color:common.theme_2}]}>确定</Text>}
                                dismissText={<Text style={[common.font_h2,{color:common.gary_6}]}>取消</Text>}
                                onOk={e => console.log(e)}
                                onDismiss={e => console.log('dismiss', e)}
                        >
                            <Item arrow="horizontal">
                                <Text style={common.font_h2}>所在地址</Text>
                            </Item>
                        </Picker>
                        <InputItem
                            {...getFieldProps('address')}
                            type="text"
                            clear
                            placeholder="输入详细地址"
                        />
                    </List>
                    <List style={{marginTop:px2dp(6)}}>
                        <Item
                            extra={<Switch
                                color={common.theme_2}
                                {...getFieldProps('Switch1', {
                                    initialValue: true,
                                    valuePropName: 'checked',
                                })}
                                onClick={(checked) => { console.log(checked); }}
                            />}
                        >
                            <Text style={common.font_h2}>设为默认地址</Text>
                        </Item>
                    </List>

                </View>
                <View style={commonStyle.btn_wrap}>
                    <Button type={'primary'} style={{width:deviceWidth}}>提交</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    f_input_wrap:{
        flex:1,
        marginTop:px2dp(6),
    },
    f_tip_wrap:{
        alignItems:'center',
        marginVertical:px2dp(8)
    },
    f_tip:{
        lineHeight:px2dp(15),
        width:deviceWidth-20,
        color:common.theme,
        fontSize:px2dp(10),
    },
});
export default createForm()(AddAddress)