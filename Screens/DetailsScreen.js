import React from "react"
import { Icon } from 'react-native-elements'
import { icons, images } from '../constants'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, StatusBar } from 'react-native';
import ServiceService from "../service/ServiceService";
import { withOrientation } from "react-navigation";
import { Directions } from "react-native-gesture-handler";

const DetailsScreen = ({ route, navigation }) => {


    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="rgba(0,0,0,0)"
            ></StatusBar>
            <ImageBackground
                style={styles.headerImage}
                source={images.hair}
            >
            </ImageBackground>
            <View>
                <View
                    style={styles.iconContainer}>
                    <Image
                        source={icons.heart}
                        style={{
                            size: 28,
                            tintColor: "#F4EAE6",
                            height: 40,
                            width: 40,
                        }} />
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Nombre del Servicio</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey', marginTop: 5 }}>Nombre del Salon</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey', marginTop: 5 }}>Ubicacion</Text>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text
                        style={{ lineHeight: 20, color: "grey " }}
                    >
                        Description of Salon Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus, erat eu luctus bibendum, sem odio molestie urna, vitae iaculis nulla
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 20,
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price per person</Text>
                    <View style={styles.priceTag}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginLeft: 5 }}> $400</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}> Book Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
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
        marginTop: 40,
        backgroundColor: "#B99095",
        marginHorizontal: 20,
        borderRadius: 10,
    },
});

export default DetailsScreen;