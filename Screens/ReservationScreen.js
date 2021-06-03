import  React from 'react'
import{icons, images} from "../constants"
import { Root, Popup } from 'popup-ui'
import { useState } from 'react';
import { useEffect } from 'react';
import ReservationService from '../service/ReservationService';
import moment from 'moment'


import { 
    SafeAreaView, 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

const ReservationScreen = ({navigation}) => {

    useEffect(() => {
        ReservationService.getAllReservations(global.userData).then((res) => {
            console.log('-----------------')
            console.log(res)
            console.log('-----------------')
            setReservations(res.data)

        })
            .catch(err => console.log(err));
    }, []);

    const [reservations, setReservations] = useState([])

    function time_convert(num) {
        var military_time = Math.floor(num / 60) + ':' + num % 60
        var mTime = moment(military_time, "hh:mm").format('LT')
        return mTime

    }


    // const salonData = [
    //     {
    //         id: 1,
    //         name: "Shellac cosmetico",
    //         photo: images.hair_salon1,
    //         duration: "16:00",
    //         rating: 4.9,
    //     },
    //     {
    //         id: 2,
    //         name: "Pedicure intergalactico",
    //         photo: images.hair_salon2,
    //         duration: "17:00",
    //         rating: 4.2,
    //     },
    //     {
    //         id: 3,
    //         name: "Corte de cabello con navaja sovietica",
    //         photo: images.hair_salon3,
    //         duration: "12:00",
    //         rating: 5.0,
    //     }
    // ]
    

    function renderSalonsList() {
        const renderItem = ({item}) => (
            <View>

                <View style = {{marginBottom: 5, marginTop: 20}}
                onPress = {() => navigation.navigate("Services", {
                    item
                }         
                )}
                >
                    <View style={{
                        marginBottom: 0
                    }}
                    >
                        <Text style = {{fontSize: 22, fontWeight: 'bold', bottom: 30, marginTop: 100}}></Text>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 100,
                                width: 300,
                                backgroundColor: '#F5F5F5', 
                                borderTopRightRadius: 30,
                                borderBottomLeftRadius: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow
                            }}
                        >
                        <Text style = {{fontSize: 16, fontWeight: 'bold'}}>{item._id}</Text>
                            <Text style={{lineHeight: 22}}>{time_convert(item.time_start)}-{time_convert(item.time_end)}</Text>
                        </View>
                    </View>

                    <View 
                        style={{
                            marginTop: 5,
                            flexDirection: 'row'
                        }}
                    >
                    </View>
                </View>

                <TouchableOpacity style = {{marginBottom: 5, marginTop: 20}}
                onPress = {() => navigation.navigate("DeleteService", {
                    item
                }         
                )}
                >
                    <View style={{
                        marginBottom: 0
                    }}
                    >
                        <Text style = {{fontSize: 22, fontWeight: 'bold', bottom: 60, marginTop: 100}}></Text>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 85,
                                height: 50,
                                width: 30,
                                backgroundColor: '#F5F5F5', 
                                borderTopRightRadius: 100,
                                borderBottomLeftRadius: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow
                            }}
                        >
                        
                        <Image
                            source = {icons.trash}
                            resizeMode ="contain"
                            style ={{
                                width: 25,
                                height: 25
                            }}
                        />                  
                        </View>
                    </View>
                    <View 
                        style={{
                            marginTop: -100,
                            flexDirection: 'row'
                        }}
                    >
                    </View>
                </TouchableOpacity>
            </View>

        )
        return(
            <FlatList
            data={reservations}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal: 30,
                paddingBottom: 30
            }}
            />
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            {/* {renderMainSalons()} */}
            {renderSalonsList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})

export default ReservationScreen;