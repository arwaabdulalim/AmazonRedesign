import React from 'react';
import {SafeAreaView} from 'react-native';
import CartHeader from '../../components/CartHeader';
import CartList from '../../components/CartList';
import {useSelector, useDispatch} from 'react-redux';
import {
  handleAddToCart,
  handleClearCart,
  handlePlus,
  handleMins,
} from '../../redux/cart';

const Cart = props => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state);
  const {list} = useSelector(state => state.cart);

  const clearCartFunction = () => {
    dispatch(handleClearCart());
  };
  // handle incremant
  const addPlus = item => {
    dispatch(handlePlus(item));
  };
  const calculateTotal = () => {
    let total = 0;
    Object.values(list).forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // handle decrease
  const decreaseOne = value => {
    dispatch(handleMins(value));
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <CartHeader
        title="Your Cart"
        icon="trash"
        navigation={props.navigation}
        clearCartFunction={clearCartFunction}
      />
      <CartList
        data={cart.list}
        navigation={props.navigation}
        addPlus={addPlus}
        decreaseOne={decreaseOne}
        calculateTotal={calculateTotal}
      />
    </SafeAreaView>
  );
};

export default Cart;
