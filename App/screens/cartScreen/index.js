import React from 'react';
import {SafeAreaView} from 'react-native';
import CartHeader from '../../components/CartHeader';
import CartList from '../../components/CartList';
import {useSelector, useDispatch} from 'react-redux';
import {handleClearCart} from '../../redux/cart';
import ModalComponent from '../../components/Modal';

const Cart = props => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state);
  console.log('cartITEMMSSS', cart);

  const clearCartFunction = () => {
    dispatch(handleClearCart());
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <CartHeader
        title="Your Cart"
        icon="trash"
        navigation={props.navigation}
      />
      <CartList navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default Cart;
