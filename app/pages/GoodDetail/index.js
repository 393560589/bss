import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, SafeAreaView, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'
import Pagination from './components/NumberPagination'
import AddToCart from '../../components/AddToCart'
// import { Button } from 'antd-mobile-rn'
// import { SafeAreaView } from 'react-navigation'
import { common } from '../../styles';
import { px2p } from '../../utils'
import { connect } from '../../utils/dva';
import { deviceWidth, deviceHeight } from '../../styles/common';
import HeaderRightDot from '../../components/HeaderRight';

const styles = StyleSheet.create({
  swiperImage: {
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },
  goodBaseInfo: {
    padding: px2p(10),
    marginTop: px2p(8),
    marginBottom: px2p(8),
    backgroundColor: common.fff
  },
  priceInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: px2p(14)
  },
  price: {
    color: common.theme,
    fontSize: px2p(20),
    fontWeight: '900',
    marginRight: px2p(20)
  },
  originalPrice: {
    fontSize: px2p(11),
    color: common.gary_9,
    textDecorationLine: 'line-through',
  },
  soldAmount: {
    position: 'absolute',
    right: px2p(10),
    color: common.gary_9
  },
  goodDesc: {
    fontSize: px2p(13),
    color: common.gray_1,
    fontWeight: '500',
    width: px2p(290)
  },
  goodActivityWrapper: {
    backgroundColor: common.fff,
    flexDirection: 'row',
    padding: px2p(10),
    paddingBottom: 0
  },
  goodActivityTitle: {
    color: common.gray_1,
    fontWeight: '500',
    fontSize: px2p(12),
    marginRight: px2p(10)
  },
  goodActivityMain: {
  },
  goodActivity: {
    flexDirection: 'row',
    marginBottom: px2p(10)
  },
  activityName: {
    width: px2p(55),
    height: px2p(15),
    borderColor: '#ff0000',
    borderWidth: StyleSheet.hairlineWidth,
    textAlign: 'center',
    // textAlignVertical: 'center',
    lineHeight: px2p(15),
    borderRadius: px2p(8),
    fontSize: px2p(10),
    color: common.theme,
    marginRight: px2p(10)
  },
  activityDetail: {
    fontWeight: '500',
    fontSize: px2p(12),
    color: '#555'
  },
  buyList: {
    marginTop: px2p(8),
    marginBottom: px2p(8),
    padding: px2p(10),
    paddingTop: 0,
    backgroundColor: common.fff
  },
  buyListTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: px2p(40)
  },
  titleDot: {
    width: px2p(4),
    height: px2p(11),
    backgroundColor: common.theme,
    marginRight: px2p(5)
  },
  buyListItem: {
    paddingTop: px2p(11),
    paddingBottom: px2p(11),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee'
  },
  buyListUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userAvatar: {
    width: px2p(24),
    height: px2p(24),
    borderRadius: px2p(12),
    backgroundColor: 'gray',
    marginRight: px2p(7)
  },
  userName: {
    fontSize: px2p(14),
    color: common.gray_1,
    fontWeight: '500'
  },
  userTime: {
    position: 'absolute',
    right: px2p(10),
    fontSize: px2p(11),
    color: common.gary_9
  },
  userText: {
    fontWeight: '500',
    fontSize: px2p(12),
    color: '#555',
    marginTop: px2p(13)
  },
  checkAll: {
    marginTop: px2p(11),
    alignSelf: 'center',
    width: px2p(110),
    height: px2p(29),
    borderRadius: px2p(15),
    borderColor: '#eee',
    borderWidth: 1,
    // alignItems: 'center'
  },
  checkAllText: {
    fontSize: px2p(13),
    color: common.gray_1,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: px2p(29)
  },
  pullUpText: {
    lineHeight: px2p(44),
    color: '#444',
    fontSize: px2p(13),
    fontWeight: '500',
    backgroundColor: common.fff,
    textAlign: 'center'
  },
  bottomArea: {
    // paddingBottom: 34,
    // marginTop: 1
    // bottom: px2p(34)
  }
})

function GoodDetail(props) {
  function onScroll(ev) {
    const { 
      nativeEvent: {
        contentOffset: { y },
        contentSize: { height: viewHeight },
        layoutMeasurement: { height }
      }
    } = ev
    const maxOffset = viewHeight - height
    if (y - maxOffset > 40) {
      setTimeout(() => {
        props.navigation.navigate('GoodDetailInfo')
      }, 500)
    }
  }

  return (
    <SafeAreaView
      style={{flex: 1}}
      backgroundColor={common.fff}>
      {
        props.navigation.getParam('isMenuVisible', false)
          ? <HeaderRightDot navigation={props.navigation}/>
          : ''
      }
      <View style={{position: 'absolute', height: deviceHeight, paddingBottom: px2p(30)}}>
        <ScrollView
          // height={px2p(600)}
          backgroundColor={common.gray_bg}
          onScroll={onScroll}
          scrollEventThrottle={60}
          style={{paddingBottom: px2p(30)}}>
          <Swiper
            style={{backgroundColor: common.fff}}
            autoplay
            height={px2p(375)}
            paginationStyle={{bottom: px2p(7)}}
            renderPagination={Pagination}>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ImageViewer')}>
              <Image source={require('../../image/home/img_cp1.png')} style={styles.swiperImage}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ImageViewer')}>
              <Image source={require('../../image/home/img_cp1.png')} style={styles.swiperImage}/>
            </TouchableWithoutFeedback>
          </Swiper>
          <View style={styles.goodBaseInfo}>
            <View style={styles.priceInfoWrapper}>
              <Text style={styles.price}>$11.22</Text>
              <Text style={styles.originalPrice}>15.22</Text>
              <Text style={styles.soldAmount}>已售2000件</Text>
            </View>
            <Text style={styles.goodDesc}>莆田冰清 青梅果酒12度梅子酒350ml(低度甜酒 清爽淡雅 发酵酒 男女皆宜)</Text>
          </View>
          <View style={styles.goodActivityWrapper}>
            <Text style={styles.goodActivityTitle}>活动</Text>
            <View style={styles.goodActivityMain}>
              {
                props.goodActivity.map((item, index) => (
                  <View style={styles.goodActivity} key={item.name}>
                    <Text style={styles.activityName}>{item.name}</Text>
                    <Text style={styles.activityDetail}>{item.detail}</Text>
                  </View>
                ))
              }
            </View>
          </View>
          <View style={styles.buyList}>
            <View style={styles.buyListTitle}>
              <View style={styles.titleDot}></View>
              <Text style={styles.goodActivityTitle}>购买记录(233)</Text>
              <View>iconright</View>
            </View>
            <View style={styles.buyListMain}>
              {
                props.buyList.map(item => (
                  <View style={styles.buyListItem} key={item.user}>
                    <View style={styles.buyListUser}>
                      <Image style={styles.userAvatar}/>
                      <Text style={styles.userName}>{item.user}</Text>
                      <Text style={styles.userTime}>{item.time}</Text>
                    </View>
                    <Text style={styles.userText}>{item.text}</Text>
                  </View>
                ))
              }
            </View>
            <TouchableOpacity style={styles.checkAll}>
              <Text style={styles.checkAllText}>查看全部记录</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.pullUpText}>上拉查看图文详情</Text>
        </ScrollView>
        <AddToCart style={{position: 'absolute', bottom: 0, top: 30}}/>
      </View>
    </SafeAreaView>
  )
}

export default connect(({goodDetail}) => (
  { ...goodDetail }
))(GoodDetail)