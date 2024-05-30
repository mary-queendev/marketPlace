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
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageInput } from "./app/components/imageInput";

const category = [
  { label: "Furniture", value: 1 },
  { label: "Houses", value: 2 },
  { label: "Clothes", value: 3 },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <View style={{ flex: 1 }}>
      <SafeArea>
        <GestureHandlerRootView>
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
          <PostItemScreen />
        </GestureHandlerRootView>
      </SafeArea>
    </View>
  );
}
