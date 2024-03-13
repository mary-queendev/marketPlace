import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeArea } from "../AreaView";
import { ListItem } from "../components/listItem";
import { Theme } from "../styles/Theme";
import { IconComponent } from "../components/icon";
import { ListItemSeperator } from "../components/listItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Theme.primaryColor
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "blue",
    },
  },
];

export default function () {
  return (
    <SafeArea>
      <View style={styles.spaces}>
        <ListItem
          title="Mary Ogbeide"
          titleColor={Theme.primaryColor2}
          subtitle="ogbeidemary15@gmail.com"
          image={require("../assets/myself.jpg")}
        />
      </View>
      <View style={styles.spaces}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <IconComponent
                  name={item.icon.name}
                  size={25}
                  iconColor={item.icon.backgroundColor}
                />
              }
              
            />
          )}
          
        />
      </View>
      <View style={styles.spaces}>
        <ListItem
          title="Logout"
          ImageComponent={
            <IconComponent size={25} name="logout" iconColor={Theme.primaryColor}/>
          }
        />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
    spaces:{
        marginVertical: 12,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 12
    }
})
