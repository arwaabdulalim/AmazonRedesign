import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TextEntry = props => {
  const {
    fieldTitle,
    placeHolder,
    icon,
    onChangeText,
    onBlur,
    value,
    isPassword,
    isTouch,
    onTouchPress,
  } = props;
  return (
    <View>
      <View>
        <Text style={styles.fieldHeader}>{fieldTitle}</Text>
        <View style={styles.inputFieldView}>
          <TextInput
            placeholder={placeHolder}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            secureTextEntry={isPassword}></TextInput>
          <View style={styles.iconView}>
            {isTouch ? (
              <TouchableOpacity onPress={onTouchPress}>
                <MaterialCommunityIcons
                  name={icon}
                  size={20}
                  color={'#3c4d61'}
                />
              </TouchableOpacity>
            ) : (
              <MaterialCommunityIcons name={icon} size={20} color={'#3c4d61'} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default TextEntry;
