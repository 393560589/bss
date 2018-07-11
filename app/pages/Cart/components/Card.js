import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'

export default class Card extends PureComponent {
  render() {
    return (
      <View>
        <View style={styles.header}>
          {
            
          }
        </View>
        <View style={styles.main}>
          <FlatList
            data={pGoods}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </View>
    )
  }
}