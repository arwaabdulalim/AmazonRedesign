import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';

const ProductList = props => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    const response = await fetch('http://localhost:3000/productlist');
    const respJson = await response.json();
    setProductsList(respJson);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <Text>Product List Screen</Text>
      <FlatList
        data={productsList}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetails')}
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'lightgray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 70, width: 70}}
              source={{
                uri: 'https://picsum.photos/232',
              }}
            />
            <Text>{item.productName}</Text>
            <Text>{item.stock}</Text>
            <Text>Product Details</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ProductList;
