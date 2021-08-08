import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';

import styles from './style';

const CartHeader = props => {
  const {title, icon} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <AntDesign name="arrowleft" size={30} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={props.clearCartFunction}>
        <Foundation name={icon} size={30} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default CartHeader;
