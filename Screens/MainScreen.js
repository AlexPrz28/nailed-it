import * as React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

export default class MainScreen extends React.Component{
    render(){

        this.props.navigation.setOptions({ 
            headerBackTitle: '',
            headerShown: false ,
        })

        return(
            <View style={styles.container}>
                <Text>Main screen</Text>
                <Button title="Logout" onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="Delete Account" onPress={() => this.props.navigation.navigate('DeleteAccount')} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
