import  React from 'react'
import  { useState } from "react";
import{icons, images} from "../constants"

import { 
    SafeAreaView, 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList, 
    Alert, 
    Modal, 
    Pressable
} from "react-native";

    const DeleteService = ({navigation}) => {
        const [modalVisible, setModalVisible] = useState(false);
        return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 400
            }}>
                <Text
                style={{
                    fontSize:26
                    
                }}>
                    ¿Deseas eliminar tu reservación?
                </Text>

    <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Reservación Eliminada</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate("Reservations", setModalVisible(!modalVisible))}
                >
                <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
            </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.textStyle}>Eliminar Reservación</Text>
        </Pressable>
        </View>
            </View>
            
            )
        }

        const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -300
            },
        modalView: {
            margin: 20,
            marginTop:600,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
            },
        button: {
            borderRadius: 25,
            padding: 20,
            elevation: 2
            },
        buttonOpen: {
            backgroundColor: "#F194FF",
            },
        buttonClose: {
            backgroundColor: "#2196F3",
            },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
            },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
            }
        });
        export default DeleteService;