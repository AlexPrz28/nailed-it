import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';


export default class AccountDeletedScreen extends React.Component {

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
                <Text style={styles.title} >Cuenta eliminada correctamente</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Signup')}
                        style={{ width: 160, backgroundColor: '#F19CBB', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 0 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>Sign Up</Text>
                    </TouchableOpacity>

                </View>

            </View >
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        textAlign: "center",
        justifyContent: "center",
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 50,
    },
    text: {

    },
    button: {

    },
})


