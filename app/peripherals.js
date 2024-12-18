/* eslint-disable prettier/prettier */
import { Stack, useNavigation } from "expo-router";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import peripheralData from "../mocks/Peripherals.json";
import { useTheme } from "../context/darkmode";
import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";

export default function Peripheral() {
  const { perifericos } = peripheralData;
  const { isDarkMode } = useTheme();
  const navigation = useNavigation();
  const {
    filters,
    handleChangeMinPrice,
    handleChangeCategory,
    handleSortChange,
    filterProducts,
  } = useContext(FiltersContext);

  const filteredProducts = filterProducts(perifericos);

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
      <View style={styles.filters}>
        <Text style={styles.textColor}>Precio mínimo: ${filters.minPrice}</Text>
        <Slider
          value={filters.minPrice}
          minimumValue={0}
          maximumValue={2000}
          onValueChange={handleChangeMinPrice}
        />

        <Text style={styles.textColor}>Categoría:</Text>
        <Picker
          selectedValue={filters.category}
          onValueChange={handleChangeCategory}
        >
          <Picker.Item label="Todas" value="all" />
          <Picker.Item label="Mouse" value="Mouse" />
          <Picker.Item label="Auricular" value="Auricular" />
          <Picker.Item label="Teclado" value="Teclado" />
        </Picker>

        <Text style={styles.textColor}>Ordenar por precio:</Text>
        <Picker selectedValue={filters.sort} onValueChange={handleSortChange}>
          <Picker.Item label="Por defecto" value="default" />
          <Picker.Item label="Menor a Mayor" value="lowToHigh" />
          <Picker.Item label="Mayor a Menor" value="highToLow" />
        </Picker>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("[id]", { id: item.id });
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.6 : 1,
                borderBottomWidth: pressed ? 1 : 1,
                borderColor: pressed ? "green" : "transparent",
                elevation: pressed ? 5 : 0,
              },
            ]}
          >
            <View style={styles.item}>
              <Image
                source={{ uri: item.thumbnail }}
                style={[styles.thumbnail]}
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
                <Text style={styles.specs}>
                  Tipo: {item.type}, Formato: {item.form}, Microfono:{" "}
                  {item.microphone ? "Sí" : "No"}
                </Text>
              </View>
            </View>
          </Pressable>
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
  filters: {
    backgroundColor: "#713abe",
    padding: 15,
    marginBottom: 5,
    borderRadius: 20,
  },
  textColor: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  }
});
