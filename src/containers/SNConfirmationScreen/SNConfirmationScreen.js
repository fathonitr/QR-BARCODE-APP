import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useStore } from '../../utils/states';
import colors from '../../../assets/colors/colors';

const SNConfirmationScreen = ({ navigation }) => {
  const resultSerialNumber = useStore(state => state.resultSerialNumber);
  const setResultSerialNumber = useStore(state => state.setResultSerialNumber);
  const setMeterType = useStore(state => state.setMeterType);
  const meterType = useStore(state => state.meterType);

  const confirmFunction = () => {
    //HERE IS WHERE THE VALUE WILL BE STORED IN LOCAL STORAGE
    if (meterType !== '' && meterType !== 'Unknown') {
      console.log(
        'Serial Number: ' + resultSerialNumber + ' || Meter Type: ' + meterType,
      );
      navigation.navigate('MeterScanner');
    } else {
      Alert.alert('Choose your meter type!');
    }
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
      <View style={styles.instruction}>
        <Text>Choose the meter type and click confirm</Text>
      </View>
      <Text style={styles.SNtext}>
        {'Serial Number is: ' + resultSerialNumber}
      </Text>
      <Text>{'Choose your meter type'}</Text>
      <Picker
        selectedValue={meterType}
        onValueChange={(value, index) => setMeterType(value)}
        mode="dropdown" // Android only
        style={styles.picker}>
        <Picker.Item label="Please select meter type" value="Unknown" />
        <Picker.Item label="Electricity" value="Electricity" />
        <Picker.Item label="Water" value="Water" />
        <Picker.Item label="Gas" value="Gas" />
      </Picker>
      {meterType !== '' && <Text>{'The meter type is: ' + meterType}</Text>}
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
