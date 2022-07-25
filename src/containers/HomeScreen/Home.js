import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { useStore } from '../../utils/states';
import AddButton from '../../components/AddButton';
import MeterEntry from '../../components/MeterEntry';
import CustomButton from '../../components/CustomButton';

function Home({ navigation }) {
  const setLogedInStatus = useStore(state => state.setLogedIn);

  const onLogoutPressed = async () => {
    const logout = await Keychain.resetGenericPassword();
    if (logout) {
      setLogedInStatus(false);
      console.log('loged out');
      navigation.navigate('LogInScreen');
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomButton text="Log Out" onPress={onLogoutPressed} />
      <Text style={styles.headerText}>Dashboard</Text>
      <Text style={styles.text}>Registered Meter</Text>

      <MeterEntry meter="2VBF0068273189" />

      <AddButton onPress={() => navigation.navigate('MeterType')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA',
    borderColor: '#FAFAFA',
    flex: 1,
  },
  contentWrapper: {
    alignItems: 'center',
    flexGrow: 1,
  },
  headerText: {
    color: 'black',
    margin: 25,
    marginTop: 50,
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 25,
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
  },
  entries: {
    width: '90%',
    height: 30,
    borderRadius: 10,
    backgroundColor: '#3F82EE',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  lightText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    letterSpacing: 5.5,
  },
  addButton: {
    backgroundColor: '#3F82EE',
    width: 80,
    height: 80,
    borderRadius: 50,

    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
    alignSelf: 'center',
  },
  buttonPlusSign: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Home;
