import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../../styles/Theme";
import Toast from "react-native-toast-message";

export interface CustomCard {
  title: string;
  subtitle?: string;
  image?: Image;
  onPress?: () => {};
  cart?: boolean;
}

export default function CustomCard({
  title,
  subtitle,
  image,
  onPress,
  cart,
}: CustomCard) {
  const AddToCart = () => {
    Toast.show({
      type: "success",
      text1: "Added to cart!",
      visibilityTime: 2000,
    });
  };
  return (
    <View style={{ marginBottom: 20 }}>
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
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          padding: 20,
          borderBottomEndRadius: 15,
          borderBottomStartRadius: 15,
          alignItems: "center",
        }}
      >
        <View>
          <Text
            numberOfLines={1}
            style={{ fontSize: 20, marginBottom: 6, marginRight: 10 }}
          >
            {title}
          </Text>
          <View>
            <Text
              numberOfLines={2}
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
        {cart && (
          <TouchableOpacity activeOpacity={0.8} onPress={AddToCart}>
            <MaterialCommunityIcons
              // name="cards-heart-outline"
              name="cart"
              color={Theme.primaryColor}
              size={35}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
