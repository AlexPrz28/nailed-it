import React from "react"
import { icons } from '../constants'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import ServiceService from "../service/ServiceService";

const DetailsScreen = ({ route, navigation }) => {


    const [details, setDetails] = React.useState([]);

    const { serviceId, salonName, salonLocation } = route.params;

    React.useEffect(() => {
        console.log(serviceId)
        ServiceService.getServiceDetails(serviceId).then((res) => {
            console.log(res)
            setDetails(res.data)

        })
            .catch(err => console.log(err));
    }, []);


    function renderServiceDetails() {

        return (
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}>
                <View>
                    <ImageBackground
                        style={styles.headerImage}
                        source={{ uri: details.imageUrl }}
                    >
                    </ImageBackground>
                    <View>
                        <View
                            style={styles.iconContainer}>
                            <Image
                                source={icons.heart}
                                style={{
                                    tintColor: "#F4EAE6",
                                    height: 40,
                                    width: 40,
                                }} />
                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{details.name}</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: 'black', marginTop: 5 }}>{salonName}</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: '#808080', marginTop: 5 }}>{salonLocation}</Text>
                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <Text
                                style={{ lineHeight: 20, color: "#808080" }}
                            >
                                {details.description}
                            </Text>
                        </View>
                        {<View
                            style={{
                                marginTop: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 20,
                                alignItems: 'center',
                            }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price per person</Text>
                            <View style={styles.priceTag}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginLeft: 5 }}> ${details.price}</Text>
                            </View>
                        </View>}
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Booking", {
                            id: details._id,
                            salonName: salonName,
                            service: details.name,
                            price: details.price
                        })}>
                            <Text
                                style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                                Book Now
                                
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderServiceDetails(details)}
        </SafeAreaView>
    )
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
    headerImage: {
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
    },
    iconContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        backgroundColor: "#B99095",
        top: -30,
        right: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    priceTag: {
        height: 40,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        backgroundColor: '#3D5B59',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
    },
    btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "#B99095",
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom:20,
    },
});

export default DetailsScreen;