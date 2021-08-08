import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import StyledButton from '../../components/CustomButton';
import ProductInfo from '../../components/productInfo';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import {handleAddToCart} from '../../redux/cart';
import {handleAddToList} from '../../redux/list';

const ProductDetails = props => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  // function to handle add to cart
  const addPressed = () => {
    dispatch(handleAddToCart(props.route.params.productDetails));
    setModalVisible(true);
  };

  const wishAdded = () => {
    dispatch(handleAddToList(props.route.params.productDetails));
  };
  return (
    <SafeAreaView>
      <ProductInfo
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={props.navigation}
        productDetails={props.route.params.productDetails}
      />
      <StyledButton
        navigation={props.navigation}
        buttonTitle="Add to cart"
        addToCart={addPressed}
        addToList={wishAdded}
      />
    </SafeAreaView>
  );
};

export default ProductDetails;
