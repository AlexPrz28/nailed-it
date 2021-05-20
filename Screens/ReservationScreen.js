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

const ReservationScreen = ({navigation}) => {

    // this.props.navigation.setOptions({ 
    //     headerBackTitle: '',
    //     headerShown: false ,
    // })

    const salonData = [
        {
            id: 1,
            name: "Shellac cosmetico",
            photo: images.hair_salon1,
            duration: "16:00",
            rating: 4.9,
    
        },
        {
            id: 2,
            name: "Pedicure intergalactico",
            photo: images.hair_salon2,
            duration: "17:00",
            rating: 4.2,
            
        },
        {
            id: 3,
            name: "Corte de cabello con navaja sovietica",
            photo: images.hair_salon3,
            duration: "12:00",
            rating: 5.0,
            
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
                    marginBottom: 0
                }}
                >
                    <Text style = {{fontSize: 22, fontWeight: 'bold', bottom: 60, marginTop: 100}}></Text>
                    
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
                       <Text style = {{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                        <Text style={{lineHeight: 22}}>{item.duration}</Text>
                    </View>
                </View>

                
                <View 
                    style={{
                        marginTop: 5,
                        flexDirection: 'row'
                    }}
                >
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

export default ReservationScreen;