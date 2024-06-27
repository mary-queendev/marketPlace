import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesScreen";
import BottomTab from "./bottomTabNavigation";
import ViewImages from "../screens/viewImageComponent";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

function HomePageNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="ViewImages" component={ViewImages} />
    </Stack.Navigator>
  );
}

export default HomePageNavigation;
