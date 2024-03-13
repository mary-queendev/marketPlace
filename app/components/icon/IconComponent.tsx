import React from "react";
import { View } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

export interface IconComponent {
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

export default function IconComponent({
  name,
  size= 40,
  backgroundColor,
  iconColor="white",
}: IconComponent) {
  return <View style={{
    width: size, height: size, backgroundColor, borderRadius: size / 2, alignItems: "center", justifyContent:"center",
  }}>
   <MaterialCommunityIcons name={name} size={size} color={iconColor}/>
  </View>;
}
