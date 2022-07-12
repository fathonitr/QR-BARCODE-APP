import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import AddButton from '@components/AddButton';
import MeterEntry from '@components/MeterEntry';

function Home({ navigation }) {
  const [popUpOpened, setPopUp] = React.useState(false);
  const [inputText, setInputText] = React.useState('100 kWh');

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.headerText}>Dashboard</Text>
      <Text style={styles.text}>Registered Meter</Text>

      <MeterEntry meter="2VBF0068273189" />

      <AddButton
        onPress={() => navigation.navigate('SerialNumberScanner')}
        text="+"
      />
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
