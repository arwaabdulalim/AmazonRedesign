import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import categoryData from '../../assets/data/categorydata';
import MainTitle from '../MainTitle';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

const Category = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.inputFieldView}>
        <TextInput
          style={styles.InputField}
          placeholder="What are you looking for?"></TextInput>
        <Fontisto name="search" size={23} style={styles.searchIcon} />
        <Feather name="camera" size={25} style={styles.cameraIcon} />
      </View>
      <MainTitle title="Category" />
      <FlatList
        nestedScrollEnabled
        numColumns={2}
        data={categoryData}
        renderItem={({item, index}) => (
          <View style={styles.mainView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductList')}
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

export default Category;
