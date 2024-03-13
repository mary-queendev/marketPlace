import React, { useState } from "react";
import { FlatList, TouchableHighlight, View } from "react-native";
import { CustomCard } from "../components/cards";
import { SafeArea } from "../AreaView";
import { ListItem } from "../components/listItem";
import { Theme } from "../styles/Theme";
import ListItemDeleteAction from "../components/listItemDeleteAction/ListItemDeleteAction";
import { ListItemSeperator } from "../components/listItemSeperator";

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
    <SafeArea>
      <FlatList
        data={messages}
        style={{backgroundColor:"white", marginHorizontal: 14, borderRadius: 14}}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
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
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => { setMessages(initialMessages)
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
    </SafeArea>
  );
}

export default MessagesScreen;
