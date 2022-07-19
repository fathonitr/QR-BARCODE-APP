import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../utils/states';

const MeterTypeEntry = ({ type }) => {
  const navigation = useNavigation();
  const setMeterType = useStore(state => state.setMeterType);
  const meterType = useStore(state => state.meterType);

  const submitType = value => {
    setMeterType(value);
    navigation.navigate('SerialNumberScanner');
  };

  return (
    <TouchableOpacity style={styles.entries} onPress={() => submitType(type)}>
      <Text style={styles.lightText}> {type} </Text>
    </TouchableOpacity>
  );
};
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
  text: {
    color: 'black',
    fontSize: 20,
    margin: 25,
    marginTop: 150,
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
});

export default MeterTypeEntry;
