import React, { useState } from "react";
import { FlatList, TouchableHighlight, View } from "react-native";
import { CustomCard } from "../components/cards";
import { SafeArea } from "../AreaView";
import { ListItem } from "../components/listItem";
import { Theme } from "../styles/Theme";

import ListItemDeleteAction from "../components/listItemDeleteAction/ListItemDeleteAction";
import { ListItemSeperator } from "../components/listItemSeperator";
import { ScreenLayout } from "../components/screenLayout";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/myself.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/saleBackground.jpg"),
    // image: { saleBackground },
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <ScreenLayout>
      <FlatList
        data={messages}
        style={{
          backgroundColor: "white",
          borderRadius: 14,
        }}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <View style={{ gap: 10 }}>
            <ListItem
              title={item.title}
              subtitle={item.description}
              icon
              image={item.image}
              onPress={() => {}}
              renderLeftActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          </View>
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
          // setMessages([
          //   {
          //     id: 2,
          //     title: "T2",
          //     description: "D2",
          //     image: require("../assets/saleBackground.jpg"),
          //   },
          // ]);
        }}
      />
    </ScreenLayout>
  );
}

export default MessagesScreen;
