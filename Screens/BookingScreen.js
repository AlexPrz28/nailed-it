
import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import ServiceService from "../service/ServiceService";
import moment from 'moment'

const BookingScreen = ({ route, navigation }) => {

    const { id, salonName, service, price } = route.params;

    const [selectedDate, setSelectedDate] = React.useState(
        new Date(Date.now())
    )

    const [selectedHour, setSelectedHour] = React.useState(

        [{
            index: null,
            value: null
        }]
    )

    const [availableHours, setAvailableHours] = React.useState([
        {
            service_id: null,
            hours: []
        }
    ]);

    React.useEffect(() => {
        ServiceService.getServiceHours(id).then((res) => {
            console.log(res)
            setAvailableHours(res.data)

        })
            .catch(err => console.log(err));
    }, [])

    function time_convert(num) {
        var military_time = Math.floor(num / 60) + ':' + num % 60
        var mTime = moment(military_time, "hh:mm").format('LT')
        return mTime

    };


    function renderServiceBooking() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ marginTop: 150, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#3D5B59', marginBottom: 30 }}>
                        Day: 
                </Text>
                    <View style={{ width: 255, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 19, color: 'black', marginBottom: 10 }}>
                            {String(selectedDate).substring(0, 15)}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#3D5B59', marginBottom: 20 }}>
                        Select an hour:
                </Text>
                    <Picker
                        style={{ width: 135, height: 20, justifyContent: 'center' }}
                        selectedValue={selectedHour.value}
                        onValueChange={(itemValue, itemIndex) => setSelectedHour({ index: itemIndex, value: itemValue })}
                    >
                        {availableHours.hours?.map(
                            item => (
                                <Picker.Item style={{ justifyContent: 'center', alignItems: 'center', fontSize: 20 }} key={item.hour_id} label={time_convert(item.timeStart)} value={time_convert(item.timeStart)} />
                            ))
                        }
                    </Picker>
                </View>
                <View style={{ marginTop: 100 }}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Confirmation",
                        {
                            salon: salonName,
                            service: service,
                            price: price,
                            day: String(selectedDate),
                            hour: selectedHour.value,
                            service_id: id,
                            time_start: availableHours.hours[selectedHour.index].timeStart,
                            time_end: availableHours.hours[selectedHour.index].timeEnd,
                            hour_id: availableHours.hours[selectedHour.index].hour_id
                        })
                    }>
                        <Text
                            style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                            Confirm Reservation
                    </Text>
                    </TouchableOpacity>
                </View>
            </View >
        );

    };


    return (
        <SafeAreaView style={styles.container}>
            {renderServiceBooking()}
        </SafeAreaView>
    )

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4EAE6",
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
        backgroundColor: "#B99095",
        marginHorizontal: 20,
        borderRadius: 10,
    },
    modal: {
        backgroundColor: '#3D5B59',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});

export default BookingScreen;