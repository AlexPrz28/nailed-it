import React from 'react'
import { icons, images } from "../constants"
import SalonService from '../service/SalonService';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment'




const MainScreen = ({ route, navigation }) => {

    useEffect(() => {
        SalonService.getSalons().then((res) => {
            //console.log(res)
            setSalones(res.data)
            console.log(global.userData)

        })
            .catch(err => console.log(err));
    }, []);

    const [salones, setSalones] = useState([])

    function time_convert(num) {
        var military_time = Math.floor(num / 60) + ':' + num % 60
        var mTime = moment(military_time, "hh:mm").format('LT')
        return mTime

    }

    function renderSalonsList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={{ marginBottom: 5, marginTop: 20 }}
                onPress={() => navigation.navigate("Services", {
                    id: item._id
                })} testID="button" >
                <View style={{
                    marginBottom: 10
                }}
                >
                    <Image
                        source={{ uri: item.imageUrl }}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: 30
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: 140,
                            backgroundColor: '#F5F5F5',
                            borderTopRightRadius: 30,
                            borderBottomLeftRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ lineHeight: 22, lineWidth: 100 }}>{time_convert(item.openHour)}-{time_convert(item.closeHour)}</Text>
                    </View>
                </View>

                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item.name}</Text>
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
                    <Text style={{ fontSize: 15 }}>{item.rating}</Text>
                </View>
            </TouchableOpacity>

        )
        return (
            <FlatList
                data={salones}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    paddingBottom: 30
                }}
            />
        )
    }
    return (
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