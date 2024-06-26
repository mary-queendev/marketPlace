import { Platform, StatusBar, StyleSheet } from "react-native";

import { Theme } from "./styles/Theme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export function SafeArea({ children }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.backgroundGrey,
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
});
