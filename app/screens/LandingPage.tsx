import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { Theme } from "../styles/Theme";
import { CustomButton } from "../components/buttons";

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/saleBackground.jpg")}
        resizeMode="cover"
        blurRadius={10}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            position: "absolute",
            top: "10%",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image source={require("../assets/amazonpay.png")} />
          <Text style={{ fontWeight: "600", fontStyle: "italic", fontSize:20 }}>
            Sell what you don't need
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            padding: 10,
            marginBottom: 20,
          }}
        >
          <CustomButton title="LOGIN"/>
          <CustomButton
            title="REGISTER"
            backgroundColor={Theme.primaryColor2}
            borderColor={Theme.primaryColor2}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
