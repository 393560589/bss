import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { px2p } from '../../utils'
import { common } from '../../styles'


export default class MyYlb extends Component {
  constructor() {
    super()
    this.testData = [
      {
        title: '邀请好友',
        subTitle: '邀请好友注册',
        content: '领取娱乐宝奖励'
      },
      {
        title: '购买商品',
        subTitle: '购买商品',
        content: '获取抽取娱乐宝机会'
      },
      {
        title: '活动任务',
        subTitle: '完成活动任务',
        content: '赢取娱乐宝奖励'
      }
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerText, {fontSize: px2p(14), marginBottom: px2p(12)}]}>我的娱乐宝余额</Text>
          <Text style={[styles.headerText, {fontSize: px2p(42)}]}>1000000</Text>
        </View>
        <View style={styles.mid}>
          <View style={{flex: 1, borderRightWidth: 1, justifyContent: 'center',borderRightColor: '#eee', height: px2p(45)}}><TouchableOpacity style={styles.detail}><Text style={{fontSize: px2p(12), color: '#999', textAlign: 'center'}}>兑换明细</Text></TouchableOpacity></View>
          <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', height: px2p(45)}}><TouchableOpacity style={styles.convert}><Text style={{fontSize: px2p(14), fontWeight: 'bold', color: common.theme, textAlign: 'center'}}>兑换积分</Text></TouchableOpacity></View>
        </View>
        <View style={styles.main}>
          <Text style={styles.mainTitle}>娱乐宝获取</Text>
          <View style={styles.mainContent}>
            {
              this.testData.map((item, index) => {
                const midItemStyle = (index - 1) % 3 === 0
                  ? {marginLeft: px2p(1), marginRight: px2p(1)}
                  : {}
                
                return (
                  <View key={item.title} style={[styles.item, midItemStyle]}>
                    <Image style={styles.itemImg}/>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemSubTitle}>{item.subTitle}</Text>
                    <Text style={styles.itemContent}>{item.content}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
        <TouchableOpacity style={styles.button}><Text style={styles.btnText}>转让娱乐宝</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  header: {
    height: px2p(160),
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  headerText: {
    color: '#FFF6DA',
    fontWeight: '500',
    textAlign: 'center'
  },
  mid: {
    height: px2p(60),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: px2p(5),
    borderTopRightRadius: px2p(5),
    top: px2p(-10)
  },
  detail: {
    padding: px2p(5)
    // flex: 1
  },
  convert: {
    // flex: 1,
    width: px2p(90),
    height: px2p(26),
    borderWidth: 1,
    borderColor: common.theme,
    borderRadius: px2p(13),
    justifyContent: 'center'
  },
  main: {
    marginTop: px2p(6),
    top: px2p(-10)
  },
  mainTitle: {
    color: '#222',
    fontSize: px2p(14),
    textAlign: 'center',
    lineHeight: px2p(40),
    backgroundColor: '#fff',
    marginBottom: StyleSheet.hairlineWidth
  },
  mainContent: {
    flexDirection: 'row',
  },
  item: {
    width: px2p(124),
    height: px2p(170),
    // justifyContent: 'space-between',
    // paddingTop: px2p(19),
    // paddingBottom: px2p(24),
    // marginBottom: px2p(2),
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  itemImg: {
    width: px2p(124),
    height: px2p(95),
    backgroundColor: '#333'
  },
  itemTitle: {
    fontWeight: '900',
    fontSize: px2p(15),
    color: '#222',
    marginTop: px2p(7),
    marginBottom: px2p(10)
  },
  itemSubTitle: {
    fontWeight: '500',
    color: '#999',
    fontSize: px2p(10),
    marginBottom: px2p(5)
  },
  itemContent: {
    fontWeight: '500',
    color: '#999',
    fontSize: px2p(10)
  },
  button: {
    width: px2p(355),
    backgroundColor: common.theme,
    borderRadius: px2p(4),
    alignSelf: 'center',
    marginTop: px2p(20) // 设计稿是30，因为上面的mid和main整体向上偏移了10px，所以这里是20
  },
  btnText: {
    color: '#fff',
    fontSize: px2p(17),
    lineHeight: px2p(44),
    textAlign: 'center'
  }
})