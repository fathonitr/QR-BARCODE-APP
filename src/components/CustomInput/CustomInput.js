import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import colors from '@assets/colors/colors';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',

    borderColor: colors.black,
    borderBottomWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
});

export default CustomInput;
