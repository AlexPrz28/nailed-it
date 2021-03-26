import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import 'react-navigation-stack';
import AppNavigator from '../AppNavigator';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


jest.mock('../Screens/SignupScreen')
jest.mock('react-navigation-stack', () => { BaseButton: {} });
jest.mock('react-native-gesture-handler', () => {
    const View = require('react-native/Libraries/Components/View/View');
    return {
      Swipeable: View,
      DrawerLayout: View,
      State: {},
      ScrollView: View,
      Slider: View,
      Switch: View,
      TextInput: View,
      ToolbarAndroid: View,
      ViewPagerAndroid: View,
      DrawerLayoutAndroid: View,
      WebView: View,
      NativeViewGestureHandler: View,
      TapGestureHandler: View,
      FlingGestureHandler: View,
      ForceTouchGestureHandler: View,
      LongPressGestureHandler: View,
      PanGestureHandler: View,
      PinchGestureHandler: View,
      RotationGestureHandler: View,
      /* Buttons */
      RawButton: View,
      BaseButton: View,
      RectButton: View,
      BorderlessButton: View,
      /* Other */
      FlatList: View,
      gestureHandlerRootHOC: jest.fn(),
      Directions: {},
    };
  });

describe('Testing react navigation', () => {
  test('test', async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    const { findByText} = render(component);

    const header = await findByText('Bienvenido!');

    expect(header).toBeTruthy();
  });

  test('button click login', async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    const { findByText } = render(component);
    const toClick = await findByText('Login');

    fireEvent(toClick, 'press');
    const newHeader = await findByText('Bienvenido de vuelta!');

    expect(newHeader).toBeTruthy();
  });

  test('button click sign up', async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    const { findByText } = render(component);
    const toClick = await findByText('Sign Up');

    fireEvent(toClick, 'press');
    const newHeader = findByText('Ingresa tus datos');

    expect(newHeader).toBeTruthy();
  });

});



