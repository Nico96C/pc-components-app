/* eslint-disable prettier/prettier */
import { useRef, useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  Dimensions,
  Image,
  View,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { Body } from "./Body";
import { useTheme } from "../context/darkmode";
import { useModal } from "../context/modalContext";

const { width: screenWidth } = Dimensions.get("window");

export function Main() {
  const carouselRef = useRef(null);
  const activeIndex = useRef(0);
  const navigation = useNavigation();

  const dummyData = [
    {
      id: 1,
      image: require("../assets/img/Intel.webp"),
      label: "Procesadores",
      route: "/procesors",
    },
    {
      id: 2,
      image: require("../assets/img/mother.png"),
      label: "Motherboards",
      route: "/motherboards",
    },
    {
      id: 3,
      image: require("../assets/img/Placas.webp"),
      label: "Tarjetas de Video",
      route: "/videocards",
    },
    {
      id: 4,
      image: require("../assets/img/Razer.webp"),
      label: "Periféricos",
      route: "/peripherals",
    },
  ];

  const { isDarkMode } = useTheme();
  const { modalVisible, closeModal } = useModal();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const MyCarousel = ({ data }) => {
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />

        <View style={styles.infoContainer}>
          <Pressable
            onPress={() => {
              item.route && router.push(item.route);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ir a {item.label}</Text>
          </Pressable>
        </View>
      </View>
    );

    return (
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={"default"}
        firstItem={activeIndex.current}
        onSnapToItem={(index) => {
          activeIndex.current = index;
        }}
      />
    );
  };

  return (
    <>
      <SafeAreaView
        style={[
          { flex: 1, backgroundColor: isDarkMode ? "#212121" : "#ffffff" },
        ]}
      >
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 12,
          }}
        >
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button2}
              onPress={() => {
                navigation.navigate("procesors");
                toggleSidebar();
              }}
            >
              <Text style={styles.buttonText2}>Procesadores</Text>
            </Pressable>

            <Pressable
              style={styles.button2}
              onPress={() => {
                navigation.navigate("videocards");
                toggleSidebar();
              }}
            >
              <Text style={styles.buttonText2}>Placas de Video</Text>
            </Pressable>

            <Pressable
              style={styles.button2}
              onPress={() => {
                navigation.navigate("peripherals");
                toggleSidebar();
              }}
            >
              <Text style={styles.buttonText2}>Periféricos</Text>
            </Pressable>

            <Pressable
              style={styles.button2}
              onPress={() => {
                navigation.navigate("motherboards");
                toggleSidebar();
              }}
            >
              <Text style={styles.buttonText2}>Motherboards</Text>
            </Pressable>
          </View>

          <MyCarousel data={dummyData} />
          <Body isDarkMode={isDarkMode} />

          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.container}>
                <Text style={styles.title}>Carrito de Compra</Text>
                {/* Aquí puedes mostrar los elementos del carrito */}
                <Button title="Cerrar" onPress={closeModal} />
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#764ABC",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginHorizontal: 20,
    height: 325,
    flex: 1,
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: 225,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#5b0888",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row", // Usar fila para los botones
    flexWrap: "wrap", // Permitir que los botones se envuelvan
    justifyContent: "space-between", // Espacio igual entre botones
    width: "106%", // Asegúrate de que ocupe todo el ancho
    marginBottom: 20, // Espaciado debajo de la grilla
    backgroundColor: "#713abe", // Color de fondo para el contenedor
    padding: 10, // Espaciado interior del contenedor
    borderRadius: 10, // Esquinas redondeadas (opcional)
  },
  button2: {
    backgroundColor: "#5b0888",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 5,
    width: "50%",
    borderWidth: 1,
    borderColor: "#e5cff7",
  },
  buttonText2: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
