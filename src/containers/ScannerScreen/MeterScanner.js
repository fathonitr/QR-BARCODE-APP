import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  Text,
} from 'react-native';
/* import { launchCamera, launchImageLibrary } from 'react-native-image-picker'; */
import TextRecognition from 'react-native-text-recognition';
import ImagePicker from 'react-native-image-crop-picker';
const MeterScanner = ({ navigation }) => {
  const [response, setResponse] = useState(null);
  const [text, setText] = useState(null);
  const [uri, setUri] = useState(null);

  useEffect(() => {
    (async () => {
      if (uri) {
        const result = await TextRecognition.recognize(uri);
        console.log(result);
        setText(result);
      }
    })();
  }, [uri]);

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 100,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      console.log(image.path);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 100,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      console.log(image.path);
    });
  };

  return (
    <View syle={styles.body}>
      <SafeAreaView style={styles.buttons}>
        <Image style={styles.selectedImage} source={uri ? { uri } : null} />
        <Text style={styles.textRecogTitle}>
          ####### Text recognition result #######
        </Text>
        {text ? (
          <Text>{text}</Text>
        ) : (
          <Text> Choose an image or take a picture</Text>
        )}
        <Button
          style={styles.button}
          title="Library"
          onPress={() => chooseImage()}
        />
        <Button
          style={styles.button}
          title="Camera"
          onPress={() => openCamera()}
        />
        <Button
          title="Submission Screen"
          onPress={() => navigation.navigate('SubmissionScreen')}
        />
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
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
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
});

export default MeterScanner;
