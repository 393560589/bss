import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { px2p } from '../../../utils'
import { common } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: px2p(16),
    paddingBottom: px2p(20),
    paddingLeft: px2p(17),
    paddingRight: px2p(17),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: common.fff,
    marginTop: px2p(8),
    marginBottom: px2p(8)
  },
  entry: {
    alignItems: 'center'
  },
  image: {
    width: px2p(30),
    height: px2p(30),
    marginBottom: px2p(13),
  },
  tag: {
    width: px2p(28),
    height: px2p(16),
    position: 'absolute',
    right: px2p(-14),
    top: px2p(-8)
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: common.gary_6,
    fontSize: px2p(12)
  }
})

export default function Entries(props) {
  return (
    <View style={[styles.container, props.style]}>
      {
        props.data.map(entry => (
          <View style={styles.entry} key={entry.name}>
            <View>
              <Image style={styles.image} source={entry.image} resizeMode='contain'/>
              <Image style={styles.tag} source={entry.tag} resizeMode='contain'/>
            </View>
            <Text style={styles.text}>{entry.name}</Text>
          </View>
        ))
      }
    </View>
  )
}