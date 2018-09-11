import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Image,
    View
} from 'react-native';
import { InputItem,Button,Picker,Switch } from 'antd-mobile-rn'

import {px2dp} from "../../utils";
import {commonStyle} from "../../styles/common";
import { pc } from 'antd-mobile-area-data'
import { List,ListItem } from '../../components/ListItem'

import {connect} from "../../utils/dva";

@connect(({User})=>({...User}))
export default class ProAddress extends PureComponent {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        //console.log(this.state.data)
    }
    ChooseCity(item){

    }
    onPushPage(page){
        this.props.navigation.navigate(page)
    }
    render() {
        //const { getFieldProps } = this.props.form;
        console.log(this.props)
       const { citylist } = this.props;
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.textStyle}>
                    全部
                </Text>
                <List>
                    {
                        citylist.children.map((item,index)=>{
                            return (
                                <ListItem
                                    key={index}
                                    hasborder
                                    onClick={()=>this.ChooseCity(item)}
                                >
                                    {item.label}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle:{
        marginTop:px2dp(20),
        marginBottom:px2dp(5),
        fontSize:px2dp(10),
        color:'#666',
        marginLeft:px2dp(10),
    }
});
