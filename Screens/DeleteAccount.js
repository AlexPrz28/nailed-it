import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import DeleteAccountService from '../service/DeleteAccountService';

let authLogin;

export default class DeleteAccount extends React.Component{

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

        
        this.deleteSer = this.deleteSer.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    // componentDidUpdate() {
    //     console.log("!!!")
    //     console.log(this.state)
    // }


    onDelete = async() => {
        console.log(this.state)
        if(this.state.credentials.email != '' && this.state.credentials.password != ''){
            await this.deleteSer()
            if(this.state.status == true){
                this.props.navigation.navigate('Home') 
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

    deleteSer = async() => {
        console.log("DELETESER")
        console.log(this.state)
        await DeleteAccountService.userDelete(this.state.credentials).then(
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
                    <Text style={{fontSize: 35, marginVertical: 50}} >Eliminar cuenta</Text>
                    <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>Ingresa tu correo y contraseña</Text>


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
                    onPress={() => this.onDelete()}
                    style={{width: 200, backgroundColor:'#f792fa', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 17}}>
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 25}}>Eliminar</Text>
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


