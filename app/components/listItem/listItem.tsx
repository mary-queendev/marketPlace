import React from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Theme } from "../../styles/Theme";
import { IconComponent } from "../icon";

export interface ListItem {
  title: string;
  icon?: any;
  titleColor?: string;
  subtitle?: string;
  image?: Image;
  onPress?: () => void;
  ImageComponent?: any;
  renderLeftActions?: () => void;
  renderRightActions?: () => void;
}

export default function ListItem({
  title,
  titleColor,
  subtitle,
  icon,
  image,
  onPress,
  ImageComponent,
  renderLeftActions,
  renderRightActions,
}: ListItem) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
        <TouchableHighlight
          onPress={onPress}
          underlayColor={Theme.backgroundGrey}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              paddingVertical: 16,
              paddingHorizontal: 8,
            }}>
            {ImageComponent}
            {image && (
              <Image
                source={image}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 70,
                }}
              />
            )}

            <View style={{ justifyContent: "center", marginLeft: 10, flex: 1 }}>
              <Text numberOfLines={1}
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: titleColor,
                }}>
                {title}
              </Text>

              {subtitle && (
                <Text numberOfLines={2}
                  style={{
                    fontSize: 16,
                    color: Theme.textGrey,
                  }}>
                  {subtitle}
                </Text>
              )}
            </View>
            {icon && (
              <IconComponent
                name="chevron-right"
                size={30}
                iconColor={Theme.primaryColor}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
