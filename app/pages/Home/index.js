import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import Swiper from 'react-native-swiper'
import Entires from './components/Entries'
import GoodItem from './components/GoodItem'
import { connect } from '../../utils/dva';
import { px2p } from '../../utils';
import { common } from '../../styles';

@connect(({ Home }) => ({ ...Home }))
class Home extends PureComponent {

  constructor(props) {
    super(props)
    this.testHomeData = [
      {
        name: '签到挖宝'
      },
      {
        name: '积分任务'
      },
      {
        name: '邀请好友'
      },
      {
        name: '拼团抢购'
      },
      {
        name: '积分夺宝'
      }
    ],
    this.testGood = [
      {
        key: 1,
        image: '',
        price: 14.5,
        sold: 1000,
        people: ['1', '2'],
        name: '[2罐装]回音必正宗夏宁中宁甲级枸杞子新货250g/500g中宁红枸杞',
        btnText: '去购买',
        onBtnPress: () => { console.log(this.testHomeData) }
      },
      {
        key: 2,
        image: '',
        price: 14.5,
        sold: 1000,
        people: ['1', '2'],
        name: '[2罐装]回音必正宗夏宁中宁甲级枸杞子新货250g/500g中宁红枸杞',
        btnText: '去购买',
        onBtnPress: () => {console.log(123)}
      },
      {
        key: 3,
        image: '',
        price: 14.5,
        sold: 1000,
        people: ['1', '2'],
        name: '[2罐装]回音必正宗夏宁中宁甲级枸杞子新货250g/500g中宁红枸杞',
        btnText: '去购买',
        onBtnPress: () => {console.log(1233)}
      }
    ]
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <ScrollView>
        <Swiper
          style={styles.swiper}
          activeDotColor={common.theme}>
          <Text>1</Text>
          <Text>2</Text>
          <Text>33</Text>
        </Swiper>
        <Entires data={this.testHomeData}/>
        <View style={styles.banner}></View>
        {/* <FlatList
          data={this.testGood}
          renderItem={GoodItem}
        /> */}
        <View>
          {
            this.testGood.map(item => (
              <GoodItem item={item} key={item.key}/>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiper: {
    height: px2p(150)
  },
  banner: {
    height: px2p(125),
    backgroundColor: 'gray',
    marginTop: px2p(8),
    marginBottom: px2p(8)
  }
})

export default Home
