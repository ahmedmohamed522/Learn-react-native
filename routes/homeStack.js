import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
    Home: {
        screen: Home,
    },
    ReviewDetails: {
        screen: ReviewDetails,
    },
};
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#bbb",
            height: 80,
        },
        headerTintColor: "#333",
    },
});
export default createAppContainer(HomeStack);
