import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      
      <View style= {styles.container}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF'
  }
})