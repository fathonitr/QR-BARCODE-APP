import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MeterEntry = ({ meter }) => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.contentWrapper}>
      <TouchableOpacity
        style={styles.entries}
        onPress={() => navigation.navigate('DetailScreen')}>
        <Text style={styles.lightText}>{meter}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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

export default MeterEntry;
