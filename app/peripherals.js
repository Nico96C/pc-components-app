/* eslint-disable prettier/prettier */
import { Link, Stack } from "expo-router";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import peripheralData from "../mocks/Peripherals.json";
import { useTheme } from "../context/darkmode";

export default function Peripheral() {
  const { perifericos } = peripheralData;
  const { isDarkMode } = useTheme();

  const images = {
    41: require("../img/Category4/1.png"),
    42: require("../img/Category4/2.png"),
    43: require("../img/Category4/3.png"),
    44: require("../img/Category4/4.png"),
    45: require("../img/Category4/5.webp"),
    46: require("../img/Category4/6.png"),
    47: require("../img/Category4/7.png"),
    48: require("../img/Category4/8.png"),
    49: require("../img/Category4/9.png"),
    50: require("../img/Category4/10.png"),
    51: require("../img/Category4/11.png"),
    52: require("../img/Category4/12.png"),
    53: require("../img/Category4/13.png"),
    54: require("../img/Category4/14.png"),
    55: require("../img/Category4/15.png"),
    56: require("../img/Category4/16.png"),
    57: require("../img/Category4/17.png"),
    58: require("../img/Category4/18.png"),
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
          headerTitle: "Perifericos",
          headerRight: () => {},
        }}
      />
      <Text style={styles.title}>PERIFERICOS</Text>
      <FlatList
        data={perifericos}
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
                Tipo: {item.type}, Formato: {item.form}, Microfono:{" "}
                {item.microphone ? "Sí" : "No"}
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
