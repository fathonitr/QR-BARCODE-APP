import React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import MeterTypeEntry from '../../components/MeterTypeEntry';
function MeterType({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.text}>Choose the type of Meter:</Text>

      <MeterTypeEntry type="ELECTRICITY"> </MeterTypeEntry>
      <MeterTypeEntry type="GAS"> </MeterTypeEntry>
      <MeterTypeEntry type="WATER"> </MeterTypeEntry>
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
  text: {
    color: 'black',
    fontSize: 20,
    margin: 25,
    marginTop: 150,
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
  },
});

export default MeterType;
