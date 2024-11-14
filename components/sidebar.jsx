/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from "react";
import {
  Keyboard,
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
import { Link } from "expo-router";
import { CloseButton, DarkMode, LightMode } from "./Icons";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const animatedHeight = useRef(new Animated.Value(110)).current;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    // Cleanup: elimina los listeners cuando el componente se desmonte
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isActive ? 630 : 110,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animatedHeight, isActive]);

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
    setIsActive(text.length > 0);
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
  }, [isVisible, slideAnim]);

  const AnimatedResultItem = ({ item, index }) => {
    const slideAnim = useRef(new Animated.Value(-50)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          delay: index * 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          delay: index * 100,
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
          {item.type === "Mother" && (
            <Text style={styles.itemText}>Socket: {item.socket}</Text>
          )}
          {item.type === "Procesador" && (
            <Text style={styles.itemText}>
              Nucleos: {item.core_count} de {item.core_clock} GHz
            </Text>
          )}
          {item.type === "Periferico" && (
            <Text style={styles.itemText}>Color: {item.color}</Text>
          )}

          <Text style={styles.itemText2}>${item.price}</Text>
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
        <View style={styles.navBar}>
          <Text
            style={[
              styles.sidebarText,
              { color: isDarkMode ? "#ffffff" : "#212121" },
            ]}
          >
            Menú Navegación
          </Text>
          <Pressable
            style={[
              styles.button,
              {
                backgroundColor: isDarkMode ? "#ffffff" : "#212121",
              },
            ]}
            onPress={toggleDarkMode}
          >
            <Text style={styles.buttonText}>
              {isDarkMode ? (
                <LightMode color={"black"} />
              ) : (
                <DarkMode color={"white"} />
              )}
            </Text>
          </Pressable>
        </View>

        <Animated.View
          style={[styles.container, { maxHeight: animatedHeight }]}
        >
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
                  <Link href={`/${item.id}`} asChild>
                    <Pressable
                      onPress={() => {
                        toggleSidebar();
                      }}
                      style={({ pressed }) => [
                        {
                          opacity: pressed ? 0.6 : 1,
                          borderBottomWidth: pressed ? 1 : 1,
                          borderColor: pressed ? "grey" : "transparent",
                          elevation: pressed ? 5 : 0,
                        },
                      ]}
                    >
                      <AnimatedResultItem item={item} index={index} />
                    </Pressable>
                  </Link>
                )}
                style={styles.flatList}
              />
            )}
          </View>
        </Animated.View>
      </View>
      {!isKeyboardVisible && (
        <Pressable onPress={toggleSidebar} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>
            <CloseButton color={"white"} />
          </Text>
        </Pressable>
      )}
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
    marginTop: 25,
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#9d76c1",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  closeButton: {
    position: "absolute",
    bottom: 5,
    backgroundColor: "#5b0888",
    borderRadius: 50,
    alignItems: "center",
    width: 65,
    height: 65,
    justifyContent: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    flex: 1,
    width: 375,
    maxHeight: 110,
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#713abe",
    borderRadius: 5,
  },
  active: {
    backgroundColor: "#713abe",
  },
  searchContainer: {
    alignItems: "center",
    width: "100%",
    maxHeight: 630,
    backgroundColor: "#5b0888",
    borderRadius: 5,
    padding: 10,
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
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    gap: 5,
  },
  thumbnail: {
    width: 75,
    height: 75,
  },
  textContainer: {
    flexDirection: "column",
  },
  itemText: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 5,
  },
  itemText2: {
    fontSize: 18,
    color: "#e5cff7",
    marginBottom: 5,
  },
  flatList: {
    maxHeight: 525,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    marginTop: 25,
    marginBottom: 15,
  },
});

export default Sidebar;
