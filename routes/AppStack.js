import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import BottomTabNavigator from "./navigators/BottomTabNavigator";
const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="HomeTabs"
            component={BottomTabNavigator}
            options={{
                headerShown: false  // Hide the header if you don't want it
              }}
        />
    </Stack.Navigator>
);

export default AppStack;

