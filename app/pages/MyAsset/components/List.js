import React, { component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { px2p } from '../../../utils'


// export default class AssetList extends component {

// }

export default function AssetList(props) {
  return (
    <View style={{marginBottom: px2p(8)}}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.main}>
        {
          props.items.map((item, index) => {
            const midItemStyle = (index - 1) % 3 === 0
              ? {
                  marginLeft: px2p(1),
                  marginRight: px2p(1)
                }
              : {}
            return (
              <View style={[styles.item, midItemStyle]}>
                <Image style={styles.item_img}/>
                <Text style={styles.item_name}>{item.name}</Text>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: px2p(14),
    color: '#222222',
    lineHeight: px2p(40),
    backgroundColor: '#fff'
  },
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: px2p(124),
    height: px2p(135),
    justifyContent: 'space-between',
    paddingTop: px2p(19),
    paddingBottom: px2p(24),
    marginBottom: px2p(2),
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  item_img: {
    width: px2p(85),
    height: px2p(63),
    marginBottom: px2p(15)
  },
  item_name: {
    color: '#222',
    fontSize: px2p(15),
    fontWeight: '900'
  }
})