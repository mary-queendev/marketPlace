import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconComponent } from "../components/icon";
import ProfileScreen from "../screens/ProfileScreen";
import ListingsScreen from "../screens/ListingsScreen";
import PostItemScreen from "../screens/PostItemScreen";
import { Theme } from "../styles/Theme";
import { Dimensions, View } from "react-native";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

export default function BottomTab() {
  return (
    <View
      style={{
        width,
        height,
      }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Sell") {
              iconName = focused ? "bag-checked" : "bag-checked";
            } else if (route.name === "Buy") {
              iconName = focused ? "cart" : "cart-outline";
            }

            return (
              <MaterialCommunityIcons name={iconName} size={35} color={color} />
            );
          },
          tabBarActiveTintColor: Theme.primaryColor,
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 14,
            fontWeight: "500",
          },
          tabBarStyle: { height: 75, marginBottom: 25 },
          // tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen
          name="Home"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Buy"
          component={ListingsScreen}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="Sell"
          component={PostItemScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
}
