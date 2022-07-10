import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const AddButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Text style={styles.buttonPlusSign}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default AddButton;
