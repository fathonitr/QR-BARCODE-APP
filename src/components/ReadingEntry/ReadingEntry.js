import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

const ReadingEntry = ({ reading, date, type }) => {
  return (
    <View style={styles.HistoryContainer}>
      <View style={styles.MeterContainer}>
        <Text style={styles.MeterReading}>{reading}</Text>
        <Text style={styles.kwh}>kWh</Text>
      </View>

      <View style={styles.MeterContainer}>
        <Text style={styles.Date}>
          {date} <Text>|</Text>
        </Text>
        <Text style={styles.MeterType}>{type}</Text>
      </View>
      <View style={styles.Line} />
    </View>
  );
};
const styles = StyleSheet.create({
  MeterContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  HistoryContainer: {
    width: '100%',
    height: '10%',
    marginVertical: 5,
  },
  contentWrapper: {
    alignItems: 'center',
    flexGrow: 1,
  },
  NumberText: {
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

  MeterReading: {
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 20,
    letterSpacing: 6,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'left',
    textAlignVertical: 'top',
    flex: 1,
    flexDirection: 'row',
  },
  kwh: {
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 20,
    letterSpacing: 6,
    fontFamily: 'Montserrat-Bold',
    justifyContent: 'space-evenly',
    textAlign: 'right',
  },
  Date: {
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 14,
    letterSpacing: 5,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
    textAlignVertical: 'top',
    flex: 1,
    flexDirection: 'row',
  },
  MeterType: {
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 14,
    letterSpacing: 5,
    fontFamily: 'Montserrat-Regular',
    justifyContent: 'space-evenly',
    textAlign: 'right',
  },
  Line: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 20,
  },
});

export default ReadingEntry;
