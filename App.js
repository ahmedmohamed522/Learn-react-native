import Home from "./screens/Home";
import { useFonts } from "expo-font";

export default function App() {
    const [loaded] = useFonts({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return <Home />;
}
