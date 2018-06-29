import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
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
    ],
    this.testData1 = [
      {
        title: '签到挖宝',
        subTitle: '每日签到 提升挖宝算力'
      },
      {
        title: '积分任务',
        subTitle: '做任务 领积分奖励'
      }
    ]
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <ImageBackground style={styles.headerTextBg}>
            <Text style={[styles.headerText, {fontSize: px2p(12), lineHeight: px2p(23), color: common.theme}]}>积分明细</Text>
          </ImageBackground>
          <Text style={[styles.headerText, {fontSize: px2p(42), marginTop: px2p(11), marginBottom: px2p(1), lineHeight: px2p(42)}]}>1000000</Text>
          <Text style={[styles.headerText, {fontSize: px2p(14)}]}>可用积分</Text>
        </View>
        <View style={{top: px2p(-10)}}>
          <View style={styles.mid}>
            <View style={[styles.midButton, { borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: '#eee'}]}><TouchableOpacity style={styles.convert}><Text style={styles.midBtnText}>娱乐宝兑换</Text></TouchableOpacity></View>
            <View style={styles.midButton}><TouchableOpacity style={styles.convert}><Text style={styles.midBtnText}>口令码兑换</Text></TouchableOpacity></View>
          </View>
          <View style={styles.main}>
            <View style={styles.mainTop}>
              {
                this.testData1.map(item => (
                  <View style={styles.mainTopItem} key={item.title}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                    <Image style={styles.mainTopItemImg}/>
                  </View>
                ))
              }
            </View>
            <View style={styles.mainContent}>
              {
                this.testData.map((item, index) => {
                  const midItemStyle = (index - 1) % 3 === 0
                    ? {marginLeft: px2p(1), marginRight: px2p(1)}
                    : {}
                  
                  return (
                    <View key={item.title} style={[styles.item, midItemStyle]}>
                      <Image style={styles.itemImg}/>
                      <View>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemSubTitle}>{item.subTitle}</Text>
                      </View>
                      {/* <Text style={styles.itemContent}>{item.content}</Text> */}
                    </View>
                  )
                })
              }
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  header: {
    height: px2p(225),
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    paddingBottom: px2p(42),
    alignItems: 'center'
  },
  headerText: {
    color: '#FFF6DA',
    fontWeight: '500',
    textAlign: 'center'
  },
  headerTextBg: {
    width: px2p(82),
    borderRadius: px2p(12),
    borderBottomLeftRadius: 0,
    backgroundColor: '#FFEBB5'
  },
  mid: {
    height: px2p(60),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: px2p(5),
    borderTopRightRadius: px2p(5),
    // top: px2p(-10)
  },
  midButton: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    height: px2p(45)
  },
  midBtnText: {
    fontSize: px2p(14),
    fontWeight: 'bold',
    color: common.theme,
    textAlign: 'center'
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
    flex: 1,
    marginTop: px2p(8),
  },
  mainTop: {
    flexDirection: 'row',
    // height: px2p(152),
    paddingTop: px2p(23),
    paddingBottom: px2p(17),
    backgroundColor: '#fff',
  },
  mainTopItem: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: '#222',
    fontSize: px2p(15),
    fontWeight: '900'
  },
  subTitle: {
    fontSize: px2p(10),
    fontWeight: '500',
    color: '#999',
    marginTop: px2p(12),
    marginBottom: px2p(17)
  },
  mainTopItemImg: {
    width: px2p(60),
    height: px2p(60),
    borderRadius: px2p(30),
    backgroundColor: 'gray'
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
    alignItems: 'stretch',
    marginTop: px2p(8)
  },
  item: {
    backgroundColor: '#fff',
    marginBottom: px2p(6),
    flexDirection: 'row',
    paddingTop: px2p(14),
    paddingBottom: px2p(14),
    alignItems: 'center'
  },
  itemImg: {
    width: px2p(47),
    height: px2p(47),
    backgroundColor: '#333',
    borderRadius: px2p(24),
    marginRight: px2p(15),
    marginLeft: px2p(15)
  },
  itemTitle: {
    fontWeight: '500',
    fontSize: px2p(14),
    color: '#222',
    marginTop: px2p(6),
    marginBottom: px2p(12),
    lineHeight: px2p(13)
  },
  itemSubTitle: {
    fontWeight: '500',
    color: '#999',
    fontSize: px2p(11),
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
    marginTop: px2p(30) // 设计稿是30，因为上面的mid和main整体向上偏移了10px，所以这里是20
  },
  btnText: {
    color: '#fff',
    fontSize: px2p(17),
    lineHeight: px2p(44),
    textAlign: 'center'
  }
})