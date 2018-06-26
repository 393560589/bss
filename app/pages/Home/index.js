import React,{PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from '../../utils/dva';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.goLogin = this.goLogin.bind(this);
    }
    goLogin(){
        const { navigation } = this.props;
        navigation.navigate('Login', { name: '我是下一页' });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.goLogin}>首页</Text>
                <Text onPress={() => this.props.navigation.navigate('Collection')}>myl</Text>
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

function mapStateToProps(state) {
    return {
        // state 映射到 props
    };
}
export default connect(mapStateToProps)(Home)