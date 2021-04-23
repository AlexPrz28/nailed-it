import  React from 'react'
import{icons, images} from "../constants"

import { 
    SafeAreaView, 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

const MainScreen = ({navigation}) => {

    // this.props.navigation.setOptions({ 
    //     headerBackTitle: '',
    //     headerShown: false ,
    // })

    const salonData = [
        {
            id: 1,
            name: "Style only salon",
            photo: images.hair_salon1,
            duration: "Sin cita",
            rating: 4.9,
            servicesMenu: [
                {
                    serviceid: 1,
                    name: "Basic Shellac",
                    rating: 4.2,
                    categories: 1,
                    price: "200 MXN",
                    photo: images.basic_shellac,
                    duration: "35 - 45 min",
                },
                {
                    serviceid: 2,
                    name: "Acrílico + Shellac",
                    rating: 4.9,
                    categories: 1,
                    price: "380 MXN",
                    photo: images.acrylic_shellac,
                    duration: "40 - 50 min",
                },
            ]
        },
        {
            id: 2,
            name: "Hais studio salon",
            photo: images.hair_salon2,
            duration: "Con cita",
            rating: 4.2,
            servicesMenu: [
                {
                    serviceid: 1,
                    name: "Acrílico Real",
                    rating: 4.5,
                    categories: 2,
                    price: "520 MXN",
                    photo: images.acrylic,
                    duration: "45 - 55 min",
                },
                {
                    serviceid: 2,
                    name: "Manicure",
                    rating: 4.1,
                    categories: 2,
                    price: "380 MXN",
                    photo: images.mani,
                    duration: "30 - 35 min",
                },
            ]
        },
        {
            id: 3,
            name: "Kapelo Salon & Spa",
            photo: images.hair_salon3,
            duration: "Con cita",
            rating: 5.0,
            servicesMenu: [
                {
                    serviceid: 1,
                    name: "Pedicure",
                    rating: 4.1,
                    categories: 2,
                    price: "400 MXN",
                    photo: images.pedi,
                    duration: "40 - 50 min",
                },
                {
                    serviceid: 1,
                    name: "Maquillaje Express",
                    rating: 3.8,
                    categories: 2,
                    price: "200 MXN",
                    photo: images.makeup,
                    duration: "20 - 35 min",
                },
            ]
        },
        {
            id: 4,
            name: "Ely's Hair Salon",
            photo: images.hair_salon4,
            duration: "Sin cita",
            rating: 3.9,
            servicesMenu: [
                {
                    serviceid: 1,
                    name: "Peinado Express",
                    rating: 3.2,
                    categories: 2,
                    price: "150 MXN",
                    photo: images.hair,
                    duration: "20 - 35 min",
                },
            ]
        },
        {
            id: 5,
            name: "Allisa Hair & Nail Express",
            photo: images.hair_salon5,
            duration: "Con cita",
            rating: 2.5
        }
    ]

    const [salons, setSalons] = React.useState(salonData)

    // function renderMainSalons() {
    //     return (
    //         <View>
    //             <Text style = {{
    //                 height: 50,
    //                 fontSize: 48,
    //                 fontWeight: 'bold',
    //                 justifyContent: 'center',
    //                 alignItems: 'center'
    //                 }}
    //                 >Lista de
    //             </Text>
    //             <Text style = {{
    //                 height: 650,
    //                 fontSize: 48,
    //                 fontWeight: 'bold',
    //                 justifyContent: 'center',
    //                 alignItems: 'center'
    //             }}>Salones</Text>
    //         </View>
    //     )
    // }
    function renderSalonsList() {
        const renderItem = ({item}) => (
            <TouchableOpacity style = {{marginBottom: 5, marginTop: 20}}
            
            onPress = {() => navigation.navigate("Services", {
                item
            }         
            )}
            >
                <View style={{
                    marginBottom: 10 
                }}
                >
                    <Image
                        source = {item.photo}
                        resizeMode="cover"
                        style = {{
                            width:"100%",
                            height:200,
                            borderRadius: 30
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: 120,
                            backgroundColor: '#F5F5F5', 
                            borderTopRightRadius: 30,
                            borderBottomLeftRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{lineHeight: 22}}>{item.duration}</Text>
                    </View>
                </View>

                <Text style = {{fontSize: 30, fontWeight: 'bold'}}>{item.name}</Text>
                <View 
                    style={{
                        marginTop: 5,
                        flexDirection: 'row'
                    }}
                >
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ fontSize: 15}}>{item.rating}</Text>
                </View>
            </TouchableOpacity>
        )
        return(
            <FlatList
            data={salons}
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
export default MainScreen;
