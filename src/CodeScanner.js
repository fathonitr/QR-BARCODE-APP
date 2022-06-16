import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const CodeScanner = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Text>Code Scanner</Text>
      <Button
        title="Barcode Scanner"
        onPress={() => navigation.navigate('CameraGallery')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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

export default CodeScanner;
