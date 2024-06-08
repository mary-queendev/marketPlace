import React, { Children } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../styles/Theme";
import { ScreenLayout } from "../components/screenLayout";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { CustomCard } from "../components/cards";

const favouriteItems = [
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
];

const recentItems = [
  {
    title:
      "Female and male jackets available for wear to party work and everywhere",
    price: "N600",
    image: require("../assets/jackets.jpg"),
  },
  {
    title: "Cheap quality Jeans!",
    price: "N600",
    image: require("../assets/jeans.jpg"),
  },
];

export default function ProfileScreen() {
  return (
    <ScreenLayout>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <MaterialIcons name="settings" color={Theme.primaryColor} size={35} />
        <View
          style={{
            // borderWidth: 2,
            borderRadius: 50,
            padding: 6,
            backgroundColor: Theme.primaryColor,
          }}
        >
          <MaterialCommunityIcons name="comment" color="white" size={24} />
        </View>
      </View>
      <Text
        style={{
          color: Theme.primaryColor,
          fontSize: 24,
          marginVertical: 10,
          fontWeight: "500",
        }}
      >
        Hi Mary,
      </Text>
      <View>
        <Text>Your Favourites</Text>
        <View>
          <ScrollView>
            {favouriteItems.map((item, index) => (
              <View key={index}>
                <Image source={item.image} width={50} height={50} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScreenLayout>
  );
}
