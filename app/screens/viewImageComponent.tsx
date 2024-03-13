import React, { useRef } from "react";
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../styles/Theme";
import { SafeArea } from "../AreaView";
import { saleBackground } from "../assets";

export default function ViewImages() {
  return (
    <SafeArea>
      <View
        style={{
          backgroundColor: Theme.backgroundGrey,
          width: "100%",
          height: "100%",
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="close"
              color={Theme.primaryColor}
              size={40}
            />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={()=>console.log ("item")}>
            <MaterialCommunityIcons
              name="trash-can-outline"
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: Theme.primaryColor2,
            borderRadius: 8,
            margin: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Theme.primaryColor,
            }}>
            Add to wishlist
          </Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={Theme.primaryColor}
              size={40}
              marginLeft={10}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
}
