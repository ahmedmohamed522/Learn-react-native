import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./style/global";
import { useFonts } from "expo-font";
import Navigator from "./routes/homeStack";

export default function App() {
    const [fontsLoaded] = useFonts({
        "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Navigator />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
