import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';
import Swiper from 'react-native-swiper'
import Entires from './components/Entries'
import GoodItem from '../../components/GoodItem'
import { Tabs } from 'antd-mobile-rn'
import { connect } from '../../utils/dva';
import { px2p } from '../../utils';
import { common } from '../../styles';

@connect(({ Home }) => ({ ...Home }))
class Home extends Component {
  constructor(props) {
    super(props)
    this.tabs = [
      {
        title: '平价好货'
      },
      {
        title: '活动精选'
      }
    ]
    this.swipers = [
      require('../../image/home/img_banner_tt.png'),
      require('../../image/home/img_banner_tt2.png')
    ]
    this.testHomeData = [
      {
        name: '签到挖宝',
        image: require('../../image/home/Icon_qdwb.png'),
        tag: require('../../image/home/img_bq_hot.png')
      },
      {
        name: '积分任务',
        image: require('../../image/home/Icon_jfrw.png'),
        // tag: require('../../image/home/img_bq_hot.png')
      },
      {
        name: '邀请好友',
        image: require('../../image/home/Icon_yqhy.png'),
        // tag: require('../../image/home/img_bq_hot.png')
      },
      {
        name: '拼团抢购',
        image: require('../../image/home/Icon_ptqg.png'),
        // tag: require('../../image/home/img_bq_hot.png')
      },
      {
        name: '积分夺宝',
        image: require('../../image/home/Icon_jfdb.png'),
        tag: require('../../image/home/img_bq_new.png')
      }
    ],
    this.testGood = [
      {
        key: '1',
        goodImage: require('../../image/home/img_cp1.png'),
        activityImage: require('../../image/home/img_bq.png'),
        price: 14.5,
        sold: 1000,
        people: [
          {
            key: 1,
            image: require('../../image/home/img_tx1.png')
          },
          {
            key: 2,
            image: require('../../image/home/img_tx2.png')
          }
        ],
        name: '[2罐装]回音必正宗夏宁中宁甲级枸杞子新货250g/500g中宁红枸杞',
        btnText: '去购买',
        onBtnPress: () => { this.props.navigation.navigate('GoodItem') },
      },
      {
        key: '2',
        goodImage: require('../../image/home/img_cp1.png'),
        activityImage: require('../../image/home/img_bq.png'),
        price: 14.5,
        sold: 1000,
        people: [
          {
            key: 1,
            image: require('../../image/home/img_tx1.png')
          },
          {
            key: 2,
            image: require('../../image/home/img_tx2.png')
          }
        ],
        name: '[2罐装]回音必正宗夏宁中宁甲级枸杞子新货250g/500g中宁红枸杞',
        btnText: '去购买',
        onBtnPress: () => {},
      },
      {
        key: '3',
        goodImage: require('../../image/home/img_cp1.png'),
        activityImage: require('../../image/home/img_bq.png'),
        price: 14.5,
        sold: 1000,
        people: [
          {
            key: 1,
            image: require('../../image/home/img_tx1.png')
          }
        ],
        name: '[2罐装]回音必正宗夏宁中宁甲级枸杞子新货250g/500g中宁红枸杞',
        btnText: '去购买',
        onBtnPress: () => {console.log(1233)}
      }
    ]
  }
  
  render() {
    return (
      <SafeAreaView backgroundColor='#fff'>
        <ScrollView stickyHeaderIndices={[1]} backgroundColor={common.gray_bg}>
          <View>
            <Swiper
              autoplay
              height={px2p(150)}
              style={styles.swiper}
              activeDotColor={common.theme}
              paginationStyle={{bottom: px2p(7)}}>
              {
                this.swipers.map(swiper => (
                  <Image source={swiper} style={{height: px2p(150), width: px2p(375)}} key={swiper} resizeMode={'contain'}/>
                ))
              }
            </Swiper>
            <Entires data={this.testHomeData}/>
            <Image style={styles.banner} source={require('../../image/home/img_banner_gg.png')} resizeMode={'contain'}/>
          </View>
          <Tabs
            tabs={this.tabs}
            tabBarUnderlineStyle={{backgroundColor: common.theme}}
            tabBarActiveTextColor={common.theme}
            onChange={(a, b, c) => console.log(a, b, c)}
          />
          <FlatList
            data={this.testGood}
            renderItem={GoodItem}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  swiper: {
    height: px2p(150)
  },
  banner: {
    width: px2p(375),
    height: px2p(125),
    marginTop: px2p(8),
    marginBottom: px2p(8)
  }
})

export default Home
