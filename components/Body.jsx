/* eslint-disable prettier/prettier */
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import videocardsData from "../mocks/VideoCards.json";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useTheme } from "../context/darkmode";

export function Body() {
  const { VideoCards } = videocardsData;
  const { addToCart } = useContext(CartContext);
  const { isDarkMode } = useTheme();

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={VideoCards.slice(0, 5)}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2} // Para establecer que los elementos se rendericen en 2 columnas
          renderItem={({ item, index }) => (
            <View style={styles.column}>
              <Pressable
                style={styles.press}
                onPress={() => addToCart(item, 1)}
              >
                <Text style={[{ color: isDarkMode ? "#ffffff" : "#212121" }]}>
                  {item.name}
                </Text>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={[styles.thumbnail]}
                  resizeMode="contain"
                />
              </Pressable>

              {/* Condición para agregar el botón junto al último elemento */}
              {index === 4 && (
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Botón adicional</Text>
                </Pressable>
              )}
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: "100%",
    height: 100,
  },
  press: {
    borderWidth: 1,
    borderColor: "white",
    margin: 10,
    height: 150,
    width: 175,
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#5b0888",
    borderRadius: 25,
    padding: 40,
    height: 150,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
