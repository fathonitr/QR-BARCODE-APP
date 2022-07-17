import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import colors from '../../../assets/colors/colors';

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const onForgotPasswordPressed = () => {
    console.warn(' forgot password ');
  };

  return (
    <View style={styles.root}>
      <Text
        style={[styles.header, { height: height * 1 }]}
        resizeMode="contain">
        Log into your account
      </Text>

      <CustomInput
        placeholder="Username / Email"
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Log In" onPress={() => navigation.navigate('Home')} />

      <CustomButton
        text="Forgot?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: colors.white,
  },
  header: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,

    top: 90,

    fontSize: 32,
    color: colors.black,
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: 30,
    marginTop: 20,
    marginRight: 40,
  },
  small: {
    top: 170,
    right: 70,

    fontSize: 14,
    margin: 0,
    padding: 0,

    fontFamily: 'Montserrat-Regular',
  },
});

export default LogInScreen;
