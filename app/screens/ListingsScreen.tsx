import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomCard } from "../components/cards";
import { Theme } from "../styles/Theme";
import { SafeArea } from "../AreaView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItem from "../components/listItem/listItem";
import { IconComponent } from "../components/icon";
import { ScreenLayout } from "../components/screenLayout";

const saleItems = [
  {
    title: "Shirts for sale!",
    price: "N200",
    image: require("../assets/tie.jpg"),
  },
  {
    title: "Cheap quality Jeans!",
    price: "N600",
    image: require("../assets/jeans.jpg"),
  },
  {
    title:
      "Female and male jackets available for wear to party work and everywhere",
    price: "N600",
    image: require("../assets/jackets.jpg"),
  },
];

export default function ListingsScreen(navigation) {
  return (
    <ScreenLayout>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}>
        <TextInput
          placeholder="Search here..."
          style={{
            borderWidth: 2,
            paddingHorizontal: 15,
            maxHeight: 40,

            borderRadius: 10,
            borderColor: "grey",
            width: "80%",
            alignItems: "center",
          }}></TextInput>
        <View
          style={{
            borderRadius: 50,
            padding: 6,
            backgroundColor: Theme.primaryColor,
          }}>
          <MaterialCommunityIcons name="cart" color="white" size={28} />
        </View>
      </View>
      <View style={{ marginTop: 20, marginBottom: 100 }}>
        <FlatList
          data={saleItems}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8}>
              <CustomCard
                title={item.title}
                subtitle={item.price}
                image={item.image}
                cart
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenLayout>
  );
}
