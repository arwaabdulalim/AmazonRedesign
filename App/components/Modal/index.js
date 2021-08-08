import React from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import SharedButton from '../SharedButton';
import styles from './style';
const {width, height} = Dimensions.get('window');

const ModalComponent = props => {
  const {image, text, lastLine} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.modalView}>
        <View style={styles.modalContainer}>
          <Image style={styles.modalImage} source={image} />

          <Text style={styles.success}>Success!</Text>
          <Text style={styles.modalText}>{text} </Text>
          <View>
            <SharedButton
              title="Continue Shopping"
              onPress={() => {
                props.setModalVisible(false);
                props.navigation.navigate('Home');
              }}
              style={{
                borderRadius: 22,
                height: (height * 5.5) / 100,
                width: (width * 55) / 100,
                bottom: 100,
              }}
              textStyle={{
                fontSize: 18,
                color: 'white',
              }}
            />
          </View>
          <View style={styles.lastLine}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('PaymentMethod')}>
              <Text style={[styles.modalText, {fontSize: 20}]}>{lastLine}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModalComponent;
