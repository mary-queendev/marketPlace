import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import HomePageNavigation from "./homePageNav";
import BottomTab from "./bottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}>
        <Stack.Group>
          <Stack.Screen component={BottomTab} name="BottomTab" />
          <Stack.Screen
            component={HomePageNavigation}
            name="HomePageNavigation"
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
