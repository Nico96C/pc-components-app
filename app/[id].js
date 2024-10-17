/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import procesorsData from "../mocks/Procesors.json";
import peripheralData from "../mocks/Peripherals.json";
import videocardsData from "../mocks/VideoCards.json";
import motherboardData from "../mocks/Motherboard.json";
import { useTheme } from "../context/darkmode";
import { useState } from "react";

export default function Detail() {
  const { id } = useLocalSearchParams(); // Obtienes el id de los parámetros de la URL

  // Simulación de obtener un producto por id
  const product = getProductById(id);

  const { isDarkMode } = useTheme();
  const [imageSelect, setImageSelect] = useState(product.thumbnail);

  if (!product) {
    return <Text>Producto no encontrado</Text>;
  }

  const handleImagePress = (imageUri) => {
    setImageSelect(imageUri);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#212121" : "#ffffff" },
      ]}
    >
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerTitle: `${product.name}`,
          headerRight: () => {},
        }}
      />
      <View>
        <View style={[styles.containIMG]}>
          <Image source={{ uri: imageSelect }} style={[styles.thumbnail]} />
        </View>

        <View style={styles.horizontalContainer}>
          <Pressable
            style={styles.additionalImageContainer}
            onPress={() => handleImagePress(product.thumbnail)}
          >
            <Image
              source={{ uri: product.thumbnail }}
              style={styles.additionalImage}
            />
          </Pressable>

          {product["img-1"] && (
            <Pressable
              style={styles.additionalImageContainer}
              onPress={() => handleImagePress(product["img-1"])}
            >
              <Image
                source={{ uri: product["img-1"] }}
                style={styles.additionalImage}
              />
            </Pressable>
          )}

          {product["img-2"] && (
            <Pressable
              style={styles.additionalImageContainer}
              onPress={() => handleImagePress(product["img-2"])}
            >
              <Image
                source={{ uri: product["img-2"] }}
                style={styles.additionalImage}
              />
            </Pressable>
          )}
        </View>

        <Text
          style={[styles.title, { color: isDarkMode ? "#ffffff" : "#212121" }]}
        >
          Nombre: {product.name}
        </Text>

        {product.type === "Placa de Video" && (
          <Text
            style={[
              styles.title,
              { color: isDarkMode ? "#ffffff" : "#212121" },
            ]}
          >
            Chipset: {product.chipset}
          </Text>
        )}
      </View>
    </View>
  );
}

const getProductById = (id) => {
  // Combinar los productos de todos los mocks en un solo array
  const allProducts = [
    ...videocardsData.VideoCards,
    ...procesorsData.Procesadores,
    ...motherboardData.Motherboard,
    ...peripheralData.perifericos,
  ];

  // Asegúrate de que el ID esté en el mismo formato (número en este caso)
  return allProducts.find((product) => product.id === parseInt(id));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  thumbnail: {
    width: 375,
    height: 375,
    marginRight: 10,
    objectFit: "contain",
  },
  containIMG: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    width: 400,
    height: 400,
    marginTop: 7,
    marginBottom: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  additionalImageContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  additionalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {},
});
