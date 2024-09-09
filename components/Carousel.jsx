/* eslint-disable prettier/prettier */
import Carousel from "react-native-snap-carousel";
import { Text, View, StyleSheet } from "react-native";

export const NewCarousel = () => {
  // Array con títulos en lugar de URLs de imágenes
  const data = [
    { id: 1, title: "Título 1" },
    { id: 2, title: "Título 2" },
    { id: 3, title: "Título 3" },
    { id: 4, title: "Título 4" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={250}
    />
  );
};

// Definición de los estilos
const styles = StyleSheet.create({
  carouselItem: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
