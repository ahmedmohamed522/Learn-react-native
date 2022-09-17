import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
    const [todos, setTodos] = useState([
        { text: "buy coffee", key: "1" },
        { text: "create an app", key: "2" },
        { text: "play on the switch", key: "3" },
    ]);
    const pressHandler = (key) => {
        return setTodos((prevTodos) =>
            prevTodos.filter((item) => {
                return item.key !== key;
            })
        );
    };
    const addItem = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { text, key: Math.random().toString() }];
        });
    };
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <AddTodo addItem={addItem} />
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => {
                            return <TodoItem item={item} pressHandler={pressHandler} />;
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
});
