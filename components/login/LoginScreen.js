import React from "react";
import { View,Text, Button } from "react-native";
import useAuth from "../../hooks/useAuth";

const LoginScreen = () => {
    const { user } = useAuth();    // This is the custom hook that we created
    console.log(user);
    return (
        <View>
            <Text>I am the login screen</Text>
            <Button title="Login" onPress={() => console.log("Login")} />
        </View>
    )
}

export default LoginScreen;