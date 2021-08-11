import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import cartData from '../../assets/data/cartData';
import SharedButton from '../SharedButton';
import TotalPrice from '../TotalPrice';
import styles from './style';
import {useDispatch} from 'react-redux';
import {handleAddToCart, handleClearCart} from '../../redux/cart';

const CartList = props => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(0);
  const [datasource, setDatasource] = useState();
  const [goodsPrice, setGoodsPrice] = useState('');
  useEffect(() => {
    console.log(props.data);
    setDatasource(props.data);
  }, [props.data]);
  useEffect(() => {
    let price = 0;
    let string = '';
    console.log('datasource:', datasource);
    datasource &&
      datasource.forEach(element => {
        console.log('element', element);
        string = element.price.substring(1, element.price.length);
        price += parseFloat(string.replace(',', '')) * element.quantity;
      });
    setGoodsPrice(`$${price.toFixed(3)}`);
  }, [datasource]);
  // handle incremant
  const addPlus = value => {
    dispatch(handleClearCart());
    // let tempArray = datasource.map(item =>
    //   item.value === value.id ? {...item, quantity: value.quantity + 1} : item,
    // );
    let tempArray = datasource;
    tempArray.forEach(element => {
      if (element.id === value.id) {
        console.log('tempelement', element.quantity);
        element.quantity = value.quantity + 1;
      }
    });

    // tempArray.filter(filter => filter.id === value.id)[0].quantity =
    //   value.quantity + 1;
    console.log('temp', tempArray);
    // setDatasource(tempArray);
    dispatch(handleAddToCart({...tempArray}));
  };

  // handle decrease
  const decreaseOne = value => {
    dispatch(handleClearCart());
    const tempArray = datasource;
    tempArray.filter(filter => filter.id === value.id)[0].quantity =
      value.quantity - 1;
    // setDatasource(tempArray);
    dispatch(handleAddToCart({...tempArray}));
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
