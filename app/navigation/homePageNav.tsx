import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import BottomTab from "./bottomTabNavigation";

const Stack = createStackNavigator();

function HomePageNavigation() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      <Stack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        // options={{
        //   headerTitle: "Messages",
        //   headerStyle: { alignItems:"center", justifyContent:""},
        // }}
      />
    </Stack.Navigator>
  );
}

export default HomePageNavigation;
