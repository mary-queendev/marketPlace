import React, { useState } from "react";
import { FlatList, TouchableHighlight, View } from "react-native";
import { CustomCard } from "../components/cards";
import { SafeArea } from "../AreaView";
import { ListItem } from "../components/sellerProfile";
import { Theme } from "../styles/Theme";
import ListItemDeleteAction from "../components/listItemDeleteAction/ListItemDeleteAction";

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
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={()=>{}}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          /> 
        )}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ width: "100%", height: 1, backgroundColor: "black" }}
            />
          );
        }}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/saleBackground.jpg"),
            },
          ]);
        }}
      />
    </SafeArea>
  );
}

export default MessagesScreen;
