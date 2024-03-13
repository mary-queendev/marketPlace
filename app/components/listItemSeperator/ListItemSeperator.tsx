import React from "react";
import { View } from "react-native";
import { Theme } from "../../styles/Theme";

export default function ListItemSeperator(){
    return (
        <View
          style={{ width: "100%", height: 2, backgroundColor: Theme.backgroundGrey }}
        />
      );
}