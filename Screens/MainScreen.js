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
            name: "Salon 1",
            photo: images.hair_salon1,
        },
        {
            id: 2,
            name: "Salon 2",
            photo: images.hair_salon2,
        },
        {
            id: 3,
            name: "Salon 3",
            photo: images.hair_salon3,
        },
        {
            id: 4,
            name: "Salon 4",
            photo: images.hair_salon4,
        },
        {
            id: 5,
            name: "Salon 5",
            photo: images.hair_salon5,
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
            <TouchableOpacity style = {{marginBottom: 20, marginTop: 20}}
            //OnPress => navigate to Select date for Service
            >
                <View>
                    <Image
                        source = {item.photo}
                        resizeMode="cover"
                        style = {{
                            width:"100%",
                            height:200,
                            borderRadius: 30
                        }}
                    />
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
