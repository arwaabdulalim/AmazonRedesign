import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import SignUp from '../../components/SignUp';

const SignUpScreen = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SignUp navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default SignUpScreen;
