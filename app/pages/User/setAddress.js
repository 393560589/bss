import React,{PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import { List,Button } from 'antd-mobile-rn'
import {connect} from "../../utils/dva";
import {px2dp} from "../../utils";
import {set} from "../../config/image";
import {common,deviceWidth} from "../../styles";
import {commonStyle} from "../../styles/common";

const Item = List.Item;
@connect()
export default class SetAddress extends PureComponent{
    onPushPage(page){
        this.props.navigation.navigate(page)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <ScrollView style={{flex:1}}>
                    <View style={styles.as_item}>
                        <View>
                            <Text style={styles.as_item_tit}>黄师傅 18200009990</Text>
                            <Text style={styles.as_item_des}>浙江省杭州市拱墅区 丰登街拱北路口666号</Text>
                        </View>
                        <View style={styles.as_item_btns}>
                            <View style={commonStyle.row}>
                                <Image source={set.checked} style={{width:px2dp(15),height:px2dp(15)}}/>
                                <Text style={styles.as_item_btn_text}>设为默认地址</Text>
                            </View>
                            <View style={styles.as_item_btn}>
                                <TouchableOpacity
                                    style={commonStyle.row}
                                >
                                    <Image source={set.bj} style={{width:px2dp(14),height:px2dp(14)}}/>
                                    <Text style={styles.as_item_btn_text}>编辑</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[commonStyle.row,{marginLeft:px2dp(14)}]}
                                >
                                    <Image source={set.sc} style={{width:px2dp(14),height:px2dp(14)}}/>
                                    <Text style={styles.as_item_btn_text}>删除</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.as_item}>
                        <View>
                            <Text style={styles.as_item_tit}>黄师傅 18200009990</Text>
                            <Text style={styles.as_item_des}>浙江省杭州市拱墅区 丰登街拱北路口666号</Text>
                        </View>
                        <View style={styles.as_item_btns}>
                            <View style={commonStyle.row}>
                                <Image source={set.nocheck} style={{width:px2dp(15),height:px2dp(15)}}/>
                                <Text style={styles.as_item_btn_text}>设为默认地址</Text>
                            </View>
                            <View style={styles.as_item_btn}>
                                <TouchableOpacity
                                    style={commonStyle.row}
                                >
                                    <Image source={set.bj} style={{width:px2dp(14),height:px2dp(14)}}/>
                                    <Text style={styles.as_item_btn_text}>编辑</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[commonStyle.row,{marginLeft:px2dp(14)}]}
                                >
                                    <Image source={set.sc} style={{width:px2dp(14),height:px2dp(14)}}/>
                                    <Text style={styles.as_item_btn_text}>删除</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={{height:45}}>
                    <Button type={'primary'}>新增地址</Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    as_item:{
        paddingHorizontal:px2dp(8),
        paddingTop:px2dp(8),
        marginTop:px2dp(8),
        width:deviceWidth,
        backgroundColor:common.fff
    },
    as_item_btn:{
        flexDirection:'row',
    },
    as_item_btn_text:{
      fontSize:px2dp(12),
      color:common.gary_3,
      marginLeft:px2dp(4)
    },
    as_item_btns:{
        flexDirection:'row',
        height:px2dp(40),
        alignItems:'center',
        borderTopWidth:1,
        borderColor:common.gary_e,
        justifyContent:'space-between'
    },
    as_item_des:{
        fontSize:px2dp(12),
        color:common.gary_6,
        lineHeight:px2dp(30),
    },
    as_item_tit:{
        fontSize:px2dp(15)
    },
})