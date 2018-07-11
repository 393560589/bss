import React, { pureComponent } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import { connect } from '../../../utils/dva';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

function CartItem({ item, dispatch }) {
  const { type, price} = item
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          {
            item.isChecked
              ? <Image style={styles.checkImg}/>
              : <View style={styles.circleEmpty}></View>
          }
        </TouchableOpacity>
        <View style={styles.goodInfo}>
          <Image style={styles.goodImg}/>
          <View>
            <Text>{item.name}</Text>
            <View>
              <Text>{item.price}</Text>
              <View>
                
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

// export default connect(({cart}) => ({...cart}))(CartItem)
export default CartItem