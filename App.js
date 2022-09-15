import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
    const [people, setPeople] = useState([
        { name: "ahmed", key: "1" },
        { name: "mohamed", key: "2" },
        { name: "mahmoud", key: "3" },
        { name: "shaun", key: "4" },
        { name: "luigi", key: "5" },
        { name: "mario", key: "6" },
        { name: "bowser", key: "7" },
    ]);
    return (
        <View style={styles.container}>
            <ScrollView>
                {people.map((p) => (
                    <View style={styles.listItem} key={p.key}>
                        <Text style={styles.listText}>name is: {p.name}</Text>
                    </View>
                ))}
            </ScrollView>
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
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24,
    },
});
