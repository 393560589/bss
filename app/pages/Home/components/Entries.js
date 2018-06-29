import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { px2p } from '../../../utils'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: px2p(16),
    paddingBottom: px2p(20),
    paddingLeft: px2p(17),
    paddingRight: px2p(17),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  entry: {
    alignItems: 'center'
  },
  image: {
    width: px2p(30),
    height: px2p(30),
    marginBottom: px2p(13),
    backgroundColor: 'gray'
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#666',
    fontSize: px2p(12)
  }
})

export default function Entries(props) {
  return (
    <View style={styles.container}>
      {
        props.data.map(entry => (
          <View style={styles.entry} key={entry.name}>
            <Image style={styles.image}/>
            <Text style={styles.text}>{entry.name}</Text>
          </View>
        ))
      }
    </View>
  )
}