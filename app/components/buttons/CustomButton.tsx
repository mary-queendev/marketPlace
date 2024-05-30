import React from "react";
import { Theme } from "../../styles/Theme";
import { TouchableOpacity, Text } from "react-native";

export interface CustomButton {
  title: string;
  borderColor?: string | Theme;
  height?: number;
  width?: number;
  backgroundColor?: string | Theme;
  padding?: number;
  onPress?: () => void;
  borderRadius?: number;
  borderWidth?: number;
}

export default function CustomButton({
  title,
  borderColor = Theme.primaryColor,
  height,
  width,
  backgroundColor = Theme.primaryColor,
  padding = 12,
  onPress,
  borderRadius = 10,
  borderWidth = 2,
}: CustomButton) {
  return (
    <TouchableOpacity
      style={{
        borderWidth: borderWidth,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius,
        padding: padding,
        marginVertical: 8,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      }}
      onPress={onPress}>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
