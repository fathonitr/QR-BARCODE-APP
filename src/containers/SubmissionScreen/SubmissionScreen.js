import React, { useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useStore } from '../../utils/states';

const SubmissionScreen = ({ navigation }) => {
  const setScannedMeter = useStore(state => state.setResultMeter);
  const scannedMeter = useStore(state => state.resultMeter);
  const resultSerialNumber = useStore(state => state.resultSerialNumber);
  const setResultSerialNumber = useStore(state => state.setResultSerialNumber);
  const setMeterType = useStore(state => state.setMeterType);
  const meterType = useStore(state => state.meterType);

  const onSubmit = () => {
    //TODO: Call function to store resulSerialNumber and meterType in local storage
    //...
    //Clear the global variable, after storing
    const temp = [
      {
        number: resultSerialNumber,
        type: meterType,
        history: [scannedMeter],
      },
    ];
    console.log(temp);
    setScannedMeter('');
    setResultSerialNumber('');
    setMeterType('');
    navigation.navigate('Home');
  };

  useEffect(() => {
    console.log('counter value ist: ' + scannedMeter);
  }, [scannedMeter]);

  return (
    <View style={styles.page}>
      <Text>SubmissionScreen</Text>
      <Text>{'counter value ist: ' + scannedMeter}</Text>
      <Button title="Confirm" onPress={() => onSubmit()} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SubmissionScreen;
