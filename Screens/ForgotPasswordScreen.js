import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';


export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        username: "",
        password: "",
        errorMsg: "",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>Recupera tu Cuenta</Text>


                <Animatable.View ref={this.validateInput}>
                    <TextInput style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20, marginVertical: 30 }}
                        placeholder="Usuario"
                        onChangeText={(text) => {
                            this.setState({ username: text }),
                                this.setState({ errorMsg: '' })
                        }}
                    />

                    <TextInput style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                        placeholder="Nueva Contraseña"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ password: text }),
                                this.setState({ errorMsg: '' })
                        }}
                    />
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errorMsg}</Text>
                </Animatable.View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('UpdatePassword')}
                        style={{ width: 200, backgroundColor: '#F19CBB', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 0 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>Reestablecer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AccountDeleted')}
                        style={{ width: 200, backgroundColor: '#EFDECD', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 40 }}>
                        <Text style={{ textAlign: 'center', color: 'red', fontSize: 18 }}>Borrar Cuenta</Text>
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


