/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
  Image,
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

  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("window").width)
  ).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : Dimensions.get("window").width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  // Animaciones en cascada para los resultados
  const AnimatedResultItem = ({ item, index }) => {
    const slideAnim = useRef(new Animated.Value(-50)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          delay: index * 100, // Retraso en cascada
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          delay: index * 100, // Mismo retraso para la opacidad
          useNativeDriver: true,
        }),
      ]).start();
    }, [slideAnim, opacityAnim, index]);

    return (
      <Animated.View
        style={[
          styles.resultItem,
          {
            transform: [{ translateY: slideAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.name}</Text>

          {item.type === "Placa de Video" && (
            <Text style={styles.itemText}>Chipset: {item.chipset}</Text>
          )}
        </View>
      </Animated.View>
    );
  };

  return (
    <Animated.View
      style={[
        styles.sidebar,
        {
          transform: [{ translateX: slideAnim }],
          backgroundColor: isDarkMode ? "#212121" : "#ffffff",
        },
      ]}
    >
      <View style={styles.sidebarContent}>
        <Text
          style={[
            styles.sidebarText,
            { color: isDarkMode ? "#ffffff" : "#212121" },
          ]}
        >
          Menú Navegación
        </Text>
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
                renderItem={({ item, index }) => (
                  <AnimatedResultItem item={item} index={index} />
                )}
                style={styles.flatList}
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
    justifyContent: "flex-start",
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
    width: 375,
    maxHeight: 350,
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#713abe",
  },
  searchContainer: {
    alignItems: "center",
    width: "100%",
    maxHeight: 300,
    backgroundColor: "#5b0888",
    borderRadius: 5,
    padding: 15,
  },
  input: {
    height: 30,
    width: "90%",
    borderColor: "#e5cff7",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
  },
  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: 315,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  itemText: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 5,
  },
  flatList: {
    maxHeight: 550,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Sidebar;
