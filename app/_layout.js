/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function Layout() {
    return(
        <View style={styles.vista}>
            <Stack />
        </View>
    )
}

const styles = StyleSheet.create({
    vista: {
      backgroundColor: "#212121",
      flex: 1,
    },
    texto: {
        color: "#ffffff",
    }
  });