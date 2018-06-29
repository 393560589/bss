import React,{PureComponent} from 'react'
import {
    View,Text,
    Animated,
    StyleSheet,
    Image,ScrollView
} from 'react-native'
import { List,Modal } from 'antd-mobile-rn'
import {connect} from "../../utils/dva"
import {px2dp} from "../../utils";
import {common, deviceWidth} from '../../styles'
import {user} from "../../config/image"


const prompt = Modal.prompt;
const alert = Modal.alert;
const Item = List.Item;
@connect(({SetUser})=>({SetUser}))
export default class SetUser extends PureComponent{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {dispatch,SetUser} = this.props;
        return (
            <View>
                <View>
                    <List style={{marginBottom:px2dp(6)}} renderHeader={()=>null}>
                        <Item arrow="horizontal"
                              multipleLine
                              extra={ <Image style={{width:px2dp(46),height:px2dp(46)}} source={user.tx}/>}
                              onClick={() => {
                                  dispatch({
                                      type:'SetUser/animaed',
                                      payload:{
                                          imageheight:SetUser.imageheight,
                                          isShow:!SetUser.isShow
                                      }
                                  })
                              }}>
                            <Text style={common.font_h2}>头像</Text>
                        </Item>
                    </List>
                    <Animated.View
                        style={{height:this.props.SetUser.imageheight}}
                    >
                        <ScrollView
                            horizontal={true}
                            style={styles.imgbox}>
                            <Image style={{width:px2dp(65),height:px2dp(65),marginRight:px2dp(5)}} source={user.tx}/>
                        </ScrollView>
                    </Animated.View>
                    <List style={{marginBottom:px2dp(6)}} renderHeader={()=>null}>
                        <Item arrow="horizontal"
                              extra={ <Text style={common.font_h2}>180****889</Text>}
                              multipleLine onClick={() => prompt('设置', '修改绑定手机号', [
                            { text: <Text style={{color:common.gary_6}}>取消</Text> },
                            { text: <Text style={{color:common.theme}}>确认</Text>, onPress: value => console.log(`输入的内容:${value}`) },
                        ], 'default', '180****990')}>
                            <Text style={common.font_h2}>手机号</Text>
                        </Item>
                    </List>
                    <List style={{marginBottom:px2dp(6)}} renderHeader={()=>null}>
                        <Item arrow="horizontal"
                              extra={ <Text style={common.font_h2}>保密</Text>}
                              onClick={() =>
                                  alert(<Text>设置</Text>,'修改性别' , [
                                      { text: <Text style={{color:common.gary_3}}>男</Text>, onPress: () => console.log('第0个按钮被点击了') },
                                      { text: <Text style={{color:common.gary_3}}>女</Text>, onPress: () => console.log('第1个按钮被点击了') },
                                      { text: <Text style={{color:common.gary_3}}>保密</Text>, onPress: () => console.log('第2个按钮被点击了') },
                                  ])
                              }>
                            <Text style={common.font_h2}>性别</Text>
                        </Item>
                        <Item
                            extra={ <Text style={common.font_h2}>无</Text>}
                            arrow="horizontal" onClick={() => prompt('设置', '修改用户昵称', [
                            { text: <Text style={{color:common.gary_6}}>取消</Text> },
                            { text: <Text style={{color:common.theme}}>确认</Text>, onPress: value => console.log(`输入的内容:${value}`) },
                        ], 'default', '无')}>
                            <Text style={common.font_h2}>昵称</Text>
                        </Item>
                    </List>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imgbox:{
        paddingVertical:px2dp(8),
        minWidth:deviceWidth,
        flexWrap:'nowrap',
        flexDirection:'row'
    }
})