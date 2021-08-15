import React from 'react';
import {
  TextInput,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';

const Header = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imagesView}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/Images/amazonPng11.png')}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <View>
            <Image
              style={styles.loaderIcon}
              source={require('../../assets/Images/httpsAssetsIftttComImagesChannels117272667.png')}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
