/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import procesorsData from "../mocks/Procesors.json";
import peripheralData from "../mocks/Peripherals.json";
import videocardsData from "../mocks/VideoCards.json";
import motherboardData from "../mocks/Motherboard.json";
import { useTheme } from "../context/darkmode";

export default function Detail() {
  const { id } = useLocalSearchParams(); // Obtienes el id de los parámetros de la URL

  // Simulación de obtener un producto por id
  const product = getProductById(id); // Aquí usarías una función para obtener el producto por ID

  const { isDarkMode } = useTheme();

  if (!product) {
    return <Text>Producto no encontrado</Text>;
  }

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? "#212121" : "#ffffff" },
    ]}>
      <Link href="/" style={[styles.title, { color: isDarkMode ? "#ffffff" : "#212121" }]}>Volver</Link>
      <View>
        <Text style={[styles.title, { color: isDarkMode ? "#ffffff" : "#212121" }]}>Detalles del producto:</Text>
        <Text style={[styles.title, { color: isDarkMode ? "#ffffff" : "#212121" }]}>Nombre: {product.name}</Text>
        {/* Puedes agregar más detalles del producto */}
        {product.category === "videocard" && (
          <Text style={[styles.title, { color: isDarkMode ? "#ffffff" : "#212121" }]}>Chipset: {product.chipset}</Text>
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
    alignItems: "flex-start",
  }
});
