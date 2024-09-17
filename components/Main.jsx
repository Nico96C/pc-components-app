/* eslint-disable prettier/prettier */
import { Button, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Main({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 12,
          }}
        >
          <Button  title="Dark Mode" onPress={toggleDarkMode} />
          <Text
            style={[
              { color: isDarkMode ? "#ffffff" : "#212121", marginTop: 10 },
            ]}
          >
            {isDarkMode ? "Modo Oscuro Activado" : "Modo Claro Activado"}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
