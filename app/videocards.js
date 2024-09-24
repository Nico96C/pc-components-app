/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import videocardsData from "../mocks/VideoCards.json";

export default function Procesor() {
  const { VideoCards } = videocardsData;

  const images = {
    1: require("../img/Category1/1.png"),
    2: require("../img/Category1/2.png"),
    3: require("../img/Category1/3.png"),
    4: require("../img/Category1/4.webp"),
    5: require("../img/Category1/5.png"),
    6: require("../img/Category1/6.png"),
    7: require("../img/Category1/7.png"),
    8: require("../img/Category1/8.png"),
    9: require("../img/Category1/9.png"),
    10: require("../img/Category1/10.png"),
    11: require("../img/Category1/11.png"),
    12: require("../img/Category1/12.png"),
    13: require("../img/Category1/13.png"),
    14: require("../img/Category1/14.png"),
    15: require("../img/Category1/15.png"),
  };

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.link}>
        Volver al inicio
      </Link>
      <Text style={styles.title}>PLACAS DE VIDEO</Text>

      <FlatList
        data={VideoCards} // Usamos el array VideoCards
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* Imagen principal de la placa de video */}
            <Image
              source={images[item.id]} // Asigna la imagen según el ID
              style={styles.thumbnail}
              resizeMode="contain"
            />

            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <Text style={styles.specs}>Chipset: {item.chipset}</Text>
              <Text style={styles.specs}>Memoria: {item.memory} GB</Text>
              <Text style={styles.specs}>Core Clock: {item.core_clock} MHz</Text>
              <Text style={styles.specs}>Boost Clock: {item.boost_clock} MHz</Text>
              <Text style={styles.specs}>Color: {item.color}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 32,
    fontSize: 24,
  },
  link: {
    color: "blue",
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    overflow: "visible",
  },
  thumbnail: {
    width: 125,
    height: 125,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#4CAF50",
  },
  specs: {
    fontSize: 12,
    color: "#777",
  },
});