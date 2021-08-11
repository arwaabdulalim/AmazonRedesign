import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import cartData from '../../assets/data/cartData';
import SharedButton from '../SharedButton';
import TotalPrice from '../TotalPrice';
import styles from './style';

const CartList = props => {
  const [items, setItems] = useState(0);
  const [datasource, setDatasource] = useState();
  const [goodsPrice, setGoodsPrice] = useState('');
  useEffect(() => {
    setDatasource(props.data);
  }, [props.data]);
  useEffect(() => {
    let price = 0;
    let string = '';
    datasource &&
      datasource.forEach(element => {
        string = element.price.substring(1, element.price.length);
        price += parseFloat(string.replace(',', ''));
      });
    setGoodsPrice(`$${price.toFixed(3)}`);
  }, [datasource]);
  // handle incremant
  const addPlus = value => {
    setDatasource(prevState => {
      return [...prevState, value];
    });
  };

  // handle decrease
  const decreaseOne = value => {
    console.log(
      datasource.slice(
        0,
        datasource.filter(filter => filter === value).length - 1,
      ),
    );
    setDatasource(
      datasource.slice(
        0,
        datasource.filter(filter => filter === value).length - 1,
      ),
    );
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        keyExtractor={(item, index) => index}
        // Get a unique values from the data array
        data={
          datasource &&
          datasource.filter(
            (value, index, array) => array.indexOf(value) === index,
          )
        }
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
              <Text>
                {datasource.filter(filter => filter.id === item.id).length}
              </Text>
              <TouchableOpacity onPress={() => addPlus(item)}>
                <Text style={{color: 'gray', fontSize: 20}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {datasource && datasource.length ? (
        <>
          <TotalPrice
            goods="Goods:"
            goodsPrice={goodsPrice}
            delivery="Delivery:"
            deliveryPrice="$0.00"
            total="Total:"
            totalPrice={goodsPrice}
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
