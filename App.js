import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [name, setName] = useState("shaun");
    const [person, setPerson] = useState({ name: "Ahmed", age: 25 });
    const ageHandler = () => {
        setPerson((person) => ({ ...person, age: person.age + 1 }));
    };
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text>Enter Your Name:</Text>
                <TextInput
                    onChangeText={(val) => {
                        setName(val);
                    }}
                    placeholder="e.g Ahmed"
                    style={styles.input}
                />
                <Text>{name}</Text>
            </View>
            <View style={styles.group}>
                <Text>Enter Name and Age:</Text>
                <TextInput
                    placeholder="e.g. Ahmed"
                    onChangeText={(val) => {
                        setPerson(() => ({ ...person, name: val }));
                    }}
                    style={styles.input}
                />
                <TextInput
                    placeholder="e.g. Age"
                    onChangeText={(val) => {
                        setPerson(() => ({ ...person, age: val }));
                    }}
                    style={styles.input}
                />
                <Text>
                    {person.name} - {person.age}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    group: {
        marginBottom: 20,
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 8,
        margin: 10,
        width: 200,
    },
});
