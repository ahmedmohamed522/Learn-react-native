import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../style/global";

const Home = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate("ReviewDetails");
        // navigation.push("ReviewDetails");
    };
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Header</Text>
            <Text style={globalStyles.paragraph}>Home Screen</Text>
            <Button title="go to review dets" onPress={pressHandler} />
        </View>
    );
};
const styles = StyleSheet.create({});
export default Home;
