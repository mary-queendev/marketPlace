import React, { useCallback, useMemo, useRef, useState } from "react";
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
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface AppPicker {
  icon?: string;
  iconColor?: string;
  placeholder: string;
  items?: any;
  selectedItem?: any;
  bottomSheetModalDisplay: any;
  onSelectedItem?: any;
  valueSelected?: any;
  placeholderColor?: string;
}

export default function AppPicker({
  bottomSheetModalDisplay,
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

  const snapPoints = useMemo(() => ["50%", "50%"], []);
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const closeModal = () => {
    bottomSheetModalDisplay.current?.dismiss();
    console.log("i got here");
  };
  const renderbackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} opacity={0.7} pressBehavior="close" />
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalDisplay}
      backdropComponent={renderbackdrop}
      snapPoints={snapPoints}>
      <View style={{ margin: 20, borderRadius: 20 }}>
        <Button
          color={Theme.primaryColor}
          title="close modal"
          onPress={closeModal}
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.value.toString()}
        renderItem={({ item }) => (
          <DropDownList
            label={item.label}
            onPress={() => {
              closeModal();
              onSelectedItem(item);
              valueSelected(item);
              console.log(item.label);
            }}
          />
        )}
      />
    </BottomSheetModal>
  );
}
