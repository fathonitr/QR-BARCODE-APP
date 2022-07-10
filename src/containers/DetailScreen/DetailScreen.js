import React from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import AddButton from '../../components/AddButton';
import ReadingEntry from '../../components/ReadingEntry/ReadingEntry';

const DetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.returnText}> Dashboard</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Overview</Text>
      <Text style={styles.text}>Serial number:</Text>
      <Text style={styles.numberText}>2VBF0068273189</Text>
      <Text style={styles.text}>Past History</Text>

      <ReadingEntry reading="0101" date="20.01.2022" type="Smart Meter" />

      <AddButton onPress={() => navigation.navigate('MeterScanner')} text="+" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA',
    borderColor: '#FAFAFA',
    flex: 1,
  },

  headerText: {
    color: 'black',
    margin: 20,
    marginTop: 50,
    letterSpacing: 10,
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'left',
    textAlignVertical: 'top',
  },

  numberText: {
    color: 'black',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 25,
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'left',
    textAlignVertical: 'top',
  },

  text: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
  },
  returnText: {
    color: 'black',
    fontSize: 15,
    margin: 15,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
  },
});

export default DetailScreen;
