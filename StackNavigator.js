import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import HomeScreen from "./components/home/HomeScreen";
import ChatScreen from "./components/chat/chatScreen";

//Function to create a stack navigator
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default StackNavigator;