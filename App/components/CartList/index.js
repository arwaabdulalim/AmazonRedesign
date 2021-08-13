import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import SharedButton from '../SharedButton';
import TotalPrice from '../TotalPrice';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';

const CartList = props => {
  const {addPlus, decreaseOne, calculateTotal} = props;
  const dispatch = useDispatch();
  const {list} = useSelector(state => state.cart);

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        keyExtractor={(item, index) => index}
        data={Object.values(list)}
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
              <TouchableOpacity onPress={() => decreaseOne(item)}>
                <Text style={{color: 'gray', fontSize: 20}}>-</Text>
              </TouchableOpacity>
              <Text>{item.quantity}</Text>
              <TouchableOpacity onPress={() => addPlus(item)}>
                <Text style={{color: 'gray', fontSize: 20}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {Object.values(list) && Object.values(list).length ? (
        <>
          <TotalPrice
            goods="Goods:"
            goodsPrice={calculateTotal()}
            delivery="Delivery:"
            deliveryPrice="$0.00"
            total="Total:"
            totalPrice={calculateTotal()}
          />
          <SharedButton
            onPress={() => props.navigation.navigate('PaymentMethod')}
            title="Check Out"
            style={{
              bottom: 50,
            }}
            textStyle={{
              fontSize: 20,
              color: 'white',
            }}
          />
        </>
      ) : null}
    </View>
  );
};

export default CartList;
