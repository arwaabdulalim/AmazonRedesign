import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from '../../components/Login';

const LoginScreen = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Login navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default LoginScreen;
