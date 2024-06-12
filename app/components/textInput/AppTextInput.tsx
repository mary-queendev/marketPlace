import React, { useState } from "react";
import { Switch, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../../styles/Theme";

export interface AppTextInput extends TextInput {
  icon?: string;
  iconColor?: string;
}

export default function AppTextInput({
  icon,
  iconColor,
  ...otherProps
}: AppTextInput) {
  //   const [on, setOn] = useState();
  return (
    <View>
      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          borderRadius: 12,
          flexDirection: "row",
          width: "100%",
          marginVertical: 10,
          borderWidth: 1,
        }}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={28} color={iconColor} />
        )}
        <TextInput
          style={{ marginLeft: 10, fontSize: 18, flex: 1 }}
          {...otherProps}
        />
      </View>
      {/* <Switch value={on} onValueChange={(newValue) => setOn(newValue)} /> */}
    </View>
  );
}
