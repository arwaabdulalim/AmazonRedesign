import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/homeScreen';
import Cart from '../screens/cartScreen';
import Product from '../screens/productScreen/index';
import Payment from '../screens/paymentScreen';
import Account from '../screens/AccountScreen';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f69B32',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name="home" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'List'}
        component={Product}
        options={{
          showLabel: false,
          tabBarIcon: ({color}) => (
            <Entypo name="text-document" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Cart'}
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="cart-outline" size={25} color={color} />
          ),
          tabBarOptions: {showLabel: false},
        }}
      />
      <Tab.Screen
        name={'Account'}
        component={Account}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person-outline" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigator;
