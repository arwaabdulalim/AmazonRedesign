import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

const StyledButton = ({navigation, buttonTitle, addToCart, addToList}) => {
  return (
    <View>
      <View style={styles.buttonsContainer}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <AntDesign name="arrowleft" size={30} color={'gray'} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={addToCart}>
            <Text style={styles.text}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={addToList}>
            <MaterialCommunityIcons name="playlist-plus" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StyledButton;
