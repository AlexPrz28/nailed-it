import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ConfirmationScreen = ({ route, navigation }) => {
    return (
        <View style={styles.confirmation}>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: "white", textAlign: 'center', marginBottom: 20 }}>
                    Your reservationhas been booked succesfully!
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.confirmationText}>
                    Salon: Salon Name
                </Text>
                <Text style={styles.confirmationText}>
                    Service: Service Name
                </Text>
                <Text style={styles.confirmationText}>
                    Date: Date
                </Text>
                <Text style={styles.confirmationText} marginBottom={10}>
                    Price to pay: $400 MXN
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Main")}>
                    <Text
                        style={{
                            fontSize: 18, fontWeight: 'bold', color: "#3D5B59", paddingHorizontal: 20
                        }}>
                        Return to home
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B99095",
        marginHorizontal: 20,
        borderRadius: 10,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: "#F4EAE6",
        marginHorizontal: 10,
        borderRadius: 10,
    },
    confirmation: {
        flex: 1,
        backgroundColor: '#3D5B59',
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmationText: {
        color: "#F4EAE6",
        //fontWeight: 'bold',
        fontSize: 17,
        margin: 5,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default ConfirmationScreen;
