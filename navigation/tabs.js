import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
}from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"
import Svg, {Path} from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';

import{MainScreen} from "../Screens"
import{icons} from "../constants"

const Tab = createBottomTabNavigator();
const TabBarCustomButtom = ({ accessibilityState, children, onPress}) => {
    var isSelected = accessibilityState.selected

    if(isSelected){
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={"#FFFFFF"}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}></View>
                </View>
                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: "#FFFFFF"
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    }else{
        return(
            <TouchableOpacity
            style={{
                flex: 1,
                height: 60,
                backgroundColor: "#FFFFFF"
            }}
            activeOpacity={1}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: "#FFFFFF"
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "#FFFFFF",
                    elevation: 0
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
            name = "MainScreen"
            component = {MainScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                    source = {icons.home}
                    resizeMode ="contain"
                    style ={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? "#FF69B4" : "#C0C0C0"
                    }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButtom
                        {...props}
                    />
                )
            }}  
            />

        <Tab.Screen
            name = "Search"
            component = {MainScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                    source = {icons.search}
                    resizeMode ="contain"
                    style ={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? "#FF69B4" : "#C0C0C0"
                    }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButtom
                        {...props}
                    />
                )
            }}  
            />

        <Tab.Screen
            name = "Liked"
            component = {MainScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                    source = {icons.heart}
                    resizeMode ="contain"
                    style ={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? "#FF69B4" : "#C0C0C0"
                    }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButtom
                        {...props}
                    />
                )
            }}  
            />

        <Tab.Screen
            name = "Profile"
            component = {MainScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                    source = {icons.profile}
                    resizeMode ="contain"
                    style ={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? "#FF69B4" : "#C0C0C0"
                    }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButtom
                        {...props}
                    />
                )
            }}  
            />
        </Tab.Navigator>
    )
}

export default Tabs