import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { amazonpay } from "../assets";
import { SafeArea } from "../AreaView";
import { AppTextInput } from "../components/textInput";
import { CustomButton } from "../components/buttons";
import { Formik } from "formik";
import * as yup from "yup";
import { AppErrorMessage } from "../components/appErrorMessage";

const validationSchema = yup.object({
  email: yup.string().required().label("Email").email(),
  password: yup.string().required().label("Password").min(4),
  name: yup.string().required().label("Name").min(2),
});

export default function LoginScreen() {
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "",}}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}>
      {({
        handleChange,
        handleSubmit,
        errors,
        values,
        setFieldTouched,
        touched,
      }) => (
        <View style={{ padding: 12, marginTop: 60 }}>
          <Image style={{ alignSelf: "center" }} source={amazonpay} />
          <AppTextInput
            placeholder="Name"
            icon="human"
            autoCapitalize="none"
            autoCorrect={false}
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={() => setFieldTouched("name")}
          />
          <AppErrorMessage error={errors.name} visible={touched.name} />
          
          <AppTextInput
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            autoComplete="email"
            textContentType="emailAddress"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={() => setFieldTouched("email")}
          />
          <AppErrorMessage error={errors.email} visible={touched.email} />

          <AppTextInput
            placeholder="Password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="current-password"
            textContentType="password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={() => setFieldTouched("password")}
          />
          <AppErrorMessage error={errors.password} visible={touched.password} />

          <CustomButton title="Login" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
