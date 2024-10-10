/* eslint-disable prettier/prettier */
import { Link, Stack } from "expo-router";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import videocardsData from "../mocks/VideoCards.json";
import { useTheme } from "../context/darkmode";

export default function Videocard() {
  const { VideoCards } = videocardsData;
  const { isDarkMode } = useTheme();

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
          headerTitle: "Placas de Video",
          headerRight: () => {},
        }}
      />
      <Text
        style={[styles.title, { color: isDarkMode ? "#ffffff" : "#212121" }]}
      >
        FILTROS
      </Text>

      <FlatList
        data={VideoCards} // Usamos el array VideoCards
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* Imagen principal de la placa de video */}
            <Image
              source={{ uri: item.thumbnail }}
              style={styles.thumbnail}
              resizeMode="contain"
            />

            <View style={styles.details}>
              <Text
                style={[
                  styles.name,
                  { color: isDarkMode ? "#ffffff" : "#212121" },
                ]}
              >
                {item.name}
              </Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <Text style={styles.specs}>Chipset: {item.chipset}</Text>
              <Text style={styles.specs}>Memoria: {item.memory} GB</Text>
              <Text style={styles.specs}>
                Core Clock: {item.core_clock} MHz
              </Text>
              <Text style={styles.specs}>
                Boost Clock: {item.boost_clock} MHz
              </Text>
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
