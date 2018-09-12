import React,{PureComponent} from 'react'
import {
    View,Text,
    Animated,
    StyleSheet,
    Image,ScrollView
} from 'react-native'
import { Modal,Picker,ActionSheet } from 'antd-mobile-rn'
import { List,ListItem } from '../../components/ListItem'
import {connect} from "../../utils/dva"
import {px2dp} from "../../utils";
import {common, deviceWidth} from '../../styles'
import {user} from "../../config/image"

import ImagePicker from 'react-native-image-picker'
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
    chooseAction = () => {
        const options = {
            title: '选择方式',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                // waitUntilSaved: true,
                // cameraRoll: true,
            },
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '打开相册',
            chooseFromLibraryButtonTitle: '打开相机',
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
              /*  this.resetErrorState();
                this.props.dispatch(uploadProfilePic(response));*/
            }
        });
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
                              onClick={() => {this.chooseAction()}}>
                           头像
                        </ListItem>
                    </List>

                    <List border={false}>
                        <ListItem
                            extra={'八九十月'}
                            hasborder>
                            <Text style={common.font_h2}>用户名</Text>
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
                            onClick={()=>this.onPushPage('SetName')}>
                            <Text style={common.font_h2}>昵称</Text>
                        </ListItem>
                        <ListItem
                            Icons={'arrow'}
                            extra={'无'}
                            hasborder
                            onClick={()=>this.onPushPage('CityAddress')}>
                            <Text style={common.font_h2}>地址设置</Text>
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