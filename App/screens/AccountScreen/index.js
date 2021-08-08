import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import User from '../../components/UserAccount';

const Account = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imagesContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/Images/zWsuZmvm2Ie.png')}
          />
          <View>
            <Text style={styles.text}>Alexandr Homyakov</Text>
            <Text style={[styles.text, {fontSize: 14}]}>
              Stenjei123@gmail.com
            </Text>
          </View>
          <MaterialCommunityIcons
            name="pencil"
            size={25}
            color={'white'}
            style={styles.profileImage}
          />
        </View>
      </View>
      <User
        firstIcon="shopping-outline"
        firstText="Your Orders"
        secondIcon="history"
        secondText="Purchase History"
        thirdIcon="text-box-outline"
        thirdText="Product Lists"
      />
      <User
        firstIcon="comment-outline"
        firstText="Reviews"
        secondIcon="bell-outline"
        secondText="Notifications"
        thirdIcon="account-multiple-outline"
        thirdText="Friends & Subcribes"
      />

      <User
        firstIcon="near-me"
        firstText="Delivery Addresses"
        secondIcon="credit-card-outline"
        secondText="Your Wallets"
        thirdIcon="cog-outline"
        thirdText="Settings"
      />
    </SafeAreaView>
  );
};

export default Account;
