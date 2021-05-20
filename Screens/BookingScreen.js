
import React from "react"
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';

const BookingScreen = ({ route, navigation }) => {

    const [selectedDate, setSelectedDate] = React.useState(
        new Date(Date.now())
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    const [selectedHour, setSelectedHour] = React.useState(
        null
    )

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3D5B59', marginBottom: 15 }}>
                    Select a day:
                </Text>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify='space-around'>
                        <KeyboardDatePicker
                            disableToolbar
                            variant='inline'
                            format="dd/MM/yyyy"
                            margin='normal'
                            id='date-picker'
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </View>
            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3D5B59', marginBottom: 15 }}>
                    Select an hour:
                </Text>
                <Picker
                    style={{ width: 255, height: 50, justifyContent: 'center' }}
                    selectedValue={selectedHour}
                    onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}
                >
                    <Picker.Item label='09:00 AM' value='09:00 AM' />
                    <Picker.Item label='10:00 AM' value='10:00 AM' />
                    <Picker.Item label='11:00 AM' value='11:00 AM' />
                    <Picker.Item label='04:30 PM' value='04:30 PM' />
                    <Picker.Item label='05:30 PM' value='05:30 PM' />
                    <Picker.Item label='06:30 PM' value='06:30 PM' />

                </Picker>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Confirmation")}>
                    <Text
                        style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                        Confirm Reservation
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );

};

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