import React,{PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native'
import { List,Button } from 'antd-mobile-rn'
import {connect} from "../../utils/dva";
import {px2dp} from "../../utils";
import {user} from "../../config/image";
import {common} from "../../styles";
import {commonStyle} from "../../styles/common";
import AboutUS from "./aboutus";
import Invoice from "./invoice";

const Item = List.Item;
@connect()
export default class Setting extends PureComponent{
    onPushPage(page){
        this.props.navigation.navigate(page)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>

                        <List style={{marginBottom:px2dp(6)}} renderHeader={()=>null}>
                            <Item arrow="horizontal" multipleLine onClick={() => {this.onPushPage('SetUser')}}>
                                <Image style={{width:px2dp(46),height:px2dp(46)}} source={user.tx}/>
                            </Item>
                        </List>
                        <List style={{marginBottom:px2dp(6)}} renderHeader={()=>null}>
                            <Item arrow="horizontal" multipleLine onClick={() => {this.onPushPage('Setpwd')}}>
                                <Text style={common.font_h2}>密码管理</Text>
                            </Item>
                        </List>
                        <List style={{marginBottom:px2dp(6)}} renderHeader={()=>null}>
                            <Item arrow="horizontal" onClick={() => {this.onPushPage('SetAddress')}}>
                                <Text style={common.font_h2}>地址管理</Text>
                            </Item>
                            <Item arrow="horizontal" onClick={() => {this.onPushPage('Invoice')}}>
                                <Text style={common.font_h2}>发票助手</Text>
                            </Item>
                        </List>
                        <List renderHeader={()=>null}>
                            <Item arrow="horizontal" multipleLine onClick={() => {this.onPushPage('AboutUS')}}>
                                <Text style={common.font_h2}>关于我们</Text>
                            </Item>
                        </List>
                </View>
                <View style={{height:45}}>
                    <Button type={'primary'}>退出登录</Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})