import React from 'react';
import {TextInput, View, Image, SafeAreaView} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';

const Header = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imagesView}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/Images/amazonPng11.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.loaderIcon}
          source={require('../../assets/Images/httpsAssetsIftttComImagesChannels117272667.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;
