/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import procesorsData from "../mocks/Procesors.json";

export default function Procesor() {
  const { Procesadores } = procesorsData;

  const images = {
    16: require("../img/Category2/1.png"),
    17: require("../img/Category2/2.webp"),
    18: require("../img/Category2/3.png"),
    19: require("../img/Category2/4.png"),
    20: require("../img/Category2/5.webp"),
    21: require("../img/Category2/6.webp"),
    22: require("../img/Category2/7-9.png"),
    23: require("../img/Category2/8.png"),
    24: require("../img/Category2/7-9.png"),
    25: require("../img/Category2/10.webp"),
    26: require("../img/Category2/11.png"),
    27: require("../img/Category2/12.png"),
    28: require("../img/Category2/13.png"),
    29: require("../img/Category2/14.png"),
    30: require("../img/Category2/15.png"),
  };

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.link}>
        Volver al inicio
      </Link>
      <Text style={styles.title}>PROCESADORES</Text>
      <FlatList
        data={Procesadores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={images[item.id]}
              style={[styles.thumbnail]}
              resizeMode="contain"
            />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <Text style={styles.specs}>
                Cores: {item.core_count}, Clock: {item.core_clock} GHz
              </Text>
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
    color: "#4CAF50", // Color verde para el precio
  },
  specs: {
    fontSize: 12,
    color: "#777", // Color gris para las especificaciones
  },
});
