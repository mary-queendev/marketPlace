import React from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { CustomCard } from "../components/cards";
import { Theme } from "../styles/Theme";
import { SafeArea } from "../AreaView";
import ListItem from "../components/listItem/listItem";
import { IconComponent } from "../components/icon";

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
];

export default function ListingsScreen() {
  return (
    <SafeArea>
      <ScrollView style={{ backgroundColor: Theme.backgroundGrey }}>
        <View>
          <View style={{ padding: 20 }}>
            <FlatList
              data={saleItems}
              renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={0.8}>
                  <CustomCard
                    title={item.title}
                    subtitle={item.price}
                    image={item.image}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}
