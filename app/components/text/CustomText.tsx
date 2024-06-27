import { useFonts } from "@expo-google-fonts/playfair-display";
import React from "react";
import { Text, TextProps } from "react-native";
export interface CustomTextProps extends TextProps {
  text?: string;
  fontFamily?: "subTopic" | "topic" | "regular";
}

const CustomText = ({
  children,
  style,
  fontFamily,
  ...props
}: CustomTextProps) => {
  let customFonts = "Merriweather-Regular"; // Default font

  if (fontFamily === "subTopic") {
    customFonts = "Merriweather-Bold";
  } else if (fontFamily === "topic") {
    customFonts = "Merriweather-Black";
  } else if (fontFamily === "regular") {
    customFonts = "Merriweather-Regular";
  }

  return (
    <Text style={[{ fontFamily: customFonts }, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
