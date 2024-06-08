import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../styles/Theme";
import { SafeArea } from "../AreaView";
import { saleBackground } from "../assets";
import Toast from "react-native-toast-message";

export default function ViewImages() {
  const [iconName, setIconName] = useState("cards-heart-outline");
  const toggleFavourite = () => {
    setIconName((prevIconName) =>
      prevIconName === "cards-heart-outline" ? "heart" : "cards-heart-outline"
    );
  };

  const AddToCart = () => {
    Toast.show({
      type: "success",
      text1: "Added to cart!",
      visibilityTime: 2000,
    });
  };

  return (
    <SafeArea>
      <View
        style={{
          backgroundColor: Theme.backgroundGrey,
          width: "100%",
          height: "100%",
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="close"
              color={Theme.primaryColor}
              size={40}
            />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={toggleFavourite}>
            <MaterialCommunityIcons
              name={iconName}
              color={Theme.primaryColor}
              size={40}
            />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <Image
            source={saleBackground}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 1,
              borderRadius: 10,
              marginVertical: 30,
            }}
            resizeMode="stretch"
          />

          <View>
            <Image
              source={saleBackground}
              style={{
                width: "100%",
                height: undefined,
                aspectRatio: 1,
                borderRadius: 10,
                marginVertical: 30,
              }}
              resizeMode="stretch"
            />
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.5} onPress={AddToCart}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: Theme.primaryColor2,
              borderRadius: 8,
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: Theme.primaryColor,
              }}
            >
              Add to cart
            </Text>

            <MaterialCommunityIcons
              // name="cards-heart-outline"
              name="cart"
              color={Theme.primaryColor}
              size={40}
              marginLeft={10}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
}
