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
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface AppPicker {
  icon?: string;
  iconColor?: string;
  placeholder: string;
  items?: any;
  selectedItem?: any;
  bottomSheetModalRef: any;
  onSelectedItem?: any;
  valueSelected?: any;
  placeholderColor?: string;
}

export default function AppPicker({
  bottomSheetModalRef,
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

  const snapPoints = useMemo(() => ["30%", "50%"], []);

  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <>
      {/* <Modal visible={modalVisible} animationType="slide"> */}
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
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
                  onPress={() => (
                    closeModal(), onSelectedItem(item), valueSelected(item)
                  )}
                />
              )}
            />
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}
