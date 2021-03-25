import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';


export default class SignupScreen extends React.Component{

    constructor(props){
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        username: "",
        password: "",
        mail: "",
        errorMsg: ""
    }

    onSignup = () => {
        if(this.state.username != '' && this.state.mail != '' && this.state.password != ''){
            this.props.navigation.navigate('Home')
        }
        else{
            this.validateInput.current.shake(800)
            this.setState({errorMsg: 'Favor de llenar todos los campos'})
        }
    }

    render(){
        return(
            <View style={styles.container}>
                    <Text style={{fontSize: 35, marginVertical: 50}} testID="title" >Registrate!</Text>
                    <Text style={{fontSize: 16, color: 'gray', marginTop: 20}}>Ingresa tus datos</Text>


                    <Animatable.View ref={this.validateInput}>
                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}} 
                    placeholder="Nombre de Usuario"
                    onChangeText = {(text) => 
                        {this.setState({username:text}), 
                        this.setState({errorMsg: ''})
                    }} 
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30}} 
                    placeholder="Correo electronico"
                    onChangeText = {(text) => 
                        {this.setState({mail:text}), 
                        this.setState({errorMsg: ''})
                    }} 
                    />

                    <TextInput style={{marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20}} 
                    placeholder="Contraseña" 
                    secureTextEntry={true}
                    onChangeText = {(text) => 
                        {this.setState({password:text}),
                        this.setState({errorMsg: ''})
                        }}
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


