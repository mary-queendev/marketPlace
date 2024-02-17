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
   
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
});
