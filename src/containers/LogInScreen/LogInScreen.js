import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import colors from '../../../assets/colors/colors';
import * as Keychain from 'react-native-keychain';

const LogInScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('TestUser');
  const [password, setPassword] = useState('Test123!');

  useEffect(() => {
    (async () => {
      // const credentialUsername = username;
      // const credentialPassword = password;

      // await Keychain.setGenericPassword(credentialUsername, credentialPassword);

      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          setUserDetails(credentials);
          setIsLoggedIn(true);
          console.log(
            'Credentials successfully loaded for ' + credentials.username,
          );
        } else {
          console.log('No credentials stored');
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
      // await Keychain.resetGenericPassword();
    })();
  });

  const { height } = useWindowDimensions();

  const onSignInPressed = async () => {
    await Keychain.setGenericPassword(username, password);
    setIsLoggedIn(true);
    setUserDetails({ username, password });
    navigation.navigate('Home');
    console.warn(' log in pressed ');
  };
  const onLogoutPressed = async () => {
    const logout = await Keychain.resetGenericPassword();
    if (logout) {
      setIsLoggedIn(false);
      setUserDetails({});
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn(' forgot password ');
  };

  return (
    <View>
      {!isLoggedIn ? (
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

          <CustomButton text="Log In" onPress={onSignInPressed} />

          <CustomButton
            text="Forgot?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />
        </View>
      ) : (
        // <Home />
        <View style={styles.root}>
          <Text
            style={[styles.header, { height: height * 1 }]}
            resizeMode="contain">
            Welcome Back
          </Text>
          <CustomButton
            text="Home"
            onPress={() => navigation.navigate('Home')}
          />
          <CustomButton text="Log out" onPress={onLogoutPressed} />
        </View>
      )}
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
