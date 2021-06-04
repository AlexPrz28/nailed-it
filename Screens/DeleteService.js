import  React from 'react'
import  { useState } from "react";
import{icons, images} from "../constants"
import ReservationService from '../service/ReservationService';
import ServiceService from '../service/ServiceService';

import { 
    SafeAreaView, 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList, 
    Alert, 
    Modal, 
    Pressable
} from "react-native";
import { id } from 'date-fns/locale';

    const DeleteService = ({route, navigation}) => {
        const { reservation_id, hour_id, service_id, time_end, time_start } = route.params;
        const [modalVisible, setModalVisible] = useState(false);
        
        // const [reservation, setReservation] = React.useState([]);
        // React.useEffect(() => {
        //     ReservationService.getReservationData(reservation_id).then((res) => {
        //         console.log("ReservationData:")
        //         console.log(res)
        //         setReservation(res)
        //     })
        //         .catch(err => console.log(err));
        // }, []);
        const hourData = {
            service_id: service_id,
            timeStart: time_start,
            timeEnd: time_end
        }
        const deleteData = {
            reservation_id: reservation_id,
            service_id: service_id,
            timeStart: time_start,
            timeEnd: time_end
        }
        React.useEffect(() => {
            console.log("Este es el service_id:")
            console.log(service_id)
            console.log("Este es el reservation_id:")
            console.log(reservation_id)
            console.log("-------------")
            ReservationService.deleteReservation(deleteData).then((res) => {
                console.log('-------------')
                console.log(res)
                console.log('-------------')
            })
                .catch(err => console.log(err));
        }, []);
        
        // React.useEffect(() => {
        //     ServiceService.addServiceHour(hourData).then((res) => {
        //         console.log(res)
        //         // setServicios(res.data)
        //     })
        //         .catch(err => console.log(err));
        // }, []);
        return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 400
            }}>
                <Text
                style={{
                    fontSize:26
                    
                }}>
                    Reservación eliminada
                </Text>
    <View style={styles.centeredView}>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate("Reservations", setModalVisible(!modalVisible))}
        >
            <Text style={styles.textStyle}>Volver a panta de reservaciones</Text>
        </Pressable>
        </View>
            </View>
            )
        }
        const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -300
            },
        modalView: {
            margin: 20,
            marginTop:600,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
            },
        button: {
            borderRadius: 25,
            padding: 20,
            elevation: 2
            },
        buttonOpen: {
            backgroundColor: "#F194FF",
            },
        buttonClose: {
            backgroundColor: "#2196F3",
            },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
            },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
            }
        });
        export default DeleteService;