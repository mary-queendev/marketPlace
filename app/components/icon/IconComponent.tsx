import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export interface IconComponent {
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
  Icon?: any;
  onPress?: any;
}

export default function IconComponent({
  name,
  size = 40,
  backgroundColor,
  iconColor = "white",
  Icon = MaterialCommunityIcons && MaterialIcons,
  onPress,
}: IconComponent) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Icon name={name} size={size} color={iconColor} onPress={onPress} />
    </View>
  );
}
