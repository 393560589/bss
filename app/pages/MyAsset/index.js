import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { px2p } from '../../utils'
import MyAssetList from './components/List'

export default class MyAsset extends Component {
  constructor() {
    super()
    this.testData = [
      {
        name: '邀请好友',
      },
      {
        name: '邀请好友',
      },
      {
        name: '邀请好友',
      }
    ]
    this.testData1 = [
      {
        name: '积分夺宝',
      },
      {
        name: '积分夺宝',
      },
      {
        name: '积分夺宝',
      }
      ,      {
        name: '积分夺宝',
      }
    ]
  }
  render() {
    return (
      <ScrollView style={{paddingBottom: px2p(14)}}>
        <View style={styles.header}>
          <View style={[styles.headerLeft, styles.headerItem]}>
            <Text style={[styles.headerText, {fontSize: px2p(24)}]}>100000</Text>
            <Text style={[styles.headerText, {fontSize: px2p(12)}]}>我的积分</Text>
          </View>
          <View style={[styles.headerItem]}>
            <Text style={[styles.headerText, {fontSize: px2p(24)}]}>1209381098</Text>
            <Text style={[styles.headerText, {fontSize: px2p(12)}]}>我的娱乐宝</Text>
          </View>
        </View>
        <MyAssetList
          title={'娱乐宝获取'}
          items={this.testData}/>
        <MyAssetList
          title={'积分获取'}
          items={this.testData1}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: px2p(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: px2p(6)
  },
  headerLeft: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#eee'
  },
  headerRight: {

  },
  headerItem: {
    flex: 1,
    height: px2p(45),
    justifyContent: 'space-between'
  },
  headerText: {
    color: '#FFF6DA',
    textAlign: 'center',
    fontWeight: '500'
  }
})