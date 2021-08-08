import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import categoryData from '../../assets/data/categorydata';
import styles from './style';
import MainTitle from '../../components/MainTitle';

const ProductList = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <MainTitle title="Categories" />
      <FlatList
        numColumns={2}
        data={categoryData}
        renderItem={({item, index}) => (
          <View style={styles.mainView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.flatView}>
              <Image style={styles.flatImage} source={item.image} />
            </TouchableOpacity>
            <Text style={styles.categoryText}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductList;
