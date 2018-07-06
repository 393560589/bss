import React, { PureComponent } from 'react'
import { 
  View,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Modal,
  SafeAreaView } from 'react-native'
import { px2p } from '../../utils';
import { common } from '../../styles';

const styles = StyleSheet.create({
  headerRight: {
    position: 'absolute',
    top: px2p(34),
    right: px2p(15),
    width: px2p(125),
    paddingLeft: px2p(8),
    paddingRight: px2p(8),
    paddingTop: px2p(5),
    zIndex: 10000
  },
  headerRightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: common.gary_6
  },
  headerIcon: {
    width: px2p(15),
    height: px2p(15),
    resizeMode: Image.resizeMode.contain,
    marginLeft: px2p(14),
    marginRight: px2p(11)
  },
  headerItemText: {
    lineHeight: px2p(37),
    color: common.fff,
    fontSize: px2p(14)
  },
  text: {
    flex: 1,
    fontSize: px2p(14),
    color: common.gary_6,
    textAlign: 'center',
    lineHeight: px2p(44),
    backgroundColor: common.fff
  },
  divider: {
    alignSelf: 'center',
    width: StyleSheet.hairlineWidth,
    height: px2p(15),
    backgroundColor: common.gary_e
  }
})

export default class GoodDetailInfo extends PureComponent {
  constructor() {
    super()
    this.state = {
      currentView: ''
    }
    this.data = [
      {
        icon: require('../../image/headerRight/Icon_sy.png'),
        name: '首页',
        onPress: () => {
          this.props.navigation.navigate('Home')
        }
      },
      {
        icon: require('../../image/headerRight/Icon_spsc.png'),
        name: '商品收藏'
      },
      {
        icon: require('../../image/headerRight/Icon_yljl.png'),
        name: '游览记录'
      }
    ]
  }

  render() {
    return (
      <SafeAreaView backgroundColor={common.fff}>
        {
          this.props.navigation.getParam('isMenuVisible', false)
            ? <ImageBackground source={require('../../image/headerRight/bg_pptc.png')} style={styles.headerRight} resizeMode='cover'>
                <View>
                  {
                    this.data.map((item, index) => (
                      <TouchableOpacity style={styles.headerRightItem} onPress={item.onPress} key={item.name}>
                        <Image source={item.icon} style={styles.headerIcon}/>
                        <Text style={styles.headerItemText}>{item.name}</Text>
                      </TouchableOpacity>
                    ))
                  }
                </View>
              </ImageBackground>
            : ''
          }
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>商品介绍</Text>
            <View style={styles.divider}></View>
            <Text style={styles.text}>规格参数</Text>
          </View>
      </SafeAreaView>
    )
  }
}