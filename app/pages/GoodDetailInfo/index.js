import React, { PureComponent } from 'react'
import { 
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView } from 'react-native'
import { px2p } from '../../utils';
import { common } from '../../styles';
import { deviceWidth, deviceHeight } from '../../styles/common';
import HeaderRightDot from '../../components/HeaderRight';

const styles = StyleSheet.create({
  container: {
  },
  header: {
    flexDirection: 'row',
    // flexWrap: 'nowrap'
  },
  header1: {
    height: 500
  },
  text: {
    flex: 1,
    fontSize: px2p(14),
    color: common.gary_6,
    textAlign: 'center',
    lineHeight: px2p(44),
    backgroundColor: common.fff,
    // flexWrap: 'nowrap'
  },
  divider: {
    alignSelf: 'center',
    width: px2p(1),
    height: px2p(15),
    backgroundColor: common.gary_e
  }
})

export default class GoodDetailInfo extends PureComponent {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <SafeAreaView backgroundColor={common.fff} style={{flex: 1}}>
        {
          this.props.navigation.getParam('isMenuVisible', false)
            ? <HeaderRightDot navigation={this.props.navigation} style={{top: 0}}/>
            : ''
        }
        <View style={{position: 'absolute', width: deviceWidth, height: deviceHeight}}>
          <ScrollView
            stickyHeaderIndices={[0]}>
            
            {/* <View></View> */}
            <View>
              <View style={styles.header}>
                <Text style={styles.text}>商品介绍</Text>
                <View style={styles.divider}></View>
                <Text style={styles.text}>规格参数</Text>
              </View>
            </View>
            <View style={styles.header1}><Text>123123123123</Text><Text>12312</Text></View>
            <View style={styles.header1}><Text>123123123123</Text><Text>12312</Text></View>
            <View style={styles.header1}><Text>123123123123</Text><Text>12312</Text></View>
            <View style={styles.header1}><Text>123123123123</Text><Text>12312</Text></View>
            <View style={styles.header1}><Text>123123123123</Text><Text>12312</Text></View>
            <View style={styles.header1}><Text>123123123123</Text><Text>12312</Text></View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}