import React from "react"
import { icons } from '../constants'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ServiceService from "../service/ServiceService";
import SalonService from '../service/SalonService';

const ServicesScreen = ({ route, navigation }) => {


    const [salon, setSalon] = React.useState(null);
    React.useEffect(() => {
        const { id } = route.params;
        console.log(id)
        SalonService.getSalonData(id).then((res) => {
            console.log(res)
            setSalon(res.data)
        })
            .catch(err => console.log(err));
    }, []);

    const [servicio, setServicios] = React.useState([]);
    React.useEffect(() => {
        const { id } = route.params;
        console.log(id)
        ServiceService.getServices(id).then((res) => {
            console.log(res)
            setServicios(res.data)
        })
            .catch(err => console.log(err));
    }, []);


    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, marginTop: 3 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '70%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3D5B59' }}>{salon?.name}</Text>
                    </View>
                </View>
            </View>
        )
    }


    function renderServicesList() {
        return (
            <View
                style={{
                    paddingHorizontal: 20,
                    paddingBottom: 30,
                }}>
                {
                    servicio?.map(
                        item => (
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    marginBottom: 20
                                }}
                                onPress={() => navigation.navigate("Details", {
                                    serviceId: item._id,
                                    salonName: salon.name,
                                    salonLocation: salon.location
                                })}>
                                {/* Image */}
                                <View
                                    style={{
                                        marginBottom: 5,
                                    }}>
                                    <Image
                                        source={{ uri: item.imageUrl }}
                                        resizeMode='cover'
                                        style={{
                                            width: '100%',
                                            height: 200,
                                            borderRadius: 40,
                                        }}
                                    />
                                    <View style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        height: 40,
                                        width: 110,
                                        backgroundColor: 'white',
                                        borderTopRightRadius: 20,
                                        borderBottomLeftRadius: 20,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#B99095' }}>{item.estimatedTimeLower} to {item.estimatedTimeHigher} min</Text>

                                    </View>
                                </View>


                                {/*Service Info*/}

                                <View style={{
                                    marginTop: 5,
                                    flexDirection: 'row'
                                }}
                                >
                                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.name}</Text>

                                </View>
                                <View style={{
                                    marginTop: 5,
                                    flexDirection: 'row'
                                }}
                                >
                                    {/*Rating*/}
                                    <Image
                                        source={icons.star}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: "#3D5B59",
                                            marginRight: 3,
                                            marginLeft: 0,
                                            marginTop: 2,
                                        }}
                                    />
                                    <Text style={{ fontSize: 20 }} >{item.rating}</Text>

                                    {/*Price*/}
                                    <Image
                                        source={icons.dollar}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: "#3D5B59",
                                            marginRight: 2,
                                            marginLeft: 17,
                                            marginTop: 3,
                                        }}
                                    />
                                    <Text style={{ fontSize: 20 }} >{item.price}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                    }}
                                >
                                </View>

                            </TouchableOpacity >
                        ))
                }
            </View >
        )

    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderServicesList()}
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
})

export default ServicesScreen;