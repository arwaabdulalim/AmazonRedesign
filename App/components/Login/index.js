import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import TextEntry from '../TextInput';
import SharedButton from '../SharedButton/index';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6).required('Password is required'),
});

const Login = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);
  const [isPassword, setIsPassword] = useState(true);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>

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
      <SharedButton
        onPress={handleSubmit(onSubmit)}
        title="Login"
        style={{
          bottom: 85,
        }}
        textStyle={{
          fontSize: 22,
          color: 'white',
        }}
      />
    </View>
  );
};

export default Login;
