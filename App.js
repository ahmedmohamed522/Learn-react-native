import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
    const [data, setData] = useState([
        { name: "Ahmed", id: 1 },
        { name: "Ninja", id: 2 },
        { name: "Kosloa", id: 3 },
        { name: "Monslo", id: 4 },
        { name: "Loskm", id: 5 },
        { name: "Mia khalifa", id: 6 },
        { name: "Claire", id: 7 },
    ]);
    const [nameInput, setNameInput] = useState("");
    const onNameInputChangeHandler = (val) => {
        setNameInput(val);
    };
    const pressHandler = (id) => {
        return setData(data.filter((item) => item.id !== id));
    };
    const addValueHandler = () => {
        setData((prevData) => [...prevData, { name: nameInput, id: prevData.length + 1 }]);
        setNameInput("");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to my List</Text>

            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            pressHandler(item.id);
                        }}
                    >
                        <Text style={styles.listItem}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <View>
                <TextInput
                    onChangeText={onNameInputChangeHandler}
                    placeholder="Enter name"
                    style={styles.input}
                    value={nameInput}
                />
                <TouchableOpacity onPress={addValueHandler} style={styles.btn}>
                    <Text style={styles.btnText}>Enter Value</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cffafe",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        marginVertical: 40,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: "#1e293b",
        color: "#fff",
    },
    list: {
        padding: 40,
        marginBottom: 20,
    },
    listItem: {
        padding: 20,
        backgroundColor: "#374151",
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 1,
        margin: 25,
    },
    input: {
        marginVertical: 10,
        fontSize: 16,
        borderColor: "#777",
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
        padding: 10,
    },
    btn: {
        padding: 10,
        backgroundColor: "#65a30d",
        borderRadius: 10,
        marginBottom: 10,
    },
    btnText: {
        textAlign: "center",
        color: "#fff",
    },
});
