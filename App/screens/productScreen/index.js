import React from 'react';
import {SafeAreaView} from 'react-native';
import CartHeader from '../../components/CartHeader';
import WishList from '../../components/WishList';
import {useSelector, useDispatch} from 'react-redux';
import {handleClearList} from '../../redux/cart';

const Product = props => {
  const dispatch = useDispatch();
  const {list} = useSelector(state => state);
  console.log('listIems', list);

  const clearListFunction = () => {
    dispatch(handleClearList());
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <CartHeader
        title={'Your Wish List'}
        clearListFunction={clearListFunction}
        icon="trash"
        navigation={props.navigation}
      />
      <WishList data={list.list} />
    </SafeAreaView>
  );
};

export default Product;
