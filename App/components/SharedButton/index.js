import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const SharedButton = props => {
  const {title, onPress} = props;
  return (
    <View>
      <View style={[styles.buttonsContainer]}>
        <View>
          <TouchableOpacity
            style={[styles.button, props.style]}
            onPress={onPress}>
            <Text style={[styles.Text, props.textStyle]}>{title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SharedButton;
