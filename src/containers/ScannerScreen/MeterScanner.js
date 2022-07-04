import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  Text,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';
const MeterScanner = ({ navigation }) => {
  const [response, setResponse] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    (async () => {
      if (response) {
        const result = await TextRecognition.recognize(response.assets[0].uri);
        console.log(result);
        setText(result);
      }
    })();
  }, [response]);

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
          onPress={() => onImageLibraryPress()}
        />
        <Button
          style={styles.button}
          title="Camera"
          onPress={() => onCameraPress()}
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
    height: 240,
    width: 240,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
});

export default MeterScanner;
