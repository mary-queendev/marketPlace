import React from "react";
import { View } from "react-native";
import { Theme } from "../../styles/Theme";

export default function ScreenLayout({ children }) {
  return (
    <View style={{ backgroundColor: Theme.backgroundGrey, padding: 20 }}>
      {children}
    </View>
  );
}
