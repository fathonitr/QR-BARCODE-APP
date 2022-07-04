import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const SerialNumberScanner = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Text>SerialNumberScanner</Text>
      <Button
        title="Meter Scanner"
        onPress={() => navigation.navigate('MeterScanner')}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
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

export default SerialNumberScanner;
