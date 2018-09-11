import React,{PureComponent} from 'react'
import {
    View,Text,
    Animated,
    StyleSheet,
    Image,ScrollView
} from 'react-native'
import { Modal,Picker } from 'antd-mobile-rn'
import { List,ListItem } from '../../components/ListItem'
import {connect} from "../../utils/dva"
import {px2dp} from "../../utils";
import {common, deviceWidth} from '../../styles'
import {user} from "../../config/image"
//import { createForm } from 'rc-form'
import { pc } from 'antd-mobile-area-data'

const prompt = Modal.prompt;
const operation = Modal.operation;

@connect(({SetUser})=>({SetUser}))

class SetUser extends PureComponent{
    componentDidMount(){
        console.log(this.props)
    }
    onPushPage(page){
       this.props.navigation.navigate(page)
    }
    render(){
        const {dispatch,SetUser} = this.props;
        //const { getFieldProps } = this.props.form;
        return (
            <View>
                <View>
                    <List styles={{marginTop:px2dp(6)}}>
                        <ListItem
                            Icons={'arrow'}
                            styles={{paddingTop:px2dp(4),paddingBottom:px2dp(4)}}
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
                           头像
                        </ListItem>
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
                    <List border={false}>
                        <ListItem
                            extra={'八九十月'}
                            hasborder>
                            <Text style={common.font_h2}>用户名</Text>
                        </ListItem>
                        <ListItem
                            hasborder
                            Icons={'arrow'}
                              extra={ <Text style={common.font_h2}>180****889</Text>}
                               onClick={() => prompt('修改昵称', <Text>{'180****889'}</Text>, [
                            { text: <Text style={{color:common.gary_6}}>取消</Text> },
                            { text: <Text style={{color:common.theme}}>确认</Text>, onPress: value => console.log(`输入的内容:${value}`) },
                        ], 'default', '')}>
                            <Text style={common.font_h2}>修改昵称</Text>
                        </ListItem>

                        <ListItem
                            hasborder
                            Icons={'arrow'}
                              extra={'男'}
                            onClick={() => operation([
                                { text: '男', onPress: () => console.log('标为未读被点击了') },
                                { text: '女', onPress: () => console.log('置顶聊天被点击了') },
                            ])}>
                            <Text style={common.font_h2}>性别</Text>
                        </ListItem>
                        <ListItem
                            Icons={'arrow'}
                            extra={'无'}
                            hasborder
                           onClick={() => prompt('设置', '修改用户昵称', [
                            { text: <Text style={{color:common.gary_6}}>取消</Text> },
                            { text: <Text style={{color:common.theme}}>确认</Text>, onPress: value => console.log(`输入的内容:${value}`) },
                        ], 'default', '无')}>
                            <Text style={common.font_h2}>昵称</Text>
                        </ListItem>
                        <ListItem
                            Icons={'arrow'}
                            extra={'无'}
                            hasborder
                            onClick={()=>this.onPushPage('CityAddress')}>
                            <Text style={common.font_h2}>昵称</Text>
                        </ListItem>
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

export default SetUser