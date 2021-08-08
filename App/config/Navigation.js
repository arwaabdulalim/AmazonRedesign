import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import Home from '../screens/homeScreen';
import Cart from '../screens/cartScreen';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import Payment from '../screens/paymentScreen';
import Account from '../screens/AccountScreen/index';

import LoginScreen from '../screens/loginScreen/index';
import SignUpScreen from '../screens/signUpScreen/index';
const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={'Home'}
          component={HomeTabNavigator}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={Payment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountDetails"
          component={Account}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
