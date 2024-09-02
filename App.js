import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.container,
          { backgroundColor: isDarkMode ? "#212121" : "#ffffff" },
        ]}
      >
        <StatusBar style="auto" />
        <Text
          style={[styles.text, { color: isDarkMode ? "#ffffff" : "#212121" }]}
        >
          {isDarkMode ? "Modo Oscuro Activado" : "Modo Claro Activado"}
        </Text>
        <Button title="Toggle Dark Mode" onPress={toggleDarkMode} />
        <Main isDarkMode={isDarkMode} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
