/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "../context/darkmode";
import { Logo } from "../components/Logo";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import { ModalProvider } from "../context/modalContext";

export default function Layout() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.vista}>
      <ThemeProvider>
        <ModalProvider>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: "#713abe" },
              headerTintColor: "white",
              headerTitle: "",
              headerLeft: () => <Logo />,
              headerRight: () => (
                <Pressable
                  onPress={toggleSidebar}
                  style={styles.hamburgerButton}
                >
                  <Text style={styles.hamburgerText}>☰</Text>
                </Pressable>
              ),
            }}
          />
          <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        </ModalProvider>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  vista: {
    backgroundColor: "#212121",
    flex: 1,
  },
  hamburgerButton: {
    padding: 10,
    marginRight: 10,
  },
  hamburgerText: {
    backgroundColor: "#5b0888",
    borderRadius: 50,
    paddingRight: 9,
    paddingLeft: 9,
    paddingBottom: 3,
    paddingTop: 2,
    fontSize: 30,
    color: "#fff",
  },
});
