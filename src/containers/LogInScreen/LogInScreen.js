import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import colors from '../../../assets/colors/colors';
import * as Keychain from 'react-native-keychain';
import { useStore } from '../../utils/states';

const LogInScreen = ({ navigation }) => {
  const logedInStatus = useStore(state => state.logedIn);
  const setLogedInStatus = useStore(state => state.setLogedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('TestUser');
  const [password, setPassword] = useState('Test123!');

  const login = async () => {
    const credentialUsername = 'TestUser';
    const credentialPassword = 'Test123!';

    await Keychain.setGenericPassword(credentialUsername, credentialPassword);
    try {
      const credentials = await Keychain.getGenericPassword();
      if (
        credentials.username === username &&
        credentials.password === password
      ) {
        setLogedInStatus(true);
        console.log(
          'Credentials successfully loaded for ' + credentials.username,
        );
        navigation.navigate('Home');
      } else {
        Alert.alert('Wrong Username or Password');
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
    // await Keychain.resetGenericPassword();
  };

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    //async
    login();
    console.log(' log in pressed ');
  };
  const onLogoutPressed = async () => {
    const logout = await Keychain.resetGenericPassword();
    if (logout) {
      setLogedInStatus(false);
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn(' forgot password ');
  };
  if (!logedInStatus) {
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

        <CustomButton text="Log In" onPress={login} />

        <CustomButton
          text="Forgot?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.root}>
        <Text
          style={[styles.header, { height: height * 1 }]}
          resizeMode="contain">
          Welcome Back
        </Text>
        <CustomButton text="Home" onPress={() => navigation.navigate('Home')} />
        <CustomButton text="Log out" onPress={onLogoutPressed} />
      </View>
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
