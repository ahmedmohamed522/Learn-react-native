import React, { useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../style/global";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        { title: "Movie", body: "lorem ipsum Sme kaks", key: "1" },
        { title: "Series", body: "lorem ipsum Sme kaks", key: "2" },
        { title: "Fast And Farous", body: "lorem ipsum Sme kaks", key: "3" },
        { title: "Holly Day", body: "lorem ipsum Sme kaks", key: "4" },
    ]);
    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ReviewDetails", item);
                    }}
                    style={globalStyles.container}
                >
                    <View style={globalStyles.titleContainer}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                        <AntDesign name="caretright" size={20} color="black" />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default Home;
