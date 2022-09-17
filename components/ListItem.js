import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListItem = ({ item, removeItem }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                removeItem(item.key);
            }}
        >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <AntDesign name={item.icon} size={20} color="#333" />
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>
                <AntDesign style={styles.closeIcon} name="close" size={14} color="#B2BCAA" />
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 10,
    },
    itemLeft: { flexDirection: "row" },
    itemText: { marginLeft: 10 },
    closeIcon: { alignSelf: "flex-start" },
});

export default ListItem;
