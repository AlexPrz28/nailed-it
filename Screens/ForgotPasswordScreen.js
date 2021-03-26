import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import ForgotPasswordService from '../service/ForgotPasswordService'


export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
        this.state = {
            credentials: {
                email: ""
            },
            errorMsg: "",
        }
    }

    

    onRecoverPass = () => {
        if(this.state.email != ''){
            this.forgotSer()
            this.props.navigation.navigate('RecoverPassword')
            Alert.alert("Token enviado", "Se ha enviado un correo para recuperar su contraseña")
        }
        else{
            this.validateInput.current.shake(800)
            this.setState({errorMsg: 'Favor de ingresar su correo'})
        }
    }

    forgotSer = async() => {
        await ForgotPasswordService.forgetPass(this.state.credentials).then(
            response => {
                console.log("ACEPTO")
                this.setState({
                    // ...this.state,
                    // status: true
                    ...this.state.status = true
                    
                })
                console.log(response)

            }
        ).catch(err =>{
            console.log("Rechazo")
            console.log(err)
            this.setState({
                ...this.state.status = false
            })
        })

    }

    handleChange = (event, target) => {
    
        if(target == 'email'){
            this.setState(prevState => ({
                credentials: {                   // object that we want to update
                    ...prevState.credentials,    // keep all other key-value pairs
                    email: event       // update the value of specific key
                }
            }))
        }
    }

    



    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 35, marginVertical: 40, textAlign: 'center'}}>Recupera tu contraseña</Text>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 20, textAlign: 'center' }}>Ingresa tu correo electronico</Text>


                <Animatable.View ref={this.validateInput}>
                    <TextInput style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30 }}
                        autoCapitalize='none'
                        placeholder="Email"
                        onChangeText = {text => this.handleChange(text, 'email')}
                    />
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errorMsg}</Text>
                </Animatable.View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.onRecoverPass()}
                        style={{ width: 200, backgroundColor: '#F19CBB', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 0 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>Reestablecer</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        textAlign: "center",
        justifyContent: "center",
    }
})