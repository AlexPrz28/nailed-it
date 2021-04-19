
import React, { useState } from "react"
import { icons, images } from '../constants'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const ServicesScreen = () => {

    //DummyData

    const salonData = [
        {
            name: "Highlife Nail Spa",
        },
    ]
    const categoryData = [
        {
            id: 3,
            name: "Diseños de Uñas",
        },
        {
            id: 4,
            name: "Otros Servicios",
        },
    ]

    const servicesData = [
        {
            id: 1,
            name: "Basic Shellac",
            rating: 4.2,
            categories: 1,
            price: "200 MXN",
            photo: images.basic_shellac,
            duration: "35 - 45 min",
        },
        {
            id: 2,
            name: "Acrílico + Shellac",
            rating: 4.9,
            categories: 1,
            price: "380 MXN",
            photo: images.acrylic_shellac,
            duration: "40 - 50 min",
        },
        {
            id: 3,
            name: "Acrílico Real",
            rating: 4.5,
            categories: 2,
            price: "520 MXN",
            photo: images.acrylic,
            duration: "45 - 55 min",
        },
        {
            id: 4,
            name: "Manicure",
            rating: 4.1,
            categories: 2,
            price: "380 MXN",
            photo: images.mani,
            duration: "30 - 35 min",
        },
        {
            id: 5,
            name: "Pedicure",
            rating: 4.1,
            categories: 2,
            price: "400 MXN",
            photo: images.pedi,
            duration: "40 - 50 min",
        },
        {
            id: 6,
            name: "Maquillaje Express",
            rating: 3.8,
            categories: 2,
            price: "200 MXN",
            photo: images.makeup,
            duration: "20 - 35 min",
        },
        {
            id: 7,
            name: "Peinado Express",
            rating: 3.2,
            categories: 2,
            price: "150 MXN",
            photo: images.hair,
            duration: "20 - 35 min",
        },
    ]

    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [services, setServices] = useState(servicesData)
    const [currentSalon, setCurrentSalon] = useState(salonData)


    function onSelectCategory(category) {
        //filter services
        let servicesList = servicesData.filter(a => a.categories.includes(category.id))
        setServices(servicesList)
        setSelectedCategory(category)
        renderServicesList()
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, marginTop: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '70%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3D5B59' }}>Highlife Nail Spa</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        padding: 27,
                        paddingHorizontal: 20,
                        backgroundColor: (selectedCategory?.id == item.id) ? '#E57F84' : 'white',
                        borderRadius: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <Text style={{ color: (selectedCategory?.id == item.id) ? 'white' : '#2F5061' }}>
                        {item.name}
                    </Text>

                </TouchableOpacity >
            )
        }
        return (
            <View style={{
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </View >
        )
    }

    function renderServicesList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginTop: 20,
                    marginBottom: 20,
                    //OnPress => navigate to Select date for Service 
                }}>
                {/* Image */}
                <View
                    style={{
                        marginBottom: 5,
                    }}>
                    <Image
                        source={item.photo}
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
                        <Text>{item.duration}</Text>

                    </View>
                </View>

                {/*Service Info*/}

                <View style={{
                    marginTop: 5,
                    flexDirection: 'row'
                }}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3D5B59' }}>{item.name}</Text>


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
                            tintColor: "#B99095",
                            marginRight: 3,
                            marginLeft: 0,
                            marginTop: 2,
                        }}
                    />
                    <Text style={{ fontSize: 20, color: '#3D5B59' }} >{item.rating}</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        marginLeft: 10,
                    }}
                >
                </View>
            </TouchableOpacity >
        )

        return (
            <FlatList
                data={services}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 30,
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {/*renderCategories()*/}
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