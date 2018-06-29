import React,{PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { List } from 'antd-mobile-rn'
import {connect} from "../../utils/dva";
import {px2dp} from "../../utils";
import {user} from "../../config/image";

const Item = List.Item;
@connect()
export default class Setpwd extends PureComponent{
    onPushPage(page){
        this.props.navigation.navigate(page)
    }
    render(){
        return (
            <View>
                <List style={{marginTop:px2dp(6)}} renderHeader={()=>null}>
                    <Item arrow="horizontal" onClick={() => {this.onPushPage('Cpassword')}}>
                        修改登录密码
                    </Item>
                    <Item arrow="horizontal" onClick={() => {this.onPushPage('Fpassword')}}>
                        忘记登录密码
                    </Item>
                </List>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})