import React, { useState } from "react";
import { View } from "react-native";
import { Theme } from "../../styles/Theme";
import { CustomButtonProps } from "../buttons/CustomButton";
import CustomText, { CustomTextProps } from "../text/CustomText";
import { IconComponent } from "../icon";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export type screenLayoutOptions = {
  title?: string;
  children: JSX.Element | JSX.Element[];
  initialRouteName?: string;
  headerType?: "landing" | "favourite" | "inner" | "inner-landing"; // breaking change
  hasBottomButton?: boolean;
  bottomButtonPress?: () => void;
  bottomButtonText?: string;
  bottomButtonProps?: CustomButtonProps;
  transparentInner?: boolean;
  bottomButtonTextProps?: CustomTextProps;
  hideCloseButton?: boolean;
  backgroundColor?: string;
  hideBackButton?: boolean;
  backButtonPress?: () => void;
  closeButtonPress?: () => void;
  color?: string;
  activityLoading?: boolean;
  loadingText?: string;
};

export default function ScreenLayout({
  children,
  headerType,
  title,
  backButtonPress,
}: screenLayoutOptions) {
  const navigation = useNavigation();
  const [iconName, setIconName] = useState("cards-heart-outline");
  const toggleFavourite = () => {
    setIconName((prevIconName) =>
      prevIconName === "cards-heart-outline" ? "heart" : "cards-heart-outline"
    );
    if (iconName === "heart") {
      Toast.show({
        type: "success",
        text1: "Added to cart!",
        visibilityTime: 2000,
      });
    }
  };

  return (
    <View>
      {headerType === "inner" && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingTop: 10,
          }}>
          <IconComponent
            name="arrow-back-ios"
            iconColor={Theme.primaryColor}
            // onPress={backButtonPress || navigation.goBack()}
            onPress={() => navigation.goBack()}
          />
          <CustomText
            fontFamily="topic"
            style={{ fontSize: 18, color: Theme.primaryColor2 }}>
            {title}
          </CustomText>

          <IconComponent
            name="close"
            iconColor={Theme.primaryColor}
            // onPress={nav}
          />
        </View>
      )}
      {headerType === "favourite" && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingTop: 10,
          }}>
          <IconComponent
            name="arrow-back-ios"
            iconColor={Theme.primaryColor}
            onPress={() => navigation.goBack()}
          />
          <CustomText
            fontFamily="topic"
            style={{ fontSize: 18, color: Theme.primaryColor2 }}>
            {title}
          </CustomText>

          <MaterialCommunityIcons
            name="cards-heart-outline"
            color={Theme.primaryColor}
            size={40}
            onPress={toggleFavourite}
          />

          {/* <MaterialCommunityIcons
            name={iconName}
            iconColor={Theme.primaryColor}
            onPress={toggleFavourite}
          /> */}
        </View>
      )}
      {headerType === "inner-landing" && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingTop: 10,
          }}>
          <IconComponent
            name="arrow-back-ios"
            iconColor={Theme.primaryColor}
            // onPress={backButtonPress || navigation.goBack()}
            onPress={() => navigation.goBack()}
          />
          <CustomText
            fontFamily="topic"
            style={{ fontSize: 18, color: Theme.primaryColor2 }}>
            {title}
          </CustomText>
          <View />
        </View>
      )}
      <View
        style={{
          backgroundColor: Theme.backgroundGrey,
          paddingHorizontal: 20,
          marginTop: 20,
          // marginBottom: 20,
        }}>
        {children}
      </View>
    </View>
  );
}
