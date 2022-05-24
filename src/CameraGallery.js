import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Button } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CodeScanner from './CodeScanner';
const CameraGallery = () => {
  const [response, setResponse] = useState(null);
  const [scannerComp, setscannerComp] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, setResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, setResponse);
  }, []);

  const uri = response?.assets && response.assets[0].uri;

  return (
    <View syle={styles.body}>
      <SafeAreaView style={styles.buttons}>
        <Image style={styles.selectedImage} source={uri ? { uri } : null} />
        <Button
          style={styles.button}
          title="Library"
          onPress={() => onImageLibraryPress()}
        />
        <Button
          style={styles.button}
          title="Camera"
          onPress={() => onCameraPress()}
        />
        <Button
          title="Scan QR/Barcode"
          style={styles.button}
          onPress={() => setscannerComp(true)}
        />
        {scannerComp && <CodeScanner />}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttons: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  selectedImage: {
    height: 240,
    width: 240,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
});

export default CameraGallery;
