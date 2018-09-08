import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { px2p } from '../../utils';
import { NoticeBar } from 'antd-mobile-rn';
import CartItem from './components/CartItem';
import { connect } from '../../utils/dva';

const headerRightStyle = StyleSheet.create({
  container: {
    paddingRight: px2p(10)
  },
  text: {
    padding: px2p(5)
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class CartItemWrapper extends React.PureComponent {
  
}

const BUTTON_STATUS_EDIT = 1
const BUTTON_STATUS_SAVE = 2

@connect(({cart}) => ({goods: cart.goods}))
export default class Cart extends React.PureComponent {
  constructor(props) {
    super(props)
    // this.state
  }

  static navigationOptions = ({ navigation }) => {
    const buttonStatus = navigation.getParam('buttonStatus', BUTTON_STATUS_EDIT)
    function headerRight() {
      const onPress = () => {
        buttonStatus ===  BUTTON_STATUS_EDIT
          ? navigation.setParams({buttonStatus: BUTTON_STATUS_SAVE})
          : navigation.setParams({buttonStatus: BUTTON_STATUS_EDIT})
      }
      const buttonText = buttonStatus === BUTTON_STATUS_EDIT
        ? '编辑'
        : '保存'
      return (
        <TouchableOpacity 
          onPress={onPress}
          style={headerRightStyle.container}>
          <Text style={headerRightStyle.text}>{buttonText}</Text>
        </TouchableOpacity>
      )
    }
    return {
      headerStyle: {
        borderBottomWidth: 1
      },
      headerRight: headerRight()
    }
  }

  _keyExtractor = item => item.id.toString()

  // toggleAll = (type) => {

  // }

  _renderItem = ({item}) => (
    <CartItem item={item} dispatch={this.props.dispatch}/>
  )

  render() {
    const { goods } = this.props
    const pGoods = goods.filter(good => good.type === 1) // 平价好货
    const jGoods = goods.filter(good => good.type === 2) // 商品精选
    return (
      <ScrollView>
        <NoticeBar mode='closable'>
          天黑请闭眼
        </NoticeBar>
        <FlatList
          data={pGoods}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
        <FlatList
          data={jGoods}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </ScrollView>
    )
  }
}