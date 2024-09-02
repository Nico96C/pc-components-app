/* eslint-disable prettier/prettier */
import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View style={styles.cage}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cage: {
    flex: 1,
    backgroundColor: "black",
  },
});