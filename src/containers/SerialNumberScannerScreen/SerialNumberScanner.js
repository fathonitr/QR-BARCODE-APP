import React, { useState, useEffect } from 'react';
import { View, Button, Text, StatusBar, StyleSheet, Alert } from 'react-native';
import { useCameraDevices, Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { useStore } from '../../utils/states';
import { useIsFocused } from '@react-navigation/native';
import colors from '../../../assets/colors/colors';

const SerialNumberScanner = ({ navigation }) => {
  const isFocused = useIsFocused();
  const devices = useCameraDevices();
  const device = devices.back;
  const setResultSerialNumber = useStore(state => state.setResultSerialNumber);
  const resultSerialNumber = useStore(state => state.resultSerialNumber);
  const [frameProcessor, barcodes] = useScanBarcodes([
    BarcodeFormat.ALL_FORMATS, // You can only specify a particular format
  ]);
  const [hasPermission, setHasPermission] = useState(false);
  const [tempResult, setTempResult] = useState('');
  const onSubmit = () => {
    setResultSerialNumber(tempResult);
    console.log(tempResult);
    navigation.navigate('SNConfirmation');
  };
  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);
  useEffect(() => {
    /**
     * Length of barcode is checked before setResultSerialNumber
     * so it doesn't store empty string everytime barcodes is changed
     */
    if (barcodes.length > 0) {
      barcodes.forEach(barcode => setTempResult(barcode.displayValue ?? ''));
    } else {
      setTempResult('');
    }
  }, [barcodes]);

  return (
    device != null &&
    hasPermission && (
      <View style={styles.body}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <View style={styles.header}>
          <Text style={styles.text}>
            Scan The Barcode to detect the Serial Number
          </Text>
        </View>
        <Camera
          style={styles.camera}
          device={device}
          isActive={isFocused}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
          audio={false}
        />

        <View style={styles.buttons}>
          {tempResult !== '' && (
            <>
              <Text style={styles.result}>{tempResult}</Text>
              <Button
                title="Got It"
                color="#00D100"
                onPress={() => onSubmit()}
              />
            </>
          )}

          <Button
            title="Add Manually"
            color="#3F82EE"
            onPress={() => navigation.navigate('SNConfirmation')}
          />
          <Button
            title="Cancel"
            color="#3F82EE"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    )
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  camera: {
    flex: 5,
  },
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
  result: {
    backgroundColor: 'white',
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  rnholeView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SerialNumberScanner;
