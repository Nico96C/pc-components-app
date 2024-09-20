import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import { useState } from "react";

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
        <Main isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
  card: {
    backgroundColor: "#212121",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    marginHorizontal: 20,
    height: 400,
    overflow: "hidden",
    resizeMode: "cover",
  },
});
