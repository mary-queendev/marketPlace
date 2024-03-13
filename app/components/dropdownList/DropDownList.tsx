import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Theme } from "../../styles/Theme";

export interface DropDownList {
  label: string;
  onPress: () => {};
}

export default function DropDownList({ label, onPress }: DropDownList) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          padding: 10,
         borderRadius: 12,
          fontSize: 18,
          marginHorizontal: 14,
          marginVertical: 2,
          backgroundColor: Theme.backgroundGrey
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
