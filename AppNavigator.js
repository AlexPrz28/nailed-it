import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import MainScreen from './Screens/MainScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import RecoverPasswordScreen from './Screens/RecoverPasswordScreen';
import DeleteAccountScreen from './Screens/DeleteAccount';
import ServicesScreen from './Screens/ServicesScreen';

const { Screen, Navigator } = createStackNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  const options = {};

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
    </Stack.Navigator>
  );
}