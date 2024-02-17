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

export interface ListItem {
  title: string;
  subtitle?: string;
  image?: Image;
  onPress?: () => void;
  ImageComponent?: any;
  renderRightActions?: () => void;
}

export default function ListItem({
  title,
  subtitle,
  image,
  onPress,
  ImageComponent,
  renderRightActions,
}: ListItem) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          onPress={onPress}
          underlayColor={Theme.backgroundGrey}>
          <View
            style={{
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

            <View style={{ justifyContent: "center", marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: Theme.primaryColor2,
                }}>
                {title}
              </Text>

              {subtitle && <Text
                style={{
                  fontSize: 16,
                  color: Theme.textGrey,
                }}>
                {subtitle}
              </Text>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
