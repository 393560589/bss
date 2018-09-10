import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-swiper'
import Entires from './components/Entries'
import { connect } from '../../utils/dva';
import { px2p } from '../../utils';
import { common } from '../../styles';
// import SearchBar from './components/SearchBar'

@connect(({ home }) => ({ ...home }))
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
    this.tabs = [
      {
        title: '平价好货'
      },
      {
        title: '活动精选'
      }
    ]
    this.swipers = [
      // require('../../image/home/img_banner_tt.png'),
      require('../../image/home/banner.png')
    ]
    this.testHomeData = [
      {
        name: '路印协议',
        image: require('../../image/home/Icon_jfrw.png'),
        tag: require('../../image/home/img_bq_hot.png')
      },
      {
        name: '比特币',
        image: require('../../image/home/Icon_jfrw.png'),
        // tag: require('../../image/home/img_bq_hot.png')
      },
      {
        name: 'Achcin',
          image: require('../../image/home/Icon_jfrw.png'),
        // tag: require('../../image/home/img_bq_hot.png')
      },
      {
        name: 'CoinMeet',
          image: require('../../image/home/Icon_jfrw.png'),
        // tag: require('../../image/home/img_bq_hot.png')
      },
      {
        name: 'ANT',
          image: require('../../image/home/Icon_jfrw.png'),
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
    ],
    this.searchItems = [
      {
        text: '录音协议',
        isPrimary: true
      },
      {
        text: '比特币',
        isPrimary: true
      },
      {
        text: '录音协议',
        isPrimary: true
      },
      {
        text: '录音协议'
      },
      {
        text: '录音协议'
      },
      {
        text: '录音协议'
      },
      {
        text: '录音协议'
      }
    ],
    this.newsList = [
      {
        title: 'test',
        author: '联想财经',
        time: '2018.8.15',
        image: require('../../image/home/news.png')
      },
      {
        title: '【Moses热点】腾讯独家回应：已完成所有使用商户号进行虚拟dsbfiabsfissiudfbs',
        author: '联想财经',
        time: '2018.8.15',
        image: require('../../image/home/news.png')
      },
      {
        title: 'test',
        author: '联想财经',
        time: '2018.8.15',
        image: require('../../image/home/news.png')
      },
      {
        title: 'test',
        author: '联想财经',
        time: '2018.8.15',
        image: require('../../image/home/news.png')
      },
      {
        title: 'test',
        author: '联想财经',
        time: '2018.8.15',
        image: require('../../image/home/news.png')
      },
      {
        title: 'test',
        author: '联想财经',
        time: '2018.8.15',
        image: require('../../image/home/news.png')
      },
      {
        title: 'test',
        author: '联想财经',
        time: '2018.8.15',
        image: require('../../image/home/news.png')
      }
    ]
  }

  renderStaticSearchBar = () => {
    return (
      <View style={styles.staticSearchBar}>
        {this.renderSearchBar()}
        {this.renderSearchItems()}
      </View>
    )
  }

  renderSearchBar = () => {
    return (
      <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate('Search')}>
        <View style={styles.searchBarContainer}>
          <Image source={require('../../image/home/search.png')} style={{width: px2p(22), height: px2p(22), margin: px2p(10)}}/>
          <View style={{width: px2p(1), height: px2p(15), backgroundColor: '#D2D2D2', marginRight: px2p(9)}}></View>
          <Text style={{fontSize: px2p(15), color: '#CCC', fontWeight: '300'}}>搜一下区块链资讯、交易所、项目、百科</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSearchItems = () => {
    return (
      <View style={styles.searchItems}>
        {
          this.searchItems.map(searchItem => (
            <View
              key={searchItem}
              style={{borderRadius: px2p(11), height: px2p(22), backgroundColor: '#F2F2F5', marginRight: px2p(10)}}>
              <Text style={[styles.searchItem, searchItem.isPrimary && {color: '#F29600'}]}>{searchItem.text}</Text>
            </View>
          ))
        }
      </View>
    )
  }

  renderNewsCell = ({title, author, time, image}) => {
    return (
      <View style={styles.newsCellContainer}>
        <View flex={1} style={{justifyContent: 'space-between'}}>
          <Text numberOfLines={2} style={{fontSize: px2p(15), color: '#070002'}}>{title}</Text>
          <View style={{flexDirection: 'row', opacity: 0.6}}>
            <Text>{author} · </Text>
            <Text>{time}</Text>
          </View>
        </View>
        {image && <Image source={image} style={{width: 101, height: 64, resizeMode: 'contain', marginLeft: px2p(20)}}/>}
      </View>
    )
  }

  renderNews = () => {
    return (
      this.newsList.map(news => (
        <View key={news}>
          {this.renderNewsCell({...news})}
        </View>
      ))
    )
    
  }
  
  render() {
    return (
      <SafeAreaView backgroundColor='#fff'>
        <ScrollView backgroundColor={common.gray_bg}>
          <View style={{zIndex: 99}}>
            <Swiper
              autoplay
              // height={px2p(211)}
              style={styles.swiper}
              activeDotColor={common.theme}
              paginationStyle={{bottom: px2p(7)}}>
              {
                this.swipers.map(swiper => (
                  <Image source={swiper} style={{width: px2p(375)}} key={swiper} resizeMode={'contain'}/>
                ))
              }
            </Swiper>
            {this.renderStaticSearchBar()}
          </View>
          <Entires data={this.testHomeData}/>
          {this.renderNews()}
          <View style={styles.loadMoreView}>
            {this.state.isLoading
              ? <ActivityIndicator animating={this.state.isLoading}/>
              : <Text style={styles.loadMoreText}>点击查看更多</Text>}
          </View>
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
  },
  staticSearchBar: {
    height: px2p(105),
    padding: px2p(15),
    paddingTop: px2p(38),
    backgroundColor: '#fff'
  },
  searchBarContainer: {
    position: 'absolute',
    top: px2p(-63),
    width: px2p(345),
    height: px2p(50),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgb(23, 22, 72)',
    shadowOpacity: 0.2,
    shadowRadius: px2p(5),
    alignSelf: 'center',
    zIndex: 20
  },
  searchItems: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'space-between',
    shadowColor: '#000',
  },
  searchItem: {
    fontSize: px2p(12),
    padding: px2p(5),
    paddingLeft: px2p(10),
    paddingRight: px2p(10),
    textAlign: 'center',
  },
  newsCellContainer: {
    flexDirection: 'row',
    alignItems:'stretch',
    padding: px2p(15),
    height: px2p(90),
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#EEE'
  },
  loadMoreText: {
    // lineHeight: px2p(39),
    fontSize: px2p(12),
    color: '#999',
    textAlign: 'center'
  },
  loadMoreView: {
    width: '100%',
    height: px2p(39),
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
