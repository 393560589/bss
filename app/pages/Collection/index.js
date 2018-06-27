import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native'
import { px2p } from '../../utils/index'
import { common } from '../../styles'
export default class Collection extends Component {
  constructor() {
    super()
    this.testData = [
      {
        key: 'a',
        img: '',
        name: '沃盼(WOPAN)眉山黄心油桃新鲜水果桃子 铂金果2.5斤装',
        price: 77
      },
      {
        key: 'b',
        img: '',
        name: '沃盼(WOPAN)眉山黄心油桃新鲜水果桃子 铂金果2.5斤装',
        price: 77
      },
      {
        key: 'c',
        img: '',
        name: '沃盼(WOPAN)眉山黄心油桃新鲜水果桃子 铂金果2.5斤装',
        price: 77
      },
      {
        key: 'd',
        img: '',
        name: '沃盼(WOPAN)眉山黄心油桃新鲜水果桃子 铂金果2.5斤装',
        price: 77
      },
      {
        key: 'e',
        img: '',
        name: '沃盼(WOPAN)眉山黄心油桃新鲜水果桃子 铂金果2.5斤装',
        price: 77
      },
      {
        key: 'f',
        img: '',
        name: '沃盼(WOPAN)眉山黄心油桃新鲜水果桃子 铂金果2.5斤装',
        price: 77
      }
    ],
    this.state = {
      isRefreshing: false
    }
  }

  _renderItem({item}) {
    const { price, name, img } = item
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.img}/>>
        <View style={styles.itemRight}>
          <Text style={styles.name}>{name}</Text>
          <View style={{flexDirection: '·row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Text style={styles.price}>¥{price}</Text>
            <TouchableOpacity style={styles.cancelBtn}><Text style={styles.btnText}>取消关注</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  _onRefresh = () => {
    this.setState({isRefreshing: true})
    setTimeout(() => {
      this.setState({isRefreshing: false})
    }, 1000)
  }

  render() {
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}/>
        }
        data={this.testData}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: px2p(6),
    height: px2p(127),
    flexDirection: 'row',
    // justifyContent: 'spa',
    paddingTop: px2p(15),
    paddingLeft: px2p(10),
    paddingBottom: px2p(20),
    paddingRight: px2p(10),
    backgroundColor: '#fff'
  },
  img: {
    width: px2p(92),
    height: px2p(92),
    backgroundColor: '#999',
    borderRadius: px2p(46),

  },
  name: {
    width: px2p(205),
    color: '#222',
    fontSize: px2p(12)
  },
  itemRight: {
    flex: 1,
    marginLeft: px2p(12),
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  price: {
    color: common.theme,
    fontSize: px2p(17),
    fontWeight: '900'
  },
  cancelBtn: {
    width: px2p(60),
    height: px2p(30),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: common.theme,
    justifyContent: 'center',
    borderRadius: px2p(3)
  },
  btnText: {
    color: common.theme,
    fontSize: px2p(13),
    textAlign: 'center',
    fontWeight: '500'
  }
})