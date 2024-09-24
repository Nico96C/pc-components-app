/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "../context/darkmode";
import { Logo } from "../components/Logo";
import { useState } from "react";

export default function Layout() {
  const [activo, setActivo] = useState(false);

  const handleClick = () => {
      setActivo(!activo);
      console.log("Hamburger button clicked!");
  };

  console.log(handleClick);

  return (
    <View style={styles.vista}>
      <ThemeProvider>
        <Stack 
          screenOptions={{
            headerStyle: { backgroundColor: "#713abe"},
            headerTintColor: "white",
            headerTitle: "",
            headerLeft: () => <Logo />,
            headerRight: () => {},
          }}
        />
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
