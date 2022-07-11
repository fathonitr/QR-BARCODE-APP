import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useStore } from '../../utils/states';

const SubmissionScreen = ({ navigation }) => {
  const scannedMeter = useStore(state => state.resultMeter);
  useEffect(() => {
    console.log('counter value ist: ' + scannedMeter);
  }, [scannedMeter]);

  return (
    <View style={styles.page}>
      <Text>SubmissionScreen</Text>
      <Text>{'counter value ist: ' + scannedMeter}</Text>
      <Button title="Confirm" onPress={() => navigation.navigate('Home')} />
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
