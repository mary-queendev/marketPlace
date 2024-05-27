import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri, setImageUri }) {
  const [displayImage, setDisplayImage] = useState(false);

  const handleClick = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        setDisplayImage(true);
      }
    } catch (error) {
      // console.log("error", error);
    }
  };

  const handleDelete = () => {
    Alert.alert(
      "",
      "Do you want to delete this image?",
      [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: () => {
            setDisplayImage(false);
          },
        },
      ],
      { cancelable: false }
    );
    // Delete the message from messages
  };

  return (
    <View style={{ padding: 12 }}>
      {!displayImage && (
        <View
          style={{
            width: 120,
            height: 120,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "grey",
          }}>
          <MaterialCommunityIcons
            name="camera"
            size={60}
            color="grey"
            onPress={handleClick}
          />
        </View>
      )}
      {displayImage && (
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity activeOpacity={0.8} onPress={handleDelete}>
            <Image
              source={{ uri: imageUri }}
              style={{ width: 120, height: 120, borderRadius: 12 }}
            />
          </TouchableOpacity>
          {/* <View
            style={{
              width: 120,
              height: 120,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "grey",
            }}>
            <MaterialCommunityIcons
              name="camera"
              size={60}
              color="grey"
              onPress={handleClick}
            />
          </View> */}
        </View>
      )}
    </View>
  );
}
