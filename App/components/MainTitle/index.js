import React from 'react';
import {Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const MainTitle = props => {
  const {title} = props;

  return (
    <View style={styles.categoryView}>
      <Text style={styles.category}>{title}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={25} color={'gray'} />
    </View>
  );
};

export default MainTitle;
