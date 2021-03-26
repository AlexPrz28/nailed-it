import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import SignupService from '../service/SignupService';


export default class SignupScreen extends React.Component{

    constructor(props){
        super(props)
        this.validateInput = React.createRef()

        this.state = {
            errorMsg: '',
            credentials: {
                username: '',
                email: '',
                password: ''
            }
        }
        this.signupSer = this.signupSer.bind(this)
    }

    


    onSignup = () => {
        if(this.state.credentials.username != '' && this.state.credentials.email != '' && this.state.credentials.password != ''){
            this.props.navigation.navigate('Home')
            this.signupSer()
            Alert.alert("Cuenta creada", "Felicidades! tu cuenta ha sido creada")
            //console.log(this.state.credentials)
        }
        else{
            this.validateInput.current.shake(800)
            this.setState({errorMsg: 'Favor de llenar todos los campos'})
            //console.log(this.state.credentials)
        }
    }

    signupSer = async() => {
        await SignupService.createUser(this.state.credentials).then(
            response => {
                console.log(response)

            }
        ).catch(err =>{
            console.log(err)
        })

    }

    handleChange = (event, target) => {
        //console.log(this.state)
        if(target == 'username'){
            this.setState(prevState => ({
                credentials: {                   // object that we want to update
                    ...prevState.credentials,    // keep all other key-value pairs
                    username: event       // update the value of specific key
                }
            }))
        }
        else if(target == 'email'){
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
                    <Text style={{fontSize: 35, marginVertical: 50}} testID="title" >Registrate!</Text>
                    <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>Ingresa tus datos</Text>


                    <Animatable.View ref={this.validateInput}>
                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}} 
                    autoCapitalize='none'
                    name="name"
                    placeholder="Nombre de Usuario"
                    onChangeText = {text => this.handleChange(text, 'username')} 
        
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}} 
                    autoCapitalize='none'
                    name="email"
                    placeholder="Correo electronico"
                    onChangeText = {text => this.handleChange(text, 'email')}
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20}} 
                    autoCapitalize='none'
                    name="password"
                    placeholder="Contraseña" 
                    secureTextEntry={false}
                    onChangeText = {text => this.handleChange(text, 'password')}
                    />
                    <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>{this.state.errorMsg}</Text>
                </Animatable.View>

                

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                    <TouchableOpacity 
                    onPress={this.onSignup}
                    style={{width: 200, backgroundColor:'#f792fa', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30}}
                    >
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 25}}>Sign Up</Text>
                    </TouchableOpacity>
                    
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


