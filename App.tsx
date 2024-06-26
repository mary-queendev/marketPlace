import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeArea } from "./app/AreaView";
import LoginScreen from "./app/screens/LoginScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LandingPage from "./app/screens/LandingPage";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import PostItemScreen from "./app/screens/PostItemScreen";
import ViewImages from "./app/screens/viewImageComponent";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./app/navigation/bottomTabNavigation";
import { useFonts } from "@expo-google-fonts/playfair-display";
import HomePageNavigation from "./app/navigation/homePageNav";
import StackNavigation from "./app/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: "green",
        borderLeftColor: "green",
      }}
      text1Style={{
        fontSize: 20,
        fontWeight: "500",
        color: "white",
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Regular": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Bold": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf"),
    "PlayfairDisplay-Italic": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf"),
    "PlayfairDisplay-BoldItalic": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf"),
    "PlayfairDisplay-Medium": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf"),
    "PlayfairDisplay-SemiBold": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf"),
    "Merriweather-Black": require("./assets/fonts/Merriweather/Merriweather-Black.ttf"),
    "Merriweather-Regular": require("./assets/fonts/Merriweather/Merriweather-Regular.ttf"),
    "Merriweather-Bold": require("./assets/fonts/Merriweather/Merriweather-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeArea>
          {/* <LoginScreen /> */}
          {/* <AccountScreen /> */}
          {/* <LandingPage /> */}
          {/* <ListingsScreen /> */}
          {/* <MessagesScreen /> */}
          {/* <PostItemScreen /> */}
          {/* <ViewImages /> */}
          <StackNavigation />
          <Toast config={toastConfig} />
        </SafeArea>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
