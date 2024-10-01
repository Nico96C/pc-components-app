/* eslint-disable prettier/prettier */
import React from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useTheme } from "../context/darkmode";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const slideAnim = React.useRef(
    new Animated.Value(Dimensions.get("window").width * 0.8)
  ).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : Dimensions.get("window").width * 0.8,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View
      style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
    >
      <View style={styles.sidebarContent}>
        <Text style={styles.sidebarText}>Menú Navegación</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            /* Lógica para abrir el carrito */ toggleSidebar();
          }}
        >
          <Text style={styles.buttonText}>Carrito Compra</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            /* Lógica para abrir el modal de inicio de sesión */ toggleSidebar();
          }}
        >
          <Text style={styles.buttonText}>Inicio de Sesión</Text>
        </Pressable>

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
    right: 0,
    top: 0,
    width: "80%",
    height: "100%",
    backgroundColor: "#333",
    zIndex: 10,
  },
  sidebarContent: {
    padding: 20,
    flex: 1,
  },
  sidebarText: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#FF3B30",
    borderRadius: 5,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Sidebar;
