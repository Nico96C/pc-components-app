/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";
import { useTheme } from "../context/darkmode";
import PlacasJSON from "../mocks/VideoCards.json";
import ProceJSON from "../mocks/Procesors.json";
import MotherJSON from "../mocks/Motherboard.json";
import PeriJSON from "../mocks/Peripherals.json";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      search(searchTerm);
    }
  };

  const handleInputChange = (text) => {
    setSearchTerm(text);
    handleSearch();
  };

  const search = (term) => {
    const combinedData = [
      ...PlacasJSON.VideoCards,
      ...ProceJSON.Procesadores,
      ...MotherJSON.Motherboard,
      ...PeriJSON.perifericos,
    ];

    const results = combinedData.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.type.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  const slideAnim = React.useRef(
    new Animated.Value(Dimensions.get("window").width)
  ).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : Dimensions.get("window").width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View
      style={[styles.sidebar, { transform: [{ translateX: slideAnim }], backgroundColor: isDarkMode ? "#212121" : "#ffffff" }]}
    >
      <View style={styles.sidebarContent}>
        <Text style={[styles.sidebarText, { Color: isDarkMode ? "#ffffff" : "#212121" }]}>Menú Navegación</Text>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Buscar..."
              value={searchTerm}
              onChangeText={handleInputChange}
            />

            {searchTerm.length > 0 && (
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.resultItem}>
                    <Text>{item.name}</Text>
                  </View>
                )}
              />
            )}
          </View>
        </View>

        <Pressable style={styles.button} onPress={toggleDarkMode}>
          <Text style={styles.buttonText}>
            {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
          </Text>
        </Pressable>

        <Pressable onPress={toggleSidebar} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  sidebarContent: {
    alignItems: "center",
  },
  sidebarText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: "70%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center", // Centra el contenedor verticalmente
    alignItems: "center", // Centra el contenedor horizontalmente
    width: 375,
    padding: 20,
    backgroundColor: "#212121", // Color de fondo opcional
  },
  searchContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5, // Esquinas redondeadas
    padding: 10, // Espaciado interno
  },
  input: {
    height: 25,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default Sidebar;
