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
import {set, user} from "../../config/image";
import {common} from "../../styles";
import {commonStyle} from "../../styles/common";

const Item = List.Item;
@connect()
export default class AboutUS extends PureComponent{
    onPushPage(page){
        this.props.navigation.navigate(page)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <View style={styles.Icon_wrap}>
                    <Image source={set.Icons} style={{height:px2dp(70),width:px2dp(70)}}/>
                    <Text style={[styles.yutext,common.font_h2]}>小娱商城</Text>
                    <Text style={{color:common.gary_9,fontSize:px2dp(12)}}>购物之后更娱乐</Text>
                </View>
                <List style={{marginBottom:px2dp(6)}} renderHeader={()=>null}>
                    <Item arrow="horizontal" onClick={() => {this.onPushPage('SetAddress')}}>
                        <Text style={common.font_h2}>版本信息</Text>
                    </Item>
                    <Item arrow="horizontal" onClick={() => {}}>
                        <Text style={common.font_h2}>检查更新</Text>
                    </Item>
                </List>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Icon_wrap:{
        paddingVertical:px2dp(15),
        alignItems:'center'
    },
    yutext:{
        marginTop:px2dp(15),
        marginBottom:px2dp(10)
    }
})