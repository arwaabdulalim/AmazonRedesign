import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const User = props => {
  const {firstText, firstIcon, secondText, secondIcon, thirdText, thirdIcon} =
    props;
  return (
    <View>
      <View style={styles.mainView}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={firstIcon}
            size={30}
            color={'#3c4d61'}
          />
          <Text style={styles.text}>{firstText}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.container}>
          <MaterialCommunityIcons
            name={secondIcon}
            size={30}
            color={'#3c4d61'}
          />
          <Text style={styles.text}>{secondText}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.container}>
          <MaterialCommunityIcons
            name={thirdIcon}
            size={30}
            color={'#3c4d61'}
          />
          <Text style={styles.text}>{thirdText}</Text>
        </View>
      </View>
    </View>
  );
};

export default User;
