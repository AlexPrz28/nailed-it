import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';


export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        token: '',
        password: '',
        errorMsg: ""
    }

    onLogin = () => {
        if(this.state.token == 'Alex' && this.state.password != ''){
            this.props.navigation.navigate('Home')
            Alert.alert("Contraseña Restablecida", "Ingresa a tu cuenta con tu nueva contraseña")
        }
        else{
            this.validateInput.current.shake(800)
            this.setState({errorMsg: 'Favor de ingresar los campos correctamente'})
        }
    }

    render(){
        return(
            <View style={styles.container}>
                    <Text style={{fontSize: 35, marginVertical: 50}} >Crea tu nueva contraseña</Text>
                    <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>Ingresa tu token</Text>


                    <Animatable.View ref={this.validateInput}>
                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}}
                    autoCapitalize='none' 
                    placeholder="Token"
                    onChangeText = {(text) => 
                        {this.setState({token:text}), 
                        this.setState({errorMsg: ''})
                    }} 
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20}} 
                    autoCapitalize='none'
                    placeholder="Nueva contraseña" 
                    secureTextEntry={false}
                    onChangeText = {(text) => 
                        {this.setState({password:text}),
                        this.setState({errorMsg: ''})
                        }}
                    />
                    <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>{this.state.errorMsg}</Text>
                </Animatable.View>


                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                    <TouchableOpacity 
                    onPress={() => this.onLogin()}
                    style={{width: 200, backgroundColor:'#f792fa', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 25}}>
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 25}}>Confirmar</Text>
                    </TouchableOpacity>

                    <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    </View>
                    <Text style={{marginTop: 100, color: 'gray', marginVertical: 30}}>Nailed it Copyright</Text>

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


