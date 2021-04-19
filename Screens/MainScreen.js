import * as React from 'react'

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

export default class MainScreen extends React.Component{
    render(){

        this.props.navigation.setOptions({ 
            headerBackTitle: '',
            headerShown: false ,
        })

        function renderMainSalons() {
            return (
                <View>
                    <Text style = {{
                        height: 50,
                        fontSize: 48,
                        fontWeight: 'bold',
                        }}
                        >Lista de
                    </Text>
                    <Text style = {{
                        height: 650,
                        fontSize: 48,
                        fontWeight: 'bold'
                    }}>Salones</Text>
                </View>
            )
        }

        // function renderSalonsList() {

        //     const renderItem = ({item}) => (
        //         <TouchableOpacity style = {{marginBottom: 20}}>
        //             <View>
        //                 <Image
        //                     source = {item.photo}
        //                     resizeMode="cover"
        //                     style = {{
        //                         width:"100%",
        //                         height:200,
        //                         borderRadius: 30
        //                     }}
        //                 />
        //             </View>
        //         </TouchableOpacity>
        //     )

        //     return(
        //         <FlatList
        //         data={salons}
        //         keyExtractor={item => `${item.id}`}
        //         renderItem={renderItem}
        //         contentContainerStyle={{
        //             paddingHorizontal: 30,
        //             paddingBottom: 30
        //         }}
        //         />
        //     )
        // }

        return(
            <SafeAreaView style={styles.container}>
                {renderMainSalons()}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center'
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
