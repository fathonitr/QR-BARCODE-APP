import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../containers/LogInScreen';
import Home from '../containers/HomeScreen/Home';
import MeterScanner from '../containers/ScannerScreen/MeterScanner';
import SerialNumberScanner from '../containers/ScannerScreen/SerialNumberScanner';
import DetailScreen from '../containers/HomeScreen/DetailScreen';
import SubmissionScreen from '../containers/SubmissionScreen/SubmissionScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
