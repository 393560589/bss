import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from '../../utils/dva';

@connect()
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.goLogin = this.goLogin.bind(this);
    }
    goLogin(){
        const { navigation } = this.props;
        console.log(this.props)
        navigation.navigate('Login', { name: '我是下一页' });

    }
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.goLogin}>首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Home