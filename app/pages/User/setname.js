import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    //TextInput,
    Image,
    View
} from 'react-native';
import { Radio,List,InputItem } from 'antd-mobile-rn'

import {px2dp} from "../../utils";
//import {commonStyle} from "../../styles/common";
//import { pc } from 'antd-mobile-area-data'
//import { ,ListItem } from '../../components/ListItem'

import {connect} from "../../utils/dva";

@connect(({User})=>({...User}))
export default class Index extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
  /*  static navigationOptions = ({ navigation }) => ({
        headerRight: <RightButton onPress={() => console.log(this.props)} />
    })*/

    componentDidMount(){
        //console.log(this.state.data)
    }
    ChooseCity(item){

    }
    onPushPage(page){
        this.props.navigation.navigate(page)
    }
    render() {

        return (
           <View>
               <List renderHeader={()=>'好名字可以让你的朋友更容易记住你'}>
                   <InputItem
                     clear={true}
                     defaultValue={'平'}
                     value={this.state.value}
                   />
               </List>
           </View>
        );
    }
}
