import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../style/global";

const ReviewDetails = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}>Review Details</Text>
            <Text style={globalStyles.text}>Lorem ipsum dolor sit amet.</Text>
        </View>
    );
};
const styles = StyleSheet.create();
export default ReviewDetails;
