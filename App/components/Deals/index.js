import React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import MainTitle from '../MainTitle';
import dealsData from '../../assets/data/dealsData';
import GeneralStarExample from '../Rating/Rating';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Deals = props => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <MainTitle title="Deals of the Day" />
      <FlatList
        numColumns={2}
        data={dealsData}
        renderItem={({item, index}) => (
          <View style={styles.mainView}>
            <TouchableOpacity
              style={styles.flatView}
              onPress={() =>
                props.navigation.navigate('ProductDetails', {
                  productDetails: item,
                })
              }>
              <View style={styles.imageContainer}>
                <View style={{position: 'absolute', top: 1, right: 10}}>
                  <MaterialIcons
                    name={item.icon}
                    size={25}
                    color={item.color}
                  />
                </View>
                <Image style={styles.flatImage} source={item.image} />
              </View>
              <View style={styles.textView}>
                <View style={styles.stars}>
                  <GeneralStarExample />
                </View>
                <Text style={styles.type}>{item.productName}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Deals;
