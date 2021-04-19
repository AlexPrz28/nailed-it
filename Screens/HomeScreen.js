
import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {

  render() {

    // this.props.navigation.setOptions({ 
    //     headerBackTitle: '',
    //     headerShown: false ,
    // })

    return (
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={require('../assets/images/nails.jpg')}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Bienvenido!</Text>
        <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center', marginHorizontal: 20 }} > Ingresa o crea una nueva cuenta mi ciela</Text>

        <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={{ backgroundColor: '#f792fa', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2 }}
          >
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Services')}
            style={{ backgroundColor: '#FFF', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2, borderWidth: 1, borderColor: '#f792fa' }}

          >
            <Text style={{ textAlign: 'center', color: '#f792fa', fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>

        </View>

        <Text style={{ fontSize: 16, marginTop: 10, color: 'gray' }}>Copyright nailed it</Text>
      </View>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  }
})