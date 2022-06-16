import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../containers/LogInScreen';
import Home from '../Home';
import CameraGallery from '../CameraGallery';
import CodeScanner from '../CodeScanner';

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
          name="CodeScanner"
          component={CodeScanner}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CameraGallery"
          component={CameraGallery}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
