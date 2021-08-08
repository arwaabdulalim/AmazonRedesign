import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import cartData from '../../assets/data/cartData';
import SharedButton from '../SharedButton';
import TotalPrice from '../TotalPrice';
import styles from './style';

const CartList = props => {
  const [items, setItems] = useState(0);

  // handle incremant
  const addPlus = () => {
    setItems(items + 1);
  };

  // handle decrease
  const decreaseOne = () => {
    if (items != 0) {
      setItems(items - 1);
    }
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        keyExtractor={(item, index) => index}
        data={props.data}
        renderItem={({item, index}) => (
          <View style={styles.mainView}>
            <TouchableOpacity onPress={() => {}} style={styles.flatView}>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.flatImage} source={item.image} />
              </View>
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.type}>
                {' '}
                <Text style={styles.brand}>{item.brand} </Text>
                {item.productName}
              </Text>
              <Text style={styles.price}> {item.price}</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity onPress={decreaseOne}>
                <Text style={{color: 'gray', fontSize: 20}}>-</Text>
              </TouchableOpacity>
              <Text>{items}</Text>
              <TouchableOpacity onPress={addPlus}>
                <Text style={{color: 'gray', fontSize: 20}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TotalPrice
        goods="Goods:"
        goodsPrice="$11,722.4"
        delivery="Delivery:"
        deliveryPrice="$0.00"
        total="Total:"
        totalPrice="$11,722.4"
      />
      <SharedButton
        onPress={() => props.navigation.navigate('PaymentMethod')}
        title="Check Out"
        style={{
          top: 100,
        }}
        textStyle={{
          fontSize: 20,
          color: 'white',
        }}
      />
    </View>
  );
};

export default CartList;
