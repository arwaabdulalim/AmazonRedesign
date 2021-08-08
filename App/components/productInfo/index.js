import React from 'react';
import {Text, View, Image, Modal, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import GeneralStarExample from '../Rating/Rating';
import ModalComponent from '../Modal';

const ProductInfo = props => {
  const {productDetails, modalVisible, setModalVisible} = props;
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <ModalComponent
          setModalVisible={setModalVisible}
          navigation={props.navigation}
          image={require('../../assets/Images/undrawAddToCartVkjp.png')}
          text="Item was successfully                  added to cart"
          lastLine="Check Out"
        />
      </Modal>
      <View style={styles.mainView}>
        <MaterialIcons name="arrow-back-ios" size={30} color={'gray'} />
        <Image
          style={styles.image}
          source={productDetails.image}
          resizeMode="contain"
        />
        <MaterialIcons name="arrow-forward-ios" size={30} color={'gray'} />
      </View>
      <View style={styles.infoView}>
        <View style={styles.ratingView}>
          <GeneralStarExample />
          <Text
            style={
              styles.ratingText
            }>{` (${productDetails.numberOfRates})`}</Text>
        </View>
        <View>
          <Text style={styles.category}>
            <Text style={styles.brand}>{productDetails.brand} </Text>
            {` ${productDetails.productName}`}
          </Text>
          <Text style={styles.price}>{productDetails.price}</Text>
          <Text style={styles.details}>{productDetails.desc}</Text>
          <View style={styles.downArrow}>
            <MaterialIcons name="keyboard-arrow-down" size={30} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;
