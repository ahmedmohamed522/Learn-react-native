import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../style/global";
import Ionicons from "@expo/vector-icons/Ionicons";

const ReviewDetails = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.titleContainer}>
                <Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
                <Ionicons name="md-checkmark-circle" size={20} color="green" />
            </View>
            <Text style={globalStyles.paragraph}>{navigation.getParam("body")}</Text>
        </View>
    );
};

export default ReviewDetails;
