import React from "react";
import { View,Text,Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
        <Text>I am the home screen</Text>
        <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
        </View>
    )
}

export default HomeScreen;