import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import colors from '@assets/colors/colors';

const CustomButton = ({ onPress, text, type = 'PRIMARY' }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 10,

    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    color: colors.white,
  },
  container_PRIMARY: {
    backgroundColor: colors.blue,
  },

  container_TERTIARY: {
    top: -143,
    right: -125,
  },

  text_TERTIARY: {
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
    fontSize: 13,
  },
});

export default CustomButton;
