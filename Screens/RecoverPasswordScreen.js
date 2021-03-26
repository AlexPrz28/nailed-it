import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import RecoverPasswordService from '../service/RecoverPasswordService'


export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.validateInput = React.createRef()
        this.state = {
            errorMsg: "",
            status: false,
            credentials: {
                token: '',
                new_password: '',
            }
        }

        this.recoverSer = this.recoverSer.bind(this)
    }

    componentDidUpdate() {
        console.log("!!!")
        console.log(this.state)
    }

    

    onRecover = async() => {
        console.log(this.state)
        if(this.state.token != '' && this.state.password != ''){
            //pon el ser
            await this.recoverSer()
            if(this.state.status == true){
                this.props.navigation.navigate('Home')
                Alert.alert("Contraseña Restablecida", "Ingresa a tu cuenta con tu nueva contraseña")
            }
            else{
                this.setState({errorMsg: 'Error, verifica tu token.'})
            }
            
        }
        else{
            this.validateInput.current.shake(800)
            this.setState({errorMsg: 'Favor de ingresar los campos correctamente'})
        }
    }

    recoverSer = async() => {
        await RecoverPasswordService.recoverPass(this.state.credentials).then(
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
    
        if(target == 'token'){
            this.setState(prevState => ({
                credentials: {                   // object that we want to update
                    ...prevState.credentials,    // keep all other key-value pairs
                    token: event       // update the value of specific key
                }
            }))
        }
        else if(target == 'new_password'){
            this.setState(prevState => ({
                credentials: {                   // object that we want to update
                    ...prevState.credentials,    // keep all other key-value pairs
                    new_password: event       // update the value of specific key
                }
            }))
        }
        
    };

    render(){
        return(
            <View style={styles.container}>
                    <Text style={{fontSize: 35, marginVertical: 50}} >Crea tu nueva contraseña</Text>
                    <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>Ingresa tu token</Text>


                    <Animatable.View ref={this.validateInput}>
                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}}
                    autoCapitalize='none' 
                    placeholder="Token"
                    onChangeText = {text => this.handleChange(text, 'token')}
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20}} 
                    autoCapitalize='none'
                    placeholder="Nueva contraseña" 
                    secureTextEntry={false}
                    onChangeText = {text => this.handleChange(text, 'new_password')}
                    />
                    <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>{this.state.errorMsg}</Text>
                </Animatable.View>


                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                    <TouchableOpacity 
                    onPress={() => this.onRecover()}
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


