import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import ProductDetailsScreen from "../screens/product/ProductDetailsScreen";
import UserProfileScreen from "../screens/user/UserProfileScreen";

const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false  // Hide the header if you don't want it
              }}
        />
        <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{
                headerShown: false  // Hide the header if you don't want it
              }}
        />
        <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{
                headerShown: false  // Hide the header if you don't want it
              }}
        />
    </Stack.Navigator>
);

export default AppStack;

