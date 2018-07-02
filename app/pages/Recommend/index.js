import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  FlatList
} from 'react-native';
import GoodItem from '../../components/GoodItem';
import { px2p } from '../../utils';
import { common } from '../../styles';

export default class Recommend extends React.Component {
  constructor() {
    super()
    this.testData = [
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
        onBtnPress: () => { this.props.navigation.navigate('MyYlb') },
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
      <ScrollView>
        <Image style={styles.banner} source={require('../../image/recommend/img_banner.png')}/>
        <View style={styles.title}>
          <Image style={styles.titleImg} source={require('../../image/recommend/img_wntj.png')}/>
        </View>
        <FlatList
          data={this.testData}
          renderItem={GoodItem}>
        </FlatList>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    height: px2p(100),
    width: px2p(375),
    backgroundColor: common.gary_3
  },
  title: {
    height: px2p(40),
    marginTop: px2p(8),
    marginBottom: px2p(3),
    backgroundColor: common.fff,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleImg: {
    width: px2p(103),
    height: px2p(13)
  }
});