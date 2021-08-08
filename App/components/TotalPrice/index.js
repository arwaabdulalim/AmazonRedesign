import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import cartData from '../../assets/data/cartData';
import SharedButton from '../SharedButton';
import styles from './style';

const TotalPrice = props => {
  const {goods, goodsPrice, delivery, deliveryPrice, total, totalPrice, title} =
    props;
  return (
    <View>
      <View style={styles.totalView}>
        <View style={styles.totalContainer}>
          <Text style={styles.brand}>{goods}</Text>
          <Text style={styles.total}>{goodsPrice}</Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.brand}>{delivery}</Text>
          <Text style={styles.total}>{deliveryPrice}</Text>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.total}>{total}</Text>
        <Text style={styles.total}>{totalPrice}</Text>
      </View>
    </View>
  );
};

export default TotalPrice;
