import {
    Alert,
    Button,
    FlatList,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useState } from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
    const [data, setData] = useState([
        { text: "Just smile", icon: "smileo", key: "1" },
        { text: "Do your homework", icon: "frowno", key: "2" },
        { text: "Use calculator", icon: "calculator", key: "3" },
        { text: "amazing service", icon: "github", key: "4" },
        { text: "DO some code", icon: "iconfontdesktop", key: "5" },
        { text: "Upload", icon: "upload", key: "6" },
        { text: "Download", icon: "download", key: "7" },
        { text: "Pichart", icon: "piechart", key: "8" },
        { text: "github", icon: "github", key: "9" },
        { text: "Desktopp", icon: "iconfontdesktop", key: "10" },
    ]);

    const addItem = (text) => {
        if (text.length < 3)
            return Alert.alert("OOPS!", "Input must be more than 3 chars", [
                {
                    text: "Undrestood",
                    onPress() {
                        console.log("Understood");
                    },
                },
            ]);
        setData((data) => [{ text, icon: "plus", key: Math.random().toString() }, ...data]);
    };
    const removeItem = (key) => {
        setData(data.filter((item) => item.key !== key));
    };
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>You're Welcome</Text>
                </View>
                <View style={styles.listContainer}>
                    <Form addItem={addItem} />
                    <FlatList
                        style={styles.list}
                        data={data}
                        renderItem={({ item }) => {
                            return <ListItem item={item} removeItem={removeItem} />;
                        }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 40,
        backgroundColor: "#64403E",
    },
    headerText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    listContainer: {
        padding: 40,
        flex: 1,
    },
    list: {
        flex: 1,
        padding: 10,
    },
});
