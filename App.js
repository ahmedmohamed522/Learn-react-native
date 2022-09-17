import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: "#777",
    },
    boxOne: { backgroundColor: "violet", padding: 10, flex: 1 },
    boxTwo: { backgroundColor: "gold", padding: 20 },
    boxThree: { backgroundColor: "coral", padding: 15 },
    boxFour: { backgroundColor: "skyblue", padding: 25 },
});
