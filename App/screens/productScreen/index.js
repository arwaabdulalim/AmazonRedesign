import React from 'react';
import {SafeAreaView} from 'react-native';
import CartHeader from '../../components/CartHeader';
import WishList from '../../components/WishList';
import {useSelector, useDispatch} from 'react-redux';
import {handleClearList} from '../../redux/list';

const Product = props => {
  const dispatch = useDispatch();
  const {list} = useSelector(state => state);
  console.log('listItems', list);

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
      <WishList data={list.list} navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default Product;
