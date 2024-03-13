import { SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";
import { Theme } from "./styles/Theme";

export function SafeArea({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: Theme.backgroundGrey,
   flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
});
