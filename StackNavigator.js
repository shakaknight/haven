import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import HomeScreen from "./components/home/HomeScreen";
import ChatScreen from "./components/chat/chatScreen";
import LoginScreen from "./components/login/LoginScreen";
import useAuth from "./hooks/useAuth";

//Function to create a stack navigator
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { user } = useAuth();
    return (
    <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                <>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Chat" component={ChatScreen} />
                </>
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )
            }
            </Stack.Navigator>
    </NavigationContainer>
    )
}

export default StackNavigator;