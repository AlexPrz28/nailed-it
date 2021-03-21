import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'


export default class LoginScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 35, marginVertical: 50}} >Bienvenide de vuelta</Text>
                <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>Ingresa a tu cuenta</Text>

                <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}} placeholder="Usuario" />
                <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20}} placeholder="Contraseña" />

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                    <TouchableOpacity style={{width: 200, backgroundColor:'#f792fa', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30}}>
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 25}}>Login</Text>

                    </TouchableOpacity>

                    <View style={{marginTop: 50 }}>
                        <Text style={{ color: 'black' }}>No tienes una cuenta?</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity style={{width: 100, backgroundColor:'#f792fa', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 10}}
                    onPress={ () => this.props.navigation.navigate('Signup') }
                    >
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 16}}>Registrate</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={{marginTop: 100, color: 'gray'}}>Nailed it Copyright</Text>

                </View>

                
                              

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})


