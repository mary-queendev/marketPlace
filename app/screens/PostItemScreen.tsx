import { Formik } from "formik";
import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";
import { AppTextInput } from "../components/textInput";
import { DropDownList } from "../components/dropdownList";
import { AppPicker } from "../components/customPicker";
import { CustomButton } from "../components/buttons";
import { AppErrorMessage } from "../components/appErrorMessage";
import { Theme } from "../styles/Theme";
import { ImageInput } from "../components/imageInput";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ScreenLayout } from "../components/screenLayout";

const validationSchema = yup.object({
  title: yup.string().required().label("Title").min(3),
  description: yup.string().required().label("Description").min(3),
  price: yup.number().required().label("Price").min(4),
  category: yup.string().required().label("Category").nullable(),
  imageUri: yup.string().required().label("Image"),
});

const category = [
  { label: "Furniture", value: 1 },
  { label: "Houses", value: 2 },
  { label: "Clothes", value: 3 },
];

export default function PostItemScreen() {
  const [selectedCategory, setSelectedCategory] = useState();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const requestPermissions = async () => {
    const result = ImagePicker.getMediaLibraryPermissionsAsync();

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted && !result) {
      alert("You need to enable permissions for camera");
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);
  const showModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{
        title: "",
        price: "",
        description: "",
        category: null,
        imageUri: "",
      }}
      validationSchema={validationSchema}>
      {({
        handleChange,
        handleSubmit,
        errors,
        values,
        setFieldTouched,
        touched,
        setFieldValue,
      }) => (
        <ScreenLayout>
          {/* <ImageInput imageUri={imageUri} setImageUri={setImageUri} /> */}
          <ImageInput
            imageUri={values.imageUri}
            setImageUri={(uri: any) => setFieldValue("imageUri", uri)}
          />
          <AppErrorMessage error={errors.imageUri} visible={touched.imageUri} />

          <AppTextInput
            placeholder="Title"
            autoCapitalize="none"
            value={values.title}
            onChangeText={handleChange("title")}
            onBlur={() => setFieldTouched("title")}
            maxLength={100}
          />
          <AppErrorMessage error={errors.title} visible={touched.title} />
          <AppTextInput
            placeholder="Price"
            autoCapitalize="none"
            value={values.price}
            maxLength={8}
            onChangeText={handleChange("price")}
            keyboardType="numeric"
            onBlur={() => setFieldTouched("price")}
          />
          <AppErrorMessage error={errors.price} visible={touched.price} />

          <TouchableOpacity onPress={showModal}>
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
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  flex: 1,
                  color: Theme.primaryColor,
                }}>
                {selectedCategory ? selectedCategory : "Category"}
              </Text>

              <MaterialCommunityIcons name="chevron-down" size={28} />
            </View>
            {/* <Switch value={on} onValueChange={(newValue) => setOn(newValue)} /> */}
          </TouchableOpacity>
          <AppErrorMessage error={errors.category} visible={touched.category} />

          <AppTextInput
            placeholder="Description"
            autoCapitalize="none"
            value={values.description}
            onChangeText={handleChange("description")}
            onBlur={() => setFieldTouched("description")}
            multiline
            numberOfLines={3}
            maxlength={100}
            textAlignVertical="top"
          />
          <AppErrorMessage
            error={errors.description}
            visible={touched.description}
          />
          <CustomButton title="POST" onPress={handleSubmit} />

          <AppPicker
            placeholder="Category"
            selectedItem={selectedCategory}
            onSelectedItem={(item) => setSelectedCategory(item.label)}
            items={category}
            valueSelected={(item) => setFieldValue("category", item.label)}
            placeholder="Category"
            onChangeText={handleChange("category")}
            onBlur={() => setFieldTouched("category")}
            value={values.category}
            placeholderColor={Theme.primaryColor}
            bottomSheetModalRef={bottomSheetModalRef}
          />
        </ScreenLayout>
      )}
    </Formik>
  );
}
