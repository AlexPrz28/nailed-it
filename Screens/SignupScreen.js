import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
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
    }

    


    onSignup = () => {
        if(this.state.credentials.username != '' && this.state.credentials.email != '' && this.state.credentials.password != ''){
            this.props.navigation.navigate('Home')
            //this.signupLoko()
            console.log(this.state.credentials)
        }
        else{
            this.validateInput.current.shake(800)
            this.setState({errorMsg: 'Favor de llenar todos los campos'})
            console.log(this.state.credentials)
        }
    }

    signupLoko = async() => {
        console.log("signupLoko")
        console.log(this.state.credentials)
        await SignupService.createUser(this.state.credentials).then(
            response => {
                console.log(response)

            }
        )

    }

    handleChange = (event) => {
        console.log(this.state)
        this.setState({
            ...this.state.credentials,
            username: event
        });
    };

    handleChangeUsername = (event) => {
        console.log(this.state)
        this.setState({
            ...this.state.credentials,
            username: event
        });
    };

    handleChangeEmail = (event) => {
        console.log(this.state)
        this.setState({
            ...this.state.credentials,
            email: event
        });
    };

    handleChangePassword = (event) => {
        console.log(this.state)
        this.setState({
            ...this.state.credentials,
            email: event
        });
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
                    onChangeText = {this.handleChangeUsername} 
        
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}} 
                    autoCapitalize='none'
                    name="email"
                    placeholder="Correo electronico"
                    onChangeText = {this.handleChangeEmail}
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20}} 
                    autoCapitalize='none'
                    name="password"
                    placeholder="Contraseña" 
                    secureTextEntry={false}
                    onChangeText = {this.handleChangePassword}
                    />
                    <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>{this.state.errorMsg}</Text>
                </Animatable.View>

                

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                    <TouchableOpacity 
                    onPress={() => this.onSignup()}
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


