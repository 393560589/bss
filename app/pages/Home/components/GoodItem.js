import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Accordion from './Accordion';
import { Button } from 'antd-mobile-rn'
import { px2p } from '../../../utils';
import { common } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: px2p(10),
    paddingRight: px2p(10),
    paddingBottom: px2p(10),
    marginBottom: px2p(6)
  },
  goodImage: {
    backgroundColor: '#999',
    height: px2p(175)
  },
  activityImage: {
    position: 'absolute',
    top: px2p(17),
    left: px2p(25),
    backgroundColor: 'red',
    width: px2p(33),
    height: px2p(33)
  },
  goodName: {
    marginTop: px2p(14),
    marginBottom: px2p(15),
    fontWeight: '500',
    fontSize: px2p(13),
    color: '#111',
    width: px2p(300)
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  goodPrice: {
    color: common.theme,
    fontSize: px2p(17),
    fontWeight: '700',
    marginRight: px2p(20)
  },
  goodAmount: {
    color: '#999',
    fontSize: px2p(11)
  },
  button: {
    height: px2p(32),
    backgroundColor: common.theme,
    borderWidth: 0,
    paddingLeft: px2p(25),
    paddingRight: px2p(25),
    marginLeft: px2p(15)
  },
  btnText: {
    color: '#fff'
  },
  users: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    width: px2p(24),
    height: px2p(24),
    borderRadius: px2p(12),
    backgroundColor: 'blue'
  }
})

export default function({ item }) {
  const testData = [
    {
      key: 1,
      style: {
        backgroundColor: 'red'
      }
    },
    {
      key: 2
    },
    {
      key: 3,
      style: {
        backgroundColor: 'green'
      }
    }
  ]
  return (
    <View style={styles.container}>
      <Image style={styles.goodImage}/>
      <Image style={styles.activityImage}/>
      <Text style={styles.goodName}>{item.name}</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomItem}>
          <Text style={styles.goodPrice}>¥{item.price}</Text>
          <Text style={styles.goodAmount}>已售{item.sold}</Text>
        </View>
        <View style={styles.bottomItem}>
          {/* <View style={styles.users}>
            <Image style={styles.user}/>
          </View> */}
          <Accordion data={testData}/>
          <Button style={[styles.button, styles.bottomItem]}><Text style={styles.btnText}>去购买</Text></Button>
        </View>
      </View>
    </View>
  )
}