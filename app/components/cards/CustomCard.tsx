import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../../styles/Theme";

export interface CustomCard {
  title: string;
  subtitle?: string;
  image?: Image;
  onPress?:()=>{};
}

export default function CustomCard({ title, subtitle, image, onPress }: CustomCard) {
  return (
    <View>
      <View>
        <Image
          source={image}
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderBottomEndRadius: 15,
          borderBottomStartRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20, marginBottom: 6 }}>{title}</Text>
        <Text
          style={{
            fontSize: 18,
            color: Theme.primaryColor,
            fontWeight: "bold",
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
