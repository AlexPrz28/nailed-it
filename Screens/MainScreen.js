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
            rating: 4.9
        },
        {
            id: 2,
            name: "Hais studio salon",
            photo: images.hair_salon2,
            duration: "Con cita",
            rating: 4.2
        },
        {
            id: 3,
            name: "Kapelo Salon & Spa",
            photo: images.hair_salon3,
            duration: "Con cita",
            rating: 5.0
        },
        {
            id: 4,
            name: "Ely's Hair Salon",
            photo: images.hair_salon4,
            duration: "Sin cita",
            rating: 3.9
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
            //OnPress => navigate to Selected Salon
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
