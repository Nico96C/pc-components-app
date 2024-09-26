/* eslint-disable prettier/prettier */
import { Link, Stack } from "expo-router";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import motherboardData from "../mocks/Motherboard.json";
import { useTheme } from "../context/darkmode";

export default function Motherboard() {
  const { Motherboard } = motherboardData;
  const { isDarkMode } = useTheme();

  const images = {
    31: require("../img/Category3/1.png"),
    32: require("../img/Category3/2.png"),
    33: require("../img/Category3/3.png"),
    34: require("../img/Category3/4.png"),
    35: require("../img/Category3/5.png"),
    36: require("../img/Category3/6.png"),
    37: require("../img/Category3/7.png"),
    38: require("../img/Category3/8.png"),
    39: require("../img/Category3/9.png"),
    40: require("../img/Category3/10.png"),
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
          headerTitle: "Motherboard",
          headerRight: () => {},
        }}
      />
      <Text style={styles.title}>Motherboards</Text>
      <FlatList
        data={Motherboard}
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
                Tipo: {item.type}, Socket: {item.socket}, Slots:{" "}
                {item.memory_slots}
              </Text>
              <Text style={styles.description}>{item.text}</Text>
              <Text style={styles.description}>{item["text-2"]}</Text>
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
