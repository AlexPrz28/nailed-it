import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ReservationService from '../service/ReservationService';
import ServiceService from "../service/ServiceService";

const ConfirmationScreen = ({ route, navigation }) => {

    const { salon, service, price, day, hour, service_id, time_start, time_end, hour_id } = route.params;

    const reservation = {
        user_id: global.userData,
        service_id: service_id,
        time_start: time_start,
        time_end: time_end,
        hour_id: hour_id,
    };

    const reservedHour = {
        service_id: service_id,
        hour_id: hour_id,
    };

    React.useEffect(() => {
        ReservationService.createReservation(reservation).then((res) => {
            console.log(res)
        })
            .catch(err => console.log(err));
    }, []);

    React.useEffect(() => {
        ServiceService.deleteServiceHour(reservedHour).then((res) => {
            console.log(res)
        })
            .catch(err => console.log(err));
    }, []);


    return (
        <View style={styles.confirmation}>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: "white", textAlign: 'center', marginBottom: 20 }}>
                    Your reservation has been booked succesfully!
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.confirmationText}>
                    {salon}
                </Text>
                <Text style={styles.confirmationText}>
                    {service}
                </Text>
                <Text style={styles.confirmationText}>
                    {day.substring(0, 10)} at {hour}
                </Text>
                <Text style={styles.confirmationText} marginBottom={10}>
                    ${price}
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
