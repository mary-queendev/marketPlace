import React from "react";
import { View } from "react-native";
import { Theme } from "../../styles/Theme";

export default function ScreenLayout({ children }) {
  return (
    <View
      style={{
        backgroundColor: Theme.backgroundGrey,
        paddingHorizontal: 20,
        marginTop: 20,
        // marginBottom: 20,
      }}>
      {children}
    </View>
  );
}
