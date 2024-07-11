import React from "react";
import { View,Text, Button } from "react-native";

const LoginScreen = () => {
    return (
        <View>
        <Text>I am the login screen</Text>
        <Button title="Login" onPress={() => console.log("Login")} />
        </View>
    )
}