import { SafeAreaView, View, StyleSheet } from "react-native";
import LandingPage from "./app/screens/LandingPage";
import { CustomCard } from "./app/components/cards";
import OrderPage from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { IconComponent } from "./app/components/icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { AppTextInput } from "./app/components/textInput";
import { SafeArea } from "./app/AreaView";
import { AppPicker } from "./app/components/customPicker";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import PostItemScreen from "./app/screens/PostItemScreen";

const category = [
  { label: "Furniture", value: 1 },
  { label: "Houses", value: 2 },
  { label: "Clothes", value: 3 },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <SafeArea>
      {/* <LandingPage/> */}
      {/* <ListingsScreen/> */}
      {/* <ViewImages/> */}
      {/* <MessagesScreen/> */}
      {/* <IconComponent name='email'/> */}
      {/* <AccountScreen/> */}
      {/* <AppTextInput icon='email' placeholder= "Mary Ogbeide" iconColor='blue'/> */}
      {/* <AppPicker
        selectedItem={selectedCategory}
        onSelectedItem={item=> setSelectedCategory(item)}
        items={category}
        placeholder="Category"
        icon="apps"
      /> */}
      {/* <LoginScreen/> */}
      <PostItemScreen/>
    </SafeArea>
  );
}
