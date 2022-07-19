import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useStore } from '../../utils/states';
import colors from '../../../assets/colors/colors';

const SNConfirmationScreen = ({ navigation }) => {
  const resultSerialNumber = useStore(state => state.resultSerialNumber);
  const setResultSerialNumber = useStore(state => state.setResultSerialNumber);
  const meterType = useStore(state => state.meterType);

  const confirmFunction = () => {
    console.log('SN is: ' + resultSerialNumber);
    console.log('Meter Type is: ' + meterType);
    navigation.navigate('MeterScanner');
  };

  if (resultSerialNumber === '') {
    return (
      <View style={styles.page}>
        <Text>Serial Number Not Found</Text>
        <TextInput
          style={styles.input}
          placeholder="Type in your Serial Number"
          keyboardType="numeric"
          onSubmitEditing={value =>
            setResultSerialNumber(value.nativeEvent.text)
          }
        />

        <Button title="Back to Scanner" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <Text style={styles.SNtext}>
        {'Serial Number is: ' + resultSerialNumber}
      </Text>
      <Text style={styles.SNtext}>{'Meter Type is: ' + meterType}</Text>
      <Button title="Confirm" onPress={() => confirmFunction()} />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: '#666',
  },
  instruction: {
    backgroundColor: colors.blue,
  },
  SNtext: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default SNConfirmationScreen;
