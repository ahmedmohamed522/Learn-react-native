import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const Form = ({ addItem }) => {
    const [inputVal, setInputVal] = useState("");
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                value={inputVal}
                onChangeText={(val) => {
                    setInputVal(val);
                }}
                placeholder="Type something..."
            />
            <Button
                title="submit"
                color="#6C6061"
                onPress={() => {
                    addItem(inputVal);
                    setInputVal("");
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    form: {
        margin: 10,
    },
    input: {
        padding: 10,
        fontSize: 16,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        borderStyle: "dashed",
        marginBottom: 5,
    },
});
export default Form;
