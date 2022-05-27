import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';

const data = [
  {
    title: 'CO2 AND ENERGY MANAGEMENT COMBINED',
    text: 'ZeroC is an intuitive software solution for real estate operators that can be used to record and visualize all energy values of a property in real-time.',
    image: require('../assets/images/image1.png'),
  },
  {
    title: 'AUTOMATED AI MODELING OF THE PROPERTY',
    text: 'The software creates a digital twin of the property or neighborhood and models the corresponding energy flows.',
    image: require('../assets/images/image2.png'),
  },
  {
    title: 'REPORTING & VISUALIZATION',
    text: 'Individual reporting for energy and CO2 balance can be visualized.',
    image: require('../assets/images/image3.png'),
  },
];

const Onboard = props => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Image source={item.image2} style={styles.image2} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotstyle}
        activeDotStyle={styles.activeDotstyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    allignment: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  image: {
    marginVertical: 0,
    left: -3,
    top: -20,
    height: 400,
    width: 400,
  },
  image2: {
    position: 'absolute',
    marginVertical: 0,
    left: 100,
    top: 400,
    height: 300,
    width: 300,
  },
  title: {
    top: -45,

    fontSize: 24,
    color: colors.white,
    textAlign: 'left',
    fontFamily: 'Montserrat-Black',
    marginHorizontal: 30,
  },
  text: {
    top: -30,

    fontSize: 20,
    color: colors.white,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginHorizontal: 30,
    marginTop: 20,
    marginRight: 40,
  },
  rightTextWrapper: {
    width: 45,
    height: 45,
    marginRight: 12,
    justifyContent: 'center',
    allignment: 'center',
  },
  rightText: {
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 45,
    height: 45,
    marginLeft: 12,
    justifyContent: 'center',
    allignment: 'center',
  },
  leftText: {
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  dotstyle: {
    backgroundColor: colors.gray,
  },
  activeDotstyle: {
    backgroundColor: colors.white,
  },
});

export default Onboard;
