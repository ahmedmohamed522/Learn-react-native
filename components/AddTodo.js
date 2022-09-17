import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo = ({ addItem }) => {
    const [text, setText] = useState("");
    const changeHandler = (val) => {
        setText(val);
    };
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                value={text}
                onChangeText={changeHandler}
            ></TextInput>
            <Button
                title="add todo"
                onPress={() => {
                    addItem(text);
                    setText("");
                }}
                color="coral"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
});

export default AddTodo;
