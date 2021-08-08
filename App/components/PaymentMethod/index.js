import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image, Alert, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TotalPrice from '../TotalPrice';
import SharedButton from '../SharedButton';

import styles from './style';
import ModalComponent from '../Modal';

const PaymentMethod = props => {
  const {isTouch, onTouchPress} = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ModalComponent
          setModalVisible={setModalVisible}
          navigation={props.navigation}
          image={require('../../assets/Images/undrawMobilePaymentsEdgf.png')}
          text="Your order has been successfully paid. It can be tracked in the Order section."
          lastLine="Go to Orders"
        />
      </Modal>
      <View style={styles.deliveryView}>
        <MaterialIcons name="my-location" size={30} color={'#3c4d61'} />
        <Text style={styles.deliveryText}>Delivery Address*</Text>
      </View>
      <View style={styles.addressView}>
        <Text style={styles.address}>
          Borovaya 4-15, St. Petersburg, Russia
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="record-circle"
            size={30}
            color="orange"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.addressView}>
        <Text style={styles.address}>Pushkina 34-20, Moscow, Russia </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="record-circle-outline" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.deliveryView}>
        <MaterialIcons name="credit-card" size={30} color={'#3c4d61'} />
        <Text style={styles.deliveryText}>Payment Method*</Text>
      </View>
      <View style={styles.cardContainer}>
        <Image
          style={styles.card}
          source={require('../../assets/Images/credit.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SharedButton
          onPress={() => setModalVisible(true)}
          title="Pay"
          textStyle={{
            fontSize: 20,
            color: 'white',
          }}
        />
      </View>
      <TotalPrice
        goods="Goods:"
        goodsPrice="January, 01, 2020"
        delivery="Delivery:"
        deliveryPrice="$0.00"
        total="Total:"
        totalPrice="$11,722.4"
      />
    </View>
  );
};

export default PaymentMethod;
