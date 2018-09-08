import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

import {px2dp} from '../utils'
//import {Icon } from 'antd-mobile-rn'
import {deviceWidth} from '../styles/common'
import {user} from '../config/image'

export const List =(props)=>{
    const { styles,border,renderHeader } = props;
    return (
        <View style={[{
            borderTopWidth:border ? 1 :0,
            borderBottomWidth:border ? 1:0,
            borderColor:'#eee',
        },styles]}>
            {
                renderHeader &&
                <View style={{
                    paddingLeft:px2dp(10),
                    paddingRight:px2dp(10),
                    justifyContent:'center',

                    minHeight:px2dp(40),backgroundColor:'#fff'}}>
                    <Text style={{ color: '#4E8CEE'}}>{renderHeader}</Text>
                </View>

            }
            { props.children }
        </View>
    )
};
List.defaultProps={
    border:true,
    renderHeader:false
};

export const ListItem =(props)=>{
   // console.info(props);
    const { Icons,thumb,extra,styles,onClick,hasborder } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[Styles.viewwrap,styles,{borderBottomColor:'#eee',borderBottomWidth:hasborder ? 1:0}]} onPress={ onClick }>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                    { thumb }
                </View>
                <View>
                    <Text>{props.children}</Text>
                </View>
            </View>
            <View>
                <Text style={{fontSize:px2dp(12),color:'#999'}}>{ extra }</Text>
                {
                    Icons && <Image require={ Icons } style={{width:px2dp(14)}}/>
                }
            </View>
        </TouchableOpacity>
    )
};
ListItem.defaultProps={
    Icons:false,
    extra:'',
    thumb:'',
    hasborder:false,
    onClick:()=>{}
}
const Styles = StyleSheet.create({

    viewwrap:{
        backgroundColor:'#fff',
        paddingLeft:px2dp(10),
        paddingRight:px2dp(10),
        width:deviceWidth,
        flexDirection:'row',
        justifyContent:'space-between',
        minHeight:px2dp(50),
        alignItems:'center',
    }

});