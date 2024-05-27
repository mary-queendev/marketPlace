import React, { useState } from "react";
import {
  Button,
  Modal,
  Switch,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../../styles/Theme";
import { FlatList } from "react-native";
import { DropDownList } from "../dropdownList";

export interface AppPicker {
  icon?: string;
  iconColor?: string;
  placeholder: string;
  items?: any;
  selectedItem?: any;
  onSelectedItem?: any;
  valueSelected?: any;
  placeholderColor?: string;
}

export default function AppPicker({
  icon,
  iconColor,
  placeholder,
  items,
  selectedItem,
  onSelectedItem,
  valueSelected,
  placeholderColor,
}: AppPicker) {
  //   const [on, setOn] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
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
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              flex: 1,
              color: placeholderColor,
            }}>
            {selectedItem ? selectedItem : placeholder}
          </Text>

          <MaterialCommunityIcons
            name="chevron-down"
            size={28}
            color={iconColor}
          />
        </View>
        {/* <Switch value={on} onValueChange={(newValue) => setOn(newValue)} /> */}
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close modal" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <DropDownList
              label={item.label}
              onPress={() => (
                setModalVisible(false),
                onSelectedItem(item),
                valueSelected(item)
              )}
            />
          )}
        />
      </Modal>
    </>
  );
}
