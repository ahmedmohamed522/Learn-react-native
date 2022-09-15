import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
    const [people, setPeople] = useState([
        { name: "ahmed", id: "1" },
        { name: "mohamed", id: "2" },
        { name: "mahmoud", id: "3" },
        { name: "shaun", id: "4" },
        { name: "luigi", id: "5" },
        { name: "mario", id: "6" },
        { name: "bowser", id: "7" },
        { name: "gana", id: "8" },
    ]);
    const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) => {
            return prevPeople.filter((item) => item.id !== id);
        });
    };
    const renderHandler = ({ item }) => (
        <TouchableOpacity
            style
            onPress={() => {
                pressHandler(item.id);
            }}
        >
            <Text style={styles.listText}>{item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={renderHandler}
            />

            {/* <ScrollView>
                {people.map((p) => (
                    <View style={styles.listItem} key={p.key}>
                        <Text style={styles.listText}>name is: {p.name}</Text>
                    </View>
                ))}
            </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
        paddingHorizontal: 20,

        // alignItems: "center",
        // justifyContent: "center",
    },
    listText: {
        marginTop: 24,
        marginHorizontal: 10,
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24,
    },
});
