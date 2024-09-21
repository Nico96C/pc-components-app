/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "../context/darkmode";

export default function Layout() {
  return (
    <View style={styles.vista}>
      <ThemeProvider>
        <Stack />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  vista: {
    backgroundColor: "#212121",
    flex: 1,
  },
  texto: {
    color: "#ffffff",
  },
});
