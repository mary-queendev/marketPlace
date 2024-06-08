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
import ProfileScreen from "./app/screens/ProfileScreen";

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
  return (
    <SafeArea>
      {/* <LoginScreen /> */}
      {/* <AccountScreen /> */}
      {/* <LandingPage /> */}
      {/* <ListingsScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <PostItemScreen /> */}
      {/* <ViewImages /> */}
      <ProfileScreen />
      <Toast config={toastConfig} />
    </SafeArea>
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
