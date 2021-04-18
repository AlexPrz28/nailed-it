import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import LoginService from '../service/LoginService';

let authLogin;

export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.validateInput = React.createRef()

        this.state = {
            errorMsg: "",
            status: false,
            credentials: {
                email: "",
                password: ""
            }
        }

        
        this.loginSer = this.loginSer.bind(this)
    }

    componentDidUpdate() {
        console.log("!!!")
        console.log(this.state)
    }


    onLogin = async() => {
        console.log(this.state)
        if(this.state.credentials.username != '' && this.state.credentials.email != '' && this.state.credentials.password != ''){
            await this.loginSer()
            if(this.state.status == false){
                this.props.navigation.navigate('Main') 
            //console.log(this.state.credentials)
            }
            else{
                this.setState({errorMsg: 'Correo o contraseña incorrecta'})
            }


        }
        else{
            this.validateInput.current.shake(800)
            this.setState({errorMsg: 'Favor de llenar todos los campos'})
            //console.log(this.state.credentials)
        }
    }

    loginSer = async() => {
        await LoginService.userLogin(this.state.credentials).then(
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
        else if(target == 'password'){
            this.setState(prevState => ({
                credentials: {                   // object that we want to update
                    ...prevState.credentials,    // keep all other key-value pairs
                    password: event       // update the value of specific key
                }
            }))
        }
        
    };

    render(){
        return(
            <View style={styles.container}>
                    <Text style={{fontSize: 35, marginVertical: 50}} >Bienvenido de vuelta!</Text>
                    <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>Ingresa a tu cuenta</Text>


                    <Animatable.View ref={this.validateInput}>
                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}}
                    autoCapitalize='none' 
                    placeholder="Email"
                    onChangeText = {text => this.handleChange(text, 'email')}
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20}} 
                    autoCapitalize='none'
                    placeholder="Contraseña" 
                    secureTextEntry={true}
                    onChangeText = {text => this.handleChange(text, 'password')}
                    />
                    <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>{this.state.errorMsg}</Text>
                </Animatable.View>

                <TouchableOpacity style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={{ color: '#00D3F0' }}>Olvidé mi contraseña</Text>
                </TouchableOpacity>

                

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                    <TouchableOpacity 
                    onPress={() => this.onLogin()}
                    style={{width: 200, backgroundColor:'#f792fa', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 17}}>
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


