import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../screens/LandingPage";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
