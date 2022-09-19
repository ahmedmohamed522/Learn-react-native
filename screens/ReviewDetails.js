import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../style/global";

const ReviewDetails = ({ navigation, item }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
            <Text style={globalStyles.paragraph}>{navigation.getParam("body")}</Text>
            <Text style={globalStyles.paragraph}>Rate: {navigation.getParam("rating")}</Text>
        </View>
    );
};
const styles = StyleSheet.create();
export default ReviewDetails;
