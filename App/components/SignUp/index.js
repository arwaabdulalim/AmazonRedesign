import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import TextEntry from '../TextInput';
import SharedButton from '../SharedButton/index';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  area: yup.string().required('Area is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6).required('Password is required'),
});

const SignUp = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    console.log(data);
    //props.navigation.navigate('Account');
  };
  const [isPassword, setIsPassword] = useState(true);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.login}>
            Already a member?{' '}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('LoginScreen')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextEntry
            fieldTitle="Full Name"
            placeHolder="Ex: Victor Miguel Cardero"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullName"
        defaultValue={undefined}
      />
      {errors.fullName && (
        <Text style={styles.errorMessage}>Full Name is required.</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextEntry
            fieldTitle="Area"
            placeHolder="Select an area"
            icon="chevron-down"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="area"
        defaultValue={undefined}
      />
      {errors.area && (
        <Text style={styles.errorMessage}>Area is required.</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextEntry
            fieldTitle="Email"
            placeHolder="Ex: user@domain.com"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        defaultValue={undefined}
      />
      {errors.email && (
        <Text style={styles.errorMessage}>Email is required.</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextEntry
            fieldTitle="Password"
            placeHolder="Password"
            icon={isPassword ? 'eye-off-outline' : 'eye-outline'}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            isPassword={isPassword}
            isTouch={true}
            onTouchPress={() => {
              setIsPassword(!isPassword);
            }}
          />
        )}
        name="password"
        defaultValue={undefined}
      />
      {errors.password && (
        <Text style={styles.errorMessage}>Password is required.</Text>
      )}
      <View style={styles.termsView}>
        <View style={styles.boxView}>
          <View style={styles.checkBox} />
        </View>
        <Text>I accept the Terms of Use.</Text>

        <SharedButton
          onPress={handleSubmit(onSubmit)}
          title="Register"
          style={{
            bottom: 85,
            right: 35,
          }}
          textStyle={{
            fontSize: 22,
            color: 'white',
          }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>
          By Continuing, you agree to accept our Privacy Policy & Terms of
          Service.
        </Text>
        <View style={styles.continueView}>
          <View style={styles.lineView} />
          <Text style={styles.continueText}>or continue with</Text>
          <View style={styles.lineView} />
        </View>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../assets/Images/signInGoogle.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/Images/signInApple.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/Images/signInFacebook.png')}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;
