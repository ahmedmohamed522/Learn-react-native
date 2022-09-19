import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../style/global";

const Home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Header</Text>
            <Text style={globalStyles.paragraph}>Home Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({});
export default Home;
