import React from 'react';
import { SafeAreaView, Button, Text, StyleSheet } from 'react-native';

const SerialNumberScanner = ({ navigation }) => {
  const captureHandle = () => {
    console.log('pressed');
  };

  return (
    <SafeAreaView style={styles.body}>
      <Button title="Capture" color="#1eb900" onPress={() => captureHandle()} />
      <Text>SerialNumberScanner</Text>
      <Button
        title="Meter Scanner"
        onPress={() => navigation.navigate('MeterScanner')}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default SerialNumberScanner;
