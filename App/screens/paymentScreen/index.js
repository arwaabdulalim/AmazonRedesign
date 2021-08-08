import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CartHeader from '../../components/CartHeader';
import PaymentMethod from '../../components/PaymentMethod';
import SharedButton from '../../components/SharedButton';

const Payment = props => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <CartHeader
        title={'Check Out'}
        icon="plus"
        navigation={props.navigation}
      />
      <PaymentMethod navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default Payment;
