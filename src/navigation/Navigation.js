import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../containers/LogInScreen';
import Home from '../containers/HomeScreen';
import SubmissionScreen from '../containers/SubmissionScreen';
import SerialNumberScanner from '../containers/SerialNumberScannerScreen';
import MeterScanner from '../containers/MeterScannerScreen';
import DetailScreen from '../containers/DetailScreen';
import MeterEntry from '../components/MeterEntry';
import SNConfirmationScreen from '../containers/SNConfirmationScreen';
import MeterType from '../containers/MeterTypeScreen/MeterType';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LogInScreen"
          component={LogInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MeterType"
          component={MeterType}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailScreen"
          component={DetailScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SerialNumberScanner"
          component={SerialNumberScanner}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MeterScanner"
          component={MeterScanner}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SubmissionScreen"
          component={SubmissionScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MeterEntry"
          component={MeterEntry}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SNConfirmation"
          component={SNConfirmationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
