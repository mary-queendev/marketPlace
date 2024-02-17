import React from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { CustomCard } from "../components/cards";
import { Theme } from "../styles/Theme";
import { SafeArea } from "../AreaView";
import ListItem from "../components/sellerProfile/listItem";
import { IconComponent } from "../components/icon";

export default function OrderPage() {
  return (
    <SafeArea>
    <ScrollView
      style={{ backgroundColor: Theme.backgroundGrey }}
    >
      <View>
        <View style={{ padding: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <CustomCard
              title="Shirts for sale!"
              subtitle="N200"
              image={require("../assets/saleBackground2.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <ListItem
              title="Mary Ogbeide"
              subtitle="8 listings"
              // image={require("../assets/myself.jpg")}
              ImageComponent={<IconComponent name="email"/>}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={{ padding: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <CustomCard
              title="Shirts for sale!"
              subtitle="N200"
              image={require("../assets/saleBackground2.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <ListItem
              title="Mary Ogbeide"
              subtitle="8 listings"
              image={require("../assets/myself.jpg")}
            />
          </TouchableOpacity>
        </View>
      </View>
      
    </ScrollView>
    </SafeArea>
  );
}
