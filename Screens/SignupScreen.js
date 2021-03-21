import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class SignupScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>Sign up screen</Text>
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