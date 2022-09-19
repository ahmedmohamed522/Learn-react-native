import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../style/global";

const ReviewDetails = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}>Review Details</Text>
            <Text style={globalStyles.text}>Lorem ipsum dolor sit amet.</Text>
        </View>
    );
};
const styles = StyleSheet.create();
export default ReviewDetails;
