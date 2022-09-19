import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "700",
        fontFamily: "roboto-bold",
    },
    paragraph: {
        fontSize: 16,
        fontFamily: "roboto-regular",
    },
});
